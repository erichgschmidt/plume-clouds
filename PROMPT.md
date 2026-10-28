# Ghibli Cloud System — build prompt (from scratch, phased)

This is the prompt I would hand to a fresh team (or a fresh agent) to build the
cloud system again from nothing. It states what the thing is, what "done" looks
like, and the order of work. Each phase has a hard gate: the next phase consumes
the previous one as a finished, tested input and never reaches back to patch it.

---

## 0. What we are building

A real-time, procedurally generated 2D cloud **system** (not a single effect)
that produces cumulus formations in the Studio Ghibli idiom: broad, soft, rounded
masses that read as solid volumes; lobes that grow out of one another in a
coherent cauliflower / scoop pattern; a surface that rolls and churns slowly;
light from one direction, a graded shaded side, a soft cast shadow; a limited
banded palette on a flat sky. Natural enough to feel like a cloud we recognise,
fantastical enough to feel drawn by hand.

It must run efficiently in a browser today and port to a game engine with no
change of architecture: a tiny CPU simulation that emits a small array of
primitives, plus one or two full-screen fragment shaders and one static baked
texture. No per-pixel CPU work, no mesh, no particle system, no build step.

### The cloud formation, in words

A cumulus is a **tree of lobes**. There is a primary volume (the trunk: a broad,
near-horizontal mass). Out of its upper surface grow **billows**: fat, rounded,
short lobes. A billow that matures grows the next billow off its own tip, rotated
consistently in one direction, so the formation cascades like a cauliflower or
like scoops stacked by hand. Nothing floats free: every lobe overlaps the volume
it grew from by at least a third of its radius and never reaches further than
about two parent radii.

Each billow behaves like a **scoop of ice cream being rolled out of a tub**: it
is spherical, it emerges slowly from inside the parent, and its surface flows
outward from the lobe's centre and curls under at the rim, the way a ring vortex
or a mushroom cloud rolls. Surface detail is made of **intersecting sphere caps**
at two scales (large lobes, small sub-lobes), not of fractal noise: fbm reads as
rock or smoke, caps read as cloud.

Lobes have **depth**: they sit in front of or behind one another, occlude with a
soft seam, and cast short soft shadows onto what is behind. They never blob into
one another; they merge only where a lobe rejoins its parent.

Motion is slow and continuous. Lobes rotate gently about their root, emerge over
many seconds, and dissolve back into the parent, not into thin air. Nothing pops.

### The look, in words

- Light from the upper left. Three to five flat bands: cream on sun-facing
  slopes, light cyan on flat tops, mid blue on the shaded side, deep blue at the
  underside and in cast shadow, a thin cream rim where the silhouette faces the
  sun.
- Edges are rounded, never ragged or fluid. Erosion is allowed only as soft tufts.
- Shadows have a penumbra. A shaded side keeps a gradient (bounce light from
  below / opposite the sun) so every billow reads as a sphere.
- Slightly pixelated at a low internal resolution (around 320 px wide), ordered
  dither between bands, flat teal sky.

---

## 1. Architecture (fixed before any phase starts)

- **Sim** (CPU, deterministic, seeded): outputs `blobs: float4[N]` =
  (x, y, radius, seed) and `aux: float4[N]` = (branchId, z, parentIndex, link),
  N ≤ 64, 16 branches max. World space x ∈ [0,1], y ∈ [0, aspect]. Steps cover
  each frame's elapsed time exactly in substeps ≤ 1/60 s (never a fixed-tick
  accumulator: it stutters at any refresh rate but 60 Hz).
- **Field pass** (fragment shader → RGBA16F texture at internal resolution):
  per-branch signed distance fields, per-parcel sphere caps, a baked 256² billow
  tile for surface relief; outputs (height, mask, billow, contact).
- **Shade pass** (fragment shader → screen): normals from the height field,
  banded light, mipmap-blurred shadow march, bounce fill, rim, dither, palette.
- **Shell**: compact Unity-style panel; seed, preset, sim sliders, look sliders,
  JSON save/load, click-drag on the canvas aims the light.
- Every constant the renderer derives from the sim must be **static per preset**
  (reference radius), never recomputed from the live parcel set each frame.

---

## 2. Phases

Each phase ends with a visible, screenshot-verified result and a headless check.
Do not start the next phase until the gate is met. Later phases consume earlier
ones as-is.

### Phase X — One billow that reads as a sphere (renderer foundation)

Build the two-pass renderer with a **hand-written, static** list of three or
four overlapping parcels (no sim). Get a single lobe to look like a Ghibli puff.

Contents:
1. Field pass: per-parcel sphere cap `h = sqrt(R² − |q|²)`, smooth-max union;
   signed distance with polynomial smooth-min for the silhouette; mask.
2. Baked billow tile (value noise + two scattered sphere-cap lobe layers at two
   seeds), sampled in per-parcel material coordinates at a blurred mip level,
   screened together, added as relief with an edge envelope.
3. Shade pass: 2-texel normal stencil, light remap to bands, palette, dither,
   rim light, bounce fill from opposite the sun, sky composite.

Gate: a still of one lobe that a Ghibli reference would accept: rounded rim, lit
cream top-left, cyan flat, graded blue underside, no fbm craters, no plateau,
no hard outline. Frame rate 60 at 320 px.

### Phase Y — A formation (sim topology), using X unchanged

Build the sim that emits the parcel list X renders. Nothing about X's shaders
changes; Y only produces better input.

Contents:
1. Plume = tree: trunk chain of 4–6 parcels (r 0.16→0.12, near horizontal,
   curved), child chains of 3–4 parcels (r 0.13→0.075), max depth 2.
2. Per-branch z (trunk 0.5, children ±0.12…0.3), per-parcel z ramped from the
   parent's z at the root to the branch z at the tip.
3. Coherent budding: a per-plume handedness; new billows cascade off a mature
   billow's tip (heading continued, rotated the plume's way) or bud from the
   trunk at the widest gap between children along the outward normal. Root sits
   a third of a parent radius inside the parent; child length ≤ 2 × parent
   radius at the attach point.
4. Slow emergence: link/grow ramps over ~7 s; the whole chain starts inside the
   parent and extends out; death retracts the same way. Radii and silhouette
   bump both scale with the ramp so nothing pops.
5. Rotation about the root within a swing arc; parcels creep along the chain
   (feeding) with fades at both ends, wrap while invisible.
6. Presets: plumes (one cumulus), lavalamp (one tall churner), islands (three
   small), confluence (two leaning together). All sit fully in frame.

Gate: headless check (bounded radii, no NaN, bud/death counts, motion step size
regular at 59.94 and 144 Hz); screenshots of each preset show one coherent
formation with lobes attached to the body, none floating, none poking out.

### Phase Z — Depth, occlusion and shadow, using Y's z and X's field

Make lobes distinct in depth. Consumes Y's z values and X's per-branch fields.

Contents:
1. Composite per pixel by height: the tallest covering branch wins; soft-max
   seam with the runner-up (k ≈ depth spacing); depth offset rolls off toward
   each lobe's silhouette so a front lobe slopes down onto the one behind (no
   one-texel cliff).
2. Mipmapped field; shadow march reads a blur level that grows with distance
   (penumbra); contact shadow from a front branch within a few texels, widening
   with the z gap, read blurred. Never a `step()` in the shadow path.
3. Junction: root parcel bridges to its parent parcel with a capsule only when
   both ends are fully grown and the pair is not over-stretched.

Gate: screenshots show lobes layered front/back with soft seams and graded
shadows; no straight rods, no hard outlines, no shadow islands.

### Phase W — Surface motion (scoop roll), using Z's final field

Only now animate the surface. Consumes everything above unchanged.

Contents:
1. Flow-mapped roll: material coordinates flow outward from each parcel centre
   with a ring-vortex profile (zero at centre and rim, fastest mid-way), offset
   scaled to a fraction of the parcel radius per cycle; two phases crossfaded so
   distortion never accumulates. Both relief and silhouette bump use the rolled
   coordinates so bumps roll over the rim.
2. Slow world-space drift for the erosion tufts.
3. A single `roll` look parameter (0 = frozen surface).

Gate: a 10 s capture shows each billow's surface rolling over its own rim; stills
show no concentric rings and no added high-frequency detail versus Phase Z.

### Phase V — Control and polish, using W

1. Look sliders: billow, softness, erosion, relief, depth, roll, sun, elevation,
   shadow, bands, sky, pixelated. Sim sliders: speed, cohesion, breakup,
   buoyancy, turbulence, coverage.
2. Click-drag aims the light; JSON save/load/copy; keyboard shortcuts.
3. Only then: easing refinements (ramps that start slow then speed up are a
   polish item, never a Phase Y concern).

Gate: a designer can dial each preset to a Ghibli still without touching code.

### Phase U — Engine port (optional, after V)

Port sim to C# / C++ (same substep rule, same output arrays); port the two
shaders; bake the tile once. The renderer must accept the arrays by uniform
buffer and need nothing else.

---

## 3. Rules that held up (keep them)

- Shape comes from sphere caps and smooth unions, not from fbm.
- Blur the inputs to lighting (mip levels), never the output.
- Every pop, hitch or outline so far has been a discontinuity: a `step()`, a
  per-frame recomputed constant, a fixed tick, or a term that did not scale with
  the parcel's size. Hunt those first.
- Reference images: `reference/reference.png` (target pixel-art look),
  `reference/original-screenshot.png` (original tool), a Ghibli still for rim and
  light.
- Verify by screenshot before committing. Headless checks catch sim bugs, not
  look bugs.
