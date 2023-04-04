(self.webpackChunkwebpack=self.webpackChunkwebpack||[]).push([["split~docs_zh_api_config-output_mdx9"],{34800:function(n,e,s){"use strict";Object.defineProperty(e,"__esModule",{value:!0});!function(n,e){for(var s in e)Object.defineProperty(n,s,{enumerable:!0,get:e[s]})}(e,{frontmatter:function(){return a},title:function(){return i},toc:function(){return r},default:function(){return d}});var c=s("12151"),t=s("21447");let a={},i="",r=[{text:"示例",depth:3,id:"示例"}];function l(n){let e=Object.assign({ul:"ul",li:"li",strong:"strong",div:"div",button:"button",pre:"pre",code:"code",p:"p",h3:"h3",a:"a"},(0,t.useMDXComponents)(),n.components);return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsxs)(e.ul,{children:["\n",(0,c.jsx)(e.li,{children:(0,c.jsx)(e.strong,{children:"类型"})}),"\n"]}),"\n",(0,c.jsx)(e.div,{className:"language-",children:(0,c.jsxs)(e.div,{className:"modern-code-content",children:[(0,c.jsx)(e.button,{className:"copy"}),(0,c.jsx)(e.pre,{className:"code",children:(0,c.jsx)(e.code,{className:"language-ts",children:"type FilenameConfig = {\n  js?: string;\n  css?: string;\n  svg?: string;\n  font?: string;\n  image?: string;\n  media?: string;\n};\n"})})]})}),"\n",(0,c.jsxs)(e.ul,{children:["\n",(0,c.jsx)(e.li,{children:(0,c.jsx)(e.strong,{children:"默认值"})}),"\n"]}),"\n",(0,c.jsx)(e.div,{className:"language-",children:(0,c.jsxs)(e.div,{className:"modern-code-content",children:[(0,c.jsx)(e.button,{className:"copy"}),(0,c.jsx)(e.pre,{className:"code",children:(0,c.jsx)(e.code,{className:"language-js",children:"// 开发环境\nconst devDefaultFilename = {\n  js: '[name].js',\n  css: '[name].css',\n  svg: '[name].[contenthash:8].svg',\n  font: '[name].[contenthash:8][ext]',\n  image: '[name].[contenthash:8][ext]',\n  media: '[name].[contenthash:8][ext]',\n};\n\n// 生产环境\nconst prodDefaultFilename = {\n  js: '[name].[contenthash:8].js',\n  css: '[name].[contenthash:8].css',\n  svg: '[name].[contenthash:8].svg',\n  font: '[name].[contenthash:8][ext]',\n  image: '[name].[contenthash:8][ext]',\n  media: '[name].[contenthash:8][ext]',\n};\n"})})]})}),"\n",(0,c.jsx)(e.p,{children:"设置构建产物的名称。"}),"\n",(0,c.jsxs)(e.p,{children:["在生产环境构建后，会自动在文件名中间添加 hash 值，如果不需要添加，可以通过 ",(0,c.jsx)(e.code,{children:"output.disableFilenameHash"})," 配置来禁用该行为。"]}),"\n",(0,c.jsx)(e.p,{children:"其中："}),"\n",(0,c.jsxs)(e.ul,{children:["\n",(0,c.jsxs)(e.li,{children:[(0,c.jsx)(e.code,{children:"js"}),"：表示 JavaScript 文件的名称。"]}),"\n",(0,c.jsxs)(e.li,{children:[(0,c.jsx)(e.code,{children:"css"}),"：表示 CSS 样式文件的名称。"]}),"\n",(0,c.jsxs)(e.li,{children:[(0,c.jsx)(e.code,{children:"svg"}),"：表示 SVG 图片的名称。"]}),"\n",(0,c.jsxs)(e.li,{children:[(0,c.jsx)(e.code,{children:"font"}),"：表示字体文件的名称。"]}),"\n",(0,c.jsxs)(e.li,{children:[(0,c.jsx)(e.code,{children:"image"}),"：表示非 SVG 图片的名称。"]}),"\n",(0,c.jsxs)(e.li,{children:[(0,c.jsx)(e.code,{children:"media"}),"：表示视频等媒体资源的名称。"]}),"\n"]}),"\n",(0,c.jsxs)(e.h3,{id:"示例",children:["示例",(0,c.jsx)(e.a,{className:"header-anchor","aria-hidden":"true",href:"#示例",children:"#"})]}),"\n",(0,c.jsxs)(e.p,{children:["修改 JavaScript 文件的名称为 ",(0,c.jsx)(e.code,{children:"[name]_script.js"}),"："]}),"\n",(0,c.jsx)(e.div,{className:"language-",children:(0,c.jsxs)(e.div,{className:"modern-code-content",children:[(0,c.jsx)(e.button,{className:"copy"}),(0,c.jsx)(e.pre,{className:"code",children:(0,c.jsx)(e.code,{className:"language-js",children:"export default {\n  output: {\n    filename: {\n      js:\n        process.env.NODE_ENV === 'production'\n          ? '[name]_script.[contenthash:8].js'\n          : '[name]_script.js',\n    },\n  },\n};\n"})})]})})]})}var d=function(){let n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},{wrapper:e}=Object.assign({},(0,t.useMDXComponents)(),n.components);return e?(0,c.jsx)(e,Object.assign({},n,{children:(0,c.jsx)(l,n)})):l(n)}}}]);