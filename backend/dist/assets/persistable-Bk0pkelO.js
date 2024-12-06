import{e8 as j,e9 as I,ea as P,eb as h,ec as x,ed as N,ee as b,ef as S,eg as v,eh as A,s as O,dG as R,cp as F,ei as J,cq as K,ej as q}from"./index-IeegpAPg.js";import{x as z}from"./MD5-C9MwAd2G.js";import{i as C}from"./multiOriginJSONSupportUtils-C0wm8_Yw.js";import{p as y}from"./resourceExtension-B-xQ-cjP.js";function M(e){const r=e?.origins??[void 0];return(o,n)=>{const t=G(e,o,n);for(const c of r){const i=j(o,c,n);for(const s in t)i[s]=t[s]}}}function G(e,r,o){if(e?.type==="resource")return H(e,r,o);switch(e?.type??"other"){case"other":return{read:!0,write:!0};case"url":{const{read:n,write:t}=q;return{read:n,write:t}}}}function H(e,r,o){const n=I(r,o);return{type:String,read:(t,c,i)=>{const s=P(t,c,i);return n.type===String?s:typeof n.type=="function"?new n.type({url:s}):void 0},write:{writer(t,c,i,s){if(!s?.resources)return typeof t=="string"?void(c[i]=h(t,s)):void(c[i]=t.write({},s));const a=Z(t),p=h(a,{...s,verifyItemRelativeUrls:s?.verifyItemRelativeUrls?{writtenUrls:s.verifyItemRelativeUrls.writtenUrls,rootPath:void 0}:void 0},x.NO),l=n.type!==String&&(!C(this)||s?.origin&&this.originIdOf(o)>N(s.origin)),u={object:this,propertyName:o,value:t,targetUrl:p,dest:c,targetPropertyName:i,context:s,params:e};s?.portalItem&&p&&!b(p)?l&&e?.contentAddressed?g(u):l?V(u):Y(u):s?.portalItem&&(p==null||S(p)!=null||v(p)||l)?g(u):c[i]=p}}}}function g(e){const{targetUrl:r,params:o,value:n,context:t,dest:c,targetPropertyName:i}=e;if(!t.portalItem)return;const s=A(r),a=w(n,r,t);if(o?.contentAddressed&&a.type!=="json")return void t.messages?.push(new O("persistable:contentAddressingUnsupported",`Property "${i}" is trying to serializing a resource with content of type ${a.type} with content addressing. Content addressing is only supported for json resources.`,{content:a}));const p=o?.contentAddressed&&a.type==="json"?z(a.jsonString):s?.filename??R(),l=F(o?.prefix??s?.prefix,p),u=`${l}.${y(a)}`;if(o?.contentAddressed&&t.resources&&a.type==="json"){const f=t.resources.toKeep.find(({resource:m})=>m.path===u)??t.resources.toAdd.find(({resource:m})=>m.path===u);if(f)return void(c[i]=f.resource.itemRelativeUrl)}const d=t.portalItem.resourceFromPath(u);v(r)&&t.resources&&t.resources.pendingOperations.push(J(r).then(f=>{d.path=`${l}.${y({type:"blob",blob:f})}`,c[i]=d.itemRelativeUrl}).catch(()=>{}));const $=o?.compress??!1;t.resources&&U({...e,resource:d,content:a,compress:$,updates:t.resources.toAdd}),c[i]=d.itemRelativeUrl}function V(e){const{context:r,targetUrl:o,params:n,value:t,dest:c,targetPropertyName:i}=e;if(!r.portalItem)return;const s=r.portalItem.resourceFromPath(o),a=w(t,o,r),p=y(a),l=K(s.path),u=n?.compress??!1;p===l?(r.resources&&U({...e,resource:s,content:a,compress:u,updates:r.resources.toUpdate}),c[i]=o):g(e)}function Y({context:e,targetUrl:r,dest:o,targetPropertyName:n}){e.portalItem&&e.resources&&(e.resources.toKeep.push({resource:e.portalItem.resourceFromPath(r),compress:!1}),o[n]=r)}function U({object:e,propertyName:r,updates:o,resource:n,content:t,compress:c}){const i=s=>{k(e,r,s)};o.push({resource:n,content:t,compress:c,finish:i})}function w(e,r,o){return typeof e=="string"?{type:"url",url:r}:{type:"json",jsonString:JSON.stringify(e.toJSON(o))}}function Z(e){return e==null?null:typeof e=="string"?e:e.url}function k(e,r,o){typeof e[r]=="string"?e[r]=o.url:e[r].url=o.url}export{M as j};