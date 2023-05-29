(self.webpackChunk_modern_js_main_doc=self.webpackChunk_modern_js_main_doc||[]).push([["docs_en_guides_topic-detail_generator_plugin_api_input_setInput_mdx"],{12738:function(e,n,t){"use strict";Object.defineProperty(n,"__esModule",{value:!0});!function(e,n){for(var t in n)Object.defineProperty(e,t,{enumerable:!0,get:n[t]})}(n,{frontmatter:function(){return d},title:function(){return s},toc:function(){return a},default:function(){return o}});var i=t("9880"),r=t("23169"),d={sidebar_position:4},s="setInput",a=[{text:"key",depth:2,id:"key"},{text:"filed",depth:2,id:"filed"},{text:"value",depth:2,id:"value"},{text:"Example",depth:2,id:"example"}];function l(e){var n=Object.assign({h1:"h1",a:"a",p:"p",pre:"pre",code:"code",h2:"h2",div:"div"},(0,r.useMDXComponents)(),e.components);return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsxs)(n.h1,{id:"setinput",children:["setInput",(0,i.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#setinput",children:"#"})]}),"\n",(0,i.jsx)(n.p,{children:"Set the problem attribute."}),"\n",(0,i.jsx)(n.p,{children:"The method is available directly on the context."}),"\n",(0,i.jsx)(n.p,{children:"Its type is defined as:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-ts",children:"export interface IPluginContext {\n  setInput: (key: string, field: string, value: unknown) => void;\n  ...\n}\n"})}),"\n",(0,i.jsxs)(n.h2,{id:"key",children:["key",(0,i.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#key",children:"#"})]}),"\n",(0,i.jsx)(n.p,{children:"The problem keyword can be the problem keyword of the Modern.js project solution, or the keyword of the new problem in the generator plugin."}),"\n",(0,i.jsxs)(n.h2,{id:"filed",children:["filed",(0,i.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#filed",children:"#"})]}),"\n",(0,i.jsxs)(n.p,{children:["he problem field to be set, you can modify other fields except the key of the current Input, Input specific type definition viewable ",(0,i.jsx)(n.a,{href:"/guides/topic-detail/generator/plugin/api/input/type",children:"Customize input related type definition"}),"."]}),"\n",(0,i.jsxs)(n.h2,{id:"value",children:["value",(0,i.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#value",children:"#"})]}),"\n",(0,i.jsx)(n.p,{children:"The value of the problem field to be setted. value supports function, the function parameter is the current field value, and the return value needs to be the complete new field value."}),"\n",(0,i.jsxs)(n.div,{className:"modern-directive info",children:[(0,i.jsx)(n.div,{className:"modern-directive-title",children:"INFO"}),(0,i.jsxs)(n.div,{className:"modern-directive-content",children:[(0,i.jsx)(n.p,{children:"For the input options provided by the Modern.js project type, only delete is temporarily supported, and increase is not supported. The increase will cause problems in the logical judgment in the code."}),"\n"]})]}),"\n",(0,i.jsxs)(n.h2,{id:"example",children:["Example",(0,i.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#example",children:"#"})]}),"\n",(0,i.jsxs)(n.p,{children:["Modify the display name of ",(0,i.jsx)(n.code,{children:"packageName"}),":"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-ts",children:"context.setInput('packageName', 'title', 'Show title');\n"})})]})}var o=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=Object.assign({},(0,r.useMDXComponents)(),e.components).wrapper;return n?(0,i.jsx)(n,Object.assign({},e,{children:(0,i.jsx)(l,e)})):l(e)}}}]);