// Makes the pictures the cards lie on after the hero's (v35 rounds 18 and 19), from the plates Sam
// generated and chose (../images/sand/, the prompts beside them in ../images/prompts/):
//
//   assets/hero/sand-walk.jpg    under the second postcard: the cliff path's pale gravel, with
//                                a wooden post and rail tied with blue cord down its right
//                                edge (walk-05.png)
//   assets/hero/sand-beach.jpg   under the third: clear shallow water over pale sand, turquoise
//                                on the left and fading out to the right, with the sun's net
//                                on its floor (beach-02.png. For an hour it was beach-04, sand
//                                with footprints: Sam looked at all five in the page and chose
//                                the water.)
//   assets/hero/sand-end.jpg     under the last card: fine sand with a line of bare footprints
//                                crossing its lower left (beach-04.png). The sea that comes in
//                                over it is the page's (src/scroll/tide.js).
//
// The plates came back from the generator at 1586 x 992, not the 3840 x 2400 asked for. They
// are doubled here (Lanczos, then sharpened a little), which adds nothing that was not there
// but is cleaner than letting the page stretch them, and converted to JPEG. Nothing else is
// changed. A sharper plate, if one is made later, can be dropped in over these as it is.
//
//   node tools/prepare-spread-sand.mjs                        the three above
//   node tools/prepare-spread-sand.mjs walk=walk-02 beach=beach-04   others of the plates
//   needs ffmpeg

import { spawnSync } from 'node:child_process';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';

const root = join(dirname(fileURLToPath(import.meta.url)), '..');
const pick = { walk: 'walk-05', beach: 'beach-02', end: 'beach-04' };
for (const a of process.argv.slice(2)) { const [k, v] = a.split('='); if (k in pick && v) pick[k] = v; }
for (const [which, plate] of Object.entries(pick)) {
  const src = join(root, `../images/sand/${plate}.png`), out = join(root, `assets/hero/sand-${which}.jpg`);
  const r = spawnSync('ffmpeg', ['-y', '-v', 'error', '-i', src, '-vf', 'scale=iw*2:ih*2:flags=lanczos,unsharp=5:5:0.55:5:5:0', '-q:v', '3', '-pix_fmt', 'yuvj420p', out]);
  if (r.status !== 0) throw new Error(`${plate}: ${r.stderr}`);
  console.log(`assets/hero/sand-${which}.jpg  from ${plate}.png`);
}
