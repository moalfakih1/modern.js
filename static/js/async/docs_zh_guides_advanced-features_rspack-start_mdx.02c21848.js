(self.webpackChunk_modern_js_main_doc=self.webpackChunk_modern_js_main_doc||[]).push([["docs_zh_guides_advanced-features_rspack-start_mdx"],{52736:function(e,n,s){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),Object.defineProperty(n,"default",{enumerable:!0,get:function(){return i}});var r=s("9880"),c=s("23169"),a=s.ir(s("24217"));function d(e){var n=Object.assign({div:"div"},(0,c.useMDXComponents)(),e.components);return(0,r.jsxs)(n.div,{className:"modern-directive tip",children:[(0,r.jsx)(n.div,{className:"modern-directive-title",children:"什么是 Rspack"}),(0,r.jsxs)(n.div,{className:"modern-directive-content",children:["\n","\n",(0,r.jsx)(a.default,{}),"\n"]})]})}var i=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=Object.assign({},(0,c.useMDXComponents)(),e.components).wrapper;return n?(0,r.jsx)(n,Object.assign({},e,{children:(0,r.jsx)(d,e)})):d(e)}},76893:function(e,n,s){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),Object.defineProperty(n,"default",{enumerable:!0,get:function(){return d}});var r=s("9880"),c=s("23169");function a(e){var n=Object.assign({pre:"pre",code:"code"},(0,c.useMDXComponents)(),e.components);return(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:"$ npx @modern-js/create@latest myapp\n? 请选择你想创建的工程类型：Web 应用\n? 请选择开发语言：TS\n? 请选择包管理工具：pnpm\n? 请选择构建工具：Rspack\n"})})}var d=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=Object.assign({},(0,c.useMDXComponents)(),e.components).wrapper;return n?(0,r.jsx)(n,Object.assign({},e,{children:(0,r.jsx)(a,e)})):a(e)}},7492:function(e,n,s){"use strict";Object.defineProperty(n,"__esModule",{value:!0});!function(e,n){for(var s in n)Object.defineProperty(e,s,{enumerable:!0,get:n[s]})}(n,{frontmatter:function(){return i},title:function(){return t},toc:function(){return p},default:function(){return l}});var r=s("9880"),c=s("23169"),a=s.ir(s("52736")),d=s.ir(s("76893")),i={title:"使用 Rspack",sidebar_position:1},t="使用 Rspack",p=[{text:"初始化 Rspack 项目",depth:2,id:"初始化-rspack-项目"},{text:"从 webpack 迁移至 Rspack",depth:2,id:"从-webpack-迁移至-rspack"},{text:"Rspack 和 Modern.js 的版本关系",depth:2,id:"rspack-和-modernjs-的版本关系"},{text:"修改内置 Rspack 版本",depth:4,id:"修改内置-rspack-版本"}];function o(e){var n=Object.assign({h1:"h1",a:"a",p:"p",strong:"strong",h2:"h2",code:"code",div:"div",ul:"ul",li:"li",pre:"pre",img:"img",h4:"h4"},(0,c.useMDXComponents)(),e.components);return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(n.h1,{id:"使用-rspack",children:["使用 Rspack",(0,r.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#使用-rspack",children:"#"})]}),"\n","\n",(0,r.jsx)(a.default,{}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"Modern.js 提供开箱即用的 Rspack 支持"}),"，你可以在成熟的 Webpack 和更快的 Rspack 之间进行切换。"]}),"\n",(0,r.jsx)(n.p,{children:"这篇文档会向你介绍如何在 Modern.js 中开启 Rspack 构建模式。"}),"\n",(0,r.jsxs)(n.h2,{id:"初始化-rspack-项目",children:["初始化 Rspack 项目",(0,r.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#初始化-rspack-项目",children:"#"})]}),"\n",(0,r.jsxs)(n.p,{children:["Modern.js 生成器会提供一个可交互的问答界面，只需将构建工具选择为 ",(0,r.jsx)(n.strong,{children:"Rspack"}),"，即可创建一个 Rspack 项目:"]}),"\n","\n",(0,r.jsx)(d.default,{}),"\n",(0,r.jsxs)(n.p,{children:["项目创建完成后，在项目中执行 ",(0,r.jsx)(n.code,{children:"pnpm run dev"})," 即可体验项目，更多信息可参考",(0,r.jsx)(n.a,{href:"/guides/get-started/quick-start",children:"快速上手"}),"。"]}),"\n",(0,r.jsxs)(n.div,{className:"modern-directive tip",children:[(0,r.jsx)(n.div,{className:"modern-directive-title",children:"TIP"}),(0,r.jsxs)(n.div,{className:"modern-directive-content",children:[(0,r.jsx)(n.p,{children:"在使用 Rspack 作为打包工具时，由于部分能力尚在开发中，以下 features 暂时无法使用，我们将在未来提供支持："}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"Storybook 调试"}),"\n",(0,r.jsxs)(n.li,{children:["客户端渲染（CSR）使用 ",(0,r.jsx)(n.a,{href:"/guides/basic-features/data-fetch",children:"useLoader"})]}),"\n"]}),"\n"]})]}),"\n",(0,r.jsxs)(n.h2,{id:"从-webpack-迁移至-rspack",children:["从 webpack 迁移至 Rspack",(0,r.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#从-webpack-迁移至-rspack",children:"#"})]}),"\n",(0,r.jsxs)(n.p,{children:["在一个已有的 Modern.js 项目中，你可以通过执行 ",(0,r.jsx)(n.code,{children:"pnpm run new"})," 来启用 Rspack 构建："]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:"$ pnpm run new\n? 请选择你想要的操作：启用可选功能\n? 启用可选功能：启用「Rspack 构建」\n"})}),"\n",(0,r.jsxs)(n.p,{children:["执行以上命令后，在 ",(0,r.jsx)(n.code,{children:"modern.config.ts"})," 中添加 Rspack 相关配置即可："]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-diff",meta:"title=modern.config.ts",children:"import appTools, { defineConfig } from '@modern-js/app-tools';\n\n+ export default defineConfig<'rspack'>({\n  plugins: [\n    appTools({\n+     bundler: 'experimental-rspack',\n    }),\n  ],\n});\n"})}),"\n",(0,r.jsxs)(n.div,{className:"modern-directive tip",children:[(0,r.jsx)(n.div,{className:"modern-directive-title",children:"TIP"}),(0,r.jsx)(n.div,{className:"modern-directive-content",children:(0,r.jsxs)(n.p,{children:["从 webpack 迁移至 Rspack 时，存在一些构建能力和配置上的差异，详情可参考：",(0,r.jsx)(n.a,{href:"https://modernjs.dev/builder/guide/advanced/rspack-start.html#%E4%BB%8E-webpack-%E8%BF%81%E7%A7%BB%E5%88%B0-rspack",target:"_blank",rel:"noopener noreferrer",children:"配置差异"}),"\n"]})})]}),"\n",(0,r.jsxs)(n.h2,{id:"rspack-和-modernjs-的版本关系",children:["Rspack 和 Modern.js 的版本关系",(0,r.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#rspack-和-modernjs-的版本关系",children:"#"})]}),"\n",(0,r.jsxs)(n.p,{children:["通常情况下，Modern.js 内会集成 Rspack 的最新版本，通过 ",(0,r.jsx)(n.code,{children:"npx modern upgrade"})," 即可将当前项目中的 Modern.js 相关依赖以及内置的 Rspack 更新至最新版本。"]}),"\n",(0,r.jsx)(n.p,{children:"但 Modern.js 对于 Rspack 的依赖方式为锁版本方式(非自动升级)，由于发版周期不同步等原因，可能会出现 Modern.js 内集成的 Rspack 版本落后于 Rspack 最新版本的情况。"}),"\n",(0,r.jsx)(n.p,{children:"当你执行 dev / build 命令时，Modern.js 会自动打印当前使用的 Rspack 版本："}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.img,{src:"https://lf3-static.bytednsdoc.com/obj/eden-cn/6221eh7uhbfvhn/modern/img_v2_dfcf051f-21db-4741-a108-d9f7a82c3abg.png",alt:"rspack_version_log"})}),"\n",(0,r.jsxs)(n.h4,{id:"修改内置-rspack-版本",children:["修改内置 Rspack 版本",(0,r.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#修改内置-rspack-版本",children:"#"})]}),"\n",(0,r.jsx)(n.p,{children:"可以使用 pnpm / yarn / npm 等包管理工具自带的依赖升级功能来将 Rspack 强制升级到指定版本。"}),"\n",(0,r.jsxs)(n.p,{children:["以 pnpm 为例，可通过 ",(0,r.jsx)(n.code,{children:"overrides"})," 以下依赖更新 Rspack 版本:"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-json",meta:"title=package.json",children:'{\n  "pnpm": {\n    "overrides": {\n      "@rspack/core": "nightly",\n      "@rspack/dev-client": "nightly",\n      "@rspack/dev-middleware": "nightly",\n      "@rspack/plugin-html": "nightly",\n      "@rspack/postcss-loader": "nightly"\n    }\n  }\n}\n'})}),"\n",(0,r.jsxs)(n.div,{className:"modern-directive tip",children:[(0,r.jsx)(n.div,{className:"modern-directive-title",children:"Nightly 版本介绍"}),(0,r.jsxs)(n.div,{className:"modern-directive-content",children:[(0,r.jsx)(n.p,{children:"每天，Rspack 会自动构建基于最新代码的 nightly 版本，用于测试和及早发现错误。"}),(0,r.jsx)(n.p,{children:"通常情况下，这些版本是可用的。如果发现问题，我们会及时进行修复。但是，如果 Rspack 有一些 break change，需要 Modern.js 同步修改代码，那么我们建议等待下一个 Modern.js 版本再进行更新。"})]})]}),"\n",(0,r.jsxs)(n.p,{children:["如果想了解其他包管理工具锁定依赖版本的示例，可以参考：",(0,r.jsx)(n.a,{href:"/guides/get-started/upgrade#%E9%94%81%E5%AE%9A%E5%AD%90%E4%BE%9D%E8%B5%96",children:"锁定子依赖"}),"。"]})]})}var l=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=Object.assign({},(0,c.useMDXComponents)(),e.components).wrapper;return n?(0,r.jsx)(n,Object.assign({},e,{children:(0,r.jsx)(o,e)})):o(e)}}}]);