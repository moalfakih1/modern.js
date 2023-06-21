(self.webpackChunk_modern_js_main_doc=self.webpackChunk_modern_js_main_doc||[]).push([["docs_zh_apis_app_runtime_bff_hook_mdx"],{96254:function(e,n,r){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),Object.defineProperty(n,"default",{enumerable:!0,get:function(){return t}});var d,s=r("15169"),a=r("43932"),i=r("9880"),o=r("23169");function h(e){var n=Object.assign({h1:"h1",a:"a",p:"p",h2:"h2",pre:"pre",code:"code",h3:"h3",ul:"ul",li:"li"},(0,o.useMDXComponents)(),e.components);return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsxs)(n.h1,{id:"hook",children:["hook",(0,i.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#hook",children:"#"})]}),"\n",(0,i.jsx)(n.p,{children:"用于在 BFF 函数写法下添加框架中间件，添加的中间件的执行会在 BFF 函数定义的路由之前。"}),"\n",(0,i.jsxs)(n.h2,{id:"使用姿势",children:["使用姿势",(0,i.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#使用姿势",children:"#"})]}),"\n",(0,i.jsx)(n.p,{children:"根据使用的框架拓展插件，从对应的命名空间中导出："}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-ts",children:"import { hook } from '@modern-js/runtime/{namespace}';\n"})}),"\n",(0,i.jsxs)(n.h2,{id:"函数签名",children:["函数签名",(0,i.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#函数签名",children:"#"})]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-ts",children:"type HookOptions = {\n  addMiddleware: string | function;\n};\n\nfunction hook(options: HookOptions): void;\n"})}),"\n",(0,i.jsxs)(n.h3,{id:"参数",children:["参数",(0,i.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#参数",children:"#"})]}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"options"}),": Modern.js 提供的一系列钩子。","\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"addMiddleware"}),": 添加 BFF 中间件的钩子。"]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(n.h2,{id:"示例",children:["示例",(0,i.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#示例",children:"#"})]}),"\n",(0,i.jsx)(n.p,{children:"使用不同的框架，应添加不同框架的中间件（示例为使用 koa 框架时）："}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-ts",meta:"title=api/_app.ts",children:"import { hook } from '@modern-js/runtime/koa';\n\nexport default hook(({ addMiddleware }) => {\n  addMiddleware(async (ctx, next) => {\n    ctx.req.query.id = 'koa';\n    await next();\n  });\n});\n"})})]})}(d=globalThis).__RSPRESS_PAGE_META||(d.__RSPRESS_PAGE_META={}),globalThis.__RSPRESS_PAGE_META["/home/runner/work/modern.js/modern.js/packages/document/main-doc/docs/zh/apis/app/runtime/bff/hook.mdx"]={toc:[{text:"使用姿势",id:"使用姿势",depth:2},{text:"函数签名",id:"函数签名",depth:2},{text:"参数",id:"参数",depth:3},{text:"示例",id:"示例",depth:2}],title:"hook",frontmatter:{title:"hook"}};var t=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=Object.assign({},(0,o.useMDXComponents)(),e.components).wrapper;return n?(0,i.jsx)(n,a._(s._({},e),{children:(0,i.jsx)(h,s._({},e))})):h(e)}}}]);