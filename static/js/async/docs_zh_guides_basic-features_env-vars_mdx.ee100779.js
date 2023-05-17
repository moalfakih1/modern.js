(self.webpackChunk_modern_js_main_doc=self.webpackChunk_modern_js_main_doc||[]).push([["docs_zh_guides_basic-features_env-vars_mdx"],{8828:function(e,n,s){"use strict";Object.defineProperty(n,"__esModule",{value:!0});!function(e,n){for(var s in n)Object.defineProperty(e,s,{enumerable:!0,get:n[s]})}(n,{frontmatter:function(){return r},title:function(){return i},toc:function(){return l},default:function(){return h}});var d=s("9880"),c=s("23169"),r={title:"环境变量",sidebar_position:7},i="环境变量",l=[{text:"内置的环境变量",depth:2,id:"内置的环境变量"},{text:"ASSET_PREFIX",depth:3,id:"asset_prefix"},{text:"NODE_ENV",depth:3,id:"node_env"},{text:"MODERN_ENV",depth:3,id:"modern_env"},{text:"MODERN_TARGET",depth:3,id:"modern_target"},{text:"自定义环境变量",depth:2,id:"自定义环境变量"},{text:"通过 shell 指定",depth:3,id:"通过-shell-指定"},{text:"通过 .env 文件指定",depth:3,id:"通过-env-文件指定"},{text:"使用环境变量",depth:2,id:"使用环境变量"},{text:"约定命名",depth:3,id:"约定命名"},{text:"任意命名",depth:3,id:"任意命名"},{text:"使用全局替换",depth:2,id:"使用全局替换"}];function a(e){var n=Object.assign({h1:"h1",a:"a",p:"p",h2:"h2",h3:"h3",strong:"strong",ul:"ul",li:"li",code:"code",div:"div",pre:"pre"},(0,c.useMDXComponents)(),e.components);return(0,d.jsxs)(d.Fragment,{children:[(0,d.jsxs)(n.h1,{id:"环境变量",children:["环境变量",(0,d.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#环境变量",children:"#"})]}),"\n",(0,d.jsx)(n.p,{children:"Modern.js 提供了对环境变量的支持，包含内置的环境变量和自定义的环境变量。"}),"\n",(0,d.jsxs)(n.h2,{id:"内置的环境变量",children:["内置的环境变量",(0,d.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#内置的环境变量",children:"#"})]}),"\n",(0,d.jsxs)(n.h3,{id:"asset_prefix",children:["ASSET_PREFIX",(0,d.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#asset_prefix",children:"#"})]}),"\n",(0,d.jsxs)(n.p,{children:["表示当前资源文件的路径前缀，是",(0,d.jsx)(n.strong,{children:"只读的"}),"的环境变量。"]}),"\n",(0,d.jsxs)(n.h3,{id:"node_env",children:["NODE_ENV",(0,d.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#node_env",children:"#"})]}),"\n",(0,d.jsxs)(n.p,{children:["表示当前的执行环境，是",(0,d.jsx)(n.strong,{children:"只读的"}),"的环境变量，其值在不同的执行命令下具有不同的值："]}),"\n",(0,d.jsxs)(n.ul,{children:["\n",(0,d.jsxs)(n.li,{children:[(0,d.jsx)(n.code,{children:"production"}),"：执行 ",(0,d.jsx)(n.code,{children:"modern build"}),"、",(0,d.jsx)(n.code,{children:"modern serve"})," 命令时的默认值。"]}),"\n",(0,d.jsxs)(n.li,{children:[(0,d.jsx)(n.code,{children:"test"}),"：执行 ",(0,d.jsx)(n.code,{children:"modern test"})," 命令时的默认值。"]}),"\n",(0,d.jsxs)(n.li,{children:[(0,d.jsx)(n.code,{children:"development"}),"：执行 ",(0,d.jsx)(n.code,{children:"modern dev"})," 命令时的默认值，同时也是其他所有情况下的默认值。"]}),"\n"]}),"\n",(0,d.jsxs)(n.h3,{id:"modern_env",children:["MODERN_ENV",(0,d.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#modern_env",children:"#"})]}),"\n",(0,d.jsxs)(n.p,{children:["手动设置当前的执行环境。除了上述 NODE_ENV 对应的值之外，这里支持自定义环境名称，例如 ",(0,d.jsx)(n.code,{children:"staging"}),"、",(0,d.jsx)(n.code,{children:"boe"})," 等。"]}),"\n",(0,d.jsxs)(n.div,{className:"modern-directive tip",children:[(0,d.jsx)(n.div,{className:"modern-directive-title",children:"TIP"}),(0,d.jsxs)(n.div,{className:"modern-directive-content",children:[(0,d.jsx)(n.p,{children:"MODERN_ENV 的优先级高于 NODE_ENV。"}),"\n"]})]}),"\n",(0,d.jsxs)(n.h3,{id:"modern_target",children:["MODERN_TARGET",(0,d.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#modern_target",children:"#"})]}),"\n",(0,d.jsxs)(n.p,{children:["使用 ",(0,d.jsx)(n.code,{children:"@modern-js/runtime"})," 时，Modern.js 会自动注入 ",(0,d.jsx)(n.code,{children:"MODERN_TARGET"}),"，用于区分 SSR 与 CSR 环境。"]}),"\n",(0,d.jsxs)(n.p,{children:["你可以在代码中通过 ",(0,d.jsx)(n.code,{children:"process.env.MODERN_TARGET"})," 来判断环境，并执行相应的逻辑。"]}),"\n",(0,d.jsxs)(n.div,{className:"language-",children:[(0,d.jsx)(n.div,{className:"modern-code-title",children:"App.tsx"}),(0,d.jsx)(n.div,{className:"modern-code-content",children:(0,d.jsx)(n.pre,{className:"code",children:(0,d.jsx)(n.code,{className:"language-ts",meta:'title="App.tsx"',children:"function App() {\n  if (process.env.MODERN_TARGET === 'browser') {\n    console.log(window.innerHeight);\n  }\n}\n"})})})]}),"\n",(0,d.jsx)(n.p,{children:"在开发环境构建完成后，可以看到 SSR 产物和 CSR 产物如下："}),"\n",(0,d.jsxs)(n.div,{className:"language-",children:[(0,d.jsx)(n.div,{className:"modern-code-title",children:"dist/bundles/main.js"}),(0,d.jsx)(n.div,{className:"modern-code-content",children:(0,d.jsx)(n.pre,{className:"code",children:(0,d.jsx)(n.code,{className:"language-js",meta:'title="dist/bundles/main.js"',children:"// SSR 产物\nfunction App() {\n  if (false) {\n  }\n}\n"})})})]}),"\n",(0,d.jsxs)(n.div,{className:"language-",children:[(0,d.jsx)(n.div,{className:"modern-code-title",children:"dist/static/main.js"}),(0,d.jsx)(n.div,{className:"modern-code-content",children:(0,d.jsx)(n.pre,{className:"code",children:(0,d.jsx)(n.code,{className:"language-js",meta:'title="dist/static/main.js"',children:"// CSR 产物\nfunction App() {\n  if (true) {\n    console.log(window.innerHeight);\n  }\n}\n"})})})]}),"\n",(0,d.jsx)(n.p,{children:"这种方式可以针对不同客户端提供不同的产物，保证代码体积最小化；也便于处理不同环境下代码中的一些副作用。"}),"\n",(0,d.jsxs)(n.div,{className:"modern-directive note",children:[(0,d.jsx)(n.div,{className:"modern-directive-title",children:"死代码移除"}),(0,d.jsxs)(n.div,{className:"modern-directive-content",children:[(0,d.jsx)(n.p,{children:"在生产环境，Terser 和 SWC 等代码压缩工具会分析代码，并将 dead code 移除，从而减少产物体积，这个过程被称为死代码移除（DCE）。"}),"\n",(0,d.jsxs)(n.p,{children:["例如，上述 ",(0,d.jsx)(n.code,{children:"if (false)"})," 语句包含的代码会被移除，而 ",(0,d.jsx)(n.code,{children:"if (true)"})," 包含的代码将被保留。"]}),"\n",(0,d.jsxs)(n.p,{children:["如果你未按照上述写法来使用 ",(0,d.jsx)(n.code,{children:"process.env.MODERN_TARGET"}),"，代码压缩工具可能会无法分析出 dead code，从而导致产物体积增大。"]}),"\n"]})]}),"\n",(0,d.jsxs)(n.h2,{id:"自定义环境变量",children:["自定义环境变量",(0,d.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#自定义环境变量",children:"#"})]}),"\n",(0,d.jsxs)(n.p,{children:["环境变量支持通过 ",(0,d.jsx)(n.code,{children:"shell"})," 和 ",(0,d.jsx)(n.code,{children:".env"})," 文件两种方式指定。"]}),"\n",(0,d.jsxs)(n.h3,{id:"通过-shell-指定",children:["通过 ",(0,d.jsx)(n.code,{children:"shell"})," 指定",(0,d.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#通过-shell-指定",children:"#"})]}),"\n",(0,d.jsx)(n.p,{children:"在命令前添加自定义环境变量："}),"\n",(0,d.jsx)(n.div,{className:"language-",children:(0,d.jsx)(n.div,{className:"modern-code-content",children:(0,d.jsx)(n.pre,{className:"code",children:(0,d.jsx)(n.code,{className:"language-shell",children:"REACT_APP_FOO=123 BAR=456 pnpm run dev\n"})})})}),"\n",(0,d.jsxs)(n.h3,{id:"通过-env-文件指定",children:["通过 ",(0,d.jsx)(n.code,{children:".env"})," 文件指定",(0,d.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#通过-env-文件指定",children:"#"})]}),"\n",(0,d.jsxs)(n.p,{children:["在项目根目录创建 ",(0,d.jsx)(n.code,{children:".env"})," 文件，并添加自定义环境变量，这些环境变量会默认添加到启动项目的 Node.js 进程中，例如："]}),"\n",(0,d.jsx)(n.div,{className:"language-",children:(0,d.jsx)(n.div,{className:"modern-code-content",children:(0,d.jsx)(n.pre,{className:"code",children:(0,d.jsx)(n.code,{className:"language-bash",children:"REACT_APP_FOO=123\nBAR=456\n"})})})}),"\n",(0,d.jsxs)(n.p,{children:[(0,d.jsx)(n.code,{children:".env"})," 文件遵循以下规则加载规则："]}),"\n",(0,d.jsxs)(n.ul,{children:["\n",(0,d.jsxs)(n.li,{children:[(0,d.jsx)(n.code,{children:".env"}),"：默认加载。"]}),"\n",(0,d.jsxs)(n.li,{children:[(0,d.jsx)(n.code,{children:".env.{ MODERN_ENV | NODE_ENV }"}),"：针对具体环境设置环境变量，会覆盖 ",(0,d.jsx)(n.code,{children:".env"})," 中的设置。"]}),"\n"]}),"\n",(0,d.jsxs)(n.p,{children:["当需要根据环境使用不同的配置时，可以把环境变量定义到对应环境名称的 ",(0,d.jsx)(n.code,{children:".env"})," 文件中，并在启动项目时手动设置执行环境。例如使用以下命令启动项目时，将会加载 ",(0,d.jsx)(n.code,{children:".env"})," 和 ",(0,d.jsx)(n.code,{children:".env.staging"}),":"]}),"\n",(0,d.jsx)(n.div,{className:"language-",children:(0,d.jsx)(n.div,{className:"modern-code-content",children:(0,d.jsx)(n.pre,{className:"code",children:(0,d.jsx)(n.code,{className:"language-shell",children:"MODERN_ENV=staging pnpm run dev\n"})})})}),"\n",(0,d.jsxs)(n.h2,{id:"使用环境变量",children:["使用环境变量",(0,d.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#使用环境变量",children:"#"})]}),"\n",(0,d.jsxs)(n.h3,{id:"约定命名",children:["约定命名",(0,d.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#约定命名",children:"#"})]}),"\n",(0,d.jsxs)(n.p,{children:["在前端代码中可以直接使用 ",(0,d.jsx)(n.code,{children:"NODE_ENV"})," 环境变量。另外，以 ",(0,d.jsx)(n.code,{children:"MODERN_"})," 开头的自定义环境变量，也可以在代码中直接使用。"]}),"\n",(0,d.jsx)(n.p,{children:"例如:"}),"\n",(0,d.jsx)(n.div,{className:"language-",children:(0,d.jsx)(n.div,{className:"modern-code-content",children:(0,d.jsx)(n.pre,{className:"code",children:(0,d.jsx)(n.code,{className:"language-js",children:"if (process.env.NODE_ENV === 'development') {\n  // do something\n}\n"})})})}),"\n",(0,d.jsxs)(n.p,{children:["执行 ",(0,d.jsx)(n.code,{children:"pnpm run dev"})," 命令之后可以看到如下构建产物："]}),"\n",(0,d.jsx)(n.div,{className:"language-",children:(0,d.jsx)(n.div,{className:"modern-code-content",children:(0,d.jsx)(n.pre,{className:"code",children:(0,d.jsx)(n.code,{className:"language-js",children:"if (true) {\n  // do something\n}\n"})})})}),"\n",(0,d.jsxs)(n.p,{children:["同样在自定义的 HTML 模板中，也可以直接使用这类环境变量。如 ",(0,d.jsx)(n.code,{children:"config/html/head.html"}),":"]}),"\n",(0,d.jsx)(n.div,{className:"language-",children:(0,d.jsx)(n.div,{className:"modern-code-content",children:(0,d.jsx)(n.pre,{className:"code",children:(0,d.jsx)(n.code,{className:"language-js",children:'<meta name="test" content="<process.env.NODE_ENV>">\n'})})})}),"\n",(0,d.jsxs)(n.h3,{id:"任意命名",children:["任意命名",(0,d.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#任意命名",children:"#"})]}),"\n",(0,d.jsxs)(n.p,{children:["如果需要在代码中使用任意名称的环境变量，可以在 ",(0,d.jsx)(n.a,{href:"/configure/app/source/global-vars",children:(0,d.jsx)(n.code,{children:"source.globalVars"})})," 配置指定, 例如："]}),"\n",(0,d.jsxs)(n.div,{className:"language-",children:[(0,d.jsx)(n.div,{className:"modern-code-title",children:"modern.config.ts"}),(0,d.jsx)(n.div,{className:"modern-code-content",children:(0,d.jsx)(n.pre,{className:"code",children:(0,d.jsx)(n.code,{className:"language-ts",meta:'title="modern.config.ts"',children:"export default defineConfig({\n  source: {\n    globalVars: {\n      'process.env.VERSION': process.env.VERSION,\n    }.\n  },\n});\n"})})})]}),"\n",(0,d.jsxs)(n.p,{children:["此时，在代码中的 ",(0,d.jsx)(n.code,{children:"process.env.VERSION"}),"，将会被替换为环境变量中 ",(0,d.jsx)(n.code,{children:"VERSION"})," 的值。"]}),"\n",(0,d.jsxs)(n.div,{className:"modern-directive note",children:[(0,d.jsx)(n.div,{className:"modern-directive-title",children:"NOTE"}),(0,d.jsxs)(n.div,{className:"modern-directive-content",children:[(0,d.jsxs)(n.p,{children:[(0,d.jsx)(n.code,{children:"source.globalVars"})," 也支持将其他表达式或字符串替换为指定的值，不仅限于环境变量。"]}),"\n"]})]}),"\n",(0,d.jsxs)(n.h2,{id:"使用全局替换",children:["使用全局替换",(0,d.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#使用全局替换",children:"#"})]}),"\n",(0,d.jsx)(n.p,{children:"除了环境变量，Modern.js 也支持将代码中的变量替换成其它值或者表达式，可以用于在代码逻辑中区分开发环境与生产环境等场景。"}),"\n",(0,d.jsxs)(n.p,{children:["例如将代码中的 ",(0,d.jsx)(n.code,{children:"TWO"})," 转换为 ",(0,d.jsx)(n.code,{children:"1 + 1"})," 的表达式："]}),"\n",(0,d.jsx)(n.div,{className:"language-",children:(0,d.jsx)(n.div,{className:"modern-code-content",children:(0,d.jsx)(n.pre,{className:"code",children:(0,d.jsx)(n.code,{className:"language-ts",children:"export default {\n  source: {\n    define: {\n      TWO: '1 + 1',\n    },\n  },\n};\n"})})})}),"\n",(0,d.jsx)(n.div,{className:"language-",children:(0,d.jsx)(n.div,{className:"modern-code-content",children:(0,d.jsx)(n.pre,{className:"code",children:(0,d.jsx)(n.code,{className:"language-ts",children:"const foo = TWO;\n\n// ⬇️ Turn into being...\nconst foo = 1 + 1;\n"})})})}),"\n",(0,d.jsxs)(n.p,{children:["在大多数情况下，",(0,d.jsx)(n.code,{children:"source.globalVars"})," 已经能满足替换变量的需求。但 ",(0,d.jsx)(n.code,{children:"source.globalVars"})," 传入的值都会默认被 JSON 序列化，因此无法做出像上面例子中 ",(0,d.jsx)(n.code,{children:"1 + 1"})," 的替换，此时就需要使用 ",(0,d.jsx)(n.a,{href:"/configure/app/source/define",children:(0,d.jsx)(n.code,{children:"source.define"})}),"。"]})]})}var h=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=Object.assign({},(0,c.useMDXComponents)(),e.components).wrapper;return n?(0,d.jsx)(n,Object.assign({},e,{children:(0,d.jsx)(a,e)})):a(e)}}}]);