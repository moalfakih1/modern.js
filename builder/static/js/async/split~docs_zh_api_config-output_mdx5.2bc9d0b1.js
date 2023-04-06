(self.webpackChunkwebpack=self.webpackChunkwebpack||[]).push([["split~docs_zh_api_config-output_mdx5"],{87057:function(e,n,s){"use strict";Object.defineProperty(n,"__esModule",{value:!0});!function(e,n){for(var s in n)Object.defineProperty(e,s,{enumerable:!0,get:n[s]})}(n,{frontmatter:function(){return i},title:function(){return l},toc:function(){return d},default:function(){return a}});var c=s("12151"),t=s("21447");let i={},l="",d=[{text:"示例",depth:3,id:"示例"}];function r(e){let n=Object.assign({ul:"ul",li:"li",strong:"strong",code:"code",p:"p",div:"div",a:"a",h3:"h3",button:"button",pre:"pre"},(0,t.useMDXComponents)(),e.components);return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsxs)(n.ul,{children:["\n",(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:"类型："})," ",(0,c.jsx)(n.code,{children:"boolean"})]}),"\n",(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:"默认值："})," ",(0,c.jsx)(n.code,{children:"false"})]}),"\n",(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:"打包工具："})," ",(0,c.jsx)(n.code,{children:"仅支持 webpack"})]}),"\n"]}),"\n",(0,c.jsxs)(n.p,{children:["用来控制生产环境中是否用 ",(0,c.jsx)(n.code,{children:"<script>"})," 标签将产物中的 script 文件（.js 文件）inline 到 HTML 中。"]}),"\n",(0,c.jsx)(n.p,{children:"注意，如果开启了这个选项，那么 script 文件将不会被写入产物目录中，而只会以 inline 脚本的形式存在于 HTML 文件中。"}),"\n",(0,c.jsxs)(n.div,{className:"modern-directive note",children:[(0,c.jsx)(n.div,{className:"modern-directive-title",children:"NOTE"}),(0,c.jsxs)(n.div,{className:"modern-directive-content",children:["当使用约定式路由时，如果开启了这个选项，需要将 ",(0,c.jsx)(n.a,{href:"https://modernjs.dev/configure/app/output/splitRouteChunks.html",target:"_blank",rel:"noopener noreferrer",children:(0,c.jsx)(n.code,{children:"output.splitRouteChunks"})})," 设置为 false。\n"]})]}),"\n",(0,c.jsxs)(n.h3,{id:"示例",children:["示例",(0,c.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#示例",children:"#"})]}),"\n",(0,c.jsx)(n.p,{children:"默认情况下，我们有这样的产物文件："}),"\n",(0,c.jsx)(n.div,{className:"language-",children:(0,c.jsxs)(n.div,{className:"modern-code-content",children:[(0,c.jsx)(n.button,{className:"copy"}),(0,c.jsx)(n.pre,{className:"code",children:(0,c.jsx)(n.code,{className:"language-bash",children:"dist/html/main/index.html\ndist/static/css/style.css\ndist/static/js/main.js\n"})})]})}),"\n",(0,c.jsxs)(n.p,{children:["开启 ",(0,c.jsx)(n.code,{children:"output.enableInlineScripts"})," 选项后："]}),"\n",(0,c.jsx)(n.div,{className:"language-",children:(0,c.jsxs)(n.div,{className:"modern-code-content",children:[(0,c.jsx)(n.button,{className:"copy"}),(0,c.jsx)(n.pre,{className:"code",children:(0,c.jsx)(n.code,{className:"language-js",children:"export default {\n  output: {\n    enableInlineScripts: true,\n  },\n};\n"})})]})}),"\n",(0,c.jsx)(n.p,{children:"产物文件将变成："}),"\n",(0,c.jsx)(n.div,{className:"language-",children:(0,c.jsxs)(n.div,{className:"modern-code-content",children:[(0,c.jsx)(n.button,{className:"copy"}),(0,c.jsx)(n.pre,{className:"code",children:(0,c.jsx)(n.code,{className:"language-bash",children:"dist/html/main/index.html\ndist/static/css/style.css\n"})})]})}),"\n",(0,c.jsxs)(n.p,{children:["同时，",(0,c.jsx)(n.code,{children:"dist/static/js/main.js"})," 文件将被 inline 到 ",(0,c.jsx)(n.code,{children:"index.html"})," 中："]}),"\n",(0,c.jsx)(n.div,{className:"language-",children:(0,c.jsxs)(n.div,{className:"modern-code-content",children:[(0,c.jsx)(n.button,{className:"copy"}),(0,c.jsx)(n.pre,{className:"code",children:(0,c.jsx)(n.code,{className:"language-html",children:"<html>\n  <body>\n    <script>\n      // content of dist/static/js/main.js\n    </script>\n  </body>\n</html>\n"})})]})})]})}var a=function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},{wrapper:n}=Object.assign({},(0,t.useMDXComponents)(),e.components);return n?(0,c.jsx)(n,Object.assign({},e,{children:(0,c.jsx)(r,e)})):r(e)}}}]);