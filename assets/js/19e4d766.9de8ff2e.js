"use strict";(self.webpackChunk_modern_js_website=self.webpackChunk_modern_js_website||[]).push([[6427],{54852:(e,t,r)=>{r.d(t,{Zo:()=>c,kt:()=>m});var n=r(49231);function i(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){i(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,i=function(e,t){if(null==e)return{};var r,n,i={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(i[r]=e[r]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(i[r]=e[r])}return i}var p=n.createContext({}),s=function(e){var t=n.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):a(a({},t),e)),r},c=function(e){var t=s(e.components);return n.createElement(p.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},f=n.forwardRef((function(e,t){var r=e.components,i=e.mdxType,o=e.originalType,p=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),f=s(r),m=i,d=f["".concat(p,".").concat(m)]||f[m]||u[m]||o;return r?n.createElement(d,a(a({ref:t},c),{},{components:r})):n.createElement(d,a({ref:t},c))}));function m(e,t){var r=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=r.length,a=new Array(o);a[0]=f;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l.mdxType="string"==typeof e?e:i,a[1]=l;for(var s=2;s<o;s++)a[s]=r[s];return n.createElement.apply(null,a)}return n.createElement.apply(null,r)}f.displayName="MDXCreateElement"},95414:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>p,contentTitle:()=>a,default:()=>u,frontMatter:()=>o,metadata:()=>l,toc:()=>s});var n=r(91528),i=(r(49231),r(54852));const o={sidebar_position:2},a="isFileExit",l={unversionedId:"apis/generator/plugin/info/isFileExit",id:"apis/generator/plugin/info/isFileExit",title:"isFileExit",description:"\u5224\u65ad\u6587\u4ef6\u662f\u5426\u5b58\u5728\u3002",source:"@site/docs/apis/generator/plugin/info/isFileExit.md",sourceDirName:"apis/generator/plugin/info",slug:"/apis/generator/plugin/info/isFileExit",permalink:"/docs/apis/generator/plugin/info/isFileExit",tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2},sidebar:"apisSidebar",previous:{title:"locale",permalink:"/docs/apis/generator/plugin/info/locale"},next:{title:"readDir",permalink:"/docs/apis/generator/plugin/info/readDir"}},p={},s=[{value:"fileName",id:"filename",level:2}],c={toc:s};function u(e){let{components:t,...r}=e;return(0,i.kt)("wrapper",(0,n.Z)({},c,r,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"isfileexit"},"isFileExit"),(0,i.kt)("p",null,"\u5224\u65ad\u6587\u4ef6\u662f\u5426\u5b58\u5728\u3002"),(0,i.kt)("p",null,"\u8be5\u65b9\u6cd5\u53ef\u76f4\u63a5\u5728 context \u4e0a\u83b7\u53d6\u3002"),(0,i.kt)("p",null,"\u5176\u7c7b\u578b\u5b9a\u4e49\u4e3a\uff1a"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-ts"},"export interface IPluginContext {\n  isFileExit: (fileName: string) => Promise<boolean>;\n  ...\n}\n")),(0,i.kt)("h2",{id:"filename"},"fileName"),(0,i.kt)("p",null,"\u9700\u8981\u5224\u65ad\u7684\u6587\u4ef6\u540d\u6216\u8005\u6587\u4ef6\u8def\u5f84\uff0c\u57fa\u4e8e\u521b\u5efa\u7684\u9879\u76ee\u7684\u76f8\u5bf9\u8def\u5f84\u5373\u53ef\u3002"))}u.isMDXComponent=!0}}]);