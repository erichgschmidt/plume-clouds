# Motion-first restart (`motion.html`, `src/motion.js`)

The stage/instances version is parked at tag `v1-stage`. This sandbox keeps all the rendering
tech (CloudRenderer: cap skin, hierarchy, shadow detail, form AO) and replaces the branch-tree
sim with a model built from the motion up, after the sketch:

1. **Force pushes up.** Parcels enter on the axis near the base and rise inside the body.
2. **The force disperses at the top.** At the crown the flow turns outward.
3. **Roil starts at the top, slows, lands at the bottom.** Parcels cascade down the outside,
   are held at the base (Settle), linger there (more density at the bottom than the top), and
   are finally drawn back inside, where they fade by burial and re-enter on the axis.

The flow is Hill's spherical vortex in the thermal's frame (`u_z = U(1 - 2r² - z²)`,
`u_r = U r z`): one closed circulation, up the middle, out at the top, down the outside, in at
the bottom. Each parcel also has an azimuth around the axis, so the ring is a volume: screen x
is `r cos φ`, and `sin φ` sets the parcel's depth (front of the ring sits higher). The whole
thermal rises (Rise) and widens (Expand) slowly: the form grows while it churns.

Every parcel points at a hidden core parcel on the axis as its parent, so the renderer's skin
of caps rolls outward-and-over on each parcel (the roll axis is perpendicular to the
core-to-parcel direction), which matches the cascade.

## Sliders

Forces: Updraft, Width, Height (the ring), Rise, Expand (form growth), Settle (hold at the
base), Parcels, Size, Jitter, Dwell (seconds at the base before a parcel is drawn back in).
Surface and Light expose the renderer's main look controls. Presets: humilis (flat puff),
congestus (growing cumulus), tower.

`window.sim` and `window.look` are exposed for console experiments; `sim.parcels[i]` has
`r, z, phi, link, dwell` in the thermal's unit frame.

## Open

- Parcels in the interior (small r) are invisible but cost field-pass work; a shell-biased
  spawn would spend the budget on the visible surface.
- Several thermals side by side (a cloud street) and a base layer for stratocumulus.
- Feeding the stage: a ThermalSim can replace a CloudSim in `CloudStage.add` once the model is
  tuned, since both emit the same blobs/aux arrays.
