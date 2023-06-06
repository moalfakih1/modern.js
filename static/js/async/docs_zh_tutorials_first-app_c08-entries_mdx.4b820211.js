(self.webpackChunk_modern_js_main_doc=self.webpackChunk_modern_js_main_doc||[]).push([["docs_zh_tutorials_first-app_c08-entries_mdx"],{94560:function(n,e,s){"use strict";Object.defineProperty(e,"__esModule",{value:!0});!function(n,e){for(var s in e)Object.defineProperty(n,s,{enumerable:!0,get:e[s]})}(e,{frontmatter:function(){return d},title:function(){return i},toc:function(){return t},default:function(){return o}});var r=s("9880"),c=s("23169"),d={title:"添加应用入口"},i="添加应用入口",t=[{text:"新建入口",depth:2,id:"新建入口"},{text:"按入口修改配置",depth:2,id:"按入口修改配置"},{text:"下一步",depth:2,id:"下一步"}];function a(n){var e=Object.assign({h1:"h1",a:"a",p:"p",h2:"h2",code:"code",pre:"pre",img:"img",strong:"strong"},(0,c.useMDXComponents)(),n.components);return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(e.h1,{id:"添加应用入口",children:["添加应用入口",(0,r.jsx)(e.a,{className:"header-anchor","aria-hidden":"true",href:"#添加应用入口",children:"#"})]}),"\n",(0,r.jsx)(e.p,{children:"上一个章节中，我们基本完成了联系人列表应用的开发，介绍了 Modern.js 中部分功能的用法，以及推荐的最佳实践。"}),"\n",(0,r.jsx)(e.p,{children:"这一章节中，我们将介绍如何为应用添加新的入口。"}),"\n",(0,r.jsxs)(e.h2,{id:"新建入口",children:["新建入口",(0,r.jsx)(e.a,{className:"header-anchor","aria-hidden":"true",href:"#新建入口",children:"#"})]}),"\n",(0,r.jsxs)(e.p,{children:["一个完整的项目可能需要多个入口，Modern.js 支持自动创建新入口，前面的章节中提到过，",(0,r.jsx)(e.code,{children:"pnpm run new"})," 可以启用可选功能。"]}),"\n",(0,r.jsxs)(e.p,{children:["我们也可以通过它来创建新的工程元素，在项目根目录下执行 ",(0,r.jsx)(e.code,{children:"pnpm run new"}),"："]}),"\n",(0,r.jsx)(e.pre,{children:(0,r.jsx)(e.code,{className:"language-bash",children:"? 请选择你想要的操作 创建工程元素\n? 请选择创建元素类型 新建「应用入口」\n? 请填写入口名称 (entry) landing-page\n"})}),"\n",(0,r.jsx)(e.p,{children:"创建完成，项目会变成这样："}),"\n",(0,r.jsx)(e.pre,{children:(0,r.jsx)(e.code,{className:"language-bash",children:".\n├── README.md\n├── modern.config.ts\n├── node_modules\n├── package.json\n├── pnpm-lock.yaml\n├── src\n│   ├── modern-app-env.d.ts\n│   ├── landing-page\n│   │   └── routes\n│   │       ├── index.css\n│   │       ├── layout.tsx\n│   │       └── page.tsx\n│   └── myapp\n│       ├── components\n│       │   ├── Avatar\n│       │   │   └── index.tsx\n│       │   └── Item\n│       │       └── index.tsx\n│       ├── containers\n│       │   └── Contacts.tsx\n│       ├── models\n│       │   └── contacts.ts\n│       ├── routes\n│       │   ├── archives\n│       │   │   └── page.tsx\n│       │   ├── layout.tsx\n│       │   └── page.tsx\n│       └── styles\n│           └── utils.css\n└── tsconfig.json\n"})}),"\n",(0,r.jsxs)(e.p,{children:["可以看到联系人列表应用的文件，都被自动重构到 ",(0,r.jsx)(e.code,{children:"src/myapp/"})," 里。"]}),"\n",(0,r.jsxs)(e.p,{children:["同时新建了一个 ",(0,r.jsx)(e.code,{children:"src/landing-page/"}),"，里面同样有 ",(0,r.jsx)(e.code,{children:"routes/*"}),"（",(0,r.jsx)(e.code,{children:"pnpm run new"})," 命令只做了这些事，所以你也可以很容易的手动创建新入口或修改入口）"]}),"\n",(0,r.jsxs)(e.p,{children:["执行 ",(0,r.jsx)(e.code,{children:"pnpm run dev"}),"，显示："]}),"\n",(0,r.jsx)(e.p,{children:(0,r.jsx)(e.img,{src:"https://lf3-static.bytednsdoc.com/obj/eden-cn/nuvjhpqnuvr/modern-website/tutorials/c08-entries-myapp.png",alt:"design"})}),"\n",(0,r.jsxs)(e.p,{children:["访问 ",(0,r.jsx)(e.code,{children:"http://localhost:8080/"}),"，可以像之前一样看到应用程序。"]}),"\n",(0,r.jsxs)(e.p,{children:["访问 ",(0,r.jsx)(e.code,{children:"http://localhost:8080/landing-page"}),"，可以看到刚创建的新入口 ",(0,r.jsx)(e.code,{children:"landing-page"})," 的页面（Modern.js 自动生成的默认页面）。"]}),"\n",(0,r.jsxs)(e.p,{children:["Modern.js 框架的设计原则之一是【",(0,r.jsx)(e.a,{href:"https://en.wikipedia.org/wiki/Convention_over_configuration",target:"_blank",rel:"noopener noreferrer",children:"约定优于配置（Convention over Configuration）"}),"】，多数情况下可以按约定直接写代码，不需要做任何配置，这里 ",(0,r.jsx)(e.code,{children:"src/"})," 中的目录结构就是一种约定："]}),"\n",(0,r.jsxs)(e.p,{children:[(0,r.jsx)(e.code,{children:"src/myapp/"})," 和 ",(0,r.jsx)(e.code,{children:"src/landing-page/"})," 被自动识别为两个应用入口：myapp 和 landing-page。"]}),"\n",(0,r.jsxs)(e.p,{children:["其中 ",(0,r.jsx)(e.code,{children:"src/myapp/"})," 的目录名跟项目名（",(0,r.jsx)(e.code,{children:"package.json"})," 里的 ",(0,r.jsx)(e.code,{children:"name"}),"）一致，会被认为是项目",(0,r.jsx)(e.strong,{children:"主入口"}),"，项目 URL 的根路径（开发环境里默认是 ",(0,r.jsx)(e.code,{children:"http://localhost:8080/"}),"）会自动指向主入口。"]}),"\n",(0,r.jsxs)(e.p,{children:["其他入口的 URL，是在根路径后追加入口名，比如 ",(0,r.jsx)(e.code,{children:"http://localhost:8080/landing-page"}),"。"]}),"\n",(0,r.jsxs)(e.p,{children:["接下来，我们把 ",(0,r.jsx)(e.code,{children:"src/myapp/"})," 重命名为 ",(0,r.jsx)(e.code,{children:"src/contacts/"}),"："]}),"\n",(0,r.jsx)(e.pre,{children:(0,r.jsx)(e.code,{className:"language-bash",children:"mv src/myapp src/contacts\n"})}),"\n",(0,r.jsxs)(e.p,{children:["再次执行 ",(0,r.jsx)(e.code,{children:"pnpm run dev"}),"，结果变成："]}),"\n",(0,r.jsx)(e.p,{children:(0,r.jsx)(e.img,{src:"https://lf3-static.bytednsdoc.com/obj/eden-cn/nuvjhpqnuvr/modern-website/tutorials/c08-entries-contacts.png",alt:"design"})}),"\n",(0,r.jsxs)(e.p,{children:["现在不再有主入口，联系人列表现在是一个普通入口，需要用 ",(0,r.jsx)(e.code,{children:"http://localhost:8080/contacts"})," 访问。"]}),"\n",(0,r.jsxs)(e.h2,{id:"按入口修改配置",children:["按入口修改配置",(0,r.jsx)(e.a,{className:"header-anchor","aria-hidden":"true",href:"#按入口修改配置",children:"#"})]}),"\n",(0,r.jsx)(e.p,{children:"我们可以在 Modern.js 配置文件里，自己写代码来控制项目的配置。"}),"\n",(0,r.jsxs)(e.p,{children:["现在，修改 ",(0,r.jsx)(e.code,{children:"modern.config.ts"}),"，添加内容："]}),"\n",(0,r.jsx)(e.pre,{children:(0,r.jsx)(e.code,{className:"language-ts",meta:'title="modern.config.ts"',children:"import appTools, { defineConfig } from '@modern-js/app-tools';\nimport tailwindcssPlugin from '@modern-js/plugin-tailwindcss';\n\nexport default defineConfig({\n  runtime: {\n    router: true,\n    state: true,\n  },\n  server: {\n    ssr: true,\n    ssrByEntries: {\n      'landing-page': false,\n    },\n  },\n  plugins: [appTools(), tailwindcssPlugin()],\n});\n"})}),"\n",(0,r.jsxs)(e.p,{children:["执行 ",(0,r.jsx)(e.code,{children:"pnpm run dev"}),"，再用浏览器打开 ",(0,r.jsx)(e.code,{children:"view-source:http://localhost:8080/landing-page"}),"，可以看到 ",(0,r.jsx)(e.code,{children:"landing-page"})," 网页内容是通过 js 动态加载的，且此页面的 SSR 功能被关闭。"]}),"\n",(0,r.jsxs)(e.p,{children:["如果注释掉 ",(0,r.jsx)(e.code,{children:"ssrByEntries"})," 和它的值，landing-page 的 SSR 功能就恢复开启了。"]}),"\n",(0,r.jsx)(e.p,{children:"还有一些时候，需要一些更复杂的逻辑来做设置，比如需要 JS 变量、表达式、导入模块等，例如在只在开发环境里开启 SSR："}),"\n",(0,r.jsx)(e.pre,{children:(0,r.jsx)(e.code,{className:"language-js",children:"export default defineConfig({\n  server: {\n    ssrByEntries: {\n      'landing-page': process.env.NODE_ENV !== 'production',\n    },\n  },\n};\n"})}),"\n",(0,r.jsx)(e.p,{children:"到底为止，我们的联系人列表应用的雏形就基本完成了 \uD83D\uDC4F\uD83D\uDC4F\uD83D\uDC4F。"}),"\n",(0,r.jsxs)(e.h2,{id:"下一步",children:["下一步",(0,r.jsx)(e.a,{className:"header-anchor","aria-hidden":"true",href:"#下一步",children:"#"})]}),"\n",(0,r.jsxs)(e.p,{children:["接下来你可以通过了解",(0,r.jsx)(e.a,{href:"/guides/get-started/quick-start",children:"指南"}),"、",(0,r.jsx)(e.a,{href:"/configure/app/usage",children:"配置"})," 等更多教程，进一步完善你的应用。"]})]})}var o=function(){var n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},e=Object.assign({},(0,c.useMDXComponents)(),n.components).wrapper;return e?(0,r.jsx)(e,Object.assign({},n,{children:(0,r.jsx)(a,n)})):a(n)}}}]);