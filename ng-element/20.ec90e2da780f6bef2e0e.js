(window.webpackJsonp=window.webpackJsonp||[]).push([[20],{"6qls":function(e,t,n){"use strict";n.d(t,"a",function(){return l});var o=n("fXoL"),r=n("F5nt"),i=n("dran");let l=(()=>{class e{constructor(e){this.appService=e,this.docUrl="",this.doc=""}ngOnInit(){this.appService.getDoc(this.docUrl).subscribe(e=>{this.doc=e})}}return e.\u0275fac=function(t){return new(t||e)(o.Mb(r.a))},e.\u0275cmp=o.Gb({type:e,selectors:[["app-doc"]],inputs:{docUrl:"docUrl"},decls:2,vars:3,consts:[[1,"marked",3,"innerHTML"]],template:function(e,t){1&e&&(o.Nb(0,"div",0),o.ec(1,"marked")),2&e&&o.ic("innerHTML",o.fc(1,1,t.doc),o.pc)},pipes:[i.a],styles:[".marked{font-size:14px;line-height:2}.marked h3{margin:55px 0 20px;font-weight:400;color:#1f2f3d;font-size:22px}.marked table{border-collapse:collapse;width:100%;background-color:#fff;font-size:14px;margin-bottom:45px;line-height:1.5em}.marked table td:first-child,.marked table th:first-child{padding-left:10px}.marked table th{text-align:left;white-space:nowrap;color:#909399;font-weight:400}.marked table td,.marked table th{border-bottom:1px solid #dcdfe6;padding:15px;max-width:250px}.marked table td{color:#606266}.marked ul{margin:0;padding:0}.marked ul>li{margin-left:20px;padding-left:4px;list-style-type:circle}.marked code{margin:0 1px;padding:.2em .4em;background:#f2f4f5;border:1px solid #f0f0f0;border-radius:3px}"],encapsulation:2}),e})()},FCkB:function(e,t,n){"use strict";n.d(t,"a",function(){return i});var o=n("fXoL");const r=["*"];let i=(()=>{class e{}return e.\u0275fac=function(t){return new(t||e)},e.\u0275cmp=o.Gb({type:e,selectors:[["nel-button-group"]],hostAttrs:[1,"el-button-group"],ngContentSelectors:r,decls:1,vars:0,template:function(e,t){1&e&&(o.hc(),o.gc(0))},encapsulation:2}),e})()},O7xw:function(e,t,n){"use strict";n.d(t,"b",function(){return o}),n.d(t,"a",function(){return s});const o=(e,t)=>{let n=e;for(;n;){if([window,document,document.documentElement].includes(n))return window.document.body;if(r(n,t))return n;n=n.parentNode}return n},r=(e,t)=>{const n=i(e,null==t?"overflow":t?"overflow-y":"overflow-x");return n?n.match(/(scroll|auto)/):null},i=function(e,t){if(!e||!t)return null;"float"===t&&(t="cssFloat");try{const n=e.style[t];if(n)return n;const o=getComputedStyle(e,"");return o?o[t]:""}catch(n){return e.style[t]}};var l=n("8LU1");function c(e){return Object(l.b)(e)}function s(){return e=c,function(t,n,o){const r=`$$__${n}`;return Object.prototype.hasOwnProperty.call(t,r)&&console.warn(`The prop "${r}" is already exist, it will be overrided by InputBoolean decorator.`),Object.defineProperty(t,r,{configurable:!0,writable:!0}),{get(){return o&&o.get?o.get.bind(this)():this[r]},set(t){o&&o.set&&o.set.bind(this)(e(t)),this[r]=e(t)}}};var e}},QJGT:function(e,t,n){"use strict";n.d(t,"a",function(){return a});var o=n("fXoL"),r=n("yqRL"),i=n("ofXK"),l=n("UXJo"),c=n("pIld");function s(e,t){if(1&e){const e=o.Tb();o.Qb(0),o.Sb(1,"div",1),o.Sb(2,"pre",2),o.Nb(3,"code",3),o.ec(4,"highlightAuto"),o.Rb(),o.Sb(5,"i",4),o.Zb("cdkCopyToClipboardCopied",function(t){return o.oc(e),o.dc().copy(t)}),o.Rb(),o.Rb(),o.Pb()}if(2&e){const e=o.dc();o.zb(3),o.ic("innerHTML",o.fc(4,2,e.code),o.pc),o.zb(2),o.ic("cdkCopyToClipboard",e.code)}}let a=(()=>{class e{constructor(e){this.message=e}copy(e){e?this.message.success("\u590d\u5236\u6210\u529f"):this.message.error("\u590d\u5236\u5931\u8d25")}}return e.\u0275fac=function(t){return new(t||e)(o.Mb(r.b))},e.\u0275cmp=o.Gb({type:e,selectors:[["app-code"]],inputs:{code:"code"},decls:1,vars:1,consts:[[4,"ngIf"],[1,"highlight"],[1,"language-ts"],[1,"hljs",3,"innerHTML"],[1,"el-icon-copy-document",3,"cdkCopyToClipboard","cdkCopyToClipboardCopied"]],template:function(e,t){1&e&&o.uc(0,s,6,4,"ng-container",0),2&e&&o.ic("ngIf",t.code)},directives:[i.i,l.a],pipes:[c.a],styles:["pre[class*=language-][_ngcontent-%COMP%]{background:#f6f6f6;margin:16px 0;padding:12px 20px;overflow:auto}.highlight[_ngcontent-%COMP%]{position:relative}i[_ngcontent-%COMP%]{position:absolute;top:12px;right:10px;font-size:24px;color:#b0bec5;cursor:pointer}i[_ngcontent-%COMP%]:hover{color:#6e6e6e}"]}),e})()},"X2/8":function(e,t,n){"use strict";n.d(t,"a",function(){return b});var o=n("mrSG"),r=n("O7xw"),i=n("fXoL"),l=n("ofXK"),c=n("NtrV");const s=["nel-button",""];function a(e,t){if(1&e&&i.Nb(0,"i",1),2&e){const e=i.dc();i.ic("nelType",e.nelIcon)}}function p(e,t){1&e&&i.Nb(0,"i",1),2&e&&i.ic("nelType","loading")}const d=["*"];let b=(()=>{class e{constructor(e,t){this.elementRef=e,this.renderer=t,this.nelType="",this.nelPlain=!1,this.nelRound=!1,this.nelIcon="",this.nelCircle=!1,this.nelDisabled=!1,this.nelLoading=!1,this.nelSize=""}set disabled(e){(""===e||e)&&(this.nelDisabled=!0)}ngAfterViewInit(){this.insertSpan(this.elementRef.nativeElement.childNodes,this.renderer)}insertSpan(e,t){e.forEach(e=>{if("#text"===e.nodeName){const n=t.createElement("span"),o=t.parentNode(e);t.insertBefore(o,n,e),t.appendChild(n,e)}})}}return e.\u0275fac=function(t){return new(t||e)(i.Mb(i.l),i.Mb(i.E))},e.\u0275cmp=i.Gb({type:e,selectors:[["button","nel-button",""]],hostVars:30,hostBindings:function(e,t){2&e&&i.Eb("el-button",!0)("el-button--primary","primary"===t.nelType)("el-button--success","success"===t.nelType)("el-button--info","info"===t.nelType)("el-button--warning","warning"===t.nelType)("el-button--danger","danger"===t.nelType)("is-plain",t.nelPlain)("is-round",t.nelRound)("is-circle",t.nelCircle)("is-disabled",t.nelDisabled)("el-button--text","text"===t.nelType)("is-loading",t.nelLoading)("el-button--medium","medium"===t.nelSize)("el-button--small","small"===t.nelSize)("el-button--mini","mini"===t.nelSize)},inputs:{nelType:"nelType",nelPlain:"nelPlain",nelRound:"nelRound",nelIcon:"nelIcon",nelCircle:"nelCircle",disabled:"disabled",nelLoading:"nelLoading",nelSize:"nelSize"},attrs:s,ngContentSelectors:d,decls:3,vars:2,consts:[["nel-icon","",3,"nelType",4,"ngIf"],["nel-icon","",3,"nelType"]],template:function(e,t){1&e&&(i.hc(),i.uc(0,a,1,1,"i",0),i.uc(1,p,1,1,"i",0),i.gc(2)),2&e&&(i.ic("ngIf",t.nelIcon),i.zb(1),i.ic("ngIf",t.nelLoading))},directives:[l.i,c.a],encapsulation:2}),Object(o.a)([Object(r.a)()],e.prototype,"nelPlain",void 0),Object(o.a)([Object(r.a)()],e.prototype,"nelRound",void 0),Object(o.a)([Object(r.a)()],e.prototype,"nelCircle",void 0),Object(o.a)([Object(r.a)()],e.prototype,"nelLoading",void 0),e})()},ackU:function(e,t,n){"use strict";n.d(t,"a",function(){return o.a}),n.d(t,"b",function(){return c}),n("X2/8");var o=n("FCkB"),r=n("ofXK"),i=n("aA8y"),l=n("fXoL");let c=(()=>{class e{}return e.\u0275fac=function(t){return new(t||e)},e.\u0275mod=l.Kb({type:e}),e.\u0275inj=l.Jb({imports:[[r.b,i.a]]}),e})()},mrSG:function(e,t,n){"use strict";function o(e,t,n,o){var r,i=arguments.length,l=i<3?t:null===o?o=Object.getOwnPropertyDescriptor(t,n):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)l=Reflect.decorate(e,t,n,o);else for(var c=e.length-1;c>=0;c--)(r=e[c])&&(l=(i<3?r(l):i>3?r(t,n,l):r(t,n))||l);return i>3&&l&&Object.defineProperty(t,n,l),l}n.d(t,"a",function(){return o})},p2ut:function(e,t,n){"use strict";n.r(t),n.d(t,"PopoverModule",function(){return S});var o=n("fXoL"),r=n("rDax"),i=n("ofXK"),l=n("72Au");function c(e,t){if(1&e&&(o.Sb(0,"div",5),o.wc(1),o.Rb()),2&e){const e=o.dc(2);o.zb(1),o.xc(e.title)}}function s(e,t){1&e&&o.Ob(0)}function a(e,t){if(1&e&&(o.Sb(0,"div",1),o.uc(1,c,2,1,"div",2),o.uc(2,s,1,0,"ng-container",3),o.Nb(3,"div",4),o.Rb()),2&e){const e=o.dc();o.tc("width",e.width?e.width+"px":""),o.zb(1),o.ic("ngIf",e.title),o.zb(1),o.ic("stringTemplate",e.content),o.zb(1),o.tc("left",e.arrowLeft)("right",e.arrowRight)("top",e.arrowTop)("bottom",e.arrowBottom)("transform",e.transform)}}let p=(()=>{class e{constructor(){this.visibleChange=new o.n,this.isOpen=!1,this.arrowLeft="",this.arrowRight="",this.arrowTop="",this.arrowBottom="",this.transform=""}onClickOutside(e){this.origin.elementRef.nativeElement.contains(e.target)||"manual"===this.trigger||(this.isOpen=!1,this.visibleChange.emit(!1))}close(){this.isOpen=!1}}return e.\u0275fac=function(t){return new(t||e)},e.\u0275cmp=o.Gb({type:e,selectors:[["nel-popover"]],outputs:{visibleChange:"visibleChange"},decls:1,vars:5,consts:[["cdkConnectedOverlay","",3,"cdkConnectedOverlayOrigin","cdkConnectedOverlayOpen","cdkConnectedOverlayPositions","cdkConnectedOverlayMinWidth","cdkConnectedOverlayWidth","overlayOutsideClick"],["role","tooltip",1,"el-popover--plain","el-popover","el-popper","is-light"],["class","el-popover__title","role","title",4,"ngIf"],[4,"stringTemplate"],[1,"el-popper__arrow"],["role","title",1,"el-popover__title"]],template:function(e,t){1&e&&(o.uc(0,a,4,14,"ng-template",0),o.Zb("overlayOutsideClick",function(e){return t.onClickOutside(e)})),2&e&&o.ic("cdkConnectedOverlayOrigin",t.origin)("cdkConnectedOverlayOpen",t.isOpen)("cdkConnectedOverlayPositions",t.positionStrategy)("cdkConnectedOverlayMinWidth",150)("cdkConnectedOverlayWidth",t.width)},directives:[r.a,i.i,l.a],encapsulation:2}),e})(),d=(()=>{class e{constructor(e,t,n,r){this.hostView=e,this.elementRef=t,this.resolver=n,this.renderer=r,this.nelPopoverTrigger="click",this.nelPopoverPlacement="bottom",this.nelPopoverVisibleChange=new o.n,this.triggerDisposables=[],this.componentFactory=this.resolver.resolveComponentFactory(p);const i=this.hostView.createComponent(this.componentFactory);this.component=i.instance,this.renderer.removeChild(this.renderer.parentNode(this.elementRef.nativeElement),i.location.nativeElement)}set nelPopoverVisible(e){e?this.component&&this.show():this.hide()}ngOnDestroy(){this.removeTriggerListeners()}ngOnInit(){this.trigger()}trigger(){"click"===this.nelPopoverTrigger?this.triggerDisposables.push(this.renderer.listen(this.elementRef.nativeElement,"click",()=>this.show())):"focus"===this.nelPopoverTrigger?(this.triggerDisposables.push(this.renderer.listen(this.elementRef.nativeElement,"focus",()=>this.show())),this.triggerDisposables.push(this.renderer.listen(this.elementRef.nativeElement,"blur",()=>this.hide()))):"hover"===this.nelPopoverTrigger&&(this.triggerDisposables.push(this.renderer.listen(this.elementRef.nativeElement,"mouseenter",()=>this.show())),this.triggerDisposables.push(this.renderer.listen(this.elementRef.nativeElement,"mouseleave",()=>this.hide())))}removeTriggerListeners(){this.triggerDisposables.forEach(e=>e()),this.triggerDisposables.length=0}show(){const e={originX:"start",originY:"top",overlayX:"start",overlayY:"bottom",offsetX:0,offsetY:0};let t="",n="",o="",r="",i="";switch(this.nelPopoverPlacement){case"top-start":e.originX="start",e.originY="top",e.overlayX="start",e.overlayY="bottom",e.offsetY=-10,t="0",i="translate(30px, 5px)";break;case"top":e.originX="center",e.originY="top",e.overlayX="center",e.overlayY="bottom",e.offsetY=-10,t="50%",i="translate(-50%, 5px)";break;case"top-end":e.originX="end",e.originY="top",e.overlayX="end",e.overlayY="bottom",e.offsetY=-10,t="50%",i="translate(30px, 5px)";break;case"bottom-start":e.originX="start",e.originY="bottom",e.overlayX="start",e.overlayY="top",e.offsetY=10,t="0",o="-10px",i="translate(30px, 5px)";break;case"bottom":e.originX="center",e.originY="bottom",e.overlayX="center",e.overlayY="top",e.offsetY=10,t="50%",o="-10px",i="translate(-50%, 5px)";break;case"bottom-end":e.originX="end",e.originY="bottom",e.overlayX="end",e.overlayY="top",e.offsetY=10,t="50%",o="-10px",i="translate(30px, 5px)";break;case"left-start":e.originX="start",e.originY="top",e.overlayX="end",e.overlayY="top",e.offsetX=-10,n="0",o="0",i="translate(5px, 15px)";break;case"left":e.originX="start",e.originY="center",e.overlayX="end",e.overlayY="center",e.offsetX=-10,n="0",o="50%",i="translate(5px, -50%)";break;case"left-end":e.originX="start",e.originY="bottom",e.overlayX="end",e.overlayY="bottom",e.offsetX=-10,n="0",r="0",i="translate(5px, -15px)";break;case"right-start":e.originX="end",e.originY="top",e.overlayX="start",e.overlayY="top",e.offsetX=10,t="0",o="0",i="translate(-5px, 15px)";break;case"right":e.originX="end",e.originY="center",e.overlayX="start",e.overlayY="center",e.offsetX=10,t="0",o="50%",i="translate(-5px, -50%)";break;case"right-end":e.originX="end",e.originY="bottom",e.overlayX="start",e.overlayY="bottom",e.offsetX=10,t="0",r="0",i="translate(-5px, -15px)"}this.component&&(this.component.title=this.nelPopoverTitle,this.component.content=this.nelPopoverContent,this.component.width=this.nelPopoverWidth,this.component.trigger=this.nelPopoverTrigger,this.component.visibleChange=this.nelPopoverVisibleChange,this.component.origin={elementRef:this.elementRef},this.component.isOpen=!0,this.component.positionStrategy=[e],this.component.arrowLeft=t,this.component.arrowRight=n,this.component.arrowTop=o,this.component.arrowBottom=r,this.component.transform=i,this.nelPopoverVisibleChange.emit(!0))}hide(){var e;null===(e=this.component)||void 0===e||e.close()}}return e.\u0275fac=function(t){return new(t||e)(o.Mb(o.P),o.Mb(o.l),o.Mb(o.j),o.Mb(o.E))},e.\u0275dir=o.Hb({type:e,selectors:[["","nel-popover",""]],inputs:{nelPopoverTitle:"nelPopoverTitle",nelPopoverContent:"nelPopoverContent",nelPopoverWidth:"nelPopoverWidth",nelPopoverTrigger:"nelPopoverTrigger",nelPopoverPlacement:"nelPopoverPlacement",nelPopoverVisible:"nelPopoverVisible"},outputs:{nelPopoverVisibleChange:"nelPopoverVisibleChange"}}),e})();var b=n("j9Rq");let u=(()=>{class e{}return e.\u0275fac=function(t){return new(t||e)},e.\u0275mod=o.Kb({type:e}),e.\u0275inj=o.Jb({imports:[[i.b,r.c,b.a]]}),e})();var v=n("ackU");let h=(()=>{class e{}return e.\u0275fac=function(t){return new(t||e)},e.\u0275mod=o.Kb({type:e}),e.\u0275inj=o.Jb({imports:[[u,v.b]]}),e})();var f=n("PCNd"),g=n("tyNb"),m=n("QJGT"),P=n("rvuC"),y=n("X2/8");let w=(()=>{class e{constructor(){this.visible=!1}}return e.\u0275fac=function(t){return new(t||e)},e.\u0275cmp=o.Gb({type:e,selectors:[["nel-demo-popover-basic"]],decls:8,vars:21,consts:[["nel-button","","nel-popover","",3,"nelPopoverPlacement","nelPopoverTitle","nelPopoverWidth","nelPopoverTrigger","nelPopoverContent"],["nel-button","","nel-popover","","ref","popover",3,"nelPopoverPlacement","nelPopoverTitle","nelPopoverWidth","nelPopoverTrigger","nelPopoverContent"],["nel-button","","nel-popover","",3,"nelPopoverPlacement","nelPopoverTitle","nelPopoverWidth","nelPopoverTrigger","nelPopoverContent","nelPopoverVisible","click"]],template:function(e,t){1&e&&(o.Sb(0,"button",0),o.wc(1,"hover \u6fc0\u6d3b "),o.Rb(),o.Sb(2,"button",0),o.wc(3,"click \u6fc0\u6d3b "),o.Rb(),o.Sb(4,"button",1),o.wc(5,"focus \u6fc0\u6d3b "),o.Rb(),o.Sb(6,"button",2),o.Zb("click",function(){return t.visible=!t.visible}),o.wc(7,"\u624b\u52a8\u6fc0\u6d3b "),o.Rb()),2&e&&(o.ic("nelPopoverPlacement","top-start")("nelPopoverTitle","\u6807\u9898")("nelPopoverWidth",200)("nelPopoverTrigger","hover")("nelPopoverContent","\u8fd9\u662f\u4e00\u6bb5\u5185\u5bb9,\u8fd9\u662f\u4e00\u6bb5\u5185\u5bb9,\u8fd9\u662f\u4e00\u6bb5\u5185\u5bb9,\u8fd9\u662f\u4e00\u6bb5\u5185\u5bb9\u3002"),o.zb(2),o.ic("nelPopoverPlacement","bottom")("nelPopoverTitle","\u6807\u9898")("nelPopoverWidth",200)("nelPopoverTrigger","click")("nelPopoverContent","\u8fd9\u662f\u4e00\u6bb5\u5185\u5bb9,\u8fd9\u662f\u4e00\u6bb5\u5185\u5bb9,\u8fd9\u662f\u4e00\u6bb5\u5185\u5bb9,\u8fd9\u662f\u4e00\u6bb5\u5185\u5bb9\u3002"),o.zb(2),o.ic("nelPopoverPlacement","right")("nelPopoverTitle","\u6807\u9898")("nelPopoverWidth",200)("nelPopoverTrigger","focus")("nelPopoverContent","\u8fd9\u662f\u4e00\u6bb5\u5185\u5bb9,\u8fd9\u662f\u4e00\u6bb5\u5185\u5bb9,\u8fd9\u662f\u4e00\u6bb5\u5185\u5bb9,\u8fd9\u662f\u4e00\u6bb5\u5185\u5bb9\u3002"),o.zb(2),o.ic("nelPopoverPlacement","bottom")("nelPopoverTitle","\u6807\u9898")("nelPopoverWidth",200)("nelPopoverTrigger","manual")("nelPopoverContent","\u8fd9\u662f\u4e00\u6bb5\u5185\u5bb9,\u8fd9\u662f\u4e00\u6bb5\u5185\u5bb9,\u8fd9\u662f\u4e00\u6bb5\u5185\u5bb9,\u8fd9\u662f\u4e00\u6bb5\u5185\u5bb9\u3002")("nelPopoverVisible",t.visible))},directives:[y.a,d],encapsulation:2}),e})();function C(e,t){1&e&&o.wc(0," \u8fd9\u662f\u4e00\u4e2a\u5185\u5d4c\u7684content ")}let k=(()=>{class e{}return e.\u0275fac=function(t){return new(t||e)},e.\u0275cmp=o.Gb({type:e,selectors:[["nel-demo-popover-content"]],decls:4,vars:4,consts:[["nel-button","","nel-popover","",3,"nelPopoverContent","nelPopoverPlacement","nelPopoverWidth","nelPopoverTrigger"],["contentTpl",""]],template:function(e,t){if(1&e&&(o.Sb(0,"button",0),o.wc(1,"click \u6fc0\u6d3b "),o.Rb(),o.uc(2,C,1,0,"ng-template",null,1,o.vc)),2&e){const e=o.nc(3);o.ic("nelPopoverContent",e)("nelPopoverPlacement","right")("nelPopoverWidth",400)("nelPopoverTrigger","click")}},directives:[y.a,d],encapsulation:2}),e})();function T(e,t){if(1&e){const e=o.Tb();o.Sb(0,"p"),o.wc(1,"\u8fd9\u662f\u4e00\u6bb5\u5185\u5bb9\u8fd9\u662f\u4e00\u6bb5\u5185\u5bb9\u786e\u5b9a\u5220\u9664\u5417\uff1f"),o.Rb(),o.Sb(2,"div",2),o.Sb(3,"button",3),o.Zb("click",function(){return o.oc(e),o.dc().visible=!1}),o.wc(4,"\u53d6\u6d88"),o.Rb(),o.Sb(5,"button",4),o.Zb("click",function(){return o.oc(e),o.dc().visible=!1}),o.wc(6,"\u786e\u5b9a"),o.Rb(),o.Rb()}2&e&&(o.zb(3),o.ic("nelSize","mini")("nelType","text"),o.zb(2),o.ic("nelType","primary")("nelSize","mini"))}let x=(()=>{class e{constructor(){this.visible=!1}}return e.\u0275fac=function(t){return new(t||e)},e.\u0275cmp=o.Gb({type:e,selectors:[["nel-demo-popover-confirm"]],decls:4,vars:4,consts:[["nel-button","","nel-popover","",3,"nelPopoverContent","nelPopoverPlacement","nelPopoverWidth","nelPopoverVisible","nelPopoverVisibleChange"],["contentTpl",""],[2,"text-align","right","margin","0"],["nel-button","",3,"nelSize","nelType","click"],["nel-button","",3,"nelType","nelSize","click"]],template:function(e,t){if(1&e&&(o.Sb(0,"button",0),o.Zb("nelPopoverVisibleChange",function(e){return t.visible=e}),o.wc(1,"\u5220\u9664 "),o.Rb(),o.uc(2,T,7,4,"ng-template",null,1,o.vc)),2&e){const e=o.nc(3);o.ic("nelPopoverContent",e)("nelPopoverPlacement","top")("nelPopoverWidth",160)("nelPopoverVisible",t.visible)}},directives:[y.a,d],encapsulation:2}),e})();var O=n("6qls");const R=[{path:"",component:(()=>{class e{}return e.\u0275fac=function(t){return new(t||e)},e.\u0275cmp=o.Gb({type:e,selectors:[["app-popover"]],decls:20,vars:4,consts:[["code","import { NelPopoverModule } from 'ng-element-ui/popover';"],[3,"codeUrl"],["demo",""],[3,"docUrl"]],template:function(e,t){1&e&&(o.Sb(0,"h2"),o.wc(1,"Popover \u5f39\u51fa\u6846"),o.Rb(),o.Nb(2,"app-code",0),o.Sb(3,"h3"),o.wc(4,"\u57fa\u7840\u7528\u6cd5"),o.Rb(),o.Sb(5,"app-demo",1),o.Nb(6,"nel-demo-popover-basic",2),o.Rb(),o.Sb(7,"h3"),o.wc(8,"\u5d4c\u5957\u4fe1\u606f"),o.Rb(),o.Sb(9,"p"),o.wc(10,"\u53ef\u4ee5\u5728 Popover \u4e2d\u5d4c\u5957\u591a\u79cd\u7c7b\u578b\u4fe1\u606f\uff0c\u4ee5\u4e0b\u4e3a\u5d4c\u5957\u8868\u683c\u7684\u4f8b\u5b50\u3002"),o.Rb(),o.Sb(11,"app-demo",1),o.Nb(12,"nel-demo-popover-content",2),o.Rb(),o.Sb(13,"h3"),o.wc(14,"\u5d4c\u5957\u64cd\u4f5c"),o.Rb(),o.Sb(15,"p"),o.wc(16,"\u5f53\u7136\uff0c\u4f60\u8fd8\u53ef\u4ee5\u5d4c\u5957\u64cd\u4f5c\uff0c\u8fd9\u76f8\u6bd4 Dialog \u66f4\u4e3a\u8f7b\u91cf\uff1a"),o.Rb(),o.Sb(17,"app-demo",1),o.Nb(18,"nel-demo-popover-confirm",2),o.Rb(),o.Nb(19,"app-doc",3)),2&e&&(o.zb(5),o.ic("codeUrl","components-popover-demo-basic.component"),o.zb(6),o.ic("codeUrl","components-popover-demo-content.component"),o.zb(6),o.ic("codeUrl","components-popover-demo-confirm.component"),o.zb(2),o.ic("docUrl","components-popover"))},directives:[m.a,P.a,w,k,x,O.a],encapsulation:2}),e})()}];let X=(()=>{class e{}return e.\u0275fac=function(t){return new(t||e)},e.\u0275mod=o.Kb({type:e}),e.\u0275inj=o.Jb({imports:[[g.f.forChild(R)],g.f]}),e})(),S=(()=>{class e{}return e.\u0275fac=function(t){return new(t||e)},e.\u0275mod=o.Kb({type:e}),e.\u0275inj=o.Jb({imports:[[h,f.a,X]]}),e})()}}]);