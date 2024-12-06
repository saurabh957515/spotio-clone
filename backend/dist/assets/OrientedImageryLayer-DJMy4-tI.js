import{v as t,w as e,x as S,aH as J,d6 as q,bL as O,dR as M,bM as G,bK as k,az as Q,bH as Z,s as tt,bF as et}from"./index-IeegpAPg.js";import it from"./FeatureLayer-DJbLuPts.js";import{f as ot}from"./TemporalLayer-X1Uvg484.js";import{A as X}from"./interfaces-CL2NbQte.js";import"./UniqueValueRenderer-BRA4hJF2.js";import"./ColorStop-DcLcp94M.js";import"./diffUtils-BsmLiWuX.js";import"./colorRamps-DtdPWJTS.js";import"./sizeVariableUtils-Cmcuvw-4.js";import"./visualVariableUtils-BxjHbii2.js";import"./jsonUtils-Y19K1K5D.js";import"./defaults-Ca7Ezrxv.js";import"./defaultsJSON-GKolV7NZ.js";import"./styleUtils-72oPtPHD.js";import"./jsonUtils-CKn8N5rB.js";import"./LRUCache-B9Ch9jyy.js";import"./FieldsIndex-1XykZMxf.js";import"./UnknownTimeZone-Bp45PPyc.js";import"./OverrideHelper-Beyhf6nl.js";import"./colorUtils-D0_txqzP.js";import"./vec42-DVf6basU.js";import"./vec4f64-CMoMXWBi.js";import"./utils-DyJ7tXUW.js";import"./enums-CmIX1y88.js";import"./quantizationUtils-D5PvWHeA.js";import"./heatmapUtils-gC4I9bES.js";import"./FeatureLayerBase-DBB_KLm4.js";import"./featureLayerUtils-DOfcdp_A.js";import"./LayerFloorInfo-BnKc7C4W.js";import"./Relationship-C6f1Hi7_.js";import"./serviceCapabilitiesUtils-COVZGAXJ.js";import"./editsZScale-yJOWHsnW.js";import"./queryZScale-BviGmGlG.js";import"./FeatureSet--t3TP_gY.js";import"./APIKeyMixin-Bid8LsFN.js";import"./ArcGISService-CIVcan3f.js";import"./CustomParametersMixin-seLw3Ail.js";import"./EditBusLayer-EHDpblVl.js";import"./FeatureEffectLayer-CX57XnqE.js";import"./FeatureEffect-nunlOgL-.js";import"./FeatureReductionLayer-r6s6_5Sb.js";import"./FeatureReductionSelection-C6wqS4Mb.js";import"./labelingInfo-COg3pKpK.js";import"./labelUtils-cNe8bNWP.js";import"./MD5-C9MwAd2G.js";import"./OrderedLayer-T5UFlb3L.js";import"./OrderByInfo-C9JHxA_m.js";import"./FeatureTemplate-CHC4o9Rs.js";import"./FeatureType-CupKmq3w.js";import"./fieldProperties-DFyqxTMB.js";import"./TimeInfo-BokYbqlu.js";import"./versionUtils-DrRIr99F.js";import"./styleUtils-CiawYzCZ.js";import"./popupUtils-BWB8Dp2p.js";import"./AlphaCutoff-UcccL64p.js";let v=class extends J{set horizontalWKID(o){o?q({wkid:+o})?this._set("horizontalWKID",+o):this._set("horizontalWKID",o):this._set("horizontalWKID",null)}set verticalWKID(o){o?this._set("verticalWKID",isFinite(o)&&q({wkid:+o})?+o:null):this._set("verticalWKID",null)}get isAdvanced(){const{affineTransformations:o,focalLength:r,principalOffsetPoint:s,radialDistortionCoefficients:u,tangentialDistortionCoefficients:p}=this;return o?.length>1&&!Number.isNaN(r)&&s?.length>1&&u?.length>1&&p?.length>1}};t([e({json:{write:!0}})],v.prototype,"affineTransformations",void 0),t([e({json:{write:!0}})],v.prototype,"focalLength",void 0),t([e({json:{write:!0}})],v.prototype,"principalOffsetPoint",void 0),t([e({json:{write:!0}})],v.prototype,"radialDistortionCoefficients",void 0),t([e({json:{write:!0}})],v.prototype,"tangentialDistortionCoefficients",void 0),t([e({json:{write:!0}})],v.prototype,"horizontalWKID",null),t([e({json:{write:!0}})],v.prototype,"verticalWKID",null),t([e({json:{write:!0}})],v.prototype,"x",void 0),t([e({json:{write:!0}})],v.prototype,"y",void 0),t([e({json:{write:!0}})],v.prototype,"z",void 0),t([e({json:{write:!0}})],v.prototype,"type",void 0),v=t([S("esri.layers.orientedImagery.core.CameraOrientation")],v);const F=v;let f=class extends O(M(F)){constructor(){super(...arguments),this.type=1}toString(){const{type:o,horizontalWKID:r,verticalWKID:s,x:u,y:p,z:m,heading:l,pitch:d,roll:j,affineTransformations:P,focalLength:b,principalOffsetPoint:w,radialDistortionCoefficients:N,tangentialDistortionCoefficients:x}=this,y=[o,r,s,u,p,m,l,d,j];return this.isAdvanced&&(P?.forEach(n=>y.push(n)),y.push(b),w?.forEach(n=>y.push(n)),N?.forEach(n=>y.push(n)),x?.forEach(n=>y.push(n))),y.map(n=>Number.isNaN(n)?"":n).join("|")}};t([e({json:{write:!0}})],f.prototype,"type",void 0),t([e({type:[Number],json:{write:!0}})],f.prototype,"affineTransformations",void 0),t([e({type:Number,json:{write:!0}})],f.prototype,"focalLength",void 0),t([e({type:[Number],json:{write:!0}})],f.prototype,"principalOffsetPoint",void 0),t([e({type:[Number],json:{write:!0}})],f.prototype,"radialDistortionCoefficients",void 0),t([e({type:[Number],json:{write:!0}})],f.prototype,"tangentialDistortionCoefficients",void 0),t([e({type:Number,json:{write:!0}})],f.prototype,"heading",void 0),t([e({type:Number,json:{write:!0}})],f.prototype,"pitch",void 0),t([e({type:Number,json:{write:!0}})],f.prototype,"roll",void 0),t([e({type:Number,json:{write:!0}})],f.prototype,"x",void 0),t([e({type:Number,json:{write:!0}})],f.prototype,"y",void 0),t([e({type:Number,json:{write:!0}})],f.prototype,"z",void 0),f=t([S("esri.layers.orientedImagery.core.CameraOrientationHPR")],f);const rt=f;let I=class extends O(M(F)){constructor(){super(...arguments),this.type=4}toString(){const{type:o,latitude:r,longitude:s,ellipsoidRadius:u,squaredEccentricity:p,properties:m}=this,l=`${m}`.split("|");return l.splice(1,1),`${o}|${r}|${s}|${u}|${p}|${l.join("|")}`}};t([e({json:{write:!0}})],I.prototype,"type",void 0),t([e({json:{write:!0},type:Number})],I.prototype,"latitude",void 0),t([e({json:{write:!0},type:Number})],I.prototype,"longitude",void 0),t([e({json:{write:!0},type:Number})],I.prototype,"ellipsoidRadius",void 0),t([e({json:{write:!0},type:Number})],I.prototype,"squaredEccentricity",void 0),t([e({json:{write:!0}})],I.prototype,"properties",void 0),I=t([S("esri.layers.orientedImagery.core.CameraOrientationLTP")],I);const nt=I;let h=class extends O(M(F)){constructor(){super(...arguments),this.type=2}toString(){const{type:o,horizontalWKID:r,verticalWKID:s,x:u,y:p,z:m,omega:l,phi:d,kappa:j,affineTransformations:P,focalLength:b,principalOffsetPoint:w,radialDistortionCoefficients:N,tangentialDistortionCoefficients:x}=this,y=[o,r,s,u,p,m,l,d,j];return this.isAdvanced&&(P?.forEach(n=>y.push(n)),y.push(b),w?.forEach(n=>y.push(n)),N?.forEach(n=>y.push(n)),x?.forEach(n=>y.push(n))),y.map(n=>isNaN(n)?"":n).join("|")}};t([e({json:{write:!0}})],h.prototype,"type",void 0),t([e({type:[Number],json:{write:!0}})],h.prototype,"affineTransformations",void 0),t([e({type:Number,json:{write:!0}})],h.prototype,"focalLength",void 0),t([e({type:[Number],json:{write:!0}})],h.prototype,"principalOffsetPoint",void 0),t([e({type:[Number],json:{write:!0}})],h.prototype,"radialDistortionCoefficients",void 0),t([e({type:[Number],json:{write:!0}})],h.prototype,"tangentialDistortionCoefficients",void 0),t([e({type:Number,json:{write:!0}})],h.prototype,"omega",void 0),t([e({type:Number,json:{write:!0}})],h.prototype,"phi",void 0),t([e({type:Number,json:{write:!0}})],h.prototype,"kappa",void 0),t([e({type:Number,json:{write:!0}})],h.prototype,"x",void 0),t([e({type:Number,json:{write:!0}})],h.prototype,"y",void 0),t([e({type:Number,json:{write:!0}})],h.prototype,"z",void 0),h=t([S("esri.layers.orientedImagery.core.CameraOrientationOPK")],h);const st=h;let g=class extends O(M(F)){constructor(){super(...arguments),this.type=3}get isAdvanced(){const{affineTransformations:o,focalLength:r,principalOffsetPoint:s,radialDistortionCoefficients:u,tangentialDistortionCoefficients:p}=this;return o?.length>1||!Number.isNaN(r)||s?.length>1||u?.length>1||p?.length>1}toString(){const{type:o,horizontalWKID:r,verticalWKID:s,x:u,y:p,z:m,yaw:l,pitch:d,roll:j,affineTransformations:P,focalLength:b,principalOffsetPoint:w,radialDistortionCoefficients:N,tangentialDistortionCoefficients:x}=this,y=[o,r,s,u,p,m,l,d,j];return this.isAdvanced&&(P?.forEach(n=>y.push(n)),y.push(b),w?.forEach(n=>y.push(n)),w?.forEach(n=>y.push(n)),N?.forEach(n=>y.push(n)),x?.forEach(n=>y.push(n))),y.map(n=>Number.isNaN(n)?"":n).join("|")}};t([e({json:{write:!0}})],g.prototype,"type",void 0),t([e({type:[Number],json:{write:!0}})],g.prototype,"affineTransformations",void 0),t([e({type:Number,json:{write:!0}})],g.prototype,"focalLength",void 0),t([e({type:[Number],json:{write:!0}})],g.prototype,"principalOffsetPoint",void 0),t([e({type:[Number],json:{write:!0}})],g.prototype,"radialDistortionCoefficients",void 0),t([e({type:[Number],json:{write:!0}})],g.prototype,"tangentialDistortionCoefficients",void 0),t([e({type:Number,json:{write:!0}})],g.prototype,"yaw",void 0),t([e({type:Number,json:{write:!0}})],g.prototype,"pitch",void 0),t([e({type:Number,json:{write:!0}})],g.prototype,"roll",void 0),t([e({type:Number,json:{write:!0}})],g.prototype,"x",void 0),t([e({type:Number,json:{write:!0}})],g.prototype,"y",void 0),t([e({type:Number,json:{write:!0}})],g.prototype,"z",void 0),g=t([S("esri.layers.orientedImagery.core.CameraOrientationYPR")],g);const at=g;var D;(function(i){i[i.HPR=1]="HPR",i[i.OPK=2]="OPK",i[i.YPR=3]="YPR",i[i.LTP=4]="LTP"})(D||(D={}));const R=new Map;R.set(`${D.OPK}`,{desc:"Using Omega Phi Kappa",constructor:st}),R.set(`${D.HPR}`,{desc:"Using Heading, Pitch and Roll",constructor:rt}),R.set(`${D.YPR}`,{desc:"Using Yaw, Pitch and Roll",constructor:at}),R.set(`${D.LTP}`,{desc:"Using Local Tangent Plane",constructor:nt});let $=class extends O(G){constructor(){super(...arguments),this.url=null}};t([e({type:Number,json:{write:!0}})],$.prototype,"lod",void 0),t([e({type:String,json:{write:!0}})],$.prototype,"rasterFunction",void 0),t([e({type:String,json:{write:!0}})],$.prototype,"url",void 0),$=t([S("esri.layers.orientedImagery.core.ElevationSourceDefinitions.ElevationSource")],$);let U=class extends O(G){constructor(){super(...arguments),this.constantElevation=null}};t([e({type:Number,json:{write:!0}})],U.prototype,"constantElevation",void 0),U=t([S("esri.layers.orientedImagery.core.ElevationSourceDefinitions.ConstantElevation")],U);const pt=i=>i!=null&&typeof i.constantElevation=="number";function lt(i,o,r){return o&&(i=`${o}${i}`),r&&(i+=`${r}`),i}function yt(i,o,r){let{url:s}=i;return s?(s=lt(s,o,r),new $({...i,url:s})):null}function ut(i,o,r){return i&&(pt(i)?new U(i):yt(i,o,r))}const A=new k({Minutes:"minutes",Hours:"hours",Days:"days",Weeks:"weeks",Months:"months",Years:"years"}),H=new k({Feet:"feet",Meter:"meter"}),_=new k({360:"360",Horizontal:"horizontal",Inspection:"inspection",Nadir:"nadir",Oblique:"oblique","":null}),W=new Map;function ct(i){const[o,r,s,u,p,m,l,d,j,P,b,w,N,x,y,n,z,T,K,E,C,L]=i.slice(1);return{horizontalWKID:o,verticalWKID:r,x:s,y:u,z:p,omega:m,phi:l,kappa:d,...Y([j,P,b,w,N,x],[n,z],[T,K,E],[C,L],y)}}W.set(`${D.HPR}`,mt),W.set(`${D.YPR}`,dt),W.set(`${D.OPK}`,ct),W.set(`${D.LTP}`,ft);const V=i=>{const o=i.map(r=>parseFloat(r)).filter(r=>!isNaN(r));if(o.length===i.length)return o};function Y(i,o,r,s,u){const p=V(i),m=V(o),l=V(r),d=V(s);return{affineTransformations:p?.length===6?p:void 0,focalLength:p?.length===6?parseFloat(u):void 0,principalOffsetPoint:m?.length!==2?[0,0]:m,radialDistortionCoefficients:l?.length!==3?[0,0,0]:l,tangentialDistortionCoefficients:d?.length!==2?[0,0]:d}}function mt(i){const[o,r,s,u,p,m,l,d,j,P,b,w,N,x,y,n,z,T,K,E,C,L]=i.slice(1);return{horizontalWKID:o,verticalWKID:r,x:s,y:u,z:p,heading:m,pitch:l,roll:d,...Y([j,P,b,w,N,x],[n,z],[T,K,E],[C,L],y)}}function dt(i){const[o,r,s,u,p,m,l,d,j,P,b,w,N,x,y,n,z,T,K,E,C,L]=i.slice(1);return{horizontalWKID:o,verticalWKID:r,x:s,y:u,z:p,yaw:m,pitch:l,roll:d,...Y([j,P,b,w,N,x],[n,z],[T,K,E],[C,L],y)}}function ft(i){const[o,r,s,u,p,...m]=i.slice(1),l=W.get(p),d=R.get(p)?.constructor;return!l||!d?null:{latitude:o,longitude:r,ellipsoidRadius:s,squaredEccentricity:u,properties:new d(l([p,"",...m]))}}function ht(i){return Array.isArray(i)&&i?.length===9&&!i.some(isNaN)}const gt=new Set(["demPathPrefix","demPathSuffix","depthImagePathPrefix","depthImagePathSuffix","elevationSource","horizontalMeasurementUnit","verticalMeasurementUnit","videoPathPrefix","videoPathSuffix","timeAnimation","visibilityTimeExtent"]),B=(i,o)=>!gt.has(o)&&i,vt=(i,o,r)=>{const s=`orientedImageryProperties.${i}`;return{name:s,write:o?{ignoreOrigin:!0,target:s,writer:o}:{ignoreOrigin:!0},read:r?{ignoreOrigin:!0,source:s,reader:r}:{ignoreOrigin:!0}}};function wt(i){return i.json&&(i.json.origins=i.json.origins??{},i.json.origins["web-scene"]={write:!1,read:!1}),i}function c(i,o,r,s){const{name:u,write:p,read:m}=vt(i,o,r),l={name:u,write:p,read:m,origins:{service:{name:`orientedImageryInfo.${u}`,write:o,read:r},"web-scene":{name:u,write:B(p,i),read:B(m,i)},"web-map":{name:u,write:p,read:m}}};return s&&l.origins&&(l.type=s,l.origins["web-map"].type=s,l.origins["web-scene"].type=s),l}let a=class extends it{constructor(){super(...arguments),this.cameraHeading=null,this.cameraHeight=null,this.cameraPitch=null,this.cameraRoll=null,this.coveragePercent=null,this.demPathPrefix=null,this.demPathSuffix=null,this.depthImagePathPrefix=null,this.depthImagePathSuffix=null,this.elevationSource=null,this.farDistance=null,this.geometryType="point",this.horizontalFieldOfView=null,this.horizontalMeasurementUnit=null,this.imagePathPrefix=null,this.imagePathSuffix=null,this.imageRotation=null,this.maximumDistance=null,this.nearDistance=null,this.operationalLayerType="OrientedImageryLayer",this.orientationAccuracy=null,this.orientedImageryType=null,this.supportedSourceTypes=new Set(["Oriented Imagery Layer"]),this.type="oriented-imagery",this.timeIntervalUnit="days",this.useViewTime=!0,this.verticalFieldOfView=null,this.verticalMeasurementUnit=null,this.videoPathPrefix=null,this.videoPathSuffix=null,this.visibilityTimeExtent=null}get effectiveElevationSource(){const{elevationSource:i,demPathPrefix:o,demPathSuffix:r}=this;return ut(i,o,r)}async save(i){return this._debouncedSaveOperations(X.SAVE,i)}async saveAs(i,o){return this._debouncedSaveOperations(X.SAVE_AS,o,i)}findFirstValidLayerId(i){return i.layers?.find(o=>this.supportedSourceTypes.has(o.type))?.id}_verifySource(){if(super._verifySource(),this.geometryType!=="point")throw new tt("oriented-imagery-layer:invalid-geometry-type","OrientedImageryLayer only supports point geometry type")}};t([e({type:Number,json:c("cameraHeading")})],a.prototype,"cameraHeading",void 0),t([e({type:Number,json:c("cameraHeight")})],a.prototype,"cameraHeight",void 0),t([e({type:Number,json:c("cameraPitch")})],a.prototype,"cameraPitch",void 0),t([e({type:Number,json:c("cameraRoll")})],a.prototype,"cameraRoll",void 0),t([e({type:Number,json:c("coveragePercent")})],a.prototype,"coveragePercent",void 0),t([e({type:String,json:c("demPathPrefix")})],a.prototype,"demPathPrefix",void 0),t([e({type:String,json:c("demPathSuffix")})],a.prototype,"demPathSuffix",void 0),t([e({type:String,json:c("depthImagePathPrefix")})],a.prototype,"depthImagePathPrefix",void 0),t([e({type:String,json:c("depthImagePathSuffix")})],a.prototype,"depthImagePathSuffix",void 0),t([e({type:Object,json:c("elevationSource")})],a.prototype,"elevationSource",void 0),t([e({readOnly:!0})],a.prototype,"effectiveElevationSource",null),t([e({type:Number,json:c("farDistance")})],a.prototype,"farDistance",void 0),t([e()],a.prototype,"geometryType",void 0),t([e({type:Number,json:c("horizontalFieldOfView")})],a.prototype,"horizontalFieldOfView",void 0),t([e({type:String,json:c("horizontalMeasurementUnit")})],a.prototype,"horizontalMeasurementUnit",void 0),t([e({type:String,json:c("imagePathPrefix")})],a.prototype,"imagePathPrefix",void 0),t([e({type:String,json:c("imagePathSuffix")})],a.prototype,"imagePathSuffix",void 0),t([e({type:Number,json:c("imageRotation")})],a.prototype,"imageRotation",void 0),t([e({type:Number,json:c("maximumDistance")})],a.prototype,"maximumDistance",void 0),t([e({type:Number,json:c("nearDistance")})],a.prototype,"nearDistance",void 0),t([e({type:["OrientedImageryLayer"],json:{origins:{"portal-item":{name:"layerType",write:{enabled:!0,ignoreOrigin:!0}}}}})],a.prototype,"operationalLayerType",void 0),t([e({json:{...c("orientationAccuracy",(i,o,r)=>{et(r,i.join(";"),o)},i=>{const o=i?.split(";")?.map(Number);return ht(o)?o:[0,0,0,0,0,0,0,0,0]},String)}})],a.prototype,"orientationAccuracy",void 0),t([e({json:{...c("orientedImageryType",_.write,_.read,_.jsonValues.slice(1))}})],a.prototype,"orientedImageryType",void 0),t([e({json:{read:!1},value:"oriented-imagery",readOnly:!0})],a.prototype,"type",void 0),t([e({type:A.apiValues,json:{...c("timeIntervalUnit",A.write,A.read,A.jsonValues)}})],a.prototype,"timeIntervalUnit",void 0),t([e(wt(Q(ot)))],a.prototype,"useViewTime",void 0),t([e({type:Number,json:c("verticalFieldOfView")})],a.prototype,"verticalFieldOfView",void 0),t([e({type:H.apiValues,json:{...c("verticalMeasurementUnit",H.write,H.read,H.jsonValues)}})],a.prototype,"verticalMeasurementUnit",void 0),t([e({type:String,json:c("videoPathPrefix")})],a.prototype,"videoPathPrefix",void 0),t([e({type:String,json:c("videoPathSuffix")})],a.prototype,"videoPathSuffix",void 0),t([e({type:Z,json:{origins:{"web-scene":{write:!1,read:!1}}}})],a.prototype,"visibilityTimeExtent",void 0),a=t([S("esri.layers.OrientedImageryLayer")],a);const $e=a;export{$e as default};
