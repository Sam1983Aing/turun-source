// The postcard (v35): the page opens on the beach's sand seen from straight above, with a
// postcard lying on it, and ends on the back of the same card.
//
// The picture on the card is not a picture. It is the live canvas (#stage), the size of the
// screen as always, sitting inside a "world" that is scaled down, turned and moved so the
// canvas lands where the card's picture should be, and clipped to a postcard's shape. Paper,
// shadow and print finish are plain elements in the same world. Bringing the card up is then
// one transform going back to nothing: at the end of the dive the world has no transform, the
// clip is gone, and the page is exactly what it was before v35, a full-screen canvas. Nothing
// is cross-faded, so there is no seam.
//
// The sand is in the world too, so it grows with the card, as it would for a camera coming
// down onto a table. What sells "flat" at rest is done by the caller (scroll.js): the camera
// is locked and the sea's clock is stopped.
//
// Everything here is DOM and CSS. The scene is not touched.

const clamp01 = (x) => Math.min(Math.max(x, 0), 1);
const smooth = (a, b, x) => { const t = clamp01((x - a) / (b - a)); return t * t * (3 - 2 * t); };
const lerp = (a, b, t) => a + (b - a) * t;
const ease = (t) => (t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2);

// The card's shape and where it rests, as shares of the screen. x, y: the middle of the paper.
// w: the picture's width. rz: its turn on the sand, in degrees.
const REST = {
  wide: { shape: 1.5, hero: { x: 0.705, y: 0.5, w: 0.4, h: 0.52, rz: -6 }, end: { x: 0.5, y: 0.492, rz: -2 } },
  tall: { shape: 0.66, hero: { x: 0.52, y: 0.672, w: 0.56, h: 0.5, rz: -4.5 }, end: { x: 0.5, y: 0.46, rz: -1.5 } },
};
// The white border as a share of the picture's width: sides and top, and the wider foot that
// carries the caption.
const BORDER = 0.042, FOOT = 0.108;
// How far the eye is from the card for the tilt and the flip, in screen pixels.
const EYE = 1900;

// A tile of fine noise as a picture: specks of one colour, their alpha `gain` times a random
// number plus `bias` (so most of the tile is clear). Two sizes of speck, so it is not TV static.
function noiseTile(size, rgb, gain, bias, seed) {
  const c = document.createElement('canvas');
  c.width = c.height = size;
  const ctx = c.getContext('2d'), img = ctx.createImageData(size, size), d = img.data;
  let s = seed >>> 0;
  const rnd = () => ((s = (Math.imul(s, 1664525) + 1013904223) >>> 0) / 4294967296);
  const half = size >> 1, coarse = Float32Array.from({ length: half * half }, rnd);
  for (let y = 0, i = 0; y < size; y++) for (let x = 0; x < size; x++, i += 4) {
    const n = 0.62 * rnd() + 0.38 * coarse[(y >> 1) * half + (x >> 1)];
    d[i] = rgb[0]; d[i + 1] = rgb[1]; d[i + 2] = rgb[2];
    d[i + 3] = Math.min(255, Math.max(0, n * gain + bias) * 255);
  }
  ctx.putImageData(img, 0, 0);
  return `url(${c.toDataURL('image/png')})`;
}

export function createPostcard({ reduced = false } = {}) {
  const $ = (s) => document.querySelector(s);
  const html = document.documentElement;
  html.style.setProperty('--tooth', noiseTile(128, [128, 104, 70], 0.3, -0.17, 7));
  html.style.setProperty('--grain', noiseTile(128, [86, 64, 38], 0.9, -0.5, 19));
  const table = $('.table'), world = $('.world'), ground = $('.ground'), card = $('.card'), flipEl = $('.card__flip');
  const finish = $('.card__finish'), light = $('.table__light'), stage = $('#stage'), back = $('.back');
  const paper = $('.card__paper'), shadow = $('.card__shadow'), caption = $('.card__caption');
  let L = null, last = '';
  const tilt = { x: 0, y: 0, tx: 0, ty: 0, nx: 0, tnx: 0, live: 0 };
  const state = { dive: 0, out: 0, flip: 0, settle: 1 };

  function layout() {
    const vw = table.clientWidth, vh = table.clientHeight, tall = vw / vh < 0.85;
    const R = tall ? REST.tall : REST.wide;
    // The picture: the middle of the frame, cut to a postcard's shape.
    const shape = tall ? R.shape : Math.min(vw / vh, R.shape);
    const cw = Math.min(vw, vh * shape), ch = cw / shape;
    const b = cw * BORDER, bb = cw * FOOT;
    const pw = cw + 2 * b, ph = ch + b + bb;
    const A = { ...R.hero, s: Math.min((R.hero.w * vw) / cw, (R.hero.h * vh) / ch) };
    // At the end the card is as big as the screen lets it be: its back has to be read.
    const B = { ...R.end, s: tall ? Math.min((0.92 * vw) / pw, (0.74 * vh) / ph) : Math.min(Math.min(0.66 * vw, 1040) / pw, (0.7 * vh) / ph) };
    // The sand has to reach every corner of the screen from wherever the card rests.
    const reach = (P) => (2 * (Math.max(P.x, 1 - P.x, P.y, 1 - P.y) + 0.16)) / P.s;
    const G = Math.max(reach(A), reach(B));
    L = { vw, vh, tall, cw, ch, b, bb, pw, ph, A, B, G };
    ground.style.transform = `scale(${G.toFixed(3)})`;
    card.style.setProperty('--cw', `${cw.toFixed(1)}px`);
    card.style.setProperty('--ch', `${ch.toFixed(1)}px`);
    card.style.setProperty('--b', `${b.toFixed(1)}px`);
    card.style.setProperty('--bb', `${bb.toFixed(1)}px`);
    flipEl.style.transformOrigin = `50% calc(50% + ${((bb - b) / 2).toFixed(1)}px)`;
    back.style.width = `${(pw * B.s).toFixed(1)}px`;
    back.style.height = `${(ph * B.s).toFixed(1)}px`;
    back.style.left = `${(B.x * vw).toFixed(1)}px`;
    back.style.top = `${(B.y * vh).toFixed(1)}px`;
    // Where the card's edges are at rest, for the words beside or above it.
    const turn = Math.abs(Math.sin((A.rz * Math.PI) / 180));
    html.style.setProperty('--card-left', `${(A.x * vw - (pw * A.s) / 2 - (ph * A.s * turn) / 2).toFixed(0)}px`);
    html.style.setProperty('--card-top', `${(A.y * vh - (ph * A.s) / 2 - (pw * A.s * turn) / 2).toFixed(0)}px`);
    html.style.setProperty('--card-bottom', `${(A.y * vh + (ph * A.s) / 2 + (pw * A.s * turn) / 2).toFixed(0)}px`);
    last = '';
    apply();
  }

  // dive: 0 the card at rest in the hero, 1 its picture is the screen. out: 0 to 1, back down
  // onto the sand at the end. flip: 0 to 1, over onto its back. settle: 0 to 1, the camera
  // easing back to rest as the page opens.
  function set(v) { Object.assign(state, v); apply(); }

  function apply() {
    if (!L) return;
    const { vw, vh, cw, ch, b, bb } = L;
    const ending = state.out > 0;
    const P = ending ? L.B : L.A;
    const raw = ending ? 1 - state.out : state.dive;
    const e = raw >= 1 ? 1 : raw <= 0 ? 0 : ease(raw);
    const full = e >= 1;
    // The print finish: on at rest, and the first thing to go as the card leaves the sand (it
    // is overlays over the whole canvas: free while nothing is drawn, not while the scene
    // draws every frame under it).
    const f = ending ? smooth(0.72, 0.98, state.out) : 1 - smooth(0.02, 0.2, state.dive);
    const flip = state.flip;
    const key = [e, f, flip, state.settle, tilt.x, tilt.y, tilt.nx].map((n) => n.toFixed(4)).join();
    if (key === last) return;
    last = key;
    table.classList.toggle('is-full', full);
    table.classList.toggle('is-end', ending);

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
    const rz = P.rz * m, r = (P.rz * Math.PI) / 180, off = ((bb - b) / 2) * P.s;
    const tx = (P.x * vw + Math.sin(r) * off - vw / 2) * m, ty = (P.y * vh - Math.cos(r) * off - vh / 2) * m;
    world.style.transform = `translate3d(${tx.toFixed(2)}px, ${ty.toFixed(2)}px, 0) rotate(${rz.toFixed(3)}deg) scale(${s.toFixed(5)})`;

    // The picture's window opens to the whole frame over the last part of the way up.
    const k = smooth(0.45, 1, e);
    const ww = lerp(cw, vw, k), wh = lerp(ch, vh, k);
    const ix = (vw - ww) / 2, iy = (vh - wh) / 2;
    stage.style.clipPath = `inset(${iy.toFixed(1)}px ${ix.toFixed(1)}px)`;
    // The paper and its shadow follow by scale, about the middle of the picture: no layout
    // and nothing repainted while the scene is drawing at full size underneath.
    const sx = (ww + 2 * b) / (cw + 2 * b), sy = Math.max((wh / 2 + b) / (ch / 2 + b), (wh / 2 + bb) / (ch / 2 + bb));
    paper.style.transform = `scale(${sx.toFixed(5)}, ${sy.toFixed(5)})`;
    caption.style.opacity = (ending ? smooth(0.5, 0.85, state.out) : 1 - smooth(0.18, 0.42, state.dive)).toFixed(3);

    finish.style.opacity = f.toFixed(3);
    finish.style.visibility = f > 0.003 ? 'visible' : 'hidden';
    light.style.opacity = f.toFixed(3);
    light.style.visibility = f > 0.003 ? 'visible' : 'hidden';
    finish.style.setProperty('--sheen', `${(34 + tilt.nx * 30).toFixed(1)}%`);
    // (No fading of the picture's colour: the first iteration desaturated it to look printed,
    // and Sam read the whole page as washed out. The paper, the sheen and the stillness say
    // "print"; the colour stays the scene's.)

    // The card itself: leaning a little to the pointer at rest, and turning over at the end
    // (it lifts off the sand as it goes).
    const lift = 1 + 0.06 * Math.sin(Math.PI * flip);
    const turned = flip > 0.5;
    flipEl.style.visibility = turned ? 'hidden' : 'visible';
    flipEl.style.transform = (flip > 0 || tilt.x || tilt.y)
      ? `perspective(${(EYE / s).toFixed(0)}px) rotateX(${tilt.x.toFixed(3)}deg) rotateY(${(tilt.y + 180 * flip).toFixed(3)}deg) scale(${lift.toFixed(4)})`
      : 'none';
    back.style.visibility = turned ? 'visible' : 'hidden';
    if (turned) back.style.transform = `translate(-50%, -50%) rotate(${L.B.rz}deg) perspective(${EYE}px) rotateY(${(180 * flip - 180).toFixed(3)}deg) scale(${lift.toFixed(4)})`;
    // The shadow on the sand narrows with the card as it turns and slides out a little as it
    // lifts. Once turned, the back brings its own.
    const far = (lift - 1) * cw;
    shadow.style.transform = `translate(${(far * 0.5).toFixed(1)}px, ${far.toFixed(1)}px) rotate(0.55deg) scale(${(sx * Math.abs(Math.cos(Math.PI * flip))).toFixed(5)}, ${sy.toFixed(5)})`;
    shadow.style.opacity = turned ? '0' : (1 - 3 * (lift - 1)).toFixed(3);
  }

  // The lean toward the pointer: a card on sand is never quite flat. Only at rest in the hero.
  if (!reduced && matchMedia('(hover: hover) and (pointer: fine)').matches) {
    addEventListener('pointermove', (ev) => {
      if (!L || ev.pointerType !== 'mouse') return;
      const nx = clamp01(ev.clientX / L.vw) * 2 - 1, ny = clamp01(ev.clientY / L.vh) * 2 - 1;
      tilt.tx = -ny * 2.6; tilt.ty = nx * 3.4; tilt.tnx = nx;
    }, { passive: true });
  }
  function tick(dt) {
    const want = state.out > 0 ? 0 : 1 - smooth(0, 0.3, state.dive);
    tilt.live += (want - tilt.live) * (1 - Math.exp(-8 * dt));
    const k = 1 - Math.exp(-5 * dt);
    const x = tilt.tx * tilt.live, y = tilt.ty * tilt.live;
    tilt.x += (x - tilt.x) * k; tilt.y += (y - tilt.y) * k; tilt.nx += (tilt.tnx - tilt.nx) * k;
    if (Math.abs(tilt.x) < 0.002 && Math.abs(x) < 0.002) tilt.x = 0;
    if (Math.abs(tilt.y) < 0.002 && Math.abs(y) < 0.002) tilt.y = 0;
    apply();
  }

  return {
    layout, set, tick, ground, back, state,
    get L() { return L; },
    // Is the picture standing still (so no frame has to be drawn)?
    get turned() { return state.flip > 0.5; },
  };
}
