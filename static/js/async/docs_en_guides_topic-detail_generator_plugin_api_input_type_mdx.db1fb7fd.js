(self.webpackChunk_modern_js_main_doc=self.webpackChunk_modern_js_main_doc||[]).push([["docs_en_guides_topic-detail_generator_plugin_api_input_type_mdx"],{1561:function(e,n,r){"use strict";Object.defineProperty(n,"__esModule",{value:!0});!function(e,n){for(var r in n)Object.defineProperty(e,r,{enumerable:!0,get:n[r]})}(n,{frontmatter:function(){return s},title:function(){return a},toc:function(){return d},default:function(){return l}});var i=r("9880"),t=r("23169"),s={sidebar_position:1},a="Customize input related type definition",d=[{text:"Input",depth:2,id:"input"},{text:"type",depth:3,id:"type"},{text:"name",depth:3,id:"name"},{text:"title",depth:3,id:"title"},{text:"default",depth:3,id:"default"},{text:"enum",depth:3,id:"enum"},{text:"x-validator",depth:3,id:"x-validator"},{text:"x-reactions",depth:3,id:"x-reactions"},{text:"properties",depth:3,id:"properties"},{text:"Example",depth:2,id:"example"}];function h(e){var n=Object.assign({h1:"h1",a:"a",h2:"h2",p:"p",h3:"h3",code:"code",ul:"ul",li:"li",pre:"pre"},(0,t.useMDXComponents)(),e.components);return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsxs)(n.h1,{id:"customize-input-related-type-definition",children:["Customize input related type definition",(0,i.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#customize-input-related-type-definition",children:"#"})]}),"\n",(0,i.jsxs)(n.h2,{id:"input",children:["Input",(0,i.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#input",children:"#"})]}),"\n",(0,i.jsxs)(n.p,{children:["Modern.js Input input type uses the open source ",(0,i.jsx)(n.a,{href:"https://formilyjs.org/",target:"_blank",rel:"noopener noreferrer",children:"Formily"})," Schema, with support for some of its Schema fields."]}),"\n",(0,i.jsxs)(n.h3,{id:"type",children:["type",(0,i.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#type",children:"#"})]}),"\n",(0,i.jsxs)(n.p,{children:["schema types. Currently, the input supported by the generator plugin is of type ",(0,i.jsx)(n.code,{children:"string"}),", ",(0,i.jsx)(n.code,{children:"number"})," and ",(0,i.jsx)(n.code,{children:"object"}),". Where ",(0,i.jsx)(n.code,{children:"object"})," is used for implementation schema nested, it needs to be used in conjunction with ",(0,i.jsx)(n.code,{children:"properties"}),"."]}),"\n",(0,i.jsxs)(n.h3,{id:"name",children:["name",(0,i.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#name",children:"#"})]}),"\n",(0,i.jsx)(n.p,{children:"schema keyword."}),"\n",(0,i.jsxs)(n.h3,{id:"title",children:["title",(0,i.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#title",children:"#"})]}),"\n",(0,i.jsx)(n.p,{children:"schema display name."}),"\n",(0,i.jsxs)(n.h3,{id:"default",children:["default",(0,i.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#default",children:"#"})]}),"\n",(0,i.jsx)(n.p,{children:"schema default value."}),"\n",(0,i.jsxs)(n.h3,{id:"enum",children:["enum",(0,i.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#enum",children:"#"})]}),"\n",(0,i.jsx)(n.p,{children:"If the schema is selection type, this field is used to define the option content."}),"\n",(0,i.jsx)(n.p,{children:"Each option supports two fields:"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:"value: option value."}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:"label: display name."}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(n.h3,{id:"x-validator",children:["x-validator",(0,i.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#x-validator",children:"#"})]}),"\n",(0,i.jsxs)(n.p,{children:["schema verification rules. Formily's verification method is supported here, for details, please refer to ",(0,i.jsx)(n.a,{href:"https://formilyjs.org/zh-CN/guide/advanced/validate",target:"_blank",rel:"noopener noreferrer",children:"Formily Validate"}),"."]}),"\n",(0,i.jsxs)(n.h3,{id:"x-reactions",children:["x-reactions",(0,i.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#x-reactions",children:"#"})]}),"\n",(0,i.jsxs)(n.p,{children:["schema field linkage. Formily's linkage method is supported here, for details, please refer to ",(0,i.jsx)(n.a,{href:"https://formilyjs.org/zh-CN/guide/advanced/linkages",target:"_blank",rel:"noopener noreferrer",children:"Formily Linkages"}),"."]}),"\n",(0,i.jsxs)(n.h3,{id:"properties",children:["properties",(0,i.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#properties",children:"#"})]}),"\n",(0,i.jsxs)(n.p,{children:["When schema type is ",(0,i.jsx)(n.code,{children:"object"}),", define its subforms."]}),"\n",(0,i.jsxs)(n.h2,{id:"example",children:["Example",(0,i.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#example",children:"#"})]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-ts",children:"const schema = {\n  type: 'object',\n  properties: {\n    language: {\n      type: 'string',\n      title: 'Develop Langauge',\n      enum: [\n        { label: 'TS', value: 'ts' },\n        { label: 'ES6+', value: 'js' },\n      ],\n    },\n  },\n};\n"})})]})}var l=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=Object.assign({},(0,t.useMDXComponents)(),e.components).wrapper;return n?(0,i.jsx)(n,Object.assign({},e,{children:(0,i.jsx)(h,e)})):h(e)}}}]);