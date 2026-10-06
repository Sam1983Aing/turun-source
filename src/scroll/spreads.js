// The spreads (v35): twice on the way down the scroll holds the camera and the page turns to
// paper for a magazine spread (index.html, .sp). It is where the offer is spelled out: who
// goes, how far, what the day holds, what it costs. The walk itself stays a walk.
//
// A spread fades over the scene just before its hold and off just after it. Its words come in
// once the paper is nearly solid, on GSAP's clock like every other reveal on the page (so the
// frame-by-frame recorder sees them as a visitor does). The postcard lying on it is a snapshot
// of the live canvas, taken as the paper starts to come over, so it shows the view the visitor
// is leaving, in the light of that moment.

import { gsap } from 'gsap';

const clamp01 = (x) => Math.min(Math.max(x, 0), 1);
const smooth = (a, b, x) => { const t = clamp01((x - a) / (b - a)); return t * t * (3 - 2 * t); };

// How many screens the paper takes to come over (and to lift).
const FADE = 0.3;
const EASE = 'expo.out';

// holds: the page's holds ({ id, y, len }, scroll.js). app: the scene.
export function createSpreads({ app, holds, onReserve, reduced = false }) {
  const list = [...document.querySelectorAll('.sp[data-hold]')].map((node) => {
    const h = holds.find((x) => x.id === node.dataset.hold);
    if (!h) return null;
    node.querySelectorAll('a[href="#reserve"]').forEach((a) => a.addEventListener('click', (e) => { e.preventDefault(); onReserve(); }));
    const q = (sel) => [...node.querySelectorAll(sel)];
    const s = { h, node, img: node.querySelector('.sp__card img'), a: -1, on: false, shot: false, set: false, gone: false, tl: null,
      lines: q('.sp__ln'), rule: q('.sp__rule'), small: q('.sp__label, .sp__rows div, .sp__price'), card: q('.sp__card'),
      turn: node.classList.contains('sp--beach') ? -1 : 1 };
    rest(s);
    return s;
  }).filter(Boolean);

  // Before its words come in: the lines under their masks, the rule undrawn, the card off the
  // paper and turned. Only ever set while the spread itself is invisible.
  function rest(s) {
    s.tl?.kill();
    gsap.set(s.lines, { yPercent: 108 });
    gsap.set(s.rule, { scaleX: 0 });
    gsap.set(s.small, { opacity: 0, y: 12 });
    gsap.set(s.card, { opacity: 0, y: 46, rotation: 9 * s.turn, scale: 1.06 });
    s.set = s.gone = false;
  }
  function show(s) {
    s.tl?.kill();
    const d = reduced ? 0 : 1.1, t = (s.tl = gsap.timeline());
    t.to(s.lines, { yPercent: 0, duration: d, ease: EASE, stagger: 0.09 }, 0);
    t.to(s.rule, { scaleX: 1, duration: d * 1.3, ease: EASE }, reduced ? 0 : 0.25);
    t.to(s.small, { opacity: 1, y: 0, duration: d * 0.9, ease: EASE, stagger: 0.07 }, reduced ? 0 : 0.3);
    // The card is dropped onto the page: it lands a little turned.
    t.to(s.card, { opacity: 1, duration: d * 0.5, ease: 'power2.out' }, reduced ? 0 : 0.15);
    t.to(s.card, { y: 0, rotation: 3.8 * s.turn, scale: 1, duration: d * 1.35, ease: EASE }, reduced ? 0 : 0.15);
    s.set = true;
  }
  // Going out, the spread lifts off as one with the scroll and is put back to rest once it is
  // gone. Only the card goes first, and quickly: a dark photograph cross-fading over a bright
  // scene lingers as a ghost rectangle long after the pale paper round it has gone.
  function lift(s, gone) {
    if (!s.set || gone === s.gone) return;
    s.gone = gone;
    gsap.to(s.card, { opacity: gone ? 0 : 1, duration: reduced ? 0 : gone ? 0.22 : 0.4, ease: 'power1.out', overwrite: 'auto' });
  }

  // The snapshot, drawn through a canvas kept off the page and handed to the card as a
  // picture. (Near-black under it: the scene's canvas is part see-through, see page.css.)
  const film = document.createElement('canvas');
  film.width = 900; film.height = 600;
  const g = film.getContext('2d');
  function shoot(s) {
    app.renderFrame();
    const src = app.renderer.domElement, k = Math.max(film.width / src.width, film.height / src.height);
    g.fillStyle = '#12110e'; g.fillRect(0, 0, film.width, film.height);
    g.drawImage(src, (film.width - src.width * k) / 2, (film.height - src.height * k) / 2, src.width * k, src.height * k);
    s.img.src = film.toDataURL('image/jpeg', 0.9);
  }

  const api = {
    // How much of the scene is under paper, 0 to 1.
    cover: 0,
    // y: the page's place in screens. quiet: nothing may show (a rewind, a jump from the menu).
    update(y, quiet) {
      let cover = 0;
      for (const s of list) {
        const y0 = s.h.y, y1 = s.h.y + s.h.len;
        const a = quiet ? 0 : smooth(y0 - FADE, y0, y) * (1 - smooth(y1, y1 + FADE, y));
        if (a > 0.001 && !s.shot) { s.shot = true; shoot(s); }
        if (a <= 0.001) { s.shot = false; if (s.set) rest(s); }
        if (a !== s.a) {
          s.a = a;
          s.node.style.opacity = a.toFixed(3);
          s.node.style.visibility = a > 0.002 ? 'visible' : 'hidden';
        }
        const on = a > 0.88;
        if (on !== s.on) { s.on = on; s.node.classList.toggle('is-on', on); s.node.inert = !on; if (on && !s.set) show(s); }
        lift(s, a < 0.86);
        cover = Math.max(cover, a);
      }
      api.cover = cover;
    },
  };
  for (const s of list) s.node.inert = true;
  return api;
}
