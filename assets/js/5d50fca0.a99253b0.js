"use strict";(self.webpackChunk_modern_js_website=self.webpackChunk_modern_js_website||[]).push([[3493],{54852:(e,t,r)=>{r.d(t,{Zo:()=>c,kt:()=>f});var n=r(49231);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var p=n.createContext({}),u=function(e){var t=n.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},c=function(e){var t=u(e.components);return n.createElement(p.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,p=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),m=u(r),f=a,k=m["".concat(p,".").concat(f)]||m[f]||s[f]||o;return r?n.createElement(k,i(i({ref:t},c),{},{components:r})):n.createElement(k,i({ref:t},c))}));function f(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,i=new Array(o);i[0]=m;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l.mdxType="string"==typeof e?e:a,i[1]=l;for(var u=2;u<o;u++)i[u]=r[u];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},23658:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>p,contentTitle:()=>i,default:()=>s,frontMatter:()=>o,metadata:()=>l,toc:()=>u});var n=r(91528),a=(r(49231),r(54852));const o={sidebar_position:1},i="\u6982\u89c8",l={unversionedId:"apis/runtime/plugin/abstract",id:"apis/runtime/plugin/abstract",title:"\u6982\u89c8",description:"Modern.js \u7684\u57fa\u7840\u7684\u63d2\u4ef6\u7cfb\u7edf\u4e2d\u4e3b\u8981\u5206\u4e3a\u4e09\u4e2a\u90e8\u5206\uff1aHook \u6a21\u578b\uff08Pipeline\u3001Workflow\u3001Waterfall\uff09\u3001 Hook \u6a21\u578b\u7684\u7ba1\u7406\u5668\uff08Manager\uff09\uff0c\u4e0a\u4e0b\u6587\u5171\u4eab\u673a\u5236\u3002",source:"@site/docs/apis/runtime/plugin/abstract.md",sourceDirName:"apis/runtime/plugin",slug:"/apis/runtime/plugin/abstract",permalink:"/docs/apis/runtime/plugin/abstract",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"apisSidebar",previous:{title:"Electron Test",permalink:"/docs/apis/runtime/electron/tests/test"},next:{title:"Hook \u6a21\u578b",permalink:"/docs/apis/runtime/plugin/hook"}},p={},u=[],c={toc:u};function s(e){let{components:t,...r}=e;return(0,a.kt)("wrapper",(0,n.Z)({},c,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"\u6982\u89c8"},"\u6982\u89c8"),(0,a.kt)("p",null,"Modern.js \u7684\u57fa\u7840\u7684\u63d2\u4ef6\u7cfb\u7edf\u4e2d\u4e3b\u8981\u5206\u4e3a\u4e09\u4e2a\u90e8\u5206\uff1aHook \u6a21\u578b\uff08Pipeline\u3001Workflow\u3001Waterfall\uff09\u3001 Hook \u6a21\u578b\u7684\u7ba1\u7406\u5668\uff08Manager\uff09\uff0c\u4e0a\u4e0b\u6587\u5171\u4eab\u673a\u5236\u3002"),(0,a.kt)("p",null,"\u5176\u4e2d\u7684 Hook \u6a21\u578b\u662f\u7528\u4e8e\u7ba1\u7406\u8fd0\u884c\u4e00\u7cfb\u5217\u76f8\u540c\u6a21\u578b\uff08\u5f62\u72b6\uff09\u51fd\u6570\u7684\u7ba1\u7406\u5de5\u5177\uff0c\u76ee\u524d\u63d0\u4f9b\u4e86\u4e09\u4e2a\u5927\u7c7b\uff0c7\u4e2a\u5c0f\u7c7b\uff1a"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Pipeline",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"Sync"),(0,a.kt)("li",{parentName:"ul"},"Async"))),(0,a.kt)("li",{parentName:"ul"},"Waterfall",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"Sync"),(0,a.kt)("li",{parentName:"ul"},"Async"))),(0,a.kt)("li",{parentName:"ul"},"Workflow",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"Sync"),(0,a.kt)("li",{parentName:"ul"},"Async"),(0,a.kt)("li",{parentName:"ul"},"Parallel(Async)")))),(0,a.kt)("p",null,"\u5b83\u4eec\u4e4b\u95f4\u7684\u533a\u522b\u662f\u4ed6\u4eec\u6240\u7ba1\u7406\u7684\u51fd\u6570\u7684\u8fd0\u884c\u6a21\u5f0f\u7684\u4e0d\u540c\u3002\u4e0d\u540c\u7684\u5730\u65b9\u4f1a\u5728\u4e0b\u9762\u5177\u4f53\u5206\u6790\u4ecb\u7ecd\u3002"),(0,a.kt)("p",null,"Hook \u6a21\u578b\u7684\u7ba1\u7406\u5668\uff08Manager\uff09\uff0c\u987e\u540d\u601d\u4e49\u5c31\u662f\u7528\u6765\u7ba1\u7406\u4e0a\u9762\u63d0\u5230\u7684\u90a3\u4e9b Hook \u6a21\u578b\uff0c\u6dfb\u52a0\u81f3\u540c\u4e00\u4e2a Manager \u53ef\u4ee5\u4f7f\u7528\u540c\u4e00\u4e2a Runner \u5bf9\u8c61\uff08\u5305\u542b\u6240\u6709 Hook \u7684\u6267\u884c\u51fd\u6570\uff09\u6765\u8fd0\u884c\uff0c\u4e5f\u5171\u4eab\u540c\u4e00\u4e2a\u4e0a\u4e0b\u6587\u73af\u5883\u3002\u800c Modern.js \u7684\u57fa\u7840\u63d2\u4ef6\u7cfb\u7edf\u4e2d\u7684\u63d2\u4ef6\u5c31\u662f\u9488\u5bf9 Manager \u6765\u8bf4\u7684\uff0c\u662f\u4e00\u4e2a\u62e5\u6709\u5c5e\u6027\u3001\u63d2\u4ef6 Hook \u51fd\u6570\u7684\u5bf9\u8c61\u3002"),(0,a.kt)("p",null,"\u57fa\u4e8e\u4e0a\u9762\u7684\u5de5\u5177\uff08Hook \u6a21\u578b + Manager\uff09\uff0c\u5728 Modern.js \u4e2d\u4e3b\u8981\u6784\u5efa\u4e86\u4e09\u5957\u63d2\u4ef6\u6a21\u578b\uff1aCLI\u3001Runtime\u3001Server\u3002\u5176\u4e2d CLI \u662f Modern.js \u4e2d\u4e3b\u8981\u7684\u8fd0\u884c\u6d41\u7a0b\u63a7\u5236\u6a21\u578b\uff0cModern.js \u4e2d\u7684\u5404\u79cd\u5de5\u7a0b\u65b9\u6848\uff08MWA\u3001\u6a21\u5757\u5de5\u7a0b\u65b9\u6848\u3001Monorepo \u5de5\u7a0b\u65b9\u6848\uff09\u90fd\u662f\u4e3b\u8981\u901a\u8fc7\u8fd9\u4e00\u5957\u6a21\u578b\u8fd0\u884c\u7684\u3002\u800c Runtime \u5219\u4e3b\u8981\u8d1f\u8d23\u7684\u662f React \u8def\u7531\u7ec4\u4ef6\u548c\u5143\u7d20\u7684\u5904\u7406\uff08Component \u548c Element\uff09\u548c\u6e32\u67d3\uff08\u5305\u62ec\u670d\u52a1\u5668\u7aef\u6e32\u67d3\u548c\u5ba2\u6237\u7aef\u6e32\u67d3\uff09\u3002\u800c Server \u5219\u662f\u9488\u5bf9 Server \u8fd0\u884c\u65f6\u7684\u8fd9\u4e2a\u9636\u6bb5\u7684\u751f\u547d\u5468\u671f\u8fd0\u884c\u548c\u7279\u6b8a\u4fe1\u606f\u6536\u96c6\u3002\u5176\u4e2d Runtime \u548c Server \u7684\u8fd0\u884c\u90fd\u662f\u5728 CLI \u4e2d\u89e6\u53d1\u7684\u3002"))}s.isMDXComponent=!0}}]);