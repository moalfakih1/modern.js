(self.webpackChunk_modern_js_main_doc=self.webpackChunk_modern_js_main_doc||[]).push([["docs_en_apis_app_runtime_core_bootstrap_mdx"],{824:function(e,n,t){"use strict";Object.defineProperty(n,"__esModule",{value:!0});!function(e,n){for(var t in n)Object.defineProperty(e,t,{enumerable:!0,get:n[t]})}(n,{frontmatter:function(){return a},title:function(){return i},toc:function(){return d},default:function(){return o}});var r=t("9880"),s=t("23169"),a={title:"bootstrap"},i="bootstrap",d=[{text:"Usage",depth:2,id:"usage"},{text:"Function Signature",depth:2,id:"function-signature"},{text:"Input",depth:3,id:"input"},{text:"Example",depth:2,id:"example"}];function c(e){var n=Object.assign({h1:"h1",a:"a",p:"p",h2:"h2",div:"div",pre:"pre",code:"code",h3:"h3",ul:"ul",li:"li"},(0,s.useMDXComponents)(),e.components);return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(n.h1,{id:"bootstrap",children:["bootstrap",(0,r.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#bootstrap",children:"#"})]}),"\n",(0,r.jsxs)(n.p,{children:["Used to start and mount App, usually without manual calls. This API is only required when using ",(0,r.jsx)(n.a,{href:"/guides/concept/entries#custom-bootstrap",children:"Custom Bootstrap"}),"."]}),"\n",(0,r.jsxs)(n.h2,{id:"usage",children:["Usage",(0,r.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#usage",children:"#"})]}),"\n",(0,r.jsx)(n.div,{className:"language-",children:(0,r.jsx)(n.div,{className:"modern-code-content",children:(0,r.jsx)(n.pre,{className:"code",children:(0,r.jsx)(n.code,{className:"language-ts",children:"import ReactDOM from 'react-dom/client';\nimport { bootstrap } from '@modern-js/runtime';\n\nbootstrap(App, 'root', undefined, ReactDOM);\n"})})})}),"\n",(0,r.jsxs)(n.h2,{id:"function-signature",children:["Function Signature",(0,r.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#function-signature",children:"#"})]}),"\n",(0,r.jsx)(n.div,{className:"language-",children:(0,r.jsx)(n.div,{className:"modern-code-content",children:(0,r.jsx)(n.pre,{className:"code",children:(0,r.jsx)(n.code,{className:"language-ts",children:"type BootStrap<T = unknown> = (\n  App: React.ComponentType,\n  id: string | HTMLElement | RuntimeContext,\n  root?: any,\n  ReactDOM?: {\n    render?: Renderer;\n    hydrate?: Renderer;\n    createRoot?: typeof createRoot;\n    hydrateRoot?: typeof hydrateRoot;\n  },\n) => Promise<T>;\n"})})})}),"\n",(0,r.jsxs)(n.h3,{id:"input",children:["Input",(0,r.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#input",children:"#"})]}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"AppComponent"}),": reactElement instance created by ",(0,r.jsx)(n.a,{href:"/en/apis/app/runtime/core/create-app",children:(0,r.jsx)(n.code,{children:"createApp"})}),"."]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"rootId"}),": DOM root element id to mount, like ",(0,r.jsx)(n.code,{children:'"root"'}),"."]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"root"}),": ReactDOM.create the return value, which is used in the scenario where the root needs to destroy the component outside the bootstrap function."]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"ReactDOM"}),": ReactDOM object for distinguishing between React 18 and React 17 APIs."]}),"\n"]}),"\n",(0,r.jsxs)(n.h2,{id:"example",children:["Example",(0,r.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#example",children:"#"})]}),"\n",(0,r.jsx)(n.div,{className:"language-",children:(0,r.jsx)(n.div,{className:"modern-code-content",children:(0,r.jsx)(n.pre,{className:"code",children:(0,r.jsx)(n.code,{className:"language-tsx",children:"import ReactDOM from 'react-dom/client';\nimport { createApp, bootstrap } from '@modern-js/runtime';\n\nfunction App() {\n  return <div>Hello Modern.js</div>;\n}\n\nconst WrappedApp = createApp({\n  // customized plugin\n  plugins: [customPlugin()],\n})(App);\n\nbootstrap(WrappedApp, 'root', undefined, ReactDOM);\n"})})})}),"\n",(0,r.jsxs)(n.div,{className:"modern-directive info",children:[(0,r.jsx)(n.div,{className:"modern-directive-title",children:"INFO"}),(0,r.jsxs)(n.div,{className:"modern-directive-content",children:[(0,r.jsxs)(n.p,{children:["since ",(0,r.jsx)(n.code,{children:"@modern-js/runtime/plugins"})," is a alias, when used in a ts project, its type needs to be declared, Just add the following type declarations to ",(0,r.jsx)(n.code,{children:"src/modern-app-env.d.ts"}),":"]}),"\n",(0,r.jsx)(n.div,{className:"language-",children:(0,r.jsx)(n.div,{className:"modern-code-content",children:(0,r.jsx)(n.pre,{className:"code",children:(0,r.jsx)(n.code,{className:"language-ts",children:"declare module '@modern-js/runtime/plugins';\n"})})})}),"\n"]})]}),"\n",(0,r.jsxs)(n.div,{className:"modern-directive warning",children:[(0,r.jsx)(n.div,{className:"modern-directive-title",children:"WARNING"}),(0,r.jsxs)(n.div,{className:"modern-directive-content",children:[(0,r.jsx)(n.p,{children:"bootstrap only supported for use in CSR."}),"\n"]})]})]})}var o=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=Object.assign({},(0,s.useMDXComponents)(),e.components).wrapper;return n?(0,r.jsx)(n,Object.assign({},e,{children:(0,r.jsx)(c,e)})):c(e)}}}]);