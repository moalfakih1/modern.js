(self.webpackChunk_modern_js_main_doc=self.webpackChunk_modern_js_main_doc||[]).push([["docs_en_apis_app_hooks_src_index__mdx"],{33078:function(e,n,s){"use strict";Object.defineProperty(n,"__esModule",{value:!0});!function(e,n){for(var s in n)Object.defineProperty(e,s,{enumerable:!0,get:n[s]})}(n,{frontmatter:function(){return o},title:function(){return c},toc:function(){return d},default:function(){return a}});var r=s("9880"),t=s("23169"),o={title:"index.[tj]s",sidebar_position:4},c="index.[tj]s",d=[];function i(e){var n=Object.assign({h1:"h1",a:"a",p:"p",code:"code",ol:"ol",li:"li",div:"div",pre:"pre"},(0,t.useMDXComponents)(),e.components);return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(n.h1,{id:"index[tj]s",children:["index.[tj]s",(0,r.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#index[tj]s",children:"#"})]}),"\n",(0,r.jsxs)(n.p,{children:["Entry identifier if App want use custom bootstrap. In most case, ",(0,r.jsx)(n.a,{href:"/apis/app/hooks/src/app",children:(0,r.jsx)(n.code,{children:"App.[tj]sx"})})," hook file can already meet our needs."]}),"\n",(0,r.jsxs)(n.p,{children:["When we need to add custom behavior before ",(0,r.jsx)(n.code,{children:"bootstrap"})," or completely take over the webpack entry, we can place ",(0,r.jsx)(n.code,{children:"index.[tj]s"})," in ",(0,r.jsx)(n.code,{children:"src/"})," or entry directory. The following are discussed in two cases:"]}),"\n",(0,r.jsxs)(n.ol,{children:["\n",(0,r.jsx)(n.li,{children:"add custom behavior before bootstrap"}),"\n"]}),"\n",(0,r.jsxs)(n.p,{children:["Just add default export under ",(0,r.jsx)(n.code,{children:"src/index.[tj]s"}),":"]}),"\n",(0,r.jsxs)(n.div,{className:"language-",children:[(0,r.jsx)(n.div,{className:"modern-code-title",children:"src/index.js"}),(0,r.jsx)(n.div,{className:"modern-code-content",children:(0,r.jsx)(n.pre,{className:"code",children:(0,r.jsx)(n.code,{className:"language-js",meta:"title=src/index.js",children:"import { bootstrap } from '@modern-js/runtime';\n\nexport default App => {\n  // do something before bootstrap...\n  bootstrap(App, 'root');\n};\n"})})})]}),"\n",(0,r.jsxs)(n.ol,{start:"2",children:["\n",(0,r.jsx)(n.li,{children:"Fully take over the webpack entry"}),"\n"]}),"\n",(0,r.jsxs)(n.p,{children:["When there is no default export function under ",(0,r.jsx)(n.code,{children:"src/index.[tj]sx?"}),", this file is the real webpack entry file, and the code can be organized such as create-react-app:"]}),"\n",(0,r.jsxs)(n.div,{className:"language-",children:[(0,r.jsx)(n.div,{className:"modern-code-title",children:"src/index.jsx"}),(0,r.jsx)(n.div,{className:"modern-code-content",children:(0,r.jsx)(n.pre,{className:"code",children:(0,r.jsx)(n.code,{className:"language-js",meta:"title=src/index.jsx",children:"import React from 'react';\nimport ReactDOM from 'react-dom';\nimport App from './App';\n\nReactDOM.render(<App />, document.getElementById('root'));\n"})})})]})]})}var a=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=Object.assign({},(0,t.useMDXComponents)(),e.components).wrapper;return n?(0,r.jsx)(n,Object.assign({},e,{children:(0,r.jsx)(i,e)})):i(e)}}}]);