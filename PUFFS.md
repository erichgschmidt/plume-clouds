# Puffs: the cloud from one primitive (`puffs.html`, `src/puffs.js`)

A rebuild of the renderer beside the current one (`motion.html` + `src/render.js` are untouched).
The thermal (`src/motion.js`) is the same; only the drawing changed.

**One primitive, recursively.** A puff is a sphere on its parent's shell. Each sim parcel is a
root; it grows `Children` puffs of `Size ratio` its radius, each of those grows the same again,
down to `Levels`. A child lives one cycle: born on the parent's upper shell, carried round by the
parent's roll, swelling and subsiding (`Life` scales the rate), then reseeded at a new seat. Depth
is real: a child on the back of its parent sits lower in the height field and is hidden by it.
The tree is built breadth first with a budget of 2048 spheres.

**One union.** A log-sum-exp over every sphere's height with one `Softness`. The silhouette is a
soft union of the same spheres.

**One surface term.** A single fBm displacement of the final height (`Noise`, `Noise scale`,
`Flow`), with an amplitude that falls per level (root 0.25, child 0.6, grandchild 1) and with the
parcel's freshness from the sim.

**One darkening.** Every puff shades from its own top to its own bottom, and inherits 60 % of
its parent's shade at its birth point, accumulated down the tree (`Stack shade`). The whole cloud
also darkens from crown to base (`Base shade`). Direct light, one Lambert term with the same
palette as the old renderer.

Knobs: 11 surface + 6 light, against ~45 before. Field pass -> RGBA16F (height, detail, stack,
mask); shade pass -> screen; 1849 puffs at 120 s cost well under a millisecond.

Frames: `docs/night/20-puffs-t45.png`, `20-puffs-t120.png` (Children 6, Size ratio 0.62,
Embed 0.9, Softness 1.0, Noise 0.15). The crown reads as stacked domes; the base still shows
small puffs on bare large spheres and is the first thing to judge.

## Second pass (seven items)

- **Rim / double rim**: the height field was only defined inside the spheres, so the band of
  silhouette pixels just outside them (wider with Softness, and read by a wide Normal smooth
  footprint) had no height and lit up as an outline. Height is now defined over the whole
  silhouette (outside a sphere it falls away steeply) and the normal never samples beyond the
  mask (`21-puffs-soft4-smooth1.png`: Softness 4, Normal smooth 1, no rim).
- **Height launches the cloud**: Width / Height / Base level changed the ring under a base line
  computed at reset. They now re-seat the thermal (`sim.reseat()`), in both sandboxes.
- **Parallax motion**: `Sway (s)` is the period of the eye's sway (57 s default).
- **Noise**: `Flow` default 0.04 (it was crawling at 0.01); a second, finer set (`Noise 2`,
  `Noise 2 scale`); `Noise bias` (-1 only in shadow .. +1 only in light, decided by the
  undisplaced light); coverage: freshness now halves the noise on an old flank instead of
  removing it, so it is no longer centred on the fresh crown.
- **Haze**: an old, mixed parcel (low freshness from the sim) softens: flatter normal, direct
  light pulled toward the mid tone, and a fainter silhouette edge (`Haze`, 0.5 default). The
  field pass writes freshness to a second target for this.

## Night pass (2026-10-30 → 31): audit, many clouds, sky, depth

A/B baseline: tag `baseline-2026-10-30`, frozen copy at `ab/baseline/puffs.html` (same
seed, same time → same frame; `docs/night/28-*` and `29-*` are the after frames).

**Measured** (browser pane, 1 cloud, 240-texel field): render 0.44 ms, of which the CPU tree
build is 0.37 ms and the sim 0.005 ms; 1600–2048 puffs. The shaders are not the cost, the tree
build is. The old 2048 cap was hit by a 60-parcel, 5-child cloud and truncated the last level
mid-way (a pop).

**Renderer (src/puffs.js)**
- `render(clouds, time, sky)`: many `{ sim, look }` in one field. Per-cloud `look` is the FORM
  (children, ratio, levels, life, embed, depth, shear, shearBias, wind, lean, prim, primAmt,
  zoom, panX, panY, far). The `sky` look is the STYLE (softness, noise, light, haze, dither,
  atmos, depthFall, cirrus). `render(sim, look, time)` still works for one cloud.
- Budget: MAX_SPH 4096, uploaded with `UNPACK_ROW_LENGTH` so only the used columns go up. When
  the tree would overflow, the deepest level fades out (radii scaled by the shortfall, the
  first floor(f·children) kept whole, the next at the fraction) instead of being truncated.
  `renderer.degrade` reports it; the sky HUD shows it.
- Third target (band, puff depth weight, cloud depth weight). Band (crown→base shade) is now per
  puff in the cloud's own frame, so Scale, Lean and Pan all shade correctly. Transform order on a
  root: Scale about the base line → Lean by height → Pan.
- Depth weight: per puff from its own z (near face 1, back 0) × the cloud's `far`. `Depth
  falloff` widens the normal footprint, weakens the shadow and the noise by it, so near billows
  stay crisp and the recessed body softens (`28-depthfall-0.png` vs `28-depthfall-0.8.png`).
  `Shear bias` scales shear by the same weight. `Atmosphere` mixes far clouds toward the sky
  colour by the cloud weight only.
- Evaporating parcels sink into the body (burial 2.5 r) while they shrink, so the shrink is
  mostly hidden by neighbours.
- Cirrus: a wind-stretched fbm streak layer drawn where there is no cloud (sky(), in the shade
  pass), thresholded into the pale palette tone with a little Bayer.

**Sim (src/motion.js)**: blob table 64 → 128 (the reservoir was cut to the leftover slots and
popped at the base), `baseStart`, shape layouts (ring, flat, tower, twin, anvil) applied at
placement and respawn, leader growth bonus eased over 3 s.

**Sky (sky.html)**: N thermal sims, each with a species picked by depth (cumulus, humilis,
stratocumulus, tower, altocumulus, plus any preset saved in puffs.html), scale, parallax,
drift, detail level and haze from depth; one field, one style. Measured: 7 clouds, 3983 puffs,
400-texel field: render 0.89 ms, tree 0.94 ms, sims 0.05 ms (`29-sky-seed1-t80.jpg`).

**Old renderer**: motion.html / src/render.js stay as a reference. They read only the first 64
blobs and have no shape dropdown; not updated further.

**Still open**: the sky's composition is a first pass (far clouds too few and too low in frame
at some seeds); species weights are hand-set; no per-cloud wind drift of the cirrus; the
truncation fade changes which child index survives when the budget moves, which is continuous
in radius but can read as a slow breathing of the deepest level under heavy load.
