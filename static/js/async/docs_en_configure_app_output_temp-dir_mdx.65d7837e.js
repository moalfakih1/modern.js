(self.webpackChunk_modern_js_main_doc=self.webpackChunk_modern_js_main_doc||[]).push([["docs_en_configure_app_output_temp-dir_mdx"],{71189:function(e,n,t){"use strict";Object.defineProperty(n,"__esModule",{value:!0});!function(e,n){for(var t in n)Object.defineProperty(e,t,{enumerable:!0,get:n[t]})}(n,{frontmatter:function(){return o},title:function(){return s},toc:function(){return a},default:function(){return d}});var r=t("9880"),i=t("23169"),o={sidebar_label:"tempDir"},s="output.tempDir",a=[];function c(e){var n=Object.assign({h1:"h1",a:"a",ul:"ul",li:"li",strong:"strong",code:"code",p:"p",pre:"pre"},(0,i.useMDXComponents)(),e.components);return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(n.h1,{id:"outputtempdir",children:["output.tempDir",(0,r.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#outputtempdir",children:"#"})]}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"Type:"})," ",(0,r.jsx)(n.code,{children:"string"})]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"Default:"})," ",(0,r.jsx)(n.code,{children:"''"})]}),"\n"]}),"\n",(0,r.jsx)(n.p,{children:"When developing or building a project, Modern.js generates real Webpack entries and HTML templates, placing them in a temporary directory."}),"\n",(0,r.jsx)(n.p,{children:"If you want to start a project with multiple configurations at the same time, you can use this configuration to generate files in different temporary directories to avoid interference with each other."}),"\n",(0,r.jsx)(n.p,{children:"The configuration can be a relative or absolute path, but paths outside the project should be avoided."}),"\n",(0,r.jsx)(n.p,{children:"Example:"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-ts",children:"export default {\n  output: {\n    tempDir: path.join('node_modules', '.temp-dir'),\n  }\n}\n"})})]})}var d=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=Object.assign({},(0,i.useMDXComponents)(),e.components).wrapper;return n?(0,r.jsx)(n,Object.assign({},e,{children:(0,r.jsx)(c,e)})):c(e)}}}]);