// The card's fall onto the sand, when the page opens (v35 round 15). Sam: "the card is like
// falling down on the sand, with real physics movement, and when it hits the sand the text
// animation can appear."
//
// It is worked out, not drawn: a stiff sheet let go above the sand, stepped 240 times a second.
//
//   in the air   gravity against the air's drag, so it is soon falling at a steady speed. It
//                is let go tilted, and the air rights it like a keel, harder the faster it
//                falls, so it swings through level and a little past: the flutter. It slides
//                towards whichever edge is low (a tilted sheet glides), and turns slowly.
//   the slap     a tilted card's low corner meets the sand first. From there the card lies
//                down about that corner, the air under it squeezed out, in a twentieth of a
//                second.
//   on the sand  flat, it comes up a few pixels once (a card on sand hardly bounces), the
//                edges that were high flick the other way and settle, and the sand stops the
//                slide and the turn.
//
// What comes out is where the card is against where it will lie: `z` its height, `x`, `y` its
// place (screen pixels, the eye straight above), `rx`, `ry`, `rz` its tilt and turn (degrees).
// The fall is run through once before it is shown, to see where it ends, and started that far
// the other way: so the card lands exactly where the page has it.

const G = 5200;        // gravity, pixels a second squared
const VT = 1700;       // the steady speed of a flat card, pixels a second
const KEEL = 6.6;      // how hard the air rights it at that speed (radians a second)
const AIR = 0.9;       // and how soon it stops swinging
const GLIDE = 5.5;     // how fast it picks up speed towards its low edge
const LAG = 2.2;       // and the air's drag on that
const BOUNCE = 0.24;   // of its speed, kept as it comes back up off the sand
const STEP = 1 / 240;

function sim({ height, hw, hh }) {
  // (a, b: the tilts about x and y, radians. With CSS's rotations a positive `a` puts the top
  // edge low and a positive `b` the right edge.)
  return { z: height, vz: 0, a: 0.31, va: -0.9, b: -0.23, vb: 1.3, r: 0, vr: 0.62, x: 0, vx: 0, y: 0, vy: 0, t: 0, phase: 'air', zc: 0, ac: 0, bc: 0, hw, hh, since: 0 };
}

function step(s) {
  const h = STEP;
  s.t += h;
  if (s.phase === 'air') {
    const tilt = Math.hypot(s.a, s.b), vt = VT * (1 + 0.4 * tilt), q = Math.min((s.vz / VT) ** 2, 1.4);
    s.vz += -G * (1 - (s.vz / vt) ** 2) * h;
    s.va += (-(KEEL * KEEL) * q * s.a - AIR * s.va) * h;
    s.vb += (-(KEEL * KEEL) * q * s.b - AIR * s.vb) * h;
    s.vx += (GLIDE * Math.sin(s.b) * -s.vz - LAG * s.vx) * h;
    s.vy += (-GLIDE * Math.sin(s.a) * -s.vz - LAG * s.vy) * h;
    s.vr -= 1.2 * s.vr * h;
    s.z += s.vz * h; s.a += s.va * h; s.b += s.vb * h; s.x += s.vx * h; s.y += s.vy * h; s.r += s.vr * h;
    // The low corner is on the sand?
    const low = s.hw * Math.abs(Math.sin(s.b)) + s.hh * Math.abs(Math.sin(s.a));
    if (s.z <= low) { s.phase = 'slap'; s.zc = Math.max(s.z, 1); s.ac = s.a; s.bc = s.b; s.touched = true; }
  } else if (s.phase === 'slap') {
    // Lying down about the corner that touched: the tilt goes as the height of its middle.
    s.vz += (-G - 9 * s.vz) * h;                      // (the air squeezed out from under it)
    s.z += s.vz * h;
    const f = Math.max(s.z, 0) / s.zc;
    s.a = s.ac * f; s.b = s.bc * f;
    const drag = Math.exp(-16 * h);
    s.vx *= drag; s.vy *= drag; s.vr *= drag;
    s.x += s.vx * h; s.y += s.vy * h; s.r += s.vr * h;
    if (s.z <= 0) {
      // Flat. What it was turning with goes on for a moment: the far edges flick up.
      const turn = -s.vz / s.zc;
      s.z = 0; s.va = -s.ac * turn * 0.55; s.vb = -s.bc * turn * 0.55; s.a = s.b = 0;
      s.vz = -s.vz * BOUNCE;
      s.phase = 'sand'; s.landed = true; s.since = 0;
    }
  } else {
    s.since += h;
    s.vz -= G * h; s.z += s.vz * h;
    if (s.z <= 0) { s.z = 0; s.vz = -s.vz * BOUNCE; if (s.vz < 45) s.vz = 0; }
    // The edges: a stiff, well-damped spring back to flat.
    s.va += (-(30 * 30) * s.a - 2 * 0.3 * 30 * s.va) * h; s.vb += (-(30 * 30) * s.b - 2 * 0.3 * 30 * s.vb) * h;
    s.a += s.va * h; s.b += s.vb * h;
    const drag = Math.exp(-22 * h);
    s.vx *= drag; s.vy *= drag; s.vr *= drag;
    s.x += s.vx * h; s.y += s.vy * h; s.r += s.vr * h;
    if (s.since > 0.7) s.done = true;
  }
}

// height: how far above the sand it is let go. width, height of the card on the screen, pixels.
export function createDrop({ from = 760, width = 700, height = 560 } = {}) {
  const make = () => sim({ height: from, hw: width / 2, hh: height / 2 });
  // Once through, to see where it ends.
  const trial = make();
  for (let i = 0; i < 240 * 4 && !trial.done; i++) step(trial);
  const s = make();
  let owed = 0;
  const DEG = 180 / Math.PI;
  return {
    // Advance dt seconds. Returns where the card is, and `touched`, `landed` once each (the
    // corner meeting the sand, the card flat on it), `done` when it has come to rest.
    step(dt) {
      owed += Math.min(dt, 0.05);
      let touched = false, landed = false;
      while (owed >= STEP && !s.done) {
        owed -= STEP;
        step(s);
        if (s.touched) { touched = true; s.touched = false; }
        if (s.landed) { landed = true; s.landed = false; }
      }
      if (s.done) return { z: 0, x: 0, y: 0, rx: 0, ry: 0, rz: 0, a: 1, touched, landed, done: true };
      return { z: s.z, x: s.x - trial.x, y: s.y - trial.y, rx: s.a * DEG, ry: s.b * DEG, rz: (s.r - trial.r) * DEG, a: Math.min(1, s.t / 0.09), touched, landed, done: false };
    },
    // (For the notes and the checks: how long the fall takes, and how far it drifts.)
    get facts() { return { seconds: +trial.t.toFixed(2), drift: [Math.round(trial.x), Math.round(trial.y)], turn: +(trial.r * DEG).toFixed(1) }; },
  };
}
