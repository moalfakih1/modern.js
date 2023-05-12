(self.webpackChunk_modern_js_main_doc=self.webpackChunk_modern_js_main_doc||[]).push([["docs_en_guides_advanced-features_rspack-start_mdx"],{91117:function(e,n,r){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),Object.defineProperty(n,"default",{enumerable:!0,get:function(){return c}});var i=r("9880"),s=r("23169"),a=r.ir(r("24102"));function t(e){var n=Object.assign({div:"div"},(0,s.useMDXComponents)(),e.components);return(0,i.jsxs)(n.div,{className:"modern-directive tip",children:[(0,i.jsx)(n.div,{className:"modern-directive-title",children:"What is Rspack"}),(0,i.jsxs)(n.div,{className:"modern-directive-content",children:["\n","\n",(0,i.jsx)(a.default,{}),"\n"]})]})}var c=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=Object.assign({},(0,s.useMDXComponents)(),e.components).wrapper;return n?(0,i.jsx)(n,Object.assign({},e,{children:(0,i.jsx)(t,e)})):t(e)}},70537:function(e,n,r){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),Object.defineProperty(n,"default",{enumerable:!0,get:function(){return t}});var i=r("9880"),s=r("23169");function a(e){var n=Object.assign({div:"div",pre:"pre",code:"code"},(0,s.useMDXComponents)(),e.components);return(0,i.jsx)(n.div,{className:"language-",children:(0,i.jsx)(n.div,{className:"modern-code-content",children:(0,i.jsx)(n.pre,{className:"code",children:(0,i.jsx)(n.code,{className:"language-bash",children:"$ npx @modern-js/create myapp\n? Please select the solution you want to create: Web App\n? Development Language: TS\n? Package Manager: pnpm\n? Bundler: Rspack\n"})})})})}var t=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=Object.assign({},(0,s.useMDXComponents)(),e.components).wrapper;return n?(0,i.jsx)(n,Object.assign({},e,{children:(0,i.jsx)(a,e)})):a(e)}},74958:function(e,n,r){"use strict";Object.defineProperty(n,"__esModule",{value:!0});!function(e,n){for(var r in n)Object.defineProperty(e,r,{enumerable:!0,get:n[r]})}(n,{frontmatter:function(){return c},title:function(){return o},toc:function(){return d},default:function(){return p}});var i=r("9880"),s=r("23169"),a=r.ir(r("91117")),t=r.ir(r("70537")),c={sidebar_position:1},o="Using Rspack",d=[{text:"Initializing an Rspack project",depth:2,id:"initializing-an-rspack-project"},{text:"Migrating from webpack to Rspack",depth:2,id:"migrating-from-webpack-to-rspack"}];function l(e){var n=Object.assign({h1:"h1",a:"a",p:"p",strong:"strong",h2:"h2",code:"code",div:"div",ul:"ul",li:"li",pre:"pre"},(0,s.useMDXComponents)(),e.components);return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsxs)(n.h1,{id:"using-rspack",children:["Using Rspack",(0,i.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#using-rspack",children:"#"})]}),"\n","\n",(0,i.jsx)(a.default,{}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"Modern.js provides out-of-the-box Rspack support"}),", so you can switch between the stable Webpack and the faster Rspack."]}),"\n",(0,i.jsx)(n.p,{children:"This document will show you how to enable Rspack build mode in Modern.js."}),"\n",(0,i.jsxs)(n.h2,{id:"initializing-an-rspack-project",children:["Initializing an Rspack project",(0,i.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#initializing-an-rspack-project",children:"#"})]}),"\n",(0,i.jsxs)(n.p,{children:["The Modern.js generator provides an interactive question-and-answer interface to initialize a project. To create an Rspack project, simply select the ",(0,i.jsx)(n.strong,{children:"Rspack"})," build tool by running:"]}),"\n","\n",(0,i.jsx)(t.default,{}),"\n",(0,i.jsxs)(n.p,{children:["After the project is created, you can experience the project by running ",(0,i.jsx)(n.code,{children:"pnpm run dev"}),". For more project information, please refer to ",(0,i.jsx)(n.a,{href:"/guides/get-started/quick-start",children:"Quick Start"}),"."]}),"\n",(0,i.jsxs)(n.div,{className:"modern-directive tip",children:[(0,i.jsx)(n.div,{className:"modern-directive-title",children:"TIP"}),(0,i.jsxs)(n.div,{className:"modern-directive-content",children:[(0,i.jsx)(n.p,{children:"When using Rspack as the bundler, the following Features are temporarily unavailable as some of the capabilities are still under development and we will provide support in the future."}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"Storybook Devtool"}),"\n",(0,i.jsxs)(n.li,{children:["The usage of ",(0,i.jsx)(n.a,{href:"/guides/basic-features/data-fetch",children:"useLoader"})," in Client Side Rendering"]}),"\n"]}),"\n"]})]}),"\n",(0,i.jsxs)(n.h2,{id:"migrating-from-webpack-to-rspack",children:["Migrating from webpack to Rspack",(0,i.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#migrating-from-webpack-to-rspack",children:"#"})]}),"\n",(0,i.jsxs)(n.p,{children:["You can enable Rspack build by running ",(0,i.jsx)(n.code,{children:"pnpm run new"}),":"]}),"\n",(0,i.jsx)(n.div,{className:"language-",children:(0,i.jsx)(n.div,{className:"modern-code-content",children:(0,i.jsx)(n.pre,{className:"code",children:(0,i.jsx)(n.code,{className:"language-bash",children:"$ pnpm run new\n? Action: Enable features\n? Enable features: Enable Rspack Build\n"})})})}),"\n",(0,i.jsxs)(n.p,{children:["After executing the command, enable the Rspack build in ",(0,i.jsx)(n.code,{children:"modern.config.ts"}),":"]}),"\n",(0,i.jsxs)(n.div,{className:"language-",children:[(0,i.jsx)(n.div,{className:"modern-code-title",children:"modern.config.ts"}),(0,i.jsx)(n.div,{className:"modern-code-content",children:(0,i.jsx)(n.pre,{className:"code",children:(0,i.jsx)(n.code,{className:"language-diff",meta:"title=modern.config.ts",children:"import appTools, { defineConfig } from '@modern-js/app-tools';\n\n+ export default defineConfig<'rspack'>({\n  plugins: [\n    appTools({\n+     bundler: 'experimental-rspack',\n    }),\n  ],\n});\n"})})})]}),"\n",(0,i.jsxs)(n.div,{className:"modern-directive tip",children:[(0,i.jsx)(n.div,{className:"modern-directive-title",children:"TIP"}),(0,i.jsx)(n.div,{className:"modern-directive-content",children:(0,i.jsxs)(n.p,{children:["When migrating from webpack to Rspack, there may have some differences in build and configuration capabilities. For more details, please refer to ",(0,i.jsx)(n.a,{href:"https://modernjs.dev/builder/en/guide/advanced/rspack-start.html#migrating-from-webpack-to-rspack",target:"_blank",rel:"noopener noreferrer",children:"Configuration Differences"}),".\n"]})})]})]})}var p=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=Object.assign({},(0,s.useMDXComponents)(),e.components).wrapper;return n?(0,i.jsx)(n,Object.assign({},e,{children:(0,i.jsx)(l,e)})):l(e)}}}]);