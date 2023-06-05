(self.webpackChunk_modern_js_main_doc=self.webpackChunk_modern_js_main_doc||[]).push([["docs_zh_apis_app_hooks_src_index__mdx"],{7159:function(e,n,r){"use strict";Object.defineProperty(n,"__esModule",{value:!0});!function(e,n){for(var r in n)Object.defineProperty(e,r,{enumerable:!0,get:n[r]})}(n,{frontmatter:function(){return c},title:function(){return o},toc:function(){return a},default:function(){return i}});var t=r("9880"),s=r("23169"),c={title:"index.[tj]s",sidebar_position:4},o="index.[tj]s",a=[{text:"在 bootstrap 之前添加自定义行为",depth:2,id:"在-bootstrap-之前添加自定义行为"},{text:"完全接管 webpack 入口",depth:2,id:"完全接管-webpack-入口"}];function d(e){var n=Object.assign({h1:"h1",a:"a",p:"p",code:"code",h2:"h2",pre:"pre"},(0,s.useMDXComponents)(),e.components);return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)(n.h1,{id:"index[tj]s",children:["index.[tj]s",(0,t.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#index[tj]s",children:"#"})]}),"\n",(0,t.jsxs)(n.p,{children:["应用使用自定义 ",(0,t.jsx)(n.code,{children:"bootstrap"})," 时的入口标识。"]}),"\n",(0,t.jsxs)(n.p,{children:["通常情况下 ",(0,t.jsx)(n.a,{href:"/apis/app/hooks/src/app",children:(0,t.jsx)(n.code,{children:"App.[tj]sx"})})," 钩子文件已经能满足我们的需求，当我们需要在 ",(0,t.jsx)(n.code,{children:"bootstrap"})," 之前添加自定义行为或者完全接管 webpack 打包入口时，可以在 ",(0,t.jsx)(n.code,{children:"src"})," 或者入口目录下放置 ",(0,t.jsx)(n.code,{children:"index.[tj]s"}),"。 下面有分两种情况进行讨论："]}),"\n",(0,t.jsxs)(n.h2,{id:"在-bootstrap-之前添加自定义行为",children:["在 bootstrap 之前添加自定义行为",(0,t.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#在-bootstrap-之前添加自定义行为",children:"#"})]}),"\n",(0,t.jsxs)(n.p,{children:["只需要 ",(0,t.jsx)(n.code,{children:"src/index.[tj]s"})," 默认导出函数："]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-js",meta:"title=src/index.js",children:"import ReactDOM from 'react-dom/client';\nimport { bootstrap } from '@modern-js/runtime';\n\nexport default (App: React.ComponentType) => {\n  // do something before bootstrap...\n  bootstrap(App, 'root', undefined, ReactDOM);\n};\n"})}),"\n",(0,t.jsxs)(n.h2,{id:"完全接管-webpack-入口",children:["完全接管 webpack 入口",(0,t.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#完全接管-webpack-入口",children:"#"})]}),"\n",(0,t.jsxs)(n.p,{children:["当 ",(0,t.jsx)(n.code,{children:"src/index.[tj]sx?"})," 下没有默认导出函数时，该文件即为真正的 webpack 打包入口文件, 可以直接像使用 create-react-app 等脚手架一样组织代码："]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-js",meta:"title=src/index.jsx",children:"import React from 'react';\nimport ReactDOM from 'react-dom/client';\nimport App from './App';\n\nReactDOM.createRoot(document.getElementById('root')!).render(<App />);\n"})})]})}var i=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=Object.assign({},(0,s.useMDXComponents)(),e.components).wrapper;return n?(0,t.jsx)(n,Object.assign({},e,{children:(0,t.jsx)(d,e)})):d(e)}}}]);