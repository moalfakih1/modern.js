(self.webpackChunk_modern_js_main_doc=self.webpackChunk_modern_js_main_doc||[]).push([["docs_zh_tutorials_first-app_c07-container_mdx"],{10908:function(e,n,s){"use strict";Object.defineProperty(n,"__esModule",{value:!0});!function(e,n){for(var s in n)Object.defineProperty(e,s,{enumerable:!0,get:n[s]})}(n,{frontmatter:function(){return a},title:function(){return o},toc:function(){return i},default:function(){return l}});var t=s("9880"),r=s("23169"),c=s("78955"),a={title:"添加容器组件"},o="添加容器组件",i=[{text:"使用完整 Model",depth:2,id:"使用完整-model"},{text:"抽离容器组件",depth:2,id:"抽离容器组件"}];function d(e){var n=Object.assign({h1:"h1",a:"a",p:"p",strong:"strong",code:"code",h2:"h2",div:"div",pre:"pre",img:"img"},(0,r.useMDXComponents)(),e.components);return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)(n.h1,{id:"添加容器组件",children:["添加容器组件",(0,t.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#添加容器组件",children:"#"})]}),"\n","\n",(0,t.jsxs)(n.p,{children:["上一章节中，我们初步引入",(0,t.jsx)(n.strong,{children:"业务模型"}),"，从 UI 组件中拆分出这部分逻辑。",(0,t.jsx)(n.code,{children:"page.tsx"})," 中不再包含 UI 无关的业务逻辑实现细节，只需要使用 Model，就能实现同样的功能。"]}),"\n",(0,t.jsxs)(n.p,{children:["这一章节中，我们要进一步利用 Model 中实现的业务逻辑，让 ",(0,t.jsx)(n.code,{children:"page.tsx"})," 和 ",(0,t.jsx)(n.code,{children:"archived/page.tsx"})," 获取同一份数据。并实现 Archive 按钮，点击按钮能把联系人归档，只显示在 Archives 列表里，不显示在 All 列表里。"]}),"\n",(0,t.jsxs)(n.h2,{id:"使用完整-model",children:["使用完整 Model",(0,t.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#使用完整-model",children:"#"})]}),"\n",(0,t.jsx)(n.p,{children:"因为两个页面需要共用同一套状态（联系人列表数据、联系人是否被归档），都需要包含加载初始数据的逻辑，因此我们需要在更上一层完成数据获取。"}),"\n",(0,t.jsxs)(n.p,{children:["Modern.js 支持在 ",(0,t.jsx)(n.code,{children:"layout.tsx"})," 通过 Data Loader 获取数据，我们先数据获取这部分代码移动到 ",(0,t.jsx)(n.code,{children:"src/routes/layout.tsx"})," 中："]}),"\n",(0,t.jsxs)(n.div,{className:"language-",children:[(0,t.jsx)(n.div,{className:"modern-code-title",children:"src/routes/layout.loader.ts"}),(0,t.jsx)(n.div,{className:"modern-code-content",children:(0,t.jsx)(n.pre,{className:"code",children:(0,t.jsx)(n.code,{className:"language-ts",meta:'title="src/routes/layout.loader.ts"',children:"export type LoaderData = {\n  code: number;\n  data: {\n    name: string;\n    avatar: string;\n    email: string;\n  }[];\n};\n\nexport default async (): Promise<LoaderData> => {\n  const data = new Array(20).fill(0).map(() => {\n    const firstName = name.firstName();\n    return {\n      name: firstName,\n      avatar: `https://avatars.dicebear.com/api/identicon/${firstName}.svg`,\n      email: internet.email(),\n    };\n  });\n\n  return {\n    code: 200,\n    data,\n  };\n};\n"})})})]}),"\n",(0,t.jsxs)(n.div,{className:"language-",children:[(0,t.jsx)(n.div,{className:"modern-code-title",children:"src/routes/layout.tsx"}),(0,t.jsx)(n.div,{className:"modern-code-content",children:(0,t.jsx)(n.pre,{className:"code",children:(0,t.jsx)(n.code,{className:"language-tsx",meta:'title="src/routes/layout.tsx"',children:"import { name, internet } from 'faker';\nimport {\n  Outlet,\n  useLoaderData,\n  useLocation,\n  useNavigate,\n} from '@modern-js/runtime/router';\nimport { useState } from 'react';\nimport { Radio, RadioChangeEvent } from 'antd';\nimport { useModel } from '@modern-js/runtime/model';\nimport contacts from '../models/contacts';\nimport 'tailwindcss/base.css';\nimport 'tailwindcss/components.css';\nimport 'tailwindcss/utilities.css';\nimport '../styles/utils.css';\nimport type { LoaderData } from './layout.loader';\n\nexport default function Layout() {\n  const { data } = useLoaderData() as LoaderData;\n  const [{ items }, { setItems }] = useModel(contacts);\n  if (items.length === 0) {\n    setItems(data);\n  }\n\n  const navigate = useNavigate();\n  ...\n}\n"})})})]}),"\n",(0,t.jsxs)(n.p,{children:["在 ",(0,t.jsx)(n.code,{children:"src/routes/page.tsx"})," 中，直接使用 Model，获取数据："]}),"\n",(0,t.jsx)(n.div,{className:"language-",children:(0,t.jsx)(n.div,{className:"modern-code-content",children:(0,t.jsx)(n.pre,{className:"code",children:(0,t.jsx)(n.code,{className:"language-tsx",children:"import { Helmet } from '@modern-js/runtime/head';\nimport { useModel } from '@modern-js/runtime/model';\nimport { List } from 'antd';\nimport Item from '../components/Item';\nimport contacts from '../models/contacts';\n\nfunction Index() {\n  const [{ items }, { archive }] = useModel(contacts);\n\n  return (\n    <div className=\"container lg mx-auto\">\n      <Helmet>\n        <title>All</title>\n      </Helmet>\n      <List\n        dataSource={items}\n        renderItem={info => (\n          <Item\n            key={info.name}\n            info={info}\n            onArchive={() => {\n              archive(info.email);\n            }}\n          />\n        )}\n      />\n    </div>\n  );\n}\n\nexport default Index;\n"})})})}),"\n",(0,t.jsxs)(n.p,{children:["同样在 ",(0,t.jsx)(n.code,{children:"archived/page.tsx"})," 中，删除原本的 ",(0,t.jsx)(n.code,{children:"mockData"})," 逻辑，使用 Model 中 computed 的 ",(0,t.jsx)(n.code,{children:"archived"})," 值作为数据源："]}),"\n",(0,t.jsx)(n.div,{className:"language-",children:(0,t.jsx)(n.div,{className:"modern-code-content",children:(0,t.jsx)(n.pre,{className:"code",children:(0,t.jsx)(n.code,{className:"language-tsx",children:"import { Helmet } from '@modern-js/runtime/head';\nimport { useModel } from '@modern-js/runtime/model';\nimport { List } from 'antd';\nimport Item from '../../components/Item';\nimport contacts from '../../models/contacts';\n\nfunction Index() {\n  const [{ archived }, { archive }] = useModel(contacts);\n\n  return (\n    <div className=\"container lg mx-auto\">\n      <Helmet>\n        <title>Archives</title>\n      </Helmet>\n      <List\n        dataSource={archived}\n        renderItem={info => (\n          <Item\n            key={info.name}\n            info={info}\n            onArchive={() => {\n              archive(info.email);\n            }}\n          />\n        )}\n      />\n    </div>\n  );\n}\n\nexport default Index;\n"})})})}),"\n",(0,t.jsxs)(n.p,{children:["执行 ",(0,t.jsx)(n.code,{children:"pnpm run dev"}),"，访问 ",(0,t.jsx)(n.code,{children:"http://localhost:8080/"}),"，点击 Archive 按钮后，可以看到按钮置灰："]}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.img,{src:"https://lf3-static.bytednsdoc.com/obj/eden-cn/nuvjhpqnuvr/modern-website/tutorials/c07-contacts-all.png",alt:"display"})}),"\n",(0,t.jsxs)(n.p,{children:["接下来点击顶部导航，切换到 Archives 列表，可以发现刚才 ",(0,t.jsx)(n.strong,{children:"Archive"})," 的联系人已经出现在列表当中："]}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.img,{src:"https://lf3-static.bytednsdoc.com/obj/eden-cn/nuvjhpqnuvr/modern-website/tutorials/c07-contacts-archives.png",alt:"display"})}),"\n",(0,t.jsxs)(n.h2,{id:"抽离容器组件",children:["抽离容器组件",(0,t.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#抽离容器组件",children:"#"})]}),"\n",(0,t.jsxs)(n.p,{children:["前面章节中，我们把项目中的业务逻辑拆分成了两个 layer，一个是",(0,t.jsx)(n.strong,{children:"视图组件"}),"，另一个是",(0,t.jsx)(n.strong,{children:"业务模块"}),"。前者负责 UI 展示、交互等，后者负责实现 UI 无关的业务逻辑，专门管理状态。"]}),"\n",(0,t.jsxs)(n.p,{children:["像 ",(0,t.jsx)(n.code,{children:"src/routes/page.tsx"})," 和 ",(0,t.jsx)(n.code,{children:"src/routes/archives/page.tsx"})," 这样使用了 ",(0,t.jsx)(n.code,{children:"useModel"})," API 的组件，负责把 View 和 Model 这两个 layer 连接起来，类似传统 MVC 架构中 Controller 的角色，在 Modern.js 里我们沿用习惯，把它们称作",(0,t.jsx)(n.strong,{children:"容器组件（Container）"}),"。"]}),"\n",(0,t.jsxs)(n.p,{children:["容器组件推荐放在专门的 ",(0,t.jsx)(n.code,{children:"containers/"})," 目录里，我们执行以下命令，创建新的文件："]}),"\n",(0,t.jsxs)(c.Tabs,{children:[(0,t.jsx)(c.Tab,{value:"macOS",label:"macOS",default:!0,children:(0,t.jsx)(n.div,{className:"language-",children:(0,t.jsx)(n.div,{className:"modern-code-content",children:(0,t.jsx)(n.pre,{className:"code",children:(0,t.jsx)(n.code,{className:"language-bash",children:"mkdir -p src/containers\ntouch src/containers/Contacts.tsx\n"})})})})}),(0,t.jsx)(c.Tab,{value:"Windows",label:"Windows",children:(0,t.jsx)(n.div,{className:"language-",children:(0,t.jsx)(n.div,{className:"modern-code-content",children:(0,t.jsx)(n.pre,{className:"code",children:(0,t.jsx)(n.code,{className:"language-powershell",children:"mkdir -p src/containers\nni src/containers/Contacts.tsx\n"})})})})})]}),"\n",(0,t.jsxs)(n.p,{children:["我们将原本两个 ",(0,t.jsx)(n.code,{children:"page.tsx"})," 中公共的部分抽离出来，",(0,t.jsx)(n.code,{children:"src/containers/Contacts.tsx"})," 的代码如下："]}),"\n",(0,t.jsx)(n.div,{className:"language-",children:(0,t.jsx)(n.div,{className:"modern-code-content",children:(0,t.jsx)(n.pre,{className:"code",children:(0,t.jsx)(n.code,{className:"language-tsx",children:"import { Helmet } from '@modern-js/runtime/head';\nimport { useModel } from '@modern-js/runtime/model';\nimport { List } from 'antd';\nimport Item from '../components/Item';\nimport { Helmet } from '@modern-js/runtime/head';\nimport { useModel } from '@modern-js/runtime/model';\nimport { List } from 'antd';\nimport Item from '../components/Item';\nimport contacts from '../models/contacts';\n\nfunction Contacts({\n  title,\n  source,\n}: {\n  title: string;\n  source: 'items' | 'archived';\n}) {\n  const [state, { archive }] = useModel(contacts);\n\n  return (\n    <div className=\"container lg mx-auto\">\n      <Helmet>\n        <title>{title}</title>\n      </Helmet>\n      <List\n        dataSource={state[source]}\n        renderItem={info => (\n          <Item\n            key={info.name}\n            info={info}\n            onArchive={() => {\n              archive(info.email);\n            }}\n          />\n        )}\n      />\n    </div>\n  );\n}\n\nexport default Contacts;\n"})})})}),"\n",(0,t.jsxs)(n.p,{children:["修改 ",(0,t.jsx)(n.code,{children:"src/routes/page.tsx"})," 和 ",(0,t.jsx)(n.code,{children:"src/routes/archives/page.tsx"})," 的代码："]}),"\n",(0,t.jsxs)(n.div,{className:"language-",children:[(0,t.jsx)(n.div,{className:"modern-code-title",children:"src/routes/page.tsx"}),(0,t.jsx)(n.div,{className:"modern-code-content",children:(0,t.jsx)(n.pre,{className:"code",children:(0,t.jsx)(n.code,{className:"language-tsx",meta:'title="src/routes/page.tsx"',children:'import Contacts from \'../containers/Contacts\';\n\nfunction Index() {\n  return <Contacts title="All" source="items" />;\n}\n\nexport default Index;\n'})})})]}),"\n",(0,t.jsxs)(n.div,{className:"language-",children:[(0,t.jsx)(n.div,{className:"modern-code-title",children:"src/routes/archives/page.tsx"}),(0,t.jsx)(n.div,{className:"modern-code-content",children:(0,t.jsx)(n.pre,{className:"code",children:(0,t.jsx)(n.code,{className:"language-tsx",meta:'title="src/routes/archives/page.tsx"',children:'import Contacts from \'../../containers/Contacts\';\n\nfunction Index() {\n  return <Contacts title="Archives" source="archived" />;\n}\n\nexport default Index;\n'})})})]}),"\n",(0,t.jsx)(n.p,{children:"重构完成，现在的项目结构是："}),"\n",(0,t.jsx)(n.div,{className:"language-",children:(0,t.jsx)(n.div,{className:"modern-code-content",children:(0,t.jsx)(n.pre,{className:"code",children:(0,t.jsx)(n.code,{className:"language-bash",children:".\n├── README.md\n├── dist\n├── modern.config.ts\n├── node_modules\n├── package.json\n├── pnpm-lock.yaml\n├── src\n│   ├── components\n│   │   ├── Avatar\n│   │   │   └── index.tsx\n│   │   └── Item\n│   │       └── index.tsx\n│   ├── containers\n│   │   └── Contacts.tsx\n│   ├── models\n│   │   └── contacts.ts\n│   ├── modern-app-env.d.ts\n│   ├── routes\n│   │   ├── archives\n│   │   │   └── page.tsx\n│   │   ├── layout.tsx\n│   │   └── page.tsx\n│   └── styles\n│       └── utils.css\n└── tsconfig.json\n"})})})}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.code,{children:"components/"})," 里的",(0,t.jsx)(n.strong,{children:"视图组件"}),"，都是目录形式，如 ",(0,t.jsx)(n.code,{children:"Avatar/index.tsx"}),"。而 ",(0,t.jsx)(n.code,{children:"containers/"})," 里的",(0,t.jsx)(n.strong,{children:"容器组件"}),"，都是单文件形式，如 ",(0,t.jsx)(n.code,{children:"contacts.tsx"}),"。",(0,t.jsx)(n.strong,{children:"这是我们推荐的一种最佳实践"}),"。"]}),"\n",(0,t.jsxs)(n.p,{children:["在 ​ ",(0,t.jsx)(n.a,{href:"/zh/tutorials/first-app/c02-component",children:"添加 UI 组件（Component）"})," 章节提到过，视图组件用目录形式，是因为视图组件负责实现 UI 展示和交互细节，可以演变的复杂。用目录形式，可以方便增加子文件，包括专用的资源（图片等）、专用子组件、CSS 文件等。在这个目录内部可以随意重构，只考虑最小局部。"]}),"\n",(0,t.jsx)(n.p,{children:"而容器组件只负责连接，是一个胶水层，复杂的业务逻辑和实现细节都交给 View 层和 Model 层去实现。容器组件自己应该保持简单清晰，不应该包含复杂实现细节，所以不应该有内部结构。采用单文件形式不但更简洁，也能起到约束作用，提醒开发者不要把容器组件写复杂。"})]})}var l=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=Object.assign({},(0,r.useMDXComponents)(),e.components).wrapper;return n?(0,t.jsx)(n,Object.assign({},e,{children:(0,t.jsx)(d,e)})):d(e)}}}]);