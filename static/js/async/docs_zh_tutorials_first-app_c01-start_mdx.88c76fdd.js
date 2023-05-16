(self.webpackChunk_modern_js_main_doc=self.webpackChunk_modern_js_main_doc||[]).push([["docs_zh_tutorials_first-app_c01-start_mdx"],{34383:function(e,n,s){"use strict";Object.defineProperty(n,"__esModule",{value:!0});!function(e,n){for(var s in n)Object.defineProperty(e,s,{enumerable:!0,get:n[s]})}(n,{frontmatter:function(){return i},title:function(){return l},toc:function(){return o},default:function(){return m}});var a=s("9880"),r=s("23169"),c=s.ir(s("19286")),d=s.ir(s("5707")),t=s.ir(s("15119")),i={title:"创建项目"},l="创建项目",o=[{text:"环境准备",depth:2,id:"环境准备"},{text:"初始化项目",depth:2,id:"初始化项目"},{text:"调试项目",depth:2,id:"调试项目"},{text:"修改代码",depth:2,id:"修改代码"},{text:"开启 SSR",depth:2,id:"开启-ssr"}];function h(e){var n=Object.assign({h1:"h1",a:"a",p:"p",h2:"h2",div:"div",pre:"pre",code:"code",img:"img"},(0,r.useMDXComponents)(),e.components);return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsxs)(n.h1,{id:"创建项目",children:["创建项目",(0,a.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#创建项目",children:"#"})]}),"\n",(0,a.jsx)(n.p,{children:"从这一章节开始，我们将进入实战教程部分。在实战教程中，我们将会从环境准备开始，从简单到复杂，一步一步搭建一个真实的项目。"}),"\n",(0,a.jsxs)(n.h2,{id:"环境准备",children:["环境准备",(0,a.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#环境准备",children:"#"})]}),"\n","\n",(0,a.jsx)(c.default,{}),"\n",(0,a.jsxs)(n.h2,{id:"初始化项目",children:["初始化项目",(0,a.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#初始化项目",children:"#"})]}),"\n",(0,a.jsx)(n.p,{children:"我们创建新的目录，通过命令行工具初始化项目："}),"\n",(0,a.jsx)(n.div,{className:"language-",children:(0,a.jsx)(n.div,{className:"modern-code-content",children:(0,a.jsx)(n.pre,{className:"code",children:(0,a.jsx)(n.code,{className:"language-bash",children:"mkdir myapp && cd myapp\nnpx @modern-js/create\n"})})})}),"\n","\n",(0,a.jsx)(d.default,{}),"\n",(0,a.jsxs)(n.h2,{id:"调试项目",children:["调试项目",(0,a.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#调试项目",children:"#"})]}),"\n","\n",(0,a.jsx)(t.default,{}),"\n",(0,a.jsxs)(n.h2,{id:"修改代码",children:["修改代码",(0,a.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#修改代码",children:"#"})]}),"\n",(0,a.jsx)(n.p,{children:"我们将原本的示例代码删除，替换成一个简单的联系人列表："}),"\n",(0,a.jsxs)(n.div,{className:"language-",children:[(0,a.jsx)(n.div,{className:"modern-code-title",children:"src/routes/page.tsx"}),(0,a.jsx)(n.div,{className:"modern-code-content",children:(0,a.jsx)(n.pre,{className:"code",children:(0,a.jsx)(n.code,{className:"language-tsx",meta:'title="src/routes/page.tsx"',children:"const getAvatar = (users: Array<{ name: string; email: string }>) =>\n  users.map(user => ({\n    ...user,\n    avatar: `https://avatars.dicebear.com/v2/identicon/${user.name}.svg`,\n  }));\n\nconst mockData = getAvatar([\n  { name: 'Thomas', email: 'w.kccip@bllmfbgv.dm' },\n  { name: 'Chow', email: 'f.lfqljnlk@ywoefljhc.af' },\n  { name: 'Bradley', email: 'd.wfovsqyo@gpkcjwjgb.fr' },\n  { name: 'Davis', email: '\"t.kqkoj@utlkwnpwk.nu' },\n]);\n\nfunction App() {\n  return (\n    <ul>\n      {mockData.map(({ name, avatar, email }) => (\n        <li key={name}>\n          <img src={avatar} width={60} height={60} /> ---\n          <span>{name}</span> ---\n          <span>{email}</span>\n        </li>\n      ))}\n    </ul>\n  );\n}\n\nexport default App;\n"})})})]}),"\n",(0,a.jsx)(n.p,{children:"删除多余的 css 文件，保持目录没有多余的文件："}),"\n",(0,a.jsx)(n.div,{className:"language-",children:(0,a.jsx)(n.div,{className:"modern-code-content",children:(0,a.jsx)(n.pre,{className:"code",children:(0,a.jsx)(n.code,{className:"language-bash",children:"rm src/routes/index.css\n"})})})}),"\n",(0,a.jsxs)(n.p,{children:["因为框架默认支持 ",(0,a.jsx)(n.a,{href:"https://webpack.js.org/concepts/hot-module-replacement/",target:"_blank",rel:"noopener noreferrer",children:"HMR"}),"，可以看到 ",(0,a.jsx)(n.code,{children:"http://localhost:8080/"})," 里的内容会自动更新为："]}),"\n",(0,a.jsx)(n.p,{children:(0,a.jsx)(n.img,{src:"https://lf3-static.bytednsdoc.com/obj/eden-cn/zq-uylkvt/ljhwZthlaukjlkulzlp/screenshot-20221214-141909.png",alt:"result"})}),"\n",(0,a.jsx)(n.p,{children:"此刻的页面还没有样式。下一章节将展开这部分的内容。"}),"\n",(0,a.jsxs)(n.h2,{id:"开启-ssr",children:["开启 SSR",(0,a.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#开启-ssr",children:"#"})]}),"\n",(0,a.jsxs)(n.p,{children:["接下来，我们修改项目中的 ",(0,a.jsx)(n.code,{children:"modern.config.ts"}),"，开启 SSR 能力："]}),"\n",(0,a.jsxs)(n.div,{className:"language-",children:[(0,a.jsx)(n.div,{className:"modern-code-title",children:"modern.config.ts"}),(0,a.jsx)(n.div,{className:"modern-code-content",children:(0,a.jsx)(n.pre,{className:"code",children:(0,a.jsx)(n.code,{className:"language-ts",meta:'title="modern.config.ts"',children:"import appTools, { defineConfig } from '@modern-js/app-tools';\n\nexport default defineConfig({\n  runtime: {\n    router: true,\n    state: true,\n  },\n  server: {\n    ssr: true,\n  },\n  plugins: [appTools()],\n});\n"})})})]}),"\n",(0,a.jsxs)(n.p,{children:["重新执行 ",(0,a.jsx)(n.code,{children:"pnpm run dev"}),"，可以发现项目已经在服务端完成了页面渲染。"]})]})}var m=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=Object.assign({},(0,r.useMDXComponents)(),e.components).wrapper;return n?(0,a.jsx)(n,Object.assign({},e,{children:(0,a.jsx)(h,e)})):h(e)}}}]);