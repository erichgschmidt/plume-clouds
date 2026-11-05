/* Versioned frozen maps. Recipes are metadata, never executed on import. */
(function(root){
  'use strict';
  const FORMAT='plume.foundry.asset',VERSION=2,MAX_BYTES=160*1024*1024;
  function number(n,min,max,name){if(typeof n!=='number'||!Number.isFinite(n)||n<min||n>max)throw Error('Invalid '+name);return n;}
  function dimension(n,name){number(n,16,1024,name);if(!Number.isInteger(n))throw Error('Invalid '+name);return n;}
  function levels(a){return [...(a.lods||[]),a];}
  function headers(a){
    if(!a||typeof a!=='object')throw Error('Missing cloud asset');
    const w=dimension(a.w,'map width'),h=dimension(a.h,'map height');
    number(a.halfHeight,.001,100,'halfHeight');number(a.range,.001,1000,'depth range');
    if(!Array.isArray(a.views)||!a.views.length||a.views.length>64)throw Error('Invalid capture views');
    a.views.forEach(v=>{if(!v)throw Error('Invalid capture angle');number(v.yaw,-180,180,'yaw angle');number(v.pitch,-90,90,'pitch angle');});
    if(a.lods!==undefined&&!Array.isArray(a.lods))throw Error('Invalid LOD list');
    if((a.lods||[]).length>6)throw Error('Too many LOD levels');
    let previous=0,bytes=0;
    for(const l of levels(a)){
      dimension(l.w,'LOD map width');dimension(l.h,'LOD map height');const ratio=w/l.w;
      if(l.w<=previous||l.w>w||l.h*w!==h*l.w||!Number.isInteger(Math.log2(ratio)))throw Error('LOD dimensions must be ascending power-of-two reductions');
      if(!!l.lighting!==!!a.lighting)throw Error('LOD lighting must match the master');
      previous=l.w;bytes+=l.w*l.h*(l.lighting?32:16)*a.views.length;
    }
    if(bytes>MAX_BYTES)throw Error('Cloud maps exceed 160 MiB memory budget');return bytes;
  }
  function mapSet(maps,count,size,name,encoded){
    if(!Array.isArray(maps)||maps.length!==count)throw Error(name+' view count mismatch');
    maps.forEach(v=>{if(!Array.isArray(v)||v.length!==4)throw Error(name+' needs four maps per view');v.forEach(m=>{
      if(encoded){if(typeof m!=='string'||m.length!==4*Math.ceil(size/3)||!(/^[A-Za-z0-9+/]*={0,2}$/).test(m))throw Error('Invalid map base64');}
      else if(!(m instanceof Uint8Array)||m.length!==size)throw Error('Invalid '+name+' map bytes');
    });});
  }
  function validate(a){headers(a);for(const l of levels(a)){mapSet(l.data,a.views.length,l.w*l.h*4,'Geometry',false);if(l.lighting)mapSet(l.lighting,a.views.length,l.w*l.h*4,'lighting',false);}return a;}
  function encode(bytes){
    if(typeof Buffer!=='undefined')return Buffer.from(bytes).toString('base64');
    let s='';for(let i=0;i<bytes.length;i+=8192)s+=String.fromCharCode(...bytes.subarray(i,i+8192));return btoa(s);
  }
  function decode(s,size){const bytes=typeof Buffer!=='undefined'?new Uint8Array(Buffer.from(s,'base64')):Uint8Array.from(atob(s),c=>c.charCodeAt(0));if(bytes.length!==size)throw Error('Invalid decoded map length');return bytes;}
  function metadata(a){return {format:FORMAT,version:VERSION,name:String(a.name||'Authored cloud').slice(0,120),w:a.w,h:a.h,halfHeight:a.halfHeight,range:a.range,
    views:a.views.map(v=>({yaw:v.yaw,pitch:v.pitch})),grid:a.grid||a.views.length,yawArc:a.yawArc||35,pitchArc:a.pitchArc||85,
    recipe:a.recipe||null,coordinateSystem:'X right, Y up, Z toward front capture',normalSpace:'object',rowOrder:'bottom-up',mapOrder:['depth0','normal0','depth1','normal1'],
    ...(a.lighting?{lightEncoding:'axis-irradiance-v1',lightOrder:['positive0','negative0','positive1','negative1'],lightChannels:'RGB = X,Y,Z; A = coverage'}:{})};}
  function levelRecord(l,convert){return {w:l.w,h:l.h,data:l.data.map(v=>v.map(convert)),...(l.lighting?{lighting:l.lighting.map(v=>v.map(convert))}:{})};}
  function record(a,convert){return {...metadata(a),...levelRecord(a,convert),...(a.lods?{lods:a.lods.map(l=>levelRecord(l,convert))}:{})};}
  function stringify(a){validate(a);return JSON.stringify(record(a,encode));}
  function parse(value){
    if(typeof value==='string'&&value.length>MAX_BYTES*1.4+1024*1024)throw Error('Cloud asset file exceeds size limit');
    const a=typeof value==='string'?JSON.parse(value):value;
    if(!a||a.format!==FORMAT||![1,2].includes(a.version))throw Error('Unsupported cloud asset format/version');
    headers(a);if(a.lighting&&a.lightEncoding!==undefined&&a.lightEncoding!=='axis-irradiance-v1')throw Error('Unsupported lightmap encoding');
    // Inspect all sizes and budgets before allocating any decoded maps.
    for(const l of levels(a)){mapSet(l.data,a.views.length,l.w*l.h*4,'Geometry',true);if(l.lighting)mapSet(l.lighting,a.views.length,l.w*l.h*4,'lighting',true);}
    const convert=l=>levelRecord(l,m=>decode(m,l.w*l.h*4));return validate({...metadata(a),...convert(a),...(a.lods?{lods:a.lods.map(convert)}:{})});
  }
  function byteLength(a){validate(a);return headers(a);}
  function padDepth(depth,normal,w,h,radius=10){
    const n=w*h,dist=new Int16Array(n),queue=new Int32Array(n);dist.fill(-1);let head=0,tail=0;
    for(let i=0;i<n;i++)if(normal[i*4+3]>127){dist[i]=0;queue[tail++]=i;}
    function visit(i,j){if(dist[j]>=0)return;dist[j]=dist[i]+1;for(let k=0;k<4;k++)depth[j*4+k]=depth[i*4+k];queue[tail++]=j;}
    while(head<tail){const i=queue[head++];if(dist[i]>=radius)continue;const x=i%w,y=(i/w)|0;if(x)visit(i,i-1);if(x<w-1)visit(i,i+1);if(y)visit(i,i-w);if(y<h-1)visit(i,i+w);}
  }
  function reduce(source){
    const w=source.w/2,h=source.h/2,data=[],lighting=source.lighting?[]:null;
    for(let v=0;v<source.data.length;v++){
      const src=source.data[v],dst=Array.from({length:4},()=>new Uint8Array(w*h*4)),light=lighting?Array.from({length:4},()=>new Uint8Array(w*h*4)):null;
      for(let y=0;y<h;y++)for(let x=0;x<w;x++){
        let chosen=-1,nearest=-1;
        for(let dy=0;dy<2;dy++)for(let dx=0;dx<2;dx++){
          const i=((y*2+dy)*source.w+x*2+dx)*4,layer=src[1][i+3]>127?0:src[3][i+3]>127?2:-1;
          if(layer<0)continue;const z=src[layer][i]*256+src[layer][i+1];if(z>nearest){nearest=z;chosen=i;}
        }
        if(chosen<0)continue;const j=(y*w+x)*4;
        // Copy a complete ray: no unrelated layers or interpolated packed bytes.
        // Directional lighting travels with exactly the same chosen surface.
        for(let m=0;m<4;m++)for(let k=0;k<4;k++){dst[m][j+k]=src[m][chosen+k];if(light)light[m][j+k]=source.lighting[v][m][chosen+k];}
      }
      padDepth(dst[0],dst[1],w,h);padDepth(dst[2],dst[3],w,h);data.push(dst);if(light)lighting.push(light);
    }
    return {w,h,data,...(lighting?{lighting}:{})};
  }
  function buildLods(a,options={}){
    validate(a);const minWidth=Math.max(16,options.minWidth||64),lods=[];let current=a;
    // Preflight the complete pyramid before allocating; replace any old LODs.
    let w=a.w,h=a.h,bytes=w*h*(a.lighting?32:16)*a.views.length;
    while(w/2>=minWidth&&h/2>=16&&w%2===0&&h%2===0){w/=2;h/=2;bytes+=w*h*(a.lighting?32:16)*a.views.length;}
    if(bytes>MAX_BYTES)throw Error('Cloud LOD pyramid exceeds 160 MiB memory budget');
    while(current.w/2>=minWidth&&current.h/2>=16&&current.w%2===0&&current.h%2===0){current=reduce(current);lods.unshift(current);}
    a.lods=lods;return validate(a);
  }
  function database(){return new Promise((resolve,reject)=>{
    if(!root.indexedDB){reject(Error('Local asset storage is unavailable; export/import a sky asset instead.'));return;}
    const q=root.indexedDB.open('plume-foundry',1);q.onupgradeneeded=()=>q.result.createObjectStore('assets');q.onerror=()=>reject(q.error);q.onsuccess=()=>resolve(q.result);
  });}
  async function save(asset,key='active'){
    validate(asset);const db=await database();
    try{await new Promise((resolve,reject)=>{const tx=db.transaction('assets','readwrite');tx.objectStore('assets').put(record(asset,m=>m),key);tx.oncomplete=resolve;tx.onerror=()=>reject(tx.error);tx.onabort=()=>reject(tx.error||Error('Asset save aborted'));});}finally{db.close();}
  }
  async function load(key='active'){
    const db=await database();try{return await new Promise((resolve,reject)=>{const tx=db.transaction('assets','readonly'),q=tx.objectStore('assets').get(key);q.onsuccess=()=>{try{resolve(q.result?validate(q.result):null);}catch(e){reject(e);}};q.onerror=()=>reject(q.error);});}finally{db.close();}
  }
  const api={FORMAT,VERSION,MAX_BYTES,validate,parse,stringify,save,load,byteLength,buildLods};root.FoundryAssets=api;if(typeof module!=='undefined')module.exports=api;
})(typeof globalThis!=='undefined'?globalThis:window);
