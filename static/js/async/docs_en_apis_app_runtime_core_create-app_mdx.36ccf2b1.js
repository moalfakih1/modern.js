(self.webpackChunk_modern_js_main_doc=self.webpackChunk_modern_js_main_doc||[]).push([["docs_en_apis_app_runtime_core_create-app_mdx"],{7180:function(e,n,r){"use strict";Object.defineProperty(n,"__esModule",{value:!0});!function(e,n){for(var r in n)Object.defineProperty(e,r,{enumerable:!0,get:n[r]})}(n,{frontmatter:function(){return i},title:function(){return a},toc:function(){return c},default:function(){return u}});var t=r("9880"),s=r("23169"),i={title:"createApp"},a="createApp",c=[{text:"Usage",depth:2,id:"usage"},{text:"Function Signature",depth:2,id:"function-signature"},{text:"Input",depth:3,id:"input"},{text:"Example",depth:2,id:"example"},{text:"Create Custom Entry",depth:3,id:"create-custom-entry"},{text:"Custom Plugins",depth:3,id:"custom-plugins"}];function d(e){var n=Object.assign({h1:"h1",a:"a",p:"p",h2:"h2",pre:"pre",code:"code",h3:"h3",ul:"ul",li:"li"},(0,s.useMDXComponents)(),e.components);return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)(n.h1,{id:"createapp",children:["createApp",(0,t.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#createapp",children:"#"})]}),"\n",(0,t.jsxs)(n.p,{children:["Used to create custom entries, custom runtime plugins. This API is only required when using ",(0,t.jsx)(n.a,{href:"/guides/concept/entries#app",children:"Custom App"}),"."]}),"\n",(0,t.jsxs)(n.h2,{id:"usage",children:["Usage",(0,t.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#usage",children:"#"})]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-ts",children:"import { createApp } from '@modern-js/runtime';\n"})}),"\n",(0,t.jsxs)(n.h2,{id:"function-signature",children:["Function Signature",(0,t.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#function-signature",children:"#"})]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-ts",children:"import type { Plugin } from '@modern-js/runtime';\n\nfunction createApp(options: { plugins: Plugin[] }): React.ComponentType<any>;\n"})}),"\n",(0,t.jsxs)(n.h3,{id:"input",children:["Input",(0,t.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#input",children:"#"})]}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"options"}),": optional configuration.","\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"plugins"}),": custom plugin extensions."]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,t.jsxs)(n.h2,{id:"example",children:["Example",(0,t.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#example",children:"#"})]}),"\n",(0,t.jsxs)(n.h3,{id:"create-custom-entry",children:["Create Custom Entry",(0,t.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#create-custom-entry",children:"#"})]}),"\n",(0,t.jsxs)(n.p,{children:["For details, see ",(0,t.jsx)(n.a,{href:"/en/apis/app/runtime/core/bootstrap",children:(0,t.jsx)(n.code,{children:"bootstrap"})}),"."]}),"\n",(0,t.jsxs)(n.h3,{id:"custom-plugins",children:["Custom Plugins",(0,t.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#custom-plugins",children:"#"})]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-ts",children:"import { createApp } from '@modern-js/runtime';\n\nfunction App() {\n  return <div>app</div>;\n}\n\nexport default createApp({\n  plugins: [customPlugin()],\n})(App);\n"})})]})}var u=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=Object.assign({},(0,s.useMDXComponents)(),e.components).wrapper;return n?(0,t.jsx)(n,Object.assign({},e,{children:(0,t.jsx)(d,e)})):d(e)}}}]);