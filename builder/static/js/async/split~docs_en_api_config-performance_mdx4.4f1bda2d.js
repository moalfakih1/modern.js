(self.webpackChunkwebpack=self.webpackChunkwebpack||[]).push([["split~docs_en_api_config-performance_mdx4"],{83:function(e,n,s){"use strict";Object.defineProperty(n,"__esModule",{value:!0});!function(e,n){for(var s in n)Object.defineProperty(e,s,{enumerable:!0,get:n[s]})}(n,{frontmatter:function(){return l},title:function(){return t},toc:function(){return a},default:function(){return d}});var r=s("12151"),c=s("21447");let l={},t="",a=[];function o(e){let n=Object.assign({ul:"ul",li:"li",strong:"strong",code:"code",p:"p",div:"div",button:"button",pre:"pre"},(0,c.useMDXComponents)(),e.components);return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"Type:"})," ",(0,r.jsx)(n.code,{children:"Object | undefined"})]}),"\n"]}),"\n",(0,r.jsxs)(n.p,{children:["You have two ways to enable ",(0,r.jsx)(n.code,{children:"webpack-bundle-analyzer"})," to analyze the size of output files:"]}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["Add environment variable ",(0,r.jsx)(n.code,{children:"BUNDLE_ANALYZE=true"}),"."]}),"\n",(0,r.jsxs)(n.li,{children:["Add ",(0,r.jsx)(n.code,{children:"performance.bundleAnalyze"})," config."]}),"\n"]}),"\n",(0,r.jsxs)(n.p,{children:["By default, ",(0,r.jsx)(n.code,{children:"webpack-bundle-analyzer"})," is not enabled. When enabled, its configuration is as follows:"]}),"\n",(0,r.jsx)(n.div,{className:"language-",children:(0,r.jsxs)(n.div,{className:"modern-code-content",children:[(0,r.jsx)(n.button,{className:"copy"}),(0,r.jsx)(n.pre,{className:"code",children:(0,r.jsx)(n.code,{className:"language-js",children:"{\n  analyzerMode: 'static',\n  openAnalyzer: false,\n  // `target` is the compilation target, such as `web`, `node`, etc.\n  reportFilename: `report-${target}.html`,\n}\n"})})]})}),"\n",(0,r.jsxs)(n.p,{children:["You can override the default config through ",(0,r.jsx)(n.code,{children:"performance.bundleAnalyze"}),", for example:"]}),"\n",(0,r.jsx)(n.div,{className:"language-",children:(0,r.jsxs)(n.div,{className:"modern-code-content",children:[(0,r.jsx)(n.button,{className:"copy"}),(0,r.jsx)(n.pre,{className:"code",children:(0,r.jsx)(n.code,{className:"language-js",children:"export default {\n  performance: {\n    bundleAnalyze: {\n      analyzerMode: 'server',\n      openAnalyzer: true,\n    },\n  },\n};\n"})})]})})]})}var d=function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},{wrapper:n}=Object.assign({},(0,c.useMDXComponents)(),e.components);return n?(0,r.jsx)(n,Object.assign({},e,{children:(0,r.jsx)(o,e)})):o(e)}}}]);