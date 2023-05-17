(self.webpackChunk_modern_js_main_doc=self.webpackChunk_modern_js_main_doc||[]).push([["docs_zh_guides_topic-detail_generator_plugin_develop_mdx"],{45758:function(e,n,d){"use strict";Object.defineProperty(n,"__esModule",{value:!0});!function(e,n){for(var d in n)Object.defineProperty(e,d,{enumerable:!0,get:n[d]})}(n,{frontmatter:function(){return i},title:function(){return c},toc:function(){return a},default:function(){return o}});var r=d("9880"),s=d("23169"),i={sidebar_position:3},c="如何开发生成器插件",a=[{text:"创建项目",depth:2,id:"创建项目"},{text:"扩展工程方案",depth:3,id:"扩展工程方案"},{text:"创建工程方案场景",depth:3,id:"创建工程方案场景"},{text:"开发插件逻辑",depth:2,id:"开发插件逻辑"},{text:"自定义输入",depth:3,id:"自定义输入"},{text:"onForged",depth:3,id:"onforged"},{text:"afterForged",depth:3,id:"afterforged"}];function l(e){var n=Object.assign({h1:"h1",a:"a",h2:"h2",p:"p",div:"div",pre:"pre",code:"code",h3:"h3",ul:"ul",li:"li"},(0,s.useMDXComponents)(),e.components);return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(n.h1,{id:"如何开发生成器插件",children:["如何开发生成器插件",(0,r.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#如何开发生成器插件",children:"#"})]}),"\n",(0,r.jsxs)(n.h2,{id:"创建项目",children:["创建项目",(0,r.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#创建项目",children:"#"})]}),"\n",(0,r.jsx)(n.p,{children:"Modern.js 提供了生成器插件用于创建开发项目，可直接执行以下命令创建:"}),"\n",(0,r.jsx)(n.div,{className:"language-",children:(0,r.jsx)(n.div,{className:"modern-code-content",children:(0,r.jsx)(n.pre,{className:"code",children:(0,r.jsx)(n.code,{className:"language-bash",children:"npx @modern-js/create@latest plugin --plugin @modern-js/generator-plugin-plugin\n"})})})}),"\n",(0,r.jsx)(n.p,{children:"插件类型不同，会提问不同的问题，可根据需求选择插件类型"}),"\n",(0,r.jsxs)(n.h3,{id:"扩展工程方案",children:["扩展工程方案",(0,r.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#扩展工程方案",children:"#"})]}),"\n",(0,r.jsx)(n.div,{className:"language-",children:(0,r.jsx)(n.div,{className:"modern-code-content",children:(0,r.jsx)(n.pre,{className:"code",children:(0,r.jsx)(n.code,{children:"? 请选择你想创建的工程类型：Npm 模块\n? 请选择项目场景：生成器插件\n? 插件包名：plugin\n? 请选择开发语言：TS\n? 请选择包管理工具：pnpm\n? 插件类型：扩展\n? 插件基础类型：应用\n"})})})}),"\n",(0,r.jsxs)(n.h3,{id:"创建工程方案场景",children:["创建工程方案场景",(0,r.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#创建工程方案场景",children:"#"})]}),"\n",(0,r.jsx)(n.div,{className:"language-",children:(0,r.jsx)(n.div,{className:"modern-code-content",children:(0,r.jsx)(n.pre,{className:"code",children:(0,r.jsx)(n.code,{children:"? 请选择你想创建的工程类型：Npm 模块\n? 请选择项目场景：生成器插件\n? 插件包名：plugin\n? 请选择开发语言：TS\n? 请选择包管理工具：pnpm\n? 插件类型：自定义\n? 插件关键字：mobile-app\n? 插件展示名称：移动应用\n? 插件基础类型：应用\n"})})})}),"\n",(0,r.jsxs)(n.p,{children:["创建项目命令执行完成后，会对应的生成一个开发生成器插件的项目，",(0,r.jsx)(n.code,{children:"package.json"})," 中也会根据你的选择对应的生成 ",(0,r.jsx)(n.code,{children:"meta"})," 信息。"]}),"\n",(0,r.jsxs)(n.div,{className:"modern-directive info",children:[(0,r.jsx)(n.div,{className:"modern-directive-title",children:"INFO"}),(0,r.jsxs)(n.div,{className:"modern-directive-content",children:[(0,r.jsxs)(n.p,{children:["生成器插件开发可参考 ",(0,r.jsx)(n.code,{children:"@modern-js/generator-plugin-plugin"})," ",(0,r.jsx)(n.a,{href:"https://github.com/web-infra-dev/modern.js/tree/main/packages/generator/plugins/generator-plugin",target:"_blank",rel:"noopener noreferrer",children:"源码地址"})]}),"\n"]})]}),"\n",(0,r.jsxs)(n.h2,{id:"开发插件逻辑",children:["开发插件逻辑",(0,r.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#开发插件逻辑",children:"#"})]}),"\n",(0,r.jsxs)(n.p,{children:["在 ",(0,r.jsx)(n.code,{children:"src/index.ts"})," 中完成插件逻辑开发。"]}),"\n",(0,r.jsxs)(n.p,{children:["插件默认导出一个函数，函数参数为 ",(0,r.jsx)(n.code,{children:"context"}),"，",(0,r.jsx)(n.code,{children:"context"})," 上提供一些方法可直接对当前项目进行操作。"]}),"\n",(0,r.jsxs)(n.p,{children:["简单介绍一下提供的方法，完整的 API 列表可查看",(0,r.jsx)(n.a,{href:"/guides/topic-detail/generator/plugin/api/introduce",children:"生成器插件 API"}),"。"]}),"\n",(0,r.jsxs)(n.h3,{id:"自定义输入",children:["自定义输入",(0,r.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#自定义输入",children:"#"})]}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"addInputBefore"}),"\n"]}),"\n",(0,r.jsxs)(n.p,{children:["在默认的输入前添加输入，比如在",(0,r.jsx)(n.code,{children:"选择包管理工具"}),"问题前添加问题，具体 Modern.js 每个问题的配置可查看",(0,r.jsx)(n.a,{href:"/guides/topic-detail/generator/config/common",children:"工程方案配置"}),"。"]}),"\n",(0,r.jsx)(n.div,{className:"language-",children:(0,r.jsx)(n.div,{className:"modern-code-content",children:(0,r.jsx)(n.pre,{className:"code",children:(0,r.jsx)(n.code,{className:"language-ts",children:"context.addInputBefore('input2', {\n  type: 'object',\n  properties: {\n    'input1.2': {\n      type: 'string',\n      title: 'input1.2',\n    },\n  },\n});\n"})})})}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"setInput"}),"\n"]}),"\n",(0,r.jsx)(n.p,{children:"设置已经存在问题的属性"}),"\n",(0,r.jsx)(n.div,{className:"language-",children:(0,r.jsx)(n.div,{className:"modern-code-content",children:(0,r.jsx)(n.pre,{className:"code",children:(0,r.jsx)(n.code,{className:"language-ts",children:"context.setInput('test', 'type', 'number');\ncontext.setInput('test', 'enum', [{ value: 'option1', label: '选项一' }]);\n"})})})}),"\n",(0,r.jsxs)(n.h3,{id:"onforged",children:["onForged",(0,r.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#onforged",children:"#"})]}),"\n",(0,r.jsxs)(n.p,{children:["工程方案类型文件相关操作执行完成后钩子，多个扩展产检将按照 ",(0,r.jsx)(n.code,{children:"plugin"})," 参数顺序依次执行其 ",(0,r.jsx)(n.code,{children:"onForged"})," 函数。"]}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.code,{children:"onForged"})," 参数是一个回调函数，函数参数为 ",(0,r.jsx)(n.code,{children:"api"})," 和 ",(0,r.jsx)(n.code,{children:"input"}),"。"]}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.code,{children:"api"})," 上会提供一些文件操作相关的方法，可在该钩子中对当前的模板文件进行操作。"]}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.code,{children:"input"})," 为当前用户输入，可用于获取用户当前的输入信息及配置信息。"]}),"\n",(0,r.jsxs)(n.p,{children:["当需要新的模板文件时，可直接在 ",(0,r.jsx)(n.code,{children:"templates"})," 目录添加，在 ",(0,r.jsx)(n.code,{children:"onForged"})," 函数中可直接对 ",(0,r.jsx)(n.code,{children:"templates"})," 目录文件进行操作，比如下方的 ",(0,r.jsx)(n.code,{children:"addFile"})," 中 ",(0,r.jsx)(n.code,{children:"templateFile"})," 参数就为 ",(0,r.jsx)(n.code,{children:"templates"})," 目录下的文件。这里不需要显示的声明 ",(0,r.jsx)(n.code,{children:"templates"}),"，直接写相对于 ",(0,r.jsx)(n.code,{children:"templates"})," 的相对路径即可。"]}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.code,{children:"onForged"})," 中支持的 API 函数也可参考 ",(0,r.jsx)(n.a,{href:"/guides/topic-detail/generator/plugin/api/hook/onForged",children:"生成器插件 API"}),"。"]}),"\n",(0,r.jsx)(n.div,{className:"language-",children:(0,r.jsx)(n.div,{className:"modern-code-content",children:(0,r.jsx)(n.pre,{className:"code",children:(0,r.jsx)(n.code,{className:"language-ts",children:"context.onForged(async (api: ForgedAPI, input: Record<string, unknown>) => {\n  const { language } = input;\n  api.addFile({\n    type: FileType.Text,\n    file: `src/index.${language as string}`,\n    templateFile: `index.${language as string}.handlebars`,\n    force: true,\n  });\n});\n"})})})}),"\n",(0,r.jsxs)(n.h3,{id:"afterforged",children:["afterForged",(0,r.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#afterforged",children:"#"})]}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.code,{children:"onForged"})," 函数执行完成后钩子，这里主要可进行安装依赖，Git 操作等。"]}),"\n",(0,r.jsx)(n.p,{children:"如果你的工程方案是基于 Modern.js 提供的三种工程方案进行的，这个钩子函数是可以不需要的。默认的工程方案中会自动包含安装依赖、提交代码逻辑。"}),"\n",(0,r.jsxs)(n.p,{children:["生成器插件还支持了一种自定义的 ",(0,r.jsx)(n.code,{children:"custom"})," 类型，这种类型只提供了少量的开发层面的最佳实践的代码，比如 ",(0,r.jsx)(n.code,{children:".gitignore"}),"、",(0,r.jsx)(n.code,{children:".editorConfig"})," 等文件，这时则需要在 ",(0,r.jsx)(n.code,{children:"afterForged"})," 函数中手动补充安装依赖和 Git 操作逻辑。"]}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.code,{children:"afterForged"})," 参数也是一个回调函数，函数参数为 ",(0,r.jsx)(n.code,{children:"api"})," 和 ",(0,r.jsx)(n.code,{children:"input"}),"。"]}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.code,{children:"api"})," 上会提供一些 npm、Git 等方法，可在该钩子中进行安装依赖，Git 操作。"]}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.code,{children:"input"})," 为当前用户输入，可用于获取用户当前的输入信息及配置信息。"]}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.code,{children:"afterForged"})," 中支持的 API 函数也可参考 ",(0,r.jsx)(n.a,{href:"/guides/topic-detail/generator/plugin/api/hook/afterForged",children:"生成器插件 API"}),"。"]})]})}var o=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=Object.assign({},(0,s.useMDXComponents)(),e.components).wrapper;return n?(0,r.jsx)(n,Object.assign({},e,{children:(0,r.jsx)(l,e)})):l(e)}}}]);