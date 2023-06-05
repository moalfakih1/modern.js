(self.webpackChunk_modern_js_main_doc=self.webpackChunk_modern_js_main_doc||[]).push([["docs_en_guides_advanced-features_rspack-start_mdx"],{42865:function(e,n,r){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),Object.defineProperty(n,"default",{enumerable:!0,get:function(){return c}});var i=r("9880"),s=r("23169"),a=r.ir(r("41287"));function t(e){var n=Object.assign({div:"div"},(0,s.useMDXComponents)(),e.components);return(0,i.jsxs)(n.div,{className:"modern-directive tip",children:[(0,i.jsx)(n.div,{className:"modern-directive-title",children:"What is Rspack"}),(0,i.jsxs)(n.div,{className:"modern-directive-content",children:["\n","\n",(0,i.jsx)(a.default,{}),"\n"]})]})}var c=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=Object.assign({},(0,s.useMDXComponents)(),e.components).wrapper;return n?(0,i.jsx)(n,Object.assign({},e,{children:(0,i.jsx)(t,e)})):t(e)}},99147:function(e,n,r){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),Object.defineProperty(n,"default",{enumerable:!0,get:function(){return t}});var i=r("9880"),s=r("23169");function a(e){var n=Object.assign({pre:"pre",code:"code"},(0,s.useMDXComponents)(),e.components);return(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",children:"$ npx @modern-js/create@latest myapp\n? Please select the type of project you want to create: Web App\n? Please select the programming language: TS\n? Please select the package manager: pnpm\n? Please select the bundler: Rspack\n"})})}var t=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=Object.assign({},(0,s.useMDXComponents)(),e.components).wrapper;return n?(0,i.jsx)(n,Object.assign({},e,{children:(0,i.jsx)(a,e)})):a(e)}},38218:function(e,n,r){"use strict";Object.defineProperty(n,"__esModule",{value:!0});!function(e,n){for(var r in n)Object.defineProperty(e,r,{enumerable:!0,get:n[r]})}(n,{frontmatter:function(){return c},title:function(){return o},toc:function(){return d},default:function(){return p}});var i=r("9880"),s=r("23169"),a=r.ir(r("42865")),t=r.ir(r("99147")),c={sidebar_position:1},o="Using Rspack",d=[{text:"Initializing an Rspack project",depth:2,id:"initializing-an-rspack-project"},{text:"Enable Rspack build",depth:2,id:"enable-rspack-build"},{text:"Migrating configuration",depth:2,id:"migrating-configuration"},{text:"The relationship between Rspack and Modern.js versions",depth:2,id:"the-relationship-between-rspack-and-modernjs-versions"},{text:"Override the Built-in Rspack Version",depth:3,id:"override-the-built-in-rspack-version"}];function l(e){var n=Object.assign({h1:"h1",a:"a",p:"p",strong:"strong",h2:"h2",code:"code",div:"div",ul:"ul",li:"li",pre:"pre",img:"img",h3:"h3"},(0,s.useMDXComponents)(),e.components);return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsxs)(n.h1,{id:"using-rspack",children:["Using Rspack",(0,i.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#using-rspack",children:"#"})]}),"\n","\n",(0,i.jsx)(a.default,{}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"Modern.js provides out-of-the-box Rspack support"}),", so you can switch between the stable Webpack and the faster Rspack."]}),"\n",(0,i.jsx)(n.p,{children:"This document will show you how to enable Rspack build mode in Modern.js."}),"\n",(0,i.jsxs)(n.h2,{id:"initializing-an-rspack-project",children:["Initializing an Rspack project",(0,i.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#initializing-an-rspack-project",children:"#"})]}),"\n",(0,i.jsxs)(n.p,{children:["The Modern.js generator provides an interactive question-and-answer interface to initialize a project. To create an Rspack project, simply select the ",(0,i.jsx)(n.strong,{children:"Rspack"})," build tool by running:"]}),"\n","\n",(0,i.jsx)(t.default,{}),"\n",(0,i.jsxs)(n.p,{children:["After the project is created, you can experience the project by running ",(0,i.jsx)(n.code,{children:"pnpm run dev"}),". For more project information, please refer to ",(0,i.jsx)(n.a,{href:"/guides/get-started/quick-start",children:"Quick Start"}),"."]}),"\n",(0,i.jsxs)(n.div,{className:"modern-directive tip",children:[(0,i.jsx)(n.div,{className:"modern-directive-title",children:"TIP"}),(0,i.jsxs)(n.div,{className:"modern-directive-content",children:[(0,i.jsx)(n.p,{children:"When using Rspack as the bundler, the following Features are temporarily unavailable as some of the capabilities are still under development and we will provide support in the future."}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"Storybook Devtool"}),"\n",(0,i.jsxs)(n.li,{children:["The usage of ",(0,i.jsx)(n.a,{href:"/guides/basic-features/data-fetch",children:"useLoader"})," in Client Side Rendering"]}),"\n"]}),"\n"]})]}),"\n",(0,i.jsxs)(n.h2,{id:"enable-rspack-build",children:["Enable Rspack build",(0,i.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#enable-rspack-build",children:"#"})]}),"\n",(0,i.jsxs)(n.p,{children:["You can enable Rspack build by running ",(0,i.jsx)(n.code,{children:"pnpm run new"}),":"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",children:"$ pnpm run new\n? Please select the operation you want: Enable features\n? Please select the feature name: Enable Rspack Build\n"})}),"\n",(0,i.jsxs)(n.p,{children:["After executing the command, enable the Rspack build in ",(0,i.jsx)(n.code,{children:"modern.config.ts"}),":"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-diff",meta:"title=modern.config.ts",children:"import appTools, { defineConfig } from '@modern-js/app-tools';\n\n+ export default defineConfig<'rspack'>({\n  plugins: [\n    appTools({\n+     bundler: 'experimental-rspack',\n    }),\n  ],\n});\n"})}),"\n",(0,i.jsxs)(n.h2,{id:"migrating-configuration",children:["Migrating configuration",(0,i.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#migrating-configuration",children:"#"})]}),"\n",(0,i.jsxs)(n.p,{children:["After enabling Rspack building capability, further configuration migration is needed by referring to the ",(0,i.jsx)(n.a,{href:"https://modernjs.dev/builder/en/guide/advanced/rspack-start.html#migrating-from-webpack-to-rspack",target:"_blank",rel:"noopener noreferrer",children:"Configuration Differences"}),"."]}),"\n",(0,i.jsxs)(n.h2,{id:"the-relationship-between-rspack-and-modernjs-versions",children:["The relationship between Rspack and Modern.js versions",(0,i.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#the-relationship-between-rspack-and-modernjs-versions",children:"#"})]}),"\n",(0,i.jsxs)(n.p,{children:["Usually, the latest version of Rspack will be integrated into Modern.js. You can update the Modern.js-related dependencies and built-in Rspack to the latest version by using ",(0,i.jsx)(n.code,{children:"npx modern upgrade"})," in your project."]}),"\n",(0,i.jsx)(n.p,{children:"However, Modern.js uses a locked version dependency method (non-automatic upgrade) for Rspack. Due to differences in release cycles, the version of Rspack integrated into Modern.js may be behind the latest version of Rspack."}),"\n",(0,i.jsx)(n.p,{children:"When Rspack is enabled for building through dev / build, the current version of Rspack used in the framework will be printed automatically:"}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.img,{src:"https://lf3-static.bytednsdoc.com/obj/eden-cn/6221eh7uhbfvhn/modern/img_v2_dfcf051f-21db-4741-a108-d9f7a82c3abg.png",alt:"rspack_version_log"})}),"\n",(0,i.jsxs)(n.h3,{id:"override-the-built-in-rspack-version",children:["Override the Built-in Rspack Version",(0,i.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#override-the-built-in-rspack-version",children:"#"})]}),"\n",(0,i.jsx)(n.p,{children:"You can override Rspack to a specific version using the capbilities provided by package managers such as pnpm, yarn, npm."}),"\n",(0,i.jsxs)(n.p,{children:["For example, if you are using pnpm, you can update the Rspack version with ",(0,i.jsx)(n.code,{children:"overrides"})," as shown below:"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-json",meta:"title=package.json",children:'{\n  "pnpm": {\n    "overrides": {\n      "@rspack/core": "nightly",\n      "@rspack/dev-client": "nightly",\n      "@rspack/dev-middleware": "nightly",\n      "@rspack/plugin-html": "nightly",\n      "@rspack/postcss-loader": "nightly"\n    }\n  }\n}\n'})}),"\n",(0,i.jsxs)(n.div,{className:"modern-directive tip",children:[(0,i.jsx)(n.div,{className:"modern-directive-title",children:"What is Rspack Nightly Version"}),(0,i.jsxs)(n.div,{className:"modern-directive-content",children:[(0,i.jsx)(n.p,{children:"The Rspack nightly build fully replicates the full release build for catching errors early."}),(0,i.jsx)(n.p,{children:"Usually it is available and any errors that arise will fixed promptly."}),(0,i.jsx)(n.p,{children:"However, if there are any break changes that require modern.js to modify the code, we recommend to wait for the next version of modern.js."})]})]}),"\n",(0,i.jsxs)(n.p,{children:["More examples of using package management tools, please refer to: ",(0,i.jsx)(n.a,{href:"/guides/get-started/upgrade#lock-nested-dependency",children:"Lock nested dependency"}),"."]})]})}var p=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=Object.assign({},(0,s.useMDXComponents)(),e.components).wrapper;return n?(0,i.jsx)(n,Object.assign({},e,{children:(0,i.jsx)(l,e)})):l(e)}}}]);