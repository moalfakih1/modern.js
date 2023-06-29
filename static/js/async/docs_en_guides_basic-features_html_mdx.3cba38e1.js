(self.webpackChunk_modern_js_main_doc=self.webpackChunk_modern_js_main_doc||[]).push([["docs_en_guides_basic-features_html_mdx"],{85273:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"default",{enumerable:!0,get:function(){return c}});var r,s=n("15169"),o=n("43932"),i=n("9880"),a=n("23169");function d(e){var t=Object.assign({h1:"h1",a:"a",p:"p",strong:"strong",h2:"h2",code:"code",pre:"pre",h3:"h3",ul:"ul",li:"li",div:"div"},(0,a.useMDXComponents)(),e.components);return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsxs)(t.h1,{id:"html-template",children:["HTML Template",(0,i.jsx)(t.a,{className:"header-anchor","aria-hidden":"true",href:"#html-template",children:"#"})]}),"\n",(0,i.jsxs)(t.p,{children:["Modern.js provides ",(0,i.jsx)(t.strong,{children:"JSX syntax"})," and ",(0,i.jsx)(t.strong,{children:"HTML(EJS) syntax"})," to customize the HTML template."]}),"\n",(0,i.jsxs)(t.h2,{id:"jsx-syntax",children:["JSX Syntax",(0,i.jsx)(t.a,{className:"header-anchor","aria-hidden":"true",href:"#jsx-syntax",children:"#"})]}),"\n",(0,i.jsxs)(t.p,{children:["According to Modern.js conventions, you can create a ",(0,i.jsx)(t.code,{children:"Document.[jt]sx"})," file under ",(0,i.jsx)(t.code,{children:"src/"}),' or the entry directory and default export a component". The rendering result of this component can be used as the HTML template of the entry.']}),"\n",(0,i.jsx)(t.p,{children:"For example, consider the following directory structure:"}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-bash",children:".\n└── src\n    ├── Document.tsx\n    ├── entry-a\n    │   ├── Document.tsx\n    │   └── routes\n    ├── entry-b\n    │    └── routes\n    └── modern-app-env.d.ts\n"})}),"\n",(0,i.jsxs)(t.p,{children:[(0,i.jsx)(t.code,{children:"entry-a"})," will use the ",(0,i.jsx)(t.code,{children:"Docoument.[jt]sx"})," file under the current entry as the template. If there is no ",(0,i.jsx)(t.code,{children:"Document.[jt]sx"})," file under the current entry, like ",(0,i.jsx)(t.code,{children:"entry-b"}),", it will look for the ",(0,i.jsx)(t.code,{children:"Document.[jt]sx"})," file under the root directory."]}),"\n",(0,i.jsx)(t.p,{children:"If not found, default template will be used."}),"\n",(0,i.jsxs)(t.h3,{id:"html-components",children:["HTML Components",(0,i.jsx)(t.a,{className:"header-anchor","aria-hidden":"true",href:"#html-components",children:"#"})]}),"\n",(0,i.jsxs)(t.p,{children:["Modern.js provides some components for rendering pages to help developers generate templates. These components can be used from ",(0,i.jsx)(t.code,{children:"@modern-js/runtime/document"}),":"]}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-tsx",children:"import { Html, Body, Root, Head, Scripts } from '@modern-js/runtime/document';\n"})}),"\n",(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsxs)(t.li,{children:["\n",(0,i.jsxs)(t.p,{children:[(0,i.jsx)(t.code,{children:"Html"}),": provide the ability of native HTML Element and and render necessary components that the developer did not add by default. ",(0,i.jsx)(t.code,{children:"<Head>"})," and ",(0,i.jsx)(t.code,{children:"<Body>"})," must exist, and other components can be assembled as needed."]}),"\n"]}),"\n",(0,i.jsxs)(t.li,{children:["\n",(0,i.jsxs)(t.p,{children:[(0,i.jsx)(t.code,{children:"Body"}),": provide the ability of native Body Element and needs to contain the ",(0,i.jsx)(t.code,{children:"<Root>"})," component internally. It also supports other elements as child elements at the same time, such as adding footers."]}),"\n"]}),"\n",(0,i.jsxs)(t.li,{children:["\n",(0,i.jsxs)(t.p,{children:[(0,i.jsx)(t.code,{children:"Root"}),": the root node ",(0,i.jsx)(t.code,{children:"<div id='root'></div>"})," to be rendered. The default id of the root node is ",(0,i.jsx)(t.code,{children:"id = 'root'"}),". You can set ",(0,i.jsx)(t.code,{children:"props.rootId"})," to change the id attribute. Child components can be added and will be rendered in the HTML template. After React rendering is complete, it will be overwritten and is generally used to implement global Loading."]}),"\n"]}),"\n",(0,i.jsxs)(t.li,{children:["\n",(0,i.jsxs)(t.p,{children:[(0,i.jsx)(t.code,{children:"Head"}),": provide the ability of native Head Element and automatically fills in ",(0,i.jsx)(t.code,{children:"<meta>"})," and ",(0,i.jsx)(t.code,{children:"<Scripts>"})," components."]}),"\n"]}),"\n",(0,i.jsxs)(t.li,{children:["\n",(0,i.jsxs)(t.p,{children:[(0,i.jsx)(t.code,{children:"Scripts"}),": Used to control the placement of the ",(0,i.jsx)(t.code,{children:"<script>"})," tags generated by the build. By default, they are placed within the ",(0,i.jsx)(t.code,{children:"<Head>"})," component."]}),"\n"]}),"\n",(0,i.jsxs)(t.li,{children:["\n",(0,i.jsxs)(t.p,{children:[(0,i.jsx)(t.code,{children:"Comment"}),": retain user-written comments like ",(0,i.jsx)(t.code,{children:"<!-- gateway -->"})," and outputs them to the rendered HTML."]}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(t.h3,{id:"template-parameters",children:["Template Parameters",(0,i.jsx)(t.a,{className:"header-anchor","aria-hidden":"true",href:"#template-parameters",children:"#"})]}),"\n",(0,i.jsxs)(t.p,{children:["Because it is in JSX format, various variables can be used freely in the component to assign values to various custom components in ",(0,i.jsx)(t.code,{children:"Document.[jt]sx"}),"."]}),"\n",(0,i.jsxs)(t.p,{children:["Modern.js also provides ",(0,i.jsx)(t.code,{children:"DocumentContext"})," to provide some configuration and environment parameters for easy access. The main parameters are:"]}),"\n",(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.code,{children:"processEnv"}),": provides the ",(0,i.jsx)(t.code,{children:"process.env"})," during the build."]}),"\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.code,{children:"config"}),": the configuration of the Modern.js project. Currently, only the output configuration is exposed."]}),"\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.code,{children:"entryName"}),": the current entry name."]}),"\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.code,{children:"templateParams"}),": parameters of HTML template (compatible with traditional templates, so it's not recommended for use)."]}),"\n"]}),"\n",(0,i.jsxs)(t.h3,{id:"basic-example",children:["Basic Example",(0,i.jsx)(t.a,{className:"header-anchor","aria-hidden":"true",href:"#basic-example",children:"#"})]}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-tsx",children:"import React, { useContext } from 'react';\nimport {\n  Html,\n  Root,\n  Head,\n  Body,\n  Comment,\n  DocumentContext,\n} from '@modern-js/runtime/document';\n\nexport default function Document(): React.ReactElement {\n  // the params provide by DocumentContext\n  const {\n    config: { output: htmlConfig },\n    entryName,\n    templateParams,\n  } = useContext(DocumentContext);\n\n  return (\n    <Html>\n      <Head>\n        <link href=\"https://modernjs.dev\" />\n        <Comment>{'<!-- Need a Comment -->'}</Comment>\n      </Head>\n      <Body>\n        <Root rootId=\"root\">\n          <h1 style={{ color: 'red' }}>Some Params: </h1>\n          <h2>entryName: {entryName}</h2>\n          <h2>title: {htmlConfig.title}</h2>\n          <h2>rootId: {templateParams.mountId}</h2>\n        </Root>\n        <h1>bottom</h1>\n      </Body>\n    </Html>\n  );\n}\n"})}),"\n",(0,i.jsx)(t.p,{children:"The above JSX components will generate the following HTML template:"}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-html",children:'<!DOCTYPE html>\n<html>\n  <head>\n    <meta charset="utf-8" />\n    <meta\n      name="viewport"\n      content="width=device-width, initial-scale=1.0, shrink-to-fit=no, viewport-fit=cover, minimum-scale=1.0, maximum-scale=1.0, user-scalable=no"\n    />\n    <meta http-equiv="x-ua-compatible" content="ie=edge" />\n    <meta name="renderer" content="webkit" />\n    <meta name="layoutmode" content="standard" />\n    <meta name="imagemode" content="force" />\n    <meta name="wap-font-scale" content="no" />\n    <meta name="format-detection" content="telephone=no" />\n    <link rel="icon" href="/a.icon" />\n    <script defer src="/static/js/builder-runtime.js"></script>\n    <script defer src="/static/js/lib-react.js"></script>\n    <script defer src="/static/js/lib-polyfill.js"></script>\n    <script defer src="/static/js/lib-router.js"></script>\n    <script defer src="/static/js/main.js"></script>\n    <link href="https://modernjs.dev" />\n    <!-- Need a Comment -->\n  </head>\n\n  <body>\n    <div id="root">\n      <!--<?- html ?>-->\n      <h1 style="color:red">Some Params:</h1>\n      <h2>entryName: main</h2>\n      <h2>title：</h2>\n      <h2>rootId: root</h2>\n    </div>\n    <h1>bottom</h1>\n    <!--<?- chunksMap.js ?>-->\n    <!--<?- SSRDataScript ?>-->\n  </body>\n</html>\n'})}),"\n",(0,i.jsxs)(t.h3,{id:"scripts-component-example",children:["Scripts Component Example",(0,i.jsx)(t.a,{className:"header-anchor","aria-hidden":"true",href:"#scripts-component-example",children:"#"})]}),"\n",(0,i.jsxs)(t.p,{children:["You can use the ",(0,i.jsx)(t.code,{children:"<Scripts>"})," component to insert the ",(0,i.jsx)(t.code,{children:"<script>"})," tags generated by the build inside the ",(0,i.jsx)(t.code,{children:"<body>"})," tag:"]}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-tsx",children:"import React from 'react';\nimport { Html, Root, Head, Body, Scripts } from '@modern-js/runtime/document';\n\nexport default function Document(): React.ReactElement {\n  return (\n    <Html>\n      <Head></Head>\n      <Body>\n        <Root rootId=\"root\"></Root>\n        <Scripts />\n      </Body>\n    </Html>\n  );\n}\n"})}),"\n",(0,i.jsxs)(t.h2,{id:"html-syntax",children:["HTML Syntax",(0,i.jsx)(t.a,{className:"header-anchor","aria-hidden":"true",href:"#html-syntax",children:"#"})]}),"\n",(0,i.jsx)(t.p,{children:"Modern.js also supports HTML syntax. By default, Modern.js application projects will include a built-in HTML template for generating HTML code."}),"\n",(0,i.jsxs)(t.p,{children:["Based on the HTML syntax template, Modern.js provides two ways to customize the template: ",(0,i.jsx)(t.strong,{children:"custom HTML fragments"})," and ",(0,i.jsx)(t.strong,{children:"custom the whole HTML"}),"."]}),"\n",(0,i.jsxs)(t.h3,{id:"custom-html-fragments",children:["Custom HTML Fragments",(0,i.jsx)(t.a,{className:"header-anchor","aria-hidden":"true",href:"#custom-html-fragments",children:"#"})]}),"\n",(0,i.jsxs)(t.p,{children:["Under the application root directory, create the ",(0,i.jsx)(t.code,{children:"config/html/"})," directory, which supports the creation of four types of HTML fragments:"]}),"\n",(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsx)(t.li,{children:(0,i.jsx)(t.code,{children:"top.html"})}),"\n",(0,i.jsx)(t.li,{children:(0,i.jsx)(t.code,{children:"head.html"})}),"\n",(0,i.jsx)(t.li,{children:(0,i.jsx)(t.code,{children:"body.html"})}),"\n",(0,i.jsx)(t.li,{children:(0,i.jsx)(t.code,{children:"bottom.html"})}),"\n"]}),"\n",(0,i.jsx)(t.p,{children:(0,i.jsx)(t.strong,{children:"These fragments will be injected into the default HTML template according to their positions."})}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-xml",children:"<!DOCTYPE html>\n<html>\n  <head>\n    <%= meta %>\n    <title><%= title %></title>\n    <%= topTemplate %>\n    <%= headTemplate %>\n    {/* webpack inject css  */}\n  </head>\n  <body>\n    <noscript>\n      We're sorry but react app doesn't work properly without JavaScript\n      enabled. Please enable it to continue.\n    </noscript>\n    <div id=\"<%= mountId %>\"></div>\n    <%= bodyTemplate %>\n    {/* webpack inject js  */}\n    {/* <?- bottomTemplate ?> */}\n  </body>\n</html>\n"})}),"\n",(0,i.jsxs)(t.p,{children:["HTML fragments support the use of ",(0,i.jsx)(t.a,{href:"https://lodash.com/docs/4.17.15#template",target:"_blank",rel:"noopener noreferrer",children:"Lodash template"}),"."]}),"\n",(0,i.jsxs)(t.p,{children:["For example, to insert an external script in ",(0,i.jsx)(t.code,{children:"body.html"}),":"]}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-html",meta:'title="config/html/body.html"',children:'<script src="//example.com/assets/a.js"></script>\n'})}),"\n",(0,i.jsxs)(t.div,{className:"modern-directive info",children:[(0,i.jsx)(t.div,{className:"modern-directive-title",children:"INFO"}),(0,i.jsxs)(t.div,{className:"modern-directive-content",children:[(0,i.jsxs)(t.p,{children:["The implementation of custom HTML fragments is to merge the fragments with the built-in template. Since the ",(0,i.jsx)(t.code,{children:"<title>"})," already exists in the default template, the title tag in the custom HTML template will not take effect. Please use ",(0,i.jsx)(t.a,{href:"/configure/app/html/title",children:"html.title"})," to modify the page title."]}),"\n"]})]}),"\n",(0,i.jsxs)(t.h3,{id:"custom-the-entire-html-template",children:["Custom the entire HTML Template",(0,i.jsx)(t.a,{className:"header-anchor","aria-hidden":"true",href:"#custom-the-entire-html-template",children:"#"})]}),"\n",(0,i.jsx)(t.p,{children:"In some cases, HTML fragments may be is not better meet the customization requirements. Modern.js provides a fully customized way."}),"\n",(0,i.jsxs)(t.div,{className:"modern-directive caution",children:[(0,i.jsx)(t.div,{className:"modern-directive-title",children:"Note"}),(0,i.jsxs)(t.div,{className:"modern-directive-content",children:[(0,i.jsx)(t.p,{children:"It is generally not recommended to directly override the default HTML template, as some functional options may be lost. If it is truly necessary to customize the entire HTML template, it is recommended to modify based on the built-in template as needed."}),"\n"]})]}),"\n",(0,i.jsxs)(t.p,{children:["Under the ",(0,i.jsx)(t.code,{children:"config/html/"})," directory, create an ",(0,i.jsx)(t.code,{children:"index.html"})," file that will replace the default HTML template."]}),"\n",(0,i.jsxs)(t.div,{className:"modern-directive info",children:[(0,i.jsx)(t.div,{className:"modern-directive-title",children:"INFO"}),(0,i.jsxs)(t.div,{className:"modern-directive-content",children:[(0,i.jsxs)(t.p,{children:["The default HTML template can be viewed in ",(0,i.jsx)(t.code,{children:"node_modules/.modern-js/${entryName}/index.html"}),"."]}),"\n"]})]}),"\n",(0,i.jsxs)(t.h3,{id:"template-parameters-1",children:["Template Parameters",(0,i.jsx)(t.a,{className:"header-anchor","aria-hidden":"true",href:"#template-parameters-1",children:"#"})]}),"\n",(0,i.jsxs)(t.p,{children:["The parameters used in the template can be defined by the ",(0,i.jsx)(t.a,{href:"/configure/app/html/template-parameters",children:"html.templateParameters"})," configuration."]}),"\n",(0,i.jsxs)(t.h3,{id:"config-by-entry",children:["Config By Entry",(0,i.jsx)(t.a,{className:"header-anchor","aria-hidden":"true",href:"#config-by-entry",children:"#"})]}),"\n",(0,i.jsxs)(t.p,{children:["The HTML fragments in the ",(0,i.jsx)(t.code,{children:"config/html/"})," directory take effect for all entries in the application. If you want to customize HTML fragments by entry, you can create a directory named after the ",(0,i.jsx)(t.strong,{children:"entry name"})," under the ",(0,i.jsx)(t.code,{children:"config/html/"})," directory, and then customize the HTML fragments in this directory."]}),"\n",(0,i.jsxs)(t.p,{children:["For example, the following HTML fragments are only effective for the ",(0,i.jsx)(t.code,{children:"entry1"})," entry:"]}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-bash",children:".\n├── config/\n│   └── html/\n│       └── entry1\n│           ├── head.html\n│           └── body.html\n└── src/\n    ├── entry1/\n    │   └── routes\n    └── entry2/\n        └── routes\n"})})]})}(r=globalThis).__RSPRESS_PAGE_META||(r.__RSPRESS_PAGE_META={}),globalThis.__RSPRESS_PAGE_META["%2Fhome%2Frunner%2Fwork%2Fmodern.js%2Fmodern.js%2Fpackages%2Fdocument%2Fmain-doc%2Fdocs%2Fen%2Fguides%2Fbasic-features%2Fhtml.mdx"]={toc:[{text:"JSX Syntax",id:"jsx-syntax",depth:2},{text:"HTML Components",id:"html-components",depth:3},{text:"Template Parameters",id:"template-parameters",depth:3},{text:"Basic Example",id:"basic-example",depth:3},{text:"Scripts Component Example",id:"scripts-component-example",depth:3},{text:"HTML Syntax",id:"html-syntax",depth:2},{text:"Custom HTML Fragments",id:"custom-html-fragments",depth:3},{text:"Custom the entire HTML Template",id:"custom-the-entire-html-template",depth:3},{text:"Template Parameters",id:"template-parameters-1",depth:3},{text:"Config By Entry",id:"config-by-entry",depth:3}],title:"HTML Template",frontmatter:{title:"HTML Template",sidebar_position:9}};var c=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=Object.assign({},(0,a.useMDXComponents)(),e.components).wrapper;return t?(0,i.jsx)(t,o._(s._({},e),{children:(0,i.jsx)(d,s._({},e))})):d(e)}}}]);