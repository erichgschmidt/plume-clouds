// Headless check for src/sim.js: node tools/sim-check.js
'use strict';
const fs = require('fs');
const path = require('path');
const vm = require('vm');

const src = fs.readFileSync(path.join(__dirname, '..', 'src', 'sim.js'), 'utf8');
const sandbox = { window: {}, Math, Float32Array, console };
vm.createContext(sandbox);
vm.runInContext(src, sandbox, { filename: 'sim.js' });
const CloudSim = sandbox.window.CloudSim;
if (typeof CloudSim !== 'function') throw new Error('window.CloudSim not assigned');

const DURATION = 60;   // seconds per preset
const DT = 1 / 60;
let failures = 0;
function assert(cond, msg) { if (!cond) { failures++; console.log('  FAIL: ' + msg); } }

for (const preset of CloudSim.PRESETS) {
  const sim = new CloudSim({ seed: 7401, preset, aspect: 0.75 });
  let minCount = Infinity, maxCount = -Infinity, maxV = 0;
  let nnSum = 0, nnN = 0;   // nearest-neighbour distance / (r1+r2) within a body (cool parcels)
  let prev = null;
  const steps = Math.round(DURATION / DT);
  for (let s = 0; s < steps; s++) {
    sim.step(DT);
    const n = sim.blobCount;
    minCount = Math.min(minCount, n); maxCount = Math.max(maxCount, n);
    const b = sim.blobs, a = sim.aux;
    for (let i = 0; i < n; i++) {
      const x = b[i * 4], y = b[i * 4 + 1], r = b[i * 4 + 2], sd = b[i * 4 + 3];
      const heat = a[i * 4], age = a[i * 4 + 1], par = a[i * 4 + 2], link = a[i * 4 + 3];
      if ([x, y, r, sd, heat, age, par, link].some(v => Number.isNaN(v))) { assert(false, `${preset}: NaN at step ${s} blob ${i}`); break; }
      assert(r >= 0.02 && r <= 0.25, `${preset}: r=${r.toFixed(4)} out of [0.02,0.25] at t=${(s * DT).toFixed(2)} blob ${i}`);
      assert(x >= -0.1 && x <= 1.1, `${preset}: x=${x.toFixed(3)} out of [-0.1,1.1] at t=${(s * DT).toFixed(2)}`);
      assert(y >= -0.1 && y <= 0.85, `${preset}: y=${y.toFixed(3)} out of range at t=${(s * DT).toFixed(2)}`);
      assert(par === -1 || (par >= 0 && par < n && par !== i), `${preset}: bad parentIndex ${par} for blob ${i}`);
      assert(link >= 0 && link <= 1, `${preset}: linkStrength ${link}`);
    }
    if (s % 30 === 0) {
      const live = sim.parcels.filter(p => p.dying < 0 && p.heat < 0.55);
      for (const p of live) {
        let best = Infinity;
        for (const q of live) {
          if (q === p || q.att !== p.att) continue;
          const v = Math.hypot(p.x - q.x, p.y - q.y) / (p.r + q.r);
          if (v < best) best = v;
        }
        if (best < Infinity) { nnSum += best; nnN++; }
      }
    }
    // velocity from frame-to-frame position deltas (parcel objects are stable across compaction)
    const cur = new Map();
    for (const p of sim.parcels) {
      if (prev && prev.has(p)) {
        const q = prev.get(p);
        const v = Math.hypot(p.x - q[0], p.y - q[1]) / DT;
        if (v > maxV) maxV = v;
      }
      cur.set(p, [p.x, p.y]);
    }
    prev = cur;
    if (failures > 20) break;
  }
  const nn = nnN ? nnSum / nnN : NaN;
  console.log(`${preset.padEnd(11)} count ${minCount}..${maxCount}  splits ${sim.stats.splits}  merges ${sim.stats.merges}  max|v| ${maxV.toFixed(3)} world/s  meanNN/(r1+r2) ${nn.toFixed(2)}`);
  assert(nn >= 0.6 && nn <= 0.9, `${preset}: body packing ${nn.toFixed(2)} outside 0.6-0.9`);
  assert(maxV < 1.0, `${preset}: velocity too high (${maxV})`);
  assert(sim.stats.splits > 0 && sim.stats.merges > 0, `${preset}: expected both splits and merges`);
  if (failures > 20) break;
}

// determinism
{
  const a = new CloudSim({ seed: 99, preset: 'islands', aspect: 0.6 });
  const b = new CloudSim({ seed: 99, preset: 'islands', aspect: 0.6 });
  for (let i = 0; i < 600; i++) { a.step(DT); b.step(DT); }
  let same = a.blobCount === b.blobCount;
  for (let i = 0; same && i < a.blobCount * 4; i++) same = a.blobs[i] === b.blobs[i];
  assert(same, 'determinism: two sims with same seed diverged');
}

console.log(failures ? `\n${failures} failure(s)` : '\nOK');
process.exit(failures ? 1 : 0);
