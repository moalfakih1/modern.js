(self.webpackChunk_modern_js_main_doc=self.webpackChunk_modern_js_main_doc||[]).push([["docs_zh_configure_app_builder-plugins_mdx"],{70172:function(e,n,r){"use strict";Object.defineProperty(n,"__esModule",{value:!0});!function(e,n){for(var r in n)Object.defineProperty(e,r,{enumerable:!0,get:n[r]})}(n,{frontmatter:function(){return d},title:function(){return l},toc:function(){return c},default:function(){return o}});var i=r("12151"),s=r("23169"),d={title:"builderPlugins (构建插件)",sidebar_position:10},l="builderPlugins (构建插件)",c=[{text:"注意事项",depth:2,id:"注意事项"},{text:"何时使用",depth:2,id:"何时使用"},{text:"示例",depth:2,id:"示例"},{text:"使用 npm 上的插件",depth:3,id:"使用-npm-上的插件"},{text:"使用本地插件",depth:3,id:"使用本地插件"},{text:"插件配置项",depth:3,id:"插件配置项"}];function a(e){var n=Object.assign({h1:"h1",a:"a",ul:"ul",li:"li",strong:"strong",code:"code",p:"p",h2:"h2",h3:"h3",div:"div",button:"button",pre:"pre"},(0,s.useMDXComponents)(),e.components);return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsxs)(n.h1,{id:"builderplugins-(构建插件)",children:["builderPlugins (构建插件)",(0,i.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#builderplugins-(构建插件)",children:"#"})]}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"类型："})," ",(0,i.jsx)(n.code,{children:"BuilderPlugin[]"})]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"默认值："})," ",(0,i.jsx)(n.code,{children:"[]"})]}),"\n"]}),"\n",(0,i.jsx)(n.p,{children:"用于配置 Modern.js Builder 构建插件。"}),"\n",(0,i.jsxs)(n.p,{children:["Modern.js Builder 是 Modern.js 底层的构建引擎，请阅读 ",(0,i.jsx)(n.a,{href:"/guides/concept/builder",children:"构建能力"})," 了解相关背景。"]}),"\n",(0,i.jsxs)(n.p,{children:["如果你想了解 Builder 插件的编写方式，可以参考 ",(0,i.jsx)(n.a,{href:"https://modernjs.dev/builder/plugins/introduction.html",target:"_blank",rel:"noopener noreferrer",children:"Modern.js Builder - 插件系统"}),"。"]}),"\n",(0,i.jsxs)(n.h2,{id:"注意事项",children:["注意事项",(0,i.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#注意事项",children:"#"})]}),"\n",(0,i.jsxs)(n.p,{children:["该选项",(0,i.jsx)(n.strong,{children:"用于配置 Modern.js Builder 构建插件"}),"，如果你需要配置其他类型的插件，请选择对应的配置方式："]}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["配置 Modern.js 框架插件，请使用 ",(0,i.jsx)(n.a,{href:"/configure/app/plugins",children:"plugins"})," 配置项。"]}),"\n",(0,i.jsxs)(n.li,{children:["配置 webpack 插件，请使用 ",(0,i.jsx)(n.a,{href:"/configure/app/tools/webpack",children:"tools.webpack"})," 或 ",(0,i.jsx)(n.a,{href:"/configure/app/tools/webpack-chain",children:"tools.webpackChain"})," 配置项。"]}),"\n",(0,i.jsxs)(n.li,{children:["配置 Babel 插件，请使用 ",(0,i.jsx)(n.a,{href:"/configure/app/tools/babel",children:"tools.babel"})," 配置项。"]}),"\n"]}),"\n",(0,i.jsxs)(n.h2,{id:"何时使用",children:["何时使用",(0,i.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#何时使用",children:"#"})]}),"\n",(0,i.jsxs)(n.p,{children:["大部分场景下，我们推荐你使用 Modern.js 框架插件，框架插件可以通过 ",(0,i.jsx)(n.a,{href:"/configure/app/plugins",children:"plugins"})," 字段进行注册。因为框架插件提供的 API 更丰富、能力更强，而 Builder 插件提供的 API 只能用于构建场景。"]}),"\n",(0,i.jsxs)(n.p,{children:["当你需要引用一些现有的 Builder 插件（并且在 Modern.js 中没有相关能力），或是在不同的框架之间复用 Builder 插件时，你可以使用 ",(0,i.jsx)(n.code,{children:"builderPlugins"})," 字段进行注册。"]}),"\n",(0,i.jsxs)(n.h2,{id:"示例",children:["示例",(0,i.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#示例",children:"#"})]}),"\n",(0,i.jsx)(n.p,{children:"下面是 Builder 插件的使用示例。"}),"\n",(0,i.jsxs)(n.h3,{id:"使用-npm-上的插件",children:["使用 npm 上的插件",(0,i.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#使用-npm-上的插件",children:"#"})]}),"\n",(0,i.jsx)(n.p,{children:"使用 npm 上的插件，需要通过包管理器安装插件，并通过 import 引入。"}),"\n",(0,i.jsxs)(n.div,{className:"language-",children:[(0,i.jsx)(n.div,{className:"modern-code-title",children:"modern.config.ts"}),(0,i.jsxs)(n.div,{className:"modern-code-content",children:[(0,i.jsx)(n.button,{className:"copy"}),(0,i.jsx)(n.pre,{className:"code",children:(0,i.jsx)(n.code,{className:"language-ts",meta:'title="modern.config.ts"',children:"import myBuilderPlugin from 'my-builder-plugin';\n\nexport default defineConfig({\n  builderPlugins: [myBuilderPlugin()],\n});\n"})})]})]}),"\n",(0,i.jsxs)(n.h3,{id:"使用本地插件",children:["使用本地插件",(0,i.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#使用本地插件",children:"#"})]}),"\n",(0,i.jsx)(n.p,{children:"使用本地代码仓库中的插件，直接通过相对路径 import 引入即可。"}),"\n",(0,i.jsxs)(n.div,{className:"language-",children:[(0,i.jsx)(n.div,{className:"modern-code-title",children:"modern.config.ts"}),(0,i.jsxs)(n.div,{className:"modern-code-content",children:[(0,i.jsx)(n.button,{className:"copy"}),(0,i.jsx)(n.pre,{className:"code",children:(0,i.jsx)(n.code,{className:"language-ts",meta:'title="modern.config.ts"',children:"import myBuilderPlugin from './plugin/myBuilderPlugin';\n\nexport default defineConfig({\n  builderPlugins: [myBuilderPlugin()],\n});\n"})})]})]}),"\n",(0,i.jsxs)(n.h3,{id:"插件配置项",children:["插件配置项",(0,i.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#插件配置项",children:"#"})]}),"\n",(0,i.jsx)(n.p,{children:"如果插件提供了一些自定义的配置项，可以通过插件函数的参数传入配置。"}),"\n",(0,i.jsxs)(n.div,{className:"language-",children:[(0,i.jsx)(n.div,{className:"modern-code-title",children:"modern.config.ts"}),(0,i.jsxs)(n.div,{className:"modern-code-content",children:[(0,i.jsx)(n.button,{className:"copy"}),(0,i.jsx)(n.pre,{className:"code",children:(0,i.jsx)(n.code,{className:"language-ts",meta:'title="modern.config.ts"',children:"import myBuilderPlugin from 'my-builder-plugin';\n\nexport default defineConfig({\n  builderPlugins: [\n    myBuilderPlugin({\n      foo: 1,\n      bar: 2,\n    }),\n  ],\n});\n"})})]})]})]})}var o=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=Object.assign({},(0,s.useMDXComponents)(),e.components).wrapper;return n?(0,i.jsx)(n,Object.assign({},e,{children:(0,i.jsx)(a,e)})):a(e)}}}]);