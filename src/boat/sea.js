// The sea's surface worked out on the CPU, for things that float on it (the jukung, v35).
//
// The sea is drawn by src/water/: a wave train in front of the beaches (surfAt in
// water-shader.js, worked out from the terrain's water data, the time and a hash) plus an FFT
// ocean in four cascades (ocean.js), each weighted by how far offshore a point is
// (seaWeights). Nothing of that comes back from the GPU, so this follows the same recipe:
//
//   the wave train   a line-for-line port of the offshore part of surfAt (no swash, no lip)
//   the ocean        the FFT's own spectrum, built again here from the same seed, and its
//                    waves summed directly. Only the two coarse cascades (waves longer than
//                    3.3 m), each in the way that is cheap for it:
//                      the swell and the long wind waves (longer than 24 m, 3,200 of them):
//                        all of them, but only around one place (setOrigin). There every wave
//                        of the same length turns at the same rate, so they are added up once
//                        into about 300 groups, and a frame costs one sine and cosine per
//                        group. What comes out is the height with its first and second
//                        derivatives, good for some metres around (the waves are long).
//                      the chop (3.3 to 24 m): the largest few hundred, anywhere, and only
//                        what a hull can follow: each is faded by the footprint it has to lift
//                        (opts.footprint). A second, sharper list (opts.fine) is for light
//                        things that follow shorter waves than a hull does: the floats.
//
// buildSpectrum below is a copy of the one in src/water/ocean.js (which does not export it).
// If that one changes, this one has to follow: createSea compares the two by the slope variance
// ocean.js publishes in its stats and warns in the console when they differ.
//
// Map convention as everywhere: x east, y north (world z = -north). Heights in metres above
// the still water.

import * as THREE from 'three';

const N = 256;
const G = 9.81;

// ---------------------------------------------------------------- GLSL's helpers, in JS

const clamp01 = (x) => (x < 0 ? 0 : x > 1 ? 1 : x);
// (As GLSL computes it, so edges given the other way round fall the same way.)
const sstep = (a, b, x) => { const t = clamp01((x - a) / (b - a)); return t * t * (3 - 2 * t); };
const mix = (a, b, t) => a + (b - a) * t;
const fract = (x) => x - Math.floor(x);

// Dave Hoskins, "Hash without Sine" (MIT), as in water-shader.js and swash.js.
function hash12(x, y) {
  let ax = fract(x * 0.1031), ay = fract(y * 0.1031), az = ax;
  const d = ax * (ay + 33.33) + ay * (az + 33.33) + az * (ax + 33.33);
  ax += d; ay += d; az += d;
  return fract((ax + ay) * az);
}
function vnoise(x, y) {
  const ix = Math.floor(x), iy = Math.floor(y), fx = x - ix, fy = y - iy;
  const ux = fx * fx * (3 - 2 * fx), uy = fy * fy * (3 - 2 * fy);
  return mix(mix(hash12(ix, iy), hash12(ix + 1, iy), ux), mix(hash12(ix, iy + 1), hash12(ix + 1, iy + 1), ux), uy);
}

// swash.js
const waveClock = (t) => { t += 0.3; return t + 1.6 * Math.sin(t * 0.0937) + 0.9 * Math.sin(t * 0.2167 + 1.3); };
const setSize = (idx) => (0.78 + 0.3 * Math.sin(idx * 0.861 + 0.7)) * mix(0.75, 1.25, hash12(idx, 3.1));
// water-shader.js
const L0 = 22, LB = 0.7;
const shorePhase = (s) => Math.log(1 + LB * Math.max(s, 0) / L0) / LB;

// ---------------------------------------------------------------- the spectrum (ocean.js)

function rng(seed) {
  let s = (seed * 2654435761) >>> 0 || 1;
  const u = () => { s ^= s << 13; s >>>= 0; s ^= s >>> 17; s ^= s << 5; s >>>= 0; return (s + 0.5) / 4294967296; };
  return () => Math.sqrt(-2 * Math.log(u())) * Math.cos(2 * Math.PI * u());
}
function jonswap(w, wp, alpha, gamma) {
  if (w <= 0) return 0;
  const sigma = w <= wp ? 0.07 : 0.09;
  const r = Math.exp(-((w - wp) ** 2) / (2 * sigma * sigma * wp * wp));
  return (alpha * G * G / w ** 5) * Math.exp(-1.25 * (wp / w) ** 4) * gamma ** r;
}
function donelanBanner(theta, w, wp) {
  const r = w / wp;
  let b;
  if (r < 0.95) b = 2.61 * Math.max(r, 0.56) ** 1.3;
  else if (r < 1.6) b = 2.28 * r ** -1.3;
  else b = 10 ** (-0.4 + 0.8393 * Math.exp(-0.567 * Math.log(r * r)));
  const x = b * theta;
  const sech = 1 / Math.cosh(x);
  return (b / (2 * Math.tanh(b * Math.PI))) * sech * sech;
}
// h0(k) for every cascade: amplitudes (re, im) per texel, and the slope variance per cascade
// (the figure ocean.js reports, used here as a checksum).
function buildSpectrum(P) {
  const C = P.cascades.length;
  const W = N * C;
  const gauss = rng(P.seed);
  const U = P.wind, F = P.fetch;
  const wpW = 22 * Math.cbrt((G * G) / (U * F));
  const alphaW = 0.076 * Math.pow((U * U) / (F * G), 0.22);
  const wpS = (2 * Math.PI) / P.swellPeriod;
  const dirW = (P.windHeading * Math.PI) / 180, dirS = (P.swellHeading * Math.PI) / 180;
  const vW = [Math.sin(dirW), Math.cos(dirW)], vS = [Math.sin(dirS), Math.cos(dirS)];
  const kCut = 2 * Math.PI / 0.03;
  const edge = P.cascades.map((L) => (Math.PI * N) / (4 * L));
  const spreadNorm = (() => { let s = 0; const n = 2000; for (let i = 0; i < n; i++) { const t = -Math.PI + (2 * Math.PI * (i + 0.5)) / n; s += Math.pow(Math.cos(t / 2), 2 * P.swellSpread); } return 1 / (s * (2 * Math.PI / n)); })();
  const wind = new Float32Array(W * N * 2), swell = new Float32Array(W * N * 2);
  const idx = (c, i, j) => j * W + c * N + i;
  const kOf = (L, i) => (2 * Math.PI / L) * (i < N / 2 ? i : i - N);
  for (let c = 0; c < C; c++) {
    const L = P.cascades[c], dk = 2 * Math.PI / L;
    const kLo = c === 0 ? 0 : edge[c - 1], kHi = c === C - 1 ? kCut : edge[c];
    for (let j = 0; j < N; j++) {
      for (let i = 0; i < N; i++) {
        const kx = kOf(L, i), ky = kOf(L, j);
        const kl = Math.hypot(kx, ky);
        if (!(i !== N / 2 && j !== N / 2 && kl > 0 && kl >= kLo && kl < kHi)) continue;
        const k = idx(c, i, j);
        const w = Math.sqrt(G * kl);
        const jac = (G / (2 * w)) / kl * dk * dk;
        const dx = kx / kl, dy = ky / kl;
        const thW = Math.acos(Math.max(-1, Math.min(1, dx * vW[0] + dy * vW[1])));
        const thS = Math.acos(Math.max(-1, Math.min(1, dx * vS[0] + dy * vS[1])));
        const damp = Math.exp(-((kl / (kCut * 0.7)) ** 2));
        const pw = jonswap(w, wpW, alphaW, 3.3) * donelanBanner(thW, w, wpW) * jac * damp;
        const ps = jonswap(w, wpS, 1, 7) * Math.pow(Math.cos(thS / 2), 2 * P.swellSpread) * spreadNorm * jac;
        const g1 = gauss(), g2 = gauss();
        const aw = Math.sqrt(pw / 2), as = Math.sqrt(ps / 2);
        wind[k * 2] = g1 * aw; wind[k * 2 + 1] = g2 * aw;
        swell[k * 2] = g1 * as; swell[k * 2 + 1] = g2 * as;
      }
    }
  }
  let varW = 0, varS = 0;
  for (let c = 0; c < C; c++) for (let j = 0; j < N; j++) for (let i = 0; i < N; i++) {
    const k = idx(c, i, j), km = idx(c, (N - i) % N, (N - j) % N);
    const wr = wind[k * 2] + wind[km * 2], wi = wind[k * 2 + 1] - wind[km * 2 + 1];
    const sr = swell[k * 2] + swell[km * 2], si = swell[k * 2 + 1] - swell[km * 2 + 1];
    varW += wr * wr + wi * wi;
    varS += sr * sr + si * si;
  }
  const sW = P.windSeaHs / 4 / Math.sqrt(varW || 1), sS = P.swellHs / 4 / Math.sqrt(varS || 1);
  // (In place: wind becomes h0 itself.)
  for (let n = 0; n < wind.length; n++) wind[n] = wind[n] * sW + swell[n] * sS;
  const slopeVar = [];
  for (let c = 0; c < C; c++) {
    const L = P.cascades[c];
    let s = 0;
    for (let j = 0; j < N; j++) for (let i = 0; i < N; i++) {
      const k = idx(c, i, j), km = idx(c, (N - i) % N, (N - j) % N);
      const kx = kOf(L, i), ky = kOf(L, j);
      s += (wind[k * 2] ** 2 + wind[k * 2 + 1] ** 2 + wind[km * 2] ** 2 + wind[km * 2 + 1] ** 2) * (kx * kx + ky * ky);
    }
    slopeVar.push(+s.toFixed(4));
  }
  return { h0: wind, idx, kOf, slopeVar };
}

// The travelling waves of one cascade, largest first: each texel k of the FFT is one wave
// 2|h0(k)| cos(k.x - w t + arg h0(k)) running along +k. Kept: those up to kMax, faded by the
// footprint, until `keep` of what is left of the energy is in.
// Packed 7 to a wave: kx, ky, omega, amplitude, phase, k's direction east and north.
function components(spec, P, c, { kMax = Infinity, footprint = 0, keep = 2, max = Infinity } = {}) {
  const L = P.cascades[c];
  // A texel's centre is half a texel in from where the FFT puts its sample.
  const half = 0.5 * L / N;
  const list = [];
  let total = 0;
  for (let j = 0; j < N; j++) for (let i = 0; i < N; i++) {
    const k = spec.idx(c, i, j);
    const re = spec.h0[k * 2], im = spec.h0[k * 2 + 1];
    if (re === 0 && im === 0) continue;
    const kx = spec.kOf(L, i), ky = spec.kOf(L, j), kl = Math.hypot(kx, ky);
    if (kl > kMax) continue;
    const a = 2 * Math.hypot(re, im) * Math.exp(-0.5 * (kl * footprint) ** 2);
    total += a * a;
    list.push([kx, ky, Math.sqrt(G * kl), a, Math.atan2(im, re) - (kx + ky) * half, kx / kl, ky / kl]);
  }
  list.sort((p, q) => q[3] - p[3]);
  let n = 0, sum = 0;
  while (n < list.length && n < max && sum < keep * total) { sum += list[n][3] ** 2; n++; }
  const out = new Float64Array(n * 7);
  for (let m = 0; m < n; m++) out.set(list[m], m * 7);
  return { data: out, count: n, of: list.length, rms: Math.sqrt(sum / 2), rmsAll: Math.sqrt(total / 2), choppy: P.choppy[c] };
}

// ---------------------------------------------------------------- the sampler

// water: what createWater returned. opts: kMax (rad/m, the shortest wave followed),
// footprint (m, the radius a wave has to lift) and fine (the same for at()'s sharp reading),
// keep (share of the energy), max (waves per cascade).
export function createSea(water, opts = {}) {
  const o = { kMax: 1.3, footprint: 2.0, fine: 0.6, keep: 0.97, max: 320, ...opts };
  const P = water.ocean.params;
  const spec = buildSpectrum(P);
  const published = water.ocean.stats?.slopeVar;
  const same = !published || published.every((v, c) => Math.abs(v - spec.slopeVar[c]) <= 1e-3 * Math.max(1, Math.abs(v)));
  if (!same) console.warn('boat: the wave spectrum here no longer matches src/water/ocean.js (buildSpectrum was copied from it)', spec.slopeVar, published);
  const casc = [components(spec, P, 0), components(spec, P, 1, o), components(spec, P, 1, { ...o, footprint: o.fine, max: Math.min(o.max, 240) })];
  spec.h0 = null;

  // The long waves around one place. Per group of equal wavelength, eight sums, each a complex
  // number that turns with the group's omega: the height, its slope east and north, its three
  // second derivatives, and the displacement east and north.
  let ox = 0, oy = 0, groups = null, groupN = 0;
  const FIELDS = 8, REACH = 14;
  function setOrigin(x, y) {
    ox = x; oy = y;
    const w = casc[0].data, dk2 = (2 * Math.PI / P.cascades[0]) ** 2;
    const index = new Map(), rows = [];
    for (let m = 0, q = 0; m < casc[0].count; m++, q += 7) {
      const kx = w[q], ky = w[q + 1];
      const key = Math.round((kx * kx + ky * ky) / dk2);
      let g = index.get(key);
      if (g === undefined) { g = rows.length; index.set(key, g); rows.push(new Float64Array(1 + FIELDS * 2)); rows[g][0] = w[q + 2]; }
      const th = kx * x + ky * y + w[q + 4], cr = w[q + 3] * Math.cos(th), ci = w[q + 3] * Math.sin(th);
      const r = rows[g];
      r[1] += cr; r[2] += ci;                                   // h
      r[3] -= kx * ci; r[4] += kx * cr;                         // dh/dx   (times i kx)
      r[5] -= ky * ci; r[6] += ky * cr;                         // dh/dy
      r[7] -= kx * kx * cr; r[8] -= kx * kx * ci;               // d2h/dx2
      r[9] -= kx * ky * cr; r[10] -= kx * ky * ci;              // d2h/dxdy
      r[11] -= ky * ky * cr; r[12] -= ky * ky * ci;             // d2h/dy2
      r[13] -= w[q + 5] * ci; r[14] += w[q + 5] * cr;           // displacement east (times i k/|k|)
      r[15] -= w[q + 6] * ci; r[16] += w[q + 6] * cr;           // and north
    }
    groupN = rows.length;
    const stride = 1 + FIELDS * 2;
    groups = new Float64Array(groupN * stride);
    rows.forEach((r, g) => groups.set(r, g * stride));
    longT = NaN;
  }
  const F = new Float64Array(FIELDS);
  let longT = NaN;
  function longWaves(t) {
    if (t === longT) return;
    longT = t;
    F.fill(0);
    for (let g = 0, q = 0; g < groupN; g++, q += 1 + FIELDS * 2) {
      const c = Math.cos(groups[q] * t), s = Math.sin(groups[q] * t);
      for (let f = 0, p = q + 1; f < FIELDS; f++, p += 2) F[f] += groups[p] * c + groups[p + 1] * s;
    }
  }

  // The terrain's water data (worker.js): R the seabed's height, G metres offshore, B how much
  // of a beach the nearest shore is. Half floats, read as the GPU reads them (bilinear,
  // clamped, giving way to open ocean at the edge of the map).
  let data = null, DN = 0, x0 = 0, y0 = 0, size = 1;
  const half = THREE.DataUtils.fromHalfFloat;
  const d = { r: -45, g: 900, b: 0 };
  function dataAt(x, y) {
    if (!data) { d.r = -45; d.g = 900; d.b = 0; return d; }
    const u = (x - x0) / size, v = (y - y0) / size;
    const e = Math.min(Math.min(u, v), Math.min(1 - u, 1 - v));
    const fi = clamp01(u) * DN - 0.5, fj = clamp01(v) * DN - 0.5;
    const i = Math.floor(fi), j = Math.floor(fj), a = fi - i, b = fj - j;
    const i0 = Math.max(i, 0), i1 = Math.min(i + 1, DN - 1), j0 = Math.max(j, 0), j1 = Math.min(j + 1, DN - 1);
    const p00 = (j0 * DN + i0) * 4, p10 = (j0 * DN + i1) * 4, p01 = (j1 * DN + i0) * 4, p11 = (j1 * DN + i1) * 4;
    const w00 = (1 - a) * (1 - b), w10 = a * (1 - b), w01 = (1 - a) * b, w11 = a * b;
    const ch = (q) => half(data[p00 + q]) * w00 + half(data[p10 + q]) * w10 + half(data[p01 + q]) * w01 + half(data[p11 + q]) * w11;
    const m = sstep(0, 0.02, e);
    d.r = mix(-45, ch(0), m); d.g = mix(900, ch(1), m); d.b = mix(0, ch(2), m);
    return d;
  }

  // surfAt's height, offshore of the swash (water-shader.js; the names are its own).
  function surf(px, py, t) {
    const s = d.g;
    if (s > 280 || s < -30) return 0;
    const beachy = sstep(0.25, 0.85, d.b);
    if (beachy <= 0) return 0;
    const period = water.uniforms.uPeriod.value, swellH = water.uniforms.uSwell.value, breakAt = water.uniforms.uBreakAt.value;
    const jag = vnoise(px * 0.012, py * 0.012) * 0.45 + vnoise(px * 0.035, py * 0.035) * 0.16 + vnoise(px * 0.11, py * 0.11) * 0.03;
    const clock = waveClock(t) / period;
    const endMask = sstep(55, 85, py) * (1 - sstep(145, 185, py)) * (1 - sstep(145, 175, px));
    const phaseBand = sstep(5, 12, s) * (1 - sstep(45, 65, s));
    const guideS = (px - 95) * -0.98 + (py - 200) * 0.21;
    const phase0 = shorePhase(mix(s, guideS, endMask * phaseBand)) + clock + jag;
    const idx = Math.floor(phase0 + 0.5);
    const v0 = phase0 - idx;
    const nb = idx + (v0 > 0 ? 1 : -1);
    const hand = 0.5 * sstep(0.25, 0.5, Math.abs(v0));
    const wob = mix(vnoise(px * 0.03 + idx * 5.13, py * 0.03 + idx * 5.13), vnoise(px * 0.03 + nb * 5.13, py * 0.03 + nb * 5.13), hand) - 0.5;
    const v = v0 + wob * 0.12;
    const bigK = setSize(idx) * mix(0.6, 1.2, vnoise(px * 0.04 + idx * 7.31, py * 0.04 + idx * 7.31));
    const bigN = setSize(nb) * mix(0.6, 1.2, vnoise(px * 0.04 + nb * 7.31, py * 0.04 + nb * 7.31));
    const big = mix(bigK, bigN, hand);
    const br = breakAt * (0.7 + 0.35 * big);
    const offshoreFade = (1 - sstep(110, 200, s)) * beachy;
    const grow = 0.2 + 2.0 * sstep(br + 70, br, s);
    const shrink = mix(1, 0.18 + 0.3 * clamp01(s / Math.max(br, 1)), sstep(br - 1, br - 7, s));
    const depthHere = Math.max(-d.r, 0);
    const A = Math.min(swellH * grow * big * offshoreFade * shrink, 0.85 * depthHere + 0.35);
    const Ak = Math.min(swellH * grow * bigK * offshoreFade * shrink, 0.85 * depthHere + 0.35);
    const Lhere = L0 + LB * Math.max(s, 0);
    const wf = Math.max(mix(0.14, 0.095, sstep(br + 45, br, s)), 2.3 / Lhere);
    const w = v < 0 ? wf : 0.24;
    let crest = Math.exp(-(v * v) / (w * w)) * sstep(0.44, 0.32, Math.abs(v));
    const brK = breakAt * (0.7 + 0.35 * bigK);
    const tau = (brK + 5 - (s - v * Lhere)) / 8 + wob * 0.28;
    const collapse = sstep(0.68, 1.12, tau);
    if (collapse > 0) {
      const borePhase = v + Ak * 0.68 / Math.max(Lhere, 1);
      const boreW = borePhase < 0 ? 0.085 : 0.18;
      crest = mix(crest, Math.exp(-((borePhase / boreW) ** 2)) * 0.64, collapse);
    }
    const h = Math.max(Ak * crest - 0.28 * A, -0.45 * depthHere) * offshoreFade;
    return mix(h, Math.min(h, -0.6), sstep(0, -1.2, s));
  }

  // One cascade's height and horizontal displacement at (x, y), time t, into acc: every wave
  // it has, one by one.
  const acc = { h: 0, dx: 0, dy: 0 };
  // The long waves: around the origin from the sums, anywhere else the slow way.
  function long(x, y, t) {
    const rx = x - ox, ry = y - oy;
    if (!groups || rx * rx + ry * ry > REACH * REACH) { cascade(0, x, y, t); return; }
    longWaves(t);
    acc.h = F[0] + F[1] * rx + F[2] * ry + 0.5 * (F[3] * rx * rx + F[5] * ry * ry) + F[4] * rx * ry;
    acc.dx = F[6] * casc[0].choppy; acc.dy = F[7] * casc[0].choppy;
  }
  function cascade(c, x, y, t) {
    const { data: w, count, choppy } = casc[c];
    let h = 0, dx = 0, dy = 0;
    for (let m = 0, q = 0; m < count; m++, q += 7) {
      const th = w[q] * x + w[q + 1] * y - w[q + 2] * t + w[q + 4];
      const a = w[q + 3], sn = a * Math.sin(th);
      h += a * Math.cos(th);
      dx -= w[q + 5] * sn; dy -= w[q + 6] * sn;
    }
    acc.h = h; acc.dx = dx * choppy; acc.dy = dy * choppy;
  }

  const out = { h: 0, dx: 0, dy: 0, surf: 0, swell: 0, wind: 0, depth: 0, offshore: 0, beach: 0 };
  return {
    opts: o,
    casc,
    spectrumMatches: same,
    get ready() { return !!data; },
    // Where the long waves are summed for (a float calls this once, where it lies).
    setOrigin,
    get groups() { return groupN; },
    // For checking against the GPU (tools): one cascade at a point, the slow way and the fast.
    debug: { cascade: (c, x, y, t) => { cascade(c, x, y, t); return { ...acc }; }, long: (x, y, t) => { long(x, y, t); return { ...acc }; } },
    // hf: the terrain as the worker (or the bake) hands it over.
    setData(hf) { data = hf.water; DN = hf.N; x0 = hf.extent.x0; y0 = hf.extent.y0; size = hf.extent.size; },
    // The water that rests at (x east, y north): its height now, and how far the waves have
    // carried it sideways (dx east, dy north). The same object every call. sharp: with the
    // shorter chop a float follows and a hull does not.
    at(x, y, t, sharp = false) {
      dataAt(x, y);
      const s = d.g, nearBeach = sstep(0.25, 0.85, d.b), breakAt = water.uniforms.uBreakAt.value;
      // seaWeights (water-shader.js), the two coarse cascades.
      const swell = mix(sstep(-2, 30, s), sstep(breakAt + 40, breakAt + 160, s), nearBeach);
      let wind = mix(sstep(-2, 14, s), 0.25 + 0.75 * sstep(breakAt, breakAt + 70, s), nearBeach);
      const g = water.uniforms.uGust.value;
      const qx = x * g.x - g.y * t * g.x, qy = y * g.x - g.z * t * g.x;
      const gust = mix(1, 0.45 + 1.1 * (0.67 * vnoise(qx + 3.1, qy + 7.7) + 0.33 * vnoise(qx * 2.03 + 20.2, qy * 2.03 + 20.2)), g.w);
      wind *= mix(1, gust, 0.6);
      out.surf = surf(x, y, t);
      out.swell = swell; out.wind = wind; out.depth = -d.r; out.offshore = s; out.beach = d.b;
      let h = out.surf, dx = 0, dy = 0;
      if (swell > 0.001) { long(x, y, t); h += swell * acc.h; dx += swell * acc.dx; dy += swell * acc.dy; }
      if (wind > 0.001) { cascade(sharp ? 2 : 1, x, y, t); h += wind * acc.h; dx += wind * acc.dx; dy += wind * acc.dy; }
      out.h = h; out.dx = dx; out.dy = dy;
      return out;
    },
  };
}
