import{n as b,s as M,az as d,f8 as C,ax as I}from"./index-IeegpAPg.js";import{c as x}from"./colorUtils-D0_txqzP.js";import{B as O,W as y,U as h,v as k,a as S,c as g,z as N}from"./utils-DyJ7tXUW.js";import{B as P,H as $,D as w,C as G}from"./quantizationUtils-D5PvWHeA.js";function T(c,e,r,t,s){if(c==null)return null;const i=c.referencesGeometry()&&s?E(e,t,s):e,o=c.repurposeFeature(i);try{return c.evaluate({...r,$feature:o},c.services)}catch(a){return b.getLogger("esri.views.2d.support.arcadeOnDemand").warn("Feature arcade evaluation failed:",a),null}}const m=new Map;function E(c,e,r){const{transform:t,hasZ:s,hasM:i}=r;m.has(e)||m.set(e,A(e));const o=m.get(e)(c.geometry,t,s,i);return{...c,geometry:o}}function A(c){const e={};switch(c){case"esriGeometryPoint":return(r,t,s,i)=>G(t,e,r,s,i);case"esriGeometryPolygon":return(r,t,s,i)=>w(t,e,r,s,i);case"esriGeometryPolyline":return(r,t,s,i)=>$(t,e,r,s,i);case"esriGeometryMultipoint":return(r,t,s,i)=>P(t,e,r,s,i);default:return b.getLogger("esri.views.2d.support.arcadeOnDemand").error(new M("mapview-arcade",`Unable to handle geometryType: ${c}`)),r=>r}}const L=c=>{if(!c)return[0,0,0,0];const{r:e,g:r,b:t,a:s}=c;return[e,r,t,255*s]};class n{static findApplicableOverrides(e,r,t){if(e&&r){if(e.primitiveName){let s=!1;for(const i of t)if(i.primitiveName===e.primitiveName){s=!0;break}if(!s)for(const i of r)i.primitiveName===e.primitiveName&&t.push(i)}switch(e.type){case"CIMPointSymbol":case"CIMLineSymbol":case"CIMPolygonSymbol":if(e.effects)for(const s of e.effects)n.findApplicableOverrides(s,r,t);if(e.symbolLayers)for(const s of e.symbolLayers)n.findApplicableOverrides(s,r,t);break;case"CIMTextSymbol":break;case"CIMSolidStroke":case"CIMPictureStroke":case"CIMGradientStroke":case"CIMSolidFill":case"CIMPictureFill":case"CIMHatchFill":case"CIMGradientFill":case"CIMVectorMarker":case"CIMCharacterMarker":case"CIMPictureMarker":if(e.effects)for(const s of e.effects)n.findApplicableOverrides(s,r,t);if(e.markerPlacement&&n.findApplicableOverrides(e.markerPlacement,r,t),e.type==="CIMVectorMarker"){if(e.markerGraphics)for(const s of e.markerGraphics)n.findApplicableOverrides(s,r,t),n.findApplicableOverrides(s.symbol,r,t)}else e.type==="CIMCharacterMarker"?n.findApplicableOverrides(e.symbol,r,t):e.type==="CIMHatchFill"?n.findApplicableOverrides(e.lineSymbol,r,t):e.type==="CIMPictureMarker"&&n.findApplicableOverrides(e.animatedSymbolProperties,r,t)}}}static findEffectOverrides(e,r){if(!e)return null;if(e.type==="CIMGeometricEffectDashes"&&O(e),!r||!e.primitiveName)return{type:"cim-effect-param",effect:e,overrides:[]};const t=y(e),s=e.primitiveName,i=[];for(const o of r)o.primitiveName===s&&i.push(y(o));return{type:"cim-effect-param",effect:t,overrides:h(i)}}static async resolveSymbolOverrides(e,r,t,s,i,o,a){if(!e?.symbol)return null;let{symbol:p,primitiveOverrides:l}=e;const u=!!l;if(!u&&!s)return p;p=d(p),l=d(l);let v=!0;if(r||(r={attributes:{}},v=!1),u){if(v||(l=l.filter(f=>!f.valueExpressionInfo?.expression.includes("$feature"))),a||(l=l.filter(f=>!f.valueExpressionInfo?.expression.includes("$view"))),l.length>0){const f={spatialReference:t,fields:k(r.attributes),geometryType:i};await n.createRenderExpressions(l,f),n.evaluateOverrides(l,r,i??"esriGeometryPoint",o,a)}n.applyOverrides(p,l)}return s&&n.applyDictionaryTextOverrides(p,r,s,null),p}static async createRenderExpressions(e,r){const t=[];for(const s of e){const i=s.valueExpressionInfo;if(!i||n._expressionToRenderExpression.has(i.expression))continue;const o=C(i.expression,r.spatialReference,r.fields);t.push(o),o.then(a=>n._expressionToRenderExpression.set(i.expression,a))}t.length>0&&await Promise.all(t)}static evaluateOverrides(e,r,t,s,i){const o={$view:{scale:i?.scale}};for(const a of e){a.value&&typeof a.value=="object"&&x(a.value)&&(a.propertyName==="Color"||a.propertyName==="StrokeColor")&&(a.value=L(a.value));const p=a.valueExpressionInfo;if(!p)continue;const l=n._expressionToRenderExpression.get(p.expression);l&&(a.value=T(l,r,o,t,s))}}static applyDictionaryTextOverrides(e,r,t,s,i="Normal"){if(e?.type)switch(e.type){case"CIMPointSymbol":case"CIMLineSymbol":case"CIMPolygonSymbol":case"CIMTextSymbol":{const o=e.symbolLayers;if(!o)return;for(const a of o)a&&a.type==="CIMVectorMarker"&&n.applyDictionaryTextOverrides(a,r,t,s,e.type==="CIMTextSymbol"?e.textCase:i)}break;case"CIMVectorMarker":{const o=e.markerGraphics;if(!o)return;for(const a of o)a&&n.applyDictionaryTextOverrides(a,r,t,s)}break;case"CIMMarkerGraphic":{const o=e.textString;if(o&&o.includes("[")){const a=S(o,t);e.textString=g(r,a,s,i)}}}}static applyOverrides(e,r,t,s){if(e.primitiveName){for(const i of r)if(i.primitiveName===e.primitiveName){const o=N(i.propertyName);if(s&&s.push({cim:e,nocapPropertyName:o,value:e[o]}),t){let a=!1;for(const p of t)p.primitiveName===e.primitiveName&&(a=!0);a||t.push(i)}i.value!=null&&(e[o]=i.value)}}switch(e.type){case"CIMPointSymbol":case"CIMLineSymbol":case"CIMPolygonSymbol":if(e.effects)for(const i of e.effects)n.applyOverrides(i,r,t,s);if(e.symbolLayers)for(const i of e.symbolLayers)n.applyOverrides(i,r,t,s);break;case"CIMTextSymbol":break;case"CIMSolidStroke":case"CIMSolidFill":case"CIMVectorMarker":if(e.effects)for(const i of e.effects)n.applyOverrides(i,r,t,s);if(e.type==="CIMVectorMarker"&&e.markerGraphics)for(const i of e.markerGraphics)n.applyOverrides(i,r,t,s),n.applyOverrides(i.symbol,r,t,s)}}static restoreOverrides(e){for(const r of e)r.cim[r.nocapPropertyName]=r.value}static buildOverrideKey(e){let r="";for(const t of e)t.value!==void 0&&(r+=`${t.primitiveName}${t.propertyName}${JSON.stringify(t.value)}`);return r}static toValue(e,r){if(e==="DashTemplate")return r.split(" ").map(t=>Number(t));if(e==="Color"){const t=new I(r).toRgba();return t[3]*=255,t}return r}}n._expressionToRenderExpression=new Map;export{n as y};
