(self.webpackChunk_modern_js_main_doc=self.webpackChunk_modern_js_main_doc||[]).push([["docs_zh_guides_topic-detail_micro-frontend_c04-communicate_mdx"],{97633:function(n,e,r){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),Object.defineProperty(e,"default",{enumerable:!0,get:function(){return d}});var s,o=r("15169"),c=r("43932"),a=r("9880"),i=r("23169");function t(n){var e=Object.assign({h1:"h1",a:"a",h2:"h2",p:"p",code:"code",pre:"pre"},(0,i.useMDXComponents)(),n.components);return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsxs)(e.h1,{id:"主子应用通信",children:["主子应用通信",(0,a.jsx)(e.a,{className:"header-anchor","aria-hidden":"true",href:"#主子应用通信",children:"#"})]}),"\n",(0,a.jsxs)(e.h2,{id:"props-通信",children:["props 通信",(0,a.jsx)(e.a,{className:"header-anchor","aria-hidden":"true",href:"#props-通信",children:"#"})]}),"\n",(0,a.jsxs)(e.p,{children:["Modern.js 中，会将子应用包裹成一个 React 组件，直接通过给 React 组件传递 ",(0,a.jsx)(e.code,{children:"props"})," 即可实现主应用和子应用通信的目的。"]}),"\n",(0,a.jsx)(e.pre,{children:(0,a.jsx)(e.code,{className:"language-tsx",meta:"title=主应用：App.tsx",children:"function App() {\n  const { MApp } = useModuleApps();\n\n  return (\n    <div>\n      <MApp count={100} />\n    </div>\n  );\n}\n"})}),"\n",(0,a.jsx)(e.pre,{children:(0,a.jsx)(e.code,{className:"language-tsx",meta:"title=子应用：App.tsx",children:"function App(props) {\n  console.log(props);\n  return ...\n}\n"})}),"\n",(0,a.jsxs)(e.p,{children:["子应用将会打印 ",(0,a.jsx)(e.code,{children:"{count: 0}"}),"，目前尚未支持子应用渲染响应式，及时在主应用上更改 ",(0,a.jsx)(e.code,{children:"count"})," 的数据也不会触发视图更新"]}),"\n",(0,a.jsxs)(e.h2,{id:"channel-通信",children:["channel 通信",(0,a.jsx)(e.a,{className:"header-anchor","aria-hidden":"true",href:"#channel-通信",children:"#"})]}),"\n",(0,a.jsxs)(e.p,{children:[(0,a.jsx)(e.a,{href:"https://www.garfishjs.org/api/channel",target:"_blank",rel:"noopener noreferrer",children:"Garfish.channel"})," 用于应用间的通信。它是 ",(0,a.jsx)(e.code,{children:"EventEmitter2"})," 的实例"]}),"\n",(0,a.jsx)(e.pre,{children:(0,a.jsx)(e.code,{className:"language-ts",children:"// 子应用监听登录事件\nconst App = () => {\n  const handleLogin = userInfo => {\n    console.log(`${userInfo.name} has login`);\n  };\n\n  useEffect(() => {\n    window?.Garfish.channel.on('login', handleLogin);\n    return () => {\n      window?.Garfish.channel.removeListener('login', handleLogin);\n    };\n  });\n};\n\n// 主应用触发监听事件\napi.getLoginInfo.then(res => {\n  if (res.code === 0) {\n    window.Garfish.channel.emit('login', res.data);\n  }\n});\n"})})]})}(s=globalThis).__RSPRESS_PAGE_META||(s.__RSPRESS_PAGE_META={}),globalThis.__RSPRESS_PAGE_META["/home/runner/work/modern.js/modern.js/packages/document/main-doc/docs/zh/guides/topic-detail/micro-frontend/c04-communicate.mdx"]={toc:[{text:"props 通信",id:"props-通信",depth:2},{text:"channel 通信",id:"channel-通信",depth:2}],title:"主子应用通信",frontmatter:{sidebar_position:4,title:"主子应用通信"}};var d=function(){var n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},e=Object.assign({},(0,i.useMDXComponents)(),n.components).wrapper;return e?(0,a.jsx)(e,c._(o._({},n),{children:(0,a.jsx)(t,o._({},n))})):t(n)}}}]);