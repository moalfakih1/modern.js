(self.webpackChunk_modern_js_main_doc=self.webpackChunk_modern_js_main_doc||[]).push([["docs_zh_configure_app_tools_esbuild_mdx"],{55179:function(e,n,s){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),Object.defineProperty(n,"default",{enumerable:!0,get:function(){return t}});var r=s("9880"),i=s("23169");function d(e){var n=Object.assign({p:"p",a:"a",strong:"strong"},(0,i.useMDXComponents)(),e.components);return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.a,{href:"https://esbuild.github.io/",target:"_blank",rel:"noopener noreferrer",children:"esbuild"})," 是一款基于 Golang 开发的前端构建工具，具有打包、编译和压缩 JavaScript 代码的功能，相比传统的打包编译工具，esbuild 在性能上有显著提升。在代码压缩方面，相比 webpack 内置的 terser 压缩器，esbuild 在性能上有数十倍的提升。"]}),"\n",(0,r.jsxs)(n.p,{children:["Modern.js Builder 提供了 esbuild 插件，让你能使用 esbuild 代替 babel-loader、ts-loader 和 terser 等库进行代码编译和压缩。在大型工程中启用 esbuild 后，",(0,r.jsx)(n.strong,{children:"可以大幅度减少代码编译和压缩所需的时间，同时有效避免 OOM (heap out of memory) 问题"}),"。"]})]})}var t=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=Object.assign({},(0,i.useMDXComponents)(),e.components).wrapper;return n?(0,r.jsx)(n,Object.assign({},e,{children:(0,r.jsx)(d,e)})):d(e)}},88259:function(e,n,s){"use strict";Object.defineProperty(n,"__esModule",{value:!0});!function(e,n){for(var s in n)Object.defineProperty(e,s,{enumerable:!0,get:n[s]})}(n,{frontmatter:function(){return t},title:function(){return l},toc:function(){return o},default:function(){return a}});var r=s("9880"),i=s("23169"),d=s.ir(s("55179")),t={sidebar_label:"esbuild"},l="tools.esbuild",o=[{text:"介绍",depth:2,id:"介绍"},{text:"配置项",depth:2,id:"配置项"}];function c(e){var n=Object.assign({h1:"h1",a:"a",ul:"ul",li:"li",strong:"strong",code:"code",h2:"h2",div:"div",p:"p",pre:"pre"},(0,i.useMDXComponents)(),e.components);return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(n.h1,{id:"toolsesbuild",children:["tools.esbuild",(0,r.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#toolsesbuild",children:"#"})]}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"类型："})," ",(0,r.jsx)(n.code,{children:"Object"})]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"默认值："})," ",(0,r.jsx)(n.code,{children:"undefined"})]}),"\n"]}),"\n",(0,r.jsxs)(n.h2,{id:"介绍",children:["介绍",(0,r.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#介绍",children:"#"})]}),"\n","\n",(0,r.jsx)(d.default,{}),"\n",(0,r.jsxs)(n.div,{className:"modern-directive tip",children:[(0,r.jsx)(n.div,{className:"modern-directive-title",children:"推荐使用 SWC"}),(0,r.jsxs)(n.div,{className:"modern-directive-content",children:[(0,r.jsx)(n.p,{children:"相较于 esbuild，我们更推荐使用 SWC 来编译和压缩代码，因为 SWC 支持更多的语法特性、拥有更好的代码压缩率，并且产物具备更好的兼容性。"}),"\n",(0,r.jsxs)(n.p,{children:["因此，我们建议你使用 SWC 而不是 esbuild，用法请参考 ",(0,r.jsx)(n.a,{href:"/configure/app/tools/swc",children:"tools.swc"}),"。"]}),"\n"]})]}),"\n",(0,r.jsxs)(n.h2,{id:"配置项",children:["配置项",(0,r.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#配置项",children:"#"})]}),"\n",(0,r.jsxs)(n.p,{children:["你可以通过 ",(0,r.jsx)(n.code,{children:"tools.esbuild"})," 配置项来设置 esbuild 编译行为。"]}),"\n",(0,r.jsxs)(n.div,{className:"language-",children:[(0,r.jsx)(n.div,{className:"modern-code-title",children:"modern.config.ts"}),(0,r.jsx)(n.div,{className:"modern-code-content",children:(0,r.jsx)(n.pre,{className:"code",children:(0,r.jsx)(n.code,{className:"language-js",meta:'title="modern.config.ts"',children:"import { defineConfig } from '@modern-js/app-tools';\n\nexport default defineConfig({\n  tools: {\n    esbuild: {\n      loader: {\n        target: 'chrome61',\n      },\n      minimize: {\n        target: 'chrome61',\n      },\n    },\n  },\n});\n"})})})]}),"\n",(0,r.jsxs)(n.p,{children:["完整配置项请参考 ",(0,r.jsx)(n.a,{href:"https://modernjs.dev/builder/plugins/plugin-esbuild.html#%E9%85%8D%E7%BD%AE",target:"_blank",rel:"noopener noreferrer",children:"Modern.js Builder - esbuild 插件配置"}),"。"]})]})}var a=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=Object.assign({},(0,i.useMDXComponents)(),e.components).wrapper;return n?(0,r.jsx)(n,Object.assign({},e,{children:(0,r.jsx)(c,e)})):c(e)}}}]);