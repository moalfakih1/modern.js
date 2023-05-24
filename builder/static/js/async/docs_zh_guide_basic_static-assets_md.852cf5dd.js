(self.webpackChunk_modern_js_builder_doc=self.webpackChunk_modern_js_builder_doc||[]).push([["docs_zh_guide_basic_static-assets_md"],{22854:function(e,n,s){"use strict";Object.defineProperty(n,"__esModule",{value:!0});!function(e,n){for(var s in n)Object.defineProperty(e,s,{enumerable:!0,get:n[s]})}(n,{frontmatter:function(){return d},title:function(){return c},toc:function(){return l},default:function(){return a}});var r=s("9880"),i=s("23169"),d={},c="引用静态资源",l=[{text:"静态资源格式",depth:2,id:"静态资源格式"},{text:"在 JS 文件中引用",depth:2,id:"在-js-文件中引用"},{text:"在 CSS 文件中引用",depth:2,id:"在-css-文件中引用"},{text:"引用结果",depth:2,id:"引用结果"},{text:"构建产物",depth:2,id:"构建产物"},{text:"URL 前缀",depth:2,id:"url-前缀"},{text:"添加类型声明",depth:2,id:"添加类型声明"},{text:"图片格式",depth:2,id:"图片格式"}];function t(e){var n=Object.assign({h1:"h1",a:"a",p:"p",div:"div",h2:"h2",ul:"ul",li:"li",strong:"strong",code:"code",pre:"pre",table:"table",thead:"thead",tr:"tr",th:"th",tbody:"tbody",td:"td"},(0,i.useMDXComponents)(),e.components);return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(n.h1,{id:"引用静态资源",children:["引用静态资源",(0,r.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#引用静态资源",children:"#"})]}),"\n",(0,r.jsx)(n.p,{children:"Builder 支持在代码中引用图片、字体、媒体类型的静态资源。"}),"\n",(0,r.jsxs)(n.div,{className:"modern-directive tip",children:[(0,r.jsx)(n.div,{className:"modern-directive-title",children:"什么是静态资源"}),(0,r.jsx)(n.div,{className:"modern-directive-content",children:(0,r.jsx)(n.p,{children:"静态资源是指 Web 应用中不会发生变化的文件。常见的静态资源包括图片、字体、视频、样式表和 JavaScript 文件。这些资源通常存储在服务器或 CDN 上，当用户访问 Web 应用时会被传送到用户的浏览器。由于它们不会发生变化，静态资源可以被浏览器缓存，从而提高 Web 应用的性能。"})})]}),"\n",(0,r.jsxs)(n.h2,{id:"静态资源格式",children:["静态资源格式",(0,r.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#静态资源格式",children:"#"})]}),"\n",(0,r.jsx)(n.p,{children:"以下是 Builder 默认支持的静态资源格式："}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"图片"}),"：png、jpg、jpeg、gif、svg、bmp、webp、ico、apng、avif、tiff。"]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"字体"}),"：woff、woff2、eot、ttf、otf、ttc。"]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"媒体"}),"：mp4、webm、ogg、mp3、wav、flac、aac、mov。"]}),"\n"]}),"\n",(0,r.jsxs)(n.p,{children:["如果你需要引用其他格式的静态资源，请通过 ",(0,r.jsx)(n.a,{href:"https://github.com/web-infra-dev/modern.js/issues",target:"_blank",rel:"noopener noreferrer",children:"GitHub Issues"})," 进行反馈。"]}),"\n",(0,r.jsxs)(n.div,{className:"modern-directive tip",children:[(0,r.jsx)(n.div,{className:"modern-directive-title",children:"SVG 图片"}),(0,r.jsx)(n.div,{className:"modern-directive-content",children:(0,r.jsxs)(n.p,{children:["SVG 图片是一种特殊情况，Builder 提供了 SVG 转 React 组件的能力，对 SVG 进行单独处理，详见 ",(0,r.jsx)(n.a,{href:"/guide/basic/svg-assets",children:"引用 SVG 资源"}),"。\n"]})})]}),"\n",(0,r.jsxs)(n.h2,{id:"在-js-文件中引用",children:["在 JS 文件中引用",(0,r.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#在-js-文件中引用",children:"#"})]}),"\n",(0,r.jsxs)(n.p,{children:["在 JS 文件中，可以直接通过 ",(0,r.jsx)(n.code,{children:"import"})," 的方式引用相对路径下的静态资源："]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-tsx",children:"// 引用 static 目录下的 logo.png 图片\nimport logo from './static/logo.png';\n\nexport default = () => <img src={logo} />;\n"})}),"\n",(0,r.jsxs)(n.p,{children:["也支持使用",(0,r.jsx)(n.a,{href:"/guide/advanced/alias",children:"路径别名"}),"来引用："]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-tsx",children:"import logo from '@/static/logo.png';\n\nexport default = () => <img src={logo} />;\n"})}),"\n",(0,r.jsxs)(n.h2,{id:"在-css-文件中引用",children:["在 CSS 文件中引用",(0,r.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#在-css-文件中引用",children:"#"})]}),"\n",(0,r.jsx)(n.p,{children:"在 CSS 文件中，可以引用相对路径下的静态资源："}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-css",children:".logo {\n  background-image: url('../static/logo.png');\n}\n"})}),"\n",(0,r.jsxs)(n.p,{children:["也支持使用",(0,r.jsx)(n.a,{href:"/guide/advanced/alias",children:"路径别名"}),"来引用："]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-css",children:".logo {\n  background-image: url('@/static/logo.png');\n}\n"})}),"\n",(0,r.jsxs)(n.h2,{id:"引用结果",children:["引用结果",(0,r.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#引用结果",children:"#"})]}),"\n",(0,r.jsx)(n.p,{children:"引用静态资源的结果取决于文件体积："}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"当文件体积大于 10KB 时，会返回一个 URL，同时文件会被输出到构建产物目录下。"}),"\n",(0,r.jsx)(n.li,{children:"当文件体积小于 10KB 时，会自动被内联为 Base64 格式。"}),"\n"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-js",children:"import largeImage from './static/largeImage.png';\nimport smallImage from './static/smallImage.png';\n\nconsole.log(largeImage); // \"/static/largeImage.6c12aba3.png\"\nconsole.log(smallImage); // \"data:image/png;base64,iVBORw0KGgo...\"\n"})}),"\n",(0,r.jsxs)(n.p,{children:["关于资源内联的更详细介绍，请参考 ",(0,r.jsx)(n.a,{href:"/guide/optimization/inline-assets",children:"静态资源内联"})," 章节。"]}),"\n",(0,r.jsxs)(n.h2,{id:"构建产物",children:["构建产物",(0,r.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#构建产物",children:"#"})]}),"\n",(0,r.jsx)(n.p,{children:"当静态资源被引用后，会自动被输出到构建产物的目录下，你可以："}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["通过 ",(0,r.jsx)(n.a,{href:"/api/config-output#outputfilename",children:"output.filename"})," 来修改产物的文件名。"]}),"\n",(0,r.jsxs)(n.li,{children:["通过 ",(0,r.jsx)(n.a,{href:"/api/config-output#outputdistpath",children:"output.distPath"})," 来修改产物的输出路径。"]}),"\n"]}),"\n",(0,r.jsxs)(n.p,{children:["请阅读 ",(0,r.jsx)(n.a,{href:"/guide/basic/output-files",children:"构建产物目录"})," 来了解更多细节。"]}),"\n",(0,r.jsxs)(n.h2,{id:"url-前缀",children:["URL 前缀",(0,r.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#url-前缀",children:"#"})]}),"\n",(0,r.jsx)(n.p,{children:"引用静态资源后返回的 URL 中会自动包含路径前缀："}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["在开发环境下，通过 ",(0,r.jsx)(n.a,{href:"/api/config-dev#devassetprefix",children:"dev.assetPrefix"})," 设置路径前缀。"]}),"\n",(0,r.jsxs)(n.li,{children:["在生产环境下，通过 ",(0,r.jsx)(n.a,{href:"/api/config-output#outputassetprefix",children:"output.assetPrefix"})," 设置路径前缀。"]}),"\n"]}),"\n",(0,r.jsxs)(n.p,{children:["比如将 ",(0,r.jsx)(n.code,{children:"output.assetPrefix"})," 设置为 ",(0,r.jsx)(n.code,{children:"https://modern.com"}),"："]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-js",children:"import logo from './static/logo.png';\n\nconsole.log(logo); // \"https://modern.com/static/logo.6c12aba3.png\"\n"})}),"\n",(0,r.jsxs)(n.h2,{id:"添加类型声明",children:["添加类型声明",(0,r.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#添加类型声明",children:"#"})]}),"\n",(0,r.jsx)(n.p,{children:"当你在 TypeScript 代码中引用静态资源时，TypeScript 可能会提示该模块缺少类型定义："}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{children:"TS2307: Cannot find module './logo.png' or its corresponding type declarations.\n"})}),"\n",(0,r.jsxs)(n.p,{children:["此时你需要为静态资源添加类型声明文件，请在项目中创建 ",(0,r.jsx)(n.code,{children:"src/global.d.ts"})," 文件，并添加相应的类型声明。以 png 图片为例，需要添加以下声明："]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-ts",meta:'title="src/global.d.ts"',children:"declare module '*.png' {\n  const content: string;\n  export default content;\n}\n"})}),"\n",(0,r.jsxs)(n.p,{children:["添加类型声明后，如果依然存在上述错误提示，请尝试重启当前 IDE，或者调整 ",(0,r.jsx)(n.code,{children:"global.d.ts"})," 所在的目录，使 TypeScript 能够正确识别类型定义。"]}),"\n",(0,r.jsxs)(n.h2,{id:"图片格式",children:["图片格式",(0,r.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#图片格式",children:"#"})]}),"\n",(0,r.jsx)(n.p,{children:"在使用图片资源时，你可以根据下方表格中图片的优缺点以及适用场景，来选择合适的图片格式。"}),"\n",(0,r.jsxs)(n.table,{children:["\n",(0,r.jsxs)(n.thead,{children:["\n",(0,r.jsxs)(n.tr,{children:["\n",(0,r.jsx)(n.th,{children:"格式"}),"\n",(0,r.jsx)(n.th,{children:"优点"}),"\n",(0,r.jsx)(n.th,{children:"缺点"}),"\n",(0,r.jsx)(n.th,{children:"适用场景"}),"\n"]}),"\n"]}),"\n",(0,r.jsxs)(n.tbody,{children:["\n",(0,r.jsxs)(n.tr,{children:["\n",(0,r.jsx)(n.td,{children:"PNG"}),"\n",(0,r.jsx)(n.td,{children:"无损压缩，不会丢失图片细节，不失真，支持半透明"}),"\n",(0,r.jsx)(n.td,{children:"不适合色表复杂的图片"}),"\n",(0,r.jsx)(n.td,{children:"适合颜色数量少，边界层次分明的图片，适合用在 logo、icon、透明图等场景"}),"\n"]}),"\n",(0,r.jsxs)(n.tr,{children:["\n",(0,r.jsx)(n.td,{children:"JPG"}),"\n",(0,r.jsx)(n.td,{children:"颜色丰富"}),"\n",(0,r.jsx)(n.td,{children:"有损压缩，会导致图片失真，不支持透明度"}),"\n",(0,r.jsx)(n.td,{children:"适合颜色数量多，颜色带有渐变、过度复杂的图片，适合用在人像照片、风景图等场景"}),"\n"]}),"\n",(0,r.jsxs)(n.tr,{children:["\n",(0,r.jsx)(n.td,{children:"WebP"}),"\n",(0,r.jsx)(n.td,{children:"同时支持有损压缩与无损压缩，支持透明度，体积比 PNG 和 JPG 小很多"}),"\n",(0,r.jsx)(n.td,{children:"iOS 兼容性不好"}),"\n",(0,r.jsx)(n.td,{children:"几乎任何场景的像素图片，支持 WebP 的宿主环境，都应该首选 WebP 图片格式"}),"\n"]}),"\n",(0,r.jsxs)(n.tr,{children:["\n",(0,r.jsx)(n.td,{children:"SVG"}),"\n",(0,r.jsx)(n.td,{children:"无损格式，不失真,支持透明度"}),"\n",(0,r.jsx)(n.td,{children:"不适合复杂图形"}),"\n",(0,r.jsx)(n.td,{children:"适合矢量图,适合用于 icon"}),"\n"]}),"\n"]}),"\n"]})]})}var a=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=Object.assign({},(0,i.useMDXComponents)(),e.components).wrapper;return n?(0,r.jsx)(n,Object.assign({},e,{children:(0,r.jsx)(t,e)})):t(e)}}}]);