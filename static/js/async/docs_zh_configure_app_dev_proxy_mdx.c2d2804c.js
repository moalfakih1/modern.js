(self.webpackChunk_modern_js_main_doc=self.webpackChunk_modern_js_main_doc||[]).push([["docs_zh_configure_app_dev_proxy_mdx"],{64127:function(e,n,r){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),Object.defineProperty(n,"default",{enumerable:!0,get:function(){return l}});var s,o=r("15169"),d=r("43932"),t=r("9880"),i=r("23169");function c(e){var n=Object.assign({ul:"ul",li:"li",strong:"strong",code:"code",p:"p",a:"a",h3:"h3",pre:"pre",img:"img",div:"div"},(0,i.useMDXComponents)(),e.components);return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"类型："})," ",(0,t.jsx)(n.code,{children:"string | Object"})]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"默认值："})," ",(0,t.jsx)(n.code,{children:"null"})]}),"\n"]}),"\n",(0,t.jsxs)(n.p,{children:["该选项用于在开发环境下启用基于 ",(0,t.jsx)(n.a,{href:"https://wproxy.org/whistle/",target:"_blank",rel:"noopener noreferrer",children:"whistle"})," 的全局代理，可以用来查看、修改 HTTP/HTTPS 请求、响应、也可以用作代理服务器。"]}),"\n",(0,t.jsxs)(n.h3,{id:"注册插件",children:["注册插件",(0,t.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#注册插件",children:"#"})]}),"\n",(0,t.jsxs)(n.p,{children:["使用该选项前，你需要提前安装和注册 ",(0,t.jsx)(n.code,{children:"@modern-js/plugin-proxy"})," 插件："]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:"# npm\nnpm add @modern-js/plugin-proxy -D\n\n# yarn\nyarn add @modern-js/plugin-proxy -D\n\n# pnpm\npnpm add @modern-js/plugin-proxy -D\n"})}),"\n",(0,t.jsxs)(n.p,{children:["安装完成后，在 ",(0,t.jsx)(n.code,{children:"modern.config.ts"})," 文件中注册插件："]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-ts",meta:'title="modern.config.ts"',children:"import { appTools, defineConfig } from '@modern-js/app-tools';\nimport { proxyPlugin } from '@modern-js/plugin-proxy';\n\nexport default defineConfig({\n  plugins: [appTools(), proxyPlugin()],\n});\n"})}),"\n",(0,t.jsxs)(n.h3,{id:"object-类型",children:["Object 类型",(0,t.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#object-类型",children:"#"})]}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.code,{children:"dev.proxy"})," 的值为 ",(0,t.jsx)(n.code,{children:"Object"})," 时，对象的 ",(0,t.jsx)(n.code,{children:"key"})," 对应匹配的 ",(0,t.jsx)(n.code,{children:"pattern"}),"，对象的 ",(0,t.jsx)(n.code,{children:"value"})," 对应匹配的 ",(0,t.jsx)(n.code,{children:"target"}),"。"]}),"\n",(0,t.jsx)(n.p,{children:"例如："}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-ts",meta:'title="modern.config.ts"',children:"export default defineConfig({\n  dev: {\n    proxy: {\n      'https://www.baidu.com': 'https://google.com.hk',\n      //可以通过 file 协议直接返回静态文件。\n      'https://example.com/api': 'file://./data.json',\n    },\n  },\n});\n"})}),"\n",(0,t.jsxs)(n.p,{children:["请参考 ",(0,t.jsx)(n.a,{href:"https://wproxy.org/whistle/pattern.html",target:"_blank",rel:"noopener noreferrer",children:"whistle - 匹配模式"})," 来了解详细用法。"]}),"\n",(0,t.jsxs)(n.h3,{id:"string-类型",children:["String 类型",(0,t.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#string-类型",children:"#"})]}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.code,{children:"dev.proxy"})," 的值为 ",(0,t.jsx)(n.code,{children:"string"})," 时， 可以用来指定单独的代理文件，例如："]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-ts",meta:'title="modern.config.ts"',children:"export default defineConfig({\n  dev: {\n    proxy: './proxy.js',\n  },\n});\n"})}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-js",meta:'title="proxy.js"',children:"module.exports = {\n  name: 'my-app',\n  rules: `\n    ^example.com:8080/api/***   http://localhost:3001/api/$\n  `,\n};\n"})}),"\n",(0,t.jsxs)(n.h3,{id:"启动代理",children:["启动代理",(0,t.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#启动代理",children:"#"})]}),"\n",(0,t.jsxs)(n.p,{children:["执行 ",(0,t.jsx)(n.code,{children:"dev"}),", 提示如下时，即代理服务器启动成功："]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:"  App running at:\n\n  Local:    http://localhost:8080/\n  Network:  http://192.168.0.1:8080/\n\nℹ  info      Starting the proxy server.....\n✔  success   Proxy Server start on localhost:8899\n"})}),"\n",(0,t.jsxs)(n.p,{children:["访问 ",(0,t.jsx)(n.code,{children:"localhost:8899"}),", 可以在 UI 界面上查看 Network 以及配置代理规则："]}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.img,{src:"https://lf3-static.bytednsdoc.com/obj/eden-cn/aphqeh7uhohpquloj/modern-js/docs/dev-proxy.png",alt:"proxy ui 界面"})}),"\n",(0,t.jsxs)(n.div,{className:"modern-directive info",children:[(0,t.jsx)(n.div,{className:"modern-directive-title",children:"INFO"}),(0,t.jsxs)(n.div,{className:"modern-directive-content",children:[(0,t.jsxs)(n.p,{children:["https 代理自动安装证书需要获取 root 权限, 请根据提示输入密码即可。",(0,t.jsx)(n.strong,{children:"密码仅在信任证书时使用，不会泄漏或者用于其他环节"}),"。"]}),"\n"]})]})]})}(s=globalThis).__RSPRESS_PAGE_META||(s.__RSPRESS_PAGE_META={}),globalThis.__RSPRESS_PAGE_META["%2Fhome%2Frunner%2Fwork%2Fmodern.js%2Fmodern.js%2Fpackages%2Fdocument%2Fmain-doc%2Fdocs%2Fzh%2Fcomponents%2Fglobal-proxy-config.mdx"]={toc:[{text:"注册插件",id:"注册插件",depth:3},{text:"Object 类型",id:"object-类型",depth:3},{text:"String 类型",id:"string-类型",depth:3},{text:"启动代理",id:"启动代理",depth:3}],title:"",frontmatter:{}};var l=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=Object.assign({},(0,i.useMDXComponents)(),e.components).wrapper;return n?(0,t.jsx)(n,d._(o._({},e),{children:(0,t.jsx)(c,o._({},e))})):c(e)}},52166:function(e,n,r){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),Object.defineProperty(n,"default",{enumerable:!0,get:function(){return a}});var s,o=r("15169"),d=r("43932"),t=r("9880"),i=r("23169"),c=r.ir(r("64127"));function l(e){var n=Object.assign({h1:"h1",a:"a"},(0,i.useMDXComponents)(),e.components);return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)(n.h1,{id:"devproxy",children:["dev.proxy",(0,t.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#devproxy",children:"#"})]}),"\n","\n",(0,t.jsx)(c.default,{})]})}(s=globalThis).__RSPRESS_PAGE_META||(s.__RSPRESS_PAGE_META={}),globalThis.__RSPRESS_PAGE_META["%2Fhome%2Frunner%2Fwork%2Fmodern.js%2Fmodern.js%2Fpackages%2Fdocument%2Fmain-doc%2Fdocs%2Fzh%2Fconfigure%2Fapp%2Fdev%2Fproxy.mdx"]={toc:[],title:"dev.proxy",frontmatter:{sidebar_label:"proxy"}};var a=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=Object.assign({},(0,i.useMDXComponents)(),e.components).wrapper;return n?(0,t.jsx)(n,d._(o._({},e),{children:(0,t.jsx)(l,o._({},e))})):l(e)}}}]);