import{b3 as E,aQ as d,iG as C,iH as g}from"./index-IeegpAPg.js";import"./mat4f64-CSKppSlJ.js";import"./projectVectorToVector-BC8Nx4RI.js";import"./sphere-qRiW3p7L.js";import{I as h}from"./I3SBinaryReader-Bhdi-K77.js";import{r as I}from"./vec4f64-CMoMXWBi.js";import"./floatRGBA-CWXyMtGj.js";import"./NormalAttribute.glsl-BLvHrFHL.js";import"./interfaces-DDtDqZYj.js";import"./BindType-BmZEZMMh.js";import"./VertexAttribute-BdZWZuT1.js";import{I as A}from"./orientedBoundingBox-Bg_iKoGG.js";var e;(function(n){n[n.TRANSPARENT=0]="TRANSPARENT",n[n.OPAQUE=1]="OPAQUE"})(e||(e={}));var T;(function(n){n[n.Uniform=0]="Uniform",n[n.Varying=1]="Varying",n[n.COUNT=2]="COUNT"})(T||(T={}));var c,S;(function(n){n[n.Solid=0]="Solid",n[n.Sketch=1]="Sketch",n[n.Mixed=2]="Mixed",n[n.COUNT=3]="COUNT"})(c||(c={})),function(n){n[n.REGULAR=0]="REGULAR",n[n.SILHOUETTE=1]="SILHOUETTE"}(S||(S={}));function P(n){return{...x,...n,type:c.Solid}}const x={color:I(0,0,0,.2),size:1,extensionLength:0,opacity:1,objectTransparency:e.OPAQUE,hasSlicePlane:!1};I(0,0,0,.2),e.OPAQUE;E();var p;async function M(n,a,t,m,N,U,R,y){const s=[];for(const r of a)if(r&&N.includes(r.name)){const i=`${n}/nodes/${t}/attributes/${r.key}/0`;s.push({url:i,storageInfo:r})}const l=await Promise.allSettled(s.map(r=>d(r.url,{responseType:"array-buffer",query:{...R,token:U},signal:y?.signal}).then(i=>h(r.storageInfo,i.data)))),f=[];for(const r of m){const i={};for(let o=0;o<l.length;o++){const u=l[o];if(u.status==="fulfilled"){const O=u.value;i[s[o].storageInfo.name]=$(O,r)}}f.push(i)}return f}(function(n){n[n.OUTSIDE=0]="OUTSIDE",n[n.INTERSECTS_CENTER_OUTSIDE=1]="INTERSECTS_CENTER_OUTSIDE",n[n.INTERSECTS_CENTER_INSIDE=2]="INTERSECTS_CENTER_INSIDE",n[n.INSIDE=3]="INSIDE"})(p||(p={}));const D=-32768,_=-(2**31);function $(n,a){if(!n)return null;const t=n[a];return C(n)?t===D?null:t:g(n)?t===_?null:t:t!=t?null:t}P({color:[0,0,0,0],opacity:0});E();E();new A;new Array(72);export{M as V};