(self.webpackChunk_modern_js_builder_doc=self.webpackChunk_modern_js_builder_doc||[]).push([["docs_zh_guide_advanced_custom-webpack-config_md"],{24920:function(e,n,c){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),Object.defineProperty(n,"default",{enumerable:!0,get:function(){return l}});var i,a=c("15169"),d=c("43932"),r=c("9880"),s=c("23169");function h(e){var n=Object.assign({h1:"h1",a:"a",p:"p",h2:"h2",pre:"pre",code:"code",div:"div",h3:"h3",ul:"ul",li:"li",table:"table",thead:"thead",tr:"tr",th:"th",tbody:"tbody",td:"td"},(0,s.useMDXComponents)(),e.components);return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(n.h1,{id:"修改-webpack-配置",children:["修改 webpack 配置",(0,r.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#修改-webpack-配置",children:"#"})]}),"\n",(0,r.jsx)(n.p,{children:"Builder 支持直接修改 webpack 配置对象，也支持通过 webpack-chain 来深度定制 webpack 配置。"}),"\n",(0,r.jsxs)(n.h2,{id:"修改-webpack-配置对象",children:["修改 webpack 配置对象",(0,r.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#修改-webpack-配置对象",children:"#"})]}),"\n",(0,r.jsxs)(n.p,{children:["你可以使用 ",(0,r.jsx)(n.a,{href:"/api/config-tools#toolswebpack",children:"tools.webpack"})," 来修改 webpack 配置对象。"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-ts",children:"export default {\n  tools: {\n    webpack: (config, { env }) => {\n      if (env === 'development') {\n        config.devtool = 'cheap-module-eval-source-map';\n      }\n      return config;\n    },\n  },\n};\n"})}),"\n",(0,r.jsxs)(n.div,{className:"modern-directive tip",children:[(0,r.jsx)(n.div,{className:"modern-directive-title",children:"何时使用"}),(0,r.jsx)(n.div,{className:"modern-directive-content",children:(0,r.jsxs)(n.p,{children:["当你只需要修改少量 webpack 配置时，可以使用 ",(0,r.jsx)(n.code,{children:"tools.webpack"}),"。但如果你需要修改 Builder 内置的 webpack plugins 或 loaders，请使用 ",(0,r.jsx)(n.code,{children:"tools.webpackChain"})," 进行修改。\n"]})})]}),"\n",(0,r.jsxs)(n.h2,{id:"使用-webpack-chain",children:["使用 webpack-chain",(0,r.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#使用-webpack-chain",children:"#"})]}),"\n",(0,r.jsx)(n.p,{children:"webpack-chain 是区别于直接修改 webpack 配置的另一种配置修改方式，相较于直接修改 webpack 配置对象，webpack-chain 不仅支持链式调用，并且能够基于 id 来修改内置的 Rule 或 Plugin."}),"\n",(0,r.jsxs)(n.h3,{id:"toolswebpackchain-配置项",children:["tools.webpackChain 配置项",(0,r.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#toolswebpackchain-配置项",children:"#"})]}),"\n",(0,r.jsxs)(n.p,{children:["Builder 提供了 ",(0,r.jsx)(n.a,{href:"/api/config-tools#toolswebpackchain",children:"tools.webpackChain"})," 配置项来修改 webpack-chain。"]}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.code,{children:"tools.webpackChain"})," 的值为 ",(0,r.jsx)(n.code,{children:"Function"})," 类型，接收两个参数："]}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["第一个参数为 ",(0,r.jsx)(n.code,{children:"webpack-chain"})," 实例对象，你可以通过这个实例来修改默认的 webpack 配置。"]}),"\n",(0,r.jsxs)(n.li,{children:["第二个参数为一个",(0,r.jsx)(n.a,{href:"/api/config-tools#%E5%B7%A5%E5%85%B7%E9%9B%86%E5%90%88-2",children:"工具集合"}),"，包括 ",(0,r.jsx)(n.code,{children:"env"}),"、",(0,r.jsx)(n.code,{children:"isProd"}),"、",(0,r.jsx)(n.code,{children:"CHAIN_ID"})," 等。"]}),"\n"]}),"\n",(0,r.jsx)(n.p,{children:"下面是一个基本示例："}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-ts",children:"export default {\n  tools: {\n    webpackChain: (chain, { env }) => {\n      if (env === 'development') {\n        chain.devtool('cheap-module-eval-source-map');\n      }\n    },\n  },\n};\n"})}),"\n",(0,r.jsxs)(n.h2,{id:"webpack-chain-基础知识",children:["webpack-chain 基础知识",(0,r.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#webpack-chain-基础知识",children:"#"})]}),"\n",(0,r.jsx)(n.p,{children:"在开始使用 webpack-chain 来修改 webpack 配置之前，建议你先了解一些基础知识。"}),"\n",(0,r.jsxs)(n.h3,{id:"webpack-chain-是如何快速定位的",children:["webpack-chain 是如何快速定位的",(0,r.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#webpack-chain-是如何快速定位的",children:"#"})]}),"\n",(0,r.jsx)(n.p,{children:"简单来说，webpack-chain 要求使用者为每个 Rule、Loader、Plugin、Minimizer 都设置一个独一无二的 id，通过这个 id，就可以便捷地从嵌套层级很深的对象中找到所需的对象。"}),"\n",(0,r.jsxs)(n.p,{children:["Builder 将内部定义的全部 id 都通过 ",(0,r.jsx)(n.code,{children:"CHAIN_ID"})," 对象导出，因此你可以通过这些导出的 id，快速定位到你想要修改的 Loader 或 Plugin，而不需要在 webpack 配置对象里通过复杂的遍历寻找。"]}),"\n",(0,r.jsxs)(n.p,{children:["比如通过 ",(0,r.jsx)(n.code,{children:"CHAIN_ID.PLUGIN.HTML"})," 来删除内置的 HTML 插件："]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-ts",children:"export default {\n  tools: {\n    webpackChain: (chain, { webpack, CHAIN_ID }) => {\n      //\n      chain.plugins.delete(CHAIN_ID.PLUGIN.HTML);\n    },\n  },\n};\n"})}),"\n",(0,r.jsxs)(n.h3,{id:"webpack-chain-id-的类型",children:["webpack-chain id 的类型",(0,r.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#webpack-chain-id-的类型",children:"#"})]}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.code,{children:"CHAIN_ID"})," 对象包含了多种 id，对应的含义如下："]}),"\n",(0,r.jsxs)(n.table,{children:["\n",(0,r.jsxs)(n.thead,{children:["\n",(0,r.jsxs)(n.tr,{children:["\n",(0,r.jsx)(n.th,{children:"CHAIN_ID 字段"}),"\n",(0,r.jsx)(n.th,{children:"对应的配置"}),"\n",(0,r.jsx)(n.th,{children:"描述"}),"\n"]}),"\n"]}),"\n",(0,r.jsxs)(n.tbody,{children:["\n",(0,r.jsxs)(n.tr,{children:["\n",(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"CHAIN_ID.PLUGIN"})}),"\n",(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"plugins[i]"})}),"\n",(0,r.jsx)(n.td,{children:"对应 webpack 配置中的一个插件"}),"\n"]}),"\n",(0,r.jsxs)(n.tr,{children:["\n",(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"CHAIN_ID.RULE"})}),"\n",(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"module.rules[i]"})}),"\n",(0,r.jsx)(n.td,{children:"对应 webpack 配置中的一个 Rule"}),"\n"]}),"\n",(0,r.jsxs)(n.tr,{children:["\n",(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"CHAIN_ID.USE"})}),"\n",(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"module.rules[i].loader"})}),"\n",(0,r.jsx)(n.td,{children:"对应 webpack 配置中的一个 Loader"}),"\n"]}),"\n",(0,r.jsxs)(n.tr,{children:["\n",(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"CHAIN_ID.MINIMIZER"})}),"\n",(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"optimization.minimizer"})}),"\n",(0,r.jsx)(n.td,{children:"对应 webpack 配置中的一个压缩工具"}),"\n"]}),"\n",(0,r.jsxs)(n.tr,{children:["\n",(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"CHAIN_ID.RESOLVE_PLUGIN"})}),"\n",(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"resolve.plugins[i]"})}),"\n",(0,r.jsx)(n.td,{children:"对应 webpack 配置中的中的一个 Resolve 插件"}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,r.jsxs)(n.h2,{id:"webpack-chain-示例",children:["webpack-chain 示例",(0,r.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#webpack-chain-示例",children:"#"})]}),"\n",(0,r.jsxs)(n.h3,{id:"新增/修改/删除-loader",children:["新增/修改/删除 loader",(0,r.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#新增/修改/删除-loader",children:"#"})]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-js",children:"export default {\n  tools: {\n    webpackChain: (chain, { CHAIN_ID }) => {\n      // 新增 loader\n      chain.module\n        .rule('md')\n        .test(/\\.md$/)\n        .use('md-loader')\n        .loader('md-loader');\n\n      // 修改 loader\n      chain.module\n        .rule(CHAIN_ID.RULE.JS)\n        .use(CHAIN_ID.USE.BABEL)\n        .tap(options => {\n          options.plugins.push('babel-plugin-xxx');\n          return options;\n        });\n\n      // 删除 loader\n      chain.module.rule(CHAIN_ID.RULE.JS).uses.delete(CHAIN_ID.USE.BABEL);\n    },\n  },\n};\n"})}),"\n",(0,r.jsxs)(n.h3,{id:"新增/修改/删除-plugin",children:["新增/修改/删除 plugin",(0,r.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#新增/修改/删除-plugin",children:"#"})]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-js",children:"export default {\n  tools: {\n    webpackChain: (chain, { webpack, CHAIN_ID }) => {\n      // 新增插件\n      chain.plugin('custom-define').use(webpack.DefinePlugin, [\n        {\n          'process.env': {\n            NODE_ENV: JSON.stringify(process.env.NODE_ENV),\n          },\n        },\n      ]);\n\n      // 修改插件\n      chain.plugin(CHAIN_ID.PLUGIN.HMR).tap(options => {\n        options[0].fullBuildTimeout = 200;\n        return options;\n      });\n\n      // 删除插件\n      chain.plugins.delete(CHAIN_ID.PLUGIN.HMR);\n    },\n  },\n};\n"})}),"\n",(0,r.jsxs)(n.h3,{id:"根据不同环境修改配置",children:["根据不同环境修改配置",(0,r.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#根据不同环境修改配置",children:"#"})]}),"\n",(0,r.jsx)(n.p,{children:"在工具集合中你可以拿到各种环境的标识，如开发/生产/测试环境构建、 SSR 构建、Web Worker 构建，从而实现不同环境下的配置修改。"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-js",children:"export default {\n  tools: {\n    webpackChain: (chain, { env, isProd, target, isServer, isWebWorker }) => {\n      if (utils.env === 'development' || utils.env === 'test') {\n        // ...\n      }\n      if (utils.isProd) {\n        // ...\n      }\n      if (utils.target === 'node') {\n        // ...\n      }\n      if (utils.isServer) {\n        // ...\n      }\n      if (utils.isWebWorker) {\n        // ...\n      }\n    },\n  },\n};\n"})}),"\n",(0,r.jsxs)(n.p,{children:["以上是一些常见的配置示例，完整的 webpack-chain API 请见 ",(0,r.jsx)(n.a,{href:"https://github.com/neutrinojs/webpack-chain",target:"_blank",rel:"noopener noreferrer",children:"webpack-chain 文档"}),"。"]})]})}(i=globalThis).__RSPRESS_PAGE_META||(i.__RSPRESS_PAGE_META={}),globalThis.__RSPRESS_PAGE_META["/home/runner/work/modern.js/modern.js/packages/document/builder-doc/docs/zh/guide/advanced/custom-webpack-config.md"]={toc:[{text:"修改 webpack 配置对象",id:"修改-webpack-配置对象",depth:2},{text:"使用 webpack-chain",id:"使用-webpack-chain",depth:2},{text:"tools.webpackChain 配置项",id:"toolswebpackchain-配置项",depth:3},{text:"webpack-chain 基础知识",id:"webpack-chain-基础知识",depth:2},{text:"webpack-chain 是如何快速定位的",id:"webpack-chain-是如何快速定位的",depth:3},{text:"webpack-chain id 的类型",id:"webpack-chain-id-的类型",depth:3},{text:"webpack-chain 示例",id:"webpack-chain-示例",depth:2},{text:"新增/修改/删除 loader",id:"新增/修改/删除-loader",depth:3},{text:"新增/修改/删除 plugin",id:"新增/修改/删除-plugin",depth:3},{text:"根据不同环境修改配置",id:"根据不同环境修改配置",depth:3}],title:"修改 webpack 配置",frontmatter:{}};var l=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=Object.assign({},(0,s.useMDXComponents)(),e.components).wrapper;return n?(0,r.jsx)(n,d._(a._({},e),{children:(0,r.jsx)(h,a._({},e))})):h(e)}}}]);