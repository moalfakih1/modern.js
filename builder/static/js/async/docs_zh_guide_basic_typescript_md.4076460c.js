(self.webpackChunk_modern_js_builder_doc=self.webpackChunk_modern_js_builder_doc||[]).push([["docs_zh_guide_basic_typescript_md"],{13458:function(e,r,n){"use strict";n.r(r),n.d(r,{default:function(){return a}});var s,c=n("15169"),i=n("43932"),t=n("9880"),l=n("23169");function d(e){var r=Object.assign({h1:"h1",a:"a",p:"p",code:"code",h2:"h2",strong:"strong",pre:"pre",h3:"h3",div:"div"},(0,l.useMDXComponents)(),e.components);return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)(r.h1,{id:"使用-typescript",children:["使用 TypeScript",(0,t.jsx)(r.a,{className:"header-anchor","aria-hidden":"true",href:"#使用-typescript",children:"#"})]}),"\n",(0,t.jsxs)(r.p,{children:["Builder 对 TypeScript 的转译和类型检查做了默认支持，无需任何配置即可在项目中使用 ",(0,t.jsx)(r.code,{children:".ts"})," 和 ",(0,t.jsx)(r.code,{children:".tsx"})," 文件。"]}),"\n",(0,t.jsxs)(r.h2,{id:"typescript-转译",children:["TypeScript 转译",(0,t.jsx)(r.a,{className:"header-anchor","aria-hidden":"true",href:"#typescript-转译",children:"#"})]}),"\n",(0,t.jsx)(r.p,{children:"Builder 有三种可选方式处理 TypeScript 文件。"}),"\n",(0,t.jsx)(r.p,{children:(0,t.jsx)(r.strong,{children:"Babel"})}),"\n",(0,t.jsxs)(r.p,{children:["在默认配置下，源码中所有的 TypeScript 文件会经过 Babel 转译。\n可能你在查阅较老旧的资料时会发现，Babel 无法处理 ",(0,t.jsx)(r.code,{children:"const enum"})," 以及 ",(0,t.jsx)(r.code,{children:"namespace alias"})," 语法，但是其实在 ",(0,t.jsx)(r.a,{href:"https://babeljs.io/blog/2021/07/26/7.15.0",target:"_blank",rel:"noopener noreferrer",children:"7.15"})," 版本已经得到了支持。Babel 无需手动开启，直接在项目中使用 TypeScript 文件即可。"]}),"\n",(0,t.jsx)(r.p,{children:(0,t.jsx)(r.strong,{children:"ts-loader"})}),"\n",(0,t.jsx)(r.p,{children:"ts-loader 使用 TypeScript 官方的 TSC 转译。当开启 ts-loader 后 TypeScript 文件不会再经过 Babel 编译处理，但处理后的 JavaScript 产物仍然会由 Babel 进行语法降级以及 Polyfill 注入。"}),"\n",(0,t.jsx)(r.p,{children:"开启 ts-loader(使用默认配置):"}),"\n",(0,t.jsx)(r.pre,{children:(0,t.jsx)(r.code,{className:"language-ts",children:"export default {\n  tools: {\n    tsLoader: {},\n  },\n};\n"})}),"\n",(0,t.jsxs)(r.p,{children:["更详细配置可见 ",(0,t.jsx)(r.a,{href:"/api/config-tools#toolstsloader",children:"tools.tsLoader"}),"。\n如果开启 ts-loader，默认不会启用类型检查，只会进行转译。"]}),"\n",(0,t.jsx)(r.p,{children:(0,t.jsx)(r.strong,{children:"SWC"})}),"\n",(0,t.jsxs)(r.p,{children:["如果想要更快的项目构建速度，并且项目没有依赖某些自定义的 Babel 插件，那么也可以选择 SWC 来对 JavaScript 和 TypeScript 进行转译和压缩。Builder 的 SWC 插件默认支持 TypeScript, TSX, Decorator，使用方式可见 ",(0,t.jsx)(r.a,{href:"/plugins/plugin-swc",children:"SWC 插件"}),"。"]}),"\n",(0,t.jsxs)(r.h3,{id:"为什么默认使用-babel",children:["为什么默认使用 Babel",(0,t.jsx)(r.a,{className:"header-anchor","aria-hidden":"true",href:"#为什么默认使用-babel",children:"#"})]}),"\n",(0,t.jsx)(r.p,{children:"Babel 除了没有类型检查以外，对 TypeScript 语法支持已经非常完善，而类型检查可以借助另外的工具更好地进行。转译到低版本的 JavaScript 时，某些语法 Babel 会处理得更符合标准，例如 Babel 会将类成员初始化为 undefined，将类方法标记不可枚举等行为。如果启用 ts-loader，为了更精确的语法降级和 Polyfill，最后还是会将处理后的产物再次经过 Babel 处理，产生不必要的性能开销。"}),"\n",(0,t.jsxs)(r.h2,{id:"类型检查",children:["类型检查",(0,t.jsx)(r.a,{className:"header-anchor","aria-hidden":"true",href:"#类型检查",children:"#"})]}),"\n",(0,t.jsxs)(r.p,{children:["目前生产可用的类型检查工具只有官方的 TSC，TSC 类型检查耗时在大项目中往往是很慢的过程，Builder 中默认使用 tsChecker(",(0,t.jsx)(r.a,{href:"https://github.com/TypeStrong/fork-ts-checker-webpack-plugin",target:"_blank",rel:"noopener noreferrer",children:"fork-ts-checker-webpack-plugin"}),") 在构建过程中异步进行类型检查，不阻塞项目的启动。"]}),"\n",(0,t.jsx)(r.p,{children:"配置 tsChecker(使用默认配置):"}),"\n",(0,t.jsx)(r.pre,{children:(0,t.jsx)(r.code,{className:"language-ts",children:"export default {\n  tools: {\n    tsChecker: {},\n  },\n};\n"})}),"\n",(0,t.jsxs)(r.p,{children:["更多配置可见 ",(0,t.jsx)(r.a,{href:"/api/config-tools#toolstschecker",children:"tsChecker 配置"}),"。"]}),"\n",(0,t.jsxs)(r.p,{children:["如果开启 ts-loader 并且手动配置了 ",(0,t.jsx)(r.code,{children:"compileOnly: false"}),"，请关闭 tsChecker，避免重复类型检查。"]}),"\n",(0,t.jsxs)(r.div,{className:"modern-directive tip",children:[(0,t.jsx)(r.div,{className:"modern-directive-title",children:"STC"}),(0,t.jsx)(r.div,{className:"modern-directive-content",children:(0,t.jsxs)(r.p,{children:["SWC 作者新开源的基于 Rust 的类型检查工具 ",(0,t.jsx)(r.a,{href:"https://github.com/dudykr/stc",target:"_blank",rel:"noopener noreferrer",children:"STC"})," 目前还不可用于生产，还在起步阶段，不推荐用于项目中，等待更成熟之后，我们会考虑集成到 Builder 的 SWC 插件中作为实验功能，敬请期待。\n"]})})]})]})}(s=globalThis).__RSPRESS_PAGE_META||(s.__RSPRESS_PAGE_META={}),globalThis.__RSPRESS_PAGE_META["%2Fhome%2Frunner%2Fwork%2Fmodern.js%2Fmodern.js%2Fpackages%2Fdocument%2Fbuilder-doc%2Fdocs%2Fzh%2Fguide%2Fbasic%2Ftypescript.md"]={toc:[{text:"TypeScript 转译",id:"typescript-转译",depth:2},{text:"为什么默认使用 Babel",id:"为什么默认使用-babel",depth:3},{text:"类型检查",id:"类型检查",depth:2}],title:"使用 TypeScript",frontmatter:{}};var a=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},r=Object.assign({},(0,l.useMDXComponents)(),e.components).wrapper;return r?(0,t.jsx)(r,(0,i._)((0,c._)({},e),{children:(0,t.jsx)(d,(0,c._)({},e))})):d(e)}}}]);