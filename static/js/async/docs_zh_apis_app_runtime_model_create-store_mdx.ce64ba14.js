(self.webpackChunk_modern_js_main_doc=self.webpackChunk_modern_js_main_doc||[]).push([["docs_zh_apis_app_runtime_model_create-store_mdx"],{15574:function(e,n,r){"use strict";Object.defineProperty(n,"__esModule",{value:!0});!function(e,n){for(var r in n)Object.defineProperty(e,r,{enumerable:!0,get:n[r]})}(n,{frontmatter:function(){return i},title:function(){return o},toc:function(){return a},default:function(){return l}});var s=r("9880"),d=r("23169"),t=r.ir(r("84193")),i={sidebar_position:10,title:"createStore"},o="createStore",a=[{text:"函数签名",depth:2,id:"函数签名"},{text:"参数",depth:3,id:"参数"},{text:"返回值",depth:3,id:"返回值"},{text:"示例",depth:2,id:"示例"}];function c(e){var n=Object.assign({h1:"h1",a:"a",p:"p",code:"code",h2:"h2",div:"div",pre:"pre",h3:"h3",ul:"ul",li:"li",strong:"strong",em:"em"},(0,d.useMDXComponents)(),e.components);return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)(n.h1,{id:"createstore",children:["createStore",(0,s.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#createstore",children:"#"})]}),"\n","\n",(0,s.jsx)(t.default,{}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.code,{children:"createStore"})," 用于创建一个 Store 对象。Reduck 的 Store 基于 Redux 的 ",(0,s.jsx)(n.a,{href:"https://redux.js.org/api/store",target:"_blank",rel:"noopener noreferrer",children:"Store"})," 实现，用于存储应用的状态，同时提供一组用于管理状态和 Model 的方法。"]}),"\n",(0,s.jsxs)(n.p,{children:["一般情况下，不需要使用这个 API，只有需要完全掌控 Store 的创建时，才会使用这个 API。例如，自定义一个 Store，传入 ",(0,s.jsx)(n.a,{href:"/zh/apis/app/runtime/model/Provider",children:(0,s.jsx)(n.code,{children:"Provider"})})," 组件使用。"]}),"\n",(0,s.jsxs)(n.h2,{id:"函数签名",children:["函数签名",(0,s.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#函数签名",children:"#"})]}),"\n",(0,s.jsx)(n.div,{className:"language-",children:(0,s.jsx)(n.div,{className:"modern-code-content",children:(0,s.jsx)(n.pre,{className:"code",children:(0,s.jsx)(n.code,{className:"language-ts",children:"interface StoreConfig {\n  initialState?: Record<string, any>;\n  middlewares?: Middleware[];\n  models?: Model[];\n  plugins?: Plugin[];\n  enhancers?: StoreEnhancer[];\n}\n\ninterface ReduckStore extends ReduxStore {\n  use: typeof useModel;\n  unmount: (model: Model) => void;\n}\n\nfunction createStore(config: StoreConfig): ReduckStore;\n"})})})}),"\n",(0,s.jsxs)(n.h3,{id:"参数",children:["参数",(0,s.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#参数",children:"#"})]}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["config?：store 配置选项","\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"initialState?: 设置全局 Store 的初始状态。"}),"\n",(0,s.jsx)(n.li,{children:"models?: 设置提前（Store 创建后）挂载到 Store 的 Model。（正常使用无需提前挂载）"}),"\n",(0,s.jsxs)(n.li,{children:["middlewares?: 设置 Redux ",(0,s.jsx)(n.a,{href:"https://redux.js.org/understanding/thinking-in-redux/glossary#middleware",target:"_blank",rel:"noopener noreferrer",children:"中间件"}),"。"]}),"\n",(0,s.jsxs)(n.li,{children:["enhancers?: 设置 Redux 的 ",(0,s.jsx)(n.a,{href:"https://redux.js.org/understanding/thinking-in-redux/glossary#store-enhancer",target:"_blank",rel:"noopener noreferrer",children:"Store enhancer"})," 。"]}),"\n",(0,s.jsxs)(n.li,{children:["plugins?: 设置 Reduck 插件。",(0,s.jsx)(n.strong,{children:(0,s.jsx)(n.em,{children:"试验性配置，不推荐使用"})}),"。"]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(n.h3,{id:"返回值",children:["返回值",(0,s.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#返回值",children:"#"})]}),"\n",(0,s.jsx)(n.p,{children:"Reduck Store 对象："}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["use：动态挂载和获取 Model 对象。用法与 ",(0,s.jsx)(n.a,{href:"/zh/apis/app/runtime/model/use-model",children:(0,s.jsx)(n.code,{children:"useModel"})})," 相同，但可以在 React 组件外使用。"]}),"\n",(0,s.jsx)(n.li,{children:"unmount：卸载 Model 对象，Model 的 State 会从 Store 中清除。"}),"\n",(0,s.jsxs)(n.li,{children:["ReduxStore：Redux Store 对象具有的方法，",(0,s.jsx)(n.a,{href:"https://redux.js.org/tutorials/fundamentals/part-4-store#redux-store",target:"_blank",rel:"noopener noreferrer",children:"详见"}),"。"]}),"\n"]}),"\n",(0,s.jsxs)(n.h2,{id:"示例",children:["示例",(0,s.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#示例",children:"#"})]}),"\n",(0,s.jsx)(n.div,{className:"language-",children:(0,s.jsx)(n.div,{className:"modern-code-content",children:(0,s.jsx)(n.pre,{className:"code",children:(0,s.jsx)(n.code,{className:"language-tsx",children:"const store = createStore();\n\nfunction load() {\n  const [, actions] = store.use(fooModel);\n\n  actions.load();\n}\n"})})})})]})}var l=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=Object.assign({},(0,d.useMDXComponents)(),e.components).wrapper;return n?(0,s.jsx)(n,Object.assign({},e,{children:(0,s.jsx)(c,e)})):c(e)}}}]);