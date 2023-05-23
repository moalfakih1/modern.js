(self.webpackChunk_modern_js_main_doc=self.webpackChunk_modern_js_main_doc||[]).push([["docs_zh_configure_app_tools_jest_mdx"],{6926:function(e,n,s){"use strict";Object.defineProperty(n,"__esModule",{value:!0});!function(e,n){for(var s in n)Object.defineProperty(e,s,{enumerable:!0,get:n[s]})}(n,{frontmatter:function(){return c},title:function(){return o},toc:function(){return i},default:function(){return l}});var r=s("9880"),t=s("23169"),c={sidebar_label:"jest"},o="tools.jest",i=[];function d(e){var n=Object.assign({h1:"h1",a:"a",ul:"ul",li:"li",strong:"strong",code:"code",div:"div",p:"p",pre:"pre"},(0,t.useMDXComponents)(),e.components);return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(n.h1,{id:"toolsjest",children:["tools.jest",(0,r.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#toolsjest",children:"#"})]}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"类型："})," ",(0,r.jsx)(n.code,{children:"Object | Function"})]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"默认值："})," ",(0,r.jsx)(n.code,{children:"{}"})]}),"\n"]}),"\n",(0,r.jsxs)(n.div,{className:"modern-directive caution",children:[(0,r.jsx)(n.div,{className:"modern-directive-title",children:"注意"}),(0,r.jsxs)(n.div,{className:"modern-directive-content",children:[(0,r.jsxs)(n.p,{children:["需要先通过 ",(0,r.jsx)(n.code,{children:"pnpm run new"})," 启用 单元测试 功能。"]}),"\n"]})]}),"\n",(0,r.jsxs)(n.p,{children:["对应 ",(0,r.jsx)(n.a,{href:"https://jestjs.io/docs/configuration",target:"_blank",rel:"noopener noreferrer",children:"Jest"})," 的配置，当为 ",(0,r.jsx)(n.code,{children:"Object"})," 类型时，可以配置 Jest 所支持的所有底层配置 。"]}),"\n",(0,r.jsxs)(n.div,{className:"language-",children:[(0,r.jsx)(n.div,{className:"modern-code-title",children:"modern.config.js"}),(0,r.jsx)(n.div,{className:"modern-code-content",children:(0,r.jsx)(n.pre,{className:"code",children:(0,r.jsx)(n.code,{className:"language-js",meta:"title=modern.config.js",children:"export default defineConfig({\n  tools: {\n    jest: {\n      testTimeout: 10000,\n    },\n  },\n});\n"})})})]}),"\n",(0,r.jsxs)(n.p,{children:["值为 ",(0,r.jsx)(n.code,{children:"Function"})," 类型时，默认配置作为第一个参数传入，需要返回新的 Jest 配置对象。"]}),"\n",(0,r.jsxs)(n.div,{className:"language-",children:[(0,r.jsx)(n.div,{className:"modern-code-title",children:"modern.config.js"}),(0,r.jsx)(n.div,{className:"modern-code-content",children:(0,r.jsx)(n.pre,{className:"code",children:(0,r.jsx)(n.code,{className:"language-js",meta:"title=modern.config.js",children:"export default defineConfig({\n  tools: {\n    jest: options => {\n      return {\n        ...options,\n        testTimeout: 10000,\n      };\n    },\n  },\n});\n"})})})]})]})}var l=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=Object.assign({},(0,t.useMDXComponents)(),e.components).wrapper;return n?(0,r.jsx)(n,Object.assign({},e,{children:(0,r.jsx)(d,e)})):d(e)}}}]);