# v35: The landing page (the postcard, the offer, the boat)

## Goal

The scene is finished (v34) and stays as it is. The page around it does not feel like a
landing page: Sam scores the words and layout two out of ten. Turn it into a premium travel
page for one trip: a guided walk down to Kelingking Beach at first light, and a boat out at
golden hour. Aim for an eight.

Sam's fixed idea for the top of the page: an overview shot of the real scene sits inside a
postcard, at an angle, with nice shading, on sand, next to a headline. Scrolling goes into
the card, and what looked like a flat picture turns out to be the 3D scene. The picture must
be the scene we built, not a copy of it, and the change has to be seamless.

## Direction (agreed 5 October 2026)

- **Skeleton: the front and the back of a postcard.** The front is the hero. The walk down is
  the middle. At the end the frame goes back to being a card on the sand and turns over: the
  message side holds the day and the price, the address side is the booking.
- **Headline: "Most people stop at the railing."** It was already on the page, buried in the
  second chapter.
- **One change of light.** Noon on the way down, evening once the day on the beach has passed.
  (Changed on 6 October, see below.)
- **The boat is the offer.** Walk down, sail out, no climb back. One jukung at anchor past the
  break. This is invented (boats do not land at Kelingking and swimming is banned), so the
  outfitter is fictional and the page says so at its foot. (Round 10: Sam took that note off
  the page. The form still says nothing was sent, when it is used.)

## Judge against

- The hero reads as a postcard lying on beach sand, and the picture on it reads as a print.
- From the card to the full-screen scene nothing jumps: no cross-fade, no change of framing,
  no change of colour that is not gradual. Check frame by frame (`tools/page-stills.mjs`).
- At rest the picture is still (camera locked, sea stopped). It wakes on the way in.
- The words: not one block in one corner six times. Each note in its own place, big type.
- A visitor can tell what is sold, for how much, and where to ask for it.
- Phone (390 x 844) as well as desktop.
- The scene itself is unchanged apart from the boat. No hero frame more than 10% slower.
- The tools that judge the scene (`?notext`, `?shot=`) behave as before.

## Scope

`index.html`, `src/scroll/` (page, scroll, the new postcard), and one new object in the
scene, `src/boat/`. Not the terrain, the water, the plants, the light or the camera's path
down (`path.js`). No downloads: the boat is built in code, the sand under the card is the
scene's own beach photographed from above, the fonts stay Instrument Serif and Inter (they
are already in `vendor/fonts/` for the standalone file).

## Round 2 and 3 (6 October 2026, from Sam's notes on the first iteration)

- The colours looked washed out against v34. They were: the canvas is part see-through and
  the page behind it had become sand-coloured. Near-black behind it again.
- The boat closer: moored 52 m from the last camera, a longer lens on it.
- The middle: three options were built and recorded (Field Notes, Bookmark, Spreads). Sam
  picked **Spreads**: two held paper spreads that carry the offer.
- "We scroll, we scroll, nothing moves. The movement only happens when it feels full screen."
  The scene has to move inside the postcard from the start, for the depth to read.
- Morning light at the top (the words say first light), and another shot for the card, more
  of an overview.
- A time lapse at the view over the cove from 88 m, ending in evening: Sam loves the light and
  the water there.
- The card's edges did not convince (a dark lip along two sides, speckled paper).

## Round 4 (6 October 2026, later)

- Sam made mock-ups of the hero he wants (`output/hero-concepts-2026-10-06/`, five surfaces)
  and proposed a generated image for the surface, so that only the card, the headline and the
  button are live. Done with his `beach-sand-background-v2.png` (sand, a palm's shadow, a
  shell): `assets/hero/sand.jpg`. This changes the scope above: the sand is no longer the
  scene's own. Its credit and licence are open (`assets/hero/CREDITS.md`).
- The paper spreads' transition "feels average". Sam: take the hero's transition and do it in
  reverse. At each spread the scene goes back to being a postcard on the sand, the words
  beside it (left of the card the first time, right of it the second), on the same sand "for
  now". Then the dive again.
- From his mock-ups: a hand-lettered headline and typewriter small type. Sixteen hands were
  shown in the real hero and Sam picked **Vujahday Script**, with Courier Prime for the small
  type. Both are in the page, and their files are in `vendor/fonts/` (downloaded from Google
  Fonts with his OK), so the single file carries them.
- Still open: which headline (the page keeps "Most people stop at the railing."), a prop or
  two, the sand image's credit.

## Round 7 (6 October 2026, night)

- The sand under the hero and the spreads: Sam's third variation (finer, paler).
- The hand "only near the postcard, not inside the postcard": over the scene the lines are
  back in the serif, with the sans for the small type. Two other clean faces are behind
  `?scene=sans` and `?scene=typed` for him to compare.
- The time lapse moved: it runs while the camera walks from the ridge to the cove, and the
  cove is reached in evening light at 17:40, with a clock in the frame.
- The ending lies on his "05 tide line" concept: the tide's edge, evening sand. The concept's
  painted card is taken out by `tools/prepare-ending-sand.mjs`.
- Open: his sentence about "the tag" was cut off. Which headline. The pictures' credit.

## Round 8 (6 October 2026, late: the hero)

- The hand and its colour stay.
- The card: glossy white stock, no texture, no coloured edge, a slight shadow on the left and
  top as well.
- The metrics at the bottom left: out.
- The typewriter "doesn't feel vacation". The small type is a sans. Four were shown and he
  picked Jost. Its file is in `vendor/fonts/`.
- The dive to the second postcard was "too quick": the card's shot is higher, with the whole
  T-Rex in it, and that leg is slower.
- Postcards two and three are to lie on something other than the hero's sand. Ideas shown as
  mock-ups on his own concepts (limestone, linen). The plates are his to generate.

- Then: "three more shots for the first postcard, I'm not sure yet for this one". Drone,
  Horizon and Cove were built and recorded (`demo/card/`). He picked **Drone**.

## Round 9 (6 October 2026, night: the hero again, and the second card)

- Drone is the card's shot.
- The second postcard later, on the ridge where the two railings run together (his frame),
  "so we can go down the stairs".
- The hero: no eyebrow, "Kelingking Beach" on the card, the name "a little bit more premium",
  "a better button" without the rule in it, the cue "Scroll into the postcard" with an arrow
  on the right, and no sand-textured rim on the card's left and top edges.

## Round 10 (7 October 2026)

- Leaning to the pointer, the hero's card showed "a delimitation of the sand", straight edges
  beside it. And at the end, as the card turns over, "look at the effects underneath it...
  make the rotation feel more realistic".
- "Scroll into the postcard" closer to the postcard.
- The altimeter on the right "a little bit more premium".
- The lines inside the picture in a sans, not the serif.
- The second spread breaks "Then a whole / day of nothing."
- The patch behind the words on the sand "is too dark".
- The boat reads small: "a pole somewhere with a cord that attaches the boat".
- The foot of the page: the concept note and the credits out, "built with three.js" in. The
  map's credit stays, small (the licence, and this project's own rule).

## Round 11 (8 October 2026: the sand, alive)

- "I would like the shadow or the leaf that we see to be a little bit more alive." Three
  options are behind `?sand=shade|palm|gust` (`src/scroll/sand-options.js`), recorded in
  `demo/sand/`. His pick is open. `palm` needs a plate without shadows from him.

## Round 12 (8 October 2026: the live palm)

- Sam liked Live Palm and generated five plates without shadows, "select the one that you
  think fits best". Plate 05 (wide undulations). The live palm is the page's sand now, with
  the old photograph's own leaf cut out and swaying.
- Open: whether the other two options go, and whether Gust's wind at the start of the scroll
  is wanted on top.

## Round 13 (8 October 2026: his notes on the live hero)

- The bottom right shadow lighter. The leaf greener, and a second, longer one top right. A
  little gust with real sand that can cross the postcard. The top bar's Reserve off the hero.
- The loader is real, so it stays: on sand, the name filling like a wave, the bar clear of the g.
- The card glossy, "the whole thing".
- "A nice text headline animation": three options behind `?title=`. His pick is open.

## Round 14 (8 October 2026: his own palm leaf)

- The cut-out leaf had rough edges. Sam generated a leaf of its own (on white) so it could be
  placed freely. It hangs by its stem in both top corners now.
- Still open from round 13: which headline animation.

## Round 15 (8 October 2026: the opening)

- The headline in the loader's sea gradient, and "railing" in a lighter orange to go with it.
- The loader tighter, "clean and more premium, but keep it simple".
- The loader on the hero's own scene (palm, shadows, gust), then "the card is like falling
  down on the sand, with like real physics movement", the headline's animation as it hits,
  and the name and menu appearing "nicely, slowly".
- A water button after ThreeUI's "Water Ripple", less intense. Their component could not be
  read (members only): the page has its own.
- Open: whether the other two handwritten headings take the gradient too. Which headline
  arrival (Written is in). The real ThreeUI component, if he signs the connector in.

## Round 16 (8 October 2026: the water button, properly)

- ThreeUI's "Water Ripple" was looked at running in Sam's own Chrome (their source still was
  not read), and the page's button rebuilt after it: the sea with a net of light in a dark
  rim, no tiles, no glow.

## Round 17 (8 October 2026)

- The sand from the first moment, not a plain colour. A soft shadow under the headline and
  light moving over it, "very subtle". The button's rim less navy. The scroll cue in the
  orange. "We leave at first light" on the left.
- Postcards two and three on surfaces of their own: prompts written (wood, shallow water).
- The ending: a wave in code that comes in behind the card, and the card moving with it.

## Round 18 (8 October 2026)

- A tiny bit more shadow under the headline. "Scroll into the postcard" in the same colour as
  "Most people stop at the" (the orange lacked contrast).
- At least half of the dark behind "We leave at first light" removed.
- The walk spread: the hero's colours and the same headline animation, and a layout that is
  "super clean to read" but "a little bit more premium". Three layouts recorded to choose from.
- Prompt ideas for the surface under postcard two: rocky stairs, rocks, path, wood handrails.
- Open: which layout. Whether the wave's size, pace and the card's movement are right.

## Found by other versions

Nothing yet.
