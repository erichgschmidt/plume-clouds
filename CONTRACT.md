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
