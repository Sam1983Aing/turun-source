// The tide at the ending (v35 rounds 17 and 19).
//
// The last card lies on sand with a line of footprints across it (Sam's plate, his pick: "use
// the footstep image ... I think that fits well for the wave"), and the sea comes in over that
// sand from its top left corner and goes out again, in code. "Make it ultra detailed and ultra
// realistic, for the movement."
//
// Nothing here is painted by hand. The water and the foam are a photograph's: another picture
// of sand with the sea's edge in its corner (assets/hero/sand-end-sea.jpg, which the card lay
// on until round 19), never shown as it is, carried over the footprints' sand:
//
//   the water    what the photographed water does to its own sand (how much darker, how much
//                bluer, where the sun's net falls on its floor) is done to the sand under the
//                card, point for point. So the footprints are still there under the water,
//                and the light on the floor is real light. It moves: two copies of it drift
//                round each other and the darker of the two is taken, which is how a net of
//                light slides and folds.
//   the foam     the photograph's own foam (the only thing in it white in all three
//                channels), laid along the front of each wave. It thins from its weakest
//                bubbles first, as foam does.
//   the wet sand what a wave leaves: the same sand darker, to a clear line where the wave
//                stopped, drying from that line back. Just behind the water as it leaves the
//                sand still shines.
//
// How the photograph is carried. A map made by tools/prepare-ending-tide.mjs says how far any
// point of it is from its water's edge. A wave is one number, how far its front has come, and
// a point on the card's sand looks up the point of the photograph that is as far behind the
// photograph's edge as it is behind the wave's front: so the front has the photograph's own
// wandering edge and lace. Further behind, the photograph is fitted to the sea there is: its
// sea is a triangle in a corner and so is this one, larger or smaller with the wave, and the
// one is laid on the other, by the same stretch everywhere (a first try squeezed it along the
// way and pulled it across near the corner, and the light on the floor came out as rays).
// Each wave's front also runs further in some places than in others, differently every time.
//
// How it moves. A wave comes up the sand as a thing thrown up a slope does, fast and slowing
// to a stop. Then its water runs back, slowly at first, and its foam does not: it stays near
// where the wave stopped and goes thin. The next arrives over the last of it. They are not all
// the same size, and the larger reach under the card: it is lifted a little, pushed and turned,
// and settles back (unless someone is writing on it). Between waves the sea's edge laps.
//
// It runs only while the last card is at rest. Where a picture cannot be read into a shader (a
// page opened from the disk) there is no sea, and the card lies on its sand.

const clamp01 = (v) => Math.min(1, Math.max(0, v));
const smooth = (a, b, v) => { const t = clamp01((v - a) / (b - a)); return t * t * (3 - 2 * t); };

// From tools/prepare-ending-tide.mjs, of the sea's photograph: the wave's way across it, its
// edge's place along that way (in heights of the picture, x right and y down), its sand's
// colour, and what the map's red spans.
const WAY = [0.6829, 0.7305], SEA_EDGE = 0.3989, SEA_SAND = [0.892, 0.778, 0.633], NEAR = 0.08;
// Where the sea's edge rests on the card's sand, along the same way: short of the first footprint.
const EDGE = 0.3;
// How far past that each wave comes (heights of the picture), in turn.
const SIZES = [0.2, 0.38, 0.14, 0.3, 0.11, 0.35];
const BEAT = 7.8;          // seconds from one wave to the next
const LEAD = 1.2;          // a wave is seen coming for this long before it is at the edge
const DRY = 6;             // the sand it wetted is dry this long after its water is back

const VERT = 'attribute vec2 p; varying vec2 v; void main() { v = vec2(p.x * 0.5 + 0.5, 0.5 - p.y * 0.5); gl_Position = vec4(p, 0.0, 1.0); }';
// P the card's sand as the page has drawn it. S the sea's photograph. M its map. C the part of
// the sand's picture that is drawn (left, top, width, height in heights of the picture). A0,
// B0: a wave (how far its foam has come, how much of the foam has gone, how far its water
// reaches, its shape). A1, B1: the sand it has left (how wet, how far in it has dried). U: the
// time, how far the water has carried its surface, and how far along the way anything is drawn.
const FRAG = `
precision highp float;
uniform sampler2D P, S, M;
uniform vec4 C, A0, A1, B0, B1;
uniform vec3 U;
varying vec2 v;
const vec2 N = vec2(${WAY[0]}, ${WAY[1]}), W = vec2(${WAY[1]}, -${WAY[0]});
const float P0 = ${SEA_EDGE}, EDGE = ${EDGE.toFixed(4)}, NEAR = ${NEAR}, WIDE = 1.6;
const vec3 SAND = vec3(${SEA_SAND.join(', ')});

vec3 ground(vec2 m) { return texture2D(P, clamp((m - C.xy) / C.zw, 0.0, 1.0)).rgb; }
// (Past the photograph's edge it is met again coming back, not drawn out in lines.)
vec2 at(vec2 s) { vec2 q = abs(vec2(s.x / WIDE, s.y)); return clamp(1.0 - abs(1.0 - q), 0.002, 0.998); }
vec3 sea(vec2 s) { return texture2D(S, at(s)).rgb; }
vec3 chart(vec2 s) { return texture2D(M, at(s)).rgb; }
// How far a point of the photograph is from its water's edge (less than nothing: in the water).
float edge(vec3 k) { return (k.r * 255.0 - 128.0) / 127.0 * NEAR; }
float least(vec3 c) { return min(c.r, min(c.g, c.b)); }
// A wave's front runs further in some places than in others, and that changes slowly. In
// long shapes only: the photograph's own edge gives the small ones. (Short steep ones turned
// the front across the way the foam is laid, and drew it out into streaks.)
float lobes(float r, float s) { return 0.16 * sin(r * 2.9 + s + U.x * 0.07) + 0.07 * sin(r * 6.3 + s * 1.7 + 1.0 - U.x * 0.05) + 0.022 * sin(r * 13.0 + s * 2.3 + 2.0); }
// The point of the photograph for a point of the sand (a along the way, r across it) under a
// front that is at f. At the front, as far behind the photograph's edge as it is behind the
// front. From there back to the corner the photograph's sea is fitted to this one: along the
// way by a power that keeps that first rule, and across by as much as the one is narrower
// than the other there. (So the photograph is stretched by the same amount everywhere.)
vec2 src(float a, float r, float sh) {
  float f = max(EDGE + sh, 0.05), b = max(a, 0.002);
  float p = b < f ? P0 * pow(b / f, f / P0) : P0 + (b - f);
  return N * p + W * (r * p / b);
}
void wave(float a, float r, vec4 w, vec4 x, float k, inout float wet, inout vec4 foam) {
  if (w.x < -8.0) return;
  vec2 mf = src(a, r, w.x * k);
  vec3 c = chart(mf);
  float df = edge(c);
  // (How far behind where the foam stopped: the map knows it near the edge, the way itself beyond.)
  float back = mix(-df, EDGE + w.x * k - a, smoothstep(0.05, 0.078, -df));
  // Wet up to a clear line a little past where the foam stopped, and wetter nearer the water.
  wet = max(wet, x.x * smoothstep(x.y - 0.008, x.y + 0.008, back) * (0.72 + 0.28 * smoothstep(0.0, 0.16, back - x.y)));
  if (w.y < 0.999 && c.b > 0.02) {
    vec3 ph = sea(mf);
    float al = smoothstep(mix(0.6, 0.9, w.y), mix(0.82, 1.0, w.y), least(ph)) * smoothstep(0.04, 0.4, c.b) * (1.0 - w.y * w.y);
    float both = al + foam.a * (1.0 - al);
    foam = vec4(mix(foam.rgb, ph, al / max(both, 0.0001)), both);
  }
}
void main() {
  vec2 m = C.xy + v * C.zw;
  float a = dot(m, N), r = dot(m, W);
  if (a > U.z) { gl_FragColor = vec4(0.0); return; }
  float kA = 1.0 + lobes(r, A0.w), kB = 1.0 + lobes(r, B0.w);
  // The water: the sea at rest, its edge lapping, or as far as a wave has brought it.
  float lap = 0.011 * sin(U.x * 0.83 + r * 3.1) + 0.006 * sin(U.x * 1.31 - r * 7.3);
  float sw = max(lap, max(A0.z * kA, B0.z * kB));
  vec2 ms = src(a, r, sw);
  vec3 k = chart(ms);
  float ds = edge(k);
  float cover = 1.0 - smoothstep(-0.004, 0.005, ds), deep = clamp(-ds / NEAR, 0.0, 1.0);
  float wet = 0.0;
  vec4 foam = vec4(0.0);
  wave(a, r, A0, A1, kA, wet, foam);
  wave(a, r, B0, B1, kB, wet, foam);

  // What the photographed water does to its sand: two copies of it drifting round each other,
  // and mostly the darker of the two, so the light on its floor slides and folds.
  vec2 o1 = 0.012 * vec2(cos(U.x * 0.52), sin(U.x * 0.52)), o2 = 0.012 * vec2(cos(2.1 - U.x * 0.43), sin(2.1 - U.x * 0.43));
  vec3 s1 = sea(ms + o1 * deep), s2 = sea(ms + o2 * deep), both = min(s1, s2);
  vec3 lit = (0.3 * (s1 + s2) + 0.5 * both) / SAND;
  // (Where the photograph has its foam, clear thin water: the foam is laid on by its own wave.)
  lit = mix(lit, vec3(0.9, 0.925, 0.9), smoothstep(0.6, 0.82, least(both)) * smoothstep(0.04, 0.4, k.b));
  // (Deeper in, a little more of the sea's own colour.)
  lit *= mix(vec3(1.0), vec3(0.84, 0.965, 0.99), smoothstep(0.08, 0.85, 1.0 - a / max(EDGE + sw, 0.05)) * cover);
  lit = min(lit, vec3(1.32));
  // The sand under it is seen a little to one side, by the surface's slope (carried with the water).
  vec2 x = (m - N * U.y * 0.7) * 60.0;
  vec2 slope = cos(dot(x, vec2(0.955, 0.296)) + U.x * 0.9) * vec2(0.955, 0.296) + cos(dot(x, vec2(-0.737, 0.675)) * 1.7 + U.x * 1.2 + 2.1) * vec2(-0.434, 0.397) + cos(dot(x, vec2(0.315, -0.949)) * 2.6 - U.x * 1.5 + 0.7) * vec2(0.121, -0.365);
  vec3 under = ground(m + slope * 0.0021 * deep) * lit;
  // (Its very edge catches the light.)
  under += vec3(1.0, 0.97, 0.9) * 0.07 * (1.0 - smoothstep(0.0, 0.006, abs(ds + 0.003)));

  // The sand the water has left: darker, and just behind the water still shining.
  vec3 damp = ground(m) * mix(vec3(1.0), vec3(0.83, 0.805, 0.765), wet);
  damp += vec3(0.8, 0.88, 0.92) * 0.085 * wet * exp(-max(ds, 0.0) / 0.03);
  vec3 col = mix(damp, min(under, vec3(1.0)), cover);
  col = mix(col, foam.rgb, foam.a);
  float al = max(max(cover, smoothstep(0.0, 0.1, wet)), foam.a);
  gl_FragColor = vec4(col * al, al);
}`;

// sea: the photograph the water and the foam are taken from. map: the picture made of it by
// tools/prepare-ending-tide.mjs.
export function createTide({ reduced = false, sea = null, map = null } = {}) {
  if (reduced || !map || !sea) return null;
  const cv = document.createElement('canvas');
  cv.className = 'fx fx-tide';
  cv.setAttribute('aria-hidden', 'true');
  cv.style.display = 'none';
  let host = null, gl = null, u = null, failed = false;
  let crop = null, fresh = false, placed = '', clock = 0, shown = false, drawn = false, tall = false, sent = false;
  // The card on the water: how far it has been taken (0 to about 1), and how fast that changes.
  const card = { at: 0, v: 0, near: null, key: '' };
  const pics = [sea, map].map((src) => { const img = new Image(); img.onerror = () => { failed = true; }; img.src = src; return img; });
  const ready = () => pics.every((i) => i.complete && i.naturalWidth > 0);

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
    u = Object.fromEntries(['P', 'S', 'M', 'C', 'A0', 'A1', 'B0', 'B1', 'U'].map((n) => [n, gl.getUniformLocation(prog, n)]));
    for (let i = 0; i < 3; i++) {
      gl.activeTexture(gl.TEXTURE0 + i);
      gl.bindTexture(gl.TEXTURE_2D, gl.createTexture());
      for (const [k, val] of [[gl.TEXTURE_MIN_FILTER, gl.LINEAR], [gl.TEXTURE_MAG_FILTER, gl.LINEAR], [gl.TEXTURE_WRAP_S, gl.CLAMP_TO_EDGE], [gl.TEXTURE_WRAP_T, gl.CLAMP_TO_EDGE]]) gl.texParameteri(gl.TEXTURE_2D, k, val);
    }
    gl.uniform1i(u.P, 0); gl.uniform1i(u.S, 1); gl.uniform1i(u.M, 2);
    gl.clearColor(0, 0, 0, 0);
  }
  // The pictures, into the shader. (One from the disk, or one too large for this machine,
  // cannot go: then there is no sea.)
  function upload() {
    const ground = host.ground, most = gl.getParameter(gl.MAX_TEXTURE_SIZE);
    if (Math.max(ground.width, ground.height, pics[0].naturalWidth, pics[0].naturalHeight) > most) throw new Error('a picture is larger than a texture can be here');
    gl.pixelStorei(gl.UNPACK_PREMULTIPLY_ALPHA_WEBGL, false);
    gl.pixelStorei(gl.UNPACK_COLORSPACE_CONVERSION_WEBGL, gl.NONE);
    gl.activeTexture(gl.TEXTURE0);
    gl.texImage2D(gl.TEXTURE_2D, 0, gl.RGB, gl.RGB, gl.UNSIGNED_BYTE, ground);
    if (!sent) {
      pics.forEach((img, i) => { gl.activeTexture(gl.TEXTURE1 + i); gl.texImage2D(gl.TEXTURE_2D, 0, gl.RGB, gl.RGB, gl.UNSIGNED_BYTE, img); });
      sent = true;
    }
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

  // A wave, t seconds after its front was at the sea's edge (it is seen coming before that).
  // Up the sand as a thing thrown up a slope: fast, slowing to a stop. Back down slowly, the
  // foam left near where it stopped and thinning, the sand behind it wet and then drying.
  function waveAt(k, t) {
    const A = SIZES[k % SIZES.length] * (tall ? 0.9 : 1), up = 2.0 + 2.3 * A, down = up * 2.0, speed = (2 * A) / up;
    let foam, gone, water;
    if (t < 0) { foam = water = speed * t * 0.55; gone = 1 - smooth(-LEAD, -0.3, t); }
    else if (t < up) { const x = t / up; foam = water = A * (1 - (1 - x) * (1 - x)); gone = 0; }
    else {
      const y = clamp01((t - up) / down);
      // (The foam is dragged a little way back with the water, then left.)
      foam = A * (1 - 0.13 * smooth(0, 0.7, y));
      water = A * (1 - Math.pow(y, 1.6));
      gone = smooth(0.05, 0.8, y);
    }
    const end = up + down + DRY;
    const wet = t < 0 ? 0 : 1 - smooth(up + down * 0.85, end, t);
    const dried = (A * 1.45 + 0.05) * smooth(up + down * 0.45, end, t) - 0.014;
    return { A, foam, gone, water, wet, dried, seed: 1.3 + k * 2.4, alive: t > -LEAD && t < end };
  }
  // The two that can be alive at `clock`: the one whose beat this is, and the one before it.
  // (Before the clock has started there is only the first, standing at the sea's edge.)
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
    let carried = 0, reach = 0.05;
    ['A', 'B'].forEach((name, i) => {
      const w = ws[i];
      gl.uniform4fv(u[`${name}0`], w ? [w.foam, w.gone, w.water, w.seed] : off);
      gl.uniform4fv(u[`${name}1`], w ? [w.wet, w.dried, 0, 0] : [0, 9, 0, 0]);
      if (w) { carried = Math.max(carried, w.water); reach = Math.max(reach, w.foam * 1.4 + 0.05); }
    });
    gl.uniform3f(u.U, clock, carried, EDGE + reach + 0.05);
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
    // scroll.js has drawn the sand's canvas again. part: the part of the ending's photograph
    // that is on it, or null when the canvas holds another picture.
    sandChanged(ground, part) {
      crop = part;
      fresh = !!part;
      drawn = false;
      card.key = '';
    },
    tick(dt, cam) {
      if (!host || failed) return;
      const on = !!crop && ready() && host.post.state.pose === 'end';
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
        console.warn('the tide did not start: the card lies on its sand', e);
        failed = true;
        cv.style.display = 'none';
        host.post.float(null);
      }
    },
    // (For the checks: the clock, a wave at a given second of it, and where the card meets the water.)
    get clock() { return clock; },
    set clock(t) { clock = t; drawn = false; },
    get near() { return cardNear(); },
    waveAt,
  };
}
