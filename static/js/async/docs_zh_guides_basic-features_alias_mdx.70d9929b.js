(self.webpackChunk_modern_js_main_doc=self.webpackChunk_modern_js_main_doc||[]).push([["docs_zh_guides_basic-features_alias_mdx"],{87166:function(e,n,s){"use strict";Object.defineProperty(n,"__esModule",{value:!0});!function(e,n){for(var s in n)Object.defineProperty(e,s,{enumerable:!0,get:n[s]})}(n,{frontmatter:function(){return i},title:function(){return o},toc:function(){return d},default:function(){return t}});var c=s("9880"),r=s("23169"),i={title:"别名",sidebar_position:8},o="别名",d=[];function a(e){var n=Object.assign({h1:"h1",a:"a",p:"p",pre:"pre",code:"code",div:"div"},(0,r.useMDXComponents)(),e.components);return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsxs)(n.h1,{id:"别名",children:["别名",(0,c.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#别名",children:"#"})]}),"\n",(0,c.jsx)(n.p,{children:"Modern.js 允许在 JS 和 CSS 中使用别名导入自定义目录下的模块，并内置了以下别名:"}),"\n",(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:"language-js",children:"{\n  '@': '<appDirectory>/src',\n  '@shared': '<appDirectory>/shared',\n}\n"})}),"\n",(0,c.jsxs)(n.div,{className:"modern-directive info",children:[(0,c.jsx)(n.div,{className:"modern-directive-title",children:"INFO"}),(0,c.jsxs)(n.div,{className:"modern-directive-content",children:[(0,c.jsxs)(n.p,{children:["在开启可选功能时，生成器也会动态的添加内置别名，例如启用 BFF 时默认会添加 ",(0,c.jsx)(n.code,{children:"@api"})," 别名。"]}),"\n"]})]}),"\n",(0,c.jsxs)(n.p,{children:["例如从 ",(0,c.jsx)(n.code,{children:"src/App.tsx"})," 文件中导入 ",(0,c.jsx)(n.code,{children:"src/common"})," 目录下的模块："]}),"\n",(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:"language-bash",children:".\n├── common\n│   ├── styles\n│   │   └── base.css\n│   └── utils\n│       └── index.ts\n├── App.tsx\n"})}),"\n",(0,c.jsxs)(n.p,{children:[(0,c.jsx)(n.code,{children:"src/App.tsx"})," 中写法如下："]}),"\n",(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:"language-ts",children:"import utils from '@/src/common/utils';\nimport '@/src/common/styles/base.css';\n"})}),"\n",(0,c.jsxs)(n.p,{children:["Modern.js 也提供了自定义别名的方式，以添加 ",(0,c.jsx)(n.code,{children:"@common"})," 别名为例，对于 TypeScript 项目，只需要在项目根目录 ",(0,c.jsx)(n.code,{children:"tsconfig.json"})," 下配置 ",(0,c.jsx)(n.code,{children:"compilerOptions.paths"})," 如下："]}),"\n",(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:"language-json",children:'{\n  "compilerOptions": {\n    "paths": {\n      "@/*": ["./src/*"],\n      "@/common/*": ["./src/common/*"]\n    }\n  }\n}\n'})}),"\n",(0,c.jsxs)(n.p,{children:["JavaScript 项目可以在 ",(0,c.jsx)(n.code,{children:"modern.config.js"})," 中配置 ",(0,c.jsx)(n.a,{href:"/configure/app/source/alias",children:(0,c.jsx)(n.code,{children:"source.alias"})}),"："]}),"\n",(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:"language-ts",meta:'title="modern.config.ts"',children:"export default defineConfig({\n  source: {\n    alias: {\n      '@common': './src/common',\n    },\n  },\n});\n"})}),"\n",(0,c.jsxs)(n.p,{children:["对于别名配置的具体用法，请参考 ",(0,c.jsx)(n.a,{href:"/configure/app/source/alias",children:"source.alias 文档"}),"。"]})]})}var t=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=Object.assign({},(0,r.useMDXComponents)(),e.components).wrapper;return n?(0,c.jsx)(n,Object.assign({},e,{children:(0,c.jsx)(a,e)})):a(e)}}}]);