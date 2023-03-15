(self.webpackChunkwebpack=self.webpackChunkwebpack||[]).push([["docs_zh_guides_topic-detail_generator_plugin_api_file_introduce_mdx"],{25240:function(e,s,n){"use strict";Object.defineProperty(s,"__esModule",{value:!0});!function(e,s){for(var n in s)Object.defineProperty(e,n,{enumerable:!0,get:s[n]})}(s,{frontmatter:function(){return i},toc:function(){return l},title:function(){return c},default:function(){return t}});var r=n("12151");let i={sidebar_position:1},l=[{id:"文件类型",text:"文件类型",depth:2}],c="介绍";function o(e){let s=Object.assign({h1:"h1",a:"a",p:"p",code:"code",h2:"h2",ul:"ul",li:"li",div:"div",button:"button",pre:"pre",span:"span"},e.components);return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(s.h1,{id:"介绍",children:[(0,r.jsx)(s.a,{className:"header-anchor","aria-hidden":"true",href:"#介绍",children:"#"}),"介绍"]}),"\n",(0,r.jsxs)(s.p,{children:["文件操作 API 可在 ",(0,r.jsx)(s.code,{children:"onForged"})," 生命周期函数中使用，可对当前项目文件进行增、删、改的操作。"]}),"\n",(0,r.jsx)(s.p,{children:"文件操作 API 相关路径填写项目相对路径即可，生成器插件会自动添加当前项目路径前缀。"}),"\n",(0,r.jsxs)(s.h2,{id:"文件类型",children:[(0,r.jsx)(s.a,{className:"header-anchor","aria-hidden":"true",href:"#文件类型",children:"#"}),"文件类型"]}),"\n",(0,r.jsx)(s.p,{children:"生成器插件将文件类型分为一下几类："}),"\n",(0,r.jsxs)(s.ul,{children:["\n",(0,r.jsxs)(s.li,{children:["\n",(0,r.jsx)(s.p,{children:"文本文件：纯文本内容文件，可使用 handlebars 进行模板处理的文件。"}),"\n"]}),"\n",(0,r.jsxs)(s.li,{children:["\n",(0,r.jsx)(s.p,{children:"二进制文件：图片、音频、视频等文件"}),"\n"]}),"\n"]}),"\n",(0,r.jsxs)(s.div,{className:"modern-directive warning",children:[(0,r.jsx)(s.p,{className:"modern-directive-title",children:"WARNING"}),(0,r.jsx)(s.div,{className:"modern-directive-content",children:(0,r.jsx)(s.p,{children:"\n使用变量的 jsx 或 tsx 文件为二进制文件，其语法与 handlebars 渲染冲突，会造成模板文件创建失败。"})})]}),"\n",(0,r.jsxs)(s.ul,{children:["\n",(0,r.jsxs)(s.li,{children:["\n",(0,r.jsxs)(s.p,{children:["JSON 文件：JSON 格式的文件，例如 ",(0,r.jsx)(s.code,{children:"package.json"}),"、 ",(0,r.jsx)(s.code,{children:"tsconfig.json"}),"。"]}),"\n"]}),"\n",(0,r.jsxs)(s.li,{children:["\n",(0,r.jsxs)(s.p,{children:["文本列表文件：文件由行文本组成的文件，例如 ",(0,r.jsx)(s.code,{children:".gitignore"}),", ",(0,r.jsx)(s.code,{children:".editorconfig"}),", ",(0,r.jsx)(s.code,{children:".npmrc"}),"。"]}),"\n"]}),"\n"]}),"\n",(0,r.jsx)(s.p,{children:"生成器插件的文件操作 API 将是针对这四种文件类型进行操作。"}),"\n",(0,r.jsx)(s.p,{children:"其类型定义为："}),"\n",(0,r.jsxs)(s.div,{className:"language-ts",children:[(0,r.jsx)(s.div,{className:""}),(0,r.jsxs)(s.div,{className:"modern-code-content",children:[(0,r.jsx)(s.button,{className:"copy"}),(0,r.jsx)(s.pre,{className:"shiki",style:{backgroundColor:"var(--shiki-color-background)"},children:(0,r.jsxs)(s.code,{children:[(0,r.jsxs)(s.span,{className:"line",children:[(0,r.jsx)(s.span,{style:{color:"var(--shiki-token-keyword)"},children:"export"}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-token-keyword)"},children:"enum"}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-token-function)"},children:"FileType"}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" {"})]}),"\n",(0,r.jsxs)(s.span,{className:"line",children:[(0,r.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"  Text "}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-token-keyword)"},children:"="}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-token-string-expression)"},children:"'text'"}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-token-punctuation)"},children:","})]}),"\n",(0,r.jsxs)(s.span,{className:"line",children:[(0,r.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"  Binary "}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-token-keyword)"},children:"="}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-token-string-expression)"},children:"'binary'"}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-token-punctuation)"},children:","})]}),"\n",(0,r.jsxs)(s.span,{className:"line",children:[(0,r.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"  Json "}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-token-keyword)"},children:"="}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-token-string-expression)"},children:"'json'"}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-token-punctuation)"},children:","})]}),"\n",(0,r.jsxs)(s.span,{className:"line",children:[(0,r.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"  TextRaw "}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-token-keyword)"},children:"="}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-token-string-expression)"},children:"'textRaw'"}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-token-punctuation)"},children:","})]}),"\n",(0,r.jsx)(s.span,{className:"line",children:(0,r.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"}"})}),"\n",(0,r.jsx)(s.span,{className:"line"})]})})]})]})]})}var t=function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},{wrapper:s}=e.components||{};return s?(0,r.jsx)(s,Object.assign({},e,{children:(0,r.jsx)(o,e)})):o(e)}}}]);