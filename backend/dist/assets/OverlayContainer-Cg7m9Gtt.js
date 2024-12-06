import{v as r,hd as D,he as Q,hf as E,A as J,a4 as G,gL as V,fA as X,O as Y,gM as Z,ft as tt,fy as et,fu as st,fv as ot,gN as it,fw as rt,b4 as nt,hg as at,hh as L}from"./index-IeegpAPg.js";import{r as pt}from"./vec3f32-nZdmKIgz.js";import{n as dt}from"./WGLContainer-CL3kB6Gn.js";import{t as ht,a as q,i as lt}from"./FeatureCommandQueue-CcrO3amX.js";import{h as B,g as a,m as N,I as ct,C as g,P as U,a as ut,j as P,S as ft,b as vt,c as mt,G as xt,H as yt,l as gt,v as wt,w as _t,e as Mt}from"./UpdateTracking2D-gAJU1rbE.js";class I extends ct{}r([B(0,g)],I.prototype,"pos",void 0),r([B(1,g)],I.prototype,"uv",void 0);class $t extends wt{}class W extends U{}r([a(ut)],W.prototype,"dvs",void 0);class m extends U{}r([a(g)],m.prototype,"perspective",void 0),r([a(g)],m.prototype,"texSize",void 0),r([a(P)],m.prototype,"wrapAroundShift",void 0),r([a(P)],m.prototype,"opacity",void 0),r([a(ft)],m.prototype,"texture",void 0);class y extends vt{vertex(e){const t=e.uv.divide(this.config.texSize),s=new P(1).add(mt(t,this.config.perspective)),o=new xt(e.pos.add(new g(this.config.wrapAroundShift,0)),1),i=this.transform.dvs.multiply(o);return{uv:t,glPosition:new yt(i.xy.multiply(s),0,s)}}fragment(e){const t=gt(this.config.texture,e.uv).multiply(this.config.opacity),s=new _t;return s.glFragColor=t,s}}r([a(W)],y.prototype,"transform",void 0),r([a(m)],y.prototype,"config",void 0),r([D(0,N(I))],y.prototype,"vertex",null),r([D(0,N($t))],y.prototype,"fragment",null);let St=class extends ht{constructor(){super(...arguments),this.type=Mt.Overlay,this._mesh=null,this.shaders={overlay:new y}}render(e,t){const{context:s,painter:o}=e,i=this._getMesh(e,t);o.setPipelineState(q);const{isWrapAround:p,wrapAroundShift:c}=t.config,u={...t.config,wrapAroundShift:0},f={shader:this.shaders.overlay,uniforms:{transform:t.transform,config:u},defines:null,optionalAttributes:null,useComputeBuffer:!1};o.setPipelineState({...q,stencil:{write:!1,test:{compare:Q.EQUAL,op:{fail:E.KEEP,zFail:E.KEEP,zPass:E.REPLACE},ref:0,mask:255}}}),o.submitDrawMeshUntyped(s,f,i),p&&(u.wrapAroundShift=c,o.submitDrawMeshUntyped(s,f,i))}shutdown(){J(this._mesh)}_getMesh(e,t){const{context:s}=e;if(this._mesh){const o=this._mesh.vertexBuffers.get("positions");if(!o)throw new Error("Buffer not found");o.setData(t.position)}else{const o=t.index!=null?t.index.length:t.position.length/2;this._mesh=new lt(s,{vertex:{positions:t.position,uvs:t.tex},index:t.index!=null?{index:t.index}:void 0,groups:[{attributes:[{name:"pos",count:2,type:G.FLOAT,location:0,vertex:"positions",stride:8,offset:0},{name:"tex",count:2,type:G.UNSIGNED_SHORT,location:1,vertex:"uvs",stride:4,offset:0}],index:t.index!=null?"index":void 0,primitive:V.TRIANGLE_STRIP}],parts:[{group:0,start:0,count:o}]})}return this._mesh}};class It extends dt{constructor(){super(...arguments),this._viewStateId=-1,this._dvsMat3=X(),this._overlayTechnique=new St}get dvsMat3(){return this._dvsMat3}beforeRender(e){this._updateMatrices(e),this._updateOverlays(e,this.children);for(const t of this.children)t.beforeRender(e)}doRender(e){if(e.drawPhase!==Y.MAP||!this.visible)return;super.doRender(e);const t=this._overlayTechnique;for(const s of this.children)s.draw(e,t)}onDetach(){this._overlayTechnique.shutdown()}_updateMatrices(e){const{state:t}=e,{id:s,size:o,pixelRatio:i,resolution:p,rotation:c,viewpoint:u,displayMat3:f}=t;if(this._viewStateId===s)return;const w=L(c),d=i*o[0],v=i*o[1];this._localOrigin=u.targetGeometry.clone();const{x,y:$}=this._localOrigin,_=Z(x,t.spatialReference);this._localOrigin.x=_,this._localOrigin.y=$;const S=p*d,b=p*v,n=tt(this._dvsMat3);et(n,n,f),st(n,n,ot(d/2,v/2)),it(n,n,pt(d/S,-v/b,1)),rt(n,n,-w),this._viewStateId=s}_updateOverlays(e,t){const{state:s}=e,{rotation:o,spatialReference:i,worldScreenWidth:p,size:c,viewpoint:u}=s,f=this._localOrigin;let w,d=0;const v=nt(i);if(v&&i.isWrappable){const x=c[0],$=c[1],_=L(o),S=Math.abs(Math.cos(_)),b=Math.abs(Math.sin(_)),n=Math.round(x*S+$*b),[T,j]=v.valid,h=at(i),{x:z,y:F}=u.targetGeometry,H=[z,F],A=[0,0];s.toScreen(A,H);const M=[0,0];let O;O=n>p?.5*p:.5*n;const C=Math.floor((z+.5*h)/h),K=T+C*h,k=j+C*h,R=[A[0]+O,0];s.toMap(M,R),M[0]>k&&(d=h),R[0]=A[0]-O,s.toMap(M,R),M[0]<K&&(d=-h),w={worldWidth:h,xBounds:[T,j]}}for(const x of t)x.updateDrawCoords(f,d,i,w)}}export{It as u};