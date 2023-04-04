(self.webpackChunkwebpack=self.webpackChunkwebpack||[]).push([["split~docs_en_api_config-html_mdx11"],{7490:function(e,n,s){"use strict";Object.defineProperty(n,"__esModule",{value:!0});!function(e,n){for(var s in n)Object.defineProperty(e,s,{enumerable:!0,get:n[s]})}(n,{frontmatter:function(){return c},title:function(){return r},toc:function(){return l},default:function(){return o}});var i=s("12151"),t=s("21447");let c={},r="",l=[{text:"Example",depth:3,id:"example"}];function d(e){let n=Object.assign({ul:"ul",li:"li",strong:"strong",code:"code",p:"p",h3:"h3",a:"a",div:"div",button:"button",pre:"pre"},(0,t.useMDXComponents)(),e.components);return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"Type:"})," ",(0,i.jsx)(n.code,{children:"Record<string, boolean | string>"})]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"Default:"})," ",(0,i.jsx)(n.code,{children:"undefined"})]}),"\n"]}),"\n",(0,i.jsx)(n.p,{children:"Set different script tag inject positions for different pages."}),"\n",(0,i.jsxs)(n.p,{children:["The usage is same as ",(0,i.jsx)(n.code,{children:"inject"}),', and you can use the "entry name" as the key to set each page individually.']}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.code,{children:"injectByEntries"})," will overrides the value set in ",(0,i.jsx)(n.code,{children:"inject"}),"."]}),"\n",(0,i.jsxs)(n.h3,{id:"example",children:["Example",(0,i.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#example",children:"#"})]}),"\n",(0,i.jsx)(n.div,{className:"language-",children:(0,i.jsxs)(n.div,{className:"modern-code-content",children:[(0,i.jsx)(n.button,{className:"copy"}),(0,i.jsx)(n.pre,{className:"code",children:(0,i.jsx)(n.code,{className:"language-js",children:"export default {\n  html: {\n    inject: 'head',\n    injectByEntries: {\n      foo: 'body',\n    },\n  },\n};\n"})})]})}),"\n",(0,i.jsx)(n.p,{children:"After recompiling, you will see:"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["The script tag of the page ",(0,i.jsx)(n.code,{children:"foo"})," will be injected inside the ",(0,i.jsx)(n.code,{children:"body"})," tag."]}),"\n",(0,i.jsxs)(n.li,{children:["The script tag of other pages will be injected inside the ",(0,i.jsx)(n.code,{children:"head"})," tag."]}),"\n"]})]})}var o=function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},{wrapper:n}=Object.assign({},(0,t.useMDXComponents)(),e.components);return n?(0,i.jsx)(n,Object.assign({},e,{children:(0,i.jsx)(d,e)})):d(e)}}}]);