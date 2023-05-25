(self.webpackChunk_modern_js_main_doc=self.webpackChunk_modern_js_main_doc||[]).push([["docs_zh_guides_topic-detail_framework-plugin_implement_mdx"],{8616:function(n,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0});!function(n,e){for(var i in e)Object.defineProperty(n,i,{enumerable:!0,get:e[i]})}(e,{frontmatter:function(){return o},title:function(){return l},toc:function(){return d},default:function(){return c}});var s=i("9880"),r=i("23169"),o={title:"如何编写插件",sidebar_position:3},l="如何编写插件",d=[{text:"实现插件",depth:2,id:"实现插件"},{text:"插件类型",depth:3,id:"插件类型"},{text:"插件配置项",depth:3,id:"插件配置项"},{text:"插件 API",depth:3,id:"插件-api"},{text:"异步 setup",depth:3,id:"异步-setup"},{text:"添加插件",depth:2,id:"添加插件"},{text:"开发本地插件",depth:3,id:"开发本地插件"},{text:"在 npm 上发布插件",depth:3,id:"在-npm-上发布插件"}];function t(n){var e=Object.assign({h1:"h1",a:"a",p:"p",h2:"h2",ul:"ul",li:"li",code:"code",pre:"pre",h3:"h3",img:"img",ol:"ol",strong:"strong"},(0,r.useMDXComponents)(),n.components);return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)(e.h1,{id:"如何编写插件",children:["如何编写插件",(0,s.jsx)(e.a,{className:"header-anchor","aria-hidden":"true",href:"#如何编写插件",children:"#"})]}),"\n",(0,s.jsx)(e.p,{children:"上一小节介绍了 Modern.js 插件的 Hook 模型，这一小节介绍如何编写插件。"}),"\n",(0,s.jsxs)(e.h2,{id:"实现插件",children:["实现插件",(0,s.jsx)(e.a,{className:"header-anchor","aria-hidden":"true",href:"#实现插件",children:"#"})]}),"\n",(0,s.jsx)(e.p,{children:"Modern.js 插件是一个对象，对象包含以下属性："}),"\n",(0,s.jsxs)(e.ul,{children:["\n",(0,s.jsxs)(e.li,{children:[(0,s.jsx)(e.code,{children:"name"}),": 插件的名称，唯一标识符。"]}),"\n",(0,s.jsxs)(e.li,{children:[(0,s.jsx)(e.code,{children:"setup"}),": 插件初始化函数，只会执行一次。setup 函数可以返回一个 Hooks 对象，Modern.js 会在特定的时机执行这些 Hooks。"]}),"\n"]}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-ts",children:"const myPlugin = {\n  name: 'my-plugin',\n\n  setup() {\n    // 执行一些初始化逻辑\n    const foo = '1';\n\n    // 返回一个 Hooks 对象\n    return {\n      afterBuild: () => {\n        // 在构建完成后执行逻辑\n      },\n    };\n  },\n};\n"})}),"\n",(0,s.jsxs)(e.p,{children:["另外，在插件中，允许配置与其他插件的执行顺序。详情可以参考",(0,s.jsx)(e.a,{href:"/guides/topic-detail/framework-plugin/relationship",children:"插件关系"}),"。"]}),"\n",(0,s.jsxs)(e.h3,{id:"插件类型",children:["插件类型",(0,s.jsx)(e.a,{className:"header-anchor","aria-hidden":"true",href:"#插件类型",children:"#"})]}),"\n",(0,s.jsx)(e.p,{children:"Modern-js 支持多种工程开发，如应用工程(app-tools), 模块工程(module-tools)等。"}),"\n",(0,s.jsx)(e.p,{children:"为了兼顾不同工程开发的差异和通性，Modern-js 将插件如下图进行组织:"}),"\n",(0,s.jsx)(e.p,{children:(0,s.jsx)(e.img,{src:"https://lf3-static.bytednsdoc.com/obj/eden-cn/eeeh7uhbepxlpe/modern-website/plugin-relationship.jpg",alt:"plugin-relationship"})}),"\n",(0,s.jsx)(e.p,{children:"从图可以看出，Modern-js 将插件大致分为两类:"}),"\n",(0,s.jsxs)(e.ol,{children:["\n",(0,s.jsxs)(e.li,{children:["\n",(0,s.jsx)(e.p,{children:"通用插件: 插件只会包含一些基础的 Hooks"}),"\n"]}),"\n",(0,s.jsxs)(e.li,{children:["\n",(0,s.jsx)(e.p,{children:"工程插件: 不同的工程开发会在通用插件的基础上扩展出自己的 Hooks, Config 等类型。"}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(e.p,{children:["使用 TypeScript 时，可以引入内置的 ",(0,s.jsx)(e.code,{children:"CliPlugin"})," 等类型，为插件提供正确的类型推导。"]}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-ts",children:"import type { CliPlugin } from '@modern-js/core';\n\nconst myPlugin: CliPlugin = {\n  name: 'my-plugin',\n\n  setup() {\n    const foo = '1';\n\n    return {\n      afterBuild: () => {\n        // 在构建完成后执行逻辑\n      },\n    };\n  },\n};\n"})}),"\n",(0,s.jsx)(e.p,{children:"上述代码为通用插件，只包含一些基础的 Hooks。 Modern.js 支持通过泛型对插件的定义进行扩展："}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-ts",children:"import type { CliPlugin, AppTools } from '@modern-js/app-tools';\n\nconst myPlugin: CliPlugin<AppTools> = {\n  name: 'my-plugin',\n\n  setup() {\n    const foo = '1';\n\n    return {\n      afterBuild: () => {\n        // 在构建完成后执行逻辑\n      },\n    };\n  },\n};\n"})}),"\n",(0,s.jsxs)(e.p,{children:["如果仔细观察 ",(0,s.jsx)(e.code,{children:"AppTools"})," 这个类型，可以发现 ",(0,s.jsx)(e.code,{children:"AppTools"})," 由 3 种类型构成."]}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-ts",children:"type AppTools = {\n  hooks: AppToolsHooks;\n  userConfig: AppToolsUserConfig;\n  normalizedConfig: AppToolsNormalizedConfig;\n};\n"})}),"\n",(0,s.jsx)(e.p,{children:"当编写插件时，插件通过泛型扩展在不同的基础上扩展自己的 Hooks 等类型:"}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-ts",children:"// 通用插件上扩展\nimport type { CliPlugin } from '@modern-js/core';\nimport type { MyPluginHook } from 'xxx';\n\nconst myPlugin: CliPlugin<{ hooks: MyPluginHook }> = {};\n"})}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-ts",children:"// 在 @modern-js/app-tools 基础上扩展\nimport type { CliPlugin, AppTools } from '@modern-js/app-tools';\nimport type { MyPluginHook } from 'xxx';\n\nconst myPlugin: CliPlugin<AppTools & { hooks: MyPluginHook }> = {};\n"})}),"\n",(0,s.jsxs)(e.p,{children:["详细说明，请参考 ",(0,s.jsx)(e.a,{href:"/guides/topic-detail/framework-plugin/extend",children:"扩展 Hook"}),"。"]}),"\n",(0,s.jsxs)(e.h3,{id:"插件配置项",children:["插件配置项",(0,s.jsx)(e.a,{className:"header-anchor","aria-hidden":"true",href:"#插件配置项",children:"#"})]}),"\n",(0,s.jsxs)(e.p,{children:[(0,s.jsx)(e.strong,{children:"建议将插件写成函数的形式"}),"，使插件能通过函数入参来接收配置项："]}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-ts",children:"import type { CliPlugin } from '@modern-js/core';\n\ntype MyPluginOptions = {\n  foo: string;\n};\n\nconst myPlugin = (options: MyPluginOptions): CliPlugin => ({\n  name: 'my-plugin',\n\n  setup() {\n    console.log(options.foo);\n  },\n});\n"})}),"\n",(0,s.jsxs)(e.h3,{id:"插件-api",children:["插件 API",(0,s.jsx)(e.a,{className:"header-anchor","aria-hidden":"true",href:"#插件-api",children:"#"})]}),"\n",(0,s.jsxs)(e.p,{children:["插件的 ",(0,s.jsx)(e.code,{children:"setup"})," 函数会接收一个 api 入参，你可以调用 api 上提供的一些方法来获取到配置、应用上下文等信息。"]}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-ts",children:"import type { CliPlugin } from '@modern-js/core';\n\nexport default (): CliPlugin => ({\n  name: 'my-plugin',\n\n  setup(api) {\n    // 获取应用原始配置\n    const config = api.useConfigContext();\n    // 获取应用运行上下文\n    const appContext = api.useAppContext();\n    // 获取解析之后的最终配置\n    const resolvedConfig = api.useResolvedConfigContext();\n  },\n});\n"})}),"\n",(0,s.jsxs)(e.p,{children:["插件 API 的详细说明，请参考 ",(0,s.jsx)(e.a,{href:"/guides/topic-detail/framework-plugin/plugin-api",children:"Plugin API"}),"。"]}),"\n",(0,s.jsxs)(e.h3,{id:"异步-setup",children:["异步 setup",(0,s.jsx)(e.a,{className:"header-anchor","aria-hidden":"true",href:"#异步-setup",children:"#"})]}),"\n",(0,s.jsx)(e.p,{children:"CLI 插件的 setup 可以是一个异步函数，在初始化过程中执行异步逻辑。"}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-ts",children:"import type { CliPlugin } from '@modern-js/core';\n\nexport default (): CliPlugin => ({\n  name: 'my-plugin',\n\n  async setup(api) {\n    await doSomething();\n  },\n});\n"})}),"\n",(0,s.jsxs)(e.h2,{id:"添加插件",children:["添加插件",(0,s.jsx)(e.a,{className:"header-anchor","aria-hidden":"true",href:"#添加插件",children:"#"})]}),"\n",(0,s.jsxs)(e.p,{children:["自定义插件的使用方式可以查看：",(0,s.jsx)(e.a,{href:"/configure/app/plugins",children:"plugins (框架插件)"}),"。下面会介绍 Modern.js 中推荐的插件实现方法。"]}),"\n",(0,s.jsxs)(e.h3,{id:"开发本地插件",children:["开发本地插件",(0,s.jsx)(e.a,{className:"header-anchor","aria-hidden":"true",href:"#开发本地插件",children:"#"})]}),"\n",(0,s.jsxs)(e.p,{children:["本地插件推荐写在 ",(0,s.jsx)(e.code,{children:"config/plugin"})," 目录下，并通过 ",(0,s.jsx)(e.code,{children:"export default"})," 导出："]}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-ts",meta:"title=config/plugin/myPlugin.ts",children:"import type { CliPlugin } from '@modern-js/core';\n\nexport default (): CliPlugin => ({\n  name: 'my-plugin',\n\n  setup() {\n    // 插件初始化\n  },\n});\n"})}),"\n",(0,s.jsxs)(e.p,{children:["然后在 ",(0,s.jsx)(e.code,{children:"modern.config.ts"})," 中注册对应的插件："]}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-ts",meta:'title="modern.config.ts"',children:"import { defineConfig } from '@modern-js/app-tools';\nimport myPlugin from './config/plugin/myPlugin';\n\nexport default defineConfig({\n  plugins: [myPlugin()],\n});\n"})}),"\n",(0,s.jsxs)(e.h3,{id:"在-npm-上发布插件",children:["在 npm 上发布插件",(0,s.jsx)(e.a,{className:"header-anchor","aria-hidden":"true",href:"#在-npm-上发布插件",children:"#"})]}),"\n",(0,s.jsx)(e.p,{children:"如果需要将 Modern.js 插件发布到 npm，推荐使用 Modern.js 中的模块工程方案来管理和构建。"}),"\n",(0,s.jsx)(e.p,{children:"首先创建一个空的模块工程方案项目，调整 npm 包名称："}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-json",children:'{\n  "name": "my-plugin"\n  ...\n}\n'})}),"\n",(0,s.jsx)(e.p,{children:"然后新建对应的插件文件："}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-ts",meta:"title=src/index.ts",children:"import type { CliPlugin } from '@modern-js/core';\n\nexport default (): CliPlugin => ({\n  name: 'my-plugin',\n\n  setup() {\n    // 插件初始化\n  },\n});\n"})}),"\n",(0,s.jsxs)(e.p,{children:["发布之后，安装到需要使用的项目 ",(0,s.jsx)(e.code,{children:"pnpm add my-plugin"}),"，这里以一个应用项目为例，然后在 ",(0,s.jsx)(e.code,{children:"modern.config.ts"})," 中添加："]}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-ts",meta:'title="modern.config.ts"',children:"import { defineConfig } from '@modern-js/app-tools';\nimport myPlugin from 'my-plugin';\n\nexport default defineConfig({\n  plugins: [myPlugin()],\n});\n"})}),"\n",(0,s.jsxs)(e.p,{children:["如果你发现目前 Modern.js 存在无法满足的场景，欢迎通过",(0,s.jsx)(e.strong,{children:"编写自定义插件的方式"}),"来一起建设 Modern.js 生态。"]})]})}var c=function(){var n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},e=Object.assign({},(0,r.useMDXComponents)(),n.components).wrapper;return e?(0,s.jsx)(e,Object.assign({},n,{children:(0,s.jsx)(t,n)})):t(n)}}}]);