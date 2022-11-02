(window.webpackJsonp=window.webpackJsonp||[]).push([[49],{270:function(t,s,a){"use strict";a.r(s);var e=a(4),r=Object(e.a)({},(function(){var t=this,s=t._self._c;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h1",{attrs:{id:"快速上手"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#快速上手"}},[t._v("#")]),t._v(" 快速上手")]),t._v(" "),s("h2",{attrs:{id:"使用-modern-js-应用"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#使用-modern-js-应用"}},[t._v("#")]),t._v(" 使用 Modern.js 应用")]),t._v(" "),s("p",[s("strong",[t._v("Modern.js 应用从 2.0 版本开始，默认使用 Modern.js Builder 作为构建引擎")]),t._v("。")]),t._v(" "),s("p",[t._v("因此，如果你是一名业务开发者，那么不需要手动接入 Builder，只需要创建一个 Modern.js 2.0 项目，直接就可以使用 Builder 提供的所有能力。")]),t._v(" "),s("blockquote",[s("p",[t._v("Tips: Modern.js 2.0 仍在开发中，尚未正式发布。")])]),t._v(" "),s("h2",{attrs:{id:"在前端框架中接入"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#在前端框架中接入"}},[t._v("#")]),t._v(" 在前端框架中接入")]),t._v(" "),s("p",[t._v("如果你正在开发一个前端框架，可以通过下面的步骤来接入 Builder:")]),t._v(" "),s("h3",{attrs:{id:"_1-安装-builder"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_1-安装-builder"}},[t._v("#")]),t._v(" 1. 安装 Builder")]),t._v(" "),s("p",[t._v("你需要安装两个包，其中：")]),t._v(" "),s("ul",[s("li",[s("code",[t._v("@modern-js/builder")]),t._v(" 为 Builder 的核心包，导出了 Builder 的核心 API。")]),t._v(" "),s("li",[s("code",[t._v("@modern-js/builder-webpack-provider")]),t._v(" 为 Builder 的一个 Provider，提供了基于 webpack 的构建能力。")])]),t._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[s("span",{pre:!0,attrs:{class:"token function"}},[t._v("pnpm")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("add")]),t._v(" @modern-js/builder @modern-js/builder-webpack-provider -D\n")])])]),s("blockquote",[s("p",[t._v("在进行版本升级时，请确保你安装的 builder 和 provider 为同一个版本。")])]),t._v(" "),s("h3",{attrs:{id:"_2-创建-builder-实例"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_2-创建-builder-实例"}},[t._v("#")]),t._v(" 2. 创建 Builder 实例")]),t._v(" "),s("p",[t._v("创建 Builder 实例的过程分两步：")]),t._v(" "),s("p",[t._v("首先你需要初始化 Builder Provider，并传入 "),s("code",[t._v("builderConfig")]),t._v(" 配置对象。Builder 提供了丰富的配置项，允许你对构建行为进行灵活定制。此时你还不需要了解配置项的具体内容，传入一个空对象即可。你可以在 "),s("RouterLink",{attrs:{to:"/zh/api/#配置"}},[t._v("API - 配置")]),t._v(" 中找到所有可用的配置项。")],1),t._v(" "),s("div",{staticClass:"language-ts extra-class"},[s("pre",{pre:!0,attrs:{class:"language-ts"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" createBuilder "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("from")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'@modern-js/builder'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" builderWebpackProvider "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("from")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'@modern-js/builder-webpack-provider'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" provider "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("builderWebpackProvider")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  builderConfig"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// some configs")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),s("p",[t._v("拿到 provider 对象后，你可以调用 "),s("code",[t._v("createBuilder")]),t._v(" 方法来创建一个 Builder 实例对象：")]),t._v(" "),s("div",{staticClass:"language-ts extra-class"},[s("pre",{pre:!0,attrs:{class:"language-ts"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" builder "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("await")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("createBuilder")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("provider"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  entry"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    index"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'./src/index.ts'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),s("p",[t._v("除了上述示例中的 "),s("code",[t._v("entry")]),t._v(" 选项，"),s("code",[t._v("createBuilder")]),t._v(" 方法也提供了一些其他的选项，你可以在 "),s("RouterLink",{attrs:{to:"/zh/api/builder-core.html#createbuilder"}},[t._v("API - createBuilder")]),t._v(" 中进一步了解。")],1),t._v(" "),s("h3",{attrs:{id:"_3-调用-builder-实例方法"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_3-调用-builder-实例方法"}},[t._v("#")]),t._v(" 3. 调用 Builder 实例方法")]),t._v(" "),s("p",[t._v("Builder 实例提供了与构建相关的各个方法，你可以根据实际场景来进行使用。")]),t._v(" "),s("p",[t._v("在本地开发场景，建议使用 "),s("RouterLink",{attrs:{to:"/zh/api/builder-instance.html#builder-startdevserver"}},[t._v("builder.startDevServer")]),t._v(" 方法，调用后会启动本地 Dev Server。")],1),t._v(" "),s("div",{staticClass:"language-ts extra-class"},[s("pre",{pre:!0,attrs:{class:"language-ts"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("await")]),t._v(" builder"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("startDevServer")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),s("p",[t._v("成功启动 Dev Server 后，可以看到以下日志信息：")]),t._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[t._v("info    Starting dev server"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("..")]),t._v(".\ninfo    Dev server running at:\n\n  "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" Local:    http://localhost:8081\n  "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" Network:  http://192.168.0.1:8081\n")])])]),s("p",[t._v("在生产环境部署场景，建议使用 "),s("RouterLink",{attrs:{to:"/zh/api/builder-instance.html#builder-build"}},[t._v("builder.build")]),t._v(" 方法，调用后会构建出生产环境产物。")],1),t._v(" "),s("div",{staticClass:"language-ts extra-class"},[s("pre",{pre:!0,attrs:{class:"language-ts"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("await")]),t._v(" builder"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("build")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),s("blockquote",[s("p",[t._v("关于 Builder 实例方法的更多介绍，请阅读 "),s("RouterLink",{attrs:{to:"/zh/api/builder-instance.html"}},[t._v("Builder Instance")]),t._v(" 章节。")],1)]),t._v(" "),s("p",[t._v("通过以上三个步骤，你已经了解了 Builder 基本的使用方法。接下来你可以通过 Builder 插件和 Builder 配置来对构建流程进行定制。")]),t._v(" "),s("h2",{attrs:{id:"下一步"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#下一步"}},[t._v("#")]),t._v(" 下一步")]),t._v(" "),s("p",[t._v("你可能想要：")]),t._v(" "),s("NextSteps",[s("Step",{attrs:{href:"/guide/glossary.html",title:"名词解释",description:"了解 Builder 相关的概念"}}),t._v(" "),s("Step",{attrs:{href:"/guide/features.html",title:"功能导航",description:"了解 Builder 提供的所有功能"}}),t._v(" "),s("Step",{attrs:{href:"/api",title:"查阅 API",description:"查看详细的 API 文档"}})],1)],1)}),[],!1,null,null,null);s.default=r.exports}}]);