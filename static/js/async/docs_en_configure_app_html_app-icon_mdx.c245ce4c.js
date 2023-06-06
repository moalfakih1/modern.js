(self.webpackChunk_modern_js_main_doc=self.webpackChunk_modern_js_main_doc||[]).push([["docs_en_configure_app_html_app-icon_mdx"],{23847:function(e,n,t){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),Object.defineProperty(n,"default",{enumerable:!0,get:function(){return a}});var r=t("9880"),i=t("23169");function s(e){var n=Object.assign({ul:"ul",li:"li",strong:"strong",code:"code",p:"p",h3:"h3",a:"a",pre:"pre"},(0,i.useMDXComponents)(),e.components);return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"Type:"})," ",(0,r.jsx)(n.code,{children:"string"})]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"Default:"})," ",(0,r.jsx)(n.code,{children:"undefined"})]}),"\n"]}),"\n",(0,r.jsx)(n.p,{children:"Set the file path of the apple-touch-icon icon for the iOS system, can be set as a relative path relative to the project root directory, or as an absolute path to the file. Setting it as a CDN URL is not currently supported."}),"\n",(0,r.jsxs)(n.p,{children:["After config this option, the icon will be automatically copied to the dist directory during the compilation, and the corresponding ",(0,r.jsx)(n.code,{children:"link"})," tag will be added to the HTML."]}),"\n",(0,r.jsxs)(n.h3,{id:"example",children:["Example",(0,r.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#example",children:"#"})]}),"\n",(0,r.jsx)(n.p,{children:"Set as a relative path:"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-js",children:"export default {\n  html: {\n    appIcon: './src/assets/icon.png',\n  },\n};\n"})}),"\n",(0,r.jsx)(n.p,{children:"Set to an absolute path:"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-js",children:"import path from 'path';\n\nexport default {\n  html: {\n    appIcon: path.resolve(__dirname, './src/assets/icon.png'),\n  },\n};\n"})}),"\n",(0,r.jsx)(n.p,{children:"After recompiling, the following tags are automatically generated in the HTML:"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-html",children:'<link rel="apple-touch-icon" sizes="180*180" href="/static/image/icon.png" />\n'})})]})}var a=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=Object.assign({},(0,i.useMDXComponents)(),e.components).wrapper;return n?(0,r.jsx)(n,Object.assign({},e,{children:(0,r.jsx)(s,e)})):s(e)}},7213:function(e,n,t){"use strict";Object.defineProperty(n,"__esModule",{value:!0});!function(e,n){for(var t in n)Object.defineProperty(e,t,{enumerable:!0,get:n[t]})}(n,{frontmatter:function(){return a},title:function(){return c},toc:function(){return o},default:function(){return d}});var r=t("9880"),i=t("23169"),s=t.ir(t("23847")),a={sidebar_label:"appIcon"},c="html.appIcon",o=[];function l(e){var n=Object.assign({h1:"h1",a:"a",div:"div",p:"p"},(0,i.useMDXComponents)(),e.components);return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(n.h1,{id:"htmlappicon",children:["html.appIcon",(0,r.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#htmlappicon",children:"#"})]}),"\n",(0,r.jsxs)(n.div,{className:"modern-directive tip",children:[(0,r.jsx)(n.div,{className:"modern-directive-title",children:"TIP"}),(0,r.jsx)(n.div,{className:"modern-directive-content",children:(0,r.jsxs)(n.p,{children:["This config is provided by Modern.js Builder, more detail can see ",(0,r.jsx)(n.a,{href:"https://modernjs.dev/builder/en/api/config-html.html#htmlappicon",target:"_blank",rel:"noopener noreferrer",children:"html.appIcon"}),".\n"]})})]}),"\n","\n",(0,r.jsx)(s.default,{})]})}var d=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=Object.assign({},(0,i.useMDXComponents)(),e.components).wrapper;return n?(0,r.jsx)(n,Object.assign({},e,{children:(0,r.jsx)(l,e)})):l(e)}}}]);