# Research brief: the "toenail" / double-rim artifact in Plume Clouds

You are being asked to research a *foundational* fix for one visual artifact in a small
WebGL2 cloud renderer. The whole app is one self-contained file, `plume-clouds.html`
(attached). Open it in a browser, nothing else is needed. The live source is at
https://github.com/erichgschmidt/plume-clouds (`src/render.js` is the renderer,
`src/sim.js` the particle sim, `src/app.js` the UI).

The goal is a Studio-Ghibli / pixel-art cumulus look: rounded billows stacked on larger
rounded volumes, shaded in a few flat tones. The overall *shape* is right and must not
change. The artifact is in how the height field is built where billows meet.

## What the artifact looks like

Along the rim of many small billows there is a thin bright arc hugged by a thin dark arc,
like a toenail or the edge of a coin. At larger scales (the `lavalamp` preset at
Resolution 480) the same thing reads as a double outline around each sphere. A related
form: a "peanut shaped" hard contour where one big volume's silhouette prints through the
billows stacked on top of it.

## Simplest reproduction

1. Open `plume-clouds.html`. Click preset **plumes**. Let it run ~5 s, press **Pause**.
2. Default look (Billow 2, Softness 0.79, Blend 1, Resolution 160, Pixelated on).
   Look at the rims of the small billows on the far side of the lobe: bright arc + dark arc.
3. Switch Resolution to **480** and preset **lavalamp**: the same arcs become clear double
   outlines around the spheres.
4. It is already present with **two** parcels. It is not a resolution, dither, or
   pixel-snapping artifact: it appears at every resolution and with Pixelated off.

Please find the *first* configuration in which it appears (two spheres, one cap) and
reason about that, rather than tuning the many look sliders. A fix that needs the user to
balance five parameters is not what we want.

## How the height field is built (the part under suspicion)

Everything is a 2D height field over the screen, rendered once per frame into a
float texture, then shaded by a second pass from its gradient.

Per cloud parcel (a disc of radius `r` at `b.xy`):

- **Core sphere:** height `coreH = sqrt(core² − |q|²) · r` with `q = (p − b.xy)/r`,
  `core = 0.93`. A signed distance `sd = (rho − core)·r` gives the silhouette.
- **Skin of caps:** 4–20 small spheres sit on the core at fixed positions on a rigid 3D
  shell that rotates slowly about an axis (so caps roll over the rim and tuck under).
  Cap centre `cen` (|cen| = 0.78), radius `rad ≈ 0.28–0.46 · 0.84 · sqrt(billow)`.
  A cap in front of the shell (`cen.z ≥ 0`) projects as a full disc; one behind the rim
  projects only its part above the shell plane (`pr = sqrt(rad² − zc²)`).
  Cap height `lh = cen.z + sqrt(rad² − dd)` where `dd = |q − cen.xy|²`.
  Silhouette: `sd = smin(sd, (sqrt(dd) − pr)·r, r·0.045)`.
  Height: `cap = smax(cap, max(lh,0)·r·join, r·0.02)` with a crisp
  `join = smoothstep(0, rad·0.02, −sDist)`.
- **Per-cap ownership:** a cap is shrunk away where a *neighbouring parcel's* sphere is
  higher at the cap centre (`rad *= smoothstep(−0.15 r, 0.05 r, selfH − otherH)`).
- **Crown flatten:** near the top of the core, cap relief is scaled down by 0.55.
- Parcels in one branch are merged by a log-sum-exp soft max with width
  `T = refRadius · 0.08 · Softness`; branches are merged with a second soft max
  `T2 = refRadius · 0.09 · Softness · Blend`.
- The shade pass takes a finite-difference normal (offsets of 2 texels), a 16-step
  shadow march along the light, a bounce fill, and a "step" test: where the height
  drops by more than `uJumpW = 0.05 · maxR` across one texel the gradient is gated so a
  cliff is not shaded as a slope.

Our working theory: a cap's edge is a *height step* (the cap's sphere surface ends in a
vertical wall where it meets the core or a neighbouring sphere). The step is one texel
wide, the shade pass sees the near side as a lit slope and the far side as an occluded
slope, and draws the pair of arcs. Where a cap crosses the rim of a *different* sphere
the wall is tallest, which is why the artifact is strongest where billows overlap two
volumes. Everything we tried so far attacks the symptom at the shade pass or softens the
geometry; both trade away the rounded look.

## What has been tried, and the outcome

| Attempt | Result |
| --- | --- |
| Smooth-max joins with wide k (caps blended into the core) | Caps vanish, "pennies in a sock" |
| Hemisphere caps sitting on the surface | Rim ring around every cap |
| Caps as full spheres unioned with the core (current) | Rounder, artifact remains |
| Edge-ramped caps, caps curving down past the rim ("thumb lips") | Shape wrong |
| Bell / bulge model instead of spheres | "Way off", reverted |
| Per-pixel ownership between parcels | Drew arcs itself; replaced by per-cap ownership |
| Per-cap ownership (current) | Removed some crescents, not all |
| Cap size saturation at high Billow | Fixed ring creases at billow > 2 only |
| Plinth / shelf under the body (0.3 + 0.7·sqrt profile; outline-based shelf) | Hid rim caps and changed the silhouette the user likes; reverted |
| Shade pass: 8-direction cliff AO | Dark crescents at extreme sun; removed |
| Shade pass: ratio step test → difference-gated step test | Fewer false steps, double line still there |
| Shade pass: highlight / fill sliders, texel snapping, march jitter, analytic erosion | Cosmetic only |
| Toon pass (thresholded energies, input dither, ink on the near side of a step) | Hides the shaded pair, still prints a line per cap |
| Blend slider (wider cross-branch soft max) | Softens volume-to-volume seams, does not remove the cap arcs |

## What we want from you

1. A diagnosis in terms of the *minimal* case: two overlapping spheres and one cap.
   Where exactly does the height field or its gradient produce the bright+dark pair?
   Please reason from the construction above (or the source), not from the sliders.
2. One or two candidate constructions that remove the artifact *by construction*, for
   example: a different way of attaching caps to the core so the join is C1 continuous
   while the cap stays a round bump; a different field representation (true 3D SDF
   ray-march of sphere unions, or a volumetric density with a thickness-to-height map);
   or a shading approach that does not need a height step at all (e.g. a normal map built
   per-cap analytically rather than from finite differences of the composite height).
3. For each candidate: what it costs (per-pixel work; we loop over up to ~60 parcels × 20
   caps already), what it would change in the look, and the smallest experiment that
   would prove it on the two-sphere case.

Do not propose more slider tuning, post-process blurs, or softening the silhouette.
The shape, the pixel-art tones and the slow rolling animation are already right.
