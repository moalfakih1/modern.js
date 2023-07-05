(self.webpackChunk_modern_js_main_doc=self.webpackChunk_modern_js_main_doc||[]).push([["docs_zh_configure_app_tools_styled-components_mdx"],{46290:function(e,n,s){"use strict";s.r(n),s.d(n,{default:function(){return i}});var o,r=s("15169"),t=s("43932"),l=s("9880"),c=s("23169");function d(e){var n=Object.assign({ul:"ul",li:"li",strong:"strong",code:"code",pre:"pre",p:"p",a:"a"},(0,c.useMDXComponents)(),e.components);return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsxs)(n.li,{children:[(0,l.jsx)(n.strong,{children:"类型："})," ",(0,l.jsx)(n.code,{children:"Object | Function | false"})]}),"\n",(0,l.jsx)(n.li,{children:(0,l.jsx)(n.strong,{children:"默认值："})}),"\n"]}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-js",children:"{\n  displayName: true,\n  // 在 SSR 构建中 isSSR 为 true\n  ssr: isSSR,\n  // 在生产环境构建时启用 `pure` 来优化包体积\n  pure: isProd,\n  transpileTemplateLiterals: true,\n}\n"})}),"\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsxs)(n.li,{children:[(0,l.jsx)(n.strong,{children:"打包工具："})," ",(0,l.jsx)(n.code,{children:"仅支持 webpack"})]}),"\n"]}),"\n",(0,l.jsxs)(n.p,{children:["对应 ",(0,l.jsx)(n.a,{href:"https://github.com/styled-components/babel-plugin-styled-components",target:"_blank",rel:"noopener noreferrer",children:"babel-plugin-styled-components"})," 或使用 SWC 时 ",(0,l.jsx)(n.a,{href:"https://github.com/swc-project/plugins/tree/main/packages/styled-components",target:"_blank",rel:"noopener noreferrer",children:"@swc/plugin-styled-components"})," 的配置。 值为 ",(0,l.jsx)(n.code,{children:"Object"})," 类型时，利用 Object.assign 函数与默认配置合并。比如:"]}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-js",children:"export default {\n  tools: {\n    styledComponents: {\n      pure: false,\n    },\n  },\n};\n"})}),"\n",(0,l.jsxs)(n.p,{children:["值为 ",(0,l.jsx)(n.code,{children:"Function"})," 类型时，第一个参数为默认配置，第二个参数提供了一些可以直接调用的工具函数："]}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-js",children:"export default {\n  tools: {\n    styledComponents(config) {\n      // 修改 pure 配置\n      config.pure = false;\n    },\n  },\n};\n"})}),"\n",(0,l.jsxs)(n.p,{children:["该特性默认启用，可以配置为 ",(0,l.jsx)(n.code,{children:"false"})," 关闭该行为。"]})]})}(o=globalThis).__RSPRESS_PAGE_META||(o.__RSPRESS_PAGE_META={}),globalThis.__RSPRESS_PAGE_META["%2Fhome%2Frunner%2Fwork%2Fmodern.js%2Fmodern.js%2Fpackages%2Fdocument%2Fbuilder-doc%2Fdocs%2Fzh%2Fconfig%2Ftools%2FstyledComponents.md"]={toc:[],title:"",frontmatter:{}};var i=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=Object.assign({},(0,c.useMDXComponents)(),e.components).wrapper;return n?(0,l.jsx)(n,(0,t._)((0,r._)({},e),{children:(0,l.jsx)(d,(0,r._)({},e))})):d(e)}},88217:function(e,n,s){"use strict";s.r(n),s.d(n,{default:function(){return a}});var o,r=s("15169"),t=s("43932"),l=s("9880"),c=s("23169"),d=s("46290");function i(e){var n=Object.assign({h1:"h1",a:"a",div:"div",p:"p"},(0,c.useMDXComponents)(),e.components);return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsxs)(n.h1,{id:"toolsstyledcomponents",children:["tools.styledComponents",(0,l.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#toolsstyledcomponents",children:"#"})]}),"\n",(0,l.jsxs)(n.div,{className:"modern-directive tip",children:[(0,l.jsx)(n.div,{className:"modern-directive-title",children:"TIP"}),(0,l.jsx)(n.div,{className:"modern-directive-content",children:(0,l.jsxs)(n.p,{children:["该配置由 Modern.js Builder 提供，更多信息可参考 ",(0,l.jsx)(n.a,{href:"https://modernjs.dev/builder/api/config-tools.html#toolsstyledcomponents",target:"_blank",rel:"noopener noreferrer",children:"tools.styledComponents"}),"。\n"]})})]}),"\n","\n",(0,l.jsx)(d.default,{})]})}(o=globalThis).__RSPRESS_PAGE_META||(o.__RSPRESS_PAGE_META={}),globalThis.__RSPRESS_PAGE_META["%2Fhome%2Frunner%2Fwork%2Fmodern.js%2Fmodern.js%2Fpackages%2Fdocument%2Fmain-doc%2Fdocs%2Fzh%2Fconfigure%2Fapp%2Ftools%2Fstyled-components.mdx"]={toc:[],title:"tools.styledComponents",frontmatter:{sidebar_label:"styledComponents"}};var a=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=Object.assign({},(0,c.useMDXComponents)(),e.components).wrapper;return n?(0,l.jsx)(n,(0,t._)((0,r._)({},e),{children:(0,l.jsx)(i,(0,r._)({},e))})):i(e)}}}]);