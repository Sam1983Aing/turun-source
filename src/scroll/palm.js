// The sand under the card, alive (v35, rounds 11 to 15).
//
// The sand is a photograph with nothing on it (assets/hero/sand-clean.jpg, Sam's plate). What
// lies on it is laid by the page, in layers that can each move on their own:
//
//   shadows   palm fronds drawn by the script (a rib that curls, leaflets that each flutter to
//             their own beat), small and stretched so they are soft, multiplied over the sand
//             and over the card: far ones faint, the near one a little stronger
//   leaves    two real ones, hanging into the top corners: one picture of a frond's tip with a
//             clear background (assets/hero/palm-leaf.png, Sam's), hung twice, the right one
//             mirrored and longer. Each turns on its stem, and its shadow turns with it.
//   a gust    now and then, and as the scroll begins: sand skims across the sand and over the
//             card in streamers, the leaves pull, the card's windward edge lifts
//
// Who moves what. The page opens on this scene, under the loader, while the script is busy
// raising the terrain and cannot draw a frame for seconds at a time. So everything that has to
// move then is moved by the browser on its own (Web Animations on transforms and opacity): the
// leaves' sway, a slow drift of the whole shadows, the gust's sand sliding across. Only the
// leaflets' flutter in the shadows is drawn frame by frame by the script, and that starts when
// the page does (`wake`), from where it stood, so nothing jumps.
//
// The layers live in the card's world and take the sand's own transform, so they are laid with
// it for every pose and grow with it into the dive. Everything settles as the card comes up.
//
// (Two other ways were built and recorded before this one, in demos/sand/: the old photograph
// with its baked shadows slid about by a shader, and that with gusts. Sam chose this.)

// The palms' shadows (their colour, how soft, where the palms are, how a frond is drawn, how a
// shadow drifts) are first.js's: it runs before the first frame and draws them once, so the
// page opens with its shadows on the sand, and this script goes on moving the same canvases.
const { DEG, TAU, frames, SHADE, SOFT, PALMS, DRIFT, frond, driftFrames } = globalThis.__first;
// The wind blows this way across the screen (right and down), as the shadows lie.
const WIND = [0.83, 0.56];
// The leaf's picture is a square with the stem coming in at its top left corner (STEM, as
// shares of its side) and the leaflets fanning down and to the right, the first of them 14
// degrees under the horizontal and the last nearly straight down.
// Where it hangs, for a wide screen and a tall one: where the stem is on the sand's canvas
// (shares of its width and height: outside it, so only the tips come into the picture), the
// picture's side as a share of the canvas's width, how far it is turned downward from the
// picture's own lie (degrees), `flip` for one that hangs from the right (mirrored), and `ph`
// so that no two sway together.
// The turns are what keep the leaves off the words: the left one passes under the firm's
// name and stops short of the headline, the right one passes right of the menu and lays its
// tips over the card's corner. On a tall screen the left corner is the name's, so there is
// one, small, on the right.
const STEM = [0.0, 0.0116];
const LEAVES = {
  wide: [
    { x: 0.029, y: -0.072, size: 0.218, turn: 46, ph: 0.6 },
    { x: 1.0075, y: -0.032, size: 0.249, turn: 19, flip: true, ph: 2.9 },
  ],
  tall: [{ x: 1.049, y: -0.011, size: 0.34, turn: 25, flip: true, ph: 2.9 }],
};
// The browser's own motions repeat after this many seconds (each is a few sines that fit a
// whole number of times into it, so the loop has no seam), and a gust lasts this long.
const LOOP = 20, GUST = 3.3;

const clamp01 = (x) => Math.min(Math.max(x, 0), 1);
const smooth = (a, b, x) => { const t = clamp01((x - a) / (b - a)); return t * t * (3 - 2 * t); };
const el = (tag, cls) => { const e = document.createElement(tag); if (cls) e.className = cls; return e; };


// ---------------------------------------------------------------- what the browser moves

// A leaf on its stem: a slow sway with a quicker tremble on it, and a lean. `k`: how much.
const swayFrames = (ph, k = 1) => frames(120, (u) => {
  const r = (Math.sin(TAU * 3 * u + ph) * 0.62 + Math.sin(TAU * 7 * u + ph * 1.7) * 0.26 + Math.sin(TAU * 16 * u + ph) * 0.12) * 2.0 * k;
  return `rotate(${r.toFixed(3)}deg) skewX(${(Math.sin(TAU * 5 * u + ph + 1.4) * 0.7 * k).toFixed(3)}deg)`;
});

// ---------------------------------------------------------------- sand, blown

// Sand lifted by a gust skims the ground in streamers that snake downwind. Each is a small
// cloud of grains, and the grains are the sand's own: their colours are read off the
// photograph, most a little lighter than it (sand in the air catches the sun) and some darker,
// so a cloud shows over pale sand, over the card's white border and over its picture alike.
// The streamers are drawn once, onto a long sheet that lies along the wind, and a gust is
// that sheet sliding downwind across the screen and fading in and out: two things the
// browser can do without the script. The sheet is two copies of one piece laid end to end,
// and the piece is drawn so that its ends meet.
// (Before: grains drawn one by one as streaks read as rain. Smooth pale wisps could not be
// seen on sand without a shadow under them, and then looked like ribbons. And streamers moved
// frame by frame by the script froze whenever the script was busy.)
function makeGust() {
  const wrap = el('div', 'fx fx-gust'), turn = el('div', 'gust__turn'), run = el('div', 'gust__run'), tiles = [el('canvas'), el('canvas')];
  run.append(...tiles); turn.append(run); wrap.append(turn);
  turn.style.transform = `rotate(${(Math.atan2(WIND[1], WIND[0]) / DEG).toFixed(2)}deg)`;
  let seed = 81007;
  const rnd = () => ((seed = (Math.imul(seed, 1664525) + 1013904223) >>> 0) / 4294967296);
  let sprites = null, D = 0, TL = 0, anim = null;
  const RES = 0.6;   // the sheet is drawn at this share of the screen's own grain

  function paint() {
    if (!sprites || !TL) return;
    const c = tiles[0], g = c.getContext('2d'), W = c.width, H = c.height;
    g.setTransform(1, 0, 0, 1, 0, 0);
    g.clearRect(0, 0, W, H);
    seed = 7411;
    for (let i = 0; i < 8; i++) {
      // A lane: where across the wind, how it snakes (a whole number of bends, so the ends meet).
      const off = (i + 0.5) / 8 + 0.04 * Math.sin(i * 12.9898), amp = 0.016 + 0.026 * rnd(), k = 1 + Math.floor(rnd() * 3), ph = rnd() * TAU;
      for (let j = 0, n = 12 + Math.floor(rnd() * 8); j < n; j++) {
        const s = rnd(), wave = k * s * TAU + ph, l = (0.07 + 0.1 * rnd()) * H, w = (0.014 + 0.02 * rnd()) * H;
        const x = s * W, y = (off + amp * Math.sin(wave) + (rnd() - 0.5) * 0.024) * H;
        const ang = Math.atan(((amp * H * k * TAU) / W) * Math.cos(wave)), cs = Math.cos(ang), sn = Math.sin(ang);
        const sprite = sprites[Math.floor(rnd() * sprites.length)];
        g.globalAlpha = (0.3 + 0.7 * rnd()) * 0.8;
        for (const dx of [-W, 0, W]) { g.setTransform(cs, sn, -sn, cs, x + dx, y); g.drawImage(sprite, -l / 2, -w / 2, l, w); }
      }
    }
    g.setTransform(1, 0, 0, 1, 0, 0);
    g.globalAlpha = 1;
    const copy = tiles[1].getContext('2d');
    copy.clearRect(0, 0, W, H);
    copy.drawImage(c, 0, 0);
  }

  return {
    el: wrap,
    get ready() { return !!sprites; },
    size(w, h) {
      D = Math.hypot(w, h); TL = 1.1 * D;
      for (const c of tiles) { c.width = Math.round(TL * RES); c.height = Math.round(D * RES); c.style.width = `${TL}px`; c.style.height = `${D}px`; }
      run.style.top = `${-D / 2}px`;
      paint();
    },
    // The sand has been drawn (again): make the clouds of grains from its colours.
    grains(ground) {
      const w = Math.min(512, ground.width);
      let px;
      try { px = ground.getContext('2d').getImageData((ground.width - w) >> 1, ground.height >> 1, w, 1).data; } catch { px = null; }
      seed = 81007;
      sprites = [0, 1, 2].map(() => {
        const s = el('canvas'), x = s.getContext('2d');
        s.width = 256; s.height = 80;
        for (let n = 0; n < 1500; n++) {
          // (a long cloud, thick along its middle and thinning to its ends and edges)
          const u = rnd(), v = 0.5 + (rnd() + rnd() + rnd() - 1.5) * 0.3;
          const fall = (1 - Math.pow(Math.abs(2 * u - 1), 2.2)) * Math.exp(-Math.pow((v - 0.5) / 0.24, 2));
          const i = Math.floor(rnd() * w) * 4, k = rnd() < 0.74 ? 1.1 : 0.6;
          const col = px ? [px[i] * k, px[i + 1] * k, px[i + 2] * k] : [242 * k, 222 * k, 186 * k];
          x.fillStyle = `rgba(${Math.min(255, col[0]).toFixed(0)}, ${Math.min(255, col[1]).toFixed(0)}, ${Math.min(255, col[2]).toFixed(0)}, ${(fall * (0.55 + 0.45 * rnd())).toFixed(3)})`;
          const d = rnd() < 0.3 ? 2 : 1.3;
          x.fillRect(u * 256, v * 80, d * (1 + rnd()), d);
        }
        return s;
      });
      paint();
    },
    // A gust: the sheet slides downwind by a little more than the screen, and is there for
    // the middle of it. (It covers the screen from the first moment to the last.)
    blow() {
      if (!TL || !sprites) return;
      anim?.cancel();
      anim = run.animate([
        { transform: `translateX(${(-2 * TL + D / 2).toFixed(0)}px)`, opacity: 0 },
        { opacity: 0.95, offset: 0.2 },
        { opacity: 0.7, offset: 0.55 },
        { transform: `translateX(${(-D / 2).toFixed(0)}px)`, opacity: 0 },
      ], { duration: GUST * 1000, easing: 'linear' });
    },
    // Sand thrown out from under something that has just landed: clouds of grains leaving its
    // edge, more of them downwind. cx, cy, hw, hh: its middle and half its size, in the
    // layer's own pixels.
    puff(cx, cy, hw, hh) {
      if (!sprites) return;
      for (let i = 0; i < 22; i++) {
        const a = rnd() * TAU, ex = Math.cos(a), ey = Math.sin(a);
        const q = Math.min(hw / Math.max(Math.abs(ex), 1e-3), hh / Math.max(Math.abs(ey), 1e-3)) * 0.97;
        const c = el('canvas', 'gust__puff'), l = 70 + 90 * rnd(), w = 26 + 26 * rnd(), far = (36 + 90 * rnd()) * (1 + 0.5 * Math.max(0, ex * WIND[0] + ey * WIND[1]));
        c.width = 128; c.height = 40;
        c.getContext('2d').drawImage(sprites[i % 3], 0, 0, 128, 40);
        c.style.cssText = `left:${(cx + ex * q).toFixed(0)}px;top:${(cy + ey * q).toFixed(0)}px;width:${l.toFixed(0)}px;height:${w.toFixed(0)}px`;
        wrap.append(c);
        const at = (d, k) => `translate(-50%, -50%) rotate(${(a / DEG).toFixed(1)}deg) translateX(${d.toFixed(0)}px) scale(${k})`;
        c.animate([{ transform: at(-l * 0.2, 0.5), opacity: 0 }, { opacity: 0.9, offset: 0.12 }, { transform: at(far, 1.5), opacity: 0 }],
          { duration: 520 + 520 * rnd(), easing: 'cubic-bezier(0.1, 0.7, 0.25, 1)' }).finished.then(() => c.remove(), () => c.remove());
      }
    },
  };
}

// ---------------------------------------------------------------- the palm

// plate: the sand's photograph (scroll.js loads it as the day's sand). leaf: the leaf's picture.
export function createPalm({ reduced = false, plate = null, leaf = null } = {}) {
  let host = null, t = 0, awake = false, placed = '', moving = true, wasY = 0, onPlate = true, seenWas = -1, gustAt = -1e9, gustTimer = 0;
  const layers = [], loops = [];
  const layer = (cls) => { const e = el('div', `fx ${cls}`); layers.push(e); return e; };
  const loop = (node, kf) => { if (!reduced) loops.push(node.animate(kf, { duration: LOOP * 1000, iterations: Infinity })); };

  // The palms' shadows: for each, a layer that multiplies, and in it the canvas the script
  // draws the fronds on, which the browser drifts.
  const shade = {};
  for (const k of ['far', 'near']) {
    // (The page comes with them already drawn, by first.js before the first frame: those are
    // taken over as they are. Made here only where the page has none.)
    let wrap = document.querySelector(`.fx-first[data-shade="${k}"]`), cv = wrap?.querySelector('canvas');
    if (wrap) layers.push(wrap); else { wrap = layer('fx-shade'); cv = el('canvas', 'fx__fill'); wrap.append(cv); }
    loop(cv, driftFrames(...DRIFT[k]));
    shade[k] = { wrap, cv, buf: el('canvas') };
  }
  // The leaves, and under them their shadows: twice the same boxes, one holding the picture
  // and one its shape filled with the shade's colour, moved by the same motions.
  const leafShadeWrap = layer('fx-shade fx-leafshade'), leafWrap = layer('fx-leaf');
  const leafImg = new Image();
  let leaves = [], leafSet = null;
  function hang(set) {
    leafSet = set;
    leafWrap.replaceChildren(); leafShadeWrap.replaceChildren();
    leaves = set.map((l) => {
      // A box that is turned to the leaf's lie, in it one that sways, in it one that a gust
      // pulls, in it the picture (mirrored in one that hangs from the right).
      const part = (pic, k) => {
        const box = el('div', l.flip ? 'leaf leaf--right' : 'leaf'), come = el('div', 'leaf__in'), sway = el('div', 'leaf__in'), pull = el('div', 'leaf__in');
        pic.classList.add('leaf__pic');
        for (const e of [box, come, sway, pull]) e.style.transformOrigin = `${(l.flip ? 1 - STEM[0] : STEM[0]) * 100}% ${STEM[1] * 100}%`;
        box.style.transform = `rotate(${(l.flip ? -1 : 1) * l.turn}deg)`;
        box.append(come); come.append(sway); sway.append(pull); pull.append(pic);
        if (!arrived) come.style.opacity = '0';
        loop(sway, swayFrames(l.ph, k));
        return { box, pull, come };
      };
      const img = new Image();
      img.alt = '';
      // (No leaf, if its picture cannot be had: not a broken picture in the corner.)
      img.onerror = () => { img.style.display = 'none'; };
      if (leaf) img.src = leaf;
      const top = part(img, 1), shadow = el('canvas'), under = part(shadow, 1.15);
      leafWrap.append(top.box); leafShadeWrap.append(under.box);
      return { ...l, top, under, shadow, img };
    });
    cast();
    if (leafImg.complete && leafImg.naturalWidth) arrive();
  }
  // (A leaf's shadow: its own shape, filled with the shade's colour, a little soft.)
  function cast() {
    if (!leafImg.complete || !leafImg.naturalWidth) return;
    for (const l of leaves) {
      const c = l.shadow, x = c.getContext('2d');
      c.width = c.height = Math.round(leafImg.naturalWidth / 2);
      x.filter = 'blur(3px)';
      x.drawImage(leafImg, 0, 0, c.width, c.height);
      x.filter = 'none';
      x.globalCompositeOperation = 'source-in';
      x.fillStyle = SHADE.near; x.fillRect(0, 0, c.width, c.height);
    }
  }
  // The leaves come into the picture once, when their picture is ready to be drawn: each swings
  // down on its stem from a little way out, with its shadow, as a frond let go by the wind
  // does. (They were faded in with everything else the script made, which read as things
  // turning up late. Now what is there is there from the first frame, and this is a motion.)
  let arrived = false;
  function arrive() {
    if (arrived) return;
    arrived = true;
    Promise.all(leaves.map((l) => (l.img.decode ? l.img.decode().catch(() => {}) : null))).then(() => {
      leaves.forEach((l, i) => {
        for (const p of [l.top, l.under]) {
          p.come.style.opacity = '';
          if (!reduced) p.come.animate([{ opacity: 0, transform: `rotate(${l.flip ? 11 : -11}deg)` }, { opacity: 1, offset: 0.45 }, { opacity: 1, transform: 'rotate(0deg)' }],
            { duration: 2100, delay: 120 + i * 260, easing: 'cubic-bezier(0.2, 0.75, 0.2, 1)', fill: 'backwards' });
        }
      });
    });
  }
  leafImg.onload = () => { cast(); arrive(); };
  if (leaf) leafImg.src = leaf;
  const gust = reduced ? null : makeGust();
  if (gust) layers.push(gust.el);

  // A gust: up in under a second, away over three. How hard it is blowing now.
  const blow = () => { const since = (performance.now() - gustAt) / 1000; return since < 0 || since > GUST ? 0 : since < 0.8 ? smooth(0, 0.8, since) : Math.exp(-(since - 0.8) / 1.1); };
  const breeze = () => 0.55 + 0.25 * Math.sin(t * 0.37) + 0.2 * Math.sin(t * 0.83 + 1.7);
  function gustNow() {
    if (!gust || !host || seenWas <= 0.5 || document.hidden) return;
    gustAt = performance.now();
    gust.blow();
    // The leaves, and their shadows, give to it.
    for (const l of leaves) for (const p of [l.top, l.under]) {
      p.pull.animate([{ transform: 'rotate(0deg)' }, { transform: 'rotate(-3.6deg)', offset: 0.2 }, { transform: 'rotate(-1.4deg)', offset: 0.55 }, { transform: 'rotate(0deg)' }],
        { duration: GUST * 1000, easing: 'ease-out' });
    }
  }
  // (Now and then, and not at an even beat.)
  function nextGust(after) {
    clearTimeout(gustTimer);
    gustTimer = setTimeout(() => { gustNow(); nextGust(awake ? 8500 + 4000 * Math.random() : 5200 + 1500 * Math.random()); }, after);
  }

  function size() {
    if (!host) return;
    const w = host.ground.clientWidth, h = host.ground.clientHeight;
    if (!w || !h) return;
    gust?.size(w, h);
    for (const k of ['far', 'near']) for (const c of [shade[k].cv, shade[k].buf]) { c.width = Math.round(w * SOFT[k][0]); c.height = Math.round(h * SOFT[k][0]); }
    const set = w / h < 0.85 ? LEAVES.tall : LEAVES.wide;
    if (set !== leafSet) hang(set);
    for (const l of leaves) {
      // (The box is a square of the canvas's width, placed so that the stem is at x, y. The
      // shadow's is the same, a little down the sun's way.)
      const left = l.x - (l.flip ? 1 - STEM[0] : STEM[0]) * l.size, top = l.y - STEM[1] * l.size * (w / h);
      for (const [p, dx, dy] of [[l.top, 0, 0], [l.under, 0.016, 0.04]]) {
        const st = p.box.style;
        st.width = `${l.size * 100}%`; st.left = `${(left + dx) * 100}%`; st.top = `${(top + dy) * 100}%`;
      }
    }
    moving = true;
  }

  return {
    plate,
    mount({ ground, card, post }) {
      host = { ground, post };
      // Over the card, from the ground up: sand blows across it, shadows fall on it and on
      // that sand, and the leaves hang over everything (blown sand stays near the ground: with
      // it drawn over the leaves they looked dusty).
      // (The two palms' shadows are in the page already, after the card, if first.js drew them:
      // they are not moved.)
      if (shade.far.wrap.isConnected) { if (gust) card.after(gust.el); shade.near.wrap.after(leafShadeWrap, leafWrap); }
      else card.after(...(gust ? [gust.el] : []), shade.far.wrap, shade.near.wrap, leafShadeWrap, leafWrap);
      addEventListener('resize', size);
      size();
    },
    // The sand has just been laid again (postcard.js): everything over it goes with it at once,
    // not a frame later.
    sync() { if (!host) return; const tf = host.ground.style.transform; placed = tf; for (const e of layers) e.style.transform = tf; },
    // The page has begun: the script is free, and the leaflets start to flutter.
    wake() { awake = true; moving = true; },
    // (A gust, now: for the checks.)
    gust: () => gustNow(),
    // scroll.js has drawn the sand's canvas again (another photograph, another size). crop: the
    // part of the photograph that is on it, or null for one that is not the plate (the ending's).
    sandChanged(ground, crop) {
      size();
      // (The first gust comes soon after the sand is there, so that one is seen under the loader.)
      if (gust && !gust.ready) nextGust(1100);
      gust?.grains(ground);
      // (The leaves hang over the plate only: not over the ending's sand.)
      onPlate = !!crop;
      leafWrap.style.display = leafShadeWrap.style.display = onPlate ? '' : 'none';
    },
    // Something has landed on the sand: `rect`, on the screen. Sand flies out from under it.
    puff(rect) {
      if (!gust || !host) return;
      const g = host.ground.getBoundingClientRect(), w = host.ground.clientWidth, h = host.ground.clientHeight;
      if (!g.width) return;
      gust.puff((((rect.left + rect.right) / 2 - g.left) / g.width) * w, (((rect.top + rect.bottom) / 2 - g.top) / g.height) * h, ((rect.width / 2) / g.width) * w, ((rect.height / 2) / g.height) * h);
    },
    tick(dt, cam) {
      if (!host) return;
      if (awake && !reduced) t += dt;
      const pose = host.post.state.pose, up = clamp01(cam.up), calm = 1 - smooth(0.12, 0.55, up), day = pose !== 'end' ? 1 : 0;
      const tf = host.ground.style.transform;
      if (tf !== placed) { placed = tf; for (const e of layers) e.style.transform = tf; }
      // Seen: there to be seen (it fades as the card comes up, and is not at the ending).
      const seen = day ? 1 - smooth(0.05, 0.42, up) : 0;
      if (seen !== seenWas) {
        // (The browser's motions rest while nothing of this can be seen.)
        if ((seen > 0) !== (seenWas > 0)) for (const a of loops) seen > 0 ? a.play() : a.pause();
        seenWas = seen;
        for (const e of [shade.far.wrap, shade.near.wrap, leafShadeWrap, leafWrap]) e.style.opacity = seen.toFixed(3);
        if (gust) gust.el.style.opacity = (calm * day).toFixed(3);
      }
      // A gust as the scroll begins, if one has not just passed.
      if (wasY < 0.004 && cam.y >= 0.004 && performance.now() - gustAt > 2500) { gustNow(); nextGust(8500 + 4000 * Math.random()); }
      wasY = cam.y;
      const g = blow() * calm * day;
      const wind = (0.7 * breeze() + 0.55 * g) * calm * day;
      const live = awake && wind > 0.004 && up < 0.999;
      // The card's windward edge lifts a little as the gust passes.
      if (gust && awake) host.post.lean?.(-0.9 * g * (0.7 + 0.3 * Math.sin(t * 9)), 1.3 * g * (0.75 + 0.25 * Math.sin(t * 7.3 + 1)));
      if (seen > 0 && (live || moving)) {
        const set = host.ground.clientWidth / host.ground.clientHeight < 0.85 ? PALMS.tall : PALMS.wide;
        for (const k of ['far', 'near']) {
          const b = shade[k].buf, x = b.getContext('2d'), out = shade[k].cv.getContext('2d');
          x.clearRect(0, 0, b.width, b.height);
          x.fillStyle = x.strokeStyle = SHADE[k];
          for (const f of set[k]) frond(x, b.width, b.height, f, t, wind);
          out.clearRect(0, 0, b.width, b.height);
          out.filter = `blur(${SOFT[k][1]}px)`;
          out.drawImage(b, 0, 0);
          out.filter = 'none';
        }
      }
      moving = live;
    },
  };
}
