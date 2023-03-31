(self.webpackChunkwebpack=self.webpackChunkwebpack||[]).push([["docs_en_configure_app_server_ssr_mdx"],{14507:function(e,n,s){"use strict";Object.defineProperty(n,"__esModule",{value:!0});!function(e,n){for(var s in n)Object.defineProperty(e,s,{enumerable:!0,get:n[s]})}(n,{frontmatter:function(){return d},title:function(){return t},toc:function(){return i},default:function(){return l}});var r=s("12151"),c=s("21447");let d={sidebar_label:"ssr"},t="server.ssr",i=[{text:"Boolean Type",depth:3,id:"boolean-type"},{text:"Object Type",depth:3,id:"object-type"}];function o(e){let n=Object.assign({h1:"h1",a:"a",ul:"ul",li:"li",strong:"strong",code:"code",p:"p",h3:"h3",div:"div",button:"button",pre:"pre"},(0,c.useMDXComponents)(),e.components);return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(n.h1,{id:"server.ssr",children:["server.ssr",(0,r.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#server.ssr",children:"#"})]}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"Type:"})," ",(0,r.jsx)(n.code,{children:"boolean"})]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"Default:"})," ",(0,r.jsx)(n.code,{children:"false"})]}),"\n"]}),"\n",(0,r.jsx)(n.p,{children:"Enalbe SSR configuration."}),"\n",(0,r.jsxs)(n.h3,{id:"boolean-type",children:["Boolean Type",(0,r.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#boolean-type",children:"#"})]}),"\n",(0,r.jsxs)(n.p,{children:["When the value type is ",(0,r.jsx)(n.code,{children:"boolean"}),", it indicates whether to enable SSR deployment mode, and ",(0,r.jsx)(n.code,{children:"false"})," is not enabled by default."]}),"\n",(0,r.jsxs)(n.div,{className:"language-",children:[(0,r.jsx)(n.div,{className:"modern-code-title",children:"modern.config.ts"}),(0,r.jsxs)(n.div,{className:"modern-code-content",children:[(0,r.jsx)(n.button,{className:"copy"}),(0,r.jsx)(n.pre,{className:"code",children:(0,r.jsx)(n.code,{className:"language-ts",meta:'title="modern.config.ts"',children:"export default defineConfig({\n  server: {\n    ssr: true,\n  },\n});\n"})})]})]}),"\n",(0,r.jsxs)(n.h3,{id:"object-type",children:["Object Type",(0,r.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#object-type",children:"#"})]}),"\n",(0,r.jsxs)(n.p,{children:["When the value type is ",(0,r.jsx)(n.code,{children:"Object"}),", The following properties can be configured:"]}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"mode"}),": ",(0,r.jsx)(n.code,{children:"string = 'string'"}),", use ",(0,r.jsx)(n.code,{children:"renderToString"})," rendering default. onfigure 'stream' to enable streaming rendering."]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"forceCSR"}),": ",(0,r.jsx)(n.code,{children:"boolean = false"}),", forced CSR rendering is disable by default. When configured as ",(0,r.jsx)(n.code,{children:"true"}),", add ",(0,r.jsx)(n.code,{children:"?csr=true"})," in URL to force CSR."]}),"\n"]}),"\n",(0,r.jsxs)(n.div,{className:"language-",children:[(0,r.jsx)(n.div,{className:"modern-code-title",children:"modern.config.ts"}),(0,r.jsxs)(n.div,{className:"modern-code-content",children:[(0,r.jsx)(n.button,{className:"copy"}),(0,r.jsx)(n.pre,{className:"code",children:(0,r.jsx)(n.code,{className:"language-ts",meta:'title="modern.config.ts"',children:"export default defineConfig({\n  server: {\n    forceCSR: true,\n    mode: 'stream',\n  },\n});\n"})})]})]})]})}var l=function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},{wrapper:n}=Object.assign({},(0,c.useMDXComponents)(),e.components);return n?(0,r.jsx)(n,Object.assign({},e,{children:(0,r.jsx)(o,e)})):o(e)}}}]);