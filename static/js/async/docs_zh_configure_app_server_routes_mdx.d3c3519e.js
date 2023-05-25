(self.webpackChunk_modern_js_main_doc=self.webpackChunk_modern_js_main_doc||[]).push([["docs_zh_configure_app_server_routes_mdx"],{59931:function(e,n,r){"use strict";Object.defineProperty(n,"__esModule",{value:!0});!function(e,n){for(var r in n)Object.defineProperty(e,r,{enumerable:!0,get:n[r]})}(n,{frontmatter:function(){return d},title:function(){return i},toc:function(){return a},default:function(){return l}});var s=r("9880"),t=r("23169"),d={sidebar_label:"routes"},i="server.routes",a=[{text:"自定义访问路由",depth:2,id:"自定义访问路由"},{text:"自定义响应头",depth:2,id:"自定义响应头"}];function c(e){var n=Object.assign({h1:"h1",a:"a",ul:"ul",li:"li",strong:"strong",code:"code",p:"p",h2:"h2",pre:"pre",div:"div"},(0,t.useMDXComponents)(),e.components);return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)(n.h1,{id:"serverroutes",children:["server.routes",(0,s.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#serverroutes",children:"#"})]}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"类型："})," ",(0,s.jsx)(n.code,{children:"Object"})]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"默认值："})," 根据文件约定自动生成的服务端路由规则：应用的每个入口生成一条路由规则，入口名称等于路由名称。"]}),"\n"]}),"\n",(0,s.jsx)(n.p,{children:"该配置选项只作用于服务端路由，可以自定义应用入口的服务访问配置。"}),"\n",(0,s.jsxs)(n.h2,{id:"自定义访问路由",children:["自定义访问路由",(0,s.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#自定义访问路由",children:"#"})]}),"\n",(0,s.jsxs)(n.p,{children:["对象的 ",(0,s.jsx)(n.code,{children:"key"})," 为当前应用的入口名, 值可以是 ",(0,s.jsx)(n.code,{children:"string | Array<string>"}),"。"]}),"\n",(0,s.jsxs)(n.p,{children:["当值类型为 ",(0,s.jsx)(n.code,{children:"string"})," 时，当前值即表示访问该入口的路由名称。"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-ts",meta:'title="modern.config.ts"',children:"export default defineConfig({\n  server: {\n    routes: {\n      // 默认路由为 /entryName1，自定义后为 /p/test1\n      entryName1: '/p/test1'\n      // 支持动态服务端路由配置\n      entryName2: '/detail/:id'\n    }\n  }\n});\n"})}),"\n",(0,s.jsxs)(n.p,{children:["也可以通过 ",(0,s.jsx)(n.code,{children:"Array<string>"})," 为入口设置多个访问路由:"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-ts",meta:'title="modern.config.ts"',children:"export default defineConfig({\n  server: {\n    routes: {\n      'page-a': [`/a`, '/b'],\n    },\n  },\n});\n"})}),"\n",(0,s.jsxs)(n.p,{children:["此时，通过 ",(0,s.jsx)(n.code,{children:"/a"}),"、",(0,s.jsx)(n.code,{children:"/b"})," 两个路由都可以访问到 ",(0,s.jsx)(n.code,{children:"page-a"})," 入口。"]}),"\n",(0,s.jsxs)(n.p,{children:["执行 ",(0,s.jsx)(n.code,{children:"dev"})," 命令后，可以在 ",(0,s.jsx)(n.code,{children:"dist/route.json"})," 中查看入口 ",(0,s.jsx)(n.code,{children:"page-a"})," 存在两条路由记录:"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-json",children:'{\n  "routes": [\n    {\n      "urlPath": "/a",\n      "entryName": "page-a",\n      "entryPath": "html/page-a/index.html",\n      "isSPA": true,\n      "isSSR": false\n    },\n    {\n      "urlPath": "/b",\n      "entryName": "page-a",\n      "entryPath": "html/page-a/index.html",\n      "isSPA": true,\n      "isSSR": false\n    }\n  ]\n}\n'})}),"\n",(0,s.jsxs)(n.h2,{id:"自定义响应头",children:["自定义响应头",(0,s.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#自定义响应头",children:"#"})]}),"\n",(0,s.jsx)(n.p,{children:"可以通过配置入口的 resHeaders 设置响应头："}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-ts",meta:'title="modern.config.ts"',children:"export default defineConfig({\n  server: {\n    routes: {\n      'page-a': {\n        route: ['/a', '/b'],\n        resHeaders: {\n          'x-modern-test': '1',\n        },\n      },\n    },\n  },\n});\n"})}),"\n",(0,s.jsxs)(n.div,{className:"modern-directive note",children:[(0,s.jsx)(n.div,{className:"modern-directive-title",children:"NOTE"}),(0,s.jsxs)(n.div,{className:"modern-directive-content",children:[(0,s.jsxs)(n.p,{children:["这一配置在生产环境与开发环境都生效，可以根据 NODE_ENV 区分环境设置不同的响应头。但如果你只需要在开发环境设置响应头，推荐使用 ",(0,s.jsx)(n.code,{children:"tools.devServer.headers"}),"。"]}),"\n"]})]})]})}var l=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=Object.assign({},(0,t.useMDXComponents)(),e.components).wrapper;return n?(0,s.jsx)(n,Object.assign({},e,{children:(0,s.jsx)(c,e)})):c(e)}}}]);