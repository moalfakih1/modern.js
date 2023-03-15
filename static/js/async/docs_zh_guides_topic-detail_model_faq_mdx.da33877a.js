(self.webpackChunkwebpack=self.webpackChunkwebpack||[]).push([["docs_zh_guides_topic-detail_model_faq_mdx"],{5349:function(e,s,n){"use strict";Object.defineProperty(s,"__esModule",{value:!0});!function(e,s){for(var n in s)Object.defineProperty(e,n,{enumerable:!0,get:s[n]})}(s,{frontmatter:function(){return o},toc:function(){return l},title:function(){return i},default:function(){return t}});var r=n("12151");let o={sidebar_position:13,title:"常见问题"},l=[{id:"浏览器兼容性",text:"浏览器兼容性",depth:2},{id:"微前端子应用-model-访问主应用-model",text:"微前端子应用 Model 访问主应用 Model",depth:2}],i="常见问题";function c(e){let s=Object.assign({h1:"h1",a:"a",h2:"h2",p:"p",code:"code",div:"div",strong:"strong",button:"button",pre:"pre",span:"span",img:"img"},e.components);return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(s.h1,{id:"常见问题",children:[(0,r.jsx)(s.a,{className:"header-anchor","aria-hidden":"true",href:"#常见问题",children:"#"}),"常见问题"]}),"\n",(0,r.jsxs)(s.h2,{id:"浏览器兼容性",children:[(0,r.jsx)(s.a,{className:"header-anchor","aria-hidden":"true",href:"#浏览器兼容性",children:"#"}),"浏览器兼容性"]}),"\n",(0,r.jsxs)(s.p,{children:["Reduck 的编译构建产物默认使用 ES6 语法，如果你需要支持更低版本的浏览器，请将 ",(0,r.jsx)(s.code,{children:"@modern-js-reduck"})," 命名空间下的所有包加入到应用的编译过程。"]}),"\n",(0,r.jsxs)(s.div,{className:"modern-directive info",children:[(0,r.jsx)(s.p,{className:"modern-directive-title",children:"补充信息"}),(0,r.jsx)(s.div,{className:"modern-directive-content",children:(0,r.jsxs)(s.p,{children:["\nReduck 使用的 ",(0,r.jsx)(s.a,{href:"https://babeljs.io/docs/en/babel-preset-env",target:"_blank",rel:"nofollow",children:(0,r.jsx)(s.code,{children:"@babel/preset-env"})})," 的详细",(0,r.jsx)(s.a,{href:"https://github.com/web-infra-dev/reduck/blob/main/common/config.js#L10~L17",target:"_blank",rel:"nofollow",children:"配置"}),"。"]})})]}),"\n",(0,r.jsxs)(s.h2,{id:"微前端子应用-model-访问主应用-model",children:[(0,r.jsx)(s.a,{className:"header-anchor","aria-hidden":"true",href:"#微前端子应用-model-访问主应用-model",children:"#"}),"微前端子应用 Model 访问主应用 Model"]}),"\n",(0,r.jsxs)(s.p,{children:["微前端子应用 Model 访问主应用 Model 时，如果该 ",(0,r.jsx)(s.strong,{children:"Model"})," 在主应用尚未挂载，会自动挂载到子应用上。"]}),"\n",(0,r.jsx)(s.p,{children:"示例："}),"\n",(0,r.jsxs)(s.div,{className:"language-ts",children:[(0,r.jsx)(s.div,{className:""}),(0,r.jsxs)(s.div,{className:"modern-code-content",children:[(0,r.jsx)(s.button,{className:"copy"}),(0,r.jsx)(s.pre,{className:"shiki",style:{backgroundColor:"var(--shiki-color-background)"},children:(0,r.jsxs)(s.code,{children:[(0,r.jsxs)(s.span,{className:"line",children:[(0,r.jsx)(s.span,{style:{color:"var(--shiki-token-keyword)"},children:"import"}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" { useModel } "}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-token-keyword)"},children:"from"}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-token-string-expression)"},children:"'@modern-js/runtime/model'"}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:";"})]}),"\n",(0,r.jsxs)(s.span,{className:"line",children:[(0,r.jsx)(s.span,{style:{color:"var(--shiki-token-keyword)"},children:"import"}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" parentModel "}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-token-keyword)"},children:"from"}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-token-string-expression)"},children:"'@MasterApp/models/todoModel'"}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:";"})]}),"\n",(0,r.jsx)(s.span,{className:"line"}),"\n",(0,r.jsxs)(s.span,{className:"line",children:[(0,r.jsx)(s.span,{style:{color:"var(--shiki-token-keyword)"},children:"function"}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-token-function)"},children:"SubModelApp"}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"() {"})]}),"\n",(0,r.jsxs)(s.span,{className:"line",children:[(0,r.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"  "}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-token-keyword)"},children:"const"}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" ["}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-token-constant)"},children:"state"}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-token-punctuation)"},children:","}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-token-constant)"},children:"actions"}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"] "}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-token-keyword)"},children:"="}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-token-function)"},children:"useModel"}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"(parentModel);"})]}),"\n",(0,r.jsx)(s.span,{className:"line"}),"\n",(0,r.jsxs)(s.span,{className:"line",children:[(0,r.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"  "}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-token-keyword)"},children:"return"}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" <"}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-token-function)"},children:"div"}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:">"}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-token-keyword)"},children:"...</"}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"div"}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-token-keyword)"},children:">"}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:";"})]}),"\n",(0,r.jsx)(s.span,{className:"line",children:(0,r.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"}"})}),"\n",(0,r.jsx)(s.span,{className:"line"})]})})]})]}),"\n",(0,r.jsx)(s.p,{children:(0,r.jsx)(s.img,{src:"https://lf3-static.bytednsdoc.com/obj/eden-cn/aphqeh7uhohpquloj/modern-js/docs/mf-communicate.svg",alt:"微前端通信流程图"})}),"\n",(0,r.jsx)(s.p,{children:"为了避免意外降级挂载，建议将主应用所需要共享的 Model 预先挂载："}),"\n",(0,r.jsxs)(s.div,{className:"language-ts",children:[(0,r.jsx)(s.div,{className:""}),(0,r.jsxs)(s.div,{className:"modern-code-content",children:[(0,r.jsx)(s.button,{className:"copy"}),(0,r.jsx)(s.pre,{className:"shiki",style:{backgroundColor:"var(--shiki-color-background)"},children:(0,r.jsxs)(s.code,{children:[(0,r.jsx)(s.span,{className:"line",children:(0,r.jsx)(s.span,{style:{color:"var(--shiki-token-comment)"},children:"// App 是主应用的入口组件，sharedModel1、sharedModel2 是需要共享的 Model。"})}),"\n",(0,r.jsxs)(s.span,{className:"line",children:[(0,r.jsx)(s.span,{style:{color:"var(--shiki-token-constant)"},children:"App"}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:".models "}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-token-keyword)"},children:"="}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" [sharedModel1"}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-token-punctuation)"},children:","}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" sharedModel2];"})]}),"\n",(0,r.jsx)(s.span,{className:"line"})]})})]})]})]})}var t=function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},{wrapper:s}=e.components||{};return s?(0,r.jsx)(s,Object.assign({},e,{children:(0,r.jsx)(c,e)})):c(e)}}}]);