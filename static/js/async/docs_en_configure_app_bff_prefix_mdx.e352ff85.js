(self.webpackChunk_modern_js_main_doc=self.webpackChunk_modern_js_main_doc||[]).push([["docs_en_configure_app_bff_prefix_mdx"],{4854:function(e,n,s){"use strict";Object.defineProperty(n,"__esModule",{value:!0});!function(e,n){for(var s in n)Object.defineProperty(e,s,{enumerable:!0,get:n[s]})}(n,{frontmatter:function(){return c},title:function(){return d},toc:function(){return o},default:function(){return t}});var i=s("9880"),r=s("23169"),c={sidebar_label:"prefix"},d="bff.prefix",o=[];function l(e){var n=Object.assign({h1:"h1",a:"a",ul:"ul",li:"li",strong:"strong",code:"code",div:"div",p:"p",pre:"pre"},(0,r.useMDXComponents)(),e.components);return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsxs)(n.h1,{id:"bffprefix",children:["bff.prefix",(0,i.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#bffprefix",children:"#"})]}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"Type:"})," ",(0,i.jsx)(n.code,{children:"string"})]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"Default:"})," ",(0,i.jsx)(n.code,{children:"/api"})]}),"\n"]}),"\n",(0,i.jsxs)(n.div,{className:"modern-directive caution",children:[(0,i.jsx)(n.div,{className:"modern-directive-title",children:"CAUTION"}),(0,i.jsx)(n.div,{className:"modern-directive-content",children:(0,i.jsxs)(n.p,{children:['First you need to enable the "BFF" function using ',(0,i.jsx)(n.a,{href:"/apis/app/commands#modern-new",children:"new"})," command.\n"]})})]}),"\n",(0,i.jsxs)(n.p,{children:["By default, the route access BFF prefix's directory is ",(0,i.jsx)(n.code,{children:"/api"}),", with the following directory structure:"]}),"\n",(0,i.jsx)(n.div,{className:"language-",children:(0,i.jsx)(n.div,{className:"modern-code-content",children:(0,i.jsx)(n.pre,{className:"code",children:(0,i.jsx)(n.code,{className:"language-bash",children:"api\n└── hello.ts\n"})})})}),"\n",(0,i.jsxs)(n.p,{children:["The corresponding route for ",(0,i.jsx)(n.code,{children:"api/hello.ts"})," access is ",(0,i.jsx)(n.code,{children:"localhost:8080/api/hello"}),"."]}),"\n",(0,i.jsx)(n.p,{children:"This configuration option can modify the default route prefix:"}),"\n",(0,i.jsxs)(n.div,{className:"language-",children:[(0,i.jsx)(n.div,{className:"modern-code-title",children:"modern.config.ts"}),(0,i.jsx)(n.div,{className:"modern-code-content",children:(0,i.jsx)(n.pre,{className:"code",children:(0,i.jsx)(n.code,{className:"language-ts",meta:'title="modern.config.ts"',children:"export default defineConfig({\n  bff: {\n    prefix: '/api-demo',\n  },\n});\n"})})})]}),"\n",(0,i.jsxs)(n.p,{children:["The corresponding ",(0,i.jsx)(n.code,{children:"api/hello.ts"})," access route is ",(0,i.jsx)(n.code,{children:"localhost:8080/api-demo/hello"}),"."]})]})}var t=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=Object.assign({},(0,r.useMDXComponents)(),e.components).wrapper;return n?(0,i.jsx)(n,Object.assign({},e,{children:(0,i.jsx)(l,e)})):l(e)}}}]);