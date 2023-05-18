(self.webpackChunk_modern_js_builder_doc=self.webpackChunk_modern_js_builder_doc||[]).push([["docs_zh_guide_advanced_define_md"],{66209:function(e,n,s){"use strict";Object.defineProperty(n,"__esModule",{value:!0});!function(e,n){for(var s in n)Object.defineProperty(e,s,{enumerable:!0,get:n[s]})}(n,{frontmatter:function(){return r},title:function(){return i},toc:function(){return a},default:function(){return o}});var c=s("9880"),d=s("23169"),r={},i="环境变量",a=[{text:"默认环境变量",depth:2,id:"默认环境变量"},{text:"process.env.NODE_ENV",depth:3,id:"processenvnode_env"},{text:"process.env.ASSET_PREFIX",depth:3,id:"processenvasset_prefix"},{text:"使用 define 配置项",depth:2,id:"使用-define-配置项"},{text:"替换表达式",depth:3,id:"替换表达式"},{text:"process.env 注入方式",depth:3,id:"processenv-注入方式"},{text:"设置环境变量",depth:2,id:"设置环境变量"},{text:"声明环境变量类型",depth:2,id:"声明环境变量类型"},{text:"Tree Shaking",depth:2,id:"tree-shaking"},{text:"源码内联测试",depth:2,id:"源码内联测试"}];function l(e){var n=Object.assign({h1:"h1",a:"a",p:"p",h2:"h2",h3:"h3",code:"code",div:"div",pre:"pre",ul:"ul",li:"li",ol:"ol"},(0,d.useMDXComponents)(),e.components);return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsxs)(n.h1,{id:"环境变量",children:["环境变量",(0,c.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#环境变量",children:"#"})]}),"\n",(0,c.jsx)(n.p,{children:"Builder 支持在编译过程中向代码中注入环境变量或表达式，这对于区分运行环境、注入常量值等场景很有帮助。本章节会介绍环境变量的使用方式。"}),"\n",(0,c.jsxs)(n.h2,{id:"默认环境变量",children:["默认环境变量",(0,c.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#默认环境变量",children:"#"})]}),"\n",(0,c.jsxs)(n.h3,{id:"processenvnode_env",children:["process.env.NODE_ENV",(0,c.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#processenvnode_env",children:"#"})]}),"\n",(0,c.jsxs)(n.p,{children:["默认情况下，Builder 会自动设置 ",(0,c.jsx)(n.code,{children:"process.env.NODE_ENV"})," 环境变量，在开发模式为 ",(0,c.jsx)(n.code,{children:"'development'"}),"，生产模式为 ",(0,c.jsx)(n.code,{children:"'production'"}),"。"]}),"\n",(0,c.jsxs)(n.p,{children:["你可以在 Node.js 和运行时代码中直接使用 ",(0,c.jsx)(n.code,{children:"process.env.NODE_ENV"}),"。"]}),"\n",(0,c.jsx)(n.div,{className:"language-",children:(0,c.jsx)(n.div,{className:"modern-code-content",children:(0,c.jsx)(n.pre,{className:"code",children:(0,c.jsx)(n.code,{className:"language-ts",children:"if (process.env.NODE_ENV === 'development') {\n  console.log('this is a development log');\n}\n"})})})}),"\n",(0,c.jsx)(n.p,{children:"在开发环境，以上代码会被编译为："}),"\n",(0,c.jsx)(n.div,{className:"language-",children:(0,c.jsx)(n.div,{className:"modern-code-content",children:(0,c.jsx)(n.pre,{className:"code",children:(0,c.jsx)(n.code,{className:"language-js",children:"if (true) {\n  console.log('this is a development log');\n}\n"})})})}),"\n",(0,c.jsx)(n.p,{children:"在生产环境，以上代码会被编译为："}),"\n",(0,c.jsx)(n.div,{className:"language-",children:(0,c.jsx)(n.div,{className:"modern-code-content",children:(0,c.jsx)(n.pre,{className:"code",children:(0,c.jsx)(n.code,{className:"language-js",children:"if (false) {\n  console.log('this is a development log');\n}\n"})})})}),"\n",(0,c.jsxs)(n.p,{children:["在代码压缩过程中，",(0,c.jsx)(n.code,{children:"if (false) { ... }"})," 会被识别为无效代码，并被自动移除。"]}),"\n",(0,c.jsxs)(n.h3,{id:"processenvasset_prefix",children:["process.env.ASSET_PREFIX",(0,c.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#processenvasset_prefix",children:"#"})]}),"\n",(0,c.jsxs)(n.p,{children:["你可以在运行时代码中使用 ",(0,c.jsx)(n.code,{children:"process.env.ASSET_PREFIX"})," 来访问静态资源的前缀。"]}),"\n",(0,c.jsxs)(n.ul,{children:["\n",(0,c.jsxs)(n.li,{children:["在开发环境下，它等同于 ",(0,c.jsx)(n.a,{href:"/api/config-dev#dev-assetprefix",children:"dev.assetPrefix"})," 设置的值。"]}),"\n",(0,c.jsxs)(n.li,{children:["在生产环境下，它等同于 ",(0,c.jsx)(n.a,{href:"/api/config-output#output-assetprefix",children:"output.assetPrefix"})," 设置的值。"]}),"\n",(0,c.jsxs)(n.li,{children:["Builder 会自动移除 ",(0,c.jsx)(n.code,{children:"assetPrefix"})," 尾部的斜线符号，以便于进行字符串拼接。"]}),"\n"]}),"\n",(0,c.jsxs)(n.p,{children:["比如，我们通过 ",(0,c.jsx)(n.a,{href:"/api/config-output#output-copy",children:"output.copy"})," 配置，将 ",(0,c.jsx)(n.code,{children:"static/icon.png"})," 图片拷贝到 ",(0,c.jsx)(n.code,{children:"dist"})," 目录下："]}),"\n",(0,c.jsx)(n.div,{className:"language-",children:(0,c.jsx)(n.div,{className:"modern-code-content",children:(0,c.jsx)(n.pre,{className:"code",children:(0,c.jsx)(n.code,{className:"language-ts",children:"export default {\n  dev: {\n    assetPrefix: '/',\n  },\n  output: {\n    copy: [{ from: './static', to: 'static' }],\n    assetPrefix: 'https://example.com',\n  },\n};\n"})})})}),"\n",(0,c.jsx)(n.p,{children:"此时，我们可以在前端代码中通过以下方式来拼接图片 URL："}),"\n",(0,c.jsx)(n.div,{className:"language-",children:(0,c.jsx)(n.div,{className:"modern-code-content",children:(0,c.jsx)(n.pre,{className:"code",children:(0,c.jsx)(n.code,{className:"language-jsx",children:"const Image = <img src={`${process.env.ASSET_PREFIX}/static/icon.png`} />;\n"})})})}),"\n",(0,c.jsx)(n.p,{children:"在开发环境，以上代码会被编译为："}),"\n",(0,c.jsx)(n.div,{className:"language-",children:(0,c.jsx)(n.div,{className:"modern-code-content",children:(0,c.jsx)(n.pre,{className:"code",children:(0,c.jsx)(n.code,{className:"language-jsx",children:"const Image = <img src={`/static/icon.png`} />;\n"})})})}),"\n",(0,c.jsx)(n.p,{children:"在生产环境，以上代码会被编译为："}),"\n",(0,c.jsx)(n.div,{className:"language-",children:(0,c.jsx)(n.div,{className:"modern-code-content",children:(0,c.jsx)(n.pre,{className:"code",children:(0,c.jsx)(n.code,{className:"language-jsx",children:"const Image = <img src={`https://example.com/static/icon.png`} />;\n"})})})}),"\n",(0,c.jsxs)(n.h2,{id:"使用-define-配置项",children:["使用 define 配置项",(0,c.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#使用-define-配置项",children:"#"})]}),"\n",(0,c.jsxs)(n.p,{children:["通过配置 ",(0,c.jsx)(n.a,{href:"/api/config-source#sourcedefine",children:"source.define"})," 选项，你可以在构建时将代码中的变量替换成其它值或者表达式。"]}),"\n",(0,c.jsx)(n.p,{children:"define 类似于其它一些语言提供的宏定义能力，但得益于 JavaScript 强大的运行时表达能力，通常不需要像那些语言一样将其用作复杂代码的生成器。它常用于在构建环境向运行时传递环境变量等简单信息，或是辅助 Builder 进行 Tree Shaking 等操作。"}),"\n",(0,c.jsxs)(n.h3,{id:"替换表达式",children:["替换表达式",(0,c.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#替换表达式",children:"#"})]}),"\n",(0,c.jsx)(n.p,{children:"define 最基础的用途是在构建时替换代码中的表达式。"}),"\n",(0,c.jsxs)(n.p,{children:["例如环境变量 ",(0,c.jsx)(n.code,{children:"NODE_ENV"})," 的值会影响许多第三方模块的行为，在构建线上应用的产物时通常需要将它设置为 ",(0,c.jsx)(n.code,{children:'"production"'}),"："]}),"\n",(0,c.jsx)(n.div,{className:"language-",children:(0,c.jsx)(n.div,{className:"modern-code-content",children:(0,c.jsx)(n.pre,{className:"code",children:(0,c.jsx)(n.code,{className:"language-js",children:"export default {\n  source: {\n    define: {\n      'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV),\n    },\n  },\n};\n"})})})}),"\n",(0,c.jsxs)(n.p,{children:["需要注意的是这里提供的值必须是 JSON 字符串，例如 ",(0,c.jsx)(n.code,{children:"process.env.NODE_ENV"})," 的值为 ",(0,c.jsx)(n.code,{children:'"production"'})," 则传入的值应当是 ",(0,c.jsx)(n.code,{children:'"\\"production\\""'})," 才能够正确被处理。"]}),"\n",(0,c.jsxs)(n.p,{children:["同理 ",(0,c.jsx)(n.code,{children:'{ foo: "bar" }'})," 也应该被转换成 ",(0,c.jsx)(n.code,{children:'"{\\"foo\\":\\"bar\\"}"'}),"，如果直接传入原始对象则意味着把表达式 ",(0,c.jsx)(n.code,{children:"process.env.NODE_ENV.foo"})," 替换为标识符 ",(0,c.jsx)(n.code,{children:"bar"}),"。"]}),"\n",(0,c.jsxs)(n.p,{children:[(0,c.jsx)(n.code,{children:"source.define"})," 的具体行为请参考 ",(0,c.jsx)(n.a,{href:"/api/config-source#sourcedefine",children:"API 文档"}),"。"]}),"\n",(0,c.jsxs)(n.div,{className:"modern-directive tip",children:[(0,c.jsx)(n.div,{className:"modern-directive-title",children:"TIP"}),(0,c.jsx)(n.div,{className:"modern-directive-content",children:(0,c.jsxs)(n.p,{children:["以上例子中的环境变量 ",(0,c.jsx)(n.code,{children:"NODE_ENV"})," 已经由 Builder 自动注入，通常你不需要手动配置它的值。\n"]})})]}),"\n",(0,c.jsxs)(n.h3,{id:"processenv-注入方式",children:["process.env 注入方式",(0,c.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#processenv-注入方式",children:"#"})]}),"\n",(0,c.jsxs)(n.p,{children:["在使用 ",(0,c.jsx)(n.code,{children:"source.define"})," 或 ",(0,c.jsx)(n.code,{children:"source.globalVars"})," 时，请避免注入整个 ",(0,c.jsx)(n.code,{children:"process.env"})," 对象，比如下面的用法是不推荐的："]}),"\n",(0,c.jsx)(n.div,{className:"language-",children:(0,c.jsx)(n.div,{className:"modern-code-content",children:(0,c.jsx)(n.pre,{className:"code",children:(0,c.jsx)(n.code,{className:"language-js",children:"export default {\n  source: {\n    define: {\n      'process.env': JSON.stringify(process.env),\n    },\n  },\n};\n"})})})}),"\n",(0,c.jsx)(n.p,{children:"如果你采用了上述用法，将会导致如下问题："}),"\n",(0,c.jsxs)(n.ol,{children:["\n",(0,c.jsx)(n.li,{children:"额外注入了一些未使用的环境变量，导致开发环境的环境变量被泄露到前端代码中。"}),"\n",(0,c.jsxs)(n.li,{children:["由于每一处 ",(0,c.jsx)(n.code,{children:"process.env"})," 代码都会被替换为完整的环境变量对象，导致前端代码的包体积增加，性能降低。"]}),"\n"]}),"\n",(0,c.jsxs)(n.p,{children:["因此，请按照实际需求来注入 ",(0,c.jsx)(n.code,{children:"process.env"})," 上的环境变量，避免全量注入。"]}),"\n",(0,c.jsxs)(n.h2,{id:"设置环境变量",children:["设置环境变量",(0,c.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#设置环境变量",children:"#"})]}),"\n",(0,c.jsxs)(n.p,{children:["针对设置环境变量的高频场景，Builder 还提供了 ",(0,c.jsx)(n.a,{href:"/api/config-source#sourceglobalvars",children:"source.globalVars"})," 配置用于简化配置，它是 ",(0,c.jsx)(n.code,{children:"source.define"})," 的一个语法糖，唯一的区别是 ",(0,c.jsx)(n.code,{children:"source.globalVars"})," 会自动将传入的值进行 JSON 序列化处理，这使得设置环境变量的值更容易，避免大量书写 ",(0,c.jsx)(n.code,{children:"JSON.stringify(...)"})," 转换语句："]}),"\n",(0,c.jsx)(n.div,{className:"language-",children:(0,c.jsx)(n.div,{className:"modern-code-content",children:(0,c.jsx)(n.pre,{className:"code",children:(0,c.jsx)(n.code,{className:"language-js",children:"export default {\n  source: {\n    globalVars: {\n      'process.env.NODE_ENV': 'production',\n      'import.meta.foo': { bar: 42 },\n      'import.meta.baz': false,\n    },\n  },\n};\n"})})})}),"\n",(0,c.jsx)(n.p,{children:"需要注意的是不论以上哪种方式都只会匹配完整的表达式，对表达式进行解构会让 Builder 无法正确识别："}),"\n",(0,c.jsx)(n.div,{className:"language-",children:(0,c.jsx)(n.div,{className:"modern-code-content",children:(0,c.jsx)(n.pre,{className:"code",children:(0,c.jsx)(n.code,{className:"language-js",children:"console.log(process.env.NODE_ENV);\n// => production\n\nconst { NODE_ENV } = process.env;\nconsole.log(NODE_ENV);\n// => undefined\n\nconst vars = process.env;\nconsole.log(vars.NODE_ENV);\n// => undefined\n"})})})}),"\n",(0,c.jsxs)(n.h2,{id:"声明环境变量类型",children:["声明环境变量类型",(0,c.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#声明环境变量类型",children:"#"})]}),"\n",(0,c.jsx)(n.p,{children:"当你在 TypeScript 代码中读取环境变量时，TypeScript 可能会提示该变量缺少类型定义，此时你需要添加相应的类型声明。"}),"\n",(0,c.jsxs)(n.p,{children:["比如你引用了一个 ",(0,c.jsx)(n.code,{children:"CUSTOM_VAR"})," 变量，在 TypeScript 文件中会出现如下提示："]}),"\n",(0,c.jsx)(n.div,{className:"language-",children:(0,c.jsx)(n.div,{className:"modern-code-content",children:(0,c.jsx)(n.pre,{className:"code",children:(0,c.jsx)(n.code,{children:"TS2304: Cannot find name 'CUSTOM_VAR'.\n"})})})}),"\n",(0,c.jsxs)(n.p,{children:["此时，你可以在项目中创建 ",(0,c.jsx)(n.code,{children:"src/env.d.ts"})," 文件，并添加以下内容即可："]}),"\n",(0,c.jsxs)(n.div,{className:"language-",children:[(0,c.jsx)(n.div,{className:"modern-code-title",children:"src/env.d.ts"}),(0,c.jsx)(n.div,{className:"modern-code-content",children:(0,c.jsx)(n.pre,{className:"code",children:(0,c.jsx)(n.code,{className:"language-ts",meta:'title="src/env.d.ts"',children:"declare const CUSTOM_VAR: string;\n"})})})]}),"\n",(0,c.jsxs)(n.h2,{id:"tree-shaking",children:["Tree Shaking",(0,c.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#tree-shaking",children:"#"})]}),"\n",(0,c.jsx)(n.p,{children:"Define 还可以用于标记死代码以协助 Builder 进行 Tree Shaking 优化。"}),"\n",(0,c.jsxs)(n.p,{children:["例如通过将 ",(0,c.jsx)(n.code,{children:"process.env.REGION"})," 替换为具体值来实现针对不同地区的产物进行差异化构建："]}),"\n",(0,c.jsx)(n.div,{className:"language-",children:(0,c.jsx)(n.div,{className:"modern-code-content",children:(0,c.jsx)(n.pre,{className:"code",children:(0,c.jsx)(n.code,{className:"language-js",children:"export default {\n  source: {\n    define: {\n      'process.env.REGION': JSON.stringify(process.env.REGION),\n    },\n    // or...\n    globalVars: {\n      'process.env.REGION': process.env.REGION,\n    },\n  },\n};\n"})})})}),"\n",(0,c.jsx)(n.p,{children:"这样设置后对于存在地区控制的代码："}),"\n",(0,c.jsx)(n.div,{className:"language-",children:(0,c.jsx)(n.div,{className:"modern-code-content",children:(0,c.jsx)(n.pre,{className:"code",children:(0,c.jsx)(n.code,{className:"language-js",children:"const App = () => {\n  if (process.env.REGION === 'cn') {\n    return <EntryFoo />;\n  } else if (process.env.REGION === 'sg') {\n    return <EntryBar />;\n  } else {\n    return <EntryBaz />;\n  }\n};\n"})})})}),"\n",(0,c.jsxs)(n.p,{children:["指定环境变量 ",(0,c.jsx)(n.code,{children:"REGION=sg"})," 并执行构建得到的产物会被剔除多余的代码："]}),"\n",(0,c.jsx)(n.div,{className:"language-",children:(0,c.jsx)(n.div,{className:"modern-code-content",children:(0,c.jsx)(n.pre,{className:"code",children:(0,c.jsx)(n.code,{className:"language-js",children:"const App = () => {\n  if (false) {\n  } else if (true) {\n    return <EntryBar />;\n  } else {\n  }\n};\n"})})})}),"\n",(0,c.jsx)(n.p,{children:"未用到的组件不会被打包到产物中，它们的外部依赖也会对应地被优化，最终即可得到体积和性能都更优的产物代码。"}),"\n",(0,c.jsxs)(n.h2,{id:"源码内联测试",children:["源码内联测试",(0,c.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#源码内联测试",children:"#"})]}),"\n",(0,c.jsxs)(n.p,{children:["Vitest 支持将测试写在源码文件内，能够在不导出的情况下测试私有功能的行为，并且通过设置 Define 来在正式构建时剔除测试代码。详细指南请参考 ",(0,c.jsx)(n.a,{href:"https://cn.vitest.dev/guide/in-source.html",target:"_blank",rel:"noopener noreferrer",children:"Vitest 官方文档"}),"。"]}),"\n",(0,c.jsx)(n.div,{className:"language-",children:(0,c.jsx)(n.div,{className:"modern-code-content",children:(0,c.jsx)(n.pre,{className:"code",children:(0,c.jsx)(n.code,{className:"language-js",children:"// 函数实现\nfunction add(...args) {\n  return args.reduce((a, b) => a + b, 0);\n}\n\n// 源码内的测试套件\nif (import.meta.vitest) {\n  const { it, expect } = import.meta.vitest;\n  it('add', () => {\n    expect(add()).toBe(0);\n    expect(add(1)).toBe(1);\n    expect(add(1, 2, 3)).toBe(6);\n  });\n}\n"})})})})]})}var o=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=Object.assign({},(0,d.useMDXComponents)(),e.components).wrapper;return n?(0,c.jsx)(n,Object.assign({},e,{children:(0,c.jsx)(l,e)})):l(e)}}}]);