(self.webpackChunkwebpack=self.webpackChunkwebpack||[]).push([["docs_zh_apis_app_runtime_ssr_no-ssr_mdx"],{25187:function(s,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});!function(s,e){for(var n in e)Object.defineProperty(s,n,{enumerable:!0,get:e[n]})}(e,{frontmatter:function(){return l},toc:function(){return i},title:function(){return c},default:function(){return t}});var r=n("12151"),o=n("21447");let l={title:"NoSSR"},i=[{id:"使用姿势",text:"使用姿势",depth:2},{id:"示例",text:"示例",depth:2},{id:"使用场景",text:"使用场景",depth:2}],c="NoSSR";function a(s){let e=Object.assign({h1:"h1",a:"a",p:"p",h2:"h2",div:"div",button:"button",pre:"pre",code:"code",span:"span"},(0,o.useMDXComponents)(),s.components);return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(e.h1,{id:"nossr",children:[(0,r.jsx)(e.a,{className:"header-anchor","aria-hidden":"true",href:"#nossr",children:"#"}),"NoSSR"]}),"\n",(0,r.jsx)(e.p,{children:"被 NoSSR 包裹的内容在服务端不会进行渲染，在客户端 hydrate 阶段也不会渲染，等到整个 App 渲染完成后便会立即渲染。"}),"\n",(0,r.jsxs)(e.h2,{id:"使用姿势",children:[(0,r.jsx)(e.a,{className:"header-anchor","aria-hidden":"true",href:"#使用姿势",children:"#"}),"使用姿势"]}),"\n",(0,r.jsxs)(e.div,{className:"language-tsx",children:[(0,r.jsx)(e.div,{className:""}),(0,r.jsxs)(e.div,{className:"modern-code-content",children:[(0,r.jsx)(e.button,{className:"copy"}),(0,r.jsx)(e.pre,{className:"shiki",style:{backgroundColor:"var(--shiki-color-background)"},children:(0,r.jsxs)(e.code,{children:[(0,r.jsxs)(e.span,{className:"line",children:[(0,r.jsx)(e.span,{style:{color:"var(--shiki-token-keyword)"},children:"import"}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" { NoSSR } "}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-token-keyword)"},children:"from"}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-token-string-expression)"},children:"'@modern-js/runtime'"}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:";"})]}),"\n",(0,r.jsx)(e.span,{className:"line"}),"\n",(0,r.jsxs)(e.span,{className:"line",children:[(0,r.jsx)(e.span,{style:{color:"var(--shiki-token-keyword)"},children:"export"}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-token-keyword)"},children:"default"}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" () "}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-token-keyword)"},children:"=>"}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" <"}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-token-constant)"},children:"NoSSR"}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:">...</"}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-token-constant)"},children:"NoSSR"}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:">;"})]}),"\n",(0,r.jsx)(e.span,{className:"line"})]})})]})]}),"\n",(0,r.jsxs)(e.h2,{id:"示例",children:[(0,r.jsx)(e.a,{className:"header-anchor","aria-hidden":"true",href:"#示例",children:"#"}),"示例"]}),"\n",(0,r.jsxs)(e.p,{children:["下列代码中，",(0,r.jsx)(e.code,{children:"Time"})," 组件用于展示当前的时间，由于服务端渲染和客户端 hydrate 时获取到的时间是不一致的，React 就会抛出异常。针对这种情况可以使用 ",(0,r.jsx)(e.code,{children:"NoSSR"})," 进行优化："]}),"\n",(0,r.jsxs)(e.div,{className:"language-tsx",children:[(0,r.jsx)(e.div,{className:""}),(0,r.jsxs)(e.div,{className:"modern-code-content",children:[(0,r.jsx)(e.button,{className:"copy"}),(0,r.jsx)(e.pre,{className:"shiki",style:{backgroundColor:"var(--shiki-color-background)"},children:(0,r.jsxs)(e.code,{children:[(0,r.jsxs)(e.span,{className:"line",children:[(0,r.jsx)(e.span,{style:{color:"var(--shiki-token-keyword)"},children:"import"}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" { NoSSR } "}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-token-keyword)"},children:"from"}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-token-string-expression)"},children:"'@modern-js/runtime'"}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:";"})]}),"\n",(0,r.jsx)(e.span,{className:"line"}),"\n",(0,r.jsxs)(e.span,{className:"line",children:[(0,r.jsx)(e.span,{style:{color:"var(--shiki-token-keyword)"},children:"function"}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-token-function)"},children:"Time"}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"() {"})]}),"\n",(0,r.jsxs)(e.span,{className:"line",children:[(0,r.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"  "}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-token-keyword)"},children:"return"}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" ("})]}),"\n",(0,r.jsxs)(e.span,{className:"line",children:[(0,r.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"    <"}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-token-constant)"},children:"NoSSR"}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:">"})]}),"\n",(0,r.jsxs)(e.span,{className:"line",children:[(0,r.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"      <"}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-token-string-expression)"},children:"div"}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:">Time: {"}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-token-constant)"},children:"Date"}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-token-function)"},children:".now"}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"()}</"}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-token-string-expression)"},children:"div"}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:">"})]}),"\n",(0,r.jsxs)(e.span,{className:"line",children:[(0,r.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"    </"}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-token-constant)"},children:"NoSSR"}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:">"})]}),"\n",(0,r.jsx)(e.span,{className:"line",children:(0,r.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"  );"})}),"\n",(0,r.jsx)(e.span,{className:"line",children:(0,r.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"}"})}),"\n",(0,r.jsx)(e.span,{className:"line"})]})})]})]}),"\n",(0,r.jsxs)(e.h2,{id:"使用场景",children:[(0,r.jsx)(e.a,{className:"header-anchor","aria-hidden":"true",href:"#使用场景",children:"#"}),"使用场景"]}),"\n",(0,r.jsx)(e.p,{children:"在 CSR 中，常常需要根据当前浏览器 UA，或是当前页面 URL 的某个参数的不同，来渲染不同的内容。如果此时应用直接切换到 SSR，很有可能出现不符合预期的结果。"}),"\n",(0,r.jsx)(e.p,{children:"Modern.js 在 SSR 上下文中提供了完整的浏览器端信息，可以利用上下文信息来决定组件在服务端的渲染结果。"}),"\n",(0,r.jsx)(e.p,{children:"即便如此，如果应用里有太多的判断，开发者希望以后再使用上下文，或者不希望某些内容在服务端被渲染，可以使用 NoSSR 组件将这一部分剔除在服务端渲染外。"})]})}var t=function(){let s=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},{wrapper:e}=Object.assign({},(0,o.useMDXComponents)(),s.components);return e?(0,r.jsx)(e,Object.assign({},s,{children:(0,r.jsx)(a,s)})):a(s)}}}]);