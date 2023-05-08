(self.webpackChunk_modern_js_main_doc=self.webpackChunk_modern_js_main_doc||[]).push([["docs_en_guides_topic-detail_model_faq_mdx"],{29687:function(e,n,o){"use strict";Object.defineProperty(n,"__esModule",{value:!0});!function(e,n){for(var o in n)Object.defineProperty(e,o,{enumerable:!0,get:n[o]})}(n,{frontmatter:function(){return t},title:function(){return s},toc:function(){return r},default:function(){return c}});var i=o("12151"),a=o("23169"),t={sidebar_position:13,title:"FAQ"},s="FAQ",r=[{text:"Browser Compatibility",depth:2,id:"browser-compatibility"},{text:"Accessing the Main Application Model from a Microfrontend Sub-Application Model",depth:2,id:"accessing-the-main-application-model-from-a-microfrontend-sub-application-model"}];function d(e){var n=Object.assign({h1:"h1",a:"a",h2:"h2",p:"p",code:"code",div:"div",button:"button",pre:"pre",img:"img"},(0,a.useMDXComponents)(),e.components);return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsxs)(n.h1,{id:"faq",children:["FAQ",(0,i.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#faq",children:"#"})]}),"\n",(0,i.jsxs)(n.h2,{id:"browser-compatibility",children:["Browser Compatibility",(0,i.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#browser-compatibility",children:"#"})]}),"\n",(0,i.jsxs)(n.p,{children:["The compiled build artifacts of Reduck use ES6 syntax by default. If you need to support older versions of browsers, please include all packages under the ",(0,i.jsx)(n.code,{children:"@modern-js-reduck"})," namespace in your application's build process."]}),"\n",(0,i.jsxs)(n.div,{className:"modern-directive info",children:[(0,i.jsx)(n.div,{className:"modern-directive-title",children:"Additional Information"}),(0,i.jsx)(n.div,{className:"modern-directive-content",children:(0,i.jsxs)(n.p,{children:["Reduck uses ",(0,i.jsx)(n.a,{href:"https://babeljs.io/docs/en/babel-preset-env",target:"_blank",rel:"noopener noreferrer",children:(0,i.jsx)(n.code,{children:"@babel/preset-env"})})," with ",(0,i.jsx)(n.a,{href:"https://github.com/web-infra-dev/reduck/blob/main/common/config.js#L10~L17",target:"_blank",rel:"noopener noreferrer",children:"specific configurations"}),".\n"]})})]}),"\n",(0,i.jsxs)(n.h2,{id:"accessing-the-main-application-model-from-a-microfrontend-sub-application-model",children:["Accessing the Main Application Model from a Microfrontend Sub-Application Model",(0,i.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#accessing-the-main-application-model-from-a-microfrontend-sub-application-model",children:"#"})]}),"\n",(0,i.jsx)(n.p,{children:"When a microfrontend sub-application model accesses the main application model and the model has not yet been mounted on the main application, it will be automatically mounted on the sub-application."}),"\n",(0,i.jsx)(n.p,{children:"Example:"}),"\n",(0,i.jsx)(n.div,{className:"language-",children:(0,i.jsxs)(n.div,{className:"modern-code-content",children:[(0,i.jsx)(n.button,{className:"copy"}),(0,i.jsx)(n.pre,{className:"code",children:(0,i.jsx)(n.code,{className:"language-ts",children:"import { useModel } from '@modern-js/runtime/model';\nimport parentModel from '@MasterApp/models/todoModel';\n\nfunction SubModelApp() {\n  const [state, actions] = useModel(parentModel);\n\n  return <div>...</div>;\n}\n"})})]})}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.img,{src:"https://lf3-static.bytednsdoc.com/obj/eden-cn/aphqeh7uhohpquloj/modern-js/docs/mf-communicate.svg",alt:"Microfrontend Communication Flowchart"})}),"\n",(0,i.jsx)(n.p,{children:"To avoid accidental downgrades, it is recommended to pre-mount the model that the main application needs to share:"}),"\n",(0,i.jsx)(n.div,{className:"language-",children:(0,i.jsxs)(n.div,{className:"modern-code-content",children:[(0,i.jsx)(n.button,{className:"copy"}),(0,i.jsx)(n.pre,{className:"code",children:(0,i.jsx)(n.code,{className:"language-ts",children:"// App is the entry component of the main application, and sharedModel1 and sharedModel2 are the models that need to be shared.\nApp.models = [sharedModel1, sharedModel2];\n"})})]})})]})}var c=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=Object.assign({},(0,a.useMDXComponents)(),e.components).wrapper;return n?(0,i.jsx)(n,Object.assign({},e,{children:(0,i.jsx)(d,e)})):d(e)}}}]);