(self.webpackChunk_modern_js_main_doc=self.webpackChunk_modern_js_main_doc||[]).push([["docs_zh_guides_troubleshooting_dependencies_mdx"],{26493:function(e,n,r){"use strict";Object.defineProperty(n,"__esModule",{value:!0});!function(e,n){for(var r in n)Object.defineProperty(e,r,{enumerable:!0,get:n[r]})}(n,{frontmatter:function(){return c},title:function(){return i},toc:function(){return t},default:function(){return o}});var s=r("9880"),d=r("23169"),c={sidebar_position:1},i="依赖安装问题",t=[{text:"如何查看项目里某个依赖实际安装的版本？",depth:3,id:"如何查看项目里某个依赖实际安装的版本？"},{text:'安装依赖时提示 The engine "node" is incompatible？',depth:3,id:'安装依赖时提示-the-engine-"node"-is-incompatible？'},{text:"升级依赖后出现 ReactNode 类型错误？",depth:3,id:"升级依赖后出现-reactnode-类型错误？"},{text:"执行 pnpm install 之后，控制台出现 peer dependencies 相关 warning？",depth:3,id:"执行-pnpm-install-之后，控制台出现-peer-dependencies-相关-warning？"},{text:"Modern.js 框架最低支持的 React 版本是多少？",depth:3,id:"modernjs-框架最低支持的-react-版本是多少？"}];function a(e){var n=Object.assign({h1:"h1",a:"a",h3:"h3",p:"p",code:"code",strong:"strong",pre:"pre",hr:"hr",ul:"ul",li:"li"},(0,d.useMDXComponents)(),e.components);return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)(n.h1,{id:"依赖安装问题",children:["依赖安装问题",(0,s.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#依赖安装问题",children:"#"})]}),"\n",(0,s.jsxs)(n.h3,{id:"如何查看项目里某个依赖实际安装的版本？",children:["如何查看项目里某个依赖实际安装的版本？",(0,s.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#如何查看项目里某个依赖实际安装的版本？",children:"#"})]}),"\n",(0,s.jsxs)(n.p,{children:["可以使用包管理器自带的 ",(0,s.jsx)(n.code,{children:"ls"})," 命令来查看项目里依赖的版本。"]}),"\n",(0,s.jsx)(n.p,{children:"下面是一些基本的示例，详细用法请查看各个包管理器的文档。"}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.strong,{children:"npm / yarn"})}),"\n",(0,s.jsxs)(n.p,{children:["对于使用 npm 或 yarn 的项目，可以使用 ",(0,s.jsx)(n.code,{children:"npm ls"})," 命令。"]}),"\n",(0,s.jsxs)(n.p,{children:["比如执行 ",(0,s.jsx)(n.code,{children:"npm ls @modern-js/core"}),"，可以看到如下结果："]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{children:"project\n└─┬ @modern-js/app-tools@2.0.0\n  └── @modern-js/core@2.0.0\n"})}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.strong,{children:"pnpm"})}),"\n",(0,s.jsxs)(n.p,{children:["对于使用 pnpm 的项目，可以使用 ",(0,s.jsx)(n.code,{children:"pnpm ls"})," 命令。"]}),"\n",(0,s.jsxs)(n.p,{children:["比如执行 ",(0,s.jsx)(n.code,{children:"pnpm ls @modern-js/core --depth Infinity"}),"，可以看到如下结果："]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{children:"devDependencies:\n@modern-js/app-tools 2.0.0\n└── @modern-js/core 2.0.0\n"})}),"\n",(0,s.jsx)(n.hr,{}),"\n",(0,s.jsxs)(n.h3,{id:'安装依赖时提示-the-engine-\\"node\\"-is-incompatible？',children:['安装依赖时提示 The engine "node" is incompatible？',(0,s.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:'#安装依赖时提示-the-engine-\\"node\\"-is-incompatible？',children:"#"})]}),"\n",(0,s.jsx)(n.p,{children:"安装依赖时如果出现以下报错提示，说明当前环境使用的 Node.js 版本过低，需要升级 Node.js 到更高版本。"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:'The engine "node" is incompatible with this module.\n\nExpected version ">=14.17.6". Got "12.20.1"\n'})}),"\n",(0,s.jsxs)(n.p,{children:["使用 Modern.js 时，建议使用 ",(0,s.jsx)(n.a,{href:"https://nodejs.org/download/release/latest-v14.x/",target:"_blank",rel:"noopener noreferrer",children:"Node.js 14.x"})," 或 ",(0,s.jsx)(n.a,{href:"https://nodejs.org/download/release/latest-v16.x/",target:"_blank",rel:"noopener noreferrer",children:"Node.js 16.x"})," 的最新版本。"]}),"\n",(0,s.jsxs)(n.p,{children:["如果当前环境的 Node.js 版本低于上述要求的版本，则可以使用 ",(0,s.jsx)(n.a,{href:"https://github.com/nvm-sh/nvm",target:"_blank",rel:"noopener noreferrer",children:"nvm"})," 或 ",(0,s.jsx)(n.a,{href:"https://github.com/Schniz/fnm",target:"_blank",rel:"noopener noreferrer",children:"fnm"})," 等工具进行版本切换。"]}),"\n",(0,s.jsx)(n.p,{children:"下面是使用 nvm 的示例："}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{children:"# 安装 Node.js v14\nnvm install 14\n\n# 切换到 Node 14\nnvm use 14\n\n# 将 Node 14 设置为默认版本\nnvm default 14\n"})}),"\n",(0,s.jsxs)(n.p,{children:["在本地开发环境推荐使用 ",(0,s.jsx)(n.a,{href:"https://github.com/Schniz/fnm",target:"_blank",rel:"noopener noreferrer",children:"fnm"}),"，它的用法与 nvm 相似，但拥有比 nvm 更好的性能。"]}),"\n",(0,s.jsx)(n.hr,{}),"\n",(0,s.jsxs)(n.h3,{id:"升级依赖后出现-reactnode-类型错误？",children:["升级依赖后出现 ReactNode 类型错误？",(0,s.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#升级依赖后出现-reactnode-类型错误？",children:"#"})]}),"\n",(0,s.jsxs)(n.p,{children:["升级项目的依赖后，如果出现以下类型报错，说明项目中安装了错误的 ",(0,s.jsx)(n.code,{children:"@types/react"})," 版本。"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"The types returned by 'render()' are incompatible between these types.\nType 'React.ReactNode' is not assignable to type 'import(\"/node_modules/@types/react/index\").ReactNode'.\nType '{}' is not assignable to type 'ReactNode'.\n"})}),"\n",(0,s.jsxs)(n.p,{children:["出现这个问题的原因是 React 18 与 React 16/17 中的 ReactNode 类型定义不同，如果项目中出现多个不同 ",(0,s.jsx)(n.code,{children:"@types/react"})," 版本，就会出现 ReactNode 类型冲突，导致以上报错。"]}),"\n",(0,s.jsxs)(n.p,{children:["解决方法为将项目中的 ",(0,s.jsx)(n.code,{children:"@types/react"})," 和 ",(0,s.jsx)(n.code,{children:"@types/react-dom"})," 锁定在统一的版本上，比如 ",(0,s.jsx)(n.code,{children:"v17"}),"。"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-json",children:'{\n  "@types/react": "^17",\n  "@types/react-dom": "^17"\n}\n'})}),"\n",(0,s.jsxs)(n.p,{children:["关于锁定依赖版本的方法，请参考 ",(0,s.jsx)(n.a,{href:"/guides/get-started/upgrade#%E9%94%81%E5%AE%9A%E5%AD%90%E4%BE%9D%E8%B5%96",children:"锁定子依赖"}),"。"]}),"\n",(0,s.jsx)(n.hr,{}),"\n",(0,s.jsxs)(n.h3,{id:"执行-pnpm-install-之后，控制台出现-peer-dependencies-相关-warning？",children:["执行 pnpm install 之后，控制台出现 peer dependencies 相关 warning？",(0,s.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#执行-pnpm-install-之后，控制台出现-peer-dependencies-相关-warning？",children:"#"})]}),"\n",(0,s.jsx)(n.p,{children:"出现该警告的原因是，某些三方 npm 包声明的 peer dependencies 版本范围与 Modern.js 中安装的版本范围不一致。"}),"\n",(0,s.jsx)(n.p,{children:"绝大多数情况下，peer dependencies 的警告不会影响项目运行，不需要额外进行处理，请忽略相关 warning。"}),"\n",(0,s.jsx)(n.hr,{}),"\n",(0,s.jsxs)(n.h3,{id:"modernjs-框架最低支持的-react-版本是多少？",children:["Modern.js 框架最低支持的 React 版本是多少？",(0,s.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#modernjs-框架最低支持的-react-版本是多少？",children:"#"})]}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"Modern.js 框架推荐使用的 React 版本为 >= 18.0.0"}),"，并且不同功能对 React 版本的要求有所不同。"]}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"如果你在使用 React 17，那么部分框架功能将无法使用，比如 Steaming SSR，因为它依赖 React 18 提供的新特性。"}),"\n",(0,s.jsx)(n.li,{children:"如果你仍然在使用 React 16，那么将无法使用 Modern.js 的运行时或服务端能力。你可以考虑使用 Modern.js 的构建模式，即只使用 Modern.js 的构建能力，这种情况是可以继续使用 React 16 的。"}),"\n"]}),"\n",(0,s.jsx)(n.p,{children:"在 Modern.js 未来的 major 版本中，我们会逐步移除对 React 16 和 React 17 的支持。因此，请尽快升级到 React 18 以上版本。"})]})}var o=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=Object.assign({},(0,d.useMDXComponents)(),e.components).wrapper;return n?(0,s.jsx)(n,Object.assign({},e,{children:(0,s.jsx)(a,e)})):a(e)}}}]);