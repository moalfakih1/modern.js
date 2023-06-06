(self.webpackChunk_modern_js_main_doc=self.webpackChunk_modern_js_main_doc||[]).push([["docs_en_apis_app_runtime_model_create-app_mdx"],{47833:function(e,n,r){"use strict";Object.defineProperty(n,"__esModule",{value:!0});!function(e,n){for(var r in n)Object.defineProperty(e,r,{enumerable:!0,get:n[r]})}(n,{frontmatter:function(){return a},title:function(){return s},toc:function(){return d},default:function(){return l}});var o=r("9880"),t=r("23169"),i=r.ir(r("83608")),a={sidebar_position:11,title:"createApp"},s="createApp",d=[{text:"Function Signature",depth:2,id:"function-signature"},{text:"Input",depth:3,id:"input"},{text:"Return Value",depth:3,id:"return-value"},{text:"Example",depth:2,id:"example"}];function c(e){var n=Object.assign({h1:"h1",a:"a",p:"p",code:"code",div:"div",h2:"h2",pre:"pre",h3:"h3",ul:"ul",li:"li"},(0,t.useMDXComponents)(),e.components);return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsxs)(n.h1,{id:"createapp",children:["createApp",(0,o.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#createapp",children:"#"})]}),"\n","\n",(0,o.jsx)(i.default,{}),"\n",(0,o.jsxs)(n.p,{children:["Reduck will call ",(0,o.jsx)(n.code,{children:"createApp"})," to create a global application by default. If the entire application only needs one Store, then there is no need to call ",(0,o.jsx)(n.code,{children:"createApp"})," manually.Only need to use ",(0,o.jsx)(n.code,{children:"createApp"})," when you need to create a Store locally in the app."]}),"\n",(0,o.jsxs)(n.div,{className:"modern-directive caution",children:[(0,o.jsx)(n.div,{className:"modern-directive-title",children:"CAUTION"}),(0,o.jsxs)(n.div,{className:"modern-directive-content",children:[(0,o.jsxs)(n.p,{children:["Note that the exported ",(0,o.jsx)(n.code,{children:"createApp"})," in ",(0,o.jsx)(n.code,{children:"@modern-js/runtime/model"})," is used to manage state, while the exported ",(0,o.jsx)(n.code,{children:"createApp"})," in ",(0,o.jsx)(n.code,{children:"@modern-js/runtime"})," is used to create the entire application. The two are differently."]}),"\n"]})]}),"\n",(0,o.jsxs)(n.h2,{id:"function-signature",children:["Function Signature",(0,o.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#function-signature",children:"#"})]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-ts",children:"interface AppConfig extends StoreConfig {\n  devTools?: boolean | DevToolsOptions;\n  autoActions?: boolean;\n}\n\nfunction createApp(config: AppConfig): object;\n"})}),"\n",(0,o.jsxs)(n.h3,{id:"input",children:["Input",(0,o.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#input",children:"#"})]}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.code,{children:"config"}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.code,{children:"StoreConfig"}),": the same as ",(0,o.jsx)(n.a,{href:"/en/apis/app/runtime/model/create-store",children:(0,o.jsx)(n.code,{children:"createStore"})})," params."]}),"\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.code,{children:"devTools"}),": the default value is ",(0,o.jsx)(n.code,{children:"true"}),". when it is an object type, configuring ",(0,o.jsx)(n.a,{href:"https://github.com/reduxjs/redux-devtools/blob/main/extension/docs/API/Arguments.md",target:"_blank",rel:"noopener noreferrer",children:"Options"})," of Redux DevTools."]}),"\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.code,{children:"autoActions"}),": the default value is ",(0,o.jsx)(n.code,{children:"true"}),".if ",(0,o.jsx)(n.a,{href:"/en/apis/app/runtime/model/auto-actions",children:"auto generate Actions"}),"."]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,o.jsxs)(n.h3,{id:"return-value",children:["Return Value",(0,o.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#return-value",children:"#"})]}),"\n",(0,o.jsx)(n.p,{children:"Reduck App, consists of the following properties:"}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.code,{children:"Provider"}),": inject shared Store into locally component tree, same as ",(0,o.jsx)(n.a,{href:"/en/apis/app/runtime/model/Provider",children:(0,o.jsx)(n.code,{children:"Provider"})}),"."]}),"\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.code,{children:"useModel"}),": get the Model mounted by the app's local Store, same as ",(0,o.jsx)(n.a,{href:"/en/apis/app/runtime/model/use-model",children:(0,o.jsx)(n.code,{children:"useModel"})}),"."]}),"\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.code,{children:"useStaticModel"}),": get the Model mounted by the app's local Store. same as ",(0,o.jsx)(n.a,{href:"/en/apis/app/runtime/model/use-static-model",children:(0,o.jsx)(n.code,{children:"useStaticModel"})}),"."]}),"\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.code,{children:"useLocalModel"}),": get the Model mounted by the app's local Store. same as ",(0,o.jsx)(n.a,{href:"/en/apis/app/runtime/model/use-local-model",children:(0,o.jsx)(n.code,{children:"useLocalModel"})}),"."]}),"\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.code,{children:"useStore"}),": get the Store used locally by the app. same as ",(0,o.jsx)(n.a,{href:"/en/apis/app/runtime/model/use-store",children:(0,o.jsx)(n.code,{children:"useStore"})}),"."]}),"\n"]}),"\n",(0,o.jsxs)(n.h2,{id:"example",children:["Example",(0,o.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#example",children:"#"})]}),"\n",(0,o.jsxs)(n.p,{children:["use ",(0,o.jsx)(n.code,{children:"createApp"}),", local states can be created to isolate the states between different Reduck applications."]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-tsx",children:"const { Provider: LocalFooProvider, useModel: useLocalFooModel } = createApp();\nconst { Provider: LocalBarProvider, useModel: useLocalBarModel } = createApp();\n\nfunction Foo() {\n  const [fooState] = useLocalFooModel(fooModel);\n  const [barState] = useLocalBarModel(fooModel);\n\n  return (\n    <div>\n      <div>Foo: {fooState}</div>\n      <div>Bar: {barState}</div>\n    </div>\n  );\n}\n\nfunction Container() {\n  return (\n    <LocalFooProvider>\n      <LocalBarProvider>\n        <Foo />\n      </LocalBarProvider>\n    </LocalFooProvider>\n  );\n}\n"})})]})}var l=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=Object.assign({},(0,t.useMDXComponents)(),e.components).wrapper;return n?(0,o.jsx)(n,Object.assign({},e,{children:(0,o.jsx)(c,e)})):c(e)}}}]);