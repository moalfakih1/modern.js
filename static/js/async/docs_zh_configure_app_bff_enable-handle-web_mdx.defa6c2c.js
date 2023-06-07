(self.webpackChunk_modern_js_main_doc=self.webpackChunk_modern_js_main_doc||[]).push([["docs_zh_configure_app_bff_enable-handle-web_mdx"],{74145:function(e,n,r){"use strict";Object.defineProperty(n,"__esModule",{value:!0});!function(e,n){for(var r in n)Object.defineProperty(e,r,{enumerable:!0,get:n[r]})}(n,{frontmatter:function(){return d},title:function(){return c},toc:function(){return l},default:function(){return t}});var s=r("9880"),i=r("23169"),d={title:"enableHandleWeb"},c="bff.enableHandleWeb",l=[];function a(e){var n=Object.assign({h1:"h1",a:"a",ul:"ul",li:"li",strong:"strong",code:"code",div:"div",p:"p",pre:"pre"},(0,i.useMDXComponents)(),e.components);return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)(n.h1,{id:"bffenablehandleweb",children:["bff.enableHandleWeb",(0,s.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#bffenablehandleweb",children:"#"})]}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"类型："})," ",(0,s.jsx)(n.code,{children:"boolean"})]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"默认值："})," ",(0,s.jsx)(n.code,{children:"false"})]}),"\n"]}),"\n",(0,s.jsxs)(n.div,{className:"modern-directive caution",children:[(0,s.jsx)(n.div,{className:"modern-directive-title",children:"注意"}),(0,s.jsx)(n.div,{className:"modern-directive-content",children:(0,s.jsxs)(n.p,{children:["请先在当前应用项目根目录使用【",(0,s.jsx)(n.a,{href:"/apis/app/commands#modern-new",children:"new"}),"】 启用 BFF 功能。\n"]})})]}),"\n",(0,s.jsx)(n.p,{children:"默认情况下，BFF 服务只能处理 BFF API 的请求。"}),"\n",(0,s.jsxs)(n.p,{children:["当该值设置为 ",(0,s.jsx)(n.code,{children:"true"})," 时，页面请求流量也会经过 BFF，并且 Modern.js 内置的页面渲染的逻辑默认会作为 BFF 服务的最后一个中间件运行。"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-ts",meta:'title="modern.config.ts"',children:"export default defineConfig({\n  bff: {\n    enableHandleWeb: true,\n  },\n});\n"})})]})}var t=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=Object.assign({},(0,i.useMDXComponents)(),e.components).wrapper;return n?(0,s.jsx)(n,Object.assign({},e,{children:(0,s.jsx)(a,e)})):a(e)}}}]);