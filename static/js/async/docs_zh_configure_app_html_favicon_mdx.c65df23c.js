(self.webpackChunk_modern_js_main_doc=self.webpackChunk_modern_js_main_doc||[]).push([["docs_zh_configure_app_html_favicon_mdx"],{1456:function(n,e,r){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),Object.defineProperty(e,"default",{enumerable:!0,get:function(){return t}});var s=r("9880"),i=r("23169");function c(n){var e=Object.assign({ul:"ul",li:"li",strong:"strong",code:"code",p:"p",h3:"h3",a:"a",pre:"pre"},(0,i.useMDXComponents)(),n.components);return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)(e.ul,{children:["\n",(0,s.jsxs)(e.li,{children:[(0,s.jsx)(e.strong,{children:"类型："})," ",(0,s.jsx)(e.code,{children:"string"})]}),"\n",(0,s.jsxs)(e.li,{children:[(0,s.jsx)(e.strong,{children:"默认值："})," ",(0,s.jsx)(e.code,{children:"undefined"})]}),"\n"]}),"\n",(0,s.jsx)(e.p,{children:"设置页面的 favicon 图标，可以设置为："}),"\n",(0,s.jsxs)(e.ul,{children:["\n",(0,s.jsx)(e.li,{children:"URL 地址。"}),"\n",(0,s.jsx)(e.li,{children:"文件的绝对路径。"}),"\n",(0,s.jsx)(e.li,{children:"相对于项目根目录的相对路径。"}),"\n"]}),"\n",(0,s.jsxs)(e.p,{children:["配置该选项后，在编译过程中会自动将图标拷贝至 dist 目录下，并在 HTML 中添加相应的 ",(0,s.jsx)(e.code,{children:"link"})," 标签。"]}),"\n",(0,s.jsxs)(e.h3,{id:"示例",children:["示例",(0,s.jsx)(e.a,{className:"header-anchor","aria-hidden":"true",href:"#示例",children:"#"})]}),"\n",(0,s.jsx)(e.p,{children:"设置为相对路径："}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-js",children:"export default {\n  html: {\n    favicon: './src/assets/icon.png',\n  },\n};\n"})}),"\n",(0,s.jsx)(e.p,{children:"设置为绝对路径："}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-js",children:"import path from 'path';\n\nexport default {\n  html: {\n    favicon: path.resolve(__dirname, './src/assets/icon.png'),\n  },\n};\n"})}),"\n",(0,s.jsx)(e.p,{children:"设置为 URL："}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-js",children:"import path from 'path';\n\nexport default {\n  html: {\n    favicon: 'https://foo.com/favicon.ico',\n  },\n};\n"})}),"\n",(0,s.jsx)(e.p,{children:"重新编译后，HTML 中自动生成了以下标签："}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-html",children:'<link rel="icon" href="/favicon.ico" />\n'})})]})}var t=function(){var n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},e=Object.assign({},(0,i.useMDXComponents)(),n.components).wrapper;return e?(0,s.jsx)(e,Object.assign({},n,{children:(0,s.jsx)(c,n)})):c(n)}},2998:function(n,e,r){"use strict";Object.defineProperty(e,"__esModule",{value:!0});!function(n,e){for(var r in e)Object.defineProperty(n,r,{enumerable:!0,get:e[r]})}(e,{frontmatter:function(){return t},title:function(){return l},toc:function(){return a},default:function(){return d}});var s=r("9880"),i=r("23169"),c=r.ir(r("1456")),t={sidebar_label:"favicon"},l="html.favicon",a=[];function o(n){var e=Object.assign({h1:"h1",a:"a",div:"div",p:"p"},(0,i.useMDXComponents)(),n.components);return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)(e.h1,{id:"htmlfavicon",children:["html.favicon",(0,s.jsx)(e.a,{className:"header-anchor","aria-hidden":"true",href:"#htmlfavicon",children:"#"})]}),"\n",(0,s.jsxs)(e.div,{className:"modern-directive tip",children:[(0,s.jsx)(e.div,{className:"modern-directive-title",children:"TIP"}),(0,s.jsx)(e.div,{className:"modern-directive-content",children:(0,s.jsxs)(e.p,{children:["该配置由 Modern.js Builder 提供，更多信息可参考 ",(0,s.jsx)(e.a,{href:"https://modernjs.dev/builder/api/config-html.html#htmlfavicon",target:"_blank",rel:"noopener noreferrer",children:"html.favicon"}),"。\n"]})})]}),"\n","\n",(0,s.jsx)(c.default,{})]})}var d=function(){var n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},e=Object.assign({},(0,i.useMDXComponents)(),n.components).wrapper;return e?(0,s.jsx)(e,Object.assign({},n,{children:(0,s.jsx)(o,n)})):o(n)}}}]);