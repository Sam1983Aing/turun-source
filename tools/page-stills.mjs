// Stills of the landing page at places on the page (v35), words and card and all, as a visitor
// would see it once each place has settled. Places are in screens of scroll (0 the top, `end`
// the bottom), or `tau:4.97` for where the camera is at that point of the way down.
//
//   node tools/page-stills.mjs --at=0,0.5,1,1.6           a sheet, captures/page-stills.jpg
//   node tools/page-stills.mjs --at=0,end --phone         390 x 844 at 2x
//   node tools/page-stills.mjs --at=0 --each              also each still full size, captures/<out>/00.jpg
//   node tools/page-stills.mjs --at=0 --eval="expr"       print something from the page at each place
//   --size=1512x945 --dpr=1 --cols=4 --width=640 --out=name --settle=2.4 (seconds of frames at
//   each place before the shot) --set="lighting=evening;boat=0" (page switches) --url=...
//
// The page is stepped frame by frame (scroll.js ?record), like tools/scroll-clip.mjs. Needs
// ffmpeg for the sheet and the local server.

import { spawnSync } from 'node:child_process';
import { mkdirSync, mkdtempSync, rmSync, writeFileSync } from 'node:fs';
import { tmpdir } from 'node:os';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';
import { launch } from './cdp.mjs';

const root = join(dirname(fileURLToPath(import.meta.url)), '..');
const args = process.argv.slice(2);
const flag = (name, dflt) => {
  const a = args.find((x) => x === `--${name}` || x.startsWith(`--${name}=`));
  if (!a) return dflt;
  return a.includes('=') ? a.slice(a.indexOf('=') + 1) : true;
};
const PHONE = !!flag('phone');
const [W, H] = String(flag('size', PHONE ? '390x844' : '1512x945')).split('x').map(Number);
const DPR = +flag('dpr', PHONE ? 2 : 1);
const FPS = 30, SETTLE = +flag('settle', 2.4);
const name = String(flag('out', PHONE ? 'page-stills-phone' : 'page-stills'));
const places = String(flag('at', '0')).split(',');

const q = new URLSearchParams({ record: '1' });
if (flag('set')) for (const kv of String(flag('set')).split(';')) { const [k, ...v] = kv.split('='); q.set(k, v.join('=')); }

const b = await launch();
const page = await b.open('about:blank', { width: W, height: H });
await b.send('Emulation.setDeviceMetricsOverride', { width: W, height: H, deviceScaleFactor: DPR, mobile: PHONE }, page.sessionId);
if (PHONE) await b.send('Emulation.setTouchEmulationEnabled', { enabled: true, maxTouchPoints: 5 }, page.sessionId);
await b.send('Page.navigate', { url: `${flag('url', 'http://localhost:5190/')}?${q}` }, page.sessionId);
try {
  await page.waitFor('window.__scroll && window.__scroll.ready === true', 180000);
} catch (e) {
  console.log(String(e.message).split('\n').slice(0, 30).join('\n'));
  b.close();
  process.exit(1);
}
await page.eval('__scroll.begin(true); 0');
const dir = mkdtempSync(join(tmpdir(), 'kelingking-stills-'));
const each = flag('each') ? join(root, 'captures', name) : null;
if (each) mkdirSync(each, { recursive: true });
const files = [];
for (let k = 0; k < places.length; k++) {
  const p = places[k];
  const y = await page.eval(p === 'end' ? '__scroll.pace.screens' : p.startsWith('tau:') ? `__scroll.pace.screensAt(${+p.slice(4)})` : String(+p));
  for (let f = 0; f < Math.round(SETTLE * FPS); f++) await page.eval(`__scroll.frame(${1 / FPS}, ${y}, ${f === 0})`);
  const shot = await page.screenshot({ format: 'jpeg', quality: 92 });
  const file = join(dir, `s${String(k).padStart(3, '0')}.jpg`);
  writeFileSync(file, shot);
  files.push(file);
  if (each) writeFileSync(join(each, `${String(k).padStart(2, '0')}.jpg`), shot);
  if (flag('eval')) console.log(`${p}:`, JSON.stringify(await page.eval(String(flag('eval')))));
}
const lines = page.log.filter((l) => /error|exception|warning/i.test(l));
if (lines.length) console.log(lines.slice(0, 20).join('\n'));
b.close();

const cols = Math.min(+flag('cols', 4), files.length), rows = Math.ceil(files.length / cols), w = +flag('width', 640);
const pad = cols * rows - files.length;
const hh = Math.round((w * H) / W / 2) * 2;
const inputs = files.flatMap((f) => ['-i', f]);
const graph = files.length === 1 ? `[0:v]scale=${w}:${hh}`
  : files.map((_, k) => `[${k}:v]scale=${w}:${hh}[v${k}]`).join(';')
    + (pad ? ';' + Array.from({ length: pad }, (_, k) => `color=black:s=${w}x${hh}:d=1[p${k}]`).join(';') : '')
    + ';' + files.map((_, k) => `[v${k}]`).join('') + Array.from({ length: pad }, (_, k) => `[p${k}]`).join('') + `xstack=inputs=${cols * rows}:grid=${cols}x${rows}`;
const sheet = join(root, 'captures', `${name}.jpg`);
const enc = spawnSync('ffmpeg', ['-y', '-loglevel', 'error', ...inputs, '-filter_complex', graph, '-frames:v', '1', '-q:v', '3', sheet]);
rmSync(dir, { recursive: true, force: true });
if (enc.status !== 0) throw new Error('ffmpeg failed: ' + enc.stderr);
console.log(`${sheet.replace(root + '/', '')}: ${files.length} stills at ${places.join(', ')}`);
process.exit(0);
