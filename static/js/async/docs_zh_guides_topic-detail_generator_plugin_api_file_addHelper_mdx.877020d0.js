(self.webpackChunk_modern_js_main_doc=self.webpackChunk_modern_js_main_doc||[]).push([["docs_zh_guides_topic-detail_generator_plugin_api_file_addHelper_mdx"],{5056:function(e,n,r){"use strict";Object.defineProperty(n,"__esModule",{value:!0});!function(e,n){for(var r in n)Object.defineProperty(e,r,{enumerable:!0,get:n[r]})}(n,{frontmatter:function(){return s},title:function(){return i},toc:function(){return t},default:function(){return l}});var a=r("9880"),d=r("23169"),s={sidebar_position:2},i="addHelper",t=[{text:"name",depth:2,id:"name"},{text:"fn",depth:2,id:"fn"}];function c(e){var n=Object.assign({h1:"h1",a:"a",p:"p",code:"code",div:"div",pre:"pre",h2:"h2"},(0,d.useMDXComponents)(),e.components);return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsxs)(n.h1,{id:"addhelper",children:["addHelper",(0,a.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#addhelper",children:"#"})]}),"\n",(0,a.jsxs)(n.p,{children:["针对于文本类型文件，增加 Handlebars 的自定义 Help 函数，具体可查看文档",(0,a.jsx)(n.a,{href:"https://handlebarsjs.com/guide/#custom-helpers",target:"_blank",rel:"noopener noreferrer",children:"Custom Helpers"}),"。"]}),"\n",(0,a.jsxs)(n.p,{children:["该方法可在 ",(0,a.jsx)(n.code,{children:"onForged"})," 生命周期的 api 参数上获取。"]}),"\n",(0,a.jsx)(n.p,{children:"其类型定义为："}),"\n",(0,a.jsx)(n.div,{className:"language-",children:(0,a.jsx)(n.div,{className:"modern-code-content",children:(0,a.jsx)(n.pre,{className:"code",children:(0,a.jsx)(n.code,{className:"language-ts",children:"export type ForgedAPI = {\n  addHelper: (name: string, fn: Handlebars.HelperDelegate) => void;\n  ...\n};\n"})})})}),"\n",(0,a.jsxs)(n.h2,{id:"name",children:["name",(0,a.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#name",children:"#"})]}),"\n",(0,a.jsx)(n.p,{children:"help 函数名称。"}),"\n",(0,a.jsxs)(n.h2,{id:"fn",children:["fn",(0,a.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#fn",children:"#"})]}),"\n",(0,a.jsx)(n.p,{children:"help 函数实现。"})]})}var l=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=Object.assign({},(0,d.useMDXComponents)(),e.components).wrapper;return n?(0,a.jsx)(n,Object.assign({},e,{children:(0,a.jsx)(c,e)})):c(e)}}}]);