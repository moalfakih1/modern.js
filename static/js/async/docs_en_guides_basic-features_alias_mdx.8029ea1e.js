(self.webpackChunk_modern_js_main_doc=self.webpackChunk_modern_js_main_doc||[]).push([["docs_en_guides_basic-features_alias_mdx"],{65912:function(e,n,s){"use strict";Object.defineProperty(n,"__esModule",{value:!0});!function(e,n){for(var s in n)Object.defineProperty(e,s,{enumerable:!0,get:n[s]})}(n,{frontmatter:function(){return c},title:function(){return a},toc:function(){return o},default:function(){return d}});var r=s("9880"),i=s("23169"),c={title:"Alias",sidebar_position:8},a="Alias",o=[];function l(e){var n=Object.assign({h1:"h1",a:"a",p:"p",pre:"pre",code:"code",div:"div"},(0,i.useMDXComponents)(),e.components);return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(n.h1,{id:"alias",children:["Alias",(0,r.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#alias",children:"#"})]}),"\n",(0,r.jsx)(n.p,{children:"Modern.js allow aliases in JS and CSS, and the following aliases are built in:"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-js",children:"{\n  '@': '<appDirectory>/src',\n  '@shared': '<appDirectory>/shared',\n}\n"})}),"\n",(0,r.jsxs)(n.div,{className:"modern-directive info",children:[(0,r.jsx)(n.div,{className:"modern-directive-title",children:"INFO"}),(0,r.jsxs)(n.div,{className:"modern-directive-content",children:[(0,r.jsxs)(n.p,{children:["When the optional features is enable, the generator will also add built-in aliases dynamically. For example, when BFF is enabled, the ",(0,r.jsx)(n.code,{children:"@api"})," alias will be added by default."]}),"\n"]})]}),"\n",(0,r.jsxs)(n.p,{children:["For example, import the modules from the ",(0,r.jsx)(n.code,{children:"src/common/"})," directory in the ",(0,r.jsx)(n.code,{children:"src/App.tsx"})," file:"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:".\n├── common\n│   ├── styles\n│   │   └── base.css\n│   └── utils\n│       └── index.ts\n├── App.tsx\n"})}),"\n",(0,r.jsxs)(n.p,{children:["the code in ",(0,r.jsx)(n.code,{children:"src/App.tsx"}),":"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-ts",children:"import utils from '@/src/common/utils';\nimport '@/src/common/styles/base.css';\n"})}),"\n",(0,r.jsxs)(n.p,{children:["Modern.js also provides a way to config aliases. Adding the ",(0,r.jsx)(n.code,{children:"@common"})," alias as an example. For TypeScript projects, you only need to configure ",(0,r.jsx)(n.code,{children:"compilerOptions.paths"})," under the project root directory ",(0,r.jsx)(n.code,{children:"tsconfig.json"})," as follows:"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-json",children:'{\n  "compilerOptions": {\n    "paths": {\n      "@/*": ["./src/*"],\n      "@/common/*": ["./src/common/*"]\n    }\n  }\n}\n'})}),"\n",(0,r.jsxs)(n.p,{children:["JavaScript project can config by ",(0,r.jsx)(n.a,{href:"/configure/app/source/alias",children:(0,r.jsx)(n.code,{children:"source.alias"})})," in ",(0,r.jsx)(n.code,{children:"modern.config.js"}),":"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-ts",meta:'title="modern.config.ts"',children:"export default defineConfig({\n  source: {\n    alias: {\n      '@common': './src/common',\n    },\n  },\n});\n"})}),"\n",(0,r.jsxs)(n.p,{children:["For detailed usage, please refer to ",(0,r.jsx)(n.a,{href:"/configure/app/source/alias",children:"source.alias documentation"}),"."]})]})}var d=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=Object.assign({},(0,i.useMDXComponents)(),e.components).wrapper;return n?(0,r.jsx)(n,Object.assign({},e,{children:(0,r.jsx)(l,e)})):l(e)}}}]);