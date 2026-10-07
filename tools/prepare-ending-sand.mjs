// Makes the sand under the card at the end of the page (assets/hero/sand-end.jpg) from Sam's
// concept picture for the ending, "05 tide line" (ending-concept-05-tide-line.png: sand, a
// line of foam in the top left corner, and a postcard painted into it with its shadow).
//
// The page lays its own, live card on the sand, so the painted one has to go. This takes it
// out and puts sand there:
//   the colour   the picture is averaged in 16 px cells, and the cells under the card are
//                filled in from the cells around them (each the mean of its neighbours, relaxed
//                until it settles: the smoothest surface through the edge of the hole)
//   the grain    what is finer than those cells, lifted from a clean patch of the same sand and
//                laid across the hole as overlapping tiles, each from a random place in the
//                patch, cross-faded without losing contrast (the sum of the tiles divided by
//                the root of the sum of their squared weights, which keeps a noise's strength).
//                Mirrored tiles, tried first, left kaleidoscope figures at every seam.
// and the two are laid in through a soft-edged mask. What comes out is plain fine sand without
// the gentle hollows the real picture has around it. That is enough: the live card lies on that
// very place, and what is under it only shows for the second it takes to turn over.
//
//   node tools/prepare-ending-sand.mjs [source.png]      needs ffmpeg
//
// The best version of this picture is one generated without the card in it (the prompt is in
// assets/hero/CREDITS.md). Drop that in as assets/hero/sand-end.jpg and this tool is not needed.

import { spawnSync } from 'node:child_process';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';

const root = join(dirname(fileURLToPath(import.meta.url)), '..');
const SRC = process.argv[2] ?? join(root, 'ending-concept-05-tide-line.png');
const OUT = join(root, 'assets/hero/sand-end.jpg');
const W = 3840, H = 2400, CELL = 16;

// The painted card and its shadow, with room to spare (pixels in the 3840 x 2400 picture).
const HOLE = [[950, 520], [3080, 345], [3190, 400], [3480, 2120], [3300, 2170], [1090, 2170], [1040, 2110]];
// A clean patch of the same sand to take the grain from (the lower left corner).
const GRAIN = { x: 130, y: 1700, w: 860, h: 670 };
// How far the mask's edge is softened, in pixels each way.
const FEATHER = 16;

const probe = spawnSync('ffprobe', ['-v', 'error', '-show_entries', 'stream=width,height', '-of', 'csv=p=0', SRC], { encoding: 'utf8' }).stdout.trim();
if (probe !== `${W},${H}`) throw new Error(`${SRC} is ${probe}, expected ${W},${H}`);
const img = spawnSync('ffmpeg', ['-v', 'error', '-i', SRC, '-frames:v', '1', '-pix_fmt', 'rgb24', '-f', 'rawvideo', '-'], { maxBuffer: 1 << 28 }).stdout;
if (img.length !== W * H * 3) throw new Error('could not read the picture');

// ---- the mask: 1 in the hole, 0 outside, softened at the edge (two box blurs)
let mask = new Float32Array(W * H);
for (let y = 0; y < H; y++) {
  // (Where the row crosses the polygon's edges: fill between pairs of crossings.)
  const xs = [];
  for (let i = 0; i < HOLE.length; i++) {
    const [x0, y0] = HOLE[i], [x1, y1] = HOLE[(i + 1) % HOLE.length];
    if ((y0 <= y && y1 > y) || (y1 <= y && y0 > y)) xs.push(x0 + ((y - y0) / (y1 - y0)) * (x1 - x0));
  }
  xs.sort((a, b) => a - b);
  for (let k = 0; k + 1 < xs.length; k += 2) mask.fill(1, y * W + Math.max(0, Math.ceil(xs[k])), y * W + Math.min(W, Math.floor(xs[k + 1]) + 1));
}
const hard = mask;
function box(src, r) {
  const tmp = new Float32Array(W * H), out = new Float32Array(W * H), n = 2 * r + 1;
  for (let y = 0; y < H; y++) {
    let s = 0;
    for (let x = -r; x <= r; x++) s += src[y * W + Math.min(W - 1, Math.max(0, x))];
    for (let x = 0; x < W; x++) { tmp[y * W + x] = s / n; s += src[y * W + Math.min(W - 1, x + r + 1)] - src[y * W + Math.max(0, x - r)]; }
  }
  for (let x = 0; x < W; x++) {
    let s = 0;
    for (let y = -r; y <= r; y++) s += tmp[Math.min(H - 1, Math.max(0, y)) * W + x];
    for (let y = 0; y < H; y++) { out[y * W + x] = s / n; s += tmp[Math.min(H - 1, y + r + 1) * W + x] - tmp[Math.max(0, y - r) * W + x]; }
  }
  return out;
}
mask = box(box(hard, FEATHER), FEATHER);

// ---- the colour: 16 px cells, the hole's filled in from its surroundings
const GW = W / CELL, GH = H / CELL;
const all = new Float32Array(GW * GH * 3), open = new Float32Array(GW * GH * 3), known = new Uint8Array(GW * GH);
for (let gy = 0; gy < GH; gy++) for (let gx = 0; gx < GW; gx++) {
  const sum = [0, 0, 0];
  let touched = false;
  for (let y = gy * CELL; y < (gy + 1) * CELL; y++) for (let x = gx * CELL; x < (gx + 1) * CELL; x++) {
    const i = (y * W + x) * 3;
    sum[0] += img[i]; sum[1] += img[i + 1]; sum[2] += img[i + 2];
    if (mask[y * W + x] > 0.002) touched = true;
  }
  const g = (gy * GW + gx) * 3;
  for (let c = 0; c < 3; c++) all[g + c] = open[g + c] = sum[c] / (CELL * CELL);
  known[gy * GW + gx] = touched ? 0 : 1;
}
{
  // Start the hole at the mean of what is known, then relax it.
  const mean = [0, 0, 0];
  let n = 0;
  for (let g = 0; g < GW * GH; g++) if (known[g]) { n++; for (let c = 0; c < 3; c++) mean[c] += open[g * 3 + c]; }
  for (let g = 0; g < GW * GH; g++) if (!known[g]) for (let c = 0; c < 3; c++) open[g * 3 + c] = mean[c] / n;
  for (let it = 0; it < 6000; it++) {
    for (let gy = 0; gy < GH; gy++) for (let gx = 0; gx < GW; gx++) {
      const g = gy * GW + gx;
      if (known[g]) continue;
      const l = gy * GW + Math.max(0, gx - 1), r = gy * GW + Math.min(GW - 1, gx + 1), u = Math.max(0, gy - 1) * GW + gx, d = Math.min(GH - 1, gy + 1) * GW + gx;
      for (let c = 0; c < 3; c++) open[g * 3 + c] = (open[l * 3 + c] + open[r * 3 + c] + open[u * 3 + c] + open[d * 3 + c]) / 4;
    }
  }
}
// A grid of cell means read back at a pixel, smoothly (bilinear between cell centres).
const at = (grid, x, y, c) => {
  const fx = Math.min(GW - 1, Math.max(0, (x + 0.5) / CELL - 0.5)), fy = Math.min(GH - 1, Math.max(0, (y + 0.5) / CELL - 0.5));
  const x0 = Math.floor(fx), y0 = Math.floor(fy), x1 = Math.min(GW - 1, x0 + 1), y1 = Math.min(GH - 1, y0 + 1), tx = fx - x0, ty = fy - y0;
  return (grid[(y0 * GW + x0) * 3 + c] * (1 - tx) + grid[(y0 * GW + x1) * 3 + c] * tx) * (1 - ty) + (grid[(y1 * GW + x0) * 3 + c] * (1 - tx) + grid[(y1 * GW + x1) * 3 + c] * tx) * ty;
};

// ---- the grain: the clean patch, less its own smooth colour
const grain = new Float32Array(GRAIN.w * GRAIN.h * 3);
for (let y = 0; y < GRAIN.h; y++) for (let x = 0; x < GRAIN.w; x++) {
  const px = GRAIN.x + x, py = GRAIN.y + y;
  for (let c = 0; c < 3; c++) grain[(y * GRAIN.w + x) * 3 + c] = img[(py * W + px) * 3 + c] - at(all, px, py, c);
}
// Laid across the hole's bounding box as tiles of TILE px on a grid of half that, so every
// pixel is under four of them.
const TILE = 320, STEP = TILE / 2;
let bx0 = W, by0 = H, bx1 = 0, by1 = 0;
for (let y = 0; y < H; y++) for (let x = 0; x < W; x++) if (mask[y * W + x] > 0.002) { if (x < bx0) bx0 = x; if (x > bx1) bx1 = x; if (y < by0) by0 = y; if (y > by1) by1 = y; }
const BW = bx1 - bx0 + 1, BH = by1 - by0 + 1;
const laid = new Float32Array(BW * BH * 3), weight2 = new Float32Array(BW * BH);
let seed = 20261006;
const rnd = () => ((seed = (Math.imul(seed, 1664525) + 1013904223) >>> 0) / 4294967296);
const hann = Float32Array.from({ length: TILE }, (_, i) => 0.5 - 0.5 * Math.cos((2 * Math.PI * (i + 0.5)) / TILE));
for (let ty = -STEP; ty < BH; ty += STEP) for (let tx = -STEP; tx < BW; tx += STEP) {
  const sx = Math.floor(rnd() * (GRAIN.w - TILE)), sy = Math.floor(rnd() * (GRAIN.h - TILE)), fx = rnd() < 0.5, fy = rnd() < 0.5;
  for (let v = 0; v < TILE; v++) {
    const y = ty + v;
    if (y < 0 || y >= BH) continue;
    for (let u = 0; u < TILE; u++) {
      const x = tx + u;
      if (x < 0 || x >= BW) continue;
      const w = hann[u] * hann[v], gi = ((sy + (fy ? TILE - 1 - v : v)) * GRAIN.w + sx + (fx ? TILE - 1 - u : u)) * 3, o = y * BW + x;
      laid[o * 3] += w * grain[gi]; laid[o * 3 + 1] += w * grain[gi + 1]; laid[o * 3 + 2] += w * grain[gi + 2];
      weight2[o] += w * w;
    }
  }
}

// ---- together
const out = Buffer.from(img);
let changed = 0;
for (let y = 0; y < H; y++) for (let x = 0; x < W; x++) {
  const m = mask[y * W + x];
  if (m <= 0.002) continue;
  changed++;
  const o = (y - by0) * BW + (x - bx0), k = 1 / Math.sqrt(Math.max(weight2[o], 1e-6)), i = (y * W + x) * 3;
  for (let c = 0; c < 3; c++) out[i + c] = Math.min(255, Math.max(0, Math.round(img[i + c] * (1 - m) + (at(open, x, y, c) + laid[o * 3 + c] * k) * m)));
}
const enc = spawnSync('ffmpeg', ['-y', '-v', 'error', '-f', 'rawvideo', '-pix_fmt', 'rgb24', '-s', `${W}x${H}`, '-i', '-', '-q:v', '3', '-pix_fmt', 'yuvj420p', OUT], { input: out, maxBuffer: 1 << 28 });
if (enc.status !== 0) throw new Error('ffmpeg failed: ' + enc.stderr);
console.log(`${OUT.replace(root + '/', '')}: the card taken out of ${SRC.split('/').pop()} (${Math.round((changed / (W * H)) * 100)}% of the picture resurfaced)`);
