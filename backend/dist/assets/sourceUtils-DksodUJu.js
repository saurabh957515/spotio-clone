const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/geometryEngineJSON-5ScVeRQz.js","assets/geometryEngineBase-8g0RzW7z.js","assets/_commonjsHelpers-DCkdB7M8.js","assets/json-Wa8cmqdu.js"])))=>i.map(i=>d[i]);
import{d2 as f,d3 as h,ad as g,d4 as m,ac as p,d5 as y,d6 as a,_ as w}from"./index-IeegpAPg.js";import{n as _}from"./date-Dw3OHnFv.js";class I{constructor(){this.code=null,this.description=null}}class b{constructor(t){this.error=new I,this.globalId=null,this.objectId=null,this.success=!1,this.uniqueId=null,this.error.description=t}}function c(n){return new b(n)}class q{constructor(t){this.globalId=null,this.success=!0,this.objectId=this.uniqueId=t}}function A(n){return new q(n)}const u=new Set;function F(n,t,e,d=!1){u.clear();for(const i in e){const r=n.get(i);if(!r)continue;const o=P(r,e[i]);if(u.add(r.name),r&&(d||r.editable)){const l=f(r,o);if(l)return c(h(l,r,o));t[r.name]=o}}for(const i of n.requiredFields??[])if(!u.has(i.name))return c(`missing required field "${i.name}"`);return null}function P(n,t){let e=t;return g(n)&&typeof t=="string"?e=parseFloat(t):m(n)&&t!=null&&typeof t!="string"?e=String(t):p(n)&&typeof t=="string"&&(e=_(t)),y(e)}let s;function G(n,t){if(!n||!a(t))return n;if("rings"in n||"paths"in n){if(s==null)throw new TypeError("geometry engine not loaded");return s.simplify(t,n)}return n}async function j(){return s==null&&(s=await w(()=>import("./geometryEngineJSON-5ScVeRQz.js").then(n=>n.g),__vite__mapDeps([0,1,2,3]))),s}async function S(n,t){!a(n)||t!=="esriGeometryPolygon"&&t!=="esriGeometryPolyline"||await j()}export{A as d,c as f,S as j,F as p,G as y};
