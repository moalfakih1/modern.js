(self.webpackChunk_modern_js_doc_tools_doc=self.webpackChunk_modern_js_doc_tools_doc||[]).push([["docs_zh_guide_start_introduction_mdx"],{63182:function(e,n,r){"use strict";r.r(n),r.d(n,{default:function(){return t}});var d,s=r("15169"),h=r("43932"),i=r("9880"),c=r("23169");function a(e){var n=Object.assign({h1:"h1",a:"a",h2:"h2",p:"p",strong:"strong",code:"code",h3:"h3",img:"img",pre:"pre"},(0,c.useMDXComponents)(),e.components);return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsxs)(n.h1,{id:"介绍",children:["介绍",(0,i.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#介绍",children:"#"})]}),"\n",(0,i.jsxs)(n.h2,{id:"定位",children:["定位",(0,i.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#定位",children:"#"})]}),"\n",(0,i.jsxs)(n.p,{children:["Modern.js Doc 是一个面向",(0,i.jsx)(n.strong,{children:"文档站场景"}),"的前端框架，它的目标是给开发者提供一个",(0,i.jsx)(n.code,{children:"简单"}),"、",(0,i.jsx)(n.code,{children:"高效"}),"、",(0,i.jsx)(n.code,{children:"可扩展"}),"的文档站解决方案。"]}),"\n",(0,i.jsxs)(n.p,{children:["该文档框架的初衷是给公司内部的技术产品提供文档站搭建的解决方案，并满足内部的一些特殊需求，如",(0,i.jsx)(n.code,{children:"跨站点搜索服务"}),"等。而对于常见的文档站搭建需求，我们也做了比较完整的支持，比如",(0,i.jsx)(n.strong,{children:"支持多语言"}),"、",(0,i.jsx)(n.strong,{children:"全文搜索"}),"、",(0,i.jsx)(n.strong,{children:"自定义主题"}),"等等。"]}),"\n",(0,i.jsxs)(n.p,{children:["同时，框架基于 ",(0,i.jsx)(n.a,{href:"https://rspack.dev/",target:"_blank",rel:"noopener noreferrer",children:"Rspack"})," 来进行项目构建，性能优秀，让你在数秒内就能启动和构建一个文档站。"]}),"\n",(0,i.jsxs)(n.h2,{id:"功能特性",children:["功能特性",(0,i.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#功能特性",children:"#"})]}),"\n",(0,i.jsxs)(n.h3,{id:"支持-mdx-渲染",children:["支持 MDX 渲染",(0,i.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#支持-mdx-渲染",children:"#"})]}),"\n",(0,i.jsxs)(n.p,{children:["Modern.js Doc 基于 ",(0,i.jsx)(n.a,{href:"https://mdxjs.com/",target:"_blank",rel:"noopener noreferrer",children:"MDX"})," 来进行 Markdown 语法的扩展，支持在 Markdown 中使用 React 组件，同时支持在 Markdown 中使用 JSX 语法，语法上更加灵活。"]}),"\n",(0,i.jsxs)(n.p,{children:["语法详情请参考 ",(0,i.jsx)(n.a,{href:"/guide/basic/use-mdx",children:"使用 MDX"})," 小节。"]}),"\n",(0,i.jsxs)(n.h3,{id:"支持全文搜索",children:["支持全文搜索",(0,i.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#支持全文搜索",children:"#"})]}),"\n",(0,i.jsx)(n.p,{children:"基于开源 FlexSearch 搜索引擎，提供开箱即用的文档搜索能力。"}),"\n",(0,i.jsx)("img",{src:"https://lf3-static.bytednsdoc.com/obj/eden-cn/uhbfnupenuhf/edenx-doc/search.jpg"}),"\n",(0,i.jsxs)(n.h3,{id:"支持国际化i18n",children:["支持国际化(I18n)",(0,i.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#支持国际化i18n",children:"#"})]}),"\n",(0,i.jsxs)(n.p,{children:["内置国际化支持，支持多语言切换，且支持多语言内容搜索。详情可见 ",(0,i.jsx)(n.a,{href:"/guide/default-theme/i18n",children:"国际化"}),"。"]}),"\n",(0,i.jsxs)(n.h3,{id:"代码块高亮",children:["代码块高亮",(0,i.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#代码块高亮",children:"#"})]}),"\n",(0,i.jsxs)(n.p,{children:["基于 ",(0,i.jsx)(n.a,{href:"https://github.com/PrismJS/prism",target:"_blank",rel:"noopener noreferrer",children:"PrismJS"})," 来进行运行时代码着色，支持多种代码语言高亮。如:"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-ts",meta:'title="modern.config.ts"',children:"import { docTools, defineConfig } from '@modern-js/doc-tools';\nimport path from 'path';\n\nexport default defineConfig({\n  doc: {\n    root: path.join(__dirname, 'docs'),\n  },\n  plugins: [docTools()],\n});\n"})}),"\n",(0,i.jsxs)(n.h3,{id:"自动生成布局",children:["自动生成布局",(0,i.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#自动生成布局",children:"#"})]}),"\n",(0,i.jsxs)(n.p,{children:["内置了多种布局组件，如：",(0,i.jsx)(n.code,{children:"顶部导航"}),"、",(0,i.jsx)(n.code,{children:"左侧侧边栏"}),"等，你可以通过配置文件来进行自动生成，详情可参考",(0,i.jsx)(n.a,{href:"/guide/basic/auto-nav-sidebar",children:"自动化导航栏/侧边栏"}),"。"]}),"\n",(0,i.jsxs)(n.p,{children:["同时，你也可以通过配置 pageType 来自定义布局类型，详情可参考 ",(0,i.jsx)(n.a,{href:"/api/config/config-frontmatter#pagetype",children:"pageType"}),"。"]}),"\n",(0,i.jsxs)(n.h3,{id:"支持自定义主题",children:["支持自定义主题",(0,i.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#支持自定义主题",children:"#"})]}),"\n",(0,i.jsxs)(n.p,{children:["支持自定义主题，可以通过配置文件来进行主题的定制，详情请参考 ",(0,i.jsx)(n.a,{href:"/guide/advanced/custom-theme",children:"自定义主题"}),"。"]}),"\n",(0,i.jsxs)(n.h3,{id:"支持插件机制",children:["支持插件机制",(0,i.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#支持插件机制",children:"#"})]}),"\n",(0,i.jsxs)(n.p,{children:["内部设计了插件系统，你可以通过自定义插件来扩展 Modern.js Doc 的功能，详情请参考 ",(0,i.jsx)(n.a,{href:"/plugin/system/introduction",children:"插件机制"}),"。"]})]})}(d=globalThis).__RSPRESS_PAGE_META||(d.__RSPRESS_PAGE_META={}),globalThis.__RSPRESS_PAGE_META["%2Fhome%2Frunner%2Fwork%2Fmodern.js%2Fmodern.js%2Fpackages%2Fdocument%2Fdoc-tools-doc%2Fdocs%2Fzh%2Fguide%2Fstart%2Fintroduction.mdx"]={toc:[{text:"定位",id:"定位",depth:2},{text:"功能特性",id:"功能特性",depth:2},{text:"支持 MDX 渲染",id:"支持-mdx-渲染",depth:3},{text:"支持全文搜索",id:"支持全文搜索",depth:3},{text:"支持国际化(I18n)",id:"支持国际化i18n",depth:3},{text:"代码块高亮",id:"代码块高亮",depth:3},{text:"自动生成布局",id:"自动生成布局",depth:3},{text:"支持自定义主题",id:"支持自定义主题",depth:3},{text:"支持插件机制",id:"支持插件机制",depth:3}],title:"介绍",frontmatter:{}};var t=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=Object.assign({},(0,c.useMDXComponents)(),e.components).wrapper;return n?(0,i.jsx)(n,(0,h._)((0,s._)({},e),{children:(0,i.jsx)(a,(0,s._)({},e))})):a(e)}}}]);