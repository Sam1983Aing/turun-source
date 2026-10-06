// Options for the middle of the page (demo, 6 October 2026): three ways for the walk down,
// between the railing and the sand, to carry the offer instead of going quiet. Behind a URL
// switch; without it none of this runs and the page is exactly as it was.
//
//   ?middle=notes      Field Notes: small notes pinned to real things in the scene (the boat,
//                      the beach, the steps ahead), each on a hairline, riding along as the
//                      camera moves.
//   ?middle=bookmark   Bookmark: the altimeter becomes a strip of the postcard's paper down the
//                      right edge, and the day prints itself onto it line by line as you descend.
//   ?middle=spreads    Spreads: twice on the way down the scroll holds and the page turns to
//                      blank paper for a magazine spread, with a postcard of the view you just
//                      left lying on it.
//
// One file: the shared pieces first, then each option as a short score. The scene is not
// touched. Still demo quality: see "rough edges" in teach/journal.md.

const clamp01 = (x) => Math.min(Math.max(x, 0), 1);
const smooth = (a, b, x) => { const t = clamp01((x - a) / (b - a)); return t * t * (3 - 2 * t); };
const el = (tag, cls, html = '') => { const e = document.createElement(tag); e.className = cls; e.innerHTML = html; return e; };

// Where the scroll holds the camera still for an option (scroll.js builds the page from these).
export const MIDDLE_HOLDS = {
  spreads: [{ id: 'walk', tau: 2.02, len: 1.15 }, { id: 'beach', tau: 3.02, len: 1.15 }],
};

export function createMiddle(kind, ctx) {
  const make = { notes: fieldNotes, bookmark: bookmark, spreads: spreads }[kind];
  if (!make) return null;
  const link = document.createElement('link');
  link.rel = 'stylesheet';
  link.href = new URL('./middle-options.css', import.meta.url).href;
  document.head.append(link);
  ctx.html.classList.add(`middle-${kind}`);
  return make(ctx);
}

// ---------------------------------------------------------------- 01 Field Notes

function fieldNotes(ctx) {
  const { app, cam } = ctx;
  const v = new app.THREE.Vector3();
  const layer = el('div', 'fn');
  document.querySelector('.page').append(layer);
  const ALL = new URLSearchParams(location.search).get('pins') === 'all';

  // A point on the path: where the eye will be `ahead` metres further down from where it is
  // at `tau`, `drop` metres lower (1.6 is the ground), `side` metres to the right.
  const onPath = (tau, ahead = 0, drop = 1.5, side = 0) => {
    const d = ctx.descent();
    if (!d) return null;
    const p = d.poseAt(ahead ? d.tauAtW(d.wAt(Math.max(tau, 1)) + ahead) : tau), yaw = (p.yaw * Math.PI) / 180;
    return [p.pos[0] + Math.cos(yaw) * side, p.pos[1] - Math.sin(yaw) * side, p.pos[2] - drop];
  };
  const ground = (e, n, up = 0) => [e, n, app.groundAt(e, n) + up];
  const boat = () => (app.boat ? [app.boat.east, app.boat.north, 1.2] : null);

  // Each note: what it is pinned to (east, north, height), over which stretch of the way down
  // it shows, and which way its tag goes (r: up to the right, l: up to the left). One fact of
  // the offer each. They keep clear of the page's own lines (bottom left, and right middle on
  // the ridge) by where they are pinned and when.
  const PINS = [
    // At the railing, while the camera waits: the day laid out on the place itself.
    { id: 'head', at: () => ground(0, 0, 4), a: 0.989, b: 1.04, side: 'r', k: 'The head', t: 'You sail round it at dusk' },
    { id: 'jukung', at: boat, a: 0.993, b: 1.05, side: 'r', k: '17:40', t: 'The jukung waits here' },
    { id: 'beach', at: () => ground(96, 160, 0.5), a: 0.997, b: 1.05, side: 'd', k: '07:10', t: 'The beach, yours all day' },
    // The ridge: the guide, a few metres ahead of you all the way along it and through the
    // pause at its end.
    { id: 'guide', at: () => onPath(cam.tau, 5.5, 0.25), a: 1.38, b: 2.035, side: 'auto', k: 'Wayan goes first', t: 'Six of you behind', live: true },
    // The switchbacks (the page's line is bottom left: these stay right of it).
    { id: 'steps', at: () => onPath(cam.tau, 5, 1.55), a: 2.36, b: 2.6, side: 'l', k: '400 steps', t: 'Packed earth and logs', live: true },
    { id: 'rail', at: () => onPath(2.86, 0, 0.75, 0.85), a: 2.64, b: 2.88, side: 'r', k: 'Bamboo rail', t: 'Rebuilt every dry season' },
    // The pause above the beach: what is waiting down there.
    { id: 'out', at: boat, a: 2.9, b: 3.06, side: 'auto', k: 'No climb back', t: 'The jukung takes you out' },
    { id: 'breakfast', at: () => ground(104, 176, 0.5), a: 2.915, b: 3.06, side: 'auto', k: 'Breakfast', t: 'Carried down ahead of you' },
    { id: 'foot', at: () => onPath(3.985, 0, 1.55), a: 2.93, b: 3.06, side: 'auto', k: 'The last step', t: 'Fifty minutes from the railing' },
    // The long last stretch, where the page said nothing.
    { id: 'shade', at: () => ground(115, 205, 0.6), a: 3.09, b: 3.22, side: 'auto', k: 'Shade until two', t: 'Under the overhang' },
    { id: 'pace', at: () => onPath(cam.tau, 5, 1.55), a: 3.3, b: 3.5, side: 'auto', k: 'Take your time', t: 'The beach is not going anywhere', live: true },
    { id: 'barefoot', at: () => ground(96, 160, 0.5), a: 3.56, b: 3.74, side: 'auto', k: 'Barefoot by seven', t: 'Shoes stay at the foot of the path' },
  ];
  for (const p of PINS) {
    p.el = el('div', `fn__pin fn--${p.side === 'auto' ? 'r' : p.side}`, `<i class="fn__dot"></i><i class="fn__line"></i><p class="fn__text"><b>${p.k}</b><span>${p.t}${ALL ? ` (${p.id})` : ''}</span></p>`);
    p.on = false; p.pos = null;
    layer.append(p.el);
  }

  return {
    cover: 0,
    tick(dt, s) {
      const W = innerWidth, H = innerHeight;
      for (const p of PINS) {
        const inRange = ALL ? ctx.inScene() : !s.quiet && ctx.inScene() && s.veil < 0.4 && cam.tau >= p.a && cam.tau <= p.b;
        let on = false;
        if (inRange) {
          if (!p.pos || p.live) p.pos = p.at();
          if (p.pos) {
            v.set(p.pos[0], p.pos[2], -p.pos[1]).project(app.camera);
            const x = (v.x * 0.5 + 0.5) * W, y = (-v.y * 0.5 + 0.5) * H;
            on = v.z > -1 && v.z < 1 && x > 40 && x < W - 40 && y > 90 && y < H - 40;
            if (on) p.el.style.transform = `translate3d(${x.toFixed(1)}px, ${y.toFixed(1)}px, 0)`;
            // On a narrow screen the tag sits above its dot, slid sideways to stay on the screen.
            if (on && W < 720) { const w = (p.w ??= p.el.lastElementChild.offsetWidth); p.el.style.setProperty('--tx', `${(Math.min(Math.max(x - w / 2, 12), W - w - 12) - x).toFixed(0)}px`); }
            // (A tag with no side of its own goes toward the middle of the screen, chosen as it comes on.)
            // On a narrow screen every tag does, so none runs off the edge.
            if (on && !p.on && (p.side === 'auto' || W < 720)) { const left = x > (W < 720 ? 0.5 : 0.56) * W; p.el.classList.remove('fn--d'); p.el.classList.toggle('fn--l', left); p.el.classList.toggle('fn--r', !left); }
          }
        }
        if (on !== p.on) { p.on = on; p.el.classList.toggle('is-on', on); }
      }
    },
  };
}

// ---------------------------------------------------------------- 02 Bookmark

function bookmark(ctx) {
  const { cam } = ctx;
  const TOP = 150;   // metres at the head of the strip
  // What prints at which height on the way down.
  const LINES = [
    { h: 150, k: '06:10', t: 'The railing. Coffee, and the briefing.' },
    { h: 122, k: '', t: 'Six walkers. One guide.' },
    { h: 96, k: '06:20', t: 'The ridge, a drop either side.' },
    { h: 68, k: '', t: 'Four hundred steps. Bamboo rails.' },
    { h: 40, k: '', t: 'We carry breakfast and the shade.' },
    { h: 12, k: '07:10', t: 'The sand. Yours all day.' },
    { h: 0, k: '17:40', t: 'The jukung home.', tau: 4.75 },
  ];
  const strip = el('aside', 'bm', `
    <p class="bm__head">Turun <span>the way down</span></p>
    <div class="bm__scale">
      ${[150, 125, 100, 75, 50, 25, 0].map((m) => `<i class="bm__tick" style="top:${((TOP - m) / TOP) * 100}%"><span>${m}</span></i>`).join('')}
      <div class="bm__mark"><span></span></div>
      ${LINES.map((l) => `<p class="bm__line" style="top:${((TOP - l.h) / TOP) * 100}%">${l.k ? `<b>${l.k}</b>` : ''}<span>${l.t}</span></p>`).join('')}
    </div>
    <p class="bm__foot"><b>US$ 240</b> a walker <a href="#reserve">Reserve</a></p>`);
  document.querySelector('.page').append(strip);
  strip.querySelector('a').addEventListener('click', (e) => { e.preventDefault(); ctx.travel('reserve'); });
  const lines = [...strip.querySelectorAll('.bm__line')], mark = strip.querySelector('.bm__mark'), markText = mark.querySelector('span');
  const scale = strip.querySelector('.bm__scale');
  let shown = null, last = -1;

  return {
    cover: 0,
    tick(dt, s) {
      const on = !s.quiet && ctx.inScene() && cam.tau > 0.95 && s.veil < 0.4;
      if (on !== shown) { shown = on; strip.classList.toggle('is-on', on); }
      if (!cam.pose) return;
      const h = Math.min(TOP, Math.max(0, cam.pose.pos[2] - 1.6));
      mark.style.transform = `translateY(${(((TOP - h) / TOP) * scale.clientHeight).toFixed(1)}px)`;
      const m = Math.round(h);
      if (m !== last) { last = m; markText.textContent = `${m} m`; }
      let current = -1;
      LINES.forEach((l, i) => { const passed = cam.tau >= 0.99 && (l.tau ? cam.tau >= l.tau : h <= l.h + 2.5); lines[i].classList.toggle('is-on', passed); if (passed) current = i; });
      lines.forEach((e, i) => e.classList.toggle('is-current', i === current));
      strip.classList.toggle('is-done', cam.tau >= 3.99);
    },
  };
}

// ---------------------------------------------------------------- 03 Spreads

function spreads(ctx) {
  const { app, cam, page } = ctx;
  const FADE = 0.3;
  const DEFS = {
    walk: {
      label: 'The walk', when: '06:10',
      head: ['Six walkers.', 'One <em>guide</em>.'],
      rows: [['Leaves', '06:10, from the railing'], ['Down', '150 m, about 400 steps, fifty minutes'], ['You carry', 'Water. We carry the rest.']],
      card: 'From the ridge, 95 m',
    },
    beach: {
      label: 'The beach', when: '07:10 to 17:40',
      head: ['Then a whole day', 'of <em>nothing</em>.'],
      rows: [['07:10', 'Breakfast on the sand'], ['All day', 'Shade under the overhang, and nobody else'], ['17:40', 'The jukung, round the head and home']],
      card: 'Above the beach, 55 m',
      price: true,
    },
  };
  const list = page.holds.filter((h) => DEFS[h.id]).map((h) => {
    const d = DEFS[h.id];
    const node = el('section', `sp sp--${h.id}`, `
      <div class="sp__text">
        <p class="label sp__label"><b>${d.label}</b><span>${d.when}</span></p>
        <h2 class="display sp__head">${d.head.map((l) => `<span class="sp__mask"><span class="sp__ln">${l}</span></span>`).join('')}</h2>
        <i class="sp__rule"></i>
        <dl class="sp__rows">${d.rows.map(([k, t]) => `<div><dt>${k}</dt><dd>${t}</dd></div>`).join('')}</dl>
        ${d.price ? '<p class="sp__price"><b>US$ 240</b> a walker, April to October <a class="button" href="#reserve">Reserve a morning</a></p>' : ''}
      </div>
      <figure class="sp__card"><canvas></canvas><figcaption><span>${d.card}</span><span>Kelingking</span></figcaption></figure>`);
    document.querySelector('.page').append(node);
    node.querySelector('a')?.addEventListener('click', (e) => { e.preventDefault(); ctx.travel('reserve'); });
    return { h, node, canvas: node.querySelector('canvas'), a: -1, on: false, shot: false };
  });

  // The postcard on the spread: the frame the visitor was just looking at, taken as the paper
  // starts to come over. (Near-black under it: the canvas is part see-through, see page.css.)
  function shoot(s) {
    app.renderFrame();
    const src = app.renderer.domElement, c = s.canvas;
    const w = 900, hgt = 600, k = Math.max(w / src.width, hgt / src.height);
    c.width = w; c.height = hgt;
    const g = c.getContext('2d');
    g.fillStyle = '#12110e'; g.fillRect(0, 0, w, hgt);
    g.drawImage(src, (w - src.width * k) / 2, (hgt - src.height * k) / 2, src.width * k, src.height * k);
  }

  const api = {
    cover: 0,
    tick(dt, st) {
      let cover = 0;
      for (const s of list) {
        const y0 = s.h.y, y1 = s.h.y + s.h.len;
        const a = st.quiet ? 0 : smooth(y0 - FADE, y0, cam.y) * (1 - smooth(y1, y1 + FADE, cam.y));
        if (a > 0.001 && !s.shot) { s.shot = true; shoot(s); }
        if (a <= 0.001) s.shot = false;
        if (a !== s.a) {
          s.a = a;
          s.node.style.opacity = a.toFixed(3);
          s.node.style.visibility = a > 0.002 ? 'visible' : 'hidden';
        }
        const on = a > 0.88;
        if (on !== s.on) { s.on = on; s.node.classList.toggle('is-on', on); }
        cover = Math.max(cover, a);
      }
      api.cover = cover;
    },
  };
  return api;
}
