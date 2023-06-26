(self.webpackChunk_modern_js_main_doc=self.webpackChunk_modern_js_main_doc||[]).push([["docs_zh_guides_basic-features_routes_mdx"],{73051:function(e,n,r){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),Object.defineProperty(n,"default",{enumerable:!0,get:function(){return a}});var s,d=r("15169"),t=r("43932"),c=r("9880"),i=r("23169");function o(e){return(0,c.jsx)(c.Fragment,{})}(s=globalThis).__RSPRESS_PAGE_META||(s.__RSPRESS_PAGE_META={}),globalThis.__RSPRESS_PAGE_META["%2Fhome%2Frunner%2Fwork%2Fmodern.js%2Fmodern.js%2Fpackages%2Fdocument%2Fmain-doc%2Fdocs%2Fzh%2Fcomponents%2Fconvention-routing-motivation.mdx"]={toc:[],title:"",frontmatter:{}};var a=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=Object.assign({},(0,i.useMDXComponents)(),e.components).wrapper;return n?(0,c.jsx)(n,t._(d._({},e),{children:(0,c.jsx)(o,d._({},e))})):o(e)}},50841:function(e,n,r){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),Object.defineProperty(n,"default",{enumerable:!0,get:function(){return a}});var s,d=r("15169"),t=r("43932"),c=r("9880"),i=r("23169");function o(e){return(0,c.jsx)(c.Fragment,{})}(s=globalThis).__RSPRESS_PAGE_META||(s.__RSPRESS_PAGE_META={}),globalThis.__RSPRESS_PAGE_META["%2Fhome%2Frunner%2Fwork%2Fmodern.js%2Fmodern.js%2Fpackages%2Fdocument%2Fmain-doc%2Fdocs%2Fzh%2Fcomponents%2Froutes-practice.mdx"]={toc:[],title:"",frontmatter:{}};var a=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=Object.assign({},(0,i.useMDXComponents)(),e.components).wrapper;return n?(0,c.jsx)(n,t._(d._({},e),{children:(0,c.jsx)(o,d._({},e))})):o(e)}},10953:function(e,n,r){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),Object.defineProperty(n,"default",{enumerable:!0,get:function(){return h}});var s,d=r("15169"),t=r("43932"),c=r("9880"),i=r("23169"),o=r.ir(r("73051")),a=r.ir(r("50841"));function l(e){var n=Object.assign({h1:"h1",a:"a",p:"p",strong:"strong",div:"div",h2:"h2",code:"code",pre:"pre",h3:"h3",ul:"ul",li:"li",h4:"h4",ol:"ol"},(0,i.useMDXComponents)(),e.components);return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsxs)(n.h1,{id:"路由",children:["路由",(0,c.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#路由",children:"#"})]}),"\n",(0,c.jsxs)(n.p,{children:["Modern.js 的路由基于 ",(0,c.jsx)(n.a,{href:"https://reactrouter.com/en/main",target:"_blank",rel:"noopener noreferrer",children:"React Router 6"}),"，并提供了多种类型的路由模式。根据不同 ",(0,c.jsx)(n.a,{href:"/guides/concept/entries",children:"入口"})," 类型，将路由分为三种模式，分别是",(0,c.jsx)(n.strong,{children:"约定式路由"}),"，",(0,c.jsx)(n.strong,{children:"自控式路由"}),"和",(0,c.jsx)(n.strong,{children:"其他路由方案"}),"。"]}),"\n",(0,c.jsxs)(n.div,{className:"modern-directive note",children:[(0,c.jsx)(n.div,{className:"modern-directive-title",children:"NOTE"}),(0,c.jsxs)(n.div,{className:"modern-directive-content",children:[(0,c.jsx)(n.p,{children:"本小节提到的路由，都是客户端路由，即 SPA 路由。"}),"\n"]})]}),"\n",(0,c.jsxs)(n.h2,{id:"约定式路由",children:["约定式路由",(0,c.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#约定式路由",children:"#"})]}),"\n",(0,c.jsxs)(n.p,{children:["以 ",(0,c.jsx)(n.code,{children:"routes/"})," 为约定的入口，Modern.js 会自动基于文件系统，生成对应的路由结构。"]}),"\n",(0,c.jsxs)(n.p,{children:["Modern.js 支持了业界流行的约定式路由模式：",(0,c.jsx)(n.strong,{children:"嵌套路由"}),"，使用嵌套路由时，页面的路由 与 UI 结构是相呼应的，我们将会详细介绍这种路由模式。"]}),"\n",(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:"language-bash",children:"/user/johnny/profile                  /user/johnny/posts\n+------------------+                  +-----------------+\n| User             |                  | User            |\n| +--------------+ |                  | +-------------+ |\n| | Profile      | |  +------------>  | | Posts       | |\n| |              | |                  | |             | |\n| +--------------+ |                  | +-------------+ |\n+------------------+                  +-----------------+\n"})}),"\n",(0,c.jsxs)(n.h3,{id:"路由文件约定",children:["路由文件约定",(0,c.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#路由文件约定",children:"#"})]}),"\n",(0,c.jsxs)(n.p,{children:["在",(0,c.jsx)(n.code,{children:"routes/"})," 目录下，目录名会作为路由 url 的映射，Modern.js 有两个文件约定 ",(0,c.jsx)(n.code,{children:"layout.[jt]sx"})," 和 ",(0,c.jsx)(n.code,{children:"page.[jt]sx"}),"（后面简写为 ",(0,c.jsx)(n.code,{children:".tsx"}),"）。这两个文件决定了应用的布局层次，其中 ",(0,c.jsx)(n.code,{children:"layout.tsx"})," 中作为布局组件，",(0,c.jsx)(n.code,{children:"page.tsx"})," 作为内容组件，是整条路由的叶子节点（一条路由有且仅有一个叶子节点，且必须以叶子节点结尾）。"]}),"\n",(0,c.jsx)(n.p,{children:"例如以下目录结构："}),"\n",(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:"language-bash",children:".\n└── routes\n    ├── page.tsx\n    └── user\n        └── page.tsx\n"})}),"\n",(0,c.jsx)(n.p,{children:"会产出下面两条路由："}),"\n",(0,c.jsxs)(n.ul,{children:["\n",(0,c.jsx)(n.li,{children:(0,c.jsx)(n.code,{children:"/"})}),"\n",(0,c.jsx)(n.li,{children:(0,c.jsx)(n.code,{children:"/user"})}),"\n"]}),"\n",(0,c.jsxs)(n.p,{children:["当添加 ",(0,c.jsx)(n.code,{children:"layout.tsx"})," 后， 假设有以下目录"]}),"\n",(0,c.jsxs)(n.div,{className:"modern-directive info",children:[(0,c.jsx)(n.div,{className:"modern-directive-title",children:"INFO"}),(0,c.jsxs)(n.div,{className:"modern-directive-content",children:[(0,c.jsxs)(n.p,{children:["这里 ",(0,c.jsx)(n.code,{children:"routes/layout.tsx"})," 会作为 ",(0,c.jsx)(n.code,{children:"/"})," 路由下所有组件的布局组件使用， ",(0,c.jsx)(n.code,{children:"routes/user/layout.tsx"})," 会作为 ",(0,c.jsx)(n.code,{children:"/user"})," 路由下所有路由组件的布局组件使用。"]}),"\n"]})]}),"\n",(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:"language-bash",children:".\n└── routes\n    ├── layout.tsx\n    ├── page.tsx\n    └── user\n        ├── layout.tsx\n        └── page.tsx\n"})}),"\n",(0,c.jsxs)(n.p,{children:["当路由为 ",(0,c.jsx)(n.code,{children:"/"})," 时，会有以下 UI 布局："]}),"\n",(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:"language-tsx",children:"<Layout>\n  <Page />\n</Layout>\n"})}),"\n",(0,c.jsxs)(n.p,{children:["同样，",(0,c.jsx)(n.code,{children:"routes/user/layout.tsx"})," 会作为 ",(0,c.jsx)(n.code,{children:"/user"})," 路由下所有组件的布局组件使用。当路由为 ",(0,c.jsx)(n.code,{children:"/user"})," 时， 会有以下 UI 布局："]}),"\n",(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:"language-tsx",children:"<Layout>\n  <UserLayout>\n    <UserPage />\n  </UserLayout>\n</Layout>\n"})}),"\n",(0,c.jsxs)(n.h4,{id:"layout",children:["Layout",(0,c.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#layout",children:"#"})]}),"\n",(0,c.jsxs)(n.p,{children:[(0,c.jsx)(n.code,{children:"<Layout>"})," 组件是指 ",(0,c.jsx)(n.code,{children:"routes/"})," 目录下所有 ",(0,c.jsx)(n.code,{children:"layout.tsx"})," 文件，它们表示对应路由片段的布局，使用 ",(0,c.jsx)(n.code,{children:"<Outlet>"})," 表示子组件。"]}),"\n",(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:"language-tsx",meta:"title=routes/layout.tsx",children:"import { Link, Outlet, useLoaderData } from '@modern-js/runtime/router';\n\nexport default () => {\n  return (\n    <>\n      <Outlet></Outlet>\n    </>\n  );\n};\n"})}),"\n",(0,c.jsxs)(n.div,{className:"modern-directive note",children:[(0,c.jsx)(n.div,{className:"modern-directive-title",children:"NOTE"}),(0,c.jsxs)(n.div,{className:"modern-directive-content",children:[(0,c.jsxs)(n.p,{children:[(0,c.jsx)(n.code,{children:"<Outlet>"})," 是 React Router 6 中新的 API，详情可以查看 ",(0,c.jsx)(n.a,{href:"https://reactrouter.com/en/main/components/outlet#outlet",target:"_blank",rel:"noopener noreferrer",children:"Outlet"}),"."]}),"\n"]})]}),"\n",(0,c.jsxs)(n.p,{children:["为了方便介绍 ",(0,c.jsx)(n.code,{children:"<Layout>"})," 与 ",(0,c.jsx)(n.code,{children:"<Outlet>"})," 的关系，以下面的文件目录举例："]}),"\n",(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:"language-bash",children:".\n└── routes\n    ├── blog\n    │   └── page.tsx\n    ├── layout.tsx\n    ├── page.tsx\n    └── user\n        ├── layout.tsx\n        └── page.tsx\n"})}),"\n",(0,c.jsxs)(n.ol,{children:["\n",(0,c.jsxs)(n.li,{children:["当路由为 ",(0,c.jsx)(n.code,{children:"/"})," 时，",(0,c.jsx)(n.code,{children:"routes/layout.tsx"})," 中的 ",(0,c.jsx)(n.code,{children:"<Outlet>"})," 代表的是 ",(0,c.jsx)(n.code,{children:"routes/page.tsx"})," 中导出的组件，生成以下 UI 结构："]}),"\n"]}),"\n",(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:"language-tsx",children:"<Layout>\n  <Page />\n</Layout>\n"})}),"\n",(0,c.jsxs)(n.ol,{start:"2",children:["\n",(0,c.jsxs)(n.li,{children:["当路由为 ",(0,c.jsx)(n.code,{children:"/blog"})," 时，",(0,c.jsx)(n.code,{children:"routes/layout.tsx"})," 中的 ",(0,c.jsx)(n.code,{children:"<Outlet>"})," 代表的是 ",(0,c.jsx)(n.code,{children:"routes/blog/page.tsx"})," 中导出的组件，生成以下 UI 结构："]}),"\n"]}),"\n",(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:"language-tsx",children:"<Layout>\n  <BlogPage />\n</Layout>\n"})}),"\n",(0,c.jsxs)(n.ol,{start:"3",children:["\n",(0,c.jsxs)(n.li,{children:["当路由为 ",(0,c.jsx)(n.code,{children:"/user"})," 时，",(0,c.jsx)(n.code,{children:"routes/layout.tsx"})," 中的 ",(0,c.jsx)(n.code,{children:"<Outlet>"})," 代表的是 ",(0,c.jsx)(n.code,{children:"routes/user/layout.tsx"})," 中导出的组件。",(0,c.jsx)(n.code,{children:"routes/user/layout.tsx"})," 中的 ",(0,c.jsx)(n.code,{children:"<Outlet>"})," 代表的是 ",(0,c.jsx)(n.code,{children:"routes/user/page.tsx"})," 中导出的组件。生成以下 UI 结构："]}),"\n"]}),"\n",(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:"language-tsx",children:"<Layout>\n  <UserLayout>\n    <UserPage />\n  </UserLayout>\n</Layout>\n"})}),"\n",(0,c.jsxs)(n.p,{children:["总结而言，如果子路由的文件目录下存在 ",(0,c.jsx)(n.code,{children:"layout.tsx"}),"，上一级 ",(0,c.jsx)(n.code,{children:"layout.tsx"})," 中的 ",(0,c.jsx)(n.code,{children:"<Outlet>"})," 即为子路由文件目录下的 ",(0,c.jsx)(n.code,{children:"layout.tsx"})," ，否则为子路由文件目录下的 ",(0,c.jsx)(n.code,{children:"page.tsx"}),"。"]}),"\n",(0,c.jsxs)(n.h4,{id:"page",children:["Page",(0,c.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#page",children:"#"})]}),"\n",(0,c.jsxs)(n.p,{children:["所有的路由，理论上都应该由 ",(0,c.jsx)(n.code,{children:"<Page>"})," 组件结束。在 ",(0,c.jsx)(n.code,{children:"page.tsx"})," 文件内，如果开发者引入 ",(0,c.jsx)(n.code,{children:"<Outlet>"})," 组件，不会有任何效果。"]}),"\n",(0,c.jsxs)(n.h3,{id:"动态路由",children:["动态路由",(0,c.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#动态路由",children:"#"})]}),"\n",(0,c.jsxs)(n.p,{children:["通过 ",(0,c.jsx)(n.code,{children:"[]"})," 命名的文件目录，生成的路由会作为动态路由。例如以下文件目录："]}),"\n",(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:"language-bash",children:"└── routes\n    ├── [id]\n    │   └── page.tsx\n    ├── blog\n    │   └── page.tsx\n    └── page.tsx\n"})}),"\n",(0,c.jsxs)(n.p,{children:[(0,c.jsx)(n.code,{children:"routes/[id]/page.tsx"})," 文件会转为 ",(0,c.jsx)(n.code,{children:"/:id"})," 路由。除了可以确切匹配的 ",(0,c.jsx)(n.code,{children:"/blog"})," 路由，其他所有 ",(0,c.jsx)(n.code,{children:"/xxx"})," 都会匹配到该路由。"]}),"\n",(0,c.jsxs)(n.p,{children:["在组件中，可以通过 ",(0,c.jsx)(n.a,{href:"/apis/app/runtime/router/router#useparams",children:"useParams"})," 获取对应命名的参数。"]}),"\n",(0,c.jsxs)(n.p,{children:["在 loader 中，params 会作为 ",(0,c.jsx)(n.a,{href:"/guides/basic-features/data-fetch#loader-%E5%87%BD%E6%95%B0",children:"loader"})," 的入参，通过 ",(0,c.jsx)(n.code,{children:"params.xxx"})," 可以获取。"]}),"\n",(0,c.jsxs)(n.h3,{id:"动态可选路由",children:["动态可选路由",(0,c.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#动态可选路由",children:"#"})]}),"\n",(0,c.jsxs)(n.p,{children:["通过 ",(0,c.jsx)(n.code,{children:"[$]"})," 命名的文件目录，生成的路由会作为动态可选路由。例如以下文件目录："]}),"\n",(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:"language-bash",children:"└── routes\n    ├── user\n    │   └── [id$]\n    │       └── page.tsx\n    ├── blog\n    │   └── page.tsx\n    └── page.tsx\n"})}),"\n",(0,c.jsxs)(n.p,{children:[(0,c.jsx)(n.code,{children:"routes/user/[id$]/page.tsx"})," 文件会转为 ",(0,c.jsx)(n.code,{children:"/user/:id?"})," 路由。",(0,c.jsx)(n.code,{children:"/user"})," 下的所有路由都会匹配到该路由，并且 ",(0,c.jsx)(n.code,{children:"id"})," 参数可选存在。通常在区分",(0,c.jsx)(n.strong,{children:"创建"}),"于",(0,c.jsx)(n.strong,{children:"编辑"}),"时，可以使用该路由。"]}),"\n",(0,c.jsxs)(n.p,{children:["在组件中，可以通过 ",(0,c.jsx)(n.a,{href:"/apis/app/runtime/router/router#useparams",children:"useParams"})," 获取对应命名的参数。"]}),"\n",(0,c.jsxs)(n.p,{children:["在 loader 中，params 会作为 ",(0,c.jsx)(n.a,{href:"/guides/basic-features/data-fetch#loader-%E5%87%BD%E6%95%B0",children:"loader"})," 的入参，通过 ",(0,c.jsx)(n.code,{children:"params.xxx"})," 可以获取。"]}),"\n",(0,c.jsxs)(n.h3,{id:"通配路由",children:["通配路由",(0,c.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#通配路由",children:"#"})]}),"\n",(0,c.jsxs)(n.p,{children:["如果在 routes 目录下创建 ",(0,c.jsx)(n.code,{children:"$.tsx"})," 文件，该文件会作为通配路由组件，当没有匹配的路由时，会渲染该路由组件。"]}),"\n",(0,c.jsxs)(n.div,{className:"modern-directive note",children:[(0,c.jsx)(n.div,{className:"modern-directive-title",children:"NOTE"}),(0,c.jsx)(n.div,{className:"modern-directive-content",children:(0,c.jsxs)(n.p,{children:[(0,c.jsx)(n.code,{children:"$.tsx"})," 可以认为是一种特殊的 ",(0,c.jsx)(n.code,{children:"page"})," 路由组件，当前目录下有 ",(0,c.jsx)(n.code,{children:"layout"})," 组件时，",(0,c.jsx)(n.code,{children:"$.tsx"}),"，会作为 ",(0,c.jsx)(n.code,{children:"layout"})," 的子组件渲染。\n"]})})]}),"\n",(0,c.jsx)(n.p,{children:"例如以下目录结构："}),"\n",(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:"language-bash",children:"└── routes\n    ├── $.tsx\n    ├── blog\n    │   └── page.tsx\n    └── page.tsx\n"})}),"\n",(0,c.jsxs)(n.p,{children:["当访问任何匹配不到的路径时，都会渲染 ",(0,c.jsx)(n.code,{children:"routes/$.tsx"})," 组件，同样，",(0,c.jsx)(n.code,{children:"$.tsx"})," 中可以使用 ",(0,c.jsx)(n.a,{href:"/apis/app/runtime/router/router#useparams",children:"useParams"})," 捕获 url 的剩余部分。"]}),"\n",(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:"language-ts",meta:'title="$.tsx"',children:"import { useParams } from '@modern-js/runtime/router';\n// 当 path 是 `/aaa/bbb` 时\nconst params = useParams();\nparams['*']; // => 'aaa/bbb'\n"})}),"\n",(0,c.jsxs)(n.p,{children:[(0,c.jsx)(n.code,{children:"$.tsx"})," 可以加入到 ",(0,c.jsx)(n.code,{children:"routes"})," 目录下的任意目录中，一个常见的使用示例是添加 ",(0,c.jsx)(n.code,{children:"routes/$.tsx"})," 文件去定制任意层级的 404 页面。"]}),"\n",(0,c.jsxs)(n.h3,{id:"无路径布局",children:["无路径布局",(0,c.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#无路径布局",children:"#"})]}),"\n",(0,c.jsx)(n.p,{children:"当目录名以 __ 开头时，对应的目录名不会转换为实际的路由路径，例如以下文件目录："}),"\n",(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:"language-bash",children:".\n└── routes\n    ├── __auth\n    │   ├── layout.tsx\n    │   ├── login\n    │   │   └── page.tsx\n    │   └── signup\n    │       └── page.tsx\n    ├── layout.tsx\n    └── page.tsx\n"})}),"\n",(0,c.jsxs)(n.p,{children:["Modern.js 会生成 ",(0,c.jsx)(n.code,{children:"/login"})," 和 ",(0,c.jsx)(n.code,{children:"/sign"})," 两条路由，",(0,c.jsx)(n.code,{children:"__auth/layout.tsx"})," 组件会作为 ",(0,c.jsx)(n.code,{children:"login/page.tsx"})," 和 ",(0,c.jsx)(n.code,{children:"signup/page.tsx"})," 的布局组件，但",(0,c.jsx)(n.code,{children:"__auth"})," 不会作为路由路径片段。"]}),"\n",(0,c.jsx)(n.p,{children:"当需要为某些类型的路由，做独立的布局，或是想要将路由做归类时，这一功能非常有用。"}),"\n",(0,c.jsxs)(n.h3,{id:"无布局路径",children:["无布局路径",(0,c.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#无布局路径",children:"#"})]}),"\n",(0,c.jsx)(n.p,{children:"有些情况下，项目需要较为复杂的路由，但这些路由又不存在独立的 UI 布局，如果像普通文件目录那边创建路由会导致目录层级较深。"}),"\n",(0,c.jsxs)(n.p,{children:["因此 Modern.js 支持了通过 ",(0,c.jsx)(n.code,{children:"."})," 来分割路由片段，代替文件目录。例如，当需要 ",(0,c.jsx)(n.code,{children:"/user/profile/2022/edit"})," 时，可以直接创建如下文件："]}),"\n",(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:"language-bash",children:"└── routes\n    ├── user.profile.[id].edit\n    │      └── page.tsx\n    ├── layout.tsx\n    └── page.tsx\n"})}),"\n",(0,c.jsx)(n.p,{children:"访问路由时，将得到如下 UI 布局："}),"\n",(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:"language-tsx",children:"<RootLayout>\n  <UserProfileEdit /> // routes/user.profile.[id].edit/page.tsx\n</RootLayout>\n"})}),"\n",(0,c.jsxs)(n.h3,{id:"(wip)loading",children:["(WIP)Loading",(0,c.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#(wip)loading",children:"#"})]}),"\n",(0,c.jsxs)(n.p,{children:[(0,c.jsx)(n.code,{children:"routes/"})," 下每一层目录中，开发者可以创建 ",(0,c.jsx)(n.code,{children:"loading.tsx"})," 文件，默认导出一个 ",(0,c.jsx)(n.code,{children:"<Loading>"})," 组件。"]}),"\n",(0,c.jsxs)(n.p,{children:["当路由目录下存在该组件和 ",(0,c.jsx)(n.code,{children:"layout"})," 组件时，这一级子路由下所有的路由切换时，都会以该 ",(0,c.jsx)(n.code,{children:"<Loading>"})," 组件作为 JS Chunk 加载时的 Fallback UI。例如以下文件目录："]}),"\n",(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:"language-bash",children:".\n└── routes\n    ├── blog\n    │   ├── [id]\n    │   │   └── page.tsx\n    │   └── page.tsx\n    ├── layout.tsx\n    ├── loading.tsx\n    └── page.tsx\n"})}),"\n",(0,c.jsxs)(n.p,{children:["当定义 ",(0,c.jsx)(n.code,{children:"loading.tsx"})," 时，就相当于以下布局："]}),"\n",(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:"language-tsx",meta:'title=当路由为"/"时',children:"<Layout>\n  <Suspense fallback={<Loading />}>\n    <Page />\n  </Suspense>\n</Layout>\n"})}),"\n",(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:"language-tsx",meta:'title=当路由为"/blog"时',children:"<Layout>\n  <Suspense fallback={<Loading />}>\n    <BlogPage />\n  </Suspense>\n</Layout>\n"})}),"\n",(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:"language-tsx",meta:'title=当路由为"/blog/123"时',children:"<Layout>\n  <Suspense fallback={<Loading />}>\n    <BlogIdPage />\n  </Suspense>\n</Layout>\n"})}),"\n",(0,c.jsxs)(n.div,{className:"modern-directive info",children:[(0,c.jsx)(n.div,{className:"modern-directive-title",children:"INFO"}),(0,c.jsxs)(n.div,{className:"modern-directive-content",children:[(0,c.jsx)(n.p,{children:"当目录的 Layout 组件不存在时，该目录下的 Loading 组件也不会生效。"}),(0,c.jsx)(n.p,{children:"Modern.js 建议必须有根 Layout 和根 Loading。"}),"\n"]})]}),"\n",(0,c.jsxs)(n.p,{children:["当路由从 ",(0,c.jsx)(n.code,{children:"/"})," 跳转到 ",(0,c.jsx)(n.code,{children:"/blog"})," 时，如果 ",(0,c.jsx)(n.code,{children:"blog/page"})," 组件的 JS Chunk 还未加载，则会先展示 ",(0,c.jsx)(n.code,{children:"loading.tsx"})," 中导出的组件 UI。"]}),"\n",(0,c.jsxs)(n.p,{children:["同理，当路由从 ",(0,c.jsx)(n.code,{children:"/"})," 或者 ",(0,c.jsx)(n.code,{children:"/blog"})," 跳转到 ",(0,c.jsx)(n.code,{children:"/blog/123"})," 时，如果 ",(0,c.jsx)(n.code,{children:"blog/[id]/page"})," 组件的 JS Chunk 还未加载，也会先展示 ",(0,c.jsx)(n.code,{children:"loading.tsx"})," 中导出的组件 UI。"]}),"\n",(0,c.jsxs)(n.h3,{id:"路由重定向",children:["路由重定向",(0,c.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#路由重定向",children:"#"})]}),"\n",(0,c.jsxs)(n.p,{children:["可以通过创建 ",(0,c.jsx)(n.a,{href:"/guides/basic-features/data-fetch",children:(0,c.jsx)(n.code,{children:"Data Loader"})})," 文件做路由的重定向，如有文件 ",(0,c.jsx)(n.code,{children:"routes/user/page.tsx"}),"，想对这个文件对应的路由做重定向，可以创建 ",(0,c.jsx)(n.code,{children:"routes/user/page.loader.ts"})," 文件："]}),"\n",(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:"language-ts",meta:'title="routes/user/page.loader.ts"',children:"import { redirect } from '@modern-js/runtime/router';\n\nexport default () => {\n  const user = await getUser();\n  if (!user) {\n    return redirect('/login');\n  }\n  return null;\n};\n"})}),"\n",(0,c.jsxs)(n.h3,{id:"错误处理",children:["错误处理",(0,c.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#错误处理",children:"#"})]}),"\n",(0,c.jsxs)(n.p,{children:[(0,c.jsx)(n.code,{children:"routes/"})," 下每一层目录中，开发者同样可以定义一个 ",(0,c.jsx)(n.code,{children:"error.tsx"})," 文件，默认导出一个 ",(0,c.jsx)(n.code,{children:"<ErrorBoundary>"})," 组件。"]}),"\n",(0,c.jsxs)(n.p,{children:["当有路由目录下存在该组件时，组件渲染出错会被 ",(0,c.jsx)(n.code,{children:"ErrorBoundary"})," 组件捕获。当目录未定义 ",(0,c.jsx)(n.code,{children:"layout.tsx"})," 文件时，",(0,c.jsx)(n.code,{children:"<ErrorBoundary>"})," 组件不会生效。"]}),"\n",(0,c.jsxs)(n.p,{children:[(0,c.jsx)(n.code,{children:"<ErrorBoundary>"})," 可以返回出错时的 UI 视图，当前层级未声明 ",(0,c.jsx)(n.code,{children:"<ErrorBoundary>"})," 组件时，错误会向上冒泡到更上层的组件，直到被捕获或抛出错误。同时，当组件出错时，只会影响捕获到该错误的路由组件及子组件，其他组件的状态和视图不受影响，可以继续交互。"]}),"\n","\n",(0,c.jsxs)(n.p,{children:["在 ",(0,c.jsx)(n.code,{children:"<ErrorBoundary>"})," 组件内，可以使用 ",(0,c.jsx)(n.a,{href:"/apis/app/runtime/router/router#userouteerror",children:"useRouteError"})," 获取的错误的具体信息："]}),"\n",(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:"language-tsx",children:"import { useRouteError } from '@modern-js/runtime/router';\nconst ErrorBoundary = () => {\n  const error = useRouteError();\n  return (\n    <div>\n      <h1>{error.status}</h1>\n      <h2>{error.message}</h2>\n    </div>\n  );\n};\nexport default ErrorBoundary;\n"})}),"\n",(0,c.jsxs)(n.h3,{id:"运行时配置",children:["运行时配置",(0,c.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#运行时配置",children:"#"})]}),"\n",(0,c.jsxs)(n.p,{children:["在每个根 ",(0,c.jsx)(n.code,{children:"Layout"})," 组件中(",(0,c.jsx)(n.code,{children:"routes/layout.ts"}),")，可以动态地定义运行时配置："]}),"\n",(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:"language-tsx",meta:'title="src/routes/layout.tsx"',children:"// 定义运行时配置\nimport type { AppConfig } from '@modern-js/runtime';\n\nexport const config = (): AppConfig => {\n  return {\n    router: {\n      createRoutes() {\n        return [\n          {\n            path: 'modern',\n            element: <div>modern</div>,\n          },\n        ];\n      },\n    },\n  };\n};\n"})}),"\n",(0,c.jsxs)(n.h3,{id:"渲染前的钩子",children:["渲染前的钩子",(0,c.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#渲染前的钩子",children:"#"})]}),"\n",(0,c.jsxs)(n.p,{children:["在有些场景下，需要在应用渲染前做一些操作，可以在 ",(0,c.jsx)(n.code,{children:"routes/layout.tsx"})," 中定义 ",(0,c.jsx)(n.code,{children:"init"})," 钩子，",(0,c.jsx)(n.code,{children:"init"})," 在客户端和服务端均会执行，基本使用示例如下："]}),"\n",(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:"language-ts",meta:'title="src/routes/layout.tsx"',children:"import type { RuntimeContext } from '@modern-js/runtime';\n\nexport const init = (context: RuntimeContext) => {\n  // do something\n};\n"})}),"\n",(0,c.jsxs)(n.p,{children:["通过 ",(0,c.jsx)(n.code,{children:"init"})," 钩子可以挂载一些全局的数据，在应用的其他地方可以访问 ",(0,c.jsx)(n.code,{children:"runtimeContext"})," 变量："]}),"\n",(0,c.jsxs)(n.div,{className:"modern-directive note",children:[(0,c.jsx)(n.div,{className:"modern-directive-title",children:"NOTE"}),(0,c.jsxs)(n.div,{className:"modern-directive-content",children:[(0,c.jsx)(n.p,{children:"该功能在应用需要页面前置的数据、自定义数据注入或是框架迁移（如 Next.js）时会非常有用。"}),"\n"]})]}),"\n",(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:"language-ts",meta:'title="src/routes/layout.tsx"',children:"import { RuntimeContext } from '@modern-js/runtime';\n\nexport const init = (context: RuntimeContext) => {\n  return {\n    message: 'Hello World',\n  };\n};\n"})}),"\n",(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:"language-tsx",meta:'title="src/routes/page.tsx"',children:"import { useRuntimeContext } from '@modern-js/runtime';\n\nexport default () => {\n  const { context } = useRuntimeContext();\n  const { message } = context.getInitData();\n\n  return <div>{message}</div>;\n};\n"})}),"\n",(0,c.jsxs)(n.p,{children:["配合 SSR 功能时，浏览器端可以获取到 SSR 时 ",(0,c.jsx)(n.code,{children:"init"})," 返回的数据，开发者可以自行判断是否要在浏览器端重新获取数据来覆盖 SSR 数据，例如："]}),"\n",(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:"language-tsx",meta:'title="src/routes/layout.tsx"',children:"import { RuntimeContext } from '@modern-js/runtime';\n\nexport const init = (context: RuntimeContext) => {\n  if (process.env.MODERN_TARGET === 'node') {\n    return {\n      message: 'Hello World By Server',\n    };\n  } else {\n    const { context } = runtimeContext;\n    const data = context.getInitData();\n    // 如果没有获取到期望的数据\n    if (!data.message) {\n      return {\n        message: 'Hello World By Client',\n      };\n    }\n  }\n};\n"})}),"\n",(0,c.jsxs)(n.h3,{id:"预加载",children:["预加载",(0,c.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#预加载",children:"#"})]}),"\n",(0,c.jsxs)(n.p,{children:["在约定式路由下， Modern.js 会根据路由，自动地对路由进行分片，当用户访问具体的路由时，会自动加载对应的分片，这样可以有效地减少首屏加载的时间。但这也带来了一个问题，当用户访问一个路由时，如果该路由对应的分片还未加载完成，就会出现白屏的情况。\n这种情况下你可以通过定义 ",(0,c.jsx)(n.code,{children:"Loading"})," 组件，在静态资源加载完成前，展示一个自定义的 ",(0,c.jsx)(n.code,{children:"Loading"})," 组件。"]}),"\n",(0,c.jsxs)(n.p,{children:["为了进一步提升用户体验，减少 loading 的时间，Modern.js 支持在 Link 组件上定义 ",(0,c.jsx)(n.code,{children:"prefetch"})," 属性，可以提前对静态资源和数据进行加载："]}),"\n",(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:"language-tsx",children:'<Link prefetch="intent" to="page">\n'})}),"\n",(0,c.jsxs)(n.div,{className:"modern-directive info",children:[(0,c.jsx)(n.div,{className:"modern-directive-title",children:"INFO"}),(0,c.jsxs)(n.div,{className:"modern-directive-content",children:["\n",(0,c.jsxs)(n.ul,{children:["\n",(0,c.jsx)(n.li,{children:"该功能目前仅在 Webpack 项目中支持，Rspack 项目暂不支持。"}),"\n",(0,c.jsxs)(n.li,{children:["对数据的预加载目前只会预加载 SSR 项目中 ",(0,c.jsx)(n.a,{href:"/guides/basic-features/data-fetch",children:"Data Loader"})," 中返回的数据。"]}),"\n"]}),"\n"]})]}),"\n",(0,c.jsxs)(n.p,{children:[(0,c.jsx)(n.code,{children:"prefetch"})," 属性有三个可选值："]}),"\n",(0,c.jsxs)(n.ul,{children:["\n",(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:"none"}),"， 默认值，不会做 prefetch，没有任何额外的行为。"]}),"\n",(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:"intent"}),"，这是我们推荐大多数场景下使用的值，当你把鼠标放在 Link 上时，会自动开始加载对应的分片和 Data Loader 中定义的数据，当鼠标移开时，会自动取消加载。在我们的测试中，即使是快速点击，也能减少大约 200ms 的加载时间。"]}),"\n",(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:"render"}),"，当 Link 组件渲染时，就会加载对应的分片和 Data Loader 中定义的数据。"]}),"\n"]}),"\n",(0,c.jsxs)(n.h4,{id:"常见问题",children:["常见问题",(0,c.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#常见问题",children:"#"})]}),"\n",(0,c.jsxs)(n.ol,{children:["\n",(0,c.jsxs)(n.li,{children:["使用 ",(0,c.jsx)(n.code,{children:"render"})," 和不根据路由做静态资源分片的区别？"]}),"\n"]}),"\n",(0,c.jsxs)(n.ul,{children:["\n",(0,c.jsxs)(n.li,{children:["使用 ",(0,c.jsx)(n.code,{children:"render"})," 可以指定哪些路由在首屏时，进行加载，同时你可以通过对渲染的控制，仅当 ",(0,c.jsx)(n.code,{children:"Link"})," 组件进入到可视区域时，才对 ",(0,c.jsx)(n.code,{children:"Link"})," 组件进行渲染。"]}),"\n",(0,c.jsxs)(n.li,{children:["使用 ",(0,c.jsx)(n.code,{children:"render"}),"，仅在空闲时对静态资源进行加载，不会与首屏静态资源抢占网络。"]}),"\n",(0,c.jsx)(n.li,{children:"在 SSR 场景下，也会对数据进行预取。"}),"\n"]}),"\n","\n",(0,c.jsx)(o.default,{}),"\n","\n",(0,c.jsx)(a.default,{}),"\n",(0,c.jsxs)(n.h2,{id:"自控式路由",children:["自控式路由",(0,c.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#自控式路由",children:"#"})]}),"\n",(0,c.jsxs)(n.p,{children:["以 ",(0,c.jsx)(n.code,{children:"src/App.tsx"})," 为约定的入口，Modern.js 不会对路由做额外的操作，开发者可以自行使用 ",(0,c.jsx)(n.a,{href:"https://reactrouter.com/en/main",target:"_blank",rel:"noopener noreferrer",children:"React Router 6"})," 的 API 进行开发，例如："]}),"\n",(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:"language-ts",meta:'title="src/App.tsx"',children:"import { BrowserRouter, Route, Routes } from '@modern-js/runtime/router';\n\nexport default () => {\n  return (\n    <BrowserRouter>\n      <Routes>\n        <Route index element={<div>index</div>} />\n        <Route path=\"about\" element={<div>about</div>} />\n      </Routes>\n    </BrowserRouter>\n  );\n};\n"})}),"\n",(0,c.jsxs)(n.div,{className:"modern-directive note",children:[(0,c.jsx)(n.div,{className:"modern-directive-title",children:"NOTE"}),(0,c.jsx)(n.div,{className:"modern-directive-content",children:(0,c.jsx)(n.p,{children:"Modern.js 默认对约定式路由做了一系列资源加载及渲染上的优化，并且提供了开箱即用的 SSR 能力，而这些能力，在使用自控路由时，都需要开发者自行封装，推荐开发者使用约定式路由。"})})]}),"\n",(0,c.jsxs)(n.h2,{id:"其他路由方案",children:["其他路由方案",(0,c.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#其他路由方案",children:"#"})]}),"\n",(0,c.jsx)(n.p,{children:"默认情况下，Modern.js 会开启内置的路由方案，即 React Router。"}),"\n",(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:"language-js",children:"export default defineConfig({\n  runtime: {\n    router: true,\n  },\n});\n"})}),"\n",(0,c.jsxs)(n.p,{children:["如上述配置，当开启 ",(0,c.jsx)(n.a,{href:"/configure/app/runtime/router",children:(0,c.jsx)(n.code,{children:"runtime.router"})})," 配置时，Modern.js 会从 ",(0,c.jsx)(n.code,{children:"@modern-js/runtime/router"})," 命名空间导出 React Router 的 API 供开发者使用，保证开发者和 Modern.js 中使用同一份代码，并自动根据 router 配置包裹 ",(0,c.jsx)(n.code,{children:"Provider"})," 组件。另外，这种情况下，React Router 的代码会被打包到 JS 产物中。"]}),"\n",(0,c.jsx)(n.p,{children:"如果项目已经有自己的路由方案，或者不需要使用客户端路由，可以关闭这个功能。"}),"\n",(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:"language-js",children:"export default defineConfig({\n  runtime: {\n    router: false,\n  },\n});\n"})}),"\n",(0,c.jsxs)(n.p,{children:["如上述配置， 如果关闭了 ",(0,c.jsx)(n.a,{href:"/configure/app/runtime/router",children:(0,c.jsx)(n.code,{children:"runtime.router"})})," 配置，并直接使用 ",(0,c.jsx)(n.code,{children:"react-router-dom"})," 进行项目路由管理时，还需要根据 React Router 文档自行包裹 ",(0,c.jsx)(n.code,{children:"Provider"}),"。"]})]})}(s=globalThis).__RSPRESS_PAGE_META||(s.__RSPRESS_PAGE_META={}),globalThis.__RSPRESS_PAGE_META["%2Fhome%2Frunner%2Fwork%2Fmodern.js%2Fmodern.js%2Fpackages%2Fdocument%2Fmain-doc%2Fdocs%2Fzh%2Fguides%2Fbasic-features%2Froutes.mdx"]={toc:[{text:"约定式路由",id:"约定式路由",depth:2},{text:"路由文件约定",id:"路由文件约定",depth:3},{text:"Layout",id:"layout",depth:4},{text:"Page",id:"page",depth:4},{text:"动态路由",id:"动态路由",depth:3},{text:"动态可选路由",id:"动态可选路由",depth:3},{text:"通配路由",id:"通配路由",depth:3},{text:"无路径布局",id:"无路径布局",depth:3},{text:"无布局路径",id:"无布局路径",depth:3},{text:"(WIP)Loading",id:"(wip)loading",depth:3},{text:"路由重定向",id:"路由重定向",depth:3},{text:"错误处理",id:"错误处理",depth:3},{text:"运行时配置",id:"运行时配置",depth:3},{text:"渲染前的钩子",id:"渲染前的钩子",depth:3},{text:"预加载",id:"预加载",depth:3},{text:"常见问题",id:"常见问题",depth:4},{text:"自控式路由",id:"自控式路由",depth:2},{text:"其他路由方案",id:"其他路由方案",depth:2}],title:"路由",frontmatter:{title:"路由",sidebar_position:1}};var h=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=Object.assign({},(0,i.useMDXComponents)(),e.components).wrapper;return n?(0,c.jsx)(n,t._(d._({},e),{children:(0,c.jsx)(l,d._({},e))})):l(e)}}}]);