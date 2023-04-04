(self.webpackChunkwebpack=self.webpackChunkwebpack||[]).push([["docs_en_guides_get-started_upgrade_mdx"],{35656:function(e,n,d){"use strict";Object.defineProperty(n,"__esModule",{value:!0});!function(e,n){for(var d in n)Object.defineProperty(e,d,{enumerable:!0,get:n[d]})}(n,{frontmatter:function(){return a},title:function(){return c},toc:function(){return i},default:function(){return t}});var r=d("12151"),s=d("21447");let a={title:"Upgrade",sidebar_position:3},c="Upgrade",i=[{text:"Upgrade with command",depth:2,id:"upgrade-with-command"},{text:"Specify version upgrade",depth:2,id:"specify-version-upgrade"},{text:"lock child dependency",depth:2,id:"lock-child-dependency"},{text:"pnpm",depth:3,id:"pnpm"},{text:"Yarn",depth:3,id:"yarn"},{text:"Npm",depth:3,id:"npm"}];function o(e){let n=Object.assign({h1:"h1",a:"a",h2:"h2",p:"p",code:"code",div:"div",button:"button",pre:"pre",strong:"strong",h3:"h3"},(0,s.useMDXComponents)(),e.components);return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(n.h1,{id:"upgrade",children:["Upgrade",(0,r.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#upgrade",children:"#"})]}),"\n",(0,r.jsxs)(n.h2,{id:"upgrade-with-command",children:["Upgrade with command",(0,r.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#upgrade-with-command",children:"#"})]}),"\n",(0,r.jsxs)(n.p,{children:["Modern.js provides the ",(0,r.jsx)(n.code,{children:"upgrade"})," command to support projects to upgrade to the latest version."]}),"\n",(0,r.jsxs)(n.p,{children:["Execute ",(0,r.jsx)(n.code,{children:"pnpm run upgrade"})," in the project:"]}),"\n",(0,r.jsx)(n.div,{className:"language-",children:(0,r.jsxs)(n.div,{className:"modern-code-content",children:[(0,r.jsx)(n.button,{className:"copy"}),(0,r.jsx)(n.pre,{className:"code",children:(0,r.jsx)(n.code,{className:"language-bash",children:"$ pnpm run upgrade\n\n> modern upgrade\n\n[INFO] [Project Type]: Application\n[INFO] [Modern.js Latest Version]: 2.0.0\n[INFO] Upgrade Modern.js package version success!\n"})})]})}),"\n",(0,r.jsxs)(n.p,{children:["You can see that the dependency in the project ",(0,r.jsx)(n.code,{children:"package.json"})," has been changed to the latest."]}),"\n",(0,r.jsxs)(n.h2,{id:"specify-version-upgrade",children:["Specify version upgrade",(0,r.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#specify-version-upgrade",children:"#"})]}),"\n",(0,r.jsxs)(n.p,{children:["Modern.js all packages are published using the ",(0,r.jsx)(n.strong,{children:"unified version number"}),"."]}),"\n",(0,r.jsx)(n.p,{children:"According to the website Release Note, developers can also manually upgrade the project to the desired version."}),"\n",(0,r.jsxs)(n.div,{className:"modern-directive tip",children:[(0,r.jsx)(n.div,{className:"modern-directive-title",children:"TIP"}),(0,r.jsxs)(n.div,{className:"modern-directive-content",children:["When upgrading, you need to upgrade to all packages provided by the Modern.js, rather than upgrading a single dependency.","\n"]})]}),"\n",(0,r.jsxs)(n.h2,{id:"lock-child-dependency",children:["lock child dependency",(0,r.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#lock-child-dependency",children:"#"})]}),"\n",(0,r.jsx)(n.p,{children:"When there is a problem with one of the child dependencies of the project, and the Modern.js cannot be updated immediately, you can use the package manager to lock the child dependency version."}),"\n",(0,r.jsxs)(n.h3,{id:"pnpm",children:["pnpm",(0,r.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#pnpm",children:"#"})]}),"\n",(0,r.jsxs)(n.p,{children:["For projects using pnpm, add the following configuration to the ",(0,r.jsx)(n.code,{children:"package.json"})," in the ",(0,r.jsx)(n.strong,{children:"project root directory"})," and re-execute ",(0,r.jsx)(n.code,{children:"pnpm install"}),":"]}),"\n",(0,r.jsx)(n.div,{className:"language-",children:(0,r.jsxs)(n.div,{className:"modern-code-content",children:[(0,r.jsx)(n.button,{className:"copy"}),(0,r.jsx)(n.pre,{className:"code",children:(0,r.jsx)(n.code,{className:"language-json",children:'{\n  "pnpm": {\n    "overrides": {\n      "package-name": "^1.0.0"\n    }\n  }\n}\n'})})]})}),"\n",(0,r.jsxs)(n.h3,{id:"yarn",children:["Yarn",(0,r.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#yarn",children:"#"})]}),"\n",(0,r.jsxs)(n.p,{children:["For projects using Yarn, add the following configuration to the ",(0,r.jsx)(n.code,{children:"package.json"})," in the ",(0,r.jsx)(n.strong,{children:"project root directory"})," and re-execute ",(0,r.jsx)(n.code,{children:"yarn install"}),":"]}),"\n",(0,r.jsx)(n.div,{className:"language-",children:(0,r.jsxs)(n.div,{className:"modern-code-content",children:[(0,r.jsx)(n.button,{className:"copy"}),(0,r.jsx)(n.pre,{className:"code",children:(0,r.jsx)(n.code,{className:"language-json",children:'{\n  "resolutions": {\n    "package-name": "^1.0.0"\n  }\n}\n'})})]})}),"\n",(0,r.jsxs)(n.h3,{id:"npm",children:["Npm",(0,r.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#npm",children:"#"})]}),"\n",(0,r.jsxs)(n.p,{children:["For projects using Npm, add the following configuration to the ",(0,r.jsx)(n.code,{children:"package.json"})," in the ",(0,r.jsx)(n.strong,{children:"project root directory"})," and re-execute ",(0,r.jsx)(n.code,{children:"npm install"}),":"]}),"\n",(0,r.jsx)(n.div,{className:"language-",children:(0,r.jsxs)(n.div,{className:"modern-code-content",children:[(0,r.jsx)(n.button,{className:"copy"}),(0,r.jsx)(n.pre,{className:"code",children:(0,r.jsx)(n.code,{className:"language-json",children:'{\n  "overrides": {\n    "package-name": "^1.0.0"\n  }\n}\n'})})]})}),"\n",(0,r.jsxs)(n.div,{className:"modern-directive info",children:[(0,r.jsx)(n.div,{className:"modern-directive-title",children:"INFO"}),(0,r.jsxs)(n.div,{className:"modern-directive-content",children:["For Monorepo repositories, the dependency version can only be locked in the ",(0,r.jsx)(n.code,{children:"package.json"})," in the project root directory, and all packages in Monorepo are affected.","\n"]})]})]})}var t=function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},{wrapper:n}=Object.assign({},(0,s.useMDXComponents)(),e.components);return n?(0,r.jsx)(n,Object.assign({},e,{children:(0,r.jsx)(o,e)})):o(e)}}}]);