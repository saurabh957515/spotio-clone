import{e as It}from"./deduplicate-CP_tRvXl.js";import{H as C}from"./InterleavedLayout-DD34ctur.js";import{e as c}from"./VertexAttribute-BdZWZuT1.js";import{t as Z}from"./glUtil-DAfB0tei.js";import{cV as w,cj as tt,dv as Ot,du as j,dk as ot,da as q,dy as St,dx as At,db as dt,dg as rt,dd as ht,g8 as pt,b1 as Et,dj as wt,jm as Tt}from"./index-IeegpAPg.js";const Mt=C().vec3f(c.POSITION).u16(c.COMPONENTINDEX).freeze(),vt=C().vec2u8(c.SIDENESS).freeze();Z(vt);const H=C().vec3f(c.POSITION0).vec3f(c.POSITION1).vec2i16(c.NORMALCOMPRESSED).u16(c.COMPONENTINDEX).u8(c.VARIANTOFFSET,{glNormalized:!0}).u8(c.VARIANTSTROKE).u8(c.VARIANTEXTENSION,{glNormalized:!0}).freeze(),G=C().vec3f(c.POSITION0).vec3f(c.POSITION1).vec2i16(c.NORMALCOMPRESSED).vec2i16(c.NORMAL2COMPRESSED).u16(c.COMPONENTINDEX).u8(c.VARIANTOFFSET,{glNormalized:!0}).u8(c.VARIANTSTROKE).u8(c.VARIANTEXTENSION,{glNormalized:!0}).freeze();c.POSITION0,c.POSITION1,c.COMPONENTINDEX,c.VARIANTOFFSET,c.VARIANTSTROKE,c.VARIANTEXTENSION,c.NORMALCOMPRESSED,c.NORMAL2COMPRESSED,c.SIDENESS;let $t=class{constructor(){this.position0=w(),this.position1=w(),this.faceNormal0=w(),this.faceNormal1=w(),this.componentIndex=0,this.cosAngle=0}};const W=-1;function yt(t,n,s){const o=t.vertices.position,a=t.vertices.componentIndex,l=O.position0,h=O.position1,g=O.faceNormal0,m=O.faceNormal1,{edges:i,normals:d}=xt(t),N=i.length/4,A=n.allocate(N);let R=0;const F=N,T=s?.allocate(F);let B=0,e=0,r=0;z.length=0;for(let p=0;p<N;++p){const v=4*p;o.getVec(i.data[v],l),o.getVec(i.data[v+1],h);const x=z.pushNew();x.index=4*p,x.length=Ot(l,h)}z.sort((p,v)=>v.length-p.length);const f=new Array,u=new Array;z.forAll(({length:p,index:v})=>{const x=i.data[v],mt=i.data[v+1],et=i.data[v+2],nt=i.data[v+3],st=nt===W;if(o.getVec(x,l),o.getVec(mt,h),st){const E=3*et;j(g,d.data[E],d.data[E+1],d.data[E+2]),ot(m,g),O.componentIndex=a.get(x),O.cosAngle=q(g,m)}else{let E=3*et;if(j(g,d.data[E],d.data[E+1],d.data[E+2]),E=3*nt,j(m,d.data[E],d.data[E+1],d.data[E+2]),O.componentIndex=a.get(x),O.cosAngle=q(g,m),Rt(O,Lt))return;O.cosAngle<-.9999&&ot(m,g)}e+=p,r++,st||Pt(O,Ft)?(n.write(A,R++,O),f.push(p)):Vt(O,gt)&&(T&&s&&s.write(T,B++,O),u.push(p))});const S=new Float32Array(f.reverse()),M=new Float32Array(u.reverse()),$=T&&s?{instancesData:T.slice(0,B),lodInfo:{lengths:M}}:void 0;return{regular:{instancesData:A.slice(0,R),lodInfo:{lengths:S}},silhouette:$,averageEdgeLength:e/r}}function Pt(t,n){return t.cosAngle<n}function Rt(t,n){return t.cosAngle>n}function Vt(t,n){const s=St(t.cosAngle);return At(at,t.position1,t.position0),s*(q(dt(Dt,t.faceNormal0,t.faceNormal1),at)>0?-1:1)>n}function xt(t){const n=t.faces.length/3,s=t.faces,o=t.neighbors,a=t.vertices.position;I.length=k.length=0;for(let l=0;l<n;l++){const h=3*l,g=o[h],m=o[h+1],i=o[h+2],d=s[h],N=s[h+1],A=s[h+2];a.getVec(d,V),a.getVec(N,_),a.getVec(A,X),rt(_,_,V),rt(X,X,V),dt(V,_,X),ht(V,V),k.pushArray(V),(g===W||d<N)&&(I.push(d),I.push(N),I.push(l),I.push(g)),(m===W||N<A)&&(I.push(N),I.push(A),I.push(l),I.push(m)),(i===W||A<d)&&(I.push(A),I.push(d),I.push(l),I.push(i))}return{edges:I,normals:k}}class bt{constructor(){this.index=0,this.length=0}}const z=new tt({allocator:t=>t||new bt,deallocator:null}),I=new tt({deallocator:null}),k=new tt({deallocator:null}),O=new $t,Dt=w(),at=w(),V=w(),_=w(),X=w(),gt=pt(4),Lt=Math.cos(gt),Ct=pt(35),Ft=Math.cos(Ct);function it(t,n,s){const o=n/3,a=new Uint32Array(s+1),l=new Uint32Array(s+1),h=(e,r)=>{e<r?a[e+1]++:l[r+1]++};for(let e=0;e<o;e++){const r=t[3*e],f=t[3*e+1],u=t[3*e+2];h(r,f),h(f,u),h(u,r)}let g=0,m=0;for(let e=0;e<s;e++){const r=a[e+1],f=l[e+1];a[e+1]=g,l[e+1]=m,g+=r,m+=f}const i=new Uint32Array(6*o),d=a[s],N=(e,r,f)=>{if(e<r){const u=a[e+1]++;i[2*u]=r,i[2*u+1]=f}else{const u=l[r+1]++;i[2*d+2*u]=e,i[2*d+2*u+1]=f}};for(let e=0;e<o;e++){const r=t[3*e],f=t[3*e+1],u=t[3*e+2];N(r,f,e),N(f,u,e),N(u,r,e)}const A=(e,r)=>{const f=2*e,u=r-e;for(let S=1;S<u;S++){const M=i[f+2*S],$=i[f+2*S+1];let p=S-1;for(;p>=0&&i[f+2*p]>M;p--)i[f+2*p+2]=i[f+2*p],i[f+2*p+3]=i[f+2*p+1];i[f+2*p+2]=M,i[f+2*p+3]=$}};for(let e=0;e<s;e++)A(a[e],a[e+1]),A(d+l[e],d+l[e+1]);const R=new Int32Array(3*o),F=(e,r)=>e===t[3*r]?0:e===t[3*r+1]?1:e===t[3*r+2]?2:-1,T=(e,r)=>{const f=F(e,r);R[3*r+f]=-1},B=(e,r,f,u)=>{const S=F(e,r);R[3*r+S]=u;const M=F(f,u);R[3*u+M]=r};for(let e=0;e<s;e++){let r=a[e];const f=a[e+1];let u=l[e];const S=l[e+1];for(;r<f&&u<S;){const M=i[2*r],$=i[2*d+2*u];M===$?(B(e,i[2*r+1],$,i[2*d+2*u+1]),r++,u++):M<$?(T(e,i[2*r+1]),r++):(T($,i[2*d+2*u+1]),u++)}for(;r<f;)T(e,i[2*r+1]),r++;for(;u<S;)T(i[2*d+2*u],i[2*d+2*u+1]),u++}return R}function J(t,n,s,o,a,l=2){const h=1/(Math.abs(s)+Math.abs(o)+Math.abs(a)),g=s*h,m=o*h,i=a<=0?(g>=0?1:-1)*(1-Math.abs(m)):g,d=a<=0?(m>=0?1:-1)*(1-Math.abs(g)):m,N=n*l;t[N]=ct(i),t[N+1]=ct(d)}function ct(t){return Et(Math.round(32767*t),-32767,32767)}const K=.7;let Nt=class{updateSettings(n){this.settings=n,this._edgeHashFunction=n.reducedPrecision?zt:Bt}write(n,s,o){U.seed=this._edgeHashFunction(o);const a=U.getIntRange(0,255),l=U.getIntRange(0,this.settings.variants-1),h=U.getFloat(),g=255*(.5*_t(-(1-Math.min(h/K,1))+Math.max(0,h-K)/(1-K),1.2)+.5);n.position0.setVec(s,o.position0),n.position1.setVec(s,o.position1),n.componentIndex.set(s,o.componentIndex),n.variantOffset.set(s,a),n.variantStroke.set(s,l),n.variantExtension.set(s,g)}};const y=new Float32Array(6),P=new Uint32Array(y.buffer),L=new Uint32Array(1);function Bt(t){return y[0]=t.position0[0],y[1]=t.position0[1],y[2]=t.position0[2],y[3]=t.position1[0],y[4]=t.position1[1],y[5]=t.position1[2],L[0]=31*(31*(31*(31*(31*(166811+P[0])+P[1])+P[2])+P[3])+P[4])+P[5],L[0]}function zt(t){const n=y;n[0]=b(t.position0[0]),n[1]=b(t.position0[1]),n[2]=b(t.position0[2]),n[3]=b(t.position1[0]),n[4]=b(t.position1[1]),n[5]=b(t.position1[2]),L[0]=5381;for(let s=0;s<P.length;s++)L[0]=31*L[0]+P[s];return L[0]}const lt=1e4;function b(t){return Math.round(t*lt)/lt}function _t(t,n){return Math.abs(t)**n*Math.sign(t)}class Q{constructor(){this._commonWriter=new Nt}updateSettings(n){this._commonWriter.updateSettings(n)}allocate(n){return H.createBuffer(n)}write(n,s,o){this._commonWriter.write(n,s,o),wt(D,o.faceNormal0,o.faceNormal1),ht(D,D);const{typedBuffer:a,typedBufferStride:l}=n.normalCompressed;J(a,s,D[0],D[1],D[2],l)}}Q.Layout=H,Q.glLayout=Z(H,1);class Y{constructor(){this._commonWriter=new Nt}updateSettings(n){this._commonWriter.updateSettings(n)}allocate(n){return G.createBuffer(n)}write(n,s,o){this._commonWriter.write(n,s,o);{const{typedBuffer:a,typedBufferStride:l}=n.normalCompressed;J(a,s,o.faceNormal0[0],o.faceNormal0[1],o.faceNormal0[2],l)}{const{typedBuffer:a,typedBufferStride:l}=n.normal2Compressed;J(a,s,o.faceNormal1[0],o.faceNormal1[1],o.faceNormal1[2],l)}}}Y.Layout=G,Y.glLayout=Z(G,1);const D=w(),U=new Tt;function Jt(t){const n=Xt(t.data,t.skipDeduplicate,t.indices,t.indicesLength);return ut.updateSettings(t.writerSettings),ft.updateSettings(t.writerSettings),yt(n,ut,ft)}function Xt(t,n,s,o){if(n){const h=it(s,o,t.count);return new Ut(s,o,h,t)}const a=It(t.buffer,t.stride/4,{originalIndices:s,originalIndicesLength:o}),l=it(a.indices,o,a.uniqueCount);return{faces:a.indices,facesLength:a.indices.length,neighbors:l,vertices:Mt.createView(a.buffer)}}class Ut{constructor(n,s,o,a){this.faces=n,this.facesLength=s,this.neighbors=o,this.vertices=a}}const ut=new Q,ft=new Y,Qt=C().vec3f(c.POSITION0).vec3f(c.POSITION1),Yt=C().vec3f(c.POSITION0).vec3f(c.POSITION1).u16(c.COMPONENTINDEX);export{Mt as E,Qt as d,Jt as f,Yt as m,yt as p,Xt as u};
