import{s as g,az as G,cF as L,b as P,B as z}from"./index-IeegpAPg.js";import{a as T,n as F,m as S}from"./TimeOnly-B5mfw6we.js";import{t as I}from"./ImmutableArray-BPVd6ESQ.js";import J from"./FeatureLayer-DJbLuPts.js";import{d as M}from"./FeatureSet--t3TP_gY.js";import"./UnknownTimeZone-Bp45PPyc.js";import"./UniqueValueRenderer-BRA4hJF2.js";import"./ColorStop-DcLcp94M.js";import"./diffUtils-BsmLiWuX.js";import"./colorRamps-DtdPWJTS.js";import"./sizeVariableUtils-Cmcuvw-4.js";import"./visualVariableUtils-BxjHbii2.js";import"./jsonUtils-Y19K1K5D.js";import"./defaults-Ca7Ezrxv.js";import"./defaultsJSON-GKolV7NZ.js";import"./styleUtils-72oPtPHD.js";import"./jsonUtils-CKn8N5rB.js";import"./LRUCache-B9Ch9jyy.js";import"./FieldsIndex-1XykZMxf.js";import"./OverrideHelper-Beyhf6nl.js";import"./colorUtils-D0_txqzP.js";import"./vec42-DVf6basU.js";import"./vec4f64-CMoMXWBi.js";import"./utils-DyJ7tXUW.js";import"./enums-CmIX1y88.js";import"./quantizationUtils-D5PvWHeA.js";import"./heatmapUtils-gC4I9bES.js";import"./FeatureLayerBase-DBB_KLm4.js";import"./featureLayerUtils-DOfcdp_A.js";import"./LayerFloorInfo-BnKc7C4W.js";import"./Relationship-C6f1Hi7_.js";import"./serviceCapabilitiesUtils-COVZGAXJ.js";import"./editsZScale-yJOWHsnW.js";import"./queryZScale-BviGmGlG.js";import"./APIKeyMixin-Bid8LsFN.js";import"./ArcGISService-CIVcan3f.js";import"./CustomParametersMixin-seLw3Ail.js";import"./EditBusLayer-EHDpblVl.js";import"./FeatureEffectLayer-CX57XnqE.js";import"./FeatureEffect-nunlOgL-.js";import"./FeatureReductionLayer-r6s6_5Sb.js";import"./FeatureReductionSelection-C6wqS4Mb.js";import"./labelingInfo-COg3pKpK.js";import"./labelUtils-cNe8bNWP.js";import"./MD5-C9MwAd2G.js";import"./OrderedLayer-T5UFlb3L.js";import"./OrderByInfo-C9JHxA_m.js";import"./TemporalLayer-X1Uvg484.js";import"./TimeInfo-BokYbqlu.js";import"./FeatureTemplate-CHC4o9Rs.js";import"./FeatureType-CupKmq3w.js";import"./fieldProperties-DFyqxTMB.js";import"./versionUtils-DrRIr99F.js";import"./styleUtils-CiawYzCZ.js";import"./popupUtils-BWB8Dp2p.js";import"./AlphaCutoff-UcccL64p.js";import"./interfaces-CL2NbQte.js";let b=null;function B(e,n,r,o={}){const a=n.elementType,i="value",c=a.type==="array"?[{name:i,type:a.type,elementType:a.elementType}]:a.type==="dictionary"?[{name:i,type:a.type,properties:a.properties}]:[{name:i,type:a.type}];return new I(e.map(s=>{const t={};return w(t,c,{[i]:s},r,o),t[i]}))}function E(e,n,r={}){const o=e instanceof M?new J({source:e.features,geometryType:e.geometryType,fields:e.fields,spatialReference:e.spatialReference}):e;return n.constructFeatureSet(o,r.spatialReference,null,!0,r.lruCache,r.interceptor)}function N(e,n,r={}){const{spatialReference:o,interceptor:a,lruCache:i}=r;return typeof e=="string"?n.createFeatureSetCollectionFromService(e,o,i,a):n.createFeatureSetCollectionFromMap(e,o,i,a)}function X(e,n,r,o={}){const a={};return w(a,n.properties,e,r,o),new b.Dictionary(a)}function w(e,n,r,o,a={}){const i={};for(const c of Object.keys(r))i[c.toLowerCase()]=r[c];for(const c of n){const s=c.name.toLowerCase();if(a.variablesPreProcessed)e[s]=i[s];else switch(c.type){case"array":{const t=i[s];e[s]=t==null?null:B(t,c,o,a);break}case"feature":{const t=i[s];e[s]=t==null?null:b.Feature.createFromGraphic(t,a?.timeZone);break}case"featureSet":{const t=i[s];e[s]=t==null?null:o?E(t,o,a):null;break}case"featureSetCollection":{const t=i[s];e[s]=t==null?null:o?N(t,o,a):null;break}case"dictionary":{const t=i[s];e[s]=t==null?null:X(t,c,o,a);break}case"date":{const t=i[s];e[s]=t?t instanceof S?t:a?.timeZone?S.dateJSAndZoneToArcadeDate(t,a?.timeZone):S.dateJSToArcadeDate(t):null;break}case"dateOnly":{const t=i[s];e[s]=t?t instanceof F?t:F.fromReader(t):null;break}case"time":{const t=i[s];e[s]=t?t instanceof T?t:T.fromReader(t):null;break}case"knowledgeGraph":case"geometry":case"boolean":case"text":case"number":e[s]=i[s]}}}function Z(e,n){for(const r of e)n.push(r),r.type==="dictionary"&&Z(r.properties,n);return n}function R(e,n,r,o,a){const{spatialReference:i,interceptor:c,lruCache:s,console:t,abortSignal:u,timeZone:l,services:$={portal:P.getDefault()}}=r,f={vars:{},spatialReference:i,interceptor:c,timeZone:l,lrucache:s,useAsync:a,services:$,console:t,abortSignal:u};return n&&w(f.vars,e.variables,n,o,r),f}function v(e,n){switch(n.getArcadeType(e)){case"number":case"text":case"boolean":case"point":case"polygon":case"polyline":case"multipoint":case"extent":return e;case"date":return e.toJSDate();case"time":case"dateOnly":return e.toString();case"feature":{const r=(e.type,e),o="geometry"in r?r.geometry():null,a="readAttributes"in r?r.readAttributes():r.attributes;return new z({geometry:o,attributes:a})}case"dictionary":{const r=e,o=r.attributes,a={};for(const i of Object.keys(o))a[i]=v(r.field(i),n);return a}case"array":return("toArray"in e?e.toArray():e).map(r=>v(r,n))}return e}const D={variables:[{name:"$feature",type:"feature"},{name:"$layer",type:"featureSet"},{name:"$datastore",type:"featureSetCollection"},{name:"$map",type:"featureSetCollection"},{name:"$userInput",type:"geometry"},{name:"$graph",type:"knowledgeGraph"}]},O={variables:[{name:"$feature",type:"feature"},{name:"$aggregatedFeatures",type:"featureSet"}]},U=new Map([["aggregate-field",{variables:[{name:"$feature",type:"feature"}]}],["form-constraint",{variables:[{name:"$feature",type:"feature"}]}],["feature-z",{variables:[{name:"$feature",type:"feature"}]}],["field-calculation",{variables:[{name:"$feature",type:"feature"},{name:"$datastore",type:"featureSetCollection"}]}],["form-calculation",{variables:[{name:"$feature",type:"feature"},{name:"$originalFeature",type:"feature"},{name:"$layer",type:"featureSet"},{name:"$featureSet",type:"featureSet"},{name:"$datastore",type:"featureSetCollection"},{name:"$map",type:"featureSetCollection"},{name:"$editContext",type:"dictionary",properties:[{name:"editType",type:"text"}]}]}],["labeling",{variables:[{name:"$feature",type:"feature"}]}],["popup",D],["popup-element",D],["feature-reduction-popup",O],["feature-reduction-popup-element",O],["visualization",{variables:[{name:"$feature",type:"feature"},{name:"$view",type:"dictionary",properties:[{name:"scale",type:"number"}]}]}]]);function Ke(e){const n=U.get(e);if(!n){const r=Array.from(U.keys()).map(o=>`'${o}'`).join(", ");throw new g("createArcadeProfile:invalid-profile-name",`Invalid profile name '${e}'. You must specify one of the following values: ${r}`)}return G(n)}async function Qe(e,n,r={}){b||(b=await L());const{arcade:o,arcadeUtils:a}=b,{loadScriptDependencies:i,referencesMember:c,scriptIsAsync:s}=o,t=Z(n.variables,[]),u=t.filter(p=>p.type==="featureSet"||p.type==="featureSetCollection").map(p=>p.name.toLowerCase()),l=o.parseScript(e,u);if(!l)throw new g("arcade:invalid-script","Unable to create SyntaxTree");const $=a.extractFieldNames(l),f=o.scriptTouchesGeometry(l),h=t.map(p=>p.name.toLowerCase()).filter(p=>c(l,p)),m=s(l,u);await i(l,m,u);const C={vars:{},spatialReference:null,useAsync:m};for(const p of h)C.vars[p]="any";const{lruCache:A}=r,x=o.compileScript(l,C),k=o.featureSetUtils(),{services:j}=r;return{execute:(p,y={})=>{if(m)throw new g("arcade:invalid-execution-mode","Cannot execute the script in synchronous mode");const d=x(R(n,p,{lruCache:A,...y},k,m));return y.rawOutput?d:v(d,a)},executeAsync:async(p,y={})=>{const d=await x(R(n,p,{lruCache:A,services:j,...y},k,m));return y.rawOutput?d:v(d,a)},isAsync:m,variablesUsed:h,fieldsUsed:$,geometryUsed:f,syntaxTree:l}}export{Qe as createArcadeExecutor,Ke as createArcadeProfile};