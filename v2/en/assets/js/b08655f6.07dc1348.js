"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[7727],{44993:(e,t,r)=>{r.d(t,{Zo:()=>u,kt:()=>f});var n=r(52983);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var l=n.createContext({}),s=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):a(a({},t),e)),r},u=function(e){var t=s(e.components);return n.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,i=e.originalType,l=e.parentName,u=c(e,["components","mdxType","originalType","parentName"]),d=s(r),f=o,m=d["".concat(l,".").concat(f)]||d[f]||p[f]||i;return r?n.createElement(m,a(a({ref:t},u),{},{components:r})):n.createElement(m,a({ref:t},u))}));function f(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=r.length,a=new Array(i);a[0]=d;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:o,a[1]=c;for(var s=2;s<i;s++)a[s]=r[s];return n.createElement.apply(null,a)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},67134:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>l,contentTitle:()=>a,default:()=>p,frontMatter:()=>i,metadata:()=>c,toc:()=>s});var n=r(18249),o=(r(52983),r(44993));const i={title:"source.disableDefaultEntries",sidebar_label:"disableDefaultEntries"},a=void 0,c={unversionedId:"configure/app/source/disable-default-entries",id:"configure/app/source/disable-default-entries",title:"source.disableDefaultEntries",description:"- Type: boolean",source:"@site/../../packages/toolkit/main-doc/en/docusaurus-plugin-content-docs/current/configure/app/source/disable-default-entries.md",sourceDirName:"configure/app/source",slug:"/configure/app/source/disable-default-entries",permalink:"/v2/en/docs/configure/app/source/disable-default-entries",draft:!1,tags:[],version:"current",frontMatter:{title:"source.disableDefaultEntries",sidebar_label:"disableDefaultEntries"},sidebar:"configsAppSidebar",previous:{title:"designSystem",permalink:"/v2/en/docs/configure/app/source/design-system"},next:{title:"enableAsyncEntry",permalink:"/v2/en/docs/configure/app/source/enable-async-entry"}},l={},s=[],u={toc:s};function p(e){let{components:t,...r}=e;return(0,o.kt)("wrapper",(0,n.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Type: ",(0,o.kt)("inlineCode",{parentName:"li"},"boolean")),(0,o.kt)("li",{parentName:"ul"},"Default: ",(0,o.kt)("inlineCode",{parentName:"li"},"false"))),(0,o.kt)("p",null,"Turn off the function of automatically identifying the application build entry according to the project directory structure. By default, the Modern.js will get the corresponding build entry according to the project directory structure."),(0,o.kt)("admonition",{type:"info"},(0,o.kt)("p",{parentName:"admonition"},"By default, Modern.js will get the corresponding entry information according to the project directory structure. For details, please refer to ",(0,o.kt)("a",{parentName:"p",href:"/docs/guides/concept/entries"},"Entry"),".\nAfter configuring the shutdown mechanism, you need to configure the custom entry with ",(0,o.kt)("a",{parentName:"p",href:"/docs/configure/app/source/entries"},(0,o.kt)("inlineCode",{parentName:"a"},"source.entries")),".")),(0,o.kt)("admonition",{title:"Warning",type:"warning"},(0,o.kt)("p",{parentName:"admonition"},"Organizing your code according to the catalog specification provided by the Modern.js is recommended to make better use of the framework's capabilities and avoid some redundant configuration.")),(0,o.kt)("p",null,"Set the following to turn off the default behavior:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-typescript",metastring:'title="modern.config.ts"',title:'"modern.config.ts"'},"export default defineConfig({\n  source: {\n    disableDefaultEntries: true,\n  },\n});\n")))}p.isMDXComponent=!0}}]);