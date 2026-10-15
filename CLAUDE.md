# Kelingking Beach, the landing page: working notes

A real place (Kelingking Beach, Nusa Penida) rebuilt in three.js, with a travel landing page
around it: "Turun, guided descents". The page opens on a postcard lying on sand, you scroll
into its picture and down the cliff to the water, and the card turns over into a booking.
The bar is photoreal water, sand and rock, plants that feel alive, and a page worth $10k.

## Where this came from, and what is where

The scene was built in versions v1 to v34 in `Projects/Claude Code/012 Nusa Penida` (public
as `Sam1983Aing/kelingking`, live on GitHub Pages). The landing page was v35 there. On
8 October 2026 it became its own project: this folder is a copy of that repo with its whole
history, on `main`.

**This repo is private** on GitHub: `Sam1983Aing/turun-source` (remote `origin`), the full
project. Sam does not want the landing page's source, notes or history public until he has
taught how it was made. Never make it public, and never move any of it into the public site.

**The public site is another repo**: `Sam1983Aing/turun`, served by GitHub Pages at
`https://sam1983aing.github.io/turun/`. It holds only the compiled page: `node
tools/build-site.mjs` makes it in `site/` (minified, every comment gone, the seven pictures, a
notice), and `site/` is its own git repository with that remote. To publish a change: build,
test `site/` from a server (not as localhost: there the page looks for the terrain's sources
and, not finding them, generates the terrain), then commit and push inside `site/`, at Sam's
word each time. Then check the live page, and that `/PROCESS.md` and `/src/...` are 404 there.

**One file, for Aura or to hand to someone**: `node tools/build-site.mjs --aura` writes
`../turun-aura.html` (compiled, pictures from the CDN). Never give out `kelingking.html`: it is
the same page with every comment and note in it.

- `012 Nusa Penida` is the remote `scene`, to bring a scene fix over (`git fetch scene`, then
  cherry-pick). Nothing is ever pushed there from here.
- This repo is the page: code, assets, the single file. One folder up are the things that
  are not code: `../demos/` (recorded design options, with their scroll plans and reel
  scripts), `../images/` (Sam's generated plates and concepts, and the prompts),
  `../teach/` (the journal and its stills). `captures/` here is scratch, not in git.
- The state of the work and what is open: `../HANDOFF.md`.

## How this project is run

In rounds of Sam's notes on the page, on `main`. The brief with every round is
`docs/versions/v35-landing-page.md`, and each round gets a section in `PROCESS.md`. The 3D
scene is not changed unless Sam asks (so far: the boat and its mooring). Design choices are
shown as recorded demos behind a URL switch, not as lists. Nothing goes to GitHub and nothing
goes live without Sam saying so.

## Things that already cost time

- **The browser pane lies.** It stops rendering when hidden and its screenshots go stale. Use
  `tools/capture.mjs` (headless Chrome, nothing to install) and read numbers back from the
  page. The server is `python3 tools/serve.py` (`.claude/launch.json`, "kelingking-beach"): port 5290, and
  it tells browsers not to reuse stale files (with plain `http.server`, Safari mixed an old
  script with new ones and the loader hung at 99).
- **`node --check` on a `.js` file treats it as a script**, so module-only mistakes pass.
  Check a copy named `.mjs` instead. The other way round it fails too: node 22 and later take
  a `.js` file with an `import` in it for a module and pass it, so `node --check` cannot prove
  a standalone bundle is a classic script. `tools/build-standalone.mjs` compiles each inline
  script with `vm.Script`, which can.
- **A backtick inside a comment inside a GLSL template string ends the JavaScript string.**
- **The page loads a baked terrain** (`assets/terrain/terrain-1024.bin`, v11) instead of
  generating it. After changing the terrain, the path, the plants' scatter or the layout, run
  `node tools/bake-terrain.mjs`. On localhost the page notices a stale bake (a warning in the
  console) and generates instead, so nothing breaks, but it loads 8 s slower until you rebake.
- **jsDelivr can keep a GitHub error as the file, for a year.** At `aura-assets@1.16.0` the
  terrain file came back as 199 bytes, GitHub's "429: Too Many Requests", served with status
  200 and `immutable`: the page then generates the terrain itself and takes minutes. After
  pushing assets under a new tag, fetch every one and compare its bytes with the local copy
  (not only the status), and later too if a page is slow. A wrong one is fixed by
  `https://purge.jsdelivr.net/gh/Sam1983Aing/aura-assets@<tag>/kelingking/<file>`.
- **After changing a texture or a sand plate,** `node tools/prepare-webp.mjs`: the page loads
  the WebP copies, not the JPEG and PNG masters beside them.
- **When a page never becomes ready,** `capture.mjs` prints its console. Read that before
  guessing.
- **Scripted find-and-replace edits:** assert the old text is there exactly once, or the edit
  can land twice or not at all.
- **Pattern that repeats with the mesh?** Look for a jump in the function being drawn before
  blaming the mesh (the v1 wave "teeth").
- **The canvas is not opaque.** Where leaves hand over (alpha to coverage) its pixels are part
  see-through, so whatever sits behind the canvas on the page is part of the scene's colour.
  v35 put sand-coloured paper behind it and every green went pale and speckled. Keep near-black
  (`#12110e`, on `#stage`) behind it. The tools' pages are dark, so a check in `?shot=` mode
  does not see this: compare the landing page itself against the last tag
  (same `tau`, `t=17`, `pr=1`, `notext` on both: it should be 0 pixels different).
- **Absolute frame times mean nothing on this Mac.** They swing 2x to 8x with whatever else is
  using the GPU. The browser pane showing the page while a benchmark runs made everything
  look 5 to 8 times slower for a whole stage. Close the page in the pane before timing, and
  only compare versions timed back to back in the same run (`tools/hero.mjs` does this).

## Hard rules

- Reference photos (`references/**/*.jpg`) are other people's work. Never commit them, never
  upload them, never push them to the assets repo.
- Ask Sam before downloading anything, with the source and the size. Only CC0 assets ship,
  credited in a CREDITS.md next to them.
- OpenStreetMap data (`data/osm.json`, `src/terrain/geo.js`) is ODbL: keep the attribution.
- The headland must keep passing the outline check on `viewpoint` and `overview` unless a
  brief says the shape is changing.
