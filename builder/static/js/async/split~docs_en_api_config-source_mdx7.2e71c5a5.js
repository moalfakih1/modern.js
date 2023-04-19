(self.webpackChunk_modern_js_builder_doc=self.webpackChunk_modern_js_builder_doc||[]).push([["split~docs_en_api_config-source_mdx7"],{82881:function(e,s,n){"use strict";Object.defineProperty(s,"__esModule",{value:!0});!function(e,s){for(var n in s)Object.defineProperty(e,n,{enumerable:!0,get:s[n]})}(s,{frontmatter:function(){return r},title:function(){return d},toc:function(){return a},default:function(){return t}});var l=n("12151"),c=n("23169"),r={},d="",a=[{text:"Add a single script",depth:4,id:"add-a-single-script"},{text:"Add global style",depth:4,id:"add-global-style"},{text:"Add multiple scripts",depth:4,id:"add-multiple-scripts"}];function i(e){var s=Object.assign({ul:"ul",li:"li",strong:"strong",code:"code",p:"p",h4:"h4",a:"a",div:"div",button:"button",pre:"pre"},(0,c.useMDXComponents)(),e.components);return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsxs)(s.ul,{children:["\n",(0,l.jsxs)(s.li,{children:[(0,l.jsx)(s.strong,{children:"Type:"})," ",(0,l.jsx)(s.code,{children:"string | string[]"})]}),"\n",(0,l.jsxs)(s.li,{children:[(0,l.jsx)(s.strong,{children:"Default:"})," ",(0,l.jsx)(s.code,{children:"undefined"})]}),"\n"]}),"\n",(0,l.jsx)(s.p,{children:"Add a script before the entry file of each page. This script will be executed before the page code. It can be used to execute global logics, such as injecting polyfills, setting global styles, etc."}),"\n",(0,l.jsxs)(s.h4,{id:"add-a-single-script",children:["Add a single script",(0,l.jsx)(s.a,{className:"header-anchor","aria-hidden":"true",href:"#add-a-single-script",children:"#"})]}),"\n",(0,l.jsxs)(s.p,{children:["First create a ",(0,l.jsx)(s.code,{children:"src/polyfill.ts"})," file:"]}),"\n",(0,l.jsx)(s.div,{className:"language-",children:(0,l.jsxs)(s.div,{className:"modern-code-content",children:[(0,l.jsx)(s.button,{className:"copy"}),(0,l.jsx)(s.pre,{className:"code",children:(0,l.jsx)(s.code,{className:"language-js",children:"console.log('I am a polyfill');\n"})})]})}),"\n",(0,l.jsxs)(s.p,{children:["Then configure ",(0,l.jsx)(s.code,{children:"src/polyfill.ts"})," to ",(0,l.jsx)(s.code,{children:"source.preEntry"}),":"]}),"\n",(0,l.jsx)(s.div,{className:"language-",children:(0,l.jsxs)(s.div,{className:"modern-code-content",children:[(0,l.jsx)(s.button,{className:"copy"}),(0,l.jsx)(s.pre,{className:"code",children:(0,l.jsx)(s.code,{className:"language-js",children:"export default {\n  source: {\n    preEntry: './src/polyfill.ts',\n  },\n};\n"})})]})}),"\n",(0,l.jsxs)(s.p,{children:["Re-run the compilation and visit any page, you can see that the code in ",(0,l.jsx)(s.code,{children:"src/polyfill.ts"})," has been executed, and the ",(0,l.jsx)(s.code,{children:"I am a polyfill"})," is logged in the console."]}),"\n",(0,l.jsxs)(s.h4,{id:"add-global-style",children:["Add global style",(0,l.jsx)(s.a,{className:"header-anchor","aria-hidden":"true",href:"#add-global-style",children:"#"})]}),"\n",(0,l.jsxs)(s.p,{children:["You can also configure the global style through ",(0,l.jsx)(s.code,{children:"source.preEntry"}),", this CSS code will be loaded earlier than the page code, such as introducing a ",(0,l.jsx)(s.code,{children:"normalize.css"})," file:"]}),"\n",(0,l.jsx)(s.div,{className:"language-",children:(0,l.jsxs)(s.div,{className:"modern-code-content",children:[(0,l.jsx)(s.button,{className:"copy"}),(0,l.jsx)(s.pre,{className:"code",children:(0,l.jsx)(s.code,{className:"language-js",children:"export default {\n  source: {\n    preEntry: './src/normalize.css',\n  },\n};\n"})})]})}),"\n",(0,l.jsxs)(s.h4,{id:"add-multiple-scripts",children:["Add multiple scripts",(0,l.jsx)(s.a,{className:"header-anchor","aria-hidden":"true",href:"#add-multiple-scripts",children:"#"})]}),"\n",(0,l.jsxs)(s.p,{children:["You can add multiple scripts by setting ",(0,l.jsx)(s.code,{children:"preEntry"})," to an array, and they will be executed in array order:"]}),"\n",(0,l.jsx)(s.div,{className:"language-",children:(0,l.jsxs)(s.div,{className:"modern-code-content",children:[(0,l.jsx)(s.button,{className:"copy"}),(0,l.jsx)(s.pre,{className:"code",children:(0,l.jsx)(s.code,{className:"language-js",children:"export default {\n  source: {\n    preEntry: ['./src/polyfill-a.ts', './src/polyfill-b.ts'],\n  },\n};\n"})})]})})]})}var t=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},s=Object.assign({},(0,c.useMDXComponents)(),e.components).wrapper;return s?(0,l.jsx)(s,Object.assign({},e,{children:(0,l.jsx)(i,e)})):i(e)}}}]);