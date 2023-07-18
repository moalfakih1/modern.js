(self.webpackChunk_modern_js_main_doc=self.webpackChunk_modern_js_main_doc||[]).push([["docs_en_configure_app_source_alias-strategy_mdx"],{65949:function(e,n,s){"use strict";s.r(n),s.d(n,{default:function(){return l}});var i,r=s("15169"),o=s("43932"),c=s("9880"),t=s("23169");function a(e){var n=Object.assign({ul:"ul",li:"li",strong:"strong",code:"code",p:"p",h3:"h3",a:"a",pre:"pre"},(0,t.useMDXComponents)(),e.components);return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsxs)(n.ul,{children:["\n",(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:"Type:"})," ",(0,c.jsx)(n.code,{children:"'prefer-tsconfig' | 'prefer-alias'"})]}),"\n",(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:"Default:"})," ",(0,c.jsx)(n.code,{children:"'prefer-tsconfig'"})]}),"\n"]}),"\n",(0,c.jsxs)(n.p,{children:[(0,c.jsx)(n.code,{children:"source.aliasStrategy"})," is used to control the priority between the ",(0,c.jsx)(n.code,{children:"paths"})," option in ",(0,c.jsx)(n.code,{children:"tsconfig.json"})," and the ",(0,c.jsx)(n.code,{children:"alias"})," option in the bundler."]}),"\n",(0,c.jsxs)(n.h3,{id:"prefer-tsconfig",children:["prefer-tsconfig",(0,c.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#prefer-tsconfig",children:"#"})]}),"\n",(0,c.jsxs)(n.p,{children:["By default, ",(0,c.jsx)(n.code,{children:"source.aliasStrategy"})," is set to ",(0,c.jsx)(n.code,{children:"'prefer-tsconfig'"}),". In this case, both the ",(0,c.jsx)(n.code,{children:"paths"})," option in ",(0,c.jsx)(n.code,{children:"tsconfig.json"})," and the ",(0,c.jsx)(n.code,{children:"alias"})," option in the bundler will take effect, but the ",(0,c.jsx)(n.code,{children:"paths"})," option in tsconfig has a higher priority."]}),"\n",(0,c.jsx)(n.p,{children:"For example, if the following configurations are set at the same time:"}),"\n",(0,c.jsxs)(n.ul,{children:["\n",(0,c.jsx)(n.li,{children:"tsconfig paths:"}),"\n"]}),"\n",(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:"language-json",meta:'title="tsconfig.json"',children:'{\n  "compilerOptions": {\n    "paths": {\n      "@common/*": ["./src/common-1/*"]\n    }\n  }\n}\n'})}),"\n",(0,c.jsxs)(n.ul,{children:["\n",(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:"source.alias"}),":"]}),"\n"]}),"\n",(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:"language-ts",children:"export default {\n  source: {\n    alias: {\n      '@common': './src/common-2',\n      '@utils': './src/utils',\n    },\n  },\n};\n"})}),"\n",(0,c.jsx)(n.p,{children:"Since the tsconfig paths have a higher priority, the following will happen:"}),"\n",(0,c.jsxs)(n.ul,{children:["\n",(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:"@common"})," will use the value defined in tsconfig paths, pointing to ",(0,c.jsx)(n.code,{children:"./src/common-1"})]}),"\n",(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:"@utils"})," will use the value defined in ",(0,c.jsx)(n.code,{children:"source.alias"}),", pointing to ",(0,c.jsx)(n.code,{children:"./src/utils"})]}),"\n"]}),"\n",(0,c.jsxs)(n.h3,{id:"prefer-alias",children:["prefer-alias",(0,c.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#prefer-alias",children:"#"})]}),"\n",(0,c.jsxs)(n.p,{children:["If the value of ",(0,c.jsx)(n.code,{children:"source.aliasStrategy"})," is set to ",(0,c.jsx)(n.code,{children:"prefer-alias"}),", the ",(0,c.jsx)(n.code,{children:"paths"})," option in ",(0,c.jsx)(n.code,{children:"tsconfig.json"})," will only be used to provide TypeScript type definitions and will not affect the bundling result. In this case, the bundler will only read the ",(0,c.jsx)(n.code,{children:"alias"})," option as the path alias."]}),"\n",(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:"language-ts",children:"export default {\n  source: {\n    aliasStrategy: 'prefer-alias',\n  },\n};\n"})}),"\n",(0,c.jsx)(n.p,{children:"For example, if the following configurations are set at the same time:"}),"\n",(0,c.jsxs)(n.ul,{children:["\n",(0,c.jsx)(n.li,{children:"tsconfig paths:"}),"\n"]}),"\n",(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:"language-json",meta:'title="tsconfig.json"',children:'{\n  "compilerOptions": {\n    "paths": {\n      "@common/*": ["./src/common-1/*"],\n      "@utils/*": ["./src/utils/*"]\n    }\n  }\n}\n'})}),"\n",(0,c.jsxs)(n.ul,{children:["\n",(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:"source.alias"}),":"]}),"\n"]}),"\n",(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:"language-ts",children:"export default {\n  source: {\n    alias: {\n      '@common': './src/common-2',\n    },\n  },\n};\n"})}),"\n",(0,c.jsxs)(n.p,{children:["Since the tsconfig paths are only used to provide types, only the ",(0,c.jsx)(n.code,{children:"@common"})," alias will be effective, pointing to the ",(0,c.jsx)(n.code,{children:"./src/common-2"})," directory."]}),"\n",(0,c.jsxs)(n.p,{children:["In most cases, you don't need to use ",(0,c.jsx)(n.code,{children:"prefer-alias"}),", but you can consider using it if you need to dynamically generate some alias configurations. For example, generating the ",(0,c.jsx)(n.code,{children:"alias"})," option based on environment variables:"]}),"\n",(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:"language-ts",children:"export default {\n  source: {\n    alias: {\n      '@common':\n        process.env.NODE_ENV === 'production'\n          ? './src/common-prod'\n          : './src/common-dev',\n    },\n  },\n};\n"})})]})}(i=globalThis).__RSPRESS_PAGE_META||(i.__RSPRESS_PAGE_META={}),globalThis.__RSPRESS_PAGE_META["%2Fhome%2Frunner%2Fwork%2Fmodern.js%2Fmodern.js%2Fpackages%2Fdocument%2Fbuilder-doc%2Fdocs%2Fen%2Fconfig%2Fsource%2FaliasStrategy.md"]={toc:[{text:"prefer-tsconfig",id:"prefer-tsconfig",depth:3},{text:"prefer-alias",id:"prefer-alias",depth:3}],title:"",frontmatter:{}};var l=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=Object.assign({},(0,t.useMDXComponents)(),e.components).wrapper;return n?(0,c.jsx)(n,(0,o._)((0,r._)({},e),{children:(0,c.jsx)(a,(0,r._)({},e))})):a(e)}},69103:function(e,n,s){"use strict";s.r(n),s.d(n,{default:function(){return d}});var i,r=s("15169"),o=s("43932"),c=s("9880"),t=s("23169"),a=s("65949");function l(e){var n=Object.assign({h1:"h1",a:"a",div:"div",p:"p"},(0,t.useMDXComponents)(),e.components);return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsxs)(n.h1,{id:"sourcealiasstrategy",children:["source.aliasStrategy",(0,c.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#sourcealiasstrategy",children:"#"})]}),"\n",(0,c.jsxs)(n.div,{className:"modern-directive tip",children:[(0,c.jsx)(n.div,{className:"modern-directive-title",children:"TIP"}),(0,c.jsx)(n.div,{className:"modern-directive-content",children:(0,c.jsxs)(n.p,{children:["This config is provided by Modern.js Builder, more detail can see ",(0,c.jsx)(n.a,{href:"https://modernjs.dev/builder/en/api/config-source.html#sourcealiasstrategy",target:"_blank",rel:"noopener noreferrer",children:"source.aliasStrategy"}),".\n"]})})]}),"\n","\n",(0,c.jsx)(a.default,{})]})}(i=globalThis).__RSPRESS_PAGE_META||(i.__RSPRESS_PAGE_META={}),globalThis.__RSPRESS_PAGE_META["%2Fhome%2Frunner%2Fwork%2Fmodern.js%2Fmodern.js%2Fpackages%2Fdocument%2Fmain-doc%2Fdocs%2Fen%2Fconfigure%2Fapp%2Fsource%2Falias-strategy.mdx"]={toc:[],title:"source.aliasStrategy",frontmatter:{sidebar_label:"aliasStrategy"}};var d=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=Object.assign({},(0,t.useMDXComponents)(),e.components).wrapper;return n?(0,c.jsx)(n,(0,o._)((0,r._)({},e),{children:(0,c.jsx)(l,(0,r._)({},e))})):l(e)}}}]);