// How the hero's headline arrives (8 October 2026: "I would like a nice text headline animation
// on 'Most people stop at the railing'"). Three ways were built for Sam to compare. The page
// uses the first, which starts as the card lands on the sand. The other two are still behind
// the switch until he says they can go, and ?title=lines is the old way (its lines rising out
// of their masks).
//
//   (the page)     01 Written    the line is written: letter after letter in the order a hand
//                                would make them, a breath between words, and the stroke under
//                                "railing" drawn last
//   ?title=ink     02 Ink        each word comes up out of a soft blot, wide and blurred at
//                                first, and dries sharp. Then the stroke.
//   ?title=wind    03 Blown in   the letters come in on the wind from the upper left, turning a
//                                little as they land. Then the stroke.
//
// The stroke under the word is the heading's own (page.css, em::after). It is drawn by opening a
// clip from the left: --u on the em, 0 to 1.

export function titleOption(name, { gsap, SplitText, reduced = false } = {}) {
  if (reduced || !['write', 'ink', 'wind'].includes(name)) return null;
  let h = null, em = null, chars = [], words = [], wordOf = [];
  const HID = 'inset(-45% 110% -65% -25%)', OPEN = 'inset(-45% -35% -65% -25%)';
  function rest() {
    gsap.set(em, { '--u': 0 });
    if (name === 'write') gsap.set(chars, { clipPath: HID });
    else if (name === 'ink') gsap.set(words, { autoAlpha: 0, filter: 'blur(16px)', scale: 1.08, y: 8 });
    else gsap.set(chars, { autoAlpha: 0, x: '-0.9em', y: '-0.5em', rotation: -22 });
  }
  return {
    name,
    split(el) {
      h = el; em = el.querySelector('em');
      const s = SplitText.create(el, { type: 'words,chars', charsClass: 'ch' });
      chars = s.chars; words = s.words;
      wordOf = chars.map((c) => words.findIndex((w) => w.contains(c)));
      // (Where each letter stands in the line, for the light that passes over it: page.css.)
      const place = () => { const r = el.getBoundingClientRect(); for (const c of chars) c.style.setProperty('--x', Math.round(c.getBoundingClientRect().left - r.left)); };
      place();
      addEventListener('resize', place);
      document.fonts?.ready.then(place);
      rest();
    },
    // Onto the timeline `t` at `at` seconds.
    show(t, at = 0) {
      let end = at;
      if (name === 'write') {
        // (A letter takes 0.3 s to appear and the next starts 0.052 s after it, with 0.1 s
        // more at each new word: about a second and a half for the line.)
        const delay = (i) => i * 0.052 + wordOf[i] * 0.1;
        t.to(chars, { clipPath: OPEN, duration: 0.3, ease: 'power1.inOut', stagger: (i) => delay(i) }, at);
        end = at + delay(chars.length - 1) + 0.3;
      } else if (name === 'ink') {
        t.to(words, { autoAlpha: 1, filter: 'blur(0px)', scale: 1, y: 0, duration: 1.0, ease: 'power2.out', stagger: 0.12 }, at);
        end = at + (words.length - 1) * 0.12 + 0.7;
      } else {
        t.to(chars, { autoAlpha: 1, x: 0, y: 0, rotation: 0, duration: 0.9, ease: 'back.out(1.5)', stagger: 0.026 }, at);
        end = at + (chars.length - 1) * 0.026 + 0.6;
      }
      t.to(em, { '--u': 1, duration: 0.6, ease: 'power2.out' }, end);
    },
    hide(t) {
      t.to(h, { opacity: 0, duration: 0.4, ease: 'power1.out' }, 0);
      t.add(rest);
      t.set(h, { opacity: 1 });
    },
  };
}
