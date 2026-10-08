// Makes the two pictures the hero's live palm needs (src/scroll/sand-options.js, v35 round 12):
//
//   assets/hero/sand-clean.jpg   the sand with no shadows on it, from Sam's plate
//                                ../images/sand/sand-ripples-05-wide-undulations.png, brought to
//                                the brightness and warmth of the sand it replaces (each channel
//                                multiplied: the new plate was a shade greyer and darker)
//   assets/hero/palm-leaf.png    the green leaf, cut out of the photograph the page had before
//                                (../images/sand/beach-sand-variation-03-4k.png, its top left
//                                corner), so that the page can make it sway
//
// The leaf is cut by colour. Green or yellowed, it has far less blue in it than sand has, lit
// or in shade: (green - blue) / green is over 0.5 on the leaf and under 0.25 on sand. One
// out-of-focus smear of shade beside the upper leaflet passes that test too, and is cut away
// by where it is (SMEAR). (Asking more of dark pixels, tried first, ate holes in the dark green.)
//
//   node tools/prepare-palm-sand.mjs      needs ffmpeg

import { spawnSync } from 'node:child_process';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';

const root = join(dirname(fileURLToPath(import.meta.url)), '..');
const PLATE = join(root, '../images/sand/sand-ripples-05-wide-undulations.png');
const PHOTO = join(root, '../images/sand/beach-sand-variation-03-4k.png');
// What each channel is multiplied by: the middle of the old sand measured 241, 214, 177 and the
// new plate's 219, 199, 169. A little under that ratio, so its brightest ridges do not clip.
const GAIN = [1.085, 1.065, 1.04];
// The leaf's box in the photograph, from its top left corner (src/scroll/sand-options.js has the
// same numbers as shares of the picture).
const BOX = { w: 560, h: 680 };
const SMEAR = [[120, 0], [252, 0], [252, 38], [300, 135], [278, 142], [128, 22]];
const inside = (poly, x, y) => {
  let on = false;
  for (let i = 0, j = poly.length - 1; i < poly.length; j = i++) {
    const [xi, yi] = poly[i], [xj, yj] = poly[j];
    if ((yi > y) !== (yj > y) && x < ((xj - xi) * (y - yi)) / (yj - yi) + xi) on = !on;
  }
  return on;
};

const run = (args, opts = {}) => {
  const r = spawnSync('ffmpeg', ['-y', '-v', 'error', ...args], { maxBuffer: 1 << 28, ...opts });
  if (r.status !== 0) throw new Error('ffmpeg: ' + r.stderr);
  return r.stdout;
};

run(['-i', PLATE, '-vf', `colorchannelmixer=rr=${GAIN[0]}:gg=${GAIN[1]}:bb=${GAIN[2]}`, '-q:v', '3', '-pix_fmt', 'yuvj420p', join(root, 'assets/hero/sand-clean.jpg')]);

const raw = run(['-i', PHOTO, '-vf', `crop=${BOX.w}:${BOX.h}:0:0`, '-frames:v', '1', '-pix_fmt', 'rgb24', '-f', 'rawvideo', '-']);
if (raw.length !== BOX.w * BOX.h * 3) throw new Error('could not read the photograph');
const smooth = (a, b, x) => { const t = Math.min(Math.max((x - a) / (b - a), 0), 1); return t * t * (3 - 2 * t); };
const out = Buffer.alloc(BOX.w * BOX.h * 4);
let kept = 0;
for (let i = 0; i < BOX.w * BOX.h; i++) {
  const r = raw[i * 3], g = raw[i * 3 + 1], b = raw[i * 3 + 2];
  const a = inside(SMEAR, i % BOX.w, Math.floor(i / BOX.w)) ? 0 : smooth(0.3, 0.44, (g - b) / Math.max(g, 1));
  out[i * 4] = r; out[i * 4 + 1] = g; out[i * 4 + 2] = b; out[i * 4 + 3] = Math.round(a * 255);
  if (a > 0.5) kept++;
}
run(['-f', 'rawvideo', '-pix_fmt', 'rgba', '-s', `${BOX.w}x${BOX.h}`, '-i', '-', join(root, 'assets/hero/palm-leaf.png')], { input: out });
console.log(`assets/hero/sand-clean.jpg and assets/hero/palm-leaf.png (${Math.round((100 * kept) / (BOX.w * BOX.h))}% of its box is leaf)`);
