// The jukung (v35): a Balinese double-outrigger canoe at anchor off the beach, built in code
// like the plants. One boat, the page's offer: walk down, sail out.
//
//   the shape     a narrow lofted hull with upswept ends, a rub rail, a well with thwarts and
//                 decked ends; two bamboo floats on two arched crossbeams, lashed with the
//                 path's blue cord; a short mast raked forward with the sail rolled round its
//                 yard and hung on the slant; a storm lantern on a crook over the stern; an
//                 anchor line from a strop round the stem.
//   the look      one patched MeshStandardMaterial for all of it, as the path's (trail.js):
//                 the sun from the atmosphere cut by the island's baked shadow and the clouds',
//                 the sky as a light probe, the haze before the tone curve. On top: light off
//                 the sea under the hull, the mast's, yard's and beams' shadows (capsules, no
//                 shadow map), the rail's shadow in the well, and the lantern's own light.
//   on the water  on-water.js: the boat's shadow in the water, its reflection, the lantern's
//                 path. The sea's shader is not touched; that is a sheet laid on it.
//   the float     sea.js works out the same sea the GPU draws. Nine points under the hull and
//                 the floats, a plane through them: heave, pitch and roll. The hull rides what
//                 a hull that size can follow; the floats, on their springy beams, are bent the
//                 last few centimetres to the chop under each. The boat lies to its anchor, bow
//                 to the swell, and swings a few degrees. Everything is a function of the clock
//                 alone, so a frozen frame (t=) is the frame the clip passes.
//   the lantern   lit when the sun is low in the west or gone. Its brightness is set on screen
//                 and divided by the exposure, which runs over fifteen stops between noon and
//                 night: a real flame would vanish in one and burn out the other.
//
// The boat's frame: x forward, y up, z to starboard, the origin amidships on the waterline.

import * as THREE from 'three';
import { SKY_PARS, AERIAL_VERT_PACKED, AERIAL_FRAG_PACKED } from '../sky/atmosphere-glsl.js';
import { CLOUD_SHADOW_GLSL } from '../sky/clouds.js';
import { SUN_SHADOW_GLSL } from '../terrain/sun-shadow.js';
import { createSea } from './sea.js';
import { createOnWater } from './on-water.js';

const DEG = Math.PI / 180, TAU = Math.PI * 2;
const clamp = (x, a, b) => Math.min(Math.max(x, a), b);
const sstep = (a, b, x) => { const t = clamp((x - a) / (b - a), 0, 1); return t * t * (3 - 2 * t); };
const sub = (a, b) => [a[0] - b[0], a[1] - b[1], a[2] - b[2]];
const add = (a, b, k = 1) => [a[0] + b[0] * k, a[1] + b[1] * k, a[2] + b[2] * k];
const dot = (a, b) => a[0] * b[0] + a[1] * b[1] + a[2] * b[2];
const cross = (a, b) => [a[1] * b[2] - a[2] * b[1], a[2] * b[0] - a[0] * b[2], a[0] * b[1] - a[1] * b[0]];
const norm = (a) => { const l = Math.hypot(a[0], a[1], a[2]) || 1; return [a[0] / l, a[1] / l, a[2] / l]; };
const lerp3 = (a, b, t) => [a[0] + (b[0] - a[0]) * t, a[1] + (b[1] - a[1]) * t, a[2] + (b[2] - a[2]) * t];
// A smooth curve through points (Catmull-Rom), t from 0 to 1.
const through = (pts) => (t) => {
  const f = clamp(t, 0, 1) * (pts.length - 1), i = Math.min(Math.floor(f), pts.length - 2), u = f - i;
  const p0 = pts[Math.max(i - 1, 0)], p1 = pts[i], p2 = pts[i + 1], p3 = pts[Math.min(i + 2, pts.length - 1)];
  return [0, 1, 2].map((k) => 0.5 * (2 * p1[k] + (p2[k] - p0[k]) * u + (2 * p0[k] - 5 * p1[k] + 4 * p2[k] - p3[k]) * u * u + (3 * p1[k] - p0[k] - 3 * p2[k] + p3[k]) * u * u * u));
};

// ---------------------------------------------------------------- the shape, in numbers

const LEN = 7.0, HALF = LEN / 2;       // hull length (m)
const BEAM = 0.36;                     // half its width
const DRAFT = 0.22;
const SHEER = { mid: 0.46, bow: 0.50, bowP: 3.0, stern: 0.36, sternP: 3.2 };
// u runs -1 (stern) to 1 (bow). The sheer and the keel sweep up to meet at both ends.
const sheer = (u) => SHEER.mid + (u >= 0 ? SHEER.bow * u ** SHEER.bowP : SHEER.stern * (-u) ** SHEER.sternP);
// (The same in GLSL, for the shaders that need the hull's lines.)
const SHEER_GLSL = `${SHEER.mid.toFixed(4)} + (u >= 0.0 ? ${SHEER.bow.toFixed(4)} * pow(u, ${SHEER.bowP.toFixed(4)}) : ${SHEER.stern.toFixed(4)} * pow(-u, ${SHEER.sternP.toFixed(4)}))`;
const keel = (u) => -DRAFT + (u >= 0 ? 1.12 * u ** 4.2 : 0.99 * (-u) ** 4.6);
const halfBeam = (u) => BEAM * Math.pow(Math.max(1 - Math.abs(u) ** 2.4, 0), 0.7) + 0.012;
const railIn = (u) => Math.min(0.042, 0.55 * halfBeam(u));
const WELL = { aft: [-0.62, -0.56], fore: [0.44, 0.50], depth: 0.215 };
const well = (u) => sstep(WELL.aft[0], WELL.aft[1], u) * (1 - sstep(WELL.fore[0], WELL.fore[1], u));
const floorY = (u) => sheer(u) - 0.035 - WELL.depth * well(u);

const ZF = 2.15;                       // the floats, out from the keel
const BEND = [BEAM + 0.02, ZF - 0.1];  // where the beams spring: from the rail out to the float
const FLOAT_Y = 0.012, FLOAT_R = 0.062;
const BEAMS = [{ x: 1.0, sweep: 0.22 }, { x: -1.45, sweep: -0.12 }];
const MAST = { foot: [0.72, floorY(0.72 / HALF), 0], top: [0.80, 2.12, 0], r0: 0.036, r1: 0.027 };
// The yard with the sail rolled round it: tack low at the bow, peak high over the stern.
const YARD = { a: [2.62, 1.0, 0.11], b: [-2.05, 3.02, 0.11] };
const yardAt = (t) => lerp3(YARD.a, YARD.b, t);
const YARD_T = norm(sub(YARD.b, YARD.a));
const YARD_UP = norm(sub([0, 1, 0], YARD_T.map((v) => v * YARD_T[1])));
const rollR = (t) => 0.03 + 0.05 * Math.sin(Math.PI * clamp(t, 0, 1)) ** 0.5;
const TIES = Array.from({ length: 9 }, (_, k) => 0.07 + 0.107 * k);
// The lantern hangs from a crook over the stern, the end nearest the beach: low enough to be
// seen against the sea from the sand, and close over the white of the stern, which it lights.
const CROOK = [[-2.5, sheer(-2.5 / HALF) - 0.02, 0], [-2.6, 0.95, 0], [-2.74, 1.24, 0], [-2.92, 1.34, 0], [-3.06, 1.29, 0]];
const LANTERN_AT = [CROOK[4][0], CROOK[4][1] - 0.012, 0];
const FLAME = [0, -0.285, 0];          // in the lantern's own frame (it hangs from its origin)
// The strop round the stem, and where the anchor line leaves it.
const STROP_X = 3.2;
const FAIR = (() => { const u = STROP_X / HALF; return [STROP_X, keel(u) - 0.012, 0]; })();
const LINE_ANGLE = 20 * DEG;           // the line's slope down to the anchor
const LINE_SAG = 0.3;

// ---------------------------------------------------------------- geometry

// Collects grids, tubes and fans into one geometry. Each vertex carries its part (what it is
// made of), two coordinates for the patterns (a, b: usually metres along and the angle round)
// and how much of the sky it sees.
function createBuilder() {
  const pos = [], nor = [], part = [], rnd = [], idx = [];
  let rand = 0;
  const push = (p, n, id, a, b, ao) => { pos.push(p[0], p[1], p[2]); nor.push(n[0], n[1], n[2]); part.push(id, a, b, ao); rnd.push(rand); };

  // nu x nv points from fn(i, j) -> [x, y, z, a, b, ao]. Normals come from the grid itself, so
  // a surface is smooth across its own rows and hard against the next grid. `facing` says
  // which way is out (tested at `probe`), so nobody has to think about winding.
  function grid(nu, nv, id, fn, { wrap = false, facing = null, probe = null } = {}) {
    const P = new Float64Array(nu * nv * 6), N = new Float64Array(nu * nv * 3);
    for (let i = 0; i < nu; i++) for (let j = 0; j < nv; j++) P.set(fn(i, j), (i * nv + j) * 6);
    const at = (i, j) => (i * nv + j) * 6;
    const missing = [];
    for (let i = 0; i < nu; i++) for (let j = 0; j < nv; j++) {
      const i0 = Math.max(i - 1, 0), i1 = Math.min(i + 1, nu - 1);
      let j0 = j - 1, j1 = j + 1;
      if (wrap) { if (j0 < 0) j0 = nv - 2; if (j1 > nv - 1) j1 = 1; } else { j0 = Math.max(j0, 0); j1 = Math.min(j1, nv - 1); }
      const a = at(i1, j), b = at(i0, j), c = at(i, j1), d = at(i, j0);
      const n = cross([P[a] - P[b], P[a + 1] - P[b + 1], P[a + 2] - P[b + 2]], [P[c] - P[d], P[c + 1] - P[d + 1], P[c + 2] - P[d + 2]]);
      const l = Math.hypot(n[0], n[1], n[2]), q = (i * nv + j) * 3;
      if (l > 1e-14) { N[q] = n[0] / l; N[q + 1] = n[1] / l; N[q + 2] = n[2] / l; } else missing.push([i, j]);
    }
    // (A ring drawn in to a point has no normal of its own: its neighbour's.)
    for (const [i, j] of missing) {
      const from = (i > 0 ? i - 1 : i + 1) * nv + j, q = (i * nv + j) * 3;
      N[q] = N[from * 3]; N[q + 1] = N[from * 3 + 1]; N[q + 2] = N[from * 3 + 2];
    }
    let flip = false;
    if (facing) {
      const [pi, pj] = probe ?? [nu >> 1, wrap ? 0 : nv >> 1], q = at(pi, pj), m = (pi * nv + pj) * 3;
      flip = dot([N[m], N[m + 1], N[m + 2]], facing(P[q], P[q + 1], P[q + 2])) < 0;
    }
    const base = pos.length / 3, sg = flip ? -1 : 1;
    for (let k = 0; k < nu * nv; k++) push([P[k * 6], P[k * 6 + 1], P[k * 6 + 2]], [N[k * 3] * sg, N[k * 3 + 1] * sg, N[k * 3 + 2] * sg], id, P[k * 6 + 3], P[k * 6 + 4], P[k * 6 + 5]);
    for (let i = 0; i < nu - 1; i++) for (let j = 0; j < nv - 1; j++) {
      const a = base + i * nv + j, b = a + nv, c = a + 1, d = b + 1;
      if (flip) idx.push(a, c, b, b, c, d); else idx.push(a, b, c, b, d, c);
    }
  }

  // A flat cap: a centre and a ring, all facing n.
  function fan(id, c, ring, n, a = 0, ao = 1) {
    const base = pos.length / 3;
    push(c, n, id, a, 0, ao);
    ring.forEach((p, k) => push(p, n, id, a, (k / ring.length) * TAU, ao));
    const fwd = dot(cross(sub(ring[0], c), sub(ring[1], c)), n) > 0;
    for (let k = 0; k < ring.length; k++) {
      const p = base + 1 + k, q = base + 1 + ((k + 1) % ring.length);
      if (fwd) idx.push(base, p, q); else idx.push(base, q, p);
    }
  }

  // A tube along curve(t) -> [x, y, z], t from 0 to 1, with radius rad(t, angle). a is metres
  // along (times aScale), b the angle round, from `up`. caps: 1 the start, 2 the end, 3 both.
  function tube(id, curve, rad, nSeg, nSide, { caps = 3, ao = 1, up = [0, 1, 0], aScale = 1 } = {}) {
    const C = [], T = [], S = [0], Ns = [], Bs = [];
    for (let i = 0; i <= nSeg; i++) C.push(curve(i / nSeg));
    for (let i = 0; i <= nSeg; i++) {
      T.push(norm(sub(C[Math.min(i + 1, nSeg)], C[Math.max(i - 1, 0)])));
      if (i) S.push(S[i - 1] + Math.hypot(...sub(C[i], C[i - 1])));
    }
    let n = sub(up, T[0].map((v) => v * dot(up, T[0])));
    if (Math.hypot(...n) < 1e-3) n = sub([1, 0, 0], T[0].map((v) => v * T[0][0]));
    for (let i = 0; i <= nSeg; i++) {
      n = norm(sub(n, T[i].map((v) => v * dot(n, T[i]))));
      Ns.push(n); Bs.push(cross(T[i], n));
    }
    const ring = (i, j) => {
      const ang = (j / nSide) * TAU, r = rad(i / nSeg, ang), c = Math.cos(ang) * r, s = Math.sin(ang) * r;
      return [C[i][0] + c * Ns[i][0] + s * Bs[i][0], C[i][1] + c * Ns[i][1] + s * Bs[i][1], C[i][2] + c * Ns[i][2] + s * Bs[i][2]];
    };
    const mid = nSeg >> 1;
    grid(nSeg + 1, nSide + 1, id, (i, j) => [...ring(i, j), S[i] * aScale, (j / nSide) * TAU, typeof ao === 'function' ? ao(i / nSeg) : ao],
      { wrap: true, probe: [mid, 0], facing: (x, y, z) => [x - C[mid][0], y - C[mid][1], z - C[mid][2]] });
    const aoAt = (t) => (typeof ao === 'function' ? ao(t) : ao);
    if (caps & 1) fan(id, C[0], Array.from({ length: nSide }, (_, j) => ring(0, j)), T[0].map((v) => -v), 0, aoAt(0));
    if (caps & 2) fan(id, C[nSeg], Array.from({ length: nSide }, (_, j) => ring(nSeg, j)), T[nSeg], S[nSeg] * aScale, aoAt(1));
  }

  // Turned on a lathe round a vertical axis through (ox, oz): profile is [radius, y], top down.
  function lathe(id, profile, nSide, { ox = 0, oz = 0, ao = 1 } = {}) {
    const S = [0];
    let steep = 0, best = 0;
    for (let i = 1; i < profile.length; i++) {
      S.push(S[i - 1] + Math.hypot(profile[i][0] - profile[i - 1][0], profile[i][1] - profile[i - 1][1]));
      const dy = Math.abs(profile[i][1] - profile[i - 1][1]) * Math.min(profile[i][0], profile[i - 1][0]);
      if (dy > best) { best = dy; steep = i; }
    }
    grid(profile.length, nSide + 1, id, (i, j) => { const ang = (j / nSide) * TAU; return [ox + profile[i][0] * Math.cos(ang), profile[i][1], oz + profile[i][0] * Math.sin(ang), S[i], ang, ao]; },
      { wrap: true, probe: [steep, 0], facing: (x, y, z) => [x - ox, 0, z - oz] });
  }

  // A board: centre and size along x, y, z. `across`: its planks run athwart.
  function box(id, c, s, { ao = 1, across = 0 } = {}) {
    for (let ax = 0; ax < 3; ax++) for (const sg of [-1, 1]) {
      const u = (ax + 1) % 3, v = (ax + 2) % 3, n = [0, 0, 0];
      n[ax] = sg;
      grid(2, 2, id, (i, j) => { const p = [0, 0, 0]; p[ax] = c[ax] + sg * s[ax] / 2; p[u] = c[u] + (i - 0.5) * s[u]; p[v] = c[v] + (j - 0.5) * s[v]; return [...p, across, 0, ao]; }, { facing: () => n });
    }
  }

  return {
    grid, fan, tube, lathe, box,
    rand(r) { rand = r; },
    geometry() {
      const g = new THREE.BufferGeometry();
      g.setAttribute('position', new THREE.BufferAttribute(new Float32Array(pos), 3));
      g.setAttribute('normal', new THREE.BufferAttribute(new Float32Array(nor), 3));
      g.setAttribute('aPart', new THREE.BufferAttribute(new Float32Array(part), 4));
      g.setAttribute('aRand', new THREE.BufferAttribute(new Float32Array(rnd), 1));
      g.setIndex(new THREE.BufferAttribute(pos.length / 3 > 65535 ? new Uint32Array(idx) : new Uint16Array(idx), 1));
      g.computeBoundingSphere();
      return g;
    },
  };
}

// What each part is made of (the shader's ids).
const HULL = 0, RAIL = 1, INNER = 2, DECK = 3, BAMBOO = 4, BEAMWOOD = 5, CORD = 6, MASTWOOD = 7, SAIL = 8, ROPE = 9, METAL = 10, BRASS = 11, FLAMEID = 12;

function beamCurve(bm) {
  const y0 = sheer(bm.x / HALF) + 0.012 + 0.028, yEnd = FLOAT_Y + FLOAT_R + 0.02;
  return (t) => {
    const z = (2 * t - 1) * (ZF + 0.12), tau = Math.abs(z) / ZF, e = clamp((tau - 0.16) / 0.84, 0, 1);
    return [bm.x + bm.sweep * tau * tau, y0 + 0.14 * Math.sin(Math.PI * e) ** 1.25 - (y0 - yEnd) * e ** 3, z];
  };
}
const beamR = (t) => 0.03 - 0.009 * Math.abs(2 * t - 1);
function floatCurve(sg) {
  return (t) => {
    const x = -2.5 + 5.6 * t;
    return [x, FLOAT_Y + 0.36 * sstep(1.6, 3.1, x) ** 1.5, sg * (ZF - 0.12 * sstep(1.0, 3.1, x))];
  };
}
// (Cut at a node at each end, where the cane closes and narrows.)
const floatR = (t) => { const x = -2.5 + 5.6 * t; return FLOAT_R * (1 - 0.32 * sstep(1.4, 3.1, x)) * (1 - 0.1 * sstep(-1.5, -2.5, x)) * (0.62 + 0.38 * sstep(0, 0.025, t)) * (0.7 + 0.3 * sstep(1, 0.98, t)); };
const rollCentre = (t) => { const q = 0.03 + 0.93 * t; return add(yardAt(q), YARD_UP, -0.5 * rollR(q)); };
function rollRad(t, ang) {
  const q = 0.03 + 0.93 * t;
  let pinch = 0;
  for (const tk of TIES) pinch += Math.exp(-(((q - tk) / 0.012) ** 2));
  return rollR(q) * (1 - 0.2 * pinch) * (1 + 0.1 * Math.sin(2 * ang + 9 * q) + 0.06 * Math.sin(3 * ang - 17 * q + 1) + 0.04 * Math.sin(5 * ang + 31 * q)) * (1 - 0.16 * Math.cos(ang));
}
// A rope from p to q, hanging by `sag`.
const rope = (p, q, sag = 0) => (t) => { const c = lerp3(p, q, t); c[1] -= sag * 4 * t * (1 - t); return c; };

function buildBoat() {
  const B = createBuilder();
  // Sections: closer together toward the ends, where the hull turns up, and at the ends of the well.
  const US = (() => {
    const out = [];
    for (let i = 0; i <= 60; i++) { const q = -1 + (2 * i) / 60; out.push(0.6 * Math.sin((q * Math.PI) / 2) + 0.4 * q); }
    for (const e of [...WELL.aft, ...WELL.fore]) out.push(e, e - 0.03, e + 0.03);
    out.sort((a, b) => a - b);
    return out.filter((u, i) => i === 0 || u - out[i - 1] > 0.004);
  })();
  const NU = US.length;

  // The hull: port sheer, round under the keel, starboard sheer. b is metres under the sheer.
  const NV = 25, KEEL = (NV - 1) / 2;
  const section = (u, j) => {
    const s = (j - KEEL) / KEEL, a = (Math.abs(s) * Math.PI) / 2, yk = keel(u), ys = sheer(u);
    const y = yk + (ys - yk) * (1 - Math.pow(Math.max(Math.cos(a), 0), 0.9));
    return [u * HALF, y, Math.sign(s) * halfBeam(u) * Math.pow(Math.sin(a), 0.75)];
  };
  B.grid(NU, NV, HULL, (i, j) => { const p = section(US[i], j); return [...p, p[0], sheer(US[i]) - p[1], 1]; }, { facing: () => [0, -1, 0] });
  for (const [u, n] of [[-1, [-1, 0, 0]], [1, [1, 0, 0]]]) {
    const ring = Array.from({ length: NV }, (_, j) => section(u, j));
    B.fan(HULL, [u * HALF, (sheer(u) + keel(u)) / 2, 0], ring, n, u * HALF, 1);
  }

  // The rub rail, the well's sides and its floor (the decks fore and aft are the same floor,
  // risen to just under the rail).
  for (const sg of [-1, 1]) {
    const rail = (u) => {
      const hb = halfBeam(u), ys = sheer(u), wi = railIn(u);
      return [[sg * hb, ys - 0.055], [sg * (hb + 0.016), ys - 0.055], [sg * (hb + 0.016), ys + 0.012], [sg * (hb - wi), ys + 0.012], [sg * (hb - wi), ys - 0.03]];
    };
    const faces = [[0, [0, -1, 0]], [1, [0, 0, sg]], [2, [0, 1, 0]], [3, [0, 0, -sg]]];
    for (const [k, n] of faces) B.grid(NU, 2, RAIL, (i, j) => { const p = rail(US[i])[k + j]; return [US[i] * HALF, p[1], p[0], US[i] * HALF, k + j, k === 3 ? 0.8 : 1]; }, { facing: () => n });
    B.grid(NU, 2, INNER, (i, j) => {
      const u = US[i], zi = sg * (halfBeam(u) - railIn(u));
      return j === 0 ? [u * HALF, sheer(u) - 0.03, zi, u * HALF, 0, 0.85] : [u * HALF, floorY(u), zi * 0.9, u * HALF, sheer(u) - 0.03 - floorY(u), 0.5];
    }, { facing: () => [0, 0.2, -sg] });
  }
  B.grid(NU, 5, DECK, (i, j) => {
    const u = US[i], q = -1 + j / 2, z = q * (halfBeam(u) - railIn(u)) * 0.9;
    return [u * HALF, floorY(u) + 0.008 * (1 - q * q), z, 0, 0, 0.95 - 0.4 * well(u)];
  }, { facing: () => [0, 1, 0] });
  // Thwarts: the mast's, one amidships, the helmsman's.
  for (const x of [MAST.foot[0], -0.75, -1.72]) {
    const u = x / HALF;
    B.box(DECK, [x, sheer(u) - 0.07, 0], [x === MAST.foot[0] ? 0.2 : 0.17, 0.03, 2 * (halfBeam(u) - railIn(u)) + 0.006], { ao: 0.9, across: 1 });
  }

  // The crossbeams, arched up from the rails and down to the floats, and the floats.
  BEAMS.forEach((bm, n) => {
    B.rand(0.35 + 0.4 * n);
    B.tube(BEAMWOOD, beamCurve(bm), beamR, 44, 8);
  });
  for (const sg of [-1, 1]) {
    B.rand(sg > 0 ? 0.22 : 0.58);
    B.tube(BAMBOO, floatCurve(sg), floatR, 40, 10);
  }
  // Lashings, in the path's blue cord: beam to float (round each), beam to rail.
  BEAMS.forEach((bm, n) => {
    const curve = beamCurve(bm), xe = bm.x + bm.sweep;
    for (const sg of [-1, 1]) {
      B.rand(0.1 + 0.2 * n + (sg > 0 ? 0.3 : 0));
      const fc = floatCurve(sg), t0 = (xe + 2.5) / 5.6;
      for (const off of [-0.035, 0.035]) B.tube(CORD, (t) => fc(t0 + (off + (t - 0.5) * 0.05) / 5.6), (t) => floatR(t0) + 0.008, 2, 10, { caps: 0 });
      const tb = (sg * ZF * 0.975 + ZF + 0.12) / (2 * (ZF + 0.12));
      B.tube(CORD, (t) => curve(tb + (t - 0.5) * 0.028), () => beamR(tb) + 0.008, 3, 8, { caps: 0 });
      const hb = halfBeam(bm.x / HALF), tr = (sg * (hb - 0.004) + ZF + 0.12) / (2 * (ZF + 0.12));
      B.tube(CORD, (t) => curve(tr + (t - 0.5) * 0.02), () => beamR(tr) + 0.008, 3, 8, { caps: 0 });
    }
  });

  // The mast, and the yard with the sail rolled round it.
  B.rand(0.4);
  B.tube(MASTWOOD, (t) => lerp3(MAST.foot, MAST.top, t), (t) => MAST.r0 + (MAST.r1 - MAST.r0) * t, 12, 10, { caps: 2 });
  B.rand(0.12);
  B.tube(BAMBOO, (t) => yardAt(-0.04 + 1.08 * t), (t) => 0.026 - 0.007 * t, 24, 8);
  B.rand(0.47);
  B.tube(BAMBOO, (t) => add(add(yardAt(-0.015 + 0.95 * t), YARD_UP, -0.048), [0, 0, 1], 0.03), () => 0.021, 20, 8);
  B.rand(0.3);
  B.tube(SAIL, rollCentre, rollRad, 110, 14);
  TIES.forEach((tk, k) => {
    B.rand(0.15 + 0.09 * k);
    const t0 = (tk - 0.03) / 0.93;
    B.tube(CORD, (t) => rollCentre(t0 + (t - 0.5) * 0.0075), (t, ang) => rollRad(t0, ang) + 0.006, 2, 14, { caps: 0 });
  });
  // Where the yard is seized to the mast, the halyard above it, and the standing lines.
  const cross0 = 0.394, mastAt = (y) => lerp3(MAST.foot, MAST.top, (y - MAST.foot[1]) / (MAST.top[1] - MAST.foot[1]));
  B.rand(0.7);
  B.tube(CORD, (t) => mastAt(1.74 + 0.11 * t), () => 0.046, 3, 10, { caps: 0 });
  B.tube(CORD, (t) => add(yardAt(cross0 - 0.012 + 0.024 * t), YARD_UP, -0.02), () => 0.062, 3, 10, { caps: 0 });
  B.rand(0.55);
  const head = mastAt(2.07);
  B.tube(ROPE, rope(head, add(yardAt(cross0 + 0.02), YARD_UP, 0.03)), () => 0.006, 4, 5, { caps: 0 });
  for (const sg of [-1, 1]) B.tube(ROPE, rope(head, [0.2, sheer(0.2 / HALF) + 0.012, sg * (halfBeam(0.2 / HALF) - 0.01)]), () => 0.005, 8, 5, { caps: 0 });
  B.tube(ROPE, rope(yardAt(0.0), [2.98, sheer(2.98 / HALF) + 0.014, 0], 0.02), () => 0.006, 5, 5, { caps: 0 });
  B.tube(ROPE, rope(yardAt(1.0), [-2.46, sheer(-2.46 / HALF) + 0.014, 0.03], 0.14), () => 0.006, 14, 5, { caps: 0 });
  // The crook the lantern hangs from, seized to the after deck.
  B.rand(0.66);
  B.tube(BEAMWOOD, through(CROOK), (t) => 0.016 - 0.007 * t, 22, 7);
  B.rand(0.4);
  B.tube(CORD, (t) => through(CROOK)(0.01 + 0.035 * t), () => 0.022, 2, 8, { caps: 0 });
  // The strop round the stem that the anchor line is made fast to.
  {
    const u = STROP_X / HALF, top = sheer(u) + 0.024, bot = keel(u) - 0.012, rz = halfBeam(u) + 0.028;
    B.tube(ROPE, (t) => [STROP_X - 0.04 * Math.cos(t * TAU), (top + bot) / 2 + ((top - bot) / 2) * Math.cos(t * TAU), rz * Math.sin(t * TAU)], () => 0.009, 28, 6, { caps: 0, up: [1, 0, 0] });
  }
  return B.geometry();
}

// The boat as a handful of capsules, for its reflection in the water (on-water.js). kind: 0
// the hull, 1 bamboo, 2 dark bamboo, 3 the mast, 4 canvas. under: what it is when seen through
// the water instead (5 the hull's bottom, 6 a float).
function boatProxies() {
  const out = [
    { a: [-2.3, 0.17, 0], b: [2.3, 0.17, 0], r: 0.33, kind: 0, under: 5 },
    { a: [2.3, 0.2, 0], b: [3.4, 0.82, 0], r: 0.14, kind: 0 },
    { a: [-2.3, 0.2, 0], b: [-3.4, 0.72, 0], r: 0.14, kind: 0 },
    { a: MAST.foot, b: MAST.top, r: 0.03, kind: 3 },
    { a: yardAt(0.03), b: yardAt(0.96), r: 0.065, kind: 4 },
    { a: CROOK[0], b: CROOK[2], r: 0.016, kind: 2 },
  ];
  const T = (z) => (z + ZF + 0.12) / (2 * (ZF + 0.12));
  for (const sg of [-1, 1]) {
    const fc = floatCurve(sg);
    out.push({ a: fc(0.02), b: fc(0.74), r: FLOAT_R, kind: 1, under: 6 }, { a: fc(0.74), b: fc(1), r: 0.045, kind: 1, under: 6 });
    for (const bm of BEAMS) {
      const c = beamCurve(bm);
      out.push({ a: c(T(sg * 0.33)), b: c(T(sg * 1.35)), r: 0.03, kind: 2 }, { a: c(T(sg * 1.35)), b: c(T(sg * ZF)), r: 0.028, kind: 2 });
    }
  }
  return out;
}

// The storm lantern, in its own frame: it hangs from the origin.
function buildLantern() {
  const B = createBuilder();
  B.rand(0.5);
  B.tube(ROPE, rope([0, 0.02, 0], [0, -0.1, 0]), () => 0.004, 2, 5, { caps: 0, up: [1, 0, 0] });
  // The bail, the two guards, the cap, the collar, the font.
  B.tube(METAL, (t) => [0.062 * Math.cos(t * Math.PI), -0.19 + 0.09 * Math.sin(t * Math.PI), 0], () => 0.003, 14, 5, { caps: 0, up: [0, 0, 1] });
  for (const sg of [-1, 1]) B.tube(METAL, (t) => [sg * (0.064 + 0.013 * Math.sin(Math.PI * t) - 0.012 * t), -0.345 + 0.157 * t, 0], () => 0.005, 10, 6, { caps: 0, up: [0, 0, 1] });
  B.lathe(METAL, [[0.001, -0.147], [0.013, -0.15], [0.021, -0.158], [0.024, -0.172], [0.047, -0.185], [0.051, -0.193], [0.049, -0.2], [0.035, -0.201]], 18);
  B.lathe(BRASS, [[0.039, -0.319], [0.045, -0.324], [0.045, -0.335], [0.057, -0.339]], 18);
  B.lathe(METAL, [[0.057, -0.339], [0.064, -0.349], [0.065, -0.378], [0.059, -0.388], [0.001, -0.389]], 18);
  B.lathe(BRASS, [[0.001, -0.304], [0.012, -0.306], [0.013, -0.336]], 10);
  B.lathe(FLAMEID, [[0.0006, -0.258], [0.004, -0.27], [0.0095, -0.289], [0.0085, -0.301], [0.0006, -0.305]], 10);
  const glass = new THREE.LatheGeometry([[0.035, -0.201], [0.044, -0.222], [0.051, -0.258], [0.049, -0.292], [0.039, -0.319]].map((p) => new THREE.Vector2(p[0], p[1])), 22);
  return { solid: B.geometry(), glass };
}

// The anchor line: along x at its length in still water, sagging in y. Its matrix lays it from
// the stem to the anchor every frame (and stretches it the few percent the boat's motion asks).
function buildLine(length) {
  const B = createBuilder();
  B.rand(0.8);
  B.tube(ROPE, (t) => [t * length, -LINE_SAG * 4 * t * (1 - t), 0], () => 0.009, 28, 6, { caps: 0 });
  return B.geometry();
}

// ---------------------------------------------------------------- material

function patch(src, find, repl) {
  const n = src.split(find).length - 1;
  if (n !== 1) throw new Error(`boat shader patch matched ${n} times: ${find.slice(0, 60)}`);
  return src.replace(find, () => repl);
}
const f = (v) => Number(v).toFixed(4);
const v3 = (a) => `vec3(${a.map(f).join(', ')})`;

const VERT_PARS = /* glsl */ `
varying vec3 vWorldPos;
varying vec3 vLocal;
varying vec4 vPart;
varying float vRand;
attribute vec4 aPart;
attribute float aRand;
uniform vec4 uFlex;   // how far each float is sprung from the hull's plane: port (m, and per m forward), starboard
${AERIAL_VERT_PACKED}
`;

const FRAG_PARS = /* glsl */ `
${SKY_PARS}
${AERIAL_FRAG_PACKED}
${CLOUD_SHADOW_GLSL}
uniform vec3 uExtent;
${SUN_SHADOW_GLSL}
uniform mat4 uBoatInv;      // world to the boat's frame
uniform vec3 uLampPos;      // the lantern's flame, world
uniform vec3 uLampCol;      // its light (kcd)
uniform vec3 uFlame;        // the flame itself (kcd/m2), zero when out
uniform vec3 uWaterAlb;     // what the sea under the boat sends back up
varying vec3 vWorldPos;
varying vec3 vLocal;
varying vec4 vPart;
varying float vRand;

vec3 jkNormal = vec3(0.0, 1.0, 0.0);
float jkRough = 0.8;
float jkGloss = 0.0;     // how much of the sky shows in it
float jkF0 = 0.04;
float jkInside = 0.0;    // down in the well: no light off the sea
float jkSun = 1.0;       // the island's and the clouds' shadow here
float jkShadow = 1.0;    // those and the boat's own
vec3 jkEmis = vec3(0.0);

float jkH(vec2 p) { vec3 p3 = fract(vec3(p.xyx) * 0.1031); p3 += dot(p3, p3.yzx + 33.33); return fract((p3.x + p3.y) * p3.z); }
float jkH3(vec3 p) { p = fract(p * 0.1031); p += dot(p, p.zyx + 31.32); return fract((p.x + p.y) * p.z); }
float jkN(vec2 p) { vec2 i = floor(p), f = fract(p); vec2 u = f * f * (3.0 - 2.0 * f);
  return mix(mix(jkH(i), jkH(i + vec2(1, 0)), u.x), mix(jkH(i + vec2(0, 1)), jkH(i + vec2(1, 1)), u.x), u.y); }
float jkN3(vec3 p) { vec3 i = floor(p), f = fract(p); vec3 u = f * f * (3.0 - 2.0 * f);
  float a = mix(mix(jkH3(i), jkH3(i + vec3(1, 0, 0)), u.x), mix(jkH3(i + vec3(0, 1, 0)), jkH3(i + vec3(1, 1, 0)), u.x), u.y);
  float b = mix(mix(jkH3(i + vec3(0, 0, 1)), jkH3(i + vec3(1, 0, 1)), u.x), mix(jkH3(i + vec3(0, 1, 1)), jkH3(i + vec3(1, 1, 1)), u.x), u.y);
  return mix(a, b, u.z); }
// Detail of about freq cycles a metre, gone to its mean once a pixel holds a cycle of it
// (fp: metres a pixel).
float jkSee(float freq, float fp) { return 1.0 - smoothstep(0.3, 0.9, freq * fp); }
float jkFbm(vec3 p, float fp) {
  return 0.5 + (jkN3(p) - 0.5) * jkSee(1.0, fp) + 0.5 * (jkN3(p * 2.03 + 7.1) - 0.5) * jkSee(2.0, fp) + 0.25 * (jkN3(p * 4.1 + 3.3) - 0.5) * jkSee(4.0, fp);
}
vec3 jkLin(vec3 c) { return pow(c, vec3(2.2)); }
// A surface standing h metres proud: the normal that goes with it.
vec3 jkBump(vec3 N, float h) {
  vec3 dx = dFdx(vWorldPos), dy = dFdy(vWorldPos), rx = cross(dy, N), ry = cross(N, dx);
  float det = dot(dx, rx);
  return normalize(abs(det) * N - sign(det) * (dFdx(h) * rx + dFdy(h) * ry));
}

// The hull's lines again (jukung.js has them in JS for the mesh).
float jkSheer(float u) { return ${SHEER_GLSL}; }
float jkHalf(float u) { return ${f(BEAM)} * pow(max(1.0 - pow(abs(u), 2.4), 0.0), 0.7) + 0.012; }

// Soft shadow of a capsule (after Inigo Quilez): ro the point, rd toward the sun.
float jkCap(vec3 ro, vec3 rd, vec3 a, vec3 b, float r) {
  vec3 ba = b - a, oa = ro - a;
  float oad = dot(oa, rd), dba = dot(rd, ba), baba = dot(ba, ba), oaba = dot(oa, ba);
  vec2 th = vec2(-oad * baba + dba * oaba, oaba - oad * dba) / max(baba - dba * dba, 1e-5);
  th.x = max(th.x, 0.0001);
  th.y = clamp(th.y, 0.0, 1.0);
  float d = length((a + ba * th.y) - (ro + rd * th.x)) - r;
  float s = clamp(34.0 * d / th.x + 0.5, 0.0, 1.0);
  return s * s * (3.0 - 2.0 * s);
}
// What the boat throws on itself, in its own frame: the mast, the yard and its sail, the
// four half beams, and the rail across the well.
float jkSelfShadow(vec3 p, vec3 s, int id) {
  // (Nothing shades itself here: a piece's own capsule is fatter than the piece in places.)
  float sh = 1.0;
  if (id != ${MASTWOOD}) sh *= jkCap(p, s, ${v3(MAST.foot)}, ${v3(MAST.top)}, 0.03);
  if (id != ${SAIL} && id != ${BAMBOO} && id != ${CORD}) sh *= jkCap(p, s, ${v3(yardAt(0.03))}, ${v3(yardAt(0.96))}, 0.07);
  if (id != ${BEAMWOOD} && id != ${CORD}) {
${BEAMS.map((bm) => [-1, 1].map((sg) => `    sh *= jkCap(p, s, ${v3([bm.x, sheer(bm.x / HALF) + 0.05, sg * 0.3])}, ${v3([bm.x + bm.sweep, FLOAT_Y + FLOAT_R + 0.03, sg * ZF])}, 0.026);`).join('\n')).join('\n')}
  }
  if (id == ${INNER} || id == ${DECK}) {
    float u = p.x / ${f(HALF)};
    if (abs(s.z) > 1e-3) {
      float t = (sign(s.z) * (jkHalf(u) - 0.04) - p.z) / s.z;
      float over = p.y + s.y * t - jkSheer((p.x + s.x * t) / ${f(HALF)}) - 0.012;
      sh *= smoothstep(-0.01 - 0.012 * t, 0.01 + 0.012 * t, over);
    }
    if (abs(s.x) > 1e-3) {
      float xw = s.x > 0.0 ? ${f(WELL.fore[1] * HALF)} : ${f(WELL.aft[0] * HALF)};
      float t = (xw - p.x) / s.x;
      if (t > 0.0 && abs(p.z + s.z * t) < jkHalf(xw / ${f(HALF)})) {
        float over = p.y + s.y * t - jkSheer(xw / ${f(HALF)}) + 0.03;
        sh *= smoothstep(-0.01 - 0.012 * t, 0.01 + 0.012 * t, over);
      }
    }
  }
  return sh;
}

// The surface of this piece: albedo, and the normal, roughness and shine into the globals.
// P is in the piece's own frame (the boat's, for all but the lantern and the anchor line).
vec3 jkSurface(vec3 P, vec3 N, float fp, int id) {
  float a = vPart.y, b = vPart.z;
  vec3 col = vec3(0.5);
  jkNormal = N;
  vec3 white = jkLin(vec3(0.82, 0.8, 0.74));
  vec3 terra = jkLin(vec3(0.72, 0.41, 0.29));
  if (id == ${HULL}) {
    // White paint, some years in the sun: chalked and yellowed in patches, streaked under
    // the rail, chipped to the wood where things rub, green and wet at the waterline.
    float n1 = jkFbm(P * 2.1, fp);
    col = white * (0.9 + 0.16 * n1);
    col *= mix(vec3(1.0), vec3(1.0, 0.95, 0.84), smoothstep(0.45, 0.8, jkN3(P * 0.8 + 9.0)) * 0.7);
    float st = jkN(vec2(P.x * 13.0, b * 2.0)) * 0.65 + jkN(vec2(P.x * 37.0 + 5.0, b * 4.0 + 2.0)) * 0.35;
    st = smoothstep(0.52, 0.85, st) * smoothstep(0.05, 0.22, b) * (1.0 - 0.5 * smoothstep(0.3, 0.6, b)) * jkSee(13.0, fp);
    col *= mix(vec3(1.0), vec3(0.66, 0.6, 0.5), st * 0.6);
    // Where one strake laps the next.
    float seam = (1.0 - smoothstep(0.0, 0.006, min(abs(b - 0.26 - 0.01 * sin(P.x * 1.3)), abs(b - 0.43 - 0.012 * sin(P.x * 1.1 + 1.0))))) * jkSee(60.0, fp);
    col *= 1.0 - 0.35 * seam;
    // The band under the rail.
    float edge = b + 0.006 * (jkN(vec2(P.x * 23.0, 1.0)) - 0.5);
    float band = 1.0 - smoothstep(0.098, 0.103, edge);
    vec3 tc = terra * (0.82 + 0.3 * n1);
    tc = mix(tc, jkLin(vec3(0.78, 0.6, 0.5)), smoothstep(0.5, 0.85, jkN3(P * vec3(2.0, 6.0, 6.0) + 2.0)) * 0.55);
    col = mix(col, tc, band);
    float chipN = jkN3(P * vec3(14.0, 40.0, 40.0)) * 0.55 + jkN3(P * 71.0) * 0.45;
    float wearAt = 0.08 * smoothstep(0.1, 0.0, b) + 0.1 * smoothstep(2.7, 3.4, abs(P.x)) + 0.05 * smoothstep(0.12, 0.0, P.y);
    float chip = smoothstep(0.73, 0.77, chipN + wearAt) * jkSee(40.0, fp);
    col = mix(col, jkLin(vec3(0.47, 0.4, 0.31)) * (0.8 + 0.4 * jkN3(P * 19.0)), chip * 0.85);
    float wl = P.y + 0.035 * (jkN(vec2(P.x * 2.3, 3.0)) - 0.5) + 0.012 * (jkN(vec2(P.x * 11.0, 7.0)) - 0.5);
    col = mix(col, col * vec3(0.5, 0.55, 0.36), smoothstep(0.13, 0.015, wl) * 0.8);
    col = mix(col, jkLin(vec3(0.16, 0.2, 0.13)), smoothstep(0.03, -0.06, wl) * 0.75);
    float wet = smoothstep(0.1, 0.02, wl);
    col *= mix(1.0, 0.72, wet);
    jkRough = mix(0.58, 0.22, wet) + 0.25 * chip;
    jkGloss = mix(0.22, 0.8, wet) * (1.0 - chip);
  } else if (id == ${RAIL}) {
    float n1 = jkFbm(P * 2.3, fp);
    vec3 tc = terra * (0.82 + 0.3 * n1);
    tc = mix(tc, jkLin(vec3(0.78, 0.6, 0.5)), smoothstep(0.5, 0.85, jkN3(P * vec3(2.0, 6.0, 6.0) + 2.0)) * 0.55);
    float chipN = jkN3(P * vec3(8.0, 30.0, 30.0)) * 0.6 + jkN3(P * 53.0) * 0.4;
    // Worn through on top, where people climb in and the lines run.
    float chip = smoothstep(0.6, 0.66, chipN + 0.14 * smoothstep(1.6, 2.4, b) * (1.0 - smoothstep(2.6, 3.4, b))) * jkSee(30.0, fp);
    col = mix(tc, jkLin(vec3(0.38, 0.31, 0.24)) * (0.8 + 0.4 * jkN(vec2(P.x * 40.0, P.z * 3.0))), chip);
    jkRough = 0.6 + 0.25 * chip;
    jkGloss = 0.2 * (1.0 - chip);
  } else if (id == ${INNER}) {
    col = white * (0.82 + 0.16 * jkFbm(P * 3.0, fp));
    col *= mix(vec3(1.0), vec3(0.68, 0.63, 0.54), smoothstep(0.03, 0.2, b) * 0.65);
    jkRough = 0.7;
    jkInside = 1.0;
  } else if (id == ${DECK}) {
    // Bare boards, greyed by salt and sun, each its own shade; dark and damp down in the well.
    vec2 q = a > 0.5 ? vec2(P.z, P.x) : vec2(P.x, P.z);
    float plank = q.y / 0.085, pid = floor(plank), pf = fract(plank);
    float gap = mix(0.93, smoothstep(0.0, 0.04, pf) * smoothstep(1.0, 0.96, pf), jkSee(24.0, fp));
    float grain = jkN(vec2(q.x * 3.0 + pid * 7.0, q.y * 60.0)) * 0.6 + jkN(vec2(q.x * 14.0, q.y * 140.0 + pid)) * 0.4;
    grain = mix(0.5, grain, jkSee(40.0, fp));
    vec3 wood = mix(jkLin(vec3(0.5, 0.43, 0.34)), jkLin(vec3(0.42, 0.39, 0.35)), jkH(vec2(pid, 3.0)));
    col = wood * (0.72 + 0.5 * grain);
    jkInside = 1.0 - smoothstep(0.6, 0.9, vPart.w);
    col *= mix(1.0, 0.72, jkInside * smoothstep(0.35, 0.75, jkN(P.xz * 3.0 + 2.0)));
    // The decks fore and aft are painted like the hull, and walked on: worn back to the wood
    // along the middle and at the plank edges.
    float worn = jkN(P.xz * vec2(2.0, 9.0) + 4.0) * 0.6 + jkN(P.xz * vec2(11.0, 31.0)) * 0.4 + 0.25 * (1.0 - smoothstep(0.0, 0.16, abs(P.z))) + 0.2 * (1.0 - gap);
    float paint = (1.0 - jkInside) * (1.0 - a) * (1.0 - smoothstep(0.62, 0.72, worn) * jkSee(11.0, fp) * 0.9);
    col = mix(col, white * (0.86 + 0.14 * grain), paint);
    col *= mix(0.35, 1.0, gap);
    jkRough = mix(0.86, 0.62, paint);
    jkGloss = 0.15 * paint;
  } else if (id == ${BAMBOO} || id == ${BEAMWOOD}) {
    // Bamboo: straw going grey, a ring at every node, fibres along it (as the path's rails).
    float along = a + vRand * 3.0;
    vec3 cyl = vec3(along, cos(b), sin(b));
    float seg = 0.27 + 0.13 * vRand;
    float sd = (fract(along / seg) - 0.5) * seg;
    float node = (1.0 - smoothstep(0.003, 0.014, abs(sd))) * jkSee(40.0, fp);
    float streak = jkN3(cyl * vec3(3.0, 1.2, 1.2));
    float fib = mix(0.5, jkN3(cyl * vec3(1.6, 5.0, 5.0)) * 0.6 + jkN3(cyl * vec3(5.0, 11.0, 11.0) + 3.0) * 0.4, jkSee(8.0, fp));
    col = mix(jkLin(vec3(0.59, 0.5, 0.34)), jkLin(vec3(0.47, 0.44, 0.37)), smoothstep(0.15, 0.6, vRand)) * (0.78 + 0.28 * streak) * (0.86 + 0.28 * fib);
    col *= 1.0 - 0.3 * node;
    col *= mix(1.0, 1.08, smoothstep(0.0, 0.05, sd) * (1.0 - smoothstep(0.05, 0.13, sd)));
    if (id == ${BEAMWOOD}) col *= vec3(0.8, 0.7, 0.58);
    // The floats ride half in the water: wet, with a line of weed.
    float wl = P.y - 0.035 + 0.02 * (jkN(vec2(P.x * 5.0, P.z)) - 0.5);
    float low = step(P.y, 0.3) * (id == ${BAMBOO} ? 1.0 : 0.0);
    float wet = smoothstep(0.045, 0.0, wl) * low;
    col = mix(col, col * vec3(0.55, 0.62, 0.4), smoothstep(0.03, -0.01, wl) * low * 0.7);
    col *= mix(1.0, 0.62, wet);
    jkNormal = jkBump(N, node * 0.0025);
    jkRough = mix(0.62 + 0.1 * node, 0.25, wet);
    jkGloss = mix(0.3, 0.8, wet);
  } else if (id == ${CORD}) {
    // The blue cord of the path's lashings, turn beside turn.
    float turns = a / 0.0065;
    float see = 1.0 - smoothstep(0.5, 2.0, fwidth(turns));
    float strand = 0.5 + 0.5 * cos(6.2832 * turns);
    col = mix(jkLin(vec3(0.06, 0.39, 0.62)), jkLin(vec3(0.19, 0.43, 0.56)), 0.35 + 0.5 * vRand) * (0.8 + 0.3 * mix(0.5, strand, see));
    jkNormal = jkBump(N, strand * see * 0.0015);
    jkRough = 0.82;
  } else if (id == ${MASTWOOD}) {
    vec3 cyl = vec3(a, cos(b), sin(b));
    float grain = mix(0.5, jkN3(cyl * vec3(2.0, 9.0, 9.0)) * 0.6 + jkN3(cyl * vec3(9.0, 30.0, 30.0)) * 0.4, jkSee(20.0, fp));
    col = jkLin(vec3(0.44, 0.35, 0.26)) * (0.7 + 0.55 * grain);
    col = mix(col, vec3(dot(col, vec3(0.33))) * vec3(1.05, 1.0, 0.94), 0.4 * jkN3(cyl * 0.7 + 2.0));
    jkRough = 0.72;
    jkGloss = 0.15;
  } else if (id == ${SAIL}) {
    // Cream canvas rolled on its yard: turns of cloth along it, creased where the ties bite,
    // mildewed in the folds and stained where the rain runs off.
    vec3 cyl = vec3(a, cos(b), sin(b));
    float wob = jkN3(cyl * vec3(1.5, 2.0, 2.0));
    float crease = 0.5 + 0.5 * sin(5.0 * b + 4.0 * a + 4.0 * wob);
    float see = jkSee(30.0, fp);
    col = jkLin(vec3(0.86, 0.8, 0.66)) * (0.8 + 0.2 * mix(0.5, crease, see)) * (0.93 + 0.1 * jkN3(cyl * vec3(6.0, 8.0, 8.0)));
    col = mix(col, col * vec3(0.7, 0.71, 0.66), smoothstep(0.66, 0.84, jkN3(cyl * vec3(9.0, 14.0, 14.0) + 7.0)) * 0.4 * jkSee(12.0, fp));
    col = mix(col, col * vec3(0.84, 0.74, 0.56), smoothstep(0.55, 0.9, jkN3(cyl * vec3(1.3, 2.0, 2.0) + 3.0)) * 0.5);
    jkNormal = jkBump(N, crease * 0.0022 * see);
    jkRough = 0.95;
  } else if (id == ${ROPE}) {
    // Three strands, laid up.
    float tw = a / 0.024 + b * 3.0 / 6.2832;
    float see = 1.0 - smoothstep(0.5, 2.0, fwidth(tw));
    float strand = 0.5 + 0.5 * cos(6.2832 * tw);
    col = jkLin(vec3(0.6, 0.53, 0.4)) * (0.72 + 0.4 * mix(0.5, strand, see));
    jkNormal = jkBump(N, strand * see * 0.002);
    jkRough = 0.9;
  } else if (id == ${METAL}) {
    // The lantern's enamel, rusting at the seams.
    float n2 = jkN3(P * 140.0 + 3.0);
    float rust = smoothstep(0.55, 0.75, jkN3(P * 60.0) * 0.6 + n2 * 0.4) * jkSee(60.0, fp);
    col = mix(jkLin(vec3(0.17, 0.33, 0.36)) * (0.85 + 0.3 * n2), jkLin(vec3(0.33, 0.17, 0.09)), rust);
    col *= mix(0.25, 1.0, smoothstep(-0.2, -0.165, P.y) + smoothstep(-0.2, -0.24, P.y));   // soot under the cap
    jkRough = mix(0.35, 0.8, rust);
    jkGloss = mix(0.6, 0.1, rust);
    jkF0 = 0.06;
  } else if (id == ${BRASS}) {
    col = jkLin(vec3(0.55, 0.42, 0.18)) * (0.7 + 0.5 * jkN3(P * 90.0));
    jkRough = 0.45;
    jkGloss = 0.6;
    jkF0 = 0.3;
  } else {
    col = vec3(0.01);
    jkEmis = uFlame * (0.55 + 0.45 * smoothstep(-0.305, -0.275, P.y));
  }
  return col;
}
`;

const FRAG_COLOR = /* glsl */ `
  int jkId = int(vPart.x + 0.5);
  if (jkId == ${FLAMEID} && uFlame.r <= 0.0) discard;
  // (vNormal is in view space; the surface works in world space.)
  vec3 jkNw = normalize((vec4(normalize(vNormal), 0.0) * viewMatrix).xyz);
  if (!gl_FrontFacing) jkNw = -jkNw;
  float jkFp = max(length(fwidth(vWorldPos)), 0.0005);
  diffuseColor.rgb = jkSurface(vLocal, jkNw, jkFp, jkId);
  {
    vec3 pB = (uBoatInv * vec4(vWorldPos, 1.0)).xyz;
    mat3 rB = mat3(uBoatInv);
    jkSun = bakedShadow(vWorldPos + jkNw * 0.3, 0.2) * cloudShadow(vWorldPos, uSunDir);
    jkShadow = jkSun * jkSelfShadow(pB + rB * jkNw * 0.02, normalize(rB * uSunDir), jkId);
  }
`;

const FRAG_LIGHT = /* glsl */ `
#include <aomap_fragment>
{
  float jkAO = vPart.w;
  vec3 nW = normalize((vec4(normal, 0.0) * viewMatrix).xyz);
  vec3 vW = normalize(cameraPosition - vWorldPos);
  reflectedLight.indirectDiffuse *= jkAO;
  reflectedLight.directDiffuse *= mix(1.0, jkAO, 0.35);
  // Light off the sea below: a white hull over shallow water is turquoise underneath.
  vec3 seaUp = uWaterAlb * (uSunIrr * max(uSunDir.y, 0.0) * jkSun + uSkyUp);
  reflectedLight.indirectDiffuse += seaUp * 0.5 * (1.0 - nW.y) * (1.0 - jkInside) * jkAO * BRDF_Lambert(material.diffuseColor);
  // The lantern.
  vec3 toL = uLampPos - vWorldPos;
  float d2 = dot(toL, toL);
  reflectedLight.directDiffuse += uLampCol * max(dot(nW, toL) * inversesqrt(d2) * 0.8 + 0.2, 0.0) / (d2 + 0.25) * BRDF_Lambert(material.diffuseColor);
  // The sky (and the sea, below the horizon) in whatever shines: paint, wet bamboo, enamel.
  if (jkGloss > 0.0) {
    vec3 rW = reflect(-vW, nW);
    float fr = jkF0 + (1.0 - jkF0) * pow(1.0 - clamp(dot(nW, vW), 0.0, 1.0), 5.0);
    vec3 sky = skyRadiance(vec3(rW.x, max(rW.y, 0.03), rW.z));
    vec3 sea = seaUp / PI + 0.08 * skyRadiance(vec3(rW.x, abs(rW.y) + 0.03, rW.z));
    reflectedLight.indirectSpecular += mix(sea, sky, smoothstep(-0.06, 0.06, rW.y)) * fr * jkGloss * jkAO;
  }
}
`;

function createBoatMaterial(lightUniforms, gradeUniforms, uniforms) {
  const m = new THREE.MeshStandardMaterial({ color: 0xffffff, roughness: 0.8, metalness: 0, side: THREE.DoubleSide });
  m.onBeforeCompile = (shader) => {
    Object.assign(shader.uniforms, lightUniforms, gradeUniforms, uniforms);
    shader.vertexShader = [
      ['#include <common>', '#include <common>\n' + VERT_PARS],
      // (The beams bend: nothing at the rail, all of it at the float. The lantern and the anchor
      // line share this material and lie within the rail's width of their own origins.)
      ['#include <begin_vertex>', `#include <begin_vertex>
        vPart = aPart; vRand = aRand; vLocal = position;
        { float bend = smoothstep(${f(BEND[0])}, ${f(BEND[1])}, abs(position.z));
          vec2 fl = position.z > 0.0 ? uFlex.zw : uFlex.xy;
          transformed.y += bend * bend * clamp(fl.x + fl.y * position.x, -0.14, 0.14); }`],
      ['#include <project_vertex>', '#include <project_vertex>\nvWorldPos = (modelMatrix * vec4(transformed, 1.0)).xyz;\naerialVertex(vWorldPos);'],
    ].reduce((s, [a, b]) => patch(s, a, b), shader.vertexShader);
    shader.fragmentShader = [
      ['#include <common>', '#include <common>\n' + FRAG_PARS],
      ['#include <color_fragment>', FRAG_COLOR],
      ['#include <roughnessmap_fragment>', '#include <roughnessmap_fragment>\nroughnessFactor = clamp(jkRough, 0.12, 1.0);'],
      ['#include <normal_fragment_maps>', '#include <normal_fragment_maps>\nnormal = normalize((viewMatrix * vec4(jkNormal, 0.0)).xyz);'],
      ['#include <emissivemap_fragment>', '#include <emissivemap_fragment>\ntotalEmissiveRadiance += jkEmis;'],
      ['#include <lights_fragment_begin>', patch(THREE.ShaderChunk.lights_fragment_begin,
        'getDirectionalLightInfo( directionalLight, directLight );', 'getDirectionalLightInfo( directionalLight, directLight );\n\t\tdirectLight.color *= jkShadow;')],
      ['#include <aomap_fragment>', FRAG_LIGHT],
      ['#include <tonemapping_fragment>', 'gl_FragColor.rgb = gl_FragColor.rgb * vAp.a + vAp.rgb;\n#include <tonemapping_fragment>'],
    ].reduce((s, [a, b]) => patch(s, a, b), shader.fragmentShader);
  };
  return m;
}

// The lantern's globe: thin old glass. The sky in it at the rim, the sun's glint, a little
// soot; lit, it glows from the flame outward. Drawn after the sky, which paints over
// anything see-through that came before it.
function createGlassMaterial(lightUniforms, gradeUniforms, uniforms) {
  return new THREE.ShaderMaterial({
    uniforms: { ...lightUniforms, ...gradeUniforms, uGlow: uniforms.uGlow, uGlassSun: uniforms.uGlassSun },
    vertexShader: /* glsl */ `
      varying vec3 vW; varying vec3 vN; varying float vY;
      void main() {
        vec4 wp = modelMatrix * vec4(position, 1.0);
        vW = wp.xyz; vN = normalize(mat3(modelMatrix) * normal); vY = position.y;
        gl_Position = projectionMatrix * viewMatrix * wp;
      }`,
    fragmentShader: /* glsl */ `
      #include <common>
      ${SKY_PARS}
      uniform vec3 uGlow;       // the lit globe's radiance (kcd/m2)
      uniform float uGlassSun;  // how much sun reaches the lantern
      varying vec3 vW; varying vec3 vN; varying float vY;
      void main() {
        vec3 V = normalize(cameraPosition - vW), N = normalize(vN);
        if (!gl_FrontFacing) N = -N;
        float nv = clamp(dot(N, V), 0.0, 1.0);
        float fr = 0.04 + 0.96 * pow(1.0 - nv, 5.0);
        vec3 R = reflect(-V, N);
        vec3 col = skyRadiance(vec3(R.x, abs(R.y) + 0.03, R.z)) * (R.y < 0.0 ? 0.35 : 1.0) * fr;
        col += uSunIrr * uGlassSun * pow(max(dot(R, uSunDir), 0.0), 900.0) * 3.0;
        // Soot gathers toward the top of the globe, salt everywhere.
        float soot = smoothstep(-0.27, -0.2, vY) * 0.35 + 0.1;
        col += vec3(0.03, 0.028, 0.025) * (uSunIrr * max(dot(N, uSunDir), 0.0) * uGlassSun + uSkyUp) / PI * soot * 4.0;
        float a = clamp(fr + soot, 0.0, 1.0);
        // Lit: brightest low in the middle, where the flame stands behind it.
        float core = pow(nv, 1.6) * (0.45 + 0.55 * smoothstep(-0.2, -0.29, vY));
        col += uGlow * core;
        a = max(a, clamp(core * step(1e-6, uGlow.r), 0.0, 0.85));
        gl_FragColor = vec4(col, a);
        #include <tonemapping_fragment>
        #include <colorspace_fragment>
      }`,
    transparent: true, premultipliedAlpha: true, depthWrite: false, side: THREE.FrontSide,
  });
}

// The glow round the flame: a small soft disc that faces the camera. It takes the place of
// some of what is behind it as well as adding to it: added alone, it would only bleach an
// evening sea that is already bright, where it has to read as warm.
function createHaloMaterial(uniforms) {
  return new THREE.ShaderMaterial({
    uniforms: { uHalo: uniforms.uHalo, uHaloSize: uniforms.uHaloSize },
    vertexShader: /* glsl */ `
      uniform float uHaloSize;
      varying vec2 vP;
      void main() {
        vP = position.xy;
        vec4 mv = modelViewMatrix * vec4(0.0, 0.0, 0.0, 1.0);
        // (Larger with distance, so it is still a point of light from the beach and the cliff.)
        mv.xy += position.xy * uHaloSize * (1.0 + 0.012 * -mv.z);
        gl_Position = projectionMatrix * mv;
      }`,
    fragmentShader: /* glsl */ `
      uniform vec3 uHalo;
      varying vec2 vP;
      void main() {
        float r2 = dot(vP, vP);
        float g = (exp(-r2 * 6.0) * 0.5 + exp(-r2 * 70.0) * 0.5) * smoothstep(1.0, 0.6, sqrt(r2));
        gl_FragColor = vec4(uHalo * g, 0.6 * g * step(1e-5, uHalo.r));
      }`,
    transparent: true, depthWrite: false, premultipliedAlpha: true, toneMapped: false,
  });
}

// ---------------------------------------------------------------- the boat

// renderer, water (createWater's), lightUniforms and gradeUniforms as every lit material gets
// them, shared: { uExtent, uSunShadow } (the ground's). place: 'east,north[,heading]' or
// nothing for the anchorage below.
export function createJukung({ renderer, water, lightUniforms = {}, gradeUniforms = {}, shared = {}, place = null }) {
  // Off the south end of the beach, in four metres of water, 50 m outside the break and 30 m
  // clear of the white water at the rock's foot: bearing 252 degrees and 74 m from where the
  // walk ends. Bow to the swell.
  const given = place ? String(place).split(',').map(Number) : [];
  // (Moored 52 m from where the walk ends, just outside the foam: Sam asked for it closer
  // than the first mooring at [29, 141], 74 m out, where it was 95 px long in the last frame.)
  const east = Number.isFinite(given[0]) ? given[0] : 49.6;
  const north = Number.isFinite(given[1]) ? given[1] : 147.7;
  const heading = Number.isFinite(given[2]) ? given[2] : 220;

  const uniforms = {
    uExtent: shared.uExtent ?? { value: new THREE.Vector3(-700, -700, 1600) },
    uSunShadow: shared.uSunShadow ?? { value: null },
    uBoatInv: { value: new THREE.Matrix4() },
    uFlex: { value: new THREE.Vector4() },
    uLampPos: { value: new THREE.Vector3() },
    uLampCol: { value: new THREE.Vector3() },
    uFlame: { value: new THREE.Vector3() },
    uWaterAlb: { value: new THREE.Vector3(0.035, 0.105, 0.11) },
    uGlow: { value: new THREE.Vector3() },
    uGlassSun: { value: 1 },
    uHalo: { value: new THREE.Vector3() },
    uHaloSize: { value: 0.5 },
  };
  const material = createBoatMaterial(lightUniforms, gradeUniforms, uniforms);

  const group = new THREE.Group();
  group.name = 'boat';
  group.rotation.order = 'YZX';
  group.visible = false;   // until the sea's data is in
  const hull = new THREE.Mesh(buildBoat(), material);
  hull.name = 'boat-hull';
  group.add(hull);

  const lanternGeo = buildLantern();
  const lantern = new THREE.Group();
  lantern.position.fromArray(LANTERN_AT);
  const lanternBody = new THREE.Mesh(lanternGeo.solid, material);
  lanternBody.name = 'boat-lantern';
  const glass = new THREE.Mesh(lanternGeo.glass, createGlassMaterial(lightUniforms, gradeUniforms, uniforms));
  glass.name = 'boat-lantern-glass';
  glass.renderOrder = 11;
  lantern.add(lanternBody, glass);
  group.add(lantern);

  // These two are placed in the world, not in the boat's frame.
  const halo = new THREE.Mesh(new THREE.PlaneGeometry(2, 2), createHaloMaterial(uniforms));
  halo.name = 'boat-lantern-halo';
  halo.renderOrder = 12;
  halo.frustumCulled = false;
  halo.visible = false;
  let line = null;
  const onWater = createOnWater({ water, lightUniforms, gradeUniforms, uniforms,
    shape: { proxies: boatProxies(), half: HALF, beam: BEAM, bend: BEND, sheer: SHEER_GLSL, floats: { z: ZF, r: FLOAT_R, x0: -2.5, x1: 3.1 }, beams: BEAMS.map((bm) => bm.x) } });
  for (const o of [halo, onWater.mesh]) { o.matrixAutoUpdate = false; o.matrixWorldAutoUpdate = false; group.add(o); }

  // ---- afloat
  const sea = createSea(water);
  // Where the sea is read under the boat (x forward, z to starboard, weight): the hull carries
  // it, the floats level it. (The floats' points last, three each, port then starboard.)
  const PTS = [[0, 0, 1.6], [2.1, 0, 1.1], [-2.1, 0, 1.1], [1.6, -ZF, 0.8], [-0.3, -ZF, 0.8], [-2.0, -ZF, 0.8], [1.6, ZF, 0.8], [-0.3, ZF, 0.8], [-2.0, ZF, 0.8]];
  // A line through a float's three residuals, d0 + d1 x: two rows of weights.
  const FLEX = (() => {
    const xs = [1.6, -0.3, -2.0], n = 3, sx = xs.reduce((q, v) => q + v, 0), sxx = xs.reduce((q, v) => q + v * v, 0), det = n * sxx - sx * sx;
    return xs.map((x) => [(sxx - sx * x) / det, (n * x - sx) / det]);
  })();
  const sharp = new Float64Array(6);
  // Least squares for y = a + b x + c z through them, worked out once: three rows of weights.
  const FIT = (() => {
    const M = new THREE.Matrix3(), m = [0, 0, 0, 0, 0, 0, 0, 0, 0];
    for (const [x, z, w] of PTS) { const r = [1, x, z]; for (let i = 0; i < 3; i++) for (let j = 0; j < 3; j++) m[i * 3 + j] += w * r[i] * r[j]; }
    M.set(...m).invert();
    const e = M.elements;   // column-major
    return PTS.map(([x, z, w]) => [0, 1, 2].map((i) => w * (e[i] + e[i + 3] * x + e[i + 6] * z)));
  })();
  let seen = null, lineR = 12, lineLen = 13;
  const anchor = new THREE.Vector3();
  const fwd0 = [Math.sin(heading * DEG), Math.cos(heading * DEG)];   // east, north
  function moor(hf) {
    sea.setData(hf);
    sea.setOrigin(east, north);
    const ax = east + fwd0[0] * FAIR[0], ay = north + fwd0[1] * FAIR[0];
    // The anchor lies ahead of the stem, far enough for the line to run down at LINE_ANGLE.
    const depth = Math.max(sea.at(ax + fwd0[0] * 12, ay + fwd0[1] * 12, 0).depth, 1.5);
    lineR = (depth + FAIR[1]) / Math.tan(LINE_ANGLE);
    anchor.set(ax + fwd0[0] * lineR, -depth, -(ay + fwd0[1] * lineR));
    if (line) { group.remove(line); line.geometry.dispose(); }
    lineLen = Math.hypot(lineR, depth + FAIR[1]);
    line = new THREE.Mesh(buildLine(lineLen), material);
    line.name = 'boat-anchor-line';
    line.matrixAutoUpdate = false; line.matrixWorldAutoUpdate = false;
    group.add(line);
    group.visible = true;
  }

  const state = { heave: 0, pitch: 0, roll: 0, yaw: 0, lamp: 0 };
  const lampW = new THREE.Vector3(), fairW = new THREE.Vector3(), X = new THREE.Vector3(), Y = new THREE.Vector3(), Z = new THREE.Vector3();
  const UP = new THREE.Vector3(0, 1, 0);

  // t: the sea's clock. camera: for the Earth's curve far out. hf: the terrain, once loaded.
  function update(t, camera, hf) {
    if (hf && hf !== seen) { seen = hf; moor(hf); }
    if (!seen) return;
    // Lying to the anchor: the line swings a couple of degrees either way, the hull a little
    // more (boats sail about on their cable), slowly.
    const sw = (1.5 * Math.sin((t * TAU) / 29 + 0.6) + 0.7 * Math.sin((t * TAU) / 17.3 + 2.1)) * DEG;
    const hl = heading * DEG + sw, hb = heading * DEG + 1.4 * sw;
    const fx = Math.sin(hb), fy = Math.cos(hb), rx = Math.cos(hb), ry = -Math.sin(hb);
    const cx = anchor.x - Math.sin(hl) * lineR - fx * FAIR[0], cy = -anchor.z - Math.cos(hl) * lineR - fy * FAIR[0];
    // The sea under nine points, and the plane through them.
    let a = 0, b = 0, c = 0, dx = 0, dy = 0;
    for (let k = 0; k < PTS.length; k++) {
      const px = cx + fx * PTS[k][0] + rx * PTS[k][1], py = cy + fy * PTS[k][0] + ry * PTS[k][1];
      const s = sea.at(px, py, t);
      if (k === 0) { dx = s.dx; dy = s.dy; }
      a += FIT[k][0] * s.h; b += FIT[k][1] * s.h; c += FIT[k][2] * s.h;
      if (k >= 3) sharp[k - 3] = sea.at(px, py, t, true).h;
    }
    // The floats: what is left between that plane and the chop under each, taken up by the
    // beams' spring.
    for (let side = 0; side < 2; side++) {
      let d0 = 0, d1 = 0;
      for (let k = 0; k < 3; k++) {
        const p = PTS[3 + side * 3 + k], r = sharp[side * 3 + k] - (a - 0.02 + b * p[0] + c * p[1]);
        d0 += FLEX[k][0] * r; d1 += FLEX[k][1] * r;
      }
      if (side === 0) { uniforms.uFlex.value.x = d0; uniforms.uFlex.value.y = d1; } else { uniforms.uFlex.value.z = d0; uniforms.uFlex.value.w = d1; }
    }
    // (The sea falls away with the Earth beyond 2 km from the camera, water-shader.js.)
    const far = Math.max(Math.hypot(cx - camera.position.x, -cy - camera.position.z) - 2000, 0);
    // (Two centimetres deeper than the plane: laden, and the keel stays under in the troughs.)
    a -= 0.02;
    state.heave = a; state.pitch = Math.atan(b); state.roll = Math.atan(c); state.yaw = hb;
    // The waves carry the water sideways as well as up (the sea's own displacement): with it.
    group.position.set(cx + dx, a - (far * far) / (2 * 6.36e6), -(cy + dy));
    group.rotation.set(-state.roll, Math.PI / 2 - hb, state.pitch);
    group.updateMatrix();
    group.updateWorldMatrix(true, false);
    uniforms.uBoatInv.value.copy(group.matrixWorld).invert();
    onWater.uniforms.uRest.value.set(cx, cy, fx, fy);
    onWater.mesh.matrixWorld.makeTranslation(cx, 0, -cy);

    // The lantern hangs plumb, more or less, and has a small swing of its own.
    lantern.rotation.set(0.85 * state.roll + 0.02 * Math.sin(t * 5.6 + 1) * (0.5 + 0.5 * Math.sin(t * 0.37)), 0,
      -0.85 * state.pitch + 0.015 * Math.sin(t * 5.1) * (0.5 + 0.5 * Math.sin(t * 0.29 + 2)));
    lantern.updateMatrix();
    lantern.matrixWorld.multiplyMatrices(group.matrixWorld, lantern.matrix);
    lampW.fromArray(FLAME).applyMatrix4(lantern.matrixWorld);
    uniforms.uLampPos.value.copy(lampW);
    halo.matrixWorld.makeTranslation(lampW.x, lampW.y, lampW.z);

    // The anchor line: from the strop to the anchor, sagging straight down.
    fairW.fromArray(FAIR).applyMatrix4(group.matrixWorld);
    X.subVectors(anchor, fairW);
    Y.copy(UP).addScaledVector(X, -X.y / X.lengthSq()).normalize();
    Z.crossVectors(X, Y).normalize();
    line.matrixWorld.makeBasis(X.multiplyScalar(1 / lineLen), Y, Z).setPosition(fairW);

    // Lit toward evening (the sun low in the west) and after dark. Set on screen, then
    // divided by the exposure.
    const sun = lightUniforms.uSunDir?.value, irr = lightUniforms.uSunIrr?.value;
    const el = sun ? Math.asin(clamp(sun.y, -1, 1)) / DEG : 60;
    const dark = irr ? sstep(2, 0.2, 0.2126 * irr.r + 0.7152 * irr.g + 0.0722 * irr.b) : 0;
    // (Put out at sunrise: in the east it only burns while the sun is under the horizon.)
    const dusk = sun && sun.x < 0 ? sstep(27, 21, el) : sstep(3, -1, el);
    const lamp = Math.max(dark, dusk);
    state.lamp = lamp;
    const ex = Math.max(renderer.toneMappingExposure, 1e-9);
    const flick = 1 + 0.05 * Math.sin(t * 9.7) * Math.sin(t * 2.3 + 1) + 0.03 * Math.sin(t * 23.1);
    const k = (lamp * flick) / ex;
    uniforms.uFlame.value.set(9.0, 4.4, 1.2).multiplyScalar(k);
    uniforms.uGlow.value.set(1.7, 0.74, 0.2).multiplyScalar(k);
    // Its light on the boat: faint while the sun is up, the main light once it is dark.
    // (Set as what a white board a metre from the flame shows.)
    uniforms.uLampCol.value.set(1.0, 0.52, 0.17).multiplyScalar(6.54 * (0.14 + 0.36 * dark) * k);
    uniforms.uHalo.value.set(0.78, 0.43, 0.13).multiplyScalar(lamp * flick);
    uniforms.uGlassSun.value = 1 - dark;
    onWater.uniforms.uLampWater.value = lamp > 0.003 ? 0.3 + 0.5 * dark : 0;
    halo.visible = lamp > 0.003;
    onWater.mesh.visible = water.mesh.visible;
  }

  return {
    group, east, north, heading, update, sea, state, uniforms, material, onWater,
    lantern: { group: lantern, position: lampW },
    anchor,
  };
}
