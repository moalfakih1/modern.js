(self.webpackChunk_modern_js_main_doc=self.webpackChunk_modern_js_main_doc||[]).push([["docs_zh_guides_topic-detail_generator_plugin_api_input_md"],{83365:function(e,n,r){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),Object.defineProperty(n,"default",{enumerable:!0,get:function(){return h}});var a,i=r("15169"),s=r("43932"),t=r("9880"),d=r("23169");function c(e){var n=Object.assign({h1:"h1",a:"a",p:"p",pre:"pre",code:"code",h2:"h2"},(0,d.useMDXComponents)(),e.components);return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)(n.h1,{id:"input",children:["Input",(0,t.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#input",children:"#"})]}),"\n",(0,t.jsx)(n.p,{children:"生成器插件提供了 Input 的方式完成与用户的问题交互，使用 JSON Schema 的方式进行定义："}),"\n",(0,t.jsx)(n.p,{children:"例如："}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-js",children:"const schema = {\n  type: 'object',\n  properties: {\n    language: {\n      type: 'string',\n      title: '开发语言',\n      enum: [\n        { label: 'TS', value: 'ts' },\n        { label: 'ES6+', value: 'js' },\n      ],\n    },\n  },\n};\n"})}),"\n",(0,t.jsxs)(n.p,{children:["JSON Schema 的格式参考了开源的 ",(0,t.jsx)(n.a,{href:"https://formilyjs.org/",target:"_blank",rel:"noopener noreferrer",children:"Formily"})," Schema 的格式，下面将对支持的字段进行介绍："]}),"\n",(0,t.jsxs)(n.h2,{id:"type",children:["type",(0,t.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#type",children:"#"})]}),"\n",(0,t.jsxs)(n.p,{children:["定义当前 Schema 类型，当前支持的类型为 ",(0,t.jsx)(n.code,{children:"string"}),"、",(0,t.jsx)(n.code,{children:"number"})," 和 ",(0,t.jsx)(n.code,{children:"object"}),"。字符串输入和下拉选项都需要使用 ",(0,t.jsx)(n.code,{children:"string"})," 类型。 ",(0,t.jsx)(n.code,{children:"object"})," 类型用于实现 Schema 之间嵌套，需要配和 ",(0,t.jsx)(n.code,{children:"properties"})," 属性使用。"]}),"\n",(0,t.jsxs)(n.h2,{id:"title",children:["title",(0,t.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#title",children:"#"})]}),"\n",(0,t.jsx)(n.p,{children:"定义当前 Schema 展示名称。"}),"\n",(0,t.jsxs)(n.h2,{id:"default",children:["default",(0,t.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#default",children:"#"})]}),"\n",(0,t.jsx)(n.p,{children:"定义当前 Schema 的默认值。"}),"\n",(0,t.jsxs)(n.h2,{id:"enum",children:["enum",(0,t.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#enum",children:"#"})]}),"\n",(0,t.jsx)(n.p,{children:"当前 Schema 为下列选项时，定义选项内容。"}),"\n",(0,t.jsxs)(n.p,{children:["子项支持 ",(0,t.jsx)(n.code,{children:"string"})," 或者 ",(0,t.jsx)(n.code,{children:"{ label: string; value: string}"})," 类型，当下拉选项中值和展示值相同时，可直接使用 ",(0,t.jsx)(n.code,{children:"string"})," 定义。"]}),"\n",(0,t.jsxs)(n.p,{children:["当需要表示多选选项时，设置 ",(0,t.jsx)(n.code,{children:"default"})," 字段为 ",(0,t.jsx)(n.code,{children:"[]"})," 即可。"]}),"\n",(0,t.jsxs)(n.h2,{id:"x-validator",children:["x-validator",(0,t.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#x-validator",children:"#"})]}),"\n",(0,t.jsx)(n.p,{children:"当前 Schema 的校验规则。当 Schema 为输入类型时，在输入完成后会自动完成校验。"}),"\n",(0,t.jsxs)(n.p,{children:["这里校验规则支持",(0,t.jsx)(n.a,{href:"https://formilyjs.org/zh-CN/guide/advanced/validate",target:"_blank",rel:"noopener noreferrer",children:" Formily 提供的校验规则"}),"，例如最大值为 5："]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-js",children:"const schema = {\n  type: 'object',\n  properties: {\n    max_5: {\n      type: 'number',\n      title: '最大值(>5报错)',\n      'x-validator': {\n        maximum: 5,\n      },\n    },\n  },\n};\n"})}),"\n",(0,t.jsx)(n.p,{children:"也支持直接使用验证函数："}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-js",children:"const schema = {\n  type: 'object',\n  properties: {\n    path: {\n      type: 'string',\n      title: '只能包含数字和字母',\n      'x-validator': value => {\n        if (!/^[0-9a-zA-Z]*$/g.test(value)) {\n          return '格式不正确';\n        }\n        return '';\n      },\n    },\n  },\n};\n"})}),"\n",(0,t.jsxs)(n.h2,{id:"x-reactions",children:["x-reactions",(0,t.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#x-reactions",children:"#"})]}),"\n",(0,t.jsxs)(n.p,{children:["使用 Schema 之间的联动，这里和",(0,t.jsx)(n.a,{href:"https://formilyjs.org/zh-CN/guide/advanced/linkages",target:"_blank",rel:"noopener noreferrer",children:" Formily 联动规则"}),"完全相同。"]}),"\n",(0,t.jsx)(n.p,{children:"例如："}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-js",children:"const schema = {\n  type: 'object',\n  properties: {\n    name: {\n      type: 'string',\n      title: '名称',\n    },\n    path: {\n      type: 'string',\n      title: '路径',\n      'x-reactions': [\n        {\n          dependencies: ['name'],\n          fulfill: {\n            state: {\n              value: '{{$deps[0]}}',\n            },\n          },\n        },\n      ],\n    },\n  },\n};\n"})}),"\n",(0,t.jsxs)(n.h2,{id:"properties",children:["properties",(0,t.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#properties",children:"#"})]}),"\n",(0,t.jsxs)(n.p,{children:["组织当前 Schema 的结构，定义子表单。",(0,t.jsx)(n.code,{children:"properties"})," 为对象，",(0,t.jsx)(n.code,{children:"key"})," 为 Schema 关键字，",(0,t.jsx)(n.code,{children:"value"})," 为上述描述的 Schema 对象。"]})]})}(a=globalThis).__RSPRESS_PAGE_META||(a.__RSPRESS_PAGE_META={}),globalThis.__RSPRESS_PAGE_META["/home/runner/work/modern.js/modern.js/packages/document/main-doc/docs/zh/guides/topic-detail/generator/plugin/api/input.md"]={toc:[{text:"type",id:"type",depth:2},{text:"title",id:"title",depth:2},{text:"default",id:"default",depth:2},{text:"enum",id:"enum",depth:2},{text:"x-validator",id:"x-validator",depth:2},{text:"x-reactions",id:"x-reactions",depth:2},{text:"properties",id:"properties",depth:2}],title:"Input",frontmatter:{sidebar_position:4}};var h=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=Object.assign({},(0,d.useMDXComponents)(),e.components).wrapper;return n?(0,t.jsx)(n,s._(i._({},e),{children:(0,t.jsx)(c,i._({},e))})):c(e)}}}]);