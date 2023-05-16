(self.webpackChunk_modern_js_main_doc=self.webpackChunk_modern_js_main_doc||[]).push([["docs_zh_guides_get-started_introduction_mdx"],{8116:function(e,n,r){"use strict";Object.defineProperty(n,"__esModule",{value:!0});!function(e,n){for(var r in n)Object.defineProperty(e,r,{enumerable:!0,get:n[r]})}(n,{frontmatter:function(){return t},title:function(){return o},toc:function(){return c},default:function(){return h}});var s=r("9880"),d=r("23169"),i=r("97929"),t={title:"介绍",sidebar_position:1},o="Modern.js 介绍",c=[{text:"关于文档",depth:2,id:"关于文档"},{text:"Modern.js 框架",depth:2,id:"modernjs-框架"},{text:"下一步",depth:2,id:"下一步"}];function l(e){var n=Object.assign({h1:"h1",a:"a",p:"p",strong:"strong",h2:"h2",ul:"ul",li:"li",div:"div"},(0,d.useMDXComponents)(),e.components);return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)(n.h1,{id:"modernjs-介绍",children:["Modern.js 介绍",(0,s.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#modernjs-介绍",children:"#"})]}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"Modern.js 是字节跳动 Web 工程体系的开源版本"}),"，它提供多个解决方案，来帮助开发者解决不同研发场景下的问题。"]}),"\n",(0,s.jsx)(n.p,{children:"目前 Modern.js 包含三个解决方案，分别面向 Web 应用开发场景、npm 包开发场景和文档站开发场景："}),"\n","\n",(0,s.jsx)(i.SolutionCards,{cards:[{title:"Modern.js Framework",description:"基于 React 的渐进式 Web 开发框架",link:"http://modernjs.dev/"},{title:"Modern.js Module",description:"易用、高性能的 npm 包开发方案",link:"http://modernjs.dev/module-tools/"},{title:"Modern.js Doc",description:"基于 Rspack 的文档站解决方案",link:"http://modernjs.dev/doc-tools/zh/"}]}),"\n",(0,s.jsx)(n.p,{children:"作为 Modern.js 工程体系的一部分，以上每个解决方案都可以被单独使用，并且各自部署了独立的文档站点。开发者可以按需选择其中的一个或多个解决方案来使用。"}),"\n",(0,s.jsxs)(n.h2,{id:"关于文档",children:["关于文档",(0,s.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#关于文档",children:"#"})]}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"当前文档站对应的是 Modern.js 框架"}),"，适用于开发 Web 应用。"]}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["如果你需要开发一个 npm 包，请移步至 ",(0,s.jsx)(n.a,{href:"https://modernjs.dev/module-tools",target:"_blank",rel:"noopener noreferrer",children:"Modern.js Module"})," 文档。"]}),"\n",(0,s.jsxs)(n.li,{children:["如果你需要开发一个文档站点，请移步至 ",(0,s.jsx)(n.a,{href:"https://modernjs.dev/doc-tools/zh",target:"_blank",rel:"noopener noreferrer",children:"Modern.js Doc"})," 文档。"]}),"\n",(0,s.jsxs)(n.li,{children:["如果你需要基于 Modern.js 的构建引擎来实现一个 Web 开发框架，请移步至 ",(0,s.jsx)(n.a,{href:"https://modernjs.dev/builder",target:"_blank",rel:"noopener noreferrer",children:"Modern.js Builder"})," 文档。"]}),"\n"]}),"\n",(0,s.jsxs)(n.div,{className:"modern-directive tip",children:[(0,s.jsx)(n.div,{className:"modern-directive-title",children:"TIP"}),(0,s.jsx)(n.div,{className:"modern-directive-content",children:(0,s.jsx)(n.p,{children:"由于 Modern.js 框架的使用最为广泛，在本文档站中，我们会省略「框架」，直接称其为 Modern.js。"})})]}),"\n",(0,s.jsxs)(n.h2,{id:"modernjs-框架",children:["Modern.js 框架",(0,s.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#modernjs-框架",children:"#"})]}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"Modern.js 框架是一个基于 React 的渐进式 Web 开发框架"}),"。在字节跳动内部，我们将 Modern.js 封装为上层框架，并支撑了数千个 Web 应用的研发。"]}),"\n",(0,s.jsxs)(n.p,{children:["Modern.js 能为开发者提供极致的",(0,s.jsx)(n.strong,{children:"开发体验（Development Experience）"}),"，让应用拥有更好的",(0,s.jsx)(n.strong,{children:"用户体验（User Experience）"}),"。"]}),"\n",(0,s.jsxs)(n.p,{children:["在开发 React 应用过程中，开发者通常需要去为某些功能去设计实现方案，或是使用其他的库、框架来解决这些问题。Modern.js 支持 React 应用所需要的所有配置和工具，并内置",(0,s.jsx)(n.strong,{children:"额外的功能和优化"}),"。开发者可以使用 React 构建应用的 UI，然后逐步采用 Modern.js 的功能来解决常见的应用需求，如路由、数据获取、状态管理等。"]}),"\n",(0,s.jsx)(n.p,{children:"它主要包含以下特性："}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["\uD83D\uDE80 ",(0,s.jsx)(n.strong,{children:"Rust 构建"}),"：提供双构建工具支持，轻松切换到 Rspack 构建工具，编译飞快。"]}),"\n",(0,s.jsxs)(n.li,{children:["\uD83E\uDE9C ",(0,s.jsx)(n.strong,{children:"渐进式"}),"：使用最精简的模板创建项目，通过生成器逐步开启插件功能，定制解决方案。"]}),"\n",(0,s.jsxs)(n.li,{children:["\uD83C\uDFE0 ",(0,s.jsx)(n.strong,{children:"一体化"}),"：开发与生产环境 Web Server 唯一，CSR 和 SSR 同构开发，函数即接口的 API 服务调用。"]}),"\n",(0,s.jsxs)(n.li,{children:["\uD83D\uDCE6 ",(0,s.jsx)(n.strong,{children:"开箱即用"}),"：默认 TS 支持，内置构建、ESLint、调试工具，全功能可测试。"]}),"\n",(0,s.jsxs)(n.li,{children:["\uD83C\uDF0F ",(0,s.jsx)(n.strong,{children:"周边生态"}),"：自研状态管理、微前端、模块打包、Monorepo 方案等周边需求。"]}),"\n",(0,s.jsxs)(n.li,{children:["\uD83D\uDD78 ",(0,s.jsx)(n.strong,{children:"多种路由模式"}),"：包含自控路由、基于文件约定的路由（嵌套路由）等。"]}),"\n"]}),"\n",(0,s.jsxs)(n.h2,{id:"下一步",children:["下一步",(0,s.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#下一步",children:"#"})]}),"\n",(0,s.jsxs)(n.p,{children:["如果你希望了解如何使用 Modern.js 框架，可以尝试 ",(0,s.jsx)(n.a,{href:"/tutorials/first-app/c01-start",children:"创建第一个应用"}),"，或是阅读 ",(0,s.jsx)(n.a,{href:"/guides/get-started/quick-start",children:"快速上手"}),"。"]})]})}var h=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=Object.assign({},(0,d.useMDXComponents)(),e.components).wrapper;return n?(0,s.jsx)(n,Object.assign({},e,{children:(0,s.jsx)(l,e)})):l(e)}}}]);