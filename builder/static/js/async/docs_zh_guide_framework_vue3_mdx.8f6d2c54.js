(self.webpackChunk_modern_js_builder_doc=self.webpackChunk_modern_js_builder_doc||[]).push([["docs_zh_guide_framework_vue3_mdx"],{21693:function(e,r,n){"use strict";n.r(r),n.d(r,{default:function(){return u}});var d,i=n("15169"),s=n("43932"),l=n("9880"),c=n("23169");function h(e){var r=Object.assign({h1:"h1",a:"a",p:"p",h2:"h2",ul:"ul",li:"li",code:"code",pre:"pre"},(0,c.useMDXComponents)(),e.components);return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsxs)(r.h1,{id:"构建-vue-3-应用",children:["构建 Vue 3 应用",(0,l.jsx)(r.a,{className:"header-anchor","aria-hidden":"true",href:"#构建-vue-3-应用",children:"#"})]}),"\n",(0,l.jsx)(r.p,{children:"尽管 Modern.js 框架是基于 React 实现的，但底层的 Modern.js Builder 并不与 React 耦合。因此，你可以使用 Modern.js Builder 来构建你的 Vue 应用，并使用 Modern.js Builder 提供的绝大多数能力。"}),"\n",(0,l.jsx)(r.p,{children:"在这篇文档中，你可以了解到如何基于 Modern.js Builder 来构建一个 Vue 3 应用。"}),"\n",(0,l.jsxs)(r.h2,{id:"示例项目",children:["示例项目",(0,l.jsx)(r.a,{className:"header-anchor","aria-hidden":"true",href:"#示例项目",children:"#"})]}),"\n",(0,l.jsx)(r.p,{children:"我们搭建了一个基于 Modern.js Builder 的 Vue 3 示例项目，你可以参考或直接克隆这个项目，并对照下文的指南来了解更多细节。"}),"\n",(0,l.jsxs)(r.ul,{children:["\n",(0,l.jsx)(r.li,{children:(0,l.jsx)(r.a,{href:"https://github.com/web-infra-dev/modern-js-examples/tree/main/examples/builder-vue3",target:"_blank",rel:"noopener noreferrer",children:"modern-js-examples - builder-vue3"})}),"\n"]}),"\n",(0,l.jsxs)(r.h2,{id:"cli-工具",children:["CLI 工具",(0,l.jsx)(r.a,{className:"header-anchor","aria-hidden":"true",href:"#cli-工具",children:"#"})]}),"\n",(0,l.jsx)(r.p,{children:"在开始构建 Vue 项目之前，你需要一个 CLI 工具来提供基本的命令。"}),"\n",(0,l.jsxs)(r.p,{children:["你可以直接使用 Builder 提供的 ",(0,l.jsx)(r.a,{href:"/guide/basic/builder-cli",children:"CLI 工具"}),"，也可以基于 Builder 的 ",(0,l.jsx)(r.a,{href:"/api/builder-core",children:"Node API"})," 搭建属于你自己的 CLI 工具。"]}),"\n",(0,l.jsxs)(r.h2,{id:"使用-vue-插件",children:["使用 Vue 插件",(0,l.jsx)(r.a,{className:"header-anchor","aria-hidden":"true",href:"#使用-vue-插件",children:"#"})]}),"\n",(0,l.jsxs)(r.p,{children:["为了能够编译 Vue 的 SFC（单文件组件）和 JSX 语法，你需要注册 Builder 的 ",(0,l.jsx)(r.a,{href:"/plugins/plugin-vue",children:"Vue 插件"}),"，插件会自动添加 Vue 构建所需的配置，并移除内置的 React 相关配置。"]}),"\n",(0,l.jsxs)(r.p,{children:["例如，在 ",(0,l.jsx)(r.code,{children:"builder.config.ts"})," 中注册："]}),"\n",(0,l.jsx)(r.pre,{children:(0,l.jsx)(r.code,{className:"language-ts",meta:'title="builder.config.ts"',children:"import { defineConfig } from '@modern-js/builder-cli';\nimport { builderPluginVue } from '@modern-js/builder-plugin-vue';\n\nexport default defineConfig({\n  builderPlugins: [builderPluginVue()],\n});\n"})}),"\n",(0,l.jsxs)(r.h2,{id:"类型定义",children:["类型定义",(0,l.jsx)(r.a,{className:"header-anchor","aria-hidden":"true",href:"#类型定义",children:"#"})]}),"\n",(0,l.jsxs)(r.p,{children:["在 TypeScript 项目中，你需要为 ",(0,l.jsx)(r.code,{children:"*.vue"})," 文件添加类型定义，使 TypeScript 能够正确识别它。"]}),"\n",(0,l.jsxs)(r.p,{children:["请在 ",(0,l.jsx)(r.code,{children:"src"})," 目录下创建 ",(0,l.jsx)(r.code,{children:"env.d.ts"}),"，并添加以下内容："]}),"\n",(0,l.jsx)(r.pre,{children:(0,l.jsx)(r.code,{className:"language-ts",meta:'title="src/env.d.ts"',children:"declare module '*.vue' {\n  import type { DefineComponent } from 'vue';\n\n  // eslint-disable-next-line @typescript-eslint/ban-types\n  const component: DefineComponent<{}, {}, any>;\n  export default component;\n}\n"})}),"\n",(0,l.jsxs)(r.h2,{id:"部署应用",children:["部署应用",(0,l.jsx)(r.a,{className:"header-anchor","aria-hidden":"true",href:"#部署应用",children:"#"})]}),"\n",(0,l.jsxs)(r.p,{children:["当你执行 ",(0,l.jsx)(r.code,{children:"builder build"})," 构建应用后，你会在 ",(0,l.jsx)(r.code,{children:"dist"})," 目录下得到一份静态资源产物，这份产物可以被部署到任意平台或服务器上。"]}),"\n",(0,l.jsxs)(r.p,{children:["请留意 Builder 默认的产物结构并不适用于所有的平台，因为不同的平台对产物目录结构有不同的要求。你可以参考 ",(0,l.jsx)(r.a,{href:"/guide/basic/output-files",children:"构建产物目录"})," 章节对目录结构进行修改，以满足部署平台的要求。"]}),"\n",(0,l.jsxs)(r.p,{children:["此外，如果你需要在本地预览待部署的产物，可以使用 Builder CLI 提供的 ",(0,l.jsx)(r.a,{href:"/guide/basic/builder-cli#builder-serve",children:"builder serve"})," 命令。"]})]})}(d=globalThis).__RSPRESS_PAGE_META||(d.__RSPRESS_PAGE_META={}),globalThis.__RSPRESS_PAGE_META["%2Fhome%2Frunner%2Fwork%2Fmodern.js%2Fmodern.js%2Fpackages%2Fdocument%2Fbuilder-doc%2Fdocs%2Fzh%2Fguide%2Fframework%2Fvue3.mdx"]={toc:[{text:"示例项目",id:"示例项目",depth:2},{text:"CLI 工具",id:"cli-工具",depth:2},{text:"使用 Vue 插件",id:"使用-vue-插件",depth:2},{text:"类型定义",id:"类型定义",depth:2},{text:"部署应用",id:"部署应用",depth:2}],title:"构建 Vue 3 应用",frontmatter:{}};var u=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},r=Object.assign({},(0,c.useMDXComponents)(),e.components).wrapper;return r?(0,l.jsx)(r,(0,s._)((0,i._)({},e),{children:(0,l.jsx)(h,(0,i._)({},e))})):h(e)}}}]);