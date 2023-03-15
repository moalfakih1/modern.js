(self.webpackChunkwebpack=self.webpackChunkwebpack||[]).push([["docs_en_guides_topic-detail_model_use-out-of-modernjs_mdx"],{16346:function(e,s,n){"use strict";Object.defineProperty(s,"__esModule",{value:!0});!function(e,s){for(var n in s)Object.defineProperty(e,n,{enumerable:!0,get:s[n]})}(s,{frontmatter:function(){return l},toc:function(){return o},title:function(){return i},default:function(){return t}});var r=n("12151");let l={sidebar_position:12,title:"Using Reduck Separately"},o=[],i="Using Reduck Separately";function c(e){let s=Object.assign({h1:"h1",a:"a",p:"p",ol:"ol",li:"li",code:"code",div:"div",button:"button",pre:"pre",span:"span"},e.components);return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(s.h1,{id:"using-reduck-separately",children:[(0,r.jsx)(s.a,{className:"header-anchor","aria-hidden":"true",href:"#using-reduck-separately",children:"#"}),"Using Reduck Separately"]}),"\n",(0,r.jsx)(s.p,{children:"When integrating Reduck separately from Modern.js, the following modifications need to be made:"}),"\n",(0,r.jsxs)(s.ol,{children:["\n",(0,r.jsx)(s.li,{children:"Install the Reduck related packages"}),"\n"]}),"\n",(0,r.jsxs)(s.p,{children:["Install the Reduck package in the project: ",(0,r.jsx)(s.code,{children:"@modern-js-reduck/react"}),"."]}),"\n",(0,r.jsxs)(s.ol,{start:"2",children:["\n",(0,r.jsx)(s.li,{children:"Import package names for API"}),"\n"]}),"\n",(0,r.jsxs)(s.p,{children:["When used in Modern.js, the package name for exporting Reduck API is: ",(0,r.jsx)(s.code,{children:"@modern-js/runtime/model"}),". When using Reduck separately, the package name for exporting is: ",(0,r.jsx)(s.code,{children:"@modern-js-reduck/react"}),"."]}),"\n",(0,r.jsxs)(s.ol,{start:"3",children:["\n",(0,r.jsxs)(s.li,{children:["Wrap the ",(0,r.jsx)(s.code,{children:"Provider"})," component"]}),"\n"]}),"\n",(0,r.jsxs)(s.p,{children:["Modern.js automatically wraps the ",(0,r.jsx)(s.a,{href:"/en/apis/app/runtime/model/Provider.html",children:(0,r.jsx)(s.code,{children:"Provider"})})," component used to inject the Reduck global Store on the entry component of the application. When using Reduck separately, this needs to be done manually."]}),"\n",(0,r.jsx)(s.p,{children:"Example:"}),"\n",(0,r.jsxs)(s.div,{className:"language-tsx",children:[(0,r.jsx)(s.div,{className:""}),(0,r.jsxs)(s.div,{className:"modern-code-content",children:[(0,r.jsx)(s.button,{className:"copy"}),(0,r.jsx)(s.pre,{className:"shiki",style:{backgroundColor:"var(--shiki-color-background)"},children:(0,r.jsxs)(s.code,{children:[(0,r.jsx)(s.span,{className:"line",children:(0,r.jsx)(s.span,{style:{color:"var(--shiki-token-comment)"},children:"// Root Component"})}),"\n",(0,r.jsxs)(s.span,{className:"line",children:[(0,r.jsx)(s.span,{style:{color:"var(--shiki-token-keyword)"},children:"const"}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-token-function)"},children:"Root"}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-token-keyword)"},children:"="}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" () "}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-token-keyword)"},children:"=>"}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" {"})]}),"\n",(0,r.jsxs)(s.span,{className:"line",children:[(0,r.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"  "}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-token-keyword)"},children:"return"}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" ("})]}),"\n",(0,r.jsxs)(s.span,{className:"line",children:[(0,r.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"    <"}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-token-constant)"},children:"Provider"}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:">"})]}),"\n",(0,r.jsxs)(s.span,{className:"line",children:[(0,r.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"      {"}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-token-comment)"},children:"/* Entry App */"}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"}"})]}),"\n",(0,r.jsxs)(s.span,{className:"line",children:[(0,r.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"      <"}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-token-constant)"},children:"App"}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" />"})]}),"\n",(0,r.jsxs)(s.span,{className:"line",children:[(0,r.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"    </"}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-token-constant)"},children:"Provider"}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:">"})]}),"\n",(0,r.jsx)(s.span,{className:"line",children:(0,r.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"  );"})}),"\n",(0,r.jsx)(s.span,{className:"line",children:(0,r.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"};"})}),"\n",(0,r.jsx)(s.span,{className:"line"})]})})]})]}),"\n",(0,r.jsxs)(s.ol,{start:"4",children:["\n",(0,r.jsx)(s.li,{children:"Feature configuration"}),"\n"]}),"\n",(0,r.jsxs)(s.p,{children:["When used in Modern.js, Reduck features can be configured through ",(0,r.jsx)(s.a,{href:"/en/configure/app/runtime/state.html",children:(0,r.jsx)(s.code,{children:"runtime.state"})}),". When used separately, configuration needs to be done through the ",(0,r.jsx)(s.code,{children:"config"})," or ",(0,r.jsx)(s.code,{children:"store"})," parameter of ",(0,r.jsx)(s.a,{href:"/en/apis/app/runtime/model/Provider.html",children:(0,r.jsx)(s.code,{children:"Provider"})}),"."]}),"\n",(0,r.jsx)(s.p,{children:"Example:"}),"\n",(0,r.jsxs)(s.div,{className:"language-tsx",children:[(0,r.jsx)(s.div,{className:""}),(0,r.jsxs)(s.div,{className:"modern-code-content",children:[(0,r.jsx)(s.button,{className:"copy"}),(0,r.jsx)(s.pre,{className:"shiki",style:{backgroundColor:"var(--shiki-color-background)"},children:(0,r.jsxs)(s.code,{children:[(0,r.jsxs)(s.span,{className:"line",children:[(0,r.jsx)(s.span,{style:{color:"var(--shiki-token-keyword)"},children:"const"}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-token-function)"},children:"Root"}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-token-keyword)"},children:"="}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" () "}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-token-keyword)"},children:"=>"}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" {"})]}),"\n",(0,r.jsxs)(s.span,{className:"line",children:[(0,r.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"  "}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-token-keyword)"},children:"return"}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" ("})]}),"\n",(0,r.jsxs)(s.span,{className:"line",children:[(0,r.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"    {"}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-token-comment)"},children:"/* Close Redux DevTools */"}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"}"})]}),"\n",(0,r.jsxs)(s.span,{className:"line",children:[(0,r.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"    <"}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-token-constant)"},children:"Provider"}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-token-function)"},children:"config"}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-token-keyword)"},children:"="}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"{{ devTools"}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-token-keyword)"},children:":"}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-token-constant)"},children:"false"}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" }}>"})]}),"\n",(0,r.jsxs)(s.span,{className:"line",children:[(0,r.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"      <"}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-token-constant)"},children:"App"}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" />"})]}),"\n",(0,r.jsxs)(s.span,{className:"line",children:[(0,r.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"    </"}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-token-constant)"},children:"Provider"}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:">"})]}),"\n",(0,r.jsx)(s.span,{className:"line",children:(0,r.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"  )"})}),"\n",(0,r.jsx)(s.span,{className:"line",children:(0,r.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"}"})}),"\n",(0,r.jsx)(s.span,{className:"line"})]})})]})]})]})}var t=function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},{wrapper:s}=e.components||{};return s?(0,r.jsx)(s,Object.assign({},e,{children:(0,r.jsx)(c,e)})):c(e)}}}]);