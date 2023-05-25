(self.webpackChunk_modern_js_main_doc=self.webpackChunk_modern_js_main_doc||[]).push([["docs_en_configure_app_source_module-scopes_mdx"],{11641:function(e,n,r){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),Object.defineProperty(n,"default",{enumerable:!0,get:function(){return i}});var s=r("9880"),c=r("23169");function o(e){var n=Object.assign({ul:"ul",li:"li",strong:"strong",code:"code",p:"p",h3:"h3",a:"a",pre:"pre",img:"img",h4:"h4"},(0,c.useMDXComponents)(),e.components);return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"Type:"})," ",(0,s.jsx)(n.code,{children:"Array<string | Regexp> | Function"})]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"Default:"})," ",(0,s.jsx)(n.code,{children:"undefined"})]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"Bundler:"})," ",(0,s.jsx)(n.code,{children:"only support webpack"})]}),"\n"]}),"\n",(0,s.jsx)(n.p,{children:"Restrict importing paths. After configuring this option, all source files can only import code from the specific paths, and import code from other paths is not allowed."}),"\n",(0,s.jsxs)(n.h3,{id:"example",children:["Example",(0,s.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#example",children:"#"})]}),"\n",(0,s.jsxs)(n.p,{children:["First, we configure ",(0,s.jsx)(n.code,{children:"moduleScopes"})," to only include the ",(0,s.jsx)(n.code,{children:"src"})," directory:"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-js",children:"export default {\n  source: {\n    moduleScopes: ['./src'],\n  },\n};\n"})}),"\n",(0,s.jsxs)(n.p,{children:["Then we import the ",(0,s.jsx)(n.code,{children:"utils/a"})," module outside the ",(0,s.jsx)(n.code,{children:"src"})," directory in ",(0,s.jsx)(n.code,{children:"src/App.tsx"}),":"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-js",children:"import a from '../utils/a';\n"})}),"\n",(0,s.jsx)(n.p,{children:"After compiling, there will be a reference path error:"}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.img,{src:"https://lf3-static.bytednsdoc.com/obj/eden-cn/aphqeh7uhohpquloj/modern-js/docs/module-scopes-error.png",alt:"scopes-error"})}),"\n",(0,s.jsxs)(n.p,{children:["If we configure the ",(0,s.jsx)(n.code,{children:"utils"})," directory in ",(0,s.jsx)(n.code,{children:"moduleScopes"}),", the error will disappear."]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-js",children:"export default {\n  source: {\n    moduleScopes: ['./src', './utils'],\n  },\n};\n"})}),"\n",(0,s.jsxs)(n.h4,{id:"array-type",children:["Array Type",(0,s.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#array-type",children:"#"})]}),"\n",(0,s.jsx)(n.p,{children:"You can directly set several paths like this:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-js",children:"export default {\n  source: {\n    moduleScopes: ['./src', './shared', './utils'],\n  },\n};\n"})}),"\n",(0,s.jsxs)(n.h4,{id:"function-type",children:["Function Type",(0,s.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#function-type",children:"#"})]}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.code,{children:"moduleScopes"})," also supports setting as a function, which can be modified instead of overriding the default value:"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-js",children:"export default {\n  source: {\n    moduleScopes: scopes => {\n      scopes.push('./shared');\n    },\n  },\n};\n"})})]})}var i=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=Object.assign({},(0,c.useMDXComponents)(),e.components).wrapper;return n?(0,s.jsx)(n,Object.assign({},e,{children:(0,s.jsx)(o,e)})):o(e)}},71671:function(e,n,r){"use strict";Object.defineProperty(n,"__esModule",{value:!0});!function(e,n){for(var r in n)Object.defineProperty(e,r,{enumerable:!0,get:n[r]})}(n,{frontmatter:function(){return i},title:function(){return d},toc:function(){return t},default:function(){return a}});var s=r("9880"),c=r("23169"),o=r.ir(r("11641")),i={sidebar_label:"moduleScopes"},d="source.moduleScopes",t=[];function l(e){var n=Object.assign({h1:"h1",a:"a",div:"div",p:"p"},(0,c.useMDXComponents)(),e.components);return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)(n.h1,{id:"sourcemodulescopes",children:["source.moduleScopes",(0,s.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#sourcemodulescopes",children:"#"})]}),"\n",(0,s.jsxs)(n.div,{className:"modern-directive tip",children:[(0,s.jsx)(n.div,{className:"modern-directive-title",children:"TIP"}),(0,s.jsx)(n.div,{className:"modern-directive-content",children:(0,s.jsxs)(n.p,{children:["This config is provided by Modern.js Builder, more detail can see ",(0,s.jsx)(n.a,{href:"https://modernjs.dev/builder/en/api/config-source.html#sourcemodulescopes",target:"_blank",rel:"noopener noreferrer",children:"source.moduleScopes"}),".\n"]})})]}),"\n","\n",(0,s.jsx)(o.default,{})]})}var a=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=Object.assign({},(0,c.useMDXComponents)(),e.components).wrapper;return n?(0,s.jsx)(n,Object.assign({},e,{children:(0,s.jsx)(l,e)})):l(e)}}}]);