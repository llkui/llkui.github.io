import{e as r,f as c,c as D,b as n,w as l,u as F,a as o,g as s,d as t,r as y,o as i}from"./app.9c60bffa.js";const u=o("h2",{id:"type",tabindex:"-1"},[s("type "),o("a",{class:"header-anchor",href:"#type","aria-hidden":"true"},"#")],-1),d=t(`<details class="details custom-block"><summary>显示代码</summary><div class="language-vue"><button title="Copy Code" class="copy"></button><span class="lang">vue</span><pre class="shiki material-theme-palenight" tabindex="0"><code><span class="line"><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">weui-button</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">:</span><span style="color:#C792EA;">disabled</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#A6ACCD;">disabled</span><span style="color:#89DDFF;">&quot;</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">@</span><span style="color:#C792EA;">click</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#A6ACCD;">ccc</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">&gt;</span><span style="color:#A6ACCD;">页面主操作</span><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">weui-button</span><span style="color:#89DDFF;">&gt;</span></span>
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
<span class="line"></span></code></pre></div></details><h2 id="loading" tabindex="-1">loading <a class="header-anchor" href="#loading" aria-hidden="true">#</a></h2>`,2),A=t(`<details class="details custom-block"><summary>显示代码</summary><div class="language-vue"><button title="Copy Code" class="copy"></button><span class="lang">vue</span><pre class="shiki material-theme-palenight" tabindex="0"><code><span class="line"><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">weui-button</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">:</span><span style="color:#C792EA;">loading</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#FF9CAC;">true</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">&gt;</span><span style="color:#A6ACCD;">页面主操作</span><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">weui-button</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">weui-button</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">:</span><span style="color:#C792EA;">type</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;&#39;</span><span style="color:#C3E88D;">default</span><span style="color:#89DDFF;">&#39;&quot;</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">:</span><span style="color:#C792EA;">loading</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#FF9CAC;">true</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">&gt;</span><span style="color:#A6ACCD;">页面次要操作</span><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">weui-button</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">weui-button</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">:</span><span style="color:#C792EA;">type</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;&#39;</span><span style="color:#C3E88D;">warn</span><span style="color:#89DDFF;">&#39;&quot;</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">:</span><span style="color:#C792EA;">loading</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#FF9CAC;">true</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">&gt;</span><span style="color:#A6ACCD;">警告类操作</span><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">weui-button</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"></span></code></pre></div></details><h2 id="disabled" tabindex="-1">disabled <a class="header-anchor" href="#disabled" aria-hidden="true">#</a></h2>`,2),C=t(`<details class="details custom-block"><summary>显示代码</summary><div class="language-vue"><button title="Copy Code" class="copy"></button><span class="lang">vue</span><pre class="shiki material-theme-palenight" tabindex="0"><code><span class="line"><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">weui-button</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">:</span><span style="color:#C792EA;">disabled</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#FF9CAC;">true</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">&gt;</span><span style="color:#A6ACCD;">页面主操作</span><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">weui-button</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">weui-button</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">:</span><span style="color:#C792EA;">type</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;&#39;</span><span style="color:#C3E88D;">default</span><span style="color:#89DDFF;">&#39;&quot;</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">:</span><span style="color:#C792EA;">disabled</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#FF9CAC;">true</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">&gt;</span><span style="color:#A6ACCD;">页面次要操作</span><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">weui-button</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">weui-button</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">:</span><span style="color:#C792EA;">type</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;&#39;</span><span style="color:#C3E88D;">warn</span><span style="color:#89DDFF;">&#39;&quot;</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">:</span><span style="color:#C792EA;">disabled</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#FF9CAC;">true</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">&gt;</span><span style="color:#A6ACCD;">警告类操作</span><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">weui-button</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"></span></code></pre></div></details><h2 id="block" tabindex="-1">block <a class="header-anchor" href="#block" aria-hidden="true">#</a></h2>`,2),b=t(`<details class="details custom-block"><summary>Details</summary><div class="language-vue"><button title="Copy Code" class="copy"></button><span class="lang">vue</span><pre class="shiki material-theme-palenight" tabindex="0"><code><span class="line"><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">weui-button</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">:</span><span style="color:#C792EA;">block</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#FF9CAC;">true</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">&gt;</span><span style="color:#A6ACCD;">强调行按钮</span><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">weui-button</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">weui-button</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">:</span><span style="color:#C792EA;">block</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#FF9CAC;">true</span><span style="color:#89DDFF;">&quot;</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">:</span><span style="color:#C792EA;">type</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;&#39;</span><span style="color:#C3E88D;">default</span><span style="color:#89DDFF;">&#39;&quot;</span><span style="color:#89DDFF;">&gt;</span><span style="color:#A6ACCD;">普通行按钮</span><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">weui-button</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">weui-button</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">:</span><span style="color:#C792EA;">block</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#FF9CAC;">true</span><span style="color:#89DDFF;">&quot;</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">:</span><span style="color:#C792EA;">icon</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;&#39;</span><span style="color:#C3E88D;">data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAC4AAAAuCAMAAABgZ9sFAAAAVFBMVEXx8fHMzMzr6+vn5+fv7+/t7e3d3d2+vr7W1tbHx8eysrKdnZ3p6enk5OTR0dG7u7u3t7ejo6PY2Njh4eHf39/T09PExMSvr6+goKCqqqqnp6e4uLgcLY/OAAAAnklEQVRIx+3RSRLDIAxE0QYhAbGZPNu5/z0zrXHiqiz5W72FqhqtVuuXAl3iOV7iPV/iSsAqZa9BS7YOmMXnNNX4TWGxRMn3R6SxRNgy0bzXOW8EBO8SAClsPdB3psqlvG+Lw7ONXg/pTld52BjgSSkA3PV2OOemjIDcZQWgVvONw60q7sIpR38EnHPSMDQ4MjDjLPozhAkGrVbr/z0ANjAF4AcbXmYAAAAASUVORK5CYII=</span><span style="color:#89DDFF;">&#39;&quot;</span><span style="color:#89DDFF;">&gt;</span><span style="color:#A6ACCD;">强调行按钮</span><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">weui-button</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">weui-button</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">:</span><span style="color:#C792EA;">block</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#FF9CAC;">true</span><span style="color:#89DDFF;">&quot;</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">:</span><span style="color:#C792EA;">type</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;&#39;</span><span style="color:#C3E88D;">warn</span><span style="color:#89DDFF;">&#39;&quot;</span><span style="color:#89DDFF;">&gt;</span><span style="color:#A6ACCD;">警告行按钮</span><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">weui-button</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"></span></code></pre></div></details><h2 id="mini" tabindex="-1">mini <a class="header-anchor" href="#mini" aria-hidden="true">#</a></h2>`,2),g=t(`<details class="details custom-block"><summary>Details</summary><div class="language-vue"><button title="Copy Code" class="copy"></button><span class="lang">vue</span><pre class="shiki material-theme-palenight" tabindex="0"><code><span class="line"><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">div</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">  &lt;weui-button :mini=&quot;true&quot;&gt;按钮&lt;/weui-button&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">  &lt;weui-button :mini=&quot;true&quot; :type=&quot;&#39;default&#39;&quot;&gt;按钮&lt;/weui-button&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">  &lt;weui-button :mini=&quot;true&quot; :type=&quot;&#39;warn&#39;&quot;&gt;按钮&lt;/weui-button&gt;</span></span>
<span class="line"><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">div</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">div</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">  &lt;weui-button :block=&quot;true&quot; :mini=&quot;true&quot;&gt;按钮&lt;/weui-button&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">  &lt;weui-button :block=&quot;true&quot; :mini=&quot;true&quot; :type=&quot;&#39;default&#39;&quot;&gt;按钮&lt;/weui-button&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">  &lt;weui-button :block=&quot;true&quot; :mini=&quot;true&quot; :type=&quot;&#39;warn&#39;&quot;&gt;按钮&lt;/weui-button&gt;</span></span>
<span class="line"><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">div</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"></span></code></pre></div></details><h2 id="attributes" tabindex="-1">Attributes <a class="header-anchor" href="#attributes" aria-hidden="true">#</a></h2><table><thead><tr><th>参数</th><th>说明</th><th>类型</th><th>可选值</th><th>默认值</th></tr></thead><tbody><tr><td>type</td><td>类型</td><td>string</td><td>primary / default / warn / text(透明)</td><td>primary</td></tr><tr><td>loading</td><td>是否加载中状态</td><td>boolean</td><td>—</td><td>false</td></tr><tr><td>disabled</td><td>是否禁用状态</td><td>boolean</td><td>—</td><td>false</td></tr><tr><td>block</td><td>是否为块级元素</td><td>boolean</td><td>—</td><td>false</td></tr><tr><td>mini</td><td>是否为mini状态</td><td>boolean</td><td>—</td><td>false</td></tr><tr><td>icon</td><td>按钮图标</td><td>string</td><td>—</td><td>—</td></tr><tr><td>in-form</td><td>是否用于form内部(样式适应)</td><td>string</td><td>—</td><td>—</td></tr></tbody></table><h2 id="event" tabindex="-1">Event <a class="header-anchor" href="#event" aria-hidden="true">#</a></h2><table><thead><tr><th>事件名称</th><th>说明</th><th>回调参数</th></tr></thead><tbody><tr><td>click</td><td>点击事件回调</td><td>function(e)</td></tr></tbody></table>`,5),v=JSON.parse('{"title":"","description":"","frontmatter":{},"headers":[{"level":2,"title":"type","slug":"type","link":"#type","children":[]},{"level":2,"title":"loading","slug":"loading","link":"#loading","children":[]},{"level":2,"title":"disabled","slug":"disabled","link":"#disabled","children":[]},{"level":2,"title":"block","slug":"block","link":"#block","children":[]},{"level":2,"title":"mini","slug":"mini","link":"#mini","children":[]},{"level":2,"title":"Attributes","slug":"attributes","link":"#attributes","children":[]},{"level":2,"title":"Event","slug":"event","link":"#event","children":[]}],"relativePath":"components/button.md","lastUpdated":1678280312000}'),h={name:"components/button.md"},E=r({...h,setup(q){let p=c(!1);const e=()=>{p.value=!0};return(m,f)=>{const a=y("weui-button");return i(),D("div",null,[u,n(a,{disabled:F(p),onClick:e},{default:l(()=>[s("页面主操作")]),_:1},8,["disabled"]),n(a,{type:"default"},{default:l(()=>[s("页面次要操作")]),_:1}),n(a,{type:"warn"},{default:l(()=>[s("警告类操作")]),_:1}),d,n(a,{loading:!0},{default:l(()=>[s("页面主操作")]),_:1}),n(a,{type:"default",loading:!0},{default:l(()=>[s("页面次要操作")]),_:1}),n(a,{type:"warn",loading:!0},{default:l(()=>[s("警告类操作")]),_:1}),A,n(a,{disabled:!0},{default:l(()=>[s("页面主操作")]),_:1}),n(a,{type:"default",disabled:!0},{default:l(()=>[s("页面次要操作")]),_:1}),n(a,{type:"warn",disabled:!0},{default:l(()=>[s("警告类操作")]),_:1}),C,n(a,{block:!0},{default:l(()=>[s("强调行按钮")]),_:1}),n(a,{block:!0,type:"default"},{default:l(()=>[s("普通行按钮")]),_:1}),n(a,{block:!0,icon:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAC4AAAAuCAMAAABgZ9sFAAAAVFBMVEXx8fHMzMzr6+vn5+fv7+/t7e3d3d2+vr7W1tbHx8eysrKdnZ3p6enk5OTR0dG7u7u3t7ejo6PY2Njh4eHf39/T09PExMSvr6+goKCqqqqnp6e4uLgcLY/OAAAAnklEQVRIx+3RSRLDIAxE0QYhAbGZPNu5/z0zrXHiqiz5W72FqhqtVuuXAl3iOV7iPV/iSsAqZa9BS7YOmMXnNNX4TWGxRMn3R6SxRNgy0bzXOW8EBO8SAClsPdB3psqlvG+Lw7ONXg/pTld52BjgSSkA3PV2OOemjIDcZQWgVvONw60q7sIpR38EnHPSMDQ4MjDjLPozhAkGrVbr/z0ANjAF4AcbXmYAAAAASUVORK5CYII="},{default:l(()=>[s("强调行按钮")]),_:1}),n(a,{block:!0,type:"warn"},{default:l(()=>[s("警告行按钮")]),_:1}),b,o("div",null,[n(a,{mini:!0},{default:l(()=>[s("按钮")]),_:1}),n(a,{mini:!0,type:"default"},{default:l(()=>[s("按钮")]),_:1}),n(a,{mini:!0,type:"warn"},{default:l(()=>[s("按钮")]),_:1})]),o("div",null,[n(a,{block:!0,mini:!0},{default:l(()=>[s("按钮")]),_:1}),n(a,{block:!0,mini:!0,type:"default"},{default:l(()=>[s("按钮")]),_:1}),n(a,{block:!0,mini:!0,type:"warn"},{default:l(()=>[s("按钮")]),_:1})]),g])}}});export{v as __pageData,E as default};
