# Plume Clouds — module contract (v1)

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
