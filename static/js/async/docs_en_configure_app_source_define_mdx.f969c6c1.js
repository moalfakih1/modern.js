(self.webpackChunk_modern_js_main_doc=self.webpackChunk_modern_js_main_doc||[]).push([["docs_en_configure_app_source_define_mdx"],{55675:function(e,n,i){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),Object.defineProperty(n,"default",{enumerable:!0,get:function(){return d}});var r=i("9880"),s=i("23169");function t(e){var n=Object.assign({ul:"ul",li:"li",strong:"strong",code:"code",p:"p",a:"a",div:"div",h3:"h3",pre:"pre"},(0,s.useMDXComponents)(),e.components);return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"Type:"})," ",(0,r.jsx)(n.code,{children:"Record<string, unknown>"})]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"Default:"})," ",(0,r.jsx)(n.code,{children:"{}"})]}),"\n"]}),"\n",(0,r.jsx)(n.p,{children:"Replaces variables in your code with other values or expressions at compile time. This can be useful for allowing different behavior between development builds and production builds."}),"\n",(0,r.jsxs)(n.p,{children:["Each key passed into options is an identifier or multiple identifiers joined with ",(0,r.jsx)(n.code,{children:"."}),"."]}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"If the value is a string it will be used as a code fragment."}),"\n",(0,r.jsx)(n.li,{children:"If the value isn't a string, it will be stringified (including functions)."}),"\n",(0,r.jsx)(n.li,{children:"If the value is an object all keys are defined the same way."}),"\n",(0,r.jsx)(n.li,{children:"If you prefix typeof to the key, it's only defined for typeof calls."}),"\n"]}),"\n",(0,r.jsxs)(n.p,{children:["For more information please visit ",(0,r.jsx)(n.a,{href:"https://webpack.js.org/plugins/define-plugin/",target:"_blank",rel:"noopener noreferrer",children:(0,r.jsx)(n.a,{href:"https://webpack.js.org/plugins/define-plugin/",target:"_blank",rel:"noopener noreferrer",children:"https://webpack.js.org/plugins/define-plugin/"})}),"."]}),"\n",(0,r.jsxs)(n.div,{className:"modern-directive tip",children:[(0,r.jsx)(n.div,{className:"modern-directive-title",children:"TIP"}),(0,r.jsx)(n.div,{className:"modern-directive-content",children:(0,r.jsxs)(n.p,{children:["When using Rspack as the bundler, the supported types can be found in ",(0,r.jsx)(n.a,{href:"https://www.rspack.dev/config/builtins.html#builtinsdefine",target:"_blank",rel:"noopener noreferrer",children:"Rspack.builtins.define"}),".\n"]})})]}),"\n",(0,r.jsxs)(n.h3,{id:"example",children:["Example",(0,r.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#example",children:"#"})]}),"\n",(0,r.jsx)(n.div,{className:"language-",children:(0,r.jsx)(n.div,{className:"modern-code-content",children:(0,r.jsx)(n.pre,{className:"code",children:(0,r.jsx)(n.code,{className:"language-js",children:"export default {\n  source: {\n    define: {\n      PRODUCTION: JSON.stringify(true),\n      VERSION: JSON.stringify('5fa3b9'),\n      BROWSER_SUPPORTS_HTML5: true,\n      TWO: '1 + 1',\n      'typeof window': JSON.stringify('object'),\n      'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV),\n      'import.meta': { test: undefined },\n    },\n  },\n};\n"})})})}),"\n",(0,r.jsx)(n.p,{children:"Expressions will be replaced with the corresponding code fragments:"}),"\n",(0,r.jsx)(n.div,{className:"language-",children:(0,r.jsx)(n.div,{className:"modern-code-content",children:(0,r.jsx)(n.pre,{className:"code",children:(0,r.jsx)(n.code,{className:"language-js",children:"const foo = TWO;\n\n// ⬇️ Turn into being...\nconst foo = 1 + 1;\n"})})})})]})}var d=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=Object.assign({},(0,s.useMDXComponents)(),e.components).wrapper;return n?(0,r.jsx)(n,Object.assign({},e,{children:(0,r.jsx)(t,e)})):t(e)}},61571:function(e,n,i){"use strict";Object.defineProperty(n,"__esModule",{value:!0});!function(e,n){for(var i in n)Object.defineProperty(e,i,{enumerable:!0,get:n[i]})}(n,{frontmatter:function(){return d},title:function(){return c},toc:function(){return o},default:function(){return a}});var r=i("9880"),s=i("23169"),t=i.ir(i("55675")),d={sidebar_label:"define"},c="source.define",o=[];function l(e){var n=Object.assign({h1:"h1",a:"a",div:"div",p:"p"},(0,s.useMDXComponents)(),e.components);return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(n.h1,{id:"sourcedefine",children:["source.define",(0,r.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#sourcedefine",children:"#"})]}),"\n",(0,r.jsxs)(n.div,{className:"modern-directive tip",children:[(0,r.jsx)(n.div,{className:"modern-directive-title",children:"TIP"}),(0,r.jsx)(n.div,{className:"modern-directive-content",children:(0,r.jsxs)(n.p,{children:["This config is provided by Modern.js Builder, more detail can see ",(0,r.jsx)(n.a,{href:"https://modernjs.dev/builder/en/api/config-source.html#sourcedefine",target:"_blank",rel:"noopener noreferrer",children:"source.define"}),".\n"]})})]}),"\n","\n",(0,r.jsx)(t.default,{})]})}var a=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=Object.assign({},(0,s.useMDXComponents)(),e.components).wrapper;return n?(0,r.jsx)(n,Object.assign({},e,{children:(0,r.jsx)(l,e)})):l(e)}}}]);