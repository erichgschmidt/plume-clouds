/* Property checks for rendering model 2, using the production GPU renderer. */
(function () {
  'use strict';
  var A=window.shadowAudit, failures=[],results=[];
  var single=[[.5,.375,.14,0]], pair=[[.42,.375,.13,0],[.59,.375,.13,0]];
  [single,pair].forEach(function(records,n){
    var a=A.capture(records,{modelVersion:2,softness:.3}),b=A.capture(records,{modelVersion:2,softness:4});
    var m=A.compare(a,b);results.push({test:'attachment does not move silhouette '+n,maskChanges:m.maskChanges});
    if(m.maskChanges)failures.push('Attachment blend changes silhouette coverage: '+m.maskChanges);
  });
  ['sphere','disc','drop','box','diamond'].forEach(function(prim){
    [0,1].forEach(function(shapeVar){
      var p={modelVersion:2,prim:prim,shapeVar:shapeVar,stretchVar:1,contourVar:1,angular:.4,shapeSeed:54,cap:.6,softness:1,smooth:1};
      var m=A.compare(A.capture(single,p),A.capture(single,Object.assign({},p,{contact:1,cavity:1})));
      results.push({test:'isolated shape has no self occlusion',prim:prim,variation:shapeVar,max:m.max});
      if(m.max>1)failures.push(prim+' variation '+shapeVar+' falsely self-shadows: '+m.max);
    });
  });
  ['contact','cavity'].forEach(function(key){
    var p={modelVersion:2},q={modelVersion:2};q[key]=1;
    var m=A.compare(A.capture(pair,p),A.capture(pair,q));
    results.push({test:'junction retains '+key,count:m.count});
    if(m.count<10)failures.push('Lost '+key+' at a real junction');
  });
  // A shallow parent/child intersection: the receiver is inside the caster's old
  // exclusion shell, yet the low sun is blocked. No unshadowed moat at the join.
  A.capture([[.5,.4,.2,0],[.5,.28,.1,.15]],{modelVersion:2,sun:90,elevation:6,softness:1,contact:1,cavity:0});
  var joinR=A.renderer,joinGL=joinR.gl,joinBuf=new Float32Array(21*4);
  joinGL.bindFramebuffer(joinGL.FRAMEBUFFER,joinR._fbo);joinGL.readBuffer(joinGL.COLOR_ATTACHMENT4);
  joinGL.readPixels(256,185,1,21,joinGL.RGBA,joinGL.FLOAT,joinBuf);
  joinGL.readBuffer(joinGL.COLOR_ATTACHMENT0);joinGL.bindFramebuffer(joinGL.FRAMEBUFFER,null);
  var joinJump=0;for(var j=1;j<21;j++)joinJump=Math.max(joinJump,Math.abs(joinBuf[j*4]-joinBuf[(j-1)*4]));
  results.push({test:'contact meets shallow junction without a bright moat',contactAtJoin:joinBuf[6*4],maxStep:joinJump});
  if(joinBuf[6*4]<.5)failures.push('Contact exclusion leaves a bright gap at the shallow junction');
  if(joinJump>.18)failures.push('Contact fades too abruptly at the shallow junction: '+joinJump);
  // Independently evaluate model 2 field channels in double precision. Cover every
  // primitive with/without a warp, including the body slope and proxy-shadow terms.
  ['sphere','disc','drop','box','diamond'].forEach(function(prim){
    [0,1].forEach(function(variation){
      var look={modelVersion:2,prim:prim,primAmt:.75,shapeVar:variation,shapeSeed:54,
        angular:variation*.4,shear:variation*.7,wind:25,cap:.35,softness:1.7,
        body:.8,bodySoft:.6,contact:1,cavity:1,cavityReach:12};
      A.capture(pair,look);
      var R=A.renderer,gl=R.gl,W=R._w,H=R._h,n=W*H*4,field=new Float32Array(n),grad=new Float32Array(n),aux=new Float32Array(n);
      gl.bindFramebuffer(gl.FRAMEBUFFER,R._fbo);
      [[gl.COLOR_ATTACHMENT0,field],[gl.COLOR_ATTACHMENT3,grad],[gl.COLOR_ATTACHMENT4,aux]].forEach(function(q){gl.readBuffer(q[0]);gl.readPixels(0,0,W,H,gl.RGBA,gl.FLOAT,q[1]);});
      gl.readBuffer(gl.COLOR_ATTACHMENT0);gl.bindFramebuffer(gl.FRAMEBUFFER,null);
      var sun=A.base.sun*Math.PI/180,el=A.base.elevation*Math.PI/180;
      var P={modelVersion:2,W:W,H:H,T:R._T,cap:look.cap,ref:.1,body:look.body,bodySoft:look.bodySoft,
        contact:1,cavity:1,cavityReach:look.cavityReach,light:[Math.cos(sun)*Math.cos(el),-Math.sin(sun)*Math.cos(el),Math.sin(el)]};
      var max={H:0,mask:0,Gx:0,Gy:0,Bx:0,By:0,contact:0,cavity:0},samples=0,bad=0;
      for(var y=2;y<H-2;y+=5)for(var x=2;x<W-2;x+=5){
        var i=(y*W+x)*4;if(field[i+3]<.05)continue;
        var q=fieldRef(R._sphData,R.count,P,x,y),got={H:field[i],mask:field[i+3],Gx:grad[i],Gy:grad[i+1],Bx:aux[i+2],By:aux[i+3],contact:aux[i],cavity:aux[i+1]};samples++;
        Object.keys(max).forEach(function(k){var d=Math.abs(q[k]-got[k]);max[k]=Math.max(max[k],d);
          var tol=(k==='H'||k==='mask')?.005:(k==='contact'||k==='cavity')?.02:.04+.002*Math.abs(q[k]);
          if(!Number.isFinite(d)||d>tol)bad++;
        });
      }
      results.push({test:'model 2 CPU vs GPU',prim:prim,variation:variation,samples:samples,max:max,bad:bad});
      if(!samples||bad)failures.push('CPU/GPU model 2 '+prim+' variation '+variation+': '+bad+' channel mismatches, '+samples+' samples');
    });
  });
  window.modernResults={ok:!failures.length,failures:failures,results:results};
})();
