(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-53a3c9bc"],{"46d2":function(e,t,r){"use strict";r("7302")},7302:function(e,t,r){},"95ed":function(e,t,r){"use strict";r.r(t);var a=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("Page",{attrs:{padding:!1,showFooter:!1,type:"white"}},[r("weui-form",{attrs:{desc:"可体验表单输入样式，当输入位数不等于16位的时候点击按钮可看到报错样式。",title:"输入框状态"}},[r("weui-form-control",[r("weui-form-group",{attrs:{title:"表单报错"}},[r("weui-input",{attrs:{error:e.cardError,maxlength:16,label:"卡号",placeholder:"请输入16位数卡号"},on:{"update:error":function(t){e.cardError=t}},model:{value:e.card,callback:function(t){e.card=t},expression:"card"}})],1),r("weui-form-group",{attrs:{title:"表单只读、置灰"}},[r("weui-input",{attrs:{readonly:!0,label:"EMail",placeholder:"请输入EMail"},model:{value:e.email,callback:function(t){e.email=t},expression:"email"}}),r("weui-input",{attrs:{readonly:!0,label:"微信号",placeholder:"请输入微信号"},model:{value:e.wechat,callback:function(t){e.wechat=t},expression:"wechat"}})],1)],1),r("weui-form-opr",[r("weui-button",{attrs:{disabled:0==e.card.length},on:{click:function(t){return e.save()}}},[e._v("确定")])],1)],1)],1)},o=[],c=r("9973"),n={data:function(){return{card:"",cardError:!1,email:"1234567",wechat:"WeUI"}},components:{Page:c["a"]},methods:{save:function(){16===this.card.length?this.$toast.success("已完成"):(this.cardError=!0,this.$toptips.show("错误提示"))}}},i=n,l=(r("46d2"),r("2877")),s=Object(l["a"])(i,a,o,!1,null,"76b5988c",null);t["default"]=s.exports}}]);
//# sourceMappingURL=chunk-53a3c9bc.bef836f0.js.map