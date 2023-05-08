(self.webpackChunk_modern_js_main_doc=self.webpackChunk_modern_js_main_doc||[]).push([["docs_zh_apis_monorepo_commands_change_mdx"],{94410:function(e,n,a){"use strict";Object.defineProperty(n,"__esModule",{value:!0});!function(e,n){for(var a in n)Object.defineProperty(e,a,{enumerable:!0,get:n[a]})}(n,{frontmatter:function(){return o},title:function(){return r},toc:function(){return d},default:function(){return t}});var s=a("12151"),c=a("23169"),o={sidebar_position:2},r="change",d=[];function i(e){var n=Object.assign({h1:"h1",a:"a",div:"div",button:"button",pre:"pre",code:"code",p:"p"},(0,c.useMDXComponents)(),e.components);return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)(n.h1,{id:"change",children:["change",(0,s.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#change",children:"#"})]}),"\n",(0,s.jsx)(n.div,{className:"language-",children:(0,s.jsxs)(n.div,{className:"modern-code-content",children:[(0,s.jsx)(n.button,{className:"copy"}),(0,s.jsx)(n.pre,{className:"code",children:(0,s.jsx)(n.code,{className:"language-bash",children:"Usage: modern change [options]\n\n创建变更集\n\nOptions:\n  --empty     创建空变更集 (default: false)\n  --open      使用编辑器中打开创建的变更集 (default: false)\n  -h, --help  display help for command\n"})})]})}),"\n",(0,s.jsxs)(n.div,{className:"modern-directive info",children:[(0,s.jsx)(n.div,{className:"modern-directive-title",children:"INFO"}),(0,s.jsxs)(n.div,{className:"modern-directive-content",children:[(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.a,{href:"/apis/monorepo/commands/change",children:(0,s.jsx)(n.code,{children:"change"})}),"、",(0,s.jsx)(n.a,{href:"/apis/monorepo/commands/pre",children:(0,s.jsx)(n.code,{children:"pre"})}),"、",(0,s.jsx)(n.a,{href:"/apis/monorepo/commands/bump",children:(0,s.jsx)(n.code,{children:"bump"})}),"、",(0,s.jsx)(n.a,{href:"/apis/monorepo/commands/release",children:(0,s.jsx)(n.code,{children:"release"})})," 命令集成了工具 ",(0,s.jsx)(n.a,{href:"https://github.com/atlassian/changesets",target:"_blank",rel:"noopener noreferrer",children:(0,s.jsx)(n.code,{children:"changesets"})})," 管理版本变更和 Changelog。"]}),"\n"]})]}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.code,{children:"modern change"})," 命令添加 changeset："]}),"\n",(0,s.jsx)(n.div,{className:"language-",children:(0,s.jsxs)(n.div,{className:"modern-code-content",children:[(0,s.jsx)(n.button,{className:"copy"}),(0,s.jsx)(n.pre,{className:"code",children:(0,s.jsx)(n.code,{className:"language-bash",children:"$ npx modern change\n\uD83E\uDD8B  Which packages would you like to include? \xb7 package-a, package-b\n\uD83E\uDD8B  Which packages should have a major bump? \xb7 No items were selected\n\uD83E\uDD8B  Which packages should have a minor bump? \xb7 No items were selected\n\uD83E\uDD8B  The following packages will be patch bumped:\n\uD83E\uDD8B  package-a@0.1.0\n\uD83E\uDD8B  package-b@0.1.0\n\uD83E\uDD8B  Please enter a summary for this change (this will be in the changelogs). Submit empty line to open external editor\n\uD83E\uDD8B  Summary \xb7 test publish\n\uD83E\uDD8B  === Releasing the following packages ===\n\uD83E\uDD8B  [Patch]\n\uD83E\uDD8B    package-a, package-b\n\uD83E\uDD8B  ╔════════════════════════════════════════════════════════════════════════════════════════════════════════════════════════════════════╗\n\uD83E\uDD8B  ║                                                      ========= NOTE ========                                                       ║\n\uD83E\uDD8B  ║All dependents of these packages that will be incompatible with the new version will be patch bumped when this changeset is applied.║\n\uD83E\uDD8B  ╚════════════════════════════════════════════════════════════════════════════════════════════════════════════════════════════════════╝\n\uD83E\uDD8B  Is this your desired changeset? (Y/n) \xb7 true\n\uD83E\uDD8B  Changeset added! - you can now commit it\n\uD83E\uDD8B\n\uD83E\uDD8B  If you want to modify or expand on the changeset summary, you can find it here\n\uD83E\uDD8B  info /xxxx/monorepo/.changeset/long-lizards-talk.md\n"})})]})}),"\n",(0,s.jsxs)(n.p,{children:["上面我们给 ",(0,s.jsx)(n.code,{children:"package-a"})," 和 ",(0,s.jsx)(n.code,{children:"package-b"})," 都选择了 ",(0,s.jsx)(n.code,{children:"patch"})," 变更，具体的变更信息在 monorepo 根目录下的 ",(0,s.jsx)(n.code,{children:".changeset/long-lizards-talk.md"})," 中:"]}),"\n",(0,s.jsx)(n.div,{className:"language-",children:(0,s.jsxs)(n.div,{className:"modern-code-content",children:[(0,s.jsx)(n.button,{className:"copy"}),(0,s.jsx)(n.pre,{className:"code",children:(0,s.jsx)(n.code,{className:"language-md",children:"---\n'package-a': patch\n'package-b': patch\n---\n\ntest publish\n"})})]})})]})}var t=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=Object.assign({},(0,c.useMDXComponents)(),e.components).wrapper;return n?(0,s.jsx)(n,Object.assign({},e,{children:(0,s.jsx)(i,e)})):i(e)}}}]);