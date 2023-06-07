(self.webpackChunk_modern_js_main_doc=self.webpackChunk_modern_js_main_doc||[]).push([["docs_en_guides_topic-detail_generator_plugin_structure_md"],{5863:function(e,n,t){"use strict";Object.defineProperty(n,"__esModule",{value:!0});!function(e,n){for(var t in n)Object.defineProperty(e,t,{enumerable:!0,get:n[t]})}(n,{frontmatter:function(){return o},title:function(){return s},toc:function(){return a},default:function(){return d}});var r=t("9880"),i=t("23169"),o={sidebar_position:1},s="Introduction and Project Creation",a=[{text:"Introduction",depth:2,id:"introduction"},{text:"Create Project",depth:2,id:"create-project"},{text:"package.json",depth:2,id:"packagejson"},{text:"src/index.ts",depth:2,id:"src/indexts"},{text:"templates",depth:2,id:"templates"}];function c(e){var n=Object.assign({h1:"h1",a:"a",h2:"h2",p:"p",code:"code",pre:"pre"},(0,i.useMDXComponents)(),e.components);return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(n.h1,{id:"introduction-and-project-creation",children:["Introduction and Project Creation",(0,r.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#introduction-and-project-creation",children:"#"})]}),"\n",(0,r.jsxs)(n.h2,{id:"introduction",children:["Introduction",(0,r.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#introduction",children:"#"})]}),"\n",(0,r.jsxs)(n.p,{children:["Modern.js provides engineering solutions such as Web App and Npm Module. By using the ",(0,r.jsx)(n.code,{children:"@modern-js/create"})," tool, you can create initial project templates for engineering solutions. The initial project template provides a basic code development environment, simple example code, and configuration, etc."]}),"\n",(0,r.jsx)(n.p,{children:"The initial templates provided by Modern.js are generic and can meet some common project development needs."}),"\n",(0,r.jsx)(n.p,{children:"When you use Modern.js deeply, you will inevitably find that each created project will make some specific similar changes for its own project, such as modifying example code, adding some configurations, enabling certain features, etc."}),"\n",(0,r.jsxs)(n.p,{children:["Generator plugin can help you to deposit these specific changes for individuals or teams. When running ",(0,r.jsx)(n.code,{children:"npx @modern-js/create@latest"}),", you only need to simply add the ",(0,r.jsx)(n.code,{children:"--plugin"})," parameter to avoid repetitive modification of the project after each project creation."]}),"\n",(0,r.jsxs)(n.p,{children:["Generator plugin is based on the initial template projects provided by Modern.js, providing methods to add, delete, and modify templates, and modifying ",(0,r.jsx)(n.code,{children:"package.json"}),", ",(0,r.jsx)(n.code,{children:"modernConfig"})," configurations, and enabling features through a convenient way."]}),"\n",(0,r.jsxs)(n.h2,{id:"create-project",children:["Create Project",(0,r.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#create-project",children:"#"})]}),"\n",(0,r.jsxs)(n.p,{children:["Use ",(0,r.jsx)(n.code,{children:"@modern-js/create"})," to create a generator plugin project directly:"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:"npx @modern-js/create@latest plugin --plugin @modern-js/generator-plugin-plugin\n? Please select the type of project you want to create: Npm Module\n? Please select the project scenario: Generator Plugin\n? Please fill in the package name of the generator plugin: plugin\n? Please select the programming language: TS\n? Please select the package manager: pnpm\n? Please select the type of plugin: extend\n? Please select the base type of the plugin: Web App\n"})}),"\n",(0,r.jsx)(n.p,{children:"After creating, we can take a look at the directory structure of this project:"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:".\n├── .changeset\n│   └── config.json\n├── .eslintrc.js\n├── .gitignore\n├── .npmrc\n├── .nvmrc\n├── .prettierrc\n├── README.md\n├── modern.config.ts\n├── package.json\n├── src\n│   ├── modern-app-env.d.ts\n│   └── index.ts\n├── templates\n│   └── .gitkeep\n└── tsconfig.json\n"})}),"\n",(0,r.jsx)(n.p,{children:"The project is based on the Npm module project, and the core files are as follows:"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:"*\n├── package.json\n├── src\n│   └── index.ts\n├── templates\n│   └── .gitkeep\n"})}),"\n",(0,r.jsxs)(n.h2,{id:"packagejson",children:["package.json",(0,r.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#packagejson",children:"#"})]}),"\n",(0,r.jsxs)(n.p,{children:["In addition to the normal fields of a module project, ",(0,r.jsx)(n.code,{children:"package.json"})," provides a ",(0,r.jsx)(n.code,{children:"meta"})," field to describe information about the generator plugin."]}),"\n",(0,r.jsxs)(n.p,{children:["Generator plugin is divided into two categories: extension and custom. For specific classification definitions, please refer to ",(0,r.jsx)(n.a,{href:"/guides/topic-detail/generator/plugin/category",children:"Type"}),"."]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-json",meta:'title="package.json"',children:'{\n  ...,\n  "meta": {\n    "extend": "mwa"\n  }\n}\n'})}),"\n",(0,r.jsxs)(n.h2,{id:"src/indexts",children:["src/index.ts",(0,r.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#src/indexts",children:"#"})]}),"\n",(0,r.jsx)(n.p,{children:"This file is used to complete the content development of the generator plugin."}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-js",children:"import { IPluginContext, ForgedAPI } from '@modern-js/generator-plugin';\n\nexport default function (context: IPluginContext) {\n  context.onForged(async (_api: ForgedAPI, _input: Record<string, unknown>) => {\n    /**\n     * todo\n     */\n  });\n}\n"})}),"\n",(0,r.jsxs)(n.p,{children:["This file exports a function by default, and the function takes ",(0,r.jsx)(n.code,{children:"context"})," as a parameter. The ",(0,r.jsx)(n.code,{children:"context"})," object provides API methods supported by the generator plugin, which can be used to implement the logic of the generator plugin. The capabilities provided by ",(0,r.jsx)(n.code,{children:"context"})," can be found in ",(0,r.jsx)(n.a,{href:"/guides/topic-detail/generator/plugin/context",children:"context"}),"."]}),"\n",(0,r.jsxs)(n.h2,{id:"templates",children:["templates",(0,r.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#templates",children:"#"})]}),"\n",(0,r.jsxs)(n.p,{children:["The ",(0,r.jsx)(n.code,{children:"templates"})," directory contains template files for the current customization method, supporting ",(0,r.jsx)(n.a,{href:"https://handlebarsjs.com/",target:"_blank",rel:"noopener noreferrer",children:"Handlebars"})," and ",(0,r.jsx)(n.a,{href:"https://ejs.co/",target:"_blank",rel:"noopener noreferrer",children:"EJS"})," formats. Different rendering engines will be used for rendering according to the template file suffix. If there is no suffix, the template file will be copied directly to the target directory."]}),"\n",(0,r.jsxs)(n.p,{children:["If the template file is a ",(0,r.jsx)(n.code,{children:"js"}),", ",(0,r.jsx)(n.code,{children:"ts"}),", or ",(0,r.jsx)(n.code,{children:"json"})," file, it is recommended to use the ",(0,r.jsx)(n.code,{children:".handlebars"})," or ",(0,r.jsx)(n.code,{children:".ejs"})," suffix directly to avoid project eslint errors and recognition issues in Monorepo projects."]}),"\n",(0,r.jsxs)(n.p,{children:["The ",(0,r.jsx)(n.code,{children:".gitignore"})," and ",(0,r.jsx)(n.code,{children:".npmrc"})," files in the template will be automatically deleted when publishing the npm package, so it is necessary to use the ",(0,r.jsx)(n.code,{children:".handlebars"})," or ",(0,r.jsx)(n.code,{children:".ejs"})," suffix to keep them."]})]})}var d=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=Object.assign({},(0,i.useMDXComponents)(),e.components).wrapper;return n?(0,r.jsx)(n,Object.assign({},e,{children:(0,r.jsx)(c,e)})):c(e)}}}]);