const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/mediaLayerUtils-DiNrGoIi.js","assets/utils-DmG_qk4T.js","assets/index-IeegpAPg.js","assets/index-D9t-g9sQ.css","assets/originUtils-CPX8CCAY.js","assets/multiOriginJSONSupportUtils-C0wm8_Yw.js","assets/jsonContext-BVLwkilL.js","assets/saveUtils-CkSwW6BN.js","assets/resourceUtils-BReyVESW.js","assets/resourceUtils-Bh0-PKv2.js"])))=>i.map(i=>d[i]);
import{v as s,x as R,hZ as Re,es as K,n as W,w as l,bi as d,dR as Ae,aX as ae,fG as N,s as x,fN as w,kr as Ce,bI as q,bO as Y,ks as U,kt as fe,a_ as ce,fK as $,bM as We,ku as Z,bk as ue,e3 as ke,kv as ye,hh as Ge,ed as Ue,c0 as D,kw as ze,dY as _e,gf as $e,kx as Be,cr as Fe,eb as ge,ef as be,ec as Je,ee as Se,jq as pe,eg as de,ky as De,aQ as Ie,dG as Ke,cp as qe,d8 as Xe,iX as Qe,f0 as ve,kz as Ye,V as ne,it as Ze,cH as et,y as tt,bd as nt,M as ot,dr as rt,m as st,c3 as it,fD as lt,i6 as at,dT as ct,dX as ut,dV as pt,dW as dt,eU as ht,eB as mt,e2 as ft,_ as yt}from"./index-IeegpAPg.js";import{p as S,j as Oe,m as gt}from"./perspectiveUtils-Csd4o2wK.js";import{t as vt,e as oe}from"./mat3f64-q3fE-ZOt.js";import{p as Pt}from"./resourceExtension-B-xQ-cjP.js";import{o as wt}from"./BoundsStore-XOTfmvKy.js";import{A as ee}from"./interfaces-CL2NbQte.js";import"./normalizeUtilsSync-CIrM6ohr.js";import"./PooledRBush-DP3eGRuy.js";let ie=class extends Re{projectOrWarn(e,t){if(e==null)return e;const{geometry:n,pending:o}=K(e,t);return o?null:o||n?n:(W.getLogger(this).warn("geometry could not be projected to the spatial reference",{georeference:this,geometry:e,sourceSpatialReference:e.spatialReference,targetSpatialReference:t}),null)}};ie=s([R("esri.layers.support.GeoreferenceBase")],ie);const X=ie,re=oe(),p=$();let F=class extends We{};s([l({type:Number,json:{write:!0}})],F.prototype,"x",void 0),s([l({type:Number,json:{write:!0}})],F.prototype,"y",void 0),F=s([R("esri.layers.support.ControlPointsGeoreference.ControlPointJSONType")],F);let J=class extends Re{constructor(){super(...arguments),this.sourcePoint=null,this.mapPoint=null}};s([l()],J.prototype,"sourcePoint",void 0),s([l({type:d})],J.prototype,"mapPoint",void 0),J=s([R("esri.layers.support.ControlPointsGeoreference.ControlPoint")],J);let v=class extends Ae(X){constructor(e){super(e),this.controlPoints=null,this.height=0,this.type="control-points",this.width=0}readControlPoints(e,t){const n=ae.fromJSON(t.spatialReference),o=vt(...t.coefficients,1);return e.map(r=>(N(p,r.x,r.y),S(p,p,o),{sourcePoint:r,mapPoint:new d({x:p[0],y:p[1],spatialReference:n})}))}writeControlPoints(e,t,n,o){if(this.transform!=null)e!=null&&y(e[0])&&(t.controlPoints=e.map(r=>{const i=r.sourcePoint;return{x:i.x,y:i.y}}),t.spatialReference=e[0].mapPoint.spatialReference.toJSON(),t.coefficients=this.transform.slice(0,8));else{const r=new x("web-document-write:invalid-georeference","Invalid 'controlPoints', 'width', 'height' configuration. Make sure the parent media element is loaded i.e. the ImageElement or VideoElement set as 'MediaLayer.source'.",{layer:o?.layer,georeference:this});o?.messages?o.messages.push(r):W.getLogger(this).error(r.name,r.message)}}get coords(){if(this.controlPoints==null)return null;const e=this._updateTransform(re);if(e==null||!y(this.controlPoints[0]))return null;const t=this.controlPoints[0].mapPoint.spatialReference;return bt(e,this.width,this.height,t)}set coords(e){if(this.controlPoints==null||!y(this.controlPoints[0]))return;const t=this.controlPoints[0].mapPoint.spatialReference;if((e=this.projectOrWarn(e,t))==null)return;const{width:n,height:o}=this,{rings:[[r,i,a,c]]}=e,u={sourcePoint:w(0,o),mapPoint:new d({x:r[0],y:r[1],spatialReference:t})},h={sourcePoint:w(0,0),mapPoint:new d({x:i[0],y:i[1],spatialReference:t})},m={sourcePoint:w(n,0),mapPoint:new d({x:a[0],y:a[1],spatialReference:t})},g={sourcePoint:w(n,o),mapPoint:new d({x:c[0],y:c[1],spatialReference:t})};y(u)&&y(h)&&y(m)&&y(g)&&(Pe(re,u,h,m,g),this.controlPoints=this.controlPoints.map(({sourcePoint:b})=>(N(p,b.x,b.y),S(p,p,re),{sourcePoint:b,mapPoint:new d({x:p[0],y:p[1],spatialReference:t})})))}get inverseTransform(){return this.transform==null?null:Ce(oe(),this.transform)}get transform(){return this._updateTransform()}toMap(e){if(e==null||this.transform==null||this.controlPoints==null||!y(this.controlPoints[0]))return null;N(p,e.x,e.y);const t=this.controlPoints[0].mapPoint.spatialReference;return S(p,p,this.transform),new d({x:p[0],y:p[1],spatialReference:t})}toSource(e){if(e==null||this.inverseTransform==null||this.controlPoints==null||!y(this.controlPoints[0]))return null;const t=this.controlPoints[0].mapPoint.spatialReference;return e=e.normalize(),(e=K(e,t).geometry)==null?null:(N(p,e.x,e.y),S(p,p,this.inverseTransform),w(p[0],p[1]))}toSourceNormalized(e){const t=this.toSource(e);return t!=null&&(t.x/=this.width,t.y/=this.height),t}_updateTransform(e){const{controlPoints:t,width:n,height:o}=this;if(!(t!=null&&n>0&&o>0))return null;const[r,i,a,c]=t;if(!y(r))return null;const u=r.mapPoint.spatialReference,h=this._projectControlPoint(i,u),m=this._projectControlPoint(a,u),g=this._projectControlPoint(c,u);if(!h.valid||!m.valid||!g.valid||!y(h.controlPoint))return null;e==null&&(e=oe());let b=null;return b=y(m.controlPoint)&&y(g.controlPoint)?Pe(e,r,h.controlPoint,m.controlPoint,g.controlPoint):y(m.controlPoint)?Rt(e,r,h.controlPoint,m.controlPoint):xt(e,r,h.controlPoint),b.every(Ne=>Ne===0)?null:b}_projectControlPoint(e,t){if(!y(e))return{valid:!0,controlPoint:e};const{sourcePoint:n,mapPoint:o}=e,{geometry:r,pending:i}=K(o,t);return i?{valid:!1,controlPoint:null}:i||r?{valid:!0,controlPoint:{sourcePoint:n,mapPoint:r}}:(W.getLogger(this).warn("map point could not be projected to the spatial reference",{georeference:this,controlPoint:e,sourceSpatialReference:o.spatialReference,targetSpatialReference:t}),{valid:!1,controlPoint:null})}};function y(e){return e?.sourcePoint!=null&&e.mapPoint!=null}s([l({type:[J],json:{write:{allowNull:!1,isRequired:!0,target:{controlPoints:{type:[F]},coefficients:{type:[Number]},spatialReference:{type:ae}}}}})],v.prototype,"controlPoints",void 0),s([q("controlPoints")],v.prototype,"readControlPoints",null),s([Y("controlPoints")],v.prototype,"writeControlPoints",null),s([l({clonable:!1})],v.prototype,"coords",null),s([l({type:Number,nonNullable:!0,json:{write:!0}})],v.prototype,"height",void 0),s([l({readOnly:!0})],v.prototype,"inverseTransform",null),s([l({readOnly:!0})],v.prototype,"transform",null),s([l({type:Number,nonNullable:!0,json:{write:!0}})],v.prototype,"width",void 0),v=s([R("esri.layers.support.ControlPointsGeoreference")],v);const I=$(),O=$(),A=$(),j=$(),E=$(),M=$(),C=$(),V=$(),te=Math.PI/2;function L(e,t,n){N(e,n.sourcePoint.x,n.sourcePoint.y),N(t,n.mapPoint.x,n.mapPoint.y)}function xt(e,t,n){return L(I,E,t),L(O,M,n),U(A,O,I,te),U(j,I,O,te),U(C,M,E,-te),U(V,E,M,-te),he(e,I,O,A,j,E,M,C,V)}function Rt(e,t,n,o){return L(I,E,t),L(O,M,n),L(A,C,o),fe(j,I,O,.5),U(j,A,j,Math.PI),fe(V,E,M,.5),U(V,C,V,Math.PI),he(e,I,O,A,j,E,M,C,V)}function Pe(e,t,n,o,r){return L(I,E,t),L(O,M,n),L(A,C,o),L(j,V,r),he(e,I,O,A,j,E,M,C,V)}const _t=new Array(8).fill(0),$t=new Array(8).fill(0);function we(e,t,n,o,r){return e[0]=t[0],e[1]=t[1],e[2]=n[0],e[3]=n[1],e[4]=o[0],e[5]=o[1],e[6]=r[0],e[7]=r[1],e}function he(e,t,n,o,r,i,a,c,u){return Oe(e,we(_t,t,n,o,r),we($t,i,a,c,u))}function bt(e,t,n,o){const r=Z(0,n),i=Z(0,0),a=Z(t,0),c=Z(t,n);return S(r,r,e),S(i,i,e),S(a,a,e),S(c,c,e),new ce({rings:[[r,i,a,c,r]],spatialReference:o})}const Q=v,z=$();let T=class extends X{constructor(e){super(e),this.bottomLeft=null,this.bottomRight=null,this.topLeft=null,this.topRight=null,this.type="corners"}get coords(){let{topLeft:e,topRight:t,bottomLeft:n,bottomRight:o}=this;if(e==null||t==null||n==null||o==null)return null;const r=e.spatialReference;return t=this.projectOrWarn(t,r),n=this.projectOrWarn(n,r),o=this.projectOrWarn(o,r),t==null||n==null||o==null?null:new ce({rings:[[[n.x,n.y],[e.x,e.y],[t.x,t.y],[o.x,o.y],[n.x,n.y]]],spatialReference:r})}set coords(e){const{topLeft:t}=this;if(t==null)return;const n=t.spatialReference;if((e=this.projectOrWarn(e,n))==null)return;const{rings:[[o,r,i,a]]}=e;this.bottomLeft=new d({x:o[0],y:o[1],spatialReference:n}),this.topLeft=new d({x:r[0],y:r[1],spatialReference:n}),this.topRight=new d({x:i[0],y:i[1],spatialReference:n}),this.bottomRight=new d({x:a[0],y:a[1],spatialReference:n})}toSourceNormalized(e){const{topLeft:t,topRight:n,bottomRight:o,bottomLeft:r}=this;if(e==null||t==null||n==null||o==null||r==null)return null;const i=t.spatialReference;e=e.normalize();const a=K(e,i).geometry;if(a==null)return null;N(z,a.x,a.y);const c=Oe(oe(),[t.x,t.y,r.x,r.y,n.x,n.y,o.x,o.y],[0,0,0,1,1,0,1,1]);return S(z,z,c),w(z[0],z[1])}};s([l({clonable:!1})],T.prototype,"coords",null),s([l({type:d})],T.prototype,"bottomLeft",void 0),s([l({type:d})],T.prototype,"bottomRight",void 0),s([l({type:d})],T.prototype,"topLeft",void 0),s([l({type:d})],T.prototype,"topRight",void 0),T=s([R("esri.layers.support.CornersGeoreference")],T);const St=T;let k=class extends X{constructor(e){super(e),this.extent=null,this.rotation=0,this.type="extent-and-rotation"}get coords(){if(this.extent==null)return null;const{xmin:e,ymin:t,xmax:n,ymax:o,spatialReference:r}=this.extent;let i;if(this.rotation){const{x:a,y:c}=this.extent.center,u=se(a,c,this.rotation);i=[u(e,t),u(e,o),u(n,o),u(n,t)],i.push(i[0])}else i=[[e,t],[e,o],[n,o],[n,t],[e,t]];return new ce({rings:[i],spatialReference:r})}set coords(e){if(e==null||this.extent==null)return;const t=this.extent.spatialReference;if(e=this.projectOrWarn(e,t),e?.extent==null)return;const{rings:[[n,o,r]],extent:{center:{x:i,y:a}}}=e,c=ke(Math.PI/2-Math.atan2(o[1]-n[1],o[0]-n[0])),u=se(i,a,-c),[h,m]=u(n[0],n[1]),[g,b]=u(r[0],r[1]);this.extent=new ue({xmin:h,ymin:m,xmax:g,ymax:b,spatialReference:t}),this.rotation=c}toSourceNormalized(e){const{extent:t,rotation:n}=this;if(e==null||t==null)return null;const{xmin:o,ymin:r,xmax:i,ymax:a,center:c,spatialReference:u}=t;e=e.normalize();const h=K(e,u).geometry;if(h==null)return null;let m=h.x,g=h.y;return n&&([m,g]=se(c.x,c.y,-n)(m,g)),w(ye(m,o,i,0,1),ye(g,a,r,0,1))}};function se(e,t,n){const o=Ge(n),r=Math.cos(o),i=Math.sin(o);return(a,c)=>[r*(a-e)+i*(c-t)+e,r*(c-t)-i*(a-e)+t]}s([l({clonable:!1})],k.prototype,"coords",null),s([l({type:ue})],k.prototype,"extent",void 0),s([l({type:Number})],k.prototype,"rotation",void 0),k=s([R("esri.layers.support.ExtentAndRotationGeoreference")],k);const It=k;function Ot(e){return e?.type==="media"}function Ee(e,t){const n=Ue(t);return Ot(e)&&!!e.portalItem&&n!=null&&n>D.PORTAL_ITEM}function Et(e,t,n){if(!e||e.type==="control-points")return e;const{coords:o}=e;if(o?.rings[0]?.length!==5)return null;const[r,i,a,c]=o.rings[0],{spatialReference:u}=o;return new Q({controlPoints:[{mapPoint:new d({x:r[0],y:r[1],spatialReference:u}),sourcePoint:w(0,n)},{mapPoint:new d({x:i[0],y:i[1],spatialReference:u}),sourcePoint:w(0,0)},{mapPoint:new d({x:a[0],y:a[1],spatialReference:u}),sourcePoint:w(t,0)},{mapPoint:new d({x:c[0],y:c[1],spatialReference:u}),sourcePoint:w(t,n)}],width:t,height:n})}function Me(e,t,n){return{enabled:!Ee(n?.layer,n?.origin),ignoreOrigin:!0}}const Le={json:{name:"url",type:String,write:{overridePolicy:Me}}},Te={readOnly:!0,json:{read:!1,write:{target:"mediaType",overridePolicy:Me}}},Mt={types:{key:"type",base:X,typeMap:{"control-points":Q,corners:St,"extent-and-rotation":It}},json:{types:{key:"type",base:X,typeMap:{"control-points":Q}},write:{overridePolicy:()=>({enabled:!0,ignoreOrigin:!0})}}};let H=class extends ze(_e($e)){constructor(e){super(e),this.georeference=null,this.opacity=1}readGeoreference(e){return Q.fromJSON(e)}writeGeoreference(e,t,n,o){const r=o?.resources?.pendingOperations,i=()=>{const a=Et(this.georeference,this.contentWidth,this.contentHeight);if(a){if(e.type!=="control-points"&&W.getLogger(this).warn(`only georeference of type 'control-points' may be persisted. The georeference of type '${e.type}' has been automatically converted.`),a.controlPoints?.length!==4&&o?.messages)return void o.messages.push(new x("property:unsupported","only 'control-points' georeference with 4 control points may be persisted."));t[n]=a.write({},o)}};if(e.type!=="control-points"&&!this.loaded&&r)return t[n]={},void r.push(this.load().then(i));i()}get contentWidth(){return 0}get contentHeight(){return 0}toSource(e){const{georeference:t,contentWidth:n,contentHeight:o}=this;if(e==null||t==null||n===0||o===0)return null;const r=t.toSourceNormalized(e);return r==null?null:(r.x*=n,r.y*=o,r)}};s([l(Mt)],H.prototype,"georeference",void 0),s([q("georeference")],H.prototype,"readGeoreference",null),s([Y("georeference")],H.prototype,"writeGeoreference",null),s([l({json:{read:!1,write:!1}})],H.prototype,"opacity",void 0),H=s([R("esri.layers.support.MediaElementBase")],H);const me=H;let P=class extends me{constructor(t){super(t),this.animationOptions=null,this.content=null,this.image=null,this.type="image",this.image=null}load(){const t=this.image;if(typeof t=="string"){const n=Be(t).then(o=>{this._set("content",o)});this.addResolvingPromise(n)}else if(t instanceof HTMLImageElement){const n=t.decode().then(()=>{this._set("content",t)});this.addResolvingPromise(n)}else t?this._set("content",t):this.addResolvingPromise(Promise.reject(new x("image-element:invalid-image-type","Invalid image type",{image:t})));return Promise.resolve(this)}get contentWidth(){return this.content==null?0:this.content instanceof HTMLImageElement?this.content.naturalWidth:this.content.width}get contentHeight(){return this.content==null?0:this.content instanceof HTMLImageElement?this.content.naturalHeight:this.content.height}readImage(t,n,o){return Fe(n.url,o)}writeImage(t,n,o,r){if(t==null)return;const i=r?.portalItem,a=r?.resources;if(!i||!a)return void(typeof t=="string"&&(n[o]=ge(t,r)));const c=Lt(t)?t:null;if(c){if(be(c)==null)return void(n[o]=c);const u=ge(c,{...r,verifyItemRelativeUrls:r?.verifyItemRelativeUrls?{writtenUrls:r.verifyItemRelativeUrls.writtenUrls,rootPath:void 0}:void 0},Je.NO);if(i&&u&&!Se(u))return a.toKeep.push({resource:i.resourceFromPath(u),compress:!1}),void(n[o]=u)}n[o]="<pending>",a.pendingOperations.push(Tt(t).then(u=>{const h=Vt(u,i);n[o]=h.itemRelativeUrl,a.toAdd.push({resource:h,content:{type:"blob",blob:u},compress:!1,finish:m=>{this.image=m.url}})}))}};s([l()],P.prototype,"animationOptions",void 0),s([l({readOnly:!0})],P.prototype,"content",void 0),s([l({readOnly:!0})],P.prototype,"contentWidth",null),s([l({readOnly:!0})],P.prototype,"contentHeight",null),s([l(Le)],P.prototype,"image",void 0),s([q("image",["url"])],P.prototype,"readImage",null),s([Y("image")],P.prototype,"writeImage",null),s([l(Te)],P.prototype,"type",void 0),P=s([R("esri.layers.support.ImageElement")],P);const je=P;function Lt(e){return typeof e=="string"&&!pe(e)&&!de(e)}async function Tt(e){return typeof e=="string"?pe(e)?De(e):(await Ie(e,{responseType:"blob"})).data:new Promise(t=>jt(e).toBlob(t))}function jt(e){if(e instanceof HTMLCanvasElement)return e;const t=e instanceof HTMLImageElement?e.naturalWidth:e.width,n=e instanceof HTMLImageElement?e.naturalHeight:e.height,o=document.createElement("canvas"),r=o.getContext("2d");return o.width=t,o.height=n,e instanceof HTMLImageElement?r.drawImage(e,0,0,e.width,e.height):e instanceof ImageData&&r.putImageData(e,0,0),o}function Vt(e,t){const n=Ke(),o=`${qe("media",n)}.${Pt({type:"blob",blob:e})}`;return t.resourceFromPath(o)}let _=class extends me{constructor(e){super(e),this.autoplay=!0,this.content=null,this.type="video"}load(){const e=this.video;return typeof e=="string"?this.addResolvingPromise(this._preProcessVideoUrl(e).then(t=>{const n=document.createElement("video");return n.src=t,n.crossOrigin="anonymous",n.autoplay=!0,n.muted=!0,n.loop=!0,n.playsInline=!0,this._loadVideo(n).then(()=>{this._set("content",n)})})):e instanceof HTMLVideoElement?this.addResolvingPromise(this._loadVideo(e).then(()=>{this._set("content",e)})):this.addResolvingPromise(Promise.reject(new x("video-element:invalid-video-type","Invalid video type",{video:e}))),Promise.resolve(this)}get contentWidth(){return this.content?.videoWidth??0}get contentHeight(){return this.content?.videoHeight??0}set video(e){this.loadStatus==="not-loaded"?this._set("video",e):W.getLogger(this).error("#video","video cannot be changed after the element is loaded.")}writeVideo(e,t,n,o){if(!e)return void(o?.messages&&o.messages.push(new x("video-element:unsupported-video","video source is missing")));const r=Ht(e)?e:null;if(!r)return void(o?.messages&&o.messages.push(new x("video-element:unsupported-video","video source must be an absolute url")));!Se(r)&&o?.blockedRelativeUrls&&o.blockedRelativeUrls.push(r);const i=Xe(r);be(i)?o?.messages&&o.messages.push(new x("video-element:unsupported-video","video source cannot be an item resource")):t[n]=i}async _preProcessVideoUrl(e){if(Qe(e))return ve(e);try{return await Ie(e,{method:"head"}),e}catch{return ve(e,!0)}}_loadVideo(e){return new Promise((t,n)=>{const o=Ye(e,"canplay",()=>{this.removeHandles("canplay"),this.autoplay?e.play().then(t,n):t()});this.addHandles(o,"canplay"),e.crossOrigin!=="anonymous"&&(e.crossOrigin="anonymous",de(e.src)||(e.src=e.src))})}};s([l()],_.prototype,"autoplay",void 0),s([l({readOnly:!0})],_.prototype,"content",void 0),s([l({readOnly:!0})],_.prototype,"contentWidth",null),s([l({readOnly:!0})],_.prototype,"contentHeight",null),s([l(Le)],_.prototype,"video",null),s([Y("video")],_.prototype,"writeVideo",null),s([l(Te)],_.prototype,"type",void 0),_=s([R("esri.layers.support.VideoElement")],_);const Ve=_;function Ht(e){return typeof e=="string"&&!pe(e)&&!de(e)}const Nt={key:"type",defaultKeyValue:"image",base:me,typeMap:{image:je,video:Ve}},xe=ne.ofType(Nt);let G=class extends $e.LoadableMixin(Ze(et.EventedAccessor)){constructor(e){super(e),this._index=new wt,this._elementViewsMap=new Map,this._elementsIndexes=new Map,this._elementsChangedHandler=t=>{for(const o of t.removed){const r=this._elementViewsMap.get(o);this._elementViewsMap.delete(o),this._index.delete(r),this.removeHandles(r),r.destroy(),this.notifyChange("fullExtent")}const{spatialReference:n}=this;for(const o of t.added){if(this._elementViewsMap.get(o))continue;const r=new gt({spatialReference:n,element:o});this._elementViewsMap.set(o,r);const i=tt(()=>r.coords,()=>this._updateIndexForElement(r,!1));this._updateIndexForElement(r,!0),this.addHandles(i,r)}this._elementsIndexes.clear(),this.elements.forEach((o,r)=>this._elementsIndexes.set(o,r)),this.emit("refresh")},this.elements=new xe}async load(e){if(nt(e),!this.spatialReference){const t=this.elements.find(n=>n.georeference?.coords!=null);this._set("spatialReference",t?t.georeference.coords.spatialReference:ae.WGS84)}return this._elementsChangedHandler({added:this.elements.items,removed:[]}),this.addHandles(this.elements.on("change",this._elementsChangedHandler)),this}destroy(){this._index.clear(),this._elementViewsMap.clear(),this._elementsIndexes.clear()}set elements(e){this._set("elements",ot(e,this._get("elements"),xe))}get fullExtent(){if(this.loadStatus==="not-loaded")return null;const e=this._index.fullBounds;return e==null?null:new ue({xmin:e[0],ymin:e[1],xmax:e[2],ymax:e[3],spatialReference:this.spatialReference})}set spatialReference(e){this.loadStatus==="not-loaded"?this._set("spatialReference",e):W.getLogger(this).error("#spatialReference","spatialReference cannot be changed after the source is loaded.")}async queryElements(e,t){await this.load(),await rt(e.spatialReference,this.spatialReference,null,t);const n=st(e.spatialReference,this.spatialReference)?e:it(e,this.spatialReference);if(!n)return[];const o=n.normalize(),r=[];for(const i of o)this._index.forEachInBounds(lt(i),({normalizedCoords:a,element:c})=>{a!=null&&at(i,a)&&r.push(c)});return r.sort((i,a)=>this._elementsIndexes.get(i)-this._elementsIndexes.get(a)),r}hasElement(e){return this.elements.includes(e)}_updateIndexForElement(e,t){const n=e.normalizedBounds,o=this._index.has(e),r=n!=null;this._index.delete(e),r&&this._index.set(e,n),this.notifyChange("fullExtent"),t||(o!==r?this.emit("refresh"):this.emit("change",{element:e.element}))}};s([l()],G.prototype,"elements",null),s([l({readOnly:!0})],G.prototype,"fullExtent",null),s([l()],G.prototype,"spatialReference",null),G=s([R("esri.layers.support.LocalMediaElementSource")],G);const B=G;function le(e){return typeof e=="object"&&e!=null&&"type"in e}function He(e){return le(e)&&(e.type==="image"||e.type==="video")}let f=class extends ct(ut(pt(dt(_e(ft))))){constructor(e){super(e),this.effectiveSource=null,this.georeference=null,this.copyright=null,this.operationalLayerType="MediaLayer",this.spatialReference=null,this.type="media",this._debouncedSaveOperations=ht(async(t,n,o)=>{const{save:r,saveAs:i}=await yt(()=>import("./mediaLayerUtils-DiNrGoIi.js"),__vite__mapDeps([0,1,2,3,4,5,6,7,8,9]));switch(t){case ee.SAVE:return r(this,n);case ee.SAVE_AS:return i(this,o,n)}}),this.source=new B}load(e){return this.addResolvingPromise(this._doLoad(e)),Promise.resolve(this)}async _doLoad(e){await this.loadFromPortal({supportedTypes:["Media Layer"]},e);let t=this.source;if(!t)throw new x("media-layer:source-missing","Set 'MediaLayer.source' before loading the layer.");const n=this._getSourceOverride(t,this.georeference);n&&(this.setAtOrigin("source",n,"web-map"),this.setAtOrigin("source",n,"web-scene"),t=n);const o=le(t)?new B({elements:new ne([t])}):t;this._set("effectiveSource",o),this.spatialReference&&(o.spatialReference=this.spatialReference),await o.load(e),this.spatialReference=o.spatialReference}destroy(){this.effectiveSource?.destroy(),this.effectiveSource!==this.source&&this.source?.destroy()}readGeoreference(e,t){return e&&"itemId"in t&&t.itemId?e:void 0}get fullExtent(){return this.loaded?this.effectiveSource.fullExtent:null}set source(e){this.loadStatus!=="loaded"&&this.loadStatus!=="failed"?this._set("source",e):W.getLogger(this).error("#source","source cannot be changed after the layer is loaded.")}castSource(e){return e?Array.isArray(e)?new B({elements:new ne(e)}):e instanceof ne?new B({elements:e}):e:null}readSource(e,t,n){if("itemId"in t&&t.itemId)return;const o=this._createSource(t);return o?.read(t,n),o}writeSource(e,t,n,o){if(e&&e instanceof B){const r=e.elements.length;if(r!==1)return void(o?.messages&&o.messages.push(new x("media-layer:unsupported-source",`local media element source can only be persisted if it contains exactly one ImageElement, but it has ${r}.`)));e=e.elements.at(0)}He(e)?e.write(t,o):o?.messages&&(e?o.messages.push(new x("media-layer:unsupported-source","only media elements of type 'ImageElement' or 'VideoElement' can be persisted")):o.messages.push(new x("media-layer:unsupported-source","the media layer is missing a source")))}async save(e){return this._debouncedSaveOperations(ee.SAVE,e)}async saveAs(e,t){return this._debouncedSaveOperations(ee.SAVE_AS,t,e)}_createSource(e){if("mediaType"in e)switch(e.mediaType){case"image":return new je;case"video":return new Ve}return null}_getSourceOverride(e,t){if(le(e)&&this.originIdOf("source")===D.PORTAL_ITEM&&t&&(this.originIdOf("georeference")===D.WEB_MAP||this.originIdOf("georeference")===D.WEB_SCENE)){const n=e.toJSON(),o=this._createSource(n);return o.read({...n},{origin:"portal-item"}),o.read({georeference:t},{origin:"web-map"}),o.read({georeference:t},{origin:"web-scene"}),o}return null}};s([l({readOnly:!0})],f.prototype,"effectiveSource",void 0),s([l({readOnly:!0,json:{read:!1,write:!1,origins:{"web-document":{read:!0}}}})],f.prototype,"georeference",void 0),s([q("web-document","georeference")],f.prototype,"readGeoreference",null),s([l({type:String})],f.prototype,"copyright",void 0),s([l({readOnly:!0})],f.prototype,"fullExtent",null),s([l({type:["MediaLayer"]})],f.prototype,"operationalLayerType",void 0),s([l({type:["show","hide"]})],f.prototype,"listMode",void 0),s([l({nonNullable:!0,json:{write:{enabled:!0,allowNull:!1,target:{url:{type:String},mediaType:{type:["image","video"]},georeference:{type:Q}},overridePolicy(e,t,n){return{enabled:!0,allowNull:!1,ignoreOrigin:Ee(this,n?.origin)&&He(e)&&!!e.georeference&&e.originIdOf("georeference")>D.PORTAL_ITEM}}}}})],f.prototype,"source",null),s([mt("source")],f.prototype,"castSource",null),s([q("source",["url"])],f.prototype,"readSource",null),s([Y("source")],f.prototype,"writeSource",null),s([l()],f.prototype,"spatialReference",void 0),s([l({readOnly:!0})],f.prototype,"type",void 0),f=s([R("esri.layers.MediaLayer")],f);const Dt=f;export{Dt as default};
