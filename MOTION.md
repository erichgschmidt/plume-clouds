# Motion-first restart (`motion.html`, `src/motion.js`)

The stage/instances version is parked at tag `v1-stage`. This sandbox keeps all the rendering
tech (CloudRenderer: cap skin, hierarchy, shadow detail, form AO) and replaces the branch-tree
sim with a model built from the motion up, after the sketch:

1. **Force pushes up.** Parcels enter on the axis just above the condensation level and rise
   inside the body (burial emergence, never a pop).
2. **The force disperses at the top.** At the crown the flow turns outward.
3. **Roil starts at the top, slows, lands at the bottom.** Parcels cascade down the outside;
   on the sinking flank they mix with dry air and soften; below the condensation level they
   evaporate and are recycled.

## The model (ThermalSim)

- **Flow**: Hill's spherical vortex in the thermal's frame (`u_z = U(1 - 2r² - z²)`,
  `u_r = U r z`): up the middle, out at the top, down the outside, in at the bottom. Each parcel
  has an azimuth around the axis (volume; front of the ring sits higher). The thermal rises and
  widens slowly, bounded so the crown stays in frame.
- **Condensation level** (`baseY`): a fixed world height. The renderer cuts the field there
  (`uBaseY`), so the base is flat regardless of the spheres.
- **Basal reservoir + feeding neck**: a band of large, slow, soft parcels just above the base
  and three on the axis up into the body, so the crown never floats over a stalk.
- **Bubbles**: with a pulse, re-entering parcels are released as a cohort (3..6 over 5 s, one
  shared azimuth, a 1.45x lead parcel that rises 1.25x faster, 70 % shared wander) with a surge
  travelling up the axis. Intervals are randomized (0.75..1.25 x pulse).
- **Exposure / freshness**: sinking on the outer flank accumulates exposure; freshness decays
  (`mixing` seconds). It reaches the renderer twice: `sim.detail` scales small caps and big
  lobes in the cap table, and cap-table column 21 scales the relief bumps in the field pass.
  Fine relief also has a 12 s half-life after condensation unless the parcel is a fresh high
  crown. Below 0.08 freshness a parcel retires by burial.
- **Size hierarchy**: a crown parcel is ~2.5x a flank parcel (quadratic in height); young
  parcels grow in over 4 s; old ones erode up to 20 %.
- **Roll**: each parcel's billow skin turns with half the curl of the mapped flow (x Roll gain),
  about an axis tangent to the ring: a flank puff spins top-outward and under, a front puff
  rolls toward the viewer. The angle is integrated in the sim and passed in `sim.spin.w`.
- **Noise**: 2 s correlated (Ornstein-Uhlenbeck), so motion is frame-rate independent.
- **Formation**: starts as a compact puff on the base (40 % of the population) and grows to
  the full count over `formTime`.

## Single puff (`puff.html`)

One parcel, large in frame, with Roll (rad/s), Axis tilt (screen-plane turn vs. rolling toward
the viewer), Freshness, an optional neighbour, and the same Surface / Light sliders. Use it to
judge the skin before the whole thermal.

### The skin lives (cap life)

A cap is no longer a fixed seat on a rigid skin that wheels round with the roll. Each cap lives
one cycle: it is born on the upper shell, carried round by the roll at its own rate (0.7..1.3x)
while it swells and subsides (`sin^0.6` envelope), sinks back into the body as it fades, and is
reseeded at a new azimuth. Big lobes live ~2x longer and never drop below 45 % so the macro
form persists. At zero roll the skin still breathes (one life per ~60 s). `Cap life` scales the
cycle rate (0 freezes the skin). On the world-down half the primary carve may only deflate the
parcel (`uBaseFlatten`), so no retained lobe stands out of the underside (the udder / bead).

### Round caps (`Cap warp`)

The primary carve warps the parcel's material frame to break the silhouette; evaluated in that
frame, caps and relief were smeared along the warp (the elongated billows). Caps and relief now
sit in the unwarped frame (`Cap warp` 0, the default), so they are round domes with real depth
while the carve still shapes the body. 1 restores the old behaviour.

### Stacked shade (`Stack shade`)

The base band generalised to every scale: each parcel darkens from its own top to its own
bottom, and each cap on it does the same (field alpha, accumulated with the same soft-max
weights as the normals). Direct light loses up to 50 %, ambient up to 80 %, scaled by the slider
(0.4 default). Together with the base band this gives gradients of stacking in the sub-volumes
rather than one shadow at the bottom.

### The dark base and the sun

The base band (`Base shade`) is optical depth: light entering at the crown is scattered out
before it reaches the base, so it does not move with the sun's azimuth. It scales with sun
elevation (x0.3 at the horizon, full above 45 deg): a low sun lights the near flank down to the
base and thins it.

### Bounded growth, parallax, two fixes

- The ring expands to at most 1.25x its width and 1.3x its height, parcel size no longer scales
  with the ring, and a parcel never exceeds 3x the Size slider: the cloud reaches its adult size at
  ~60 s and holds it (`19-motion-bounded-t150/t217.png`; the mean radius is flat from 60 s on).
- `Parallax` (Forces): a slow sway of the eye; each parcel shifts by its depth around the ring
  (a pure translation, so the forms keep their shape: a semi-orthographic dimensional shift).
- Pop: a big lobe was reseeded at 45 % of its size, so it jumped to its new seat once per life.
  Lobes now fade out and in like the small caps.
- Hard line in the shadow: the underside carve clamp switched on with a step at neutral scale.
  It now clamps continuously.

## Sliders (Forces)

Updraft, Width, Height (the ring), Rise, Expand, Settle, Parcels, Size, Jitter, Mixing (s),
Bubble (s), Base level, Roll gain, Form (s), Base share. Surface and Light expose the renderer
(including Base shade: light falls from the crown to the base, and Softness).

`window.sim`, `window.look`, `window.renderer` are exposed for console experiments.

## Renderer additions made for this model

`uBaseY` (field cut), `sim.spin` (per-parcel roll axis + angle), `sim.detail` (freshness),
cap-table column 21 (freshness into the field pass), `uBand` (crown-to-base light falloff),
and a wider Normal-smooth footprint. The editor and stage pass none of these and are unchanged.

## Open

- Early frames: a seam where the crown's underside meets the lower body before the flank fills.
- Several thermals side by side (a cloud street); a ThermalSim per `CloudStage` instance.
- Interior parcels (small r) are invisible but cost field-pass work.
