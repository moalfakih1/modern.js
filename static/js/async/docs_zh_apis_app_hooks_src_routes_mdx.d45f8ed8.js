(self.webpackChunk_modern_js_main_doc=self.webpackChunk_modern_js_main_doc||[]).push([["docs_zh_apis_app_hooks_src_routes_mdx"],{41314:function(e,n,s){"use strict";Object.defineProperty(n,"__esModule",{value:!0});!function(e,n){for(var s in n)Object.defineProperty(e,s,{enumerable:!0,get:n[s]})}(n,{frontmatter:function(){return d},title:function(){return c},toc:function(){return i},default:function(){return l}});var r=s("9880"),t=s("23169"),d={title:"routes/",sidebar_position:2},c="routes/",i=[{text:"基本示例",depth:2,id:"基本示例"},{text:"动态路由",depth:2,id:"动态路由"},{text:"布局组件",depth:2,id:"布局组件"}];function a(e){var n=Object.assign({h1:"h1",a:"a",p:"p",code:"code",pre:"pre",h2:"h2",ul:"ul",li:"li",div:"div"},(0,t.useMDXComponents)(),e.components);return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(n.h1,{id:"routes/",children:["routes/",(0,r.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#routes/",children:"#"})]}),"\n",(0,r.jsxs)(n.p,{children:["应用使用",(0,r.jsx)(n.a,{href:"/guides/basic-features/routes#%E7%BA%A6%E5%AE%9A%E5%BC%8F%E8%B7%AF%E7%94%B1",children:"约定式路由"}),"时的入口标识。"]}),"\n",(0,r.jsxs)(n.p,{children:["约定式路由以 ",(0,r.jsx)(n.code,{children:"routes/"})," 为约定的入口， 会分析 ",(0,r.jsx)(n.code,{children:"src/routes"})," 目录下的文件得到客户端路由配置。"]}),"\n",(0,r.jsxs)(n.p,{children:["任何在 ",(0,r.jsx)(n.code,{children:"src/routes"})," 下的 ",(0,r.jsx)(n.code,{children:"layout.[tj]sx"})," 和 ",(0,r.jsx)(n.code,{children:"page.[tj]sx"})," 都会作为应用的路由："]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",meta:"{3,4}",children:".\n└── routes\n    ├── layout.tsx\n    ├── page.tsx\n    └── user\n        ├── layout.tsx\n        └── page.tsx\n"})}),"\n",(0,r.jsxs)(n.h2,{id:"基本示例",children:["基本示例",(0,r.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#基本示例",children:"#"})]}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.code,{children:"routes"})," 目录下的目录名会作为路由 url 的映射，其中 ",(0,r.jsx)(n.code,{children:"layout.tsx"})," 中作为布局组件，",(0,r.jsx)(n.code,{children:"page.tsx"})," 作为内容组件，是整条路由的叶子节点，例如以下目录结构："]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:".\n└── routes\n    ├── page.tsx\n    └── user\n        └── page.tsx\n"})}),"\n",(0,r.jsx)(n.p,{children:"会产出下面两条路由："}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:(0,r.jsx)(n.code,{children:"/"})}),"\n",(0,r.jsx)(n.li,{children:(0,r.jsx)(n.code,{children:"/user"})}),"\n"]}),"\n",(0,r.jsxs)(n.h2,{id:"动态路由",children:["动态路由",(0,r.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#动态路由",children:"#"})]}),"\n",(0,r.jsxs)(n.p,{children:["如果路由文件的目录名以 ",(0,r.jsx)(n.code,{children:"[]"})," 命名，生成的路由会作为动态路由。例如以下文件目录："]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{children:"└── routes\n    ├── [id]\n    │   └── page.tsx\n    ├── blog\n    │   └── page.tsx\n    └── page.tsx\n"})}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.code,{children:"routes/[id]/page.tsx"})," 文件会转为 ",(0,r.jsx)(n.code,{children:"/:id"})," 路由。除了可以确切匹配的 ",(0,r.jsx)(n.code,{children:"/blog"})," 路由，其他所有 ",(0,r.jsx)(n.code,{children:"/xxx"})," 都会匹配到该路由。"]}),"\n",(0,r.jsxs)(n.p,{children:["在组件中，可以通过 ",(0,r.jsx)(n.a,{href:"/apis/app/runtime/router/router#useparams",children:"useParams"})," 获取对应命名的参数。"]}),"\n",(0,r.jsxs)(n.p,{children:["在使用 ",(0,r.jsx)(n.a,{href:"/guides/basic-features/data-fetch#loader-%E5%87%BD%E6%95%B0",children:"loader"})," 函数获取数据时，",(0,r.jsx)(n.code,{children:"params"})," 会作为 ",(0,r.jsx)(n.code,{children:"loader"})," 函数的入参，通过 ",(0,r.jsx)(n.code,{children:"params"})," 的属性可以获取到对应的参数。"]}),"\n",(0,r.jsxs)(n.h2,{id:"布局组件",children:["布局组件",(0,r.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#布局组件",children:"#"})]}),"\n",(0,r.jsxs)(n.p,{children:["如下面的例子，可以通过添加 ",(0,r.jsx)(n.code,{children:"layout.tsx"}),"，为所有路由组件添加公共的布局组件："]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:".\n└── routes\n    ├── layout.tsx\n    ├── page.tsx\n    └── user\n        ├── layout.tsx\n        └── page.tsx\n"})}),"\n",(0,r.jsxs)(n.p,{children:["在布局组件中可以通过使用 ",(0,r.jsx)(n.code,{children:"<Outlet>"})," 表示子组件："]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-tsx",meta:"title=routes/layout.tsx",children:"import { Link, Outlet, useLoaderData } from '@modern-js/runtime/router';\n\nexport default () => {\n  return (\n    <>\n      <Outlet></Outlet>\n    </>\n  );\n};\n"})}),"\n",(0,r.jsxs)(n.div,{className:"modern-directive note",children:[(0,r.jsx)(n.div,{className:"modern-directive-title",children:"NOTE"}),(0,r.jsxs)(n.div,{className:"modern-directive-content",children:[(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.code,{children:"<Outlet>"})," 是 React Router 6 中新的 API，详情可以查看 ",(0,r.jsx)(n.a,{href:"https://reactrouter.com/en/main/components/outlet#outlet",target:"_blank",rel:"noopener noreferrer",children:"Outlet"}),"."]}),"\n"]})]})]})}var l=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=Object.assign({},(0,t.useMDXComponents)(),e.components).wrapper;return n?(0,r.jsx)(n,Object.assign({},e,{children:(0,r.jsx)(a,e)})):a(e)}}}]);