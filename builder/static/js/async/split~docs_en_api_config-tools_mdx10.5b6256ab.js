(self.webpackChunk_modern_js_builder_doc=self.webpackChunk_modern_js_builder_doc||[]).push([["split~docs_en_api_config-tools_mdx10"],{41620:function(e,n,s){"use strict";Object.defineProperty(n,"__esModule",{value:!0});!function(e,n){for(var s in n)Object.defineProperty(e,s,{enumerable:!0,get:n[s]})}(n,{frontmatter:function(){return t},title:function(){return i},toc:function(){return o},default:function(){return d}});var r=s("12151"),c=s("23169"),t={},i="",o=[{text:"Object Type",depth:3,id:"object-type"},{text:"Function Type",depth:3,id:"function-type"}];function l(e){var n=Object.assign({ul:"ul",li:"li",strong:"strong",code:"code",div:"div",button:"button",pre:"pre",p:"p",a:"a",h3:"h3"},(0,c.useMDXComponents)(),e.components);return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"Type:"})," ",(0,r.jsx)(n.code,{children:"Object | Function | undefined"})]}),"\n",(0,r.jsx)(n.li,{children:(0,r.jsx)(n.strong,{children:"Default:"})}),"\n"]}),"\n",(0,r.jsx)(n.div,{className:"language-",children:(0,r.jsxs)(n.div,{className:"modern-code-content",children:[(0,r.jsx)(n.button,{className:"copy"}),(0,r.jsx)(n.pre,{className:"code",children:(0,r.jsx)(n.code,{className:"language-js",children:"const defaultTerserOptions = {\n  terserOptions: {\n    mangle: {\n      safari10: true,\n    },\n  },\n};\n"})})]})}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"Bundler:"})," ",(0,r.jsx)(n.code,{children:"only support webpack"})]}),"\n"]}),"\n",(0,r.jsxs)(n.p,{children:["When building for production, Builder will minimize the JavaScript code through ",(0,r.jsx)(n.a,{href:"https://github.com/webpack-contrib/terser-webpack-plugin",target:"_blank",rel:"noopener noreferrer",children:"terser-webpack-plugin"}),". The config of ",(0,r.jsx)(n.a,{href:"https://github.com/webpack-contrib/terser-webpack-plugin",target:"_blank",rel:"noopener noreferrer",children:"terser-webpack-plugin"})," can be modified via ",(0,r.jsx)(n.code,{children:"tools.terser"}),"."]}),"\n",(0,r.jsxs)(n.h3,{id:"object-type",children:["Object Type",(0,r.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#object-type",children:"#"})]}),"\n",(0,r.jsxs)(n.p,{children:["When ",(0,r.jsx)(n.code,{children:"tools.terser"})," is ",(0,r.jsx)(n.code,{children:"Object"})," type, it will be merged with the default config via ",(0,r.jsx)(n.code,{children:"Object.assign"}),"."]}),"\n",(0,r.jsx)(n.p,{children:"For example, to exclude some files from minification:"}),"\n",(0,r.jsx)(n.div,{className:"language-",children:(0,r.jsxs)(n.div,{className:"modern-code-content",children:[(0,r.jsx)(n.button,{className:"copy"}),(0,r.jsx)(n.pre,{className:"code",children:(0,r.jsx)(n.code,{className:"language-js",children:"export default {\n  tools: {\n    terser: {\n      exclude: /\\/excludes/,\n    },\n  },\n};\n"})})]})}),"\n",(0,r.jsxs)(n.h3,{id:"function-type",children:["Function Type",(0,r.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#function-type",children:"#"})]}),"\n",(0,r.jsxs)(n.p,{children:["When ",(0,r.jsx)(n.code,{children:"tools.terser"})," is ",(0,r.jsx)(n.code,{children:"Function"})," type, the default config is passed in as the first parameter, the config object can be modified directly, or a value can be returned as the final result."]}),"\n",(0,r.jsx)(n.div,{className:"language-",children:(0,r.jsxs)(n.div,{className:"modern-code-content",children:[(0,r.jsx)(n.button,{className:"copy"}),(0,r.jsx)(n.pre,{className:"code",children:(0,r.jsx)(n.code,{className:"language-js",children:"export default {\n  tools: {\n    terser: opts => {\n      opts.exclude = /\\/excludes/;\n    },\n  },\n};\n"})})]})})]})}var d=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=Object.assign({},(0,c.useMDXComponents)(),e.components).wrapper;return n?(0,r.jsx)(n,Object.assign({},e,{children:(0,r.jsx)(l,e)})):l(e)}}}]);