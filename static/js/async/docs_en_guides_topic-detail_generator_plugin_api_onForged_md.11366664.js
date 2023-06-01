(self.webpackChunk_modern_js_main_doc=self.webpackChunk_modern_js_main_doc||[]).push([["docs_en_guides_topic-detail_generator_plugin_api_onForged_md"],{64294:function(e,n,r){"use strict";Object.defineProperty(n,"__esModule",{value:!0});!function(e,n){for(var r in n)Object.defineProperty(e,r,{enumerable:!0,get:n[r]})}(n,{frontmatter:function(){return t},title:function(){return a},toc:function(){return s},default:function(){return c}});var i=r("9880"),d=r("23169"),t={sidebar_position:2},a="onForged",s=[{text:"Types",depth:2,id:"types"},{text:"Concepts",depth:2,id:"concepts"},{text:"File Types",depth:3,id:"file-types"},{text:"API",depth:2,id:"api"},{text:"addFile",depth:3,id:"addfile"},{text:"addManyFiles",depth:3,id:"addmanyfiles"},{text:"updateJSONFile",depth:3,id:"updatejsonfile"},{text:"updateTextRawFile",depth:3,id:"updatetextrawfile"},{text:"updateModernConfig (not recommended)",depth:3,id:"updatemodernconfig-(not-recommended)"},{text:"rmFile",depth:3,id:"rmfile"},{text:"rmDir",depth:3,id:"rmdir"},{text:"addHelper",depth:3,id:"addhelper"},{text:"addPartial",depth:3,id:"addpartial"},{text:"createElement",depth:3,id:"createelement"},{text:"enableFunc",depth:3,id:"enablefunc"}];function l(e){var n=Object.assign({h1:"h1",a:"a",p:"p",code:"code",h2:"h2",pre:"pre",h3:"h3",ul:"ul",li:"li",div:"div"},(0,d.useMDXComponents)(),e.components);return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsxs)(n.h1,{id:"onforged",children:["onForged",(0,i.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#onforged",children:"#"})]}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.code,{children:"onForged"})," is a lifecycle function used for file operations in generator plugin."]}),"\n",(0,i.jsxs)(n.h2,{id:"types",children:["Types",(0,i.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#types",children:"#"})]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-ts",children:"export type ForgedAPI = {\n  addFile: (params: AddFileParams) => Promise<void>;\n  addManyFiles: (params: AddManyFilesParams) => Promise<void>;\n  updateJSONFile: (fileName: string, updateInfo: Record<string, unknown>) => Promise<void>;\n  updateTextRawFile: (fileName: string, update: (content: string[]) => string[]) => Promise<void>;\n  updateModernConfig: (updateInfo: Record<string, any>) => Promise<void>;\n  rmFile: (fileName: string) => Promise<void>;\n  rmDir: (dirName: string) => Promise<void>;\n  addHelper: (name: string, fn: Handlebars.HelperDelegate) => void;\n  addPartial: (name: string, str: Handlebars.Template) => void;\n  createElement: (element: ActionElement, params: Record<string, unknown>) => Promise<void>;\n  enableFunc: (func: ActionFunction, params?: Record<string, unknown> | undefined) => Promise<void>;\n};\n\nexport type PluginForgedFunc = (\n  api: ForgedAPI,\n  inputData: Record<string, unknown>,\n) => void | Promise<void>;\n\nexport interface IPluginContext {\n  onForged: (func: PluginForgedFunc) => void;\n  ...\n}\n"})}),"\n",(0,i.jsxs)(n.p,{children:["The ",(0,i.jsx)(n.code,{children:"onForged"})," parameter is a callback function with ",(0,i.jsx)(n.code,{children:"api"})," and ",(0,i.jsx)(n.code,{children:"input"})," as parameters, which are used to provide the APIs and current input information provided by the lifecycle function."]}),"\n",(0,i.jsxs)(n.h2,{id:"concepts",children:["Concepts",(0,i.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#concepts",children:"#"})]}),"\n",(0,i.jsxs)(n.h3,{id:"file-types",children:["File Types",(0,i.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#file-types",children:"#"})]}),"\n",(0,i.jsx)(n.p,{children:"The generator plugin classifies files into four categories:"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"Text files"}),"\n"]}),"\n",(0,i.jsxs)(n.p,{children:["Files with pure text content that can be processed using ",(0,i.jsx)(n.a,{href:"https://handlebarsjs.com/",target:"_blank",rel:"noopener noreferrer",children:"Handlebars"})," or ",(0,i.jsx)(n.a,{href:"https://ejs.co/",target:"_blank",rel:"noopener noreferrer",children:"EJS"})," templates."]}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"Binary files"}),"\n"]}),"\n",(0,i.jsx)(n.p,{children:"Files such as images, audio, and video."}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"JSON files"}),"\n"]}),"\n",(0,i.jsx)(n.p,{children:"Files in JSON format."}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"Text list files"}),"\n"]}),"\n",(0,i.jsxs)(n.p,{children:["Files composed of lines of text, such as ",(0,i.jsx)(n.code,{children:".gitignore"}),", ",(0,i.jsx)(n.code,{children:".editorconfig"}),", and ",(0,i.jsx)(n.code,{children:".npmrc"}),"."]}),"\n",(0,i.jsx)(n.p,{children:"The type definitions for the four types of files are:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-ts",children:"export enum FileType {\n  Text = 'text',\n  Binary = 'binary',\n  Json = 'json',\n  TextRaw = 'textRaw',\n}\n"})}),"\n",(0,i.jsxs)(n.h2,{id:"api",children:["API",(0,i.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#api",children:"#"})]}),"\n",(0,i.jsxs)(n.p,{children:["The APIs provided by the ",(0,i.jsx)(n.code,{children:"api"})," parameter will be introduced below."]}),"\n",(0,i.jsxs)(n.h3,{id:"addfile",children:["addFile",(0,i.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#addfile",children:"#"})]}),"\n",(0,i.jsx)(n.p,{children:"Adds a single file."}),"\n",(0,i.jsx)(n.p,{children:"Parameter types:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-ts",children:"export interface AddFileParams {\n  type: FileType;\n  file: string;\n  template?: string;\n  templateFile?: string;\n  force?: boolean;\n  data?: Record<string, string>;\n}\n"})}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"type"}),": File type."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"file"}),": Target file path, relative to the target project directory."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"template"}),": Template content, the value of this field can be directly used to render the file. Lower priority than ",(0,i.jsx)(n.code,{children:"templateFile"}),"."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"templateFile"}),": Template file path, relative to the templates directory."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"force"}),": Whether to force overwrite when the target file exists, default is false."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"data"}),": Template rendering data."]}),"\n"]}),"\n",(0,i.jsxs)(n.div,{className:"modern-directive info",children:[(0,i.jsx)(n.div,{className:"modern-directive-title",children:"INFO"}),(0,i.jsx)(n.div,{className:"modern-directive-content",children:(0,i.jsxs)(n.p,{children:["Text files are processed using Handlebars by default. If the template file ends with ",(0,i.jsx)(n.code,{children:".ejs"}),", ",(0,i.jsx)(n.a,{href:"https://ejs.co/",target:"_blank",rel:"noopener noreferrer",children:"EJS"})," will be used for template rendering.\n"]})})]}),"\n",(0,i.jsxs)(n.p,{children:["For example, add the template file ",(0,i.jsx)(n.code,{children:"App.tsx.hanlebars"})," to ",(0,i.jsx)(n.code,{children:"src/App.tsx"}),":"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-ts",children:"context.onForged(async (api: ForgedAPI, _input: Record<string, unknown>) => {\n  await api.addFile({\n    type: FileType.Text,\n    file: `src/App.tsx`,\n    templateFile: `App.tsx.handlebars`,\n  });\n})\n"})}),"\n",(0,i.jsxs)(n.h3,{id:"addmanyfiles",children:["addManyFiles",(0,i.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#addmanyfiles",children:"#"})]}),"\n",(0,i.jsx)(n.p,{children:"Adds multiple files, usually used to add multiple files to the same target directory."}),"\n",(0,i.jsx)(n.p,{children:"Parameter types:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-ts",children:"export interface AddManyFilesParams {\n  type: FileType;\n  destination: string;\n  templateFiles: string[] | (() => string[]);\n  templateBase?: string;\n  fileNameFunc?: (name: string) => string;\n  data?: Record<string, string>;\n}\n"})}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"type"}),": File type."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"destination"}),": Target folder, relative path to the target project directory."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"templateFiles"}),": Template file list, supporting regular expressions from ",(0,i.jsx)(n.a,{href:"https://www.npmjs.com/package/globby",target:"_blank",rel:"noopener noreferrer",children:"globby"}),"."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"templateBase"}),": Common path of template files. When using this parameter, the target file will automatically delete this path."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"fileNameFunc"}),": Function to rename files. During the file addition process, the file name will be passed to this function in turn, and the renaming can be performed as needed."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"data"}),": Template rendering data."]}),"\n"]}),"\n",(0,i.jsxs)(n.p,{children:["For example, render all files in the ",(0,i.jsx)(n.code,{children:"src-ts"})," directory of the template file to the ",(0,i.jsx)(n.code,{children:"src"})," directory:"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-ts",children:"context.onForged(async (api: ForgedAPI, _input: Record<string, unknown>) => {\n  await api.addManyFiles({\n    type: FileType.Text,\n    destination: 'src',\n    templateFiles: ['src-ts/**/*'],\n    templateBase: 'src-ts',\n    fileNameFunc: name => name.replace('.handlebars', ''),\n  });\n})\n"})}),"\n",(0,i.jsxs)(n.h3,{id:"updatejsonfile",children:["updateJSONFile",(0,i.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#updatejsonfile",children:"#"})]}),"\n",(0,i.jsx)(n.p,{children:"Update fields in a JSON file."}),"\n",(0,i.jsx)(n.p,{children:"Parameter types:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-ts",children:"fileName: strings\nupdateInfo: Record<string, unknown>\n"})}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"fileName"}),": JSON file path, relative to the target project path."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"updateInfo"}),": Update information. Nested field updates need to be flattened, otherwise the entire update will cause content loss."]}),"\n"]}),"\n",(0,i.jsxs)(n.p,{children:["For example, update the ",(0,i.jsx)(n.code,{children:"name"})," field of ",(0,i.jsx)(n.code,{children:"package.json"}),":"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-ts",children:"context.onForged(async (api: ForgedAPI, _input: Record<string, unknown>) => {\n  await api.updateJSONFile('package.json', { name: 'new_name' });\n})\n"})}),"\n",(0,i.jsxs)(n.p,{children:["For example, update the version of ",(0,i.jsx)(n.code,{children:"react-dom"})," in ",(0,i.jsx)(n.code,{children:"dependencies"}),":"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-ts",children:"context.onForged(async (api: ForgedAPI, _input: Record<string, unknown>) => {\n  await api.updateJSONFile('package.json', {\n    'dependencies.react-dom': '^18',\n  });\n})\n"})}),"\n",(0,i.jsxs)(n.h3,{id:"updatetextrawfile",children:["updateTextRawFile",(0,i.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#updatetextrawfile",children:"#"})]}),"\n",(0,i.jsx)(n.p,{children:"Update the contents of a text list file."}),"\n",(0,i.jsx)(n.p,{children:"Parameter types:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-ts",children:"fileName: string\nupdate: (content: string[]) => string[]\n"})}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"fileName"}),": Text list file path, relative to the target project path."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"update"}),": Update function. The parameter is an array divided by ",(0,i.jsx)(n.code,{children:"\\n"})," of the current file content, and the return value is also the modified array after modification. ",(0,i.jsx)(n.code,{children:"@modern-js/create"})," will automatically merge it with ",(0,i.jsx)(n.code,{children:"\\n"})," and write it to the source file."]}),"\n"]}),"\n",(0,i.jsxs)(n.p,{children:["For example, add the ",(0,i.jsx)(n.code,{children:"dist"})," directory to the ",(0,i.jsx)(n.code,{children:".gitinore"})," file:"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-ts",children:"context.onForged(async (api: ForgedAPI, _input: Record<string, unknown>) => {\n  await api.updateTextRawFile('.gitinore', (content) => [...content, 'dist']);\n})\n"})}),"\n",(0,i.jsxs)(n.h3,{id:"updatemodernconfig-(not-recommended)",children:["updateModernConfig (not recommended)",(0,i.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#updatemodernconfig-(not-recommended)",children:"#"})]}),"\n",(0,i.jsxs)(n.p,{children:["In addition to configuring in ",(0,i.jsx)(n.code,{children:"modern.config.[tj]s"}),", Modern.js configuration also supports configuring ",(0,i.jsx)(n.code,{children:"modernConfig"})," in ",(0,i.jsx)(n.code,{children:"package.json"}),". This function is used to update this field."]}),"\n",(0,i.jsx)(n.p,{children:"Parameter types:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-ts",children:"updateInfo: Record<string, any>\n"})}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"updateInfo"}),": Update content information. ",(0,i.jsx)(n.code,{children:"updateModernConfig"})," is a package based on ",(0,i.jsx)(n.code,{children:"updateJSONFile"}),", which will automatically update under the ",(0,i.jsx)(n.code,{children:"edenxConfig"})," field. Only the configuration fields under ",(0,i.jsx)(n.code,{children:"modernConfig"})," need to be filled in ",(0,i.jsx)(n.code,{children:"updateInfo"}),"."]}),"\n"]}),"\n",(0,i.jsx)(n.p,{children:"For example, enable SSR:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-ts",children:"context.onForged(async (api: ForgedAPI, _input: Record<string, unknown>) => {\n  await api.updateModernConfig({ 'server.ssr': true });\n})\n"})}),"\n",(0,i.jsxs)(n.h3,{id:"rmfile",children:["rmFile",(0,i.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#rmfile",children:"#"})]}),"\n",(0,i.jsx)(n.p,{children:"Delete files."}),"\n",(0,i.jsx)(n.p,{children:"Parameter types:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-ts",children:"fileName: string\n"})}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"fileName"}),": The path of the file to be deleted, relative to the target project path."]}),"\n"]}),"\n",(0,i.jsxs)(n.h3,{id:"rmdir",children:["rmDir",(0,i.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#rmdir",children:"#"})]}),"\n",(0,i.jsx)(n.p,{children:"Delete a folder."}),"\n",(0,i.jsx)(n.p,{children:"Parameter types:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-ts",children:"dirName: string\n"})}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"dirName"}),": The path of the folder to be deleted, relative to the target project path."]}),"\n"]}),"\n",(0,i.jsxs)(n.h3,{id:"addhelper",children:["addHelper",(0,i.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#addhelper",children:"#"})]}),"\n",(0,i.jsxs)(n.p,{children:["Add a ",(0,i.jsx)(n.a,{href:"https://handlebarsjs.com/guide/#custom-helpers",target:"_blank",rel:"noopener noreferrer",children:"custom helper"})," rendered by handlebrs."]}),"\n",(0,i.jsx)(n.p,{children:"Parameter types:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-ts",children:"name: string\nfn: Handlebars.HelperDelegate\n"})}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"name"}),": Helper function name."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"fn"}),": Helper function implementation."]}),"\n"]}),"\n",(0,i.jsxs)(n.h3,{id:"addpartial",children:["addPartial",(0,i.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#addpartial",children:"#"})]}),"\n",(0,i.jsxs)(n.p,{children:["Add a ",(0,i.jsx)(n.a,{href:"https://handlebarsjs.com/guide/partials.html#basic-partials",target:"_blank",rel:"noopener noreferrer",children:"Partial"})," rendered by Handlebars."]}),"\n",(0,i.jsx)(n.p,{children:"Parameter types:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-ts",children:"name: string\nstr: Handlebars.Template\n"})}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"name"}),": Partial name."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"str"}),": Template string of the Partial."]}),"\n"]}),"\n",(0,i.jsxs)(n.h3,{id:"createelement",children:["createElement",(0,i.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#createelement",children:"#"})]}),"\n",(0,i.jsxs)(n.p,{children:["Automatically run the ",(0,i.jsx)(n.code,{children:"new"})," command to create project elements."]}),"\n",(0,i.jsx)(n.p,{children:"Parameter types:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-ts",children:"element: ActionElement\nparams: Record<string, unknown>\n"})}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"element"}),": Type of project element, new entry or new custom Web Server source directory."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"params"}),": Other parameters corresponding to creating project elements."]}),"\n"]}),"\n",(0,i.jsxs)(n.h3,{id:"enablefunc",children:["enableFunc",(0,i.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#enablefunc",children:"#"})]}),"\n",(0,i.jsxs)(n.p,{children:["Automatically run the ",(0,i.jsx)(n.code,{children:"new"})," command to enable optional features."]}),"\n",(0,i.jsx)(n.p,{children:"Parameter types:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-ts",children:"func: ActionFunction\nparams?: Record<string, unknown>\n"})}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"func"}),": Name of the feature to enable."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"params"}),": Other parameters corresponding to enabling the feature."]}),"\n"]}),"\n",(0,i.jsxs)(n.div,{className:"modern-directive info",children:[(0,i.jsx)(n.div,{className:"modern-directive-title",children:"INFO"}),(0,i.jsx)(n.div,{className:"modern-directive-content",children:(0,i.jsxs)(n.p,{children:["Refer to ",(0,i.jsx)(n.a,{href:"/guides/topic-detail/generator/new/config",children:"Configuration Parameters"})," for creating project elements and enabling feature configurations.\n"]})})]})]})}var c=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=Object.assign({},(0,d.useMDXComponents)(),e.components).wrapper;return n?(0,i.jsx)(n,Object.assign({},e,{children:(0,i.jsx)(l,e)})):l(e)}}}]);