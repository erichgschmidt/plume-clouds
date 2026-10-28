# Plume Clouds — design notes

## What the old prototypes did
`reference/cloud-field-generator.html` hand-authors "hosts" (clusters of ellipse roots at
fixed pixel coordinates) and "travelers" (a tuft that rides a sinusoidal arc between two
hosts). A CPU loop splats ellipses into a 320-px mask, reconstructs one shared depth
surface (Poisson-style relaxation), rasterises a light transmission march on the CPU,
then a WebGL finish pass applies the banded palette. The topology is scripted: a
traveler is always joined at phase 0 and detached at phase 0.25, forever.

## What is different when starting fresh
1. **Topology is simulated, not scripted.** The sim owns a flat list of ≤64 soft parcels
   (x, y, r, seed). Parcels orbit a few slow attractors, carry a heat cycle (hot → lift
   and detach, cool → sink and rejoin the nearest body), get advected by curl noise,
   split with area conservation, and merge when they overlap deeply. Split/merge are
   real events, so the field never repeats and never needs per-composition authoring.
2. **No hierarchy.** Trunk/branch parent-child puffs were considered and rejected: a
   tree makes every detach a special case and makes re-merging into a *different*
   parent awkward. A flat set plus a decaying `parentIndex/linkStrength` (a strand that
   tears off over ~3 s) gives the same visual continuity without the rigidity.
3. **The shape lives in one fragment shader.** Union of parcel SDFs with smooth-min,
   billow noise sampled in each parcel's local frame (so texture rides with the parcel
   instead of sliding across it), plus a world-space erosion noise that chews bridges
   into ragged tufts. Smooth-min is what makes necks pinch and bridges form "for free"
   when parcels approach or separate; erosion is what stops it looking like water.
4. **Zero CPU pixel work, zero readbacks.** Two passes (field → shade) at a small
   internal resolution, nearest-neighbour upscale for the pixelated reference look.
   The CPU sim is a few hundred float ops per frame. This is the engine-portable part:
   a Unity/Godot material with a `float4[64]` uniform reproduces it exactly.
5. **Lighting from the height field** (finite-difference normals, short self-shadow
   march, posterised palette) rather than a reconstructed shared-depth surface. Cheaper
   and the banding hides the difference.

## Engine port sketch
- Sim: ~300 lines of C#/GDScript; run at 30 Hz on the main thread.
- Field + shade: two full-screen materials, or one if the target supports derivatives.
- Scale: the 64-parcel loop is the cost driver; at 320×240 it is nothing, at 1080p
  tile the screen or cull parcels per tile.
