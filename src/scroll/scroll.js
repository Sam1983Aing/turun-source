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
//   the spreads     twice the scroll holds the camera under a paper spread (spreads.js)
//   the day         at LAPSE.tau it holds it again, over the cove from 88 m, and the scroll
//                   turns the sun instead: morning through noon to evening
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
import { createApp } from '../app.js';
import { buildPanel } from '../debug.js';
import { SHOTS } from '../shots.js';
import { ORIGIN } from '../terrain/geo.js';
import { walkLine } from '../trail/route.js';
import { buildDescent, makePace, STOPS } from './path.js';
import { createPostcard } from './postcard.js';
import { createSpreads } from './spreads.js';

gsap.registerPlugin(SplitText);

// One motion personality for the page: this ease and this length for every reveal.
const EASE = 'expo.out';
const REVEAL = 1.1;
// How quickly the camera catches up with the scroll (per second): Lenis already smooths the
// wheel, this only takes the edge off jumps (keys, the scrollbar, a touch fling).
const FOLLOW = 9;
// Looking around: how long the head stays turned after the drag ends (seconds), and how quickly
// it then turns back (a critically damped spring, per second: most of the way in a second).
const LOOK_HOLD = 0.6, LOOK_BACK = 3.2;

// The card's picture: this far down the flight (high over the bay, the whole headland in it).
const TAU0 = 0.5;
// The dive, in screens of scroll. The camera sets off this share of the way into it and eases
// up to the scroll's speed over CAM_EASE screens: from the first touch, in other words. (The
// first iteration held it for 60% of the dive, and Sam's note was that he scrolled and scrolled
// and nothing moved until the picture was the screen. The card itself still grows slowly at
// first, so the scene is seen turning while it is plainly still a card.)
const HERO = 1.7, CAM_START = 0, CAM_EASE = 0.05;
// The sea wakes over this stretch of the dive (0 a still picture, 1 its own clock).
const WAKE = [0.015, 0.22];
// The day. The page opens in morning light: about ten on the photo's day, the first hour the
// beach is out of the headland's shadow (the scene's own Morning, eight o'clock, leaves the whole
// bay dark: it faces west under 150 m of cliff). `ev`: exposure compensation in stops at the
// start, at noon and at the end (the end is the scene's Evening preset). `clock`: what the
// page's clock reads over the time lapse. That is the story's day (on the sand at 07:10, the
// boat at 17:40), not the sun's hours: the light is a picture of a day, not a simulation of it.
const DAY = { from: 10.3, noon: 12, to: 17, ev: [0.15, 0, 0.5], clock: [7 + 10 / 60, 17 + 40 / 60] };
// Where the scroll holds the camera and turns the sun through that day instead, and for how
// many screens (the cove from 88 m, at the top of the switchbacks).
const LAPSE = { tau: 2.2, len: 1.8 };
// Where it holds under a paper spread (spreads.js), and for how many screens.
const SPREADS = [{ id: 'walk', tau: 1.32, len: 1.15 }, { id: 'beach', tau: 3.02, len: 1.15 }];
// The ending, in screens, and the shares of it for the frame going back to a card, and the
// card turning over.
const OUTRO = 2.6, OUT_CARD = [0, 0.46], OUT_FLIP = [0.5, 0.8], OUT_WORDS = 0.6, OUT_STAMP = 0.79;
// Where the sand under the card is photographed: a spot on the upper beach, from this high,
// through this lens, and in this light whatever the scene's is (a low sun rakes across the
// sand's relief, where noon flattens it to a cream wall).
const SAND = { at: [118, 212], up: 3.4, fov: 40, light: 'evening', lift: 'rgba(244, 216, 170, 0.24)' };
// Turning to the boat at the water's edge: over this stretch, to put it this far across. The
// eye comes up a little as it does (from 1.6 m above the swash a breaking wave stands as high
// as the horizon and hides the hull each time it rears), and the lens closes in.
const BOAT_PAN = [4.72, 4.985], BOAT_X = { wide: 0.64, tall: 0.58 }, BOAT_RISE = 2.3, BOAT_LENS = 16;

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
  const post = createPostcard({ reduced });
  // Frames owed (the picture stands still at rest, so frames are only drawn when asked; two,
  // as the haze settles over a frame).
  let dirty = 2;
  if (BARE) post.set({ dive: 1 });

  // ---------------------------------------------------------------- the page in screens

  const pace = makePace();
  const sStart = BARE ? 0 : pace.screensAt(TAU0), sEnd = pace.screens;
  const heroLen = BARE ? 0 : HERO, lead = heroLen * CAM_START, outLen = BARE ? 0 : OUTRO;
  // The camera's start: its way along the path for scroll `d` past `lead`. It eases up to the
  // scroll's own speed (a start from rest inside the card), and ends up CAM_EASE behind it.
  const ease = BARE ? 0 : CAM_EASE;
  const run = (d) => (ease ? d - ease * (1 - Math.exp(-d / ease)) : d);
  const runBack = (r) => { let lo = r, hi = r + ease; for (let i = 0; i < 40; i++) { const m = (lo + hi) / 2; if (run(m) < r) lo = m; else hi = m; } return (lo + hi) / 2; };
  // Where the scroll holds the camera still: under each paper spread, and for the day's time
  // lapse. s: where on the path, len: for how many screens, y: where on the page.
  const holds = (BARE ? [] : [...SPREADS, { id: 'lapse', ...LAPSE }]).map((h) => ({ id: h.id, s: pace.screensAt(h.tau), len: h.len })).sort((a, b) => a.s - b.s);
  holds.reduce((before, h) => { h.y = lead + runBack(h.s - sStart) + before; return before + h.len; }, 0);
  const held = holds.reduce((a, h) => a + h.len, 0);
  const yOut = lead + runBack(sEnd - sStart) + held;
  const lapse = holds.find((h) => h.id === 'lapse') ?? null;
  const page = {
    screens: yOut + outLen,
    holds,
    // The camera's place (in path.js's screens) for a place on the page, and back.
    camAt(y) {
      if (y <= lead) return sStart;
      let before = 0;
      for (const h of holds) {
        if (y <= h.y) break;
        if (y <= h.y + h.len) return h.s;
        before += h.len;
      }
      return Math.min(sEnd, sStart + run(y - lead - before));
    },
    yAt(s) { return s <= sStart ? 0 : lead + runBack(Math.min(s, sEnd) - sStart) + holds.reduce((a, h) => a + (s > h.s + 1e-6 ? h.len : 0), 0); },
    tauAt(y) { return pace.tauAt(this.camAt(y)); },
    screensAt(tau) { return this.yAt(pace.screensAt(tau)); },
  };

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
  // (a little slack at each end of its hold), evening after it.
  const lapseU = (y) => (lapse ? clamp01((y - lapse.y - 0.12) / (lapse.len - 0.24)) : 0);
  const hourAt = (y) => { const u = lapseU(y); return DAY.from + (DAY.to - DAY.from) * (u * u * (3 - 2 * u)); };
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
    // A phone resizes the window as its address bar slides; the stage does not, so only a real
    // change of size re-sizes the canvas.
    if (!force && w === size[0] && Math.abs(h - size[1]) < 2) return;
    // Retain the route beat when rotating a phone: the scroll is measured in stage
    // heights, so keeping the old pixel offset would move to another part of the trail.
    const retained = descent ? cam.y : null;
    size = [w, h];
    app.setSize(w, h);
    unit = h;
    track.style.height = `${page.screens * unit + innerHeight}px`;
    post.layout();
    groundLight = null;
    dirty = 2;
    if (walk && Math.abs(w / h / descent.aspect - 1) > 0.03) build();
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

  // The sand under the card: the beach itself from straight above, drawn once by the scene in
  // the light of the moment and kept as a picture (it is much bigger on the page than the
  // canvas, so it is drawn finer than a frame). The sun comes from the top left of it.
  const groundCtx = post.ground.getContext('2d');
  let groundLight = null;   // (null: to be taken again, after a resize)
  function captureGround() {
    if (!app.hf || BARE) return;
    const [w, h] = size, pr0 = renderer.getPixelRatio();
    const pr = Math.max(pr0, Math.min(devicePixelRatio * 1.6, Math.sqrt((w < 720 ? 4e6 : 6e6) / (w * h))));
    const keep = { p: camera.position.clone(), r: camera.rotation.clone(), fov: camera.fov };
    renderer.setPixelRatio(pr); app.setSize(w, h);
    const [x, y] = (params.get('sandAt') ?? '').includes(',') ? params.get('sandAt').split(',').map(Number) : SAND.at;
    const up = +(params.get('sandUp') ?? SAND.up);
    if (!fixedLight) app.setLighting(params.get('sandLight') ?? SAND.light);
    app.setPose([x, y, app.groundAt(x, y) + up], app.state.sunAz + 45, -89.9, 0, SAND.fov);
    app.advance(0); app.renderFrame(); app.renderFrame();
    const c = renderer.domElement;
    post.ground.width = c.width; post.ground.height = c.height;
    groundCtx.drawImage(c, 0, 0);
    // The low sun's shadows lifted a little, so small ink type can cross them.
    groundCtx.fillStyle = SAND.lift;
    groundCtx.fillRect(0, 0, c.width, c.height);
    // Back to the page's own light (or the one picked by hand).
    if (!fixedLight) { if (manual) app.setLighting(manual); else setSun(hourAt(cam.y)); syncLighting(); app.advance(0); }
    renderer.setPixelRatio(pr0); app.setSize(w, h);
    camera.position.copy(keep.p); camera.rotation.copy(keep.r);
    camera.fov = keep.fov; camera.updateProjectionMatrix();
    groundLight = true;
    dirty = 2;
  }

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
    const aspect = size[0] / size[1];
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
  const cam = { y: 0, screens: sStart, tau: BARE ? 0 : TAU0, pose: null, hero: BARE ? 1 : 0, out: 0 };
  const inScene = () => cam.hero >= 1 && cam.out <= 0;
  function placeCamera(dt, snap = false) {
    const target = scrollY() / unit;
    cam.y = (snap || reduced) ? target : cam.y + (target - cam.y) * (1 - Math.exp(-FOLLOW * dt));
    if (Math.abs(target - cam.y) < 1e-4) cam.y = target;
    cam.screens = page.camAt(cam.y);
    cam.tau = pace.tauAt(cam.screens);
    cam.hero = heroLen ? clamp01(cam.y / heroLen) : 1;
    cam.out = outLen ? clamp01((cam.y - yOut) / outLen) : 0;
    if (!descent) return;
    let p = descent.poseAt(cam.tau);
    // At the water's edge the head turns to the boat.
    if (app.boat && !BARE) {
      const w = smooth(BOAT_PAN[0], BOAT_PAN[1], cam.tau);
      if (w > 0) {
        const bearing = (Math.atan2(app.boat.east - p.pos[0], app.boat.north - p.pos[1]) * 180) / Math.PI;
        const fov = p.fov - BOAT_LENS * w;
        const half = Math.tan((fovFor(fov, camera.aspect) * Math.PI) / 360) * camera.aspect;
        const off = (Math.atan(((camera.aspect < 0.85 ? BOAT_X.tall : BOAT_X.wide) - 0.5) * 2 * half) * 180) / Math.PI;
        const turn = Math.min(Math.max(angleDelta(bearing - off - p.yaw), -50), 50);
        p = { ...p, yaw: p.yaw + turn * w, pos: [p.pos[0], p.pos[1], p.pos[2] + BOAT_RISE * w], fov };
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
    // The card at rest: a click on its picture goes in.
    stage.addEventListener('click', () => {
      if (!started || cam.hero > 0.02 || cam.out > 0 || BARE) return;
      if (lenis) lenis.scrollTo(heroLen * unit, { duration: 3.4, easing: inOut }); else jumpTo(heroLen);
    });
  }

  // ---------------------------------------------------------------- the card, the sea's clock, the light

  const coverEl = $('.cover');
  // The curtain: blank paper drawn over the page for a jump from the menu.
  const curtain = { a: 0 };
  let traveling = false, coverShown = -1, tickNo = 0;
  // How much of the scene is under a paper spread.
  const veil = () => spreads?.cover ?? 0;
  const clockEl = $('.clock');
  let clockShown = '';
  function updateStory() {
    if (BARE) return;
    post.set({
      dive: cam.hero,
      out: clamp01((cam.out - OUT_CARD[0]) / (OUT_CARD[1] - OUT_CARD[0])),
      flip: inOut(clamp01((cam.out - OUT_FLIP[0]) / (OUT_FLIP[1] - OUT_FLIP[0]))),
    });
    // A picture does not move: the sea's clock is stopped while the card rests, and runs up to
    // its own speed as the card comes off the sand (and down again at the end).
    const wake = Math.min(smooth(WAKE[0], WAKE[1], cam.hero), 1 - smooth(0.02, OUT_CARD[1] * 0.7, cam.out));
    app.timeCtl.paused = wake <= 0;
    app.timeCtl.speed = wake;

    // The day. The sun follows the page's place: while the scroll is inside the time lapse it
    // moves with it (every other frame is plenty for light, and moving it costs about half a
    // frame), and a jump lands on the right hour at once. A light picked by hand on the beach
    // stays until the beach is left.
    tickNo++;
    if (!fixedLight) {
      if (manual && cam.tau < 4) { manual = null; dissolved(() => setSun(hourAt(cam.y)), !reduced && !RECORD && curtain.a < 0.5 && veil() < 0.5); }
      if (!manual) {
        const h = hourAt(cam.y), far = sunNow === null ? 9 : Math.abs(h - sunNow);
        if (far > 1e-4 && (far > 0.5 || tickNo % 2 === 0 || h === DAY.from || h === DAY.to)) { setSun(h); syncLighting(); }
      }
      // The clock on the time lapse's line.
      if (clockEl) {
        const u = lapseU(cam.y), m = Math.round((DAY.clock[0] + (DAY.clock[1] - DAY.clock[0]) * (u * u * (3 - 2 * u))) * 12) * 5;
        const t = `${String(Math.floor(m / 60)).padStart(2, '0')}:${String(m % 60).padStart(2, '0')}`;
        if (t !== clockShown) { clockShown = t; clockEl.textContent = t; }
      }
    }
    spreads?.update(cam.y, !wordsOn || rewinding || traveling);
    if (curtain.a !== coverShown) {
      coverShown = curtain.a;
      coverEl.style.opacity = curtain.a.toFixed(3);
      coverEl.style.visibility = curtain.a > 0.002 ? 'visible' : 'hidden';
    }
    // The sand under the card again after a resize, whenever it is about to show.
    if (!groundLight && (cam.hero < 1 || cam.out > 0 || curtain.a > 0.985)) captureGround();
  }
  // Nothing in the picture changes while the card rests in the hero, or once it is on its back.
  const still = () => !BARE && ((cam.out <= 0 && cam.hero <= 0) || post.turned || (cam.out > 0 && app.timeCtl.paused));

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
  const spreads = BARE ? null : createSpreads({ app, holds, reduced, onReserve: () => travel(places.reserve()) });
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
  const blocks = [...document.querySelectorAll('.words > *')].map((el) => {
    const kind = 'hero' in el.dataset ? 'hero' : 'tau' in el.dataset ? 'tau' : 'end';
    const [a, b] = (el.dataset[kind] ?? '0,0').split(',').map(Number);
    const after = [...el.querySelectorAll('.label, .body, .hero__actions, .facts > div, .foot > *')];
    const k = { el, kind, a, b, lines: [], byEl: new Map(), after, drift: kind === 'tau' ? el.querySelector('.display') : null, on: false, tl: null };
    // (Split again whenever the lines break differently: a font arriving, the window resized.)
    for (const d of el.querySelectorAll('[data-lines]')) {
      SplitText.create(d, { type: 'lines', mask: 'lines', linesClass: 'line', autoSplit: true, onSplit: (self) => {
        k.byEl.set(d, self.lines);
        k.lines = [...k.byEl.values()].flat();
        k.tl?.progress(1);
        gsap.set(self.lines, { yPercent: k.on ? 0 : 105 });
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
    // The small words come in after the line, one after another.
    t.to(k.after, { autoAlpha: 1, y: 0, duration: d, ease: EASE, stagger: 0.07 }, reduced ? 0 : 0.35);
  }
  function hide(k) {
    k.tl?.kill();
    const t = (k.tl = gsap.timeline());
    k.el.classList.remove('is-on');
    const d = reduced ? 0 : 0.7;
    if (k.lines.length) t.to(k.lines, { yPercent: -105, duration: d, ease: EASE, stagger: 0.04 }, 0);
    t.to(k.after, { autoAlpha: 0, y: -8, duration: d * 0.8, ease: EASE }, 0);
    t.set(k.el, { visibility: 'hidden' });
    if (k.lines.length) t.set(k.lines, { yPercent: 105 });
    t.set(k.after, { y: 14 });
  }
  let wordsOn = false;
  function updateWords() {
    if (!wordsOn) return;
    const quiet = rewinding || traveling;
    for (const k of blocks) {
      const on = !quiet && (
        k.kind === 'hero' ? cam.out <= 0 && cam.hero >= k.a && cam.hero <= k.b
        : k.kind === 'tau' ? inScene() && cam.tau >= k.a && cam.tau <= k.b && veil() < 0.4
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
  const RAIL = STOPS.slice(1);
  const stops = RAIL.map((_, i) => {
    const d = document.createElement('div');
    d.className = 'rail__stop';
    d.style.top = `${(i / (RAIL.length - 1)) * 100}%`;
    railEl.append(d);
    return d;
  });
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
    // On the sand (the hero, the ending) or in the scene: the menu changes while it is away,
    // in the middle of the dive.
    const sand = cam.hero < 0.5 || cam.out > 0.3;
    const phase = `${sand ? 'at-sand' : 'in-scene'}${cam.hero <= 0.02 && cam.out <= 0 ? ' at-hero' : ''}`;
    if (phase !== lastPhase) {
      lastPhase = phase;
      for (const c of ['at-sand', 'in-scene', 'at-hero']) html.classList.toggle(c, phase.split(' ').includes(c));
    }
    const quiet = !wordsOn || traveling;
    setShown('.hud', !quiet && (cam.hero < 0.1 || (cam.hero >= 0.96 && cam.out < 0.05 && veil() < 0.4) || cam.out > 0.55));
    setShown('.rail', !quiet && inScene() && cam.tau > 0.93 && veil() < 0.4);
    setShown('.scene-controls', !quiet && inScene() && cam.tau >= 4.02 && veil() < 0.4);

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
    stops.forEach((d, i) => d.classList.toggle('passed', cam.tau >= i + 1 - 0.001));
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
  const countEl = $('.loader__count'), whatEl = $('.loader__what'), barEl = $('.loader__bar span');
  function updateLoader(dt) {
    sinceStep += dt;
    const doneW = steps.filter((s) => done.has(s.key)).reduce((a, s) => a + s.w, 0);
    const next = steps.find((s) => !done.has(s.key));
    const goal = next ? doneW + next.w * 0.9 * (1 - Math.exp(-sinceStep / 2.5)) : 1;
    loadShown += (goal - loadShown) * (1 - Math.exp(-dt * 4));
    if (!next) loadShown = Math.max(loadShown, 0.999);
    countEl.textContent = String(Math.min(100, Math.floor(loadShown * 100 + 0.5))).padStart(3, '0');
    barEl.style.transform = `scaleX(${loadShown})`;
    if (next && whatEl.textContent !== next.label) whatEl.textContent = next.label;
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
    captureGround();
    await frame();
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
    // The title once the black has mostly lifted.
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
