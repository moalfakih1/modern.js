(self.webpackChunkwebpack=self.webpackChunkwebpack||[]).push([["packages_toolkit_main-doc_zh_apis_app_runtime_model_use-model_mdx"],{38051:function(s,e,o){"use strict";Object.defineProperty(e,"__esModule",{value:!0});!function(s,e){for(var o in e)Object.defineProperty(s,o,{enumerable:!0,get:e[o]})}(e,{frontmatter:function(){return r},toc:function(){return i},title:function(){return t},default:function(){return a}});var l=o("41660"),n=o.ir(o("31811"));let r={sidebar_position:2,title:"useModel"},i=[{id:"函数签名",text:"函数签名",depth:2},{id:"参数",text:"参数",depth:3},{id:"返回值",text:"返回值",depth:3},{id:"示例",text:"示例",depth:2},{id:"基本用法",text:"基本用法",depth:3},{id:"selector-用法",text:"selector 用法",depth:3}],t="useModel";function c(s){let e=Object.assign({h1:"h1",a:"a",div:"div",p:"p",h2:"h2",button:"button",pre:"pre",code:"code",span:"span",h3:"h3",ul:"ul",li:"li"},s.components);return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsxs)(e.h1,{id:"usemodel",children:[(0,l.jsx)(e.a,{className:"header-anchor","aria-hidden":"true",href:"#usemodel",children:"#"}),"useModel"]}),"\n","\n",(0,l.jsx)(n.default,{}),"\n",(0,l.jsxs)(e.div,{className:"modern-directive tip",children:[(0,l.jsx)(e.p,{className:"modern-directive-title",children:"提示"}),(0,l.jsx)(e.div,{className:"modern-directive-content",children:(0,l.jsxs)(e.p,{children:["\nReduck 原始类型较为复杂，以下涉及类型定义的地方，展示的是简化后的类型信息。原始类型见 ",(0,l.jsx)(e.a,{href:"https://github.com/web-infra-dev/reduck/blob/main/packages/store/src/model/useModel.ts",target:"_blank",rel:"nofollow",children:"model"}),"。"]})})]}),"\n",(0,l.jsxs)(e.h2,{id:"函数签名",children:[(0,l.jsx)(e.a,{className:"header-anchor","aria-hidden":"true",href:"#函数签名",children:"#"}),"函数签名"]}),"\n",(0,l.jsxs)(e.div,{className:"language-ts",children:[(0,l.jsx)(e.div,{className:""}),(0,l.jsxs)(e.div,{className:"modern-code-content",children:[(0,l.jsx)(e.button,{className:"copy"}),(0,l.jsx)(e.pre,{className:"shiki",style:{backgroundColor:"var(--shiki-color-background)"},children:(0,l.jsxs)(e.code,{children:[(0,l.jsxs)(e.span,{className:"line",children:[(0,l.jsx)(e.span,{style:{color:"var(--shiki-token-keyword)"},children:"function"}),(0,l.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,l.jsx)(e.span,{style:{color:"var(--shiki-token-function)"},children:"useModel"}),(0,l.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"("})]}),"\n",(0,l.jsxs)(e.span,{className:"line",children:[(0,l.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"  models"}),(0,l.jsx)(e.span,{style:{color:"var(--shiki-token-keyword)"},children:":"}),(0,l.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,l.jsx)(e.span,{style:{color:"var(--shiki-token-function)"},children:"Models"}),(0,l.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"[]"}),(0,l.jsx)(e.span,{style:{color:"var(--shiki-token-punctuation)"},children:","})]}),"\n",(0,l.jsxs)(e.span,{className:"line",children:[(0,l.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"  stateSelector"}),(0,l.jsx)(e.span,{style:{color:"var(--shiki-token-keyword)"},children:"?:"}),(0,l.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,l.jsx)(e.span,{style:{color:"var(--shiki-token-function)"},children:"StateSelector"}),(0,l.jsx)(e.span,{style:{color:"var(--shiki-token-punctuation)"},children:","})]}),"\n",(0,l.jsxs)(e.span,{className:"line",children:[(0,l.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"  actionSelector"}),(0,l.jsx)(e.span,{style:{color:"var(--shiki-token-keyword)"},children:"?:"}),(0,l.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,l.jsx)(e.span,{style:{color:"var(--shiki-token-function)"},children:"ActionSelector"}),(0,l.jsx)(e.span,{style:{color:"var(--shiki-token-punctuation)"},children:","})]}),"\n",(0,l.jsxs)(e.span,{className:"line",children:[(0,l.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:")"}),(0,l.jsx)(e.span,{style:{color:"var(--shiki-token-keyword)"},children:":"}),(0,l.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" ["}),(0,l.jsx)(e.span,{style:{color:"var(--shiki-token-function)"},children:"state"}),(0,l.jsx)(e.span,{style:{color:"var(--shiki-token-punctuation)"},children:","}),(0,l.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,l.jsx)(e.span,{style:{color:"var(--shiki-token-function)"},children:"actions"}),(0,l.jsx)(e.span,{style:{color:"var(--shiki-token-punctuation)"},children:","}),(0,l.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,l.jsx)(e.span,{style:{color:"var(--shiki-token-function)"},children:"subscribe"}),(0,l.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"];"})]}),"\n",(0,l.jsxs)(e.span,{className:"line",children:[(0,l.jsx)(e.span,{style:{color:"var(--shiki-token-keyword)"},children:"function"}),(0,l.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,l.jsx)(e.span,{style:{color:"var(--shiki-token-function)"},children:"useModel"}),(0,l.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"("})]}),"\n",(0,l.jsxs)(e.span,{className:"line",children:[(0,l.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"  "}),(0,l.jsx)(e.span,{style:{color:"var(--shiki-token-keyword)"},children:"..."}),(0,l.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"models"}),(0,l.jsx)(e.span,{style:{color:"var(--shiki-token-keyword)"},children:":"}),(0,l.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,l.jsx)(e.span,{style:{color:"var(--shiki-token-function)"},children:"Models"}),(0,l.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"[]"}),(0,l.jsx)(e.span,{style:{color:"var(--shiki-token-punctuation)"},children:","})]}),"\n",(0,l.jsxs)(e.span,{className:"line",children:[(0,l.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"  "}),(0,l.jsx)(e.span,{style:{color:"var(--shiki-token-function)"},children:"stateSelector"}),(0,l.jsx)(e.span,{style:{color:"var(--shiki-token-keyword)"},children:"?:"}),(0,l.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" ("}),(0,l.jsx)(e.span,{style:{color:"var(--shiki-token-keyword)"},children:"..."}),(0,l.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"args"}),(0,l.jsx)(e.span,{style:{color:"var(--shiki-token-keyword)"},children:":"}),(0,l.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,l.jsx)(e.span,{style:{color:"var(--shiki-token-function)"},children:"State"}),(0,l.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"[]) "}),(0,l.jsx)(e.span,{style:{color:"var(--shiki-token-keyword)"},children:"=>"}),(0,l.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,l.jsx)(e.span,{style:{color:"var(--shiki-token-constant)"},children:"any"}),(0,l.jsx)(e.span,{style:{color:"var(--shiki-token-punctuation)"},children:","})]}),"\n",(0,l.jsxs)(e.span,{className:"line",children:[(0,l.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"  "}),(0,l.jsx)(e.span,{style:{color:"var(--shiki-token-function)"},children:"actionSelector"}),(0,l.jsx)(e.span,{style:{color:"var(--shiki-token-keyword)"},children:"?:"}),(0,l.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" ("}),(0,l.jsx)(e.span,{style:{color:"var(--shiki-token-keyword)"},children:"..."}),(0,l.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"args"}),(0,l.jsx)(e.span,{style:{color:"var(--shiki-token-keyword)"},children:":"}),(0,l.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,l.jsx)(e.span,{style:{color:"var(--shiki-token-function)"},children:"Actions"}),(0,l.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"[]) "}),(0,l.jsx)(e.span,{style:{color:"var(--shiki-token-keyword)"},children:"=>"}),(0,l.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,l.jsx)(e.span,{style:{color:"var(--shiki-token-constant)"},children:"any"}),(0,l.jsx)(e.span,{style:{color:"var(--shiki-token-punctuation)"},children:","})]}),"\n",(0,l.jsxs)(e.span,{className:"line",children:[(0,l.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:")"}),(0,l.jsx)(e.span,{style:{color:"var(--shiki-token-keyword)"},children:":"}),(0,l.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" ["}),(0,l.jsx)(e.span,{style:{color:"var(--shiki-token-function)"},children:"state"}),(0,l.jsx)(e.span,{style:{color:"var(--shiki-token-punctuation)"},children:","}),(0,l.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,l.jsx)(e.span,{style:{color:"var(--shiki-token-function)"},children:"actions"}),(0,l.jsx)(e.span,{style:{color:"var(--shiki-token-punctuation)"},children:","}),(0,l.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,l.jsx)(e.span,{style:{color:"var(--shiki-token-function)"},children:"subscribe"}),(0,l.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"];"})]}),"\n",(0,l.jsx)(e.span,{className:"line"})]})})]})]}),"\n",(0,l.jsxs)(e.h3,{id:"参数",children:[(0,l.jsx)(e.a,{className:"header-anchor","aria-hidden":"true",href:"#参数",children:"#"}),"参数"]}),"\n",(0,l.jsxs)(e.ul,{children:["\n",(0,l.jsx)(e.li,{children:"models：Model 对象数组，可以作为一个数组类型的参数传入，也可以所有 Model 逐个作为参数传入。"}),"\n",(0,l.jsxs)(e.li,{children:["stateSelector：可选参数，用于筛选 State 计算。前 n 个参数为 n 个 Model 对应的 State，返回的数据作为 ",(0,l.jsx)(e.code,{children:"useModel"})," 返回值数组的第一个元素。"]}),"\n",(0,l.jsxs)(e.li,{children:["actionSelector：可选参数，用于筛选 Actions 计算。前 n 个参数为 n 个 Model 对应的 Actions，返回的数据作为 ",(0,l.jsx)(e.code,{children:"useModel"})," 返回值数组的第二个元素。"]}),"\n"]}),"\n",(0,l.jsxs)(e.h3,{id:"返回值",children:[(0,l.jsx)(e.a,{className:"header-anchor","aria-hidden":"true",href:"#返回值",children:"#"}),"返回值"]}),"\n",(0,l.jsx)(e.p,{children:"返回一个数组，每一项元素分别为："}),"\n",(0,l.jsxs)(e.ul,{children:["\n",(0,l.jsxs)(e.li,{children:["state：",(0,l.jsx)(e.code,{children:"stateSelector"})," 的返回值。如果未传 ",(0,l.jsx)(e.code,{children:"stateSelector"}),"，会把传入的所有 Model 的 State (包含衍生状态)合并后返回。如果不同 Model 的 State 中存在同名属性，后面的 State 会覆盖前面的 State。当 ",(0,l.jsx)(e.code,{children:"state"})," 发生变化时，调用 ",(0,l.jsx)(e.code,{children:"useModel"})," 的组件会重新渲染。"]}),"\n",(0,l.jsxs)(e.li,{children:["actions：第二个元素为 ",(0,l.jsx)(e.code,{children:"actionSelector"})," 的返回值。如果未传 ",(0,l.jsx)(e.code,{children:"actionSelector"}),"，会把传入的所有 Model 的 Actions (包含 Effects) 合并后返回。如果不同 Model 的 Actions 中存在同名属性，后面的 Actions 会覆盖前面的 Actions。"]}),"\n",(0,l.jsx)(e.li,{children:"subscribe：订阅 State 变化的函数。当传入的任意 Model 的 State 发生改变时，该函数会被调用。"}),"\n"]}),"\n",(0,l.jsxs)(e.h2,{id:"示例",children:[(0,l.jsx)(e.a,{className:"header-anchor","aria-hidden":"true",href:"#示例",children:"#"}),"示例"]}),"\n",(0,l.jsxs)(e.h3,{id:"基本用法",children:[(0,l.jsx)(e.a,{className:"header-anchor","aria-hidden":"true",href:"#基本用法",children:"#"}),"基本用法"]}),"\n",(0,l.jsxs)(e.div,{className:"language-tsx",children:[(0,l.jsx)(e.div,{className:""}),(0,l.jsxs)(e.div,{className:"modern-code-content",children:[(0,l.jsx)(e.button,{className:"copy"}),(0,l.jsx)(e.pre,{className:"shiki",style:{backgroundColor:"var(--shiki-color-background)"},children:(0,l.jsxs)(e.code,{children:[(0,l.jsxs)(e.span,{className:"line",children:[(0,l.jsx)(e.span,{style:{color:"var(--shiki-token-keyword)"},children:"import"}),(0,l.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" todoModel "}),(0,l.jsx)(e.span,{style:{color:"var(--shiki-token-keyword)"},children:"from"}),(0,l.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,l.jsx)(e.span,{style:{color:"var(--shiki-token-string-expression)"},children:"'models/todo'"}),(0,l.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:";"})]}),"\n",(0,l.jsxs)(e.span,{className:"line",children:[(0,l.jsx)(e.span,{style:{color:"var(--shiki-token-keyword)"},children:"import"}),(0,l.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" filterModel "}),(0,l.jsx)(e.span,{style:{color:"var(--shiki-token-keyword)"},children:"from"}),(0,l.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,l.jsx)(e.span,{style:{color:"var(--shiki-token-string-expression)"},children:"'models/filter'"}),(0,l.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:";"})]}),"\n",(0,l.jsx)(e.span,{className:"line"}),"\n",(0,l.jsxs)(e.span,{className:"line",children:[(0,l.jsx)(e.span,{style:{color:"var(--shiki-token-keyword)"},children:"function"}),(0,l.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,l.jsx)(e.span,{style:{color:"var(--shiki-token-function)"},children:"Test"}),(0,l.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"(props) {"})]}),"\n",(0,l.jsxs)(e.span,{className:"line",children:[(0,l.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"  "}),(0,l.jsx)(e.span,{style:{color:"var(--shiki-token-keyword)"},children:"const"}),(0,l.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" ["}),(0,l.jsx)(e.span,{style:{color:"var(--shiki-token-constant)"},children:"state"}),(0,l.jsx)(e.span,{style:{color:"var(--shiki-token-punctuation)"},children:","}),(0,l.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,l.jsx)(e.span,{style:{color:"var(--shiki-token-constant)"},children:"actions"}),(0,l.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"] "}),(0,l.jsx)(e.span,{style:{color:"var(--shiki-token-keyword)"},children:"="}),(0,l.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,l.jsx)(e.span,{style:{color:"var(--shiki-token-function)"},children:"useModel"}),(0,l.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"([todoModel"}),(0,l.jsx)(e.span,{style:{color:"var(--shiki-token-punctuation)"},children:","}),(0,l.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" filterModel]);"})]}),"\n",(0,l.jsxs)(e.span,{className:"line",children:[(0,l.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"  "}),(0,l.jsx)(e.span,{style:{color:"var(--shiki-token-constant)"},children:"actions"}),(0,l.jsx)(e.span,{style:{color:"var(--shiki-token-function)"},children:".add"}),(0,l.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"(); "}),(0,l.jsx)(e.span,{style:{color:"var(--shiki-token-comment)"},children:"// 调用 todoModel add action"})]}),"\n",(0,l.jsxs)(e.span,{className:"line",children:[(0,l.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"  "}),(0,l.jsx)(e.span,{style:{color:"var(--shiki-token-constant)"},children:"actions"}),(0,l.jsx)(e.span,{style:{color:"var(--shiki-token-function)"},children:".setVisibleStatus"}),(0,l.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"(); "}),(0,l.jsx)(e.span,{style:{color:"var(--shiki-token-comment)"},children:"// 调用 filterModel filterModel action"})]}),"\n",(0,l.jsx)(e.span,{className:"line"}),"\n",(0,l.jsxs)(e.span,{className:"line",children:[(0,l.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"  "}),(0,l.jsx)(e.span,{style:{color:"var(--shiki-token-constant)"},children:"state"}),(0,l.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:".items; "}),(0,l.jsx)(e.span,{style:{color:"var(--shiki-token-comment)"},children:"// 获取 todoModel state items"})]}),"\n",(0,l.jsxs)(e.span,{className:"line",children:[(0,l.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"  "}),(0,l.jsx)(e.span,{style:{color:"var(--shiki-token-constant)"},children:"state"}),(0,l.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:".visibleStatus; "}),(0,l.jsx)(e.span,{style:{color:"var(--shiki-token-comment)"},children:"// 获取 filterModel state visibleStatus"})]}),"\n",(0,l.jsx)(e.span,{className:"line",children:(0,l.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"}"})}),"\n",(0,l.jsx)(e.span,{className:"line"})]})})]})]}),"\n",(0,l.jsxs)(e.h3,{id:"selector-用法",children:[(0,l.jsx)(e.a,{className:"header-anchor","aria-hidden":"true",href:"#selector-用法",children:"#"}),"selector 用法"]}),"\n",(0,l.jsxs)(e.div,{className:"language-js",children:[(0,l.jsx)(e.div,{className:""}),(0,l.jsxs)(e.div,{className:"modern-code-content",children:[(0,l.jsx)(e.button,{className:"copy"}),(0,l.jsx)(e.pre,{className:"shiki",style:{backgroundColor:"var(--shiki-color-background)"},children:(0,l.jsxs)(e.code,{children:[(0,l.jsxs)(e.span,{className:"line",children:[(0,l.jsx)(e.span,{style:{color:"var(--shiki-token-keyword)"},children:"function"}),(0,l.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,l.jsx)(e.span,{style:{color:"var(--shiki-token-function)"},children:"Test"}),(0,l.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"(props) {"})]}),"\n",(0,l.jsxs)(e.span,{className:"line",children:[(0,l.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"  "}),(0,l.jsx)(e.span,{style:{color:"var(--shiki-token-keyword)"},children:"const"}),(0,l.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" ["}),(0,l.jsx)(e.span,{style:{color:"var(--shiki-token-constant)"},children:"state"}),(0,l.jsx)(e.span,{style:{color:"var(--shiki-token-punctuation)"},children:","}),(0,l.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,l.jsx)(e.span,{style:{color:"var(--shiki-token-constant)"},children:"actions"}),(0,l.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"] "}),(0,l.jsx)(e.span,{style:{color:"var(--shiki-token-keyword)"},children:"="}),(0,l.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,l.jsx)(e.span,{style:{color:"var(--shiki-token-function)"},children:"useModel"}),(0,l.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"("})]}),"\n",(0,l.jsxs)(e.span,{className:"line",children:[(0,l.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"    [todoModel"}),(0,l.jsx)(e.span,{style:{color:"var(--shiki-token-punctuation)"},children:","}),(0,l.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" filterModel]"}),(0,l.jsx)(e.span,{style:{color:"var(--shiki-token-punctuation)"},children:","})]}),"\n",(0,l.jsxs)(e.span,{className:"line",children:[(0,l.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"    (todoState"}),(0,l.jsx)(e.span,{style:{color:"var(--shiki-token-punctuation)"},children:","}),(0,l.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" filterState) "}),(0,l.jsx)(e.span,{style:{color:"var(--shiki-token-keyword)"},children:"=>"}),(0,l.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" ({"})]}),"\n",(0,l.jsxs)(e.span,{className:"line",children:[(0,l.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"      items"}),(0,l.jsx)(e.span,{style:{color:"var(--shiki-token-keyword)"},children:":"}),(0,l.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,l.jsx)(e.span,{style:{color:"var(--shiki-token-constant)"},children:"todoState"}),(0,l.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:".items"}),(0,l.jsx)(e.span,{style:{color:"var(--shiki-token-punctuation)"},children:","})]}),"\n",(0,l.jsxs)(e.span,{className:"line",children:[(0,l.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"      visibleStatus"}),(0,l.jsx)(e.span,{style:{color:"var(--shiki-token-keyword)"},children:":"}),(0,l.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,l.jsx)(e.span,{style:{color:"var(--shiki-token-string-expression)"},children:"`"}),(0,l.jsx)(e.span,{style:{color:"var(--shiki-token-keyword)"},children:"${"}),(0,l.jsx)(e.span,{style:{color:"var(--shiki-token-constant)"},children:"props"}),(0,l.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:".prefix"}),(0,l.jsx)(e.span,{style:{color:"var(--shiki-token-keyword)"},children:"}"}),(0,l.jsx)(e.span,{style:{color:"var(--shiki-token-string-expression)"},children:"-"}),(0,l.jsx)(e.span,{style:{color:"var(--shiki-token-keyword)"},children:"${"}),(0,l.jsx)(e.span,{style:{color:"var(--shiki-token-constant)"},children:"filterState"}),(0,l.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:".visibleStatus"}),(0,l.jsx)(e.span,{style:{color:"var(--shiki-token-keyword)"},children:"}"}),(0,l.jsx)(e.span,{style:{color:"var(--shiki-token-string-expression)"},children:"`"}),(0,l.jsx)(e.span,{style:{color:"var(--shiki-token-punctuation)"},children:","})]}),"\n",(0,l.jsxs)(e.span,{className:"line",children:[(0,l.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"    })"}),(0,l.jsx)(e.span,{style:{color:"var(--shiki-token-punctuation)"},children:","})]}),"\n",(0,l.jsxs)(e.span,{className:"line",children:[(0,l.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"    (todoActions"}),(0,l.jsx)(e.span,{style:{color:"var(--shiki-token-punctuation)"},children:","}),(0,l.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" filterActions) "}),(0,l.jsx)(e.span,{style:{color:"var(--shiki-token-keyword)"},children:"=>"}),(0,l.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" ({"})]}),"\n",(0,l.jsxs)(e.span,{className:"line",children:[(0,l.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"      "}),(0,l.jsx)(e.span,{style:{color:"var(--shiki-token-keyword)"},children:"..."}),(0,l.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"todoActions"}),(0,l.jsx)(e.span,{style:{color:"var(--shiki-token-punctuation)"},children:","})]}),"\n",(0,l.jsxs)(e.span,{className:"line",children:[(0,l.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"      "}),(0,l.jsx)(e.span,{style:{color:"var(--shiki-token-keyword)"},children:"..."}),(0,l.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"filterActions"}),(0,l.jsx)(e.span,{style:{color:"var(--shiki-token-punctuation)"},children:","})]}),"\n",(0,l.jsxs)(e.span,{className:"line",children:[(0,l.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"    })"}),(0,l.jsx)(e.span,{style:{color:"var(--shiki-token-punctuation)"},children:","})]}),"\n",(0,l.jsx)(e.span,{className:"line",children:(0,l.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"  );"})}),"\n",(0,l.jsxs)(e.span,{className:"line",children:[(0,l.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"  "}),(0,l.jsx)(e.span,{style:{color:"var(--shiki-token-constant)"},children:"actions"}),(0,l.jsx)(e.span,{style:{color:"var(--shiki-token-function)"},children:".add"}),(0,l.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"(); "}),(0,l.jsx)(e.span,{style:{color:"var(--shiki-token-comment)"},children:"// 调用 todoModel add action"})]}),"\n",(0,l.jsxs)(e.span,{className:"line",children:[(0,l.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"  "}),(0,l.jsx)(e.span,{style:{color:"var(--shiki-token-constant)"},children:"actions"}),(0,l.jsx)(e.span,{style:{color:"var(--shiki-token-function)"},children:".setVisibleStatus"}),(0,l.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"(); "}),(0,l.jsx)(e.span,{style:{color:"var(--shiki-token-comment)"},children:"// 调用 filterModel filterModel action"})]}),"\n",(0,l.jsx)(e.span,{className:"line"}),"\n",(0,l.jsxs)(e.span,{className:"line",children:[(0,l.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"  "}),(0,l.jsx)(e.span,{style:{color:"var(--shiki-token-constant)"},children:"state"}),(0,l.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:".items; "}),(0,l.jsx)(e.span,{style:{color:"var(--shiki-token-comment)"},children:"// 获取 todoModel state items"})]}),"\n",(0,l.jsxs)(e.span,{className:"line",children:[(0,l.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"  "}),(0,l.jsx)(e.span,{style:{color:"var(--shiki-token-constant)"},children:"state"}),(0,l.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:".visibleStatus; "}),(0,l.jsx)(e.span,{style:{color:"var(--shiki-token-comment)"},children:"// 获取 filterModel state visibleStatus"})]}),"\n",(0,l.jsx)(e.span,{className:"line",children:(0,l.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"}"})}),"\n",(0,l.jsx)(e.span,{className:"line"})]})})]})]}),"\n",(0,l.jsxs)(e.div,{className:"modern-directive info",children:[(0,l.jsx)(e.p,{className:"modern-directive-title",children:"更多参考"}),(0,l.jsx)(e.div,{className:"modern-directive-content",children:(0,l.jsxs)(e.p,{children:["\n",(0,l.jsx)(e.a,{href:"/guides/topic-detail/model/use-model.html",children:"使用 Model"})]})})]})]})}var a=function(){let s=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},{wrapper:e}=s.components||{};return e?(0,l.jsx)(e,Object.assign({},s,{children:(0,l.jsx)(c,s)})):c(s)}}}]);