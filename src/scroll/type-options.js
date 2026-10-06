// Options for the page's lettering (demo, 6 October 2026): a brush or pen hand for the lines
// and a typewriter face for the small type, after the hero mock-ups Sam made
// (output/hero-concepts-2026-10-06/). Behind a URL switch, ?type=<name>; without it none of this
// runs and the page keeps its serif and sans.
//
// The fonts come from Google Fonts while this is a demo (all under the SIL Open Font License,
// Special Elite under Apache 2.0). The one Sam picks has to be added to vendor/fonts/ for the
// single file, which is a download to ask him about.
//
// Each hand is set from its own measurements, taken at 100 px (the widths of "Most people" and
// "Most people stop", the font's ascent and descent, the ink's height):
//   bs      its size against the serif's, so the widest line fills the same column (bsTall on a
//           tall screen)
//   bw      the hero line's measure in em, so it breaks after "people" and "the"
//   blh     its line height
//   ul      where the brushed stroke under a word sits, from the baseline
//   cue     the margin note's size, in rem
//   mw      the weight of the typewriter's labels
//   mix     the word that matters is typed, not written (as one of the mock-ups has it)
// The first three were tuned by eye, the rest follow the same sums.

const TYPES = {
  'water': { brush: 'Water Brush', mono: 'Courier Prime', mw: 700, bs: 1.14, bsTall: 1.0, bw: 4.6, blh: 0.86, ul: 0.03, cue: 2.5 },   // a loaded brush with a swash capital
  'caramel': { brush: 'Caramel', mono: 'Courier Prime', mw: 700, bs: 1.5, bsTall: 1.3, bw: 3.5, blh: 0.64, ul: -0.13, cue: 2.7 },   // a smooth brush script
  'comforter': { brush: 'Comforter Brush', mono: 'Special Elite', mw: 400, bs: 1.31, bsTall: 1.1, bw: 4.0, blh: 0.8, ul: 0.02, cue: 2.3 },   // upright and rough
  'dafoe': { brush: 'Mr Dafoe', mono: 'Courier Prime', mw: 700, bs: 1.14, bsTall: 0.98, bw: 4.64, blh: 0.77, ul: -0.045, cue: 2.42 },   // a sign painter's bold brush
  'condiment': { brush: 'Condiment', mono: 'Courier Prime', mw: 700, bs: 1.0, bsTall: 0.88, bw: 4.36, blh: 0.86, ul: 0.16, cue: 2.3 },   // bold brush lettering, the letters joined by hand
  'damion': { brush: 'Damion', mono: 'Courier Prime', mw: 700, bs: 1.07, bsTall: 0.92, bw: 4.91, blh: 0.75, ul: -0.1, cue: 2.34 },   // a heavy, friendly brush script
  'vujahday': { brush: 'Vujahday Script', mono: 'Courier Prime', mw: 700, bs: 1.07, bsTall: 0.92, bw: 4.91, blh: 0.76, ul: -0.04, cue: 2.34 },   // a brush pen, written fast
  'arizonia': { brush: 'Arizonia', mono: 'Courier Prime', mw: 700, bs: 0.99, bsTall: 0.85, bw: 5.25, blh: 0.73, ul: -0.06, cue: 2.26 },   // a smooth sign-writer's script
  'splash': { brush: 'Splash', mono: 'Special Elite', mw: 400, bs: 1.02, bsTall: 0.88, bw: 5.16, blh: 0.88, ul: 0.055, cue: 2.29 },   // a dry brush, rough at the edges
  'zeyada': { brush: 'Zeyada', mono: 'Courier Prime', mw: 700, bs: 1.21, bsTall: 1.04, bw: 4.36, blh: 0.77, ul: 0.11, cue: 2.49 },   // quick handwriting with a pen
  'nothing': { brush: 'Nothing You Could Do', mono: 'Courier Prime', mw: 700, bs: 0.87, bsTall: 0.75, bw: 6.08, blh: 0.79, ul: -0.025, cue: 2.12 },   // a felt pen on a postcard
  'aurore': { brush: 'La Belle Aurore', mono: 'Courier Prime', mw: 700, bs: 0.99, bsTall: 0.85, bw: 5.36, blh: 0.88, ul: 0.14, cue: 2.26 },   // neat joined-up handwriting
  'kaushan': { brush: 'Kaushan Script', mono: 'Courier Prime', mw: 700, bs: 0.99, bsTall: 0.85, bw: 5.33, blh: 0.82, ul: -0.095, cue: 2.25 },   // a bold brush script
  'satisfy': { brush: 'Satisfy', mono: 'Courier Prime', mw: 700, bs: 1.09, bsTall: 0.94, bw: 4.85, blh: 0.82, ul: 0.04, cue: 2.37 },   // a casual brush script
  'vujahday-typed': { brush: 'Vujahday Script', mono: 'Special Elite', mw: 400, bs: 1.07, bsTall: 0.92, bw: 4.91, blh: 0.76, ul: -0.04, cue: 2.34, mix: true },   // brush pen, the key word typed
  'dafoe-typed': { brush: 'Mr Dafoe', mono: 'Special Elite', mw: 400, bs: 1.14, bsTall: 0.98, bw: 4.64, blh: 0.77, ul: -0.045, cue: 2.42, mix: true },   // bold brush, the key word typed
};

// Returns how far (percent of their own height) the lines have to be moved to be out of their
// masks: a hand reaches well outside its line, so the masks are larger (type-options.css).
export function applyType(kind) {
  const t = TYPES[kind];
  if (!t) return null;
  const add = (href) => { const l = document.createElement('link'); l.rel = 'stylesheet'; l.href = href; document.head.append(l); };
  const fam = (f, w = '') => `family=${f.replace(/ /g, '+')}${w}`;
  add(`https://fonts.googleapis.com/css2?${fam(t.brush)}&${fam(t.mono, t.mono === 'Courier Prime' ? ':wght@400;700' : '')}&display=block`);
  add(new URL('./type-options.css', import.meta.url).href);
  const html = document.documentElement;
  html.classList.add('type');
  if (t.mix) html.classList.add('type-mix');
  const vars = { '--brush': `"${t.brush}"`, '--mono': `"${t.mono}"`, '--bs': t.bs, '--bs-tall': t.bsTall, '--bw': `${t.bw}em`, '--blh': t.blh, '--ul': `${t.ul}em`, '--cue': `${t.cue}rem`, '--mw': t.mw };
  for (const [k, v] of Object.entries(vars)) html.style.setProperty(k, String(v));
  return { lineOff: 235 };
}

export const TYPE_NAMES = Object.keys(TYPES);
