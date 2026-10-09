# Kelingking, in three.js

A real place rebuilt in the browser: Kelingking Beach on Nusa Penida, Bali, the cliff everyone
calls the T-Rex. The page opens on a postcard lying on sand. You scroll into the picture on
it, down the path on the cliff to the water's edge, and the card turns over at the end. There
is no 3D model file and no video. The cliffs, the path, the plants, the waves and the boat
are all built by code when the page loads. (One picture is not: the sand the postcard lies on.)

The page is written as a travel page for a walk down to the beach ("Turun, guided descents").
That part is a concept: the outfitter, the prices and the boat pick-up are invented. The real
surf at Kelingking is dangerous and swimming is banned.

This repository is the landing page. It grew out of the scene's own repository
(`Sam1983Aing/kelingking`, the descent alone, v1 to v34) and carries that history.

**[Open the live page](https://sam1983aing.github.io/kelingking/)** (a laptop with Chrome or
Safari works best, it takes about 10 seconds to load)

![The clifftop viewpoint, final version](docs/gallery/v34/viewpoint.jpg)

## Four ways to use this

1. **Just look at it.** Open the live page above and scroll. Once you are in the picture, drag
   the scene to look around. On the beach a line at the foot of the screen changes the time of
   day (Morning, Noon, Evening, Night).
2. **Keep a copy.** Download [`kelingking.html`](kelingking.html) (the download button on that
   page) and double-click it. It's the whole page in one file. It fetches about 35 MB of
   textures and terrain the first time, and still runs without internet, just plainer.
3. **Read or change the code.** Click the green **Code** button, then **Download ZIP** (or
   `git clone` it), and run it on your own machine:

   ```bash
   python3 tools/serve.py
   ```

   Then open http://localhost:5290. Nothing to install apart from Python, which Macs have.
   More under [Run it](#run-it).
4. **Build your own.** Paste the [starter prompt](teach/03-starter-prompt.md) into Claude Code
   or Codex, in an empty folder. It builds the foundation of the island in five steps and
   stops after each one to show you. The same page explains how to point it at another place,
   and how to refine the result one element at a time, the way the 34 versions here were made.

## How it was made

It took 34 versions over eight days (24 September to 1 October 2026). Versions 1 to 13 were
built with Claude Code (Opus 5.5), one chat per version. Versions 14 to 34 were polished in
Codex. Every version is a git tag you can check out and run (`v1` to `v34`), and every
version rendered the same nine camera shots, so any two can be compared.

- [docs/versions](docs/versions/README.md): the plan, the rules every version followed, and a
  short brief per version.
- [docs/gallery](docs/gallery/README.md): the same nine shots for every version, plus before
  and after images and clips for the later ones.
- [PROCESS.md](PROCESS.md): what each version changed, what went wrong and how it was fixed.

![How v1 was built, stage by stage](docs/gallery/history/progression.jpg)

v1 was built in three stages (shape, sea, surfaces) plus a first pass of scanned textures and
trees. Each stage is a tagged commit: `stage-1`, `stage-2`, `stage-3`, `stage-3b`, and `v1`.
See [how v1 was built](docs/gallery/history/README.md).

| Version | Element |
|---|---|
| v1 | Shape, sea, surfaces, first scans and trees |
| v2 | Light and atmosphere |
| v3 | Rock |
| v4 | Water |
| v5 | Sand and the waterline |
| v6 | Trail and stairs |
| v7 | Plants |
| v8 | The scroll descent: it becomes a landing page |
| v9 | Clouds, water at the beach, the camera on the path, the green on the rock |
| v10 | Polish pass over v1 to v9 |
| v11 | Speed and the single-file build |
| v12 | The breaking wave, and the clouds |
| v13 | The dirt steps and the bamboo handrail |
| v14 to v17 | The T-Rex head, the shore wave, the islet, the clouds |
| v18 | The breaking wave rebuilt as a spilling wave |
| v19 to v25 | The rope lashings, footprints, the cliff foot and where it meets the sand |
| v26 | One continuous wave: swell, lip, foam and swash on one clock |
| v27 to v30 | The right beach wall, natural sand, the last water pass |
| v31 | The beach camera, and morning, noon, evening and night |
| v32 to v34 | Plant edges and a dark line on the cliff |
| v35 | The travel page: the postcard you scroll into, the boat, the back of the card (in progress) |

**Credits in short:** map data © OpenStreetMap contributors (ODbL), textures from Poly Haven
(CC0), the code under the MIT licence. Details at the bottom.

## Run it

```bash
python3 tools/serve.py
```

Then open http://localhost:5290: the landing page, from the postcard on the sand (v35) down
to the water's edge (v8) and the back of the card. The source needs a local server (a browser will not load ES modules
or start a module worker from `file://`). `kelingking.html` is the same page built to run
without one. Nothing to install: the source page loads three.js, GSAP and Lenis from jsDelivr
and the fonts from Google Fonts, and the standalone file carries its own copies (`vendor/`;
should a font ever be missing from `vendor/fonts/`, the build links it from Google Fonts
instead and says so).

The page sets the light itself: morning at the top, a scroll-driven time lapse over the cove,
evening from there on (v35). On the beach a line at the foot of the screen switches between
Morning, Noon, Evening and Night until you leave the beach. A light in the URL (`?at=4.35&lighting=evening`) stays for the
whole page. Daylight uses the photo date's sun; Night is an authored moonlit view. Once off
the stairs, the camera opens up across the cove. Drag to choose a view; it stays while you scroll along
the beach. “Reset view” returns to the composed camera. Left/right arrow keys work when
the scene is focused; Escape resets. A vertical touch swipe still scrolls.

The tools that match the scene to photos are the same page with a shot in the URL:
http://localhost:5290/?shot=viewpoint. There, keys `1` to `9` switch shots, `O` photo overlay,
`D` difference blend, `L` outline mode, `F` free camera, `C` contour lines, and the panel on the
right tunes the camera and the terrain live. On the landing page the panel, a readout and keys
`1` to `6` (the stops) only appear with `?debug`.

## How the scroll works

v8 made the page itself (`src/scroll/`, `index.html`). The scene is `src/app.js`, shared with
the tools (`src/debug.js`), which `src/main.js` picks from the URL.

- **One path, one number.** `path.js` turns the scroll into `tau`, from 0 over the bay to 5 at
  the water, through six stops: the bay from the air, the clifftop viewpoint, the ridge
  (`trailTop`), the switchbacks (`trailLow`), the foot of the path, the water's edge. From 0
  to 1 the camera flies: it turns while still looking straight down, then tilts up and drops
  onto the platform along the viewpoint's own line of sight. From 1 on it walks v6's walk line
  at eye height and crosses the sand to where the `swash` frame stands.
- **It looks where it walks** (v9). The heading follows the path, smoothed across each bend so
  the turn starts a little before it, and leans toward the view (the head, the beach) on the
  straights. Where the view turns fast the scroll slows down (`TURN_PACE`), so a hairpin takes
  its time. Pitch follows the grade of the steps, so going down you see the steps. Drag to look
  around: on the path the view eases back when you let go, on the sand it stays where you put
  it (v31). `node tools/descent.mjs` prints how fast it moves and turns per screen of scroll.
- **Pacing** is a monotone curve through `PACE` knots (screens of scroll against `tau`), with
  beats at the stops where the camera slows almost to a stop while the words come in. About
  19 screens top to bottom.
- **The lettering** (v35), two worlds. On the paper (the sand screens: the hero, the spreads,
  the card's back) the lines are in a hand (Vujahday Script, a brush pen). Inside the picture,
  over the scene, everything is one sans (Jost): the lines large and tight, tags in tracked
  capitals, sentences plain. The serif (Instrument Serif) is only the firm's name. The hand's
  sizes were set by measuring it against the serif it replaced, and the masks its lines rise
  out of clip well outside the line box, because a hand swings outside it (`LINE_OFF`).
- **The page layer** (`scroll.js`, `page.css`): Lenis for a weighted smooth scroll, GSAP for
  the words (lines rising out of masks, SplitText), all driven from GSAP's ticker in one loop
  with the camera and the frame. Each block of words shows while the camera's `tau` is in its
  `data-tau` range in `index.html`, so the words follow the camera, not the raw scroll. The
  top bar gives the camera's live latitude, longitude and height, and a rule down the right
  edge draws as the camera goes down.
- **Loading.** The loader counts through the real stages (terrain in the worker, textures,
  growing the plants, the path), then draws a frame at fifteen points down the path behind
  it, so no shader compiles and no texture uploads the first time the camera gets somewhere,
  and times a few of them to pick the pixel ratio (aiming for 13 ms a frame).
- **The buttons are water** (`water-button.js`). Each button's face is the sea set into a
  dark rim: a net of light moves over its floor (worked out in a small shader as how much
  six travelling waves squeeze the light), and the surface ripples under the pointer and a
  press (a grid of heights obeying the wave equation, which the shader looks through).
  After ThreeUI's "Water Ripple", in the page's own code and without its glow.
- **The opening** (v35). The loader has no ground of its own: its three lines (where, the
  name, how far along) stand on the hero's sand with the palm moving over it, and the name
  fills with sea as the loading goes. When everything is in, the card is let go above the
  sand and falls onto it. The fall is worked out, not drawn (`drop.js`: gravity against the
  air's drag, the air righting the tilted card so it swings, a glide towards its low edge,
  its low corner meeting the sand first and the card lying down about it, a small rebound).
  It is run through once beforehand to see where it ends, and started that far the other way,
  so the card lands where the page has it. As it lands the headline is written, and the name
  and the menu come in after.
- **The terrain is baked** (v11). Generating it (heightfield, mesh, plants' places, the water's
  maps) takes 3 to 8 s in a worker, so the page downloads it instead: about 13.5 MB packed and
  gzipped (`assets/terrain/terrain-1024.bin`, `src/terrain/bake-format.js`), decoded in about 0.3 s.
  The file carries a hash of the layout and of the generator's source files. When the page is
  served from localhost and either has changed, it says so in the console and generates the
  terrain as before. After changing anything the terrain worker imports, run
  `node tools/bake-terrain.mjs` (`--check` only says whether it is stale).
- **Phones.** The lens widens on a tall screen, the flight starts higher so the frame stays on
  the modelled ground, the words sit at the bottom and a line across the top replaces the rule.
- **The postcard** (v35, `postcard.js`). The page opens on a card lying on sand, and the picture
  on the card is the live canvas. The canvas never changes size: it sits in a "world" element
  with the sand, the paper and the shadow, and the world is scaled down, turned and moved so
  the canvas lands where the picture should be, clipped to a postcard's shape. Scrolling takes
  that transform back to nothing, so at the end of the dive the page is a plain full-screen
  canvas again. Nothing is cross-faded. At rest the camera is stopped and so is the sea's
  clock, and the page draws no frames at all. From the first touch of the scroll the sea
  starts and the camera sets off from `tau` 0.75 (`TAU0`: a drone's three-quarter view, the
  headland and its beach filling the card), while the card is still small: you see the scene
  turn inside the picture before it grows. From there to the first spread the camera moves
  slower than the scroll (`FIRST_LEG`).
- **The sand** is a photograph: `assets/hero/sand-clean.jpg` (pale sand with nothing on it)
  under the hero, `assets/hero/sand-walk.jpg` (the cliff path's gravel, a wooden rail tied with
  blue cord down its right edge) under the second postcard, `assets/hero/sand-beach.jpg` (clear
  shallow water over pale sand) under the third, `assets/hero/sand-end.jpg` (fine sand
  with a line of footprints) under the ending. With the leaf below, they are the only pictures on the page
  the scene did not draw. `tools/prepare-spread-sand.mjs` makes the two in the middle from
  Sam's plates. `?under=walk:url,beach:url` tries another picture under a spread.
- **The tide at the ending moves** (`tide.js`). The last card lies on sand with footprints,
  and the sea comes in over it from the top left corner and goes out again. The water and the
  foam are a photograph's (`assets/hero/sand-end-sea.jpg`, sand with the sea's edge in its
  corner, never shown as it is): what its water does to its own sand is done to the sand under
  the card, so the footprints stay visible under the water and the light on the floor is real,
  and its foam is laid along the front of each wave. The sand a wave leaves is wet and dries.
  The larger waves reach under the card and take it a little way. `tools/prepare-ending-tide.mjs`
  makes the map the shader reads (`assets/hero/sand-end-tide.png`: how far each point of that
  photograph is from its water's edge) and prints the numbers `tide.js` has as constants.
  `?tide=0`: no sea. Opened from the disk (the single file), the browser will not let a picture
  into a shader: no sea there either, the card lies on its sand.
- **The first frame** (`src/scroll/first.js`) is a plain script the page waits for. It works out
  the layout for the screen and lays the sand where the page will have it, and draws the palms'
  shadows once, before anything is painted, so the page opens complete. `postcard.js` and
  `palm.js` take the layout and the shadows' drawing from it (`globalThis.__first`): change
  `POSES`, `PALMS` or `frond` there.
- **The palm over it is alive** (`palm.js`). The sand has no shadows in it. The page casts
  them: palm fronds drawn by the script (a rib that curls, leaflets that each flutter to their
  own beat), small and stretched so they are soft, multiplied over the sand and over the
  card, in the colour the baked shadows had in the photograph the page used before. What has
  to move while the page is still loading, and the script cannot draw a frame for seconds, is
  moved by the browser itself (Web Animations on transforms and opacity): the leaves' sway,
  a drift of the whole shadows, the gust's sand. The two
  leaves in the top corners are one picture of a frond's tip with a clear background
  (`assets/hero/palm-leaf.png`), hung by its stem from outside the frame, the right one
  mirrored and larger, each turning on its stem with its shadow (`LEAVES` in `palm.js`: where
  the stem is, how long, how far turned, for a wide screen and a tall one). Now and then, and as the scroll begins, a gust: sand in the plate's own
  colours skims across the sand and over the card (streamers drawn once on a long sheet that
  slides along the wind). It all settles as you scroll into the
  card. `?sand=photo` shows the old photograph, still. Each place the card
  rests can have its own (`ASSETS.heroWalk`, `heroBeach` in `app.js`, empty for now, and
  `?under=walk:url,beach:url` tries one). It lies in the card's world with the inverse of the world's resting
  transform, so at rest it fills the screen as it was composed, and on the way up it grows
  and turns with the card. How much larger than the screen it has to be for no edge to show
  on the way is worked out for each pose and screen size (`sandOver`). It is drawn into a
  canvas at its own 3840 px, not set as a CSS background: a background is drawn once at the
  element's size on the page and then stretched as the world grows, and went soft in the dive.
- **The spreads** (v35, `spreads.js`). Twice on the way down the dive runs backwards: the frame
  goes back to being a postcard on the sand, the camera slowing to a stop as it lands, and a
  piece of the offer comes in beside it (words left of the card the first time, right of it
  the second). The first is on the ridge, after the steps, the second above the beach. Scrolling on dives back in. The card has a named place to rest for each
  (`POSES` in `postcard.js`: hero, walk, beach, end) and changes pose only while its picture
  is the whole screen.
- **The day** (v35). The page sets the sun from where the scroll is (`DAY`, `LAPSE` in
  `scroll.js`). It opens in morning light. From the ridge to the view over the cove (`tau` 1.75
  to 2.17) the scroll turns the sun as it walks the camera, from morning through noon to
  evening, and it is evening from there to the end. The sun moves every other frame, and it
  runs backwards with the scroll. A clock in the frame runs with it and reads the story's day
  (06:20 on the ridge, 17:40 at the cove), not the sun's hours.
- **The ending.** The frame goes back to a card once more, and the card turns over: its back
  is a second, unscaled element laid over the first, so its type stays sharp.
- **The page in screens** (`page` in `scroll.js`): stretches of scroll in which the camera goes
  at the scroll's speed, stands in a hold (a spread's card at rest, the day's time lapse), or
  eases between the two. About 23.5 screens. `?notext` gives the scene alone as before v35,
  from `tau` 0, for the tools that judge the scene.

```bash
node tools/descent.mjs                 # the path's speeds, turn rates and clearance per stretch
node tools/scroll-clip.mjs             # a recording of the whole page, frame by frame (1080p)
node tools/scroll-clip.mjs --phone     # the same at 390 x 844
node tools/page-stills.mjs --at=0,0.8,1.6,tau:4.97,end   # stills at places on the page, words and all (v35)
node tools/path-bench.mjs              # frame times all the way down, against the last version
node tools/path-bench.mjs --pace       # real frame pacing while the page scrolls itself
```

Landing page switches: `debug`, `at=2.5` (start at that `tau`), `notext`, `record` (for
`scroll-clip.mjs`), and every scene switch (`pr=`, `q=`, `hour=`, ...).

## How the boat works

v35 added one object to the scene: a jukung, the Balinese double-outrigger canoe, at anchor
about 70 m off the beach (`src/boat/`). It is built in code like the plants: a lofted hull,
two bamboo floats on arched beams lashed with the path's blue cord, a raked mast with the sail
rolled round its yard, a storm lantern over the stern.

- **It floats on the sea the page draws.** Nothing comes back from the GPU, so `sea.js` works
  out the same surface on the CPU (the wave train off the beach and the FFT ocean's longer
  waves, from the same seed) at nine points under the hull and the floats. A plane through
  them gives heave, pitch and roll. It is a function of the clock alone.
- **It is lit like the path** (a patched standard material: the atmosphere's sun, the baked
  island shadow, cloud shadows, haze before the tone curve), and shades itself with a few
  capsules, not a shadow map.
- **What it does to the water** is a sheet of its own laid on the sea round the hull
  (`on-water.js`): the boat's shadow in the water, its reflection, the lantern's path of
  light. The sea's shader is not touched. Without these the hull looked pasted on.
- **The lantern** lights when the sun is low or gone. Its brightness is set on screen and
  divided by the exposure, which runs over fifteen stops between noon and night.

- **It is tied up** (`mooring.js`). A bamboo post stands in the shallows in front of the walk's
  last frame, with a hemp line lashed to it that runs out along the bottom. The boat's end of
  the line is part of the boat (a strop round the stern and a few metres going down into the
  water), so it rides with the hull and nothing is rebuilt per frame.

`?boat=0` leaves it all out, `?boat=east,north[,heading]` moors it somewhere else, `?moor=0`
leaves out the post and line, `?moor=east,north` stands the post somewhere else.

## The standalone file

`kelingking.html` is the whole page in one file you can double-click. Browsers refuse ES
modules and module workers from `file://`, so `tools/build-standalone.mjs` rewrites every
module (the page's and three.js's) as a function that returns its exports and joins them into
one classic script. GSAP, SplitText and Lenis go in as their browser builds, the stylesheet
and the three font files as data inside the file (3.2 MB in all). The tools (`debug.js`) are
left out. The build refuses code it cannot rewrite (`export default`, `export *`, `import()`,
top-level `await`) and compiles every script in the page as a classic script before it
writes the file.

The textures and the baked terrain are not inside it. They are on the CDN, from the assets
repo `Sam1983Aing/aura-assets`, folder `kelingking/`, pinned to a tag so a copy of the file
already out there never changes:

```
https://cdn.jsdelivr.net/gh/Sam1983Aing/aura-assets@1.11.0/kelingking/terrain/terrain-1024.bin
https://cdn.jsdelivr.net/gh/Sam1983Aing/aura-assets@1.11.0/kelingking/textures/<surface>_<color|normal|mask>.jpg
```

(33 JPEGs: the eleven surfaces in `src/terrain/surfaces.js` and `src/trail/surfaces.js`, each
with a colour, normal and mask map, plus `textures/CREDITS.md`. The tag `kelingking-v2` points
at the same commit. `1.10.0` / `kelingking-v1` hold the terrain of v11 and v12.)

Without a network it still runs. The textures come out flat, each in its surface's own average
colour, and the terrain is generated on the page itself, which freezes it for 5 to 8 s before
the loader lifts.

```bash
node tools/build-standalone.mjs                 # kelingking.html, assets from the CDN
node tools/build-standalone.mjs --local         # kelingking-local.html, assets from localhost:5290
node tools/test-standalone.mjs                  # open kelingking.html from file:// and photograph 4 stops
node tools/test-standalone.mjs --offline        # the same with the network cut
```

**New assets** (a rebaked terrain, a changed texture):

1. Copy `assets/textures/*.jpg`, `assets/textures/CREDITS.md` and
   `assets/terrain/terrain-1024.bin` into `kelingking/textures/` and `kelingking/terrain/` of a
   clone of `aura-assets`. Never the reference photos. Commit and push `main`.
2. Tag it twice and push both tags: the next number in the shared series (after `1.11.0`
   comes `1.12.0`, unless another project took it) and `kelingking-v3`, `-v4` ...
3. Set `TAG` at the top of `tools/build-standalone.mjs` to the new number and rebuild.
4. Rebuild. The build fetches every asset from the CDN at `TAG` and stops unless each is the
   same bytes as the local copy, and stops if the bake is older than the code (jsDelivr can
   take a minute to see a new tag). Then run `node tools/test-standalone.mjs`.

A change to the code alone (a shader, the page, the camera) needs only step 4: the assets on
the CDN stay as they are. Anything that changes the terrain, the path, the plants' places or
the layout changes the bake, and a new texture changes `assets/textures/`: those need all four
steps.

The page on localhost goes on reading its own `assets/`. Only the standalone file uses the CDN.

## How the terrain is made

Nothing is sculpted by hand in a 3D tool. The shape comes from map data plus a few numbers
tuned against photos.

1. **OpenStreetMap** gives the coastline, the cliff-top lines, the trail and spot heights
   (the head's summit is tagged at 111 m). `tools/extract-osm.mjs` turns `data/osm.json`
   into `src/terrain/geo.js` in local metres, origin on the summit.
2. **`src/terrain/layout.js`** holds the hand-tuned part: a spine running down the ridge
   with a height and width at each control point, a spur for the jaw, and zones that say
   how sheer the cliffs are and where the beaches are.
3. **`src/terrain/heightfield.js`** combines them in two passes. First a top surface
   (the island plateau blended into the ridge). Then the drop: on rock the cliff falls at
   the waterline, in beach zones it falls from the mapped cliff-top line and sand fills the
   gap. Signed distance fields (exact Euclidean transform) do the heavy lifting, and the
   transform also reports the nearest cliff-top pixel, so a beach wall takes its height from
   the edge above it.
4. It runs in a web worker at 1024 or 2048 texels over 1.6 km (0.78 m per texel), and the
   page builds a mesh plus a full-resolution normal map from it.
5. **The path** (`src/trail/`, v6) is one line from the top of the steps to the sand, with a
   walking height held to a steepest grade and turned into steps where it is steep. It is cut
   into the ground (a level shelf, cut and fill banks) before anything else is built from the
   height, so the mesh, the plants and the shadows all stand on the carved ground. The steps,
   handrails and logs are built from the same line in the worker.

## How the cliffs and surfaces work

A plain grid cannot draw these cliffs: a 100 m face that is 7 m wide on the map gets a
handful of grid rows, crossed at an angle, and renders as stripes and teeth. So:

- **The generator hands out a function, not just a grid.** Everything smooth (distances to
  the coast and to the cliff tops, the top surface, the zone settings) is stored on the grid,
  and `heightAt(x, y)` applies the sharp steps at any point. Rims and the feet of walls are
  rounded over a couple of metres, and the rock faces follow a blurred coastline, so sharp
  corners of the map do not become sharp vertical edges.
- **Faces are strips of their own** (`src/terrain/mesh-builder.js`). A face field gives the
  distance to the middle of every face; its zero line is traced into chains, and along each
  chain a column of vertices runs across the face at right angles, evenly spaced over the
  carved surface (about 55 cm apart near the headland). Neighbouring columns are zipped
  together. The ground is still a grid, denser over the headland, and wherever a strip covers
  it the grid is pushed back into the rock or left out, so the strip is what you see. That is
  what removed the comb of teeth along the rims.
- **The faces are carved**, which a heightfield cannot do: the wave-cut notch at the
  waterline (deeper under the jaw), buttresses and bays, the big beds of the limestone
  standing out or cut back, a low undercut all along the back of the beach, and the overhang
  at its south end, where the face bulges 20 m out over the sand above a cave (settings in
  `layout.js`, `overhangs`). The islet is a rounded thumb, sheer on its north-west side.
- **Light under the rock.** For every vertex of a strip the mesh builder works out, in the
  face's own vertical section, how much of the sky the rock above leaves, the angle above
  which rock hides the sun, and how much sunlit ground lies in view past the drip line. The
  shader uses those for the sky light, the sun's shadow and the light bounced up from the
  sand, plus a second bounce off the rock overhead, which fills a cave with warm light.

The look is scanned textures (Poly Haven, CC0) plus procedural structure
(`src/terrain/terrain-shader.js`), patched into three.js's standard material:

- **Limestone bedding** from one table (`src/terrain/strata.js`), shared by the mesh and the
  shader, so a ledge in the geometry and its band of colour line up: packages of massive or
  thin-bedded rock, beds with rounded noses, and recessed partings between them that read as
  the dark lines on the faces from a distance. The shader adds the fine relief, each bed's
  shade (grey to creamy), the shadow the ledges cast for the sun's angle against the face,
  and the sky the ledges hide. Runoff streaks, ochre and brown staining under the overhangs,
  and a ragged dark band at the waterline whose height changes along the coast.
- **The ground under the plants** is a scanned grass-and-rock surface, darker and browner
  with leaf litter where the plants' crowns cover it (worked out from where they stand), and
  straw and earth under the grass near the camera.
- **Sand**, near-white coral sand (about 0.5 reflectance), trampled up close (two close-range
  scans), packed firm and wet where the swash runs, glossy for a moment after it drains, damp
  above, with red grains, grit and rock dust along the foot of the walls. The beach's shape
  follows a trace of the drone photo: flat to the foot of the walls, a steep face and a berm
  at the water, low at the south end so the swash reaches the rock.
- Everything finer than a pixel is faded out by the pixel footprint, so it holds up from 1 km
  and at your feet without shimmering.

**Sun shadows are baked.** For each map column there is one height above which a point sees
the sun, which is exact for a heightfield, cliff faces included. It is baked on the GPU in one
pass whenever the sun moves (`src/terrain/sun-shadow.js`), and the ground and sea each read
it with a single texture lookup. Carved faces combine it with their own horizon (above).
Until v3 the ground never actually used it: see v3 in `PROCESS.md`.

## How the water works

The sea (`src/water/`) is several pieces that share one set of inputs: a texture the terrain
worker writes (seabed height, distance offshore, how sandy the shore is, how much sand hangs
in the water), a second one for the rock coast (distance to the rock's real foot, read off
the carved mesh, and how exposed it is to the swell), and the light from `src/sky/`.

- **The open sea is a wave spectrum** (`ocean.js`), turned into surfaces on the GPU by an
  inverse FFT, after Tessendorf: a 13 s swell from the south-west and the local wind sea
  (JONSWAP, 7 m/s), in four cascades from a 757 m patch down to 2.2 m, so there are waves at
  every scale from 1 km up to your feet. Where crests fold over they break into whitecaps,
  and the foam fades over a few seconds. Gusts make patches of rougher and smoother water.
- **One mesh follows the camera**: rings packed tight near it and spread out to the horizon,
  drawn only in the wedge the camera can see. Waves smaller than a pixel are not lost: the
  spread of their slopes (from the cascades' mipmaps) roughens the sun glint and tilts the
  reflection, four little mirrors per pixel.
- **Colour comes from light in water**: absorption and backscattering per metre, close to
  pure sea water, measured against the photos region by region (`capture.mjs --measure`).
  Red is gone within a few metres and blue lasts, so white sand under 2 m reads turquoise and
  30 m reads navy. Sand stirred up in the surf is beige, the silt of the milky plumes in the
  east bay only scatters, so it glows pale turquoise.
- **The surf** forms only in front of the beaches, with physical wavelengths (one or two
  crests in the surf zone), irregular timing and sets. Each wave breaks where it gets too
  big for the depth, bigger waves further out.
- **The breaking wave** (`breaker.js`) is its own mesh, because a heightfield cannot fold
  over: a ribbon along each beach whose cross-section steepens, pitches forward as a thin
  falling sheet and collapses, each half metre of beach at its own stage, so the wave peels. Its root follows the actual swell crest, with the solid wave body retained underneath.
  The lip, impact spray and foam share that crest and clock; the collapsing swell becomes
  the same advancing bore (v26).
- **Foam has a memory** (`surf-sim.js`): a 1024 by 1024 simulation over the bay carries foam
  and stirred sand with the water (up the beach with each bore, out in the backwash and the
  rips, off the rock after each hit, downwind, in slow eddies), and fades it. The lace is
  drawn where the foam came from, so it stretches into streaks.
- **The swash** (`swash.js`, v5): each wave sends a sheet of water up the sand after its
  bore, thin at its ragged, foamy front, that slows, stops and drains back. One function of
  the time, the place and the bed's height, worked out once a frame into a map over the beach
  (`swash-map.js`), feeds the sea (the sheet, drawn as a film over the ground's wet sand), the
  sand (soaked, glossy, drying) and the foam simulation (which moves with it).
- **Spray** (`spray.js`): droplets off the lip, feathering off the crest, the splash where
  the lip lands, and bursts where the swell hits the rock, in sets. Worked out per particle
  from the time, so a frozen frame and a running page agree.

A frozen capture (`t=`) replays the last 30 s of foam, so its trails look as they would.

## How the plants work

Nothing is scanned or downloaded (v7). Six species that grow on Nusa Penida's limestone are
grown in code when the page loads (`src/veg/grow/`), each in two or three variants:

- **Beach naupaka** (*Scaevola taccada*), the low bush all over the finger: stems from the
  base that fork toward points scattered through the mound (a small space-colonisation
  grower, radii by the pipe model), each ending in a rosette of spoon-shaped leaves, young
  ones upright and brighter, old ones spread and sometimes yellowing.
- **Grass tussocks** along the path: a fountain of arching blades, green at the base, some
  dried to straw at the tips, a few seed stalks.
- **Hanging scrub** on the ledges and faces: stems that grow out over the edge and trail down
  the rock in curtains of small leaves.
- **Screw pine** (pandanus) on stilt roots with spiral tufts of keeled strap leaves,
  **coconut palms** in groves on the plateau, and a **broadleaf tree** for the woods.

Leaves are painted into a small atlas at load (outline, midrib, veins, rim), and built to
their outline as geometry up close, so nothing is cut out by a texture there.

**Where they grow** (`src/veg/scatter.js`, in the terrain worker): on anything short of a
sheer face, none on the sand or at the foot of the cliffs. Scrub in patches tens of metres
across with grass between on the finger, a mosaic of woodland and open grassland with palm
groves on the plateau, hanging scrub in patches down the sheer faces and along the ledges
(the tops of the hard beds, from the same bedding table the mesh is carved with). Grass
tussocks within 22 m of the path plus sparse open-ground tussocks across the headland, low
leafy scrub beside the concrete steps, and views from the path kept open (v6's rule). Grass
uses matched distant impostors, so its coverage persists from the aerial view to the path.

**How they are drawn.** Up close, real geometry (`near.js`, `plant-material.js`): the plants
within reach are picked each frame the camera moves, nearest first, in two or three levels of
detail. Further off, impostors (`impostors.js`): each plant variant is baked on the GPU at
load into 64 views, colour plus normal, depth and how deep in the crown, and drawn as one card
that shows the view nearest to the camera's. A hand-over swaps whole leaves and blades in and
out, never single pixels, so nothing breaks into dots or a grid (v32 to v34). Both are
lit by the same code (`foliage-glsl.js`): light through the leaves, a waxy sheen that
broadens as a pixel covers more leaves, the sky from the atmosphere's harmonics, and the
sunlight left after passing through the crown.

**Wind.** One wind for the island, blowing the way the sea's gusts drift, with gusts tens of
metres across running downwind across the slopes. Plants lean and sway with the push where
they stand, branches sway on their own, leaves flutter, and a gust turns leaves over so their
paler undersides flicker (what you see of a gust from far off).

## How the light works

One physical model for the sun, the sky, the haze and the clouds (`src/sky/`), in real units
(kilolux and kilocandela per square metre), exposed like a camera (`src/post/grade.js`).

- **The sun is where it was.** The viewpoint photo's EXIF, on its Wikimedia Commons page,
  says 6 April 2025 at 11:57 from the clifftop, on an iPhone 16 at ISO 50, f/2.2, 1/1927 s.
  NOAA's solar position equations put the sun 73.7 degrees up, just east of north.
  `?hour=` moves it through that day.
- **The sky is scattering, not a gradient.** Sebastien Hillaire's 2020 method: lookup tables
  for how much sunlight survives through the air, for light scattered many times, for the sky
  around the camera, and for the haze in front of everything (froxels, out to 160 km). Air
  molecules (blue), a light background of aerosol, and a dense layer of sea haze in the
  lowest few hundred metres. The same tables give the sun's colour at the ground and the sky
  light on every surface (spherical harmonics), so the sky you see and the light it casts
  cannot disagree.
- **Exposure from the photo.** The EXIF gives EV100 14.2, and a meter's calibration turns
  that into pixel values. One exposure for every shot, as with a camera on a sunny day. With
  nothing tuned, the render's sky matched the same-day photo within 0.3 stops from 5 to 32
  degrees up. Then the Khronos PBR Neutral tone curve and a small saturation lift.
- **Clouds.** Fair-weather cumulus, marched through a volume at three quarters of the drawing
  buffer resolution (capped at 1920 px), with bounded temporal reconstruction: billow noise
  kept where a weather map puts cloud clusters, flat bases, rounded tops, lit by the same sun
  and sky and hazed by the same froxels. The sky over the island is kept clear, as on the
  photo day, so their shadows drift over the open sea (and over the island too if the clear
  radius is made smaller).
- **Light between surfaces.** The ground takes light bounced up from what lies below and in
  front of it (sunlit sand warms the cliff foot and the overhang, the sea cools it). Leaves
  pass light through and have a waxy sheen.
- **Measured, not eyeballed.** `capture.mjs --measure` compares the render and the photo
  region by region (sky by elevation, sea by distance, sand, rock and plants in sun and shade,
  and hand-placed rectangles per shot), before and after the tone curve.

## Matching photos

Each shot in `src/shots.js` is tied to a reference photo. The capture tool renders it
headlessly through Chrome's DevTools protocol, with nothing to install:

```bash
node tools/capture.mjs viewpoint --compare     # render and photo side by side
node tools/capture.mjs viewpoint --outline     # render edges traced over the photo
node tools/capture.mjs --overlay=0.5           # every shot, 50% blend
node tools/capture.mjs beach --t=17            # freeze the sea at 17 s
node tools/capture.mjs beach --clip=9          # 9 s clip to captures/beach.mp4 (needs ffmpeg)
node tools/capture.mjs viewpoint --clip=10 --hours=6.5:17.8   # sunrise to sunset instead
node tools/capture.mjs shoreBreak --debug=5    # water debug views 1 to 9 (see water-shader.js)
node tools/capture.mjs cove --set="w.murk=2;o.wind=10"   # water (w.) and wave spectrum (o.) settings
node tools/capture.mjs viewpoint --console     # print the page's shader errors and warnings
node tools/capture.mjs --bench                 # render time per shot
node tools/capture.mjs viewpoint --measure     # average colour per region, render and photo
node tools/capture.mjs viewpoint --set="hour=17;haze=5"   # any page switch
node tools/capture.mjs viewpoint --eval="window.__light"  # read something from the page
node tools/capture.mjs beach --clay            # grey ground, to judge the shape alone
node tools/preview-height.mjs 1024             # top-down shaded map with contours
```

Outline mode is the one that does the work: red is where the render's land meets water or
sky, yellow is where one landform passes in front of another. See `PROCESS.md` for what it
caught.

## Known limits

- **Speed.** On an M1 Max the page holds 60 fps scrolling top to bottom at 1920 x 1080, and
  at a 14-inch MacBook Pro's screen at pixel ratio 1.5 (v11). It loads in about 7 s. Nothing
  slower has been tried, and phones have not run it: the scene is the desktop's (3.4 M terrain
  triangles, 205,000 plants). Timings on one Mac swing 2x to 8x with whatever else is using the
  GPU, so compare builds side by side (`tools/ab.mjs`, `tools/path-bench.mjs`). One
  exception to the speed budget is kept on purpose: since v26 the close camera at water level
  draws the whole wave body under the lip, which costs about twice what it did.
- **Season.** The scrub is wet-season green. Most trail photos are dry season.
- **Materials after v2.** Every material was retuned under v2's physical light: the rock in
  v3, the water in v4, the sand in v5, the plants in v7 (to measured leaf reflectance).
- **No far coast.** The terrain stops 1.6 km out, so the ridges that fade into the haze in
  the drone photos are not there to fade.

## Credits

- Map data (C) OpenStreetMap contributors, available under the Open Database License.
  `data/osm.json` and `src/terrain/geo.js` are derived from it and stay under the ODbL.
- Reference photos are not included in this repo. `references/refs.json` and
  `references/REFERENCES.md` list every source with its author and licence (Unsplash and
  Wikimedia Commons), and `node references/fetch-refs.mjs --get` downloads them locally.
- Rock, sand, ground and path textures are from Poly Haven (polyhaven.com), CC0.
  `node tools/fetch-assets.mjs` downloads the originals (about 330 MB, not committed) and
  `node tools/prepare-assets.mjs` makes the 24 MB of textures in `assets/textures/`. See
  `assets/textures/CREDITS.md`. The plants are not scans: they are grown in code at load
  (`src/veg/grow/`, v7). v1 to v6 used three Poly Haven tree scans.
- three.js 0.186 (MIT), GSAP 3.15 with SplitText (GreenSock's no-charge standard licence) and
  Lenis 1.3.26 (MIT) are in `vendor/`, with the fonts Vujahday Script, Instrument Serif and
  Jost (SIL Open Font License, from Google Fonts), each next to its licence. The tools' panel (lil-gui) loads from jsDelivr.

## Licence

The code is MIT (`LICENSE`). The map data and everything derived from it (`data/osm.json`,
`src/terrain/geo.js`, `assets/terrain/terrain-1024.bin`) stay under the ODbL, and `vendor/`
and `assets/textures/` under their own licences, as above.
