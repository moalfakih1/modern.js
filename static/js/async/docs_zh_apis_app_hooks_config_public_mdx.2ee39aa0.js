(self.webpackChunk_modern_js_main_doc=self.webpackChunk_modern_js_main_doc||[]).push([["docs_zh_apis_app_hooks_config_public_mdx"],{8912:function(e,n,i){"use strict";Object.defineProperty(n,"__esModule",{value:!0});!function(e,n){for(var i in n)Object.defineProperty(e,i,{enumerable:!0,get:n[i]})}(n,{frontmatter:function(){return d},title:function(){return c},toc:function(){return t},default:function(){return a}});var s=i("9880"),r=i("23169"),d={title:"public/",sidebar_position:3},c="public/",t=[{text:"说明",depth:2,id:"说明"},{text:"场景",depth:2,id:"场景"},{text:"代码压缩",depth:2,id:"代码压缩"}];function h(e){var n=Object.assign({h1:"h1",a:"a",p:"p",code:"code",h2:"h2",div:"div"},(0,r.useMDXComponents)(),e.components);return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)(n.h1,{id:"public/",children:["public/",(0,s.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#public/",children:"#"})]}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.code,{children:"public/"})," 目录中可以放置任意格式的静态资源文件，文件会被 Serve 在 Web 应用域名下。"]}),"\n",(0,s.jsxs)(n.h2,{id:"说明",children:["说明",(0,s.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#说明",children:"#"})]}),"\n",(0,s.jsxs)(n.p,{children:["被 Serve 的文件路由基于目录结构的约定，其中，",(0,s.jsx)(n.code,{children:"public/"})," 为根目录，对应 Web 应用根路径。"]}),"\n",(0,s.jsxs)(n.p,{children:["例如 ",(0,s.jsx)(n.code,{children:"config/public/sdk/index.js"})," 文件，在部署后将会被 Serve 在 ",(0,s.jsx)(n.code,{children:"${domain}/sdk/index.js"})," 下。"]}),"\n",(0,s.jsxs)(n.h2,{id:"场景",children:["场景",(0,s.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#场景",children:"#"})]}),"\n",(0,s.jsxs)(n.p,{children:["例如 ",(0,s.jsx)(n.code,{children:"robots.txt"}),"，",(0,s.jsx)(n.code,{children:"auth.xml"})," 等第三方系统需要的认证文件。"]}),"\n",(0,s.jsx)(n.p,{children:"或者是给其他业务方（要求路由不变）的 SDK，也可以是无需入口的 HTML 文件等。"}),"\n",(0,s.jsxs)(n.div,{className:"modern-directive info",children:[(0,s.jsx)(n.div,{className:"modern-directive-title",children:"INFO"}),(0,s.jsxs)(n.div,{className:"modern-directive-content",children:[(0,s.jsxs)(n.p,{children:["对于需要在源码中通过 import 引用的静态资源（比如 SVG 图片），建议放到 ",(0,s.jsx)(n.code,{children:"src/assets"})," 目录下进行管理。"]}),"\n"]})]}),"\n",(0,s.jsxs)(n.h2,{id:"代码压缩",children:["代码压缩",(0,s.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#代码压缩",children:"#"})]}),"\n",(0,s.jsxs)(n.p,{children:["如果目录下的文件是一个 ",(0,s.jsx)(n.code,{children:".js"})," 文件，在生产环境构建时，会自动对其进行代码压缩。"]}),"\n",(0,s.jsxs)(n.p,{children:["如果该文件以 ",(0,s.jsx)(n.code,{children:".min.js"})," 结尾，则不会经过代码压缩处理。"]})]})}var a=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=Object.assign({},(0,r.useMDXComponents)(),e.components).wrapper;return n?(0,s.jsx)(n,Object.assign({},e,{children:(0,s.jsx)(h,e)})):h(e)}}}]);