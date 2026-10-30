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
