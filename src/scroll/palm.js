// The sand under the card, alive (v35, rounds 11 to 13).
//
// The sand is a photograph with nothing on it (assets/hero/sand-clean.jpg, Sam's plate). What
// lies on it is laid by the page, in layers that can each move on their own:
//
//   shadows   palm fronds drawn every frame (a rib that curls, leaflets that each flutter to
//             their own beat), small and stretched so they are soft, multiplied over the sand
//             and over the card: far ones faint, the near one a little stronger
//   leaves    two real ones, hanging into the top corners: one picture of a frond's tip with a
//             clear background (assets/hero/palm-leaf.png, Sam's), hung twice, the right one
//             mirrored and longer. Each turns on its stem and casts its shadow.
//   a gust    now and then, and as the scroll begins: the fronds pull, sand skims across the
//             sand and over the card in streamers, the card's windward edge lifts
//
// The layers live in the card's world and take the sand's own transform, so they are laid with
// it for every pose and grow with it into the dive. Everything settles as the card comes up.
//
// (Two other ways were built and recorded before this one, in demos/sand/: the old photograph
// with its baked shadows slid about by a shader, and that with gusts. Sam chose this, and a
// little of the gust with it.)

const DEG = Math.PI / 180;
// The wind blows this way across the screen (right and down), as the shadows lie.
const WIND = [0.83, 0.56];
// The leaf's picture is a square with the stem coming in at its top left corner (STEM, as
// shares of its side) and the leaflets fanning down and to the right, the first of them 14
// degrees under the horizontal and the last nearly straight down.
// Where it hangs, for a wide screen and a tall one: where the stem is on the sand's canvas
// (shares of its width and height: outside it, so only the tips come into the picture), the
// picture's side as a share of the canvas's width, how far it is turned downward from the
// picture's own lie (degrees), `flip` for one that hangs from the right (mirrored), and `ph`
// so that no two sway together.
// The turns are what keep the leaves off the words: the left one passes under the firm's
// name and stops short of the headline, the right one passes right of the menu and lays its
// tips over the card's corner. On a tall screen the left corner is the name's, so there is
// one, small, on the right.
const STEM = [0.0, 0.0116];
const LEAVES = {
  wide: [
    { x: 0.029, y: -0.072, size: 0.218, turn: 46, ph: 0.6 },
    { x: 1.0075, y: -0.032, size: 0.249, turn: 19, flip: true, ph: 2.9 },
  ],
  tall: [{ x: 1.049, y: -0.011, size: 0.34, turn: 25, flip: true, ph: 2.9 }],
};
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

const clamp01 = (x) => Math.min(Math.max(x, 0), 1);
const smooth = (a, b, x) => { const t = clamp01((x - a) / (b - a)); return t * t * (3 - 2 * t); };

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

// ---------------------------------------------------------------- sand, blown

// Sand lifted by a gust skims the ground in streamers that snake downwind. Each is a small
// cloud of grains, drawn many times along a lane that bends. The grains are the sand's own:
// their colours are read off the photograph, most a little lighter than it (sand in the air
// catches the sun) and some darker, so the cloud shows over pale sand, over the card's white
// border and over its picture alike. The gust comes in from the upwind corner and its front
// crosses the screen in about a second.
// (Grains drawn one by one as streaks read as rain. Smooth pale wisps could not be seen on
// sand without a shadow under them, and then looked like ribbons.)
function makeGust() {
  const c = document.createElement('canvas');
  c.className = 'fx fx-gust';
  const g = c.getContext('2d');
  let seed = 81007;
  const rnd = () => ((seed = (Math.imul(seed, 1664525) + 1013904223) >>> 0) / 4294967296);
  const lanes = Array.from({ length: 7 }, (_, i) => ({
    off: (i + 0.5) / 7 + 0.05 * Math.sin(i * 12.9898), amp: 0.02 + 0.03 * rnd(), k: 1.1 + rnd() * 1.7, ph: rnd() * 6.283,
    puffs: Array.from({ length: 26 }, () => ({ at: rnd() * 1.3, v: 0.2 + rnd() * 0.2, len: 0.07 + rnd() * 0.1, w: 0.014 + rnd() * 0.02, a: 0.3 + rnd() * 0.7, j: (rnd() - 0.5) * 0.024, kind: Math.floor(rnd() * 3) })),
  }));
  const wa = Math.atan2(WIND[1], WIND[0]);
  let sprites = null;
  return {
    el: c,
    size(w, h) { c.width = w; c.height = h; },
    // The sand has been drawn (again): make the clouds of grains from its colours.
    grains(ground) {
      const w = Math.min(512, ground.width);
      let px;
      try { px = ground.getContext('2d').getImageData((ground.width - w) >> 1, ground.height >> 1, w, 1).data; } catch { px = null; }
      sprites = [0, 1, 2].map(() => {
        const s = document.createElement('canvas'), x = s.getContext('2d');
        s.width = 256; s.height = 80;
        for (let n = 0; n < 1500; n++) {
          // (a long cloud, thick along its middle and thinning to its ends and edges)
          const u = rnd(), v = 0.5 + (rnd() + rnd() + rnd() - 1.5) * 0.3;
          const fall = (1 - Math.pow(Math.abs(2 * u - 1), 2.2)) * Math.exp(-Math.pow((v - 0.5) / 0.24, 2));
          const i = Math.floor(rnd() * w) * 4, k = rnd() < 0.74 ? 1.1 : 0.6;
          const col = px ? [px[i] * k, px[i + 1] * k, px[i + 2] * k] : [242 * k, 222 * k, 186 * k];
          x.fillStyle = `rgba(${Math.min(255, col[0]).toFixed(0)}, ${Math.min(255, col[1]).toFixed(0)}, ${Math.min(255, col[2]).toFixed(0)}, ${(fall * (0.55 + 0.45 * rnd())).toFixed(3)})`;
          const d = rnd() < 0.3 ? 2 : 1.3;
          x.fillRect(u * 256, v * 80, d * (1 + rnd()), d);
        }
        return s;
      });
    },
    // gust: how hard it blows, 0 to 1. since: seconds since it began.
    draw(t, gust, since) {
      const W = c.width, H = c.height, D = Math.hypot(W, H);
      g.setTransform(1, 0, 0, 1, 0, 0);
      g.clearRect(0, 0, W, H);
      if (gust < 0.004 || !sprites) return false;
      const front = since * 0.95 - 0.12;
      for (const lane of lanes) for (const p of lane.puffs) {
        const s = ((p.at + t * p.v) % 1.3) - 0.15, reach = smooth(0, 0.3, front - s);
        const alpha = p.a * gust * reach * 0.8;
        if (alpha < 0.02) continue;
        const wave = lane.k * s * 6.283 + lane.ph + t * 0.5, across = lane.off + lane.amp * Math.sin(wave) + p.j;
        const x = W * 0.5 + (s - 0.5) * D * WIND[0] + (across - 0.5) * D * -WIND[1], y = H * 0.5 + (s - 0.5) * D * WIND[1] + (across - 0.5) * D * WIND[0];
        const ang = wa + Math.atan(lane.amp * lane.k * 6.283 * Math.cos(wave)), cs = Math.cos(ang), sn = Math.sin(ang), l = p.len * D, w = p.w * D;
        g.setTransform(cs, sn, -sn, cs, x, y);
        g.globalAlpha = alpha;
        g.drawImage(sprites[p.kind], -l / 2, -w / 2, l, w);
      }
      g.globalAlpha = 1;
      return true;
    },
  };
}

// ---------------------------------------------------------------- the palm

// plate: the sand's photograph (scroll.js loads it as the day's sand). leaf: the leaf's cut-out.
export function createPalm({ reduced = false, plate = null, leaf = null } = {}) {
  let host = null, t = 0, placed = '', moving = true, gustAt = 3.2, gustEvery = 9.5, wasY = 0, onPlate = true;
  const layers = [];
  const layer = (tag, cls) => { const e = document.createElement(tag); e.className = `fx ${cls}`; layers.push(e); return e; };
  const shade = { far: layer('canvas', 'fx-shade'), near: layer('canvas', 'fx-shade'), buf: { far: document.createElement('canvas'), near: document.createElement('canvas') } };
  // The leaves: for each, a box that turns about the stem, with the picture in it (mirrored
  // in one that hangs from the right). Made for the screen's shape in size().
  const leafWrap = layer('div', 'fx-leaf');
  let leaves = [], leafSet = null;
  const leafImg = new Image();
  function hang(set) {
    leafSet = set;
    leafWrap.replaceChildren();
    leaves = set.map((l) => {
      const el = document.createElement('div'), img = new Image();
      img.alt = '';
      if (leaf) img.src = leaf;
      el.className = l.flip ? 'leaf leaf--right' : 'leaf';
      el.style.transformOrigin = `${(l.flip ? 1 - STEM[0] : STEM[0]) * 100}% ${STEM[1] * 100}%`;
      el.append(img);
      leafWrap.append(el);
      return { ...l, el, sway: 0 };
    });
  }
  // (A leaf's shadow: its own shape, filled with the shade's colour.)
  let leafShade = null;
  leafImg.onload = () => {
    const img = leafImg, c = document.createElement('canvas'), x = c.getContext('2d');
    c.width = Math.round(img.naturalWidth / 2); c.height = Math.round(img.naturalHeight / 2);
    x.drawImage(img, 0, 0, c.width, c.height);
    x.globalCompositeOperation = 'source-in';
    x.fillStyle = SHADE.near; x.fillRect(0, 0, c.width, c.height);
    leafShade = c; moving = true;
  };
  if (leaf) leafImg.src = leaf;
  const gust = reduced ? null : makeGust();
  if (gust) layers.push(gust.el);

  // A gust: up in under a second, away over three.
  const blow = (since) => (since < 0 ? 0 : since < 0.8 ? smooth(0, 0.8, since) : Math.exp(-(since - 0.8) / 1.5));
  const breeze = () => 0.55 + 0.25 * Math.sin(t * 0.37) + 0.2 * Math.sin(t * 0.83 + 1.7);

  function size() {
    if (!host) return;
    const w = host.ground.clientWidth, h = host.ground.clientHeight;
    if (!w || !h) return;
    gust?.size(w, h);
    for (const k of ['far', 'near']) for (const c of [shade[k], shade.buf[k]]) { c.width = Math.round(w * SOFT[k][0]); c.height = Math.round(h * SOFT[k][0]); }
    const set = w / h < 0.85 ? LEAVES.tall : LEAVES.wide;
    if (set !== leafSet) hang(set);
    for (const l of leaves) {
      // (The box is a square of the canvas's width, placed so that the stem is at x, y.)
      const st = l.el.style;
      st.width = `${l.size * 100}%`;
      st.left = `${(l.x - (l.flip ? 1 - STEM[0] : STEM[0]) * l.size) * 100}%`;
      st.top = `${(l.y - STEM[1] * l.size * (w / h)) * 100}%`;
    }
    moving = true;
  }

  return {
    plate,
    mount({ ground, card, post }) {
      host = { ground, post };
      // Over the card, from the ground up: sand blows across it, shadows fall on it and on
      // that sand, and the leaves hang over everything (blown sand stays near the ground: with
      // it drawn over the leaves they looked dusty).
      card.after(...(gust ? [gust.el] : []), shade.far, shade.near, leafWrap);
      addEventListener('resize', size);
      size();
    },
    // scroll.js has drawn the sand's canvas again (another photograph, another size). crop: the
    // part of the photograph that is on it { sx, sy, sw, sh, iw, ih }, or null for a photograph
    // that is not the plate (the ending's).
    sandChanged(ground, crop) {
      size();
      gust?.grains(ground);
      // (The leaves hang over the plate only: not over the ending's sand.)
      leafWrap.style.display = crop ? '' : 'none';
      onPlate = !!crop;
    },
    tick(dt, cam) {
      if (!host) return;
      if (!reduced) t += dt;
      const pose = host.post.state.pose, up = clamp01(cam.up), calm = 1 - smooth(0.12, 0.55, up), day = pose !== 'end';
      const tf = host.ground.style.transform;
      if (tf !== placed) { placed = tf; for (const e of layers) e.style.transform = tf; }
      // The wind: a breeze that comes and goes, and a gust now and then (not at an even beat)
      // and as the scroll begins.
      if (t - gustAt > gustEvery) { gustAt = t; gustEvery = 8.5 + 4 * (0.5 + 0.5 * Math.sin(t * 1.7)); }
      if (wasY < 0.004 && cam.y >= 0.004 && t - gustAt > 2.5) gustAt = t - 0.15;
      wasY = cam.y;
      const g = reduced ? 0 : blow(t - gustAt) * calm * (day ? 1 : 0);
      const wind = (0.7 * breeze() + 0.55 * g) * calm * (day ? 1 : 0);
      const live = wind > 0.004 && up < 0.999;
      const seen = day ? 1 - smooth(0.05, 0.42, up) : 0;
      for (const e of [shade.far, shade.near, leafWrap]) e.style.opacity = seen.toFixed(3);

      if (gust) {
        gust.el.style.opacity = gust.draw(t, g, t - gustAt) ? '1' : '0';
        // The card's windward edge lifts a little as the gust passes.
        host.post.lean?.(-0.9 * g * (0.7 + 0.3 * Math.sin(t * 9)), 1.3 * g * (0.75 + 0.25 * Math.sin(t * 7.3 + 1)));
      }
      if (seen > 0 && (live || moving)) {
        const set = host.ground.clientWidth / host.ground.clientHeight < 0.85 ? PALMS.tall : PALMS.wide;
        // Each leaf turns on its stem: a slow sway with a quicker tremble on it, and a lean.
        for (const l of leaves) {
          l.sway = (Math.sin(t * 0.9 + l.ph) * 0.62 + Math.sin(t * 2.3 + l.ph * 1.7) * 0.26 + Math.sin(t * 5.1 + l.ph) * 0.12) * 2.2 * wind;
          l.angle = (l.flip ? -1 : 1) * (l.turn + l.sway);
          l.el.style.transform = `rotate(${l.angle.toFixed(3)}deg) skewX(${(Math.sin(t * 1.6 + l.ph + 1.4) * 0.8 * wind).toFixed(3)}deg)`;
        }
        for (const k of ['far', 'near']) {
          const b = shade.buf[k], x = b.getContext('2d'), out = shade[k].getContext('2d');
          x.clearRect(0, 0, b.width, b.height);
          x.fillStyle = x.strokeStyle = SHADE[k];
          for (const f of set[k]) frond(x, b.width, b.height, f, t, wind);
          if (k === 'near' && leafShade && onPlate) for (const l of leaves) {
            // The leaf's own shadow: its shape again, a little down the sun's way, turning with
            // it (and a touch further: the shadow of a thing held up moves more than the thing).
            const side = l.size * b.width;
            x.save();
            x.translate(l.x * b.width + 0.016 * b.width, l.y * b.height + 0.04 * b.height);
            x.rotate((l.flip ? -1 : 1) * (l.turn + l.sway * 1.15) * DEG);
            if (l.flip) x.scale(-1, 1);
            x.drawImage(leafShade, -STEM[0] * side, -STEM[1] * side, side, side);
            x.restore();
          }
          out.clearRect(0, 0, b.width, b.height);
          out.filter = `blur(${SOFT[k][1]}px)`;
          out.drawImage(b, 0, 0);
          out.filter = 'none';
        }
      }
      moving = live;
    },
  };
}
