(self.webpackChunk_modern_js_main_doc=self.webpackChunk_modern_js_main_doc||[]).push([["docs_zh_configure_app_tools_html-plugin_mdx"],{31107:function(e,n,r){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),Object.defineProperty(n,"default",{enumerable:!0,get:function(){return i}});var s=r("9880"),l=r("23169");function t(e){var n=Object.assign({ul:"ul",li:"li",strong:"strong",code:"code",div:"div",pre:"pre",p:"p",a:"a",h3:"h3"},(0,l.useMDXComponents)(),e.components);return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"类型："})," ",(0,s.jsx)(n.code,{children:"false | Object | Function"})]}),"\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.strong,{children:"默认值："})}),"\n"]}),"\n",(0,s.jsx)(n.div,{className:"language-",children:(0,s.jsx)(n.div,{className:"modern-code-content",children:(0,s.jsx)(n.pre,{className:"code",children:(0,s.jsx)(n.code,{className:"language-js",children:"const defaultHtmlPluginOptions = {\n  inject, // 对应 html.inject 配置项\n  favicon, // 对应 html.favicon 配置项\n  filename, // 基于 output.distPath 和 entryName 生成\n  template, // 默认为内置的 HTML 模板路径\n  templateParameters, // 对应 html.templateParameters 配置项\n  chunks: [entryName],\n  minify: {\n    removeComments: false,\n    useShortDoctype: true,\n    keepClosingSlash: true,\n    collapseWhitespace: true,\n    removeRedundantAttributes: true,\n    removeScriptTypeAttributes: true,\n    removeStyleLinkTypeAttributes: true,\n  },\n};\n"})})})}),"\n",(0,s.jsxs)(n.p,{children:["通过 ",(0,s.jsx)(n.code,{children:"tools.htmlPlugin"})," 可以修改 ",(0,s.jsx)(n.a,{href:"https://github.com/jantimon/html-webpack-plugin",target:"_blank",rel:"noopener noreferrer",children:"html-webpack-plugin"})," 或 ",(0,s.jsx)(n.a,{href:"https://github.com/web-infra-dev/rspack/tree/main/packages/rspack-plugin-html",target:"_blank",rel:"noopener noreferrer",children:"@rspack/plugin-html"})," 的配置项。"]}),"\n",(0,s.jsxs)(n.h3,{id:"object-类型",children:["Object 类型",(0,s.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#object-类型",children:"#"})]}),"\n",(0,s.jsxs)(n.p,{children:["当 ",(0,s.jsx)(n.code,{children:"tools.htmlPlugin"})," 的值为 ",(0,s.jsx)(n.code,{children:"Object"})," 类型时，会与默认配置通过 ",(0,s.jsx)(n.code,{children:"Object.assign"})," 合并。"]}),"\n",(0,s.jsx)(n.div,{className:"language-",children:(0,s.jsx)(n.div,{className:"modern-code-content",children:(0,s.jsx)(n.pre,{className:"code",children:(0,s.jsx)(n.code,{className:"language-js",children:"export default {\n  tools: {\n    htmlPlugin: {\n      scriptLoading: 'blocking',\n    },\n  },\n};\n"})})})}),"\n",(0,s.jsxs)(n.h3,{id:"function-类型",children:["Function 类型",(0,s.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#function-类型",children:"#"})]}),"\n",(0,s.jsxs)(n.p,{children:["当 ",(0,s.jsx)(n.code,{children:"tools.htmlPlugin"})," 为 Function 类型时："]}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"第一个参数是默认配置的对象，可以直接修改该对象。"}),"\n",(0,s.jsx)(n.li,{children:"第二个参数是也是一个对象，包含了 entry 的名称和 entry 的值。"}),"\n",(0,s.jsx)(n.li,{children:"函数可以 return 一个新的对象作为最终的配置。"}),"\n"]}),"\n",(0,s.jsx)(n.div,{className:"language-",children:(0,s.jsx)(n.div,{className:"modern-code-content",children:(0,s.jsx)(n.pre,{className:"code",children:(0,s.jsx)(n.code,{className:"language-js",children:"export default {\n  tools: {\n    htmlPlugin(config, { entryName, entryValue }) {\n      if (entryName === 'main') {\n        config.scriptLoading = 'blocking';\n      }\n    },\n  },\n};\n"})})})}),"\n",(0,s.jsxs)(n.h3,{id:"boolean-类型",children:["Boolean 类型",(0,s.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#boolean-类型",children:"#"})]}),"\n",(0,s.jsxs)(n.p,{children:["将 ",(0,s.jsx)(n.code,{children:"tools.htmlPlugin"})," 配置为 ",(0,s.jsx)(n.code,{children:"false"}),"，可以禁用默认的 ",(0,s.jsx)(n.code,{children:"html-webpack-plugin"})," 插件。"]}),"\n",(0,s.jsx)(n.div,{className:"language-",children:(0,s.jsx)(n.div,{className:"modern-code-content",children:(0,s.jsx)(n.pre,{className:"code",children:(0,s.jsx)(n.code,{className:"language-js",children:"export default {\n  tools: {\n    htmlPlugin: false,\n  },\n};\n"})})})})]})}var i=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=Object.assign({},(0,l.useMDXComponents)(),e.components).wrapper;return n?(0,s.jsx)(n,Object.assign({},e,{children:(0,s.jsx)(t,e)})):t(e)}},28693:function(e,n,r){"use strict";Object.defineProperty(n,"__esModule",{value:!0});!function(e,n){for(var r in n)Object.defineProperty(e,r,{enumerable:!0,get:n[r]})}(n,{frontmatter:function(){return i},title:function(){return c},toc:function(){return a},default:function(){return d}});var s=r("9880"),l=r("23169"),t=r.ir(r("31107")),i={sidebar_label:"htmlPlugin"},c="tools.htmlPlugin",a=[];function o(e){var n=Object.assign({h1:"h1",a:"a",div:"div",p:"p"},(0,l.useMDXComponents)(),e.components);return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)(n.h1,{id:"toolshtmlplugin",children:["tools.htmlPlugin",(0,s.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#toolshtmlplugin",children:"#"})]}),"\n",(0,s.jsxs)(n.div,{className:"modern-directive tip",children:[(0,s.jsx)(n.div,{className:"modern-directive-title",children:"TIP"}),(0,s.jsx)(n.div,{className:"modern-directive-content",children:(0,s.jsxs)(n.p,{children:["该配置由 Modern.js Builder 提供，更多信息可参考 ",(0,s.jsx)(n.a,{href:"https://modernjs.dev/builder/api/config-tools.html#toolshtmlplugin",target:"_blank",rel:"noopener noreferrer",children:"tools.htmlPlugin"}),"。\n"]})})]}),"\n","\n",(0,s.jsx)(t.default,{})]})}var d=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=Object.assign({},(0,l.useMDXComponents)(),e.components).wrapper;return n?(0,s.jsx)(n,Object.assign({},e,{children:(0,s.jsx)(o,e)})):o(e)}}}]);