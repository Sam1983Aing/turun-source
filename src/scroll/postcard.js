// The postcard (v35): the page opens on sand in the shade of a palm, with a postcard lying on
// it. Twice on the way down the frame goes back to being that card, and the page ends on its back.
//
// The picture on the card is not a picture. It is the live canvas (#stage), the size of the
// screen as always, sitting inside a "world" that is scaled down, turned and moved so the
// canvas lands where the card's picture should be, and clipped to a postcard's shape. Paper,
// shadow and print finish are plain elements in the same world. Bringing the card up is then
// one transform going back to nothing: at the end of the dive the world has no transform, the
// clip is gone, and the page is exactly what it was before v35, a full-screen canvas. Nothing
// is cross-faded, so there is no seam. Putting it down again is the same thing backwards.
//
// The card has several places to rest (POSES): the hero, one for each spread, the ending. The
// caller (scroll.js) says which, and how far up the card is from it (`up`: 0 at rest, 1 the
// picture is the screen). It changes pose only while the picture is the screen.
//
// The sand is in the world too, so it grows and turns with the card, as it would for a camera
// coming down onto a table. It is a photograph composed for the screen (a palm's tip in one
// corner, a shell in another), so it is laid in the world undoing the world's own resting
// transform: at rest, in every pose, it fills the screen exactly as it was made.
//
// What sells "flat" at rest is done by the caller: the camera is stopped and so is the sea's
// clock. Everything here is DOM and CSS. The scene is not touched.

const clamp01 = (x) => Math.min(Math.max(x, 0), 1);
const smooth = (a, b, x) => { const t = clamp01((x - a) / (b - a)); return t * t * (3 - 2 * t); };
const lerp = (a, b, t) => a + (b - a) * t;
const ease = (t) => (t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2);

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
// How far the eye is from the card for the tilt and the flip, in screen pixels.
const EYE = 1900;
// Turning over at the end: the card is picked up as it turns, this share of its own width at
// the highest (edge-on), tips this many degrees towards the eye and twists this many in its
// own plane on the way, as a hand would do it and a hinge would not. Its two faces darken by
// up to SHADE as they turn from the light.
const LIFT = 0.16, TIP = -5, TWIST = 2.2, SHADE = 0.36;
// The sand is laid a little larger than the screen at rest: on the way up the card's world
// turns and slides against it, and an edge of the photograph must never come into view. How
// much larger is worked out for each pose and screen (sandOver), plus this much to spare.
const SAND_SPARE = 1.015;

// captions: what is printed under the picture in each pose, { pose: [left, right] } (the hero's
// is in the page's markup and stands for any pose not named). onPose(pose): called when the
// card takes a new pose, behind the full-screen picture (the caller lays the right sand).
export function createPostcard({ reduced = false, captions = {}, onPose = null } = {}) {
  const $ = (s) => document.querySelector(s);
  const html = document.documentElement;
  const table = $('.table'), world = $('.world'), ground = $('.ground'), card = $('.card'), flipEl = $('.card__flip');
  const finish = $('.card__finish'), light = $('.table__light'), stage = $('#stage'), back = $('.back');
  const paper = $('.card__paper'), shadow = $('.card__shadow'), shade = $('.card__shade'), caption = $('.card__caption');
  const captionEls = [...caption.querySelectorAll('span')], captionOwn = captionEls.map((e) => e.textContent);
  // (From here the card is this script's: until now the stylesheet kept it out of sight.)
  card.classList.add('is-set');
  let L = null, last = '', posed = null;
  const tilt = { x: 0, y: 0, tx: 0, ty: 0, nx: 0, tnx: 0, live: 0, gx: 0, gy: 0 };
  // The card off the sand, falling onto it as the page opens (drop.js works it out): its height
  // `z` and its place `x`, `y` against where it will lie (screen pixels), its tilt and turn
  // (degrees), how much of it is there (`a`), `over` while it is still above the palm's leaves
  // and shadows, and `hidden` before it is let go.
  const REST = { z: 0, x: 0, y: 0, rx: 0, ry: 0, rz: 0, a: 1, over: false, hidden: false };
  const fall = { ...REST };
  // The card on water, at the ending (tide.js): pushed and turned a little by a wave under it,
  // and lifted. Screen pixels and degrees, on both its faces and its shadow.
  const AFLOAT = { x: 0, y: 0, rz: 0, z: 0 };
  const afloat = { ...AFLOAT };
  const state = { pose: 'hero', up: 0, flip: 0, settle: 1 };

  function layout() {
    const vw = table.clientWidth, vh = table.clientHeight, tall = vw / vh < 0.85;
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
      const over = sandOver(P[name], vw, vh) * SAND_SPARE;
      sand[name] = `scale(${(over / s).toFixed(5)}) rotate(${(-p.rz).toFixed(3)}deg) translate(${(-tx).toFixed(2)}px, ${(-ty).toFixed(2)}px)`;
      // The paper's edges on the screen at rest (it is turned), for the words beside it.
      const hw = (pw * s * Math.abs(Math.cos(r)) + ph * s * Math.abs(Math.sin(r))) / 2, hh = (pw * s * Math.abs(Math.sin(r)) + ph * s * Math.abs(Math.cos(r))) / 2;
      box[name] = { left: p.x * vw - hw, right: p.x * vw + hw, top: p.y * vh - hh, bottom: p.y * vh + hh };
    }
    L = { vw, vh, tall, cw, ch, b, bb, pw, ph, P, sand, box };
    posed = null;
    card.style.setProperty('--cw', `${cw.toFixed(1)}px`);
    card.style.setProperty('--ch', `${ch.toFixed(1)}px`);
    card.style.setProperty('--b', `${b.toFixed(1)}px`);
    card.style.setProperty('--bb', `${bb.toFixed(1)}px`);
    flipEl.style.transformOrigin = `50% calc(50% + ${((bb - b) / 2).toFixed(1)}px)`;
    back.style.width = `${(pw * P.end.s).toFixed(1)}px`;
    back.style.height = `${(ph * P.end.s).toFixed(1)}px`;
    back.style.left = `${(P.end.x * vw).toFixed(1)}px`;
    back.style.top = `${(P.end.y * vh).toFixed(1)}px`;
    // Where the hero's card is, for the words beside or above it (page.css).
    html.style.setProperty('--card-left', `${box.hero.left.toFixed(0)}px`);
    html.style.setProperty('--card-top', `${box.hero.top.toFixed(0)}px`);
    html.style.setProperty('--card-bottom', `${box.hero.bottom.toFixed(0)}px`);
    last = '';
    apply();
  }

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

  // pose: where the card rests (a name in POSES). up: 0 at rest there, 1 its picture is the
  // screen. flip: 0 to 1, over onto its back (the ending). settle: 0 to 1, the camera easing
  // back to rest as the page opens.
  function set(v) { Object.assign(state, v); apply(); }

  function apply() {
    if (!L) return;
    const { vw, vh, cw, ch, b, bb } = L;
    const P = L.P[state.pose] ?? L.P.hero;
    const raw = clamp01(state.up);
    const e = raw >= 1 ? 1 : raw <= 0 ? 0 : ease(raw);
    const full = e >= 1;
    // The print finish: on at rest, and the first thing to go as the card leaves the sand (it
    // is overlays over the whole canvas: free while nothing is drawn, not while the scene
    // draws every frame under it).
    const f = 1 - smooth(0.02, 0.24, raw);
    const flip = state.flip;
    const key = state.pose + [e, f, flip, state.settle, tilt.x, tilt.y, tilt.nx, fall.z, fall.x, fall.y, fall.rx, fall.ry, fall.rz, fall.a, +fall.over, +fall.hidden, afloat.x, afloat.y, afloat.rz, afloat.z].map((n) => n.toFixed(4)).join();
    if (key === last) return;
    last = key;
    table.classList.toggle('is-full', full);
    // (A new pose is taken while the picture is the whole screen and hides the sand: the sand
    // is laid for it, the caption changed, the light moved to the side the words will be.)
    if (posed !== state.pose) {
      posed = state.pose;
      ground.style.transform = L.sand[posed] ?? L.sand.hero;
      const text = captions[posed] ?? captionOwn;
      captionEls.forEach((el, i) => { el.textContent = text[i] ?? captionOwn[i]; });
      table.classList.toggle('is-end', posed === 'end');
      onPose?.(posed);
      table.classList.toggle('words-right', posed === 'beach' && !L.tall);
    }

    if (full) {
      world.style.transform = 'none';
      stage.style.clipPath = 'none';
      flipEl.style.transform = 'none';
      flipEl.style.visibility = 'visible';
      back.style.visibility = 'hidden';
      // (A jump from the menu comes straight here from rest: the finish must not stay on.)
      finish.style.visibility = light.style.visibility = 'hidden';
      return;
    }
    // Scale goes exponentially (a steady zoom), place and turn settle early.
    const s = Math.exp((1 - e) * Math.log(P.s)) * (1 + 0.07 * (1 - state.settle));
    const m = Math.pow(1 - e, 1.6);
    world.style.transform = `translate3d(${(P.tx * m).toFixed(2)}px, ${(P.ty * m).toFixed(2)}px, 0) rotate(${(P.rz * m).toFixed(3)}deg) scale(${s.toFixed(5)})`;

    // The picture's window opens to the whole frame over the last part of the way up.
    const k = smooth(0.45, 1, e);
    const ww = lerp(cw, vw, k), wh = lerp(ch, vh, k);
    const ix = (vw - ww) / 2, iy = (vh - wh) / 2;
    stage.style.clipPath = `inset(${iy.toFixed(1)}px ${ix.toFixed(1)}px)`;
    // The paper and its shadow follow by scale, about the middle of the picture: no layout
    // and nothing repainted while the scene is drawing at full size underneath.
    const sx = (ww + 2 * b) / (cw + 2 * b), sy = Math.max((wh / 2 + b) / (ch / 2 + b), (wh / 2 + bb) / (ch / 2 + bb));
    paper.style.transform = `scale(${sx.toFixed(5)}, ${sy.toFixed(5)})`;
    caption.style.opacity = (1 - smooth(0.16, 0.46, raw)).toFixed(3);

    finish.style.opacity = f.toFixed(3);
    finish.style.visibility = f > 0.003 ? 'visible' : 'hidden';
    light.style.opacity = f.toFixed(3);
    light.style.visibility = f > 0.003 ? 'visible' : 'hidden';
    // (The band of gloss moves with the lean, and sweeps right across as the card turns over.)
    card.style.setProperty('--sheen', `${(34 + tilt.nx * 30 + 70 * Math.sin(Math.PI * Math.min(state.flip, 0.5)) + fall.ry * 3.2).toFixed(1)}%`);
    // (No fading of the picture's colour: the first iteration desaturated it to look printed,
    // and Sam read the whole page as washed out. The paper, the sheen and the stillness say
    // "print"; the colour stays the scene's.)

    // The card itself: leaning a little to the pointer at rest, and turning over at the end.
    // It is picked up to turn (towards the eye, so it grows), tipped and twisted a little on
    // the way, and each face goes darker as it turns edge-on to the light. The front and the
    // back are two elements given the same motion, half a turn apart: one hands over to the
    // other when the card is edge-on and neither can be seen.
    const up = Math.sin(Math.PI * flip), turned = flip > 0.5;
    // Screen pixels off the sand: picked up to turn over, or falling onto it.
    const high = LIFT * (cw + 2 * b) * s * up + fall.z + afloat.z;
    // (Falling: where it is over the sand, and, as the eye is over the middle of the screen
    // and not over the card, how much further out from the middle it is seen for its height.
    // Both in the world's own turned and scaled space.)
    const inWorld = (px, py) => { const r = (P.rz * m * Math.PI) / 180; return [(px * Math.cos(r) + py * Math.sin(r)) / s, (-px * Math.sin(r) + py * Math.cos(r)) / s]; };
    const near = EYE / Math.max(EYE - fall.z, EYE * 0.2) - 1;
    const px = fall.x + afloat.x, py = fall.y + afloat.y, turn = fall.rz + afloat.rz;
    const [ox, oy] = inWorld(px + (P.x - 0.5) * vw * near, py + (P.y - 0.5) * vh * near), [gx, gy] = inWorld(px, py);
    const moved = fall.z || px || py || fall.rx || fall.ry || turn || afloat.z;
    const hand = `rotateZ(${(TWIST * up + turn).toFixed(3)}deg) rotateX(${(tilt.x + TIP * up + fall.rx).toFixed(3)}deg)`;
    flipEl.style.visibility = turned ? 'hidden' : 'visible';
    flipEl.style.transform = (flip > 0 || tilt.x || tilt.y || moved)
      ? `${moved ? `translate(${ox.toFixed(2)}px, ${oy.toFixed(2)}px) ` : ''}perspective(${(EYE / s).toFixed(0)}px) translateZ(${(high / s).toFixed(1)}px) ${hand} rotateY(${(tilt.y + 180 * flip + fall.ry).toFixed(3)}deg)`
      : 'none';
    // (Hidden by its opacity: its parts set their own visibility, which a hidden parent would not override.)
    card.style.opacity = fall.hidden ? '0' : '';
    card.style.zIndex = fall.over ? '2' : '';
    flipEl.style.opacity = fall.a < 1 ? fall.a.toFixed(3) : '';
    back.style.visibility = turned ? 'visible' : 'hidden';
    if (turned) back.style.transform = `translate(-50%, -50%) translate(${afloat.x.toFixed(2)}px, ${afloat.y.toFixed(2)}px) rotate(${L.P.end.rz}deg) perspective(${EYE}px) translateZ(${high.toFixed(1)}px) ${hand} rotateY(${(180 * flip - 180).toFixed(3)}deg)`;
    const dark = (SHADE * Math.pow(up, 1.3)).toFixed(3);
    shade.style.opacity = turned ? '0' : dark;
    back.style.setProperty('--shade', turned ? dark : '0');
    // The shadow stays on the sand through the whole turn, under both faces: it narrows with
    // the card, slides away from the low sun as the card comes up, and thins out. Under a
    // falling card it is where the card is over the sand, turned and foreshortened with it,
    // further off and fainter and softer the higher the card is, and closes in as it lands.
    const away = (high / s) * 0.62, lean = Math.cos((fall.ry * Math.PI) / 180), nod = Math.cos((fall.rx * Math.PI) / 180);
    shadow.style.transform = `translate(${(gx + away).toFixed(2)}px, ${(gy + away * 0.42).toFixed(2)}px) rotate(${turn.toFixed(3)}deg) scale(${(sx * lean * Math.max(Math.abs(Math.cos(Math.PI * flip)), 0.07)).toFixed(5)}, ${(sy * nod).toFixed(5)})`;
    shadow.style.opacity = ((1 - 0.45 * up) * fall.a / (1 + fall.z / 520)).toFixed(3);
    // (And goes soft: a thing held off the ground has no sharp shadow. Only while it turns or
    // falls, when nothing else on the page is being drawn.)
    shadow.style.filter = high > 1 ? `blur(${(Math.min(high * 0.06, 26) / s).toFixed(1)}px)` : 'none';
  }

  // The lean toward the pointer: a card on sand is never quite flat. Only near rest, and not
  // at the ending (where it turns over).
  if (!reduced && matchMedia('(hover: hover) and (pointer: fine)').matches) {
    addEventListener('pointermove', (ev) => {
      if (!L || ev.pointerType !== 'mouse') return;
      const nx = clamp01(ev.clientX / L.vw) * 2 - 1, ny = clamp01(ev.clientY / L.vh) * 2 - 1;
      tilt.tx = -ny * 2.6; tilt.ty = nx * 3.4; tilt.tnx = nx;
    }, { passive: true });
  }
  function tick(dt) {
    const want = state.pose === 'end' ? 0 : 1 - smooth(0, 0.3, clamp01(state.up));
    tilt.live += (want - tilt.live) * (1 - Math.exp(-8 * dt));
    const k = 1 - Math.exp(-5 * dt);
    const x = (tilt.tx + tilt.gx) * tilt.live, y = (tilt.ty + tilt.gy) * tilt.live;
    tilt.x += (x - tilt.x) * k; tilt.y += (y - tilt.y) * k; tilt.nx += (tilt.tnx - tilt.nx) * k;
    if (Math.abs(tilt.x) < 0.002 && Math.abs(x) < 0.002) tilt.x = 0;
    if (Math.abs(tilt.y) < 0.002 && Math.abs(y) < 0.002) tilt.y = 0;
    apply();
  }

  return {
    layout, set, tick, ground, back, state,
    // (A lean laid on top of the pointer's, in degrees: the gust lifting the card's edge.)
    lean(x, y) { tilt.gx = x; tilt.gy = y; },
    // The card off the sand (see `fall` above): drop({ hidden: true }) before it is let go,
    // drop({ z, x, y, rx, ry, rz, a, over }) as it falls, drop(null) at rest.
    drop(v) { Object.assign(fall, REST, v); last = ''; apply(); },
    // The card on water: float({ x, y, rz, z }), float(null) on dry sand.
    float(v) { Object.assign(afloat, AFLOAT, v); },
    // The card's paper on the screen, as it lies.
    get rect() { return paper.getBoundingClientRect(); },
    get L() { return L; },
    // The resting card's edges on the screen in a pose: { left, right, top, bottom } in pixels.
    box: (pose) => L?.box[pose] ?? null,
    // Is the card on its back (so the picture cannot be seen, and no frame has to be drawn)?
    get turned() { return state.flip > 0.5; },
  };
}
