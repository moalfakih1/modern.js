(self.webpackChunk_modern_js_main_doc=self.webpackChunk_modern_js_main_doc||[]).push([["docs_en_configure_app_tools_css-loader_mdx"],{53092:function(e,n,s){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),Object.defineProperty(n,"default",{enumerable:!0,get:function(){return a}});var r,o=s("15169"),t=s("43932"),i=s("9880"),c=s("23169");function d(e){var n=Object.assign({ul:"ul",li:"li",strong:"strong",code:"code",p:"p",a:"a",pre:"pre",div:"div",h3:"h3"},(0,c.useMDXComponents)(),e.components);return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"Type:"})," ",(0,i.jsx)(n.code,{children:"Object | Function"})]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"Default:"})," ",(0,i.jsx)(n.code,{children:"undefined"})]}),"\n"]}),"\n",(0,i.jsxs)(n.p,{children:["The config of ",(0,i.jsx)(n.a,{href:"https://github.com/webpack-contrib/css-loader",target:"_blank",rel:"noopener noreferrer",children:"css-loader"})," can be modified through ",(0,i.jsx)(n.code,{children:"tools.cssLoader"}),". The default config is as follows:"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-js",children:"{\n  modules: {\n    auto: true,\n    exportLocalsConvention: 'camelCase',\n    localIdentName: config.output.cssModuleLocalIdentName,\n    // isServer indicates node (SSR) build\n    // isWebWorker indicates web worker build\n    exportOnlyLocals: isServer || isWebWorker,\n  },\n  // CSS Source Map enabled by default in development environment\n  sourceMap: isDev,\n  // importLoaders is `1` when compiling css files, and is `2` when compiling sass/less files\n  importLoaders: 1 || 2,\n}\n"})}),"\n",(0,i.jsxs)(n.div,{className:"modern-directive tip",children:[(0,i.jsx)(n.div,{className:"modern-directive-title",children:"TIP"}),(0,i.jsx)(n.div,{className:"modern-directive-content",children:(0,i.jsxs)(n.p,{children:["When using Rspack as the bundler, this configuration is only supported when set ",(0,i.jsx)(n.a,{href:"https://modernjs.dev/builder/api/config-output.html#outputdisablecssextract",target:"_blank",rel:"noopener noreferrer",children:"disableCssExtract"})," is true.\n"]})})]}),"\n",(0,i.jsxs)(n.h3,{id:"object-type",children:["Object Type",(0,i.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#object-type",children:"#"})]}),"\n",(0,i.jsx)(n.p,{children:"When this value is an Object, it is merged with the default config via deep merge. For example:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-js",children:"export default {\n  tools: {\n    cssLoader: {\n      modules: {\n        exportOnlyLocals: true,\n      },\n    },\n  },\n};\n"})}),"\n",(0,i.jsxs)(n.h3,{id:"function-type",children:["Function Type",(0,i.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#function-type",children:"#"})]}),"\n",(0,i.jsx)(n.p,{children:"When the value is a Function, the default config is passed in as the first parameter. You can modify the config object directly, or return an object as the final config. For example:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-js",children:"export default {\n  tools: {\n    cssLoader: config => {\n      config.modules.exportOnlyLocals = true;\n      return config;\n    },\n  },\n};\n"})})]})}(r=globalThis).__RSPRESS_PAGE_META||(r.__RSPRESS_PAGE_META={}),globalThis.__RSPRESS_PAGE_META["/home/runner/work/modern.js/modern.js/packages/document/builder-doc/docs/en/config/tools/cssLoader.md"]={toc:[{text:"Object Type",id:"object-type",depth:3},{text:"Function Type",id:"function-type",depth:3}],title:"",frontmatter:{}};var a=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=Object.assign({},(0,c.useMDXComponents)(),e.components).wrapper;return n?(0,i.jsx)(n,t._(o._({},e),{children:(0,i.jsx)(d,o._({},e))})):d(e)}},63914:function(e,n,s){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),Object.defineProperty(n,"default",{enumerable:!0,get:function(){return l}});var r,o=s("15169"),t=s("43932"),i=s("9880"),c=s("23169"),d=s.ir(s("53092"));function a(e){var n=Object.assign({h1:"h1",a:"a",div:"div",p:"p"},(0,c.useMDXComponents)(),e.components);return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsxs)(n.h1,{id:"toolscssloader",children:["tools.cssLoader",(0,i.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#toolscssloader",children:"#"})]}),"\n",(0,i.jsxs)(n.div,{className:"modern-directive tip",children:[(0,i.jsx)(n.div,{className:"modern-directive-title",children:"TIP"}),(0,i.jsx)(n.div,{className:"modern-directive-content",children:(0,i.jsxs)(n.p,{children:["This config is provided by Modern.js Builder, more detail can see ",(0,i.jsx)(n.a,{href:"https://modernjs.dev/builder/en/api/config-tools.html#toolscssloader",target:"_blank",rel:"noopener noreferrer",children:"tools.cssLoader"}),".\n"]})})]}),"\n","\n",(0,i.jsx)(d.default,{})]})}(r=globalThis).__RSPRESS_PAGE_META||(r.__RSPRESS_PAGE_META={}),globalThis.__RSPRESS_PAGE_META["/home/runner/work/modern.js/modern.js/packages/document/main-doc/docs/en/configure/app/tools/css-loader.mdx"]={toc:[],title:"tools.cssLoader",frontmatter:{sidebar_label:"cssLoader"}};var l=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=Object.assign({},(0,c.useMDXComponents)(),e.components).wrapper;return n?(0,i.jsx)(n,t._(o._({},e),{children:(0,i.jsx)(a,o._({},e))})):a(e)}}}]);