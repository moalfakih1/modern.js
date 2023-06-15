(self.webpackChunk_modern_js_builder_doc=self.webpackChunk_modern_js_builder_doc||[]).push([["docs_zh_plugins_plugin-vue_mdx"],{91192:function(e,n,r){"use strict";Object.defineProperty(n,"__esModule",{value:!0});!function(e,n){for(var r in n)Object.defineProperty(e,r,{enumerable:!0,get:n[r]})}(n,{frontmatter:function(){return i},title:function(){return l},toc:function(){return a},default:function(){return h}});var s=r("9880"),d=r("23169"),i={},l="Vue 插件",a=[{text:"快速开始",depth:2,id:"快速开始"},{text:"安装插件",depth:3,id:"安装插件"},{text:"注册插件",depth:3,id:"注册插件"},{text:"配置",depth:2,id:"配置"},{text:"vueLoaderOptions",depth:3,id:"vueloaderoptions"}];function c(e){var n=Object.assign({h1:"h1",a:"a",p:"p",h2:"h2",h3:"h3",pre:"pre",code:"code",ul:"ul",li:"li",strong:"strong"},(0,d.useMDXComponents)(),e.components);return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)(n.h1,{id:"vue-插件",children:["Vue 插件",(0,s.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#vue-插件",children:"#"})]}),"\n",(0,s.jsx)(n.p,{children:"Vue 插件提供了对 Vue 3 应用构建的支持。"}),"\n",(0,s.jsxs)(n.h2,{id:"快速开始",children:["快速开始",(0,s.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#快速开始",children:"#"})]}),"\n",(0,s.jsxs)(n.h3,{id:"安装插件",children:["安装插件",(0,s.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#安装插件",children:"#"})]}),"\n",(0,s.jsx)(n.p,{children:"你可以通过如下的命令安装插件:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"# npm\nnpm install @modern-js/builder-plugin-vue -D\n\n# yarn\nyarn add @modern-js/builder-plugin-vue -D\n\n# pnpm\npnpm install @modern-js/builder-plugin-vue -D\n"})}),"\n",(0,s.jsxs)(n.h3,{id:"注册插件",children:["注册插件",(0,s.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#注册插件",children:"#"})]}),"\n",(0,s.jsxs)(n.p,{children:["你可以通过 ",(0,s.jsx)(n.code,{children:"addPlugins"})," 方法来注册 Vue 插件："]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-js",children:"import { builderPluginVue } from '@modern-js/builder-plugin-vue';\n\nbuilder.addPlugins([builderPluginVue()]);\n"})}),"\n",(0,s.jsxs)(n.p,{children:["安装完插件后，你可以直接在代码中引入 ",(0,s.jsx)(n.code,{children:"*.vue"})," 文件，无须添加其他配置。"]}),"\n",(0,s.jsxs)(n.h2,{id:"配置",children:["配置",(0,s.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#配置",children:"#"})]}),"\n",(0,s.jsx)(n.p,{children:"如果你需要自定义 Vue 的编译行为，可以使用以下配置项。"}),"\n",(0,s.jsxs)(n.h3,{id:"vueloaderoptions",children:["vueLoaderOptions",(0,s.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#vueloaderoptions",children:"#"})]}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"类型："})," ",(0,s.jsx)(n.code,{children:"VueLoaderOptions"})]}),"\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.strong,{children:"默认值："})}),"\n"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-js",children:"const defaultOptions = {\n  compilerOptions: {\n    preserveWhitespace: false,\n  },\n  experimentalInlineMatchResource: builder === 'rspack',\n};\n"})}),"\n",(0,s.jsxs)(n.p,{children:["传递给 ",(0,s.jsx)(n.code,{children:"vue-loader"})," 的选项，请查阅 ",(0,s.jsx)(n.a,{href:"https://vue-loader.vuejs.org/",target:"_blank",rel:"noopener noreferrer",children:"vue-loader 文档"})," 来了解具体用法。"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-ts",children:"builderPluginVue({\n  vueLoaderOptions: {\n    hotReload: false,\n  },\n});\n"})})]})}var h=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=Object.assign({},(0,d.useMDXComponents)(),e.components).wrapper;return n?(0,s.jsx)(n,Object.assign({},e,{children:(0,s.jsx)(c,e)})):c(e)}}}]);