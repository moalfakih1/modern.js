(self.webpackChunk_modern_js_main_doc=self.webpackChunk_modern_js_main_doc||[]).push([["docs_zh_apis_app_runtime_ssr_pre-render_mdx"],{29170:function(e,n,r){"use strict";Object.defineProperty(n,"__esModule",{value:!0});!function(e,n){for(var r in n)Object.defineProperty(e,r,{enumerable:!0,get:n[r]})}(n,{frontmatter:function(){return l},title:function(){return c},toc:function(){return a},default:function(){return h}});var s=r("9880"),d=r("23169"),l={title:"PreRender"},c="PreRender",a=[{text:"使用姿势",depth:2,id:"使用姿势"},{text:"函数签名",depth:2,id:"函数签名"},{text:"参数",depth:3,id:"参数"},{text:"示例",depth:2,id:"示例"}];function i(e){var n=Object.assign({h1:"h1",a:"a",p:"p",h2:"h2",pre:"pre",code:"code",h3:"h3",ul:"ul",li:"li"},(0,d.useMDXComponents)(),e.components);return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)(n.h1,{id:"prerender",children:["PreRender",(0,s.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#prerender",children:"#"})]}),"\n",(0,s.jsx)(n.p,{children:"无展示内容的高阶组件，通过类似 Helmet 的方式实现 SPA 路由级的缓存，无需额外配置。"}),"\n",(0,s.jsxs)(n.h2,{id:"使用姿势",children:["使用姿势",(0,s.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#使用姿势",children:"#"})]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-tsx",children:"import { PreRender } from '@modern-js/runtime/ssr';\n\nexport default () => (\n  <>\n    <PreRender interval={5} />\n  </>\n);\n"})}),"\n",(0,s.jsxs)(n.h2,{id:"函数签名",children:["函数签名",(0,s.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#函数签名",children:"#"})]}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.code,{children:"PreRender"})," 组件提供了一套常用的配置参数，用于控制缓存的规则、过期时间、缓存算法等。"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-tsx",children:"type Props {\n  interval: number;\n  staleLimit: number;\n  level: number;\n  include: { header?: string[], query?: string[] };\n  matches: { header?: Record<string, any>, query?: Record<string, any> }\n}\n\nfunction PreRender(props: Props): React.Component\n"})}),"\n",(0,s.jsxs)(n.h3,{id:"参数",children:["参数",(0,s.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#参数",children:"#"})]}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"interval"}),"：设置缓存保持新鲜的时间，单位秒。在该时间内，将直接使用缓存，并且不做异步渲染。"]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"staleLimit"}),"：设置缓存完全过期的时间，单位秒。在该时间内，缓存可以被返回，并且会做一步渲染，否则必须使用重新渲染的结果。"]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"level"}),"：设置缓存标识的计算规则等级，通常配合 ",(0,s.jsx)(n.code,{children:"includes"})," 与 ",(0,s.jsx)(n.code,{children:"matches"})," 使用。默认值为 ",(0,s.jsx)(n.code,{children:"0"}),"。"]}),"\n"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"0：路由路径\n1：路由路径 + 查询字符串\n2：路由路径 + 请求头\n3：路由路径 + 查询字符串 + 请求头\n"})}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"includes"}),"：设置需要被纳入缓存标识的内容，在 level 非 0 时使用。默认值为 ",(0,s.jsx)(n.code,{children:"null"}),"。"]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"matches"}),"：设置 query 或 header 的值在缓存标识计算中的重写规则，通常用在缓存分类时，支持正则表达式。默认值为 ",(0,s.jsx)(n.code,{children:"null"}),"。"]}),"\n"]}),"\n",(0,s.jsxs)(n.h2,{id:"示例",children:["示例",(0,s.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#示例",children:"#"})]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-tsx",children:"import { PreRender } from '@modern-js/runtime/ssr';\n\nexport default function App() {\n  return (\n    <>\n      <PreRender interval={10} />\n      <div>Hello Modern</div>\n    </>\n  );\n}\n"})}),"\n",(0,s.jsx)(n.p,{children:"下面例子展示了如何将 query、header 中指定的参数纳入缓存计算中："}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-tsx",children:"/* 使用 query 中的 channel 和 header 中的 language 计算缓存标识 */\n<PreRender\n  interval={10}\n  level={2}\n  includes={{\n    query: ['channel'],\n    header: ['language'],\n  }}\n/>\n"})}),"\n",(0,s.jsx)(n.p,{children:"下面例子展示了如何不让测试频道影响线上缓存："}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-tsx",children:'/* 将 query 中 channel 值为 test_ 开头的重写为 testChannel，否则重写为 otherChannel */\n<PreRender interval={10} level={2} includes={{\n  query: ["channel"],\n  header: ["language"]\n}} matches={{\n  query: {\n    channel: {\n      "testChannel", "^test_",\n      "otherChannel", ".*"\n    }\n  }\n}} />\n'})})]})}var h=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=Object.assign({},(0,d.useMDXComponents)(),e.components).wrapper;return n?(0,s.jsx)(n,Object.assign({},e,{children:(0,s.jsx)(i,e)})):i(e)}}}]);