(self.webpackChunk_modern_js_main_doc=self.webpackChunk_modern_js_main_doc||[]).push([["docs_en_configure_app_security_nonce_mdx"],{63410:function(e,n,r){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),Object.defineProperty(n,"default",{enumerable:!0,get:function(){return c}});var i=r("9880"),s=r("23169");function t(e){var n=Object.assign({ul:"ul",li:"li",strong:"strong",pre:"pre",code:"code",p:"p",h4:"h4",a:"a",h3:"h3"},(0,s.useMDXComponents)(),e.components);return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.strong,{children:"Type:"})}),"\n"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-ts",children:"type Nonce = string;\n"})}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"Default:"})," ",(0,i.jsx)(n.code,{children:"undefined"})]}),"\n"]}),"\n",(0,i.jsx)(n.p,{children:"Add a random attribute value --- nonce, to the scripts resources introduced for HTML. This allows the browser to determine whether the script can be executed when it parses inline scripts with matching nonce values."}),"\n",(0,i.jsxs)(n.h4,{id:"introduce-nonce",children:["Introduce nonce",(0,i.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#introduce-nonce",children:"#"})]}),"\n",(0,i.jsxs)(n.p,{children:["The nonce mechanism plays a crucial role in Content Security Policy (CSP), enhancing webpage security. It allows developers to define a unique and random string value, i.e., nonce, for inline ",(0,i.jsx)(n.code,{children:"<script>"})," tags within CSP."]}),"\n",(0,i.jsx)(n.p,{children:"When the browser parses inline scripts with matching nonce values, it allows them to be executed or applied, otherwise CSP will prevent them from running. This effectively prevents potential Cross-Site Scripting (XSS) attacks. It's worth noting that a new nonce value should be generated each time the page is accessed."}),"\n",(0,i.jsxs)(n.p,{children:["For more information about nonce, you can check ",(0,i.jsx)(n.a,{href:"https://developer.mozilla.org/en-US/docs/Web/HTML/Global_attributes/nonce",target:"_blank",rel:"noopener noreferrer",children:"nonce - MDN"}),"。"]}),"\n",(0,i.jsxs)(n.h3,{id:"example",children:["Example",(0,i.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#example",children:"#"})]}),"\n",(0,i.jsxs)(n.p,{children:["By default, ",(0,i.jsx)(n.code,{children:"nonce"})," is not enabled，You can define this value based on your needs:"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-js",children:"export default {\n  security: {\n    nonce: 'my-project-nonce',\n  },\n};\n"})}),"\n",(0,i.jsx)(n.p,{children:"Typically, we can define a fixed value in the project, and replace it with a random value on downstream servers such as Nginx, Web Server, gateway, etc."})]})}var c=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=Object.assign({},(0,s.useMDXComponents)(),e.components).wrapper;return n?(0,i.jsx)(n,Object.assign({},e,{children:(0,i.jsx)(t,e)})):t(e)}},28406:function(e,n,r){"use strict";Object.defineProperty(n,"__esModule",{value:!0});!function(e,n){for(var r in n)Object.defineProperty(e,r,{enumerable:!0,get:n[r]})}(n,{frontmatter:function(){return c},title:function(){return o},toc:function(){return a},default:function(){return l}});var i=r("9880"),s=r("23169"),t=r.ir(r("63410")),c={sidebar_label:"nonce"},o="security.nonce",a=[];function d(e){var n=Object.assign({h1:"h1",a:"a",div:"div",p:"p"},(0,s.useMDXComponents)(),e.components);return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsxs)(n.h1,{id:"securitynonce",children:["security.nonce",(0,i.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#securitynonce",children:"#"})]}),"\n",(0,i.jsxs)(n.div,{className:"modern-directive tip",children:[(0,i.jsx)(n.div,{className:"modern-directive-title",children:"TIP"}),(0,i.jsx)(n.div,{className:"modern-directive-content",children:(0,i.jsxs)(n.p,{children:["This config is provided by Modern.js Builder, more detail can see ",(0,i.jsx)(n.a,{href:"https://modernjs.dev/builder/en/api/config-security.html#securitynonce",target:"_blank",rel:"noopener noreferrer",children:"security.nonce"}),".\n"]})})]}),"\n","\n",(0,i.jsx)(t.default,{})]})}var l=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=Object.assign({},(0,s.useMDXComponents)(),e.components).wrapper;return n?(0,i.jsx)(n,Object.assign({},e,{children:(0,i.jsx)(d,e)})):d(e)}}}]);