# Plume Clouds — Foundry bridge and legacy contracts

## Active Foundry pipeline (November 2026)

`puffs.html` is the Foundry authoring/baking editor. `sky.html` renders authored
cloud assets. The user explicitly permits 3D authoring and baking; the running
sky consumes only 2D capture maps, with no particle simulation, SDF evaluation,
volume solver, or mesh rendering. The supplied Foundry prototype is an authorized
source for this integration and is preserved in `reference/cloud-foundry-v2.1.html`.

- `FoundryAssets` v2 validates and serializes four byte-exact geometry RGBA8 maps
  plus four optional six-way lighting maps per capture. V1 assets still load.
  Lighting uses two signed XYZ RGB maps per occupied interval with matching
  coverage alpha, storing visibility times directional cosine. The sky normalizes
  the interpolated response by the unoccluded directional basis before applying
  continuous diffuse lighting, preserving brightness at diagonal sun angles.
  Angles are explicit degrees; normals use object axes, map rows are bottom-up.
  IndexedDB carries the active asset between pages. JSON export/import also works
  across origins or when local storage is unavailable.
- Lower resolutions are explicit captures in `lods`, smallest first, with the
  master at the asset root. Each reduction copies a complete representative ray
  (geometry and light), then pads depth without padding coverage. Packed depth
  bytes are never averaged or passed through hardware mip generation. Selection
  follows projected logical-pixel size with hysteresis, not distance alone.
- `FoundryPixelGrid` presents the logical canvas at integer physical-pixel scale,
  including fractional device pixel ratios. Motion snapping affects rendered
  centers only; the simulation and camera retain continuous positions. The grid
  adapts to viewport size using whole cells and a small padding remainder.
- `FoundryScene` owns deterministic instance placement and camera movement.
  The shared clock controls travel, drift, sway and breathing. Manual camera
  movement remains available while playback is paused. Look elevation exposes
  overhead captures; azimuth holds a continuous front/underside continuation near
  zenith rather than flipping to an unavailable back-hemisphere capture.
- `BakedCloudRenderer` shares uploaded maps between cloud instances. Its instance
  packet uses height-normalized screen coordinates (center zero, positive Y up),
  half-height scale, positive camera distance, and yaw/pitch in degrees.
- Capture selection uses the four surrounding grid views with continuous weights,
  rather than changing silhouette ownership at the nearest-view midpoint. Sparse
  imported capture layouts use a distance-weighted stencil with a vanishing outer
  weight. Lookup traverses the 2D map along the projected viewing line, intersecting
  continuous bilinear patches of decoded depth. Empty/discontinuous patches keep
  their original covered texel footprints; there is no screen-space hole dilation
  or tangent-plane extrusion. Normals and directional lighting use the same patch
  weights. View appearance blends continuously, with geometric support weighted
  by capture contribution; an infinitesimal new view cannot veto the whole cloud.
  Established front samples fully occlude farther samples. Newly entering views
  introduce their depth correction over the first 8% of capture contribution;
  this prevents a nearly zero-weight view from snapping the depth buffer and
  cast shadows. Only vanishing capture support fades coverage at disocclusions.
  The renderer uses occupied map bounds for scissoring and depth lookup.
- Capture coverage must include the requested viewpoint. The default asset has
  15 front/underside captures; a narrow front-only atlas cannot reveal an underside.
  Requests outside the capture range hold a supported view. Surfaces absent from
  every participating capture cannot be reconstructed exactly; the finite captures
  and two depth intervals are not unrestricted 360-degree geometry.
- Depth-map shadows approximate visibility in the current screen. They cannot
  account for offscreen blockers or geometry absent from the baked captures.
  The runtime screen-space shadow pass applies between instances only. Internal
  shading uses baked AO and the six directional visibility captures; it responds
  to the sun through interpolation, not a runtime volume trace. Partially
  transparent intersections currently retain the nearest surface rather than
  compositing every depth layer. Capture normals and sun use common object/world
  axes, so camera movement does not rotate the illumination.
  Frozen assets support relighting and gentle map deformation, not live topology
  evolution, physical merging, or a complete atmospheric simulation at runtime.

The old particle pages remain at `puffs-legacy.html` and `sky-legacy.html` for
comparison. The checkpoint before this migration is commit `4046d02`.

### Working with the bridge

Open `puffs.html`, shape the formation, select the 15-view overhead preset, then
choose **Freeze & bake asset** and **Use in sky**. Open `sky.html` and choose
**Load from Foundry** if it was already open. **Export sky asset** / **Import asset**
is the portable handoff when the pages have different origins. A baked starter
asset is included, so the sky does not depend on an authoring session at startup.
**Starter cloud** loads it without overwriting the saved author asset. Older assets
need rebaking for six-way lighting and explicit detail levels; they keep normal
lighting as a fallback. The starter has a 256×192 master and 128×96 / 64×48 levels
(about 29.5 MiB raw). A 512×384 bake is available for closer views; its full 15-view
geometry/light pyramid is about 119.5 MiB. Total validated map budget is 160 MiB.
The author preview and basic standalone preview export remain normal-lit; the sky
renderer consumes the six-way maps. JSON sky assets and ZIP exports carry them.
This first bridge repeats one active asset; it does not yet manage a library of
different cloud species or baked animation sequences.

Rebuild the standalone pages with:
```
node tools/build-single.js puffs.html dist/plume-puffs.html
node tools/build-single.js sky.html dist/plume-sky.html
```
CPU regressions: `tools/foundry-assets-test.cjs`, `tools/foundry-scene-test.cjs`,
and `tools/foundry-renderer-test.cjs`. Browser regressions:
`tools/foundry-author-test.cjs`, `tools/foundry-renderer-browser.cjs`,
`tools/foundry-sky-test.cjs`, and `tools/foundry-bundle-test.cjs`.
Pixel-grid checks are `tools/foundry-pixel-grid-test.cjs` and
`tools/foundry-pixel-grid-browser.cjs`. Capture transitions are checked by
`tools/foundry-view-selection-test.cjs` and `tools/foundry-transition-browser.cjs`,
using independently generated sphere captures and a known open gap. Real-cloud
hole counts are diagnostics, since a real cloud can contain intentional holes.
`tools/bake-foundry-default.cjs` rebuilds
the bundled starter through the actual authoring pipeline.
Run them with Node; browser tests accept `PLAYWRIGHT_MODULE` and `CHROME_PATH`.
The author test expects this repository served at `http://127.0.0.1:8765`,
overridable with `CLOUD_TEST_URL`. The sky test starts its own temporary server.

The contracts below describe those legacy systems, not the active Foundry path.

## Legacy v1 contract

Goal: a browser cloud field where cloud volumes drift apart like plumes, break off in
cloud-like (ragged, billowy) ways, roil, and re-merge into other volumes — lava-lamp
topology, cloud texture. Look target: `reference/reference.png` (flat teal sky, broad
soft masses, upper-left light, blue shadow planes, banded cream→cyan palette, slightly
pixelated). Old prototypes in `reference/*.html` are reference-only; do not copy code.

Everything runs from `file://` — classic `<script src>` tags, NO ES modules, NO build.
Each file assigns one global. No external dependencies.

## World
- World space: x in [0,1] left→right, y in [0,1] top→bottom (screen-like), aspect
  handled by renderer (world x spans canvas width; y scaled by aspect = h/w, i.e. a
  circle in world units is a circle on screen; sim treats y range as [0, aspect]).
- Time in seconds. Sim is deterministic for (seed, preset, settings, fixed dt steps).

## src/sim.js  → `window.CloudSim`
```js
const sim = new CloudSim({ seed: 7401, preset: 'plumes', aspect: 0.75 });
sim.settings = { speed:1, cohesion:.6, breakup:.5, buoyancy:.5, turbulence:.4, coverage:.6 }; // all 0..1 except speed 0..3
sim.step(dtSeconds);           // advances; internally fixed 1/60 substeps
sim.blobCount                  // int ≤ CloudSim.MAX_BLOBS (=64)
sim.blobs                      // Float32Array(MAX_BLOBS*4): [x, y, r, seed] per blob, world units, r = core radius
sim.aux                        // Float32Array(MAX_BLOBS*4): [heat 0..1, age s, parentIndex (-1 none), linkStrength 0..1 decaying over ~3 s after a split]
sim.reseed(seed, preset)       // rebuild
sim.resize(aspect)
CloudSim.PRESETS               // ['plumes','lavalamp','islands','confluence'] (names fixed)
```
Semantics the renderer relies on: blobs are the ONLY shape source. The renderer unions
them with a smooth-min whose blend distance grows with `cohesion`; two blobs closer than
~(r1+r2)*(1+0.6*cohesion) will visually bridge. The sim owns topology: parcels orbit a few
slow attractors (lava-lamp heat cycle: heat↑ → rise + detach, cool → sink + rejoin),
advected by a curl-noise flow (turbulence), split into children (volume-conserving,
breakup rate) and merge when deeply overlapping. Keep r in ~[0.03, 0.22]. Children must
inherit parent's x,y and get a seed derived from parent so texture continuity holds at
split. Never teleport a blob; fade r in/out over ≥0.5 s when born/dying.

## src/render.js  → `window.CloudRenderer`
```js
const r = new CloudRenderer(canvas);   // WebGL2 required; throws with message otherwise
r.resize(fieldWidth)                   // internal field texture width (e.g. 320); height = round(w*aspect) where aspect = canvas.height/canvas.width
r.render(sim, look, timeSeconds)        // uploads sim.blobs/aux as uniforms, 2 passes, draws to canvas
look = { billow:.5, softness:.3, erosion:.4, sun:120, elevation:17, shadow:.8, bands:18, sky:true, pixelated:true, relief:.5 }
```
Pass 1 (field, RGBA16F or RGBA8-packed): per pixel, smooth-min union of blob SDFs; each
blob's radius is modulated by fbm noise sampled in BLOB-LOCAL coordinates
((p - c)/r rotated by seed) so billows ride with the blob; a second, world-space fbm
(advected slowly) erodes the field (`erosion`) so bridges between separating blobs tear
into ragged tufts rather than clean water necks. Height = smoothstep(edge) ^ k plus
restrained relief from the local billow noise (`relief`). Also output a coverage mask.
Pass 2 (shade): finite-difference normals on the height, lambert from sun(az,el), a short
heightfield march toward the sun for self-shadow (`shadow`), palette: cream lit →
light cyan mid → blue shadow planes; quantize to `bands` steps; flat teal sky
(#096988-ish) when `sky`, else transparent. Nearest-neighbour upscale when `pixelated`.

## index.html + src/app.js  → shell
Compact, sterile, Unity-style editor UI (dark, dense, small labels, grouped foldouts),
canvas left, 280px panel right. Controls: play/pause, restart, seed+shuffle, preset
buttons, Sim sliders (speed, cohesion, breakup, buoyancy, turbulence, coverage), Look
sliders (billow, softness, erosion, relief, sun, elevation, shadow, bands, resolution
160/240/320/480), toggles (sky, pixelated), fps readout, Save/Load JSON of
{seed,preset,settings,look}, keyboard: Space play, R restart, F fullscreen.
app.js: rAF loop, dt clamped to 1/20, fixed-step sim, renderer.render each frame.

## Engine portability (design constraint)
The whole look must stay: tiny CPU sim (≤64 parcels, O(n²) merge test is fine) + ONE field
fragment shader driven by a uniform float4 array + ONE shade shader. No CPU pixel loops,
no readbacks, no textures except the two internal passes. This is so it can be dropped
into a Unity/Godot material later. Renderer: when `aux.linkStrength > 0`, add a thin
capsule-shaped bridge field between child and parent, scaled by linkStrength and eroded
by the world noise, so splits tear as strands rather than popping.

# v2 — distinct plumes in depth (supersedes the merge semantics above)

Owner feedback on v1: "they should feel like rotating plumes that feed into each other;
remain distinct, separated by depth and by shadow cast onto one another; a plume merges
into the volume only on the one side where it branches back into the primary form."

## Structure
- A **plume** is a tree: one trunk branch, with child branches attached at a root point
  on the parent branch. Each **branch** is an ordered chain of 3–8 parcels from root to tip.
- Each branch has a depth `z` (0 = farthest, 1 = nearest). Children are offset from
  their parent by ±0.12..0.3 so branches sit on different layers.
- Branches **rotate** slowly about their root (plume-like swirl, ~0.05–0.15 rad/s) and
  **feed**: parcels along a branch creep from tip toward root, are absorbed into the
  parent at the root, and the branch regrows from the tip (or the reverse, per branch,
  so some plumes are fed by the trunk and some feed it). Tips billow (radius breathing).
- Branches are born (budding off a parent at a root point) and die (shrinking into the
  parent) on `breakup`; count stays 2–6 branches per plume, 1–3 plumes per preset.
- NO parcel-level merging between branches. Smooth union only WITHIN a branch, and
  between a child's root parcel and its parent via a persistent bridge.

## Data (sim → renderer)
```
sim.blobs : Float32Array(64*4) [x, y, r, seed]
sim.aux   : Float32Array(64*4) [branchId (0..15, int as float), z (0..1), parentBlob (index of the parent-branch parcel the root attaches to, or -1), link (0..1: bridge strength, 1 for a mature attachment, ramps 0→1 over ~2 s at birth and 1→0 while dying)]
```
Parcels of one branch share `branchId`; the root parcel is the one whose `parentBlob >= 0`.
`CloudSim.MAX_BRANCHES = 16`.

## Renderer composite
Pass 1 keeps a per-branch SDF `dB[16]` (smooth-min only among parcels with the same
branchId; bridge capsule from a root parcel to its parentBlob smooth-min'd into the
CHILD branch). Height per branch `hB = dome(dB) + relief + zB*zScale`. Composite: the
branch with the largest `hB` among those with `dB < 0` wins the pixel (hard occlusion,
so plumes stay distinct); along the bridge capsule (parameter t from child root to
parent), blend child and parent heights so the junction is seamless. Output also a
"branch edge" term (how close the winning branch's silhouette is to another branch
behind it) so pass 2 can draw a contact shadow. Pass 2: unchanged lighting plus the
self-shadow march now naturally casts the front plume onto the one behind (height
includes z); add the contact-shadow darkening at branch-over-branch edges.
