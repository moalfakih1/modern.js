(self.webpackChunk_modern_js_main_doc=self.webpackChunk_modern_js_main_doc||[]).push([["docs_zh_guides_topic-detail_generator_plugin_api_input_setInput_mdx"],{9490:function(e,n,i){"use strict";Object.defineProperty(n,"__esModule",{value:!0});!function(e,n){for(var i in n)Object.defineProperty(e,i,{enumerable:!0,get:n[i]})}(n,{frontmatter:function(){return d},title:function(){return a},toc:function(){return t},default:function(){return l}});var r=i("9880"),s=i("23169"),d={sidebar_position:4},a="setInput",t=[{text:"key",depth:2,id:"key"},{text:"filed",depth:2,id:"filed"},{text:"value",depth:2,id:"value"},{text:"示例",depth:2,id:"示例"}];function c(e){var n=Object.assign({h1:"h1",a:"a",p:"p",div:"div",pre:"pre",code:"code",h2:"h2"},(0,s.useMDXComponents)(),e.components);return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(n.h1,{id:"setinput",children:["setInput",(0,r.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#setinput",children:"#"})]}),"\n",(0,r.jsx)(n.p,{children:"设置问题属性。"}),"\n",(0,r.jsx)(n.p,{children:"该方法可直接在 context 上获取。"}),"\n",(0,r.jsx)(n.p,{children:"其类型定义为："}),"\n",(0,r.jsx)(n.div,{className:"language-",children:(0,r.jsx)(n.div,{className:"modern-code-content",children:(0,r.jsx)(n.pre,{className:"code",children:(0,r.jsx)(n.code,{className:"language-ts",children:"export interface IPluginContext {\n  setInput: (key: string, field: string, value: unknown) => void;\n  ...\n}\n"})})})}),"\n",(0,r.jsxs)(n.h2,{id:"key",children:["key",(0,r.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#key",children:"#"})]}),"\n",(0,r.jsx)(n.p,{children:"问题关键字，可以为 Modern.js 工程方案的问题关键字，也可以为生成器插件中新增问题的关键字。"}),"\n",(0,r.jsxs)(n.h2,{id:"filed",children:["filed",(0,r.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#filed",children:"#"})]}),"\n",(0,r.jsxs)(n.p,{children:["需设置的问题字段，可修改除了当前 Input 除 key 以外的其他字段，Input 具体类型定义可查看",(0,r.jsx)(n.a,{href:"/guides/topic-detail/generator/plugin/api/input/type",children:"自定义输入相关类型定义"}),"。"]}),"\n",(0,r.jsxs)(n.h2,{id:"value",children:["value",(0,r.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#value",children:"#"})]}),"\n",(0,r.jsx)(n.p,{children:"需设置的问题字段值。value 支持函数，函数参数为当前字段值，返回值需要为完整的新的字段值。"}),"\n",(0,r.jsxs)(n.div,{className:"modern-directive info",children:[(0,r.jsx)(n.div,{className:"modern-directive-title",children:"INFO"}),(0,r.jsxs)(n.div,{className:"modern-directive-content",children:[(0,r.jsx)(n.p,{children:"对于 Modern.js 工程类型提供的输入选项，暂时只支持删除，不支持增加，增加会造成代码中的逻辑判断存在问题。"}),"\n"]})]}),"\n",(0,r.jsxs)(n.h2,{id:"示例",children:["示例",(0,r.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#示例",children:"#"})]}),"\n",(0,r.jsx)(n.p,{children:"修改 packageName 的展示名称"}),"\n",(0,r.jsx)(n.div,{className:"language-",children:(0,r.jsx)(n.div,{className:"modern-code-content",children:(0,r.jsx)(n.pre,{className:"code",children:(0,r.jsx)(n.code,{className:"language-ts",children:"context.setInput('packageName', 'title', '展示名称');\n"})})})})]})}var l=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=Object.assign({},(0,s.useMDXComponents)(),e.components).wrapper;return n?(0,r.jsx)(n,Object.assign({},e,{children:(0,r.jsx)(c,e)})):c(e)}}}]);