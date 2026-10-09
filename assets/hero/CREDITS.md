# Hero credits

- `sand-clean.jpg`: the sand the landing page's postcard lies on (fine pale sand in broad soft
  undulations, no shadows, nothing on it). Made by Sam Aing on 8 October 2026 as
  `sand-ripples-05-wide-undulations.png`, the fifth of five plates he generated without shadows
  so that the page could cast them itself (`../images/sand/`). Brought to the brightness and
  warmth of the sand it replaced, and converted to JPEG, by `node tools/prepare-palm-sand.mjs`
  (each channel multiplied by 1.085, 1.065, 1.04, nothing else).

- `palm-leaf.png`: the palm leaf that hangs into the hero's two top corners, with a clear
  background. Made by Sam Aing on 8 October 2026 (`../images/sand/palm-leaf.png`, a frond's tip
  on white, from the prompt in `../images/prompts/palm-leaf-prompt.txt`). The same tool takes
  the white away (nothing else is changed). The page turns it on its stem and casts its shadow.

  **Same question as below before these ship publicly:** which product's image generator, and
  its terms.

- `sand.jpg`: the sand the page had before (fine pale sand, a palm's shadow, a shell), now
  only behind `?sand=photo`. Made by Sam Aing on 6 October 2026 as `beach-sand-variation-03-4k.png`, the third of
  three variations on his first sand image. His notes (`../images/prompts/beach-sand-variation-prompts.txt`)
  say: "Generated with built-in image_gen; exported to 3840 x 2400 with sips."
  Converted to JPEG as is, no resizing (`ffmpeg -i beach-sand-variation-03-4k.png -q:v 3 sand.jpg`).

  The prompt, from the same notes: "Create a variation of the supplied beach-sand background.
  Keep approximately the same composition: green palm frond cropped into top-left corner, a
  single small pale ridged seashell cropped near the lower-right edge, warm light from upper
  left, soft palm-frond shadows across sand and around edges, wide open sand center. CRITICAL
  change: pull back the apparent texture scale substantially. The sand must be fine-grained,
  natural, subtle, and visually calmer, not a macro shot. [...] Variation three: softly
  undulating pale cream fine sand, minimal tiny shell flecks, fresh deep-green palm leaf tips
  entering at upper left, slightly more defined but naturally soft fanlike palm shadows across
  top and right edge. Clear warm midday sunlight from upper left, restrained texture, calm open
  center. Small ivory scallop shell at lower-right edge."

  **Still for Sam to confirm before this ships publicly:** which product's image generator
  that is, and that its terms allow publishing the output in a public repository.

- `sand-end.jpg`: the sand under the card at the end of the page (fine sand in evening light,
  the tide's foam in the top left corner). From Sam Aing's concept picture for the ending,
  `ending-concept-05-tide-line.png` ("THE LAST WAVE", 6 October 2026; his notes in
  `output/ending-concept-prompts.txt`: "Created with built-in image_gen. Exports upscaled to
  3840 x 2400 pixels."). The concept has a postcard painted into it. The page lays its own, so
  `node tools/prepare-ending-sand.mjs` takes the painted one and its shadow out and resurfaces
  that part (47% of the picture) with sand worked out from the rest of the same picture.

  A cleaner plate would be the same picture generated without the card. A prompt for that:
  "Recreate this exact image at the same size (3840 x 2400) with the postcard and its shadow
  removed, leaving only the sand. Keep everything else the same: the foam and the thin strip of
  aqua water in the top left corner, the fine pale damp sand, the low golden afternoon light
  from the upper left. Sharp focus across the whole image. No objects, no text, no people."
  Saved as `assets/hero/sand-end.jpg` it replaces this one as is.

  **Same question as above before this ships publicly:** which product's image generator, and
  its terms.

- `sand-end-tide.png`: not a picture to look at. A map made from `sand-end.jpg` by
  `node tools/prepare-ending-tide.mjs` (how far each point is from the painted water's edge,
  and where its foam is), for the wave at the ending. Nothing in it but what that picture has.

These are the only pictures on the page that the scene did not draw.
