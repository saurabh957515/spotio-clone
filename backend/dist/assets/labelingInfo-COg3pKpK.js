import{v as l,w as s,bI as g,bO as u,x as S,bM as P,bK as A,h9 as C,ha as I,hb as j,h7 as B,az as h,s as N,n as M}from"./index-IeegpAPg.js";import{E as d,u as O,_ as D,x as G,f as V,g as z}from"./labelUtils-cNe8bNWP.js";import{a as F}from"./defaults-Ca7Ezrxv.js";import{i as x}from"./jsonUtils-Y19K1K5D.js";var m;let p=m=class extends P{constructor(){super(...arguments),this.expression=null,this.title=null,this.value=null}readExpression(e,t){return t.value?d(t.value):e}writeExpression(e,t,n){this.value!=null&&(e=d(this.value)),e!=null&&(t[n]=e)}clone(){return new m({expression:this.expression,title:this.title,value:this.value})}};l([s({type:String,json:{write:{writerEnsuresNonNull:!0}}})],p.prototype,"expression",void 0),l([g("expression",["expression","value"])],p.prototype,"readExpression",null),l([u("expression")],p.prototype,"writeExpression",null),l([s({type:String,json:{write:!0,origins:{"web-scene":{write:!1}}}})],p.prototype,"title",void 0),l([s({json:{read:!1,write:!1}})],p.prototype,"value",void 0),p=m=l([S("esri.layers.support.LabelExpressionInfo")],p);const L=p;var f;const w=new A({esriServerPointLabelPlacementAboveCenter:"above-center",esriServerPointLabelPlacementAboveLeft:"above-left",esriServerPointLabelPlacementAboveRight:"above-right",esriServerPointLabelPlacementBelowCenter:"below-center",esriServerPointLabelPlacementBelowLeft:"below-left",esriServerPointLabelPlacementBelowRight:"below-right",esriServerPointLabelPlacementCenterCenter:"center-center",esriServerPointLabelPlacementCenterLeft:"center-left",esriServerPointLabelPlacementCenterRight:"center-right",esriServerLinePlacementAboveAfter:"above-after",esriServerLinePlacementAboveAlong:"above-along",esriServerLinePlacementAboveBefore:"above-before",esriServerLinePlacementAboveStart:"above-start",esriServerLinePlacementAboveEnd:"above-end",esriServerLinePlacementBelowAfter:"below-after",esriServerLinePlacementBelowAlong:"below-along",esriServerLinePlacementBelowBefore:"below-before",esriServerLinePlacementBelowStart:"below-start",esriServerLinePlacementBelowEnd:"below-end",esriServerLinePlacementCenterAfter:"center-after",esriServerLinePlacementCenterAlong:"center-along",esriServerLinePlacementCenterBefore:"center-before",esriServerLinePlacementCenterStart:"center-start",esriServerLinePlacementCenterEnd:"center-end",esriServerPolygonPlacementAlwaysHorizontal:"always-horizontal"},{ignoreUnknown:!0});function v(e,t,n){return{enabled:!B(n?.layer)}}function E(e){return!e||e.origin!=="service"&&e.layer?.type!=="map-image"}function R(e){return e?.type==="map-image"}function $(e){return!!R(e)&&!!e.capabilities?.exportMap?.supportsArcadeExpressionForLabeling}function J(e){return E(e)||$(e?.layer)}let i=f=class extends P{static evaluateWhere(e,t){const n=(r,o,a)=>{switch(o){case"=":return r==a;case"<>":return r!=a;case">":return r>a;case">=":return r>=a;case"<":return r<a;case"<=":return r<=a}return!1};try{if(e==null)return!0;const r=e.split(" ");if(r.length===3)return n(t[r[0]],r[1],r[2]);if(r.length===7){const o=n(t[r[0]],r[1],r[2]),a=r[3],c=n(t[r[4]],r[5],r[6]);switch(a){case"AND":return o&&c;case"OR":return o||c}}return!1}catch{}}constructor(e){super(e),this.type="label",this.name=null,this.allowOverrun=!1,this.deconflictionStrategy="static",this.labelExpression=null,this.labelExpressionInfo=null,this.labelPlacement=null,this.labelPosition="curved",this.maxScale=0,this.minScale=0,this.repeatLabel=!0,this.repeatLabelDistance=null,this.symbol=F,this.useCodedValues=void 0,this.where=null}readLabelExpression(e,t){const n=t.labelExpressionInfo;if(!n||!n.value&&!n.expression)return e}writeLabelExpression(e,t,n){if(this.labelExpressionInfo){if(this.labelExpressionInfo.value!=null)e=O(this.labelExpressionInfo.value);else if(this.labelExpressionInfo.expression!=null){const r=D(this.labelExpressionInfo.expression);r&&(e="["+r+"]")}}e!=null&&(t[n]=e)}writeLabelExpressionInfo(e,t,n,r){if(e==null&&this.labelExpression!=null&&E(r))e=new L({expression:this.getLabelExpressionArcade()});else if(!e)return;const o=e.toJSON(r);o.expression&&(t[n]=o)}writeMaxScale(e,t){(e||this.minScale)&&(t.maxScale=e)}writeMinScale(e,t){(e||this.maxScale)&&(t.minScale=e)}getLabelExpression(){return G(this)}getLabelExpressionArcade(){return V(this)}getLabelExpressionSingleField(){return z(this)}hash(){return JSON.stringify(this)}clone(){return new f({allowOverrun:this.allowOverrun,deconflictionStrategy:this.deconflictionStrategy,labelExpression:this.labelExpression,labelExpressionInfo:h(this.labelExpressionInfo),labelPosition:this.labelPosition,labelPlacement:this.labelPlacement,maxScale:this.maxScale,minScale:this.minScale,name:this.name,repeatLabel:this.repeatLabel,repeatLabelDistance:this.repeatLabelDistance,symbol:h(this.symbol),where:this.where,useCodedValues:this.useCodedValues})}};l([s({type:String,json:{write:!0}})],i.prototype,"name",void 0),l([s({type:Boolean,json:{write:!0,default:!1,origins:{"web-scene":{write:!1},"portal-item":{default:!1,write:{overridePolicy:v}}}}})],i.prototype,"allowOverrun",void 0),l([s({type:String,json:{write:!0,default:"static",origins:{"web-scene":{write:!1},"portal-item":{default:"static",write:{overridePolicy:v}}}}})],i.prototype,"deconflictionStrategy",void 0),l([s({type:String,json:{write:{overridePolicy(e,t,n){return this.labelExpressionInfo&&n?.origin==="service"&&$(n.layer)?{enabled:!1}:{allowNull:!0}}}}})],i.prototype,"labelExpression",void 0),l([g("labelExpression")],i.prototype,"readLabelExpression",null),l([u("labelExpression")],i.prototype,"writeLabelExpression",null),l([s({type:L,json:{write:{overridePolicy:(e,t,n)=>J(n)?{allowNull:!0}:{enabled:!1}}}})],i.prototype,"labelExpressionInfo",void 0),l([u("labelExpressionInfo")],i.prototype,"writeLabelExpressionInfo",null),l([s({type:w.apiValues,json:{type:w.jsonValues,read:w.read,write:w.write}})],i.prototype,"labelPlacement",void 0),l([s({type:["curved","parallel"],json:{write:!0,origins:{"web-map":{write:!1},"web-scene":{write:!1},"portal-item":{write:!1}}}})],i.prototype,"labelPosition",void 0),l([s({type:Number})],i.prototype,"maxScale",void 0),l([u("maxScale")],i.prototype,"writeMaxScale",null),l([s({type:Number})],i.prototype,"minScale",void 0),l([u("minScale")],i.prototype,"writeMinScale",null),l([s({type:Boolean,json:{write:!0,origins:{"web-scene":{write:!1},"portal-item":{write:{overridePolicy:v}}}}})],i.prototype,"repeatLabel",void 0),l([s({type:Number,cast:C,json:{write:!0,origins:{"web-scene":{write:!1},"portal-item":{write:{overridePolicy:v}}}}})],i.prototype,"repeatLabelDistance",void 0),l([s({types:I,json:{origins:{"web-scene":{types:j,write:x,default:null}},write:x,default:null}})],i.prototype,"symbol",void 0),l([s({type:Boolean,json:{write:!0}})],i.prototype,"useCodedValues",void 0),l([s({type:String,json:{write:!0}})],i.prototype,"where",void 0),i=f=l([S("esri.layers.support.LabelClass")],i);const U=i,y=()=>M.getLogger("esri.layers.support.labelingInfo"),k=/\[([^[\]]+)\]/gi;function T(e,t,n){return e?e.map(r=>{const o=new U;if(o.read(r,n),o.labelExpression){const a=t.fields||t.layerDefinition?.fields||this.fields;o.labelExpression=o.labelExpression.replaceAll(k,(c,b)=>`[${H(b,a)}]`)}return o}):null}function H(e,t){if(!t)return e;const n=e.toLowerCase();for(let r=0;r<t.length;r++){const o=t[r].name;if(o.toLowerCase()===n)return o}return e}const K={esriGeometryPoint:["above-right","above-center","above-left","center-center","center-left","center-right","below-center","below-left","below-right"],esriGeometryMultiPatch:["always-horizontal"],esriGeometryPolygon:["always-horizontal"],esriGeometryPolyline:["center-along","above-along","below-along"],esriGeometryMultipoint:null,esriGeometryEnvelope:null};function X(e,t){const n=[];for(const r of e){const o=r.labelPlacement,a=K[t];if(!r.symbol)return y().warn("No ILabelClass symbol specified."),[];if(!a)return y().error(new N("labeling:unsupported-geometry-type",`Unable to create labels for layer, geometry type '${t}' is not supported`)),[];if(a.includes(o))n.push(r);else{const c=a[0];o&&y().warn(`Found invalid label placement type ${o} for ${t}. Defaulting to ${c}`);const b=r.clone();b.labelPlacement=c,n.push(b)}}return n}export{U as C,X as a,T as n};
