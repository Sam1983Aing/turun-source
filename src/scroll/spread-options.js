// Three ways to set the words beside a spread's card (round 18, 8 October 2026). Sam, looking
// at "Six walkers. One guide.": "you can enhance the layout a little bit. It's just how the
// text is presented. Right now it feels a little bit average. Something that is super clean
// to read, but it feels a little bit more premium ... this is just first iteration layout."
// Built for him to compare, behind a switch. Without the switch the page is as it was.
//
//   ?spread=ledger    01 Ledger     the three rows, numbered, what matters first and large,
//                                   its name small at the far end of the line
//   ?spread=figures   02 Figures    the facts as three large figures side by side, a word
//                                   under each, and one sentence below
//   ?spread=line      03 The Line   the walk drawn: a staircase from the railing down to the
//                                   sand that draws itself, a dot walking down it to where
//                                   this card is. For the beach, the day's arc and its sun.
//
// All three take away the long terracotta rule. The headline is the page's in every one.
// What they add is marked for spreads.js, which brings the words in: data-sp-in fades up in
// its turn, data-sp-draw is drawn (its --d goes from 0 to 1).
//
// When Sam has chosen: the one he keeps moves into index.html and page.css, and this file
// and its hook in scroll.js go.

const el = (tag, cls, html) => { const e = document.createElement(tag); if (cls) e.className = cls; if (html != null) e.innerHTML = html; return e; };

// What each spread says, cut the way the figures and the line need it.
const SAY = {
  walk: {
    figures: [['06:10', '', 'Leaves', 'from the railing'], ['150', 'm', 'Down', 'about 400 steps'], ['50', 'min', 'On the steps', 'railing to sand']],
    line: 'You carry water. We carry the rest.',
    stations: [['06:10', 'The railing', '150 m'], ['You are here', 'The ridge', '93 m'], ['07:00', 'The sand', '0 m']],
    under: 'About 400 steps, fifty minutes. You carry water. We carry the rest.',
  },
  beach: {
    figures: [['07:10', '', 'Breakfast', 'on the sand'], ['All day', '', 'Shade', 'under the overhang, and nobody else'], ['17:40', '', 'The jukung', 'round the head and home']],
    line: null,
    stations: [['07:10', 'Breakfast on the sand'], ['All day', 'Shade under the overhang, and nobody else'], ['17:40', 'The jukung, round the head and home']],
    under: null,
  },
};

// The walk as a line: a short level at the railing, twenty-four steps down, a short level of
// sand. And how far along it the ridge is (93 m of the 150: a little over a third of the way).
function stairs() {
  const N = 24, run = (594 - 40 - 40) / N, drop = 130 / N;
  let d = 'M6 30 h34';
  for (let i = 0; i < N; i++) d += ` h${run.toFixed(2)} v${drop.toFixed(2)}`;
  d += ' h40';
  const at = ((150 - 93) / 150) * N, len = 34 + N * (run + drop) + 40;
  return { d, ridge: [40 + at * run, 30 + at * drop], share: (34 + at * (run + drop)) / len };
}
const ARC = 'M10 168 Q300 -70 590 168';

function figures(node, say) {
  const wrap = el('div', 'spf');
  for (const [fig, unit, label, note] of say.figures) {
    const cell = el('div', 'spf__cell');
    cell.dataset.spIn = '';
    cell.append(el('div', 'spf__fig', `${fig}${unit ? `<small>${unit}</small>` : ''}`), el('div', 'spf__label', label), el('div', 'spf__note', note));
    wrap.append(cell);
  }
  node.querySelector('.sp__head').after(wrap);
  if (say.line) { const p = el('p', 'spf__line', say.line); p.dataset.spIn = ''; wrap.after(p); }
}

function line(node, say, id) {
  const wrap = el('div', `spl spl--${id}`);
  wrap.dataset.spDraw = '';
  const s = stairs(), path = id === 'walk' ? s.d : ARC, share = id === 'walk' ? s.share : 0.5;
  const dots = id === 'walk' ? [[6, 30], s.ridge, [594, 160]] : [[10, 168], [300, 49], [590, 168]];
  const level = id === 'walk' ? 160 : 168;
  wrap.style.setProperty('--share', share.toFixed(4));
  wrap.innerHTML = `<svg viewBox="0 0 600 200" aria-hidden="true">
    <defs><linearGradient id="spl-ink-${id}" x1="0" y1="0" x2="600" y2="0" gradientUnits="userSpaceOnUse"><stop offset="0" stop-color="#2bb3bf"/><stop offset="1" stop-color="#0e5d7f"/></linearGradient></defs>
    <path class="spl__sea" d="M0 ${level} H600"/>
    <path class="spl__path" d="${path}" pathLength="1" stroke="url(#spl-ink-${id})"/>
    ${id === 'walk' ? `<path class="spl__tick" d="M6 38 V78"/><path class="spl__tick" d="M594 152 V126"/>` : ''}
    ${dots.map(([x, y], i) => `<circle class="spl__dot${i === 1 ? ' spl__dot--here' : ''}" cx="${x.toFixed(1)}" cy="${y.toFixed(1)}" r="${i === 1 ? 4.4 : 3.6}"/>`).join('')}
    <g class="spl__walker" style="offset-path: path('${path}')"><circle class="spl__halo" r="11"/><circle r="5.2"/></g>
  </svg>`;
  say.stations.forEach(([a, b, c], i) => {
    const st = el('div', `spl__st spl__st--${i}`, id === 'walk'
      ? (i === 1 ? `<i>${a}</i><b>${b}</b><span>${c}</span>` : `<b>${a}</b><span>${b}, ${c}</span>`)
      : `<b>${a}</b><span>${b}</span>`);
    st.dataset.spIn = '';
    wrap.append(st);
  });
  node.querySelector('.sp__head').after(wrap);
  if (say.under) { const p = el('p', 'spf__line', say.under); p.dataset.spIn = ''; wrap.after(p); }
}

const CSS = `
html[class*="sp-opt-"] .sp__rule { display: none; }

/* 01 Ledger */
html.sp-opt-ledger .sp__rows { counter-reset: row; margin-top: 4px; border-top: 1px solid rgba(20, 18, 14, 0.24); }
html.sp-opt-ledger .sp__rows div { counter-increment: row; grid-template-columns: 2.9rem 1fr auto; padding: 17px 0 16px; border-bottom: 1px solid rgba(20, 18, 14, 0.24); }
html.sp-opt-ledger .sp__rows div::before { content: "0" counter(row); font: 500 11.5px/1 var(--type); letter-spacing: 0.16em; font-variant-numeric: tabular-nums; color: #cb5d30; }
html.sp-opt-ledger .sp__rows dd { order: 1; font: 400 clamp(1.2rem, 1rem + 0.62vw, 1.56rem)/1.24 var(--type); letter-spacing: -0.008em; color: var(--ink); }
html.sp-opt-ledger .sp__rows dt { order: 2; padding-left: 22px; text-align: right; font-size: 10.5px; color: rgba(20, 18, 14, 0.58); }

/* 02 Figures (and the sentence under 03) */
html.sp-opt-figures .sp__rows, html.sp-opt-line .sp__rows { display: none; }
.spf { display: grid; grid-template-columns: repeat(3, minmax(0, 1fr)); margin-top: 8px; }
.spf__cell { display: grid; align-content: start; gap: 10px; padding: 2px 0 2px 24px; border-left: 1px solid rgba(20, 18, 14, 0.22); }
.spf__cell:first-child { padding-left: 0; border-left: 0; }
.spf__fig { font: 400 clamp(2.6rem, 1.2rem + 2.5vw, 4.1rem)/0.9 var(--serif); letter-spacing: -0.022em; color: var(--ink); white-space: nowrap; }
.spf__fig small { margin-left: 0.34em; font: 500 0.27em/1 var(--type); letter-spacing: 0.18em; text-transform: uppercase; color: rgba(20, 18, 14, 0.72); }
.spf__label { margin-top: 4px; font: 500 11px/1.2 var(--type); letter-spacing: 0.2em; text-transform: uppercase; color: #cb5d30; }
.spf__note { padding-right: 14px; font: 400 1.02rem/1.36 var(--type); color: rgba(20, 18, 14, 0.8); text-wrap: balance; }
.spf__line { margin: 4px 0 0; padding-top: 17px; border-top: 1px solid rgba(20, 18, 14, 0.22); font: 400 1.12rem/1.4 var(--type); color: rgba(20, 18, 14, 0.86); }

/* 03 The Line */
.spl { position: relative; margin-top: 6px; --d: 1; }
.spl svg { display: block; width: 100%; height: auto; overflow: visible; }
.spl__sea { fill: none; stroke: rgba(20, 18, 14, 0.36); stroke-width: 1; stroke-dasharray: 1 6; stroke-linecap: round; }
.spl__path { fill: none; stroke-width: 2.3; stroke-linecap: round; stroke-linejoin: round; stroke-dasharray: 1; stroke-dashoffset: calc(1 - var(--d)); }
.spl__tick { fill: none; stroke: rgba(20, 18, 14, 0.4); stroke-width: 1; opacity: var(--d); }
.spl__dot { fill: #f7efe0; stroke: #12708c; stroke-width: 1.6; opacity: calc(var(--d) * 3); }
.spl__dot--here { stroke: #cb5d30; }
.spl__walker { offset-rotate: 0deg; offset-distance: calc(var(--d) * var(--share) * 100%); fill: #e5804c; opacity: calc(var(--d) * 6); }
.spl__halo { fill: #e5804c; opacity: 0.26; transform-box: fill-box; transform-origin: center; animation: spl-halo 2.6s ease-in-out infinite; }
@keyframes spl-halo { 0%, 100% { transform: scale(0.7); opacity: 0.3; } 50% { transform: scale(1.25); opacity: 0.08; } }
.spl__st { position: absolute; display: grid; align-content: start; gap: 5px; }
.spl__st b { font: 500 clamp(1.2rem, 1rem + 0.5vw, 1.5rem)/1 var(--type); letter-spacing: -0.005em; color: var(--ink); font-variant-numeric: tabular-nums; }
.spl__st span { font: 500 10.5px/1.35 var(--type); letter-spacing: 0.18em; text-transform: uppercase; color: rgba(20, 18, 14, 0.7); }
.spl__st i { font: 500 10.5px/1 var(--type); font-style: normal; letter-spacing: 0.2em; text-transform: uppercase; color: #cb5d30; }
.spl--walk .spl__st--0 { left: 0; top: 43%; }
.spl--walk .spl__st--1 { left: 43%; top: 9%; }
.spl--walk .spl__st--2 { right: 0; bottom: 40%; text-align: right; }
.spl--beach .spl__st span { font: 400 0.98rem/1.32 var(--type); letter-spacing: 0; text-transform: none; color: rgba(20, 18, 14, 0.8); text-wrap: balance; }
/* (The day's two ends are written under the ends of its arc, and "all day" inside it.) */
.spl--beach { display: grid; grid-template-columns: 1fr 1fr; }
.spl--beach svg { grid-column: 1 / -1; }
.spl--beach .spl__st--0, .spl--beach .spl__st--2 { position: static; max-width: 82%; margin-top: -16px; }
.spl--beach .spl__st--2 { justify-self: end; text-align: right; }
.spl--beach .spl__st--1 { left: 27%; width: 46%; top: 0; padding-top: 12.4%; text-align: center; }

@media (max-aspect-ratio: 85/100) {
  html.sp-opt-ledger .sp__rows div { grid-template-columns: 2.1rem 1fr auto; padding: 10px 0 9px; }
  html.sp-opt-ledger .sp__rows dd { font-size: 1.08rem; }
  html.sp-opt-ledger .sp__rows dt { padding-left: 12px; font-size: 9.5px; letter-spacing: 0.16em; }
  .spf { margin-top: 2px; }
  .spf__cell { gap: 6px; padding-left: 11px; }
  .spf__fig { font-size: 2.05rem; }
  .spf__label { margin-top: 2px; font-size: 9.5px; letter-spacing: 0.16em; }
  .spf__note { padding-right: 6px; font-size: 0.84rem; line-height: 1.3; }
  .spf__line { margin-top: 0; padding-top: 10px; font-size: 0.98rem; }
  /* (No room to write on the drawing: its three stations stand in a row under it.) */
  .spl { display: grid; grid-template-columns: repeat(3, minmax(0, 1fr)); gap: 8px 10px; margin-top: 0; }
  .spl svg { grid-column: 1 / -1; }
  .spl .spl__st { position: static; max-width: none; width: auto; margin-top: 0; padding-top: 0; justify-self: stretch; text-align: left; align-content: start; }
  .spl .spl__st--1 { text-align: center; }
  .spl .spl__st--2 { text-align: right; }
  .spl__st b { font-size: 1.08rem; }
  .spl__st span, .spl--beach .spl__st span { font-size: 9px; letter-spacing: 0.12em; }
  .spl--beach .spl__st span { font-size: 0.8rem; letter-spacing: 0; }
  .spl__tick { display: none; }
}
`;

// name: 'ledger', 'figures' or 'line'. Run before the spreads are made (createSpreads reads
// what this adds).
export function spreadOption(name) {
  if (!['ledger', 'figures', 'line'].includes(name)) return;
  document.documentElement.classList.add(`sp-opt-${name}`);
  const style = el('style');
  style.textContent = CSS;
  document.head.append(style);
  if (name === 'ledger') return;
  for (const node of document.querySelectorAll('.sp[data-hold]')) {
    const say = SAY[node.dataset.hold];
    if (!say) continue;
    if (name === 'figures') figures(node, say); else line(node, say, node.dataset.hold);
  }
}
