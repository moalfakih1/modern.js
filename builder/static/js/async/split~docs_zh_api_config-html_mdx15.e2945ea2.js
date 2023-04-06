(self.webpackChunkwebpack=self.webpackChunkwebpack||[]).push([["split~docs_zh_api_config-html_mdx15"],{43135:function(e,n,s){"use strict";Object.defineProperty(n,"__esModule",{value:!0});!function(e,n){for(var s in n)Object.defineProperty(e,s,{enumerable:!0,get:n[s]})}(n,{frontmatter:function(){return r},title:function(){return a},toc:function(){return d},default:function(){return l}});var c=s("12151"),t=s("21447"),r={},a="",d=[{text:"示例",depth:3,id:"示例"}];function i(e){var n=Object.assign({ul:"ul",li:"li",strong:"strong",code:"code",p:"p",h3:"h3",a:"a",div:"div",button:"button",pre:"pre"},(0,t.useMDXComponents)(),e.components);return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsxs)(n.ul,{children:["\n",(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:"类型："})," ",(0,c.jsx)(n.code,{children:"Record<string, Meta>"})]}),"\n",(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:"默认值："})," ",(0,c.jsx)(n.code,{children:"undefined"})]}),"\n"]}),"\n",(0,c.jsx)(n.p,{children:"用于在多页面的场景下，为不同的页面设置不同的 meta 标签。"}),"\n",(0,c.jsxs)(n.p,{children:["整体用法与 ",(0,c.jsx)(n.code,{children:"meta"})," 一致，并且可以使用「入口名称」作为 key ，对各个页面进行单独设置。"]}),"\n",(0,c.jsxs)(n.p,{children:[(0,c.jsx)(n.code,{children:"metaByEntries"})," 的优先级高于 ",(0,c.jsx)(n.code,{children:"meta"}),"，因此会覆盖 ",(0,c.jsx)(n.code,{children:"meta"})," 中设置的值。"]}),"\n",(0,c.jsxs)(n.h3,{id:"示例",children:["示例",(0,c.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#示例",children:"#"})]}),"\n",(0,c.jsx)(n.div,{className:"language-",children:(0,c.jsxs)(n.div,{className:"modern-code-content",children:[(0,c.jsx)(n.button,{className:"copy"}),(0,c.jsx)(n.pre,{className:"code",children:(0,c.jsx)(n.code,{className:"language-js",children:"export default {\n  html: {\n    meta: {\n      description: 'ByteDance',\n    },\n    metaByEntries: {\n      foo: {\n        description: 'TikTok',\n      },\n    },\n  },\n};\n"})})]})}),"\n",(0,c.jsxs)(n.p,{children:["编译后，可以看到页面 ",(0,c.jsx)(n.code,{children:"foo"})," 的 meta 为："]}),"\n",(0,c.jsx)(n.div,{className:"language-",children:(0,c.jsxs)(n.div,{className:"modern-code-content",children:[(0,c.jsx)(n.button,{className:"copy"}),(0,c.jsx)(n.pre,{className:"code",children:(0,c.jsx)(n.code,{className:"language-html",children:'<meta name="description" content="TikTok" />\n'})})]})}),"\n",(0,c.jsx)(n.p,{children:"其他页面的 meta 为："}),"\n",(0,c.jsx)(n.div,{className:"language-",children:(0,c.jsxs)(n.div,{className:"modern-code-content",children:[(0,c.jsx)(n.button,{className:"copy"}),(0,c.jsx)(n.pre,{className:"code",children:(0,c.jsx)(n.code,{className:"language-html",children:'<meta name="description" content="ByteDance" />\n'})})]})})]})}var l=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=Object.assign({},(0,t.useMDXComponents)(),e.components).wrapper;return n?(0,c.jsx)(n,Object.assign({},e,{children:(0,c.jsx)(i,e)})):i(e)}}}]);