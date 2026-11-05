/* Author-only host. SkyPaint evaluates density here; the sky loads frozen maps. */
(function () {
  'use strict';
  const $ = id => document.getElementById(id);
  let imported = null, importedName = '', asset = null, busy = false, cancellation = null;
  let previewTask = Promise.resolve(), bakeTask = Promise.resolve(), previewRevision = 0, previewing = false, previewControl = null, cached = null, activeControl = null, closed = false, bakedKey = '', paintedKey = '', importRevision = 0, importing = false;
  const yieldFrame = () => new Promise(resolve => requestAnimationFrame(() => setTimeout(resolve, 0)));
  let statusVersion = 0;
  function message(text, error = false) { $('status').textContent = text; $('status').classList.toggle('error', error); return ++statusVersion; }
  function setBusy(value) {
    busy = value;
    for (const id of ['preset', 'resolution', 'radianceScale', 'importScene', 'clearScene', 'bake']) $(id).disabled = value;
    $('bake').disabled = value || importing;
    $('cancel').disabled = !value; $('useSky').disabled = value || !asset; $('exportAsset').disabled = value || !asset;
  }
  function decoded(value) { return Uint8Array.from(atob(value), c => c.charCodeAt(0)); }
  function checkCancelled() { if (cancellation.signal.aborted) throw new DOMException('Bake cancelled', 'AbortError'); }
  function sourceKey() { return [imported ? importRevision : 'preset', imported ? importedName : $('preset').value, $('resolution').value, $('radianceScale').value].join('|'); }
  function options(signal) { const w = Number($('resolution').value); return { w, h: w * 3 / 4, radianceScale: Number($('radianceScale').value), kind: $('preset').value, scene: imported || undefined, canvas: $('bakeWork'), previewCanvas: $('preview'), signal }; }
  function discardCached() { if (cached) cached.baker.dispose(); cached = null; }
  function describeAsset() {
    $('assetSummary').textContent = asset ? 'Last baked asset: ' + asset.name + (sourceKey() === bakedKey ? '. Ready to use in the sky.' : '. Source changes need a new bake before they appear in the sky.') : 'No baked asset yet. Bake this source, then use the completed cloud in the sky.';
  }
  function refreshPreview({ preserveStatus = false } = {}) {
    if (closed || busy) return previewTask;
    const revision = ++previewRevision, key = sourceKey(), controller = new AbortController(), requested = options(controller.signal);
    previewControl?.abort(); previewControl = controller; previewing = true;
    $('previewLabel').textContent = 'Updating source preview…'; const statusToken = preserveStatus ? -1 : message('Preparing the source cloud preview…'); describeAsset();
    previewTask = previewTask.catch(() => {}).then(async () => {
      let baker = null;
      try {
        if (closed || busy || revision !== previewRevision) return;
        discardCached(); await yieldFrame();
        if (controller.signal.aborted) return;
        baker = await createSkyPaintBake(requested);
        if (closed || busy || revision !== previewRevision || controller.signal.aborted) return;
        const conservativeHalfHeight = baker.halfHeight, extent = baker.measure({ yaw: 0, pitch: 0 });
        if (!(extent > 0)) throw Error('This scene has no visible cloud density to preview.');
        baker.setFraming(extent * 1.18); baker.preview({ yaw: 0, pitch: 0 });
        cached = { baker, key, controller, conservativeHalfHeight }; baker = null; paintedKey = key;
        $('previewLabel').textContent = 'Source preview · ' + (importedName || $('preset').selectedOptions[0].textContent) + ' · front view';
        if (statusVersion === statusToken) message('Source preview ready. Bake cloud to capture its moving sky views.');
      } catch (error) {
        if (revision === previewRevision && !closed && error.name !== 'AbortError') {
          $('previewLabel').textContent = 'Previous source preview · the selected source could not load'; if (statusVersion === statusToken) message(error.message, true);
        }
      } finally { if (baker) baker.dispose(); if (revision === previewRevision) previewing = false; }
    });
    return previewTask;
  }
  $('importScene').onclick = () => $('sceneFile').click();
  $('sceneFile').onchange = async function () {
    const file = this.files[0]; this.value = ''; if (!file) return;
    const request = ++importRevision; importing = true; setBusy(busy);
    try {
      if (file.size > 32 * 1024 * 1024) throw Error('Scene file exceeds 32 MiB.');
      const next = JSON.parse(await file.text());
      if (closed || request !== importRevision) return;
      // Full SkyPaint schema and sculpt validation runs in the source adapter.
      if (!next || typeof next !== 'object' || Array.isArray(next)) throw Error('Choose an exported SkyPaint Studio scene JSON file.');
      imported = next; importedName = file.name; $('recipeName').textContent = 'Imported: ' + file.name; $('clearScene').hidden = false;
      refreshPreview();
    } catch (error) { if (request === importRevision) message(error.message, true); }
    finally { if (request === importRevision) { importing = false; setBusy(busy); } }
  };
  function usePreset() { ++importRevision; importing = false; imported = null; importedName = ''; $('clearScene').hidden = true; $('recipeName').textContent = 'Using the selected SkyPaint preset.'; setBusy(busy); return refreshPreview(); }
  $('clearScene').onclick = usePreset;
  $('preset').onchange = usePreset;
  $('resolution').onchange = refreshPreview; $('radianceScale').onchange = refreshPreview;
  $('cancel').onclick = () => { if (cancellation) cancellation.abort(); activeControl?.abort(); message('Cancelling after the current capture…'); };
  async function bake() {
    if (busy || importing || closed) return;
    cancellation = new AbortController(); setBusy(true); $('progress').value = 0;
    const key = sourceKey(); ++previewRevision;
    if (previewing) previewControl?.abort();
    let baker = null, restorePreview = false;
    try {
      const w = Number($('resolution').value), h = w * 3 / 4, radianceScale = Number($('radianceScale').value);
      message('Preparing the SkyPaint density field…'); await yieldFrame(); checkCancelled();
      await previewTask; previewing = false; checkCancelled();
      if (cached?.key === key && !cached.controller.signal.aborted) { baker = cached.baker; activeControl = cached.controller; baker.setFraming(cached.conservativeHalfHeight); cached = null; }
      else { discardCached(); activeControl = cancellation; baker = await createSkyPaintBake(options(cancellation.signal)); }
      const views = SKYPAINT_BAKE_SOURCE.views.map(v => ({ ...v }));
      let extent = 0;
      for (let i = 0; i < views.length; i++) {
        checkCancelled(); message('Finding cloud bounds · view ' + (i + 1) + ' of ' + views.length); await yieldFrame();
        extent = Math.max(extent, baker.measure(views[i])); $('progress').value = .3 * (i + 1) / views.length;
      }
      if (!(extent > 0)) throw Error('This scene has no visible cloud density to bake.');
      baker.setFraming(extent * 1.18);
      message('Checking the bake against SkyPaint…'); await yieldFrame(); checkCancelled();
      const comparison = baker.compare({ yaw: 0, pitch: 0 });
      if (comparison.shaderMax > 1e-5 || comparison.cloudCompositeMax > 1e-4 || comparison.clipped) throw Error('The source comparison failed. The last completed asset has been preserved.');
      const next = { format: 'plume.foundry.asset', version: 3, name: importedName ? 'SkyPaint · ' + importedName.replace(/\.json$/i, '') : 'SkyPaint · ' + $('preset').selectedOptions[0].textContent,
        w, h, halfHeight: baker.halfHeight, range: baker.range, views, grid: 15, yawArc: 35, pitchArc: 85,
        appearance: 'baked-radiance-v1', radianceScale, data: [], radiance: [], source: SKYPAINT_BAKE_SOURCE,
        bakeLighting: { exposure: baker.scene.sky.exposure, toneMap: 'exponential-v1', frozen: true },
        recipe: { source: 'SkyPaint', scene: baker.scene, capture: { center: baker.center, viewSteps: 128, shadowSteps: 32, layers: 'one integrated interval', depth: 'opacity-contribution centroid' } } };
      for (let i = 0; i < views.length; i++) {
        checkCancelled(); message('Baking cloud · view ' + (i + 1) + ' of ' + views.length); await yieldFrame();
        const frame = baker.capture(views[i]);
        next.data.push([decoded(frame.depth), decoded(frame.normal), new Uint8Array(w * h * 4), new Uint8Array(w * h * 4)]);
        next.radiance.push([decoded(frame.radiance), new Uint8Array(w * h * 4)]); $('progress').value = .3 + .65 * (i + 1) / views.length;
      }
      checkCancelled(); message('Preparing detail levels…'); await yieldFrame();
      FoundryAssets.buildLods(next, { minWidth: 64 }); FoundryAssets.validate(next);
      baker.preview({ yaw: 0, pitch: 0 }); checkCancelled(); asset = next; bakedKey = key; paintedKey = key; $('progress').value = 1; describeAsset();
      $('previewLabel').textContent = 'Source preview · front view · captured in the last bake';
      $('comparison').textContent = 'Last bake verified · ' + views.length + ' views · ' + (FoundryAssets.byteLength(next) / 1048576).toFixed(1) + ' MiB of maps · color encoding error ' + comparison.quantRMSE.toFixed(4) + '.';
      message('Bake complete. Use in sky or export the asset.');
    } catch (error) { restorePreview = error.name === 'AbortError'; message(restorePreview ? 'Bake cancelled. Your last completed result is still available.' : error.message, !restorePreview); }
    finally { if (baker) baker.dispose(); activeControl = null; cancellation = null; previewing = false; setBusy(false); if (restorePreview && paintedKey !== sourceKey() && !closed) refreshPreview({ preserveStatus: true }); }
  }
  $('bake').onclick = () => { bakeTask = bake(); return bakeTask; };
  $('useSky').onclick = async function () {
    if (!asset || busy) return;
    try { await FoundryAssets.save(asset, 'active'); message('Saved for the sky. Open cloud sky, then choose Load saved cloud if it is already open.'); }
    catch (error) { message('Could not save locally: ' + error.message + ' Export the asset and import it in the sky instead.', true); }
  };
  $('exportAsset').onclick = function () {
    if (!asset || busy) return;
    const url = URL.createObjectURL(new Blob([FoundryAssets.stringify(asset)], { type: 'application/json' }));
    const a = document.createElement('a'); a.href = url; a.download = 'skypaint-cloud.json'; a.click(); setTimeout(() => URL.revokeObjectURL(url), 1000);
  };
  function dispose() { closed = true; ++previewRevision; ++importRevision; previewControl?.abort(); cancellation?.abort(); activeControl?.abort(); discardCached(); }
  window.skyPaintBakerUI = { get asset() { return asset; }, get busy() { return busy; }, get previewing() { return previewing; }, whenPreviewIdle: () => previewTask, dispose };
  window.addEventListener?.('pagehide', dispose);
  window.addEventListener?.('pageshow', async event => { if (event.persisted) { await Promise.allSettled([previewTask, bakeTask]); closed = false; previewing = false; importing = false; setBusy(false); refreshPreview(); } });
  describeAsset(); refreshPreview();
})();
