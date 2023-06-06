(self.webpackChunk_modern_js_main_doc=self.webpackChunk_modern_js_main_doc||[]).push([["docs_zh_guides_topic-detail_model_define-model_mdx"],{99969:function(e,n,d){"use strict";Object.defineProperty(n,"__esModule",{value:!0});!function(e,n){for(var d in n)Object.defineProperty(e,d,{enumerable:!0,get:n[d]})}(n,{frontmatter:function(){return s},title:function(){return i},toc:function(){return c},default:function(){return t}});var o=d("9880"),l=d("23169"),s={sidebar_position:2,title:"创建 Model"},i="创建 Model",c=[];function r(e){var n=Object.assign({h1:"h1",a:"a",p:"p",code:"code",pre:"pre",div:"div",ul:"ul",li:"li"},(0,l.useMDXComponents)(),e.components);return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsxs)(n.h1,{id:"创建-model",children:["创建 Model",(0,o.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#创建-model",children:"#"})]}),"\n",(0,o.jsx)(n.p,{children:"上一节的计数器应用中，我们简单演示了如何创建一个 Model。本节我们将详细介绍 Model 的创建方法。"}),"\n",(0,o.jsxs)(n.p,{children:["通过 ",(0,o.jsx)(n.code,{children:"model"})," API 创建 Model，例如，",(0,o.jsx)(n.code,{children:"model('foo')"})," 表示要创建一个名为 ",(0,o.jsx)(n.code,{children:"foo"})," 的 Model，通过调用 ",(0,o.jsx)(n.code,{children:"model('foo')"})," 返回的 ",(0,o.jsx)(n.code,{children:"define"})," 函数，定义 Model 包含的 State、Actions 等："]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-js",children:"import { model, useModel } from '@modern-js/runtime/model';\n\nconst fooModel = model('foo').define({\n  state: {\n    value: 'foo',\n  },\n  actions: {\n    setValue: (state, payload){\n      state.value = payload\n    }\n  }\n});\n"})}),"\n",(0,o.jsxs)(n.div,{className:"modern-directive info",children:[(0,o.jsx)(n.div,{className:"modern-directive-title",children:"INFO"}),(0,o.jsxs)(n.div,{className:"modern-directive-content",children:["\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsx)(n.li,{children:"Model 中的 Action 中不能包含有副作用的逻辑，如请求 HTTP 接口，访问 localStorage 等。"}),"\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.code,{children:"setValue"})," 内部直接修改了入参 State，看起来是违反了纯函数的定义，实际上 Reduck 内部使用 ",(0,o.jsx)(n.a,{href:"https://github.com/immerjs/immer",target:"_blank",rel:"noopener noreferrer",children:"immer"})," 来修改不可变对象，保证了这种写法不会影响对象的不可变性，所以 ",(0,o.jsx)(n.code,{children:"setValue"})," 仍然是一个纯函数。当然，你也可以直接在 Action 中返回一个新对象，不过这样的写法会更加复杂一些。"]}),"\n"]}),"\n"]})]}),"\n",(0,o.jsxs)(n.p,{children:[(0,o.jsx)(n.code,{children:"define"})," 接收的参数，只是对 Model 原始结构的描述：内部定义的 State、Actions 等。",(0,o.jsx)(n.code,{children:"define"})," 返回值 ",(0,o.jsx)(n.code,{children:"fooModel"})," 才是真正创建得到的 Model 对象。例如，虽然 ",(0,o.jsx)(n.code,{children:"setValue"}),"，有 2 个参数，但是当真正调用 ",(0,o.jsx)(n.code,{children:"setValue"})," 这个 Action 时，我们只需要传入 ",(0,o.jsx)(n.code,{children:"payload"})," 一个参数，因为我们调用的是 ",(0,o.jsx)(n.code,{children:"fooModel"})," 上的 Action 方法，而不是 Model 原始结构上描述的 Action 方法。详细参考",(0,o.jsx)(n.a,{href:"/guides/topic-detail/model/use-model",children:"使用 Model"}),"。"]}),"\n",(0,o.jsxs)(n.p,{children:[(0,o.jsx)(n.code,{children:"define"})," 除了接收对象类型的参数，还可以接收函数类型的参数。例如："]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-js",children:"import { model, useModel } from '@modern-js/runtime/model';\n\nconst fooModel = model('foo').define((context, utils) => {\n  return {\n    state: {\n      value: 'foo',\n    },\n    actions: {\n      setValue: (state, payload){\n        state.value = payload\n      }\n    }\n  }\n});\n"})}),"\n",(0,o.jsxs)(n.p,{children:["通过函数定义 Model 时，函数内部会自动传入 ",(0,o.jsx)(n.code,{children:"context"}),"、",(0,o.jsx)(n.code,{children:"utils"})," 2 个参数，",(0,o.jsx)(n.code,{children:"context"})," 是 Reduck 的上下文对象，可以获取到 ",(0,o.jsx)(n.code,{children:"store"})," 对象，",(0,o.jsx)(n.code,{children:"utils"})," 提供了一组工具函数，方便实现 Model 通信等复杂功能需求。"]}),"\n",(0,o.jsx)(n.p,{children:"Model 支持复制。例如："}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-ts",children:"const barModel = fooModel('bar');\n"})}),"\n",(0,o.jsx)(n.p,{children:"barModel 是基于 fooModel 创建出一个的新的 Model 对象，类比面向对象编程语言中的概念，barModel 和 fooModel 是基于同一个类（Class）创建出的 2 个实例对象。当两个模块的状态管理逻辑相同，例如一个页面中的两个 tab 模块，使用的数据的结构和逻辑相同，区别只是从不同的接口获取数据，那么可以通过 Model 复制的方式，创建 2 个不同的 Model 对象。"}),"\n",(0,o.jsxs)(n.div,{className:"modern-directive info",children:[(0,o.jsx)(n.div,{className:"modern-directive-title",children:"补充信息"}),(0,o.jsxs)(n.div,{className:"modern-directive-content",children:[(0,o.jsxs)(n.p,{children:["本节涉及的 API 的详细定义，请参考",(0,o.jsx)(n.a,{href:"/apis/app/runtime/model/model_",children:"这里"}),"。"]}),"\n"]})]})]})}var t=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=Object.assign({},(0,l.useMDXComponents)(),e.components).wrapper;return n?(0,o.jsx)(n,Object.assign({},e,{children:(0,o.jsx)(r,e)})):r(e)}}}]);