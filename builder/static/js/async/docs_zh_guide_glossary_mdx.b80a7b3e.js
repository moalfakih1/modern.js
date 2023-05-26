(self.webpackChunk_modern_js_builder_doc=self.webpackChunk_modern_js_builder_doc||[]).push([["docs_zh_guide_glossary_mdx"],{8424:function(e,r,n){"use strict";Object.defineProperty(r,"__esModule",{value:!0});!function(e,r){for(var n in r)Object.defineProperty(e,n,{enumerable:!0,get:r[n]})}(r,{frontmatter:function(){return a},title:function(){return l},toc:function(){return o},default:function(){return u}});var d=n("9880"),s=n("23169"),i=n.ir(n("84497")),t=n.ir(n("67738")),c=n.ir(n("72635")),a={},l="名词解释",o=[{text:"Bundler",depth:2,id:"bundler"},{text:"Builder",depth:2,id:"builder"},{text:"Rspack",depth:2,id:"rspack"},{text:"Builder Provider",depth:2,id:"builder-provider"},{text:"Modern.js",depth:2,id:"modernjs"},{text:"EdenX",depth:2,id:"edenx"}];function h(e){var r=Object.assign({h1:"h1",a:"a",h2:"h2",p:"p",ul:"ul",li:"li",code:"code"},(0,s.useMDXComponents)(),e.components);return(0,d.jsxs)(d.Fragment,{children:[(0,d.jsxs)(r.h1,{id:"名词解释",children:["名词解释",(0,d.jsx)(r.a,{className:"header-anchor","aria-hidden":"true",href:"#名词解释",children:"#"})]}),"\n",(0,d.jsxs)(r.h2,{id:"bundler",children:["Bundler",(0,d.jsx)(r.a,{className:"header-anchor","aria-hidden":"true",href:"#bundler",children:"#"})]}),"\n","\n",(0,d.jsx)(i.default,{}),"\n",(0,d.jsxs)(r.h2,{id:"builder",children:["Builder",(0,d.jsx)(r.a,{className:"header-anchor","aria-hidden":"true",href:"#builder",children:"#"})]}),"\n","\n",(0,d.jsx)(t.default,{}),"\n",(0,d.jsxs)(r.h2,{id:"rspack",children:["Rspack",(0,d.jsx)(r.a,{className:"header-anchor","aria-hidden":"true",href:"#rspack",children:"#"})]}),"\n","\n",(0,d.jsx)(c.default,{}),"\n",(0,d.jsxs)(r.h2,{id:"builder-provider",children:["Builder Provider",(0,d.jsx)(r.a,{className:"header-anchor","aria-hidden":"true",href:"#builder-provider",children:"#"})]}),"\n",(0,d.jsx)(r.p,{children:"Builder Provider 是 Builder 的组成部分之一，Provider 基于特定 bundler 实现了对应的构建能力。"}),"\n",(0,d.jsx)(r.p,{children:"目前 Builder 提供了两个 Provider："}),"\n",(0,d.jsxs)(r.ul,{children:["\n",(0,d.jsxs)(r.li,{children:[(0,d.jsx)(r.code,{children:"@modern-js/builder-webpack-provider"}),"：底层基于 webpack 来实现。"]}),"\n",(0,d.jsxs)(r.li,{children:[(0,d.jsx)(r.code,{children:"@modern-js/builder-rspack-provider"}),"：底层基于 Rspack 来实现。"]}),"\n"]}),"\n",(0,d.jsxs)(r.h2,{id:"modernjs",children:["Modern.js",(0,d.jsx)(r.a,{className:"header-anchor","aria-hidden":"true",href:"#modernjs",children:"#"})]}),"\n",(0,d.jsx)(r.p,{children:"Modern.js 是字节跳动 Web 工程体系的开源版本，它提供多个解决方案，来帮助开发者解决不同研发场景下的问题。"}),"\n",(0,d.jsxs)(r.ul,{children:["\n",(0,d.jsxs)(r.li,{children:[(0,d.jsx)(r.a,{href:"https://github.com/web-infra-dev/modern.js",target:"_blank",rel:"noopener noreferrer",children:"Modern.js 代码仓库"}),"。"]}),"\n"]}),"\n",(0,d.jsxs)(r.h2,{id:"edenx",children:["EdenX",(0,d.jsx)(r.a,{className:"header-anchor","aria-hidden":"true",href:"#edenx",children:"#"})]}),"\n",(0,d.jsx)(r.p,{children:"字节跳动内部的 Web 工程方案，基于 Modern.js 实现。"})]})}var u=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},r=Object.assign({},(0,s.useMDXComponents)(),e.components).wrapper;return r?(0,d.jsx)(r,Object.assign({},e,{children:(0,d.jsx)(h,e)})):h(e)}},67738:function(e,r,n){"use strict";Object.defineProperty(r,"__esModule",{value:!0}),Object.defineProperty(r,"default",{enumerable:!0,get:function(){return t}});var d=n("9880"),s=n("23169");function i(e){var r=Object.assign({p:"p",img:"img"},(0,s.useMDXComponents)(),e.components);return(0,d.jsxs)(d.Fragment,{children:[(0,d.jsx)(r.p,{children:"Builder 指的是构建引擎，它的目标是「复用构建工具的最佳实践」。"}),"\n",(0,d.jsx)(r.p,{children:"因为 webpack 等打包工具是比较底层的，如果我们基于 webpack 来构建一个项目，需要充分理解 webpack 的各个配置项和三方插件，并进行繁琐的配置组合和调试工作。"}),"\n",(0,d.jsx)(r.p,{children:"而 Builder 比 Bundler 的封装程度更高，并默认集成代码转换、代码压缩等能力。通过接入 Builder，你可以快速获得构建 Web 应用的能力。"}),"\n",(0,d.jsx)(r.p,{children:"Modern.js Builder 内部的分层如下："}),"\n",(0,d.jsx)(r.p,{children:(0,d.jsx)(r.img,{src:"https://lf3-static.bytednsdoc.com/obj/eden-cn/zq-uylkvT/ljhwZthlaukjlkulzlp/builder-struct-10092.png",alt:""})})]})}var t=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},r=Object.assign({},(0,s.useMDXComponents)(),e.components).wrapper;return r?(0,d.jsx)(r,Object.assign({},e,{children:(0,d.jsx)(i,e)})):i(e)}},84497:function(e,r,n){"use strict";Object.defineProperty(r,"__esModule",{value:!0}),Object.defineProperty(r,"default",{enumerable:!0,get:function(){return t}});var d=n("9880"),s=n("23169");function i(e){var r=Object.assign({p:"p",a:"a"},(0,s.useMDXComponents)(),e.components);return(0,d.jsxs)(d.Fragment,{children:[(0,d.jsxs)(r.p,{children:["指 ",(0,d.jsx)(r.a,{href:"https://webpack.js.org/",target:"_blank",rel:"noopener noreferrer",children:"webpack"}),"、",(0,d.jsx)(r.a,{href:"https://www.rspack.dev/",target:"_blank",rel:"noopener noreferrer",children:"Rspack"})," 等模块打包工具。"]}),"\n",(0,d.jsx)(r.p,{children:"打包工具的主要目标是将 JavaScript、CSS 等文件打包在一起，打包后的文件可以在浏览器、Node.js 等环境中使用。当 Bundler 处理 Web 应用时，它会构建一个依赖关系图，其中包含应用需要的各个模块，然后将所有模块打包成一个或多个 bundle。"})]})}var t=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},r=Object.assign({},(0,s.useMDXComponents)(),e.components).wrapper;return r?(0,d.jsx)(r,Object.assign({},e,{children:(0,d.jsx)(i,e)})):i(e)}}}]);