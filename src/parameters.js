/* Shared editor vocabulary and dependencies. Numeric keys remain stable for saved looks. */
(function (root) {
  'use strict';
  var VERSION = 4;
  // Shared defaults also fill missing fields when opening an older saved look.
  var featureDefaults = Object.freeze({ childShape: 1, shapeFollow: 0, contourCohesion: 0, shadowQuiet: 0,
    contourFilter: 0, filterReach: 0.35, erosionType: 0 });
  var featureSpecs = [
    ['childShape', 'Child deformation', 0, 1, 0.01], ['shapeFollow', 'Deformation inheritance', 0, 1, 0.01],
    ['contourCohesion', 'Contour cohesion', 0, 1, 0.01], ['shadowQuiet', 'Shadow simplification', 0, 1, 0.01],
    ['contourFilter', 'Contour filter', -1, 1, 0.01],
    ['filterReach', 'Contour reach (rad)', 0.05, 1, 0.01], ['erosionType', 'Erosion type', 0, 2, 1]
  ];
  var definitions = {
    softness: ['Attachment blend', 'How broadly attached lobes merge. Updated rendering keeps edge coverage and shadow tolerances independent.'],
    body: ['Body lighting', 'Share broad light and shadow across the cloud; local lobe detail remains at lower amounts.'],
    bodySoft: ['Body softness', 'Breadth of the shared lighting used by Body lighting and Shadow simplification, in cloud reference radii.'],
    smooth: ['Surface filtering', 'Filter local shading within a surface. It preserves separate overlaps and does not merge the shapes.'],
    cap: ['Dome profile', '0: spherical dome. 1: a flatter parabola with a broad shadow side.'],
    depth: ['Layer separation', 'Separation of overlapping lobes in the height field. Relief and sway are separate controls.'],
    embed: ['Lobe protrusion', 'Lower buries children in their parent; higher places them farther out on its shell.'],
    life: ['Child cycle speed', 'Speed of swelling, subsiding, and reseeding. 0 freezes the child cycle.'],
    relief1: ['Child relief', 'Shading relief of the first child generation. Lower values flatten its domes without shrinking the outline.'],
    relief2: ['Fine relief', 'Shading relief of grandchildren. Lower values let fine lobes interrupt the outline without becoming separate balls.'],
    cluster: ['Lobe grouping', 'Group related lobes into seeded clusters with quieter arcs between them.'],
    childShape: ['Child deformation', 'Scale child stretch, contour variation and angularity relative to their parent. 0 removes this deformation; 1 uses the full amount. The chosen primitive is unchanged.'],
    shapeFollow: ['Deformation inheritance', 'How closely children inherit their parent’s deformation pattern. 0 uses their own seeded patterns; 1 follows the parent. Child attachment positions follow the parent at every setting.'],
    contourCohesion: ['Contour cohesion', 'Widen local outline blends between nearby lobes in Updated rendering. Changes small contour joins without moving or grouping the puffs.'],
    contourFilter: ['Contour filter', 'Filter each puff’s existing contour locally: negative values shave protrusions toward nearby minima; positive values fill notches toward nearby maxima. 0 preserves the contour. Requires contour variation or angularity; a plain circle stays unchanged. This is not a global convex or concave hull.'],
    filterReach: ['Contour reach (rad)', 'Angular neighbourhood sampled by the local contour filter, in radians. Larger values carve or fill across broader parts of each puff.'],
    erosionType: ['Erosion type', 'Pattern used by wind erosion and evaporation: Soft, Cellular, or Ridged. Strength still comes from Wind erosion or Evaporation.'],
    shadowQuiet: ['Shadow simplification', 'Blend local shading toward the broad cloud shape and suppress texture on shadow-facing regions. Body softness sets the broad scale.'],
    rim: ['Silhouette lift', 'Lift shading along the exposed cloud outline; does not change coverage.'],
    puffRim: ['Lobe-edge lift', 'Lift shading along visible lobe edges inside the cloud; does not change coverage.'],
    shadow: ['Shadow contrast', 'Darkness of surfaces facing away from the sun.'],
    baseShade: ['Underside shade', 'Broad darkening toward the base of the whole cloud.'],
    baseFall: ['Underside reach', 'Fraction of cloud height reached by the underside shade.'],
    stackShade: ['Inherited shade', 'Extra shade inherited by a child beneath its parent. An optional accent.'],
    contact: ['Contact shadow', 'Shadow cast by an overlapping lobe onto its neighbour.'],
    cavity: ['Cavity shade', 'Reduce ambient light in recesses. Cavity in light optionally also darkens direct sunlight.'],
    cavityReach: ['Cavity reach', 'Reach of recess shading in field texels; limited by each lobe size.'],
    cavityLit: ['Cavity in light', 'Extra cavity darkening of direct sunlight. 0 avoids doubling up with contact shadows on lit faces.'],
    noise: ['Broad texture', 'Strength of broad surface texture. Texture changes shading, not the silhouette.'],
    noiseScale: ['Broad frequency', 'Higher values give smaller broad-texture features.'],
    noiseBias: ['Broad placement', '-1: mostly shadow; 0: both; +1: mostly sunlight.'],
    noise2: ['Fine texture', 'Strength of the second surface texture layer.'],
    noise2Scale: ['Fine frequency', 'Higher values give smaller fine-texture features.'],
    noiseBias2: ['Fine placement', '-1: mostly shadow; 0: both; +1: mostly sunlight.'],
    flow: ['Texture flow', 'Rate at which the surface texture travels.'],
    anchor: ['Texture anchoring', '0 fixes texture to the screen; 1 carries it with each parcel.'],
    grain: ['Palette grain', 'Subtle ordered grain before palette mapping.'],
    stipple: ['Tone stipple', 'Expressive pattern between neighbouring palette tones; keeps coverage.'],
    dither: ['Legacy edge hardness', 'Compatibility setting: dispersing parcels switch from hazy to crisp edges above a small threshold. Use Tone stipple or Edge breakup for patterns.'],
    dissolve: ['Evaporation', 'Erode dispersing material inward from its outline with a ragged boundary.'],
    evapScale: ['Erosion frequency', 'Higher values make smaller ragged bites in evaporation and wind erosion.'],
    simSpeed: ['Playback speed', 'Scale all scene animation time. 0 freezes time; 1 plays at normal speed.'],
    motion: ['Turbulence', 'Intensity of internal circulation and wander. 0 is calm; ageing and spawning still follow playback time.'],
    pulse: ['Bubble interval (s)', 'Interval between cohorts of new parcels. 0 emits a steady trickle.'],
    mixing: ['Mixing time (s)', 'How long sinking parcels stay fresh before mixing away and retiring.'],
    modelVersion: ['Rendering model', 'Legacy preserves earlier preset behaviour. Updated joins separate attachment blending from edge and shadow tolerances; switching can change the look.']
  };
  var overrides = { simSpeed: { min: 0 }, modelVersion: { options: [[1, 'Legacy look'], [2, 'Updated joins']] },
    erosionType: { options: [[0, 'Soft'], [1, 'Cellular'], [2, 'Ridged']] } };
  function decorate(spec) {
    var s = spec.slice(), d = definitions[s[0]], o = overrides[s[0]];
    if (d) s[1] = d[0]; if (o && o.min !== undefined) s[2] = o.min;
    return s;
  }
  function tip(key, fallback) { return definitions[key] ? definitions[key][1] : fallback || ''; }
  function reason(key, v, ctx) {
    ctx = ctx || {};
    function off(k) { return v[k] !== undefined && !(v[k] > 0); }
    var child = ['ratio', 'levels', 'life', 'embed', 'relief1', 'relief2', 'cluster', 'swayScale', 'stackShade', 'childShape', 'shapeFollow'];
    if (child.indexOf(key) >= 0 && off('children')) return 'Requires Children above zero.';
    if (child.indexOf(key) >= 0 && key !== 'levels' && v.levels !== undefined && v.levels < 2) return 'Requires at least two levels.';
    if (key === 'relief2' && v.levels !== undefined && v.levels < 3) return 'Requires three levels.';
    if (['childShape', 'shapeFollow'].indexOf(key) >= 0 && off('shapeVar') && off('angular')) return 'Requires Shape variation or Angular above zero.';
    if (key === 'shapeFollow' && off('childShape')) return 'Requires Child deformation above zero.';
    if (key === 'contourCohesion' && !(v.modelVersion >= 2)) return 'Requires Updated joins in Rendering model.';
    if (['contourFilter', 'filterReach'].indexOf(key) >= 0 && (v.hasContourVariation === false ||
      (v.shapeVar !== undefined && v.angular !== undefined && !(v.angular > 0) && !(v.shapeVar > 0 && (v.contourVar === undefined || v.contourVar > 0)))))
      return 'Requires Shape variation with Contour irregularity, or Angular above zero.';
    if (key === 'filterReach' && !(Math.abs(v.contourFilter) > 0)) return 'Requires Contour filter away from zero.';
    if (key === 'bodySoft' && off('body') && !(v.shadowQuiet > 0)) return 'Requires Body lighting or Shadow simplification above zero.';
    if ((key === 'noiseScale' || key === 'noiseBias') && off('noise')) return 'Requires Broad texture above zero.';
    if ((key === 'noise2Scale' || key === 'noiseBias2') && off('noise2')) return 'Requires Fine texture above zero.';
    if (['flow', 'streak', 'anchor'].indexOf(key) >= 0 && off('noise') && off('noise2')) return 'Requires Broad or Fine texture.';
    if (['cavityReach', 'cavityLit'].indexOf(key) >= 0 && off('cavity')) return 'Requires Cavity shade above zero.';
    if (key === 'baseFall' && off('baseShade')) return 'Requires Underside shade above zero.';
    if (key === 'stippleBias' && off('stipple')) return 'Requires Tone stipple above zero.';
    if (key === 'breakupReach' && off('breakup')) return 'Requires Edge breakup above zero.';
    if (['evapScale', 'erosionType'].indexOf(key) >= 0 && off('dissolve') && (v.erosion === undefined || off('erosion'))) return 'Requires Evaporation or Wind erosion.';
    if (key === 'sides' && off('angular')) return 'Requires Angular above zero.';
    if (['stretchVar', 'contourVar', 'shapeSeed', 'bulge'].indexOf(key) >= 0 && off('shapeVar')) return 'Requires Shape variation above zero.';
    if (key === 'bulge' && off('contourVar')) return 'Requires Contour irregularity above zero.';
    if (key === 'primAmt' && (v.prim || ctx.prim) === 'sphere') return 'Select a different primitive to blend its shape.';
    if (key === 'wispLife' && off('wispAmount')) return 'Requires Wisp amount above zero.';
    if (['cirrusScale', 'cirrusAngle', 'cirrusFlow'].indexOf(key) >= 0 && off('cirrus')) return 'Requires Cirrus above zero.';
    if (key === 'shearBias' && off('shear')) return 'Requires Shear above zero.';
    return '';
  }
  function migratePreset(p) {
    if (!p || !p.look) return p;
    if (!(p.rimV >= 2)) { p.look.puffRim = Math.max(p.look.puffRim || 0, p.look.rim === undefined ? 0.5 : p.look.rim); p.rimV = 2; }
    if (!(p.parameterVersion >= 1)) {
      if (p.look.cavityLit === undefined) p.look.cavityLit = 1;
      if (p.look.modelVersion === undefined) p.look.modelVersion = 1;
    }
    if (!(p.parameterVersion >= VERSION)) {
      Object.keys(featureDefaults).forEach(function (key) { if (p.look[key] === undefined) p.look[key] = featureDefaults[key]; });
      p.parameterVersion = VERSION;
    }
    return p;
  }
  // Both editors use the same control presentation; dependencies never erase a saved value.
  function control(parent, target, spec, options) {
    options = options || {}; spec = options.raw ? spec.slice() : decorate(spec);
    var key = spec[0], meta = overrides[key] || {}, row = document.createElement('div');
    row.className = 'row param-row'; row.dataset.param = key;
    var label = document.createElement('label'); label.textContent = spec[1];
    var help = options.raw ? options.tip || '' : tip(key, options.tip), input = document.createElement(meta.options ? 'select' : 'input');
    if (meta.options) meta.options.forEach(function (v) { var o = document.createElement('option'); o.value = v[0]; o.textContent = v[1]; input.appendChild(o); });
    else { input.type = 'range'; input.min = spec[2]; input.max = spec[3]; input.step = spec[4]; }
    input.id = 'param-' + (options.scope || '') + key; input.setAttribute('aria-label', spec[1]); label.htmlFor = input.id;
    var value = document.createElement('span'); value.className = 'val';
    var note = document.createElement('span'); note.className = 'param-reason'; note.id = input.id + '-reason';
    row.appendChild(label); row.appendChild(input); row.appendChild(value); row.appendChild(note); parent.appendChild(row);
    function show() {
      var v = target()[key], why = options.raw ? '' : reason(key, options.context ? options.context() : target());
      input.value = v; input.disabled = !!why; note.textContent = why; note.hidden = !why;
      input.setAttribute('aria-describedby', note.id); label.title = input.title = [help, why].filter(Boolean).join(' ');
      value.textContent = meta.options ? '' : spec[4] >= 1 ? String(v) : (+v).toFixed(spec[4] < 0.001 ? 4 : spec[4] < 0.01 ? 3 : 2);
      value.hidden = !!meta.options; row.classList.toggle('inactive', !!why);
    }
    input.addEventListener(meta.options ? 'change' : 'input', function () {
      target()[key] = +input.value;
      if (options.onChange) options.onChange(key);
      if (options.refresh) options.refresh(); else show();
    });
    show(); return show;
  }
  var light = ['Light', ['sun', 'elevation', 'shadow', 'fill', 'body', 'shadowQuiet', 'baseShade', 'bands']];
  var texture = ['Texture', ['noise', 'noiseScale', 'noise2', 'noise2Scale']];
  var patterns = ['Pattern and erosion', ['stipple', 'breakup', 'dissolve', 'erosionType']];
  var advancedLight = ['Advanced light', ['bodySoft', 'smooth', 'rim', 'puffRim', 'cavityReach', 'cavityLit', 'baseFall', 'stackShade', 'haze', 'overhead']];
  var advancedTexture = ['Advanced texture', ['noiseBias', 'noiseBias2', 'flow', 'streak', 'anchor', 'grain']];
  var advancedPatterns = ['Advanced patterns', ['evapScale', 'stippleBias', 'breakupReach', 'dotSize', 'patternLock', 'dither']];
  var puffGroups = [
    ['Shape', ['primAmt', 'cap', 'shapeVar', 'angular', 'contourFilter', 'childShape']],
    ['Lobes', ['children', 'ratio', 'levels', 'embed', 'cluster', 'softness', 'contourCohesion']],
    light, ['Shadows', ['contact', 'cavity']], texture,
    ['Wind', ['wind', 'windSpeed', 'lean', 'erosion', 'wispAmount']], patterns,
    ['Advanced shape', ['stretchVar', 'contourVar', 'shapeSeed', 'bulge', 'sides', 'shapeFollow', 'filterReach']],
    ['Advanced lobes', ['life', 'relief1', 'relief2', 'depth', 'swayScale']],
    ['Advanced wind', ['shear', 'shearBias', 'gustSize', 'topEmphasis', 'wispLife']],
    advancedLight, advancedTexture, advancedPatterns,
    ['Sky', ['depthFall', 'cirrus', 'cirrusScale', 'cirrusAngle', 'veil']],
    ['Compatibility', ['modelVersion']]
  ];
  var skyGroups = [
    ['Surface', ['pixel', 'softness', 'cap', 'contourFilter', 'childShape', 'contourCohesion']], light, ['Shadows', ['contact', 'cavity']], texture, patterns,
    ['Atmosphere', ['atmos', 'depthFall']], ['Cirrus', ['cirrus', 'cirrusScale', 'cirrusAngle', 'cirrusFlow']],
    ['Advanced shape', ['shapeFollow', 'filterReach']],
    advancedLight, advancedTexture, advancedPatterns, ['Compatibility', ['modelVersion']]
  ];
  var api = { VERSION: VERSION, definitions: definitions, overrides: overrides, decorate: decorate, tip: tip, reason: reason,
    featureDefaults: featureDefaults, featureSpecs: featureSpecs,
    migratePreset: migratePreset, control: control, puffGroups: puffGroups, skyGroups: skyGroups,
    isAdvanced: function (title) { return /^(Advanced|Compatibility|Performance)/.test(title); } };
  if (typeof module !== 'undefined' && module.exports) module.exports = api;
  else root.CloudParameters = api;
})(typeof window !== 'undefined' ? window : globalThis);
