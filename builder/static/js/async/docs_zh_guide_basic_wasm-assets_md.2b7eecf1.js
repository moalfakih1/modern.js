(self.webpackChunk_modern_js_builder_doc=self.webpackChunk_modern_js_builder_doc||[]).push([["docs_zh_guide_basic_wasm-assets_md"],{7209:function(e,n,s){"use strict";Object.defineProperty(n,"__esModule",{value:!0});!function(e,n){for(var s in n)Object.defineProperty(e,s,{enumerable:!0,get:n[s]})}(n,{frontmatter:function(){return a},title:function(){return i},toc:function(){return c},default:function(){return l}});var d=s("9880"),r=s("23169"),a={},i="引用 Wasm 资源",c=[{text:"引用方式",depth:2,id:"引用方式"},{text:"输出目录",depth:2,id:"输出目录"},{text:"添加类型声明",depth:2,id:"添加类型声明"}];function t(e){var n=Object.assign({h1:"h1",a:"a",p:"p",div:"div",h2:"h2",pre:"pre",code:"code"},(0,r.useMDXComponents)(),e.components);return(0,d.jsxs)(d.Fragment,{children:[(0,d.jsxs)(n.h1,{id:"引用-wasm-资源",children:["引用 Wasm 资源",(0,d.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#引用-wasm-资源",children:"#"})]}),"\n",(0,d.jsx)(n.p,{children:"Builder 支持在代码引用 WebAssembly 资源。"}),"\n",(0,d.jsxs)(n.div,{className:"modern-directive tip",children:[(0,d.jsx)(n.div,{className:"modern-directive-title",children:"什么是 WebAssembly"}),(0,d.jsx)(n.div,{className:"modern-directive-content",children:(0,d.jsx)(n.p,{children:"WebAssembly（缩写为 wasm）是一种可移植、高性能的字节码格式，被设计用来在现代 Web 浏览器中执行 CPU 密集型计算任务，为 Web 平台带来了接近本地编译代码的性能和可靠性。"})})]}),"\n",(0,d.jsxs)(n.div,{className:"modern-directive info",children:[(0,d.jsx)(n.div,{className:"modern-directive-title",children:"INFO"}),(0,d.jsx)(n.div,{className:"modern-directive-content",children:(0,d.jsx)(n.p,{children:"在使用 Rspack 作为打包工具时，暂时不支持引用 Wasm 资源。"})})]}),"\n",(0,d.jsxs)(n.h2,{id:"引用方式",children:["引用方式",(0,d.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#引用方式",children:"#"})]}),"\n",(0,d.jsx)(n.p,{children:"你可以直接在 JavaScript 文件中引用一个 WebAssembly 模块："}),"\n",(0,d.jsx)(n.pre,{children:(0,d.jsx)(n.code,{className:"language-js",meta:'title="index.js"',children:"import { add } from './add.wasm';\n\nconsole.log(add); // [native code]\nconsole.log(add(1, 2)); // 3\n"})}),"\n",(0,d.jsx)(n.p,{children:"也可以通过 Dynamic Import 来引用 WebAssembly 模块："}),"\n",(0,d.jsx)(n.pre,{children:(0,d.jsx)(n.code,{className:"language-js",meta:'title="index.js"',children:"import('./add.wasm').then(({ add }) => {\n  console.log('---- Async Wasm Module');\n  console.log(add); // [native code]\n  console.log(add(1, 2)); // 3\n});\n"})}),"\n",(0,d.jsxs)(n.h2,{id:"输出目录",children:["输出目录",(0,d.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#输出目录",children:"#"})]}),"\n",(0,d.jsxs)(n.p,{children:["当 ",(0,d.jsx)(n.code,{children:".wasm"})," 资源被引用后，默认会被 Builder 输出到 ",(0,d.jsx)(n.code,{children:"dist/static/wasm"})," 目录下。"]}),"\n",(0,d.jsxs)(n.p,{children:["你可以通过 ",(0,d.jsx)(n.a,{href:"/api/config-output#outputdistpath",children:"output.distPath"})," 配置项来修改 ",(0,d.jsx)(n.code,{children:".wasm"})," 产物的输出目录。"]}),"\n",(0,d.jsx)(n.pre,{children:(0,d.jsx)(n.code,{className:"language-ts",children:"export default {\n  output: {\n    distPath: {\n      wasm: 'resource/wasm',\n    },\n  },\n};\n"})}),"\n",(0,d.jsxs)(n.h2,{id:"添加类型声明",children:["添加类型声明",(0,d.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#添加类型声明",children:"#"})]}),"\n",(0,d.jsx)(n.p,{children:"当你在 TypeScript 代码中引用 Wasm 文件时，通常需要添加相应的类型声明。"}),"\n",(0,d.jsxs)(n.p,{children:["比如 ",(0,d.jsx)(n.code,{children:"add.wasm"})," 文件导出了 ",(0,d.jsx)(n.code,{children:"add()"})," 方法，那么你可以在同级目录下创建一个 ",(0,d.jsx)(n.code,{children:"add.wasm.d.ts"})," 文件，并添加相应的类型声明："]}),"\n",(0,d.jsx)(n.pre,{children:(0,d.jsx)(n.code,{className:"language-ts",meta:'title="add.wasm.d.ts"',children:"export const add = (num1: number, num2: number) => number;\n"})})]})}var l=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=Object.assign({},(0,r.useMDXComponents)(),e.components).wrapper;return n?(0,d.jsx)(n,Object.assign({},e,{children:(0,d.jsx)(t,e)})):t(e)}}}]);