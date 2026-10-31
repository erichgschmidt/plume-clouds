/*
 * Cloud type presets, shared by the puff editor (puffs.html) and the sky (sky.html).
 * See CLOUD-TYPES.md for the physics each one is built from.
 *
 * engine: 'thermal' (ThermalSim), 'layer' (LayerSim) or 'veil' (no sim: the shade-pass cirrus veil).
 * preset: the sim's own preset. shape: thermal layout. prim/primAmt: the renderer primitive.
 * forces: sim parameter overrides. look: form (children, ratio, levels, life, embed, depth, shear,
 * shearBias, wind, lean, zoom) and, for the single-cloud editor only, style hints (haze, dither...).
 * extra: a second sim drawn with the cloud (the cumulonimbus anvil), with its own offsets.
 * depth: [far, near] preferred depth range in a sky (0 far .. 1 near); scale: size at the nearest depth.
 */
(function () {
  'use strict';
  window.CLOUD_PRESETS = {
    humilis: { label: 'Cumulus humilis', engine: 'thermal', preset: 'humilis', shape: 'flat', prim: 'sphere', primAmt: 1,
      forces: { width: 0.24, height: 0.1, count: 18, size: 0.07, pulse: 0, mixing: 14, formTime: 40, reservoir: 0.4 },
      look: { children: 4, ratio: 0.6, levels: 2, life: 1, embed: 0.85, depth: 1, shear: 0.3, lean: 0.1 },
      depth: [0.25, 1], scale: 0.8 },
    congestus: { label: 'Cumulus congestus', engine: 'thermal', preset: 'congestus', shape: 'ring', prim: 'sphere', primAmt: 1,
      forces: {}, look: { children: 4, ratio: 0.62, levels: 3, life: 1, embed: 0.9, depth: 1 },
      depth: [0.4, 1], scale: 1.0 },
    cumulonimbus: { label: 'Cumulonimbus', engine: 'thermal', preset: 'tower', shape: 'tower', prim: 'sphere', primAmt: 1,
      forces: { height: 0.4, count: 44, pulse: 18, formTime: 150 },
      look: { children: 4, ratio: 0.6, levels: 3, life: 1, embed: 0.9, depth: 1, lean: 0.25, wind: 0, shear: 0.6, baseShade: 0.75 },
      extra: { engine: 'layer', preset: 'anvil', atTop: true, dy: -0.03, look: { levels: 1, prim: 'disc', primAmt: 0.9, shear: 1.2, lean: 0 } },
      depth: [0.5, 1], scale: 1.3 },
    stratocumulus: { label: 'Stratocumulus', engine: 'layer', preset: 'stratocumulus', shape: 'ring', prim: 'disc', primAmt: 0.5,
      forces: {}, look: { children: 3, ratio: 0.6, levels: 2, life: 0.6, embed: 0.8, depth: 1, stackShade: 0.7 },
      depth: [0.2, 0.8], scale: 1.1 },
    stratus: { label: 'Stratus', engine: 'layer', preset: 'stratus', shape: 'ring', prim: 'disc', primAmt: 0.7,
      forces: {}, look: { children: 0, ratio: 0.5, levels: 1, life: 0, embed: 0.8, depth: 0.6, haze: 0.7, dither: 0.3, stackShade: 0 },
      depth: [0.1, 0.6], scale: 1.2 },
    altocumulus: { label: 'Altocumulus', engine: 'layer', preset: 'altocumulus', shape: 'ring', prim: 'disc', primAmt: 0.5,
      forces: {}, look: { children: 3, ratio: 0.55, levels: 2, life: 0.5, embed: 0.8, depth: 0.8, stackShade: 0.5 },
      depth: [0.05, 0.5], scale: 1.0 },
    lenticular: { label: 'Altocumulus lenticularis', engine: 'layer', preset: 'lenticular', shape: 'ring', prim: 'disc', primAmt: 0.95,
      forces: {}, look: { children: 0, levels: 1, embed: 0.8, depth: 0.5, smooth: 0.8, noise: 0.05 },
      depth: [0.1, 0.5], scale: 1.0 },
    altostratus: { label: 'Altostratus', engine: 'layer', preset: 'altostratus', shape: 'ring', prim: 'disc', primAmt: 0.8,
      forces: {}, look: { children: 0, levels: 1, depth: 0.4, shear: 0.5, haze: 0.8, noise: 0.08, stackShade: 0, baseShade: 0.3 },
      depth: [0, 0.4], scale: 1.3 },
    cirrocumulus: { label: 'Cirrocumulus', engine: 'layer', preset: 'cirrocumulus', shape: 'ring', prim: 'sphere', primAmt: 1,
      forces: {}, look: { children: 0, levels: 1, depth: 0.3, dither: 0.5, stackShade: 0, shadow: 0.2 },
      depth: [0, 0.3], scale: 1.0 },
    cirrostratus: { label: 'Cirrostratus', engine: 'veil', preset: '', shape: 'ring', prim: 'sphere', primAmt: 1,
      forces: {}, look: { cirrus: 0.7, cirrusScale: 1.2, cirrusAngle: -8, cirrusFlow: 0.004, veil: 0.6 },
      depth: [0, 0.1], scale: 1 },
    cirrus: { label: 'Cirrus', engine: 'layer', preset: 'cirrus', shape: 'ring', prim: 'sphere', primAmt: 1,
      forces: {}, look: { children: 0, levels: 1, depth: 0.3, shear: 0.4, wind: 8, dither: 0.5, stackShade: 0, shadow: 0.2, haze: 0.3 },
      depth: [0, 0.3], scale: 1.0 },
    contrail: { label: 'Contrail', engine: 'layer', preset: 'contrail', shape: 'ring', prim: 'sphere', primAmt: 1,
      forces: {}, look: { children: 0, levels: 1, depth: 0.2, shear: 0.3, wind: -6, dither: 0.6, stackShade: 0, shadow: 0.2 },
      depth: [0, 0.3], scale: 1.0 }
  };
  // which editor sliders each engine exposes (name, label, min, max, step)
  window.CLOUD_FORCES = {
    thermal: [
      ['updraft', 'Updraft', 0, 0.5, 0.005], ['width', 'Width', 0.05, 0.5, 0.005], ['height', 'Height', 0.05, 0.6, 0.005],
      ['rise', 'Rise', 0, 0.02, 0.0005], ['expand', 'Expand', 0, 0.01, 0.0002], ['settle', 'Settle', 0, 1, 0.01],
      ['count', 'Parcels', 4, 63, 1], ['size', 'Size', 0.03, 0.2, 0.001], ['jitter', 'Jitter', 0, 0.5, 0.005], ['mixing', 'Mixing (s)', 1, 30, 0.5], ['pulse', 'Bubble (s)', 0, 40, 0.5], ['base', 'Base level', 0.2, 1, 0.01], ['rollGain', 'Roll gain', 0, 24, 0.1], ['formTime', 'Form (s)', 0, 300, 5], ['reservoir', 'Base share', 0, 0.6, 0.05], ['parallax', 'Parallax', 0, 0.08, 0.002], ['sway', 'Sway (s)', 5, 120, 1]
    ],
    layer: [
      ['count', 'Parcels', 0, 127, 1], ['heads', 'Heads', 1, 40, 1], ['trail', 'Trail', 1, 24, 1], ['size', 'Size', 0.005, 0.15, 0.001], ['width', 'Width', 0.2, 2, 0.01], ['thick', 'Thickness', 0, 0.3, 0.005], ['level', 'Level', 0, 1, 0.01],
      ['cell', 'Cell', 0.02, 0.3, 0.005], ['rows', 'Rows', 1, 8, 1], ['gap', 'Gap', 0, 0.9, 0.01], ['streets', 'Streets', 0, 1, 0.01], ['cover', 'Cover', 0.5, 3, 0.05], ['undulate', 'Undulate', 0, 0.05, 0.001], ['wave', 'Wave', 0.5, 8, 0.1], ['striate', 'Striate', 1, 4, 0.05], ['lead', 'Lead', 0, 1, 0.01],
      ['curve', 'Curve', 0, 3, 0.05], ['fall', 'Fall', 0, 0.5, 0.005], ['lag', 'Lag', 0, 0.6, 0.005], ['plane', 'Plane step', 0.02, 0.3, 0.005], ['spread', 'Spread', 0, 5, 0.05], ['lobes', 'Lobes', 0, 2, 0.05], ['beads', 'Beads', 0, 1, 0.01],
      ['jitter', 'Jitter', 0, 1, 0.01], ['breathe', 'Breathe (s)', 2, 60, 1], ['life', 'Life (s)', 5, 200, 1], ['drift', 'Drift', 0, 0.05, 0.001], ['wind', 'Wind (deg)', -45, 45, 1], ['fresh', 'Fresh', 0, 1, 0.01], ['parallax', 'Parallax', 0, 0.08, 0.002], ['sway', 'Sway (s)', 5, 120, 1]
    ],
    veil: []
  };
  // which layer sliders matter per mode (the rest are hidden)
  window.LAYER_MODE_KEYS = {
    sheet: ['count', 'size', 'width', 'thick', 'level', 'cover', 'undulate', 'wave', 'striate', 'lead', 'jitter', 'breathe', 'life', 'drift', 'wind', 'fresh', 'parallax', 'sway'],
    cells: ['count', 'size', 'width', 'thick', 'level', 'cell', 'rows', 'gap', 'streets', 'jitter', 'breathe', 'life', 'drift', 'wind', 'fresh', 'parallax', 'sway'],
    streak: ['heads', 'trail', 'size', 'width', 'thick', 'level', 'curve', 'fall', 'lag', 'plane', 'spread', 'lobes', 'beads', 'life', 'drift', 'wind', 'fresh', 'parallax', 'sway']
  };
})();
