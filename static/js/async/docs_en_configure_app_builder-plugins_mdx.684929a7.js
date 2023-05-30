(self.webpackChunk_modern_js_main_doc=self.webpackChunk_modern_js_main_doc||[]).push([["docs_en_configure_app_builder-plugins_mdx"],{77669:function(e,n,i){"use strict";Object.defineProperty(n,"__esModule",{value:!0});!function(e,n){for(var i in n)Object.defineProperty(e,i,{enumerable:!0,get:n[i]})}(n,{frontmatter:function(){return l},title:function(){return o},toc:function(){return t},default:function(){return d}});var r=i("9880"),s=i("23169"),l={title:"builderPlugins",sidebar_position:10},o="builderPlugins",t=[{text:"Precautions",depth:2,id:"precautions"},{text:"When to use",depth:2,id:"when-to-use"},{text:"Example",depth:2,id:"example"},{text:"Using plugins on npm",depth:3,id:"using-plugins-on-npm"},{text:"Using local plugins",depth:3,id:"using-local-plugins"},{text:"Plugin configuration items",depth:3,id:"plugin-configuration-items"}];function u(e){var n=Object.assign({h1:"h1",a:"a",ul:"ul",li:"li",strong:"strong",code:"code",p:"p",h2:"h2",h3:"h3",pre:"pre"},(0,s.useMDXComponents)(),e.components);return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(n.h1,{id:"builderplugins",children:["builderPlugins",(0,r.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#builderplugins",children:"#"})]}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"Type:"})," ",(0,r.jsx)(n.code,{children:"BuilderPlugin[]"})]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"Default:"})," ",(0,r.jsx)(n.code,{children:"[]"})]}),"\n"]}),"\n",(0,r.jsx)(n.p,{children:"Used to configure the Modern.js Builder plugin."}),"\n",(0,r.jsxs)(n.p,{children:["Modern.js Builder is the build engine of Modern.js, please read ",(0,r.jsx)(n.a,{href:"/guides/concept/builder",children:"Builder"})," for background. If you want to know how to write Builder plugins, you can refer to ",(0,r.jsx)(n.a,{href:"https://modernjs.dev/builder/en/plugins/introduction.html",target:"_blank",rel:"noopener noreferrer",children:"Modern.js Builder - Introduce to Plugin"}),"."]}),"\n",(0,r.jsxs)(n.h2,{id:"precautions",children:["Precautions",(0,r.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#precautions",children:"#"})]}),"\n",(0,r.jsxs)(n.p,{children:["This option ",(0,r.jsx)(n.strong,{children:"is used to configure the Modern.js Builder plugins"}),". If you need to configure other types of plugins, please select the corresponding configs:"]}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["Use ",(0,r.jsx)(n.a,{href:"/configure/app/builder-plugins",children:"plugins"})," to configure Modern.js framework plugins."]}),"\n",(0,r.jsxs)(n.li,{children:["Use ",(0,r.jsx)(n.a,{href:"/configure/app/tools/webpack",children:"tools.webpack"})," or ",(0,r.jsx)(n.a,{href:"/configure/app/tools/webpack-chain",children:"tools.webpackChain"})," to configure webpack plugins."]}),"\n",(0,r.jsxs)(n.li,{children:["Use ",(0,r.jsx)(n.a,{href:"/configure/app/tools/babel",children:"tools.babel"})," to configure babel plugins."]}),"\n"]}),"\n",(0,r.jsxs)(n.h2,{id:"when-to-use",children:["When to use",(0,r.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#when-to-use",children:"#"})]}),"\n",(0,r.jsxs)(n.p,{children:["In most scenarios, we recommend you to use the Modern.js framework plugin, which can be registered through the ",(0,r.jsx)(n.a,{href:"/configure/app/plugins",children:"plugins"})," config. Because the API provided by the framework plugin is richer and more capable, while the API provided by the Builder plugin can only be used to build scenes."]}),"\n",(0,r.jsxs)(n.p,{children:["When you need to reference some existing Builder plugins (and there is no related capability in Modern.js), or reuse Builder plugins between different frameworks, you can use the ",(0,r.jsx)(n.code,{children:"builderPlugins"})," field to register them."]}),"\n",(0,r.jsxs)(n.h2,{id:"example",children:["Example",(0,r.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#example",children:"#"})]}),"\n",(0,r.jsx)(n.p,{children:"Below is an example of using the Builder plugin."}),"\n",(0,r.jsxs)(n.h3,{id:"using-plugins-on-npm",children:["Using plugins on npm",(0,r.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#using-plugins-on-npm",children:"#"})]}),"\n",(0,r.jsx)(n.p,{children:"To use a plugin on npm, you need to install the plugin through the package manager and import it."}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-ts",meta:'title="modern.config.ts"',children:"import myBuilderPlugin from 'my-builder-plugin';\n\nexport default defineConfig({\n  builderPlugins: [myBuilderPlugin()],\n});\n"})}),"\n",(0,r.jsxs)(n.h3,{id:"using-local-plugins",children:["Using local plugins",(0,r.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#using-local-plugins",children:"#"})]}),"\n",(0,r.jsx)(n.p,{children:"Use the plugin in the local code repository, you can import it directly through the relative path import."}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-ts",meta:'title="modern.config.ts"',children:"import myBuilderPlugin from './plugin/myBuilderPlugin';\n\nexport default defineConfig({\n  builderPlugins: [myBuilderPlugin()],\n});\n"})}),"\n",(0,r.jsxs)(n.h3,{id:"plugin-configuration-items",children:["Plugin configuration items",(0,r.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#plugin-configuration-items",children:"#"})]}),"\n",(0,r.jsx)(n.p,{children:"If the plugin provides some custom configuration options, you can pass in the configuration through the parameters of the plugin function."}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-ts",meta:'title="modern.config.ts"',children:"import myBuilderPlugin from 'my-builder-plugin';\n\nexport default defineConfig({\n  builderPlugins: [\n    myBuilderPlugin({\n      foo: 1,\n      bar: 2,\n    }),\n  ],\n});\n"})})]})}var d=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=Object.assign({},(0,s.useMDXComponents)(),e.components).wrapper;return n?(0,r.jsx)(n,Object.assign({},e,{children:(0,r.jsx)(u,e)})):u(e)}}}]);