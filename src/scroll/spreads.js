// The spreads (v35): twice on the way down the frame goes back to being a postcard on the sand,
// the hero's dive run backwards, and a piece of the offer is set beside it: who goes and how
// far, then the day and what it costs. Scrolling on dives back into the card.
//
// The card and the sand are postcard.js's, and where the scroll does this is scroll.js's
// (SPREADS). This is only the words: they come in as the card lands, on GSAP's clock like
// every other reveal on the page, and go as it lifts. The first is on the left of its card,
// the second on the right (page.css, .sp).

import { gsap } from 'gsap';

const EASE = 'expo.out';
// The words come in once the landing card is this near to rest (0 at rest, 1 full screen), and
// go as soon as it has lifted this far: the card grows over where they are.
const NEAR = 0.1, LIFTED = 0.03;

// off: how far a line has to move to be out of its mask, in percent of its own height.
export function createSpreads({ reduced = false, off = 108, onReserve } = {}) {
  const list = [...document.querySelectorAll('.sp[data-hold]')].map((node) => {
    node.querySelectorAll('a[href="#reserve"]').forEach((a) => a.addEventListener('click', (e) => { e.preventDefault(); onReserve?.(); }));
    const q = (sel) => [...node.querySelectorAll(sel)];
    const s = { id: node.dataset.hold, node, on: false, tl: null, up: 1, rising: false, lines: q('.sp__ln'), rule: q('.sp__rule'), small: q('.sp__label, .sp__rows div, .sp__price') };
    node.inert = true;
    rest(s);
    return s;
  });

  // Before the words come in: the lines under their masks, the rule undrawn.
  function rest(s) {
    gsap.set(s.lines, { yPercent: off });
    gsap.set(s.rule, { scaleX: 0, opacity: 1 });
    gsap.set(s.small, { opacity: 0, y: 12 });
  }
  function show(s) {
    s.tl?.kill();
    rest(s);
    const d = reduced ? 0 : 1.1, t = (s.tl = gsap.timeline());
    t.set(s.node, { visibility: 'visible' });
    t.to(s.lines, { yPercent: 0, duration: d, ease: EASE, stagger: 0.09 }, 0);
    t.to(s.rule, { scaleX: 1, duration: d * 1.3, ease: EASE }, reduced ? 0 : 0.25);
    t.to(s.small, { opacity: 1, y: 0, duration: d * 0.9, ease: EASE, stagger: 0.07 }, reduced ? 0 : 0.3);
  }
  function hide(s) {
    s.tl?.kill();
    const d = reduced ? 0 : 0.4, t = (s.tl = gsap.timeline());
    t.to(s.lines, { yPercent: -off, duration: d, ease: EASE, stagger: 0.04 }, 0);
    t.to([...s.rule, ...s.small], { opacity: 0, duration: d * 0.7, ease: EASE }, 0);
    t.set(s.node, { visibility: 'hidden' });
  }

  return {
    // Where each card rests (postcard.js): its words keep clear of it.
    layout(post) {
      for (const s of list) {
        const b = post.box(s.id);
        if (b) for (const k of ['left', 'right', 'top', 'bottom']) s.node.style.setProperty(`--c-${k}`, `${b[k].toFixed(0)}px`);
      }
    },
    // card: which pose the card is in (scroll.js). up: how far it is from rest there.
    // quiet: nothing may show (a rewind, a jump from the menu).
    update(card, up, quiet) {
      for (const s of list) {
        const mine = card === s.id ? up : 1;
        if (mine > s.up + 1e-6) s.rising = true; else if (mine < s.up - 1e-6) s.rising = false;
        s.up = mine;
        const on = !quiet && mine < (s.rising ? LIFTED : NEAR);
        if (on === s.on) continue;
        s.on = on;
        s.node.classList.toggle('is-on', on);
        s.node.inert = !on;
        on ? show(s) : hide(s);
      }
    },
  };
}

// What each spread's card says under its picture (index.html, data-caption), for postcard.js.
export function spreadCaptions() {
  return Object.fromEntries([...document.querySelectorAll('.sp[data-hold][data-caption]')].map((n) => [n.dataset.hold, [n.dataset.caption, 'Kelingking']]));
}
