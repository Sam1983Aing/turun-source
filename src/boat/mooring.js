// The mooring (v35): what ties the jukung to the beach. The boat lies to its anchor, bow to
// the swell, and a stern line runs ashore to a post, the way a boat is held just off a beach.
//
//   the post      a bamboo pole stood in the first shallows, a little off plumb and never quite
//                 straight: cut on the slant above its top node, the hollow showing; a few turns
//                 of the line round it under the top, the end left hanging.
//   the line      hemp, three strands, as thick as a wrist. Forty metres of it do not hang in the
//                 air: it drops from the turns to the water a few metres out, lies on the bottom
//                 for most of the way and comes up to a strop round the boat's stern. So it is
//                 two pieces. One is fixed, from the post down onto the seabed. The other is in
//                 the boat's own frame, from the strop down under the water, and rides with the
//                 hull: neither needs anything worked out per frame.
//   on the ground the post stands on the terrain's own height at its place, the line follows the
//                 bottom from where it touches down. Both go on below what can be seen (into
//                 the sand, under the sea), so a wave drawing back uncovers more of the same.
//   the look      the boat's material and light (jukung.js), three more kinds of surface. What is
//                 wet is wet by its height above the still water: the sea is at 0, the waves
//                 reach REACH above it, and what they reach stays dark and green.
//
// Nothing here knows the boat's shape: jukung.js hands over its builder, its material and the
// strop's place on the hull. The surfaces below are spliced into its shader and use its helpers
// (jkN3, jkSee, jkBump, jkLin and the globals they set), so they are written in its terms.

import * as THREE from 'three';
import { sample } from '../terrain/terrain-mesh.js';

const DEG = Math.PI / 180, TAU = Math.PI * 2;
const clamp = (x, a, b) => Math.min(Math.max(x, a), b);
const add = (a, b, k = 1) => [a[0] + b[0] * k, a[1] + b[1] * k, a[2] + b[2] * k];
const sub = (a, b) => [a[0] - b[0], a[1] - b[1], a[2] - b[2]];
const dot = (a, b) => a[0] * b[0] + a[1] * b[1] + a[2] * b[2];
const cross = (a, b) => [a[1] * b[2] - a[2] * b[1], a[2] * b[0] - a[0] * b[2], a[0] * b[1] - a[1] * b[0]];
const norm = (a) => { const l = Math.hypot(a[0], a[1], a[2]) || 1; return [a[0] / l, a[1] / l, a[2] / l]; };
const f = (v) => Number(v).toFixed(4);
const v3 = (a) => `vec3(${a.map(f).join(', ')})`;

// What its parts are made of: the shader's ids, after the boat's own (jukung.js, 0 to 12).
const MOOR_POST = 13, MOOR_LASH = 14, MOOR_LINE = 15;

// ---------------------------------------------------------------- the shape, in numbers

// Where the post stands (east, north): in the shallows to the right of the boat as the walk's
// last frame sees it, 13.5 m from where the walk ends and 6 degrees to the right of the line of
// sight to the boat. From there the eye is 4.7 m over the water, so anything nearer than 11 m is
// under the bottom of the frame, and on a phone the words take the bottom quarter: this is the
// nearest place that is clear of both. The ground there is 1.2 m under the still water.
const PLACE = [86.75, 160.55];   // (a metre left of where it first stood: clear of the page's light chooser on a wide screen)
// (The sea at the post lies half a metre under its still level most of the time, drawn down
// ahead of each breaker, and a bore runs past at about +0.2: so 2.8 m of pole shows, then 2.)
const TOP = 2.2;                   // the post's top over the still water (over the sand, stood dry)
const BURIED = 0.5;                // and how much of it is in the sand
const R_FOOT = 0.054, R_TOP = 0.041;
const LEAN = 5 * DEG, LEAN_TO = 215;   // off plumb, toward this compass bearing
const BOW = 0.028;                 // how far out of straight it is at half height
const CUT = Math.tan(17 * DEG);    // the slant of the cut at the top
const SIDES = 12;
const ROPE_R = 0.021;              // the line's radius
const LAY = 0.05;                  // one strand to the next, along it
const LASH = { from: 0.3, turns: 5 };  // the turns round the post: metres under its top
const TAIL = 0.4;                  // the end left hanging
const REACH = 0.55;                // how far over the still water the waves keep things wet
// The line touches the bottom this far from the post. (At 16 m it leaves the turns at about 28
// degrees and is under the still water 4 m out, 5 m in a trough: some weight on it, as there
// is on the boat's end.)
const TOUCH = 16;
// The boat's end: off the strop at `slope`, easing by `sag` per metre, and under the still
// water some three and a half metres out. From `dive` on it is taken steeply down.
const STERN = { slope: 0.24, sag: 0.011, dive: 3.3, sink: 0.34, length: 6.5 };
// What the white water and the pale sand around the post send back up, on top of the open
// sea's own (the boat's uWaterAlb): out there a shaded side sees dark water, in the shallows it
// sees foam and sand in the sun.
const SHALLOWS = [0.3, 0.24, 0.17];

// ---------------------------------------------------------------- geometry

// The post, the turns round it, the hanging end and the line down to the seabed, in the post's
// frame: the origin where it enters the ground, x level toward the boat, y up.
// sea: the still water's height there. ground(s): the ground's, s metres toward the boat.
// toBoat: the boat's compass bearing from the post, radians.
function buildShore(B, { sea, ground, toBoat }) {
  const d = LEAN_TO * DEG - toBoat;
  const axis = [Math.sin(LEAN) * Math.cos(d), Math.cos(LEAN), Math.sin(LEAN) * Math.sin(d)];
  const e1 = norm(sub([1, 0, 0], axis.map((v) => v * axis[0]))), e2 = cross(axis, e1);
  const top = (Math.max(sea, 0) + TOP) / axis[1], length = top + BURIED;
  // a: metres down the post from its top.
  const centre = (a) => add(axis.map((v) => v * (top - a)), e2, -BOW * Math.sin(Math.PI * clamp(1 - a / top, 0, 1)));
  const radius = (a) => R_TOP + (R_FOOT - R_TOP) * clamp(a / length, 0, 1);
  const at = (a, ang, r) => { const c = centre(a); return [0, 1, 2].map((k) => c[k] + r * (Math.cos(ang) * e1[k] + Math.sin(ang) * e2[k])); };
  // (Cut so that the end grain faces the beach and the evening sun, between the two.)
  const cut = (ang, r) => -CUT * r * Math.cos(ang - 0.93);

  // The pole: a ring every third of a metre down to where no trough uncovers it, then one at
  // the bottom.
  const rings = [0, 0.05];
  const dry = Math.min(top - (Math.max(sea, 0) - 0.9) / axis[1], length);
  for (let n = Math.ceil((dry - 0.05) / 0.36), k = 1; k <= n; k++) rings.push(0.05 + ((dry - 0.05) * k) / n);
  if (length - dry > 0.05) rings.push(length);
  const mid = rings.length >> 1;
  B.rand(0.44);
  B.grid(rings.length, SIDES + 1, MOOR_POST, (i, j) => {
    const ang = (j / SIDES) * TAU, r = radius(rings[i]);
    return [...at(rings[i] + (i === 0 ? cut(ang, r) : 0), ang, r), rings[i], ang, 1];
  }, { wrap: true, probe: [mid, 0], facing: (x, y, z) => sub([x, y, z], centre(rings[mid])) });
  // The cut: the wall's end grain (a = -1), and the hollow inside it (a = -2).
  const bore = R_TOP * 0.64;
  B.grid(2, SIDES + 1, MOOR_POST, (i, j) => {
    const ang = (j / SIDES) * TAU, r = i ? bore : R_TOP;
    return [...at(cut(ang, r), ang, r), -1, ang, 1];
  }, { facing: () => axis });
  B.grid(3, SIDES + 1, MOOR_POST, (i, j) => {
    const ang = (j / SIDES) * TAU;
    return [...at(i === 0 ? cut(ang, bore) : 0.075, ang, i === 2 ? bore * 0.03 : bore), -2, ang, i ? 0.12 : 0.45];
  }, { wrap: true, probe: [1, 0], facing: (x, y, z) => sub(add(centre(0.075), axis, 0.2), [x, y, z]) });

  // The turns of the line round it: a sleeve, proud at each turn's back and drawn in between
  // them. (The turns themselves are the shader's.)
  const lashLen = LASH.turns * 2 * ROPE_R;
  B.rand(0.31);
  B.tube(MOOR_LASH, (t) => centre(LASH.from + t * lashLen), (t) => {
    const k = Math.round(t * 2 * LASH.turns), r = radius(LASH.from + t * lashLen);
    return k === 0 || k === 2 * LASH.turns ? r + 0.002 : r + ROPE_R * (k % 2 ? 1.92 : 0.9);
  }, 2 * LASH.turns, 8, { caps: 0, up: e1 });

  // The end, left hanging from the lowest turn on the side away from the line.
  {
    const a0 = LASH.from + lashLen - ROPE_R, out = norm(add(e1.map((v) => v * -0.45), e2, -0.9));
    const p0 = add(centre(a0), out, radius(a0) + ROPE_R);
    B.rand(0.63);
    B.tube(MOOR_LINE, (t) => add(add(p0, [0, -1, 0], TAIL * t), out, 0.05 * t ** 1.3), (t) => ROPE_R * (1 + 0.35 * clamp((t - 0.75) / 0.25, 0, 1) ** 2), 4, 6, { caps: 2, up: e1 });
  }

  // The line itself: off the second turn from the bottom, on the left of the post as the boat
  // sees it, hanging to where it touches the bottom and then lying on it. Over a bottom that
  // slopes evenly that is a catenary with its lowest point where it touches.
  {
    const a0 = LASH.from + lashLen - 3 * ROPE_R;
    const p0 = add(centre(a0), e2, radius(a0) + ROPE_R);
    const g = (s) => ground(p0[0] + s), g0 = g(0), gT = g(TOUCH);
    const h0 = Math.max(p0[1] - g0 - ROPE_R, 0.05);
    let lo = 0.2, hi = 2000;
    for (let n = 0; n < 60; n++) { const m = Math.sqrt(lo * hi); if (m * (Math.cosh(TOUCH / m) - 1) > h0) lo = m; else hi = m; }
    const c = Math.sqrt(lo * hi), run = TOUCH + 2.5;
    B.rand(0.18);
    B.tube(MOOR_LINE, (t) => {
      const s = run * t ** 1.4;
      const hang = s < TOUCH ? g0 + ((gT - g0) * s) / TOUCH + c * (Math.cosh((TOUCH - s) / c) - 1) : -Infinity;
      return [p0[0] + s, Math.max(hang, g(s)) + ROPE_R, p0[2]];
    }, () => ROPE_R, 16, 6, { caps: 0 });
  }
}

// The boat's end, in the boat's frame (x forward, y up, z to starboard): a strop round the
// stern and the line from under it, away toward the post and down. strop: { x, top, bot, rz }.
// to: the level direction of the post from there [x, z].
function buildStern(B, { strop, to }) {
  const mid = (strop.top + strop.bot) / 2, half = (strop.top - strop.bot) / 2;
  const loop = (t) => [strop.x + 0.04 * Math.cos(t * TAU), mid + half * Math.cos(t * TAU), strop.rz * Math.sin(t * TAU)];
  B.rand(0.52);
  B.tube(MOOR_LINE, loop, () => ROPE_R, 12, 5, { caps: 0, up: [1, 0, 0] });
  // It leaves the strop high on the side the post is on, over the rail.
  const fair = loop(to[1] < 0 ? 0.875 : 0.125);
  B.rand(0.18);
  // (A line with some weight on it, lifting out of the troughs and dipping into the crests.
  // Past where it goes under it is taken down far faster than a rope hangs: the swell here
  // stands a metre and a half over the still water and falls a metre under it, and a piece
  // that rides with the hull must not be found lying in the air by a trough. The post is
  // nearly in line with the beach's view of the boat, so that view sees it end on, a line
  // straight down from the stern, and never its profile.)
  B.tube(MOOR_LINE, (t) => {
    const s = STERN.length * t;
    return [fair[0] + to[0] * s, fair[1] - STERN.slope * s + STERN.sag * s * s - STERN.sink * Math.max(s - STERN.dive, 0) ** 2, fair[2] + to[1] * s];
  }, () => ROPE_R, 9, 6, { caps: 0 });
}

// ---------------------------------------------------------------- material

// One more branch for jkSurface (jukung.js): spliced in after its last one, before the flame.
// Here a is metres along the piece and b the angle round it; the post's a runs down from its
// top (below -0.5: the cut, the hollow). jkBounce and jkFuzz are jukung.js's, for this.
export const MOORING_SURFACE = /* glsl */ ` else if (id >= ${MOOR_POST}) {
  // (The post's end of it stands in the shallows, 40 m from the boat.)
  jkBounce = ${v3(SHALLOWS)} * smoothstep(14.0, 30.0, length((uBoatInv * vec4(vWorldPos, 1.0)).xz));
  if (id == ${MOOR_POST}) {
    // The post: bamboo some seasons in the sea. Straw gone grey, a dark ring at every node,
    // split along the grain here and there; bleached toward the top, weed and wet as far up
    // as the waves reach.
    if (a < -0.5) {
      col = a < -1.5 ? jkLin(vec3(0.12, 0.1, 0.075)) : jkLin(vec3(0.63, 0.57, 0.45)) * (0.72 + 0.45 * jkN3(vWorldPos * 80.0));
      jkRough = 0.9;
    } else {
      vec3 cyl = vec3(a, cos(b), sin(b));
      // (The joints come closer together toward the foot.)
      float q = (a - 0.045) / 0.37 * (1.0 + 0.04 * a);
      float sd = (fract(q + 0.5) - 0.5) * 0.37 / (1.0 + 0.08 * a);
      float node = (1.0 - smoothstep(0.004, 0.02, abs(sd))) * jkSee(25.0, fp);
      float streak = jkN3(cyl * vec3(2.7, 2.1, 2.1) + 4.0);
      float fib = mix(0.5, jkN3(cyl * vec3(2.0, 7.0, 7.0)) * 0.6 + jkN3(cyl * vec3(6.0, 15.0, 15.0) + 3.0) * 0.4, jkSee(10.0, fp));
      col = mix(jkLin(vec3(0.7, 0.62, 0.45)), jkLin(vec3(0.61, 0.59, 0.54)), smoothstep(0.3, 0.7, streak)) * (0.84 + 0.2 * streak) * (0.84 + 0.3 * fib);
      // A split: a few millimetres wide, wandering a little, two joints long. (Drawn no finer
      // than a pixel, and paler for it: finer, it comes out as a row of dashes.)
      float cell = b * 1.1141, cid = floor(cell);
      float wide = max(0.05, fwidth(cell));
      float split = step(0.5, jkH(vec2(cid, floor(q * 0.5 + 0.37 * cid))))
        * (1.0 - smoothstep(0.35 * wide, wide, abs(fract(cell) - 0.5 + 0.16 * (jkN(vec2(a * 4.0, cid)) - 0.5)))) * min(1.0, 0.05 / wide);
      col *= (1.0 - 0.45 * split) * (1.0 - 0.45 * node);
      col *= mix(1.0, 1.1, smoothstep(0.0, 0.04, -sd) * (1.0 - smoothstep(0.04, 0.12, -sd)));
      // Greyed by the sun from the top down, and stained under the turns of the line.
      col = mix(col, vec3(dot(col, vec3(0.3333))) * vec3(1.06, 1.02, 0.95), 0.4 * smoothstep(1.3, 0.0, a));
      col *= 1.0 - 0.28 * smoothstep(${f(LASH.from + LASH.turns * 2 * ROPE_R + 0.3)}, ${f(LASH.from + LASH.turns * 2 * ROPE_R)}, a) * step(${f(LASH.from)}, a) * (0.4 + 0.6 * streak);
      float edge = vWorldPos.y + 0.24 * (jkN3(cyl * vec3(1.6, 2.0, 2.0) + 11.0) - 0.5);
      col = mix(col, col * vec3(0.5, 0.56, 0.35), smoothstep(${f(REACH + 0.3)}, ${f(REACH - 0.2)}, edge) * 0.75);
      col = mix(col, jkLin(vec3(0.14, 0.17, 0.1)), smoothstep(${f(REACH * 0.55)}, -0.2, edge) * 0.7);
      // (Barnacles, where it is under more often than not.)
      col = mix(col, jkLin(vec3(0.62, 0.6, 0.54)), smoothstep(0.72, 0.8, jkN3(cyl * vec3(38.0, 9.0, 9.0))) * smoothstep(0.3, 0.05, edge) * jkSee(38.0, fp) * 0.7);
      float wet = smoothstep(${f(REACH + 0.05)}, ${f(REACH - 0.3)}, edge);
      col *= mix(1.0, 0.58, wet);
      jkNormal = jkBump(N, node * 0.003);
      jkRough = mix(0.56, 0.3, wet);
      jkGloss = mix(0.18, 0.75, wet);
    }
  } else {
    // The mooring line: hemp, three strands laid up, gone grey-brown in the salt; dark where
    // the sea keeps it wet, with a little weed on what lies in the water.
    float lap = 1.0, tw;
    if (id == ${MOOR_LASH}) {
      // Round the post, turn beside turn: each turn's back and the dark between two of them.
      float turns = a / ${f(2 * ROPE_R)};
      lap = mix(0.7, sin(3.1416 * fract(turns)), 1.0 - smoothstep(0.5, 2.0, fwidth(turns)));
      tw = b * 1.4324 + fract(turns) * 1.2;
    } else {
      tw = a / ${f(LAY)} + b * 0.4775;
    }
    float see = 1.0 - smoothstep(0.5, 2.0, fwidth(tw));
    float strand = 0.5 + 0.5 * cos(6.2832 * tw);
    col = jkLin(vec3(0.6, 0.53, 0.41)) * (0.68 + 0.44 * mix(0.5, strand, see)) * (0.84 + 0.3 * jkN(vec2(a * 2.3 + vRand * 9.0, vRand * 5.0)));
    col = mix(col, vec3(dot(col, vec3(0.3333))), 0.25);
    col *= 0.45 + 0.55 * lap;
    float wl = vWorldPos.y + 0.12 * (jkN(vec2(a * 3.0, vRand * 7.0)) - 0.5);
    float wet = id == ${MOOR_LASH} ? 0.0 : smoothstep(${f(REACH * 0.75)}, 0.12, wl);
    col = mix(col, col * vec3(0.6, 0.66, 0.46), smoothstep(0.3, 0.0, wl) * wet * 0.6);
    col *= mix(1.0, 0.5, wet);
    jkNormal = jkBump(N, (strand * 0.004 + lap * 0.006) * see);
    jkRough = mix(0.93, 0.45, wet);
    jkGloss = 0.35 * wet;
    // (Dry hemp is hairy, and the hairs light up against the sun. Wet, they lie flat.)
    jkFuzz = 0.3 * (1.0 - wet);
  }
  }`;

// ---------------------------------------------------------------- the mooring

// createBuilder and material: the boat's (jukung.js). boat: { east, north, heading }, where it
// lies. strop: where the line is made fast, in the boat's frame { x, top, bot, rz }. place:
// 'east,north' to stand the post somewhere else.
export function createMooring({ createBuilder, material, boat, strop, place = null }) {
  const given = place ? String(place).split(',').map(Number) : [];
  const [east, north] = given.length >= 2 && given.every(Number.isFinite) ? given : PLACE;

  // The post and its end of the line stand in the world: the boat's group carries them only so
  // that they come and go with it.
  const post = new THREE.Mesh(new THREE.BufferGeometry(), material);
  post.name = 'boat-mooring-post';
  post.matrixAutoUpdate = false; post.matrixWorldAutoUpdate = false;
  // The boat's end is in the boat's frame and moves with it.
  const line = new THREE.Mesh(new THREE.BufferGeometry(), material);
  line.name = 'boat-mooring-line';
  post.visible = line.visible = false;   // until there is ground to stand on

  const state = { foot: 0, triangles: 0 };
  const X = new THREE.Vector3(), Y = new THREE.Vector3(0, 1, 0), Z = new THREE.Vector3();
  // hf: the terrain, as the worker (or the bake) hands it over.
  function plant(hf) {
    const groundAt = (x, y) => sample(hf.heights, hf.N, hf.cell, hf.extent.x0, hf.extent.y0, x, y);
    const foot = groundAt(east, north);
    const de = boat.east - east, dn = boat.north - north, far = Math.hypot(de, dn) || 1;
    const te = de / far, tn = dn / far;
    let B = createBuilder();
    buildShore(B, { sea: -foot, toBoat: Math.atan2(te, tn), ground: (s) => groundAt(east + te * s, north + tn * s) - foot });
    post.geometry.dispose();
    post.geometry = B.geometry();
    X.set(te, 0, -tn);
    Z.crossVectors(X, Y);
    post.matrixWorld.makeBasis(X, Y, Z).setPosition(east, foot, -north);

    // The post as the boat sees it (x forward, z to starboard), from where the line leaves.
    const h = boat.heading * DEG;
    const px = -de * Math.sin(h) - dn * Math.cos(h) - strop.x, pz = -de * Math.cos(h) + dn * Math.sin(h);
    const l = Math.hypot(px, pz) || 1;
    B = createBuilder();
    buildStern(B, { strop, to: [px / l, pz / l] });
    line.geometry.dispose();
    line.geometry = B.geometry();
    post.visible = line.visible = true;
    state.foot = foot;
    state.triangles = (post.geometry.index.count + line.geometry.index.count) / 3;
  }

  return { east, north, post, line, plant, state };
}
