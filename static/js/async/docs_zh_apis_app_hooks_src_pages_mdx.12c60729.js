(self.webpackChunk_modern_js_main_doc=self.webpackChunk_modern_js_main_doc||[]).push([["docs_zh_apis_app_hooks_src_pages_mdx"],{78275:function(e,n,s){"use strict";Object.defineProperty(n,"__esModule",{value:!0});!function(e,n){for(var s in n)Object.defineProperty(e,s,{enumerable:!0,get:n[s]})}(n,{frontmatter:function(){return a},title:function(){return i},toc:function(){return r},default:function(){return o}});var d=s("9880"),c=s("23169"),a={title:"pages/",sidebar_position:3},i="pages/",r=[{text:"动态路由",depth:3,id:"动态路由"},{text:"全局 layout",depth:3,id:"全局-layout"},{text:"部分 layout",depth:3,id:"部分-layout"},{text:"404 路由",depth:3,id:"404-路由"}];function l(e){var n=Object.assign({h1:"h1",a:"a",p:"p",code:"code",div:"div",pre:"pre",ul:"ul",li:"li",h3:"h3"},(0,c.useMDXComponents)(),e.components);return(0,d.jsxs)(d.Fragment,{children:[(0,d.jsxs)(n.h1,{id:"pages/",children:["pages/",(0,d.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#pages/",children:"#"})]}),"\n",(0,d.jsx)(n.p,{children:"应用使用基于文件系统路由时的入口标识。"}),"\n",(0,d.jsxs)(n.p,{children:["当项目结构为 ",(0,d.jsx)(n.code,{children:"Pages 入口"})," 类型时， 会分析 ",(0,d.jsx)(n.code,{children:"src/pages"})," 目录下的文件得到客户端路由配置。"]}),"\n",(0,d.jsx)(n.p,{children:"举例说明，例如以下目录结构："}),"\n",(0,d.jsx)(n.div,{className:"language-",children:(0,d.jsx)(n.div,{className:"modern-code-content",children:(0,d.jsx)(n.pre,{className:"code",children:(0,d.jsx)(n.code,{className:"language-bash",children:".\n└── src\n    └── pages\n        ├── about\n        │   └── index.jsx\n        ├── index.jsx\n        └── info.jsx\n"})})})}),"\n",(0,d.jsx)(n.p,{children:"对应生成的路由配置为:"}),"\n",(0,d.jsx)(n.div,{className:"language-",children:(0,d.jsx)(n.div,{className:"modern-code-content",children:(0,d.jsx)(n.pre,{className:"code",children:(0,d.jsx)(n.code,{className:"language-bash",children:"[\n  { path: '/', component: 'pages/index.jsx' },\n  { path: '/info' component: 'pages/info.jsx' },\n  { path: '/about', component: 'pages/about/index.jsx' }\n]\n"})})})}),"\n",(0,d.jsx)(n.p,{children:"pages 目录下的文件满足以下条件的不会被当做路由文件"}),"\n",(0,d.jsxs)(n.ul,{children:["\n",(0,d.jsxs)(n.li,{children:["后缀不是 ",(0,d.jsx)(n.code,{children:".(j|t)sx?"})," 的文件。"]}),"\n",(0,d.jsxs)(n.li,{children:[(0,d.jsx)(n.code,{children:".d.ts"})," 类型定义文件。"]}),"\n",(0,d.jsxs)(n.li,{children:["以 ",(0,d.jsx)(n.code,{children:".(test|spec|e2e).(j|t)sx?"})," 结尾的测试文件。"]}),"\n"]}),"\n",(0,d.jsxs)(n.div,{className:"modern-directive tip",children:[(0,d.jsx)(n.div,{className:"modern-directive-title",children:"提示"}),(0,d.jsxs)(n.div,{className:"modern-directive-content",children:["\n",(0,d.jsx)(n.p,{children:"推荐 pages 目录下只写入口代码，把业务逻辑写到 pages 外面独立的 features 目录里。这样 pages 目录下大部分文件都会是路由文件，也就不需要额外的过滤规则。"}),"\n"]})]}),"\n",(0,d.jsxs)(n.h3,{id:"动态路由",children:["动态路由",(0,d.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#动态路由",children:"#"})]}),"\n",(0,d.jsxs)(n.p,{children:["使用 ",(0,d.jsx)(n.code,{children:"[ ]"})," 包裹的目录或文件会被视为动态路由"]}),"\n",(0,d.jsx)(n.p,{children:"例如以下目录结构:"}),"\n",(0,d.jsx)(n.div,{className:"language-",children:(0,d.jsx)(n.div,{className:"modern-code-content",children:(0,d.jsx)(n.pre,{className:"code",children:(0,d.jsx)(n.code,{className:"language-bash",children:".\n└── src\n    └── pages\n        ├── [post]\n        │   ├── detail.jsx\n        │   └── index.js\n        ├── users\n        │   └── [id].jsx\n        ├── index.jsx\n        └── info.jsx\n"})})})}),"\n",(0,d.jsx)(n.p,{children:"对应生成的路由配置为:"}),"\n",(0,d.jsx)(n.div,{className:"language-",children:(0,d.jsx)(n.div,{className:"modern-code-content",children:(0,d.jsx)(n.pre,{className:"code",children:(0,d.jsx)(n.code,{className:"language-js",children:"[\n  { path: '/', component: 'pages/index.jsx' },\n  { path: '/info', component: 'pages/info.jsx' },\n  { path: '/:post/', component: 'pages/[post]/index.js' },\n  { path: '/:post/detail' components: 'pages/[post]/detail.jsx'},\n  { path: '/users/:id', components: 'pages/users/[id].jsx'}\n]\n"})})})}),"\n",(0,d.jsxs)(n.p,{children:["动态路由的基础上，支持添加特殊的路由后缀 ",(0,d.jsx)(n.code,{children:"(*、?、+)"}),"。"]}),"\n",(0,d.jsxs)(n.p,{children:["例如：",(0,d.jsx)(n.code,{children:"src/pages/users/[id]*.tsx"})," 最终路由为 ",(0,d.jsx)(n.code,{children:"/users/:id*"})]}),"\n",(0,d.jsxs)(n.h3,{id:"全局-layout",children:["全局 layout",(0,d.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#全局-layout",children:"#"})]}),"\n",(0,d.jsxs)(n.p,{children:["整个应用需要全局的 ",(0,d.jsx)(n.code,{children:"layout"})," 时， 可以通过 ",(0,d.jsx)(n.code,{children:"pages/_app.tsx"})," 实现，具体写法如下:"]}),"\n",(0,d.jsx)(n.div,{className:"language-",children:(0,d.jsx)(n.div,{className:"modern-code-content",children:(0,d.jsx)(n.pre,{className:"code",children:(0,d.jsx)(n.code,{className:"language-js",children:"import React from 'react';\nimport UserLayout from 'xxxx';\n\nexport const App = ({Component, ...pageProps}:{ Component: React.ComponentType}) => {\n  return (\n    <UserLayout>\n      <Component {...pageProps} />\n    </UserLayout>\n  );\n}\n"})})})}),"\n",(0,d.jsxs)(n.p,{children:["上述 ",(0,d.jsx)(n.code,{children:"Component"})," 为访问具体路由匹配到的组件。"]}),"\n",(0,d.jsx)(n.p,{children:"例如以下目录结构:"}),"\n",(0,d.jsx)(n.div,{className:"language-",children:(0,d.jsx)(n.div,{className:"modern-code-content",children:(0,d.jsx)(n.pre,{className:"code",children:(0,d.jsx)(n.code,{className:"language-bash",children:".\n└── pages\n    ├── a\n    │   ├── b\n    │   │   └── index.js\n    │   └── index.js\n    └── index.js\n"})})})}),"\n",(0,d.jsxs)(n.ul,{children:["\n",(0,d.jsxs)(n.li,{children:["访问 ",(0,d.jsx)(n.code,{children:"/"})," 时，对应的 ",(0,d.jsx)(n.code,{children:"Component"})," 组件为 ",(0,d.jsx)(n.code,{children:"pages/index.js"}),"。"]}),"\n",(0,d.jsxs)(n.li,{children:["访问 ",(0,d.jsx)(n.code,{children:"/a"})," 时，对应的 ",(0,d.jsx)(n.code,{children:"Component"})," 组件为 ",(0,d.jsx)(n.code,{children:"pages/a/index.js"}),"。"]}),"\n",(0,d.jsxs)(n.li,{children:["访问 ",(0,d.jsx)(n.code,{children:"/a/b"})," 时，对应的 ",(0,d.jsx)(n.code,{children:"Component"})," 组件为 ",(0,d.jsx)(n.code,{children:"pages/a/b/index.js"}),"。"]}),"\n"]}),"\n",(0,d.jsxs)(n.div,{className:"modern-directive tip",children:[(0,d.jsx)(n.div,{className:"modern-directive-title",children:"全局 layout 有以下优点"}),(0,d.jsxs)(n.div,{className:"modern-directive-content",children:["\n",(0,d.jsxs)(n.ul,{children:["\n",(0,d.jsx)(n.li,{children:"页面变化时，保留全局布局的状态"}),"\n",(0,d.jsx)(n.li,{children:"添加全局样式"}),"\n",(0,d.jsx)(n.li,{children:"ComponentDidCatch 错误处理"}),"\n",(0,d.jsxs)(n.li,{children:["使用 ",(0,d.jsx)(n.a,{href:"/apis/app/runtime/app/define-config",children:"defineConfig"})," 动态配置运行时配置。"]}),"\n"]}),"\n"]})]}),"\n",(0,d.jsxs)(n.h3,{id:"部分-layout",children:["部分 layout",(0,d.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#部分-layout",children:"#"})]}),"\n",(0,d.jsx)(n.p,{children:"开发应用时，存在同一路由下的子路由共用 layout 的场景。"}),"\n",(0,d.jsxs)(n.p,{children:["针对这一场景，Modern.js 约定，当目录下存在 ",(0,d.jsx)(n.code,{children:"_layout.js"})," ，就会有类似全局 layout 的效果。"]}),"\n",(0,d.jsx)(n.p,{children:"例如以下目录结构:"}),"\n",(0,d.jsx)(n.div,{className:"language-",children:(0,d.jsx)(n.div,{className:"modern-code-content",children:(0,d.jsx)(n.pre,{className:"code",children:(0,d.jsx)(n.code,{className:"language-bash",children:"└── pages\n    ├── a\n    │   ├── b\n    │   │   └── index.js\n    │   ├── _layout.js\n    │   └── index.js\n    └── index.js\n"})})})}),"\n",(0,d.jsxs)(n.div,{className:"language-",children:[(0,d.jsx)(n.div,{className:"modern-code-title",children:"pages/a/_layout.js"}),(0,d.jsx)(n.div,{className:"modern-code-content",children:(0,d.jsx)(n.pre,{className:"code",children:(0,d.jsx)(n.code,{className:"language-js",meta:'title="pages/a/_layout.js"',children:"import React from 'react';\n\nconst ALayout = ({ Component, ...pageProps }) => {\n  return <Component {...pageProps} />;\n};\nexport default ALayout;\n"})})})]}),"\n",(0,d.jsx)(n.p,{children:"Component 参数为访问具体路由对应的组件，例如"}),"\n",(0,d.jsxs)(n.ul,{children:["\n",(0,d.jsxs)(n.li,{children:["访问 ",(0,d.jsx)(n.code,{children:"/a"})," 时，对应的 ",(0,d.jsx)(n.code,{children:"Component"})," 组件为 ",(0,d.jsx)(n.code,{children:"pages/a/index.js"}),"。"]}),"\n",(0,d.jsxs)(n.li,{children:["访问 ",(0,d.jsx)(n.code,{children:"/a/b"})," 时，对应的 ",(0,d.jsx)(n.code,{children:"Component"})," 组件为 ",(0,d.jsx)(n.code,{children:"pages/a/b/index.js"}),"。"]}),"\n"]}),"\n",(0,d.jsxs)(n.p,{children:["这样就可以用 ",(0,d.jsx)(n.code,{children:"pages/a/_layout.js"})," 满足 ",(0,d.jsx)(n.code,{children:"a"})," 目录下路由共用 layout 的需求。"]}),"\n",(0,d.jsxs)(n.h3,{id:"404-路由",children:["404 路由",(0,d.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#404-路由",children:"#"})]}),"\n",(0,d.jsxs)(n.p,{children:["约定 ",(0,d.jsx)(n.code,{children:"pages/404.[tj]sx"})," 为默认的 404 路由。"]}),"\n",(0,d.jsx)(n.p,{children:"例如以下目录结构:"}),"\n",(0,d.jsx)(n.div,{className:"language-",children:(0,d.jsx)(n.div,{className:"modern-code-content",children:(0,d.jsx)(n.pre,{className:"code",children:(0,d.jsx)(n.code,{className:"language-bash",children:".\n└── src\n    └── pages\n        ├── user.js\n        ├── home.js\n        ├── 404.js\n"})})})}),"\n",(0,d.jsx)(n.p,{children:"生成路由配置如下:"}),"\n",(0,d.jsx)(n.div,{className:"language-",children:(0,d.jsx)(n.div,{className:"modern-code-content",children:(0,d.jsx)(n.pre,{className:"code",children:(0,d.jsx)(n.code,{className:"language-bash",children:"[\n { path: '/user', component: './pages/user.js'},\n { path: '/home', component: './pages/home.js' },\n { path: '*', component: './pages/404.js'}\n]\n"})})})}),"\n",(0,d.jsxs)(n.p,{children:["所有未匹配的路由，都将匹配到 ",(0,d.jsx)(n.code,{children:"pages/404.[tj]s"}),"。"]})]})}var o=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=Object.assign({},(0,c.useMDXComponents)(),e.components).wrapper;return n?(0,d.jsx)(n,Object.assign({},e,{children:(0,d.jsx)(l,e)})):l(e)}}}]);