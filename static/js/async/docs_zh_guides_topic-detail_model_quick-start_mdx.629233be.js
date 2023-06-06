(self.webpackChunk_modern_js_main_doc=self.webpackChunk_modern_js_main_doc||[]).push([["docs_zh_guides_topic-detail_model_quick-start_mdx"],{77494:function(e,n,d){"use strict";Object.defineProperty(n,"__esModule",{value:!0});!function(e,n){for(var d in n)Object.defineProperty(e,d,{enumerable:!0,get:n[d]})}(n,{frontmatter:function(){return c},title:function(){return o},toc:function(){return i},default:function(){return a}});var r=d("9880"),s=d("23169"),t=d.ir(d("3605")),c={sidebar_position:1,title:"快速上手"},o="快速上手",i=[{text:"核心概念",depth:2,id:"核心概念"},{text:"基本用法",depth:2,id:"基本用法"}];function l(e){var n=Object.assign({h1:"h1",a:"a",p:"p",div:"div",ol:"ol",li:"li",h2:"h2",strong:"strong",img:"img",code:"code",pre:"pre"},(0,s.useMDXComponents)(),e.components);return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(n.h1,{id:"快速上手",children:["快速上手",(0,r.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#快速上手",children:"#"})]}),"\n","\n",(0,r.jsx)(t.default,{}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.a,{href:"https://github.com/web-infra-dev/reduck",target:"_blank",rel:"noopener noreferrer",children:"Reduck"})," 是 Modern.js 团队开发的遵循 MVC 模式的状态管理库，底层状态存储基于 ",(0,r.jsx)(n.a,{href:"https://redux.js.org/",target:"_blank",rel:"noopener noreferrer",children:"Redux"})," 实现，同时提供更高层级的抽象，并完全兼容 Redux 生态。"]}),"\n",(0,r.jsx)(n.p,{children:"Reduck 的目标是以 MVC 模式组织 React 应用开发结构，将业务逻辑维护在 Model 层，业务逻辑与 UI 解耦，让开发业务逻辑更集中、更简单，同时通过更高层级的抽象，减少重复工作（样板代码）。"}),"\n",(0,r.jsx)(n.p,{children:"Reduck 在 MVC 模式中，扮演 M(Model) 的角色，React UI Component 对应 V(View)，从 Reduck 中获取 Model 并修改 Model 的 React Container Component 对应 C(View Controller/Container)。"}),"\n",(0,r.jsx)(n.p,{children:"Modern.js 的状态管理解决方案，是通过内置 Reduck 实现的。在 Modern.js 中使用 Reduck，不仅免去了手动集成的环节，而且所有 Reduck API 都可以从 Modern.js 的 Runtime 包中直接导入使用，具有更好的一致性体验。"}),"\n",(0,r.jsxs)(n.div,{className:"modern-directive info",children:[(0,r.jsx)(n.div,{className:"modern-directive-title",children:"INFO"}),(0,r.jsxs)(n.div,{className:"modern-directive-content",children:["\n",(0,r.jsxs)(n.ol,{children:["\n",(0,r.jsxs)(n.li,{children:["Modern.js 中使用 Reduck API，需要先设置 ",(0,r.jsx)(n.a,{href:"/configure/app/runtime/state",children:"runtime.state"})," 以启用状态管理插件。"]}),"\n",(0,r.jsxs)(n.li,{children:["Reduck 也可以脱离 Modern.js 作为状态管理库",(0,r.jsx)(n.a,{href:"/guides/topic-detail/model/use-out-of-modernjs",children:"单独使用"}),"。"]}),"\n"]}),"\n"]})]}),"\n",(0,r.jsxs)(n.h2,{id:"核心概念",children:["核心概念",(0,r.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#核心概念",children:"#"})]}),"\n",(0,r.jsx)(n.p,{children:"Reduck 中的核心概念只有 4 个： Model、State、Actions、Effects。"}),"\n",(0,r.jsx)(n.p,{children:"Model: 对独立模块的逻辑和所需状态的封装，由 State、Actions、Effects 组成。"}),"\n",(0,r.jsx)(n.p,{children:"State: Model 中保存的状态。"}),"\n",(0,r.jsxs)(n.p,{children:["Actions: 用于修改 State 的纯函数，函数必须是",(0,r.jsx)(n.strong,{children:"同步"}),"的。"]}),"\n",(0,r.jsxs)(n.p,{children:["Effects: 用于修改 State 的带有副作用的函数，函数可以是",(0,r.jsx)(n.strong,{children:"异步"}),"的。Effects 中可以调用自身或其他 Model 的 Actions 和 Effects。"]}),"\n",(0,r.jsx)(n.p,{children:"Reduck 数据流如下图所示："}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.img,{src:"https://lf3-static.bytednsdoc.com/obj/eden-cn/zq-uylkvT/ljhwZthlaukjlkulzlp/reduck-concept.svg",alt:"Reduck 数据流"})}),"\n",(0,r.jsxs)(n.h2,{id:"基本用法",children:["基本用法",(0,r.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#基本用法",children:"#"})]}),"\n",(0,r.jsxs)(n.p,{children:["下来我们以一个简单的 ",(0,r.jsx)(n.strong,{children:"计数器"})," 应用为例，演示 Reduck 的基本用法。"]}),"\n",(0,r.jsxs)(n.p,{children:["首先，我们定义一个名为 ",(0,r.jsx)(n.code,{children:"count"})," 的 Model："]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-js",children:"import { model } from '@modern-js/runtime/model';\n\nconst countModel = model('count').define({\n  state: {\n    value: 1,\n  },\n});\n\nexport default countModel;\n"})}),"\n",(0,r.jsxs)(n.p,{children:["我们使用 API ",(0,r.jsx)(n.code,{children:"model"})," 创建 ",(0,r.jsx)(n.code,{children:"countModel"}),"，",(0,r.jsx)(n.code,{children:"countModel"})," 当前只包含存储计数器值的状态，即代码中的 ",(0,r.jsx)(n.code,{children:"value"}),"。"]}),"\n",(0,r.jsx)(n.p,{children:"我们定义一个 action，用于计算器自增加 1："}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-js",children:"import { model } from '@modern-js/runtime/model';\n\nconst countModel = model('count').define({\n  state: {\n    value: 1,\n  },\n  actions: {\n    add(state) {\n      state.value += 1;\n    },\n  },\n});\n\nexport default countModel;\n"})}),"\n",(0,r.jsxs)(n.p,{children:["在 ",(0,r.jsx)(n.code,{children:"add"})," action 中，我们可以直接修改 state 的值，进行加 1 操作，而不需要把 state 作为不可变对象进行操作，这是因为 Reduck 集成了 ",(0,r.jsx)(n.a,{href:"https://github.com/immerjs/immer",target:"_blank",rel:"noopener noreferrer",children:"immer"}),"，可以直接修改原 state 对象。"]}),"\n",(0,r.jsx)(n.p,{children:"接下来，我们演示如何在组件中使用 Model。"}),"\n",(0,r.jsxs)(n.p,{children:["新建一个组件 Counter，在组件内通过 ",(0,r.jsx)(n.code,{children:"useModel"})," API 使用 ",(0,r.jsx)(n.code,{children:"countModel"}),"："]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-js",children:"import { useModel } from '@modern-js/runtime/model';\nimport countModel from './models/count';\n\nfunction Counter() {\n  const [state, actions] = useModel(countModel);\n\n  return (\n    <div>\n      <div>counter: {state.value}</div>\n      <button onClick={() => actions.add()}>add</button>\n    </div>\n  );\n}\n"})}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.code,{children:"useModel"})," 获取 ",(0,r.jsx)(n.code,{children:"countModel"})," 的 ",(0,r.jsx)(n.code,{children:"state"})," 和 ",(0,r.jsx)(n.code,{children:"actions"}),"，组件展示当前计算器的值，点击 ",(0,r.jsx)(n.code,{children:"add"})," 按钮，计数器自增 1。"]}),"\n",(0,r.jsxs)(n.div,{className:"modern-directive info",children:[(0,r.jsx)(n.div,{className:"modern-directive-title",children:"INFO"}),(0,r.jsxs)(n.div,{className:"modern-directive-content",children:[(0,r.jsxs)(n.p,{children:["由于使用的案例比较简单，这里并没有严格按照 MVC 模式进行分层，组件 ",(0,r.jsx)(n.code,{children:"Counter"})," 同时起到了 V 和 C 两层的作用。"]}),"\n"]})]}),"\n",(0,r.jsx)(n.p,{children:"最终演示效果如下："}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.img,{src:"https://lf3-static.bytednsdoc.com/obj/eden-cn/eueh7vhojuh/modern/simple-count-model.gif",alt:"countModel"})}),"\n",(0,r.jsxs)(n.p,{children:["这样，我们就完了一个简单的计数器应用。本节完整的示例代码可以在",(0,r.jsx)(n.a,{href:"https://github.com/web-infra-dev/modern-js-examples/tree/main/series/tutorials/runtime-api/model/counter-model",target:"_blank",rel:"noopener noreferrer",children:"这里"}),"查看。"]})]})}var a=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=Object.assign({},(0,s.useMDXComponents)(),e.components).wrapper;return n?(0,r.jsx)(n,Object.assign({},e,{children:(0,r.jsx)(l,e)})):l(e)}}}]);