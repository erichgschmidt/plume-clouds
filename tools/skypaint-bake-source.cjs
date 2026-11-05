/* Read-only source adapter. Density, studio lighting and integration stay SkyPaint's. */
'use strict';
const fs=require('node:fs'),path=require('node:path'),crypto=require('node:crypto');
function replaceOne(source,anchor,replacement){
 if(source.split(anchor).length!==2)throw Error('SkyPaint source changed at '+anchor.slice(0,80));
 return source.replace(anchor,replacement);
}
function patchCloudShader(source){
 if(source.includes('uBakeMode'))throw Error('SkyPaint shader already patched');
 let s=replaceOne(source,'void main() {',`
uniform int uBakeMode;
uniform float uBakeScale,uBakeRange;
uniform vec3 uBakeCenter,uBakeToward;
vec2 bakePack16(float value){float q=floor(clamp(value,0.0,1.0)*65535.0+.5);return vec2(floor(q/256.0),mod(q,256.0))/255.0;}
vec2 bakeOct(vec3 n){n/=abs(n.x)+abs(n.y)+abs(n.z);vec2 e=n.xy;if(n.z<0.0)e=(1.0-abs(e.yx))*vec2(e.x>=0.0?1.0:-1.0,e.y>=0.0?1.0:-1.0);return e*.5+.5;}
void main() {`);
 s=replaceOne(s,'vec3 radiance=vec3(0); float transmission=1.0;',`vec3 radiance=vec3(0); float transmission=1.0;
 float bakeWeight=0.0,bakeFar=1e20;vec3 bakePoint=vec3(0);`);
 s=replaceOne(s,'radiance+=transmission*alpha*lit;',`float contribution=transmission*alpha;
      bakeWeight+=contribution;bakePoint+=p*contribution;bakeFar=min(bakeFar,dot(p-uBakeCenter,uBakeToward));
      radiance+=transmission*alpha*lit;`);
 s=replaceOne(s,'if(uLinear==1){outColor=vec4(radiance+sky*transmission,1);return;}',`
  if(uBakeMode>0){
    float opacity=1.0-transmission;
    if(uBakeMode==4){outColor=vec4(radiance,opacity);return;}
    if(opacity<.5/255.0){outColor=vec4(0);return;}
    if(uBakeMode==1){outColor=vec4(sqrt(clamp(radiance/uBakeScale,0.0,1.0)),opacity);return;}
    vec3 representative=bakePoint/max(bakeWeight,1e-20);
    if(uBakeMode==2){float z=dot(representative-uBakeCenter,uBakeToward);outColor=vec4(bakePack16((z/uBakeRange+1.0)*.5),bakePack16((bakeFar/uBakeRange+1.0)*.5));return;}
    float e=.018;vec3 n=-vec3(density(representative+vec3(e,0,0))-density(representative-vec3(e,0,0)),density(representative+vec3(0,e,0))-density(representative-vec3(0,e,0)),density(representative+vec3(0,0,e))-density(representative-vec3(0,0,e)));
    if(dot(n,n)<1e-12)n=uBakeToward;else n=normalize(n);
    outColor=vec4(bakeOct(n),1,1);return;
  }
  if(uLinear==1){outColor=vec4(radiance+sky*transmission,1);return;}`);
 return s;
}
function encodeRadiance(values,scale=4){
 if(!(scale>0)||!Number.isFinite(scale))throw Error('Invalid radiance scale');
 const out=new Uint8Array(values.length);
 for(let i=0;i<values.length;i+=4){const a=Math.max(0,Math.min(1,values[i+3]));if(a<.5/255)continue;
  for(let k=0;k<3;k++)out[i+k]=Math.round(255*Math.sqrt(Math.max(0,Math.min(1,values[i+k]/scale))));out[i+3]=Math.round(a*255);
 }return out;
}
function assertCaptureRadianceFits(encoded,readRaw,scale,view){
 let candidate=false;
 for(let i=0;i<encoded.length;i+=4)if(encoded[i]===255||encoded[i+1]===255||encoded[i+2]===255){candidate=true;break;}
 if(!candidate)return false;
 const raw=readRaw();if(raw.length!==encoded.length)throw Error('Invalid raw capture dimensions');
 for(let i=0;i<raw.length;i+=4)for(let k=0;k<3;k++){
  if(!Number.isFinite(raw[i+k]))throw Error('Nonfinite raw capture radiance');
  if(raw[i+k]>scale)throw Error('Radiance exceeds radianceScale '+scale+' at yaw '+view.yaw+', pitch '+view.pitch+'; choose a higher Highlight range or increase radianceScale with --radiance-scale and bake again.');
 }
 return true;
}
function captureViews(){return [-85,-60,-30,0,20].flatMap(pitch=>[-35,0,35].map(yaw=>({yaw,pitch})));}
function sourceManifest(root){
 const names=['src/render/cloud.glsl','src/render/studio-field.glsl','src/render/studio-lighting.glsl','src/render/studio-render.js','src/render/density-cache.js','src/core/studio-presets.js','src/render/viewer.js','src/render/studio-noise.glsl','src/render/studio-noise.js','src/render/recipe.glsl','src/render/recipe-source.js','src/core/scaffold.js','src/core/noise.js','src/core/cache.js'];
 return {adapter:'skypaint-density-integral-v1',files:Object.fromEntries(names.map(name=>[name,crypto.createHash('sha256').update(fs.readFileSync(path.join(root,name))).digest('hex')]))};
}
function licenseText(root){
 const notices=[['Three.js','node_modules/three/LICENSE'],['Cloud Nodes Studio adaptation','Reference/cloud_nodes_studio/LICENSE'],['Pako','node_modules/pako/LICENSE']];
 const zlib=fs.readFileSync(path.join(root,'node_modules/pako/lib/zlib/inflate.js'),'utf8').replace(/\r\n/g,'\n').match(/\/\/ \(C\) 1995[\s\S]*?\/\/ 3\. This notice may not be removed or altered from any source distribution\./);
 if(!zlib)throw Error('Pako zlib notice changed; inspect its source license');
 return notices.map(([name,file])=>name+'\n'+fs.readFileSync(path.join(root,file),'utf8').replace(/\r\n/g,'\n')).join('\n\n')+'\n\nPako zlib modules\n'+zlib[0].replace(/^\/\/ ?/gm,'');
}
async function buildFixture(root){
 root=path.resolve(root);
 const esbuild=require(path.join(root,'node_modules/esbuild'));
 const entry=path.join(__dirname,'skypaint-bake-browser.mjs');
 const result=await esbuild.build({entryPoints:[entry],bundle:true,write:false,format:'iife',platform:'browser',logLevel:'silent',minify:true,
  define:{__SKY_PAINT_TEST__:'false'},loader:{'.glsl':'text'},
  plugins:[{name:'read-only-skypaint',setup(build){
   build.onResolve({filter:/^skypaint\//},args=>({path:path.join(root,'src',args.path.slice(9))}));
   build.onResolve({filter:/^three(?:\/.*)?$/},args=>({path:args.path==='three'?path.join(root,'node_modules/three/build/three.module.js'):require.resolve(args.path,{paths:[root]})}));
  }}]});return '/*!\nSkyPaint authoring adapter third-party notices\n'+licenseText(root).replaceAll('*/','* /')+'\n*/\n'+result.outputFiles[0].text+'\n'+replaceOne.toString()+'\nwindow.patchSkyPaintShader='+patchCloudShader.toString()+';\nwindow.assertSkyPaintCaptureRadianceFits='+assertCaptureRadianceFits.toString()+';\nwindow.SKYPAINT_BAKE_SOURCE='+JSON.stringify({...sourceManifest(root),views:captureViews()})+';';
}
module.exports={patchCloudShader,encodeRadiance,assertCaptureRadianceFits,captureViews,sourceManifest,licenseText,buildFixture};
