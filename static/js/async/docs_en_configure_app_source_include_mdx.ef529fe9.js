(self.webpackChunk_modern_js_main_doc=self.webpackChunk_modern_js_main_doc||[]).push([["docs_en_configure_app_source_include_mdx"],{61315:function(e,n,o){"use strict";o.r(n),o.d(n,{default:function(){return a}});var r,s=o("15169"),i=o("43932"),c=o("9880"),d=o("23169");function l(e){var n=Object.assign({ul:"ul",li:"li",strong:"strong",code:"code",p:"p",a:"a",pre:"pre",div:"div",h3:"h3"},(0,d.useMDXComponents)(),e.components);return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsxs)(n.ul,{children:["\n",(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:"Type:"})," ",(0,c.jsx)(n.code,{children:"Array<string | RegExp>"})]}),"\n",(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:"Default:"})," ",(0,c.jsx)(n.code,{children:"[]"})]}),"\n",(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:"Bundler:"})," ",(0,c.jsx)(n.code,{children:"only support webpack"})]}),"\n"]}),"\n",(0,c.jsxs)(n.p,{children:["In order to maintain faster compilation speed, Builder will not compile JavaScript/TypeScript files under node_modules through ",(0,c.jsx)(n.code,{children:"babel-loader"})," or ",(0,c.jsx)(n.code,{children:"ts-loader"})," by default, as will as the JavaScript/TypeScript files outside the current project directory."]}),"\n",(0,c.jsxs)(n.p,{children:["Through the ",(0,c.jsx)(n.code,{children:"source.include"})," config, you can specify directories or modules that need to be compiled by Builder. The usage of ",(0,c.jsx)(n.code,{children:"source.include"})," is consistent with ",(0,c.jsx)(n.a,{href:"https://webpack.js.org/configuration/module/#ruleinclude",target:"_blank",rel:"noopener noreferrer",children:"Rule.include"})," in webpack, which supports passing in strings or regular expressions to match the module path."]}),"\n",(0,c.jsx)(n.p,{children:"For example:"}),"\n",(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:"language-ts",children:"import path from 'path';\n\nexport default {\n  source: {\n    include: [path.resolve(__dirname, '../other-dir')],\n  },\n};\n"})}),"\n",(0,c.jsxs)(n.div,{className:"modern-directive tip",children:[(0,c.jsx)(n.div,{className:"modern-directive-title",children:"TIP"}),(0,c.jsx)(n.div,{className:"modern-directive-content",children:(0,c.jsxs)(n.p,{children:["When using Rspack as the bundler, ",(0,c.jsx)(n.strong,{children:"all files"})," will be compiled by default, and at the same time, exclusion through ",(0,c.jsx)(n.code,{children:"source.exclude"})," is not supported.\n"]})})]}),"\n",(0,c.jsxs)(n.h3,{id:"compile-npm-packages",children:["Compile Npm Packages",(0,c.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#compile-npm-packages",children:"#"})]}),"\n",(0,c.jsx)(n.p,{children:"A typical usage scenario is to compile npm packages under node_modules, because some third-party dependencies have ES6+ syntax, which may cause them to fail to run on low-version browsers. You can solve the problem by using this config to specify the dependencies that need to be compiled."}),"\n",(0,c.jsxs)(n.p,{children:["Take ",(0,c.jsx)(n.code,{children:"query-string"})," as an example, you can add the following config:"]}),"\n",(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:"language-ts",children:"import path from 'path';\n\nexport default {\n  source: {\n    include: [\n      // Method 1:\n      // First get the path of the module by require.resolve\n      // Then pass path.dirname to point to the corresponding directory\n      path.dirname(require.resolve('query-string')),\n      // Method 2:\n      // Match by regular expression\n      // All paths containing `/node_modules/query-string/` will be matched\n      /\\/node_modules\\/query-string\\//,\n    ],\n  },\n};\n"})}),"\n",(0,c.jsx)(n.p,{children:'The above two methods match the absolute paths of files using "path prefixes" and "regular expressions" respectively. It is worth noting that all referenced modules in the project will be matched. Therefore, you should avoid using overly loose values for matching to prevent compilation performance issues or compilation errors.'}),"\n",(0,c.jsxs)(n.h3,{id:"compile-sub-dependencies",children:["Compile Sub Dependencies",(0,c.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#compile-sub-dependencies",children:"#"})]}),"\n",(0,c.jsxs)(n.p,{children:["When you compile an npm package via ",(0,c.jsx)(n.code,{children:"source.include"}),", Builder will only compile the matching module by default, not the ",(0,c.jsx)(n.strong,{children:"Sub Dependencies"})," of the module."]}),"\n",(0,c.jsxs)(n.p,{children:["Take ",(0,c.jsx)(n.code,{children:"query-string"})," for example, it depends on the ",(0,c.jsx)(n.code,{children:"decode-uri-component"})," package, which also has ES6+ code, so you need to add the ",(0,c.jsx)(n.code,{children:"decode-uri-component"})," package to ",(0,c.jsx)(n.code,{children:"source.include"})," as well."]}),"\n",(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:"language-ts",children:"export default {\n  source: {\n    include: [\n      /\\/node_modules\\/query-string\\//,\n      /\\/node_modules\\/decode-uri-component\\//,\n    ],\n  },\n};\n"})}),"\n",(0,c.jsxs)(n.h3,{id:"compile-libraries-in-monorepo",children:["Compile Libraries in Monorepo",(0,c.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#compile-libraries-in-monorepo",children:"#"})]}),"\n",(0,c.jsxs)(n.p,{children:["When developing in Monorepo, if you need to refer to the source code of other libraries in Monorepo, you can add the corresponding library to ",(0,c.jsx)(n.code,{children:"source.include"}),":"]}),"\n",(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:"language-ts",children:"import path from 'path';\n\nexport default {\n  source: {\n    include: [\n      // Method 1:\n      // Compile all files in Monorepo's package directory\n      path.resolve(__dirname, '../../packages'),\n\n      // Method 2:\n      // Compile the source code of a package in Monorepo's package directory\n      // This way of writing matches the range more accurately and has less impact on the overall build performance.\n      path.resolve(__dirname, '../../packages/xxx/src'),\n    ],\n  },\n};\n"})}),"\n",(0,c.jsxs)(n.h3,{id:"compile-commonjs-module",children:["Compile CommonJS Module",(0,c.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#compile-commonjs-module",children:"#"})]}),"\n",(0,c.jsxs)(n.p,{children:["Babel cannot compile CommonJS modules by default, and if you compile a CommonJS module, you may get a runtime error message ",(0,c.jsx)(n.code,{children:"exports is not defined"}),"."]}),"\n",(0,c.jsxs)(n.p,{children:["When you need to compile a CommonJS module using ",(0,c.jsx)(n.code,{children:"source.include"}),", you can set Babel's ",(0,c.jsx)(n.code,{children:"sourceType"})," configuration to ",(0,c.jsx)(n.code,{children:"unambiguous"}),"."]}),"\n",(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:"language-ts",children:"export default {\n  tools: {\n    babel(config) {\n      config.sourceType = 'unambiguous';\n    },\n  },\n};\n"})}),"\n",(0,c.jsxs)(n.p,{children:["Setting ",(0,c.jsx)(n.code,{children:"sourceType"})," to ",(0,c.jsx)(n.code,{children:"unambiguous"})," may have some other effects, please refer to ",(0,c.jsx)(n.a,{href:"https://babeljs.io/docs/en/options#sourcetype",target:"_blank",rel:"noopener noreferrer",children:"Babel official documentation"}),"."]}),"\n",(0,c.jsxs)(n.h3,{id:"matching-symlink",children:["Matching Symlink",(0,c.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#matching-symlink",children:"#"})]}),"\n",(0,c.jsxs)(n.p,{children:["If you match a module that is symlinked to the current project, then you need to match the ",(0,c.jsx)(n.strong,{children:"real path"})," of the module, not the symlinked path."]}),"\n",(0,c.jsxs)(n.p,{children:["For example, if you symlink the ",(0,c.jsx)(n.code,{children:"packages/foo"})," path in Monorepo to the ",(0,c.jsx)(n.code,{children:"node_modules/foo"})," path of the current project, you need to match the ",(0,c.jsx)(n.code,{children:"packages/foo"})," path, not the ",(0,c.jsx)(n.code,{children:"node_modules/foo"})," path."]}),"\n",(0,c.jsxs)(n.p,{children:["This behavior can be controlled via webpack's ",(0,c.jsx)(n.a,{href:"https://webpack.js.org/configuration/resolve/#resolvesymlinks",target:"_blank",rel:"noopener noreferrer",children:"resolve.symlinks"})," config."]}),"\n",(0,c.jsxs)(n.h3,{id:"precautions",children:["Precautions",(0,c.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#precautions",children:"#"})]}),"\n",(0,c.jsxs)(n.p,{children:["Note that ",(0,c.jsx)(n.code,{children:"source.include"})," should not be used to compile the entire ",(0,c.jsx)(n.code,{children:"node_modules"})," directory. For example, the following usage is wrong:"]}),"\n",(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:"language-ts",children:"export default {\n  source: {\n    include: [/\\/node_modules\\//],\n  },\n};\n"})}),"\n",(0,c.jsxs)(n.p,{children:["If you compile the entire ",(0,c.jsx)(n.code,{children:"node_modules"}),", not only will the build time be greatly increased, but also unexpected errors may occur. Because most of the npm packages in ",(0,c.jsx)(n.code,{children:"node_modules"})," are already compiled, there is usually no need for a second compilation. In addition, exceptions may occur after npm packages such as ",(0,c.jsx)(n.code,{children:"core-js"})," are compiled."]})]})}(r=globalThis).__RSPRESS_PAGE_META||(r.__RSPRESS_PAGE_META={}),globalThis.__RSPRESS_PAGE_META["%2Fhome%2Frunner%2Fwork%2Fmodern.js%2Fmodern.js%2Fpackages%2Fdocument%2Fbuilder-doc%2Fdocs%2Fen%2Fconfig%2Fsource%2Finclude.md"]={toc:[{text:"Compile Npm Packages",id:"compile-npm-packages",depth:3},{text:"Compile Sub Dependencies",id:"compile-sub-dependencies",depth:3},{text:"Compile Libraries in Monorepo",id:"compile-libraries-in-monorepo",depth:3},{text:"Compile CommonJS Module",id:"compile-commonjs-module",depth:3},{text:"Matching Symlink",id:"matching-symlink",depth:3},{text:"Precautions",id:"precautions",depth:3}],title:"",frontmatter:{}};var a=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=Object.assign({},(0,d.useMDXComponents)(),e.components).wrapper;return n?(0,c.jsx)(n,(0,i._)((0,s._)({},e),{children:(0,c.jsx)(l,(0,s._)({},e))})):l(e)}},30621:function(e,n,o){"use strict";o.r(n),o.d(n,{default:function(){return t}});var r,s=o("15169"),i=o("43932"),c=o("9880"),d=o("23169"),l=o("61315");function a(e){var n=Object.assign({h1:"h1",a:"a",div:"div",p:"p"},(0,d.useMDXComponents)(),e.components);return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsxs)(n.h1,{id:"sourceinclude",children:["source.include",(0,c.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#sourceinclude",children:"#"})]}),"\n",(0,c.jsxs)(n.div,{className:"modern-directive tip",children:[(0,c.jsx)(n.div,{className:"modern-directive-title",children:"TIP"}),(0,c.jsx)(n.div,{className:"modern-directive-content",children:(0,c.jsxs)(n.p,{children:["This config is provided by Modern.js Builder, more detail can see ",(0,c.jsx)(n.a,{href:"https://modernjs.dev/builder/en/api/config-source.html#sourceinclude",target:"_blank",rel:"noopener noreferrer",children:"source.include"}),".\n"]})})]}),"\n","\n",(0,c.jsx)(l.default,{})]})}(r=globalThis).__RSPRESS_PAGE_META||(r.__RSPRESS_PAGE_META={}),globalThis.__RSPRESS_PAGE_META["%2Fhome%2Frunner%2Fwork%2Fmodern.js%2Fmodern.js%2Fpackages%2Fdocument%2Fmain-doc%2Fdocs%2Fen%2Fconfigure%2Fapp%2Fsource%2Finclude.mdx"]={toc:[],title:"source.include",frontmatter:{sidebar_label:"include"}};var t=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=Object.assign({},(0,d.useMDXComponents)(),e.components).wrapper;return n?(0,c.jsx)(n,(0,i._)((0,s._)({},e),{children:(0,c.jsx)(a,(0,s._)({},e))})):a(e)}}}]);