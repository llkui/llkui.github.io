(window.webpackJsonp=window.webpackJsonp||[]).push([[30],{"6qls":function(t,e,n){"use strict";n.d(e,"a",function(){return i});var o=n("fXoL"),r=n("F5nt"),l=n("dran");let i=(()=>{class t{constructor(t){this.appService=t,this.docUrl="",this.doc=""}ngOnInit(){this.appService.getDoc(this.docUrl).subscribe(t=>{this.doc=t})}}return t.\u0275fac=function(e){return new(e||t)(o.Mb(r.a))},t.\u0275cmp=o.Gb({type:t,selectors:[["app-doc"]],inputs:{docUrl:"docUrl"},decls:2,vars:3,consts:[[1,"marked",3,"innerHTML"]],template:function(t,e){1&t&&(o.Nb(0,"div",0),o.ec(1,"marked")),2&t&&o.ic("innerHTML",o.fc(1,1,e.doc),o.oc)},pipes:[l.a],styles:[".marked h3{margin:55px 0 20px;font-weight:400;color:#1f2f3d;font-size:22px}.marked table{border-collapse:collapse;width:100%;background-color:#fff;font-size:14px;margin-bottom:45px;line-height:1.5em}.marked table td:first-child,.marked table th:first-child{padding-left:10px}.marked table th{text-align:left;white-space:nowrap;color:#909399;font-weight:400}.marked table td,.marked table th{border-bottom:1px solid #dcdfe6;padding:15px;max-width:250px}.marked table td{color:#606266}"],encapsulation:2}),t})()},pdr6:function(t,e,n){"use strict";n.r(e),n.d(e,"TooltipModule",function(){return k});var o=n("WzYV"),r=n("fXoL"),l=n("72Au");function i(t,e){1&t&&r.Ob(0)}let c=(()=>{class t{constructor(){this.arrowLeft="",this.arrowRight="",this.arrowTop="",this.arrowBottom="",this.transform="",this.effect="dark"}}return t.\u0275fac=function(e){return new(e||t)},t.\u0275cmp=r.Gb({type:t,selectors:[["nel-tooltip"]],decls:3,vars:14,consts:[[4,"stringTemplate"],[1,"el-popper__arrow"]],template:function(t,e){1&t&&(r.Sb(0,"div"),r.tc(1,i,1,0,"ng-container",0),r.Nb(2,"div",1),r.Rb()),2&t&&(r.Cb("el-popper is-",e.effect,""),r.zb(1),r.ic("stringTemplate",e.content),r.zb(1),r.sc("left",e.arrowLeft)("right",e.arrowRight)("top",e.arrowTop)("bottom",e.arrowBottom)("transform",e.transform))},directives:[l.a],encapsulation:2,data:{animation:[o.b]},changeDetection:0}),t})();var a=n("+rOU"),s=n("rDax");let b=(()=>{class t{constructor(t,e,n){this.overlay=t,this.overlayPositionBuilder=e,this.elementRef=n,this.nelPlacement="bottom",this.nelEffect="dark",this.disabled=!1}set nelDisabled(t){this.disabled=t,t&&this.hide()}ngOnInit(){}onMouseenter(){this.disabled||this.show()}onMouseleave(){this.hide()}show(){const t={originX:"start",originY:"top",overlayX:"start",overlayY:"bottom",offsetX:0,offsetY:0};let e="",n="",o="",r="",l="";switch(this.nelPlacement){case"top-start":t.originX="start",t.originY="top",t.overlayX="start",t.overlayY="bottom",t.offsetY=-10,e="0",l="translate(30px, 5px)";break;case"top":t.originX="center",t.originY="top",t.overlayX="center",t.overlayY="bottom",t.offsetY=-10,e="50%",l="translate(-50%, 5px)";break;case"top-end":t.originX="end",t.originY="top",t.overlayX="end",t.overlayY="bottom",t.offsetY=-10,e="50%",l="translate(30px, 5px)";break;case"bottom-start":t.originX="start",t.originY="bottom",t.overlayX="start",t.overlayY="top",t.offsetY=10,e="0",o="-10px",l="translate(30px, 5px)";break;case"bottom":t.originX="center",t.originY="bottom",t.overlayX="center",t.overlayY="top",t.offsetY=10,e="50%",o="-10px",l="translate(-50%, 5px)";break;case"bottom-end":t.originX="end",t.originY="bottom",t.overlayX="end",t.overlayY="top",t.offsetY=10,e="50%",o="-10px",l="translate(30px, 5px)";break;case"left-start":t.originX="start",t.originY="top",t.overlayX="end",t.overlayY="top",t.offsetX=-10,n="0",o="0",l="translate(5px, 15px)";break;case"left":t.originX="start",t.originY="center",t.overlayX="end",t.overlayY="center",t.offsetX=-10,n="0",o="50%",l="translate(5px, -50%)";break;case"left-end":t.originX="start",t.originY="bottom",t.overlayX="end",t.overlayY="bottom",t.offsetX=-10,n="0",r="0",l="translate(5px, -15px)";break;case"right-start":t.originX="end",t.originY="top",t.overlayX="start",t.overlayY="top",t.offsetX=10,e="0",o="0",l="translate(-5px, 15px)";break;case"right":t.originX="end",t.originY="center",t.overlayX="start",t.overlayY="center",t.offsetX=10,e="0",o="50%",l="translate(-5px, -50%)";break;case"right-end":t.originX="end",t.originY="bottom",t.overlayX="start",t.overlayY="bottom",t.offsetX=10,e="0",r="0",l="translate(-5px, -15px)"}const i=this.overlayPositionBuilder.flexibleConnectedTo(this.elementRef).withPositions([t]);if(this.overlayRef=this.overlay.create({positionStrategy:i}),this.overlayRef){const t=this.overlayRef.attach(new a.a(c));this.nelContent&&(t.instance.content=this.nelContent,t.instance.effect=this.nelEffect,t.instance.arrowLeft=e,t.instance.arrowRight=n,t.instance.arrowTop=o,t.instance.arrowBottom=r,t.instance.transform=l)}}hide(){var t;null===(t=this.overlayRef)||void 0===t||t.detach()}}return t.\u0275fac=function(e){return new(e||t)(r.Mb(s.b),r.Mb(s.e),r.Mb(r.l))},t.\u0275dir=r.Hb({type:t,selectors:[["","nel-tooltip",""]],hostBindings:function(t,e){1&t&&r.Zb("mouseenter",function(t){return e.onMouseenter(t.target)})("mouseleave",function(t){return e.onMouseleave(t.target)})},inputs:{nelContent:"nelContent",nelPlacement:"nelPlacement",nelEffect:"nelEffect",nelDisabled:"nelDisabled"}}),t})();var p=n("j9Rq");let d=(()=>{class t{}return t.\u0275fac=function(e){return new(e||t)},t.\u0275mod=r.Kb({type:t}),t.\u0275inj=r.Jb({imports:[[s.d,p.a]]}),t})();var f=n("ackU");let m=(()=>{class t{}return t.\u0275fac=function(e){return new(e||t)},t.\u0275mod=r.Kb({type:t}),t.\u0275inj=r.Jb({imports:[[d,f.a]]}),t})();var u=n("PCNd"),v=n("tyNb"),h=n("QJGT"),g=n("rvuC"),R=n("X2/8");let y=(()=>{class t{}return t.\u0275fac=function(e){return new(e||t)},t.\u0275cmp=r.Gb({type:t,selectors:[["nel-demo-tooltip-basic"]],decls:29,vars:24,consts:[[1,"box"],[1,"top"],["nel-button","","nel-tooltip","",1,"item",3,"nelContent","nelPlacement"],[1,"left"],[1,"right"],[1,"bottom"]],template:function(t,e){1&t&&(r.Sb(0,"div",0),r.Sb(1,"div",1),r.Sb(2,"button",2),r.vc(3,"\u4e0a\u5de6"),r.Rb(),r.Sb(4,"button",2),r.vc(5,"\u4e0a\u8fb9"),r.Rb(),r.Sb(6,"button",2),r.vc(7,"\u4e0a\u53f3"),r.Rb(),r.Rb(),r.Sb(8,"div",3),r.Sb(9,"button",2),r.vc(10,"\u5de6\u4e0a"),r.Rb(),r.Sb(11,"button",2),r.vc(12,"\u5de6\u8fb9"),r.Rb(),r.Sb(13,"button",2),r.vc(14,"\u5de6\u4e0b"),r.Rb(),r.Rb(),r.Sb(15,"div",4),r.Sb(16,"button",2),r.vc(17,"\u53f3\u4e0a"),r.Rb(),r.Sb(18,"button",2),r.vc(19,"\u53f3\u8fb9"),r.Rb(),r.Sb(20,"button",2),r.vc(21,"\u53f3\u4e0b"),r.Rb(),r.Rb(),r.Sb(22,"div",5),r.Sb(23,"button",2),r.vc(24,"\u4e0b\u5de6"),r.Rb(),r.Sb(25,"button",2),r.vc(26,"\u4e0b\u8fb9"),r.Rb(),r.Sb(27,"button",2),r.vc(28,"\u4e0b\u53f3"),r.Rb(),r.Rb(),r.Rb()),2&t&&(r.zb(2),r.ic("nelContent","Top Left \u63d0\u793a\u6587\u5b57")("nelPlacement","top-start"),r.zb(2),r.ic("nelContent","Top Center \u63d0\u793a\u6587\u5b57")("nelPlacement","top"),r.zb(2),r.ic("nelContent","Top Right \u63d0\u793a\u6587\u5b57")("nelPlacement","top-end"),r.zb(3),r.ic("nelContent","Left Top \u63d0\u793a\u6587\u5b57")("nelPlacement","left-start"),r.zb(2),r.ic("nelContent","Left Center \u63d0\u793a\u6587\u5b57")("nelPlacement","left"),r.zb(2),r.ic("nelContent","Left Bottom \u63d0\u793a\u6587\u5b57")("nelPlacement","left-end"),r.zb(3),r.ic("nelContent","Righ  Top \u63d0\u793a\u6587\u5b57")("nelPlacement","right-start"),r.zb(2),r.ic("nelContent","Right Center \u63d0\u793a\u6587\u5b57")("nelPlacement","right"),r.zb(2),r.ic("nelContent","Right Bottom \u63d0\u793a\u6587\u5b57")("nelPlacement","right-end"),r.zb(3),r.ic("nelContent","Bottom Left \u63d0\u793a\u6587\u5b57")("nelPlacement","bottom-start"),r.zb(2),r.ic("nelContent","Bottom Center \u63d0\u793a\u6587\u5b57")("nelPlacement","bottom"),r.zb(2),r.ic("nelContent","Bottom Right \u63d0\u793a\u6587\u5b57")("nelPlacement","bottom-end"))},directives:[R.a,b],styles:[".box[_ngcontent-%COMP%] {\n        width: 400px;\n      }\n\n      .top[_ngcontent-%COMP%] {\n        text-align: center;\n      }\n\n      .left[_ngcontent-%COMP%] {\n        float: left;\n        width: 60px;\n      }\n\n      .right[_ngcontent-%COMP%] {\n        float: right;\n        width: 60px;\n      }\n\n      .bottom[_ngcontent-%COMP%] {\n        clear: both;\n        text-align: center;\n      }\n\n      .item[_ngcontent-%COMP%] {\n        margin: 4px;\n      }\n\n      .left[_ngcontent-%COMP%]   .el-tooltip__popper[_ngcontent-%COMP%], .right[_ngcontent-%COMP%]   .el-tooltip__popper[_ngcontent-%COMP%] {\n        padding: 8px 10px;\n      }"]}),t})(),x=(()=>{class t{}return t.\u0275fac=function(e){return new(e||t)},t.\u0275cmp=r.Gb({type:t,selectors:[["nel-demo-tooltip-effect"]],decls:4,vars:5,consts:[["nel-button","","nel-tooltip","",3,"nelContent","nelPlacement"],["nel-button","","nel-tooltip","",3,"nelContent","nelPlacement","nelEffect"]],template:function(t,e){1&t&&(r.Sb(0,"button",0),r.vc(1,"Dark"),r.Rb(),r.Sb(2,"button",1),r.vc(3,"Light"),r.Rb()),2&t&&(r.ic("nelContent","Top center")("nelPlacement","top"),r.zb(2),r.ic("nelContent","Bottom center")("nelPlacement","bottom")("nelEffect","light"))},directives:[R.a,b],encapsulation:2}),t})();function w(t,e){1&t&&(r.vc(0," \u591a\u884c\u4fe1\u606f"),r.Nb(1,"br"),r.vc(2,"\u7b2c\u4e8c\u884c\u4fe1\u606f "))}let C=(()=>{class t{}return t.\u0275fac=function(e){return new(e||t)},t.\u0275cmp=r.Gb({type:t,selectors:[["nel-demo-tooltip-content"]],decls:4,vars:2,consts:[["nel-button","","nel-tooltip","",3,"nelContent","nelPlacement"],["contentTpl",""]],template:function(t,e){if(1&t&&(r.Sb(0,"button",0),r.vc(1,"Top center"),r.Rb(),r.tc(2,w,3,0,"ng-template",null,1,r.uc)),2&t){const t=r.mc(3);r.ic("nelContent",t)("nelPlacement","top")}},directives:[R.a,b],encapsulation:2}),t})(),P=(()=>{class t{constructor(){this.disabled=!1}}return t.\u0275fac=function(e){return new(e||t)},t.\u0275cmp=r.Gb({type:t,selectors:[["nel-demo-tooltip-disabled"]],decls:2,vars:5,consts:[["nel-button","","nel-tooltip","",3,"nelContent","nelPlacement","nelEffect","nelDisabled","click"]],template:function(t,e){1&t&&(r.Sb(0,"button",0),r.Zb("click",function(){return e.disabled=!e.disabled}),r.vc(1),r.Rb()),2&t&&(r.ic("nelContent","\u70b9\u51fb\u5173\u95ed tooltip \u529f\u80fd")("nelPlacement","bottom")("nelEffect","light")("nelDisabled",e.disabled),r.zb(1),r.xc("\u70b9\u51fb",e.disabled?"\u5f00\u542f":"\u5173\u95ed"," tooltip \u529f\u80fd"))},directives:[R.a,b],encapsulation:2}),t})();var S=n("6qls");const X=[{path:"",component:(()=>{class t{}return t.\u0275fac=function(e){return new(e||t)},t.\u0275cmp=r.Gb({type:t,selectors:[["app-tooltip"]],hostVars:2,hostBindings:function(t,e){2&t&&r.Bb("article")},decls:30,vars:5,consts:[["code","import { NelTooltipModule } from 'ng-element-ui/tooltip';"],[3,"codeUrl"],["demo",""],["notes","\u901a\u8fc7\u8bbe\u7f6enelEffect\u5c5e\u6027\u6765\u6539\u53d8\u4e3b\u9898\uff0c\u9ed8\u8ba4\u4e3adark\u3002",3,"codeUrl"],[3,"docUrl"]],template:function(t,e){1&t&&(r.Sb(0,"h2"),r.vc(1,"Tooltip \u6587\u5b57\u63d0\u793a"),r.Rb(),r.Sb(2,"p"),r.vc(3,"\u5e38\u7528\u4e8e\u5c55\u793a\u9f20\u6807 hover \u65f6\u7684\u63d0\u793a\u4fe1\u606f\u3002"),r.Rb(),r.Nb(4,"app-code",0),r.Sb(5,"h3"),r.vc(6,"\u57fa\u7840\u7528\u6cd5"),r.Rb(),r.Sb(7,"p"),r.vc(8,"\u5728\u8fd9\u91cc\u6211\u4eec\u63d0\u4f9b 9 \u79cd\u4e0d\u540c\u65b9\u5411\u7684\u5c55\u793a\u65b9\u5f0f\uff0c\u53ef\u4ee5\u901a\u8fc7\u4ee5\u4e0b\u5b8c\u6574\u793a\u4f8b\u6765\u7406\u89e3\uff0c\u9009\u62e9\u4f60\u8981\u7684\u6548\u679c\u3002"),r.Rb(),r.Sb(9,"app-demo",1),r.Nb(10,"nel-demo-tooltip-basic",2),r.Rb(),r.Sb(11,"h3"),r.vc(12,"\u4e3b\u9898"),r.Rb(),r.Sb(13,"p"),r.vc(14,"Tooltip \u7ec4\u4ef6\u63d0\u4f9b\u4e86\u4e24\u4e2a\u4e0d\u540c\u7684\u4e3b\u9898\uff1adark\u548clight\u3002"),r.Rb(),r.Sb(15,"app-demo",3),r.Nb(16,"nel-demo-tooltip-effect",2),r.Rb(),r.Sb(17,"h3"),r.vc(18,"\u66f4\u591a Content"),r.Rb(),r.Sb(19,"p"),r.vc(20,"\u5c55\u793a\u591a\u884c\u6587\u672c\u6216\u8005\u662f\u8bbe\u7f6e\u6587\u672c\u5185\u5bb9\u7684\u683c\u5f0f"),r.Rb(),r.Sb(21,"app-demo",1),r.Nb(22,"nel-demo-tooltip-content",2),r.Rb(),r.Sb(23,"h3"),r.vc(24,"\u9ad8\u7ea7\u6269\u5c55"),r.Rb(),r.Sb(25,"p"),r.vc(26,"\u5982\u679c\u9700\u8981\u5173\u95ed tooltip \u529f\u80fd\uff0cnelDisabled \u5c5e\u6027\u53ef\u4ee5\u6ee1\u8db3\u8fd9\u4e2a\u9700\u6c42\uff0c\u5b83\u63a5\u53d7\u4e00\u4e2aBoolean\uff0c\u8bbe\u7f6e\u4e3atrue\u5373\u53ef\u3002"),r.Rb(),r.Sb(27,"app-demo",1),r.Nb(28,"nel-demo-tooltip-disabled",2),r.Rb(),r.Nb(29,"app-doc",4)),2&t&&(r.zb(9),r.ic("codeUrl","components-tooltip-demo-basic.component"),r.zb(6),r.ic("codeUrl","components-tooltip-demo-effect.component"),r.zb(6),r.ic("codeUrl","components-tooltip-demo-content.component"),r.zb(6),r.ic("codeUrl","components-tooltip-demo-disabled.component"),r.zb(2),r.ic("docUrl","components-tooltip"))},directives:[h.a,g.a,y,x,C,P,S.a],encapsulation:2}),t})()}];let Y=(()=>{class t{}return t.\u0275fac=function(e){return new(e||t)},t.\u0275mod=r.Kb({type:t}),t.\u0275inj=r.Jb({imports:[[v.e.forChild(X)],v.e]}),t})(),k=(()=>{class t{}return t.\u0275fac=function(e){return new(e||t)},t.\u0275mod=r.Kb({type:t}),t.\u0275inj=r.Jb({imports:[[m,u.a,Y]]}),t})()}}]);