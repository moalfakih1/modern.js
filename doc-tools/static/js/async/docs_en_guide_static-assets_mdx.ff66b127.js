(self.webpackChunk_modern_js_doc_tools_doc=self.webpackChunk_modern_js_doc_tools_doc||[]).push([["docs_en_guide_static-assets_mdx"],{13227:function(e,s,n){"use strict";Object.defineProperty(s,"__esModule",{value:!0});!function(e,s){for(var n in s)Object.defineProperty(e,n,{enumerable:!0,get:s[n]})}(s,{frontmatter:function(){return a},toc:function(){return o},title:function(){return i},default:function(){return t}});var c=n("9880"),d=n("23169"),a=void 0,o=[],i="Static Assets";function r(e){var s=Object.assign({h1:"h1",a:"a",p:"p",code:"code",div:"div",pre:"pre"},(0,d.useMDXComponents)(),e.components);return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsxs)(s.h1,{id:"static-assets",children:[(0,c.jsx)(s.a,{className:"header-anchor","aria-hidden":"true",href:"#static-assets",children:"#"}),"Static Assets"]}),"\n",(0,c.jsxs)(s.p,{children:["You can import static assets in ",(0,c.jsx)(s.code,{children:"markdown"})," (or ",(0,c.jsx)(s.code,{children:"mdx"}),") files. Both relative and absolute paths are supported. For example, if you have an image in the same directory as markdown, you can reference it like this:"]}),"\n",(0,c.jsxs)(s.div,{className:"language-mdx",children:[(0,c.jsx)(s.div,{className:""}),(0,c.jsx)(s.div,{className:"modern-code-content",children:(0,c.jsx)(s.pre,{className:"code",children:(0,c.jsx)(s.code,{className:"language-mdx",children:"![](./demo.png)\n"})})})]}),"\n",(0,c.jsxs)(s.p,{children:["Of course, you can also directly use the img tag in ",(0,c.jsx)(s.code,{children:".mdx"})," files:"]}),"\n",(0,c.jsxs)(s.div,{className:"language-mdx",children:[(0,c.jsx)(s.div,{className:""}),(0,c.jsx)(s.div,{className:"modern-code-content",children:(0,c.jsx)(s.pre,{className:"code",children:(0,c.jsx)(s.code,{className:"language-mdx",children:'<img src="./demo.png" />\n'})})})]}),"\n",(0,c.jsxs)(s.p,{children:["Modern.js Doc will automatically find the image and respond to the browser according to the ",(0,c.jsx)(s.code,{children:".mdx"})," file path and image path."]}),"\n",(0,c.jsxs)(s.p,{children:["On the other hand, static resources can also be imported using absolute paths. In this way, Modern.js Doc will look for resources in the ",(0,c.jsx)(s.code,{children:"public"})," folder under the root directory of the project, which is the directory specified by the ",(0,c.jsx)(s.code,{children:"doc.root"})," field in ",(0,c.jsx)(s.code,{children:"modern.config.ts"}),"."]}),"\n",(0,c.jsxs)(s.div,{className:"language-ts",children:[(0,c.jsx)(s.div,{className:"modern-code-title",children:"modern.config.ts"}),(0,c.jsx)(s.div,{className:"modern-code-content",children:(0,c.jsx)(s.pre,{className:"code",children:(0,c.jsx)(s.code,{className:"language-ts",children:"import { defineConfig } from '@modern-js/doc-tools';\nimport path from 'path';\nexport default defineConfig({\n  doc: {\n    root: path.join(__dirname, 'docs'),\n  },\n});\n"})})})]}),"\n",(0,c.jsxs)(s.p,{children:["For example, if the root directory is ",(0,c.jsx)(s.code,{children:"docs"})," and the directory structure is as follows:"]}),"\n",(0,c.jsxs)(s.div,{className:"language-bash",children:[(0,c.jsx)(s.div,{className:""}),(0,c.jsx)(s.div,{className:"modern-code-content",children:(0,c.jsx)(s.pre,{className:"code",children:(0,c.jsx)(s.code,{className:"language-bash",children:"docs\n├── public\n│   └── demo.png\n├── index.mdx\n"})})})]}),"\n",(0,c.jsxs)(s.p,{children:["In the ",(0,c.jsx)(s.code,{children:"index.mdx"})," file above, you can reference ",(0,c.jsx)(s.code,{children:"demo.png"})," like this:"]}),"\n",(0,c.jsxs)(s.div,{className:"language-mdx",children:[(0,c.jsx)(s.div,{className:""}),(0,c.jsx)(s.div,{className:"modern-code-content",children:(0,c.jsx)(s.pre,{className:"code",children:(0,c.jsx)(s.code,{className:"language-mdx",children:"![](./public/demo.png)\n"})})})]}),"\n",(0,c.jsx)(s.p,{children:"Or refer to it with an absolute path:"}),"\n",(0,c.jsxs)(s.div,{className:"language-mdx",children:[(0,c.jsx)(s.div,{className:""}),(0,c.jsx)(s.div,{className:"modern-code-content",children:(0,c.jsx)(s.pre,{className:"code",children:(0,c.jsx)(s.code,{className:"language-mdx",children:"![](/demo.png)\n"})})})]})]})}var t=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},s=Object.assign({},(0,d.useMDXComponents)(),e.components).wrapper;return s?(0,c.jsx)(s,Object.assign({},e,{children:(0,c.jsx)(r,e)})):r(e)}}}]);