import{_ as u,D as a,o as l,c as o,k as e,a as t,I as s,w as i,R as r}from"./chunks/framework.FOt1pWjv.js";const G=JSON.parse('{"title":"Input and Output (Part 1)","description":"","frontmatter":{},"headers":[],"relativePath":"notes/03-input-output.md","filePath":"notes/03-input-output.md","lastUpdated":1672107614000}'),k={name:"notes/03-input-output.md"},m=r('<h1 id="input-and-output-part-1" tabindex="-1">Input and Output (Part 1) <a class="header-anchor" href="#input-and-output-part-1" aria-label="Permalink to &quot;Input and Output (Part 1)&quot;">​</a></h1><p><em>Chapter 3</em></p><p>I/O: sequence of bytes (stream of bytes) from source to destination</p><ul><li>Bytes are usually characters unless program requires other types of information</li><li>Stream: sequence of characters (or bytes) from source to destination</li><li>Input stream: sequence of characters (or bytes) from an input device to the computer</li><li>Output stream: sequence of characters (or bytes) from the computer to an output device</li></ul><p>Use <code>iostream</code> header file to receive data from keyboard and send output to the screen.</p><ul><li>Contains definitions of two data <strong>types</strong> (variable types like <code>int</code> or <code>string</code>): <ul><li><code>istream</code>: input stream</li><li><code>ostream</code>: output stream</li></ul></li><li>Has two variables: <ul><li><code>cin</code>: stands for common input</li><li><code>cout</code>: stands for common output</li></ul></li><li>Variable declaration is like:<br><code>istream cin;</code><br><code>ostream cout;</code></li><li>To use <code>cin</code> and <code>cout</code>, the preprocessor directive <code>#include &lt;iostream&gt;</code> must be added to the top.</li></ul><h2 id="input" tabindex="-1">Input <a class="header-anchor" href="#input" aria-label="Permalink to &quot;Input&quot;">​</a></h2><p><code>cin</code> and the <em>extraction operator</em>, <code>&gt;&gt;</code></p><ul><li><code>&gt;&gt;</code> is a binary operator</li><li>When scanning, <code>&gt;&gt;</code> skips all whitespace. <ul><li>Blanks and certain nonprintable characters</li></ul></li><li><code>&gt;&gt;</code> distinguishes between character 2 and number 2 by the right-side operand of <code>&gt;&gt;</code>.</li><li>If type <code>char</code> or <code>int</code> (or <code>double</code>), the 2 is treated as a character or as a number 2.</li></ul><table><thead><tr><th>Data Type</th><th>Valid Input</th></tr></thead><tbody><tr><td><code>char</code></td><td>One printable character except the blank</td></tr><tr><td><code>int</code></td><td>An <em>integer</em> (whole number), possibly preceded by a <code>+</code> or <code>–</code> sign</td></tr><tr><td><code>double</code></td><td>A decimal number, possibly preceded by a <code>+</code> or <code>–</code> sign. If the actual data input is an integer, the input is converted to a decimal number with the decimal part equal to <code>0</code>.</td></tr></tbody></table><h3 id="exploring-user-input-and-input-errors" tabindex="-1">Exploring User Input and Input Errors <a class="header-anchor" href="#exploring-user-input-and-input-errors" aria-label="Permalink to &quot;Exploring User Input and Input Errors&quot;">​</a></h3>',11),g=e("div",{class:"youtube"},[e("div",null,[e("iframe",{width:"853",height:"480",src:"https://www.youtube-nocookie.com/embed/jNtDc8Jct3M?rel=0&showinfo=0",frameborder:"0",allow:"accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture",allowfullscreen:"allowfullscreen"})])],-1),b=r(`<details class="details custom-block"><summary>Try the following code snippet from the video.</summary><p>Try the following code snippets with:</p><ul><li>letter</li><li>word</li><li>positive number</li><li>negative number</li><li>multi-digit number</li><li>decimal number</li><li>combination (with and without spaces)</li></ul><div class="language-cpp vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">cpp</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">/*</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"> * Test program to see what happens with the user input does not match the</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"> * variables&#39; types</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"> *</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"> * by Sean T. Hayes</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"> */</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">#include</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &lt;iostream&gt;</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">#include</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &lt;string&gt;</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">using</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> namespace</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> std</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">int</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> main</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">()</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">{</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">	// Variables to receive input</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">	char</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> ch1 </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &#39; &#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"> // 1 character</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">	char</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> ch2 </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &#39; &#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"> // a second character</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">	int</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> int1 </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> -</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">8888</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"> // whole number</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">	double</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> doub1 </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> -</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">999.999</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"> // decimal (floating point) number</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">	string text;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">	// Get input from the user</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">	cout </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">&lt;&lt;</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &quot;Input a char, floating-point number, char, int, string: &quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">	cin </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">&gt;&gt;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> ch1 </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">&gt;&gt;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> doub1 </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">&gt;&gt;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> ch2 </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">&gt;&gt;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> int1;</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">	getline</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(cin, text);</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">	// Display the values for each variable</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">	cout </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">&lt;&lt;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> endl;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">	cout </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">&lt;&lt;</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &quot;    Double: &quot;</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> &lt;&lt;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> doub1 </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">&lt;&lt;</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &#39;</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">\\n</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">		&lt;&lt;</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &quot;Characters: &#39;&quot;</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> &lt;&lt;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> ch1 </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">&lt;&lt;</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &quot;&#39;, &#39;&quot;</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> &lt;&lt;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> ch2 </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">&lt;&lt;</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &quot;&#39;</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">\\n</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">		&lt;&lt;</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &quot;   Integer: &quot;</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> &lt;&lt;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> int1 </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">&lt;&lt;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> endl</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">		&lt;&lt;</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &quot;    String: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">\\&quot;</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> &lt;&lt;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> text </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">&lt;&lt;</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &quot;</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">\\&quot;</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> &lt;&lt;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> endl;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">	return</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> 0</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"> // exit with success code.</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br></div></div></details><p>If the user inputs a character or something erroneous like that – say, “Hello there” for an integer, the system enters what is known as a “fail state”. The integer is not set to anything, and the computer no longer takes in any other input.</p><h2 id="predefined-functions" tabindex="-1">Predefined Functions <a class="header-anchor" href="#predefined-functions" aria-label="Permalink to &quot;Predefined Functions&quot;">​</a></h2><ul><li>Function (subprogram): set of instructions <ul><li>When activated, it accomplishes a task</li></ul></li><li>main executes when a program is run</li><li>Other functions execute only when called</li><li>C++ includes a wealth of functions <ul><li>Predefined functions are organized as a collection of libraries accessible through header files.</li></ul></li></ul><p>To use <code>pow()</code> (which is short for power), include <code>cmath</code>.</p>`,5),y=e("li",null,"Two numeric parameters",-1),f=e("code",null,"pow(x, y)",-1),E={class:"MathJax",jax:"SVG",style:{direction:"ltr",position:"relative"}},T={style:{overflow:"visible","min-height":"1px","min-width":"1px","vertical-align":"-0.025ex"},xmlns:"http://www.w3.org/2000/svg",width:"2.266ex",height:"1.553ex",role:"img",focusable:"false",viewBox:"0 -675.5 1001.5 686.5","aria-hidden":"true"},w=r('<g stroke="currentColor" fill="currentColor" stroke-width="0" transform="scale(1,-1)"><g data-mml-node="math"><g data-mml-node="msup"><g data-mml-node="mi"><path data-c="1D465" d="M52 289Q59 331 106 386T222 442Q257 442 286 424T329 379Q371 442 430 442Q467 442 494 420T522 361Q522 332 508 314T481 292T458 288Q439 288 427 299T415 328Q415 374 465 391Q454 404 425 404Q412 404 406 402Q368 386 350 336Q290 115 290 78Q290 50 306 38T341 26Q378 26 414 59T463 140Q466 150 469 151T485 153H489Q504 153 504 145Q504 144 502 134Q486 77 440 33T333 -11Q263 -11 227 52Q186 -10 133 -10H127Q78 -10 57 16T35 71Q35 103 54 123T99 143Q142 143 142 101Q142 81 130 66T107 46T94 41L91 40Q91 39 97 36T113 29T132 26Q168 26 194 71Q203 87 217 139T245 247T261 313Q266 340 266 352Q266 380 251 392T217 404Q177 404 142 372T93 290Q91 281 88 280T72 278H58Q52 284 52 289Z" style="stroke-width:3;"></path></g><g data-mml-node="TeXAtom" transform="translate(605,363) scale(0.707)" data-mjx-texclass="ORD"><g data-mml-node="mi"><path data-c="1D466" d="M21 287Q21 301 36 335T84 406T158 442Q199 442 224 419T250 355Q248 336 247 334Q247 331 231 288T198 191T182 105Q182 62 196 45T238 27Q261 27 281 38T312 61T339 94Q339 95 344 114T358 173T377 247Q415 397 419 404Q432 431 462 431Q475 431 483 424T494 412T496 403Q496 390 447 193T391 -23Q363 -106 294 -155T156 -205Q111 -205 77 -183T43 -117Q43 -95 50 -80T69 -58T89 -48T106 -45Q150 -45 150 -87Q150 -107 138 -122T115 -142T102 -147L99 -148Q101 -153 118 -160T152 -167H160Q177 -167 186 -165Q219 -156 247 -127T290 -65T313 -9T321 21L315 17Q309 13 296 6T270 -6Q250 -11 231 -11Q185 -11 150 11T104 82Q103 89 103 113Q103 170 138 262T173 379Q173 380 173 381Q173 390 173 393T169 400T158 404H154Q131 404 112 385T82 344T65 302T57 280Q55 278 41 278H27Q21 284 21 287Z" style="stroke-width:3;"></path></g></g></g></g></g>',1),_=[w],x={class:"MathJax",jax:"SVG",style:{direction:"ltr",position:"relative"}},Q={style:{overflow:"visible","min-height":"1px","min-width":"1px","vertical-align":"-0.025ex"},xmlns:"http://www.w3.org/2000/svg",width:"1.294ex",height:"1.025ex",role:"img",focusable:"false",viewBox:"0 -442 572 453","aria-hidden":"true"},F=e("g",{stroke:"currentColor",fill:"currentColor","stroke-width":"0",transform:"scale(1,-1)"},[e("g",{"data-mml-node":"math"},[e("g",{"data-mml-node":"mi"},[e("path",{"data-c":"1D465",d:"M52 289Q59 331 106 386T222 442Q257 442 286 424T329 379Q371 442 430 442Q467 442 494 420T522 361Q522 332 508 314T481 292T458 288Q439 288 427 299T415 328Q415 374 465 391Q454 404 425 404Q412 404 406 402Q368 386 350 336Q290 115 290 78Q290 50 306 38T341 26Q378 26 414 59T463 140Q466 150 469 151T485 153H489Q504 153 504 145Q504 144 502 134Q486 77 440 33T333 -11Q263 -11 227 52Q186 -10 133 -10H127Q78 -10 57 16T35 71Q35 103 54 123T99 143Q142 143 142 101Q142 81 130 66T107 46T94 41L91 40Q91 39 97 36T113 29T132 26Q168 26 194 71Q203 87 217 139T245 247T261 313Q266 340 266 352Q266 380 251 392T217 404Q177 404 142 372T93 290Q91 281 88 280T72 278H58Q52 284 52 289Z",style:{"stroke-width":"3"}})])])],-1),A=[F],D={class:"MathJax",jax:"SVG",style:{direction:"ltr",position:"relative"}},v={style:{overflow:"visible","min-height":"1px","min-width":"1px","vertical-align":"-0.464ex"},xmlns:"http://www.w3.org/2000/svg",width:"1.109ex",height:"1.464ex",role:"img",focusable:"false",viewBox:"0 -442 490 647","aria-hidden":"true"},C=e("g",{stroke:"currentColor",fill:"currentColor","stroke-width":"0",transform:"scale(1,-1)"},[e("g",{"data-mml-node":"math"},[e("g",{"data-mml-node":"mi"},[e("path",{"data-c":"1D466",d:"M21 287Q21 301 36 335T84 406T158 442Q199 442 224 419T250 355Q248 336 247 334Q247 331 231 288T198 191T182 105Q182 62 196 45T238 27Q261 27 281 38T312 61T339 94Q339 95 344 114T358 173T377 247Q415 397 419 404Q432 431 462 431Q475 431 483 424T494 412T496 403Q496 390 447 193T391 -23Q363 -106 294 -155T156 -205Q111 -205 77 -183T43 -117Q43 -95 50 -80T69 -58T89 -48T106 -45Q150 -45 150 -87Q150 -107 138 -122T115 -142T102 -147L99 -148Q101 -153 118 -160T152 -167H160Q177 -167 186 -165Q219 -156 247 -127T290 -65T313 -9T321 21L315 17Q309 13 296 6T270 -6Q250 -11 231 -11Q185 -11 150 11T104 82Q103 89 103 113Q103 170 138 262T173 379Q173 380 173 381Q173 390 173 393T169 400T158 404H154Q131 404 112 385T82 344T65 302T57 280Q55 278 41 278H27Q21 284 21 287Z",style:{"stroke-width":"3"}})])])],-1),q=[C],I=e("li",null,[t("In "),e("code",null,"pow(2, 3)"),t(", the parameters are "),e("code",null,"2"),t(" and "),e("code",null,"3")],-1),B=e("div",{class:"youtube"},[e("div",null,[e("iframe",{width:"853",height:"480",src:"https://www.youtube-nocookie.com/embed/E5BGdhDik6w?rel=0&showinfo=0",title:"Predefined Input Functions",frameborder:"0",allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture",allowfullscreen:"allowfullscreen"})])],-1),S=r('<p>The <code>cin.get()</code> function inputs next character (including whitespace).</p><ul><li>Stores in memory location indicated by its argument</li><li><code>cin.get(varChar)</code>; <ul><li><code>varChar</code> is a <code>char</code> variable</li><li>is an argument (or parameter) of the function</li></ul></li><li><code>cin</code> and <code>get</code> are two separate identifiers separated by a dot <ul><li>The dot separates the input stream variable name from the member (e.g., function name).</li><li>In C++, dot is the <em>member-access operator</em>.</li></ul></li></ul><p>The <code>getline()</code> function gets a whole line of user input including spaces as one string variable.</p><ul><li><code>string userIntput;</code><br><code>getline(cin, userInput)</code>;</li><li>In the previous code, if the user inputs: <code>Hello world !!!</code>, then <code>userInput</code> will contain, <code>&quot;Hello world !!!&quot;</code>.</li></ul><p>The <code>cin.ignore()</code> function discards a portion of the input.</p><ul><li><code>cin.ignore(intExp, chExp);</code></li><li>Ignore the next intExp characters unless we reach a chExp.</li><li>Often <code>&#39;\\n&#39;</code> is a great value to pass to the second parameter to ignore everything on the current line of input.</li><li>Examples: <ul><li><code>ignore(); // ignore the next character.</code></li><li><code>ignore(100); // ignore the next 100 characters.</code></li><li><code>ignore(INT_MAX, &#39;\\n&#39;); // ignore until newline.</code><ul><li><code>INT_MAX</code> is a constant defined in the <code>climits</code> header that holds the maximum value for an integer.</li></ul></li></ul></li></ul><p>The <code>cin.putback()</code> function places previous character extracted by the get function from an input stream back to that stream.</p><p>The <code>cin.peek()</code> function returns next character from the input stream.</p><ul><li>It does <strong>not</strong> remove the character from that stream.</li></ul><p>The <code>cin.clear()</code> function restores the input stream to a working state. Useful after an input error.</p><ul><li>It does <strong>not</strong> remove the current contents of the stream. For that, <code>ignore()</code> with <code>clear()</code>.</li></ul><h2 id="formatting-output-with-stream-manipulators" tabindex="-1">Formatting Output with Stream Manipulators <a class="header-anchor" href="#formatting-output-with-stream-manipulators" aria-label="Permalink to &quot;Formatting Output with Stream Manipulators&quot;">​</a></h2><ul><li><code>cout &lt;&lt;</code> <em>expression or manipulator</em> <code>&lt;&lt;</code> <em>expression or manipulator</em> <code>&lt;&lt; ...</code>;</li><li>Expression is evaluated</li><li>Value is printed</li><li>Manipulator is used to format the output <ul><li>Example: <code>endl</code>;</li></ul></li></ul><p><code>setprecision(n)</code> outputs decimal numbers with up to n decimal places.</p><p><code>fixed</code> outputs floating-point numbers in a fixed decimal format.</p><p><code>scientific</code> outputs floating-point numbers in scientific format.</p><p><code>showpoint</code> forces output to show the decimal point and trailing zeros.</p><p><code>setw(n)</code> outputs the value of an expression in a specified number of columns.</p><ul><li>If number of columns exceeds the number of columns required by the expression. <ul><li>The output of the expression is right-justified.</li><li>Unused columns to the left are filled with spaces</li></ul></li></ul><p><code>setfill(ch)</code> fills unused columns with a character.</p><ul><li>Example:<br><code>cout &lt;&lt; setfill(&#39;#&#39;);</code></li></ul><p>Additional formatting tools that give you more control over your output:</p><ul><li><code>left</code> and <code>right</code> manipulators</li><li><code>unsetf</code> manipulator</li></ul><p>There are two types of manipulators: (1) with parameters (<em>parametrized</em>) and (2) without parameters (<em>nonparametrized</em>)</p><ul><li><p><em>Parameterized</em> manipulators require the <code>iomanip</code> header (e.g., <code>setprecision</code>, <code>setw</code>, and <code>setfill</code>).</p></li><li><p>Nonparametrized manipulators only require the <code>iostream</code> header (e.g., <code>endl</code>, <code>fixed</code>, <code>showpoint</code>, <code>left</code>, and <code>flush</code>)</p></li></ul>',25),P=e("div",{class:"youtube"},[e("div",null,[e("iframe",{width:"853",height:"480",src:"https://www.-nocookie.com/embed/rEZcgoMfRKg?rel=0&showinfo=0",frameborder:"0",allow:"autoplay; encrypted-media",allowfullscreen:"allowfullscreen"})])],-1),M=e("h2",{id:"self-check-questions",tabindex:"-1"},[t("Self-Check Questions "),e("a",{class:"header-anchor",href:"#self-check-questions","aria-label":'Permalink to "Self-Check Questions"'},"​")],-1),V=e("ol",null,[e("li",null,"What is a stream of data?"),e("li",null,"What library makes our command line output look so pretty?")],-1);function H(O,N,j,z,L,R){const n=a("mi"),c=a("mrow"),d=a("msup"),p=a("math"),h=a("mjx-assistive-mml");return l(),o("div",null,[m,g,b,e("ul",null,[y,e("li",null,[t("Syntax: "),f,t(" means "),e("mjx-container",E,[(l(),o("svg",T,_)),s(h,{unselectable:"on",display:"inline",style:{top:"0px",left:"0px",clip:"rect(1px, 1px, 1px, 1px)","-webkit-touch-callout":"none","-webkit-user-select":"none","-khtml-user-select":"none","-moz-user-select":"none","-ms-user-select":"none","user-select":"none",position:"absolute",padding:"1px 0px 0px 0px",border:"0px",display:"block",width:"auto",overflow:"hidden"}},{default:i(()=>[s(p,{xmlns:"http://www.w3.org/1998/Math/MathML"},{default:i(()=>[s(d,null,{default:i(()=>[s(n,null,{default:i(()=>[t("x")]),_:1}),s(c,{"data-mjx-texclass":"ORD"},{default:i(()=>[s(n,null,{default:i(()=>[t("y")]),_:1})]),_:1})]),_:1})]),_:1})]),_:1})]),e("ul",null,[e("li",null,[e("mjx-container",x,[(l(),o("svg",Q,A)),s(h,{unselectable:"on",display:"inline",style:{top:"0px",left:"0px",clip:"rect(1px, 1px, 1px, 1px)","-webkit-touch-callout":"none","-webkit-user-select":"none","-khtml-user-select":"none","-moz-user-select":"none","-ms-user-select":"none","user-select":"none",position:"absolute",padding:"1px 0px 0px 0px",border:"0px",display:"block",width:"auto",overflow:"hidden"}},{default:i(()=>[s(p,{xmlns:"http://www.w3.org/1998/Math/MathML"},{default:i(()=>[s(n,null,{default:i(()=>[t("x")]),_:1})]),_:1})]),_:1})]),t(" and "),e("mjx-container",D,[(l(),o("svg",v,q)),s(h,{unselectable:"on",display:"inline",style:{top:"0px",left:"0px",clip:"rect(1px, 1px, 1px, 1px)","-webkit-touch-callout":"none","-webkit-user-select":"none","-khtml-user-select":"none","-moz-user-select":"none","-ms-user-select":"none","user-select":"none",position:"absolute",padding:"1px 0px 0px 0px",border:"0px",display:"block",width:"auto",overflow:"hidden"}},{default:i(()=>[s(p,{xmlns:"http://www.w3.org/1998/Math/MathML"},{default:i(()=>[s(n,null,{default:i(()=>[t("y")]),_:1})]),_:1})]),_:1})]),t(" are the arguments or parameters")])])]),I]),B,S,P,M,V])}const J=u(k,[["render",H]]);export{G as __pageData,J as default};