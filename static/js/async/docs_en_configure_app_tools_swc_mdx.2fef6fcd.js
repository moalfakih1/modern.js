(self.webpackChunk_modern_js_main_doc=self.webpackChunk_modern_js_main_doc||[]).push([["docs_en_configure_app_tools_swc_mdx"],{7906:function(e,n,s){"use strict";Object.defineProperty(n,"__esModule",{value:!0});!function(e,n){for(var s in n)Object.defineProperty(e,s,{enumerable:!0,get:n[s]})}(n,{frontmatter:function(){return t},title:function(){return c},toc:function(){return d},default:function(){return a}});var i=s("9880"),r=s("23169"),o=s.ir(s("45928")),t={sidebar_label:"swc"},c="tools.swc",d=[{text:"Introduction",depth:2,id:"introduction"},{text:"Install",depth:2,id:"install"},{text:"Config",depth:2,id:"config"}];function l(e){var n=Object.assign({h1:"h1",a:"a",ul:"ul",li:"li",strong:"strong",code:"code",h2:"h2",div:"div",p:"p",pre:"pre"},(0,r.useMDXComponents)(),e.components);return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsxs)(n.h1,{id:"toolsswc",children:["tools.swc",(0,i.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#toolsswc",children:"#"})]}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"Type:"})," ",(0,i.jsx)(n.code,{children:"Object"})]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"Default:"})," ",(0,i.jsx)(n.code,{children:"undefined"})]}),"\n"]}),"\n",(0,i.jsxs)(n.h2,{id:"introduction",children:["Introduction",(0,i.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#introduction",children:"#"})]}),"\n","\n",(0,i.jsx)(o.default,{}),"\n",(0,i.jsxs)(n.div,{className:"modern-directive tip",children:[(0,i.jsx)(n.div,{className:"modern-directive-title",children:"TIP"}),(0,i.jsx)(n.div,{className:"modern-directive-content",children:(0,i.jsx)(n.p,{children:"When using Rspack as the bundler, SWC will be used for transpiling and compression by default, so you don't need to install or configure the SWC plugin."})})]}),"\n",(0,i.jsxs)(n.h2,{id:"install",children:["Install",(0,i.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#install",children:"#"})]}),"\n",(0,i.jsxs)(n.p,{children:["First, you need to execute ",(0,i.jsx)(n.code,{children:"pnpm run new"})," to enable the SWC compile:"]}),"\n",(0,i.jsx)(n.div,{className:"language-",children:(0,i.jsx)(n.div,{className:"modern-code-content",children:(0,i.jsx)(n.pre,{className:"code",children:(0,i.jsx)(n.code,{className:"language-bash",children:"? Action: Enable features\n? Enable features: Enable SWC Compile\n"})})})}),"\n",(0,i.jsxs)(n.p,{children:["After the installation, please register the SWC plugin in the ",(0,i.jsx)(n.code,{children:"modern.config.ts"})," file, then the SWC compilation and compression will be enabled."]}),"\n",(0,i.jsxs)(n.div,{className:"language-",children:[(0,i.jsx)(n.div,{className:"modern-code-title",children:"modern.config.ts"}),(0,i.jsx)(n.div,{className:"modern-code-content",children:(0,i.jsx)(n.pre,{className:"code",children:(0,i.jsx)(n.code,{className:"language-ts",meta:'title="modern.config.ts"',children:"import appTools, { defineConfig } from '@modern-js/app-tools';\nimport swcPlugin from '@modern-js/plugin-swc';\n\nexport default defineConfig({\n  plugins: [appTools(), swcPlugin()],\n});\n"})})})]}),"\n",(0,i.jsxs)(n.h2,{id:"config",children:["Config",(0,i.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#config",children:"#"})]}),"\n",(0,i.jsxs)(n.p,{children:["You can set the SWC compilation behavior through the ",(0,i.jsx)(n.code,{children:"tools.swc"})," config."]}),"\n",(0,i.jsxs)(n.div,{className:"language-",children:[(0,i.jsx)(n.div,{className:"modern-code-title",children:"modern.config.ts"}),(0,i.jsx)(n.div,{className:"modern-code-content",children:(0,i.jsx)(n.pre,{className:"code",children:(0,i.jsx)(n.code,{className:"language-js",meta:'title="modern.config.ts"',children:"import { defineConfig } from '@modern-js/app-tools';\n\nexport default defineConfig({\n  tools: {\n    swc: {\n      jsMinify: {\n        compress: {},\n        mangle: true,\n      },\n    },\n  },\n});\n"})})})]}),"\n",(0,i.jsxs)(n.p,{children:["For config details, please refer to ",(0,i.jsx)(n.a,{href:"https://modernjs.dev/builder/en/plugins/plugin-swc.html#config",target:"_blank",rel:"noopener noreferrer",children:"Modern.js Builder - SWC Plugin Configuration"}),"."]})]})}var a=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=Object.assign({},(0,r.useMDXComponents)(),e.components).wrapper;return n?(0,i.jsx)(n,Object.assign({},e,{children:(0,i.jsx)(l,e)})):l(e)}}}]);