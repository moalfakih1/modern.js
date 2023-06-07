(self.webpackChunk_modern_js_main_doc=self.webpackChunk_modern_js_main_doc||[]).push([["docs_zh_guides_advanced-features_compatibility_mdx"],{45220:function(e,r,l){"use strict";Object.defineProperty(r,"__esModule",{value:!0}),Object.defineProperty(r,"default",{enumerable:!0,get:function(){return d}});var n=l("9880"),s=l("23169");function i(e){var r=Object.assign({h3:"h3",a:"a",p:"p",ul:"ul",li:"li",pre:"pre",code:"code",img:"img",div:"div"},(0,s.useMDXComponents)(),e.components);return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsxs)(r.h3,{id:"运行时按需-polyfill",children:["运行时按需 Polyfill",(0,n.jsx)(r.a,{className:"header-anchor","aria-hidden":"true",href:"#运行时按需-polyfill",children:"#"})]}),"\n",(0,n.jsxs)(r.p,{children:["Modern.js 中还提供了基于浏览器 ",(0,n.jsx)(r.a,{href:"https://developer.mozilla.org/zh-CN/docs/Web/HTTP/Headers/User-Agent",target:"_blank",rel:"noopener noreferrer",children:"UA"})," 信息的运行时按需 Polyfill 方案，相比于 Babel 优势如下："]}),"\n",(0,n.jsxs)(r.ul,{children:["\n",(0,n.jsx)(r.li,{children:"不会插入到代码中，只根据访问页面的设备，按需下发 Polyfill 代码 ，减少整体代码体积。"}),"\n",(0,n.jsx)(r.li,{children:"相同浏览器会公用一份 Polyfill 代码。因此，随着项目越来越多，基于 UA 的 Polyfill 代码下发速度会越来越快，综合速度超过常规方案。"}),"\n"]}),"\n",(0,n.jsx)(r.p,{children:"可以通过微生成器开启该功能："}),"\n",(0,n.jsx)(r.pre,{children:(0,n.jsx)(r.code,{className:"language-bash",children:"? 请选择你想要的操作 启用可选功能\n? 请选择功能名称 启用「基于 UA 的 Polyfill」功能\n"})}),"\n",(0,n.jsxs)(r.p,{children:["执行命令后，在 ",(0,n.jsx)(r.code,{children:"modern.config.ts"})," 中注册 Polyfill 插件:"]}),"\n",(0,n.jsx)(r.pre,{children:(0,n.jsx)(r.code,{className:"language-ts",meta:'title="modern.config.ts"',children:"import polyfillPlugin from '@modern-js/plugin-polyfill';\n\nexport default defineConfig({\n  plugins: [..., polyfillPlugin()],\n});\n"})}),"\n",(0,n.jsxs)(r.p,{children:["配置 ",(0,n.jsx)(r.code,{children:"output.polyfill"})," 为 ",(0,n.jsx)(r.code,{children:"ua"})," 并且执行 ",(0,n.jsx)(r.code,{children:"pnpm run build && pnpm run serve"})," 启动服务器后，访问页面可以看到 HTML 产物中包含如下脚本:"]}),"\n",(0,n.jsx)(r.pre,{children:(0,n.jsx)(r.code,{className:"language-js",children:'<script src="/__polyfill__" crossorigin></script>\n'})}),"\n",(0,n.jsxs)(r.p,{children:["在 Chrome 51 下访问页面可以看到 ",(0,n.jsx)(r.code,{children:"http://localhost:8080/__polyfill__"})," 返回内容如下:"]}),"\n",(0,n.jsx)(r.p,{children:(0,n.jsx)(r.img,{src:"https://lf3-static.bytednsdoc.com/obj/eden-cn/aphqeh7uhohpquloj/modern-js/docs/ua-polyfill.png",alt:"ua-polyfill"})}),"\n",(0,n.jsxs)(r.div,{className:"modern-directive caution",children:[(0,n.jsx)(r.div,{className:"modern-directive-title",children:"注意"}),(0,n.jsxs)(r.div,{className:"modern-directive-content",children:[(0,n.jsx)(r.p,{children:"该功能只有在使用 Modern.js 内置的 Web Server 时才会生效。"}),"\n",(0,n.jsxs)(r.p,{children:["如果有自定义模版的需求，请参考 ",(0,n.jsx)(r.a,{href:"/guides/basic-features/html",children:"HTML 模板"}),"。通过 ",(0,n.jsx)(r.code,{children:"html.template"})," 或 ",(0,n.jsx)(r.code,{children:"tools.html"})," 手动修改模版时，可能会导致该功能无法正确生效。\n"]})]})]})]})}var d=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},r=Object.assign({},(0,s.useMDXComponents)(),e.components).wrapper;return r?(0,n.jsx)(r,Object.assign({},e,{children:(0,n.jsx)(i,e)})):i(e)}},3148:function(e,r,l){"use strict";Object.defineProperty(r,"__esModule",{value:!0});!function(e,r){for(var l in r)Object.defineProperty(e,l,{enumerable:!0,get:r[l]})}(r,{frontmatter:function(){return d},title:function(){return o},toc:function(){return c},default:function(){return a}});var n=l("9880"),s=l("23169"),i=l.ir(l("45220")),d={sidebar_position:5},o="浏览器兼容性",c=[{text:"Browserslist 配置",depth:2,id:"browserslist-配置"},{text:"Polyfill",depth:2,id:"polyfill"},{text:"编译时 Polyfill",depth:3,id:"编译时-polyfill"}];function t(e){var r=Object.assign({h1:"h1",a:"a",h2:"h2",p:"p",code:"code",pre:"pre",div:"div",h3:"h3"},(0,s.useMDXComponents)(),e.components);return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsxs)(r.h1,{id:"浏览器兼容性",children:["浏览器兼容性",(0,n.jsx)(r.a,{className:"header-anchor","aria-hidden":"true",href:"#浏览器兼容性",children:"#"})]}),"\n",(0,n.jsxs)(r.h2,{id:"browserslist-配置",children:["Browserslist 配置",(0,n.jsx)(r.a,{className:"header-anchor","aria-hidden":"true",href:"#browserslist-配置",children:"#"})]}),"\n",(0,n.jsxs)(r.p,{children:["Modern.js 支持设置 Web 应用需要兼容的浏览器范围，你可以在 ",(0,n.jsx)(r.code,{children:".browserslistrc"})," 文件里设置 ",(0,n.jsx)(r.a,{href:"https://browsersl.ist/",target:"_blank",rel:"noopener noreferrer",children:"Browserslist"})," 的值。"]}),"\n",(0,n.jsxs)(r.p,{children:["当你创建一个新的 Modern.js 项目时，默认会包含一份 ",(0,n.jsx)(r.code,{children:".browserslistrc"})," 配置，这表示 JavaScript 代码会被编译至 ES6 格式。"]}),"\n",(0,n.jsx)(r.pre,{children:(0,n.jsx)(r.code,{className:"language-yaml",meta:'title=".browserslistrc"',children:"chrome >= 51\nedge >= 15\nfirefox >= 54\nsafari >= 10\nios_saf >= 10\n"})}),"\n",(0,n.jsxs)(r.div,{className:"modern-directive tip",children:[(0,n.jsx)(r.div,{className:"modern-directive-title",children:"TIP"}),(0,n.jsx)(r.div,{className:"modern-directive-content",children:(0,n.jsxs)(r.p,{children:["请查看 ",(0,n.jsx)(r.a,{href:"https://modernjs.dev/builder/guide/advanced/browserslist",target:"_blank",rel:"noopener noreferrer",children:"Modern.js Builder - 设置浏览器范围"})," 来了解更多内容。\n"]})})]}),"\n",(0,n.jsxs)(r.h2,{id:"polyfill",children:["Polyfill",(0,n.jsx)(r.a,{className:"header-anchor","aria-hidden":"true",href:"#polyfill",children:"#"})]}),"\n",(0,n.jsxs)(r.h3,{id:"编译时-polyfill",children:["编译时 Polyfill",(0,n.jsx)(r.a,{className:"header-anchor","aria-hidden":"true",href:"#编译时-polyfill",children:"#"})]}),"\n",(0,n.jsxs)(r.p,{children:["Modern.js 在编译时默认通过 ",(0,n.jsx)(r.a,{href:"https://github.com/zloirock/core-js",target:"_blank",rel:"noopener noreferrer",children:"core-js"})," 引入对应的 Polyfill 代码。"]}),"\n",(0,n.jsx)(r.p,{children:"默认情况下会根据项目 Browserslist 的设置情况引入所需的 Polyfill 代码， 这样基本不用再担心项目源码和第三方依赖的 Polyfill 问题了，但是因为包含了一些没有用到的 Polyfill 代码，所以最终的包大小可能会有所增加。"}),"\n",(0,n.jsxs)(r.div,{className:"modern-directive info",children:[(0,n.jsx)(r.div,{className:"modern-directive-title",children:"INFO"}),(0,n.jsxs)(r.div,{className:"modern-directive-content",children:[(0,n.jsxs)(r.p,{children:["对于明确第三方依赖不需要 Polyfill 的场景，可以设置 ",(0,n.jsx)(r.a,{href:"/configure/app/output/polyfill",children:(0,n.jsx)(r.code,{children:"output.polyfill"})})," 为 ",(0,n.jsx)(r.code,{children:"usage"}),", 这样 Babel 编译时只会根据代码中使用到的语法引入 Polyfill 代码。"]}),"\n"]})]}),"\n","\n",(0,n.jsx)(i.default,{})]})}var a=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},r=Object.assign({},(0,s.useMDXComponents)(),e.components).wrapper;return r?(0,n.jsx)(r,Object.assign({},e,{children:(0,n.jsx)(t,e)})):t(e)}}}]);