import{s as f,bC as u,eR as c,eS as p,aQ as m}from"./index-IeegpAPg.js";async function g(e,s,i,o){if(!s)throw new f("post:missing-guid","guid for version is missing");const t=u(e),r=i.toJSON(),a=c(t.query,{query:p({...r,f:"json"}),...o,method:"post"});s.startsWith("{")&&(s=s.slice(1,-1));const d=`${t.path}/versions/${s}/deleteForwardEdits`,{data:n}=await m(d,a);return n}export{g as deleteForwardEdits};