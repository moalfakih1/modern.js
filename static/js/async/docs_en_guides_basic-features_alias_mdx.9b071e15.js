(self.webpackChunkwebpack=self.webpackChunkwebpack||[]).push([["docs_en_guides_basic-features_alias_mdx"],{85785:function(e,s,n){"use strict";Object.defineProperty(s,"__esModule",{value:!0});!function(e,s){for(var n in s)Object.defineProperty(e,n,{enumerable:!0,get:s[n]})}(s,{frontmatter:function(){return o},title:function(){return i},toc:function(){return r},default:function(){return d}});var c=n("12151"),a=n("21447");let o={title:"Alias",sidebar_position:8},i="Alias",r=[];function l(e){let s=Object.assign({h1:"h1",a:"a",p:"p",div:"div",button:"button",pre:"pre",code:"code"},(0,a.useMDXComponents)(),e.components);return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsxs)(s.h1,{id:"alias",children:["Alias",(0,c.jsx)(s.a,{className:"header-anchor","aria-hidden":"true",href:"#alias",children:"#"})]}),"\n",(0,c.jsx)(s.p,{children:"Modern.js allow aliases in JS and CSS，and the following aliases are built in:"}),"\n",(0,c.jsx)(s.div,{className:"language-",children:(0,c.jsxs)(s.div,{className:"modern-code-content",children:[(0,c.jsx)(s.button,{className:"copy"}),(0,c.jsx)(s.pre,{className:"code",children:(0,c.jsx)(s.code,{className:"language-js",children:"{\n  '@': '<appDirectory>/src',\n  '@shared': '<appDirectory>/shared',\n}\n"})})]})}),"\n",(0,c.jsxs)(s.div,{className:"modern-directive info",children:[(0,c.jsx)(s.p,{className:"modern-directive-title",children:"INFO"}),(0,c.jsxs)(s.div,{className:"modern-directive-content",children:["When the optional features is enable, the generator will also add built-in aliases dynamically. For example, when BFF is enabled, the ",(0,c.jsx)(s.code,{children:"@api"})," alias will be added by default.","\n"]})]}),"\n",(0,c.jsxs)(s.p,{children:["For example, import the modules from the ",(0,c.jsx)(s.code,{children:"src/common/"})," directory in the ",(0,c.jsx)(s.code,{children:"src/App.tsx"})," file:"]}),"\n",(0,c.jsx)(s.div,{className:"language-",children:(0,c.jsxs)(s.div,{className:"modern-code-content",children:[(0,c.jsx)(s.button,{className:"copy"}),(0,c.jsx)(s.pre,{className:"code",children:(0,c.jsx)(s.code,{className:"language-bash",children:".\n├── common\n│   ├── styles\n│   │   └── base.css\n│   └── utils\n│       └── index.ts\n├── App.tsx\n"})})]})}),"\n",(0,c.jsxs)(s.p,{children:["the code in ",(0,c.jsx)(s.code,{children:"src/App.tsx"}),":"]}),"\n",(0,c.jsx)(s.div,{className:"language-",children:(0,c.jsxs)(s.div,{className:"modern-code-content",children:[(0,c.jsx)(s.button,{className:"copy"}),(0,c.jsx)(s.pre,{className:"code",children:(0,c.jsx)(s.code,{className:"language-ts",children:"import utils from '@/src/common/utils';\nimport '@/src/common/styles/base.css';\n"})})]})}),"\n",(0,c.jsxs)(s.p,{children:["Modern.js also provides a way to config aliases. Adding the ",(0,c.jsx)(s.code,{children:"@common"})," alias as an example. For TypeScript projects, you only need to configure ",(0,c.jsx)(s.code,{children:"compilerOptions.paths"})," under the project root directory ",(0,c.jsx)(s.code,{children:"tsconfig.json"})," as follows:"]}),"\n",(0,c.jsx)(s.div,{className:"language-",children:(0,c.jsxs)(s.div,{className:"modern-code-content",children:[(0,c.jsx)(s.button,{className:"copy"}),(0,c.jsx)(s.pre,{className:"code",children:(0,c.jsx)(s.code,{className:"language-json",children:'{\n  "compilerOptions": {\n    "paths": {\n      "@/*": ["./src/*"],\n      "@/common/*": ["./src/common/*"]\n    }\n  }\n}\n'})})]})}),"\n",(0,c.jsxs)(s.p,{children:["JavaScript project can config by ",(0,c.jsx)(s.a,{href:"/en/configure/app/source/alias",children:(0,c.jsx)(s.code,{children:"source.alias"})})," in ",(0,c.jsx)(s.code,{children:"modern.config.js"}),":"]}),"\n",(0,c.jsxs)(s.div,{className:"language-",children:[(0,c.jsx)(s.div,{className:"modern-code-title",children:"modern.config.ts"}),(0,c.jsxs)(s.div,{className:"modern-code-content",children:[(0,c.jsx)(s.button,{className:"copy"}),(0,c.jsx)(s.pre,{className:"code",children:(0,c.jsx)(s.code,{className:"language-ts",meta:'title="modern.config.ts"',children:"export default defineConfig({\n  source: {\n    alias: {\n      '@common': './src/common',\n    },\n  },\n});\n"})})]})]}),"\n",(0,c.jsxs)(s.p,{children:["For detailed usage, please refer to ",(0,c.jsx)(s.a,{href:"/en/configure/app/source/alias",children:"source.alias documentation"}),"."]})]})}var d=function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},{wrapper:s}=Object.assign({},(0,a.useMDXComponents)(),e.components);return s?(0,c.jsx)(s,Object.assign({},e,{children:(0,c.jsx)(l,e)})):l(e)}}}]);