(self.webpackChunk_modern_js_doc_tools_doc=self.webpackChunk_modern_js_doc_tools_doc||[]).push([["docs_en_guide_start_getting-started_mdx"],{26548:function(e,n,r){"use strict";Object.defineProperty(n,"__esModule",{value:!0});!function(e,n){for(var r in n)Object.defineProperty(e,r,{enumerable:!0,get:n[r]})}(n,{frontmatter:function(){return t},title:function(){return c},toc:function(){return o},default:function(){return l}});var i=r("9880"),d=r("23169"),a=r("27385"),t={},c="Quick Start",o=[{text:"1. Initialize the project",depth:2,id:"1-initialize-the-project"},{text:"Method 1: Create via CLI",depth:3,id:"method-1:-create-via-cli"},{text:"Method 2: Manual Creation",depth:3,id:"method-2:-manual-creation"},{text:"2. Start Dev Server",depth:2,id:"2-start-dev-server"},{text:"3. Build in Production",depth:2,id:"3-build-in-production"},{text:"4. Preview in local environment",depth:2,id:"4-preview-in-local-environment"}];function s(e){var n=Object.assign({h1:"h1",a:"a",h2:"h2",h3:"h3",p:"p",pre:"pre",code:"code"},(0,d.useMDXComponents)(),e.components);return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsxs)(n.h1,{id:"quick-start",children:["Quick Start",(0,i.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#quick-start",children:"#"})]}),"\n",(0,i.jsxs)(n.h2,{id:"1-initialize-the-project",children:["1. Initialize the project",(0,i.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#1-initialize-the-project",children:"#"})]}),"\n",(0,i.jsxs)(n.h3,{id:"method-1:-create-via-cli",children:["Method 1: Create via CLI",(0,i.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#method-1:-create-via-cli",children:"#"})]}),"\n",(0,i.jsx)(n.p,{children:"You can create a Modern.js Doc project using the Modern.js scaffold command:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",children:"# `modern-doc-app` is the project name\nnpx @modern-js/create@latest modern-doc-app\n"})}),"\n",(0,i.jsxs)(n.p,{children:["Select ",(0,i.jsx)(n.code,{children:"Doc Site"})," type and then select the package manager to complete the project creation."]}),"\n",(0,i.jsxs)(n.h3,{id:"method-2:-manual-creation",children:["Method 2: Manual Creation",(0,i.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#method-2:-manual-creation",children:"#"})]}),"\n",(0,i.jsx)(n.p,{children:"First, you can create a new directory with the following command:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",children:"mkdir modern-doc-app && cd modern-doc-app\n"})}),"\n",(0,i.jsxs)(n.p,{children:["Execute ",(0,i.jsx)(n.code,{children:"npm init -y"})," to initialize a project. You can install Modern.js Doc using npm, yarn or pnpm:"]}),"\n","\n",(0,i.jsxs)(a.Tabs,{values:[{label:"npm"},{label:"yarn"},{label:"pnpm"}],children:[(0,i.jsx)(a.Tab,{children:(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-sh",children:"npm install @modern-js/doc-tools typescript -D\n"})})}),(0,i.jsx)(a.Tab,{children:(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-sh",children:"yarn add @modern-js/doc-tools typescript -D\n"})})}),(0,i.jsx)(a.Tab,{children:(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-sh",children:"pnpm install @modern-js/doc-tools typescript -D\n"})})})]}),"\n",(0,i.jsx)(n.p,{children:"Then create the file with the following command"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",children:"mkdir docs && echo '# Hello World' > docs/index.md\n"})}),"\n",(0,i.jsxs)(n.p,{children:["Add the following script to ",(0,i.jsx)(n.code,{children:"package.json"}),":"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-json",children:'{\n  "scripts": {\n    "dev": "modern dev",\n    "build": "modern build",\n    "preview": "modern preview"\n  }\n}\n'})}),"\n",(0,i.jsxs)(n.p,{children:["Then initialize a configuration file ",(0,i.jsx)(n.code,{children:"modern.config.ts"}),":"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-ts",meta:'title="modern.config.ts"',children:"import docTools, { defineConfig } from '@modern-js/doc-tools';\nimport path from 'path';\n\nexport default defineConfig({\n  doc: {\n    root: path.join(__dirname, 'docs'),\n  },\n  plugins: [docTools()],\n});\n"})}),"\n",(0,i.jsxs)(n.p,{children:["And then create ",(0,i.jsx)(n.code,{children:"tsconfig.json"}),", add the following config:"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-ts",children:'{\n  "compilerOptions": {\n    "esModuleInterop": true,\n    "jsx": "react-jsx"\n  }\n}\n'})}),"\n",(0,i.jsxs)(n.h2,{id:"2-start-dev-server",children:["2. Start Dev Server",(0,i.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#2-start-dev-server",children:"#"})]}),"\n",(0,i.jsx)(n.p,{children:"Start the local development service with the following command:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",children:"npm run dev\n"})}),"\n",(0,i.jsxs)(n.h2,{id:"3-build-in-production",children:["3. Build in Production",(0,i.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#3-build-in-production",children:"#"})]}),"\n",(0,i.jsx)(n.p,{children:"Build the production bundle with the following command\n:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",children:"npm run build\n"})}),"\n",(0,i.jsxs)(n.p,{children:["By default, Modern.js Doc will set ",(0,i.jsx)(n.code,{children:"doc_build"})," as the output directory."]}),"\n",(0,i.jsxs)(n.h2,{id:"4-preview-in-local-environment",children:["4. Preview in local environment",(0,i.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#4-preview-in-local-environment",children:"#"})]}),"\n",(0,i.jsx)(n.p,{children:"Start the local preview service with the following command:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",children:"npm run preview\n"})})]})}var l=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=Object.assign({},(0,d.useMDXComponents)(),e.components).wrapper;return n?(0,i.jsx)(n,Object.assign({},e,{children:(0,i.jsx)(s,e)})):s(e)}}}]);