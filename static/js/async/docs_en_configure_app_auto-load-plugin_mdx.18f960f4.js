(self.webpackChunk_modern_js_main_doc=self.webpackChunk_modern_js_main_doc||[]).push([["docs_en_configure_app_auto-load-plugin_mdx"],{51477:function(e,n,i){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),Object.defineProperty(n,"default",{enumerable:!0,get:function(){return d}});var o,s=i("15169"),r=i("43932"),l=i("9880"),t=i("23169");function a(e){var n=Object.assign({h1:"h1",a:"a",ul:"ul",li:"li",strong:"strong",code:"code",p:"p",h3:"h3",pre:"pre",ol:"ol"},(0,t.useMDXComponents)(),e.components);return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsxs)(n.h1,{id:"autoloadplugins",children:["autoLoadPlugins",(0,l.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#autoloadplugins",children:"#"})]}),"\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsxs)(n.li,{children:[(0,l.jsx)(n.strong,{children:"Type:"})," ",(0,l.jsx)(n.code,{children:"boolean"})]}),"\n",(0,l.jsxs)(n.li,{children:[(0,l.jsx)(n.strong,{children:"Default:"})," ",(0,l.jsx)(n.code,{children:"false"})]}),"\n"]}),"\n",(0,l.jsx)(n.p,{children:"Used to configure whether Modern.js enables auto-registration of plugins."}),"\n",(0,l.jsxs)(n.h3,{id:"manual-registration-plugin",children:["Manual Registration Plugin",(0,l.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#manual-registration-plugin",children:"#"})]}),"\n",(0,l.jsxs)(n.p,{children:["By default, installing the plugin requires you to register the plugin manually in the ",(0,l.jsx)(n.code,{children:"modern.config.ts"}),"."]}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-ts",meta:'title="modern.config.ts"',children:"import { appTools, defineConfig } from '@modern-js/app-tools';\nimport { bffPlugin } from '@modern-js/plugin-bff';\n\nexport default defineConfig({\n  plugins: [appTools(), bffPlugin()],\n});\n"})}),"\n",(0,l.jsxs)(n.h3,{id:"auto-registration-plugin",children:["Auto Registration plugin",(0,l.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#auto-registration-plugin",children:"#"})]}),"\n",(0,l.jsxs)(n.p,{children:["In addition to means registration, Modern.js also provides a way to automatically register plugins: set the ",(0,l.jsx)(n.code,{children:"autoLoadPlugin"})," configuration item to ",(0,l.jsx)(n.code,{children:"true"}),"."]}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-ts",meta:'title="modern.config.ts"',children:"import { defineConfig } from '@modern-js/app-tools';\n\nexport default defineConfig({\n  autoLoadPlugins: true,\n});\n"})}),"\n",(0,l.jsx)(n.p,{children:"Modern.js will help you automatically register the plugin by following these steps"}),"\n",(0,l.jsxs)(n.ol,{children:["\n",(0,l.jsx)(n.li,{children:"Modern.js maintains an official list of plugins internally."}),"\n"]}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-js",children:"const InternalPlugins = ['@modern-js/app-tools', '@modern-js/plugin-i18n', ...];\n"})}),"\n",(0,l.jsxs)(n.ol,{start:"2",children:["\n",(0,l.jsxs)(n.li,{children:["Modern.js will read your ",(0,l.jsx)(n.code,{children:"package.json"})," and collect the dependency information."]}),"\n"]}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-json",meta:'title="package.json"',children:'"dependencies": {\n  "@modern-js/plugin-i18n": "x.x.x"\n  ...\n},\n"devDependencies": {\n  "@modern-js/app-tools": "x.x.x"\n  ...\n}\n'})}),"\n",(0,l.jsxs)(n.ol,{start:"3",children:["\n",(0,l.jsxs)(n.li,{children:["Modern.js observes that when you install dependencies such as ",(0,l.jsx)(n.code,{children:"@modern-js/plugin-i18n"})," and ",(0,l.jsx)(n.code,{children:"@modern-js/app-tools"}),", automatic plugin registration will be imported."]}),"\n"]}),"\n",(0,l.jsx)(n.p,{children:"You can notice that this approach is relatively black-box and you are not even aware of the process of loading the plugin. We want to expose more details to the developer and be able to let the developer control the process."}),"\n",(0,l.jsx)(n.p,{children:(0,l.jsx)(n.strong,{children:"Therefore we recommend you to register the plugin manually."})})]})}(o=globalThis).__RSPRESS_PAGE_META||(o.__RSPRESS_PAGE_META={}),globalThis.__RSPRESS_PAGE_META["/home/runner/work/modern.js/modern.js/packages/document/main-doc/docs/en/configure/app/auto-load-plugin.mdx"]={toc:[{text:"Manual Registration Plugin",id:"manual-registration-plugin",depth:3},{text:"Auto Registration plugin",id:"auto-registration-plugin",depth:3}],title:"autoLoadPlugins",frontmatter:{title:"autoLoadPlugins",sidebar_position:11}};var d=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=Object.assign({},(0,t.useMDXComponents)(),e.components).wrapper;return n?(0,l.jsx)(n,r._(s._({},e),{children:(0,l.jsx)(a,s._({},e))})):a(e)}}}]);