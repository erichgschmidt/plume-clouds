# Shape filtering and erosion families

The editor stays entirely 2D. These controls modify the existing footprint mapping;
they do not add a mesh, a volumetric simulation, or a post-process outline.

## Contour filter

The signed control sits alongside Angular:

- Positive: fill inward notches toward a local maximum.
- Negative: shave protrusions toward a local minimum.
- Zero: preserve the existing shape exactly.

Contour reach, under Advanced shape, sets the angular neighbourhood in radians.
Start around 0.5–0.7 for a visible effect. The filter needs contour variation or
angularity; it cannot create irregularity in a plain circle. Combine it with Shape
variation, Angular, and Child deformation to mix filled and carved forms.

The older Bulge only control biases the random deformation outward; it does not
perform a maximum/minimum neighbourhood filter. Contour cohesion acts between
neighbouring puffs, whereas Contour filter changes each individual puff's profile.

This is a smooth max/min-style radial contour operator. It does not compute a
global convex hull or guarantee that an entire cloud becomes convex or concave.
The harmonic irregularity and polygon sector profile are processed separately to
avoid duplicating polygon corners into a fan of smaller bumps. Their derivatives
are combined consistently with the resulting shape.

The same profile is used for containment, visible surface, body shading, shadow
membership, and children's attachment locations. Its radius remains positive and
within the existing conservative bounds. Zero bypasses the filter. Enabled
filtering adds local shape evaluations, but no additional rendering pass.

The old Angular profile blends a polygon face toward a circle around its corners.
That blend can create concave shoulders at strong settings; it is not a strictly
convex rounded polygon. Its zero-filter appearance is preserved for compatibility.

## Erosion type

The selector under Pattern and erosion changes the pattern consumed by both wind
erosion and evaporation. It does not cause erosion by itself.

- **Soft:** the existing value-noise pattern, unchanged.
- **Cellular:** rounded, scalloped bites.
- **Ridged:** connected channels based on noise ridges.

Wind erosion or Evaporation supplies strength; Erosion frequency supplies scale.
The patterns use the existing anchored coordinates and per-parent phase, so related
lobes erode coherently. Coverage, surface evaluation and shadows use the same eroded
radius. Cellular evaluates nine nearby cells and costs more than the other modes
while erosion is active. Inactive erosion skips pattern evaluation entirely.

The existing analytic shading approximation omits the spatial derivative of the
erosion radius. Aggressive high-frequency erosion can still show shading inaccuracies;
adding pattern choices does not fix that underlying approximation. Isolated erosion
fixtures are checked for contact/cavity rims, but every animated combination is not
guaranteed artifact-free.

All new settings default to neutral values for existing presets. Tests include
signed coverage changes, finite-difference contour derivatives, CPU/GPU agreement,
unchanged plain circles, erosion pattern differences and anchoring, inactive-control
identity, and full fusion/release lifecycle continuity.
