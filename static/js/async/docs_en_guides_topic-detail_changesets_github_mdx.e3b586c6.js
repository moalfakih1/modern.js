(self.webpackChunk_modern_js_main_doc=self.webpackChunk_modern_js_main_doc||[]).push([["docs_en_guides_topic-detail_changesets_github_mdx"],{39385:function(e,n,t){"use strict";Object.defineProperty(n,"__esModule",{value:!0});!function(e,n){for(var t in n)Object.defineProperty(e,t,{enumerable:!0,get:n[t]})}(n,{frontmatter:function(){return l},title:function(){return i},toc:function(){return r},default:function(){return o}});var a=t("9880"),s=t("23169"),l={sidebar_position:9},i="Using Github related tools",r=[{text:"BOT",depth:2,id:"bot"},{text:"Installation",depth:3,id:"installation"},{text:"Configuration",depth:3,id:"configuration"},{text:"Usage",depth:3,id:"usage"},{text:"No changeset added",depth:4,id:"no-changeset-added"},{text:"Changeset added",depth:4,id:"changeset-added"},{text:"No need for changeset",depth:4,id:"no-need-for-changeset"},{text:"Action",depth:2,id:"action"},{text:"Automatically create Release Pull Request",depth:3,id:"automatically-create-release-pull-request"},{text:"Usage",depth:4,id:"usage-1"},{text:"Automatic Release",depth:3,id:"automatic-release"},{text:"Usage",depth:4,id:"usage-2"}];function c(e){var n=Object.assign({h1:"h1",a:"a",h2:"h2",p:"p",h3:"h3",img:"img",h4:"h4",code:"code",ul:"ul",li:"li",pre:"pre"},(0,s.useMDXComponents)(),e.components);return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsxs)(n.h1,{id:"using-github-related-tools",children:["Using Github related tools",(0,a.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#using-github-related-tools",children:"#"})]}),"\n",(0,a.jsxs)(n.h2,{id:"bot",children:["BOT",(0,a.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#bot",children:"#"})]}),"\n",(0,a.jsx)(n.p,{children:"On Github, changesets provide a robot to detect whether the current Pull Request has changeset, and provide a UI interface to add and modify changeset."}),"\n",(0,a.jsxs)(n.h3,{id:"installation",children:["Installation",(0,a.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#installation",children:"#"})]}),"\n",(0,a.jsxs)(n.p,{children:["Click ",(0,a.jsx)(n.a,{href:"https://github.com/apps/changeset-bot",target:"_blank",rel:"noopener noreferrer",children:"link"}),", select Install in the upper right corner, and confirm to complete the installation."]}),"\n",(0,a.jsx)(n.p,{children:(0,a.jsx)(n.img,{src:"https://lf3-static.bytednsdoc.com/obj/eden-cn/zq-uylkvT/ljhwZthlaukjlkulzlp/changeset-install-bot.png",alt:""})}),"\n",(0,a.jsxs)(n.h3,{id:"configuration",children:["Configuration",(0,a.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#configuration",children:"#"})]}),"\n",(0,a.jsx)(n.p,{children:"After successful installation, you can enter the configuration page and select the application repository according to your needs."}),"\n",(0,a.jsx)(n.p,{children:(0,a.jsx)(n.img,{src:"https://lf3-static.bytednsdoc.com/obj/eden-cn/zq-uylkvT/ljhwZthlaukjlkulzlp/changeset-config-bot.png",alt:""})}),"\n",(0,a.jsxs)(n.h3,{id:"usage",children:["Usage",(0,a.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#usage",children:"#"})]}),"\n",(0,a.jsx)(n.p,{children:"After the configuration is completed, the robot will automatically check whether each Pull Request has added changeset and provide prompt information through reply."}),"\n",(0,a.jsxs)(n.h4,{id:"no-changeset-added",children:["No changeset added",(0,a.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#no-changeset-added",children:"#"})]}),"\n",(0,a.jsx)(n.p,{children:(0,a.jsx)(n.img,{src:"https://lf3-static.bytednsdoc.com/obj/eden-cn/zq-uylkvT/ljhwZthlaukjlkulzlp/changeset-bot-no-changeset.png",alt:""})}),"\n",(0,a.jsxs)(n.p,{children:["You can run ",(0,a.jsx)(n.code,{children:"pnpm run change"})," in the repository to add changeset, or click the second link below to fill in changeset directly."]}),"\n",(0,a.jsxs)(n.h4,{id:"changeset-added",children:["Changeset added",(0,a.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#changeset-added",children:"#"})]}),"\n",(0,a.jsx)(n.p,{children:(0,a.jsx)(n.img,{src:"https://lf3-static.bytednsdoc.com/obj/eden-cn/zq-uylkvT/ljhwZthlaukjlkulzlp/changeset-bot-exist-changeset.png",alt:""})}),"\n",(0,a.jsx)(n.p,{children:"You can click the link below to modify and add new changeset."}),"\n",(0,a.jsxs)(n.h4,{id:"no-need-for-changeset",children:["No need for changeset",(0,a.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#no-need-for-changeset",children:"#"})]}),"\n",(0,a.jsx)(n.p,{children:"You can directly ignore the prompt information when no changeset is added, which will not cause problems with the merging of Pull Requests."}),"\n",(0,a.jsxs)(n.h2,{id:"action",children:["Action",(0,a.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#action",children:"#"})]}),"\n",(0,a.jsxs)(n.h3,{id:"automatically-create-release-pull-request",children:["Automatically create Release Pull Request",(0,a.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#automatically-create-release-pull-request",children:"#"})]}),"\n",(0,a.jsx)(n.p,{children:"Modern.js provides a Github Action to automatically create release Pull Request, which can automatically run bump command, update lock file and create Pull Request operation based on the selected branch."}),"\n",(0,a.jsxs)(n.h4,{id:"usage-1",children:["Usage",(0,a.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#usage-1",children:"#"})]}),"\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsxs)(n.li,{children:["Create a ",(0,a.jsx)(n.code,{children:".github/workflows/release-pull-request.yml"})," file in the repository and fill in the following content:"]}),"\n"]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-yaml",children:"name: Release Pull Request\n\non:\n  workflow_dispatch:\n    inputs:\n      version:\n        type: choice\n        description: 'Release Type(canary, beta, alpha, latest)'\n        required: true\n        default: 'latest'\n        options:\n        - canary\n        - beta\n        - alpha\n        - latest\n\njobs:\n  release:\n    name: Create Release Pull Request\n    runs-on: ubuntu-latest\n    steps:\n      - name: Checkout Repo\n        uses: actions/checkout@master\n        with:\n          # This makes Actions fetch only one branch to release\n          fetch-depth: 100\n\n      - ... # install dependencies and build repo package\n      - name: Create Release Pull Request\n        uses: web-infra-dev/actions@v2\n        with:\n          version: ${{ github.event.inputs.version }}\n          versionNumber: 'auto'\n          type: 'pull request'\n          tools: 'modern'\n        env:\n          GITHUB_TOKEN: ${{ secrets.REPO_SCOPED_TOKEN }}\n          NPM_TOKEN: ${{ secrets.NPM_TOKEN }}\n          REPOSITORY: ${{ github.repository }}\n          REF: ${{ github.ref }}\n"})}),"\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsx)(n.li,{children:"After merging Workflow into the main branch, go to the Action page corresponding to the Github repository and select Release Pull Request:"}),"\n"]}),"\n",(0,a.jsx)(n.p,{children:(0,a.jsx)(n.img,{src:"https://lf3-static.bytednsdoc.com/obj/eden-cn/zq-uylkvT/ljhwZthlaukjlkulzlp/action-pull-request.png",alt:"Release Pull Request Action"})}),"\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsx)(n.li,{children:"Select the release type of this release, and click the Run workflow button:"}),"\n"]}),"\n",(0,a.jsx)(n.p,{children:(0,a.jsx)(n.img,{src:"https://lf3-static.bytednsdoc.com/obj/eden-cn/zq-uylkvT/ljhwZthlaukjlkulzlp/action-pull-request.jpeg",alt:"Run Release Pull Request"})}),"\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsxs)(n.li,{children:["After the workflow is completed, a ",(0,a.jsx)(n.code,{children:"Release-${version}"})," Pull Request will be automatically created, the related version number of ",(0,a.jsx)(n.code,{children:"bump"})," changeset will be automatically updated, and the lock file will be updated. The content of Pull Request is the Release Note automatically generated by running the ",(0,a.jsx)(n.code,{children:"gen-release-note"})," command."]}),"\n"]}),"\n",(0,a.jsx)(n.p,{children:(0,a.jsx)(n.img,{src:"https://lf3-static.bytednsdoc.com/obj/eden-cn/zq-uylkvT/ljhwZthlaukjlkulzlp/release-pull-request.jpeg",alt:"Release Pull Request"})}),"\n",(0,a.jsxs)(n.h3,{id:"automatic-release",children:["Automatic Release",(0,a.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#automatic-release",children:"#"})]}),"\n",(0,a.jsx)(n.p,{children:"Modern.js provides a Github Action to automatically release versions, which can automatically run release command based on the selected branch and publish the package to NPM."}),"\n",(0,a.jsxs)(n.h4,{id:"usage-2",children:["Usage",(0,a.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#usage-2",children:"#"})]}),"\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsxs)(n.li,{children:["Create a ",(0,a.jsx)(n.code,{children:".github/workflows/release.yml"})," file in the repository and fill in the following content:"]}),"\n"]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-yaml",children:"name: Release\n\non:\n  workflow_dispatch:\n    inputs:\n      version:\n        type: choice\n        description: 'Release Version(canary, beta, alpha, latest)'\n        required: true\n        default: 'next'\n        options:\n        - canary\n        - beta\n        - alpha\n        - latest\n      branch:\n        description: 'Release Branch(confirm release branch)'\n        required: true\n        default: 'main'\n\njobs:\n  release:\n    name: Release\n    runs-on: ubuntu-latest\n    steps:\n      - name: Checkout Repo\n        uses: actions/checkout@master\n        with:\n          # This makes Actions fetch only one branch to release\n          fetch-depth: 1\n\n      - ... # install dependencies and build repo package\n      - name: Release\n        uses: web-infra-dev/actions@v2\n        with:\n          version: ${{ github.event.inputs.version }}\n          branch: ${{ github.event.inputs.branch }}\n          type: 'release'\n          tools: 'modern'\n        env:\n          GITHUB_TOKEN: ${{ secrets.GITHUB_TOKEN }}\n          NPM_TOKEN: ${{ secrets.NPM_TOKEN }}\n          REPOSITORY: ${{ github.repository }}\n          REF: ${{ github.ref }}\n"})}),"\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsx)(n.li,{children:"Configure the NPM_TOKEN of the repository:"}),"\n"]}),"\n",(0,a.jsx)(n.p,{children:(0,a.jsx)(n.img,{src:"https://lf3-static.bytednsdoc.com/obj/eden-cn/zq-uylkvT/ljhwZthlaukjlkulzlp/github-set-npm-token.png",alt:""})}),"\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsx)(n.li,{children:"After merging Workflow into the main branch, go to the Action page corresponding to the Github repository and select Release:"}),"\n"]}),"\n",(0,a.jsx)(n.p,{children:(0,a.jsx)(n.img,{src:"https://lf3-static.bytednsdoc.com/obj/eden-cn/zq-uylkvT/ljhwZthlaukjlkulzlp/release-action.png",alt:"Release Action"})}),"\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsx)(n.li,{children:"Select the branch name and release version type, and click the Run workflow button:"}),"\n"]}),"\n",(0,a.jsx)(n.p,{children:(0,a.jsx)(n.img,{src:"https://lf3-static.bytednsdoc.com/obj/eden-cn/zq-uylkvT/ljhwZthlaukjlkulzlp/run-release-workflow.png",alt:"Run Release Action"})}),"\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsx)(n.li,{children:"Workflow will automatically complete the build and release to NPM process of the repository."}),"\n"]})]})}var o=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=Object.assign({},(0,s.useMDXComponents)(),e.components).wrapper;return n?(0,a.jsx)(n,Object.assign({},e,{children:(0,a.jsx)(c,e)})):c(e)}}}]);