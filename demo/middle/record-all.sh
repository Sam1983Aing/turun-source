#!/bin/sh
# Records Now and the three options for the middle of the page, desktop and phone, on one
# scroll plan (demo/middle/plan.txt). Needs the page served at http://localhost:5181/.
cd "$(dirname "$0")/../.." || exit 1
R=~/.claude/skills/demo-options/scripts/record.mjs
PLAN="$(cat demo/middle/plan.txt)"
for o in now notes bookmark spreads; do
  if [ "$o" = now ]; then U="http://localhost:5181/"; else U="http://localhost:5181/?middle=$o"; fi
  node $R --url "$U" --out demo/middle/clips/$o-d.mp4 --scroll "$PLAN" --wait "window.__ready === true" --settle 2500 2>&1 | tail -2
  node $R --url "$U" --out demo/middle/clips/$o-p.mp4 --scroll "$PLAN" --wait "window.__ready === true" --settle 2500 --phone --dpr 2 2>&1 | tail -2
done
