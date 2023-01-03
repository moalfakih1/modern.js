"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[963],{44993:(e,n,t)=>{t.d(n,{Zo:()=>s,kt:()=>d});var i=t(52983);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);n&&(i=i.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,i)}return t}function l(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function u(e,n){if(null==e)return{};var t,i,r=function(e,n){if(null==e)return{};var t,i,r={},o=Object.keys(e);for(i=0;i<o.length;i++)t=o[i],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(i=0;i<o.length;i++)t=o[i],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var a=i.createContext({}),p=function(e){var n=i.useContext(a),t=n;return e&&(t="function"==typeof e?e(n):l(l({},n),e)),t},s=function(e){var n=p(e.components);return i.createElement(a.Provider,{value:n},e.children)},c={inlineCode:"code",wrapper:function(e){var n=e.children;return i.createElement(i.Fragment,{},n)}},g=i.forwardRef((function(e,n){var t=e.components,r=e.mdxType,o=e.originalType,a=e.parentName,s=u(e,["components","mdxType","originalType","parentName"]),g=p(t),d=r,f=g["".concat(a,".").concat(d)]||g[d]||c[d]||o;return t?i.createElement(f,l(l({ref:n},s),{},{components:t})):i.createElement(f,l({ref:n},s))}));function d(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var o=t.length,l=new Array(o);l[0]=g;var u={};for(var a in n)hasOwnProperty.call(n,a)&&(u[a]=n[a]);u.originalType=e,u.mdxType="string"==typeof e?e:r,l[1]=u;for(var p=2;p<o;p++)l[p]=t[p];return i.createElement.apply(null,l)}return i.createElement.apply(null,t)}g.displayName="MDXCreateElement"},3160:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>a,contentTitle:()=>l,default:()=>c,frontMatter:()=>o,metadata:()=>u,toc:()=>p});var i=t(18249),r=(t(52983),t(44993));const o={title:"builderPlugins",sidebar_position:10},l=void 0,u={unversionedId:"configure/app/builder-plugins",id:"configure/app/builder-plugins",title:"builderPlugins",description:"- Type: BuilderPlugin[]",source:"@site/../../packages/toolkit/main-doc/en/docusaurus-plugin-content-docs/current/configure/app/builder-plugins.md",sourceDirName:"configure/app",slug:"/configure/app/builder-plugins",permalink:"/v2/en/docs/configure/app/builder-plugins",draft:!1,tags:[],version:"current",sidebarPosition:10,frontMatter:{title:"builderPlugins",sidebar_position:10},sidebar:"configsAppSidebar",previous:{title:"plugins",permalink:"/v2/en/docs/configure/app/plugins"},next:{title:"autoLoadPlugins",permalink:"/v2/en/docs/configure/app/auto-load-plugin"}},a={},p=[{value:"Precautions",id:"precautions",level:2},{value:"When to use",id:"when-to-use",level:2},{value:"Example",id:"example",level:2},{value:"Using plugins on npm",id:"using-plugins-on-npm",level:3},{value:"Using local plugins",id:"using-local-plugins",level:3},{value:"Plugin configuration items",id:"plugin-configuration-items",level:3}],s={toc:p};function c(e){let{components:n,...t}=e;return(0,r.kt)("wrapper",(0,i.Z)({},s,t,{components:n,mdxType:"MDXLayout"}),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Type: ",(0,r.kt)("inlineCode",{parentName:"li"},"BuilderPlugin[]")),(0,r.kt)("li",{parentName:"ul"},"Default: ",(0,r.kt)("inlineCode",{parentName:"li"},"[]"))),(0,r.kt)("p",null,"Used to configure the Modern.js Builder plugin."),(0,r.kt)("p",null,"Modern.js Builder is the build engine of Modern.js, please read ",(0,r.kt)("a",{parentName:"p",href:"/docs/guides/basic-features/builder"},"Builder")," for background. If you want to know how to write Builder plugins, you can refer to ",(0,r.kt)("a",{parentName:"p",href:"https://modernjs.dev/builder/en/plugins/introduction.html"},"Modern.js Builder - Introduce to Plugin"),"."),(0,r.kt)("h2",{id:"precautions"},"Precautions"),(0,r.kt)("p",null,"This option ",(0,r.kt)("strong",{parentName:"p"},"is used to configure the Modern.js Builder plugins"),". If you need to configure other types of plugins, please select the corresponding configs:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Use ",(0,r.kt)("a",{parentName:"li",href:"docs/configure/app/builder-plugins"},"plugins")," to configure Modern.js framework plugins."),(0,r.kt)("li",{parentName:"ul"},"Use ",(0,r.kt)("a",{parentName:"li",href:"/docs/configure/app/tools/webpack"},"tools.webpack")," or ",(0,r.kt)("a",{parentName:"li",href:"/docs/configure/app/tools/webpack-chain"},"tools.webpackChain")," to configure webpack plugins."),(0,r.kt)("li",{parentName:"ul"},"Use ",(0,r.kt)("a",{parentName:"li",href:"/docs/configure/app/tools/babel"},"tools.babel")," to configure babel plugins.")),(0,r.kt)("h2",{id:"when-to-use"},"When to use"),(0,r.kt)("p",null,"In most scenarios, we recommend you to use the Modern.js framework plugin, which can be registered through the ",(0,r.kt)("a",{parentName:"p",href:"docs/configure/app/plugins"},"plugins")," config. Because the API provided by the framework plugin is richer and more capable, while the API provided by the Builder plugin can only be used to build scenes."),(0,r.kt)("p",null,"When you need to reference some existing Builder plugins (and there is no related capability in Modern.js), or reuse Builder plugins between different frameworks, you can use the ",(0,r.kt)("inlineCode",{parentName:"p"},"builderPlugins")," field to register them."),(0,r.kt)("h2",{id:"example"},"Example"),(0,r.kt)("p",null,"Below is an example of using the Builder plugin."),(0,r.kt)("h3",{id:"using-plugins-on-npm"},"Using plugins on npm"),(0,r.kt)("p",null,"To use a plugin on npm, you need to install the plugin through the package manager and import it."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts",metastring:'title="modern.config.ts"',title:'"modern.config.ts"'},"import MyBuilderPlugin from 'my-builder-plugin';\n\nexport default defineConfig({\n  builderPlugins: [MyBuilderPlugin()],\n});\n")),(0,r.kt)("h3",{id:"using-local-plugins"},"Using local plugins"),(0,r.kt)("p",null,"Use the plugin in the local code repository, you can import it directly through the relative path import."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts",metastring:'title="modern.config.ts"',title:'"modern.config.ts"'},"import MyBuilderPlugin from './plugin/myBuilderPlugin';\n\nexport default defineConfig({\n  builderPlugins: [MyBuilderPlugin()],\n});\n")),(0,r.kt)("h3",{id:"plugin-configuration-items"},"Plugin configuration items"),(0,r.kt)("p",null,"If the plugin provides some custom configuration options, you can pass in the configuration through the parameters of the plugin function."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts",metastring:'title="modern.config.ts"',title:'"modern.config.ts"'},"import MyBuilderPlugin from 'my-builder-plugin';\n\nexport default defineConfig({\n  builderPlugins: [\n    MyBuilderPlugin({\n      foo: 1,\n      bar: 2,\n    }),\n  ],\n});\n")))}c.isMDXComponent=!0}}]);