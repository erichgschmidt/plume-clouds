// Headless check for src/sim.js (v2 branch tree): node tools/sim-check.js
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
if (CloudSim.MAX_BRANCHES !== 16 || CloudSim.MAX_BLOBS !== 64) throw new Error('bad static constants');

const DURATION = 60;
const DT = 1 / 60;
let failures = 0;
function assert(cond, msg) { if (!cond) { failures++; if (failures <= 30) console.log('  FAIL: ' + msg); } }

for (const preset of CloudSim.PRESETS) {
  const sim = new CloudSim({ seed: 7401, preset, aspect: 0.75 });
  let minCount = Infinity, maxCount = -Infinity, minBr = Infinity, maxBr = -Infinity, maxV = 0, roots = 0;
  let prev = null;
  const steps = Math.round(DURATION / DT);
  for (let s = 0; s < steps; s++) {
    sim.step(DT);
    const n = sim.blobCount, b = sim.blobs, a = sim.aux, t = (s * DT).toFixed(2);
    minCount = Math.min(minCount, n); maxCount = Math.max(maxCount, n);
    assert(n <= 64, `${preset}: blobCount ${n}`);
    const ids = new Set();
    for (let i = 0; i < n; i++) {
      const x = b[i * 4], y = b[i * 4 + 1], r = b[i * 4 + 2], sd = b[i * 4 + 3];
      const bid = a[i * 4], z = a[i * 4 + 1], pb = a[i * 4 + 2], link = a[i * 4 + 3];
      if ([x, y, r, sd, bid, z, pb, link].some(v => Number.isNaN(v))) { assert(false, `${preset}: NaN at t=${t} blob ${i}`); break; }
      assert(r >= 0.02 && r <= 0.25, `${preset}: r=${r.toFixed(4)} out of [0.02,0.25] at t=${t} blob ${i}`);
      assert(x >= -0.1 && x <= 1.1, `${preset}: x=${x.toFixed(3)} out of [-0.1,1.1] at t=${t}`);
      assert(y >= -0.1 && y <= 0.85, `${preset}: y=${y.toFixed(3)} out of range at t=${t}`);
      assert(bid >= 0 && bid < 16 && bid === Math.floor(bid), `${preset}: branchId ${bid}`);
      assert(z >= 0 && z <= 1, `${preset}: z ${z}`);
      assert(link >= 0 && link <= 1, `${preset}: link ${link}`);
      ids.add(bid);
      if (pb >= 0) {
        roots++;
        assert(pb < n && pb !== i, `${preset}: parentBlob ${pb} invalid (n=${n}) at t=${t}`);
        assert(a[pb * 4] !== bid, `${preset}: root parcel ${i} attaches to its own branch ${bid} at t=${t}`);
      } else assert(pb === -1, `${preset}: parentBlob ${pb}`);
    }
    // each child branch has exactly one root parcel
    const rootsPer = new Map();
    for (let i = 0; i < n; i++) if (a[i * 4 + 2] >= 0) rootsPer.set(a[i * 4], (rootsPer.get(a[i * 4]) || 0) + 1);
    for (const [bid, c] of rootsPer) assert(c === 1, `${preset}: branch ${bid} has ${c} root parcels at t=${t}`);
    minBr = Math.min(minBr, ids.size); maxBr = Math.max(maxBr, ids.size);
    // velocity from frame-to-frame deltas of visible parcels (parcel objects are stable)
    const cur = new Map();
    for (const br of sim.branches) for (const p of br.parcels) {
      if (p.idx < 0) continue;
      if (prev && prev.has(p)) { const q = prev.get(p); maxV = Math.max(maxV, Math.hypot(p.x - q[0], p.y - q[1]) / DT); }
      cur.set(p, [p.x, p.y]);
    }
    prev = cur;
    if (failures > 30) break;
  }
  console.log(`${preset.padEnd(11)} blobs ${minCount}..${maxCount}  branches ${minBr}..${maxBr}  buds ${sim.stats.buds}  deaths ${sim.stats.deaths}  max|v| ${maxV.toFixed(3)} world/s`);
  assert(sim.stats.buds > 0 && sim.stats.deaths > 0, `${preset}: expected buds and deaths`);
  assert(roots > 0, `${preset}: no root parcels seen`);
  assert(maxV < 1.0, `${preset}: velocity too high (${maxV})`);
  if (failures > 30) break;
}

// determinism
{
  const a = new CloudSim({ seed: 99, preset: 'confluence', aspect: 0.6 });
  const b = new CloudSim({ seed: 99, preset: 'confluence', aspect: 0.6 });
  for (let i = 0; i < 1200; i++) { a.step(DT); b.step(DT); }
  let same = a.blobCount === b.blobCount;
  for (let i = 0; same && i < a.blobCount * 4; i++) same = a.blobs[i] === b.blobs[i] && a.aux[i] === b.aux[i];
  assert(same, 'determinism: two sims with same seed diverged');
}

console.log(failures ? `\n${failures} failure(s)` : '\nOK');
process.exit(failures ? 1 : 0);
