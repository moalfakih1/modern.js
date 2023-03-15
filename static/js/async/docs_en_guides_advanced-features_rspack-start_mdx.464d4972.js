(self.webpackChunkwebpack=self.webpackChunkwebpack||[]).push([["docs_en_guides_advanced-features_rspack-start_mdx"],{12601:function(e,n,s){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),Object.defineProperty(n,"default",{enumerable:!0,get:function(){return a}});var r=s("12151");function i(e){let n=Object.assign({div:"div",p:"p",a:"a"},e.components);return(0,r.jsxs)(n.div,{className:"modern-directive tip",children:[(0,r.jsx)(n.p,{className:"modern-directive-title",children:"What is Rspack"}),(0,r.jsxs)(n.div,{className:"modern-directive-content",children:[(0,r.jsxs)(n.p,{children:["\n",(0,r.jsx)(n.a,{href:"https://www.rspack.dev/",target:"_blank",rel:"nofollow",children:"Rspack"})," is a high performance Rust-based JavaScript bundler that offers strong interoperability with the webpack ecosystem, enabling faster development cycles and efficient collaboration between the two tools."]}),(0,r.jsx)(n.p,{children:"Rspack's build performance is significantly better than Webpack, not only due to the language benefits of Rust, but also due to its parallel architecture and incremental compilation features. Benchmarking has shown that Rspack can deliver a 5-10x improvement in compilation performance."})]})]})}var a=function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},{wrapper:n}=e.components||{};return n?(0,r.jsx)(n,Object.assign({},e,{children:(0,r.jsx)(i,e)})):i(e)}},70283:function(e,n,s){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),Object.defineProperty(n,"default",{enumerable:!0,get:function(){return a}});var r=s("12151");function i(e){let n=Object.assign({div:"div",button:"button",pre:"pre",code:"code",span:"span"},e.components);return(0,r.jsxs)(n.div,{className:"language-bash",children:[(0,r.jsx)(n.div,{className:""}),(0,r.jsxs)(n.div,{className:"modern-code-content",children:[(0,r.jsx)(n.button,{className:"copy"}),(0,r.jsx)(n.pre,{className:"shiki",style:{backgroundColor:"var(--shiki-color-background)"},children:(0,r.jsxs)(n.code,{children:[(0,r.jsx)(n.span,{className:"line",children:(0,r.jsx)(n.span,{style:{color:"var(--shiki-color-text)"},children:"$ npx @modern-js/create myapp"})}),"\n",(0,r.jsxs)(n.span,{className:"line",children:[(0,r.jsx)(n.span,{style:{color:"var(--shiki-token-keyword)"},children:"?"}),(0,r.jsx)(n.span,{style:{color:"var(--shiki-color-text)"},children:" Please "}),(0,r.jsx)(n.span,{style:{color:"var(--shiki-token-keyword)"},children:"select"}),(0,r.jsx)(n.span,{style:{color:"var(--shiki-color-text)"},children:" the solution you want to create: Web App"})]}),"\n",(0,r.jsxs)(n.span,{className:"line",children:[(0,r.jsx)(n.span,{style:{color:"var(--shiki-token-keyword)"},children:"?"}),(0,r.jsx)(n.span,{style:{color:"var(--shiki-color-text)"},children:" Development Language: TS"})]}),"\n",(0,r.jsxs)(n.span,{className:"line",children:[(0,r.jsx)(n.span,{style:{color:"var(--shiki-token-keyword)"},children:"?"}),(0,r.jsx)(n.span,{style:{color:"var(--shiki-color-text)"},children:" Package Manager: pnpm"})]}),"\n",(0,r.jsxs)(n.span,{className:"line",children:[(0,r.jsx)(n.span,{style:{color:"var(--shiki-token-keyword)"},children:"?"}),(0,r.jsx)(n.span,{style:{color:"var(--shiki-color-text)"},children:" Bundler: Rspack"})]}),"\n",(0,r.jsx)(n.span,{className:"line"})]})})]})]})}var a=function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},{wrapper:n}=e.components||{};return n?(0,r.jsx)(n,Object.assign({},e,{children:(0,r.jsx)(i,e)})):i(e)}},61971:function(e,n,s){"use strict";Object.defineProperty(n,"__esModule",{value:!0});!function(e,n){for(var s in n)Object.defineProperty(e,s,{enumerable:!0,get:n[s]})}(n,{frontmatter:function(){return c},toc:function(){return t},title:function(){return l},default:function(){return d}});var r=s("12151"),i=s.ir(s("12601")),a=s.ir(s("70283"));let c={sidebar_position:1},t=[{id:"initializing-an-rspack-project",text:"Initializing an Rspack project",depth:2},{id:"migrating-from-webpack-to-rspack",text:"Migrating from webpack to Rspack",depth:2}],l="Using Rspack";function o(e){let n=Object.assign({h1:"h1",a:"a",p:"p",strong:"strong",h2:"h2",code:"code",div:"div",ul:"ul",li:"li",button:"button",pre:"pre",span:"span"},e.components);return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(n.h1,{id:"using-rspack",children:[(0,r.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#using-rspack",children:"#"}),"Using Rspack"]}),"\n","\n",(0,r.jsx)(i.default,{}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"Modern.js provides out-of-the-box Rspack support"}),", so you can switch between the stable Webpack and the faster Rspack."]}),"\n",(0,r.jsx)(n.p,{children:"This document will show you how to enable Rspack build mode in Modern.js."}),"\n",(0,r.jsxs)(n.h2,{id:"initializing-an-rspack-project",children:[(0,r.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#initializing-an-rspack-project",children:"#"}),"Initializing an Rspack project"]}),"\n",(0,r.jsxs)(n.p,{children:["The Modern.js generator provides an interactive question-and-answer interface to initialize a project. To create an Rspack project, simply select the ",(0,r.jsx)(n.strong,{children:"Rspack"})," build tool by running:"]}),"\n","\n",(0,r.jsx)(a.default,{}),"\n",(0,r.jsxs)(n.p,{children:["After the project is created, you can experience the project by running ",(0,r.jsx)(n.code,{children:"pnpm run dev"}),". For more project information, please refer to ",(0,r.jsx)(n.a,{href:"/en/guides/get-started/quick-start.html",children:"Quick Start"}),"."]}),"\n",(0,r.jsxs)(n.div,{className:"modern-directive tip",children:[(0,r.jsx)(n.p,{className:"modern-directive-title",children:"TIP"}),(0,r.jsxs)(n.div,{className:"modern-directive-content",children:[(0,r.jsx)(n.p,{children:"\nWhen using Rspack as the bundler, the following Features are temporarily unavailable as some of the capabilities are still under development and we will provide support in the future."}),(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"Micro Frontend"}),"\n",(0,r.jsx)(n.li,{children:"Storybook devtool"}),"\n"]})]})]}),"\n",(0,r.jsxs)(n.h2,{id:"migrating-from-webpack-to-rspack",children:[(0,r.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#migrating-from-webpack-to-rspack",children:"#"}),"Migrating from webpack to Rspack"]}),"\n",(0,r.jsxs)(n.p,{children:["You can enable Rspack build by running ",(0,r.jsx)(n.code,{children:"pnpm run new"}),":"]}),"\n",(0,r.jsxs)(n.div,{className:"language-bash",children:[(0,r.jsx)(n.div,{className:""}),(0,r.jsxs)(n.div,{className:"modern-code-content",children:[(0,r.jsx)(n.button,{className:"copy"}),(0,r.jsx)(n.pre,{className:"shiki",style:{backgroundColor:"var(--shiki-color-background)"},children:(0,r.jsxs)(n.code,{children:[(0,r.jsx)(n.span,{className:"line",children:(0,r.jsx)(n.span,{style:{color:"var(--shiki-color-text)"},children:"$ pnpm run new"})}),"\n",(0,r.jsxs)(n.span,{className:"line",children:[(0,r.jsx)(n.span,{style:{color:"var(--shiki-token-keyword)"},children:"?"}),(0,r.jsx)(n.span,{style:{color:"var(--shiki-color-text)"},children:" Action: Enable features"})]}),"\n",(0,r.jsxs)(n.span,{className:"line",children:[(0,r.jsx)(n.span,{style:{color:"var(--shiki-token-keyword)"},children:"?"}),(0,r.jsx)(n.span,{style:{color:"var(--shiki-color-text)"},children:" Enable features: Enable Rspack Build"})]}),"\n",(0,r.jsx)(n.span,{className:"line"})]})})]})]}),"\n",(0,r.jsxs)(n.p,{children:["After executing the command, enable the Rspack build in ",(0,r.jsx)(n.code,{children:"modern.config.ts"}),":"]}),"\n",(0,r.jsxs)(n.div,{className:"language-diff",children:[(0,r.jsx)(n.div,{className:"modern-code-title",children:"modern.config.ts"}),(0,r.jsxs)(n.div,{className:"modern-code-content",children:[(0,r.jsx)(n.button,{className:"copy"}),(0,r.jsx)(n.pre,{className:"shiki",style:{backgroundColor:"var(--shiki-color-background)"},children:(0,r.jsxs)(n.code,{children:[(0,r.jsx)(n.span,{className:"line",children:(0,r.jsx)(n.span,{style:{color:"var(--shiki-color-text)"},children:"import appTools, { defineConfig } from '@modern-js/app-tools';"})}),"\n",(0,r.jsx)(n.span,{className:"line"}),"\n",(0,r.jsx)(n.span,{className:"line",children:(0,r.jsx)(n.span,{style:{color:"#4AB576"},children:"+ export default defineConfig<'rspack'>({"})}),"\n",(0,r.jsx)(n.span,{className:"line",children:(0,r.jsx)(n.span,{style:{color:"var(--shiki-color-text)"},children:"  plugins: ["})}),"\n",(0,r.jsx)(n.span,{className:"line",children:(0,r.jsx)(n.span,{style:{color:"var(--shiki-color-text)"},children:"    appTools({"})}),"\n",(0,r.jsx)(n.span,{className:"line",children:(0,r.jsx)(n.span,{style:{color:"#4AB576"},children:"+     bundler: 'experimental-rspack',"})}),"\n",(0,r.jsx)(n.span,{className:"line",children:(0,r.jsx)(n.span,{style:{color:"var(--shiki-color-text)"},children:"    }),"})}),"\n",(0,r.jsx)(n.span,{className:"line",children:(0,r.jsx)(n.span,{style:{color:"var(--shiki-color-text)"},children:"  ],"})}),"\n",(0,r.jsx)(n.span,{className:"line",children:(0,r.jsx)(n.span,{style:{color:"var(--shiki-color-text)"},children:"});"})}),"\n",(0,r.jsx)(n.span,{className:"line"})]})})]})]}),"\n",(0,r.jsxs)(n.div,{className:"modern-directive tip",children:[(0,r.jsx)(n.p,{className:"modern-directive-title",children:"TIP"}),(0,r.jsx)(n.div,{className:"modern-directive-content",children:(0,r.jsxs)(n.p,{children:["\nWhen migrating from webpack to Rspack, there may have some differences in build and configuration capabilities. For more details, please refer to ",(0,r.jsx)(n.a,{href:"https://modernjs.dev/builder/en/guide/advanced/rspack-start.html#migrating-from-webpack-to-rspack",target:"_blank",rel:"nofollow",children:"Configuration Differences"}),"."]})})]})]})}var d=function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},{wrapper:n}=e.components||{};return n?(0,r.jsx)(n,Object.assign({},e,{children:(0,r.jsx)(o,e)})):o(e)}}}]);