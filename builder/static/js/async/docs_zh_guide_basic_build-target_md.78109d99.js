(self.webpackChunkwebpack=self.webpackChunkwebpack||[]).push([["docs_zh_guide_basic_build-target_md"],{40176:function(e,r,n){"use strict";Object.defineProperty(r,"__esModule",{value:!0});!function(e,r){for(var n in r)Object.defineProperty(e,n,{enumerable:!0,get:r[n]})}(r,{frontmatter:function(){return i},title:function(){return c},toc:function(){return l},default:function(){return o}});var s=n("12151"),d=n("21447"),i={},c="构建产物类型",l=[{text:"默认产物",depth:2,id:"默认产物"},{text:"可选类型",depth:2,id:"可选类型"},{text:"并行构建",depth:2,id:"并行构建"},{text:"Node 产物",depth:2,id:"node-产物"},{text:"Web Worker 产物",depth:2,id:"web-worker-产物"},{text:"Modern Web 产物",depth:2,id:"modern-web-产物"}];function a(e){var r=Object.assign({h1:"h1",a:"a",p:"p",code:"code",h2:"h2",strong:"strong",ul:"ul",li:"li",div:"div",button:"button",pre:"pre"},(0,d.useMDXComponents)(),e.components);return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)(r.h1,{id:"构建产物类型",children:["构建产物类型",(0,s.jsx)(r.a,{className:"header-anchor","aria-hidden":"true",href:"#构建产物类型",children:"#"})]}),"\n",(0,s.jsx)(r.p,{children:"Builder 支持多种构建产物类型，分别适用于不同的目标运行环境。在设置正确的产物类型后，Builder 会针对该环境优化打包结果，在构建过程中启用一些对应的插件或者配置。"}),"\n",(0,s.jsxs)(r.p,{children:["你可以通过 ",(0,s.jsx)(r.a,{href:"/api/builder-core",children:"createBuilder"})," 方法的 ",(0,s.jsx)(r.code,{children:"target"})," 参数来设置产物类型。"]}),"\n",(0,s.jsxs)(r.h2,{id:"默认产物",children:["默认产物",(0,s.jsx)(r.a,{className:"header-anchor","aria-hidden":"true",href:"#默认产物",children:"#"})]}),"\n",(0,s.jsxs)(r.p,{children:["默认情况下，",(0,s.jsx)(r.code,{children:"target"})," 会被设置为 ",(0,s.jsx)(r.code,{children:"'web'"}),"，并构建出",(0,s.jsx)(r.strong,{children:"运行在浏览器环境里的产物"}),"。"]}),"\n",(0,s.jsxs)(r.p,{children:["同时，Builder 会读取项目中的 ",(0,s.jsx)(r.a,{href:"https://github.com/browserslist/browserslist",target:"_blank",rel:"noopener noreferrer",children:"Browserslist 配置"}),"，以确定需要兼容的浏览器范围。"]}),"\n",(0,s.jsxs)(r.h2,{id:"可选类型",children:["可选类型",(0,s.jsx)(r.a,{className:"header-anchor","aria-hidden":"true",href:"#可选类型",children:"#"})]}),"\n",(0,s.jsxs)(r.p,{children:["除了 ",(0,s.jsx)(r.code,{children:"'web'"})," 外，你还可以将 ",(0,s.jsx)(r.code,{children:"target"})," 设置为以下值："]}),"\n",(0,s.jsxs)(r.ul,{children:["\n",(0,s.jsxs)(r.li,{children:[(0,s.jsx)(r.code,{children:"'node'"}),": 构建出运行在 Node.js 环境的产物，通常用于 SSR 等场景。"]}),"\n",(0,s.jsxs)(r.li,{children:[(0,s.jsx)(r.code,{children:"'web-worker'"}),"：构建出运行在 Web Worker 里的产物。"]}),"\n",(0,s.jsxs)(r.li,{children:[(0,s.jsx)(r.code,{children:"'modern-web'"}),"：构建出运行在现代浏览器里的产物。"]}),"\n"]}),"\n",(0,s.jsx)(r.p,{children:"比如构建出适用于 Node.js 环境的产物："}),"\n",(0,s.jsx)(r.div,{className:"language-",children:(0,s.jsxs)(r.div,{className:"modern-code-content",children:[(0,s.jsx)(r.button,{className:"copy"}),(0,s.jsx)(r.pre,{className:"code",children:(0,s.jsx)(r.code,{className:"language-ts",children:"const builder = await createBuilder(provider, {\n  target: 'node',\n});\n"})})]})}),"\n",(0,s.jsxs)(r.h2,{id:"并行构建",children:["并行构建",(0,s.jsx)(r.a,{className:"header-anchor","aria-hidden":"true",href:"#并行构建",children:"#"})]}),"\n",(0,s.jsx)(r.p,{children:"当 target 为包含多个值的数组时，Builder 会并行构建，并生成多份不同的产物。"}),"\n",(0,s.jsx)(r.p,{children:"比如同时构建浏览器产物和 SSR 产物："}),"\n",(0,s.jsx)(r.div,{className:"language-",children:(0,s.jsxs)(r.div,{className:"modern-code-content",children:[(0,s.jsx)(r.button,{className:"copy"}),(0,s.jsx)(r.pre,{className:"code",children:(0,s.jsx)(r.code,{className:"language-ts",children:"const builder = await createBuilder(provider, {\n  target: ['web', 'node'],\n});\n"})})]})}),"\n",(0,s.jsxs)(r.h2,{id:"node-产物",children:["Node 产物",(0,s.jsx)(r.a,{className:"header-anchor","aria-hidden":"true",href:"#node-产物",children:"#"})]}),"\n",(0,s.jsx)(r.p,{children:"指运行在 Node.js 环境的产物，通常用于 SSR 等场景。"}),"\n",(0,s.jsxs)(r.p,{children:["当 ",(0,s.jsx)(r.code,{children:"target"})," 设置为 ",(0,s.jsx)(r.code,{children:"'node'"})," 时，Builder 会进行以下处理："]}),"\n",(0,s.jsxs)(r.ul,{children:["\n",(0,s.jsx)(r.li,{children:"不会生成 HTML 文件，与 HTML 相关的逻辑也不会执行，因为 Node.js 环境不需要 HTML。"}),"\n",(0,s.jsx)(r.li,{children:"不会打包或抽取 CSS 代码，但产物中会包含 CSS Modules 的 id 信息。"}),"\n",(0,s.jsx)(r.li,{children:"不会开启默认的拆包策略，但 dynamic import 依然可以生效。"}),"\n",(0,s.jsx)(r.li,{children:"不会开启热更新相关的能力。"}),"\n",(0,s.jsxs)(r.li,{children:["将 Browserslist 的默认值调整为 ",(0,s.jsx)(r.code,{children:"['node >= 14']"}),"。"]}),"\n"]}),"\n",(0,s.jsxs)(r.div,{className:"modern-directive tip",children:[(0,s.jsx)(r.div,{className:"modern-directive-title",children:"TIP"}),(0,s.jsx)(r.div,{className:"modern-directive-content",children:"如果触发了并行构建，比如同时构建 web 产物和 node 产物，那么上述处理不会影响 web 产物，web 产物所需的 HTML、CSS 等文件依然会正确生成。"})]}),"\n",(0,s.jsxs)(r.h2,{id:"web-worker-产物",children:["Web Worker 产物",(0,s.jsx)(r.a,{className:"header-anchor","aria-hidden":"true",href:"#web-worker-产物",children:"#"})]}),"\n",(0,s.jsxs)(r.p,{children:["指运行在 ",(0,s.jsx)(r.a,{href:"https://developer.mozilla.org/en-US/docs/Web/API/Web_Workers_API",target:"_blank",rel:"noopener noreferrer",children:"Web Worker"})," 环境的产物。"]}),"\n",(0,s.jsxs)(r.div,{className:"modern-directive tip",children:[(0,s.jsx)(r.div,{className:"modern-directive-title",children:"Web Worker"}),(0,s.jsx)(r.div,{className:"modern-directive-content",children:"Web Workers 是一种 JavaScript API，它允许网页在后台线程中执行脚本，与主线程（网页）分离。这意味着，您可以使用 Web Workers 来执行计算密集型或长时间运行的任务，而无需阻塞主线程，进而影响网页的性能。"})]}),"\n",(0,s.jsxs)(r.p,{children:["当 ",(0,s.jsx)(r.code,{children:"target"})," 设置为 ",(0,s.jsx)(r.code,{children:"'web-worker'"})," 时，Builder 会进行以下处理："]}),"\n",(0,s.jsxs)(r.ul,{children:["\n",(0,s.jsx)(r.li,{children:"不会生成 HTML 文件，与 HTML 相关的逻辑也不会执行，因为 Web Worker 环境不需要 HTML。"}),"\n",(0,s.jsx)(r.li,{children:"不会打包或抽取 CSS 代码，但产物中会包含 CSS Modules 的 id 信息。"}),"\n",(0,s.jsxs)(r.li,{children:["不会开启默认的拆包策略，",(0,s.jsx)(r.strong,{children:"并且 dynamic import 也不会生效"}),"，因为 Web Worker 仅运行支持单个 JavaScript 文件。"]}),"\n",(0,s.jsx)(r.li,{children:"不会开启热更新相关的能力。"}),"\n"]}),"\n",(0,s.jsxs)(r.h2,{id:"modern-web-产物",children:["Modern Web 产物",(0,s.jsx)(r.a,{className:"header-anchor","aria-hidden":"true",href:"#modern-web-产物",children:"#"})]}),"\n",(0,s.jsx)(r.p,{children:"指运行在现代浏览器环境的产物。"}),"\n",(0,s.jsxs)(r.div,{className:"modern-directive tip",children:[(0,s.jsx)(r.div,{className:"modern-directive-title",children:"什么是现代浏览器?"}),(0,s.jsxs)(r.div,{className:"modern-directive-content",children:["现代浏览器是我们的一个约定用语，指支持 ",(0,s.jsx)(r.a,{href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Modules",target:"_blank",rel:"noopener noreferrer",children:"原生 ES Modules"})," 的浏览器。\n"]})]}),"\n",(0,s.jsxs)(r.p,{children:["当 ",(0,s.jsx)(r.code,{children:"target"})," 设置为 ",(0,s.jsx)(r.code,{children:"'modern-web'"})," 时，Builder 会进行以下处理："]}),"\n",(0,s.jsxs)(r.ul,{children:["\n",(0,s.jsx)(r.li,{children:"将 Browserslist 的默认值调整为："}),"\n"]}),"\n",(0,s.jsx)(r.div,{className:"language-",children:(0,s.jsxs)(r.div,{className:"modern-code-content",children:[(0,s.jsx)(r.button,{className:"copy"}),(0,s.jsx)(r.pre,{className:"code",children:(0,s.jsx)(r.code,{className:"language-js",children:"const browserslist = [\n  'chrome >= 61',\n  'edge >= 16',\n  'firefox >= 60',\n  'safari >= 11',\n  'ios_saf >= 11',\n];\n"})})]})})]})}var o=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},r=Object.assign({},(0,d.useMDXComponents)(),e.components).wrapper;return r?(0,s.jsx)(r,Object.assign({},e,{children:(0,s.jsx)(a,e)})):a(e)}}}]);