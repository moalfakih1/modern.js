(self.webpackChunk_modern_js_builder_doc=self.webpackChunk_modern_js_builder_doc||[]).push([["split~docs_en_api_config-source_mdx3"],{5427:function(e,n,s){"use strict";Object.defineProperty(n,"__esModule",{value:!0});!function(e,n){for(var s in n)Object.defineProperty(e,s,{enumerable:!0,get:n[s]})}(n,{frontmatter:function(){return d},title:function(){return o},toc:function(){return i},default:function(){return l}});var c=s("12151"),r=s("23169"),d={},o="",i=[{text:"Example",depth:3,id:"example"},{text:"Array Type",depth:4,id:"array-type"},{text:"Function Type",depth:4,id:"function-type"}];function a(e){var n=Object.assign({ul:"ul",li:"li",strong:"strong",code:"code",p:"p",h3:"h3",a:"a",div:"div",button:"button",pre:"pre",img:"img",h4:"h4"},(0,r.useMDXComponents)(),e.components);return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsxs)(n.ul,{children:["\n",(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:"Type:"})," ",(0,c.jsx)(n.code,{children:"Array<string | Regexp> | Function"})]}),"\n",(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:"Default:"})," ",(0,c.jsx)(n.code,{children:"undefined"})]}),"\n",(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:"Bundler:"})," ",(0,c.jsx)(n.code,{children:"only support webpack"})]}),"\n"]}),"\n",(0,c.jsx)(n.p,{children:"Restrict importing paths. After configuring this option, all source files can only import code from the specific paths, and import code from other paths is not allowed."}),"\n",(0,c.jsxs)(n.h3,{id:"example",children:["Example",(0,c.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#example",children:"#"})]}),"\n",(0,c.jsxs)(n.p,{children:["First, we configure ",(0,c.jsx)(n.code,{children:"moduleScopes"})," to only include the ",(0,c.jsx)(n.code,{children:"src"})," directory:"]}),"\n",(0,c.jsx)(n.div,{className:"language-",children:(0,c.jsxs)(n.div,{className:"modern-code-content",children:[(0,c.jsx)(n.button,{className:"copy"}),(0,c.jsx)(n.pre,{className:"code",children:(0,c.jsx)(n.code,{className:"language-js",children:"export default {\n  source: {\n    moduleScopes: ['./src'],\n  },\n};\n"})})]})}),"\n",(0,c.jsxs)(n.p,{children:["Then we import the ",(0,c.jsx)(n.code,{children:"utils/a"})," module outside the ",(0,c.jsx)(n.code,{children:"src"})," directory in ",(0,c.jsx)(n.code,{children:"src/App.tsx"}),":"]}),"\n",(0,c.jsx)(n.div,{className:"language-",children:(0,c.jsxs)(n.div,{className:"modern-code-content",children:[(0,c.jsx)(n.button,{className:"copy"}),(0,c.jsx)(n.pre,{className:"code",children:(0,c.jsx)(n.code,{className:"language-js",children:"import a from '../utils/a';\n"})})]})}),"\n",(0,c.jsx)(n.p,{children:"After compiling, there will be a reference path error:"}),"\n",(0,c.jsx)(n.p,{children:(0,c.jsx)(n.img,{src:"https://lf3-static.bytednsdoc.com/obj/eden-cn/aphqeh7uhohpquloj/modern-js/docs/module-scopes-error.png",alt:"scopes-error"})}),"\n",(0,c.jsxs)(n.p,{children:["If we configure the ",(0,c.jsx)(n.code,{children:"utils"})," directory in ",(0,c.jsx)(n.code,{children:"moduleScopes"}),", the error will disappear."]}),"\n",(0,c.jsx)(n.div,{className:"language-",children:(0,c.jsxs)(n.div,{className:"modern-code-content",children:[(0,c.jsx)(n.button,{className:"copy"}),(0,c.jsx)(n.pre,{className:"code",children:(0,c.jsx)(n.code,{className:"language-js",children:"export default {\n  source: {\n    moduleScopes: ['./src', './utils'],\n  },\n};\n"})})]})}),"\n",(0,c.jsxs)(n.h4,{id:"array-type",children:["Array Type",(0,c.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#array-type",children:"#"})]}),"\n",(0,c.jsx)(n.p,{children:"You can directly set several paths like this:"}),"\n",(0,c.jsx)(n.div,{className:"language-",children:(0,c.jsxs)(n.div,{className:"modern-code-content",children:[(0,c.jsx)(n.button,{className:"copy"}),(0,c.jsx)(n.pre,{className:"code",children:(0,c.jsx)(n.code,{className:"language-js",children:"export default {\n  source: {\n    moduleScopes: ['./src', './shared', './utils'],\n  },\n};\n"})})]})}),"\n",(0,c.jsxs)(n.h4,{id:"function-type",children:["Function Type",(0,c.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#function-type",children:"#"})]}),"\n",(0,c.jsxs)(n.p,{children:[(0,c.jsx)(n.code,{children:"moduleScopes"})," also supports setting as a function, which can be modified instead of overriding the default value:"]}),"\n",(0,c.jsx)(n.div,{className:"language-",children:(0,c.jsxs)(n.div,{className:"modern-code-content",children:[(0,c.jsx)(n.button,{className:"copy"}),(0,c.jsx)(n.pre,{className:"code",children:(0,c.jsx)(n.code,{className:"language-js",children:"export default {\n  source: {\n    moduleScopes: scopes => {\n      scopes.push('./shared');\n    },\n  },\n};\n"})})]})})]})}var l=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=Object.assign({},(0,r.useMDXComponents)(),e.components).wrapper;return n?(0,c.jsx)(n,Object.assign({},e,{children:(0,c.jsx)(a,e)})):a(e)}}}]);