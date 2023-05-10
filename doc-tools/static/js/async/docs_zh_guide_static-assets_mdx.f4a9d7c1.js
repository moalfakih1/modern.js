(self.webpackChunk_modern_js_doc_tools_doc=self.webpackChunk_modern_js_doc_tools_doc||[]).push([["docs_zh_guide_static-assets_mdx"],{54760:function(e,n,s){"use strict";Object.defineProperty(n,"__esModule",{value:!0});!function(e,n){for(var s in n)Object.defineProperty(e,s,{enumerable:!0,get:n[s]})}(n,{frontmatter:function(){return o},toc:function(){return a},title:function(){return r},default:function(){return i}});var d=s("9880"),c=s("23169"),o=void 0,a=[],r="静态资源处理";function l(e){var n=Object.assign({h1:"h1",a:"a",p:"p",code:"code",div:"div",pre:"pre",blockquote:"blockquote"},(0,c.useMDXComponents)(),e.components);return(0,d.jsxs)(d.Fragment,{children:[(0,d.jsxs)(n.h1,{id:"静态资源处理",children:[(0,d.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#静态资源处理",children:"#"}),"静态资源处理"]}),"\n",(0,d.jsxs)(n.p,{children:["你可以在 ",(0,d.jsx)(n.code,{children:"markdown"}),"（或 ",(0,d.jsx)(n.code,{children:"mdx"}),"）文件中导入静态资源。相对路径和绝对路径都是支持的，例如，如果在 markdown 同级目录有一张图片，你可以像这样引用它："]}),"\n",(0,d.jsxs)(n.div,{className:"language-mdx",children:[(0,d.jsx)(n.div,{className:""}),(0,d.jsx)(n.div,{className:"modern-code-content",children:(0,d.jsx)(n.pre,{className:"code",children:(0,d.jsx)(n.code,{className:"language-mdx",children:"![](./demo.png)\n"})})})]}),"\n",(0,d.jsxs)(n.p,{children:["当然，在 ",(0,d.jsx)(n.code,{children:".mdx"})," 文件中你也可以直接使用 img 标签："]}),"\n",(0,d.jsxs)(n.div,{className:"language-mdx",children:[(0,d.jsx)(n.div,{className:""}),(0,d.jsx)(n.div,{className:"modern-code-content",children:(0,d.jsx)(n.pre,{className:"code",children:(0,d.jsx)(n.code,{className:"language-mdx",children:'<img src="./demo.png" />\n'})})})]}),"\n",(0,d.jsxs)(n.p,{children:["Modern.js Doc 将会根据 ",(0,d.jsx)(n.code,{children:".mdx"})," 文件路径和图片路径，自动找到图片并响应给浏览器。"]}),"\n",(0,d.jsxs)(n.p,{children:["另一方面，也可以使用绝对路径导入静态资源。这样，Modern.js Doc 将会在",(0,d.jsx)(n.code,{children:"项目根目录"}),"下的 ",(0,d.jsx)(n.code,{children:"public"})," 文件夹中寻找资源。"]}),"\n",(0,d.jsxs)(n.blockquote,{children:["\n",(0,d.jsxs)(n.p,{children:["项目根目录，即 modern.config.ts 中 ",(0,d.jsx)(n.code,{children:"doc.root"})," 字段指定的目录。"]}),"\n"]}),"\n",(0,d.jsxs)(n.div,{className:"language-ts",children:[(0,d.jsx)(n.div,{className:"modern-code-title",children:"modern.config.ts"}),(0,d.jsx)(n.div,{className:"modern-code-content",children:(0,d.jsx)(n.pre,{className:"code",children:(0,d.jsx)(n.code,{className:"language-ts",children:"import { defineConfig } from '@modern-js/doc-tools';\nimport path from 'path';\nexport default defineConfig({\n  doc: {\n    root: path.join(__dirname, 'docs'),\n  },\n});\n"})})})]}),"\n",(0,d.jsxs)(n.p,{children:["例如，如果根目录是 ",(0,d.jsx)(n.code,{children:"docs"})," 并且目录结构如下"]}),"\n",(0,d.jsxs)(n.div,{className:"language-bash",children:[(0,d.jsx)(n.div,{className:""}),(0,d.jsx)(n.div,{className:"modern-code-content",children:(0,d.jsx)(n.pre,{className:"code",children:(0,d.jsx)(n.code,{className:"language-bash",children:"docs\n├── public\n│   └── demo.png\n├── index.mdx\n"})})})]}),"\n",(0,d.jsxs)(n.p,{children:["在如上的 ",(0,d.jsx)(n.code,{children:"index.mdx"})," 文件中，你可以像这样引用 ",(0,d.jsx)(n.code,{children:"demo.png"}),"："]}),"\n",(0,d.jsxs)(n.div,{className:"language-mdx",children:[(0,d.jsx)(n.div,{className:""}),(0,d.jsx)(n.div,{className:"modern-code-content",children:(0,d.jsx)(n.pre,{className:"code",children:(0,d.jsx)(n.code,{className:"language-mdx",children:"![](./public/demo.png)\n"})})})]}),"\n",(0,d.jsx)(n.p,{children:"或者用绝对路径来引用："}),"\n",(0,d.jsxs)(n.div,{className:"language-mdx",children:[(0,d.jsx)(n.div,{className:""}),(0,d.jsx)(n.div,{className:"modern-code-content",children:(0,d.jsx)(n.pre,{className:"code",children:(0,d.jsx)(n.code,{className:"language-mdx",children:"![](/demo.png)\n"})})})]})]})}var i=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=Object.assign({},(0,c.useMDXComponents)(),e.components).wrapper;return n?(0,d.jsx)(n,Object.assign({},e,{children:(0,d.jsx)(l,e)})):l(e)}}}]);