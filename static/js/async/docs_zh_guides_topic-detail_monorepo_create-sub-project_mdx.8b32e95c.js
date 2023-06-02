(self.webpackChunk_modern_js_main_doc=self.webpackChunk_modern_js_main_doc||[]).push([["docs_zh_guides_topic-detail_monorepo_create-sub-project_mdx"],{7290:function(e,n,r){"use strict";Object.defineProperty(n,"__esModule",{value:!0});!function(e,n){for(var r in n)Object.defineProperty(e,r,{enumerable:!0,get:n[r]})}(n,{frontmatter:function(){return c},title:function(){return d},toc:function(){return o},default:function(){return t}});var i=r("9880"),s=r("23169"),c={sidebar_position:2},d="创建子项目",o=[];function l(e){var n=Object.assign({h1:"h1",a:"a",p:"p",blockquote:"blockquote",ul:"ul",li:"li",pre:"pre",code:"code",div:"div"},(0,s.useMDXComponents)(),e.components);return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsxs)(n.h1,{id:"创建子项目",children:["创建子项目",(0,i.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#创建子项目",children:"#"})]}),"\n",(0,i.jsx)(n.p,{children:"本章将要介绍如何在 Monorepo 工程下创建子项目。"}),"\n",(0,i.jsxs)(n.blockquote,{children:["\n",(0,i.jsx)(n.p,{children:"Modern.js 支持使用 pnpm 和 Yarn 的 Monorepo，这里以使用 pnpm 为例。以下命令可以以同样方式使用 Yarn 来执行。"}),"\n"]}),"\n",(0,i.jsx)(n.p,{children:"Modern.js 针对 Monorepo 工程提供了生成器功能，它用于在 Monorepo 工程下创建不同类型的 Monorepo 子项目。在生成器中提供以下类型子项目的创建："}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"「应用」类型"}),"\n",(0,i.jsx)(n.li,{children:"「模块」类型"}),"\n"]}),"\n",(0,i.jsx)(n.p,{children:"要启动 Monorepo 的生成器功能，可以在 Monorepo 工程根目录下执行命令："}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{children:"pnpm run new\n"})}),"\n",(0,i.jsxs)(n.div,{className:"modern-directive info",children:[(0,i.jsx)(n.div,{className:"modern-directive-title",children:"补充信息"}),(0,i.jsxs)(n.div,{className:"modern-directive-content",children:[(0,i.jsxs)(n.p,{children:["使用 Yarn 的方式：",(0,i.jsx)(n.code,{children:"yarn new"})]}),"\n"]})]}),"\n",(0,i.jsx)(n.p,{children:"执行成功后，可以看到如下内容："}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{children:"? 请选择你想创建的工程类型 (Use arrow keys)\n❯ Web 应用\n  Web 应用（测试）\n  Npm 模块\n  Npm 模块（内部）\n"})}),"\n",(0,i.jsxs)(n.div,{className:"modern-directive info",children:[(0,i.jsx)(n.div,{className:"modern-directive-title",children:"INFO"}),(0,i.jsxs)(n.div,{className:"modern-directive-content",children:[(0,i.jsxs)(n.p,{children:["「应用」与「应用（测试）」都是「应用」类型的项目，区别是「应用」类型的子项目会创建在 ",(0,i.jsx)(n.code,{children:"./apps"})," 目录下，而 「应用（测试）」类型的子项目会创建在 ",(0,i.jsx)(n.code,{children:"./examples"})," 目录下。"]}),"\n"]})]}),"\n",(0,i.jsxs)(n.div,{className:"modern-directive info",children:[(0,i.jsx)(n.div,{className:"modern-directive-title",children:"INFO"}),(0,i.jsxs)(n.div,{className:"modern-directive-content",children:[(0,i.jsxs)(n.p,{children:["「模块」与「模块（内部）」都是「模块」类型的项目，区别之一是「模块」类型的子项目会创建在 ",(0,i.jsx)(n.code,{children:"./packages"})," 目录下，而「模块（内部）」类型的子项目会创建在 ",(0,i.jsx)(n.code,{children:"./features"})," 目录下。"]}),"\n",(0,i.jsx)(n.p,{children:"对于「模块」类型的子项目允许被发布到外部（例如 npm)，而对于「模块（内部）」的子项目则可以在应用项目中直接使用其源码（该特性是「模块」项目不具备的，应用项目对于「模块（内部）」子项目做了特殊处理），因此这类子项目不需要发布到外部。"}),"\n"]})]}),"\n",(0,i.jsx)(n.p,{children:"然后根据不同的需求选择对应的类型项目选项，选择之后便开始出现对应子项目类型的问题和选项。例如选择「应用」后会出现："}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{children:"? 请选择你想创建的工程类型：Web应用\n? 请填写子项目名称\n"})}),"\n",(0,i.jsx)(n.p,{children:"当完成所有生成器问题之后，便开始进行项目的创建和项目依赖的下载。当创建成功之后，可以看到类似以下内容："}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{children:"[INFO] 依赖自动安装成功\n[INFO] 创建成功！\n可在新项目的目录下运行以下命令：\npnpm run dev          # 启动开发服务器\npnpm run build        # 构建生产环境产物\npnpm run serve        # 启动生产环境服务\npnpm run lint         # 运行 ESLint 并自动修复问题\npnpm run new          # 启用可选功能或创建项目要素\n"})})]})}var t=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=Object.assign({},(0,s.useMDXComponents)(),e.components).wrapper;return n?(0,i.jsx)(n,Object.assign({},e,{children:(0,i.jsx)(l,e)})):l(e)}}}]);