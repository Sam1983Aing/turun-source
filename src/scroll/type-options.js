// Options for the page's lettering (demo, 6 October 2026): three pairs of a brush hand for
// the lines and a typewriter face for the small type, after the hero mock-ups Sam made
// (output/hero-concepts-2026-10-06/). Behind a URL switch; without it none of this runs and the
// page keeps its serif and sans.
//
//   ?type=water       Water Brush + Courier Prime     the nearest to the mock-up: a loaded brush
//   ?type=caramel     Caramel + Courier Prime         smoother and easier to read
//   ?type=comforter   Comforter Brush + Special Elite upright, rough, a worn typewriter
//
// The fonts come from Google Fonts while this is a demo (all under the SIL Open Font License,
// Special Elite under Apache 2.0). The one Sam picks has to be added to vendor/fonts/ for the
// single file, which is a download to ask him about.

const PAIRS = {
  water: 'family=Water+Brush&family=Courier+Prime:wght@400;700',
  caramel: 'family=Caramel&family=Courier+Prime:wght@400;700',
  comforter: 'family=Comforter+Brush&family=Special+Elite',
};

// Returns how far (percent of their own height) the lines have to be moved to be out of their
// masks: a brush hand reaches well outside its line, so the masks are larger (type-options.css).
export function applyType(kind) {
  if (!PAIRS[kind]) return null;
  const add = (href) => { const l = document.createElement('link'); l.rel = 'stylesheet'; l.href = href; document.head.append(l); };
  add(`https://fonts.googleapis.com/css2?${PAIRS[kind]}&display=block`);
  add(new URL('./type-options.css', import.meta.url).href);
  document.documentElement.classList.add('type', `type-${kind}`);
  return { lineOff: 235 };
}
