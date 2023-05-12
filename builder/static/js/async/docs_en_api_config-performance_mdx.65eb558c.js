(self.webpackChunk_modern_js_builder_doc=self.webpackChunk_modern_js_builder_doc||[]).push([["docs_en_api_config-performance_mdx"],{12163:function(e,n,s){"use strict";Object.defineProperty(n,"__esModule",{value:!0});!function(e,n){for(var s in n)Object.defineProperty(e,s,{enumerable:!0,get:n[s]})}(n,{frontmatter:function(){return p},title:function(){return u},toc:function(){return j},default:function(){return m}});var r=s("9880"),c=s("23169"),i=s.ir(s("14894")),l=s.ir(s("74215")),a=s.ir(s("96701")),d=s.ir(s("41410")),o=s.ir(s("8580")),t=s.ir(s("93668")),h=s.ir(s("8486")),p={extractApiHeaders:[2]},u="Performance Config",j=[{text:"performance.buildCache",depth:2,id:"performancebuildcache"},{text:"performance.bundleAnalyze",depth:2,id:"performancebundleanalyze"},{text:"performance.chunkSplit",depth:2,id:"performancechunksplit"},{text:"performance.printFileSize",depth:2,id:"performanceprintfilesize"},{text:"performance.profile",depth:2,id:"performanceprofile"},{text:"performance.removeConsole",depth:2,id:"performanceremoveconsole"},{text:"performance.removeMomentLocale",depth:2,id:"performanceremovemomentlocale"}];function x(e){var n=Object.assign({h1:"h1",a:"a",p:"p",h2:"h2"},(0,c.useMDXComponents)(),e.components);return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(n.h1,{id:"performance-config",children:["Performance Config",(0,r.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#performance-config",children:"#"})]}),"\n",(0,r.jsx)(n.p,{children:"This section describes some performance related configurations in Modern.js Builder."}),"\n",(0,r.jsxs)(n.h2,{id:"performancebuildcache",children:["performance.buildCache",(0,r.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#performancebuildcache",children:"#"})]}),"\n","\n",(0,r.jsx)(i.default,{}),"\n",(0,r.jsxs)(n.h2,{id:"performancebundleanalyze",children:["performance.bundleAnalyze",(0,r.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#performancebundleanalyze",children:"#"})]}),"\n","\n",(0,r.jsx)(l.default,{}),"\n",(0,r.jsxs)(n.h2,{id:"performancechunksplit",children:["performance.chunkSplit",(0,r.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#performancechunksplit",children:"#"})]}),"\n","\n",(0,r.jsx)(a.default,{}),"\n",(0,r.jsxs)(n.h2,{id:"performanceprintfilesize",children:["performance.printFileSize",(0,r.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#performanceprintfilesize",children:"#"})]}),"\n","\n",(0,r.jsx)(d.default,{}),"\n",(0,r.jsxs)(n.h2,{id:"performanceprofile",children:["performance.profile",(0,r.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#performanceprofile",children:"#"})]}),"\n","\n",(0,r.jsx)(o.default,{}),"\n",(0,r.jsxs)(n.h2,{id:"performanceremoveconsole",children:["performance.removeConsole",(0,r.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#performanceremoveconsole",children:"#"})]}),"\n","\n",(0,r.jsx)(t.default,{}),"\n",(0,r.jsxs)(n.h2,{id:"performanceremovemomentlocale",children:["performance.removeMomentLocale",(0,r.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#performanceremovemomentlocale",children:"#"})]}),"\n","\n",(0,r.jsx)(h.default,{})]})}var m=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=Object.assign({},(0,c.useMDXComponents)(),e.components).wrapper;return n?(0,r.jsx)(n,Object.assign({},e,{children:(0,r.jsx)(x,e)})):x(e)}},14894:function(e,n,s){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),Object.defineProperty(n,"default",{enumerable:!0,get:function(){return l}});var r=s("9880"),c=s("23169");function i(e){var n=Object.assign({ul:"ul",li:"li",strong:"strong",div:"div",pre:"pre",code:"code",p:"p"},(0,c.useMDXComponents)(),e.components);return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:(0,r.jsx)(n.strong,{children:"Type:"})}),"\n"]}),"\n",(0,r.jsx)(n.div,{className:"language-",children:(0,r.jsx)(n.div,{className:"modern-code-content",children:(0,r.jsx)(n.pre,{className:"code",children:(0,r.jsx)(n.code,{className:"language-ts",children:"type BuildCacheConfig =\n  | {\n      /**\n       * Base directory for the filesystem cache.\n       */\n      cacheDirectory?: string;\n    }\n  | boolean;\n"})})})}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:(0,r.jsx)(n.strong,{children:"Default:"})}),"\n"]}),"\n",(0,r.jsx)(n.div,{className:"language-",children:(0,r.jsx)(n.div,{className:"modern-code-content",children:(0,r.jsx)(n.pre,{className:"code",children:(0,r.jsx)(n.code,{className:"language-js",children:"const defaultBuildCacheConfig = {\n  cacheDirectory: './node_modules/.cache/webpack',\n};\n"})})})}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"Bundler:"})," ",(0,r.jsx)(n.code,{children:"only support webpack"})]}),"\n"]}),"\n",(0,r.jsx)(n.p,{children:"Controls the Builder's caching behavior during the build process."}),"\n",(0,r.jsxs)(n.p,{children:["Builder will enable build cache by default to improve the compile speed, the generated cache files are write to the ",(0,r.jsx)(n.code,{children:"./node_modules/.cache/webpack"})," directory by default."]}),"\n",(0,r.jsxs)(n.p,{children:["You can configure the cache path with ",(0,r.jsx)(n.code,{children:"buildCache"}),", e.g."]}),"\n",(0,r.jsx)(n.div,{className:"language-",children:(0,r.jsx)(n.div,{className:"modern-code-content",children:(0,r.jsx)(n.pre,{className:"code",children:(0,r.jsx)(n.code,{className:"language-js",children:"export default {\n  performance: {\n    buildCache: {\n      cacheDirectory: './node_modules/.custom_cache/webpack',\n    },\n  },\n};\n"})})})}),"\n",(0,r.jsxs)(n.p,{children:["You can also disable the build cache by setting it to ",(0,r.jsx)(n.code,{children:"false"}),":"]}),"\n",(0,r.jsx)(n.div,{className:"language-",children:(0,r.jsx)(n.div,{className:"modern-code-content",children:(0,r.jsx)(n.pre,{className:"code",children:(0,r.jsx)(n.code,{className:"language-js",children:"export default {\n  performance: {\n    buildCache: false,\n  },\n};\n"})})})})]})}var l=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=Object.assign({},(0,c.useMDXComponents)(),e.components).wrapper;return n?(0,r.jsx)(n,Object.assign({},e,{children:(0,r.jsx)(i,e)})):i(e)}},74215:function(e,n,s){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),Object.defineProperty(n,"default",{enumerable:!0,get:function(){return l}});var r=s("9880"),c=s("23169");function i(e){var n=Object.assign({ul:"ul",li:"li",strong:"strong",code:"code",p:"p",div:"div",pre:"pre"},(0,c.useMDXComponents)(),e.components);return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"Type:"})," ",(0,r.jsx)(n.code,{children:"Object | undefined"})]}),"\n"]}),"\n",(0,r.jsxs)(n.p,{children:["You have two ways to enable ",(0,r.jsx)(n.code,{children:"webpack-bundle-analyzer"})," to analyze the size of output files:"]}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["Add environment variable ",(0,r.jsx)(n.code,{children:"BUNDLE_ANALYZE=true"}),"."]}),"\n",(0,r.jsxs)(n.li,{children:["Add ",(0,r.jsx)(n.code,{children:"performance.bundleAnalyze"})," config."]}),"\n"]}),"\n",(0,r.jsxs)(n.p,{children:["By default, ",(0,r.jsx)(n.code,{children:"webpack-bundle-analyzer"})," is not enabled. When enabled, its configuration is as follows:"]}),"\n",(0,r.jsx)(n.div,{className:"language-",children:(0,r.jsx)(n.div,{className:"modern-code-content",children:(0,r.jsx)(n.pre,{className:"code",children:(0,r.jsx)(n.code,{className:"language-js",children:"{\n  analyzerMode: 'static',\n  openAnalyzer: false,\n  // `target` is the compilation target, such as `web`, `node`, etc.\n  reportFilename: `report-${target}.html`,\n}\n"})})})}),"\n",(0,r.jsxs)(n.p,{children:["You can override the default config through ",(0,r.jsx)(n.code,{children:"performance.bundleAnalyze"}),", for example:"]}),"\n",(0,r.jsx)(n.div,{className:"language-",children:(0,r.jsx)(n.div,{className:"modern-code-content",children:(0,r.jsx)(n.pre,{className:"code",children:(0,r.jsx)(n.code,{className:"language-js",children:"export default {\n  performance: {\n    bundleAnalyze: {\n      analyzerMode: 'server',\n      openAnalyzer: true,\n    },\n  },\n};\n"})})})})]})}var l=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=Object.assign({},(0,c.useMDXComponents)(),e.components).wrapper;return n?(0,r.jsx)(n,Object.assign({},e,{children:(0,r.jsx)(i,e)})):i(e)}},96701:function(e,n,s){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),Object.defineProperty(n,"default",{enumerable:!0,get:function(){return l}});var r=s("9880"),c=s("23169");function i(e){var n=Object.assign({ul:"ul",li:"li",strong:"strong",code:"code",p:"p",div:"div",pre:"pre",h3:"h3",a:"a",blockquote:"blockquote"},(0,c.useMDXComponents)(),e.components);return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"Type:"})," ",(0,r.jsx)(n.code,{children:"Object"})]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"Default:"})," ",(0,r.jsx)(n.code,{children:"{ strategy: 'split-by-experience' }"})]}),"\n"]}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.code,{children:"performance.chunkSplit"})," is used to configure the chunk splitting strategy. The type of ",(0,r.jsx)(n.code,{children:"ChunkSplit"})," is as follows:"]}),"\n",(0,r.jsx)(n.div,{className:"language-",children:(0,r.jsx)(n.div,{className:"modern-code-content",children:(0,r.jsx)(n.pre,{className:"code",children:(0,r.jsx)(n.code,{className:"language-ts",children:"type ForceSplitting = RegExp[] | Record<string, RegExp>;\n\ninterface BaseChunkSplit {\n  strategy?:\n    | 'split-by-module'\n    | 'split-by-experience'\n    | 'all-in-one'\n    | 'single-vendor';\n  override?: SplitChunks;\n  forceSplitting?: ForceSplitting;\n}\n\ninterface SplitBySize {\n  strategy?: 'split-by-size';\n  minSize?: number;\n  maxSize?: number;\n  override?: SplitChunks;\n  forceSplitting?: ForceSplitting;\n}\n\ninterface SplitCustom {\n  strategy?: 'custom';\n  splitChunks?: SplitChunks;\n  forceSplitting?: ForceSplitting;\n}\n\nexport type ChunkSplit = BaseChunkSplit | SplitBySize | SplitCustom;\n"})})})}),"\n",(0,r.jsxs)(n.h3,{id:"chunksplitstrategy",children:["chunkSplit.strategy",(0,r.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#chunksplitstrategy",children:"#"})]}),"\n",(0,r.jsx)(n.p,{children:"Builder supports the following chunk splitting strategies:"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.code,{children:"split-by-experience"}),": an empirical splitting strategy, automatically splits some commonly used npm packages into chunks of moderate size."]}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.code,{children:"split-by-module"}),": split by NPM package granularity, each NPM package corresponds to a chunk."]}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.code,{children:"split-by-size"}),": automatically split according to module size."]}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.code,{children:"all-in-one"}),": bundle all codes into one chunk."]}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.code,{children:"single-vendor"}),": bundle all NPM packages into a single chunk."]}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.code,{children:"custom"}),": custom chunk splitting strategy."]}),"\n"]}),"\n"]}),"\n",(0,r.jsxs)(n.h3,{id:"default-strategy",children:["Default Strategy",(0,r.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#default-strategy",children:"#"})]}),"\n",(0,r.jsxs)(n.p,{children:["Builder adopts the ",(0,r.jsx)(n.code,{children:"split-by-experience"})," strategy by default, which is a strategy we have developed from experience. Specifically, when the following npm packages are referenced in your project, they will automatically be split into separate chunks:"]}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"lib-polyfill.js"}),": includes ",(0,r.jsx)(n.code,{children:"core-js"}),", ",(0,r.jsx)(n.code,{children:"@babel/runtime"}),", ",(0,r.jsx)(n.code,{children:"@swc/helpers"}),"."]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"lib-react.js"}),": includes ",(0,r.jsx)(n.code,{children:"react"}),", ",(0,r.jsx)(n.code,{children:"react-dom"}),"."]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"lib-router.js"}),": includes ",(0,r.jsx)(n.code,{children:"react-router"}),", ",(0,r.jsx)(n.code,{children:"react-router-dom"}),", ",(0,r.jsx)(n.code,{children:"history"}),", ",(0,r.jsx)(n.code,{children:"@remix-run/router"}),"."]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"lib-lodash.js"}),": includes ",(0,r.jsx)(n.code,{children:"lodash"}),", ",(0,r.jsx)(n.code,{children:"lodash-es"}),"."]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"lib-antd.js"}),": includes ",(0,r.jsx)(n.code,{children:"antd"}),"."]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"lib-arco.js"}),": includes ",(0,r.jsx)(n.code,{children:"@arco-design/web-react"}),"."]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"lib-semi.js"}),": includes ",(0,r.jsx)(n.code,{children:"@douyinfe/semi-ui"}),"."]}),"\n"]}),"\n",(0,r.jsxs)(n.div,{className:"modern-directive tip",children:[(0,r.jsx)(n.div,{className:"modern-directive-title",children:"TIP"}),(0,r.jsx)(n.div,{className:"modern-directive-content",children:(0,r.jsx)(n.p,{children:"If the above npm packages are not installed or used in the project, the corresponding chunk will not be generated."})})]}),"\n",(0,r.jsxs)(n.p,{children:["If you want to use other splitting strategies, you can specify it via ",(0,r.jsx)(n.code,{children:"performance.chunkSplit.strategy"}),"."]}),"\n",(0,r.jsxs)(n.div,{className:"modern-directive tip",children:[(0,r.jsx)(n.div,{className:"modern-directive-title",children:"TIP"}),(0,r.jsx)(n.div,{className:"modern-directive-content",children:(0,r.jsxs)(n.p,{children:["The ",(0,r.jsx)(n.code,{children:"split-by-module"})," strategy is not supported when using Rspack as the bundler.\n"]})})]}),"\n",(0,r.jsxs)(n.h3,{id:"chunksplitminsize",children:["chunkSplit.minSize",(0,r.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#chunksplitminsize",children:"#"})]}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"Type:"})," ",(0,r.jsx)(n.code,{children:"number"})]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"Default:"})," ",(0,r.jsx)(n.code,{children:"10000"})]}),"\n"]}),"\n",(0,r.jsxs)(n.p,{children:["When ",(0,r.jsx)(n.code,{children:"performance.chunkSplit.strategy"})," is ",(0,r.jsx)(n.code,{children:"split-by-size"}),", you can specify the minimum size of a chunk via ",(0,r.jsx)(n.code,{children:"performance.chunkSplit.minSize"}),", the unit is bytes. The default value is ",(0,r.jsx)(n.code,{children:"10000"}),". For example:"]}),"\n",(0,r.jsx)(n.div,{className:"language-",children:(0,r.jsx)(n.div,{className:"modern-code-content",children:(0,r.jsx)(n.pre,{className:"code",children:(0,r.jsx)(n.code,{className:"language-js",children:"export default {\n  performance: {\n    chunkSplit: {\n      strategy: 'split-by-size',\n      minSize: 20000,\n    },\n  },\n};\n"})})})}),"\n",(0,r.jsxs)(n.h3,{id:"chunksplitmaxsize",children:["chunkSplit.maxSize",(0,r.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#chunksplitmaxsize",children:"#"})]}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"Type:"})," ",(0,r.jsx)(n.code,{children:"number"})]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"Default:"})," ",(0,r.jsx)(n.code,{children:"Infinity"})]}),"\n"]}),"\n",(0,r.jsxs)(n.p,{children:["When ",(0,r.jsx)(n.code,{children:"performance.chunkSplit.strategy"})," is ",(0,r.jsx)(n.code,{children:"split-by-size"}),", you can specify the maximum size of a chunk via ",(0,r.jsx)(n.code,{children:"performance.chunkSplit.maxSize"}),", the unit is bytes. The default value is ",(0,r.jsx)(n.code,{children:"Infinity"}),". For example:"]}),"\n",(0,r.jsx)(n.div,{className:"language-",children:(0,r.jsx)(n.div,{className:"modern-code-content",children:(0,r.jsx)(n.pre,{className:"code",children:(0,r.jsx)(n.code,{className:"language-js",children:"export default {\n  performance: {\n    chunkSplit: {\n      strategy: 'split-by-size',\n      maxSize: 50000,\n    },\n  },\n};\n"})})})}),"\n",(0,r.jsxs)(n.h3,{id:"chunksplitforcesplitting",children:["chunkSplit.forceSplitting",(0,r.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#chunksplitforcesplitting",children:"#"})]}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"Type:"})," ",(0,r.jsx)(n.code,{children:"RegExp[] | Record<string, RegExp>"})]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"Default:"})," ",(0,r.jsx)(n.code,{children:"[]"})]}),"\n"]}),"\n",(0,r.jsxs)(n.p,{children:["Via ",(0,r.jsx)(n.code,{children:"performance.chunkSplit.forceSplitting"}),", you can specify the NPM packages that need to be forced to split."]}),"\n",(0,r.jsxs)(n.p,{children:["For example, split the ",(0,r.jsx)(n.code,{children:"axios"})," library under node_modules into ",(0,r.jsx)(n.code,{children:"axios.js"}),":"]}),"\n",(0,r.jsx)(n.div,{className:"language-",children:(0,r.jsx)(n.div,{className:"modern-code-content",children:(0,r.jsx)(n.pre,{className:"code",children:(0,r.jsx)(n.code,{className:"language-js",children:"export default {\n   performance: {\n     chunkSplit: {\n       strategy: 'split-by-experience',\n       forceSplitting: {\n         axios: /node_modules\\/axios/,\n       },\n     },\n   },\n};\n"})})})}),"\n",(0,r.jsx)(n.p,{children:"This is an easier way than configuring webpack's splitChunks directly."}),"\n",(0,r.jsxs)(n.h3,{id:"chunksplitsplitchunks",children:["chunkSplit.splitChunks",(0,r.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#chunksplitsplitchunks",children:"#"})]}),"\n",(0,r.jsxs)(n.p,{children:["When ",(0,r.jsx)(n.code,{children:"performance.chunkSplit.strategy"})," is ",(0,r.jsx)(n.code,{children:"custom"}),", you can specify the custom webpack chunk splitting config via ",(0,r.jsx)(n.code,{children:"performance.chunkSplit.splitChunks"}),". This config will be merged with the webpack splitChunks config (the ",(0,r.jsx)(n.code,{children:"cacheGroups"})," config will also be merged). For example:"]}),"\n",(0,r.jsx)(n.div,{className:"language-",children:(0,r.jsx)(n.div,{className:"modern-code-content",children:(0,r.jsx)(n.pre,{className:"code",children:(0,r.jsx)(n.code,{className:"language-js",children:"export default {\n  performance: {\n    chunkSplit: {\n      strategy: 'custom',\n      splitChunks: {\n        cacheGroups: {\n          react: {\n            test: /[\\\\/]node_modules[\\\\/](react|react-dom)[\\\\/]/,\n            name: 'react',\n            chunks: 'all',\n          },\n        },\n      },\n    },\n  },\n};\n"})})})}),"\n",(0,r.jsxs)(n.h3,{id:"chunksplitoverride",children:["chunkSplit.override",(0,r.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#chunksplitoverride",children:"#"})]}),"\n",(0,r.jsxs)(n.p,{children:["When ",(0,r.jsx)(n.code,{children:"performance.chunkSplit.strategy"})," is ",(0,r.jsx)(n.code,{children:"split-by-experience"}),", ",(0,r.jsx)(n.code,{children:"split-by-module"}),", ",(0,r.jsx)(n.code,{children:"split-by-size"})," or ",(0,r.jsx)(n.code,{children:"single-vendor"}),", you can specify the custom webpack chunk splitting config via ",(0,r.jsx)(n.code,{children:"performance.chunkSplit.override"}),". This config will be merged with the webpack splitChunks config (the ",(0,r.jsx)(n.code,{children:"cacheGroups"})," config will also be merged). For example:"]}),"\n",(0,r.jsx)(n.div,{className:"language-",children:(0,r.jsx)(n.div,{className:"modern-code-content",children:(0,r.jsx)(n.pre,{className:"code",children:(0,r.jsx)(n.code,{className:"language-js",children:"export default {\n  performance: {\n    chunkSplit: {\n      strategy: 'split-by-experience',\n      override: {\n        cacheGroups: {\n          react: {\n            test: /[\\\\/]node_modules[\\\\/](react|react-dom)[\\\\/]/,\n            name: 'react',\n            chunks: 'all',\n          },\n        },\n      },\n    },\n  },\n};\n"})})})}),"\n",(0,r.jsxs)(n.blockquote,{children:["\n",(0,r.jsx)(n.p,{children:'When the Builder target is "node", since Node Bundles do not need to be splitted to optimize loading performance, the chunkSplit rule will not take effect.'}),"\n"]})]})}var l=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=Object.assign({},(0,c.useMDXComponents)(),e.components).wrapper;return n?(0,r.jsx)(n,Object.assign({},e,{children:(0,r.jsx)(i,e)})):i(e)}},41410:function(e,n,s){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),Object.defineProperty(n,"default",{enumerable:!0,get:function(){return l}});var r=s("9880"),c=s("23169");function i(e){var n=Object.assign({ul:"ul",li:"li",strong:"strong",code:"code",p:"p",div:"div",pre:"pre",h3:"h3",a:"a"},(0,c.useMDXComponents)(),e.components);return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"Type:"})," ",(0,r.jsx)(n.code,{children:"boolean"})]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"Default:"})," ",(0,r.jsx)(n.code,{children:"true"})]}),"\n"]}),"\n",(0,r.jsx)(n.p,{children:"Whether to print the file sizes after production build."}),"\n",(0,r.jsx)(n.div,{className:"language-",children:(0,r.jsx)(n.div,{className:"modern-code-content",children:(0,r.jsx)(n.pre,{className:"code",children:(0,r.jsx)(n.code,{className:"language-bash",children:"info    File sizes after production build:\n\n  File                                     Size         Gzipped\n  dist/static/js/lib-corejs.1c836fe7.js    212.89 kB    66.57 kB\n  dist/static/js/lib-react.fcafbc5c.js     134.65 kB    43.45 kB\n  dist/static/js/main.6ff06f70.js          8.93 kB      3.73 kB\n  dist/static/css/main.9f48031b.css        2.64 kB      927 B\n  dist/html/main/index.html                1.64 kB      874 B\n"})})})}),"\n",(0,r.jsxs)(n.h3,{id:"example",children:["Example",(0,r.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#example",children:"#"})]}),"\n",(0,r.jsx)(n.p,{children:"Disable the logs:"}),"\n",(0,r.jsx)(n.div,{className:"language-",children:(0,r.jsx)(n.div,{className:"modern-code-content",children:(0,r.jsx)(n.pre,{className:"code",children:(0,r.jsx)(n.code,{className:"language-ts",children:"export default {\n  performance: {\n    printFileSize: false,\n  },\n};\n"})})})})]})}var l=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=Object.assign({},(0,c.useMDXComponents)(),e.components).wrapper;return n?(0,r.jsx)(n,Object.assign({},e,{children:(0,r.jsx)(i,e)})):i(e)}},8580:function(e,n,s){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),Object.defineProperty(n,"default",{enumerable:!0,get:function(){return l}});var r=s("9880"),c=s("23169");function i(e){var n=Object.assign({ul:"ul",li:"li",strong:"strong",code:"code",p:"p",a:"a",h3:"h3",div:"div",pre:"pre"},(0,c.useMDXComponents)(),e.components);return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"Type:"})," ",(0,r.jsx)(n.code,{children:"boolean"})]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"Default:"})," ",(0,r.jsx)(n.code,{children:"false"})]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"Bundler:"})," ",(0,r.jsx)(n.code,{children:"only support webpack"})]}),"\n"]}),"\n",(0,r.jsxs)(n.p,{children:["Whether capture timing information for each module, same as the ",(0,r.jsx)(n.a,{href:"https://webpack.js.org/configuration/other-options/#profile",target:"_blank",rel:"noopener noreferrer",children:"profile"})," config of webpack."]}),"\n",(0,r.jsxs)(n.h3,{id:"example",children:["Example",(0,r.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#example",children:"#"})]}),"\n",(0,r.jsx)(n.div,{className:"language-",children:(0,r.jsx)(n.div,{className:"modern-code-content",children:(0,r.jsx)(n.pre,{className:"code",children:(0,r.jsx)(n.code,{className:"language-js",children:"export default {\n  performance: {\n    profile: true,\n  },\n};\n"})})})}),"\n",(0,r.jsx)(n.p,{children:"When turned on, webpack generates a JSON file with some statistics about the module that includes information about timing information for each module."})]})}var l=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=Object.assign({},(0,c.useMDXComponents)(),e.components).wrapper;return n?(0,r.jsx)(n,Object.assign({},e,{children:(0,r.jsx)(i,e)})):i(e)}},93668:function(e,n,s){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),Object.defineProperty(n,"default",{enumerable:!0,get:function(){return l}});var r=s("9880"),c=s("23169");function i(e){var n=Object.assign({ul:"ul",li:"li",strong:"strong",code:"code",p:"p",h4:"h4",a:"a",div:"div",pre:"pre"},(0,c.useMDXComponents)(),e.components);return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"Type:"})," ",(0,r.jsx)(n.code,{children:"boolean | ConsoleType[]"})]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"Default:"})," ",(0,r.jsx)(n.code,{children:"false"})]}),"\n"]}),"\n",(0,r.jsxs)(n.p,{children:["Whether to remove ",(0,r.jsx)(n.code,{children:"console.xx"})," in production build."]}),"\n",(0,r.jsxs)(n.h4,{id:"remove-all-consoles",children:["Remove all consoles",(0,r.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#remove-all-consoles",children:"#"})]}),"\n",(0,r.jsxs)(n.p,{children:["When ",(0,r.jsx)(n.code,{children:"removeConsole"})," is set to ",(0,r.jsx)(n.code,{children:"true"}),", all types of ",(0,r.jsx)(n.code,{children:"console.xx"})," are removed:"]}),"\n",(0,r.jsx)(n.div,{className:"language-",children:(0,r.jsx)(n.div,{className:"modern-code-content",children:(0,r.jsx)(n.pre,{className:"code",children:(0,r.jsx)(n.code,{className:"language-ts",children:"export default {\n  performance: {\n    removeConsole: true,\n  },\n};\n"})})})}),"\n",(0,r.jsxs)(n.h4,{id:"remove-specific-console",children:["Remove specific console",(0,r.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#remove-specific-console",children:"#"})]}),"\n",(0,r.jsxs)(n.p,{children:["You can also specify to remove only certain types of ",(0,r.jsx)(n.code,{children:"console.xx"}),", such as ",(0,r.jsx)(n.code,{children:"console.log"})," and ",(0,r.jsx)(n.code,{children:"console.warn"}),":"]}),"\n",(0,r.jsx)(n.div,{className:"language-",children:(0,r.jsx)(n.div,{className:"modern-code-content",children:(0,r.jsx)(n.pre,{className:"code",children:(0,r.jsx)(n.code,{className:"language-ts",children:"export default {\n  performance: {\n    removeConsole: ['log', 'warn'],\n  },\n};\n"})})})}),"\n",(0,r.jsx)(n.p,{children:"The following types of console are currently supported:"}),"\n",(0,r.jsx)(n.div,{className:"language-",children:(0,r.jsx)(n.div,{className:"modern-code-content",children:(0,r.jsx)(n.pre,{className:"code",children:(0,r.jsx)(n.code,{className:"language-ts",children:"type ConsoleType = 'log' | 'info' | 'warn' | 'error' | 'table' | 'group';\n"})})})})]})}var l=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=Object.assign({},(0,c.useMDXComponents)(),e.components).wrapper;return n?(0,r.jsx)(n,Object.assign({},e,{children:(0,r.jsx)(i,e)})):i(e)}},8486:function(e,n,s){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),Object.defineProperty(n,"default",{enumerable:!0,get:function(){return l}});var r=s("9880"),c=s("23169");function i(e){var n=Object.assign({ul:"ul",li:"li",strong:"strong",code:"code",p:"p",a:"a",div:"div",pre:"pre"},(0,c.useMDXComponents)(),e.components);return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"Type:"})," ",(0,r.jsx)(n.code,{children:"boolean"})]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"Default:"})," ",(0,r.jsx)(n.code,{children:"false"})]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"Bundler:"})," ",(0,r.jsx)(n.code,{children:"only support webpack"})]}),"\n"]}),"\n",(0,r.jsxs)(n.p,{children:["Whether to remove the locales of ",(0,r.jsx)(n.a,{href:"https://momentjs.com/",target:"_blank",rel:"noopener noreferrer",children:"moment.js"}),"."]}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.code,{children:"moment.js"})," contains a lot of locales by default, which will increase the bundle size."]}),"\n",(0,r.jsxs)(n.p,{children:["When ",(0,r.jsx)(n.code,{children:"moment.js"})," is used in the project, it is recommended to enable this option to automatically exclude all locales:"]}),"\n",(0,r.jsx)(n.div,{className:"language-",children:(0,r.jsx)(n.div,{className:"modern-code-content",children:(0,r.jsx)(n.pre,{className:"code",children:(0,r.jsx)(n.code,{className:"language-js",children:"export default {\n  performance: {\n    removeMomentLocale: true,\n  },\n};\n"})})})}),"\n",(0,r.jsx)(n.p,{children:"Once enabled, you can load a specific locale via:"}),"\n",(0,r.jsx)(n.div,{className:"language-",children:(0,r.jsx)(n.div,{className:"modern-code-content",children:(0,r.jsx)(n.pre,{className:"code",children:(0,r.jsx)(n.code,{className:"language-js",children:"import moment from 'moment';\nimport 'moment/locale/zh-cn';\n\nmoment.locale('zh-cn');\n"})})})})]})}var l=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=Object.assign({},(0,c.useMDXComponents)(),e.components).wrapper;return n?(0,r.jsx)(n,Object.assign({},e,{children:(0,r.jsx)(i,e)})):i(e)}}}]);