(self.webpackChunkwebpack=self.webpackChunkwebpack||[]).push([["split~docs_zh_api_config-source_mdx"],{26323:function(e,n,s){"use strict";Object.defineProperty(n,"__esModule",{value:!0});!function(e,n){for(var s in n)Object.defineProperty(e,s,{enumerable:!0,get:n[s]})}(n,{frontmatter:function(){return a},title:function(){return o},toc:function(){return l},default:function(){return i}});var c=s("12151"),r=s("21447"),a={},o="",l=[{text:"示例",depth:3,id:"示例"}];function d(e){var n=Object.assign({ul:"ul",li:"li",strong:"strong",code:"code",div:"div",button:"button",pre:"pre",p:"p",h3:"h3",a:"a"},(0,r.useMDXComponents)(),e.components);return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsxs)(n.ul,{children:["\n",(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:"类型："})," ",(0,c.jsx)(n.code,{children:"Record<string, JSONValue>"})]}),"\n",(0,c.jsx)(n.li,{children:(0,c.jsx)(n.strong,{children:"默认值："})}),"\n"]}),"\n",(0,c.jsx)(n.div,{className:"language-",children:(0,c.jsxs)(n.div,{className:"modern-code-content",children:[(0,c.jsx)(n.button,{className:"copy"}),(0,c.jsx)(n.pre,{className:"code",children:(0,c.jsx)(n.code,{className:"language-ts",children:"// Builder 会自动添加环境变量 `process.env.NODE_ENV` 作为默认值，因此你不需要手动添加它。\nconst defaultGlobalVars = {\n  'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV),\n};\n"})})]})}),"\n",(0,c.jsxs)(n.p,{children:["构建时将类似 ",(0,c.jsx)(n.code,{children:"process.env.FOO"})," 的全局变量表达式替换为指定的值，比如："]}),"\n",(0,c.jsx)(n.div,{className:"language-",children:(0,c.jsxs)(n.div,{className:"modern-code-content",children:[(0,c.jsx)(n.button,{className:"copy"}),(0,c.jsx)(n.pre,{className:"code",children:(0,c.jsx)(n.code,{className:"language-js",children:"console.log(process.env.NODE_ENV);\n\n// ⬇️ Turn into being...\nconsole.log('development');\n"})})]})}),"\n",(0,c.jsxs)(n.p,{children:["使用解构赋值时，构建器无法判断变量 ",(0,c.jsx)(n.code,{children:"NODE_ENV"})," 是否与要替换的表达式 ",(0,c.jsx)(n.code,{children:"process.env.NODE_ENV"})," 存在关联，所以这样的使用方式是无效的："]}),"\n",(0,c.jsx)(n.div,{className:"language-",children:(0,c.jsxs)(n.div,{className:"modern-code-content",children:[(0,c.jsx)(n.button,{className:"copy"}),(0,c.jsx)(n.pre,{className:"code",children:(0,c.jsx)(n.code,{className:"language-js",children:"const { NODE_ENV } = process.env;\nconsole.log(NODE_ENV);\n// ❌ Won't get a string.\n"})})]})}),"\n",(0,c.jsxs)(n.p,{children:[(0,c.jsx)(n.code,{children:"source.globalVars"})," 是 ",(0,c.jsx)(n.code,{children:"source.define"})," 的一个语法糖，唯一的区别是 ",(0,c.jsx)(n.code,{children:"source.globalVars"})," 会自动将传入的值进行 JSON 序列化处理，这使得设置全局变量的值更容易。注意 ",(0,c.jsx)(n.code,{children:"globalVars"})," 的每个值都需要是可以被 JSON 序列化的值。"]}),"\n",(0,c.jsx)(n.div,{className:"language-",children:(0,c.jsxs)(n.div,{className:"modern-code-content",children:[(0,c.jsx)(n.button,{className:"copy"}),(0,c.jsx)(n.pre,{className:"code",children:(0,c.jsx)(n.code,{className:"language-js",children:"export default {\n  source: {\n    globalVars: {\n      'process.env.BUILD_VERSION': '0.0.1',\n      'import.meta.foo': { bar: 42 },\n      'import.meta.baz': false,\n    },\n    define: {\n      'process.env.BUILD_VERSION': JSON.stringify('0.0.1'),\n      'import.meta': {\n        foo: JSON.stringify({ bar: 42 }),\n        baz: JSON.stringify(false),\n      },\n    },\n  },\n};\n"})})]})}),"\n",(0,c.jsxs)(n.h3,{id:"示例",children:["示例",(0,c.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#示例",children:"#"})]}),"\n",(0,c.jsx)(n.div,{className:"language-",children:(0,c.jsxs)(n.div,{className:"modern-code-content",children:[(0,c.jsx)(n.button,{className:"copy"}),(0,c.jsx)(n.pre,{className:"code",children:(0,c.jsx)(n.code,{className:"language-js",children:"export default {\n  source: {\n    globalVars: {\n      ENABLE_VCONSOLE: true,\n      APP_CONTEXT: { answer: 42 },\n    },\n  },\n};\n"})})]})})]})}var i=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=Object.assign({},(0,r.useMDXComponents)(),e.components).wrapper;return n?(0,c.jsx)(n,Object.assign({},e,{children:(0,c.jsx)(d,e)})):d(e)}}}]);