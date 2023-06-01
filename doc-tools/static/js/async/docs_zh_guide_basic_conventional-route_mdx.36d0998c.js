(self.webpackChunk_modern_js_doc_tools_doc=self.webpackChunk_modern_js_doc_tools_doc||[]).push([["docs_zh_guide_basic_conventional-route_mdx"],{9988:function(e,n,d){"use strict";Object.defineProperty(n,"__esModule",{value:!0});!function(e,n){for(var d in n)Object.defineProperty(e,d,{enumerable:!0,get:n[d]})}(n,{frontmatter:function(){return c},title:function(){return o},toc:function(){return i},default:function(){return h}});var r=d("9880"),s=d("23169"),c={},o="约定式路由",i=[{text:"什么是约定式路由",depth:2,id:"什么是约定式路由"},{text:"映射规则",depth:2,id:"映射规则"},{text:"自定义行为",depth:2,id:"自定义行为"},{text:"最佳实践",depth:2,id:"最佳实践"}];function t(e){var n=Object.assign({h1:"h1",a:"a",h2:"h2",p:"p",code:"code",pre:"pre",table:"table",thead:"thead",tr:"tr",th:"th",tbody:"tbody",td:"td"},(0,s.useMDXComponents)(),e.components);return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(n.h1,{id:"约定式路由",children:["约定式路由",(0,r.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#约定式路由",children:"#"})]}),"\n",(0,r.jsxs)(n.h2,{id:"什么是约定式路由",children:["什么是约定式路由",(0,r.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#什么是约定式路由",children:"#"})]}),"\n",(0,r.jsx)(n.p,{children:"Modern.js Doc 使用的是文件系统路由，页面的文件路径会简单的映射为路由路径，这样会让整个项目的路由非常直观。"}),"\n",(0,r.jsxs)(n.p,{children:["例如，如果在 ",(0,r.jsx)(n.code,{children:"docs"})," 目录中有一个名为 ",(0,r.jsx)(n.code,{children:"foo.md"})," 的文件，则该文件的路由路径将是 ",(0,r.jsx)(n.code,{children:"/foo"}),"。"]}),"\n",(0,r.jsxs)(n.h2,{id:"映射规则",children:["映射规则",(0,r.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#映射规则",children:"#"})]}),"\n",(0,r.jsx)(n.p,{children:"Modern.js Doc 会自动扫描根目录和所有子目录，并将文件路径映射到路由路径。例如，如果你有以下的文件结构："}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:"docs\n├── foo\n│   └── bar.md\n└── foo.md\n"})}),"\n",(0,r.jsxs)(n.p,{children:["那么 ",(0,r.jsx)(n.code,{children:"bar.md"})," 的路由路径会是 ",(0,r.jsx)(n.code,{children:"/foo/bar"}),"，",(0,r.jsx)(n.code,{children:"foo.md"})," 的路由路径会是 ",(0,r.jsx)(n.code,{children:"/foo"}),"。"]}),"\n",(0,r.jsx)(n.p,{children:"具体映射规则如下："}),"\n",(0,r.jsxs)(n.table,{children:["\n",(0,r.jsxs)(n.thead,{children:["\n",(0,r.jsxs)(n.tr,{children:["\n",(0,r.jsx)(n.th,{children:"文件路径"}),"\n",(0,r.jsx)(n.th,{children:"路由路径"}),"\n"]}),"\n"]}),"\n",(0,r.jsxs)(n.tbody,{children:["\n",(0,r.jsxs)(n.tr,{children:["\n",(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"index.md"})}),"\n",(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"/"})}),"\n"]}),"\n",(0,r.jsxs)(n.tr,{children:["\n",(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"/foo.md"})}),"\n",(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"/foo"})}),"\n"]}),"\n",(0,r.jsxs)(n.tr,{children:["\n",(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"/foo/bar.md"})}),"\n",(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"/foo/bar"})}),"\n"]}),"\n",(0,r.jsxs)(n.tr,{children:["\n",(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"/zoo/index.md"})}),"\n",(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"/zoo"})}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,r.jsxs)(n.h2,{id:"自定义行为",children:["自定义行为",(0,r.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#自定义行为",children:"#"})]}),"\n",(0,r.jsxs)(n.p,{children:["如果要自定义路由行为，可以使用配置文件中的 ",(0,r.jsx)(n.code,{children:"route"})," 字段。例如："]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-ts",meta:'title="modern.config.ts"',children:"import { defineConfig } from '@modern-js/doc-tools';\n\nexport default defineConfig({\n  route: {\n    // These files will be excluded from the routing (support glob pattern)\n    exclude: ['custom.tsx', 'component/**/*']\n    // These files will be included in the routing (support glob pattern)\n    include: ['other-dir/**/*'],\n  }\n});\n"})}),"\n",(0,r.jsxs)(n.h2,{id:"最佳实践",children:["最佳实践",(0,r.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#最佳实践",children:"#"})]}),"\n",(0,r.jsxs)(n.p,{children:["我们推荐你将文档文件放在 ",(0,r.jsx)(n.code,{children:"docs"})," 目录下，这样可以让你的项目更加清晰。而对于非文档内容，比如自定义组件、工具函数等，可以放到 ",(0,r.jsx)(n.code,{children:"docs"})," 目录之外进行维护。比如："]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:"docs\n└── foo.mdx\nsrc\n├── components\n│   └── CustomComponent.tsx\n└── utils\n    └── utils.ts\n"})})]})}var h=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=Object.assign({},(0,s.useMDXComponents)(),e.components).wrapper;return n?(0,r.jsx)(n,Object.assign({},e,{children:(0,r.jsx)(t,e)})):t(e)}}}]);