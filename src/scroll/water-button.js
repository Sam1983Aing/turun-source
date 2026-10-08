// Water in the buttons (v35 round 15). Sam pointed at a "water ripple" button (ThreeUI's, a
// members' component whose source could not be read here) and asked for that feeling, quieter:
// "the water effect feels a bit too strong, the glow". This is the page's own, made for it.
//
// The button's face is a small pool: a grid of heights, one cell for every two pixels, that
// obeys the wave equation (each cell goes to the mean of its four neighbours, less where it
// was, times a little damping). The pointer moving over it drags a wake, a press drops a
// stone in, and now and then a drop falls on its own. It is lit from the top left by its
// slope and nothing else: no glow, no colour of its own beyond the pen's blue it sits in.
// When the pool is still nothing is drawn.

const CELL = 2;            // pixels to a cell
const DAMP = 0.986;        // what a wave keeps each step
const DEEP = [[30, 58, 92], [19, 32, 54]];     // the face, top and bottom (the pen's blue)
const LIGHT = [150, 226, 232], SHADE = [4, 10, 22];

function pool(btn, { reduced }) {
  const c = document.createElement('canvas');
  c.className = 'button__water';
  c.setAttribute('aria-hidden', 'true');
  btn.prepend(c);
  const ctx = c.getContext('2d');
  let W = 0, H = 0, cur = null, old = null, img = null, running = false, lastDrop = performance.now(), wait = 2600, px = -1, py = -1;

  function size() {
    const w = Math.max(8, Math.round(btn.offsetWidth / CELL)), h = Math.max(6, Math.round(btn.offsetHeight / CELL));
    if (w === W && h === H) return;
    W = w; H = h; c.width = W; c.height = H;
    cur = new Float32Array(W * H); old = new Float32Array(W * H);
    img = ctx.createImageData(W, H);
    draw();
  }
  // A stone of radius r cells at x, y (cells): the water under it goes down by `amp`.
  function drop(x, y, r, amp) {
    for (let j = Math.max(1, Math.floor(y - r)); j <= Math.min(H - 2, Math.ceil(y + r)); j++) for (let i = Math.max(1, Math.floor(x - r)); i <= Math.min(W - 2, Math.ceil(x + r)); i++) {
      const d = Math.hypot(i - x, j - y) / r;
      if (d < 1) cur[j * W + i] -= amp * (0.5 + 0.5 * Math.cos(Math.PI * d));
    }
    if (!running && !reduced) { running = true; requestAnimationFrame(frame); }
  }
  function step() {
    let moving = 0;
    for (let j = 1; j < H - 1; j++) for (let i = 1, k = j * W + 1; i < W - 1; i++, k++) {
      const v = ((cur[k - 1] + cur[k + 1] + cur[k - W] + cur[k + W]) * 0.5 - old[k]) * DAMP;
      old[k] = v;
      moving += v < 0 ? -v : v;
    }
    [cur, old] = [old, cur];
    return moving / (W * H);
  }
  function draw() {
    const d = img.data;
    for (let j = 0; j < H; j++) {
      const v = j / (H - 1), base = [0, 1, 2].map((n) => DEEP[0][n] + (DEEP[1][n] - DEEP[0][n]) * v);
      for (let i = 0; i < W; i++) {
        const k = j * W + i, o = k * 4;
        // The slope, towards the light (the top left): a face turned to it is lit, one turned away is dark.
        const sx = cur[Math.min(W - 1, i + 1) + j * W] - cur[Math.max(0, i - 1) + j * W], sy = cur[i + Math.min(H - 1, j + 1) * W] - cur[i + Math.max(0, j - 1) * W];
        const l = sx * 0.62 + sy * 0.78, up = l > 0 ? Math.min(l * 0.42, 0.5) : 0, down = l < 0 ? Math.min(-l * 0.5, 0.55) : 0;
        d[o] = base[0] + (LIGHT[0] - base[0]) * up + (SHADE[0] - base[0]) * down;
        d[o + 1] = base[1] + (LIGHT[1] - base[1]) * up + (SHADE[1] - base[1]) * down;
        d[o + 2] = base[2] + (LIGHT[2] - base[2]) * up + (SHADE[2] - base[2]) * down;
        d[o + 3] = 255;
      }
    }
    ctx.putImageData(img, 0, 0);
  }
  function frame() {
    const moving = step();
    draw();
    if (moving > 0.0015) requestAnimationFrame(frame);
    else { running = false; cur.fill(0); old.fill(0); draw(); }
  }

  const at = (ev) => { const r = btn.getBoundingClientRect(); return [((ev.clientX - r.left) / r.width) * W, ((ev.clientY - r.top) / r.height) * H]; };
  btn.addEventListener('pointermove', (ev) => {
    const [x, y] = at(ev), far = px < 0 ? 0 : Math.hypot(x - px, y - py);
    px = x; py = y;
    if (far > 0.4) drop(x, y, 2.6, Math.min(far, 6) * 0.16);
  }, { passive: true });
  btn.addEventListener('pointerleave', () => { px = py = -1; }, { passive: true });
  btn.addEventListener('pointerdown', (ev) => { const [x, y] = at(ev); drop(x, y, 4.5, 2.4); lastDrop = performance.now(); }, { passive: true });
  new ResizeObserver(size).observe(btn);
  size();
  return {
    // A drop of its own, now and then, if the button is there to be seen.
    idle(now) {
      if (reduced || now - lastDrop < wait || document.hidden || !W) return;
      const r = btn.getBoundingClientRect();
      if (!r.width || r.bottom < 0 || r.top > innerHeight || getComputedStyle(btn).visibility !== 'visible') return;
      lastDrop = now; wait = 3800 + Math.random() * 3400;
      drop(W * (0.16 + 0.5 * Math.random()), H * (0.3 + 0.4 * Math.random()), 3.2, 1.5);
    },
  };
}

export function waterButtons({ reduced = false } = {}) {
  const pools = [...document.querySelectorAll('.button')].map((b) => pool(b, { reduced }));
  if (!reduced) setInterval(() => { const now = performance.now(); for (const p of pools) p.idle(now); }, 500);
}
