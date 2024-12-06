import{dV as Te,dT as Ee,dX as Ne,dY as Ie,V as q,bk as ce,s as Q,y as De,ek as xe,n as R,ak as ye,bd as _e,c0 as ge,bi as ne,aZ as me,v as b,w as M,x as Re,e2 as Ae}from"./index-IeegpAPg.js";import{o as U}from"./featureConversionUtils-6nDzGVaS.js";import{s as Oe}from"./OptimizedFeature-CIptWNVu.js";import{u as B,E as ve,A as Se,b as Ge,v as Pe,L as He,m as $e,h as Fe,a as Ue,f as Be,d as T,s as v,t as V,r as Y,e as ze,n as w,o as fe,g as We,c as Le,i as je}from"./KnowledgeGraphSublayer-ClHP5KSe.js";import{F as Qe}from"./knowledgeGraphService-B5omIH9L.js";import"./OptimizedFeatureSet-Blu9Ckm7.js";import"./GraphQueryStreaming-CfWVZE_U.js";import"./UniqueValueRenderer-BRA4hJF2.js";import"./ColorStop-DcLcp94M.js";import"./diffUtils-BsmLiWuX.js";import"./colorRamps-DtdPWJTS.js";import"./sizeVariableUtils-Cmcuvw-4.js";import"./visualVariableUtils-BxjHbii2.js";import"./jsonUtils-Y19K1K5D.js";import"./defaults-Ca7Ezrxv.js";import"./defaultsJSON-GKolV7NZ.js";import"./styleUtils-72oPtPHD.js";import"./jsonUtils-CKn8N5rB.js";import"./LRUCache-B9Ch9jyy.js";import"./FieldsIndex-1XykZMxf.js";import"./UnknownTimeZone-Bp45PPyc.js";import"./OverrideHelper-Beyhf6nl.js";import"./colorUtils-D0_txqzP.js";import"./vec42-DVf6basU.js";import"./vec4f64-CMoMXWBi.js";import"./utils-DyJ7tXUW.js";import"./enums-CmIX1y88.js";import"./quantizationUtils-D5PvWHeA.js";import"./heatmapUtils-gC4I9bES.js";import"./FeatureStore-DmWJhoz6.js";import"./BoundsStore-XOTfmvKy.js";import"./PooledRBush-DP3eGRuy.js";import"./timeSupport-CnzjLscW.js";import"./queryUtils-DnQsJh_n.js";import"./json-Wa8cmqdu.js";import"./optimizedFeatureQueryEngineAdapter-Dms_VuRJ.js";import"./QueryEngine-B_4jw8oK.js";import"./WhereClause-DbgZ3DzV.js";import"./TimeOnly-B5mfw6we.js";import"./QueryEngineCapabilities-DjYb9CEb.js";import"./utils-CbNSqnaG.js";import"./utils-DK90Hjo4.js";import"./utils-DIsahhBE.js";import"./ClassBreaksDefinition-C6O4AXtE.js";import"./clientSideDefaults-8WnztZUi.js";import"./capabilities-Y9lFlGVh.js";import"./fieldProperties-DFyqxTMB.js";import"./FeatureEffectLayer-CX57XnqE.js";import"./FeatureEffect-nunlOgL-.js";import"./FeatureReductionLayer-r6s6_5Sb.js";import"./FeatureReductionSelection-C6wqS4Mb.js";import"./featureLayerUtils-DOfcdp_A.js";import"./labelingInfo-COg3pKpK.js";import"./labelUtils-cNe8bNWP.js";import"./MD5-C9MwAd2G.js";import"./OrderedLayer-T5UFlb3L.js";import"./OrderByInfo-C9JHxA_m.js";import"./TemporalLayer-X1Uvg484.js";import"./TimeInfo-BokYbqlu.js";import"./FeatureSet--t3TP_gY.js";import"./popupUtils-BWB8Dp2p.js";var X;(function(e){e.MULTIPLIER="multiplier",e.ABSOLUTE="absoluteValue"})(X||(X={}));let f=class extends Te(Ee(Ne(Ie(Ae)))){constructor(e){if(super(e),this.dataPreloadedInLocalCache=!1,this.defaultLinkChartConfig=null,this._currentLinkChartConfig={layoutMode:"RADIAL_TREE"},this._graphTypeLookup=new Map,this.dataManager=null,this.knowledgeGraph=null,this.layers=new(q.ofType(B)),this.entityLinkChartDiagramLookup=new Map,this.relationshipLinkChartDiagramLookup=new Map,this.linkChartExtent=new ce({xmin:-1e-7,ymin:-1e-7,xmax:1e-7,ymax:1e-7}),this.memberEntityTypes=null,this.memberRelationshipTypes=null,this.operationalLayerType="LinkChartLayer",this.sublayerIdsCache=new Map,this.tables=new(q.ofType(B)),this.type="link-chart",this.chronologicalAuxiliaryGraphics=null,this._originalInclusionList=e?.inclusionModeDefinition,e?.dataPreloadedInLocalCache&&!e?.inclusionModeDefinition)throw new Q("knowledge-graph:linkchart-layer-constructor","If creating a link chart composite layer and configured that data is already loaded in the cache, you must specify an inclusion list so the Composite Layer knows what records belong to it");this.addHandles(De(()=>this.layers.concat(this.tables),(t,i)=>this._handleSublayersChange(t,i),xe))}normalizeCtorArgs(e){if(!e)return{};const{url:t,title:i,dataPreloadedInLocalCache:a,defaultLinkChartConfig:n}=e;return{url:t,title:i,dataPreloadedInLocalCache:a,defaultLinkChartConfig:n}}_initializeLayerProperties(e){if(!this.title&&this.url){const s=this.url.split("/");this.title=s[s.length-2]}const t=new Set;let i=[],a=[];if(e.inclusionModeDefinition&&(!e.inclusionModeDefinition.namedTypeDefinitions||e.inclusionModeDefinition.namedTypeDefinitions.size<1))throw new Q("knowledge-graph:composite-layer-constructor","If an explicit inclusion definition is defined, at least one namedTypeDefinition must also be defined");e.knowledgeGraph.dataModel.entityTypes?.forEach(s=>{s.name&&this._graphTypeLookup.set(s.name,s)}),e.knowledgeGraph.dataModel.relationshipTypes?.forEach(s=>{s.name&&this._graphTypeLookup.set(s.name,s)}),e.inclusionModeDefinition?.generateAllSublayers?(i=e.knowledgeGraph.dataModel.entityTypes??[],a=e.knowledgeGraph.dataModel.relationshipTypes??[]):e.inclusionModeDefinition?.namedTypeDefinitions&&e.inclusionModeDefinition?.namedTypeDefinitions.size>0?e.inclusionModeDefinition?.namedTypeDefinitions.forEach((s,u)=>{const p=this._graphTypeLookup.get(u);if(!p)return R.getLogger(this).warn(`A named type, ${u}, was in the inclusion list that wasn't in the data model and will be removed`),void e.inclusionModeDefinition?.namedTypeDefinitions.delete(u);p.type==="relationship"?t.has(u)||(t.add(u),a.push(p)):p.type==="entity"?t.has(u)||(t.add(u),i.push(p)):(R.getLogger(this).warn(`A named type, ${u}, was in the inclusion list that wasn't properly modeled and will be removed`),e.inclusionModeDefinition?.namedTypeDefinitions.delete(u))}):(i=e.knowledgeGraph.dataModel.entityTypes??[],a=e.knowledgeGraph.dataModel.relationshipTypes??[]);const n=new ve({knowledgeGraph:e.knowledgeGraph,inclusionModeDefinition:e.inclusionModeDefinition});this.knowledgeGraph=e.knowledgeGraph,this.memberEntityTypes=i,this.memberRelationshipTypes=a,this.dataManager=n}load(e){const t=async()=>{const i=[],a=[];this.loadLayerAssumingLocalCache(),await Le(this),this.dataManager.inclusionModeDefinition&&(this.dataManager.inclusionModeDefinition.generateAllSublayers=!1),this.dataManager.inclusionModeDefinition?.namedTypeDefinitions.forEach(n=>{n.useAllData=!1}),await this._initializeDiagram(),this.layers.forEach(n=>{a.push(n.refreshCachedQueryEngine()),i.push(new Promise(s=>{n.on("layerview-create",()=>{s(null)})}))}),this.tables.forEach(n=>{a.push(n.refreshCachedQueryEngine())}),await Promise.all(a)};return this.addResolvingPromise(new Promise(i=>{Qe(this.url).then(async a=>{if(this._initializeLayerProperties({knowledgeGraph:a,inclusionModeDefinition:this._originalInclusionList}),this.dataManager.inclusionModeDefinition?.namedTypeDefinitions?.size||(this.dataManager.inclusionModeDefinition={generateAllSublayers:!1,namedTypeDefinitions:new Map},this.dataManager.knowledgeGraph.dataModel.entityTypes?.forEach(n=>{n.name&&this.dataManager.inclusionModeDefinition?.namedTypeDefinitions.set(n.name,{useAllData:!0})}),this.dataManager.knowledgeGraph.dataModel.relationshipTypes?.forEach(n=>{n.name&&this.dataManager.inclusionModeDefinition?.namedTypeDefinitions.set(n.name,{useAllData:!0})})),this.dataPreloadedInLocalCache){const n=je.getInstance();for(const[s,u]of this.dataManager.inclusionModeDefinition?.namedTypeDefinitions??[])for(const p of u.members?.values()??[]){const L=n.readFromStoreById(`${s}__${p.id}`);L&&ye(this.dataManager.sublayerCaches,s,()=>new Map).set(p.id,L)}await t()}else{const n=this.defaultLinkChartConfig?.layoutMode==="GEOGRAPHIC";this.addResolvingPromise(this.dataManager.refreshCacheContent(void 0,!1,n,!0).then(async()=>{_e(e),await t()}))}i(null)})})),Promise.resolve(this)}set inclusionModeDefinition(e){this.loadStatus!=="loaded"&&this.loadStatus!=="failed"?this._set("inclusionModeDefinition",e):R.getLogger(this).error("#inclusionModeDefinition","inclusionModeDefinition cannot be changed after the layer is loaded.")}async addRecords(e,t){let i=[];t?.cascadeAddRelationshipEndNodes&&this.dataManager.knowledgeGraph.dataModel&&(i=await Se(e,this.dataManager.knowledgeGraph));const a=e.concat(i).filter(n=>!this.sublayerIdsCache.get(n.typeName)?.has(n.id));await this._handleNewRecords(a)}async removeRecords(e,{cascadeRemoveRelationships:t=!0,recalculateLayout:i=!1}={cascadeRemoveRelationships:!0,recalculateLayout:!1}){let a=[];for(const s of e)this.dataManager.inclusionModeDefinition?.namedTypeDefinitions?.get(s.typeName)?.useAllData===!1&&this.dataManager.inclusionModeDefinition?.namedTypeDefinitions?.get(s.typeName)?.members?.has(s.id)&&a.push(s);if(t){const s=new Set,u=[];for(const p of a)if(this.dataManager.nodeConnectionsLookup.has(p.id))for(const L of this.dataManager.nodeConnectionsLookup.get(p.id))s.add(L);for(const p of s)if(this.dataManager.memberIdTypeLookup.has(p))for(const L of this.dataManager.memberIdTypeLookup.get(p))this.dataManager.relationshipTypeNames.has(L)&&u.push({id:p,typeName:L});a=a.concat(u)}this.dataManager.removeFromLayer(a);for(const s of a)this.sublayerIdsCache.get(s.typeName)?.delete(s.id),this.dataManager.relationshipTypeNames.has(s.typeName)?this.relationshipLinkChartDiagramLookup.delete(s.id):this.entityLinkChartDiagramLookup.delete(s.id);i&&await this._calculateLayoutWithSublayerTimeInfo(this._currentLinkChartConfig.layoutMode,this._currentLinkChartConfig.layoutOptions);const n=[];return this.layers.forEach(s=>{n.push(s.refreshCachedQueryEngine())}),await Promise.all(n),this._refreshNamedTypes(),a}async expand(e,t){const i=await this.dataManager.getConnectedRecordIds(e,t),a=i.filter(n=>!this.sublayerIdsCache.get(n.typeName)?.has(n.id));return await this._handleNewRecords(i),{records:a}}loadLayerAssumingLocalCache(){const e=[...this.memberRelationshipTypes,...this.memberEntityTypes];this.originIdOf("layers")===ge.DEFAULTS?this._createSublayers(e,this.layers,t=>!!t.geometryType):this._updateSublayers(e,this.layers),this.originIdOf("tables")===ge.DEFAULTS?this._createSublayers(e,this.tables,t=>!t.geometryType):this._updateSublayers(e,this.tables),this.dataManager.inclusionModeDefinition?.namedTypeDefinitions?.forEach((t,i)=>{const a=ye(this.sublayerIdsCache,i,()=>new Set);t.members?.forEach(({id:n,linkChartLocation:s})=>{if(a.add(n),s){const u=s instanceof Oe?s:U(s);this.dataManager.relationshipTypeNames.has(i)?this.relationshipLinkChartDiagramLookup.set(n,u):this.entityLinkChartDiagramLookup.set(n,u)}})})}async calculateLinkChartLayout(e="RADIAL_TREE",t){const i=[],a=[],n=[];this.dataManager.sublayerCaches.forEach((o,l)=>{this.dataManager.entityTypeNames.has(l)?o.forEach(r=>{i.push({typeName:l,feature:r})}):this.dataManager.relationshipTypeNames.has(l)&&o.forEach(r=>{a.push({typeName:l,feature:r})})}),this.entityLinkChartDiagramLookup=new Map,this.relationshipLinkChartDiagramLookup=new Map;const s=new Map,u=new Map,p=new Map,L=new Map,k=new Uint8Array(i.length),y=new Float64Array(i.length),g=new Float64Array(i.length),m=new Float64Array(i.length),oe=new Float64Array(i.length),Z=new Uint32Array(a.length),J=new Uint32Array(a.length),se=new Float64Array(a.length),re=new Float64Array(a.length),c=[],Ce="FORCE_DIRECTED",x=new ce({xmin:-1e-7,ymin:-1e-7,xmax:1e-7,ymax:1e-7});let P,le="FORCE_DIRECTED",d=0,E=0;const be=Ge.apply;switch(le=e==="GEOGRAPHIC"?Ce:e,le){case"FORCE_DIRECTED":P=Be.apply;break;case"COMMUNITY":P=Ue.apply;break;case"HIERARCHICAL":P=Fe.apply;break;case"RADIAL_TREE":P=$e.apply;break;case"SMART_TREE":P=He.apply;break;default:P=Pe.apply}let K=!1;i.forEach(({typeName:o,feature:l})=>{if(e!=="CHRONOLOGICAL_SINGLE"&&e!=="CHRONOLOGICAL_MULTIPLE"&&t?.lockedNodeLocations?.has(l.attributes[T])){e==="GEOGRAPHIC"&&this.dataManager.geographicLookup.has(o)?k[d]=v.IsGeographic:k[d]=v.None;const r=t.lockedNodeLocations.get(l.attributes[T]);y[d]=r.x,g[d]=r.y}else if(e==="GEOGRAPHIC"&&this.dataManager.geographicLookup.has(o)){k[d]=v.IsGeographic;let r=null;const I=l.attributes[this.dataManager.geographicLookup.get(o).name];switch(this.dataManager.geographicLookup.get(o)?.geometryType){case"esriGeometryPoint":y[d]=I?.x,g[d]=I?.y;break;case"esriGeometryPolygon":r=I?.centroid,r?.x!=null&&r?.y!=null?(y[d]=r.x,g[d]=r.y):k[d]=v.IsMovable;break;case"esriGeometryPolyline":case"esriGeometryMultipoint":r=I?.extent?.center,r?.x!=null&&r?.y!=null?(y[d]=r.x,g[d]=r.y):k[d]=v.IsMovable;break;default:k[d]=v.IsMovable}(y[d]==null||g[d]==null||Number.isNaN(y[d])||Number.isNaN(g[d]))&&(k[d]=v.IsMovable,y[d]=0,g[d]=0)}else if(e==="CHRONOLOGICAL_SINGLE"||e==="CHRONOLOGICAL_MULTIPLE"){!K&&t?.lockedNodeLocations?.has(l.attributes[T])&&(K=!0);const r=t?.timeInfoByTypeName?.get(o),I=r?.startField,A=I&&r?.startField?l.attributes[I]:null;m[d]=A?new Date(A).getTime():NaN;const C=r?.endField,D=C&&r?.endField?l.attributes[C]:null;oe[d]=D?new Date(D).getTime():NaN,y[d]=0,g[d]=0,k[d]=v.IsMovable}else k[d]=v.IsMovable,y[d]=0,g[d]=0;L.set(l.attributes[T],d),c[d]={feature:l,typeName:o},d++}),K&&R.getLogger(this).warn("Locked node locations are not supported for chronological layout at this time.  Requested node locations were ignored");let he=!1;const ee=new Map;a.forEach(o=>{const l=o.feature.attributes[V],r=o.feature.attributes[Y],I=L.get(l),A=L.get(r),C=t?.timeInfoByTypeName?.get(o.typeName),D=t?.timeInfoByTypeName?C?.startField:null,O=D?o.feature.attributes[D]:null,j=C?.endField,H=j?o.feature.attributes[j]:null;if(I!==void 0&&A!==void 0){let S=l+"-"+r;e!=="CHRONOLOGICAL_SINGLE"&&e!=="CHRONOLOGICAL_MULTIPLE"||(S=S+"-"+O+"-"+H);const F=ee.get(S);F?.has(o.typeName)||(Z[E]=I,J[E]=A,e!=="CHRONOLOGICAL_SINGLE"&&e!=="CHRONOLOGICAL_MULTIPLE"||(se[E]=O?new Date(O).getTime():NaN,re[E]=H?new Date(H).getTime():NaN),F===void 0?ee.set(S,new Map([[o.typeName,E]])):F.set(o.typeName,E),E++),n.push(o)}else he=!0,this.relationshipLinkChartDiagramLookup.set(l,null)}),he&&R.getLogger(this).warn("A relationship is a member of this layer that has either origin or destination entity nodes that are not members. The diagram geometry will be set to null");const de=this._validateLayoutSettings(e,t),te=this._convertLayoutSettingsToCalculationSettings(de);await ze();let z=!1,N=null;if(e==="CHRONOLOGICAL_SINGLE"||e==="CHRONOLOGICAL_MULTIPLE"){let o;({success:z,links:N,graphics:o}=be(k,y,g,m,oe,Z.subarray(0,E),J.subarray(0,E),se.subarray(0,E),re.subarray(0,E),e==="CHRONOLOGICAL_MULTIPLE",t?.chronologicalLayoutSettings??{})),z&&(this.chronologicalAuxiliaryGraphics=o)}else({success:z,links:N}=P(k,y,g,Z.subarray(0,E),J.subarray(0,E),te.computationBudgetTime,te.idealEdgeLengthMultiplier,te.repulsionRadiusMultiplier));if(!z)throw new Q("knowledge-graph:layout-failed","Attempting to arrange the records in the specified layout failed");for(let o=0;o<c.length;o++){if(g[o]>84.9999?g[o]=84.9999:g[o]<-84.9999&&(g[o]=-84.9999),y[o]>179.9999?y[o]=179.9999:y[o]<-179.9999&&(y[o]=-179.9999),c[o].feature.attributes[w]=new ne(y[o],g[o]),s.has(c[o].typeName))s.get(c[o].typeName)?.set(c[o].feature.attributes[T],c[o].feature);else{const r=new Map;r.set(c[o].feature.attributes[T],c[o].feature),s.set(c[o].typeName,r)}p.set(c[o].feature.attributes[T],c[o].feature);const l=U(c[o].feature.attributes[w]);this.entityLinkChartDiagramLookup.set(c[o].feature.attributes[T],c[o].feature.attributes[w]?l:null),c[o].feature.attributes[w].x<x.xmin&&(x.xmin=c[o].feature.attributes[w].x),c[o].feature.attributes[w].x>x.xmax&&(x.xmax=c[o].feature.attributes[w].x),c[o].feature.attributes[w].y<x.ymin&&(x.ymin=c[o].feature.attributes[w].y),c[o].feature.attributes[w].y>x.ymax&&(x.ymax=c[o].feature.attributes[w].y)}if(this.linkChartExtent.xmin=x.xmin,this.linkChartExtent.xmax=x.xmax,this.linkChartExtent.ymin=x.ymin,this.linkChartExtent.ymax=x.ymax,!N)throw new Q("knowledge-graph:layout-failed","Attempting to retrieve link geometry from diagram engine failed");const W=new Map,ae=new Map,ie=new Map,ue=new Set;for(let o=0;o<n.length;o++){const l=[],r=n[o],I=r.feature.attributes[V],A=r.feature.attributes[Y];let C=I+"-"+A;if(e==="CHRONOLOGICAL_SINGLE"||e==="CHRONOLOGICAL_MULTIPLE"){const h=t?.timeInfoByTypeName?.get(r.typeName),_=t?.timeInfoByTypeName?h?.startField:null,G=_?r.feature.attributes[_]:null,$=h?.endField;C+="-"+G+"-"+($?r.feature.attributes[$]:null)}const D=ee.get(C).get(r.typeName),O=D===0?0:N?.vertexEndIndex[D-1];if(!ue.has(D)){if(ue.add(D),N.types[D]===fe.Recursive){const h=[N.vertices[2*O],N.vertices[2*O+1]],_=[N.vertices[2*(O+1)],N.vertices[2*(O+1)+1]],G=[.5*(h[0]+_[0]),.5*(h[1]+_[1])],$=[G[0]-h[0],G[1]-h[1]],we=[G[0]+$[1],G[1]-$[0]],ke=[G[0]-$[1],G[1]+$[0]];l.push(h),l.push(we),l.push(_),l.push(ke),l.push(h)}else{if(N.types[D]!==fe.Regular){R.getLogger(this).warn("A relationship generated an unsupported link geometry type.  It will not be rendered");continue}for(let h=O;h<N.vertexEndIndex[D];h++)l.push([N.vertices[2*h],N.vertices[2*h+1]])}if(e!=="CHRONOLOGICAL_SINGLE"&&e!=="CHRONOLOGICAL_MULTIPLE"){const h=c[L.get(I)]?.feature.attributes[w],_=c[L.get(A)]?.feature.attributes[w];l[0][0]===h.x&&l[0][1]===h.y||(l[0]=[h.x,h.y]),l[l.length-1][0]===_.x&&l[l.length-1][1]===_.y||(l[l.length-1]=[_.x,_.y])}for(let h=1;h<l.length-1;h++)l[h][1]>85.5?l[h][1]=85.5:l[h][1]<-85.5&&(l[h][1]=-85.5),l[h][0]>179.9999?l[h][0]=179.9999:l[h][0]<-179.9999&&(l[h][0]=-179.9999);W.has(C)?W.get(C).push(l):W.set(C,[l])}const j=W.get(C);ae.has(C)||(ae.set(C,new Map),ie.set(C,new Map));const H=ae.get(C),S=ie.get(C);H.has(r.typeName)||(H.set(r.typeName,j.shift()),S.set(r.typeName,0));const F=H.get(r.typeName);S.set(r.typeName,S.get(r.typeName)+1);const pe=new me({paths:[F]});if(r.feature.attributes[w]=pe,u.has(r.typeName))u.get(r.typeName)?.set(r.feature.attributes[T],r.feature);else{const h=new Map;h.set(r.feature.attributes[T],r.feature),u.set(r.typeName,h)}p.set(r.feature.attributes[T],r.feature);const Me=U(r.feature.attributes[w]);this.relationshipLinkChartDiagramLookup.set(r.feature.attributes[T],r.feature.attributes[w]?Me:null)}for(const o of n)o.feature.attributes[We]=ie.get(o.feature.attributes[V]+"-"+o.feature.attributes[Y])?.get(o.typeName)??null;return this._currentLinkChartConfig={layoutMode:e,layoutOptions:de},{nodes:s,links:u,idMap:p}}async applyNewLinkChartLayout(e="RADIAL_TREE",t){const i=[];await this._calculateLayoutWithSublayerTimeInfo(e,t),this.layers.forEach(a=>{i.push(a.refreshCachedQueryEngine())}),await Promise.all(i),this._refreshNamedTypes()}getCurrentNodeLocations(){const e=new Map;return this.dataManager.inclusionModeDefinition?.namedTypeDefinitions?.forEach(t=>{t?.members?.forEach(i=>{const a=i.linkChartLocation;let n;const s=i.id;a&&(n="x"in a?{x:a.x,y:a.y}:{x:a.coords[0],y:a.coords[1]},e.set(s,new ne({x:n.x,y:n.y})))})}),e}async synchronizeInclusionListWithCache(){return new Promise(e=>{this.dataManager.inclusionModeDefinition?.namedTypeDefinitions.forEach((t,i)=>{if(t.useAllData=!1,t.members&&t.members.size>0){if(!this.dataManager.sublayerCaches.get(i))return;const a=new Set(Array.from(this.dataManager.sublayerCaches.get(i).keys()));Array.from(t.members.keys()).filter(n=>!a.has(n)).forEach(n=>{t.members?.delete(n)})}}),e()})}async refreshLinkChartCache(e){await this.dataManager.refreshCacheContent(e);const t=[];this.layers.forEach(i=>{t.push(i.refreshCachedQueryEngine())}),await Promise.all(t),this._refreshNamedTypes()}async connectBetweenEntities(e){let t=[];for(const a of this.dataManager.relationshipTypeNames){const n=this.sublayerIdsCache.get(a);n&&(t=t.concat(Array.from(n.keys())))}const i=await this.dataManager.getRelationshipsBetweenNodes(e,t);return await this._handleNewRecords(i),{records:i}}async connectFromEntities(e){let t=[];for(const n of this.dataManager.relationshipTypeNames){const s=this.sublayerIdsCache.get(n);s&&(t=t.concat(Array.from(s.keys())))}let i=[];for(const n of this.dataManager.entityTypeNames){const s=this.sublayerIdsCache.get(n);s&&(i=i.concat(Array.from(s)))}const a=await this.dataManager.getRelationshipsFromNodes(e,i,t);return await this._handleNewRecords(a),{records:a}}getCurrentLayout(){return this._currentLinkChartConfig.layoutMode}async _calculateLayoutWithSublayerTimeInfo(e="RADIAL_TREE",t){const i=new Map;this.layers.forEach(a=>{i.set(a.objectType.name,a.timeInfo)}),await this.calculateLinkChartLayout(e,{timeInfoByTypeName:i,...t})}async _handleNewRecords(e){const t=[];this.dataManager.addToLayer(e);for(const a of e)this.sublayerIdsCache.has(a.typeName)||(this.sublayerIdsCache.set(a.typeName,new Set),t.push(a.typeName)),this.sublayerIdsCache.get(a.typeName).add(a.id);for(const a of t){const n=this._graphTypeLookup.get(a);if(n){const s=this._createSublayer(n);n.type==="entity"?this.dataManager.entityTypeNames.add(a):this.dataManager.relationshipTypeNames.add(a),s.geometryType?this.layers.push(s):this.tables.push(s),this.dataManager.sublayerCaches.set(a,new Map)}}await Le(this,t),await this.dataManager.refreshCacheContent(e.map(a=>a.id));const i=Object.assign({},this._currentLinkChartConfig.layoutOptions);i.lockedNodeLocations=new Map;for(const[a,n]of this.entityLinkChartDiagramLookup.entries())n&&i.lockedNodeLocations.set(a,new ne(n.coords[0],n.coords[1]));await this.applyNewLinkChartLayout(this._currentLinkChartConfig.layoutMode,i)}_createSublayers(e,t,i){e.forEach(a=>{const n=this._createSublayer(a);i(n)&&t.push(n),this._updateSublayerCaches(a)})}_updateSublayers(e,t){t.forEach(i=>{i.parentCompositeLayer=this;const a=e.find(n=>n.type===i.graphType&&n.name===i.graphTypeName);a&&(i.objectType=a,i.read({title:a.name},{origin:"service"}),this._updateSublayerCaches(a))})}_updateSublayerCaches(e){const t=this.dataManager.sublayerCaches;t.has(e.name)||t.set(e.name,new Map)}async _initializeDiagram(){this.defaultLinkChartConfig?this.defaultLinkChartConfig.doNotRecalculateLayout?(this.dataManager.inclusionModeDefinition?.namedTypeDefinitions?.forEach((e,t)=>{e?.members?.forEach(i=>{const a=i.linkChartLocation;let n;const s=i.id;if(!a)return;n="x"in a?{x:a.x,y:a.y}:{x:a.coords[0],y:a.coords[1]};const u=U(n);this.dataManager.relationshipTypeNames.has(t)?this.relationshipLinkChartDiagramLookup.set(s,u):this.entityLinkChartDiagramLookup.set(s,u),this.linkChartExtent.xmin>n.x&&(this.linkChartExtent.xmin=n.x),this.linkChartExtent.xmax<n.x&&(this.linkChartExtent.xmax=n.x),this.linkChartExtent.ymin>n.y&&(this.linkChartExtent.ymin=n.y),this.linkChartExtent.ymax<n.y&&(this.linkChartExtent.ymax=n.y)})}),this.memberRelationshipTypes.forEach(e=>{e.name&&this.dataManager.sublayerCaches.get(e.name)?.forEach(t=>{const i=this.relationshipLinkChartDiagramLookup.get(t.attributes[V]),a=this.relationshipLinkChartDiagramLookup.get(t.attributes[Y]);if(i&&a){const n=U(new me({paths:[[[i.coords[0],i.coords[1]],[a.coords[0],a.coords[1]]]]}));this.relationshipLinkChartDiagramLookup.set(t.attributes[T],n)}else this.relationshipLinkChartDiagramLookup.set(t.attributes[T],null)})})):await this._calculateLayoutWithSublayerTimeInfo(this.defaultLinkChartConfig.layoutMode,{lockedNodeLocations:this.getCurrentNodeLocations(),...this.defaultLinkChartConfig.layoutOptions||{}}):await this._calculateLayoutWithSublayerTimeInfo("RADIAL_TREE",{lockedNodeLocations:this.getCurrentNodeLocations()})}_refreshNamedTypes(){for(const e of this.layers)e.emit("refresh",{dataChanged:!0});for(const e of this.tables)e.emit("refresh",{dataChanged:!0})}_validateLayoutSettings(e,t){const i=m=>typeof m=="number"&&!isNaN(m),a=m=>i(m)&&m>=1,n=m=>i(m)&&m>=1,s=m=>Object.values(X).includes(m),u=m=>i(m)&&m>=0,p={organicLayoutSettings:{},chronologicalLayoutSettings:{}};if(!new Set(["FORCE_DIRECTED","COMMUNITY","GEOGRAPHIC","CHRONOLOGICAL_MULTIPLE","CHRONOLOGICAL_SINGLE"]).has(e)||!t)return p;t.organicLayoutSettings??={};const{computationBudgetTime:L,repulsionRadiusMultiplier:k,idealEdgeLength:y,idealEdgeLengthType:g}=t.organicLayoutSettings;if(n(L)?p.organicLayoutSettings.computationBudgetTime=L:L!==void 0&&R.getLogger(this).warn("Invalid layout computationBudgetTime setting, will revert to default setting"),a(k)?p.organicLayoutSettings.repulsionRadiusMultiplier=k:k!==void 0&&R.getLogger(this).warn("Invalid layout repulsionRadiusMultiplier setting, will revert to default setting"),e==="GEOGRAPHIC"&&(y!==void 0||g!==void 0)&&(s(g)?p.organicLayoutSettings.idealEdgeLengthType=g:g!==void 0&&R.getLogger(this).warn('Invalid layout idealEdgeLengthType setting, will revert to "multiplier" setting'),u(y)?p.organicLayoutSettings.idealEdgeLength=y:y!==void 0&&R.getLogger(this).warn("Invalid layout idealEdgeLength setting, will revert to default setting")),(e==="CHRONOLOGICAL_MULTIPLE"||e==="CHRONOLOGICAL_SINGLE")&&t.chronologicalLayoutSettings){const m=t.chronologicalLayoutSettings;m.durationLineWidth&&m.durationLineWidth<0&&R.getLogger(this).warn("Invalid layout durationLineWidth setting, will revert to default setting")}return p}_convertLayoutSettingsToCalculationSettings(e){e.organicLayoutSettings??={};let t=e.organicLayoutSettings.idealEdgeLength;return e.organicLayoutSettings.idealEdgeLengthType===X.ABSOLUTE&&(t===void 0?t=-1:t*=-1),{computationBudgetTime:e.organicLayoutSettings.computationBudgetTime,repulsionRadiusMultiplier:e.organicLayoutSettings.repulsionRadiusMultiplier,idealEdgeLengthMultiplier:t}}_createSublayer(e){return new B({objectType:e,parentCompositeLayer:this,graphType:e.type})}_handleSublayersChange(e,t){t&&(t.forEach(i=>{i.parent=null}),this.removeHandles("sublayers-owner")),e&&(e.forEach(i=>{i.parent=this}),this.addHandles([e.on("after-add",({item:i})=>{i.parent=this}),e.on("after-remove",({item:i})=>{i.parent=null})],"sublayers-owner"))}};b([M()],f.prototype,"dataPreloadedInLocalCache",void 0),b([M()],f.prototype,"defaultLinkChartConfig",void 0),b([M()],f.prototype,"dataManager",void 0),b([M()],f.prototype,"inclusionModeDefinition",null),b([M()],f.prototype,"knowledgeGraph",void 0),b([M({type:q.ofType(B),json:{write:{ignoreOrigin:!0}}})],f.prototype,"layers",void 0),b([M()],f.prototype,"entityLinkChartDiagramLookup",void 0),b([M()],f.prototype,"relationshipLinkChartDiagramLookup",void 0),b([M()],f.prototype,"linkChartExtent",void 0),b([M()],f.prototype,"memberEntityTypes",void 0),b([M()],f.prototype,"memberRelationshipTypes",void 0),b([M({type:["LinkChartLayer"]})],f.prototype,"operationalLayerType",void 0),b([M()],f.prototype,"sublayerIdsCache",void 0),b([M({type:q.ofType(B),json:{write:{ignoreOrigin:!0}}})],f.prototype,"tables",void 0),b([M({json:{read:!1}})],f.prototype,"type",void 0),b([M({json:{read:!1}})],f.prototype,"chronologicalAuxiliaryGraphics",void 0),f=b([Re("esri.layers.LinkChartLayer")],f);const ea=f;export{ea as default};
