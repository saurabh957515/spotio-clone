const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/objectResourceUtils-BDVxeOU6.js","assets/index-IeegpAPg.js","assets/index-D9t-g9sQ.css","assets/devEnvironmentUtils-8WtPGj6h.js","assets/mat3f64-q3fE-ZOt.js","assets/mat4f64-CSKppSlJ.js","assets/AttributeArray-DoSl0vX3.js","assets/requestImageUtils-CMrK0c-W.js","assets/basicInterfaces-CZwQPxTp.js","assets/Util-ByG6sjfF.js","assets/vec42-DVf6basU.js","assets/vec4f64-CMoMXWBi.js","assets/InterleavedLayout-DD34ctur.js","assets/BufferView-D5SM01Un.js","assets/types-D0PSWh4d.js","assets/NormalAttribute.glsl-BLvHrFHL.js","assets/interfaces-DDtDqZYj.js","assets/VertexAttribute-BdZWZuT1.js","assets/BindType-BmZEZMMh.js","assets/AlphaCutoff-UcccL64p.js","assets/boundedPlane-CZohO7Ps.js","assets/sphere-qRiW3p7L.js","assets/plane-Br_kpZFb.js","assets/quatf64-aQ5IuZRd.js","assets/lineSegment-BTVBW5NI.js","assets/renderState-G6XOSrbk.js","assets/orientedBoundingBox-Bg_iKoGG.js","assets/quat-DNoYUhoj.js","assets/spatialReferenceEllipsoidUtils-BLVRTiuE.js","assets/computeTranslationToOriginAndRotation-B4Lmv4V4.js","assets/doublePrecisionUtils-B0owpBza.js","assets/vec3-B7akktlr.js","assets/vec4-D-2V8DwR.js","assets/DefaultMaterial_COLOR_GAMMA-CcLCYaL1.js","assets/Indices-mr2dO71f.js","assets/resourceUtils-CrxlNhhu.js","assets/NestedMap-CImDozOA.js","assets/triangle-Lr-La2yJ.js"])))=>i.map(i=>d[i]);
import{s as t,aQ as m,_ as d,eI as u,cd as v,eJ as p,cV as c}from"./index-IeegpAPg.js";import{e as y}from"./LRUCache-B9Ch9jyy.js";let n=l();function l(){return new y(50)}function g(){n=l()}async function T(e,r){if(e.resource?.href)return b(e.resource.href).then(o=>[o.width,o.height]);if(e.resource?.primitive)return r!=null?[r,r]:[256,256];throw new t("symbol3d:invalid-symbol-layer","symbol layers of type Icon must have either an href or a primitive resource")}function b(e){return m(e,{responseType:"image"}).then(r=>r.data)}async function x(e,r=null){if(!e.isPrimitive){const i=e.resource?.href;if(!i)throw new t("symbol:invalid-resource","The symbol does not have a valid resource");const s=n.get(i);if(s!==void 0)return s;const{fetch:f}=await d(()=>import("./objectResourceUtils-BDVxeOU6.js"),__vite__mapDeps([0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37])),h=await f(i,{disableTextures:!0,spherical:!0,doublePrecisionRequiresObfuscation:!0}),a=u(h.referenceBoundingBox,c());return n.put(i,a),a}if(!e.resource?.primitive)throw new t("symbol:invalid-resource","The symbol does not have a valid resource");const o=v(p(e.resource.primitive));if(r!=null)for(let i=0;i<o.length;i++)o[i]*=r;return u(o,c())}export{g as clearBoundingBoxCache,T as computeIconLayerResourceSize,x as computeObjectLayerResourceSize};
