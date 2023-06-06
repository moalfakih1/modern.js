(self.webpackChunk_modern_js_main_doc=self.webpackChunk_modern_js_main_doc||[]).push([["docs_en_guides_topic-detail_changesets_changelog_mdx"],{36437:function(e,n,t){"use strict";Object.defineProperty(n,"__esModule",{value:!0});!function(e,n){for(var t in n)Object.defineProperty(e,t,{enumerable:!0,get:n[t]})}(n,{frontmatter:function(){return i},title:function(){return o},toc:function(){return r},default:function(){return d}});var a=t("9880"),s=t("23169"),i={sidebar_position:6},o="Customizing Changelog Generation",r=[{text:"Customizing Changelog Content",depth:2,id:"customizing-changelog-content"},{text:"getReleaseLine",depth:3,id:"getreleaseline"},{text:"Params",depth:4,id:"params"},{text:"Returns",depth:4,id:"returns"},{text:"Default Implementation",depth:4,id:"default-implementation"},{text:"getDependencyReleaseLine",depth:3,id:"getdependencyreleaseline"},{text:"Params",depth:4,id:"params-1"},{text:"Returns",depth:4,id:"returns-1"},{text:"Default Implementation",depth:4,id:"default-implementation-1"},{text:"Configuration",depth:2,id:"configuration"},{text:"Configuring Relative Paths",depth:3,id:"configuring-relative-paths"},{text:"Using Module Project",depth:3,id:"using-module-project"},{text:"Use npx @modern-js/create@latest to create a module project.",depth:4,id:"use-npx-@modern-js/create@latest-to-create-a-module-project"},{text:"Implement Custom Content",depth:4,id:"implement-custom-content"},{text:"Publish the module to NPM.",depth:4,id:"publish-the-module-to-npm"},{text:"Install the corresponding module in the root directory of the target repository, such as custom-changelog.",depth:4,id:"install-the-corresponding-module-in-the-root-directory-of-the-target-repository,-such-as-custom-changelog"},{text:"Configure the changelog configuration of Changesets as the package name.",depth:4,id:"configure-the-changelog-configuration-of-changesets-as-the-package-name"},{text:"Using Monorepo Sub-Project",depth:3,id:"using-monorepo-sub-project"},{text:"Run pnpm run new to create a module sub-project.",depth:4,id:"run-pnpm-run-new-to-create-a-module-sub-project"},{text:"Implement Custom Content",depth:4,id:"implement-custom-content-1"},{text:"Add the sub-project module dependency, such as custom-changelog, to the Monorepo root directory.",depth:4,id:"add-the-sub-project-module-dependency,-such-as-custom-changelog,-to-the-monorepo-root-directory"},{text:"Configure the changelog configuration of Changesets as the package name.",depth:4,id:"configure-the-changelog-configuration-of-changesets-as-the-package-name-1"}];function c(e){var n=Object.assign({h1:"h1",a:"a",p:"p",code:"code",h2:"h2",ul:"ul",li:"li",h3:"h3",h4:"h4",pre:"pre"},(0,s.useMDXComponents)(),e.components);return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsxs)(n.h1,{id:"customizing-changelog-generation",children:["Customizing Changelog Generation",(0,a.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#customizing-changelog-generation",children:"#"})]}),"\n",(0,a.jsxs)(n.p,{children:["By default, Changesets will use ",(0,a.jsx)(n.code,{children:"@changesets/cli/changelog"})," to generate changelog information. If the default changelog information cannot meet the requirements, you can customize the generation of changelog."]}),"\n",(0,a.jsxs)(n.h2,{id:"customizing-changelog-content",children:["Customizing Changelog Content",(0,a.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#customizing-changelog-content",children:"#"})]}),"\n",(0,a.jsx)(n.p,{children:"Changelog information mainly includes the following two types of information:"}),"\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsxs)(n.li,{children:["\n",(0,a.jsx)(n.p,{children:"Changelog information written in the changeset."}),"\n"]}),"\n",(0,a.jsxs)(n.li,{children:["\n",(0,a.jsx)(n.p,{children:"Version change information of related packages in this version upgrade."}),"\n"]}),"\n"]}),"\n",(0,a.jsxs)(n.p,{children:["The custom logic mainly implements two functions, ",(0,a.jsx)(n.code,{children:"getReleaseLine"})," and ",(0,a.jsx)(n.code,{children:"getDependencyReleaseLine"}),", which are used to define the above two types of information, respectively."]}),"\n",(0,a.jsxs)(n.h3,{id:"getreleaseline",children:["getReleaseLine",(0,a.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#getreleaseline",children:"#"})]}),"\n",(0,a.jsxs)(n.h4,{id:"params",children:["Params",(0,a.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#params",children:"#"})]}),"\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsx)(n.li,{children:"changeset"}),"\n"]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-ts",children:"export type VersionType = 'major' | 'minor' | 'patch' | 'none';\n\nexport type Release = { name: string; type: VersionType };\n\nexport type Changeset = {\n  id: string; // changeset 的文件名称\n  commit?: string; // changeset 提交时的 commit id 信息\n  summary: string; // changeset 内容信息\n  releases: Array<Release>; // 当前计算出的 changeset 升级包名称及类型信息\n};\n"})}),"\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsx)(n.li,{children:"type"}),"\n"]}),"\n",(0,a.jsxs)(n.p,{children:["The upgraded version type corresponding to the current package, which is of type ",(0,a.jsx)(n.code,{children:"VersionType"})," mentioned above."]}),"\n",(0,a.jsxs)(n.h4,{id:"returns",children:["Returns",(0,a.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#returns",children:"#"})]}),"\n",(0,a.jsx)(n.p,{children:"Changelog content."}),"\n",(0,a.jsxs)(n.h4,{id:"default-implementation",children:["Default Implementation",(0,a.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#default-implementation",children:"#"})]}),"\n",(0,a.jsxs)(n.p,{children:["The default processing logic of ",(0,a.jsx)(n.code,{children:"@changesets/cli/changelog"})," is to split the ",(0,a.jsx)(n.code,{children:"summary"})," information according to the newline ",(0,a.jsx)(n.code,{children:"\\n"}),", add ",(0,a.jsx)(n.code,{children:"-"})," as the list header before the first line, and organize other content as the supplement of the first line below the list."]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-ts",children:"async function getReleaseLine(changeset, type) {\n  const [firstLine, ...futureLines] = changeset.summary\n    .split('\\n')\n    .map(l => l.trimRight());\n\n  let returnVal = `- ${\n    changeset.commit ? `${changeset.commit}: ` : ''\n  }${firstLine}`;\n\n  if (futureLines.length > 0) {\n    returnVal += `\\n${futureLines.map(l => `  ${l}`).join('\\n')}`;\n  }\n\n  return returnVal;\n}\n"})}),"\n",(0,a.jsxs)(n.h3,{id:"getdependencyreleaseline",children:["getDependencyReleaseLine",(0,a.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#getdependencyreleaseline",children:"#"})]}),"\n",(0,a.jsxs)(n.h4,{id:"params-1",children:["Params",(0,a.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#params-1",children:"#"})]}),"\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsx)(n.li,{children:"changesets"}),"\n"]}),"\n",(0,a.jsxs)(n.p,{children:["All associated changeset information, which is an array of ",(0,a.jsx)(n.code,{children:"getReleaseLine"})," changeset types."]}),"\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsx)(n.li,{children:"dependenciesUpdated"}),"\n"]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-ts",children:"type ModCompWithPackage = {\n  name: string; // 依赖模块名称\n  type: VersionType; // 依赖模块的升级类型\n  oldVersion: string; // 依赖模块当前版本号\n  newVersion: string; // 依赖模块新版本号\n  changesets: string[]; // 关联的 changeset id 列表\n  packageJson: PackageJSON; // 依赖模块完整的 package.json 内容\n  dir: string; // 依赖模块的路径(绝对路径)\n};\n\ntype DependenciesUpdated = ModCompWithPackage[];\n"})}),"\n",(0,a.jsxs)(n.h4,{id:"returns-1",children:["Returns",(0,a.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#returns-1",children:"#"})]}),"\n",(0,a.jsx)(n.p,{children:"Changelog content."}),"\n",(0,a.jsxs)(n.h4,{id:"default-implementation-1",children:["Default Implementation",(0,a.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#default-implementation-1",children:"#"})]}),"\n",(0,a.jsxs)(n.p,{children:["By default, ",(0,a.jsx)(n.code,{children:"@changesets/cli/changelog"})," will display the corresponding ",(0,a.jsx)(n.code,{children:"Updated dependencies + commit id"})," information of the changesets as a list. Then, based on the ",(0,a.jsx)(n.code,{children:"dependenciesUpdated"})," information, it will display the package name and new version number of the corresponding dependency package as a child list item of the list."]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-ts",children:"async function getDependencyReleaseLine(changesets, dependenciesUpdated) {\n  console.log('getDependencyReleaseLine', changesets, dependenciesUpdated);\n  if (dependenciesUpdated.length === 0) return '';\n\n  const changesetLinks = changesets.map(\n    changeset =>\n      `- Updated dependencies${\n        changeset.commit ? ` [${changeset.commit}]` : ''\n      }`,\n  );\n\n  const updatedDepenenciesList = dependenciesUpdated.map(\n    dependency => `  - ${dependency.name}@${dependency.newVersion}`,\n  );\n\n  return [...changesetLinks, ...updatedDepenenciesList].join('\\n');\n}\n"})}),"\n",(0,a.jsx)(n.p,{children:"It is displayed as follows:"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-markdown",children:"- Updated dependencies [f0438ab]\n- Updated dependencies [f0438ab]\n  - module-3@2.0.0\n  - module-1@0.2.0\n"})}),"\n",(0,a.jsxs)(n.h2,{id:"configuration",children:["Configuration",(0,a.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#configuration",children:"#"})]}),"\n",(0,a.jsxs)(n.p,{children:["The ",(0,a.jsx)(n.code,{children:"changelog"})," field in the changesets configuration file is used to mark the way to obtain changelog information."]}),"\n",(0,a.jsx)(n.p,{children:"This configuration can be a string, directly declaring the module name or path of the changelog information acquisition module."}),"\n",(0,a.jsxs)(n.p,{children:["This configuration also supports configuring arrays. The first element in the array is the module name or path of the changelog information acquisition module, and the second element is the parameter value passed to the corresponding function, which will be passed as the third parameter of the ",(0,a.jsx)(n.code,{children:"getReleaseLine"})," and ",(0,a.jsx)(n.code,{children:"getDependencyReleaseLine"})," functions."]}),"\n",(0,a.jsxs)(n.h3,{id:"configuring-relative-paths",children:["Configuring Relative Paths",(0,a.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#configuring-relative-paths",children:"#"})]}),"\n",(0,a.jsxs)(n.p,{children:["If the changelog configuration is a relative path, it is a relative path under the ",(0,a.jsx)(n.code,{children:".changesets"})," directory."]}),"\n",(0,a.jsxs)(n.p,{children:["For example, create the ",(0,a.jsx)(n.code,{children:".changeset/my-changelog-config.js"})," file and define the following content:"]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-ts",meta:'title=".changeset/my-changelog-config.js"',children:"async function getReleaseLine(changeset, type) {}\n\nasync function getDependencyReleaseLine(changesets, dependenciesUpdated) {}\n\nmodule.exports = {\n  getReleaseLine,\n  getDependencyReleaseLine,\n};\n"})}),"\n",(0,a.jsxs)(n.p,{children:["Configure ",(0,a.jsx)(n.code,{children:"changlog"})," as ",(0,a.jsx)(n.code,{children:"./my-changelog-config.js"}),":"]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-json",meta:'title=".changesets/config.json"',children:'{\n  "changelog": "./my-changelog-config.js",\n   ...\n}\n'})}),"\n",(0,a.jsxs)(n.h3,{id:"using-module-project",children:["Using Module Project",(0,a.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#using-module-project",children:"#"})]}),"\n",(0,a.jsx)(n.p,{children:"Customizing changelog can also be managed using the module project to provide a common solution."}),"\n",(0,a.jsxs)(n.h4,{id:"use-npx-@modern-js/create@latest-to-create-a-module-project",children:["Use ",(0,a.jsx)(n.code,{children:"npx @modern-js/create@latest"})," to create a module project.",(0,a.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#use-npx-@modern-js/create@latest-to-create-a-module-project",children:"#"})]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-md",children:"? Please select the type of project you want to create: Npm Module\n? Please fill in the project name: custom-changelog\n? Please select the programming language: TS\n? Please select the package manager: pnpm\n"})}),"\n",(0,a.jsxs)(n.h4,{id:"implement-custom-content",children:["Implement Custom Content",(0,a.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#implement-custom-content",children:"#"})]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-ts",meta:'title="src/index.ts"',children:"export async function getReleaseLine() {}\n\nexport async function getDependencyReleaseLine() {}\n"})}),"\n",(0,a.jsxs)(n.h4,{id:"publish-the-module-to-npm",children:["Publish the module to NPM.",(0,a.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#publish-the-module-to-npm",children:"#"})]}),"\n",(0,a.jsxs)(n.h4,{id:"install-the-corresponding-module-in-the-root-directory-of-the-target-repository,-such-as-custom-changelog",children:["Install the corresponding module in the root directory of the target repository, such as ",(0,a.jsx)(n.code,{children:"custom-changelog"}),".",(0,a.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#install-the-corresponding-module-in-the-root-directory-of-the-target-repository,-such-as-custom-changelog",children:"#"})]}),"\n",(0,a.jsxs)(n.h4,{id:"configure-the-changelog-configuration-of-changesets-as-the-package-name",children:["Configure the changelog configuration of Changesets as the package name.",(0,a.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#configure-the-changelog-configuration-of-changesets-as-the-package-name",children:"#"})]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-json",meta:'title=".changesets/config.json"',children:'{\n  "changelog": "custom-changelog",\n   ...\n}\n'})}),"\n",(0,a.jsxs)(n.h3,{id:"using-monorepo-sub-project",children:["Using Monorepo Sub-Project",(0,a.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#using-monorepo-sub-project",children:"#"})]}),"\n",(0,a.jsx)(n.p,{children:"If your current repository is Monorepo, you can directly manage it using module sub-projects."}),"\n",(0,a.jsxs)(n.h4,{id:"run-pnpm-run-new-to-create-a-module-sub-project",children:["Run ",(0,a.jsx)(n.code,{children:"pnpm run new"})," to create a module sub-project.",(0,a.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#run-pnpm-run-new-to-create-a-module-sub-project",children:"#"})]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-bash",children:"? Please select the type of project you want to create: Npm Module\n? Please fill in the sub-project name: custom-changelog\n? Please fill in the sub-project directory name: custom-changelog\n? Please select the programming language: TS\n"})}),"\n",(0,a.jsxs)(n.h4,{id:"implement-custom-content-1",children:["Implement Custom Content",(0,a.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#implement-custom-content-1",children:"#"})]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-ts",meta:'title="src/index.ts"',children:"export async function getReleaseLine() {}\n\nexport async function getDependencyReleaseLine() {}\n"})}),"\n",(0,a.jsxs)(n.h4,{id:"add-the-sub-project-module-dependency,-such-as-custom-changelog,-to-the-monorepo-root-directory",children:["Add the sub-project module dependency, such as ",(0,a.jsx)(n.code,{children:"custom-changelog"}),", to the Monorepo root directory.",(0,a.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#add-the-sub-project-module-dependency,-such-as-custom-changelog,-to-the-monorepo-root-directory",children:"#"})]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-json",meta:'title="package.json"',children:'{\n  "devDependencies": {\n    "custom-changelog": "workspace: *",\n    ...\n  }\n}\n'})}),"\n",(0,a.jsxs)(n.h4,{id:"configure-the-changelog-configuration-of-changesets-as-the-package-name-1",children:["Configure the changelog configuration of Changesets as the package name.",(0,a.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#configure-the-changelog-configuration-of-changesets-as-the-package-name-1",children:"#"})]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-json",meta:'title=".changesets/config.json"',children:'{\n  "changelog": "custom-changelog",\n   ...\n}\n'})}),"\n",(0,a.jsx)(n.p,{children:"After the module is published to NPM, it can still be used like a module type for other repositories."})]})}var d=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=Object.assign({},(0,s.useMDXComponents)(),e.components).wrapper;return n?(0,a.jsx)(n,Object.assign({},e,{children:(0,a.jsx)(c,e)})):c(e)}}}]);