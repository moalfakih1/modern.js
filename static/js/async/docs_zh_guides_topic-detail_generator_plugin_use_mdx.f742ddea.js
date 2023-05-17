(self.webpackChunk_modern_js_main_doc=self.webpackChunk_modern_js_main_doc||[]).push([["docs_zh_guides_topic-detail_generator_plugin_use_mdx"],{56670:function(e,n,d){"use strict";Object.defineProperty(n,"__esModule",{value:!0});!function(e,n){for(var d in n)Object.defineProperty(e,d,{enumerable:!0,get:n[d]})}(n,{frontmatter:function(){return a},title:function(){return i},toc:function(){return c},default:function(){return l}});var s=d("9880"),r=d("23169"),a={sidebar_position:2},i="如何使用生成器插件",c=[{text:"生成器插件分类",depth:2,id:"生成器插件分类"},{text:"类型定义",depth:3,id:"类型定义"},{text:"扩展工程方案",depth:4,id:"扩展工程方案"},{text:"创建工程方案场景",depth:4,id:"创建工程方案场景"},{text:"执行时机",depth:3,id:"执行时机"},{text:"扩展工程方案",depth:4,id:"扩展工程方案-1"},{text:"创建工程方案场景",depth:4,id:"创建工程方案场景-1"}];function h(e){var n=Object.assign({h1:"h1",a:"a",p:"p",code:"code",div:"div",pre:"pre",h2:"h2",ol:"ol",li:"li",h3:"h3",h4:"h4"},(0,r.useMDXComponents)(),e.components);return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)(n.h1,{id:"如何使用生成器插件",children:["如何使用生成器插件",(0,s.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#如何使用生成器插件",children:"#"})]}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.code,{children:"@modern-js/create"})," 提供了 ",(0,s.jsx)(n.code,{children:"--plugin"})," 参数用于声明使用的生成器插件。"]}),"\n",(0,s.jsx)(n.p,{children:"你可直接执行下面命令使用生成器插件："}),"\n",(0,s.jsx)(n.div,{className:"language-",children:(0,s.jsx)(n.div,{className:"modern-code-content",children:(0,s.jsx)(n.pre,{className:"code",children:(0,s.jsx)(n.code,{className:"language-bash",children:"npx @modern-js/create@latest --plugin <pluginName>\n"})})})}),"\n",(0,s.jsx)(n.p,{children:"plugin 参数支持声明多次，代表同时使用多个生成器插件。"}),"\n",(0,s.jsxs)(n.h2,{id:"生成器插件分类",children:["生成器插件分类",(0,s.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#生成器插件分类",children:"#"})]}),"\n",(0,s.jsx)(n.p,{children:"生成器插件分为两种："}),"\n",(0,s.jsxs)(n.ol,{children:["\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:"扩展工程方案：直接对默认提供的三大工程方案进行定制化。"}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:"创建工程方案场景：基于默认的三大工程方案创建对应的工程方案场景。"}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(n.h3,{id:"类型定义",children:["类型定义",(0,s.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#类型定义",children:"#"})]}),"\n",(0,s.jsxs)(n.p,{children:["生成器插件的分类通过 ",(0,s.jsx)(n.code,{children:"package.json"})," 中的 ",(0,s.jsx)(n.code,{children:"meta"})," 信息提供。"]}),"\n",(0,s.jsxs)(n.h4,{id:"扩展工程方案",children:["扩展工程方案",(0,s.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#扩展工程方案",children:"#"})]}),"\n",(0,s.jsx)(n.div,{className:"language-",children:(0,s.jsx)(n.div,{className:"modern-code-content",children:(0,s.jsx)(n.pre,{className:"code",children:(0,s.jsx)(n.code,{className:"language-json",children:'{\n  "meta": {\n    "extend": "mwa" // 三个工程方案分别对应 mwa、module、 monorepo\n  }\n}\n'})})})}),"\n",(0,s.jsxs)(n.h4,{id:"创建工程方案场景",children:["创建工程方案场景",(0,s.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#创建工程方案场景",children:"#"})]}),"\n",(0,s.jsx)(n.div,{className:"language-",children:(0,s.jsx)(n.div,{className:"modern-code-content",children:(0,s.jsx)(n.pre,{className:"code",children:(0,s.jsx)(n.code,{className:"language-json",children:'{\n  "meta": {\n    "key": "new_solution",\n    "name": "新工程方案",\n    "type": "mwa" // 除了三大工程方案，这里类型还支持自定义(custom)类型，后面会详细介绍\n  }\n}\n'})})})}),"\n",(0,s.jsxs)(n.h3,{id:"执行时机",children:["执行时机",(0,s.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#执行时机",children:"#"})]}),"\n",(0,s.jsx)(n.p,{children:"不同类型的定制工程方案的执行时机是不同的。"}),"\n",(0,s.jsxs)(n.h4,{id:"扩展工程方案-1",children:["扩展工程方案",(0,s.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#扩展工程方案-1",children:"#"})]}),"\n",(0,s.jsx)(n.p,{children:"扩展工程方案类型的生成器插件会在选择对应 extend 的工程方案后按照 plugin 参数的声明顺序依次执行。"}),"\n",(0,s.jsxs)(n.h4,{id:"创建工程方案场景-1",children:["创建工程方案场景",(0,s.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#创建工程方案场景-1",children:"#"})]}),"\n",(0,s.jsx)(n.p,{children:"创建工程方案场景的生成器插件会在选择对应类型的工程方案之后出现选择场景的选项，选项列表包括当前默认的工程方案场景和插件定义的工程方案场景，选择对应的场景，将会执行对应的生成器插件。"})]})}var l=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=Object.assign({},(0,r.useMDXComponents)(),e.components).wrapper;return n?(0,s.jsx)(n,Object.assign({},e,{children:(0,s.jsx)(h,e)})):h(e)}}}]);