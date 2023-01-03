"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[1817],{44993:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>d});var i=n(52983);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,i,o=function(e,t){if(null==e)return{};var n,i,o={},a=Object.keys(e);for(i=0;i<a.length;i++)n=a[i],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(i=0;i<a.length;i++)n=a[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var p=i.createContext({}),s=function(e){var t=i.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},c=function(e){var t=s(e.components);return i.createElement(p.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},u=i.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,p=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),u=s(n),d=o,y=u["".concat(p,".").concat(d)]||u[d]||m[d]||a;return n?i.createElement(y,r(r({ref:t},c),{},{components:n})):i.createElement(y,r({ref:t},c))}));function d(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,r=new Array(a);r[0]=u;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l.mdxType="string"==typeof e?e:o,r[1]=l;for(var s=2;s<a;s++)r[s]=n[s];return i.createElement.apply(null,r)}return i.createElement.apply(null,n)}u.displayName="MDXCreateElement"},2224:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>p,default:()=>d,frontMatter:()=>l,metadata:()=>s,toc:()=>m});var i=n(18249),o=(n(52983),n(44993));const a={toc:[{value:"Lazy Compilation for Dynamic Imports",id:"lazy-compilation-for-dynamic-imports",level:3},{value:"Lazy Compilation for Entires",id:"lazy-compilation-for-entires",level:3},{value:"Limitations",id:"limitations",level:3},{value:"Disable split chunks",id:"disable-split-chunks",level:4},{value:"Use proxy",id:"use-proxy",level:4}]};function r(e){let{components:t,...n}=e;return(0,o.kt)("wrapper",(0,i.Z)({},a,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Type:")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ts"},"type LazyCompilationOptions =\n  | boolean\n  | {\n      // Whether to enable lazy compilation for entries\n      entries?: boolean;\n      // Whether to enable lazy compilation for dynamic imports\n      imports?: boolean;\n    };\n")),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Default: ",(0,o.kt)("inlineCode",{parentName:"li"},"false"))),(0,o.kt)("p",null,"Used to enable the lazy compilation (i.e. compile on demand). When this config is enabled, Builder will compile entrypoints and dynamic imports only when they are used. It will improve the compilation startup time of the project."),(0,o.kt)("p",null,"Lazy compilation only takes effect in the development."),(0,o.kt)("h3",{id:"lazy-compilation-for-dynamic-imports"},"Lazy Compilation for Dynamic Imports"),(0,o.kt)("p",null,"Lazy compile async modules introduced by ",(0,o.kt)("a",{parentName:"p",href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/import"},"Dynamic Import"),":"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ts"},"export default {\n  experiments: {\n    lazyCompilation: {\n      imports: true,\n      entries: false,\n    },\n  },\n};\n")),(0,o.kt)("p",null,"When ",(0,o.kt)("inlineCode",{parentName:"p"},"imports")," option is enabled, all async modules will only be compiled when requested. If your project is a single-page application, and routing is split through Dynamic Import, there will be a significant effect of speeding up compilation."),(0,o.kt)("h3",{id:"lazy-compilation-for-entires"},"Lazy Compilation for Entires"),(0,o.kt)("p",null,"In addition to lazy compilation for async modules, you can also choose to lazily compile both entries and async modules at the same time."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ts"},"export default {\n  experiments: {\n    lazyCompilation: {\n      imports: true,\n      entries: true,\n    },\n  },\n};\n")),(0,o.kt)("p",null,"The above config can also be simplified to:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ts"},"export default {\n  experiments: {\n    lazyCompilation: true,\n  },\n};\n")),(0,o.kt)("p",null,"When ",(0,o.kt)("inlineCode",{parentName:"p"},"entries")," option is enabled, all pages will not be compiled when the compilation is started, and the page will be compiled only when you visit it."),(0,o.kt)("p",null,"When using lazy compilation for entries, there are some considerations:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Only work for multi-page applications, no work for single-page applications."),(0,o.kt)("li",{parentName:"ul"},"when you visit a page, there will be a white screen for a period of time due to waiting for the page to be compiled.")),(0,o.kt)("h3",{id:"limitations"},"Limitations"),(0,o.kt)("h4",{id:"disable-split-chunks"},"Disable split chunks"),(0,o.kt)("p",null,"When you enable lazy compilation, in order to ensure the compilation results, Builder will disable split chunks in the development. This will not affect the build results in the production, but will cause a difference between the build results of the development and production."),(0,o.kt)("h4",{id:"use-proxy"},"Use proxy"),(0,o.kt)("p",null,"Lazy Compilation relies on the local development server of webpack. When you proxy a domain name to localhost, Lazy Compilation will not work properly. Therefore, if you need to develop with proxy, please disable Lazy Compilation."))}r.isMDXComponent=!0;const l={title:"experiments.lazyCompilation",sidebar_label:"lazyCompilation"},p=void 0,s={unversionedId:"configure/app/experiments/lazy-compilation",id:"configure/app/experiments/lazy-compilation",title:"experiments.lazyCompilation",description:"This configuration is Modern.js Builder configuration, more detail can see experiments.lazyCompilation\u3002",source:"@site/../../packages/toolkit/main-doc/en/docusaurus-plugin-content-docs/current/configure/app/experiments/lazy-compilation.md",sourceDirName:"configure/app/experiments",slug:"/configure/app/experiments/lazy-compilation",permalink:"/v2/en/docs/configure/app/experiments/lazy-compilation",draft:!1,tags:[],version:"current",frontMatter:{title:"experiments.lazyCompilation",sidebar_label:"lazyCompilation"},sidebar:"configsAppSidebar",previous:{title:"sri",permalink:"/v2/en/docs/configure/app/security/sri"}},c={},m=[],u={toc:m};function d(e){let{components:t,...n}=e;return(0,o.kt)("wrapper",(0,i.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("admonition",{title:"BUILDER",type:"info"},(0,o.kt)("p",{parentName:"admonition"},"This configuration is Modern.js Builder configuration, more detail can see ",(0,o.kt)("a",{parentName:"p",href:"https://modernjs.dev/builder/zh/api/config-experiments.html#experiments-lazycompilation"},"experiments.lazyCompilation"),"\u3002")),(0,o.kt)(r,{mdxType:"Main"}))}d.isMDXComponent=!0}}]);