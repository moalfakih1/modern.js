(self.webpackChunk_modern_js_main_doc=self.webpackChunk_modern_js_main_doc||[]).push([["docs_en_configure_app_performance_bundle-analyze_mdx"],{11857:function(e,n,r){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),Object.defineProperty(n,"default",{enumerable:!0,get:function(){return c}});var a=r("9880"),s=r("23169");function l(e){var n=Object.assign({ul:"ul",li:"li",strong:"strong",code:"code",p:"p",div:"div",pre:"pre"},(0,s.useMDXComponents)(),e.components);return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsxs)(n.li,{children:[(0,a.jsx)(n.strong,{children:"Type:"})," ",(0,a.jsx)(n.code,{children:"Object | undefined"})]}),"\n"]}),"\n",(0,a.jsxs)(n.p,{children:["You have two ways to enable ",(0,a.jsx)(n.code,{children:"webpack-bundle-analyzer"})," to analyze the size of output files:"]}),"\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsxs)(n.li,{children:["Add environment variable ",(0,a.jsx)(n.code,{children:"BUNDLE_ANALYZE=true"}),"."]}),"\n",(0,a.jsxs)(n.li,{children:["Add ",(0,a.jsx)(n.code,{children:"performance.bundleAnalyze"})," config."]}),"\n"]}),"\n",(0,a.jsxs)(n.p,{children:["By default, ",(0,a.jsx)(n.code,{children:"webpack-bundle-analyzer"})," is not enabled. When enabled, its configuration is as follows:"]}),"\n",(0,a.jsx)(n.div,{className:"language-",children:(0,a.jsx)(n.div,{className:"modern-code-content",children:(0,a.jsx)(n.pre,{className:"code",children:(0,a.jsx)(n.code,{className:"language-js",children:"{\n  analyzerMode: 'static',\n  openAnalyzer: false,\n  // `target` is the compilation target, such as `web`, `node`, etc.\n  reportFilename: `report-${target}.html`,\n}\n"})})})}),"\n",(0,a.jsxs)(n.p,{children:["You can override the default config through ",(0,a.jsx)(n.code,{children:"performance.bundleAnalyze"}),", for example:"]}),"\n",(0,a.jsx)(n.div,{className:"language-",children:(0,a.jsx)(n.div,{className:"modern-code-content",children:(0,a.jsx)(n.pre,{className:"code",children:(0,a.jsx)(n.code,{className:"language-js",children:"export default {\n  performance: {\n    bundleAnalyze: {\n      analyzerMode: 'server',\n      openAnalyzer: true,\n    },\n  },\n};\n"})})})})]})}var c=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=Object.assign({},(0,s.useMDXComponents)(),e.components).wrapper;return n?(0,a.jsx)(n,Object.assign({},e,{children:(0,a.jsx)(l,e)})):l(e)}},74250:function(e,n,r){"use strict";Object.defineProperty(n,"__esModule",{value:!0});!function(e,n){for(var r in n)Object.defineProperty(e,r,{enumerable:!0,get:n[r]})}(n,{frontmatter:function(){return c},title:function(){return d},toc:function(){return i},default:function(){return t}});var a=r("9880"),s=r("23169"),l=r.ir(r("11857")),c={sidebar_label:"bundleAnalyze"},d="performance.bundleAnalyze",i=[];function o(e){var n=Object.assign({h1:"h1",a:"a",div:"div",p:"p"},(0,s.useMDXComponents)(),e.components);return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsxs)(n.h1,{id:"performancebundleanalyze",children:["performance.bundleAnalyze",(0,a.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#performancebundleanalyze",children:"#"})]}),"\n",(0,a.jsxs)(n.div,{className:"modern-directive tip",children:[(0,a.jsx)(n.div,{className:"modern-directive-title",children:"TIP"}),(0,a.jsx)(n.div,{className:"modern-directive-content",children:(0,a.jsxs)(n.p,{children:["This config is provided by Modern.js Builder, more detail can see ",(0,a.jsx)(n.a,{href:"https://modernjs.dev/builder/en/api/config-performance.html#performancebundleanalyze",target:"_blank",rel:"noopener noreferrer",children:"performance.bundleAnalyze"}),".\n"]})})]}),"\n","\n",(0,a.jsx)(l.default,{})]})}var t=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=Object.assign({},(0,s.useMDXComponents)(),e.components).wrapper;return n?(0,a.jsx)(n,Object.assign({},e,{children:(0,a.jsx)(o,e)})):o(e)}}}]);