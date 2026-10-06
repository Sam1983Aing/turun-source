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
  outfitter is fictional and the page says so at its foot.

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
  type. Both are in the page. Their files are not in `vendor/fonts/` yet (a download for him
  to OK), so the single file links them from Google Fonts for now.
- Still open: which headline (the page keeps "Most people stop at the railing."), a prop or
  two, the sand image's credit.

## Found by other versions

Nothing yet.
