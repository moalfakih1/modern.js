(self.webpackChunkwebpack=self.webpackChunkwebpack||[]).push([["docs_en_guides_topic-detail_generator_codesmith_introduce_mdx"],{74318:function(s,e,r){"use strict";Object.defineProperty(e,"__esModule",{value:!0});!function(s,e){for(var r in e)Object.defineProperty(s,r,{enumerable:!0,get:e[r]})}(e,{frontmatter:function(){return n},toc:function(){return i},title:function(){return l},default:function(){return c}});var o=r("12151");let n={sidebar_position:1},i=[{id:"core-concept",text:"Core concept",depth:2},{id:"generatorcore",text:"GeneratorCore",depth:3},{id:"materials",text:"Materials",depth:3}],l="What is a microgenerator";function t(s){let e=Object.assign({h1:"h1",a:"a",p:"p",code:"code",h2:"h2",h3:"h3",div:"div",button:"button",pre:"pre",span:"span"},s.components);return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsxs)(e.h1,{id:"what-is-a-microgenerator",children:[(0,o.jsx)(e.a,{className:"header-anchor","aria-hidden":"true",href:"#what-is-a-microgenerator",children:"#"}),"What is a microgenerator"]}),"\n",(0,o.jsxs)(e.p,{children:["Modern.js provides the ",(0,o.jsx)(e.code,{children:"@modern-js/create"})," tool and the ",(0,o.jsx)(e.code,{children:"new"})," command for initialization to create projects and the ability to enable some plugin functions, respectively, these tools are based on microgenerators, also known as codesmith implementations."]}),"\n",(0,o.jsx)(e.p,{children:"Codesmith is committed to providing a set of micro-generator operating mechanism, and maintain the context information in the execution process of the micro-generator, so as to implement various operations based on files, commands, etc., to complete sophisticated operations."}),"\n",(0,o.jsx)(e.p,{children:"Codesmith also encapsulates the commonly used methods, and can directly use the API functions it provides, which can more easily implement its own micro-generator."}),"\n",(0,o.jsxs)(e.h2,{id:"core-concept",children:[(0,o.jsx)(e.a,{className:"header-anchor","aria-hidden":"true",href:"#core-concept",children:"#"}),"Core concept"]}),"\n",(0,o.jsxs)(e.h3,{id:"generatorcore",children:[(0,o.jsx)(e.a,{className:"header-anchor","aria-hidden":"true",href:"#generatorcore",children:"#"}),"GeneratorCore"]}),"\n",(0,o.jsx)(e.p,{children:"GeneratorCore is the core of codesmith running generator, maintaining the context and running methods during the execution of the generator."}),"\n",(0,o.jsxs)(e.div,{className:"language-ts",children:[(0,o.jsx)(e.div,{className:""}),(0,o.jsxs)(e.div,{className:"modern-code-content",children:[(0,o.jsx)(e.button,{className:"copy"}),(0,o.jsx)(e.pre,{className:"shiki",style:{backgroundColor:"var(--shiki-color-background)"},children:(0,o.jsxs)(e.code,{children:[(0,o.jsxs)(e.span,{className:"line",children:[(0,o.jsx)(e.span,{style:{color:"var(--shiki-token-keyword)"},children:"class"}),(0,o.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,o.jsx)(e.span,{style:{color:"var(--shiki-token-function)"},children:"GeneratorCore"}),(0,o.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" {"})]}),"\n",(0,o.jsxs)(e.span,{className:"line",children:[(0,o.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"  logger"}),(0,o.jsx)(e.span,{style:{color:"var(--shiki-token-keyword)"},children:":"}),(0,o.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,o.jsx)(e.span,{style:{color:"var(--shiki-token-function)"},children:"ILogger"}),(0,o.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:";"})]}),"\n",(0,o.jsxs)(e.span,{className:"line",children:[(0,o.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"  materialsManager"}),(0,o.jsx)(e.span,{style:{color:"var(--shiki-token-keyword)"},children:":"}),(0,o.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,o.jsx)(e.span,{style:{color:"var(--shiki-token-function)"},children:"MaterialsManager"}),(0,o.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:";"})]}),"\n",(0,o.jsxs)(e.span,{className:"line",children:[(0,o.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"  outputPath"}),(0,o.jsx)(e.span,{style:{color:"var(--shiki-token-keyword)"},children:":"}),(0,o.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,o.jsx)(e.span,{style:{color:"var(--shiki-token-constant)"},children:"string"}),(0,o.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:";"})]}),"\n",(0,o.jsxs)(e.span,{className:"line",children:[(0,o.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"  output"}),(0,o.jsx)(e.span,{style:{color:"var(--shiki-token-keyword)"},children:":"})]}),"\n",(0,o.jsxs)(e.span,{className:"line",children:[(0,o.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"    "}),(0,o.jsx)(e.span,{style:{color:"var(--shiki-token-function)"},children:"fs"}),(0,o.jsx)(e.span,{style:{color:"var(--shiki-token-keyword)"},children:":"}),(0,o.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" (file"}),(0,o.jsx)(e.span,{style:{color:"var(--shiki-token-keyword)"},children:":"}),(0,o.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,o.jsx)(e.span,{style:{color:"var(--shiki-token-constant)"},children:"string"}),(0,o.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,o.jsx)(e.span,{style:{color:"var(--shiki-token-keyword)"},children:"|"}),(0,o.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,o.jsx)(e.span,{style:{color:"var(--shiki-token-constant)"},children:"number"}),(0,o.jsx)(e.span,{style:{color:"var(--shiki-token-punctuation)"},children:","}),(0,o.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" data"}),(0,o.jsx)(e.span,{style:{color:"var(--shiki-token-keyword)"},children:":"}),(0,o.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,o.jsx)(e.span,{style:{color:"var(--shiki-token-constant)"},children:"any"}),(0,o.jsx)(e.span,{style:{color:"var(--shiki-token-punctuation)"},children:","}),(0,o.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" options"}),(0,o.jsx)(e.span,{style:{color:"var(--shiki-token-keyword)"},children:"?:"}),(0,o.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,o.jsx)(e.span,{style:{color:"var(--shiki-token-function)"},children:"fs"}),(0,o.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"."}),(0,o.jsx)(e.span,{style:{color:"var(--shiki-token-function)"},children:"WriteFileOptions"}),(0,o.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,o.jsx)(e.span,{style:{color:"var(--shiki-token-keyword)"},children:"|"}),(0,o.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,o.jsx)(e.span,{style:{color:"var(--shiki-token-constant)"},children:"string"}),(0,o.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:") "}),(0,o.jsx)(e.span,{style:{color:"var(--shiki-token-keyword)"},children:"=>"}),(0,o.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,o.jsx)(e.span,{style:{color:"var(--shiki-token-function)"},children:"Promise"}),(0,o.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"<"}),(0,o.jsx)(e.span,{style:{color:"var(--shiki-token-constant)"},children:"void"}),(0,o.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:">;"})]}),"\n",(0,o.jsx)(e.span,{className:"line",children:(0,o.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"  };"})}),"\n",(0,o.jsxs)(e.span,{className:"line",children:[(0,o.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"  _context"}),(0,o.jsx)(e.span,{style:{color:"var(--shiki-token-punctuation)"},children:":"}),(0,o.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" GeneratorContext;"})]}),"\n",(0,o.jsxs)(e.span,{className:"line",children:[(0,o.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"  "}),(0,o.jsx)(e.span,{style:{color:"var(--shiki-token-function)"},children:"addMaterial"}),(0,o.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"(key: string"}),(0,o.jsx)(e.span,{style:{color:"var(--shiki-token-punctuation)"},children:","}),(0,o.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" material: FsMaterial): "}),(0,o.jsx)(e.span,{style:{color:"var(--shiki-token-keyword)"},children:"void"}),(0,o.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:";"})]}),"\n",(0,o.jsxs)(e.span,{className:"line",children:[(0,o.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"  "}),(0,o.jsx)(e.span,{style:{color:"var(--shiki-token-function)"},children:"runGenerator"}),(0,o.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"(generator: string"}),(0,o.jsx)(e.span,{style:{color:"var(--shiki-token-punctuation)"},children:","}),(0,o.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" config"}),(0,o.jsx)(e.span,{style:{color:"var(--shiki-token-keyword)"},children:"?:"}),(0,o.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" Record"}),(0,o.jsx)(e.span,{style:{color:"var(--shiki-token-keyword)"},children:"<"}),(0,o.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"string"}),(0,o.jsx)(e.span,{style:{color:"var(--shiki-token-punctuation)"},children:","}),(0,o.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" unknown"}),(0,o.jsx)(e.span,{style:{color:"var(--shiki-token-keyword)"},children:">"}),(0,o.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"): "}),(0,o.jsx)(e.span,{style:{color:"var(--shiki-token-constant)"},children:"Promise"}),(0,o.jsx)(e.span,{style:{color:"var(--shiki-token-keyword)"},children:"<void>"}),(0,o.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:";"})]}),"\n",(0,o.jsxs)(e.span,{className:"line",children:[(0,o.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"  "}),(0,o.jsx)(e.span,{style:{color:"var(--shiki-token-function)"},children:"runSubGenerator"}),(0,o.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"(subGenerator: string"}),(0,o.jsx)(e.span,{style:{color:"var(--shiki-token-punctuation)"},children:","}),(0,o.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" relativePwdPath"}),(0,o.jsx)(e.span,{style:{color:"var(--shiki-token-keyword)"},children:"?:"}),(0,o.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" string"}),(0,o.jsx)(e.span,{style:{color:"var(--shiki-token-punctuation)"},children:","}),(0,o.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" config"}),(0,o.jsx)(e.span,{style:{color:"var(--shiki-token-keyword)"},children:"?:"}),(0,o.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" Record"}),(0,o.jsx)(e.span,{style:{color:"var(--shiki-token-keyword)"},children:"<"}),(0,o.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"string"}),(0,o.jsx)(e.span,{style:{color:"var(--shiki-token-punctuation)"},children:","}),(0,o.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" any"}),(0,o.jsx)(e.span,{style:{color:"var(--shiki-token-keyword)"},children:">"}),(0,o.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"): "}),(0,o.jsx)(e.span,{style:{color:"var(--shiki-token-constant)"},children:"Promise"}),(0,o.jsx)(e.span,{style:{color:"var(--shiki-token-keyword)"},children:"<void>"}),(0,o.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:";"})]}),"\n",(0,o.jsx)(e.span,{className:"line",children:(0,o.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"}"})}),"\n",(0,o.jsx)(e.span,{className:"line"})]})})]})]}),"\n",(0,o.jsxs)(e.h3,{id:"materials",children:[(0,o.jsx)(e.a,{className:"header-anchor","aria-hidden":"true",href:"#materials",children:"#"}),"Materials"]}),"\n",(0,o.jsx)(e.p,{children:"The micro-generator resource information currently only includes file resources (fsMaterials). Through this field, the template resources in the generator execution process can be obtained and operated through the API."}),"\n",(0,o.jsxs)(e.div,{className:"language-ts",children:[(0,o.jsx)(e.div,{className:""}),(0,o.jsxs)(e.div,{className:"modern-code-content",children:[(0,o.jsx)(e.button,{className:"copy"}),(0,o.jsx)(e.pre,{className:"shiki",style:{backgroundColor:"var(--shiki-color-background)"},children:(0,o.jsxs)(e.code,{children:[(0,o.jsxs)(e.span,{className:"line",children:[(0,o.jsx)(e.span,{style:{color:"var(--shiki-token-keyword)"},children:"class"}),(0,o.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,o.jsx)(e.span,{style:{color:"var(--shiki-token-function)"},children:"MaterialsManager"}),(0,o.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" {"})]}),"\n",(0,o.jsxs)(e.span,{className:"line",children:[(0,o.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"  materialMap"}),(0,o.jsx)(e.span,{style:{color:"var(--shiki-token-keyword)"},children:":"}),(0,o.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" {"})]}),"\n",(0,o.jsxs)(e.span,{className:"line",children:[(0,o.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"    "}),(0,o.jsx)(e.span,{style:{color:"var(--shiki-token-comment)"},children:"// 资源映射关系"})]}),"\n",(0,o.jsxs)(e.span,{className:"line",children:[(0,o.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"    [materialUri"}),(0,o.jsx)(e.span,{style:{color:"var(--shiki-token-keyword)"},children:":"}),(0,o.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,o.jsx)(e.span,{style:{color:"var(--shiki-token-constant)"},children:"string"}),(0,o.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"]"}),(0,o.jsx)(e.span,{style:{color:"var(--shiki-token-keyword)"},children:":"}),(0,o.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,o.jsx)(e.span,{style:{color:"var(--shiki-token-function)"},children:"FsMaterial"}),(0,o.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:";"})]}),"\n",(0,o.jsx)(e.span,{className:"line",children:(0,o.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"  };"})}),"\n",(0,o.jsxs)(e.span,{className:"line",children:[(0,o.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"  "}),(0,o.jsx)(e.span,{style:{color:"var(--shiki-token-function)"},children:"loadLocalGenerator"}),(0,o.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"(generator"}),(0,o.jsx)(e.span,{style:{color:"var(--shiki-token-keyword)"},children:":"}),(0,o.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,o.jsx)(e.span,{style:{color:"var(--shiki-token-constant)"},children:"string"}),(0,o.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:")"}),(0,o.jsx)(e.span,{style:{color:"var(--shiki-token-keyword)"},children:":"}),(0,o.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,o.jsx)(e.span,{style:{color:"var(--shiki-token-function)"},children:"Promise"}),(0,o.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"<"}),(0,o.jsx)(e.span,{style:{color:"var(--shiki-token-function)"},children:"FsMaterial"}),(0,o.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:">;"})]}),"\n",(0,o.jsxs)(e.span,{className:"line",children:[(0,o.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"  "}),(0,o.jsx)(e.span,{style:{color:"var(--shiki-token-function)"},children:"loadRemoteGenerator"}),(0,o.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"(generator"}),(0,o.jsx)(e.span,{style:{color:"var(--shiki-token-keyword)"},children:":"}),(0,o.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,o.jsx)(e.span,{style:{color:"var(--shiki-token-constant)"},children:"string"}),(0,o.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:")"}),(0,o.jsx)(e.span,{style:{color:"var(--shiki-token-keyword)"},children:":"}),(0,o.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,o.jsx)(e.span,{style:{color:"var(--shiki-token-function)"},children:"Promise"}),(0,o.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"<"}),(0,o.jsx)(e.span,{style:{color:"var(--shiki-token-function)"},children:"FsMaterial"}),(0,o.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:">;"})]}),"\n",(0,o.jsx)(e.span,{className:"line",children:(0,o.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"}"})}),"\n",(0,o.jsx)(e.span,{className:"line"})]})})]})]})]})}var c=function(){let s=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},{wrapper:e}=s.components||{};return e?(0,o.jsx)(e,Object.assign({},s,{children:(0,o.jsx)(t,s)})):t(s)}}}]);