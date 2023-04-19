(self.webpackChunk_modern_js_builder_doc=self.webpackChunk_modern_js_builder_doc||[]).push([["split~docs_zh_api_config-output_mdx13"],{83521:function(e,s,n){"use strict";Object.defineProperty(s,"__esModule",{value:!0});!function(e,s){for(var n in s)Object.defineProperty(e,n,{enumerable:!0,get:s[n]})}(s,{frontmatter:function(){return l},title:function(){return r},toc:function(){return i},default:function(){return o}});var c=n("12151"),d=n("23169"),l={},r="",i=[{text:"默认值",depth:3,id:"默认值"},{text:"模板字符串",depth:3,id:"模板字符串"},{text:"示例",depth:3,id:"示例"}];function a(e){var s=Object.assign({ul:"ul",li:"li",strong:"strong",code:"code",div:"div",button:"button",pre:"pre",p:"p",h3:"h3",a:"a"},(0,d.useMDXComponents)(),e.components);return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsxs)(s.ul,{children:["\n",(0,c.jsxs)(s.li,{children:[(0,c.jsx)(s.strong,{children:"类型："})," ",(0,c.jsx)(s.code,{children:"string"})]}),"\n",(0,c.jsx)(s.li,{children:(0,c.jsx)(s.strong,{children:"默认值："})}),"\n"]}),"\n",(0,c.jsx)(s.div,{className:"language-",children:(0,c.jsxs)(s.div,{className:"modern-code-content",children:[(0,c.jsx)(s.button,{className:"copy"}),(0,c.jsx)(s.pre,{className:"code",children:(0,c.jsx)(s.code,{className:"language-ts",children:"// isProd 表示生产环境构建\nconst localIdentName = isProd\n  ? '[hash:base64:5]'\n  : '[path][name]__[local]--[hash:base64:5]';\n"})})]})}),"\n",(0,c.jsx)(s.p,{children:"设置 CSS Modules 编译后生成的 className 格式。"}),"\n",(0,c.jsxs)(s.h3,{id:"默认值",children:["默认值",(0,c.jsx)(s.a,{className:"header-anchor","aria-hidden":"true",href:"#默认值",children:"#"})]}),"\n",(0,c.jsxs)(s.p,{children:[(0,c.jsx)(s.code,{children:"cssModuleLocalIdentName"})," 在开发环境和生产环境有不同的默认值。"]}),"\n",(0,c.jsx)(s.p,{children:"在生产环境，Builder 会生成更简短的类名，从而减少构建产物的体积。"}),"\n",(0,c.jsx)(s.div,{className:"language-",children:(0,c.jsxs)(s.div,{className:"modern-code-content",children:[(0,c.jsx)(s.button,{className:"copy"}),(0,c.jsx)(s.pre,{className:"code",children:(0,c.jsx)(s.code,{className:"language-ts",children:"import styles from './index.module.scss';\n\n// 在开发环境下，值为 `.src-index-module__header--xxxxx`\n// 在生产环境下，值为 `.xxxxx`\nconsole.log(styles.header);\n"})})]})}),"\n",(0,c.jsxs)(s.h3,{id:"模板字符串",children:["模板字符串",(0,c.jsx)(s.a,{className:"header-anchor","aria-hidden":"true",href:"#模板字符串",children:"#"})]}),"\n",(0,c.jsxs)(s.p,{children:["在 ",(0,c.jsx)(s.code,{children:"cssModuleLocalIdentName"})," 中，你可以使用以下模板字符串："]}),"\n",(0,c.jsxs)(s.ul,{children:["\n",(0,c.jsxs)(s.li,{children:[(0,c.jsx)(s.code,{children:"[name]"})," - 源文件名称。"]}),"\n",(0,c.jsxs)(s.li,{children:[(0,c.jsx)(s.code,{children:"[local]"})," - 原始类名。"]}),"\n",(0,c.jsxs)(s.li,{children:[(0,c.jsx)(s.code,{children:"[hash]"})," - 字符串的哈希值。"]}),"\n",(0,c.jsxs)(s.li,{children:[(0,c.jsx)(s.code,{children:"[folder]"})," - 文件夹的相对路径。"]}),"\n",(0,c.jsxs)(s.li,{children:[(0,c.jsx)(s.code,{children:"[path]"})," - 源文件的相对路径。"]}),"\n",(0,c.jsxs)(s.li,{children:[(0,c.jsx)(s.code,{children:"[file]"})," - 文件名和路径。"]}),"\n",(0,c.jsxs)(s.li,{children:[(0,c.jsx)(s.code,{children:"[ext]"})," - 文件后缀名，包含点号。"]}),"\n",(0,c.jsxs)(s.li,{children:[(0,c.jsx)(s.code,{children:"[hash:<hashDigest>:<hashDigestLength>]"})," - 带有哈希设置的哈希。"]}),"\n"]}),"\n",(0,c.jsxs)(s.div,{className:"modern-directive tip",children:[(0,c.jsx)(s.div,{className:"modern-directive-title",children:"TIP"}),(0,c.jsx)(s.div,{className:"modern-directive-content",children:(0,c.jsxs)(s.p,{children:["在使用 Rspack 作为打包工具时, 暂不支持配置 ",(0,c.jsx)(s.code,{children:"<hashDigest>"}),"。\n"]})})]}),"\n",(0,c.jsxs)(s.h3,{id:"示例",children:["示例",(0,c.jsx)(s.a,{className:"header-anchor","aria-hidden":"true",href:"#示例",children:"#"})]}),"\n",(0,c.jsxs)(s.p,{children:["将 ",(0,c.jsx)(s.code,{children:"cssModuleLocalIdentName"})," 设置为其他值："]}),"\n",(0,c.jsx)(s.div,{className:"language-",children:(0,c.jsxs)(s.div,{className:"modern-code-content",children:[(0,c.jsx)(s.button,{className:"copy"}),(0,c.jsx)(s.pre,{className:"code",children:(0,c.jsx)(s.code,{className:"language-ts",children:"export default {\n  output: {\n    cssModuleLocalIdentName: '[hash:base64:4]',\n  },\n};\n"})})]})})]})}var o=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},s=Object.assign({},(0,d.useMDXComponents)(),e.components).wrapper;return s?(0,c.jsx)(s,Object.assign({},e,{children:(0,c.jsx)(a,e)})):a(e)}}}]);