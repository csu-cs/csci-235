import{_ as o,o as l,c as a,z as e,a as i,R as t}from"./chunks/framework.e4387458.js";const r="/csci-235/assets/Flowchart_Terminal.0e0f1d7b.svg",s="/csci-235/assets/Flowchart_Line.81a460fb.svg",n="/csci-235/assets/Flowchart_IO.607bd96d.svg",c="/csci-235/assets/Flowchart_Process.5c830a30.svg",m="/csci-235/assets/Flowchart_Predefined_Process.b23fe17e.svg",d="/csci-235/assets/Flowchart_Decision.9696b11d.svg",h="/csci-235/assets/Flowchart_Connector.7bfe2230.svg",g="/csci-235/assets/Flowchart_Page_Connector.35ade43f.svg",p="/csci-235/assets/DevelopmentProcess.b65cdc47.svg",V=JSON.parse('{"title":"Algorithms and Problem Solving","description":"","frontmatter":{},"headers":[],"relativePath":"notes/01-algorithms.md","filePath":"notes/01-algorithms.md","lastUpdated":1685219531000}'),u={name:"notes/01-algorithms.md"},f=e("h1",{id:"algorithms-and-problem-solving",tabindex:"-1"},[i("Algorithms and Problem Solving "),e("a",{class:"header-anchor",href:"#algorithms-and-problem-solving","aria-label":'Permalink to "Algorithms and Problem Solving"'},"​")],-1),b=e("p",null,[e("em",null,"Chapter 1")],-1),_=e("h2",{id:"algorithms-and-flowcharts-designing-a-program",tabindex:"-1"},[i("Algorithms and Flowcharts (Designing a Program) "),e("a",{class:"header-anchor",href:"#algorithms-and-flowcharts-designing-a-program","aria-label":'Permalink to "Algorithms and Flowcharts (Designing a Program)"'},"​")],-1),y=e("p",null,"Reference this presentation for your first homework.",-1),w=e("div",{class:"youtube"},[e("div",null,[e("iframe",{width:"853",height:"480",src:"https://www.youtube-nocookie.com/embed/q63KRVnK5To?rel=0&showinfo=0",frameborder:"0",gesture:"media",allow:"encrypted-media",allowfullscreen:"allowfullscreen"})])],-1),x=t('<h3 id="five-simple-ideas-used-to-create-all-programs" tabindex="-1">Five Simple Ideas Used to Create All Programs <a class="header-anchor" href="#five-simple-ideas-used-to-create-all-programs" aria-label="Permalink to &quot;Five Simple Ideas Used to Create All Programs&quot;">​</a></h3><ol><li>Sequential Processing <ul><li>A list of instructions performed in order</li></ul></li><li>Conditional Execution <ul><li>If…, then…, else…</li></ul></li><li>Looping or Iteration <ul><li>Repeated behavior (i.e., while there are cookies on the plate, keep eating cookies)</li></ul></li><li>Problem Decomposition (i.e., stepwise refinement, top-down design) <ul><li>Breaking the problem into sub-problems that can be solved independently.</li></ul></li><li>Functions <ul><li>A set of instructions that return a single result (answer a question).</li></ul></li></ol><h3 id="complexity" tabindex="-1">Complexity <a class="header-anchor" href="#complexity" aria-label="Permalink to &quot;Complexity&quot;">​</a></h3><p>Most computers only really “understand” about 100 different instructions.</p><p>Powerful applications take advantage of the extreme number of possible instruction combinations.</p><p>Chess is a good analogy:</p><ul><li>6 types of pieces, each moves in a simple pattern.</li><li>Possible/playable chess games (assuming an avg. game has 30 moves) is 4,670,033.</li></ul><h3 id="algorithms" tabindex="-1">Algorithms <a class="header-anchor" href="#algorithms" aria-label="Permalink to &quot;Algorithms&quot;">​</a></h3><p>An <em>algorithm</em> is A step-by-step list of instructions for solving a problem. The solution must be determined in a <em>finite</em> amount of time.</p><p>Algorithms can be expressed in many kinds of notations (e.g., natural language, psedocode, flowcharts, etc.)</p><h3 id="flowcharts" tabindex="-1">Flowcharts <a class="header-anchor" href="#flowcharts" aria-label="Permalink to &quot;Flowcharts&quot;">​</a></h3><p>A flowchart is one way to representation an algorithm and uses the following symbols.</p><table><thead><tr><th style="text-align:right;">Symbol</th><th style="text-align:center;">Name</th><th style="text-align:left;">Description</th></tr></thead><tbody><tr><td style="text-align:right;"><img src="'+r+'" alt="Terminal"></td><td style="text-align:center;">Terminal</td><td style="text-align:left;">Indicates the beginning and ending of an algorithm.</td></tr><tr><td style="text-align:right;"><img src="'+s+'" alt="Line"></td><td style="text-align:center;">Flow Line</td><td style="text-align:left;">Shows the order of operation by connecting one symbol to the next symbol.</td></tr><tr><td style="text-align:right;"><img src="'+n+'" alt="Input/Output"></td><td style="text-align:center;">Input/Output</td><td style="text-align:left;">An action where either input is received from outside the program (from the user, a text file, etc.) or the program is outputting information (on the screen, to a file, to a printer, etc.)</td></tr><tr><td style="text-align:right;"><img src="'+c+'" alt="Process"></td><td style="text-align:center;">Process</td><td style="text-align:left;">The execution of any mathematical operation or other built-in instruction(s).</td></tr><tr><td style="text-align:right;"><img src="'+m+'" alt="Call-Process"></td><td style="text-align:center;">Call-Process</td><td style="text-align:left;">An action defined elsewhere (in another flowchart).</td></tr><tr><td style="text-align:right;"><img src="'+d+'" alt="Decision"></td><td style="text-align:center;">Decision</td><td style="text-align:left;">An action where a decision is made where the outcome is either true or false (Boolean).</td></tr><tr><td style="text-align:right;"><img src="'+h+'" alt="Flow Connector"></td><td style="text-align:center;">Flow Connector</td><td style="text-align:left;">Multiple arrows converge at a flow connector.</td></tr><tr><td style="text-align:right;"><img src="'+g+'" alt="Off-Page Connector"></td><td style="text-align:center;">Off-Page Connector</td><td style="text-align:left;">Indicates that the flowchart continues on another page.</td></tr></tbody></table><h2 id="creating-solutions" tabindex="-1">Creating Solutions <a class="header-anchor" href="#creating-solutions" aria-label="Permalink to &quot;Creating Solutions&quot;">​</a></h2>',14),P=e("div",{class:"youtube"},[e("div",null,[e("iframe",{width:"853",height:"480",src:"https://www.youtube-nocookie.com/embed/oBDncytnVP4?rel=0&showinfo=0",frameborder:"0",allow:"accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture",allowfullscreen:"allowfullscreen"})])],-1),v=t('<ul><li><em>Algorithm</em><ul><li>Step-by-step problem-solving process</li><li>In finite amount of time</li></ul></li><li><em>Programming</em> is a process of problem solving.</li></ul><h3 id="programming-with-the-problem-analysis–coding–execution-cycle" tabindex="-1">Programming with the Problem Analysis–Coding–Execution Cycle <a class="header-anchor" href="#programming-with-the-problem-analysis–coding–execution-cycle" aria-label="Permalink to &quot;Programming with the Problem Analysis–Coding–Execution Cycle&quot;">​</a></h3><figure><img src="'+p+'" alt="Development Process"><figcaption>Development Process</figcaption></figure><ol><li><p><em>Analyze</em> the problem</p><ol><li>Thoroughly understand the problem and all requirements <ul><li>Does program require user interaction?</li><li>Does program manipulate data?</li><li>What is the output?</li></ul></li><li>If the problem is complex, divide it into subproblems <ul><li>Analyze and design <em>algorithms</em> for each subproblem</li></ul></li><li>Check the correctness of algorithm <ul><li>Can test using sample data</li><li>Some mathematical analysis might be required</li></ul></li></ol></li><li><p><em>Implement</em> the algorithm</p><ol><li>Once the algorithm is designed and correctness verified, write the equivalent code in high-level language. <ul><li>Enter the program using text editor. This is called the <em>implementation</em> of the algorithm.</li></ul></li><li>Compile code</li><li>If compiler generates errors <ul><li>Look at code and remove errors</li><li>Run code again through compiler</li></ul></li><li>If there are no syntax errors, the compiler generates equivalent machine code. <ul><li>The compiler guarantees that the program follows the rules of the language. It does <strong>not</strong> guarantee that the program will run correctly.</li></ul></li><li>Linker links machine code with system resources</li></ol></li><li><p>Execution (run the compiles program)</p><ol><li>Once compiled and linked, the loader can place program into main memory for execution.</li><li>The final step is to execute the program.</li></ol></li><li><p><em>Maintenance</em></p><ul><li>Use and modify the program if the problem domain changes.</li></ul></li></ol><h2 id="programming-methods" tabindex="-1">Programming Methods <a class="header-anchor" href="#programming-methods" aria-label="Permalink to &quot;Programming Methods&quot;">​</a></h2>',5),A=e("div",{class:"youtube"},[e("div",null,[e("iframe",{width:"853",height:"480",src:"https://www.youtube-nocookie.com/embed/ZJLURiDaokQ?rel=0&showinfo=0",frameborder:"0",allow:"accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture",allowfullscreen:"allowfullscreen"})])],-1),k=t('<p>Two popular approaches to programming design</p><ol><li>Structured (e.g., Procedural)</li><li>Object-oriented</li></ol><p>There are <a href="https://en.wikipedia.org/wiki/Comparison_of_programming_paradigms" target="_blank" rel="noreferrer">many other programming paradigms</a>.</p><h3 id="structured-programming" tabindex="-1">Structured Programming <a class="header-anchor" href="#structured-programming" aria-label="Permalink to &quot;Structured Programming&quot;">​</a></h3><p><em>Procedural design</em> is a subset of structured design:</p><ul><li>Dividing a problem into smaller subproblems</li><li>A solution to a subproblem is a “module” or “procedure” and is simply a series of computation steps to be carried out.</li><li>Procedural design approach is also called: <ul><li>Top-down (or bottom-up) design</li><li>Stepwise refinement</li><li>Modular programming</li></ul></li></ul><h3 id="object-oriented-programming" tabindex="-1">Object-Oriented Programming <a class="header-anchor" href="#object-oriented-programming" aria-label="Permalink to &quot;Object-Oriented Programming&quot;">​</a></h3><p><em>Object-oriented design</em>:</p><ul><li>Identify components called objects.</li><li>Determine how objects interact with each other</li><li>Specify relevant data and possible operations to be performed on that data.</li><li>Each object consists of data and operations on that data.</li><li>An object combines data and operations on the data into a single unit</li><li>A language that supports object-oriented design is called an object-oriented programming (OOP) language</li><li>Must learn how to represent data in computer memory, how to manipulate data, and how to implement operations.</li><li>C++ was designed to support object-oriented programming.</li><li>Object-oriented design is used with structured design.</li></ul>',9),C=[f,b,_,y,w,x,P,v,A,k];function T(S,q,I,D,F,O){return l(),a("div",null,C)}const E=o(u,[["render",T]]);export{V as __pageData,E as default};