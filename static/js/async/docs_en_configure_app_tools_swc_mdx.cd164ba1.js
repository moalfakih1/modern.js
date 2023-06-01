(self.webpackChunk_modern_js_main_doc=self.webpackChunk_modern_js_main_doc||[]).push([["docs_en_configure_app_tools_swc_mdx"],{32278:function(e,n,i){"use strict";Object.defineProperty(n,"__esModule",{value:!0});!function(e,n){for(var i in n)Object.defineProperty(e,i,{enumerable:!0,get:n[i]})}(n,{frontmatter:function(){return o},title:function(){return l},toc:function(){return c},default:function(){return a}});var s=i("9880"),r=i("23169"),t=i.ir(i("1248")),o={sidebar_label:"swc"},l="tools.swc",c=[{text:"Introduction",depth:2,id:"introduction"},{text:"Install",depth:2,id:"install"},{text:"Config",depth:2,id:"config"}];function d(e){var n=Object.assign({h1:"h1",a:"a",ul:"ul",li:"li",strong:"strong",code:"code",h2:"h2",div:"div",p:"p",pre:"pre"},(0,r.useMDXComponents)(),e.components);return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)(n.h1,{id:"toolsswc",children:["tools.swc",(0,s.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#toolsswc",children:"#"})]}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"Type:"})," ",(0,s.jsx)(n.code,{children:"Object"})]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"Default:"})," ",(0,s.jsx)(n.code,{children:"undefined"})]}),"\n"]}),"\n",(0,s.jsxs)(n.h2,{id:"introduction",children:["Introduction",(0,s.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#introduction",children:"#"})]}),"\n","\n",(0,s.jsx)(t.default,{}),"\n",(0,s.jsxs)(n.div,{className:"modern-directive tip",children:[(0,s.jsx)(n.div,{className:"modern-directive-title",children:"TIP"}),(0,s.jsx)(n.div,{className:"modern-directive-content",children:(0,s.jsx)(n.p,{children:"When using Rspack as the bundler, SWC will be used for transpiling and compression by default, so you don't need to install or configure the SWC plugin."})})]}),"\n",(0,s.jsxs)(n.h2,{id:"install",children:["Install",(0,s.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#install",children:"#"})]}),"\n",(0,s.jsxs)(n.p,{children:["First, you need to execute ",(0,s.jsx)(n.code,{children:"pnpm run new"})," to enable the SWC compile:"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"? Please select the operation you want: Enable features\n? Please select the feature name: Enable SWC Compile\n"})}),"\n",(0,s.jsxs)(n.p,{children:["After the installation, please register the SWC plugin in the ",(0,s.jsx)(n.code,{children:"modern.config.ts"})," file, then the SWC compilation and compression will be enabled."]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-ts",meta:'title="modern.config.ts"',children:"import appTools, { defineConfig } from '@modern-js/app-tools';\nimport swcPlugin from '@modern-js/plugin-swc';\n\nexport default defineConfig({\n  plugins: [appTools(), swcPlugin()],\n});\n"})}),"\n",(0,s.jsxs)(n.h2,{id:"config",children:["Config",(0,s.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#config",children:"#"})]}),"\n",(0,s.jsxs)(n.p,{children:["You can set the SWC compilation behavior through the ",(0,s.jsx)(n.code,{children:"tools.swc"})," config."]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-js",meta:'title="modern.config.ts"',children:"import { defineConfig } from '@modern-js/app-tools';\n\nexport default defineConfig({\n  tools: {\n    swc: {\n      jsMinify: {\n        compress: {},\n        mangle: true,\n      },\n    },\n  },\n});\n"})}),"\n",(0,s.jsxs)(n.p,{children:["For config details, please refer to ",(0,s.jsx)(n.a,{href:"https://modernjs.dev/builder/en/plugins/plugin-swc.html#config",target:"_blank",rel:"noopener noreferrer",children:"Modern.js Builder - SWC Plugin Configuration"}),"."]})]})}var a=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=Object.assign({},(0,r.useMDXComponents)(),e.components).wrapper;return n?(0,s.jsx)(n,Object.assign({},e,{children:(0,s.jsx)(d,e)})):d(e)}}}]);