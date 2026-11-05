/* Versioned, byte-exact baked maps. This module never executes imported recipes. */
(function(root){
  'use strict';
  const FORMAT='plume.foundry.asset', VERSION=1, MAX_BYTES=64*1024*1024;
  function number(n,min,max,name){if(typeof n!=='number'||!Number.isFinite(n)||n<min||n>max)throw Error('Invalid '+name);return n;}
  function dimension(n,name){number(n,16,1024,name);if(!Number.isInteger(n))throw Error('Invalid '+name);return n;}
  function validate(a){
    if(!a||typeof a!=='object')throw Error('Missing cloud asset');
    const w=dimension(a.w,'map width'),h=dimension(a.h,'map height');
    number(a.halfHeight,.001,100,'halfHeight');number(a.range,.001,1000,'depth range');
    if(!Array.isArray(a.views)||a.views.length<1||a.views.length>64)throw Error('Invalid capture views');
    a.views.forEach(v=>{if(!v)throw Error('Invalid capture angle');number(v.yaw,-180,180,'yaw angle');number(v.pitch,-90,90,'pitch angle');});
    if(w*h*16*a.views.length>MAX_BYTES)throw Error('Cloud maps exceed 64 MiB memory budget');
    if(!Array.isArray(a.data)||a.data.length!==a.views.length)throw Error('Map view count mismatch');
    a.data.forEach(v=>{if(!Array.isArray(v)||v.length!==4)throw Error('Each view needs four maps');v.forEach(m=>{if(!(m instanceof Uint8Array)||m.length!==w*h*4)throw Error('Invalid map bytes');});});
    return a;
  }
  function encode(bytes){
    if(typeof Buffer!=='undefined')return Buffer.from(bytes).toString('base64');
    let s='';for(let i=0;i<bytes.length;i+=8192)s+=String.fromCharCode(...bytes.subarray(i,i+8192));return btoa(s);
  }
  function decode(s,size){
    if(typeof s!=='string'||s.length!==4*Math.ceil(size/3)||!(/^[A-Za-z0-9+/]*={0,2}$/).test(s))throw Error('Invalid map base64');
    const bytes=typeof Buffer!=='undefined'?new Uint8Array(Buffer.from(s,'base64')):Uint8Array.from(atob(s),c=>c.charCodeAt(0));
    if(bytes.length!==size)throw Error('Invalid decoded map length');return bytes;
  }
  function metadata(a){return {format:FORMAT,version:VERSION,name:String(a.name||'Authored cloud').slice(0,120),w:a.w,h:a.h,halfHeight:a.halfHeight,range:a.range,
    views:a.views.map(v=>({yaw:v.yaw,pitch:v.pitch})),grid:a.grid||a.views.length,yawArc:a.yawArc||35,pitchArc:a.pitchArc||85,
    recipe:a.recipe||null,coordinateSystem:'X right, Y up, Z toward front capture',normalSpace:'object',rowOrder:'bottom-up',mapOrder:['depth0','normal0','depth1','normal1']};}
  function stringify(a){validate(a);return JSON.stringify({...metadata(a),data:a.data.map(v=>v.map(encode))});}
  function parse(value){
    if(typeof value==='string'&&value.length>MAX_BYTES*1.4+1024*1024)throw Error('Cloud asset file exceeds size limit');
    const a=typeof value==='string'?JSON.parse(value):value;
    if(!a||a.format!==FORMAT||a.version!==VERSION)throw Error('Unsupported cloud asset format/version');
    const w=dimension(a.w,'map width'),h=dimension(a.h,'map height');
    if(!Array.isArray(a.views)||!a.views.length||a.views.length>64||w*h*16*a.views.length>MAX_BYTES)throw Error('Invalid map view count or memory budget');
    if(!Array.isArray(a.data)||a.data.length!==a.views.length)throw Error('Map view count mismatch');
    const data=a.data.map(v=>{if(!Array.isArray(v)||v.length!==4)throw Error('Each view needs four maps');return v.map(m=>decode(m,w*h*4));});
    return validate({...metadata(a),data});
  }
  function byteLength(a){validate(a);return a.w*a.h*16*a.views.length;}
  function database(){return new Promise((resolve,reject)=>{
    if(!root.indexedDB){reject(Error('Local asset storage is unavailable; export/import a sky asset instead.'));return;}
    const q=root.indexedDB.open('plume-foundry',1);
    q.onupgradeneeded=()=>q.result.createObjectStore('assets');q.onerror=()=>reject(q.error);q.onsuccess=()=>resolve(q.result);
  });}
  async function save(asset,key='active'){
    validate(asset);const db=await database();
    try{await new Promise((resolve,reject)=>{const tx=db.transaction('assets','readwrite');tx.objectStore('assets').put({...metadata(asset),data:asset.data},key);tx.oncomplete=resolve;tx.onerror=()=>reject(tx.error);tx.onabort=()=>reject(tx.error||Error('Asset save aborted'));});}finally{db.close();}
  }
  async function load(key='active'){
    const db=await database();try{return await new Promise((resolve,reject)=>{const tx=db.transaction('assets','readonly'),q=tx.objectStore('assets').get(key);q.onsuccess=()=>{try{resolve(q.result?validate(q.result):null);}catch(e){reject(e);}};q.onerror=()=>reject(q.error);});}finally{db.close();}
  }
  const api={FORMAT,VERSION,MAX_BYTES,validate,parse,stringify,save,load,byteLength};
  root.FoundryAssets=api;if(typeof module!=='undefined')module.exports=api;
})(typeof globalThis!=='undefined'?globalThis:window);
