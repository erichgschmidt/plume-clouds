# Night log (2026-10-30)

Autonomous iteration on the motion-first thermal (`motion.html`, `src/motion.js`). Every step
verified with screenshots in `docs/night/` before committing. Open `dist/plume-motion.html` or
`motion.html` to see the current state; presets humilis / congestus / tower.

## 1. Codex adversarial review of the first thermal (read-only, no images)

Six findings, all acted on:
1. The condensation base was a moving floor that parcels piled up on. Now a fixed world height;
   the renderer cuts the field there (`uBaseY`); parcels that sink past it evaporate and recycle.
2. Permanent puffs recirculated forever. Now parcels on the sinking outer flank accumulate
   exposure; freshness decays (`sim.detail` → small caps fade first, lobes soften, radius
   erodes up to 20 %), then they retire by burial.
3. Bubbles were synchronized allocations. Now cohorts of 3..6 over 1.5 s with a shared azimuth
   and size, randomized interval, and a surge travelling up the axis.
4. Roll measured translation. Now half the curl of the mapped flow × Roll gain (jitter excluded).
5. Per-frame random velocities. Now 2 s correlated noise; young parcels grow in over 4 s.
6. Population bookkeeping oscillated. Reserved queue, capped releases, cached sizes reset.

## 2. Rates

Circulation slowed from 0.5 to 0.12..0.25 units/s so a circuit takes ~25 s; roll gain 4 so
billows turn 0.1..2 rad/s while parcels move 0.02..0.2 units/s (a billow rolls faster than its
parcel travels, as a rolling wheel does). Rise/expand slowed and bounded so the cloud stays in
frame (`01-pass2-t30/t90.png`).

## 3. Formation

The cloud now forms: a compact puff low on the axis grows to the full population over Form
seconds (`02-form-t3/33/63/124.png`): small puff → lit crown over a flat base → tower.

## Still to judge by eye (morning)

- Whether the billow roll is visibly "top away from the force, curling back under" at the crown.
- Whether the crown surge on each bubble reads as a fresh turret.
- Base darkness: the renderer's form AO carries it; may want more.

## 4. Codex visual review #1 (frames 02-form-*) and the third pass

Verdict on the formation frames: "a knotted solid growing into a mushroom": no basal mass, one
bump scale everywhere, lighting describing balls not a volume, base as bright as the crown.
Applied (`04-review2-t33/63/123.png`):
- basal reservoir (Base share 0.35): a dense band of large slow soft parcels just above the base;
- crown parcels 1.6x the flank; Billow 2; detail band 0.35; base flatten 0.8;
- Base shade 0.4: ambient and direct fall from crown to base (`uBand`); form AO 1.1 @ 3;
- tighter cohorts; mixing 10..14 s so flanks soften within a pulse;
- bug: fresh parcels spawned below the base and died on frame one (hence the thin stalk).
Result: continuous body from a flat base to a lit crown of domes, shaded base. First pass that
reads as a cumulus rather than a cluster. Crown now stops 8 % under the frame edge.

## 5. Codex visual review #2 (frames 04-review2-*) and the fourth pass

Verdict: hierarchy still not decisive (crown only 1.6x), fine relief everywhere, sphere-contact
seams instead of broad masses, reservoir reads as a separate granular band. Applied
(`05-review3-*`, then `06-review3b-*` after a scale correction):
- crown parcels 2.5x flank (quadratic in height); each bubble has a lead parcel 1.3x (turret head);
- cohorts share 70 % of their wander (one turret moves as one); 15 s pulses, 5 s injection;
- fine relief: 12 s half-life after condensation, kept only on fresh high crowns; reservoir 0.12;
- lobes soften with freshness (0.55 + 0.45 f); nook AO halved (0.5 @ 1.2);
- lighting smoothed over a wider footprint (Normal smooth radius grows quadratically);
- reservoir: fewer, larger, heavily overlapping parcels blended up into the body;
- bug: the turret-lead flag was cleared before it was read (no leads existed);
- scale: parcels 0.066 (was 0.085) so the cloud stays in frame; crown 15 % below the top.
Result at 123 s: a cumulus tower on a dense base with a dominant crown. Early frames still
show the crown dome floating above the reservoir until the flank fills in.

## 6. Codex visual review #3 (frames 06-review3b-*) and the fifth pass

Verdict: crown floats over a gravel bed at 33 s; parcels still read as primitives; reservoir
not a shared volume. Applied (`07-pass5-*`):
- forming puff seeded on the base and up the flank (no floating dome at the start);
- a feeding neck: three large slow parcels on the axis from the base into the body;
- turret head 1.45x and 1.25x faster than its cohort;
- freshness now reaches the field pass (cap table column 21): an old slab loses its relief
  bumps and its big lobes, not only its small caps; reservoir freshness 0.05;
- fewer, larger reservoir parcels overlapping into a slab, lifted into the crown's underside;
- Base shade 0.55; nook AO 0.3; softness 1.4 (2.2 over-merged the crown into a mushroom).
Result: 93 s and 123 s read as a tall cumulus: lit crown domes over a shaded lower body on a
flat base, no gravel. Early frames still show a seam where the crown's underside meets the body.

## 7. Codex visual review #4 (frames 07-pass5-*) and the sixth pass

Verdict: surface still "inflated clay nodules" (every scale gets relief and a highlight); no single
winning turret; stem reads as a dark waist; base cut looks sliced. Applied (`08-pass6-*`):
- relief and contrast age away (e^(-age/25)) and the lower third of the cloud is quiet (x0.35);
- one winning turret at a time: 1.6x rise and 1.3x growth, held 20..30 s; rival summits 0.7x;
- stem parcels wider (1.9 .. 1.6), overlapping reservoir and crown, no decorative lobes;
- reservoir ends taper (lateral erosion); the base cut fades over a band instead of a hard line;
- nook AO 0.15, relief 1.4.
Result: 93 s reads as a soft lit mass over a shaded body (closest yet to the painted look);
33 s is still crown-heavy over a small base; the bottom edge still shows some beads.

## 8. Speed (the user's main complaint) — measured, then fixed

A 15 s strip of pass 6 (`09-strip-pass6-*`) showed the crown reshaping far too fast. Measured
by parcel identity: median parcel speed 0.06 units/s (one parcel diameter per 5 s), roll
0.58 rad/s. Clouds move slower than their billows roll, so: updraft 0.04 (was 0.18 at the
start of the night), Roll gain 12, pulses 25 s, mixing 25 s. Now (`10-slow-*`, frames 5 s apart):
median parcel speed 0.016 units/s, max 0.055; billow roll median 0.69 rad/s, max 1.3. The
shapes drift slowly while the bumps turn on them, which is what the sketch asks for.
