"use strict";(self.webpackChunk_modern_js_website=self.webpackChunk_modern_js_website||[]).push([[4103],{54852:(e,t,n)=>{n.d(t,{Zo:()=>l,kt:()=>u});var r=n(49231);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=r.createContext({}),c=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},l=function(e){var t=c(e.components);return r.createElement(s.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,s=e.parentName,l=p(e,["components","mdxType","originalType","parentName"]),d=c(n),u=a,v=d["".concat(s,".").concat(u)]||d[u]||m[u]||i;return n?r.createElement(v,o(o({ref:t},l),{},{components:n})):r.createElement(v,o({ref:t},l))}));function u(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=d;var p={};for(var s in t)hasOwnProperty.call(t,s)&&(p[s]=t[s]);p.originalType=e,p.mdxType="string"==typeof e?e:a,o[1]=p;for(var c=2;c<i;c++)o[c]=n[c];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},36802:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>o,default:()=>m,frontMatter:()=>i,metadata:()=>p,toc:()=>c});var r=n(91528),a=(n(49231),n(54852));const i={title:"cleanup",sidebar_position:3},o=void 0,p={unversionedId:"apis/runtime/testing/cleanup",id:"apis/runtime/testing/cleanup",title:"cleanup",description:"\u7528\u4e8e\u5378\u8f7d\u6389\u5f53\u524d\u5df2\u6e32\u67d3\u7684\u6240\u6709\u7ec4\u4ef6\u3002",source:"@site/docs/apis/runtime/testing/cleanup.md",sourceDirName:"apis/runtime/testing",slug:"/apis/runtime/testing/cleanup",permalink:"/docs/apis/runtime/testing/cleanup",tags:[],version:"current",sidebarPosition:3,frontMatter:{title:"cleanup",sidebar_position:3},sidebar:"apisSidebar",previous:{title:"renderApp",permalink:"/docs/apis/runtime/testing/renderApp"},next:{title:"act",permalink:"/docs/apis/runtime/testing/act"}},s={},c=[{value:"API",id:"api",level:2},{value:"\u793a\u4f8b",id:"\u793a\u4f8b",level:2}],l={toc:c};function m(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,r.Z)({},l,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,a.kt)("div",{parentName:"div",className:"admonition-heading"},(0,a.kt)("h5",{parentName:"div"},(0,a.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,a.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,a.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"\u8865\u5145\u4fe1\u606f")),(0,a.kt)("div",{parentName:"div",className:"admonition-content"},(0,a.kt)("p",{parentName:"div"},"\u7528\u4e8e\u5378\u8f7d\u6389\u5f53\u524d\u5df2\u6e32\u67d3\u7684\u6240\u6709\u7ec4\u4ef6\u3002"),(0,a.kt)("pre",{parentName:"div"},(0,a.kt)("code",{parentName:"pre",className:"language-ts"},"import { cleanup } from '@modern-js/runtime/testing';\n")))),(0,a.kt)("h2",{id:"api"},"API"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"cleanup() => void")),(0,a.kt)("h2",{id:"\u793a\u4f8b"},"\u793a\u4f8b"),(0,a.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,a.kt)("div",{parentName:"div",className:"admonition-heading"},(0,a.kt)("h5",{parentName:"div"},(0,a.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,a.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,a.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"\u6ce8")),(0,a.kt)("div",{parentName:"div",className:"admonition-content"},(0,a.kt)("p",{parentName:"div"},"\u8bf7\u6ce8\u610f\uff0c\u5982\u679c\u4f60\u4f7f\u7528\u7684\u6d4b\u8bd5\u6846\u67b6\u652f\u6301 afterEach\uff0c\u5e76\u4e14\u5b83\u88ab\u6ce8\u5165\u5230\u4f60\u7684\u6d4b\u8bd5\u73af\u5883\u4e2d\uff08\u5982mocha\u3001Jest\u548cJasmine\uff09\uff0c",(0,a.kt)("strong",{parentName:"p"},"\u4f1a\u9ed8\u8ba4\u5728 afterEach \u94a9\u5b50\u91cc\u6267\u884c ",(0,a.kt)("inlineCode",{parentName:"strong"},"cleanup")),"\u3002\u5426\u5219\uff0c\u4f60\u5c06\u9700\u8981\u5728\u6bcf\u6b21\u6d4b\u8bd5\u540e\u8fdb\u884c\u624b\u52a8\u6e05\u7406\u3002"))),(0,a.kt)("p",null,"\u4f8b\u5982\uff0c\u5982\u679c\u4f60\u4f7f\u7528",(0,a.kt)("a",{parentName:"p",href:"https://github.com/avajs/ava"},"ava"),"\u6d4b\u8bd5\u6846\u67b6\uff0c\u90a3\u4e48\u4f60\u9700\u8981\u50cf\u8fd9\u6837\u4f7f\u7528test.afterEach\u94a9\u5b50\u3002"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-tsx"},"import { cleanup, render } from '@modern-js/runtime/testing';\nimport test from 'ava'\n\ntest.afterEach(cleanup)\n\ntest('renders into document', () => {\n  render(<div />)\n  // ...\n})\n\n// ... more tests ...\n")))}m.isMDXComponent=!0}}]);