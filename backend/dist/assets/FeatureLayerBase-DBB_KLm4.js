import{v as e,w as o,x as p,bM as I,bL as P,m5 as Pe,eB as Ie,bI as l,bO as a,m6 as tt,bN as ze,m7 as it,az as L,kH as ot,kJ as Ee,iZ as He,m8 as Fe,m9 as Te,ma as nt,ep as re,mb as st,mc as rt,e7 as pt,bG as lt,bk as at,hE as ut,V as Oe,gH as dt,gI as yt,aX as Me,d$ as ct,hH as mt,n as ht,hI as vt}from"./index-IeegpAPg.js";import{g as ft,B as xt,X,V as wt,D as gt,G as bt}from"./featureLayerUtils-DOfcdp_A.js";import{p as jt}from"./LayerFloorInfo-BnKc7C4W.js";import{p as $t}from"./Relationship-C6f1Hi7_.js";import{i as It}from"./serviceCapabilitiesUtils-COVZGAXJ.js";var pe;let F=pe=class extends I{constructor(t){super(t),this.expression=null,this.name=null,this.returnType="boolean",this.title=null}clone(){return new pe({name:this.name,title:this.title,expression:this.expression,returnType:this.returnType})}};e([o({type:String,json:{write:!0}})],F.prototype,"expression",void 0),e([o({type:String,json:{write:!0}})],F.prototype,"name",void 0),e([o({type:["boolean","date","number","string"],json:{write:!0}})],F.prototype,"returnType",void 0),e([o({type:String,json:{write:!0}})],F.prototype,"title",void 0),F=pe=e([p("esri.form.ExpressionInfo")],F);const St=F;let T=class extends I{constructor(i){super(i),this.description=null,this.label=null,this.type=null,this.visibilityExpression=null}};e([o({type:String,json:{write:!0}})],T.prototype,"description",void 0),e([o({type:String,json:{write:!0}})],T.prototype,"label",void 0),e([o()],T.prototype,"type",void 0),e([o({type:String,json:{write:!0}})],T.prototype,"visibilityExpression",void 0),T=e([p("esri.form.elements.Element")],T);const O=T;let z=class extends P(I){constructor(i){super(i),this.type=null}};e([o()],z.prototype,"type",void 0),z=e([p("esri.form.elements.inputs.attachments.Input")],z);const E=z,K=["any","capture","upload"];let R=class extends E{constructor(i){super(i),this.type="audio",this.inputMethod="any",this.maxDuration=null}};e([o({type:["audio"],readOnly:!0,json:{write:!0}})],R.prototype,"type",void 0),e([o({type:K,json:{write:!0}})],R.prototype,"inputMethod",void 0),e([o({type:Number,json:{write:!0}})],R.prototype,"maxDuration",void 0),R=e([p("esri.form.elements.inputs.attachments.AudioInput")],R);const Re=R;let C=class extends E{constructor(i){super(i),this.type="document",this.maxFileSize=null}};e([o({type:["document"],readOnly:!0,json:{write:!0}})],C.prototype,"type",void 0),e([o({type:Number,json:{write:!0}})],C.prototype,"maxFileSize",void 0),C=e([p("esri.form.elements.inputs.attachments.DocumentInput")],C);const De=C;let D=class extends E{constructor(i){super(i),this.type="image",this.inputMethod="any",this.maxImageSize=null}};e([o({type:["image"],readOnly:!0,json:{write:!0}})],D.prototype,"type",void 0),e([o({type:K,json:{write:!0}})],D.prototype,"inputMethod",void 0),e([o({type:Number,json:{write:!0}})],D.prototype,"maxImageSize",void 0),D=e([p("esri.form.elements.inputs.attachments.ImageInput")],D);const Ve=D;let G=class extends E{constructor(i){super(i),this.type="signature",this.inputMethod="any"}};e([o({type:["signature"],readOnly:!0,json:{write:!0}})],G.prototype,"type",void 0),e([o({type:K,json:{write:!0}})],G.prototype,"inputMethod",void 0),G=e([p("esri.form.elements.inputs.attachments.SignatureInput")],G);const Ne=G;let V=class extends E{constructor(i){super(i),this.type="video",this.inputMethod="any",this.maxDuration=null}};e([o({type:["video"],readOnly:!0,json:{write:!0}})],V.prototype,"type",void 0),e([o({type:K,json:{write:!0}})],V.prototype,"inputMethod",void 0),e([o({type:Number,json:{write:!0}})],V.prototype,"maxDuration",void 0),V=e([p("esri.form.elements.inputs.attachments.VideoInput")],V);const Be=V;function Ze(t){return{nestableTypes:{base:E,key:"type",typeMap:{audio:Re,document:De,image:Ve,signature:Ne,video:Be}},allTypes:{base:E,key:"type",typeMap:{attachment:t,audio:Re,document:De,image:Ve,signature:Ne,video:Be}}}}function Et(t,i,s){return t?t.map(n=>Pe(i.nestableTypes,n)):null}function Ft(t,i,s){if(!t)return null;const n=i.nestableTypes.typeMap;return t.filter(r=>n[r.type]).map(r=>n[r.type].fromJSON(r))}function Tt(t,i,s){if(!t)return null;const n=i.nestableTypes.typeMap;return t.filter(r=>n[r.type]).map(r=>r.toJSON())}let x=class extends E{constructor(i){super(i),this.type="attachment",this.attachmentAssociationType="exact",this.inputTypes=null}castInputs(i){return Et(i,Y)}readInputs(i,s){return Ft(s.inputTypes,Y)}writeInputs(i,s){s.inputTypes=Tt(i,Y)}};e([o({type:["attachment"],readOnly:!0,json:{write:!0}})],x.prototype,"type",void 0),e([o({type:["any","exact","exactOrNone"],json:{write:!0}})],x.prototype,"attachmentAssociationType",void 0),e([o({json:{write:{isRequired:!0}}})],x.prototype,"inputTypes",void 0),e([Ie("inputTypes")],x.prototype,"castInputs",null),e([l("inputTypes")],x.prototype,"readInputs",null),e([a("inputTypes")],x.prototype,"writeInputs",null),x=e([p("esri.form.elements.inputs.attachments.AttachmentInput")],x);const Y=Ze(x),Ot=x;var le;const Mt=Ze(Ot);let d=le=class extends O{constructor(t){super(t),this.allowUserRename=!0,this.attachmentKeyword=null,this.displayFilename=!1,this.editableExpression=null,this.filenameExpression="{attachmentKeyword}_{now}",this.input=null,this.maxAttachmentCount=null,this.minAttachmentCount=null,this.type="attachment",this.useOriginalFilename=!0}clone(){return new le({allowUserRename:this.allowUserRename,attachmentKeyword:this.attachmentKeyword,description:this.description,displayFilename:this.displayFilename,editableExpression:this.editableExpression,filenameExpression:this.filenameExpression,input:this.input?.clone(),label:this.label,maxAttachmentCount:this.maxAttachmentCount,minAttachmentCount:this.minAttachmentCount,useOriginalFilename:this.useOriginalFilename,visibilityExpression:this.visibilityExpression})}};e([o({type:Boolean,json:{write:!0}})],d.prototype,"allowUserRename",void 0),e([o({type:String,json:{write:{isRequired:!0}}})],d.prototype,"attachmentKeyword",void 0),e([o({type:Boolean,json:{write:!0}})],d.prototype,"displayFilename",void 0),e([o({type:String,json:{write:!0}})],d.prototype,"editableExpression",void 0),e([o({type:String,json:{write:!0}})],d.prototype,"filenameExpression",void 0),e([o({types:Mt.allTypes,json:{read:{source:"inputType"},write:{target:"inputType",isRequired:!0}}})],d.prototype,"input",void 0),e([o({type:Number,json:{write:!0}})],d.prototype,"maxAttachmentCount",void 0),e([o({type:Number,json:{write:!0}})],d.prototype,"minAttachmentCount",void 0),e([o({type:["attachment"],readOnly:!0,json:{read:!1,write:!0}})],d.prototype,"type",void 0),e([o({type:Boolean,json:{write:!0}})],d.prototype,"useOriginalFilename",void 0),d=le=e([p("esri.form.elements.AttachmentElement")],d);const ke=d;let H=class extends I{constructor(i){super(i),this.type=null}};e([o()],H.prototype,"type",void 0),H=e([p("esri.form.elements.inputs.Input")],H);const S=H;let Q=class extends S{constructor(i){super(i),this.maxLength=null,this.minLength=0}};e([o({type:Number,json:{write:!0}})],Q.prototype,"maxLength",void 0),e([o({type:Number,json:{write:!0}})],Q.prototype,"minLength",void 0),Q=e([p("esri.form.elements.inputs.TextInput")],Q);const Se=Q;var ae;let Z=ae=class extends Se{constructor(t){super(t),this.type="barcode-scanner"}clone(){return new ae({maxLength:this.maxLength,minLength:this.minLength})}};e([o({type:["barcode-scanner"],json:{read:!1,write:!0}})],Z.prototype,"type",void 0),Z=ae=e([p("esri.form.elements.inputs.BarcodeScannerInput")],Z);const Rt=Z;var ue;let N=ue=class extends S{constructor(t){super(t),this.noValueOptionLabel=null,this.showNoValueOption=!0,this.type="combo-box"}clone(){return new ue({showNoValueOption:this.showNoValueOption,noValueOptionLabel:this.noValueOptionLabel})}};e([o({type:String,json:{write:!0}})],N.prototype,"noValueOptionLabel",void 0),e([o({type:Boolean,json:{write:!0}})],N.prototype,"showNoValueOption",void 0),e([o({type:["combo-box"],json:{read:!1,write:!0}})],N.prototype,"type",void 0),N=ue=e([p("esri.form.elements.inputs.ComboBoxInput")],N);const Dt=N;var de;function Ue(t){return t??null}function Ae(t){return t??null}let f=de=class extends S{constructor(t){super(t),this.max=null,this.min=null,this.type="date-picker"}readMax(t,i){return Ue(i.max)}writeMax(t,i){i.max=Ae(t)}readMin(t,i){return Ue(i.min)}writeMin(t,i){i.min=Ae(t)}clone(){return new de({max:this.max,min:this.min})}};e([o({type:String,json:{type:String,write:!0}})],f.prototype,"max",void 0),e([l("max")],f.prototype,"readMax",null),e([a("max")],f.prototype,"writeMax",null),e([o({type:String,json:{type:String,write:!0}})],f.prototype,"min",void 0),e([l("min")],f.prototype,"readMin",null),e([a("min")],f.prototype,"writeMin",null),e([o({type:["date-picker"],json:{read:!1,write:!0}})],f.prototype,"type",void 0),f=de=e([p("esri.form.elements.inputs.DatePickerInput")],f);const Vt=f;var ye;function ee(t){return t??null}function te(t){return t??null}let u=ye=class extends S{constructor(t){super(t),this.includeTimeOffset=!0,this.max=null,this.min=null,this.timeResolution="minutes",this.type="datetimeoffset-picker"}readMax(t,i){return ee(i.max)}writeMax(t,i){i.max=te(t)}readMin(t,i){return ee(i.min)}writeMin(t,i){i.min=te(t)}readTimeResolution(t,i){return ee(i.timeResolution)}writeTimeResolution(t,i){i.timeResolution=te(t)}clone(){return new ye({includeTimeOffset:this.includeTimeOffset,max:this.max,min:this.min,timeResolution:this.timeResolution})}};e([o({type:Boolean,json:{write:!0}})],u.prototype,"includeTimeOffset",void 0),e([o({type:String,json:{type:String,write:!0}})],u.prototype,"max",void 0),e([l("max")],u.prototype,"readMax",null),e([a("max")],u.prototype,"writeMax",null),e([o({type:String,json:{type:String,write:!0}})],u.prototype,"min",void 0),e([l("min")],u.prototype,"readMin",null),e([a("min")],u.prototype,"writeMin",null),e([o({type:String,json:{type:String,write:!0}})],u.prototype,"timeResolution",void 0),e([l("timeResolution")],u.prototype,"readTimeResolution",null),e([a("timeResolution")],u.prototype,"writeTimeResolution",null),e([o({type:["datetimeoffset-picker"],json:{read:!1,write:!0}})],u.prototype,"type",void 0),u=ye=e([p("esri.form.elements.inputs.DateTimeOffsetPickerInput")],u);const Nt=u;var ce;function Le(t){return t!=null?new Date(t):null}function Ce(t){return t?t.getTime():null}let h=ce=class extends S{constructor(t){super(t),this.includeTime=!1,this.max=null,this.min=null,this.type="datetime-picker"}readMax(t,i){return Le(i.max)}writeMax(t,i){i.max=Ce(t)}readMin(t,i){return Le(i.min)}writeMin(t,i){i.min=Ce(t)}clone(){return new ce({includeTime:this.includeTime,max:this.max,min:this.min})}};e([o({type:Boolean,json:{write:!0}})],h.prototype,"includeTime",void 0),e([o({type:Date,json:{type:Number,write:!0}})],h.prototype,"max",void 0),e([l("max")],h.prototype,"readMax",null),e([a("max")],h.prototype,"writeMax",null),e([o({type:Date,json:{type:Number,write:!0}})],h.prototype,"min",void 0),e([l("min")],h.prototype,"readMin",null),e([a("min")],h.prototype,"writeMin",null),e([o({type:["datetime-picker"],json:{read:!1,write:!0}})],h.prototype,"type",void 0),h=ce=e([p("esri.form.elements.inputs.DateTimePickerInput")],h);const Bt=h;var me;let B=me=class extends S{constructor(t){super(t),this.noValueOptionLabel=null,this.showNoValueOption=!0,this.type="radio-buttons"}clone(){return new me({noValueOptionLabel:this.noValueOptionLabel,showNoValueOption:this.showNoValueOption})}};e([o({type:String,json:{write:!0}})],B.prototype,"noValueOptionLabel",void 0),e([o({type:Boolean,json:{write:!0}})],B.prototype,"showNoValueOption",void 0),e([o({type:["radio-buttons"],json:{read:!1,write:!0}})],B.prototype,"type",void 0),B=me=e([p("esri.form.elements.inputs.RadioButtonsInput")],B);const kt=B;var he;let k=he=class extends S{constructor(t){super(t),this.offValue=null,this.onValue=null,this.type="switch"}clone(){return new he({offValue:this.offValue,onValue:this.onValue})}};e([o({type:[String,Number],json:{write:!0}})],k.prototype,"offValue",void 0),e([o({type:[String,Number],json:{write:!0}})],k.prototype,"onValue",void 0),e([o({type:["switch"],json:{read:!1,write:!0}})],k.prototype,"type",void 0),k=he=e([p("esri.form.elements.inputs.SwitchInput")],k);const Ut=k;var ve;let q=ve=class extends Se{constructor(t){super(t),this.type="text-area"}clone(){return new ve({maxLength:this.maxLength,minLength:this.minLength})}};e([o({type:["text-area"],json:{read:!1,write:!0}})],q.prototype,"type",void 0),q=ve=e([p("esri.form.elements.inputs.TextAreaInput")],q);const At=q;var fe;let J=fe=class extends Se{constructor(t){super(t),this.type="text-box"}clone(){return new fe({maxLength:this.maxLength,minLength:this.minLength})}};e([o({type:["text-box"],json:{read:!1,write:!0}})],J.prototype,"type",void 0),J=fe=e([p("esri.form.elements.inputs.TextBoxInput")],J);const Lt=J;var xe;function ie(t){return t??null}function oe(t){return t??null}let y=xe=class extends S{constructor(t){super(t),this.max=null,this.min=null,this.timeResolution="minutes",this.type="time-picker"}readMax(t,i){return ie(i.max)}writeMax(t,i){i.max=oe(t)}readMin(t,i){return ie(i.min)}writeMin(t,i){i.min=oe(t)}readTimeResolution(t,i){return ie(i.timeResolution)}writeTimeResolution(t,i){i.timeResolution=oe(t)}clone(){return new xe({max:this.max,min:this.min,timeResolution:this.timeResolution})}};e([o({type:String,json:{type:String,write:!0}})],y.prototype,"max",void 0),e([l("max")],y.prototype,"readMax",null),e([a("max")],y.prototype,"writeMax",null),e([o({type:String,json:{type:String,write:!0}})],y.prototype,"min",void 0),e([l("min")],y.prototype,"readMin",null),e([a("min")],y.prototype,"writeMin",null),e([o({type:String,json:{type:String,write:!0}})],y.prototype,"timeResolution",void 0),e([l("timeResolution")],y.prototype,"readTimeResolution",null),e([a("timeResolution")],y.prototype,"writeTimeResolution",null),e([o({type:["time-picker"],json:{read:!1,write:!0}})],y.prototype,"type",void 0),y=xe=e([p("esri.form.elements.inputs.TimePickerInput")],y);const Ct=y,Gt={base:S,key:"type",typeMap:{"barcode-scanner":Rt,"combo-box":Dt,"date-picker":Vt,"datetime-picker":Bt,"datetimeoffset-picker":Nt,"radio-buttons":kt,switch:Ut,"text-area":At,"text-box":Lt,"time-picker":Ct}};var we;let m=we=class extends O{constructor(t){super(t),this.domain=null,this.editable=null,this.editableExpression=null,this.fieldName=null,this.hint=null,this.input=null,this.requiredExpression=null,this.type="field",this.valueExpression=null}clone(){return new we({description:this.description,domain:this.domain,editable:this.editable,editableExpression:this.editableExpression,fieldName:this.fieldName,hint:this.hint,input:this.input,label:this.label,requiredExpression:this.requiredExpression,valueExpression:this.valueExpression,visibilityExpression:this.visibilityExpression})}};e([o({types:tt,json:{read:{reader:ze},write:!0}})],m.prototype,"domain",void 0),e([o({type:Boolean,json:{write:!0}})],m.prototype,"editable",void 0),e([o({type:String,json:{write:!0}})],m.prototype,"editableExpression",void 0),e([o({type:String,json:{write:!0}})],m.prototype,"fieldName",void 0),e([o({type:String,json:{write:!0}})],m.prototype,"hint",void 0),e([o({types:Gt,json:{read:{source:"inputType"},write:{target:"inputType"}}})],m.prototype,"input",void 0),e([o({type:String,json:{write:!0}})],m.prototype,"requiredExpression",void 0),e([o({type:String,json:{read:!1,write:!0}})],m.prototype,"type",void 0),e([o({type:String,json:{write:!0}})],m.prototype,"valueExpression",void 0),m=we=e([p("esri.form.elements.FieldElement")],m);const Ge=m;var ge;let b=ge=class extends O{constructor(t){super(t),this.displayCount=null,this.displayType="list",this.editableExpression=null,this.orderByFields=null,this.relationshipId=null,this.type="relationship"}clone(){return new ge({description:this.description,displayCount:this.displayCount,displayType:this.displayType,editableExpression:this.editableExpression,label:this.label,orderByFields:L(this.orderByFields),relationshipId:this.relationshipId,visibilityExpression:this.visibilityExpression})}};e([o({type:Number,json:{write:!0}})],b.prototype,"displayCount",void 0),e([o({type:["list"],json:{write:!0}})],b.prototype,"displayType",void 0),e([o({type:String,json:{write:!0}})],b.prototype,"editableExpression",void 0),e([o({type:[it],json:{write:!0}})],b.prototype,"orderByFields",void 0),e([o({type:Number,json:{write:!0}})],b.prototype,"relationshipId",void 0),e([o({type:["relationship"],json:{read:!1,write:!0}})],b.prototype,"type",void 0),b=ge=e([p("esri.form.elements.RelationshipElement")],b);const Qe=b;var be;let U=be=class extends O{constructor(t){super(t),this.text=null,this.textFormat="plain-text",this.type="text"}clone(){return new be({text:this.text,textFormat:this.textFormat,visibilityExpression:this.visibilityExpression})}};e([o({type:String,json:{write:!0}})],U.prototype,"text",void 0),e([o({type:String,json:{write:!0}})],U.prototype,"textFormat",void 0),e([o({type:["text"],readOnly:!0,json:{read:!1,write:!0}})],U.prototype,"type",void 0),U=be=e([p("esri.form.elements.TextElement")],U);const We=U;function qe(t){return{typesWithGroup:{base:O,key:"type",typeMap:{attachment:ke,field:Ge,group:t,relationship:Qe,text:We}},typesWithoutGroup:{base:O,key:"type",typeMap:{attachment:ke,field:Ge,relationship:Qe,text:We}}}}function Je(t,i,s=!0){if(!t)return null;const n=s?i.typesWithGroup.typeMap:i.typesWithoutGroup.typeMap;return t.filter(r=>n[r.type]).map(r=>n[r.type].fromJSON(r))}function Ke(t,i,s=!0){if(!t)return null;const n=s?i.typesWithGroup.typeMap:i.typesWithoutGroup.typeMap;return t.filter(r=>n[r.type]).map(r=>r.toJSON())}function _e(t,i,s=!0){return t?t.map(n=>Pe(s?i.typesWithGroup:i.typesWithoutGroup,n)):null}var je;let w=je=class extends O{constructor(t){super(t),this.elements=null,this.initialState="expanded",this.type="group"}castElements(t){return _e(t,ne,!1)}readElements(t,i){return Je(i.formElements,ne,!1)}writeElements(t,i){i.formElements=Ke(t,ne,!1)}clone(){return new je({description:this.description,elements:L(this.elements),initialState:this.initialState,label:this.label,visibilityExpression:this.visibilityExpression})}};e([o({json:{write:!0}})],w.prototype,"elements",void 0),e([Ie("elements")],w.prototype,"castElements",null),e([l("elements",["formElements"])],w.prototype,"readElements",null),e([a("elements")],w.prototype,"writeElements",null),e([o({type:["collapsed","expanded"],json:{write:!0}})],w.prototype,"initialState",void 0),e([o({type:String,json:{read:!1,write:!0}})],w.prototype,"type",void 0),w=je=e([p("esri.form.elements.GroupElement")],w);const ne=qe(w),Qt=w,Wt=t=>t.type==="field",Pt=t=>t.type==="group",zt=t=>t.type==="text";var $e;const se=qe(Qt);let v=$e=class extends I{constructor(t){super(t),this.description=null,this.elements=null,this.expressionInfos=null,this.preserveFieldValuesWhenHidden=!1,this.title=null}castElements(t){return _e(t,se)}readElements(t,i){return Je(i.formElements,se)}writeElements(t,i){i.formElements=Ke(t,se)}clone(){return new $e({description:this.description,expressionInfos:L(this.expressionInfos),elements:L(this.elements),title:this.title,preserveFieldValuesWhenHidden:this.preserveFieldValuesWhenHidden})}async getFieldsUsed(t,i){const s=new Set,{description:n,elements:r,expressionInfos:c,title:M}=this;if(W(s,t,n),W(s,t,M),!r)return[];const et=Ht(r,c).map(_=>ot(s,t,_));await Promise.all(et);for(const _ of r)Xe(s,{fieldsIndex:t,relationships:i},_);return Array.from(s).sort()}};function Xe(t,i,s){const{fieldsIndex:n}=i;if(!n||n.fields.length!==t.size)switch(W(t,n,s.label),W(t,n,s.description),s.type){case"field":Ee(t,n,s.fieldName);break;case"group":s.elements.forEach(r=>Xe(t,i,r));break;case"relationship":if(i.relationships){const r=i.relationships.find(c=>c.id===s.relationshipId);r&&Ee(t,n,r.keyField)}He(t,n,s.orderByFields?.map(r=>r.field));break;case"text":W(t,n,s.text)}}function Ht(t,i){if(!i||i.length===0)return[];const s=Ye(t),n=[];for(const r of i)s.has(r.name)&&n.push(r.expression);return n}function Ye(t){const i=new Set;for(const s of t)if(Fe(i,s.visibilityExpression),!zt(s)){if(Pt(s))Te(i,Ye(s.elements));else if(Fe(i,s.editableExpression),Wt(s)){const{requiredExpression:n,valueExpression:r}=s;Te(i,[n,r])}}return i}function W(t,i,s){He(t,i,nt(s))}e([o({type:String,json:{write:!0}})],v.prototype,"description",void 0),e([o({json:{write:!0}})],v.prototype,"elements",void 0),e([Ie("elements")],v.prototype,"castElements",null),e([l("elements",["formElements"])],v.prototype,"readElements",null),e([a("elements")],v.prototype,"writeElements",null),e([o({type:[St],json:{write:!0}})],v.prototype,"expressionInfos",void 0),e([o({type:Boolean,json:{default:!1,write:!0}})],v.prototype,"preserveFieldValuesWhenHidden",void 0),e([o({type:String,json:{write:!0}})],v.prototype,"title",void 0),v=$e=e([p("esri.form.FormTemplate")],v);const di=v;let j=class extends P(I){constructor(t){super(t),this.creatorField=null,this.creationDateField=null,this.editorField=null,this.editDateField=null,this.realm=null,this.timeZone=null}};e([o()],j.prototype,"creatorField",void 0),e([o()],j.prototype,"creationDateField",void 0),e([o()],j.prototype,"editorField",void 0),e([o()],j.prototype,"editDateField",void 0),e([o()],j.prototype,"realm",void 0),e([o(re("dateFieldsTimeReference",!0))],j.prototype,"timeZone",void 0),j=e([p("esri.layers.support.EditFieldsInfo")],j);const Zt=j;let g=class extends P(I){constructor(t){super(t)}};e([o({constructOnly:!0,json:{write:!0}})],g.prototype,"name",void 0),e([o({constructOnly:!0,json:{write:!0}})],g.prototype,"fields",void 0),e([o({constructOnly:!0,json:{write:!0}})],g.prototype,"isAscending",void 0),e([o({constructOnly:!0,json:{write:!0}})],g.prototype,"indexType",void 0),e([o({constructOnly:!0,json:{write:!0}})],g.prototype,"isUnique",void 0),e([o({constructOnly:!0,json:{write:!0}})],g.prototype,"description",void 0),g=e([p("esri.layers.support.FeatureIndex")],g);let A=class extends P(I){constructor(t){super(t),this.shapeAreaField=null,this.shapeLengthField=null,this.units=null}};e([o({type:String,json:{read:{source:"shapeAreaFieldName"}}})],A.prototype,"shapeAreaField",void 0),e([o({type:String,json:{read:{source:"shapeLengthFieldName"}}})],A.prototype,"shapeLengthField",void 0),e([o({type:String,json:{read:t=>st.read(t)||rt.read(t)}})],A.prototype,"units",void 0),A=e([p("esri.layers.support.GeometryFieldsInfo")],A);const qt=A;let $=class extends P(I){constructor(t){super(t),this.code=null,this.defaultValues={},this.domains=null,this.name=null}readDomains(t){if(!t)return null;const i={};for(const s of Object.keys(t))i[s]=ze(t[s]);return i}writeDomains(t,i){if(!t)return;const s={};for(const n of Object.keys(t))t[n]&&(s[n]=t[n]?.toJSON());i.domains=s}};e([o({type:Number,json:{write:!0}})],$.prototype,"code",void 0),e([o({type:Object,json:{write:!0}})],$.prototype,"defaultValues",void 0),e([o({json:{write:!0}})],$.prototype,"domains",void 0),e([l("domains")],$.prototype,"readDomains",null),e([a("domains")],$.prototype,"writeDomains",null),e([o({type:String,json:{write:!0}})],$.prototype,"name",void 0),$=e([p("esri.layers.support.Subtype")],$);const Jt=$,yi=t=>{let i=class extends t{constructor(){super(...arguments),this.copyright=null,this.capabilities=null,this.dateFieldsTimeZone=null,this.datesInUnknownTimezone=!1,this.definitionExpression=null,this.displayField=null,this.editFieldsInfo=null,this.editingInfo=null,this.elevationInfo=null,this.floorInfo=null,this.fullExtent=null,this.gdbVersion=null,this.geometryFieldsInfo=null,this.geometryType=null,this.globalIdField=null,this.hasM=void 0,this.hasZ=void 0,this.heightModelInfo=null,this.historicMoment=null,this.indexes=new(Oe.ofType(g)),this.isTable=!1,this.layerId=void 0,this.maxScale=0,this.minScale=0,this.objectIdField=null,this.preferredTimeZone=null,this.relationships=null,this.returnM=void 0,this.returnZ=void 0,this.serviceDefinitionExpression=null,this.serviceItemId=null,this.sourceJSON=null,this.spatialReference=Me.WGS84,this.subtypeField=null,this.subtypes=null,this.trackIdField=null,this.version=void 0}get authenticationTriggerEvent(){if(!this.url)return null;const{capabilities:s}=this;if(s){const{query:r,operations:c,editing:M}=s;if(!r.supportsQueryByOthers||!r.supportsQueryByAnonymous||c.supportsEditing&&!(M.supportsUpdateByOthers&&M.supportsUpdateByAnonymous&&M.supportsDeleteByOthers&&M.supportsDeleteByAnonymous))return"load"}if(this.serviceDefinitionExpression?.toLowerCase().includes("current_user"))return"load";if(this.userHasUpdateItemPrivileges){if(xt(this))return"load";if(this.hasUpdateItemRestrictions)return s.operations.supportsQuery?"editing":"load"}if(this.userHasFullEditingPrivileges&&this.hasFullEditingRestrictions)return"editing";const n=this.editFieldsInfo;return(n?.creatorField||n?.editorField)&&s?.operations.supportsEditing?"editing":null}readCapabilitiesFromService(s,n){return It(n,this.url)}readEditingInfo(s,n){const{editingInfo:r}=n;return r?{lastEditDate:r.lastEditDate!=null?new Date(r.lastEditDate):null}:null}get effectiveCapabilities(){const s=this.capabilities;if(!s)return null;const n=L(s),{operations:r,editing:c}=n;return X(this)?(this.userHasUpdateItemPrivileges&&(r.supportsQuery=!0),n):this.userHasUpdateItemPrivileges?(r.supportsAdd=r.supportsDelete=r.supportsEditing=r.supportsQuery=r.supportsUpdate=c.supportsDeleteByOthers=c.supportsGeometryUpdate=c.supportsUpdateByOthers=!0,n):(this.userHasFullEditingPrivileges&&r.supportsEditing&&(r.supportsAdd=r.supportsDelete=r.supportsUpdate=c.supportsGeometryUpdate=!0),n)}readGlobalIdFieldFromService(s,n){return wt(n)}get hasFullEditingRestrictions(){const s=this.capabilities;if(!s||X(this))return!1;const{operations:n,editing:r}=s;return n.supportsEditing&&!(n.supportsAdd&&n.supportsDelete&&n.supportsUpdate&&r.supportsGeometryUpdate)}get hasUpdateItemRestrictions(){const s=this.capabilities;if(!s)return!1;const{operations:n,editing:r}=s;return X(this)?!n.supportsQuery:!(n.supportsAdd&&n.supportsDelete&&n.supportsEditing&&n.supportsQuery&&n.supportsUpdate&&r.supportsDeleteByOthers&&r.supportsGeometryUpdate&&r.supportsUpdateByOthers)}readIsTableFromService(s,n){return n.type==="Table"}readMaxScale(s,n){return n.effectiveMaxScale||s||0}readMinScale(s,n){return n.effectiveMinScale||s||0}readObjectIdFieldFromService(s,n){return gt(n)}readServiceDefinitionExpression(s,n){return n.definitionQuery||n.definitionExpression}set url(s){if(s==null)return void this._set("url",s);const n=mt({layer:this,url:s,nonStandardUrlAllowed:!0,logger:ht.getLogger(this)});this._set("url",n.url),n.layerId!=null&&this._set("layerId",n.layerId)}writeUrl(s,n,r,c){vt(this,s,null,n,c)}readVersion(s,n){return bt(n)}};return e([o({readOnly:!0})],i.prototype,"authenticationTriggerEvent",null),e([o({type:String,json:{origins:{service:{read:{source:"copyrightText"}}}}})],i.prototype,"copyright",void 0),e([o({readOnly:!0,json:{read:!1,origins:{service:{read:{source:["advancedQueryCapabilities","allowGeometryUpdates","allowUpdateWithoutMValues","archivingInfo","capabilities","datesInUnknownTimezone","hasAttachments","hasM","hasZ","isDataBranchVersioned","isDataVersioned","maxRecordCount","maxRecordCountFactor","ownershipBasedAccessControlForFeatures","standardMaxRecordCount","supportedQueryFormats","supportsAdvancedQueries","supportsApplyEditsWithGlobalIds","supportsAttachmentsByUploadId","supportsAttachmentsResizing","supportsCalculate","supportsCoordinatesQuantization","supportsExceedsLimitStatistics","supportsFieldDescriptionProperty","supportsQuantizationEditMode","supportsRollbackOnFailureParameter","supportsStatistics","supportsTruncate","supportsValidateSql","tileMaxRecordCount","useStandardizedQueries"]}}}}})],i.prototype,"capabilities",void 0),e([l("service","capabilities")],i.prototype,"readCapabilitiesFromService",null),e([o(re("dateFieldsTimeReference"))],i.prototype,"dateFieldsTimeZone",void 0),e([o({type:Boolean})],i.prototype,"datesInUnknownTimezone",void 0),e([o({type:String,json:{origins:{service:{read:!1,write:!1}},name:"layerDefinition.definitionExpression",write:{enabled:!0,allowNull:!0}}})],i.prototype,"definitionExpression",void 0),e([o({type:String,json:{origins:{service:{read:{source:"displayField"}}}}})],i.prototype,"displayField",void 0),e([o({readOnly:!0,type:Zt})],i.prototype,"editFieldsInfo",void 0),e([o({readOnly:!0})],i.prototype,"editingInfo",void 0),e([l("editingInfo")],i.prototype,"readEditingInfo",null),e([o({readOnly:!0})],i.prototype,"effectiveCapabilities",null),e([o((()=>{const s=L(pt),n=s.json.origins;return n["web-map"]={read:!1,write:!1},n["portal-item"]={read:!1,write:!1},s})())],i.prototype,"elevationInfo",void 0),e([o({type:jt,json:{name:"layerDefinition.floorInfo",write:!0,origins:{"web-scene":{name:"layerDefinition.floorInfo",write:{enabled:!0,layerContainerTypes:lt}}}}})],i.prototype,"floorInfo",void 0),e([o({type:at,json:{origins:{service:{read:{source:"extent"}}}}})],i.prototype,"fullExtent",void 0),e([o()],i.prototype,"gdbVersion",void 0),e([o({readOnly:!0,type:qt,json:{read:{source:"geometryProperties"}}})],i.prototype,"geometryFieldsInfo",void 0),e([o({type:["point","polygon","polyline","multipoint","multipatch","mesh"],json:{origins:{service:{read:ft.read}}}})],i.prototype,"geometryType",void 0),e([o({type:String})],i.prototype,"globalIdField",void 0),e([l("service","globalIdField",["globalIdField","fields"])],i.prototype,"readGlobalIdFieldFromService",null),e([o({readOnly:!0})],i.prototype,"hasFullEditingRestrictions",null),e([o({type:Boolean,json:{origins:{service:{read:!0}}}})],i.prototype,"hasM",void 0),e([o({readOnly:!0})],i.prototype,"hasUpdateItemRestrictions",null),e([o({type:Boolean,json:{origins:{service:{read:!0}}}})],i.prototype,"hasZ",void 0),e([o({readOnly:!0,type:ut})],i.prototype,"heightModelInfo",void 0),e([o({type:Date})],i.prototype,"historicMoment",void 0),e([o({type:Oe.ofType(g),readOnly:!0})],i.prototype,"indexes",void 0),e([o({readOnly:!0})],i.prototype,"isTable",void 0),e([l("service","isTable",["type"])],i.prototype,"readIsTableFromService",null),e([o({type:Number,json:{origins:{service:{read:{source:"id"}},"portal-item":{read:!1,write:{target:"id"}}},read:!1}})],i.prototype,"layerId",void 0),e([o(dt)],i.prototype,"maxScale",void 0),e([l("service","maxScale",["maxScale","effectiveMaxScale"])],i.prototype,"readMaxScale",null),e([o(yt)],i.prototype,"minScale",void 0),e([l("service","minScale",["minScale","effectiveMinScale"])],i.prototype,"readMinScale",null),e([o({type:String})],i.prototype,"objectIdField",void 0),e([l("service","objectIdField",["objectIdField","fields"])],i.prototype,"readObjectIdFieldFromService",null),e([o(re("preferredTimeReference"))],i.prototype,"preferredTimeZone",void 0),e([o({type:[$t],readOnly:!0})],i.prototype,"relationships",void 0),e([o({type:Boolean})],i.prototype,"returnM",void 0),e([o({type:Boolean})],i.prototype,"returnZ",void 0),e([o({readOnly:!0,json:{write:!1}})],i.prototype,"serverGens",void 0),e([o({readOnly:!0})],i.prototype,"serviceDefinitionExpression",void 0),e([l("service","serviceDefinitionExpression",["definitionQuery","definitionExpression"])],i.prototype,"readServiceDefinitionExpression",null),e([o({type:String,readOnly:!0,json:{read:!1,origins:{service:{read:!0}}}})],i.prototype,"serviceItemId",void 0),e([o()],i.prototype,"sourceJSON",void 0),e([o({type:Me,json:{origins:{service:{read:{source:"extent.spatialReference"}}}}})],i.prototype,"spatialReference",void 0),e([o({type:String,readOnly:!0,json:{origins:{service:{read:!0}}}})],i.prototype,"subtypeField",void 0),e([o({type:[Jt],readOnly:!0,json:{read:!1,origins:{service:{read:!0}}}})],i.prototype,"subtypes",void 0),e([o({type:String,json:{read:{source:"timeInfo.trackIdField"}}})],i.prototype,"trackIdField",void 0),e([o(ct)],i.prototype,"url",null),e([a("url")],i.prototype,"writeUrl",null),e([o({json:{origins:{service:{read:!0}},read:!1}})],i.prototype,"version",void 0),e([l("service","version",["currentVersion","capabilities","drawingInfo","hasAttachments","htmlPopupType","relationships","timeInfo","typeIdField","types"])],i.prototype,"readVersion",null),i=e([p("esri.layers.mixins.FeatureLayerBase")],i),i};export{yi as B,di as V};