(self.webpackChunkwebpack=self.webpackChunkwebpack||[]).push([["split~docs_zh_api_config-tools_mdx2"],{30197:function(e,n,d){"use strict";Object.defineProperty(n,"__esModule",{value:!0});!function(e,n){for(var d in n)Object.defineProperty(e,d,{enumerable:!0,get:n[d]})}(n,{frontmatter:function(){return c},title:function(){return i},toc:function(){return l},default:function(){return a}});var s=d("12151"),r=d("21447"),c={},i="",l=[{text:"工具集合",depth:3,id:"工具集合"},{text:"env",depth:4,id:"env"},{text:"isProd",depth:4,id:"isprod"},{text:"target",depth:4,id:"target"},{text:"isServer",depth:4,id:"isserver"},{text:"isWebWorker",depth:4,id:"iswebworker"},{text:"HtmlPlugin",depth:3,id:"htmlplugin"},{text:"CHAIN_ID",depth:4,id:"chain_id"},{text:"CHAIN_ID.ONE_OF",depth:3,id:"chain_id.one_of"},{text:"CHAIN_ID.USE",depth:3,id:"chain_id.use"},{text:"CHAIN_ID.PLUGIN",depth:3,id:"chain_id.plugin"},{text:"常用 BundlerChain 使用示例",depth:3,id:"常用-bundlerchain-使用示例"}];function h(e){var n=Object.assign({ul:"ul",li:"li",strong:"strong",code:"code",p:"p",div:"div",a:"a",blockquote:"blockquote",h3:"h3",h4:"h4",button:"button",pre:"pre",h5:"h5",table:"table",thead:"thead",tr:"tr",th:"th",tbody:"tbody",td:"td"},(0,r.useMDXComponents)(),e.components);return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"类型："})," ",(0,s.jsx)(n.code,{children:"Function | undefined"})]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"默认值："})," ",(0,s.jsx)(n.code,{children:"undefined"})]}),"\n"]}),"\n",(0,s.jsxs)(n.p,{children:["你可以通过 ",(0,s.jsx)(n.code,{children:"tools.bundlerChain"})," 来修改默认的 webpack 和 Rspack 配置，值为 ",(0,s.jsx)(n.code,{children:"Function"})," 类型，接收两个参数："]}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["第一个参数为 ",(0,s.jsx)(n.code,{children:"bundler-chain"})," 对象实例，你可以通过这个实例来修改 webpack 和 Rspack 的配置。"]}),"\n",(0,s.jsxs)(n.li,{children:["第二个参数为一个工具集合，包括",(0,s.jsx)(n.code,{children:"env"}),"、",(0,s.jsx)(n.code,{children:"isProd"}),"、",(0,s.jsx)(n.code,{children:"CHAIN_ID"})," 等。"]}),"\n"]}),"\n",(0,s.jsxs)(n.div,{className:"modern-directive tip",children:[(0,s.jsx)(n.div,{className:"modern-directive-title",children:"什么是 BundlerChain"}),(0,s.jsxs)(n.div,{className:"modern-directive-content",children:["\n",(0,s.jsx)(n.p,{children:"Bundler chain 是 webpack chain 的子集，其中包含一部分 webpack chain API，你可以用它来同时修改 webpack 和 Rspack 的配置。"}),"\n",(0,s.jsxs)(n.p,{children:["通过 bundler chain 修改的配置，在 webpack 和 Rspack 构建时均可生效。需要注意的是，bundler chain 只支持修改 webpack 和 Rspack 间无差异部分的配置。如，修改 devtool 配置项(webpack 和 Rspack 的 devtool 属性值类型相同)，或添加一个",(0,s.jsx)(n.a,{href:"https://www.rspack.dev/zh/guide/plugin-compat.html",target:"_blank",rel:"noopener noreferrer",children:"Rspack 兼容"}),"的 webpack 插件。"]}),"\n"]})]}),"\n",(0,s.jsxs)(n.blockquote,{children:["\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.code,{children:"tools.bundlerChain"})," 的执行时机早于 tools.webpackChain / tools.webpack / tools.rspack，因此会被其他几个配置中的修改所覆盖。"]}),"\n"]}),"\n",(0,s.jsxs)(n.h3,{id:"工具集合",children:["工具集合",(0,s.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#工具集合",children:"#"})]}),"\n",(0,s.jsxs)(n.h4,{id:"env",children:["env",(0,s.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#env",children:"#"})]}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"类型："})," ",(0,s.jsx)(n.code,{children:"'development' | 'production' | 'test'"})]}),"\n"]}),"\n",(0,s.jsx)(n.p,{children:"通过 env 参数可以判断当前环境为 development、production 还是 test。比如："}),"\n",(0,s.jsx)(n.div,{className:"language-",children:(0,s.jsxs)(n.div,{className:"modern-code-content",children:[(0,s.jsx)(n.button,{className:"copy"}),(0,s.jsx)(n.pre,{className:"code",children:(0,s.jsx)(n.code,{className:"language-js",children:"export default {\n  tools: {\n    bundlerChain: (chain, { env }) => {\n      if (env === 'development') {\n        chain.devtool('cheap-module-eval-source-map');\n      }\n    },\n  },\n};\n"})})]})}),"\n",(0,s.jsxs)(n.h4,{id:"isprod",children:["isProd",(0,s.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#isprod",children:"#"})]}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"类型："})," ",(0,s.jsx)(n.code,{children:"boolean"})]}),"\n"]}),"\n",(0,s.jsx)(n.p,{children:"通过 isProd 参数可以判断当前环境是否为 production。比如："}),"\n",(0,s.jsx)(n.div,{className:"language-",children:(0,s.jsxs)(n.div,{className:"modern-code-content",children:[(0,s.jsx)(n.button,{className:"copy"}),(0,s.jsx)(n.pre,{className:"code",children:(0,s.jsx)(n.code,{className:"language-js",children:"export default {\n  tools: {\n    bundlerChain: (chain, { isProd }) => {\n      if (isProd) {\n        chain.devtool('source-map');\n      }\n    },\n  },\n};\n"})})]})}),"\n",(0,s.jsxs)(n.h4,{id:"target",children:["target",(0,s.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#target",children:"#"})]}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"类型："})," ",(0,s.jsx)(n.code,{children:"'web' | 'node' | 'modern-web' | 'web-worker'"})]}),"\n"]}),"\n",(0,s.jsx)(n.p,{children:"通过 target 参数可以判断当前构建的目标运行时环境。比如："}),"\n",(0,s.jsx)(n.div,{className:"language-",children:(0,s.jsxs)(n.div,{className:"modern-code-content",children:[(0,s.jsx)(n.button,{className:"copy"}),(0,s.jsx)(n.pre,{className:"code",children:(0,s.jsx)(n.code,{className:"language-js",children:"export default {\n  tools: {\n    bundlerChain: (chain, { target }) => {\n      if (target === 'node') {\n        // ...\n      }\n    },\n  },\n};\n"})})]})}),"\n",(0,s.jsxs)(n.h4,{id:"isserver",children:["isServer",(0,s.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#isserver",children:"#"})]}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"类型："})," ",(0,s.jsx)(n.code,{children:"boolean"})]}),"\n"]}),"\n",(0,s.jsxs)(n.p,{children:["判断当前构建的目标运行时环境是否为 ",(0,s.jsx)(n.code,{children:"node"}),"，等价于 ",(0,s.jsx)(n.code,{children:"target === 'node'"}),"。"]}),"\n",(0,s.jsx)(n.div,{className:"language-",children:(0,s.jsxs)(n.div,{className:"modern-code-content",children:[(0,s.jsx)(n.button,{className:"copy"}),(0,s.jsx)(n.pre,{className:"code",children:(0,s.jsx)(n.code,{className:"language-js",children:"export default {\n  tools: {\n    bundlerChain: (chain, { isServer }) => {\n      if (isServer) {\n        // ...\n      }\n    },\n  },\n};\n"})})]})}),"\n",(0,s.jsxs)(n.h4,{id:"iswebworker",children:["isWebWorker",(0,s.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#iswebworker",children:"#"})]}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"类型："})," ",(0,s.jsx)(n.code,{children:"boolean"})]}),"\n"]}),"\n",(0,s.jsxs)(n.p,{children:["判断当前构建的目标运行时环境是否为 ",(0,s.jsx)(n.code,{children:"web-worker"}),"，等价于 ",(0,s.jsx)(n.code,{children:"target === 'web-worker'"}),"。"]}),"\n",(0,s.jsx)(n.div,{className:"language-",children:(0,s.jsxs)(n.div,{className:"modern-code-content",children:[(0,s.jsx)(n.button,{className:"copy"}),(0,s.jsx)(n.pre,{className:"code",children:(0,s.jsx)(n.code,{className:"language-js",children:"export default {\n  tools: {\n    bundlerChain: (chain, { isWebWorker }) => {\n      if (isWebWorker) {\n        // ...\n      }\n    },\n  },\n};\n"})})]})}),"\n",(0,s.jsxs)(n.h3,{id:"htmlplugin",children:["HtmlPlugin",(0,s.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#htmlplugin",children:"#"})]}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"类型："})," ",(0,s.jsx)(n.code,{children:"typeof import('html-webpack-plugin') | import('@rspack/plugin-html') "})]}),"\n"]}),"\n",(0,s.jsx)(n.p,{children:"通过这个参数你可以拿到 webpack 或 Rspack 中的 HtmlPlugin 实例。"}),"\n",(0,s.jsx)(n.div,{className:"language-",children:(0,s.jsxs)(n.div,{className:"modern-code-content",children:[(0,s.jsx)(n.button,{className:"copy"}),(0,s.jsx)(n.pre,{className:"code",children:(0,s.jsx)(n.code,{className:"language-js",children:"export default {\n  tools: {\n    bundlerChain: (chain, { HtmlPlugin }) => {\n      console.log(HtmlPlugin);\n    },\n  },\n};\n"})})]})}),"\n",(0,s.jsxs)(n.h4,{id:"chain_id",children:["CHAIN_ID",(0,s.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#chain_id",children:"#"})]}),"\n",(0,s.jsx)(n.p,{children:"Builder 中预先定义了一些常用的 Chain ID，你可以通过这些 ID 来定位到内置的 Rule 或 Plugin。"}),"\n",(0,s.jsxs)(n.h5,{id:"chain_id.rule",children:["CHAIN_ID.RULE",(0,s.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#chain_id.rule",children:"#"})]}),"\n",(0,s.jsxs)(n.table,{children:["\n",(0,s.jsxs)(n.thead,{children:["\n",(0,s.jsxs)(n.tr,{children:["\n",(0,s.jsx)(n.th,{children:"ID"}),"\n",(0,s.jsx)(n.th,{children:"描述"}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(n.tbody,{children:["\n",(0,s.jsxs)(n.tr,{children:["\n",(0,s.jsx)(n.td,{children:(0,s.jsx)(n.code,{children:"RULE.CSS"})}),"\n",(0,s.jsxs)(n.td,{children:["处理 ",(0,s.jsx)(n.code,{children:"css"})," 的规则"]}),"\n"]}),"\n",(0,s.jsxs)(n.tr,{children:["\n",(0,s.jsx)(n.td,{children:(0,s.jsx)(n.code,{children:"RULE.LESS"})}),"\n",(0,s.jsxs)(n.td,{children:["处理 ",(0,s.jsx)(n.code,{children:"less"})," 的规则"]}),"\n"]}),"\n",(0,s.jsxs)(n.tr,{children:["\n",(0,s.jsx)(n.td,{children:(0,s.jsx)(n.code,{children:"RULE.SASS"})}),"\n",(0,s.jsxs)(n.td,{children:["处理 ",(0,s.jsx)(n.code,{children:"sass"})," 的规则"]}),"\n"]}),"\n",(0,s.jsxs)(n.tr,{children:["\n",(0,s.jsx)(n.td,{children:(0,s.jsx)(n.code,{children:"RULE.TOML"})}),"\n",(0,s.jsxs)(n.td,{children:["处理 ",(0,s.jsx)(n.code,{children:"toml"})," 的规则"]}),"\n"]}),"\n",(0,s.jsxs)(n.tr,{children:["\n",(0,s.jsx)(n.td,{children:(0,s.jsx)(n.code,{children:"RULE.YAML"})}),"\n",(0,s.jsxs)(n.td,{children:["处理 ",(0,s.jsx)(n.code,{children:"yaml"})," 的规则"]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(n.h3,{id:"chain_id.one_of",children:["CHAIN_ID.ONE_OF",(0,s.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#chain_id.one_of",children:"#"})]}),"\n",(0,s.jsxs)(n.p,{children:["通过 ",(0,s.jsx)(n.code,{children:"ONE_OF.XXX"})," 可以匹配到规则数组中的某一类规则。"]}),"\n",(0,s.jsxs)(n.table,{children:["\n",(0,s.jsxs)(n.thead,{children:["\n",(0,s.jsxs)(n.tr,{children:["\n",(0,s.jsx)(n.th,{children:"ID"}),"\n",(0,s.jsx)(n.th,{children:"描述"}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(n.tbody,{children:["\n",(0,s.jsxs)(n.tr,{children:["\n",(0,s.jsx)(n.td,{children:(0,s.jsx)(n.code,{children:"ONE_OF.SVG"})}),"\n",(0,s.jsx)(n.td,{children:"处理 SVG 的规则，在 data URI 和单独文件之间自动选择"}),"\n"]}),"\n",(0,s.jsxs)(n.tr,{children:["\n",(0,s.jsx)(n.td,{children:(0,s.jsx)(n.code,{children:"ONE_OF.SVG_URL"})}),"\n",(0,s.jsx)(n.td,{children:"处理 SVG 的规则，输出为单独文件"}),"\n"]}),"\n",(0,s.jsxs)(n.tr,{children:["\n",(0,s.jsx)(n.td,{children:(0,s.jsx)(n.code,{children:"ONE_OF.SVG_INLINE"})}),"\n",(0,s.jsx)(n.td,{children:"处理 SVG 的规则，作为 data URI 内联到 bundle 中"}),"\n"]}),"\n",(0,s.jsxs)(n.tr,{children:["\n",(0,s.jsx)(n.td,{children:(0,s.jsx)(n.code,{children:"ONE_OF.SVG_ASSETS"})}),"\n",(0,s.jsx)(n.td,{children:"处理 SVG 的规则，在 data URI 和单独文件之间自动选择"}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(n.h3,{id:"chain_id.use",children:["CHAIN_ID.USE",(0,s.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#chain_id.use",children:"#"})]}),"\n",(0,s.jsxs)(n.p,{children:["通过 ",(0,s.jsx)(n.code,{children:"USE.XXX"})," 可以匹配到对应的 loader。"]}),"\n",(0,s.jsxs)(n.table,{children:["\n",(0,s.jsxs)(n.thead,{children:["\n",(0,s.jsxs)(n.tr,{children:["\n",(0,s.jsx)(n.th,{children:"ID"}),"\n",(0,s.jsx)(n.th,{children:"描述"}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(n.tbody,{children:["\n",(0,s.jsxs)(n.tr,{children:["\n",(0,s.jsx)(n.td,{children:(0,s.jsx)(n.code,{children:"USE.LESS"})}),"\n",(0,s.jsxs)(n.td,{children:["对应 ",(0,s.jsx)(n.code,{children:"less-loader"})]}),"\n"]}),"\n",(0,s.jsxs)(n.tr,{children:["\n",(0,s.jsx)(n.td,{children:(0,s.jsx)(n.code,{children:"USE.SASS"})}),"\n",(0,s.jsxs)(n.td,{children:["对应 ",(0,s.jsx)(n.code,{children:"sass-loader"})]}),"\n"]}),"\n",(0,s.jsxs)(n.tr,{children:["\n",(0,s.jsx)(n.td,{children:(0,s.jsx)(n.code,{children:"USE.TOML"})}),"\n",(0,s.jsxs)(n.td,{children:["对应 ",(0,s.jsx)(n.code,{children:"toml-loader"})]}),"\n"]}),"\n",(0,s.jsxs)(n.tr,{children:["\n",(0,s.jsx)(n.td,{children:(0,s.jsx)(n.code,{children:"USE.YAML"})}),"\n",(0,s.jsxs)(n.td,{children:["对应 ",(0,s.jsx)(n.code,{children:"yaml-loader"})]}),"\n"]}),"\n",(0,s.jsxs)(n.tr,{children:["\n",(0,s.jsx)(n.td,{children:(0,s.jsx)(n.code,{children:"USE.SVGR"})}),"\n",(0,s.jsxs)(n.td,{children:["对应 ",(0,s.jsx)(n.code,{children:"@svgr/webpack"})]}),"\n"]}),"\n",(0,s.jsxs)(n.tr,{children:["\n",(0,s.jsx)(n.td,{children:(0,s.jsx)(n.code,{children:"USE.POSTCSS"})}),"\n",(0,s.jsxs)(n.td,{children:["对应 ",(0,s.jsx)(n.code,{children:"postcss-loader"})]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(n.h3,{id:"chain_id.plugin",children:["CHAIN_ID.PLUGIN",(0,s.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#chain_id.plugin",children:"#"})]}),"\n",(0,s.jsxs)(n.p,{children:["通过 ",(0,s.jsx)(n.code,{children:"PLUGIN.XXX"})," 可以匹配到对应的 plugin。"]}),"\n",(0,s.jsxs)(n.table,{children:["\n",(0,s.jsxs)(n.thead,{children:["\n",(0,s.jsxs)(n.tr,{children:["\n",(0,s.jsx)(n.th,{children:"ID"}),"\n",(0,s.jsx)(n.th,{children:"描述"}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(n.tbody,{children:["\n",(0,s.jsxs)(n.tr,{children:["\n",(0,s.jsx)(n.td,{children:(0,s.jsx)(n.code,{children:"PLUGIN.HTML"})}),"\n",(0,s.jsxs)(n.td,{children:["对应 ",(0,s.jsx)(n.code,{children:"HtmlPlugin"}),"，使用时需要拼接 entry 名称：",(0,s.jsx)(n.code,{children:"${PLUGIN.HTML}-${entryName}"})]}),"\n"]}),"\n",(0,s.jsxs)(n.tr,{children:["\n",(0,s.jsx)(n.td,{children:(0,s.jsx)(n.code,{children:"PLUGIN.APP_ICON"})}),"\n",(0,s.jsxs)(n.td,{children:["对应 ",(0,s.jsx)(n.code,{children:"AppIconPlugin"})]}),"\n"]}),"\n",(0,s.jsxs)(n.tr,{children:["\n",(0,s.jsx)(n.td,{children:(0,s.jsx)(n.code,{children:"PLUGIN.INLINE_HTML"})}),"\n",(0,s.jsxs)(n.td,{children:["对应 ",(0,s.jsx)(n.code,{children:"InlineChunkHtmlPlugin"})]}),"\n"]}),"\n",(0,s.jsxs)(n.tr,{children:["\n",(0,s.jsx)(n.td,{children:(0,s.jsx)(n.code,{children:"PLUGIN.BUNDLE_ANALYZER"})}),"\n",(0,s.jsxs)(n.td,{children:["对应 ",(0,s.jsx)(n.code,{children:"WebpackBundleAnalyzer"})]}),"\n"]}),"\n",(0,s.jsxs)(n.tr,{children:["\n",(0,s.jsx)(n.td,{children:(0,s.jsx)(n.code,{children:"PLUGIN.BOTTOM_TEMPLATE"})}),"\n",(0,s.jsxs)(n.td,{children:["对应 ",(0,s.jsx)(n.code,{children:"BottomTemplatePlugin"})]}),"\n"]}),"\n",(0,s.jsxs)(n.tr,{children:["\n",(0,s.jsx)(n.td,{children:(0,s.jsx)(n.code,{children:"PLUGIN.ASSETS_RETRY"})}),"\n",(0,s.jsxs)(n.td,{children:["对应 Builder 中的 webpack 静态资源重试插件 ",(0,s.jsx)(n.code,{children:"WebpackAssetsRetryPlugin"})]}),"\n"]}),"\n",(0,s.jsxs)(n.tr,{children:["\n",(0,s.jsx)(n.td,{children:(0,s.jsx)(n.code,{children:"PLUGIN.AUTO_SET_ROOT_SIZE"})}),"\n",(0,s.jsxs)(n.td,{children:["对应 Builder 中的自动设置根字体大小插件 ",(0,s.jsx)(n.code,{children:"AutoSetRootSizePlugin"})]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(n.h3,{id:"常用-bundlerchain-使用示例",children:["常用 BundlerChain 使用示例",(0,s.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#常用-bundlerchain-使用示例",children:"#"})]}),"\n",(0,s.jsxs)(n.p,{children:["BundlerChain 的使用可参考：",(0,s.jsx)(n.a,{href:"https://modernjs.dev/builder/guide/advanced/custom-webpack-config.html#%E4%BD%BF%E7%94%A8-webpack-chain",target:"_blank",rel:"noopener noreferrer",children:"常用 WebpackChain 使用示例"}),"。"]})]})}var a=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=Object.assign({},(0,r.useMDXComponents)(),e.components).wrapper;return n?(0,s.jsx)(n,Object.assign({},e,{children:(0,s.jsx)(h,e)})):h(e)}}}]);