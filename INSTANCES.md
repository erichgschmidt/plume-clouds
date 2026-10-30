# Cloud instances (game use)

`src/instances.js` adds `CloudStage`: many procedural clouds on one canvas, each a live
`CloudSim` rendered by the shared `CloudRenderer` into one layer of a sprite texture array,
then composited far to near. Demo: `game.html`.

## Why it is cheap

- A cloud is rendered at its **sprite resolution** (default 160x112), not the canvas: the field
  pass is one shade per sprite texel, so cost per cloud is `spriteW x spriteH x its parcels`
  and does not change with the screen size.
- The **cap table** (skin of up to 20 caps per parcel: rotated shell position and radius after
  ownership) is built once per frame on the CPU (`CloudRenderer._capTable`) and read by the
  field shader from a 21x64 float texture. Before, the ownership test was a loop over all parcels
  for every cap for every texel. This alone took the 480-res editor from ~38 to ~58 fps and the
  stage from 18 to 60 fps with six clouds refreshed every frame.
- Far clouds can refresh their sprite every n-th frame (`refreshEvery`); they move slowly on
  screen so nothing is lost.

Measured (desktop GPU, canvas 636x430): 8 clouds, every sprite refreshed every frame, ~58 fps.

## Parallax and shadows

- Each instance has `depth` (0 near .. far). Apparent scale is `1 / (1 + depth * parallax)`,
  so a camera pan moves far clouds less. Haze mixes far clouds toward the sky colour.
- Composite shader: layers far to near. For each pixel of a cloud, the coverage of every nearer
  cloud is read where the sun ray through that pixel crosses the nearer cloud's plane
  (screen offset `shadowDir * depthDifference`, blurred by mip level `shadowSoft * depthDifference`),
  and the pixel is darkened toward the shadow tone by the maximum. That is the same idea as the
  per-cloud shadow march, across layers.
- All instances share the stage's `sun` / `elevation` so sprite shading and cast shadows agree.

## API

```js
var stage = new CloudStage(canvas, { spriteWidth: 160, spriteHeight: 112, maxInstances: 8,
  parallax: 0.9, shadow: 0.7, shadowSpread: 0.12, haze: 0.4, sun: 81, elevation: -17 });
var c = stage.add({ seed: 7, preset: 'plumes', x: 0.5, y: 0.4, size: 0.8, depth: 0.6,
  drift: [0.01, 0], refreshEvery: 2, settings: {...sim sliders}, look: {...renderer sliders} });
stage.update(dt);            // steps every sim and drift
stage.draw({ x: camX, y: camY });
```

Positions are in screen widths at depth 0; `size` is the sprite width in screen widths at depth 0.

## Not done yet

- Baked sprite loops for background clouds (zero per-frame cost).
- Sprite reuse: several instances could share one sim/sprite with different positions.
- Ground shadows (the ground as the last layer of the same composite).
- Editor integration: a stage preset / export from the paint canvas.
