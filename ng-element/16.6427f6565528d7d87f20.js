(window.webpackJsonp=window.webpackJsonp||[]).push([[16],{"6qls":function(e,n,t){"use strict";t.d(n,"a",function(){return i});var c=t("fXoL"),o=t("F5nt"),a=t("dran");let i=(()=>{class e{constructor(e){this.appService=e,this.docUrl="",this.doc=""}ngOnInit(){this.appService.getDoc(this.docUrl).subscribe(e=>{this.doc=e})}}return e.\u0275fac=function(n){return new(n||e)(c.Mb(o.a))},e.\u0275cmp=c.Gb({type:e,selectors:[["app-doc"]],inputs:{docUrl:"docUrl"},decls:2,vars:3,consts:[[1,"marked",3,"innerHTML"]],template:function(e,n){1&e&&(c.Nb(0,"div",0),c.ec(1,"marked")),2&e&&c.ic("innerHTML",c.fc(1,1,n.doc),c.oc)},pipes:[a.a],styles:[".marked h3{margin:55px 0 20px;font-weight:400;color:#1f2f3d;font-size:22px}.marked table{border-collapse:collapse;width:100%;background-color:#fff;font-size:14px;margin-bottom:45px;line-height:1.5em}.marked table td:first-child,.marked table th:first-child{padding-left:10px}.marked table th{text-align:left;white-space:nowrap;color:#909399;font-weight:400}.marked table td,.marked table th{border-bottom:1px solid #dcdfe6;padding:15px;max-width:250px}.marked table td{color:#606266}"],encapsulation:2}),e})()},QJGT:function(e,n,t){"use strict";t.d(n,"a",function(){return l});var c=t("fXoL"),o=t("ofXK"),a=t("UXJo"),i=t("pIld");function r(e,n){if(1&e){const e=c.Tb();c.Qb(0),c.Sb(1,"div",1),c.Sb(2,"pre",2),c.Nb(3,"code",3),c.ec(4,"highlightAuto"),c.Rb(),c.Sb(5,"i",4),c.Zb("click",function(n){return c.nc(e),c.dc().copy(n)}),c.Rb(),c.Rb(),c.Pb()}if(2&e){const e=c.dc();c.zb(3),c.ic("innerHTML",c.fc(4,2,e.code),c.oc),c.zb(2),c.ic("cdkCopyToClipboard",e.code)}}let l=(()=>{class e{copy(e){e.stopPropagation()}}return e.\u0275fac=function(n){return new(n||e)},e.\u0275cmp=c.Gb({type:e,selectors:[["app-code"]],inputs:{code:"code"},decls:1,vars:1,consts:[[4,"ngIf"],[1,"highlight"],[1,"language-ts"],[1,"hljs",3,"innerHTML"],[1,"el-icon-copy-document",3,"cdkCopyToClipboard","click"]],template:function(e,n){1&e&&c.tc(0,r,6,4,"ng-container",0),2&e&&c.ic("ngIf",n.code)},directives:[o.i,a.a],pipes:[i.a],styles:["pre[class*=language-][_ngcontent-%COMP%]{background:#f6f6f6;margin:16px 0;padding:12px 20px;overflow:auto}.highlight[_ngcontent-%COMP%]{position:relative}i[_ngcontent-%COMP%]{position:absolute;top:12px;right:10px;font-size:24px;color:#b0bec5;cursor:pointer}i[_ngcontent-%COMP%]:hover{color:#6e6e6e}"]}),e})()},TxFU:function(e,n,t){"use strict";t.r(n),t.d(n,"AvatarModule",function(){return I});var c=t("ofXK"),o=t("fXoL"),a=t("NtrV");function i(e,n){if(1&e&&o.Nb(0,"i",3),2&e){const e=o.dc();o.ic("nelType",e.nelIcon)}}function r(e,n){if(1&e&&o.Nb(0,"img",4),2&e){const e=o.dc();o.sc("object-fit",e.nelFit),o.ic("src",e.src,o.pc)("alt",e.nelAlt)}}function l(e,n){if(1&e&&(o.Qb(0),o.vc(1),o.Pb()),2&e){const e=o.dc();o.zb(1),o.wc(e.nelText)}}function s(e,n){1&e&&o.gc(0,0,["*ngIf","!loading"])}const b=["*"];let d=(()=>{class e{constructor(){this.size="large",this.loading=!1,this.nelShape="circle",this.nelFit="cover",this.nelOnError=new o.n}set nelSize(e){"number"==typeof e?(this.sizeNum=e,this.size=void 0):(this.sizeNum=void 0,this.size=e)}set nelSrc(e){this.loading=!0;const n=new Image;n.src=e,n.onload=n=>{this.src=e,this.loading=!1},n.onerror=e=>{e instanceof Event&&(e.preventDefault(),e.stopPropagation()),this.nelOnError.emit(e),this.loading=!1}}}return e.\u0275fac=function(n){return new(n||e)},e.\u0275cmp=o.Gb({type:e,selectors:[["nel-avatar"]],inputs:{nelIcon:"nelIcon",nelSize:"nelSize",nelText:"nelText",nelShape:"nelShape",nelSrc:"nelSrc",nelAlt:"nelAlt",nelFit:"nelFit"},outputs:{nelOnError:"nelOnError"},ngContentSelectors:b,decls:5,vars:21,consts:[["nel-icon","",3,"nelType",4,"ngIf"],[3,"src","object-fit","alt",4,"ngIf"],[4,"ngIf"],["nel-icon","",3,"nelType"],[3,"src","alt"]],template:function(e,n){1&e&&(o.hc(),o.Sb(0,"span"),o.tc(1,i,1,1,"i",0),o.tc(2,r,1,4,"img",1),o.tc(3,l,2,1,"ng-container",2),o.tc(4,s,1,0,"ng-content",2),o.Rb()),2&e&&(o.Cb("el-avatar el-avatar--",n.nelShape,""),o.sc("height",n.sizeNum+"px")("width",n.sizeNum+"px")("line-height",n.sizeNum+"px"),o.Eb("el-avatar--large","large"==n.size)("el-avatar--medium","medium"==n.size)("el-avatar--small","small"==n.size)("el-avatar--icon",n.nelIcon),o.zb(1),o.ic("ngIf",n.nelIcon),o.zb(1),o.ic("ngIf",n.src),o.zb(1),o.ic("ngIf",n.nelText),o.zb(1),o.ic("ngIf",!n.loading))},directives:[c.i,a.a],encapsulation:2}),e})();var p=t("aA8y");let m=(()=>{class e{}return e.\u0275fac=function(n){return new(n||e)},e.\u0275mod=o.Kb({type:e}),e.\u0275inj=o.Jb({imports:[[c.b,p.a]]}),e})();var f=t("+uaU");let u=(()=>{class e{}return e.\u0275fac=function(n){return new(n||e)},e.\u0275mod=o.Kb({type:e}),e.\u0275inj=o.Jb({imports:[[c.b,m,f.a]]}),e})();var g=t("PCNd"),v=t("tyNb"),h=t("QJGT"),S=t("rvuC"),z=t("1LLI"),x=t("QInx");function O(e,n){if(1&e&&(o.Sb(0,"div",4),o.Nb(1,"nel-avatar",5),o.Rb()),2&e){const e=n.$implicit,t=o.dc();o.zb(1),o.ic("nelSize",e)("nelSrc",t.circleUrl)}}function C(e,n){if(1&e&&(o.Sb(0,"div",4),o.Nb(1,"nel-avatar",7),o.Rb()),2&e){const e=n.$implicit,t=o.dc();o.zb(1),o.ic("nelShape","square")("nelSize",e)("nelSrc",t.squareUrl)}}let y=(()=>{class e{constructor(){this.circleUrl="https://cube.elemecdn.com/3/7c/3ea6beec64369c2642b92c6726f1epng.png",this.squareUrl="https://cube.elemecdn.com/9/c2/f0ee8a3c7c9638a54940382568c9dpng.png",this.sizeList=["large","medium","small"]}}return e.\u0275fac=function(n){return new(n||e)},e.\u0275cmp=o.Gb({type:e,selectors:[["nel-demo-avatar-basic"]],decls:15,vars:9,consts:[["nel-row","",1,"demo-avatar","demo-basic"],["nel-col","",3,"nelSpan"],[1,"sub-title"],[1,"demo-basic--circle"],[1,"block"],[3,"nelSize","nelSrc"],["class","block",4,"ngFor","ngForOf"],[3,"nelShape","nelSize","nelSrc"]],template:function(e,n){1&e&&(o.Sb(0,"div",0),o.Sb(1,"div",1),o.Sb(2,"div",2),o.vc(3,"circle"),o.Rb(),o.Sb(4,"div",3),o.Sb(5,"div",4),o.Nb(6,"nel-avatar",5),o.Rb(),o.tc(7,O,2,2,"div",6),o.Rb(),o.Rb(),o.Sb(8,"div",1),o.Sb(9,"div",2),o.vc(10,"square"),o.Rb(),o.Sb(11,"div",3),o.Sb(12,"div",4),o.Nb(13,"nel-avatar",7),o.Rb(),o.tc(14,C,2,3,"div",6),o.Rb(),o.Rb(),o.Rb()),2&e&&(o.zb(1),o.ic("nelSpan",12),o.zb(5),o.ic("nelSize",50)("nelSrc",n.circleUrl),o.zb(1),o.ic("ngForOf",n.sizeList),o.zb(1),o.ic("nelSpan",12),o.zb(5),o.ic("nelShape","square")("nelSize",50)("nelSrc",n.squareUrl),o.zb(1),o.ic("ngForOf",n.sizeList))},directives:[z.a,x.a,d,c.h],styles:[".demo-avatar.demo-basic[_ngcontent-%COMP%] {\n        text-align: center;\n      }\n\n      .demo-avatar[_ngcontent-%COMP%]   .el-col[_ngcontent-%COMP%]:not(:last-child) {\n        border-right: 1px solid rgba(224,230,237,.5);\n      }\n\n      .demo-avatar[_ngcontent-%COMP%]   .sub-title[_ngcontent-%COMP%] {\n        margin-bottom: 10px;\n        font-size: 14px;\n        color: #8492a6;\n      }\n\n      .demo-avatar.demo-basic[_ngcontent-%COMP%]   .demo-basic--circle[_ngcontent-%COMP%], .demo-avatar.demo-basic[_ngcontent-%COMP%]   .demo-basic--square[_ngcontent-%COMP%] {\n        display: flex;\n        justify-content: space-between;\n        align-items: center;\n      }\n\n      .demo-avatar.demo-basic[_ngcontent-%COMP%]   .demo-basic--circle[_ngcontent-%COMP%]   .block[_ngcontent-%COMP%]:not(:last-child), .demo-avatar.demo-basic[_ngcontent-%COMP%]   .demo-basic--square[_ngcontent-%COMP%]   .block[_ngcontent-%COMP%]:not(:last-child) {\n        border-right: 1px solid rgba(224,230,237,.5);\n      }\n\n      .demo-avatar.demo-basic[_ngcontent-%COMP%]   .demo-basic--circle[_ngcontent-%COMP%]   .block[_ngcontent-%COMP%], .demo-avatar.demo-basic[_ngcontent-%COMP%]   .demo-basic--square[_ngcontent-%COMP%]   .block[_ngcontent-%COMP%] {\n        flex: 1;\n      }"]}),e})(),M=(()=>{class e{}return e.\u0275fac=function(n){return new(n||e)},e.\u0275cmp=o.Gb({type:e,selectors:[["nel-demo-avatar-type"]],decls:7,vars:3,consts:[[1,"demo-type"],[3,"nelIcon"],[3,"nelSrc"],[3,"nelText"]],template:function(e,n){1&e&&(o.Sb(0,"div",0),o.Sb(1,"div"),o.Nb(2,"nel-avatar",1),o.Rb(),o.Sb(3,"div"),o.Nb(4,"nel-avatar",2),o.Rb(),o.Sb(5,"div"),o.Nb(6,"nel-avatar",3),o.Rb(),o.Rb()),2&e&&(o.zb(2),o.ic("nelIcon","user-solid"),o.zb(2),o.ic("nelSrc","https://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png"),o.zb(2),o.ic("nelText","user"))},directives:[d],styles:[".demo-type[_ngcontent-%COMP%] {\n        display: flex;\n      }\n\n      .demo-type[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]:not(:last-child) {\n        border-right: 1px solid rgba(224,230,237,.5);\n      }\n\n      .demo-type[_ngcontent-%COMP%] > div[_ngcontent-%COMP%] {\n        flex: 1;\n        text-align: center;\n      }"]}),e})(),P=(()=>{class e{errorHandler(){return!0}}return e.\u0275fac=function(n){return new(n||e)},e.\u0275cmp=o.Gb({type:e,selectors:[["nel-demo-avatar-error"]],decls:3,vars:2,consts:[[1,"demo-type"],[3,"nelSize","nelSrc","onError"],["src","https://cube.elemecdn.com/e/fd/0fc7d20532fdaf769a25683617711png.png"]],template:function(e,n){1&e&&(o.Sb(0,"div",0),o.Sb(1,"nel-avatar",1),o.Zb("onError",function(){return n.errorHandler()}),o.Nb(2,"img",2),o.Rb(),o.Rb()),2&e&&(o.zb(1),o.ic("nelSize",60)("nelSrc","https://empty"))},directives:[d],encapsulation:2}),e})();function R(e,n){if(1&e&&(o.Sb(0,"div",2),o.Sb(1,"span",3),o.vc(2),o.Rb(),o.Nb(3,"nel-avatar",4),o.Rb()),2&e){const e=n.$implicit,t=o.dc();o.zb(2),o.wc(e),o.zb(1),o.ic("nelShape","square")("nelSize",100)("nelFit",e)("nelSrc",t.url)}}let w=(()=>{class e{constructor(){this.fits=["fill","contain","cover","none","scale-down"],this.url="https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg"}}return e.\u0275fac=function(n){return new(n||e)},e.\u0275cmp=o.Gb({type:e,selectors:[["nel-demo-avatar-fit"]],decls:2,vars:1,consts:[[1,"demo-fit"],["class","block",4,"ngFor","ngForOf"],[1,"block"],[1,"title"],[3,"nelShape","nelSize","nelFit","nelSrc"]],template:function(e,n){1&e&&(o.Sb(0,"div",0),o.tc(1,R,4,5,"div",1),o.Rb()),2&e&&(o.zb(1),o.ic("ngForOf",n.fits))},directives:[c.h,d],styles:[".demo-fit[_ngcontent-%COMP%] {\n        display: flex;\n        text-align: center;\n        justify-content: space-between;\n      }\n\n      .demo-fit[_ngcontent-%COMP%]   .block[_ngcontent-%COMP%] {\n        flex: 1;\n        display: flex;\n        flex-direction: column;\n        flex-grow: 0;\n      }\n\n      .demo-fit[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%] {\n        margin-bottom: 10px;\n        font-size: 14px;\n        color: #8492a6;\n      }"]}),e})();var _=t("6qls");const k=[{path:"",component:(()=>{class e{}return e.\u0275fac=function(n){return new(n||e)},e.\u0275cmp=o.Gb({type:e,selectors:[["app-avatar"]],decls:30,vars:5,consts:[["code","import { NelAvatarModule } from 'ng-element-ui/avatar';"],[3,"codeUrl"],["demo",""],[3,"docUrl"]],template:function(e,n){1&e&&(o.Sb(0,"h2"),o.vc(1,"Avatar \u5934\u50cf"),o.Rb(),o.Sb(2,"p"),o.vc(3,"\u7528\u56fe\u6807\u3001\u56fe\u7247\u6216\u8005\u5b57\u7b26\u7684\u5f62\u5f0f\u5c55\u793a\u7528\u6237\u6216\u4e8b\u7269\u4fe1\u606f\u3002"),o.Rb(),o.Nb(4,"app-code",0),o.Sb(5,"h3"),o.vc(6,"\u57fa\u672c\u7528\u6cd5"),o.Rb(),o.Sb(7,"p"),o.vc(8,"\u901a\u8fc7 nelShape \u548c nelSize \u8bbe\u7f6e\u5934\u50cf\u7684\u5f62\u72b6\u548c\u5927\u5c0f\u3002"),o.Rb(),o.Sb(9,"app-demo",1),o.Nb(10,"nel-demo-avatar-basic",2),o.Rb(),o.Sb(11,"h3"),o.vc(12,"\u5c55\u793a\u7c7b\u578b"),o.Rb(),o.Sb(13,"p"),o.vc(14,"\u652f\u6301\u4e09\u79cd\u7c7b\u578b\uff1a\u56fe\u6807\u3001\u56fe\u7247\u548c\u5b57\u7b26"),o.Rb(),o.Sb(15,"app-demo",1),o.Nb(16,"nel-demo-avatar-type",2),o.Rb(),o.Sb(17,"h3"),o.vc(18,"\u56fe\u7247\u52a0\u8f7d\u5931\u8d25\u7684 fallback \u884c\u4e3a"),o.Rb(),o.Sb(19,"p"),o.vc(20,"\u5f53\u5c55\u793a\u7c7b\u578b\u4e3a\u56fe\u7247\u7684\u65f6\u5019\uff0c\u56fe\u7247\u52a0\u8f7d\u5931\u8d25\u7684 fallback \u884c\u4e3a"),o.Rb(),o.Sb(21,"app-demo",1),o.Nb(22,"nel-demo-avatar-error",2),o.Rb(),o.Sb(23,"h3"),o.vc(24,"\u56fe\u7247\u5982\u4f55\u9002\u5e94\u5bb9\u5668\u6846"),o.Rb(),o.Sb(25,"p"),o.vc(26,"\u5f53\u5c55\u793a\u7c7b\u578b\u4e3a\u56fe\u7247\u7684\u65f6\u5019\uff0c\u4f7f\u7528 nelFit \u5c5e\u6027\u5b9a\u4e49\u56fe\u7247\u5982\u4f55\u9002\u5e94\u5bb9\u5668\u6846\uff0c\u540c\u539f\u751f object-fit\u3002"),o.Rb(),o.Sb(27,"app-demo",1),o.Nb(28,"nel-demo-avatar-fit",2),o.Rb(),o.Nb(29,"app-doc",3)),2&e&&(o.zb(9),o.ic("codeUrl","components-avatar-demo-basic.component"),o.zb(6),o.ic("codeUrl","components-avatar-demo-type.component"),o.zb(6),o.ic("codeUrl","components-avatar-demo-error.component"),o.zb(6),o.ic("codeUrl","components-avatar-demo-fit.component"),o.zb(2),o.ic("docUrl","components-avatar"))},directives:[h.a,S.a,y,M,P,w,_.a],encapsulation:2}),e})()}];let N=(()=>{class e{}return e.\u0275fac=function(n){return new(n||e)},e.\u0275mod=o.Kb({type:e}),e.\u0275inj=o.Jb({imports:[[v.e.forChild(k)],v.e]}),e})(),I=(()=>{class e{}return e.\u0275fac=function(n){return new(n||e)},e.\u0275mod=o.Kb({type:e}),e.\u0275inj=o.Jb({imports:[[u,g.a,N]]}),e})()}}]);