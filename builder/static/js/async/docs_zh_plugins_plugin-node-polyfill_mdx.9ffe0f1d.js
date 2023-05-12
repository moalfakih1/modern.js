(self.webpackChunk_modern_js_builder_doc=self.webpackChunk_modern_js_builder_doc||[]).push([["docs_zh_plugins_plugin-node-polyfill_mdx"],{8144:function(e,l,n){"use strict";Object.defineProperty(l,"__esModule",{value:!0});!function(e,l){for(var n in l)Object.defineProperty(e,n,{enumerable:!0,get:l[n]})}(l,{frontmatter:function(){return i},title:function(){return r},toc:function(){return c},default:function(){return h}});var d=n("9880"),s=n("23169"),i={},r="Node Polyfill 插件",c=[{text:"快速开始",depth:2,id:"快速开始"},{text:"在 Modern.js 框架中使用",depth:3,id:"在-modernjs-框架中使用"},{text:"通过 Node API 使用",depth:3,id:"通过-node-api-使用"},{text:"安装插件",depth:4,id:"安装插件"},{text:"注册插件",depth:4,id:"注册插件"},{text:"Node Polyfills",depth:2,id:"node-polyfills"},{text:"Globals",depth:3,id:"globals"},{text:"Modules",depth:3,id:"modules"},{text:"Fallbacks",depth:3,id:"fallbacks"}];function o(e){var l=Object.assign({h1:"h1",a:"a",div:"div",p:"p",h2:"h2",h3:"h3",code:"code",pre:"pre",h4:"h4",ul:"ul",li:"li"},(0,s.useMDXComponents)(),e.components);return(0,d.jsxs)(d.Fragment,{children:[(0,d.jsxs)(l.h1,{id:"node-polyfill-插件",children:["Node Polyfill 插件",(0,d.jsx)(l.a,{className:"header-anchor","aria-hidden":"true",href:"#node-polyfill-插件",children:"#"})]}),"\n",(0,d.jsxs)(l.div,{className:"modern-directive tip",children:[(0,d.jsx)(l.div,{className:"modern-directive-title",children:"Node Polyfill 介绍"}),(0,d.jsx)(l.div,{className:"modern-directive-content",children:(0,d.jsx)(l.p,{children:"通常情况下，我们不会在浏览器端使用 Node 模块。但在当前代码需要同时在 Node 端和浏览器端运行时，用到一些 Node 模块是有可能的。Node Polyfill 为这些 Node 模块提供了浏览器版本的 polyfills。"})})]}),"\n",(0,d.jsx)(l.p,{children:"通过使用 Node Polyfill 插件，会自动注入 Node 核心模块在浏览器端的 polyfills，让你可以在浏览器端放心使用这些模块。"}),"\n",(0,d.jsxs)(l.h2,{id:"快速开始",children:["快速开始",(0,d.jsx)(l.a,{className:"header-anchor","aria-hidden":"true",href:"#快速开始",children:"#"})]}),"\n",(0,d.jsxs)(l.h3,{id:"在-modernjs-框架中使用",children:["在 Modern.js 框架中使用",(0,d.jsx)(l.a,{className:"header-anchor","aria-hidden":"true",href:"#在-modernjs-框架中使用",children:"#"})]}),"\n",(0,d.jsxs)(l.p,{children:["Modern.js 框架默认集成了 Builder 的 Node Polyfill 插件，因此，你不需要手动安装和注册插件，只需要将 ",(0,d.jsx)(l.a,{href:"https://modernjs.dev/configure/app/output/disable-node-polyfill.html",target:"_blank",rel:"noopener noreferrer",children:"output.disableNodePolyfill"})," 设置为 ",(0,d.jsx)(l.code,{children:"false"})," 即可："]}),"\n",(0,d.jsx)(l.div,{className:"language-",children:(0,d.jsx)(l.div,{className:"modern-code-content",children:(0,d.jsx)(l.pre,{className:"code",children:(0,d.jsx)(l.code,{className:"language-js",children:"export default defineConfig({\n  output: {\n    disableNodePolyfill: false,\n  },\n});\n"})})})}),"\n",(0,d.jsxs)(l.h3,{id:"通过-node-api-使用",children:["通过 Node API 使用",(0,d.jsx)(l.a,{className:"header-anchor","aria-hidden":"true",href:"#通过-node-api-使用",children:"#"})]}),"\n",(0,d.jsx)(l.p,{children:"如果你直接使用了 Builder 的 Node API，那么需要手动安装和注册 Node Polyfill 插件。"}),"\n",(0,d.jsxs)(l.h4,{id:"安装插件",children:["安装插件",(0,d.jsx)(l.a,{className:"header-anchor","aria-hidden":"true",href:"#安装插件",children:"#"})]}),"\n",(0,d.jsx)(l.p,{children:"你可以通过如下的命令安装插件:"}),"\n",(0,d.jsx)(l.div,{className:"language-",children:(0,d.jsx)(l.div,{className:"modern-code-content",children:(0,d.jsx)(l.pre,{className:"code",children:(0,d.jsx)(l.code,{className:"language-bash",children:"# npm\nnpm install @modern-js/builder-plugin-node-polyfill -D\n\n# yarn\nyarn add @modern-js/builder-plugin-node-polyfill -D\n\n# pnpm\npnpm add @modern-js/builder-plugin-node-polyfill -D\n"})})})}),"\n",(0,d.jsxs)(l.h4,{id:"注册插件",children:["注册插件",(0,d.jsx)(l.a,{className:"header-anchor","aria-hidden":"true",href:"#注册插件",children:"#"})]}),"\n",(0,d.jsxs)(l.p,{children:["通过 ",(0,d.jsx)(l.code,{children:"addPlugins"})," 方法来注册 Node Polyfill 插件："]}),"\n",(0,d.jsx)(l.div,{className:"language-",children:(0,d.jsx)(l.div,{className:"modern-code-content",children:(0,d.jsx)(l.pre,{className:"code",children:(0,d.jsx)(l.code,{className:"language-js",children:"import { builderPluginNodePolyfill } from '@modern-js/builder-plugin-node-polyfill';\n\n// 往 builder 实例上添加插件\nbuilder.addPlugins([builderPluginNodePolyfill()]);\n"})})})}),"\n",(0,d.jsxs)(l.h2,{id:"node-polyfills",children:["Node Polyfills",(0,d.jsx)(l.a,{className:"header-anchor","aria-hidden":"true",href:"#node-polyfills",children:"#"})]}),"\n",(0,d.jsxs)(l.h3,{id:"globals",children:["Globals",(0,d.jsx)(l.a,{className:"header-anchor","aria-hidden":"true",href:"#globals",children:"#"})]}),"\n",(0,d.jsxs)(l.ul,{children:["\n",(0,d.jsx)(l.li,{children:(0,d.jsx)(l.code,{children:"Buffer"})}),"\n",(0,d.jsx)(l.li,{children:(0,d.jsx)(l.code,{children:"process"})}),"\n"]}),"\n",(0,d.jsx)(l.p,{children:"当你在代码中使用以上全局变量时，对应 polyfill 会被自动注入。"}),"\n",(0,d.jsx)(l.div,{className:"language-",children:(0,d.jsx)(l.div,{className:"modern-code-content",children:(0,d.jsx)(l.pre,{className:"code",children:(0,d.jsx)(l.code,{className:"language-ts",children:"const bufferData = Buffer.from('xxxx');\n"})})})}),"\n",(0,d.jsxs)(l.h3,{id:"modules",children:["Modules",(0,d.jsx)(l.a,{className:"header-anchor","aria-hidden":"true",href:"#modules",children:"#"})]}),"\n",(0,d.jsxs)(l.ul,{children:["\n",(0,d.jsx)(l.li,{children:(0,d.jsx)(l.code,{children:"assert"})}),"\n",(0,d.jsx)(l.li,{children:(0,d.jsx)(l.code,{children:"buffer"})}),"\n",(0,d.jsx)(l.li,{children:(0,d.jsx)(l.code,{children:"console"})}),"\n",(0,d.jsx)(l.li,{children:(0,d.jsx)(l.code,{children:"constants"})}),"\n",(0,d.jsx)(l.li,{children:(0,d.jsx)(l.code,{children:"crypto"})}),"\n",(0,d.jsx)(l.li,{children:(0,d.jsx)(l.code,{children:"domain"})}),"\n",(0,d.jsx)(l.li,{children:(0,d.jsx)(l.code,{children:"events"})}),"\n",(0,d.jsx)(l.li,{children:(0,d.jsx)(l.code,{children:"http"})}),"\n",(0,d.jsx)(l.li,{children:(0,d.jsx)(l.code,{children:"https"})}),"\n",(0,d.jsx)(l.li,{children:(0,d.jsx)(l.code,{children:"os"})}),"\n",(0,d.jsx)(l.li,{children:(0,d.jsx)(l.code,{children:"path"})}),"\n",(0,d.jsx)(l.li,{children:(0,d.jsx)(l.code,{children:"punycode"})}),"\n",(0,d.jsx)(l.li,{children:(0,d.jsx)(l.code,{children:"process"})}),"\n",(0,d.jsx)(l.li,{children:(0,d.jsx)(l.code,{children:"querystring"})}),"\n",(0,d.jsx)(l.li,{children:(0,d.jsx)(l.code,{children:"stream"})}),"\n",(0,d.jsx)(l.li,{children:(0,d.jsx)(l.code,{children:"_stream_duplex"})}),"\n",(0,d.jsx)(l.li,{children:(0,d.jsx)(l.code,{children:"_stream_passthrough"})}),"\n",(0,d.jsx)(l.li,{children:(0,d.jsx)(l.code,{children:"_stream_readable"})}),"\n",(0,d.jsx)(l.li,{children:(0,d.jsx)(l.code,{children:"_stream_transform"})}),"\n",(0,d.jsx)(l.li,{children:(0,d.jsx)(l.code,{children:"_stream_writable"})}),"\n",(0,d.jsx)(l.li,{children:(0,d.jsx)(l.code,{children:"string_decoder"})}),"\n",(0,d.jsx)(l.li,{children:(0,d.jsx)(l.code,{children:"sys"})}),"\n",(0,d.jsx)(l.li,{children:(0,d.jsx)(l.code,{children:"timers"})}),"\n",(0,d.jsx)(l.li,{children:(0,d.jsx)(l.code,{children:"tty"})}),"\n",(0,d.jsx)(l.li,{children:(0,d.jsx)(l.code,{children:"url"})}),"\n",(0,d.jsx)(l.li,{children:(0,d.jsx)(l.code,{children:"util"})}),"\n",(0,d.jsx)(l.li,{children:(0,d.jsx)(l.code,{children:"vm"})}),"\n",(0,d.jsx)(l.li,{children:(0,d.jsx)(l.code,{children:"zlib"})}),"\n"]}),"\n",(0,d.jsxs)(l.p,{children:["当你通过 ",(0,d.jsx)(l.code,{children:"require"})," 或 ",(0,d.jsx)(l.code,{children:"import"})," 等语法在代码中引用以上模块时，对应 polyfill 会被注入。"]}),"\n",(0,d.jsx)(l.div,{className:"language-",children:(0,d.jsx)(l.div,{className:"modern-code-content",children:(0,d.jsx)(l.pre,{className:"code",children:(0,d.jsx)(l.code,{className:"language-ts",children:"import { Buffer } from 'buffer';\n\nconst bufferData = Buffer.from('xxxx');\n"})})})}),"\n",(0,d.jsxs)(l.h3,{id:"fallbacks",children:["Fallbacks",(0,d.jsx)(l.a,{className:"header-anchor","aria-hidden":"true",href:"#fallbacks",children:"#"})]}),"\n",(0,d.jsxs)(l.ul,{children:["\n",(0,d.jsx)(l.li,{children:(0,d.jsx)(l.code,{children:"child_process"})}),"\n",(0,d.jsx)(l.li,{children:(0,d.jsx)(l.code,{children:"cluster"})}),"\n",(0,d.jsx)(l.li,{children:(0,d.jsx)(l.code,{children:"dgram"})}),"\n",(0,d.jsx)(l.li,{children:(0,d.jsx)(l.code,{children:"dns"})}),"\n",(0,d.jsx)(l.li,{children:(0,d.jsx)(l.code,{children:"fs"})}),"\n",(0,d.jsx)(l.li,{children:(0,d.jsx)(l.code,{children:"module"})}),"\n",(0,d.jsx)(l.li,{children:(0,d.jsx)(l.code,{children:"net"})}),"\n",(0,d.jsx)(l.li,{children:(0,d.jsx)(l.code,{children:"readline"})}),"\n",(0,d.jsx)(l.li,{children:(0,d.jsx)(l.code,{children:"repl"})}),"\n",(0,d.jsx)(l.li,{children:(0,d.jsx)(l.code,{children:"tls"})}),"\n"]}),"\n",(0,d.jsx)(l.p,{children:"目前浏览器端没有以上模块的 polyfill，因此当你引用以上模块时，会自动 fallback 为一个空对象。"}),"\n",(0,d.jsx)(l.div,{className:"language-",children:(0,d.jsx)(l.div,{className:"modern-code-content",children:(0,d.jsx)(l.pre,{className:"code",children:(0,d.jsx)(l.code,{className:"language-ts",children:"import fs from 'fs';\n\nconsole.log(fs); // -> {}\n"})})})})]})}var h=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},l=Object.assign({},(0,s.useMDXComponents)(),e.components).wrapper;return l?(0,d.jsx)(l,Object.assign({},e,{children:(0,d.jsx)(o,e)})):o(e)}}}]);