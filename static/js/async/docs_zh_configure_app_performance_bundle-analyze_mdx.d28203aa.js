(self.webpackChunk_modern_js_main_doc=self.webpackChunk_modern_js_main_doc||[]).push([["docs_zh_configure_app_performance_bundle-analyze_mdx"],{5287:function(e,n,r){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),Object.defineProperty(n,"default",{enumerable:!0,get:function(){return c}});var l=r("9880"),s=r("23169");function d(e){var n=Object.assign({ul:"ul",li:"li",strong:"strong",code:"code",p:"p",a:"a",pre:"pre",h3:"h3",img:"img",ol:"ol"},(0,s.useMDXComponents)(),e.components);return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsxs)(n.li,{children:[(0,l.jsx)(n.strong,{children:"类型："})," ",(0,l.jsx)(n.code,{children:"Object | undefined"})]}),"\n"]}),"\n",(0,l.jsxs)(n.p,{children:["用于开启 ",(0,l.jsx)(n.a,{href:"https://github.com/webpack-contrib/webpack-bundle-analyzer",target:"_blank",rel:"noopener noreferrer",children:"webpack-bundle-analyzer"})," 插件来分析产物体积。"]}),"\n",(0,l.jsxs)(n.p,{children:["默认情况下，Builder 不会开启 ",(0,l.jsx)(n.code,{children:"webpack-bundle-analyzer"}),"。当开启该功能后，内部的默认配置如下:"]}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-js",children:"const defaultConfig = {\n  analyzerMode: 'static',\n  openAnalyzer: false,\n  // target 为编译目标，如 `web`、`node` 等\n  reportFilename: `report-${target}.html`,\n};\n"})}),"\n",(0,l.jsxs)(n.h3,{id:"启用-bundle-analyze",children:["启用 Bundle Analyze",(0,l.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#启用-bundle-analyze",children:"#"})]}),"\n",(0,l.jsxs)(n.p,{children:["你有两种方式开启 ",(0,l.jsx)(n.code,{children:"webpack-bundle-analyzer"})," 来分析构建产物的体积:"]}),"\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsxs)(n.li,{children:["添加环境变量 ",(0,l.jsx)(n.code,{children:"BUNDLE_ANALYZE=true"}),"，比如："]}),"\n"]}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-bash",children:"BUNDLE_ANALYZE=true pnpm build\n"})}),"\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsxs)(n.li,{children:["配置 ",(0,l.jsx)(n.code,{children:"performance.bundleAnalyze"})," 来固定开启："]}),"\n"]}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-js",children:"export default {\n  performance: {\n    bundleAnalyze: {},\n  },\n};\n"})}),"\n",(0,l.jsx)(n.p,{children:"在启用后，Builder 会生成一个分析构建产物体积的 HTML 文件，并在 Terminal 中打印以下日志："}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-bash",children:"Webpack Bundle Analyzer saved report to /Project/my-project/dist/report-web.html\n"})}),"\n",(0,l.jsx)(n.p,{children:"手动在浏览器中打开该文件，可以看到打包产物的瓦片图；区块的面积越大，说明该模块的体积越大。"}),"\n",(0,l.jsx)(n.p,{children:(0,l.jsx)(n.img,{src:"https://lf3-static.bytednsdoc.com/obj/eden-cn/aphqeh7uhohpquloj/modern-js/mwa-build-analyze-8784f762c1ab0cb20935829d5f912c4c.png",alt:""})}),"\n",(0,l.jsxs)(n.h3,{id:"覆盖默认配置",children:["覆盖默认配置",(0,l.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#覆盖默认配置",children:"#"})]}),"\n",(0,l.jsxs)(n.p,{children:["你可以通过 ",(0,l.jsx)(n.code,{children:"performance.bundleAnalyze"})," 来覆盖默认配置，比如开启 ",(0,l.jsx)(n.code,{children:"server"})," 模式："]}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-js",children:"export default {\n  performance: {\n    bundleAnalyze: process.env.BUNDLE_ANALYZE\n      ? {\n          analyzerMode: 'server',\n          openAnalyzer: true,\n        }\n      : {},\n  },\n};\n"})}),"\n",(0,l.jsxs)(n.h3,{id:"size-类型",children:["Size 类型",(0,l.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#size-类型",children:"#"})]}),"\n",(0,l.jsxs)(n.p,{children:["在 ",(0,l.jsx)(n.code,{children:"webpack-bundle-analyzer"})," 的面板中，你可以在左上角控制 Size 类型（默认为 ",(0,l.jsx)(n.code,{children:"Parsed"}),"）："]}),"\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsxs)(n.li,{children:[(0,l.jsx)(n.code,{children:"Stat"}),"：从打包工具的 ",(0,l.jsx)(n.code,{children:"stats"})," 对象中获取的体积，它反映了代码在压缩之前的体积。"]}),"\n",(0,l.jsxs)(n.li,{children:[(0,l.jsx)(n.code,{children:"Parsed"}),"：磁盘上的文件体积，它反映了代码在压缩之后的体积。"]}),"\n",(0,l.jsxs)(n.li,{children:[(0,l.jsx)(n.code,{children:"Gzipped"}),"：浏览器里请求的文件体积，它反映了代码在压缩和 gzip 后的体积。"]}),"\n"]}),"\n",(0,l.jsxs)(n.h3,{id:"注意事项",children:["注意事项",(0,l.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#注意事项",children:"#"})]}),"\n",(0,l.jsxs)(n.ol,{children:["\n",(0,l.jsxs)(n.li,{children:["开启 Server 模式会导致 ",(0,l.jsx)(n.code,{children:"build"})," 进程不能正常退出。"]}),"\n",(0,l.jsxs)(n.li,{children:["开启 bundleAnalyzer 会降低构建性能。因此，在日常开发过程中不应该开启此配置项，建议通过 ",(0,l.jsx)(n.code,{children:"BUNDLE_ANALYZE"})," 环境变量来按需开启。"]}),"\n",(0,l.jsxs)(n.li,{children:["由于 ",(0,l.jsx)(n.code,{children:"dev"})," 阶段不会进行代码压缩等优化，无法反映真实的产物体积，因此建议在 ",(0,l.jsx)(n.code,{children:"build"})," 阶段分析产物体积。"]}),"\n"]})]})}var c=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=Object.assign({},(0,s.useMDXComponents)(),e.components).wrapper;return n?(0,l.jsx)(n,Object.assign({},e,{children:(0,l.jsx)(d,e)})):d(e)}},63358:function(e,n,r){"use strict";Object.defineProperty(n,"__esModule",{value:!0});!function(e,n){for(var r in n)Object.defineProperty(e,r,{enumerable:!0,get:n[r]})}(n,{frontmatter:function(){return c},title:function(){return a},toc:function(){return i},default:function(){return t}});var l=r("9880"),s=r("23169"),d=r.ir(r("5287")),c={sidebar_label:"bundleAnalyze"},a="performance.bundleAnalyze",i=[];function o(e){var n=Object.assign({h1:"h1",a:"a",div:"div",p:"p"},(0,s.useMDXComponents)(),e.components);return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsxs)(n.h1,{id:"performancebundleanalyze",children:["performance.bundleAnalyze",(0,l.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#performancebundleanalyze",children:"#"})]}),"\n",(0,l.jsxs)(n.div,{className:"modern-directive tip",children:[(0,l.jsx)(n.div,{className:"modern-directive-title",children:"TIP"}),(0,l.jsx)(n.div,{className:"modern-directive-content",children:(0,l.jsxs)(n.p,{children:["该配置由 Modern.js Builder 提供，更多信息可参考 ",(0,l.jsx)(n.a,{href:"https://modernjs.dev/builder/api/config-performance.html#performancebundleanalyze",target:"_blank",rel:"noopener noreferrer",children:"performance.bundleAnalyze"}),"。\n"]})})]}),"\n","\n",(0,l.jsx)(d.default,{})]})}var t=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=Object.assign({},(0,s.useMDXComponents)(),e.components).wrapper;return n?(0,l.jsx)(n,Object.assign({},e,{children:(0,l.jsx)(o,e)})):o(e)}}}]);