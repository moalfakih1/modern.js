(self.webpackChunkwebpack=self.webpackChunkwebpack||[]).push([["docs_zh_tutorials_first-app_c08-entries_mdx"],{60604:function(s,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});!function(s,e){for(var n in e)Object.defineProperty(s,n,{enumerable:!0,get:e[n]})}(e,{frontmatter:function(){return r},toc:function(){return i},title:function(){return c},default:function(){return a}});var l=n("12151");let r={title:"添加应用入口"},i=[{id:"新建入口",text:"新建入口",depth:2},{id:"按入口修改配置",text:"按入口修改配置",depth:2},{id:"下一步",text:"下一步",depth:2}],c="添加应用入口";function o(s){let e=Object.assign({h1:"h1",a:"a",p:"p",h2:"h2",code:"code",div:"div",button:"button",pre:"pre",span:"span",img:"img",strong:"strong"},s.components);return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsxs)(e.h1,{id:"添加应用入口",children:[(0,l.jsx)(e.a,{className:"header-anchor","aria-hidden":"true",href:"#添加应用入口",children:"#"}),"添加应用入口"]}),"\n",(0,l.jsx)(e.p,{children:"上一个章节中，我们基本完成了联系人列表应用的开发，介绍了 Modern.js 中部分功能的用法，以及推荐的最佳实践。"}),"\n",(0,l.jsx)(e.p,{children:"这一章节中，我们将介绍如何为应用添加新的入口。"}),"\n",(0,l.jsxs)(e.h2,{id:"新建入口",children:[(0,l.jsx)(e.a,{className:"header-anchor","aria-hidden":"true",href:"#新建入口",children:"#"}),"新建入口"]}),"\n",(0,l.jsxs)(e.p,{children:["一个完整的项目可能需要多个入口，Modern.js 支持自动创建新入口，前面的章节中提到过，",(0,l.jsx)(e.code,{children:"pnpm run new"})," 可以启用可选功能。"]}),"\n",(0,l.jsxs)(e.p,{children:["我们也可以通过它来创建新的工程元素，在项目根目录下执行 ",(0,l.jsx)(e.code,{children:"pnpm run new"}),"："]}),"\n",(0,l.jsxs)(e.div,{className:"language-bash",children:[(0,l.jsx)(e.div,{className:""}),(0,l.jsxs)(e.div,{className:"modern-code-content",children:[(0,l.jsx)(e.button,{className:"copy"}),(0,l.jsx)(e.pre,{className:"shiki",style:{backgroundColor:"var(--shiki-color-background)"},children:(0,l.jsxs)(e.code,{children:[(0,l.jsxs)(e.span,{className:"line",children:[(0,l.jsx)(e.span,{style:{color:"var(--shiki-token-keyword)"},children:"?"}),(0,l.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" 请选择你想要的操作 创建工程元素"})]}),"\n",(0,l.jsxs)(e.span,{className:"line",children:[(0,l.jsx)(e.span,{style:{color:"var(--shiki-token-keyword)"},children:"?"}),(0,l.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" 创建工程元素 新建「应用入口」"})]}),"\n",(0,l.jsxs)(e.span,{className:"line",children:[(0,l.jsx)(e.span,{style:{color:"var(--shiki-token-keyword)"},children:"?"}),(0,l.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" 请填写入口名称 (entry) landing-page"})]}),"\n",(0,l.jsx)(e.span,{className:"line"})]})})]})]}),"\n",(0,l.jsx)(e.p,{children:"创建完成，项目会变成这样："}),"\n",(0,l.jsxs)(e.div,{className:"language-bash",children:[(0,l.jsx)(e.div,{className:""}),(0,l.jsxs)(e.div,{className:"modern-code-content",children:[(0,l.jsx)(e.button,{className:"copy"}),(0,l.jsx)(e.pre,{className:"shiki",style:{backgroundColor:"var(--shiki-color-background)"},children:(0,l.jsxs)(e.code,{children:[(0,l.jsx)(e.span,{className:"line",children:(0,l.jsx)(e.span,{style:{color:"var(--shiki-token-function)"},children:"."})}),"\n",(0,l.jsx)(e.span,{className:"line",children:(0,l.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"├── README.md"})}),"\n",(0,l.jsx)(e.span,{className:"line",children:(0,l.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"├── modern.config.ts"})}),"\n",(0,l.jsx)(e.span,{className:"line",children:(0,l.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"├── node_modules"})}),"\n",(0,l.jsx)(e.span,{className:"line",children:(0,l.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"├── package.json"})}),"\n",(0,l.jsx)(e.span,{className:"line",children:(0,l.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"├── pnpm-lock.yaml"})}),"\n",(0,l.jsx)(e.span,{className:"line",children:(0,l.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"├── src"})}),"\n",(0,l.jsx)(e.span,{className:"line",children:(0,l.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"│   ├── modern-app-env.d.ts"})}),"\n",(0,l.jsx)(e.span,{className:"line",children:(0,l.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"│   ├── landing-page"})}),"\n",(0,l.jsx)(e.span,{className:"line",children:(0,l.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"│   │   └── routes"})}),"\n",(0,l.jsx)(e.span,{className:"line",children:(0,l.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"│   │       ├── index.css"})}),"\n",(0,l.jsx)(e.span,{className:"line",children:(0,l.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"│   │       ├── layout.tsx"})}),"\n",(0,l.jsx)(e.span,{className:"line",children:(0,l.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"│   │       └── page.tsx"})}),"\n",(0,l.jsx)(e.span,{className:"line",children:(0,l.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"│   └── myapp"})}),"\n",(0,l.jsx)(e.span,{className:"line",children:(0,l.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"│       ├── components"})}),"\n",(0,l.jsx)(e.span,{className:"line",children:(0,l.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"│       │   ├── Avatar"})}),"\n",(0,l.jsx)(e.span,{className:"line",children:(0,l.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"│       │   │   └── index.tsx"})}),"\n",(0,l.jsx)(e.span,{className:"line",children:(0,l.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"│       │   └── Item"})}),"\n",(0,l.jsx)(e.span,{className:"line",children:(0,l.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"│       │       └── index.tsx"})}),"\n",(0,l.jsx)(e.span,{className:"line",children:(0,l.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"│       ├── containers"})}),"\n",(0,l.jsx)(e.span,{className:"line",children:(0,l.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"│       │   └── Contacts.tsx"})}),"\n",(0,l.jsx)(e.span,{className:"line",children:(0,l.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"│       ├── models"})}),"\n",(0,l.jsx)(e.span,{className:"line",children:(0,l.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"│       │   └── contacts.ts"})}),"\n",(0,l.jsx)(e.span,{className:"line",children:(0,l.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"│       ├── routes"})}),"\n",(0,l.jsx)(e.span,{className:"line",children:(0,l.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"│       │   ├── archives"})}),"\n",(0,l.jsx)(e.span,{className:"line",children:(0,l.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"│       │   │   └── page.tsx"})}),"\n",(0,l.jsx)(e.span,{className:"line",children:(0,l.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"│       │   ├── layout.tsx"})}),"\n",(0,l.jsx)(e.span,{className:"line",children:(0,l.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"│       │   └── page.tsx"})}),"\n",(0,l.jsx)(e.span,{className:"line",children:(0,l.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"│       └── styles"})}),"\n",(0,l.jsx)(e.span,{className:"line",children:(0,l.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"│           └── utils.css"})}),"\n",(0,l.jsx)(e.span,{className:"line",children:(0,l.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"└── tsconfig.json"})}),"\n",(0,l.jsx)(e.span,{className:"line"})]})})]})]}),"\n",(0,l.jsxs)(e.p,{children:["可以看到联系人列表应用的文件，都被自动重构到 ",(0,l.jsx)(e.code,{children:"src/myapp/"})," 里。"]}),"\n",(0,l.jsxs)(e.p,{children:["同时新建了一个 ",(0,l.jsx)(e.code,{children:"src/landing-page/"}),"，里面同样有 ",(0,l.jsx)(e.code,{children:"routes/*"}),"（",(0,l.jsx)(e.code,{children:"pnpm run new"})," 命令只做了这些事，所以你也可以很容易的手动创建新入口或修改入口）"]}),"\n",(0,l.jsxs)(e.p,{children:["执行 ",(0,l.jsx)(e.code,{children:"pnpm run dev"}),"，显示："]}),"\n",(0,l.jsx)(e.p,{children:(0,l.jsx)(e.img,{src:"https://lf3-static.bytednsdoc.com/obj/eden-cn/nuvjhpqnuvr/modern-website/tutorials/c08-entries-myapp.png",alt:"design"})}),"\n",(0,l.jsxs)(e.p,{children:["访问 ",(0,l.jsx)(e.code,{children:"http://localhost:8080/"}),"，可以像之前一样看到应用程序。"]}),"\n",(0,l.jsxs)(e.p,{children:["访问 ",(0,l.jsx)(e.code,{children:"http://localhost:8080/landing-page"}),"，可以看到刚创建的新入口 ",(0,l.jsx)(e.code,{children:"landing-page"})," 的页面（Modern.js 自动生成的默认页面）。"]}),"\n",(0,l.jsxs)(e.p,{children:["Modern.js 框架的设计原则之一是【",(0,l.jsx)(e.a,{href:"https://en.wikipedia.org/wiki/Convention_over_configuration",target:"_blank",rel:"nofollow",children:"约定优于配置（Convention over Configuration）"}),"】，多数情况下可以按约定直接写代码，不需要做任何配置，这里 ",(0,l.jsx)(e.code,{children:"src/"})," 中的目录结构就是一种约定："]}),"\n",(0,l.jsxs)(e.p,{children:[(0,l.jsx)(e.code,{children:"src/myapp/"})," 和 ",(0,l.jsx)(e.code,{children:"src/landing-page/"})," 被自动识别为两个应用入口：myapp 和 landing-page。"]}),"\n",(0,l.jsxs)(e.p,{children:["其中 ",(0,l.jsx)(e.code,{children:"src/myapp/"})," 的目录名跟项目名（",(0,l.jsx)(e.code,{children:"package.json"})," 里的 ",(0,l.jsx)(e.code,{children:"name"}),"）一致，会被认为是项目",(0,l.jsx)(e.strong,{children:"主入口"}),"，项目 URL 的根路径（开发环境里默认是 ",(0,l.jsx)(e.code,{children:"http://localhost:8080/"}),"）会自动指向主入口。"]}),"\n",(0,l.jsxs)(e.p,{children:["其他入口的 URL，是在根路径后追加入口名，比如 ",(0,l.jsx)(e.code,{children:"http://localhost:8080/landing-page"}),"。"]}),"\n",(0,l.jsxs)(e.p,{children:["接下来，我们把 ",(0,l.jsx)(e.code,{children:"src/myapp/"})," 重命名为 ",(0,l.jsx)(e.code,{children:"src/contacts/"}),"："]}),"\n",(0,l.jsxs)(e.div,{className:"language-bash",children:[(0,l.jsx)(e.div,{className:""}),(0,l.jsxs)(e.div,{className:"modern-code-content",children:[(0,l.jsx)(e.button,{className:"copy"}),(0,l.jsx)(e.pre,{className:"shiki",style:{backgroundColor:"var(--shiki-color-background)"},children:(0,l.jsxs)(e.code,{children:[(0,l.jsx)(e.span,{className:"line",children:(0,l.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"mv src/myapp src/contacts"})}),"\n",(0,l.jsx)(e.span,{className:"line"})]})})]})]}),"\n",(0,l.jsxs)(e.p,{children:["再次执行 ",(0,l.jsx)(e.code,{children:"pnpm run dev"}),"，结果变成："]}),"\n",(0,l.jsx)(e.p,{children:(0,l.jsx)(e.img,{src:"https://lf3-static.bytednsdoc.com/obj/eden-cn/nuvjhpqnuvr/modern-website/tutorials/c08-entries-contacts.png",alt:"design"})}),"\n",(0,l.jsxs)(e.p,{children:["现在不再有主入口，联系人列表现在是一个普通入口，需要用 ",(0,l.jsx)(e.code,{children:"http://localhost:8080/contacts"})," 访问。"]}),"\n",(0,l.jsxs)(e.h2,{id:"按入口修改配置",children:[(0,l.jsx)(e.a,{className:"header-anchor","aria-hidden":"true",href:"#按入口修改配置",children:"#"}),"按入口修改配置"]}),"\n",(0,l.jsx)(e.p,{children:"我们可以在 Modern.js 配置文件里，自己写代码来控制项目的配置。"}),"\n",(0,l.jsxs)(e.p,{children:["现在，修改 ",(0,l.jsx)(e.code,{children:"modern.config.ts"}),"，添加内容："]}),"\n",(0,l.jsxs)(e.div,{className:"language-ts",children:[(0,l.jsx)(e.div,{className:"modern-code-title",children:"modern.config.ts"}),(0,l.jsxs)(e.div,{className:"modern-code-content",children:[(0,l.jsx)(e.button,{className:"copy"}),(0,l.jsx)(e.pre,{className:"shiki",style:{backgroundColor:"var(--shiki-color-background)"},children:(0,l.jsxs)(e.code,{children:[(0,l.jsxs)(e.span,{className:"line",children:[(0,l.jsx)(e.span,{style:{color:"var(--shiki-token-keyword)"},children:"import"}),(0,l.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" appTools"}),(0,l.jsx)(e.span,{style:{color:"var(--shiki-token-punctuation)"},children:","}),(0,l.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" { defineConfig } "}),(0,l.jsx)(e.span,{style:{color:"var(--shiki-token-keyword)"},children:"from"}),(0,l.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,l.jsx)(e.span,{style:{color:"var(--shiki-token-string-expression)"},children:"'@modern-js/app-tools'"}),(0,l.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:";"})]}),"\n",(0,l.jsxs)(e.span,{className:"line",children:[(0,l.jsx)(e.span,{style:{color:"var(--shiki-token-keyword)"},children:"import"}),(0,l.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" tailwindcssPlugin "}),(0,l.jsx)(e.span,{style:{color:"var(--shiki-token-keyword)"},children:"from"}),(0,l.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,l.jsx)(e.span,{style:{color:"var(--shiki-token-string-expression)"},children:"'@modern-js/plugin-tailwindcss'"}),(0,l.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:";"})]}),"\n",(0,l.jsx)(e.span,{className:"line"}),"\n",(0,l.jsxs)(e.span,{className:"line",children:[(0,l.jsx)(e.span,{style:{color:"var(--shiki-token-keyword)"},children:"export"}),(0,l.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,l.jsx)(e.span,{style:{color:"var(--shiki-token-keyword)"},children:"default"}),(0,l.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,l.jsx)(e.span,{style:{color:"var(--shiki-token-function)"},children:"defineConfig"}),(0,l.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"({"})]}),"\n",(0,l.jsxs)(e.span,{className:"line",children:[(0,l.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"  runtime"}),(0,l.jsx)(e.span,{style:{color:"var(--shiki-token-keyword)"},children:":"}),(0,l.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" {"})]}),"\n",(0,l.jsxs)(e.span,{className:"line",children:[(0,l.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"    router"}),(0,l.jsx)(e.span,{style:{color:"var(--shiki-token-keyword)"},children:":"}),(0,l.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,l.jsx)(e.span,{style:{color:"var(--shiki-token-constant)"},children:"true"}),(0,l.jsx)(e.span,{style:{color:"var(--shiki-token-punctuation)"},children:","})]}),"\n",(0,l.jsxs)(e.span,{className:"line",children:[(0,l.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"    state"}),(0,l.jsx)(e.span,{style:{color:"var(--shiki-token-keyword)"},children:":"}),(0,l.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,l.jsx)(e.span,{style:{color:"var(--shiki-token-constant)"},children:"true"}),(0,l.jsx)(e.span,{style:{color:"var(--shiki-token-punctuation)"},children:","})]}),"\n",(0,l.jsxs)(e.span,{className:"line",children:[(0,l.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"  }"}),(0,l.jsx)(e.span,{style:{color:"var(--shiki-token-punctuation)"},children:","})]}),"\n",(0,l.jsxs)(e.span,{className:"line",children:[(0,l.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"  server"}),(0,l.jsx)(e.span,{style:{color:"var(--shiki-token-keyword)"},children:":"}),(0,l.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" {"})]}),"\n",(0,l.jsxs)(e.span,{className:"line",children:[(0,l.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"    ssr"}),(0,l.jsx)(e.span,{style:{color:"var(--shiki-token-keyword)"},children:":"}),(0,l.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,l.jsx)(e.span,{style:{color:"var(--shiki-token-constant)"},children:"true"}),(0,l.jsx)(e.span,{style:{color:"var(--shiki-token-punctuation)"},children:","})]}),"\n",(0,l.jsxs)(e.span,{className:"line",children:[(0,l.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"    ssrByEntries"}),(0,l.jsx)(e.span,{style:{color:"var(--shiki-token-keyword)"},children:":"}),(0,l.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" {"})]}),"\n",(0,l.jsxs)(e.span,{className:"line",children:[(0,l.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"      "}),(0,l.jsx)(e.span,{style:{color:"var(--shiki-token-string-expression)"},children:"'landing-page'"}),(0,l.jsx)(e.span,{style:{color:"var(--shiki-token-keyword)"},children:":"}),(0,l.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,l.jsx)(e.span,{style:{color:"var(--shiki-token-constant)"},children:"false"}),(0,l.jsx)(e.span,{style:{color:"var(--shiki-token-punctuation)"},children:","})]}),"\n",(0,l.jsxs)(e.span,{className:"line",children:[(0,l.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"    }"}),(0,l.jsx)(e.span,{style:{color:"var(--shiki-token-punctuation)"},children:","})]}),"\n",(0,l.jsxs)(e.span,{className:"line",children:[(0,l.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"  }"}),(0,l.jsx)(e.span,{style:{color:"var(--shiki-token-punctuation)"},children:","})]}),"\n",(0,l.jsxs)(e.span,{className:"line",children:[(0,l.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"  plugins"}),(0,l.jsx)(e.span,{style:{color:"var(--shiki-token-keyword)"},children:":"}),(0,l.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" ["}),(0,l.jsx)(e.span,{style:{color:"var(--shiki-token-function)"},children:"appTools"}),(0,l.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"()"}),(0,l.jsx)(e.span,{style:{color:"var(--shiki-token-punctuation)"},children:","}),(0,l.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,l.jsx)(e.span,{style:{color:"var(--shiki-token-function)"},children:"tailwindcssPlugin"}),(0,l.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"()]"}),(0,l.jsx)(e.span,{style:{color:"var(--shiki-token-punctuation)"},children:","})]}),"\n",(0,l.jsx)(e.span,{className:"line",children:(0,l.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"});"})}),"\n",(0,l.jsx)(e.span,{className:"line"})]})})]})]}),"\n",(0,l.jsxs)(e.p,{children:["执行 ",(0,l.jsx)(e.code,{children:"pnpm run dev"}),"，再用浏览器打开 ",(0,l.jsx)(e.code,{children:"view-source:http://localhost:8080/landing-page"}),"，可以看到 ",(0,l.jsx)(e.code,{children:"landing-page"})," 网页内容是通过 js 动态加载的，且此页面的 SSR 功能被关闭。"]}),"\n",(0,l.jsxs)(e.p,{children:["如果注释掉 ",(0,l.jsx)(e.code,{children:"ssrByEntries"})," 和它的值，landing-page 的 SSR 功能就恢复开启了。"]}),"\n",(0,l.jsx)(e.p,{children:"还有一些时候，需要一些更复杂的逻辑来做设置，比如需要 JS 变量、表达式、导入模块等，例如在只在开发环境里开启 SSR："}),"\n",(0,l.jsxs)(e.div,{className:"language-js",children:[(0,l.jsx)(e.div,{className:""}),(0,l.jsxs)(e.div,{className:"modern-code-content",children:[(0,l.jsx)(e.button,{className:"copy"}),(0,l.jsx)(e.pre,{className:"shiki",style:{backgroundColor:"var(--shiki-color-background)"},children:(0,l.jsxs)(e.code,{children:[(0,l.jsxs)(e.span,{className:"line",children:[(0,l.jsx)(e.span,{style:{color:"var(--shiki-token-keyword)"},children:"export"}),(0,l.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,l.jsx)(e.span,{style:{color:"var(--shiki-token-keyword)"},children:"default"}),(0,l.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,l.jsx)(e.span,{style:{color:"var(--shiki-token-function)"},children:"defineConfig"}),(0,l.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"({"})]}),"\n",(0,l.jsxs)(e.span,{className:"line",children:[(0,l.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"  server"}),(0,l.jsx)(e.span,{style:{color:"var(--shiki-token-keyword)"},children:":"}),(0,l.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" {"})]}),"\n",(0,l.jsxs)(e.span,{className:"line",children:[(0,l.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"    ssrByEntries"}),(0,l.jsx)(e.span,{style:{color:"var(--shiki-token-keyword)"},children:":"}),(0,l.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" {"})]}),"\n",(0,l.jsxs)(e.span,{className:"line",children:[(0,l.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"      "}),(0,l.jsx)(e.span,{style:{color:"var(--shiki-token-string-expression)"},children:"'landing-page'"}),(0,l.jsx)(e.span,{style:{color:"var(--shiki-token-keyword)"},children:":"}),(0,l.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,l.jsx)(e.span,{style:{color:"var(--shiki-token-constant)"},children:"process"}),(0,l.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"."}),(0,l.jsx)(e.span,{style:{color:"var(--shiki-token-constant)"},children:"env"}),(0,l.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"."}),(0,l.jsx)(e.span,{style:{color:"var(--shiki-token-constant)"},children:"NODE_ENV"}),(0,l.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,l.jsx)(e.span,{style:{color:"var(--shiki-token-keyword)"},children:"!=="}),(0,l.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,l.jsx)(e.span,{style:{color:"var(--shiki-token-string-expression)"},children:"'production'"}),(0,l.jsx)(e.span,{style:{color:"var(--shiki-token-punctuation)"},children:","})]}),"\n",(0,l.jsxs)(e.span,{className:"line",children:[(0,l.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"    }"}),(0,l.jsx)(e.span,{style:{color:"var(--shiki-token-punctuation)"},children:","})]}),"\n",(0,l.jsxs)(e.span,{className:"line",children:[(0,l.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"  }"}),(0,l.jsx)(e.span,{style:{color:"var(--shiki-token-punctuation)"},children:","})]}),"\n",(0,l.jsx)(e.span,{className:"line",children:(0,l.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"};"})}),"\n",(0,l.jsx)(e.span,{className:"line"})]})})]})]}),"\n",(0,l.jsx)(e.p,{children:"到底为止，我们的联系人列表应用的雏形就基本完成了 \uD83D\uDC4F\uD83D\uDC4F\uD83D\uDC4F。"}),"\n",(0,l.jsxs)(e.h2,{id:"下一步",children:[(0,l.jsx)(e.a,{className:"header-anchor","aria-hidden":"true",href:"#下一步",children:"#"}),"下一步"]}),"\n",(0,l.jsxs)(e.p,{children:["接下来你可以通过了解",(0,l.jsx)(e.a,{href:"/guides/get-started/quick-start.html",children:"指南"}),"、",(0,l.jsx)(e.a,{href:"/configure/app/usage.html",children:"配置"})," 等更多教程，进一步完善你的应用。"]})]})}var a=function(){let s=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},{wrapper:e}=s.components||{};return e?(0,l.jsx)(e,Object.assign({},s,{children:(0,l.jsx)(o,s)})):o(s)}}}]);