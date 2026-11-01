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
