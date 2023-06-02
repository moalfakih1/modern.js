(self.webpackChunk_modern_js_main_doc=self.webpackChunk_modern_js_main_doc||[]).push([["docs_zh_configure_app_tools_swc_mdx"],{31361:function(e,n,s){"use strict";Object.defineProperty(n,"__esModule",{value:!0});!function(e,n){for(var s in n)Object.defineProperty(e,s,{enumerable:!0,get:n[s]})}(n,{frontmatter:function(){return c},title:function(){return o},toc:function(){return t},default:function(){return a}});var r=s("9880"),i=s("23169"),d=s.ir(s("10582")),c={sidebar_label:"swc"},o="tools.swc",t=[{text:"介绍",depth:2,id:"介绍"},{text:"安装",depth:2,id:"安装"},{text:"配置项",depth:2,id:"配置项"}];function l(e){var n=Object.assign({h1:"h1",a:"a",ul:"ul",li:"li",strong:"strong",code:"code",h2:"h2",div:"div",p:"p",pre:"pre"},(0,i.useMDXComponents)(),e.components);return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(n.h1,{id:"toolsswc",children:["tools.swc",(0,r.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#toolsswc",children:"#"})]}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"类型："})," ",(0,r.jsx)(n.code,{children:"Object"})]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"默认值："})," ",(0,r.jsx)(n.code,{children:"undefined"})]}),"\n"]}),"\n",(0,r.jsxs)(n.h2,{id:"介绍",children:["介绍",(0,r.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#介绍",children:"#"})]}),"\n","\n",(0,r.jsx)(d.default,{}),"\n",(0,r.jsxs)(n.div,{className:"modern-directive tip",children:[(0,r.jsx)(n.div,{className:"modern-directive-title",children:"TIP"}),(0,r.jsx)(n.div,{className:"modern-directive-content",children:(0,r.jsx)(n.p,{children:"在使用 Rspack 作为打包工具时，默认会使用 SWC 进行转译和压缩，因此你不需要再安装和配置 SWC 插件。"})})]}),"\n",(0,r.jsxs)(n.h2,{id:"安装",children:["安装",(0,r.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#安装",children:"#"})]}),"\n",(0,r.jsxs)(n.p,{children:["首先，你需要执行 ",(0,r.jsx)(n.code,{children:"pnpm run new"})," 启用 SWC 编译："]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:"? 请选择你想要的操作 启用可选功能\n? 请选择功能名称 启用「SWC 编译」\n"})}),"\n",(0,r.jsxs)(n.p,{children:["执行完成后，你只需在 ",(0,r.jsx)(n.code,{children:"modern.config.ts"})," 文件中注册 SWC 插件，即可启用 SWC 编译和压缩能力。"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-ts",meta:'title="modern.config.ts"',children:"import appTools, { defineConfig } from '@modern-js/app-tools';\nimport swcPlugin from '@modern-js/plugin-swc';\n\nexport default defineConfig({\n  plugins: [appTools(), swcPlugin()],\n});\n"})}),"\n",(0,r.jsxs)(n.h2,{id:"配置项",children:["配置项",(0,r.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#配置项",children:"#"})]}),"\n",(0,r.jsxs)(n.p,{children:["你可以通过 ",(0,r.jsx)(n.code,{children:"tools.swc"})," 配置项来设置 SWC 编译行为。"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-js",meta:'title="modern.config.ts"',children:"import { defineConfig } from '@modern-js/app-tools';\n\nexport default defineConfig({\n  tools: {\n    swc: {\n      jsMinify: {\n        compress: {},\n        mangle: true,\n      },\n    },\n  },\n});\n"})}),"\n",(0,r.jsxs)(n.p,{children:["完整配置项请参考 ",(0,r.jsx)(n.a,{href:"https://modernjs.dev/builder/plugins/plugin-swc.html#%E9%85%8D%E7%BD%AE",target:"_blank",rel:"noopener noreferrer",children:"Modern.js Builder - SWC 插件配置"}),"。"]})]})}var a=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=Object.assign({},(0,i.useMDXComponents)(),e.components).wrapper;return n?(0,r.jsx)(n,Object.assign({},e,{children:(0,r.jsx)(l,e)})):l(e)}}}]);