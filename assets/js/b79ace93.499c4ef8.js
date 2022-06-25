"use strict";(self.webpackChunk_modern_js_website=self.webpackChunk_modern_js_website||[]).push([[8884],{54852:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>d});var r=n(49231);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var c=r.createContext({}),l=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},p=function(e){var t=l(e.components);return r.createElement(c.Provider,{value:t},e.children)},v={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},w=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,a=e.originalType,c=e.parentName,p=o(e,["components","mdxType","originalType","parentName"]),w=l(n),d=i,m=w["".concat(c,".").concat(d)]||w[d]||v[d]||a;return n?r.createElement(m,s(s({ref:t},p),{},{components:n})):r.createElement(m,s({ref:t},p))}));function d(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var a=n.length,s=new Array(a);s[0]=w;var o={};for(var c in t)hasOwnProperty.call(t,c)&&(o[c]=t[c]);o.originalType=e,o.mdxType="string"==typeof e?e:i,s[1]=o;for(var l=2;l<a;l++)s[l]=n[l];return r.createElement.apply(null,s)}return r.createElement.apply(null,n)}w.displayName="MDXCreateElement"},72052:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>s,default:()=>v,frontMatter:()=>a,metadata:()=>o,toc:()=>l});var r=n(91528),i=(n(49231),n(54852));const a={sidebar_position:4},s="webview \u6ce8\u518c\u670d\u52a1",o={unversionedId:"guides/features/electron/ipc/regist-services/webview",id:"guides/features/electron/ipc/regist-services/webview",title:"webview \u6ce8\u518c\u670d\u52a1",description:"\u5728 webview \u4e2d\u6ce8\u518c\u670d\u52a1\u4e3b\u8981\u662f\u7ed9\u7236\u7a97\u53e3\u8fdb\u884c\u8bbf\u95ee\u548c\u4f7f\u7528\u7684\u3002",source:"@site/docs/guides/features/electron/ipc/regist-services/webview.md",sourceDirName:"guides/features/electron/ipc/regist-services",slug:"/guides/features/electron/ipc/regist-services/webview",permalink:"/docs/guides/features/electron/ipc/regist-services/webview",tags:[],version:"current",sidebarPosition:4,frontMatter:{sidebar_position:4},sidebar:"guidesSidebar",previous:{title:"\u6e32\u67d3\u8fdb\u7a0b\u6ce8\u518c\u670d\u52a1",permalink:"/docs/guides/features/electron/ipc/regist-services/render"},next:{title:"\u4ecb\u7ecd",permalink:"/docs/guides/features/electron/win-manager/"}},c={},l=[{value:"\u6ce8\u518c\u670d\u52a1",id:"\u6ce8\u518c\u670d\u52a1",level:2},{value:"\u6e32\u67d3\u8fdb\u7a0b\u4e2d\u8bbf\u95ee",id:"\u6e32\u67d3\u8fdb\u7a0b\u4e2d\u8bbf\u95ee",level:2},{value:"\u7ba1\u7406 webview",id:"\u7ba1\u7406-webview",level:3},{value:"\u8bbf\u95ee webview \u7684\u670d\u52a1",id:"\u8bbf\u95ee-webview-\u7684\u670d\u52a1",level:3}],p={toc:l};function v(e){let{components:t,...n}=e;return(0,i.kt)("wrapper",(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"webview-\u6ce8\u518c\u670d\u52a1"},"webview \u6ce8\u518c\u670d\u52a1"),(0,i.kt)("p",null,"\u5728 webview \u4e2d\u6ce8\u518c\u670d\u52a1\u4e3b\u8981\u662f\u7ed9\u7236\u7a97\u53e3\u8fdb\u884c\u8bbf\u95ee\u548c\u4f7f\u7528\u7684\u3002"),(0,i.kt)("h2",{id:"\u6ce8\u518c\u670d\u52a1"},"\u6ce8\u518c\u670d\u52a1"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"\u5b9a\u4e49\u670d\u52a1")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-ts",metastring:"title='electron/services/index.ts\uff08\u4e3b\u8fdb\u7a0b\uff09'",title:"'electron/services/index.ts\uff08\u4e3b\u8fdb\u7a0b\uff09'"},"export const getCurrentPageLocation = () => {\n  return window.location.href;\n};\n")),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"\u6ce8\u518c\u670d\u52a1")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-ts",metastring:'title="xx/xx.tsx\uff08webview \u8fdb\u7a0b\uff09"',title:'"xx/xx.tsx\uff08webview','\u8fdb\u7a0b\uff09"':!0},"import webviewBridge from '@modern-js/runtime/electron-webview';\nimport * as services from './services';\nwebviewBridge.registerServices(services);\n")),(0,i.kt)("h2",{id:"\u6e32\u67d3\u8fdb\u7a0b\u4e2d\u8bbf\u95ee"},"\u6e32\u67d3\u8fdb\u7a0b\u4e2d\u8bbf\u95ee"),(0,i.kt)("p",null,"\u9996\u5148\uff0c\u4e3a\u4e86\u80fd\u548c webview \u505a\u901a\u4fe1\u548c\u7ba1\u7406\uff0c\u6211\u4eec\u9996\u5148\u8981\u5c06 webview \u7ba1\u7406\u8d77\u6765\u3002"),(0,i.kt)("h3",{id:"\u7ba1\u7406-webview"},"\u7ba1\u7406 webview"),(0,i.kt)("p",null,"\u6211\u4eec\u7ed9\u6bcf\u4e00\u4e2a webview \u6807\u7b7e\u90fd\u6dfb\u52a0\u4e00\u4e2a\u552f\u4e00\u7684 ID\u3002\u5982\u4e0b\u793a\u4f8b\uff0c\u589e\u52a0\uff1a",(0,i.kt)("inlineCode",{parentName:"p"},'id="webview1"'),"\uff1a"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-ts",metastring:'title="xx/xx.tsx\uff08\u6e32\u67d3\u8fdb\u7a0b\uff09"',title:'"xx/xx.tsx\uff08\u6e32\u67d3\u8fdb\u7a0b\uff09"'},'<webview\n  src={\n    "https://www.baidu.com"\n  }\n  id="webview1"\n  nodeintegration="true"\n>\n')),(0,i.kt)("p",null,"\u7ed9 webview \u6ce8\u518c\u5230",(0,i.kt)("inlineCode",{parentName:"p"},"webviewService"),"\u4e2d\uff0c\u4fbf\u4e8e\u901a\u4fe1\u3002"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-ts",metastring:'title="xx/xx.tsx\uff08\u6e32\u67d3\u8fdb\u7a0b\uff09"',title:'"xx/xx.tsx\uff08\u6e32\u67d3\u8fdb\u7a0b\uff09"'},"// \u6e32\u67d3\u8fdb\u7a0b\u4e2d\nimport { webviewService } from '@modern-js/runtime/electron-render';\n...\n\nwebviewService.addWebview('webview1');\n")),(0,i.kt)("div",{className:"admonition admonition-tip alert alert--success"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"\u63d0\u793a")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("ul",{parentName:"div"},(0,i.kt)("li",{parentName:"ul"},"\u53c2\u6570\u5373\u4e3a webview ID\u3002")))),(0,i.kt)("h3",{id:"\u8bbf\u95ee-webview-\u7684\u670d\u52a1"},"\u8bbf\u95ee webview \u7684\u670d\u52a1"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-ts",metastring:'title="xx/xx.tsx\uff08\u6e32\u67d3\u8fdb\u7a0b\uff09"',title:'"xx/xx.tsx\uff08\u6e32\u67d3\u8fdb\u7a0b\uff09"'},"// \u6e32\u67d3\u8fdb\u7a0b\u4e2d\nimport { webviewService } from '@modern-js/runtime/electron-render';\n...\n// \u8bbf\u95ee webview1 \u7684\u670d\u52a1 getCurrentPageLocation\nwebviewService.callWebview('webview1', 'getCurrentPageLocation');\n")),(0,i.kt)("div",{className:"admonition admonition-tip alert alert--success"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"\u63d0\u793a")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"\u53ea\u6709\u88ab ",(0,i.kt)("inlineCode",{parentName:"p"},"webviewService.addWebview")," \u7684 webview \u670d\u52a1\u624d\u53ef\u4ee5\u8c03\u7528\u3002"))))}v.isMDXComponent=!0}}]);