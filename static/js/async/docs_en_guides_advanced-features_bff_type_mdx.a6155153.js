(self.webpackChunk_modern_js_main_doc=self.webpackChunk_modern_js_main_doc||[]).push([["docs_en_guides_advanced-features_bff_type_mdx"],{67442:function(e,n,r){"use strict";Object.defineProperty(n,"__esModule",{value:!0});!function(e,n){for(var r in n)Object.defineProperty(e,r,{enumerable:!0,get:n[r]})}(n,{frontmatter:function(){return s},title:function(){return o},toc:function(){return d},default:function(){return c}});var i=r("12151"),t=r("23169"),s={sidebar_position:2,title:"Writing Type"},o="Writing Type",d=[{text:"Function Writing",depth:2,id:"function-writing"},{text:"Framework Writing",depth:2,id:"framework-writing"}];function a(e){var n=Object.assign({h1:"h1",a:"a",p:"p",strong:"strong",div:"div",code:"code",h2:"h2",button:"button",pre:"pre"},(0,t.useMDXComponents)(),e.components);return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsxs)(n.h1,{id:"writing-type",children:["Writing Type",(0,i.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#writing-type",children:"#"})]}),"\n",(0,i.jsxs)(n.p,{children:["Runtime framework support is also an important part of ",(0,i.jsx)(n.strong,{children:"BFF"}),". Modern.js supports extending BFF's runtime framework through plugins, and provides a series of built-in plugins, developers can directly use the conventions and ecology of the framework."]}),"\n",(0,i.jsxs)(n.p,{children:["The plugin is compatible with most of the specifications of these frameworks, and each framework needs to provide two types of ways to extend the writing of BFF functions, namely ",(0,i.jsx)(n.strong,{children:"Function Writing"})," and ",(0,i.jsx)(n.strong,{children:"Framework Writing"}),"."]}),"\n",(0,i.jsxs)(n.div,{className:"modern-directive note",children:[(0,i.jsx)(n.div,{className:"modern-directive-title",children:"NOTE"}),(0,i.jsxs)(n.div,{className:"modern-directive-content",children:[(0,i.jsxs)(n.p,{children:["Whether the current ",(0,i.jsx)(n.code,{children:"api/"})," directory structure is written as a framework is determined by the corresponding plugin, Modern.js don't care."]}),"\n"]})]}),"\n",(0,i.jsxs)(n.h2,{id:"function-writing",children:["Function Writing",(0,i.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#function-writing",children:"#"})]}),"\n",(0,i.jsxs)(n.p,{children:["When the plugin considers that it is currently written as a function, it must support writing middleware in the ",(0,i.jsx)(n.code,{children:"api/_ app.ts"})," to extend the BFF function."]}),"\n",(0,i.jsxs)(n.p,{children:["Modern.js collects the middleware in the ",(0,i.jsx)(n.code,{children:"api/_app.ts"})," and passes it to the plugin, which injects the middleware into the runtime, for example:"]}),"\n",(0,i.jsx)(n.div,{className:"language-",children:(0,i.jsxs)(n.div,{className:"modern-code-content",children:[(0,i.jsx)(n.button,{className:"copy"}),(0,i.jsx)(n.pre,{className:"code",children:(0,i.jsx)(n.code,{className:"language-ts",children:"import { hook } from '@modern-js/runtime/server';\n\nexport default hook(({ addMiddleware }) => {\n  addMiddleware(myMiddleware);\n});\n"})})]})}),"\n",(0,i.jsxs)(n.div,{className:"modern-directive note",children:[(0,i.jsx)(n.div,{className:"modern-directive-title",children:"NOTE"}),(0,i.jsxs)(n.div,{className:"modern-directive-content",children:[(0,i.jsxs)(n.p,{children:["The writing of middleware for different plugins is not the same, see ",(0,i.jsx)(n.a,{href:"/guides/advanced-features/bff/frameworks",children:"Runtime Framework"})," for details."]}),"\n"]})]}),"\n",(0,i.jsxs)(n.h2,{id:"framework-writing",children:["Framework Writing",(0,i.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#framework-writing",children:"#"})]}),"\n",(0,i.jsx)(n.p,{children:"Framework writing is a way of using frame structure to extend BFF functions. Compared with function writing, although frame writing can use more frame structure and make the entire BFF Server clearer in complex scenarios, it is also more complex and requires more attention to the content at the framework level."}),"\n",(0,i.jsxs)(n.p,{children:["In the framework writing method, all BFF functions need to be written in the ",(0,i.jsx)(n.code,{children:"api/lambda/"})," directory, and the hook file ",(0,i.jsx)(n.code,{children:"_app.[tj]s"})," cannot be used."]}),"\n",(0,i.jsx)(n.p,{children:"In most cases, the function writing method can cover the customization requirements of most BFF functions. Only when your project server level logic is more complex, the code needs to be layered, or you need to use more elements of the framework, you need to use the framework writing method."}),"\n",(0,i.jsxs)(n.div,{className:"modern-directive note",children:[(0,i.jsx)(n.div,{className:"modern-directive-title",children:"NOTE"}),(0,i.jsxs)(n.div,{className:"modern-directive-content",children:[(0,i.jsxs)(n.p,{children:["The directory structure of different plugin frameworks is not the same, see ",(0,i.jsx)(n.a,{href:"/guides/advanced-features/bff/frameworks",children:"Runtime Frameworks"})," for details."]}),"\n"]})]})]})}var c=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=Object.assign({},(0,t.useMDXComponents)(),e.components).wrapper;return n?(0,i.jsx)(n,Object.assign({},e,{children:(0,i.jsx)(a,e)})):a(e)}}}]);