# Retired absorption experiment

The experimental root bonding, fusion, and absorption ripple have been removed from
both editors and the production renderer. Older saved absorption keys are ignored;
simulation roots now render at their natural positions and radii.

The former source, tests, documentation, and self-contained study are preserved in
`../archive/absorption-20261103-231803.zip`. This is a historical snapshot, not part
of the maintained renderer or test suite. The old study URL now shows a retirement notice.

These independent controls remain:

- Contour cohesion: local outline joining, with no root pairing or absorption.
- Child deformation and Deformation inheritance: seeded shape variation.
- Shadow simplification: quieter broad lighting in shaded areas.

## Efficiency direction

The renderer already bins puffs into bounded tile lists, rejects subpixel children,
and supports scene/cloud budgets. The sky editor adds distance LOD and less frequent
far-cloud simulation/tree rebuilds. Held geometry still costs uploads and GPU field work.

Rendering dormancy should preserve simulation state and stable IDs. A non-winning
puff can still affect soft surface unions, attributes, body lighting, silhouette,
contact, or cavity; owner-pixel counts alone are not a safe visibility test.

Suggested stages, not implemented yet:

1. Cache unchanged geometry and omit proven offscreen influence bounds, including descendants and shadows.
2. Add contribution-aware per-tile pruning under explicit image-error tolerances.
3. Track sustained hidden status and wake candidates on view, geometry, lighting,
   noise/erosion, neighboring-occluder, or lifecycle changes. Keep aging and recycling running.

Before filtering whole-cloud lists, replace array-indexed renderer wind/birth/held
state with stable simulation identity (or retain stable list slots). Otherwise a
visibility-list change could attach one cloud's persistent state to another.

Measure field GPU time, tree/upload time, tile entries and occupancy alongside image
differences and wake-up behavior. A lower puff count alone does not prove a speedup.
