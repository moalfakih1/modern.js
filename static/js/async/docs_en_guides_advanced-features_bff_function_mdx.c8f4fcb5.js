(self.webpackChunk_modern_js_main_doc=self.webpackChunk_modern_js_main_doc||[]).push([["docs_en_guides_advanced-features_bff_function_mdx"],{8911:function(e,n,t){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),Object.defineProperty(n,"default",{enumerable:!0,get:function(){return c}});var i,s=t("15169"),r=t("43932"),d=t("9880"),a=t("23169"),o=t("78955");function l(e){var n=Object.assign({ol:"ol",li:"li",code:"code",pre:"pre"},(0,a.useMDXComponents)(),e.components);return(0,d.jsxs)(d.Fragment,{children:[(0,d.jsxs)(n.ol,{children:["\n",(0,d.jsxs)(n.li,{children:["Execute ",(0,d.jsx)(n.code,{children:"pnpm new"}),' and select "Enable BFF"']}),"\n",(0,d.jsxs)(n.li,{children:["Add the following code to ",(0,d.jsx)(n.code,{children:"modern.config.[tj]s"})," according to the chosen runtime framework:"]}),"\n"]}),"\n","\n",(0,d.jsxs)(o.Tabs,{children:[(0,d.jsx)(o.Tab,{value:"express",label:"Express.js",default:!0,children:(0,d.jsx)(n.pre,{children:(0,d.jsx)(n.code,{className:"language-ts",meta:'title="modern.config.ts"',children:"import expressPlugin from '@modern-js/plugin-express';\nimport bffPlugin from '@modern-js/plugin-bff';\n\nexport default defineConfig({\n  plugins: [expressPlugin(), bffPlugin()],\n});\n"})})}),(0,d.jsx)(o.Tab,{value:"koa",label:"Koa.js",children:(0,d.jsx)(n.pre,{children:(0,d.jsx)(n.code,{className:"language-ts",meta:'title="modern.config.ts"',children:"import koaPlugin from '@modern-js/plugin-koa';\nimport bffPlugin from '@modern-js/plugin-bff';\n\nexport default defineConfig({\n  plugins: [koaPlugin(), bffPlugin()],\n});\n"})})})]})]})}(i=globalThis).__RSPRESS_PAGE_META||(i.__RSPRESS_PAGE_META={}),globalThis.__RSPRESS_PAGE_META["/home/runner/work/modern.js/modern.js/packages/document/main-doc/docs/en/components/enable-bff.mdx"]={toc:[],title:"",frontmatter:{}};var c=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=Object.assign({},(0,a.useMDXComponents)(),e.components).wrapper;return n?(0,d.jsx)(n,r._(s._({},e),{children:(0,d.jsx)(l,s._({},e))})):l(e)}},64406:function(e,n,t){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),Object.defineProperty(n,"default",{enumerable:!0,get:function(){return c}});var i,s=t("15169"),r=t("43932"),d=t("9880"),a=t("23169"),o=t.ir(t("8911"));function l(e){var n=Object.assign({h1:"h1",a:"a",p:"p",code:"code",h2:"h2",strong:"strong",pre:"pre",div:"div",img:"img",h3:"h3",ul:"ul",li:"li",h4:"h4"},(0,a.useMDXComponents)(),e.components);return(0,d.jsxs)(d.Fragment,{children:[(0,d.jsxs)(n.h1,{id:"basic-usage",children:["Basic Usage",(0,d.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#basic-usage",children:"#"})]}),"\n",(0,d.jsxs)(n.p,{children:["Applications developed with Modern.js can define API functions in the ",(0,d.jsx)(n.code,{children:"api/"})," directory, which can be called by the front-end to send requests without writing front and back-end glue layer code, At the same time, it ensures the type safety of the front and back end"]}),"\n",(0,d.jsxs)(n.h2,{id:"enable-bff",children:["Enable BFF",(0,d.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#enable-bff",children:"#"})]}),"\n","\n",(0,d.jsx)(o.default,{}),"\n",(0,d.jsxs)(n.h2,{id:"bff-function",children:["BFF Function",(0,d.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#bff-function",children:"#"})]}),"\n",(0,d.jsxs)(n.p,{children:["The functions that are allowed to be called through integration are called ",(0,d.jsx)(n.strong,{children:"BFF functions"}),". Here is the simplest BFF function to write, creating an ",(0,d.jsx)(n.code,{children:"api/hello.ts"})," file:"]}),"\n",(0,d.jsx)(n.pre,{children:(0,d.jsx)(n.code,{className:"language-ts",meta:'title="api/hello.ts"',children:"export const get = async () => 'Hello Modern.js';\n"})}),"\n",(0,d.jsxs)(n.p,{children:["Then directly import the function in ",(0,d.jsx)(n.code,{children:"src/App.tsx"})," and call:"]}),"\n",(0,d.jsx)(n.pre,{children:(0,d.jsx)(n.code,{className:"language-tsx",meta:"title=src/App.tsx",children:"import { useState, useEffect } from 'react';\nimport { get as hello } from '@api/hello';\n\nexport default () => {\n  const [text, setText] = useState('');\n\n  useEffect(() => {\n    hello().then(setText);\n  }, []);\n  return <div>{text}</div>;\n};\n"})}),"\n",(0,d.jsxs)(n.div,{className:"modern-directive info",children:[(0,d.jsx)(n.div,{className:"modern-directive-title",children:"INFO"}),(0,d.jsxs)(n.div,{className:"modern-directive-content",children:[(0,d.jsxs)(n.p,{children:["Modern.js generator has already configured the ",(0,d.jsx)(n.code,{children:"@api"})," alias in tsconfig.json, so you can import functions directly by aliases."]}),"\n"]})]}),"\n",(0,d.jsxs)(n.p,{children:["The functions import in ",(0,d.jsx)(n.code,{children:"src/App.tsx"})," will be automatically converted into interface calls, so there is no need to call the interface through fetch."]}),"\n",(0,d.jsxs)(n.p,{children:["Execute ",(0,d.jsx)(n.code,{children:"pnpm run dev"}),", then open ",(0,d.jsx)(n.code,{children:"http://localhost:8080/"})," to see that the page has displayed the content returned by the BFF function. In Network, you can see that the page sent a request to ",(0,d.jsx)(n.code,{children:"http://localhost:8080/api/hello"}),"."]}),"\n",(0,d.jsx)(n.p,{children:(0,d.jsx)(n.img,{src:"https://p6-piu.byteimg.com/tos-cn-i-8jisjyls3a/fd41750f8d414179a9b4ecb519919b36~tplv-8jisjyls3a-3:0:0:q75.png",alt:"Network"})}),"\n",(0,d.jsxs)(n.h2,{id:"api-routes",children:["API Routes",(0,d.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#api-routes",children:"#"})]}),"\n",(0,d.jsx)(n.p,{children:"In Modern.js, the BFF function routing system is implemented based on the file system, and it is also a conventional routing system."}),"\n",(0,d.jsxs)(n.p,{children:["In ",(0,d.jsx)(n.strong,{children:"Function Mode"}),", All files under ",(0,d.jsx)(n.code,{children:"api/"})," will map to an interface. In ",(0,d.jsx)(n.strong,{children:"Framework Mode"}),", All files under ",(0,d.jsx)(n.code,{children:"api/lambda"})," will map to an interface"]}),"\n",(0,d.jsxs)(n.div,{className:"modern-directive note",children:[(0,d.jsx)(n.div,{className:"modern-directive-title",children:"NOTE"}),(0,d.jsxs)(n.div,{className:"modern-directive-content",children:[(0,d.jsx)(n.p,{children:"Function Mode & Framework Mode will introduce soon."}),"\n"]})]}),"\n",(0,d.jsxs)(n.p,{children:["All routes generated by BFF functions have a prefix, and the default value is ",(0,d.jsx)(n.code,{children:"/api"}),". The prefix can be set through ",(0,d.jsx)(n.a,{href:"/configure/app/bff/prefix",children:"bff.prefix"}),"."]}),"\n",(0,d.jsx)(n.p,{children:"Several routing conventions are described as follow."}),"\n",(0,d.jsxs)(n.h3,{id:"default-route",children:["Default Route",(0,d.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#default-route",children:"#"})]}),"\n",(0,d.jsxs)(n.p,{children:["Files named ",(0,d.jsx)(n.code,{children:"index.[jt]s"})," are mapped to the previous directory."]}),"\n",(0,d.jsxs)(n.ul,{children:["\n",(0,d.jsxs)(n.li,{children:[(0,d.jsx)(n.code,{children:"api/index.ts"})," -> ",(0,d.jsx)(n.code,{children:"{prefix}/"})]}),"\n",(0,d.jsxs)(n.li,{children:[(0,d.jsx)(n.code,{children:"api/user/index.ts"})," -> ",(0,d.jsx)(n.code,{children:"{prefix}/user"})]}),"\n"]}),"\n",(0,d.jsxs)(n.h3,{id:"multi-layer-routing",children:["Multi-layer Routing",(0,d.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#multi-layer-routing",children:"#"})]}),"\n",(0,d.jsx)(n.p,{children:"Supports parsing nested files, if you create a nested folder structure, the files will still automatically parse routes in the same way."}),"\n",(0,d.jsxs)(n.ul,{children:["\n",(0,d.jsxs)(n.li,{children:[(0,d.jsx)(n.code,{children:"api/hello.ts"})," -> ",(0,d.jsx)(n.code,{children:"{prefix}/hello"})]}),"\n",(0,d.jsxs)(n.li,{children:[(0,d.jsx)(n.code,{children:"api/user/list.ts"})," -> ",(0,d.jsx)(n.code,{children:"{prefix}/user/list"})]}),"\n"]}),"\n",(0,d.jsxs)(n.h3,{id:"dynamic-routing",children:["Dynamic Routing",(0,d.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#dynamic-routing",children:"#"})]}),"\n",(0,d.jsxs)(n.p,{children:["Create folders or files named with ",(0,d.jsx)(n.code,{children:"[xxx]"})," to support dynamic named routing parameters."]}),"\n",(0,d.jsxs)(n.ul,{children:["\n",(0,d.jsxs)(n.li,{children:[(0,d.jsx)(n.code,{children:"api/user/[username]/info.ts"})," -> ",(0,d.jsx)(n.code,{children:"{prefix}/user/:username/info"})]}),"\n",(0,d.jsxs)(n.li,{children:[(0,d.jsx)(n.code,{children:"api/user/username/[action].ts"})," -> ",(0,d.jsx)(n.code,{children:"{prefix}/user/username/:action"})]}),"\n"]}),"\n",(0,d.jsxs)(n.h3,{id:"allow-list",children:["Allow List",(0,d.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#allow-list",children:"#"})]}),"\n",(0,d.jsx)(n.p,{children:"By default, all files in the'api/'directory will be parsed as BFF function files, but the following files will not be parsed:"}),"\n",(0,d.jsxs)(n.ul,{children:["\n",(0,d.jsxs)(n.li,{children:["file name start with ",(0,d.jsx)(n.code,{children:"_"}),", for example ",(0,d.jsx)(n.code,{children:"_utils.ts"}),"."]}),"\n",(0,d.jsxs)(n.li,{children:["files in directory which name start with ",(0,d.jsx)(n.code,{children:"_"}),", for example ",(0,d.jsx)(n.code,{children:"_utils/index.ts"}),"、",(0,d.jsx)(n.code,{children:"_utils/cp.ts"}),"."]}),"\n",(0,d.jsxs)(n.li,{children:["test files, for example ",(0,d.jsx)(n.code,{children:"foo.test.ts"}),"."]}),"\n",(0,d.jsxs)(n.li,{children:["type files, for example ",(0,d.jsx)(n.code,{children:"hello.d.ts"}),"."]}),"\n",(0,d.jsxs)(n.li,{children:["files in ",(0,d.jsx)(n.code,{children:"node_module"}),"."]}),"\n"]}),"\n",(0,d.jsxs)(n.h2,{id:"restful-api",children:["RESTful API",(0,d.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#restful-api",children:"#"})]}),"\n",(0,d.jsx)(n.p,{children:"Modern.js BFF functions need to be defined according to the RESTful API standard, follow the HTTP Method specification, and do not allow free parameter definition."}),"\n",(0,d.jsxs)(n.div,{className:"modern-directive info",children:[(0,d.jsx)(n.div,{className:"modern-directive-title",children:"INFO"}),(0,d.jsxs)(n.div,{className:"modern-directive-content",children:[(0,d.jsxs)(n.p,{children:["Assuming that the function allows free definition of parameters, the resulting route must be called by the ",(0,d.jsx)(n.strong,{children:"private protocol"})," (the reason is that the request parameters cannot be distinguished from the request body), and cannot implement any RESTful API."]}),"\n",(0,d.jsxs)(n.p,{children:["If the service is only used for the application itself, there is no problem. but its ",(0,d.jsx)(n.strong,{children:"non-standard interface definition"})," cannot be integrated into the larger system. In the case of multiple systems working together (such as BFF low-code construction), other systems also need to follow the ",(0,d.jsx)(n.strong,{children:"private protocol"}),"."]}),"\n"]})]}),"\n",(0,d.jsxs)(n.h3,{id:"function-named-export",children:["Function Named Export",(0,d.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#function-named-export",children:"#"})]}),"\n",(0,d.jsxs)(n.p,{children:["Modern.js the export name of the BFF function determines the Method of the corresponding interface of the function, such as ",(0,d.jsx)(n.code,{children:"get"}),", ",(0,d.jsx)(n.code,{children:"post"})," and so on."]}),"\n",(0,d.jsxs)(n.p,{children:["For example, following the example, a ",(0,d.jsx)(n.code,{children:"GET"})," interface can be exported."]}),"\n",(0,d.jsx)(n.pre,{children:(0,d.jsx)(n.code,{className:"language-ts",children:"export const get = async () => {\n  return {\n    name: 'Modern.js',\n    desc: 'Web engineering system',\n  };\n};\n"})}),"\n",(0,d.jsxs)(n.p,{children:["Following the example below, a ",(0,d.jsx)(n.code,{children:"POST"})," interface can be exported."]}),"\n",(0,d.jsx)(n.pre,{children:(0,d.jsx)(n.code,{className:"language-ts",children:"export const post = async () => {\n  return {\n    name: 'Modern.js',\n    desc: 'Web engineering system',\n  };\n};\n"})}),"\n",(0,d.jsxs)(n.ul,{children:["\n",(0,d.jsxs)(n.li,{children:["\n",(0,d.jsxs)(n.p,{children:["Modern.js supports 9 definitions for HTTP Method: ",(0,d.jsx)(n.code,{children:"GET"}),"、",(0,d.jsx)(n.code,{children:"POST"}),"、",(0,d.jsx)(n.code,{children:"PUT"}),"、",(0,d.jsx)(n.code,{children:"DELETE"}),"、",(0,d.jsx)(n.code,{children:"CONNECT"}),"、",(0,d.jsx)(n.code,{children:"TRACE"}),"、",(0,d.jsx)(n.code,{children:"PATCH"}),"、",(0,d.jsx)(n.code,{children:"OPTIONS"}),"、",(0,d.jsx)(n.code,{children:"HEAD"}),", can be exported using these methods as functions."]}),"\n"]}),"\n",(0,d.jsxs)(n.li,{children:["\n",(0,d.jsxs)(n.p,{children:["The name is size insensitive, if ",(0,d.jsx)(n.code,{children:"GET"}),", can write ",(0,d.jsx)(n.code,{children:"get"}),"、",(0,d.jsx)(n.code,{children:"Get"}),"、",(0,d.jsx)(n.code,{children:"GEt"}),"、",(0,d.jsx)(n.code,{children:"GET"}),", can be accurately identified. But default export as ",(0,d.jsx)(n.code,{children:"export default xxx"})," will be map to ",(0,d.jsx)(n.code,{children:"Get"}),"."]}),"\n"]}),"\n",(0,d.jsxs)(n.li,{children:["\n",(0,d.jsx)(n.p,{children:"Multiple functions of different Methods can be defined in one file, but if multiple functions of the same Method are defined, only the first will take effect."}),"\n"]}),"\n"]}),"\n",(0,d.jsxs)(n.div,{className:"modern-directive info",children:[(0,d.jsx)(n.div,{className:"modern-directive-title",children:"INFO"}),(0,d.jsxs)(n.div,{className:"modern-directive-content",children:[(0,d.jsx)(n.p,{children:"It should be noted that the defined functions should all be asynchronous, which is related to the type when the function is called, which will be mentioned later."}),"\n"]})]}),"\n",(0,d.jsxs)(n.h3,{id:"function-parameter-rule",children:["Function Parameter Rule",(0,d.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#function-parameter-rule",children:"#"})]}),"\n",(0,d.jsx)(n.p,{children:"As mentioned above, in order to meet the design criteria of RESTful APIs, the BFF function in Modern.js needs to follow certain imported parameter rules."}),"\n",(0,d.jsxs)(n.p,{children:["The function parameters are divided into two parts, the dynamic part in the request path and the request option ",(0,d.jsx)(n.code,{children:"RequestOption"}),"."]}),"\n",(0,d.jsxs)(n.h4,{id:"dynamic-path",children:["Dynamic Path",(0,d.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#dynamic-path",children:"#"})]}),"\n",(0,d.jsx)(n.p,{children:"Dynamic routing will be used as imported parameters in the first part of the function, and each imported parameter corresponds to a dynamic route. For example, in the following example, uid will be passed into the function as the first two parameters:"}),"\n",(0,d.jsx)(n.pre,{children:(0,d.jsx)(n.code,{className:"language-ts",meta:'title="api/[level]/[id].ts"',children:"export default async (level: number, id: number) => {\n  const userData = await queryUser(level, uid);\n  return userData;\n};\n"})}),"\n",(0,d.jsx)(n.p,{children:"Pass dynamic parameters directly when calling:"}),"\n",(0,d.jsx)(n.pre,{children:(0,d.jsx)(n.code,{className:"language-ts",meta:'title="App.tsx"',children:"import { useState, useEffect } from 'react';\nimport { get as getUser } from '@api/[level]/[id]';\n\nexport default () => {\n  const [name, setName] = useState('');\n\n  useEffect(() => {\n    getUser(6, 001).then(userData => setName(userData.name));\n  }, []);\n\n  return <div>{name}</div>;\n};\n"})}),"\n",(0,d.jsxs)(n.h4,{id:"requestoption",children:["RequestOption",(0,d.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#requestoption",children:"#"})]}),"\n",(0,d.jsxs)(n.p,{children:["The parameter after Dynamic Path is the object ",(0,d.jsx)(n.code,{children:"RequestOption"})," containing querystring and request body, which is used to define the types of ",(0,d.jsx)(n.code,{children:"data"})," and ",(0,d.jsx)(n.code,{children:"query"}),"."]}),"\n",(0,d.jsxs)(n.p,{children:["In normal functions without dynamic routing, the incoming ",(0,d.jsx)(n.code,{children:"data"})," and ",(0,d.jsx)(n.code,{children:"query"})," can be obtained from the first imported parameter, for example:"]}),"\n",(0,d.jsx)(n.pre,{children:(0,d.jsx)(n.code,{className:"language-ts",meta:'title="api/hello.ts"',children:"import type { RequestOption } from '@modern-js/runtime/server';\n\nexport async function post({\n  query,\n  data,\n}: RequestOption<Record<string, string>, Record<string, string>>) {\n  // do somethings\n}\n"})}),"\n",(0,d.jsxs)(n.p,{children:["When a function file uses dynamic routing rules, dynamic routing before the ",(0,d.jsx)(n.code,{children:"RequestOption"})," parameter."]}),"\n",(0,d.jsx)(n.pre,{children:(0,d.jsx)(n.code,{className:"language-ts",meta:'title="api/[sku]/[id]/item.ts"',children:"export async function post(\n  sku: string,\n  id: string,\n  {\n    data,\n    query,\n  }: RequestOption<Record<string, string>, Record<string, string>>,\n) {\n  // do somethings\n}\n"})}),"\n",(0,d.jsx)(n.p,{children:"Also pass in the parameters according to the function definition:"}),"\n",(0,d.jsx)(n.pre,{children:(0,d.jsx)(n.code,{className:"language-ts",meta:'title="App.tsx"',children:"import { post } from '@api/[sku]/[id]/item';\n\nexport default () => {\n  const addSku = () => {\n    post('0001' /* sku */, '1234' /* id */, {\n      query: {\n        /* ... */\n      },\n      data: {\n        /* ... */\n      },\n    });\n  };\n\n  return <div onClick={addSku}>添加 SKU</div>;\n};\n"})}),"\n",(0,d.jsx)(n.p,{children:"As mentioned earlier, the defined functions should be asynchronous because they are automatically converted to HTTP interface calls when called by the front end."}),"\n",(0,d.jsx)(n.p,{children:"so in order to keep the type definition consistent with the actual calling, it is necessary to set the BFF function to asynchronous when defining it."})]})}(i=globalThis).__RSPRESS_PAGE_META||(i.__RSPRESS_PAGE_META={}),globalThis.__RSPRESS_PAGE_META["/home/runner/work/modern.js/modern.js/packages/document/main-doc/docs/en/guides/advanced-features/bff/function.mdx"]={toc:[{text:"Enable BFF",id:"enable-bff",depth:2},{text:"BFF Function",id:"bff-function",depth:2},{text:"API Routes",id:"api-routes",depth:2},{text:"Default Route",id:"default-route",depth:3},{text:"Multi-layer Routing",id:"multi-layer-routing",depth:3},{text:"Dynamic Routing",id:"dynamic-routing",depth:3},{text:"Allow List",id:"allow-list",depth:3},{text:"RESTful API",id:"restful-api",depth:2},{text:"Function Named Export",id:"function-named-export",depth:3},{text:"Function Parameter Rule",id:"function-parameter-rule",depth:3},{text:"Dynamic Path",id:"dynamic-path",depth:4},{text:"RequestOption",id:"requestoption",depth:4}],title:"Basic Usage",frontmatter:{sidebar_position:1,title:"Basic Usage"}};var c=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=Object.assign({},(0,a.useMDXComponents)(),e.components).wrapper;return n?(0,d.jsx)(n,r._(s._({},e),{children:(0,d.jsx)(l,s._({},e))})):l(e)}}}]);