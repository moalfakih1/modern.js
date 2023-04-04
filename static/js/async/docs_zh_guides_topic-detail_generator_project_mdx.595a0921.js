(self.webpackChunkwebpack=self.webpackChunkwebpack||[]).push([["docs_zh_guides_topic-detail_generator_project_mdx"],{16757:function(e,n,r){"use strict";Object.defineProperty(n,"__esModule",{value:!0});!function(e,n){for(var r in n)Object.defineProperty(e,r,{enumerable:!0,get:n[r]})}(n,{frontmatter:function(){return i},title:function(){return a},toc:function(){return c},default:function(){return t}});var d=r("12151"),s=r("21447");let i={sidebar_position:2},a="项目生成器",c=[{text:"使用",depth:2,id:"使用"},{text:"参数",depth:2,id:"参数"},{text:"[projectDir]",depth:3,id:"[projectdir]"},{text:"--version",depth:3,id:"--version"},{text:"--lang",depth:3,id:"--lang"},{text:"-c, --config",depth:3,id:"-c,---config"},{text:"--no-need-install",depth:3,id:"--no-need-install"},{text:"--dist-tag <distTag>",depth:3,id:"--dist-tag-<disttag>"},{text:"--registry <registry/>",depth:3,id:"--registry-<registry/>"},{text:"--debug",depth:3,id:"--debug"},{text:"--mwa",depth:3,id:"--mwa"},{text:"--module",depth:3,id:"--module"},{text:"--monorepo",depth:3,id:"--monorepo"},{text:"--plugin <plugin>",depth:3,id:"--plugin-<plugin>"},{text:"--generator <generator>",depth:3,id:"--generator-<generator>"},{text:"--packages <packages>",depth:3,id:"--packages-<packages>"}];function h(e){let n=Object.assign({h1:"h1",a:"a",p:"p",code:"code",h2:"h2",div:"div",button:"button",pre:"pre",h3:"h3"},(0,s.useMDXComponents)(),e.components);return(0,d.jsxs)(d.Fragment,{children:[(0,d.jsxs)(n.h1,{id:"项目生成器",children:["项目生成器",(0,d.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#项目生成器",children:"#"})]}),"\n",(0,d.jsxs)(n.p,{children:["Modern.js 提供了 ",(0,d.jsx)(n.code,{children:"@modern-js/create"})," 作为项目生成器用于进行 Modern.js 工程方案项目创建。"]}),"\n",(0,d.jsxs)(n.h2,{id:"使用",children:["使用",(0,d.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#使用",children:"#"})]}),"\n",(0,d.jsxs)(n.p,{children:["不需要全局安装 ",(0,d.jsx)(n.code,{children:"@modern-js/create"}),"，直接使用 npx 执行该工具即可："]}),"\n",(0,d.jsx)(n.div,{className:"language-",children:(0,d.jsxs)(n.div,{className:"modern-code-content",children:[(0,d.jsx)(n.button,{className:"copy"}),(0,d.jsx)(n.pre,{className:"code",children:(0,d.jsx)(n.code,{className:"language-bash",children:"npx @modern-js/create [projectDir]\n"})})]})}),"\n",(0,d.jsxs)(n.div,{className:"modern-directive info",children:[(0,d.jsx)(n.div,{className:"modern-directive-title",children:"INFO"}),(0,d.jsxs)(n.div,{className:"modern-directive-content",children:["使用 npx 可以每次获取最新版本的 ",(0,d.jsx)(n.code,{children:"@modern-js/create"}),"。","\n"]})]}),"\n",(0,d.jsxs)(n.h2,{id:"参数",children:["参数",(0,d.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#参数",children:"#"})]}),"\n",(0,d.jsxs)(n.h3,{id:"[projectdir]",children:["[projectDir]",(0,d.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#[projectdir]",children:"#"})]}),"\n",(0,d.jsx)(n.p,{children:"项目目录名称。"}),"\n",(0,d.jsxs)(n.p,{children:["执行上述命令时，默认会在当前目录创建 ",(0,d.jsx)(n.code,{children:"projectDir"})," 文件夹，并在该文件夹下初始化项目。该参数为空时，将会在当前目录直接生成初始化项目。"]}),"\n",(0,d.jsxs)(n.h3,{id:"--version",children:["--version",(0,d.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#--version",children:"#"})]}),"\n",(0,d.jsxs)(n.p,{children:["获取 ",(0,d.jsx)(n.code,{children:"@modern-js/create"})," 工具版本。"]}),"\n",(0,d.jsx)(n.div,{className:"language-",children:(0,d.jsxs)(n.div,{className:"modern-code-content",children:[(0,d.jsx)(n.button,{className:"copy"}),(0,d.jsx)(n.pre,{className:"code",children:(0,d.jsx)(n.code,{className:"language-bash",children:"$ npx @modern-js/create --version\n\n[INFO] @modern-js/create v2.0.0\n"})})]})}),"\n",(0,d.jsxs)(n.h3,{id:"--lang",children:["--lang",(0,d.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#--lang",children:"#"})]}),"\n",(0,d.jsxs)(n.p,{children:["指定执行语言，支持 ",(0,d.jsx)(n.code,{children:"zh"})," 和 ",(0,d.jsx)(n.code,{children:"en"}),"。"]}),"\n",(0,d.jsxs)(n.p,{children:["默认情况下，",(0,d.jsx)(n.code,{children:"@modern-js/create"})," 会自动识别用户的系统语言，选择使用中文或者英文，如果识别失败或者想手动指定语言，可以使用该参数。"]}),"\n",(0,d.jsxs)(n.h3,{id:"-c,---config",children:["-c, --config",(0,d.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#-c,---config",children:"#"})]}),"\n",(0,d.jsx)(n.p,{children:"指定项目默认配置。"}),"\n",(0,d.jsxs)(n.p,{children:["默认情况下，",(0,d.jsx)(n.code,{children:"@modern-js/create"})," 在执行过程中会出现选择语言、包管理工具等交互问题，当需要提前指定这些配置内容时，可以通过该字段传入。"]}),"\n",(0,d.jsx)(n.p,{children:"该字段为 JSON 字符串，例如需执行包管理工具时："}),"\n",(0,d.jsx)(n.div,{className:"language-",children:(0,d.jsxs)(n.div,{className:"modern-code-content",children:[(0,d.jsx)(n.button,{className:"copy"}),(0,d.jsx)(n.pre,{className:"code",children:(0,d.jsx)(n.code,{className:"language-bash",children:'npx @modern-js/create --config \'{"packageManager": "pnpm"}\'\n'})})]})}),"\n",(0,d.jsxs)(n.p,{children:["具体配置信息可查看",(0,d.jsx)(n.a,{href:"/guides/topic-detail/generator/config/common",children:"工程方案配置"}),"。"]}),"\n",(0,d.jsxs)(n.h3,{id:"--no-need-install",children:["--no-need-install",(0,d.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#--no-need-install",children:"#"})]}),"\n",(0,d.jsxs)(n.p,{children:["默认情况下，",(0,d.jsx)(n.code,{children:"@modern-js/create"})," 在创建项目完成后会自动安装依赖，使用该参数可以忽略安装依赖步骤。"]}),"\n",(0,d.jsxs)(n.h3,{id:"--dist-tag-<disttag>",children:["--dist-tag <distTag>",(0,d.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#--dist-tag-<disttag>",children:"#"})]}),"\n",(0,d.jsx)(n.p,{children:"指定生成器及 Modern.js 相关依赖版本。"}),"\n",(0,d.jsxs)(n.p,{children:[(0,d.jsx)(n.code,{children:"@modern-js/create"})," 执行过程中会执行更小的微生成器，使用该参数可以执行执行的微生成器的版本号和对应的安装 Modern.js 相关依赖的版本号。"]}),"\n",(0,d.jsxs)(n.h3,{id:"--registry-<registry/>",children:["--registry <registry/>",(0,d.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#--registry-<registry/>",children:"#"})]}),"\n",(0,d.jsx)(n.p,{children:"执行获取生成器及 npm 包的 npm registry。"}),"\n",(0,d.jsxs)(n.h3,{id:"--debug",children:["--debug",(0,d.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#--debug",children:"#"})]}),"\n",(0,d.jsx)(n.p,{children:"显示生成器执行过程中的调试日志信息。"}),"\n",(0,d.jsxs)(n.h3,{id:"--mwa",children:["--mwa",(0,d.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#--mwa",children:"#"})]}),"\n",(0,d.jsx)(n.p,{children:"一键创建应用工程方案项目。"}),"\n",(0,d.jsxs)(n.p,{children:["使用该参数后，",(0,d.jsx)(n.code,{children:"@modern-js/create"})," 将会使用配置默认值创建应用项目。"]}),"\n",(0,d.jsxs)(n.h3,{id:"--module",children:["--module",(0,d.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#--module",children:"#"})]}),"\n",(0,d.jsx)(n.p,{children:"一键创建模块工程方案项目。"}),"\n",(0,d.jsxs)(n.p,{children:["使用该参数后，",(0,d.jsx)(n.code,{children:"@modern-js/create"})," 将会使用配置默认值创建模块项目。"]}),"\n",(0,d.jsxs)(n.h3,{id:"--monorepo",children:["--monorepo",(0,d.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#--monorepo",children:"#"})]}),"\n",(0,d.jsx)(n.p,{children:"一键创建 Monorepo 工程方案项目。"}),"\n",(0,d.jsxs)(n.p,{children:["使用该参数后，",(0,d.jsx)(n.code,{children:"@modern-js/create"})," 将会使用配置默认值创建 Monorepo 项目。"]}),"\n",(0,d.jsxs)(n.h3,{id:"--plugin-<plugin>",children:["--plugin <plugin>",(0,d.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#--plugin-<plugin>",children:"#"})]}),"\n",(0,d.jsx)(n.p,{children:"指定生成器插件。"}),"\n",(0,d.jsx)(n.p,{children:"Modern.js 支持使用生成器插件定制 Modern.js 默认的工程方案类型或者添加工程方案类型场景，该参数用户指定定制的生成器插件。"}),"\n",(0,d.jsxs)(n.p,{children:["关于定制生成器插件可以参考",(0,d.jsx)(n.a,{href:"/guides/topic-detail/generator/plugin/abstract",children:"开发生成器插件"}),"。"]}),"\n",(0,d.jsxs)(n.h3,{id:"--generator-<generator>",children:["--generator <generator>",(0,d.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#--generator-<generator>",children:"#"})]}),"\n",(0,d.jsx)(n.p,{children:"指定微生成器。"}),"\n",(0,d.jsxs)(n.p,{children:["默认情况下 ",(0,d.jsx)(n.code,{children:"@modern-js/create"})," 会执行 Modern.js 框架内置的微生成器，如果你需要执行定制的微生成器，又需要使用 ",(0,d.jsx)(n.code,{children:"npx @modern-js/create"})," 的姿势，可直接使用该参数。"]}),"\n",(0,d.jsxs)(n.p,{children:["关于定制微生成器可以参考",(0,d.jsx)(n.a,{href:"/guides/topic-detail/generator/codesmith/introduce",children:"开发微生成器"}),"。"]}),"\n",(0,d.jsxs)(n.h3,{id:"--packages-<packages>",children:["--packages <packages>",(0,d.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#--packages-<packages>",children:"#"})]}),"\n",(0,d.jsx)(n.p,{children:"创建项目是指定特定包版本依赖。"}),"\n",(0,d.jsxs)(n.p,{children:["在创建项目时如果有需要指定特定包版本，可以使用该参数。该参数会在项目根目录的 ",(0,d.jsx)(n.code,{children:"package.json"})," 中配置 ",(0,d.jsx)(n.code,{children:"pnpm.overrides"}),"(包管理工具选择 pnpm) 或者 ",(0,d.jsx)(n.code,{children:"resolutions"})," 锁定包版本号。"]}),"\n",(0,d.jsx)(n.p,{children:"该参数值为 JSON 字符串。"})]})}var t=function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},{wrapper:n}=Object.assign({},(0,s.useMDXComponents)(),e.components);return n?(0,d.jsx)(n,Object.assign({},e,{children:(0,d.jsx)(h,e)})):h(e)}}}]);