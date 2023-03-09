import{f as c,g as r,c as D,b as t,w as n,u as F,a as l,d as s,e as o,r as y,o as i}from"./app.dc1f5148.js";const d=l("h1",{id:"button-按钮",tabindex:"-1"},[s("Button 按钮 "),l("a",{class:"header-anchor",href:"#button-按钮","aria-hidden":"true"},"#")],-1),u=l("h2",{id:"type",tabindex:"-1"},[s("type "),l("a",{class:"header-anchor",href:"#type","aria-hidden":"true"},"#")],-1),A=o(`<details class="details custom-block"><summary>显示代码</summary><div class="language-vue"><button title="Copy Code" class="copy"></button><span class="lang">vue</span><pre class="shiki material-theme-palenight" tabindex="0"><code><span class="line"><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">weui-button</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">:</span><span style="color:#C792EA;">disabled</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#A6ACCD;">disabled</span><span style="color:#89DDFF;">&quot;</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">@</span><span style="color:#C792EA;">click</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#A6ACCD;">ccc</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">&gt;</span><span style="color:#A6ACCD;">页面主操作</span><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">weui-button</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">weui-button</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">:</span><span style="color:#C792EA;">type</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;&#39;</span><span style="color:#C3E88D;">default</span><span style="color:#89DDFF;">&#39;&quot;</span><span style="color:#89DDFF;">&gt;</span><span style="color:#A6ACCD;">页面次要操作</span><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">weui-button</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">weui-button</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">:</span><span style="color:#C792EA;">type</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;&#39;</span><span style="color:#C3E88D;">warn</span><span style="color:#89DDFF;">&#39;&quot;</span><span style="color:#89DDFF;">&gt;</span><span style="color:#A6ACCD;">警告类操作</span><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">weui-button</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">script</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">setup</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">lang</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">ts</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#89DDFF;font-style:italic;">import</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">ref</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">}</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;font-style:italic;">from</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">vue</span><span style="color:#89DDFF;">&quot;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#C792EA;">let</span><span style="color:#A6ACCD;"> disabled </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">ref</span><span style="color:#A6ACCD;">(</span><span style="color:#FF9CAC;">false</span><span style="color:#A6ACCD;">)</span></span>
<span class="line"><span style="color:#C792EA;">const</span><span style="color:#A6ACCD;"> ccc </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">()</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">=&gt;</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#A6ACCD;">disabled</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">value</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">=</span><span style="color:#F07178;"> </span><span style="color:#FF9CAC;">true</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">script</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"></span></code></pre></div></details><h2 id="loading" tabindex="-1">loading <a class="header-anchor" href="#loading" aria-hidden="true">#</a></h2>`,2),C={class:"example"},b={class:"example-showcase"},h=o(`<div class="language-html"><button title="Copy Code" class="copy"></button><span class="lang">html</span><pre class="shiki material-theme-palenight" tabindex="0"><code><span class="line"><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">weui-button</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">:loading</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">true</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">&gt;</span><span style="color:#A6ACCD;">页面主操作</span><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">weui-button</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">weui-button</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">:type</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">&#39;default&#39;</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">:loading</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">true</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">&gt;</span><span style="color:#A6ACCD;">页面次要操作</span><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">weui-button</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">weui-button</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">:type</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">&#39;warn&#39;</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">:loading</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">true</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">&gt;</span><span style="color:#A6ACCD;">警告类操作</span><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">weui-button</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"></span></code></pre></div>`,1),g=l("h2",{id:"disabled",tabindex:"-1"},[s("disabled "),l("a",{class:"header-anchor",href:"#disabled","aria-hidden":"true"},"#")],-1),q={class:"example"},m={class:"example-showcase"},f=o(`<div class="language-html"><button title="Copy Code" class="copy"></button><span class="lang">html</span><pre class="shiki material-theme-palenight" tabindex="0"><code><span class="line"><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">weui-button</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">:disabled</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">true</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">&gt;</span><span style="color:#A6ACCD;">页面主操作</span><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">weui-button</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">weui-button</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">:type</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">&#39;default&#39;</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">:disabled</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">true</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">&gt;</span><span style="color:#A6ACCD;">页面次要操作</span><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">weui-button</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">weui-button</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">:type</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">&#39;warn&#39;</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">:disabled</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">true</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">&gt;</span><span style="color:#A6ACCD;">警告类操作</span><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">weui-button</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"></span></code></pre></div>`,1),_=l("h2",{id:"block",tabindex:"-1"},[s("block "),l("a",{class:"header-anchor",href:"#block","aria-hidden":"true"},"#")],-1),w={class:"example"},E={class:"example-showcase"},v=o(`<div class="language-html"><button title="Copy Code" class="copy"></button><span class="lang">html</span><pre class="shiki material-theme-palenight" tabindex="0"><code><span class="line"><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">weui-button</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">:block</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">true</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">&gt;</span><span style="color:#A6ACCD;">强调行按钮</span><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">weui-button</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">weui-button</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">:block</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">true</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">:type</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">&#39;default&#39;</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">&gt;</span><span style="color:#A6ACCD;">普通行按钮</span><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">weui-button</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">weui-button</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">:block</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">true</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">:icon</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">&#39;data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAC4AAAAuCAMAAABgZ9sFAAAAVFBMVEXx8fHMzMzr6+vn5+fv7+/t7e3d3d2+vr7W1tbHx8eysrKdnZ3p6enk5OTR0dG7u7u3t7ejo6PY2Njh4eHf39/T09PExMSvr6+goKCqqqqnp6e4uLgcLY/OAAAAnklEQVRIx+3RSRLDIAxE0QYhAbGZPNu5/z0zrXHiqiz5W72FqhqtVuuXAl3iOV7iPV/iSsAqZa9BS7YOmMXnNNX4TWGxRMn3R6SxRNgy0bzXOW8EBO8SAClsPdB3psqlvG+Lw7ONXg/pTld52BjgSSkA3PV2OOemjIDcZQWgVvONw60q7sIpR38EnHPSMDQ4MjDjLPozhAkGrVbr/z0ANjAF4AcbXmYAAAAASUVORK5CYII=&#39;</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">&gt;</span><span style="color:#A6ACCD;">强调行按钮</span><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">weui-button</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">weui-button</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">:block</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">true</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">:type</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">&#39;warn&#39;</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">&gt;</span><span style="color:#A6ACCD;">警告行按钮</span><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">weui-button</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"></span></code></pre></div>`,1),k=l("h2",{id:"mini",tabindex:"-1"},[s("mini "),l("a",{class:"header-anchor",href:"#mini","aria-hidden":"true"},"#")],-1),x=o(`<details class="details custom-block"><summary>Details</summary><div class="language-vue"><button title="Copy Code" class="copy"></button><span class="lang">vue</span><pre class="shiki material-theme-palenight" tabindex="0"><code><span class="line"><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">div</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">  &lt;weui-button :mini=&quot;true&quot;&gt;按钮&lt;/weui-button&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">  &lt;weui-button :mini=&quot;true&quot; :type=&quot;&#39;default&#39;&quot;&gt;按钮&lt;/weui-button&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">  &lt;weui-button :mini=&quot;true&quot; :type=&quot;&#39;warn&#39;&quot;&gt;按钮&lt;/weui-button&gt;</span></span>
<span class="line"><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">div</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">div</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">  &lt;weui-button :block=&quot;true&quot; :mini=&quot;true&quot;&gt;按钮&lt;/weui-button&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">  &lt;weui-button :block=&quot;true&quot; :mini=&quot;true&quot; :type=&quot;&#39;default&#39;&quot;&gt;按钮&lt;/weui-button&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">  &lt;weui-button :block=&quot;true&quot; :mini=&quot;true&quot; :type=&quot;&#39;warn&#39;&quot;&gt;按钮&lt;/weui-button&gt;</span></span>
<span class="line"><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">div</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"></span></code></pre></div></details><h2 id="attributes" tabindex="-1">Attributes <a class="header-anchor" href="#attributes" aria-hidden="true">#</a></h2><table><thead><tr><th>参数</th><th>说明</th><th>类型</th><th>可选值</th><th>默认值</th></tr></thead><tbody><tr><td>type</td><td>类型</td><td>string</td><td>primary / default / warn / text(透明)</td><td>primary</td></tr><tr><td>loading</td><td>是否加载中状态</td><td>boolean</td><td>—</td><td>false</td></tr><tr><td>disabled</td><td>是否禁用状态</td><td>boolean</td><td>—</td><td>false</td></tr><tr><td>block</td><td>是否为块级元素</td><td>boolean</td><td>—</td><td>false</td></tr><tr><td>mini</td><td>是否为mini状态</td><td>boolean</td><td>—</td><td>false</td></tr><tr><td>icon</td><td>按钮图标</td><td>string</td><td>—</td><td>—</td></tr><tr><td>in-form</td><td>是否用于form内部(样式适应)</td><td>string</td><td>—</td><td>—</td></tr></tbody></table><h2 id="event" tabindex="-1">Event <a class="header-anchor" href="#event" aria-hidden="true">#</a></h2><table><thead><tr><th>事件名称</th><th>说明</th><th>回调参数</th></tr></thead><tbody><tr><td>click</td><td>点击事件回调</td><td>function(e)</td></tr></tbody></table>`,5),B=JSON.parse('{"title":"Button 按钮","description":"","frontmatter":{},"headers":[{"level":2,"title":"type","slug":"type","link":"#type","children":[]},{"level":2,"title":"loading","slug":"loading","link":"#loading","children":[]},{"level":2,"title":"disabled","slug":"disabled","link":"#disabled","children":[]},{"level":2,"title":"block","slug":"block","link":"#block","children":[]},{"level":2,"title":"mini","slug":"mini","link":"#mini","children":[]},{"level":2,"title":"Attributes","slug":"attributes","link":"#attributes","children":[]},{"level":2,"title":"Event","slug":"event","link":"#event","children":[]}],"relativePath":"components/button.md","lastUpdated":1678367848000}'),V={name:"components/button.md"},M=c({...V,setup(O){let e=r(!1);const p=()=>{e.value=!0};return(S,N)=>{const a=y("weui-button");return i(),D("div",null,[d,u,t(a,{disabled:F(e),onClick:p},{default:n(()=>[s("页面主操作")]),_:1},8,["disabled"]),t(a,{type:"default"},{default:n(()=>[s("页面次要操作")]),_:1}),t(a,{type:"warn"},{default:n(()=>[s("警告类操作")]),_:1}),A,l("div",C,[l("div",b,[t(a,{loading:!0},{default:n(()=>[s("页面主操作")]),_:1}),t(a,{type:"default",loading:!0},{default:n(()=>[s("页面次要操作")]),_:1}),t(a,{type:"warn",loading:!0},{default:n(()=>[s("警告类操作")]),_:1})]),h]),g,l("div",q,[l("div",m,[t(a,{disabled:!0},{default:n(()=>[s("页面主操作")]),_:1}),t(a,{type:"default",disabled:!0},{default:n(()=>[s("页面次要操作")]),_:1}),t(a,{type:"warn",disabled:!0},{default:n(()=>[s("警告类操作")]),_:1})]),f]),_,l("div",w,[l("div",E,[t(a,{block:!0},{default:n(()=>[s("强调行按钮")]),_:1}),t(a,{block:!0,type:"default"},{default:n(()=>[s("普通行按钮")]),_:1}),t(a,{block:!0,icon:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAC4AAAAuCAMAAABgZ9sFAAAAVFBMVEXx8fHMzMzr6+vn5+fv7+/t7e3d3d2+vr7W1tbHx8eysrKdnZ3p6enk5OTR0dG7u7u3t7ejo6PY2Njh4eHf39/T09PExMSvr6+goKCqqqqnp6e4uLgcLY/OAAAAnklEQVRIx+3RSRLDIAxE0QYhAbGZPNu5/z0zrXHiqiz5W72FqhqtVuuXAl3iOV7iPV/iSsAqZa9BS7YOmMXnNNX4TWGxRMn3R6SxRNgy0bzXOW8EBO8SAClsPdB3psqlvG+Lw7ONXg/pTld52BjgSSkA3PV2OOemjIDcZQWgVvONw60q7sIpR38EnHPSMDQ4MjDjLPozhAkGrVbr/z0ANjAF4AcbXmYAAAAASUVORK5CYII="},{default:n(()=>[s("强调行按钮")]),_:1}),t(a,{block:!0,type:"warn"},{default:n(()=>[s("警告行按钮")]),_:1})]),v]),k,l("div",null,[t(a,{mini:!0},{default:n(()=>[s("按钮")]),_:1}),t(a,{mini:!0,type:"default"},{default:n(()=>[s("按钮")]),_:1}),t(a,{mini:!0,type:"warn"},{default:n(()=>[s("按钮")]),_:1})]),l("div",null,[t(a,{block:!0,mini:!0},{default:n(()=>[s("按钮")]),_:1}),t(a,{block:!0,mini:!0,type:"default"},{default:n(()=>[s("按钮")]),_:1}),t(a,{block:!0,mini:!0,type:"warn"},{default:n(()=>[s("按钮")]),_:1})]),x])}}});export{B as __pageData,M as default};
