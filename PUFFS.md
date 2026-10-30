# Puffs: the cloud from one primitive (`puffs.html`, `src/puffs.js`)

A rebuild of the renderer beside the current one (`motion.html` + `src/render.js` are untouched).
The thermal (`src/motion.js`) is the same; only the drawing changed.

**One primitive, recursively.** A puff is a sphere on its parent's shell. Each sim parcel is a
root; it grows `Children` puffs of `Size ratio` its radius, each of those grows the same again,
down to `Levels`. A child lives one cycle: born on the parent's upper shell, carried round by the
parent's roll, swelling and subsiding (`Life` scales the rate), then reseeded at a new seat. Depth
is real: a child on the back of its parent sits lower in the height field and is hidden by it.
The tree is built breadth first with a budget of 2048 spheres.

**One union.** A log-sum-exp over every sphere's height with one `Softness`. The silhouette is a
soft union of the same spheres.

**One surface term.** A single fBm displacement of the final height (`Noise`, `Noise scale`,
`Flow`), with an amplitude that falls per level (root 0.25, child 0.6, grandchild 1) and with the
parcel's freshness from the sim.

**One darkening.** Every puff shades from its own top to its own bottom, and inherits 60 % of
its parent's shade at its birth point, accumulated down the tree (`Stack shade`). The whole cloud
also darkens from crown to base (`Base shade`). Direct light, one Lambert term with the same
palette as the old renderer.

Knobs: 11 surface + 6 light, against ~45 before. Field pass -> RGBA16F (height, detail, stack,
mask); shade pass -> screen; 1849 puffs at 120 s cost well under a millisecond.

Frames: `docs/night/20-puffs-t45.png`, `20-puffs-t120.png` (Children 6, Size ratio 0.62,
Embed 0.9, Softness 1.0, Noise 0.15). The crown reads as stacked domes; the base still shows
small puffs on bare large spheres and is the first thing to judge.
