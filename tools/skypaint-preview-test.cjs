'use strict';
const assert=require('node:assert/strict'),fs=require('node:fs'),path=require('node:path'),vm=require('node:vm');
const tick=()=>new Promise(resolve=>setTimeout(resolve,5));
async function main(){
 const elements=new Map(),ids=['status','preset','resolution','radianceScale','relight','importScene','sceneFile','clearScene','bake','cancel','useSky','exportAsset','preview','bakeWork','progress','recipeName','comparison','previewLabel','assetSummary'];
 for(const id of ids)elements.set(id,{id,value:'',textContent:'',disabled:false,hidden:false,classList:{toggle(){}},click(){return this.onclick?.();}});
 elements.get('preset').value='bank';elements.get('preset').selectedOptions=[{textContent:'Cumulus bank'}];elements.get('resolution').value='128';elements.get('radianceScale').value='4';
 elements.get('relight').checked=true;
 const calls=[],adapters=[],holds=new Map();let saves=0;
 const encoded=Buffer.alloc(128*96*4).toString('base64');
 function adapter(options){const a={options,scene:{sky:{exposure:1.25}},center:[0,0,0],halfHeight:8,range:5,measured:0,measuredHeights:[],previewed:0,captured:0,disposed:false,
  relightSettings:{anisotropy:.32,fill:.2,intensity:2.6,ambient:.28,sunColor:[1,1,1],skyColor:[.5,.7,1]},captureRelighting(){this.relit=(this.relit||0)+1;return {maps:[encoded,encoded]};},
  measure(){this.measured++;this.measuredHeights.push(this.halfHeight);return 2;},setFraming(h){this.halfHeight=h;},preview(){assert(!this.disposed);this.previewed++;elements.get('preview').textContent=options.scene?.name||options.kind;},capture(){this.captured++;return {depth:encoded,normal:encoded,radiance:encoded};},compare(){return {shaderMax:0,cloudCompositeMax:0,clipped:0,quantRMSE:0};},dispose(){this.disposed=true;}};adapters.push(a);return a;}
 const scope={window:{},document:{getElementById:id=>elements.get(id)},AbortController,DOMException,Uint8Array,Blob,URL,setTimeout,clearTimeout,requestAnimationFrame:cb=>setTimeout(cb,0),atob:s=>Buffer.from(s,'base64').toString('binary'),
  SKYPAINT_BAKE_SOURCE:{views:Array.from({length:15},(_,i)=>({yaw:i,pitch:0}))},
  FoundryAssets:{buildLods(a){a.lods=[];},validate(){},byteLength(){return 5000;},save:async()=>{saves++;}},
  createSkyPaintBake:async options=>{calls.push(options);if(options.scene?.invalid)throw Error('Invalid imported source');const a=adapter(options),hold=holds.get(options.kind);if(hold)await hold;return a;}};
 vm.runInNewContext(fs.readFileSync(path.join(__dirname,'../src/skypaint-bake-ui.js'),'utf8'),scope);
 await scope.window.skyPaintBakerUI.whenPreviewIdle();assert.equal(calls.length,1,'Opening the page must render a real source preview automatically');
 assert.equal(adapters[0].previewed,1);assert.equal(adapters[0].measured,1,'Preview frames one view');assert.equal(adapters[0].captured,0,'Preview does not bake fifteen views');assert.equal(saves,0);assert.equal(scope.window.skyPaintBakerUI.asset,null);
 let release;holds.set('tower',new Promise(resolve=>{release=resolve;}));elements.get('preset').value='tower';elements.get('preset').onchange();for(let i=0;i<20&&!adapters.some(a=>a.options.kind==='tower');i++)await tick();
 elements.get('preset').value='anvil';elements.get('preset').onchange();release();await scope.window.skyPaintBakerUI.whenPreviewIdle();
 const tower=adapters.find(a=>a.options.kind==='tower'),anvil=adapters.find(a=>a.options.kind==='anvil');assert(tower.disposed);assert.equal(tower.previewed,0,'A stale async preview must never paint');assert.equal(anvil.previewed,1);assert.equal(elements.get('preview').textContent,'anvil');assert.equal(saves,0);
 const callsBeforeBake=calls.length;await elements.get('bake').onclick();const completed=scope.window.skyPaintBakerUI.asset;
 assert(completed);assert.equal(calls.length,callsBeforeBake,'Bake reuses the current source adapter');assert.equal(anvil.captured,15);assert(anvil.disposed);assert.equal(saves,0,'Baking does not overwrite saved sky assets');
 assert.equal(completed.version,4);assert.equal(completed.relighting.length,15);assert.equal(anvil.relit,15);assert.equal(completed.bakeLighting.frozen,false);assert.equal(completed.relightSettings.intensity,2.6);
 assert(anvil.measuredHeights.slice(1).every(height=>height===8),'All-view measurement must restore conservative framing after the tight front preview');
 let releasePending;holds.set('tower',new Promise(resolve=>{releasePending=resolve;}));elements.get('preset').value='tower';elements.get('preset').onchange();await tick();
 const duringPreview=elements.get('bake').onclick();elements.get('cancel').onclick();releasePending();await duringPreview;await scope.window.skyPaintBakerUI.whenPreviewIdle();
 assert.equal(elements.get('preview').textContent,'tower','Cancelling a bake during source preparation must restore the requested preview');assert.equal(scope.window.skyPaintBakerUI.previewing,false);
 elements.get('preset').value='anvil';elements.get('preset').onchange();await scope.window.skyPaintBakerUI.whenPreviewIdle();
 elements.get('sceneFile').files=[{name:'custom.json',size:50,text:async()=>JSON.stringify({name:'Imported cloud'})}];await elements.get('sceneFile').onchange.call(elements.get('sceneFile'));await scope.window.skyPaintBakerUI.whenPreviewIdle();
 const imported=adapters.at(-1);assert.equal(imported.options.scene.name,'Imported cloud');assert.equal(imported.previewed,1);assert.equal(scope.window.skyPaintBakerUI.asset,completed,'Source changes preserve the last baked asset');assert.equal(saves,0);
 elements.get('clearScene').onclick();await scope.window.skyPaintBakerUI.whenPreviewIdle();assert.equal(elements.get('preview').textContent,'anvil');
 assert(elements.get('assetSummary').textContent.includes('baked'),'The image and frozen result must be distinguished');
 const cancelled=elements.get('bake').onclick();elements.get('cancel').onclick();await cancelled;
 assert.equal(scope.window.skyPaintBakerUI.asset,completed,'Cancelling a bake preserves the frozen result');assert(elements.get('status').textContent.includes('cancelled'));
 elements.get('sceneFile').files=[{name:'invalid.json',size:20,text:async()=>JSON.stringify({invalid:true})}];await elements.get('sceneFile').onchange.call(elements.get('sceneFile'));await scope.window.skyPaintBakerUI.whenPreviewIdle();
 assert.equal(scope.window.skyPaintBakerUI.asset,completed,'Invalid preview sources preserve the frozen result');assert(elements.get('previewLabel').textContent.includes('Previous source preview'));
 elements.get('clearScene').onclick();await scope.window.skyPaintBakerUI.whenPreviewIdle();
 let finishPreview;holds.set('tower',new Promise(resolve=>{finishPreview=resolve;}));elements.get('preset').value='tower';elements.get('preset').onchange();await tick();
 await elements.get('useSky').onclick();finishPreview();await scope.window.skyPaintBakerUI.whenPreviewIdle();
 assert(elements.get('status').textContent.startsWith('Saved for the sky'),'Background preview completion must preserve the user save result');assert.equal(saves,1,'Only the explicit Use in sky action saves');
 scope.window.skyPaintBakerUI.dispose();assert(adapters.every(a=>a.disposed),'Page disposal releases every adapter');assert.equal(saves,1);
 console.log('SkyPaint automatic source preview lifecycle PASS');
}
main().catch(error=>{console.error(error);process.exitCode=1;});
