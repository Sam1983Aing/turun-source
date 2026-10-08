// Water in the buttons (v35 rounds 15 and 16).
//
// After ThreeUI's "Water Ripple" button, which Sam pointed at and asked for quieter ("the water
// effect feels a bit too strong, the glow"). Theirs was looked at running, in his own browser:
// a pool set into a dark rim, a bright net of light moving over a tiled floor, the surface
// rippling under the pointer, and a glow at its ends and all round it. This is the page's own
// writing of that (their source was not read), for a beach: the sea in place of the pool, no
// tiles, no glow.
//
// Two things make it:
//
//   the net of light   what sunlight does on the floor of shallow water. The surface is a sum
//                      of six travelling waves. Each bends the light by its slope, so light
//                      that left evenly spaced arrives bunched up: its brightness on the floor
//                      is one over how much a small patch of it has been squeezed, which is
//                      the determinant of (1 + the surface's curvature). Where that passes
//                      through nothing the light is focused into a line. Worked out for
//                      every pixel by a small shader.
//   the ripples        a grid of heights, one cell for two pixels, that obeys the wave
//                      equation (each cell goes to the mean of its four neighbours, less
//                      where it was, times a little damping). The pointer drags a wake, a
//                      press drops a stone in, and now and then a drop falls on its own. The
//                      grid's slope goes to the shader, which looks through it: the net
//                      under a ripple is pushed aside, and the ripple's own faces catch the
//                      light or lose it.
//
// It runs only while its button can be seen.

const CELL = 2;            // pixels to a cell of the ripples' grid
const DAMP = 0.986;        // what a ripple keeps each step

const VERT = 'attribute vec2 p; varying vec2 v; void main() { v = vec2(p.x * 0.5 + 0.5, 0.5 - p.y * 0.5); gl_Position = vec4(p, 0.0, 1.0); }';
// S the button's size in pixels. T time. K how bright the net is. R the ripples: their slope
// in red and green. v: 0 to 1 across the button, from its top left.
const FRAG = `
precision highp float;
uniform sampler2D R; uniform vec2 S; uniform float T, K;
varying vec2 v;
// One wave of the surface, going along d: what it adds to the surface's curvature at x
// (xx, yy, xy). Its height is taken as 1 / k^2, so that every wave bends the light as much.
vec3 wave(vec2 x, vec2 d, float k, float w, float ph) {
  return -sin(dot(d, x) * k + w * T + ph) * vec3(d.x * d.x, d.y * d.y, d.x * d.y);
}
void main() {
  vec2 px = v * S;
  vec2 slope = (texture2D(R, v).xy - 0.5) * 2.0;
  // (The floor seen through a ripple is seen a little to one side.)
  vec2 x = px / 9.5 + slope * 2.6;
  vec3 c = wave(x, vec2(0.955, 0.296), 1.0, 0.9, 0.0) + wave(x, vec2(0.315, 0.949), 1.6, -1.2, 1.3)
         + wave(x, vec2(-0.737, 0.675), 2.3, 1.0, 2.1) + wave(x, vec2(-0.897, -0.443), 1.3, -0.7, 4.0)
         + wave(x, vec2(-0.211, -0.978), 2.9, 1.4, 0.7) + wave(x, vec2(0.776, -0.631), 1.9, 0.8, 5.2);
  c *= 0.44;
  float squeezed = abs((1.0 + c.x) * (1.0 + c.y) - c.z * c.z);
  // (Kept from burning out: the brightest of it is well short of white, so the words on the
  // button can always be read.)
  float net = pow(min(0.17 / (squeezed + 0.1), 1.05), 1.35);
  // The sea, deeper down the button, and the light on its floor.
  vec3 col = mix(vec3(0.066, 0.435, 0.545), vec3(0.035, 0.262, 0.392), v.y);
  col += vec3(0.42, 0.82, 0.83) * net * K;
  // A ripple's faces: lit towards the top left, dark away from it.
  float lit = slope.x * 0.62 + slope.y * 0.78;
  col += vec3(0.5, 0.86, 0.88) * max(lit, 0.0) * 0.6;
  col *= 1.0 - max(-lit, 0.0) * 0.5;
  // The water stands a little below its rim: darker close under it, most under its top.
  float r = S.y * 0.5;
  vec2 q = vec2(max(abs(px.x - S.x * 0.5) - (S.x * 0.5 - r), 0.0), px.y - r);
  float inFromRim = r - length(q);
  col *= mix(0.7, 1.0, smoothstep(0.0, 6.0 + 4.0 * (1.0 - v.y), inFromRim));
  gl_FragColor = vec4(col, 1.0);
}`;

function pool(btn, { reduced }) {
  const c = document.createElement('canvas');
  c.className = 'button__water';
  c.setAttribute('aria-hidden', 'true');
  btn.prepend(c);
  const gl = c.getContext('webgl', { alpha: false, antialias: false, depth: false, stencil: false, powerPreference: 'low-power' });
  if (!gl) { c.remove(); return null; }
  const sh = (type, src) => { const s = gl.createShader(type); gl.shaderSource(s, src); gl.compileShader(s); if (!gl.getShaderParameter(s, gl.COMPILE_STATUS)) throw new Error(gl.getShaderInfoLog(s)); return s; };
  const prog = gl.createProgram();
  gl.attachShader(prog, sh(gl.VERTEX_SHADER, VERT)); gl.attachShader(prog, sh(gl.FRAGMENT_SHADER, FRAG)); gl.linkProgram(prog);
  if (!gl.getProgramParameter(prog, gl.LINK_STATUS)) throw new Error(gl.getProgramInfoLog(prog));
  gl.useProgram(prog);
  gl.bindBuffer(gl.ARRAY_BUFFER, gl.createBuffer());
  gl.bufferData(gl.ARRAY_BUFFER, new Float32Array([-1, -1, 3, -1, -1, 3]), gl.STATIC_DRAW);
  const loc = gl.getAttribLocation(prog, 'p');
  gl.enableVertexAttribArray(loc); gl.vertexAttribPointer(loc, 2, gl.FLOAT, false, 0, 0);
  const u = Object.fromEntries(['R', 'S', 'T', 'K'].map((n) => [n, gl.getUniformLocation(prog, n)]));
  gl.bindTexture(gl.TEXTURE_2D, gl.createTexture());
  for (const [k, val] of [[gl.TEXTURE_MIN_FILTER, gl.LINEAR], [gl.TEXTURE_MAG_FILTER, gl.LINEAR], [gl.TEXTURE_WRAP_S, gl.CLAMP_TO_EDGE], [gl.TEXTURE_WRAP_T, gl.CLAMP_TO_EDGE]]) gl.texParameteri(gl.TEXTURE_2D, k, val);

  let W = 0, H = 0, cur = null, old = null, slopes = null, rippling = false, running = false, seen = false, hover = 0, over = false;
  let lastDrop = performance.now(), wait = 2600, px = -1, py = -1, t0 = performance.now(), cssW = 0, cssH = 0;

  function size() {
    cssW = btn.clientWidth; cssH = btn.clientHeight;
    if (!cssW || !cssH) return;
    const dpr = Math.min(devicePixelRatio || 1, 2);
    c.width = Math.round(cssW * dpr); c.height = Math.round(cssH * dpr);
    gl.viewport(0, 0, c.width, c.height);
    const w = Math.max(8, Math.round(cssW / CELL)), h = Math.max(6, Math.round(cssH / CELL));
    if (w !== W || h !== H) { W = w; H = h; cur = new Float32Array(W * H); old = new Float32Array(W * H); slopes = new Uint8Array(W * H * 4).fill(128); }
    upload();
    draw();
  }
  // A stone of radius r cells at x, y (cells): the water under it goes down by `amp`.
  function drop(x, y, r, amp) {
    if (!W) return;
    for (let j = Math.max(1, Math.floor(y - r)); j <= Math.min(H - 2, Math.ceil(y + r)); j++) for (let i = Math.max(1, Math.floor(x - r)); i <= Math.min(W - 2, Math.ceil(x + r)); i++) {
      const d = Math.hypot(i - x, j - y) / r;
      if (d < 1) cur[j * W + i] -= amp * (0.5 + 0.5 * Math.cos(Math.PI * d));
    }
    rippling = true;
    start();
  }
  function step() {
    let moving = 0;
    for (let j = 1; j < H - 1; j++) for (let i = 1, k = j * W + 1; i < W - 1; i++, k++) {
      const val = ((cur[k - 1] + cur[k + 1] + cur[k - W] + cur[k + W]) * 0.5 - old[k]) * DAMP;
      old[k] = val;
      moving += val < 0 ? -val : val;
    }
    [cur, old] = [old, cur];
    if (moving / (W * H) < 0.0015) { rippling = false; cur.fill(0); old.fill(0); }
  }
  // The ripples' slope, for the shader: red across, green down, 128 for level.
  function upload() {
    if (!W) return;
    for (let j = 0; j < H; j++) for (let i = 0; i < W; i++) {
      const o = (j * W + i) * 4;
      slopes[o] = Math.max(0, Math.min(255, 128 + (cur[Math.min(W - 1, i + 1) + j * W] - cur[Math.max(0, i - 1) + j * W]) * 150));
      slopes[o + 1] = Math.max(0, Math.min(255, 128 + (cur[i + Math.min(H - 1, j + 1) * W] - cur[i + Math.max(0, j - 1) * W]) * 150));
    }
    gl.texImage2D(gl.TEXTURE_2D, 0, gl.RGBA, W, H, 0, gl.RGBA, gl.UNSIGNED_BYTE, slopes);
  }
  function draw() {
    if (!cssW) return;
    gl.uniform1i(u.R, 0); gl.uniform2f(u.S, cssW, cssH); gl.uniform1f(u.T, reduced ? 4 : (performance.now() - t0) / 1000); gl.uniform1f(u.K, 0.5 + 0.18 * hover);
    gl.drawArrays(gl.TRIANGLES, 0, 3);
  }
  function frame() {
    if (!seen || reduced) { running = false; return; }
    hover += ((over ? 1 : 0) - hover) * 0.08;
    if (rippling) { step(); upload(); }
    draw();
    requestAnimationFrame(frame);
  }
  function start() { if (!running && seen && !reduced) { running = true; requestAnimationFrame(frame); } }

  const at = (ev) => { const r = btn.getBoundingClientRect(); return [((ev.clientX - r.left) / r.width) * W, ((ev.clientY - r.top) / r.height) * H]; };
  btn.addEventListener('pointerenter', () => { over = true; }, { passive: true });
  btn.addEventListener('pointermove', (ev) => {
    const [x, y] = at(ev), far = px < 0 ? 0 : Math.hypot(x - px, y - py);
    px = x; py = y;
    if (far > 0.4) drop(x, y, 2.6, Math.min(far, 6) * 0.16);
  }, { passive: true });
  btn.addEventListener('pointerleave', () => { over = false; px = py = -1; }, { passive: true });
  btn.addEventListener('pointerdown', (ev) => { const [x, y] = at(ev); drop(x, y, 4.5, 2.4); lastDrop = performance.now(); }, { passive: true });
  new ResizeObserver(size).observe(btn);
  size();
  return {
    // Twice a second: is the button there to be seen? And a drop of its own, now and then.
    check(now) {
      const r = btn.getBoundingClientRect();
      seen = !document.hidden && r.width > 0 && r.bottom > 0 && r.top < innerHeight && getComputedStyle(btn).visibility === 'visible';
      if (!seen) return;
      start();
      if (reduced || now - lastDrop < wait) return;
      lastDrop = now; wait = 3800 + Math.random() * 3400;
      drop(W * (0.16 + 0.5 * Math.random()), H * (0.3 + 0.4 * Math.random()), 3.2, 1.5);
    },
  };
}

export function waterButtons({ reduced = false } = {}) {
  const pools = [];
  for (const b of document.querySelectorAll('.button')) {
    try { const p = pool(b, { reduced }); if (p) pools.push(p); } catch (e) { console.warn('the water in a button did not start', e); b.querySelector('.button__water')?.remove(); }
  }
  const check = () => { const now = performance.now(); for (const p of pools) p.check(now); };
  check();
  setInterval(check, 500);
}
