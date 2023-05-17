(self.webpackChunk_modern_js_main_doc=self.webpackChunk_modern_js_main_doc||[]).push([["docs_zh_configure_app_security_sri_mdx"],{29445:function(e,n,r){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),Object.defineProperty(n,"default",{enumerable:!0,get:function(){return a}});var s=r("9880"),i=r("23169");function c(e){var n=Object.assign({ul:"ul",li:"li",strong:"strong",div:"div",pre:"pre",code:"code",p:"p",a:"a",h4:"h4",h3:"h3"},(0,i.useMDXComponents)(),e.components);return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.strong,{children:"类型："})}),"\n"]}),"\n",(0,s.jsx)(n.div,{className:"language-",children:(0,s.jsx)(n.div,{className:"modern-code-content",children:(0,s.jsx)(n.pre,{className:"code",children:(0,s.jsx)(n.code,{className:"language-ts",children:"type SRIOptions =\n  | {\n      hashFuncNames?: string[];\n      enabled?: 'auto' | boolean;\n      hashLoading?: 'eager' | 'lazy';\n    }\n  | boolean;\n"})})})}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"默认值："})," ",(0,s.jsx)(n.code,{children:"undefined"})]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"打包工具："})," ",(0,s.jsx)(n.code,{children:"仅支持 webpack"})]}),"\n"]}),"\n",(0,s.jsxs)(n.p,{children:["为 HTML 所引入的子资源添加完整性属性 —— ",(0,s.jsx)(n.code,{children:"integrity"}),"，使浏览器能够验证引入资源的完整性，以此防止下载的资源被篡改。"]}),"\n",(0,s.jsxs)(n.p,{children:["启动该选项后会将 webpack 的 ",(0,s.jsx)(n.a,{href:"https://webpack.docschina.org/configuration/output/#outputcrossoriginloading",target:"_blank",rel:"noopener noreferrer",children:"output.crossOriginLoading"})," 配置项设置为 ",(0,s.jsx)(n.code,{children:"anonymous"}),"。"]}),"\n",(0,s.jsxs)(n.h4,{id:"sri-介绍",children:["SRI 介绍",(0,s.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#sri-介绍",children:"#"})]}),"\n",(0,s.jsx)(n.p,{children:"子资源完整性 Subresource Integrity（SRI）是专门用来校验资源的一种方案，它读取资源标签中的 integrity 属性，将其中的信息摘要值，和资源实际的信息摘要值进行对比，如果发现无法匹配，那么浏览器就会拒绝执行资源。"}),"\n",(0,s.jsx)(n.p,{children:"对于 script 标签来说，结果为拒绝执行其中的代码；对于 CSS link 来说，结果为不加载其中的样式。"}),"\n",(0,s.jsxs)(n.p,{children:["关于 SRI 的更多内容，可以查看 ",(0,s.jsx)(n.a,{href:"https://developer.mozilla.org/zh-CN/docs/Web/Security/Subresource_Integrity",target:"_blank",rel:"noopener noreferrer",children:"Subresource Integrity - MDN"}),"。"]}),"\n",(0,s.jsxs)(n.h3,{id:"示例",children:["示例",(0,s.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#示例",children:"#"})]}),"\n",(0,s.jsxs)(n.p,{children:["默认情况下，不会开启 ",(0,s.jsx)(n.code,{children:"SRI"}),"，当开启之后它的默认配置如下："]}),"\n",(0,s.jsx)(n.div,{className:"language-",children:(0,s.jsx)(n.div,{className:"modern-code-content",children:(0,s.jsx)(n.pre,{className:"code",children:(0,s.jsx)(n.code,{className:"language-js",children:'{\n  hashFuncNames: [\'sha384\'];\n  enabled: "auto",\n  hashLoading: "eager",\n}\n'})})})}),"\n",(0,s.jsx)(n.p,{children:"你可以按照你自己的需求自定义配置项:"}),"\n",(0,s.jsx)(n.div,{className:"language-",children:(0,s.jsx)(n.div,{className:"modern-code-content",children:(0,s.jsx)(n.pre,{className:"code",children:(0,s.jsx)(n.code,{className:"language-js",children:"export default {\n  security: {\n    sri: {\n      hashFuncNames: ['sha-256'],\n      enabled: true,\n      hashLoading: 'lazy',\n    },\n  },\n};\n"})})})})]})}var a=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=Object.assign({},(0,i.useMDXComponents)(),e.components).wrapper;return n?(0,s.jsx)(n,Object.assign({},e,{children:(0,s.jsx)(c,e)})):c(e)}},23103:function(e,n,r){"use strict";Object.defineProperty(n,"__esModule",{value:!0});!function(e,n){for(var r in n)Object.defineProperty(e,r,{enumerable:!0,get:n[r]})}(n,{frontmatter:function(){return a},title:function(){return d},toc:function(){return t},default:function(){return l}});var s=r("9880"),i=r("23169"),c=r.ir(r("29445")),a={sidebar_label:"sri"},d="security.sri",t=[];function o(e){var n=Object.assign({h1:"h1",a:"a",div:"div",p:"p"},(0,i.useMDXComponents)(),e.components);return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)(n.h1,{id:"securitysri",children:["security.sri",(0,s.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#securitysri",children:"#"})]}),"\n",(0,s.jsxs)(n.div,{className:"modern-directive tip",children:[(0,s.jsx)(n.div,{className:"modern-directive-title",children:"TIP"}),(0,s.jsx)(n.div,{className:"modern-directive-content",children:(0,s.jsxs)(n.p,{children:["该配置由 Modern.js Builder 提供，更多信息可参考 ",(0,s.jsx)(n.a,{href:"https://modernjs.dev/builder/api/config-security.html#securitysri",target:"_blank",rel:"noopener noreferrer",children:"security.sri"}),"。\n"]})})]}),"\n","\n",(0,s.jsx)(c.default,{})]})}var l=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=Object.assign({},(0,i.useMDXComponents)(),e.components).wrapper;return n?(0,s.jsx)(n,Object.assign({},e,{children:(0,s.jsx)(o,e)})):o(e)}}}]);