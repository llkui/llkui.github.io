(window.webpackJsonp=window.webpackJsonp||[]).push([[21],{"6qls":function(n,e,t){"use strict";t.d(e,"a",function(){return i});var b=t("fXoL"),c=t("F5nt"),o=t("dran");let i=(()=>{class n{constructor(n){this.appService=n,this.docUrl="",this.doc=""}ngOnInit(){this.appService.getDoc(this.docUrl).subscribe(n=>{this.doc=n})}}return n.\u0275fac=function(e){return new(e||n)(b.Mb(c.a))},n.\u0275cmp=b.Gb({type:n,selectors:[["app-doc"]],inputs:{docUrl:"docUrl"},decls:2,vars:3,consts:[[1,"marked",3,"innerHTML"]],template:function(n,e){1&n&&(b.Nb(0,"div",0),b.ec(1,"marked")),2&n&&b.ic("innerHTML",b.fc(1,1,e.doc),b.oc)},pipes:[o.a],styles:[".marked h3{margin:55px 0 20px;font-weight:400;color:#1f2f3d;font-size:22px}.marked table{border-collapse:collapse;width:100%;background-color:#fff;font-size:14px;margin-bottom:45px;line-height:1.5em}.marked table td:first-child,.marked table th:first-child{padding-left:10px}.marked table th{text-align:left;white-space:nowrap;color:#909399;font-weight:400}.marked table td,.marked table th{border-bottom:1px solid #dcdfe6;padding:15px;max-width:250px}.marked table td{color:#606266}"],encapsulation:2}),n})()},QJGT:function(n,e,t){"use strict";t.d(e,"a",function(){return d});var b=t("fXoL"),c=t("ofXK"),o=t("UXJo"),i=t("pIld");function l(n,e){if(1&n){const n=b.Tb();b.Qb(0),b.Sb(1,"div",1),b.Sb(2,"pre",2),b.Nb(3,"code",3),b.ec(4,"highlightAuto"),b.Rb(),b.Sb(5,"i",4),b.Zb("click",function(e){return b.nc(n),b.dc().copy(e)}),b.Rb(),b.Rb(),b.Pb()}if(2&n){const n=b.dc();b.zb(3),b.ic("innerHTML",b.fc(4,2,n.code),b.oc),b.zb(2),b.ic("cdkCopyToClipboard",n.code)}}let d=(()=>{class n{copy(n){n.stopPropagation()}}return n.\u0275fac=function(e){return new(e||n)},n.\u0275cmp=b.Gb({type:n,selectors:[["app-code"]],inputs:{code:"code"},decls:1,vars:1,consts:[[4,"ngIf"],[1,"highlight"],[1,"language-ts"],[1,"hljs",3,"innerHTML"],[1,"el-icon-copy-document",3,"cdkCopyToClipboard","click"]],template:function(n,e){1&n&&b.tc(0,l,6,4,"ng-container",0),2&n&&b.ic("ngIf",e.code)},directives:[c.i,o.a],pipes:[i.a],styles:["pre[class*=language-][_ngcontent-%COMP%]{background:#f6f6f6;margin:16px 0;padding:12px 20px;overflow:auto}.highlight[_ngcontent-%COMP%]{position:relative}i[_ngcontent-%COMP%]{position:absolute;top:12px;right:10px;font-size:24px;color:#b0bec5;cursor:pointer}i[_ngcontent-%COMP%]:hover{color:#6e6e6e}"]}),n})()},"Tx//":function(n,e,t){"use strict";t.r(e),t.d(e,"LayoutModule",function(){return h});var b=t("+uaU"),c=t("fXoL");let o=(()=>{class n{}return n.\u0275fac=function(e){return new(e||n)},n.\u0275mod=c.Kb({type:n}),n.\u0275inj=c.Jb({imports:[[b.a]]}),n})();var i=t("PCNd"),l=t("tyNb"),d=t("QJGT"),r=t("rvuC"),a=t("1LLI"),p=t("QInx");let s=(()=>{class n{}return n.\u0275fac=function(e){return new(e||n)},n.\u0275cmp=c.Gb({type:n,selectors:[["nel-demo-layout-basic"]],decls:37,vars:16,consts:[["nel-row",""],["nel-col","",3,"nelSpan"],[1,"grid-content","bg-purple-dark"],[1,"grid-content","bg-purple"],[1,"grid-content","bg-purple-light"]],template:function(n,e){1&n&&(c.Sb(0,"div",0),c.Sb(1,"div",1),c.Nb(2,"div",2),c.Rb(),c.Rb(),c.Sb(3,"div",0),c.Sb(4,"div",1),c.Nb(5,"div",3),c.Rb(),c.Sb(6,"div",1),c.Nb(7,"div",4),c.Rb(),c.Rb(),c.Sb(8,"div",0),c.Sb(9,"div",1),c.Nb(10,"div",3),c.Rb(),c.Sb(11,"div",1),c.Nb(12,"div",4),c.Rb(),c.Sb(13,"div",1),c.Nb(14,"div",3),c.Rb(),c.Rb(),c.Sb(15,"div",0),c.Sb(16,"div",1),c.Nb(17,"div",3),c.Rb(),c.Sb(18,"div",1),c.Nb(19,"div",4),c.Rb(),c.Sb(20,"div",1),c.Nb(21,"div",3),c.Rb(),c.Sb(22,"div",1),c.Nb(23,"div",4),c.Rb(),c.Rb(),c.Sb(24,"div",0),c.Sb(25,"div",1),c.Nb(26,"div",3),c.Rb(),c.Sb(27,"div",1),c.Nb(28,"div",4),c.Rb(),c.Sb(29,"div",1),c.Nb(30,"div",3),c.Rb(),c.Sb(31,"div",1),c.Nb(32,"div",4),c.Rb(),c.Sb(33,"div",1),c.Nb(34,"div",3),c.Rb(),c.Sb(35,"div",1),c.Nb(36,"div",4),c.Rb(),c.Rb()),2&n&&(c.zb(1),c.ic("nelSpan",24),c.zb(3),c.ic("nelSpan",12),c.zb(2),c.ic("nelSpan",12),c.zb(3),c.ic("nelSpan",8),c.zb(2),c.ic("nelSpan",8),c.zb(2),c.ic("nelSpan",8),c.zb(3),c.ic("nelSpan",6),c.zb(2),c.ic("nelSpan",6),c.zb(2),c.ic("nelSpan",6),c.zb(2),c.ic("nelSpan",6),c.zb(3),c.ic("nelSpan",4),c.zb(2),c.ic("nelSpan",4),c.zb(2),c.ic("nelSpan",4),c.zb(2),c.ic("nelSpan",4),c.zb(2),c.ic("nelSpan",4),c.zb(2),c.ic("nelSpan",4))},directives:[a.a,p.a],styles:[".el-row[_ngcontent-%COMP%] {\n      margin-bottom: 20px;\n      &:last-child {\n        margin-bottom: 0;\n      }\n    }\n    .el-col[_ngcontent-%COMP%] {\n      border-radius: 4px;\n    }\n    .bg-purple-dark[_ngcontent-%COMP%] {\n      background: #99a9bf;\n    }\n    .bg-purple[_ngcontent-%COMP%] {\n      background: #d3dce6;\n    }\n    .bg-purple-light[_ngcontent-%COMP%] {\n      background: #e5e9f2;\n    }\n    .grid-content[_ngcontent-%COMP%] {\n      border-radius: 4px;\n      min-height: 36px;\n    }\n    .row-bg[_ngcontent-%COMP%] {\n      padding: 10px 0;\n      background-color: #f9fafc;\n    }"]}),n})(),u=(()=>{class n{}return n.\u0275fac=function(e){return new(e||n)},n.\u0275cmp=c.Gb({type:n,selectors:[["nel-demo-layout-gutter"]],decls:9,vars:5,consts:[["nel-row","",3,"nelGutter"],["nel-col","",3,"nelSpan"],[1,"grid-content","bg-purple"]],template:function(n,e){1&n&&(c.Sb(0,"div",0),c.Sb(1,"div",1),c.Nb(2,"div",2),c.Rb(),c.Sb(3,"div",1),c.Nb(4,"div",2),c.Rb(),c.Sb(5,"div",1),c.Nb(6,"div",2),c.Rb(),c.Sb(7,"div",1),c.Nb(8,"div",2),c.Rb(),c.Rb()),2&n&&(c.ic("nelGutter",20),c.zb(1),c.ic("nelSpan",6),c.zb(2),c.ic("nelSpan",6),c.zb(2),c.ic("nelSpan",6),c.zb(2),c.ic("nelSpan",6))},directives:[a.a,p.a],styles:[".el-row[_ngcontent-%COMP%] {\n      margin-bottom: 20px;\n      &:last-child {\n        margin-bottom: 0;\n      }\n    }\n    .el-col[_ngcontent-%COMP%] {\n      border-radius: 4px;\n    }\n    .bg-purple-dark[_ngcontent-%COMP%] {\n      background: #99a9bf;\n    }\n    .bg-purple[_ngcontent-%COMP%] {\n      background: #d3dce6;\n    }\n    .bg-purple-light[_ngcontent-%COMP%] {\n      background: #e5e9f2;\n    }\n    .grid-content[_ngcontent-%COMP%] {\n      border-radius: 4px;\n      min-height: 36px;\n    }\n    .row-bg[_ngcontent-%COMP%] {\n      padding: 10px 0;\n      background-color: #f9fafc;\n    }"]}),n})(),g=(()=>{class n{}return n.\u0275fac=function(e){return new(e||n)},n.\u0275cmp=c.Gb({type:n,selectors:[["nel-demo-layout-blend"]],decls:21,vars:12,consts:[["nel-row","",3,"nelGutter"],["nel-col","",3,"nelSpan"],[1,"grid-content","bg-purple"]],template:function(n,e){1&n&&(c.Sb(0,"div",0),c.Sb(1,"div",1),c.Nb(2,"div",2),c.Rb(),c.Sb(3,"div",1),c.Nb(4,"div",2),c.Rb(),c.Rb(),c.Sb(5,"div",0),c.Sb(6,"div",1),c.Nb(7,"div",2),c.Rb(),c.Sb(8,"div",1),c.Nb(9,"div",2),c.Rb(),c.Sb(10,"div",1),c.Nb(11,"div",2),c.Rb(),c.Sb(12,"div",1),c.Nb(13,"div",2),c.Rb(),c.Rb(),c.Sb(14,"div",0),c.Sb(15,"div",1),c.Nb(16,"div",2),c.Rb(),c.Sb(17,"div",1),c.Nb(18,"div",2),c.Rb(),c.Sb(19,"div",1),c.Nb(20,"div",2),c.Rb(),c.Rb()),2&n&&(c.ic("nelGutter",20),c.zb(1),c.ic("nelSpan",16),c.zb(2),c.ic("nelSpan",8),c.zb(2),c.ic("nelGutter",20),c.zb(1),c.ic("nelSpan",8),c.zb(2),c.ic("nelSpan",8),c.zb(2),c.ic("nelSpan",4),c.zb(2),c.ic("nelSpan",4),c.zb(2),c.ic("nelGutter",20),c.zb(1),c.ic("nelSpan",4),c.zb(2),c.ic("nelSpan",16),c.zb(2),c.ic("nelSpan",4))},directives:[a.a,p.a],styles:[".el-row[_ngcontent-%COMP%] {\n      margin-bottom: 20px;\n      &:last-child {\n        margin-bottom: 0;\n      }\n    }\n    .el-col[_ngcontent-%COMP%] {\n      border-radius: 4px;\n    }\n    .bg-purple-dark[_ngcontent-%COMP%] {\n      background: #99a9bf;\n    }\n    .bg-purple[_ngcontent-%COMP%] {\n      background: #d3dce6;\n    }\n    .bg-purple-light[_ngcontent-%COMP%] {\n      background: #e5e9f2;\n    }\n    .grid-content[_ngcontent-%COMP%] {\n      border-radius: 4px;\n      min-height: 36px;\n    }\n    .row-bg[_ngcontent-%COMP%] {\n      padding: 10px 0;\n      background-color: #f9fafc;\n    }"]}),n})(),v=(()=>{class n{}return n.\u0275fac=function(e){return new(e||n)},n.\u0275cmp=c.Gb({type:n,selectors:[["nel-demo-layout-offset"]],decls:13,vars:12,consts:[["nel-row","",3,"nelGutter"],["nel-col","",3,"nelSpan"],[1,"grid-content","bg-purple"],["nel-col","",3,"nelSpan","nelOffset"]],template:function(n,e){1&n&&(c.Sb(0,"div",0),c.Sb(1,"div",1),c.Nb(2,"div",2),c.Rb(),c.Sb(3,"div",3),c.Nb(4,"div",2),c.Rb(),c.Rb(),c.Sb(5,"div",0),c.Sb(6,"div",3),c.Nb(7,"div",2),c.Rb(),c.Sb(8,"div",3),c.Nb(9,"div",2),c.Rb(),c.Rb(),c.Sb(10,"div",0),c.Sb(11,"div",3),c.Nb(12,"div",2),c.Rb(),c.Rb()),2&n&&(c.ic("nelGutter",20),c.zb(1),c.ic("nelSpan",6),c.zb(2),c.ic("nelSpan",6)("nelOffset",6),c.zb(2),c.ic("nelGutter",20),c.zb(1),c.ic("nelSpan",6)("nelOffset",6),c.zb(2),c.ic("nelSpan",6)("nelOffset",6),c.zb(2),c.ic("nelGutter",20),c.zb(1),c.ic("nelSpan",12)("nelOffset",6))},directives:[a.a,p.a],styles:[".el-row[_ngcontent-%COMP%] {\n      margin-bottom: 20px;\n      &:last-child {\n        margin-bottom: 0;\n      }\n    }\n    .el-col[_ngcontent-%COMP%] {\n      border-radius: 4px;\n    }\n    .bg-purple-dark[_ngcontent-%COMP%] {\n      background: #99a9bf;\n    }\n    .bg-purple[_ngcontent-%COMP%] {\n      background: #d3dce6;\n    }\n    .bg-purple-light[_ngcontent-%COMP%] {\n      background: #e5e9f2;\n    }\n    .grid-content[_ngcontent-%COMP%] {\n      border-radius: 4px;\n      min-height: 36px;\n    }\n    .row-bg[_ngcontent-%COMP%] {\n      padding: 10px 0;\n      background-color: #f9fafc;\n    }"]}),n})(),S=(()=>{class n{}return n.\u0275fac=function(e){return new(e||n)},n.\u0275cmp=c.Gb({type:n,selectors:[["nel-demo-layout-type"]],decls:35,vars:24,consts:[["nel-row","",1,"row-bg",3,"nelType"],["nel-col","",3,"nelSpan"],[1,"grid-content","bg-purple"],[1,"grid-content","bg-purple-light"],["nel-row","",1,"row-bg",3,"nelType","nelJustify"]],template:function(n,e){1&n&&(c.Sb(0,"div",0),c.Sb(1,"div",1),c.Nb(2,"div",2),c.Rb(),c.Sb(3,"div",1),c.Nb(4,"div",3),c.Rb(),c.Sb(5,"div",1),c.Nb(6,"div",2),c.Rb(),c.Rb(),c.Sb(7,"div",4),c.Sb(8,"div",1),c.Nb(9,"div",2),c.Rb(),c.Sb(10,"div",1),c.Nb(11,"div",3),c.Rb(),c.Sb(12,"div",1),c.Nb(13,"div",2),c.Rb(),c.Rb(),c.Sb(14,"div",4),c.Sb(15,"div",1),c.Nb(16,"div",2),c.Rb(),c.Sb(17,"div",1),c.Nb(18,"div",3),c.Rb(),c.Sb(19,"div",1),c.Nb(20,"div",2),c.Rb(),c.Rb(),c.Sb(21,"div",4),c.Sb(22,"div",1),c.Nb(23,"div",2),c.Rb(),c.Sb(24,"div",1),c.Nb(25,"div",3),c.Rb(),c.Sb(26,"div",1),c.Nb(27,"div",2),c.Rb(),c.Rb(),c.Sb(28,"div",4),c.Sb(29,"div",1),c.Nb(30,"div",2),c.Rb(),c.Sb(31,"div",1),c.Nb(32,"div",3),c.Rb(),c.Sb(33,"div",1),c.Nb(34,"div",2),c.Rb(),c.Rb()),2&n&&(c.ic("nelType","flex"),c.zb(1),c.ic("nelSpan",6),c.zb(2),c.ic("nelSpan",6),c.zb(2),c.ic("nelSpan",6),c.zb(2),c.ic("nelType","flex")("nelJustify","center"),c.zb(1),c.ic("nelSpan",6),c.zb(2),c.ic("nelSpan",6),c.zb(2),c.ic("nelSpan",6),c.zb(2),c.ic("nelType","flex")("nelJustify","end"),c.zb(1),c.ic("nelSpan",6),c.zb(2),c.ic("nelSpan",6),c.zb(2),c.ic("nelSpan",6),c.zb(2),c.ic("nelType","flex")("nelJustify","space-between"),c.zb(1),c.ic("nelSpan",6),c.zb(2),c.ic("nelSpan",6),c.zb(2),c.ic("nelSpan",6),c.zb(2),c.ic("nelType","flex")("nelJustify","space-around"),c.zb(1),c.ic("nelSpan",6),c.zb(2),c.ic("nelSpan",6),c.zb(2),c.ic("nelSpan",6))},directives:[a.a,p.a],styles:[".el-row[_ngcontent-%COMP%] {\n      margin-bottom: 20px;\n      &:last-child {\n        margin-bottom: 0;\n      }\n    }\n    .el-col[_ngcontent-%COMP%] {\n      border-radius: 4px;\n    }\n    .bg-purple-dark[_ngcontent-%COMP%] {\n      background: #99a9bf;\n    }\n    .bg-purple[_ngcontent-%COMP%] {\n      background: #d3dce6;\n    }\n    .bg-purple-light[_ngcontent-%COMP%] {\n      background: #e5e9f2;\n    }\n    .grid-content[_ngcontent-%COMP%] {\n      border-radius: 4px;\n      min-height: 36px;\n    }\n    .row-bg[_ngcontent-%COMP%] {\n      padding: 10px 0;\n      background-color: #f9fafc;\n    }"]}),n})(),f=(()=>{class n{}return n.\u0275fac=function(e){return new(e||n)},n.\u0275cmp=c.Gb({type:n,selectors:[["nel-demo-layout-reactive"]],decls:9,vars:21,consts:[["nel-row","",3,"nelGutter"],["nel-col","",3,"nelXs","nelSm","nelMd","nelLg","nelXl"],[1,"grid-content","bg-purple"],[1,"grid-content","bg-purple-light"]],template:function(n,e){1&n&&(c.Sb(0,"div",0),c.Sb(1,"div",1),c.Nb(2,"div",2),c.Rb(),c.Sb(3,"div",1),c.Nb(4,"div",3),c.Rb(),c.Sb(5,"div",1),c.Nb(6,"div",2),c.Rb(),c.Sb(7,"div",1),c.Nb(8,"div",3),c.Rb(),c.Rb()),2&n&&(c.ic("nelGutter",10),c.zb(1),c.ic("nelXs",8)("nelSm",6)("nelMd",4)("nelLg",3)("nelXl",1),c.zb(2),c.ic("nelXs",4)("nelSm",6)("nelMd",8)("nelLg",9)("nelXl",11),c.zb(2),c.ic("nelXs",4)("nelSm",6)("nelMd",8)("nelLg",9)("nelXl",11),c.zb(2),c.ic("nelXs",8)("nelSm",6)("nelMd",4)("nelLg",3)("nelXl",1))},directives:[a.a,p.a],styles:[".el-col[_ngcontent-%COMP%] {\n      border-radius: 4px;\n    }\n    .bg-purple-dark[_ngcontent-%COMP%] {\n      background: #99a9bf;\n    }\n    .bg-purple[_ngcontent-%COMP%] {\n      background: #d3dce6;\n    }\n    .bg-purple-light[_ngcontent-%COMP%] {\n      background: #e5e9f2;\n    }\n    .grid-content[_ngcontent-%COMP%] {\n      border-radius: 4px;\n      min-height: 36px;\n    }"]}),n})();var m=t("6qls");const R=[{path:"",component:(()=>{class n{}return n.\u0275fac=function(e){return new(e||n)},n.\u0275cmp=c.Gb({type:n,selectors:[["app-layout"]],hostAttrs:[1,"article"],decls:42,vars:7,consts:[["code","import { NelLayoutModule } from 'ng-element-ui/layout';"],["notes","\u901a\u8fc7 nel-row \u548c nel-col \u6307\u4ee4\uff0c\u5e76\u901a\u8fc7 nel-col \u6307\u4ee4\u7684 nelSpan \u5c5e\u6027\u6211\u4eec\u5c31\u53ef\u4ee5\u81ea\u7531\u5730\u7ec4\u5408\u5e03\u5c40\u3002",3,"codeUrl"],["demo",""],["notes","nel-row \u7ec4\u4ef6 \u63d0\u4f9b nelGutter \u5c5e\u6027\u6765\u6307\u5b9a\u6bcf\u4e00\u680f\u4e4b\u95f4\u7684\u95f4\u9694\uff0c\u9ed8\u8ba4\u95f4\u9694\u4e3a 0\u3002",3,"codeUrl"],[3,"codeUrl"],["notes","\u901a\u8fc7\u5236\u5b9a nel-col \u7ec4\u4ef6\u7684 nelOffset \u5c5e\u6027\u53ef\u4ee5\u6307\u5b9a\u5206\u680f\u504f\u79fb\u7684\u680f\u6570\u3002",3,"codeUrl"],["notes","\u5c06 nelType \u5c5e\u6027\u8d4b\u503c\u4e3a 'flex'\uff0c\u53ef\u4ee5\u542f\u7528 flex \u5e03\u5c40\uff0c\u5e76\u53ef\u901a\u8fc7 nelJustify \u5c5e\u6027\u6765\u6307\u5b9a start, center, end, space-between, space-around \u5176\u4e2d\u7684\u503c\u6765\u5b9a\u4e49\u5b50\u5143\u7d20\u7684\u6392\u7248\u65b9\u5f0f\u3002",3,"codeUrl"],[3,"docUrl"]],template:function(n,e){1&n&&(c.Sb(0,"h2"),c.vc(1,"Layout \u5e03\u5c40"),c.Rb(),c.Sb(2,"p"),c.vc(3,"\u901a\u8fc7\u57fa\u7840\u7684 24 \u5206\u680f\uff0c\u8fc5\u901f\u7b80\u4fbf\u5730\u521b\u5efa\u5e03\u5c40\u3002"),c.Rb(),c.Nb(4,"app-code",0),c.Sb(5,"h3"),c.vc(6,"\u57fa\u7840\u5e03\u5c40"),c.Rb(),c.Sb(7,"p"),c.vc(8,"\u4f7f\u7528\u5355\u4e00\u5206\u680f\u521b\u5efa\u57fa\u7840\u7684\u6805\u683c\u5e03\u5c40\u3002"),c.Rb(),c.Sb(9,"app-demo",1),c.Nb(10,"nel-demo-layout-basic",2),c.Rb(),c.Sb(11,"h3"),c.vc(12,"\u5206\u680f\u95f4\u9694"),c.Rb(),c.Sb(13,"p"),c.vc(14,"\u5206\u680f\u4e4b\u95f4\u5b58\u5728\u95f4\u9694\u3002"),c.Rb(),c.Sb(15,"app-demo",3),c.Nb(16,"nel-demo-layout-gutter",2),c.Rb(),c.Sb(17,"h3"),c.vc(18,"\u6df7\u5408\u5e03\u5c40"),c.Rb(),c.Sb(19,"p"),c.vc(20,"\u901a\u8fc7\u57fa\u7840\u7684 1/24 \u5206\u680f\u4efb\u610f\u6269\u5c55\u7ec4\u5408\u5f62\u6210\u8f83\u4e3a\u590d\u6742\u7684\u6df7\u5408\u5e03\u5c40\u3002"),c.Rb(),c.Sb(21,"app-demo",4),c.Nb(22,"nel-demo-layout-blend",2),c.Rb(),c.Sb(23,"h3"),c.vc(24,"\u5206\u680f\u504f\u79fb"),c.Rb(),c.Sb(25,"p"),c.vc(26,"\u652f\u6301\u504f\u79fb\u6307\u5b9a\u7684\u680f\u6570\u3002"),c.Rb(),c.Sb(27,"app-demo",5),c.Nb(28,"nel-demo-layout-offset",2),c.Rb(),c.Sb(29,"h3"),c.vc(30,"\u5bf9\u9f50\u65b9\u5f0f"),c.Rb(),c.Sb(31,"p"),c.vc(32,"\u901a\u8fc7 flex \u5e03\u5c40\u6765\u5bf9\u5206\u680f\u8fdb\u884c\u7075\u6d3b\u7684\u5bf9\u9f50\u3002"),c.Rb(),c.Sb(33,"app-demo",6),c.Nb(34,"nel-demo-layout-type",2),c.Rb(),c.Sb(35,"h3"),c.vc(36,"\u54cd\u5e94\u5f0f\u5e03\u5c40"),c.Rb(),c.Sb(37,"p"),c.vc(38,"\u53c2\u7167\u4e86 Bootstrap \u7684 \u54cd\u5e94\u5f0f\u8bbe\u8ba1\uff0c\u9884\u8bbe\u4e86\u4e94\u4e2a\u54cd\u5e94\u5c3a\u5bf8\uff1axs\u3001sm\u3001md\u3001lg \u548c xl\u3002"),c.Rb(),c.Sb(39,"app-demo",6),c.Nb(40,"nel-demo-layout-reactive",2),c.Rb(),c.Nb(41,"app-doc",7)),2&n&&(c.zb(9),c.ic("codeUrl","components-layout-demo-basic.component"),c.zb(6),c.ic("codeUrl","components-layout-demo-gutter.component"),c.zb(6),c.ic("codeUrl","components-layout-demo-blend.component"),c.zb(6),c.ic("codeUrl","components-layout-demo-offset.component"),c.zb(6),c.ic("codeUrl","components-layout-demo-type.component"),c.zb(6),c.ic("codeUrl","components-layout-demo-reactive.component"),c.zb(2),c.ic("docUrl","components-layout"))},directives:[d.a,r.a,s,u,g,v,S,f,m.a],encapsulation:2}),n})()}];let z=(()=>{class n{}return n.\u0275fac=function(e){return new(e||n)},n.\u0275mod=c.Kb({type:n}),n.\u0275inj=c.Jb({imports:[[l.e.forChild(R)],l.e]}),n})(),h=(()=>{class n{}return n.\u0275fac=function(e){return new(e||n)},n.\u0275mod=c.Kb({type:n}),n.\u0275inj=c.Jb({imports:[[o,i.a,z]]}),n})()}}]);