(self.webpackChunk_modern_js_main_doc=self.webpackChunk_modern_js_main_doc||[]).push([["docs_en_guides_topic-detail_generator_plugin_context_md"],{93241:function(e,n,i){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),Object.defineProperty(n,"default",{enumerable:!0,get:function(){return c}});var t,r=i("15169"),o=i("43932"),s=i("9880"),d=i("23169");function a(e){var n=Object.assign({h1:"h1",a:"a",p:"p",code:"code",pre:"pre",div:"div",h2:"h2",ul:"ul",li:"li"},(0,d.useMDXComponents)(),e.components);return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)(n.h1,{id:"context",children:["Context",(0,s.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#context",children:"#"})]}),"\n",(0,s.jsxs)(n.p,{children:["By default, generator plugins will export a function that takes ",(0,s.jsx)(n.code,{children:"context"})," as a parameter. During execution, ",(0,s.jsx)(n.code,{children:"context"})," will be automatically injected into the generator plugin."]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-ts",meta:'title="src/index.ts"',children:"import { IPluginContext, ForgedAPI } from '@modern-js/generator-plugin';\n\nexport default function (context: IPluginContext) {\n  context.onForged(async (_api: ForgedAPI, _input: Record<string, unknown>) => {\n    /**\n     * Todo\n     */\n  });\n}\n"})}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.code,{children:"context"})," provides two types of APIs, which are used to customize input and define generator plugin lifecycle logic."]}),"\n",(0,s.jsxs)(n.div,{className:"modern-directive info",children:[(0,s.jsx)(n.div,{className:"modern-directive-title",children:"INFO"}),(0,s.jsx)(n.div,{className:"modern-directive-content",children:(0,s.jsxs)(n.p,{children:["Only some APIs are briefly explained below. For the complete API, please refer to ",(0,s.jsx)(n.a,{href:"/guides/topic-detail/generator/plugin/api/context",children:"Generator Plugin API"}),".\n"]})})]}),"\n",(0,s.jsxs)(n.h2,{id:"customize-input",children:["Customize Input",(0,s.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#customize-input",children:"#"})]}),"\n",(0,s.jsx)(n.p,{children:"Both Modern.js Web App and Npm Module schemes have default input interactions. These APIs can be used to add, modify, hide, and provide default values for these inputs."}),"\n",(0,s.jsx)(n.p,{children:"For example:"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"Add question"}),"\n"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-ts",children:"context.addInputBefore('packageManager', {\n  type: 'object',\n  properties: {\n    'username': {\n      type: 'string',\n      title: '用户名',\n    },\n  },\n});\n"})}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["Hide question by setting ",(0,s.jsx)(n.code,{children:"config"})]}),"\n"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-ts",children:"context.setDefaultConfig({ langauge: 'ts' });\n"})}),"\n",(0,s.jsxs)(n.h2,{id:"lifecycle",children:["Lifecycle",(0,s.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#lifecycle",children:"#"})]}),"\n",(0,s.jsx)(n.p,{children:"Generator plugin provide two lifecycle hooks to define generator plugin behavior:"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.code,{children:"onForged"}),": Lifecycle after file operations are completed."]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.code,{children:"afterForged"}),": Lifecycle after the ",(0,s.jsx)(n.code,{children:"onForged"})," hook function is executed."]}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(n.h2,{id:"onforged",children:[(0,s.jsx)(n.code,{children:"onForged"}),(0,s.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#onforged",children:"#"})]}),"\n",(0,s.jsx)(n.p,{children:"Hook function after the Modern.js project scheme generator has completed file operations. It is used to complete file operations in the generator plugin, such as adding template files, overwriting existing files, deleting existing files, etc."}),"\n",(0,s.jsxs)(n.p,{children:["When multiple generator plugins are executed simultaneously for extension type, the ",(0,s.jsx)(n.code,{children:"onForged"})," operations of the corresponding generator plugins will be executed in order according to the declared order."]}),"\n",(0,s.jsxs)(n.p,{children:["The ",(0,s.jsx)(n.code,{children:"onForged"})," function takes a callback function as a parameter, with ",(0,s.jsx)(n.code,{children:"api"})," and ",(0,s.jsx)(n.code,{children:"input"})," as arguments."]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-ts",children:"context.onForged(async (api: ForgedAPI, input: Record<string, unknown>) => {\n  const { language } = input;\n  api.addFile({\n      type: FileType.Text,\n      file: `src/index.${language as string}`,\n      templateFile: `index.${language as string}.handlebars`,\n      force: true,\n  });\n})\n"})}),"\n",(0,s.jsxs)(n.p,{children:["The ",(0,s.jsx)(n.code,{children:"api"})," object provides file operation-related methods supported by generator plugin."]}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.code,{children:"input"})," is the current user input, which includes the ",(0,s.jsx)(n.code,{children:"--config"})," parameter definition, the default scheme interaction, and the user input defined by the generator plugin."]}),"\n",(0,s.jsxs)(n.p,{children:["When adding a new file template, define the template file in the ",(0,s.jsx)(n.code,{children:"templates"})," directory, and then operate on it through the ",(0,s.jsx)(n.code,{children:"api"})," method above. The generator plugin defaults to operating on files in the ",(0,s.jsx)(n.code,{children:"templates"})," directory, so there is no need to declare the ",(0,s.jsx)(n.code,{children:"templates"})," path."]}),"\n",(0,s.jsxs)(n.h2,{id:"afterforged",children:[(0,s.jsx)(n.code,{children:"afterForged"}),(0,s.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#afterforged",children:"#"})]}),"\n",(0,s.jsxs)(n.p,{children:["Executed after the ",(0,s.jsx)(n.code,{children:"onForged"})," hook function is completed. It is mainly used to install dependencies, perform git operations, etc."]}),"\n",(0,s.jsx)(n.p,{children:"By default, Modern.js project scheme will install dependencies and initialize Git after completing file operations, and perform git initial submissions, etc. This hook function can be omitted."}),"\n",(0,s.jsxs)(n.p,{children:["For custom generator plugins that also support the ",(0,s.jsx)(n.code,{children:"custom"})," type, which only provides a small number of best practice project configurations, installation of dependencies and Git initialization operations need to be completed in this hook function."]}),"\n",(0,s.jsxs)(n.p,{children:["The ",(0,s.jsx)(n.code,{children:"afterForged"})," function also takes a callback function as a parameter, with ",(0,s.jsx)(n.code,{children:"api"})," and ",(0,s.jsx)(n.code,{children:"input"})," as arguments."]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-ts",children:"  context.afterForged(\n    async (api: AfterForgedAPI, input: Record<string, unknown>) => {\n      const { packageManager } = input;\n      console.info('packageManager:', packageManager);\n      await api.install();\n    },\n  );\n"})})]})}(t=globalThis).__RSPRESS_PAGE_META||(t.__RSPRESS_PAGE_META={}),globalThis.__RSPRESS_PAGE_META["/home/runner/work/modern.js/modern.js/packages/document/main-doc/docs/en/guides/topic-detail/generator/plugin/context.md"]={toc:[{text:"Customize Input",id:"customize-input",depth:2},{text:"Lifecycle",id:"lifecycle",depth:2},{text:"onForged",id:"onforged",depth:2},{text:"afterForged",id:"afterforged",depth:2}],title:"Context",frontmatter:{sidebar_position:4}};var c=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=Object.assign({},(0,d.useMDXComponents)(),e.components).wrapper;return n?(0,s.jsx)(n,o._(r._({},e),{children:(0,s.jsx)(a,r._({},e))})):a(e)}}}]);