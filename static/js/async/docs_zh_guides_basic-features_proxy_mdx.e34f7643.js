(self.webpackChunk_modern_js_main_doc=self.webpackChunk_modern_js_main_doc||[]).push([["docs_zh_guides_basic-features_proxy_mdx"],{62422:function(e,n,r){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),Object.defineProperty(n,"default",{enumerable:!0,get:function(){return o}});var s=r("9880"),i=r("23169");function t(e){var n=Object.assign({p:"p",code:"code",a:"a",h3:"h3",pre:"pre",img:"img"},(0,i.useMDXComponents)(),e.components);return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)(n.p,{children:["Modern.js 提供了开箱即用的全局代理插件 ",(0,s.jsx)(n.code,{children:"@modern-js/plugin-proxy"}),"，该插件底层基于 ",(0,s.jsx)(n.a,{href:"https://github.com/avwo/whistle",target:"_blank",rel:"noopener noreferrer",children:"whistle"}),"，可用来查看、修改 HTTP/HTTPS 的请求和响应，也可作为 HTTP 代理服务器使用。"]}),"\n",(0,s.jsxs)(n.h3,{id:"设置代理规则",children:["设置代理规则",(0,s.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#设置代理规则",children:"#"})]}),"\n",(0,s.jsxs)(n.p,{children:["引入代理插件并填写规则后，执行 ",(0,s.jsx)(n.code,{children:"pnpm run dev"}),"，Modern.js 会在开发服务器启动之后，自动启用代理服务器。"]}),"\n",(0,s.jsxs)(n.p,{children:["具体代理规则，可通过 ",(0,s.jsx)(n.a,{href:"/configure/app/dev/proxy",children:(0,s.jsx)(n.code,{children:"dev.proxy"})})," 选项或 ",(0,s.jsx)(n.code,{children:"config/proxy.js"})," 文件进行设置。"]}),"\n",(0,s.jsxs)(n.h3,{id:"代理服务器-ui-界面",children:["代理服务器 UI 界面",(0,s.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#代理服务器-ui-界面",children:"#"})]}),"\n",(0,s.jsxs)(n.p,{children:["安装代理插件并配置代理规则后， 执行 ",(0,s.jsx)(n.code,{children:"pnpm run dev"})," 命令："]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"  App running at:\n\n  Local:    http://localhost:8080/\n  Network:  http://192.168.0.1:8080/\n\nℹ  info      Starting the proxy server.....\n✔  success   Proxy Server start on localhost:8899\n"})}),"\n",(0,s.jsx)(n.p,{children:"在控制台中可以看到代理服务器成功启动。"}),"\n",(0,s.jsxs)(n.p,{children:["访问 ",(0,s.jsx)(n.code,{children:"http://localhost:8899"}),"，显示下图所示的 UI 界面后，即可通过界面设置规则。"]}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.img,{src:"https://lf3-static.bytednsdoc.com/obj/eden-cn/aphqeh7uhohpquloj/modern-js/debug/debug-proxy-ui.png",alt:"debug-proxy-ui"})})]})}var o=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=Object.assign({},(0,i.useMDXComponents)(),e.components).wrapper;return n?(0,s.jsx)(n,Object.assign({},e,{children:(0,s.jsx)(t,e)})):t(e)}},97163:function(e,n,r){"use strict";Object.defineProperty(n,"__esModule",{value:!0});!function(e,n){for(var r in n)Object.defineProperty(e,r,{enumerable:!0,get:n[r]})}(n,{frontmatter:function(){return o},title:function(){return c},toc:function(){return d},default:function(){return h}});var s=r("9880"),i=r("23169"),t=r.ir(r("62422")),o={title:"代理",sidebar_position:5},c="代理",d=[{text:"本地代理",depth:2,id:"本地代理"},{text:"全局代理",depth:2,id:"全局代理"},{text:"BFF 代理",depth:2,id:"bff-代理"}];function a(e){var n=Object.assign({h1:"h1",a:"a",h2:"h2",p:"p",code:"code",pre:"pre",div:"div"},(0,i.useMDXComponents)(),e.components);return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)(n.h1,{id:"代理",children:["代理",(0,s.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#代理",children:"#"})]}),"\n",(0,s.jsxs)(n.h2,{id:"本地代理",children:["本地代理",(0,s.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#本地代理",children:"#"})]}),"\n",(0,s.jsxs)(n.p,{children:["Modern.js 在 ",(0,s.jsx)(n.a,{href:"/configure/app/tools/dev-server",children:(0,s.jsx)(n.code,{children:"tools.devServer"})})," 中提供了配置开发环境代理的方式。例如，将本地开发接口，代理到线上某个地址："]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-ts",meta:'title="modern.config.ts"',children:"import { defineConfig } from '@modern-js/app-tools';\n\nexport default defineConfig({\n  tools: {\n    devServer: {\n      proxy: {\n        '/go/api': {\n          target: 'http://www.example.com/',\n          changeOrigin: true,\n        },\n      },\n    },\n  },\n});\n"})}),"\n",(0,s.jsxs)(n.p,{children:["请求 ",(0,s.jsx)(n.code,{children:"http://localhost:8080/go/api"})," 时，会从 ",(0,s.jsx)(n.a,{href:"http://www.example.com/",target:"_blank",rel:"noopener noreferrer",children:(0,s.jsx)(n.a,{href:"http://www.example.com/",target:"_blank",rel:"noopener noreferrer",children:"http://www.example.com/"})})," 返回响应内容。"]}),"\n",(0,s.jsxs)(n.div,{className:"modern-directive info",children:[(0,s.jsx)(n.div,{className:"modern-directive-title",children:"补充信息"}),(0,s.jsxs)(n.div,{className:"modern-directive-content",children:[(0,s.jsxs)(n.p,{children:["配置格式可参考：",(0,s.jsx)(n.a,{href:"https://github.com/chimurai/http-proxy-middleware",target:"_blank",rel:"noopener noreferrer",children:"http-proxy-middleware"}),"。"]}),"\n"]})]}),"\n",(0,s.jsxs)(n.h2,{id:"全局代理",children:["全局代理",(0,s.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#全局代理",children:"#"})]}),"\n","\n",(0,s.jsx)(t.default,{}),"\n",(0,s.jsxs)(n.h2,{id:"bff-代理",children:["BFF 代理",(0,s.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#bff-代理",children:"#"})]}),"\n",(0,s.jsxs)(n.p,{children:["通过配置 ",(0,s.jsx)(n.a,{href:"/configure/app/bff/proxy",children:(0,s.jsx)(n.code,{children:"bff.proxy"})})," 可以代理 BFF API 请求到指定的服务上，上述两种代理不同，它同样可以用在生产环境："]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-ts",meta:'title="modern.config.ts"',children:"export default defineConfig({\n  bff: {\n    proxy: {\n      '/api/v1': 'https://cnodejs.org',\n    },\n  },\n});\n"})}),"\n",(0,s.jsxs)(n.p,{children:["例如代码中使用一体化 BFF 调用时，最终请求 ",(0,s.jsx)(n.code,{children:"http://localhost:8080/api/v1/topics"})," 会自动代理到 ",(0,s.jsx)(n.code,{children:"https://cnodejs.org/api/v1/topics"}),"："]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-js",children:"import getTopics from '@api/v1/topics';\n\ngetTopics();\n"})})]})}var h=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=Object.assign({},(0,i.useMDXComponents)(),e.components).wrapper;return n?(0,s.jsx)(n,Object.assign({},e,{children:(0,s.jsx)(a,e)})):a(e)}}}]);