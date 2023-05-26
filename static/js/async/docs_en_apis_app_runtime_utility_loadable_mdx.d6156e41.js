(self.webpackChunk_modern_js_main_doc=self.webpackChunk_modern_js_main_doc||[]).push([["docs_en_apis_app_runtime_utility_loadable_mdx"],{4071:function(e,n,o){"use strict";Object.defineProperty(n,"__esModule",{value:!0});!function(e,n){for(var o in n)Object.defineProperty(e,o,{enumerable:!0,get:n[o]})}(n,{frontmatter:function(){return r},title:function(){return s},toc:function(){return d},default:function(){return i}});var a=o("9880"),t=o("23169"),r={title:"loadable"},s="loadable",d=[{text:"Usage",depth:2,id:"usage"},{text:"Function Signature",depth:2,id:"function-signature"},{text:"Input",depth:3,id:"input"},{text:"loadFn",depth:4,id:"loadfn"},{text:"options.resolveComponent",depth:4,id:"optionsresolvecomponent"},{text:"options.fallback",depth:4,id:"optionsfallback"},{text:"options.ssr",depth:4,id:"optionsssr"},{text:"Return Value",depth:3,id:"return-value"},{text:"LoadableComponent",depth:4,id:"loadablecomponent"}];function l(e){var n=Object.assign({h1:"h1",a:"a",p:"p",h2:"h2",pre:"pre",code:"code",h3:"h3",h4:"h4"},(0,t.useMDXComponents)(),e.components);return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsxs)(n.h1,{id:"loadable",children:["loadable",(0,a.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#loadable",children:"#"})]}),"\n",(0,a.jsx)(n.p,{children:"Used to create Loadable component"}),"\n",(0,a.jsxs)(n.h2,{id:"usage",children:["Usage",(0,a.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#usage",children:"#"})]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-ts",children:"import loadable from '@modern-js/runtime/loadable';\n"})}),"\n",(0,a.jsxs)(n.h2,{id:"function-signature",children:["Function Signature",(0,a.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#function-signature",children:"#"})]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-ts",children:"type Options = {\n  resolveComponent?: (\n    module: Module,\n    props: Props,\n  ) => React.ComponentType<Props>,\n  fallback?: JSX.Element;\n  ssr?: boolean;\n}\n\nfunction loadable(loadFn: Function, options?: Options) => LoadableComponent\n"})}),"\n",(0,a.jsxs)(n.h3,{id:"input",children:["Input",(0,a.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#input",children:"#"})]}),"\n",(0,a.jsxs)(n.h4,{id:"loadfn",children:["loadFn",(0,a.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#loadfn",children:"#"})]}),"\n",(0,a.jsx)(n.p,{children:"Used to load component."}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-ts",children:"import loadable from '@modern-js/runtime/loadable';\n\nconst OtherComponent = loadable(() => import('./OtherComponent'));\n"})}),"\n",(0,a.jsxs)(n.h4,{id:"optionsresolvecomponent",children:["options.resolveComponent",(0,a.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#optionsresolvecomponent",children:"#"})]}),"\n",(0,a.jsxs)(n.p,{children:["Type: ",(0,a.jsx)(n.code,{children:"(module: Module, props: Props) => React.ComponentType<Props>"})]}),"\n",(0,a.jsxs)(n.p,{children:[(0,a.jsx)(n.code,{children:"module"})," is the component returned by ",(0,a.jsx)(n.code,{children:"loadFn"}),", and ",(0,a.jsx)(n.code,{children:"props"})," is the props parameter accepted by the component."]}),"\n",(0,a.jsxs)(n.p,{children:["By default, we think that the default export of file is a react component, so we can render the component directly. But when the component is named export, or we need to dynamically determine which component needs to be rendered according to the ",(0,a.jsx)(n.code,{children:"props"}),", we can use ",(0,a.jsx)(n.code,{children:"resolveComponent"}),". Here is an example:"]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-ts",meta:"title='component.js'",children:"export const Apple = () => 'Apple!';\nexport const Orange = () => 'Orange!';\n"})}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-ts",meta:"title='loadable.js'",children:"const LoadableApple = loadable(() => import('./components'), {\n  resolveComponent: components => components.Apple,\n});\nconst LoadableOrange = loadable(() => import('./components'), {\n  resolveComponent: components => components.Orange,\n});\nconst LoadableFruit = loadable(() => import('./components'), {\n  resolveComponent: (components, props) => components[props.fruit],\n});\n"})}),"\n",(0,a.jsxs)(n.h4,{id:"optionsfallback",children:["options.fallback",(0,a.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#optionsfallback",children:"#"})]}),"\n",(0,a.jsx)(n.p,{children:"Whether to display fallback content during loading."}),"\n",(0,a.jsxs)(n.h4,{id:"optionsssr",children:["options.ssr",(0,a.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#optionsssr",children:"#"})]}),"\n",(0,a.jsxs)(n.p,{children:["Whether to support SSR, the default value is ",(0,a.jsx)(n.code,{children:"true"}),"."]}),"\n",(0,a.jsxs)(n.h3,{id:"return-value",children:["Return Value",(0,a.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#return-value",children:"#"})]}),"\n",(0,a.jsxs)(n.h4,{id:"loadablecomponent",children:["LoadableComponent",(0,a.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#loadablecomponent",children:"#"})]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-ts",children:"type LoadableComponent<Props> = React.ComponentType<\n  Props & { fallback?: JSX.Element }\n> & {\n  preload(props?: Props): void;\n  load(props?: Props): Promise<React.ComponentType<Props>>;\n};\n"})})]})}var i=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=Object.assign({},(0,t.useMDXComponents)(),e.components).wrapper;return n?(0,a.jsx)(n,Object.assign({},e,{children:(0,a.jsx)(l,e)})):l(e)}}}]);