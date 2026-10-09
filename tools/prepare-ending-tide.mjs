// Makes the map the ending's wave needs (src/scroll/tide.js, v35 rounds 17 and 19): where the
// water is in the picture the wave takes its water and foam from (assets/hero/sand-end-sea.jpg:
// sand with the sea's edge in its top left corner, from Sam's concept "the last wave"), as a
// small picture the shader can ask "how far is this point from the water's edge?"
// (Until round 19 the last card lay on that picture itself. It lies on sand with footprints
// now, assets/hero/sand-end.jpg, and the sea is carried over it from this one.)
//
//   assets/hero/sand-end-tide.png    640 x 400, the whole photograph
//     red     the distance to the water's edge, finely, near it: 128 on the edge, one step
//             for NEAR / 127 of the picture's height, more on the sand and less in the water
//     green   how near the foam is, loosely (the white band, blurred wide)
//     blue    how much foam there is here (the same band, blurred only a little): where
//             white in the photograph is foam and not a glint on the water
//
// How the edge is found. Foam is the only thing in the picture that is white in all three
// channels (sand and sunlit water are warm: their blue is low). The foam's band is the white
// pixels, blurred so that the holes in its lace close and the single sparkles on the sand
// go. The wave came from the top left corner, so along every line going that way the water
// is everything from the corner up to the last of the band. That makes the edge a line that
// cannot fold back on itself, which is what the page's wave needs, and loses nothing here.
//
// It also prints what tide.js has written into it as constants: which way the wave runs (at
// right angles to the straight line that fits the edge best), how far along that way the edge
// is, and how deep the foam goes behind it.
//
//   node tools/prepare-ending-tide.mjs      needs ffmpeg

import { spawnSync } from 'node:child_process';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';

const root = join(dirname(fileURLToPath(import.meta.url)), '..');
const SRC = join(root, 'assets/hero/sand-end-sea.jpg'), OUT = join(root, 'assets/hero/sand-end-tide.png');
const W = 640, H = 400;            // the map (the photograph is 3840 x 2400: one cell is six pixels)
const NEAR = 0.08;                 // what red spans each way, in heights of the picture
const WHITE = 196;                 // from here up in every channel a pixel is foam
const MARGIN = 0.004;              // the edge is taken this far out from the last of the foam

const run = (args, opts = {}) => {
  const r = spawnSync('ffmpeg', ['-y', '-v', 'error', ...args], { maxBuffer: 1 << 28, ...opts });
  if (r.status !== 0) throw new Error('ffmpeg: ' + r.stderr);
  return r.stdout;
};
const raw = run(['-i', SRC, '-vf', `scale=${W}:${H}:flags=area`, '-frames:v', '1', '-pix_fmt', 'rgb24', '-f', 'rawvideo', '-']);
if (raw.length !== W * H * 3) throw new Error(`${SRC}: could not be read at ${W} x ${H}`);
const N = W * H;

// A blur: three passes of a box, rows then columns (as good as a Gaussian for this).
function blur(src, r) {
  let a = Float32Array.from(src), b = new Float32Array(N);
  for (let pass = 0; pass < 3; pass++) {
    for (let y = 0; y < H; y++) for (let x = 0; x < W; x++) {
      let s = 0, n = 0;
      for (let k = Math.max(0, x - r); k <= Math.min(W - 1, x + r); k++) { s += a[y * W + k]; n++; }
      b[y * W + x] = s / n;
    }
    for (let y = 0; y < H; y++) for (let x = 0; x < W; x++) {
      let s = 0, n = 0;
      for (let k = Math.max(0, y - r); k <= Math.min(H - 1, y + r); k++) { s += b[k * W + x]; n++; }
      a[y * W + x] = s / n;
    }
  }
  return a;
}

const white = new Float32Array(N);
for (let i = 0; i < N; i++) white[i] = Math.min(raw[i * 3], raw[i * 3 + 1], raw[i * 3 + 2]) >= WHITE ? 1 : 0;
const band = blur(white, 3);
// Only the band that runs across the top left corner: its largest piece that is joined up.
const inBand = new Uint8Array(N);
{
  const seen = new Int32Array(N).fill(-1);
  let best = -1, bestSize = 0, id = 0;
  for (let i = 0; i < N; i++) {
    if (seen[i] >= 0 || band[i] < 0.22) continue;
    const stack = [i]; let size = 0;
    seen[i] = id;
    while (stack.length) {
      const k = stack.pop(), x = k % W, y = (k / W) | 0;
      size++;
      for (const [dx, dy] of [[1, 0], [-1, 0], [0, 1], [0, -1]]) {
        const u = x + dx, v = y + dy;
        if (u < 0 || v < 0 || u >= W || v >= H) continue;
        const j = v * W + u;
        if (seen[j] < 0 && band[j] >= 0.22) { seen[j] = id; stack.push(j); }
      }
    }
    if (size > bestSize) { bestSize = size; best = id; }
    id++;
  }
  for (let i = 0; i < N; i++) inBand[i] = seen[i] === best ? 1 : 0;
}

// Water: from the corner up to the last of the band, along the wave's way. The way is found
// in two rounds: a first guess, the edge it gives, the line that fits that edge, its normal.
// Points are in heights of the picture: x from 0 to W / H, y from 0 to 1.
const S = 1 / H;
let n = [Math.SQRT1_2, Math.SQRT1_2], p0 = 0, water = null, edge = null;
for (let round = 0; round < 3; round++) {
  const t = [n[1], -n[0]];
  // For each line across the wave's way (a bin of q), the furthest the band gets along it.
  const BIN = S * 0.75, far = new Map();
  for (let y = 0; y < H; y++) for (let x = 0; x < W; x++) {
    if (!inBand[y * W + x]) continue;
    const mx = (x + 0.5) * S, my = (y + 0.5) * S, p = mx * n[0] + my * n[1], q = Math.round((mx * t[0] + my * t[1]) / BIN);
    if (!far.has(q) || far.get(q) < p) far.set(q, p);
  }
  // (Smoothed a little along the edge, and carried on level past its two ends.)
  const qs = [...far.keys()].sort((a, b) => a - b), q0 = qs[0], q1 = qs[qs.length - 1];
  const reach = (q) => {
    let s = 0, k = 0;
    for (let d = -3; d <= 3; d++) { const v = far.get(Math.max(q0, Math.min(q1, q + d))); if (v !== undefined) { s += v; k++; } }
    return k ? s / k : far.get(q0);
  };
  water = new Uint8Array(N);
  for (let y = 0; y < H; y++) for (let x = 0; x < W; x++) {
    const mx = (x + 0.5) * S, my = (y + 0.5) * S, p = mx * n[0] + my * n[1], q = Math.round((mx * t[0] + my * t[1]) / BIN);
    water[y * W + x] = p <= reach(q) + MARGIN ? 1 : 0;
  }
  // The edge's points, and the straight line through them (the direction they vary least in).
  edge = [];
  for (let y = 1; y < H - 1; y++) for (let x = 1; x < W - 1; x++) {
    const i = y * W + x;
    if (water[i] && !(water[i + 1] && water[i - 1] && water[i + W] && water[i - W])) edge.push([(x + 0.5) * S, (y + 0.5) * S]);
  }
  let cx = 0, cy = 0;
  for (const e of edge) { cx += e[0]; cy += e[1]; }
  cx /= edge.length; cy /= edge.length;
  let xx = 0, xy = 0, yy = 0;
  for (const e of edge) { const dx = e[0] - cx, dy = e[1] - cy; xx += dx * dx; xy += dx * dy; yy += dy * dy; }
  const a = 0.5 * Math.atan2(2 * xy, xx - yy);            // the line's own direction
  let nx = -Math.sin(a), ny = Math.cos(a);
  if (nx < 0) { nx = -nx; ny = -ny; }
  n = [nx, ny];
  p0 = cx * nx + cy * ny;
}

// How far each cell is from the edge (exactly: the lower envelope of parabolas, rows then
// columns), from the water for the sand and from the sand for the water.
function distance(inside) {
  const INF = 1e12, f = new Float64Array(N);
  for (let i = 0; i < N; i++) f[i] = inside[i] ? 0 : INF;
  const pass = (len, get, set) => {
    const v = new Int32Array(len), z = new Float64Array(len + 1), d = new Float64Array(len);
    let k = 0;
    v[0] = 0; z[0] = -INF; z[1] = INF;
    for (let q = 1; q < len; q++) {
      let s;
      do { const r = v[k]; s = ((get(q) + q * q) - (get(r) + r * r)) / (2 * q - 2 * r); } while (s <= z[k] && --k >= 0);
      k++; v[k] = q; z[k] = s; z[k + 1] = INF;
    }
    k = 0;
    for (let q = 0; q < len; q++) { while (z[k + 1] < q) k++; const r = v[k]; d[q] = (q - r) * (q - r) + get(r); }
    for (let q = 0; q < len; q++) set(q, d[q]);
  };
  for (let x = 0; x < W; x++) pass(H, (y) => f[y * W + x], (y, val) => { f[y * W + x] = val; });
  for (let y = 0; y < H; y++) pass(W, (x) => f[y * W + x], (x, val) => { f[y * W + x] = val; });
  return f;
}
const toWater = distance(water), toSand = distance(water.map((v) => 1 - v));
const out = Buffer.alloc(N * 3);
const foam = blur(inBand, 2), around = blur(inBand, 8);
let deep = 0;
for (let i = 0; i < N; i++) {
  // (Half a cell taken off each: the edge is between a water cell and a sand cell.)
  const d = water[i] ? -(Math.sqrt(toSand[i]) - 0.5) * S : (Math.sqrt(toWater[i]) - 0.5) * S;
  out[i * 3] = Math.max(0, Math.min(255, Math.round(128 + (d / NEAR) * 127)));
  out[i * 3 + 1] = Math.round(Math.min(1, around[i] * 1.25) * 255);
  out[i * 3 + 2] = Math.round(Math.min(1, foam[i] * 1.6) * 255);
  if (inBand[i] && -d > deep) deep = -d;
}
run(['-f', 'rawvideo', '-pix_fmt', 'rgb24', '-s', `${W}x${H}`, '-i', '-', '-frames:v', '1', '-compression_level', '100', OUT], { input: out });

// The edge against its straight line: how far it wanders.
let lo = 0, hi = 0;
for (const e of edge) { const d = e[0] * n[0] + e[1] * n[1] - p0; lo = Math.min(lo, d); hi = Math.max(hi, d); }
console.log(`assets/hero/sand-end-tide.png  ${W} x ${H}`);
console.log(`  the wave runs along  [${n[0].toFixed(4)}, ${n[1].toFixed(4)}]   (x right, y down, in heights of the picture)`);
console.log(`  the edge is at       ${p0.toFixed(4)} along it, and wanders from ${lo.toFixed(3)} to +${hi.toFixed(3)}`);
console.log(`  the foam goes        ${deep.toFixed(3)} deep behind the edge at its deepest`);
// The sand's own colour in this picture, a little way out from the water: what the water's
// colours are measured against (tide.js lays them over another sand as so much more or less).
let sr = 0, sg = 0, sb = 0, sn = 0;
for (let i = 0; i < N; i++) { const d = Math.sqrt(toWater[i]) * S; if (!water[i] && d > 0.12 && d < 0.45) { sr += raw[i * 3]; sg += raw[i * 3 + 1]; sb += raw[i * 3 + 2]; sn++; } }
console.log(`  its sand is          [${(sr / sn / 255).toFixed(3)}, ${(sg / sn / 255).toFixed(3)}, ${(sb / sn / 255).toFixed(3)}]`);
console.log(`  NEAR ${NEAR}  (tide.js has the same)`);
