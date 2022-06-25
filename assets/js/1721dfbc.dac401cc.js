"use strict";(self.webpackChunk_modern_js_website=self.webpackChunk_modern_js_website||[]).push([[5415],{54852:(e,t,n)=>{n.d(t,{Zo:()=>m,kt:()=>u});var a=n(49231);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var p=a.createContext({}),d=function(e){var t=a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},m=function(e){var t=d(e.components);return a.createElement(p.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},c=a.forwardRef((function(e,t){var n=e.components,o=e.mdxType,l=e.originalType,p=e.parentName,m=i(e,["components","mdxType","originalType","parentName"]),c=d(n),u=o,b=c["".concat(p,".").concat(u)]||c[u]||s[u]||l;return n?a.createElement(b,r(r({ref:t},m),{},{components:n})):a.createElement(b,r({ref:t},m))}));function u(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var l=n.length,r=new Array(l);r[0]=c;var i={};for(var p in t)hasOwnProperty.call(t,p)&&(i[p]=t[p]);i.originalType=e,i.mdxType="string"==typeof e?e:o,r[1]=i;for(var d=2;d<l;d++)r[d]=n[d];return a.createElement.apply(null,r)}return a.createElement.apply(null,n)}c.displayName="MDXCreateElement"},37049:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>r,default:()=>s,frontMatter:()=>l,metadata:()=>i,toc:()=>d});var a=n(91528),o=(n(49231),n(54852));const l={title:"LoadableComponent",sidebar_position:3},r=void 0,i={unversionedId:"apis/runtime/utility/loadable/loadable-component",id:"apis/runtime/utility/loadable/loadable-component",title:"LoadableComponent",description:"LoadableComponent \u662f loadable \u6216 lazy \u51fd\u6570\u8fd4\u56de\u7684\u5bf9\u8c61\u7c7b\u578b\u3002",source:"@site/docs/apis/runtime/utility/loadable/loadable-component.md",sourceDirName:"apis/runtime/utility/loadable",slug:"/apis/runtime/utility/loadable/loadable-component",permalink:"/docs/apis/runtime/utility/loadable/loadable-component",tags:[],version:"current",sidebarPosition:3,frontMatter:{title:"LoadableComponent",sidebar_position:3},sidebar:"apisSidebar",previous:{title:"lazy",permalink:"/docs/apis/runtime/utility/loadable/lazy"},next:{title:"LoadableLibrary",permalink:"/docs/apis/runtime/utility/loadable/loadable-library"}},p={},d=[{value:"LoadableComponent \u7c7b\u578b",id:"loadablecomponent-\u7c7b\u578b",level:2},{value:"props",id:"props",level:3},{value:"fallback",id:"fallback",level:3},{value:"LoadableComponent.preload",id:"loadablecomponentpreload",level:2},{value:"LoadableComponent.load",id:"loadablecomponentload",level:2}],m={toc:d};function s(e){let{components:t,...n}=e;return(0,o.kt)("wrapper",(0,a.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"LoadableComponent")," \u662f ",(0,o.kt)("inlineCode",{parentName:"p"},"loadable")," \u6216 ",(0,o.kt)("inlineCode",{parentName:"p"},"lazy")," \u51fd\u6570\u8fd4\u56de\u7684\u5bf9\u8c61\u7c7b\u578b\u3002"),(0,o.kt)("h2",{id:"loadablecomponent-\u7c7b\u578b"},"LoadableComponent \u7c7b\u578b"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ts"},"type LoadableComponent<Props> =\n  React.ComponentType<\n    Props & { fallback?: JSX.Element; }>\n  & {\n    preload(props?: Props): void;\n    load(props?: Props): Promise<React.ComponentType<Props>>;\n  }\n")),(0,o.kt)("h3",{id:"props"},"props"),(0,o.kt)("p",null,"\u7c7b\u578b\uff1a",(0,o.kt)("inlineCode",{parentName:"p"},"object")),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"LoadableComponent")," \u7ec4\u4ef6\u53ef\u63a5\u6536\u4efb\u610f props \u53c2\u6570\uff0c\u8fd9\u4e9b\u53c2\u6570\u4f1a\u8f6c\u53d1\u7ed9 loadFn\u3002"),(0,o.kt)("h3",{id:"fallback"},"fallback"),(0,o.kt)("p",null,"\u7c7b\u578b\uff1a",(0,o.kt)("inlineCode",{parentName:"p"},"JSX.Element")),(0,o.kt)("p",null,"\u5f53\u7ec4\u4ef6\u5c1a\u672a\u52a0\u8f7d\u5b8c\u6210\uff08\u5373 loading \u9636\u6bb5\uff09\u4f1a\u663e\u793a ",(0,o.kt)("inlineCode",{parentName:"p"},"fallback")," \u5185\u5bb9\u3002"),(0,o.kt)("h2",{id:"loadablecomponentpreload"},"LoadableComponent.preload"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ts"},"import loadable from '@modern-js/runtime/loadable'\n\nconst OtherComponent = loadable(() => import('./OtherComponent'))\nOtherComponent.preload()\n")),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"preload")," \u63a5\u6536\u7684\u53c2\u6570\u4f1a\u5168\u90e8\u4f20\u7ed9 ",(0,o.kt)("inlineCode",{parentName:"p"},"loadFn"),"\u3002"),(0,o.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"\u6ce8")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},"\u9884\u52a0\u8f7d\u811a\u672c\u4e2d\u51fd\u6570\u59cb\u7ec8\u4e0d\u4f1a\u8fd4\u56de\u4e00\u4e2a Promise \u5bf9\u8c61\uff0c\u5982\u679c\u4f60\u60f3\u7b49\u5f85\u7ec4\u4ef6\u52a0\u8f7d\u5b8c\u6210\uff0c\u8bf7\u4f7f\u7528 ",(0,o.kt)("a",{parentName:"p",href:"#LoadableComponent.load"},"load")," \u51fd\u6570"))),(0,o.kt)("h2",{id:"loadablecomponentload"},"LoadableComponent.load"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ts"},"import loadable from '@modern-js/runtime/loadable'\n\nconst OtherComponent = loadable(() => import('./OtherComponent'))\nOtherComponent.load().then(() => {\n  console.log('Component is loaded!')\n})\n")),(0,o.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"\u6ce8")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},"\u5982\u679c\u4f60\u65e0\u9700\u7b49\u5f85\u7ec4\u4ef6\u52a0\u8f7d\u5b8c\u6210\uff0c\u5219\u4f7f\u7528 ",(0,o.kt)("a",{parentName:"p",href:"#LoadableComponent.preload"},"preload")," \u5373\u53ef\u3002"))))}s.isMDXComponent=!0}}]);