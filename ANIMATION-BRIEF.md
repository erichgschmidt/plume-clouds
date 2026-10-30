# Research brief: making the cloud motion look natural

You are asked to tune (and, where the parameters cannot express it, redesign) the *motion* of a
small WebGL2 cloud renderer so it reads like real cumulus seen from a distance in a 2D game.
The *shapes and shading are already right and must not change*. Two self-contained files are
attached: `plume-stage.html` (the game stage: stacked cloud groups over a ground, this is the
target) and `plume-clouds.html` (the editor with every slider, for experiments). Live source:
https://github.com/erichgschmidt/plume-clouds (`src/sim.js` motion, `src/render.js` surface
animation, `src/instances.js` stage). Open the stage in a browser; `window.stage` exposes every
cloud (`stage.instances[i].look`, `.sim.settings`, `.speed`, `.drift`) for live edits in the console.

## What "natural" means here

Real cumulus, watched for a minute, do roughly four things, all slowly:

1. **Drift** with the wind as a whole, far clouds slower on screen than near ones.
2. **Boil at the crown**: the top billows swell upward and roll outward, new domes push
   through from inside, old ones sag and flatten. The motion is coherent across neighbouring
   billows (a parcel of rising air), not independent wobbling.
3. **Keep their population**: a puff does not appear from nothing or vanish; it grows out of
   its neighbours over tens of seconds and merges back the same way.
4. **Erode at the edges**: thin fringes fray and dissolve slowly, the body stays solid.

What currently looks wrong (user feedback): forms popped in and out far too fast (now
disabled on the stage), everything moves at one speed, and the surface roll reads as a
texture sliding over a ball rather than air rising. The question is which of the existing
parameters, at what values and with what time constants, give the four behaviours above, and
what is missing.

## The moving parts and their parameters

Everything is deterministic in `time` (seconds). Three layers animate independently:

### 1. Sim: parcel skeleton (`src/sim.js`)

A cloud is a tree of branches, each a chain of 2..6 overlapping parcels (discs). Per branch the
layout gives parcel positions; parcels ease to their targets (`ease = 1 - exp(-h / 0.25)`).

| Control | Range | What it does |
| --- | --- | --- |
| `speed` | 0..6 | Scales the sim clock before substepping; also the render clock. |
| `cohesion` | 0..1 | Attachment reach and chain spacing: 1 pulls child lobes into the parent. |
| `breakup` | 0..1 | Lobe turnover. `cycleRate = 4·breakup²` scales each lobe's spin about its root; a lobe buds a successor after `SPAWN_ARC = 0.7` rad, dies after `DIE_ARC = 1.4` rad; birth/death ramp `8 + 24·(1 - breakup)` s. **0 = no budding, no dying, no spin.** The stage uses 0. |
| `buoyancy` | 0..1 | Bends child growth upward, raises child roots, stretches vertical reach. |
| `turbulence` | 0..1 | Whole-branch sway and drift from a curl-noise field (`_psi`, z = `time·0.18`), amount `turbulence²`; also a wandering bend along each chain (`sin(t·0.65 + phase + s·4.5)`). |
| `coverage` | 0..1 | Parcel radius scale (`1.75·coverage`). |
| preset `spin` | per preset, e.g. [0.05, 0.12] rad/s | Base lobe rotation rate about its root (one direction, successors ×1.27 per generation). |
| preset `curl` | per preset | Chain curvature. |

Emergence of a new lobe is *burial*, never a size ramp: `link` 0→1 raises the parcels out of
the cloud base (`h -= r·2.2·(1 - link)` in the field) while their radius is constant.

### 2. Field: surface animation (`src/render.js`, field pass)

| Control | Range | What it does |
| --- | --- | --- |
| `roll` | 0..2 | The rigid skin of caps on each parcel rotates about an axis perpendicular to the parcel's growth direction: `angle = time · 0.16 · roll · (0.85 + 0.3·hash(seed))`. Top of a lobe rolls toward the viewer and down its front (ring vortex). This is the only per-parcel "boil". |
| `cellFlow` (Flow) | 0..3 | Clock of the carve noise: secondary caps are carved by a 3D Voronoi/clouds volume sampled in rotating billow-local space, domain-warped and drifted by `time · flow · 0.32`; the primary breakup uses `0.55×` that clock. Looks like slow churning of the breakup pattern. |
| `erosion` | 0..3 | A thickness subtracted from core and caps (static per seed: the noise is sampled in material space, so it rotates with the skin but does not evolve). |
| `billow`, `embed`, `carve`, `primaryCarve`, `inflation` | shape | Static shape controls; animating them would change size, which reads as breathing (bad). |

### 3. Stage: instances (`src/instances.js`)

| Control | What it does |
| --- | --- |
| instance `drift` [dx, dy] per second | Whole-cloud translation (screen widths at depth 0). |
| instance `speed` | Per-cloud sim/render clock multiplier. |
| instance `depth`, stage `parallax` | Apparent scale `1 / (1 + depth·parallax)`; a camera pan moves far clouds less. |
| `refreshEvery` | Sprite re-rendered every n-th frame (far clouds). |
| `addGroup({rows, size, ...})` | Stacked cumulus from `single`-preset puffs (one still lobe each, `breakup` 0, only `roll` and `cellFlow` animate). |

So on the stage, right now, the only motion is: drift, the skin roll, and the carve-noise clock.

## Questions for you

1. **Time constants.** For a cumulus about 1/3 of the screen wide, what are plausible rates
   for drift, roll, and flow so that nothing reads as fast? Give values for `drift`, `roll`,
   `cellFlow`, `speed`, with reasoning (e.g. a billow at the crown should take 30..60 s to
   turn over). Consider scaling `roll` and `cellFlow` by parcel size: small puffs should churn
   faster than large bodies.
2. **Crown boil without popping.** With `breakup` 0 the stack is frozen apart from the roll.
   Is there a setting of `breakup`, `spin`, `SPAWN_ARC`/`DIE_ARC` and the ramp that gives
   slow, coherent lobe turnover (a dome rising through the crown over ~40 s, the old one
   sagging) with no visible appearance or disappearance? If not, propose the smallest change to
   the sim (e.g. a successor that buds *inside* its predecessor and grows while the old one
   sinks, both on one clock; or a vertical "updraft" parameter that lifts lobes along the stack
   while the bottom ones flatten).
3. **Coherence.** Each parcel's skin rolls with its own phase (`hash(seed)`) and axis (its
   growth direction). Should neighbouring puffs in a stack share a roll axis/phase (one rising
   column) and should the roll direction follow buoyancy (up and outward at the crown, down at
   the base)? Propose a rule in terms of the existing per-parcel data (position, parent, depth).
4. **Wind shear.** Should `drift` depend on depth (far = slower on screen already) *and* on
   height (crown faster than base)? Propose a formula per instance.
5. **Erosion over time.** The erosion noise is static per seed. Would a slow clock on it (like
   `cellFlow`) read as fringes dissolving, or as crawling? Suggest a rate or argue against it.

For each proposal: the parameter values or the exact code change, the time constant it
produces, and how to check it in the attached stage (what to set in the console, what to watch
for over 60 s). Do not propose changes to the shape construction, the shading, or the palette.
