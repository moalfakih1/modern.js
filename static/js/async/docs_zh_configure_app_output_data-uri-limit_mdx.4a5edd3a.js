(self.webpackChunkwebpack=self.webpackChunkwebpack||[]).push([["docs_zh_configure_app_output_data-uri-limit_mdx"],{66672:function(e,n,i){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),Object.defineProperty(n,"default",{enumerable:!0,get:function(){return a}});var s=i("12151"),t=i("21447");function r(e){let n=Object.assign({ul:"ul",li:"li",strong:"strong",div:"div",button:"button",pre:"pre",code:"code",p:"p",h3:"h3",a:"a"},(0,t.useMDXComponents)(),e.components);return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.strong,{children:"类型"})}),"\n"]}),"\n",(0,s.jsx)(n.div,{className:"language-",children:(0,s.jsxs)(n.div,{className:"modern-code-content",children:[(0,s.jsx)(n.button,{className:"copy"}),(0,s.jsx)(n.pre,{className:"code",children:(0,s.jsx)(n.code,{className:"language-ts",children:"type DataUriLimitConfig = {\n  svg?: number;\n  font?: number;\n  image?: number;\n  media?: number;\n};\n"})})]})}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.strong,{children:"默认值"})}),"\n"]}),"\n",(0,s.jsx)(n.div,{className:"language-",children:(0,s.jsxs)(n.div,{className:"modern-code-content",children:[(0,s.jsx)(n.button,{className:"copy"}),(0,s.jsx)(n.pre,{className:"code",children:(0,s.jsx)(n.code,{className:"language-js",children:"const defaultDatUriLimit = {\n  svg: 10000,\n  font: 10000,\n  image: 10000,\n  media: 10000,\n};\n"})})]})}),"\n",(0,s.jsx)(n.p,{children:"设置图片、字体、媒体等静态资源被自动内联为 base64 的体积阈值。"}),"\n",(0,s.jsx)(n.p,{children:"默认情况下，体积小于 10KB 的图片、字体、媒体等文件，会自动经过 Base64 编码，内联到页面中，不再会发送独立的 HTTP 请求。"}),"\n",(0,s.jsxs)(n.p,{children:["你可以通过修改 ",(0,s.jsx)(n.code,{children:"dataUriLimit"})," 参数来调整这个阈值。"]}),"\n",(0,s.jsx)(n.p,{children:"其中："}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"svg"}),"：表示 SVG 图片的体积阈值。"]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"font"}),"：表示字体文件的体积阈值。"]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"image"}),"：表示非 SVG 图片的体积阈值。"]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"media"}),"：表示视频等媒体资源的体积阈值。"]}),"\n"]}),"\n",(0,s.jsxs)(n.h3,{id:"示例",children:["示例",(0,s.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#示例",children:"#"})]}),"\n",(0,s.jsx)(n.p,{children:"修改图片资源的阈值为 5000 Bytes，设置视频资源不内联："}),"\n",(0,s.jsx)(n.div,{className:"language-",children:(0,s.jsxs)(n.div,{className:"modern-code-content",children:[(0,s.jsx)(n.button,{className:"copy"}),(0,s.jsx)(n.pre,{className:"code",children:(0,s.jsx)(n.code,{className:"language-js",children:"export default {\n  output: {\n    dataUriLimit: {\n      image: 5000,\n      media: 0,\n    },\n  },\n};\n"})})]})})]})}var a=function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},{wrapper:n}=Object.assign({},(0,t.useMDXComponents)(),e.components);return n?(0,s.jsx)(n,Object.assign({},e,{children:(0,s.jsx)(r,e)})):r(e)}},2430:function(e,n,i){"use strict";Object.defineProperty(n,"__esModule",{value:!0});!function(e,n){for(var i in n)Object.defineProperty(e,i,{enumerable:!0,get:n[i]})}(n,{frontmatter:function(){return a},title:function(){return c},toc:function(){return d},default:function(){return o}});var s=i("12151"),t=i("21447"),r=i.ir(i("66672"));let a={sidebar_label:"dataUriLimit"},c="output.dataUriLimit",d=[];function l(e){let n=Object.assign({h1:"h1",a:"a",div:"div"},(0,t.useMDXComponents)(),e.components);return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)(n.h1,{id:"output.dataurilimit",children:["output.dataUriLimit",(0,s.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#output.dataurilimit",children:"#"})]}),"\n",(0,s.jsxs)(n.div,{className:"modern-directive tip",children:[(0,s.jsx)(n.div,{className:"modern-directive-title",children:"TIP"}),(0,s.jsxs)(n.div,{className:"modern-directive-content",children:["该配置由 Modern.js Builder 提供，更多信息可参考 ",(0,s.jsx)(n.a,{href:"https://modernjs.dev/builder/api/config-output.html#outputdataurilimit",target:"_blank",rel:"noopener noreferrer",children:"output.dataUriLimit"}),"。\n"]})]}),"\n","\n",(0,s.jsx)(r.default,{})]})}var o=function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},{wrapper:n}=Object.assign({},(0,t.useMDXComponents)(),e.components);return n?(0,s.jsx)(n,Object.assign({},e,{children:(0,s.jsx)(l,e)})):l(e)}}}]);