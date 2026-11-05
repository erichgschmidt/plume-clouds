/* Author-only host. SkyPaint evaluates density here; the sky loads frozen maps. */
(function () {
  'use strict';
  const $ = id => document.getElementById(id);
  let imported = null, importedName = '', asset = null, busy = false, cancellation = null;
  const yieldFrame = () => new Promise(resolve => requestAnimationFrame(() => setTimeout(resolve, 0)));
  function message(text, error = false) { $('status').textContent = text; $('status').classList.toggle('error', error); }
  function setBusy(value) {
    busy = value;
    for (const id of ['preset', 'resolution', 'radianceScale', 'importScene', 'clearScene', 'bake']) $(id).disabled = value;
    $('cancel').disabled = !value; $('useSky').disabled = value || !asset; $('exportAsset').disabled = value || !asset;
  }
  function decoded(value) { return Uint8Array.from(atob(value), c => c.charCodeAt(0)); }
  function checkCancelled() { if (cancellation.signal.aborted) throw new DOMException('Bake cancelled', 'AbortError'); }
  $('importScene').onclick = () => $('sceneFile').click();
  $('sceneFile').onchange = async function () {
    const file = this.files[0]; this.value = ''; if (!file) return;
    try {
      if (file.size > 32 * 1024 * 1024) throw Error('Scene file exceeds 32 MiB.');
      const next = JSON.parse(await file.text());
      // Full SkyPaint schema and sculpt validation runs in the source adapter.
      if (!next || typeof next !== 'object' || Array.isArray(next)) throw Error('Choose an exported SkyPaint Studio scene JSON file.');
      imported = next; importedName = file.name; $('recipeName').textContent = 'Imported: ' + file.name; $('clearScene').hidden = false;
      message('Scene loaded. Bake will validate its SkyPaint settings and capture the cloud.');
    } catch (error) { message(error.message, true); }
  };
  $('clearScene').onclick = () => { imported = null; importedName = ''; $('clearScene').hidden = true; $('recipeName').textContent = 'Using the selected SkyPaint preset.'; };
  $('cancel').onclick = () => { if (cancellation) cancellation.abort(); message('Cancelling after the current capture…'); };
  $('bake').onclick = async function () {
    if (busy) return;
    cancellation = new AbortController(); setBusy(true); $('progress').value = 0;
    let baker = null;
    try {
      const w = Number($('resolution').value), h = w * 3 / 4, radianceScale = Number($('radianceScale').value);
      $('preview').width = w; $('preview').height = h;
      message('Preparing the SkyPaint density field…'); await yieldFrame(); checkCancelled();
      baker = await createSkyPaintBake({ w, h, radianceScale, kind: $('preset').value, scene: imported || undefined, canvas: $('bakeWork'), previewCanvas: $('preview'), signal: cancellation.signal });
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
      baker.preview({ yaw: 0, pitch: 0 }); checkCancelled(); asset = next; $('progress').value = 1;
      $('comparison').textContent = 'Source check passed · ' + views.length + ' views · ' + (FoundryAssets.byteLength(next) / 1048576).toFixed(1) + ' MiB of maps · color encoding error ' + comparison.quantRMSE.toFixed(4) + '. Preview: SkyPaint at the front capture.';
      message('Bake complete. Use in sky or export the asset.');
    } catch (error) { message(error.name === 'AbortError' ? 'Bake cancelled. Your last completed result is still available.' : error.message, error.name !== 'AbortError'); }
    finally { if (baker) baker.dispose(); cancellation = null; setBusy(false); }
  };
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
  window.skyPaintBakerUI = { get asset() { return asset; }, get busy() { return busy; } };
})();
