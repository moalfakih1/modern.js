(self.webpackChunkwebpack=self.webpackChunkwebpack||[]).push([["docs_zh_configure_app_output_ssg_mdx"],{69210:function(e,n,s){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),Object.defineProperty(n,"default",{enumerable:!0,get:function(){return t}});var r=s("12151"),c=s("21447");function d(e){let n=Object.assign({div:"div",button:"button",pre:"pre",code:"code"},(0,c.useMDXComponents)(),e.components);return(0,r.jsxs)(n.div,{className:"language-",children:[(0,r.jsx)(n.div,{className:"modern-code-title",children:"src/App.tsx"}),(0,r.jsxs)(n.div,{className:"modern-code-content",children:[(0,r.jsx)(n.button,{className:"copy"}),(0,r.jsx)(n.pre,{className:"code",children:(0,r.jsx)(n.code,{className:"language-tsx",meta:'title="src/App.tsx"',children:"import { BrowserRouter, Route, Routes } from '@modern-js/runtime/router';\nimport { StaticRouter } from '@modern-js/runtime/router/server';\nimport React from 'react';\nimport { useRuntimeContext } from '@modern-js/runtime';\n\nconst Router = typeof window === 'undefined' ? StaticRouter : BrowserRouter;\n\nexport default () => {\n  const { context } = useRuntimeContext();\n  const pathname = context?.request?.pathname;\n  return (\n    <Router location={pathname}>\n      <Routes>\n        <Route index element={<div>index</div>} />\n        <Route path=\"about\" element={<div>about</div>} />\n      </Routes>\n    </Router>\n  );\n};\n"})})]})]})}var t=function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},{wrapper:n}=Object.assign({},(0,c.useMDXComponents)(),e.components);return n?(0,r.jsx)(n,Object.assign({},e,{children:(0,r.jsx)(d,e)})):d(e)}},33877:function(e,n,s){"use strict";Object.defineProperty(n,"__esModule",{value:!0});!function(e,n){for(var s in n)Object.defineProperty(e,s,{enumerable:!0,get:n[s]})}(n,{frontmatter:function(){return t},title:function(){return a},toc:function(){return i},default:function(){return l}});var r=s("12151"),c=s("21447"),d=s.ir(s("69210"));let t={sidebar_label:"ssg"},a="output.ssg",i=[{text:"示例",depth:2,id:"示例"},{text:"单入口",depth:3,id:"单入口"},{text:"多入口",depth:3,id:"多入口"},{text:"配置路由",depth:3,id:"配置路由"},{text:"阻止默认行为",depth:3,id:"阻止默认行为"},{text:"添加动态路由参数",depth:3,id:"添加动态路由参数"}];function o(e){let n=Object.assign({h1:"h1",a:"a",ul:"ul",li:"li",strong:"strong",code:"code",p:"p",div:"div",h2:"h2",h3:"h3",button:"button",pre:"pre"},(0,c.useMDXComponents)(),e.components);return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(n.h1,{id:"output.ssg",children:["output.ssg",(0,r.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#output.ssg",children:"#"})]}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"类型："})," ",(0,r.jsx)(n.code,{children:"boolean"})," | ",(0,r.jsx)(n.code,{children:"object"})," | ",(0,r.jsx)(n.code,{children:"function"})]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"默认值："})," ",(0,r.jsx)(n.code,{children:"undefined"})]}),"\n"]}),"\n",(0,r.jsxs)(n.p,{children:["开启",(0,r.jsx)(n.strong,{children:"自控式路由"}),"或",(0,r.jsx)(n.strong,{children:"约定式路由"})," SSG 功能的配置。"]}),"\n",(0,r.jsxs)(n.div,{className:"modern-directive info",children:[(0,r.jsx)(n.p,{className:"modern-directive-title",children:"客户端路由"}),(0,r.jsxs)(n.div,{className:"modern-directive-content",children:["相关内容可以查看",(0,r.jsx)(n.a,{href:"/guides/basic-features/routes",children:"路由"}),"。","\n"]})]}),"\n",(0,r.jsxs)(n.h2,{id:"示例",children:["示例",(0,r.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#示例",children:"#"})]}),"\n",(0,r.jsxs)(n.h3,{id:"单入口",children:["单入口",(0,r.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#单入口",children:"#"})]}),"\n",(0,r.jsxs)(n.p,{children:["当该配置设置为 ",(0,r.jsx)(n.code,{children:"true"})," 时，将会默认开启所有入口的 SSG 功能。"]}),"\n",(0,r.jsxs)(n.p,{children:["对",(0,r.jsx)(n.strong,{children:"自控式路由"}),"而言，将会渲染入口的根路由。对",(0,r.jsx)(n.strong,{children:"约定式路由"}),"而言，将会渲染入口中每一条路由。"]}),"\n",(0,r.jsxs)(n.p,{children:["例如 ",(0,r.jsx)(n.code,{children:"src/"})," 目录下有以下满足",(0,r.jsx)(n.strong,{children:"约定式路由"}),"的文件结构："]}),"\n",(0,r.jsx)(n.div,{className:"language-",children:(0,r.jsxs)(n.div,{className:"modern-code-content",children:[(0,r.jsx)(n.button,{className:"copy"}),(0,r.jsx)(n.pre,{className:"code",children:(0,r.jsx)(n.code,{className:"language-bash",children:".\n├── src\n│   └── routes\n│       ├── layout.tsx\n│       ├── page.tsx\n│       └── user\n│           ├── layout.tsx\n│           ├── page.tsx\n│           └── profile\n│               └── page.tsx\n"})})]})}),"\n",(0,r.jsxs)(n.p,{children:["在 ",(0,r.jsx)(n.code,{children:"modern.config.js"})," 中做以下设置："]}),"\n",(0,r.jsx)(n.div,{className:"language-",children:(0,r.jsxs)(n.div,{className:"modern-code-content",children:[(0,r.jsx)(n.button,{className:"copy"}),(0,r.jsx)(n.pre,{className:"code",children:(0,r.jsx)(n.code,{className:"language-js",children:"export default defineConfig({\n  output: {\n    ssg: true,\n  },\n});\n"})})]})}),"\n",(0,r.jsxs)(n.p,{children:["执行 ",(0,r.jsx)(n.code,{children:"pnpm build"})," 构建应用后。",(0,r.jsx)(n.code,{children:"dist/"})," 目录将会生成三张 HTML 分别对应三条路由（不开启 SSG 时只有一张 HTML），并且所有 HTML 都已经渲染。"]}),"\n",(0,r.jsxs)(n.p,{children:["而例如下面的",(0,r.jsx)(n.strong,{children:"自控式路由"}),"："]}),"\n","\n",(0,r.jsx)(d.default,{}),"\n",(0,r.jsxs)(n.p,{children:["同样使用上面的配置，在执行 ",(0,r.jsx)(n.code,{children:"pnpm run build"})," 后，只有入口路由 ",(0,r.jsx)(n.code,{children:"/"})," 会生成渲染后的 HTML。"]}),"\n",(0,r.jsxs)(n.h3,{id:"多入口",children:["多入口",(0,r.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#多入口",children:"#"})]}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.code,{children:"output.ssg"})," 也可以按照入口配置，配置生效的规则同样由入口路由方式决定。"]}),"\n",(0,r.jsx)(n.p,{children:"例如以下目录结构："}),"\n",(0,r.jsx)(n.div,{className:"language-",children:(0,r.jsxs)(n.div,{className:"modern-code-content",children:[(0,r.jsx)(n.button,{className:"copy"}),(0,r.jsx)(n.pre,{className:"code",children:(0,r.jsx)(n.code,{className:"language-bash",children:"。\n├── src\n│   ├── entryA\n│   │   └── routes\n│   │       ├── layout.tsx\n│   │       ├── page.tsx\n│   │       └── user\n│   │           ├── layout.tsx\n│   │           ├── page.tsx\n│   │           └── profile\n│   │               └── page.tsx\n│   └── entryB\n│       └── App.tsx\n"})})]})}),"\n",(0,r.jsxs)(n.p,{children:["默认情况下，所有约定式路由的入口，在设置 ",(0,r.jsx)(n.code,{children:"output.ssg"})," 配置为 ",(0,r.jsx)(n.code,{children:"true"})," 后都会在构建阶段渲染。可以配置 ",(0,r.jsx)(n.code,{children:"false"})," 来取消指定入口的的默认行为，例如取消上述 entryA 入口在构建时的渲染："]}),"\n",(0,r.jsx)(n.div,{className:"language-",children:(0,r.jsxs)(n.div,{className:"modern-code-content",children:[(0,r.jsx)(n.button,{className:"copy"}),(0,r.jsx)(n.pre,{className:"code",children:(0,r.jsx)(n.code,{className:"language-js",children:"export default defineConfig({\n  output: {\n    ssg: {\n      entryA: true,\n      entryB: false,\n    },\n  },\n});\n"})})]})}),"\n",(0,r.jsxs)(n.h3,{id:"配置路由",children:["配置路由",(0,r.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#配置路由",children:"#"})]}),"\n",(0,r.jsxs)(n.p,{children:["上述内容中提到，",(0,r.jsx)(n.strong,{children:"自控式路由"}),"默认只会开启入口路由的 SSG 配置。"]}),"\n",(0,r.jsxs)(n.p,{children:["可以在 ",(0,r.jsx)(n.code,{children:"output.ssg"})," 中设置具体的路由，告知 Modern.js 开启这些客户端路由的 SSG 功能。例如上述 ",(0,r.jsx)(n.code,{children:"src/App.tsx"})," 的文件内容为："]}),"\n",(0,r.jsx)(d.default,{}),"\n",(0,r.jsxs)(n.p,{children:["在 ",(0,r.jsx)(n.code,{children:"modern.config.js"})," 中这样设置后，",(0,r.jsx)(n.code,{children:"/about"})," 路由也会开启 SSG 功能："]}),"\n",(0,r.jsx)(n.div,{className:"language-",children:(0,r.jsxs)(n.div,{className:"modern-code-content",children:[(0,r.jsx)(n.button,{className:"copy"}),(0,r.jsx)(n.pre,{className:"code",children:(0,r.jsx)(n.code,{className:"language-js",children:"export default defineConfig({\n  output: {\n    ssg: {\n      routes: ['/', '/about'],\n    },\n  },\n});\n"})})]})}),"\n",(0,r.jsx)(n.p,{children:"Modern.js 将会自动根据入口拼接完整的 URL 并交给 SSG 插件完成渲染。"}),"\n",(0,r.jsx)(n.p,{children:"也可以为具体入口或路由配置请求头，例如："}),"\n",(0,r.jsx)(n.div,{className:"language-",children:(0,r.jsxs)(n.div,{className:"modern-code-content",children:[(0,r.jsx)(n.button,{className:"copy"}),(0,r.jsx)(n.pre,{className:"code",children:(0,r.jsx)(n.code,{className:"language-js",children:"export default defineConfig({\n  output: {\n    ssg: {\n      headers: {},\n      routes: [\n        '/',\n        {\n          url: '/about',\n          headers: {},\n        },\n      ],\n    },\n  },\n});\n"})})]})}),"\n",(0,r.jsxs)(n.div,{className:"modern-directive info",children:[(0,r.jsx)(n.p,{className:"modern-directive-title",children:"INFO"}),(0,r.jsxs)(n.div,{className:"modern-directive-content",children:["路由中设置的 ",(0,r.jsx)(n.code,{children:"headers"})," 会覆盖入口中设置的 ",(0,r.jsx)(n.code,{children:"headers"}),"。","\n"]})]}),"\n",(0,r.jsxs)(n.h3,{id:"阻止默认行为",children:["阻止默认行为",(0,r.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#阻止默认行为",children:"#"})]}),"\n",(0,r.jsxs)(n.p,{children:["默认情况下，",(0,r.jsx)(n.strong,{children:"约定式路由"}),"的路由会全部开启 SSG。Modern.js 提供了另一个字段，用来阻止默认的 SSG 行为。"]}),"\n",(0,r.jsxs)(n.p,{children:["例如以下目录结构，",(0,r.jsx)(n.code,{children:"/"}),"、",(0,r.jsx)(n.code,{children:"/user"}),"、",(0,r.jsx)(n.code,{children:"/user/profle"})," 三条路由都开启 SSG："]}),"\n",(0,r.jsx)(n.div,{className:"language-",children:(0,r.jsxs)(n.div,{className:"modern-code-content",children:[(0,r.jsx)(n.button,{className:"copy"}),(0,r.jsx)(n.pre,{className:"code",children:(0,r.jsx)(n.code,{className:"language-bash",children:".\n├── src\n│   └── routes\n│       ├── layout.tsx\n│       ├── page.tsx\n│       └── user\n│           ├── layout.tsx\n│           ├── page.tsx\n│           └── profile\n│               └── page.tsx\n"})})]})}),"\n",(0,r.jsx)(n.p,{children:"可以这样设置，禁用某一条客户端路由的默认行为："}),"\n",(0,r.jsx)(n.div,{className:"language-",children:(0,r.jsxs)(n.div,{className:"modern-code-content",children:[(0,r.jsx)(n.button,{className:"copy"}),(0,r.jsx)(n.pre,{className:"code",children:(0,r.jsx)(n.code,{className:"language-js",children:"export default defineConfig({\n  output: {\n    preventDefault: ['/user'],\n  },\n});\n"})})]})}),"\n",(0,r.jsxs)(n.h3,{id:"添加动态路由参数",children:["添加动态路由参数",(0,r.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#添加动态路由参数",children:"#"})]}),"\n",(0,r.jsxs)(n.p,{children:["部分路由可能是动态的，例如自控式路由中的 ",(0,r.jsx)(n.code,{children:"/user/:id"})," 或是约定式路由中 ",(0,r.jsx)(n.code,{children:"user/[id]/page.tsx"})," 文件生成的路由。"]}),"\n",(0,r.jsxs)(n.p,{children:["可以在 ",(0,r.jsx)(n.code,{children:"output.ssg"})," 中配置具体的参数，渲染指定参数的路由，例如："]}),"\n",(0,r.jsx)(n.div,{className:"language-",children:(0,r.jsxs)(n.div,{className:"modern-code-content",children:[(0,r.jsx)(n.button,{className:"copy"}),(0,r.jsx)(n.pre,{className:"code",children:(0,r.jsx)(n.code,{className:"language-js",children:"export default defineConfig({\n  output: {\n    ssg: {\n      routes: [\n        {\n          url: '/user/:id',\n          params: [\n            {\n              id: 'modernjs',\n            },\n          ],\n        },\n      ],\n    },\n  },\n});\n"})})]})}),"\n",(0,r.jsx)(n.p,{children:"动态路由和 SSG 的组合，在根据 CMS 系统数据变更，实时生成静态页面时非常有用。"})]})}var l=function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},{wrapper:n}=Object.assign({},(0,c.useMDXComponents)(),e.components);return n?(0,r.jsx)(n,Object.assign({},e,{children:(0,r.jsx)(o,e)})):o(e)}}}]);