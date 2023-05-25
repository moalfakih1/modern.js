(self.webpackChunk_modern_js_main_doc=self.webpackChunk_modern_js_main_doc||[]).push([["docs_zh_guides_topic-detail_generator_codesmith_api_npm_mdx"],{9431:function(n,e,r){"use strict";Object.defineProperty(e,"__esModule",{value:!0});!function(n,e){for(var r in e)Object.defineProperty(n,r,{enumerable:!0,get:e[r]})}(e,{frontmatter:function(){return a},title:function(){return t},toc:function(){return d},default:function(){return c}});var i=r("9880"),s=r("23169"),a={sidebar_position:7},t="@modern-js/codesmith-api-npm",d=[{text:"使用姿势",depth:2,id:"使用姿势"},{text:"API",depth:2,id:"api"},{text:"npmInstall",depth:3,id:"npminstall"},{text:"yarnInstall",depth:3,id:"yarninstall"},{text:"pnpmInstall",depth:3,id:"pnpminstall"}];function l(n){var e=Object.assign({h1:"h1",a:"a",p:"p",h2:"h2",pre:"pre",code:"code",ul:"ul",li:"li",h3:"h3"},(0,s.useMDXComponents)(),n.components);return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsxs)(e.h1,{id:"@modern-js/codesmith-api-npm",children:["@modern-js/codesmith-api-npm",(0,i.jsx)(e.a,{className:"header-anchor","aria-hidden":"true",href:"#@modern-js/codesmith-api-npm",children:"#"})]}),"\n",(0,i.jsx)(e.p,{children:"微生成器中 NPM API 封装，提供常见的 NPM 不同包管理工具安装依赖的方法。"}),"\n",(0,i.jsxs)(e.h2,{id:"使用姿势",children:["使用姿势",(0,i.jsx)(e.a,{className:"header-anchor","aria-hidden":"true",href:"#使用姿势",children:"#"})]}),"\n",(0,i.jsx)(e.pre,{children:(0,i.jsx)(e.code,{className:"language-ts",children:"import { NpmAPI } from '@modern-js/codesmith-api-npm';\n\nexport default async (context: GeneratorContext, generator: GeneratorCore) => {\n  const npmApi = new NpmAPI(generator);\n  await npmApi.pnpmInstall();\n};\n"})}),"\n",(0,i.jsxs)(e.ul,{children:["\n",(0,i.jsx)(e.li,{children:"创建 NpmAPI 实例，参数为微生成器函数参数的 generator，具体介绍请看微生成器项目组成 。"}),"\n",(0,i.jsx)(e.li,{children:"调用其实例上 API 即可。"}),"\n"]}),"\n",(0,i.jsxs)(e.h2,{id:"api",children:["API",(0,i.jsx)(e.a,{className:"header-anchor","aria-hidden":"true",href:"#api",children:"#"})]}),"\n",(0,i.jsxs)(e.h3,{id:"npminstall",children:["npmInstall",(0,i.jsx)(e.a,{className:"header-anchor","aria-hidden":"true",href:"#npminstall",children:"#"})]}),"\n",(0,i.jsx)(e.p,{children:"使用 npm 安装依赖。"}),"\n",(0,i.jsx)(e.p,{children:"参数："}),"\n",(0,i.jsxs)(e.ul,{children:["\n",(0,i.jsxs)(e.li,{children:["cwd?: ",(0,i.jsx)(e.code,{children:"string"})," install 命令的执行目录，默认为微生成器 ",(0,i.jsx)(e.code,{children:"outputPath"}),"。"]}),"\n"]}),"\n",(0,i.jsxs)(e.h3,{id:"yarninstall",children:["yarnInstall",(0,i.jsx)(e.a,{className:"header-anchor","aria-hidden":"true",href:"#yarninstall",children:"#"})]}),"\n",(0,i.jsx)(e.p,{children:"使用 yarn 安装依赖。"}),"\n",(0,i.jsx)(e.p,{children:"参数："}),"\n",(0,i.jsxs)(e.ul,{children:["\n",(0,i.jsxs)(e.li,{children:["cwd?: ",(0,i.jsx)(e.code,{children:"string"})," install 命令的执行目录，默认为微生成器 ",(0,i.jsx)(e.code,{children:"outputPath"}),"。"]}),"\n"]}),"\n",(0,i.jsxs)(e.h3,{id:"pnpminstall",children:["pnpmInstall",(0,i.jsx)(e.a,{className:"header-anchor","aria-hidden":"true",href:"#pnpminstall",children:"#"})]}),"\n",(0,i.jsx)(e.p,{children:"使用 pnpm 安装依赖。"}),"\n",(0,i.jsx)(e.p,{children:"参数："}),"\n",(0,i.jsxs)(e.ul,{children:["\n",(0,i.jsxs)(e.li,{children:["cwd?: ",(0,i.jsx)(e.code,{children:"string"})," install 命令的执行目录，默认为微生成器 ",(0,i.jsx)(e.code,{children:"outputPath"}),"。"]}),"\n"]})]})}var c=function(){var n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},e=Object.assign({},(0,s.useMDXComponents)(),n.components).wrapper;return e?(0,i.jsx)(e,Object.assign({},n,{children:(0,i.jsx)(l,n)})):l(n)}}}]);