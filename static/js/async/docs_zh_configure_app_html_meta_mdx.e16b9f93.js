(self.webpackChunk_modern_js_main_doc=self.webpackChunk_modern_js_main_doc||[]).push([["docs_zh_configure_app_html_meta_mdx"],{876:function(e,n,r){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),Object.defineProperty(n,"default",{enumerable:!0,get:function(){return i}});var s=r("9880"),c=r("23169");function d(e){var n=Object.assign({ul:"ul",li:"li",strong:"strong",code:"code",p:"p",h4:"h4",a:"a",pre:"pre",h3:"h3"},(0,c.useMDXComponents)(),e.components);return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"类型："})," ",(0,s.jsx)(n.code,{children:"Record<string, false | string | Record<string, string | boolean>>"})]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"默认值："})," ",(0,s.jsx)(n.code,{children:"undefined"})]}),"\n"]}),"\n",(0,s.jsxs)(n.p,{children:["配置 HTML 页面的 ",(0,s.jsx)(n.code,{children:"<meta>"})," 标签。"]}),"\n",(0,s.jsxs)(n.h4,{id:"字符串用法",children:["字符串用法",(0,s.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#字符串用法",children:"#"})]}),"\n",(0,s.jsxs)(n.p,{children:["当 ",(0,s.jsx)(n.code,{children:"meta"})," 对象的 ",(0,s.jsx)(n.code,{children:"value"})," 为字符串时，会自动将对象的 ",(0,s.jsx)(n.code,{children:"key"})," 映射为 ",(0,s.jsx)(n.code,{children:"name"}),"，",(0,s.jsx)(n.code,{children:"value"})," 映射为 ",(0,s.jsx)(n.code,{children:"content"}),"。"]}),"\n",(0,s.jsxs)(n.p,{children:["比如设置 ",(0,s.jsx)(n.code,{children:"description"}),"："]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-js",children:"export default {\n  html: {\n    meta: {\n      description: 'a description of the page',\n    },\n  },\n};\n"})}),"\n",(0,s.jsxs)(n.p,{children:["最终在 HTML 中生成的 ",(0,s.jsx)(n.code,{children:"meta"})," 标签为："]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-html",children:'<meta name="description" content="a description of the page" />\n'})}),"\n",(0,s.jsxs)(n.h4,{id:"对象用法",children:["对象用法",(0,s.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#对象用法",children:"#"})]}),"\n",(0,s.jsxs)(n.p,{children:["当 ",(0,s.jsx)(n.code,{children:"meta"})," 对象的 ",(0,s.jsx)(n.code,{children:"value"})," 为对象时，会将该对象的 ",(0,s.jsx)(n.code,{children:"key: value"})," 映射为 ",(0,s.jsx)(n.code,{children:"meta"})," 标签的属性。"]}),"\n",(0,s.jsxs)(n.p,{children:["这种情况下默认不会设置 ",(0,s.jsx)(n.code,{children:"name"})," 和 ",(0,s.jsx)(n.code,{children:"content"})," 属性。"]}),"\n",(0,s.jsxs)(n.p,{children:["比如设置 ",(0,s.jsx)(n.code,{children:"http-equiv"}),"："]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-js",children:"export default {\n  html: {\n    meta: {\n      'http-equiv': {\n        'http-equiv': 'x-ua-compatible',\n        content: 'ie=edge',\n      },\n    },\n  },\n};\n"})}),"\n",(0,s.jsxs)(n.p,{children:["最终在 HTML 中生成的 ",(0,s.jsx)(n.code,{children:"meta"})," 标签为："]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-html",children:'<meta http-equiv="x-ua-compatible" content="ie=edge" />\n'})}),"\n",(0,s.jsxs)(n.h3,{id:"移除默认值",children:["移除默认值",(0,s.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#移除默认值",children:"#"})]}),"\n",(0,s.jsxs)(n.p,{children:["将 ",(0,s.jsx)(n.code,{children:"meta"})," 对象的 ",(0,s.jsx)(n.code,{children:"value"})," 设置为 ",(0,s.jsx)(n.code,{children:"false"}),"，则表示不生成对应的 meta 标签。"]}),"\n",(0,s.jsxs)(n.p,{children:["比如移除框架预设的 ",(0,s.jsx)(n.code,{children:"imagemode"}),"："]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-ts",children:"export default {\n  html: {\n    meta: {\n      imagemode: false,\n    },\n  },\n};\n"})})]})}var i=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=Object.assign({},(0,c.useMDXComponents)(),e.components).wrapper;return n?(0,s.jsx)(n,Object.assign({},e,{children:(0,s.jsx)(d,e)})):d(e)}},97313:function(e,n,r){"use strict";Object.defineProperty(n,"__esModule",{value:!0});!function(e,n){for(var r in n)Object.defineProperty(e,r,{enumerable:!0,get:n[r]})}(n,{frontmatter:function(){return i},title:function(){return t},toc:function(){return a},default:function(){return h}});var s=r("9880"),c=r("23169"),d=r.ir(r("876")),i={sidebar_label:"meta"},t="html.meta",a=[];function l(e){var n=Object.assign({h1:"h1",a:"a",div:"div",p:"p"},(0,c.useMDXComponents)(),e.components);return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)(n.h1,{id:"htmlmeta",children:["html.meta",(0,s.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#htmlmeta",children:"#"})]}),"\n",(0,s.jsxs)(n.div,{className:"modern-directive tip",children:[(0,s.jsx)(n.div,{className:"modern-directive-title",children:"TIP"}),(0,s.jsx)(n.div,{className:"modern-directive-content",children:(0,s.jsxs)(n.p,{children:["该配置由 Modern.js Builder 提供，更多信息可参考 ",(0,s.jsx)(n.a,{href:"https://modernjs.dev/builder/api/config-html.html#htmlmeta",target:"_blank",rel:"noopener noreferrer",children:"html.meta"}),"。\n"]})})]}),"\n","\n",(0,s.jsx)(d.default,{})]})}var h=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=Object.assign({},(0,c.useMDXComponents)(),e.components).wrapper;return n?(0,s.jsx)(n,Object.assign({},e,{children:(0,s.jsx)(l,e)})):l(e)}}}]);