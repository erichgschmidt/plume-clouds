# Research brief: from "cottage cheese" to Ghibli cumulus

The renderer (attached `plume-clouds.html`, editor; `plume-stage.html`, game stage; source at
https://github.com/erichgschmidt/plume-clouds) builds a cloud as a height field over the screen:
overlapping sphere parcels, each wearing a rigid skin of 4..20 smaller sphere caps that roll
slowly, merged with soft maxima, shaded by a per-texel patch normal, a 16-step shadow march, a
small-radius cavity AO pass, and a 5-tone palette. The *shape construction stays*; this brief is
about why the result reads as curds rather than a cloud, and what shading/structure parameters
are missing. Reference images: a stacked Ghibli-style cumulus tower, a painted cumulus with a
soft blue shadow side.

## Diagnosis (ours vs. the references)

1. **No hierarchy of scale.** Every cap is 0.28..0.46 of its parcel and every parcel gets the
   same cap density over its whole sphere. The references have three scales: the whole tower,
   a handful of big lobes, and cauliflower texture that appears *only along lit crown edges*.
   Ours has one scale everywhere.
2. **Every bump is lit on its own.** The patch normal is exact per cap, so each cap gets its own
   highlight and its own dark crescent with the same contrast at the crown and at the base. In
   the references the big form's light/shadow dominates: lumps in the shadowed underside are
   barely visible, lumps on the crown are crisp. Detail contrast must be *modulated by the
   macro lighting*.
3. **Lumps are separated, not joined.** Each cap boundary is a visibility contour (bright/dark
   pair). In the references adjacent lobes are joined by shaded *folds* (valleys that darken
   toward their bottom) and the lobes themselves are flattened domes, not full balls.
4. **No large-scale occlusion.** The cavity AO finds nooks at radius 0.8 maxR, which stresses the
   per-cap crevices (more curd). What the references show is a form shadow: the base is dark
   because the mass above it blocks the sky.
5. **Hard edges everywhere.** The silhouette is equally crisp on the lit and the shadowed side.
   Painted clouds have crisp lit edges, soft dissolving shadow edges, and a bright thin rim
   where the sun comes through (forward scatter).
6. **Flat colour contrast.** Our shadow tone is deep blue; the references' shadow side is a mid
   blue-grey with the darkest value only in folds, and tone steps are soft on the shadow side.

**Experiment that confirms 2 and 4.** In the editor, lavalamp preset, sun 60 / elevation 40:
set Normal smooth 1.0, AO radius 2.0, AO intensity 1.5. The same geometry stops reading as curds:
a lit crown, joined lumps, a shadowed underside. (Keep those values as a baseline.)

## Candidate parameters (in the renderer's own terms)

A. **Detail falloff in shadow** (shade pass). `n = normalize(mix(macroN, microN,
   d * (k + (1 - k) * max(0, dot(macroN, L)))))` where macroN is the smoothed normal we already
   have (Normal smooth) and microN the patch normal. One slider `k` (detail kept in shadow,
   0..1). Cheap; this is the single biggest change.
B. **Form AO** (second, large radius: 2..4 maxR, or a mip read of the height field): darken the
   ambient term where the local height is far below the neighbourhood maximum. Separate from
   the nook AO. Parameters: radius, strength.
C. **Cap hierarchy** (field pass, CPU cap table): 3..5 *big* caps (0.5..0.7 r) per parcel plus
   small caps only in a latitude band facing the light / near the crown; caps on the underside
   (cen.z < 0 or cen.y pointing down in world) flattened (radius scaled 0.5, height scaled 0.3).
   Parameters: big/small ratio, detail band width, base flattening.
D. **Folds instead of contours** (field pass): at a cap/cap or cap/core boundary, subtract a
   shallow valley (smooth min of the two heights minus a fold depth) so the join is a shaded
   crease, not a visibility step. Parameter: fold depth, fold width.
E. **Scatter edge** (shade pass): on the shadowed side (`dot(n, L) < 0`) multiply coverage by a
   soft falloff over the last few texels of the silhouette and lift the tone; on the lit side
   keep the crisp edge and the cream rim. Parameters: softness, rim.
F. **Palette**: shadow tone lighter and less saturated, band softness larger on the shadow
   side than on the lit side.
G. **Lobe stretch**: caps as ellipsoids elongated along the parcel's growth direction (rising
   columns), 1.0..1.5.

## What we want from you

1. Rank A..G by expected effect on the "connected cloud" read, with reasoning from the images.
2. For the top three: the exact formula or construction, its parameters and sensible defaults,
   the cost (per-texel work; the field pass already loops 64 parcels × 20 caps), and the
   smallest experiment in the attached editor that proves it (what to set, what to compare).
3. Anything we are missing that the references rely on (e.g. internal scattering as a
   thickness-based tone, a second light from the sky dome).

Do not propose changing the sphere/cap construction, the palette count, or the pixel look.
