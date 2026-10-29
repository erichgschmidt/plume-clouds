# Toon shading plan (from "How We Draw a 3D Sprite World", GDC 2026, Ryan Juckett)

Source: the Never's End tech-art talk. The slides that transfer to our 2D height-field clouds
are the cloud shading (58-63), toon ramp bias / normal editing (40-41), linework (20-29) and
pixel snapping (64-71). Everything below is shader-side; the sim and the field pass stay as
they are, we only change what the shade pass does with the maps we already have (height, mask,
detail, contact) plus one new map.

## What the talk does that we are not doing

1. **Lighting as energies, thresholded, not a continuous ramp quantised.** Their cloud model
   outputs *direct light energy* and *ambient light energy*; the tone is then a hard decision:
   100 % direct colour if `direct > 0.485`, 40 % if `direct + ambient > 0.891`, else 0 %
   (slide 61), blended ambient->direct in sRGB. We instead compute one scalar `light`, add Bayer
   noise to it and run it through a palette with soft band edges. Our bands therefore still
   carry every small normal wobble (the double line, texel seams) as a tonal gradient inside
   a band. A threshold does not.
2. **Dither the input, on alternate pixels.** Their dither is not noise on the output colour:
   every other pixel evaluates the *same thresholds with the energy shifted by -0.087*
   (slide 62). Band edges become a clean checkerboard one band wide, which is exactly the
   pixel-art band edge in the reference image, and nothing else in the picture is touched.
3. **Crevices are always in shadow** (slide 40): a bias term pushes the ramp lookup toward the
   dark side where the model says "crevice". We have that information already: the contact
   term and the step detector.
4. **Normal editing / flattening** (slide 41): blend normals toward a smoother or flatter field
   so the shadow line is a clean shape instead of following every bump. Controls the
   "illustrated" feel directly.
5. **Single-pixel linework as a post process** with a priority rule (outline the nearer object
   so it reads in front, slide 24-25) and line colour derived from the diffuse result with a
   tint, not black (slide 26). Inlines: ridge detection from normals + depth, draw on the
   brighter side (slide 29).
6. **Pixel snapping** of noise/dither scroll to screen pixels, and shape animation synced to
   frames where the scroll moves a pixel (slide 71). We already snap shading to texels; the
   roll could be stepped to whole-texel motion if we ever want full sprite-sheet feel.

## Proposed shade pass, in order

Phase T1 - energies and thresholds (replaces `light` + `palette`)
- `direct = max(0, dot(n, L))` with the cast-shadow march applied as a multiplier
  (`direct *= 1 - shadow`), not as a subtraction.
- `ambient = fill * bounce + ao` where `ao = 1 - contact` (our overlap/contact term as the
  SSAO input they feed through the toon cutoff, slide 44).
- `bias` = crevice push: `bias = kContact * contact + kStep * stepness` where `stepness` is the
  step detector we already compute in `gradient()`. `direct -= bias; ambient -= bias`.
- Checkerboard dither on the input: `if (((ix + iy) & 1) == 1) { direct -= 0.087; ambient -= 0.087; }`
  with ix, iy the field texel coordinates (we have them: `floor(vUv / t)`).
- Tone: `tone = direct > tDirect ? 1.0 : (direct + ambient) > tMid ? 0.4 : 0.0`, thresholds
  as look sliders (defaults 0.485 and 0.891 from the talk, then tuned).
- Colour: `mix(ambientColor, directColor, tone)` in sRGB. Keep our five-tone palette as the
  colour source: directColor = cream, ambientColor = deep blue, 0.4 = the mid. Bands slider
  becomes the number of thresholds (2 or 3), not a quantisation count.
- Remove the Bayer-on-output and the smoothstep band edge (the dither replaces both).

Phase T2 - normal flattening (new look slider `flatten`, 0..1)
- `n = normalize(mix(n, nSmooth, flatten))` where `nSmooth` is the gradient read from a
  blurrier mip (lod 2-3, resolution-scaled). At 1 the lobes shade as one broad shape with a
  single clean shadow line; at 0 every cap shades itself. This is the knob that moves the look
  between "rendered spheres" and "painted cumulus".

Phase T3 - linework (new pass or end of shade pass; look slider `ink` 0..1)
- Outline: mask edge (silhouette) -> 1 texel line on the cloud side.
- Depth outline: where height drops by more than `uJumpW` to a 1-texel neighbour, draw the line
  on the *higher* side (the nearer billow reads in front, their priority rule). This is the
  single dark underline per cap that replaces the bright+dark pair for good: the step is drawn
  as ink, never shaded.
- Line colour: the tone colour of the pixel darkened by the ink tint (a slider), never black.
- Inlines (optional): ridge where the normal flips across one texel and both sides are lit;
  draw on the brighter side, 1 texel, light tint.

Phase T4 - snapping polish (optional)
- Quantise the skin roll angle so sub-puffs move in whole-texel steps at the field
  resolution; advance the material scroll only on frames where it moves a texel.

## Expected effect on the open issues

- Double line at cap edges: T1 thresholds hide tonal slivers unless they cross a threshold;
  T3 draws the step as a single ink line on the near side. Together they remove the artifact
  by construction rather than by softening.
- Softness / highlight balance: Highlight and Fill map onto `direct` exponent and `ambient`
  weight; the thresholds give the hard-edged illustrated feel without touching geometry.
- Pixel-art fidelity: input-dither on texel parity is the canonical sprite look.

## Risks

- Three tones only: subtle sphere roundness is lost unless `flatten` is low and the thresholds
  are tuned per preset. Keep the smooth palette path behind a toggle (`look.toon`) so both
  can be compared live.
- Line priority with our soft-max compositing: the "higher side" test needs the un-blended
  per-branch heights for junctions; start with the composite height and see.
