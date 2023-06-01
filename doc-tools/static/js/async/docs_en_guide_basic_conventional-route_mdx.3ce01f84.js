(self.webpackChunk_modern_js_doc_tools_doc=self.webpackChunk_modern_js_doc_tools_doc||[]).push([["docs_en_guide_basic_conventional-route_mdx"],{55866:function(e,n,t){"use strict";Object.defineProperty(n,"__esModule",{value:!0});!function(e,n){for(var t in n)Object.defineProperty(e,t,{enumerable:!0,get:n[t]})}(n,{frontmatter:function(){return i},title:function(){return s},toc:function(){return d},default:function(){return h}});var o=t("9880"),r=t("23169"),i={},s="Conventional Route",d=[{text:"What is it?",depth:2,id:"what-is-it?"},{text:"Mapping Rules",depth:2,id:"mapping-rules"},{text:"Custom Behavior",depth:2,id:"custom-behavior"},{text:"Best Practices",depth:2,id:"best-practices"}];function c(e){var n=Object.assign({h1:"h1",a:"a",h2:"h2",p:"p",code:"code",pre:"pre",table:"table",thead:"thead",tr:"tr",th:"th",tbody:"tbody",td:"td"},(0,r.useMDXComponents)(),e.components);return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsxs)(n.h1,{id:"conventional-route",children:["Conventional Route",(0,o.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#conventional-route",children:"#"})]}),"\n",(0,o.jsxs)(n.h2,{id:"what-is-it?",children:["What is it?",(0,o.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#what-is-it?",children:"#"})]}),"\n",(0,o.jsx)(n.p,{children:"Modern.js Doc uses file system routing, and the file path of the page is simply mapped to the routing path, which makes the routing of the entire project very intuitive."}),"\n",(0,o.jsxs)(n.p,{children:["For example, if there is a file named ",(0,o.jsx)(n.code,{children:"foo.md"})," in the ",(0,o.jsx)(n.code,{children:"docs"})," directory, the routing path for that file will be ",(0,o.jsx)(n.code,{children:"/foo"}),"."]}),"\n",(0,o.jsxs)(n.h2,{id:"mapping-rules",children:["Mapping Rules",(0,o.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#mapping-rules",children:"#"})]}),"\n",(0,o.jsx)(n.p,{children:"Modern.js Doc automatically scans the root directory and all subdirectories, and maps file paths to route paths. For example, if you have the following file structure:"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-bash",children:"docs\n├── foo\n│   └── bar.md\n└── foo.md\n"})}),"\n",(0,o.jsxs)(n.p,{children:["Then ",(0,o.jsx)(n.code,{children:"bar.md"})," will be routed to ",(0,o.jsx)(n.code,{children:"/foo/bar"}),", and ",(0,o.jsx)(n.code,{children:"foo.md"})," will be routed to ",(0,o.jsx)(n.code,{children:"/foo"}),"."]}),"\n",(0,o.jsx)(n.p,{children:"The specific mapping rules are as follows:"}),"\n",(0,o.jsxs)(n.table,{children:["\n",(0,o.jsxs)(n.thead,{children:["\n",(0,o.jsxs)(n.tr,{children:["\n",(0,o.jsx)(n.th,{children:"file path"}),"\n",(0,o.jsx)(n.th,{children:"route path"}),"\n"]}),"\n"]}),"\n",(0,o.jsxs)(n.tbody,{children:["\n",(0,o.jsxs)(n.tr,{children:["\n",(0,o.jsx)(n.td,{children:(0,o.jsx)(n.code,{children:"index.md"})}),"\n",(0,o.jsx)(n.td,{children:(0,o.jsx)(n.code,{children:"/"})}),"\n"]}),"\n",(0,o.jsxs)(n.tr,{children:["\n",(0,o.jsx)(n.td,{children:(0,o.jsx)(n.code,{children:"/foo.md"})}),"\n",(0,o.jsx)(n.td,{children:(0,o.jsx)(n.code,{children:"/foo"})}),"\n"]}),"\n",(0,o.jsxs)(n.tr,{children:["\n",(0,o.jsx)(n.td,{children:(0,o.jsx)(n.code,{children:"/foo/bar.md"})}),"\n",(0,o.jsx)(n.td,{children:(0,o.jsx)(n.code,{children:"/foo/bar"})}),"\n"]}),"\n",(0,o.jsxs)(n.tr,{children:["\n",(0,o.jsx)(n.td,{children:(0,o.jsx)(n.code,{children:"/zoo/index.md"})}),"\n",(0,o.jsx)(n.td,{children:(0,o.jsx)(n.code,{children:"/zoo"})}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,o.jsxs)(n.h2,{id:"custom-behavior",children:["Custom Behavior",(0,o.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#custom-behavior",children:"#"})]}),"\n",(0,o.jsxs)(n.p,{children:["If you want to customize the routing behavior, you can use the ",(0,o.jsx)(n.code,{children:"route"})," field in the configuration file. For example:"]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-ts",meta:'title="modern.config.ts"',children:"import { defineConfig } from '@modern-js/doc-tools';\n\nexport default defineConfig({\n  route: {\n    // These files will be excluded from the routing (support glob pattern)\n    exclude: ['custom.tsx', 'component/**/*']\n    // These files will be included in the routing (support glob pattern)\n    include: ['other-dir/**/*'],\n  }\n});\n"})}),"\n",(0,o.jsxs)(n.h2,{id:"best-practices",children:["Best Practices",(0,o.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#best-practices",children:"#"})]}),"\n",(0,o.jsxs)(n.p,{children:["We recommend that you place documentation files in the ",(0,o.jsx)(n.code,{children:"docs"})," directory to make your project more clear. For non-documentation content, such as custom components, util functions, etc., they can be maintained outside the ",(0,o.jsx)(n.code,{children:"docs"})," directory. For example:"]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-bash",children:"docs\n└── foo.mdx\nsrc\n├── components\n│   └── CustomComponent.tsx\n└── utils\n    └── utils.ts\n"})})]})}var h=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=Object.assign({},(0,r.useMDXComponents)(),e.components).wrapper;return n?(0,o.jsx)(n,Object.assign({},e,{children:(0,o.jsx)(c,e)})):c(e)}}}]);