(self.webpackChunk_modern_js_main_doc=self.webpackChunk_modern_js_main_doc||[]).push([["docs_en_guides_topic-detail_generator_project_mdx"],{51197:function(e,r,n){"use strict";Object.defineProperty(r,"__esModule",{value:!0});!function(e,r){for(var n in r)Object.defineProperty(e,n,{enumerable:!0,get:r[n]})}(r,{frontmatter:function(){return t},title:function(){return s},toc:function(){return c},default:function(){return o}});var i=n("9880"),a=n("23169"),t={sidebar_position:2},s="Project Generator",c=[{text:"Use",depth:2,id:"use"},{text:"Params",depth:2,id:"params"},{text:"[projectDir]",depth:3,id:"[projectdir]"},{text:"--version",depth:3,id:"--version"},{text:"--lang",depth:3,id:"--lang"},{text:"-c, --config",depth:3,id:"-c,---config"},{text:"--no-need-install",depth:3,id:"--no-need-install"},{text:"--dist-tag <distTag>",depth:3,id:"--dist-tag-<disttag>"},{text:"--registry <registry/>",depth:3,id:"--registry-<registry/>"},{text:"--debug",depth:3,id:"--debug"},{text:"--mwa",depth:3,id:"--mwa"},{text:"--module",depth:3,id:"--module"},{text:"--monorepo",depth:3,id:"--monorepo"},{text:"--plugin <plugin>",depth:3,id:"--plugin-<plugin>"},{text:"--generator <generator>",depth:3,id:"--generator-<generator>"},{text:"--packages <packages>",depth:3,id:"--packages-<packages>"}];function d(e){var r=Object.assign({h1:"h1",a:"a",p:"p",code:"code",h2:"h2",pre:"pre",div:"div",h3:"h3"},(0,a.useMDXComponents)(),e.components);return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsxs)(r.h1,{id:"project-generator",children:["Project Generator",(0,i.jsx)(r.a,{className:"header-anchor","aria-hidden":"true",href:"#project-generator",children:"#"})]}),"\n",(0,i.jsxs)(r.p,{children:["Modern.js provides ",(0,i.jsx)(r.code,{children:"@modern-js/create"})," as a project generator for Modern.js project creation."]}),"\n",(0,i.jsxs)(r.h2,{id:"use",children:["Use",(0,i.jsx)(r.a,{className:"header-anchor","aria-hidden":"true",href:"#use",children:"#"})]}),"\n",(0,i.jsxs)(r.p,{children:["There is no need to install ",(0,i.jsx)(r.code,{children:"@modern-js/create"})," globally, just execute the tool directly with npx:"]}),"\n",(0,i.jsx)(r.pre,{children:(0,i.jsx)(r.code,{className:"language-bash",children:"npx @modern-js/create@latest [projectDir]\n"})}),"\n",(0,i.jsxs)(r.div,{className:"modern-directive info",children:[(0,i.jsx)(r.div,{className:"modern-directive-title",children:"INFO"}),(0,i.jsxs)(r.div,{className:"modern-directive-content",children:[(0,i.jsxs)(r.p,{children:["Use npx to get the latest version of ",(0,i.jsx)(r.code,{children:"@modern-js/create"})," every time."]}),"\n"]})]}),"\n",(0,i.jsxs)(r.h2,{id:"params",children:["Params",(0,i.jsx)(r.a,{className:"header-anchor","aria-hidden":"true",href:"#params",children:"#"})]}),"\n",(0,i.jsxs)(r.h3,{id:"[projectdir]",children:["[projectDir]",(0,i.jsx)(r.a,{className:"header-anchor","aria-hidden":"true",href:"#[projectdir]",children:"#"})]}),"\n",(0,i.jsx)(r.p,{children:"Project directory name."}),"\n",(0,i.jsxs)(r.p,{children:["When executing the above command, the ",(0,i.jsx)(r.code,{children:"projectDir"})," folder will be created in the current directory by default, and the initialization project will be in this folder. When this parameter is empty, the initialization project will be directly generated in the current directory."]}),"\n",(0,i.jsxs)(r.h3,{id:"--version",children:["--version",(0,i.jsx)(r.a,{className:"header-anchor","aria-hidden":"true",href:"#--version",children:"#"})]}),"\n",(0,i.jsxs)(r.p,{children:["Get the ",(0,i.jsx)(r.code,{children:"@modern-js/create"})," tool version."]}),"\n",(0,i.jsx)(r.pre,{children:(0,i.jsx)(r.code,{className:"language-bash",children:"$ npx @modern-js/create@latest --version\n\n[INFO] @modern-js/create v2.0.0\n"})}),"\n",(0,i.jsxs)(r.h3,{id:"--lang",children:["--lang",(0,i.jsx)(r.a,{className:"header-anchor","aria-hidden":"true",href:"#--lang",children:"#"})]}),"\n",(0,i.jsxs)(r.p,{children:["Specifies the execution language, supports ",(0,i.jsx)(r.code,{children:"zh"})," and ",(0,i.jsx)(r.code,{children:"en"}),"."]}),"\n",(0,i.jsxs)(r.p,{children:["By default, ",(0,i.jsx)(r.code,{children:"@modern-js/create"})," will automatically identify the user's system language, choose to use Chinese or English, if the recognition fails or you want to specify the language manually, you can use this parameter."]}),"\n",(0,i.jsxs)(r.h3,{id:"-c,---config",children:["-c, --config",(0,i.jsx)(r.a,{className:"header-anchor","aria-hidden":"true",href:"#-c,---config",children:"#"})]}),"\n",(0,i.jsx)(r.p,{children:"Specifies the project default configuration."}),"\n",(0,i.jsxs)(r.p,{children:["By default, ",(0,i.jsx)(r.code,{children:"@modern-js/create"})," will have interaction problems such as language selection and package managers during execution. When you need to specify these configuration contents in advance, you can pass in this field."]}),"\n",(0,i.jsx)(r.p,{children:"This field is a JSON character string, for example when running a package manager:"}),"\n",(0,i.jsx)(r.pre,{children:(0,i.jsx)(r.code,{className:"language-bash",children:'npx @modern-js/create@latest --config \'{"packageManager": "pnpm"}\'\n'})}),"\n",(0,i.jsxs)(r.p,{children:["Specific configuration information viewable ",(0,i.jsx)(r.a,{href:"/guides/topic-detail/generator/config/common",children:"Project Configuration"}),"."]}),"\n",(0,i.jsxs)(r.h3,{id:"--no-need-install",children:["--no-need-install",(0,i.jsx)(r.a,{className:"header-anchor","aria-hidden":"true",href:"#--no-need-install",children:"#"})]}),"\n",(0,i.jsxs)(r.p,{children:["By default, ",(0,i.jsx)(r.code,{children:"@modern-js/create"})," automatically installs dependency after the project is created, use this parameter to ignore the install dependency step."]}),"\n",(0,i.jsxs)(r.h3,{id:"--dist-tag-<disttag>",children:["--dist-tag <distTag>",(0,i.jsx)(r.a,{className:"header-anchor","aria-hidden":"true",href:"#--dist-tag-<disttag>",children:"#"})]}),"\n",(0,i.jsx)(r.p,{children:"Specifies the generator and Modern.js dependency versions."}),"\n",(0,i.jsxs)(r.p,{children:["A smaller micro-generator will be executed during the execution of ",(0,i.jsx)(r.code,{children:"@modern-js/create"}),", and the version number of the micro-generator that can be executed with this parameter and the version number of the corresponding installation Modern.js related dependencies."]}),"\n",(0,i.jsxs)(r.h3,{id:"--registry-<registry/>",children:["--registry <registry/>",(0,i.jsx)(r.a,{className:"header-anchor","aria-hidden":"true",href:"#--registry-<registry/>",children:"#"})]}),"\n",(0,i.jsx)(r.p,{children:"Execute the npm registry to get the generator and npm packages."}),"\n",(0,i.jsxs)(r.h3,{id:"--debug",children:["--debug",(0,i.jsx)(r.a,{className:"header-anchor","aria-hidden":"true",href:"#--debug",children:"#"})]}),"\n",(0,i.jsx)(r.p,{children:"Displays debug log information during generator execution."}),"\n",(0,i.jsxs)(r.h3,{id:"--mwa",children:["--mwa",(0,i.jsx)(r.a,{className:"header-anchor","aria-hidden":"true",href:"#--mwa",children:"#"})]}),"\n",(0,i.jsx)(r.p,{children:"One-click to create an application engineering solution project."}),"\n",(0,i.jsxs)(r.p,{children:["With this parameter, ",(0,i.jsx)(r.code,{children:"@modern-js/create"})," will create the application project with the configuration default value."]}),"\n",(0,i.jsxs)(r.h3,{id:"--module",children:["--module",(0,i.jsx)(r.a,{className:"header-anchor","aria-hidden":"true",href:"#--module",children:"#"})]}),"\n",(0,i.jsx)(r.p,{children:"One-click to create a module engineering solution project."}),"\n",(0,i.jsxs)(r.p,{children:["With this parameter, ",(0,i.jsx)(r.code,{children:"@modern-js/create"})," will create the module project with the configuration default value."]}),"\n",(0,i.jsxs)(r.h3,{id:"--monorepo",children:["--monorepo",(0,i.jsx)(r.a,{className:"header-anchor","aria-hidden":"true",href:"#--monorepo",children:"#"})]}),"\n",(0,i.jsx)(r.p,{children:"One-click to create a Monorepo engineering solution project."}),"\n",(0,i.jsxs)(r.p,{children:["With this parameter, ",(0,i.jsx)(r.code,{children:"@modern-js/create"})," will create the Monorepo project with the configuration default value."]}),"\n",(0,i.jsxs)(r.h3,{id:"--plugin-<plugin>",children:["--plugin <plugin>",(0,i.jsx)(r.a,{className:"header-anchor","aria-hidden":"true",href:"#--plugin-<plugin>",children:"#"})]}),"\n",(0,i.jsx)(r.p,{children:"Specifies the generator plugin."}),"\n",(0,i.jsx)(r.p,{children:"Modern.js support the use of the generator plug-in custom Modern.js the default project type or add the project type scenes, the parameter user specifies the customized generator plugin."}),"\n",(0,i.jsxs)(r.p,{children:["For custom generator plugins, please refer to ",(0,i.jsx)(r.a,{href:"/guides/topic-detail/generator/plugin/abstract",children:"Development Generator Plugin"}),"."]}),"\n",(0,i.jsxs)(r.h3,{id:"--generator-<generator>",children:["--generator <generator>",(0,i.jsx)(r.a,{className:"header-anchor","aria-hidden":"true",href:"#--generator-<generator>",children:"#"})]}),"\n",(0,i.jsx)(r.p,{children:"Specifies the microgenerator."}),"\n",(0,i.jsxs)(r.p,{children:["By default, ",(0,i.jsx)(r.code,{children:"@modern-js/create"})," will execute the microgenerator Modern.js framework build-in. If you need to execute a customized microgenerator, and you need to use the posture of ",(0,i.jsx)(r.code,{children:"npx @modern-js/create@latest"}),", you can use this parameter directly."]}),"\n",(0,i.jsxs)(r.p,{children:["For custom microgenerators, please refer to ",(0,i.jsx)(r.a,{href:"/guides/topic-detail/generator/codesmith/introduce",children:"Develop Microgenerator"}),"."]}),"\n",(0,i.jsxs)(r.h3,{id:"--packages-<packages>",children:["--packages <packages>",(0,i.jsx)(r.a,{className:"header-anchor","aria-hidden":"true",href:"#--packages-<packages>",children:"#"})]}),"\n",(0,i.jsx)(r.p,{children:"A project is created by specifying a specific package version dependency."}),"\n",(0,i.jsxs)(r.p,{children:["If you need to specify a specific package version when creating a project, you can use this parameter. This parameter will lock the package version number in the ",(0,i.jsx)(r.code,{children:"package.json"})," of the project root directory by configuration ",(0,i.jsx)(r.code,{children:"pnpm.overrides"})," (package manager selects pnpm) or ",(0,i.jsx)(r.code,{children:"resolutions"}),"."]}),"\n",(0,i.jsx)(r.p,{children:"The parameter value is a JSON character string."})]})}var o=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},r=Object.assign({},(0,a.useMDXComponents)(),e.components).wrapper;return r?(0,i.jsx)(r,Object.assign({},e,{children:(0,i.jsx)(d,e)})):d(e)}}}]);