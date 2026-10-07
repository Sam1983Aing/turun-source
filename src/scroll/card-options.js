// Other shots for the picture on the hero's card, for Sam to compare in the page (demo,
// 6 October 2026). Without the switch the page is as it is (TAU0 and FIRST_LEG in scroll.js).
//
//   ?card=drone     a drone's three-quarter view: the whole headland and its beach fill the card
//   ?card=horizon   the view everyone photographs, from just above the railing, with the sky in it
//   ?card=cove      a long lens on the beach itself, the place the walk goes to
//
// A shot is a place on the camera's path (`tau`) and, if it is not the path's own view from
// there, what is laid on top of it at rest: metres back along the view and up, degrees of
// pitch, degrees of lens. Those are taken off again over the dive, quickly at first and
// softly at the end, so the camera is on its path when the picture is the screen.
// `leg`: the camera's speed from the card to the first spread, as a share of the scroll's. A
// shot further down the path has less of it left to the first spread, so it goes slower to
// keep that stretch about as long as Sam asked for.

const SHOTS = {
  drone: { tau: 0.75, leg: 0.62 },
  horizon: { tau: 0.85, leg: 0.56, pitch: 4 },
  cove: { tau: 0.6, leg: 0.68, fov: -22 },
};

export function cardShot(name) {
  const o = SHOTS[name];
  if (!o) return null;
  return {
    tau: o.tau,
    leg: o.leg,
    // The path's pose `p` with the shot's own view laid on it, `hero` of the way into the dive.
    pose(p, hero) {
      const w = (1 - hero) * (1 - hero);
      if (w <= 0) return p;
      const yaw = (p.yaw * Math.PI) / 180, back = (o.back ?? 0) * w;
      return { ...p, pos: [p.pos[0] - Math.sin(yaw) * back, p.pos[1] - Math.cos(yaw) * back, p.pos[2] + (o.rise ?? 0) * w], pitch: p.pitch + (o.pitch ?? 0) * w, fov: p.fov + (o.fov ?? 0) * w };
    },
  };
}
