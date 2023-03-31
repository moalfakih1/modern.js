(self.webpackChunkwebpack=self.webpackChunkwebpack||[]).push([["docs_zh_guides_topic-detail_generator_plugin_api_new_createElement_mdx"],{33287:function(e,n,r){"use strict";Object.defineProperty(n,"__esModule",{value:!0});!function(e,n){for(var r in n)Object.defineProperty(e,r,{enumerable:!0,get:n[r]})}(n,{frontmatter:function(){return s},title:function(){return c},toc:function(){return i},default:function(){return l}});var t=r("12151"),a=r("21447");let s={sidebar_position:2},c="createElement",i=[{text:"element",depth:2,id:"element"},{text:"params",depth:2,id:"params"}];function d(e){let n=Object.assign({h1:"h1",a:"a",p:"p",code:"code",div:"div",button:"button",pre:"pre",h2:"h2"},(0,a.useMDXComponents)(),e.components);return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)(n.h1,{id:"createelement",children:["createElement",(0,t.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#createelement",children:"#"})]}),"\n",(0,t.jsx)(n.p,{children:"创建工程元素，只支持应用工程方案。"}),"\n",(0,t.jsxs)(n.p,{children:["该方法可在 ",(0,t.jsx)(n.code,{children:"onForged"})," 生命周期的 api 参数上获取。"]}),"\n",(0,t.jsx)(n.p,{children:"其类型定义为："}),"\n",(0,t.jsx)(n.div,{className:"language-",children:(0,t.jsxs)(n.div,{className:"modern-code-content",children:[(0,t.jsx)(n.button,{className:"copy"}),(0,t.jsx)(n.pre,{className:"code",children:(0,t.jsx)(n.code,{className:"language-ts",children:"export enum ActionElement {\n  Entry = 'entry',\n  Server = 'server',\n}\nexport type ForgedAPI = {\n  createElement: (\n    element: ActionElement,\n    params: Record<string, unknown>,\n  ) => Promise<void>;\n  ...\n};\n"})})]})}),"\n",(0,t.jsxs)(n.h2,{id:"element",children:["element",(0,t.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#element",children:"#"})]}),"\n",(0,t.jsx)(n.p,{children:"工程元素类型，支持 entry 和 server。"}),"\n",(0,t.jsxs)(n.h2,{id:"params",children:["params",(0,t.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#params",children:"#"})]}),"\n",(0,t.jsxs)(n.p,{children:["创建元素的其他参数，详细参考",(0,t.jsx)(n.a,{href:"/guides/topic-detail/generator/config/app#new-%E5%91%BD%E4%BB%A4",children:"应用 New 命令"}),"。"]})]})}var l=function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},{wrapper:n}=Object.assign({},(0,a.useMDXComponents)(),e.components);return n?(0,t.jsx)(n,Object.assign({},e,{children:(0,t.jsx)(d,e)})):d(e)}}}]);