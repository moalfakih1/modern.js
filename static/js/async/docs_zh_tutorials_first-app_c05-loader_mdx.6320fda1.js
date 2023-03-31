(self.webpackChunkwebpack=self.webpackChunkwebpack||[]).push([["docs_zh_tutorials_first-app_c05-loader_mdx"],{65244:function(e,n,a){"use strict";Object.defineProperty(n,"__esModule",{value:!0});!function(e,n){for(var a in n)Object.defineProperty(e,a,{enumerable:!0,get:n[a]})}(n,{frontmatter:function(){return t},title:function(){return d},toc:function(){return c},default:function(){return i}});var s=a("12151"),r=a("21447");let t={title:"添加 Loader"},d="添加 Loader",c=[];function o(e){let n=Object.assign({h1:"h1",a:"a",p:"p",strong:"strong",code:"code",div:"div",button:"button",pre:"pre",img:"img"},(0,r.useMDXComponents)(),e.components);return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)(n.h1,{id:"添加-loader",children:["添加 Loader",(0,s.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#添加-loader",children:"#"})]}),"\n",(0,s.jsx)(n.p,{children:"上一章节中，我们学习了如何添加客户端路由。"}),"\n",(0,s.jsxs)(n.p,{children:["这一章节中，我们将会学习如何为",(0,s.jsx)(n.strong,{children:"路由组件添加 Loader"}),"。"]}),"\n",(0,s.jsxs)(n.p,{children:["到目前为止，我们都是通过硬编码的方式，为组件提供数据。如果要从远端获取数据，通常情况下会使用 ",(0,s.jsx)(n.code,{children:"useEffect"})," 来做。但在启用 SSR 的情况下，",(0,s.jsx)(n.code,{children:"useEffect"})," 是不会在服务端执行的，所以这种 SSR 只能渲染很有限的 UI。"]}),"\n",(0,s.jsx)(n.p,{children:"Modern.js 为提供了 Data Loader 的能力，支持同构的在组件中获取数据，让 SSR 的价值最大化。"}),"\n",(0,s.jsx)(n.p,{children:"下面我们演示如何为路由组件添加 Data Loader，并模拟远端数据获取。我们使用 faker 来 mock 需要的数据，首先安装依赖："}),"\n",(0,s.jsx)(n.div,{className:"language-",children:(0,s.jsxs)(n.div,{className:"modern-code-content",children:[(0,s.jsx)(n.button,{className:"copy"}),(0,s.jsx)(n.pre,{className:"code",children:(0,s.jsx)(n.code,{className:"language-bash",children:"pnpm add faker@5\npnpm add @types/faker@5 -D\n"})})]})}),"\n",(0,s.jsxs)(n.p,{children:["创建 ",(0,s.jsx)(n.code,{children:"src/routes/page.loader.ts"}),"："]}),"\n",(0,s.jsx)(n.div,{className:"language-",children:(0,s.jsxs)(n.div,{className:"modern-code-content",children:[(0,s.jsx)(n.button,{className:"copy"}),(0,s.jsx)(n.pre,{className:"code",children:(0,s.jsx)(n.code,{className:"language-tsx",children:"import { name, internet } from 'faker';\n\ntype LoaderData = {\n  code: number;\n  data: {\n    name: string;\n    avatar: string;\n    email: string;\n  }[];\n};\n\nexport default async (): Promise<LoaderData> => {\n  const data = new Array(20).fill(0).map(() => {\n    const firstName = name.firstName();\n    return {\n      name: firstName,\n      avatar: `https://avatars.dicebear.com/api/identicon/${firstName}.svg`,\n      email: internet.email(),\n    };\n  });\n\n  return {\n    code: 200,\n    data,\n  };\n};\n"})})]})}),"\n",(0,s.jsxs)(n.div,{className:"modern-directive note",children:[(0,s.jsx)(n.p,{className:"modern-directive-title",children:"NOTE"}),(0,s.jsxs)(n.div,{className:"modern-directive-content",children:["Data Loader 并非只为 SSR 工作。在 CSR 项目中，Data Loader 也可以避免数据获取依赖 UI 渲染，解决请求瀑布流的问题。未来，Modern.js 也会为这一特性添加更多能力，例如预获取、数据缓存等。","\n"]})]}),"\n",(0,s.jsxs)(n.p,{children:["Modern.js 也提供了一个叫 ",(0,s.jsx)(n.code,{children:"useLoaderData"})," 的 hooks API，我们修改 ",(0,s.jsx)(n.code,{children:"src/routes/page.tsx"})," 导出的组件："]}),"\n",(0,s.jsx)(n.div,{className:"language-",children:(0,s.jsxs)(n.div,{className:"modern-code-content",children:[(0,s.jsx)(n.button,{className:"copy"}),(0,s.jsx)(n.pre,{className:"code",children:(0,s.jsx)(n.code,{className:"language-tsx",meta:"{1,4,13}",children:"import { useLoaderData } from '@modern-js/runtime/router';\n\nfunction Index() {\n  const { data } = useLoaderData() as LoaderData;\n\n  return (\n    <div className=\"container lg mx-auto\">\n      <Helmet>\n        <title>All</title>\n      </Helmet>\n      <List\n        dataSource={data}\n        renderItem={info => <Item key={info.name} info={info} />}\n      />\n    </div>\n  );\n}\n\nexport default Index;\n"})})]})}),"\n","\n",(0,s.jsxs)(n.p,{children:["重新执行 ",(0,s.jsx)(n.code,{children:"pnpm run dev"}),"，查看 ",(0,s.jsx)(n.code,{children:"view-source:http://localhost:8080/"}),"，或在 devtools 的 Network 面板里查看 HTML 请求的「 Preview 」，可以看到 SSR 渲染出来的 HTML 已经包含完整的 UI："]}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.img,{src:"https://lf3-static.bytednsdoc.com/obj/eden-cn/aphqeh7uhohpquloj/modern-js/docs/11/display6.png",alt:"display6"})})]})}var i=function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},{wrapper:n}=Object.assign({},(0,r.useMDXComponents)(),e.components);return n?(0,s.jsx)(n,Object.assign({},e,{children:(0,s.jsx)(o,e)})):o(e)}}}]);