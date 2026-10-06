#!/bin/sh
# Records Now and the three lettering options, desktop and phone, on one scroll plan
# (demo/type/plan.txt), from the loader lifting. Needs the page at http://localhost:5181/.
cd "$(dirname "$0")/../.." || exit 1
R=~/.claude/skills/demo-options/scripts/record.mjs
PLAN="$(cat demo/type/plan.txt)"
BEGUN="performance.getEntriesByName('kl:begin').length > 0"
for o in now water caramel comforter; do
  if [ "$o" = now ]; then U="http://localhost:5181/"; else U="http://localhost:5181/?type=$o"; fi
  node $R --url "$U" --out demo/type/clips/$o-d.mp4 --scroll "$PLAN" --wait "$BEGUN" --settle 0 2>&1 | tail -2
  node $R --url "$U" --out demo/type/clips/$o-p.mp4 --scroll "$PLAN" --wait "$BEGUN" --settle 0 --phone --dpr 2 2>&1 | tail -2
done
