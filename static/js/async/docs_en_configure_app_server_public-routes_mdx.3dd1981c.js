(self.webpackChunk_modern_js_main_doc=self.webpackChunk_modern_js_main_doc||[]).push([["docs_en_configure_app_server_public-routes_mdx"],{54913:function(e,n,r){"use strict";Object.defineProperty(n,"__esModule",{value:!0});!function(e,n){for(var r in n)Object.defineProperty(e,r,{enumerable:!0,get:n[r]})}(n,{frontmatter:function(){return s},title:function(){return i},toc:function(){return c},default:function(){return l}});var t=r("9880"),o=r("23169"),s={sidebar_label:"publicRoutes"},i="server.publicRoutes",c=[];function u(e){var n=Object.assign({h1:"h1",a:"a",ul:"ul",li:"li",strong:"strong",code:"code",p:"p",pre:"pre"},(0,o.useMDXComponents)(),e.components);return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)(n.h1,{id:"serverpublicroutes",children:["server.publicRoutes",(0,t.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#serverpublicroutes",children:"#"})]}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"Type:"})," ",(0,t.jsx)(n.code,{children:"Object"})]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"Default:"})," Automatic generation of server-level routing rules based on file conventions: One routing rule is generated per file of the application."]}),"\n"]}),"\n",(0,t.jsxs)(n.p,{children:["This configuration option only applies to server-level routing, and you can customize the access route of resources in ",(0,t.jsx)(n.code,{children:"config/public/"}),"."]}),"\n",(0,t.jsxs)(n.p,{children:["The ",(0,t.jsx)(n.code,{children:"key"})," of the object is the relative file path of the current application (not used ",(0,t.jsx)(n.code,{children:"./"}),"), value can be ",(0,t.jsx)(n.code,{children:"string"}),"."]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-ts",meta:'title="modern.config.ts"',children:"export default defineConfig({\n  server: {\n    publicRoutes: {\n      // Set up a long route\n      'index.json': '/user-config/card-info/extra/help.json',\n\n      // Set up a route without a suffix\n      'robot.txt': '/app/authentication',\n    },\n  },\n});\n"})})]})}var l=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=Object.assign({},(0,o.useMDXComponents)(),e.components).wrapper;return n?(0,t.jsx)(n,Object.assign({},e,{children:(0,t.jsx)(u,e)})):u(e)}}}]);