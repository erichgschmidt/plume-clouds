# Cloud types: formation logic → construction rules

The target is a randomised skybox of dynamic pixel clouds (Ghibli stacked billows), cheap enough
for many layers. One renderer (src/puffs.js: one primitive, recursively, one soft union, one
style) draws everything; what differs per type is the SIM that places and moves the roots.

Three engines cover the sheet:

| engine | what it models | types |
|---|---|---|
| `ThermalSim` (src/motion.js) | one buoyant bubble: ring vortex, flat base at the condensation level, successive turrets, mixing on the flanks | cumulus humilis, mediocris, congestus; cumulonimbus (with the anvil add-on) |
| `LayerSim` (src/layer.js, new) | a horizontal layer of air: a sheet, an array of shallow convective cells, or ice fall-streaks | stratus, altostratus, stratocumulus, altocumulus, cirrocumulus, cirrus, contrail |
| cirrus veil (shade pass) | a translucent ice veil behind everything | cirrostratus (and the thin far background of any high layer) |

Every sim emits the same arrays (blobs x,y,r,seed; aux depth,link; spin axis+roll; detail
freshness; baseY/topY; baseStart), so the renderer and the sky need not know which one made a
cloud. A preset names its engine.

## The types, their physics, and the rules we take from them

### 1. Cumulus humilis (fair-weather cumulus)
- **Physics**: small thermals off warm ground reach the condensation level and are stopped a few
  hundred metres higher by an inversion. Wider than tall, flattened tops, flat dark base, short
  lived (10–15 min), many at the same base height.
- **Rules**: ThermalSim with a low `height`, wide `width`, capped crown (layout `flat` or
  the humilis preset), few parcels, no bubbles, short mixing. In a sky: many, all at one base.
- **Look**: crisp lit top, one flat base shadow, little stacking.

### 2. Cumulus mediocris / congestus (the cauliflower)
- **Physics**: the thermal keeps rising; successive bubbles push through the older ones; the
  youngest crown is crisp, older flanks fray as they entrain dry air and sink down the outside;
  the base stays flat and darkens as the cloud deepens.
- **Rules**: ThermalSim as it is (congestus preset): pulses (`Bubble`), mixing on the flank,
  reservoir at the base, 3 recursion levels at the crown.
- **Look**: stacked domes, detail only on the lit crown, smooth shadow side.

### 3. Cumulonimbus (tower + anvil)
- **Physics**: a congestus that reaches the tropopause. The top glaciates (ice: fibrous, smooth,
  no cauliflower) and spreads downwind into an anvil; the shear carries the anvil far ahead of
  the tower; mamma hang under the anvil; the base is very dark; rain curtain below.
- **Rules**: ThermalSim `tower` preset with layout `tower`, plus an **anvil**: a LayerSim
  `sheet` placed at the tower's top, stretched along the wind (`shear` high, `lean`), disc
  primitive, low detail, high haze and dither on its downwind edge. In the sky it is one
  cloud object made of two sims sharing a position.
- **Look**: tall crisp tower, flat smooth anvil leaning downwind, darkest base of all.

### 4. Stratocumulus
- **Physics**: shallow convection under a strong inversion in a moist boundary layer organises
  into closed cells or rolls a kilometre or two across: lumpy sheet, flat lit tops, dark
  undersides, gaps between cells where air sinks; rolls align with the wind as streets.
- **Rules**: LayerSim `cells`: a lattice of cells with jitter, each a flattened puff (disc
  prim ~0.5) that breathes slowly; `gap` sets how much sky shows between them; `streets`
  aligns and elongates cells along the wind; whole layer drifts.
- **Look**: a lumpy carpet, strong stack shade, little crown detail, horizon-like perspective
  in a sky (far rows smaller and closer together).

### 5. Stratus
- **Physics**: stable air cooled from below (fog lifting, or gentle large-scale lift): a
  uniform grey sheet with a ragged base, no cells, no turrets, hundreds of metres thick,
  slowly undulating; edges fray and re-form.
- **Rules**: LayerSim `sheet`: wide overlapping discs with large softness, one recursion level,
  low freshness everywhere (haze), slow undulation, ragged underside by dither on the lower
  edge; no stack shade.
- **Look**: a soft band with almost no internal form; light from above makes a top edge only.

### 6. Altocumulus
- **Physics**: a mid-level layer destabilised from the top (radiative cooling) breaks into
  Rayleigh–Bénard cells: a mackerel sky of small rounded elements with shadowed undersides,
  often in bands along the wind; the lenticular variant is a smooth lens in a standing wave
  over terrain, stacked, edges forming and evaporating in place.
- **Rules**: LayerSim `cells` with smaller `cell`, more of them, `streets` for bands; disc
  prim; moderate stack shade; the lenticular variant is `sheet` with a single very smooth
  disc primitive and no drift (parcels flow through a fixed shape: the sim moves parcels but
  the envelope stays put).
- **Look**: many small shaded lumps in rows; lens: a smooth stacked disc.

### 7. Altostratus
- **Physics**: a warm front lifts a whole air mass gently over hundreds of kilometres: a thick
  featureless grey sheet, the sun a dim disc through it, fibrous streaks where wind shear
  draws it out.
- **Rules**: LayerSim `sheet` with full-width coverage, `shear` high along the wind for the
  striation, deep haze, low noise, no cells.
- **Look**: the darkest sheet; mostly a tone with a striated grain.

### 8. Cirrocumulus
- **Physics**: a thin high ice layer breaking into tiny cells or ripples; no shadows (too
  thin), short lived, often evolving out of cirrus or cirrostratus.
- **Rules**: LayerSim `cells` with tiny `cell`, one recursion level, no stack shade (stack
  weight 0 per puff), high dither, high freshness; drifts fast.
- **Look**: a field of bright grains, speckled edges.

### 9. Cirrostratus
- **Physics**: a translucent ice veil over the whole sky, fibrous, giving a halo; it thickens
  ahead of a front.
- **Rules**: the shade-pass cirrus layer in `veil` mode: low threshold, low contrast, large
  scale, very slow flow; the streak term adds the fibres.
- **Look**: the sky colour lifted toward the pale tone, with faint grain.

### 10. Cirrus (uncinus, fibratus)
- **Physics**: ice crystals form in a small generating head and fall into slower wind below;
  the streak of falling crystals is drawn out behind the head and curves with the shear
  profile: mares' tails (hook + tail). Fibratus: straight fibres without a head. They
  dissipate by sublimation from the tail end.
- **Rules**: LayerSim `streak`: each element is a head (small puff) with a trail of child
  puffs placed along a curve: offset = wind shear × fall time, fall time growing along the
  trail; trail puffs are stretched along the local wind and dithered toward the end; heads
  are born upwind and the trail grows over the element's life, then the head evaporates first.
- **Look**: hooks and tails, bright, no shadow side, edges dissolving to pixels.

### 11. Contrail
- **Physics**: a line source (aircraft exhaust) in ice-supersaturated air: persists, spreads
  sideways by shear and turbulence into a band, and breaks into pendant lobes as the wake
  vortices sink, then into cells like cirrocumulus.
- **Rules**: LayerSim `streak` with a moving line source: puffs laid along a line at a steady
  rate; age drives width (spreading), vertical lobes (a sinking offset with a wavelength) and
  break-up (gap growing between lobes), then dither.
- **Look**: a thin bright line at the head becoming a scalloped band, then beads.

## Parameters

Shared (all sims): `wind` (deg), `drift` (speed), `shear` (stretch of dispersing parcels along
the wind), `lean`, layout, primitive, `children/ratio/levels/life/embed`, `zoom/pan/far`.

ThermalSim (as today): updraft, width, height, rise, expand, settle, count, size, jitter,
mixing, pulse, base, rollGain, formTime, reservoir, parallax, sway; shape layout.

LayerSim (new), by mode:
- common: `count` (parcels), `size`, `width` (layer width in canvas units), `thick` (vertical
  spread), `level` (layer height, canvas y), `jitter`, `breathe` (slow radius cycle period),
  `life` (seconds a parcel lives before it fades and is replaced), `drift`, `fresh` (the
  freshness the whole layer emits: haze and dither read it), `stack` (per-puff stack weight).
- `cells`: `cell` (lattice spacing), `gap` (0 solid .. 1 sparse), `streets` (alignment along
  the wind: 0 round cells .. 1 rolls), `rows` (lattice rows).
- `sheet`: `cover` (how far the discs overlap), `undulate` (amplitude of the slow wave),
  `ragged` (dither on the underside).
- `streak`: `heads` (number of elements), `trail` (trail length), `curve` (how much the shear
  bends the tail), `fallTime`, `source` ('field' for cirrus: heads born anywhere; 'line' for a
  contrail: heads laid along a moving line), `spread` (contrail widening with age), `lobes`
  (pendant wavelength).

Renderer additions used by these: per-puff stack weight from the sim (so a thin layer casts no
stack shade), the existing per-puff freshness (haze) and dispersal (dither, shear), the cirrus
veil mode, and a cloud object that may hold more than one sim (the cumulonimbus anvil).

## Reference images

`docs/types/<type>.svg` (+ .png): four-panel schematics in the style of docs/cumulus-motion.svg,
drawn by Codex from the briefs above: 1 the forming mechanism, 2 the structure in cross
section, 3 how it evolves and dissipates, 4 the painted simplification.

## Status (2026-10-31, overnight)

Built: `src/layer.js` (LayerSim: sheet / cells / streak), `src/presets.js` (the eleven types plus
the lens, with engine, sim preset, layout, primitive, form and preferred sky depth), the puff
editor's Type dropdown (the Forces panel follows the engine and the layer mode), the sky drawing
every type by depth, the cumulonimbus anvil as a second sim riding on the tower's top, the
cirrostratus veil in the shade pass, per-parcel stretch from the sim (streets, trails), and the
ten schematics (`docs/types/<type>.svg` with a `.jpg` render).

| type | drawing | first render (puff editor, fast-forwarded) |
|---|---|---|
| humilis | docs/types/humilis.jpg | docs/types/humilis-render.png |
| congestus | docs/cumulus-motion.svg | docs/types/congestus-render.png |
| cumulonimbus | docs/types/cumulonimbus.jpg | docs/types/cumulonimbus-render.png |
| stratocumulus | docs/types/stratocumulus.jpg | docs/types/stratocumulus-render.png |
| stratus | docs/types/stratus.jpg | docs/types/stratus-render.png |
| altocumulus | docs/types/altocumulus.jpg | docs/types/altocumulus-render.png |
| lenticular | (altocumulus inset) | docs/types/lenticular-render.png |
| altostratus | docs/types/altostratus.jpg | docs/types/altostratus-render.png |
| cirrocumulus | docs/types/cirrocumulus.jpg | docs/types/cirrocumulus-render.png |
| cirrostratus | docs/types/cirrostratus.jpg | docs/types/cirrostratus-render.png |
| cirrus | docs/types/cirrus.jpg | docs/types/cirrus-render.png |
| contrail | docs/types/contrail.jpg | docs/types/contrail-render.png |

Judged against the drawings: cirrus (hook + tail), contrail (line → scallops → beads),
stratocumulus (lumpy carpet), cumulonimbus (tower + tapered anvil ahead), lenticular and
cirrocumulus read as intended. Weakest: stratus and altostratus are bands with too little
raggedness and too much brightness (their style lives in the sky look, not the type);
altocumulus wants denser rows; humilis still reads as a small congestus rather than a flattened
one. Nothing watched over a long run; everything fast-forwarded and screenshotted.

Not built: a halo for cirrostratus; the sun as a disc through altostratus; mamma under the
anvil; rain curtains; per-type style overrides (haze, stack shade) in a mixed sky, where one
style serves all clouds, so a stratus in the sky is lit like a cumulus. The last is the next
renderer step: carry haze and stack weights per puff from the sim, as freshness already is.
