import{_ as n,o as e,c as l,j as s,a as i,a2 as p}from"./chunks/framework.DFabZJTw.js";const o=JSON.parse('{"title":"Enums as Array Indexes","description":"","frontmatter":{},"headers":[],"relativePath":"notes/08-enums-as-array-indexes.md","filePath":"notes/08-enums-as-array-indexes.md","lastUpdated":1672369588000}'),t={name:"notes/08-enums-as-array-indexes.md"};function r(h,a,k,d,E,y){return e(),l("div",null,a[0]||(a[0]=[s("h1",{id:"enums-as-array-indexes",tabindex:"-1"},[i("Enums as Array Indexes "),s("a",{class:"header-anchor",href:"#enums-as-array-indexes","aria-label":'Permalink to "Enums as Array Indexes"'},"​")],-1),s("p",null,[s("em",null,"Chapter 8")],-1),s("h2",{id:"integral-data-type-and-array-indices",tabindex:"-1"},[i("Integral Data Type and Array Indices "),s("a",{class:"header-anchor",href:"#integral-data-type-and-array-indices","aria-label":'Permalink to "Integral Data Type and Array Indices"'},"​")],-1),s("p",null,"C++ allows any integral type to be used as an array index. Therefore, we can use defined enumeration types to improve readability.",-1),s("div",{class:"youtube"},[s("div",null,[s("iframe",{width:"853",height:"480",src:"https://www.youtube-nocookie.com/embed/eprz0UKq7mc?rel=0&showinfo=0",frameborder:"0",allow:"accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture",allowfullscreen:"allowfullscreen"})])],-1),p(`<p>Example:</p><div class="language-cpp vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">cpp</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">enum</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> Color</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> {</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">GREEN</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">RED</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">BLUE</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">BROWN</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">WHITE</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">ORANGE</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">YELLOW</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">NO_COLOR</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">};</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">double</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> paintPrice[NO_COLOR];</span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"> // Array of 7 doubles (NO_COLOR == 7)</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// initialize the prices to $1</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">for</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> (Color paint </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> GREEN; paint </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">&lt;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> NO_COLOR;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    paint </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> static_cast&lt;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">Color</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">&gt;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(paint </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">+</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> 1</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">))</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">{</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    paintPrice[paint] </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> 1.0</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">paintPrice[RED] </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> paintPrice[RED] </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">+</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> 75.96</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br></div></div><h2 id="declare-arrays-using-type-aliases" tabindex="-1">Declare Arrays Using Type Aliases <a class="header-anchor" href="#declare-arrays-using-type-aliases" aria-label="Permalink to &quot;Declare Arrays Using Type Aliases&quot;">​</a></h2><p>You may use type aliasing to have a new name for an array of a particular type and size.</p><p>Example:</p><div class="language-cpp vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">cpp</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// Use a constant for the size and declare an alias “typedef”</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">const</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> int</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> SIZE </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> 50</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">using</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> list</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> =</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> double</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">[SIZE];</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">list yourList;</span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"> // an array of 50 doubles called yourList</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">list myList;</span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"> // another array of 50 doubles called myList</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br></div></div>`,6)]))}const g=n(t,[["render",r]]);export{o as __pageData,g as default};