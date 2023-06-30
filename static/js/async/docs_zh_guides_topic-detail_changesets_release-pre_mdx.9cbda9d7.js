(self.webpackChunk_modern_js_main_doc=self.webpackChunk_modern_js_main_doc||[]).push([["docs_zh_guides_topic-detail_changesets_release-pre_mdx"],{4301:function(e,n,s){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),Object.defineProperty(n,"default",{enumerable:!0,get:function(){return l}});var r,d=s("15169"),i=s("43932"),c=s("9880"),h=s("23169");function a(e){var n=Object.assign({h1:"h1",a:"a",p:"p",h2:"h2",div:"div",h4:"h4",pre:"pre",code:"code",ul:"ul",li:"li",h3:"h3"},(0,h.useMDXComponents)(),e.components);return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsxs)(n.h1,{id:"发布预发布版本",children:["发布预发布版本",(0,c.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#发布预发布版本",children:"#"})]}),"\n",(0,c.jsx)(n.p,{children:"在发布正式版本之前，我们也需要发布预发布版本供内部测试和用户使用，changesets 也支持发布预发布版本。"}),"\n",(0,c.jsxs)(n.h2,{id:"步骤",children:["步骤",(0,c.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#步骤",children:"#"})]}),"\n",(0,c.jsxs)(n.div,{className:"modern-directive info",children:[(0,c.jsx)(n.div,{className:"modern-directive-title",children:"INFO"}),(0,c.jsxs)(n.div,{className:"modern-directive-content",children:[(0,c.jsx)(n.p,{children:"以下示例命令都以 pnpm 作为包管理工具进行，如果需要使用其他包管理工具，请按需求进行替换。"}),"\n"]})]}),"\n",(0,c.jsxs)(n.h4,{id:"执行-bump-命令升级预发布版本版本号",children:["执行 bump 命令升级预发布版本版本号",(0,c.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#执行-bump-命令升级预发布版本版本号",children:"#"})]}),"\n",(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:"language-bash",children:"pnpm run bump --canary --preid <preid>\n"})}),"\n",(0,c.jsxs)(n.p,{children:[(0,c.jsx)(n.code,{children:"preid"})," 为预发布版本标记，例如 ",(0,c.jsx)(n.code,{children:"alpha"}),"、",(0,c.jsx)(n.code,{children:"beta"})," 等，默认值为 ",(0,c.jsx)(n.code,{children:"next"}),"。"]}),"\n",(0,c.jsxs)(n.p,{children:["使用 ",(0,c.jsx)(n.code,{children:"--canary"})," 参数后，",(0,c.jsx)(n.code,{children:"bump"})," 命令由以下三个步骤完成："]}),"\n",(0,c.jsxs)(n.ul,{children:["\n",(0,c.jsxs)(n.li,{children:["\n",(0,c.jsxs)(n.p,{children:[(0,c.jsx)(n.code,{children:"changeset pre enter <preid>"})," 进入预发布模式。"]}),"\n"]}),"\n",(0,c.jsxs)(n.li,{children:["\n",(0,c.jsxs)(n.p,{children:[(0,c.jsx)(n.code,{children:"changeset version"})," 升级版本号。"]}),"\n"]}),"\n",(0,c.jsxs)(n.li,{children:["\n",(0,c.jsxs)(n.p,{children:[(0,c.jsx)(n.code,{children:"changeset pre exit"})," 退出预发布模式。"]}),"\n"]}),"\n"]}),"\n",(0,c.jsxs)(n.h4,{id:"检查相关变更并提交",children:["检查相关变更并提交",(0,c.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#检查相关变更并提交",children:"#"})]}),"\n",(0,c.jsx)(n.p,{children:"检查相关版本号变更是否正确，并提交变更。"}),"\n",(0,c.jsx)(n.p,{children:"建议预发布操作不在主分支上进行，不合入主分支，当预发布验证完成后，直接基于主分支发布正式版本。"}),"\n",(0,c.jsxs)(n.h4,{id:"执行-release-命令发布预发布版本",children:["执行 release 命令发布预发布版本",(0,c.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#执行-release-命令发布预发布版本",children:"#"})]}),"\n",(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:"language-bash",children:"pnpm run release --tag <tag>\n"})}),"\n",(0,c.jsxs)(n.p,{children:["发布预发布版本一定要使用 ",(0,c.jsx)(n.code,{children:"--tag"})," 参数，参数值最好和 ",(0,c.jsx)(n.code,{children:"preid"})," 值相同，方便用户使用。"]}),"\n",(0,c.jsxs)(n.h2,{id:"注意事项",children:["注意事项",(0,c.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#注意事项",children:"#"})]}),"\n",(0,c.jsxs)(n.h3,{id:"退出预发布模式",children:["退出预发布模式",(0,c.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#退出预发布模式",children:"#"})]}),"\n",(0,c.jsxs)(n.p,{children:["在进入预发布模式后，changesets 会自动在 ",(0,c.jsx)(n.code,{children:".changeset"})," 目录创建 ",(0,c.jsx)(n.code,{children:"pre.json"})," 文件用于记录当时进入预发布模式的一些状态信息，当出现状态信息和当前仓库状态不一致时，可直接删除该文件退出预发布模式。"]})]})}(r=globalThis).__RSPRESS_PAGE_META||(r.__RSPRESS_PAGE_META={}),globalThis.__RSPRESS_PAGE_META["%2Fhome%2Frunner%2Fwork%2Fmodern.js%2Fmodern.js%2Fpackages%2Fdocument%2Fmain-doc%2Fdocs%2Fzh%2Fguides%2Ftopic-detail%2Fchangesets%2Frelease-pre.mdx"]={toc:[{text:"步骤",id:"步骤",depth:2},{text:"执行 bump 命令升级预发布版本版本号",id:"执行-bump-命令升级预发布版本版本号",depth:4},{text:"检查相关变更并提交",id:"检查相关变更并提交",depth:4},{text:"执行 release 命令发布预发布版本",id:"执行-release-命令发布预发布版本",depth:4},{text:"注意事项",id:"注意事项",depth:2},{text:"退出预发布模式",id:"退出预发布模式",depth:3}],title:"发布预发布版本",frontmatter:{sidebar_position:4}};var l=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=Object.assign({},(0,h.useMDXComponents)(),e.components).wrapper;return n?(0,c.jsx)(n,i._(d._({},e),{children:(0,c.jsx)(a,d._({},e))})):a(e)}}}]);