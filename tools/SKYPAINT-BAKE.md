# SkyPaint density-integrated export

Serve the repository, open `skypaint-bake.html`, choose a Studio preset or import
an exported SkyPaint scene JSON, select 128 or 256 resolution, then choose Bake.
The source cloud previews automatically on opening the page and when its preset
or imported scene changes. This single front view is separate from the last
completed baked asset. Previewing never saves or replaces a cloud in the sky.
The page validates and captures fifteen views with progress and cancellation.
Use in sky saves the completed asset locally; open the sky and choose Load saved
cloud if it is already open. Export downloads the portable frozen asset JSON.
The page retains the last completed result if a later bake fails or is cancelled.
If a bright imported scene exceeds the capture encoding, increase Highlight
range under Advanced capture and bake again. The CLI equivalent is
`--radiance-scale 64`. The default range 4 preserves precision for ordinary clouds.

`bake-skypaint.cjs` reads the separate SkyPaint checkout and bundles its actual
Viewer, studio recipe, procedural noise, density cache, composed-density shadow
integration and `studioLight` GLSL. It never writes into SkyPaint. Three.js and
esbuild are taken from that checkout. The generated bundle exists only in a
localhost export fixture or the separate browser authoring page; the shipped
sky runtime still samples 2D maps and never loads the author bundle.

```powershell
node tools/skypaint-bake-test.cjs
node tools/bake-skypaint.cjs --source ../SkyPaint --width 128
```

The default output is `assets/skypaint-default.js`, assigning
`window.SKYPAINT_DEFAULT`. A `.json` output filename exports plain asset JSON:

```powershell
node tools/bake-skypaint.cjs --source ../SkyPaint --width 256 --output assets/skypaint-256.json --report assets/skypaint-256-audit.json
```

`node tools/bake-skypaint.cjs --bundle-only` rebuilds the self-contained
`assets/skypaint-author.js` without opening a browser. This generated bundle is
for the authoring page only. It exposes `createSkyPaintBake(options)` and
`SKYPAINT_BAKE_SOURCE` with source hashes and capture views. Options include
`w`, `h`, `kind`, `densityResolution`, `radianceScale`, `halfHeight`, `canvas`,
`previewCanvas`, `signal`, and optional `scene` as exported JSON text or an
object. `radianceScale` must be finite and within 1e-6 through 65504, matching
the runtime's GPU-safe encoding bounds. Imported scenes pass SkyPaint's real
schema validation; sculpt programs
are flattened by its actual asynchronous `FieldReplay` implementation. Studio
lighting must be enabled so the runtime display transform agrees with the
source. Existing imported positions, illumination and character stay intact.

`prepareSkyPaintBakeScene(options)` runs schema validation and sculpt replay
without allocating a viewer. It returns `{scene,evaluated}`: the original
validated scene and a derived copy with sculpt programs flattened to sample
fields. It never changes the source program. An aborted signal rejects with
`AbortError` before GPU creation or between sculpt batches.

The returned adapter exposes `scene`, `bounds`, `center`, `halfHeight`, `range`,
and synchronous `measure(view)`, `capture(view)`, `compare(view)`,
`preview(view)`, `setFraming(height)` and `dispose()` methods. `capture` returns
base64 `radiance`, `depth` and `normal` RGBA8 maps in bottom-up row order.
`measure` returns the maximum occupied projected half-extent in object units;
take the maximum across all views and multiply by 1.18 before `setFraming`.
`preview` writes the original SkyPaint display to the preview canvas and returns
a PNG data URL. `dispose` is idempotent, removes captured event listeners and
releases render targets, density/noise textures and viewer GPU resources.
Cancellation is checked before captures and between sculpt replay batches.
`stats()` remains available after disposal and reports textures, geometries,
programs, listener count and WebGL status for lifecycle audits.

Both the CLI and browser page store the authoritative imported scene in
`recipe.scene`, capture settings in `recipe.capture`, and source hashes in
`source`. Their display metadata uses `bakeLighting.exposure`,
`bakeLighting.toneMap: 'exponential-v1'`, and `bakeLighting.frozen: true`.
The frozen flag describes illumination; exposure stays editable. CLI exports
also record the sun, look and direct/cache transport in `bakeLighting`.

The exporter accepts `--kind bank|tower|anvil`, `--density 128`,
`--radiance-scale 4` and an optional fixed `--half-height`. Capture size is 4:3.
The default fifteen views combine yaw -35/0/35 degrees with pitch
-85/-60/-30/0/20 degrees. Every view shares a single object center and scale.
A conservative first pass measures their alpha extents, then chooses a fixed
framing with 18% margin. This keeps the extremely conservative SkyPaint bounds
from shrinking the cloud to a few pixels.

The small shader adapter preserves SkyPaint's ray placement, 128 view steps,
32 shadow steps, density threshold, transmission early termination, lighting
and accumulation statements. It adds export outputs immediately before the
original background, exposure and tone mapping. RGB stores
`sqrt(premultipliedLinearRadiance / radianceScale)`, alpha stores accumulated
opacity. Values with alpha below half one RGBA8 alpha unit are exactly zero.
The runtime decodes RGB, composites and applies editable exposure with
SkyPaint's exponential tone map. Normals must not relight this appearance.

Geometry map interval 0 stores an opacity-contribution centroid as its front
depth, and the last contributing ray sample as its back depth. Its normal is a
density gradient at the centroid, for compatibility only. Centroid normals are
not reliably front-facing; runtime reprojection must not reject radiance using
their facing direction. Interval 1 is empty. This first export cannot uncover
internal volume detail between capture directions or change sun illumination.
Lighting is frozen; the bake exposure is a recommended display setting.

The audit compares the original SkyPaint shader with its export-instrumented
version in a floating-point target, checks cloud-only radiance plus transmitted
background against the original linear output, and measures the RGBA8 encoding
error, clipping, transparent RGB and per-view border coverage.
Every capture also checks for potential radiance clipping: only a view with an
encoded RGB channel at 255 requires an additional raw float read. If any raw
channel exceeds `radianceScale`, that view rejects with its capture angles and
the asset is not accepted. Ordinary unsaturated views keep the same cost.
Source SHA-256 hashes and the exact scene recipe accompany the asset. The PNG shows SkyPaint's
own original display output at the front view. The 128x96 asset and 64x48 LOD
use 5,529,600 raw bytes across all geometry and radiance maps.

`PLAYWRIGHT_MODULE`, `CHROME_PATH` and `SKYPAINT_SOURCE` override local defaults.
GPU browser sessions must run serially with the repository's other GPU audits.
`node tools/skypaint-preview-test.cjs` checks automatic preview, rapid source
changes, cached adapter reuse, cancellation, framing and saved-result isolation
with deterministic CPU fixtures. The browser UI audit verifies actual preview
pixels, preset/import changes and the completed asset's handoff to the sky.
`node tools/skypaint-bake-lifecycle-browser.cjs` audits valid scene imports,
translated coordinates, an actual SkyPaint sculpt carve, repeated capture and
idempotent disposal on the same canvas. It verifies source agreement and checks
GPU texture, geometry, program and captured-listener counts return to zero.
The bundled author script embeds full Three.js, Cloud Nodes Studio, Pako MIT
and Pako Zlib license notices from the read-only source dependencies.
