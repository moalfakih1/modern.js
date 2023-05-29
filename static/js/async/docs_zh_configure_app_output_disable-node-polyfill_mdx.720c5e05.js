(self.webpackChunk_modern_js_main_doc=self.webpackChunk_modern_js_main_doc||[]).push([["docs_zh_configure_app_output_disable-node-polyfill_mdx"],{45946:function(e,n,l){"use strict";Object.defineProperty(n,"__esModule",{value:!0});!function(e,n){for(var l in n)Object.defineProperty(e,l,{enumerable:!0,get:n[l]})}(n,{frontmatter:function(){return i},title:function(){return d},toc:function(){return s},default:function(){return c}});var o=l("9880"),r=l("23169"),i={sidebar_label:"disableNodePolyfill"},d="output.disableNodePolyfill",s=[];function t(e){var n=Object.assign({h1:"h1",a:"a",ul:"ul",li:"li",strong:"strong",code:"code",p:"p",pre:"pre"},(0,r.useMDXComponents)(),e.components);return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsxs)(n.h1,{id:"outputdisablenodepolyfill",children:["output.disableNodePolyfill",(0,o.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#outputdisablenodepolyfill",children:"#"})]}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.strong,{children:"类型："})," ",(0,o.jsx)(n.code,{children:"boolean"})]}),"\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.strong,{children:"默认值："})," ",(0,o.jsx)(n.code,{children:"true"})]}),"\n"]}),"\n",(0,o.jsx)(n.p,{children:"该配置项用于控制是否在代码中注入 Node 模块的 Polyfill。"}),"\n",(0,o.jsxs)(n.p,{children:["默认情况下，我们不会将 Node Polyfill 注入到代码中，以避免造成代码体积增大。如果你需要注入 Node Polyfill，可以将 ",(0,o.jsx)(n.code,{children:"output.disableNodePolyfill"})," 设置为 ",(0,o.jsx)(n.code,{children:"false"}),"："]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-ts",meta:'title="modern.config.ts"',children:"export default defineConfig({\n  output: {\n    disableNodePolyfill: false,\n  },\n});\n"})}),"\n",(0,o.jsxs)(n.p,{children:["该配置项基于 Modern.js Builder 的 Node Polyfill 插件实现，你可以阅读 ",(0,o.jsx)(n.a,{href:"https://modernjs.dev/builder/plugins/plugin-node-polyfill.html",target:"_blank",rel:"noopener noreferrer",children:"Modern.js Builder - Node Polyfill 插件"})," 文档来了解详细信息。"]})]})}var c=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=Object.assign({},(0,r.useMDXComponents)(),e.components).wrapper;return n?(0,o.jsx)(n,Object.assign({},e,{children:(0,o.jsx)(t,e)})):t(e)}}}]);