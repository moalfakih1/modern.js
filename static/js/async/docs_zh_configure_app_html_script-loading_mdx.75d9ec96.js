(self.webpackChunk_modern_js_main_doc=self.webpackChunk_modern_js_main_doc||[]).push([["docs_zh_configure_app_html_script-loading_mdx"],{1504:function(e,n,r){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),Object.defineProperty(n,"default",{enumerable:!0,get:function(){return c}});var d=r("9880"),s=r("23169");function i(e){var n=Object.assign({ul:"ul",li:"li",strong:"strong",code:"code",p:"p",h3:"h3",a:"a",pre:"pre",div:"div"},(0,s.useMDXComponents)(),e.components);return(0,d.jsxs)(d.Fragment,{children:[(0,d.jsxs)(n.ul,{children:["\n",(0,d.jsxs)(n.li,{children:[(0,d.jsx)(n.strong,{children:"类型："})," ",(0,d.jsx)(n.code,{children:"'defer' | 'blocking' | 'module'"})]}),"\n",(0,d.jsxs)(n.li,{children:[(0,d.jsx)(n.strong,{children:"默认值："})," ",(0,d.jsx)(n.code,{children:"'defer'"})]}),"\n"]}),"\n",(0,d.jsxs)(n.p,{children:["用于设置 ",(0,d.jsx)(n.code,{children:"<script>"})," 标签的加载方式。"]}),"\n",(0,d.jsxs)(n.h3,{id:"defer",children:["defer",(0,d.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#defer",children:"#"})]}),"\n",(0,d.jsxs)(n.p,{children:["默认情况下，Builder 生成的 ",(0,d.jsx)(n.code,{children:"<script>"})," 标签会自动设置 ",(0,d.jsx)(n.code,{children:"defer"})," 属性，以避免阻塞页面的解析和渲染。"]}),"\n",(0,d.jsx)(n.pre,{children:(0,d.jsx)(n.code,{className:"language-html",children:'<head>\n  <script defer src="/static/js/main.js"></script>\n</head>\n<body></body>\n'})}),"\n",(0,d.jsxs)(n.div,{className:"modern-directive tip",children:[(0,d.jsx)(n.div,{className:"modern-directive-title",children:"TIP"}),(0,d.jsx)(n.div,{className:"modern-directive-content",children:(0,d.jsxs)(n.p,{children:["当浏览器遇到带有 defer 属性的 ",(0,d.jsx)(n.code,{children:"<script>"})," 标签时，它会异步地下载脚本文件，不会阻塞页面的解析和渲染。在页面解析和渲染完成后，浏览器会按照 ",(0,d.jsx)(n.code,{children:"<script>"})," 标签在文档中出现的顺序依次执行它们。\n"]})})]}),"\n",(0,d.jsxs)(n.h3,{id:"blocking",children:["blocking",(0,d.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#blocking",children:"#"})]}),"\n",(0,d.jsxs)(n.p,{children:["将 ",(0,d.jsx)(n.code,{children:"scriptLoading"})," 设置为 ",(0,d.jsx)(n.code,{children:"blocking"})," 可以移除 ",(0,d.jsx)(n.code,{children:"defer"})," 属性，此时脚本是同步执行的，这意味着它会阻塞浏览器的解析和渲染过程，直到脚本文件被下载并执行完毕。"]}),"\n",(0,d.jsx)(n.pre,{children:(0,d.jsx)(n.code,{className:"language-js",children:"export default {\n  html: {\n    inject: 'body',\n    scriptLoading: 'blocking',\n  },\n};\n"})}),"\n",(0,d.jsxs)(n.p,{children:["当你需要设置 ",(0,d.jsx)(n.code,{children:"blocking"})," 时，建议把 ",(0,d.jsx)(n.code,{children:"html.inject"})," 设置为 ",(0,d.jsx)(n.code,{children:"body"}),"，避免页面渲染被阻塞。"]}),"\n",(0,d.jsx)(n.pre,{children:(0,d.jsx)(n.code,{className:"language-html",children:'<head></head>\n<body>\n  <script src="/static/js/main.js"></script>\n</body>\n'})}),"\n",(0,d.jsxs)(n.h3,{id:"module",children:["module",(0,d.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#module",children:"#"})]}),"\n",(0,d.jsxs)(n.p,{children:["将 ",(0,d.jsx)(n.code,{children:"scriptLoading"})," 设置为 ",(0,d.jsx)(n.code,{children:"module"})," 时，可以让脚本支持 ESModule 语法，同时浏览器也会自动默认延迟执行这些脚本，效果与 ",(0,d.jsx)(n.code,{children:"defer"})," 类似。"]}),"\n",(0,d.jsx)(n.pre,{children:(0,d.jsx)(n.code,{className:"language-js",children:"export default {\n  html: {\n    scriptLoading: 'module',\n  },\n};\n"})}),"\n",(0,d.jsx)(n.pre,{children:(0,d.jsx)(n.code,{className:"language-html",children:'<head>\n  <script type="module" src="/static/js/main.js"></script>\n</head>\n<body></body>\n'})})]})}var c=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=Object.assign({},(0,s.useMDXComponents)(),e.components).wrapper;return n?(0,d.jsx)(n,Object.assign({},e,{children:(0,d.jsx)(i,e)})):i(e)}},36504:function(e,n,r){"use strict";Object.defineProperty(n,"__esModule",{value:!0});!function(e,n){for(var r in n)Object.defineProperty(e,r,{enumerable:!0,get:n[r]})}(n,{frontmatter:function(){return c},title:function(){return l},toc:function(){return t},default:function(){return o}});var d=r("9880"),s=r("23169"),i=r.ir(r("1504")),c={sidebar_label:"scriptLoading"},l="html.scriptLoading",t=[];function a(e){var n=Object.assign({h1:"h1",a:"a",div:"div",p:"p"},(0,s.useMDXComponents)(),e.components);return(0,d.jsxs)(d.Fragment,{children:[(0,d.jsxs)(n.h1,{id:"htmlscriptloading",children:["html.scriptLoading",(0,d.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#htmlscriptloading",children:"#"})]}),"\n",(0,d.jsxs)(n.div,{className:"modern-directive tip",children:[(0,d.jsx)(n.div,{className:"modern-directive-title",children:"TIP"}),(0,d.jsx)(n.div,{className:"modern-directive-content",children:(0,d.jsxs)(n.p,{children:["该配置由 Modern.js Builder 提供，更多信息可参考 ",(0,d.jsx)(n.a,{href:"https://modernjs.dev/builder/api/config-html.html#htmlscriptloading",target:"_blank",rel:"noopener noreferrer",children:"html.scriptLoading"}),"。\n"]})})]}),"\n","\n",(0,d.jsx)(i.default,{})]})}var o=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=Object.assign({},(0,s.useMDXComponents)(),e.components).wrapper;return n?(0,d.jsx)(n,Object.assign({},e,{children:(0,d.jsx)(a,e)})):a(e)}}}]);