(self.webpackChunkwebpack=self.webpackChunkwebpack||[]).push([["split~docs_zh_api_config-output_mdx10"],{6378:function(e,s,n){"use strict";Object.defineProperty(s,"__esModule",{value:!0});!function(e,s){for(var n in s)Object.defineProperty(e,n,{enumerable:!0,get:s[n]})}(s,{frontmatter:function(){return i},title:function(){return t},toc:function(){return l},default:function(){return r}});var c=n("12151"),a=n("21447");let i={},t="",l=[{text:"示例",depth:3,id:"示例"}];function d(e){let s=Object.assign({ul:"ul",li:"li",strong:"strong",code:"code",p:"p",h3:"h3",a:"a",div:"div",button:"button",pre:"pre"},(0,a.useMDXComponents)(),e.components);return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsxs)(s.ul,{children:["\n",(0,c.jsxs)(s.li,{children:[(0,c.jsx)(s.strong,{children:"类型："})," ",(0,c.jsx)(s.code,{children:"boolean"})]}),"\n",(0,c.jsxs)(s.li,{children:[(0,c.jsx)(s.strong,{children:"默认值："})," ",(0,c.jsx)(s.code,{children:"false"})]}),"\n"]}),"\n",(0,c.jsx)(s.p,{children:"移除生产环境的构建产物名称中的 hash 值。"}),"\n",(0,c.jsxs)(s.p,{children:["在生产环境构建后，会自动在文件名中间添加 hash 值，如果不需要添加，可以通过 ",(0,c.jsx)(s.code,{children:"output.disableFilenameHash"})," 配置来禁用该行为。"]}),"\n",(0,c.jsxs)(s.h3,{id:"示例",children:["示例",(0,c.jsx)(s.a,{className:"header-anchor","aria-hidden":"true",href:"#示例",children:"#"})]}),"\n",(0,c.jsx)(s.p,{children:"默认情况下，构建后的产物名称为："}),"\n",(0,c.jsx)(s.div,{className:"language-",children:(0,c.jsxs)(s.div,{className:"modern-code-content",children:[(0,c.jsx)(s.button,{className:"copy"}),(0,c.jsx)(s.pre,{className:"code",children:(0,c.jsx)(s.code,{className:"language-bash",children:"File                                     Size         Gzipped\ndist/static/css/187.7879e19d.css         126.99 KB    9.17 KB\ndist/static/js/main.18a568e5.js          2.24 KB      922 B\n"})})]})}),"\n",(0,c.jsxs)(s.p,{children:["添加 ",(0,c.jsx)(s.code,{children:"output.disableFilenameHash"})," 配置："]}),"\n",(0,c.jsx)(s.div,{className:"language-",children:(0,c.jsxs)(s.div,{className:"modern-code-content",children:[(0,c.jsx)(s.button,{className:"copy"}),(0,c.jsx)(s.pre,{className:"code",children:(0,c.jsx)(s.code,{className:"language-js",children:"export default {\n  output: {\n    disableFilenameHash: true,\n  },\n};\n"})})]})}),"\n",(0,c.jsx)(s.p,{children:"重新构建，产物的名称变为："}),"\n",(0,c.jsx)(s.div,{className:"language-",children:(0,c.jsxs)(s.div,{className:"modern-code-content",children:[(0,c.jsx)(s.button,{className:"copy"}),(0,c.jsx)(s.pre,{className:"code",children:(0,c.jsx)(s.code,{className:"language-bash",children:"File                            Size         Gzipped\ndist/static/css/187.css         126.99 KB    9.17 KB\ndist/static/js/main.js          2.24 KB      922 B\n"})})]})})]})}var r=function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},{wrapper:s}=Object.assign({},(0,a.useMDXComponents)(),e.components);return s?(0,c.jsx)(s,Object.assign({},e,{children:(0,c.jsx)(d,e)})):d(e)}}}]);