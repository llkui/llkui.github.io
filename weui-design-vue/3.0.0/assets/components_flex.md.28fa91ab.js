import{_ as o,c,b as l,w as n,a as s,d as p,e as i,r as t,o as r}from"./app.5482b875.js";const E=JSON.parse('{"title":"Flex 布局","description":"","frontmatter":{},"headers":[{"level":2,"title":"felx and flex-item","slug":"felx-and-flex-item","link":"#felx-and-flex-item","children":[]},{"level":2,"title":"flex","slug":"flex","link":"#flex","children":[]},{"level":2,"title":"flex-item","slug":"flex-item","link":"#flex-item","children":[]}],"relativePath":"components/flex.md","lastUpdated":1678319930000}'),d={name:"components/flex.md"},D=s("h1",{id:"flex-布局",tabindex:"-1"},[p("Flex 布局 "),s("a",{class:"header-anchor",href:"#flex-布局","aria-hidden":"true"},"#")],-1),u=s("h2",{id:"felx-and-flex-item",tabindex:"-1"},[p("felx and flex-item "),s("a",{class:"header-anchor",href:"#felx-and-flex-item","aria-hidden":"true"},"#")],-1),C=s("div",{class:"placeholder"},"weui",-1),y=s("div",{class:"placeholder"},"weui",-1),A=s("div",{class:"placeholder"},"weui",-1),F=s("div",{class:"placeholder"},"weui",-1),f=s("div",{class:"placeholder"},"weui",-1),_=s("div",{class:"placeholder"},"weui",-1),x=s("div",{class:"placeholder"},"weui",-1),g=s("div",{class:"placeholder"},"weui",-1),h=s("div",{class:"placeholder"},"weui",-1),w=s("div",{class:"placeholder"},"weui",-1),m=s("div",null,[s("div",{class:"placeholder"},"weui")],-1),v=s("div",{class:"placeholder"},"weui",-1),q=s("div",null,[s("div",{class:"placeholder"},"weui")],-1),B=i(`<details class="details custom-block"><summary>Details</summary><div class="language-vue"><button title="Copy Code" class="copy"></button><span class="lang">vue</span><pre class="shiki material-theme-palenight" tabindex="0"><code><span class="line"><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">style</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#89DDFF;">.</span><span style="color:#FFCB6B;">placeholder</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#B2CCD6;">margin</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">5px</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#B2CCD6;">padding</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">0</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">10px</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#B2CCD6;">background-color</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">var</span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;">--weui-BG-1</span><span style="color:#89DDFF;">);</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#B2CCD6;">height</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">2.3em</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#B2CCD6;">line-height</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">2.3em</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#B2CCD6;">text-align</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> center</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#B2CCD6;">color</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">var</span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;">--weui-FG-1</span><span style="color:#89DDFF;">);</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">style</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">weui-flex</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">  &lt;weui-flex-item&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">    &lt;div class=&quot;placeholder&quot;&gt;weui&lt;/div&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">  &lt;/weui-flex-item&gt;</span></span>
<span class="line"><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">weui-flex</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">weui-flex</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">  &lt;weui-flex-item&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">    &lt;div class=&quot;placeholder&quot;&gt;weui&lt;/div&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">  &lt;/weui-flex-item&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">  &lt;weui-flex-item&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">    &lt;div class=&quot;placeholder&quot;&gt;weui&lt;/div&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">  &lt;/weui-flex-item&gt;</span></span>
<span class="line"><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">weui-flex</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">weui-flex</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">  &lt;weui-flex-item&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">    &lt;div class=&quot;placeholder&quot;&gt;weui&lt;/div&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">  &lt;/weui-flex-item&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">  &lt;weui-flex-item&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">    &lt;div class=&quot;placeholder&quot;&gt;weui&lt;/div&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">  &lt;/weui-flex-item&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">  &lt;weui-flex-item&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">    &lt;div class=&quot;placeholder&quot;&gt;weui&lt;/div&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">  &lt;/weui-flex-item&gt;</span></span>
<span class="line"><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">weui-flex</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">weui-flex</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">  &lt;weui-flex-item&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">    &lt;div class=&quot;placeholder&quot;&gt;weui&lt;/div&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">  &lt;/weui-flex-item&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">  &lt;weui-flex-item&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">    &lt;div class=&quot;placeholder&quot;&gt;weui&lt;/div&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">  &lt;/weui-flex-item&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">  &lt;weui-flex-item&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">    &lt;div class=&quot;placeholder&quot;&gt;weui&lt;/div&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">  &lt;/weui-flex-item&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">  &lt;weui-flex-item&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">    &lt;div class=&quot;placeholder&quot;&gt;weui&lt;/div&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">  &lt;/weui-flex-item&gt;</span></span>
<span class="line"><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">weui-flex</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">weui-flex</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">  &lt;div&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">    &lt;div class=&quot;placeholder&quot;&gt;weui&lt;/div&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">  &lt;/div&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">  &lt;weui-flex-item&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">    &lt;div class=&quot;placeholder&quot;&gt;weui&lt;/div&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">  &lt;/weui-flex-item&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">  &lt;div&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">    &lt;div class=&quot;placeholder&quot;&gt;weui&lt;/div&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">  &lt;/div&gt;</span></span>
<span class="line"><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">weui-flex</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"></span></code></pre></div></details><h2 id="flex" tabindex="-1">flex <a class="header-anchor" href="#flex" aria-hidden="true">#</a></h2><p>flex布局</p><h2 id="flex-item" tabindex="-1">flex-item <a class="header-anchor" href="#flex-item" aria-hidden="true">#</a></h2><p>flex: 1</p>`,5);function b(k,T,N,V,S,$){const a=t("weui-flex-item"),e=t("weui-flex");return r(),c("div",null,[D,u,l(e,null,{default:n(()=>[l(a,null,{default:n(()=>[C]),_:1})]),_:1}),l(e,null,{default:n(()=>[l(a,null,{default:n(()=>[y]),_:1}),l(a,null,{default:n(()=>[A]),_:1})]),_:1}),l(e,null,{default:n(()=>[l(a,null,{default:n(()=>[F]),_:1}),l(a,null,{default:n(()=>[f]),_:1}),l(a,null,{default:n(()=>[_]),_:1})]),_:1}),l(e,null,{default:n(()=>[l(a,null,{default:n(()=>[x]),_:1}),l(a,null,{default:n(()=>[g]),_:1}),l(a,null,{default:n(()=>[h]),_:1}),l(a,null,{default:n(()=>[w]),_:1})]),_:1}),l(e,null,{default:n(()=>[m,l(a,null,{default:n(()=>[v]),_:1}),q]),_:1}),B])}const G=o(d,[["render",b]]);export{E as __pageData,G as default};
