// Makes the public site (8 October 2026): site/, the only thing of this project that is public.
//
// Sam: "I want to provide a live link so they can interact with it ... make sure that someone
// who understands links cannot swap words and have access to my landing page", because he
// means to teach how it was made. So this repository is private, and what is published (the
// repository `Sam1983Aing/turun`, served at sam1983aing.github.io/turun/) is only what a
// browser needs to run the page: one HTML file and the seven pictures it lays under the cards.
// No history, no notes, no tools, no source files.
//
// The page is the single-file build (tools/build-standalone.mjs), with:
//   - its own two scripts squashed (Bun's minifier: names shortened, every comment gone)
//   - the comments taken out of the shaders too (they are text inside the scripts, which a
//     minifier leaves alone), the stylesheet's comments, and the HTML's
//   - the libraries' scripts left as they come, with their licence headers
// A website's code always reaches the visitor's browser, so this hides the explanation, not
// the fact: what cannot be read here any more is how and why, which is what is taught.
//
//   node tools/build-site.mjs              site/ (the page and, beside it, its seven pictures)
//   node tools/build-site.mjs --aura       ../turun-aura.html: the same compiled page as ONE file,
//                                          for Aura. Its pictures come from the CDN with the
//                                          textures and the terrain (the assets repo, pinned to
//                                          the tag in tools/build-standalone.mjs), so there is
//                                          nothing to carry beside it, and opened from the disk
//                                          it runs whole, the wave at the ending too.
//   needs bun (for the minifier) and a network (the single-file build checks the CDN)
//
// To publish: site/ is its own git repository (remote: Sam1983Aing/turun). Commit there and
// push, at Sam's word. See CLAUDE.md.

import { execFileSync, spawnSync } from 'node:child_process';
import { copyFileSync, existsSync, mkdirSync, mkdtempSync, readFileSync, readdirSync, rmSync, writeFileSync } from 'node:fs';
import { tmpdir } from 'node:os';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';
import vm from 'node:vm';

const root = join(dirname(fileURLToPath(import.meta.url)), '..');
const OUT = join(root, 'site');
// The pictures the page lays under its cards (assets/hero/). Not sand.jpg: that is the sand
// the page had before, behind a switch.
const PICTURES = ['sand-clean.jpg', 'palm-leaf.png', 'sand-walk.jpg', 'sand-beach.jpg', 'sand-end.jpg', 'sand-end-sea.jpg', 'sand-end-tide.png'];

const AURA = process.argv.includes('--aura');
const tmp = mkdtempSync(join(tmpdir(), 'turun-site-'));
// The single-file build, made for this: with its pictures beside it for the site (the same
// place as the page, so nothing is asked of another host), from the CDN for the one file.
const single = join(tmp, 'single.html');
// (For Aura the libraries come from the CDN too: a page there may be 1,048,576 bytes at most.)
execFileSync('node', ['tools/build-standalone.mjs', `--out=${single}`, ...(AURA ? ['--libs=cdn'] : ['--hero=relative'])], { cwd: root, stdio: 'inherit' });
const html = readFileSync(single, 'utf8');

function squash(code, name) {
  const src = join(tmp, `${name}.js`), out = join(tmp, `${name}.min.js`);
  writeFileSync(src, code);
  const r = spawnSync('bun', ['build', src, '--no-bundle', '--minify', '--target=browser', `--outfile=${out}`], { encoding: 'utf8' });
  if (r.status !== 0) throw new Error(`bun could not minify ${name}: ${r.stderr || r.stdout}`);
  return readFileSync(out, 'utf8');
}

// The shaders are text inside template strings, with their own comments, and a minifier
// leaves text alone. So the minified script is read through once to find what is template
// text (strings, regular expressions and the code inside ${ } are stepped over, template
// strings inside ${ } are followed down), and in that text what follows `//` to the end of a
// line is a shader's comment: taken out, and the line with it if nothing else was on it.
// (Counting backticks, tried first, lost its place at the first template inside a template.)
const BEFORE_REGEX = new Set([...'(,=:[!&|?{};+-*%<>~^']), KEYWORD_BEFORE_REGEX = /(?:^|[^\w$])(?:return|typeof|instanceof|in|of|case|do|else|void|delete|throw|new|yield|await)$/;
function bareShaders(code) {
  const out = [], stack = [{ tpl: false, depth: 0 }];
  let i = 0, text = '', full = 0, tail = 0, last = '';
  const flush = () => {
    if (!text) return;
    const bare = text
      .replace(/(^|\n)[ \t]*\/\/[^\n]*(?=\n|$)/g, (m, lead) => { full++; return lead ? '\u0001' : ''; })
      .replace(/[ \t]+\/\/[^\n]*/g, () => { tail++; return ''; })
      .replace(/\u0001/g, '').replace(/\n[ \t]*(?=\n)/g, '');
    out.push(bare);
    text = '';
  };
  while (i < code.length) {
    const top = stack[stack.length - 1], c = code[i];
    if (top.tpl) {
      if (c === '\\') { text += c + code[i + 1]; i += 2; continue; }
      if (c === '`') { flush(); out.push(c); stack.pop(); last = c; i++; continue; }
      if (c === '$' && code[i + 1] === '{') { flush(); out.push('${'); stack.push({ tpl: false, depth: 0 }); last = '{'; i += 2; continue; }
      text += c; i++; continue;
    }
    if (c === '`') { out.push(c); stack.push({ tpl: true }); i++; continue; }
    if (c === '"' || c === "'") {
      let j = i + 1;
      while (code[j] !== c) j += code[j] === '\\' ? 2 : 1;
      out.push(code.slice(i, j + 1)); last = c; i = j + 1; continue;
    }
    if (c === '/' && code[i + 1] !== '/' && code[i + 1] !== '*' && (BEFORE_REGEX.has(last) || last === '' || KEYWORD_BEFORE_REGEX.test(code.slice(Math.max(0, i - 12), i).trimEnd()))) {
      let j = i + 1, cls = false;
      for (; ; j++) { const d = code[j]; if (d === '\\') j++; else if (d === '[') cls = true; else if (d === ']') cls = false; else if (d === '/' && !cls) break; else if (d === '\n' || d === undefined) throw new Error('a regular expression that does not end: the script was misread near ' + code.slice(i, i + 60)); }
      out.push(code.slice(i, j + 1)); last = '/'; i = j + 1; continue;
    }
    if (c === '{') top.depth++;
    else if (c === '}') {
      if (top.depth === 0 && stack.length > 1) { stack.pop(); out.push(c); last = c; i++; continue; }
      top.depth--;
    }
    out.push(c);
    if (!/\s/.test(c)) last = c;
    i++;
  }
  if (stack.length !== 1) throw new Error('the script ends inside a template string: it was misread');
  const done = out.join('');
  const left = done.split('\n').filter((l) => /^\s*\/\//.test(l));
  if (left.length) throw new Error(`${left.length} comment lines are still there, the first: ${left[0].slice(0, 120)}`);
  return { code: done, full, tail };
}

let scriptNo = 0, own = 0, shaderLines = 0;
let page = html.replace(/<script\b([^>]*)>([\s\S]*?)<\/script>/g, (all, attrs, body) => {
  const n = scriptNo++;
  // (A library's script comes with its licence at its head, and is already minified.)
  if (/type=|src=/.test(attrs) || body.length < 400 || body.trimStart().startsWith('/*!')) return all;
  const bare = bareShaders(squash(body, `script${n}`));
  let code = bare.code.replace(/<\/script/gi, '<\\/script');
  shaderLines += bare.full + bare.tail;
  try { new vm.Script(code, { filename: `script ${n}` }); } catch (e) { throw new Error(`script ${n} does not parse after minifying: ${e.message}`); }
  // (three.js is inside the page's script: its notice goes with it.)
  if (/WebGLRenderer/.test(code)) code = '/*! Includes three.js r186, Copyright 2010-2026 Three.js Authors, MIT License. See NOTICE.txt */\n' + code;
  own++;
  return `<script${attrs}>${code}</script>`;
});
page = page.replace(/<style\b([^>]*)>([\s\S]*?)<\/style>/g, (all, attrs, css) =>
  `<style${attrs}>${css.replace(/\/\*[\s\S]*?\*\//g, '').split('\n').map((l) => l.trim()).filter(Boolean).join('\n')}</style>`);
// The HTML's own comments (not inside a script or a style, which are put aside meanwhile).
const kept = [];
page = page.replace(/<script\b[\s\S]*?<\/script>|<style\b[\s\S]*?<\/style>/g, (m) => { kept.push(m); return `\u0000${kept.length - 1}\u0000`; })
  .replace(/<!--[\s\S]*?-->/g, '').split('\n').filter((l) => l.trim() !== '').join('\n')
  .replace(/\u0000(\d+)\u0000/g, (_, i) => kept[+i]);
// (A library's pointer to its source map, which is not here.)
page = page.replace(/^\/\/# sourceMappingURL=.*$/gm, '');
page = page.replace('<head>', AURA
  ? `<head>
  <!-- Turun, guided descents: a concept page by Sam Aing. One file: its pictures, textures and terrain load from cdn.jsdelivr.net.
       Includes three.js r186 (MIT, Copyright 2010-2026 Three.js Authors), GSAP 3.15 and SplitText (Copyright GreenSock, gsap.com/standard-license),
       Lenis 1.3 (MIT, Copyright darkroom.engineering). Fonts: Instrument Serif, Vujahday Script, Jost (SIL OFL 1.1).
       Textures: Poly Haven (CC0). Map data: Copyright OpenStreetMap contributors (ODbL). -->`
  : '<head>\n  <!-- Turun, guided descents: a concept page. Third-party notices are in NOTICE.txt. -->');
rmSync(tmp, { recursive: true, force: true });

// What must not be in it, said out loud.
const leaks = ['Sam:', "Sam's", 'Claude', 'PROCESS.md', 'CLAUDE.md', 'round 1', '(v35', 'v35 '].filter((w) => page.includes(w));
const comments = (page.match(/^\s*\/\/.*$/gm) ?? []).length;
const report = (what) => {
  console.log(`${what}  ${(page.length / 1e6).toFixed(2)} MB (from ${(html.length / 1e6).toFixed(2)})  ${own} scripts minified, ${shaderLines} shader comments removed`);
  console.log(`  lines that are still a comment: ${comments}   words that should not be there: ${leaks.length ? leaks.join(', ') : 'none'}`);
  if (leaks.length) process.exitCode = 1;
};
if (AURA) {
  // One file, beside the project (not in this repository): nothing of it is relative.
  const left = [...page.matchAll(/(?:src|href)="(?!https?:|data:|#|mailto:)([^"]+)"/g)].map((m) => m[1]);
  if (left.length) throw new Error(`the one file still points beside itself: ${left.join(', ')}`);
  const file = join(root, '..', 'turun-aura.html');
  writeFileSync(file, page);
  report('../turun-aura.html');
  const LIMIT = 1048576, bytes = Buffer.byteLength(page);
  console.log(`  ${bytes} bytes: ${bytes <= LIMIT ? `${LIMIT - bytes} under` : `${bytes - LIMIT} OVER`} Aura's limit of ${LIMIT}`);
  if (bytes > LIMIT) process.exitCode = 1;
  process.exit();
}

// site/ keeps its own .git: everything else in it is made again.
mkdirSync(OUT, { recursive: true });
for (const f of readdirSync(OUT)) if (f !== '.git') rmSync(join(OUT, f), { recursive: true, force: true });
mkdirSync(join(OUT, 'assets/hero'), { recursive: true });
for (const f of PICTURES) {
  if (!page.includes(`assets/hero/${f}`)) throw new Error(`the page does not use assets/hero/${f}: the list in this tool is out of date`);
  copyFileSync(join(root, 'assets/hero', f), join(OUT, 'assets/hero', f));
}
writeFileSync(join(OUT, 'index.html'), page);
writeFileSync(join(OUT, '.nojekyll'), '');
writeFileSync(join(OUT, 'README.md'), `# Turun, guided descents

The live page: **https://sam1983aing.github.io/turun/**

A scroll-driven travel page around Kelingking Beach on Nusa Penida, Bali. It opens on a postcard
lying on sand. The picture on the card is a live 3D scene: scroll and you go into it, down the
cliff path to the water. The outfitter, the prices and the boat are invented. It is a concept.

This repository holds only the compiled page. Its source is not public yet.

How the 3D scene itself was built, step by step, with its code: https://github.com/Sam1983Aing/kelingking

By Sam Aing. Third-party notices: NOTICE.txt.
`);
writeFileSync(join(OUT, 'NOTICE.txt'), `Turun, the page at https://sam1983aing.github.io/turun/, includes or loads:

three.js r186        Copyright 2010-2026 Three.js Authors. MIT License. https://threejs.org
GSAP 3.15 and SplitText  Copyright GreenSock. https://gsap.com/standard-license (the notice is in the page's script)
Lenis 1.3            Copyright darkroom.engineering. MIT License. https://github.com/darkroomengineering/lenis
Instrument Serif, Vujahday Script, Jost   SIL Open Font License 1.1. https://fonts.google.com
Textures             Poly Haven, CC0. https://polyhaven.com
Map data             Copyright OpenStreetMap contributors, ODbL. https://www.openstreetmap.org/copyright

MIT License (three.js, Lenis):
Permission is hereby granted, free of charge, to any person obtaining a copy of this software
and associated documentation files (the "Software"), to deal in the Software without
restriction, including without limitation the rights to use, copy, modify, merge, publish,
distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the
Software is furnished to do so, subject to the following conditions: The above copyright notice
and this permission notice shall be included in all copies or substantial portions of the
Software. THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED,
INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE
AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM,
DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.

The pictures of sand, the palm leaf and everything else on the page: Sam Aing.
`);

report('site/index.html');
console.log(`  with it: ${PICTURES.length} pictures, README.md, NOTICE.txt, .nojekyll${existsSync(join(OUT, '.git')) ? '  (site/.git kept)' : ''}`);
