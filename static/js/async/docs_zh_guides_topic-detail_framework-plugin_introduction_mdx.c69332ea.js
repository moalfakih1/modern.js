(self.webpackChunk_modern_js_main_doc=self.webpackChunk_modern_js_main_doc||[]).push([["docs_zh_guides_topic-detail_framework-plugin_introduction_mdx"],{3143:function(n,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0});!function(n,e){for(var i in e)Object.defineProperty(n,i,{enumerable:!0,get:e[i]})}(e,{frontmatter:function(){return d},title:function(){return l},toc:function(){return c},default:function(){return h}});var r=i("9880"),s=i("23169"),d={title:"介绍",sidebar_position:1},l="介绍",c=[{text:"Modern.js 插件系统",depth:2,id:"modernjs-插件系统"},{text:"插件可以做什么",depth:2,id:"插件可以做什么"}];function o(n){var e=Object.assign({h1:"h1",a:"a",h2:"h2",p:"p",ul:"ul",li:"li",div:"div"},(0,s.useMDXComponents)(),n.components);return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(e.h1,{id:"介绍",children:["介绍",(0,r.jsx)(e.a,{className:"header-anchor","aria-hidden":"true",href:"#介绍",children:"#"})]}),"\n",(0,r.jsxs)(e.h2,{id:"modernjs-插件系统",children:["Modern.js 插件系统",(0,r.jsx)(e.a,{className:"header-anchor","aria-hidden":"true",href:"#modernjs-插件系统",children:"#"})]}),"\n",(0,r.jsx)(e.p,{children:"Modern.js 用于扩展项目运行、请求、渲染等不同阶段功能的系统，主要分为三个部分：Hook 模型、管理器，上下文共享机制。"}),"\n",(0,r.jsx)(e.p,{children:"Hook 模型用于确定当前 Hook 的执行方式，不同 Hook 模型的函数拥有不同的执行逻辑。管理器用于控制 Hook 的执行与调度。上下文共享机制用于在不同 Hook 间传递信息。"}),"\n",(0,r.jsx)(e.p,{children:"目前 Modern.js 提供几种不同的 Hook 模型："}),"\n",(0,r.jsxs)(e.ul,{children:["\n",(0,r.jsxs)(e.li,{children:["Pipeline","\n",(0,r.jsxs)(e.ul,{children:["\n",(0,r.jsx)(e.li,{children:"Sync"}),"\n",(0,r.jsx)(e.li,{children:"Async"}),"\n"]}),"\n"]}),"\n",(0,r.jsxs)(e.li,{children:["Waterfall","\n",(0,r.jsxs)(e.ul,{children:["\n",(0,r.jsx)(e.li,{children:"Sync"}),"\n",(0,r.jsx)(e.li,{children:"Async"}),"\n"]}),"\n"]}),"\n",(0,r.jsxs)(e.li,{children:["Workflow","\n",(0,r.jsxs)(e.ul,{children:["\n",(0,r.jsx)(e.li,{children:"Sync"}),"\n",(0,r.jsx)(e.li,{children:"Async"}),"\n",(0,r.jsx)(e.li,{children:"Parallel(Async)"}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,r.jsxs)(e.div,{className:"modern-directive note",children:[(0,r.jsx)(e.div,{className:"modern-directive-title",children:"NOTE"}),(0,r.jsxs)(e.div,{className:"modern-directive-content",children:[(0,r.jsx)(e.p,{children:"后续章节详细介绍各个模型的执行方式。"}),"\n"]})]}),"\n",(0,r.jsx)(e.p,{children:"基于 Hook 模型和管理器，Modern.js 暴露了三套插件：CLI、Runtime、Server。"}),"\n",(0,r.jsx)(e.p,{children:"其中 CLI 插件是 Modern.js 中主要的运行流程控制模型，Modern.js 中绝大部分功能都是主要通过这一套模型运行的。Runtime 插件主要负责处理 React 组件渲染逻辑。Server 插件主要用于对服务端的生命周期以及用户请求的控制。"}),"\n",(0,r.jsxs)(e.h2,{id:"插件可以做什么",children:["插件可以做什么",(0,r.jsx)(e.a,{className:"header-anchor","aria-hidden":"true",href:"#插件可以做什么",children:"#"})]}),"\n",(0,r.jsx)(e.p,{children:"Modern.js 的所有功能都是通过这套插件实现的，这意味着 Modern.js 中的所有能力是都对开发者开放的。开发者可以通过编写插件来扩展更多功能，适配复杂场景，包括但不限于："}),"\n",(0,r.jsxs)(e.ul,{children:["\n",(0,r.jsx)(e.li,{children:"注册命令"}),"\n",(0,r.jsx)(e.li,{children:"修改 Modern.js 配置、配置校验 Schema"}),"\n",(0,r.jsx)(e.li,{children:"修改编译时的 Webpack/Babel/Less/Sass/Tailwind CSS/... 配置"}),"\n",(0,r.jsx)(e.li,{children:"修改运行时需要渲染的 React 组件、Element"}),"\n",(0,r.jsx)(e.li,{children:"修改页面路由"}),"\n",(0,r.jsx)(e.li,{children:"修改服务器路由"}),"\n",(0,r.jsx)(e.li,{children:"自定义控制台输出"}),"\n",(0,r.jsx)(e.li,{children:"自定义动态 HTML 模版"}),"\n",(0,r.jsx)(e.li,{children:"自定义 Node.js 服务器框架"}),"\n",(0,r.jsx)(e.li,{children:"自定义 React 组件客户端/服务器端渲染"}),"\n",(0,r.jsx)(e.li,{children:"..."}),"\n"]}),"\n",(0,r.jsx)(e.p,{children:"当 Modern.js 暂时没有覆盖到你所需要的功能或场景时，可以开发一个自定义插件，来实现适配特殊场景的相关功能。"})]})}var h=function(){var n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},e=Object.assign({},(0,s.useMDXComponents)(),n.components).wrapper;return e?(0,r.jsx)(e,Object.assign({},n,{children:(0,r.jsx)(o,n)})):o(n)}}}]);