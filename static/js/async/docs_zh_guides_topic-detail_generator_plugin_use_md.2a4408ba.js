(self.webpackChunk_modern_js_main_doc=self.webpackChunk_modern_js_main_doc||[]).push([["docs_zh_guides_topic-detail_generator_plugin_use_md"],{69327:function(e,n,r){"use strict";Object.defineProperty(n,"__esModule",{value:!0});!function(e,n){for(var r in n)Object.defineProperty(e,r,{enumerable:!0,get:n[r]})}(n,{frontmatter:function(){return i},title:function(){return d},toc:function(){return c},default:function(){return h}});var s=r("9880"),a=r("23169"),i={sidebar_position:3},d="使用",c=[{text:"绝对路径",depth:2,id:"绝对路径"},{text:"相对路径",depth:2,id:"相对路径"},{text:"npm 包",depth:2,id:"npm-包"}];function t(e){var n=Object.assign({h1:"h1",a:"a",p:"p",code:"code",h2:"h2",pre:"pre"},(0,a.useMDXComponents)(),e.components);return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)(n.h1,{id:"使用",children:["使用",(0,s.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#使用",children:"#"})]}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.code,{children:"@modern-js/create"})," 提供了 ",(0,s.jsx)(n.code,{children:"--plugin"})," 参数用于运行生成器插件项目。"]}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.code,{children:"--plugin"})," 支持三种格式："]}),"\n",(0,s.jsxs)(n.h2,{id:"绝对路径",children:["绝对路径",(0,s.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#绝对路径",children:"#"})]}),"\n",(0,s.jsxs)(n.p,{children:["适用于本地开发调试，开发完成后，在生成器插件执行 ",(0,s.jsx)(n.code,{children:"npm run build"})," 构建项目，然后使用下面命令即可进行测试。"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"npx @modern-js/create@latest --plugin <pluginPath>\n"})}),"\n",(0,s.jsxs)(n.h2,{id:"相对路径",children:["相对路径",(0,s.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#相对路径",children:"#"})]}),"\n",(0,s.jsx)(n.p,{children:"适用于本地开发调试或者生成器插件项目和目标创建项目在同一个 Monorepo，无需发布 NPM 包，构建项目后，执行下面命令即可。"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"npx @modern-js/create@latest --plugin file:../<pluginPath>\n"})}),"\n",(0,s.jsxs)(n.h2,{id:"npm-包",children:["npm 包",(0,s.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#npm-包",children:"#"})]}),"\n",(0,s.jsx)(n.p,{children:"适用于生成器插件发布于 npm 上，共享生成器插件场景。"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"npx @modern-js/create@latest --plugin <pluginPackage>\n"})})]})}var h=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=Object.assign({},(0,a.useMDXComponents)(),e.components).wrapper;return n?(0,s.jsx)(n,Object.assign({},e,{children:(0,s.jsx)(t,e)})):t(e)}}}]);