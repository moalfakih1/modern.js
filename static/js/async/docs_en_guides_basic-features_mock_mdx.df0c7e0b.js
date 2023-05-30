(self.webpackChunk_modern_js_main_doc=self.webpackChunk_modern_js_main_doc||[]).push([["docs_en_guides_basic-features_mock_mdx"],{94230:function(e,n,r){"use strict";Object.defineProperty(n,"__esModule",{value:!0});!function(e,n){for(var r in n)Object.defineProperty(e,r,{enumerable:!0,get:n[r]})}(n,{frontmatter:function(){return c},title:function(){return o},toc:function(){return s},default:function(){return a}});var t=r("9880"),i=r("23169"),c={title:"Mock",sidebar_position:6},o="Mock",s=[{text:"Mock File",depth:2,id:"mock-file"},{text:"Writing Mock Files",depth:2,id:"writing-mock-files"},{text:"Return Random Data",depth:2,id:"return-random-data"},{text:"Delayed Return",depth:2,id:"delayed-return"},{text:"Use Mock On Demand",depth:2,id:"use-mock-on-demand"}];function d(e){var n=Object.assign({h1:"h1",a:"a",p:"p",h2:"h2",code:"code",pre:"pre",div:"div",ul:"ul",li:"li"},(0,i.useMDXComponents)(),e.components);return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)(n.h1,{id:"mock",children:["Mock",(0,t.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#mock",children:"#"})]}),"\n",(0,t.jsx)(n.p,{children:"Modern.js provides the ability to quickly generate Mock data, allowing the front-end to develop independently without being blocked by the back-end interface."}),"\n",(0,t.jsxs)(n.h2,{id:"mock-file",children:["Mock File",(0,t.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#mock-file",children:"#"})]}),"\n",(0,t.jsxs)(n.p,{children:["By convention, when there is ",(0,t.jsx)(n.code,{children:"index.[jt]s"})," in the ",(0,t.jsx)(n.code,{children:"config/mock/"})," directory, the Mock Data will be automatically enabled, as follows:"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:".\n├── config\n│   └── mock\n│       └── index.ts\n├── src\n│   └── App.tsx\n└── modern.config.ts\n"})}),"\n",(0,t.jsxs)(n.h2,{id:"writing-mock-files",children:["Writing Mock Files",(0,t.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#writing-mock-files",children:"#"})]}),"\n",(0,t.jsxs)(n.p,{children:["the ",(0,t.jsx)(n.code,{children:"config/mock/index.ts"})," file only needs to export an object containing all Mock APIs. The properties of the object are composed of the request configuration ",(0,t.jsx)(n.code,{children:"method"})," and ",(0,t.jsx)(n.code,{children:"url"}),", and the corresponding property values can be ",(0,t.jsx)(n.code,{children:"Object"}),", ",(0,t.jsx)(n.code,{children:"Array"}),", ",(0,t.jsx)(n.code,{children:"Function"}),":"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-js",children:"export default {\n  /* The attribute is the concrete method and request url, and the value is object or array as the result of the request */\n  'GET /api/getInfo': { data: [1, 2, 3, 4] },\n\n  /* the default method is GET */\n  '/api/getExample': { id: 1 },\n\n  /* You can use custom functions to dynamically return data, req and res are both Node.js HTTP objects. */\n  'POST /api/addInfo': (req, res, next) => {\n    res.setHeader('Access-Control-Allow-Origin', '*');\n    res.end('200');\n  },\n};\n"})}),"\n",(0,t.jsxs)(n.p,{children:["when access ",(0,t.jsx)(n.code,{children:"http://localhost:8080/api/getInfo"}),", the api will return json ",(0,t.jsx)(n.code,{children:'{ "data": [1, 2, 3, 4] }'}),"."]}),"\n",(0,t.jsxs)(n.h2,{id:"return-random-data",children:["Return Random Data",(0,t.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#return-random-data",children:"#"})]}),"\n",(0,t.jsxs)(n.p,{children:["Libraries such as ",(0,t.jsx)(n.a,{href:"https://github.com/nuysoft/Mock/wiki/Getting-Started",target:"_blank",rel:"noopener noreferrer",children:"Mock.js"})," can be used in ",(0,t.jsx)(n.code,{children:"config/mock/index.js"})," to generate random data, for example:"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-js",children:"const Mock = require('mockjs');\n\nmodule.exports = {\n  '/api/getInfo': Mock.mock({\n    'data|1-10': [{ name: '@cname' }],\n  }) /* => {data: [{name: \"董霞\"}, {name: \"魏敏\"},  {name: \"石磊\"}} */,\n};\n"})}),"\n",(0,t.jsxs)(n.div,{className:"modern-directive info",children:[(0,t.jsx)(n.div,{className:"modern-directive-title",children:"Other Mock Lib"}),(0,t.jsxs)(n.div,{className:"modern-directive-content",children:["\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.a,{href:"https://github.com/chancejs/chancejs",target:"_blank",rel:"noopener noreferrer",children:"Chancejs"})}),"\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.a,{href:"https://github.com/nuysoft/Mock/wiki/Getting-Started",target:"_blank",rel:"noopener noreferrer",children:"Mock"})}),"\n"]}),"\n"]})]}),"\n",(0,t.jsxs)(n.h2,{id:"delayed-return",children:["Delayed Return",(0,t.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#delayed-return",children:"#"})]}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:'It can be achieved using the function of the browser "weak connection simulation".'}),"\n",(0,t.jsxs)(n.li,{children:["Delays can be set via ",(0,t.jsx)(n.code,{children:"setTimeout"}),", for example:"]}),"\n"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-ts",children:"export default {\n  'api/getInfo': (req, res) => {\n    setTimeout(() => {\n      res.end('delay 2000ms');\n    }, 2000);\n  },\n};\n"})}),"\n",(0,t.jsxs)(n.h2,{id:"use-mock-on-demand",children:["Use Mock On Demand",(0,t.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#use-mock-on-demand",children:"#"})]}),"\n",(0,t.jsxs)(n.p,{children:["Under the ",(0,t.jsx)(n.code,{children:"config/mock/index.ts"}),", you can also export the ",(0,t.jsx)(n.code,{children:"config"})," to control the Mock service."]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-ts",children:"type MockConfig = {\n  enable: ((req: IncomingMessage, res: ServerResponse) => boolean) | boolean;\n};\n\nexport const config = {\n  enable: false\n}\n"})}),"\n",(0,t.jsxs)(n.p,{children:["Currently only the ",(0,t.jsx)(n.code,{children:"enable"})," configuration is supported, through which developers can control whether to execute Mock."]}),"\n",(0,t.jsxs)(n.div,{className:"modern-directive note",children:[(0,t.jsx)(n.div,{className:"modern-directive-title",children:"NOTE"}),(0,t.jsx)(n.div,{className:"modern-directive-content",children:(0,t.jsxs)(n.p,{children:["After modifying ",(0,t.jsx)(n.code,{children:"config"}),", there is no need to restart the service, which will take effect immediately.\n"]})})]})]})}var a=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=Object.assign({},(0,i.useMDXComponents)(),e.components).wrapper;return n?(0,t.jsx)(n,Object.assign({},e,{children:(0,t.jsx)(d,e)})):d(e)}}}]);