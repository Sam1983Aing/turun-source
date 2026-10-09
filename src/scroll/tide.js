// The tide at the ending (v35 round 17).
//
// The last card lies on a photograph of sand with the sea's edge painted into its top left
// corner: a still. Sam: "you can add like water effect ... it will like wave coming in ... make
// it move behind the postcard or if you can make the postcard move along with the wave ... for
// now just use the image we have already." So the picture stays, and its own water is made to
// move.
//
// What is the picture's and what is written here:
//
//   the sea          the painted water, where it is: left alone but for a shimmer.
//   the foam         the painted foam, lifted off the picture (it is the only thing in it that
//                    is white in all three channels) and laid along the front of each wave.
//                    Nothing written by hand looks as much like foam as that does. Where the
//                    front is longer than the painted foam was, the foam is folded back along
//                    it at the picture's edge.
//   the thin water   between the sea and the foam, the sheet a wave pushes up the sand. This is
//                    code: the sand seen through it a little to one side (the surface's slope
//                    bends the view), a veil of the sky's colour that thickens behind the front,
//                    and the net of light on its floor (the same working out as the water in the
//                    buttons: one over how much a small patch of light has been squeezed). The
//                    net is carried along with the sheet.
//   the wet sand     what a wave leaves: the same sand darker, drying from its far edge back.
//
// A map made by tools/prepare-ending-tide.mjs says how far any point is from the painted
// water's edge. A wave is then one number, how far its front has come past that edge, and a
// point is under it if the point that far back along the wave's way was under the painted
// water. Each wave's front is its own shape (it runs further in some places than others).
//
// A wave comes in fast and slows to a stop, the way a thing thrown up a slope does. Then its
// water runs back, slowly at first, and its foam does not: it stays where the wave stopped and
// goes thin. The next one arrives over the last of it. They are not all the same size, and
// only the larger reach under the card: it is lifted a little, pushed and turned, and settles
// back (unless someone is writing on it).
//
// Two waves at most are alive at once. It runs only while the last card is at rest, and where
// the picture cannot be read into a shader (a file opened from the disk) the still stays.

const clamp01 = (v) => Math.min(1, Math.max(0, v));
const smooth = (a, b, v) => { const t = clamp01((v - a) / (b - a)); return t * t * (3 - 2 * t); };

// From tools/prepare-ending-tide.mjs: the wave's way across the picture and the painted edge's
// place along it (in heights of the picture, x right and y down), and what the map's red spans.
const WAY = [0.6829, 0.7305], EDGE = 0.3989, NEAR = 0.08;
// How far past the painted edge each wave comes (heights of the picture), in turn.
const SIZES = [0.15, 0.3, 0.1, 0.23, 0.08, 0.27];
const BEAT = 7.6;          // seconds from one wave to the next
const LEAD = 1.1;          // a wave is seen coming for this long before it is at the edge
const DRY = 5.5;           // the sand it wetted is dry this long after its water is back

const VERT = 'attribute vec2 p; varying vec2 v; void main() { v = vec2(p.x * 0.5 + 0.5, 0.5 - p.y * 0.5); gl_Position = vec4(p, 0.0, 1.0); }';
// P the sand's photograph as the page has drawn it. M the map. C the part of the photograph
// that is drawn (left, top, width, height in heights of the picture). A0, B0: a wave (how far
// its foam has come, how much of the foam has gone, how far its water reaches, its shape).
// A1, B1: the sand it has left (how wet, how far in it has dried). U: the time, how far the
// sheet has carried its light, and beyond what distance from the painted edge nothing is drawn.
const FRAG = `
precision highp float;
uniform sampler2D P, M;
uniform vec4 C, A0, A1, B0, B1;
uniform vec3 U;
varying vec2 v;
const vec2 N = vec2(${WAY[0]}, ${WAY[1]}), W = vec2(${WAY[1]}, -${WAY[0]});
const float P0 = ${EDGE}, NEAR = ${NEAR}, WIDE = 1.6;

vec3 pic(vec2 m) { return texture2D(P, (m - C.xy) / C.zw).rgb; }
vec3 chart(vec2 m) { return texture2D(M, clamp(vec2(m.x / WIDE, m.y), 0.0, 1.0)).rgb; }
// How far m is from the painted water's edge (less than nothing: in the water). The map knows
// it finely near the edge. Far from it the edge is as good as its straight line.
float edge(vec3 k, vec2 m) {
  float fine = (k.r * 255.0 - 128.0) / 127.0 * NEAR;
  return mix(fine, dot(m, N) - P0, smoothstep(0.7, 0.96, abs(fine) / NEAR));
}
// A wave's front runs further in some places than in others.
float lobes(float q, float s) { return 0.2 * sin(q * 4.7 + s) + 0.12 * sin(q * 10.9 + s * 1.7 + 1.0) + 0.06 * sin(q * 23.0 + s * 2.3 + 2.0); }
// The point s back along the wave's way from m. If that is off the picture, it is folded back
// in along the front (so the foam goes on past where the painted foam ended).
vec2 behind(vec2 m, float q, float s) {
  float p = dot(m, N) - s;
  float lo = max((C.x - N.x * p) / N.y, (N.y * p - C.y - C.w) / N.x) + 0.004;
  float hi = min((N.y * p - C.y) / N.x, (C.x + C.z - N.x * p) / N.y) - 0.004;
  float r = q < lo ? 2.0 * lo - q : (q > hi ? 2.0 * hi - q : q);
  return N * p + W * clamp(r, min(lo, hi), max(lo, hi));
}
void wave(vec2 m, float q, vec4 a, vec4 b, inout float water, inout float wet, inout vec4 foam) {
  float k = 1.0 + lobes(q, a.w);
  vec2 ms = behind(m, q, a.x * k);
  vec3 ck = chart(ms);
  float ds = edge(ck, ms), dw = ds;
  // (Running back, the water has left its foam behind.)
  if (a.z < a.x - 0.0004) { vec2 mw = behind(m, q, a.z * k); dw = edge(chart(mw), mw); }
  water = min(water, dw);
  // (Wet up to a clear line a little past where the foam stopped, and wetter nearer the water.)
  wet = max(wet, b.x * smoothstep(b.y - 0.008, b.y + 0.008, -ds) * (0.72 + 0.28 * smoothstep(0.0, 0.16, -ds - b.y)));
  if (a.y < 0.999 && ck.b > 0.02) {
    vec3 ph = pic(ms);
    float white = min(ph.r, min(ph.g, ph.b));
    float al = smoothstep(mix(0.6, 0.9, a.y), mix(0.82, 1.0, a.y), white) * smoothstep(0.04, 0.4, ck.b) * (1.0 - a.y * a.y);
    float both = al + foam.a * (1.0 - al);
    foam = vec4(mix(foam.rgb, ph, al / max(both, 0.0001)), both);
  }
}
// One wave of the thin water's surface, going along d: what it adds to the surface's curvature
// (xx, yy, xy) and to its slope.
void ripple(vec2 x, vec2 d, float k, float w, float ph, inout vec3 c, inout vec2 g) {
  float a = dot(d, x) * k + w * U.x + ph;
  c -= sin(a) * vec3(d.x * d.x, d.y * d.y, d.x * d.y);
  g += cos(a) * d / k;
}
void main() {
  vec2 m = C.xy + v * C.zw;
  vec3 k0 = chart(m);
  float d0 = edge(k0, m);
  if (d0 > U.z) { gl_FragColor = vec4(0.0); return; }
  float q = dot(m, W), water = d0, wet = 0.0;
  vec4 foam = vec4(0.0);
  wave(m, q, A0, A1, water, wet, foam);
  wave(m, q, B0, B1, water, wet, foam);
  float cover = 1.0 - smoothstep(0.002, 0.016, water), h = max(-water, 0.0);

  // The surface, carried along with the sheet.
  vec2 x = (m - N * U.y * 0.7) * 96.0;
  // (Bent a little, slowly: six straight waves alone draw a net of straight lines.)
  x += 1.5 * vec2(sin(x.y * 0.23 + U.x * 0.21) + 0.5 * sin(x.x * 0.41 - U.x * 0.13), sin(x.x * 0.19 - U.x * 0.17) + 0.5 * sin(x.y * 0.37 + U.x * 0.11));
  vec3 c = vec3(0.0); vec2 g = vec2(0.0);
  ripple(x, vec2(0.955, 0.296), 1.0, 0.9, 0.0, c, g); ripple(x, vec2(0.315, 0.949), 1.6, -1.2, 1.3, c, g);
  ripple(x, vec2(-0.737, 0.675), 2.3, 1.0, 2.1, c, g); ripple(x, vec2(-0.897, -0.443), 1.3, -0.7, 4.0, c, g);
  ripple(x, vec2(-0.211, -0.978), 2.9, 1.4, 0.7, c, g); ripple(x, vec2(0.776, -0.631), 1.9, 0.8, 5.2, c, g);
  c *= 0.5;
  float net = pow(min(0.2 / (abs((1.0 + c.x) * (1.0 + c.y) - c.z * c.z) + 0.14), 1.0), 1.5);

  // Thin water: the sand under it, seen a little to one side. (Where the painted foam was,
  // the sand is taken from further down the picture.)
  float kd = 1.0 - exp(-h / 0.055);
  vec2 bend = g * 0.0019 * kd;
  vec3 sand = pic(m + bend);
  if (d0 < 0.06) sand = mix(pic(m + vec2(0.0, 0.34) + bend), sand, smoothstep(0.03, 0.06, d0));
  // (Sand under water is wet sand: darker. Over it the sky's veil, the surface's own faces
  // lit from the top left, and the net.)
  vec3 thin = mix(sand * mix(vec3(1.0), vec3(0.87, 0.875, 0.85), kd), vec3(0.775, 0.845, 0.865), 0.12 * kd);
  thin *= 1.0 - dot(g, vec2(0.6, 0.8)) * 0.035 * kd;
  thin *= 1.0 + (net - 0.22) * 0.38 * kd;
  // The sea as it was painted, where it was painted and there was no foam.
  float own = (1.0 - smoothstep(-0.034, -0.012, d0)) * (1.0 - smoothstep(0.03, 0.32, k0.g));
  vec3 col = thin;
  if (own > 0.001) col = mix(thin, pic(m + g * 0.0011) * (1.0 + (net - 0.2) * 0.06), own);
  // Sand the water has left.
  float a = max(cover, smoothstep(0.0, 0.1, wet));
  if (cover < 0.999) col = mix(pic(m) * mix(vec3(1.0), vec3(0.83, 0.805, 0.765), wet), col, cover);
  col = mix(col, foam.rgb, foam.a);
  a = max(a, foam.a);
  gl_FragColor = vec4(col * a, a);
}`;

// map: the picture made by tools/prepare-ending-tide.mjs.
export function createTide({ reduced = false, map = null } = {}) {
  if (reduced || !map) return null;
  const cv = document.createElement('canvas');
  cv.className = 'fx fx-tide';
  cv.setAttribute('aria-hidden', 'true');
  cv.style.display = 'none';
  let host = null, gl = null, u = null, tex = null, failed = false;
  let crop = null, fresh = false, placed = '', clock = 0, shown = false, drawn = false, tall = false;
  // The card on the water: how far it has been taken (0 to about 1), and how fast that changes.
  const card = { at: 0, v: 0, near: null, key: '' };
  const chart = new Image();
  let chartReady = false, chartUp = false;
  chart.onload = () => { chartReady = true; };
  chart.onerror = () => { failed = true; };
  chart.src = map;

  function start() {
    gl = cv.getContext('webgl', { alpha: true, premultipliedAlpha: true, antialias: false, depth: false, stencil: false });
    if (!gl) { failed = true; return; }
    const sh = (type, src) => { const s = gl.createShader(type); gl.shaderSource(s, src); gl.compileShader(s); if (!gl.getShaderParameter(s, gl.COMPILE_STATUS)) throw new Error(gl.getShaderInfoLog(s)); return s; };
    const prog = gl.createProgram();
    gl.attachShader(prog, sh(gl.VERTEX_SHADER, VERT)); gl.attachShader(prog, sh(gl.FRAGMENT_SHADER, FRAG)); gl.linkProgram(prog);
    if (!gl.getProgramParameter(prog, gl.LINK_STATUS)) throw new Error(gl.getProgramInfoLog(prog));
    gl.useProgram(prog);
    gl.bindBuffer(gl.ARRAY_BUFFER, gl.createBuffer());
    gl.bufferData(gl.ARRAY_BUFFER, new Float32Array([-1, -1, 3, -1, -1, 3]), gl.STATIC_DRAW);
    const loc = gl.getAttribLocation(prog, 'p');
    gl.enableVertexAttribArray(loc); gl.vertexAttribPointer(loc, 2, gl.FLOAT, false, 0, 0);
    u = Object.fromEntries(['P', 'M', 'C', 'A0', 'A1', 'B0', 'B1', 'U'].map((n) => [n, gl.getUniformLocation(prog, n)]));
    tex = [0, 1].map((i) => {
      const t = gl.createTexture();
      gl.activeTexture(gl.TEXTURE0 + i);
      gl.bindTexture(gl.TEXTURE_2D, t);
      for (const [k, val] of [[gl.TEXTURE_MIN_FILTER, gl.LINEAR], [gl.TEXTURE_MAG_FILTER, gl.LINEAR], [gl.TEXTURE_WRAP_S, gl.CLAMP_TO_EDGE], [gl.TEXTURE_WRAP_T, gl.CLAMP_TO_EDGE]]) gl.texParameteri(gl.TEXTURE_2D, k, val);
      return t;
    });
    gl.uniform1i(u.P, 0); gl.uniform1i(u.M, 1);
    gl.clearColor(0, 0, 0, 0);
  }
  // The photograph and the map, into the shader. (A picture from the disk, or one too large
  // for this machine, cannot go: then there is no tide, and the still is what it was.)
  function upload() {
    const ground = host.ground;
    if (Math.max(ground.width, ground.height) > gl.getParameter(gl.MAX_TEXTURE_SIZE)) throw new Error('the sand is larger than a texture can be here');
    gl.pixelStorei(gl.UNPACK_PREMULTIPLY_ALPHA_WEBGL, false);
    gl.pixelStorei(gl.UNPACK_COLORSPACE_CONVERSION_WEBGL, gl.NONE);
    gl.activeTexture(gl.TEXTURE0);
    gl.texImage2D(gl.TEXTURE_2D, 0, gl.RGB, gl.RGB, gl.UNSIGNED_BYTE, ground);
    if (!chartUp) { gl.activeTexture(gl.TEXTURE1); gl.texImage2D(gl.TEXTURE_2D, 0, gl.RGB, gl.RGB, gl.UNSIGNED_BYTE, chart); chartUp = true; }
    fresh = false;
  }
  function size() {
    const w = host.ground.clientWidth, h = host.ground.clientHeight;
    if (!w || !h) return false;
    // (As fine as the screen, up to four and a half million pixels of it.)
    const k = Math.min(Math.min(devicePixelRatio || 1, 2) * 1.08, Math.sqrt(4.5e6 / (w * h)));
    const cw = Math.round(w * k), ch = Math.round(h * k);
    if (cv.width !== cw || cv.height !== ch) { cv.width = cw; cv.height = ch; drawn = false; }
    tall = w / h < 0.85;
    return true;
  }

  // A wave, t seconds after its front was at the painted edge (it is seen coming before that).
  // Up the sand as a thing thrown up a slope: fast, slowing to a stop. Back down slowly, the
  // foam left where it stopped and thinning, the sand behind it wet and then drying.
  function waveAt(k, t) {
    const A = SIZES[k % SIZES.length] * (tall ? 0.92 : 1), up = 2.1 + 2.2 * A, down = up * 1.9, speed = (2 * A) / up;
    let foam, gone, water;
    if (t < 0) { foam = water = speed * t; gone = 1 - smooth(-LEAD, -0.35, t); }
    else if (t < up) { const x = t / up; foam = water = A * (1 - (1 - x) * (1 - x)); gone = 0; }
    else {
      const y = clamp01((t - up) / down);
      foam = A * (1 - 0.08 * smooth(0, 1, y));
      water = A * (1 - Math.pow(y, 1.7));
      gone = smooth(0.06, 0.78, y);
    }
    const end = up + down + DRY;
    const wet = t < 0 ? 0 : 1 - smooth(up + down * 0.85, end, t);
    const dried = (A * 1.45 + 0.05) * smooth(up + down * 0.45, end, t) - 0.014;
    return { A, foam, gone, water, wet, dried, seed: 1.3 + k * 2.4, alive: t > -LEAD && t < end };
  }
  // The two that can be alive at `clock`: the one whose beat this is, and the one before it.
  // (Before the clock has started there is only the first, standing at the painted edge.)
  function waves() {
    const k = Math.max(0, Math.floor((clock + LEAD) / BEAT));
    const now = waveAt(k, clock - k * BEAT), was = k > 0 ? waveAt(k - 1, clock - (k - 1) * BEAT) : null;
    return [now, was && was.alive ? was : null];
  }

  function draw() {
    if (!size()) return;
    if (fresh) upload();
    // (The one before first: the newer wave's foam lies over the older's.)
    const [now, was] = waves(), ws = [was, now], off = [-9, 1, -9, 0];
    gl.viewport(0, 0, cv.width, cv.height);
    gl.clear(gl.COLOR_BUFFER_BIT);
    gl.uniform4f(u.C, crop.sx / crop.ih, crop.sy / crop.ih, crop.sw / crop.ih, crop.sh / crop.ih);
    let carried = 0, reach = 0.06;
    ['A', 'B'].forEach((name, i) => {
      const w = ws[i];
      gl.uniform4fv(u[`${name}0`], w ? [w.foam, w.gone, w.water, w.seed] : off);
      gl.uniform4fv(u[`${name}1`], w ? [w.wet, w.dried, 0, 0] : [0, 9, 0, 0]);
      if (w) { carried = Math.max(carried, w.water); reach = Math.max(reach, w.foam * 1.4 + 0.07); }
    });
    gl.uniform3f(u.U, clock, carried, reach);
    gl.drawArrays(gl.TRIANGLES, 0, 3);
    drawn = true;
  }

  // The card's nearest corner to the sea, along the wave's way: where the water first meets it.
  function cardNear() {
    const key = `${placed}|${host.ground.clientWidth}x${host.ground.clientHeight}`;
    if (key === card.key) return card.near;
    card.key = key;
    const b = host.post.box('end'), g = host.ground.getBoundingClientRect();
    if (!b || !g.width || !crop) return (card.near = null);
    let near = Infinity;
    for (const [sx, sy] of [[b.left, b.top], [b.right, b.top], [b.left, b.bottom], [b.right, b.bottom]]) {
      const mx = (crop.sx + ((sx - g.left) / g.width) * crop.sw) / crop.ih, my = (crop.sy + ((sy - g.top) / g.height) * crop.sh) / crop.ih;
      near = Math.min(near, mx * WAY[0] + my * WAY[1]);
    }
    return (card.near = { p: near, width: b.right - b.left });
  }
  // The card is taken by the water under it: lifted, pushed along the wave's way and turned a
  // little, on a spring so that it follows late and settles. Not while someone is writing on it.
  function floatCard(dt, running) {
    let want = 0;
    const near = running ? cardNear() : null;
    if (near && !host.post.back.contains(document.activeElement)) {
      const reach = Math.max(0, ...waves().map((w) => (w ? w.water : 0)));
      want = Math.min(1.15, Math.max(0, EDGE + reach - Math.max(EDGE, near.p)) / 0.22);
    }
    const K = 11, D = 3.6;
    for (let left = Math.min(dt, 0.1); left > 0; left -= 1 / 120) {
      const s = Math.min(left, 1 / 120);
      card.v += (K * (want - card.at) - D * card.v) * s;
      card.at += card.v * s;
    }
    if (Math.abs(card.at) < 0.0005 && Math.abs(card.v) < 0.0005 && want === 0) card.at = card.v = 0;
    const far = (near?.width ?? host.post.L?.vw ?? 1000) * 0.013 * card.at, bob = Math.sin(clock * 2.1) * 0.12 * clamp01(card.at * 3);
    host.post.float({ x: WAY[0] * far, y: WAY[1] * far, rz: -0.55 * card.at + bob * 0.5, z: 5 * card.at + 7 * bob * card.at });
  }

  return {
    mount({ ground, post }) {
      host = { ground, post };
      ground.after(cv);
    },
    // scroll.js has drawn the sand's canvas again. crop: the part of the ending's photograph
    // that is on it, or null when the canvas holds another picture.
    sandChanged(ground, part) {
      crop = part;
      fresh = !!part;
      drawn = false;
      card.key = '';
    },
    tick(dt, cam) {
      if (!host || failed) return;
      const on = !!crop && chartReady && host.post.state.pose === 'end';
      if (on !== shown) { shown = on; cv.style.display = on ? '' : 'none'; if (!on) { card.at = card.v = 0; host.post.float(null); } }
      if (!on) return;
      const tf = host.ground.style.transform;
      if (tf !== placed) { placed = tf; cv.style.transform = tf; }
      if (cam.up >= 0.999) return;
      try {
        if (!gl) start();
        if (failed) return;
        // At rest the waves run. On the way down to rest, and back up, the water stands as it was.
        const running = cam.up < 0.03;
        if (running) clock += dt;
        if (running || !drawn || fresh) draw();
        floatCard(dt, running);
      } catch (e) {
        console.warn('the tide did not start: the still picture stays', e);
        failed = true;
        cv.style.display = 'none';
        host.post.float(null);
      }
    },
    // (For the checks: the clock, and a wave at a given second of it.)
    get clock() { return clock; },
    set clock(t) { clock = t; drawn = false; },
    waveAt,
  };
}
