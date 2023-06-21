(self.webpackChunk_modern_js_main_doc=self.webpackChunk_modern_js_main_doc||[]).push([["docs_en_guides_topic-detail_model_faq_mdx"],{71467:function(e,n,o){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),Object.defineProperty(n,"default",{enumerable:!0,get:function(){return c}});var i,a=o("15169"),r=o("43932"),t=o("9880"),d=o("23169");function s(e){var n=Object.assign({h1:"h1",a:"a",h2:"h2",p:"p",code:"code",div:"div",pre:"pre",img:"img"},(0,d.useMDXComponents)(),e.components);return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)(n.h1,{id:"faq",children:["FAQ",(0,t.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#faq",children:"#"})]}),"\n",(0,t.jsxs)(n.h2,{id:"browser-compatibility",children:["Browser Compatibility",(0,t.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#browser-compatibility",children:"#"})]}),"\n",(0,t.jsxs)(n.p,{children:["The compiled build artifacts of Reduck use ES6 syntax by default. If you need to support older versions of browsers, please include all packages under the ",(0,t.jsx)(n.code,{children:"@modern-js-reduck"})," namespace in your application's build process."]}),"\n",(0,t.jsxs)(n.div,{className:"modern-directive info",children:[(0,t.jsx)(n.div,{className:"modern-directive-title",children:"Additional Information"}),(0,t.jsx)(n.div,{className:"modern-directive-content",children:(0,t.jsxs)(n.p,{children:["Reduck uses ",(0,t.jsx)(n.a,{href:"https://babeljs.io/docs/en/babel-preset-env",target:"_blank",rel:"noopener noreferrer",children:(0,t.jsx)(n.code,{children:"@babel/preset-env"})})," with ",(0,t.jsx)(n.a,{href:"https://github.com/web-infra-dev/reduck/blob/main/common/config.js#L10~L17",target:"_blank",rel:"noopener noreferrer",children:"specific configurations"}),".\n"]})})]}),"\n",(0,t.jsxs)(n.h2,{id:"accessing-the-main-application-model-from-a-microfrontend-sub-application-model",children:["Accessing the Main Application Model from a Microfrontend Sub-Application Model",(0,t.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#accessing-the-main-application-model-from-a-microfrontend-sub-application-model",children:"#"})]}),"\n",(0,t.jsx)(n.p,{children:"When a microfrontend sub-application model accesses the main application model and the model has not yet been mounted on the main application, it will be automatically mounted on the sub-application."}),"\n",(0,t.jsx)(n.p,{children:"Example:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-ts",children:"import { useModel } from '@modern-js/runtime/model';\nimport parentModel from '@MasterApp/models/todoModel';\n\nfunction SubModelApp() {\n  const [state, actions] = useModel(parentModel);\n\n  return <div>...</div>;\n}\n"})}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.img,{src:"https://lf3-static.bytednsdoc.com/obj/eden-cn/aphqeh7uhohpquloj/modern-js/docs/mf-communicate.svg",alt:"Microfrontend Communication Flowchart"})}),"\n",(0,t.jsx)(n.p,{children:"To avoid accidental downgrades, it is recommended to pre-mount the model that the main application needs to share:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-ts",children:"// App is the entry component of the main application, and sharedModel1 and sharedModel2 are the models that need to be shared.\nApp.models = [sharedModel1, sharedModel2];\n"})})]})}(i=globalThis).__RSPRESS_PAGE_META||(i.__RSPRESS_PAGE_META={}),globalThis.__RSPRESS_PAGE_META["/home/runner/work/modern.js/modern.js/packages/document/main-doc/docs/en/guides/topic-detail/model/faq.mdx"]={toc:[{text:"Browser Compatibility",id:"browser-compatibility",depth:2},{text:"Accessing the Main Application Model from a Microfrontend Sub-Application Model",id:"accessing-the-main-application-model-from-a-microfrontend-sub-application-model",depth:2}],title:"FAQ",frontmatter:{sidebar_position:13,title:"FAQ"}};var c=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=Object.assign({},(0,d.useMDXComponents)(),e.components).wrapper;return n?(0,t.jsx)(n,r._(a._({},e),{children:(0,t.jsx)(s,a._({},e))})):s(e)}}}]);