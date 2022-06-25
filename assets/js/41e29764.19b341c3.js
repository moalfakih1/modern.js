"use strict";(self.webpackChunk_modern_js_website=self.webpackChunk_modern_js_website||[]).push([[5575],{54852:(e,t,n)=>{n.d(t,{Zo:()=>s,kt:()=>d});var r=n(49231);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function p(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?p(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):p(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},p=Object.keys(e);for(r=0;r<p.length;r++)n=p[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var p=Object.getOwnPropertySymbols(e);for(r=0;r<p.length;r++)n=p[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=r.createContext({}),c=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},s=function(e){var t=c(e.components);return r.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,p=e.originalType,l=e.parentName,s=o(e,["components","mdxType","originalType","parentName"]),m=c(n),d=a,f=m["".concat(l,".").concat(d)]||m[d]||u[d]||p;return n?r.createElement(f,i(i({ref:t},s),{},{components:n})):r.createElement(f,i({ref:t},s))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var p=n.length,i=new Array(p);i[0]=m;var o={};for(var l in t)hasOwnProperty.call(t,l)&&(o[l]=t[l]);o.originalType=e,o.mdxType="string"==typeof e?e:a,i[1]=o;for(var c=2;c<p;c++)i[c]=n[c];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},91149:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>u,frontMatter:()=>p,metadata:()=>o,toc:()=>c});var r=n(91528),a=(n(49231),n(54852));const p={sidebar_position:10},i="createApp",o={unversionedId:"apis/runtime/app/create-app",id:"apis/runtime/app/create-app",title:"createApp",description:"\u7528\u4e8e\u521b\u5efa\u81ea\u5b9a\u4e49\u5165\u53e3\uff0c\u5b9a\u5236\u63d2\u4ef6\u3002",source:"@site/docs/apis/runtime/app/create-app.md",sourceDirName:"apis/runtime/app",slug:"/apis/runtime/app/create-app",permalink:"/docs/apis/runtime/app/create-app",tags:[],version:"current",sidebarPosition:10,frontMatter:{sidebar_position:10},sidebar:"apisSidebar",previous:{title:"bootstrap",permalink:"/docs/apis/runtime/app/bootstrap"},next:{title:"defineConfig",permalink:"/docs/apis/runtime/app/define-config"}},l={},c=[{value:"API",id:"api",level:2},{value:"\u53c2\u6570",id:"\u53c2\u6570",level:3},{value:"\u793a\u4f8b",id:"\u793a\u4f8b",level:2},{value:"\u521b\u5efa\u81ea\u5b9a\u4e49\u5165\u53e3",id:"\u521b\u5efa\u81ea\u5b9a\u4e49\u5165\u53e3",level:3},{value:"\u5b9a\u5236\u63d2\u4ef6",id:"\u5b9a\u5236\u63d2\u4ef6",level:3}],s={toc:c};function u(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,r.Z)({},s,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"createapp"},"createApp"),(0,a.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,a.kt)("div",{parentName:"div",className:"admonition-heading"},(0,a.kt)("h5",{parentName:"div"},(0,a.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,a.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,a.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"\u8865\u5145\u4fe1\u606f")),(0,a.kt)("div",{parentName:"div",className:"admonition-content"},(0,a.kt)("p",{parentName:"div"},"\u7528\u4e8e\u521b\u5efa\u81ea\u5b9a\u4e49\u5165\u53e3\uff0c\u5b9a\u5236\u63d2\u4ef6\u3002"),(0,a.kt)("pre",{parentName:"div"},(0,a.kt)("code",{parentName:"pre",className:"language-ts"},"import { createApp } from '@modern-js/runtime';\n")))),(0,a.kt)("h2",{id:"api"},"API"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"createApp(options) => React.ComponentType<any>")),(0,a.kt)("h3",{id:"\u53c2\u6570"},"\u53c2\u6570"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"options\uff1a",(0,a.kt)("inlineCode",{parentName:"li"},"object"),"\uff0c\u53ef\u9009\u7684\u53c2\u6570\u3002",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"[plugins]","\uff1a",(0,a.kt)("inlineCode",{parentName:"li"},"Plugin[]"),"\uff0c\u81ea\u5b9a\u4e49\u7684\u63d2\u4ef6\u6269\u5c55\u3002")))),(0,a.kt)("h2",{id:"\u793a\u4f8b"},"\u793a\u4f8b"),(0,a.kt)("h3",{id:"\u521b\u5efa\u81ea\u5b9a\u4e49\u5165\u53e3"},"\u521b\u5efa\u81ea\u5b9a\u4e49\u5165\u53e3"),(0,a.kt)("p",null,"\u8be6\u89c1 ",(0,a.kt)("a",{parentName:"p",href:"/docs/apis/runtime/app/bootstrap"},(0,a.kt)("inlineCode",{parentName:"a"},"bootstrap")),"\u3002"),(0,a.kt)("h3",{id:"\u5b9a\u5236\u63d2\u4ef6"},"\u5b9a\u5236\u63d2\u4ef6"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts"},"import { createApp } from '@modern-js/runtime';\n\nfunction App() {\n  return <div>app</div>;\n}\n\nexport default createApp({\n  plugins: [\n    router({}),\n    state({\n      plugins: [autoActions(), effects()]\n    })\n  ]\n})(App)\n\n")))}u.isMDXComponent=!0}}]);