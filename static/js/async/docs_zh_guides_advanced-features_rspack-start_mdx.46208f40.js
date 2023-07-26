(self.webpackChunk_modern_js_main_doc=self.webpackChunk_modern_js_main_doc||[]).push([["docs_zh_guides_advanced-features_rspack-start_mdx"],{40981:function(e,n,s){"use strict";s.r(n),s.d(n,{default:function(){return p}});var r,a=s("15169"),c=s("43932"),d=s("9880"),i=s("23169");function t(e){var n=Object.assign({h2:"h2",a:"a",p:"p",ul:"ul",li:"li"},(0,i.useMDXComponents)(),e.components);return(0,d.jsxs)(d.Fragment,{children:[(0,d.jsxs)(n.h2,{id:"注意事项",children:["注意事项",(0,d.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#注意事项",children:"#"})]}),"\n",(0,d.jsx)(n.p,{children:"在使用 Rspack 之前，请留意 Rspack 仍然是一个早期项目，当前还处于快速迭代阶段。因此，你需要预先了解以下事项："}),"\n",(0,d.jsxs)(n.ul,{children:["\n",(0,d.jsx)(n.li,{children:"Rspack 的 API 和配置项还不稳定，同时 Modern.js 对 Rspack 的支持属于实验性的，因此在后续的非 major 版本中，可能会引入不兼容更新。"}),"\n",(0,d.jsx)(n.li,{children:"Rspack 并未实现完整的 webpack 优化能力（如 tree shaking、bundle splitting、scope hoist 等能力，我们将在 6 ～ 12 月持续补齐相关优化能力），迁移到 Rspack 后，你可能会发现产物的包体积相较 webpack 有一定程度的增加。"}),"\n",(0,d.jsx)(n.li,{children:"Rspack 目前基于 SWC 进行代码编译和压缩，由于 SWC 的成熟度不及 babel 和 terser，因此你可能会遇到 SWC 的 bug。"}),"\n",(0,d.jsx)(n.li,{children:"Rspack 模式兼容了大部分 webpack 生态的插件和 loaders，但仍有部分插件和 loaders 暂时无法使用。"}),"\n"]}),"\n",(0,d.jsx)(n.p,{children:"Rspack 正在积极改善上述问题，并计划在未来的版本中逐步解决它们。我们建议在决定是否使用 Rspack 之前，评估你的项目需求和风险承受能力。如果你的项目对稳定性和性能要求较高，可以先选择更成熟的 webpack。如果你愿意尝试新的工具并为其发展做出贡献，我们欢迎你使用 Rspack，并提供反馈和报告问题，以帮助改进它的稳定性和功能。"})]})}(r=globalThis).__RSPRESS_PAGE_META||(r.__RSPRESS_PAGE_META={}),globalThis.__RSPRESS_PAGE_META["..%2F..%2Fbuilder-doc%2Fdocs%2Fzh%2Fshared%2FrspackPrecautions.md"]={toc:[{text:"注意事项",id:"注意事项",depth:2}],title:"",frontmatter:{}};var p=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=Object.assign({},(0,i.useMDXComponents)(),e.components).wrapper;return n?(0,d.jsx)(n,(0,c._)((0,a._)({},e),{children:(0,d.jsx)(t,(0,a._)({},e))})):t(e)}},14306:function(e,n,s){"use strict";s.r(n),s.d(n,{default:function(){return l}});var r,a=s("15169"),c=s("43932"),d=s("9880"),i=s("23169"),t=s("41582");function p(e){var n=Object.assign({div:"div"},(0,i.useMDXComponents)(),e.components);return(0,d.jsxs)(n.div,{className:"modern-directive tip",children:[(0,d.jsx)(n.div,{className:"modern-directive-title",children:"什么是 Rspack"}),(0,d.jsxs)(n.div,{className:"modern-directive-content",children:["\n","\n",(0,d.jsx)(t.default,{}),"\n"]})]})}(r=globalThis).__RSPRESS_PAGE_META||(r.__RSPRESS_PAGE_META={}),globalThis.__RSPRESS_PAGE_META["..%2F..%2Fbuilder-doc%2Fdocs%2Fzh%2Fshared%2FrspackTip.mdx"]={toc:[],title:"",frontmatter:{}};var l=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=Object.assign({},(0,i.useMDXComponents)(),e.components).wrapper;return n?(0,d.jsx)(n,(0,c._)((0,a._)({},e),{children:(0,d.jsx)(p,(0,a._)({},e))})):p(e)}},2081:function(e,n,s){"use strict";s.r(n),s.d(n,{default:function(){return p}});var r,a=s("15169"),c=s("43932"),d=s("9880"),i=s("23169");function t(e){var n=Object.assign({pre:"pre",code:"code"},(0,i.useMDXComponents)(),e.components);return(0,d.jsx)(n.pre,{children:(0,d.jsx)(n.code,{className:"language-bash",children:"$ npx @modern-js/create@latest myapp\n? 请选择你想创建的工程类型：Web 应用\n? 请选择开发语言：TS\n? 请选择包管理工具：pnpm\n? 请选择构建工具：Rspack\n"})})}(r=globalThis).__RSPRESS_PAGE_META||(r.__RSPRESS_PAGE_META={}),globalThis.__RSPRESS_PAGE_META["zh%2Fcomponents%2Finit-rspack-app.mdx"]={toc:[],title:"",frontmatter:{}};var p=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=Object.assign({},(0,i.useMDXComponents)(),e.components).wrapper;return n?(0,d.jsx)(n,(0,c._)((0,a._)({},e),{children:(0,d.jsx)(t,(0,a._)({},e))})):t(e)}},72564:function(e,n,s){"use strict";s.r(n),s.d(n,{default:function(){return h}});var r,a=s("15169"),c=s("43932"),d=s("9880"),i=s("23169"),t=s("14306"),p=s("2081"),l=s("40981");function o(e){var n=Object.assign({h1:"h1",a:"a",p:"p",strong:"strong",h2:"h2",code:"code",div:"div",ul:"ul",li:"li",pre:"pre",img:"img",h4:"h4"},(0,i.useMDXComponents)(),e.components);return(0,d.jsxs)(d.Fragment,{children:[(0,d.jsxs)(n.h1,{id:"使用-rspack",children:["使用 Rspack",(0,d.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#使用-rspack",children:"#"})]}),"\n","\n",(0,d.jsx)(t.default,{}),"\n",(0,d.jsxs)(n.p,{children:[(0,d.jsx)(n.strong,{children:"Modern.js 提供开箱即用的 Rspack 支持"}),"，你可以在成熟的 Webpack 和更快的 Rspack 之间进行切换。"]}),"\n",(0,d.jsx)(n.p,{children:"这篇文档会向你介绍如何在 Modern.js 中开启 Rspack 构建模式。"}),"\n",(0,d.jsxs)(n.h2,{id:"初始化-rspack-项目",children:["初始化 Rspack 项目",(0,d.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#初始化-rspack-项目",children:"#"})]}),"\n",(0,d.jsxs)(n.p,{children:["Modern.js 生成器会提供一个可交互的问答界面，只需将构建工具选择为 ",(0,d.jsx)(n.strong,{children:"Rspack"}),"，即可创建一个 Rspack 项目:"]}),"\n","\n",(0,d.jsx)(p.default,{}),"\n",(0,d.jsxs)(n.p,{children:["项目创建完成后，在项目中执行 ",(0,d.jsx)(n.code,{children:"pnpm run dev"})," 即可体验项目，更多信息可参考",(0,d.jsx)(n.a,{href:"/guides/get-started/quick-start",children:"快速上手"}),"。"]}),"\n",(0,d.jsxs)(n.div,{className:"modern-directive tip",children:[(0,d.jsx)(n.div,{className:"modern-directive-title",children:"TIP"}),(0,d.jsxs)(n.div,{className:"modern-directive-content",children:[(0,d.jsx)(n.p,{children:"在使用 Rspack 作为打包工具时，由于部分能力尚在开发中，以下 features 暂时无法使用，我们将在未来提供支持："}),"\n",(0,d.jsxs)(n.ul,{children:["\n",(0,d.jsx)(n.li,{children:"Storybook 调试"}),"\n",(0,d.jsxs)(n.li,{children:["客户端渲染（CSR）使用 ",(0,d.jsx)(n.a,{href:"/guides/basic-features/data-fetch",children:"useLoader"})]}),"\n"]}),"\n"]})]}),"\n",(0,d.jsxs)(n.h2,{id:"开启-rspack-构建",children:["开启 Rspack 构建",(0,d.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#开启-rspack-构建",children:"#"})]}),"\n",(0,d.jsxs)(n.p,{children:["在一个已有的 Modern.js 项目中，你可以通过执行 ",(0,d.jsx)(n.code,{children:"pnpm run new"})," 来启用 Rspack 构建："]}),"\n",(0,d.jsx)(n.pre,{children:(0,d.jsx)(n.code,{className:"language-bash",children:"$ pnpm run new\n? 请选择你想要的操作 启用可选功能\n? 请选择功能名称 启用「Rspack 构建」\n"})}),"\n",(0,d.jsxs)(n.p,{children:["执行以上命令后，在 ",(0,d.jsx)(n.code,{children:"modern.config.ts"})," 中添加 Rspack 相关配置即可："]}),"\n",(0,d.jsx)(n.pre,{children:(0,d.jsx)(n.code,{className:"language-diff",meta:"title=modern.config.ts",children:"import { appTools, defineConfig } from '@modern-js/app-tools';\n\n+ export default defineConfig<'rspack'>({\n  plugins: [\n    appTools({\n+     bundler: 'experimental-rspack',\n    }),\n  ],\n});\n"})}),"\n","\n",(0,d.jsx)(l.default,{}),"\n",(0,d.jsxs)(n.h2,{id:"配置迁移",children:["配置迁移",(0,d.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#配置迁移",children:"#"})]}),"\n",(0,d.jsxs)(n.p,{children:["开启 Rspack 构建能力后，还需要参考 ",(0,d.jsx)(n.a,{href:"https://modernjs.dev/builder/guide/advanced/rspack-start.html#%E4%BB%8E-webpack-%E8%BF%81%E7%A7%BB%E5%88%B0-rspack",target:"_blank",rel:"noopener noreferrer",children:"配置差异"})," 进行进一步的配置迁移。"]}),"\n",(0,d.jsxs)(n.h2,{id:"rspack-和-modernjs-的版本关系",children:["Rspack 和 Modern.js 的版本关系",(0,d.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#rspack-和-modernjs-的版本关系",children:"#"})]}),"\n",(0,d.jsxs)(n.p,{children:["通常情况下，Modern.js 内会集成 Rspack 的最新版本，通过 ",(0,d.jsx)(n.code,{children:"npx modern upgrade"})," 即可将当前项目中的 Modern.js 相关依赖以及内置的 Rspack 更新至最新版本。"]}),"\n",(0,d.jsx)(n.p,{children:"但 Modern.js 对于 Rspack 的依赖方式为锁版本方式(非自动升级)，由于发版周期不同步等原因，可能会出现 Modern.js 内集成的 Rspack 版本落后于 Rspack 最新版本的情况。"}),"\n",(0,d.jsx)(n.p,{children:"当你执行 dev / build 命令时，Modern.js 会自动打印当前使用的 Rspack 版本："}),"\n",(0,d.jsx)(n.p,{children:(0,d.jsx)(n.img,{src:"https://lf3-static.bytednsdoc.com/obj/eden-cn/6221eh7uhbfvhn/modern/img_v2_dfcf051f-21db-4741-a108-d9f7a82c3abg.png",alt:"rspack_version_log"})}),"\n",(0,d.jsxs)(n.h4,{id:"修改内置-rspack-版本",children:["修改内置 Rspack 版本",(0,d.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#修改内置-rspack-版本",children:"#"})]}),"\n",(0,d.jsx)(n.p,{children:"可以使用 pnpm / yarn / npm 等包管理工具自带的依赖升级功能来将 Rspack 强制升级到指定版本。"}),"\n",(0,d.jsxs)(n.p,{children:["以 pnpm 为例，可通过 ",(0,d.jsx)(n.code,{children:"overrides"})," 以下依赖更新 Rspack 版本:"]}),"\n",(0,d.jsx)(n.pre,{children:(0,d.jsx)(n.code,{className:"language-json",meta:"title=package.json",children:'{\n  "pnpm": {\n    "overrides": {\n      "@rspack/core": "nightly",\n      "@rspack/dev-client": "nightly",\n      "@rspack/plugin-html": "nightly"\n    }\n  }\n}\n'})}),"\n",(0,d.jsxs)(n.div,{className:"modern-directive tip",children:[(0,d.jsx)(n.div,{className:"modern-directive-title",children:"Nightly 版本介绍"}),(0,d.jsxs)(n.div,{className:"modern-directive-content",children:[(0,d.jsx)(n.p,{children:"每天，Rspack 会自动构建基于最新代码的 nightly 版本，用于测试和及早发现错误。"}),(0,d.jsx)(n.p,{children:"通常情况下，这些版本是可用的。如果发现问题，我们会及时进行修复。但是，如果 Rspack 有一些 break change，需要 Modern.js 同步修改代码，那么我们建议等待下一个 Modern.js 版本再进行更新。"})]})]}),"\n",(0,d.jsxs)(n.p,{children:["如果想了解其他包管理工具锁定依赖版本的示例，可以参考：",(0,d.jsx)(n.a,{href:"/guides/get-started/upgrade#%E9%94%81%E5%AE%9A%E5%AD%90%E4%BE%9D%E8%B5%96",children:"锁定子依赖"}),"。"]})]})}(r=globalThis).__RSPRESS_PAGE_META||(r.__RSPRESS_PAGE_META={}),globalThis.__RSPRESS_PAGE_META["zh%2Fguides%2Fadvanced-features%2Frspack-start.mdx"]={toc:[{text:"初始化 Rspack 项目",id:"初始化-rspack-项目",depth:2},{text:"开启 Rspack 构建",id:"开启-rspack-构建",depth:2},{text:"配置迁移",id:"配置迁移",depth:2},{text:"Rspack 和 Modern.js 的版本关系",id:"rspack-和-modernjs-的版本关系",depth:2},{text:"修改内置 Rspack 版本",id:"修改内置-rspack-版本",depth:4}],title:"使用 Rspack",frontmatter:{title:"使用 Rspack",sidebar_position:1}};var h=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=Object.assign({},(0,i.useMDXComponents)(),e.components).wrapper;return n?(0,d.jsx)(n,(0,c._)((0,a._)({},e),{children:(0,d.jsx)(o,(0,a._)({},e))})):o(e)}}}]);