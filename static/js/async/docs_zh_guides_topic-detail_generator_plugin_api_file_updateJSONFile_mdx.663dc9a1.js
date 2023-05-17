(self.webpackChunk_modern_js_main_doc=self.webpackChunk_modern_js_main_doc||[]).push([["docs_zh_guides_topic-detail_generator_plugin_api_file_updateJSONFile_mdx"],{462:function(e,n,i){"use strict";Object.defineProperty(n,"__esModule",{value:!0});!function(e,n){for(var i in n)Object.defineProperty(e,i,{enumerable:!0,get:n[i]})}(n,{frontmatter:function(){return s},title:function(){return r},toc:function(){return c},default:function(){return t}});var d=i("9880"),a=i("23169"),s={sidebar_position:6},r="updateJSONFile",c=[{text:"fileName",depth:2,id:"filename"},{text:"updateInfo",depth:2,id:"updateinfo"}];function l(e){var n=Object.assign({h1:"h1",a:"a",p:"p",code:"code",div:"div",pre:"pre",h2:"h2"},(0,a.useMDXComponents)(),e.components);return(0,d.jsxs)(d.Fragment,{children:[(0,d.jsxs)(n.h1,{id:"updatejsonfile",children:["updateJSONFile",(0,d.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#updatejsonfile",children:"#"})]}),"\n",(0,d.jsx)(n.p,{children:"更新 JSON 文件字段。"}),"\n",(0,d.jsx)(n.p,{children:"该方法适用于 JSON 文件类型，可批量更新 JSON 文件中字段值。"}),"\n",(0,d.jsxs)(n.p,{children:["该方法可在 ",(0,d.jsx)(n.code,{children:"onForged"})," 生命周期的 api 参数上获取。"]}),"\n",(0,d.jsx)(n.p,{children:"其类型定义为："}),"\n",(0,d.jsx)(n.div,{className:"language-",children:(0,d.jsx)(n.div,{className:"modern-code-content",children:(0,d.jsx)(n.pre,{className:"code",children:(0,d.jsx)(n.code,{className:"language-ts",children:"export type ForgedAPI = {\n  updateJSONFile: (\n    fileName: string,\n    updateInfo: Record<string, unknown>,\n  ) => Promise<void>;\n  ...\n};\n"})})})}),"\n",(0,d.jsxs)(n.h2,{id:"filename",children:["fileName",(0,d.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#filename",children:"#"})]}),"\n",(0,d.jsx)(n.p,{children:"JSON 文件的文件名或者文件路径。"}),"\n",(0,d.jsxs)(n.h2,{id:"updateinfo",children:["updateInfo",(0,d.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#updateinfo",children:"#"})]}),"\n",(0,d.jsx)(n.p,{children:"字段更新信息。"}),"\n",(0,d.jsxs)(n.p,{children:["该信息使用 ",(0,d.jsx)(n.code,{children:"Record"})," 形式表示。"]}),"\n",(0,d.jsx)(n.p,{children:"例如需要更新 name 字段："}),"\n",(0,d.jsx)(n.div,{className:"language-",children:(0,d.jsx)(n.div,{className:"modern-code-content",children:(0,d.jsx)(n.pre,{className:"code",children:(0,d.jsx)(n.code,{className:"language-ts",children:"api.updateJSONFile(file, {\n  name: '新名称',\n});\n"})})})}),"\n",(0,d.jsx)(n.p,{children:"需更新嵌套字段："}),"\n",(0,d.jsx)(n.div,{className:"language-",children:(0,d.jsx)(n.div,{className:"modern-code-content",children:(0,d.jsx)(n.pre,{className:"code",children:(0,d.jsx)(n.code,{className:"language-ts",children:"api.updateJSONFile(file, {\n  'dependencies.name': '新名称',\n});\n"})})})}),"\n",(0,d.jsxs)(n.div,{className:"modern-directive warning",children:[(0,d.jsx)(n.div,{className:"modern-directive-title",children:"WARNING"}),(0,d.jsxs)(n.div,{className:"modern-directive-content",children:[(0,d.jsx)(n.p,{children:"更新嵌套字段时注意字段名，如果不是全量更新，需将嵌套的 key 也写入字段名中。"}),"\n"]})]})]})}var t=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=Object.assign({},(0,a.useMDXComponents)(),e.components).wrapper;return n?(0,d.jsx)(n,Object.assign({},e,{children:(0,d.jsx)(l,e)})):l(e)}}}]);