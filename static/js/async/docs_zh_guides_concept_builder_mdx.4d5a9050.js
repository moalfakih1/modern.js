(self.webpackChunk_modern_js_main_doc=self.webpackChunk_modern_js_main_doc||[]).push([["docs_zh_guides_concept_builder_mdx"],{43243:function(e,r,n){"use strict";Object.defineProperty(r,"__esModule",{value:!0});!function(e,r){for(var n in r)Object.defineProperty(e,n,{enumerable:!0,get:r[n]})}(r,{frontmatter:function(){return i},title:function(){return l},toc:function(){return t},default:function(){return o}});var d=n("9880"),s=n("23169"),i={sidebar_position:2},l="构建引擎",t=[{text:"构建架构",depth:2,id:"构建架构"},{text:"构建文档",depth:2,id:"构建文档"},{text:"构建配置",depth:2,id:"构建配置"},{text:"构建能力",depth:2,id:"构建能力"}];function c(e){var r=Object.assign({h1:"h1",a:"a",p:"p",strong:"strong",h2:"h2",ul:"ul",li:"li",img:"img",code:"code",div:"div",pre:"pre"},(0,s.useMDXComponents)(),e.components);return(0,d.jsxs)(d.Fragment,{children:[(0,d.jsxs)(r.h1,{id:"构建引擎",children:["构建引擎",(0,d.jsx)(r.a,{className:"header-anchor","aria-hidden":"true",href:"#构建引擎",children:"#"})]}),"\n",(0,d.jsx)(r.p,{children:(0,d.jsxs)(r.strong,{children:["Modern.js 的构建能力由 ",(0,d.jsx)(r.a,{href:"https://modernjs.dev/builder",target:"_blank",rel:"noopener noreferrer",children:"Modern.js Builder"})," 提供。"]})}),"\n",(0,d.jsx)(r.p,{children:"Modern.js Builder 是 Modern.js 体系的核心组件之一，它是一个面向 Web 开发场景的构建引擎，可以脱离 Modern.js 被独立使用。Modern.js Builder 同时支持 webpack 和 Rspack 等多种打包工具，默认情况下使用最成熟的 webpack 进行打包。"}),"\n",(0,d.jsxs)(r.h2,{id:"构建架构",children:["构建架构",(0,d.jsx)(r.a,{className:"header-anchor","aria-hidden":"true",href:"#构建架构",children:"#"})]}),"\n",(0,d.jsx)(r.p,{children:"从构建的角度看，Modern.js 分为三层架构，从上到下依次是："}),"\n",(0,d.jsxs)(r.ul,{children:["\n",(0,d.jsx)(r.li,{children:"上层研发框架：Modern.js。"}),"\n",(0,d.jsx)(r.li,{children:"通用构建引擎：Modern.js Builder。"}),"\n",(0,d.jsx)(r.li,{children:"底层打包工具：webpack 和 rspack。"}),"\n"]}),"\n",(0,d.jsx)("img",{src:"https://lf3-static.bytednsdoc.com/obj/eden-cn/zq-uylkvT/ljhwZthlaukjlkulzlp/builder-layers-1117.png",style:{width:"100%",maxWidth:"540px"}}),"\n",(0,d.jsxs)(r.h2,{id:"构建文档",children:["构建文档",(0,d.jsx)(r.a,{className:"header-anchor","aria-hidden":"true",href:"#构建文档",children:"#"})]}),"\n",(0,d.jsxs)(r.p,{children:["由于 Modern.js Builder 是一个可独立使用的模块，我们为它提供了单独的文档，文档地址为：",(0,d.jsx)(r.a,{href:"https://modernjs.dev/builder",target:"_blank",rel:"noopener noreferrer",children:"modernjs.dev/builder"}),"。"]}),"\n",(0,d.jsx)(r.p,{children:"在该文档中，你可以了解到 Modern.js Builder 的详细介绍，同时也可以找到各个构建能力的完整使用指南。当你遇到构建方面的需求或问题时，建议你优先阅读 Modern.js Builder 文档来解决。"}),"\n",(0,d.jsxs)(r.h2,{id:"构建配置",children:["构建配置",(0,d.jsx)(r.a,{className:"header-anchor","aria-hidden":"true",href:"#构建配置",children:"#"})]}),"\n",(0,d.jsx)(r.p,{children:"Modern.js 的配置继承自 Modern.js Builder，因此你可以在 Modern.js 中使用 Modern.js Builder 提供的所有构建配置。"}),"\n",(0,d.jsxs)(r.p,{children:["以 Modern.js Builder 的 ",(0,d.jsx)(r.code,{children:"html.title"})," 配置项为例，你可以直接在 ",(0,d.jsx)(r.code,{children:"modern.config.ts"})," 文件中使用该配置项，它会被自动传递给 Modern.js Builder。"]}),"\n",(0,d.jsxs)(r.div,{className:"language-",children:[(0,d.jsx)(r.div,{className:"modern-code-title",children:"modern.config.js"}),(0,d.jsx)(r.div,{className:"modern-code-content",children:(0,d.jsx)(r.pre,{className:"code",children:(0,d.jsx)(r.code,{className:"language-ts",meta:'title="modern.config.js"',children:"export default defineConfig({\n  html: {\n    title: 'example',\n  },\n});\n"})})})]}),"\n",(0,d.jsxs)(r.p,{children:["关于构建配置的详细说明，请参考 ",(0,d.jsx)(r.a,{href:"https://modernjs.dev/builder/guide/basic/builder-config.html",target:"_blank",rel:"noopener noreferrer",children:"「Modern.js Builder - Builder 配置」"}),"。"]}),"\n",(0,d.jsxs)(r.h2,{id:"构建能力",children:["构建能力",(0,d.jsx)(r.a,{className:"header-anchor","aria-hidden":"true",href:"#构建能力",children:"#"})]}),"\n",(0,d.jsx)(r.p,{children:"Modern.js Builder 提供了丰富的构建能力，包括 JavaScript 编译、CSS 编译、静态资源处理、代码热更新、代码压缩、TS 类型检查等几十种能力。"}),"\n",(0,d.jsxs)(r.p,{children:["我们推荐你阅读 ",(0,d.jsx)(r.a,{href:"https://modernjs.dev/builder/guide/features.html",target:"_blank",rel:"noopener noreferrer",children:"「Modern.js Builder - 功能导航」"})," 来了解 Modern.js Builder 提供的所有构建能力。"]})]})}var o=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},r=Object.assign({},(0,s.useMDXComponents)(),e.components).wrapper;return r?(0,d.jsx)(r,Object.assign({},e,{children:(0,d.jsx)(c,e)})):c(e)}}}]);