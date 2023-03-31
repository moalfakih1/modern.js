(self.webpackChunkwebpack=self.webpackChunkwebpack||[]).push([["docs_zh_apis_app_runtime_bff_use-context_mdx"],{39703:function(e,n,s){"use strict";Object.defineProperty(n,"__esModule",{value:!0});!function(e,n){for(var s in n)Object.defineProperty(e,s,{enumerable:!0,get:n[s]})}(n,{frontmatter:function(){return r},title:function(){return a},toc:function(){return d},default:function(){return o}});var t=s("12151"),c=s("21447");let r={title:"useContext"},a="useContext",d=[{text:"使用姿势",depth:2,id:"使用姿势"},{text:"函数签名",depth:2,id:"函数签名"},{text:"示例",depth:2,id:"示例"}];function i(e){let n=Object.assign({h1:"h1",a:"a",p:"p",h2:"h2",div:"div",button:"button",pre:"pre",code:"code"},(0,c.useMDXComponents)(),e.components);return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)(n.h1,{id:"usecontext",children:["useContext",(0,t.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#usecontext",children:"#"})]}),"\n",(0,t.jsx)(n.p,{children:"用于在一体化 BFF 函数中获取请求上下文。"}),"\n",(0,t.jsxs)(n.h2,{id:"使用姿势",children:["使用姿势",(0,t.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#使用姿势",children:"#"})]}),"\n",(0,t.jsx)(n.p,{children:"根据使用的框架拓展插件，从对应的命名空间中导出："}),"\n",(0,t.jsx)(n.div,{className:"language-",children:(0,t.jsxs)(n.div,{className:"modern-code-content",children:[(0,t.jsx)(n.button,{className:"copy"}),(0,t.jsx)(n.pre,{className:"code",children:(0,t.jsx)(n.code,{className:"language-ts",children:"import { useContext } from '@modern-js/runtime/{namespace}';\n"})})]})}),"\n",(0,t.jsxs)(n.h2,{id:"函数签名",children:["函数签名",(0,t.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#函数签名",children:"#"})]}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.code,{children:"function useContext(): any"})}),"\n",(0,t.jsxs)(n.h2,{id:"示例",children:["示例",(0,t.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#示例",children:"#"})]}),"\n",(0,t.jsxs)(n.p,{children:["开发者可以通过 ",(0,t.jsx)(n.code,{children:"context"})," 获取更多的请求信息，例如获取请求 UA（示例为使用 koa 框架时）："]}),"\n",(0,t.jsx)(n.div,{className:"language-",children:(0,t.jsxs)(n.div,{className:"modern-code-content",children:[(0,t.jsx)(n.button,{className:"copy"}),(0,t.jsx)(n.pre,{className:"code",children:(0,t.jsx)(n.code,{className:"language-ts",children:"import { useContext } from '@modern-js/runtime/koa';\n\nexport async function get() {\n  const ctx = useContext();\n  return ctx.req.headers['user-agent'];\n}\n"})})]})}),"\n",(0,t.jsxs)(n.div,{className:"modern-directive caution",children:[(0,t.jsx)(n.p,{className:"modern-directive-title",children:"注意"}),(0,t.jsxs)(n.div,{className:"modern-directive-content",children:["只有在一体化 BFF 函数中，你才可以使用 ",(0,t.jsx)(n.code,{children:"useContext"})," API 。","\n"]})]}),"\n",(0,t.jsxs)(n.p,{children:["使用不同的运行时框架时，虽然均支持 ",(0,t.jsx)(n.code,{children:"useContext"})," API，但它们的返回值的类型是不同的。"]})]})}var o=function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},{wrapper:n}=Object.assign({},(0,c.useMDXComponents)(),e.components);return n?(0,t.jsx)(n,Object.assign({},e,{children:(0,t.jsx)(i,e)})):i(e)}}}]);