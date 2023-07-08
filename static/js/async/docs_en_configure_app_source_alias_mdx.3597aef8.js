(self.webpackChunk_modern_js_main_doc=self.webpackChunk_modern_js_main_doc||[]).push([["docs_en_configure_app_source_alias_mdx"],{97883:function(e,n,a){"use strict";a.r(n),a.d(n,{default:function(){return l}});var r,s=a("15169"),o=a("43932"),i=a("9880"),c=a("23169");function t(e){var n=Object.assign({ul:"ul",li:"li",strong:"strong",code:"code",p:"p",a:"a",div:"div",h3:"h3",pre:"pre"},(0,c.useMDXComponents)(),e.components);return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"Type:"})," ",(0,i.jsx)(n.code,{children:"Record<string, string | string[]> | Function"})]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"Default:"})," ",(0,i.jsx)(n.code,{children:"undefined"})]}),"\n"]}),"\n",(0,i.jsxs)(n.p,{children:["Create aliases to import or require certain modules, same as the ",(0,i.jsx)(n.a,{href:"https://webpack.js.org/configuration/resolve/#resolvealias",target:"_blank",rel:"noopener noreferrer",children:"resolve.alias"})," config of webpack."]}),"\n",(0,i.jsxs)(n.div,{className:"modern-directive tip",children:[(0,i.jsx)(n.div,{className:"modern-directive-title",children:"TIP"}),(0,i.jsx)(n.div,{className:"modern-directive-content",children:(0,i.jsxs)(n.p,{children:["For TypeScript projects, you only need to configure ",(0,i.jsx)(n.a,{href:"https://www.typescriptlang.org/tsconfig#paths",target:"_blank",rel:"noopener noreferrer",children:"compilerOptions.paths"})," in the ",(0,i.jsx)(n.code,{children:"tsconfig.json"})," file. The Builder will automatically recognize it, so there is no need to configure the ",(0,i.jsx)(n.code,{children:"source.alias"})," option separately. For more details, please refer to ",(0,i.jsx)(n.a,{href:"https://modernjs.dev/builder/en/guide/advanced/alias.html",target:"_blank",rel:"noopener noreferrer",children:"Path Aliases"}),".\n"]})})]}),"\n",(0,i.jsxs)(n.h3,{id:"object-type",children:["Object Type",(0,i.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#object-type",children:"#"})]}),"\n",(0,i.jsxs)(n.p,{children:["The ",(0,i.jsx)(n.code,{children:"alias"})," can be an Object, and the relative path will be automatically converted to absolute path."]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-js",children:"export default {\n  source: {\n    alias: {\n      '@common': './src/common',\n    },\n  },\n};\n"})}),"\n",(0,i.jsxs)(n.p,{children:["With above configuration, if ",(0,i.jsx)(n.code,{children:"@common/Foo.tsx"})," is import in the code, it will be mapped to the ",(0,i.jsx)(n.code,{children:"<project>/src/common/Foo.tsx"})," path."]}),"\n",(0,i.jsxs)(n.h3,{id:"function-type",children:["Function Type",(0,i.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#function-type",children:"#"})]}),"\n",(0,i.jsxs)(n.p,{children:["The ",(0,i.jsx)(n.code,{children:"alias"})," can be a function, it will accept the previous alias object, and you can modify it."]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-js",children:"export default {\n  source: {\n    alias: alias => {\n      alias['@common'] = './src/common';\n    },\n  },\n};\n"})}),"\n",(0,i.jsx)(n.p,{children:"You can also return a new object as the final result in the function, which will replace the previous alias object."}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-js",children:"export default {\n  source: {\n    alias: alias => {\n      return {\n        '@common': './src/common',\n      };\n    },\n  },\n};\n"})}),"\n",(0,i.jsxs)(n.h3,{id:"exact-matching",children:["Exact Matching",(0,i.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#exact-matching",children:"#"})]}),"\n",(0,i.jsxs)(n.p,{children:["By default, ",(0,i.jsx)(n.code,{children:"source.alias"})," will automatically match sub-paths, for example, with the following configuration:"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-js",children:"import path from 'path';\n\nexport default {\n  source: {\n    alias: {\n      '@common': './src/common',\n    },\n  },\n};\n"})}),"\n",(0,i.jsx)(n.p,{children:"It will match as follows:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-js",children:"import a from '@common'; // resolved to `./src/common`\nimport b from '@common/util'; // resolved to `./src/common/util`\n"})}),"\n",(0,i.jsxs)(n.p,{children:["You can add the ",(0,i.jsx)(n.code,{children:"$"})," symbol to enable exact matching, which will not automatically match sub-paths."]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-js",children:"import path from 'path';\n\nexport default {\n  source: {\n    alias: {\n      '@common$': './src/common',\n    },\n  },\n};\n"})}),"\n",(0,i.jsx)(n.p,{children:"It will match as follows:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-js",children:"import a from '@common'; // resolved to `./src/common`\nimport b from '@common/util'; // remains as `@common/util`\n"})}),"\n",(0,i.jsxs)(n.h3,{id:"handling-npm-packages",children:["Handling npm packages",(0,i.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#handling-npm-packages",children:"#"})]}),"\n",(0,i.jsxs)(n.p,{children:["You can use ",(0,i.jsx)(n.code,{children:"alias"})," to resolve an npm package to a specific directory."]}),"\n",(0,i.jsxs)(n.p,{children:["For example, if multiple versions of the ",(0,i.jsx)(n.code,{children:"react"})," are installed in the project, you can alias ",(0,i.jsx)(n.code,{children:"react"})," to the version installed in the root ",(0,i.jsx)(n.code,{children:"node_modules"})," directory to avoid bundling multiple copies of the React code."]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-js",children:"import path from 'path';\n\nexport default {\n  source: {\n    alias: {\n      react: path.resolve(__dirname, './node_modules/react'),\n    },\n  },\n};\n"})}),"\n",(0,i.jsx)(n.p,{children:"When using alias to handle npm packages, please be aware of whether different major versions of the package are being used in the project."}),"\n",(0,i.jsx)(n.p,{children:"For example, if a module or npm dependency in your project uses the React 18 API, and you alias React to version 17, the module will not be able to reference the React 18 API, resulting in code exceptions."})]})}(r=globalThis).__RSPRESS_PAGE_META||(r.__RSPRESS_PAGE_META={}),globalThis.__RSPRESS_PAGE_META["%2Fhome%2Frunner%2Fwork%2Fmodern.js%2Fmodern.js%2Fpackages%2Fdocument%2Fbuilder-doc%2Fdocs%2Fen%2Fconfig%2Fsource%2Falias.md"]={toc:[{text:"Object Type",id:"object-type",depth:3},{text:"Function Type",id:"function-type",depth:3},{text:"Exact Matching",id:"exact-matching",depth:3},{text:"Handling npm packages",id:"handling-npm-packages",depth:3}],title:"",frontmatter:{}};var l=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=Object.assign({},(0,c.useMDXComponents)(),e.components).wrapper;return n?(0,i.jsx)(n,(0,o._)((0,s._)({},e),{children:(0,i.jsx)(t,(0,s._)({},e))})):t(e)}},39440:function(e,n,a){"use strict";a.r(n),a.d(n,{default:function(){return d}});var r,s=a("15169"),o=a("43932"),i=a("9880"),c=a("23169"),t=a("97883");function l(e){var n=Object.assign({h1:"h1",a:"a",div:"div",p:"p"},(0,c.useMDXComponents)(),e.components);return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsxs)(n.h1,{id:"sourcealias",children:["source.alias",(0,i.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#sourcealias",children:"#"})]}),"\n",(0,i.jsxs)(n.div,{className:"modern-directive tip",children:[(0,i.jsx)(n.div,{className:"modern-directive-title",children:"TIP"}),(0,i.jsx)(n.div,{className:"modern-directive-content",children:(0,i.jsxs)(n.p,{children:["This config is provided by Modern.js Builder, more detail can see ",(0,i.jsx)(n.a,{href:"https://modernjs.dev/builder/en/api/config-source.html#sourcealias",target:"_blank",rel:"noopener noreferrer",children:"source.alias"}),".\n"]})})]}),"\n","\n",(0,i.jsx)(t.default,{})]})}(r=globalThis).__RSPRESS_PAGE_META||(r.__RSPRESS_PAGE_META={}),globalThis.__RSPRESS_PAGE_META["%2Fhome%2Frunner%2Fwork%2Fmodern.js%2Fmodern.js%2Fpackages%2Fdocument%2Fmain-doc%2Fdocs%2Fen%2Fconfigure%2Fapp%2Fsource%2Falias.mdx"]={toc:[],title:"source.alias",frontmatter:{sidebar_label:"alias"}};var d=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=Object.assign({},(0,c.useMDXComponents)(),e.components).wrapper;return n?(0,i.jsx)(n,(0,o._)((0,s._)({},e),{children:(0,i.jsx)(l,(0,s._)({},e))})):l(e)}}}]);