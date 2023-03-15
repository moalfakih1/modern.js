(self.webpackChunkwebpack=self.webpackChunkwebpack||[]).push([["docs_zh_guides_get-started_quick-start_mdx~docs_zh_tutorials_first-app_c01-start_mdx"],{72835:function(s,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),Object.defineProperty(e,"default",{enumerable:!0,get:function(){return c}});var l=n("12151");function r(s){let e=Object.assign({p:"p",a:"a",strong:"strong",div:"div",button:"button",pre:"pre",code:"code",span:"span"},s.components);return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsxs)(e.p,{children:["在开始使用前，你需要安装 ",(0,l.jsx)(e.a,{href:"https://nodejs.org/",target:"_blank",rel:"nofollow",children:"Node.js"}),"，并保证 Node.js 版本不低于 14.17.6，",(0,l.jsx)(e.strong,{children:"我们推荐使用 Node.js 16 的 LTS 版本"}),"。"]}),"\n",(0,l.jsx)(e.p,{children:"你可以通过以下命令检查当前使用的 Node.js 版本："}),"\n",(0,l.jsxs)(e.div,{className:"language-bash",children:[(0,l.jsx)(e.div,{className:""}),(0,l.jsxs)(e.div,{className:"modern-code-content",children:[(0,l.jsx)(e.button,{className:"copy"}),(0,l.jsx)(e.pre,{className:"shiki",style:{backgroundColor:"var(--shiki-color-background)"},children:(0,l.jsxs)(e.code,{children:[(0,l.jsx)(e.span,{className:"line",children:(0,l.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"node -v"})}),"\n",(0,l.jsx)(e.span,{className:"line",children:(0,l.jsx)(e.span,{style:{color:"var(--shiki-token-comment)"},children:"# v16.19.1"})}),"\n",(0,l.jsx)(e.span,{className:"line"})]})})]})]}),"\n",(0,l.jsxs)(e.p,{children:["如果你当前的环境中尚未安装 Node.js，或是安装的版本低于 14.17.6，可以通过 ",(0,l.jsx)(e.a,{href:"https://github.com/nvm-sh/nvm",target:"_blank",rel:"nofollow",children:"nvm"})," 或 ",(0,l.jsx)(e.a,{href:"https://github.com/Schniz/fnm",target:"_blank",rel:"nofollow",children:"fnm"})," 安装需要的版本。"]}),"\n",(0,l.jsx)(e.p,{children:"下面是通过 nvm 安装 Node.js 16 LTS 版本的例子："}),"\n",(0,l.jsxs)(e.div,{className:"language-bash",children:[(0,l.jsx)(e.div,{className:""}),(0,l.jsxs)(e.div,{className:"modern-code-content",children:[(0,l.jsx)(e.button,{className:"copy"}),(0,l.jsx)(e.pre,{className:"shiki",style:{backgroundColor:"var(--shiki-color-background)"},children:(0,l.jsxs)(e.code,{children:[(0,l.jsx)(e.span,{className:"line",children:(0,l.jsx)(e.span,{style:{color:"var(--shiki-token-comment)"},children:"# 安装 Node.js 16 的长期支持版本"})}),"\n",(0,l.jsx)(e.span,{className:"line",children:(0,l.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"nvm install 16 --lts"})}),"\n",(0,l.jsx)(e.span,{className:"line"}),"\n",(0,l.jsx)(e.span,{className:"line",children:(0,l.jsx)(e.span,{style:{color:"var(--shiki-token-comment)"},children:"# 将刚安装的 Node.js 16 设置为默认版本"})}),"\n",(0,l.jsxs)(e.span,{className:"line",children:[(0,l.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"nvm "}),(0,l.jsx)(e.span,{style:{color:"var(--shiki-token-function)"},children:"alias"}),(0,l.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" default 16"})]}),"\n",(0,l.jsx)(e.span,{className:"line"}),"\n",(0,l.jsx)(e.span,{className:"line",children:(0,l.jsx)(e.span,{style:{color:"var(--shiki-token-comment)"},children:"# 切换到刚安装的 Node.js 16"})}),"\n",(0,l.jsx)(e.span,{className:"line",children:(0,l.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"nvm use 16"})}),"\n",(0,l.jsx)(e.span,{className:"line"})]})})]})]}),"\n",(0,l.jsxs)(e.div,{className:"modern-directive tip",children:[(0,l.jsx)(e.p,{className:"modern-directive-title",children:"nvm 和 fnm"}),(0,l.jsx)(e.div,{className:"modern-directive-content",children:(0,l.jsx)(e.p,{children:"\nnvm 和 fnm 都是 Node.js 版本管理工具。相对来说，nvm 较为成熟和稳定，而 fnm 是使用 Rust 实现的，比 nvm 提供了更好的性能。"})})]}),"\n",(0,l.jsxs)(e.p,{children:["此外，在安装 nvm 或 fnm 后，然后只要仓库根目录下有内容为 ",(0,l.jsx)(e.code,{children:"lts/gallium"})," 的 ",(0,l.jsx)(e.code,{children:".nvmrc"})," 文件，进入这个仓库时就会自动安装或切换到正确的 Node.js 版本。"]})]})}var c=function(){let s=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},{wrapper:e}=s.components||{};return e?(0,l.jsx)(e,Object.assign({},s,{children:(0,l.jsx)(r,s)})):r(s)}},72700:function(s,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),Object.defineProperty(e,"default",{enumerable:!0,get:function(){return c}});var l=n("12151");function r(s){let e=Object.assign({p:"p",code:"code",div:"div",button:"button",pre:"pre",span:"span"},s.components);return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsxs)(e.p,{children:["在项目中执行 ",(0,l.jsx)(e.code,{children:"pnpm run dev"})," 即可启动项目："]}),"\n",(0,l.jsxs)(e.div,{className:"language-bash",children:[(0,l.jsx)(e.div,{className:""}),(0,l.jsxs)(e.div,{className:"modern-code-content",children:[(0,l.jsx)(e.button,{className:"copy"}),(0,l.jsx)(e.pre,{className:"shiki",style:{backgroundColor:"var(--shiki-color-background)"},children:(0,l.jsxs)(e.code,{children:[(0,l.jsx)(e.span,{className:"line",children:(0,l.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"$ pnpm run dev"})}),"\n",(0,l.jsx)(e.span,{className:"line"}),"\n",(0,l.jsxs)(e.span,{className:"line",children:[(0,l.jsx)(e.span,{style:{color:"var(--shiki-token-keyword)"},children:">"}),(0,l.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" modern dev"})]}),"\n",(0,l.jsx)(e.span,{className:"line"}),"\n",(0,l.jsx)(e.span,{className:"line",children:(0,l.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"info    Starting dev server..."})}),"\n",(0,l.jsx)(e.span,{className:"line",children:(0,l.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"info    App running at:"})}),"\n",(0,l.jsx)(e.span,{className:"line"}),"\n",(0,l.jsxs)(e.span,{className:"line",children:[(0,l.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"  "}),(0,l.jsx)(e.span,{style:{color:"var(--shiki-token-keyword)"},children:">"}),(0,l.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" Local:    http://localhost:8080/"})]}),"\n",(0,l.jsxs)(e.span,{className:"line",children:[(0,l.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"  "}),(0,l.jsx)(e.span,{style:{color:"var(--shiki-token-keyword)"},children:">"}),(0,l.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" Network:  http://192.168.0.1:8080/"})]}),"\n",(0,l.jsx)(e.span,{className:"line"}),"\n",(0,l.jsxs)(e.span,{className:"line",children:[(0,l.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" Client ✔ "}),(0,l.jsx)(e.span,{style:{color:"var(--shiki-token-keyword)"},children:"done"}),(0,l.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,l.jsx)(e.span,{style:{color:"var(--shiki-token-keyword)"},children:"in"}),(0,l.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" 76.10ms"})]}),"\n",(0,l.jsx)(e.span,{className:"line"})]})})]})]}),"\n",(0,l.jsxs)(e.p,{children:["在浏览器中打开 ",(0,l.jsx)(e.code,{children:"http://localhost:8000/"}),"，可以看到页面内容。"]})]})}var c=function(){let s=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},{wrapper:e}=s.components||{};return e?(0,l.jsx)(e,Object.assign({},s,{children:(0,l.jsx)(r,s)})):r(s)}},48934:function(s,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),Object.defineProperty(e,"default",{enumerable:!0,get:function(){return c}});var l=n("12151");function r(s){let e=Object.assign({p:"p",div:"div",button:"button",pre:"pre",code:"code",span:"span"},s.components);return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(e.p,{children:"Modern.js 生成器会提供一个可交互的问答界面，根据结果初始化项目，按照默认的选择进行初始化："}),"\n",(0,l.jsxs)(e.div,{className:"language-bash",children:[(0,l.jsx)(e.div,{className:""}),(0,l.jsxs)(e.div,{className:"modern-code-content",children:[(0,l.jsx)(e.button,{className:"copy"}),(0,l.jsx)(e.pre,{className:"shiki",style:{backgroundColor:"var(--shiki-color-background)"},children:(0,l.jsxs)(e.code,{children:[(0,l.jsxs)(e.span,{className:"line",children:[(0,l.jsx)(e.span,{style:{color:"var(--shiki-token-keyword)"},children:"?"}),(0,l.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" 请选择你想创建的工程类型：Web 应用"})]}),"\n",(0,l.jsxs)(e.span,{className:"line",children:[(0,l.jsx)(e.span,{style:{color:"var(--shiki-token-keyword)"},children:"?"}),(0,l.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" 请选择开发语言：TS"})]}),"\n",(0,l.jsxs)(e.span,{className:"line",children:[(0,l.jsx)(e.span,{style:{color:"var(--shiki-token-keyword)"},children:"?"}),(0,l.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" 请选择包管理工具：pnpm"})]}),"\n",(0,l.jsx)(e.span,{className:"line"})]})})]})]}),"\n",(0,l.jsx)(e.p,{children:"在生成项目后，Modern.js 会自动安装依赖、创建 git 仓库。"}),"\n",(0,l.jsxs)(e.div,{className:"language-bash",children:[(0,l.jsx)(e.div,{className:""}),(0,l.jsxs)(e.div,{className:"modern-code-content",children:[(0,l.jsx)(e.button,{className:"copy"}),(0,l.jsx)(e.pre,{className:"shiki",style:{backgroundColor:"var(--shiki-color-background)"},children:(0,l.jsxs)(e.code,{children:[(0,l.jsx)(e.span,{className:"line",children:(0,l.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"[INFO] 依赖自动安装成功"})}),"\n",(0,l.jsx)(e.span,{className:"line",children:(0,l.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"[INFO] git 仓库初始化成功"})}),"\n",(0,l.jsx)(e.span,{className:"line",children:(0,l.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"[INFO] 创建成功！"})}),"\n",(0,l.jsx)(e.span,{className:"line",children:(0,l.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"可在新项目的目录下运行以下命令："})}),"\n",(0,l.jsxs)(e.span,{className:"line",children:[(0,l.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"pnpm run dev          "}),(0,l.jsx)(e.span,{style:{color:"var(--shiki-token-comment)"},children:"# 按开发环境的要求，运行和调试项目"})]}),"\n",(0,l.jsxs)(e.span,{className:"line",children:[(0,l.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"pnpm run build        "}),(0,l.jsx)(e.span,{style:{color:"var(--shiki-token-comment)"},children:"# 按生产环境的要求，构建项目"})]}),"\n",(0,l.jsxs)(e.span,{className:"line",children:[(0,l.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"pnpm run serve        "}),(0,l.jsx)(e.span,{style:{color:"var(--shiki-token-comment)"},children:"# 按生产环境的要求，运行项目"})]}),"\n",(0,l.jsxs)(e.span,{className:"line",children:[(0,l.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"pnpm run lint         "}),(0,l.jsx)(e.span,{style:{color:"var(--shiki-token-comment)"},children:"# 检查和修复所有代码"})]}),"\n",(0,l.jsxs)(e.span,{className:"line",children:[(0,l.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"pnpm run new          "}),(0,l.jsx)(e.span,{style:{color:"var(--shiki-token-comment)"},children:"# 继续创建更多项目要素，比如应用入口"})]}),"\n",(0,l.jsx)(e.span,{className:"line"})]})})]})]}),"\n",(0,l.jsxs)(e.div,{className:"modern-directive note",children:[(0,l.jsx)(e.p,{className:"modern-directive-title",children:"NOTE"}),(0,l.jsx)(e.div,{className:"modern-directive-content",children:(0,l.jsx)(e.p,{children:"\nModern.js 生成器除了在项目初始化时工作外，也能在后续研发中生成项目各种粒度的模块，并非一用即抛开。"})})]}),"\n",(0,l.jsx)(e.p,{children:"现在，项目结构如下："}),"\n",(0,l.jsxs)(e.div,{className:"language-text",children:[(0,l.jsx)(e.div,{className:""}),(0,l.jsxs)(e.div,{className:"modern-code-content",children:[(0,l.jsx)(e.button,{className:"copy"}),(0,l.jsx)(e.pre,{children:(0,l.jsx)(e.code,{children:".\n├── node_modules\n├── src\n│   ├── modern-app-env.d.ts\n│   └── routes\n│       ├── index.css\n│       ├── layout.tsx\n│       └── page.tsx\n├── modern.config.ts\n├── package.json\n├── pnpm-lock.yaml\n├── README.md\n└── tsconfig.json\n"})})]})]})]})}var c=function(){let s=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},{wrapper:e}=s.components||{};return e?(0,l.jsx)(e,Object.assign({},s,{children:(0,l.jsx)(r,s)})):r(s)}},84523:function(s,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),Object.defineProperty(e,"default",{enumerable:!0,get:function(){return a}});var l=n("12151"),r=n.ir(n("72835"));function c(s){let e=Object.assign({h3:"h3",a:"a",p:"p",div:"div",button:"button",pre:"pre",code:"code",span:"span"},s.components);return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsxs)(e.h3,{id:"nodejs",children:[(0,l.jsx)(e.a,{className:"header-anchor","aria-hidden":"true",href:"#nodejs",children:"#"}),"Node.js"]}),"\n","\n",(0,l.jsx)(r.default,{}),"\n",(0,l.jsxs)(e.h3,{id:"pnpm",children:[(0,l.jsx)(e.a,{className:"header-anchor","aria-hidden":"true",href:"#pnpm",children:"#"}),"pnpm"]}),"\n",(0,l.jsxs)(e.p,{children:["推荐使用 ",(0,l.jsx)(e.a,{href:"https://pnpm.io/installation",target:"_blank",rel:"nofollow",children:"pnpm"})," 来管理依赖："]}),"\n",(0,l.jsxs)(e.div,{className:"language-bash",children:[(0,l.jsx)(e.div,{className:""}),(0,l.jsxs)(e.div,{className:"modern-code-content",children:[(0,l.jsx)(e.button,{className:"copy"}),(0,l.jsx)(e.pre,{className:"shiki",style:{backgroundColor:"var(--shiki-color-background)"},children:(0,l.jsxs)(e.code,{children:[(0,l.jsx)(e.span,{className:"line",children:(0,l.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"npm install -g pnpm@7"})}),"\n",(0,l.jsx)(e.span,{className:"line"})]})})]})]}),"\n",(0,l.jsxs)(e.div,{className:"modern-directive note",children:[(0,l.jsx)(e.p,{className:"modern-directive-title",children:"NOTE"}),(0,l.jsx)(e.div,{className:"modern-directive-content",children:(0,l.jsxs)(e.p,{children:["\nModern.js 同样支持使用 ",(0,l.jsx)(e.code,{children:"yarn"}),"、",(0,l.jsx)(e.code,{children:"npm"})," 进行依赖管理。"]})})]})]})}var a=function(){let s=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},{wrapper:e}=s.components||{};return e?(0,l.jsx)(e,Object.assign({},s,{children:(0,l.jsx)(c,s)})):c(s)}}}]);