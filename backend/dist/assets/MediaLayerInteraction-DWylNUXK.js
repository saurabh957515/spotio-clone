const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/editingTools-Dh_au3RQ.js","assets/index-IeegpAPg.js","assets/index-D9t-g9sQ.css","assets/enums-CmIX1y88.js","assets/projectVectorToVector-BC8Nx4RI.js","assets/projectPointToVector-CtCQTVn5.js","assets/elevationInfoUtils-B_iUzxp9.js","assets/geodesicUtils-DPkE74ap.js","assets/geometryEngine-py4O6gjY.js","assets/geometryEngineBase-8g0RzW7z.js","assets/_commonjsHelpers-DCkdB7M8.js","assets/hydrated-xYJZWj2j.js","assets/quat-DNoYUhoj.js","assets/mat3f64-q3fE-ZOt.js","assets/quatf64-aQ5IuZRd.js","assets/vec42-DVf6basU.js","assets/ReactiveSet-AKhvrCuc.js","assets/ByteSizeUnit-BsxeN7wM.js","assets/vec4f64-CMoMXWBi.js","assets/plane-Br_kpZFb.js","assets/mat4f64-CSKppSlJ.js","assets/sphere-qRiW3p7L.js","assets/MeshTransform-K-aqe5uA.js","assets/meshVertexSpaceUtils-hKPRZL_4.js","assets/MeshLocalVertexSpace-CQJobtM1.js","assets/earcut-Lltz9D9k.js","assets/triangle-Lr-La2yJ.js","assets/lineSegment-BTVBW5NI.js","assets/spatialReferenceEllipsoidUtils-BLVRTiuE.js","assets/diffUtils-BsmLiWuX.js","assets/cimSymbolUtils-B6qzjiDK.js","assets/utils-DyJ7tXUW.js","assets/defaults-Ca7Ezrxv.js","assets/defaultsJSON-GKolV7NZ.js","assets/drapedUtils-BBdrhDC3.js","assets/colorUtils-D0_txqzP.js","assets/boundedPlane-CZohO7Ps.js"])))=>i.map(i=>d[i]);
import{aH as m,eT as v,eU as y,k as l,eV as g,P as r,eW as d,eX as T,_ as w,v as s,w as i,x as E}from"./index-IeegpAPg.js";const h={redo:"r",undo:"z"},c=Symbol(),_=Symbol(),p=Symbol();let n=class extends m{constructor(e){super(e),this._tool=null,this._updatingHandles=new v,this.enabled=!1,this._onPointerMove=y(async t=>{const o=await this._updatingHandles.addPromise(this._findElementAtScreenPoint(t));this.destroyed||(this.removeHandles(_),o&&o!==this.selectedElement&&(this.view.cursor="pointer",this.addHandles(l(()=>this.view.cursor=null),_)))})}initialize(){this.addHandles(g(this._updatingHandles)),this._updatingHandles.add(()=>this.enabled,e=>this._setEnabled(e),r),this._updatingHandles.add(()=>this._preferredInteractionTool,()=>this._preferredInteractionToolChanged())}get _validatedSelectedElement(){const e=this.selectedElement;if(!e)return null;const{layer:{source:t}}=this;return t?"hasElement"in t?t.hasElement(e)?e:null:t===e?e:null:null}get _preferredInteractionTool(){return this.options?.tool??"transform"}get updating(){return this._updatingHandles.updating}_setEnabled(e){if(this.removeHandles(c),!e)return;const{view:t}=this;this.addHandles([t.on("immediate-click",o=>this._onClick(o),d.TOOL),t.on("pointer-move",o=>this._onPointerMove(o).catch(()=>{}),d.TOOL),t.on("key-down",o=>{o.key===h.undo&&this._tool?.canUndo()&&(this._tool.undo(),o.stopPropagation()),o.key===h.redo&&this._tool?.canRedo()&&(this._tool.redo(),o.stopPropagation())}),this._updatingHandles.add(()=>this._validatedSelectedElement,o=>this._selectedElementChanged(o),r),l(()=>{t.cursor=null,this._removeTool()})],c)}async _findElementAtScreenPoint(e){const t=(await this.view.hitTest(e,{include:[this.layer]})).results[0];return t?.type==="media"?t.element:null}async _onClick(e){await this._updatingHandles.addPromise(e.async(async()=>{const t=await this._findElementAtScreenPoint(e);this.destroyed||(t&&e.stopPropagation(),this.selectedElement=t,this.selectedElement&&(this.view.cursor=null))}))}_preferredInteractionToolChanged(){const{_tool:e}=this;e&&(this._preferredInteractionTool===e.type||this._updatingHandles.addPromise(this._recreateTool()))}async _recreateTool(){this.removeHandles(p),this._removeTool();const e=this._validatedSelectedElement;if(!e)return;const t=new AbortController;this.addHandles(T(t),p);const{TransformTool:o,ControlPointsTransformTool:u}=await w(()=>import("./editingTools-Dh_au3RQ.js"),__vite__mapDeps([0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36]));if(t.signal.aborted)return;const{view:a}=this;switch(this._preferredInteractionTool){case"transform":this._tool=new o({target:e,view:a});break;case"reshape":this._tool=new u({mediaElement:e,view:a})}this.addHandles([l(()=>{this._tool&&(a.tools.remove(this._tool),this._tool=null)})],this._tool),a.addAndActivateTool(this._tool)}_removeTool(){this._tool&&this.removeHandles(this._tool)}async _selectedElementChanged(e){e?.georeference?await this._updatingHandles.addPromise(this._recreateTool()):this._removeTool()}};s([i()],n.prototype,"_validatedSelectedElement",null),s([i()],n.prototype,"_preferredInteractionTool",null),s([i({constructOnly:!0})],n.prototype,"view",void 0),s([i({constructOnly:!0})],n.prototype,"layer",void 0),s([i()],n.prototype,"selectedElement",void 0),s([i()],n.prototype,"enabled",void 0),s([i()],n.prototype,"options",void 0),s([i()],n.prototype,"updating",null),n=s([E("esri.views.2d.layers.support.MediaLayerInteraction")],n);export{n as MediaLayerInteraction};
