(self.webpackChunk_modern_js_main_doc=self.webpackChunk_modern_js_main_doc||[]).push([["docs_en_apis_app_runtime_bff_use-context_mdx"],{99875:function(e,n,t){"use strict";Object.defineProperty(n,"__esModule",{value:!0});!function(e,n){for(var t in n)Object.defineProperty(e,t,{enumerable:!0,get:n[t]})}(n,{frontmatter:function(){return i},title:function(){return a},toc:function(){return c},default:function(){return d}});var r=t("9880"),s=t("23169"),i={title:"useContext"},a="useContext",c=[{text:"Usage",depth:2,id:"usage"},{text:"Function Signature",depth:2,id:"function-signature"},{text:"Example",depth:2,id:"example"}];function o(e){var n=Object.assign({h1:"h1",a:"a",p:"p",h2:"h2",pre:"pre",code:"code",div:"div"},(0,s.useMDXComponents)(),e.components);return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(n.h1,{id:"usecontext",children:["useContext",(0,r.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#usecontext",children:"#"})]}),"\n",(0,r.jsx)(n.p,{children:"Used to get the request context in the BFF function."}),"\n",(0,r.jsxs)(n.h2,{id:"usage",children:["Usage",(0,r.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#usage",children:"#"})]}),"\n",(0,r.jsx)(n.p,{children:"according to the framework extend plugin, export from the corresponding namespace:"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-ts",children:"import { useContext } from '@modern-js/runtime/{namespace}';\n"})}),"\n",(0,r.jsxs)(n.h2,{id:"function-signature",children:["Function Signature",(0,r.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#function-signature",children:"#"})]}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.code,{children:"function useContext(): any"})}),"\n",(0,r.jsxs)(n.h2,{id:"example",children:["Example",(0,r.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#example",children:"#"})]}),"\n",(0,r.jsxs)(n.p,{children:["Developers can get more request information through ",(0,r.jsx)(n.code,{children:"context"}),", such as browser UA(an example is when using the koa framework):"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-ts",children:"import { useContext } from '@modern-js/runtime/koa';\n\nexport async function get() {\n  const ctx = useContext();\n  return ctx.req.headers['user-agent'];\n}\n"})}),"\n",(0,r.jsxs)(n.div,{className:"modern-directive caution",children:[(0,r.jsx)(n.div,{className:"modern-directive-title",children:"CAUTION"}),(0,r.jsxs)(n.div,{className:"modern-directive-content",children:[(0,r.jsxs)(n.p,{children:["only in BFF function, ",(0,r.jsx)(n.code,{children:"useContext"})," API can be used."]}),"\n"]})]}),"\n",(0,r.jsxs)(n.p,{children:["Although the ",(0,r.jsx)(n.code,{children:"useContext"})," API is supported in any framework extend plugin, the types of return values are different."]})]})}var d=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=Object.assign({},(0,s.useMDXComponents)(),e.components).wrapper;return n?(0,r.jsx)(n,Object.assign({},e,{children:(0,r.jsx)(o,e)})):o(e)}}}]);