(self.webpackChunk_modern_js_main_doc=self.webpackChunk_modern_js_main_doc||[]).push([["docs_zh_guides_advanced-features_rspack-start_mdx"],{16061:function(e,n,s){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),Object.defineProperty(n,"default",{enumerable:!0,get:function(){return i}});var r=s("9880"),c=s("23169"),a=s.ir(s("71867"));function d(e){var n=Object.assign({div:"div"},(0,c.useMDXComponents)(),e.components);return(0,r.jsxs)(n.div,{className:"modern-directive tip",children:[(0,r.jsx)(n.div,{className:"modern-directive-title",children:"什么是 Rspack"}),(0,r.jsxs)(n.div,{className:"modern-directive-content",children:["\n","\n",(0,r.jsx)(a.default,{}),"\n"]})]})}var i=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=Object.assign({},(0,c.useMDXComponents)(),e.components).wrapper;return n?(0,r.jsx)(n,Object.assign({},e,{children:(0,r.jsx)(d,e)})):d(e)}},94513:function(e,n,s){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),Object.defineProperty(n,"default",{enumerable:!0,get:function(){return d}});var r=s("9880"),c=s("23169");function a(e){var n=Object.assign({div:"div",pre:"pre",code:"code"},(0,c.useMDXComponents)(),e.components);return(0,r.jsx)(n.div,{className:"language-",children:(0,r.jsx)(n.div,{className:"modern-code-content",children:(0,r.jsx)(n.pre,{className:"code",children:(0,r.jsx)(n.code,{className:"language-bash",children:"$ npx @modern-js/create myapp\n? 请选择你想创建的工程类型：Web 应用\n? 请选择开发语言：TS\n? 请选择包管理工具：pnpm\n? 请选择构建工具：Rspack\n"})})})})}var d=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=Object.assign({},(0,c.useMDXComponents)(),e.components).wrapper;return n?(0,r.jsx)(n,Object.assign({},e,{children:(0,r.jsx)(a,e)})):a(e)}},90390:function(e,n,s){"use strict";Object.defineProperty(n,"__esModule",{value:!0});!function(e,n){for(var s in n)Object.defineProperty(e,s,{enumerable:!0,get:n[s]})}(n,{frontmatter:function(){return i},title:function(){return t},toc:function(){return o},default:function(){return p}});var r=s("9880"),c=s("23169"),a=s.ir(s("16061")),d=s.ir(s("94513")),i={title:"使用 Rspack",sidebar_position:1},t="使用 Rspack",o=[{text:"初始化 Rspack 项目",depth:2,id:"初始化-rspack-项目"},{text:"从 webpack 迁移至 Rspack",depth:2,id:"从-webpack-迁移至-rspack"}];function l(e){var n=Object.assign({h1:"h1",a:"a",p:"p",strong:"strong",h2:"h2",code:"code",div:"div",ul:"ul",li:"li",pre:"pre"},(0,c.useMDXComponents)(),e.components);return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(n.h1,{id:"使用-rspack",children:["使用 Rspack",(0,r.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#使用-rspack",children:"#"})]}),"\n","\n",(0,r.jsx)(a.default,{}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"Modern.js 提供开箱即用的 Rspack 支持"}),"，你可以在成熟的 Webpack 和更快的 Rspack 之间进行切换。"]}),"\n",(0,r.jsx)(n.p,{children:"这篇文档会向你介绍如何在 Modern.js 中开启 Rspack 构建模式。"}),"\n",(0,r.jsxs)(n.h2,{id:"初始化-rspack-项目",children:["初始化 Rspack 项目",(0,r.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#初始化-rspack-项目",children:"#"})]}),"\n",(0,r.jsxs)(n.p,{children:["Modern.js 生成器会提供一个可交互的问答界面，只需将构建工具选择为 ",(0,r.jsx)(n.strong,{children:"Rspack"}),"，即可创建一个 Rspack 项目:"]}),"\n","\n",(0,r.jsx)(d.default,{}),"\n",(0,r.jsxs)(n.p,{children:["项目创建完成后，在项目中执行 ",(0,r.jsx)(n.code,{children:"pnpm run dev"})," 即可体验项目，更多信息可参考",(0,r.jsx)(n.a,{href:"/guides/get-started/quick-start",children:"快速上手"}),"。"]}),"\n",(0,r.jsxs)(n.div,{className:"modern-directive tip",children:[(0,r.jsx)(n.div,{className:"modern-directive-title",children:"TIP"}),(0,r.jsxs)(n.div,{className:"modern-directive-content",children:[(0,r.jsx)(n.p,{children:"在使用 Rspack 作为打包工具时，由于部分能力尚在开发中，以下 features 暂时无法使用，我们将在未来提供支持："}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"Storybook 调试"}),"\n",(0,r.jsxs)(n.li,{children:["客户端渲染（CSR）使用 ",(0,r.jsx)(n.a,{href:"/guides/basic-features/data-fetch",children:"useLoader"})]}),"\n"]}),"\n"]})]}),"\n",(0,r.jsxs)(n.h2,{id:"从-webpack-迁移至-rspack",children:["从 webpack 迁移至 Rspack",(0,r.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#从-webpack-迁移至-rspack",children:"#"})]}),"\n",(0,r.jsxs)(n.p,{children:["在一个已有的 Modern.js 项目中，你可以通过执行 ",(0,r.jsx)(n.code,{children:"pnpm run new"})," 来启用 Rspack 构建："]}),"\n",(0,r.jsx)(n.div,{className:"language-",children:(0,r.jsx)(n.div,{className:"modern-code-content",children:(0,r.jsx)(n.pre,{className:"code",children:(0,r.jsx)(n.code,{className:"language-bash",children:"$ pnpm run new\n? 请选择你想要的操作：启用可选功能\n? 启用可选功能：启用「Rspack 构建」\n"})})})}),"\n",(0,r.jsxs)(n.p,{children:["执行以上命令后，在 ",(0,r.jsx)(n.code,{children:"modern.config.ts"})," 中添加 Rspack 相关配置即可："]}),"\n",(0,r.jsxs)(n.div,{className:"language-",children:[(0,r.jsx)(n.div,{className:"modern-code-title",children:"modern.config.ts"}),(0,r.jsx)(n.div,{className:"modern-code-content",children:(0,r.jsx)(n.pre,{className:"code",children:(0,r.jsx)(n.code,{className:"language-diff",meta:"title=modern.config.ts",children:"import appTools, { defineConfig } from '@modern-js/app-tools';\n\n+ export default defineConfig<'rspack'>({\n  plugins: [\n    appTools({\n+     bundler: 'experimental-rspack',\n    }),\n  ],\n});\n"})})})]}),"\n",(0,r.jsxs)(n.div,{className:"modern-directive tip",children:[(0,r.jsx)(n.div,{className:"modern-directive-title",children:"TIP"}),(0,r.jsx)(n.div,{className:"modern-directive-content",children:(0,r.jsxs)(n.p,{children:["从 webpack 迁移至 Rspack 时，存在一些构建能力和配置上的差异，详情可参考：",(0,r.jsx)(n.a,{href:"https://modernjs.dev/builder/guide/advanced/rspack-start.html#%E4%BB%8E-webpack-%E8%BF%81%E7%A7%BB%E5%88%B0-rspack",target:"_blank",rel:"noopener noreferrer",children:"配置差异"}),"\n"]})})]})]})}var p=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=Object.assign({},(0,c.useMDXComponents)(),e.components).wrapper;return n?(0,r.jsx)(n,Object.assign({},e,{children:(0,r.jsx)(l,e)})):l(e)}}}]);