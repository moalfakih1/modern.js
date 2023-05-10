(self.webpackChunk_modern_js_doc_tools_doc=self.webpackChunk_modern_js_doc_tools_doc||[]).push([["docs_zh_guide_use-mdx_mdx"],{62943:function(e,n,s){"use strict";Object.defineProperty(n,"__esModule",{value:!0});!function(e,n){for(var s in n)Object.defineProperty(e,s,{enumerable:!0,get:n[s]})}(n,{frontmatter:function(){return r},toc:function(){return a},title:function(){return i},default:function(){return t}});var d=s("9880"),c=s("23169"),l=s.ir(s("86065")),r=void 0,a=[{id:"markdown",text:"Markdown",depth:2},{id:"使用组件",text:"使用组件",depth:2},{id:"front-matter",text:"Front Matter",depth:2},{id:"自定义容器",text:"自定义容器",depth:2},{id:"代码块",text:"代码块",depth:2},{id:"基本使用",text:"基本使用",depth:3},{id:"代码行高亮",text:"代码行高亮",depth:3},{id:"显示代码行号",text:"显示代码行号",depth:3},{id:"开启-rust-版本编译器",text:"开启 Rust 版本编译器",depth:2}],i="使用 MDX";function o(e){var n=Object.assign({h1:"h1",a:"a",p:"p",h2:"h2",div:"div",pre:"pre",code:"code",blockquote:"blockquote",strong:"strong",h3:"h3"},(0,c.useMDXComponents)(),e.components);return(0,d.jsxs)(d.Fragment,{children:[(0,d.jsxs)(n.h1,{id:"使用-mdx",children:[(0,d.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#使用-mdx",children:"#"}),"使用 MDX"]}),"\n",(0,d.jsxs)(n.p,{children:["Modern.js Doc 支持 ",(0,d.jsx)(n.a,{href:"https://mdxjs.com/",target:"_blank",rel:"noopener noreferrer",children:"MDX"}),"，这是一种功能强大的内容开发方式。"]}),"\n",(0,d.jsxs)(n.h2,{id:"markdown",children:[(0,d.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#markdown",children:"#"}),"Markdown"]}),"\n",(0,d.jsx)(n.p,{children:"MDX 是 Markdown 的超集，这意味着你可以像往常一样编写 Markdown 文件。例如："}),"\n",(0,d.jsxs)(n.div,{className:"language-md",children:[(0,d.jsx)(n.div,{className:""}),(0,d.jsx)(n.div,{className:"modern-code-content",children:(0,d.jsx)(n.pre,{className:"code",children:(0,d.jsx)(n.code,{className:"language-md",children:"# Hello World\n"})})})]}),"\n",(0,d.jsxs)(n.h2,{id:"使用组件",children:[(0,d.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#使用组件",children:"#"}),"使用组件"]}),"\n",(0,d.jsxs)(n.p,{children:["当你想在 Markdown 文件中使用 React 组件时，你应该使用 ",(0,d.jsx)(n.code,{children:".mdx"})," 扩展名来命名你的文件。例如："]}),"\n",(0,d.jsxs)(n.div,{className:"language-mdx",children:[(0,d.jsx)(n.div,{className:""}),(0,d.jsx)(n.div,{className:"modern-code-content",children:(0,d.jsx)(n.pre,{className:"code",children:(0,d.jsx)(n.code,{className:"language-mdx",children:"// docs/index.mdx\nimport { CustomComponent } from './custom';\n\n# Hello World\n\n<CustomComponent />\n"})})})]}),"\n",(0,d.jsxs)(n.h2,{id:"front-matter",children:[(0,d.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#front-matter",children:"#"}),"Front Matter"]}),"\n",(0,d.jsx)(n.p,{children:"你可以在 Markdown 文件的开头添加 Front Matter，它是一个 YAML 格式的对象，用于定义一些元数据。例如："}),"\n",(0,d.jsxs)(n.div,{className:"language-yaml",children:[(0,d.jsx)(n.div,{className:""}),(0,d.jsx)(n.div,{className:"modern-code-content",children:(0,d.jsx)(n.pre,{className:"code",children:(0,d.jsx)(n.code,{className:"language-yaml",children:"---\ntitle: Hello World\n---\n"})})})]}),"\n",(0,d.jsxs)(n.blockquote,{children:["\n",(0,d.jsx)(n.p,{children:"注意：默认情况下，Modern.js Doc 使用 h1 标题作为 html 的标题。"}),"\n"]}),"\n",(0,d.jsx)(n.p,{children:"你还可以在正文中访问 Front Mattter 中定义的属性，例如："}),"\n",(0,d.jsxs)(n.div,{className:"language-mdx",children:[(0,d.jsx)(n.div,{className:""}),(0,d.jsx)(n.div,{className:"modern-code-content",children:(0,d.jsx)(n.pre,{className:"code",children:(0,d.jsx)(n.code,{className:"language-mdx",children:"---\ntitle: Hello World\n---\n\n# {frontmatter.title}\n"})})})]}),"\n",(0,d.jsxs)(n.p,{children:["前面定义的属性将作为 ",(0,d.jsx)(n.code,{children:"frontmatter"})," 属性传递给组件。所以最终输出将是："]}),"\n",(0,d.jsxs)(n.div,{className:"language-html",children:[(0,d.jsx)(n.div,{className:""}),(0,d.jsx)(n.div,{className:"modern-code-content",children:(0,d.jsx)(n.pre,{className:"code",children:(0,d.jsx)(n.code,{className:"language-html",children:"<h1>Hello World</h1>\n"})})})]}),"\n",(0,d.jsxs)(n.h2,{id:"自定义容器",children:[(0,d.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#自定义容器",children:"#"}),"自定义容器"]}),"\n",(0,d.jsxs)(n.p,{children:["你可以使用 ",(0,d.jsx)(n.code,{children:":::"})," 语法来创建自定义容器，且支持自定义标题。例如："]}),"\n",(0,d.jsx)(n.p,{children:(0,d.jsx)(n.strong,{children:"输入："})}),"\n",(0,d.jsxs)(n.div,{className:"language-markdown",children:[(0,d.jsx)(n.div,{className:""}),(0,d.jsx)(n.div,{className:"modern-code-content",children:(0,d.jsx)(n.pre,{className:"code",children:(0,d.jsx)(n.code,{className:"language-markdown",children:":::tip\n这是一个`tip`类型的`block`\n:::\n\n:::info\n这是一个`info`类型的`block`\n:::\n\n:::warning\n这是一个`warning`类型的`block`\n:::\n\n:::danger\n这是一个`danger`类型的`block`\n:::\n\n:::tip 自定义标题\n自定义标题的 `block`\n:::\n\n:::tip{title=自定义标题}\n自定义标题的 `block`\n:::\n"})})})]}),"\n",(0,d.jsx)(n.p,{children:(0,d.jsx)(n.strong,{children:"输出："})}),"\n",(0,d.jsxs)(n.div,{className:"modern-directive tip",children:[(0,d.jsx)(n.div,{className:"modern-directive-title",children:"TIP"}),(0,d.jsx)(n.div,{className:"modern-directive-content",children:(0,d.jsxs)(n.p,{children:["\n这是一个 ",(0,d.jsx)(n.code,{children:"tip"})," 类型的 ",(0,d.jsx)(n.code,{children:"block"})]})})]}),"\n",(0,d.jsxs)(n.div,{className:"modern-directive info",children:[(0,d.jsx)(n.div,{className:"modern-directive-title",children:"INFO"}),(0,d.jsx)(n.div,{className:"modern-directive-content",children:(0,d.jsxs)(n.p,{children:["\n这是一个 ",(0,d.jsx)(n.code,{children:"info"})," 类型的 ",(0,d.jsx)(n.code,{children:"block"})]})})]}),"\n",(0,d.jsxs)(n.div,{className:"modern-directive warning",children:[(0,d.jsx)(n.div,{className:"modern-directive-title",children:"WARNING"}),(0,d.jsx)(n.div,{className:"modern-directive-content",children:(0,d.jsxs)(n.p,{children:["\n这是一个 ",(0,d.jsx)(n.code,{children:"warning"})," 类型的 ",(0,d.jsx)(n.code,{children:"block"})]})})]}),"\n",(0,d.jsxs)(n.div,{className:"modern-directive danger",children:[(0,d.jsx)(n.div,{className:"modern-directive-title",children:"DANGER"}),(0,d.jsx)(n.div,{className:"modern-directive-content",children:(0,d.jsxs)(n.p,{children:["\n这是一个 ",(0,d.jsx)(n.code,{children:"danger"})," 类型的 ",(0,d.jsx)(n.code,{children:"block"})]})})]}),"\n",(0,d.jsxs)(n.div,{className:"modern-directive tip",children:[(0,d.jsx)(n.div,{className:"modern-directive-title",children:"自定义标题"}),(0,d.jsx)(n.div,{className:"modern-directive-content",children:(0,d.jsxs)(n.p,{children:["\n自定义标题的 ",(0,d.jsx)(n.code,{children:"block"})]})})]}),"\n",(0,d.jsxs)(n.div,{className:"modern-directive tip",children:[(0,d.jsx)(n.div,{className:"modern-directive-title",children:"自定义标题"}),(0,d.jsx)(n.div,{className:"modern-directive-content",children:(0,d.jsxs)(n.p,{children:["\n自定义标题的 ",(0,d.jsx)(n.code,{children:"block"})]})})]}),"\n",(0,d.jsxs)(n.h2,{id:"代码块",children:[(0,d.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#代码块",children:"#"}),"代码块"]}),"\n",(0,d.jsxs)(n.h3,{id:"基本使用",children:[(0,d.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#基本使用",children:"#"}),"基本使用"]}),"\n",(0,d.jsx)(n.p,{children:"你可以使用 ``` 语法来创建代码块，且支持自定义标题。例如："}),"\n",(0,d.jsx)(n.p,{children:(0,d.jsx)(n.strong,{children:"输入:"})}),"\n",(0,d.jsxs)(n.div,{className:"language-md",children:[(0,d.jsx)(n.div,{className:""}),(0,d.jsx)(n.div,{className:"modern-code-content",children:(0,d.jsx)(n.pre,{className:"code",children:(0,d.jsx)(n.code,{className:"language-md",children:"```js\nconsole.log('Hello World');\n```\n\n```js title=\"hello.js\"\nconsole.log('Hello World');\n```\n"})})})]}),"\n",(0,d.jsx)(n.p,{children:(0,d.jsx)(n.strong,{children:"输出:"})}),"\n",(0,d.jsxs)(n.div,{className:"language-js",children:[(0,d.jsx)(n.div,{className:""}),(0,d.jsx)(n.div,{className:"modern-code-content",children:(0,d.jsx)(n.pre,{className:"code",children:(0,d.jsx)(n.code,{className:"language-js",children:"console.log('Hello World');\n"})})})]}),"\n",(0,d.jsxs)(n.div,{className:"language-js",children:[(0,d.jsx)(n.div,{className:"modern-code-title",children:"hello.js"}),(0,d.jsx)(n.div,{className:"modern-code-content",children:(0,d.jsx)(n.pre,{className:"code",children:(0,d.jsx)(n.code,{className:"language-js",children:"console.log('Hello World');\n"})})})]}),"\n",(0,d.jsxs)(n.h3,{id:"代码行高亮",children:[(0,d.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#代码行高亮",children:"#"}),"代码行高亮"]}),"\n",(0,d.jsx)(n.p,{children:"你可以通过如下的语法指定代码行高亮，比如:"}),"\n",(0,d.jsx)(n.p,{children:(0,d.jsx)(n.strong,{children:"输入:"})}),"\n",(0,d.jsxs)(n.div,{className:"language-md",children:[(0,d.jsx)(n.div,{className:""}),(0,d.jsx)(n.div,{className:"modern-code-content",children:(0,d.jsx)(n.pre,{className:"code",children:(0,d.jsx)(n.code,{className:"language-md",children:"```js {1,3-5}\nconsole.log('Hello World');\n\nconst a = 1;\nconsole.log(a);\nconst b = 2;\nconsole.log(b);\n```\n"})})})]}),"\n",(0,d.jsx)(n.p,{children:(0,d.jsx)(n.strong,{children:"输出:"})}),"\n",(0,d.jsxs)(n.div,{className:"language-js",children:[(0,d.jsx)(n.div,{className:""}),(0,d.jsx)(n.div,{className:"modern-code-content",children:(0,d.jsx)(n.pre,{className:"code",children:(0,d.jsx)(n.code,{className:"language-js",meta:"{1,3-5}",children:"console.log('Hello World');\n\nconst a = 1;\nconsole.log(a);\nconst b = 2;\nconsole.log(b);\n"})})})]}),"\n",(0,d.jsx)(n.p,{children:"你也可以同时应用代码行高亮和代码块标题，比如:"}),"\n",(0,d.jsx)(n.p,{children:(0,d.jsx)(n.strong,{children:"输入:"})}),"\n",(0,d.jsxs)(n.div,{className:"language-md",children:[(0,d.jsx)(n.div,{className:""}),(0,d.jsx)(n.div,{className:"modern-code-content",children:(0,d.jsx)(n.pre,{className:"code",children:(0,d.jsx)(n.code,{className:"language-md",children:"```js title=\"hello.js\" {1,3-5}\nconsole.log('Hello World');\n\nconst a = 1;\n\nconsole.log(a);\n\nconst b = 2;\n\nconsole.log(b);\n```\n"})})})]}),"\n",(0,d.jsx)(n.p,{children:(0,d.jsx)(n.strong,{children:"输出:"})}),"\n",(0,d.jsxs)(n.div,{className:"language-js",children:[(0,d.jsx)(n.div,{className:"modern-code-title",children:"hello.js"}),(0,d.jsx)(n.div,{className:"modern-code-content",children:(0,d.jsx)(n.pre,{className:"code",children:(0,d.jsx)(n.code,{className:"language-js",meta:"{1,3-5}",children:"console.log('Hello World');\n\nconst a = 1;\n\nconsole.log(a);\n\nconst b = 2;\n\nconsole.log(b);\n"})})})]}),"\n",(0,d.jsxs)(n.h3,{id:"显示代码行号",children:[(0,d.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#显示代码行号",children:"#"}),"显示代码行号"]}),"\n",(0,d.jsxs)(n.p,{children:["如果你想要显示代码行号，你可以在配置文件中开启 ",(0,d.jsx)(n.code,{children:"showLineNumbers"})," 选项:"]}),"\n",(0,d.jsxs)(n.div,{className:"language-ts",children:[(0,d.jsx)(n.div,{className:"modern-code-title",children:"modern.config.ts"}),(0,d.jsx)(n.div,{className:"modern-code-content",children:(0,d.jsx)(n.pre,{className:"code",children:(0,d.jsx)(n.code,{className:"language-ts",children:"export default {\n  // ...\n  doc: {\n    markdown: {\n      showLineNumbers: true,\n    },\n  },\n};\n"})})})]}),"\n",(0,d.jsxs)(n.h2,{id:"开启-rust-版本编译器",children:[(0,d.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#开启-rust-版本编译器",children:"#"}),"开启 Rust 版本编译器"]}),"\n",(0,d.jsx)(n.p,{children:"你可以通过如下的配置开启 Rust 版本的 MDX 编译器:"}),"\n","\n",(0,d.jsx)(l.default,{})]})}var t=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=Object.assign({},(0,c.useMDXComponents)(),e.components).wrapper;return n?(0,d.jsx)(n,Object.assign({},e,{children:(0,d.jsx)(o,e)})):o(e)}}}]);