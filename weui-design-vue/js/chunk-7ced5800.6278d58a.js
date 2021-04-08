(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-7ced5800"],{"4b34":function(t,e,n){"use strict";n.r(e);var i=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("section",[n("h2",[t._v("uploader")]),n("demo-block",[n("div",{attrs:{slot:"source"},slot:"source"},[[n("weui-cell-group",[n("weui-cell",{scopedSlots:t._u([{key:"title",fn:function(){return[n("weui-uploader",{attrs:{afterRead:t.afterRead,showCount:"",multiple:!0},on:{onClick:function(e){return t.preview(e)},oversize:function(e){return t.oversize(e)}},model:{value:t.fileList,callback:function(e){t.fileList=e},expression:"fileList"}})]},proxy:!0}])})],1),n("weui-gallery",{attrs:{visible:t.show,src:t.img,canDelete:!0},on:{onDelete:function(e){return t.deleteGallery()},onClick:function(e){return t.hide()}}})]],2),n("div",[n("p",[t._v("上传组件，一般配合组件Gallery来使用。")])]),n("template",{slot:"highlight"},[n("pre",{pre:!0},[n("code",{pre:!0,attrs:{class:"html"}},[t._v('<template>\n  <weui-cell-group>\n    <weui-cell>\n      <template #title>\n        <weui-uploader :afterRead="afterRead" v-model="fileList" @onClick="preview($event)" showCount :multiple="true" @oversize="oversize($event)"></weui-uploader>\n      </template>\n    </weui-cell>\n  </weui-cell-group>\n  <weui-gallery :visible="show" :src="img" :canDelete="true" @onDelete="deleteGallery()" @onClick="hide()"></weui-gallery>\n</template>\n<script>\nimport pic from \'./../assets/pic.png\'\n  export default {\n    data() {\n      return {\n        show: false,\n        fileList: [\n          {\n            url: pic,\n            status: \'uploading\',\n            progress: \'50%\'\n          },\n          {\n            url: pic,\n            status: \'failed\',\n          },\n          {\n            url: pic,\n            status: \'done\',\n          },\n        ],\n        img: \'\',\n      }\n    },\n    methods: {\n      afterRead(file) {\n        console.log(file)\n        this.fileList.push({\n          url: file.content,\n          status: \'done\',\n        })\n      },\n      preview($event) {\n        this.img = $event.url;\n        this.show = true;\n      },\n      deleteGallery() {\n        this.show = false;\n        this.fileList.forEach((item,index) => {\n            if(item.url.indexOf(this.img) !== -1){\n                this.fileList.splice(index, 1)\n            }\n        });\n      },\n      hide() {\n        this.show = false;\n      },\n      oversize(e){\n        console.log(\'文件过大\')\n      },\n    }\n  }\n<\/script>\n')])])])],2),n("h2",[t._v("Attributes")]),n("h3",[t._v("uploader")]),t._m(0),n("h3",[t._v("FileListItem")]),t._m(1),n("h2",[t._v("Event")]),t._m(2)],1)},l=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("table",[n("thead",[n("tr",[n("th",[t._v("参数")]),n("th",[t._v("说明")]),n("th",[t._v("类型")]),n("th",[t._v("可选值")]),n("th",[t._v("默认值")])])]),n("tbody",[n("tr",[n("td",[t._v("value(v-model)")]),n("td",[t._v("已上传的文件列表")]),n("td",[t._v("FileListItem[]")]),n("td",[t._v("—")]),n("td",[t._v("—")])]),n("tr",[n("td",[t._v("title")]),n("td",[t._v("标题")]),n("td",[t._v("string")]),n("td",[t._v("—")]),n("td",[t._v("图片上传")])]),n("tr",[n("td",[t._v("showCount")]),n("td",[t._v("显示数量")]),n("td",[t._v("boolean")]),n("td",[t._v("—")]),n("td",[t._v("false")])]),n("tr",[n("td",[t._v("maxCount")]),n("td",[t._v("最大数量")]),n("td",[t._v("number")]),n("td",[t._v("—")]),n("td",[t._v("9")])]),n("tr",[n("td",[t._v("accept")]),n("td",[t._v("允许上传的文件类型")]),n("td",[t._v("string")]),n("td",[t._v("—")]),n("td",[t._v("image/*")])]),n("tr",[n("td",[t._v("multiple")]),n("td",[t._v("是否开启文件多选")]),n("td",[t._v("boolean")]),n("td",[t._v("—")]),n("td",[t._v("false")])]),n("tr",[n("td",[t._v("max-size")]),n("td",[t._v("文件大小限制，单位为 byte")]),n("td",[t._v("number/string")]),n("td",[t._v("—")]),n("td",[t._v("—")])]),n("tr",[n("td",[t._v("after-read")]),n("td",[t._v("文件读取完成后的回调函数")]),n("td",[t._v("Function(e)")]),n("td"),n("td",[t._v("—")])]),n("tr",[n("td",[t._v("showButton")]),n("td",[t._v("是否展示上传按钮")]),n("td",[t._v("boolean")]),n("td"),n("td",[t._v("true")])])])])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("table",[n("thead",[n("tr",[n("th",[t._v("参数")]),n("th",[t._v("说明")]),n("th",[t._v("类型")]),n("th",[t._v("可选值")]),n("th",[t._v("默认值")])])]),n("tbody",[n("tr",[n("td",[t._v("url")]),n("td",[t._v("文件路径")]),n("td",[t._v("string")]),n("td",[t._v("—")]),n("td",[t._v("—")])]),n("tr",[n("td",[t._v("status")]),n("td",[t._v("文件上传状态")]),n("td",[t._v("string")]),n("td",[t._v("uploading / failed / done")]),n("td",[t._v("—")])]),n("tr",[n("td",[t._v("progress")]),n("td",[t._v("文件上传进度")]),n("td",[t._v("string")]),n("td",[t._v("—")]),n("td",[t._v("—")])])])])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("table",[n("thead",[n("tr",[n("th",[t._v("参数")]),n("th",[t._v("说明")]),n("th",[t._v("回调参数")])])]),n("tbody",[n("tr",[n("td",[t._v("onClick")]),n("td",[t._v("点击文件事件回调")]),n("td",[t._v("fileItem")])]),n("tr",[n("td",[t._v("onOversize")]),n("td",[t._v("文件大小超过限制事件回调")]),n("td",[t._v("fileItem")])])])])}],d=(n("4160"),n("c975"),n("a434"),n("159b"),n("8bc2")),r=n.n(d),s={data:function(){return{show:!1,fileList:[{url:r.a,status:"uploading",progress:"50%"},{url:r.a,status:"failed"},{url:r.a,status:"done"}],img:""}},methods:{afterRead:function(t){console.log(t),this.fileList.push({url:t.content,status:"done"})},preview:function(t){this.img=t.url,this.show=!0},deleteGallery:function(){var t=this;this.show=!1,this.fileList.forEach((function(e,n){-1!==e.url.indexOf(t.img)&&t.fileList.splice(n,1)}))},hide:function(){this.show=!1},oversize:function(t){console.log("文件过大")}}},o=s,v=n("2877"),u=Object(v["a"])(o,i,l,!1,null,null,null);e["default"]=u.exports},"8bc2":function(t,e){t.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAKAAAACgCAIAAAAErfB6AAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyJpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuMy1jMDExIDY2LjE0NTY2MSwgMjAxMi8wMi8wNi0xNDo1NjoyNyAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENTNiAoV2luZG93cykiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6RUU3QzMwMDU3NEZGMTFFNkIwQzZDNTI2QjgwMzcwMzQiIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6RUU3QzMwMDY3NEZGMTFFNkIwQzZDNTI2QjgwMzcwMzQiPiA8eG1wTU06RGVyaXZlZEZyb20gc3RSZWY6aW5zdGFuY2VJRD0ieG1wLmlpZDpFRTdDMzAwMzc0RkYxMUU2QjBDNkM1MjZCODAzNzAzNCIgc3RSZWY6ZG9jdW1lbnRJRD0ieG1wLmRpZDpFRTdDMzAwNDc0RkYxMUU2QjBDNkM1MjZCODAzNzAzNCIvPiA8L3JkZjpEZXNjcmlwdGlvbj4gPC9yZGY6UkRGPiA8L3g6eG1wbWV0YT4gPD94cGFja2V0IGVuZD0iciI/PjSJHvsAAAU3SURBVHja7J3rThs7FEYphDshEBJAvP+jVREoCrdwv+l8hy19dcczJk2BFLLWr8ngeNJZ3tvbnpH6YzgcLsD3ZZFbgGBAMCAYEAwIBgQDghEMCAYEA4IBwYBgQDCCAcGAYEAwIBgQDAgGBCMYEAwIBgQDggHBgGAEA4IBwYBgQDAgGBCMYEAwIBgQDAgGBAOCAcEIBgQDggHBgGBAMCAYwYBgQDAgGBAMCAYEIxgQDAgGBMMsaH3alV5eXn4Nq8XFWTV+304K33qXX/WVBN/d3Z2ensbxwcHB8vJyU8vHx8eTkxPfmqOjo0K39/f3/j+u+/3+6urqdD9PF3U/5Z+Xon+R/l06WFtb6/V66Z8Gg0EcdDqddrv9/VN0est0N8v3Oo0DKSw0fnh4qL0EzECwM1VqJefm5qZJYW0Ex4FiaIaZEMH/s7Ky4nQ9YVCmCsuNp07OCH43NjY24uDp6SmtQSr5Of6kiPRoeLNx2h5mJjh10BTEPq/R4PZNc7bPKzkzAc9esDS0Wq3yzJrOqc66t7e35dnayT9fxmgQqFka66yDPzaIr66umiJYDuK8xoFGw5tztkeJk78Zj8fX19eaCypX16JlrmL9swXbWUzDlbrXKTeSsyJYDdSsqbGDsrIGG41GFbUeKOJvlsuk6D+YhvOZ1anY46AQxP66wt2CY5PEdiNkRXrd4XBYrsyJ4L+dhkOAEmwlkmzRPpR746Tm0Uoe9gScylPs+mS323XQt9tthbs3nuR48u0qInjKIK6EUaTiypaFG+dFmcPUUS7lcVJjqNfrVVK6PuqkqzzN0KToT93u8Mc0rF14Rz2cjwYPAp05Pz+PM7u7u01X39vbqyQABH/gNJwGcdOaJ93xyEdD1Ns6eH5+jppLHws1lNKyR8w8OG7NYEw1TMORhHM99q3R4Mcyztj5Zoh6KNdQvrrGBII/djVsZ17z5FsW5QheX1+PA9uSPD/4KzMPgmfz+MVWHIjpDmUe8ZW6LJ2AXQlPsfKpXSsv/P6sfroe5j2CbSVKJ31Mdyjz9kraMQIipaerKZfKLo91sLm5OcnPWFpaSofRFJHtoeCrI7g6DUuwbnSEsiumPEtfXFw4pdc+InRuVydTvEGRroknFPzySm1hOO8purLAzR8R5nc/xMejQ0dwelttaOq06SicMNun4yBNBgj+bRqWLUekT5ZXz6GwUm/7FuuvZUPHx8c/X6kskyxYl5jEcSSVPAEguBpw3lQq3Ca7vLy8rM2K8t3pdOL47OysqR9lC4+PSkGXfiz04CivLQUQXFMb5zuUhZTuDJzX26qtoge1UZjmxXD66mT+dZ3Z2tryVdRDUxyPx+N0JdbtdqmiFwq1cV4xNe1ApfNrPmHL7s7OTrycq5aDwSDeGlD21nyZxpy62t7ezq+ik8rbMTJiPa0e1Hjplejk6ZXU7r/8st8sBTdtSb65PVKotxWFMjEajUJSPADOi6n9/f3ar+tkv9/X5OpvFd4PjPGUZwIE1xQmk7xUpRLMggujQSF7eHioqdrlWEVJeS7Qz+j1eopU5eGCXSVzhfu//6Lujwl39b4osZGi1KqwTl/M/tOvB+pEWedrveDXWvjWlJ8sffTX57qKBgQDggHBCAYEA4IBwYBgQDAgGBCMYEAwIBgQDAgGBAOCEQwIBgQDggHBgGBAMCAYwYBgQDAgGBAMCAYEIxgQDAgGBAOCAcGAYAQDggHBgGBAMCAYEAwIRjAgGBAMCAYEA4IBwQgGBAOCAcGAYEAwIBjBgGBAMCAYPp//BBgAStflVPGsRa8AAAAASUVORK5CYII="},c975:function(t,e,n){"use strict";var i=n("23e7"),l=n("4d64").indexOf,d=n("a640"),r=n("ae40"),s=[].indexOf,o=!!s&&1/[1].indexOf(1,-0)<0,v=d("indexOf"),u=r("indexOf",{ACCESSORS:!0,1:0});i({target:"Array",proto:!0,forced:o||!v||!u},{indexOf:function(t){return o?s.apply(this,arguments)||0:l(this,t,arguments.length>1?arguments[1]:void 0)}})}}]);
//# sourceMappingURL=chunk-7ced5800.6278d58a.js.map