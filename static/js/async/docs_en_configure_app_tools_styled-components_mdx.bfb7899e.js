(self.webpackChunk_modern_js_main_doc=self.webpackChunk_modern_js_main_doc||[]).push([["docs_en_configure_app_tools_styled-components_mdx"],{8038:function(e,n,s){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),Object.defineProperty(n,"default",{enumerable:!0,get:function(){return i}});var t=s("9880"),r=s("23169");function o(e){var n=Object.assign({ul:"ul",li:"li",strong:"strong",code:"code",pre:"pre",p:"p",a:"a"},(0,r.useMDXComponents)(),e.components);return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"Type:"})," ",(0,t.jsx)(n.code,{children:"Object | Function"})]}),"\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.strong,{children:"Default:"})}),"\n"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-js",children:"{\n  displayName: true,\n  // `isSSR` is true in SSR build\n  ssr: isSSR,\n  // `pure` is enabled in production to reduce bundle size\n  pure: isProd,\n  transpileTemplateLiterals: true,\n}\n"})}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"Bundler:"})," ",(0,t.jsx)(n.code,{children:"only support webpack"})]}),"\n"]}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.code,{children:"tools.styledComponents"})," config is corresponding to ",(0,t.jsx)(n.a,{href:"https://github.com/styled-components/babel-plugin-styled-components",target:"_blank",rel:"noopener noreferrer",children:"babel-plugin-styled-components"}),"."]}),"\n",(0,t.jsx)(n.p,{children:"When the value is an Object, use the Object.assign function to merge with the default config. For example:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-js",children:"export default {\n  tools: {\n    styledComponents: {\n      pure: false,\n    },\n  },\n};\n"})}),"\n",(0,t.jsx)(n.p,{children:"When the config is a Function, the first parameter is the default configuration, and the second parameter provides some utility functions that can be called directly:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-js",children:"export default {\n  tools: {\n    styledComponents(config) {\n      config.pure = false;\n    },\n  },\n};\n"})})]})}var i=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=Object.assign({},(0,r.useMDXComponents)(),e.components).wrapper;return n?(0,t.jsx)(n,Object.assign({},e,{children:(0,t.jsx)(o,e)})):o(e)}},38093:function(e,n,s){"use strict";Object.defineProperty(n,"__esModule",{value:!0});!function(e,n){for(var s in n)Object.defineProperty(e,s,{enumerable:!0,get:n[s]})}(n,{frontmatter:function(){return i},title:function(){return l},toc:function(){return c},default:function(){return a}});var t=s("9880"),r=s("23169"),o=s.ir(s("8038")),i={sidebar_label:"styledComponents"},l="tools.styledComponents",c=[];function d(e){var n=Object.assign({h1:"h1",a:"a",div:"div",p:"p"},(0,r.useMDXComponents)(),e.components);return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)(n.h1,{id:"toolsstyledcomponents",children:["tools.styledComponents",(0,t.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#toolsstyledcomponents",children:"#"})]}),"\n",(0,t.jsxs)(n.div,{className:"modern-directive tip",children:[(0,t.jsx)(n.div,{className:"modern-directive-title",children:"TIP"}),(0,t.jsx)(n.div,{className:"modern-directive-content",children:(0,t.jsxs)(n.p,{children:["This config is provided by Modern.js Builder, more detail can see ",(0,t.jsx)(n.a,{href:"https://modernjs.dev/builder/en/api/config-tools.html#toolsstyledcomponents",target:"_blank",rel:"noopener noreferrer",children:"tools.styledComponents"}),".\n"]})})]}),"\n","\n",(0,t.jsx)(o.default,{})]})}var a=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=Object.assign({},(0,r.useMDXComponents)(),e.components).wrapper;return n?(0,t.jsx)(n,Object.assign({},e,{children:(0,t.jsx)(d,e)})):d(e)}}}]);