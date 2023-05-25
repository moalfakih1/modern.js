(self.webpackChunk_modern_js_main_doc=self.webpackChunk_modern_js_main_doc||[]).push([["docs_zh_configure_app_html_disable-html-folder_mdx"],{7906:function(e,n,r){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),Object.defineProperty(n,"default",{enumerable:!0,get:function(){return d}});var s=r("9880"),l=r("23169");function t(e){var n=Object.assign({ul:"ul",li:"li",strong:"strong",code:"code",p:"p",h3:"h3",a:"a",pre:"pre",blockquote:"blockquote"},(0,l.useMDXComponents)(),e.components);return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"类型："})," ",(0,s.jsx)(n.code,{children:"boolean"})]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"默认值："})," ",(0,s.jsx)(n.code,{children:"false"})]}),"\n"]}),"\n",(0,s.jsxs)(n.p,{children:["移除 HTML 产物对应的文件夹。开启该选项后，生成的 HTML 文件目录会从 ",(0,s.jsx)(n.code,{children:"[name]/index.html"})," 变为 ",(0,s.jsx)(n.code,{children:"[name].html"}),"。"]}),"\n",(0,s.jsxs)(n.h3,{id:"示例",children:["示例",(0,s.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#示例",children:"#"})]}),"\n",(0,s.jsxs)(n.p,{children:["默认情况下，HTML 产物在 ",(0,s.jsx)(n.code,{children:"dist"})," 目录下的结构为："]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"/dist\n└── html\n    └── main\n        └── index.html\n"})}),"\n",(0,s.jsxs)(n.p,{children:["开启 ",(0,s.jsx)(n.code,{children:"html.disableHtmlFolder"})," 配置:"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-js",children:"export default {\n  html: {\n    disableHtmlFolder: true,\n  },\n};\n"})}),"\n",(0,s.jsx)(n.p,{children:"重新编译后，HTML 产物在 dist 中的目录结构如下："}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"/dist\n└── html\n    └── main.html\n"})}),"\n",(0,s.jsxs)(n.blockquote,{children:["\n",(0,s.jsxs)(n.p,{children:["如果需要设置 HTML 文件在 dist 目录中的路径，请使用 ",(0,s.jsx)(n.code,{children:"output.distPath.html"})," 配置。"]}),"\n"]})]})}var d=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=Object.assign({},(0,l.useMDXComponents)(),e.components).wrapper;return n?(0,s.jsx)(n,Object.assign({},e,{children:(0,s.jsx)(t,e)})):t(e)}},62441:function(e,n,r){"use strict";Object.defineProperty(n,"__esModule",{value:!0});!function(e,n){for(var r in n)Object.defineProperty(e,r,{enumerable:!0,get:n[r]})}(n,{frontmatter:function(){return d},title:function(){return i},toc:function(){return c},default:function(){return o}});var s=r("9880"),l=r("23169"),t=r.ir(r("7906")),d={sidebar_label:"disableHtmlFolder"},i="html.disableHtmlFolder",c=[];function a(e){var n=Object.assign({h1:"h1",a:"a",div:"div",p:"p"},(0,l.useMDXComponents)(),e.components);return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)(n.h1,{id:"htmldisablehtmlfolder",children:["html.disableHtmlFolder",(0,s.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#htmldisablehtmlfolder",children:"#"})]}),"\n",(0,s.jsxs)(n.div,{className:"modern-directive tip",children:[(0,s.jsx)(n.div,{className:"modern-directive-title",children:"TIP"}),(0,s.jsx)(n.div,{className:"modern-directive-content",children:(0,s.jsxs)(n.p,{children:["该配置由 Modern.js Builder 提供，更多信息可参考 ",(0,s.jsx)(n.a,{href:"https://modernjs.dev/builder/api/config-html.html#htmldisablehtmlfolder",target:"_blank",rel:"noopener noreferrer",children:"html.disableHtmlFolder"}),"。\n"]})})]}),"\n","\n",(0,s.jsx)(t.default,{})]})}var o=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=Object.assign({},(0,l.useMDXComponents)(),e.components).wrapper;return n?(0,s.jsx)(n,Object.assign({},e,{children:(0,s.jsx)(a,e)})):a(e)}}}]);