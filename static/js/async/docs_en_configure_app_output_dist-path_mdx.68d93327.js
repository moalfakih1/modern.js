(self.webpackChunk_modern_js_main_doc=self.webpackChunk_modern_js_main_doc||[]).push([["docs_en_configure_app_output_dist-path_mdx"],{69616:function(e,n,t){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),Object.defineProperty(n,"default",{enumerable:!0,get:function(){return o}});var s=t("9880"),i=t("23169");function r(e){var n=Object.assign({ul:"ul",li:"li",strong:"strong",pre:"pre",code:"code",p:"p",h3:"h3",a:"a"},(0,i.useMDXComponents)(),e.components);return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.strong,{children:"Type:"})}),"\n"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-ts",children:"type DistPathConfig = {\n  root?: string;\n  js?: string;\n  css?: string;\n  svg?: string;\n  font?: string;\n  html?: string;\n  image?: string;\n  media?: string;\n  server?: string;\n};\n"})}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.strong,{children:"Default:"})}),"\n"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-js",children:"const defaultDistPath = {\n  root: 'dist',\n  html: 'html',\n  js: 'static/js',\n  css: 'static/css',\n  svg: 'static/svg',\n  font: 'static/font',\n  image: 'static/image',\n  media: 'static/media',\n  server: 'bundles',\n};\n"})}),"\n",(0,s.jsx)(n.p,{children:"Set the directory of the dist files. Builder will output files to the corresponding subdirectory according to the file type."}),"\n",(0,s.jsx)(n.p,{children:"Detail:"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"root"}),": The root directory of all files."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"html"}),": The output directory of HTML files."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"js"}),": The output directory of JavaScript files."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"css"}),": The output directory of CSS style files."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"svg"}),": The output directory of SVG images."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"font"}),": The output directory of font files."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"image"}),": The output directory of non-SVG images."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"media"}),": The output directory of media assets, such as videos."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"server"}),": The output directory of server bundles when target is ",(0,s.jsx)(n.code,{children:"node"}),"."]}),"\n"]}),"\n",(0,s.jsxs)(n.h3,{id:"example",children:["Example",(0,s.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#example",children:"#"})]}),"\n",(0,s.jsxs)(n.p,{children:["The JavaScript files will be output to the ",(0,s.jsx)(n.code,{children:"distPath.root"})," + ",(0,s.jsx)(n.code,{children:"distPath.js"})," directory, which is ",(0,s.jsx)(n.code,{children:"dist/static/js"}),"."]}),"\n",(0,s.jsxs)(n.p,{children:["If you need to output JavaScript files to the ",(0,s.jsx)(n.code,{children:"build/resource/js"})," directory, you can add following config:"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-js",children:"export default {\n  output: {\n    distPath: {\n      root: 'build',\n      js: 'resource/js',\n    },\n  },\n};\n"})})]})}var o=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=Object.assign({},(0,i.useMDXComponents)(),e.components).wrapper;return n?(0,s.jsx)(n,Object.assign({},e,{children:(0,s.jsx)(r,e)})):r(e)}},85289:function(e,n,t){"use strict";Object.defineProperty(n,"__esModule",{value:!0});!function(e,n){for(var t in n)Object.defineProperty(e,t,{enumerable:!0,get:n[t]})}(n,{frontmatter:function(){return o},title:function(){return d},toc:function(){return c},default:function(){return a}});var s=t("9880"),i=t("23169"),r=t.ir(t("69616")),o={sidebar_label:"distPath"},d="output.distPath",c=[];function l(e){var n=Object.assign({h1:"h1",a:"a",div:"div",p:"p"},(0,i.useMDXComponents)(),e.components);return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)(n.h1,{id:"outputdistpath",children:["output.distPath",(0,s.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#outputdistpath",children:"#"})]}),"\n",(0,s.jsxs)(n.div,{className:"modern-directive tip",children:[(0,s.jsx)(n.div,{className:"modern-directive-title",children:"TIP"}),(0,s.jsx)(n.div,{className:"modern-directive-content",children:(0,s.jsxs)(n.p,{children:["This config is provided by Modern.js Builder, more detail can see ",(0,s.jsx)(n.a,{href:"https://modernjs.dev/builder/en/api/config-output.html#outputdistpath",target:"_blank",rel:"noopener noreferrer",children:"output.distPath"}),".\n"]})})]}),"\n","\n",(0,s.jsx)(r.default,{})]})}var a=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=Object.assign({},(0,i.useMDXComponents)(),e.components).wrapper;return n?(0,s.jsx)(n,Object.assign({},e,{children:(0,s.jsx)(l,e)})):l(e)}}}]);