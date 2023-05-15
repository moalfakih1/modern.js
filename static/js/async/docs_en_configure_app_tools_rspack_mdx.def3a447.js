(self.webpackChunk_modern_js_main_doc=self.webpackChunk_modern_js_main_doc||[]).push([["docs_en_configure_app_tools_rspack_mdx"],{1687:function(e,n,s){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),Object.defineProperty(n,"default",{enumerable:!0,get:function(){return a}});var r=s("9880"),i=s("23169");function l(e){var n=Object.assign({ul:"ul",li:"li",strong:"strong",code:"code",p:"p",a:"a",h3:"h3",div:"div",pre:"pre",h4:"h4"},(0,i.useMDXComponents)(),e.components);return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"Type:"})," ",(0,r.jsx)(n.code,{children:"Object"})," | ",(0,r.jsx)(n.code,{children:"Function"})," | ",(0,r.jsx)(n.code,{children:"undefined"})]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"Default:"})," ",(0,r.jsx)(n.code,{children:"undefined"})]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"Bundler:"})," ",(0,r.jsx)(n.code,{children:"only support Rspack"})]}),"\n"]}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.code,{children:"tools.rspack"})," is used to configure ",(0,r.jsx)(n.a,{href:"https://www.rspack.dev/",target:"_blank",rel:"noopener noreferrer",children:"Rspack"}),"."]}),"\n",(0,r.jsxs)(n.h3,{id:"object-type",children:["Object Type",(0,r.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#object-type",children:"#"})]}),"\n",(0,r.jsxs)(n.p,{children:["You can configure it as an object, which will be merged with the original Rspack configuration through ",(0,r.jsx)(n.a,{href:"https://github.com/survivejs/webpack-merge",target:"_blank",rel:"noopener noreferrer",children:"webpack-merge"}),". For example:"]}),"\n",(0,r.jsx)(n.div,{className:"language-",children:(0,r.jsx)(n.div,{className:"modern-code-content",children:(0,r.jsx)(n.pre,{className:"code",children:(0,r.jsx)(n.code,{className:"language-js",children:"export default {\n  tools: {\n    rspack: {\n      resolve: {\n        alias: {\n          '@util': 'src/util',\n        },\n      },\n    },\n  },\n};\n"})})})}),"\n",(0,r.jsxs)(n.h3,{id:"function-type",children:["Function Type",(0,r.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#function-type",children:"#"})]}),"\n",(0,r.jsx)(n.p,{children:"You can also configure it as a function, which accepts one parameter, the original Rspack configuration, you can modify this configuration, and then return a new configuration. For example:"}),"\n",(0,r.jsx)(n.div,{className:"language-",children:(0,r.jsx)(n.div,{className:"modern-code-content",children:(0,r.jsx)(n.pre,{className:"code",children:(0,r.jsx)(n.code,{className:"language-js",children:"export default {\n  tools: {\n    rspack: config => {\n      config.resolve.alias['@util'] = 'src/util';\n      return config;\n    },\n  },\n};\n"})})})}),"\n",(0,r.jsx)(n.p,{children:"The second parameter of this function is an object that contains some information about the tool collection. Details are as follows:"}),"\n",(0,r.jsxs)(n.h3,{id:"utils",children:["Utils",(0,r.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#utils",children:"#"})]}),"\n",(0,r.jsxs)(n.h4,{id:"env",children:["env",(0,r.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#env",children:"#"})]}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"Type:"})," ",(0,r.jsx)(n.code,{children:"'development' | 'production' | 'test'"})]}),"\n"]}),"\n",(0,r.jsxs)(n.p,{children:["The ",(0,r.jsx)(n.code,{children:"env"})," parameter can be used to determine whether the current environment is development, production or test. For example:"]}),"\n",(0,r.jsx)(n.div,{className:"language-",children:(0,r.jsx)(n.div,{className:"modern-code-content",children:(0,r.jsx)(n.pre,{className:"code",children:(0,r.jsx)(n.code,{className:"language-js",children:"export default {\n  tools: {\n    rspack: (config, { env }) => {\n      if (env === 'development') {\n        config.devtool = 'cheap-module-eval-source-map';\n      }\n      return config;\n    },\n  },\n};\n"})})})}),"\n",(0,r.jsxs)(n.h4,{id:"isprod",children:["isProd",(0,r.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#isprod",children:"#"})]}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"Type:"})," ",(0,r.jsx)(n.code,{children:"boolean"})]}),"\n"]}),"\n",(0,r.jsxs)(n.p,{children:["The ",(0,r.jsx)(n.code,{children:"isProd"})," parameter can be used to determine whether the current environment is production. For example:"]}),"\n",(0,r.jsx)(n.div,{className:"language-",children:(0,r.jsx)(n.div,{className:"modern-code-content",children:(0,r.jsx)(n.pre,{className:"code",children:(0,r.jsx)(n.code,{className:"language-js",children:"export default {\n  tools: {\n    rspack: (config, { isProd }) => {\n      if (isProd) {\n        config.devtool = 'source-map';\n      }\n      return config;\n    },\n  },\n};\n"})})})}),"\n",(0,r.jsxs)(n.h4,{id:"target",children:["target",(0,r.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#target",children:"#"})]}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"Type:"})," ",(0,r.jsx)(n.code,{children:"'web' | 'node' | 'modern-web' | 'web-worker'"})]}),"\n"]}),"\n",(0,r.jsxs)(n.p,{children:["The ",(0,r.jsx)(n.code,{children:"target"})," parameter can be used to determine the current target. For example:"]}),"\n",(0,r.jsx)(n.div,{className:"language-",children:(0,r.jsx)(n.div,{className:"modern-code-content",children:(0,r.jsx)(n.pre,{className:"code",children:(0,r.jsx)(n.code,{className:"language-js",children:"export default {\n  tools: {\n    rspack: (config, { target }) => {\n      if (target === 'node') {\n        // ...\n      }\n      return config;\n    },\n  },\n};\n"})})})}),"\n",(0,r.jsxs)(n.h4,{id:"isserver",children:["isServer",(0,r.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#isserver",children:"#"})]}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"Type:"})," ",(0,r.jsx)(n.code,{children:"boolean"})]}),"\n"]}),"\n",(0,r.jsxs)(n.p,{children:["Determines whether the target environment is ",(0,r.jsx)(n.code,{children:"node"}),", equivalent to ",(0,r.jsx)(n.code,{children:"target === 'node'"}),"."]}),"\n",(0,r.jsx)(n.div,{className:"language-",children:(0,r.jsx)(n.div,{className:"modern-code-content",children:(0,r.jsx)(n.pre,{className:"code",children:(0,r.jsx)(n.code,{className:"language-js",children:"export default {\n  tools: {\n    rspack: (config, { isServer }) => {\n      if (isServer) {\n        // ...\n      }\n      return config;\n    },\n  },\n};\n"})})})}),"\n",(0,r.jsxs)(n.h4,{id:"iswebworker",children:["isWebWorker",(0,r.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#iswebworker",children:"#"})]}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"Type:"})," ",(0,r.jsx)(n.code,{children:"boolean"})]}),"\n"]}),"\n",(0,r.jsxs)(n.p,{children:["Determines whether the target environment is ",(0,r.jsx)(n.code,{children:"web-worker"}),", equivalent to ",(0,r.jsx)(n.code,{children:"target === 'web-worker'"}),"."]}),"\n",(0,r.jsx)(n.div,{className:"language-",children:(0,r.jsx)(n.div,{className:"modern-code-content",children:(0,r.jsx)(n.pre,{className:"code",children:(0,r.jsx)(n.code,{className:"language-js",children:"export default {\n  tools: {\n    rspack: (config, { isWebWorker }) => {\n      if (isWebWorker) {\n        // ...\n      }\n      return config;\n    },\n  },\n};\n"})})})}),"\n",(0,r.jsxs)(n.h3,{id:"addrules",children:["addRules",(0,r.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#addrules",children:"#"})]}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"Type:"})," ",(0,r.jsx)(n.code,{children:"(rules: RuleSetRule | RuleSetRule[]) => void"})]}),"\n"]}),"\n",(0,r.jsxs)(n.p,{children:["Add additional ",(0,r.jsx)(n.a,{href:"https://www.rspack.dev/config/module.html#modulerules",target:"_blank",rel:"noopener noreferrer",children:"Rspack rules"}),"."]}),"\n",(0,r.jsx)(n.p,{children:"For example:"}),"\n",(0,r.jsx)(n.div,{className:"language-",children:(0,r.jsx)(n.div,{className:"modern-code-content",children:(0,r.jsx)(n.pre,{className:"code",children:(0,r.jsx)(n.code,{className:"language-ts",children:"export default {\n  tools: {\n    rspack: (config, { addRules }) => {\n      // add a single rule\n      addRules({\n        test: /\\.foo/,\n        loader: require.resolve('foo-loader'),\n      });\n\n      // Add multiple rules as an array\n      addRules([\n        {\n          test: /\\.foo/,\n          loader: require.resolve('foo-loader'),\n        },\n        {\n          test: /\\.bar/,\n          loader: require.resolve('bar-loader'),\n        },\n      ]);\n    },\n  },\n};\n"})})})}),"\n",(0,r.jsxs)(n.h3,{id:"prependplugins",children:["prependPlugins",(0,r.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#prependplugins",children:"#"})]}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"Type:"})," ",(0,r.jsx)(n.code,{children:"(plugins: RspackPluginInstance | RspackPluginInstance[]) => void"})]}),"\n"]}),"\n",(0,r.jsx)(n.p,{children:"Add additional plugins to the head of the internal Rspack plugins array, and the plugin will be executed first."}),"\n",(0,r.jsx)(n.div,{className:"language-",children:(0,r.jsx)(n.div,{className:"modern-code-content",children:(0,r.jsx)(n.pre,{className:"code",children:(0,r.jsx)(n.code,{className:"language-ts",children:"export default {\n  tools: {\n    rspack: (config, { prependPlugins }) => {\n      // add a single plugin\n      prependPlugins(new PluginA());\n\n      // Add multiple plugins\n      prependPlugins([new PluginA(), new PluginB()]);\n    },\n  },\n};\n"})})})}),"\n",(0,r.jsxs)(n.h3,{id:"appendplugins",children:["appendPlugins",(0,r.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#appendplugins",children:"#"})]}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"Type:"})," ",(0,r.jsx)(n.code,{children:"(plugins: RspackPluginInstance | RspackPluginInstance[]) => void"})]}),"\n"]}),"\n",(0,r.jsx)(n.p,{children:"Add additional plugins at the end of the internal Rspack plugins array, the plugin will be executed last."}),"\n",(0,r.jsx)(n.div,{className:"language-",children:(0,r.jsx)(n.div,{className:"modern-code-content",children:(0,r.jsx)(n.pre,{className:"code",children:(0,r.jsx)(n.code,{className:"language-ts",children:"export default {\n  tools: {\n    rspack: (config, { appendPlugins }) => {\n      // add a single plugin\n      appendPlugins([new PluginA()]);\n\n      // Add multiple plugins\n      appendPlugins([new PluginA(), new PluginB()]);\n    },\n  },\n};\n"})})})}),"\n",(0,r.jsxs)(n.h3,{id:"removeplugin",children:["removePlugin",(0,r.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#removeplugin",children:"#"})]}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"Type:"})," ",(0,r.jsx)(n.code,{children:"(name: string) => void"})]}),"\n"]}),"\n",(0,r.jsxs)(n.p,{children:["Remove the internal Rspack plugin, the parameter is the ",(0,r.jsx)(n.code,{children:"constructor.name"})," of the plugin."]}),"\n",(0,r.jsxs)(n.p,{children:["For example, remove the internal ",(0,r.jsx)(n.a,{href:"https://github.com/webpack-contrib/webpack-bundle-analyzer",target:"_blank",rel:"noopener noreferrer",children:"webpack-bundle-analyzer"}),":"]}),"\n",(0,r.jsx)(n.div,{className:"language-",children:(0,r.jsx)(n.div,{className:"modern-code-content",children:(0,r.jsx)(n.pre,{className:"code",children:(0,r.jsx)(n.code,{className:"language-ts",children:"export default {\n  tools: {\n    rspack: (config, { removePlugin }) => {\n      removePlugin('BundleAnalyzerPlugin');\n    },\n  },\n};\n"})})})}),"\n",(0,r.jsxs)(n.h3,{id:"mergeconfig",children:["mergeConfig",(0,r.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#mergeconfig",children:"#"})]}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"Type:"})," ",(0,r.jsx)(n.code,{children:"(...configs: RspackConfig[]) => RspackConfig"})]}),"\n"]}),"\n",(0,r.jsxs)(n.p,{children:["Used to merge multiple Rspack configs, same as ",(0,r.jsx)(n.a,{href:"https://github.com/survivejs/webpack-merge",target:"_blank",rel:"noopener noreferrer",children:"webpack-merge"}),"."]}),"\n",(0,r.jsx)(n.div,{className:"language-",children:(0,r.jsx)(n.div,{className:"modern-code-content",children:(0,r.jsx)(n.pre,{className:"code",children:(0,r.jsx)(n.code,{className:"language-ts",children:"export default {\n  tools: {\n    rspack: (config, { mergeConfig }) => {\n      return mergeConfig(config, {\n        devtool: 'eval',\n      });\n    },\n  },\n};\n"})})})}),"\n",(0,r.jsxs)(n.h3,{id:"getcompiledpath",children:["getCompiledPath",(0,r.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#getcompiledpath",children:"#"})]}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"Type:"})," ",(0,r.jsx)(n.code,{children:"(name: string) => string"})]}),"\n"]}),"\n",(0,r.jsx)(n.p,{children:"Get the path to the builder built-in dependencies, such as:"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"sass"}),"\n",(0,r.jsx)(n.li,{children:"sass-loader"}),"\n",(0,r.jsx)(n.li,{children:"less"}),"\n",(0,r.jsx)(n.li,{children:"less-loader"}),"\n",(0,r.jsx)(n.li,{children:"babel-loader"}),"\n",(0,r.jsx)(n.li,{children:"url-loader"}),"\n",(0,r.jsx)(n.li,{children:"file-loader"}),"\n",(0,r.jsx)(n.li,{children:"..."}),"\n"]}),"\n",(0,r.jsx)(n.p,{children:"This method is usually used when you need to reuse the same dependency with the builder."}),"\n",(0,r.jsxs)(n.div,{className:"modern-directive tip",children:[(0,r.jsx)(n.div,{className:"modern-directive-title",children:"TIP"}),(0,r.jsx)(n.div,{className:"modern-directive-content",children:(0,r.jsx)(n.p,{children:"Builder built-in dependencies are subject to change with version iterations, e.g. generate large version break changes. Please avoid using this API if it is not necessary."})})]}),"\n",(0,r.jsx)(n.div,{className:"language-",children:(0,r.jsx)(n.div,{className:"modern-code-content",children:(0,r.jsx)(n.pre,{className:"code",children:(0,r.jsx)(n.code,{className:"language-js",children:"export default {\n  tools: {\n    rspack: (config, { getCompiledPath }) => {\n      const loaderPath = getCompiledPath('less-loader');\n      // ...\n    },\n  },\n};\n"})})})})]})}var a=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=Object.assign({},(0,i.useMDXComponents)(),e.components).wrapper;return n?(0,r.jsx)(n,Object.assign({},e,{children:(0,r.jsx)(l,e)})):l(e)}},34124:function(e,n,s){"use strict";Object.defineProperty(n,"__esModule",{value:!0});!function(e,n){for(var s in n)Object.defineProperty(e,s,{enumerable:!0,get:n[s]})}(n,{frontmatter:function(){return a},title:function(){return d},toc:function(){return c},default:function(){return t}});var r=s("9880"),i=s("23169"),l=s.ir(s("1687")),a={sidebar_label:"rspack"},d="tools.rspack",c=[];function o(e){var n=Object.assign({h1:"h1",a:"a",div:"div",p:"p"},(0,i.useMDXComponents)(),e.components);return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(n.h1,{id:"toolsrspack",children:["tools.rspack",(0,r.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#toolsrspack",children:"#"})]}),"\n",(0,r.jsxs)(n.div,{className:"modern-directive tip",children:[(0,r.jsx)(n.div,{className:"modern-directive-title",children:"TIP"}),(0,r.jsx)(n.div,{className:"modern-directive-content",children:(0,r.jsxs)(n.p,{children:["This config is provided by Modern.js Builder, more detail can see ",(0,r.jsx)(n.a,{href:"https://modernjs.dev/builder/en/api/config-tools.html#toolsrspack",target:"_blank",rel:"noopener noreferrer",children:"tools.rspack"}),".\n"]})})]}),"\n","\n",(0,r.jsx)(l.default,{})]})}var t=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=Object.assign({},(0,i.useMDXComponents)(),e.components).wrapper;return n?(0,r.jsx)(n,Object.assign({},e,{children:(0,r.jsx)(o,e)})):o(e)}}}]);