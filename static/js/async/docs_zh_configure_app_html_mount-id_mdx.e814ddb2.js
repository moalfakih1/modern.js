(self.webpackChunkwebpack=self.webpackChunkwebpack||[]).push([["docs_zh_configure_app_html_mount-id_mdx"],{98806:function(e,n,d){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),Object.defineProperty(n,"default",{enumerable:!0,get:function(){return t}});var s=d("12151"),r=d("21447");function c(e){let n=Object.assign({ul:"ul",li:"li",strong:"strong",code:"code",p:"p",div:"div",button:"button",pre:"pre",h3:"h3",a:"a",h4:"h4"},(0,r.useMDXComponents)(),e.components);return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"类型："})," ",(0,s.jsx)(n.code,{children:"string"})]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"默认值："})," ",(0,s.jsx)(n.code,{children:"'root'"})]}),"\n"]}),"\n",(0,s.jsxs)(n.p,{children:["默认情况下，HTML 模板中包含了 ",(0,s.jsx)(n.code,{children:"root"})," 节点用于组件挂载，通过 ",(0,s.jsx)(n.code,{children:"mountId"})," 可以修改该节点的 id。"]}),"\n",(0,s.jsx)(n.div,{className:"language-",children:(0,s.jsxs)(n.div,{className:"modern-code-content",children:[(0,s.jsx)(n.button,{className:"copy"}),(0,s.jsx)(n.pre,{className:"code",children:(0,s.jsx)(n.code,{className:"language-html",children:'<body>\n  <div id="root"></div>\n</body>\n'})})]})}),"\n",(0,s.jsxs)(n.h3,{id:"示例",children:["示例",(0,s.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#示例",children:"#"})]}),"\n",(0,s.jsxs)(n.p,{children:["修改 DOM 挂载节点 ",(0,s.jsx)(n.code,{children:"id"})," 为 ",(0,s.jsx)(n.code,{children:"app"}),"："]}),"\n",(0,s.jsx)(n.div,{className:"language-",children:(0,s.jsxs)(n.div,{className:"modern-code-content",children:[(0,s.jsx)(n.button,{className:"copy"}),(0,s.jsx)(n.pre,{className:"code",children:(0,s.jsx)(n.code,{className:"language-js",children:"export default {\n  html: {\n    mountId: 'app',\n  },\n};\n"})})]})}),"\n",(0,s.jsx)(n.p,{children:"编译后："}),"\n",(0,s.jsx)(n.div,{className:"language-",children:(0,s.jsxs)(n.div,{className:"modern-code-content",children:[(0,s.jsx)(n.button,{className:"copy"}),(0,s.jsx)(n.pre,{className:"code",children:(0,s.jsx)(n.code,{className:"language-html",children:'<body>\n  <div id="app"></div>\n</body>\n'})})]})}),"\n",(0,s.jsxs)(n.h3,{id:"注意事项",children:["注意事项",(0,s.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#注意事项",children:"#"})]}),"\n",(0,s.jsxs)(n.h4,{id:"更新相关代码",children:["更新相关代码",(0,s.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#更新相关代码",children:"#"})]}),"\n",(0,s.jsxs)(n.p,{children:["在修改 ",(0,s.jsx)(n.code,{children:"mountId"})," 后，如果你的代码中有获取 ",(0,s.jsx)(n.code,{children:"root"})," 根节点的逻辑，请更新对应的值："]}),"\n",(0,s.jsx)(n.div,{className:"language-",children:(0,s.jsxs)(n.div,{className:"modern-code-content",children:[(0,s.jsx)(n.button,{className:"copy"}),(0,s.jsx)(n.pre,{className:"code",children:(0,s.jsx)(n.code,{className:"language-diff",children:"- const domNode = document.getElementById('root');\n+ const domNode = document.getElementById('app');\n\nReactDOM.createRoot(domNode).render(<App />);\n"})})]})}),"\n",(0,s.jsxs)(n.h4,{id:"自定义模板",children:["自定义模板",(0,s.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#自定义模板",children:"#"})]}),"\n",(0,s.jsxs)(n.p,{children:["如果你自定义了 HTML 模板，请确保模板中包含 ",(0,s.jsx)(n.code,{children:'<div id="<%= mountId %>"></div>'}),"，否则 ",(0,s.jsx)(n.code,{children:"mountId"})," 配置项无法生效。"]})]})}var t=function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},{wrapper:n}=Object.assign({},(0,r.useMDXComponents)(),e.components);return n?(0,s.jsx)(n,Object.assign({},e,{children:(0,s.jsx)(c,e)})):c(e)}},34401:function(e,n,d){"use strict";Object.defineProperty(n,"__esModule",{value:!0});!function(e,n){for(var d in n)Object.defineProperty(e,d,{enumerable:!0,get:n[d]})}(n,{frontmatter:function(){return t},title:function(){return i},toc:function(){return a},default:function(){return l}});var s=d("12151"),r=d("21447"),c=d.ir(d("98806"));let t={sidebar_label:"mountId"},i="html.mountId",a=[];function o(e){let n=Object.assign({h1:"h1",a:"a",div:"div"},(0,r.useMDXComponents)(),e.components);return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)(n.h1,{id:"html.mountid",children:["html.mountId",(0,s.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#html.mountid",children:"#"})]}),"\n",(0,s.jsxs)(n.div,{className:"modern-directive tip",children:[(0,s.jsx)(n.div,{className:"modern-directive-title",children:"TIP"}),(0,s.jsxs)(n.div,{className:"modern-directive-content",children:["该配置由 Modern.js Builder 提供，更多信息可参考 ",(0,s.jsx)(n.a,{href:"https://modernjs.dev/builder/api/config-html.html#htmlmountid",target:"_blank",rel:"noopener noreferrer",children:"html.mountId"}),"。\n"]})]}),"\n","\n",(0,s.jsx)(c.default,{})]})}var l=function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},{wrapper:n}=Object.assign({},(0,r.useMDXComponents)(),e.components);return n?(0,s.jsx)(n,Object.assign({},e,{children:(0,s.jsx)(o,e)})):o(e)}}}]);