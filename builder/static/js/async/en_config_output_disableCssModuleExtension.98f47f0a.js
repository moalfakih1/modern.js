"use strict";(self.webpackChunk_modern_js_builder_doc=self.webpackChunk_modern_js_builder_doc||[]).push([[195],{42377:function(e,s,l){l.r(s),l.d(s,{content:function(){return o},frontmatter:function(){return i},toc:function(){return d}});var n=l(39980);const i=void 0,d=[{id:"example",text:"Example",depth:3},{id:"detailed",text:"Detailed",depth:3},{id:"disablecssmoduleextension-is-false-default",text:"disableCssModuleExtension is false (default)",depth:4},{id:"disablecssmoduleextension-is-true",text:"disableCssModuleExtension is true",depth:4}],o='"- Type: `boolean`\\n- Default: `false`\\n\\nWhether to treat all `.css` files in the source directory as CSS Modules.\\n\\nBy default, only the `*.module.css` files are treated as CSS Modules. After enabling this config, all `*.css` style files in the source directory will be regarded as CSS Modules.\\n\\n`.sass`, `.scss` and `.less` files are also affected by `disableCssModuleExtension`.\\n\\n:::tip\\nWe do not recommend enabling this config, because after enabling `disableCssModuleExtension`, CSS Modules files and ordinary CSS files cannot be clearly distinguished, which is not conducive to long-term maintenance.\\n:::\\n\\n### Example\\n\\n```js\\nexport default {\\n  output: {\\n    disableCssModuleExtension: true,\\n  },\\n};\\n```\\n\\n### Detailed\\n\\nThe following is a detailed explanation of the CSS Modules rules:\\n\\n#### disableCssModuleExtension is false (default)\\n\\nThe following files are treated as CSS Modules:\\n\\n- all `*.module.css` files\\n\\nThe following files are treated as normal CSS:\\n\\n- all `*.css` files (excluding `.module`)\\n- all `*.global.css` files\\n\\n#### disableCssModuleExtension is true\\n\\nThe following files are treated as CSS Modules:\\n\\n- `*.css` and `*.module.css` files in the source directory\\n- `*.module.css` files under node_modules\\n\\nThe following files are treated as normal CSS:\\n\\n- all `*.global.css` files\\n- `*.css` files under node_modules (without `.module`)\\n\\n:::tip\\nFor CSS Modules files inside node_modules, please always use the `*.module.css` suffix.\\n:::\\n"';function a(e){const s=Object.assign({ul:"ul",li:"li",code:"code",p:"p",div:"div",h3:"h3",a:"a",button:"button",pre:"pre",span:"span",h4:"h4"},e.components);return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsxs)(s.ul,{children:["\n",(0,n.jsxs)(s.li,{children:["Type: ",(0,n.jsx)(s.code,{children:"boolean"})]}),"\n",(0,n.jsxs)(s.li,{children:["Default: ",(0,n.jsx)(s.code,{children:"false"})]}),"\n"]}),"\n",(0,n.jsxs)(s.p,{children:["Whether to treat all ",(0,n.jsx)(s.code,{children:".css"})," files in the source directory as CSS Modules."]}),"\n",(0,n.jsxs)(s.p,{children:["By default, only the ",(0,n.jsx)(s.code,{children:"*.module.css"})," files are treated as CSS Modules. After enabling this config, all ",(0,n.jsx)(s.code,{children:"*.css"})," style files in the source directory will be regarded as CSS Modules."]}),"\n",(0,n.jsxs)(s.p,{children:[(0,n.jsx)(s.code,{children:".sass"}),", ",(0,n.jsx)(s.code,{children:".scss"})," and ",(0,n.jsx)(s.code,{children:".less"})," files are also affected by ",(0,n.jsx)(s.code,{children:"disableCssModuleExtension"}),"."]}),"\n",(0,n.jsxs)(s.div,{className:"modern-directive tip",children:[(0,n.jsx)(s.p,{className:"modern-directive-title",children:"TIP"}),(0,n.jsx)(s.div,{className:"modern-directive-content",children:(0,n.jsxs)(s.p,{children:["\nWe do not recommend enabling this config, because after enabling ",(0,n.jsx)(s.code,{children:"disableCssModuleExtension"}),", CSS Modules files and ordinary CSS files cannot be clearly distinguished, which is not conducive to long-term maintenance."]})})]}),"\n",(0,n.jsxs)(s.h3,{id:"example",children:[(0,n.jsx)(s.a,{className:"header-anchor","aria-hidden":"true",href:"#example",children:"#"}),"Example"]}),"\n",(0,n.jsxs)(s.div,{className:"language-js",children:[(0,n.jsx)(s.div,{className:""}),(0,n.jsxs)(s.div,{className:"modern-code-content",children:[(0,n.jsx)(s.button,{className:"copy"}),(0,n.jsx)(s.pre,{className:"shiki",style:{backgroundColor:"#2e3440ff"},children:(0,n.jsxs)(s.code,{children:[(0,n.jsxs)(s.span,{className:"line",children:[(0,n.jsx)(s.span,{style:{color:"#81A1C1"},children:"export"}),(0,n.jsx)(s.span,{style:{color:"#D8DEE9FF"},children:" "}),(0,n.jsx)(s.span,{style:{color:"#81A1C1"},children:"default"}),(0,n.jsx)(s.span,{style:{color:"#D8DEE9FF"},children:" "}),(0,n.jsx)(s.span,{style:{color:"#ECEFF4"},children:"{"})]}),"\n",(0,n.jsxs)(s.span,{className:"line",children:[(0,n.jsx)(s.span,{style:{color:"#D8DEE9FF"},children:"  "}),(0,n.jsx)(s.span,{style:{color:"#88C0D0"},children:"output"}),(0,n.jsx)(s.span,{style:{color:"#ECEFF4"},children:":"}),(0,n.jsx)(s.span,{style:{color:"#D8DEE9FF"},children:" "}),(0,n.jsx)(s.span,{style:{color:"#ECEFF4"},children:"{"})]}),"\n",(0,n.jsxs)(s.span,{className:"line",children:[(0,n.jsx)(s.span,{style:{color:"#D8DEE9FF"},children:"    "}),(0,n.jsx)(s.span,{style:{color:"#88C0D0"},children:"disableCssModuleExtension"}),(0,n.jsx)(s.span,{style:{color:"#ECEFF4"},children:":"}),(0,n.jsx)(s.span,{style:{color:"#D8DEE9FF"},children:" "}),(0,n.jsx)(s.span,{style:{color:"#81A1C1"},children:"true"}),(0,n.jsx)(s.span,{style:{color:"#ECEFF4"},children:","})]}),"\n",(0,n.jsxs)(s.span,{className:"line",children:[(0,n.jsx)(s.span,{style:{color:"#D8DEE9FF"},children:"  "}),(0,n.jsx)(s.span,{style:{color:"#ECEFF4"},children:"},"})]}),"\n",(0,n.jsxs)(s.span,{className:"line",children:[(0,n.jsx)(s.span,{style:{color:"#ECEFF4"},children:"}"}),(0,n.jsx)(s.span,{style:{color:"#81A1C1"},children:";"})]}),"\n",(0,n.jsx)(s.span,{className:"line"})]})})]})]}),"\n",(0,n.jsxs)(s.h3,{id:"detailed",children:[(0,n.jsx)(s.a,{className:"header-anchor","aria-hidden":"true",href:"#detailed",children:"#"}),"Detailed"]}),"\n",(0,n.jsx)(s.p,{children:"The following is a detailed explanation of the CSS Modules rules:"}),"\n",(0,n.jsxs)(s.h4,{id:"disablecssmoduleextension-is-false-default",children:[(0,n.jsx)(s.a,{className:"header-anchor","aria-hidden":"true",href:"#disablecssmoduleextension-is-false-default",children:"#"}),"disableCssModuleExtension is false (default)"]}),"\n",(0,n.jsx)(s.p,{children:"The following files are treated as CSS Modules:"}),"\n",(0,n.jsxs)(s.ul,{children:["\n",(0,n.jsxs)(s.li,{children:["all ",(0,n.jsx)(s.code,{children:"*.module.css"})," files"]}),"\n"]}),"\n",(0,n.jsx)(s.p,{children:"The following files are treated as normal CSS:"}),"\n",(0,n.jsxs)(s.ul,{children:["\n",(0,n.jsxs)(s.li,{children:["all ",(0,n.jsx)(s.code,{children:"*.css"})," files (excluding ",(0,n.jsx)(s.code,{children:".module"}),")"]}),"\n",(0,n.jsxs)(s.li,{children:["all ",(0,n.jsx)(s.code,{children:"*.global.css"})," files"]}),"\n"]}),"\n",(0,n.jsxs)(s.h4,{id:"disablecssmoduleextension-is-true",children:[(0,n.jsx)(s.a,{className:"header-anchor","aria-hidden":"true",href:"#disablecssmoduleextension-is-true",children:"#"}),"disableCssModuleExtension is true"]}),"\n",(0,n.jsx)(s.p,{children:"The following files are treated as CSS Modules:"}),"\n",(0,n.jsxs)(s.ul,{children:["\n",(0,n.jsxs)(s.li,{children:[(0,n.jsx)(s.code,{children:"*.css"})," and ",(0,n.jsx)(s.code,{children:"*.module.css"})," files in the source directory"]}),"\n",(0,n.jsxs)(s.li,{children:[(0,n.jsx)(s.code,{children:"*.module.css"})," files under node_modules"]}),"\n"]}),"\n",(0,n.jsx)(s.p,{children:"The following files are treated as normal CSS:"}),"\n",(0,n.jsxs)(s.ul,{children:["\n",(0,n.jsxs)(s.li,{children:["all ",(0,n.jsx)(s.code,{children:"*.global.css"})," files"]}),"\n",(0,n.jsxs)(s.li,{children:[(0,n.jsx)(s.code,{children:"*.css"})," files under node_modules (without ",(0,n.jsx)(s.code,{children:".module"}),")"]}),"\n"]}),"\n",(0,n.jsxs)(s.div,{className:"modern-directive tip",children:[(0,n.jsx)(s.p,{className:"modern-directive-title",children:"TIP"}),(0,n.jsx)(s.div,{className:"modern-directive-content",children:(0,n.jsxs)(s.p,{children:["\nFor CSS Modules files inside node_modules, please always use the ",(0,n.jsx)(s.code,{children:"*.module.css"}),"suffix."]})})]})]})}s.default=function(e={}){const{wrapper:s}=e.components||{};return s?(0,n.jsx)(s,Object.assign({},e,{children:(0,n.jsx)(a,e)})):a(e)}}}]);