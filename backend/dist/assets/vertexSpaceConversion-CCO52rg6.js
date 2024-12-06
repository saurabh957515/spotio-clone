import{cT as Z,fO as V,fP as H,fQ as J,fE as q,fR as sn,dd as cn,fS as fn,fT as pn,fU as mn,cV as L,dz as h,fV as An,fW as gn,fX as K,fY as U,fZ as nn,f_ as Tn,f$ as yn,aS as Rn,n as En,dg as dn,dB as Fn,g0 as $n}from"./index-IeegpAPg.js";import{e as rn}from"./mat3f64-q3fE-ZOt.js";import{e as v,o as tn}from"./mat4f64-CSKppSlJ.js";import{a as en,w as Nn}from"./spatialReferenceEllipsoidUtils-BLVRTiuE.js";import{C as O}from"./computeTranslationToOriginAndRotation-B4Lmv4V4.js";import{c as z}from"./projectPointToVector-CtCQTVn5.js";import{a as On,m as _n}from"./meshVertexSpaceUtils-hKPRZL_4.js";import{f as B,l as on,i as P,e as b}from"./vec3-B7akktlr.js";import{i as F,T as $}from"./BufferView-D5SM01Un.js";import{n as wn}from"./vec4-D-2V8DwR.js";const tr="Projection may be possible after calling projection.load().";function y(n,r,t,e){n.error(`Failed to project from (wkid:${r.wkid}) to (wkid:${t.wkid}).${e?" ":""}${e}`)}function Pn(n,r,t,e,o,l){return M(d.TO_PCPF,F.fromTypedArray(n),E.NORMAL,$.fromTypedArray(r),t,$.fromTypedArray(e),o,F.fromTypedArray(l))?l:null}function Cn(n,r,t,e,o,l){return M(d.FROM_PCPF,F.fromTypedArray(n),E.NORMAL,$.fromTypedArray(r),t,$.fromTypedArray(e),o,F.fromTypedArray(l))?l:null}function Sn(n,r,t,e){return Z(n,r,0,t,e,0)?t:null}function xn(n,r,t,e){return Z(n,r,0,t,e,0)?t:null}function an(n,r,t){return V(f,t),B(r,n,f),H(f)&&on(r,r),r}function ln(n,r,t){return J(f,t),wn(r,n,f),H(f)&&on(r,r,4),r}function hn(n,r,t,e,o,l){if(!M(d.TO_PCPF,F.fromTypedArray(n,4*Float32Array.BYTES_PER_ELEMENT),E.TANGENT,$.fromTypedArray(r),t,$.fromTypedArray(e),o,F.fromTypedArray(l,4*Float32Array.BYTES_PER_ELEMENT)))return null;for(let a=3;a<n.length;a+=4)l[a]=n[a];return l}function vn(n,r,t,e,o,l){if(!M(d.FROM_PCPF,F.fromTypedArray(n,16),E.TANGENT,$.fromTypedArray(r),t,$.fromTypedArray(e),o,F.fromTypedArray(l,16)))return null;for(let a=3;a<n.length;a+=4)l[a]=n[a];return l}var E,d;function I(n,r,t,e,o){switch(O(e,t,_,e),n===d.FROM_PCPF&&h(_,_),r){case E.NORMAL:return V(o,_);case E.TANGENT:return J(o,_)}}function M(n,r,t,e,o,l,a,i){if(!r)return;const c=e.count;if(Mn(o))for(let u=0;u<c;u++)l.getVec(u,x),r.getVec(u,T),q(T,T,I(n,t,x,a,f)),i.setVec(u,T);else for(let u=0;u<c;u++){l.getVec(u,x),r.getVec(u,T);const p=sn(e.get(u,1));let s=Math.cos(p);t===E.TANGENT!=(n===d.TO_PCPF)&&(s=1/s),I(n,t,x,a,f),n===d.TO_PCPF?(f[0]*=s,f[1]*=s,f[2]*=s,f[3]*=s,f[4]*=s,f[5]*=s):(f[0]*=s,f[3]*=s,f[6]*=s,f[1]*=s,f[4]*=s,f[7]*=s),q(T,T,f),cn(T,T),i.setVec(u,T)}return i}function Mn(n){return n.isWGS84||fn(n)||pn(n)||mn(n)}(function(n){n[n.NORMAL=0]="NORMAL",n[n.TANGENT=1]="TANGENT"})(E||(E={})),function(n){n[n.TO_PCPF=0]="TO_PCPF",n[n.FROM_PCPF=1]="FROM_PCPF"}(d||(d={}));const x=L(),T=L(),_=v(),f=rn(),A=()=>En.getLogger("esri.geometry.support.meshUtils.vertexSpaceConversion");function er(n,r,{vertexSpace:t,spatialReference:e}){if(t.type==="georeferenced"){const u=n;if(!z(r,u,e))return!1;const{origin:p}=t;return dn(n,u,p),!0}const o=en(e),l=n;if(!z(r,l,o))return!1;const{origin:a}=t,i=X;if(!O(e,a,i,o))return!1;const c=h(X,i);return c!=null&&(Fn(n,l,c),!0)}function or(n,r,t){const{vertexSpace:e,transform:o,vertexAttributes:l}=n,a=On(e)?o:null,i=G(n.spatialReference,t,R.SOURCE_AND_TARGET);if(_n(e,r)&&(!a||An(a.localMatrix,tn))&&C(i)){const{position:c,normal:u,tangent:p}=l,s=t?.allowBufferReuse;return{position:s?c:c.slice(),normal:s?u:u?.slice(),tangent:s?p:p?.slice()}}switch(n.vertexSpace.type){case"local":return r.type==="local"?Bn(n,n.vertexSpace,r.origin,t):Un(n,n.vertexSpace,r.origin,t);case"georeferenced":return r.type==="local"?Vn(n,n.vertexSpace,r.origin,t):Gn(n,n.vertexSpace,r.origin,t)}}function Gn({vertexAttributes:n,transform:r,spatialReference:t},{origin:e},o,l){const a=G(t,l,R.SOURCE_AND_TARGET),i=e||!C(a)?gn(m,r?.localMatrix??tn):null;i&&Y(i,t,l,R.SOURCE_AND_TARGET);const{position:c,normal:u,tangent:p}=i?k(n,i):n,s=l?.allowBufferReuse,N=s?c:new Float64Array(c.length);let g=c;if(e&&(g=P(N,g,e)),o){const S=K(un,o);g=P(N,g,S)}return{position:g!==n.position||s?g:g.slice(),normal:u!==n.normal||s?u:u?.slice(),tangent:p!==n.tangent||s?p:p?.slice()}}function D(n,r){return r?.useEllipsoid&&$n(n)?Nn:en(n)}function Un({spatialReference:n,vertexAttributes:r,transform:t},{origin:e},o,l){const a=D(n,l);if(!O(n,e,m,a))return y(A(),n,a),null;t&&U(m,m,t.localMatrix),Y(m,n,l,R.SOURCE);const i=new Float64Array(r.position.length),c=bn(r.position,m,n,i,a);if(!c)return null;const u=Dn(c,n,i,a,r.normal,m);if(r.normal&&!u)return null;const p=kn(c,n,i,a,r.tangent,m);if(r.tangent&&!p)return null;if(o){const s=K(un,o);P(c,c,s)}return{position:c,normal:u,tangent:p}}function Vn({vertexAttributes:n,spatialReference:r,transform:t},{origin:e},o,l){const a=D(r,l);if(!O(r,o,m,a))return y(A(),r,a),null;const i=1/G(r,l,R.TARGET);nn(m,m,[i,i,i]);const c=h(w,m),{position:u,normal:p,tangent:s}=Ln(n,e,t),N=new Float64Array(u.length),g=Yn(u,r,c,N,a);if(!g)return null;const S=V(qn,c),j=jn(p,u,r,N,a,S,p!==n.normal?p:void 0);if(!j&&p)return null;const W=Wn(s,u,r,N,a,S,s!==n.tangent?s:void 0);return!W&&s?null:{position:g,normal:j,tangent:W}}function Ln(n,r,t){if(!r)return n;if(!t){const{position:o,normal:l,tangent:a}=n;return{position:P(new Float64Array(o.length),o,r),tangent:a,normal:l}}const e=k(n,t.localMatrix);return P(e.position,e.position,r),e}function Bn({vertexAttributes:n,spatialReference:r,transform:t},{origin:e},o,l){const a=D(r,l);if(!O(r,e,m,a))return y(A(),r,a),null;if(t&&U(m,m,t.localMatrix),!O(r,o,w,a))return y(A(),a,r),null;h(w,w);const i=U(m,w,m);return Y(i,r,l,R.SOURCE_AND_TARGET),k(n,i)}function k(n,r){const t=new Float64Array(n.position.length);b(t,n.position,r);const e=n.normal?new Float32Array(n.normal.length):null,o=n.tangent?new Float32Array(n.tangent.length):null;return e&&n.normal&&an(n.normal,e,r),o&&n.tangent&&ln(n.tangent,o,r),{position:t,normal:e,tangent:o}}function bn(n,r,t,e,o){b(e,n,r);const l=new Float64Array(n.length);return xn(e,o,l,t)?l:(y(A(),o,t),null)}function Dn(n,r,t,e,o,l){if(o==null)return null;const a=new Float32Array(o.length);return an(o,a,l),Cn(a,n,r,t,e,a)?a:(y(A(),e,r),null)}function kn(n,r,t,e,o,l){if(o==null)return null;const a=new Float32Array(o.length);return ln(o,a,l),vn(a,n,r,t,e,a)?a:(y(A(),e,r),null)}function Y(n,r,t,e){const o=G(r,t,e);C(o)||nn(n,n,[o,o,o])}function G(n,r,t){const e=!!(t&R.SOURCE),o=!!(t&R.TARGET),l=r?.sourceUnit,a=r?.targetUnit;if(!l&&!a)return 1;let i=Q(l,n);e||!l||C(i)||(A().warn("source unit conversion not supported"),i=1);let c=1/Q(a,n);return o||!a||C(c)||(A().warn("target unit conversion not supported"),c=1),i*c}function C(n){return Tn(n,1)}function Yn(n,r,t,e,o){const l=Sn(n,r,e,o);if(!l)return y(A(),r,o),null;const a=new Float64Array(l.length);return b(a,l,t),a}function jn(n,r,t,e,o,l,a){if(n==null)return null;const i=a??new Float32Array(n.length);return Pn(n,r,t,e,o,i)?(B(i,i,l),i):(y(A(),t,o),null)}function Wn(n,r,t,e,o,l,a){if(n==null)return null;const i=a??new Float32Array(n.length);return hn(n,r,t,e,o,i)?(B(i,i,l,4),i):(y(A(),t,o),null)}function Q(n,r){if(n==null)return 1;const t=yn(r);return 1/Rn(t,"meters",n)}const m=v(),w=v(),qn=rn(),un=L(),X=v();var R;(function(n){n[n.NONE=0]="NONE",n[n.SOURCE=1]="SOURCE",n[n.TARGET=2]="TARGET",n[n.SOURCE_AND_TARGET=3]="SOURCE_AND_TARGET"})(R||(R={}));export{or as B,Pn as E,y as F,vn as G,tr as O,Cn as R,Sn as g,xn as h,er as k,Q as n,hn as w};
