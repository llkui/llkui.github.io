(window.webpackJsonp=window.webpackJsonp||[]).push([[19],{"6qls":function(e,n,t){"use strict";t.d(n,"a",function(){return r});var c=t("fXoL"),i=t("F5nt"),o=t("dran");let r=(()=>{class e{constructor(e){this.appService=e,this.docUrl="",this.doc=""}ngOnInit(){this.appService.getDoc(this.docUrl).subscribe(e=>{this.doc=e})}}return e.\u0275fac=function(n){return new(n||e)(c.Mb(i.a))},e.\u0275cmp=c.Gb({type:e,selectors:[["app-doc"]],inputs:{docUrl:"docUrl"},decls:2,vars:3,consts:[[1,"marked",3,"innerHTML"]],template:function(e,n){1&e&&(c.Nb(0,"div",0),c.ec(1,"marked")),2&e&&c.ic("innerHTML",c.fc(1,1,n.doc),c.oc)},pipes:[o.a],styles:[".marked h3{margin:55px 0 20px;font-weight:400;color:#1f2f3d;font-size:22px}.marked table{border-collapse:collapse;width:100%;background-color:#fff;font-size:14px;margin-bottom:45px;line-height:1.5em}.marked table td:first-child,.marked table th:first-child{padding-left:10px}.marked table th{text-align:left;white-space:nowrap;color:#909399;font-weight:400}.marked table td,.marked table th{border-bottom:1px solid #dcdfe6;padding:15px;max-width:250px}.marked table td{color:#606266}"],encapsulation:2}),e})()},QJGT:function(e,n,t){"use strict";t.d(n,"a",function(){return a});var c=t("fXoL"),i=t("ofXK"),o=t("UXJo"),r=t("pIld");function d(e,n){if(1&e){const e=c.Tb();c.Qb(0),c.Sb(1,"div",1),c.Sb(2,"pre",2),c.Nb(3,"code",3),c.ec(4,"highlightAuto"),c.Rb(),c.Sb(5,"i",4),c.Zb("click",function(n){return c.nc(e),c.dc().copy(n)}),c.Rb(),c.Rb(),c.Pb()}if(2&e){const e=c.dc();c.zb(3),c.ic("innerHTML",c.fc(4,2,e.code),c.oc),c.zb(2),c.ic("cdkCopyToClipboard",e.code)}}let a=(()=>{class e{copy(e){e.stopPropagation()}}return e.\u0275fac=function(n){return new(n||e)},e.\u0275cmp=c.Gb({type:e,selectors:[["app-code"]],inputs:{code:"code"},decls:1,vars:1,consts:[[4,"ngIf"],[1,"highlight"],[1,"language-ts"],[1,"hljs",3,"innerHTML"],[1,"el-icon-copy-document",3,"cdkCopyToClipboard","click"]],template:function(e,n){1&e&&c.tc(0,d,6,4,"ng-container",0),2&e&&c.ic("ngIf",n.code)},directives:[i.i,o.a],pipes:[r.a],styles:["pre[class*=language-][_ngcontent-%COMP%]{background:#f6f6f6;margin:16px 0;padding:12px 20px;overflow:auto}.highlight[_ngcontent-%COMP%]{position:relative}i[_ngcontent-%COMP%]{position:absolute;top:12px;right:10px;font-size:24px;color:#b0bec5;cursor:pointer}i[_ngcontent-%COMP%]:hover{color:#6e6e6e}"]}),e})()},kln4:function(e,n,t){"use strict";t.r(n),t.d(n,"DividerModule",function(){return S});var c=t("gPEx"),i=t("aA8y"),o=t("fXoL");let r=(()=>{class e{}return e.\u0275fac=function(n){return new(n||e)},e.\u0275mod=o.Kb({type:e}),e.\u0275inj=o.Jb({imports:[[c.a,i.a]]}),e})();var d=t("PCNd"),a=t("tyNb"),s=t("QJGT"),l=t("rvuC"),p=t("7b1L");let b=(()=>{class e{}return e.\u0275fac=function(n){return new(n||e)},e.\u0275cmp=o.Gb({type:e,selectors:[["nel-demo-divider-basic"]],decls:6,vars:0,template:function(e,n){1&e&&(o.Sb(0,"div"),o.Sb(1,"span"),o.vc(2,"\u9752\u6625\u662f\u4e00\u4e2a\u77ed\u6682\u7684\u7f8e\u68a6, \u5f53\u4f60\u9192\u6765\u65f6, \u5b83\u65e9\u5df2\u6d88\u5931\u65e0\u8e2a"),o.Rb(),o.Nb(3,"nel-divider"),o.Sb(4,"span"),o.vc(5,"\u5c11\u91cf\u7684\u90aa\u6076\u8db3\u4ee5\u62b5\u6d88\u5168\u90e8\u9ad8\u8d35\u7684\u54c1\u8d28, \u5bb3\u5f97\u4eba\u58f0\u540d\u72fc\u85c9"),o.Rb(),o.Rb())},directives:[p.a],encapsulation:2}),e})();var u=t("NtrV");let v=(()=>{class e{}return e.\u0275fac=function(n){return new(n||e)},e.\u0275cmp=o.Gb({type:e,selectors:[["nel-demo-divider-content"]],decls:13,vars:3,consts:[[3,"nelContentPosition"],["nel-icon","",3,"nelType"]],template:function(e,n){1&e&&(o.Sb(0,"div"),o.Sb(1,"span"),o.vc(2,"\u5934\u4e0a\u4e00\u7247\u6674\u5929\uff0c\u5fc3\u4e2d\u4e00\u4e2a\u60f3\u5ff5"),o.Rb(),o.Sb(3,"nel-divider",0),o.vc(4,"\u5c11\u5e74\u5305\u9752\u5929"),o.Rb(),o.Sb(5,"span"),o.vc(6,"\u997f\u4e86\u522b\u53eb\u5988, \u53eb\u997f\u4e86\u4e48"),o.Rb(),o.Sb(7,"nel-divider"),o.Nb(8,"i",1),o.Rb(),o.Sb(9,"span"),o.vc(10,"\u4e3a\u4e86\u65e0\u6cd5\u8ba1\u7b97\u7684\u4ef7\u503c"),o.Rb(),o.Sb(11,"nel-divider",0),o.vc(12,"\u963f\u91cc\u4e91"),o.Rb(),o.Rb()),2&e&&(o.zb(3),o.ic("nelContentPosition","left"),o.zb(5),o.ic("nelType","mobile-phone"),o.zb(3),o.ic("nelContentPosition","right"))},directives:[p.a,u.a],encapsulation:2}),e})(),f=(()=>{class e{}return e.\u0275fac=function(n){return new(n||e)},e.\u0275cmp=o.Gb({type:e,selectors:[["nel-demo-divider-direction"]],decls:9,vars:2,consts:[[3,"nelDirection"]],template:function(e,n){1&e&&(o.Sb(0,"div"),o.Sb(1,"span"),o.vc(2,"\u96e8\u7eb7\u7eb7"),o.Rb(),o.Nb(3,"nel-divider",0),o.Sb(4,"span"),o.vc(5,"\u65e7\u6545\u91cc"),o.Rb(),o.Nb(6,"nel-divider",0),o.Sb(7,"span"),o.vc(8,"\u8349\u6728\u6df1"),o.Rb(),o.Rb()),2&e&&(o.zb(3),o.ic("nelDirection","vertical"),o.zb(3),o.ic("nelDirection","vertical"))},directives:[p.a],encapsulation:2}),e})();var m=t("6qls");const h=[{path:"",component:(()=>{class e{}return e.\u0275fac=function(n){return new(n||e)},e.\u0275cmp=o.Gb({type:e,selectors:[["app-divider"]],hostAttrs:[1,"article"],decls:22,vars:4,consts:[["code","import { NelDividerModule } from 'ng-element-ui/divider';"],[3,"codeUrl"],["demo",""],[3,"docUrl"]],template:function(e,n){1&e&&(o.Sb(0,"h2"),o.vc(1,"Divider \u5206\u5272\u7ebf"),o.Rb(),o.Sb(2,"p"),o.vc(3,"\u533a\u9694\u5185\u5bb9\u7684\u5206\u5272\u7ebf\u3002"),o.Rb(),o.Nb(4,"app-code",0),o.Sb(5,"h3"),o.vc(6,"\u57fa\u7840\u7528\u6cd5"),o.Rb(),o.Sb(7,"p"),o.vc(8,"\u5bf9\u4e0d\u540c\u7ae0\u8282\u7684\u6587\u672c\u6bb5\u843d\u8fdb\u884c\u5206\u5272\u3002"),o.Rb(),o.Sb(9,"app-demo",1),o.Nb(10,"nel-demo-divider-basic",2),o.Rb(),o.Sb(11,"h3"),o.vc(12,"\u8bbe\u7f6e\u6587\u6848"),o.Rb(),o.Sb(13,"p"),o.vc(14,"\u53ef\u4ee5\u5728\u5206\u5272\u7ebf\u4e0a\u81ea\u5b9a\u4e49\u6587\u6848\u5185\u5bb9\u3002"),o.Rb(),o.Sb(15,"app-demo",1),o.Nb(16,"nel-demo-divider-content",2),o.Rb(),o.Sb(17,"h3"),o.vc(18,"\u5782\u76f4\u5206\u5272"),o.Rb(),o.Sb(19,"app-demo",1),o.Nb(20,"nel-demo-divider-direction",2),o.Rb(),o.Nb(21,"app-doc",3)),2&e&&(o.zb(9),o.ic("codeUrl","components-divider-demo-basic.component"),o.zb(6),o.ic("codeUrl","components-divider-demo-content.component"),o.zb(4),o.ic("codeUrl","components-divider-demo-direction.component"),o.zb(2),o.ic("docUrl","components-divider"))},directives:[s.a,l.a,b,v,f,m.a],encapsulation:2}),e})()}];let g=(()=>{class e{}return e.\u0275fac=function(n){return new(n||e)},e.\u0275mod=o.Kb({type:e}),e.\u0275inj=o.Jb({imports:[[a.e.forChild(h)],a.e]}),e})(),S=(()=>{class e{}return e.\u0275fac=function(n){return new(n||e)},e.\u0275mod=o.Kb({type:e}),e.\u0275inj=o.Jb({imports:[[r,d.a,g]]}),e})()}}]);