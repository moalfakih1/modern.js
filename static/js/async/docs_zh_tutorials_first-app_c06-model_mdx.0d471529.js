(self.webpackChunk_modern_js_main_doc=self.webpackChunk_modern_js_main_doc||[]).push([["docs_zh_tutorials_first-app_c06-model_mdx"],{235:function(e,n,r){"use strict";Object.defineProperty(n,"__esModule",{value:!0});!function(e,n){for(var r in n)Object.defineProperty(e,r,{enumerable:!0,get:n[r]})}(n,{frontmatter:function(){return i},title:function(){return a},toc:function(){return d},default:function(){return o}});var t=r("9880"),s=r("23169"),i={title:"添加业务模型（状态管理）"},a="添加业务模型（状态管理）",d=[{text:"实现 Model",depth:2,id:"实现-model"},{text:"使用 Model",depth:2,id:"使用-model"}];function c(e){var n=Object.assign({h1:"h1",a:"a",p:"p",code:"code",strong:"strong",div:"div",pre:"pre",h2:"h2"},(0,s.useMDXComponents)(),e.components);return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)(n.h1,{id:"添加业务模型（状态管理）",children:["添加业务模型（状态管理）",(0,t.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#添加业务模型（状态管理）",children:"#"})]}),"\n",(0,t.jsxs)(n.p,{children:["上一章节中，我们把硬编码的 ",(0,t.jsx)(n.code,{children:"mockData"})," 改成从 Data Loader 中加载。"]}),"\n",(0,t.jsxs)(n.p,{children:["这一章节中，我们会进一步实现项目的功能，例如实现 ",(0,t.jsx)(n.strong,{children:"Archive"})," 按钮的功能，把联系人归档。"]}),"\n",(0,t.jsxs)(n.p,{children:["因此会开始编写一些跟 UI 完全无关的业务逻辑，如果继续写在组件代码中，会产生越来越多的面条式代码。为此，我们引入了一种叫做 ",(0,t.jsx)(n.strong,{children:"业务模型（Model）"})," 的代码模块，将这些业务逻辑和 UI 解耦。"]}),"\n",(0,t.jsxs)(n.div,{className:"modern-directive info",children:[(0,t.jsx)(n.div,{className:"modern-directive-title",children:"注意"}),(0,t.jsxs)(n.div,{className:"modern-directive-content",children:[(0,t.jsxs)(n.p,{children:["使用状态管理相关 API，需要先启用配置项 ",(0,t.jsx)(n.a,{href:"/configure/app/runtime/state",children:"runtime.state"}),"："]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-ts",meta:'title="modern.config.ts"',children:"import { defineConfig } from '@modern-js/app-tools';\n\nexport default defineConfig({\n  runtime: {\n    state: true,\n  },\n});\n"})}),"\n"]})]}),"\n",(0,t.jsxs)(n.h2,{id:"实现-model",children:["实现 Model",(0,t.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#实现-model",children:"#"})]}),"\n",(0,t.jsxs)(n.p,{children:["创建一个完整的 Model 首先需要定义",(0,t.jsx)(n.strong,{children:"状态（state）"}),"，包括状态中数据的名称和初始值。"]}),"\n",(0,t.jsx)(n.p,{children:"我们使用 Model 来管理联系人列表的数据，因此定义如下数据状态："}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-js",children:"const state = {\n  items: [],\n};\n"})}),"\n",(0,t.jsxs)(n.p,{children:["使用 TS 语法，可以定义更完整的类型信息，比如 items 里每个对象都应该有 ",(0,t.jsx)(n.code,{children:"name"}),"、",(0,t.jsx)(n.code,{children:"email"})," 字段。为了实现归档功能，还需要创建 ",(0,t.jsx)(n.code,{children:"archived"})," 字段保存这个联系人是否已被归档的状态。"]}),"\n",(0,t.jsxs)(n.p,{children:["我们还需要一个字段用来访问所有已归档的联系人，可以定义 ",(0,t.jsx)(n.strong,{children:"computed"})," 类型的字段，对已有的数据做转换："]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-js",children:"const computed = {\n  archived: ({ items }) => {\n    return items.filter(item => item.archived);\n  },\n};\n"})}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.code,{children:"computed"})," 类型字段的定义方式是函数，但使用时可以像普通字段一样通过 state 访问。"]}),"\n",(0,t.jsxs)(n.div,{className:"modern-directive info",children:[(0,t.jsx)(n.div,{className:"modern-directive-title",children:"INFO"}),(0,t.jsxs)(n.div,{className:"modern-directive-content",children:[(0,t.jsxs)(n.p,{children:["Modern.js 集成了 ",(0,t.jsx)(n.a,{href:"https://immerjs.github.io/immer/",target:"_blank",rel:"noopener noreferrer",children:"Immer"}),"，能够像操作 JS 中常规的可变数据一样，去写这种状态转移的逻辑。"]}),"\n"]})]}),"\n",(0,t.jsxs)(n.p,{children:["实现 Archive 按钮时，我们需要一个 ",(0,t.jsx)(n.code,{children:"archive"})," 函数，负责修改指定联系人的 ",(0,t.jsx)(n.code,{children:"archived"})," 字段，我们把这种函数都叫作 ",(0,t.jsx)(n.strong,{children:"action"}),"："]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-js",children:"const actions = {\n  archive(draft, payload) {\n    const target = draft.items.find(item => item.email === payload);\n    if (target) {\n      target.archived = true;\n    }\n  },\n};\n"})}),"\n",(0,t.jsxs)(n.p,{children:["action 函数是一种",(0,t.jsx)(n.strong,{children:"纯函数"}),"，确定的输入得到确定的输出（转移后的状态），不应该有任何副作用。"]}),"\n",(0,t.jsx)(n.p,{children:"函数的第一个参数是 Immer 提供的 Draft State，第二个参数是 action 被调用时传入的参数（后面会介绍怎么调用）。"}),"\n",(0,t.jsx)(n.p,{children:"我们尝试完整实现它们："}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-js",children:"const state = {\n  items: [],\n  pending: false,\n  error: null,\n};\n\nconst computed = {\n  archived: ({ items }) => {\n    return items.filter(item => item.archived);\n  },\n};\n\nconst actions = {\n  archive(draft, payload) {\n    const target = draft.items.find(item => item.email === payload);\n    if (target) {\n      target.archived = true;\n    }\n  },\n};\n"})}),"\n",(0,t.jsx)(n.p,{children:"接下来我们把上面的代码连起来，放在同一个 Model 文件里。首先执行以下命令，创建新的文件目录："}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:"mkdir -p src/models/\ntouch src/models/contacts.ts\n"})}),"\n",(0,t.jsxs)(n.p,{children:["添加 ",(0,t.jsx)(n.code,{children:"src/models/contacts.ts"})," 的内容："]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-tsx",children:"import { model } from '@modern-js/runtime/model';\n\ntype State = {\n  items: {\n    avatar: string;\n    name: string;\n    email: string;\n    archived?: boolean;\n  }[];\n  pending: boolean;\n  error: null | Error;\n};\n\nexport default model<State>('contacts').define({\n  state: {\n    items: [],\n    pending: false,\n    error: null,\n  },\n  computed: {\n    archived: ({ items }: State) => items.filter(item => item.archived),\n  },\n  actions: {\n    archive(draft, payload) {\n      const target = draft.items.find(item => item.email === payload)!;\n      if (target) {\n        target.archived = true;\n      }\n    },\n  },\n});\n"})}),"\n",(0,t.jsxs)(n.p,{children:["我们把一个包含 state，action 等要素的 plain object 称作 ",(0,t.jsx)(n.strong,{children:"Model Spec"}),"，Modern.js 提供了 ",(0,t.jsx)(n.a,{href:"/apis/app/runtime/model/model_",children:"Model API"}),"，可以根据 Model Spec 生成 ",(0,t.jsx)(n.strong,{children:"Model"}),"。"]}),"\n",(0,t.jsxs)(n.h2,{id:"使用-model",children:["使用 Model",(0,t.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#使用-model",children:"#"})]}),"\n",(0,t.jsx)(n.p,{children:"现在我们直接使用这个 Model，把项目的逻辑补充起来。"}),"\n",(0,t.jsxs)(n.p,{children:["首先修改 ",(0,t.jsx)(n.code,{children:"src/components/Item/index.tsx"}),"，添加 ",(0,t.jsx)(n.strong,{children:"Archive 按钮"}),"的 UI 和交互，内容如下："]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-tsx",children:"import Avatar from '../Avatar';\n\ntype InfoProps = {\n  avatar: string;\n  name: string;\n  email: string;\n  archived?: boolean;\n};\n\nconst Item = ({\n  info,\n  onArchive,\n}: {\n  info: InfoProps;\n  onArchive?: () => void;\n}) => {\n  const { avatar, name, email, archived } = info;\n  return (\n    <div className=\"flex p-4 items-center border-gray-200 border-b\">\n      <Avatar src={avatar} />\n      <div className=\"ml-4 custom-text-gray flex-1 flex justify-between\">\n        <div className=\"flex-1\">\n          <p>{name}</p>\n          <p>{email}</p>\n        </div>\n        <button\n          type=\"button\"\n          disabled={archived}\n          onClick={onArchive}\n          className={`text-white font-bold py-2 px-4 rounded-full ${\n            archived\n              ? 'bg-gray-400 cursor-default'\n              : 'bg-blue-500 hover:bg-blue-700'\n          }`}\n        >\n          {archived ? 'Archived' : 'Archive'}\n        </button>\n      </div>\n    </div>\n  );\n};\n\nexport default Item;\n"})}),"\n",(0,t.jsxs)(n.p,{children:["接下来，我们修改 ",(0,t.jsx)(n.code,{children:"src/routes/page.tsx"})," 和 ",(0,t.jsx)(n.code,{children:"src/routes/page.loader.ts"}),"，为 ",(0,t.jsx)(n.code,{children:"<Item>"})," 组件传递更多参数："]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-ts",meta:'title="src/routes/page.loader.ts"',children:"export type LoaderData = {\n  code: number;\n  data: {\n    name: string;\n    avatar: string;\n    email: string;\n  }[];\n};\n\nexport default async (): Promise<LoaderData> => {\n  const data = new Array(20).fill(0).map(() => {\n    const firstName = name.firstName();\n    return {\n      name: firstName,\n      avatar: `https://avatars.dicebear.com/api/identicon/${firstName}.svg`,\n      email: internet.email(),\n      archived: false,\n    };\n  });\n\n  return {\n    code: 200,\n    data,\n  };\n};\n"})}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-tsx",meta:'title="src/routes/page.tsx"',children:"import { Helmet } from '@modern-js/runtime/head';\nimport { useModel } from '@modern-js/runtime/model';\nimport { useLoaderData } from '@modern-js/runtime/router';\nimport { List } from 'antd';\nimport { name, internet } from 'faker';\nimport Item from '../components/Item';\nimport contacts from '../models/contacts';\n\nfunction Index() {\n  const { data } = useLoaderData() as LoaderData;\n  const [{ items }, { archive, setItems }] = useModel(contacts);\n  if (items.length === 0) {\n    setItems(data);\n  }\n\n  return (\n    <div className=\"container lg mx-auto\">\n      <Helmet>\n        <title>All</title>\n      </Helmet>\n      <List\n        dataSource={items}\n        renderItem={info => (\n          <Item\n            key={info.name}\n            info={info}\n            onArchive={() => {\n              archive(info.email);\n            }}\n          />\n        )}\n      />\n    </div>\n  );\n}\n\nexport default Index;\n"})}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.code,{children:"useModel"})," 是 Modern.js 提供的 hooks API。可以在组件中提供 Model 中定义的 state，或通过 actions 调用 Model 中定义的 side effect 与 action，从而改变 Model 的 state。"]}),"\n",(0,t.jsx)(n.p,{children:"Model 是业务逻辑，是计算过程，本身不创建也不持有状态。只有在被组件用 hooks API 使用后，才在指定的地方创建状态。"}),"\n",(0,t.jsxs)(n.p,{children:["执行 ",(0,t.jsx)(n.code,{children:"pnpm run dev"}),"，点击 ",(0,t.jsx)(n.strong,{children:"Archive 按钮"}),"，可以看到页面 UI 发生了变化。"]}),"\n",(0,t.jsxs)(n.div,{className:"modern-directive note",children:[(0,t.jsx)(n.div,{className:"modern-directive-title",children:"NOTE"}),(0,t.jsxs)(n.div,{className:"modern-directive-content",children:[(0,t.jsxs)(n.p,{children:["上述例子中，",(0,t.jsx)(n.code,{children:"useLoaderData"})," 其实在每次切换路由时都会执行。因为我们在 Data Loader 里使用了 fake 数据，每次返回的数据是不同的。但我们优先使用了 Model 中的数据，因此切换路由时数据没有发生改变。"]}),"\n"]})]})]})}var o=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=Object.assign({},(0,s.useMDXComponents)(),e.components).wrapper;return n?(0,t.jsx)(n,Object.assign({},e,{children:(0,t.jsx)(c,e)})):c(e)}}}]);