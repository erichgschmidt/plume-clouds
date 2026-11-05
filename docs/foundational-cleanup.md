# Foundational cleanup: rendering model 2

The editor remains a 2D footprint/height-field renderer. This change does not add meshes,
volumetric simulation, or a 3D scene.

## Compatibility

New looks use `modelVersion: 2` and `cavityLit: 0`. Named saved and built-in looks without
version metadata migrate to model 1, retaining their former cavity-in-light default.
The Compatibility section allows a reversible switch. Save records the choice.
Existing numeric parameter keys and fractional legacy dither values remain readable.
Sky has one scene rendering model; importing a cloud form does not override scene lighting.

Model 1 retains the old rendering widths. Both models receive the continuous shadow-membership
fix, GPU validation and duplicate-filter removal. This is not a promise of bitwise equivalence
to every historical build: the shadow discontinuity fix deliberately corrects the old jump.

## Rendering responsibilities

- Footprint mapping is shared by ownership, surface, body lighting and shadow membership.
- Model 2 pulls slopes back through the primitive, deformation and stretch transforms.
  Drop, box and diamond no longer use an identity approximation for their primitive slope.
- Attachment blend sets the surface-union temperature. Coverage and skirt exclusion use a
  field-pixel width; ownership has its own pixel-derived transition. Shadow support uses a
  fixed reference-radius width with a pixel minimum. Body lighting has an independent floor.
- Contact/cavity test membership against the actual deformed profile. The circular shadow
  proxy loses influence continuously as shape, profile or relief depart from its assumptions.
  Contact exclusion uses the puff's continuous surface share; a fixed exclusion shell
  left a pale crescent at shallow intersections. Cavity retains its separate support fade.
  The extra self-limb darkening is omitted in model 2; it duplicated local shape shading.
- Smoothing computes the macro slope once and reuses it for texture bias and final lighting.
- Float renderability, five render attachments and framebuffer completeness are checked.

The shadow proxy remains an approximation. Strongly deformed shapes have deliberately weaker
contact/cavity shading rather than confidently incorrect circular shadows. No claim is made
that all possible animated arrangements are halo-free. Ownership still uses eight containing
candidates, and the height/skirt union remains the underlying construction. These are separate
future design questions, not problems solved by renaming controls.

## Timing and controls

Playback integrates scene time; simulation, travel, drift, sway and texture flow use that
clock. Turbulence controls internal motion intensity. Manual camera input uses wall time.
Deferred simulation and wind-effect updates consume elapsed time in small steps instead of
discarding everything beyond one tenth of a second. Suspended-tab wall time is still bounded.
Distance-based evolution slowdown remains intentional.

`src/parameters.js` owns shared vocabulary, presentation, dependency explanations and preset
migration. Primary sections show everyday controls; advanced sections retain the separate
generation relief values and specialized shading controls. Inactive settings keep their values.
The old Dither control is labeled Legacy edge hardness; Tone stipple, Edge breakup and
Evaporation are the expressive pattern controls.

## Validation

Run the Node checks:

```
node tools/parameters-test.cjs
node tools/clock-test.js
node tools/renderer-capability-test.cjs
```

Serve the repository and run `tools/render-regression.cjs`. Set `PLAYWRIGHT_MODULE` to an
installed Playwright package and optionally `CHROME_PATH` and `CLOUD_TEST_URL`.
The browser suite covers legacy shadow continuity, the updated silhouette/shadow properties,
deformed CPU/GPU field agreement, and the existing artifact lab. Use `--bundles` to check the
standalone exports after rebuilding them.

`tools/normal-reuse-test.cjs` isolates the filtering optimization and compares old/new pixels.
`tools/parameters-ui-test.cjs` checks dependencies, preset roundtrips and both editor UIs.
The diagnostic CPU `fieldRef` supports both models; the detailed `probe` view explicitly
supports legacy only, rather than silently showing incorrect model-2 diagnostics.
