import{de as E,df as O,dk as u,dh as l,dj as d,aO as en,du as P,dv as an,dw as h,dx as cn,dy as un,da as $,dg as z,cX as S,dz as gn,dA as bn,dB as m,dC as fn,dD as V,dd as H,di as R,cV as w,n as ln}from"./index-IeegpAPg.js";import{s as C,w as dn}from"./sphere-qRiW3p7L.js";import{e as G}from"./mat4f64-CSKppSlJ.js";import{v as pn,A as U,M as mn}from"./lineSegment-BTVBW5NI.js";import{M as y,D as $n,h as hn,P as k,c as e,U as In,x as Pn,q as wn,w as Mn,z as K,H as Nn,f as M,O as N,y as vn}from"./plane-Br_kpZFb.js";const _=()=>ln.getLogger("esri.views.3d.support.geometryUtils.boundedPlane");class yn{constructor(){this.plane=y(),this.origin=w(),this.basis1=w(),this.basis2=w()}}const An=yn;function I(n=rn){return{plane:y(n.plane),origin:O(n.origin),basis1:O(n.basis1),basis2:O(n.basis2)}}function Tn(n,t,i){const s=Rn.get();return s.origin=n,s.basis1=t,s.basis2=i,s.plane=$n(0,0,0,0),T(s),s}function A(n,t=I()){return L(n.origin,n.basis1,n.basis2,t)}function xn(n,t){u(t.origin,n.origin),u(t.basis1,n.basis1),u(t.basis2,n.basis2),hn(t.plane,n.plane)}function L(n,t,i,s=I()){return u(s.origin,n),u(s.basis1,t),u(s.basis2,i),T(s),Dn(s,"fromValues()"),s}function T(n){k(n.basis2,n.basis1,n.origin,n.plane)}function W(n,t,i){n!==i&&A(n,i);const s=l(e.get(),f(n),t);return d(i.origin,i.origin,s),i.plane[3]-=t,i}function En(n,t,i){return Z(t,i),W(i,q(n,n.origin),i),i}function On(n,t){const i=n.basis1[0],s=n.basis2[1],[o,r]=n.origin;return en(o-i,r-s,o+i,r+s,t)}function Z(n,t=I()){const i=(n[2]-n[0])/2,s=(n[3]-n[1])/2;return P(t.origin,n[0]+i,n[1]+s,0),P(t.basis1,i,0,0),P(t.basis2,0,s,0),In(0,0,1,0,t.plane),t}function F(n,t,i){return!!Pn(n.plane,t,i)&&sn(n,i)}function Sn(n,t,i){if(F(n,t,i))return i;const s=J(n,t,e.get());return d(i,t.origin,l(e.get(),t.direction,an(t.origin,s)/h(t.direction))),i}function J(n,t,i){const s=v.get();on(n,t,s,v.get());let o=Number.POSITIVE_INFINITY;for(const r of D){const a=B(n,r,x.get()),g=e.get();if(wn(s,a,g)){const c=cn(e.get(),t.origin,g),b=Math.abs(un($(t.direction,c)));b<o&&(o=b,u(i,g))}}return o===Number.POSITIVE_INFINITY?Q(n,t,i):i}function Vn(n,t){return(t-n)/t}function Q(n,t,i){if(F(n,t,i))return i;const s=v.get(),o=v.get();on(n,t,s,o);let r=Number.POSITIVE_INFINITY;for(const a of D){const g=B(n,a,x.get()),c=e.get();if(Mn(s,g,c)){const b=dn(t,c);if(!K(o,c))continue;b<r&&(r=b,u(i,c))}}return Y(n,t.origin)<r&&nn(n,t.origin,i),i}function nn(n,t,i){const s=Nn(n.plane,t,e.get()),o=U(X(n,n.basis1),s,-1,1,e.get()),r=U(X(n,n.basis2),s,-1,1,e.get());return z(i,d(e.get(),o,r),n.origin),i}function tn(n,t,i){const{origin:s,basis1:o,basis2:r}=n,a=z(e.get(),t,s),g=M(o,a),c=M(r,a),b=M(f(n),a);return P(i,g,c,b)}function Y(n,t){const i=tn(n,t,e.get()),{basis1:s,basis2:o}=n,r=h(s),a=h(o),g=Math.max(Math.abs(i[0])-r,0),c=Math.max(Math.abs(i[1])-a,0),b=i[2];return g*g+c*c+b*b}function _n(n,t){return Math.sqrt(Y(n,t))}function jn(n,t){let i=Number.NEGATIVE_INFINITY;for(const s of D){const o=B(n,s,x.get()),r=mn(o,t);r>i&&(i=r)}return Math.sqrt(i)}function kn(n,t){return K(n.plane,t)&&sn(n,t)}function zn(n,t,i,s){return Bn(n,i,s)}function q(n,t){const i=-n.plane[3];return M(f(n),t)-i}function Cn(n,t,i,s){const o=q(n,t),r=l(Hn,f(n),i-o);return d(s,t,r),s}function Fn(n,t){return S(n.basis1,t.basis1)&&S(n.basis2,t.basis2)&&S(n.origin,t.origin)}function Yn(n,t,i){return n!==i&&A(n,i),gn(p,t),bn(p,p),m(i.basis1,n.basis1,p),m(i.basis2,n.basis2,p),m(N(i.plane),N(n.plane),p),m(i.origin,n.origin,t),vn(i.plane,i.plane,i.origin),i}function qn(n,t,i,s){return n!==s&&A(n,s),fn(j,t,i),m(s.basis1,n.basis1,j),m(s.basis2,n.basis2,j),T(s),s}function f(n){return N(n.plane)}function Bn(n,t,i){switch(t){case V.X:u(i,n.basis1),H(i,i);break;case V.Y:u(i,n.basis2),H(i,i);break;case V.Z:u(i,f(n))}return i}function sn(n,t){const i=z(e.get(),t,n.origin),s=R(n.basis1),o=R(n.basis2),r=$(n.basis1,i),a=$(n.basis2,i);return-r-s<0&&r-s<0&&-a-o<0&&a-o<0}function X(n,t){const i=x.get();return u(i.origin,n.origin),u(i.vector,t),i}function B(n,t,i){const{basis1:s,basis2:o,origin:r}=n,a=l(e.get(),s,t.origin[0]),g=l(e.get(),o,t.origin[1]);d(i.origin,a,g),d(i.origin,i.origin,r);const c=l(e.get(),s,t.direction[0]),b=l(e.get(),o,t.direction[1]);return l(i.vector,d(c,c,b),2),i}function Dn(n,t){Math.abs($(n.basis1,n.basis2)/(h(n.basis1)*h(n.basis2)))>1e-6&&_().warn(t,"Provided basis vectors are not perpendicular"),Math.abs($(n.basis1,f(n)))>1e-6&&_().warn(t,"Basis vectors and plane normal are not perpendicular"),Math.abs(-$(f(n),n.origin)-n.plane[3])>1e-6&&_().warn(t,"Plane offset is not consistent with plane origin")}function on(n,t,i,s){const o=f(n);k(o,t.direction,t.origin,i),k(N(i),o,t.origin,s)}const rn={plane:y(),origin:E(0,0,0),basis1:E(1,0,0),basis2:E(0,1,0)},v=new C(y),x=new C(pn),Hn=w(),Rn=new C(()=>I()),D=[{origin:[-1,-1],direction:[1,0]},{origin:[1,-1],direction:[0,1]},{origin:[1,1],direction:[-1,0]},{origin:[-1,1],direction:[0,-1]}],p=G(),j=G(),Wn=Object.freeze(Object.defineProperty({__proto__:null,BoundedPlaneClass:An,altitudeAt:q,axisAt:zn,cameraFrustumCoverage:Vn,closestPoint:Q,closestPointOnSilhouette:J,copy:A,copyWithoutVerify:xn,create:I,distance:_n,distance2:Y,distanceToSilhouette:jn,elevate:W,equals:Fn,extrusionContainsPoint:kn,fromAABoundingRect:Z,fromValues:L,getExtent:On,intersectRay:F,intersectRayClosestSilhouette:Sn,normal:f,projectPoint:nn,projectPointLocal:tn,rotate:qn,setAltitudeAt:Cn,setExtent:En,transform:Yn,up:rn,updateUnboundedPlane:T,wrap:Tn},Symbol.toStringTag,{value:"Module"}));export{L as J,T as K,I as W,A as Z,Wn as k};
