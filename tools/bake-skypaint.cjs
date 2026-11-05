/* Example: node tools/bake-skypaint.cjs --source ../SkyPaint --width 128 */
'use strict';
const fs=require('node:fs'),path=require('node:path'),http=require('node:http');
const {buildFixture,captureViews,sourceManifest}=require('./skypaint-bake-source.cjs');
const argv=process.argv.slice(2),arg=(key,fallback)=>{const i=argv.indexOf('--'+key);return i<0?fallback:argv[i+1];};
async function main(){
 const root=path.resolve(arg('source',process.env.SKYPAINT_SOURCE||'../SkyPaint'));
 const w=Number(arg('width','128')),h=w*3/4,radianceScale=Number(arg('radiance-scale','4'));
 if(![64,128,256,512].includes(w))throw Error('Width must be 64,128,256 or512');
 const output=path.resolve(arg('output','assets/skypaint-default.js')),report=path.resolve(arg('report','assets/skypaint-default-audit.json'));
 const bundle=await buildFixture(root);
 if(argv.includes('--bundle-only')){const destination=path.resolve(arg('bundle-output','assets/skypaint-author.js'));fs.mkdirSync(path.dirname(destination),{recursive:true});fs.writeFileSync(destination,'// Generated SkyPaint author-only adapter. Rebuild: node tools/bake-skypaint.cjs --bundle-only\n'+bundle);console.log(JSON.stringify({output:destination,bytes:Buffer.byteLength(bundle)}));return;}
 const html=`<!doctype html><style>body{margin:0;background:#172435}canvas{width:${w}px;height:${h}px;image-rendering:pixelated}#preview{width:${w*3}px;height:${h*3}px}</style><canvas></canvas><canvas id="preview" width="${w}" height="${h}"></canvas><script src="/bundle.js"></script>`;
 const server=http.createServer((req,res)=>{res.setHeader('content-type',req.url==='/bundle.js'?'text/javascript':'text/html');res.end(req.url==='/bundle.js'?bundle:html);});
 await new Promise(resolve=>server.listen(0,'127.0.0.1',resolve));
 const {chromium}=require(process.env.PLAYWRIGHT_MODULE||'C:/Users/Gus/AppData/Local/Temp/plume-shadow-audit/node_modules/playwright');
 const browser=await chromium.launch({headless:true,executablePath:process.env.CHROME_PATH||'C:/Program Files/Google/Chrome/Application/chrome.exe',args:['--enable-webgl','--ignore-gpu-blocklist']});
 const started=Date.now();
 try{
  const page=await browser.newPage(),errors=[];page.on('pageerror',e=>errors.push(e.message));page.on('console',m=>{if(m.type()==='error')errors.push(m.text());});
  await page.goto('http://127.0.0.1:'+server.address().port);
  if(errors.length)throw Error(errors.join('\n'));
  const sceneFile=arg('scene',null);
  const info=await page.evaluate(async options=>{const b=await createSkyPaintBake(options);return {scene:b.scene,bounds:b.bounds,center:b.center,halfHeight:b.halfHeight,range:b.range};},{w,h,radianceScale,kind:arg('kind','bank'),densityResolution:Number(arg('density','128')),halfHeight:Number(arg('half-height','0')),...(sceneFile?{scene:fs.readFileSync(path.resolve(sceneFile),'utf8')}:{})});
  const views=captureViews();
  if(!Number(arg('half-height','0'))){let extent=0;for(const view of views)extent=Math.max(extent,await page.evaluate(v=>skyPaintBake.measure(v),view));if(!(extent>0))throw Error('SkyPaint recipe has no occupied capture support');info.halfHeight=await page.evaluate(height=>skyPaintBake.setFraming(height),extent*1.18);}
  const comparison=await page.evaluate(view=>skyPaintBake.compare(view),{yaw:0,pitch:0});
  if(comparison.shaderMax>1e-5||comparison.cloudCompositeMax>1e-5||comparison.clipped||comparison.transparentRGB)throw Error('SkyPaint source fidelity failed: '+JSON.stringify(comparison));
  const decode=s=>new Uint8Array(Buffer.from(s,'base64')),data=[],radiance=[],perView=[];
  for(const view of views){
   const result=await page.evaluate(v=>skyPaintBake.capture(v),view),rgba=decode(result.radiance),normal=decode(result.normal),depth=decode(result.depth);
   let count=0,opacity=0,edge=0,max=0;for(let i=0;i<rgba.length;i+=4){if(rgba[i+3]){count++;opacity+=rgba[i+3]/255;const p=i/4,x=p%w,y=Math.floor(p/w);if(x===0||x===w-1||y===0||y===h-1)edge++;}max=Math.max(max,rgba[i],rgba[i+1],rgba[i+2]);}
   data.push([depth,normal,new Uint8Array(w*h*4),new Uint8Array(w*h*4)]);radiance.push([rgba,new Uint8Array(w*h*4)]);
   perView.push({...view,occupied:count,opacitySum:opacity,edgePixels:edge,maxRGBByte:max});console.log(JSON.stringify(perView.at(-1)));
  }
  const asset={format:'plume.foundry.asset',version:3,name:'SkyPaint Studio cumulus — density integral',w,h,halfHeight:info.halfHeight,range:info.range,views,grid:15,yawArc:35,pitchArc:85,appearance:'baked-radiance-v1',radianceScale,data,radiance,
   source:{name:'SkyPaint',recipe:sceneFile?'exported scene JSON':'studioScene()',...sourceManifest(root)},bakeLighting:{exposure:info.scene.sky.exposure,sun:info.scene.sun,look:info.scene.render.look,transport:info.scene.render.look.visibility||'direct-v1',toneMap:'exponential-v1',frozen:true},
   recipe:{source:'SkyPaint',scene:info.scene,capture:{center:info.center,viewSteps:128,shadowSteps:32,depth:'opacity-contribution centroid; back=last contributing sample',layers:'one complete integrated interval plus empty interval1',radiance:'unexposed premultiplied linear RGB; alpha=1-transmission'}},coordinateSystem:'X right, Y up, Z toward front capture',normalSpace:'object',rowOrder:'bottom-up',mapOrder:['depth0','normal0','depth1','normal1']};
  const Assets=require('../src/foundry-assets.js');
  Assets.buildLods(asset,{minWidth:64});const json=Assets.stringify(asset);
  fs.mkdirSync(path.dirname(output),{recursive:true});fs.writeFileSync(output,output.endsWith('.json')?json:'// SkyPaint real density-integrated cloud; offline authoring only.\nwindow.SKYPAINT_DEFAULT='+json+';\n');
  const preview=await page.evaluate(()=>skyPaintBake.preview({yaw:0,pitch:0}));
  const previewPath=output.replace(/\.(js|json)$/,'.png');fs.writeFileSync(previewPath,Buffer.from(preview.split(',')[1],'base64'));
  if(errors.length)throw Error(errors.join('\n'));
  const audit={source:sourceManifest(root),comparison,perView,w,h,views:views.length,lods:asset.lods.map(l=>l.w),rawBytes:Assets.byteLength(asset),elapsedSeconds:(Date.now()-started)/1000,limitations:['Lighting frozen at bake; runtime must not relight radiance; exposure remains editable','One integrated depth interval cannot reveal internal disocclusions','Representative depth is opacity centroid, not a geometric cloud surface'],output,previewPath};
  fs.writeFileSync(report,JSON.stringify(audit,null,2)+'\n');console.log(JSON.stringify(audit));
  await page.evaluate(()=>skyPaintBake.dispose());
 }finally{await browser.close();await new Promise(resolve=>server.close(resolve));}
}
if(require.main===module)main().catch(e=>{console.error(e);process.exitCode=1;});
