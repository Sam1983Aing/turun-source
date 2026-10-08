// Makes the two pictures the hero's live palm needs (src/scroll/palm.js, v35 rounds 12 to 14):
//
//   assets/hero/sand-clean.jpg   the sand with no shadows on it, from Sam's plate
//                                ../images/sand/sand-ripples-05-wide-undulations.png, brought to
//                                the brightness and warmth of the sand it replaces (each channel
//                                multiplied: the new plate was a shade greyer and darker)
//   assets/hero/palm-leaf.png    the palm leaf, with a clear background, from the picture Sam
//                                generated for it on white (../images/sand/palm-leaf.png)
//
// Taking the white away. Along the leaf's edge each pixel is part leaf and part white, and both
// have to come apart or a pale fringe stays round the leaf on the sand. A pixel's share of leaf
// is how far its weakest channel has come from white towards the leaf's own darkness nearby
// (the darkest that channel gets within three pixels), and its colour is what is left when
// that much white is taken back out. Only in a band two pixels deep along the edge: inside
// that the leaf is solid, or its sheen (which is also "leaf with white in it") would go
// see-through.
// (The leaf was first cut out of the old sand photograph by its colour. It worked, with rough
// edges and yellowed tips, and Sam made this one to replace it.)
//
//   node tools/prepare-palm-sand.mjs      needs ffmpeg

import { spawnSync } from 'node:child_process';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';

const root = join(dirname(fileURLToPath(import.meta.url)), '..');
const PLATE = join(root, '../images/sand/sand-ripples-05-wide-undulations.png');
const LEAF = join(root, '../images/sand/palm-leaf.png');
// What each channel is multiplied by: the middle of the old sand measured 241, 214, 177 and the
// new plate's 219, 199, 169. A little under that ratio, so its brightest ridges do not clip.
const GAIN = [1.085, 1.065, 1.04];
// The leaf's picture: its side, the white it stands on (254, not quite 255), from where a pixel
// counts as that white, and how deep the edge band is.
const SIDE = 1254, WHITE = 254, PAPER = 247, BAND = 2;

const run = (args, opts = {}) => {
  const r = spawnSync('ffmpeg', ['-y', '-v', 'error', ...args], { maxBuffer: 1 << 28, ...opts });
  if (r.status !== 0) throw new Error('ffmpeg: ' + r.stderr);
  return r.stdout;
};

run(['-i', PLATE, '-vf', `colorchannelmixer=rr=${GAIN[0]}:gg=${GAIN[1]}:bb=${GAIN[2]}`, '-q:v', '3', '-pix_fmt', 'yuvj420p', join(root, 'assets/hero/sand-clean.jpg')]);

const raw = run(['-i', LEAF, '-frames:v', '1', '-pix_fmt', 'rgb24', '-f', 'rawvideo', '-']);
if (raw.length !== SIDE * SIDE * 3) throw new Error(`${LEAF}: expected ${SIDE} x ${SIDE}`);
const N = SIDE * SIDE, low = new Uint8Array(N);
for (let i = 0; i < N; i++) low[i] = Math.min(raw[i * 3], raw[i * 3 + 1], raw[i * 3 + 2]);
// The least (or the most) of a picture within r pixels each way, rows then columns.
function spread(src, r, least) {
  const pick = least ? Math.min : Math.max, tmp = new Uint8Array(N), out = new Uint8Array(N);
  for (let y = 0; y < SIDE; y++) for (let x = 0; x < SIDE; x++) {
    let v = src[y * SIDE + x];
    for (let k = Math.max(0, x - r); k <= Math.min(SIDE - 1, x + r); k++) v = pick(v, src[y * SIDE + k]);
    tmp[y * SIDE + x] = v;
  }
  for (let y = 0; y < SIDE; y++) for (let x = 0; x < SIDE; x++) {
    let v = tmp[y * SIDE + x];
    for (let k = Math.max(0, y - r); k <= Math.min(SIDE - 1, y + r); k++) v = pick(v, tmp[k * SIDE + x]);
    out[y * SIDE + x] = v;
  }
  return out;
}
const dark = spread(low, 3, true);                 // the leaf's own darkness nearby
const nearPaper = spread(low, BAND, false);        // is there white within the band's depth?
const out = Buffer.alloc(N * 4);
let solid = 0, edge = 0;
for (let i = 0; i < N; i++) {
  let a;
  if (nearPaper[i] < PAPER) { a = 1; solid++; }
  else {
    a = Math.min(1, Math.max(0, (PAPER + 3 - low[i]) / (PAPER + 3 - Math.min(dark[i], PAPER - 40))));
    if (a > 0) edge++;
  }
  if (a <= 0) continue;
  for (let c = 0; c < 3; c++) out[i * 4 + c] = Math.min(255, Math.max(0, Math.round((raw[i * 3 + c] - WHITE * (1 - a)) / a)));
  out[i * 4 + 3] = Math.round(a * 255);
}
run(['-f', 'rawvideo', '-pix_fmt', 'rgba', '-s', `${SIDE}x${SIDE}`, '-i', '-', '-frames:v', '1', '-compression_level', '100', join(root, 'assets/hero/palm-leaf.png')], { input: out });
console.log(`assets/hero/sand-clean.jpg and assets/hero/palm-leaf.png (${Math.round((100 * solid) / N)}% of the picture is leaf, ${Math.round((100 * edge) / N)}% is its edge)`);
