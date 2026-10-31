#!/usr/bin/env bash
# Draw one four-panel schematic per cloud type with Codex, in the style of docs/cumulus-motion.svg.
# Usage: tools/draw-types.sh [type ...]   (default: all)   Logs: docs/types/_log/<type>.log
set -u
cd "$(dirname "$0")/.."
mkdir -p docs/types/_log
TYPES=${*:-"humilis cumulonimbus stratocumulus stratus altocumulus altostratus cirrocumulus cirrostratus cirrus contrail"}

brief() {
  case "$1" in
    humilis) echo "Cumulus humilis (fair-weather cumulus). Panel 1: small thermals rise off warm ground and are stopped a few hundred metres above the condensation level by an inversion (draw the inversion as a lid). Panel 2: cross section: wider than tall, flattened top, flat dark base, many at the same base height. Panel 3: short life (10-15 min): a cell forms, flattens against the lid, frays and evaporates while a neighbour forms. Panel 4: painted simplification: a row of small flat-based puffs, crisp lit tops, one flat shadow, little stacking.";;
    cumulonimbus) echo "Cumulonimbus (tower and anvil). Panel 1: a congestus tower keeps rising until it reaches the tropopause; the top glaciates (ice, fibrous, smooth, no cauliflower). Panel 2: cross section: the crown spreads downwind into an anvil carried ahead of the tower by the wind shear; mamma hang under the anvil; a very dark base; a rain curtain below. Panel 3: evolution: tower, glaciation, anvil spreading far downwind, the tower collapsing and leaving the orphan anvil. Panel 4: painted simplification: a tall crisp tower, a flat smooth anvil leaning downwind, the darkest base.";;
    stratocumulus) echo "Stratocumulus. Panel 1: shallow convection under a strong inversion in a moist boundary layer organises into closed cells a kilometre or two across (draw the cell circulation: up in the centre, down at the edges). Panel 2: cross section of the layer: lumpy sheet, flat lit tops against the inversion, dark undersides, gaps between cells where air sinks. Panel 3: evolution: cells drift with the wind, align into rolls (cloud streets) along it, gaps open and close. Panel 4: painted simplification: a lumpy carpet with strong under-shading, little top detail, rows receding smaller toward the horizon.";;
    stratus) echo "Stratus. Panel 1: stable air cooled from below (fog lifting, or gentle large-scale lift) condenses into a uniform sheet: no thermals, no cells. Panel 2: cross section: a low grey sheet a few hundred metres thick, ragged base, slowly undulating top, no internal structure. Panel 3: evolution: the sheet thickens and thins, edges fray and re-form, it lifts into stratocumulus or burns off. Panel 4: painted simplification: a soft horizontal band, almost no internal form, a lit top edge only, ragged underside.";;
    altocumulus) echo "Altocumulus. Panel 1: a mid-level moist layer cooled from its top breaks into Rayleigh-Benard convection cells (draw the overturning cells side by side). Panel 2: cross section: a field of small rounded elements, each with a shadowed underside, in bands along the wind (mackerel sky); inset: the lenticular variant, a smooth lens in a standing wave over a hill, stacked, air flowing through it while the shape stays put. Panel 3: evolution: elements form, drift, merge into rows, thin and evaporate; the lens stays in place as air flows through. Panel 4: painted simplification: many small shaded lumps in rows; a smooth stacked lens.";;
    altostratus) echo "Altostratus. Panel 1: a warm front lifts a whole air mass gently over hundreds of kilometres (draw the sloping frontal surface). Panel 2: cross section: a thick featureless grey sheet; the sun a dim disc through it; fibrous streaks where wind shear draws it out. Panel 3: evolution: thickens ahead of the front from cirrostratus into altostratus into nimbostratus with rain. Panel 4: painted simplification: mostly one grey tone with a striated grain, the sun a soft disc, no cells, no turrets.";;
    cirrocumulus) echo "Cirrocumulus. Panel 1: a thin high ice layer destabilises and breaks into tiny cells or ripples (draw the ripple instability). Panel 2: cross section: a field of tiny bright grains, too thin to cast shadows, often evolving out of cirrus or cirrostratus. Panel 3: evolution: forms from a veil, grains ripple, drift fast, and vanish within minutes. Panel 4: painted simplification: a field of bright grains with speckled edges, no shadow side.";;
    cirrostratus) echo "Cirrostratus. Panel 1: ice crystals spread into a translucent veil over the whole sky ahead of a warm front (draw the halo around the sun from hexagonal crystals). Panel 2: cross section: a very thin high layer, fibrous, the sun bright through it with a 22 degree halo. Panel 3: evolution: thickens into altostratus as the front approaches; fibres align with the high wind. Panel 4: painted simplification: the sky colour lifted toward pale, faint grain, a halo ring.";;
    cirrus) echo "Cirrus uncinus and fibratus (mares' tails). Panel 1: ice crystals form in a small generating head at the top of a moist high layer and fall into slower wind below (draw the wind profile: faster above, slower below). Panel 2: cross section: the falling streak is drawn out behind the head and curves with the shear: a hook plus a tail; fibratus is straight fibres without a head. Panel 3: evolution: the head is born upwind, the tail grows, the head evaporates first, the tail sublimates from its end. Panel 4: painted simplification: hooks and tails, bright, no shadow side, edges dissolving to pixels.";;
    contrail) echo "Contrail. Panel 1: an aircraft lays a line of exhaust water vapour in ice-supersaturated air; the wake vortex pair sinks behind it (draw the vortex pair). Panel 2: cross section: the young trail is a thin bright line; it spreads sideways by shear and turbulence into a band. Panel 3: evolution: the sinking vortices pull pendant lobes down (a scalloped underside), the band breaks into beads like cirrocumulus, then fades. Panel 4: painted simplification: a thin bright line at the head becoming a scalloped band, then a row of beads.";;
  esac
}

run_one() {
  local t=$1
  local out="docs/types/$t.svg"
  local prompt="Draw a four-panel schematic SVG explaining how a $t cloud gets its shape, in exactly the style of docs/cumulus-motion.svg (read that file first: same 1400x900 size, same palette, fonts, panel layout, orange motion arrows, cream clouds with blue-grey shadows, a title and a one-line subtitle, four numbered panels each with a heading, a one-line lead, the drawing, and a short caption, plus the footer). The attached image is that reference rendered. Content: $(brief "$t") Keep it schematic and legible; cloud shapes are scalloped outlines like the reference. Write the file to $out and nothing else. Do not modify any other file."
  echo "[$(date +%T)] start $t" >> docs/types/_log/_run.log
  codex exec -s workspace-write -C "$PWD" -i docs/types/_reference-cumulus.png -o "docs/types/_log/$t.last.md" "$prompt" > "docs/types/_log/$t.log" 2>&1
  echo "[$(date +%T)] done $t rc=$? $(test -s "$out" && echo ok || echo MISSING)" >> docs/types/_log/_run.log
}

# three parallel streams
i=0
for t in $TYPES; do
  run_one "$t" &
  i=$((i+1))
  if [ $((i % 3)) -eq 0 ]; then wait; fi
done
wait
echo "[$(date +%T)] all done" >> docs/types/_log/_run.log
