(self.webpackChunk_modern_js_doc_tools_doc=self.webpackChunk_modern_js_doc_tools_doc||[]).push([["default~docs_en_api_client-api_api-components_mdx~docs_en_api_client-api_api-runtime_mdx~docs~37c9b7"],{15925:function(e,n,s){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),Object.defineProperty(n,"default",{enumerable:!0,get:function(){return d}});var t=s("9880"),r=s("23169"),o=s("27385");function i(e){var n=Object.assign({h2:"h2",a:"a",p:"p",pre:"pre",code:"code",div:"div"},(0,r.useMDXComponents)(),e.components);return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)(n.h2,{id:"nossr",children:["NoSSR",(0,t.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#nossr",children:"#"})]}),"\n",(0,t.jsx)(n.p,{children:"Used to skip the ssr for some components.For example"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-tsx",children:"import { NoSSR } from '@modern-js/doc-tools/runtime';\n\nconst Component = () => {\n  return (\n    <NoSSR>\n      <div>The content here will only be rendered on the client side</div>\n    </NoSSR>\n  );\n};\n"})}),"\n",(0,t.jsxs)(n.h2,{id:"tab/tabs",children:["Tab/Tabs",(0,t.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#tab/tabs",children:"#"})]}),"\n",(0,t.jsx)(n.p,{children:"You can directly use the Tab/Tabs component in the document to achieve the effect of tab switching. for example:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-tsx",meta:'title="index.mdx"',children:'import { Tab, Tabs } from \'@modern-js/doc-tools/theme\';\n\nfunction App() {\n  return (\n    <Tabs>\n      <Tab label="Tab 1">Tab 1 content</Tab>\n      <Tab label="Tab 2">Tab 2 content</Tab>\n    </Tabs>\n  );\n}\n'})}),"\n","\n",(0,t.jsxs)(o.Tabs,{children:[(0,t.jsx)(o.Tab,{label:"1",value:"1",children:(0,t.jsx)(n.p,{children:"Tab 1 content"})}),(0,t.jsx)(o.Tab,{label:"2",value:"2",children:(0,t.jsx)(n.p,{children:"Tab 2 content"})})]}),"\n",(0,t.jsxs)(n.div,{className:"modern-directive info",children:[(0,t.jsx)(n.div,{className:"modern-directive-title",children:"Note"}),(0,t.jsx)(n.div,{className:"modern-directive-content",children:(0,t.jsxs)(n.p,{children:["In order to make it easier for you to use these components, the ",(0,t.jsx)(n.code,{children:"@modern-js/doc-tools/theme"})," package has been aliased inside the framework, so you can directly use ",(0,t.jsx)(n.code,{children:"@theme"})," to import these components.\n"]})})]}),"\n",(0,t.jsx)(n.p,{children:"The props type of the Tabs component is as follows:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-ts",children:"interface TabsProps {\n  children: React.ReactNode;\n  defaultValue?: string;\n  groupId?: string;\n}\n"})}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.code,{children:"defaultValue"})," is used to set the tab item selected by default. This value will be compared with the value field of the Tab component props, and if they are equal, the tab will be selected."]}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.code,{children:"groupId"})," is used to sync the selected tab item between multiple Tabs components.The groups with the same groupId will be synchronized."]}),"\n",(0,t.jsx)(n.p,{children:"The props types of the Tab component are as follows:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-ts",children:"interface TabProps {\n  label: string;\n  // Used to identify the current tab, if not passed, the default label will be used\n  value?: string;\n  children: React.ReactNode;\n}\n"})}),"\n",(0,t.jsxs)(n.p,{children:["The ",(0,t.jsx)(n.code,{children:"value"})," field is used to identify the current tab, if not passed, the default label will be used."]})]})}var d=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=Object.assign({},(0,r.useMDXComponents)(),e.components).wrapper;return n?(0,t.jsx)(n,Object.assign({},e,{children:(0,t.jsx)(i,e)})):i(e)}},88160:function(e,n,s){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),Object.defineProperty(n,"default",{enumerable:!0,get:function(){return i}});var t=s("9880"),r=s("23169");function o(e){var n=Object.assign({pre:"pre",code:"code",div:"div",p:"p",a:"a",strong:"strong"},(0,r.useMDXComponents)(),e.components);return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-ts",meta:'title="modern.config.ts"',children:"import docTools, { defineConfig } from '@modern-js/doc-tools';\n\nexport default defineConfig({\n  doc: {\n    markdown: {\n      experimentalMdxRs: true,\n    },\n  },\n  plugins: [docTools()],\n});\n"})}),"\n",(0,t.jsxs)(n.div,{className:"modern-directive tip",children:[(0,t.jsx)(n.div,{className:"modern-directive-title",children:"NOTICE"}),(0,t.jsx)(n.div,{className:"modern-directive-content",children:(0,t.jsxs)(n.p,{children:["The bottom layer of this function is based on the ",(0,t.jsx)(n.a,{href:"https://github.com/web-infra-dev/mdx-rs-binding",target:"_blank",rel:"noopener noreferrer",children:"@modern-js/mdx-rs-binding"})," library developed by Modern.js Doc. The performance is ",(0,t.jsx)(n.strong,{children:"5 ~ 10"})," times higher than the JS version of the MDX compiler, but the JS version of the plugin is not yet supported. If you need to add a custom remark or rehype plugin, it is not recommended to enable this function.\n"]})})]})]})}var i=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=Object.assign({},(0,r.useMDXComponents)(),e.components).wrapper;return n?(0,t.jsx)(n,Object.assign({},e,{children:(0,t.jsx)(o,e)})):o(e)}},20502:function(e,n,s){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),Object.defineProperty(n,"default",{enumerable:!0,get:function(){return i}});var t=s("9880"),r=s("23169");function o(e){var n=Object.assign({p:"p",code:"code",pre:"pre"},(0,r.useMDXComponents)(),e.components);return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)(n.p,{children:["The framework provides ",(0,t.jsx)(n.code,{children:"useI18n"})," this hook to get the internationalized text, the usage is as follows:"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-tsx",children:"import { useI18n } from '@modern-js/doc-tools/runtime';\n\nconst MyComponent = () => {\n  const { t } = useI18n();\n\n  return <div>{t('getting-started')}</div>;\n};\n"})}),"\n",(0,t.jsxs)(n.p,{children:["For better type hinting, you can configure ",(0,t.jsx)(n.code,{children:"paths"})," in tsconfig.json:"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-json",children:'{\n  "compilerOptions": {\n    "paths": {\n      "i18n": ["./i18n.json"]\n    }\n  }\n}\n'})}),"\n",(0,t.jsx)(n.p,{children:"Then use it like this in the component:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-tsx",children:"import { useI18n } from '@modern-js/doc-tools/runtime';\n\nconst MyComponent = () => {\n  const { t } = useI18n<keyof typeof import('i18n')>();\n\n  return <div>{t('getting-started')}</div>;\n};\n"})}),"\n",(0,t.jsxs)(n.p,{children:["This way you get type hints for all literal keys defined in ",(0,t.jsx)(n.code,{children:"i18n.json"}),"."]})]})}var i=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=Object.assign({},(0,r.useMDXComponents)(),e.components).wrapper;return n?(0,t.jsx)(n,Object.assign({},e,{children:(0,t.jsx)(o,e)})):o(e)}},79277:function(e,n,s){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),Object.defineProperty(n,"default",{enumerable:!0,get:function(){return d}});var t=s("9880"),r=s("23169"),o=s("27385");function i(e){var n=Object.assign({h2:"h2",a:"a",p:"p",pre:"pre",code:"code",div:"div"},(0,r.useMDXComponents)(),e.components);return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)(n.h2,{id:"nossr",children:["NoSSR",(0,t.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#nossr",children:"#"})]}),"\n",(0,t.jsx)(n.p,{children:"用于在服务端渲染时不渲染某些组件。使用方法如下："}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-tsx",children:"import { NoSSR } from '@modern-js/doc-tools/runtime';\n\nconst Component = () => {\n  return (\n    <NoSSR>\n      <div>这里的内容只会在客户端渲染</div>\n    </NoSSR>\n  );\n};\n"})}),"\n",(0,t.jsxs)(n.h2,{id:"tab/tabs",children:["Tab/Tabs",(0,t.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#tab/tabs",children:"#"})]}),"\n",(0,t.jsx)(n.p,{children:"你可以在文档中直接使用 Tab/Tabs 组件来实现 tab 切换的效果。比如"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-tsx",meta:'title="index.mdx"',children:'import { Tab, Tabs } from \'@modern-js/doc-tools/theme\';\n\nfunction App() {\n  return (\n    <Tabs>\n      <Tab label="Tab 1">Tab 1 content</Tab>\n      <Tab label="Tab 2">Tab 2 content</Tab>\n    </Tabs>\n  );\n}\n'})}),"\n","\n",(0,t.jsxs)(o.Tabs,{children:[(0,t.jsx)(o.Tab,{label:"1",value:"1",children:(0,t.jsx)(n.p,{children:"Tab 1 content"})}),(0,t.jsx)(o.Tab,{label:"2",value:"2",children:(0,t.jsx)(n.p,{children:"Tab 2 content"})})]}),"\n",(0,t.jsxs)(n.div,{className:"modern-directive info",children:[(0,t.jsx)(n.div,{className:"modern-directive-title",children:"提醒"}),(0,t.jsx)(n.div,{className:"modern-directive-content",children:(0,t.jsxs)(n.p,{children:["为了让你更方便地使用这些组件，框架内部对于 ",(0,t.jsx)(n.code,{children:"@modern-js/doc-tools/theme"})," 这个包做了 alias 处理，所以你可以直接使用 ",(0,t.jsx)(n.code,{children:"@theme"})," 来引入这些组件。\n"]})})]}),"\n",(0,t.jsx)(n.p,{children:"其中 Tabs 组件的 props 类型如下:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-ts",children:"interface TabsProps {\n  children: React.ReactNode;\n  defaultValue?: string;\n  groupId?: string;\n}\n"})}),"\n",(0,t.jsx)(n.p,{children:"defaultValue 用于设置默认选中的 tab 项，这个值会和 Tab 组件的 value 字段做比较，如果相等则选中该 tab。"}),"\n",(0,t.jsx)(n.p,{children:"groupId 用于设置 tab 项的分组，当你需要多个 Tabs 组件进行联动的时候，可以通过 groupId 来实现。groupId 相同的 Tabs 组件会进行联动。"}),"\n",(0,t.jsx)(n.p,{children:"Tab 组件的 props 类型如下:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-ts",children:"interface TabProps {\n  label: string;\n  // 用于标识当前 tab，如果不传则默认使用 label\n  value?: string;\n  children: React.ReactNode;\n}\n"})}),"\n",(0,t.jsxs)(n.p,{children:["其中的 ",(0,t.jsx)(n.code,{children:"value"})," 字段用于标识当前 tab，如果不传则默认使用 label。"]})]})}var d=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=Object.assign({},(0,r.useMDXComponents)(),e.components).wrapper;return n?(0,t.jsx)(n,Object.assign({},e,{children:(0,t.jsx)(i,e)})):i(e)}},15923:function(e,n,s){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),Object.defineProperty(n,"default",{enumerable:!0,get:function(){return i}});var t=s("9880"),r=s("23169");function o(e){var n=Object.assign({pre:"pre",code:"code",div:"div",p:"p",a:"a"},(0,r.useMDXComponents)(),e.components);return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-ts",meta:'title="modern.config.ts"',children:"import docTools, { defineConfig } from '@modern-js/doc-tools';\n\nexport default defineConfig({\n  doc: {\n    markdown: {\n      experimentalMdxRs: true,\n    },\n  },\n  plugins: [docTools()],\n});\n"})}),"\n",(0,t.jsxs)(n.div,{className:"modern-directive tip",children:[(0,t.jsx)(n.div,{className:"modern-directive-title",children:"注意"}),(0,t.jsx)(n.div,{className:"modern-directive-content",children:(0,t.jsxs)(n.p,{children:["这个功能底层基于 Modern.js Doc 自研的 ",(0,t.jsx)(n.a,{href:"https://github.com/web-infra-dev/mdx-rs-binding",target:"_blank",rel:"noopener noreferrer",children:"@modern-js/mdx-rs-binding"})," 库来实现，性能比 JS 版本的 MDX 编译器高 5 ~ 10 倍，但目前还不支持 JS 版本的插件，如果你需要加入自定义的 remark 或 rehype 插件，建议不要开启这个功能。\n"]})})]})]})}var i=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=Object.assign({},(0,r.useMDXComponents)(),e.components).wrapper;return n?(0,t.jsx)(n,Object.assign({},e,{children:(0,t.jsx)(o,e)})):o(e)}},89560:function(e,n,s){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),Object.defineProperty(n,"default",{enumerable:!0,get:function(){return i}});var t=s("9880"),r=s("23169");function o(e){var n=Object.assign({p:"p",code:"code",pre:"pre"},(0,r.useMDXComponents)(),e.components);return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)(n.p,{children:["框架提供了 ",(0,t.jsx)(n.code,{children:"useI18n"})," 这个 hook 来获取国际化文本，使用方式如下："]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-tsx",children:"import { useI18n } from '@modern-js/doc-tools/runtime';\n\nconst MyComponent = () => {\n  const { t } = useI18n();\n\n  return <div>{t('getting-started')}</div>;\n};\n"})}),"\n",(0,t.jsxs)(n.p,{children:["为了获得更好的类型提示，你可以在 tsconfig.json 中配置 ",(0,t.jsx)(n.code,{children:"paths"}),":"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-json",children:'{\n  "compilerOptions": {\n    "paths": {\n      "i18n": ["./i18n.json"]\n    }\n  }\n}\n'})}),"\n",(0,t.jsx)(n.p,{children:"然后在组件中这样使用:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-tsx",children:"import { useI18n } from '@modern-js/doc-tools/runtime';\n\nconst MyComponent = () => {\n  const { t } = useI18n<keyof typeof import('i18n')>();\n\n  return <div>{t('getting-started')}</div>;\n};\n"})}),"\n",(0,t.jsxs)(n.p,{children:["这样你就可以获得 ",(0,t.jsx)(n.code,{children:"i18n.json"})," 中定义的所有文本 key 的类型提示了。"]})]})}var i=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=Object.assign({},(0,r.useMDXComponents)(),e.components).wrapper;return n?(0,t.jsx)(n,Object.assign({},e,{children:(0,t.jsx)(o,e)})):o(e)}}}]);