(self.webpackChunk_modern_js_main_doc=self.webpackChunk_modern_js_main_doc||[]).push([["docs_en_apis_app_runtime_testing_renderApp_mdx"],{7922:function(e,n,r){"use strict";Object.defineProperty(n,"__esModule",{value:!0});!function(e,n){for(var r in n)Object.defineProperty(e,r,{enumerable:!0,get:n[r]})}(n,{frontmatter:function(){return c},title:function(){return a},toc:function(){return i},default:function(){return d}});var t=r("12151"),s=r("23169"),c={title:"renderApp"},a="renderApp",i=[{text:"Usage",depth:2,id:"usage"},{text:"Function Signature",depth:2,id:"function-signature"},{text:"Example",depth:2,id:"example"}];function o(e){var n=Object.assign({h1:"h1",a:"a",p:"p",code:"code",h2:"h2",div:"div",button:"button",pre:"pre"},(0,s.useMDXComponents)(),e.components);return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)(n.h1,{id:"renderapp",children:["renderApp",(0,t.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#renderapp",children:"#"})]}),"\n",(0,t.jsxs)(n.p,{children:["The ",(0,t.jsx)(n.code,{children:"render"})," function is used to test normal components, and the ",(0,t.jsx)(n.code,{children:"renderApp"})," function is used to test App components."]}),"\n",(0,t.jsxs)(n.h2,{id:"usage",children:["Usage",(0,t.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#usage",children:"#"})]}),"\n",(0,t.jsx)(n.div,{className:"language-",children:(0,t.jsxs)(n.div,{className:"modern-code-content",children:[(0,t.jsx)(n.button,{className:"copy"}),(0,t.jsx)(n.pre,{className:"code",children:(0,t.jsx)(n.code,{className:"language-ts",children:"import { renderApp } from '@modern-js/runtime/testing';\n"})})]})}),"\n",(0,t.jsx)(n.p,{children:"App components refer to components that contain some Modern.js contexts, such as App root components, Containers using Models, etc."}),"\n",(0,t.jsxs)(n.p,{children:["For the testing of such components, you can use the ",(0,t.jsx)(n.code,{children:"renderApp"})," function, which will automatically wrap the context information according to the current ",(0,t.jsx)(n.code,{children:"modern.config.js"}),"."]}),"\n",(0,t.jsxs)(n.h2,{id:"function-signature",children:["Function Signature",(0,t.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#function-signature",children:"#"})]}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.code,{children:"renderApp"})," is the same as ",(0,t.jsx)(n.a,{href:"/en/apis/app/runtime/testing/render",children:"render"}),"."]}),"\n",(0,t.jsxs)(n.h2,{id:"example",children:["Example",(0,t.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#example",children:"#"})]}),"\n",(0,t.jsx)(n.div,{className:"language-",children:(0,t.jsxs)(n.div,{className:"modern-code-content",children:[(0,t.jsx)(n.button,{className:"copy"}),(0,t.jsx)(n.pre,{className:"code",children:(0,t.jsx)(n.code,{className:"language-ts",children:"import { renderApp } from '@modern-js/runtime/testing';\nimport App from './App';\n\ndescribe('test', () => {\n  it('test App', () => {\n    const { getByText } = renderApp(<App />);\n    expect(getByText('Hello Modern!')).toBeInTheDocument();\n  });\n});\n"})})]})})]})}var d=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=Object.assign({},(0,s.useMDXComponents)(),e.components).wrapper;return n?(0,t.jsx)(n,Object.assign({},e,{children:(0,t.jsx)(o,e)})):o(e)}}}]);