(self.webpackChunk_modern_js_builder_doc=self.webpackChunk_modern_js_builder_doc||[]).push([["split~docs_en_api_config-tools_mdx17"],{88137:function(e,n,t){"use strict";Object.defineProperty(n,"__esModule",{value:!0});!function(e,n){for(var t in n)Object.defineProperty(e,t,{enumerable:!0,get:n[t]})}(n,{frontmatter:function(){return c},title:function(){return o},toc:function(){return i},default:function(){return d}});var s=t("12151"),r=t("23169"),c={},o="",i=[{text:"Object Type",depth:3,id:"object-type"},{text:"Function Type",depth:3,id:"function-type"}];function a(e){var n=Object.assign({ul:"ul",li:"li",strong:"strong",code:"code",p:"p",a:"a",h3:"h3",div:"div",button:"button",pre:"pre"},(0,r.useMDXComponents)(),e.components);return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"Type:"})," ",(0,s.jsx)(n.code,{children:"Object | Function"})]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"Default:"})," ",(0,s.jsx)(n.code,{children:"{}"})]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"Bundler:"})," ",(0,s.jsx)(n.code,{children:"only support webpack"})]}),"\n"]}),"\n",(0,s.jsxs)(n.p,{children:["The config of ",(0,s.jsx)(n.a,{href:"https://github.com/webpack-contrib/style-loader",target:"_blank",rel:"noopener noreferrer",children:"style-loader"})," can be set through ",(0,s.jsx)(n.code,{children:"tools.styleLoader"}),"."]}),"\n",(0,s.jsxs)(n.p,{children:["It is worth noting that Builder does not enable ",(0,s.jsx)(n.code,{children:"style-loader"})," by default. You can use ",(0,s.jsx)(n.code,{children:"output.disableCssExtract"})," config to enable it."]}),"\n",(0,s.jsxs)(n.h3,{id:"object-type",children:["Object Type",(0,s.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#object-type",children:"#"})]}),"\n",(0,s.jsx)(n.p,{children:"When this value is an Object, it is merged with the default config via Object.assign. For example:"}),"\n",(0,s.jsx)(n.div,{className:"language-",children:(0,s.jsxs)(n.div,{className:"modern-code-content",children:[(0,s.jsx)(n.button,{className:"copy"}),(0,s.jsx)(n.pre,{className:"code",children:(0,s.jsx)(n.code,{className:"language-js",children:"export default {\n  tools: {\n    styleLoader: {\n      loaderOptions: {\n        insert: 'head',\n      },\n    },\n  },\n};\n"})})]})}),"\n",(0,s.jsxs)(n.h3,{id:"function-type",children:["Function Type",(0,s.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#function-type",children:"#"})]}),"\n",(0,s.jsx)(n.p,{children:"When the value is a Function, the default config is passed in as the first parameter. You can modify the config object directly, or return an object as the final config. For example:"}),"\n",(0,s.jsx)(n.div,{className:"language-",children:(0,s.jsxs)(n.div,{className:"modern-code-content",children:[(0,s.jsx)(n.button,{className:"copy"}),(0,s.jsx)(n.pre,{className:"code",children:(0,s.jsx)(n.code,{className:"language-js",children:"export default {\n  tools: {\n    styleLoader: config => {\n      config.loaderOptions.insert = 'head';\n      return config;\n    },\n  },\n};\n"})})]})})]})}var d=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=Object.assign({},(0,r.useMDXComponents)(),e.components).wrapper;return n?(0,s.jsx)(n,Object.assign({},e,{children:(0,s.jsx)(a,e)})):a(e)}}}]);