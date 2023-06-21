(self.webpackChunk_modern_js_main_doc=self.webpackChunk_modern_js_main_doc||[]).push([["docs_zh_apis_app_runtime_model_create-app_mdx"],{76096:function(e,n,r){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),Object.defineProperty(n,"default",{enumerable:!0,get:function(){return t}});var o,d=r("15169"),s=r("43932"),i=r("9880"),c=r("23169"),a=r.ir(r("93490"));function l(e){var n=Object.assign({h1:"h1",a:"a",p:"p",code:"code",div:"div",h2:"h2",pre:"pre",h3:"h3",ul:"ul",li:"li"},(0,c.useMDXComponents)(),e.components);return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsxs)(n.h1,{id:"createapp",children:["createApp",(0,i.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#createapp",children:"#"})]}),"\n","\n",(0,i.jsx)(a.default,{}),"\n",(0,i.jsxs)(n.p,{children:["Reduck 内部默认会使用 ",(0,i.jsx)(n.code,{children:"createApp"})," 创建一个全局应用，如果整个应用只需要共享一个 Store，那么是不需要使用 ",(0,i.jsx)(n.code,{children:"createApp"})," 的。只有当需要在应用局部创建共享 Store 时，才需要使用 ",(0,i.jsx)(n.code,{children:"createApp"}),"。"]}),"\n",(0,i.jsxs)(n.div,{className:"modern-directive caution",children:[(0,i.jsx)(n.div,{className:"modern-directive-title",children:"注意"}),(0,i.jsxs)(n.div,{className:"modern-directive-content",children:[(0,i.jsxs)(n.p,{children:["注意 ",(0,i.jsx)(n.code,{children:"@modern-js/runtime/model"})," 中导出的 ",(0,i.jsx)(n.code,{children:"createApp"})," 用于管理状态，而 ",(0,i.jsx)(n.code,{children:"@modern-js/runtime"})," 导出的 ",(0,i.jsx)(n.code,{children:"createApp"})," 用于管理整个应用的运行时环境，两者功能不同。"]}),"\n"]})]}),"\n",(0,i.jsxs)(n.h2,{id:"函数签名",children:["函数签名",(0,i.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#函数签名",children:"#"})]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-ts",children:"interface AppConfig extends StoreConfig {\n  devTools?: boolean | DevToolsOptions;\n  autoActions?: boolean;\n}\n\nfunction createApp(config: AppConfig): object;\n"})}),"\n",(0,i.jsxs)(n.h3,{id:"参数",children:["参数",(0,i.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#参数",children:"#"})]}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["config：",(0,i.jsx)(n.code,{children:"Record<string, any>"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["StoreConfig：同 ",(0,i.jsx)(n.a,{href:"/zh/apis/app/runtime/model/create-store",children:(0,i.jsx)(n.code,{children:"createStore"})})," 的参数。"]}),"\n",(0,i.jsxs)(n.li,{children:["devTools：默认值为 true。是否开启 Redux DevTools，当为对象类型时，支持配置 Redux DevTools 的 ",(0,i.jsx)(n.a,{href:"https://github.com/reduxjs/redux-devtools/blob/main/extension/docs/API/Arguments.md",target:"_blank",rel:"noopener noreferrer",children:"Options"}),"。"]}),"\n",(0,i.jsxs)(n.li,{children:["autoActions：默认值为 true。是否",(0,i.jsx)(n.a,{href:"/zh/apis/app/runtime/model/auto-actions",children:"自动生成 Actions"}),"。"]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(n.h3,{id:"返回值",children:["返回值",(0,i.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#返回值",children:"#"})]}),"\n",(0,i.jsx)(n.p,{children:"Reduck App，有以下属性组成："}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["Provider：为应用局部的组件树注入共享 Store 的组件。用法同 ",(0,i.jsx)(n.a,{href:"/zh/apis/app/runtime/model/Provider",children:(0,i.jsx)(n.code,{children:"Provider"})}),"。"]}),"\n",(0,i.jsxs)(n.li,{children:["useModel：获取应用局部 Store 挂载的 Model 对象。用法同 ",(0,i.jsx)(n.a,{href:"/zh/apis/app/runtime/model/use-model",children:(0,i.jsx)(n.code,{children:"useModel"})}),"。"]}),"\n",(0,i.jsxs)(n.li,{children:["useStaticModel：获取应用局部 Store 挂载的 Model 对象。用法同 ",(0,i.jsx)(n.a,{href:"/zh/apis/app/runtime/model/use-static-model",children:(0,i.jsx)(n.code,{children:"useStaticModel"})}),"。"]}),"\n",(0,i.jsxs)(n.li,{children:["useLocalModel：获取应用局部 Store 挂载的 Model 对象。用法同 ",(0,i.jsx)(n.a,{href:"/zh/apis/app/runtime/model/use-local-model",children:(0,i.jsx)(n.code,{children:"useLocalModel"})}),"。"]}),"\n",(0,i.jsxs)(n.li,{children:["useStore：获取应用局部使用的 Store 对象。用法同 ",(0,i.jsx)(n.a,{href:"/zh/apis/app/runtime/model/use-store",children:(0,i.jsx)(n.code,{children:"useStore"})}),"。"]}),"\n"]}),"\n",(0,i.jsxs)(n.h2,{id:"示例",children:["示例",(0,i.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#示例",children:"#"})]}),"\n",(0,i.jsxs)(n.p,{children:["通过 ",(0,i.jsx)(n.code,{children:"createApp"})," 可以创建局部状态，将不同 Reduck 应用间的状态隔离。"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-tsx",children:"const { Provider: LocalFooProvider, useModel: useLocalFooModel } = createApp();\nconst { Provider: LocalBarProvider, useModel: useLocalBarModel } = createApp();\n\nfunction Foo() {\n  const [fooState] = useLocalFooModel(fooModel);\n  const [barState] = useLocalBarModel(fooModel);\n\n  return (\n    <div>\n      <div>Foo: {fooState}</div>\n      <div>Bar: {barState}</div>\n    </div>\n  );\n}\n\nfunction Container() {\n  return (\n    <LocalFooProvider>\n      <LocalBarProvider>\n        <Foo />\n      </LocalBarProvider>\n    </LocalFooProvider>\n  );\n}\n"})})]})}(o=globalThis).__RSPRESS_PAGE_META||(o.__RSPRESS_PAGE_META={}),globalThis.__RSPRESS_PAGE_META["/home/runner/work/modern.js/modern.js/packages/document/main-doc/docs/zh/apis/app/runtime/model/create-app.mdx"]={toc:[{text:"函数签名",id:"函数签名",depth:2},{text:"参数",id:"参数",depth:3},{text:"返回值",id:"返回值",depth:3},{text:"示例",id:"示例",depth:2}],title:"createApp",frontmatter:{sidebar_position:11,title:"createApp"}};var t=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=Object.assign({},(0,c.useMDXComponents)(),e.components).wrapper;return n?(0,i.jsx)(n,s._(d._({},e),{children:(0,i.jsx)(l,d._({},e))})):l(e)}}}]);