(window.webpackJsonp=window.webpackJsonp||[]).push([[44],{"6qls":function(e,n,t){"use strict";t.d(n,"a",function(){return c});var i=t("fXoL"),o=t("F5nt"),l=t("dran");let c=(()=>{class e{constructor(e){this.appService=e,this.docUrl="",this.doc=""}ngOnInit(){this.appService.getDoc(this.docUrl).subscribe(e=>{this.doc=e})}}return e.\u0275fac=function(n){return new(n||e)(i.Mb(o.a))},e.\u0275cmp=i.Gb({type:e,selectors:[["app-doc"]],inputs:{docUrl:"docUrl"},decls:2,vars:3,consts:[[1,"marked",3,"innerHTML"]],template:function(e,n){1&e&&(i.Nb(0,"div",0),i.ec(1,"marked")),2&e&&i.ic("innerHTML",i.fc(1,1,n.doc),i.pc)},pipes:[l.a],styles:[".marked{font-size:14px;line-height:2}.marked h3{margin:55px 0 20px;font-weight:400;color:#1f2f3d;font-size:22px}.marked table{border-collapse:collapse;width:100%;background-color:#fff;font-size:14px;margin-bottom:45px;line-height:1.5em}.marked table td:first-child,.marked table th:first-child{padding-left:10px}.marked table th{text-align:left;white-space:nowrap;color:#909399;font-weight:400}.marked table td,.marked table th{border-bottom:1px solid #dcdfe6;padding:15px;max-width:250px}.marked table td{color:#606266}.marked ul{margin:0;padding:0}.marked ul>li{margin-left:20px;padding-left:4px;list-style-type:circle}.marked code{margin:0 1px;padding:.2em .4em;background:#f2f4f5;border:1px solid #f0f0f0;border-radius:3px}"],encapsulation:2}),e})()},AtJZ:function(e,n,t){"use strict";t.r(n),t.d(n,"SkeletonModule",function(){return K});var i=t("mrSG"),o=t("O7xw"),l=t("XNiG"),c=t("fXoL"),a=t("ofXK"),s=t("72Au");function r(e,n){1&e&&c.gc(0,0,["*ngIf","!loading; else loadingTpl"])}function p(e,n){if(1&e&&(c.Qb(0),c.wc(1),c.Pb()),2&e){const e=c.dc(3);c.zb(1),c.xc(e.nelTemplate)}}function d(e,n){if(1&e&&(c.Qb(0),c.uc(1,p,2,1,"ng-container",3),c.Pb()),2&e){const e=c.dc(2);c.zb(1),c.ic("stringTemplate",e.nelTemplate)}}function b(e,n){if(1&e&&c.Nb(0,"div",5),2&e){const e=n.first,t=n.last;c.Eb("is-first",e)("is-last",t)("el-skeleton__paragraph",!e)}}function m(e,n){if(1&e&&c.uc(0,b,1,6,"div",4),2&e){const e=c.dc(2);c.ic("ngForOf",e.rowList)}}function g(e,n){if(1&e&&(c.uc(0,d,2,1,"ng-container",0),c.uc(1,m,1,1,"ng-template",null,2,c.vc)),2&e){const e=c.nc(2),n=c.dc();c.ic("ngIf",n.nelTemplate)("ngIfElse",e)}}const u=["*"];let f=(()=>{class e{constructor(){this.rowList=[0,1,2,3],this.nelAnimated=!1,this.nelThrottle=0,this.loading=!0,this.changeLoading$=new l.a}set nelRows(e){const n=[];for(let t=0;t<=e;t++)n.push(t);this.rowList=n}set nelLoading(e){e?this.nelThrottle?this.timeoutHandle=setTimeout(()=>{this.loading=e},this.nelThrottle):this.loading=e:(this.loading=e,this.timeoutHandle&&clearTimeout(this.timeoutHandle))}ngOnDestroy(){this.timeoutHandle&&clearTimeout(this.timeoutHandle)}}return e.\u0275fac=function(n){return new(n||e)},e.\u0275cmp=c.Gb({type:e,selectors:[["nel-skeleton"]],hostAttrs:[1,"el-skeleton"],hostVars:2,hostBindings:function(e,n){2&e&&c.Eb("is-animated",n.nelAnimated)},inputs:{nelRows:"nelRows",nelAnimated:"nelAnimated",nelTemplate:"nelTemplate",nelLoading:"nelLoading",nelThrottle:"nelThrottle"},ngContentSelectors:u,decls:3,vars:2,consts:[[4,"ngIf","ngIfElse"],["loadingTpl",""],["defaultTpl",""],[4,"stringTemplate"],["class","el-skeleton__item el-skeleton__p",3,"is-first","is-last","el-skeleton__paragraph",4,"ngFor","ngForOf"],[1,"el-skeleton__item","el-skeleton__p"]],template:function(e,n){if(1&e&&(c.hc(),c.uc(0,r,1,0,"ng-content",0),c.uc(1,g,3,2,"ng-template",null,1,c.vc)),2&e){const e=c.nc(2);c.ic("ngIf",!n.loading)("ngIfElse",e)}},directives:[a.i,s.a,a.h],encapsulation:2}),Object(i.a)([Object(o.a)()],e.prototype,"nelAnimated",void 0),e})();function h(e,n){1&e&&(c.cc(),c.Sb(0,"svg",1),c.Nb(1,"path",2),c.Rb())}let w=(()=>{class e{constructor(){this.nelVariant="text"}}return e.\u0275fac=function(n){return new(n||e)},e.\u0275cmp=c.Gb({type:e,selectors:[["nel-skeleton-item"]],hostAttrs:[1,"el-skeleton__item"],hostVars:18,hostBindings:function(e,n){2&e&&c.Eb("el-skeleton__p","p"==n.nelVariant)("el-skeleton__text","text"==n.nelVariant)("el-skeleton__h1","h1"==n.nelVariant)("el-skeleton__h3","h3"==n.nelVariant)("el-skeleton__caption","caption"==n.nelVariant)("el-skeleton__button","button"==n.nelVariant)("el-skeleton__image","image"==n.nelVariant)("el-skeleton__circle","circle"==n.nelVariant)("el-skeleton__rect","rect"==n.nelVariant)},inputs:{nelVariant:"nelVariant"},decls:1,vars:1,consts:[["viewBox","0 0 1024 1024","xmlns","http://www.w3.org/2000/svg",4,"ngIf"],["viewBox","0 0 1024 1024","xmlns","http://www.w3.org/2000/svg"],["d","M64 896V128h896v768H64z m64-128l192-192 116.352 116.352L640 448l256 307.2V192H128v576z m224-480a96 96 0 1 1-0.064 192.064A96 96 0 0 1 352 288z"]],template:function(e,n){1&e&&c.uc(0,h,2,0,"svg",0),2&e&&c.ic("ngIf","image"==n.nelVariant)},directives:[a.i],encapsulation:2}),e})();var k=t("j9Rq");let x=(()=>{class e{}return e.\u0275fac=function(n){return new(n||e)},e.\u0275mod=c.Kb({type:e}),e.\u0275inj=c.Jb({imports:[[a.b,k.a]]}),e})();var v=t("B6x6"),S=t("PZSR"),R=t("ackU");let y=(()=>{class e{}return e.\u0275fac=function(n){return new(n||e)},e.\u0275mod=c.Kb({type:e}),e.\u0275inj=c.Jb({imports:[[x,v.a,S.a,R.b]]}),e})();var _=t("PCNd"),T=t("tyNb"),V=t("QJGT"),z=t("rvuC");let N=(()=>{class e{}return e.\u0275fac=function(n){return new(n||e)},e.\u0275cmp=c.Gb({type:e,selectors:[["nel-demo-skeleton-basic"]],decls:1,vars:0,template:function(e,n){1&e&&c.Nb(0,"nel-skeleton")},directives:[f],encapsulation:2}),e})(),C=(()=>{class e{}return e.\u0275fac=function(n){return new(n||e)},e.\u0275cmp=c.Gb({type:e,selectors:[["nel-demo-skeleton-rows"]],decls:1,vars:1,consts:[[3,"nelRows"]],template:function(e,n){1&e&&c.Nb(0,"nel-skeleton",0),2&e&&c.ic("nelRows",5)},directives:[f],encapsulation:2}),e})(),L=(()=>{class e{}return e.\u0275fac=function(n){return new(n||e)},e.\u0275cmp=c.Gb({type:e,selectors:[["nel-demo-skeleton-animated"]],decls:1,vars:1,consts:[["nelAnimated","",3,"nelRows"]],template:function(e,n){1&e&&c.Nb(0,"nel-skeleton",0),2&e&&c.ic("nelRows",5)},directives:[f],encapsulation:2}),e})();function M(e,n){1&e&&(c.Nb(0,"nel-skeleton-item",2),c.Sb(1,"div",3),c.Nb(2,"nel-skeleton-item",4),c.Sb(3,"div",5),c.Nb(4,"nel-skeleton-item",6),c.Nb(5,"nel-skeleton-item",7),c.Rb(),c.Rb()),2&e&&(c.ic("nelVariant","image"),c.zb(2),c.ic("nelVariant","p"),c.zb(2),c.ic("nelVariant","text"),c.zb(1),c.ic("nelVariant","text"))}let O=(()=>{class e{}return e.\u0275fac=function(n){return new(n||e)},e.\u0275cmp=c.Gb({type:e,selectors:[["nel-demo-skeleton-template"]],decls:3,vars:1,consts:[[2,"width","240px",3,"nelTemplate"],["template",""],[2,"width","240px","height","240px",3,"nelVariant"],[2,"padding","14px"],[2,"width","50%",3,"nelVariant"],[2,"display","flex","align-items","center","justify-items","space-between"],[2,"margin-right","16px",3,"nelVariant"],[2,"width","30%",3,"nelVariant"]],template:function(e,n){if(1&e&&(c.Sb(0,"nel-skeleton",0),c.uc(1,M,6,4,"ng-template",null,1,c.vc),c.Rb()),2&e){const e=c.nc(2);c.ic("nelTemplate",e)}},directives:[f,w],encapsulation:2}),e})();var A=t("r7cJ"),P=t("Jsda"),U=t("X2/8");function j(e,n){1&e&&(c.Nb(0,"nel-skeleton-item",11),c.Sb(1,"div",7),c.Nb(2,"nel-skeleton-item",12),c.Sb(3,"div",13),c.Nb(4,"nel-skeleton-item",14),c.Nb(5,"nel-skeleton-item",15),c.Rb(),c.Rb()),2&e&&(c.ic("nelVariant","image"),c.zb(2),c.ic("nelVariant","h3"),c.zb(2),c.ic("nelVariant","text"),c.zb(1),c.ic("nelVariant","text"))}const G=function(){return{padding:"0px",marginBottom:"1px"}};let I=(()=>{class e{constructor(){this.loading=!0}}return e.\u0275fac=function(n){return new(n||e)},e.\u0275cmp=c.Gb({type:e,selectors:[["nel-demo-skeleton-loading"]],decls:17,vars:8,consts:[[3,"nelDirection","nelAlignment"],[3,"click"],[2,"margin-right","16px"],["nelAnimated","",2,"width","240px",3,"nelLoading","nelTemplate"],["template",""],[3,"nelBodyStyle"],["src","https://shadow.elemecdn.com/app/element/hamburger.9cf7b091-55e9-11e9-a976-7f4d0b07eef6.png",1,"image"],[2,"padding","14px"],[1,"bottom","card-header"],[1,"time"],["nel-button","",1,"button",3,"nelType"],[2,"width","240px","height","240px",3,"nelVariant"],[2,"width","50%",3,"nelVariant"],[2,"display","flex","align-items","center","justify-items","space-between","margin-top","16px","height","16px"],[2,"margin-right","16px",3,"nelVariant"],[2,"width","30%",3,"nelVariant"]],template:function(e,n){if(1&e&&(c.Sb(0,"nel-space",0),c.Sb(1,"div",1),c.Zb("click",function(){return n.loading=!n.loading}),c.Sb(2,"label",2),c.wc(3),c.Rb(),c.Rb(),c.Sb(4,"nel-skeleton",3),c.uc(5,j,6,4,"ng-template",null,4,c.vc),c.Sb(7,"nel-card",5),c.Nb(8,"img",6),c.Sb(9,"div",7),c.Sb(10,"span"),c.wc(11,"\u597d\u5403\u7684\u6c49\u5821"),c.Rb(),c.Sb(12,"div",8),c.Sb(13,"span",9),c.wc(14,"2020-20-20"),c.Rb(),c.Sb(15,"button",10),c.wc(16,"\u64cd\u4f5c\u6309\u94ae"),c.Rb(),c.Rb(),c.Rb(),c.Rb(),c.Rb(),c.Rb()),2&e){const e=c.nc(6);c.ic("nelDirection","vertical")("nelAlignment","flex-start"),c.zb(3),c.yc("\u5207\u6362 Loading ",n.loading,""),c.zb(1),c.ic("nelLoading",n.loading)("nelTemplate",e),c.zb(3),c.ic("nelBodyStyle",c.jc(7,G)),c.zb(8),c.ic("nelType","text")}},directives:[A.a,f,P.a,U.a,w],styles:[".time[_ngcontent-%COMP%] {\n        font-size: 13px;\n        color: #999;\n      }\n\n      .bottom[_ngcontent-%COMP%] {\n        margin-top: 13px;\n        line-height: 12px;\n        display: flex;\n        justify-content: space-between;\n        align-items: center;\n      }\n\n      .button[_ngcontent-%COMP%] {\n        padding: 0;\n        min-height: auto;\n      }\n\n      .image[_ngcontent-%COMP%] {\n        width: 100%;\n        display: block;\n      }"]}),e})();function J(e,n){1&e&&(c.Nb(0,"nel-skeleton-item",11),c.Sb(1,"div",7),c.Nb(2,"nel-skeleton-item",12),c.Sb(3,"div",13),c.Nb(4,"nel-skeleton-item",14),c.Nb(5,"nel-skeleton-item",15),c.Rb(),c.Rb()),2&e&&(c.ic("nelVariant","image"),c.zb(2),c.ic("nelVariant","h3"),c.zb(2),c.ic("nelVariant","text"),c.zb(1),c.ic("nelVariant","text"))}const B=function(){return{padding:"0px",marginBottom:"1px"}};let H=(()=>{class e{constructor(){this.loading=!1}}return e.\u0275fac=function(n){return new(n||e)},e.\u0275cmp=c.Gb({type:e,selectors:[["nel-demo-skeleton-throttle"]],decls:17,vars:9,consts:[[3,"nelDirection","nelAlignment"],[3,"click"],[2,"margin-right","16px"],["nelAnimated","",2,"width","240px",3,"nelLoading","nelTemplate","nelThrottle"],["template",""],[3,"nelBodyStyle"],["src","https://shadow.elemecdn.com/app/element/hamburger.9cf7b091-55e9-11e9-a976-7f4d0b07eef6.png",1,"image"],[2,"padding","14px"],[1,"bottom","card-header"],[1,"time"],["nel-button","",1,"button",3,"nelType"],[2,"width","240px","height","240px",3,"nelVariant"],[2,"width","50%",3,"nelVariant"],[2,"display","flex","align-items","center","justify-items","space-between","margin-top","16px","height","16px"],[2,"margin-right","16px",3,"nelVariant"],[2,"width","30%",3,"nelVariant"]],template:function(e,n){if(1&e&&(c.Sb(0,"nel-space",0),c.Sb(1,"div",1),c.Zb("click",function(){return n.loading=!n.loading}),c.Sb(2,"label",2),c.wc(3),c.Rb(),c.Rb(),c.Sb(4,"nel-skeleton",3),c.uc(5,J,6,4,"ng-template",null,4,c.vc),c.Sb(7,"nel-card",5),c.Nb(8,"img",6),c.Sb(9,"div",7),c.Sb(10,"span"),c.wc(11,"\u597d\u5403\u7684\u6c49\u5821"),c.Rb(),c.Sb(12,"div",8),c.Sb(13,"span",9),c.wc(14,"2020-20-20"),c.Rb(),c.Sb(15,"button",10),c.wc(16,"\u64cd\u4f5c\u6309\u94ae"),c.Rb(),c.Rb(),c.Rb(),c.Rb(),c.Rb(),c.Rb()),2&e){const e=c.nc(6);c.ic("nelDirection","vertical")("nelAlignment","flex-start"),c.zb(3),c.yc("\u5207\u6362 Loading ",n.loading,""),c.zb(1),c.ic("nelLoading",n.loading)("nelTemplate",e)("nelThrottle",500),c.zb(3),c.ic("nelBodyStyle",c.jc(8,B)),c.zb(8),c.ic("nelType","text")}},directives:[A.a,f,P.a,U.a,w],styles:[".time[_ngcontent-%COMP%] {\n        font-size: 13px;\n        color: #999;\n      }\n\n      .bottom[_ngcontent-%COMP%] {\n        margin-top: 13px;\n        line-height: 12px;\n        display: flex;\n        justify-content: space-between;\n        align-items: center;\n      }\n\n      .button[_ngcontent-%COMP%] {\n        padding: 0;\n        min-height: auto;\n      }\n\n      .image[_ngcontent-%COMP%] {\n        width: 100%;\n        display: block;\n      }"]}),e})();var X=t("6qls");const D=[{path:"",component:(()=>{class e{}return e.\u0275fac=function(n){return new(n||e)},e.\u0275cmp=c.Gb({type:e,selectors:[["app-skeleton"]],decls:40,vars:7,consts:[["code","import { NelSkeletonModule } from 'ng-element-ui/skeleton';"],[3,"codeUrl"],["demo",""],[3,"docUrl"]],template:function(e,n){1&e&&(c.Sb(0,"h2"),c.wc(1,"Skeleton \u9aa8\u67b6\u5c4f"),c.Rb(),c.Sb(2,"p"),c.wc(3,"\u5728\u9700\u8981\u7b49\u5f85\u52a0\u8f7d\u5185\u5bb9\u7684\u4f4d\u7f6e\u8bbe\u7f6e\u4e00\u4e2a\u9aa8\u67b6\u5c4f\uff0c\u67d0\u4e9b\u573a\u666f\u4e0b\u6bd4 Loading \u7684\u89c6\u89c9\u6548\u679c\u66f4\u597d\u3002"),c.Rb(),c.Nb(4,"app-code",0),c.Sb(5,"h3"),c.wc(6,"\u57fa\u7840\u7528\u6cd5"),c.Rb(),c.Sb(7,"p"),c.wc(8,"\u57fa\u7840\u7684\u9aa8\u67b6\u6548\u679c\u3002"),c.Rb(),c.Sb(9,"app-demo",1),c.Nb(10,"nel-demo-skeleton-basic",2),c.Rb(),c.Sb(11,"h3"),c.wc(12,"\u66f4\u591a\u53c2\u6570"),c.Rb(),c.Sb(13,"p"),c.wc(14,"\u53ef\u4ee5\u914d\u7f6e\u9aa8\u67b6\u5c4f\u6bb5\u843d\u6570\u91cf\uff0c\u4ee5\u4fbf\u66f4\u63a5\u8fd1\u771f\u5b9e\u6e32\u67d3\u6548\u679c\u3002\u663e\u793a\u7684\u6570\u91cf\u4f1a\u6bd4\u4f20\u5165\u7684\u6570\u91cf\u591a 1\uff0c\u9996\u884c\u4f1a\u88ab\u6e32\u67d3\u4e00\u4e2a\u957f\u5ea6 33% \u7684\u6bb5\u9996\u3002"),c.Rb(),c.Sb(15,"app-demo",1),c.Nb(16,"nel-demo-skeleton-rows",2),c.Rb(),c.Sb(17,"h3"),c.wc(18,"\u52a8\u753b\u6548\u679c"),c.Rb(),c.Sb(19,"p"),c.wc(20,"\u663e\u793a\u52a8\u753b\u6548\u679c\u3002"),c.Rb(),c.Sb(21,"app-demo",1),c.Nb(22,"nel-demo-skeleton-animated",2),c.Rb(),c.Sb(23,"h3"),c.wc(24,"\u81ea\u5b9a\u4e49\u6837\u5f0f"),c.Rb(),c.Sb(25,"app-demo",1),c.Nb(26,"nel-demo-skeleton-template",2),c.Rb(),c.Sb(27,"h3"),c.wc(28,"Loading \u72b6\u6001"),c.Rb(),c.Sb(29,"p"),c.wc(30,"\u5f53 Loading \u7ed3\u675f\u4e4b\u540e\uff0c\u6211\u4eec\u5f80\u5f80\u9700\u8981\u663e\u793a\u771f\u5b9e\u7684 UI\uff0c\u53ef\u4ee5\u901a\u8fc7 loading \u7684\u503c\u6765\u63a7\u5236\u662f\u5426\u663e\u793a\u771f\u5b9e\u7684 DOM\u3002"),c.Rb(),c.Sb(31,"app-demo",1),c.Nb(32,"nel-demo-skeleton-loading",2),c.Rb(),c.Sb(33,"h3"),c.wc(34,"\u9632\u6b62\u6e32\u67d3\u6296\u52a8"),c.Rb(),c.Sb(35,"p"),c.wc(36,"\u6709\u7684\u65f6\u5019\uff0cAPI \u7684\u8bf7\u6c42\u56de\u6765\u7684\u7279\u522b\u5feb\uff0c\u5f80\u5f80\u9aa8\u67b6\u5360\u4f4d\u521a\u521a\u88ab\u6e32\u67d3\uff0c\u771f\u5b9e\u7684\u6570\u636e\u5c31\u5df2\u7ecf\u56de\u6765\u4e86\uff0c\u7528\u6237\u7684\u754c\u9762\u4f1a\u7a81\u7136\u4e00\u95ea\uff0c\u6b64\u65f6\u4e3a\u4e86\u907f\u514d\u8fd9\u79cd\u60c5\u51b5\uff0c\u5c31\u9700\u8981\u901a\u8fc7 throttle \u5c5e\u6027\u6765\u907f\u514d\u8fd9\u4e2a\u95ee\u9898\u3002"),c.Rb(),c.Sb(37,"app-demo",1),c.Nb(38,"nel-demo-skeleton-throttle",2),c.Rb(),c.Nb(39,"app-doc",3)),2&e&&(c.zb(9),c.ic("codeUrl","components-skeleton-demo-basic.component"),c.zb(6),c.ic("codeUrl","components-skeleton-demo-rows.component"),c.zb(6),c.ic("codeUrl","components-skeleton-demo-animated.component"),c.zb(4),c.ic("codeUrl","components-skeleton-demo-template.component"),c.zb(6),c.ic("codeUrl","components-skeleton-demo-loading.component"),c.zb(6),c.ic("codeUrl","components-skeleton-demo-throttle.component"),c.zb(2),c.ic("docUrl","components-skeleton"))},directives:[V.a,z.a,N,C,L,O,I,H,X.a],encapsulation:2}),e})()}];let E=(()=>{class e{}return e.\u0275fac=function(n){return new(n||e)},e.\u0275mod=c.Kb({type:e}),e.\u0275inj=c.Jb({imports:[[T.f.forChild(D)],T.f]}),e})(),K=(()=>{class e{}return e.\u0275fac=function(n){return new(n||e)},e.\u0275mod=c.Kb({type:e}),e.\u0275inj=c.Jb({imports:[[y,_.a,E]]}),e})()},QJGT:function(e,n,t){"use strict";t.d(n,"a",function(){return r});var i=t("fXoL"),o=t("yqRL"),l=t("ofXK"),c=t("UXJo"),a=t("pIld");function s(e,n){if(1&e){const e=i.Tb();i.Qb(0),i.Sb(1,"div",1),i.Sb(2,"pre",2),i.Nb(3,"code",3),i.ec(4,"highlightAuto"),i.Rb(),i.Sb(5,"i",4),i.Zb("cdkCopyToClipboardCopied",function(n){return i.oc(e),i.dc().copy(n)}),i.Rb(),i.Rb(),i.Pb()}if(2&e){const e=i.dc();i.zb(3),i.ic("innerHTML",i.fc(4,2,e.code),i.pc),i.zb(2),i.ic("cdkCopyToClipboard",e.code)}}let r=(()=>{class e{constructor(e){this.message=e}copy(e){e?this.message.success("\u590d\u5236\u6210\u529f"):this.message.error("\u590d\u5236\u5931\u8d25")}}return e.\u0275fac=function(n){return new(n||e)(i.Mb(o.b))},e.\u0275cmp=i.Gb({type:e,selectors:[["app-code"]],inputs:{code:"code"},decls:1,vars:1,consts:[[4,"ngIf"],[1,"highlight"],[1,"language-ts"],[1,"hljs",3,"innerHTML"],[1,"el-icon-copy-document",3,"cdkCopyToClipboard","cdkCopyToClipboardCopied"]],template:function(e,n){1&e&&i.uc(0,s,6,4,"ng-container",0),2&e&&i.ic("ngIf",n.code)},directives:[l.i,c.a],pipes:[a.a],styles:["pre[class*=language-][_ngcontent-%COMP%]{background:#f6f6f6;margin:16px 0;padding:12px 20px;overflow:auto}.highlight[_ngcontent-%COMP%]{position:relative}i[_ngcontent-%COMP%]{position:absolute;top:12px;right:10px;font-size:24px;color:#b0bec5;cursor:pointer}i[_ngcontent-%COMP%]:hover{color:#6e6e6e}"]}),e})()}}]);