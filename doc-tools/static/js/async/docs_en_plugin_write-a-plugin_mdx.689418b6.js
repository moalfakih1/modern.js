(self.webpackChunk_modern_js_doc_tools_doc=self.webpackChunk_modern_js_doc_tools_doc||[]).push([["docs_en_plugin_write-a-plugin_mdx"],{39267:function(e,n,i){"use strict";Object.defineProperty(n,"__esModule",{value:!0});!function(e,n){for(var i in n)Object.defineProperty(e,i,{enumerable:!0,get:n[i]})}(n,{frontmatter:function(){return a},title:function(){return o},toc:function(){return l},default:function(){return r}});var s=i("12151"),t=i("23169"),a={},o="Write a plugin",l=[{text:"1. Define a plugin",depth:3,id:"1--define-a-plugin"},{text:"2. Use a plugin",depth:3,id:"2--use-a-plugin"}];function c(e){var n=Object.assign({h1:"h1",a:"a",p:"p",h3:"h3",div:"div",button:"button",pre:"pre",code:"code"},(0,t.useMDXComponents)(),e.components);return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)(n.h1,{id:"write-a-plugin",children:["Write a plugin",(0,s.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#write-a-plugin",children:"#"})]}),"\n",(0,s.jsx)(n.p,{children:"Let's inject a global component as an example to see how to define and use plugins."}),"\n",(0,s.jsxs)(n.h3,{id:"1--define-a-plugin",children:["1. Define a plugin",(0,s.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#1--define-a-plugin",children:"#"})]}),"\n",(0,s.jsxs)(n.div,{className:"language-",children:[(0,s.jsx)(n.div,{className:"modern-code-title",children:"plugin.ts"}),(0,s.jsxs)(n.div,{className:"modern-code-content",children:[(0,s.jsx)(n.button,{className:"copy"}),(0,s.jsx)(n.pre,{className:"code",children:(0,s.jsx)(n.code,{className:"language-tsx",meta:'title="plugin.ts"',children:"import { DocPlugin } from '@modern-js/doc-tools';\n\nexport function pluginMonitor(slug: string): DocPlugin {\n  // Component path, you need to implement the content of the component yourself\n  const componentPath = path.join(__dirname, 'Example.tsx');\n  return {\n    name: 'plugin-monitor',\n    // Path to global components\n    globalUIComponents: [componentPath],\n    // Global variable definitions for build phase\n    builderConfig: {\n      source: {\n        define: {\n          'process.env.SLUG': JSON.stringify(slug),\n        },\n      },\n    },\n  };\n}\n"})})]})]}),"\n",(0,s.jsxs)(n.div,{className:"language-",children:[(0,s.jsx)(n.div,{className:"modern-code-title",children:"Example.tsx"}),(0,s.jsxs)(n.div,{className:"modern-code-content",children:[(0,s.jsx)(n.button,{className:"copy"}),(0,s.jsx)(n.pre,{className:"code",children:(0,s.jsx)(n.code,{className:"language-tsx",meta:'title="Example.tsx"',children:"import React from 'react';\n\nconst Example = () => {\n  console.log(process.env.SLUG);\n  return <div>Example</div>;\n};\n\nexport default Example;\n"})})]})]}),"\n",(0,s.jsx)(n.p,{children:"A plugin is generally a function that receives some plugin params (optional) and returns an object that contains the name of the plugin and other config."}),"\n",(0,s.jsxs)(n.p,{children:["In the above example, we define a plugin named ",(0,s.jsx)(n.code,{children:"plugin-example"}),", which will define a global environment variable ",(0,s.jsx)(n.code,{children:"slug"})," during the build phase, and inject a global component ",(0,s.jsx)(n.code,{children:"Example.tsx"})," in the document."]}),"\n",(0,s.jsxs)(n.h3,{id:"2--use-a-plugin",children:["2. Use a plugin",(0,s.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#2--use-a-plugin",children:"#"})]}),"\n",(0,s.jsxs)(n.p,{children:["Register plugins via ",(0,s.jsx)(n.code,{children:"doc.plugins"})," in ",(0,s.jsx)(n.code,{children:"modern.config.ts"}),":"]}),"\n",(0,s.jsxs)(n.div,{className:"language-",children:[(0,s.jsx)(n.div,{className:"modern-code-title",children:"modern.config.ts"}),(0,s.jsxs)(n.div,{className:"modern-code-content",children:[(0,s.jsx)(n.button,{className:"copy"}),(0,s.jsx)(n.pre,{className:"code",children:(0,s.jsx)(n.code,{className:"language-tsx",meta:'title="modern.config.ts"',children:"import { pluginExample } from './plugin';\n\nexport default {\n  doc: {\n    plugins: [pluginMonitor('test')],\n  },\n};\n"})})]})]}),"\n",(0,s.jsxs)(n.p,{children:["Then the ",(0,s.jsx)(n.code,{children:"Example"})," component will be injected into the page and we can access the ",(0,s.jsx)(n.code,{children:"slug"})," variable in the component."]})]})}var r=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=Object.assign({},(0,t.useMDXComponents)(),e.components).wrapper;return n?(0,s.jsx)(n,Object.assign({},e,{children:(0,s.jsx)(c,e)})):c(e)}}}]);