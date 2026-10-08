// The landing page (v8, a travel page from v35): the scroll takes the card up off the sand
// until its picture is the screen (postcard.js), then the camera down the cliff path to the
// water's edge (path.js), then back onto the sand and over onto the card's other side. The
// words come and go with where all that is.
//
// One loop: GSAP's ticker drives Lenis (the weighted smooth scroll), then the camera, the card,
// the words and the frame, so the scene and the page never disagree by a frame. ScrollTrigger
// is not used: every animation here keys off one number, the page's place in screens of scroll
// (cam.y), which follows the scroll through a little extra smoothing (so a keyboard jump or a
// drag of the scrollbar still glides).
//
// The page, in screens of scroll (`page` below):
//   the dive        the card comes up. At rest the camera is locked and the sea's clock is
//                   stopped: a picture. From the first scroll the sea starts and the camera
//                   sets off, so the scene moves inside the card well before it is full screen.
//   the descent     path.js, from TAU0 (the card's picture) to 5 (the water's edge)
//   the spreads     twice the frame goes back to being a postcard on the sand (the dive run
//                   backwards), words beside it, and then the dive again (spreads.js)
//   the day         from the ridge to the view over the cove (LAPSE) the scroll turns the sun
//                   as it walks the camera: morning through noon to evening. It rests a moment
//                   over the cove in that evening light (COVE)
//   the ending      the frame goes back to being a card on the sand, and turns over
//
// URL switches (the scene's own are in app.js):
//   debug              the settings panel, keys 1-6 for the stops, and a readout
//   at=2.5             start at this tau (5 at the water), for stills
//   notext             the scene alone as before v35: no words, no card, no beat, the whole
//                      flight from tau 0 (the tools that judge the scene use it)
//   record             the recorder drives the page frame by frame (tools/scroll-clip.mjs)
//   pr=1               pixel ratio pinned (else it is picked while loading, then governed)
//   lighting=, hour=   as in app.js, and the page then leaves the light alone
//
// Looking around (v9): drag the scene to turn the head away from the path's view; let go and it
// eases back on the stairs. On the beach the chosen heading stays until reset. The scroll
// carries on underneath. With a finger only sideways drags look; vertical swipes scroll.

import { gsap } from 'gsap';
import { SplitText } from 'gsap/SplitText.js';
import Lenis from 'lenis';
import { createApp, ASSETS } from '../app.js';
import { createPalm } from './palm.js';
import { titleOption } from './title-options.js';
import { buildPanel } from '../debug.js';
import { SHOTS } from '../shots.js';
import { ORIGIN } from '../terrain/geo.js';
import { walkLine } from '../trail/route.js';
import { buildDescent, makePace, STOPS } from './path.js';
import { createPostcard } from './postcard.js';
import { createSpreads, spreadCaptions } from './spreads.js';

gsap.registerPlugin(SplitText);

// One motion personality for the page: this ease and this length for every reveal.
const EASE = 'expo.out';
const REVEAL = 1.1;
// How far a line travels to be out of its mask, in percent of its own height. On the paper the
// lines are in a hand that swings well outside its line box, so the masks clip further out
// (page.css) and the lines have further to go. Inside the picture they are in a serif, which
// keeps to its box.
const LINE_OFF = 235, LINE_OFF_CLEAN = 105;
// How quickly the camera catches up with the scroll (per second): Lenis already smooths the
// wheel, this only takes the edge off jumps (keys, the scrollbar, a touch fling).
const FOLLOW = 9;
// Looking around: how long the head stays turned after the drag ends (seconds), and how quickly
// it then turns back (a critically damped spring, per second: most of the way in a second).
const LOOK_HOLD = 0.6, LOOK_BACK = 3.2;

// The card's picture: this far down the flight. A drone's three-quarter view: the headland and
// its beach fill the card, with nothing but sea round them. (Sam's pick of four. It was first
// at 0.5, straight down with the head cut off, then at 0.3, the whole place like a map, with
// the mainland's cliffs and their flat morning shadows in it.)
const TAU0 = 0.75;
// From the card to the first spread the camera goes this much slower than the scroll. The
// card's shot is well down the flight, so there is not much of the path left before the
// railing, and Sam's note on the stretch was "it's too quick before we reach the second
// postcard".
const FIRST_LEG = 0.62;
// The dive, in screens of scroll. The camera sets off at the first touch and is up to the
// scroll's speed within START_EASE screens. (The first iteration held it for 60% of the dive,
// and Sam's note was that he scrolled and scrolled and nothing moved until the picture was the
// screen. The card itself still grows slowly at first, so the scene is seen turning while it is
// plainly still a card.)
const HERO = 1.7, START_EASE = 0.1;
// The sea wakes over this stretch of the dive (0 a still picture, 1 its own clock).
const WAKE = [0.015, 0.22];
// The day. The page opens in morning light: about ten on the photo's day, the first hour the
// beach is out of the headland's shadow (the scene's own Morning, eight o'clock, leaves the whole
// bay dark: it faces west under 150 m of cliff). `ev`: exposure compensation in stops at the
// start, at noon and at the end (the end is the scene's Evening preset). `leave`, `clock`: what
// the page's clock reads. That is the story's day (the railing at 06:10, the ridge at 06:20, the
// boat at 17:40), not the sun's hours: the light is a picture of a day, not a simulation of it.
const DAY = { from: 10.3, noon: 12, to: 17, ev: [0.15, 0, 0.5], leave: 6 + 10 / 60, clock: [6 + 20 / 60, 17 + 40 / 60] };
// The day's time lapse: over this stretch of the way down, from the ridge to the view over the
// cove, the scroll turns the sun as it walks the camera. (Sam: "start around [the ridge] and do
// a time-lapse, and when we reach 'Stay until the light turns' we arrive around 5:40 p.m." The
// first version held the camera over the cove and turned the sun there.) The clock reads
// DAY.leave at the railing, DAY.clock[0] where the lapse starts and DAY.clock[1] where it ends.
const LAPSE = { from: 1.75, to: 2.17 };
// The rest over the cove at the end of it, in that evening light, for its line to be read:
// where, and for how many screens.
const COVE = { tau: 2.2, len: 0.7, easeIn: 0.3, easeOut: 0.3 };
// The spreads: where on the way down the frame goes back to being a card on the sand (the hero's
// dive in reverse), rests with its words, and is dived into again. In screens: `in` for the
// card to come down, `rest` at rest, `out` to go back in. The camera keeps walking while the
// card comes down and slows to a stop over the last `easeIn` of it, and it is walking again
// `easeOut` into the way back in: the scene moves inside the card both ways.
// (The first is on the ridge, where the two railings run together towards the head: Sam's
// place for it, after the steps. It was at 1.32, at the top of them. The day's time lapse
// starts just past it, so the light begins to turn while the card is still coming up.)
const SPREADS = [{ id: 'walk', tau: 1.65 }, { id: 'beach', tau: 3.02 }];
const SPREAD = { in: 0.9, rest: 0.9, out: 1.05, easeIn: 0.6, easeOut: 0.2 };
// The ending, in screens, and the shares of it for the frame going back to a card, and the
// card turning over.
const OUTRO = 2.6, OUT_CARD = [0, 0.46], OUT_FLIP = [0.5, 0.8], OUT_WORDS = 0.6, OUT_STAMP = 0.79;
// Turning to the boat at the water's edge: over this stretch, to put it this far across. The
// eye comes up as it does (from 1.6 m above the swash a breaking wave stands as high as the
// horizon and hides the hull each time it rears), the view tips down to keep the boat where
// it is, and the lens closes in. `wide`, `tall`: for the screen's shape.
// (Wide screens got a longer lens and a higher eye on 7 October: Sam found the boat too small,
// and at 2.3 m of rise a wave still hid its hull a quarter of the time, sampled over 14 s.
// At 3.5 m it is half hidden for about one second in eight. The mooring post, src/boat/, stands
// in the foreground of this frame. A phone keeps the first numbers, or the post's foot would
// run into the words.)
const BOAT_PAN = [4.72, 4.985], BOAT_X = { wide: 0.64, tall: 0.58 }, BOAT_RISE = { wide: 3.5, tall: 2.3 }, BOAT_LENS = { wide: 26, tall: 16 }, BOAT_TIP = { wide: -3.8, tall: 0 };

const clamp01 = (x) => Math.min(Math.max(x, 0), 1);
const smooth = (a, b, x) => { const t = clamp01((x - a) / (b - a)); return t * t * (3 - 2 * t); };
const inOut = (x) => (x < 0.5 ? 4 * x * x * x : 1 - Math.pow(-2 * x + 2, 3) / 2);

export function startScroll({ params }) {
  const RECORD = params.has('record');
  const DEBUG = params.has('debug');
  const BARE = params.has('notext') || params.has('bare');
  const reduced = matchMedia('(prefers-reduced-motion: reduce)').matches;
  const html = document.documentElement;
  if (params.has('notext')) html.classList.add('notext');
  const $ = (s) => document.querySelector(s);
  const loaderEl = $('.loader');

  let app;
  try {
    app = createApp({ params, keepBuffer: RECORD });
  } catch (e) {
    console.error(e);
    loaderEl.classList.add('failed');
    return;
  }
  window.__app = app;
  const { renderer, camera } = app;
  const stage = $('#stage');
  stage.prepend(renderer.domElement);
  if (params.has('pr')) app.governor.on = false;
  const post = createPostcard({ reduced, captions: spreadCaptions(), onPose: (pose) => { sandWanted = pose === 'hero' ? 'day' : pose; drawSand(); } });
  // The sand under the card is alive (palm.js): a plate with no shadows in it, palms' shadows
  // cast on it and on the card, two leaves that sway, a gust now and then. ?sand=photo is the
  // photograph the page had before, with its shadows in it and nothing moving.
  const palm = BARE || params.get('sand') === 'photo' ? null : createPalm({ reduced, plate: params.get('plate') ?? ASSETS.heroPalm, leaf: ASSETS.heroLeaf });
  palm?.mount({ ground: post.ground, card: $('.card'), post });
  // Frames owed (the picture stands still at rest, so frames are only drawn when asked; two,
  // as the haze settles over a frame).
  let dirty = 2;
  if (BARE) post.set({ up: 1 });

  // ---------------------------------------------------------------- the page in screens

  const pace = makePace();
  const sStart = BARE ? 0 : pace.screensAt(TAU0), sEnd = pace.screens;
  const heroLen = BARE ? 0 : HERO, outLen = BARE ? 0 : OUTRO;
  // Where the scroll holds the camera still: while a spread's card rests on the sand, and for
  // a moment over the cove. s: where on the path. len: for how many screens. easeIn, easeOut: the
  // screens over which the camera slows into it and picks up out of it. y: where on the page.
  const holds = (BARE ? [] : [...SPREADS.map((h) => ({ ...h, card: true, len: SPREAD.rest, easeIn: SPREAD.easeIn, easeOut: SPREAD.easeOut })), { id: 'cove', ...COVE }])
    .map((h) => ({ ...h, s: pace.screensAt(h.tau) })).sort((a, b) => a.s - b.s);
  // The page as stretches of scroll: the camera going at the scroll's own speed ('go'), standing
  // in a hold, or easing between the two ('up', 'down': its speed a smoothstep, so it covers
  // half the stretch's length).
  const ramp = (u) => u * u * u - (u * u * u * u) / 2;   // the integral of smoothstep
  const segs = [];
  const yOut = (() => {
    let y = 0, at = sStart;
    // (k: the camera's speed on a stretch, in path screens for a screen of scroll.)
    const add = (kind, len, E = 0, k = 1) => { if (len > 0) segs.push({ kind, y0: y, y1: y + len, s0: at, E, k }); y += Math.max(len, 0); };
    const cruise = (to, k) => { add('go', (to - at) / k, 0, k); at = Math.max(at, to); };
    const turn = (kind, E, k) => { add(kind, E, E, k); at += (k * E) / 2; };
    let k = BARE ? 1 : FIRST_LEG;
    turn('up', BARE ? 0 : START_EASE, k);
    for (const h of holds) { cruise(h.s - (k * h.easeIn) / 2, k); turn('down', h.easeIn, k); h.y = y; add('hold', h.len); k = 1; turn('up', h.easeOut, k); }
    cruise(sEnd, k);
    return y;
  })();
  const cards = holds.filter((h) => h.card);
  const page = {
    screens: yOut + outLen,
    holds,
    // The camera's place (in path.js's screens) for a place on the page, and back.
    camAt(y) {
      for (const g of segs) {
        if (y > g.y1) continue;
        if (y <= g.y0) return g.s0;
        const u = (y - g.y0) / (g.y1 - g.y0);
        return g.kind === 'go' ? g.s0 + g.k * (y - g.y0) : g.kind === 'hold' ? g.s0 : g.kind === 'up' ? g.s0 + g.k * g.E * ramp(u) : g.s0 + g.k * g.E * (0.5 - ramp(1 - u));
      }
      return sEnd;
    },
    yAt(s) {
      if (s <= sStart) return 0;
      let lo = 0, hi = yOut;
      for (let i = 0; i < 48; i++) { const m = (lo + hi) / 2; if (this.camAt(m) < s - 1e-7) lo = m; else hi = m; }
      return hi;
    },
    tauAt(y) { return pace.tauAt(this.camAt(y)); },
    screensAt(tau) { return this.yAt(pace.screensAt(tau)); },
  };
  // Which card the page is at or on its way to or from, and how far up it is from rest there
  // (0 at rest, 1 the picture is the screen): the hero's, a spread's, the ending's. Null and 1
  // between them, in the scene.
  function cardAt(y, out) {
    if (BARE) return [null, 1];
    if (y < heroLen) return ['hero', y / heroLen];
    for (const h of cards) {
      if (y <= h.y - SPREAD.in || y >= h.y + h.len + SPREAD.out) continue;
      return [h.id, y < h.y ? (h.y - y) / SPREAD.in : y <= h.y + h.len ? 0 : (y - h.y - h.len) / SPREAD.out];
    }
    if (out > 0) return ['end', 1 - clamp01((out - OUT_CARD[0]) / (OUT_CARD[1] - OUT_CARD[0]))];
    return [null, 1];
  }

  // ---------------------------------------------------------------- time of day

  const lightInputs = [...document.querySelectorAll('input[name="lighting"]')];
  // The page sets the light itself (the morning, the day's time lapse, the evening after it)
  // unless the URL fixed it.
  const fixedLight = BARE || ['lighting', 'hour', 'sun'].some((k) => params.has(k));
  // A light picked by hand on the beach, until the beach is left.
  let manual = null;
  let dissolve = null, dissolveAnimation = null;
  function stopDissolve() {
    dissolveAnimation?.cancel(); dissolveAnimation = null;
    dissolve?.remove(); dissolve = null;
  }
  function syncLighting() {
    html.classList.toggle('bright-light', app.state.lighting === 'noon');
    lightInputs.forEach((input) => { input.checked = input.value === app.state.lighting; });
  }
  syncLighting();
  // A change of light with nothing covering it: the frame as it was fades out over the new one.
  function dissolved(change, on) {
    stopDissolve();
    if (on) {
      app.renderFrame();
      const previous = document.createElement('canvas');
      previous.className = 'lighting-dissolve'; previous.setAttribute('aria-hidden', 'true');
      previous.width = renderer.domElement.width; previous.height = renderer.domElement.height;
      previous.getContext('2d').drawImage(renderer.domElement, 0, 0);
      $('.page').prepend(previous);
      dissolve = previous;
    }
    change();
    syncLighting();
    app.advance(0); app.renderFrame();
    dirty = 2;
    if (dissolve) {
      const previous = dissolve;
      dissolveAnimation = previous.animate([{ opacity: 1 }, { opacity: 0 }], { duration: 850, easing: 'ease-in-out' });
      dissolveAnimation.finished.then(() => { if (dissolve === previous) stopDissolve(); }).catch(() => {});
    }
  }
  function chooseLighting(id) {
    if (id === app.state.lighting || !started) return;
    manual = id;
    dissolved(() => app.setLighting(id), !reduced && !RECORD);
  }

  // The page's own light: an hour of the photo's day. The scene has setHour (made for clips of
  // the sun going round); the exposure that goes with each hour is laid on top of it here. From
  // DAY.to on it is the scene's Evening preset, the same sun and exposure.
  const evAt = (h) => (h <= DAY.noon ? DAY.ev[0] + (DAY.ev[1] - DAY.ev[0]) * smooth(DAY.from, DAY.noon, h) : DAY.ev[1] + (DAY.ev[2] - DAY.ev[1]) * smooth(DAY.noon, DAY.to, h));
  let sunNow = null;   // the hour now set (null: not the page's light)
  function setSun(h) {
    if (h >= DAY.to) { if (app.state.lighting !== 'evening') app.setLighting('evening'); }
    else {
      app.setHour(h);
      app.grade.params.compensation += evAt(h);
      app.grade.apply();
    }
    sunNow = h;
    dirty = 2;
  }
  // The hour for a place on the page: morning down to the time lapse, which the scroll turns
  // (evenly in scroll, not in distance walked: the camera slows on the ridge), evening after it.
  const lapseY = BARE ? null : [page.screensAt(LAPSE.from), page.screensAt(LAPSE.to)], yRail = BARE ? 0 : page.screensAt(1);
  const lapseU = (y) => (lapseY ? smooth(lapseY[0], lapseY[1], y) : 0);
  const hourAt = (y) => DAY.from + (DAY.to - DAY.from) * lapseU(y);
  // And what the page's clock reads there.
  const clockAt = (y) => (!lapseY ? DAY.clock[1] : y <= lapseY[0] ? DAY.leave + (DAY.clock[0] - DAY.leave) * clamp01((y - yRail) / (lapseY[0] - yRail))
    : DAY.clock[0] + (DAY.clock[1] - DAY.clock[0]) * lapseU(y));
  if (!fixedLight) { setSun(DAY.from); syncLighting(); }
  lightInputs.forEach((input) => input.addEventListener('change', () => chooseLighting(input.value)));
  addEventListener('wheel', stopDissolve, { passive: true });
  stage.addEventListener('pointerdown', stopDissolve, { passive: true });
  addEventListener('resize', stopDissolve);
  addEventListener('keydown', (e) => { if (['ArrowUp', 'ArrowDown', 'PageUp', 'PageDown', 'Home', 'End'].includes(e.key)) stopDissolve(); });

  // ---------------------------------------------------------------- size and scroll length

  const track = $('.track');
  // One "screen" of scroll is the stage's height (100lvh, which does not change as a phone's
  // address bar comes and goes).
  let unit = stage.clientHeight || innerHeight;
  let descent = null, walk = null;
  let size = [0, 0];
  function resize(force = false) {
    const w = stage.clientWidth, h = stage.clientHeight;
    // (A page opened where it has no size yet, a hidden preview pane for one, waits for one:
    // every measure here is a share of the screen, and of nothing they all came out as NaN,
    // which then stuck, since the camera eases toward the scroll from where it is.)
    if (!w || !h) return;
    // A phone resizes the window as its address bar slides; the stage does not, so only a real
    // change of size re-sizes the canvas.
    if (!force && w === size[0] && Math.abs(h - size[1]) < 2) return;
    // Retain the route beat when rotating a phone: the scroll is measured in stage
    // heights, so keeping the old pixel offset would move to another part of the trail.
    const retained = descent && size[1] && Number.isFinite(cam.y) ? cam.y : null;
    size = [w, h];
    app.setSize(w, h);
    unit = h;
    track.style.height = `${page.screens * unit + innerHeight}px`;
    post.layout();
    spreads?.layout(post);
    drawSand(true);
    dirty = 2;
    if (walk && !(Math.abs(w / h / descent.aspect - 1) <= 0.03)) build();
    if (retained !== null) jumpTo(retained);
  }
  app.governor.onChange = () => { app.setSize(size[0], size[1]); dirty = 2; };

  // The lens for the screen's shape: the path's poses are made for a landscape screen, and on a
  // tall one the same vertical angle leaves a sliver. Widen it, but not all the way.
  function fovFor(fov, aspect) {
    if (aspect >= 1.2) return fov;
    const t = Math.tan((fov * Math.PI) / 360) * Math.pow(1.2 / aspect, 0.42);
    return Math.min(82, (Math.atan(t) * 360) / Math.PI);
  }

  // The sand under the card: a photograph (assets/hero/, generated for this page), laid in the
  // card's world by postcard.js. One for each place the card comes to rest, if there is one
  // (ASSETS.hero, heroWalk, heroBeach, heroEnd): palm shadows on pale sand for the hero, the
  // tide's edge in evening light for the ending, and the two spreads lie on the hero's until
  // they have surfaces of their own. postcard.js says which, as the card changes pose behind
  // the full-screen picture. (?under=walk:url,beach:url tries a picture under a spread without
  // adding it to the page.) The one in use is drawn into a
  // canvas at the photograph's own size, not set as a background: the browser draws a
  // background once at the size the element has on the page and stretches that as the world
  // grows, where a canvas is sampled afresh at every size, so the sand stays sharp all the way
  // into the card. If a photograph cannot be had, the table's plain sand colour stands in.
  const sands = { day: null, walk: null, beach: null, end: null };
  let sandWanted = 'day', sandDrawn = '';
  function drawSand(force = false) {
    const img = sands[sandWanted] ?? sands.day;
    if (!img || !size[0]) return;
    const key = `${img.src}|${size[0]}x${size[1]}`;
    if (!force && key === sandDrawn) return;
    sandDrawn = key;
    const c = post.ground, iw = img.naturalWidth, ih = img.naturalHeight, shape = size[0] / size[1];
    // The photograph in the screen's shape: its middle, or for the ending on a tall screen its
    // left side, where the tide is.
    const sw = Math.min(iw, ih * shape), sh = sw / shape;
    const sx = img === sands.end && shape < 0.85 ? 0 : (iw - sw) / 2;
    const k = Math.min(1, Math.sqrt((size[0] < 720 ? 4.2e6 : 9.3e6) / (sw * sh)));
    c.width = Math.round(sw * k); c.height = Math.round(sh * k);
    const g = c.getContext('2d');
    g.imageSmoothingQuality = 'high';
    g.drawImage(img, sx, (ih - sh) / 2, sw, sh, 0, 0, c.width, c.height);
    palm?.sandChanged(c, img === sands.day ? { sx, sy: (ih - sh) / 2, sw, sh, iw, ih } : null);
  }
  const loadSand = (which, src) => new Promise((done) => {
    const img = new Image();
    img.onload = () => { (img.decode?.() ?? Promise.resolve()).catch(() => {}).then(() => { sands[which] = img; drawSand(); done(); }); };
    img.onerror = () => { console.warn(`the sand (${which}) did not load: ${which === 'day' ? 'plain sand' : 'the hero\'s'} instead`); done(); };
    img.src = src;
    setTimeout(done, 8000);
  });
  const sandReady = BARE ? Promise.resolve() : loadSand('day', palm?.plate ?? ASSETS.hero);
  // (The ending's is not needed for a long while: fetched once the page has begun.)
  const under = { walk: ASSETS.heroWalk, beach: ASSETS.heroBeach, end: ASSETS.heroEnd };
  for (const kv of (params.get('under') ?? '').split(',')) { const i = kv.indexOf(':'); if (i > 0 && kv.slice(0, i) in under) under[kv.slice(0, i)] = kv.slice(i + 1); }
  if (!BARE) app.on('loaded', () => { for (const which in under) if (under[which]) loadSand(which, under[which]); });

  // ---------------------------------------------------------------- scroll

  let lenis = null;
  if (!RECORD && !reduced) {
    lenis = new Lenis({ autoRaf: false, lerp: 0.07, wheelMultiplier: 0.9, smoothWheel: true });
    lenis.stop();
  }
  history.scrollRestoration = 'manual';
  scrollTo(0, 0);
  // No scrolling until the loader lifts (Lenis stops it itself; without Lenis this does).
  html.classList.add('loading');
  const scrollY = () => (lenis ? lenis.scroll : window.scrollY);
  function jumpTo(y) {
    if (lenis) lenis.scrollTo(y * unit, { immediate: true, force: true }); else scrollTo(0, y * unit);
    cam.y = y;
  }

  // ---------------------------------------------------------------- the path

  // The flight's start depends on the screen's shape (path.js), so the path is rebuilt when
  // that changes.
  function build() {
    // (Before the page has a size: a landscape screen's shape, and built again once it has.)
    const aspect = size[1] ? size[0] / size[1] : 16 / 9;
    descent = buildDescent({ walk, groundAt: app.groundAt, shots: SHOTS, view: { aspect, fov: fovFor(SHOTS.viewpoint.fov, aspect) }, extent: app.layout.extent });
    descent.aspect = aspect;
  }
  app.on('terrain', (hf) => {
    // The walk line from the path the worker just carved (as tools/walk-line.mjs makes it).
    const L = hf.trail.line, pad = app.layout.trail.pads[0];
    const route = { n: L.x.length, x: L.x, y: L.y, ht: L.ht };
    let join = 0;
    for (let i = 0; i < route.n; i++) if (L.ht[i] <= pad.h + 0.05) { join = L.s[i]; break; }
    walk = walkLine(route, { from: [SHOTS.viewpoint.pos[0], SHOTS.viewpoint.pos[1]], fromH: pad.h, join });
    build();
  });

  // y: the page's place, in screens. screens: the camera's, in path.js's. hero: how far the
  // card is up (0 at rest, 1 the picture is the screen). out: how far into the ending.
  // y: the page's place, in screens. screens: the camera's, in path.js's. hero: how far into the
  // dive. out: how far into the ending. card, up: which card the page is at and how far up it is
  // from rest (cardAt).
  const cam = { y: 0, screens: sStart, tau: BARE ? 0 : TAU0, pose: null, hero: BARE ? 1 : 0, out: 0, card: BARE ? null : 'hero', up: BARE ? 1 : 0 };
  const inScene = () => cam.up >= 1;
  function placeCamera(dt, snap = false) {
    if (!(unit > 0)) return;
    const target = scrollY() / unit;
    cam.y = (snap || reduced || !Number.isFinite(cam.y)) ? target : cam.y + (target - cam.y) * (1 - Math.exp(-FOLLOW * dt));
    if (Math.abs(target - cam.y) < 1e-4) cam.y = target;
    cam.screens = page.camAt(cam.y);
    const tauWas = cam.tau;
    cam.tau = pace.tauAt(cam.screens);
    // (A jump from one resting card straight to another passes through no moving frame: the
    // picture has to be drawn again for the new place all the same.)
    if (cam.tau !== tauWas) dirty = Math.max(dirty, 2);
    cam.hero = heroLen ? clamp01(cam.y / heroLen) : 1;
    cam.out = outLen ? clamp01((cam.y - yOut) / outLen) : 0;
    [cam.card, cam.up] = cardAt(cam.y, cam.out);
    if (!descent) return;
    let p = descent.poseAt(cam.tau);
    // At the water's edge the head turns to the boat.
    if (app.boat && !BARE) {
      const w = smooth(BOAT_PAN[0], BOAT_PAN[1], cam.tau);
      if (w > 0) {
        const bearing = (Math.atan2(app.boat.east - p.pos[0], app.boat.north - p.pos[1]) * 180) / Math.PI;
        const shape = camera.aspect < 0.85 ? 'tall' : 'wide';
        const fov = p.fov - BOAT_LENS[shape] * w;
        const half = Math.tan((fovFor(fov, camera.aspect) * Math.PI) / 360) * camera.aspect;
        const off = (Math.atan((BOAT_X[shape] - 0.5) * 2 * half) * 180) / Math.PI;
        const turn = Math.min(Math.max(angleDelta(bearing - off - p.yaw), -50), 50);
        p = { ...p, yaw: p.yaw + turn * w, pitch: p.pitch + BOAT_TIP[shape] * w, pos: [p.pos[0], p.pos[1], p.pos[2] + BOAT_RISE[shape] * w], fov };
      }
    }
    cam.pose = p;
    if (look.pinned && cam.tau >= 4) {
      look.yaw = angleDelta(look.heading - p.yaw);
      look.pitch = look.elevation - p.pitch;
    } else if (look.pinned) {
      look.pinned = false; look.idle = LOOK_HOLD;
      if (reduced) look.yaw = look.pitch = 0;
    }
    easeLook(dt);
    beachLook.hidden = cam.tau < 4.02;
    resetButton.disabled = !look.pinned && Math.abs(look.yaw) + Math.abs(look.pitch) < 0.05;
    const pitch = Math.min(Math.max(p.pitch + look.pitch, -88), 60);
    app.setPose(p.pos, p.yaw + look.yaw, pitch, 0, fovFor(p.fov, camera.aspect));
  }

  // ---------------------------------------------------------------- looking around

  // The head's turn away from the path's view, in degrees, laid on top of it.
  const look = { yaw: 0, pitch: 0, vyaw: 0, vpitch: 0, id: null, touch: false, x: 0, y: 0, moved: 0, decided: false, idle: 0, pinned: false, wasPinned: false, heading: 0, elevation: 0 };
  function easeLook(dt) {
    if (look.id !== null || look.pinned) return;
    look.idle += dt;
    if (look.idle < LOOK_HOLD || (!look.yaw && !look.pitch)) return;
    // x(t) = (x0 + (v0 + w x0) t) exp(-w t), stepped exactly, so it eases out of rest.
    const w = LOOK_BACK, e = Math.exp(-w * dt);
    for (const [k, v] of [['yaw', 'vyaw'], ['pitch', 'vpitch']]) {
      const a = look[k], b = look[v] + w * a;
      look[k] = (a + b * dt) * e;
      look[v] = (b - w * (a + b * dt)) * e;
      if (Math.abs(look[k]) < 0.01 && Math.abs(look[v]) < 0.01) look[k] = look[v] = 0;
    }
  }
  const angleDelta = (a) => (((a % 360) + 540) % 360) - 180;
  const beachLook = $('.beach-look'), resetButton = $('.look-reset');
  function pinLook() {
    if (cam.tau < 4 || !cam.pose) return;
    look.pinned = true;
    look.heading = cam.pose.yaw + look.yaw;
    look.elevation = Math.min(Math.max(cam.pose.pitch + look.pitch, -88), 60);
    look.vyaw = look.vpitch = 0;
  }
  function resetLook() {
    look.pinned = look.wasPinned = false; look.idle = LOOK_HOLD; look.vyaw = look.vpitch = 0;
    if (reduced) look.yaw = look.pitch = 0;
  }
  resetButton.addEventListener('click', resetLook);
  if (!RECORD) {
    stage.classList.add('lookable');
    stage.tabIndex = 0;
    stage.setAttribute('aria-label', 'The view. Drag or use left and right arrows to look around. Escape resets the view.');
    stage.addEventListener('keydown', (e) => {
      if (!started || !inScene()) return;
      if (e.key === 'Escape') { resetLook(); e.preventDefault(); return; }
      if (e.key !== 'ArrowLeft' && e.key !== 'ArrowRight') return;
      e.preventDefault();
      look.yaw = Math.min(Math.max(look.yaw + (e.key === 'ArrowLeft' ? -5 : 5), -180), 180);
      look.idle = 0; pinLook();
    });
    stage.addEventListener('pointerdown', (e) => {
      // (While the scene is a picture on a card there is nothing to look around in.)
      if (look.id !== null || !started || !inScene() || (e.pointerType === 'mouse' && e.button !== 0)) return;
      look.wasPinned = look.pinned;
      look.pinned = false;
      look.id = e.pointerId; look.touch = e.pointerType !== 'mouse';
      look.x = e.clientX; look.y = e.clientY; look.moved = 0; look.decided = !look.touch;
      look.vyaw = look.vpitch = 0;
      if (!look.touch) { e.preventDefault(); stage.focus({ preventScroll: true }); stage.setPointerCapture(e.pointerId); html.classList.add('looking'); }
    });
    stage.addEventListener('pointermove', (e) => {
      if (e.pointerId !== look.id) return;
      const dx = e.clientX - look.x, dy = e.clientY - look.y;
      look.x = e.clientX; look.y = e.clientY;
      // A finger has to show it means to go sideways first; a vertical swipe is the page's (the
      // browser takes it and cancels the pointer).
      if (!look.decided) {
        look.moved += Math.hypot(dx, dy);
        if (look.moved < 6) return;
        look.decided = true;
      }
      if (!look.touch) look.moved += Math.hypot(dx, dy);
      // The scene under the pointer moves with it: degrees per pixel from the lens.
      const k = camera.fov / stage.clientHeight;
      look.yaw = Math.min(Math.max(look.yaw - dx * k * (camera.aspect < 1 ? 1.3 : 1), -180), 180);
      if (look.touch) {
        // The vertical part of a sideways drag scrolls on, as the page would have.
        if (dy) scrollTo(0, window.scrollY - dy);
      } else look.pitch = Math.min(Math.max(look.pitch + dy * k, -75), 75);
    });
    const end = (e) => {
      if (e.pointerId !== look.id) return;
      if (look.wasPinned || (look.moved > 3 && e.type === 'pointerup')) pinLook();
      look.wasPinned = false;
      look.id = null; look.idle = 0;
      html.classList.remove('looking');
    };
    for (const ev of ['pointerup', 'pointercancel', 'lostpointercapture']) stage.addEventListener(ev, end);
    // A card at rest (the hero's, a spread's): a click on its picture goes in.
    stage.addEventListener('click', () => {
      if (!started || BARE || cam.up > 0.02 || !cam.card || cam.card === 'end') return;
      const h = cards.find((x) => x.id === cam.card), to = h ? h.y + h.len + SPREAD.out : heroLen;
      if (lenis) lenis.scrollTo(to * unit, { duration: 3.4, easing: inOut }); else jumpTo(to);
    });
  }

  // ---------------------------------------------------------------- the card, the sea's clock, the light

  const coverEl = $('.cover');
  // The curtain: blank paper drawn over the page for a jump from the menu.
  const curtain = { a: 0 };
  let traveling = false, coverShown = -1, tickNo = 0;
  const clockEls = [...document.querySelectorAll('.clock')];
  let clockShown = '';
  function updateStory() {
    if (BARE) return;
    post.set({ ...(cam.card ? { pose: cam.card } : null), up: cam.up, flip: inOut(clamp01((cam.out - OUT_FLIP[0]) / (OUT_FLIP[1] - OUT_FLIP[0]))) });
    // A picture does not move: the sea's clock is stopped while a card rests, and runs up to
    // its own speed as the card comes off the sand (and down again as one lands).
    const wake = smooth(WAKE[0], WAKE[1], cam.up);
    app.timeCtl.paused = wake <= 0;
    app.timeCtl.speed = wake;

    // The day. The sun follows the page's place: through the time lapse it moves with the
    // scroll (every other frame is plenty for light, and moving it costs about half a frame),
    // and a jump lands on the right hour at once. A light picked by hand on the beach
    // stays until the beach is left.
    tickNo++;
    if (!fixedLight) {
      if (manual && cam.tau < 4) { manual = null; dissolved(() => setSun(hourAt(cam.y)), !reduced && !RECORD && curtain.a < 0.5 && inScene()); }
      if (!manual) {
        // (The two ends of the day are always landed on exactly: the last step into evening is
        // a small one, and skipping it left the light a hair short of the Evening it shows.)
        const h = hourAt(cam.y), far = sunNow === null ? 9 : Math.abs(h - sunNow);
        if (h !== sunNow && (h === DAY.from || h === DAY.to || far > 0.5 || (far > 1e-4 && tickNo % 2 === 0))) { setSun(h); syncLighting(); }
      }
    }
    // The clock (in the frame, and on the ridge's line), to five minutes.
    const mins = Math.round(clockAt(cam.y) * 12) * 5, clock = `${String(Math.floor(mins / 60)).padStart(2, '0')}:${String(mins % 60).padStart(2, '0')}`;
    if (clock !== clockShown) { clockShown = clock; for (const e of clockEls) e.textContent = clock; }
    spreads?.update(cam.card, cam.up, !wordsOn || rewinding || traveling);
    if (curtain.a !== coverShown) {
      coverShown = curtain.a;
      coverEl.style.opacity = curtain.a.toFixed(3);
      coverEl.style.visibility = curtain.a > 0.002 ? 'visible' : 'hidden';
    }
  }
  // Nothing in the picture changes while a card rests on the sand, or once it is on its back.
  const still = () => !BARE && (cam.up <= 0 || post.turned);

  // A jump from the menu: the blank sand comes over, the page moves under it, it lifts.
  function travel(y) {
    if (traveling || !started) return;
    if (reduced || RECORD) { jumpTo(y); return; }
    traveling = true;
    lenis?.stop();
    gsap.to(curtain, { a: 1, duration: 0.6, ease: 'power2.inOut', onComplete: () => {
      jumpTo(y);
      gsap.to(curtain, { a: 0, duration: 1, ease: 'power2.inOut', delay: 0.3, onStart: () => { traveling = false; lenis?.start(); } });
    } });
  }
  const places = { walk: () => page.screensAt(1), boat: () => page.screensAt(4.97), reserve: () => page.screens };
  const spreads = BARE ? null : createSpreads({ reduced, off: LINE_OFF, onReserve: () => travel(places.reserve()) });
  document.querySelectorAll('[data-go]').forEach((el) => el.addEventListener('click', (e) => {
    e.preventDefault();
    travel(places[el.dataset.go]());
  }));

  // The booking: there is nobody to send it to.
  const form = $('.back__addr'), formNote = $('.back__small');
  form?.addEventListener('submit', (e) => {
    e.preventDefault();
    formNote.textContent = 'This is a concept page, so nothing was sent and nothing is booked. The walk down is real though.';
    formNote.classList.add('is-sent');
  });

  // ---------------------------------------------------------------- words

  // Every block shows while the page is inside its range: data-hero (how far the card is up),
  // data-tau (the camera's place on the way down), data-end (how far into the ending).
  const titleFx = titleOption(params.get('title'), { gsap, SplitText, reduced });
  const blocks = [...document.querySelectorAll('.words > *')].map((el) => {
    const kind = 'hero' in el.dataset ? 'hero' : 'tau' in el.dataset ? 'tau' : 'end';
    const [a, b] = (el.dataset[kind] ?? '0,0').split(',').map(Number);
    const after = [...el.querySelectorAll('.label, .body, .hero__actions, .cue, .foot > *')];
    const k = { el, kind, a, b, off: el.classList.contains('note') ? LINE_OFF_CLEAN : LINE_OFF, lines: [], byEl: new Map(), after, drift: kind === 'tau' ? el.querySelector('.display') : null, on: false, tl: null };
    // (Split again whenever the lines break differently: a font arriving, the window resized.)
    for (const d of el.querySelectorAll('[data-lines]')) {
      // (Demo: another way for the hero's line to arrive, ?title=write|ink|wind, title-options.js.)
      if (titleFx && kind === 'hero') { titleFx.split(d); k.title = true; continue; }
      SplitText.create(d, { type: 'lines', mask: 'lines', linesClass: 'line', autoSplit: true, onSplit: (self) => {
        k.byEl.set(d, self.lines);
        k.lines = [...k.byEl.values()].flat();
        k.tl?.progress(1);
        gsap.set(self.lines, { yPercent: k.on ? 0 : k.off });
      } });
    }
    gsap.set(after, { autoAlpha: 0, y: 14 });
    return k;
  });
  // The back of the card: what is written on it is there by the time it has turned to face
  // you (it starts coming in while the card is still edge-on), and the postmark lands once
  // the card is down.
  const backParts = [...document.querySelectorAll('.back__head, .back__note, .back__plan li, .back__price, .stamp__paper, .back__to, .back__addr .field, .back__addr .button, .back__small')];
  const backIn = $('.back__in');
  let backOn = null, backTl = null, stampOn = null;
  function showBack(on) {
    if (on === backOn) return;
    backOn = on;
    backTl?.kill();
    const d = reduced ? 0 : 0.7;
    backTl = gsap.timeline();
    if (on) {
      backTl.to(backIn, { '--rule': 1, duration: d * 1.6, ease: EASE }, 0);
      backTl.to(backParts, { autoAlpha: 1, y: 0, duration: d, ease: EASE, stagger: 0.03 }, 0);
    } else {
      backTl.to(backParts, { autoAlpha: 0, y: 8, duration: d * 0.4, ease: EASE }, 0);
      backTl.to(backIn, { '--rule': 0, duration: d * 0.4, ease: EASE }, 0);
    }
  }
  function showStamp(on) {
    if (on === stampOn) return;
    stampOn = on;
    if (on) gsap.fromTo('.stamp__mark', { scale: 1.45, autoAlpha: 0 }, { scale: 1, autoAlpha: 1, duration: reduced ? 0 : 0.42, ease: 'power4.in', overwrite: true });
    else gsap.to('.stamp__mark', { autoAlpha: 0, duration: 0.2, overwrite: true });
  }
  gsap.set(backParts, { autoAlpha: 0, y: 8 });
  gsap.set('.stamp__mark', { autoAlpha: 0 });
  gsap.set(backIn, { '--rule': 0 });

  let rewinding = false;
  function show(k) {
    k.tl?.kill();
    const t = (k.tl = gsap.timeline());
    t.set(k.el, { visibility: 'visible' });
    k.el.classList.add('is-on');
    const d = reduced ? 0 : REVEAL;
    if (k.lines.length) t.to(k.lines, { yPercent: 0, duration: d, ease: EASE, stagger: 0.09 }, 0);
    if (k.title) titleFx.show(t, 0);
    // The small words come in after the line, one after another.
    t.to(k.after, { autoAlpha: 1, y: 0, duration: d, ease: EASE, stagger: 0.07 }, reduced ? 0 : 0.35);
  }
  function hide(k) {
    k.tl?.kill();
    const t = (k.tl = gsap.timeline());
    k.el.classList.remove('is-on');
    const d = reduced ? 0 : 0.7;
    if (k.lines.length) t.to(k.lines, { yPercent: -k.off, duration: d, ease: EASE, stagger: 0.04 }, 0);
    if (k.title) titleFx.hide(t);
    t.to(k.after, { autoAlpha: 0, y: -8, duration: d * 0.8, ease: EASE }, 0);
    t.set(k.el, { visibility: 'hidden' });
    if (k.lines.length) t.set(k.lines, { yPercent: k.off });
    t.set(k.after, { y: 14 });
  }
  let wordsOn = false;
  function updateWords() {
    if (!wordsOn) return;
    const quiet = rewinding || traveling;
    for (const k of blocks) {
      const on = !quiet && (
        k.kind === 'hero' ? cam.out <= 0 && cam.hero >= k.a && cam.hero <= k.b
        : k.kind === 'tau' ? inScene() && cam.tau >= k.a && cam.tau <= k.b
        : cam.out >= k.a && cam.out <= k.b);
      if (on !== k.on) { k.on = on; on ? show(k) : hide(k); }
      // The line drifts across a little while it is up.
      if (on && k.drift && !reduced) {
        const u = clamp01((cam.tau - k.a) / (k.b - k.a));
        gsap.set(k.drift, { x: (0.7 - 1.4 * u) * (innerWidth / 100) });
      }
    }
    showBack(!quiet && cam.out >= OUT_WORDS);
    showStamp(!quiet && cam.out >= OUT_STAMP);
  }

  // ---------------------------------------------------------------- the frame around the scene

  const altEl = $('.hud__alt'), latEl = $('.hud__lat'), lonEl = $('.hud__lon');
  const railFill = $('.rail__fill'), railMark = $('.rail__mark'), railLabel = $('.rail__mark span'), railEl = $('.rail');
  // The altimeter runs from the railing (tau 1) to the water (tau 5).
  // A scale like an instrument's: a long tick at each stop, four short ones between.
  const RAIL = STOPS.slice(1), FINE = 5;
  const stops = [];
  for (let k = 0; k <= (RAIL.length - 1) * FINE; k++) {
    const d = document.createElement('i');
    d.className = k % FINE === 0 ? 'rail__stop' : 'rail__tick';
    d.style.top = `${(k / ((RAIL.length - 1) * FINE)) * 100}%`;
    railEl.append(d);
    stops.push(d);
  }
  const dms = (v, pos, neg) => {
    const a = Math.abs(v), d = Math.floor(a), m = Math.floor((a - d) * 60), s = Math.floor(((a - d) * 60 - m) * 60);
    return `${d}°${String(m).padStart(2, '0')}′${String(s).padStart(2, '0')}″${v >= 0 ? pos : neg}`;
  };
  // Parts of the frame come and go with the page's place: each fades when its turn changes.
  const shown = new Map();
  function setShown(sel, on, dur = REVEAL) {
    if (shown.get(sel) === on) return;
    shown.set(sel, on);
    gsap.to(sel, { autoAlpha: on ? 1 : 0, duration: reduced ? 0 : on ? dur : 0.45, ease: EASE, overwrite: true });
  }
  let lastHud = '', lastPhase = '';
  const narrow = matchMedia('(max-width: 720px)');
  function updateFrame() {
    if (!cam.pose) return;
    // On the sand (the hero, a spread, the ending) or in the scene: the menu changes while it is away,
    // in the middle of the dive.
    const sand = cam.up < 0.5;
    const phase = `${sand ? 'at-sand' : 'in-scene'}${cam.up <= 0.02 && cam.card !== 'end' ? ' at-card' : ''}`;
    if (phase !== lastPhase) {
      lastPhase = phase;
      for (const c of ['at-sand', 'in-scene', 'at-card']) html.classList.toggle(c, phase.split(' ').includes(c));
    }
    const quiet = !wordsOn || traveling;
    setShown('.hud', !quiet && (cam.up >= 0.96 || (cam.up < 0.1 && (cam.card !== 'end' || cam.out > 0.55))));
    setShown('.rail', !quiet && inScene() && cam.tau > 0.93);
    setShown('.scene-controls', !quiet && inScene() && cam.tau >= 4.02);

    const [e, n, h] = cam.pose.pos;
    const lat = ORIGIN.lat + n / 111320, lon = ORIGIN.lon + e / (111320 * Math.cos((ORIGIN.lat * Math.PI) / 180));
    const alt = `${Math.max(0, Math.round(h)).toLocaleString('en')} m`;
    const key = alt + lat.toFixed(5) + lon.toFixed(5);
    if (key !== lastHud) {
      lastHud = key;
      altEl.textContent = alt;
      railLabel.textContent = alt;
      latEl.textContent = dms(lat, 'N', 'S');
      lonEl.textContent = dms(lon, 'E', 'W');
    }
    const u = clamp01((cam.tau - 1) / (STOPS.length - 2));
    if (narrow.matches) railFill.style.transform = `scaleX(${u})`;
    else {
      railFill.style.transform = `scaleY(${u})`;
      railMark.style.transform = `translateY(${u * railEl.clientHeight}px)`;
    }
    stops.forEach((d, k) => d.classList.toggle('passed', cam.tau >= 1 + k / FINE - 0.001));
  }

  // ---------------------------------------------------------------- loading

  const steps = [
    { key: 'terrain', w: 0.42, label: 'Raising the headland' },
    { key: 'textures', w: 0.1, label: 'Laying down rock and sand' },
    { key: 'plants', w: 0.22, label: 'Growing the plants' },
    { key: 'trail', w: 0.06, label: 'Cutting the path' },
    { key: 'warm', w: 0.2, label: 'Filling the bay' },
  ];
  const done = new Set();
  let loadShown = 0, sinceStep = 0, loaded = false, started = false;
  for (const s of steps) if (s.key !== 'warm') app.on(s.key, () => { done.add(s.key); sinceStep = 0; });
  app.on('plants', (p) => { steps[2].label = `Growing ${Math.round((app.hf?.plants.count ?? 180000) / 1000) * 1000} plants`.replace(/(\d)(?=(\d{3})+\b)/g, '$1,'); });
  const countEl = $('.loader__count'), whatEl = $('.loader__what'), barEl = $('.loader__bar span'), seaEl = $('.loader__sea'), unseaEl = $('.loader__unsea');
  let seaAt = -1, loaderAt = performance.now();
  function updateLoader(dt) {
    // The loader keeps the wall's time, not the frame's. While the page is busy building the
    // scene its frames are far apart, and the page's own step is capped at a tenth of a second:
    // on that clock the count fell seconds behind the loading and then jumped to the end.
    const now = performance.now();
    if (!RECORD) dt = Math.min((now - loaderAt) / 1000, 2);
    loaderAt = now;
    sinceStep += dt;
    const doneW = steps.filter((s) => done.has(s.key)).reduce((a, s) => a + s.w, 0);
    const next = steps.find((s) => !done.has(s.key));
    const goal = next ? doneW + next.w * 0.9 * (1 - Math.exp(-sinceStep / 2.5)) : 1;
    loadShown += (goal - loadShown) * (1 - Math.exp(-dt * 4));
    if (!next) loadShown = Math.max(loadShown, 0.999);
    countEl.textContent = String(Math.min(100, Math.floor(loadShown * 100 + 0.5))).padStart(3, '0');
    barEl.style.transform = `scaleX(${loadShown})`;
    if (next && whatEl.textContent !== next.label) whatEl.textContent = next.label;
    // The sea rising through the name (page.css, .loader__sea). The script only says where the
    // water is going: nine tenths of the way through the step being waited for, slowly, or
    // to the top once everything is in. The browser moves it there on its own, so it keeps
    // rising through the seconds when the page is too busy to draw a frame. The water starts
    // at the letters' feet (80% down their box, which has room under them for the tail of the g).
    const to = next ? doneW + next.w * 0.9 : 1;
    if (seaEl && to !== seaAt) {
      seaAt = to;
      const level = 80 - to * 88, ease = `transform ${reduced ? 0 : next ? 5.5 : 0.8}s cubic-bezier(0.16, 0.62, 0.3, 1)`;
      seaEl.style.transition = unseaEl.style.transition = ease;
      seaEl.style.transform = `translateY(${level.toFixed(2)}%)`;
      unseaEl.style.transform = `translateY(${(-level).toFixed(2)}%)`;
    }
  }

  // Once everything is in: draw a frame at points all the way down, so every shader is
  // compiled and every texture uploaded behind the loader (not the first time the camera gets
  // there), and time a few to pick the resolution.
  async function warmUp() {
    performance.mark('kl:warm-start');
    const frame = () => new Promise((r) => requestAnimationFrame(r));
    const gl = renderer.getContext(), px = new Uint8Array(4);
    const timed = [];
    const first = BARE ? 0 : TAU0;
    const at = [first, ...[0.4, 0.7, 0.9, 1, 1.4, 1.8, 2, 2.3, 2.6, 3, 3.3, 3.6, 4, 4.5, 5].filter((t) => t > first)];
    for (const t of at) {
      const p = descent.poseAt(t);
      app.setPose(p.pos, p.yaw, p.pitch, 0, fovFor(p.fov, camera.aspect));
      app.frame(1 / 60);
      if ([first, 1, 2.6, 4].includes(t)) {
        // Twice more, timed to completion (reading a pixel makes the CPU wait for the GPU).
        app.renderFrame(); gl.readPixels(0, 0, 1, 1, gl.RGBA, gl.UNSIGNED_BYTE, px);
        const t0 = performance.now();
        app.renderFrame(); gl.readPixels(0, 0, 1, 1, gl.RGBA, gl.UNSIGNED_BYTE, px);
        timed.push(performance.now() - t0);
      }
      await frame();
    }
    // Pixels scale with the square of the pixel ratio: aim for about 13 ms a frame.
    if (app.governor.on) {
      timed.sort((a, b) => a - b);
      const ms = timed[Math.floor(timed.length / 2)];
      const pr = Math.min(app.governor.max, Math.max(0.75, app.governor.pr * Math.sqrt(13 / ms)));
      const r = Math.round(pr * 20) / 20;
      if (Math.abs(r - app.governor.pr) > 0.01) { app.governor.pr = r; renderer.setPixelRatio(r); app.setSize(size[0], size[1]); }
      app.governor.min = Math.min(0.75, r);
      window.__calibration = { ms: timed.map((v) => +v.toFixed(1)), pr: r };
    }
    // The sand for the card to lie on, then the card's own picture.
    await sandReady;
    const at0 = params.has('at') ? +params.get('at') : 0;
    jumpTo(page.screensAt(at0));
    placeCamera(0, true);
    updateStory();
    for (let i = 0; i < 3; i++) { app.advance(0); app.renderFrame(); await frame(); }
    done.add('warm');
    performance.mark('kl:warm-end');
  }
  app.on('loaded', () => { loaded = true; warmUp().catch((e) => console.error('warm-up failed', e)); });

  // The loader lifts from black onto the sand and the card, the camera settles back to rest,
  // and the title comes up line by line.
  const intro = { k: 0 };
  function begin(skip = false) {
    started = true;
    dirty = 2;
    performance.mark('kl:begin');
    html.classList.remove('loading');
    if (skip || reduced) post.set({ settle: 1 });
    if (skip) { gsap.set(loaderEl, { autoAlpha: 0 }); lenis?.start(); wordsOn = true; window.__ready = true; return; }
    const t = gsap.timeline();
    t.to(loaderEl, { autoAlpha: 0, duration: reduced ? 0 : 1.6, ease: 'power2.inOut' });
    if (!reduced && !BARE) t.to(intro, { k: 1, duration: 3.4, ease: 'power3.out', onUpdate: () => post.set({ settle: intro.k }) }, 0.15);
    // The title once the loader has mostly lifted.
    t.add(() => { wordsOn = true; }, reduced ? 0 : 1.05);
    t.add(() => { lenis?.start(); }, 0.4);
    t.add(() => { window.__ready = true; }, reduced ? 0 : 3.2);
  }
  if (!BARE) post.set({ settle: 0 });

  // Back to the top: the camera climbs the whole way back up. The words stay out of the way.
  document.querySelectorAll('[data-top]').forEach((b) => b.addEventListener('click', (e) => {
    e.preventDefault();
    if (!lenis || reduced) { rewinding = false; jumpTo(0); return; }
    rewinding = true;
    lenis.scrollTo(0, { duration: Math.min(9, 2.5 + cam.y * 0.4), easing: inOut, onComplete: () => { rewinding = false; } });
  }));

  resize(true);
  addEventListener('resize', () => resize());

  // ---------------------------------------------------------------- the loop

  const statusEl = $('#status');
  let frames = 0, fpsT = 0, fps = 0;
  function tick(dt) {
    if (!started) {
      updateLoader(dt);
      if (done.has('warm') && loadShown > 0.995) begin();
      return;
    }
    placeCamera(dt);
    updateStory();
    updateWords();
    updateFrame();
    post.tick(dt);
    palm?.tick(dt, cam);
    // (At rest the picture is a picture: no frame is drawn until something in it changes.)
    if (dirty > 0 || !still()) { dirty = Math.max(0, dirty - 1); app.frame(dt); }
    if (DEBUG) {
      frames++; fpsT += dt;
      if (fpsT > 0.5) { fps = frames / fpsT; frames = 0; fpsT = 0; }
      const p = cam.pose;
      statusEl.textContent = `tau ${cam.tau.toFixed(3)}  page ${cam.y.toFixed(2)}/${page.screens.toFixed(1)}  card ${cam.hero.toFixed(2)}  ending ${cam.out.toFixed(2)}  walked ${p && cam.tau > 1 ? descent.wAt(cam.tau).toFixed(1) + ' m' : '-'}\n`
        + `pos ${p?.pos.map((v) => v.toFixed(1)).join(', ')}  yaw ${p?.yaw.toFixed(1)} pitch ${p?.pitch.toFixed(1)} fov ${camera.fov.toFixed(1)}\n`
        + `${fps.toFixed(0)} fps  pixel ratio ${app.governor.pr.toFixed(2)}  ${renderer.domElement.width}x${renderer.domElement.height}  ${app.state.lighting}`;
    }
  }

  const api = { pace: page, path: pace, get descent() { return descent; }, cam, look, resetLook, pinLook, chooseLighting, post, travel };
  if (RECORD) {
    // Frame by frame, on the recorder's clock: GSAP's own clock stops and is stepped with it.
    gsap.ticker.remove(gsap.updateRoot);
    let vt = 0;
    window.__scroll = {
      ...api,
      get descent() { return descent; },
      get ready() { return done.has('warm'); },
      begin(skip) { begin(skip); },
      // Advance dt seconds with the page scrolled to `screens` (snap: the camera there at once).
      frame(dt, screens, snap = false) {
        vt += dt;
        scrollTo(0, screens * unit);
        if (snap) cam.y = screens;
        gsap.updateRoot(vt);
        tick(dt);
        return cam.tau;
      },
    };
    // Until the recorder starts, the loader runs on the real clock.
    const idle = () => { if (!started) { updateLoader(1 / 60); if (!done.has('warm')) requestAnimationFrame(idle); } };
    requestAnimationFrame(idle);
  } else {
    gsap.ticker.lagSmoothing(0);
    gsap.ticker.add((time, deltaMs) => {
      lenis?.raf(time * 1000);
      tick(Math.min(deltaMs / 1000, 0.1));
    });
    window.__scroll = { ...api, get descent() { return descent; }, jumpTo, get lenis() { return lenis; } };
  }

  // ---------------------------------------------------------------- debug

  if (DEBUG) {
    buildPanel(app, {
      top: (g) => {
        const f = g.addFolder('Scroll');
        f.add(cam, 'tau').listen().disable();
        const go = { stop: STOPS[0] };
        f.add(go, 'stop', STOPS).name('go to (1-6)').onChange((s) => goTo(STOPS.indexOf(s)));
        f.add({ text: true }, 'text').name('words').onChange((v) => html.classList.toggle('notext', !v));
      },
    });
    const goTo = (i) => lenis ? lenis.scrollTo(page.screensAt(i) * unit, { duration: 2.5 }) : jumpTo(page.screensAt(i));
    addEventListener('keydown', (e) => {
      if (e.target.tagName === 'INPUT') return;
      const n = +e.key;
      if (n >= 1 && n <= STOPS.length) goTo(n - 1);
    });
  }
}
