(self.webpackChunk_modern_js_main_doc=self.webpackChunk_modern_js_main_doc||[]).push([["docs_en_tutorials_first-app_c05-loader_mdx"],{2678:function(e,n,t){"use strict";Object.defineProperty(n,"__esModule",{value:!0});!function(e,n){for(var t in n)Object.defineProperty(e,t,{enumerable:!0,get:n[t]})}(n,{frontmatter:function(){return o},title:function(){return d},toc:function(){return s},default:function(){return c}});var a=t("9880"),r=t("23169"),o={title:"Add Loader"},d="Add Loader",s=[];function i(e){var n=Object.assign({h1:"h1",a:"a",p:"p",strong:"strong",code:"code",pre:"pre",div:"div",img:"img"},(0,r.useMDXComponents)(),e.components);return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsxs)(n.h1,{id:"add-loader",children:["Add Loader",(0,a.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#add-loader",children:"#"})]}),"\n",(0,a.jsx)(n.p,{children:"In the previous chapter, we learned how to add client route."}),"\n",(0,a.jsxs)(n.p,{children:["In this chapter, we will learn how to add ",(0,a.jsx)(n.strong,{children:"Loader"})," to the routing component."]}),"\n",(0,a.jsxs)(n.p,{children:["By far, we have provided data to components through hardcoding. If you want to get data from the remote, you usually use ",(0,a.jsx)(n.code,{children:"useEffect"})," to do it. But when SSR is enabled, ",(0,a.jsx)(n.code,{children:"useEffect"})," will not be executed at the server level, so this SSR can only render a very limited UI."]}),"\n",(0,a.jsx)(n.p,{children:"Modern.js provides the ability of Data Loader to support homogeneous data acquisition in components to maximize the value of SSR."}),"\n",(0,a.jsx)(n.p,{children:"Below we demonstrate how to add Data Loader to the routing component and simulate remote data acquisition. We use faker to mock the required data, first install dependency:"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-bash",children:"pnpm add faker@5\npnpm add @types/faker@5 -D\n"})}),"\n",(0,a.jsxs)(n.p,{children:["Create ",(0,a.jsx)(n.code,{children:"src/routes/page.loader.ts"}),":"]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-tsx",children:"import { name, internet } from 'faker';\n\ntype LoaderData = {\n  code: number;\n  data: {\n    name: string;\n    avatar: string;\n    email: string;\n  }[];\n};\n\nexport default async (): Promise<LoaderData> => {\n  const data = new Array(20).fill(0).map(() => {\n    const firstName = name.firstName();\n    return {\n      name: firstName,\n      avatar: `https://avatars.dicebear.com/api/identicon/${firstName}.svg`,\n      email: internet.email(),\n    };\n  });\n\n  return {\n    code: 200,\n    data,\n  };\n};\n"})}),"\n",(0,a.jsxs)(n.div,{className:"modern-directive note",children:[(0,a.jsx)(n.div,{className:"modern-directive-title",children:"NOTE"}),(0,a.jsxs)(n.div,{className:"modern-directive-content",children:[(0,a.jsx)(n.p,{children:"Data Loader doesn't just work for SSR. In CSR projects, Data Loader can also avoid data acquisition dependency UI rendering, which solves the problem of requesting dynamic grid layout. In the future, Modern.js will also add more capabilities to this feature, such as pre-fetching, data caching, etc."}),"\n"]})]}),"\n",(0,a.jsxs)(n.p,{children:["Modern.js also provides a hooks API called ",(0,a.jsx)(n.code,{children:"useLoaderData"}),", we modify the exported component of ",(0,a.jsx)(n.code,{children:"src/routes/page.tsx"}),":"]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-tsx",meta:"{1,4,13}",children:"import { useLoaderData } from '@modern-js/runtime/router';\n\nfunction Index() {\n  const { data } = useLoaderData() as LoaderData;\n\n  return (\n    <div className=\"container lg mx-auto\">\n      <Helmet>\n        <title>All</title>\n      </Helmet>\n      <List\n        dataSource={data}\n        renderItem={info => <Item key={info.name} info={info} />}\n      />\n    </div>\n  );\n}\n\nexport default Index;\n"})}),"\n","\n",(0,a.jsxs)(n.p,{children:["Re-execute ",(0,a.jsx)(n.code,{children:"pnpm run dev"}),", view ",(0,a.jsx)(n.code,{children:"view-source: http://localhost:8080/"}),', or view the "Preview" of the HTML request in the Network panel of devtools, you can see that the HTML rendered by SSR already contains the complete UI:']}),"\n",(0,a.jsx)(n.p,{children:(0,a.jsx)(n.img,{src:"https://lf3-static.bytednsdoc.com/obj/eden-cn/aphqeh7uhohpquloj/modern-js/docs/11/display6.png",alt:"display6"})})]})}var c=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=Object.assign({},(0,r.useMDXComponents)(),e.components).wrapper;return n?(0,a.jsx)(n,Object.assign({},e,{children:(0,a.jsx)(i,e)})):i(e)}}}]);