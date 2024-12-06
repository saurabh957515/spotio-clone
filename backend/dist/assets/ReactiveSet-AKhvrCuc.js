import{E as f}from"./ByteSizeUnit-BsxeN7wM.js";import{gP as b,aS as a,l,r as T,gQ as x,b1 as F,gR as p,gS as v,gT as $,gU as d,gV as z,gW as B,gX as w,gY as o}from"./index-IeegpAPg.js";function M(s,t){return{type:b(t),value:s,unit:t}}function j(s){return{value:s}}function E(s,t){return{type:b(t),value:s,unit:t}}function I(s,t){return{type:b(t),value:s,unit:t}}function h(s,t,e="arithmetic"){return{type:b(t),value:s,unit:t,rotationType:e}}function G(s,t){const e=U(s,t);return s.type==="angle"?h(e,t,s.rotationType):M(e,t)}function U(s,t){return a(s.value,s.unit,t)}function k(s,t,e){if(t===e)return s;switch(e){case"arithmetic":case"geographic":return 90-s}}const J=E(0,"meters"),L=I(0,"square-meters");h(0,"radians");const N=h(0,"degrees"),q=h(0,"degrees","geographic");function S(s,t,e){return s.units[t][e]}function u(s,t,e,r=2,i="abbr"){return`${l(t,{minimumFractionDigits:r,maximumFractionDigits:r,signDisplay:t>0?"never":"exceptZero"})} ${S(s,e,i)}`}function g(s,t,e,r=2,i="abbr"){return`${l(t,{minimumFractionDigits:r,maximumFractionDigits:r,signDisplay:"exceptZero"})} ${S(s,e,i)}`}function A(s,t,e,r=2,i="abbr"){const n=p(t,e);return u(s,a(t,e,n),n,r,i)}function H(s,t,e,r=2,i="abbr"){const n=p(t,e);return g(s,a(t,e,n),n,r,i)}function P(s,t,e,r=2,i="abbr"){const n=v(t,e);return u(s,a(t,e,n),n,r,i)}function Q(s,t,e,r=2,i="abbr"){const n=v(t,e);return g(s,a(t,e,n),n,r,i)}function R(s,t,e,r=2,i="abbr"){const n=$(t,e);return u(s,a(t,e,n),n,r,i)}function V(s,t,e,r=2,i="abbr"){const n=$(t,e);return g(s,a(t,e,n),n,r,i)}function W(s,t,e,r=2,i="abbr"){const n=d(t,e);return u(s,a(t,e,n),n,r,i)}function X(s,t,e,r=2,i="abbr"){const n=d(t,e);return g(s,a(t,e,n),n,r,i)}function C(s,t,e,r=2,i="abbr"){const n=z(t,e);return u(s,a(t,e,n),n,r,i)}function tt(s,t,e,r=2,i="abbr"){const n=B(t,e);return u(s,a(t,e,n),n,r,i)}const O=(s,t)=>({style:"unit",unitDisplay:"narrow",unit:"degree",maximumFractionDigits:t,minimumFractionDigits:t,signDisplay:s>0?"never":"exceptZero"});function et(s,t,e,r,i,n=x,D=!0){let c=n.normalize(k(a(s,t,"degrees"),e,r),0,D);const m=O(c,i??2);return c=K(c,m),l(c,m)}const _=new Map;function K(s,t){const e=JSON.stringify(t);let r=_.get(e);return r||(r=new Intl.NumberFormat("en-US",t),_.set(e,r)),/^[-+]?360\.?0*°?$/.test(r.format(s))?0:s}const y=["B","kB","MB","GB","TB"];function st(s,t){let e=(t=Math.round(t))===0?0:Math.floor(Math.log(t)/Math.log(f.KILOBYTES));e=F(e,0,y.length-1);const r=l(t/f.KILOBYTES**e,{maximumFractionDigits:2});return T(s.units.bytes[y[e]],{fileSize:r})}class rt{constructor(t){this._observable=new w,this._set=new Set(t)}get size(){return o(this._observable),this._set.size}add(t){const e=this._set.size;return this._set.add(t),this._set.size!==e&&this._observable.notify(),this}clear(){this._set.size>0&&(this._set.clear(),this._observable.notify())}delete(t){const e=this._set.delete(t);return e&&this._observable.notify(),e}entries(){return o(this._observable),this._set.entries()}forEach(t,e){o(this._observable),this._set.forEach((r,i)=>t.call(e,r,i,this),e)}has(t){return o(this._observable),this._set.has(t)}keys(){return o(this._observable),this._set.keys()}values(){return o(this._observable),this._set.values()}[Symbol.iterator](){return o(this._observable),this._set[Symbol.iterator]()}get[Symbol.toStringTag](){return this._set[Symbol.toStringTag]}}export{C as $,W as B,A as D,Q as F,X as M,st as T,N as U,E as a,G as b,S as c,R as d,L as e,U as f,u as g,V as h,j as i,tt as j,J as k,I as l,k as m,q as n,h as o,g as p,rt as s,et as w,H as x,P as y};
