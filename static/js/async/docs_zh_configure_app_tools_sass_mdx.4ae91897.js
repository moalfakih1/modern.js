(self.webpackChunk_modern_js_main_doc=self.webpackChunk_modern_js_main_doc||[]).push([["docs_zh_configure_app_tools_sass_mdx"],{52295:function(e,s,n){"use strict";Object.defineProperty(s,"__esModule",{value:!0}),Object.defineProperty(s,"default",{enumerable:!0,get:function(){return i}});var r,d=n("15169"),o=n("43932"),c=n("9880"),a=n("23169");function t(e){var s=Object.assign({ul:"ul",li:"li",strong:"strong",code:"code",pre:"pre",p:"p",a:"a",h3:"h3",h4:"h4"},(0,a.useMDXComponents)(),e.components);return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsxs)(s.ul,{children:["\n",(0,c.jsxs)(s.li,{children:[(0,c.jsx)(s.strong,{children:"类型："})," ",(0,c.jsx)(s.code,{children:"Object | Function"})]}),"\n",(0,c.jsx)(s.li,{children:(0,c.jsx)(s.strong,{children:"默认值："})}),"\n"]}),"\n",(0,c.jsx)(s.pre,{children:(0,c.jsx)(s.code,{className:"language-js",children:"const defaultOptions = {\n  // 默认在开发环境下启用 CSS 的 Source Map\n  sourceMap: isDev,\n};\n"})}),"\n",(0,c.jsxs)(s.p,{children:["你可以通过 ",(0,c.jsx)(s.code,{children:"tools.sass"})," 修改 ",(0,c.jsx)(s.a,{href:"https://github.com/webpack-contrib/sass-loader",target:"_blank",rel:"noopener noreferrer",children:"sass-loader"})," 的配置。"]}),"\n",(0,c.jsxs)(s.h3,{id:"object-类型",children:["Object 类型",(0,c.jsx)(s.a,{className:"header-anchor","aria-hidden":"true",href:"#object-类型",children:"#"})]}),"\n",(0,c.jsxs)(s.p,{children:["当 ",(0,c.jsx)(s.code,{children:"tools.sass"})," 的值为 ",(0,c.jsx)(s.code,{children:"Object"})," 类型时，会与默认配置通过 Object.assign 进行浅层合并，值得注意的是，",(0,c.jsx)(s.code,{children:"sassOptions"})," 会通过 deepMerge 进行深层合并。"]}),"\n",(0,c.jsx)(s.pre,{children:(0,c.jsx)(s.code,{className:"language-js",children:"export default {\n  tools: {\n    sass: {\n      sourceMap: true,\n    },\n  },\n};\n"})}),"\n",(0,c.jsxs)(s.h3,{id:"function-类型",children:["Function 类型",(0,c.jsx)(s.a,{className:"header-anchor","aria-hidden":"true",href:"#function-类型",children:"#"})]}),"\n",(0,c.jsxs)(s.p,{children:["当 ",(0,c.jsx)(s.code,{children:"tools.sass"})," 为 Function 类型时，默认配置作为第一个参数传入，可以直接修改配置对象，也可以返回一个值作为最终结果，第二个参数提供了一些可以直接调用的工具函数："]}),"\n",(0,c.jsx)(s.pre,{children:(0,c.jsx)(s.code,{className:"language-js",children:"export default {\n  tools: {\n    sass(config) {\n      // 修改 sourceMap 配置\n      config.additionalData = async (content, loaderContext) => {\n        // ...\n      };\n    },\n  },\n};\n"})}),"\n",(0,c.jsxs)(s.h3,{id:"工具函数",children:["工具函数",(0,c.jsx)(s.a,{className:"header-anchor","aria-hidden":"true",href:"#工具函数",children:"#"})]}),"\n",(0,c.jsxs)(s.h4,{id:"addexcludes",children:["addExcludes",(0,c.jsx)(s.a,{className:"header-anchor","aria-hidden":"true",href:"#addexcludes",children:"#"})]}),"\n",(0,c.jsxs)(s.ul,{children:["\n",(0,c.jsxs)(s.li,{children:[(0,c.jsx)(s.strong,{children:"类型："})," ",(0,c.jsx)(s.code,{children:"(excludes: RegExp | RegExp[]) => void"})]}),"\n"]}),"\n",(0,c.jsxs)(s.p,{children:["用来指定 ",(0,c.jsx)(s.code,{children:"sass-loader"})," 不编译哪些文件，你可以传入一个或多个正则表达式来匹配 sass 文件的路径。例如："]}),"\n",(0,c.jsx)(s.pre,{children:(0,c.jsx)(s.code,{className:"language-js",children:"export default {\n  tools: {\n    sass(config, { addExcludes }) {\n      addExcludes(/node_modules/);\n    },\n  },\n};\n"})})]})}(r=globalThis).__RSPRESS_PAGE_META||(r.__RSPRESS_PAGE_META={}),globalThis.__RSPRESS_PAGE_META["/home/runner/work/modern.js/modern.js/packages/document/builder-doc/docs/zh/config/tools/sass.md"]={toc:[{text:"Object 类型",id:"object-类型",depth:3},{text:"Function 类型",id:"function-类型",depth:3},{text:"工具函数",id:"工具函数",depth:3},{text:"addExcludes",id:"addexcludes",depth:4}],title:"",frontmatter:{}};var i=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},s=Object.assign({},(0,a.useMDXComponents)(),e.components).wrapper;return s?(0,c.jsx)(s,o._(d._({},e),{children:(0,c.jsx)(t,d._({},e))})):t(e)}},96962:function(e,s,n){"use strict";Object.defineProperty(s,"__esModule",{value:!0}),Object.defineProperty(s,"default",{enumerable:!0,get:function(){return l}});var r,d=n("15169"),o=n("43932"),c=n("9880"),a=n("23169"),t=n.ir(n("52295"));function i(e){var s=Object.assign({h1:"h1",a:"a",div:"div",p:"p"},(0,a.useMDXComponents)(),e.components);return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsxs)(s.h1,{id:"toolssass",children:["tools.sass",(0,c.jsx)(s.a,{className:"header-anchor","aria-hidden":"true",href:"#toolssass",children:"#"})]}),"\n",(0,c.jsxs)(s.div,{className:"modern-directive tip",children:[(0,c.jsx)(s.div,{className:"modern-directive-title",children:"TIP"}),(0,c.jsx)(s.div,{className:"modern-directive-content",children:(0,c.jsxs)(s.p,{children:["该配置由 Modern.js Builder 提供，更多信息可参考 ",(0,c.jsx)(s.a,{href:"https://modernjs.dev/builder/api/config-tools.html#toolssass",target:"_blank",rel:"noopener noreferrer",children:"tools.sass"}),"。\n"]})})]}),"\n","\n",(0,c.jsx)(t.default,{})]})}(r=globalThis).__RSPRESS_PAGE_META||(r.__RSPRESS_PAGE_META={}),globalThis.__RSPRESS_PAGE_META["/home/runner/work/modern.js/modern.js/packages/document/main-doc/docs/zh/configure/app/tools/sass.mdx"]={toc:[],title:"tools.sass",frontmatter:{sidebar_label:"sass"}};var l=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},s=Object.assign({},(0,a.useMDXComponents)(),e.components).wrapper;return s?(0,c.jsx)(s,o._(d._({},e),{children:(0,c.jsx)(i,d._({},e))})):i(e)}}}]);