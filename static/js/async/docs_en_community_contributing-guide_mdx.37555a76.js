(self.webpackChunk_modern_js_main_doc=self.webpackChunk_modern_js_main_doc||[]).push([["docs_en_community_contributing-guide_mdx"],{59582:function(e,n,s){"use strict";Object.defineProperty(n,"__esModule",{value:!0});!function(e,n){for(var s in n)Object.defineProperty(e,s,{enumerable:!0,get:n[s]})}(n,{frontmatter:function(){return a},title:function(){return i},toc:function(){return d},default:function(){return l}});var t=s("9880"),r=s("23169"),a={sidebar_position:3},i="Contributing Guide",d=[{text:"Setup the Dev Environment",depth:2,id:"setup-the-dev-environment"},{text:"Fork the Repo",depth:3,id:"fork-the-repo"},{text:"Install Node.js",depth:3,id:"install-nodejs"},{text:"Install pnpm",depth:3,id:"install-pnpm"},{text:"Install Dependencies",depth:3,id:"install-dependencies"},{text:"Set Git Email",depth:3,id:"set-git-email"},{text:"Making Changes and Building",depth:2,id:"making-changes-and-building"},{text:"Checkout A New Branch",depth:3,id:"checkout-a-new-branch"},{text:"Build the Package",depth:3,id:"build-the-package"},{text:"Testing",depth:2,id:"testing"},{text:"Add New Tests",depth:3,id:"add-new-tests"},{text:"Run Unit Tests",depth:3,id:"run-unit-tests"},{text:"Run E2E Tests",depth:3,id:"run-e2e-tests"},{text:"Linting",depth:2,id:"linting"},{text:"Documentation",depth:2,id:"documentation"},{text:"Submitting Changes",depth:2,id:"submitting-changes"},{text:"Add a Changeset",depth:3,id:"add-a-changeset"},{text:"Committing your Changes",depth:3,id:"committing-your-changes"},{text:"Format of PR titles",depth:3,id:"format-of-pr-titles"},{text:"Publishing",depth:2,id:"publishing"}];function h(e){var n=Object.assign({h1:"h1",a:"a",p:"p",hr:"hr",h2:"h2",h3:"h3",pre:"pre",code:"code",ul:"ul",li:"li",blockquote:"blockquote",strong:"strong",ol:"ol"},(0,r.useMDXComponents)(),e.components);return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)(n.h1,{id:"contributing-guide",children:["Contributing Guide",(0,t.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#contributing-guide",children:"#"})]}),"\n",(0,t.jsx)(n.p,{children:"Thanks for that you are interested in contributing to Modern.js. Before starting your contribution, please take a moment to read the following guidelines."}),"\n",(0,t.jsx)(n.hr,{}),"\n",(0,t.jsxs)(n.h2,{id:"setup-the-dev-environment",children:["Setup the Dev Environment",(0,t.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#setup-the-dev-environment",children:"#"})]}),"\n",(0,t.jsxs)(n.h3,{id:"fork-the-repo",children:["Fork the Repo",(0,t.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#fork-the-repo",children:"#"})]}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.a,{href:"https://help.github.com/articles/fork-a-repo/",target:"_blank",rel:"noopener noreferrer",children:"Fork"})," this repository to your\nown GitHub account and then ",(0,t.jsx)(n.a,{href:"https://help.github.com/articles/cloning-a-repository/",target:"_blank",rel:"noopener noreferrer",children:"clone"})," it to your local."]}),"\n",(0,t.jsxs)(n.h3,{id:"install-nodejs",children:["Install Node.js",(0,t.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#install-nodejs",children:"#"})]}),"\n",(0,t.jsx)(n.p,{children:"We recommend using Node.js 16 or 18. You can check your currently used Node.js version with the following command:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:"node -v\n#v16.18.0\n"})}),"\n",(0,t.jsxs)(n.p,{children:["If you do not have Node.js installed in your current environment, you can use ",(0,t.jsx)(n.a,{href:"https://github.com/nvm-sh/nvm",target:"_blank",rel:"noopener noreferrer",children:"nvm"})," or ",(0,t.jsx)(n.a,{href:"https://github.com/Schniz/fnm",target:"_blank",rel:"noopener noreferrer",children:"fnm"})," to install it."]}),"\n",(0,t.jsx)(n.p,{children:"Here is an example of how to install the Node.js 16 LTS version via nvm:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:"# Install the LTS version of Node.js 16\nnvm install 16 --lts\n\n# Make the newly installed Node.js 16 as the default version\nnvm alias default 16\n\n# Switch to the newly installed Node.js 16\nnvm use 16\n"})}),"\n",(0,t.jsxs)(n.h3,{id:"install-pnpm",children:["Install pnpm",(0,t.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#install-pnpm",children:"#"})]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-sh",children:"# Enable pnpm with corepack, only available on Node.js >= `v14.19.0`\ncorepack enable\n"})}),"\n",(0,t.jsxs)(n.h3,{id:"install-dependencies",children:["Install Dependencies",(0,t.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#install-dependencies",children:"#"})]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-sh",children:"pnpm install\n"})}),"\n",(0,t.jsx)(n.p,{children:"What this will do:"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"Install all dependencies"}),"\n",(0,t.jsx)(n.li,{children:"Create symlinks between packages in the monorepo"}),"\n",(0,t.jsxs)(n.li,{children:["Run the ",(0,t.jsx)(n.code,{children:"prepare"})," script to build all packages (this will take some time, but is necessary to make ensure all packages are built)"]}),"\n"]}),"\n",(0,t.jsxs)(n.blockquote,{children:["\n",(0,t.jsx)(n.p,{children:"A full rebuild of all packages is generally not required after this. If a new feature you are developing requires an updated version of another package, it is usually sufficient to build the changed dependencies."}),"\n"]}),"\n",(0,t.jsxs)(n.h3,{id:"set-git-email",children:["Set Git Email",(0,t.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#set-git-email",children:"#"})]}),"\n",(0,t.jsxs)(n.p,{children:["Please make sure you have your email set up in ",(0,t.jsx)(n.code,{children:"<https://github.com/settings/emails>"}),". This will be needed later when you want to submit a pull request."]}),"\n",(0,t.jsx)(n.p,{children:"Check that your git client is already configured the email:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-sh",children:"git config --list | grep email\n"})}),"\n",(0,t.jsx)(n.p,{children:"Set the email to global config:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-sh",children:'git config --global user.email "SOME_EMAIL@example.com"\n'})}),"\n",(0,t.jsx)(n.p,{children:"Set the email for local repo:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-sh",children:'git config user.email "SOME_EMAIL@example.com"\n'})}),"\n",(0,t.jsx)(n.hr,{}),"\n",(0,t.jsxs)(n.h2,{id:"making-changes-and-building",children:["Making Changes and Building",(0,t.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#making-changes-and-building",children:"#"})]}),"\n",(0,t.jsx)(n.p,{children:"Once you have set up the local development environment in your forked repo, we can start development."}),"\n",(0,t.jsxs)(n.h3,{id:"checkout-a-new-branch",children:["Checkout A New Branch",(0,t.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#checkout-a-new-branch",children:"#"})]}),"\n",(0,t.jsx)(n.p,{children:"It is recommended to develop on a new branch, as it will make things easier later when you submit a pull request:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-sh",children:"git checkout -b MY_BRANCH_NAME\n"})}),"\n",(0,t.jsxs)(n.h3,{id:"build-the-package",children:["Build the Package",(0,t.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#build-the-package",children:"#"})]}),"\n",(0,t.jsxs)(n.p,{children:["To build the package you want to change, first open the package directory, then run the ",(0,t.jsx)(n.code,{children:"build"})," command:"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-sh",children:"# Replace some-path with the path of the package you want to work on\ncd ./packages/some-path\npnpm run build\n"})}),"\n",(0,t.jsxs)(n.p,{children:["Alternatively, you can build the package from the root directory of the repository using the ",(0,t.jsx)(n.code,{children:"--filter"})," option:"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-sh",children:"pnpm run --filter @modern-js/some-package build\n"})}),"\n",(0,t.jsx)(n.p,{children:"Build all packages:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-sh",children:"pnpm run prepare\n"})}),"\n",(0,t.jsxs)(n.p,{children:["If you need to clean all ",(0,t.jsx)(n.code,{children:"node_modules/*"})," in the project, run the ",(0,t.jsx)(n.code,{children:"reset"})," command:"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-sh",children:"pnpm run reset\n"})}),"\n",(0,t.jsx)(n.hr,{}),"\n",(0,t.jsxs)(n.h2,{id:"testing",children:["Testing",(0,t.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#testing",children:"#"})]}),"\n",(0,t.jsxs)(n.h3,{id:"add-new-tests",children:["Add New Tests",(0,t.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#add-new-tests",children:"#"})]}),"\n",(0,t.jsx)(n.p,{children:"If you've fixed a bug or added code that should be tested, then add some tests."}),"\n",(0,t.jsxs)(n.p,{children:["You can add unit test cases in the ",(0,t.jsx)(n.code,{children:"<PACKAGE_DIR>/tests"})," folder. The test syntax is based on ",(0,t.jsx)(n.a,{href:"https://jestjs.io/",target:"_blank",rel:"noopener noreferrer",children:"Jest"})," and ",(0,t.jsx)(n.a,{href:"https://vitest.dev/",target:"_blank",rel:"noopener noreferrer",children:"Vitest"}),"."]}),"\n",(0,t.jsxs)(n.h3,{id:"run-unit-tests",children:["Run Unit Tests",(0,t.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#run-unit-tests",children:"#"})]}),"\n",(0,t.jsx)(n.p,{children:"Before submitting a pull request, it's important to make sure that the changes haven't introduced any regressions or bugs. You can run the unit tests for the project by executing the following command:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-sh",children:"pnpm run test\n"})}),"\n",(0,t.jsxs)(n.p,{children:["Alternatively, you can run the unit tests of single package using the ",(0,t.jsx)(n.code,{children:"--filter"})," option:"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-sh",children:"pnpm run --filter @modern-js/some-package test\n"})}),"\n",(0,t.jsxs)(n.h3,{id:"run-e2e-tests",children:["Run E2E Tests",(0,t.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#run-e2e-tests",children:"#"})]}),"\n",(0,t.jsx)(n.p,{children:"In addition to the unit tests, the Modern.js also includes end-to-end (E2E) tests, which checks the functionality of the application as a whole."}),"\n",(0,t.jsxs)(n.p,{children:["You can run the ",(0,t.jsx)(n.code,{children:"test:e2e"})," command to run the E2E tests:"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-sh",children:"pnpm run test:e2e\n"})}),"\n",(0,t.jsx)(n.p,{children:"If you need to run a specified test, you can add keywords to filter:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-sh",children:"# Only run test cases with the copy-assets keyword\nnpx jest copy-assets\n"})}),"\n",(0,t.jsx)(n.hr,{}),"\n",(0,t.jsxs)(n.h2,{id:"linting",children:["Linting",(0,t.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#linting",children:"#"})]}),"\n",(0,t.jsx)(n.p,{children:"To help maintain consistency and readability of the codebase, we use a ESLint to lint the codes."}),"\n",(0,t.jsx)(n.p,{children:"You can run the Linter by executing the following command:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-sh",children:"pnpm run lint\n"})}),"\n",(0,t.jsx)(n.hr,{}),"\n",(0,t.jsxs)(n.h2,{id:"documentation",children:["Documentation",(0,t.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#documentation",children:"#"})]}),"\n",(0,t.jsx)(n.p,{children:"Currently Modern.js provides documentation in English and Chinese. If you can use Chinese, please update both documents at the same time. Otherwise, just update the English documentation."}),"\n",(0,t.jsxs)(n.p,{children:["You can find all the documentation in the ",(0,t.jsx)(n.code,{children:"packages/document"})," folder:"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:"root\n└─ packages\n   └─ document\n       ├─ builder-doc    # Documentation for Modern.js Builder\n       ├─ doc-tools-doc  # Documentation for Modern.js Doc\n       ├─ main-doc       # Documentation for Modern.js Framework\n       └─ module-doc     # Documentation for Modern.js Module\n"})}),"\n",(0,t.jsxs)(n.p,{children:["This website is built with ",(0,t.jsx)(n.a,{href:"https://modernjs.dev/doc-tools",target:"_blank",rel:"noopener noreferrer",children:"Modern.js Doc"}),", the document content can be written using markdown or mdx syntax. You can refer to the ",(0,t.jsx)(n.a,{href:"https://modernjs.dev/doc-tools",target:"_blank",rel:"noopener noreferrer",children:"Modern.js Doc Website"})," for detailed usage."]}),"\n",(0,t.jsxs)(n.p,{children:["The source code of Modern.js Doc can be found in ",(0,t.jsx)(n.a,{href:"https://github.com/web-infra-dev/modern.js/tree/main/packages/solutions/doc-tools",target:"_blank",rel:"noopener noreferrer",children:"this folder"}),"."]}),"\n",(0,t.jsx)(n.hr,{}),"\n",(0,t.jsxs)(n.h2,{id:"submitting-changes",children:["Submitting Changes",(0,t.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#submitting-changes",children:"#"})]}),"\n",(0,t.jsxs)(n.h3,{id:"add-a-changeset",children:["Add a Changeset",(0,t.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#add-a-changeset",children:"#"})]}),"\n",(0,t.jsxs)(n.p,{children:["Modern.js is using ",(0,t.jsx)(n.a,{href:"https://github.com/changesets/changesets",target:"_blank",rel:"noopener noreferrer",children:"Changesets"})," to manage the versioning and changelogs."]}),"\n",(0,t.jsxs)(n.p,{children:["If you've changed some packages, you need add a new changeset for the changes. Please run ",(0,t.jsx)(n.code,{children:"change"})," command to select the changed packages and add the changeset info."]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-sh",children:"pnpm run change\n"})}),"\n",(0,t.jsxs)(n.h3,{id:"committing-your-changes",children:["Committing your Changes",(0,t.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#committing-your-changes",children:"#"})]}),"\n",(0,t.jsxs)(n.p,{children:["Commit your changes to your forked repo, and ",(0,t.jsx)(n.a,{href:"https://help.github.com/articles/creating-a-pull-request/",target:"_blank",rel:"noopener noreferrer",children:"create a pull request"}),"."]}),"\n",(0,t.jsxs)(n.h3,{id:"format-of-pr-titles",children:["Format of PR titles",(0,t.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#format-of-pr-titles",children:"#"})]}),"\n",(0,t.jsx)(n.p,{children:"The format of PR titles follow Conventional Commits."}),"\n",(0,t.jsx)(n.p,{children:"An example:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{children:"feat(plugin-swc): Add `xxx` config\n^    ^    ^\n|    |    |__ Subject\n|    |_______ Scope\n|____________ Type\n"})}),"\n",(0,t.jsx)(n.hr,{}),"\n",(0,t.jsxs)(n.h2,{id:"publishing",children:["Publishing",(0,t.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#publishing",children:"#"})]}),"\n",(0,t.jsxs)(n.p,{children:["We use ",(0,t.jsx)(n.strong,{children:"Modern.js Monorepo Solution"})," to manage version and changelog."]}),"\n",(0,t.jsx)(n.p,{children:"Repository maintainers can publish a new version of all packages to npm."}),"\n",(0,t.jsx)(n.p,{children:"Here are the steps to publish (we generally use CI for releases and avoid publishing npm packages locally):"}),"\n",(0,t.jsxs)(n.ol,{children:["\n",(0,t.jsxs)(n.li,{children:["Pull latest code from the ",(0,t.jsx)(n.code,{children:"main"})," branch."]}),"\n",(0,t.jsx)(n.li,{children:"Install:"}),"\n"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-sh",children:"pnpm i\n"})}),"\n",(0,t.jsxs)(n.ol,{start:"3",children:["\n",(0,t.jsx)(n.li,{children:"Build packages:"}),"\n"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-sh",children:"pnpm run prepare\n"})}),"\n",(0,t.jsxs)(n.ol,{start:"4",children:["\n",(0,t.jsx)(n.li,{children:"Bump version:"}),"\n"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-sh",children:"pnpm run bump\n"})}),"\n",(0,t.jsxs)(n.ol,{start:"5",children:["\n",(0,t.jsx)(n.li,{children:"Commit the version change."}),"\n"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-sh",children:'git add .\ngit commit -m "Release va.b.c"\n'})})]})}var l=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=Object.assign({},(0,r.useMDXComponents)(),e.components).wrapper;return n?(0,t.jsx)(n,Object.assign({},e,{children:(0,t.jsx)(h,e)})):h(e)}}}]);