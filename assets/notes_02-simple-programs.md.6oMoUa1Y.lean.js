import{_ as r,D as d,c as s,j as t,I as i,w as o,a as e,a4 as a,o as n}from"./chunks/framework.BcwY1zTc.js";const W1=JSON.parse('{"title":"Creating and Understanding Simple C++ Programs","description":"","frontmatter":{},"headers":[],"relativePath":"notes/02-simple-programs.md","filePath":"notes/02-simple-programs.md","lastUpdated":1685366453000}'),T={name:"notes/02-simple-programs.md"},Q=t("h1",{id:"creating-and-understanding-simple-c-programs",tabindex:"-1"},[e("Creating and Understanding Simple C++ Programs "),t("a",{class:"header-anchor",href:"#creating-and-understanding-simple-c-programs","aria-label":'Permalink to "Creating and Understanding Simple C++ Programs"'},"​")],-1),p=t("p",null,[t("em",null,"Chapter 2")],-1),h=t("h2",{id:"basic-elements-of-c",tabindex:"-1"},[e("Basic Elements of C++ "),t("a",{class:"header-anchor",href:"#basic-elements-of-c","aria-label":'Permalink to "Basic Elements of C++"'},"​")],-1),c=t("p",null,"This video is part 1 of 3 in an overview of chapter 2. Each part is about 30 minutes.",-1),m=t("div",{class:"youtube"},[t("div",null,[t("iframe",{width:"853",height:"480",src:"https://www.youtube-nocookie.com/embed/LCK213jTsEM?rel=0&showinfo=0",frameborder:"0",allow:"autoplay; encrypted-media",allowfullscreen:"allowfullscreen"})])],-1),u=a("",18),g=t("p",null,[t("em",null,"Simple data types"),e(", which also have 3 categories:")],-1),k=a("",1),_=t("p",null,"Floating-point: decimal numbers. C++ uses scientific notation to represent real numbers (floating-point notation)",-1),b={tabindex:"0"},y=t("thead",null,[t("tr",null,[t("th",null,"Decimal"),t("th",{style:{"text-align":"center"}},"Scientific"),t("th",{style:{"text-align":"left"}},"C++ Floating-Point")])],-1),w=t("td",null,"75.924",-1),x={style:{"text-align":"center"}},f={class:"MathJax",jax:"SVG",style:{direction:"ltr",position:"relative"}},L={style:{overflow:"visible","min-height":"1px","min-width":"1px","vertical-align":"-0.05ex"},xmlns:"http://www.w3.org/2000/svg",width:"11.295ex",height:"2.005ex",role:"img",focusable:"false",viewBox:"0 -864 4992.6 886","aria-hidden":"true"},V=a("",1),E=[V],H=t("math",{xmlns:"http://www.w3.org/1998/Math/MathML"},[t("mn",null,"7.5924"),t("mi",null,"×"),t("msup",null,[t("mn",null,"10"),t("mn",null,"1")])],-1),v=t("td",{style:{"text-align":"left"}},"7.5924E1",-1),M=t("td",null,"0.18",-1),A={style:{"text-align":"center"}},D={class:"MathJax",jax:"SVG",style:{direction:"ltr",position:"relative"}},Z={style:{overflow:"visible","min-height":"1px","min-width":"1px","vertical-align":"-0.05ex"},xmlns:"http://www.w3.org/2000/svg",width:"9.146ex",height:"2.005ex",role:"img",focusable:"false",viewBox:"0 -864 4042.7 886","aria-hidden":"true"},C=a("",1),S=[C],F=t("math",{xmlns:"http://www.w3.org/1998/Math/MathML"},[t("mn",null,"1.8"),t("mi",null,"×"),t("msup",null,[t("mn",null,"10"),t("mrow",{"data-mjx-texclass":"ORD"},[t("mo",null,"−"),t("mn",null,"1")])])],-1),P=t("td",{style:{"text-align":"left"}},"1.8000E-1",-1),j=t("td",null,"0.0000453",-1),R={style:{"text-align":"center"}},I={class:"MathJax",jax:"SVG",style:{direction:"ltr",position:"relative"}},q={style:{overflow:"visible","min-height":"1px","min-width":"1px","vertical-align":"-0.05ex"},xmlns:"http://www.w3.org/2000/svg",width:"10.278ex",height:"2.005ex",role:"img",focusable:"false",viewBox:"0 -864 4542.7 886","aria-hidden":"true"},B=a("",1),N=[B],O=t("math",{xmlns:"http://www.w3.org/1998/Math/MathML"},[t("mn",null,"4.53"),t("mi",null,"×"),t("msup",null,[t("mn",null,"10"),t("mrow",{"data-mjx-texclass":"ORD"},[t("mo",null,"−"),t("mn",null,"5")])])],-1),G=t("td",{style:{"text-align":"left"}},"4.5300E-5",-1),z=t("td",null,"-1.482",-1),J={style:{"text-align":"center"}},U={class:"MathJax",jax:"SVG",style:{direction:"ltr",position:"relative"}},W={style:{overflow:"visible","min-height":"1px","min-width":"1px","vertical-align":"-0.186ex"},xmlns:"http://www.w3.org/2000/svg",width:"11.924ex",height:"2.14ex",role:"img",focusable:"false",viewBox:"0 -864 5270.6 946","aria-hidden":"true"},X=a("",1),K=[X],$=t("math",{xmlns:"http://www.w3.org/1998/Math/MathML"},[t("mo",null,"−"),t("mn",null,"1.482"),t("mi",null,"×"),t("msup",null,[t("mn",null,"10"),t("mn",null,"0")])],-1),Y=t("td",{style:{"text-align":"left"}},"-1.482E0",-1),t1=t("td",null,"7800.0",-1),e1={style:{"text-align":"center"}},a1={class:"MathJax",jax:"SVG",style:{direction:"ltr",position:"relative"}},s1={style:{overflow:"visible","min-height":"1px","min-width":"1px","vertical-align":"-0.05ex"},xmlns:"http://www.w3.org/2000/svg",width:"7.902ex",height:"2.003ex",role:"img",focusable:"false",viewBox:"0 -863.3 3492.6 885.3","aria-hidden":"true"},n1=a("",1),l1=[n1],i1=t("math",{xmlns:"http://www.w3.org/1998/Math/MathML"},[t("mn",null,"7.8"),t("mi",null,"×"),t("msup",null,[t("mn",null,"10"),t("mn",null,"3")])],-1),o1=t("td",{style:{"text-align":"left"}},"7.8000E3",-1),r1={tabindex:"0"},d1=t("thead",null,[t("tr",null,[t("th",null,"Data Type"),t("th",null,"Values"),t("th",null,"Storage (in bytes)")])],-1),T1=t("td",null,[t("code",null,"float")],-1),Q1={class:"MathJax",jax:"SVG",style:{direction:"ltr",position:"relative"}},p1={style:{overflow:"visible","min-height":"1px","min-width":"1px","vertical-align":"-0.05ex"},xmlns:"http://www.w3.org/2000/svg",width:"8.702ex",height:"2.005ex",role:"img",focusable:"false",viewBox:"0 -864 3846.1 886","aria-hidden":"true"},h1=a("",1),c1=[h1],m1=t("math",{xmlns:"http://www.w3.org/1998/Math/MathML"},[t("mn",null,"3.4"),t("mi",null,"×"),t("msup",null,[t("mn",null,"10"),t("mrow",{"data-mjx-texclass":"ORD"},[t("mn",null,"38")])])],-1),u1={class:"MathJax",jax:"SVG",style:{direction:"ltr",position:"relative"}},g1={style:{overflow:"visible","min-height":"1px","min-width":"1px","vertical-align":"-0.05ex"},xmlns:"http://www.w3.org/2000/svg",width:"8.702ex",height:"2.005ex",role:"img",focusable:"false",viewBox:"0 -864 3846.1 886","aria-hidden":"true"},k1=a("",1),_1=[k1],b1=t("math",{xmlns:"http://www.w3.org/1998/Math/MathML"},[t("mn",null,"3.4"),t("mi",null,"×"),t("msup",null,[t("mn",null,"10"),t("mrow",{"data-mjx-texclass":"ORD"},[t("mn",null,"38")])])],-1),y1=t("td",null,"4",-1),w1=t("td",null,[t("code",null,"double")],-1),x1={class:"MathJax",jax:"SVG",style:{direction:"ltr",position:"relative"}},f1={style:{overflow:"visible","min-height":"1px","min-width":"1px","vertical-align":"-0.05ex"},xmlns:"http://www.w3.org/2000/svg",width:"9.501ex",height:"2.005ex",role:"img",focusable:"false",viewBox:"0 -864 4199.7 886","aria-hidden":"true"},L1=a("",1),V1=[L1],E1=t("math",{xmlns:"http://www.w3.org/1998/Math/MathML"},[t("mn",null,"1.7"),t("mi",null,"×"),t("msup",null,[t("mn",null,"10"),t("mrow",{"data-mjx-texclass":"ORD"},[t("mn",null,"308")])])],-1),H1={class:"MathJax",jax:"SVG",style:{direction:"ltr",position:"relative"}},v1={style:{overflow:"visible","min-height":"1px","min-width":"1px","vertical-align":"-0.05ex"},xmlns:"http://www.w3.org/2000/svg",width:"9.501ex",height:"2.005ex",role:"img",focusable:"false",viewBox:"0 -864 4199.7 886","aria-hidden":"true"},M1=a("",1),A1=[M1],D1=t("math",{xmlns:"http://www.w3.org/1998/Math/MathML"},[t("mn",null,"1.7"),t("mi",null,"×"),t("msup",null,[t("mn",null,"10"),t("mrow",{"data-mjx-texclass":"ORD"},[t("mn",null,"308")])])],-1),Z1=t("td",null,"8",-1),C1=t("p",null,"Minimum and maximum values of data types are system dependent.",-1),S1=t("ul",null,[t("li",null,[e("Precision: maximum number of significant digits "),t("ul",null,[t("li",null,[t("em",null,"float"),e(" values are called single precision")]),t("li",null,[t("em",null,"double"),e(" values are called double precision")])])])],-1),F1=t("li",null,[t("p",null,[t("a",{href:"./07-enums"},"Enumeration types"),e(": user-defined data types")])],-1),P1=t("li",null,[t("p",null,[t("a",{href:"./09-structs-intro"},"Structured data types"),e(": a collection of a fixed number of components (called members), that are accessed by name.")])],-1),j1=t("li",null,[t("p",null,[t("em",null,"Pointers"),e(" - Not covered in the course.")])],-1),R1=a("",6),I1=t("div",{class:"youtube"},[t("div",null,[t("iframe",{width:"853",height:"480",src:"https://www.youtube-nocookie.com/embed/fcEiJ0EVtmY?rel=0&showinfo=0",frameborder:"0",allow:"autoplay; encrypted-media",allowfullscreen:"allowfullscreen"})])],-1);function q1(B1,N1,O1,G1,z1,J1){const l=d("mjx-assistive-mml");return n(),s("div",null,[Q,p,h,c,m,u,t("ol",null,[t("li",null,[g,t("ol",null,[k,t("li",null,[_,t("table",b,[y,t("tbody",null,[t("tr",null,[w,t("td",x,[t("mjx-container",f,[(n(),s("svg",L,E)),i(l,{unselectable:"on",display:"inline",style:{top:"0px",left:"0px",clip:"rect(1px, 1px, 1px, 1px)","-webkit-touch-callout":"none","-webkit-user-select":"none","-khtml-user-select":"none","-moz-user-select":"none","-ms-user-select":"none","user-select":"none",position:"absolute",padding:"1px 0px 0px 0px",border:"0px",display:"block",width:"auto",overflow:"hidden"}},{default:o(()=>[H]),_:1})])]),v]),t("tr",null,[M,t("td",A,[t("mjx-container",D,[(n(),s("svg",Z,S)),i(l,{unselectable:"on",display:"inline",style:{top:"0px",left:"0px",clip:"rect(1px, 1px, 1px, 1px)","-webkit-touch-callout":"none","-webkit-user-select":"none","-khtml-user-select":"none","-moz-user-select":"none","-ms-user-select":"none","user-select":"none",position:"absolute",padding:"1px 0px 0px 0px",border:"0px",display:"block",width:"auto",overflow:"hidden"}},{default:o(()=>[F]),_:1})])]),P]),t("tr",null,[j,t("td",R,[t("mjx-container",I,[(n(),s("svg",q,N)),i(l,{unselectable:"on",display:"inline",style:{top:"0px",left:"0px",clip:"rect(1px, 1px, 1px, 1px)","-webkit-touch-callout":"none","-webkit-user-select":"none","-khtml-user-select":"none","-moz-user-select":"none","-ms-user-select":"none","user-select":"none",position:"absolute",padding:"1px 0px 0px 0px",border:"0px",display:"block",width:"auto",overflow:"hidden"}},{default:o(()=>[O]),_:1})])]),G]),t("tr",null,[z,t("td",J,[t("mjx-container",U,[(n(),s("svg",W,K)),i(l,{unselectable:"on",display:"inline",style:{top:"0px",left:"0px",clip:"rect(1px, 1px, 1px, 1px)","-webkit-touch-callout":"none","-webkit-user-select":"none","-khtml-user-select":"none","-moz-user-select":"none","-ms-user-select":"none","user-select":"none",position:"absolute",padding:"1px 0px 0px 0px",border:"0px",display:"block",width:"auto",overflow:"hidden"}},{default:o(()=>[$]),_:1})])]),Y]),t("tr",null,[t1,t("td",e1,[t("mjx-container",a1,[(n(),s("svg",s1,l1)),i(l,{unselectable:"on",display:"inline",style:{top:"0px",left:"0px",clip:"rect(1px, 1px, 1px, 1px)","-webkit-touch-callout":"none","-webkit-user-select":"none","-khtml-user-select":"none","-moz-user-select":"none","-ms-user-select":"none","user-select":"none",position:"absolute",padding:"1px 0px 0px 0px",border:"0px",display:"block",width:"auto",overflow:"hidden"}},{default:o(()=>[i1]),_:1})])]),o1])])]),t("table",r1,[d1,t("tbody",null,[t("tr",null,[T1,t("td",null,[e("-"),t("mjx-container",Q1,[(n(),s("svg",p1,c1)),i(l,{unselectable:"on",display:"inline",style:{top:"0px",left:"0px",clip:"rect(1px, 1px, 1px, 1px)","-webkit-touch-callout":"none","-webkit-user-select":"none","-khtml-user-select":"none","-moz-user-select":"none","-ms-user-select":"none","user-select":"none",position:"absolute",padding:"1px 0px 0px 0px",border:"0px",display:"block",width:"auto",overflow:"hidden"}},{default:o(()=>[m1]),_:1})]),e(" to "),t("mjx-container",u1,[(n(),s("svg",g1,_1)),i(l,{unselectable:"on",display:"inline",style:{top:"0px",left:"0px",clip:"rect(1px, 1px, 1px, 1px)","-webkit-touch-callout":"none","-webkit-user-select":"none","-khtml-user-select":"none","-moz-user-select":"none","-ms-user-select":"none","user-select":"none",position:"absolute",padding:"1px 0px 0px 0px",border:"0px",display:"block",width:"auto",overflow:"hidden"}},{default:o(()=>[b1]),_:1})])]),y1]),t("tr",null,[w1,t("td",null,[e("–"),t("mjx-container",x1,[(n(),s("svg",f1,V1)),i(l,{unselectable:"on",display:"inline",style:{top:"0px",left:"0px",clip:"rect(1px, 1px, 1px, 1px)","-webkit-touch-callout":"none","-webkit-user-select":"none","-khtml-user-select":"none","-moz-user-select":"none","-ms-user-select":"none","user-select":"none",position:"absolute",padding:"1px 0px 0px 0px",border:"0px",display:"block",width:"auto",overflow:"hidden"}},{default:o(()=>[E1]),_:1})]),e(" to "),t("mjx-container",H1,[(n(),s("svg",v1,A1)),i(l,{unselectable:"on",display:"inline",style:{top:"0px",left:"0px",clip:"rect(1px, 1px, 1px, 1px)","-webkit-touch-callout":"none","-webkit-user-select":"none","-khtml-user-select":"none","-moz-user-select":"none","-ms-user-select":"none","user-select":"none",position:"absolute",padding:"1px 0px 0px 0px",border:"0px",display:"block",width:"auto",overflow:"hidden"}},{default:o(()=>[D1]),_:1})])]),Z1])])]),C1,S1]),F1])]),P1,j1]),R1,I1])}const X1=r(T,[["render",q1]]);export{W1 as __pageData,X1 as default};