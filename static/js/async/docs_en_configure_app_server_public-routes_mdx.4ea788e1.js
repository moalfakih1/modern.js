(self.webpackChunk_modern_js_main_doc=self.webpackChunk_modern_js_main_doc||[]).push([["docs_en_configure_app_server_public-routes_mdx"],{28034:function(e,n,r){"use strict";Object.defineProperty(n,"__esModule",{value:!0});!function(e,n){for(var r in n)Object.defineProperty(e,r,{enumerable:!0,get:n[r]})}(n,{frontmatter:function(){return i},title:function(){return o},toc:function(){return c},default:function(){return a}});var s=r("9880"),t=r("23169"),i={sidebar_label:"publicRoutes"},o="server.publicRoutes",c=[];function l(e){var n=Object.assign({h1:"h1",a:"a",ul:"ul",li:"li",strong:"strong",code:"code",p:"p",div:"div",pre:"pre"},(0,t.useMDXComponents)(),e.components);return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)(n.h1,{id:"serverpublicroutes",children:["server.publicRoutes",(0,s.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#serverpublicroutes",children:"#"})]}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"Type:"})," ",(0,s.jsx)(n.code,{children:"Object"})]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"Default:"})," Automatic generation of server-level routing rules based on file conventions: One routing rule is generated per file of the application."]}),"\n"]}),"\n",(0,s.jsxs)(n.p,{children:["This configuration option only applies to server-level routing, and you can customize the access route of resources in ",(0,s.jsx)(n.code,{children:"config/public/"}),"."]}),"\n",(0,s.jsxs)(n.p,{children:["The ",(0,s.jsx)(n.code,{children:"key"})," of the object is the relative file path of the current application (not used ",(0,s.jsx)(n.code,{children:"./"}),"), value can be ",(0,s.jsx)(n.code,{children:"string"}),"."]}),"\n",(0,s.jsxs)(n.div,{className:"language-",children:[(0,s.jsx)(n.div,{className:"modern-code-title",children:"modern.config.ts"}),(0,s.jsx)(n.div,{className:"modern-code-content",children:(0,s.jsx)(n.pre,{className:"code",children:(0,s.jsx)(n.code,{className:"language-ts",meta:'title="modern.config.ts"',children:"export default defineConfig({\n  server: {\n    publicRoutes: {\n      // Set up a long route\n      'index.json': '/user-config/card-info/extra/help.json',\n\n      // Set up a route without a suffix\n      'robot.txt': '/app/authentication',\n    },\n  },\n});\n"})})})]})]})}var a=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=Object.assign({},(0,t.useMDXComponents)(),e.components).wrapper;return n?(0,s.jsx)(n,Object.assign({},e,{children:(0,s.jsx)(l,e)})):l(e)}}}]);