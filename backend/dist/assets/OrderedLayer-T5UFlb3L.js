import{v as s,w as d,x as l,bF as u}from"./index-IeegpAPg.js";import{a}from"./OrderByInfo-C9JHxA_m.js";function c(e,r,t){if(!e)return null;const i=e.find(o=>!!o.field);if(!i)return null;const n=new a;return n.read(i,t),[n]}function f(e,r,t,i){const n=e.find(o=>!!o.field);n&&u(t,[n.toJSON()],r)}const m={type:[a],json:{origins:{"web-scene":{write:!1,read:!1}},name:"layerDefinition.orderBy",read:{reader:c},write:{writer:f}}},w=e=>{let r=class extends e{constructor(){super(...arguments),this.orderBy=null}};return s([d(m)],r.prototype,"orderBy",void 0),r=s([l("esri.layers.mixins.OrderedLayer")],r),r};export{m as c,w as p};