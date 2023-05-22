(self.webpackChunk_modern_js_main_doc=self.webpackChunk_modern_js_main_doc||[]).push([["docs_en_apis_app_hooks_src_app_mdx"],{64537:function(e,n,t){"use strict";Object.defineProperty(n,"__esModule",{value:!0});!function(e,n){for(var t in n)Object.defineProperty(e,t,{enumerable:!0,get:n[t]})}(n,{frontmatter:function(){return p},title:function(){return i},toc:function(){return o},default:function(){return a}});var r=t("9880"),s=t("23169"),p={title:"App.[tj]sx",sidebar_position:1},i="App.[tj]sx",o=[];function c(e){var n=Object.assign({h1:"h1",a:"a",p:"p",code:"code",div:"div",pre:"pre"},(0,s.useMDXComponents)(),e.components);return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(n.h1,{id:"app[tj]sx",children:["App.[tj]sx",(0,r.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#app[tj]sx",children:"#"})]}),"\n",(0,r.jsx)(n.p,{children:"Entry identifier if App want control route by code."}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.code,{children:"App.[tj]sx"})," is not the actual App entry, Modern.js will auto generate the entry file, the content is roughly as follows:"]}),"\n",(0,r.jsx)(n.div,{className:"language-",children:(0,r.jsx)(n.div,{className:"modern-code-content",children:(0,r.jsx)(n.pre,{className:"code",children:(0,r.jsx)(n.code,{className:"language-js",children:"import React from 'react';\nimport { createApp, bootstrap } from '@modern-js/runtime';\n// App.[jt]sx\nimport App from '@_modern_js_src/App';\nimport { state } from '@modern-js/runtime/plugins';\nimport {\n  immer,\n  effects,\n  autoActions,\n  devtools,\n} from '@modern-js/runtime/model';\n\nconst createStatePlugins = config => {\n  const plugins = [];\n  plugins.push(immer(config['immer']));\n  plugins.push(effects(config['effects']));\n  plugins.push(autoActions(config['autoActions']));\n  plugins.push(devtools(config['devtools']));\n  return plugins;\n};\nlet AppWrapper = null;\nfunction render() {\n  AppWrapper = createApp({\n    plugins: [\n      state({\n        ...{ plugins: createStatePlugins(true) },\n        ...App?.config?.state,\n      }),\n    ],\n  })(App);\n  if (IS_BROWSER) {\n    bootstrap(AppWrapper, MOUNT_ID);\n  }\n  return AppWrapper;\n}\nAppWrapper = render();\nexport default AppWrapper;\n"})})})}),"\n",(0,r.jsxs)(n.div,{className:"modern-directive note",children:[(0,r.jsx)(n.div,{className:"modern-directive-title",children:"NOTE"}),(0,r.jsxs)(n.div,{className:"modern-directive-content",children:[(0,r.jsxs)(n.p,{children:["In multi-entry App, each entry can have a ",(0,r.jsx)(n.code,{children:"App.[jt]sx"}),", for detail, see ",(0,r.jsx)(n.a,{href:"/guides/concept/entries",children:"Entry"}),"."]}),"\n"]})]})]})}var a=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=Object.assign({},(0,s.useMDXComponents)(),e.components).wrapper;return n?(0,r.jsx)(n,Object.assign({},e,{children:(0,r.jsx)(c,e)})):c(e)}}}]);