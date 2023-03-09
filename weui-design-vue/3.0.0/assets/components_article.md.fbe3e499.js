import{_ as l,c as t,a as s,b as e,w as o,d as p,e as i,r as c,o as r}from"./app.dc1f5148.js";const n="/weui-design-vue/3.0.0/pic_article.png";const f=JSON.parse('{"title":"Article 文章","description":"","frontmatter":{},"headers":[],"relativePath":"components/article.md","lastUpdated":1678319930000}'),u={name:"components/article.md"},d=s("h1",{id:"article-文章",tabindex:"-1"},[p("Article 文章 "),s("a",{class:"header-anchor",href:"#article-文章","aria-hidden":"true"},"#")],-1),m={class:"article"},C=s("h1",null,"大标题",-1),A=s("section",null,[s("h2",null,"章标题"),s("section",null,[s("h3",null,"1.1 节标题"),s("p",null," Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. "),s("p",null,[s("img",{src:n,alt:""}),s("img",{src:n,alt:""})])]),s("section",null,[s("h3",null,"1.2 节标题"),s("p",null," Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. ")])],-1),D=i(`<details class="details custom-block"><summary>Details</summary><div class="language-vue"><button title="Copy Code" class="copy"></button><span class="lang">vue</span><pre class="shiki material-theme-palenight" tabindex="0"><code><span class="line"><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">div</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">class</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">article</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">  &lt;weui-article&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">    &lt;h1&gt;大标题&lt;/h1&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">    &lt;section&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">      &lt;h2&gt;章标题&lt;/h2&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">      &lt;section&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">        &lt;h3&gt;1.1 节标题&lt;/h3&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">        &lt;p&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">          Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod</span></span>
<span class="line"><span style="color:#A6ACCD;">          tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,</span></span>
<span class="line"><span style="color:#A6ACCD;">          quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo</span></span>
<span class="line"><span style="color:#A6ACCD;">          consequat.</span></span>
<span class="line"><span style="color:#A6ACCD;">        &lt;/p&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">        &lt;p&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">          &lt;img src=&quot;/pic_article.png&quot; alt=&quot;&quot;&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">          &lt;img src=&quot;/pic_article.png&quot; alt=&quot;&quot;&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">        &lt;/p&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">      &lt;/section&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">      &lt;section&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">        &lt;h3&gt;1.2 节标题&lt;/h3&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">        &lt;p&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">          Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod</span></span>
<span class="line"><span style="color:#A6ACCD;">          tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,</span></span>
<span class="line"><span style="color:#A6ACCD;">          cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non</span></span>
<span class="line"><span style="color:#A6ACCD;">          proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</span></span>
<span class="line"><span style="color:#A6ACCD;">        &lt;/p&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">      &lt;/section&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">    &lt;/section&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">  &lt;/weui-article&gt;</span></span>
<span class="line"><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">div</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">style</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#89DDFF;">.</span><span style="color:#FFCB6B;">article</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#B2CCD6;">background-color</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">var</span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;">--weui-BG-2</span><span style="color:#89DDFF;">);</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">style</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"></span></code></pre></div></details>`,1);function y(g,_,F,h,q,v){const a=c("weui-article");return r(),t("div",null,[d,s("div",m,[e(a,null,{default:o(()=>[C,A]),_:1})]),D])}const x=l(u,[["render",y]]);export{f as __pageData,x as default};
