(self.webpackChunk_modern_js_main_doc=self.webpackChunk_modern_js_main_doc||[]).push([["docs_zh_configure_app_output_disable-css-module-extension_mdx"],{39854:function(e,s,n){"use strict";Object.defineProperty(s,"__esModule",{value:!0}),Object.defineProperty(s,"default",{enumerable:!0,get:function(){return c}});var d=n("9880"),i=n("23169");function l(e){var s=Object.assign({ul:"ul",li:"li",strong:"strong",code:"code",p:"p",div:"div",h3:"h3",a:"a",pre:"pre",h4:"h4"},(0,i.useMDXComponents)(),e.components);return(0,d.jsxs)(d.Fragment,{children:[(0,d.jsxs)(s.ul,{children:["\n",(0,d.jsxs)(s.li,{children:[(0,d.jsx)(s.strong,{children:"类型："})," ",(0,d.jsx)(s.code,{children:"boolean"})]}),"\n",(0,d.jsxs)(s.li,{children:[(0,d.jsx)(s.strong,{children:"默认值："})," ",(0,d.jsx)(s.code,{children:"false"})]}),"\n"]}),"\n",(0,d.jsx)(s.p,{children:"是否将源码目录下的所有样式文件当做 CSS Modules 模块进行处理。"}),"\n",(0,d.jsxs)(s.p,{children:["在默认情况下，只有 ",(0,d.jsx)(s.code,{children:"*.module.css"})," 结尾的文件才被视为 CSS Modules 模块。开启该配置项之后，会将源码目录下的所有 ",(0,d.jsx)(s.code,{children:"*.css"})," 样式文件当做 CSS Modules 模块。"]}),"\n",(0,d.jsxs)(s.p,{children:[(0,d.jsx)(s.code,{children:".sass"}),"、",(0,d.jsx)(s.code,{children:".scss"})," 和 ",(0,d.jsx)(s.code,{children:".less"})," 文件的处理规则与 ",(0,d.jsx)(s.code,{children:".css"})," 文件一致，也会受到 ",(0,d.jsx)(s.code,{children:"disableCssModuleExtension"})," 的影响。"]}),"\n",(0,d.jsxs)(s.div,{className:"modern-directive tip",children:[(0,d.jsx)(s.div,{className:"modern-directive-title",children:"TIP"}),(0,d.jsx)(s.div,{className:"modern-directive-content",children:(0,d.jsxs)(s.p,{children:["我们不推荐开启此配置项，因为开启 ",(0,d.jsx)(s.code,{children:"disableCssModuleExtension"})," 后，CSS Modules 文件和普通 CSS 文件无法得到明确的区分，不利于长期维护。\n"]})})]}),"\n",(0,d.jsxs)(s.h3,{id:"示例",children:["示例",(0,d.jsx)(s.a,{className:"header-anchor","aria-hidden":"true",href:"#示例",children:"#"})]}),"\n",(0,d.jsx)(s.div,{className:"language-",children:(0,d.jsx)(s.div,{className:"modern-code-content",children:(0,d.jsx)(s.pre,{className:"code",children:(0,d.jsx)(s.code,{className:"language-js",children:"export default {\n  output: {\n    disableCssModuleExtension: true,\n  },\n};\n"})})})}),"\n",(0,d.jsxs)(s.h3,{id:"规则",children:["规则",(0,d.jsx)(s.a,{className:"header-anchor","aria-hidden":"true",href:"#规则",children:"#"})]}),"\n",(0,d.jsx)(s.p,{children:"以下是对 CSS Modules 判断规则的详细解释："}),"\n",(0,d.jsxs)(s.h4,{id:"未开启-disablecssmoduleextension（默认）",children:["未开启 disableCssModuleExtension（默认）",(0,d.jsx)(s.a,{className:"header-anchor","aria-hidden":"true",href:"#未开启-disablecssmoduleextension（默认）",children:"#"})]}),"\n",(0,d.jsx)(s.p,{children:"以下文件会视为 CSS Modules："}),"\n",(0,d.jsxs)(s.ul,{children:["\n",(0,d.jsxs)(s.li,{children:["所有 ",(0,d.jsx)(s.code,{children:"*.module.css"})," 文件"]}),"\n"]}),"\n",(0,d.jsx)(s.p,{children:"以下文件会视为普通 CSS："}),"\n",(0,d.jsxs)(s.ul,{children:["\n",(0,d.jsxs)(s.li,{children:["所有 ",(0,d.jsx)(s.code,{children:"*.css"})," 文件（不含 ",(0,d.jsx)(s.code,{children:".module"}),"）"]}),"\n",(0,d.jsxs)(s.li,{children:["所有 ",(0,d.jsx)(s.code,{children:"*.global.css"})," 文件"]}),"\n"]}),"\n",(0,d.jsxs)(s.h4,{id:"开启-disablecssmoduleextension",children:["开启 disableCssModuleExtension",(0,d.jsx)(s.a,{className:"header-anchor","aria-hidden":"true",href:"#开启-disablecssmoduleextension",children:"#"})]}),"\n",(0,d.jsx)(s.p,{children:"以下文件会视为 CSS Modules："}),"\n",(0,d.jsxs)(s.ul,{children:["\n",(0,d.jsxs)(s.li,{children:["源码目录下的 ",(0,d.jsx)(s.code,{children:"*.css"})," 和 ",(0,d.jsx)(s.code,{children:"*.module.css"})," 文件"]}),"\n",(0,d.jsxs)(s.li,{children:["node_modules 下的 ",(0,d.jsx)(s.code,{children:"*.module.css"})," 文件"]}),"\n"]}),"\n",(0,d.jsx)(s.p,{children:"以下文件会视为普通 CSS："}),"\n",(0,d.jsxs)(s.ul,{children:["\n",(0,d.jsxs)(s.li,{children:["所有 ",(0,d.jsx)(s.code,{children:"*.global.css"})," 文件"]}),"\n",(0,d.jsxs)(s.li,{children:["node_modules 下的 ",(0,d.jsx)(s.code,{children:"*.css"})," 文件（不含 ",(0,d.jsx)(s.code,{children:".module"}),"）"]}),"\n"]}),"\n",(0,d.jsxs)(s.div,{className:"modern-directive tip",children:[(0,d.jsx)(s.div,{className:"modern-directive-title",children:"TIP"}),(0,d.jsx)(s.div,{className:"modern-directive-content",children:(0,d.jsxs)(s.p,{children:["对于 node_modules 中的 CSS Modules 文件，请始终使用 ",(0,d.jsx)(s.code,{children:"*.module.css"})," 后缀。\n"]})})]})]})}var c=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},s=Object.assign({},(0,i.useMDXComponents)(),e.components).wrapper;return s?(0,d.jsx)(s,Object.assign({},e,{children:(0,d.jsx)(l,e)})):l(e)}},19856:function(e,s,n){"use strict";Object.defineProperty(s,"__esModule",{value:!0});!function(e,s){for(var n in s)Object.defineProperty(e,n,{enumerable:!0,get:s[n]})}(s,{frontmatter:function(){return c},title:function(){return r},toc:function(){return o},default:function(){return a}});var d=n("9880"),i=n("23169"),l=n.ir(n("39854")),c={sidebar_label:"disableCssModuleExtension"},r="output.disableCssModuleExtension",o=[];function t(e){var s=Object.assign({h1:"h1",a:"a",div:"div",p:"p"},(0,i.useMDXComponents)(),e.components);return(0,d.jsxs)(d.Fragment,{children:[(0,d.jsxs)(s.h1,{id:"outputdisablecssmoduleextension",children:["output.disableCssModuleExtension",(0,d.jsx)(s.a,{className:"header-anchor","aria-hidden":"true",href:"#outputdisablecssmoduleextension",children:"#"})]}),"\n",(0,d.jsxs)(s.div,{className:"modern-directive tip",children:[(0,d.jsx)(s.div,{className:"modern-directive-title",children:"TIP"}),(0,d.jsx)(s.div,{className:"modern-directive-content",children:(0,d.jsxs)(s.p,{children:["该配置由 Modern.js Builder 提供，更多信息可参考 ",(0,d.jsx)(s.a,{href:"https://modernjs.dev/builder/api/config-output.html#outputdisablecssmoduleextension",target:"_blank",rel:"noopener noreferrer",children:"output.disableCssModuleExtension"}),"。\n"]})})]}),"\n","\n",(0,d.jsx)(l.default,{})]})}var a=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},s=Object.assign({},(0,i.useMDXComponents)(),e.components).wrapper;return s?(0,d.jsx)(s,Object.assign({},e,{children:(0,d.jsx)(t,e)})):t(e)}}}]);