(self.webpackChunk_modern_js_main_doc=self.webpackChunk_modern_js_main_doc||[]).push([["docs_zh_configure_app_html_inject-by-entries_mdx"],{7607:function(e,n,r){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),Object.defineProperty(n,"default",{enumerable:!0,get:function(){return c}});var i=r("9880"),s=r("23169");function t(e){var n=Object.assign({ul:"ul",li:"li",strong:"strong",code:"code",p:"p",h3:"h3",a:"a",pre:"pre"},(0,s.useMDXComponents)(),e.components);return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"类型："})," ",(0,i.jsx)(n.code,{children:"Record<string, boolean | string>"})]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"默认值："})," ",(0,i.jsx)(n.code,{children:"undefined"})]}),"\n"]}),"\n",(0,i.jsx)(n.p,{children:"用于在多页面的场景下，为不同的页面设置不同的 script 标签插入位置。"}),"\n",(0,i.jsxs)(n.p,{children:["整体用法与 ",(0,i.jsx)(n.code,{children:"inject"})," 一致，并且可以使用「入口名称」作为 key ，对各个页面进行单独设置。"]}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.code,{children:"injectByEntries"})," 的优先级高于 ",(0,i.jsx)(n.code,{children:"inject"}),"，因此会覆盖 ",(0,i.jsx)(n.code,{children:"inject"})," 中设置的值。"]}),"\n",(0,i.jsxs)(n.h3,{id:"示例",children:["示例",(0,i.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#示例",children:"#"})]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-js",children:"export default {\n  html: {\n    inject: 'head',\n    injectByEntries: {\n      foo: 'body',\n    },\n  },\n};\n"})}),"\n",(0,i.jsx)(n.p,{children:"重新编译后，可以看到:"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["页面 ",(0,i.jsx)(n.code,{children:"foo"})," 的 script 标签会插入到 ",(0,i.jsx)(n.code,{children:"body"})," 标签内。"]}),"\n",(0,i.jsxs)(n.li,{children:["其他页面的 script 标签会插入到 ",(0,i.jsx)(n.code,{children:"head"})," 标签内。"]}),"\n"]})]})}var c=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=Object.assign({},(0,s.useMDXComponents)(),e.components).wrapper;return n?(0,i.jsx)(n,Object.assign({},e,{children:(0,i.jsx)(t,e)})):t(e)}},45933:function(e,n,r){"use strict";Object.defineProperty(n,"__esModule",{value:!0});!function(e,n){for(var r in n)Object.defineProperty(e,r,{enumerable:!0,get:n[r]})}(n,{frontmatter:function(){return c},title:function(){return d},toc:function(){return l},default:function(){return a}});var i=r("9880"),s=r("23169"),t=r.ir(r("7607")),c={sidebar_label:"injectByEntries"},d="html.injectByEntries",l=[];function o(e){var n=Object.assign({h1:"h1",a:"a",div:"div",p:"p"},(0,s.useMDXComponents)(),e.components);return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsxs)(n.h1,{id:"htmlinjectbyentries",children:["html.injectByEntries",(0,i.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#htmlinjectbyentries",children:"#"})]}),"\n",(0,i.jsxs)(n.div,{className:"modern-directive tip",children:[(0,i.jsx)(n.div,{className:"modern-directive-title",children:"TIP"}),(0,i.jsx)(n.div,{className:"modern-directive-content",children:(0,i.jsxs)(n.p,{children:["该配置由 Modern.js Builder 提供，更多信息可参考 ",(0,i.jsx)(n.a,{href:"https://modernjs.dev/builder/api/config-html.html#htmlinjectbyentries",target:"_blank",rel:"noopener noreferrer",children:"html.injectByEntries"}),"。\n"]})})]}),"\n","\n",(0,i.jsx)(t.default,{})]})}var a=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=Object.assign({},(0,s.useMDXComponents)(),e.components).wrapper;return n?(0,i.jsx)(n,Object.assign({},e,{children:(0,i.jsx)(o,e)})):o(e)}}}]);