"use strict";(self.webpackChunk_modern_js_website=self.webpackChunk_modern_js_website||[]).push([[9220],{54852:(e,t,r)=>{r.d(t,{Zo:()=>u,kt:()=>m});var n=r(49231);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var s=n.createContext({}),c=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},u=function(e){var t=c(e.components);return n.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,s=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),d=c(r),m=o,f=d["".concat(s,".").concat(m)]||d[m]||p[m]||a;return r?n.createElement(f,i(i({ref:t},u),{},{components:r})):n.createElement(f,i({ref:t},u))}));function m(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,i=new Array(a);i[0]=d;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:o,i[1]=l;for(var c=2;c<a;c++)i[c]=r[c];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},15014:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>p,frontMatter:()=>a,metadata:()=>l,toc:()=>c});var n=r(91528),o=(r(49231),r(54852));const a={title:"\u6837\u677f\u6587\u4ef6"},i=void 0,l={unversionedId:"guides/tutorials/c02-generator-and-studio/2.2-boilerplates",id:"guides/tutorials/c02-generator-and-studio/2.2-boilerplates",title:"\u6837\u677f\u6587\u4ef6",description:"\u751f\u6210\u7684\u9879\u76ee\u7ed3\u6784\uff1a",source:"@site/docs/guides/tutorials/c02-generator-and-studio/2.2-boilerplates.md",sourceDirName:"guides/tutorials/c02-generator-and-studio",slug:"/guides/tutorials/c02-generator-and-studio/2.2-boilerplates",permalink:"/docs/guides/tutorials/c02-generator-and-studio/2.2-boilerplates",tags:[],version:"current",frontMatter:{title:"\u6837\u677f\u6587\u4ef6"},sidebar:"guidesSidebar",previous:{title:"\u200b\u7528\u547d\u4ee4\u884c\u5de5\u5177\u521b\u5efa\u9879\u76ee\u200b\u200b",permalink:"/docs/guides/tutorials/c02-generator-and-studio/2.1-generator"},next:{title:"\u200b\u914d\u7f6e\u9879\u76ee",permalink:"/docs/guides/tutorials/c02-generator-and-studio/2.3-configuration"}},s={},c=[],u={toc:c};function p(e){let{components:t,...r}=e;return(0,o.kt)("wrapper",(0,n.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"\u751f\u6210\u7684\u9879\u76ee\u7ed3\u6784\uff1a"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-md"},".\n\u251c\u2500\u2500 .vscode/\n\u251c\u2500\u2500 src/\n\u2502\xa0\xa0 \u251c\u2500\u2500 .eslintrc.json\n\u2502\xa0\xa0 \u251c\u2500\u2500 App.css\n\u2502\xa0\xa0 \u2514\u2500\u2500 App.jsx\n\u251c\u2500\u2500 .editorconfig\n\u251c\u2500\u2500 .gitignore\n\u251c\u2500\u2500 .npmrc\n\u251c\u2500\u2500 .nvmrc\n\u251c\u2500\u2500 README.md\n\u251c\u2500\u2500 package.json\n\u2514\u2500\u2500 pnpm-lock.yaml\n")),(0,o.kt)("p",null,"\u548c\u4e0a\u4e00\u7ae0\u8282\u624b\u52a8\u521b\u5efa\u51fa\u6765\u7684\u9879\u76ee\u4e00\u6837\uff0c\u4ecd\u7136\u662f\u96f6\u914d\u7f6e\u3001\u6781\u7b80\u548c\u8f7b\u91cf\u7684\uff0c\u4f46\u529f\u80fd\u66f4\u5b8c\u6574\uff0c\u6700\u4f73\u5b9e\u8df5\u5f00\u7bb1\u5373\u7528\uff0c\u6bd4\u5982\uff1a"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"\u63d0\u4f9b\u4e86 IDE \u76f8\u5173\u652f\u6301\uff0c\u4e0b\u4e00\u8282\u4f1a\u8be6\u7ec6\u4ecb\u7ecd\u3002"),(0,o.kt)("li",{parentName:"ol"},"\u96c6\u6210\u4e86 Modern.js Lint \u89c4\u5219\u96c6\uff0c\u6309\u7167\u6700\u4f73\u5b9e\u8df5\u542f\u7528\uff0c\u7701\u53bb\u5f88\u591a\u914d\u7f6e\u5de5\u4f5c\u3002"),(0,o.kt)("li",{parentName:"ol"},"\u58f0\u660e\u4e86 Node.js \u7248\u672c\u3002\u5982\u679c\u4f60\u6309\u7167",(0,o.kt)("a",{parentName:"li",href:"/docs/guides/tutorials/c01-getting-started/1.1-prerequisites"},"\u4e0a\u4e00\u8282\u7684\u63a8\u8350"),"\uff0c\u5728\u7cfb\u7edf\u91cc\u542f\u7528\u4e86",(0,o.kt)("a",{parentName:"li",href:"https://github.com/nvm-sh/nvm#automatically-call-nvm-use"},"\u81ea\u52a8\u5207\u6362 node \u7248\u672c\u7684\u811a\u672c"),"\uff0c\u8fdb\u5165\u9879\u76ee\u76ee\u5f55\u65f6\uff0cnvm \u4f1a\u81ea\u52a8\u5b89\u88c5\u548c\u5207\u6362\u5230\u9879\u76ee\u58f0\u660e\u7684 Node.js \u7248\u672c\u3002"),(0,o.kt)("li",{parentName:"ol"},"\u5305\u542b Modern.js \u6846\u67b6\u7684\u5168\u5957\u547d\u4ee4\u3002")))}p.isMDXComponent=!0}}]);