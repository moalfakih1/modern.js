(self.webpackChunk_modern_js_main_doc=self.webpackChunk_modern_js_main_doc||[]).push([["docs_zh_guides_basic-features_css_mdx"],{3174:function(e,s,n){"use strict";Object.defineProperty(s,"__esModule",{value:!0});!function(e,s){for(var n in s)Object.defineProperty(e,n,{enumerable:!0,get:s[n]})}(s,{frontmatter:function(){return d},title:function(){return l},toc:function(){return t},default:function(){return o}});var r=n("9880"),i=n("23169"),d={sidebar_position:2},l="CSS 开发方案",t=[{text:"使用 Less、Sass 和 Stylus",depth:2,id:"使用-less、sass-和-stylus"},{text:"使用 PostCSS",depth:2,id:"使用-postcss"},{text:"使用 CSS Modules",depth:2,id:"使用-css-modules"},{text:"使用 CSS-in-JS",depth:2,id:"使用-css-in-js"},{text:"使用 Tailwind CSS",depth:2,id:"使用-tailwind-css"},{text:"Tailwind CSS 版本",depth:3,id:"tailwind-css-版本"},{text:"浏览器兼容性",depth:3,id:"浏览器兼容性"},{text:"Theme 配置",depth:3,id:"theme-配置"}];function c(e){var s=Object.assign({h1:"h1",a:"a",p:"p",h2:"h2",code:"code",pre:"pre",div:"div",h3:"h3",ul:"ul",li:"li",blockquote:"blockquote"},(0,i.useMDXComponents)(),e.components);return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(s.h1,{id:"css-开发方案",children:["CSS 开发方案",(0,r.jsx)(s.a,{className:"header-anchor","aria-hidden":"true",href:"#css-开发方案",children:"#"})]}),"\n",(0,r.jsx)(s.p,{children:"Modern.js 内置多种常用的 CSS 开发方案，包括 Less / Sass / Stylus 预处理器、PostCSS、CSS Modules、CSS-in-JS 和 Tailwind CSS。"}),"\n",(0,r.jsxs)(s.h2,{id:"使用-less、sass-和-stylus",children:["使用 Less、Sass 和 Stylus",(0,r.jsx)(s.a,{className:"header-anchor","aria-hidden":"true",href:"#使用-less、sass-和-stylus",children:"#"})]}),"\n",(0,r.jsx)(s.p,{children:"Modern.js 内置了社区流行的 CSS 预处理器，包括 Less 和 Sass。"}),"\n",(0,r.jsxs)(s.p,{children:["默认情况下，你不需要对 Less 和 Sass 进行任何配置。如果你有自定义 loader 配置的需求，可以通过配置 ",(0,r.jsx)(s.a,{href:"/configure/app/tools/less",children:"tools.less"}),"、",(0,r.jsx)(s.a,{href:"/configure/app/tools/sass",children:"tools.sass"})," 来进行设置。"]}),"\n",(0,r.jsxs)(s.p,{children:["你也可以在 Modern.js 中使用 Stylus，只需要安装 Modern.js Builder 提供的 Stylus 插件即可，使用方式请参考 ",(0,r.jsx)(s.a,{href:"https://modernjs.dev/builder/plugins/plugin-stylus.html",target:"_blank",rel:"noopener noreferrer",children:"Stylus 插件"}),"。"]}),"\n",(0,r.jsxs)(s.h2,{id:"使用-postcss",children:["使用 PostCSS",(0,r.jsx)(s.a,{className:"header-anchor","aria-hidden":"true",href:"#使用-postcss",children:"#"})]}),"\n",(0,r.jsxs)(s.p,{children:["Modern.js 内置了 ",(0,r.jsx)(s.a,{href:"https://postcss.org/",target:"_blank",rel:"noopener noreferrer",children:"PostCSS"})," 来转换 CSS 代码。"]}),"\n",(0,r.jsxs)(s.p,{children:["请阅读 ",(0,r.jsx)(s.a,{href:"https://modernjs.dev/builder/guide/basic/css-usage.html#%E4%BD%BF%E7%94%A8-postcss",target:"_blank",rel:"noopener noreferrer",children:"Modern.js Builder - 使用 PostCSS"})," 了解更多用法。"]}),"\n",(0,r.jsxs)(s.h2,{id:"使用-css-modules",children:["使用 CSS Modules",(0,r.jsx)(s.a,{className:"header-anchor","aria-hidden":"true",href:"#使用-css-modules",children:"#"})]}),"\n",(0,r.jsxs)(s.p,{children:["请阅读 ",(0,r.jsx)(s.a,{href:"https://modernjs.dev/builder/guide/basic/css-modules.html",target:"_blank",rel:"noopener noreferrer",children:"使用 CSS Modules"})," 章节来了解 CSS Modules 的完整用法。"]}),"\n",(0,r.jsxs)(s.h2,{id:"使用-css-in-js",children:["使用 CSS-in-JS",(0,r.jsx)(s.a,{className:"header-anchor","aria-hidden":"true",href:"#使用-css-in-js",children:"#"})]}),"\n",(0,r.jsx)(s.p,{children:"CSS-in-JS 是一种可以将 CSS 样式写在 JS 文件里的技术。"}),"\n",(0,r.jsxs)(s.p,{children:["Modern.js 集成了社区常用的 CSS-in-JS 实现库 ",(0,r.jsx)(s.a,{href:"https://styled-components.com/",target:"_blank",rel:"noopener noreferrer",children:"styled-components"}),"，它使用 JavaScript 的新特性 ",(0,r.jsx)(s.a,{href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Template_literals#tagged_templates",target:"_blank",rel:"noopener noreferrer",children:"Tagged template"})," 编写组件的 CSS 样式。可以直接从 ",(0,r.jsx)(s.code,{children:"@modern-js/runtime/styled"})," 引入 ",(0,r.jsx)(s.a,{href:"https://styled-components.com/",target:"_blank",rel:"noopener noreferrer",children:"styled-components"})," 的 API 进行使用。"]}),"\n",(0,r.jsxs)(s.p,{children:["当需要编写一个内部字体为红色的 ",(0,r.jsx)(s.code,{children:"div"})," 组件时，可以如下实现："]}),"\n",(0,r.jsx)(s.pre,{children:(0,r.jsx)(s.code,{className:"language-js",children:"import styled from '@modern-js/runtime/styled';\n\nconst RedDiv = styled.div`\n  color: red;\n`;\n"})}),"\n",(0,r.jsxs)(s.p,{children:["当需要根据组件的 ",(0,r.jsx)(s.code,{children:"props"})," 动态设置组件样式时，例如 ",(0,r.jsx)(s.code,{children:"props"})," 的属性 ",(0,r.jsx)(s.code,{children:"primary"})," 为 ",(0,r.jsx)(s.code,{children:"true"})," 时，按钮的颜色为白色，其他情况为红色，实现代码如下："]}),"\n",(0,r.jsx)(s.pre,{children:(0,r.jsx)(s.code,{className:"language-js",children:"import styled from '@modern-js/runtime/styled';\n\nconst Button = styled.button`\n  color: ${props => (props.primary ? 'white' : 'red')};\n  font-size: 1em;\n`;\n"})}),"\n",(0,r.jsxs)(s.p,{children:["关于 styled-components 的更多用法，请参考 ",(0,r.jsx)(s.a,{href:"https://styled-components.com/",target:"_blank",rel:"noopener noreferrer",children:"styled-components 官网"}),"。"]}),"\n",(0,r.jsxs)(s.p,{children:["Modern.js 内部集成了 Babel 的 ",(0,r.jsx)(s.a,{href:"https://github.com/styled-components/babel-plugin-styled-components",target:"_blank",rel:"noopener noreferrer",children:"babel-plugin-styled-components"})," 插件，你可以通过 ",(0,r.jsx)(s.a,{href:"/configure/app/tools/styled-components",children:"tools.styledComponents"})," 对插件进行配置。"]}),"\n",(0,r.jsxs)(s.div,{className:"modern-directive tip",children:[(0,r.jsx)(s.div,{className:"modern-directive-title",children:"提示"}),(0,r.jsx)(s.div,{className:"modern-directive-content",children:(0,r.jsxs)(s.p,{children:["如果需要使用 ",(0,r.jsx)(s.a,{href:"https://www.npmjs.com/package/styled-jsx",target:"_blank",rel:"noopener noreferrer",children:"styled-jsx"}),"、",(0,r.jsx)(s.a,{href:"https://emotion.sh/",target:"_blank",rel:"noopener noreferrer",children:"Emotion"})," 等其他 CSS-in-JS 库，需要先安装对应库的依赖。具体使用方式请参考对应库的官网。\n"]})})]}),"\n",(0,r.jsxs)(s.h2,{id:"使用-tailwind-css",children:["使用 Tailwind CSS",(0,r.jsx)(s.a,{className:"header-anchor","aria-hidden":"true",href:"#使用-tailwind-css",children:"#"})]}),"\n",(0,r.jsxs)(s.p,{children:[(0,r.jsx)(s.a,{href:"https://tailwindcss.com/",target:"_blank",rel:"noopener noreferrer",children:"Tailwind CSS"})," 是一个以 Utility Class 为基础的 CSS 框架和设计系统，可以快速地为组件添加常用样式，同时支持主题样式的灵活扩展。在 Modern.js 中使用 ",(0,r.jsx)(s.a,{href:"https://tailwindcss.com/",target:"_blank",rel:"noopener noreferrer",children:"Tailwind CSS"}),"，只需要在项目根目录下执行 ",(0,r.jsx)(s.code,{children:"pnpm run new"})," 并开启。"]}),"\n",(0,r.jsx)(s.p,{children:"按照如下进行选择："}),"\n",(0,r.jsx)(s.pre,{children:(0,r.jsx)(s.code,{className:"language-bash",children:"? 请选择你想要的操作 启用可选功能\n? 启用可选功能 启用 Tailwind CSS 支持\n"})}),"\n",(0,r.jsxs)(s.p,{children:["在 ",(0,r.jsx)(s.code,{children:"modern.config.ts"})," 中注册 Tailwind 插件:"]}),"\n",(0,r.jsx)(s.pre,{children:(0,r.jsx)(s.code,{className:"language-ts",meta:'title="modern.config.ts"',children:"import tailwindcssPlugin from '@modern-js/plugin-tailwindcss';\n\nexport default defineConfig({\n  plugins: [..., tailwindcssPlugin()],\n});\n"})}),"\n",(0,r.jsxs)(s.p,{children:["使用时在入口的根组件(如 ",(0,r.jsx)(s.code,{children:"src/App.jsx"}),")添加如下代码："]}),"\n",(0,r.jsx)(s.pre,{children:(0,r.jsx)(s.code,{className:"language-js",children:"import 'tailwindcss/base.css';\nimport 'tailwindcss/components.css';\nimport 'tailwindcss/utilities.css';\n"})}),"\n",(0,r.jsx)(s.p,{children:"然后即可在各个组件中使用 Tailwind CSS 提供的 Utility Class 了："}),"\n",(0,r.jsx)(s.pre,{children:(0,r.jsx)(s.code,{className:"language-tsx",children:'const App = () => (\n  <div className="h-12 w-48">\n    <p className="text-xl font-medium text-black">hello world</p>\n  </div>\n);\n'})}),"\n",(0,r.jsxs)(s.div,{className:"modern-directive info",children:[(0,r.jsx)(s.div,{className:"modern-directive-title",children:"补充信息"}),(0,r.jsxs)(s.div,{className:"modern-directive-content",children:[(0,r.jsxs)(s.p,{children:["根据需求不同，你可以选择性的导入 Tailwind CSS 提供的 CSS 文件。由于使用 ",(0,r.jsx)(s.code,{children:"@tailwind"})," 与直接导入 CSS 文件的作用等价，因此关于 Tailwind CSS 提供的 CSS 文件的用途，可以参考 ",(0,r.jsxs)(s.a,{href:"https://tailwindcss.com/docs/functions-and-directives#tailwind",target:"_blank",rel:"noopener noreferrer",children:[(0,r.jsx)(s.code,{children:"@tailwind"})," 的使用"]})," 文档中注释里的内容。"]}),"\n"]})]}),"\n",(0,r.jsxs)(s.h3,{id:"tailwind-css-版本",children:["Tailwind CSS 版本",(0,r.jsx)(s.a,{className:"header-anchor","aria-hidden":"true",href:"#tailwind-css-版本",children:"#"})]}),"\n",(0,r.jsxs)(s.p,{children:["Modern.js 同时支持 Tailwind CSS v2 和 v3 版本，框架会识别项目 ",(0,r.jsx)(s.code,{children:"package.json"})," 中的 ",(0,r.jsx)(s.code,{children:"tailwindcss"})," 依赖版本，并启用相应的配置。默认情况下，我们会为你安装 Tailwind CSS v3 版本。"]}),"\n",(0,r.jsx)(s.p,{children:"如果你的项目仍在使用 Tailwind CSS v2，我们推荐你升级到 v3 以支持 JIT 等能力。关于 Tailwind CSS v2 与 v3 版本之间的差异，请参考以下文章："}),"\n",(0,r.jsxs)(s.ul,{children:["\n",(0,r.jsx)(s.li,{children:(0,r.jsx)(s.a,{href:"https://tailwindcss.com/blog/tailwindcss-v3",target:"_blank",rel:"noopener noreferrer",children:"Tailwind CSS v3.0"})}),"\n",(0,r.jsx)(s.li,{children:(0,r.jsx)(s.a,{href:"https://tailwindcss.com/docs/upgrade-guide",target:"_blank",rel:"noopener noreferrer",children:"Upgrade Guide"})}),"\n"]}),"\n",(0,r.jsxs)(s.h3,{id:"浏览器兼容性",children:["浏览器兼容性",(0,r.jsx)(s.a,{className:"header-anchor","aria-hidden":"true",href:"#浏览器兼容性",children:"#"})]}),"\n",(0,r.jsx)(s.p,{children:"Tailwind CSS v2 和 v3 均不支持 IE 11 浏览器，相关背景请参考："}),"\n",(0,r.jsxs)(s.ul,{children:["\n",(0,r.jsxs)(s.li,{children:[(0,r.jsx)(s.a,{href:"https://tailwindcss.com/docs/browser-support",target:"_blank",rel:"noopener noreferrer",children:"Tailwind CSS v3 - Browser Support"}),"。"]}),"\n",(0,r.jsx)(s.li,{children:(0,r.jsx)(s.a,{href:"https://v2.tailwindcss.com/docs/browser-support",target:"_blank",rel:"noopener noreferrer",children:"Tailwind CSS v2 - Browser Support"})}),"\n"]}),"\n",(0,r.jsx)(s.p,{children:"如果你在 IE 11 浏览器上使用 Tailwind CSS，可能会出现部分样式不可用的现象，请谨慎使用。"}),"\n",(0,r.jsxs)(s.h3,{id:"theme-配置",children:["Theme 配置",(0,r.jsx)(s.a,{className:"header-anchor","aria-hidden":"true",href:"#theme-配置",children:"#"})]}),"\n",(0,r.jsxs)(s.p,{children:["当需要自定义 Tailwind CSS 的 ",(0,r.jsx)(s.a,{href:"https://tailwindcss.com/docs/theme",target:"_blank",rel:"noopener noreferrer",children:"theme"})," 配置的时候，可以在配置 ",(0,r.jsx)(s.a,{href:"/configure/app/source/design-system",children:(0,r.jsx)(s.code,{children:"source.designSystem"})})," 中修改，例如，颜色主题中增加一个 ",(0,r.jsx)(s.code,{children:"primary"}),"："]}),"\n",(0,r.jsx)(s.pre,{children:(0,r.jsx)(s.code,{className:"language-ts",meta:'title="modern.config.ts"',children:"export default defineConfig({\n  source: {\n    designSystem: {\n      extend: {\n        colors: {\n          primary: '#5c6ac4',\n        },\n      },\n    },\n  },\n});\n"})}),"\n",(0,r.jsxs)(s.p,{children:["当需要对 Tailwind CSS 做 ",(0,r.jsx)(s.a,{href:"https://tailwindcss.com/docs/theme",target:"_blank",rel:"noopener noreferrer",children:"theme"})," 以外的其他特殊配置时，可以在 ",(0,r.jsx)(s.a,{href:"/configure/app/tools/tailwindcss",children:(0,r.jsx)(s.code,{children:"tools.tailwindcss"})})," 中配置，例如设置 ",(0,r.jsx)(s.code,{children:"variants"}),"："]}),"\n",(0,r.jsx)(s.pre,{children:(0,r.jsx)(s.code,{className:"language-ts",meta:'title="modern.config.ts"',children:"export default defineConfig({\n  tools: {\n    tailwindcss: {\n      variants: {\n        extend: {\n          backgroundColor: ['active'],\n        },\n      },\n    },\n  },\n});\n"})}),"\n",(0,r.jsxs)(s.blockquote,{children:["\n",(0,r.jsxs)(s.p,{children:["当你为项目配置 Tailwind CSS 的时候，",(0,r.jsx)(s.a,{href:"/configure/app/source/design-system",children:"source.designSystem"})," 和 ",(0,r.jsx)(s.a,{href:"/configure/app/tools/tailwindcss",children:"tools.tailwindcss"})," 这两个配置的组合等价于单独配置了一个 ",(0,r.jsx)(s.code,{children:"tailwindcss.config.js"})," 文件。其中 ",(0,r.jsx)(s.a,{href:"/configure/app/source/design-system",children:"source.designSystem"})," 等效于 Tailwind CSS 的 ",(0,r.jsx)(s.a,{href:"https://v2.tailwindcss.com/docs/configuration#theme",target:"_blank",rel:"noopener noreferrer",children:"theme"})," 配置。"]}),"\n"]})]})}var o=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},s=Object.assign({},(0,i.useMDXComponents)(),e.components).wrapper;return s?(0,r.jsx)(s,Object.assign({},e,{children:(0,r.jsx)(c,e)})):c(e)}}}]);