(self.webpackChunk_modern_js_main_doc=self.webpackChunk_modern_js_main_doc||[]).push([["docs_zh_configure_app_auto-load-plugin_mdx"],{38004:function(n,e,s){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),Object.defineProperty(e,"default",{enumerable:!0,get:function(){return c}});var o,r=s("15169"),d=s("43932"),i=s("9880"),l=s("23169");function a(n){var e=Object.assign({h1:"h1",a:"a",ul:"ul",li:"li",strong:"strong",code:"code",p:"p",h3:"h3",pre:"pre",ol:"ol"},(0,l.useMDXComponents)(),n.components);return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsxs)(e.h1,{id:"autoloadplugins-(自动注册插件)",children:["autoLoadPlugins (自动注册插件)",(0,i.jsx)(e.a,{className:"header-anchor","aria-hidden":"true",href:"#autoloadplugins-(自动注册插件)",children:"#"})]}),"\n",(0,i.jsxs)(e.ul,{children:["\n",(0,i.jsxs)(e.li,{children:[(0,i.jsx)(e.strong,{children:"类型："})," ",(0,i.jsx)(e.code,{children:"boolean"})]}),"\n",(0,i.jsxs)(e.li,{children:[(0,i.jsx)(e.strong,{children:"默认值："})," ",(0,i.jsx)(e.code,{children:"false"})]}),"\n"]}),"\n",(0,i.jsx)(e.p,{children:"用于配置 Modern.js 是否开启自动注册插件。"}),"\n",(0,i.jsxs)(e.h3,{id:"手动注册插件",children:["手动注册插件",(0,i.jsx)(e.a,{className:"header-anchor","aria-hidden":"true",href:"#手动注册插件",children:"#"})]}),"\n",(0,i.jsxs)(e.p,{children:["默认情况下，安装插件后，你需要在 ",(0,i.jsx)(e.code,{children:"modern.config.ts"})," 文件中手动注册插件。"]}),"\n",(0,i.jsx)(e.pre,{children:(0,i.jsx)(e.code,{className:"language-ts",meta:'title="modern.config.ts"',children:"import { appTools, defineConfig } from '@modern-js/app-tools';\nimport { bffPlugin } from '@modern-js/plugin-bff';\n\nexport default defineConfig({\n  plugins: [appTools(), bffPlugin()],\n});\n"})}),"\n",(0,i.jsxs)(e.h3,{id:"自动注册插件",children:["自动注册插件",(0,i.jsx)(e.a,{className:"header-anchor","aria-hidden":"true",href:"#自动注册插件",children:"#"})]}),"\n",(0,i.jsxs)(e.p,{children:["除了手段注册，Modern.js 还提供自动注册插件的方式: 将 ",(0,i.jsx)(e.code,{children:"autoLoadPlugin"})," 配置项置为 ",(0,i.jsx)(e.code,{children:"true"}),"。"]}),"\n",(0,i.jsx)(e.pre,{children:(0,i.jsx)(e.code,{className:"language-ts",meta:'title="modern.config.ts"',children:"import { defineConfig } from '@modern-js/app-tools';\n\nexport default defineConfig({\n  autoLoadPlugins: true,\n});\n"})}),"\n",(0,i.jsx)(e.p,{children:"Modern.js 将通过以下几个步骤帮你自动注册插件"}),"\n",(0,i.jsxs)(e.ol,{children:["\n",(0,i.jsx)(e.li,{children:"Modern.js 在内部维护一份官方插件列表。"}),"\n"]}),"\n",(0,i.jsx)(e.pre,{children:(0,i.jsx)(e.code,{className:"language-js",children:"const InternalPlugins = ['@modern-js/app-tools', '@modern-js/plugin-i18n', ...];\n"})}),"\n",(0,i.jsxs)(e.ol,{start:"2",children:["\n",(0,i.jsxs)(e.li,{children:["Modern.js 将读取你的 ",(0,i.jsx)(e.code,{children:"package.json"})," 文件，收集依赖信息。"]}),"\n"]}),"\n",(0,i.jsx)(e.pre,{children:(0,i.jsx)(e.code,{className:"language-json",meta:'title="package.json"',children:'"dependencies": {\n  "@modern-js/plugin-i18n": "x.x.x"\n  ...\n},\n"devDependencies": {\n  "@modern-js/app-tools": "x.x.x"\n  ...\n}\n'})}),"\n",(0,i.jsxs)(e.ol,{start:"3",children:["\n",(0,i.jsxs)(e.li,{children:["Modern.js 观察到你安装了 ",(0,i.jsx)(e.code,{children:"@modern-js/plugin-i18n"})," 和 ",(0,i.jsx)(e.code,{children:"@modern-js/app-tools"})," 等依赖后，将会引入插件自动注册。"]}),"\n"]}),"\n",(0,i.jsx)(e.p,{children:"可以注意到这种方式相对黑盒，你甚至对加载插件的过程是无感知的。我们希望更多的细节暴露给开发者，能让开发者去控制这一过程。"}),"\n",(0,i.jsx)(e.p,{children:(0,i.jsx)(e.strong,{children:"因此我们更加推荐你手动注册插件。"})})]})}(o=globalThis).__RSPRESS_PAGE_META||(o.__RSPRESS_PAGE_META={}),globalThis.__RSPRESS_PAGE_META["/home/runner/work/modern.js/modern.js/packages/document/main-doc/docs/zh/configure/app/auto-load-plugin.mdx"]={toc:[{text:"手动注册插件",id:"手动注册插件",depth:3},{text:"自动注册插件",id:"自动注册插件",depth:3}],title:"autoLoadPlugins (自动注册插件)",frontmatter:{title:"autoLoadPlugins (自动注册插件)",sidebar_position:11}};var c=function(){var n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},e=Object.assign({},(0,l.useMDXComponents)(),n.components).wrapper;return e?(0,i.jsx)(e,d._(r._({},n),{children:(0,i.jsx)(a,r._({},n))})):a(n)}}}]);