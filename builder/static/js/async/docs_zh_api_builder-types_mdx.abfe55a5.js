(self.webpackChunkwebpack=self.webpackChunkwebpack||[]).push([["docs_zh_api_builder-types_mdx"],{55049:function(e,r,n){"use strict";Object.defineProperty(r,"__esModule",{value:!0});!function(e,r){for(var n in r)Object.defineProperty(e,n,{enumerable:!0,get:r[n]})}(r,{frontmatter:function(){return s},title:function(){return l},toc:function(){return a},default:function(){return t}});var d=n("12151"),i=n("21447"),s={extractApiHeaders:[2]},l="Builder Types",a=[{text:"BuilderInstance",depth:2,id:"builderinstance"},{text:"BuilderContext",depth:2,id:"buildercontext"},{text:"BuilderPlugin",depth:2,id:"builderplugin"},{text:"BuilderTarget",depth:2,id:"buildertarget"},{text:"BuilderEntry",depth:2,id:"builderentry"},{text:"CreateBuilderOptions",depth:2,id:"createbuilderoptions"}];function c(e){var r=Object.assign({h1:"h1",a:"a",p:"p",h2:"h2",div:"div",button:"button",pre:"pre",code:"code"},(0,i.useMDXComponents)(),e.components);return(0,d.jsxs)(d.Fragment,{children:[(0,d.jsxs)(r.h1,{id:"builder-types",children:["Builder Types",(0,d.jsx)(r.a,{className:"header-anchor","aria-hidden":"true",href:"#builder-types",children:"#"})]}),"\n",(0,d.jsx)(r.p,{children:"本章节描述了 Builder 提供的一些类型定义。"}),"\n",(0,d.jsxs)(r.h2,{id:"builderinstance",children:["BuilderInstance",(0,d.jsx)(r.a,{className:"header-anchor","aria-hidden":"true",href:"#builderinstance",children:"#"})]}),"\n",(0,d.jsx)(r.p,{children:"Builder 实例的类型。"}),"\n",(0,d.jsx)(r.div,{className:"language-",children:(0,d.jsxs)(r.div,{className:"modern-code-content",children:[(0,d.jsx)(r.button,{className:"copy"}),(0,d.jsx)(r.pre,{className:"code",children:(0,d.jsx)(r.code,{className:"language-ts",children:"import type { BuilderInstance } from '@modern-js/builder';\n\nlet builder: BuilderInstance;\n"})})]})}),"\n",(0,d.jsx)(r.p,{children:"你可以通过泛型来传入 Provider 的类型，使 Builder 实例获得更准确的类型定义："}),"\n",(0,d.jsx)(r.div,{className:"language-",children:(0,d.jsxs)(r.div,{className:"modern-code-content",children:[(0,d.jsx)(r.button,{className:"copy"}),(0,d.jsx)(r.pre,{className:"code",children:(0,d.jsx)(r.code,{className:"language-ts",children:"import type { createBuilder, type BuilderInstance } from '@modern-js/builder';\nimport type { BuilderWebpackProvider } from '@modern-js/builder-webpack-provider';\n\nlet builder: BuilderInstance<BuilderWebpackProvider>;\n"})})]})}),"\n",(0,d.jsxs)(r.h2,{id:"buildercontext",children:["BuilderContext",(0,d.jsx)(r.a,{className:"header-anchor","aria-hidden":"true",href:"#buildercontext",children:"#"})]}),"\n",(0,d.jsx)(r.p,{children:"Builder 实例中 context 属性的类型定义。"}),"\n",(0,d.jsx)(r.div,{className:"language-",children:(0,d.jsxs)(r.div,{className:"modern-code-content",children:[(0,d.jsx)(r.button,{className:"copy"}),(0,d.jsx)(r.pre,{className:"code",children:(0,d.jsx)(r.code,{className:"language-ts",children:"import type { BuilderContext } from '@modern-js/builder';\n\nconst context: BuilderContext = builder.context;\n"})})]})}),"\n",(0,d.jsxs)(r.h2,{id:"builderplugin",children:["BuilderPlugin",(0,d.jsx)(r.a,{className:"header-anchor","aria-hidden":"true",href:"#builderplugin",children:"#"})]}),"\n",(0,d.jsxs)(r.p,{children:["Builder 插件的类型，需要配合 provider 中提供的 ",(0,d.jsx)(r.code,{children:"BuilderPluginAPI"})," 类型来使用。"]}),"\n",(0,d.jsx)(r.div,{className:"language-",children:(0,d.jsxs)(r.div,{className:"modern-code-content",children:[(0,d.jsx)(r.button,{className:"copy"}),(0,d.jsx)(r.pre,{className:"code",children:(0,d.jsx)(r.code,{className:"language-ts",children:"import type { BuilderPlugin } from '@modern-js/builder';\nimport type { BuilderPluginAPI } from '@modern-js/builder-webpack-provider';\n\nconst myPlugin: BuilderPlugin<BuilderPluginAPI> = {\n  name: 'my-plugin',\n  setup() {},\n};\n"})})]})}),"\n",(0,d.jsxs)(r.h2,{id:"buildertarget",children:["BuilderTarget",(0,d.jsx)(r.a,{className:"header-anchor","aria-hidden":"true",href:"#buildertarget",children:"#"})]}),"\n",(0,d.jsx)(r.p,{children:"Builder 构建产物的类型。"}),"\n",(0,d.jsx)(r.div,{className:"language-",children:(0,d.jsxs)(r.div,{className:"modern-code-content",children:[(0,d.jsx)(r.button,{className:"copy"}),(0,d.jsx)(r.pre,{className:"code",children:(0,d.jsx)(r.code,{className:"language-ts",children:"import type { BuilderTarget } from '@modern-js/builder';\n"})})]})}),"\n",(0,d.jsxs)(r.h2,{id:"builderentry",children:["BuilderEntry",(0,d.jsx)(r.a,{className:"header-anchor","aria-hidden":"true",href:"#builderentry",children:"#"})]}),"\n",(0,d.jsxs)(r.p,{children:["对应 ",(0,d.jsx)(r.code,{children:"createBuilder"})," 方法的 ",(0,d.jsx)(r.code,{children:"entry"})," 选项的类型。"]}),"\n",(0,d.jsx)(r.div,{className:"language-",children:(0,d.jsxs)(r.div,{className:"modern-code-content",children:[(0,d.jsx)(r.button,{className:"copy"}),(0,d.jsx)(r.pre,{className:"code",children:(0,d.jsx)(r.code,{className:"language-ts",children:"import type { BuilderEntry } from '@modern-js/builder';\n"})})]})}),"\n",(0,d.jsxs)(r.h2,{id:"createbuilderoptions",children:["CreateBuilderOptions",(0,d.jsx)(r.a,{className:"header-anchor","aria-hidden":"true",href:"#createbuilderoptions",children:"#"})]}),"\n",(0,d.jsxs)(r.p,{children:["对应 ",(0,d.jsx)(r.code,{children:"createBuilder"})," 方法的入参类型。"]}),"\n",(0,d.jsx)(r.div,{className:"language-",children:(0,d.jsxs)(r.div,{className:"modern-code-content",children:[(0,d.jsx)(r.button,{className:"copy"}),(0,d.jsx)(r.pre,{className:"code",children:(0,d.jsx)(r.code,{className:"language-ts",children:"import type { CreateBuilderOptions } from '@modern-js/builder';\n"})})]})})]})}var t=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},r=Object.assign({},(0,i.useMDXComponents)(),e.components).wrapper;return r?(0,d.jsx)(r,Object.assign({},e,{children:(0,d.jsx)(c,e)})):c(e)}}}]);