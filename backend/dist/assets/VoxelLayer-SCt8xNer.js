import{dk as _e,dd as Ie,ga as Be,lq as Re,cV as ot,de as ie,hh as Te,bL as P,gQ as $,hY as N,v as i,w as r,eB as ce,x as m,bM as g,ea as rt,eq as j,ax as k,V as c,M as de,b1 as le,lr as ae,az as te,aX as Ee,ls as Ae,n as D,m as st,dg as nt,jE as lt,bi as ve,gq as at,hA as pt,dj as ut,dV as ct,dW as dt,dX as yt,dY as ht,bE as mt,bg as gt,s as be,bk as Oe,bA as W,bH as Ce,d_ as ft,d$ as vt,bI as qe,z as bt,e2 as St}from"./index-IeegpAPg.js";import{i as xt}from"./APIKeyMixin-Bid8LsFN.js";import{l as wt}from"./ArcGISService-CIVcan3f.js";import{e as Vt}from"./CustomParametersMixin-seLw3Ail.js";import{R as jt}from"./SceneService-BuBcy0V5.js";import{Z as $t}from"./FieldsIndex-1XykZMxf.js";import{d as ke,l as Nt}from"./TimeInfo-BokYbqlu.js";import{j as zt}from"./persistable-Bk0pkelO.js";import{b as Se,x as It}from"./quat-DNoYUhoj.js";import{e as me}from"./quatf64-aQ5IuZRd.js";import{p as Rt}from"./popupUtils-BWB8Dp2p.js";import"./originUtils-CPX8CCAY.js";import"./multiOriginJSONSupportUtils-C0wm8_Yw.js";import"./jsonContext-BVLwkilL.js";import"./resourceUtils-BReyVESW.js";import"./resourceUtils-Bh0-PKv2.js";import"./saveUtils-CkSwW6BN.js";import"./UnknownTimeZone-Bp45PPyc.js";import"./MD5-C9MwAd2G.js";import"./resourceExtension-B-xQ-cjP.js";import"./mat3f64-q3fE-ZOt.js";import"./vec42-DVf6basU.js";const f=ot(),De=me(),Pe=me(),Le=me(),Ue=ie(0,0,1),Tt=ie(0,1,0),At=ie(1,0,0);function J(e){_e(f,e),Ie(f,f);const t=Math.atan2(f[1],f[0]),o=Se(me(),Ue,-t);Be(f,f,o);const s=-1*Math.atan2(f[2],f[0]);return[Re(t)+270,Re(s)+90]}function ye(e,t){return Se(Pe,Ue,Te(e-270)),Se(Le,Tt,Te(t-90)),It(De,Pe,Le),_e(f,At),Be(f,f,De),Ie(f,f),[f[0],f[1],f[2]]}let I=class extends P(g){constructor(t){super(t),this.enabled=!0,this.label="",this.normal=null,this.point=null}get orientation(){if(!Array.isArray(this.normal)||this.normal.length!==3)return 0;const[t,o]=J(this.normal);return $.normalize(N(t),0,!0)}set orientation(t){const o=ye(t,this.tilt);this._set("normal",o),this._set("orientation",t)}get tilt(){if(!Array.isArray(this.normal)||this.normal.length!==3)return 0;const[t,o]=J(this.normal);return $.normalize(N(o),0,!0)}set tilt(t){const o=ye(this.orientation,t);this._set("normal",o),this._set("tilt",t)}};i([r({type:Boolean,json:{write:!0}})],I.prototype,"enabled",void 0),i([r({type:String,json:{write:!0}})],I.prototype,"label",void 0),i([r({type:Number,json:{read:!1},clonable:!1,range:{min:0,max:360}}),ce(e=>$.normalize(N(e),0,!0))],I.prototype,"orientation",null),i([r({type:Number,json:{read:!1},clonable:!1,range:{min:0,max:360}}),ce(e=>$.normalize(N(e),0,!0))],I.prototype,"tilt",null),i([r({type:[Number],json:{write:!0}})],I.prototype,"normal",void 0),i([r({type:[Number],json:{write:!0}})],I.prototype,"point",void 0),I=i([m("esri.layers.voxel.VoxelSlice")],I);const he=I;let b=class extends P(g){constructor(){super(...arguments),this.enabled=!0,this.href=null,this.id=null,this.label="",this.normal=null,this.point=null,this.sizeInPixel=null,this.slices=null,this.timeId=0,this.variableId=null}get orientation(){if(!Array.isArray(this.normal)||this.normal.length!==3)return 0;const[t,o]=J(this.normal);return $.normalize(N(t),0,!0)}get tilt(){if(!Array.isArray(this.normal)||this.normal.length!==3)return 0;const[t,o]=J(this.normal);return $.normalize(N(o),0,!0)}};i([r({type:Boolean,json:{default:!0,write:!0}})],b.prototype,"enabled",void 0),i([r({type:String,json:{origins:{service:{read:rt}},write:{enabled:!0,isRequired:!0}}}),zt({origins:["web-scene"],type:"resource",prefix:"sections",compress:!0})],b.prototype,"href",void 0),i([r({type:j,json:{write:{enabled:!0,isRequired:!0}}})],b.prototype,"id",void 0),i([r({type:String,json:{write:!0}})],b.prototype,"label",void 0),i([r({type:Number,clonable:!1,readOnly:!0,range:{min:0,max:360}})],b.prototype,"orientation",null),i([r({type:Number,clonable:!1,readOnly:!0,range:{min:0,max:360}})],b.prototype,"tilt",null),i([r({type:[Number],json:{write:{enabled:!0,isRequired:!0}}})],b.prototype,"normal",void 0),i([r({type:[Number],json:{write:{enabled:!0,isRequired:!0}}})],b.prototype,"point",void 0),i([r({type:[j],json:{write:{enabled:!0,isRequired:!0}}})],b.prototype,"sizeInPixel",void 0),i([r({type:[he],json:{write:!0}})],b.prototype,"slices",void 0),i([r({type:j,json:{default:0,write:!0}})],b.prototype,"timeId",void 0),i([r({type:j,json:{write:{enabled:!0,isRequired:!0}}})],b.prototype,"variableId",void 0),b=i([m("esri.layers.voxel.VoxelSection")],b);const xe=b;let Q=class extends g{constructor(){super(...arguments),this.diffuseFactor=.5,this.specularFactor=.5}};i([r({type:Number,range:{min:0,max:1},json:{default:.5,write:!0}})],Q.prototype,"diffuseFactor",void 0),i([r({type:Number,range:{min:0,max:1},json:{default:.5,write:!0}})],Q.prototype,"specularFactor",void 0),Q=i([m("esri.layers.voxel.VoxelSimpleShading")],Q);const We=Q;let R=class extends g{constructor(){super(...arguments),this.continuity=null,this.hasNoData=!1,this.noData=0,this.offset=0,this.scale=1,this.type=null}};i([r({type:["discrete","continuous"],json:{write:!0}})],R.prototype,"continuity",void 0),i([r({type:Boolean,json:{write:!0}})],R.prototype,"hasNoData",void 0),i([r({type:Number,json:{write:!0}})],R.prototype,"noData",void 0),i([r({type:Number,json:{write:!0}})],R.prototype,"offset",void 0),i([r({type:Number,json:{write:!0}})],R.prototype,"scale",void 0),i([r({type:String,json:{write:{enabled:!0,isRequired:!0}}})],R.prototype,"type",void 0),R=i([m("esri.layers.voxel.VoxelFormat")],R);const Fe=R;let V=class extends g{constructor(){super(...arguments),this.id=null,this.description="",this.name=null,this.originalFormat=null,this.renderingFormat=null,this.unit="",this.volumeId=0,this.type=null}};i([r({type:Number,json:{write:{enabled:!0,isRequired:!0}}})],V.prototype,"id",void 0),i([r({type:String,json:{write:!0}})],V.prototype,"description",void 0),i([r({type:String,json:{write:{enabled:!0,isRequired:!0}}})],V.prototype,"name",void 0),i([r({type:Fe,json:{write:!0}})],V.prototype,"originalFormat",void 0),i([r({type:Fe,json:{write:{enabled:!0,isRequired:!0}}})],V.prototype,"renderingFormat",void 0),i([r({type:String,json:{write:!0}})],V.prototype,"unit",void 0),i([r({type:Number,json:{write:!0}})],V.prototype,"volumeId",void 0),i([r({type:["stc-hot-spot-results","stc-cluster-outlier-results","stc-estimated-bin","generic-nearest-interpolated"],json:{write:!0}})],V.prototype,"type",void 0),V=i([m("esri.layers.voxel.VoxelVariable")],V);const qt=V;let M=class extends P(g){constructor(){super(...arguments),this.color=k.fromArray([0,0,0,0]),this.value=0,this.enabled=!0,this.label="",this.colorLocked=!1}};i([r({type:k,json:{type:[j],write:{enabled:!0,isRequired:!0}}})],M.prototype,"color",void 0),i([r({type:Number,json:{write:{enabled:!0,isRequired:!0}}})],M.prototype,"value",void 0),i([r({type:Boolean,json:{default:!0,write:!0}})],M.prototype,"enabled",void 0),i([r({type:String,json:{write:!0}})],M.prototype,"label",void 0),i([r({type:Boolean,json:{default:!1,write:!0}})],M.prototype,"colorLocked",void 0),M=i([m("esri.layers.voxel.VoxelIsosurface")],M);const Je=M;let G=class extends P(g){constructor(){super(...arguments),this.color=null,this.position=0}};i([r({type:k,json:{type:[j],write:{enabled:!0,isRequired:!0}}})],G.prototype,"color",void 0),i([r({type:Number,json:{write:{enabled:!0,isRequired:!0}}})],G.prototype,"position",void 0),G=i([m("esri.layers.voxel.VoxelColorStop")],G);const we=G;let H=class extends P(g){constructor(){super(...arguments),this.opacity=1,this.position=0}};i([r({type:Number,json:{name:"alpha",write:{enabled:!0,isRequired:!0}}})],H.prototype,"opacity",void 0),i([r({type:Number,json:{write:{enabled:!0,isRequired:!0}}})],H.prototype,"position",void 0),H=i([m("esri.layers.voxel.VoxelOpacityStop")],H);const Ve=H;let K=class extends P(g){constructor(){super(...arguments),this.enabled=!1,this.range=null}};i([r({type:Boolean,json:{default:!1,write:!0}})],K.prototype,"enabled",void 0),i([r({type:[Number],json:{write:!0}})],K.prototype,"range",void 0),K=i([m("esri.layers.voxel.VoxelRangeFilter")],K);const Dt=K;var w;(function(e){e[e.Color=1]="Color",e[e.Alpha=2]="Alpha",e[e.Both=3]="Both"})(w||(w={}));let T=class extends P(g){constructor(e){super(e),this.interpolation=null,this.stretchRange=null,this.rangeFilter=null,this._colorMapSize=256,this.colorStops=new(c.ofType(we)),this.opacityStops=new(c.ofType(Ve))}set colorStops(e){this._set("colorStops",de(e,this._get("colorStops"),c.ofType(we)))}set opacityStops(e){this._set("opacityStops",de(e,this._get("opacityStops"),c.ofType(Ve)))}getPreviousNext(e,t,o){let s=e;for(;--s>0&&t[s].type!==o&&t[s].type!==w.Both;);let n=e;const a=t.length;for(;++n<a&&t[n].type!==o&&t[n].type!==w.Both;);return[s,n]}get rasterizedTransferFunction(){const e=[];if(this.colorStops.length<2)return e;const t=[],o=[],s=1e-5;for(const p of this.colorStops){if(!p.color)return e;o.push({color:{r:p.color.r,g:p.color.g,b:p.color.b,a:Math.round(255*(1-p.color.a))},position:p.position,type:w.Color})}if(this.opacityStops.length===0)for(const p of o)t.push({color:p.color,position:p.position});else{for(const u of this.opacityStops){const d=le(u.position,0,1),h=Math.round(255*le(1-u.opacity,0,1));let v=!1;for(const y of o)if(y.type===w.Color&&Math.abs(y.position-d)<s){y.color.a=h,y.type=w.Both,v=!0;break}v||o.push({color:{r:0,g:0,b:0,a:h},position:u.position,type:w.Alpha})}o.sort((u,d)=>u.position<d.position?-1:1);const p=o.length;for(let u=0;u<p;++u){const d=o[u];if(d.type!==w.Both)if(d.type===w.Color){const[h,v]=this.getPreviousNext(u,o,w.Alpha);if(h!==-1&&v!==p){const y=(d.position-o[h].position)/(o[v].position-o[h].position);d.color.a=Math.round(ae(o[h].color.a,o[v].color.a,y))}else d.color.a=h!==-1?o[h].color.a:o[v].color.a}else{const[h,v]=this.getPreviousNext(u,o,w.Color);if(h!==-1&&v!==p){const y=(d.position-o[h].position)/(o[v].position-o[h].position),L=o[h].color,oe=o[v].color;pe.forEach(F=>{d.color[F]=Math.round(ae(L[F],oe[F],y))})}else h!==-1?pe.forEach(y=>{d.color[y]=o[h].color[y]}):pe.forEach(y=>{d.color[y]=o[v].color[y]})}}for(const u of o)t.push({color:u.color,position:u.position})}t[0].position=0,t[t.length-1].position=1;let n=0,a=1;for(let p=0;p<this._colorMapSize;++p){const u=p/this._colorMapSize;for(;u>t[a].position;)n=a++;const d=(u-t[n].position)/(t[a].position-t[n].position),h=t[n].color,v=t[a].color,y=new k;pe.forEach(L=>{y[L]=Math.round(ae(h[L],v[L],d))}),y.a=le(1-ae(h.a,v.a,d)/255,0,1),e.push(y)}return e}getColorForContinuousDataValue(e,t){const o=this.rasterizedTransferFunction;if(this.colorStops.length<2||!Array.isArray(this.stretchRange)||this.stretchRange.length<2||o.length<256)return null;let s=this.stretchRange[0],n=this.stretchRange[1];if(s>n){const p=s;s=n,n=p}e=le(e,s,n);const a=o[Math.round((e-s)/(n-s)*(this._colorMapSize-1))].clone();return t||(a.a=1),a}};i([r({type:["linear","nearest"],json:{write:!0}})],T.prototype,"interpolation",void 0),i([r({type:[Number],json:{write:{enabled:!0,isRequired:!0}}})],T.prototype,"stretchRange",void 0),i([r({type:c.ofType(we),json:{write:{enabled:!0,overridePolicy(){return{enabled:!!this.colorStops&&this.colorStops.length>0}}}}})],T.prototype,"colorStops",null),i([r({type:c.ofType(Ve),json:{read:{source:"alphaStops"},write:{enabled:!0,target:"alphaStops",overridePolicy(){return{enabled:!!this.opacityStops&&this.opacityStops.length>0}}}}})],T.prototype,"opacityStops",null),i([r({type:Dt,json:{write:!0}})],T.prototype,"rangeFilter",void 0),i([r({type:[k],clonable:!1,json:{read:!1}})],T.prototype,"rasterizedTransferFunction",null),T=i([m("esri.layers.voxel.VoxelTransferFunctionStyle")],T);const Pt=T,pe=["r","g","b"];let O=class extends P(g){constructor(){super(...arguments),this.color=k.fromArray([0,0,0,0]),this.value=0,this.enabled=!0,this.label=""}};i([r({type:k,json:{type:[j],write:{enabled:!0,isRequired:!0}}})],O.prototype,"color",void 0),i([r({type:j,json:{write:{enabled:!0,isRequired:!0}}})],O.prototype,"value",void 0),i([r({type:Boolean,json:{default:!0,write:!0}})],O.prototype,"enabled",void 0),i([r({type:String,json:{write:!0}})],O.prototype,"label",void 0),O=i([m("esri.layers.voxel.VoxelUniqueValue")],O);const Ze=O;var je;let _=je=class extends g{constructor(e){super(e),this.variableId=0,this.label="",this.transferFunction=null,this.uniqueValues=null,this.isosurfaces=null,this.uniqueValues=new(c.ofType(Ze)),this.isosurfaces=new(c.ofType(Je))}clone(){return new je({variableId:this.variableId,label:this.label,transferFunction:te(this.transferFunction),uniqueValues:te(this.uniqueValues),isosurfaces:te(this.isosurfaces)})}};i([r({type:j,json:{write:{enabled:!0,isRequired:!0}}})],_.prototype,"variableId",void 0),i([r({type:String,json:{write:!0}})],_.prototype,"label",void 0),i([r({type:Pt,json:{write:{enabled:!0,overridePolicy(){return{enabled:!this.uniqueValues||this.uniqueValues.length<1}}}}})],_.prototype,"transferFunction",void 0),i([r({type:c.ofType(Ze),json:{write:{enabled:!0,overridePolicy(){return{enabled:!!this.uniqueValues&&this.uniqueValues.length>0}}}}})],_.prototype,"uniqueValues",void 0),i([r({type:c.ofType(Je),json:{write:{enabled:!0,overridePolicy(){const e=!this.uniqueValues||this.uniqueValues.length<1,t=!!this.isosurfaces&&this.isosurfaces.length>0;return{enabled:e&&t}}}}})],_.prototype,"isosurfaces",void 0),_=je=i([m("esri.layers.voxel.VoxelVariableStyle")],_);const Xe=_;function Me(e){const t=/^(days?|hours?|minutes?|seconds?|d|h|m|s) since (\d{1,4})-(\d{1,2})-(\d{1,2})[ |T](\d{1,2}):(\d{1,2}):(\d{1,2})(\.[0-9]+)?[\s|Z]?(([+|\-|\s?])(\d{1,2}):(\d{1,2}))?$/i.exec(e);if(t==null)return{didParse:!1};const[,o,s,n,a,p,u,d,h,v,y,L,oe]=t;let F="seconds";const ge=o.charAt(0).toLowerCase();ge==="d"?F="days":ge==="h"?F="hours":ge==="m"&&(F="minutes");const Z=parseInt(s,10);if(Number.isNaN(Z))return{didParse:!1};const z=parseInt(n,10);if(Number.isNaN(z)||z<1||z>12)return{didParse:!1};const B=parseInt(a,10);if(Number.isNaN(B)||B<1||B>31)return{didParse:!1};if(z===2){const Y=Z%4==0&&(Z%100!=0||Z%400==0);if(Y&&B>29||!Y&&B>28)return{didParse:!1}}else if((z===4||z===6||z===9||z===11)&&B>30)return{didParse:!1};const re=parseInt(p,10);if(Number.isNaN(re)||re<0||re>23)return{didParse:!1};const se=parseInt(u,10);if(Number.isNaN(se)||se<0||se>59)return{didParse:!1};const ne=parseInt(d,10);if(Number.isNaN(ne)||ne<0||ne>59)return{didParse:!1};let fe=1,E=0,U=0;if(y&&(fe=y==="-"?-1:1),L){if(E=parseInt(L,10),Number.isNaN(E)||E<0)return{didParse:!1};if(E!==0){const Y=fe*E;if(Y<-12||Y>14)return{didParse:!1}}}if(oe&&(U=parseInt(oe,10),Number.isNaN(U)||U<0||U>59))return{didParse:!1};const Ge=`${Z}`.padStart(4,"0"),He=`${z}`.padStart(2,"0"),Ke=`${B}`.padStart(2,"0"),et=`${re}`.padStart(2,"0"),tt=`${se}`.padStart(2,"0"),it=`${ne}`.padStart(2,"0");let X="Z";return E===0&&U===0||(X=fe>0?"+":"-",X+=`${E}`.padStart(2,"0"),X+=":",X+=`${U}`.padStart(2,"0")),{didParse:!0,unit:F,reference:new Date(`${Ge}-${He}-${Ke}T${et}:${tt}:${it}.000${X}`)}}let ue=class extends g{constructor(){super(...arguments),this.values=null}};i([r({type:[Number],json:{write:!0}})],ue.prototype,"values",void 0),ue=i([m("esri.layers.voxel.VoxelIrregularSpacing")],ue);const Lt=ue;let ee=class extends g{constructor(){super(...arguments),this.scale=1,this.offset=0}};i([r({type:Number,json:{write:!0}})],ee.prototype,"scale",void 0),i([r({type:Number,json:{write:!0}})],ee.prototype,"offset",void 0),ee=i([m("esri.layers.voxel.VoxelRegularSpacing")],ee);const Ft=ee;let S=class extends g{constructor(){super(...arguments),this.irregularSpacing=null,this.isPositiveUp=!0,this.isWrappedDateLine=!1,this.label=null,this.name=null,this.quantity=null,this.regularSpacing=null,this.size=0,this.unit=null}get isRegular(){return(this.irregularSpacing==null||this.irregularSpacing===void 0)&&this.regularSpacing!==null}getRange(){return this.isRegular?[this.regularSpacing.offset,this.regularSpacing.offset+this.regularSpacing.scale*(this.size-1)]:Array.isArray(this.irregularSpacing?.values)&&this.irregularSpacing.values.length>1?[this.irregularSpacing.values[0],this.irregularSpacing.values[this.irregularSpacing.values.length-1]]:[0,0]}};i([r({type:Lt,json:{write:!0}})],S.prototype,"irregularSpacing",void 0),i([r({type:Boolean,json:{write:!0}})],S.prototype,"isPositiveUp",void 0),i([r({type:Boolean,json:{write:!0}})],S.prototype,"isWrappedDateLine",void 0),i([r({type:String,json:{write:!0}})],S.prototype,"label",void 0),i([r({type:String,json:{write:!0}})],S.prototype,"name",void 0),i([r({type:String,json:{write:!0}})],S.prototype,"quantity",void 0),i([r({type:Ft,json:{write:!0}})],S.prototype,"regularSpacing",void 0),i([r({type:Number,json:{write:!0}})],S.prototype,"size",void 0),i([r({type:String,json:{write:!0}})],S.prototype,"unit",void 0),i([r({type:Boolean,json:{read:!1}})],S.prototype,"isRegular",null),S=i([m("esri.layers.voxel.VoxelDimension")],S);const Mt=S;let x=class extends g{constructor(e){super(e),this.id=0,this.dimensions=null,this.spatialReference=Ee.WGS84}get zDimension(){if(!this.dimensions||!Array.isArray(this.dimensions)||this.dimensions.length!==4)return-1;for(let e=2;e<4;++e)if(this.dimensions[e].size>0)return e;return-1}get isValid(){return!!this.dimensions&&!!Array.isArray(this.dimensions)&&this.dimensions.length===4&&!(this.dimensions[0].size<1||this.dimensions[1].size<1)&&!(this.zDimension===-1||this.dimensions[this.zDimension].size<1)}get originInLayerSpace3D(){if(!this.isValid||this.volumeType==="xyt")return[0,0,0];const e=this.dimensions[0].getRange(),t=this.dimensions[1].getRange(),o=this.dimensions[2],s=o.isRegular?o.getRange():[0,o.size];return[e[0],t[0],s[0]]}get voxelSizeInLayerSpaceSigned(){if(!this.isValid||this.volumeType==="xyt")return[0,0,0];const e=this.dimensions[0].getRange(),t=this.dimensions[1].getRange(),o=this.dimensions[2],s=o.isRegular?o.getRange():[0,o.size],n=[this.sizeInVoxels[0],this.sizeInVoxels[1],this.sizeInVoxels[2]];for(let a=0;a<3;++a)n[a]<2?n[a]=1:n[a]-=1;return o.isRegular&&!o.isPositiveUp&&(n[2]*=-1),[(e[1]-e[0])/n[0],(t[1]-t[0])/n[1],(s[1]-s[0])/n[2]]}get volumeType(){if(this.isValid){const e=this.dimensions[2].size>0;let t=this.dimensions[3].size>0;if(t){const o=this.dimensions[3];t=o.quantity==="time",t&&o.unit!==null&&(t=Me(o.unit).didParse)}if(!e&&t)return"xyt";if(e&&t)return"xyzt"}return"xyz"}get sizeInVoxels(){if(!this.isValid)return[0,0,0];const e=this.zDimension;return[this.dimensions[0].size,this.dimensions[1].size,this.dimensions[e].size]}get timeStops(){if(this.volumeType!=="xyzt")return[];const e=this.dimensions[3],t=[],o=Me(e.unit);if(o.didParse){if(e.isRegular){const s=e.regularSpacing?.offset??0,n=e.regularSpacing?.scale||1;for(let a=0;a<e.size;++a){const p=s+n*a;t.push(Ae(o.reference,p,o.unit))}}else if(Array.isArray(e.irregularSpacing?.values)&&e.irregularSpacing.values.length>0)for(let s=0;s<e.irregularSpacing.values.length;++s){const n=e.irregularSpacing.values[s];t.push(Ae(o.reference,n,o.unit))}}return t}computeVoxelSpaceLocation(e){if(!this.isValid)return[0,0,0];if(this.volumeType==="xyt")return D.getLogger(this).error("computeVoxelSpacePosition cannot be used with XYT volumes."),[0,0,0];if(!st(this.spatialReference,e.spatialReference))return D.getLogger(this).error("pos argument should have the same spatial reference as the VoxelLayer."),[0,0,0];const t=ie(e.x,e.y,e.z??0);nt(t,t,this.originInLayerSpace3D),lt(t,t,this.voxelSizeInLayerSpaceSigned);const o=this.dimensions[this.zDimension];if(!o.isRegular&&Array.isArray(o.irregularSpacing?.values)&&o.irregularSpacing.values.length>1){const s=e.z??0,n=o.irregularSpacing.values,a=o.isPositiveUp?1:-1,p=n.reduce((u,d)=>Math.abs(a*d-s)<Math.abs(a*u-s)?d:u);for(let u=0;u<n.length;++u)if(n[u]===p){t[2]=u;break}}return[t[0],t[1],t[2]]}computeLayerSpaceLocation(e){if(!this.isValid)return new ve({x:0,y:0,spatialReference:this.spatialReference});const t=at(e);if(pt(t,t,this.voxelSizeInLayerSpaceSigned),ut(t,t,this.originInLayerSpace3D),this.volumeType==="xyt")return new ve({x:t[0],y:t[1],spatialReference:this.spatialReference});const o=this.dimensions[this.zDimension];return o.isRegular||Array.isArray(o.irregularSpacing?.values)&&(e[2]<0?t[2]=o.irregularSpacing.values[0]:e[2]<o.irregularSpacing.values.length?t[2]=o.irregularSpacing.values[e[2]]:t[2]=o.irregularSpacing.values[o.irregularSpacing.values.length-1],o.isPositiveUp||(t[2]*=-1)),new ve({x:t[0],y:t[1],z:t[2],spatialReference:this.spatialReference})}};i([r({type:Number,json:{write:{enabled:!0,isRequired:!0}}})],x.prototype,"id",void 0),i([r({type:[Mt],json:{write:{enabled:!0,isRequired:!0}}})],x.prototype,"dimensions",void 0),i([r({type:Ee,json:{read:{enabled:!1}}})],x.prototype,"spatialReference",void 0),i([r({type:Number,json:{read:!1}})],x.prototype,"zDimension",null),i([r({type:[Boolean],json:{read:!1}})],x.prototype,"isValid",null),i([r({type:[Number],json:{read:!1}})],x.prototype,"originInLayerSpace3D",null),i([r({type:[Number],json:{read:!1}})],x.prototype,"voxelSizeInLayerSpaceSigned",null),i([r({type:["xyz","xyzt","xyt"],json:{read:{enabled:!1}}})],x.prototype,"volumeType",null),i([r({type:[Number],json:{read:!1}})],x.prototype,"sizeInVoxels",null),i([r({type:[Date],json:{read:!1,write:!1}})],x.prototype,"timeStops",null),x=i([m("esri.layers.voxel.VoxelVolume")],x);const Ye=x;var $e;let C=$e=class extends g{constructor(){super(...arguments),this.apronWidth=1,this.brickSize=[32,32,32],this.maxLodLevel=0,this.nodeSize=[4,4,4]}isValid(){const e=new $e;return e.apronWidth===this.apronWidth&&e.maxLodLevel===this.maxLodLevel&&!!this.brickSize&&!!this.nodeSize&&!(!Array.isArray(this.brickSize)||!Array.isArray(this.nodeSize))&&this.brickSize.length===3&&this.nodeSize.length===3&&this.brickSize[0]===32&&this.brickSize[1]===32&&this.brickSize[2]===32&&this.nodeSize[0]===4&&this.nodeSize[1]===4&&this.nodeSize[2]===4}};i([r({type:Number,json:{write:{enabled:!0,isRequired:!0}}})],C.prototype,"apronWidth",void 0),i([r({type:[Number],json:{write:{enabled:!0,isRequired:!0}}})],C.prototype,"brickSize",void 0),i([r({type:Number,json:{write:{enabled:!0,isRequired:!0}}})],C.prototype,"maxLodLevel",void 0),i([r({type:[Number],json:{write:{enabled:!0,isRequired:!0}}})],C.prototype,"nodeSize",void 0),C=$e=i([m("esri.layers.voxel.VoxelVolumeIndex")],C);const _t=C;let A=class extends P(g){constructor(t){super(t),this.enabled=!0,this.label="",this.normal=null,this.point=null}get orientation(){if(!Array.isArray(this.normal)||this.normal.length!==3)return 0;const[t,o]=J(this.normal);return $.normalize(N(t),0,!0)}set orientation(t){const o=ye(t,this.tilt);this._set("normal",o),this._set("orientation",t)}get tilt(){if(!Array.isArray(this.normal)||this.normal.length!==3)return 0;const[t,o]=J(this.normal);return $.normalize(N(o),0,!0)}set tilt(t){const o=ye(this.orientation,t);this._set("normal",o),this._set("tilt",t)}};i([r({type:Boolean,json:{default:!0,write:!0}})],A.prototype,"enabled",void 0),i([r({type:String,json:{write:!0}})],A.prototype,"label",void 0),i([r({type:Number,json:{read:!1},clonable:!1,range:{min:0,max:360}}),ce(e=>$.normalize(N(e),0,!0))],A.prototype,"orientation",null),i([r({type:Number,json:{read:!1},clonable:!1,range:{min:0,max:360}}),ce(e=>$.normalize(N(e),0,!0))],A.prototype,"tilt",null),i([r({type:[Number],json:{write:!0}})],A.prototype,"normal",void 0),i([r({type:[Number],json:{write:!0}})],A.prototype,"point",void 0),A=i([m("esri.layers.voxel.VoxelDynamicSection")],A);const Ne=A;var ze;let q=ze=class extends g{constructor(e){super(e),this.volumeId=0,this.verticalExaggeration=1,this.exaggerationMode="scale-height",this.verticalOffset=0,this.slices=new(c.ofType(he)),this.dynamicSections=new(c.ofType(Ne))}set slices(e){this._set("slices",de(e,this._get("slices"),c.ofType(he)))}set dynamicSections(e){this._set("dynamicSections",de(e,this._get("dynamicSections"),c.ofType(Ne)))}clone(){return new ze({volumeId:this.volumeId,verticalExaggeration:this.verticalExaggeration,exaggerationMode:this.exaggerationMode,verticalOffset:this.verticalOffset,slices:te(this.slices),dynamicSections:te(this.dynamicSections)})}};i([r({type:j,json:{write:{enabled:!0,isRequired:!0}}})],q.prototype,"volumeId",void 0),i([r({type:Number,json:{default:1,write:!0}})],q.prototype,"verticalExaggeration",void 0),i([r({type:["scale-position","scale-height"],json:{default:"scale-height",write:!0}})],q.prototype,"exaggerationMode",void 0),i([r({type:Number,json:{default:0,write:!0}})],q.prototype,"verticalOffset",void 0),i([r({type:c.ofType(he),json:{write:{enabled:!0,overridePolicy(){return{enabled:!!this.slices&&this.slices.length>0}}}}})],q.prototype,"slices",null),i([r({type:c.ofType(Ne),json:{write:{enabled:!0,overridePolicy(){return{enabled:!!this.dynamicSections&&this.dynamicSections.length>0}}}}})],q.prototype,"dynamicSections",null),q=ze=i([m("esri.layers.voxel.VoxelVolumeStyle")],q);const Qe=q;let l=class extends jt(wt(ct(dt(yt(ht(Vt(xt(St)))))))){constructor(e){super(e),this.serviceRoot="",this.operationalLayerType="Voxel",this.legendEnabled=!0,this.title=null,this.sections=null,this.currentVariableId=0,this.volumeStyles=null,this.renderMode="volume",this.variableStyles=null,this.enableSlices=!0,this.enableSections=!0,this.enableDynamicSections=!0,this.enableIsosurfaces=!0,this.shading=new We,this.opacity=1,this.variables=new c,this.volumes=new c,this.index=null,this.minScale=0,this.maxScale=0,this.type="voxel",this.version={major:Number.NaN,minor:Number.NaN,versionString:""},this.fullExtent=null,this.popupEnabled=!1,this.popupTemplate=null,this.test=null,this.timeExtent=null,this.timeOffset=null,this.useViewTime=!0,this.volumeStyles=new(c.ofType(Qe)),this.variableStyles=new(c.ofType(Xe)),this.sections=new(c.ofType(xe))}normalizeCtorArgs(e){return e?.constantUpscaling&&(this.test={constantUpscaling:!0},delete e.constantUpscaling),e}set url(e){this._set("url",mt(e,D.getLogger(this)))}load(e){const t=e!=null?e.signal:null,o=this.loadFromPortal({supportedTypes:["Scene Service"]},e).catch(gt).then(()=>this._fetchService(t)).then(()=>this.serviceRoot=this.url);return this.addResolvingPromise(o),Promise.resolve(this)}read(e,t){super.read(e,t),t?.origin==="service"&&this.version.major<=3&&this.version.minor<=0&&!this.getAtOrigin("popupTemplate","service")&&this.setAtOrigin("popupTemplate",this.createPopupTemplate(),"service");for(const o of this.volumes)o.spatialReference=this.spatialReference}readVersion(e,t){return super.parseVersionString(e)}validateLayer(e){if(e.layerType&&e.layerType!==this.operationalLayerType)throw new be("voxel-layer:layer-type-not-supported","VoxelLayer does not support this layer type",{layerType:e.layerType});if(isNaN(this.version.major)||isNaN(this.version.minor)||this.version.major<3)throw new be("layer:service-version-not-supported","Service version is not supported.",{serviceVersion:this.version.versionString,supportedVersions:"3.x"});if(this.version.major>3)throw new be("layer:service-version-too-new","Service version is too new.",{serviceVersion:this.version.versionString,supportedVersions:"3.x"})}readFullExtent(e,t,o){if(e!=null&&typeof e=="object"){const s=Oe.fromJSON(e,o);if(s.zmin===0&&s.zmax===0&&Array.isArray(t.volumes)){const n=Ye.fromJSON(t.volumes[0]);if(n.isValid&&n.volumeType!=="xyt"){const a=n.dimensions[2];if(a.isRegular){let p=a.regularSpacing.offset,u=a.regularSpacing.offset+a.regularSpacing.scale*(a.size-1);if(p>u){const d=p;p=u,u=d}s.zmin=p,s.zmax=u}}}return s}return null}get fields(){const e=[new W({name:"Voxel.Position",alias:"Voxel Position",domain:null,editable:!1,length:128,type:"string"}),new W({name:"Voxel.CurrentVariable",alias:"Current Variable",domain:null,editable:!1,length:128,type:"string"})];for(const o of this.variables){const s=new W({name:o.name,alias:o.description,domain:null,editable:!1,length:128,type:o.renderingFormat.continuity==="discrete"?"string":"double"});e.push(s)}const t=this.getVolume(null);if(t!=null){if(t.volumeType==="xyzt"||t.volumeType==="xyt"){const o=new W({name:"Voxel.LocalTime",alias:"Local Time",domain:null,editable:!1,length:256,type:"date"});e.push(o);const s=new W({name:"Voxel.SourceTime",alias:"Source Time",domain:null,editable:!1,length:256,type:"string"});e.push(s)}if(t.volumeType!=="xyt"){const o=new W({name:"Voxel.Depth",alias:"Depth",domain:null,editable:!1,length:128,type:"double"});e.push(o)}}return e}get fieldsIndex(){return this.loaded?new $t(this.fields):null}getField(e){return this.fieldsIndex?.get(e)}get defaultPopupTemplate(){return this.createPopupTemplate()}createPopupTemplate(e){const t=this.fields;return Rt({fields:t,title:"{Voxel.Position}"},e)}getConfiguration(){const e={layerType:this.operationalLayerType,version:this.version.versionString,name:this.title,spatialReference:this.spatialReference,fullExtent:this.fullExtent,volumes:this.volumes.toJSON(),variables:this.variables.toJSON(),index:this.index?.toJSON(),sections:this.getSections(),style:{volumeStyles:this.getVolumeStyles(),currentVariableId:this.currentVariableId,renderMode:this.renderMode,variableStyles:this.getVariableStyles(),enableSections:this.enableSections,enableDynamicSections:this.enableDynamicSections,enableIsosurfaces:this.enableIsosurfaces,enableSlices:this.enableSlices,shading:this.shading}};return e.index&&this.index?.isValid()?JSON.stringify(e):""}getVariableStyle(e){let t=-1;if(t=e??this.currentVariableId,!this.variableStyles||t===-1)return null;const o=this.variableStyles.findIndex(s=>s.variableId===t);return o<0?null:this.variableStyles.at(o)}getVariable(e){let t=-1;if(t=e??this.currentVariableId,!this.variables||t===-1)return null;const o=this.variables.findIndex(s=>s.id===t);return o<0?null:this.variables.at(o)}getVolume(e){const t=this.getVariable(e);return t!=null?this.volumes.find(({id:o})=>o===t.volumeId):null}get timeInfo(){const e=this.getVolume(null);if(e?.volumeType!=="xyzt")return null;const t=e.timeStops;if(!t?.length)return null;const o=new Ce({start:t[0],end:t.at(-1)});return new ke({fullTimeExtent:o,stops:t})}getVolumeStyle(e){const t=this.getVariable(e);return t!=null?this.volumeStyles.find(({volumeId:o})=>o===t.volumeId):null}getColorForContinuousDataValue(e,t,o){const s=this.getVariable(e);if(s==null||s.renderingFormat?.continuity!=="continuous"||!this.variableStyles)return null;const n=this.variableStyles.findIndex(p=>p.variableId===e);if(n<0)return null;const a=this.variableStyles.at(n);return a?.transferFunction?a.transferFunction.getColorForContinuousDataValue(t,o):null}getSections(){const e=[];for(const t of this.sections)e.push(new xe({enabled:t.enabled,href:t.href,id:t.id,label:t.label,normal:t.normal,point:t.point,sizeInPixel:t.sizeInPixel,slices:t.slices,timeId:t.timeId,variableId:t.variableId}));return e}getVariableStyles(){const e=[];for(const t of this.variableStyles){const o=this._getVariable(t);if(o!=null){const s=t.clone();s.isosurfaces.length>4&&(s.isosurfaces=s.isosurfaces.slice(0,3),D.getLogger(this).error("A maximum of 4 isosurfaces are supported for Voxel Layers."));for(const n of s.isosurfaces)if(!n.colorLocked){const a=this.getColorForContinuousDataValue(s.variableId,n.value,!1);a===null||a.equals(n.color)||(n.color=a)}if(o.renderingFormat.continuity==="continuous")(s.transferFunction===null||s.transferFunction.colorStops.length<2)&&D.getLogger(this).error(`VoxelVariableStyle for variable ${o.id} is invalid. At least 2 color stops are required in the transferFunction for continuous Voxel Layer variables.`),s.transferFunction!==null&&(Array.isArray(s.transferFunction.stretchRange)&&s.transferFunction.stretchRange.length===2||(D.getLogger(this).error(`VoxelVariableStyle for variable ${o.id} is invalid. The stretchRange of the transferFunction for continuous Voxel Layer variables must be of the form [minimumDataValue, maximumDataValue].`),s.transferFunction.stretchRange=[0,1],s.transferFunction.colorStops.removeAll()));else if(o.renderingFormat.continuity==="discrete")if(t.uniqueValues.length===0)D.getLogger(this).error(`VoxelVariableStyle for variable ${o.id} is invalid. Unique values are required for discrete Voxel Layer variables.`);else for(const n of t.uniqueValues)n.label!==null&&n.label!==void 0||n.value===null||n.value===void 0||(n.label=n.value.toString());e.push(s)}else D.getLogger(this).error(`VoxelVariable ID=${t.variableId} doesn't exist, VoxelVariableStyle for this VoxelVariable will be ignored.`)}return e}getVolumeStyles(){const e=[];for(const t of this.volumeStyles){const o=this._getVolumeFromVolumeId(t.volumeId);if(o!=null){const s=t.clone();for(const n of s.slices)this._isPlaneValid(n,[0,1,o.zDimension],o.dimensions)||(n.enabled=!1,n.label="invalid");for(const n of s.dynamicSections)this._isPlaneValid(n,[0,1,o.zDimension],o.dimensions)||(n.enabled=!1,n.label="invalid");e.push(s)}else D.getLogger(this).error(`VoxelVolume ID=${t.volumeId} doesn't exist, VoxelVolumeStyle for this VoxelVolume will be ignored.`)}return e}_getVariable(e){const t=e.variableId;for(const o of this.variables)if(o.id===t)return o;return null}_getVolumeFromVolumeId(e){for(const t of this.volumes)if(t.id===e)return t;return null}_isPlaneValid(e,t,o){if(!e.point||!Array.isArray(e.point)||e.point.length!==3||!e.normal||!Array.isArray(e.normal)||e.normal.length!==3)return!1;const s=ie(e.normal[0],e.normal[1],e.normal[2]);return Ie(s,s),!(Math.abs(s[0])+Math.abs(s[1])+Math.abs(s[2])<1e-6)&&(e.normal[0]=s[0],e.normal[1]=s[1],e.normal[2]=s[2],!0)}};i([r({type:["Voxel"]})],l.prototype,"operationalLayerType",void 0),i([r(ft)],l.prototype,"legendEnabled",void 0),i([r({json:{write:!0}})],l.prototype,"title",void 0),i([r(vt)],l.prototype,"url",null),i([r({type:c.ofType(xe),json:{origins:{"web-scene":{name:"layerDefinition.sections",write:!0}}}})],l.prototype,"sections",void 0),i([r({type:j,json:{origins:{"web-scene":{name:"layerDefinition.style.currentVariableId",write:{enabled:!0,isRequired:!0,ignoreOrigin:!0}},service:{name:"style.currentVariableId"}}}})],l.prototype,"currentVariableId",void 0),i([r({type:c.ofType(Qe),json:{origins:{"web-scene":{name:"layerDefinition.style.volumeStyles",write:!0},service:{name:"style.volumeStyles"}}}})],l.prototype,"volumeStyles",void 0),i([r({type:["volume","surfaces"],json:{origins:{"web-scene":{name:"layerDefinition.style.renderMode",write:!0},service:{name:"style.renderMode"}}}})],l.prototype,"renderMode",void 0),i([r({type:c.ofType(Xe),json:{origins:{"web-scene":{name:"layerDefinition.style.variableStyles",write:!0},service:{name:"style.variableStyles"}}}})],l.prototype,"variableStyles",void 0),i([r({type:Boolean,json:{origins:{"web-scene":{name:"layerDefinition.style.enableSlices",write:!0},service:{name:"style.enableSlices"}}}})],l.prototype,"enableSlices",void 0),i([r({type:Boolean,json:{origins:{"web-scene":{name:"layerDefinition.style.enableSections",write:!0},service:{name:"style.enableSections"}}}})],l.prototype,"enableSections",void 0),i([r({type:Boolean,json:{origins:{"web-scene":{name:"layerDefinition.style.enableDynamicSections",write:!0},service:{name:"style.enableDynamicSections"}}}})],l.prototype,"enableDynamicSections",void 0),i([r({type:Boolean,json:{origins:{"web-scene":{name:"layerDefinition.style.enableIsosurfaces",write:!0},service:{name:"style.enableIsosurfaces"}}}})],l.prototype,"enableIsosurfaces",void 0),i([r({type:We,json:{origins:{"web-scene":{name:"layerDefinition.style.shading",write:!0},service:{name:"style.shading"}}}})],l.prototype,"shading",void 0),i([r({type:["show","hide"]})],l.prototype,"listMode",void 0),i([r({type:Number,range:{min:0,max:1},nonNullable:!0,json:{read:!1,write:!1,origins:{"web-scene":{read:!1,write:!1},"portal-item":{read:!1,write:!1}}}})],l.prototype,"opacity",void 0),i([r({type:c.ofType(qt)})],l.prototype,"variables",void 0),i([r({type:c.ofType(Ye)})],l.prototype,"volumes",void 0),i([r({type:_t})],l.prototype,"index",void 0),i([r({type:Number,json:{name:"layerDefinition.minScale",write:!0,origins:{service:{read:!1,write:!1}}}})],l.prototype,"minScale",void 0),i([r({type:Number,json:{name:"layerDefinition.maxScale",write:!0,origins:{service:{read:!1,write:!1}}}})],l.prototype,"maxScale",void 0),i([r({json:{read:!1},readOnly:!0})],l.prototype,"type",void 0),i([r({readOnly:!0,json:{name:"serviceVersion"}})],l.prototype,"version",void 0),i([qe("service","version")],l.prototype,"readVersion",null),i([r({type:Oe})],l.prototype,"fullExtent",void 0),i([qe("service","fullExtent",["fullExtent"])],l.prototype,"readFullExtent",null),i([r({readOnly:!0,clonable:!1,json:{read:!1}})],l.prototype,"fields",null),i([r({readOnly:!0})],l.prototype,"fieldsIndex",null),i([r({type:Boolean,json:{name:"disablePopup",read:{reader:(e,t)=>!t.disablePopup},write:{enabled:!0,ignoreOrigin:!0,writer(e,t,o){t[o]=!e}},origins:{"portal-item":{default:!0},"web-scene":{default:!0}}}})],l.prototype,"popupEnabled",void 0),i([r({type:bt,json:{name:"popupInfo",write:!0}})],l.prototype,"popupTemplate",void 0),i([r({readOnly:!0,json:{read:!1}})],l.prototype,"defaultPopupTemplate",null),i([r({type:ke,readOnly:!0,json:{read:!1}})],l.prototype,"timeInfo",null),i([r({type:Ce,json:{read:!1}})],l.prototype,"timeExtent",void 0),i([r({type:Nt,json:{read:!1}})],l.prototype,"timeOffset",void 0),i([r({type:Boolean,nonNullable:!0,json:{origins:{"web-scene":{name:"timeAnimation",write:!0},service:{read:!1}}}})],l.prototype,"useViewTime",void 0),l=i([m("esri.layers.VoxelLayer")],l);const Si=l;export{Si as default};