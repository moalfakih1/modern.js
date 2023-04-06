(self.webpackChunkwebpack=self.webpackChunkwebpack||[]).push([["docs_en_guide_quick-start_mdx"],{87060:function(e,n,r){"use strict";Object.defineProperty(n,"__esModule",{value:!0});!function(e,n){for(var r in n)Object.defineProperty(e,r,{enumerable:!0,get:n[r]})}(n,{frontmatter:function(){return o},title:function(){return l},toc:function(){return c},default:function(){return u}});var s=r("12151"),i=r("21447"),a=r.ir(r("56314")),t=r.ir(r("70792")),d=r.ir(r("69571")),o={},l="Quick Start",c=[{text:"Environment preparation",depth:2,id:"environment-preparation"},{text:"Use the Modern.js Framework",depth:2,id:"use-the-modern.js-framework"},{text:"Use Builder in a Front-end Framework",depth:2,id:"use-builder-in-a-front-end-framework"},{text:"1. Install Builder",depth:3,id:"1.-install-builder"},{text:"2. Create Builder Instance",depth:3,id:"2.-create-builder-instance"},{text:"3. Call Builder Instance Method",depth:3,id:"3.-call-builder-instance-method"},{text:"Next Step",depth:2,id:"next-step"}];function h(e){var n=Object.assign({h1:"h1",a:"a",h2:"h2",p:"p",strong:"strong",div:"div",button:"button",pre:"pre",code:"code",h3:"h3",ul:"ul",li:"li",blockquote:"blockquote"},(0,i.useMDXComponents)(),e.components);return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)(n.h1,{id:"quick-start",children:["Quick Start",(0,s.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#quick-start",children:"#"})]}),"\n",(0,s.jsxs)(n.h2,{id:"environment-preparation",children:["Environment preparation",(0,s.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#environment-preparation",children:"#"})]}),"\n","\n",(0,s.jsx)(a.default,{}),"\n",(0,s.jsxs)(n.h2,{id:"use-the-modern.js-framework",children:["Use the Modern.js Framework",(0,s.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#use-the-modern.js-framework",children:"#"})]}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"The Modern.js Framework uses Modern.js Builder as its build engine by default"}),". If you are a business developer, you do not need to manually install Builder, just create a Modern.js project and use all the features provided by Builder."]}),"\n",(0,s.jsx)(n.div,{className:"language-",children:(0,s.jsxs)(n.div,{className:"modern-code-content",children:[(0,s.jsx)(n.button,{className:"copy"}),(0,s.jsx)(n.pre,{className:"code",children:(0,s.jsx)(n.code,{className:"language-bash",children:"npx @modern-js/create my-app\n"})})]})}),"\n",(0,s.jsxs)(n.p,{children:["Please refer to ",(0,s.jsx)(n.a,{href:"https://modernjs.dev/en/guides/get-started/introduction.html",target:"_blank",rel:"noopener noreferrer",children:"Modern.js - Introduction"})," and ",(0,s.jsx)(n.a,{href:"https://modernjs.dev/en/guides/get-started/quick-start.html",target:"_blank",rel:"noopener noreferrer",children:"Modern.js - Quick Start"})," to learn how to use Modern.js framework."]}),"\n",(0,s.jsxs)(n.div,{className:"modern-directive tip",children:[(0,s.jsx)(n.div,{className:"modern-directive-title",children:"About the documentation"}),(0,s.jsx)(n.div,{className:"modern-directive-content",children:"Modern.js framework documentation and Modern.js Builder documentation are deployed under two separate sites. If you encounter any build-related problems while using the Modern.js framework, you can always refer to the documentation of Modern.js Builder to find solutions."})]}),"\n",(0,s.jsxs)(n.h2,{id:"use-builder-in-a-front-end-framework",children:["Use Builder in a Front-end Framework",(0,s.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#use-builder-in-a-front-end-framework",children:"#"})]}),"\n",(0,s.jsx)(n.p,{children:"If you are developing a front-end framework, you can use Builder by following these steps:"}),"\n",(0,s.jsxs)(n.h3,{id:"1.-install-builder",children:["1. Install Builder",(0,s.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#1.-install-builder",children:"#"})]}),"\n",(0,s.jsx)(n.p,{children:"You need to install two packages:"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"@modern-js/builder"})," is the core package of Builder and exports the core API."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"@modern-js/builder-webpack-provider"})," is a provider for Builder, providing webpack-based building capabilities."]}),"\n"]}),"\n",(0,s.jsx)(n.div,{className:"language-",children:(0,s.jsxs)(n.div,{className:"modern-code-content",children:[(0,s.jsx)(n.button,{className:"copy"}),(0,s.jsx)(n.pre,{className:"code",children:(0,s.jsx)(n.code,{className:"language-bash",children:"pnpm add @modern-js/builder @modern-js/builder-webpack-provider -D\n"})})]})}),"\n",(0,s.jsxs)(n.blockquote,{children:["\n",(0,s.jsx)(n.p,{children:"When upgrading the version, please make sure that Builder and Provider you are installing are the same version."}),"\n"]}),"\n",(0,s.jsxs)(n.h3,{id:"2.-create-builder-instance",children:["2. Create Builder Instance",(0,s.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#2.-create-builder-instance",children:"#"})]}),"\n",(0,s.jsx)(n.p,{children:"There are two steps to creating a Builder instance:"}),"\n",(0,s.jsxs)(n.p,{children:["First you need to initialize the Builder Provider and pass in the ",(0,s.jsx)(n.code,{children:"builderConfig"})," config object. Builder provides a lot of configs that allow you to customize the build behavior. At this point, you don't need to know the specific content of the config, just pass in an empty object. You can find all available configs in ",(0,s.jsx)(n.a,{href:"/en/api/#config",children:"API - config"}),"."]}),"\n",(0,s.jsx)(n.div,{className:"language-",children:(0,s.jsxs)(n.div,{className:"modern-code-content",children:[(0,s.jsx)(n.button,{className:"copy"}),(0,s.jsx)(n.pre,{className:"code",children:(0,s.jsx)(n.code,{className:"language-ts",children:"import { createBuilder } from '@modern-js/builder';\nimport { builderWebpackProvider } from '@modern-js/builder-webpack-provider';\n\nconst provider = builderWebpackProvider({\n  builderConfig: {\n    // some configs\n  },\n});\n"})})]})}),"\n",(0,s.jsxs)(n.p,{children:["After getting the provider object, you can call the ",(0,s.jsx)(n.code,{children:"createBuilder"})," method to create a Builder instance object:"]}),"\n",(0,s.jsx)(n.div,{className:"language-",children:(0,s.jsxs)(n.div,{className:"modern-code-content",children:[(0,s.jsx)(n.button,{className:"copy"}),(0,s.jsx)(n.pre,{className:"code",children:(0,s.jsx)(n.code,{className:"language-ts",children:"const builder = await createBuilder(provider, {\n  entry: {\n    index: './src/index.ts',\n  },\n});\n"})})]})}),"\n",(0,s.jsxs)(n.p,{children:["Except the ",(0,s.jsx)(n.code,{children:"entry"})," option, the ",(0,s.jsx)(n.code,{children:"createBuilder"})," method also provides some other options, which you can learn more about in ",(0,s.jsx)(n.a,{href:"/en/api/builder-core",children:"API - createBuilder"}),"."]}),"\n",(0,s.jsxs)(n.h3,{id:"3.-call-builder-instance-method",children:["3. Call Builder Instance Method",(0,s.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#3.-call-builder-instance-method",children:"#"})]}),"\n",(0,s.jsx)(n.p,{children:"The Builder instance provides some methods, which you can use it according to the usage scenarios."}),"\n",(0,s.jsxs)(n.p,{children:["To start local development, it is recommended to use the ",(0,s.jsx)(n.a,{href:"/en/api/builder-instance",children:"builder.startDevServer"})," method, which will start a local Dev Server."]}),"\n",(0,s.jsx)(n.div,{className:"language-",children:(0,s.jsxs)(n.div,{className:"modern-code-content",children:[(0,s.jsx)(n.button,{className:"copy"}),(0,s.jsx)(n.pre,{className:"code",children:(0,s.jsx)(n.code,{className:"language-ts",children:"await builder.startDevServer();\n"})})]})}),"\n",(0,s.jsx)(n.p,{children:"After successfully starting Dev Server, you can see the following logs:"}),"\n",(0,s.jsx)(n.div,{className:"language-",children:(0,s.jsxs)(n.div,{className:"modern-code-content",children:[(0,s.jsx)(n.button,{className:"copy"}),(0,s.jsx)(n.pre,{className:"code",children:(0,s.jsx)(n.code,{className:"language-bash",children:"info    Starting dev server...\ninfo    Dev server running at:\n\n  > Local:    http://localhost:8081\n  > Network:  http://192.168.0.1:8081\n"})})]})}),"\n",(0,s.jsxs)(n.p,{children:["To deploy the App to production environment, it is recommended to use the ",(0,s.jsx)(n.a,{href:"/en/api/builder-instance",children:"builder.build"})," method, which will build the production outputs."]}),"\n",(0,s.jsx)(n.div,{className:"language-",children:(0,s.jsxs)(n.div,{className:"modern-code-content",children:[(0,s.jsx)(n.button,{className:"copy"}),(0,s.jsx)(n.pre,{className:"code",children:(0,s.jsx)(n.code,{className:"language-ts",children:"await builder.build();\n"})})]})}),"\n",(0,s.jsxs)(n.blockquote,{children:["\n",(0,s.jsxs)(n.p,{children:["For more introduction of Builder instance methods, please read the ",(0,s.jsx)(n.a,{href:"/en/api/builder-instance",children:"Builder Instance"})," chapter."]}),"\n"]}),"\n",(0,s.jsx)(n.p,{children:"After completing the above three steps, you have learned the basic usage of Builder. Next, you can customize the build process through the Builder plugin and Builder configs."}),"\n",(0,s.jsxs)(n.h2,{id:"next-step",children:["Next Step",(0,s.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#next-step",children:"#"})]}),"\n",(0,s.jsx)(n.p,{children:"You may want:"}),"\n","\n",(0,s.jsxs)(t.default,{children:[(0,s.jsx)(d.default,{href:"/guide/glossary.html",title:"Glossary",description:"Learn about Builder related concepts"}),(0,s.jsx)(d.default,{href:"/guide/features.html",title:"All Features",description:"Learn all features of Builder"}),(0,s.jsx)(d.default,{href:"/api/index.html",title:"API Reference",description:"View detailed API documentation"})]})]})}var u=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=Object.assign({},(0,i.useMDXComponents)(),e.components).wrapper;return n?(0,s.jsx)(n,Object.assign({},e,{children:(0,s.jsx)(h,e)})):h(e)}}}]);