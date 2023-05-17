(self.webpackChunk_modern_js_main_doc=self.webpackChunk_modern_js_main_doc||[]).push([["docs_zh_guides_topic-detail_changesets_commit_mdx"],{71665:function(e,n,s){"use strict";Object.defineProperty(n,"__esModule",{value:!0});!function(e,n){for(var s in n)Object.defineProperty(e,s,{enumerable:!0,get:n[s]})}(n,{frontmatter:function(){return i},title:function(){return d},toc:function(){return r},default:function(){return o}});var c=s("9880"),a=s("23169"),i={sidebar_position:7},d="自定义提交 commit 信息",r=[{text:"自定义 commit 信息内容",depth:2,id:"自定义-commit-信息内容"},{text:"getAddMessage",depth:3,id:"getaddmessage"},{text:"Params",depth:4,id:"params"},{text:"返回值",depth:4,id:"返回值"},{text:"默认实现",depth:4,id:"默认实现"},{text:"getVersionMessage",depth:3,id:"getversionmessage"},{text:"Params",depth:4,id:"params-1"},{text:"返回值",depth:4,id:"返回值-1"},{text:"默认实现",depth:4,id:"默认实现-1"},{text:"配置",depth:2,id:"配置"},{text:"配置相对路径",depth:3,id:"配置相对路径"},{text:"使用模块工程方案",depth:3,id:"使用模块工程方案"},{text:"使用 npx @modern-js/create 创建模块工程方案。",depth:4,id:"使用-npx-@modern-js/create-创建模块工程方案。"},{text:"实现自定义内容。",depth:4,id:"实现自定义内容。"},{text:"将模块发布到 NPM。",depth:4,id:"将模块发布到-npm。"},{text:"在目标仓库根目录安装对应模块，例如 custom-commit。",depth:4,id:"在目标仓库根目录安装对应模块，例如-custom-commit。"},{text:"配置 changeset 的 commit 配置为包名称。",depth:4,id:"配置-changeset-的-commit-配置为包名称。"},{text:"使用 Monorepo 工程方案",depth:3,id:"使用-monorepo-工程方案"},{text:"执行 pnpm run new 创建模块子项目。",depth:4,id:"执行-pnpm-run-new-创建模块子项目。"},{text:"实现自定义内容。",depth:4,id:"实现自定义内容。-1"},{text:"在 Monorepo 根目录添加子项目模块依赖，例如 custom-commit。",depth:4,id:"在-monorepo-根目录添加子项目模块依赖，例如-custom-commit。"},{text:"配置 changeset 的 commit 配置为包名称。",depth:4,id:"配置-changeset-的-commit-配置为包名称。-1"}];function t(e){var n=Object.assign({h1:"h1",a:"a",p:"p",code:"code",img:"img",h2:"h2",ul:"ul",li:"li",h3:"h3",h4:"h4",div:"div",pre:"pre",blockquote:"blockquote"},(0,a.useMDXComponents)(),e.components);return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsxs)(n.h1,{id:"自定义提交-commit-信息",children:["自定义提交 commit 信息",(0,c.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#自定义提交-commit-信息",children:"#"})]}),"\n",(0,c.jsxs)(n.p,{children:["Changesets 支持配置 ",(0,c.jsx)(n.code,{children:"commit"})," 为 true 时，在执行 ",(0,c.jsx)(n.code,{children:"change"})," 和 ",(0,c.jsx)(n.code,{children:"bump"})," 命令时自动提交当前变更。"]}),"\n",(0,c.jsxs)(n.p,{children:["默认的 ",(0,c.jsx)(n.code,{children:"commit"})," 信息由 ",(0,c.jsx)(n.code,{children:"@changesets/cli/commit"})," 提供，默认信息格式为："]}),"\n",(0,c.jsxs)(n.p,{children:[(0,c.jsx)(n.img,{src:"https://lf3-static.bytednsdoc.com/obj/eden-cn/zq-uylkvT/ljhwZthlaukjlkulzlp/changeset-change-commit-info.png",alt:"change commit"}),"\n",(0,c.jsx)(n.img,{src:"https://lf3-static.bytednsdoc.com/obj/eden-cn/zq-uylkvT/ljhwZthlaukjlkulzlp/changeset-bump-commit-info.png",alt:"bump commit"})]}),"\n",(0,c.jsx)(n.p,{children:"当默认的 commit 信息不能满足需求时，支持自定义 commit 信息。"}),"\n",(0,c.jsxs)(n.h2,{id:"自定义-commit-信息内容",children:["自定义 commit 信息内容",(0,c.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#自定义-commit-信息内容",children:"#"})]}),"\n",(0,c.jsx)(n.p,{children:"commit 信息分为两种："}),"\n",(0,c.jsxs)(n.ul,{children:["\n",(0,c.jsxs)(n.li,{children:["执行 ",(0,c.jsx)(n.code,{children:"change"})," 命令时自动生成的 commit 信息。"]}),"\n",(0,c.jsxs)(n.li,{children:["执行 ",(0,c.jsx)(n.code,{children:"bump"})," 命令时自动生成的 commit 信息。"]}),"\n"]}),"\n",(0,c.jsxs)(n.p,{children:["自定义逻辑主要实现两个函数，",(0,c.jsx)(n.code,{children:"getAddMessage"})," 和 ",(0,c.jsx)(n.code,{children:"getVersionMessage"}),"，分别用来定义上述这两种信息。"]}),"\n",(0,c.jsxs)(n.h3,{id:"getaddmessage",children:["getAddMessage",(0,c.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#getaddmessage",children:"#"})]}),"\n",(0,c.jsxs)(n.h4,{id:"params",children:["Params",(0,c.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#params",children:"#"})]}),"\n",(0,c.jsxs)(n.ul,{children:["\n",(0,c.jsx)(n.li,{children:"changeset"}),"\n"]}),"\n",(0,c.jsx)(n.p,{children:"当前创建的 chagneset 信息"}),"\n",(0,c.jsx)(n.div,{className:"language-",children:(0,c.jsx)(n.div,{className:"modern-code-content",children:(0,c.jsx)(n.pre,{className:"code",children:(0,c.jsx)(n.code,{className:"language-ts",children:"type Release = {\n  name: string;\n  type: VersionType;\n};\n\ntype Changeset = {\n  summary: string;\n  releases: Array<Release>;\n};\n"})})})}),"\n",(0,c.jsxs)(n.ul,{children:["\n",(0,c.jsx)(n.li,{children:"options"}),"\n"]}),"\n",(0,c.jsx)(n.p,{children:"配置 commit 时的配置信息。"}),"\n",(0,c.jsxs)(n.blockquote,{children:["\n",(0,c.jsx)(n.p,{children:"commit 配置为数组时，第二个参数支持传入默认的配置信息，会对应的使用该参数传递。"}),"\n"]}),"\n",(0,c.jsxs)(n.h4,{id:"返回值",children:["返回值",(0,c.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#返回值",children:"#"})]}),"\n",(0,c.jsx)(n.p,{children:"commit 信息内容。"}),"\n",(0,c.jsxs)(n.h4,{id:"默认实现",children:["默认实现",(0,c.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#默认实现",children:"#"})]}),"\n",(0,c.jsxs)(n.p,{children:[(0,c.jsx)(n.code,{children:"@changesets/cli/commit"})," 默认处理逻辑为以 ",(0,c.jsx)(n.code,{children:"docs(changeset):"})," 开头，commit 信息为 changeset 的 ",(0,c.jsx)(n.code,{children:"summary"}),"，并根据传入的 ",(0,c.jsx)(n.code,{children:"skipCI"})," 参数配置添加 [skip ci] 信息。"]}),"\n",(0,c.jsx)(n.div,{className:"language-",children:(0,c.jsx)(n.div,{className:"modern-code-content",children:(0,c.jsx)(n.pre,{className:"code",children:(0,c.jsx)(n.code,{className:"language-ts",children:"type SkipCI = boolean | 'add' | 'version';\n\nconst getAddMessage = async (\n  changeset: Changeset,\n  options: { skipCI?: SkipCI } | null,\n) => {\n  const skipCI = options?.skipCI === 'add' || options?.skipCI === true;\n  return outdent`docs(changeset): ${changeset.summary}${\n    skipCI ? `\\n\\n[skip ci]\\n` : ''\n  }`;\n};\n"})})})}),"\n",(0,c.jsxs)(n.blockquote,{children:["\n",(0,c.jsxs)(n.p,{children:[(0,c.jsx)(n.a,{href:"https://www.npmjs.com/package/outdent",target:"_blank",rel:"noopener noreferrer",children:"outdent"})," 目的是删除模板字符串开头的空格内容，使 commit 信息更符合规范。"]}),"\n"]}),"\n",(0,c.jsxs)(n.h3,{id:"getversionmessage",children:["getVersionMessage",(0,c.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#getversionmessage",children:"#"})]}),"\n",(0,c.jsxs)(n.h4,{id:"params-1",children:["Params",(0,c.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#params-1",children:"#"})]}),"\n",(0,c.jsxs)(n.ul,{children:["\n",(0,c.jsx)(n.li,{children:"releasePlan"}),"\n"]}),"\n",(0,c.jsx)(n.div,{className:"language-",children:(0,c.jsx)(n.div,{className:"modern-code-content",children:(0,c.jsx)(n.pre,{className:"code",children:(0,c.jsx)(n.code,{className:"language-ts",children:"type VersionType = 'major' | 'minor' | 'patch' | 'none';\n\ntype Release = {\n  name: string;\n  type: VersionType;\n};\n\ntype Changeset = {\n  id: string;\n  summary: string;\n  releases: Array<Release>;\n};\n\ntype ComprehensiveRelease = {\n  name: string;\n  type: VersionType;\n  oldVersion: string;\n  newVersion: string;\n  changesets: string[];\n};\n\ntype PreState = {\n  mode: 'pre' | 'exit'; // pre 模式当前状态\n  tag: string; // pre 的类型\n  initialVersions: {\n    [pkgName: string]: string; // 版本升级前包名及版本号信息，Map 格式\n  };\n  changesets: string[]; // 本次升级的 changeset id 列表\n};\n\ntype ReleasePlan = {\n  changesets: Changeset[]; // 本次升级的 changeset 列表\n  releases: ComprehensiveRelease[]; // 当前升级的包信息，包含包名称、当前版本、升级后版本、升级类型等\n  preState: PreState | undefined; // 当前如果为 pre 发布，提供相关状态信息\n};\n"})})})}),"\n",(0,c.jsxs)(n.ul,{children:["\n",(0,c.jsx)(n.li,{children:"options"}),"\n"]}),"\n",(0,c.jsx)(n.p,{children:"配置 commit 时的配置信息。"}),"\n",(0,c.jsxs)(n.blockquote,{children:["\n",(0,c.jsx)(n.p,{children:"commit 配置为数组时，第二个参数支持传入默认的配置信息，会对应的使用该参数传递。"}),"\n"]}),"\n",(0,c.jsxs)(n.h4,{id:"返回值-1",children:["返回值",(0,c.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#返回值-1",children:"#"})]}),"\n",(0,c.jsx)(n.p,{children:"commit 信息内容。"}),"\n",(0,c.jsxs)(n.h4,{id:"默认实现-1",children:["默认实现",(0,c.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#默认实现-1",children:"#"})]}),"\n",(0,c.jsxs)(n.p,{children:[(0,c.jsx)(n.code,{children:"@changesets/cli/commit"})," 默认处理逻辑为：先展示当前需要 release 的包数量，再展示 release 包的名称及新版本号，并根据传入的 ",(0,c.jsx)(n.code,{children:"skipCI"})," 参数配置添加 [skip ci] 信息。"]}),"\n",(0,c.jsx)(n.div,{className:"language-",children:(0,c.jsx)(n.div,{className:"modern-code-content",children:(0,c.jsx)(n.pre,{className:"code",children:(0,c.jsx)(n.code,{className:"language-ts",children:"const getVersionMessage = async (\n  releasePlan: ReleasePlan,\n  options: { skipCI?: SkipCI } | null,\n) => {\n  const skipCI = options?.skipCI === 'version' || options?.skipCI === true;\n  const publishableReleases = releasePlan.releases.filter(\n    release => release.type !== 'none',\n  );\n  const numPackagesReleased = publishableReleases.length;\n\n  const releasesLines = publishableReleases\n    .map(release => `  ${release.name}@${release.newVersion}`)\n    .join('\\n');\n\n  return outdent`\n    RELEASING: Releasing ${numPackagesReleased} package(s)\n\n    Releases:\n    ${releasesLines}\n    ${skipCI ? `\\n[skip ci]\\n` : ''}\n`;\n};\n"})})})}),"\n",(0,c.jsxs)(n.h2,{id:"配置",children:["配置",(0,c.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#配置",children:"#"})]}),"\n",(0,c.jsxs)(n.p,{children:["Changesets 配置文件中 ",(0,c.jsx)(n.code,{children:"commit"})," 字段，该字段用于标记是否需要在 ",(0,c.jsx)(n.code,{children:"change"})," 和 ",(0,c.jsx)(n.code,{children:"bump"})," 命令是提交 commit 信息及 commit 信息的获取途径。"]}),"\n",(0,c.jsxs)(n.p,{children:["该配置可以为 ",(0,c.jsx)(n.code,{children:"boolean"}),"，为 true 时使用默认 ",(0,c.jsx)(n.code,{children:"@changesets/cli/commit"})," 格式化 commit 信息。"]}),"\n",(0,c.jsx)(n.p,{children:"该配置可以为字符串，直接声明获取 commit 信息模块的模块名称或者路径。"}),"\n",(0,c.jsxs)(n.p,{children:["该配置还支持配置数组，数组中第一个元素为获取 commit 信息模块的模块名称或者路径，第二个元素为传入对应函数的参数值，会作为 ",(0,c.jsx)(n.code,{children:"getAddMessage"})," 和 ",(0,c.jsx)(n.code,{children:"getVersionMessage"})," 函数的第二个参数传入。"]}),"\n",(0,c.jsxs)(n.h3,{id:"配置相对路径",children:["配置相对路径",(0,c.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#配置相对路径",children:"#"})]}),"\n",(0,c.jsxs)(n.p,{children:["commit 配置如果为相对路径为 ",(0,c.jsx)(n.code,{children:".changesets"})," 目录下的相对路径。"]}),"\n",(0,c.jsx)(n.p,{children:"例如创建 .changeset/my-commit-config.js 文件，定义如下内容："}),"\n",(0,c.jsxs)(n.div,{className:"language-",children:[(0,c.jsx)(n.div,{className:"modern-code-title",children:".changeset/my-commit-config.js"}),(0,c.jsx)(n.div,{className:"modern-code-content",children:(0,c.jsx)(n.pre,{className:"code",children:(0,c.jsx)(n.code,{className:"language-js",meta:'title=".changeset/my-commit-config.js"',children:"async function getAddMessage(changeset, options) {}\n\nasync function getVersionMessage(releasePlan, options) {}\n\nmodule.exports = {\n  getAddMessage,\n  getVersionMessage,\n};\n"})})})]}),"\n",(0,c.jsx)(n.p,{children:"commit 配置为 ./my-commit-config.js 即可:"}),"\n",(0,c.jsxs)(n.div,{className:"language-",children:[(0,c.jsx)(n.div,{className:"modern-code-title",children:".changesets/config.json"}),(0,c.jsx)(n.div,{className:"modern-code-content",children:(0,c.jsx)(n.pre,{className:"code",children:(0,c.jsx)(n.code,{className:"language-json",meta:'title=".changesets/config.json"',children:'{\n  "changelog": "./my-commit-config.js",\n   ...\n}\n'})})})]}),"\n",(0,c.jsxs)(n.h3,{id:"使用模块工程方案",children:["使用模块工程方案",(0,c.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#使用模块工程方案",children:"#"})]}),"\n",(0,c.jsx)(n.p,{children:"自定义 commit 还可以使用模块工程方案进行管理，提供通用方案。"}),"\n",(0,c.jsx)(n.p,{children:"自定义 Changelog 还可以使用模块工程方案进行管理，提供通用方案。"}),"\n",(0,c.jsxs)(n.h4,{id:"使用-npx-@modern-js/create-创建模块工程方案。",children:["使用 ",(0,c.jsx)(n.code,{children:"npx @modern-js/create"})," 创建模块工程方案。",(0,c.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#使用-npx-@modern-js/create-创建模块工程方案。",children:"#"})]}),"\n",(0,c.jsx)(n.div,{className:"language-",children:(0,c.jsx)(n.div,{className:"modern-code-content",children:(0,c.jsx)(n.pre,{className:"code",children:(0,c.jsx)(n.code,{className:"language-md",children:"? 请选择你想创建的工程类型：Npm 模块\n? 请填写项目名称：custom-commit\n? 请选择开发语言：TS\n? 请选择包管理工具：pnpm\n"})})})}),"\n",(0,c.jsxs)(n.h4,{id:"实现自定义内容。",children:["实现自定义内容。",(0,c.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#实现自定义内容。",children:"#"})]}),"\n",(0,c.jsxs)(n.div,{className:"language-",children:[(0,c.jsx)(n.div,{className:"modern-code-title",children:"src/index.ts"}),(0,c.jsx)(n.div,{className:"modern-code-content",children:(0,c.jsx)(n.pre,{className:"code",children:(0,c.jsx)(n.code,{className:"language-ts",meta:'title="src/index.ts"',children:"export async function getAddMessage() {}\n\nexport async function getVersionMessage() {}\n"})})})]}),"\n",(0,c.jsxs)(n.h4,{id:"将模块发布到-npm。",children:["将模块发布到 NPM。",(0,c.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#将模块发布到-npm。",children:"#"})]}),"\n",(0,c.jsxs)(n.h4,{id:"在目标仓库根目录安装对应模块，例如-custom-commit。",children:["在目标仓库根目录安装对应模块，例如 custom-commit。",(0,c.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#在目标仓库根目录安装对应模块，例如-custom-commit。",children:"#"})]}),"\n",(0,c.jsxs)(n.h4,{id:"配置-changeset-的-commit-配置为包名称。",children:["配置 changeset 的 commit 配置为包名称。",(0,c.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#配置-changeset-的-commit-配置为包名称。",children:"#"})]}),"\n",(0,c.jsxs)(n.div,{className:"language-",children:[(0,c.jsx)(n.div,{className:"modern-code-title",children:"package.json"}),(0,c.jsx)(n.div,{className:"modern-code-content",children:(0,c.jsx)(n.pre,{className:"code",children:(0,c.jsx)(n.code,{className:"language-json",meta:'title="package.json"',children:'{\n  "changelog": "custom-commit",\n   ...\n}\n'})})})]}),"\n",(0,c.jsxs)(n.h3,{id:"使用-monorepo-工程方案",children:["使用 Monorepo 工程方案",(0,c.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#使用-monorepo-工程方案",children:"#"})]}),"\n",(0,c.jsx)(n.p,{children:"如果你当前仓库为 Monorepo 工程方案，可以直接使用模块子项目进行管理。"}),"\n",(0,c.jsxs)(n.h4,{id:"执行-pnpm-run-new-创建模块子项目。",children:["执行 ",(0,c.jsx)(n.code,{children:"pnpm run new"})," 创建模块子项目。",(0,c.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#执行-pnpm-run-new-创建模块子项目。",children:"#"})]}),"\n",(0,c.jsx)(n.div,{className:"language-",children:(0,c.jsx)(n.div,{className:"modern-code-content",children:(0,c.jsx)(n.pre,{className:"code",children:(0,c.jsx)(n.code,{className:"language-md",children:"? 请选择你想创建的工程类型：Npm 模块\n? 请填写子项目名称：custom-commit\n? 请填写子项目目录名称：custom-commit\n? 请选择开发语言：TS\n"})})})}),"\n",(0,c.jsxs)(n.h4,{id:"实现自定义内容。-1",children:["实现自定义内容。",(0,c.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#实现自定义内容。-1",children:"#"})]}),"\n",(0,c.jsxs)(n.div,{className:"language-",children:[(0,c.jsx)(n.div,{className:"modern-code-title",children:"src/index.ts"}),(0,c.jsx)(n.div,{className:"modern-code-content",children:(0,c.jsx)(n.pre,{className:"code",children:(0,c.jsx)(n.code,{className:"language-ts",meta:'title="src/index.ts"',children:"export async function getAddMessage() {}\n\nexport async function getVersionMessage() {}\n"})})})]}),"\n",(0,c.jsxs)(n.h4,{id:"在-monorepo-根目录添加子项目模块依赖，例如-custom-commit。",children:["在 Monorepo 根目录添加子项目模块依赖，例如 custom-commit。",(0,c.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#在-monorepo-根目录添加子项目模块依赖，例如-custom-commit。",children:"#"})]}),"\n",(0,c.jsxs)(n.div,{className:"language-",children:[(0,c.jsx)(n.div,{className:"modern-code-title",children:"package.json"}),(0,c.jsx)(n.div,{className:"modern-code-content",children:(0,c.jsx)(n.pre,{className:"code",children:(0,c.jsx)(n.code,{className:"language-json",meta:'title="package.json"',children:'{\n  "devDependencies": {\n    "custom-commit": "workspace: *",\n    ...\n  }\n}\n'})})})]}),"\n",(0,c.jsxs)(n.h4,{id:"配置-changeset-的-commit-配置为包名称。-1",children:["配置 changeset 的 commit 配置为包名称。",(0,c.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#配置-changeset-的-commit-配置为包名称。-1",children:"#"})]}),"\n",(0,c.jsxs)(n.div,{className:"language-",children:[(0,c.jsx)(n.div,{className:"modern-code-title",children:".changesets/config.json"}),(0,c.jsx)(n.div,{className:"modern-code-content",children:(0,c.jsx)(n.pre,{className:"code",children:(0,c.jsx)(n.code,{className:"language-json",meta:'title=".changesets/config.json"',children:'{\n  "commit": "custom-commit",\n   ...\n}\n'})})})]}),"\n",(0,c.jsx)(n.p,{children:"该模块发布到 NPM 后，依然可以和模块类型一样供其他仓库使用。"})]})}var o=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=Object.assign({},(0,a.useMDXComponents)(),e.components).wrapper;return n?(0,c.jsx)(n,Object.assign({},e,{children:(0,c.jsx)(t,e)})):t(e)}}}]);