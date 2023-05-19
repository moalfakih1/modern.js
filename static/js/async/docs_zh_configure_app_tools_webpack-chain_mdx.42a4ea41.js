(self.webpackChunk_modern_js_main_doc=self.webpackChunk_modern_js_main_doc||[]).push([["docs_zh_configure_app_tools_webpack-chain_mdx"],{90269:function(n,e,d){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),Object.defineProperty(e,"default",{enumerable:!0,get:function(){return i}});var s=d("9880"),c=d("23169");function r(n){var e=Object.assign({ul:"ul",li:"li",strong:"strong",code:"code",p:"p",blockquote:"blockquote",h3:"h3",a:"a",h4:"h4",div:"div",pre:"pre",h5:"h5",table:"table",thead:"thead",tr:"tr",th:"th",tbody:"tbody",td:"td"},(0,c.useMDXComponents)(),n.components);return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)(e.ul,{children:["\n",(0,s.jsxs)(e.li,{children:[(0,s.jsx)(e.strong,{children:"类型："})," ",(0,s.jsx)(e.code,{children:"Function | undefined"})]}),"\n",(0,s.jsxs)(e.li,{children:[(0,s.jsx)(e.strong,{children:"默认值："})," ",(0,s.jsx)(e.code,{children:"undefined"})]}),"\n",(0,s.jsxs)(e.li,{children:[(0,s.jsx)(e.strong,{children:"打包工具："})," ",(0,s.jsx)(e.code,{children:"仅支持 webpack"})]}),"\n"]}),"\n",(0,s.jsxs)(e.p,{children:["你可以通过 ",(0,s.jsx)(e.code,{children:"tools.webpackChain"})," 来修改默认的 webpack 配置，它的值为 ",(0,s.jsx)(e.code,{children:"Function"})," 类型，接收两个参数："]}),"\n",(0,s.jsxs)(e.ul,{children:["\n",(0,s.jsxs)(e.li,{children:["第一个参数为 ",(0,s.jsx)(e.code,{children:"webpack-chain"})," 对象实例，你可以通过这个实例来修改默认的 webpack 配置。"]}),"\n",(0,s.jsxs)(e.li,{children:["第二个参数为一个工具集合，包括",(0,s.jsx)(e.code,{children:"env"}),"、",(0,s.jsx)(e.code,{children:"isProd"}),"、",(0,s.jsx)(e.code,{children:"CHAIN_ID"})," 等。"]}),"\n"]}),"\n",(0,s.jsxs)(e.p,{children:["相比于 ",(0,s.jsx)(e.code,{children:"tools.webpack"}),"，",(0,s.jsx)(e.strong,{children:"webpack-chain 不仅支持链式调用，而且能够基于别名来定位到内置的 Rule 或 Plugin，从而实现精准的配置修改"}),"。我们推荐使用 ",(0,s.jsx)(e.code,{children:"tools.webpackChain"})," 来代替 ",(0,s.jsx)(e.code,{children:"tools.webpack"}),"。"]}),"\n",(0,s.jsxs)(e.blockquote,{children:["\n",(0,s.jsxs)(e.p,{children:[(0,s.jsx)(e.code,{children:"tools.webpackChain"})," 的执行时机早于 tools.webpack，因此会被 ",(0,s.jsx)(e.code,{children:"tools.webpack"})," 中的修改所覆盖。"]}),"\n"]}),"\n",(0,s.jsxs)(e.h3,{id:"工具集合",children:["工具集合",(0,s.jsx)(e.a,{className:"header-anchor","aria-hidden":"true",href:"#工具集合",children:"#"})]}),"\n",(0,s.jsxs)(e.h4,{id:"env",children:["env",(0,s.jsx)(e.a,{className:"header-anchor","aria-hidden":"true",href:"#env",children:"#"})]}),"\n",(0,s.jsxs)(e.ul,{children:["\n",(0,s.jsxs)(e.li,{children:[(0,s.jsx)(e.strong,{children:"类型："})," ",(0,s.jsx)(e.code,{children:"'development' | 'production' | 'test'"})]}),"\n"]}),"\n",(0,s.jsx)(e.p,{children:"通过 env 参数可以判断当前环境为 development、production 还是 test。比如："}),"\n",(0,s.jsx)(e.div,{className:"language-",children:(0,s.jsx)(e.div,{className:"modern-code-content",children:(0,s.jsx)(e.pre,{className:"code",children:(0,s.jsx)(e.code,{className:"language-js",children:"export default {\n  tools: {\n    webpackChain: (chain, { env }) => {\n      if (env === 'development') {\n        chain.devtool('cheap-module-eval-source-map');\n      }\n    },\n  },\n};\n"})})})}),"\n",(0,s.jsxs)(e.h4,{id:"isprod",children:["isProd",(0,s.jsx)(e.a,{className:"header-anchor","aria-hidden":"true",href:"#isprod",children:"#"})]}),"\n",(0,s.jsxs)(e.ul,{children:["\n",(0,s.jsxs)(e.li,{children:[(0,s.jsx)(e.strong,{children:"类型："})," ",(0,s.jsx)(e.code,{children:"boolean"})]}),"\n"]}),"\n",(0,s.jsx)(e.p,{children:"通过 isProd 参数可以判断当前环境是否为 production。比如："}),"\n",(0,s.jsx)(e.div,{className:"language-",children:(0,s.jsx)(e.div,{className:"modern-code-content",children:(0,s.jsx)(e.pre,{className:"code",children:(0,s.jsx)(e.code,{className:"language-js",children:"export default {\n  tools: {\n    webpackChain: (chain, { isProd }) => {\n      if (isProd) {\n        chain.devtool('source-map');\n      }\n    },\n  },\n};\n"})})})}),"\n",(0,s.jsxs)(e.h4,{id:"target",children:["target",(0,s.jsx)(e.a,{className:"header-anchor","aria-hidden":"true",href:"#target",children:"#"})]}),"\n",(0,s.jsxs)(e.ul,{children:["\n",(0,s.jsxs)(e.li,{children:[(0,s.jsx)(e.strong,{children:"类型："})," ",(0,s.jsx)(e.code,{children:"'web' | 'node' | 'modern-web' | 'web-worker'"})]}),"\n"]}),"\n",(0,s.jsx)(e.p,{children:"通过 target 参数可以判断当前构建的目标运行时环境。比如："}),"\n",(0,s.jsx)(e.div,{className:"language-",children:(0,s.jsx)(e.div,{className:"modern-code-content",children:(0,s.jsx)(e.pre,{className:"code",children:(0,s.jsx)(e.code,{className:"language-js",children:"export default {\n  tools: {\n    webpackChain: (chain, { target }) => {\n      if (target === 'node') {\n        // ...\n      }\n    },\n  },\n};\n"})})})}),"\n",(0,s.jsxs)(e.h4,{id:"isserver",children:["isServer",(0,s.jsx)(e.a,{className:"header-anchor","aria-hidden":"true",href:"#isserver",children:"#"})]}),"\n",(0,s.jsxs)(e.ul,{children:["\n",(0,s.jsxs)(e.li,{children:[(0,s.jsx)(e.strong,{children:"类型："})," ",(0,s.jsx)(e.code,{children:"boolean"})]}),"\n"]}),"\n",(0,s.jsxs)(e.p,{children:["判断当前构建的目标运行时环境是否为 ",(0,s.jsx)(e.code,{children:"node"}),"，等价于 ",(0,s.jsx)(e.code,{children:"target === 'node'"}),"。"]}),"\n",(0,s.jsx)(e.div,{className:"language-",children:(0,s.jsx)(e.div,{className:"modern-code-content",children:(0,s.jsx)(e.pre,{className:"code",children:(0,s.jsx)(e.code,{className:"language-js",children:"export default {\n  tools: {\n    webpackChain: (chain, { isServer }) => {\n      if (isServer) {\n        // ...\n      }\n    },\n  },\n};\n"})})})}),"\n",(0,s.jsxs)(e.h4,{id:"iswebworker",children:["isWebWorker",(0,s.jsx)(e.a,{className:"header-anchor","aria-hidden":"true",href:"#iswebworker",children:"#"})]}),"\n",(0,s.jsxs)(e.ul,{children:["\n",(0,s.jsxs)(e.li,{children:[(0,s.jsx)(e.strong,{children:"类型："})," ",(0,s.jsx)(e.code,{children:"boolean"})]}),"\n"]}),"\n",(0,s.jsxs)(e.p,{children:["判断当前构建的目标运行时环境是否为 ",(0,s.jsx)(e.code,{children:"web-worker"}),"，等价于 ",(0,s.jsx)(e.code,{children:"target === 'web-worker'"}),"。"]}),"\n",(0,s.jsx)(e.div,{className:"language-",children:(0,s.jsx)(e.div,{className:"modern-code-content",children:(0,s.jsx)(e.pre,{className:"code",children:(0,s.jsx)(e.code,{className:"language-js",children:"export default {\n  tools: {\n    webpackChain: (chain, { isWebWorker }) => {\n      if (isWebWorker) {\n        // ...\n      }\n    },\n  },\n};\n"})})})}),"\n",(0,s.jsxs)(e.h4,{id:"webpack",children:["webpack",(0,s.jsx)(e.a,{className:"header-anchor","aria-hidden":"true",href:"#webpack",children:"#"})]}),"\n",(0,s.jsxs)(e.ul,{children:["\n",(0,s.jsxs)(e.li,{children:[(0,s.jsx)(e.strong,{children:"类型："})," ",(0,s.jsx)(e.code,{children:"typeof import('webpack')"})]}),"\n"]}),"\n",(0,s.jsx)(e.p,{children:"通过这个参数你可以拿到 webpack 实例。比如："}),"\n",(0,s.jsx)(e.div,{className:"language-",children:(0,s.jsx)(e.div,{className:"modern-code-content",children:(0,s.jsx)(e.pre,{className:"code",children:(0,s.jsx)(e.code,{className:"language-js",children:"export default {\n  tools: {\n    webpackChain: (chain, { webpack }) => {\n      chain.plugin('my-progress').use(webpack.ProgressPlugin);\n    },\n  },\n};\n"})})})}),"\n",(0,s.jsxs)(e.h4,{id:"htmlwebpackplugin",children:["HtmlWebpackPlugin",(0,s.jsx)(e.a,{className:"header-anchor","aria-hidden":"true",href:"#htmlwebpackplugin",children:"#"})]}),"\n",(0,s.jsxs)(e.ul,{children:["\n",(0,s.jsxs)(e.li,{children:[(0,s.jsx)(e.strong,{children:"类型："})," ",(0,s.jsx)(e.code,{children:"typeof import('html-webpack-plugin')"})]}),"\n"]}),"\n",(0,s.jsx)(e.p,{children:"通过这个参数你可以拿到 HtmlWebpackPlugin 实例。"}),"\n",(0,s.jsx)(e.div,{className:"language-",children:(0,s.jsx)(e.div,{className:"modern-code-content",children:(0,s.jsx)(e.pre,{className:"code",children:(0,s.jsx)(e.code,{className:"language-js",children:"export default {\n  tools: {\n    webpackChain: (chain, { HtmlWebpackPlugin }) => {\n      console.log(HtmlWebpackPlugin);\n    },\n  },\n};\n"})})})}),"\n",(0,s.jsxs)(e.h4,{id:"getcompiledpath",children:["getCompiledPath",(0,s.jsx)(e.a,{className:"header-anchor","aria-hidden":"true",href:"#getcompiledpath",children:"#"})]}),"\n",(0,s.jsxs)(e.ul,{children:["\n",(0,s.jsxs)(e.li,{children:[(0,s.jsx)(e.strong,{children:"类型："})," ",(0,s.jsx)(e.code,{children:"(name: string) => string"})]}),"\n"]}),"\n",(0,s.jsx)(e.p,{children:"获取 builder 内置依赖的所在路径，例如："}),"\n",(0,s.jsxs)(e.ul,{children:["\n",(0,s.jsx)(e.li,{children:"sass"}),"\n",(0,s.jsx)(e.li,{children:"sass-loader"}),"\n",(0,s.jsx)(e.li,{children:"less"}),"\n",(0,s.jsx)(e.li,{children:"less-loader"}),"\n",(0,s.jsx)(e.li,{children:"css-loader"}),"\n",(0,s.jsx)(e.li,{children:"babel-loader"}),"\n",(0,s.jsx)(e.li,{children:"url-loader"}),"\n",(0,s.jsx)(e.li,{children:"file-loader"}),"\n",(0,s.jsx)(e.li,{children:"..."}),"\n"]}),"\n",(0,s.jsx)(e.p,{children:"该方法通常在需要与 builder 复用同一份依赖时会被用到。"}),"\n",(0,s.jsxs)(e.div,{className:"modern-directive tip",children:[(0,s.jsx)(e.div,{className:"modern-directive-title",children:"TIP"}),(0,s.jsx)(e.div,{className:"modern-directive-content",children:(0,s.jsx)(e.p,{children:"Builder 内部依赖会随着版本迭代而发生变化，例如产生大版本变更。在非必要的情况下，请避免使用此 API。"})})]}),"\n",(0,s.jsx)(e.div,{className:"language-",children:(0,s.jsx)(e.div,{className:"modern-code-content",children:(0,s.jsx)(e.pre,{className:"code",children:(0,s.jsx)(e.code,{className:"language-js",children:"export default {\n  tools: {\n    webpackChain: (chain, { getCompiledPath }) => {\n      const loaderPath = getCompiledPath('less-loader');\n      // ...\n    },\n  },\n};\n"})})})}),"\n",(0,s.jsxs)(e.h4,{id:"chain_id",children:["CHAIN_ID",(0,s.jsx)(e.a,{className:"header-anchor","aria-hidden":"true",href:"#chain_id",children:"#"})]}),"\n",(0,s.jsx)(e.p,{children:"Builder 中预先定义了一些常用的 Chain ID，你可以通过这些 ID 来定位到内置的 Rule 或 Plugin。"}),"\n",(0,s.jsxs)(e.h5,{id:"chain_idrule",children:["CHAIN_ID.RULE",(0,s.jsx)(e.a,{className:"header-anchor","aria-hidden":"true",href:"#chain_idrule",children:"#"})]}),"\n",(0,s.jsxs)(e.table,{children:["\n",(0,s.jsxs)(e.thead,{children:["\n",(0,s.jsxs)(e.tr,{children:["\n",(0,s.jsx)(e.th,{children:"ID"}),"\n",(0,s.jsx)(e.th,{children:"描述"}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(e.tbody,{children:["\n",(0,s.jsxs)(e.tr,{children:["\n",(0,s.jsx)(e.td,{children:(0,s.jsx)(e.code,{children:"RULE.MJS"})}),"\n",(0,s.jsxs)(e.td,{children:["处理 ",(0,s.jsx)(e.code,{children:"mjs"})," 的规则"]}),"\n"]}),"\n",(0,s.jsxs)(e.tr,{children:["\n",(0,s.jsx)(e.td,{children:(0,s.jsx)(e.code,{children:"RULE.JS"})}),"\n",(0,s.jsxs)(e.td,{children:["处理 ",(0,s.jsx)(e.code,{children:"js"})," 的规则"]}),"\n"]}),"\n",(0,s.jsxs)(e.tr,{children:["\n",(0,s.jsx)(e.td,{children:(0,s.jsx)(e.code,{children:"RULE.TS"})}),"\n",(0,s.jsxs)(e.td,{children:["处理 ",(0,s.jsx)(e.code,{children:"ts"})," 的规则"]}),"\n"]}),"\n",(0,s.jsxs)(e.tr,{children:["\n",(0,s.jsx)(e.td,{children:(0,s.jsx)(e.code,{children:"RULE.CSS"})}),"\n",(0,s.jsxs)(e.td,{children:["处理 ",(0,s.jsx)(e.code,{children:"css"})," 的规则"]}),"\n"]}),"\n",(0,s.jsxs)(e.tr,{children:["\n",(0,s.jsx)(e.td,{children:(0,s.jsx)(e.code,{children:"RULE.LESS"})}),"\n",(0,s.jsxs)(e.td,{children:["处理 ",(0,s.jsx)(e.code,{children:"less"})," 的规则"]}),"\n"]}),"\n",(0,s.jsxs)(e.tr,{children:["\n",(0,s.jsx)(e.td,{children:(0,s.jsx)(e.code,{children:"RULE.SASS"})}),"\n",(0,s.jsxs)(e.td,{children:["处理 ",(0,s.jsx)(e.code,{children:"sass"})," 的规则"]}),"\n"]}),"\n",(0,s.jsxs)(e.tr,{children:["\n",(0,s.jsx)(e.td,{children:(0,s.jsx)(e.code,{children:"RULE.PUG"})}),"\n",(0,s.jsxs)(e.td,{children:["处理 ",(0,s.jsx)(e.code,{children:"pug"})," 的规则"]}),"\n"]}),"\n",(0,s.jsxs)(e.tr,{children:["\n",(0,s.jsx)(e.td,{children:(0,s.jsx)(e.code,{children:"RULE.TOML"})}),"\n",(0,s.jsxs)(e.td,{children:["处理 ",(0,s.jsx)(e.code,{children:"toml"})," 的规则"]}),"\n"]}),"\n",(0,s.jsxs)(e.tr,{children:["\n",(0,s.jsx)(e.td,{children:(0,s.jsx)(e.code,{children:"RULE.YAML"})}),"\n",(0,s.jsxs)(e.td,{children:["处理 ",(0,s.jsx)(e.code,{children:"yaml"})," 的规则"]}),"\n"]}),"\n",(0,s.jsxs)(e.tr,{children:["\n",(0,s.jsx)(e.td,{children:(0,s.jsx)(e.code,{children:"RULE.FONT"})}),"\n",(0,s.jsx)(e.td,{children:"处理字体的规则"}),"\n"]}),"\n",(0,s.jsxs)(e.tr,{children:["\n",(0,s.jsx)(e.td,{children:(0,s.jsx)(e.code,{children:"RULE.IMAGE"})}),"\n",(0,s.jsx)(e.td,{children:"处理图片的规则"}),"\n"]}),"\n",(0,s.jsxs)(e.tr,{children:["\n",(0,s.jsx)(e.td,{children:(0,s.jsx)(e.code,{children:"RULE.MEDIA"})}),"\n",(0,s.jsx)(e.td,{children:"处理媒体资源的规则"}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(e.h3,{id:"chain_idone_of",children:["CHAIN_ID.ONE_OF",(0,s.jsx)(e.a,{className:"header-anchor","aria-hidden":"true",href:"#chain_idone_of",children:"#"})]}),"\n",(0,s.jsxs)(e.p,{children:["通过 ",(0,s.jsx)(e.code,{children:"ONE_OF.XXX"})," 可以匹配到规则数组中的某一类规则。"]}),"\n",(0,s.jsxs)(e.table,{children:["\n",(0,s.jsxs)(e.thead,{children:["\n",(0,s.jsxs)(e.tr,{children:["\n",(0,s.jsx)(e.th,{children:"ID"}),"\n",(0,s.jsx)(e.th,{children:"描述"}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(e.tbody,{children:["\n",(0,s.jsxs)(e.tr,{children:["\n",(0,s.jsx)(e.td,{children:(0,s.jsx)(e.code,{children:"ONE_OF.SVG"})}),"\n",(0,s.jsx)(e.td,{children:"处理 SVG 的规则，在 data URI 和单独文件之间自动选择"}),"\n"]}),"\n",(0,s.jsxs)(e.tr,{children:["\n",(0,s.jsx)(e.td,{children:(0,s.jsx)(e.code,{children:"ONE_OF.SVG_URL"})}),"\n",(0,s.jsx)(e.td,{children:"处理 SVG 的规则，输出为单独文件"}),"\n"]}),"\n",(0,s.jsxs)(e.tr,{children:["\n",(0,s.jsx)(e.td,{children:(0,s.jsx)(e.code,{children:"ONE_OF.SVG_INLINE"})}),"\n",(0,s.jsx)(e.td,{children:"处理 SVG 的规则，作为 data URI 内联到 bundle 中"}),"\n"]}),"\n",(0,s.jsxs)(e.tr,{children:["\n",(0,s.jsx)(e.td,{children:(0,s.jsx)(e.code,{children:"ONE_OF.SVG_ASSETS"})}),"\n",(0,s.jsx)(e.td,{children:"处理 SVG 的规则，在 data URI 和单独文件之间自动选择"}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(e.h3,{id:"chain_iduse",children:["CHAIN_ID.USE",(0,s.jsx)(e.a,{className:"header-anchor","aria-hidden":"true",href:"#chain_iduse",children:"#"})]}),"\n",(0,s.jsxs)(e.p,{children:["通过 ",(0,s.jsx)(e.code,{children:"USE.XXX"})," 可以匹配到对应的 loader。"]}),"\n",(0,s.jsxs)(e.table,{children:["\n",(0,s.jsxs)(e.thead,{children:["\n",(0,s.jsxs)(e.tr,{children:["\n",(0,s.jsx)(e.th,{children:"ID"}),"\n",(0,s.jsx)(e.th,{children:"描述"}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(e.tbody,{children:["\n",(0,s.jsxs)(e.tr,{children:["\n",(0,s.jsx)(e.td,{children:(0,s.jsx)(e.code,{children:"USE.TS"})}),"\n",(0,s.jsxs)(e.td,{children:["对应 ",(0,s.jsx)(e.code,{children:"ts-loader"})]}),"\n"]}),"\n",(0,s.jsxs)(e.tr,{children:["\n",(0,s.jsx)(e.td,{children:(0,s.jsx)(e.code,{children:"USE.CSS"})}),"\n",(0,s.jsxs)(e.td,{children:["对应 ",(0,s.jsx)(e.code,{children:"css-loader"})]}),"\n"]}),"\n",(0,s.jsxs)(e.tr,{children:["\n",(0,s.jsx)(e.td,{children:(0,s.jsx)(e.code,{children:"USE.LESS"})}),"\n",(0,s.jsxs)(e.td,{children:["对应 ",(0,s.jsx)(e.code,{children:"less-loader"})]}),"\n"]}),"\n",(0,s.jsxs)(e.tr,{children:["\n",(0,s.jsx)(e.td,{children:(0,s.jsx)(e.code,{children:"USE.SASS"})}),"\n",(0,s.jsxs)(e.td,{children:["对应 ",(0,s.jsx)(e.code,{children:"sass-loader"})]}),"\n"]}),"\n",(0,s.jsxs)(e.tr,{children:["\n",(0,s.jsx)(e.td,{children:(0,s.jsx)(e.code,{children:"USE.PUG"})}),"\n",(0,s.jsxs)(e.td,{children:["对应 ",(0,s.jsx)(e.code,{children:"pug-loader"})]}),"\n"]}),"\n",(0,s.jsxs)(e.tr,{children:["\n",(0,s.jsx)(e.td,{children:(0,s.jsx)(e.code,{children:"USE.TOML"})}),"\n",(0,s.jsxs)(e.td,{children:["对应 ",(0,s.jsx)(e.code,{children:"toml-loader"})]}),"\n"]}),"\n",(0,s.jsxs)(e.tr,{children:["\n",(0,s.jsx)(e.td,{children:(0,s.jsx)(e.code,{children:"USE.YAML"})}),"\n",(0,s.jsxs)(e.td,{children:["对应 ",(0,s.jsx)(e.code,{children:"yaml-loader"})]}),"\n"]}),"\n",(0,s.jsxs)(e.tr,{children:["\n",(0,s.jsx)(e.td,{children:(0,s.jsx)(e.code,{children:"USE.FILE"})}),"\n",(0,s.jsxs)(e.td,{children:["对应 ",(0,s.jsx)(e.code,{children:"file-loader"})]}),"\n"]}),"\n",(0,s.jsxs)(e.tr,{children:["\n",(0,s.jsx)(e.td,{children:(0,s.jsx)(e.code,{children:"USE.URL"})}),"\n",(0,s.jsxs)(e.td,{children:["对应 ",(0,s.jsx)(e.code,{children:"url-loader"})]}),"\n"]}),"\n",(0,s.jsxs)(e.tr,{children:["\n",(0,s.jsx)(e.td,{children:(0,s.jsx)(e.code,{children:"USE.SVGR"})}),"\n",(0,s.jsxs)(e.td,{children:["对应 ",(0,s.jsx)(e.code,{children:"@svgr/webpack"})]}),"\n"]}),"\n",(0,s.jsxs)(e.tr,{children:["\n",(0,s.jsx)(e.td,{children:(0,s.jsx)(e.code,{children:"USE.BABEL"})}),"\n",(0,s.jsxs)(e.td,{children:["对应 ",(0,s.jsx)(e.code,{children:"babel-loader"})]}),"\n"]}),"\n",(0,s.jsxs)(e.tr,{children:["\n",(0,s.jsx)(e.td,{children:(0,s.jsx)(e.code,{children:"USE.STYLE"})}),"\n",(0,s.jsxs)(e.td,{children:["对应 ",(0,s.jsx)(e.code,{children:"style-loader"})]}),"\n"]}),"\n",(0,s.jsxs)(e.tr,{children:["\n",(0,s.jsx)(e.td,{children:(0,s.jsx)(e.code,{children:"USE.POSTCSS"})}),"\n",(0,s.jsxs)(e.td,{children:["对应 ",(0,s.jsx)(e.code,{children:"postcss-loader"})]}),"\n"]}),"\n",(0,s.jsxs)(e.tr,{children:["\n",(0,s.jsx)(e.td,{children:(0,s.jsx)(e.code,{children:"USE.MARKDOWN"})}),"\n",(0,s.jsxs)(e.td,{children:["对应 ",(0,s.jsx)(e.code,{children:"markdown-loader"})]}),"\n"]}),"\n",(0,s.jsxs)(e.tr,{children:["\n",(0,s.jsx)(e.td,{children:(0,s.jsx)(e.code,{children:"USE.CSS_MODULES_TS"})}),"\n",(0,s.jsxs)(e.td,{children:["对应 ",(0,s.jsx)(e.code,{children:"css-modules-typescript-loader"})]}),"\n"]}),"\n",(0,s.jsxs)(e.tr,{children:["\n",(0,s.jsx)(e.td,{children:(0,s.jsx)(e.code,{children:"USE.MINI_CSS_EXTRACT"})}),"\n",(0,s.jsxs)(e.td,{children:["对应 ",(0,s.jsx)(e.code,{children:"mini-css-extract-plugin.loader"})]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(e.h3,{id:"chain_idplugin",children:["CHAIN_ID.PLUGIN",(0,s.jsx)(e.a,{className:"header-anchor","aria-hidden":"true",href:"#chain_idplugin",children:"#"})]}),"\n",(0,s.jsxs)(e.p,{children:["通过 ",(0,s.jsx)(e.code,{children:"PLUGIN.XXX"})," 可以匹配到对应的 plugin。"]}),"\n",(0,s.jsxs)(e.table,{children:["\n",(0,s.jsxs)(e.thead,{children:["\n",(0,s.jsxs)(e.tr,{children:["\n",(0,s.jsx)(e.th,{children:"ID"}),"\n",(0,s.jsx)(e.th,{children:"描述"}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(e.tbody,{children:["\n",(0,s.jsxs)(e.tr,{children:["\n",(0,s.jsx)(e.td,{children:(0,s.jsx)(e.code,{children:"PLUGIN.HMR"})}),"\n",(0,s.jsxs)(e.td,{children:["对应 ",(0,s.jsx)(e.code,{children:"HotModuleReplacementPlugin"})]}),"\n"]}),"\n",(0,s.jsxs)(e.tr,{children:["\n",(0,s.jsx)(e.td,{children:(0,s.jsx)(e.code,{children:"PLUGIN.COPY"})}),"\n",(0,s.jsxs)(e.td,{children:["对应 ",(0,s.jsx)(e.code,{children:"CopyWebpackPlugin"})]}),"\n"]}),"\n",(0,s.jsxs)(e.tr,{children:["\n",(0,s.jsx)(e.td,{children:(0,s.jsx)(e.code,{children:"PLUGIN.HTML"})}),"\n",(0,s.jsxs)(e.td,{children:["对应 ",(0,s.jsx)(e.code,{children:"HtmlWebpackPlugin"}),"，使用时需要拼接 entry 名称：",(0,s.jsx)(e.code,{children:"${PLUGIN.HTML}-${entryName}"})]}),"\n"]}),"\n",(0,s.jsxs)(e.tr,{children:["\n",(0,s.jsx)(e.td,{children:(0,s.jsx)(e.code,{children:"PLUGIN.DEFINE"})}),"\n",(0,s.jsxs)(e.td,{children:["对应 ",(0,s.jsx)(e.code,{children:"DefinePlugin"})]}),"\n"]}),"\n",(0,s.jsxs)(e.tr,{children:["\n",(0,s.jsx)(e.td,{children:(0,s.jsx)(e.code,{children:"PLUGIN.IGNORE"})}),"\n",(0,s.jsxs)(e.td,{children:["对应 ",(0,s.jsx)(e.code,{children:"IgnorePlugin"})]}),"\n"]}),"\n",(0,s.jsxs)(e.tr,{children:["\n",(0,s.jsx)(e.td,{children:(0,s.jsx)(e.code,{children:"PLUGIN.BANNER"})}),"\n",(0,s.jsxs)(e.td,{children:["对应 ",(0,s.jsx)(e.code,{children:"BannerPlugin"})]}),"\n"]}),"\n",(0,s.jsxs)(e.tr,{children:["\n",(0,s.jsx)(e.td,{children:(0,s.jsx)(e.code,{children:"PLUGIN.PROGRESS"})}),"\n",(0,s.jsxs)(e.td,{children:["对应 ",(0,s.jsx)(e.code,{children:"Webpackbar"})]}),"\n"]}),"\n",(0,s.jsxs)(e.tr,{children:["\n",(0,s.jsx)(e.td,{children:(0,s.jsx)(e.code,{children:"PLUGIN.APP_ICON"})}),"\n",(0,s.jsxs)(e.td,{children:["对应 ",(0,s.jsx)(e.code,{children:"AppIconPlugin"})]}),"\n"]}),"\n",(0,s.jsxs)(e.tr,{children:["\n",(0,s.jsx)(e.td,{children:(0,s.jsx)(e.code,{children:"PLUGIN.LOADABLE"})}),"\n",(0,s.jsxs)(e.td,{children:["对应 ",(0,s.jsx)(e.code,{children:"LoadableWebpackPlugin"})]}),"\n"]}),"\n",(0,s.jsxs)(e.tr,{children:["\n",(0,s.jsx)(e.td,{children:(0,s.jsx)(e.code,{children:"PLUGIN.MANIFEST"})}),"\n",(0,s.jsxs)(e.td,{children:["对应 ",(0,s.jsx)(e.code,{children:"WebpackManifestPlugin"})]}),"\n"]}),"\n",(0,s.jsxs)(e.tr,{children:["\n",(0,s.jsx)(e.td,{children:(0,s.jsx)(e.code,{children:"PLUGIN.TS_CHECKER"})}),"\n",(0,s.jsxs)(e.td,{children:["对应 ",(0,s.jsx)(e.code,{children:"ForkTsCheckerWebpackPlugin"})]}),"\n"]}),"\n",(0,s.jsxs)(e.tr,{children:["\n",(0,s.jsx)(e.td,{children:(0,s.jsx)(e.code,{children:"PLUGIN.INLINE_HTML"})}),"\n",(0,s.jsxs)(e.td,{children:["对应 ",(0,s.jsx)(e.code,{children:"InlineChunkHtmlPlugin"})]}),"\n"]}),"\n",(0,s.jsxs)(e.tr,{children:["\n",(0,s.jsx)(e.td,{children:(0,s.jsx)(e.code,{children:"PLUGIN.BUNDLE_ANALYZER"})}),"\n",(0,s.jsxs)(e.td,{children:["对应 ",(0,s.jsx)(e.code,{children:"WebpackBundleAnalyzer"})]}),"\n"]}),"\n",(0,s.jsxs)(e.tr,{children:["\n",(0,s.jsx)(e.td,{children:(0,s.jsx)(e.code,{children:"PLUGIN.BOTTOM_TEMPLATE"})}),"\n",(0,s.jsxs)(e.td,{children:["对应 ",(0,s.jsx)(e.code,{children:"BottomTemplatePlugin"})]}),"\n"]}),"\n",(0,s.jsxs)(e.tr,{children:["\n",(0,s.jsx)(e.td,{children:(0,s.jsx)(e.code,{children:"PLUGIN.MINI_CSS_EXTRACT"})}),"\n",(0,s.jsxs)(e.td,{children:["对应 ",(0,s.jsx)(e.code,{children:"MiniCssExtractPlugin"})]}),"\n"]}),"\n",(0,s.jsxs)(e.tr,{children:["\n",(0,s.jsx)(e.td,{children:(0,s.jsx)(e.code,{children:"PLUGIN.REACT_FAST_REFRESH"})}),"\n",(0,s.jsxs)(e.td,{children:["对应 ",(0,s.jsx)(e.code,{children:"ReactFastRefreshPlugin"})]}),"\n"]}),"\n",(0,s.jsxs)(e.tr,{children:["\n",(0,s.jsx)(e.td,{children:(0,s.jsx)(e.code,{children:"PLUGIN.NODE_POLYFILL_PROVIDE"})}),"\n",(0,s.jsxs)(e.td,{children:["对应处理 node polyfill 的 ",(0,s.jsx)(e.code,{children:"ProvidePlugin"})]}),"\n"]}),"\n",(0,s.jsxs)(e.tr,{children:["\n",(0,s.jsx)(e.td,{children:(0,s.jsx)(e.code,{children:"PLUGIN.INSPECTOR"})}),"\n",(0,s.jsxs)(e.td,{children:["对应 ",(0,s.jsx)(e.code,{children:"@modern-js/inspector-webpack-plugin"})]}),"\n"]}),"\n",(0,s.jsxs)(e.tr,{children:["\n",(0,s.jsx)(e.td,{children:(0,s.jsx)(e.code,{children:"PLUGIN.SUBRESOURCE_INTEGRITY"})}),"\n",(0,s.jsxs)(e.td,{children:["对应 ",(0,s.jsx)(e.code,{children:"webpack-subresource-integrity"})]}),"\n"]}),"\n",(0,s.jsxs)(e.tr,{children:["\n",(0,s.jsx)(e.td,{children:(0,s.jsx)(e.code,{children:"PLUGIN.ASSETS_RETRY"})}),"\n",(0,s.jsxs)(e.td,{children:["对应 Builder 中的 webpack 静态资源重试插件 ",(0,s.jsx)(e.code,{children:"WebpackAssetsRetryPlugin"})]}),"\n"]}),"\n",(0,s.jsxs)(e.tr,{children:["\n",(0,s.jsx)(e.td,{children:(0,s.jsx)(e.code,{children:"PLUGIN.AUTO_SET_ROOT_SIZE"})}),"\n",(0,s.jsxs)(e.td,{children:["对应 Builder 中的自动设置根字体大小插件 ",(0,s.jsx)(e.code,{children:"AutoSetRootSizePlugin"})]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(e.h3,{id:"chain_idminimizer",children:["CHAIN_ID.MINIMIZER",(0,s.jsx)(e.a,{className:"header-anchor","aria-hidden":"true",href:"#chain_idminimizer",children:"#"})]}),"\n",(0,s.jsxs)(e.p,{children:["通过 ",(0,s.jsx)(e.code,{children:"MINIMIZER.XXX"})," 可以匹配到对应的压缩工具。"]}),"\n",(0,s.jsxs)(e.table,{children:["\n",(0,s.jsxs)(e.thead,{children:["\n",(0,s.jsxs)(e.tr,{children:["\n",(0,s.jsx)(e.th,{children:"ID"}),"\n",(0,s.jsx)(e.th,{children:"描述"}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(e.tbody,{children:["\n",(0,s.jsxs)(e.tr,{children:["\n",(0,s.jsx)(e.td,{children:(0,s.jsx)(e.code,{children:"MINIMIZER.JS"})}),"\n",(0,s.jsxs)(e.td,{children:["对应 ",(0,s.jsx)(e.code,{children:"TerserWebpackPlugin"})]}),"\n"]}),"\n",(0,s.jsxs)(e.tr,{children:["\n",(0,s.jsx)(e.td,{children:(0,s.jsx)(e.code,{children:"MINIMIZER.CSS"})}),"\n",(0,s.jsxs)(e.td,{children:["对应 ",(0,s.jsx)(e.code,{children:"CssMinimizerWebpackPlugin"})]}),"\n"]}),"\n",(0,s.jsxs)(e.tr,{children:["\n",(0,s.jsx)(e.td,{children:(0,s.jsx)(e.code,{children:"MINIMIZER.ESBUILD"})}),"\n",(0,s.jsxs)(e.td,{children:["对应 ",(0,s.jsx)(e.code,{children:"ESBuildPlugin"})]}),"\n"]}),"\n",(0,s.jsxs)(e.tr,{children:["\n",(0,s.jsx)(e.td,{children:(0,s.jsx)(e.code,{children:"MINIMIZER.SWC"})}),"\n",(0,s.jsxs)(e.td,{children:["对应 ",(0,s.jsx)(e.code,{children:"SwcWebpackPlugin"})]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(e.h3,{id:"常用-webpackchain-使用示例",children:["常用 WebpackChain 使用示例",(0,s.jsx)(e.a,{className:"header-anchor","aria-hidden":"true",href:"#常用-webpackchain-使用示例",children:"#"})]}),"\n",(0,s.jsxs)(e.p,{children:["以下是一些常见的配置示例，完整的 webpack-chain API 请见 ",(0,s.jsx)(e.a,{href:"https://github.com/neutrinojs/webpack-chain",target:"_blank",rel:"noopener noreferrer",children:"webpack-chain 文档"}),"。"]}),"\n",(0,s.jsxs)(e.h4,{id:"新增/修改/删除-loader",children:["新增/修改/删除 loader",(0,s.jsx)(e.a,{className:"header-anchor","aria-hidden":"true",href:"#新增/修改/删除-loader",children:"#"})]}),"\n",(0,s.jsx)(e.div,{className:"language-",children:(0,s.jsx)(e.div,{className:"modern-code-content",children:(0,s.jsx)(e.pre,{className:"code",children:(0,s.jsx)(e.code,{className:"language-js",children:"export default {\n  tools: {\n    webpackChain: (chain, { CHAIN_ID }) => {\n      // 新增 loader\n      chain.module\n        .rule('md')\n        .test(/\\.md$/)\n        .use('md-loader')\n        .loader('md-loader');\n\n      // 修改 loader\n      chain.module\n        .rule(CHAIN_ID.RULE.JS)\n        .use(CHAIN_ID.USE.BABEL)\n        .tap(options => {\n          options.plugins.push('babel-plugin-xxx');\n          return options;\n        });\n\n      // 删除 loader\n      chain.module.rule(CHAIN_ID.RULE.JS).uses.delete(CHAIN_ID.USE.BABEL);\n    },\n  },\n};\n"})})})}),"\n",(0,s.jsxs)(e.h4,{id:"新增/修改/删除-plugin",children:["新增/修改/删除 plugin",(0,s.jsx)(e.a,{className:"header-anchor","aria-hidden":"true",href:"#新增/修改/删除-plugin",children:"#"})]}),"\n",(0,s.jsx)(e.div,{className:"language-",children:(0,s.jsx)(e.div,{className:"modern-code-content",children:(0,s.jsx)(e.pre,{className:"code",children:(0,s.jsx)(e.code,{className:"language-js",children:"export default {\n  tools: {\n    webpackChain: (chain, { webpack, CHAIN_ID }) => {\n      // 新增插件\n      chain.plugin('custom-define').use(webpack.DefinePlugin, [\n        {\n          'process.env': {\n            NODE_ENV: JSON.stringify(process.env.NODE_ENV),\n          },\n        },\n      ]);\n\n      // 修改插件\n      chain.plugin(CHAIN_ID.PLUGIN.HMR).tap(options => {\n        options[0].fullBuildTimeout = 200;\n        return options;\n      });\n\n      // 删除插件\n      chain.plugins.delete(CHAIN_ID.PLUGIN.HMR);\n    },\n  },\n};\n"})})})})]})}var i=function(){var n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},e=Object.assign({},(0,c.useMDXComponents)(),n.components).wrapper;return e?(0,s.jsx)(e,Object.assign({},n,{children:(0,s.jsx)(r,n)})):r(n)}},55713:function(n,e,d){"use strict";Object.defineProperty(e,"__esModule",{value:!0});!function(n,e){for(var d in e)Object.defineProperty(n,d,{enumerable:!0,get:e[d]})}(e,{frontmatter:function(){return i},title:function(){return l},toc:function(){return h},default:function(){return j}});var s=d("9880"),c=d("23169"),r=d.ir(d("90269")),i={sidebar_label:"webpackChain"},l="tools.webpackChain",h=[];function a(n){var e=Object.assign({h1:"h1",a:"a",div:"div",p:"p"},(0,c.useMDXComponents)(),n.components);return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)(e.h1,{id:"toolswebpackchain",children:["tools.webpackChain",(0,s.jsx)(e.a,{className:"header-anchor","aria-hidden":"true",href:"#toolswebpackchain",children:"#"})]}),"\n",(0,s.jsxs)(e.div,{className:"modern-directive tip",children:[(0,s.jsx)(e.div,{className:"modern-directive-title",children:"TIP"}),(0,s.jsx)(e.div,{className:"modern-directive-content",children:(0,s.jsxs)(e.p,{children:["该配置由 Modern.js Builder 提供，更多信息可参考 ",(0,s.jsx)(e.a,{href:"https://modernjs.dev/builder/api/config-tools.html#toolswebpackchain",target:"_blank",rel:"noopener noreferrer",children:"tools.webpackChain"}),"。\n"]})})]}),"\n","\n",(0,s.jsx)(r.default,{})]})}var j=function(){var n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},e=Object.assign({},(0,c.useMDXComponents)(),n.components).wrapper;return e?(0,s.jsx)(e,Object.assign({},n,{children:(0,s.jsx)(a,n)})):a(n)}}}]);