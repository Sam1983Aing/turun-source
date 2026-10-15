// Makes the WebP copies the page loads, from the JPEG and PNG masters beside them (v35, 15 October
// 2026). Meng, in Sam's community, on the page: 43 MB to download, where 5 MB is the most a site
// should weigh. Sam chose "about 21 MB, no visible loss": the same pictures at the same sizes,
// only packed better (and the terrain file smaller: tools/bake-terrain.mjs).
//
//   assets/textures/<surface>_color.webp    from _color.jpg   (2048, sRGB)
//   assets/textures/<surface>_normal.webp   from _normal.jpg  (1024, a direction in each pixel)
//   assets/textures/<surface>_mask.webp     from _mask.jpg    (1024, R roughness, G and B occlusion)
//   assets/hero/<plate>.webp                from the five sand plates (.jpg)
//   assets/hero/palm-leaf.webp              from palm-leaf.png, with its transparency
//
// The masters stay: a new copy is always made from them, never from a WebP (each lossy pass
// loses a little). The normal and mask maps are data, not pictures: they get a higher quality
// and the sharper colour conversion, and the before-and-after renders are the check.
// (The page's sea map, sand-end-tide.png, stays a PNG: it is a map of distances, and small.)
//
//   node tools/prepare-webp.mjs       needs cwebp (Homebrew: webp)

import { spawnSync } from 'node:child_process';
import { readdirSync, statSync } from 'node:fs';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';

const root = join(dirname(fileURLToPath(import.meta.url)), '..');
// cwebp's quality for each kind (0 to 100), and its other settings.
const KINDS = {
  color: ['-q', '78', '-sharp_yuv'],
  normal: ['-q', '86', '-sharp_yuv'],
  mask: ['-q', '86', '-sharp_yuv'],
  plate: ['-q', '80', '-sharp_yuv'],
  leaf: ['-q', '90', '-alpha_q', '100', '-exact'],
};
const PLATES = ['sand-clean', 'sand-walk', 'sand-beach', 'sand-end', 'sand-end-sea'];

let before = 0, after = 0, n = 0;
function webp(src, kind) {
  const out = src.replace(/\.(jpg|png)$/, '.webp');
  const r = spawnSync('cwebp', ['-quiet', '-m', '6', '-metadata', 'none', ...KINDS[kind], src, '-o', out], { encoding: 'utf8' });
  if (r.status !== 0) throw new Error(`cwebp ${src}: ${r.stderr}`);
  before += statSync(src).size; after += statSync(out).size; n++;
}
for (const f of readdirSync(join(root, 'assets/textures')).filter((f) => /_(color|normal|mask)\.jpg$/.test(f)).sort()) webp(join(root, 'assets/textures', f), f.match(/_(color|normal|mask)\.jpg$/)[1]);
for (const p of PLATES) webp(join(root, 'assets/hero', `${p}.jpg`), 'plate');
webp(join(root, 'assets/hero/palm-leaf.png'), 'leaf');
console.log(`${n} WebP copies: ${(before / 1e6).toFixed(2)} MB of masters became ${(after / 1e6).toFixed(2)} MB`);
