(self.webpackChunk_modern_js_main_doc=self.webpackChunk_modern_js_main_doc||[]).push([["docs_zh_configure_app_tools_webpack_mdx"],{89757:function(e,n,r){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),Object.defineProperty(n,"default",{enumerable:!0,get:function(){return o}});var s,i=r("15169"),l=r("43932"),c=r("9880"),d=r("23169");function a(e){var n=Object.assign({ul:"ul",li:"li",strong:"strong",code:"code",p:"p",a:"a",blockquote:"blockquote",h3:"h3",pre:"pre",div:"div",h4:"h4"},(0,d.useMDXComponents)(),e.components);return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsxs)(n.ul,{children:["\n",(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:"类型："})," ",(0,c.jsx)(n.code,{children:"Object | Function | undefined"})]}),"\n",(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:"默认值："})," ",(0,c.jsx)(n.code,{children:"undefined"})]}),"\n",(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:"打包工具："})," ",(0,c.jsx)(n.code,{children:"仅支持 webpack"})]}),"\n"]}),"\n",(0,c.jsxs)(n.p,{children:[(0,c.jsx)(n.code,{children:"tools.webpack"})," 选项用于配置原生的 ",(0,c.jsx)(n.a,{href:"https://webpack.js.org/",target:"_blank",rel:"noopener noreferrer",children:"webpack"}),"。"]}),"\n",(0,c.jsxs)(n.blockquote,{children:["\n",(0,c.jsxs)(n.p,{children:[(0,c.jsx)(n.code,{children:"tools.webpackChain"})," 同样可以修改 webpack 配置，并且功能更加强大，建议优先使用 ",(0,c.jsx)(n.code,{children:"tools.webpackChain"}),"。"]}),"\n"]}),"\n",(0,c.jsxs)(n.h3,{id:"object-类型",children:["Object 类型",(0,c.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#object-类型",children:"#"})]}),"\n",(0,c.jsxs)(n.p,{children:[(0,c.jsx)(n.code,{children:"tools.webpack"})," 可以配置为一个对象，这个对象将会和内置的 webpack 配置通过 ",(0,c.jsx)(n.a,{href:"https://github.com/survivejs/webpack-merge",target:"_blank",rel:"noopener noreferrer",children:"webpack-merge"})," 进行深层合并。"]}),"\n",(0,c.jsxs)(n.p,{children:["比如添加 ",(0,c.jsx)(n.code,{children:"resolve.alias"})," 配置："]}),"\n",(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:"language-js",children:"export default {\n  tools: {\n    webpack: {\n      resolve: {\n        alias: {\n          '@util': 'src/util',\n        },\n      },\n    },\n  },\n};\n"})}),"\n",(0,c.jsxs)(n.h3,{id:"function-类型",children:["Function 类型",(0,c.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#function-类型",children:"#"})]}),"\n",(0,c.jsxs)(n.p,{children:[(0,c.jsx)(n.code,{children:"tools.webpack"})," 也可以配置为一个函数，这个函数的第一个入参为内置的 webpack 配置对象，你可以对这个对象进行修改，然后返回一份新的配置。比如："]}),"\n",(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:"language-js",children:"export default {\n  tools: {\n    webpack: config => {\n      config.resolve.alias['@util'] = 'src/util';\n      return config;\n    },\n  },\n};\n"})}),"\n",(0,c.jsxs)(n.div,{className:"modern-directive tip",children:[(0,c.jsx)(n.div,{className:"modern-directive-title",children:"TIP"}),(0,c.jsx)(n.div,{className:"modern-directive-content",children:(0,c.jsxs)(n.p,{children:[(0,c.jsx)(n.code,{children:"tools.webpack"})," 函数返回的对象会直接作为最终使用的 webpack 配置，不会再与内置的 webpack 配置进行合并。\n"]})})]}),"\n",(0,c.jsxs)(n.h3,{id:"工具集合",children:["工具集合",(0,c.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#工具集合",children:"#"})]}),"\n",(0,c.jsx)(n.p,{children:"这个函数的第二个参数是一个对象，包含了一些工具函数和属性，详情如下："}),"\n",(0,c.jsxs)(n.h4,{id:"env",children:["env",(0,c.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#env",children:"#"})]}),"\n",(0,c.jsxs)(n.ul,{children:["\n",(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:"类型："})," ",(0,c.jsx)(n.code,{children:"'development' | 'production' | 'test'"})]}),"\n"]}),"\n",(0,c.jsx)(n.p,{children:"通过 env 参数可以判断当前环境为 development、production 还是 test。比如："}),"\n",(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:"language-js",children:"export default {\n  tools: {\n    webpack: (config, { env }) => {\n      if (env === 'development') {\n        config.devtool = 'cheap-module-eval-source-map';\n      }\n      return config;\n    },\n  },\n};\n"})}),"\n",(0,c.jsxs)(n.h4,{id:"isprod",children:["isProd",(0,c.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#isprod",children:"#"})]}),"\n",(0,c.jsxs)(n.ul,{children:["\n",(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:"类型："})," ",(0,c.jsx)(n.code,{children:"boolean"})]}),"\n"]}),"\n",(0,c.jsx)(n.p,{children:"通过 isProd 参数可以判断当前环境是否为 production。比如："}),"\n",(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:"language-js",children:"export default {\n  tools: {\n    webpack: (config, { isProd }) => {\n      if (isProd) {\n        config.devtool = 'source-map';\n      }\n      return config;\n    },\n  },\n};\n"})}),"\n",(0,c.jsxs)(n.h4,{id:"target",children:["target",(0,c.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#target",children:"#"})]}),"\n",(0,c.jsxs)(n.ul,{children:["\n",(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:"类型："})," ",(0,c.jsx)(n.code,{children:"'web' | 'node' | 'modern-web' | 'web-worker'"})]}),"\n"]}),"\n",(0,c.jsx)(n.p,{children:"通过 target 参数可以判断当前构建的目标运行时环境。比如："}),"\n",(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:"language-js",children:"export default {\n  tools: {\n    webpack: (config, { target }) => {\n      if (target === 'node') {\n        // ...\n      }\n      return config;\n    },\n  },\n};\n"})}),"\n",(0,c.jsxs)(n.h4,{id:"isserver",children:["isServer",(0,c.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#isserver",children:"#"})]}),"\n",(0,c.jsxs)(n.ul,{children:["\n",(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:"类型："})," ",(0,c.jsx)(n.code,{children:"boolean"})]}),"\n"]}),"\n",(0,c.jsxs)(n.p,{children:["判断当前构建的目标运行时环境是否为 ",(0,c.jsx)(n.code,{children:"node"}),"，等价于 ",(0,c.jsx)(n.code,{children:"target === 'node'"}),"。"]}),"\n",(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:"language-js",children:"export default {\n  tools: {\n    webpack: (config, { isServer }) => {\n      if (isServer) {\n        // ...\n      }\n      return config;\n    },\n  },\n};\n"})}),"\n",(0,c.jsxs)(n.h4,{id:"iswebworker",children:["isWebWorker",(0,c.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#iswebworker",children:"#"})]}),"\n",(0,c.jsxs)(n.ul,{children:["\n",(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:"类型："})," ",(0,c.jsx)(n.code,{children:"boolean"})]}),"\n"]}),"\n",(0,c.jsxs)(n.p,{children:["判断当前构建的目标运行时环境是否为 ",(0,c.jsx)(n.code,{children:"web-worker"}),"，等价于 ",(0,c.jsx)(n.code,{children:"target === 'web-worker'"}),"。"]}),"\n",(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:"language-js",children:"export default {\n  tools: {\n    webpack: (config, { isWebWorker }) => {\n      if (isWebWorker) {\n        // ...\n      }\n      return config;\n    },\n  },\n};\n"})}),"\n",(0,c.jsxs)(n.h4,{id:"webpack",children:["webpack",(0,c.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#webpack",children:"#"})]}),"\n",(0,c.jsxs)(n.ul,{children:["\n",(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:"类型："})," ",(0,c.jsx)(n.code,{children:"typeof import('webpack')"})]}),"\n"]}),"\n",(0,c.jsx)(n.p,{children:"通过这个参数你可以拿到 webpack 实例。比如："}),"\n",(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:"language-js",children:"export default {\n  tools: {\n    webpack: (config, { webpack }) => {\n      config.plugins.push(new webpack.ProgressPlugin());\n      return config;\n    },\n  },\n};\n"})}),"\n",(0,c.jsxs)(n.h4,{id:"htmlwebpackplugin",children:["HtmlWebpackPlugin",(0,c.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#htmlwebpackplugin",children:"#"})]}),"\n",(0,c.jsxs)(n.ul,{children:["\n",(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:"类型："})," ",(0,c.jsx)(n.code,{children:"typeof import('html-webpack-plugin')"})]}),"\n"]}),"\n",(0,c.jsx)(n.p,{children:"通过这个参数你可以拿到 HtmlWebpackPlugin 实例。"}),"\n",(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:"language-js",children:"export default {\n  tools: {\n    webpackChain: (chain, { HtmlWebpackPlugin }) => {\n      console.log(HtmlWebpackPlugin);\n    },\n  },\n};\n"})}),"\n",(0,c.jsxs)(n.h4,{id:"addrules",children:["addRules",(0,c.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#addrules",children:"#"})]}),"\n",(0,c.jsxs)(n.ul,{children:["\n",(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:"类型："})," ",(0,c.jsx)(n.code,{children:"(rules: RuleSetRule | RuleSetRule[]) => void"})]}),"\n"]}),"\n",(0,c.jsxs)(n.p,{children:["添加额外的 ",(0,c.jsx)(n.a,{href:"https://webpack.js.org/configuration/module/#modulerules",target:"_blank",rel:"noopener noreferrer",children:"webpack rules"}),"。"]}),"\n",(0,c.jsx)(n.p,{children:"示例："}),"\n",(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:"language-ts",children:"export default {\n  tools: {\n    webpack: (config, { addRules }) => {\n      // 添加单条规则\n      addRules({\n        test: /\\.foo/,\n        loader: require.resolve('foo-loader'),\n      });\n\n      // 以数组形式添加多条规则\n      addRules([\n        {\n          test: /\\.foo/,\n          loader: require.resolve('foo-loader'),\n        },\n        {\n          test: /\\.bar/,\n          loader: require.resolve('bar-loader'),\n        },\n      ]);\n    },\n  },\n};\n"})}),"\n",(0,c.jsxs)(n.h4,{id:"prependplugins",children:["prependPlugins",(0,c.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#prependplugins",children:"#"})]}),"\n",(0,c.jsxs)(n.ul,{children:["\n",(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:"类型："})," ",(0,c.jsx)(n.code,{children:"(plugins: WebpackPluginInstance | WebpackPluginInstance[]) => void"})]}),"\n"]}),"\n",(0,c.jsx)(n.p,{children:"在内部 webpack 插件数组头部添加额外的插件，数组头部的插件会优先执行。"}),"\n",(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:"language-ts",children:"export default {\n  tools: {\n    webpack: (config, { prependPlugins, webpack }) => {\n      // 添加单个插件\n      prependPlugins(\n        new webpack.BannerPlugin({\n          banner: 'hello world!',\n        }),\n      );\n\n      // 以数组形式添加多个插件\n      prependPlugins([new PluginA(), new PluginB()]);\n    },\n  },\n};\n"})}),"\n",(0,c.jsxs)(n.h4,{id:"appendplugins",children:["appendPlugins",(0,c.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#appendplugins",children:"#"})]}),"\n",(0,c.jsxs)(n.ul,{children:["\n",(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:"类型："})," ",(0,c.jsx)(n.code,{children:"(plugins: WebpackPluginInstance | WebpackPluginInstance[]) => void"})]}),"\n"]}),"\n",(0,c.jsx)(n.p,{children:"在内部 webpack 插件数组尾部添加额外的插件，数组尾部的插件会在最后执行。"}),"\n",(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:"language-ts",children:"export default {\n  tools: {\n    webpack: (config, { appendPlugins, webpack }) => {\n      // 添加单个插件\n      appendPlugins([\n        new webpack.BannerPlugin({\n          banner: 'hello world!',\n        }),\n      ]);\n\n      // 以数组形式添加多个插件\n      appendPlugins([new PluginA(), new PluginB()]);\n    },\n  },\n};\n"})}),"\n",(0,c.jsxs)(n.h4,{id:"removeplugin",children:["removePlugin",(0,c.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#removeplugin",children:"#"})]}),"\n",(0,c.jsxs)(n.ul,{children:["\n",(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:"类型："})," ",(0,c.jsx)(n.code,{children:"(name: string) => void"})]}),"\n"]}),"\n",(0,c.jsxs)(n.p,{children:["删除内部的 webpack 插件，参数为该插件的 ",(0,c.jsx)(n.code,{children:"constructor.name"}),"。"]}),"\n",(0,c.jsxs)(n.p,{children:["例如，删除内部的 ",(0,c.jsx)(n.a,{href:"https://github.com/TypeStrong/fork-ts-checker-webpack-plugin",target:"_blank",rel:"noopener noreferrer",children:"fork-ts-checker-webpack-plugin"}),"："]}),"\n",(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:"language-ts",children:"export default {\n  tools: {\n    webpack: (config, { removePlugin }) => {\n      removePlugin('ForkTsCheckerWebpackPlugin');\n    },\n  },\n};\n"})}),"\n",(0,c.jsxs)(n.h4,{id:"mergeconfig",children:["mergeConfig",(0,c.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#mergeconfig",children:"#"})]}),"\n",(0,c.jsxs)(n.ul,{children:["\n",(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:"类型："})," ",(0,c.jsx)(n.code,{children:"(...configs: WebpackConfig[]) => WebpackConfig"})]}),"\n"]}),"\n",(0,c.jsxs)(n.p,{children:["用于合并多份 webpack 配置，等价于 ",(0,c.jsx)(n.a,{href:"https://github.com/survivejs/webpack-merge",target:"_blank",rel:"noopener noreferrer",children:"webpack-merge"}),"。"]}),"\n",(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:"language-ts",children:"export default {\n  tools: {\n    webpack: (config, { mergeConfig }) => {\n      return mergeConfig(config, {\n        devtool: 'eval',\n      });\n    },\n  },\n};\n"})}),"\n",(0,c.jsxs)(n.h4,{id:"getcompiledpath",children:["getCompiledPath",(0,c.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#getcompiledpath",children:"#"})]}),"\n",(0,c.jsxs)(n.ul,{children:["\n",(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:"类型："})," ",(0,c.jsx)(n.code,{children:"(name: string) => string"})]}),"\n"]}),"\n",(0,c.jsxs)(n.p,{children:["获取 builder 内置依赖的所在路径，等价于 ",(0,c.jsx)(n.a,{href:"https://modernjs.dev/builder/api/config-tools.html#toolswebpackchain",target:"_blank",rel:"noopener noreferrer",children:"webpackChain#getCompiledPath"}),"。"]})]})}(s=globalThis).__RSPRESS_PAGE_META||(s.__RSPRESS_PAGE_META={}),globalThis.__RSPRESS_PAGE_META["/home/runner/work/modern.js/modern.js/packages/document/builder-doc/docs/zh/config/tools/webpack.md"]={toc:[{text:"Object 类型",id:"object-类型",depth:3},{text:"Function 类型",id:"function-类型",depth:3},{text:"工具集合",id:"工具集合",depth:3},{text:"env",id:"env",depth:4},{text:"isProd",id:"isprod",depth:4},{text:"target",id:"target",depth:4},{text:"isServer",id:"isserver",depth:4},{text:"isWebWorker",id:"iswebworker",depth:4},{text:"webpack",id:"webpack",depth:4},{text:"HtmlWebpackPlugin",id:"htmlwebpackplugin",depth:4},{text:"addRules",id:"addrules",depth:4},{text:"prependPlugins",id:"prependplugins",depth:4},{text:"appendPlugins",id:"appendplugins",depth:4},{text:"removePlugin",id:"removeplugin",depth:4},{text:"mergeConfig",id:"mergeconfig",depth:4},{text:"getCompiledPath",id:"getcompiledpath",depth:4}],title:"",frontmatter:{}};var o=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=Object.assign({},(0,d.useMDXComponents)(),e.components).wrapper;return n?(0,c.jsx)(n,l._(i._({},e),{children:(0,c.jsx)(a,i._({},e))})):a(e)}},78672:function(e,n,r){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),Object.defineProperty(n,"default",{enumerable:!0,get:function(){return t}});var s,i=r("15169"),l=r("43932"),c=r("9880"),d=r("23169"),a=r.ir(r("89757"));function o(e){var n=Object.assign({h1:"h1",a:"a",div:"div",p:"p"},(0,d.useMDXComponents)(),e.components);return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsxs)(n.h1,{id:"toolswebpack",children:["tools.webpack",(0,c.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#toolswebpack",children:"#"})]}),"\n",(0,c.jsxs)(n.div,{className:"modern-directive tip",children:[(0,c.jsx)(n.div,{className:"modern-directive-title",children:"TIP"}),(0,c.jsx)(n.div,{className:"modern-directive-content",children:(0,c.jsxs)(n.p,{children:["该配置由 Modern.js Builder 提供，更多信息可参考 ",(0,c.jsx)(n.a,{href:"https://modernjs.dev/builder/api/config-tools.html#toolswebpack",target:"_blank",rel:"noopener noreferrer",children:"tools.webpack"}),"。\n"]})})]}),"\n","\n",(0,c.jsx)(a.default,{})]})}(s=globalThis).__RSPRESS_PAGE_META||(s.__RSPRESS_PAGE_META={}),globalThis.__RSPRESS_PAGE_META["/home/runner/work/modern.js/modern.js/packages/document/main-doc/docs/zh/configure/app/tools/webpack.mdx"]={toc:[],title:"tools.webpack",frontmatter:{sidebar_label:"webpack"}};var t=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=Object.assign({},(0,d.useMDXComponents)(),e.components).wrapper;return n?(0,c.jsx)(n,l._(i._({},e),{children:(0,c.jsx)(o,i._({},e))})):o(e)}}}]);