const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/MediaLayerInteraction-DWylNUXK.js","assets/index-IeegpAPg.js","assets/index-D9t-g9sQ.css"])))=>i.map(i=>d[i]);
import{fK as F,fJ as I,y as p,P as x,aa as G,fL as W,fM as E,n as b,s as U,C as Q,E as j,G as L,fG as B,v as a,w as d,x as T,aH as J,V as K,gC as V,_ as N,S as P,p as X,f as Y,i as Z,i5 as ee,o as te,bk as ie,ak as re,b3 as se,i6 as ne}from"./index-IeegpAPg.js";import"./UniqueValueRenderer-BRA4hJF2.js";import"./jsonUtils-CKn8N5rB.js";import{j as oe,m as O}from"./perspectiveUtils-Csd4o2wK.js";import"./colorUtils-D0_txqzP.js";import"./utils-DyJ7tXUW.js";import{d as q}from"./enums-CmIX1y88.js";import"./floatRGBA-CWXyMtGj.js";import"./UpdateTracking2D-gAJU1rbE.js";import"./GeometryUtils-B6ZhES5h.js";import"./defaults-Ca7Ezrxv.js";import"./OverrideHelper-Beyhf6nl.js";import{e as ae}from"./Container-C2qpHSCx.js";import"./WGLContainer-CL3kB6Gn.js";import"./Program-vCUOXcd1.js";import"./LabelMetric-CjQSsSXf.js";import"./StyleDefinition-BTt_i6C1.js";import"./enums-BRzLM11V.js";import"./GridShader-nsQodRpm.js";import"./pbf-DkH7zH7h.js";import"./FeatureCommandQueue-CcrO3amX.js";import"./PieChartMeshWriter-BdAY2b1O.js";import"./renderState-G6XOSrbk.js";import"./interfaces-DDtDqZYj.js";import"./testSVGPremultipliedAlpha-BdwbaLSA.js";import"./GraphicsView2D-Cw44kt5e.js";import"./earcut-Lltz9D9k.js";import"./vec3f32-nZdmKIgz.js";import{e as le}from"./mat3f64-q3fE-ZOt.js";import{f as he}from"./utils-C3cIQLjc.js";import{u as me}from"./OverlayContainer-Cg7m9Gtt.js";import{j as de,y as pe}from"./LayerView-DUaSkTLa.js";import"./ColorStop-DcLcp94M.js";import"./diffUtils-BsmLiWuX.js";import"./colorRamps-DtdPWJTS.js";import"./sizeVariableUtils-Cmcuvw-4.js";import"./visualVariableUtils-BxjHbii2.js";import"./jsonUtils-Y19K1K5D.js";import"./defaultsJSON-GKolV7NZ.js";import"./styleUtils-72oPtPHD.js";import"./LRUCache-B9Ch9jyy.js";import"./FieldsIndex-1XykZMxf.js";import"./UnknownTimeZone-Bp45PPyc.js";import"./heatmapUtils-gC4I9bES.js";import"./vec42-DVf6basU.js";import"./vec4f64-CMoMXWBi.js";import"./normalizeUtilsSync-CIrM6ohr.js";import"./BidiEngine-DNnuvc1i.js";import"./OptimizedFeature-CIptWNVu.js";import"./Rect-CUzevAry.js";import"./BindType-BmZEZMMh.js";import"./Util-ByG6sjfF.js";import"./quantizationUtils-D5PvWHeA.js";import"./BufferObject-Bnu6dY3p.js";import"./VertexArrayObject-CJcekOdQ.js";import"./VertexElementDescriptor-BOD-G50G.js";import"./ProgramTemplate-XgYhCHLK.js";import"./config-MDUrh2eL.js";import"./featureConversionUtils-6nDzGVaS.js";import"./OptimizedFeatureSet-Blu9Ckm7.js";import"./CircularArray-CujHzHWW.js";import"./AttributeStore-Dtd8nlCC.js";import"./TimeOnly-B5mfw6we.js";import"./timeSupport-CnzjLscW.js";import"./queryUtils-DnQsJh_n.js";import"./json-Wa8cmqdu.js";import"./labelUtils-cNe8bNWP.js";import"./constants-F8oTIn7N.js";import"./TurboLine-D77Zoaf8.js";import"./basicInterfaces-CZwQPxTp.js";import"./grouping-BYdbFIQV.js";import"./layerViewUtils-CjvtRAuv.js";const k=[1,1],u=le(),ce={none:q.None,loop:q.Loop,oscillate:q.Oscillate};function ue(t){return t?{type:"CIMAnimatedSymbolProperties",...t,playAnimation:t.playing,repeatType:t.repeatType?ce[t.repeatType]:void 0}:{type:"CIMAnimatedSymbolProperties"}}let ye=class extends ae{constructor(e){super(),this.elementView=e,this.isWrapAround=!1,this.wrapAroundShift=0,this.perspectiveTransform=F(),this._handles=new I,this._vertices=new Float32Array(8),this._indices=new Uint16Array([0,0,0,1,1,0,1,1,1,1,0,0,0,0,0,1,1,0,1,1]),this._handles.add([p(()=>this.elementView.element.opacity,i=>this.opacity=i,x),p(()=>[this.elementView.coords],()=>{this.requestRender()},x),p(()=>["animationOptions"in this.elementView.element&&this.elementView.element.animationOptions],()=>{this._handles.remove("play"),this.texture=G(this.texture),this.requestRender()},x),W(()=>this.elementView.element.loaded,()=>{const i=this.elementView.element;this.ready(),i.type==="video"&&i.content!=null&&(this._handles.add([E(i.content,"play",()=>this.requestRender()),E(i.content,"loadeddata",()=>this.requestRender()),E(i.content,"loaded",()=>this.requestRender())]),"requestVideoFrameCallback"in i.content?i.content.requestVideoFrameCallback(()=>this.requestRender()):this._handles.add([E(i.content,"seeked",()=>this.requestRender())]),this.requestRender())},x)]),e.element.load().catch(i=>{b.getLogger("esri.views.2d.layers.MediaLayerView2D").error(new U("element-load-error","Element cannot be displayed",{element:e,error:i}))})}getMesh(e){throw new Error("Method not implemented.")}destroy(){this._handles.destroy(),this.texture=G(this.texture)}get textureSize(){return k}get dvsMat3(){return this.parent.dvsMat3}beforeRender(e){const{context:i}=e,r=this.elementView.element.content;if(r!=null){const n=r instanceof HTMLImageElement,o=r instanceof HTMLVideoElement,s=n?r.naturalWidth:o?r.videoWidth:r.width,m=n?r.naturalHeight:o?r.videoHeight:r.height;if(this._updatePerspectiveTransform(s,m),this.texture)o&&(this.texture.setData(r),this.texture.generateMipmap(),"requestVideoFrameCallback"in r?r.requestVideoFrameCallback(()=>this.requestRender()):r.paused||this.requestRender());else{const h=new Q;if(h.wrapMode=j.CLAMP_TO_EDGE,h.preMultiplyAlpha=!0,h.width=s,h.height=m,"getFrame"in r){const _=c=>{this.texture?this.texture.setData(c):this.texture=new L(i,h,c),this.requestRender()};"animationOptions"in this.elementView.element&&this._handles.add(he(r,ue(this.elementView.element.animationOptions),null,_),"play")}else this.texture=new L(i,h,r);this.texture.generateMipmap(),o&&("requestVideoFrameCallback"in r?r.requestVideoFrameCallback(()=>this.requestRender()):r.paused||this.requestRender())}}super.beforeRender(e)}_createTransforms(){return null}draw(e,i){this.isReady&&this.texture!=null?i.render(e,{transform:{dvs:this.dvsMat3},config:{perspective:this.perspectiveTransform,texSize:k,wrapAroundShift:this.wrapAroundShift,isWrapAround:this.isWrapAround,opacity:this.opacity,texture:{texture:this.texture,unit:0}},position:this._vertices,tex:this._indices}):this.requestRender()}updateDrawCoords(e,i,r,n){const{coords:o,bounds:s}=this.elementView;if(o==null||s==null)return;const[m,h,_,c]=o.rings[0],z=this._vertices,{x:v,y:w}=e;z.set([h[0]-v,h[1]-w,m[0]-v,m[1]-w,_[0]-v,_[1]-w,c[0]-v,c[1]-w]);let g=i;if(n){const[C,,S]=s,{worldWidth:$,xBounds:D}=n,[A,M]=D;C<A&&S>A?g=$:S>M&&C<M&&(g=-$)}this.wrapAroundShift=g,this.isWrapAround=g!==0}_updatePerspectiveTransform(e,i){const r=this._vertices;oe(u,[0,0,e,0,0,i,e,i],[r[0],r[1],r[4],r[5],r[2],r[3],r[6],r[7]]),B(this.perspectiveTransform,u[6]/u[8]*e,u[7]/u[8]*i)}},R=class extends J{constructor(){super(...arguments),this.tool="transform"}};a([d()],R.prototype,"tool",void 0),R=a([T("esri.views.3d.layers.support.MediaLayerInteractionOptions")],R);const fe=t=>{let e=class extends t{constructor(...i){super(...i),this.layer=null,this.interactive=!1,this.interactionOptions=new R,this.selectedElement=null}};return a([d()],e.prototype,"layer",void 0),a([d()],e.prototype,"interactive",void 0),a([d()],e.prototype,"interactionOptions",void 0),a([d()],e.prototype,"selectedElement",void 0),e=a([T("esri.views.layers.MediaLayerView")],e),e};let f=class extends de(fe(pe)){constructor(){super(...arguments),this._overlayContainer=null,this._fetchQueue=null,this._tileStrategy=null,this._elementReferences=new Map,this._debugGraphicsView=null,this._interaction=null,this.layer=null,this.elements=new K}initialize(){this.addHandles([p(()=>[this.interactive,this.suspended],async()=>{if(this.interactive&&!this._interaction){const{MediaLayerInteraction:t}=await N(()=>import("./MediaLayerInteraction-DWylNUXK.js"),__vite__mapDeps([0,1,2]));this._interaction=new t({view:this.view,layer:this.layer}),this.selectedElement!==this._interaction.selectedElement&&(this._interaction.selectedElement=this.selectedElement),this.interactionOptions!==this._interaction.options&&(this._interaction.options=this.interactionOptions)}this._interaction&&(this._interaction.enabled=!this.suspended&&this.interactive)},V),p(()=>this.interactionOptions,t=>{this._interaction&&(this._interaction.options=t)},V),p(()=>this.selectedElement,t=>{this._interaction&&(this._interaction.selectedElement=t)},V)])}attach(){this.addAttachHandles([P(()=>this.layer.effectiveSource,"refresh",()=>{this._tileStrategy.refresh(t=>this._updateTile(t)),this.requestUpdate()}),P(()=>this.layer.effectiveSource,"change",({element:t})=>this._elementUpdateHandler(t))]),this._overlayContainer=new me,this.container.addChild(this._overlayContainer),this._fetchQueue=new X({tileInfoView:this.view.featuresTilingScheme,concurrency:10,process:(t,e)=>this._queryElements(t,e),scheduler:this.scheduler,priority:Y.MAPVIEW_FETCH_QUEUE}),this._tileStrategy=new Z({cachePolicy:"purge",resampling:!0,acquireTile:t=>this._acquireTile(t),releaseTile:t=>this._releaseTile(t),tileInfoView:this.view.featuresTilingScheme}),this.requestUpdate()}detach(){this.elements.removeAll(),this._tileStrategy.destroy(),this._fetchQueue.destroy(),this._overlayContainer.removeAllChildren(),this.container.removeAllChildren(),this._elementReferences.clear(),this._debugGraphicsView?.destroy()}supportsSpatialReference(t){return!0}viewChange(){this.requestUpdate()}moveEnd(){this.requestUpdate()}update(t){this._tileStrategy.update(t),this._debugGraphicsView?.update(t)}async hitTest(t,e){const i=[],r=t.normalize(),n=[r.x,r.y];for(const{elementView:{normalizedCoords:o,element:s}}of this._elementReferences.values())o!=null&&ee(o.rings,n)&&i.push({type:"media",element:s,layer:this.layer,mapPoint:t,sourcePoint:s.toSource(t)});return i.reverse()}canResume(){return this.layer.source!=null&&super.canResume()}async doRefresh(){this._fetchQueue.reset(),this._tileStrategy.refresh(t=>this._updateTile(t))}_acquireTile(t){const e=new _e(t.clone());return this._updateTile(e),e}_updateTile(t){this._updatingHandles.addPromise(this._fetchQueue.push(t.key).then(e=>{const[i,r]=t.setElements(e);this._referenceElements(t,i),this._dereferenceElements(t,r),this.requestUpdate()},e=>{te(e)||b.getLogger(this).error(e)}))}_releaseTile(t){this._fetchQueue.abort(t.key.id),t.elements&&this._dereferenceElements(t,t.elements),this.requestUpdate()}async _queryElements(t,e){const i=this.layer.effectiveSource;if(i==null)return[];this.view.featuresTilingScheme.getTileBounds(l,t,!0);const r=new ie({xmin:l[0],ymin:l[1],xmax:l[2],ymax:l[3],spatialReference:this.view.spatialReference});return i.queryElements(r,e)}_referenceElements(t,e){if(this.layer.source!=null)for(const i of e)this._referenceElement(t,i)}_referenceElement(t,e){re(this._elementReferences,e.uid,()=>{const i=new O({element:e,spatialReference:this.view.spatialReference}),r=new ye(i);return this._overlayContainer.addChild(r),this.elements.add(e),this._updatingHandles.addPromise(e.load().catch(n=>{b.getLogger("esri.views.2d.layers.MediaLayerView2D").error(new U("element-load-error","Element cannot be displayed",{element:e,error:n}))})),{debugGraphic:null,elementView:i,overlay:r,tiles:new Set}}).tiles.add(t)}_dereferenceElements(t,e){for(const i of e)this._dereferenceElement(t,i)}_dereferenceElement(t,e){const i=this._elementReferences.get(e.uid);i.tiles.delete(t),i.tiles.size||(this._overlayContainer.removeChild(i.overlay),i.overlay.destroy(),i.elementView.destroy(),this._elementReferences.delete(e.uid),this.elements.remove(e),this._debugGraphicsView?.graphics.remove(i.debugGraphic))}_elementUpdateHandler(t){let e=this._elementReferences.get(t.uid);if(e){const r=e.elementView.normalizedCoords;if(r==null)return this._overlayContainer.removeChild(e.overlay),e.overlay.destroy(),e.elementView.destroy(),this._elementReferences.delete(t.uid),this.elements.remove(t),void this._debugGraphicsView?.graphics.remove(e.debugGraphic);const n=[],o=[];for(const s of this._tileStrategy.tiles){const m=H(this.view.featuresTilingScheme,s,r);e.tiles.has(s)?m||o.push(s):m&&n.push(s)}for(const s of n)this._referenceElement(s,t);for(const s of o)this._dereferenceElement(s,t);return e=this._elementReferences.get(t.uid),void(e?.debugGraphic&&(e.debugGraphic.geometry=e.elementView.normalizedCoords,this._debugGraphicsView.graphicUpdateHandler({graphic:e.debugGraphic,property:"geometry"})))}const i=new O({element:t,spatialReference:this.view.spatialReference}).normalizedCoords;if(i!=null)for(const r of this._tileStrategy.tiles)H(this.view.featuresTilingScheme,r,i)&&this._referenceElement(r,t)}};a([d()],f.prototype,"layer",void 0),a([d({readOnly:!0})],f.prototype,"elements",void 0),f=a([T("esri.views.2d.layers.MediaLayerView2D")],f);const l=se(),y={xmin:0,ymin:0,xmax:0,ymax:0};function H(t,e,i){return t.getTileBounds(l,e.key,!0),y.xmin=l[0],y.ymin=l[1],y.xmax=l[2],y.ymax=l[3],ne(y,i)}class _e{constructor(e){this.key=e,this.elements=null,this.isReady=!1,this.visible=!0}setElements(e){const i=[],r=new Set(this.elements);this.elements=e;for(const n of e)r.has(n)?r.delete(n):i.push(n);return this.isReady=!0,[i,Array.from(r)]}destroy(){}}const kt=f;export{kt as default};