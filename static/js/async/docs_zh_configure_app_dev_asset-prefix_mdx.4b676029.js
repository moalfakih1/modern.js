(self.webpackChunk_modern_js_main_doc=self.webpackChunk_modern_js_main_doc||[]).push([["docs_zh_configure_app_dev_asset-prefix_mdx"],{34272:function(e,s,n){"use strict";Object.defineProperty(s,"__esModule",{value:!0}),Object.defineProperty(s,"default",{enumerable:!0,get:function(){return o}});var r,i=n("15169"),t=n("43932"),d=n("9880"),c=n("23169");function a(e){var s=Object.assign({ul:"ul",li:"li",strong:"strong",code:"code",p:"p",a:"a",h3:"h3",pre:"pre"},(0,c.useMDXComponents)(),e.components);return(0,d.jsxs)(d.Fragment,{children:[(0,d.jsxs)(s.ul,{children:["\n",(0,d.jsxs)(s.li,{children:[(0,d.jsx)(s.strong,{children:"类型："})," ",(0,d.jsx)(s.code,{children:"boolean | string"})]}),"\n",(0,d.jsxs)(s.li,{children:[(0,d.jsx)(s.strong,{children:"默认值："})," ",(0,d.jsx)(s.code,{children:"'/'"})]}),"\n"]}),"\n",(0,d.jsxs)(s.p,{children:["设置开发环境下的静态资源 URL 前缀，对应 webpack 的 ",(0,d.jsx)(s.a,{href:"https://webpack.js.org/guides/public-path/",target:"_blank",rel:"noopener noreferrer",children:"output.publicPath"})," 配置。"]}),"\n",(0,d.jsxs)(s.p,{children:[(0,d.jsx)(s.code,{children:"assetPrefix"})," 会影响构建产物中绝大部分静态资源的 URL，包括 JavaScript 文件、CSS 文件、图片、视频等。如果指定了一个错误的值，则在加载这些资源时可能会出现 404 错误。"]}),"\n",(0,d.jsxs)(s.p,{children:["该配置项仅用于开发环境。在生产环境下，请使用 ",(0,d.jsx)(s.code,{children:"output.assetPrefix"})," 配置项进行设置。"]}),"\n",(0,d.jsxs)(s.h3,{id:"boolean-类型",children:["Boolean 类型",(0,d.jsx)(s.a,{className:"header-anchor","aria-hidden":"true",href:"#boolean-类型",children:"#"})]}),"\n",(0,d.jsxs)(s.p,{children:["如果设置 ",(0,d.jsx)(s.code,{children:"assetPrefix"})," 为 ",(0,d.jsx)(s.code,{children:"true"}),"，Builder 会使用 ",(0,d.jsx)(s.code,{children:"http://localhost:port/"})," 作为 URL 前缀："]}),"\n",(0,d.jsx)(s.pre,{children:(0,d.jsx)(s.code,{className:"language-js",children:"export default {\n  dev: {\n    assetPrefix: true,\n  },\n};\n"})}),"\n",(0,d.jsx)(s.p,{children:"对应 JS 文件在浏览器中加载的地址如下："}),"\n",(0,d.jsx)(s.pre,{children:(0,d.jsx)(s.code,{className:"language-js",children:'<script defer src="http://localhost:8080/static/js/main.js"></script>\n'})}),"\n",(0,d.jsxs)(s.p,{children:["如果设置 ",(0,d.jsx)(s.code,{children:"assetPrefix"})," 为 ",(0,d.jsx)(s.code,{children:"false"})," 或不设置，则默认使用 ",(0,d.jsx)(s.code,{children:"/"})," 作为访问前缀。"]}),"\n",(0,d.jsxs)(s.h3,{id:"string-类型",children:["String 类型",(0,d.jsx)(s.a,{className:"header-anchor","aria-hidden":"true",href:"#string-类型",children:"#"})]}),"\n",(0,d.jsxs)(s.p,{children:["当 ",(0,d.jsx)(s.code,{children:"assetPrefix"})," 的值为 ",(0,d.jsx)(s.code,{children:"string"})," 类型时，字符串会作为前缀，自动拼接到静态资源访问 URL 上："]}),"\n",(0,d.jsx)(s.pre,{children:(0,d.jsx)(s.code,{className:"language-js",children:"export default {\n  dev: {\n    assetPrefix: 'http://example.com/assets/',\n  },\n};\n"})}),"\n",(0,d.jsx)(s.p,{children:"对应 JS 文件在浏览器中加载的地址如下："}),"\n",(0,d.jsx)(s.pre,{children:(0,d.jsx)(s.code,{className:"language-js",children:'<script defer src="http://example.com/assets/static/js/main.js"></script>\n'})})]})}(r=globalThis).__RSPRESS_PAGE_META||(r.__RSPRESS_PAGE_META={}),globalThis.__RSPRESS_PAGE_META["/home/runner/work/modern.js/modern.js/packages/document/builder-doc/docs/zh/config/dev/assetPrefix.md"]={toc:[{text:"Boolean 类型",id:"boolean-类型",depth:3},{text:"String 类型",id:"string-类型",depth:3}],title:"",frontmatter:{}};var o=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},s=Object.assign({},(0,c.useMDXComponents)(),e.components).wrapper;return s?(0,d.jsx)(s,t._(i._({},e),{children:(0,d.jsx)(a,i._({},e))})):a(e)}},49926:function(e,s,n){"use strict";Object.defineProperty(s,"__esModule",{value:!0}),Object.defineProperty(s,"default",{enumerable:!0,get:function(){return l}});var r,i=n("15169"),t=n("43932"),d=n("9880"),c=n("23169"),a=n.ir(n("34272"));function o(e){var s=Object.assign({h1:"h1",a:"a",div:"div",p:"p"},(0,c.useMDXComponents)(),e.components);return(0,d.jsxs)(d.Fragment,{children:[(0,d.jsxs)(s.h1,{id:"devassetprefix",children:["dev.assetPrefix",(0,d.jsx)(s.a,{className:"header-anchor","aria-hidden":"true",href:"#devassetprefix",children:"#"})]}),"\n",(0,d.jsxs)(s.div,{className:"modern-directive tip",children:[(0,d.jsx)(s.div,{className:"modern-directive-title",children:"TIP"}),(0,d.jsx)(s.div,{className:"modern-directive-content",children:(0,d.jsxs)(s.p,{children:["该配置由 Modern.js Builder 提供，更多信息可参考 ",(0,d.jsx)(s.a,{href:"https://modernjs.dev/builder/api/config-dev.html#devassetprefix",target:"_blank",rel:"noopener noreferrer",children:"dev.assetPrefix"}),"。\n"]})})]}),"\n","\n",(0,d.jsx)(a.default,{})]})}(r=globalThis).__RSPRESS_PAGE_META||(r.__RSPRESS_PAGE_META={}),globalThis.__RSPRESS_PAGE_META["/home/runner/work/modern.js/modern.js/packages/document/main-doc/docs/zh/configure/app/dev/asset-prefix.mdx"]={toc:[],title:"dev.assetPrefix",frontmatter:{sidebar_label:"assetPrefix"}};var l=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},s=Object.assign({},(0,c.useMDXComponents)(),e.components).wrapper;return s?(0,d.jsx)(s,t._(i._({},e),{children:(0,d.jsx)(o,i._({},e))})):o(e)}}}]);