# Core audit: the "explicit coverage, ownership, shading" proposal against the renderer as it is

Scope: `src/puffs.js` (FIELD_FS lines 36-151, SHADE_FS 153-372, `_tree` 460-597), `src/motion.js`
`_emit`, `lab.html`, every "Status (...)" paragraph in CLOUD-TYPES.md, the last 40 commits, and the
five lab fixtures viewed in Diag 1, 4 and 5 on 2026-11-01 (hash 6a960df3, as recorded). No shader or
page was changed.

## 1. The seven points against the code

**1. Puffs as 2D shapes with explicit parent, stable ID, layer order, attachment vs overlap.**
What exists: the hierarchy is already explicit on the CPU. `_tree` (puffs.js:534-590) grows every
child on its parent's shell (`shell = q.r * embed`, line 566) and knows the parent record `q`. The
sims give roots a parent too (motion.js:290, every parcel's parent is the core). What is thrown away:
`put()` (line 463) uploads x, y, r, z0, attributes and the cloud index, but no puff ID and no parent.
The only identity reaching the shaders is the cloud index (`cIdx = floor(wd.w)`, line 100). Children
are reseeded every life (`cs = q.seed + ci * 101.3`, line 550) and fade with the budget (line 542),
so there is no ID that persists across a life either. Layer order is the continuous `z0` (line 490),
never an integer order. Where the proposal is wrong: nothing in the shaders "guesses attachment from a
steep height change". The slope test (SHADE_FS 224) only decides whether a neighbour sample may feed
the far-footprint gradient average and Normal smooth; ownership is never inferred from it. Verdict:
**on target in substance** (the relationship is known and not transmitted), diagnosis partly off.

**2. Replace the height-and-skirt union as the central representation; three outputs.**
What exists: the union is already three things, not one. Coverage is a separate silhouette union of
`r - dist - pen` with gain capped at T log 2 (lines 73-75, 142-143): the mask has nothing to do with
H. Shading is H (line 122) with an analytic gradient G (lines 86-96, 126-134) stored in a fourth
target. Ownership is half there: the cloud index of the highest puff, per-puff attributes blended
over 4 T (lines 101-106), and the dominant puff's rim distance (`rSum`). Where the proposal is wrong:
the skirt is not an accidental extension of a surface. It is the metaball term that makes two outlines
merge into one (the silhouette uses the same `e`), and it is the only thing that makes a sibling join
soft (the fringe where no footprint contains the pixel, g = 1). The gradient is already analytic; no
height is differenced across a step any more (commit 7b07b9b). Where it is right: the measured chain
of corrections is real. Each of the last twelve commits added a rule to the skirt (cutoff, penalty,
tangent cone, I/O sets, clamp, clamp slope, bounded penalty slope), and the lab shows two of those
rules as lines (the clamp seam at line 131's guard, the groove from the e^-4 weighted skirt slope at
line 134). Verdict: **partly**. The three outputs do not need building; what needs changing is that
the shading inside a footprint is still influenced by skirts and by non-attached neighbours.

**3. Silhouette from real 2D shapes with bounded blend width; lobes extend coverage; transforms move
coverage and shading together.** All already true: every sphere contributes to `sacc` whatever its
depth (line 75), the gain is bounded (line 142), and coverage and shading read the same sphere
records, so a sway moves both (motion.js:268-269, puffs.js:575). View 4 is clean on every fixture and
the defects list has no coverage item. Verdict: **off** (done).

**4. Rounded shading as an illustration cue; resolve visibility first; blend at attachments, keep
the foreground at overlaps; body field plus lobe shading.** What exists: each puff's own profile is
analytic (lines 83-96) and the normal is lit per pixel; but it is lit as one surface. Inside a
footprint, H is the log-sum-exp of every containing puff over T (line 100), so a front puff crossing a
rear one is not an occlusion but a T-wide blend; that is the 3 px of intermediate normals measured off
the centre row of fixture C. The skirt set then adds its slope with weight e^((HO-H)/T) (line 134):
the groove. The limb band is the tangent cone (line 83, slope -2.06 from 0.9 r), there because a
sphere's own limb is a dark terminator the palette bands into a ring (c8d86e1, and the Cap control
before it). That is the proposal's exact case: a 2D illustration picks the limb tone, it does not
derive it from a surface. Verdict: **on target**, and the one point that addresses all three visible
defects at once. The missing nuance is that the I-set log-sum-exp between *siblings* is the accepted
T-blended join; point 4's "blend at attachments" must keep it.

**5. Separate layer order, relief, atmospheric fade and sway.** What exists: `look.depth`
(`depthScale`) scales z0, which is relief, order and child parallax amplitude at once (lines 490,
572, 575). `look.far` (`dw`) sets both the field offset `zOff` (line 454: order between clouds) and
the depth weight that flattens the normal, lowers noise and shadow, and drives atmospheric mix via
`uStyleA.x` (SHADE_FS 271-276, 369). Sway is already separate (sim `swx/swy`, camera `sx/sy`).
Verdict: **partly**. True, cheap to split (an integer cloud order plus z0 within, `far` kept for fade
only), but it is not behind any measured defect. Do it after point 4, not before.

**6. Noise modes; contact and cavity from visible boundaries.** Noise today is one mode: a height
displacement (SHADE_FS 230) with amplitude from the centre pixel's detail (blended over 4 T), so it
already cannot reveal a hidden puff boundary; outline distortion does not exist (the mask is never
perturbed, dissolve is a dither), colour variation does not exist. Contact (321-337) marches H toward
the light; Cavity (341-356) looks for valleys in H. Both are what the proposal objects to, both
default to 0 in the accepted look. Verdict: **partly**, and low priority: nothing measured depends on
it.

**7. Fixtures, views per output, click diagnostic, CPU reference compositor.** The lab exists with
exact resets, a frame hash and views for coverage (4) and the neighbour test (5). Missing: an
ownership view, a click probe, a reference compositor. The field pass is a pure per-pixel function
of the sphere texture, so a JS port for a 3-sphere fixture is small (~120 lines) and would catch
exactly the class of bug the lab found (a guard that switches). Verdict: **on target**.

## 2. Which defects are inherent to the height union

| defect (CLOUD-TYPES "Status (artifact lab)") | cause | inherent? | local fix, cost, next boundary |
|---|---|---|---|
| Flat limb band (11 px ring of one grey) | tangent cone from 0.9 r, line 83/88 | to the *profile*, not the union. A true sphere limb is a dark ring instead (the terminator, c8d86e1). Any lit dome with a banded palette gives one or the other | replace the cone with a C1 curve whose slope keeps changing (cubic from 0.8 r into the skirt), 4 lines incl. derivative. Trades a flat band for a graded ring; with 5 bands it will still quantise to a ring. The real fix is illustrative: treat the outer 10 % as a rim tone, which is what Rim soften 0.5 already does at the silhouette (line 315) and Puff rim could do inside |
| Front-rim step spread over ~3 px off the centre row | the I-set log-sum-exp blends two containing puffs over T (line 100); a crossing rim is not a step but a T ramp; the filtered RGBA16F G target smears it one more texel | **inherent**: the union has no notion of "front wins" | none inside the union without making T tiny, which kills the sibling join. Needs per-owner resolution (section 3) |
| Skirt clamp seam (1 px line ~1.3 r from the front centre) | binary guard `HO0 > HI - 2T` on `gO = mix(gO, gI, ins)`, line 131 | not inherent: a discontinuous switch | soften: mix factor `ins * smoothstep(0, T, HO0 - (HI - 2T))`, 1 line. Becomes a T-wide band where the slope blends from cone to surface; probably visible as a faint ring in the palette, i.e. the next boundary |
| Join groove under a foreground lobe (4 px, normal y 0.13 -> 0.31 -> 0.13) | an unclamped skirt (HO0 < HI - 2T) keeps its cone slope (up to the bound of 20, line 92) at weight e^((HO-H)/T) ~ e^-2..e^-4 in G (line 134); 20 x e^-3 is a slope of 1, as steep as the dome | not inherent, but the fix and the seam fix are the same decision | inside any footprint, do not let a skirt slope into G at all: `G += gO * g * ...` (g = 1 - ins) or simply G = gI when ins = 1. 1 line. Removes seam and groove together (both are skirt slope inside a footprint). Next boundary: at the footprint edge, where ins ramps 0..1 over T; but H already ramps there by the same `ins` (line 120), so slope and height would at least agree |
| Neighbour test | none | n/a | nothing to do; view 5 shows rejection only at silhouette cusps |

So: two defects are one local fix (skirt slope must not enter a footprint), one is a profile choice
that has oscillated twice already (dark ring <-> flat band), and one is the union itself. Cost of the
local fixes together: under an hour, one line each, A/B by hash. They would end the current
whack-a-mole for the seam and the groove, but not the step spread and not the limb band. Those two
need point 4.

## 3. Recommendation: refactor, as ownership-first compositing inside the existing shader

Not from scratch. The sims, the recursive tree, the sphere-record contract, the budget fade, the
silhouette union, the palette and the whole style half of the shade pass are not implicated by any
measurement. A rewrite would re-derive them and lose the accepted look's tuning. The thing to replace
is one rule: *the shading at a pixel is the gradient of one soft surface made of every puff near it*.
Replace it with: *the shading at a pixel is the profile of the puff that owns it, blended only with
puffs attached to it*.

Keep: `motion.js`, `layer.js`, `presets.js`, `_tree` and the sphere texture, the silhouette/mask
(lines 73-75, 142-147), the per-puff attribute blend over 4 T (it is the "body field" the proposal
asks for: stack, band, freshness already blend wider than the shape), the shade pass from line 259 on,
the palette, the editor, the sky placement and camera, the lab.

Replace, in order, each step a flag the lab can A/B against the hash:

**Step 0 (lab only, no production change).** Add row 4 to the sphere texture: puff ID and parent ID
(`put()` gets two more numbers; roots use the sim index, children the parent's). Diag view 6: the
winning containing puff's ID as a colour (the index at `m`, line 100). A click probe in `lab.html`
that lists for the clicked pixel every sphere with `u = dist/r`, `h`, inside, the I/O weight and the
clamp amount, computed in JS from the same records. That is the "which puff contributes here and
why" diagnostic, and the JS it needs is the start of the CPU reference.

**Step 1 (the proof, behind `uOwn`).** In the field pass: when `ins >= 1` (a footprint contains the
pixel fully), `G = gI` and the skirt set contributes neither height nor slope; in the ramp `0 < ins
< 1`, weight the skirt by g as now but *also* weight gO by g. Outside every footprint, unchanged
(the fringe is where the outlines merge). Expected: clamp seam and groove gone on C, D, E; A and B
unchanged by hash; sibling joins unchanged. This is two lines and proves whether the boundaries
come from the skirt inside footprints, which the measurements say they do.

**Step 2 (ownership at overlaps).** With the parent ID uploaded, split the I-set in two: puffs
attached to the winner (same parent, or parent/child of it) keep the log-sum-exp over T as today,
puffs not attached take `max` with a one-texel smoothstep. For ThermalSim every root parcel has the
core as parent, so roots stay soft-joined (the accepted look); a child over its own parent stays
soft; a child over a *different* root's child becomes a crisp overlap with the foreground's own
normal. Expected: the 3 px step spread on C becomes 1 px (C's two roots are both children of the
core, so in C itself the step stays a blend; the test fixture for this is a new one: two roots with
different parent IDs). Cost: ~25 lines, the `m2`/`acc2` loop structure already exists for a second
blend width.

**Step 3 (the limb as a rim tone).** Drop the tangent cone as the *shading* profile: profile the
dome to its true limb for the gradient, and let the existing rim weight (SHADE_FS 245, 315) apply to
the owner's own rim (the `rSum` term, Puff rim) at the same strength as Rim soften, so the limb is
lifted toward the viewer the way the silhouette already is. Measure on A: the outer 10 % should go
from an 11 px flat band to the same graded rim the silhouette has. If it reads as a dark ring
instead, the cone was the right illustration choice and stays; this step is the cheapest to revert.

**Step 4.** Split `depth` into order (integer per cloud, z0 within) and relief; keep `far` for fade
only; expose sway separately in the editor. No shader risk, a `form()` change.

**Step 5.** Port FIELD_FS's per-pixel loop to JS for a 64x48 window of a fixture and compare rows
against `readPixels`; from then on every rule change is checked there first.

Contact and Cavity (point 6) stay as they are, default 0, until the owner ID exists; then both can
be redefined on the owner boundary rather than on H valleys, if anyone turns them on again.

## 4. Risks: what the accepted look depends on

- **Soft merged outlines** come from the skirt in the silhouette union (lines 73-75). Steps 1-3 do
  not touch it. A later temptation to drop the skirt "because it is now only coverage" must be
  resisted: that is the metaball look.
- **T-blended joins between siblings** are the I-set log-sum-exp (line 100) plus the skirt filling
  in below the surface in the fringe. Step 1 keeps both; step 2 keeps them for attached puffs. The
  risk is in the attachment rule: if roots of one sim were treated as unattached, every ring parcel
  crease would go crisp and the cauliflower would become a pile of balls. The rule must be "same
  parent counts as attached", and a lab fixture with two unattached roots is needed before step 2
  ships.
- **Softness** scales T (render 630) and therefore every blend above; after step 2 it would no
  longer widen the overlap of unattached puffs, only of attached ones. Sheets (LayerSim, Softness
  high, every disc a child of nothing) must be checked: their discs are all roots of the same sim
  and so stay attached, but the presets should be hashed before and after.
- **The banded palette on blended slopes**: a slope blended over T is what lets a crease fall into
  one band rather than two. Step 3 (true limb) is the step most likely to add a band ring; it is
  flagged and last for that reason.
- **Rim soften 0.5 at the silhouette** reads the alpha distance (line 245) and is untouched; but any
  change to the owner's rim (step 3) must not double-count with it at the outline, where the owner's
  rim and the silhouette coincide (`max(uRim * edge, uPuffRim * bx.a)` already takes the max).
- **Per-cloud style by highest puff** (`cIdx`) becomes per-owner after step 2; the result is the same
  where the winner is the highest containing puff, which it is by construction.
- **Performance**: steps 1-2 add a few ALU per sphere in a loop already bound by texel fetches; the
  extra texture row is one fetch guarded by the coarse reject. Nothing new per pixel in the shade
  pass.
