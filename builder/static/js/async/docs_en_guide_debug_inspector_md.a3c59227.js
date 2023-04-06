(self.webpackChunkwebpack=self.webpackChunkwebpack||[]).push([["docs_en_guide_debug_inspector_md"],{83711:function(e,n,t){"use strict";Object.defineProperty(n,"__esModule",{value:!0});!function(e,n){for(var t in n)Object.defineProperty(e,t,{enumerable:!0,get:n[t]})}(n,{frontmatter:function(){return c},title:function(){return d},toc:function(){return a},default:function(){return r}});var i=t("12151"),s=t("21447"),c={},d="Using Webpack Inspector",a=[{text:"Introduction",depth:2,id:"introduction"},{text:"Enable",depth:2,id:"enable"},{text:"Debug Panel",depth:2,id:"debug-panel"},{text:"Config Preview Mode",depth:3,id:"config-preview-mode"},{text:"List Mode",depth:3,id:"list-mode"},{text:"Loader Statistics",depth:3,id:"loader-statistics"},{text:"Dependency Graph Mode",depth:3,id:"dependency-graph-mode"}];function l(e){var n=Object.assign({h1:"h1",a:"a",p:"p",h2:"h2",ul:"ul",li:"li",div:"div",button:"button",pre:"pre",code:"code",h3:"h3",img:"img"},(0,s.useMDXComponents)(),e.components);return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsxs)(n.h1,{id:"using-webpack-inspector",children:["Using Webpack Inspector",(0,i.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#using-webpack-inspector",children:"#"})]}),"\n",(0,i.jsxs)(n.p,{children:["Builder has a built-in ",(0,i.jsx)(n.a,{href:"https://github.com/web-infra-dev/webpack-inspector",target:"_blank",rel:"noopener noreferrer",children:"webpack inspector"})," to debug webpack."]}),"\n",(0,i.jsxs)(n.h2,{id:"introduction",children:["Introduction",(0,i.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#introduction",children:"#"})]}),"\n",(0,i.jsx)(n.p,{children:"The internal workflow of webpack is relatively black box, when using webpack, we often encounter the following problems:"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"When using some upper-level frameworks, I don't know what the final generated webpack config contains."}),"\n",(0,i.jsx)(n.li,{children:"Each module will be processed by different loaders, and the compilation results of each loader are difficult to perceive."}),"\n",(0,i.jsx)(n.li,{children:"It is difficult to analyze the time cost of each webpack loader (such as babel-loader, ts-loader)."}),"\n"]}),"\n",(0,i.jsxs)(n.p,{children:["In order to make performance analysis, error investigation and loader development more convenient, we provide the ",(0,i.jsx)(n.a,{href:"https://github.com/web-infra-dev/webpack-inspector",target:"_blank",rel:"noopener noreferrer",children:"webpack inspector"})," tool in the Builder."]}),"\n",(0,i.jsxs)(n.h2,{id:"enable",children:["Enable",(0,i.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#enable",children:"#"})]}),"\n",(0,i.jsxs)(n.p,{children:["You can enable webpack inspector through ",(0,i.jsx)(n.a,{href:"/en/api/config-tools",children:"tools.inspector"})," config:"]}),"\n",(0,i.jsx)(n.div,{className:"language-",children:(0,i.jsxs)(n.div,{className:"modern-code-content",children:[(0,i.jsx)(n.button,{className:"copy"}),(0,i.jsx)(n.pre,{className:"code",children:(0,i.jsx)(n.code,{className:"language-ts",children:"export default {\n  tools: {\n    inspector: {},\n  },\n};\n"})})]})}),"\n",(0,i.jsx)(n.p,{children:"In order to prevent the inspector from affecting normal development, it is recommended to enable the inspector only in DEBUG mode:"}),"\n",(0,i.jsx)(n.div,{className:"language-",children:(0,i.jsxs)(n.div,{className:"modern-code-content",children:[(0,i.jsx)(n.button,{className:"copy"}),(0,i.jsx)(n.pre,{className:"code",children:(0,i.jsx)(n.code,{className:"language-ts",children:"export default {\n  tools: {\n    inspector: process.env.DEBUG ? {} : undefined,\n  },\n};\n"})})]})}),"\n",(0,i.jsxs)(n.p,{children:["After adding the above config, when you execute ",(0,i.jsx)(n.code,{children:"DEBUG=true pnpm dev"}),", Builder will start the inspector after the compilation is complete. At this time, you can see the following information in the Shell:"]}),"\n",(0,i.jsx)(n.div,{className:"language-",children:(0,i.jsxs)(n.div,{className:"modern-code-content",children:[(0,i.jsx)(n.button,{className:"copy"}),(0,i.jsx)(n.pre,{className:"code",children:(0,i.jsx)(n.code,{className:"language-shell",children:"info    Starting dev server...\n\n【Webpack Inspector】\uD83D\uDD25 started at http://localhost:3333\n"})})]})}),"\n",(0,i.jsxs)(n.p,{children:["Open the ",(0,i.jsx)(n.code,{children:"http://localhost:3333"})," address to access the debug panel of the inspector."]}),"\n",(0,i.jsxs)(n.h2,{id:"debug-panel",children:["Debug Panel",(0,i.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#debug-panel",children:"#"})]}),"\n",(0,i.jsx)(n.p,{children:"The Inspector's debugging panel provides multiple modes, which you can switch through the buttons in the upper right corner."}),"\n",(0,i.jsxs)(n.h3,{id:"config-preview-mode",children:["Config Preview Mode",(0,i.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#config-preview-mode",children:"#"})]}),"\n",(0,i.jsx)(n.p,{children:"The default mode of the panel is config preview mode. In this mode, you can view all config information inside webpack, and the config object can be expanded or collapsed:"}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.img,{src:"https://lf3-static.bytednsdoc.com/obj/eden-cn/zq-uylkvT/ljhwZthlaukjlkulzlp/39248c0f-b1cd-4ea5-b522-3ebba7569497.png",alt:""})}),"\n",(0,i.jsxs)(n.h3,{id:"list-mode",children:["List Mode",(0,i.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#list-mode",children:"#"})]}),"\n",(0,i.jsx)(n.p,{children:"In this mode, all module information will be displayed:"}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.img,{src:"https://lf3-static.bytednsdoc.com/obj/eden-cn/zq-uylkvT/ljhwZthlaukjlkulzlp/8ff3bba0-7824-43b3-996f-7a3b5d2c4f59.png",alt:""})}),"\n",(0,i.jsx)(n.p,{children:"Clicking on the list item will display the compilation details of the module:"}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.img,{src:"https://lf3-static.bytednsdoc.com/obj/eden-cn/zq-uylkvT/ljhwZthlaukjlkulzlp/output.png",alt:""})}),"\n",(0,i.jsxs)(n.h3,{id:"loader-statistics",children:["Loader Statistics",(0,i.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#loader-statistics",children:"#"})]}),"\n",(0,i.jsx)(n.p,{children:"Click the following switch to view loader statistics:"}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.img,{src:"https://lf3-static.bytednsdoc.com/obj/eden-cn/zq-uylkvT/ljhwZthlaukjlkulzlp/c0697cd6-963f-4169-8dc3-dc178641a861.png",alt:""})}),"\n",(0,i.jsxs)(n.h3,{id:"dependency-graph-mode",children:["Dependency Graph Mode",(0,i.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#dependency-graph-mode",children:"#"})]}),"\n",(0,i.jsx)(n.p,{children:"In this mode, the dependencies of all modules will be displayed:"}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.img,{src:"https://lf3-static.bytednsdoc.com/obj/eden-cn/zq-uylkvT/ljhwZthlaukjlkulzlp/9ee30176-e993-4638-83d0-add14484b1b2.png",alt:""})}),"\n",(0,i.jsx)(n.p,{children:"Clicking on a node in the graph will also display the compilation details of the specific module:"}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.img,{src:"https://lf3-static.bytednsdoc.com/obj/eden-cn/zq-uylkvT/ljhwZthlaukjlkulzlp/6f4b6cc7-94c8-446a-8b64-86ca98fbdca7.png",alt:""})}),"\n",(0,i.jsxs)(n.div,{className:"modern-directive tip",children:[(0,i.jsx)(n.div,{className:"modern-directive-title",children:"TIP"}),(0,i.jsx)(n.div,{className:"modern-directive-content",children:"For performance reasons, the dependency graph is not displayed when the number of modules is > 100."})]})]})}var r=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=Object.assign({},(0,s.useMDXComponents)(),e.components).wrapper;return n?(0,i.jsx)(n,Object.assign({},e,{children:(0,i.jsx)(l,e)})):l(e)}}}]);