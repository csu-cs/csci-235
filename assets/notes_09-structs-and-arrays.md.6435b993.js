import{_ as n,o as a,c as l,k as s,a as p,Q as e}from"./chunks/framework.eb542efc.js";const o="/csci-235/assets/struct-list.034a3b58.svg",t="/csci-235/assets/struct-list-init.2a4021cf.svg",F=JSON.parse('{"title":"Structs and Array, Together","description":"","frontmatter":{},"headers":[],"relativePath":"notes/09-structs-and-arrays.md","filePath":"notes/09-structs-and-arrays.md","lastUpdated":1672375659000}'),r={name:"notes/09-structs-and-arrays.md"},c=s("h1",{id:"structs-and-array-together",tabindex:"-1"},[p("Structs and Array, Together "),s("a",{class:"header-anchor",href:"#structs-and-array-together","aria-label":'Permalink to "Structs and Array, Together"'},"​")],-1),i=s("p",null,[s("em",null,"Chapter 9")],-1),y=s("div",{class:"youtube"},[s("div",null,[s("iframe",{width:"853",height:"480",src:"https://www.youtube-nocookie.com/embed/S_olSydh6FU?rel=0&showinfo=0",frameborder:"0",allowfullscreen:"allowfullscreen"})])],-1),E=e(`<h2 id="arrays-in-structs" tabindex="-1">Arrays in <code>struct</code>s <a class="header-anchor" href="#arrays-in-structs" aria-label="Permalink to &quot;Arrays in \`struct\`s&quot;">​</a></h2><p>Suppose we want to store a list of numbers in an array. However, the list may or may not fill up the entire array. We can create a <code>struct</code> for our list where we store the current length (or size) of the list.</p><ul><li><p>Two items are associated with a list:</p><ul><li>Values (elements)</li><li>Length of the list</li></ul></li><li><p>Define a <code>struct</code> containing both items:</p><div class="language-cpp vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">cpp</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#6A737D;">// Max size of a list</span></span>
<span class="line"><span style="color:#F97583;">const</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">int</span><span style="color:#E1E4E8;"> LIST_SIZE </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">1000</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">/**</span></span>
<span class="line"><span style="color:#6A737D;"> * A data type that holds an array and its length</span></span>
<span class="line"><span style="color:#6A737D;"> */</span></span>
<span class="line"><span style="color:#F97583;">struct</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">List</span></span>
<span class="line"><span style="color:#E1E4E8;">{</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#F97583;">int</span><span style="color:#E1E4E8;"> values[LIST_SIZE];</span><span style="color:#6A737D;"> // array containing list elements</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#F97583;">int</span><span style="color:#E1E4E8;"> length;</span><span style="color:#6A737D;"> // the number of values used in this list</span></span>
<span class="line"><span style="color:#E1E4E8;">};</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#6A737D;">// Max size of a list</span></span>
<span class="line"><span style="color:#D73A49;">const</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">int</span><span style="color:#24292E;"> LIST_SIZE </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">1000</span><span style="color:#24292E;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">/**</span></span>
<span class="line"><span style="color:#6A737D;"> * A data type that holds an array and its length</span></span>
<span class="line"><span style="color:#6A737D;"> */</span></span>
<span class="line"><span style="color:#D73A49;">struct</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">List</span></span>
<span class="line"><span style="color:#24292E;">{</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#D73A49;">int</span><span style="color:#24292E;"> values[LIST_SIZE];</span><span style="color:#6A737D;"> // array containing list elements</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#D73A49;">int</span><span style="color:#24292E;"> length;</span><span style="color:#6A737D;"> // the number of values used in this list</span></span>
<span class="line"><span style="color:#24292E;">};</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br></div></div></li></ul><figure><img src="`+o+`" alt="The members of intList after begin declared as a List." id="fig:dec"><figcaption>The members of <code>intList</code> after begin declared as a <code>List</code>.</figcaption></figure><h3 id="assignment" tabindex="-1">Assignment <a class="header-anchor" href="#assignment" aria-label="Permalink to &quot;Assignment&quot;">​</a></h3><div class="language-cpp vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">cpp</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#6A737D;">// variable declaration and initialization.</span></span>
<span class="line"><span style="color:#E1E4E8;">List intList {{}, </span><span style="color:#79B8FF;">0</span><span style="color:#E1E4E8;">};</span><span style="color:#6A737D;"> // Set values all to 0 and length to 0.</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">// Set first value to 21.</span></span>
<span class="line"><span style="color:#E1E4E8;">intList.values[intList.length] </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">21</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#E1E4E8;">intList.length</span><span style="color:#F97583;">++</span><span style="color:#E1E4E8;">;</span><span style="color:#6A737D;"> // update the length to 1</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">// Set second value to 117.</span></span>
<span class="line"><span style="color:#E1E4E8;">intList.values[intList.length] </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">117</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#E1E4E8;">intList.length</span><span style="color:#F97583;">++</span><span style="color:#E1E4E8;">;</span><span style="color:#6A737D;"> // update the length to 2</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#6A737D;">// variable declaration and initialization.</span></span>
<span class="line"><span style="color:#24292E;">List intList {{}, </span><span style="color:#005CC5;">0</span><span style="color:#24292E;">};</span><span style="color:#6A737D;"> // Set values all to 0 and length to 0.</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">// Set first value to 21.</span></span>
<span class="line"><span style="color:#24292E;">intList.values[intList.length] </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">21</span><span style="color:#24292E;">;</span></span>
<span class="line"><span style="color:#24292E;">intList.length</span><span style="color:#D73A49;">++</span><span style="color:#24292E;">;</span><span style="color:#6A737D;"> // update the length to 1</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">// Set second value to 117.</span></span>
<span class="line"><span style="color:#24292E;">intList.values[intList.length] </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">117</span><span style="color:#24292E;">;</span></span>
<span class="line"><span style="color:#24292E;">intList.length</span><span style="color:#D73A49;">++</span><span style="color:#24292E;">;</span><span style="color:#6A737D;"> // update the length to 2</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br></div></div><figure><img src="`+t+`" alt="The members of intList after initialization and assigning the first two values." id="fig:init"><figcaption>The members of <code>intList</code> after initialization and assigning the first two values.</figcaption></figure><h2 id="structs-in-arrays" tabindex="-1"><code>struct</code>s in Arrays <a class="header-anchor" href="#structs-in-arrays" aria-label="Permalink to &quot;\`struct\`s in Arrays&quot;">​</a></h2><p>A common practice is to have arrays of <code>struct</code>s. For example,</p><div class="language-cpp vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">cpp</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#6A737D;">/**</span></span>
<span class="line"><span style="color:#6A737D;"> * Info about an employee of this company.</span></span>
<span class="line"><span style="color:#6A737D;"> */</span></span>
<span class="line"><span style="color:#F97583;">struct</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">Employee</span></span>
<span class="line"><span style="color:#E1E4E8;">{</span></span>
<span class="line"><span style="color:#E1E4E8;">    string firstName;</span></span>
<span class="line"><span style="color:#E1E4E8;">    string lastName;</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#F97583;">int</span><span style="color:#E1E4E8;">    personID;</span></span>
<span class="line"><span style="color:#E1E4E8;">    string deptID;</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#F97583;">double</span><span style="color:#E1E4E8;"> yearlySalary;</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#F97583;">double</span><span style="color:#E1E4E8;"> yearToDatePaid;</span></span>
<span class="line"><span style="color:#E1E4E8;">};</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">Employee employees[</span><span style="color:#79B8FF;">50</span><span style="color:#E1E4E8;">];</span><span style="color:#6A737D;"> // variable declaration</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">// output first names</span></span>
<span class="line"><span style="color:#F97583;">for</span><span style="color:#E1E4E8;"> (</span><span style="color:#F97583;">int</span><span style="color:#E1E4E8;"> index </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">0</span><span style="color:#E1E4E8;">; index </span><span style="color:#F97583;">&lt;</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">50</span><span style="color:#E1E4E8;">; </span><span style="color:#F97583;">++</span><span style="color:#E1E4E8;">index)</span></span>
<span class="line"><span style="color:#E1E4E8;">    cout </span><span style="color:#F97583;">&lt;&lt;</span><span style="color:#E1E4E8;"> employees[index].firstName </span><span style="color:#F97583;">&lt;&lt;</span><span style="color:#E1E4E8;"> endl;</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#6A737D;">/**</span></span>
<span class="line"><span style="color:#6A737D;"> * Info about an employee of this company.</span></span>
<span class="line"><span style="color:#6A737D;"> */</span></span>
<span class="line"><span style="color:#D73A49;">struct</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">Employee</span></span>
<span class="line"><span style="color:#24292E;">{</span></span>
<span class="line"><span style="color:#24292E;">    string firstName;</span></span>
<span class="line"><span style="color:#24292E;">    string lastName;</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#D73A49;">int</span><span style="color:#24292E;">    personID;</span></span>
<span class="line"><span style="color:#24292E;">    string deptID;</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#D73A49;">double</span><span style="color:#24292E;"> yearlySalary;</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#D73A49;">double</span><span style="color:#24292E;"> yearToDatePaid;</span></span>
<span class="line"><span style="color:#24292E;">};</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">Employee employees[</span><span style="color:#005CC5;">50</span><span style="color:#24292E;">];</span><span style="color:#6A737D;"> // variable declaration</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">// output first names</span></span>
<span class="line"><span style="color:#D73A49;">for</span><span style="color:#24292E;"> (</span><span style="color:#D73A49;">int</span><span style="color:#24292E;"> index </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">0</span><span style="color:#24292E;">; index </span><span style="color:#D73A49;">&lt;</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">50</span><span style="color:#24292E;">; </span><span style="color:#D73A49;">++</span><span style="color:#24292E;">index)</span></span>
<span class="line"><span style="color:#24292E;">    cout </span><span style="color:#D73A49;">&lt;&lt;</span><span style="color:#24292E;"> employees[index].firstName </span><span style="color:#D73A49;">&lt;&lt;</span><span style="color:#24292E;"> endl;</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br></div></div><h2 id="structs-within-structs" tabindex="-1"><code>struct</code>s within <code>struct</code>s <a class="header-anchor" href="#structs-within-structs" aria-label="Permalink to &quot;\`struct\`s within \`struct\`s&quot;">​</a></h2><p><code>struct</code>s may also be members of other <code>struct</code>s. For example,</p><div class="language-cpp vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">cpp</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#6A737D;">/**</span></span>
<span class="line"><span style="color:#6A737D;"> * A person&#39;s name.</span></span>
<span class="line"><span style="color:#6A737D;"> */</span></span>
<span class="line"><span style="color:#F97583;">struct</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">Name</span></span>
<span class="line"><span style="color:#E1E4E8;">{</span></span>
<span class="line"><span style="color:#E1E4E8;">    string first; </span></span>
<span class="line"><span style="color:#E1E4E8;">    string middle;</span></span>
<span class="line"><span style="color:#E1E4E8;">    string last;</span></span>
<span class="line"><span style="color:#E1E4E8;">};</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">/**</span></span>
<span class="line"><span style="color:#6A737D;"> * A US address.</span></span>
<span class="line"><span style="color:#6A737D;"> */</span></span>
<span class="line"><span style="color:#F97583;">struct</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">Address</span></span>
<span class="line"><span style="color:#E1E4E8;">{</span></span>
<span class="line"><span style="color:#E1E4E8;">    string streetAddress;</span></span>
<span class="line"><span style="color:#E1E4E8;">    string city;</span></span>
<span class="line"><span style="color:#E1E4E8;">    string state;</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#F97583;">int</span><span style="color:#E1E4E8;"> zip;</span></span>
<span class="line"><span style="color:#E1E4E8;">};</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">/**</span></span>
<span class="line"><span style="color:#6A737D;"> * Info record of a customer.</span></span>
<span class="line"><span style="color:#6A737D;"> */</span></span>
<span class="line"><span style="color:#F97583;">struct</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">Customer</span></span>
<span class="line"><span style="color:#E1E4E8;">{</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#F97583;">int</span><span style="color:#E1E4E8;"> id;</span></span>
<span class="line"><span style="color:#E1E4E8;">    Name name;</span></span>
<span class="line"><span style="color:#E1E4E8;">    Address shippingAddress;</span></span>
<span class="line"><span style="color:#E1E4E8;">    Address billingAddress;</span></span>
<span class="line"><span style="color:#E1E4E8;">};</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">Customer newCustomer;</span></span>
<span class="line"><span style="color:#E1E4E8;">newCustomer.id </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">2000</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#E1E4E8;">newCustomer.name.first </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&quot;James&quot;</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#E1E4E8;">newCustomer.name.last </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&quot;Kirk&quot;</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#E1E4E8;">newCustomer.shippingAddress.city </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&quot;South Carolina&quot;</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#6A737D;">//...</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#6A737D;">/**</span></span>
<span class="line"><span style="color:#6A737D;"> * A person&#39;s name.</span></span>
<span class="line"><span style="color:#6A737D;"> */</span></span>
<span class="line"><span style="color:#D73A49;">struct</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">Name</span></span>
<span class="line"><span style="color:#24292E;">{</span></span>
<span class="line"><span style="color:#24292E;">    string first; </span></span>
<span class="line"><span style="color:#24292E;">    string middle;</span></span>
<span class="line"><span style="color:#24292E;">    string last;</span></span>
<span class="line"><span style="color:#24292E;">};</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">/**</span></span>
<span class="line"><span style="color:#6A737D;"> * A US address.</span></span>
<span class="line"><span style="color:#6A737D;"> */</span></span>
<span class="line"><span style="color:#D73A49;">struct</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">Address</span></span>
<span class="line"><span style="color:#24292E;">{</span></span>
<span class="line"><span style="color:#24292E;">    string streetAddress;</span></span>
<span class="line"><span style="color:#24292E;">    string city;</span></span>
<span class="line"><span style="color:#24292E;">    string state;</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#D73A49;">int</span><span style="color:#24292E;"> zip;</span></span>
<span class="line"><span style="color:#24292E;">};</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">/**</span></span>
<span class="line"><span style="color:#6A737D;"> * Info record of a customer.</span></span>
<span class="line"><span style="color:#6A737D;"> */</span></span>
<span class="line"><span style="color:#D73A49;">struct</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">Customer</span></span>
<span class="line"><span style="color:#24292E;">{</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#D73A49;">int</span><span style="color:#24292E;"> id;</span></span>
<span class="line"><span style="color:#24292E;">    Name name;</span></span>
<span class="line"><span style="color:#24292E;">    Address shippingAddress;</span></span>
<span class="line"><span style="color:#24292E;">    Address billingAddress;</span></span>
<span class="line"><span style="color:#24292E;">};</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">Customer newCustomer;</span></span>
<span class="line"><span style="color:#24292E;">newCustomer.id </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">2000</span><span style="color:#24292E;">;</span></span>
<span class="line"><span style="color:#24292E;">newCustomer.name.first </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&quot;James&quot;</span><span style="color:#24292E;">;</span></span>
<span class="line"><span style="color:#24292E;">newCustomer.name.last </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&quot;Kirk&quot;</span><span style="color:#24292E;">;</span></span>
<span class="line"><span style="color:#24292E;">newCustomer.shippingAddress.city </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&quot;South Carolina&quot;</span><span style="color:#24292E;">;</span></span>
<span class="line"><span style="color:#6A737D;">//...</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br><span class="line-number">36</span><br><span class="line-number">37</span><br><span class="line-number">38</span><br></div></div><h2 id="summary" tabindex="-1">Summary <a class="header-anchor" href="#summary" aria-label="Permalink to &quot;Summary&quot;">​</a></h2><ul><li><code>struct</code>s can be members of other <code>struct</code>s</li><li><code>struct</code>s can have array members.</li><li>Arrays can be of a <code>struct</code> type.</li></ul>`,15),u=[c,i,y,E];function d(b,m,h,A,g,D){return a(),l("div",null,u)}const v=n(r,[["render",d]]);export{F as __pageData,v as default};
