(self.webpackChunk_modern_js_builder_doc=self.webpackChunk_modern_js_builder_doc||[]).push([["split~docs_en_api_config-tools_mdx"],{74626:function(e,n,t){"use strict";Object.defineProperty(n,"__esModule",{value:!0});!function(e,n){for(var t in n)Object.defineProperty(e,t,{enumerable:!0,get:n[t]})}(n,{frontmatter:function(){return r},title:function(){return o},toc:function(){return i},default:function(){return a}});var c=t("12151"),s=t("23169"),r={},o="",i=[{text:"Object Type",depth:3,id:"object-type"},{text:"Function Type",depth:3,id:"function-type"}];function d(e){var n=Object.assign({ul:"ul",li:"li",strong:"strong",code:"code",p:"p",a:"a",h3:"h3",div:"div",button:"button",pre:"pre"},(0,s.useMDXComponents)(),e.components);return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsxs)(n.ul,{children:["\n",(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:"Type:"})," ",(0,c.jsx)(n.code,{children:"Object | Function | undefined"})]}),"\n",(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:"Default:"})," ",(0,c.jsx)(n.code,{children:"undefined"})]}),"\n",(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:"Bundler:"})," ",(0,c.jsx)(n.code,{children:"only support webpack"})]}),"\n"]}),"\n",(0,c.jsxs)(n.p,{children:["You can enable or configure the ",(0,c.jsx)(n.a,{href:"https://github.com/web-infra-dev/webpack-inspector",target:"_blank",rel:"noopener noreferrer",children:"webpack inspector"})," through ",(0,c.jsx)(n.code,{children:"tools.inspector"}),"."]}),"\n",(0,c.jsxs)(n.p,{children:["When the configuration is not ",(0,c.jsx)(n.code,{children:"undefined"}),", it means that ",(0,c.jsx)(n.code,{children:"webpack-inspector"})," is enabled, and the type of ",(0,c.jsx)(n.code,{children:"tools.inspector"})," can be ",(0,c.jsx)(n.code,{children:"Object"})," or ",(0,c.jsx)(n.code,{children:"Function"}),"."]}),"\n",(0,c.jsxs)(n.h3,{id:"object-type",children:["Object Type",(0,c.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#object-type",children:"#"})]}),"\n",(0,c.jsxs)(n.p,{children:["When ",(0,c.jsx)(n.code,{children:"tools.inspector"})," is configured with type ",(0,c.jsx)(n.code,{children:"Object"}),", it is merged with the default configuration via Object.assign. For example:"]}),"\n",(0,c.jsx)(n.div,{className:"language-",children:(0,c.jsxs)(n.div,{className:"modern-code-content",children:[(0,c.jsx)(n.button,{className:"copy"}),(0,c.jsx)(n.pre,{className:"code",children:(0,c.jsx)(n.code,{className:"language-js",children:"export default {\n  tools: {\n    inspector: {\n      // The default port is 3333\n      port: 3334,\n    },\n  },\n};\n"})})]})}),"\n",(0,c.jsxs)(n.h3,{id:"function-type",children:["Function Type",(0,c.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#function-type",children:"#"})]}),"\n",(0,c.jsxs)(n.p,{children:["When ",(0,c.jsx)(n.code,{children:"tools.inspector"})," is a Function, the default configuration is passed as the first parameter and can be directly modified or returned as the final result. For example:"]}),"\n",(0,c.jsx)(n.div,{className:"language-",children:(0,c.jsxs)(n.div,{className:"modern-code-content",children:[(0,c.jsx)(n.button,{className:"copy"}),(0,c.jsx)(n.pre,{className:"code",children:(0,c.jsx)(n.code,{className:"language-js",children:"export default {\n  tools: {\n    inspector(config) {\n      config.port = 3334;\n    },\n  },\n};\n"})})]})})]})}var a=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=Object.assign({},(0,s.useMDXComponents)(),e.components).wrapper;return n?(0,c.jsx)(n,Object.assign({},e,{children:(0,c.jsx)(d,e)})):d(e)}}}]);