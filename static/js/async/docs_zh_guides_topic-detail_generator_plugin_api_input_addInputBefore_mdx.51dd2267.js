(self.webpackChunk_modern_js_main_doc=self.webpackChunk_modern_js_main_doc||[]).push([["docs_zh_guides_topic-detail_generator_plugin_api_input_addInputBefore_mdx"],{17009:function(e,n,r){"use strict";Object.defineProperty(n,"__esModule",{value:!0});!function(e,n){for(var r in n)Object.defineProperty(e,r,{enumerable:!0,get:n[r]})}(n,{frontmatter:function(){return s},title:function(){return t},toc:function(){return a},default:function(){return l}});var d=r("12151"),i=r("23169"),s={sidebar_position:2},t="addInputBefore",a=[{text:"key",depth:2,id:"key"},{text:"input",depth:2,id:"input"},{text:"示例",depth:2,id:"示例"}];function c(e){var n=Object.assign({h1:"h1",a:"a",p:"p",div:"div",button:"button",pre:"pre",code:"code",h2:"h2",ol:"ol",li:"li"},(0,i.useMDXComponents)(),e.components);return(0,d.jsxs)(d.Fragment,{children:[(0,d.jsxs)(n.h1,{id:"addinputbefore",children:["addInputBefore",(0,d.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#addinputbefore",children:"#"})]}),"\n",(0,d.jsx)(n.p,{children:"在默认输入前添加输入问题。"}),"\n",(0,d.jsx)(n.p,{children:"该方法可直接在 context 上获取。"}),"\n",(0,d.jsx)(n.p,{children:"其类型定义为："}),"\n",(0,d.jsx)(n.div,{className:"language-",children:(0,d.jsxs)(n.div,{className:"modern-code-content",children:[(0,d.jsx)(n.button,{className:"copy"}),(0,d.jsx)(n.pre,{className:"code",children:(0,d.jsx)(n.code,{className:"language-ts",children:"export interface IPluginContext {\n  addInputBefore: (key: string, input: Schema) => void;\n  ...\n}\n"})})]})}),"\n",(0,d.jsxs)(n.h2,{id:"key",children:["key",(0,d.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#key",children:"#"})]}),"\n",(0,d.jsxs)(n.p,{children:["Modern.js 工程方案的配置的问题关键字，具体配置可查看",(0,d.jsx)(n.a,{href:"/guides/topic-detail/generator/config/common",children:"生成器配置"}),"。"]}),"\n",(0,d.jsxs)(n.h2,{id:"input",children:["input",(0,d.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#input",children:"#"})]}),"\n",(0,d.jsxs)(n.p,{children:["需要添加的问题，具体类型定义可查看",(0,d.jsx)(n.a,{href:"/guides/topic-detail/generator/plugin/api/input/type",children:"自定义输入相关类型定义"}),"。"]}),"\n",(0,d.jsxs)(n.h2,{id:"示例",children:["示例",(0,d.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#示例",children:"#"})]}),"\n",(0,d.jsx)(n.p,{children:"在包管理工具后面添加输入："}),"\n",(0,d.jsx)(n.div,{className:"language-",children:(0,d.jsxs)(n.div,{className:"modern-code-content",children:[(0,d.jsx)(n.button,{className:"copy"}),(0,d.jsx)(n.pre,{className:"code",children:(0,d.jsx)(n.code,{className:"language-ts",children:"context.addInputBefore('packageManager', {\n  type: 'object',\n  properties: {\n    language: {\n      type: 'string',\n      title: '开发语言',\n      enum: [\n        { label: 'TS', value: 'ts' },\n        { label: 'ES6+', value: 'js' },\n      ],\n    },\n  },\n});\n"})})]})}),"\n",(0,d.jsxs)(n.div,{className:"modern-directive info",children:[(0,d.jsx)(n.div,{className:"modern-directive-title",children:"注意事项"}),(0,d.jsxs)(n.div,{className:"modern-directive-content",children:["\n",(0,d.jsxs)(n.ol,{children:["\n",(0,d.jsxs)(n.li,{children:["\n",(0,d.jsx)(n.p,{children:"添加问题的 key 不能和 Modern.js 提供的项目类型自身的问题的 key 重复"}),"\n"]}),"\n",(0,d.jsxs)(n.li,{children:["\n",(0,d.jsxs)(n.p,{children:["添加问题 ",(0,d.jsx)(n.code,{children:"addInputAfter"})," 的优先级高于 ",(0,d.jsx)(n.code,{children:"addInputBefore"}),"，当同时对一个 ",(0,d.jsx)(n.code,{children:"key"})," 添加 After 问题和对其后一个 key 添加 Before 问题时，After 问题会在 Before 之前。"]}),"\n"]}),"\n",(0,d.jsxs)(n.li,{children:["\n",(0,d.jsxs)(n.p,{children:["当需要在相同 ",(0,d.jsx)(n.code,{children:"key"})," 前面或者后面添加多个问题时，可多次调用该方法，问题的顺序会按照调用顺序进行排列。"]}),"\n"]}),"\n"]}),"\n"]})]})]})}var l=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=Object.assign({},(0,i.useMDXComponents)(),e.components).wrapper;return n?(0,d.jsx)(n,Object.assign({},e,{children:(0,d.jsx)(c,e)})):c(e)}}}]);