'use strict';
const fs=require('node:fs'),path=require('node:path'),assert=require('node:assert/strict');
const {chromium}=require(process.env.PLAYWRIGHT_MODULE||'playwright');
(async()=>{
  const browser=await chromium.launch({headless:true,executablePath:process.env.CHROME_PATH||undefined});
  try{
    const results=[];
    for(const dpr of [1,1.25,1.5,2]){
      const context=await browser.newContext({viewport:{width:801,height:603},deviceScaleFactor:dpr}),page=await context.newPage();
      await page.setContent('<style>html,body{margin:0;background:#888}#stage{position:absolute;left:10.3px;top:7.7px;width:701px;height:503px;overflow:hidden}</style><div id="stage"><canvas></canvas></div>');
      await page.addScriptTag({content:fs.readFileSync(path.join(__dirname,'../src/foundry-pixel-grid.js'),'utf8')});
      const shape=await page.evaluate(()=>{
        const c=document.querySelector('canvas'),g=FoundryPixelGrid.measure(c,2);c.width=g.width;c.height=g.height;
        const ctx=c.getContext('2d');for(let x=0;x<c.width;x++){ctx.fillStyle=x%2?'#fff':'#000';ctx.fillRect(x,0,1,c.height);}
        const r=c.getBoundingClientRect();return {grid:g,rect:{left:r.left,top:r.top,width:r.width,height:r.height},dpr:devicePixelRatio};
      });
      assert(Math.abs(shape.rect.width*dpr-shape.grid.physicalWidth)<.001);
      assert(Math.abs(shape.rect.height*dpr-shape.grid.physicalHeight)<.001);
      const screenshot=await page.screenshot();
      const sampled=await page.evaluate(async({png,shape})=>{
        const image=new Image();image.src='data:image/png;base64,'+png;await image.decode();
        const c=document.createElement('canvas');c.width=image.width;c.height=image.height;const ctx=c.getContext('2d');ctx.drawImage(image,0,0);
        const y=Math.round((shape.rect.top+shape.rect.height*.5)*shape.dpr);
        // Find the rasterized image edges, rather than assuming the compositor's
        // integer origin rounding matches getBoundingClientRect's float origin.
        const full=ctx.getImageData(0,y,c.width,1).data;let begin=-1,end=-1;
        for(let x=0;x<c.width;x++){const v=full[x*4];if(v===0||v===255){if(begin<0)begin=x;end=x;}}
        const row=full.slice(begin*4,(end+1)*4);let last=-1,count=0,blurred=0;const runs=[],edges=[];
        for(let i=0;i<row.length;i+=4){const v=row[i];if(v!==0&&v!==255){blurred++;edges.push([i/4,v]);}if(v!==last){if(count)runs.push(count);last=v;count=1;}else count++;}runs.push(count);
        return {blurred,min:Math.min(...runs),max:Math.max(...runs),runs:runs.length,edges};
      },{png:screenshot.toString('base64'),shape});
      assert.equal(sampled.blurred,0,'no fractional-edge interpolation '+JSON.stringify({dpr,shape,sampled}));
      assert.equal(sampled.min,shape.grid.scale);assert.equal(sampled.max,shape.grid.scale);assert.equal(sampled.runs,shape.grid.width);
      results.push({dpr,scale:shape.grid.scale,width:shape.grid.width,height:shape.grid.height,...sampled});await context.close();
    }
    console.log('PASS physical pixel screenshot runs:',JSON.stringify(results));
  }finally{await browser.close();}
})().catch(e=>{console.error(e);process.exitCode=1;});
