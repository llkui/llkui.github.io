(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-6a89941a"],{"5fca":function(e,t,n){"use strict";n.r(t);var a=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("Page",{attrs:{title:"Picker",desc:"多列选择器，需要配合js实现",type:"white",padding:!1}},[n("weui-button",{attrs:{type:"default"},on:{click:function(t){return e.show()}}},[e._v("单列选择器")]),n("weui-button",{attrs:{type:"default"},on:{click:function(t){return e.showTwo()}}},[e._v("多列选择器")]),n("weui-button",{attrs:{type:"default"},on:{click:function(t){return e.showDate()}}},[e._v("日期选择器")])],1)},l=[],r=(n("c740"),n("9973")),u={components:{Page:r["a"]},data:function(){return{type:"4",traffic:{type:"4",code:"4002"},date:"2017-09-07"}},methods:{show:function(){var e=this,t=[{label:"飞机票",value:"1"},{label:"火车票",value:"2"},{label:"的士票",value:"3"},{label:"公交票",value:"4"},{label:"其他(disabled)",value:"5",disabled:!0},{label:"好的",value:"6"}],n=t.findIndex((function(t){return t.value===e.type})),a={title:"单列选择器",options:t,default:[-1===n?0:n]};this.$picker.show(a).then((function(t){e.type=t[0].value}))},showTwo:function(){var e=this,t=[{label:"飞机票",value:"1",children:[{label:"1001",value:"1001"},{label:"1002",value:"1002"}]},{label:"火车票",value:"2",children:[{label:"2001",value:"2001"},{label:"2002",value:"2002"}]},{label:"的士票",value:"3",children:[{label:"3001",value:"3001"},{label:"3002",value:"3002"}]},{label:"公交票",value:"4",children:[{label:"4001",value:"4001"},{label:"4002",value:"4002"}]},{label:"其他(disabled)",value:"5",disabled:!0,children:[{label:"5001",value:"5001"},{label:"5002",value:"5002"}]},{label:"好的",value:"6",children:[{label:"6001",value:"6001"},{label:"6002",value:"6002"},{label:"6003",value:"6003"}]}],n=t.findIndex((function(t){return t.value===e.traffic.type})),a=0;-1!==n&&(a=t[n].children.findIndex((function(t){return t.value===e.traffic.code})));var l={title:"多列选择器",depth:2,options:t,default:[-1===n?0:n,-1===a?0:a]};this.$picker.show(l).then((function(t){e.traffic={type:t[0].value,code:t[1].value}}))},showDate:function(){var e=this,t={title:"日期选择器",start:"2016-12-29",end:"2030-2-2",default:this.date};this.$picker.showDate(t).then((function(t){e.date=t}))}}},i=u,c=n("2877"),o=Object(c["a"])(i,a,l,!1,null,null,null);t["default"]=o.exports},"65f0":function(e,t,n){var a=n("861d"),l=n("e8b5"),r=n("b622"),u=r("species");e.exports=function(e,t){var n;return l(e)&&(n=e.constructor,"function"!=typeof n||n!==Array&&!l(n.prototype)?a(n)&&(n=n[u],null===n&&(n=void 0)):n=void 0),new(void 0===n?Array:n)(0===t?0:t)}},ae40:function(e,t,n){var a=n("83ab"),l=n("d039"),r=n("5135"),u=Object.defineProperty,i={},c=function(e){throw e};e.exports=function(e,t){if(r(i,e))return i[e];t||(t={});var n=[][e],o=!!r(t,"ACCESSORS")&&t.ACCESSORS,f=r(t,0)?t[0]:c,d=r(t,1)?t[1]:void 0;return i[e]=!!n&&!l((function(){if(o&&!a)return!0;var e={length:-1};o?u(e,1,{enumerable:!0,get:c}):e[1]=1,n.call(e,f,d)}))}},b727:function(e,t,n){var a=n("0366"),l=n("44ad"),r=n("7b0b"),u=n("50c4"),i=n("65f0"),c=[].push,o=function(e){var t=1==e,n=2==e,o=3==e,f=4==e,d=6==e,s=7==e,v=5==e||d;return function(b,h,p,w){for(var y,x,k=r(b),A=l(k),g=a(h,p,3),I=u(A.length),m=0,S=w||i,O=t?S(b,I):n||s?S(b,0):void 0;I>m;m++)if((v||m in A)&&(y=A[m],x=g(y,m,k),e))if(t)O[m]=x;else if(x)switch(e){case 3:return!0;case 5:return y;case 6:return m;case 2:c.call(O,y)}else switch(e){case 4:return!1;case 7:c.call(O,y)}return d?-1:o||f?f:O}};e.exports={forEach:o(0),map:o(1),filter:o(2),some:o(3),every:o(4),find:o(5),findIndex:o(6),filterOut:o(7)}},c740:function(e,t,n){"use strict";var a=n("23e7"),l=n("b727").findIndex,r=n("44d2"),u=n("ae40"),i="findIndex",c=!0,o=u(i);i in[]&&Array(1)[i]((function(){c=!1})),a({target:"Array",proto:!0,forced:c||!o},{findIndex:function(e){return l(this,e,arguments.length>1?arguments[1]:void 0)}}),r(i)},e8b5:function(e,t,n){var a=n("c6b6");e.exports=Array.isArray||function(e){return"Array"==a(e)}}}]);
//# sourceMappingURL=chunk-6a89941a.6f4c65e0.js.map