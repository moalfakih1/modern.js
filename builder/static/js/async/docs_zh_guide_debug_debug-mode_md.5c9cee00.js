(self.webpackChunk_modern_js_builder_doc=self.webpackChunk_modern_js_builder_doc||[]).push([["docs_zh_guide_debug_debug-mode_md"],{2908:function(e,n,s){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),Object.defineProperty(n,"default",{enumerable:!0,get:function(){return o}});var d,r=s("15169"),c=s("43932"),i=s("9880"),l=s("23169");function a(e){var n=Object.assign({h1:"h1",a:"a",p:"p",code:"code",pre:"pre",h2:"h2"},(0,l.useMDXComponents)(),e.components);return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsxs)(n.h1,{id:"开启调试模式",children:["开启调试模式",(0,i.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#开启调试模式",children:"#"})]}),"\n",(0,i.jsxs)(n.p,{children:["为了便于排查问题，Builder 提供了调试模式，你可以在执行构建时添加 ",(0,i.jsx)(n.code,{children:"DEBUG=builder"})," 环境变量来开启 Builder 的调试模式。"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",children:"# 调试开发环境\nDEBUG=builder pnpm dev\n\n# 调试生产环境\nDEBUG=builder pnpm build\n"})}),"\n",(0,i.jsx)(n.p,{children:"在调试模式下，Builder 会输出一些额外的日志信息，并将内部最终生成的 Builder 配置和 webpack 配置写入到产物目录下，便于开发者查看和调试。"}),"\n",(0,i.jsxs)(n.h2,{id:"日志信息",children:["日志信息",(0,i.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#日志信息",children:"#"})]}),"\n",(0,i.jsxs)(n.p,{children:["在调试模式下，你会看到 Shell 中输出了一些额外的信息，其中以 ",(0,i.jsx)(n.code,{children:"debug"})," 开头的是一些流程日志，表明 Builder 内部执行了哪些操作。"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",children:"$ DEBUG=builder pnpm dev\n\ndebug   create context [1842.90 ms]\ndebug   add default plugins [1874.45 ms]\ndebug   add default plugins done [1938.57 ms]\ndebug   init plugins [2388.29 ms]\ndebug   init plugins done [2389.48 ms]\n...\n"})}),"\n",(0,i.jsx)(n.p,{children:"此外，Shell 中还会输出以下日志，表示 Builder 将内部生成的构建配置写入到磁盘中，此时你可以打开这些配置文件来查看相应的内容。"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",children:"Inspect config succeed, open following files to view the content:\n\n  - Builder Config: /Project/demo/dist/builder.config.js\n  - Webpack Config (web): /Project/demo/dist/webpack.config.web.js\n"})}),"\n",(0,i.jsxs)(n.h2,{id:"builder-配置文件",children:["Builder 配置文件",(0,i.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#builder-配置文件",children:"#"})]}),"\n",(0,i.jsxs)(n.p,{children:["在调试模式下，Builder 会自动生成 ",(0,i.jsx)(n.code,{children:"dist/builder.config.js"})," 文件，这里面包含了最终生成的 Builder 配置。在这个文件里，你可以了解到你传入的 Builder 配置在经过框架层和 Builder 处理后的最终结果。"]}),"\n",(0,i.jsx)(n.p,{children:"该文件的大致结构如下："}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-js",children:"module.exports = {\n  dev: {\n    // some configs...\n  },\n  source: {\n    // some configs...\n  },\n  // other configs...\n};\n"})}),"\n",(0,i.jsxs)(n.p,{children:["关于 Builder 配置项的完整介绍，请查看 ",(0,i.jsx)(n.a,{href:"/guide/basic/builder-config",children:"Builder 配置项"})," 章节。"]}),"\n",(0,i.jsxs)(n.h2,{id:"webpack-配置文件",children:["webpack 配置文件",(0,i.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#webpack-配置文件",children:"#"})]}),"\n",(0,i.jsxs)(n.p,{children:["如果当前项目是使用 webpack 进行构建的，那么在调试模式下，Builder 还会自动生成 ",(0,i.jsx)(n.code,{children:"dist/webpack.config.web.js"})," 文件，这里面包含了最终生成的 webpack 配置。在这个文件里，你可以了解到 Builder 最终传递给 webpack 的配置里包含了哪些内容。"]}),"\n",(0,i.jsx)(n.p,{children:"该文件的大致结构如下："}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-js",children:"module.exports = {\n  resolve: {\n    // some resolve configs...\n  },\n  module: {\n    // some webpack loaders...\n  },\n  plugins: [\n    // some webpack plugins...\n  ],\n  // other configs...\n};\n"})}),"\n",(0,i.jsxs)(n.p,{children:["此外，如果项目配置了额外的构建产物类型，比如开启了框架的 SSR 能力（对应额外的 Node.js 构建产物），在 ",(0,i.jsx)(n.code,{children:"dist"})," 目录会另外生成一份 ",(0,i.jsx)(n.code,{children:"webpack.config.node.js"})," 文件，对应 SSR 构建时的 webpack 配置。"]}),"\n",(0,i.jsxs)(n.p,{children:["关于 webpack 配置项的完整介绍，请查看 ",(0,i.jsx)(n.a,{href:"https://webpack.js.org/concepts/configuration/",target:"_blank",rel:"noopener noreferrer",children:"webpack 官方文档"}),"。"]}),"\n",(0,i.jsxs)(n.h2,{id:"rspack-配置文件",children:["Rspack 配置文件",(0,i.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#rspack-配置文件",children:"#"})]}),"\n",(0,i.jsxs)(n.p,{children:["如果当前项目是使用 Rspack 进行构建的，那么在调试模式下，Builder 还会自动生成 ",(0,i.jsx)(n.code,{children:"dist/rspack.config.web.js"})," 文件，这里面包含了最终生成的 Rspack 配置。在这个文件里，你可以了解到 Builder 最终传递给 Rspack 的配置里包含了哪些内容。"]}),"\n",(0,i.jsx)(n.p,{children:"该文件的大致结构如下："}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-js",children:"module.exports = {\n  resolve: {\n    // some resolve configs...\n  },\n  module: {\n    // some Rspack loaders...\n  },\n  plugins: [\n    // some Rspack plugins...\n  ],\n  // other configs...\n};\n"})}),"\n",(0,i.jsxs)(n.p,{children:["关于 Rspack 配置项的完整介绍，请查看 ",(0,i.jsx)(n.a,{href:"https://www.rspack.dev/zh/config.html",target:"_blank",rel:"noopener noreferrer",children:"Rspack 官方文档"}),"。"]})]})}(d=globalThis).__RSPRESS_PAGE_META||(d.__RSPRESS_PAGE_META={}),globalThis.__RSPRESS_PAGE_META["%2Fhome%2Frunner%2Fwork%2Fmodern.js%2Fmodern.js%2Fpackages%2Fdocument%2Fbuilder-doc%2Fdocs%2Fzh%2Fguide%2Fdebug%2Fdebug-mode.md"]={toc:[{text:"日志信息",id:"日志信息",depth:2},{text:"Builder 配置文件",id:"builder-配置文件",depth:2},{text:"webpack 配置文件",id:"webpack-配置文件",depth:2},{text:"Rspack 配置文件",id:"rspack-配置文件",depth:2}],title:"开启调试模式",frontmatter:{}};var o=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=Object.assign({},(0,l.useMDXComponents)(),e.components).wrapper;return n?(0,i.jsx)(n,c._(r._({},e),{children:(0,i.jsx)(a,r._({},e))})):a(e)}}}]);