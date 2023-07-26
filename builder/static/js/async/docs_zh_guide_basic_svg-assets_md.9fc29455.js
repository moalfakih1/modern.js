(self.webpackChunk_modern_js_builder_doc=self.webpackChunk_modern_js_builder_doc||[]).push([["docs_zh_guide_basic_svg-assets_md"],{3307:function(e,n,s){"use strict";s.r(n),s.d(n,{default:function(){return i}});var r,t=s("15169"),c=s("43932"),a=s("9880"),d=s("23169");function o(e){var n=Object.assign({h1:"h1",a:"a",p:"p",div:"div",h2:"h2",code:"code",pre:"pre"},(0,d.useMDXComponents)(),e.components);return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsxs)(n.h1,{id:"引用-svg-资源",children:["引用 SVG 资源",(0,a.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#引用-svg-资源",children:"#"})]}),"\n",(0,a.jsx)(n.p,{children:"Builder 支持在代码中引用 SVG 资源，并将 SVG 图片转换为 React 组件或 URL。"}),"\n",(0,a.jsxs)(n.div,{className:"modern-directive tip",children:[(0,a.jsx)(n.div,{className:"modern-directive-title",children:"什么是 SVG"}),(0,a.jsx)(n.div,{className:"modern-directive-content",children:(0,a.jsx)(n.p,{children:"SVG 是 Scalable Vector Graphics 的缩写，意为可伸缩矢量图形。SVG 是一种用来描述二维矢量图形的 XML-based 格式，可以用来创建可以无限放大或缩小而不失真的图像。因为 SVG 图形是由矢量图形元素组成的，所以可以轻松地在各种尺寸和分辨率下渲染。"})})]}),"\n",(0,a.jsxs)(n.h2,{id:"在-js-文件中引用",children:["在 JS 文件中引用",(0,a.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#在-js-文件中引用",children:"#"})]}),"\n",(0,a.jsxs)(n.p,{children:["在 JS 文件中引用 SVG 资源时，如果你具名导入 ",(0,a.jsx)(n.code,{children:"ReactComponent"})," 对象，Builder 会调用 ",(0,a.jsx)(n.a,{href:"https://react-svgr.com/",target:"_blank",rel:"noopener noreferrer",children:"SVGR"}),"，将 SVG 图片转换为一个 React 组件。"]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-tsx",meta:'title="src/component/Logo.tsx"',children:"import { ReactComponent as Logo } from './static/logo.svg';\n\nexport default () => <Logo />;\n"})}),"\n",(0,a.jsx)(n.p,{children:"如果你使用默认导入，那么 SVG 会被当做普通的静态资源来处理，你会得到一个 URL 字符串："}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-tsx",meta:'title="src/component/Logo.tsx"',children:"import logoURL from './static/logo.svg';\n\nconsole.log(logoURL); // => \"/static/logo.6c12aba3.png\"\n"})}),"\n",(0,a.jsxs)(n.h2,{id:"修改默认导出",children:["修改默认导出",(0,a.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#修改默认导出",children:"#"})]}),"\n",(0,a.jsxs)(n.p,{children:["你可以通过 ",(0,a.jsx)(n.a,{href:"/api/config-output#outputsvgdefaultexport",children:"output.svgDefaultExport"})," 配置项来修改 SVG 文件默认导出的内容，比如把默认导出的内容设置为 React 组件："]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-ts",children:"export default {\n  output: {\n    svgDefaultExport: 'component',\n  },\n};\n"})}),"\n",(0,a.jsx)(n.p,{children:"此时再使用默认导入，你会得到一个 React 组件，而不是 URL："}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-tsx",meta:'title="src/component/Logo.tsx"',children:"import Logo from './static/logo.svg';\n\nexport default () => <Logo />;\n"})}),"\n",(0,a.jsxs)(n.h2,{id:"在-css-文件中引用",children:["在 CSS 文件中引用",(0,a.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#在-css-文件中引用",children:"#"})]}),"\n",(0,a.jsx)(n.p,{children:"在 CSS 文件中引用 SVG 资源时，SVG 会被当做一个普通的静态资源来处理，你会得到一个 URL："}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-css",children:".logo {\n  background-image: url('../static/logo.svg');\n}\n"})}),"\n",(0,a.jsxs)(n.h2,{id:"静态资源处理",children:["静态资源处理",(0,a.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#静态资源处理",children:"#"})]}),"\n",(0,a.jsx)(n.p,{children:"当 SVG 不是作为 React 组件，而是作为一个普通的静态资源被引用时，它的处理逻辑和其他静态资源完全一致，也会受到静态资源内联、URL 前缀等规则的影响。"}),"\n",(0,a.jsxs)(n.p,{children:["请阅读 ",(0,a.jsx)(n.a,{href:"/guide/basic/static-assets",children:"引用静态资源"})," 章节来了解静态资源的处理规则。"]}),"\n",(0,a.jsxs)(n.h2,{id:"禁用-svgr-处理",children:["禁用 SVGR 处理",(0,a.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#禁用-svgr-处理",children:"#"})]}),"\n",(0,a.jsxs)(n.p,{children:["默认情况下，在 JS 文件中引用 SVG 资源时，Builder 会调用 SVGR，将 SVG 图片转换为一个 React 组件。\n如果你确定项目内的所有 SVG 资源都没有当成 React 组件使用时，可以通过将 ",(0,a.jsx)(n.a,{href:"/api/config-output#outputdisablesvgr",children:(0,a.jsx)(n.code,{children:"disableSvgr"})})," 设置为 true 来关闭此项转换，以提升构建性能。"]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-js",children:"export default {\n  output: {\n    disableSvgr: true,\n  },\n};\n"})}),"\n",(0,a.jsxs)(n.h2,{id:"添加类型声明",children:["添加类型声明",(0,a.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#添加类型声明",children:"#"})]}),"\n",(0,a.jsx)(n.p,{children:"当你在 TypeScript 代码中引用 SVG 资源时，TypeScript 可能会提示该模块缺少类型定义："}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{children:"TS2307: Cannot find module './logo.svg' or its corresponding type declarations.\n"})}),"\n",(0,a.jsxs)(n.p,{children:["此时你需要为 SVG 资源添加类型声明文件，请在项目中创建 ",(0,a.jsx)(n.code,{children:"src/global.d.ts"})," 文件，并添加相应的类型声明："]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-ts",children:"declare module '*.svg' {\n  export const ReactComponent: React.FunctionComponent<\n    React.SVGProps<SVGSVGElement>\n  >;\n\n  const content: string;\n  export default content;\n}\n"})}),"\n",(0,a.jsxs)(n.p,{children:["如果你将 ",(0,a.jsx)(n.code,{children:"svgDefaultExport"})," 设置为 ",(0,a.jsx)(n.code,{children:"'component'"}),"，则将类型声明修改为："]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-ts",children:"declare module '*.svg' {\n  export const ReactComponent: React.FunctionComponent<\n    React.SVGProps<SVGSVGElement>\n  >;\n\n  export default ReactComponent;\n}\n"})}),"\n",(0,a.jsxs)(n.p,{children:["添加类型声明后，如果依然存在上述错误提示，请尝试重启当前 IDE，或者调整 ",(0,a.jsx)(n.code,{children:"global.d.ts"})," 所在的目录，使 TypeScript 能够正确识别类型定义。"]})]})}(r=globalThis).__RSPRESS_PAGE_META||(r.__RSPRESS_PAGE_META={}),globalThis.__RSPRESS_PAGE_META["zh%2Fguide%2Fbasic%2Fsvg-assets.md"]={toc:[{text:"在 JS 文件中引用",id:"在-js-文件中引用",depth:2},{text:"修改默认导出",id:"修改默认导出",depth:2},{text:"在 CSS 文件中引用",id:"在-css-文件中引用",depth:2},{text:"静态资源处理",id:"静态资源处理",depth:2},{text:"禁用 SVGR 处理",id:"禁用-svgr-处理",depth:2},{text:"添加类型声明",id:"添加类型声明",depth:2}],title:"引用 SVG 资源",frontmatter:{}};var i=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=Object.assign({},(0,d.useMDXComponents)(),e.components).wrapper;return n?(0,a.jsx)(n,(0,c._)((0,t._)({},e),{children:(0,a.jsx)(o,(0,t._)({},e))})):o(e)}}}]);