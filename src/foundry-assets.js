/* Versioned frozen maps. Recipes are metadata, never executed on import. */
(function(root){
  'use strict';
  const FORMAT='plume.foundry.asset',VERSION=4,MAX_BYTES=160*1024*1024;
  const RELIGHT_ENCODING='sqrt-premultiplied-visibility-v1';
  // Match the standalone renderer: avoid float uniform underflow and keep
  // decoded map radiance within the RGBA16F material target's finite range.
  const MIN_RADIANCE_SCALE=1e-6,MAX_RADIANCE_SCALE=65504;
  function number(n,min,max,name){if(typeof n!=='number'||!Number.isFinite(n)||n<min||n>max)throw Error('Invalid '+name);return n;}
  function dimension(n,name){number(n,16,1024,name);if(!Number.isInteger(n))throw Error('Invalid '+name);return n;}
  function levels(a){return [...(a.lods||[]),a];}
  function finiteMetadata(value,depth=0){
    if(depth>16)throw Error('Invalid appearance metadata nesting');
    if(typeof value==='number'&&!Number.isFinite(value))throw Error('Invalid nonfinite appearance metadata');
    if(value&&typeof value==='object')for(const v of Object.values(value))finiteMetadata(v,depth+1);
  }
  function relightSettings(settings){
    if(settings===undefined)return;
    if(!settings||typeof settings!=='object'||Array.isArray(settings))throw Error('Invalid relighting settings');
    finiteMetadata(settings);
    for(const [key,min,max]of [['anisotropy',-.9,.9],['fill',0,4],['intensity',0,64],['ambient',0,16]])if(settings[key]!==undefined)number(settings[key],min,max,'relighting '+key);
    for(const key of ['sunColor','skyColor'])if(settings[key]!==undefined){
      if(!Array.isArray(settings[key])||settings[key].length!==3)throw Error('Invalid relighting '+key);
      for(const n of settings[key])number(n,0,16,'relighting '+key);
    }
  }
  function sameMetadata(a,b){
    if(a===b)return true;
    if(!a||!b||typeof a!=='object'||typeof b!=='object'||Array.isArray(a)!==Array.isArray(b))return false;
    const keys=Object.keys(a);return keys.length===Object.keys(b).length&&keys.every(k=>Object.prototype.hasOwnProperty.call(b,k)&&sameMetadata(a[k],b[k]));
  }
  function relighting(a,baked){
    const enabled=a.relighting!==undefined;
    if(enabled){
      if(!baked)throw Error('Relighting requires baked-radiance-v1 appearance');
      if(a.relightEncoding!==undefined&&a.relightEncoding!==RELIGHT_ENCODING)throw Error('Unsupported relighting encoding');
      relightSettings(a.relightSettings);
    }else if(a.relightEncoding!==undefined||a.relightSettings!==undefined)throw Error('Relighting metadata requires response maps');
    return enabled;
  }
  function appearance(a){
    if(a.appearance!==undefined&&a.appearance!=='baked-radiance-v1')throw Error('Unsupported cloud appearance');
    const baked=a.appearance==='baked-radiance-v1';
    if(baked){if(a.lighting)throw Error('Radiance appearance cannot mix directional lighting');number(a.radianceScale===undefined?4:a.radianceScale,MIN_RADIANCE_SCALE,MAX_RADIANCE_SCALE,'radiance scale (supported range 1e-6..65504)');}
    else if(a.radiance!==undefined||a.radianceScale!==undefined)throw Error('Radiance maps require baked-radiance-v1 appearance');
    const relit=relighting(a,baked);
    if(a.version===4&&!relit)throw Error('Asset version 4 requires relighting maps');
    if(baked){
      if(a.version!==undefined&&a.version!==(relit?4:3))throw Error('Radiance appearance requires asset version '+(relit?4:3));
      if(a.radianceEncoding!==undefined&&a.radianceEncoding!=='sqrt-premultiplied-linear-v1')throw Error('Unsupported radiance encoding');
      if(a.radianceOrder!==undefined&&JSON.stringify(a.radianceOrder)!=='["interval0","interval1"]')throw Error('Invalid radiance interval order');
      finiteMetadata(a.source);finiteMetadata(a.bakeLighting);finiteMetadata(a.recipe);
    }
    return baked;
  }
  function headers(a){
    if(!a||typeof a!=='object')throw Error('Missing cloud asset');
    const w=dimension(a.w,'map width'),h=dimension(a.h,'map height');
    number(a.halfHeight,.001,100,'halfHeight');number(a.range,.001,1000,'depth range');
    if(!Array.isArray(a.views)||!a.views.length||a.views.length>64)throw Error('Invalid capture views');
    a.views.forEach(v=>{if(!v)throw Error('Invalid capture angle');number(v.yaw,-180,180,'yaw angle');number(v.pitch,-90,90,'pitch angle');});
    if(a.lods!==undefined&&!Array.isArray(a.lods))throw Error('Invalid LOD list');
    if((a.lods||[]).length>6)throw Error('Too many LOD levels');
    const baked=appearance(a),relit=a.relighting!==undefined;let previous=0,bytes=0;
    for(const l of levels(a)){
      dimension(l.w,'LOD map width');dimension(l.h,'LOD map height');const ratio=w/l.w;
      if(l.w<=previous||l.w>w||l.h*w!==h*l.w||!Number.isInteger(Math.log2(ratio)))throw Error('LOD dimensions must be ascending power-of-two reductions');
      if(!!l.lighting!==!!a.lighting)throw Error('LOD lighting must match the master');
      if(!!l.radiance!==baked||(l.appearance!==undefined&&l.appearance!==a.appearance)||(l.radianceScale!==undefined&&l.radianceScale!==(a.radianceScale===undefined?4:a.radianceScale)))throw Error('LOD radiance appearance must match the master');
      if(!relit&&(l.relightEncoding!==undefined||l.relightSettings!==undefined))throw Error('LOD relighting metadata requires response maps');
      if(l.relightSettings!==undefined)relightSettings(l.relightSettings);
      if((l.relighting!==undefined)!==relit||(l.relightEncoding!==undefined&&l.relightEncoding!==(a.relightEncoding||RELIGHT_ENCODING))||(l!==a&&l.relightSettings!==undefined&&!sameMetadata(l.relightSettings,a.relightSettings)))throw Error('LOD relighting must match the master');
      previous=l.w;bytes+=l.w*l.h*(relit?32:baked?24:l.lighting?32:16)*a.views.length;
    }
    if(bytes>MAX_BYTES)throw Error('Cloud maps exceed 160 MiB memory budget');return bytes;
  }
  function mapSet(maps,count,size,name,encoded,mapCount=4){
    if(!Array.isArray(maps)||maps.length!==count)throw Error(name+' view count mismatch');
    maps.forEach(v=>{if(!Array.isArray(v)||v.length!==mapCount)throw Error(name+' needs '+mapCount+' maps per view');v.forEach(m=>{
      if(encoded){if(typeof m!=='string'||m.length!==4*Math.ceil(size/3)||!(/^[A-Za-z0-9+/]*={0,2}$/).test(m))throw Error('Invalid map base64');}
      else if(!(m instanceof Uint8Array)||m.length!==size)throw Error('Invalid '+name+' map bytes');
    });});
  }
  function validate(a){
    headers(a);
    for(const l of levels(a)){
      const size=l.w*l.h*4;mapSet(l.data,a.views.length,size,'Geometry',false);
      if(l.lighting)mapSet(l.lighting,a.views.length,size,'lighting',false);
      if(l.radiance)mapSet(l.radiance,a.views.length,size,'radiance',false,2);
      if(l.relighting!==undefined){
        mapSet(l.relighting,a.views.length,size,'relighting',false,2);
        for(let v=0;v<a.views.length;v++)for(let i=3;i<size;i+=4)if(l.data[v][3][i]>127||l.radiance[v][1][i]>0)throw Error('Relighting supports occupied interval0 only');
      }
    }
    return a;
  }
  function encode(bytes){
    if(typeof Buffer!=='undefined')return Buffer.from(bytes).toString('base64');
    let s='';for(let i=0;i<bytes.length;i+=8192)s+=String.fromCharCode(...bytes.subarray(i,i+8192));return btoa(s);
  }
  function decode(s,size){const bytes=typeof Buffer!=='undefined'?new Uint8Array(Buffer.from(s,'base64')):Uint8Array.from(atob(s),c=>c.charCodeAt(0));if(bytes.length!==size)throw Error('Invalid decoded map length');return bytes;}
  function metadata(a){return {format:FORMAT,version:a.relighting!==undefined?VERSION:a.appearance?3:2,name:String(a.name||'Authored cloud').slice(0,120),w:a.w,h:a.h,halfHeight:a.halfHeight,range:a.range,
    views:a.views.map(v=>({yaw:v.yaw,pitch:v.pitch})),grid:a.grid||a.views.length,yawArc:a.yawArc||35,pitchArc:a.pitchArc||85,
    recipe:a.recipe||null,coordinateSystem:'X right, Y up, Z toward front capture',normalSpace:'object',rowOrder:'bottom-up',mapOrder:['depth0','normal0','depth1','normal1'],
    ...(a.lighting?{lightEncoding:'axis-irradiance-v1',lightOrder:['positive0','negative0','positive1','negative1'],lightChannels:'RGB = X,Y,Z; A = coverage'}:{}),
    ...(a.appearance?{appearance:a.appearance,radianceScale:a.radianceScale===undefined?4:a.radianceScale,radianceEncoding:'sqrt-premultiplied-linear-v1',radianceOrder:['interval0','interval1'],...(a.source?{source:a.source}:{}),...(a.bakeLighting?{bakeLighting:a.bakeLighting}:{})}:{}),
    ...(a.relighting!==undefined?{relightEncoding:RELIGHT_ENCODING,...(a.relightSettings!==undefined?{relightSettings:a.relightSettings}:{})}:{})};}
  function levelRecord(l,convert){return {w:l.w,h:l.h,data:l.data.map(v=>v.map(convert)),...(l.lighting?{lighting:l.lighting.map(v=>v.map(convert))}:{}),...(l.radiance?{radiance:l.radiance.map(v=>v.map(convert))}:{}),...(l.relighting!==undefined?{relighting:l.relighting.map(v=>v.map(convert))}:{})};}
  function record(a,convert){return {...metadata(a),...levelRecord(a,convert),...(a.lods?{lods:a.lods.map(l=>levelRecord(l,convert))}:{})};}
  function stringify(a){validate(a);return JSON.stringify(record(a,encode));}
  function parse(value){
    if(typeof value==='string'&&value.length>MAX_BYTES*1.4+1024*1024)throw Error('Cloud asset file exceeds size limit');
    const a=typeof value==='string'?JSON.parse(value):value;
    if(!a||a.format!==FORMAT||![1,2,3,4].includes(a.version)||(a.relighting!==undefined?a.version!==4:(a.appearance!==undefined||a.radiance!==undefined)?a.version!==3:a.version===4))throw Error('Unsupported cloud asset format/version');
    if(a.radianceEncoding!==undefined&&a.radianceEncoding!=='sqrt-premultiplied-linear-v1')throw Error('Unsupported radiance encoding');
    headers(a);if(a.lighting&&a.lightEncoding!==undefined&&a.lightEncoding!=='axis-irradiance-v1')throw Error('Unsupported lightmap encoding');
    // Inspect all sizes and budgets before allocating any decoded maps.
    for(const l of levels(a)){mapSet(l.data,a.views.length,l.w*l.h*4,'Geometry',true);if(l.lighting)mapSet(l.lighting,a.views.length,l.w*l.h*4,'lighting',true);if(l.radiance)mapSet(l.radiance,a.views.length,l.w*l.h*4,'radiance',true,2);if(l.relighting!==undefined)mapSet(l.relighting,a.views.length,l.w*l.h*4,'relighting',true,2);}
    const convert=l=>levelRecord(l,m=>decode(m,l.w*l.h*4));return validate({...metadata(a),...convert(a),...(a.lods?{lods:a.lods.map(convert)}:{})});
  }
  function byteLength(a){validate(a);return headers(a);}
  function padDepth(depth,normal,w,h,radius=10){
    const n=w*h,dist=new Int16Array(n),queue=new Int32Array(n);dist.fill(-1);let head=0,tail=0;
    for(let i=0;i<n;i++)if(normal[i*4+3]>127){dist[i]=0;queue[tail++]=i;}
    function visit(i,j){if(dist[j]>=0)return;dist[j]=dist[i]+1;for(let k=0;k<4;k++)depth[j*4+k]=depth[i*4+k];queue[tail++]=j;}
    while(head<tail){const i=queue[head++];if(dist[i]>=radius)continue;const x=i%w,y=(i/w)|0;if(x)visit(i,i-1);if(x<w-1)visit(i,i+1);if(y)visit(i,i-w);if(y<h-1)visit(i,i+w);}
  }
  function reduceRadiance(source,geometry,dest,x,y,width,j,chosen){
    const rays=[];
    for(let dy=0;dy<2;dy++)for(let dx=0;dx<2;dx++)rays.push(((y*2+dy)*width+x*2+dx)*4);
    // Independent averaging of two occupied intervals loses the correlation
    // between foreground opacity and background radiance. Keep a complete
    // representative ray in that case; area filtering is for interval0 only.
    if(geometry[1][chosen+3]<=127||rays.some(i=>geometry[3][i+3]>127&&source[1][i+3]>0)){
      for(let m=0;m<2;m++)for(let k=0;k<4;k++)dest[m][j+k]=source[m][chosen+k];return;
    }
    const sum=[0,0,0,0];
    for(const i of rays)if(geometry[1][i+3]>127&&source[0][i+3]>0){
      for(let k=0;k<3;k++)sum[k]+=source[0][i+k]*source[0][i+k];sum[3]+=source[0][i+3];
    }
    const alpha=Math.round(sum[3]/4);dest[0][j+3]=alpha;
    // Decode square-root RGB BEFORE averaging premultiplied linear energy.
    // The shared radiance scale cancels, including through repeated LODs.
    if(alpha)for(let k=0;k<3;k++)dest[0][j+k]=Math.round(Math.sqrt(sum[k]/4));
  }
  function reduceRelighting(source,geometry,dest,x,y,width,j){
    const sum=[[0,0,0,0],[0,0,0,0]];
    for(let dy=0;dy<2;dy++)for(let dx=0;dx<2;dx++){
      const i=((y*2+dy)*width+x*2+dx)*4;
      if(geometry[1][i+3]<=127||source[1][i+3]===0)continue;
      for(let m=0;m<2;m++){for(let k=0;k<3;k++)sum[m][k]+=source[m][i+k]**2;sum[m][3]+=source[m][i+3];}
    }
    const opacity=Math.round(sum[1][3]/4);if(!opacity)return;
    for(let m=0;m<2;m++){for(let k=0;k<3;k++)dest[m][j+k]=Math.round(Math.sqrt(sum[m][k]/4));dest[m][j+3]=Math.round(sum[m][3]/4);}
  }
  function reduce(source){
    const w=source.w/2,h=source.h/2,data=[],lighting=source.lighting?[]:null,radiance=source.radiance?[]:null,relighting=source.relighting?[]:null;
    for(let v=0;v<source.data.length;v++){
      const src=source.data[v],dst=Array.from({length:4},()=>new Uint8Array(w*h*4)),light=lighting?Array.from({length:4},()=>new Uint8Array(w*h*4)):null,rad=radiance?Array.from({length:2},()=>new Uint8Array(w*h*4)):null,relit=relighting?Array.from({length:2},()=>new Uint8Array(w*h*4)):null;
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
        if(rad)reduceRadiance(source.radiance[v],src,rad,x,y,source.w,j,chosen);
        if(relit)reduceRelighting(source.relighting[v],src,relit,x,y,source.w,j);
      }
      padDepth(dst[0],dst[1],w,h);padDepth(dst[2],dst[3],w,h);data.push(dst);if(light)lighting.push(light);if(rad)radiance.push(rad);if(relit)relighting.push(relit);
    }
    return {w,h,data,...(lighting?{lighting}:{}),...(radiance?{radiance}:{}),...(relighting?{relighting}:{})};
  }
  function buildLods(a,options={}){
    validate(a);const minWidth=Math.max(16,options.minWidth||64),lods=[];let current=a;
    // Preflight the complete pyramid before allocating; replace any old LODs.
    const stride=a.relighting?32:a.radiance?24:a.lighting?32:16;let w=a.w,h=a.h,bytes=w*h*stride*a.views.length;
    while(w/2>=minWidth&&h/2>=16&&w%2===0&&h%2===0){w/=2;h/=2;bytes+=w*h*stride*a.views.length;}
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
