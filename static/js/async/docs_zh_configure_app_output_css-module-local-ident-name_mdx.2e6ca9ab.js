(self.webpackChunk_modern_js_main_doc=self.webpackChunk_modern_js_main_doc||[]).push([["docs_zh_configure_app_output_css-module-local-ident-name_mdx"],{5158:function(e,n,s){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),Object.defineProperty(n,"default",{enumerable:!0,get:function(){return l}});var d=s("9880"),c=s("23169");function r(e){var n=Object.assign({ul:"ul",li:"li",strong:"strong",code:"code",div:"div",pre:"pre",p:"p",h3:"h3",a:"a"},(0,c.useMDXComponents)(),e.components);return(0,d.jsxs)(d.Fragment,{children:[(0,d.jsxs)(n.ul,{children:["\n",(0,d.jsxs)(n.li,{children:[(0,d.jsx)(n.strong,{children:"类型："})," ",(0,d.jsx)(n.code,{children:"string"})]}),"\n",(0,d.jsx)(n.li,{children:(0,d.jsx)(n.strong,{children:"默认值："})}),"\n"]}),"\n",(0,d.jsx)(n.div,{className:"language-",children:(0,d.jsx)(n.div,{className:"modern-code-content",children:(0,d.jsx)(n.pre,{className:"code",children:(0,d.jsx)(n.code,{className:"language-ts",children:"// isProd 表示生产环境构建\nconst localIdentName = isProd\n  ? '[hash:base64:5]'\n  : '[path][name]__[local]--[hash:base64:5]';\n"})})})}),"\n",(0,d.jsx)(n.p,{children:"设置 CSS Modules 编译后生成的 className 格式。"}),"\n",(0,d.jsxs)(n.h3,{id:"默认值",children:["默认值",(0,d.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#默认值",children:"#"})]}),"\n",(0,d.jsxs)(n.p,{children:[(0,d.jsx)(n.code,{children:"cssModuleLocalIdentName"})," 在开发环境和生产环境有不同的默认值。"]}),"\n",(0,d.jsx)(n.p,{children:"在生产环境，Builder 会生成更简短的类名，从而减少构建产物的体积。"}),"\n",(0,d.jsx)(n.div,{className:"language-",children:(0,d.jsx)(n.div,{className:"modern-code-content",children:(0,d.jsx)(n.pre,{className:"code",children:(0,d.jsx)(n.code,{className:"language-ts",children:"import styles from './index.module.scss';\n\n// 在开发环境下，值为 `.src-index-module__header--xxxxx`\n// 在生产环境下，值为 `.xxxxx`\nconsole.log(styles.header);\n"})})})}),"\n",(0,d.jsxs)(n.h3,{id:"模板字符串",children:["模板字符串",(0,d.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#模板字符串",children:"#"})]}),"\n",(0,d.jsxs)(n.p,{children:["在 ",(0,d.jsx)(n.code,{children:"cssModuleLocalIdentName"})," 中，你可以使用以下模板字符串："]}),"\n",(0,d.jsxs)(n.ul,{children:["\n",(0,d.jsxs)(n.li,{children:[(0,d.jsx)(n.code,{children:"[name]"})," - 源文件名称。"]}),"\n",(0,d.jsxs)(n.li,{children:[(0,d.jsx)(n.code,{children:"[local]"})," - 原始类名。"]}),"\n",(0,d.jsxs)(n.li,{children:[(0,d.jsx)(n.code,{children:"[hash]"})," - 字符串的哈希值。"]}),"\n",(0,d.jsxs)(n.li,{children:[(0,d.jsx)(n.code,{children:"[folder]"})," - 文件夹的相对路径。"]}),"\n",(0,d.jsxs)(n.li,{children:[(0,d.jsx)(n.code,{children:"[path]"})," - 源文件的相对路径。"]}),"\n",(0,d.jsxs)(n.li,{children:[(0,d.jsx)(n.code,{children:"[file]"})," - 文件名和路径。"]}),"\n",(0,d.jsxs)(n.li,{children:[(0,d.jsx)(n.code,{children:"[ext]"})," - 文件后缀名，包含点号。"]}),"\n",(0,d.jsxs)(n.li,{children:[(0,d.jsx)(n.code,{children:"[hash:<hashDigest>:<hashDigestLength>]"})," - 带有哈希设置的哈希。"]}),"\n"]}),"\n",(0,d.jsxs)(n.div,{className:"modern-directive tip",children:[(0,d.jsx)(n.div,{className:"modern-directive-title",children:"TIP"}),(0,d.jsx)(n.div,{className:"modern-directive-content",children:(0,d.jsxs)(n.p,{children:["在使用 Rspack 作为打包工具时, 暂不支持配置 ",(0,d.jsx)(n.code,{children:"<hashDigest>"}),"。\n"]})})]}),"\n",(0,d.jsxs)(n.h3,{id:"示例",children:["示例",(0,d.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#示例",children:"#"})]}),"\n",(0,d.jsxs)(n.p,{children:["将 ",(0,d.jsx)(n.code,{children:"cssModuleLocalIdentName"})," 设置为其他值："]}),"\n",(0,d.jsx)(n.div,{className:"language-",children:(0,d.jsx)(n.div,{className:"modern-code-content",children:(0,d.jsx)(n.pre,{className:"code",children:(0,d.jsx)(n.code,{className:"language-ts",children:"export default {\n  output: {\n    cssModuleLocalIdentName: '[hash:base64:4]',\n  },\n};\n"})})})})]})}var l=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=Object.assign({},(0,c.useMDXComponents)(),e.components).wrapper;return n?(0,d.jsx)(n,Object.assign({},e,{children:(0,d.jsx)(r,e)})):r(e)}},25601:function(e,n,s){"use strict";Object.defineProperty(n,"__esModule",{value:!0});!function(e,n){for(var s in n)Object.defineProperty(e,s,{enumerable:!0,get:n[s]})}(n,{frontmatter:function(){return l},title:function(){return i},toc:function(){return a},default:function(){return t}});var d=s("9880"),c=s("23169"),r=s.ir(s("5158")),l={sidebar_label:"cssModuleLocalIdentName"},i="output.cssModuleLocalIdentName",a=[];function o(e){var n=Object.assign({h1:"h1",a:"a",div:"div",p:"p"},(0,c.useMDXComponents)(),e.components);return(0,d.jsxs)(d.Fragment,{children:[(0,d.jsxs)(n.h1,{id:"outputcssmodulelocalidentname",children:["output.cssModuleLocalIdentName",(0,d.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#outputcssmodulelocalidentname",children:"#"})]}),"\n",(0,d.jsxs)(n.div,{className:"modern-directive tip",children:[(0,d.jsx)(n.div,{className:"modern-directive-title",children:"TIP"}),(0,d.jsx)(n.div,{className:"modern-directive-content",children:(0,d.jsxs)(n.p,{children:["该配置由 Modern.js Builder 提供，更多信息可参考 ",(0,d.jsx)(n.a,{href:"https://modernjs.dev/builder/api/config-output.html#outputcssmodulelocalidentname",target:"_blank",rel:"noopener noreferrer",children:"output.cssModuleLocalIdentName"}),"。\n"]})})]}),"\n","\n",(0,d.jsx)(r.default,{})]})}var t=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=Object.assign({},(0,c.useMDXComponents)(),e.components).wrapper;return n?(0,d.jsx)(n,Object.assign({},e,{children:(0,d.jsx)(o,e)})):o(e)}}}]);