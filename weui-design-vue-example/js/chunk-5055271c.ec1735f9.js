(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-5055271c"],{b787:function(e,t,n){},ce40:function(e,t,n){"use strict";n.r(t);var o=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("Page",{attrs:{padding:!1,showFooter:!1,type:"white"}},[n("weui-form",{attrs:{desc:"验证手机号样式",title:"验证码"}},[n("weui-form-group",{attrs:{tips:"收不到验证码"}},[n("weui-input",{attrs:{maxlength:11,label:"手机号",placeholder:"请输入手机号","right-slot":""},model:{value:e.mobile,callback:function(t){e.mobile=t},expression:"mobile"}},[n("weui-button",{attrs:{type:"text"}},[n("weui-icon",{attrs:{mini:!0,type:"info-circle"},nativeOn:{click:function(t){return e.info()}}})],1)],1),n("weui-input",{attrs:{label:"验证码",placeholder:"输入验证码","right-slot":""},model:{value:e.code,callback:function(t){e.code=t},expression:"code"}},[n("weui-button",{attrs:{inForm:!0,type:"default"}},[e._v("收取验证码")])],1)],1),n("weui-form-tip",{scopedSlots:e._u([{key:"content",fn:function(){return[n("weui-checkbox-agree",{attrs:{animate:e.agreeAnimate},on:{"update:animate":function(t){e.agreeAnimate=t}},model:{value:e.agree,callback:function(t){e.agree=t},expression:"agree"}},[e._v(" 阅读并同意 "),n("a",[e._v("《相关条款》")])])]},proxy:!0}])}),n("weui-form-opr",[n("weui-button",{attrs:{disabled:0==e.code.length},on:{click:function(t){return e.save()}}},[e._v("确定")])],1)],1),n("weui-half-screen-dialog",{attrs:{visible:e.custom,title:"标题",type:"custom"},on:{onClose:function(t){return e.close()}},scopedSlots:e._u([{key:"content",fn:function(){return[n("br"),n("br"),e._v("可放自定义内容 "),n("br"),n("br"),n("br"),n("br")]},proxy:!0}])})],1)},i=[],c=n("9973"),r={data:function(){return{custom:!1,mobile:"12345678907",code:"",agree:!1,agreeAnimate:!1}},components:{Page:c["a"]},methods:{info:function(){this.custom=!0},close:function(){this.custom=!1},save:function(){this.agree?this.$toast.success("已完成"):this.agreeAnimate=!0}}},a=r,u=(n("fec1"),n("2877")),s=Object(u["a"])(a,o,i,!1,null,"1349830f",null);t["default"]=s.exports},fec1:function(e,t,n){"use strict";n("b787")}}]);
//# sourceMappingURL=chunk-5055271c.ec1735f9.js.map