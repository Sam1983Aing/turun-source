// Folds the landing page into one double-clickable HTML file (v11): kelingking.html.
//
// A browser will not fetch an ES module from file://, nor start a worker there, so the build has
// no modules and no worker. Every module of the page (src/ and three.js) becomes a function that
// returns its exports, registered by name, and imports become lookups on that registry: one
// classic <script>. GSAP and Lenis go in as their own browser builds (window.gsap, SplitText,
// Lenis). The tools (debug.js: the panel, the photo overlay, the fitting) are left out.
// This only works because the code keeps a simple module surface: no `export default`, no
// `export *`, no dynamic import(), no top-level await. The build checks and stops if it finds one.
//
// The terrain comes as the bake (tools/bake-terrain.mjs) and the textures as JPEGs, both from
// the assets repo on the CDN, pinned to a tag (TAG below). The fonts and the stylesheet are
// inside the file. Without a network the page still runs: the textures fall back to flat layers
// and the terrain is generated on the page (it freezes for several seconds while it does).
//
//   node tools/build-standalone.mjs            kelingking.html, assets from the CDN
//   node tools/build-standalone.mjs --local    kelingking-local.html, assets from localhost:5290
//   node tools/build-standalone.mjs --local --asset-base=http://localhost:5183/assets/
//                                              (for testing before the assets are pushed)
//
// The assets repo: see README.md, "The standalone file".

import { execSync, spawnSync } from 'node:child_process';
import { createHash } from 'node:crypto';
import { existsSync, mkdirSync, mkdtempSync, readdirSync, readFileSync, rmSync, statSync, writeFileSync } from 'node:fs';
import { tmpdir } from 'node:os';
import { dirname, join, relative, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';
import vm from 'node:vm';

const root = join(dirname(fileURLToPath(import.meta.url)), '..');
const LOCAL = process.argv.includes('--local');

// Bump after pushing new assets to the assets repo. A tag, never a branch: a file already out
// in the world must not change because something was pushed later.
export const TAG = '1.17.0';
const CDN = `https://cdn.jsdelivr.net/gh/Sam1983Aing/aura-assets@${TAG}/kelingking/`;
const assetBase = process.argv.find((arg) => arg.startsWith('--asset-base='))?.slice(13);
const BASE = LOCAL ? (assetBase ?? 'http://localhost:5290/assets/').replace(/\/?$/, '/') : CDN;
// The pictures the postcards lie on, and the palm's leaf (assets/hero/, what src/app.js calls
// each). They come from the assets repo too, since 1.15.0: the file is then the whole page,
// with nothing to carry beside it, which is what Aura and a double click both need. And a
// picture from the CDN can be read by the page even when the page is a file on the disk, so
// the wave at the ending runs there too (it could not, with the pictures beside the file).
// --hero=relative leaves them beside the file, as assets/hero/ (the public site's build).
const HERO = { heroPalm: 'sand-clean.webp', heroLeaf: 'palm-leaf.webp', heroWalk: 'sand-walk.webp', heroBeach: 'sand-beach.webp', heroEnd: 'sand-end.webp', heroSea: 'sand-end-sea.webp', heroTide: 'sand-end-tide.png' };
const HERO_BESIDE = process.argv.includes('--hero=relative');
const ASSETS = { textures: `${BASE}textures/`, bake: `${BASE}terrain/terrain-1024.bin`, ...(HERO_BESIDE ? null : Object.fromEntries(Object.entries(HERO).map(([k, f]) => [k, `${BASE}hero/${f}`]))) };
// The libraries from a CDN instead of inside the file (--libs=cdn), for where a page may only
// be so large: Aura takes 1,048,576 bytes of HTML, and with everything inside it the compiled
// page is 1.6 MB, 0.77 of it three.js. GSAP, SplitText and Lenis then come from their own npm
// builds on jsDelivr (the same bytes as vendor/, checked below), and three.js from the assets
// repo as lib/three-r186.js: its two modules in this build's own form (a registry of functions
// in a classic script, as a file opened from the disk needs), minified. The local copy is
// assets/lib/three-r186.js, made once by --write-three-lib (needs bun) and pushed with the
// other assets. The page's own code stays in the file.
const LIBS_CDN = process.argv.includes('--libs=cdn'), WRITE_LIB = process.argv.includes('--write-three-lib');
const THREE_LIB = 'lib/three-r186.js';
const NPM = {
  'vendor/gsap.min.js': 'https://cdn.jsdelivr.net/npm/gsap@3.15.0/dist/gsap.min.js',
  'vendor/SplitText.min.js': 'https://cdn.jsdelivr.net/npm/gsap@3.15.0/dist/SplitText.min.js',
  'vendor/lenis.min.js': 'https://cdn.jsdelivr.net/npm/lenis@1.3.26/dist/lenis.min.js',
};
const outArg = process.argv.find((arg) => arg.startsWith('--out='))?.slice(6);
const OUT = outArg ? resolve(outArg) : join(root, LOCAL ? 'kelingking-local.html' : 'kelingking.html');

const read = (p) => readFileSync(join(root, p), 'utf8');

// ---------------------------------------------------------------- are the assets current?

// The page from file:// cannot check the bake against the code (it only checks the layout), and
// a copy of the file already out there reads whatever TAG pointed at. So before building against
// the CDN: the bake must match the code, and every asset on the CDN at TAG must be the same bytes
// as the local copy. If not, push the local assets under a new tag (README.md, "The standalone
// file") and bump TAG. (--no-cdn-check skips the second part, to build with no network.)
if (!LOCAL && !WRITE_LIB) {
  try { execSync('node tools/bake-terrain.mjs --check', { cwd: root, stdio: 'pipe' }); } catch (e) {
    throw new Error(`the terrain bake is out of date (${String(e.stdout).trim()}). Run node tools/bake-terrain.mjs, push the assets under a new tag and set TAG.`);
  }
  if (!process.argv.includes('--no-cdn-check')) {
    const files = [
      ...readdirSync(join(root, 'assets/textures')).filter((f) => /\.(webp|md)$/.test(f)).map((f) => `textures/${f}`),
      'terrain/terrain-1024.bin',
      ...(HERO_BESIDE ? [] : Object.values(HERO).map((f) => `hero/${f}`)),
      ...(LIBS_CDN ? [THREE_LIB] : []),
    ];
    const sha = (buf) => createHash('sha256').update(buf).digest('hex');
    const stale = (await Promise.all(files.map(async (f) => {
      const res = await fetch(CDN + f);
      if (!res.ok) return `${f} (${res.status})`;
      return sha(Buffer.from(await res.arrayBuffer())) === sha(readFileSync(join(root, 'assets', f))) ? null : `${f} (changed)`;
    }))).filter(Boolean);
    if (stale.length) throw new Error(`the CDN at ${TAG} does not have the local assets: ${stale.join(', ')}. Push them under a new tag and set TAG.`);
    console.log(`${files.length} assets on the CDN at ${TAG} match the local copies`);
    if (LIBS_CDN) for (const [f, url] of Object.entries(NPM)) {
      const res = await fetch(url);
      if (!res.ok || sha(Buffer.from(await res.arrayBuffer())) !== sha(readFileSync(join(root, f)))) throw new Error(`${url} is not the same file as ${f}`);
    }
  }
}

// ---------------------------------------------------------------- the module graph

// Specifiers that are not files of the project: what they turn into.
const GLOBALS = {
  gsap: 'return { gsap: window.gsap };',
  'gsap/SplitText.js': 'return { SplitText: window.SplitText };',
  lenis: 'return { default: window.Lenis };',
};
const STUBS = {
  // The tools' panel: nothing, in the standalone page.
  'src/debug.js': 'return { buildPanel() {}, startTools() {} };',
};
const resolveSpec = (from, spec) => {
  if (spec === 'three') return 'vendor/three.module.js';
  if (GLOBALS[spec]) return 'global:' + spec;
  if (spec.startsWith('.')) return relative(root, resolve(dirname(join(root, from)), spec));
  throw new Error(`${from}: cannot bundle the import of ${spec}`);
};

const IMPORT = /^import\s+([^;]*?)\bfrom\s+'([^']+)'[ \t]*;?[ \t]*$/gm;
// `export { A, B } from './x.js'` is a re-export: matched before the plain block form, and the
// braces may not contain braces, so it cannot run on past the end of the statement.
const REEXPORT = /^export\s*\{([^{}]*)\}\s*from\s+'([^']+)'[ \t]*;?[ \t]*$/gm;
const EXPORT_BLOCK = /^export\s*\{([^{}]*)\}[ \t]*;?[ \t]*$/gm;
const EXPORT_DECL = /^export\s+(const|let|var|function\*?|class|async\s+function)\s+([A-Za-z_$][\w$]*)/gm;

const order = [], seen = new Set();
function visit(file) {
  if (seen.has(file)) return;
  seen.add(file);
  if (file.startsWith('global:') || STUBS[file]) { order.push(file); return; }
  const src = read(file);
  for (const bad of [/^export\s+default\b/m, /^export\s*\*/m, /\bimport\s*\(/, /^await\s/m]) {
    if (bad.test(src.replace(/\/\/[^\n]*/g, '').replace(/\/\*[\s\S]*?\*\//g, ''))) throw new Error(`${file}: ${bad} cannot be bundled`);
  }
  for (const m of src.matchAll(IMPORT)) visit(resolveSpec(file, m[2]));
  for (const m of src.matchAll(REEXPORT)) visit(resolveSpec(file, m[2]));
  order.push(file);
}
visit('src/scroll/scroll.js');
// The generator too, for when the bake cannot be downloaded (app.js, startWorker).
visit('src/terrain/worker.js');

function transform(file) {
  const key = JSON.stringify(file);
  if (file.startsWith('global:')) return `__m[${key}] = (function () { ${GLOBALS[file.slice(7)]} })();`;
  if (STUBS[file]) return `__m[${key}] = (function () { ${STUBS[file]} })();`;
  let src = read(file);
  const exports = {};
  const reg = (spec) => `__m[${JSON.stringify(resolveSpec(file, spec))}]`;
  src = src.replace(IMPORT, (_, clause, spec) => {
    clause = clause.trim();
    const r = reg(spec);
    if (clause.startsWith('*')) return `const ${clause.split(' as ')[1].trim()} = ${r};`;
    if (clause.startsWith('{')) {
      const parts = clause.replace(/^\{|\}$/g, '').split(',').map((p) => p.trim()).filter(Boolean)
        .map((p) => (p.includes(' as ') ? p.split(/\s+as\s+/).join(': ') : p));
      return `const { ${parts.join(', ')} } = ${r};`;
    }
    return `const ${clause} = ${r}["default"];`;
  });
  src = src.replace(REEXPORT, (_, inner, spec) => {
    for (const p of inner.split(',').map((x) => x.trim()).filter(Boolean)) {
      const [local, ext] = p.includes(' as ') ? p.split(/\s+as\s+/) : [p, p];
      exports[ext] = `${reg(spec)}[${JSON.stringify(local)}]`;
    }
    return '';
  });
  src = src.replace(EXPORT_BLOCK, (_, inner) => {
    for (const p of inner.split(',').map((x) => x.trim()).filter(Boolean)) {
      const [local, ext] = p.includes(' as ') ? p.split(/\s+as\s+/) : [p, p];
      exports[ext] = local;
    }
    return '';
  });
  for (const m of src.matchAll(EXPORT_DECL)) exports[m[2]] = m[2];
  src = src.replace(EXPORT_DECL, (_, kind, name) => `${kind} ${name}`);
  // (Only on the path that starts a worker, which the standalone page never takes.)
  src = src.replaceAll('import.meta.url', 'location.href');
  const ret = `return { ${Object.entries(exports).sort().map(([k, v]) => `${JSON.stringify(k)}: ${v}`).join(', ')} };`;
  return `// ${file}\n__m[${key}] = (function () {\n"use strict";\n${src}\n${ret}\n})();`;
}

// With the libraries on the CDN, the registry is the window's, shared by two scripts: three.js's
// fills it first (from the CDN), the page's own goes on from there.
const isThree = (file) => file.startsWith('vendor/three.');
const SHARED = 'var __m = (window.__klm = window.__klm || {});';
if (WRITE_LIB) {
  const tmp = mkdtempSync(join(tmpdir(), 'three-lib-')), src = join(tmp, 'three.js'), out = join(tmp, 'three.min.js');
  writeFileSync(src, `(function () {\n${SHARED}\n${order.filter(isThree).map(transform).join('\n')}\n})();`);
  const r = spawnSync('bun', ['build', src, '--no-bundle', '--minify', '--target=browser', `--outfile=${out}`], { encoding: 'utf8' });
  if (r.status !== 0) throw new Error(`bun could not minify three.js: ${r.stderr || r.stdout}`);
  const lib = '/*! three.js r186, Copyright 2010-2026 Three.js Authors, SPDX-License-Identifier: MIT. As a classic script: window.__klm["vendor/three.module.js"] holds its exports. */\n' + readFileSync(out, 'utf8');
  new vm.Script(lib, { filename: THREE_LIB });
  mkdirSync(join(root, 'assets/lib'), { recursive: true });
  writeFileSync(join(root, 'assets', THREE_LIB), lib);
  rmSync(tmp, { recursive: true, force: true });
  console.log(`assets/${THREE_LIB}: ${(lib.length / 1e6).toFixed(2)} MB. Push it to the assets repo as kelingking/${THREE_LIB}, under a new tag, and set TAG.`);
  process.exit(0);
}
// (And if they did not come, no network, the page says so where it says what it is loading.)
const NEED = `if (!__m["vendor/three.module.js"] || !window.gsap || !window.SplitText || !window.Lenis) {
  var __what = document.querySelector(".loader__what");
  if (__what) __what.textContent = "No connection: the 3D scene could not load";
  throw new Error("the page's libraries did not load");
}`;
const code = [LIBS_CDN ? `${SHARED}\n${NEED}` : 'var __m = {};', ...order.filter((file) => !(LIBS_CDN && isThree(file))).map(transform),
  // The generator on the page, for app.js when the bake cannot be downloaded.
  'window.__klGenerate = __m["src/terrain/worker.js"].generateAll;',
  'document.documentElement.classList.contains("tool") || __m["src/scroll/scroll.js"].startScroll({ params: new URLSearchParams(location.search) });',
].join('\n')
  // `</script` only ever occurs in a string or a comment in JavaScript, and `<\/script` parses
  // the same, so this cannot change what the code does.
  .replaceAll('</script', '<\\/script');

// ---------------------------------------------------------------- the page

const b64 = (p) => readFileSync(join(root, p)).toString('base64');
// The page's fonts, inlined (v35: the hand for the paper, the serif for inside the picture,
// one sans for everything small).
// One that is not in vendor/fonts/ yet is linked from Google Fonts instead, and the build says
// so: the file then needs a network for its lettering, and falls back to the system's own
// faces without one.
const FONTS = [
  ['Instrument Serif', 'normal', '400', 'vendor/fonts/InstrumentSerif-latin.woff2', 'Instrument+Serif:ital@0;1'],
  ['Instrument Serif', 'italic', '400', 'vendor/fonts/InstrumentSerif-italic-latin.woff2', 'Instrument+Serif:ital@0;1'],
  ['Vujahday Script', 'normal', '400', 'vendor/fonts/VujahdayScript-latin.woff2', 'Vujahday+Script'],
  ['Jost', 'normal', '400 500', 'vendor/fonts/Jost-latin.woff2', 'Jost:wght@400;500'],
];
const fonts = FONTS.filter((f) => existsSync(join(root, f[3])))
  .map(([family, style, weight, file]) => `@font-face{font-family:'${family}';font-style:${style};font-weight:${weight};font-display:swap;src:url(data:font/woff2;base64,${b64(file)}) format('woff2');}`).join('\n');
const linked = [...new Set(FONTS.filter((f) => !existsSync(join(root, f[3]))).map((f) => f[4]))];
if (linked.length) console.warn(`fonts not in vendor/fonts/, linked from Google Fonts instead: ${[...new Set(FONTS.filter((f) => !existsSync(join(root, f[3]))).map((f) => f[0]))].join(', ')}`);

let commit = 'unknown';
try { commit = execSync('git rev-parse --short HEAD', { cwd: root }).toString().trim(); } catch {}
let html = read('index.html');
const swap = (from, to) => {
  if (!html.includes(from)) throw new Error(`index.html no longer has: ${from.slice(0, 60)}`);
  html = html.replace(from, () => to);
};
html = html.replace(/\n\s*<link rel="preconnect"[^>]*>/g, '').replace(/\n\s*<link rel="stylesheet" href="https:\/\/fonts\.googleapis[^>]*>/, '');
// (The stylesheet's own pictures are named from where it lies, two folders down: for the
// single file they are on the CDN with the rest, or next door with --hero=relative.)
swap('<link rel="stylesheet" href="src/scroll/page.css">', `<style>\n${fonts}\n${read('src/scroll/page.css').replaceAll('url(../../assets/', HERO_BESIDE ? 'url(assets/' : `url(${BASE}`)}</style>`);
if (!HERO_BESIDE) swap('<link rel="preload" as="image" type="image/webp" href="assets/hero/sand-clean.webp">', `<link rel="preload" as="image" type="image/webp" href="${BASE}hero/${HERO.heroPalm}">`);
html = html.replace(/\n\s*<script type="importmap">[\s\S]*?<\/script>/, '');
const libs = ['vendor/gsap.min.js', 'vendor/SplitText.min.js', 'vendor/lenis.min.js'].map((f) => read(f).replaceAll('</script', '<\\/script'));
// (The first frame's script is a classic one already: it goes in as it is, where it stands.)
swap('<script src="src/scroll/first.js"></script>', `<script>\n${read('src/scroll/first.js')}</script>`);
swap('<script type="module" src="src/main.js"></script>',
  `${LIBS_CDN ? [...Object.values(NPM), BASE + THREE_LIB].map((url) => `<script src="${url}"></script>`).join('\n') : `<script>\n${libs.join('\n')}\n</script>`}\n<script>\nwindow.__klAssets = ${JSON.stringify(ASSETS)};\n${code}\n</script>`);
swap('<head>', `<head>\n  <!-- Kelingking, the standalone build (tools/build-standalone.mjs), from commit ${commit}. Assets: ${BASE} -->${linked.length ? `\n  <link rel="stylesheet" href="https://fonts.googleapis.com/css2?${linked.map((f) => `family=${f}`).join('&')}&display=swap">` : ''}`);
writeFileSync(OUT, html);

// Each inline script must parse as a classic script, as a browser reads it from file://. (Not
// `node --check` on a .js file: node 22 and later take one with an import in it for a module and
// pass it.) vm.Script compiles as a classic script and does not run it.
[...html.matchAll(/<script>([\s\S]*?)<\/script>/g)].forEach((m, i) => {
  try { new vm.Script(m[1], { filename: `inline script ${i}` }); } catch (e) { throw new Error(`inline script ${i} is not a classic script: ${e.message}`); }
});
console.log(`${relative(root, OUT)}: ${(statSync(OUT).size / 1e6).toFixed(2)} MB, ${order.length} modules, scripts parse, assets from ${BASE}`);
