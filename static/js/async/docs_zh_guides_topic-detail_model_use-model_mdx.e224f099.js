(self.webpackChunk_modern_js_main_doc=self.webpackChunk_modern_js_main_doc||[]).push([["docs_zh_guides_topic-detail_model_use-model_mdx"],{2245:function(e,n,s){"use strict";Object.defineProperty(n,"__esModule",{value:!0});!function(e,n){for(var s in n)Object.defineProperty(e,s,{enumerable:!0,get:n[s]})}(n,{frontmatter:function(){return c},title:function(){return o},toc:function(){return r},default:function(){return l}});var d=s("9880"),t=s("23169"),c={sidebar_position:3,title:"使用 Model"},o="使用 Model",r=[{text:"在组件内使用",depth:2,id:"在组件内使用"},{text:"作为全局状态使用",depth:3,id:"作为全局状态使用"},{text:"作为静态状态使用",depth:3,id:"作为静态状态使用"},{text:"作为局部状态使用",depth:3,id:"作为局部状态使用"},{text:"在组件外使用",depth:2,id:"在组件外使用"}];function a(e){var n=Object.assign({h1:"h1",a:"a",h2:"h2",h3:"h3",p:"p",code:"code",div:"div",pre:"pre",img:"img"},(0,t.useMDXComponents)(),e.components);return(0,d.jsxs)(d.Fragment,{children:[(0,d.jsxs)(n.h1,{id:"使用-model",children:["使用 Model",(0,d.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#使用-model",children:"#"})]}),"\n",(0,d.jsxs)(n.h2,{id:"在组件内使用",children:["在组件内使用",(0,d.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#在组件内使用",children:"#"})]}),"\n",(0,d.jsxs)(n.h3,{id:"作为全局状态使用",children:["作为全局状态使用",(0,d.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#作为全局状态使用",children:"#"})]}),"\n",(0,d.jsxs)(n.p,{children:["通过 ",(0,d.jsx)(n.code,{children:"useModel"})," 可以获取 Model 的 State、Actions 等。当 Model 的 State 通过 Actions 进行修改后，任何其他使用了该 Model 的组件，都会自动重新渲染。"]}),"\n",(0,d.jsxs)(n.p,{children:["在 ",(0,d.jsx)(n.a,{href:"/guides/topic-detail/model/quick-start",children:"快速上手"})," 的计数器案例中，我们已经演示了 ",(0,d.jsx)(n.code,{children:"useModel"})," 的使用，不再重复。"]}),"\n",(0,d.jsxs)(n.p,{children:[(0,d.jsx)(n.code,{children:"useModel"})," 支持传入多个 Model，多个 Model 的 State 和 Actions 会进行合并后作为返回结果。例如："]}),"\n",(0,d.jsx)(n.div,{className:"language-",children:(0,d.jsx)(n.div,{className:"modern-code-content",children:(0,d.jsx)(n.pre,{className:"code",children:(0,d.jsx)(n.code,{className:"language-ts",children:"const fooModel = model('foo').define({\n  state: {\n    value: 1,\n  },\n  actions: {\n    add(state) {\n      state += 1;\n    },\n  },\n});\n\nconst barModel = model('bar').define({\n  state: {\n    title: 'bar',\n  },\n  actions: {\n    set(state, payload) {\n      state.title = payload;\n    },\n  },\n});\n\nconst [state, actions] = useModel([fooModel, barModel]);\n// 或\nconst [state, actions] = useModel(fooModel, barModel);\n"})})})}),"\n",(0,d.jsxs)(n.p,{children:[(0,d.jsx)(n.code,{children:"state"})," 和 ",(0,d.jsx)(n.code,{children:"actions"})," 的值分别为："]}),"\n",(0,d.jsx)(n.div,{className:"language-",children:(0,d.jsx)(n.div,{className:"modern-code-content",children:(0,d.jsx)(n.pre,{className:"code",children:(0,d.jsx)(n.code,{className:"language-ts",children:"state = {\n  value: 1,\n  title: 'bar',\n};\n\nactions = {\n  add(state) {\n    state += 1;\n  },\n  set(state, payload) {\n    state.title = payload;\n  },\n};\n"})})})}),"\n",(0,d.jsxs)(n.p,{children:[(0,d.jsx)(n.code,{children:"useModel"})," 还支持对 State 和 Actions 做 selector 操作，实现对 State 和 Actions 的筛选或重命名，例如："]}),"\n",(0,d.jsx)(n.div,{className:"language-",children:(0,d.jsx)(n.div,{className:"modern-code-content",children:(0,d.jsx)(n.pre,{className:"code",children:(0,d.jsx)(n.code,{className:"language-ts",children:"const fooModel = model('foo').define({\n  state: {\n    value: 1,\n  },\n  actions: {\n    add(state) {\n      state += 1;\n    },\n  },\n});\n\nconst barModel = model('bar').define({\n  state: {\n    value: 'bar',\n  },\n  actions: {\n    set(state, payload) {\n      state.value = payload;\n    },\n  },\n});\n\nconst [state, actions] = useModel(\n  [fooModel, barModel],\n  (fooState, barState) => ({\n    fooValue: fooState.value,\n    barValue: barState.value,\n  }), // stateSelector\n  (fooActions, barActions) => ({ add: fooActions.add }), // actionsSelector\n);\n"})})})}),"\n",(0,d.jsxs)(n.p,{children:["我们通过 ",(0,d.jsx)(n.code,{children:"stateSelector"})," ，把 ",(0,d.jsx)(n.code,{children:"fooModel"})," 和 ",(0,d.jsx)(n.code,{children:"barModel"})," 中重名的状态做了命名修改，通过 ",(0,d.jsx)(n.code,{children:"actionsSelector"})," ，过滤掉了 ",(0,d.jsx)(n.code,{children:"barModel"})," 的 Actions。"]}),"\n",(0,d.jsxs)(n.p,{children:["如果只需要设置 ",(0,d.jsx)(n.code,{children:"actionsSelector"}),"，可以把 ",(0,d.jsx)(n.code,{children:"stateSelector"})," 设置为 ",(0,d.jsx)(n.code,{children:"undefined"}),"，作为参数占位。例如："]}),"\n",(0,d.jsx)(n.div,{className:"language-",children:(0,d.jsx)(n.div,{className:"modern-code-content",children:(0,d.jsx)(n.pre,{className:"code",children:(0,d.jsx)(n.code,{className:"language-ts",children:"const [state, actions] = useModel(\n  [fooModel, barModel],\n  undefined,\n  (fooActions, barActions) => ({ add: fooActions.add }), // actionsSelector\n);\n"})})})}),"\n",(0,d.jsxs)(n.h3,{id:"作为静态状态使用",children:["作为静态状态使用",(0,d.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#作为静态状态使用",children:"#"})]}),"\n",(0,d.jsxs)(n.p,{children:["通过 ",(0,d.jsx)(n.code,{children:"useStaticModel"})," 获取 Model ，将 Model 中的状态作为静态状态使用。可以保证组件每次访问到的 Model 的 State 都是最新值，但是 Model 的 State 的变化，并不会引起当前组件的重新渲染。"]}),"\n",(0,d.jsxs)(n.div,{className:"modern-directive info",children:[(0,d.jsx)(n.div,{className:"modern-directive-title",children:"INFO"}),(0,d.jsxs)(n.div,{className:"modern-directive-content",children:[(0,d.jsxs)(n.p,{children:[(0,d.jsx)(n.code,{children:"useStaticModel"})," 的使用方式和 ",(0,d.jsx)(n.code,{children:"useModel"})," 完全一致。"]}),"\n"]})]}),"\n",(0,d.jsxs)(n.p,{children:["考虑下面一种场景，有一个组件 Input 负责用户输入，另外一个组件 Search 负责根据用户的输入信息，在点击查询按钮后执行查询操作，我们不希望用户输入过程中的状态变化引起 Search 重新渲染，这时候就可以使用 ",(0,d.jsx)(n.code,{children:"useStaticModel"}),"："]}),"\n",(0,d.jsx)(n.div,{className:"language-",children:(0,d.jsx)(n.div,{className:"modern-code-content",children:(0,d.jsx)(n.pre,{className:"code",children:(0,d.jsx)(n.code,{className:"language-ts",children:"import { useStaticModel } from '@modern-js/runtime/model';\n\nfunction Search() {\n  // 这里注意不要解构 state\n  const [state] = useStaticModel(searchModel);\n\n  return (\n    <div>\n      <button\n        onClick={async () => {\n          const result = await mockSearch(state.input);\n          console.log(result);\n        }}\n      >\n        Search\n      </button>\n    </div>\n  );\n}\n"})})})}),"\n",(0,d.jsxs)(n.div,{className:"modern-directive warning",children:[(0,d.jsx)(n.div,{className:"modern-directive-title",children:"注意"}),(0,d.jsxs)(n.div,{className:"modern-directive-content",children:[(0,d.jsxs)(n.p,{children:["不要解构 ",(0,d.jsx)(n.code,{children:"useStaticModel"})," 返回的 ",(0,d.jsx)(n.code,{children:"state"}),"，例如改成如下写法：\n",(0,d.jsx)(n.code,{children:"const [{input}] = useStaticModel(searchModel);"}),"\n将始终获取到 Input 的初始值。"]}),"\n"]})]}),"\n",(0,d.jsxs)(n.p,{children:[(0,d.jsx)(n.code,{children:"useStaticModel"})," 还适合和 ",(0,d.jsx)(n.a,{href:"https://github.com/pmndrs/react-three-fiber",target:"_blank",rel:"noopener noreferrer",children:"react-three-fiber"})," 等动画库一起使用，因为在动画组件 UI 里绑定会快速变化的状态，容易引起",(0,d.jsx)(n.a,{href:"https://docs.pmnd.rs/react-three-fiber/advanced/pitfalls#never-bind-fast-state-reactive",target:"_blank",rel:"noopener noreferrer",children:"性能问题"}),"。这种情况就可以选择使用 ",(0,d.jsx)(n.code,{children:"useStaticModel"}),"，它只会订阅状态，但不会引起视图组件的重新渲染。下面是一个简化示例："]}),"\n",(0,d.jsx)(n.div,{className:"language-",children:(0,d.jsx)(n.div,{className:"modern-code-content",children:(0,d.jsx)(n.pre,{className:"code",children:(0,d.jsx)(n.code,{className:"language-ts",children:"function ThreeComponent() {\n  const [state, actions] = useStaticModel(modelA);\n\n  useFrame(() => {\n    state.value; // 假设初始化为 0\n    actions.setValue(1);\n    state.value; // 这里会得到1\n  });\n}\n"})})})}),"\n",(0,d.jsxs)(n.p,{children:["使用 React 的 refs 也可以实现类似效果，其实 ",(0,d.jsx)(n.code,{children:"useStaticModel"})," 内部也使用到了 refs。不过直接 ",(0,d.jsx)(n.code,{children:"useStaticModel"})," 有助于将状态的管理逻辑从组件中解耦，统一收敛到 Model 层。"]}),"\n",(0,d.jsxs)(n.p,{children:["完整的示例代码可以在",(0,d.jsx)(n.a,{href:"https://github.com/web-infra-dev/modern-js-examples/tree/main/series/tutorials/runtime-api/model/static-model",target:"_blank",rel:"noopener noreferrer",children:"这里"}),"查看。"]}),"\n",(0,d.jsxs)(n.h3,{id:"作为局部状态使用",children:["作为局部状态使用",(0,d.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#作为局部状态使用",children:"#"})]}),"\n",(0,d.jsxs)(n.p,{children:["通过 ",(0,d.jsx)(n.code,{children:"useLocalModel"})," 获取 Model ，将 Model 中的状态作为局部状态使用。此时 Model State 的变化，只会引起当前组件的重新渲染，但是不会引起其他使用了该 Model 的组件重新渲染。效果和通过 React 的 ",(0,d.jsx)(n.code,{children:"useState"})," 管理状态类似，但是可以将状态的管理逻辑从组件中解耦，统一收敛到 Model 层。"]}),"\n",(0,d.jsxs)(n.div,{className:"modern-directive info",children:[(0,d.jsx)(n.div,{className:"modern-directive-title",children:"INFO"}),(0,d.jsxs)(n.div,{className:"modern-directive-content",children:[(0,d.jsxs)(n.p,{children:[(0,d.jsx)(n.code,{children:"useLocalModel"})," 的使用方式和 ",(0,d.jsx)(n.code,{children:"useModel"})," 完全一致。"]}),"\n"]})]}),"\n",(0,d.jsxs)(n.p,{children:["例如，我们修改计数器应用的代码，添加一个有局部状态的计数器组件 ",(0,d.jsx)(n.code,{children:"LocalCounter"}),"："]}),"\n",(0,d.jsx)(n.div,{className:"language-",children:(0,d.jsx)(n.div,{className:"modern-code-content",children:(0,d.jsx)(n.pre,{className:"code",children:(0,d.jsx)(n.code,{className:"language-ts",children:"import { useLocalModel } from '@modern-js/runtime/model';\n\nfunction LocalCounter() {\n  const [state, actions] = useLocalModel(countModel);\n\n  return (\n    <div>\n      <div>local counter: {state.value}</div>\n      <button onClick={() => actions.add()}>add</button>\n    </div>\n  );\n}\n"})})})}),"\n",(0,d.jsxs)(n.p,{children:["分别点击 ",(0,d.jsx)(n.code,{children:"Counter"})," 和 ",(0,d.jsx)(n.code,{children:"LocalCounter"})," 的 ",(0,d.jsx)(n.code,{children:"add"})," 按钮，两者的状态互不影响："]}),"\n",(0,d.jsx)(n.p,{children:(0,d.jsx)(n.img,{src:"https://lf3-static.bytednsdoc.com/obj/eden-cn/eueh7vhojuh/modern/local-model.gif",alt:"local-model"})}),"\n",(0,d.jsxs)(n.p,{children:["完整的示例代码可以在",(0,d.jsx)(n.a,{href:"https://github.com/web-infra-dev/modern-js-examples/tree/main/series/tutorials/runtime-api/model/local-model",target:"_blank",rel:"noopener noreferrer",children:"这里"}),"查看。"]}),"\n",(0,d.jsxs)(n.h2,{id:"在组件外使用",children:["在组件外使用",(0,d.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#在组件外使用",children:"#"})]}),"\n",(0,d.jsxs)(n.p,{children:["在实际业务场景中，有时候我们需要在 React 组件外使用 Model，例如在工具函数中访问 State、执行 Actions 等。这个时候，我们就需要使用 Store。 Store 是一个底层概念，一般情况下用户接触不到，它负责存储和管理整个应用的状态。Reduck 的 Store 基于 ",(0,d.jsx)(n.a,{href:"https://redux.js.org/api/store",target:"_blank",rel:"noopener noreferrer",children:"Redux 的 Store"})," 实现，增加了 Reduck 特有的 API，如 ",(0,d.jsx)(n.code,{children:"use"})," 。"]}),"\n",(0,d.jsxs)(n.p,{children:["首先，在组件内调用 ",(0,d.jsx)(n.code,{children:"useStore"})," 获取当前应用使用的 ",(0,d.jsx)(n.code,{children:"store"})," 对象，并挂载到组件外的变量上："]}),"\n",(0,d.jsx)(n.div,{className:"language-",children:(0,d.jsx)(n.div,{className:"modern-code-content",children:(0,d.jsx)(n.pre,{className:"code",children:(0,d.jsx)(n.code,{className:"language-ts",children:"let store; // 组件外部 `store` 对象的引用\nfunction setStore(s) {\n  store = s;\n}\nfunction getStore() {\n  return store;\n}\n\nfunction Counter() {\n  const [state] = useModel(countModel);\n  const store = useStore();\n  // 通过 useMemo 避免不必要的重复设置\n  useMemo(() => {\n    setStore(store);\n  }, [store]);\n\n  return (\n    <div>\n      <div>counter: {state.value}</div>\n    </div>\n  );\n}\n"})})})}),"\n",(0,d.jsxs)(n.p,{children:["通过 ",(0,d.jsx)(n.code,{children:"store.use"})," 可以获取 Model 对象，",(0,d.jsx)(n.code,{children:"store.use"})," 的用法同 ",(0,d.jsx)(n.code,{children:"useModel"})," 相同。以计数器应用为例，我们在组件树外，每 1s 对计数器值\n执行自增操作："]}),"\n",(0,d.jsx)(n.div,{className:"language-",children:(0,d.jsx)(n.div,{className:"modern-code-content",children:(0,d.jsx)(n.pre,{className:"code",children:(0,d.jsx)(n.code,{className:"language-ts",children:"setInterval(() => {\n  const store = getStore();\n  const [, actions] = store.use(countModel);\n  actions.add();\n}, 1000);\n"})})})}),"\n",(0,d.jsxs)(n.p,{children:["完整的示例代码可以在",(0,d.jsx)(n.a,{href:"https://github.com/web-infra-dev/modern-js-examples/tree/main/series/tutorials/runtime-api/model/counter-model-outof-react",target:"_blank",rel:"noopener noreferrer",children:"这里"}),"查看。"]}),"\n",(0,d.jsxs)(n.div,{className:"modern-directive info",children:[(0,d.jsx)(n.div,{className:"modern-directive-title",children:"INFO"}),(0,d.jsxs)(n.div,{className:"modern-directive-content",children:[(0,d.jsxs)(n.p,{children:["如果是通过 ",(0,d.jsx)(n.a,{href:"/apis/app/runtime/model/create-store",children:(0,d.jsx)(n.code,{children:"createStore"})})," 手动创建的 Store 对象，无需通过 ",(0,d.jsx)(n.code,{children:"useStore"})," 在组件内获取，即可直接使用。"]}),"\n"]})]}),"\n",(0,d.jsxs)(n.div,{className:"modern-directive info",children:[(0,d.jsx)(n.div,{className:"modern-directive-title",children:"补充信息"}),(0,d.jsxs)(n.div,{className:"modern-directive-content",children:[(0,d.jsxs)(n.p,{children:["本节涉及的 API 的详细定义，请参考",(0,d.jsx)(n.a,{href:"/apis/app/runtime/model/model_",children:"这里"}),"。"]}),"\n"]})]})]})}var l=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=Object.assign({},(0,t.useMDXComponents)(),e.components).wrapper;return n?(0,d.jsx)(n,Object.assign({},e,{children:(0,d.jsx)(a,e)})):a(e)}}}]);