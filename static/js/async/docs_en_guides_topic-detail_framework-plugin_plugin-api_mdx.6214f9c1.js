(self.webpackChunk_modern_js_main_doc=self.webpackChunk_modern_js_main_doc||[]).push([["docs_en_guides_topic-detail_framework-plugin_plugin-api_mdx"],{93011:function(e,n,i){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),Object.defineProperty(n,"default",{enumerable:!0,get:function(){return d}});var o,r=i("15169"),t=i("43932"),s=i("9880"),a=i("23169");function c(e){var n=Object.assign({h1:"h1",a:"a",p:"p",code:"code",pre:"pre",h2:"h2",h3:"h3",div:"div"},(0,a.useMDXComponents)(),e.components);return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)(n.h1,{id:"plugin-api",children:["Plugin API",(0,s.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#plugin-api",children:"#"})]}),"\n",(0,s.jsxs)(n.p,{children:["The ",(0,s.jsx)(n.code,{children:"setup"})," function of the plugin will receive an ",(0,s.jsx)(n.code,{children:"api"})," imported parameter, and you can call some methods provided on the api to obtain information such as configuration and application context."]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-ts",children:"import type { CliPlugin } from '@modern-js/core';\n\nexport default (): CliPlugin => ({\n  name: 'my-plugin',\n\n  setup(api) {\n    // get user config\n    const config = api.useConfigContext();\n    // get plugin context\n    const appContext = api.useAppContext();\n    // get resolved config\n    const resolvedConfig = api.useResolvedConfigContext();\n  },\n});\n"})}),"\n",(0,s.jsxs)(n.h2,{id:"api",children:["API",(0,s.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#api",children:"#"})]}),"\n",(0,s.jsxs)(n.h3,{id:"useconfigcontext",children:["useConfigContext",(0,s.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#useconfigcontext",children:"#"})]}),"\n",(0,s.jsx)(n.p,{children:"Used to retrieve the original configuration of the application."}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-ts",children:"const useConfigContext: () => UserConfig;\n\ninterface UserConfig {\n  source?: SourceConfig;\n  output?: OutputConfig;\n  server?: ServerConfig;\n  deploy?: DeployConfig;\n  // ...other fields\n}\n"})}),"\n",(0,s.jsxs)(n.p,{children:["Please refer to ",(0,s.jsx)(n.a,{href:"/configure/app/usage",children:"Configuration"})," for the specific meanings of configuration fields."]}),"\n",(0,s.jsxs)(n.div,{className:"modern-directive tip",children:[(0,s.jsx)(n.div,{className:"modern-directive-title",children:"TIP"}),(0,s.jsx)(n.div,{className:"modern-directive-content",children:(0,s.jsxs)(n.p,{children:["This method returns a read-only configuration and cannot be modified. If you need to modify the configuration, please use ",(0,s.jsx)(n.a,{href:"/guides/topic-detail/framework-plugin/hook-list#config",children:"config hook"}),".\n"]})})]}),"\n",(0,s.jsxs)(n.h3,{id:"useresolvedconfigcontext",children:["useResolvedConfigContext",(0,s.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#useresolvedconfigcontext",children:"#"})]}),"\n",(0,s.jsx)(n.p,{children:"Used to retrieve the final configuration after parsing."}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-ts",children:"const useResolvedConfigContext: () => NormalizedConfig;\n\ninterface NormalizedConfig {\n  source: NormalizedSourceConfig;\n  output: NormalizedOutputConfig;\n  server: NormalizedServerConfig;\n  deploy: NormalizedDeployConfig;\n  _raw: UserConfig; // the original user config\n  // ...other fields\n}\n"})}),"\n",(0,s.jsxs)(n.p,{children:["Please refer to ",(0,s.jsx)(n.a,{href:"/configure/app/usage",children:"Configuration"})," for the specific meanings of configuration fields."]}),"\n",(0,s.jsxs)(n.div,{className:"modern-directive tip",children:[(0,s.jsx)(n.div,{className:"modern-directive-title",children:"TIP"}),(0,s.jsx)(n.div,{className:"modern-directive-content",children:(0,s.jsxs)(n.p,{children:["This method returns a read-only configuration and cannot be modified. If you need to modify the configuration, please use ",(0,s.jsx)(n.a,{href:"/guides/topic-detail/framework-plugin/hook-list#config",children:"config hook"}),".\n"]})})]}),"\n",(0,s.jsxs)(n.h3,{id:"useappcontext",children:["useAppContext",(0,s.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#useappcontext",children:"#"})]}),"\n",(0,s.jsx)(n.p,{children:"Used to retrieve the runtime context of the application."}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-ts",children:"const useAppContext: () => IAppContext;\n\ninterface IAppContext {\n  appDirectory: string;\n  configFile: string | false;\n  ip?: string;\n  port?: number;\n  distDirectory: string;\n  packageName: string;\n  srcDirectory: string;\n  sharedDirectory: string;\n  nodeModulesDirectory: string;\n  internalDirectory: string;\n  plugins: {\n    cli?: any;\n    server?: any;\n  }[];\n  entrypoints: Entrypoint[];\n  serverRoutes: ServerRoute[];\n  htmlTemplates: HtmlTemplates;\n}\n"})}),"\n",(0,s.jsxs)(n.h3,{id:"usehookrunners",children:["useHookRunners",(0,s.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#usehookrunners",children:"#"})]}),"\n",(0,s.jsx)(n.p,{children:"Used to retrieve the executor of Hooks and trigger the execution of specific Hooks."}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-ts",children:"import type { CliPlugin } from '@modern-js/core';\n\nexport default (): CliPlugin => ({\n  name: 'my-plugin',\n\n  async setup(api) {\n    const hookRunners = api.useHookRunners();\n    // invoke afterBuild Hook\n    await hookRunners.afterBuild();\n  },\n});\n"})})]})}(o=globalThis).__RSPRESS_PAGE_META||(o.__RSPRESS_PAGE_META={}),globalThis.__RSPRESS_PAGE_META["/home/runner/work/modern.js/modern.js/packages/document/main-doc/docs/en/guides/topic-detail/framework-plugin/plugin-api.mdx"]={toc:[{text:"API",id:"api",depth:2},{text:"useConfigContext",id:"useconfigcontext",depth:3},{text:"useResolvedConfigContext",id:"useresolvedconfigcontext",depth:3},{text:"useAppContext",id:"useappcontext",depth:3},{text:"useHookRunners",id:"usehookrunners",depth:3}],title:"Plugin API",frontmatter:{title:"Plugin API",sidebar_position:6}};var d=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=Object.assign({},(0,a.useMDXComponents)(),e.components).wrapper;return n?(0,s.jsx)(n,t._(r._({},e),{children:(0,s.jsx)(c,r._({},e))})):c(e)}}}]);