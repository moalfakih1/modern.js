(self.webpackChunk_modern_js_main_doc=self.webpackChunk_modern_js_main_doc||[]).push([["docs_en_configure_app_output_legal-comments_mdx"],{6317:function(e,n,t){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),Object.defineProperty(n,"default",{enumerable:!0,get:function(){return l}});var r=t("9880"),s=t("23169");function i(e){var n=Object.assign({ul:"ul",li:"li",strong:"strong",code:"code",p:"p",div:"div",h3:"h3",a:"a",pre:"pre"},(0,s.useMDXComponents)(),e.components);return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"Type:"})," ",(0,r.jsx)(n.code,{children:"'linked' | 'inline' | 'none'"})]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"Default:"})," ",(0,r.jsx)(n.code,{children:"'linked'"})]}),"\n"]}),"\n",(0,r.jsx)(n.p,{children:"Configure how to handle the legal comment."}),"\n",(0,r.jsx)(n.p,{children:'A "legal comment" is considered to be any statement-level comment in JS or rule-level comment in CSS that contains @license or @preserve or that starts with //! or /*!. These comments are preserved in output files by default since that follows the intent of the original authors of the code.'}),"\n",(0,r.jsx)(n.p,{children:"This behavior can be configured by using one of the following options:"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"linked"}),": Extract all legal comments to a .LEGAL.txt file and link to them with a comment."]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"inline"}),": Preserve all legal comments in original position."]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"none"}),": Remove all legal comments."]}),"\n"]}),"\n",(0,r.jsxs)(n.div,{className:"modern-directive tip",children:[(0,r.jsx)(n.div,{className:"modern-directive-title",children:"TIP"}),(0,r.jsx)(n.div,{className:"modern-directive-content",children:(0,r.jsxs)(n.p,{children:["When using Rspack as the bundler, ",(0,r.jsx)(n.code,{children:"inline"})," is not currently supported.\n"]})})]}),"\n",(0,r.jsxs)(n.h3,{id:"example",children:["Example",(0,r.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#example",children:"#"})]}),"\n",(0,r.jsx)(n.p,{children:"Remove all legal comments:"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-js",children:"export default {\n  output: {\n    legalComments: 'none',\n  },\n};\n"})})]})}var l=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=Object.assign({},(0,s.useMDXComponents)(),e.components).wrapper;return n?(0,r.jsx)(n,Object.assign({},e,{children:(0,r.jsx)(i,e)})):i(e)}},2371:function(e,n,t){"use strict";Object.defineProperty(n,"__esModule",{value:!0});!function(e,n){for(var t in n)Object.defineProperty(e,t,{enumerable:!0,get:n[t]})}(n,{frontmatter:function(){return l},title:function(){return o},toc:function(){return c},default:function(){return d}});var r=t("9880"),s=t("23169"),i=t.ir(t("6317")),l={sidebar_label:"legalComments"},o="output.legalComments",c=[];function a(e){var n=Object.assign({h1:"h1",a:"a",div:"div",p:"p"},(0,s.useMDXComponents)(),e.components);return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(n.h1,{id:"outputlegalcomments",children:["output.legalComments",(0,r.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#outputlegalcomments",children:"#"})]}),"\n",(0,r.jsxs)(n.div,{className:"modern-directive tip",children:[(0,r.jsx)(n.div,{className:"modern-directive-title",children:"TIP"}),(0,r.jsx)(n.div,{className:"modern-directive-content",children:(0,r.jsxs)(n.p,{children:["This config is provided by Modern.js Builder, more detail can see ",(0,r.jsx)(n.a,{href:"https://modernjs.dev/builder/en/api/config-output.html#outputlegalcomments",target:"_blank",rel:"noopener noreferrer",children:"output.legalComments"}),".\n"]})})]}),"\n","\n",(0,r.jsx)(i.default,{})]})}var d=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=Object.assign({},(0,s.useMDXComponents)(),e.components).wrapper;return n?(0,r.jsx)(n,Object.assign({},e,{children:(0,r.jsx)(a,e)})):a(e)}}}]);