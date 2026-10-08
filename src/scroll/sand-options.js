// Three ways to bring the sand under the card to life, for Sam to compare in the page (demo,
// 8 October 2026: "I would like the shadow or the leaf that we see to be a little bit more
// alive"). Without the switch the page is as it is.
//
//   ?sand=shade   01 Breathing Shade   his photograph untouched: the shadows that are in it
//                                      sway, and the leaf in its corner turns on its stem
//   ?sand=palm    02 Live Palm         a plate with no shadows in it, and the page casts them:
//                                      fronds drawn every frame, over the sand and the card,
//                                      and a green one in the corner
//   ?sand=gust    03 Gust              the photograph again, calm, until a gust comes through:
//                                      the shadows race, sand blows across the surface in
//                                      snakes, the card's edge lifts. One comes when you start
//                                      to scroll.
//
// How the shadows in a photograph are moved (01, 03). The picture is drawn by a small shader as
// itself times (its own soft copy, read a little way upwind) / (its own soft copy, read here).
// The soft copy is the picture's own mipmap, so it holds the light and shade and none of the
// grain: the shade slides, the grains stay where they are. The leaf is green and nothing else
// is, so it is lifted off by its colour, turned about its stem and laid back.
//
// The layers live in the card's world and take the sand's own transform, so they are laid with
// it for every pose and grow with it into the dive. They settle as the card comes up.

// 02's plate: a stand-in made from the hero's own sand by resurfacing its shadowed corners
// (tools/prepare-ending-sand.mjs, three passes). Not in the repository: without it the option
// falls back to plain sand colour.
const PLATE = 'captures/sand-options/sand-clean.jpg';
// Where the leaf is in the hero's photograph (shares of the picture: its box from the top left
// corner, and where its stem would be, just outside).
const LEAF = { x: 0.125, y: 0.27, px: -0.015, py: -0.06 };
// The wind blows this way across the screen (right and down), as the shadows lie.
const WIND = [0.83, 0.56];
const DEG = Math.PI / 180;

const clamp01 = (x) => Math.min(Math.max(x, 0), 1);
const smooth = (a, b, x) => { const t = clamp01((x - a) / (b - a)); return t * t * (3 - 2 * t); };

const CSS = `
.fx { position: absolute; inset: 0; width: 100%; height: 100%; transform-origin: 50% 50%; pointer-events: none; }
.fx-shade { mix-blend-mode: multiply; }
.table.is-full .fx { visibility: hidden; }`;

// ---------------------------------------------------------------- the photograph, relit

const VERT = `#version 300 es
in vec2 p; out vec2 v;
void main() { v = vec2(p.x * 0.5 + 0.5, 0.5 - p.y * 0.5); gl_Position = vec4(p, 0.0, 1.0); }`;
// S the sand. T time. A how far the shade slides (in picture heights). K the leaf's turn in
// radians. R the picture's width over its height. L the leaf's box and stem. LOD how soft the
// copy is.
const FRAG = `#version 300 es
precision highp float;
uniform sampler2D S; uniform float T, A, K, R, LOD; uniform vec4 L;
in vec2 v; out vec4 o;
float lum(vec3 c) { return dot(c, vec3(0.299, 0.587, 0.114)); }
float green(vec3 c) { return smoothstep(0.015, 0.09, c.g - max(c.r * 0.93, c.b * 1.2)); }
vec2 slide(vec2 u) {
  vec2 q = vec2(u.x * R, u.y), w = vec2(${WIND[0]}, ${WIND[1]}), x = vec2(-w.y, w.x);
  float along = dot(q, w), across = dot(q, x);
  float s = sin(T * 0.95 - along * 4.6 + 1.4 * sin(across * 2.7 + T * 0.21)) * 0.6
          + sin(T * 1.9 - along * 9.5 + across * 3.6) * 0.28
          + sin(T * 3.3 - along * 15.0 - across * 8.0) * 0.12;
  float gain = 0.6 + 0.4 * sin(across * 2.1 + T * 0.16 + 1.8 * sin(along * 1.6 - T * 0.12));
  vec2 d = (w * 0.8 + x * 0.35 * sin(T * 0.7 + along * 3.0)) * s * gain * A;
  return vec2(d.x / R, d.y);
}
void main() {
  vec3 c = texture(S, v).rgb;
  if (K != 0.0 && v.x < L.x && v.y < L.y) {
    float m = (1.0 - smoothstep(L.x * 0.72, L.x, v.x)) * (1.0 - smoothstep(L.y * 0.75, L.y, v.y));
    vec2 q = vec2((v.x - L.z) * R, v.y - L.w);
    float a = K * m * (0.35 + 2.2 * length(q)), cs = cos(a), sn = sin(a);
    vec2 r = vec2(q.x * cs - q.y * sn, q.x * sn + q.y * cs);
    vec3 turned = texture(S, vec2(r.x / R + L.z, r.y + L.w)).rgb;
    // (Sand from beside it where the leaf was, then the leaf where it is now.)
    vec3 bare = mix(c, texture(S, v + vec2(0.125, 0.03)).rgb, green(c) * m);
    c = mix(bare, turned, green(turned));
  }
  if (A > 0.0) {
    float here = lum(textureLod(S, v, LOD).rgb), there = lum(textureLod(S, v + slide(v), LOD).rgb);
    // Only where it is a cast shadow: well under the picture's own average. The gentle shading
    // of the dunes is the sand's shape, and must not swim.
    float mean = lum(textureLod(S, vec2(0.5), 20.0).rgb);
    float inShade = smoothstep(0.08, 0.2, 1.0 - min(here, there) / mean);
    c *= mix(1.0, clamp(there / max(here, 0.03), 0.6, 1.5), inShade);
  }
  o = vec4(c, 1.0);
}`;

function makeRelight() {
  const c = document.createElement('canvas');
  c.className = 'fx fx-sand';
  const gl = c.getContext('webgl2', { alpha: false, antialias: false, depth: false, stencil: false, preserveDrawingBuffer: true });
  if (!gl) return null;
  const sh = (type, src) => { const s = gl.createShader(type); gl.shaderSource(s, src); gl.compileShader(s); if (!gl.getShaderParameter(s, gl.COMPILE_STATUS)) throw new Error(gl.getShaderInfoLog(s)); return s; };
  const prog = gl.createProgram();
  gl.attachShader(prog, sh(gl.VERTEX_SHADER, VERT)); gl.attachShader(prog, sh(gl.FRAGMENT_SHADER, FRAG)); gl.linkProgram(prog);
  if (!gl.getProgramParameter(prog, gl.LINK_STATUS)) throw new Error(gl.getProgramInfoLog(prog));
  gl.useProgram(prog);
  const buf = gl.createBuffer();
  gl.bindBuffer(gl.ARRAY_BUFFER, buf);
  gl.bufferData(gl.ARRAY_BUFFER, new Float32Array([-1, -1, 3, -1, -1, 3]), gl.STATIC_DRAW);
  const loc = gl.getAttribLocation(prog, 'p');
  gl.enableVertexAttribArray(loc); gl.vertexAttribPointer(loc, 2, gl.FLOAT, false, 0, 0);
  const tex = gl.createTexture();
  const u = Object.fromEntries(['S', 'T', 'A', 'K', 'R', 'LOD', 'L'].map((n) => [n, gl.getUniformLocation(prog, n)]));
  let ready = false, leaf = [0, 0, 0, 0];
  return {
    el: c,
    // The sand's own canvas has been drawn again: take it as the picture. `crop`: what part of
    // the photograph it shows { sx, sy, sw, sh, iw, ih }, to know where the leaf is in it (null:
    // a photograph with no leaf).
    load(ground, crop) {
      c.width = ground.width; c.height = ground.height;
      gl.viewport(0, 0, c.width, c.height);
      gl.bindTexture(gl.TEXTURE_2D, tex);
      gl.texImage2D(gl.TEXTURE_2D, 0, gl.RGBA, gl.RGBA, gl.UNSIGNED_BYTE, ground);
      gl.generateMipmap(gl.TEXTURE_2D);
      gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MIN_FILTER, gl.LINEAR_MIPMAP_LINEAR);
      gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MAG_FILTER, gl.LINEAR);
      gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_S, gl.CLAMP_TO_EDGE);
      gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_T, gl.CLAMP_TO_EDGE);
      const at = (fx, fy) => [(fx * crop.iw - crop.sx) / crop.sw, (fy * crop.ih - crop.sy) / crop.sh];
      leaf = crop ? [...at(LEAF.x, LEAF.y), ...at(LEAF.px, LEAF.py)] : [0, 0, 0, 0];
      ready = true;
    },
    draw(t, slide, turn, lod) {
      if (!ready) return;
      gl.uniform1i(u.S, 0); gl.uniform1f(u.T, t); gl.uniform1f(u.A, slide); gl.uniform1f(u.K, leaf[0] > 0 ? turn : 0);
      gl.uniform1f(u.R, c.width / c.height); gl.uniform1f(u.LOD, lod); gl.uniform4fv(u.L, leaf);
      gl.drawArrays(gl.TRIANGLES, 0, 3);
    },
  };
}

// ---------------------------------------------------------------- fronds, drawn

// A frond: a midrib that curls, and a leaflet each side at every step along it, longest a
// third of the way out, each fluttering to its own beat. f: where it starts (shares of the
// canvas), its heading in degrees, its length and its leaflets' as shares of the canvas's
// width, how it curls (radians at the tip), how many pairs, how it gives to the wind.
function frond(g, W, H, f, t, wind, paint) {
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
  if (paint) g.strokeStyle = paint(-1);
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
      if (paint) {
        // (a leaflet in the sun: darker at the rib, paler to its tip)
        const k = paint(i * 2 + (side > 0 ? 1 : 0)), gr = g.createLinearGradient(px, py, tx, ty);
        gr.addColorStop(0, '#2a4a14'); gr.addColorStop(0.4, k); gr.addColorStop(1, '#8fa03a');
        g.fillStyle = gr;
      }
      g.beginPath();
      g.moveTo(px, py);
      g.quadraticCurveTo(mx + nx, my + ny, tx, ty);
      g.quadraticCurveTo(mx - nx, my - ny, px, py);
      g.fill();
    }
  }
}

// The palms over the hero, in the sand's own space (shares of its canvas: the screen shows
// about the middle 86% of it). `far` are high up and cast soft shadows, `near` sharper ones.
// The green frond in the corner casts the last of the near ones.
const PALMS = {
  wide: {
    far: [
      { x: -0.06, y: -0.06, a: 9, len: 0.62, leaf: 0.17, curl: 0.22, ph: 0.4, n: 36 },
      { x: 1.2, y: 0.12, a: 163, len: 0.47, leaf: 0.17, curl: -0.3, ph: 3.3, n: 30 },
    ],
    near: [
      { x: 1.14, y: 1.16, a: 219, len: 0.5, leaf: 0.16, curl: 0.28, ph: 5.0, n: 30 },
      { x: 0.055, y: 0.005, a: 68, len: 0.2, leaf: 0.078, curl: 0.3, ph: 1.2, n: 20, flex: 1.5 },
    ],
    leaf: { x: 0.03, y: -0.04, a: 68, len: 0.2, leaf: 0.078, curl: 0.3, ph: 1.2, n: 20, flex: 1.5 },
  },
  tall: {
    far: [
      { x: -0.35, y: 0.0, a: 22, len: 1.25, leaf: 0.36, curl: 0.3, ph: 0.4, n: 30 },
      { x: 1.5, y: 0.52, a: 168, len: 0.95, leaf: 0.34, curl: -0.3, ph: 3.3, n: 28 },
    ],
    near: [{ x: 1.45, y: 1.08, a: 212, len: 1.1, leaf: 0.34, curl: 0.28, ph: 5.0, n: 28 }],
    leaf: null,
  },
};
const GREENS = ['#2f5216', '#44691b', '#587c20', '#7f932b', '#4d7320', '#a3a83c'];

// ---------------------------------------------------------------- sand, blown

// Sand lifted by a gust skims the ground in streamers: pale wisps that snake downwind, like
// smoke lying on the beach. Each is a soft, long sprite, drawn many times along a lane that
// bends, with a little shade under it. The gust comes in from the upwind corner and its front
// crosses the picture in about a second. (Grains drawn one by one were tried first: as long
// streaks they read as rain, and as small dashes they could not be seen on sand.)
function makeGrains() {
  const c = document.createElement('canvas');
  c.className = 'fx fx-grain';
  const g = c.getContext('2d');
  const sprite = (rgb) => {
    const s = document.createElement('canvas');
    s.width = 128; s.height = 32;
    const x = s.getContext('2d'), gr = x.createRadialGradient(64, 64, 0, 64, 64, 64);
    gr.addColorStop(0, `rgba(${rgb}, 1)`); gr.addColorStop(0.45, `rgba(${rgb}, 0.42)`); gr.addColorStop(1, `rgba(${rgb}, 0)`);
    x.setTransform(1, 0, 0, 0.25, 0, 0);
    x.fillStyle = gr; x.fillRect(0, 0, 128, 128);
    return s;
  };
  const pale = sprite('255, 253, 246'), dark = sprite('84, 54, 26');
  let seed = 81007;
  const rnd = () => ((seed = (Math.imul(seed, 1664525) + 1013904223) >>> 0) / 4294967296);
  const lanes = Array.from({ length: 8 }, (_, i) => ({
    off: (i + 0.5) / 8 + 0.04 * Math.sin(i * 12.9898), amp: 0.02 + 0.03 * rnd(), k: 1.1 + rnd() * 1.7, ph: rnd() * 6.283,
    puffs: Array.from({ length: 34 }, () => ({ at: rnd() * 1.3, v: 0.2 + rnd() * 0.2, len: 0.06 + rnd() * 0.1, w: 0.006 + rnd() * 0.012, a: 0.25 + rnd() * 0.75, j: (rnd() - 0.5) * 0.02 })),
  }));
  const wa = Math.atan2(WIND[1], WIND[0]);
  return {
    el: c,
    size(w, h) { c.width = Math.round(w * 0.7); c.height = Math.round(h * 0.7); },
    // gust: how hard it blows, 0 to 1. since: seconds since it began.
    draw(t, gust, since) {
      const W = c.width, H = c.height, D = Math.hypot(W, H);
      g.setTransform(1, 0, 0, 1, 0, 0);
      g.clearRect(0, 0, W, H);
      if (gust < 0.004) return false;
      const front = since * 0.95 - 0.12;
      for (const lane of lanes) for (const p of lane.puffs) {
        const s = ((p.at + t * p.v) % 1.3) - 0.15, reach = smooth(0, 0.3, front - s);
        const alpha = p.a * gust * reach * 0.85;
        if (alpha < 0.01) continue;
        const wave = lane.k * s * 6.283 + lane.ph + t * 0.5, across = lane.off + lane.amp * Math.sin(wave) + p.j;
        const x = W * 0.5 + (s - 0.5) * D * WIND[0] + (across - 0.5) * D * -WIND[1], y = H * 0.5 + (s - 0.5) * D * WIND[1] + (across - 0.5) * D * WIND[0];
        const ang = wa + Math.atan(lane.amp * lane.k * 6.283 * Math.cos(wave)), cs = Math.cos(ang), sn = Math.sin(ang), l = p.len * D, w = p.w * D;
        g.setTransform(cs, sn, -sn, cs, x + 3, y + 6);
        g.globalAlpha = alpha * 0.34;
        g.drawImage(dark, -l / 2, -w / 2, l, w * 1.25);
        g.setTransform(cs, sn, -sn, cs, x, y);
        g.globalAlpha = alpha;
        g.drawImage(pale, -l / 2, -w / 2, l, w);
      }
      g.globalAlpha = 1;
      return true;
    },
  };
}

// ---------------------------------------------------------------- the three options

export function sandOption(name, { reduced = false } = {}) {
  if (!['shade', 'palm', 'gust'].includes(name)) return null;
  const style = document.createElement('style');
  style.textContent = CSS;
  document.head.append(style);

  let host = null, relight = null, grains = null, shade = null, t = 0, placed = '', moving = true, gustAt = name === 'gust' ? 1.6 : 4, wasY = 0, lit = false;
  const layers = [];
  const layer = (cls) => {
    const c = document.createElement('canvas');
    c.className = `fx ${cls}`;
    layers.push(c);
    return c;
  };
  // The cast shadows are soft because they are small: drawn at a quarter (far) and two fifths
  // (near) of the size and stretched, with a little blur as they are copied in. (A CSS blur on
  // full-size layers, tried first, cost a fifth of a second a frame once the dive began to
  // scale them up.)
  const SOFT = { far: [0.25, 1.5], near: [0.4, 1.2] };
  // A gust: up in under a second, away over three.
  const gust = (since) => (since < 0 ? 0 : since < 0.8 ? smooth(0, 0.8, since) : Math.exp(-(since - 0.8) / 1.5));
  const breeze = () => 0.55 + 0.25 * Math.sin(t * 0.37) + 0.2 * Math.sin(t * 0.83 + 1.7);

  function size() {
    if (!host) return;
    const w = host.ground.clientWidth, h = host.ground.clientHeight;
    if (!w || !h) return;
    grains?.size(w, h);
    if (shade) {
      for (const k of ['far', 'near']) for (const c of [shade[k], shade.buf[k]]) { c.width = Math.round(w * SOFT[k][0]); c.height = Math.round(h * SOFT[k][0]); }
      shade.leaf.width = w; shade.leaf.height = h;
    }
  }

  return {
    name,
    plate: name === 'palm' ? PLATE : null,
    mount({ ground, card, post }) {
      host = { ground, card, post };
      if (name !== 'palm') {
        try { relight = makeRelight(); } catch (e) { console.warn('sand demo: the shader did not start', e); }
        if (relight) { layers.push(relight.el); ground.after(relight.el); }
      }
      if (name === 'gust') { grains = makeGrains(); layers.push(grains.el); (relight?.el ?? ground).after(grains.el); }
      if (name === 'palm') {
        shade = { far: layer('fx-shade'), near: layer('fx-shade'), leaf: layer('fx-leaf'), buf: { far: document.createElement('canvas'), near: document.createElement('canvas') } };
        card.after(shade.far, shade.near, shade.leaf);
      }
      addEventListener('resize', size);
      size();
      window.__sandFx = this;
    },
    // scroll.js has drawn the sand's canvas again (another photograph, another size).
    sandChanged(ground, crop) { relight?.load(ground, crop); lit = false; size(); },
    tick(dt, cam) {
      if (!host) return;
      if (!reduced) t += dt;
      const pose = host.post.state.pose, up = clamp01(cam.up), calm = 1 - smooth(0.12, 0.55, up), day = pose !== 'end';
      const tf = host.ground.style.transform;
      if (tf !== placed) { placed = tf; for (const c of layers) c.style.transform = tf; }
      // The wind. 03: a gust every six and a half seconds, and one as the scroll begins.
      if (name === 'gust') {
        if (t - gustAt > 6.5) gustAt = t;
        if (wasY < 0.004 && cam.y >= 0.004) gustAt = t - 0.15;
      } else if (t - gustAt > 9) gustAt = t;
      wasY = cam.y;
      const g = gust(t - gustAt);
      const wind = (name === 'gust' ? 0.16 + 1.05 * g : name === 'palm' ? 0.75 * breeze() + 0.45 * g : breeze()) * calm * (day ? 1 : 0);
      const live = wind > 0.004 && up < 0.999;

      if (relight) {
        const slide = name === 'gust' ? 0.002 + 0.012 * wind : 0.0095 * wind;
        const turn = (Math.sin(t * 0.9) * 0.6 + Math.sin(t * 2.3 + 1) * 0.4 + (name === 'gust' ? 1.4 * g : 0)) * 0.034 * wind;
        if (live || !lit || moving) { relight.draw(t, live ? slide : 0, live ? turn : 0, 3.3); lit = true; }
      }
      if (grains) {
        const blowing = grains.draw(t, g * calm * (day ? 1 : 0), t - gustAt);
        grains.el.style.opacity = blowing ? '1' : '0';
        // The card's windward edge lifts as the gust passes.
        host.post.lean?.(-1.5 * g * calm * (0.7 + 0.3 * Math.sin(t * 9)), 2.1 * g * calm * (0.75 + 0.25 * Math.sin(t * 7.3 + 1)));
      }
      if (shade) {
        const seen = day ? 1 - smooth(0.05, 0.42, up) : 0;
        for (const c of [shade.far, shade.near, shade.leaf]) c.style.opacity = seen.toFixed(3);
        if (seen > 0 && (live || moving)) {
          const set = host.ground.clientWidth / host.ground.clientHeight < 0.85 ? PALMS.tall : PALMS.wide;
          for (const k of ['far', 'near']) {
            const b = shade.buf[k], x = b.getContext('2d'), out = shade[k].getContext('2d');
            x.clearRect(0, 0, b.width, b.height);
            x.fillStyle = x.strokeStyle = k === 'far' ? 'rgb(184, 163, 148)' : 'rgb(166, 143, 128)';
            for (const f of set[k]) frond(x, b.width, b.height, f, t, wind);
            out.clearRect(0, 0, b.width, b.height);
            out.filter = `blur(${SOFT[k][1]}px)`;
            out.drawImage(b, 0, 0);
            out.filter = 'none';
          }
          const x = shade.leaf.getContext('2d');
          x.clearRect(0, 0, shade.leaf.width, shade.leaf.height);
          if (set.leaf) frond(x, shade.leaf.width, shade.leaf.height, set.leaf, t, wind, (k) => (k < 0 ? '#6f7d2c' : GREENS[(k * 7) % GREENS.length]));
        }
      }
      moving = live;
    },
  };
}
