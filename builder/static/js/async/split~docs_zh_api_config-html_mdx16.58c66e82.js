(self.webpackChunkwebpack=self.webpackChunkwebpack||[]).push([["split~docs_zh_api_config-html_mdx16"],{10662:function(e,n,s){"use strict";Object.defineProperty(n,"__esModule",{value:!0});!function(e,n){for(var s in n)Object.defineProperty(e,s,{enumerable:!0,get:n[s]})}(n,{frontmatter:function(){return r},title:function(){return d},toc:function(){return t},default:function(){return a}});var c=s("12151"),i=s("21447"),r={},d="",t=[{text:"默认插入位置",depth:4,id:"默认插入位置"},{text:"插入至 body 标签",depth:4,id:"插入至-body-标签"}];function l(e){var n=Object.assign({ul:"ul",li:"li",strong:"strong",code:"code",p:"p",h4:"h4",a:"a",div:"div",button:"button",pre:"pre"},(0,i.useMDXComponents)(),e.components);return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsxs)(n.ul,{children:["\n",(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:"类型："})," ",(0,c.jsx)(n.code,{children:"'head' | 'body'| 'true' | false"})]}),"\n",(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:"默认值："})," ",(0,c.jsx)(n.code,{children:"'head'"})]}),"\n"]}),"\n",(0,c.jsxs)(n.p,{children:["修改构建产物中 ",(0,c.jsx)(n.code,{children:"<script>"})," 标签在 HTML 中的插入位置。"]}),"\n",(0,c.jsx)(n.p,{children:"可以设置为以下值："}),"\n",(0,c.jsxs)(n.ul,{children:["\n",(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:"'head'"}),": script 标签会插入在 HTML 的 head 标签内。"]}),"\n",(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:"'body'"}),": script 标签会插入在 HTML 的 body 标签尾部。"]}),"\n",(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:"true"}),": 最终表现取决于 ",(0,c.jsx)(n.code,{children:"html-webpack-plugin"})," 的 scriptLoading 配置项。"]}),"\n",(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:"false"}),": script 标签不插入 HTML 中。"]}),"\n"]}),"\n",(0,c.jsxs)(n.h4,{id:"默认插入位置",children:["默认插入位置",(0,c.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#默认插入位置",children:"#"})]}),"\n",(0,c.jsx)(n.p,{children:"script 标签默认在 head 标签内："}),"\n",(0,c.jsx)(n.div,{className:"language-",children:(0,c.jsxs)(n.div,{className:"modern-code-content",children:[(0,c.jsx)(n.button,{className:"copy"}),(0,c.jsx)(n.pre,{className:"code",children:(0,c.jsx)(n.code,{className:"language-html",children:'<html>\n  <head>\n    <title></title>\n    <script defer src="/static/js/runtime-main.js"></script>\n    <script defer src="/static/js/main.js"></script>\n    <link href="/static/css/main.css" rel="stylesheet" />\n  </head>\n  <body>\n    <div id="root"></div>\n  </body>\n</html>\n'})})]})}),"\n",(0,c.jsxs)(n.h4,{id:"插入至-body-标签",children:["插入至 body 标签",(0,c.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#插入至-body-标签",children:"#"})]}),"\n",(0,c.jsx)(n.p,{children:"添加如下配置，可以将 script 插入至 body 标签："}),"\n",(0,c.jsx)(n.div,{className:"language-",children:(0,c.jsxs)(n.div,{className:"modern-code-content",children:[(0,c.jsx)(n.button,{className:"copy"}),(0,c.jsx)(n.pre,{className:"code",children:(0,c.jsx)(n.code,{className:"language-js",children:"export default {\n  html: {\n    inject: 'body',\n  },\n};\n"})})]})}),"\n",(0,c.jsx)(n.p,{children:"可以看到 script 标签生成在 body 标签尾部："}),"\n",(0,c.jsx)(n.div,{className:"language-",children:(0,c.jsxs)(n.div,{className:"modern-code-content",children:[(0,c.jsx)(n.button,{className:"copy"}),(0,c.jsx)(n.pre,{className:"code",children:(0,c.jsx)(n.code,{className:"language-html",children:'<html>\n  <head>\n    <title></title>\n    <link href="/static/css/main.css" rel="stylesheet" />\n  </head>\n  <body>\n    <div id="root"></div>\n    <script defer src="/static/js/runtime-main.js"></script>\n    <script defer src="/static/js/main.js"></script>\n  </body>\n</html>\n'})})]})})]})}var a=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=Object.assign({},(0,i.useMDXComponents)(),e.components).wrapper;return n?(0,c.jsx)(n,Object.assign({},e,{children:(0,c.jsx)(l,e)})):l(e)}}}]);