"use strict";(self.webpackChunk_modern_js_website=self.webpackChunk_modern_js_website||[]).push([[9101],{54852:(e,r,t)=>{t.d(r,{Zo:()=>u,kt:()=>d});var n=t(49231);function a(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function i(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function o(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?i(Object(t),!0).forEach((function(r){a(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function l(e,r){if(null==e)return{};var t,n,a=function(e,r){if(null==e)return{};var t,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)t=i[n],r.indexOf(t)>=0||(a[t]=e[t]);return a}(e,r);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)t=i[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var c=n.createContext({}),s=function(e){var r=n.useContext(c),t=r;return e&&(t="function"==typeof e?e(r):o(o({},r),e)),t},u=function(e){var r=s(e.components);return n.createElement(c.Provider,{value:r},e.children)},p={inlineCode:"code",wrapper:function(e){var r=e.children;return n.createElement(n.Fragment,{},r)}},m=n.forwardRef((function(e,r){var t=e.components,a=e.mdxType,i=e.originalType,c=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),m=s(t),d=a,f=m["".concat(c,".").concat(d)]||m[d]||p[d]||i;return t?n.createElement(f,o(o({ref:r},u),{},{components:t})):n.createElement(f,o({ref:r},u))}));function d(e,r){var t=arguments,a=r&&r.mdxType;if("string"==typeof e||a){var i=t.length,o=new Array(i);o[0]=m;var l={};for(var c in r)hasOwnProperty.call(r,c)&&(l[c]=r[c]);l.originalType=e,l.mdxType="string"==typeof e?e:a,o[1]=l;for(var s=2;s<i;s++)o[s]=t[s];return n.createElement.apply(null,o)}return n.createElement.apply(null,t)}m.displayName="MDXCreateElement"},46701:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>c,contentTitle:()=>o,default:()=>p,frontMatter:()=>i,metadata:()=>l,toc:()=>s});var n=t(91528),a=(t(49231),t(54852));const i={sidebar_position:1},o="\u4ecb\u7ecd",l={unversionedId:"guides/features/electron/win-manager/index",id:"guides/features/electron/win-manager/index",title:"\u4ecb\u7ecd",description:"\u7a97\u53e3\u7ba1\u7406\u670d\u52a1\uff0c\u4e3b\u8981\u5e2e\u52a9\u6211\u4eec\u89e3\u51b3\uff1a",source:"@site/docs/guides/features/electron/win-manager/index.md",sourceDirName:"guides/features/electron/win-manager",slug:"/guides/features/electron/win-manager/",permalink:"/docs/guides/features/electron/win-manager/",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"guidesSidebar",previous:{title:"webview \u6ce8\u518c\u670d\u52a1",permalink:"/docs/guides/features/electron/ipc/regist-services/webview"},next:{title:"\u6253\u5f00\u7a97\u53e3",permalink:"/docs/guides/features/electron/win-manager/open-window"}},c={},s=[],u={toc:s};function p(e){let{components:r,...t}=e;return(0,a.kt)("wrapper",(0,n.Z)({},u,t,{components:r,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"\u4ecb\u7ecd"},"\u4ecb\u7ecd"),(0,a.kt)("p",null,"\u7a97\u53e3\u7ba1\u7406\u670d\u52a1\uff0c\u4e3b\u8981\u5e2e\u52a9\u6211\u4eec\u89e3\u51b3\uff1a"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"\u7a97\u53e3\u7684\u6253\u5f00\u4e0e\u5173\u95ed\u95ee\u9898\u3002"),(0,a.kt)("li",{parentName:"ul"},"\u7a97\u53e3\u4e4b\u95f4\u6216\u7a97\u53e3\u4e0e\u4e3b\u8fdb\u7a0b\u7684\u901a\u4fe1\u95ee\u9898\u3002"),(0,a.kt)("li",{parentName:"ul"},"\u7a97\u53e3\u7684\u751f\u547d\u5468\u671f\u7ba1\u7406\u95ee\u9898\u3002")),(0,a.kt)("p",null,"\u5177\u4f53\u5185\u5bb9\u5982\u4e0b\uff1a"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/docs/guides/features/electron/win-manager/open-window"},"\u6253\u5f00\u7a97\u53e3")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/docs/guides/features/electron/win-manager/close-window"},"\u5173\u95ed\u7a97\u53e3")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/docs/guides/features/electron/ipc/regist-services/render"},"\u7a97\u53e3\u95f4\u901a\u4fe1")),(0,a.kt)("li",{parentName:"ul"},"\u7a97\u53e3\u7ba1\u7406 API",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/docs/apis/runtime/electron/main-process/win-service"},"\u4e3b\u8fdb\u7a0b winService")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/docs/apis/runtime/electron/render-process/win-service"},"\u6e32\u67d3\u8fdb\u7a0b winService"))))))}p.isMDXComponent=!0}}]);