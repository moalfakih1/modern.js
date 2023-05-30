(self.webpackChunk_modern_js_main_doc=self.webpackChunk_modern_js_main_doc||[]).push([["docs_en_configure_app_runtime_state_mdx"],{3063:function(e,n,s){"use strict";Object.defineProperty(n,"__esModule",{value:!0});!function(e,n){for(var s in n)Object.defineProperty(e,s,{enumerable:!0,get:n[s]})}(n,{frontmatter:function(){return r},title:function(){return d},toc:function(){return l},default:function(){return o}});var t=s("9880"),i=s("23169"),r={sidebar_label:"state"},d="runtime.state",l=[{text:"models",depth:2,id:"models"},{text:"initialState",depth:2,id:"initialstate"},{text:"immer",depth:2,id:"immer"},{text:"effects",depth:2,id:"effects"},{text:"autoActions",depth:2,id:"autoactions"},{text:"devtools",depth:2,id:"devtools"}];function a(e){var n=Object.assign({h1:"h1",a:"a",ul:"ul",li:"li",strong:"strong",code:"code",p:"p",h2:"h2"},(0,i.useMDXComponents)(),e.components);return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)(n.h1,{id:"runtimestate",children:["runtime.state",(0,t.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#runtimestate",children:"#"})]}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"Type:"})," ",(0,t.jsx)(n.code,{children:"boolean | object"})]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"Default:"})," ",(0,t.jsx)(n.code,{children:"false"})]}),"\n"]}),"\n",(0,t.jsxs)(n.p,{children:["Once ",(0,t.jsx)(n.code,{children:"state"})," is enabled, you can use ",(0,t.jsx)(n.a,{href:"/guides/topic-detail/model/quick-start",children:"Model"})," for state management."]}),"\n",(0,t.jsx)(n.p,{children:"The specific configuration items are as follows:"}),"\n",(0,t.jsxs)(n.h2,{id:"models",children:["models",(0,t.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#models",children:"#"})]}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"Type:"})," ",(0,t.jsx)(n.code,{children:"Array<Model>"})]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"Default:"})," ",(0,t.jsx)(n.code,{children:"[]"})]}),"\n"]}),"\n",(0,t.jsx)(n.p,{children:"Register model objects that are mounted in advance, and these models will be mounted immediately after the Reduck store is created. Generally, there is no need to mount in advance."}),"\n",(0,t.jsxs)(n.h2,{id:"initialstate",children:["initialState",(0,t.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#initialstate",children:"#"})]}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"Type:"})," ",(0,t.jsx)(n.code,{children:"Object"})]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"Default:"})," ",(0,t.jsx)(n.code,{children:"{}"})]}),"\n"]}),"\n",(0,t.jsx)(n.p,{children:"Used to set the initial state of the global store. Generally used for SSR to initialize data during the hydration phase."}),"\n",(0,t.jsxs)(n.h2,{id:"immer",children:["immer",(0,t.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#immer",children:"#"})]}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"Type:"})," ",(0,t.jsx)(n.code,{children:"boolean"})]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"Default:"})," ",(0,t.jsx)(n.code,{children:"true"})]}),"\n"]}),"\n",(0,t.jsxs)(n.p,{children:["Whether to enable to update the state with mutable, it is enabled by default, and set to ",(0,t.jsx)(n.code,{children:"false"})," if you want to disable it."]}),"\n",(0,t.jsxs)(n.h2,{id:"effects",children:["effects",(0,t.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#effects",children:"#"})]}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"Type:"})," ",(0,t.jsx)(n.code,{children:"boolean"})]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"Default:"})," ",(0,t.jsx)(n.code,{children:"true"})]}),"\n"]}),"\n",(0,t.jsxs)(n.p,{children:["Whether to enable the side effect management feature, it is enabled by default, and set to ",(0,t.jsx)(n.code,{children:"false"})," if you want to disable it."]}),"\n",(0,t.jsxs)(n.h2,{id:"autoactions",children:["autoActions",(0,t.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#autoactions",children:"#"})]}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"Type:"})," ",(0,t.jsx)(n.code,{children:"boolean"})]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"Default:"})," ",(0,t.jsx)(n.code,{children:"true"})]}),"\n"]}),"\n",(0,t.jsxs)(n.p,{children:["Whether to enable the auto-generated actions feature, it is enabled by default, and set to ",(0,t.jsx)(n.code,{children:"false"})," if you want to disable it."]}),"\n",(0,t.jsxs)(n.h2,{id:"devtools",children:["devtools",(0,t.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#devtools",children:"#"})]}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"Type:"})," ",(0,t.jsx)(n.code,{children:"boolean | EnhancerOptions"})]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"Default:"})," ",(0,t.jsx)(n.code,{children:"true"})]}),"\n"]}),"\n",(0,t.jsxs)(n.p,{children:["Whether to enable devtools, it is enabled by default, and all parameters of ",(0,t.jsx)(n.a,{href:"https://github.com/zalmoxisus/redux-devtools-extension/blob/master/docs/API/Arguments.md",target:"_blank",rel:"noopener noreferrer",children:"redux-devtools-extension"})," are supported at the same time. If you want to disable it, set it to ",(0,t.jsx)(n.code,{children:"false"}),"."]})]})}var o=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=Object.assign({},(0,i.useMDXComponents)(),e.components).wrapper;return n?(0,t.jsx)(n,Object.assign({},e,{children:(0,t.jsx)(a,e)})):a(e)}}}]);