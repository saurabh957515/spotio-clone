import{v as t,w as l,x as N,aH as R,fD as p,es as j,a_ as D,du as y,fE as g,fF as h,fG as c,fy as x,fH as z,fI as i,cV as F}from"./index-IeegpAPg.js";import{p as G}from"./normalizeUtilsSync-CIrM6ohr.js";import{e as d}from"./mat3f64-q3fE-ZOt.js";let s=class extends R{constructor(o){super(o)}get bounds(){const o=this.coords;return o?.extent==null?null:p(o.extent)}get coords(){const o=this.element.georeference?.coords;return j(o,this.spatialReference).geometry}get normalizedCoords(){return D.fromJSON(G(this.coords))}get normalizedBounds(){const o=this.normalizedCoords!=null?this.normalizedCoords.extent:null;return o!=null?p(o):null}};t([l()],s.prototype,"spatialReference",void 0),t([l()],s.prototype,"element",void 0),t([l()],s.prototype,"bounds",null),t([l()],s.prototype,"coords",null),t([l()],s.prototype,"normalizedCoords",null),t([l()],s.prototype,"normalizedBounds",null),s=t([N("esri.layers.support.MediaElementView")],s);const r=F(),a=d(),u=d(),f=d();function O(o,e,n){return y(r,e[0],e[1],1),g(r,r,h(a,n)),r[2]===0?c(o,r[0],r[1]):c(o,r[0]/r[2],r[1]/r[2])}function S(o,e,n){return m(u,e[0],e[1],e[2],e[3],e[4],e[5],e[6],e[7]),m(f,n[0],n[1],n[2],n[3],n[4],n[5],n[6],n[7]),x(o,z(u,u),f),o[8]!==0&&(o[0]/=o[8],o[1]/=o[8],o[2]/=o[8],o[3]/=o[8],o[4]/=o[8],o[5]/=o[8],o[6]/=o[8],o[7]/=o[8],o[8]/=o[8]),o}function m(o,e,n,v,C,b,V,$,w){i(o,e,v,b,n,C,V,1,1,1),y(r,$,w,1),z(a,o);const[B,E,H]=g(r,r,h(a,a));return i(a,B,0,0,0,E,0,0,0,H),x(o,a,o)}export{S as j,s as m,O as p};