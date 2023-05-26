(self.webpackChunk_modern_js_builder_doc=self.webpackChunk_modern_js_builder_doc||[]).push([["docs_en_guide_glossary_mdx"],{36502:function(e,r,n){"use strict";Object.defineProperty(r,"__esModule",{value:!0});!function(e,r){for(var n in r)Object.defineProperty(e,n,{enumerable:!0,get:r[n]})}(r,{frontmatter:function(){return a},title:function(){return l},toc:function(){return c},default:function(){return u}});var s=n("9880"),d=n("23169"),i=n.ir(n("24399")),t=n.ir(n("99411")),o=n.ir(n("33884")),a={},l="Glossary",c=[{text:"Bundler",depth:2,id:"bundler"},{text:"Builder",depth:2,id:"builder"},{text:"Rspack",depth:2,id:"rspack"},{text:"Builder Provider",depth:2,id:"builder-provider"},{text:"Modern.js",depth:2,id:"modernjs"},{text:"EdenX",depth:2,id:"edenx"}];function h(e){var r=Object.assign({h1:"h1",a:"a",h2:"h2",p:"p",ul:"ul",li:"li",code:"code",strong:"strong"},(0,d.useMDXComponents)(),e.components);return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)(r.h1,{id:"glossary",children:["Glossary",(0,s.jsx)(r.a,{className:"header-anchor","aria-hidden":"true",href:"#glossary",children:"#"})]}),"\n",(0,s.jsxs)(r.h2,{id:"bundler",children:["Bundler",(0,s.jsx)(r.a,{className:"header-anchor","aria-hidden":"true",href:"#bundler",children:"#"})]}),"\n","\n",(0,s.jsx)(i.default,{}),"\n",(0,s.jsxs)(r.h2,{id:"builder",children:["Builder",(0,s.jsx)(r.a,{className:"header-anchor","aria-hidden":"true",href:"#builder",children:"#"})]}),"\n","\n",(0,s.jsx)(t.default,{}),"\n",(0,s.jsxs)(r.h2,{id:"rspack",children:["Rspack",(0,s.jsx)(r.a,{className:"header-anchor","aria-hidden":"true",href:"#rspack",children:"#"})]}),"\n","\n",(0,s.jsx)(o.default,{}),"\n",(0,s.jsxs)(r.h2,{id:"builder-provider",children:["Builder Provider",(0,s.jsx)(r.a,{className:"header-anchor","aria-hidden":"true",href:"#builder-provider",children:"#"})]}),"\n",(0,s.jsx)(r.p,{children:"Builder Provider is a part of Builder. Providers implements corresponding build feature based on specific bundlers."}),"\n",(0,s.jsx)(r.p,{children:"Currently there are two Providers:"}),"\n",(0,s.jsxs)(r.ul,{children:["\n",(0,s.jsxs)(r.li,{children:[(0,s.jsx)(r.code,{children:"@modern-js/builder-webpack-provider"}),": Based on webpack."]}),"\n",(0,s.jsxs)(r.li,{children:[(0,s.jsx)(r.code,{children:"@modern-js/builder-rspack-provider"}),": Based on rspack."]}),"\n"]}),"\n",(0,s.jsxs)(r.h2,{id:"modernjs",children:["Modern.js",(0,s.jsx)(r.a,{className:"header-anchor","aria-hidden":"true",href:"#modernjs",children:"#"})]}),"\n",(0,s.jsxs)(r.p,{children:[(0,s.jsx)(r.strong,{children:"Modern.js is an open source web engineering system from ByteDance"}),", which provides multiple solutions to help developers solve problems in different development scenarios."]}),"\n",(0,s.jsxs)(r.p,{children:[(0,s.jsx)(r.a,{href:"https://github.com/web-infra-dev/modern.js",target:"_blank",rel:"noopener noreferrer",children:"Modern.js Repository"}),"."]}),"\n",(0,s.jsxs)(r.h2,{id:"edenx",children:["EdenX",(0,s.jsx)(r.a,{className:"header-anchor","aria-hidden":"true",href:"#edenx",children:"#"})]}),"\n",(0,s.jsx)(r.p,{children:"ByteDance's internal web engineering system, implemented based on Modern.js."})]})}var u=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},r=Object.assign({},(0,d.useMDXComponents)(),e.components).wrapper;return r?(0,s.jsx)(r,Object.assign({},e,{children:(0,s.jsx)(h,e)})):h(e)}},99411:function(e,r,n){"use strict";Object.defineProperty(r,"__esModule",{value:!0}),Object.defineProperty(r,"default",{enumerable:!0,get:function(){return t}});var s=n("9880"),d=n("23169");function i(e){var r=Object.assign({p:"p",img:"img"},(0,d.useMDXComponents)(),e.components);return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(r.p,{children:'Refers to the build engine. The goal of Builder is to "reuse the best practices of build tools".'}),"\n",(0,s.jsx)(r.p,{children:"Bundlers are low-level, when we build a project based on webpack, we need to fully understand the webpack config and many webpack plugins and loaders, then spend a lot of time to combine them."}),"\n",(0,s.jsx)(r.p,{children:"Builder is out-of-box. By using Builder, you can quickly gain the ability to build a web application."}),"\n",(0,s.jsx)(r.p,{children:"The layers within the Modern.js Builder are as follows:"}),"\n",(0,s.jsx)(r.p,{children:(0,s.jsx)(r.img,{src:"https://lf3-static.bytednsdoc.com/obj/eden-cn/zq-uylkvT/ljhwZthlaukjlkulzlp/builder-struct-10092.png",alt:""})})]})}var t=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},r=Object.assign({},(0,d.useMDXComponents)(),e.components).wrapper;return r?(0,s.jsx)(r,Object.assign({},e,{children:(0,s.jsx)(i,e)})):i(e)}},24399:function(e,r,n){"use strict";Object.defineProperty(r,"__esModule",{value:!0}),Object.defineProperty(r,"default",{enumerable:!0,get:function(){return t}});var s=n("9880"),d=n("23169");function i(e){var r=Object.assign({p:"p",a:"a"},(0,d.useMDXComponents)(),e.components);return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)(r.p,{children:["Refers to module bundlers such as ",(0,s.jsx)(r.a,{href:"https://webpack.js.org/",target:"_blank",rel:"noopener noreferrer",children:"webpack"}),", ",(0,s.jsx)(r.a,{href:"https://www.rspack.dev/",target:"_blank",rel:"noopener noreferrer",children:"Rspack"}),"."]}),"\n",(0,s.jsx)(r.p,{children:"The main goal of bundlers is to bundle JavaScript, CSS and other files together, and the bundled files can be used in the browser, Node.js or other environments. When bundler processes the Web application, it builds a dependency graph and then combines every module into one or more bundles."})]})}var t=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},r=Object.assign({},(0,d.useMDXComponents)(),e.components).wrapper;return r?(0,s.jsx)(r,Object.assign({},e,{children:(0,s.jsx)(i,e)})):i(e)}}}]);