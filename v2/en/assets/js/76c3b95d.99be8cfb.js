"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[2823],{44993:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>m});var o=n(52983);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,o,r=function(e,t){if(null==e)return{};var n,o,r={},a=Object.keys(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=o.createContext({}),u=function(e){var t=o.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=u(e.components);return o.createElement(l.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},d=o.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,l=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),d=u(n),m=r,f=d["".concat(l,".").concat(m)]||d[m]||c[m]||a;return n?o.createElement(f,i(i({ref:t},p),{},{components:n})):o.createElement(f,i({ref:t},p))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,i=new Array(a);i[0]=d;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:r,i[1]=s;for(var u=2;u<a;u++)i[u]=n[u];return o.createElement.apply(null,i)}return o.createElement.apply(null,n)}d.displayName="MDXCreateElement"},3849:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>c,frontMatter:()=>a,metadata:()=>s,toc:()=>u});var o=n(18249),r=(n(52983),n(44993));const a={title:"Introduce",sidebar_position:1},i=void 0,s={unversionedId:"tutorials/foundations/introduction",id:"tutorials/foundations/introduction",title:"Introduce",description:"Welcome to Modern.js tutorials!",source:"@site/../../packages/toolkit/main-doc/en/docusaurus-plugin-content-docs/current/tutorials/foundations/introduction.md",sourceDirName:"tutorials/foundations",slug:"/tutorials/foundations/introduction",permalink:"/v2/en/docs/tutorials/foundations/introduction",draft:!1,tags:[],version:"current",sidebarPosition:1,frontMatter:{title:"Introduce",sidebar_position:1},sidebar:"tutorialsSidebar",next:{title:"\u521b\u5efa\u9879\u76ee",permalink:"/v2/en/docs/tutorials/first-app/c01-start"}},l={},u=[{value:"What is Modern.js",id:"what-is-modernjs",level:2},{value:"Why Modern.js",id:"why-modernjs",level:2},{value:"Next",id:"next",level:2}],p={toc:u};function c(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,o.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"Welcome to Modern.js tutorials!"),(0,r.kt)("p",null,"After reading this section, you will have an initial understanding of Modern.js and use Modern.js to create your first application."),(0,r.kt)("admonition",{title:"Follow",type:"note"},(0,r.kt)("p",{parentName:"admonition"},"Join our Lark group to ask questions and learn about the latest news.")),(0,r.kt)("h2",{id:"what-is-modernjs"},"What is Modern.js"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Modern.js")," is a progressive modern web development framework based on React."),(0,r.kt)("p",null,"The framework has a variety of built-in out-of-the-box tools, excellent build performance, zero-configuration rendering paradigm switching, and integrated API calls. Starting from three solutions (Application solutions, Module solutions, Monorepo solutions), it supports front-end research and development of a complete period."),(0,r.kt)("p",null,"Modern.js is ByteDance's underlying front-end framework, which has directly or indirectly served thousands of applications, including middle and back-end, PC Web, H5 and other application scenarios. The framework covers a full life cycle, has a complete plugin system, and provides a high degree of customization capabilities. Support custom solutions exclusive to business lines through generator plugin, customize various functional extensions and business requirements, and help developers build applications faster."),(0,r.kt)("h2",{id:"why-modernjs"},"Why Modern.js"),(0,r.kt)("p",null,"Modern.js can provide developers with the ultimate ",(0,r.kt)("strong",{parentName:"p"},"Development Experience"),"\uff0cmake the app better ",(0,r.kt)("strong",{parentName:"p"},"User Experience"),"\u3002"),(0,r.kt)("p",null,"In the process of developing React applications, developers often need to design implementations for certain functions, or use other libraries and frameworks to solve these problems\u3002"),(0,r.kt)("p",null,"Modern.js support all the configuration and tools required by React applications, and have built-in ",(0,r.kt)("strong",{parentName:"p"},"additional functions and optimizations"),". Developers can use React to build the UI of the application, and then gradually adopt Modern.js functions to solve common application requirements, such as routing, data fetch, state management, etc."),(0,r.kt)("p",null,"It mainly contains the following features:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"\ud83e\ude9c ",(0,r.kt)("strong",{parentName:"li"},"Progressive"),"\uff1aCreate projects with the most streamlined templates, gradually turn on plugin capabilities through generators, and customize solutions."),(0,r.kt)("li",{parentName:"ul"},"\ud83c\udfe0 ",(0,r.kt)("strong",{parentName:"li"},"Integration"),"\uff1aThe development is unique to the production environment Web Server, CSR and SSR are isomorphic development, and the function as the API service call."),(0,r.kt)("li",{parentName:"ul"},"\ud83d\udce6 ",(0,r.kt)("strong",{parentName:"li"},"Out Of The Box"),"\uff1aDefault TS support, built-in build core, ESLint, debugging tools, full functionality can be tested."),(0,r.kt)("li",{parentName:"ul"},"\ud83c\udf0f ",(0,r.kt)("strong",{parentName:"li"},"Ecology"),"\uff1aSelf-developed state management, micro frontend, module packaging, Monorepo solution and other peripheral requirements."),(0,r.kt)("li",{parentName:"ul"},"\ud83d\udd78 ",(0,r.kt)("strong",{parentName:"li"},"Routing Modes"),"\uff1aContains controlled routing, routing based on file conventions (nested routing), configurable routing, etc\u3002"),(0,r.kt)("li",{parentName:"ul"},"\ud83d\ude80 ",(0,r.kt)("strong",{parentName:"li"},"Independently Build Core"),"\uff1aSupport a variety of packaging tools, deep optimization bundle.")),(0,r.kt)("h2",{id:"next"},"Next"),(0,r.kt)("p",null,"If you want to know how to use Modern.js, you can try ",(0,r.kt)("a",{parentName:"p",href:"/docs/tutorials/first-app/c01-start"},"Create your first app"),", or read ",(0,r.kt)("a",{parentName:"p",href:"/docs/guides/get-started/quick-start"},"Guide"),"."))}c.isMDXComponent=!0}}]);