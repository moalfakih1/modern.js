(self.webpackChunkwebpack=self.webpackChunkwebpack||[]).push([["split~docs_zh_api_config-html_mdx1"],{78185:function(e,n,t){"use strict";Object.defineProperty(n,"__esModule",{value:!0});!function(e,n){for(var t in n)Object.defineProperty(e,t,{enumerable:!0,get:n[t]})}(n,{frontmatter:function(){return c},title:function(){return a},toc:function(){return i},default:function(){return d}});var r=t("12151"),s=t("21447");let c={},a="",i=[{text:"示例",depth:3,id:"示例"}];function l(e){let n=Object.assign({ul:"ul",li:"li",strong:"strong",code:"code",p:"p",h3:"h3",a:"a",div:"div",button:"button",pre:"pre"},(0,s.useMDXComponents)(),e.components);return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"类型："})," ",(0,r.jsx)(n.code,{children:"Object"})]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"默认值："})," ",(0,r.jsx)(n.code,{children:"undefined"})]}),"\n"]}),"\n",(0,r.jsx)(n.p,{children:"用于在多页面的场景下，为不同的页面设置不同的模板参数。"}),"\n",(0,r.jsxs)(n.p,{children:["整体用法与 ",(0,r.jsx)(n.code,{children:"templateParameters"})," 一致，并且可以使用「入口名称」作为 key ，对各个页面进行单独设置。"]}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.code,{children:"templateParametersByEntries"})," 的优先级高于 ",(0,r.jsx)(n.code,{children:"templateParameters"}),"，因此会覆盖 ",(0,r.jsx)(n.code,{children:"templateParameters"})," 中设置的值。"]}),"\n",(0,r.jsxs)(n.h3,{id:"示例",children:["示例",(0,r.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#示例",children:"#"})]}),"\n",(0,r.jsx)(n.div,{className:"language-",children:(0,r.jsxs)(n.div,{className:"modern-code-content",children:[(0,r.jsx)(n.button,{className:"copy"}),(0,r.jsx)(n.pre,{className:"code",children:(0,r.jsx)(n.code,{className:"language-js",children:"export default {\n  html: {\n    templateParametersByEntries: {\n      foo: {\n        type: 'a',\n      },\n      bar: {\n        type: 'b',\n      },\n    },\n  },\n};\n"})})]})})]})}var d=function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},{wrapper:n}=Object.assign({},(0,s.useMDXComponents)(),e.components);return n?(0,r.jsx)(n,Object.assign({},e,{children:(0,r.jsx)(l,e)})):l(e)}}}]);