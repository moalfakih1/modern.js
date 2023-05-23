(self.webpackChunk_modern_js_main_doc=self.webpackChunk_modern_js_main_doc||[]).push([["docs_zh_configure_app_source_exclude_mdx"],{31356:function(e,n,r){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),Object.defineProperty(n,"default",{enumerable:!0,get:function(){return d}});var s=r("9880"),c=r("23169");function i(e){var n=Object.assign({ul:"ul",li:"li",strong:"strong",code:"code",p:"p",a:"a",div:"div",pre:"pre"},(0,c.useMDXComponents)(),e.components);return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"类型："})," ",(0,s.jsx)(n.code,{children:"Array<string | RegExp>"})]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"默认值："})," ",(0,s.jsx)(n.code,{children:"[]"})]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"打包工具："})," ",(0,s.jsx)(n.code,{children:"仅支持 webpack"})]}),"\n"]}),"\n",(0,s.jsxs)(n.p,{children:["指定不需要编译的 JavaScript/TypeScript 文件。用法与 webpack 中的 ",(0,s.jsx)(n.a,{href:"https://webpack.js.org/configuration/module/#ruleexclude",target:"_blank",rel:"noopener noreferrer",children:"Rule.exclude"})," 一致，支持传入字符串或正则表达式来匹配模块的路径。"]}),"\n",(0,s.jsxs)(n.div,{className:"modern-directive tip",children:[(0,s.jsx)(n.div,{className:"modern-directive-title",children:"TIP"}),(0,s.jsx)(n.div,{className:"modern-directive-content",children:(0,s.jsxs)(n.p,{children:["在使用 Rspack 作为打包工具时，默认",(0,s.jsx)(n.strong,{children:"所有文件"}),"都会经过编译，同时，不支持通过 ",(0,s.jsx)(n.code,{children:"source.exclude"})," 排除。\n"]})})]}),"\n",(0,s.jsx)(n.p,{children:"比如:"}),"\n",(0,s.jsx)(n.div,{className:"language-",children:(0,s.jsx)(n.div,{className:"modern-code-content",children:(0,s.jsx)(n.pre,{className:"code",children:(0,s.jsx)(n.code,{className:"language-js",children:"import path from 'path';\n\nexport default {\n  source: {\n    exclude: [path.resolve(__dirname, 'src/module-a'), /src\\/module-b/],\n  },\n};\n"})})})})]})}var d=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=Object.assign({},(0,c.useMDXComponents)(),e.components).wrapper;return n?(0,s.jsx)(n,Object.assign({},e,{children:(0,s.jsx)(i,e)})):i(e)}},87335:function(e,n,r){"use strict";Object.defineProperty(n,"__esModule",{value:!0});!function(e,n){for(var r in n)Object.defineProperty(e,r,{enumerable:!0,get:n[r]})}(n,{frontmatter:function(){return d},title:function(){return t},toc:function(){return o},default:function(){return a}});var s=r("9880"),c=r("23169"),i=r.ir(r("31356")),d={sidebar_label:"exclude"},t="source.exclude",o=[];function l(e){var n=Object.assign({h1:"h1",a:"a",div:"div",p:"p"},(0,c.useMDXComponents)(),e.components);return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)(n.h1,{id:"sourceexclude",children:["source.exclude",(0,s.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#sourceexclude",children:"#"})]}),"\n",(0,s.jsxs)(n.div,{className:"modern-directive tip",children:[(0,s.jsx)(n.div,{className:"modern-directive-title",children:"TIP"}),(0,s.jsx)(n.div,{className:"modern-directive-content",children:(0,s.jsxs)(n.p,{children:["该配置由 Modern.js Builder 提供，更多信息可参考 ",(0,s.jsx)(n.a,{href:"https://modernjs.dev/builder/api/config-source.html#sourceexclude",target:"_blank",rel:"noopener noreferrer",children:"source.exclude"}),"。\n"]})})]}),"\n","\n",(0,s.jsx)(i.default,{})]})}var a=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=Object.assign({},(0,c.useMDXComponents)(),e.components).wrapper;return n?(0,s.jsx)(n,Object.assign({},e,{children:(0,s.jsx)(l,e)})):l(e)}}}]);