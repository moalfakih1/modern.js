(self.webpackChunkwebpack=self.webpackChunkwebpack||[]).push([["docs_zh_guides_topic-detail_generator_plugin_api_hook_afterForged_mdx"],{32266:function(e,n,r){"use strict";Object.defineProperty(n,"__esModule",{value:!0});!function(e,n){for(var r in n)Object.defineProperty(e,r,{enumerable:!0,get:n[r]})}(n,{frontmatter:function(){return a},title:function(){return d},toc:function(){return c},default:function(){return o}});var t=r("12151"),i=r("21447");let a={sidebar_position:2},d="AfterForged",c=[{text:"func",depth:2,id:"func"},{text:"api",depth:3,id:"api"},{text:"inputData",depth:3,id:"inputdata"}];function s(e){let n=Object.assign({h1:"h1",a:"a",p:"p",code:"code",div:"div",button:"button",pre:"pre",h2:"h2",h3:"h3"},(0,i.useMDXComponents)(),e.components);return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)(n.h1,{id:"afterforged",children:["AfterForged",(0,t.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#afterforged",children:"#"})]}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.code,{children:"afterForged"})," 函数为生成器插件生命周期函数，其通常用于定义安装依赖、Git 等操作，这些操作将会在 ",(0,t.jsx)(n.code,{children:"onForged"})," 函数执行完成后进行。"]}),"\n",(0,t.jsx)(n.p,{children:"该方法可直接在 context 上获取。"}),"\n",(0,t.jsx)(n.p,{children:"其类型定义为："}),"\n",(0,t.jsx)(n.div,{className:"language-",children:(0,t.jsxs)(n.div,{className:"modern-code-content",children:[(0,t.jsx)(n.button,{className:"copy"}),(0,t.jsx)(n.pre,{className:"code",children:(0,t.jsx)(n.code,{className:"language-ts",children:"export type PluginAfterForgedFunc = (\n  api: AfterForgedAPI,\n  inputData: Record<string, unknown>,\n) => Promise<void>;\n\nexport interface IPluginContext {\n  afterForged: (func: PluginAfterForgedFunc) => void;\n  ...\n}\n"})})]})}),"\n",(0,t.jsxs)(n.h2,{id:"func",children:["func",(0,t.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#func",children:"#"})]}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.code,{children:"afterForged"})," 参数是一个回调函数，函数参数为 ",(0,t.jsx)(n.code,{children:"api"})," 和 ",(0,t.jsx)(n.code,{children:"inputData。"})]}),"\n",(0,t.jsxs)(n.h3,{id:"api",children:["api",(0,t.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#api",children:"#"})]}),"\n",(0,t.jsxs)(n.p,{children:["在 ",(0,t.jsx)(n.code,{children:"afterForged"})," 生命周期中支持的函数列表，具体可查看 ",(0,t.jsx)(n.a,{href:"/guides/topic-detail/generator/plugin/api/git/isInGitRepo",children:"Git API"})," 和 ",(0,t.jsx)(n.a,{href:"/guides/topic-detail/generator/plugin/api/npm/install",children:"NPM API"}),"。"]}),"\n",(0,t.jsxs)(n.h3,{id:"inputdata",children:["inputData",(0,t.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#inputdata",children:"#"})]}),"\n",(0,t.jsx)(n.p,{children:"当前用户输入，可用于获取用户当前的输入信息及配置信息。"})]})}var o=function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},{wrapper:n}=Object.assign({},(0,i.useMDXComponents)(),e.components);return n?(0,t.jsx)(n,Object.assign({},e,{children:(0,t.jsx)(s,e)})):s(e)}}}]);