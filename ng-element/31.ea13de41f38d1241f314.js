(window.webpackJsonp=window.webpackJsonp||[]).push([[31],{"6qls":function(t,e,n){"use strict";n.d(e,"a",function(){return c});var o=n("fXoL"),i=n("F5nt"),r=n("dran");let c=(()=>{class t{constructor(t){this.appService=t,this.docUrl="",this.doc=""}ngOnInit(){this.appService.getDoc(this.docUrl).subscribe(t=>{this.doc=t})}}return t.\u0275fac=function(e){return new(e||t)(o.Mb(i.a))},t.\u0275cmp=o.Gb({type:t,selectors:[["app-doc"]],inputs:{docUrl:"docUrl"},decls:2,vars:3,consts:[[1,"marked",3,"innerHTML"]],template:function(t,e){1&t&&(o.Nb(0,"div",0),o.ec(1,"marked")),2&t&&o.ic("innerHTML",o.fc(1,1,e.doc),o.pc)},pipes:[r.a],styles:[".marked{font-size:14px;line-height:2}.marked h3{margin:55px 0 20px;font-weight:400;color:#1f2f3d;font-size:22px}.marked table{border-collapse:collapse;width:100%;background-color:#fff;font-size:14px;margin-bottom:45px;line-height:1.5em}.marked table td:first-child,.marked table th:first-child{padding-left:10px}.marked table th{text-align:left;white-space:nowrap;color:#909399;font-weight:400}.marked table td,.marked table th{border-bottom:1px solid #dcdfe6;padding:15px;max-width:250px}.marked table td{color:#606266}.marked ul{margin:0;padding:0}.marked ul>li{margin-left:20px;padding-left:4px;list-style-type:circle}.marked code{margin:0 1px;padding:.2em .4em;background:#f2f4f5;border:1px solid #f0f0f0;border-radius:3px}"],encapsulation:2}),t})()},QJGT:function(t,e,n){"use strict";n.d(e,"a",function(){return s});var o=n("fXoL"),i=n("yqRL"),r=n("ofXK"),c=n("UXJo"),l=n("pIld");function a(t,e){if(1&t){const t=o.Tb();o.Qb(0),o.Sb(1,"div",1),o.Sb(2,"pre",2),o.Nb(3,"code",3),o.ec(4,"highlightAuto"),o.Rb(),o.Sb(5,"i",4),o.Zb("cdkCopyToClipboardCopied",function(e){return o.oc(t),o.dc().copy(e)}),o.Rb(),o.Rb(),o.Pb()}if(2&t){const t=o.dc();o.zb(3),o.ic("innerHTML",o.fc(4,2,t.code),o.pc),o.zb(2),o.ic("cdkCopyToClipboard",t.code)}}let s=(()=>{class t{constructor(t){this.messageS=t}copy(t){t?this.messageS.success("\u590d\u5236\u6210\u529f"):this.messageS.error("\u590d\u5236\u5931\u8d25")}}return t.\u0275fac=function(e){return new(e||t)(o.Mb(i.b))},t.\u0275cmp=o.Gb({type:t,selectors:[["app-code"]],inputs:{code:"code"},decls:1,vars:1,consts:[[4,"ngIf"],[1,"highlight"],[1,"language-ts"],[1,"hljs",3,"innerHTML"],[1,"el-icon-copy-document",3,"cdkCopyToClipboard","cdkCopyToClipboardCopied"]],template:function(t,e){1&t&&o.uc(0,a,6,4,"ng-container",0),2&t&&o.ic("ngIf",e.code)},directives:[r.i,c.a],pipes:[l.a],styles:["pre[class*=language-][_ngcontent-%COMP%]{background:#f6f6f6;margin:16px 0;padding:12px 20px;overflow:auto}.highlight[_ngcontent-%COMP%]{position:relative}i[_ngcontent-%COMP%]{position:absolute;top:12px;right:10px;font-size:24px;color:#b0bec5;cursor:pointer}i[_ngcontent-%COMP%]:hover{color:#6e6e6e}"]}),t})()},pdr6:function(t,e,n){"use strict";n.r(e),n.d(e,"TooltipModule",function(){return Y});var o=n("WzYV"),i=n("fXoL"),r=n("72Au");function c(t,e){1&t&&i.Ob(0)}let l=(()=>{class t{constructor(){this.arrowLeft="",this.arrowRight="",this.arrowTop="",this.arrowBottom="",this.transform="",this.effect="dark"}}return t.\u0275fac=function(e){return new(e||t)},t.\u0275cmp=i.Gb({type:t,selectors:[["nel-tooltip"]],decls:3,vars:14,consts:[[4,"stringTemplate"],[1,"el-popper__arrow"]],template:function(t,e){1&t&&(i.Sb(0,"div"),i.uc(1,c,1,0,"ng-container",0),i.Nb(2,"div",1),i.Rb()),2&t&&(i.Cb("el-popper is-",e.effect,""),i.zb(1),i.ic("stringTemplate",e.content),i.zb(1),i.tc("left",e.arrowLeft)("right",e.arrowRight)("top",e.arrowTop)("bottom",e.arrowBottom)("transform",e.transform))},directives:[r.a],encapsulation:2,data:{animation:[o.d]},changeDetection:0}),t})();var a=n("+rOU"),s=n("rDax");let p=(()=>{class t{constructor(t,e,n){this.overlay=t,this.overlayPositionBuilder=e,this.elementRef=n,this.nelPlacement="bottom",this.nelEffect="dark",this.disabled=!1}set nelDisabled(t){this.disabled=t,t&&this.hide()}ngOnInit(){}onMouseenter(){this.disabled||this.show()}onMouseleave(){this.hide()}show(){const t={originX:"start",originY:"top",overlayX:"start",overlayY:"bottom",offsetX:0,offsetY:0};let e="",n="",o="",i="",r="";switch(this.nelPlacement){case"top-start":t.originX="start",t.originY="top",t.overlayX="start",t.overlayY="bottom",t.offsetY=-10,e="0",r="translate(30px, 5px)";break;case"top":t.originX="center",t.originY="top",t.overlayX="center",t.overlayY="bottom",t.offsetY=-10,e="50%",r="translate(-50%, 5px)";break;case"top-end":t.originX="end",t.originY="top",t.overlayX="end",t.overlayY="bottom",t.offsetY=-10,e="50%",r="translate(30px, 5px)";break;case"bottom-start":t.originX="start",t.originY="bottom",t.overlayX="start",t.overlayY="top",t.offsetY=10,e="0",o="-10px",r="translate(30px, 5px)";break;case"bottom":t.originX="center",t.originY="bottom",t.overlayX="center",t.overlayY="top",t.offsetY=10,e="50%",o="-10px",r="translate(-50%, 5px)";break;case"bottom-end":t.originX="end",t.originY="bottom",t.overlayX="end",t.overlayY="top",t.offsetY=10,e="50%",o="-10px",r="translate(30px, 5px)";break;case"left-start":t.originX="start",t.originY="top",t.overlayX="end",t.overlayY="top",t.offsetX=-10,n="0",o="0",r="translate(5px, 15px)";break;case"left":t.originX="start",t.originY="center",t.overlayX="end",t.overlayY="center",t.offsetX=-10,n="0",o="50%",r="translate(5px, -50%)";break;case"left-end":t.originX="start",t.originY="bottom",t.overlayX="end",t.overlayY="bottom",t.offsetX=-10,n="0",i="0",r="translate(5px, -15px)";break;case"right-start":t.originX="end",t.originY="top",t.overlayX="start",t.overlayY="top",t.offsetX=10,e="0",o="0",r="translate(-5px, 15px)";break;case"right":t.originX="end",t.originY="center",t.overlayX="start",t.overlayY="center",t.offsetX=10,e="0",o="50%",r="translate(-5px, -50%)";break;case"right-end":t.originX="end",t.originY="bottom",t.overlayX="start",t.overlayY="bottom",t.offsetX=10,e="0",i="0",r="translate(-5px, -15px)"}const c=this.overlayPositionBuilder.flexibleConnectedTo(this.elementRef).withPositions([t]);if(this.overlayRef=this.overlay.create({positionStrategy:c}),this.overlayRef){const t=this.overlayRef.attach(new a.a(l));this.nelContent&&(t.instance.content=this.nelContent,t.instance.effect=this.nelEffect,t.instance.arrowLeft=e,t.instance.arrowRight=n,t.instance.arrowTop=o,t.instance.arrowBottom=i,t.instance.transform=r)}}hide(){var t;null===(t=this.overlayRef)||void 0===t||t.detach()}}return t.\u0275fac=function(e){return new(e||t)(i.Mb(s.b),i.Mb(s.d),i.Mb(i.l))},t.\u0275dir=i.Hb({type:t,selectors:[["","nel-tooltip",""]],hostBindings:function(t,e){1&t&&i.Zb("mouseenter",function(t){return e.onMouseenter(t.target)})("mouseleave",function(t){return e.onMouseleave(t.target)})},inputs:{nelContent:"nelContent",nelPlacement:"nelPlacement",nelEffect:"nelEffect",nelDisabled:"nelDisabled"}}),t})();var b=n("j9Rq");let d=(()=>{class t{}return t.\u0275fac=function(e){return new(e||t)},t.\u0275mod=i.Kb({type:t}),t.\u0275inj=i.Jb({imports:[[s.c,b.a]]}),t})();var f=n("ackU");let m=(()=>{class t{}return t.\u0275fac=function(e){return new(e||t)},t.\u0275mod=i.Kb({type:t}),t.\u0275inj=i.Jb({imports:[[d,f.a]]}),t})();var u=n("PCNd"),g=n("tyNb"),h=n("QJGT"),v=n("rvuC"),w=n("X2/8");let y=(()=>{class t{}return t.\u0275fac=function(e){return new(e||t)},t.\u0275cmp=i.Gb({type:t,selectors:[["nel-demo-tooltip-basic"]],decls:29,vars:24,consts:[[1,"box"],[1,"top"],["nel-button","","nel-tooltip","",1,"item",3,"nelContent","nelPlacement"],[1,"left"],[1,"right"],[1,"bottom"]],template:function(t,e){1&t&&(i.Sb(0,"div",0),i.Sb(1,"div",1),i.Sb(2,"button",2),i.wc(3,"\u4e0a\u5de6"),i.Rb(),i.Sb(4,"button",2),i.wc(5,"\u4e0a\u8fb9"),i.Rb(),i.Sb(6,"button",2),i.wc(7,"\u4e0a\u53f3"),i.Rb(),i.Rb(),i.Sb(8,"div",3),i.Sb(9,"button",2),i.wc(10,"\u5de6\u4e0a"),i.Rb(),i.Sb(11,"button",2),i.wc(12,"\u5de6\u8fb9"),i.Rb(),i.Sb(13,"button",2),i.wc(14,"\u5de6\u4e0b"),i.Rb(),i.Rb(),i.Sb(15,"div",4),i.Sb(16,"button",2),i.wc(17,"\u53f3\u4e0a"),i.Rb(),i.Sb(18,"button",2),i.wc(19,"\u53f3\u8fb9"),i.Rb(),i.Sb(20,"button",2),i.wc(21,"\u53f3\u4e0b"),i.Rb(),i.Rb(),i.Sb(22,"div",5),i.Sb(23,"button",2),i.wc(24,"\u4e0b\u5de6"),i.Rb(),i.Sb(25,"button",2),i.wc(26,"\u4e0b\u8fb9"),i.Rb(),i.Sb(27,"button",2),i.wc(28,"\u4e0b\u53f3"),i.Rb(),i.Rb(),i.Rb()),2&t&&(i.zb(2),i.ic("nelContent","Top Left \u63d0\u793a\u6587\u5b57")("nelPlacement","top-start"),i.zb(2),i.ic("nelContent","Top Center \u63d0\u793a\u6587\u5b57")("nelPlacement","top"),i.zb(2),i.ic("nelContent","Top Right \u63d0\u793a\u6587\u5b57")("nelPlacement","top-end"),i.zb(3),i.ic("nelContent","Left Top \u63d0\u793a\u6587\u5b57")("nelPlacement","left-start"),i.zb(2),i.ic("nelContent","Left Center \u63d0\u793a\u6587\u5b57")("nelPlacement","left"),i.zb(2),i.ic("nelContent","Left Bottom \u63d0\u793a\u6587\u5b57")("nelPlacement","left-end"),i.zb(3),i.ic("nelContent","Righ  Top \u63d0\u793a\u6587\u5b57")("nelPlacement","right-start"),i.zb(2),i.ic("nelContent","Right Center \u63d0\u793a\u6587\u5b57")("nelPlacement","right"),i.zb(2),i.ic("nelContent","Right Bottom \u63d0\u793a\u6587\u5b57")("nelPlacement","right-end"),i.zb(3),i.ic("nelContent","Bottom Left \u63d0\u793a\u6587\u5b57")("nelPlacement","bottom-start"),i.zb(2),i.ic("nelContent","Bottom Center \u63d0\u793a\u6587\u5b57")("nelPlacement","bottom"),i.zb(2),i.ic("nelContent","Bottom Right \u63d0\u793a\u6587\u5b57")("nelPlacement","bottom-end"))},directives:[w.a,p],styles:[".box[_ngcontent-%COMP%] {\n        width: 400px;\n      }\n\n      .top[_ngcontent-%COMP%] {\n        text-align: center;\n      }\n\n      .left[_ngcontent-%COMP%] {\n        float: left;\n        width: 60px;\n      }\n\n      .right[_ngcontent-%COMP%] {\n        float: right;\n        width: 60px;\n      }\n\n      .bottom[_ngcontent-%COMP%] {\n        clear: both;\n        text-align: center;\n      }\n\n      .item[_ngcontent-%COMP%] {\n        margin: 4px;\n      }\n\n      .left[_ngcontent-%COMP%]   .el-tooltip__popper[_ngcontent-%COMP%], .right[_ngcontent-%COMP%]   .el-tooltip__popper[_ngcontent-%COMP%] {\n        padding: 8px 10px;\n      }"]}),t})(),C=(()=>{class t{}return t.\u0275fac=function(e){return new(e||t)},t.\u0275cmp=i.Gb({type:t,selectors:[["nel-demo-tooltip-effect"]],decls:4,vars:5,consts:[["nel-button","","nel-tooltip","",3,"nelContent","nelPlacement"],["nel-button","","nel-tooltip","",3,"nelContent","nelPlacement","nelEffect"]],template:function(t,e){1&t&&(i.Sb(0,"button",0),i.wc(1,"Dark"),i.Rb(),i.Sb(2,"button",1),i.wc(3,"Light"),i.Rb()),2&t&&(i.ic("nelContent","Top center")("nelPlacement","top"),i.zb(2),i.ic("nelContent","Bottom center")("nelPlacement","bottom")("nelEffect","light"))},directives:[w.a,p],encapsulation:2}),t})();function x(t,e){1&t&&(i.wc(0," \u591a\u884c\u4fe1\u606f"),i.Nb(1,"br"),i.wc(2,"\u7b2c\u4e8c\u884c\u4fe1\u606f "))}let R=(()=>{class t{}return t.\u0275fac=function(e){return new(e||t)},t.\u0275cmp=i.Gb({type:t,selectors:[["nel-demo-tooltip-content"]],decls:4,vars:2,consts:[["nel-button","","nel-tooltip","",3,"nelContent","nelPlacement"],["contentTpl",""]],template:function(t,e){if(1&t&&(i.Sb(0,"button",0),i.wc(1,"Top center"),i.Rb(),i.uc(2,x,3,0,"ng-template",null,1,i.vc)),2&t){const t=i.nc(3);i.ic("nelContent",t)("nelPlacement","top")}},directives:[w.a,p],encapsulation:2}),t})(),S=(()=>{class t{constructor(){this.disabled=!1}}return t.\u0275fac=function(e){return new(e||t)},t.\u0275cmp=i.Gb({type:t,selectors:[["nel-demo-tooltip-disabled"]],decls:2,vars:5,consts:[["nel-button","","nel-tooltip","",3,"nelContent","nelPlacement","nelEffect","nelDisabled","click"]],template:function(t,e){1&t&&(i.Sb(0,"button",0),i.Zb("click",function(){return e.disabled=!e.disabled}),i.wc(1),i.Rb()),2&t&&(i.ic("nelContent","\u70b9\u51fb\u5173\u95ed tooltip \u529f\u80fd")("nelPlacement","bottom")("nelEffect","light")("nelDisabled",e.disabled),i.zb(1),i.yc("\u70b9\u51fb",e.disabled?"\u5f00\u542f":"\u5173\u95ed"," tooltip \u529f\u80fd"))},directives:[w.a,p],encapsulation:2}),t})();var P=n("6qls");const k=[{path:"",component:(()=>{class t{}return t.\u0275fac=function(e){return new(e||t)},t.\u0275cmp=i.Gb({type:t,selectors:[["app-tooltip"]],hostVars:2,hostBindings:function(t,e){2&t&&i.Bb("article")},decls:30,vars:5,consts:[["code","import { NelTooltipModule } from 'ng-element-ui/tooltip';"],[3,"codeUrl"],["demo",""],["notes","\u901a\u8fc7\u8bbe\u7f6enelEffect\u5c5e\u6027\u6765\u6539\u53d8\u4e3b\u9898\uff0c\u9ed8\u8ba4\u4e3adark\u3002",3,"codeUrl"],[3,"docUrl"]],template:function(t,e){1&t&&(i.Sb(0,"h2"),i.wc(1,"Tooltip \u6587\u5b57\u63d0\u793a"),i.Rb(),i.Sb(2,"p"),i.wc(3,"\u5e38\u7528\u4e8e\u5c55\u793a\u9f20\u6807 hover \u65f6\u7684\u63d0\u793a\u4fe1\u606f\u3002"),i.Rb(),i.Nb(4,"app-code",0),i.Sb(5,"h3"),i.wc(6,"\u57fa\u7840\u7528\u6cd5"),i.Rb(),i.Sb(7,"p"),i.wc(8,"\u5728\u8fd9\u91cc\u6211\u4eec\u63d0\u4f9b 9 \u79cd\u4e0d\u540c\u65b9\u5411\u7684\u5c55\u793a\u65b9\u5f0f\uff0c\u53ef\u4ee5\u901a\u8fc7\u4ee5\u4e0b\u5b8c\u6574\u793a\u4f8b\u6765\u7406\u89e3\uff0c\u9009\u62e9\u4f60\u8981\u7684\u6548\u679c\u3002"),i.Rb(),i.Sb(9,"app-demo",1),i.Nb(10,"nel-demo-tooltip-basic",2),i.Rb(),i.Sb(11,"h3"),i.wc(12,"\u4e3b\u9898"),i.Rb(),i.Sb(13,"p"),i.wc(14,"Tooltip \u7ec4\u4ef6\u63d0\u4f9b\u4e86\u4e24\u4e2a\u4e0d\u540c\u7684\u4e3b\u9898\uff1adark\u548clight\u3002"),i.Rb(),i.Sb(15,"app-demo",3),i.Nb(16,"nel-demo-tooltip-effect",2),i.Rb(),i.Sb(17,"h3"),i.wc(18,"\u66f4\u591a Content"),i.Rb(),i.Sb(19,"p"),i.wc(20,"\u5c55\u793a\u591a\u884c\u6587\u672c\u6216\u8005\u662f\u8bbe\u7f6e\u6587\u672c\u5185\u5bb9\u7684\u683c\u5f0f"),i.Rb(),i.Sb(21,"app-demo",1),i.Nb(22,"nel-demo-tooltip-content",2),i.Rb(),i.Sb(23,"h3"),i.wc(24,"\u9ad8\u7ea7\u6269\u5c55"),i.Rb(),i.Sb(25,"p"),i.wc(26,"\u5982\u679c\u9700\u8981\u5173\u95ed tooltip \u529f\u80fd\uff0cnelDisabled \u5c5e\u6027\u53ef\u4ee5\u6ee1\u8db3\u8fd9\u4e2a\u9700\u6c42\uff0c\u5b83\u63a5\u53d7\u4e00\u4e2aBoolean\uff0c\u8bbe\u7f6e\u4e3atrue\u5373\u53ef\u3002"),i.Rb(),i.Sb(27,"app-demo",1),i.Nb(28,"nel-demo-tooltip-disabled",2),i.Rb(),i.Nb(29,"app-doc",4)),2&t&&(i.zb(9),i.ic("codeUrl","components-tooltip-demo-basic.component"),i.zb(6),i.ic("codeUrl","components-tooltip-demo-effect.component"),i.zb(6),i.ic("codeUrl","components-tooltip-demo-content.component"),i.zb(6),i.ic("codeUrl","components-tooltip-demo-disabled.component"),i.zb(2),i.ic("docUrl","components-tooltip"))},directives:[h.a,v.a,y,C,R,S,P.a],encapsulation:2}),t})()}];let X=(()=>{class t{}return t.\u0275fac=function(e){return new(e||t)},t.\u0275mod=i.Kb({type:t}),t.\u0275inj=i.Jb({imports:[[g.e.forChild(k)],g.e]}),t})(),Y=(()=>{class t{}return t.\u0275fac=function(e){return new(e||t)},t.\u0275mod=i.Kb({type:t}),t.\u0275inj=i.Jb({imports:[[m,u.a,X]]}),t})()}}]);