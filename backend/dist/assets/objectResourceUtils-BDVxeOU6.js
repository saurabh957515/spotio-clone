const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/loader-Clnp8FhV.js","assets/index-IeegpAPg.js","assets/index-D9t-g9sQ.css","assets/mat4f64-CSKppSlJ.js","assets/quat-DNoYUhoj.js","assets/mat3f64-q3fE-ZOt.js","assets/quatf64-aQ5IuZRd.js","assets/vec42-DVf6basU.js","assets/BufferView-D5SM01Un.js","assets/resourceUtils-CrxlNhhu.js","assets/basicInterfaces-CZwQPxTp.js"])))=>i.map(i=>d[i]);
import{du as S,dj as C,dh as L,jy as Ae,cV as F,ho as Oe,dB as ee,jz as _e,jA as Me,fy as se,jB as Re,bc as me,aQ as Be,bg as fe,s as Ce,hP as pe,gq as ne,jC as ge,iC as W,E as ie,n as Ee,_ as Pe,jD as Se,fO as Le,fP as oe,fQ as Ne,dz as je,dg as Fe,jE as ae,dw as Ge,dd as Ue,hC as ke}from"./index-IeegpAPg.js";import{a as qe}from"./devEnvironmentUtils-8WtPGj6h.js";import{t as Y,e as xe}from"./mat3f64-q3fE-ZOt.js";import{o as ue,r as De,e as Ve}from"./mat4f64-CSKppSlJ.js";import{r as ze,e as V,o as He,a as We,C as be,B as Q,s as Qe,t as Ke,n as Je,b as Xe,c as z}from"./AttributeArray-DoSl0vX3.js";import{c as Ye,x as ye,L as Ze,i as $e,O as et,E as tt}from"./BufferView-D5SM01Un.js";import{e as rt,f as st,l as le,o as ce}from"./vec3-B7akktlr.js";import{n as nt,s as he}from"./vec4-D-2V8DwR.js";import{n as it,d as G,o as ot,g as at,t as ut,h as lt}from"./DefaultMaterial_COLOR_GAMMA-CcLCYaL1.js";import{r as Z}from"./resourceUtils-CrxlNhhu.js";import{t as ct}from"./NestedMap-CImDozOA.js";import{t as ht,l as we}from"./Indices-mr2dO71f.js";import{t as dt}from"./requestImageUtils-CMrK0c-W.js";import{t as k}from"./orientedBoundingBox-Bg_iKoGG.js";import{t as mt,e as te,i as _,n as ft}from"./basicInterfaces-CZwQPxTp.js";import{S as pt}from"./triangle-Lr-La2yJ.js";import{s as gt}from"./Util-ByG6sjfF.js";import{e as v}from"./VertexAttribute-BdZWZuT1.js";import{a as de}from"./NormalAttribute.glsl-BLvHrFHL.js";import"./InterleavedLayout-DD34ctur.js";import"./types-D0PSWh4d.js";import"./interfaces-DDtDqZYj.js";import"./BindType-BmZEZMMh.js";import"./AlphaCutoff-UcccL64p.js";import"./boundedPlane-CZohO7Ps.js";import"./sphere-qRiW3p7L.js";import"./vec42-DVf6basU.js";import"./vec4f64-CMoMXWBi.js";import"./plane-Br_kpZFb.js";import"./quatf64-aQ5IuZRd.js";import"./lineSegment-BTVBW5NI.js";import"./renderState-G6XOSrbk.js";import"./doublePrecisionUtils-B0owpBza.js";import"./quat-DNoYUhoj.js";import"./spatialReferenceEllipsoidUtils-BLVRTiuE.js";import"./computeTranslationToOriginAndRotation-B4Lmv4V4.js";function xt(n,e){if(!n)return!1;const{size:t,data:r,indices:l}=n;S(e,0,0,0),S(w,0,0,0);let u=0,i=0;for(let a=0;a<l.length-2;a+=3){const c=l[a]*t,s=l[a+1]*t,o=l[a+2]*t;S(g,r[c],r[c+1],r[c+2]),S(E,r[s],r[s+1],r[s+2]),S(H,r[o],r[o+1],r[o+2]);const h=pt(g,E,H);h?(C(g,g,E),C(g,g,H),L(g,g,1/3*h),C(e,e,g),u+=h):(C(w,w,g),C(w,w,E),C(w,w,H),i+=3)}return(i!==0||u!==0)&&(u!==0?(L(e,e,1/u),!0):i!==0&&(L(e,w,1/i),!0))}function bt(n,e){if(!n)return!1;const{size:t,data:r,indices:l}=n;S(e,0,0,0);let u=-1,i=0;for(let a=0;a<l.length;a++){const c=l[a]*t;u!==c&&(e[0]+=r[c],e[1]+=r[c+1],e[2]+=r[c+2],i++),u=c}return i>1&&L(e,e,1/i),i>0}function yt(n,e,t){if(!n)return!1;S(t,0,0,0),S(w,0,0,0);let r=0,l=0;const{size:u,data:i,indices:a}=n,c=a.length-1,s=c+(e?2:0);for(let o=0;o<s;o+=2){const h=o<c?o+1:0,m=a[o<c?o:c]*u,f=a[h]*u;g[0]=i[m],g[1]=i[m+1],g[2]=i[m+2],E[0]=i[f],E[1]=i[f+1],E[2]=i[f+2],L(g,C(g,g,E),.5);const d=Ae(g,E);d>0?(C(t,t,L(g,g,d)),r+=d):r===0&&(C(w,w,g),l++)}return r!==0?(L(t,t,1/r),!0):l!==0&&(L(t,w,1/l),!0)}const g=F(),E=F(),H=F(),w=F();class $t{constructor(){this.uid=Oe()}}class wt extends $t{constructor(e){super(),this.highlightGroupName=e,this.channel=mt.Highlight}}class K extends ze{constructor(e,t,r=null,l=V.Mesh,u=null,i=-1){super(),this.material=e,this.mapPositions=r,this.type=l,this.objectAndLayerIdColor=u,this.edgeIndicesLength=i,this.highlights=new Set,this._highlightGroupCounts=new Map,this.visible=!0,this._attributes=new Map,this._boundingInfo=null;for(const[a,c]of t)this._attributes.set(a,{...c,indices:ht(c.indices)}),a===v.POSITION&&(this.edgeIndicesLength=this.edgeIndicesLength<0?this._attributes.get(a).indices.length:this.edgeIndicesLength)}instantiate(e={}){const t=new K(e.material||this.material,[],this.mapPositions,this.type,this.objectAndLayerIdColor,this.edgeIndicesLength);return this._attributes.forEach((r,l)=>{r.exclusive=!1,t._attributes.set(l,r)}),t._boundingInfo=this._boundingInfo,t.transformation=e.transformation||this.transformation,t}get attributes(){return this._attributes}getMutableAttribute(e){let t=this._attributes.get(e);return t&&!t.exclusive&&(t={...t,exclusive:!0,data:He(t.data)},this._attributes.set(e,t)),t}setAttributeData(e,t){const r=this._attributes.get(e);r&&this._attributes.set(e,{...r,exclusive:!0,data:t})}get indexCount(){return this._attributes.values().next().value.indices?.length??0}get faceCount(){return this.indexCount/3}get boundingInfo(){return this._boundingInfo==null&&(this._boundingInfo=this._calculateBoundingInfo()),this._boundingInfo}computeAttachmentOrigin(e){return!!(this.type===V.Mesh?this._computeAttachmentOriginTriangles(e):this.type===V.Line?this._computeAttachmentOriginLines(e):this._computeAttachmentOriginPoints(e))&&(this._transformation!=null&&ee(e,e,this._transformation),!0)}_computeAttachmentOriginTriangles(e){const t=this.attributes.get(v.POSITION);return xt(t,e)}_computeAttachmentOriginLines(e){const t=this.attributes.get(v.POSITION);return yt(t,vt(this.material.parameters,t),e)}_computeAttachmentOriginPoints(e){const t=this.attributes.get(v.POSITION);return bt(t,e)}invalidateBoundingInfo(){this._boundingInfo=null}_calculateBoundingInfo(){const e=this.attributes.get(v.POSITION);if(!e||e.indices.length===0)return null;const t=this.type===V.Mesh?3:1;gt(e.indices.length%t==0,"Indexing error: "+e.indices.length+" not divisible by "+t);const r=we(e.indices.length/t);return new We(r,t,e)}get transformation(){return this._transformation??ue}set transformation(e){this._transformation=e&&e!==ue?De(e):null}get highlightGroups(){return this._highlightGroupCounts}get hasHighlights(){return this._highlightGroupCounts.size>0}foreachHighlightGroup(e){this._highlightGroupCounts.forEach((t,r)=>e(r))}allocateIdAndHighlight(e){const t=new wt(e);return this.addHighlight(t)}addHighlight(e){this.highlights.add(e);const{highlightGroupName:t}=e,r=(this._highlightGroupCounts.get(t)??0)+1;return this._highlightGroupCounts.set(t,r),e}removeHighlight(e){if(this.highlights.delete(e)){const{highlightGroupName:t}=e,r=this._highlightGroupCounts.get(t)??0;r<=1?this._highlightGroupCounts.delete(t):this._highlightGroupCounts.set(t,r-1)}}}function vt(n,e){return!(!("isClosed"in n)||!n.isClosed)&&e.indices.length>2}function q(n){if(n==null)return null;const e=n.offset!=null?n.offset:_e,t=n.rotation!=null?n.rotation:0,r=n.scale!=null?n.scale:Me,l=Y(1,0,0,0,1,0,e[0],e[1],1),u=Y(Math.cos(t),-Math.sin(t),0,Math.sin(t),Math.cos(t),0,0,0,1),i=Y(r[0],0,0,0,r[1],0,0,0,1),a=xe();return se(a,u,i),se(a,l,a),a}class Tt{constructor(){this.geometries=new Array,this.materials=new Array,this.textures=new Array}}class It{constructor(e,t,r){this.name=e,this.lodThreshold=t,this.pivotOffset=r,this.stageResources=new Tt,this.numberOfVertices=0}}const B=()=>Ee.getLogger("esri.views.3d.layers.graphics.objectResourceUtils");async function At(n,e){const t=await Ot(n,e),r=await Ct(t.textureDefinitions??{},e);let l=0;for(const u in r)if(r.hasOwnProperty(u)){const i=r[u];l+=i?.image?i.image.width*i.image.height*4:0}return{resource:t,textures:r,size:l+Re(t)}}async function Ot(n,e){const t=e?.streamDataRequester;if(t)return _t(n,t,e);const r=await me(Be(n,e));if(r.ok===!0)return r.value.data;fe(r.error),ve(r.error)}async function _t(n,e,t){const r=await me(e.request(n,"json",t));if(r.ok===!0)return r.value;fe(r.error),ve(r.error.details.url)}function ve(n){throw new Ce("",`Request for object resource failed: ${n}`)}function Mt(n){const e=n.params,t=e.topology;let r=!0;switch(e.vertexAttributes||(B().warn("Geometry must specify vertex attributes"),r=!1),e.topology){case"PerAttributeArray":break;case"Indexed":case null:case void 0:{const u=e.faces;if(u){if(e.vertexAttributes)for(const i in e.vertexAttributes){const a=u[i];a?.values?(a.valueType!=null&&a.valueType!=="UInt32"&&(B().warn(`Unsupported indexed geometry indices type '${a.valueType}', only UInt32 is currently supported`),r=!1),a.valuesPerElement!=null&&a.valuesPerElement!==1&&(B().warn(`Unsupported indexed geometry values per element '${a.valuesPerElement}', only 1 is currently supported`),r=!1)):(B().warn(`Indexed geometry does not specify face indices for '${i}' attribute`),r=!1)}}else B().warn("Indexed geometries must specify faces"),r=!1;break}default:B().warn(`Unsupported topology '${t}'`),r=!1}n.params.material||(B().warn("Geometry requires material"),r=!1);const l=n.params.vertexAttributes;for(const u in l)l[u].values||(B().warn("Geometries with externally defined attributes are not yet supported"),r=!1);return r}function Rt(n,e){const t=new Array,r=new Array,l=new Array,u=new ct,i=n.resource,a=pe.parse(i.version||"1.0","wosr");Pt.validate(a);const c=i.model.name,s=i.model.geometries,o=i.materialDefinitions??{},h=n.textures;let m=0;const f=new Map;for(let d=0;d<s.length;d++){const p=s[d];if(!Mt(p))continue;const b=Et(p),T=p.params.vertexAttributes,A=[],I=x=>{if(p.params.topology==="PerAttributeArray")return null;const O=p.params.faces;for(const R in O)if(R===x)return O[R].values;return null},N=T[v.POSITION],D=N.values.length/N.valuesPerElement;for(const x in T){const O=T[x],R=O.values,X=I(x)??we(D);A.push([x,new k(R,X,O.valuesPerElement,!0)])}const M=b.texture,y=h&&h[M];if(y&&!f.has(M)){const{image:x,parameters:O}=y,R=new be(x,O);r.push(R),f.set(M,R)}const j=f.get(M),J=j?j.id:void 0,P=b.material;let $=u.get(P,M);if($==null){const x=o[P.slice(P.lastIndexOf("/")+1)].params;x.transparency===1&&(x.transparency=0);const O=y&&y.alphaChannelUsage,R=x.transparency>0||O==="transparency"||O==="maskAndTransparency",X=y?Te(y.alphaChannelUsage):void 0,re={ambient:ne(x.diffuse),diffuse:ne(x.diffuse),opacity:1-(x.transparency||0),transparent:R,textureAlphaMode:X,textureAlphaCutoff:.33,textureId:J,initTextureTransparent:!0,doubleSided:!0,cullFace:te.None,colorMixMode:x.externalColorMixMode||"tint",textureAlphaPremultiplied:y?.parameters.preMultiplyAlpha??!1};e?.materialParameters&&Object.assign(re,e.materialParameters),$=new Q(re,e),u.set(P,M,$)}l.push($);const Ie=new K($,A);m+=A.find(x=>x[0]===v.POSITION)?.[1]?.indices.length??0,t.push(Ie)}return{engineResources:[{name:c,stageResources:{textures:r,materials:l,geometries:t},pivotOffset:i.model.pivotOffset,numberOfVertices:m,lodThreshold:null}],referenceBoundingBox:Bt(t)}}function Bt(n){const e=ge();return n.forEach(t=>{const r=t.boundingInfo;r!=null&&(W(e,r.bbMin),W(e,r.bbMax))}),e}async function Ct(n,e){const t=new Array;for(const u in n){const i=n[u],a=i.images[0].data;if(!a){B().warn("Externally referenced texture data is not yet supported");continue}const c=i.encoding+";base64,"+a,s="/textureDefinitions/"+u,o=i.channels==="rgba"?i.alphaChannelUsage||"transparency":"none",h={noUnpackFlip:!0,wrap:{s:ie.REPEAT,t:ie.REPEAT},preMultiplyAlpha:Te(o)!==_.Opaque},m=e?.disableTextures?Promise.resolve(null):dt(c,e);t.push(m.then(f=>({refId:s,image:f,parameters:h,alphaChannelUsage:o})))}const r=await Promise.all(t),l={};for(const u of r)l[u.refId]=u;return l}function Te(n){switch(n){case"mask":return _.Mask;case"maskAndTransparency":return _.MaskBlend;case"none":return _.Opaque;default:return _.Blend}}function Et(n){const e=n.params;return{id:1,material:e.material,texture:e.texture,region:e.texture}}const Pt=new pe(1,2,"wosr");async function vr(n,e){const t=St(qe(n));if(t.fileType==="wosr"){const h=await(e.cache?e.cache.loadWOSR(t.url,e):At(t.url,e)),{engineResources:m,referenceBoundingBox:f}=Rt(h,e);return{lods:m,referenceBoundingBox:f,isEsriSymbolResource:!1,isWosr:!0}}let r;if(e.cache)r=await e.cache.loadGLTF(t.url,e,!!e.usePBR);else{const{loadGLTF:h}=await Pe(()=>import("./loader-Clnp8FhV.js"),__vite__mapDeps([0,1,2,3,4,5,6,7,8,9,10]));r=await h(new it(e.streamDataRequester),t.url,e,e.usePBR)}const l=r.model.meta?.ESRI_proxyEllipsoid,u=r.meta.isEsriSymbolResource&&l!=null&&r.meta.ESRI_webstyle==="EsriRealisticTreesStyle";u&&!r.customMeta.esriTreeRendering&&(r.customMeta.esriTreeRendering=!0,Gt(r,l));const i=!!e.usePBR,a=r.meta.isEsriSymbolResource?{usePBR:i,isSchematic:!1,treeRendering:u,mrrFactors:Qe}:{usePBR:i,isSchematic:!1,treeRendering:!1,mrrFactors:Ke},c={...e.materialParameters,treeRendering:u},{engineResources:s,referenceBoundingBox:o}=Lt(r,a,c,e,t.specifiedLodIndex);return{lods:s,referenceBoundingBox:o,isEsriSymbolResource:r.meta.isEsriSymbolResource,isWosr:!1}}function St(n){const e=n.match(/(.*\.(gltf|glb))(\?lod=([0-9]+))?$/);return e?{fileType:"gltf",url:e[1],specifiedLodIndex:e[4]!=null?Number(e[4]):null}:n.match(/(.*\.(json|json\.gz))$/)?{fileType:"wosr",url:n,specifiedLodIndex:null}:{fileType:"unknown",url:n,specifiedLodIndex:null}}function Lt(n,e,t,r,l){const u=n.model,i=new Array,a=new Map,c=new Map,s=u.lods.length,o=ge();return u.lods.forEach((h,m)=>{const f=r.skipHighLods===!0&&(s>1&&m===0||s>3&&m===1)||r.skipHighLods===!1&&l!=null&&m!==l;if(f&&m!==0)return;const d=new It(h.name,h.lodThreshold,[0,0,0]);h.parts.forEach(p=>{const b=f?new Q({},r):Nt(u,p,d,e,t,a,c,r),{geometry:T,vertexCount:A}=jt(p,b??new Q({},r)),I=T.boundingInfo;I!=null&&m===0&&(W(o,I.bbMin),W(o,I.bbMax)),b!=null&&(d.stageResources.geometries.push(T),d.numberOfVertices+=A)}),f||i.push(d)}),{engineResources:i,referenceBoundingBox:o}}function Nt(n,e,t,r,l,u,i,a){const c=e.material+(e.attributes.normal?"_normal":"")+(e.attributes.color?"_color":"")+(e.attributes.texCoord0?"_texCoord0":"")+(e.attributes.tangent?"_tangent":""),s=n.materials.get(e.material),o=e.attributes.texCoord0!=null,h=e.attributes.normal!=null;if(s==null)return null;const m=Ft(s.alphaMode);if(!u.has(c)){if(o){const y=(j,J=!1)=>{if(j!=null&&!i.has(j)){const P=n.textures.get(j);if(P!=null){const $=P.data;i.set(j,new be(Z($)?$.data:$,{...P.parameters,preMultiplyAlpha:!Z($)&&J,encoding:Z($)&&$.encoding!=null?$.encoding:void 0}))}}};y(s.textureColor,m!==_.Opaque),y(s.textureNormal),y(s.textureOcclusion),y(s.textureEmissive),y(s.textureMetallicRoughness)}const d=s.color[0]**(1/G),p=s.color[1]**(1/G),b=s.color[2]**(1/G),T=s.emissiveFactor[0]**(1/G),A=s.emissiveFactor[1]**(1/G),I=s.emissiveFactor[2]**(1/G),N=s.textureColor!=null&&o?i.get(s.textureColor):null,D=Je({normalTexture:s.textureNormal,metallicRoughnessTexture:s.textureMetallicRoughness,metallicFactor:s.metallicFactor,roughnessFactor:s.roughnessFactor,emissiveTexture:s.textureEmissive,emissiveFactor:s.emissiveFactor,occlusionTexture:s.textureOcclusion}),M=s.normalTextureTransform?.scale!=null?s.normalTextureTransform?.scale:Se;u.set(c,new Q({...r,transparent:m===_.Blend,customDepthTest:ft.Lequal,textureAlphaMode:m,textureAlphaCutoff:s.alphaCutoff,diffuse:[d,p,b],ambient:[d,p,b],opacity:s.opacity,doubleSided:s.doubleSided,doubleSidedType:"winding-order",cullFace:s.doubleSided?te.None:te.Back,hasVertexColors:!!e.attributes.color,hasVertexTangents:!!e.attributes.tangent,normalType:h?de.Attribute:de.ScreenDerivative,castShadows:!0,receiveShadows:s.receiveShadows,receiveAmbientOcclusion:s.receiveAmbientOcclustion,textureId:N?.id,colorMixMode:s.colorMixMode,normalTextureId:s.textureNormal!=null&&o?i.get(s.textureNormal).id:void 0,textureAlphaPremultiplied:N!=null&&!!N.parameters.preMultiplyAlpha,occlusionTextureId:s.textureOcclusion!=null&&o?i.get(s.textureOcclusion).id:void 0,emissiveTextureId:s.textureEmissive!=null&&o?i.get(s.textureEmissive).id:void 0,metallicRoughnessTextureId:s.textureMetallicRoughness!=null&&o?i.get(s.textureMetallicRoughness).id:void 0,emissiveFactor:[T,A,I],mrrFactors:D?Xe:[s.metallicFactor,s.roughnessFactor,r.mrrFactors[2]],isSchematic:D,colorTextureTransformMatrix:q(s.colorTextureTransform),normalTextureTransformMatrix:q(s.normalTextureTransform),scale:[M[0],M[1]],occlusionTextureTransformMatrix:q(s.occlusionTextureTransform),emissiveTextureTransformMatrix:q(s.emissiveTextureTransform),metallicRoughnessTextureTransformMatrix:q(s.metallicRoughnessTextureTransform),...l},a))}const f=u.get(c);if(t.stageResources.materials.push(f),o){const d=p=>{p!=null&&t.stageResources.textures.push(i.get(p))};d(s.textureColor),d(s.textureNormal),d(s.textureOcclusion),d(s.textureEmissive),d(s.textureMetallicRoughness)}return f}function jt(n,e){const t=n.attributes.position.count,r=ot(n.indices||t,n.primitiveType),l=z(3*t),{typedBuffer:u,typedBufferStride:i}=n.attributes.position;rt(l,u,n.transform,3,i);const a=[[v.POSITION,new k(l,r,3,!0)]];if(n.attributes.normal!=null){const s=z(3*t),{typedBuffer:o,typedBufferStride:h}=n.attributes.normal;Le(U,n.transform),st(s,o,U,3,h),oe(U)&&le(s,s),a.push([v.NORMAL,new k(s,r,3,!0)])}if(n.attributes.tangent!=null){const s=z(4*t),{typedBuffer:o,typedBufferStride:h}=n.attributes.tangent;Ne(U,n.transform),nt(s,o,U,4,h),oe(U)&&le(s,s,4),a.push([v.TANGENT,new k(s,r,4,!0)])}if(n.attributes.texCoord0!=null){const s=z(2*t),{typedBuffer:o,typedBufferStride:h}=n.attributes.texCoord0;at(s,o,2,h),a.push([v.UV0,new k(s,r,2,!0)])}const c=n.attributes.color;if(c!=null){const s=new Uint8Array(4*t);c.elementCount===4?c instanceof Ye?he(s,c,255):c instanceof ye?ut(s,c):c instanceof Ze&&he(s,c,1/256):(s.fill(255),c instanceof $e?ce(s,c.typedBuffer,255,4,c.typedBufferStride):n.attributes.color instanceof et?lt(s,c.typedBuffer,4,n.attributes.color.typedBufferStride):n.attributes.color instanceof tt&&ce(s,c.typedBuffer,1/256,4,c.typedBufferStride)),a.push([v.COLOR,new k(s,r,4,!0)])}return{geometry:new K(e,a),vertexCount:t}}const U=xe();function Ft(n){switch(n){case"BLEND":return _.Blend;case"MASK":return _.Mask;case"OPAQUE":case null:case void 0:return _.Opaque}}function Gt(n,e){for(let t=0;t<n.model.lods.length;++t){const r=n.model.lods[t];for(const l of r.parts){const u=l.attributes.normal;if(u==null)return;const i=l.attributes.position,a=i.count,c=F(),s=F(),o=F(),h=new Uint8Array(4*a),m=new Float64Array(3*a),f=je(Ve(),l.transform);let d=0,p=0;for(let b=0;b<a;b++){i.getVec(b,s),u.getVec(b,c),ee(s,s,l.transform),Fe(o,s,e.center),ae(o,o,e.radius);const T=o[2],A=Ge(o),I=Math.min(.45+.55*A*A,1);ae(o,o,e.radius),f!==null&&ee(o,o,f),Ue(o,o),t+1!==n.model.lods.length&&n.model.lods.length>1&&ke(o,o,c,T>-1?.2:Math.min(-4*T-3.8,1)),m[d]=o[0],m[d+1]=o[1],m[d+2]=o[2],d+=3,h[p]=255*I,h[p+1]=255*I,h[p+2]=255*I,h[p+3]=255,p+=4}l.attributes.normal=new $e(m),l.attributes.color=new ye(h)}}}export{vr as fetch,St as parseUrl};
