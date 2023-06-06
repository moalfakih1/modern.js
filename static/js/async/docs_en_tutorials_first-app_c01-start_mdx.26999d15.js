(self.webpackChunk_modern_js_main_doc=self.webpackChunk_modern_js_main_doc||[]).push([["docs_en_tutorials_first-app_c01-start_mdx"],{99618:function(e,n,t){"use strict";Object.defineProperty(n,"__esModule",{value:!0});!function(e,n){for(var t in n)Object.defineProperty(e,t,{enumerable:!0,get:n[t]})}(n,{frontmatter:function(){return c},title:function(){return l},toc:function(){return d},default:function(){return p}});var r=t("9880"),a=t("23169"),i=t.ir(t("10010")),s=t.ir(t("29174")),o=t.ir(t("28590")),c={title:"Create Project"},l="Create Project",d=[{text:"Environment preparation",depth:2,id:"environment-preparation"},{text:"Initialization project",depth:2,id:"initialization-project"},{text:"Debug Project",depth:2,id:"debug-project"},{text:"Modify the code",depth:2,id:"modify-the-code"},{text:"Enable SSR",depth:2,id:"enable-ssr"}];function h(e){var n=Object.assign({h1:"h1",a:"a",p:"p",h2:"h2",pre:"pre",code:"code",img:"img"},(0,a.useMDXComponents)(),e.components);return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(n.h1,{id:"create-project",children:["Create Project",(0,r.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#create-project",children:"#"})]}),"\n",(0,r.jsx)(n.p,{children:"Starting from this chapter, we will enter the practical tutorial section. In the practical tutorial, we will start with environment preparation, starting from simple to complex, building a real project step by step."}),"\n",(0,r.jsxs)(n.h2,{id:"environment-preparation",children:["Environment preparation",(0,r.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#environment-preparation",children:"#"})]}),"\n","\n",(0,r.jsx)(i.default,{}),"\n",(0,r.jsxs)(n.h2,{id:"initialization-project",children:["Initialization project",(0,r.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#initialization-project",children:"#"})]}),"\n",(0,r.jsx)(n.p,{children:"We create a new directory and initialize the project via the command line tool:"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:"mkdir myapp && cd myapp\nnpx @modern-js/create@latest\n"})}),"\n","\n",(0,r.jsx)(s.default,{}),"\n",(0,r.jsxs)(n.h2,{id:"debug-project",children:["Debug Project",(0,r.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#debug-project",children:"#"})]}),"\n","\n",(0,r.jsx)(o.default,{}),"\n",(0,r.jsxs)(n.h2,{id:"modify-the-code",children:["Modify the code",(0,r.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#modify-the-code",children:"#"})]}),"\n",(0,r.jsx)(n.p,{children:"We delete the original sample code and replace it with a simple point of contact list:"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-tsx",meta:'title="src/routes/page.tsx"',children:"const getAvatar = (users: Array<{ name: string; email: string }>) =>\n  users.map(user => ({\n    ...user,\n    avatar: `https://avatars.dicebear.com/v2/identicon/${user.name}.svg`,\n  }));\n\nconst mockData = getAvatar([\n  { name: 'Thomas', email: 'w.kccip@bllmfbgv.dm' },\n  { name: 'Chow', email: 'f.lfqljnlk@ywoefljhc.af' },\n  { name: 'Bradley', email: 'd.wfovsqyo@gpkcjwjgb.fr' },\n  { name: 'Davis', email: '\"t.kqkoj@utlkwnpwk.nu' },\n]);\n\nfunction App() {\n  return (\n    <ul>\n      {mockData.map(({ name, avatar, email }) => (\n        <li key={name}>\n          <img src={avatar} width={60} height={60} /> ---\n          <span>{name}</span> ---\n          <span>{email}</span>\n        </li>\n      ))}\n    </ul>\n  );\n}\n\nexport default App;\n"})}),"\n",(0,r.jsx)(n.p,{children:"Remove redundant css files and keep the directory free of redundant files:"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:"rm src/routes/index.css\n"})}),"\n",(0,r.jsxs)(n.p,{children:["Since the framework supports ",(0,r.jsx)(n.a,{href:"https://webpack.js.org/concepts/hot-module-replacement/",target:"_blank",rel:"noopener noreferrer",children:"HMR"})," by default, you can see that the content in ",(0,r.jsx)(n.a,{href:"http://localhost:8080/",target:"_blank",rel:"noopener noreferrer",children:"http://localhost:8080/"})," is automatically updated to:"]}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.img,{src:"https://lf3-static.bytednsdoc.com/obj/eden-cn/zq-uylkvt/ljhwZthlaukjlkulzlp/screenshot-20221214-141909.png",alt:"result"})}),"\n",(0,r.jsx)(n.p,{children:"The page has no styles at the moment. The next chapter will expand on this section."}),"\n",(0,r.jsxs)(n.h2,{id:"enable-ssr",children:["Enable SSR",(0,r.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#enable-ssr",children:"#"})]}),"\n",(0,r.jsxs)(n.p,{children:["Next, we modify the ",(0,r.jsx)(n.code,{children:"modern.config.ts"})," in the project to enable the SSR capability:"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-ts",children:"import appTools, { defineConfig } from '@modern-js/app-tools';\n\nexport default defineConfig({\n  runtime: {\n    router: true,\n    state: true,\n  },\n  server: {\n    ssr: true,\n  },\n  plugins: [appTools()],\n});\n"})}),"\n",(0,r.jsxs)(n.p,{children:["Re-execute ",(0,r.jsx)(n.code,{children:"pnpm run dev"})," to find that the project has completed page rendering at the server level."]})]})}var p=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=Object.assign({},(0,a.useMDXComponents)(),e.components).wrapper;return n?(0,r.jsx)(n,Object.assign({},e,{children:(0,r.jsx)(h,e)})):h(e)}}}]);