(self.webpackChunk_modern_js_main_doc=self.webpackChunk_modern_js_main_doc||[]).push([["docs_zh_guides_topic-detail_generator_create_config_mdx"],{44786:function(e,n,r){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),Object.defineProperty(n,"default",{enumerable:!0,get:function(){return a}});var s=r("9880"),i=r("23169");function d(e){var n=Object.assign({h3:"h3",a:"a",p:"p",ul:"ul",li:"li"},(0,i.useMDXComponents)(),e.components);return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)(n.h3,{id:"language",children:["language",(0,s.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#language",children:"#"})]}),"\n",(0,s.jsx)(n.p,{children:"问题：请选择开发语言"}),"\n",(0,s.jsx)(n.p,{children:"选项："}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:"TS -- ts"}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:"ES6+ -- js"}),"\n"]}),"\n"]})]})}var a=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=Object.assign({},(0,i.useMDXComponents)(),e.components).wrapper;return n?(0,s.jsx)(n,Object.assign({},e,{children:(0,s.jsx)(d,e)})):d(e)}},4933:function(e,n,r){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),Object.defineProperty(n,"default",{enumerable:!0,get:function(){return a}});var s=r("9880"),i=r("23169");function d(e){var n=Object.assign({h3:"h3",a:"a",p:"p",ul:"ul",li:"li"},(0,i.useMDXComponents)(),e.components);return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)(n.h3,{id:"packagemanager",children:["packageManager",(0,s.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#packagemanager",children:"#"})]}),"\n",(0,s.jsx)(n.p,{children:"问题：请选择包管理工具"}),"\n",(0,s.jsx)(n.p,{children:"选项："}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:"pnpm -- pnpm"}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:"Yarn -- yarn"}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:"npm -- npm"}),"\n"]}),"\n"]})]})}var a=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=Object.assign({},(0,i.useMDXComponents)(),e.components).wrapper;return n?(0,s.jsx)(n,Object.assign({},e,{children:(0,s.jsx)(d,e)})):d(e)}},69935:function(e,n,r){"use strict";Object.defineProperty(n,"__esModule",{value:!0});!function(e,n){for(var r in n)Object.defineProperty(e,r,{enumerable:!0,get:n[r]})}(n,{frontmatter:function(){return c},title:function(){return l},toc:function(){return h},default:function(){return o}});var s=r("9880"),i=r("23169"),d=r.ir(r("44786")),a=r.ir(r("4933")),c={sidebar_position:3},l="配置参数",h=[{text:"通用配置",depth:2,id:"通用配置"},{text:"solution",depth:3,id:"solution"},{text:"scenes",depth:3,id:"scenes"},{text:"Web 应用",depth:2,id:"web-应用"},{text:"buildTools",depth:3,id:"buildtools"},{text:"Npm 模块",depth:2,id:"npm-模块"},{text:"packageName",depth:3,id:"packagename"},{text:"文档站",depth:2,id:"文档站"},{text:"Monorepo",depth:2,id:"monorepo"}];function t(e){var n=Object.assign({h1:"h1",a:"a",p:"p",code:"code",h2:"h2",h3:"h3",ul:"ul",li:"li",div:"div"},(0,i.useMDXComponents)(),e.components);return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)(n.h1,{id:"配置参数",children:["配置参数",(0,s.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#配置参数",children:"#"})]}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.code,{children:"@modern-js/create"})," 提供了 ",(0,s.jsx)(n.a,{href:"/guides/topic-detail/generator/create/option#-c,---config-%3Cconfig%3E",children:"--config"})," 参数，用于提前指定执行过程中交互问题的答案。"]}),"\n",(0,s.jsxs)(n.p,{children:["这里将介绍不同情况下，可以在 ",(0,s.jsx)(n.code,{children:"config"})," 中配置的字段及字段值。"]}),"\n",(0,s.jsxs)(n.h2,{id:"通用配置",children:["通用配置",(0,s.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#通用配置",children:"#"})]}),"\n",(0,s.jsxs)(n.h3,{id:"solution",children:["solution",(0,s.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#solution",children:"#"})]}),"\n",(0,s.jsx)(n.p,{children:"问题：请选择你想创建的工程类型"}),"\n",(0,s.jsx)(n.p,{children:"选项："}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:"Web 应用 -- mwa"}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:"Npm 模块 -- module"}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:"文档站 -- doc"}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:"Monorepo -- monorepo"}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(n.h3,{id:"scenes",children:["scenes",(0,s.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#scenes",children:"#"})]}),"\n",(0,s.jsx)(n.p,{children:"问题：请选择项目场景"}),"\n",(0,s.jsx)(n.p,{children:"选项："}),"\n",(0,s.jsx)(n.p,{children:"使用自定义生成器插件时的插件关键字列表。"}),"\n",(0,s.jsxs)(n.h2,{id:"web-应用",children:["Web 应用",(0,s.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#web-应用",children:"#"})]}),"\n","\n",(0,s.jsx)(d.default,{}),"\n","\n",(0,s.jsx)(a.default,{}),"\n",(0,s.jsxs)(n.h3,{id:"buildtools",children:["buildTools",(0,s.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#buildtools",children:"#"})]}),"\n",(0,s.jsx)(n.p,{children:"问题：请选择构建工具"}),"\n",(0,s.jsx)(n.p,{children:"选项："}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:"webpack -- webpack"}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:"Rspack -- rspack"}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(n.h2,{id:"npm-模块",children:["Npm 模块",(0,s.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#npm-模块",children:"#"})]}),"\n",(0,s.jsxs)(n.h3,{id:"packagename",children:["packageName",(0,s.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#packagename",children:"#"})]}),"\n",(0,s.jsx)(n.p,{children:"问题：请填写项目名称"}),"\n",(0,s.jsxs)(n.div,{className:"modern-directive info",children:[(0,s.jsx)(n.div,{className:"modern-directive-title",children:"INFO"}),(0,s.jsx)(n.div,{className:"modern-directive-content",children:(0,s.jsxs)(n.p,{children:["Npm 模块的 ",(0,s.jsx)(n.code,{children:"package.json"})," 的 name 字段值，该配置值为字符串类型。\n"]})})]}),"\n",(0,s.jsx)(d.default,{}),"\n",(0,s.jsx)(a.default,{}),"\n",(0,s.jsxs)(n.h2,{id:"文档站",children:["文档站",(0,s.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#文档站",children:"#"})]}),"\n",(0,s.jsx)(a.default,{}),"\n",(0,s.jsxs)(n.h2,{id:"monorepo",children:["Monorepo",(0,s.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#monorepo",children:"#"})]}),"\n",(0,s.jsx)(a.default,{})]})}var o=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=Object.assign({},(0,i.useMDXComponents)(),e.components).wrapper;return n?(0,s.jsx)(n,Object.assign({},e,{children:(0,s.jsx)(t,e)})):t(e)}}}]);