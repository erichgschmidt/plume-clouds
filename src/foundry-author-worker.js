/* Authoring-only solver source; baked runtime never includes this worker. */
const ATMOSPHERE_WORKER_SOURCE=`/* Cloud Foundry 2 — warm-cloud authoring laboratory.
 * Original implementation. SI thermodynamic fields; compact, coarse Boussinesq
 * flow model. This is an art-authoring simulator, not a weather forecast model.
 * The signed render field is derived from condensate, NOT called a physical SDF.
 */
'use strict';
const CP=1004, LV=2.5e6, RD=287.05, GRAV=9.81;
const limit=(v,a,b)=>Math.max(a,Math.min(b,v));
function qsat(T,p){
  const C=limit(T-273.15,-45,50);
  const e=610.94*Math.exp(17.625*C/(C+243.04));
  return .622*e/Math.max(p-e,1000);
}
function phaseAdjust(theta,qv,qc,exner,p){
  const T0=theta*exner, total=Math.max(0,qv+qc);
  let delta=0;
  // Implicit saturation adjustment with latent heating/cooling. The latent
  // enthalpy and total water are invariant in this LOCAL phase-change step.
  for(let k=0;k<7;k++){
    const T=T0+(LV/CP)*delta, sat=qsat(T,p);
    const deriv=(qsat(T+.05,p)-qsat(T-.05,p))/.1;
    delta=limit(delta+(qv-delta-sat)/(1+(LV/CP)*deriv),-qc,qv);
  }
  const v=limit(qv-delta,0,total),c=total-v;
  return [theta+(LV/CP)*(qv-v)/exner,v,c];
}
function hash(x,y,z,seed){let h=Math.imul(x,374761393)^Math.imul(y,668265263)^Math.imul(z,2147483647)^(seed|0);h=Math.imul(h^(h>>>13),1274126177);return ((h^(h>>>16))>>>0)/4294967295;}
function noise(x,y,z,seed){
  const ix=Math.floor(x),iy=Math.floor(y),iz=Math.floor(z);let u=x-ix,v=y-iy,w=z-iz;
  u=u*u*u*(u*(u*6-15)+10);v=v*v*v*(v*(v*6-15)+10);w=w*w*w*(w*(w*6-15)+10);
  const mix=(a,b,t)=>a+(b-a)*t;
  return mix(mix(mix(hash(ix,iy,iz,seed),hash(ix+1,iy,iz,seed),u),mix(hash(ix,iy+1,iz,seed),hash(ix+1,iy+1,iz,seed),u),v),mix(mix(hash(ix,iy,iz+1,seed),hash(ix+1,iy,iz+1,seed),u),mix(hash(ix,iy+1,iz+1,seed),hash(ix+1,iy+1,iz+1,seed),u),v),w);
}
function smoothMin(a,b,k){const h=Math.max(k-Math.abs(a-b),0)/Math.max(k,1e-5);return Math.min(a,b)-h*h*k*.25;}
function scaffoldAt(x,y,z,primitives,cuts,join){
  let d=20;
  for(const p of primitives){const a=p.angle||0,ca=Math.cos(a),sa=Math.sin(a),dx=x-p.c[0],dy=y-p.c[1],X=ca*dx+sa*dy,Y=-sa*dx+ca*dy,Z=z-p.c[2];const rx=p.s[0],ry=p.s[1],rz=p.s[2];const k0=Math.hypot(X/rx,Y/ry,Z/rz),k1=Math.hypot(X/(rx*rx),Y/(ry*ry),Z/(rz*rz));const di=k1>1e-6?k0*(k0-1)/k1:-Math.min(rx,ry,rz);d=smoothMin(d,di,join);}
  for(const c of cuts)d=-smoothMin(-d,Math.hypot(x-c.c[0],y-c.c[1],z-c.c[2])-c.r,Math.max(.04,join*.4));
  return d;
}
class MoistAtmosphere{
 constructor(settings,primitives,cuts){
  this.s={...settings};this.ps=primitives;this.cuts=cuts;
  this.nx=settings.simResolution===64?64:48;this.ny=Math.round(this.nx*5/6);this.nz=Math.round(this.nx*2/3);
  this.nxy=this.nx*this.ny;this.n=this.nxy*this.nz;
  this.lo=[-4.23,-2.90,-2.79];this.hi=[4.23,4.12,2.79];
  this.spacing=[8.46/(this.nx-1),7.02/(this.ny-1),5.58/(this.nz-1)];
  this.meters=300;this.dx=this.spacing[0]*this.meters;
  for(const k of ['u','v','w','theta','qv','qc','u0','v0','w0','t0','q0','c0','p','p0','div','mask','scaffold'])this[k]=new Float32Array(this.n);
  this.envT=new Float32Array(this.ny);this.envQ=new Float32Array(this.ny);this.pressure=new Float32Array(this.ny);this.exner=new Float32Array(this.ny);
  this.elapsed=0;this.steps=0;this.projectionBefore=0;this.projectionAfter=0;this.phaseWaterError=0;this.phaseHeatError=0;
  this.initialize();
 }
 initialize(){
  const s=this.s;let pt=295+s.heat,pv=qsat(295,100000)*s.humidity/100,pc=0;
  const parT=[],parV=[],parC=[];
  for(let y=0;y<this.ny;y++){
    const height=y*this.spacing[1]*this.meters,p=100000*Math.exp(-height/8400),ex=Math.pow(p/100000,RD/CP);
    const capHeight=s.inversionHeight*1000;
    const T=295-s.lapse*height/1000+s.inversion*Math.max(0,height-capHeight)/1000;
    this.pressure[y]=p;this.exner[y]=ex;this.envT[y]=T/ex;this.envQ[y]=qsat(T,p)*s.ambientHumidity/100;
    [pt,pv,pc]=phaseAdjust(pt,pv,pc,ex,p);parT.push(pt);parV.push(pv);parC.push(pc);
  }
  for(let z=0;z<this.nz;z++)for(let y=0;y<this.ny;y++)for(let x=0;x<this.nx;x++){
    const i=x+y*this.nx+z*this.nxy,X=this.lo[0]+x*this.spacing[0],Y=this.lo[1]+y*this.spacing[1],Z=this.lo[2]+z*this.spacing[2];
    const d=scaffoldAt(X,Y,Z,this.ps,this.cuts,s.join);this.scaffold[i]=d;
    let m=limit(.5-d/.65,0,1);m=m*m*(3-2*m);
    // Variations perturb the moisture reservoir, not the final visible density.
    m*=limit(.90+.23*(noise(X*1.05+8,Y*.65+2,Z*1.05-3,s.seed)-.5),0,1);
    this.mask[i]=m;
    let theta=this.envT[y]+(parT[y]-this.envT[y])*m,qv=this.envQ[y]+(parV[y]-this.envQ[y])*m,qc=parC[y]*m;
    if(['stratus','front','orographic'].includes(s.preset)){
      const localT=this.envT[y]*this.exner[y];
      const cool=(s.preset==='stratus'?2.6:s.preset==='front'?3.2:3.6)*m;
      theta=this.envT[y]-cool/this.exner[y]+s.heat*.12*m;
      qv=this.envQ[y]+(qsat(localT,this.pressure[y])*s.humidity/100-this.envQ[y])*m;qc=0;
    }
    [theta,qv,qc]=phaseAdjust(theta,qv,qc,this.exner[y],this.pressure[y]);
    this.theta[i]=theta;this.qv[i]=qv;this.qc[i]=qc;
    const h=y*this.spacing[1]*this.meters/1000;
    this.u[i]=s.wind+s.shear*h;
    this.v[i]=m*(s.preset==='stratus'?.15:s.uplift+Math.sqrt(Math.max(s.heat,0))*.8);
    this.w[i]=m*(noise(X*.7,Y*.8,Z*.7,s.seed+301)-.5)*1.5;
    if(this.edge(x,y,z))this.boundary(i,y);
  }
 }
 edge(x,y,z){return x<1||y<1||z<1||x>=this.nx-1||y>=this.ny-1||z>=this.nz-1;}
 boundary(i,y){this.theta[i]=this.envT[y];this.qv[i]=this.envQ[y];this.qc[i]=0;this.u[i]=this.s.wind+this.s.shear*y*this.spacing[1]*this.meters/1000;this.v[i]=this.w[i]=0;}
 sample(a,x,y,z){
  x=limit(x,0,this.nx-1.001);y=limit(y,0,this.ny-1.001);z=limit(z,0,this.nz-1.001);
  const ix=x|0,iy=y|0,iz=z|0,tx=x-ix,ty=y-iy,tz=z-iz,j=ix+iy*this.nx+iz*this.nxy,n=this.nx,k=this.nxy;
  const a0=a[j]*(1-tx)+a[j+1]*tx,a1=a[j+n]*(1-tx)+a[j+n+1]*tx,a2=a[j+k]*(1-tx)+a[j+k+1]*tx,a3=a[j+k+n]*(1-tx)+a[j+k+n+1]*tx;
  return (a0*(1-ty)+a1*ty)*(1-tz)+(a2*(1-ty)+a3*ty)*tz;
 }
 advect(src,dst,dt){
  const nx=this.nx,ny=this.ny,nz=this.nz,nxy=this.nxy,fac=dt/this.dx;
  dst.set(src);
  for(let z=1;z<nz-1;z++)for(let y=1;y<ny-1;y++)for(let x=1;x<nx-1;x++){
    const i=x+y*nx+z*nxy;
    // Velocities use positive-face flux slots; the scalar backtrace uses the
    // average of the two bounding faces. Velocity advection uses this same
    // center backtrace: a deliberate low-cost approximation, not a full MAC solver.
    const U=.5*(this.u[i]+this.u[i-1]),V=.5*(this.v[i]+this.v[i-nx]),W=.5*(this.w[i]+this.w[i-nxy]);
    dst[i]=this.sample(src,x-U*fac,y-V*fac,z-W*fac);
  }
 }
 project(dt){
  const nx=this.nx,ny=this.ny,nz=this.nz,nxy=this.nxy,dx=this.dx;
  this.p.fill(0);this.p0.fill(0);let before=0,count=0;
  for(let z=1;z<nz-1;z++)for(let y=1;y<ny-1;y++)for(let x=1;x<nx-1;x++){
    const i=x+y*nx+z*nxy,d=(this.u[i]-this.u[i-1]+this.v[i]-this.v[i-nx]+this.w[i]-this.w[i-nxy])/dx;
    this.div[i]=d*dx*dx/dt;if(x>2&&x<nx-3&&y>2&&y<ny-3&&z>2&&z<nz-3){before+=d*d;count++;}
  }
  for(let it=0;it<24;it++){
    const p=this.p,q=this.p0;
    for(let z=1;z<nz-1;z++)for(let y=1;y<ny-1;y++)for(let x=1;x<nx-1;x++){const i=x+y*nx+z*nxy;q[i]=(p[i-1]+p[i+1]+p[i-nx]+p[i+nx]+p[i-nxy]+p[i+nxy]-this.div[i])/6;}
    this.p=q;this.p0=p;
  }
  for(let z=1;z<nz-1;z++)for(let y=1;y<ny-1;y++)for(let x=1;x<nx-1;x++){const i=x+y*nx+z*nxy;this.u[i]-=dt/dx*(this.p[i+1]-this.p[i]);this.v[i]-=dt/dx*(this.p[i+nx]-this.p[i]);this.w[i]-=dt/dx*(this.p[i+nxy]-this.p[i]);}
  let after=0;
  for(let z=3;z<nz-3;z++)for(let y=3;y<ny-3;y++)for(let x=3;x<nx-3;x++){const i=x+y*nx+z*nxy,d=(this.u[i]-this.u[i-1]+this.v[i]-this.v[i-nx]+this.w[i]-this.w[i-nxy])/dx;after+=d*d;}
  this.projectionBefore=Math.sqrt(before/Math.max(count,1));this.projectionAfter=Math.sqrt(after/Math.max(count,1));
 }
 step(dt=2){
  dt=limit(dt,.1,2);const s=this.s,nx=this.nx,ny=this.ny,nz=this.nz,nxy=this.nxy;
  this.advect(this.u,this.u0,dt);this.advect(this.v,this.v0,dt);this.advect(this.w,this.w0,dt);
  [this.u,this.u0]=[this.u0,this.u];[this.v,this.v0]=[this.v0,this.v];[this.w,this.w0]=[this.w0,this.w];
  for(let z=1;z<nz-1;z++)for(let y=1;y<ny-1;y++)for(let x=1;x<nx-1;x++){
    const i=x+y*nx+z*nxy,Y=y*this.spacing[1]*this.meters,X=this.lo[0]+x*this.spacing[0],m=this.mask[i];
    const buoy=GRAV*((this.theta[i]-this.envT[y])/this.envT[y]+.61*(this.qv[i]-this.envQ[y])-this.qc[i]);
    const edge=Math.min(x,nx-1-x,y,ny-1-y,z,nz-1-z),sponge=limit((4-edge)/4,0,1)*.12;
    const targetWind=s.wind+s.shear*Y/1000;
    this.u[i]+=dt*(.025*(targetWind-this.u[i])-sponge*(this.u[i]-targetWind));
    let forced=s.uplift*m*.055;
    if(s.preset==='orographic')forced+=s.wind*.065*(-X)*Math.exp(-X*X*.65)*Math.exp(-Y/1800);
    if(s.preset==='front')forced+=.04*s.uplift*Math.exp(-Math.pow((X+1.2)-Y/700,2));
    this.v[i]=limit(this.v[i]+dt*(buoy+forced-.018*this.v[i]-sponge*this.v[i]),-25,25);
    this.w[i]*=Math.exp(-dt*(.016+sponge));this.u[i]=limit(this.u[i],-25,25);
  }
  this.project(dt);
  this.advect(this.theta,this.t0,dt);this.advect(this.qv,this.q0,dt);this.advect(this.qc,this.c0,dt);
  [this.theta,this.t0]=[this.t0,this.theta];[this.qv,this.q0]=[this.q0,this.qv];[this.qc,this.c0]=[this.c0,this.qc];
  let werr=0,herr=0;
  for(let z=1;z<nz-1;z++)for(let y=1;y<ny-1;y++)for(let x=1;x<nx-1;x++){
    const i=x+y*nx+z*nxy,m=this.mask[i],height=y*this.spacing[1]*this.meters;
    const mix=1-Math.exp(-dt*s.entrainment*.0015);
    this.theta[i]+=(this.envT[y]-this.theta[i])*mix;this.qv[i]+=(this.envQ[y]-this.qv[i])*mix;this.qc[i]*=1-mix;
    const source=m*Math.exp(-height/420)*dt*.004;
    this.theta[i]+=source*s.heat;
    this.qv[i]+=source*Math.max(0,qsat(295,100000)*s.humidity/100-this.qv[i]);
    // Prescribed top cooling is a forcing term, not a radiative-transfer solver.
    this.theta[i]-=dt*s.cooling*.001*m*limit((height-700)/700,0,1)/this.exner[y];
    const t=this.theta[i],v=Math.max(0,this.qv[i]),c=Math.max(0,this.qc[i]),ex=this.exner[y];
    const a=phaseAdjust(t,v,c,ex,this.pressure[y]);
    werr=Math.max(werr,Math.abs(a[1]+a[2]-v-c));herr=Math.max(herr,Math.abs(CP*a[0]*ex+LV*a[1]-CP*t*ex-LV*v));
    this.theta[i]=a[0];this.qv[i]=a[1];this.qc[i]=a[2];
  }
  for(let z=0;z<nz;z++)for(let y=0;y<ny;y++)for(let x=0;x<nx;x++)if(this.edge(x,y,z))this.boundary(x+y*nx+z*nxy,y);
  this.elapsed+=dt;this.steps++;this.phaseWaterError=werr;this.phaseHeatError=herr;
 }
 distanceField(){
  const n=this.n,nx=this.nx,ny=this.ny,nz=this.nz,nxy=this.nxy,h=this.spacing[0],iso=this.s.iso/1000;
  const dist=new Float32Array(n),inside=new Uint8Array(n);let count=0;
  for(let i=0;i<n;i++){inside[i]=this.qc[i]>iso?1:0;count+=inside[i];dist[i]=30;}
  // Subvoxel interface initialization; then two chamfer sweep pairs. Distances
  // are Euclidean-ish conservative render guides, not exact redistanced SDFs.
  for(let z=1;z<nz-1;z++)for(let y=1;y<ny-1;y++)for(let x=1;x<nx-1;x++){
    const i=x+y*nx+z*nxy,ci=this.qc[i],a=inside[i];
    for(const o of [-1,1,-nx,nx,-nxy,nxy])if(inside[i+o]!==a){const f=Math.abs(ci-iso)/Math.max(Math.abs(ci-this.qc[i+o]),1e-12);dist[i]=Math.min(dist[i],Math.max(.015,f)*h);}
  }
  const fw=[[-1,0,0],[0,-1,0],[0,0,-1],[-1,-1,0],[1,-1,0],[-1,0,-1],[1,0,-1],[0,-1,-1],[0,1,-1],[-1,-1,-1],[1,-1,-1],[-1,1,-1],[1,1,-1]];
  for(let pass=0;pass<2;pass++)for(const dir of [1,-1]){
    const x0=dir===1?1:nx-2,y0=dir===1?1:ny-2,z0=dir===1?1:nz-2;
    for(let z=z0;z>0&&z<nz-1;z+=dir)for(let y=y0;y>0&&y<ny-1;y+=dir)for(let x=x0;x>0&&x<nx-1;x+=dir){const i=x+y*nx+z*nxy;let d=dist[i];for(const [ox,oy,oz]of fw){const j=i+dir*(ox+oy*nx+oz*nxy);d=Math.min(d,dist[j]+h*Math.hypot(ox,oy,oz));}dist[i]=d;}
  }
  const out=new Float32Array(n*4);let mass=0,maxLiquid=0,cloud=0;
  for(let z=0;z<nz;z++)for(let y=0;y<ny;y++)for(let x=0;x<nx;x++){
    const i=x+y*nx+z*nxy;let d=inside[i]?-dist[i]:dist[i];
    if(this.edge(x,y,z))d=Math.max(.16,d);
    out[i*4]=limit(d,-8,8);out[i*4+1]=this.qc[i]*1000;out[i*4+2]=this.qv[i]/qsat(this.theta[i]*this.exner[y],this.pressure[y]);out[i*4+3]=this.theta[i]-this.envT[y];
    mass+=this.qc[i];maxLiquid=Math.max(maxLiquid,this.qc[i]);if(this.qc[i]>iso)cloud++;
  }
  return {data:out,stats:{elapsed:this.elapsed,steps:this.steps,condensedCells:cloud,cloudFraction:cloud/n,maxLiquidGkg:maxLiquid*1000,liquidKg:mass*this.dx**3*1.1,phaseWaterError:this.phaseWaterError,phaseEnthalpyError:this.phaseHeatError,divergenceBefore:this.projectionBefore,divergenceAfter:this.projectionAfter,grid:[nx,ny,nz],cellMeters:this.dx,isoGkg:this.s.iso}};
 }
 visualField(raw){
  const nx=this.nx,ny=this.ny,nz=this.nz,nxy=nx*ny;
  let base=new Float32Array(this.n);for(let i=0;i<this.n;i++)base[i]=raw[i*4];
  // Separable reconstruction filter removes chamfer / trilinear facets. It
  // changes only the renderer field; no thermodynamic quantities are filtered.
  for(let pass=0;pass<2;pass++)for(const axis of [1,nx,nxy]){
    const out=base.slice();
    for(let z=1;z<nz-1;z++)for(let y=1;y<ny-1;y++)for(let x=1;x<nx-1;x++){const i=x+y*nx+z*nxy;out[i]=(base[i-axis]+2*base[i]+base[i+axis])*.25;}
    base=out;
  }
  const VX=nx*2-1,VY=ny*2-1,VZ=nz*2-1,VXY=VX*VY,vs=this.spacing.map(v=>v*.5),lo=this.lo;
  const data=new Float32Array(VX*VY*VZ);
  for(let z=0;z<VZ;z++)for(let y=0;y<VY;y++)for(let x=0;x<VX;x++)data[x+y*VX+z*VXY]=this.sample(base,x*.5,y*.5,z*.5);
  const sample=(p)=>this.sample(base,(p[0]-lo[0])/this.spacing[0],(p[1]-lo[1])/this.spacing[1],(p[2]-lo[2])/this.spacing[2]);
  let billows=0;const amount=this.s.billow;
  if(amount>.001){
    const scale=1.8/this.s.billowScale;
    // Surface-attached, two-scale ellipsoid synthesis. These are artistic
    // subgrid volumes, seeded only on existing condensate, NOT fluid particles.
    for(let level=0;level<2;level++){
      const cell=(level===0?.85:.43)*scale,seed=this.s.seed+level*7919;
      for(let iz=Math.floor(lo[2]/cell);iz<Math.ceil(this.hi[2]/cell);iz++)for(let iy=Math.floor(lo[1]/cell);iy<Math.ceil(this.hi[1]/cell);iy++)for(let ix=Math.floor(lo[0]/cell);ix<Math.ceil(this.hi[0]/cell);ix++){
        if(hash(ix,iy,iz,seed)<(level===0?.20:.52))continue;
        const c=[(ix+.18+.64*hash(ix,iy,iz,seed+7))*cell,(iy+.18+.64*hash(ix,iy,iz,seed+17))*cell,(iz+.18+.64*hash(ix,iy,iz,seed+29))*cell];
        const d=sample(c);if(d>0||d<-.7*cell)continue;
        const e=.10,grad=[0,1,2].map(k=>{const a=c.slice(),b=c.slice();a[k]+=e;b[k]-=e;return sample(a)-sample(b);});const len=Math.hypot(...grad)||1;const n=grad.map(v=>v/len);
        // Sparse downward billows preserve the condensation-level underside and reduce detached fringe below the cloud.
        const underside=limit((-n[1]-.28)/.72,0,1);
        if(n[1]<-.42&&hash(ix,iy,iz,seed+44)<(.80+.17*underside))continue;
        const activation=limit(-d/(cell*.18),0,1)*limit((d+cell*.7)/(cell*.18),0,1);
        const radius=cell*(.38+.2*hash(ix,iy,iz,seed+61))*Math.sqrt(amount/.24)*Math.sqrt(activation)*(1.0-.52*underside);
        if(radius<.035)continue;
        const shift=limit(-d-radius*.48,0,cell*.65);for(let k=0;k<3;k++)c[k]+=n[k]*shift;
        const radii=[radius*(.85+.34*hash(ix,iy,iz,seed+72)),radius*(.88+.3*hash(ix,iy,iz,seed+83)),radius*(.85+.35*hash(ix,iy,iz,seed+94))],join=radius*.65;
        const mini=c.map((v,k)=>Math.max(1,Math.floor((v-radii[k]-join-lo[k])/vs[k]))),maxi=c.map((v,k)=>Math.min([VX,VY,VZ][k]-2,Math.ceil((v+radii[k]+join-lo[k])/vs[k])));
        for(let z=mini[2];z<=maxi[2];z++)for(let y=mini[1];y<=maxi[1];y++)for(let x=mini[0];x<=maxi[0];x++){
          const X=lo[0]+x*vs[0]-c[0],Y=lo[1]+y*vs[1]-c[1],Z=lo[2]+z*vs[2]-c[2];
          const k0=Math.hypot(X/radii[0],Y/radii[1],Z/radii[2]),k1=Math.hypot(X/(radii[0]**2),Y/(radii[1]**2),Z/(radii[2]**2));
          const d=k1>1e-6?k0*(k0-1)/k1:-Math.min(...radii),i=x+y*VX+z*VXY;
          data[i]=smoothMin(data[i],d,join);
        }
        billows++;
      }
    }
  }
  return{visualData:data,visualGrid:[VX,VY,VZ],billows};
 }
 result(){const r=this.distanceField(),v=this.visualField(r.data);r.stats.artBillows=v.billows;r.stats.renderGrid=v.visualGrid;return {...r,...v,nx:this.nx,ny:this.ny,nz:this.nz,lo:this.lo,hi:this.hi,scaffold:this.scaffold.slice()};}

}
let sim=null;
if(typeof self!=='undefined'&&typeof self.postMessage==='function')self.onmessage=e=>{
  try{
    const m=e.data,t=performance.now();
    if(m.type==='reset'){sim=new MoistAtmosphere(m.settings,m.primitives,m.cuts);for(let k=0;k<limit(m.replaySteps||0,0,1000);k++)sim.step(2);}
    if(!sim)throw Error('Initialize atmosphere first');
    if(m.type==='style')Object.assign(sim.s,m.settings);
    if(m.type==='step')for(let k=0;k<limit(m.count||1,1,120);k++)sim.step(2);
    if(m.type==='checkpoint'){self.postMessage({type:'checkpoint',id:m.id,theta:sim.theta,qv:sim.qv,qc:sim.qc,u:sim.u,v:sim.v,w:sim.w});return;}
    const r=sim.result();r.stats.computeMs=performance.now()-t;
    self.postMessage({type:'result',id:m.id,...r},[r.data.buffer,r.scaffold.buffer,r.visualData.buffer]);
  }catch(err){self.postMessage({type:'error',id:e.data.id,error:String(err.stack||err)});}
};
if(typeof module!=='undefined')module.exports={MoistAtmosphere,qsat,phaseAdjust,scaffoldAt,noise};
`;
