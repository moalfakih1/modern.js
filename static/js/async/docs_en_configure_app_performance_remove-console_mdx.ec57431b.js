(self.webpackChunkwebpack=self.webpackChunkwebpack||[]).push([["docs_en_configure_app_performance_remove-console_mdx"],{78280:function(e,s,r){"use strict";Object.defineProperty(s,"__esModule",{value:!0}),Object.defineProperty(s,"default",{enumerable:!0,get:function(){return l}});var o=r("12151");function n(e){let s=Object.assign({ul:"ul",li:"li",strong:"strong",code:"code",p:"p",h4:"h4",a:"a",div:"div",button:"button",pre:"pre",span:"span"},e.components);return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsxs)(s.ul,{children:["\n",(0,o.jsxs)(s.li,{children:[(0,o.jsx)(s.strong,{children:"Type:"})," ",(0,o.jsx)(s.code,{children:"boolean | ConsoleType[]"})]}),"\n",(0,o.jsxs)(s.li,{children:[(0,o.jsx)(s.strong,{children:"Default:"})," ",(0,o.jsx)(s.code,{children:"false"})]}),"\n"]}),"\n",(0,o.jsxs)(s.p,{children:["Whether to remove ",(0,o.jsx)(s.code,{children:"console.xx"})," in production build."]}),"\n",(0,o.jsxs)(s.h4,{id:"remove-all-consoles",children:[(0,o.jsx)(s.a,{className:"header-anchor","aria-hidden":"true",href:"#remove-all-consoles",children:"#"}),"Remove all consoles"]}),"\n",(0,o.jsxs)(s.p,{children:["When ",(0,o.jsx)(s.code,{children:"removeConsole"})," is set to ",(0,o.jsx)(s.code,{children:"true"}),", all types of ",(0,o.jsx)(s.code,{children:"console.xx"})," are removed:"]}),"\n",(0,o.jsxs)(s.div,{className:"language-ts",children:[(0,o.jsx)(s.div,{className:""}),(0,o.jsxs)(s.div,{className:"modern-code-content",children:[(0,o.jsx)(s.button,{className:"copy"}),(0,o.jsx)(s.pre,{className:"shiki",style:{backgroundColor:"var(--shiki-color-background)"},children:(0,o.jsxs)(s.code,{children:[(0,o.jsxs)(s.span,{className:"line",children:[(0,o.jsx)(s.span,{style:{color:"var(--shiki-token-keyword)"},children:"export"}),(0,o.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,o.jsx)(s.span,{style:{color:"var(--shiki-token-keyword)"},children:"default"}),(0,o.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" {"})]}),"\n",(0,o.jsxs)(s.span,{className:"line",children:[(0,o.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"  performance"}),(0,o.jsx)(s.span,{style:{color:"var(--shiki-token-keyword)"},children:":"}),(0,o.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" {"})]}),"\n",(0,o.jsxs)(s.span,{className:"line",children:[(0,o.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"    removeConsole"}),(0,o.jsx)(s.span,{style:{color:"var(--shiki-token-keyword)"},children:":"}),(0,o.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,o.jsx)(s.span,{style:{color:"var(--shiki-token-constant)"},children:"true"}),(0,o.jsx)(s.span,{style:{color:"var(--shiki-token-punctuation)"},children:","})]}),"\n",(0,o.jsxs)(s.span,{className:"line",children:[(0,o.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"  }"}),(0,o.jsx)(s.span,{style:{color:"var(--shiki-token-punctuation)"},children:","})]}),"\n",(0,o.jsx)(s.span,{className:"line",children:(0,o.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"};"})}),"\n",(0,o.jsx)(s.span,{className:"line"})]})})]})]}),"\n",(0,o.jsxs)(s.h4,{id:"remove-specific-console",children:[(0,o.jsx)(s.a,{className:"header-anchor","aria-hidden":"true",href:"#remove-specific-console",children:"#"}),"Remove specific console"]}),"\n",(0,o.jsxs)(s.p,{children:["You can also specify to remove only certain types of ",(0,o.jsx)(s.code,{children:"console.xx"}),", such as ",(0,o.jsx)(s.code,{children:"console.log"})," and ",(0,o.jsx)(s.code,{children:"console.warn"}),":"]}),"\n",(0,o.jsxs)(s.div,{className:"language-ts",children:[(0,o.jsx)(s.div,{className:""}),(0,o.jsxs)(s.div,{className:"modern-code-content",children:[(0,o.jsx)(s.button,{className:"copy"}),(0,o.jsx)(s.pre,{className:"shiki",style:{backgroundColor:"var(--shiki-color-background)"},children:(0,o.jsxs)(s.code,{children:[(0,o.jsxs)(s.span,{className:"line",children:[(0,o.jsx)(s.span,{style:{color:"var(--shiki-token-keyword)"},children:"export"}),(0,o.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,o.jsx)(s.span,{style:{color:"var(--shiki-token-keyword)"},children:"default"}),(0,o.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" {"})]}),"\n",(0,o.jsxs)(s.span,{className:"line",children:[(0,o.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"  performance"}),(0,o.jsx)(s.span,{style:{color:"var(--shiki-token-keyword)"},children:":"}),(0,o.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" {"})]}),"\n",(0,o.jsxs)(s.span,{className:"line",children:[(0,o.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"    removeConsole"}),(0,o.jsx)(s.span,{style:{color:"var(--shiki-token-keyword)"},children:":"}),(0,o.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" ["}),(0,o.jsx)(s.span,{style:{color:"var(--shiki-token-string-expression)"},children:"'log'"}),(0,o.jsx)(s.span,{style:{color:"var(--shiki-token-punctuation)"},children:","}),(0,o.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,o.jsx)(s.span,{style:{color:"var(--shiki-token-string-expression)"},children:"'warn'"}),(0,o.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"]"}),(0,o.jsx)(s.span,{style:{color:"var(--shiki-token-punctuation)"},children:","})]}),"\n",(0,o.jsxs)(s.span,{className:"line",children:[(0,o.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"  }"}),(0,o.jsx)(s.span,{style:{color:"var(--shiki-token-punctuation)"},children:","})]}),"\n",(0,o.jsx)(s.span,{className:"line",children:(0,o.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"};"})}),"\n",(0,o.jsx)(s.span,{className:"line"})]})})]})]}),"\n",(0,o.jsx)(s.p,{children:"The following types of console are currently supported:"}),"\n",(0,o.jsxs)(s.div,{className:"language-ts",children:[(0,o.jsx)(s.div,{className:""}),(0,o.jsxs)(s.div,{className:"modern-code-content",children:[(0,o.jsx)(s.button,{className:"copy"}),(0,o.jsx)(s.pre,{className:"shiki",style:{backgroundColor:"var(--shiki-color-background)"},children:(0,o.jsxs)(s.code,{children:[(0,o.jsxs)(s.span,{className:"line",children:[(0,o.jsx)(s.span,{style:{color:"var(--shiki-token-keyword)"},children:"type"}),(0,o.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,o.jsx)(s.span,{style:{color:"var(--shiki-token-function)"},children:"ConsoleType"}),(0,o.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,o.jsx)(s.span,{style:{color:"var(--shiki-token-keyword)"},children:"="}),(0,o.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,o.jsx)(s.span,{style:{color:"var(--shiki-token-string-expression)"},children:"'log'"}),(0,o.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,o.jsx)(s.span,{style:{color:"var(--shiki-token-keyword)"},children:"|"}),(0,o.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,o.jsx)(s.span,{style:{color:"var(--shiki-token-string-expression)"},children:"'info'"}),(0,o.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,o.jsx)(s.span,{style:{color:"var(--shiki-token-keyword)"},children:"|"}),(0,o.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,o.jsx)(s.span,{style:{color:"var(--shiki-token-string-expression)"},children:"'warn'"}),(0,o.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,o.jsx)(s.span,{style:{color:"var(--shiki-token-keyword)"},children:"|"}),(0,o.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,o.jsx)(s.span,{style:{color:"var(--shiki-token-string-expression)"},children:"'error'"}),(0,o.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,o.jsx)(s.span,{style:{color:"var(--shiki-token-keyword)"},children:"|"}),(0,o.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,o.jsx)(s.span,{style:{color:"var(--shiki-token-string-expression)"},children:"'table'"}),(0,o.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,o.jsx)(s.span,{style:{color:"var(--shiki-token-keyword)"},children:"|"}),(0,o.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,o.jsx)(s.span,{style:{color:"var(--shiki-token-string-expression)"},children:"'group'"}),(0,o.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:";"})]}),"\n",(0,o.jsx)(s.span,{className:"line"})]})})]})]})]})}var l=function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},{wrapper:s}=e.components||{};return s?(0,o.jsx)(s,Object.assign({},e,{children:(0,o.jsx)(n,e)})):n(e)}},42287:function(e,s,r){"use strict";Object.defineProperty(s,"__esModule",{value:!0});!function(e,s){for(var r in s)Object.defineProperty(e,r,{enumerable:!0,get:s[r]})}(s,{frontmatter:function(){return l},toc:function(){return i},title:function(){return c},default:function(){return t}});var o=r("12151"),n=r.ir(r("78280"));let l={sidebar_label:"removeConsole"},i=[],c="performance.removeConsole";function a(e){let s=Object.assign({h1:"h1",a:"a",div:"div",p:"p"},e.components);return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsxs)(s.h1,{id:"performanceremoveconsole",children:[(0,o.jsx)(s.a,{className:"header-anchor","aria-hidden":"true",href:"#performanceremoveconsole",children:"#"}),"performance.removeConsole"]}),"\n",(0,o.jsxs)(s.div,{className:"modern-directive tip",children:[(0,o.jsx)(s.p,{className:"modern-directive-title",children:"TIP"}),(0,o.jsx)(s.div,{className:"modern-directive-content",children:(0,o.jsxs)(s.p,{children:["\nThis config is provided by Modern.js Builder, more detail can see ",(0,o.jsx)(s.a,{href:"https://modernjs.dev/builder/en/api/config-performance.html#performanceremoveconsole",target:"_blank",rel:"nofollow",children:"performance.removeConsole"}),"."]})})]}),"\n","\n",(0,o.jsx)(n.default,{})]})}var t=function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},{wrapper:s}=e.components||{};return s?(0,o.jsx)(s,Object.assign({},e,{children:(0,o.jsx)(a,e)})):a(e)}}}]);