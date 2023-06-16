(self.webpackChunk_modern_js_main_doc=self.webpackChunk_modern_js_main_doc||[]).push([["docs_zh_guides_advanced-features_using-storybook_mdx"],{80578:function(o,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});!function(o,e){for(var n in e)Object.defineProperty(o,n,{enumerable:!0,get:e[n]})}(e,{frontmatter:function(){return t},title:function(){return i},toc:function(){return d},default:function(){return a}});var r=n("9880"),s=n("23169"),t={sidebar_position:20},i="使用 Storybook",d=[{text:"开启 Storybook 调试",depth:2,id:"开启-storybook-调试"},{text:"调试代码",depth:2,id:"调试代码"},{text:"配置 Storybook",depth:2,id:"配置-storybook"}];function c(o){var e=Object.assign({h1:"h1",a:"a",p:"p",ul:"ul",li:"li",h2:"h2",code:"code",pre:"pre"},(0,s.useMDXComponents)(),o.components);return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(e.h1,{id:"使用-storybook",children:["使用 Storybook",(0,r.jsx)(e.a,{className:"header-anchor","aria-hidden":"true",href:"#使用-storybook",children:"#"})]}),"\n",(0,r.jsxs)(e.p,{children:[(0,r.jsx)(e.a,{href:"https://storybook.js.org/",target:"_blank",rel:"noopener noreferrer",children:"Storybook"})," 是一个专门用于组件调试的工具，它围绕着组件开发提供了："]}),"\n",(0,r.jsxs)(e.ul,{children:["\n",(0,r.jsx)(e.li,{children:"丰富多样的调试能力"}),"\n",(0,r.jsx)(e.li,{children:"可与一些测试工具结合使用"}),"\n",(0,r.jsx)(e.li,{children:"可重复使用的文档内容"}),"\n",(0,r.jsx)(e.li,{children:"可分享能力"}),"\n",(0,r.jsx)(e.li,{children:"工作流程自动化"}),"\n"]}),"\n",(0,r.jsxs)(e.h2,{id:"开启-storybook-调试",children:["开启 Storybook 调试",(0,r.jsx)(e.a,{className:"header-anchor","aria-hidden":"true",href:"#开启-storybook-调试",children:"#"})]}),"\n",(0,r.jsx)(e.p,{children:"EdenX 默认集成了 Storybook 的调试能力。"}),"\n",(0,r.jsxs)(e.p,{children:["当我们想要对组件进行调试的时候，可以通过 ",(0,r.jsx)(e.code,{children:"pnpm run new"})," 启用 Storybook 调试功能。"]}),"\n",(0,r.jsx)(e.pre,{children:(0,r.jsx)(e.code,{className:"language-bash",children:"$ npx modern new\n? 请选择你想要的操作 启用可选功能\n? 请选择功能名称 启用「Visual Testing (Storybook)」模式\n"})}),"\n",(0,r.jsxs)(e.p,{children:["执行完成后，你只需在 ",(0,r.jsx)(e.code,{children:"modern.config.ts"})," 文件中注册 Modern.js 的 Storybook 插件，即可启用 Storybook 调试能力。"]}),"\n",(0,r.jsx)(e.pre,{children:(0,r.jsx)(e.code,{className:"language-ts",meta:'title="modern.config.ts"',children:"import appTools, { defineConfig } from '@modern-js/app-tools';\nimport storybookPlugin from '@modern-js/plugin-storybook';\n\nexport default defineConfig({\n  plugins: [appTools(), storybookPlugin()],\n});\n"})}),"\n",(0,r.jsxs)(e.h2,{id:"调试代码",children:["调试代码",(0,r.jsx)(e.a,{className:"header-anchor","aria-hidden":"true",href:"#调试代码",children:"#"})]}),"\n",(0,r.jsxs)(e.p,{children:["Modern.js 默认识别项目源码目录 src/ 下 ",(0,r.jsx)(e.a,{href:"/apis/app/hooks/src/stories",children:"*.stories.(js|jsx|ts|tsx|mdx)"})," 格式的文件作为 Storybook 的调试文件。"]}),"\n",(0,r.jsxs)(e.h2,{id:"配置-storybook",children:["配置 Storybook",(0,r.jsx)(e.a,{className:"header-anchor","aria-hidden":"true",href:"#配置-storybook",children:"#"})]}),"\n",(0,r.jsxs)(e.p,{children:["在 Modern.js 中，可以在项目的 ",(0,r.jsx)(e.a,{href:"/apis/app/hooks/config/storybook",children:(0,r.jsx)(e.code,{children:"config/storybook"})})," 目录下增加 Storybook 配置文件。"]})]})}var a=function(){var o=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},e=Object.assign({},(0,s.useMDXComponents)(),o.components).wrapper;return e?(0,r.jsx)(e,Object.assign({},o,{children:(0,r.jsx)(c,o)})):c(o)}}}]);