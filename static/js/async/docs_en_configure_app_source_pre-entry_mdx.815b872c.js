(self.webpackChunk_modern_js_main_doc=self.webpackChunk_modern_js_main_doc||[]).push([["docs_en_configure_app_source_pre-entry_mdx"],{3886:function(e,n,r){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),Object.defineProperty(n,"default",{enumerable:!0,get:function(){return i}});var s=r("9880"),c=r("23169");function l(e){var n=Object.assign({ul:"ul",li:"li",strong:"strong",code:"code",p:"p",h4:"h4",a:"a",div:"div",pre:"pre"},(0,c.useMDXComponents)(),e.components);return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"Type:"})," ",(0,s.jsx)(n.code,{children:"string | string[]"})]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"Default:"})," ",(0,s.jsx)(n.code,{children:"undefined"})]}),"\n"]}),"\n",(0,s.jsx)(n.p,{children:"Add a script before the entry file of each page. This script will be executed before the page code. It can be used to execute global logics, such as injecting polyfills, setting global styles, etc."}),"\n",(0,s.jsxs)(n.h4,{id:"add-a-single-script",children:["Add a single script",(0,s.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#add-a-single-script",children:"#"})]}),"\n",(0,s.jsxs)(n.p,{children:["First create a ",(0,s.jsx)(n.code,{children:"src/polyfill.ts"})," file:"]}),"\n",(0,s.jsx)(n.div,{className:"language-",children:(0,s.jsx)(n.div,{className:"modern-code-content",children:(0,s.jsx)(n.pre,{className:"code",children:(0,s.jsx)(n.code,{className:"language-js",children:"console.log('I am a polyfill');\n"})})})}),"\n",(0,s.jsxs)(n.p,{children:["Then configure ",(0,s.jsx)(n.code,{children:"src/polyfill.ts"})," to ",(0,s.jsx)(n.code,{children:"source.preEntry"}),":"]}),"\n",(0,s.jsx)(n.div,{className:"language-",children:(0,s.jsx)(n.div,{className:"modern-code-content",children:(0,s.jsx)(n.pre,{className:"code",children:(0,s.jsx)(n.code,{className:"language-js",children:"export default {\n  source: {\n    preEntry: './src/polyfill.ts',\n  },\n};\n"})})})}),"\n",(0,s.jsxs)(n.p,{children:["Re-run the compilation and visit any page, you can see that the code in ",(0,s.jsx)(n.code,{children:"src/polyfill.ts"})," has been executed, and the ",(0,s.jsx)(n.code,{children:"I am a polyfill"})," is logged in the console."]}),"\n",(0,s.jsxs)(n.h4,{id:"add-global-style",children:["Add global style",(0,s.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#add-global-style",children:"#"})]}),"\n",(0,s.jsxs)(n.p,{children:["You can also configure the global style through ",(0,s.jsx)(n.code,{children:"source.preEntry"}),", this CSS code will be loaded earlier than the page code, such as introducing a ",(0,s.jsx)(n.code,{children:"normalize.css"})," file:"]}),"\n",(0,s.jsx)(n.div,{className:"language-",children:(0,s.jsx)(n.div,{className:"modern-code-content",children:(0,s.jsx)(n.pre,{className:"code",children:(0,s.jsx)(n.code,{className:"language-js",children:"export default {\n  source: {\n    preEntry: './src/normalize.css',\n  },\n};\n"})})})}),"\n",(0,s.jsxs)(n.h4,{id:"add-multiple-scripts",children:["Add multiple scripts",(0,s.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#add-multiple-scripts",children:"#"})]}),"\n",(0,s.jsxs)(n.p,{children:["You can add multiple scripts by setting ",(0,s.jsx)(n.code,{children:"preEntry"})," to an array, and they will be executed in array order:"]}),"\n",(0,s.jsx)(n.div,{className:"language-",children:(0,s.jsx)(n.div,{className:"modern-code-content",children:(0,s.jsx)(n.pre,{className:"code",children:(0,s.jsx)(n.code,{className:"language-js",children:"export default {\n  source: {\n    preEntry: ['./src/polyfill-a.ts', './src/polyfill-b.ts'],\n  },\n};\n"})})})})]})}var i=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=Object.assign({},(0,c.useMDXComponents)(),e.components).wrapper;return n?(0,s.jsx)(n,Object.assign({},e,{children:(0,s.jsx)(l,e)})):l(e)}},3772:function(e,n,r){"use strict";Object.defineProperty(n,"__esModule",{value:!0});!function(e,n){for(var r in n)Object.defineProperty(e,r,{enumerable:!0,get:n[r]})}(n,{frontmatter:function(){return i},title:function(){return d},toc:function(){return a},default:function(){return o}});var s=r("9880"),c=r("23169"),l=r.ir(r("3886")),i={sidebar_label:"preEntry"},d="source.preEntry",a=[];function t(e){var n=Object.assign({h1:"h1",a:"a",div:"div",p:"p"},(0,c.useMDXComponents)(),e.components);return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)(n.h1,{id:"sourcepreentry",children:["source.preEntry",(0,s.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#sourcepreentry",children:"#"})]}),"\n",(0,s.jsxs)(n.div,{className:"modern-directive tip",children:[(0,s.jsx)(n.div,{className:"modern-directive-title",children:"TIP"}),(0,s.jsx)(n.div,{className:"modern-directive-content",children:(0,s.jsxs)(n.p,{children:["This config is provided by Modern.js Builder, more detail can see ",(0,s.jsx)(n.a,{href:"https://modernjs.dev/builder/en/api/config-source.html#sourcepreentry",target:"_blank",rel:"noopener noreferrer",children:"source.preEntry"}),".\n"]})})]}),"\n","\n",(0,s.jsx)(l.default,{})]})}var o=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=Object.assign({},(0,c.useMDXComponents)(),e.components).wrapper;return n?(0,s.jsx)(n,Object.assign({},e,{children:(0,s.jsx)(t,e)})):t(e)}}}]);