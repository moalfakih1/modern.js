(self.webpackChunk_modern_js_main_doc=self.webpackChunk_modern_js_main_doc||[]).push([["docs_zh_community_blog_2022-0708-updates_md"],{59926:function(e,r,n){"use strict";Object.defineProperty(r,"__esModule",{value:!0});!function(e,r){for(var n in r)Object.defineProperty(e,n,{enumerable:!0,get:r[n]})}(r,{frontmatter:function(){return c},title:function(){return o},toc:function(){return i},default:function(){return t}});var d=n("9880"),s=n("23169"),c={sidebar_position:99},o="2022 年 7 ~ 8 月更新内容",i=[{text:"支持 React 18",depth:2,id:"支持-react-18"},{text:"Modern.js 包版本统一",depth:2,id:"modernjs-包版本统一"},{text:"模块工程支持 bundle 构建",depth:2,id:"模块工程支持-bundle-构建"},{text:"Reduck v1.1",depth:2,id:"reduck-v11"},{text:"其他更新",depth:2,id:"其他更新"},{text:"命令和配置",depth:3,id:"命令和配置"},{text:"BFF",depth:3,id:"bff"},{text:"SSR",depth:3,id:"ssr"},{text:"Web Server",depth:3,id:"web-server"}];function l(e){var r=Object.assign({h1:"h1",a:"a",blockquote:"blockquote",p:"p",ul:"ul",li:"li",strong:"strong",h2:"h2",code:"code",pre:"pre",h3:"h3"},(0,s.useMDXComponents)(),e.components);return(0,d.jsxs)(d.Fragment,{children:[(0,d.jsxs)(r.h1,{id:"2022-年-7-~-8-月更新内容",children:["2022 年 7 ~ 8 月更新内容",(0,d.jsx)(r.a,{className:"header-anchor","aria-hidden":"true",href:"#2022-年-7-~-8-月更新内容",children:"#"})]}),"\n",(0,d.jsxs)(r.blockquote,{children:["\n",(0,d.jsx)(r.p,{children:"发表于 2022.09.05"}),"\n"]}),"\n",(0,d.jsx)(r.p,{children:"Modern.js 7 ~ 8 月的最新版本为 v1.17.0，本双月的主要更新有："}),"\n",(0,d.jsxs)(r.ul,{children:["\n",(0,d.jsxs)(r.li,{children:[(0,d.jsx)(r.strong,{children:"支持 React 18"}),"：完成框架和插件对 React 18 的适配。"]}),"\n",(0,d.jsxs)(r.li,{children:[(0,d.jsx)(r.strong,{children:"包版本统一"}),"：Modern.js 所有组成包的版本号进行统一，提供升级命令。"]}),"\n",(0,d.jsxs)(r.li,{children:[(0,d.jsx)(r.strong,{children:"模块工程支持 bundle 构建"}),"：模块工程类型的项目，支持对产物做 bundle 构建。"]}),"\n",(0,d.jsxs)(r.li,{children:[(0,d.jsx)(r.strong,{children:"Reduck v1.1"}),"：发布 Reduck v1.1，使用文档全面更新。"]}),"\n"]}),"\n",(0,d.jsxs)(r.h2,{id:"支持-react-18",children:["支持 React 18",(0,d.jsx)(r.a,{className:"header-anchor","aria-hidden":"true",href:"#支持-react-18",children:"#"})]}),"\n",(0,d.jsxs)(r.p,{children:["Modern.js 框架和相关插件完成对 React 18 的适配。现在，只需要将项目中的 ",(0,d.jsx)(r.code,{children:"react"}),"、",(0,d.jsx)(r.code,{children:"react-dom"})," 两个包的版本，升级到最新的 React 18 大版本，就可以使用 React 18 的新功能。"]}),"\n",(0,d.jsxs)(r.p,{children:["注意，使用 ",(0,d.jsx)(r.code,{children:"@modern-js/create"})," 命令默认创建的项目，安装的依赖 ",(0,d.jsx)(r.code,{children:"react"}),"、",(0,d.jsx)(r.code,{children:"react-dom"})," 的版本仍然为 17，如果希望使用 React 18，请手动升级这两个包的版本。"]}),"\n",(0,d.jsx)(r.p,{children:"另外，SSR 流式渲染功能，目前尚在开发中，暂不支持。"}),"\n",(0,d.jsxs)(r.h2,{id:"modernjs-包版本统一",children:["Modern.js 包版本统一",(0,d.jsx)(r.a,{className:"header-anchor","aria-hidden":"true",href:"#modernjs-包版本统一",children:"#"})]}),"\n",(0,d.jsx)(r.p,{children:"之前，组成 Modern.js 的各个包的版本号并不统一，Modern.js 自身的版本和这些包的版本缺少明确的对应关系。这不仅增加了我们的维护成本，而且给用户的使用和升级带来了很多困扰。"}),"\n",(0,d.jsxs)(r.p,{children:["从 v1.15.0 版本开始，Modern.js 自身的版本号和所有组成包的版本号，进行了统一。例如，Modern.js v1.15.0，意味着所有组成包的版本号也是 v1.15.0。 每次发布新版本，Modern.js 所有包都会使用统一的版本号执行发布。 Github 上仓库的 ",(0,d.jsx)(r.a,{href:"https://github.com/modern-js-dev/modern.js/tags",target:"_blank",rel:"noopener noreferrer",children:"tag"})," 编号和 Modern.js 所有组成包的版本号是一一对应的。"]}),"\n",(0,d.jsxs)(r.p,{children:["我们提供了专门的升级工具： ",(0,d.jsx)(r.code,{children:"@modern-js/upgrade"}),"，可以自动升级 Modern.js 到当前的最新版本。使用方式为，在项目根路径下执行："]}),"\n",(0,d.jsx)(r.pre,{children:(0,d.jsx)(r.code,{className:"language-bash",children:"npx @modern-js/upgrade\n"})}),"\n",(0,d.jsxs)(r.h2,{id:"模块工程支持-bundle-构建",children:["模块工程支持 bundle 构建",(0,d.jsx)(r.a,{className:"header-anchor","aria-hidden":"true",href:"#模块工程支持-bundle-构建",children:"#"})]}),"\n",(0,d.jsxs)(r.p,{children:["模块工程（ ",(0,d.jsx)(r.code,{children:"@modern-js/module-tools"})," ）对底层实现进行重构，新增 ",(0,d.jsx)(r.a,{href:"https://modernjs.dev/v1/docs/apis/module/config/output/build-config/",target:"_blank",rel:"noopener noreferrer",children:(0,d.jsx)(r.code,{children:"output.buildConfig"})})," 配置，用于提供更加丰富的构建功能。"]}),"\n",(0,d.jsxs)(r.p,{children:["新的模块工程项目，不仅支持对产物做 bundless 构建，也支持 bundle 构建。通过配置 ",(0,d.jsx)(r.code,{children:"buildConfig"})," 下的 ",(0,d.jsx)(r.a,{href:"https://modernjs.dev/v1/docs/apis/module/config/output/build-config/build-type",target:"_blank",rel:"noopener noreferrer",children:(0,d.jsx)(r.code,{children:"buildType"})})," ，即可进行 bundle 构建："]}),"\n",(0,d.jsx)(r.pre,{children:(0,d.jsx)(r.code,{className:"language-ts",meta:'title="modern.config.ts"',children:"import { defineConfig } from '@modern-js/module-tools';\n\nexport default defineConfig({\n  output: {\n    buildConfig: {\n      buildType: 'bundle', // 采用 bundle 构建\n    },\n  },\n});\n"})}),"\n",(0,d.jsxs)(r.p,{children:[(0,d.jsx)(r.code,{children:"buildConfig"})," 下还支持 ",(0,d.jsx)(r.a,{href:"https://modernjs.dev/v1/docs/apis/module/config/output/build-config/bundle-options",target:"_blank",rel:"noopener noreferrer",children:(0,d.jsx)(r.code,{children:"bundleOptions"})})," 配置，可以对构建行为做更多的自定义：如设置产物文件名、是否进行代码分片、设置代码压缩方式等。"]}),"\n",(0,d.jsxs)(r.h2,{id:"reduck-v11",children:["Reduck v1.1",(0,d.jsx)(r.a,{className:"header-anchor","aria-hidden":"true",href:"#reduck-v11",children:"#"})]}),"\n",(0,d.jsx)(r.p,{children:"Reduck 作为 Modern.js 的第一方状态管理方案，发布 v1.1 版本，增加对 React 18 Concurrent Rendering 的支持，并对开发体验和功能稳定性做了大量优化。"}),"\n",(0,d.jsx)(r.p,{children:"新增 API："}),"\n",(0,d.jsxs)(r.ul,{children:["\n",(0,d.jsxs)(r.li,{children:[(0,d.jsx)(r.a,{href:"https://modernjs.dev/v1/docs/apis/app/runtime/model/use-store",target:"_blank",rel:"noopener noreferrer",children:(0,d.jsx)(r.code,{children:"useStore"})})," ：可以在组件内获取当前组件树共享的 Store，满足在组件外访问 Model 的场景需求。"]}),"\n",(0,d.jsxs)(r.li,{children:[(0,d.jsx)(r.a,{href:"https://modernjs.dev/v1/docs/apis/app/runtime/model/handle-effect",target:"_blank",rel:"noopener noreferrer",children:(0,d.jsx)(r.code,{children:"handleEffect"})}),"：一个工具函数，可以极大地简化异步数据获取的逻辑代码。"]}),"\n",(0,d.jsxs)(r.li,{children:[(0,d.jsx)(r.a,{href:"https://modernjs.dev/v1/docs/apis/app/runtime/model/connect",target:"_blank",rel:"noopener noreferrer",children:(0,d.jsx)(r.code,{children:"connect"})}),"： HOC 风格的 API，用于访问 Model。"]}),"\n"]}),"\n",(0,d.jsxs)(r.p,{children:["开发体验方面，优化 Reduck 组成包的组织结构，减少用户侧依赖数量，现在只需要引入 ",(0,d.jsx)(r.code,{children:"@modern-js-reduck/react"})," 一个包（Modern.js 中 Reduck 功能已内置，无需手动引入包）；优化 API 的 TS 类型定义，改进类型信息的自动推导，整体达到 TS 支持开箱即用。"]}),"\n",(0,d.jsxs)(r.p,{children:["此外，对 Reduck ",(0,d.jsx)(r.a,{href:"https://modernjs.dev/v1/docs/guides/features/model/quick-start",target:"_blank",rel:"noopener noreferrer",children:"使用文档"})," 和 ",(0,d.jsx)(r.a,{href:"https://modernjs.dev/v1/docs/apis/app/runtime/model/model_",target:"_blank",rel:"noopener noreferrer",children:"API 文档"})," 做了全面更新，提供了更加丰富和详尽的内容。"]}),"\n",(0,d.jsxs)(r.h2,{id:"其他更新",children:["其他更新",(0,d.jsx)(r.a,{className:"header-anchor","aria-hidden":"true",href:"#其他更新",children:"#"})]}),"\n",(0,d.jsxs)(r.h3,{id:"命令和配置",children:["命令和配置",(0,d.jsx)(r.a,{className:"header-anchor","aria-hidden":"true",href:"#命令和配置",children:"#"})]}),"\n",(0,d.jsx)(r.p,{children:(0,d.jsx)(r.strong,{children:"新增命令"})}),"\n",(0,d.jsxs)(r.ul,{children:["\n",(0,d.jsxs)(r.li,{children:[(0,d.jsx)(r.a,{href:"https://modernjs.dev/v1/docs/apis/app/commands/upgrade",target:"_blank",rel:"noopener noreferrer",children:(0,d.jsx)(r.code,{children:"upgrade"})}),"：自动升级 Modern.js 版本。功能同执行 ",(0,d.jsx)(r.code,{children:"npx @modern-js/upgrade"})," 命令。"]}),"\n",(0,d.jsxs)(r.li,{children:[(0,d.jsx)(r.a,{href:"https://modernjs.dev/v1/docs/apis/app/commands/inspect",target:"_blank",rel:"noopener noreferrer",children:(0,d.jsx)(r.code,{children:"inspect"})}),"：通过该命令可以输出当前项目使用的完整 webpack 配置。"]}),"\n",(0,d.jsxs)(r.li,{children:[(0,d.jsx)(r.a,{href:"https://modernjs.dev/v1/docs/apis/module/commands/gen-release-note",target:"_blank",rel:"noopener noreferrer",children:(0,d.jsx)(r.code,{children:"gen-release-note"})}),"：自动根据当前仓库的 ",(0,d.jsx)(r.a,{href:"https://github.com/changesets/changesets",target:"_blank",rel:"noopener noreferrer",children:"changesets"})," 信息生成发布日志。此外，我们提供了",(0,d.jsx)(r.a,{href:"https://modernjs.dev/v1/docs/guides/features/changesets/introduce",target:"_blank",rel:"noopener noreferrer",children:"包版本管理专题文档"}),"，方便大家更好的认识和使用 changesets 及相关功能。"]}),"\n"]}),"\n",(0,d.jsx)(r.p,{children:(0,d.jsx)(r.strong,{children:"新增配置"})}),"\n",(0,d.jsxs)(r.ul,{children:["\n",(0,d.jsxs)(r.li,{children:[(0,d.jsx)(r.a,{href:"https://modernjs.dev/v1/docs/apis/app/config/source/pre-entry",target:"_blank",rel:"noopener noreferrer",children:(0,d.jsx)(r.code,{children:"source.preEntry"})}),"：用于配置全局脚本，这段脚本会早于页面的代码执行。"]}),"\n"]}),"\n",(0,d.jsxs)(r.h3,{id:"bff",children:["BFF",(0,d.jsx)(r.a,{className:"header-anchor","aria-hidden":"true",href:"#bff",children:"#"})]}),"\n",(0,d.jsxs)(r.ul,{children:["\n",(0,d.jsxs)(r.li,{children:["新增 ",(0,d.jsx)(r.a,{href:"https://modernjs.dev/v1/docs/apis/app/runtime/bff-server/after-lambda-registed",target:"_blank",rel:"noopener noreferrer",children:(0,d.jsx)(r.code,{children:"afterLambdaRegisted"})})," hook。用于使用 Express 框架时，在 BFF 函数注册路由之后执行。可以用来添加错误处理逻辑，新增路由等。"]}),"\n",(0,d.jsx)(r.li,{children:"优化使用 Express 框架开发场景下的热更新性能。在比较大的项目中，BFF 函数更改，热更新也可以在几十毫秒内完成。"}),"\n"]}),"\n",(0,d.jsxs)(r.h3,{id:"ssr",children:["SSR",(0,d.jsx)(r.a,{className:"header-anchor","aria-hidden":"true",href:"#ssr",children:"#"})]}),"\n",(0,d.jsxs)(r.ul,{children:["\n",(0,d.jsx)(r.li,{children:"SSR 产物添加 Sourcemap，优化服务端调试 SSR 代码的体验。"}),"\n"]}),"\n",(0,d.jsxs)(r.h3,{id:"web-server",children:["Web Server",(0,d.jsx)(r.a,{className:"header-anchor","aria-hidden":"true",href:"#web-server",children:"#"})]}),"\n",(0,d.jsxs)(r.ul,{children:["\n",(0,d.jsxs)(r.li,{children:["支持按入口设置响应头，使用方式请参考",(0,d.jsx)(r.a,{href:"https://modernjs.dev/v1/docs/apis/app/config/server/routes#%E8%87%AA%E5%AE%9A%E4%B9%89%E5%93%8D%E5%BA%94%E5%A4%B4",target:"_blank",rel:"noopener noreferrer",children:"文档"}),"。"]}),"\n"]})]})}var t=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},r=Object.assign({},(0,s.useMDXComponents)(),e.components).wrapper;return r?(0,d.jsx)(r,Object.assign({},e,{children:(0,d.jsx)(l,e)})):l(e)}}}]);