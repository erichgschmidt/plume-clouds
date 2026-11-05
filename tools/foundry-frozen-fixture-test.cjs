'use strict';
const assert=require('node:assert/strict'),fs=require('node:fs'),path=require('node:path'),vm=require('node:vm'),cp=require('node:child_process');
const A=require('../src/foundry-assets.js'),{slab,frozenOpticalAsset}=require('./foundry-volume-fixtures.cjs');
const a=slab({w:32});a.version=4;a.relighting=a.views.map(()=>Array.from({length:2},()=>new Uint8Array(a.w*a.h*4)));a.relightEncoding='sqrt-premultiplied-visibility-v1';a.relightSettings={intensity:2.6};A.buildLods(a,{minWidth:16});
const frozen=frozenOpticalAsset(a);assert.equal(frozen.version,3);assert.equal(a.version,4);assert(a.relighting);assert(a.lods[0].relighting);
for(const [actual,original]of [[frozen,a],...frozen.lods.map((l,i)=>[l,a.lods[i]])]){assert.equal(actual.relighting,undefined);assert.equal(actual.relightEncoding,undefined);assert.equal(actual.relightSettings,undefined);assert.equal(actual.data,original.data,'geometry bytes are shared unchanged');assert.equal(actual.radiance,original.radiance,'frozen optical bytes are shared unchanged');}
assert.equal(A.byteLength(frozen),(32*32+16*16)*24);assert.equal(A.byteLength(a),(32*32+16*16)*32);
const root=path.join(__dirname,'..'),context={module:{exports:{}},Buffer,Uint8Array,Number,Math};vm.runInNewContext(cp.execFileSync('git',['show','9252a15:src/foundry-assets.js'],{cwd:root,encoding:'utf8'}),context);const old=context.module.exports;
assert.throws(()=>old.parse(A.stringify(a)),/version/,'old readers reject complete v4 assets');
const record=JSON.parse(A.stringify(a)),compatible=frozenOpticalAsset(record),parsed=old.parse(JSON.stringify(compatible));assert.equal(record.version,4);assert.equal(parsed.version,3);
for(const [actual,original]of [[parsed,a],...parsed.lods.map((l,i)=>[l,a.lods[i]])])for(const key of ['data','radiance'])for(let v=0;v<original[key].length;v++)for(let m=0;m<original[key][v].length;m++)assert(Buffer.from(actual[key][v][m]).equals(Buffer.from(original[key][v][m])),'old renderer fixture retains every frozen map byte');
console.log('Frozen audit fixture: immutable v4 stripping, complete LOD preservation, old-reader v3 byte-exact compatibility PASS');
