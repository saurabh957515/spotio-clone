const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/libtess-asm-4lwU9uXx.js","assets/_commonjsHelpers-DCkdB7M8.js","assets/libtess-BccfC5lw.js"])))=>i.map(i=>d[i]);
import{X as bt,_ as wt,fa as Rt,fb as pt}from"./index-IeegpAPg.js";import{e as I,n as D}from"./enums-CmIX1y88.js";const Mt=128e3;let dt=null,mt=null;async function At(){return dt||(dt=Ut()),dt}async function Ut(){mt=await(bt("esri-csp-restrictions")?await wt(()=>import("./libtess-asm-4lwU9uXx.js"),__vite__mapDeps([0,1])).then(i=>i.l):await wt(()=>import("./libtess-BccfC5lw.js"),__vite__mapDeps([2,1])).then(i=>i.l)).default({locateFile:i=>Rt(`esri/core/libs/libtess/${i}`)})}function Ot(x,i){const r=Math.max(x.length,Mt);return mt.triangulate(x,i,r)}function Vt(x,i){return x.x===i.x&&x.y===i.y}function kt(x){if(!x)return;const i=x.length;if(i<=1)return;let r=0;for(let f=1;f<i;f++)Vt(x[f],x[r])||++r===f||(x[r]=x[f]);x.length=r+1}function k(x,i){return x.x=i.y,x.y=-i.x,x}function R(x,i){return x.x=-i.y,x.y=i.x,x}function Tt(x,i){return x.x=i.x,x.y=i.y,x}function ft(x,i){return x.x=-i.x,x.y=-i.y,x}function vt(x){return Math.sqrt(x.x*x.x+x.y*x.y)}function Bt(x,i){return x.x*i.y-x.y*i.x}function gt(x,i){return x.x*i.x+x.y*i.y}function et(x,i,r,f){return x.x=i.x*r+i.y*f,x.y=i.x*f-i.y*r,x}class Pt{constructor(i,r,f){this._writeVertex=i,this._writeTriangle=r,this._canUseThinTessellation=f,this._prevNormal={x:void 0,y:void 0},this._nextNormal={x:void 0,y:void 0},this._textureNormalLeft={x:0,y:1},this._textureNormalRight={x:0,y:-1},this._textureNormal={x:void 0,y:void 0},this._joinNormal={x:void 0,y:void 0},this._inner={x:void 0,y:void 0},this._outer={x:void 0,y:void 0},this._roundStart={x:void 0,y:void 0},this._roundEnd={x:void 0,y:void 0},this._startBreak={x:void 0,y:void 0},this._endBreak={x:void 0,y:void 0},this._innerPrev={x:void 0,y:void 0},this._innerNext={x:void 0,y:void 0},this._bevelStart={x:void 0,y:void 0},this._bevelEnd={x:void 0,y:void 0},this._bevelMiddle={x:void 0,y:void 0}}tessellate(i,r,f=this._canUseThinTessellation){kt(i),f&&r.halfWidth<pt&&!r.offset?this._tessellateThin(i,r):this._tessellate(i,r)}_tessellateThin(i,r){if(i.length<2)return;const f=r.wrapDistance||65535;let N=r.initialDistance||0,$=!1,C=i[0].x,F=i[0].y;const B=i.length;for(let X=1;X<B;++X){$&&($=!1,N=0);let j=i[X].x,W=i[X].y,b=j-C,v=W-F,T=Math.sqrt(b*b+v*v);if(b/=T,v/=T,N+T>f){$=!0;const t=(f-N)/T;T=f-N,j=(1-t)*C+t*j,W=(1-t)*F+t*W,--X}const o=this._writeVertex(C,F,0,0,b,v,v,-b,0,-1,N),y=this._writeVertex(C,F,0,0,b,v,-v,b,0,1,N);N+=T;const G=this._writeVertex(j,W,0,0,b,v,v,-b,0,-1,N),e=this._writeVertex(j,W,0,0,b,v,-v,b,0,1,N);this._writeTriangle(o,y,G),this._writeTriangle(y,G,e),C=j,F=W}}_tessellate(i,r){const f=i[0],N=i[i.length-1],$=Vt(f,N),C=$?3:2;if(i.length<C)return;const F=r.pixelCoordRatio,B=r.capType!=null?r.capType:I.BUTT,X=r.joinType!=null?r.joinType:D.MITER,j=r.miterLimit!=null?Math.min(r.miterLimit,4):2,W=r.roundLimit!=null?Math.min(r.roundLimit,1.05):1.05,b=r.halfWidth!=null?r.halfWidth:2,v=!!r.textured;let T,o,y,G=null;const e=this._prevNormal,t=this._nextNormal;let K=-1,Q=-1;const s=this._joinNormal;let _,c;const rt=this._textureNormalLeft,nt=this._textureNormalRight,w=this._textureNormal;let u=-1,h=-1;const _t=r.wrapDistance||65535;let l=r.initialDistance||0;const Et=this._writeVertex,Nt=this._writeTriangle,d=(p,st,H,m,L,A)=>{const O=Et(o,y,_,c,H,m,p,st,L,A,l);return u>=0&&h>=0&&O>=0&&Nt(u,h,O),u=h,h=O,O};$&&(T=i[i.length-2],t.x=N.x-T.x,t.y=N.y-T.y,Q=vt(t),t.x/=Q,t.y/=Q);let Y=!1;for(let p=0;p<i.length;++p){if(Y&&(Y=!1,l=0),T&&(e.x=-t.x,e.y=-t.y,K=Q,l+K>_t&&(Y=!0)),Y){const n=(_t-l)/K;K=_t-l,T={x:(1-n)*T.x+n*i[p].x,y:(1-n)*T.y+n*i[p].y},--p}else T=i[p];o=T.x,y=T.y;const st=p<=0&&!Y,H=p===i.length-1;if(st||(l+=K),G=H?$?i[1]:null:i[p+1],G?(t.x=G.x-o,t.y=G.y-y,Q=vt(t),t.x/=Q,t.y/=Q):(t.x=void 0,t.y=void 0),!$){if(st){R(s,t),_=s.x,c=s.y,B===I.SQUARE&&(d(-t.y-t.x,t.x-t.y,t.x,t.y,0,-1),d(t.y-t.x,-t.x-t.y,t.x,t.y,0,1)),B===I.ROUND&&(d(-t.y-t.x,t.x-t.y,t.x,t.y,-1,-1),d(t.y-t.x,-t.x-t.y,t.x,t.y,-1,1)),B!==I.ROUND&&B!==I.BUTT||(d(-t.y,t.x,t.x,t.y,0,-1),d(t.y,-t.x,t.x,t.y,0,1));continue}if(H){k(s,e),_=s.x,c=s.y,B!==I.ROUND&&B!==I.BUTT||(d(e.y,-e.x,-e.x,-e.y,0,-1),d(-e.y,e.x,-e.x,-e.y,0,1)),B===I.SQUARE&&(d(e.y-e.x,-e.x-e.y,-e.x,-e.y,0,-1),d(-e.y-e.x,e.x-e.y,-e.x,-e.y,0,1)),B===I.ROUND&&(d(e.y-e.x,-e.x-e.y,-e.x,-e.y,1,-1),d(-e.y-e.x,e.x-e.y,-e.x,-e.y,1,1));continue}}let m,L,A=-Bt(e,t);if(Math.abs(A)<.01)gt(e,t)>0?(s.x=e.x,s.y=e.y,A=1,m=Number.MAX_VALUE,L=!0):(R(s,t),A=1,m=1,L=!1);else{s.x=(e.x+t.x)/A,s.y=(e.y+t.y)/A,m=vt(s);const n=(m-1)*b*F;L=m>4||n>K&&n>Q}_=s.x,c=s.y;let O=X;switch(X){case D.BEVEL:m<1.05&&(O=D.MITER);break;case D.ROUND:m<W&&(O=D.MITER);break;case D.MITER:m>j&&(O=D.BEVEL)}switch(O){case D.MITER:if(d(s.x,s.y,-e.x,-e.y,0,-1),d(-s.x,-s.y,-e.x,-e.y,0,1),H)break;if(v){const n=Y?0:l;u=this._writeVertex(o,y,_,c,t.x,t.y,s.x,s.y,0,-1,n),h=this._writeVertex(o,y,_,c,t.x,t.y,-s.x,-s.y,0,1,n)}break;case D.BEVEL:{const n=A<0;let g,V,q,M;if(n){const a=u;u=h,h=a,g=rt,V=nt}else g=nt,V=rt;if(L)q=n?R(this._innerPrev,e):k(this._innerPrev,e),M=n?k(this._innerNext,t):R(this._innerNext,t);else{const a=n?ft(this._inner,s):Tt(this._inner,s);q=a,M=a}const U=n?k(this._bevelStart,e):R(this._bevelStart,e);d(q.x,q.y,-e.x,-e.y,g.x,g.y);const yt=d(U.x,U.y,-e.x,-e.y,V.x,V.y);if(H)break;const P=n?R(this._bevelEnd,t):k(this._bevelEnd,t);if(L){const a=this._writeVertex(o,y,_,c,-e.x,-e.y,0,0,0,0,l);u=this._writeVertex(o,y,_,c,t.x,t.y,M.x,M.y,g.x,g.y,l),h=this._writeVertex(o,y,_,c,t.x,t.y,P.x,P.y,V.x,V.y,l),this._writeTriangle(yt,a,h)}else{if(v){const a=this._bevelMiddle;a.x=(U.x+P.x)/2,a.y=(U.y+P.y)/2,et(w,a,-e.x,-e.y),d(a.x,a.y,-e.x,-e.y,w.x,w.y),et(w,a,t.x,t.y),u=this._writeVertex(o,y,_,c,t.x,t.y,a.x,a.y,w.x,w.y,l),h=this._writeVertex(o,y,_,c,t.x,t.y,M.x,M.y,g.x,g.y,l)}else{const a=u;u=h,h=a}d(P.x,P.y,t.x,t.y,V.x,V.y)}if(n){const a=u;u=h,h=a}break}case D.ROUND:{const n=A<0;let g,V;if(n){const E=u;u=h,h=E,g=rt,V=nt}else g=nt,V=rt;const q=n?ft(this._inner,s):Tt(this._inner,s);let M,U;L?(M=n?R(this._innerPrev,e):k(this._innerPrev,e),U=n?k(this._innerNext,t):R(this._innerNext,t)):(M=q,U=q);const yt=n?k(this._roundStart,e):R(this._roundStart,e),P=n?R(this._roundEnd,t):k(this._roundEnd,t),a=d(M.x,M.y,-e.x,-e.y,g.x,g.y),ot=d(yt.x,yt.y,-e.x,-e.y,V.x,V.y);if(H)break;const z=this._writeVertex(o,y,_,c,-e.x,-e.y,0,0,0,0,l);L||this._writeTriangle(u,h,z);const S=ft(this._outer,q),J=this._writeVertex(o,y,_,c,t.x,t.y,P.x,P.y,V.x,V.y,l);let Z,tt;const ht=m>2;if(ht){let E;m!==Number.MAX_VALUE?(S.x/=m,S.y/=m,E=gt(e,S),E=(m*(E*E-1)+1)/E):E=-1,Z=n?k(this._startBreak,e):R(this._startBreak,e),Z.x+=e.x*E,Z.y+=e.y*E,tt=n?R(this._endBreak,t):k(this._endBreak,t),tt.x+=t.x*E,tt.y+=t.y*E}et(w,S,-e.x,-e.y);const lt=this._writeVertex(o,y,_,c,-e.x,-e.y,S.x,S.y,w.x,w.y,l);et(w,S,t.x,t.y);const ct=v?this._writeVertex(o,y,_,c,t.x,t.y,S.x,S.y,w.x,w.y,l):lt,ut=z,at=v?this._writeVertex(o,y,_,c,t.x,t.y,0,0,0,0,l):z;let it=-1,xt=-1;if(ht&&(et(w,Z,-e.x,-e.y),it=this._writeVertex(o,y,_,c,-e.x,-e.y,Z.x,Z.y,w.x,w.y,l),et(w,tt,t.x,t.y),xt=this._writeVertex(o,y,_,c,t.x,t.y,tt.x,tt.y,w.x,w.y,l)),v?ht?(this._writeTriangle(ut,ot,it),this._writeTriangle(ut,it,lt),this._writeTriangle(at,ct,xt),this._writeTriangle(at,xt,J)):(this._writeTriangle(ut,ot,lt),this._writeTriangle(at,ct,J)):ht?(this._writeTriangle(z,ot,it),this._writeTriangle(z,it,xt),this._writeTriangle(z,xt,J)):(this._writeTriangle(z,ot,lt),this._writeTriangle(z,ct,J)),L?(u=this._writeVertex(o,y,_,c,t.x,t.y,U.x,U.y,g.x,g.y,l),h=J):(u=v?this._writeVertex(o,y,_,c,t.x,t.y,U.x,U.y,g.x,g.y,l):a,this._writeTriangle(u,at,J),h=J),n){const E=u;u=h,h=E}break}}}}}export{Ot as a,Pt as c,At as i};
