(self.webpackChunk_modern_js_main_doc=self.webpackChunk_modern_js_main_doc||[]).push([["docs_en_configure_app_source_pre-entry_mdx"],{36176:function(e,n,s){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),Object.defineProperty(n,"default",{enumerable:!0,get:function(){return a}});var r=s("12151"),c=s("23169");function l(e){var n=Object.assign({ul:"ul",li:"li",strong:"strong",code:"code",p:"p",h4:"h4",a:"a",div:"div",button:"button",pre:"pre"},(0,c.useMDXComponents)(),e.components);return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"Type:"})," ",(0,r.jsx)(n.code,{children:"string | string[]"})]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"Default:"})," ",(0,r.jsx)(n.code,{children:"undefined"})]}),"\n"]}),"\n",(0,r.jsx)(n.p,{children:"Add a script before the entry file of each page. This script will be executed before the page code. It can be used to execute global logics, such as injecting polyfills, setting global styles, etc."}),"\n",(0,r.jsxs)(n.h4,{id:"add-a-single-script",children:["Add a single script",(0,r.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#add-a-single-script",children:"#"})]}),"\n",(0,r.jsxs)(n.p,{children:["First create a ",(0,r.jsx)(n.code,{children:"src/polyfill.ts"})," file:"]}),"\n",(0,r.jsx)(n.div,{className:"language-",children:(0,r.jsxs)(n.div,{className:"modern-code-content",children:[(0,r.jsx)(n.button,{className:"copy"}),(0,r.jsx)(n.pre,{className:"code",children:(0,r.jsx)(n.code,{className:"language-js",children:"console.log('I am a polyfill');\n"})})]})}),"\n",(0,r.jsxs)(n.p,{children:["Then configure ",(0,r.jsx)(n.code,{children:"src/polyfill.ts"})," to ",(0,r.jsx)(n.code,{children:"source.preEntry"}),":"]}),"\n",(0,r.jsx)(n.div,{className:"language-",children:(0,r.jsxs)(n.div,{className:"modern-code-content",children:[(0,r.jsx)(n.button,{className:"copy"}),(0,r.jsx)(n.pre,{className:"code",children:(0,r.jsx)(n.code,{className:"language-js",children:"export default {\n  source: {\n    preEntry: './src/polyfill.ts',\n  },\n};\n"})})]})}),"\n",(0,r.jsxs)(n.p,{children:["Re-run the compilation and visit any page, you can see that the code in ",(0,r.jsx)(n.code,{children:"src/polyfill.ts"})," has been executed, and the ",(0,r.jsx)(n.code,{children:"I am a polyfill"})," is logged in the console."]}),"\n",(0,r.jsxs)(n.h4,{id:"add-global-style",children:["Add global style",(0,r.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#add-global-style",children:"#"})]}),"\n",(0,r.jsxs)(n.p,{children:["You can also configure the global style through ",(0,r.jsx)(n.code,{children:"source.preEntry"}),", this CSS code will be loaded earlier than the page code, such as introducing a ",(0,r.jsx)(n.code,{children:"normalize.css"})," file:"]}),"\n",(0,r.jsx)(n.div,{className:"language-",children:(0,r.jsxs)(n.div,{className:"modern-code-content",children:[(0,r.jsx)(n.button,{className:"copy"}),(0,r.jsx)(n.pre,{className:"code",children:(0,r.jsx)(n.code,{className:"language-js",children:"export default {\n  source: {\n    preEntry: './src/normalize.css',\n  },\n};\n"})})]})}),"\n",(0,r.jsxs)(n.h4,{id:"add-multiple-scripts",children:["Add multiple scripts",(0,r.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#add-multiple-scripts",children:"#"})]}),"\n",(0,r.jsxs)(n.p,{children:["You can add multiple scripts by setting ",(0,r.jsx)(n.code,{children:"preEntry"})," to an array, and they will be executed in array order:"]}),"\n",(0,r.jsx)(n.div,{className:"language-",children:(0,r.jsxs)(n.div,{className:"modern-code-content",children:[(0,r.jsx)(n.button,{className:"copy"}),(0,r.jsx)(n.pre,{className:"code",children:(0,r.jsx)(n.code,{className:"language-js",children:"export default {\n  source: {\n    preEntry: ['./src/polyfill-a.ts', './src/polyfill-b.ts'],\n  },\n};\n"})})]})})]})}var a=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=Object.assign({},(0,c.useMDXComponents)(),e.components).wrapper;return n?(0,r.jsx)(n,Object.assign({},e,{children:(0,r.jsx)(l,e)})):l(e)}},84140:function(e,n,s){"use strict";Object.defineProperty(n,"__esModule",{value:!0});!function(e,n){for(var s in n)Object.defineProperty(e,s,{enumerable:!0,get:n[s]})}(n,{frontmatter:function(){return a},title:function(){return i},toc:function(){return d},default:function(){return o}});var r=s("12151"),c=s("23169"),l=s.ir(s("36176")),a={sidebar_label:"preEntry"},i="source.preEntry",d=[];function t(e){var n=Object.assign({h1:"h1",a:"a",div:"div",p:"p"},(0,c.useMDXComponents)(),e.components);return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(n.h1,{id:"source-preentry",children:["source.preEntry",(0,r.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#source-preentry",children:"#"})]}),"\n",(0,r.jsxs)(n.div,{className:"modern-directive tip",children:[(0,r.jsx)(n.div,{className:"modern-directive-title",children:"TIP"}),(0,r.jsx)(n.div,{className:"modern-directive-content",children:(0,r.jsxs)(n.p,{children:["This config is provided by Modern.js Builder, more detail can see ",(0,r.jsx)(n.a,{href:"https://modernjs.dev/builder/en/api/config-source.html#sourcepreentry",target:"_blank",rel:"noopener noreferrer",children:"source.preEntry"}),".\n"]})})]}),"\n","\n",(0,r.jsx)(l.default,{})]})}var o=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=Object.assign({},(0,c.useMDXComponents)(),e.components).wrapper;return n?(0,r.jsx)(n,Object.assign({},e,{children:(0,r.jsx)(t,e)})):t(e)}}}]);