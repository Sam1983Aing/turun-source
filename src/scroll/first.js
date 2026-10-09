// The first frame (v35 round 20).
//
// A plain script, not a module, and the page waits for it: it runs before anything is painted.
// Sam, on reloading the page: "it feels like I have the white sand, and then the sand with some
// shadow ... it goes super fast but I notice it ... find a way that it feels like one motion
// from the first load until the end." The sand was there from the first paint (the stylesheet
// has it), but the palms' shadows were made by the page's modules, which arrive half a second
// later: they faded in over bare sand, and the sand itself moved over a little as the script
// laid it properly (the stylesheet could only guess where: 63 px out on a 2000 px screen).
//
// So the two things that have to be right in the first frame are worked out here, by the same
// code the page goes on using (postcard.js and palm.js take these from globalThis.__first, they
// have no copies of their own):
//
//   where the sand lies    the whole layout for this screen (layoutFor), and from it the sand's
//                          place as the page will have it while it loads
//   the palms' shadows     drawn once, as they stand before any wind, into the canvases that
//                          are already in the page. palm.js takes those same canvases over.
//
// What comes after is motion, not arrival: the leaves swing in, a gust passes, the name fills,
// the card falls.
(() => {
  const DEG = Math.PI / 180;

  // ---------------------------------------------------------------- where things lie

// The card's shape and where it rests, as shares of the screen. x, y: the middle of the paper.
// w, h: the most of the screen its picture may take. rz: its turn on the sand, in degrees.
const POSES = {
  wide: {
    shape: 1.5,
    hero: { x: 0.705, y: 0.5, w: 0.4, h: 0.52, rz: -6 },
    walk: { x: 0.71, y: 0.5, w: 0.39, h: 0.5, rz: 3.5 },      // the first spread: card right, words left
    beach: { x: 0.29, y: 0.5, w: 0.39, h: 0.5, rz: 5 },       // the second: card left, words right
    end: { x: 0.57, y: 0.492, rz: -4 },                       // the ending: right of the tide's edge
  },
  tall: {
    shape: 0.66,
    hero: { x: 0.52, y: 0.672, w: 0.56, h: 0.5, rz: -4.5 },
    walk: { x: 0.5, y: 0.74, w: 0.6, h: 0.3, rz: 3.5 },       // card low, words above
    beach: { x: 0.5, y: 0.275, w: 0.6, h: 0.29, rz: -3.5 },   // card high, words below
    end: { x: 0.5, y: 0.46, rz: -1.5 },
  },
};
// The white border as a share of the picture's width: sides and top, and the wider foot that
// carries the caption.
const BORDER = 0.042, FOOT = 0.108;
// The sand is laid a little larger than the screen at rest: on the way up the card's world
// turns and slides against it, and an edge of the photograph must never come into view. How
// much larger is worked out for each pose and screen (sandOver), plus this much to spare.
const SAND_SPARE = 1.015;
// While the page loads the card's world is this much larger than at rest (it settles as the
// page opens: postcard.js, `settle`).
const OPEN = 0.07;

// How much larger than the screen the sand has to be at rest in a pose for it to cover the
// screen all the way up: every corner of the screen, at every step of the world's move
// (as apply() makes it), taken back into the sand's own frame.
function sandOver(P, vw, vh) {
  let k = 1;
  for (let i = 0; i <= 80; i++) {
    const e = i / 80, m = Math.pow(1 - e, 1.6), se = Math.exp((1 - e) * Math.log(P.s));
    const a = ((P.rz - P.rz * m) * Math.PI) / 180, cos = Math.cos(a), sin = Math.sin(a), f = P.s / se;
    for (const [qx, qy] of [[-1, -1], [1, -1], [-1, 1], [1, 1]]) {
      const x = (qx * vw) / 2 - P.tx * m, y = (qy * vh) / 2 - P.ty * m;
      const wx = f * (cos * x - sin * y), wy = f * (sin * x + cos * y);
      k = Math.max(k, Math.abs(wx) / (vw / 2 - Math.sign(wx) * P.tx), Math.abs(wy) / (vh / 2 - Math.sign(wy) * P.ty));
    }
  }
  return k;
}


// Everything's size and place for a screen vw by vh. P: for each pose, where the card rests
// and the world's move there. sand: the sand's own transform in each (the inverse of the
// world's at rest, a little larger). over: how much larger. box: the paper's edges on the screen.
function layoutFor(vw, vh) {
  const tall = vw / vh < 0.85, over = {};
  const R = tall ? POSES.tall : POSES.wide;
  // The picture: the middle of the frame, cut to a postcard's shape.
  const shape = tall ? R.shape : Math.min(vw / vh, R.shape);
  const cw = Math.min(vw, vh * shape), ch = cw / shape;
  const b = cw * BORDER, bb = cw * FOOT;
  const pw = cw + 2 * b, ph = ch + b + bb;
  const P = {}, sand = {}, box = {};
  for (const name of ['hero', 'walk', 'beach', 'end']) {
    const p = R[name];
    // At the end the card is as big as the screen lets it be: its back has to be read.
    const s = name === 'end' ? (tall ? Math.min((0.92 * vw) / pw, (0.74 * vh) / ph) : Math.min(Math.min(0.66 * vw, 1040) / pw, (0.7 * vh) / ph))
      : Math.min((p.w * vw) / cw, (p.h * vh) / ch);
    const r = (p.rz * Math.PI) / 180, off = ((bb - b) / 2) * s;
    // The world's move at rest: the picture's middle sits `off` above the paper's.
    const tx = p.x * vw + Math.sin(r) * off - vw / 2, ty = p.y * vh - Math.cos(r) * off - vh / 2;
    P[name] = { x: p.x, y: p.y, rz: p.rz, s, tx, ty };
    // The sand for this pose: the inverse of the world's transform at rest, a little larger.
    const lay = sandOver(P[name], vw, vh) * SAND_SPARE;
    over[name] = lay;
    sand[name] = `scale(${(lay / s).toFixed(5)}) rotate(${(-p.rz).toFixed(3)}deg) translate(${(-tx).toFixed(2)}px, ${(-ty).toFixed(2)}px)`;
    // The paper's edges on the screen at rest (it is turned), for the words beside it.
    const hw = (pw * s * Math.abs(Math.cos(r)) + ph * s * Math.abs(Math.sin(r))) / 2, hh = (pw * s * Math.abs(Math.sin(r)) + ph * s * Math.abs(Math.cos(r))) / 2;
    box[name] = { left: p.x * vw - hw, right: p.x * vw + hw, top: p.y * vh - hh, bottom: p.y * vh + hh };
  }
  return { vw, vh, tall, cw, ch, b, bb, pw, ph, P, sand, box, over };
}

  // ---------------------------------------------------------------- the palms' shadows

// What a palm's shadow does to the sand under it, as a multiply. Measured in the photograph
// the page had before, the darkest of the baked shadows came to 0.43, 0.45, 0.41 of the sunlit
// sand: nearly neutral, a touch green. The live ones keep that colour and are fainter. (The
// near one was at 0.57 first, and Sam found it hid the card: "a little bit too strong".)
const SHADE = { far: 'rgb(192, 193, 184)', near: 'rgb(178, 179, 169)' };
// The cast shadows are soft because they are small: drawn at a quarter (far) and two fifths
// (near) of the size and stretched, with a little blur as they are copied in. (A CSS blur on
// full-size layers, tried first, cost a fifth of a second a frame once the dive began to
// scale them up.)
const SOFT = { far: [0.25, 1.5], near: [0.4, 1.2] };
// A frond's shadow: a midrib that curls, and a leaflet each side at every step along it,
// longest a third of the way out, each fluttering to its own beat. f: where it starts (shares
// of the canvas), its heading in degrees, its length and its leaflets' as shares of the
// canvas's width, how it curls (radians at the tip), how many pairs, how it gives to the wind.
function frond(g, W, H, f, t, wind) {
  const len = f.len * W, n = f.n ?? 30;
  const give = (Math.sin(t * 0.8 + f.ph) * 0.6 + Math.sin(t * 1.7 + f.ph * 2.3) * 0.4) * 0.11 * wind * (f.flex ?? 1);
  const rib = [];
  let x = f.x * W, y = f.y * H;
  for (let i = 0; i <= n; i++) {
    const s = i / n, a = f.a * DEG + (f.curl ?? 0) * s * s + give * Math.pow(s, 1.4);
    rib.push([x, y, a, s]);
    x += (Math.cos(a) * len) / n; y += (Math.sin(a) * len) / n;
  }
  g.lineCap = 'round';
  g.lineWidth = Math.max(1, len * 0.007);
  g.beginPath();
  rib.forEach(([px, py], i) => (i ? g.lineTo(px, py) : g.moveTo(px, py)));
  g.stroke();
  for (let i = 2; i <= n; i++) {
    const [px, py, a, s] = rib[i];
    const ll = f.leaf * W * (0.3 + 0.7 * Math.sin(Math.PI * Math.pow(s, 0.75))) * (1 - 0.2 * s), open = (62 - 30 * s) * DEG;
    for (const side of [-1, 1]) {
      const beat = Math.sin(t * (2.1 + 0.37 * ((i * 7 + (side > 0 ? 3 : 0)) % 5)) + i * 0.9 + f.ph) * 0.085 + Math.sin(t * 0.8 + f.ph + s * 2) * 0.05;
      const da = a + side * open + beat * wind * (f.flex ?? 1);
      const tx = px + Math.cos(da) * ll, ty = py + Math.sin(da) * ll, mx = px + Math.cos(da) * ll * 0.38, my = py + Math.sin(da) * ll * 0.38;
      const nx = -Math.sin(da) * ll * 0.075, ny = Math.cos(da) * ll * 0.075;
      g.beginPath();
      g.moveTo(px, py);
      g.quadraticCurveTo(mx + nx, my + ny, tx, ty);
      g.quadraticCurveTo(mx - nx, my - ny, px, py);
      g.fill();
    }
  }
}

// The palms over the sand, in the sand's own space (shares of its canvas, of which the screen
// shows all but the outer few per cent). They are shadows only: the palms themselves are out
// of the picture.
const PALMS = {
  wide: {
    far: [
      { x: -0.06, y: -0.06, a: 9, len: 0.62, leaf: 0.17, curl: 0.22, ph: 0.4, n: 36 },
      { x: 1.2, y: 0.12, a: 163, len: 0.47, leaf: 0.17, curl: -0.3, ph: 3.3, n: 30 },
    ],
    near: [{ x: 1.14, y: 1.16, a: 219, len: 0.48, leaf: 0.16, curl: 0.28, ph: 5.0, n: 30 }],
  },
  tall: {
    far: [
      { x: -0.35, y: 0.0, a: 22, len: 1.25, leaf: 0.36, curl: 0.3, ph: 0.4, n: 30 },
      { x: 1.5, y: 0.52, a: 168, len: 0.95, leaf: 0.34, curl: -0.3, ph: 3.3, n: 28 },
    ],
    near: [{ x: 1.45, y: 1.08, a: 212, len: 1.1, leaf: 0.34, curl: 0.28, ph: 5.0, n: 28 }],
  },
};
// Keyframes for a motion that loops without a seam: `at(u)` gives the transform at u (0 to 1
// round the loop), sampled closely enough to go straight from one to the next.
const frames = (n, at) => Array.from({ length: n + 1 }, (_, i) => ({ transform: at(i / n) }));
const TAU = Math.PI * 2;
// A whole shadow, drifting a little: the palm that casts it is swaying.
const driftFrames = (ph, k = 1) => frames(48, (u) =>
  `translate(${((Math.sin(TAU * 2 * u + ph) * 0.24 + Math.sin(TAU * 5 * u + ph * 2) * 0.1) * k).toFixed(3)}%, ${(Math.sin(TAU * 3 * u + ph + 1) * 0.2 * k).toFixed(3)}%) rotate(${(Math.sin(TAU * 3 * u + ph) * 0.28 * k).toFixed(3)}deg)`);

// How each of the two shadows drifts (driftFrames' phase and size).
const DRIFT = { far: [0.4, 1], near: [2.2, 1.3] };
// The wind before the page has begun (palm.js: its breeze at no time, with no gust).
const WIND0 = 0.7 * (0.55 + 0.2 * Math.sin(1.7));

  globalThis.__first = { DEG, TAU, frames, POSES, OPEN, layoutFor, SHADE, SOFT, PALMS, DRIFT, WIND0, frond, driftFrames, sand0: null };

  // ---------------------------------------------------------------- the first frame

  const table = document.querySelector('.table'), ground = document.querySelector('.ground');
  if (!document.documentElement.classList.contains('scroll') || !table || !ground) return;
  const vw = table.clientWidth, vh = table.clientHeight;
  if (!vw || !vh) return;
  // The sand, where the page has it while it loads: the world's move at rest there and the
  // sand's own undo each other but for their sizes, about where the card lies.
  const L = layoutFor(vw, vh), k = (1 + OPEN) * L.over.hero;
  const lie = `translate(${((1 - k) * L.P.hero.tx).toFixed(2)}px, ${((1 - k) * L.P.hero.ty).toFixed(2)}px) scale(${k.toFixed(5)})`;
  globalThis.__first.sand0 = lie;
  ground.style.transform = lie;
  for (const wrap of document.querySelectorAll('.fx-first')) {
    const kind = wrap.dataset.shade, cv = wrap.querySelector('canvas'), buf = document.createElement('canvas');
    wrap.style.transform = lie;
    cv.width = buf.width = Math.round(vw * SOFT[kind][0]);
    cv.height = buf.height = Math.round(vh * SOFT[kind][0]);
    const x = buf.getContext('2d'), out = cv.getContext('2d');
    x.fillStyle = x.strokeStyle = SHADE[kind];
    for (const f of (L.tall ? PALMS.tall : PALMS.wide)[kind]) frond(x, buf.width, buf.height, f, 0, WIND0);
    out.filter = `blur(${SOFT[kind][1]}px)`;
    out.drawImage(buf, 0, 0);
    // (And where its drift begins, so that nothing moves when the drift is started.)
    cv.style.transform = driftFrames(...DRIFT[kind])[0].transform;
  }
})();
