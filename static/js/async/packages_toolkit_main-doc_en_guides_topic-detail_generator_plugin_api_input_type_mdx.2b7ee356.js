(self.webpackChunkwebpack=self.webpackChunkwebpack||[]).push([["packages_toolkit_main-doc_en_guides_topic-detail_generator_plugin_api_input_type_mdx"],{16651:function(e,s,n){"use strict";Object.defineProperty(s,"__esModule",{value:!0});!function(e,s){for(var n in s)Object.defineProperty(e,n,{enumerable:!0,get:s[n]})}(s,{frontmatter:function(){return r},toc:function(){return l},title:function(){return t},default:function(){return o}});var i=n("41660");let r={sidebar_position:1},l=[{id:"input",text:"Input",depth:2},{id:"type",text:"type",depth:3},{id:"name",text:"name",depth:3},{id:"title",text:"title",depth:3},{id:"default",text:"default",depth:3},{id:"enum",text:"enum",depth:3},{id:"x-validate",text:"x-validate",depth:3},{id:"x-reactions",text:"x-reactions",depth:3},{id:"properties",text:"properties",depth:3},{id:"example",text:"Example",depth:2}],t="Customize input related type definition";function a(e){let s=Object.assign({h1:"h1",a:"a",h2:"h2",p:"p",h3:"h3",code:"code",ul:"ul",li:"li",div:"div",button:"button",pre:"pre",span:"span"},e.components);return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsxs)(s.h1,{id:"customize-input-related-type-definition",children:[(0,i.jsx)(s.a,{className:"header-anchor","aria-hidden":"true",href:"#customize-input-related-type-definition",children:"#"}),"Customize input related type definition"]}),"\n",(0,i.jsxs)(s.h2,{id:"input",children:[(0,i.jsx)(s.a,{className:"header-anchor","aria-hidden":"true",href:"#input",children:"#"}),"Input"]}),"\n",(0,i.jsxs)(s.p,{children:["Modern.js Input input type uses the open source ",(0,i.jsx)(s.a,{href:"https://formilyjs.org/",target:"_blank",rel:"nofollow",children:"Formily"})," Schema, with support for some of its Schema fields."]}),"\n",(0,i.jsxs)(s.h3,{id:"type",children:[(0,i.jsx)(s.a,{className:"header-anchor","aria-hidden":"true",href:"#type",children:"#"}),"type"]}),"\n",(0,i.jsxs)(s.p,{children:["schema types. Currently, the input supported by the generator plugin is of type ",(0,i.jsx)(s.code,{children:"string"}),", ",(0,i.jsx)(s.code,{children:"number"})," and ",(0,i.jsx)(s.code,{children:"object"}),". Where ",(0,i.jsx)(s.code,{children:"object"})," is used for implementation schema nested, it needs to be used in conjunction with ",(0,i.jsx)(s.code,{children:"properties"}),"."]}),"\n",(0,i.jsxs)(s.h3,{id:"name",children:[(0,i.jsx)(s.a,{className:"header-anchor","aria-hidden":"true",href:"#name",children:"#"}),"name"]}),"\n",(0,i.jsx)(s.p,{children:"schema keyword."}),"\n",(0,i.jsxs)(s.h3,{id:"title",children:[(0,i.jsx)(s.a,{className:"header-anchor","aria-hidden":"true",href:"#title",children:"#"}),"title"]}),"\n",(0,i.jsx)(s.p,{children:"schema display name."}),"\n",(0,i.jsxs)(s.h3,{id:"default",children:[(0,i.jsx)(s.a,{className:"header-anchor","aria-hidden":"true",href:"#default",children:"#"}),"default"]}),"\n",(0,i.jsx)(s.p,{children:"schema default value."}),"\n",(0,i.jsxs)(s.h3,{id:"enum",children:[(0,i.jsx)(s.a,{className:"header-anchor","aria-hidden":"true",href:"#enum",children:"#"}),"enum"]}),"\n",(0,i.jsx)(s.p,{children:"If the schema is selection type, this field is used to define the option content."}),"\n",(0,i.jsx)(s.p,{children:"Each option supports two fields:"}),"\n",(0,i.jsxs)(s.ul,{children:["\n",(0,i.jsxs)(s.li,{children:["\n",(0,i.jsx)(s.p,{children:"value: option value."}),"\n"]}),"\n",(0,i.jsxs)(s.li,{children:["\n",(0,i.jsx)(s.p,{children:"label: display name."}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(s.h3,{id:"x-validate",children:[(0,i.jsx)(s.a,{className:"header-anchor","aria-hidden":"true",href:"#x-validate",children:"#"}),"x-validate"]}),"\n",(0,i.jsxs)(s.p,{children:["schema verification rules. Formily's verification method is supported here, for details, please refer to ",(0,i.jsx)(s.a,{href:"https://formilyjs.org/zh-CN/guide/advanced/validate",target:"_blank",rel:"nofollow",children:"Formily Validate"}),"."]}),"\n",(0,i.jsxs)(s.h3,{id:"x-reactions",children:[(0,i.jsx)(s.a,{className:"header-anchor","aria-hidden":"true",href:"#x-reactions",children:"#"}),"x-reactions"]}),"\n",(0,i.jsxs)(s.p,{children:["schema field linkage. Formily's linkage method is supported here, for details, please refer to ",(0,i.jsx)(s.a,{href:"https://formilyjs.org/zh-CN/guide/advanced/linkages",target:"_blank",rel:"nofollow",children:"Formily Linkages"}),"."]}),"\n",(0,i.jsxs)(s.h3,{id:"properties",children:[(0,i.jsx)(s.a,{className:"header-anchor","aria-hidden":"true",href:"#properties",children:"#"}),"properties"]}),"\n",(0,i.jsxs)(s.p,{children:["When schema type is ",(0,i.jsx)(s.code,{children:"object"}),", define its subforms."]}),"\n",(0,i.jsxs)(s.h2,{id:"example",children:[(0,i.jsx)(s.a,{className:"header-anchor","aria-hidden":"true",href:"#example",children:"#"}),"Example"]}),"\n",(0,i.jsxs)(s.div,{className:"language-ts",children:[(0,i.jsx)(s.div,{className:""}),(0,i.jsxs)(s.div,{className:"modern-code-content",children:[(0,i.jsx)(s.button,{className:"copy"}),(0,i.jsx)(s.pre,{className:"shiki",style:{backgroundColor:"var(--shiki-color-background)"},children:(0,i.jsxs)(s.code,{children:[(0,i.jsxs)(s.span,{className:"line",children:[(0,i.jsx)(s.span,{style:{color:"var(--shiki-token-keyword)"},children:"const"}),(0,i.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,i.jsx)(s.span,{style:{color:"var(--shiki-token-constant)"},children:"schema"}),(0,i.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,i.jsx)(s.span,{style:{color:"var(--shiki-token-keyword)"},children:"="}),(0,i.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" {"})]}),"\n",(0,i.jsxs)(s.span,{className:"line",children:[(0,i.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"  type"}),(0,i.jsx)(s.span,{style:{color:"var(--shiki-token-keyword)"},children:":"}),(0,i.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,i.jsx)(s.span,{style:{color:"var(--shiki-token-string-expression)"},children:"'object'"}),(0,i.jsx)(s.span,{style:{color:"var(--shiki-token-punctuation)"},children:","})]}),"\n",(0,i.jsxs)(s.span,{className:"line",children:[(0,i.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"  properties"}),(0,i.jsx)(s.span,{style:{color:"var(--shiki-token-keyword)"},children:":"}),(0,i.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" {"})]}),"\n",(0,i.jsxs)(s.span,{className:"line",children:[(0,i.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"    language"}),(0,i.jsx)(s.span,{style:{color:"var(--shiki-token-keyword)"},children:":"}),(0,i.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" {"})]}),"\n",(0,i.jsxs)(s.span,{className:"line",children:[(0,i.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"      type"}),(0,i.jsx)(s.span,{style:{color:"var(--shiki-token-keyword)"},children:":"}),(0,i.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,i.jsx)(s.span,{style:{color:"var(--shiki-token-string-expression)"},children:"'string'"}),(0,i.jsx)(s.span,{style:{color:"var(--shiki-token-punctuation)"},children:","})]}),"\n",(0,i.jsxs)(s.span,{className:"line",children:[(0,i.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"      title"}),(0,i.jsx)(s.span,{style:{color:"var(--shiki-token-keyword)"},children:":"}),(0,i.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,i.jsx)(s.span,{style:{color:"var(--shiki-token-string-expression)"},children:"'Develop Langauge'"}),(0,i.jsx)(s.span,{style:{color:"var(--shiki-token-punctuation)"},children:","})]}),"\n",(0,i.jsxs)(s.span,{className:"line",children:[(0,i.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"      enum"}),(0,i.jsx)(s.span,{style:{color:"var(--shiki-token-keyword)"},children:":"}),(0,i.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" ["})]}),"\n",(0,i.jsxs)(s.span,{className:"line",children:[(0,i.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"        { label"}),(0,i.jsx)(s.span,{style:{color:"var(--shiki-token-keyword)"},children:":"}),(0,i.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,i.jsx)(s.span,{style:{color:"var(--shiki-token-string-expression)"},children:"'TS'"}),(0,i.jsx)(s.span,{style:{color:"var(--shiki-token-punctuation)"},children:","}),(0,i.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" value"}),(0,i.jsx)(s.span,{style:{color:"var(--shiki-token-keyword)"},children:":"}),(0,i.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,i.jsx)(s.span,{style:{color:"var(--shiki-token-string-expression)"},children:"'ts'"}),(0,i.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" }"}),(0,i.jsx)(s.span,{style:{color:"var(--shiki-token-punctuation)"},children:","})]}),"\n",(0,i.jsxs)(s.span,{className:"line",children:[(0,i.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"        { label"}),(0,i.jsx)(s.span,{style:{color:"var(--shiki-token-keyword)"},children:":"}),(0,i.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,i.jsx)(s.span,{style:{color:"var(--shiki-token-string-expression)"},children:"'ES6+'"}),(0,i.jsx)(s.span,{style:{color:"var(--shiki-token-punctuation)"},children:","}),(0,i.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" value"}),(0,i.jsx)(s.span,{style:{color:"var(--shiki-token-keyword)"},children:":"}),(0,i.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,i.jsx)(s.span,{style:{color:"var(--shiki-token-string-expression)"},children:"'js'"}),(0,i.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" }"}),(0,i.jsx)(s.span,{style:{color:"var(--shiki-token-punctuation)"},children:","})]}),"\n",(0,i.jsxs)(s.span,{className:"line",children:[(0,i.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"      ]"}),(0,i.jsx)(s.span,{style:{color:"var(--shiki-token-punctuation)"},children:","})]}),"\n",(0,i.jsxs)(s.span,{className:"line",children:[(0,i.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"    }"}),(0,i.jsx)(s.span,{style:{color:"var(--shiki-token-punctuation)"},children:","})]}),"\n",(0,i.jsxs)(s.span,{className:"line",children:[(0,i.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"  }"}),(0,i.jsx)(s.span,{style:{color:"var(--shiki-token-punctuation)"},children:","})]}),"\n",(0,i.jsx)(s.span,{className:"line",children:(0,i.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"};"})}),"\n",(0,i.jsx)(s.span,{className:"line"})]})})]})]})]})}var o=function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},{wrapper:s}=e.components||{};return s?(0,i.jsx)(s,Object.assign({},e,{children:(0,i.jsx)(a,e)})):a(e)}}}]);