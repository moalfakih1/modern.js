(self.webpackChunk_modern_js_main_doc=self.webpackChunk_modern_js_main_doc||[]).push([["docs_en_configure_app_performance_bundle-analyze_mdx"],{81889:function(e,n,r){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),Object.defineProperty(n,"default",{enumerable:!0,get:function(){return l}});var a=r("9880"),i=r("23169");function s(e){var n=Object.assign({ul:"ul",li:"li",strong:"strong",code:"code",p:"p",a:"a",pre:"pre",h3:"h3",img:"img",ol:"ol"},(0,i.useMDXComponents)(),e.components);return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsxs)(n.li,{children:[(0,a.jsx)(n.strong,{children:"Type:"})," ",(0,a.jsx)(n.code,{children:"Object | undefined"})]}),"\n"]}),"\n",(0,a.jsxs)(n.p,{children:["Used to enable the ",(0,a.jsx)(n.a,{href:"https://github.com/webpack-contrib/webpack-bundle-analyzer",target:"_blank",rel:"noopener noreferrer",children:"webpack-bundle-analyzer"})," plugin to analyze the size of the output."]}),"\n",(0,a.jsxs)(n.p,{children:["By default, Builder does not enable ",(0,a.jsx)(n.code,{children:"webpack-bundle-analyzer"}),". When this feature is enabled, the default configuration is as follows:"]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-js",children:"const defaultConfig = {\n  analyzerMode: 'static',\n  openAnalyzer: false,\n  // target is the compilation target, such as `web`, `node`, etc.\n  reportFilename: `report-${target}.html`,\n};\n"})}),"\n",(0,a.jsxs)(n.h3,{id:"enable-bundle-analyze",children:["Enable Bundle Analyze",(0,a.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#enable-bundle-analyze",children:"#"})]}),"\n",(0,a.jsxs)(n.p,{children:["You have two ways to enable ",(0,a.jsx)(n.code,{children:"webpack-bundle-analyzer"})," to analyze the size of the output files:"]}),"\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsxs)(n.li,{children:["Add the environment variable ",(0,a.jsx)(n.code,{children:"BUNDLE_ANALYZE=true"}),", for example:"]}),"\n"]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-bash",children:"BUNDLE_ANALYZE=true pnpm build\n"})}),"\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsxs)(n.li,{children:["Configure ",(0,a.jsx)(n.code,{children:"performance.bundleAnalyze"})," to enable it permanently:"]}),"\n"]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-js",children:"export default {\n  performance: {\n    bundleAnalyze: {},\n  },\n};\n"})}),"\n",(0,a.jsx)(n.p,{children:"After enabling it, Builder will generate an HTML file that analyzes the size of the output files, and print the following log in the Terminal:"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-bash",children:"Webpack Bundle Analyzer saved report to /Project/my-project/dist/report-web.html\n"})}),"\n",(0,a.jsx)(n.p,{children:"You can manually open the file in the browser and view the detail of the bundle size. When an area is larger, it indicates that its corresponding bundle size is larger."}),"\n",(0,a.jsx)(n.p,{children:(0,a.jsx)(n.img,{src:"https://lf3-static.bytednsdoc.com/obj/eden-cn/aphqeh7uhohpquloj/modern-js/mwa-build-analyze-8784f762c1ab0cb20935829d5f912c4c.png",alt:""})}),"\n",(0,a.jsxs)(n.h3,{id:"override-default-configuration",children:["Override Default Configuration",(0,a.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#override-default-configuration",children:"#"})]}),"\n",(0,a.jsxs)(n.p,{children:["You can override the default configuration through ",(0,a.jsx)(n.code,{children:"performance.bundleAnalyze"}),", such as enabling the server mode:"]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-js",children:"export default {\n  performance: {\n    bundleAnalyze: process.env.BUNDLE_ANALYZE\n      ? {\n          analyzerMode: 'server',\n          openAnalyzer: true,\n        }\n      : {},\n  },\n};\n"})}),"\n",(0,a.jsxs)(n.h3,{id:"size-types",children:["Size Types",(0,a.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#size-types",children:"#"})]}),"\n",(0,a.jsxs)(n.p,{children:["In the ",(0,a.jsx)(n.code,{children:"webpack-bundle-analyzer"})," panel, you can control size types in the upper left corner (default is ",(0,a.jsx)(n.code,{children:"Parsed"}),"):"]}),"\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsxs)(n.li,{children:[(0,a.jsx)(n.code,{children:"Stat"}),": The size obtained from the ",(0,a.jsx)(n.code,{children:"stats"})," object of the bundler, which reflects the size of the code before minification."]}),"\n",(0,a.jsxs)(n.li,{children:[(0,a.jsx)(n.code,{children:"Parsed"}),": The size of the file on the disk, which reflects the size of the code after minification."]}),"\n",(0,a.jsxs)(n.li,{children:[(0,a.jsx)(n.code,{children:"Gzipped"}),": The file size requested in the browser reflects the size of the code after minification and gzip."]}),"\n"]}),"\n",(0,a.jsxs)(n.h3,{id:"generate-statsjson",children:["Generate stats.json",(0,a.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#generate-statsjson",children:"#"})]}),"\n",(0,a.jsxs)(n.p,{children:["By setting ",(0,a.jsx)(n.code,{children:"generateStatsFile"})," to true, stats JSON file will be generated in bundle output directory."]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-js",children:"export default {\n  performance: {\n    bundleAnalyze: {\n      generateStatsFile: true,\n    },\n  },\n};\n"})}),"\n",(0,a.jsxs)(n.h3,{id:"notes",children:["Notes",(0,a.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#notes",children:"#"})]}),"\n",(0,a.jsxs)(n.ol,{children:["\n",(0,a.jsxs)(n.li,{children:["Enabling the server mode will cause the ",(0,a.jsx)(n.code,{children:"build"})," process to not exit normally."]}),"\n",(0,a.jsxs)(n.li,{children:["Enabling ",(0,a.jsx)(n.code,{children:"bundleAnalyzer"})," will reduce build speed. Therefore, this configuration should not be enabled during daily development, and it is recommended to enable it on demand through the ",(0,a.jsx)(n.code,{children:"BUNDLE_ANALYZE"})," environment variable."]}),"\n",(0,a.jsxs)(n.li,{children:["Since no code minification and other optimizations are performed in the ",(0,a.jsx)(n.code,{children:"dev"})," phase, the real output size cannot be reflected, so it is recommended to analyze the output size in the ",(0,a.jsx)(n.code,{children:"build"})," phase."]}),"\n"]})]})}var l=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=Object.assign({},(0,i.useMDXComponents)(),e.components).wrapper;return n?(0,a.jsx)(n,Object.assign({},e,{children:(0,a.jsx)(s,e)})):s(e)}},93198:function(e,n,r){"use strict";Object.defineProperty(n,"__esModule",{value:!0});!function(e,n){for(var r in n)Object.defineProperty(e,r,{enumerable:!0,get:n[r]})}(n,{frontmatter:function(){return l},title:function(){return t},toc:function(){return d},default:function(){return c}});var a=r("9880"),i=r("23169"),s=r.ir(r("81889")),l={sidebar_label:"bundleAnalyze"},t="performance.bundleAnalyze",d=[];function o(e){var n=Object.assign({h1:"h1",a:"a",div:"div",p:"p"},(0,i.useMDXComponents)(),e.components);return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsxs)(n.h1,{id:"performancebundleanalyze",children:["performance.bundleAnalyze",(0,a.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#performancebundleanalyze",children:"#"})]}),"\n",(0,a.jsxs)(n.div,{className:"modern-directive tip",children:[(0,a.jsx)(n.div,{className:"modern-directive-title",children:"TIP"}),(0,a.jsx)(n.div,{className:"modern-directive-content",children:(0,a.jsxs)(n.p,{children:["This config is provided by Modern.js Builder, more detail can see ",(0,a.jsx)(n.a,{href:"https://modernjs.dev/builder/en/api/config-performance.html#performancebundleanalyze",target:"_blank",rel:"noopener noreferrer",children:"performance.bundleAnalyze"}),".\n"]})})]}),"\n","\n",(0,a.jsx)(s.default,{})]})}var c=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=Object.assign({},(0,i.useMDXComponents)(),e.components).wrapper;return n?(0,a.jsx)(n,Object.assign({},e,{children:(0,a.jsx)(o,e)})):o(e)}}}]);