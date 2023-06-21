(self.webpackChunk_modern_js_main_doc=self.webpackChunk_modern_js_main_doc||[]).push([["docs_zh_guides_topic-detail_model_auto-actions_mdx"],{97685:function(e,n,s){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),Object.defineProperty(n,"default",{enumerable:!0,get:function(){return r}});var c,t=s("15169"),i=s("43932"),d=s("9880"),o=s("23169");function a(e){var n=Object.assign({h1:"h1",a:"a",p:"p",code:"code",ul:"ul",li:"li",h2:"h2",pre:"pre",div:"div"},(0,o.useMDXComponents)(),e.components);return(0,d.jsxs)(d.Fragment,{children:[(0,d.jsxs)(n.h1,{id:"自动生成-actions",children:["自动生成 Actions",(0,d.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#自动生成-actions",children:"#"})]}),"\n",(0,d.jsxs)(n.p,{children:["在 ",(0,d.jsx)(n.a,{href:"/guides/topic-detail/model/quick-start",children:"快速上手"})," 中，我们实现最简单的计数器 Model 也需要 10 行代码。\n实际上，Modern.js 支持根据声明的 ",(0,d.jsx)(n.code,{children:"state"})," 类型，自动生成常用的 Actions，从而简化模板代码量。当前支持的类型有："]}),"\n",(0,d.jsxs)(n.ul,{children:["\n",(0,d.jsx)(n.li,{children:"原始数据类型"}),"\n",(0,d.jsx)(n.li,{children:"数组类型"}),"\n",(0,d.jsx)(n.li,{children:"简单对象类型（Plain Object）"}),"\n"]}),"\n",(0,d.jsxs)(n.h2,{id:"原始数据类型",children:["原始数据类型",(0,d.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#原始数据类型",children:"#"})]}),"\n",(0,d.jsx)(n.pre,{children:(0,d.jsx)(n.code,{className:"language-ts",children:"const countModel = model('count').define({ state: 1 });\n"})}),"\n",(0,d.jsxs)(n.p,{children:["如上我们仅用一行就完成了一个简单的 ",(0,d.jsx)(n.code,{children:"countModel"}),"。使用 Model 的示例代码如下："]}),"\n",(0,d.jsx)(n.pre,{children:(0,d.jsx)(n.code,{className:"language-tsx",children:"function Counter() {\n  const [state, actions] = useModel(countModel);\n\n  useEffect(() => {\n    // 增加 1\n    actions.setState(state + 1);\n  }, []);\n}\n"})}),"\n",(0,d.jsxs)(n.h2,{id:"数组类型",children:["数组类型",(0,d.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#数组类型",children:"#"})]}),"\n",(0,d.jsx)(n.p,{children:"当 State 为数组类型时，自动生成 Actions 的示例代码如下："}),"\n",(0,d.jsx)(n.pre,{children:(0,d.jsx)(n.code,{className:"language-ts",children:"const countModel = model('count').define({ state: [] });\n\nfunction Counter() {\n  const [state, actions] = useModel(countModel);\n\n  useEffect(() => {\n    actions.push(1);\n    actions.pop();\n    actions.shift();\n    actions.unshift(1);\n    actions.concat([1]);\n    actions.splice(0, 1, 2);\n    actions.filter(value => value > 1);\n  }, []);\n}\n"})}),"\n",(0,d.jsx)(n.p,{children:"我们可以使用 JavaScript Array 对象的方法，修改 State。"}),"\n",(0,d.jsxs)(n.h2,{id:"简单对象类型",children:["简单对象类型",(0,d.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#简单对象类型",children:"#"})]}),"\n",(0,d.jsx)(n.p,{children:"当 State 为简单对象类型时，自动生成 Actions 的示例代码如下："}),"\n",(0,d.jsx)(n.pre,{children:(0,d.jsx)(n.code,{className:"language-ts",children:"const countModel = model('count').define({\n  state: {\n    a: 1,\n    b: [],\n    c: {},\n  },\n});\n\nfunction Counter() {\n  const [state, actions] = useModel(countModel);\n\n  useEffect(() => {\n    actions.setA(2);\n    actions.setB([1]);\n    actions.setC({ a: 1 });\n  }, []);\n}\n"})}),"\n",(0,d.jsxs)(n.p,{children:["根据 ",(0,d.jsx)(n.code,{children:"a"}),"、",(0,d.jsx)(n.code,{children:"b"}),"、",(0,d.jsx)(n.code,{children:"c"})," 三个不同的字段分别生成 ",(0,d.jsx)(n.code,{children:"setA"}),"、",(0,d.jsx)(n.code,{children:"setB"}),"、",(0,d.jsx)(n.code,{children:"setC"})," 三个 Actions。"]}),"\n",(0,d.jsxs)(n.div,{className:"modern-directive info",children:[(0,d.jsx)(n.div,{className:"modern-directive-title",children:"INFO"}),(0,d.jsxs)(n.div,{className:"modern-directive-content",children:[(0,d.jsxs)(n.p,{children:["当用户自定义的 Action 和 Modern.js 自动生成的 Action 名字一致时，用户自定义的 Action 优先级更高。例如，",(0,d.jsx)(n.code,{children:"countModel"})," 中已经自定义 ",(0,d.jsx)(n.code,{children:"setA"})," 这个 Action，调用 ",(0,d.jsx)(n.code,{children:"actions.setA()"})," 时，最终执行的是用户自定义的 ",(0,d.jsx)(n.code,{children:"setA"}),"。"]}),(0,d.jsx)(n.p,{children:"在 "}),"\n"]})]}),"\n",(0,d.jsxs)(n.div,{className:"modern-directive info",children:[(0,d.jsx)(n.div,{className:"modern-directive-title",children:"补充信息"}),(0,d.jsxs)(n.div,{className:"modern-directive-content",children:[(0,d.jsxs)(n.p,{children:["相关 API 的更多介绍，请参考",(0,d.jsx)(n.a,{href:"/apis/app/runtime/model/auto-actions",children:"这里"}),"。"]}),"\n"]})]})]})}(c=globalThis).__RSPRESS_PAGE_META||(c.__RSPRESS_PAGE_META={}),globalThis.__RSPRESS_PAGE_META["/home/runner/work/modern.js/modern.js/packages/document/main-doc/docs/zh/guides/topic-detail/model/auto-actions.mdx"]={toc:[{text:"原始数据类型",id:"原始数据类型",depth:2},{text:"数组类型",id:"数组类型",depth:2},{text:"简单对象类型",id:"简单对象类型",depth:2}],title:"自动生成 Actions",frontmatter:{sidebar_position:6,title:"自动生成 Actions"}};var r=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=Object.assign({},(0,o.useMDXComponents)(),e.components).wrapper;return n?(0,d.jsx)(n,i._(t._({},e),{children:(0,d.jsx)(a,t._({},e))})):a(e)}}}]);