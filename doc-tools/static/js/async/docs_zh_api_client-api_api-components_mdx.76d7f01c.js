(self.webpackChunk_modern_js_doc_tools_doc=self.webpackChunk_modern_js_doc_tools_doc||[]).push([["docs_zh_api_client-api_api-components_mdx"],{13931:function(e,n,s){"use strict";s.r(n),s.d(n,{default:function(){return l}});var a,r=s("15169"),t=s("43932"),o=s("9880"),c=s("23169"),d=s("54842");function i(e){var n=Object.assign({h1:"h1",a:"a"},(0,c.useMDXComponents)(),e.components);return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsxs)(n.h1,{id:"内置组件",children:["内置组件",(0,o.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#内置组件",children:"#"})]}),"\n","\n",(0,o.jsx)(d.default,{})]})}(a=globalThis).__RSPRESS_PAGE_META||(a.__RSPRESS_PAGE_META={}),globalThis.__RSPRESS_PAGE_META["%2Fhome%2Frunner%2Fwork%2Fmodern.js%2Fmodern.js%2Fpackages%2Fdocument%2Fdoc-tools-doc%2Fdocs%2Fzh%2Fapi%2Fclient-api%2Fapi-components.mdx"]={toc:[],title:"内置组件",frontmatter:{}};var l=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=Object.assign({},(0,c.useMDXComponents)(),e.components).wrapper;return n?(0,o.jsx)(n,(0,t._)((0,r._)({},e),{children:(0,o.jsx)(i,(0,r._)({},e))})):i(e)}},54842:function(e,n,s){"use strict";s.r(n),s.d(n,{default:function(){return l}});var a,r=s("15169"),t=s("43932"),o=s("9880"),c=s("23169"),d=s("27385");function i(e){var n=Object.assign({h2:"h2",a:"a",p:"p",pre:"pre",code:"code",div:"div"},(0,c.useMDXComponents)(),e.components);return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsxs)(n.h2,{id:"nossr",children:["NoSSR",(0,o.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#nossr",children:"#"})]}),"\n",(0,o.jsx)(n.p,{children:"用于在服务端渲染时不渲染某些组件。使用方法如下："}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-tsx",children:"import { NoSSR } from '@modern-js/doc-tools/runtime';\n\nconst Component = () => {\n  return (\n    <NoSSR>\n      <div>这里的内容只会在客户端渲染</div>\n    </NoSSR>\n  );\n};\n"})}),"\n",(0,o.jsxs)(n.h2,{id:"tabtabs",children:["Tab/Tabs",(0,o.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#tabtabs",children:"#"})]}),"\n",(0,o.jsx)(n.p,{children:"你可以在文档中直接使用 Tab/Tabs 组件来实现 tab 切换的效果。比如"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-tsx",meta:'title="index.mdx"',children:'import { Tab, Tabs } from \'@modern-js/doc-tools/theme\';\n\nfunction App() {\n  return (\n    <Tabs>\n      <Tab label="Tab 1">Tab 1 content</Tab>\n      <Tab label="Tab 2">Tab 2 content</Tab>\n    </Tabs>\n  );\n}\n'})}),"\n","\n",(0,o.jsxs)(d.Tabs,{children:[(0,o.jsx)(d.Tab,{label:"1",value:"1",children:(0,o.jsx)(n.p,{children:"Tab 1 content"})}),(0,o.jsx)(d.Tab,{label:"2",value:"2",children:(0,o.jsx)(n.p,{children:"Tab 2 content"})})]}),"\n",(0,o.jsxs)(n.div,{className:"modern-directive info",children:[(0,o.jsx)(n.div,{className:"modern-directive-title",children:"提醒"}),(0,o.jsx)(n.div,{className:"modern-directive-content",children:(0,o.jsxs)(n.p,{children:["为了让你更方便地使用这些组件，框架内部对于 ",(0,o.jsx)(n.code,{children:"@modern-js/doc-tools/theme"})," 这个包做了 alias 处理，所以你可以直接使用 ",(0,o.jsx)(n.code,{children:"@theme"})," 来引入这些组件。\n"]})})]}),"\n",(0,o.jsx)(n.p,{children:"其中 Tabs 组件的 props 类型如下:"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-ts",children:"interface TabsProps {\n  children: React.ReactNode;\n  defaultValue?: string;\n  groupId?: string;\n}\n"})}),"\n",(0,o.jsx)(n.p,{children:"defaultValue 用于设置默认选中的 tab 项，这个值会和 Tab 组件的 value 字段做比较，如果相等则选中该 tab。"}),"\n",(0,o.jsx)(n.p,{children:"groupId 用于设置 tab 项的分组，当你需要多个 Tabs 组件进行联动的时候，可以通过 groupId 来实现。groupId 相同的 Tabs 组件会进行联动。"}),"\n",(0,o.jsx)(n.p,{children:"Tab 组件的 props 类型如下:"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-ts",children:"interface TabProps {\n  label: string;\n  // 用于标识当前 tab，如果不传则默认使用 label\n  value?: string;\n  children: React.ReactNode;\n}\n"})}),"\n",(0,o.jsxs)(n.p,{children:["其中的 ",(0,o.jsx)(n.code,{children:"value"})," 字段用于标识当前 tab，如果不传则默认使用 label。"]})]})}(a=globalThis).__RSPRESS_PAGE_META||(a.__RSPRESS_PAGE_META={}),globalThis.__RSPRESS_PAGE_META["%2Fhome%2Frunner%2Fwork%2Fmodern.js%2Fmodern.js%2Fpackages%2Fdocument%2Fdoc-tools-doc%2Fdocs%2Fzh%2Ffragments%2Finternal-components.mdx"]={toc:[{text:"NoSSR",id:"nossr",depth:2},{text:"Tab/Tabs",id:"tabtabs",depth:2}],title:"",frontmatter:{}};var l=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=Object.assign({},(0,c.useMDXComponents)(),e.components).wrapper;return n?(0,o.jsx)(n,(0,t._)((0,r._)({},e),{children:(0,o.jsx)(i,(0,r._)({},e))})):i(e)}}}]);