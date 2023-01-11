"use strict";(self.webpackChunk_modern_js_builder_doc=self.webpackChunk_modern_js_builder_doc||[]).push([[9209,5521,7629],{43113:function(e,n,s){s.r(n),s.d(n,{content:function(){return a},frontmatter:function(){return o},title:function(){return d},toc:function(){return l}});var t=s(39980),r=s(25688),i=s(77226);const o=void 0,l=[{id:"rust-tools",text:"Rust Tools",depth:2},{id:"position",text:"Position",depth:2},{id:"features",text:"Features",depth:2},{id:"support-multiple-bundlers",text:"Support Multiple Bundlers",depth:3},{id:"deep-optimization",text:"Deep optimization",depth:3},{id:"extensible-plugin-system",text:"Extensible Plugin System",depth:3},{id:"npm-packages",text:"npm packages",depth:2},{id:"next-step",text:"Next Step",depth:2}],d="Introduction",a='"# Introduction\\n\\nModern.js Builder is **a Build Engine for Web Development**.\\n\\nWith the growing of the front-end ecosystem, more and more build tools and plugins are created. For most developers, the configuration and dependencies required to build a web application have become complex; the cost of finding best practices for developers has also risen.\\n\\nIn order to reduce the complexity and make it easier to build a project, we abstracted the build abilities based on the practical experience of Modern.js, and created the open source tool Modern.js Builder.\\n\\n## Rust Tools\\n\\nIn recent years, the trend in front-end toolchain has been to re-implement them with native programming languages like Rust for better performance. Some high-performance tools have created, such as [SWC](https://swc.rs/), [esbuild](https://github.com/evanw/esbuild), [Turbopack](https://turbo.build/pack), etc., and their use is gradually expanding. However, there are many differences between these Rust tools and JavaScript tools, including functional differences, configuration inconsistencies, which make it difficult for users to migrate.\\n\\n<img src=\\"https://lf3-static.bytednsdoc.com/obj/eden-cn/zq-uylkvT/ljhwZthlaukjlkulzlp/rust-tools-11175.png\\" />\\n\\nThe Rust process of the front-end toolchain will continue for a long time, **Modern.js Builder is expected to help developers better transition to Rust tools**. Whether it\'s JavaScript tools, Rust tools, or even low-level bundlers like webpack, they\'re all replaceable components in Modern.js Builder. You can incrementally replace these components by turning on configuration or enabling plugins, and Modern.js Builder will smooth out the major differences and help users migrate.\\n\\n## Position\\n\\nModern.js Builder is a build engine serving the upper-level front-end frameworks. It focuses on solving problems in web application building, and expects to provide out-of-box building abilities for front-end frameworks.\\n\\n<img\\n  src=\\"https://lf3-static.bytednsdoc.com/obj/eden-cn/zq-uylkvT/ljhwZthlaukjlkulzlp/builder-layers-1117.png\\"\\n  style={{ maxWidth: \'80%\', marginLeft: \'10%\' }}\\n/>\\n\\nIf you are developing a front-end framework, or developing a scaffolding for a front-end application, Builder can provide most of the build logics for you, which allowing you to focus on implementing other features of the framework.\\n\\nIf you are a business developer, in most cases, you do not need to manually install Builder in your projects. We recommend that you use the upper-level frameworks based on Builder.\\n\\nCurrently, the following front-end frameworks are already using Builder:\\n\\n- [Modern.js 2.0](https://github.com/modern-js-dev/modern.js) Framework (Open source).\\n- EdenX Framework and PIA Framework inside ByteDance.\\n\\n## Features\\n\\n### Support Multiple Bundlers\\n\\n**Builder supports using multiple bundlers**, users can use different bundlers according the your needs.\\n\\nBy default, Builder uses webpack 5 as the bundler. Although the compilation speed of webpack is not ideal, it is still the most mature and ecological bundler in the community. Based on webpack, Builder integrates [babel](https://github.com/babel/babel), [postcss](https://github.com/postcss/postcss), [terser](https://github.com/terser/terser) and other tools to transform or minify codes. Builder also supports replacing some compile tools with native tools to improve compilation speed, such as replacing babel/terser with [swc](https://github.com/swc-project/swc) or [esbuild](https://github.com/evanw/esbuild).\\n\\nAt the same time, We are integrating rspack to improve compilation speed, rspack is a Rust Bundler developed by ByteDance.\\n\\nAt present, the webpack provider is stable for production, and the rspack provider is still under development.\\n\\n:::tip About Turbopack\\n[Turbopack](https://turbo.build/pack) is the rust-powered successor to webpack, we will continue to pay attention to it. At present, Turbopack only supports use in Next.js. When Turbopack can be used independently, and the completion and community ecology reach a certain level, we will consider supporting it for sure.\\n:::\\n\\n### Deep optimization\\n\\nBuilder **makes full use of various optimization strategies** in the webpack ecosystem to ensure the product performance in the production environment.\\n\\nTaking the chunk splitting scenario as an example, the webpack\'s splitChunks config is complex, and Builder makes it as an out-of-the-box [performance.chunkSplit](/en/api/config-performance.html#performance-chunksplit) config, it will split common third-party libraries into chunks to make page loading faster.\\n\\n### Extensible Plugin System\\n\\nProvides rich configuration items and a flexible plugin system to support in-depth customization of all features.\\n\\nFor Builder, all building abilities are achieved through plugins:\\n\\n- Most of the plugins are lightweight, built in Builder, and developers can enable or disable them through configs.\\n- Some plugins are more complex and developed as independent npm packages, developers can install and use them as needed.\\n\\nBuilder also supports custom plugins, so framework developers can develop custom plugins to meet customized requirements.\\n\\n## npm packages\\n\\nBelow is the npm package published by Builder.\\n\\n| Package                                                                                                            | Version                                                                                      | Description                       |\\n| ------------------------------------------------------------------------------------------------------------------ | -------------------------------------------------------------------------------------------- | --------------------------------- |\\n| [@modern-js/builder](https://www.npmjs.com/package/@modern-js/builder)                                             | ![](https://img.shields.io/npm/v/@modern-js/builder?style=flat-square)                       | Core package of Builder           |\\n| [@modern-js/builder-webpack-provider](https://www.npmjs.com/package/@modern-js/builder-webpack-provider)           | ![](https://img.shields.io/npm/v/@modern-js/builder-webpack-provider?style=flat-square)      | Provides webpack build ability    |\\n| [@modern-js/builder-rspack-provider](https://www.npmjs.com/package/@modern-js/builder-rspack-provider)             | ![](https://img.shields.io/npm/v/@modern-js/builder-rspack-provider?style=flat-square)       | Provides rspack build ability     |\\n| [@modern-js/builder-plugin-swc](https://www.npmjs.com/package/@modern-js/builder-plugin-swc)                       | ![](https://img.shields.io/npm/v/@modern-js/builder-plugin-swc?style=flat-square)            | SWC Plugin                        |\\n| [@modern-js/builder-plugin-stylus](https://www.npmjs.com/package/@modern-js/builder-plugin-stylus)                 | ![](https://img.shields.io/npm/v/@modern-js/builder-plugin-stylus?style=flat-square)         | Stylus Plugin                     |\\n| [@modern-js/builder-plugin-esbuild](https://www.npmjs.com/package/@modern-js/builder-plugin-esbuild)               | ![](https://img.shields.io/npm/v/@modern-js/builder-plugin-esbuild?style=flat-square)        | Esbuild Plugin                    |\\n| [@modern-js/builder-plugin-node-polyfill](https://www.npmjs.com/package/@modern-js/builder-plugin-node-polyfill)   | ![](https://img.shields.io/npm/v/@modern-js/builder-plugin-node-polyfill?style=flat-square)  | Node Polyfill Plugin              |\\n| [@modern-js/builder-plugin-image-compress](https://www.npmjs.com/package/@modern-js/builder-plugin-image-compress) | ![](https://img.shields.io/npm/v/@modern-js/builder-plugin-image-compress?style=flat-square) | Image Compress Plugin             |\\n| [@modern-js/builder-shared](https://www.npmjs.com/package/@modern-js/builder-shared)                               | ![](https://img.shields.io/npm/v/@modern-js/builder-shared?style=flat-square)                | Shared modules of Builder         |\\n| [@modern-js/builder-doc](https://www.npmjs.com/package/@modern-js/builder-doc)                                     | ![](https://img.shields.io/npm/v/@modern-js/builder-doc?style=flat-square)                   | Documentation snippets of Builder |\\n\\nYou can view the source code of these packages in the [packages/builder](https://github.com/modern-js-dev/modern.js/tree/main/packages/builder/) directory of the modern.js repository.\\n\\n## Next Step\\n\\nYou may want:\\n\\nimport NextSteps from \'@components/NextSteps\';\\nimport Step from \'@components/Step\';\\n\\n<NextSteps>\\n  <Step\\n    href=\\"/guide/quick-start.html\\"\\n    title=\\"Quick Start\\"\\n    description=\\"Learn how to use Builder\\"\\n  />\\n  <Step\\n    href=\\"/guide/features.html\\"\\n    title=\\"All Features\\"\\n    description=\\"Learn all features of Builder\\"\\n  />\\n  <Step\\n    href=\\"/api\\"\\n    title=\\"API Reference\\"\\n    description=\\"View detailed API documentation\\"\\n  />\\n</NextSteps>\\n"';function c(e){const n=Object.assign({h1:"h1",a:"a",p:"p",strong:"strong",h2:"h2",ul:"ul",li:"li",h3:"h3",div:"div",table:"table",thead:"thead",tr:"tr",th:"th",tbody:"tbody",td:"td",img:"img"},e.components);return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)(n.h1,{id:"introduction",children:[(0,t.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#introduction",children:"#"}),"Introduction"]}),"\n",(0,t.jsxs)(n.p,{children:["Modern.js Builder is ",(0,t.jsx)(n.strong,{children:"a Build Engine for Web Development"}),"."]}),"\n",(0,t.jsx)(n.p,{children:"With the growing of the front-end ecosystem, more and more build tools and plugins are created. For most developers, the configuration and dependencies required to build a web application have become complex; the cost of finding best practices for developers has also risen."}),"\n",(0,t.jsx)(n.p,{children:"In order to reduce the complexity and make it easier to build a project, we abstracted the build abilities based on the practical experience of Modern.js, and created the open source tool Modern.js Builder."}),"\n",(0,t.jsxs)(n.h2,{id:"rust-tools",children:[(0,t.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#rust-tools",children:"#"}),"Rust Tools"]}),"\n",(0,t.jsxs)(n.p,{children:["In recent years, the trend in front-end toolchain has been to re-implement them with native programming languages like Rust for better performance. Some high-performance tools have created, such as ",(0,t.jsx)(n.a,{href:"https://swc.rs/",target:"_blank",rel:"nofollow",children:"SWC"}),", ",(0,t.jsx)(n.a,{href:"https://github.com/evanw/esbuild",target:"_blank",rel:"nofollow",children:"esbuild"}),", ",(0,t.jsx)(n.a,{href:"https://turbo.build/pack",target:"_blank",rel:"nofollow",children:"Turbopack"}),", etc., and their use is gradually expanding. However, there are many differences between these Rust tools and JavaScript tools, including functional differences, configuration inconsistencies, which make it difficult for users to migrate."]}),"\n",(0,t.jsx)("img",{src:"https://lf3-static.bytednsdoc.com/obj/eden-cn/zq-uylkvT/ljhwZthlaukjlkulzlp/rust-tools-11175.png"}),"\n",(0,t.jsxs)(n.p,{children:["The Rust process of the front-end toolchain will continue for a long time, ",(0,t.jsx)(n.strong,{children:"Modern.js Builder is expected to help developers better transition to Rust tools"}),". Whether it's JavaScript tools, Rust tools, or even low-level bundlers like webpack, they're all replaceable components in Modern.js Builder. You can incrementally replace these components by turning on configuration or enabling plugins, and Modern.js Builder will smooth out the major differences and help users migrate."]}),"\n",(0,t.jsxs)(n.h2,{id:"position",children:[(0,t.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#position",children:"#"}),"Position"]}),"\n",(0,t.jsx)(n.p,{children:"Modern.js Builder is a build engine serving the upper-level front-end frameworks. It focuses on solving problems in web application building, and expects to provide out-of-box building abilities for front-end frameworks."}),"\n",(0,t.jsx)("img",{src:"https://lf3-static.bytednsdoc.com/obj/eden-cn/zq-uylkvT/ljhwZthlaukjlkulzlp/builder-layers-1117.png",style:{maxWidth:"80%",marginLeft:"10%"}}),"\n",(0,t.jsx)(n.p,{children:"If you are developing a front-end framework, or developing a scaffolding for a front-end application, Builder can provide most of the build logics for you, which allowing you to focus on implementing other features of the framework."}),"\n",(0,t.jsx)(n.p,{children:"If you are a business developer, in most cases, you do not need to manually install Builder in your projects. We recommend that you use the upper-level frameworks based on Builder."}),"\n",(0,t.jsx)(n.p,{children:"Currently, the following front-end frameworks are already using Builder:"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.a,{href:"https://github.com/modern-js-dev/modern.js",target:"_blank",rel:"nofollow",children:"Modern.js 2.0"})," Framework (Open source)."]}),"\n",(0,t.jsx)(n.li,{children:"EdenX Framework and PIA Framework inside ByteDance."}),"\n"]}),"\n",(0,t.jsxs)(n.h2,{id:"features",children:[(0,t.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#features",children:"#"}),"Features"]}),"\n",(0,t.jsxs)(n.h3,{id:"support-multiple-bundlers",children:[(0,t.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#support-multiple-bundlers",children:"#"}),"Support Multiple Bundlers"]}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"Builder supports using multiple bundlers"}),", users can use different bundlers according the your needs."]}),"\n",(0,t.jsxs)(n.p,{children:["By default, Builder uses webpack 5 as the bundler. Although the compilation speed of webpack is not ideal, it is still the most mature and ecological bundler in the community. Based on webpack, Builder integrates ",(0,t.jsx)(n.a,{href:"https://github.com/babel/babel",target:"_blank",rel:"nofollow",children:"babel"}),", ",(0,t.jsx)(n.a,{href:"https://github.com/postcss/postcss",target:"_blank",rel:"nofollow",children:"postcss"}),", ",(0,t.jsx)(n.a,{href:"https://github.com/terser/terser",target:"_blank",rel:"nofollow",children:"terser"})," and other tools to transform or minify codes. Builder also supports replacing some compile tools with native tools to improve compilation speed, such as replacing babel/terser with ",(0,t.jsx)(n.a,{href:"https://github.com/swc-project/swc",target:"_blank",rel:"nofollow",children:"swc"})," or ",(0,t.jsx)(n.a,{href:"https://github.com/evanw/esbuild",target:"_blank",rel:"nofollow",children:"esbuild"}),"."]}),"\n",(0,t.jsx)(n.p,{children:"At the same time, We are integrating rspack to improve compilation speed, rspack is a Rust Bundler developed by ByteDance."}),"\n",(0,t.jsx)(n.p,{children:"At present, the webpack provider is stable for production, and the rspack provider is still under development."}),"\n",(0,t.jsxs)(n.div,{className:"modern-directive tip",children:[(0,t.jsx)(n.p,{className:"modern-directive-title",children:"About Turbopack"}),(0,t.jsx)(n.div,{className:"modern-directive-content",children:(0,t.jsxs)(n.p,{children:["\n",(0,t.jsx)(n.a,{href:"https://turbo.build/pack",target:"_blank",rel:"nofollow",children:"Turbopack"}),"is the rust-powered successor to webpack, we will continue to pay attention to it. At present, Turbopack only supports use in Next.js. When Turbopack can be used independently, and the completion and community ecology reach a certain level, we will consider supporting it for sure."]})})]}),"\n",(0,t.jsxs)(n.h3,{id:"deep-optimization",children:[(0,t.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#deep-optimization",children:"#"}),"Deep optimization"]}),"\n",(0,t.jsxs)(n.p,{children:["Builder ",(0,t.jsx)(n.strong,{children:"makes full use of various optimization strategies"})," in the webpack ecosystem to ensure the product performance in the production environment."]}),"\n",(0,t.jsxs)(n.p,{children:["Taking the chunk splitting scenario as an example, the webpack's splitChunks config is complex, and Builder makes it as an out-of-the-box ",(0,t.jsx)(n.a,{href:"/builder/en/api/config-performance.html#performance-chunksplit",children:"performance.chunkSplit"})," config, it will split common third-party libraries into chunks to make page loading faster."]}),"\n",(0,t.jsxs)(n.h3,{id:"extensible-plugin-system",children:[(0,t.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#extensible-plugin-system",children:"#"}),"Extensible Plugin System"]}),"\n",(0,t.jsx)(n.p,{children:"Provides rich configuration items and a flexible plugin system to support in-depth customization of all features."}),"\n",(0,t.jsx)(n.p,{children:"For Builder, all building abilities are achieved through plugins:"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"Most of the plugins are lightweight, built in Builder, and developers can enable or disable them through configs."}),"\n",(0,t.jsx)(n.li,{children:"Some plugins are more complex and developed as independent npm packages, developers can install and use them as needed."}),"\n"]}),"\n",(0,t.jsx)(n.p,{children:"Builder also supports custom plugins, so framework developers can develop custom plugins to meet customized requirements."}),"\n",(0,t.jsxs)(n.h2,{id:"npm-packages",children:[(0,t.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#npm-packages",children:"#"}),"npm packages"]}),"\n",(0,t.jsx)(n.p,{children:"Below is the npm package published by Builder."}),"\n",(0,t.jsxs)(n.table,{children:[(0,t.jsx)(n.thead,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.th,{children:"Package"}),(0,t.jsx)(n.th,{children:"Version"}),(0,t.jsx)(n.th,{children:"Description"})]})}),(0,t.jsxs)(n.tbody,{children:[(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:(0,t.jsx)(n.a,{href:"https://www.npmjs.com/package/@modern-js/builder",target:"_blank",rel:"nofollow",children:"@modern-js/builder"})}),(0,t.jsx)(n.td,{children:(0,t.jsx)(n.img,{src:"https://img.shields.io/npm/v/@modern-js/builder?style=flat-square",alt:""})}),(0,t.jsx)(n.td,{children:"Core package of Builder"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:(0,t.jsx)(n.a,{href:"https://www.npmjs.com/package/@modern-js/builder-webpack-provider",target:"_blank",rel:"nofollow",children:"@modern-js/builder-webpack-provider"})}),(0,t.jsx)(n.td,{children:(0,t.jsx)(n.img,{src:"https://img.shields.io/npm/v/@modern-js/builder-webpack-provider?style=flat-square",alt:""})}),(0,t.jsx)(n.td,{children:"Provides webpack build ability"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:(0,t.jsx)(n.a,{href:"https://www.npmjs.com/package/@modern-js/builder-rspack-provider",target:"_blank",rel:"nofollow",children:"@modern-js/builder-rspack-provider"})}),(0,t.jsx)(n.td,{children:(0,t.jsx)(n.img,{src:"https://img.shields.io/npm/v/@modern-js/builder-rspack-provider?style=flat-square",alt:""})}),(0,t.jsx)(n.td,{children:"Provides rspack build ability"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:(0,t.jsx)(n.a,{href:"https://www.npmjs.com/package/@modern-js/builder-plugin-swc",target:"_blank",rel:"nofollow",children:"@modern-js/builder-plugin-swc"})}),(0,t.jsx)(n.td,{children:(0,t.jsx)(n.img,{src:"https://img.shields.io/npm/v/@modern-js/builder-plugin-swc?style=flat-square",alt:""})}),(0,t.jsx)(n.td,{children:"SWC Plugin"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:(0,t.jsx)(n.a,{href:"https://www.npmjs.com/package/@modern-js/builder-plugin-stylus",target:"_blank",rel:"nofollow",children:"@modern-js/builder-plugin-stylus"})}),(0,t.jsx)(n.td,{children:(0,t.jsx)(n.img,{src:"https://img.shields.io/npm/v/@modern-js/builder-plugin-stylus?style=flat-square",alt:""})}),(0,t.jsx)(n.td,{children:"Stylus Plugin"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:(0,t.jsx)(n.a,{href:"https://www.npmjs.com/package/@modern-js/builder-plugin-esbuild",target:"_blank",rel:"nofollow",children:"@modern-js/builder-plugin-esbuild"})}),(0,t.jsx)(n.td,{children:(0,t.jsx)(n.img,{src:"https://img.shields.io/npm/v/@modern-js/builder-plugin-esbuild?style=flat-square",alt:""})}),(0,t.jsx)(n.td,{children:"Esbuild Plugin"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:(0,t.jsx)(n.a,{href:"https://www.npmjs.com/package/@modern-js/builder-plugin-node-polyfill",target:"_blank",rel:"nofollow",children:"@modern-js/builder-plugin-node-polyfill"})}),(0,t.jsx)(n.td,{children:(0,t.jsx)(n.img,{src:"https://img.shields.io/npm/v/@modern-js/builder-plugin-node-polyfill?style=flat-square",alt:""})}),(0,t.jsx)(n.td,{children:"Node Polyfill Plugin"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:(0,t.jsx)(n.a,{href:"https://www.npmjs.com/package/@modern-js/builder-plugin-image-compress",target:"_blank",rel:"nofollow",children:"@modern-js/builder-plugin-image-compress"})}),(0,t.jsx)(n.td,{children:(0,t.jsx)(n.img,{src:"https://img.shields.io/npm/v/@modern-js/builder-plugin-image-compress?style=flat-square",alt:""})}),(0,t.jsx)(n.td,{children:"Image Compress Plugin"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:(0,t.jsx)(n.a,{href:"https://www.npmjs.com/package/@modern-js/builder-shared",target:"_blank",rel:"nofollow",children:"@modern-js/builder-shared"})}),(0,t.jsx)(n.td,{children:(0,t.jsx)(n.img,{src:"https://img.shields.io/npm/v/@modern-js/builder-shared?style=flat-square",alt:""})}),(0,t.jsx)(n.td,{children:"Shared modules of Builder"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:(0,t.jsx)(n.a,{href:"https://www.npmjs.com/package/@modern-js/builder-doc",target:"_blank",rel:"nofollow",children:"@modern-js/builder-doc"})}),(0,t.jsx)(n.td,{children:(0,t.jsx)(n.img,{src:"https://img.shields.io/npm/v/@modern-js/builder-doc?style=flat-square",alt:""})}),(0,t.jsx)(n.td,{children:"Documentation snippets of Builder"})]})]})]}),"\n",(0,t.jsxs)(n.p,{children:["You can view the source code of these packages in the ",(0,t.jsx)(n.a,{href:"https://github.com/modern-js-dev/modern.js/tree/main/packages/builder/",target:"_blank",rel:"nofollow",children:"packages/builder"})," directory of the modern.js repository."]}),"\n",(0,t.jsxs)(n.h2,{id:"next-step",children:[(0,t.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#next-step",children:"#"}),"Next Step"]}),"\n",(0,t.jsx)(n.p,{children:"You may want:"}),"\n","\n",(0,t.jsxs)(r.default,{children:[(0,t.jsx)(i.default,{href:"/guide/quick-start.html",title:"Quick Start",description:"Learn how to use Builder"}),(0,t.jsx)(i.default,{href:"/guide/features.html",title:"All Features",description:"Learn all features of Builder"}),(0,t.jsx)(i.default,{href:"/api",title:"API Reference",description:"View detailed API documentation"})]})]})}n.default=function(e={}){const{wrapper:n}=e.components||{};return n?(0,t.jsx)(n,Object.assign({},e,{children:(0,t.jsx)(c,e)})):c(e)}},25688:function(e,n,s){s.r(n),s.d(n,{default:function(){return i}});var t="PBxYA",r=s(39980);var i=e=>(0,r.jsx)("div",{className:t,children:e.children})},77226:function(e,n,s){s.r(n),s.d(n,{default:function(){return l}});var t="PftjC",r="uFJgO",i="zpB65",o=s(39980);var l=e=>(0,o.jsxs)("a",{className:t,href:e.href,children:[(0,o.jsx)("p",{className:r,children:e.title}),(0,o.jsx)("p",{className:i,children:e.description})]})}}]);