(self.webpackChunk_modern_js_main_doc=self.webpackChunk_modern_js_main_doc||[]).push([["docs_en_configure_app_source_disable-entry-dirs_mdx"],{9990:function(e,n,r){"use strict";Object.defineProperty(n,"__esModule",{value:!0});!function(e,n){for(var r in n)Object.defineProperty(e,r,{enumerable:!0,get:n[r]})}(n,{frontmatter:function(){return t},title:function(){return o},toc:function(){return c},default:function(){return l}});var i=r("9880"),s=r("23169"),t={sidebar_label:"disableEntryDirs"},o="source.disableEntryDirs",c=[];function d(e){var n=Object.assign({h1:"h1",a:"a",ul:"ul",li:"li",strong:"strong",code:"code",p:"p",pre:"pre"},(0,s.useMDXComponents)(),e.components);return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsxs)(n.h1,{id:"sourcedisableentrydirs",children:["source.disableEntryDirs",(0,i.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#sourcedisableentrydirs",children:"#"})]}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"Type:"})," ",(0,i.jsx)(n.code,{children:"string[]"})]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"Default:"})," ",(0,i.jsx)(n.code,{children:"[]"})]}),"\n"]}),"\n",(0,i.jsxs)(n.p,{children:["By default, Modern.js identifies the application entry point based on the ",(0,i.jsx)(n.code,{children:"src"})," directory. You can use this option to prevent some directories from being recognized as application entry points."]}),"\n",(0,i.jsx)(n.p,{children:"For example, with the following configuration and directory structure:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-ts",meta:'title="modern.config.ts"',children:"export default defineConfig({\n  source: {\n    disableEntryDirs: ['./src/one'],\n  },\n});\n"})}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",meta:'title="Project directory structure"',children:"└── src/\n    ├── one/\n    |    └── App.tsx\n    ├── two/\n    |    └── routes/\n    └── env.d.ts\n"})}),"\n",(0,i.jsx)(n.p,{children:"Without setting this configuration option, Modern.js will produce two entries based on the project directory:"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"one"}),"\n",(0,i.jsx)(n.li,{children:"two"}),"\n"]}),"\n",(0,i.jsxs)(n.p,{children:["After setting this configuration option, the ",(0,i.jsx)(n.code,{children:"src/one"})," directory will not be recognized as an entry directory."]}),"\n",(0,i.jsxs)(n.p,{children:["A common use case is to configure the ",(0,i.jsx)(n.code,{children:"src/common"})," and ",(0,i.jsx)(n.code,{children:"src/components"})," directories in this option to prevent them from being recognized as application entry points."]})]})}var l=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=Object.assign({},(0,s.useMDXComponents)(),e.components).wrapper;return n?(0,i.jsx)(n,Object.assign({},e,{children:(0,i.jsx)(d,e)})):d(e)}}}]);