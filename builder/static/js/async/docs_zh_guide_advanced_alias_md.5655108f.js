(self.webpackChunk_modern_js_builder_doc=self.webpackChunk_modern_js_builder_doc||[]).push([["docs_zh_guide_advanced_alias_md"],{35478:function(e,s,n){"use strict";n.r(s),n.d(s,{default:function(){return l}});var r,c=n("15169"),i=n("43932"),a=n("9880"),d=n("23169");function o(e){var s=Object.assign({h1:"h1",a:"a",p:"p",code:"code",ul:"ul",li:"li",h2:"h2",pre:"pre",div:"div"},(0,d.useMDXComponents)(),e.components);return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsxs)(s.h1,{id:"路径别名",children:["路径别名",(0,a.jsx)(s.a,{className:"header-anchor","aria-hidden":"true",href:"#路径别名",children:"#"})]}),"\n",(0,a.jsx)(s.p,{children:"路径别名（alias）允许开发者为模块定义别名，以便于在代码中更方便的引用它们。"}),"\n",(0,a.jsxs)(s.p,{children:["例如，假如你在项目中经常引用 ",(0,a.jsx)(s.code,{children:"src/common/request.ts"})," 模块，你可以为它定义一个别名 ",(0,a.jsx)(s.code,{children:"@request"}),"，然后在代码中通过 ",(0,a.jsx)(s.code,{children:"import request from '@request'"})," 来引用它，而不需要每次都写出完整的相对路径。同时，这也允许你将模块移动到不同的位置，而不需要更新代码中的所有 import 语法。"]}),"\n",(0,a.jsx)(s.p,{children:"在 Builder 中，你有两种方式可以设置路径别名:"}),"\n",(0,a.jsxs)(s.ul,{children:["\n",(0,a.jsxs)(s.li,{children:["通过 ",(0,a.jsx)(s.a,{href:"/api/config-source#sourcealias",children:"source.alias"})," 配置。"]}),"\n",(0,a.jsxs)(s.li,{children:["通过 ",(0,a.jsx)(s.code,{children:"tsconfig.json"})," 中的 ",(0,a.jsx)(s.code,{children:"paths"})," 配置。"]}),"\n"]}),"\n",(0,a.jsxs)(s.h2,{id:"通过-sourcealias-配置",children:["通过 ",(0,a.jsx)(s.code,{children:"source.alias"})," 配置",(0,a.jsx)(s.a,{className:"header-anchor","aria-hidden":"true",href:"#通过-sourcealias-配置",children:"#"})]}),"\n",(0,a.jsxs)(s.p,{children:[(0,a.jsx)(s.a,{href:"/api/config-source#sourcealias",children:"source.alias"})," 对应 webpack 原生的 ",(0,a.jsx)(s.a,{href:"https://webpack.js.org/configuration/resolve/#resolvealias",target:"_blank",rel:"noopener noreferrer",children:"resolve.alias"})," 配置，你可以通过对象或者函数的方式进行配置。"]}),"\n",(0,a.jsx)(s.p,{children:"首先你可以通过对象的方式进行配置，比如："}),"\n",(0,a.jsx)(s.pre,{children:(0,a.jsx)(s.code,{className:"language-js",children:"export default {\n  source: {\n    alias: {\n      '@common': './src/common',\n    },\n  },\n};\n"})}),"\n",(0,a.jsx)(s.p,{children:"其中的相对路径会被 Builder 自动补全为绝对路径。"}),"\n",(0,a.jsxs)(s.p,{children:["你也可以配置为一个函数，拿到预设的 ",(0,a.jsx)(s.code,{children:"alias"})," 对象，对其进行修改，比如："]}),"\n",(0,a.jsx)(s.pre,{children:(0,a.jsx)(s.code,{className:"language-js",children:"export default {\n  source: {\n    alias: alias => {\n      alias['@common'] = './src/common';\n      return alias;\n    },\n  },\n};\n"})}),"\n",(0,a.jsxs)(s.h2,{id:"通过-tsconfigjson-中的-paths-配置",children:["通过 ",(0,a.jsx)(s.code,{children:"tsconfig.json"})," 中的 ",(0,a.jsx)(s.code,{children:"paths"})," 配置",(0,a.jsx)(s.a,{className:"header-anchor","aria-hidden":"true",href:"#通过-tsconfigjson-中的-paths-配置",children:"#"})]}),"\n",(0,a.jsxs)(s.p,{children:["除了 ",(0,a.jsx)(s.code,{children:"source.alias"}),"，你还可以通过 ",(0,a.jsx)(s.code,{children:"tsconfig.json"})," 中的 ",(0,a.jsx)(s.code,{children:"paths"})," 进行配置，这是我们在 TypeScript 项目中推荐使用的方式，因为可以解决路径别名的类型问题。"]}),"\n",(0,a.jsx)(s.p,{children:"比如："}),"\n",(0,a.jsx)(s.pre,{children:(0,a.jsx)(s.code,{className:"language-json",children:'{\n  "compilerOptions": {\n    "paths": {\n      "@common/*": ["./src/common/*"]\n    }\n  }\n}\n'})}),"\n",(0,a.jsxs)(s.div,{className:"modern-directive tip",children:[(0,a.jsx)(s.div,{className:"modern-directive-title",children:"优先级"}),(0,a.jsx)(s.div,{className:"modern-directive-content",children:(0,a.jsxs)(s.p,{children:[(0,a.jsx)(s.code,{children:"paths"})," 配置的优先级高于 ",(0,a.jsx)(s.code,{children:"source.alias"}),"。\n"]})})]})]})}(r=globalThis).__RSPRESS_PAGE_META||(r.__RSPRESS_PAGE_META={}),globalThis.__RSPRESS_PAGE_META["%2Fhome%2Frunner%2Fwork%2Fmodern.js%2Fmodern.js%2Fpackages%2Fdocument%2Fbuilder-doc%2Fdocs%2Fzh%2Fguide%2Fadvanced%2Falias.md"]={toc:[{text:"通过 source.alias 配置",id:"通过-sourcealias-配置",depth:2},{text:"通过 tsconfig.json 中的 paths 配置",id:"通过-tsconfigjson-中的-paths-配置",depth:2}],title:"路径别名",frontmatter:{}};var l=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},s=Object.assign({},(0,d.useMDXComponents)(),e.components).wrapper;return s?(0,a.jsx)(s,(0,i._)((0,c._)({},e),{children:(0,a.jsx)(o,(0,c._)({},e))})):o(e)}}}]);