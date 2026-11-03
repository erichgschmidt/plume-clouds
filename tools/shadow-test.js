/* Production GPU shade-pass checks; no copied shadow implementation. */
(function () {
  'use strict';
  var canvas = document.getElementById('canvas'), renderer = new PuffRenderer(canvas);
  var W = canvas.width, H = canvas.height, REF = 0.1;
  function sim(records) {
    var n = records.length, B = new Float32Array(n * 4), A = new Float32Array(n * 4), S = new Float32Array(n * 4), P = new Float32Array(n), F = new Float32Array(n);
    records.forEach(function (r, i) {
      B.set([r[0], r[1], r[2], i + 1], i * 4); A.set([0, 0.5 + r[3] / (2 * REF), 0, 1], i * 4);
      S.set([0, 0, 1, 0], i * 4); P[i] = r[4] === undefined ? -1 : r[4]; F[i] = 1;
    });
    return { blobs:B, aux:A, spin:S, parent:P, detail:F, blobCount:n, baseStart:n, refRadius:REF, baseY:0.75, topY:0, cx:0.5, time:0 };
  }
  var base = {children:0,levels:1,prim:'sphere',primAmt:1,zoom:1,depth:1,softness:0.3,cap:0,
    pixel:1,pixelated:true,diag:7,sun:60,elevation:40,fill:0.2,highlight:0.68,shadow:0,
    noise:0,noise2:0,smooth:0,rim:0,puffRim:0,contact:0,cavity:0,cavityReach:24,cavityLit:1,
    haze:0,baseShade:0,stackShade:0,depthFall:0,atmos:0,grain:0,dither:0,dissolve:0,
    breakup:0,stipple:0,cirrus:0,veil:0,shapeVar:0,angular:0,windSpeed:0,erosion:0,wispAmount:0};
  function capture(records, overrides, analytic) {
    var gl=renderer.gl, draw=gl.drawArrays, calls=0;
    if(analytic)gl.drawArrays=function(){
      draw.apply(gl,arguments);
      if(++calls!==1)return;
      var f=new Float32Array(W*H*4),g=new Float32Array(W*H*4);
      for(var y=0;y<H;y++)for(var x=0;x<W;x++){
        var i=(y*W+x)*4,q=analytic((x+.5)/W,(H-y-.5)/W);
        f[i]=q[0];f[i+3]=2;g[i]=q[1];g[i+1]=q[2];g[i+2]=.1;g[i+3]=-1;
      }
      var bound=gl.getParameter(gl.TEXTURE_BINDING_2D);
      gl.bindTexture(gl.TEXTURE_2D,renderer._fieldTex);gl.texSubImage2D(gl.TEXTURE_2D,0,0,0,W,H,gl.RGBA,gl.FLOAT,f);
      gl.bindTexture(gl.TEXTURE_2D,renderer._aux3Tex);gl.texSubImage2D(gl.TEXTURE_2D,0,0,0,W,H,gl.RGBA,gl.FLOAT,g);
      gl.bindTexture(gl.TEXTURE_2D,bound);
    };
    try{renderer.render(sim(records), Object.assign({}, base, overrides), 0);}finally{gl.drawArrays=draw;}
    var pixels=new Uint8Array(W*H*4), field=new Float32Array(W*H*4);
    var fw=renderer._w,fh=renderer._h,raw=new Float32Array(fw*fh*4);
    gl.readPixels(0,0,W,H,gl.RGBA,gl.UNSIGNED_BYTE,pixels);
    gl.bindFramebuffer(gl.FRAMEBUFFER,renderer._fbo);gl.readBuffer(gl.COLOR_ATTACHMENT0);
    gl.readPixels(0,0,fw,fh,gl.RGBA,gl.FLOAT,raw);gl.bindFramebuffer(gl.FRAMEBUFFER,null);
    for(var y=0;y<H;y++)for(var x=0;x<W;x++){
      var src=(Math.floor((y+.5)*fh/H)*fw+Math.floor((x+.5)*fw/W))*4;
      field.set(raw.subarray(src,src+4),(y*W+x)*4);
    }
    if(gl.getError()!==gl.NO_ERROR)throw new Error('GPU readback failed');
    return {pixels:pixels,field:field};
  }
  function compare(a,b) {
    var max=0,count=0,sum=0,edgeMax=0,edgeCount=0,maskChanges=0;
    for(var y=1;y<H-1;y++)for(var x=1;x<W-1;x++){
      var i=(y*W+x)*4,inside=a.field[i+3]>=0.5;
      if(!Number.isFinite(b.field[i]))throw new Error('Non-finite field');
      if(inside!==(b.field[i+3]>=0.5))maskChanges++;
      if(!inside)continue;
      var d=a.pixels[i]-b.pixels[i];max=Math.max(max,d);sum+=Math.max(0,d);if(d>1)count++;
      var edge=[-4,4,-W*4,W*4].some(function(o){return a.field[i+o+3]<0.5;});
      if(edge){edgeMax=Math.max(edgeMax,d);if(d>1)edgeCount++;}
    }
    return {max:max,count:count,sum:sum,edgeMax:edgeMax,edgeCount:edgeCount,maskChanges:maskChanges};
  }
  function preview(name,records) {
    var host=document.getElementById('previews'),title=document.createElement('h2'),row=document.createElement('div');
    title.textContent=name;host.appendChild(title);row.className='row';host.appendChild(row);
    var a=capture(records,{}),b=capture(records,{contact:1,cavity:1});
    ['Both off','Contact + Cavity at 1','Difference ×3'].forEach(function(label,k){
      var fig=document.createElement('figure'),c=document.createElement('canvas'),cap=document.createElement('figcaption');
      c.width=W;c.height=H;cap.textContent=label;fig.appendChild(c);fig.appendChild(cap);row.appendChild(fig);
      var ctx=c.getContext('2d'),im=ctx.createImageData(W,H);
      for(var y=0;y<H;y++)for(var x=0;x<W;x++){
        var dst=(y*W+x)*4,src=((H-y-1)*W+x)*4;
        for(var ch=0;ch<3;ch++)im.data[dst+ch]=k===2?Math.max(0,a.pixels[src+ch]-b.pixels[src+ch])*3:(k===0?a:b).pixels[src+ch];
        im.data[dst+3]=255;
      }
      ctx.putImageData(im,0,0);
    });
  }
  function run() {
    var cases={single:[[.5,.375,.14,0]],overlap:[[.43,.375,.14,0],[.59,.375,.1,.10]],valley:[[.41,.375,.13,0],[.59,.375,.13,0]]};
    var results=[],failures=[];
    Object.keys(cases).forEach(function(name){
      [0.3,4].forEach(function(softness){
        var opts={softness:softness},a=capture(cases[name],opts);
        ['contact','cavity'].forEach(function(effect){
          var ov=Object.assign({},opts);ov[effect]=1;var m=compare(a,capture(cases[name],ov));
          results.push(Object.assign({fixture:name,softness:softness,effect:effect},m));
          if(m.maskChanges)failures.push(name+': shadow changed coverage');
          if(name==='single'&&m.max>1)failures.push('Single convex puff darkened by '+effect+' (softness '+softness+'): '+m.max);
          if(name==='overlap'&&effect==='contact'&&m.count<10)failures.push('Lost contact shadow');
          if(name==='valley'&&effect==='cavity'&&m.count<10)failures.push('Lost cavity shading');
        });
      });
    });
    // Combined controls, oblique/below-horizon lights, clipped puffs, and two field resolutions.
    [1,2].forEach(function(pixel){
      [0,1].forEach(function(cap){
        [-40,10,40,85].forEach(function(elevation){
          [0,68,180,270].forEach(function(sun){
            var opts={pixel:pixel,cap:cap,elevation:elevation,sun:sun,rim:1,puffRim:1,smooth:1};
            var records=[[sun===180?.03:.5,.375,.14,0]];
            var m=compare(capture(records,opts),capture(records,Object.assign({},opts,{contact:1,cavity:1})));
            results.push(Object.assign({fixture:'convex matrix',pixel:pixel,cap:cap,elevation:elevation,sun:sun},m));
            if(m.max>1||m.maskChanges)failures.push('Convex matrix '+JSON.stringify(opts)+': '+m.max);
          });
        });
      });
    });
    // The stored contact and cavity terms (COLOR_ATTACHMENT4) against the CPU reference in lab-ref.js, texel by texel.
    [['overlap','contact',0],['valley','cavity',1]].forEach(function(tc){ var name=tc[0],effect=tc[1],ch=tc[2],ov={};ov[effect]=1;
      var c=capture(cases[name],ov),R=renderer,gl=R.gl,fw=R._w,fh=R._h,buf=new Float32Array(fw*fh*4);
      gl.bindFramebuffer(gl.FRAMEBUFFER,R._fbo);gl.readBuffer(gl.COLOR_ATTACHMENT4);gl.readPixels(0,0,fw,fh,gl.RGBA,gl.FLOAT,buf);
      gl.readBuffer(gl.COLOR_ATTACHMENT0);gl.bindFramebuffer(gl.FRAMEBUFFER,null);
      var sunA=base.sun*Math.PI/180,el=base.elevation*Math.PI/180;
      var P={W:fw,H:fh,T:R._T,cap:0,ref:REF,contact:effect==='contact'?1:0,cavity:effect==='cavity'?1:0,cavityReach:base.cavityReach,light:[Math.cos(sunA)*Math.cos(el),-Math.sin(sunA)*Math.cos(el),Math.sin(el)]};
      var maxd=0,shaded=0,texels=0;
      for(var y=0;y<fh;y++)for(var x=0;x<fw;x++){
        var i=(y*fw+x)*4;if(c.field[i+3]<0.5)continue;
        var ref=fieldRef(R._sphData,R.count,P,x,y)[effect];texels++;if(ref>0.05)shaded++;
        maxd=Math.max(maxd,Math.abs(ref-buf[i+ch]));
      }
      results.push({fixture:effect+' vs CPU reference',max:maxd,count:shaded,texels:texels});
      if(maxd>0.02)failures.push('Stored '+effect+' differs from the CPU reference by '+maxd.toFixed(3));
      if(shaded<10)failures.push('The CPU reference finds no '+effect+' on the '+name);
    });
    window.shadowResults={ok:!failures.length,failures:failures,results:results};
    document.getElementById('status').textContent=(failures.length?'FAIL':'PASS')+' — '+results.length+' comparisons. '+failures.join('; ');
    document.getElementById('results').textContent=JSON.stringify(window.shadowResults,null,2);
    document.getElementById('previews').textContent='';
    Object.keys(cases).forEach(function(name){preview(name,cases[name]);});
    return window.shadowResults;
  }
  window.shadowAudit={run:run,capture:capture,compare:compare,renderer:renderer,base:base};
  run();
})();
