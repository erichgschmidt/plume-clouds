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

Per-type style in a mixed sky (built after the overnight pass): the field pass carries the cloud
index of the highest puff at each pixel, and the shade pass looks up that cloud's style in a
uniform array (haze, stack shade, dither, shadow, base shade, noise, normal smooth). A type's
`look` sets any of these for itself; the sky's STYLE sliders fill in the rest. So a stratus in
the sky is hazy and flat while a congestus beside it keeps its stack shade.

Fixed at the same time: the renderer's root loop stopped at the first parcel too small to draw
(a guard meant for the full budget), which hid every later parcel of that cloud for a frame or
two whenever one spawned or re-entered: the popping of whole trails, heads and sheet patches.

Sheets retuned: `ragged` now does something in sheet mode (the lower a parcel, the staler it
reads, and some parcels are wisps hanging under the band, small and stale); a strongly dispersing
puff also loses interior pixels to the dither, so wisps dissolve into dots rather than keeping a
hard disc. Stratus: lit top rim, grey lower mass (base shade 0.7), wisps below. Altostratus: more,
smaller, strongly striated parcels (striate 2.8) over a thicker band, one grey tone with grain.

Double outline fixed: a normal sample that fell outside the silhouette was flattened to the
centre height, so every edge carried a band one footprint wide with its own normal regime; it is
now extrapolated through the centre from its opposite. Dissolve and Dot size control the dither.

The sky has a camera (commit after b18aadd): a cloud lives in a world at lateral x, distance z
and altitude h, projected toward a horizon line with scale 1 / z (`look.cam` in the renderer).
The camera glides forward (Travel), so near clouds pass overhead and leave through the top while
far ones creep in from the horizon; wind (Drift) and camera sway (Parallax) move clouds by 1 / z.
Sheets lie flat: a layer sim's rows are depth, not height, so a stratocumulus deck recedes toward
the horizon and its far rows converge. Altitude per type (ALT in sky.html): low cloud low, cirrus
high. A cloud past the camera or out of the frustum re-forms far away as a new one.

Broken sheets: sheet mode has `patch` (holes across the width) and `hole` (how much they take);
parcels in a hole shrink away and the holes drift slowly. Two presets use it: Stratus fractus
(small ragged patches, bridging between other clouds) and Altostratus undulatus (a wavy sheet with
gaps); altostratus itself is smaller (scale 0.9) with two faint gaps. In the sky the cell types
(altocumulus, cirrocumulus) spawn as small patches rather than one wide deck, and the cumulonimbus
anvil only grows in once the tower has formed (60% of its form time). The rim of every cloud turns
toward the viewer (Rim soften) so the dome edge is not a dark ring.

Not built: a halo for cirrostratus; the sun as a disc through altostratus; mamma under the
anvil; rain curtains.

Status (puff rim): the field pass also emits how close each pixel is to the dominant puff's own rim (1 at the edge, 0 a third of a radius in); the Puff rim control flattens the normal there the way Rim soften does at the silhouette, so a front dome falling over the puff behind it no longer draws a crescent line. The silhouette is untouched (same sky pixel count at 0 and 1). An occluding cloud's outside falloff is dropped where the pixel is inside another cloud.

Status (cap, contact): root cause of the second contour at puff junctions (confirmed by a Codex audit of src/puffs.js): a sphere dome's slope goes vertical at its rim, so the far side of every puff is a thin dark terminator, and the lit puff behind resumes right after it. Cap (Surface / Style) mixes the dome profile from sphere to parabola, whose rim slope (-2) is continuous with the falloff outside, turning the crescent into a broad soft side; default 0.8. Contact (Light) marches the height field toward the light so a puff shades the puff behind it; default 0.3. Base falloff sets how far up the cloud the base shade reaches. Puff rim kept at 0.

Status (skirt fade): a puff's skirt (the falloff outside its radius) used to be cut off abruptly at 1.5 r; where it was still above a neighbour the union dropped a step there, a second circular ledge round the puff (a numeric check: -1.00 to -1.28 in one sample). The skirt now carries a penalty that diverges at the cutoff, so its height and silhouette contributions die off continuously and nothing is lost at the boundary. Cap, Contact and Puff rim default to 0 (the accepted look is the baseline).

Status (tangent join): the dome's slope used to step from near-vertical to the skirt's -2 at the radius (sampled -6.3 to -2.0), a thin dark arc with a lighter strip outside it. The sphere is now kept to 0.9 r and continued along its own tangent (slope -2.06) through the rim into the skirt, so the profile is continuous in slope; the parabola branch (Cap) already was.

Status (contact direction, cavity): the Contact march ran away from the light (uv direction is (+L.x, -L.y): world y is down, uv y is up); fixed. Cavity (Light): a pixel below the lower of its two opposite neighbours on any axis, a few texels out, is a valley between puffs whose cancelling slopes face the viewer and drew a bright seam; less direct and ambient light reaches it. Two-sided so a rim is never a valley. Default 0.35.

Status (coverage): silhouette (footprint union) and surface (height union with skirts) could disagree: a front puff's skirt was the visible surface over a rear puff's footprint and got cut off at that rear edge ("foreground puffs not sorting"). Now, where any puff contains the pixel, only containing puffs make the surface; skirts live only in the soft fringe outside every footprint. A front puff above the surface behind it is a true height step, and the shade pass treats a neighbour across a step larger than a quarter of the style radius as an occluding edge (rim handling, no dark band).

Status (parallax): the sims sway each root parcel by its depth and now expose that sway (sim.swx / swy, per unit depth); the renderer shifts every child puff by its own depth offset from its parent (uz * shell / ref), so a cloud no longer sways as sliding groups of relief. The sky camera still sways whole clouds by distance; per-puff depth under the camera is not projected.

Status (noise bias): Noise 2 has its own bias (Noise 2 bias, in Style / Surface); a preset without the key follows Noise bias as before. Quirk: a cloud's per-cloud noise ratio (its noise / the sky noise) scales both noises, so Noise at 0 silences Noise 2 too.

Status (edge by slope, sky parallax): the occluding-edge test in the height sampler is slope-based (a change steeper than 4 over the sample distance, where no dome profile exceeds about 2), so a front puff over the surface behind it is extrapolated instead of differenced even with Rim soften at 0. Under the sky camera the sway (look.cam.sx/sy) is re-projected per puff at its own depth ((z0 - zOff) * z / f in world), roots and children, so a cloud sways as a volume.

Status (cavity falloff): Cavity samples three rings out to Cavity reach texels; each ring measures how far the surface sits below the lower of its two opposite neighbours as a slope over the ring radius, and the rings are averaged, so the darkening grades up a valley wall instead of being one band.

Status (normal smooth, contact penumbra): Normal smooth no longer widens the differencing footprint (a wide footprint straddled a step and read it as a slope, a band as wide as itself); it averages the normals of four neighbours up to 3 texels out, skipping any that is outside, on another cloud or across a step. Contact has a penumbra: a blocker near the pixel casts a full shadow, one at the end of the march a faint one.

Status (audit pass, 2026-11-01): from an outside audit. Field pass: puffs that contain the pixel and skirts of those that do not are two sets; the skirt set is weighted by g = 1 - (how far inside any footprint the pixel is, over T), so nothing switches at a footprint edge (the previous any-puff-contains rule stepped the height there). Normal: the footprint used for the slope is always the one the samples were taken at; the occluding-edge slope threshold is 10 (a flattened disc reaches about 5). Height target is RGBA32F when OES_texture_float_linear exists (far clouds sit at large negative offsets where half floats quantise the relief). Editor child parallax honours Depth. The reference radius comes from clouds in or near the frame only. Noise anchor upload restored (a trailing comment had swallowed it). Noise 2 no longer silenced by Noise at 0. Veil implemented (cirrostratus lift of the sky). Palette dither control (the Bayer grain before the bands). Descending and zero-width smoothsteps replaced. Sky recycling is seeded. Shadow now darkens the ambient on faces turning away (it scaled only the direct light, already zero there). Not done: dissolve revealing clouds behind, preset/reset resolution from immutable defaults, live population reconciliation, integer budget slots, tiled field pass.

Status (presets and rim edge): every type and saved preset is applied over the page defaults (LOOK0), not over the previous look, and the editor applies its starting type at load, so Reset gives the startup state; saved presets carry their type into the sky for altitude. The rim weight Rim soften uses now comes from the outline only (samples outside the silhouette or on another cloud, graded by how many), not from a same-cloud occlusion step, which only protects the normal: Rim soften no longer draws a bright stripe round a puff in front of its own cloud. Cavity reach is no longer widened by Normal smooth. Open from the outline analysis: carrying surface identity beside depth instead of the slope heuristic, and a filtered cavity buffer instead of the three rings.

Status (rim by distance): the field alpha carries, beyond the mask, ten times the distance inside the silhouette, and the rim weight is a smooth fade from 1 at the outline to 0 two normal footprints in; the footprint shrink and the neighbour count no longer feed it. Open: actual occlusion vs blended join (continuous per-puff weights instead of the global skirt suppression) and the silhouette union width agreeing with the shaded domes.

Status (join weights, silhouette width): over a surface that contains the pixel a skirt may only fill in below that surface (clamped two T under the inside union, by the amount ins), never stand above it; the old T log(1 - ins) shift, a cliff one T wide at every footprint edge, and the g > 1e-4 cutoff are gone. A front puff crossing its own radius over the surface behind still steps down onto it: an occlusion, kept by the shade pass. The silhouette union gains at most T log 2 over the nearest puff, so a pile of overlapping skirts no longer pushes the outline past the shaded domes.

Status (analytic normals): the field pass stores the union's own gradient (a fourth target): each puff's slope is analytic (profile and skirt penalty derivatives, mapped back through the stretch), summed per set with the union weights, and the sets combined by their share of the union, the skirt clamp left as a shift. The shade pass takes the normal from that gradient and differences only the noise displacement (amplitude from the centre pixel): no height is differenced across an occlusion step, so the slope test, the footprint shrink and the centre-height fallback (a viewer-facing strip that lit up as a bright outline) are gone. Depth falloff averages the gradient over same-surface neighbours. Normal smooth's upload had been swallowed by a comment since the noise-ratio pass and is restored. The editor has a "probe" look (five still puffs, no noise, full bands, Depth 2) and a saved look's forces go into the sim before its parcels spawn, so Parcels is the population.

Status (clamp slope): a clamped skirt takes the slope of the surface it was clamped to, blended by ins, instead of keeping its cone's slope under a flat height (that lit a soft ring round every puff). The ramp of the clamp itself at a footprint edge is left without a slope: lit as a wall it drew a thin arc along the outline, and it is an occluding edge, as the old slope test treated it.

Status (halo, second pass): the skirt penalty's slope is bounded at 20 (it diverged to 80000 at the cutoff, past the largest half float, in a linearly filtered RGBA16F target). The editor has a Diag view slider: 1 continuous grey lighting of the final normal (no bands, shadow or fill), 2 height contours, 3 the normal as colour. Measured on the probe look with it: the field's height and gradient rows through a puff over a flat surface and through a dome-over-body junction are clean (height continuous, gradient blended over T), and the rendered grey row shows no ring outside a rim, only a sphere's own limb darkening, so what the palette shows as a halo there is the limb band. The clamp depth stays two T. A drag in the canvas (editor and sky) moves the eye, every parcel shifting by its depth: an unlocked parallax; double-click recentres.

Status (artifact lab): `lab.html` feeds fixed sphere records straight to PuffRenderer (an adapter object in place of ThermalSim: blobs / aux / spin / detail, no children, no noise, no warm-up) at a fixed 1024x768, pixel 1, with five fixtures (single puff, equal-depth pair, depth pair, small foreground lobe, three-way junction), one-variable controls (Depth, Softness with the effective T shown, Rim, Normal smooth, Shadow, a quarter-pixel x shift, swap depths), Diag views 0-5 (4 coverage mask, 5 accepted normal neighbours, both new and behind uDiag) and an FNV hash of the frame in the HUD. The uploaded records are asserted against the fixture every draw (nothing rescales depth or radius; z0 = (aux - 0.5) * 2 * ref * Depth). The hash is identical after reload and after Reset (6a960df3 on this machine; it is GPU dependent). Defects seen there, grey view (all shading controls off, so these are the field and its gradient alone), 1 px = 1 texel, T = 2.5 px:
- Flat limb band: the sphere profile is a cone from 0.9 r out (the tangent continuation), so the outer 10% of every puff has one constant normal: an 11 px ring of a single grey (178 along the centre row of the depth pair, where the dome ramps 202 -> 180 just inside it). In the banded palette this ring is one flat band round every puff: the halo.
- Front rim over the rear puff: along the centre row the step is clean (178 -> 164 in one pixel), but off the centre row it is spread over about 3 px of intermediate normals (249, 233, 192, 171 across the step, row y 300): the step in the filtered gradient target reads as a narrow lit seam, the double contour's inner line.
- Skirt clamp seam: in every fixture with a depth difference (none in the single puff or the equal-depth pair) a one-pixel line of outliers runs over the rear surface about 1.3 r from the front centre, bright in the depth pair and the junction (237 between 212 and 216), dark under the foreground lobe (239 between 248). It moves with Depth and Softness and not with the quarter-pixel shift, so it is a locus in the geometry: where the front skirt's height crosses HI - 2 T, the clamp condition switches and gO jumps from the cone's slope to the surface's (field pass, `gO = mix(gO, gI, ins)` guarded by `HO0 > HI - 2.0 * T`).
- Join groove under a foreground lobe: just outside the lobe's rim over the body the normal tilts away for 4 px (grey 183 -> 150 -> 184, normal y 0.13 -> 0.31 -> 0.13) before the body's own normal resumes; with the lobe's dark limb inside it the picture is dark rim, light ring, dark groove: a double contour. Height is monotonic there, so it is the unclamped skirt's slope (HO0 below HI - 2 T, weight e^-4 but slope 2+) leaking into G.
- Accepted neighbours (view 5): zero only at the two silhouette cusps where the outlines meet (short red arcs); along the occlusion step three of four neighbours are accepted, elsewhere four. So the same-surface test is not what makes the normals unstable here; the gradient target is.
- Rim soften does not show in views 1-5: the diag branch returns before the rim mix, so Rim and the views after it are production-only (view 0).

Status (ownership step 1, docs/core-audit.md): behind `look.own` (uOwn; the lab's Own segment, the editor's Own slider, default off, so the production look is untouched) the skirt set inside a footprint is weighted by g = 1 - ins as well as clamped: a fully containing puff owns its pixels, skirts of other puffs add neither height nor slope there, and across the footprint ramp the skirt fades with the same ins the clamp uses; outside every footprint nothing changes, so the outlines merge as before. Lab, grey view, one-pixel outliers (a pixel more than 8 grey from both neighbours on a row or column) off -> on: A 0 -> 0 (hash identical), B 1 -> 1, C 99 -> 20, D 125 -> 4, E 209 -> 45; the survivors are on the occlusion step itself and at the silhouette cusps. The clamp seam and the join groove are gone with the flag on.

Status (ownership step 2): the sphere texture has a fifth row, (puff id, parent id): roots get a virtual core per cloud as parent (or `sim.parent[i]` when the sim gives one, as the lab adapter does), children their parent's id. Behind Own 2 the field pass first finds the owner of the pixel (the highest containing puff, a pre-pass over the records), then a containing puff attached to the owner (same parent, or its parent or child) joins it softly over T as before, while an unattached one fades out a quarter T below the owner: a crisp overlap with the front puff's own shading. Lab: fixtures A-E give the same hash under Own 2 as under Own 1 (every record is one family), and the new fixture F, the equal-depth pair with different parents, turns its crease from a T blend (grey 203 198 173 139 125 along the centre row) into one pixel (203 202 109 113). In the editor the default congestus under Own 2 still reads as one cloud (its roots share the core), with children of different roots overlapping crisply. Default off; the production look is untouched.

Status (ownership steps 3 and 4): Own 3 profiles the sphere to its true limb (no tangent cone, the skirt falls from height 0 at the rim) and lifts the puff's own rim toward the viewer at Rim soften strength, the way the silhouette already is. The Diag views now sit after the rim mix, so Rim soften shows in them. Lab, fixture A, centre row, Rim soften 0.5: with the cone the rim lift reaches only the outer two pixels and leaves a flat band of one grey with a bright edge beyond it (dark side 120 100 51 51 ... 51, lit side 178 x12 then 181 201 203): the double contour; with the true limb both sides grade (96 99 101 104 ... 82 and 197 ... 202 201 200). One-pixel outliers at Rim soften 0.5, Own 2 -> Own 3: B 129 -> 6, C 155 -> 54, D 142 -> 40, E 151 -> 55, F 128 -> 5. In the editor the default congestus under Own 3 keeps its character with fewer dark crescents. Step 4: Depth scales heights only (order and relief are one thing in a height union); a child puff's sway by depth has its own scale (Sway depth, default 1), and a puff's depth weight (its fade: softer normal, weaker shadow, less noise, bluer) comes from its unscaled depth, so Depth changes neither. At Depth 1 nothing changes; the default look is hash-identical with Own off.

Status (step 5, the reference): `lab-ref.js` ports the field pass per texel in JavaScript, every branch under Own 0-3, and the lab's Check ref button compares a 64x48 window of the height, mask and gradient targets against it: fixtures A-F under Own 0-3 agree to 6e-8 in height, 6e-7 in mask and 2e-3 in gradient (half-float quantisation), zero mismatches. From here every rule change to the field pass is checked there first. The five steps of docs/core-audit.md are in, all behind the Own slider (0 off .. 3 all), default off; whether Own 3 becomes the default is a look decision.

Status (ownership is the default): the Own flag is gone and its step 3 behaviour is the renderer: owner pre-pass, attachment weight, skirts weighted by 1 - ins inside footprints, the true sphere limb with the own rim lifted at least at Rim soften strength, Depth for heights only. The tangent cone, the unweighted skirt and the flagged branches are deleted from the field pass, the shade pass, the editor, the lab and the reference. The editor's default congestus frame hashes exactly as it did under Own 3; the lab reference matches with zero mismatches on A-F; the sky at seed 1 reads the same, sheets included. This is the new baseline look.

Status (tiled field pass): the renderer bins every sphere by its reach (the coarse reject's radius, times 1.6) into 16-texel tiles on the CPU each frame (a counting sort: counts, offsets, indices; a head texture of offset and count per tile and one flat index list, 4096 wide), and both field-pass loops iterate the tile's list instead of every sphere. Sky at seed 1: 32 fps with 849 puffs went to 60 (the cap); the editor's default frame renders in 0.2 ms. Lab Check ref: zero mismatches on A-F; a whole-frame comparison of fixture D against the untiled build differs in one pixel by one grey level (rounding). The list overflows at a million entries, which would warn once and drop spheres; the sky uses about four thousand.

Status (dissolve in the field pass): a dispersing puff loses texels on the dither grid in the field pass itself, in both the union and the silhouette (a per-sphere skip against the Bayer threshold, Dissolve times the puff's dispersal), so the holes show whatever is behind the puff: the cloud body, or sky only where nothing is. The shade pass no longer drops pixels for dissolve; it only skips what the mask leaves out. The lab reference carries the same skip (dissolve 0 there) and matches with zero mismatches; the editor and the sky render without errors, the sheets' dither reads as before.

Status (Parcels reconciles live): when the Parcels value changes, the thermal sim fills the shortfall beyond its waiting queue at about three parcels per second per parcel short and marks every parcel over the count dying at once (the fade stays a few seconds), and the reservoir follows Parcels and Base share (the neck's three entries stay). Measured at 10 s of congestus: 13 alive, Parcels 60 (formed count 28): 27 alive after one second; Parcels 10 (formed 5): 5 alive after one second, the rest faded by four. Formation and recycling never take the fast path, so the default frame is hash-identical. The layer sim still takes its count at reset only.

Status (budget slots): when the puff tree overflows the sphere budget, the deepest level is thinned in whole children: each parent keeps floor(fd * 0.98 * children + its own hash) of them, so parents give up one child at a time in a fixed order as the budget tightens, and a budget that wobbles by a few puffs a frame changes nothing (a dead band of 1/64 on fd). The old scheme gave every parent one extra child at a fractional radius that swelled and shrank with each frame's count. `renderer.budget` caps the budget below 4096 for testing. Measured in the editor (children 6, levels 3, 63 parcels, about 2080 puffs): puffs newly appearing per frame 10.4 with no cap and 10.5 with the budget at 1500 (count held at 1449-1473, deepest level at 0.66), so the thinning adds almost nothing to the natural churn of the child life cycle. Default frame hash-identical.

Status (layer count live): the layer sim's count reconciles like the thermal sim's: a change of it fills the shortfall at about three per second per parcel short and retires the surplus from the end of the list (a retired parcel fades over its usual four seconds and is not replaced; the layer otherwise never thins). Both sims' catch-up loops are capped at the count, so the trickle running alongside cannot overshoot. Measured on stratocumulus: 80 to 20 live at once with the rest faded by five seconds, 20 to 100 within a second. Default congestus frame hash-identical. Frame rate note: in the desktop app's browser pane the sky page gets about 37 animation frames a second whatever the load (render 0.6 ms a frame with gl.finish, tree and binning 0.5 ms), so the fps figure there is the pane's, not the engine's; the 60 seen once was the same pane unthrottled.

Status (rim width): the field pass stores the signed distance to the silhouette line in the gradient target's third channel, and the rim weight is a smooth fall-off with that distance over the blend width T or two texels, whichever is wider. It used to be full across the whole mask ramp (half a T inside the line) and then drop within two texels, so at high Softness it was a flat lifted band ending in a step: lab fixture A at Softness 4, Rim soften 0.5, dark side, read 96 .. 122 then 93, a 30-level ring 16 px in; now the edge profile is the same at Softness 0.3, 1 and 4 (96 99 101 .. 88), smooth. Inside a puff's own rim the own-rim term carries the lift anyway; the change matters in the fringe where outlines merge. Lab reference zero mismatches; the default frame changes only in that fringe.

Status (build stamp): the bundler writes the commit (short hash, plus a + when src or the pages had uncommitted changes) and the build date into each bundle, and the editor's and the sky's HUD show it first (`build 0cca401 2026-11-01   fps ...`); the dev pages show nothing.

Status (second review, 2026-11-02): (1) ownership is pairwise: a containing puff is hidden by every unattached containing puff above it, fading a quarter T below each, instead of a set of contributors chosen by the single highest puff, which jumped at every crossing; the pre-pass keeps the eight highest containing puffs, and the lab's continuity check (the second record's height nudged by 1e-6) moves no pixel by more than one level on any fixture, including the new G, two families with a child. Ids are persistent: a root's is its parcel seed, a child's its own seed. The sky's camera sway re-projects by the unscaled depth and Sway depth, so Depth no longer moves it, and the sky imports swayScale. (2) the owner's group (its parent id) rides in the gradient target's fourth channel, fetched unfiltered, and the shade pass's same-surface test rejects a neighbour in another group, so Normal smooth and the far footprint never average across a crisp overlap. (3) a per-puff shift of the dissolve pattern was tried and taken out again at Gus's request: the dither stays as it was, one screen pattern, until the dither and dissolve design is decided. (4) the tile list grows by doubling its rows up to eight million entries, and past that the tiles double in size and the binning runs again, so the picture never loses geometry; forced to one row in the editor the tiles went to 32 texels with an identical frame. (5) Check ref samples every eighth texel of the whole frame (silhouettes and overlaps included), treats a non-finite value as a mismatch, uses a gradient tolerance relative to the slope (the fringe reaches 20), and runs the continuity check; all seven fixtures: zero mismatches, jump at most one level.

Status (lab tooling): Diag view 6 colours each pixel by its owning group (the parent id the smoothing respects). In the lab a click on the canvas lists the texel's contributors from the reference (`probe` in lab-ref.js): every sphere that reaches it with u = dist / r, height, inside or skirt, its share of its set's union, its attachment weight with a note when an unattached puff above hides it, and the skirt set's clamp and g weight. A Check rules button asserts behaviour rather than equations: unattached puffs never blend (fixture F: at the crease each side carries its own puff's slope, -0.70 and +0.69, and the midline is one side's, +0.74), attached ones do (fixture B: the crease slope is 0.10), and at Dissolve 0 every texel well inside any record's footprint is covered (6850 texels over the seven fixtures, no holes). All pass.

Status (single shape, shape variation, rim controls): (1) Single shape is an editor type (`single` in src/presets.js, SingleSim in puffs.html): one centred parent record, no core, reservoir, spawning or sway; it starts paused with noise, flow, dissolve and Sway depth at zero; Size is its one force; children come from the renderer's tree, attached to it; it saves and loads like any type and Reset reproduces it; the sky skips it. (2) Shape variation: each puff carries its own warp in sphere rows 5 and 6 (orientation, aspect a with area kept, one- and three-lobed contour harmonics, and the bound (1 + a) f_max), from its persistent id and the Shape seed alone, so a puff keeps its shape through motion and growth, the strength scales the amplitude, Reseed rearranges nothing. One evaluator: the field offset goes through the wind stretch, the warp, then the primitive; the inside test, the height, the skirt, the silhouette and the ownership pre-pass all run on the warped distance; the gradient is pulled back through the warp's Jacobian; the silhouette distance is divided by the pull-back's length so the rim width stays a true distance; the coarse rejects and the tile reach use the bound; the children's seats go through the inverse warp. The warp is a bijection while f > 0 (harmonics bounded to 0.3 of the radius), so nothing folds. Identity rows skip it: Shape variation 0 is the old puff to the bit. Child ids are scattered by a hash (cousins used to share one). Cost on the frozen default congestus (504 puffs, 421x272 field): 0.24 ms per render at 0, 0.50 ms at 1. (3) Rim soften and Puff rim are independent (rimV 2): the lift is max(Rim soften * silhouette distance weight, Puff rim * lobe rim weight), continuous and never over 1; the lobe rim weight now rides in the height union (width T, with the ownership weight) instead of the 4 T attribute blend, so the rim of a puff buried below cannot draw a ring inside the puff over it. Saved looks without rimV get puffRim = max(puffRim, rim) and the page default puffRim is 0.5, which keeps the old appearance in strength; the ramp is narrower (T, not 4 T), a visible but small change at puff creases (about 7 % of the default frame's pixels, one band at most). (4) Lab: fixture H (a child at the silhouette), Shape variation and seed and Puff rim controls, records with explicit ids, a reverse-order toggle; Check ref tolerates H relative to its size and counts visible mismatches apart (the skirt fringe past the mask is hypersensitive to the GPU's atan and sin); Check rules adds: variation 0 is seed-independent, the same seed repeats to the bit, variation and reseed change the picture, the upload order reversed changes no pixel, the deformed field matches the reference with no visible mismatch and a nudge of one level, children of a deformed parent sit on its shell (with their depth), the rim controls keep coverage, each acts, and Rim soften 1 leaves an internal lobe rim untouched. All pass.

Status (dither effects, angular profile): the dither and dissolve design from the second review is in, as three effects with their own strengths and one pattern cell size (Dot size): (1) Stipple (with Stipple bias) moves the light by up to half a band with an 8x8 ordered pattern (64 thresholds), so pixels choose between the two neighbouring palette colours; coverage is untouched. (2) Edge breakup removes coverage within Breakup reach texels of the exposed silhouette by the same pattern, more near the outline; nothing inside is touched. (3) Evaporation (the Dissolve slider, renamed) removes a dispersing puff in coherent patches: the threshold is 85 % a broad value noise riding with the puff's parcel and phased by its family (so patches are shared along a family, not one hole per puff) and 15 % the screen pattern, which stipples the patch edges over a narrow band (a larger share drew the ordered lattice across whole puffs). Every threshold is fixed per texel, so a rising strength only removes more marks. Pattern lock puts the stipple and breakup cells on the screen grid (a print) or shifts them by the parcel's anchor in whole texels (material). Dither keeps its meaning (a dispersing puff keeps a hard edge) and says so in its tooltip. The lattice hash is integer arithmetic, exact in 32 bits, so the CPU reference reproduces the evaporation bit for bit (a sine hash disagreed on hundreds of texels). Angular (with Sides) multiplies the contour factor by a regular polygon inscribed in the circle, its corners rounded by blending to the circle over the outer 35 % of each sector, C1, so no crease runs out to a corner; it is independent of Shape variation and never grows the footprint. Lab: Disperse and Evaporation, Stipple, Edge breakup and Angular controls; Check rules adds stipple keeps coverage and acts, breakup only removes and only near the edge, evaporation monotone in strength and nothing from a fresh puff, angular against the reference (no visible mismatch, nudge one level) and inscribed. All pass. Cost: angular 1 on the default scene 0.25 -> 0.54 ms per render (the same path as the variation); stipple and breakup are free.

Status (Normal smooth rework, from Gus's note on the double line): Normal smooth is now a bilateral average of the exact, unfiltered gradient over the 7x7 texels round each one, Gaussian in distance (sigma 1.5 texels) and in gradient difference (sigma 2 slope units), with hard rejection of a texel outside the silhouette, on another cloud, across an occluding step or owned by another family; the slider blends toward that average over a fixed footprint. The old one averaged the normals of four isolated samples up to three texels out, the slider setting both spacing and strength, so a crease three texels away echoed as a second contour, a sample stepped as it crossed a boundary, and linearly filtered gradients were read where the texel test had passed. Lab (grey, rims off, smooth 1 against 0): a plain dome moves no pixel over 3 levels, the occluding step on C keeps its row profile within 3, the unattached crease on F within 2, and the attached crease on B does soften (5). No measurable cost on the default scene.

Status (shadow sampling, from Gus's note on comb bands with Cavity at reach 24): Contact and Cavity read the field per texel, unfiltered (a filtered read at a silhouette mixed the background height into a surface sample), and weight every sample by its coverage confidence (the alpha past the mask ramp, smoothstep 0.5 .. 1) instead of a 0.5 threshold, so nothing switches on as a sample crosses the outline. Cavity samples four rings out to Reach with four opposite pairs each (eight directions), Gaussian in the radius, combined as a power mean of order eight (near the strongest pair, but smooth) in place of three rings and the strongest direction. Any puff may be a blocker: no identity test. Diag view 7 shows the light before the palette (contact and cavity in). Lab rule: along a row inside the top outline of fixture E, Cavity at reach 4, 8, 16 and 24 and Contact 1 add no slope sign changes. Not reproduced: on the frozen default congestus and on a single shape with children, the old sampling showed no comb bands at reach 24 by the band count or by eye, so the fix is from the diagnosis, not from a captured failure.

Status (Cavity in light): a slider, default 1 (as before), scaling how much of the cavity darkening reaches the direct light on a sunlit face; at 0 a lit crease keeps its light and loses only the ambient (the physical part: a valley sees less sky), the shadow side is cut as always. Gus found the reworked Cavity a bit strong on lit faces in places; the overlap was with Contact, which already shades a valley the sun cannot reach. The default frame is unchanged.

Status (panel groups): the editor and sky sliders sit in collapsible groups (View on top, then Cloud type, Forces, Shape, Puffs, Wind, Noise, Rims, Light, Shadows with Haze, Dither, Sky), each remembering its open state; a slider in no group lands in Other, so none goes missing.

Status (Evaporation as erosion): a dispersing puff is eroded from its outline inward by a broad noise riding with its parcel, phased per family, so the edge retreats raggedly and the interior stays whole until the edge reaches it; the earlier patch removal punched holes through puffs. Dither and evaporation are 0 by default everywhere.

Status (child lifecycle, from Gus's note on popping): a child's age now runs on the sim clock alone (0.12 per second at Life 1, about the old default turnover), the parent's roll only carries it round the shell from the angle at its birth, kept per life; its envelope is zero through the first and last 4% of the cycle and eased with zero end velocity (the old sin^0.6 had infinite slope at both ends, so a child popped in and out and the reseed could land mid-size); the shear follows the mixing only, so a newborn with its link still rising no longer comes in as a long spike; and a parent too small for children is judged on its deformed footprint, the children fading in over the second texel. On the popping configuration (Roll gain 18.6, Shear 3, Life 0.11) the largest puff to appear from nothing fell from 1.09 field texels to 0.08. Default animation timing changes a little with this.

Status (wind erosion, step 1 of Gus's design: movement only): three Wind sliders, Wind speed (default 0: nothing moves), Gust size and Top emphasis. An exposed root lobe drifts downwind by an offset the renderer accumulates per puff id (in reference radii, bounded softly at 2 so a lobe stretches away but stays with its cloud), at a rate of its height in the cloud raised to a power set by Top emphasis, varied by a broad value-noise gust pattern that travels with the wind through the cloud; the drifted lobe also stretches along the wind by half its drift. The surface detail still travels with the puff; the gust pattern only drives the slow drift. Children follow their parent. Erosion, wisps and texture are steps 2 to 4, not built.

Status (wind erosion, step 2: persistent erosion): an Erosion slider (default 0) in the Wind group. Each root lobe keeps an erosion amount by id that the exposure (its height over the cloud's own current top, eased, raised to the Top emphasis power) times the gust pattern raises, 0.15 per second at Erosion 1 in a full gust, and that falls where exposure times gust is under 0.15, so sheltered lobes never erode and worn ones mend slowly once the gust passes; never a scrolling threshold. The amount rides in sphere row 7 z and the field pass adds it to the Dissolve term of the same ragged retreat from the outline, so the union sees the smaller radius and what is behind shows; the children carry their root's amount. A crown lobe at Erosion 1 wears through in 20 to 40 s, the last specks going at the cap. Cost unchanged (about 0.2 ms per render). The CPU reference mirrors the row 7 term; lab gates pass. Step 3 (wisps) not built.

Status (wind erosion, step 3: wisps): Wisp amount (default 0, up to 8 wisps per cloud) and Wisp persistence (seconds, default 8) in the Wind group. When a lobe's erosion amount passes 1 and the cloud has room, one wisp separates from it: a root puff without children, of the lobe's family (so it blends while they overlap and parts on its own once clear), born at the lobe's downwind edge at the lobe's pace, speeding up to the wind over the first third of its life, swelling in, stretching along the wind from 1.5 to 4 and fraying by its own rising erosion amount, retired at zero size. Kept by the lobe's id in the renderer; a clock going backwards (a reset) forgets all wind state. Measured: wisps move under 0.1 field texel a frame, cost unchanged. Step 4 (fine texture) is skipped by design.

Status (wind erosion, step 4 and the preset): a Streak slider (default 0) in the Noise group squeezes the surface noise along the wind direction, up to 3x, twice as much on dispersed material, in the shade pass's noise coordinate only: no texture scrolls and no shape changes. The editor has a built-in look 'fraying' (Slow crown fraying: congestus, Roll gain 2, Mixing 40, Wind 10 deg, Wind speed 0.35, Gust size 2.5, Top emphasis 0.7, Erosion 0.5, Wisp amount 0.4, Wisp persistence 10, Streak 0.5). The wind erosion design is complete; every control defaults to off.

**Status (scrub bar, 90cc913).** The editor has a Scrub slider (0 to 120 s) under Play. It replays a fresh run of the current type, seed, forces and look from 0 to that time in fixed 0.1 s steps, rendering each step so the renderer's slow state (child births, wind drift, erosion, wisps) is played through as well; the same time always gives the same picture, and Play continues from there. Replaying 45 s takes about a quarter of a second. The renderer's reset on a backwards clock had never fired (it compared against a value just overwritten); it now runs and also clears the child birth map and the eased top, so Reset no longer carries wear over from the previous run.

**Status (review fixes, per-cloud clock).** Three mechanism fixes, none changing the look with Contact and Cavity at 0. (1) The renderer's slow state (child births, wind drift, erosion, wisps, the eased top) now runs per cloud on the cloud's own sim time instead of the shared frame clock: the sky steps each sim at Sim speed times a near-cloud slowdown but passed a plain clock, so children and wind effects ran at twice the cloud's pace at the default 0.5 and nearly six times on a near cloud. A clock that goes back (reset, scrub, a cloud re-formed far away) starts that cloud's state afresh. The shader noise flow stays on scene time. (2) Cavity is normalised by the full ring weight, not the weight present, so a pair that loses a sample fades the result instead of counting in full and then dropping to zero at the outline. (3) Contact weights the shadow by the receiving pixel's own coverage confidence, computes the slope over the snapped texel's real distance, and allows a quarter texel of rise before anything counts as shadow. Editor scrub results unchanged, lab gates pass.

**Status (layer ends).** The wide layer types (stratus, altostratus, fractus, undulatus, stratocumulus, altocumulus, cirrocumulus) ended in a cluster of full round puffs: the band only faded each parcel's link over a tenth of the width, with size, stretch and freshness uniform to the end. A new layer parameter `ends` (Forces slider Ends, 0 to 1) thins the outer third of the band: parcels there get up to 45% smaller, sit flatter, stretch along the wind up to 2.2x and read staler, so the band tapers out. Set per preset (stratus 0.6, altostratus 0.5, fractus 0.7, undulatus 0.5, stratocumulus 0.6, altocumulus 0.5, cirrocumulus 0.4); anvil and lenticular keep their own taper at 0. Checked: with Contact and Cavity at 0.6 the crown silhouette's edge luminance is unchanged against 0, so the thin dark line along a crown outline is the silhouette's own rim shading (Rim soften), not the two shadows.

**Status (dark outlines).** Contact and Cavity drew a one-to-two texel line along outlines where a front puff overlaps one behind: the height field encodes a puff's depth offset as a near-vertical wall at its rim, and the sliver of the back puff visible before the silhouette was shaded by that wall (Contact) and read as a valley between the wall and the outline (Cavity). Two edits: a bounds-checked field read, Contact needing a blocker above both the light ray and the receiver's tangent plane, Cavity measured against the tangent plane with an RMS aggregation, and a regression page at tools/shadow-test.html (78 GPU comparisons); plus the occluding-step rule from the normal smoothing applied sample to sample at slope six: the Contact march stops at a step and a Cavity direction drops its pairs past one. Outline rows with a Contact line on congestus seed 1 at 30 s: 105 to 36; Cavity: 105 to 31; what remains is the base rising continuously into its own shadow. A JavaScript replica of the march against the field read back with readPixels reproduces every texel the GPU darkens. RESEARCH-dark-outlines.md holds the full account.

**Status (cavity strength).** At full strength Cavity now cuts 0.85 of the direct light and 0.9 of the ambient (was 0.6 and 0.7); the response shape and the 0 setting are unchanged. Contact is still a screen-space march over a height field that is a depth composite of domes, not a surface; the plan on record is to rebuild it in the field pass from the sphere list (a ray toward the light tested against each other puff as a sphere, with the penumbra widening along the ray), which has no outline by construction and can be mirrored by the lab.

**Status (contact rebuilt).** Contact is no longer a march over the height field. The field pass computes it in object space: from the surface point (p, H) a ray toward the light is tested against every other puff in the tile list as the sphere the union draws (centre at its depth offset, its eroded radius); the owner and any sphere the point sits on within T are left out, so a puff never shades itself and a merged lobe adds no second rim; the penumbra widens along the ray (T + 0.2 t) and the shadow fades out between 0.2 r and 0.6 r beyond the blocker's rim, inside the tile reach; blockers combine as a product of transmittances. The term is stored in a fifth RGBA16F target (COLOR_ATTACHMENT4, uAux4) and the shade pass reads it unfiltered, keeping the receiver's coverage confidence and the slider. lab-ref.js mirrors it (fieldRef returns contact when params carry light and contact), and tools/shadow-test.html compares the stored term texel by texel with the CPU reference on the overlap case (max difference 5e-4). On congestus seed 1 at 30 s with Contact 1: soft shadow lobes under the overhanging puffs, no outline, no dots. Sky at 60 fps with Contact on.

**Status (cavity rebuilt, contact rim fix).** Cavity now comes from the same field-pass loop as Contact, as sphere ambient occlusion: each other puff hides a share of the sky over the point, its solid angle (1 - sqrt(1 - r^2/d^2)) times the share of the sphere above the point's level, fading out over Cavity reach (at most 0.6 r) beyond the sphere's rim; the shares combine as transmittances and cav = smoothstep(0, 0.5, 1 - sky). A neighbour's centre is taken no higher than the point's own centre plane (its real depth offset when lower): at its offset a front puff drew a dark halo round every front lobe, on the plane a parent under a child blacked the child out. The shade pass reads o5.g, keeps the receiver's coverage confidence, Cavity in light and the 0.85 / 0.9 cuts; the screen-space rings and shadowField are gone, as are the regression page's two analytic height-field cavity cases (no height-field cavity exists any more), replaced by a cavity-vs-CPU-reference comparison on the valley case (4e-4). Contact: the self-exclusion (within T of a sphere's surface) now applies only inside that sphere's footprint; outside it the point is the puff behind, and the old margin left a bright strip hugging the rim of a front puff with a small depth offset (Gus's screenshot). Editor, congestus seed 1 at 30 s, Cavity 1: the creases between lobes darken, no outline, no halo.
