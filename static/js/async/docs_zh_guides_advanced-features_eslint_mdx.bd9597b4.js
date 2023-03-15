(self.webpackChunkwebpack=self.webpackChunkwebpack||[]).push([["docs_zh_guides_advanced-features_eslint_mdx"],{3457:function(s,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});!function(s,e){for(var n in e)Object.defineProperty(s,n,{enumerable:!0,get:e[n]})}(e,{frontmatter:function(){return i},toc:function(){return l},title:function(){return c},default:function(){return a}});var r=n("12151");let i={title:"ESLint 规则集",sidebar_position:8},l=[{id:"q-如何处理-lint",text:"Q: 如何处理 Lint",depth:2},{id:"实时自动修复",text:"实时自动修复",depth:3},{id:"批量自动修复",text:"批量自动修复",depth:3},{id:"人工修复",text:"人工修复",depth:3},{id:"声明例外情况",text:"声明例外情况",depth:3},{id:"q-如何自定义-eslint-规则",text:"Q: 如何自定义 ESLint 规则",depth:2},{id:"仓库根目录下-packagejson-里的-eslintconfig-字段",text:'仓库根目录下 package.json 里的 "eslintConfig" 字段',depth:3},{id:"srceslintrcjs-文件",text:"src/.eslintrc.js 文件",depth:3},{id:"packagejson-里的-eslintignore-字段",text:"package.json 里的 eslintIgnore 字段",depth:3},{id:"q-如何升级-eslint-插件的版本",text:"Q: 如何升级 ESLint 插件的版本",depth:2},{id:"q-webstorm-有时候会报-eslint-错误",text:"Q: WebStorm 有时候会报 ESLint 错误",depth:2}],c="ESLint 规则集";function o(s){let e=Object.assign({h1:"h1",a:"a",p:"p",strong:"strong",code:"code",h2:"h2",h3:"h3",div:"div",button:"button",pre:"pre",span:"span",ul:"ul",li:"li",img:"img"},s.components);return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(e.h1,{id:"eslint-规则集",children:[(0,r.jsx)(e.a,{className:"header-anchor","aria-hidden":"true",href:"#eslint-规则集",children:"#"}),"ESLint 规则集"]}),"\n","\n",(0,r.jsxs)(e.p,{children:[(0,r.jsx)(e.strong,{children:"Modern.js ESLint 规则集"}),"是全量的 ",(0,r.jsx)(e.strong,{children:"ESLint"})," 规则集合，包含 ",(0,r.jsx)(e.code,{children:"@modern-js"})," （对于 Node.js 项目的 Lint 规则）和 ",(0,r.jsx)(e.code,{children:"@modern-js-app"}),"（对于前端项目的 Lint 规则）。"]}),"\n",(0,r.jsx)(e.p,{children:"下面以具体问题介绍更多 ESLint 用法。"}),"\n",(0,r.jsxs)(e.h2,{id:"q-如何处理-lint",children:[(0,r.jsx)(e.a,{className:"header-anchor","aria-hidden":"true",href:"#q-如何处理-lint",children:"#"}),"Q: 如何处理 Lint"]}),"\n",(0,r.jsxs)(e.h3,{id:"实时自动修复",children:[(0,r.jsx)(e.a,{className:"header-anchor","aria-hidden":"true",href:"#实时自动修复",children:"#"}),"实时自动修复"]}),"\n",(0,r.jsxs)(e.p,{children:["多数问题会被 ESLint 规则的自动修复功能或 ",(0,r.jsx)(e.a,{href:"https://prettier.io/",target:"_blank",rel:"nofollow",children:"Prettier"})," 的代码格式化功能（已被集成到 ESLint 里）自动解决，开发者不需要关心问题的细节和解决方式。"]}),"\n",(0,r.jsxs)(e.div,{className:"modern-directive info",children:[(0,r.jsx)(e.p,{className:"modern-directive-title",children:"INFO"}),(0,r.jsx)(e.div,{className:"modern-directive-content",children:(0,r.jsx)(e.p,{children:"\n主要在 IDE 保存文件的环节执行这种自动修复，少数漏网之鱼会在提交代码环节被自动修复。"})})]}),"\n",(0,r.jsxs)(e.h3,{id:"批量自动修复",children:[(0,r.jsx)(e.a,{className:"header-anchor","aria-hidden":"true",href:"#批量自动修复",children:"#"}),"批量自动修复"]}),"\n",(0,r.jsx)(e.p,{children:"在少数情况下，比如旧项目迁移的时候，可以执行以下命令，批量修复和检查所有文件："}),"\n",(0,r.jsxs)(e.div,{className:"language-bash",children:[(0,r.jsx)(e.div,{className:""}),(0,r.jsxs)(e.div,{className:"modern-code-content",children:[(0,r.jsx)(e.button,{className:"copy"}),(0,r.jsx)(e.pre,{className:"shiki",style:{backgroundColor:"var(--shiki-color-background)"},children:(0,r.jsxs)(e.code,{children:[(0,r.jsx)(e.span,{className:"line",children:(0,r.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"pnpm run lint:error"})}),"\n",(0,r.jsx)(e.span,{className:"line"})]})})]})]}),"\n",(0,r.jsxs)(e.h3,{id:"人工修复",children:[(0,r.jsx)(e.a,{className:"header-anchor","aria-hidden":"true",href:"#人工修复",children:"#"}),"人工修复"]}),"\n",(0,r.jsx)(e.p,{children:"对于无法自动修复的问题，可以在 IDE 里点击问题提示框里的规则链接，打开这条规则的文档，查看问题的解释和解决方案。"}),"\n",(0,r.jsxs)(e.h3,{id:"声明例外情况",children:[(0,r.jsx)(e.a,{className:"header-anchor","aria-hidden":"true",href:"#声明例外情况",children:"#"}),"声明例外情况"]}),"\n",(0,r.jsx)(e.p,{children:"目前阶段，有些规则并不能做到足够智能，多数情况下会有很大收益，在少数情况下也许不适用。但如果为了这些少数情况就把整个规则关掉或改掉，得不偿失。"}),"\n",(0,r.jsxs)(e.p,{children:["这种情况下可以用 ",(0,r.jsx)(e.a,{href:"https://eslint.org/docs/user-guide/configuring/rules#disabling-rules",target:"_blank",rel:"nofollow",children:"eslint-disable"})," 注释，对符合",(0,r.jsx)(e.strong,{children:"少数情况"}),"的代码块做标注，声明这里是一个例外，应该忽略。比如："]}),"\n",(0,r.jsxs)(e.div,{className:"language-js",children:[(0,r.jsx)(e.div,{className:""}),(0,r.jsxs)(e.div,{className:"modern-code-content",children:[(0,r.jsx)(e.button,{className:"copy"}),(0,r.jsx)(e.pre,{className:"shiki",style:{backgroundColor:"var(--shiki-color-background)"},children:(0,r.jsxs)(e.code,{children:[(0,r.jsx)(e.span,{className:"line",children:(0,r.jsx)(e.span,{style:{color:"var(--shiki-token-comment)"},children:"/* eslint-disable filenames/match-exported */"})}),"\n",(0,r.jsx)(e.span,{className:"line",children:(0,r.jsx)(e.span,{style:{color:"var(--shiki-token-keyword)"},children:"..."})}),"\n",(0,r.jsx)(e.span,{className:"line",children:(0,r.jsx)(e.span,{style:{color:"var(--shiki-token-comment)"},children:"/* eslint-enable filenames/match-exported */"})}),"\n",(0,r.jsx)(e.span,{className:"line"})]})})]})]}),"\n",(0,r.jsxs)(e.div,{className:"modern-directive info",children:[(0,r.jsx)(e.p,{className:"modern-directive-title",children:"INFO"}),(0,r.jsx)(e.div,{className:"modern-directive-content",children:(0,r.jsx)(e.p,{children:'\n在 VS Code 编辑器里输入 eslint，会自动出现关于 "eslint-disable" 的提示框，选择提示选项生成对应注释对。'})})]}),"\n",(0,r.jsxs)(e.p,{children:["【Modern.js ESLint 规则集】要求 ",(0,r.jsx)(e.a,{href:"https://eslint.org/docs/user-guide/configuring/rules#disabling-rules",target:"_blank",rel:"nofollow",children:"eslint-disable"})," 必须成对使用，必须明确表达要影响的范围，以及在这个范围内明确表达要禁用什么规则，目的是让",(0,r.jsx)(e.strong,{children:"例外"}),"有明确的、最小化的范围，避免 ",(0,r.jsx)(e.a,{href:"https://eslint.org/docs/user-guide/configuring/rules#disabling-rules",target:"_blank",rel:"nofollow",children:"eslint-disable"})," 被滥用，导致不属于例外的代码也被禁用了规则。"]}),"\n",(0,r.jsxs)(e.h2,{id:"q-如何自定义-eslint-规则",children:[(0,r.jsx)(e.a,{className:"header-anchor","aria-hidden":"true",href:"#q-如何自定义-eslint-规则",children:"#"}),"Q: 如何自定义 ESLint 规则"]}),"\n",(0,r.jsxs)(e.h3,{id:"仓库根目录下-packagejson-里的-eslintconfig-字段",children:[(0,r.jsx)(e.a,{className:"header-anchor","aria-hidden":"true",href:"#仓库根目录下-packagejson-里的-eslintconfig-字段",children:"#"}),"仓库根目录下 ",(0,r.jsx)(e.code,{children:"package.json"}),' 里的 "eslintConfig" 字段']}),"\n",(0,r.jsx)(e.p,{children:"这个地方是整个仓库的默认 ESLint 配置，是针对纯 Node.js 代码（只能在 Node.js 里运行）设计的。"}),"\n",(0,r.jsx)(e.p,{children:"如果项目在某些规则上确实有特殊要求或不可避免的兼容问题（不是例外），可以在这里增加规则配置。该配置会优先于默认的【Modern.js ESLint 规则集】，比如："}),"\n",(0,r.jsxs)(e.div,{className:"language-json",children:[(0,r.jsx)(e.div,{className:""}),(0,r.jsxs)(e.div,{className:"modern-code-content",children:[(0,r.jsx)(e.button,{className:"copy"}),(0,r.jsx)(e.pre,{className:"shiki",style:{backgroundColor:"var(--shiki-color-background)"},children:(0,r.jsxs)(e.code,{children:[(0,r.jsxs)(e.span,{className:"line",children:[(0,r.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-token-string-expression)"},children:'"eslintConfig"'}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:": {"})]}),"\n",(0,r.jsxs)(e.span,{className:"line",children:[(0,r.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"    "}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-token-keyword)"},children:'"extends"'}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-token-punctuation)"},children:":"}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" ["})]}),"\n",(0,r.jsxs)(e.span,{className:"line",children:[(0,r.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"      "}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-token-string-expression)"},children:'"@modern-js"'})]}),"\n",(0,r.jsxs)(e.span,{className:"line",children:[(0,r.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"    ]"}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-token-punctuation)"},children:","})]}),"\n",(0,r.jsxs)(e.span,{className:"line",children:[(0,r.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"    "}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-token-keyword)"},children:'"rules"'}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-token-punctuation)"},children:":"}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" {"})]}),"\n",(0,r.jsxs)(e.span,{className:"line",children:[(0,r.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"      "}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-token-keyword)"},children:'"filenames/match-exported"'}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-token-punctuation)"},children:":"}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-token-string-expression)"},children:'"off"'})]}),"\n",(0,r.jsx)(e.span,{className:"line",children:(0,r.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"    }"})}),"\n",(0,r.jsx)(e.span,{className:"line",children:(0,r.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"  },"})}),"\n",(0,r.jsx)(e.span,{className:"line"}),"\n",(0,r.jsx)(e.span,{className:"line"})]})})]})]}),"\n",(0,r.jsxs)(e.h3,{id:"srceslintrcjs-文件",children:[(0,r.jsx)(e.a,{className:"header-anchor","aria-hidden":"true",href:"#srceslintrcjs-文件",children:"#"}),(0,r.jsx)(e.code,{children:"src/.eslintrc.js"})," 文件"]}),"\n",(0,r.jsx)(e.p,{children:"Modern.js 的应用工程、模块工程，源代码目录里都会默认有这个配置文件，是针对 Universal JS 代码设计的。"}),"\n",(0,r.jsxs)(e.div,{className:"modern-directive info",children:[(0,r.jsx)(e.p,{className:"modern-directive-title",children:"INFO"}),(0,r.jsx)(e.div,{className:"modern-directive-content",children:(0,r.jsx)(e.p,{children:"\nUniversal JS 代码是既能浏览器端也能在服务器端运行的代码。"})})]}),"\n",(0,r.jsx)(e.p,{children:"如果项目在某些规则上确实有特殊要求或不可避免的兼容问题（不是例外），可以在这里增加规则配置，该配置会优先于默认的【Modern.js ESLint 规则集】，比如："}),"\n",(0,r.jsxs)(e.div,{className:"language-js",children:[(0,r.jsx)(e.div,{className:""}),(0,r.jsxs)(e.div,{className:"modern-code-content",children:[(0,r.jsx)(e.button,{className:"copy"}),(0,r.jsx)(e.pre,{className:"shiki",style:{backgroundColor:"var(--shiki-color-background)"},children:(0,r.jsxs)(e.code,{children:[(0,r.jsx)(e.span,{className:"line",children:(0,r.jsx)(e.span,{style:{color:"var(--shiki-token-comment)"},children:"// eslint-disable-next-line import/no-commonjs"})}),"\n",(0,r.jsxs)(e.span,{className:"line",children:[(0,r.jsx)(e.span,{style:{color:"var(--shiki-token-constant)"},children:"module"}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"."}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-token-constant)"},children:"exports"}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-token-keyword)"},children:"="}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" {"})]}),"\n",(0,r.jsxs)(e.span,{className:"line",children:[(0,r.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"  root"}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-token-keyword)"},children:":"}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-token-constant)"},children:"true"}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-token-punctuation)"},children:","})]}),"\n",(0,r.jsxs)(e.span,{className:"line",children:[(0,r.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"  extends"}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-token-keyword)"},children:":"}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" ["}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-token-string-expression)"},children:"'@modern-js-app'"}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"]"}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-token-punctuation)"},children:","})]}),"\n",(0,r.jsxs)(e.span,{className:"line",children:[(0,r.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"  parserOptions"}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-token-keyword)"},children:":"}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" {"})]}),"\n",(0,r.jsxs)(e.span,{className:"line",children:[(0,r.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"    tsconfigRootDir"}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-token-keyword)"},children:":"}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" __dirname"}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-token-punctuation)"},children:","})]}),"\n",(0,r.jsxs)(e.span,{className:"line",children:[(0,r.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"    project"}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-token-keyword)"},children:":"}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" ["}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-token-string-expression)"},children:"'../tsconfig.json'"}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"]"}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-token-punctuation)"},children:","})]}),"\n",(0,r.jsxs)(e.span,{className:"line",children:[(0,r.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"  }"}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-token-punctuation)"},children:","})]}),"\n",(0,r.jsxs)(e.span,{className:"line",children:[(0,r.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"  rules"}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-token-keyword)"},children:":"}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" {"})]}),"\n",(0,r.jsxs)(e.span,{className:"line",children:[(0,r.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"    "}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-token-string-expression)"},children:"'filenames/match-exported'"}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-token-keyword)"},children:":"}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-token-string-expression)"},children:"'off'"}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-token-punctuation)"},children:","})]}),"\n",(0,r.jsxs)(e.span,{className:"line",children:[(0,r.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"  }"}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-token-punctuation)"},children:","})]}),"\n",(0,r.jsx)(e.span,{className:"line",children:(0,r.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"};"})}),"\n",(0,r.jsx)(e.span,{className:"line"})]})})]})]}),"\n",(0,r.jsxs)(e.p,{children:["如果有需要，还可以继续在不同的子目录里增加 ",(0,r.jsx)(e.code,{children:".eslintrc.js"})," 文件，针对这个子目录里的代码做特殊配置："]}),"\n",(0,r.jsxs)(e.div,{className:"language-js",children:[(0,r.jsx)(e.div,{className:""}),(0,r.jsxs)(e.div,{className:"modern-code-content",children:[(0,r.jsx)(e.button,{className:"copy"}),(0,r.jsx)(e.pre,{className:"shiki",style:{backgroundColor:"var(--shiki-color-background)"},children:(0,r.jsxs)(e.code,{children:[(0,r.jsxs)(e.span,{className:"line",children:[(0,r.jsx)(e.span,{style:{color:"var(--shiki-token-constant)"},children:"module"}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"."}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-token-constant)"},children:"exports"}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-token-keyword)"},children:"="}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" {"})]}),"\n",(0,r.jsxs)(e.span,{className:"line",children:[(0,r.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"  rules"}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-token-keyword)"},children:":"}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" {"})]}),"\n",(0,r.jsxs)(e.span,{className:"line",children:[(0,r.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"    "}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-token-string-expression)"},children:"'filenames/match-exported'"}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-token-keyword)"},children:":"}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-token-string-expression)"},children:"'off'"}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-token-punctuation)"},children:","})]}),"\n",(0,r.jsxs)(e.span,{className:"line",children:[(0,r.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"  }"}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-token-punctuation)"},children:","})]}),"\n",(0,r.jsx)(e.span,{className:"line",children:(0,r.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"};"})}),"\n",(0,r.jsx)(e.span,{className:"line"})]})})]})]}),"\n",(0,r.jsxs)(e.div,{className:"modern-directive tip",children:[(0,r.jsx)(e.p,{className:"modern-directive-title",children:"提示"}),(0,r.jsx)(e.div,{className:"modern-directive-content",children:(0,r.jsxs)(e.p,{children:["\n注意：没有必要使用 ",(0,r.jsx)(e.code,{children:"extends"})," 字段，会自动继承父目录的配置。"]})})]}),"\n",(0,r.jsxs)(e.h3,{id:"packagejson-里的-eslintignore-字段",children:[(0,r.jsx)(e.a,{className:"header-anchor","aria-hidden":"true",href:"#packagejson-里的-eslintignore-字段",children:"#"}),"package.json 里的 ",(0,r.jsx)(e.code,{children:"eslintIgnore"})," 字段"]}),"\n",(0,r.jsxs)(e.p,{children:["把包含 ",(0,r.jsx)(e.code,{children:".js"}),"、",(0,r.jsx)(e.code,{children:".jsx"}),"、",(0,r.jsx)(e.code,{children:".ts"}),"、",(0,r.jsx)(e.code,{children:".tsx"})," 文件、但不需要做代码检查和自动修复的目录，添加到 ",(0,r.jsx)(e.code,{children:"eslintIgnore"})," 里，可以优化 ESLint 检查的速度，比如："]}),"\n",(0,r.jsxs)(e.div,{className:"language-json",children:[(0,r.jsx)(e.div,{className:""}),(0,r.jsxs)(e.div,{className:"modern-code-content",children:[(0,r.jsx)(e.button,{className:"copy"}),(0,r.jsx)(e.pre,{className:"shiki",style:{backgroundColor:"var(--shiki-color-background)"},children:(0,r.jsxs)(e.code,{children:[(0,r.jsxs)(e.span,{className:"line",children:[(0,r.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-token-string-expression)"},children:'"eslintIgnore"'}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:": ["})]}),"\n",(0,r.jsxs)(e.span,{className:"line",children:[(0,r.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"    "}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-token-string-expression)"},children:'"node_modules"'}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-token-punctuation)"},children:","})]}),"\n",(0,r.jsxs)(e.span,{className:"line",children:[(0,r.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"    "}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-token-string-expression)"},children:'"dist"'}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-token-punctuation)"},children:","})]}),"\n",(0,r.jsxs)(e.span,{className:"line",children:[(0,r.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"    "}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-token-string-expression)"},children:'"output"'})]}),"\n",(0,r.jsx)(e.span,{className:"line",children:(0,r.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"  ],"})}),"\n",(0,r.jsx)(e.span,{className:"line"})]})})]})]}),"\n",(0,r.jsxs)(e.h2,{id:"q-如何升级-eslint-插件的版本",children:[(0,r.jsx)(e.a,{className:"header-anchor","aria-hidden":"true",href:"#q-如何升级-eslint-插件的版本",children:"#"}),"Q: 如何升级 ESLint 插件的版本"]}),"\n",(0,r.jsxs)(e.p,{children:["只要不是 Major 版本的变化（不符合 ",(0,r.jsx)(e.a,{href:"https://semver.org/",target:"_blank",rel:"nofollow",children:"Semver"})," 规则的 ",(0,r.jsx)(e.code,{children:"^"})," 符号），就可以直接在业务项目的 ",(0,r.jsx)(e.code,{children:"package.json"})," 里指定这个依赖，删除 Lock 文件（或尝试手动删除 Lock 文件中这个包名的内容），执行 ",(0,r.jsx)(e.code,{children:"pnpm install"})," 重新安装依赖并且生成新的 Lock 文件。"]}),"\n",(0,r.jsxs)(e.p,{children:["做完这些操作之后，在业务项目的 ",(0,r.jsx)(e.code,{children:"./node_modules"})," 目录里，这个插件应该只存在一份，并且升级到了你指定的版本。"]}),"\n",(0,r.jsxs)(e.div,{className:"modern-directive tip",children:[(0,r.jsx)(e.p,{className:"modern-directive-title",children:"提示"}),(0,r.jsx)(e.div,{className:"modern-directive-content",children:(0,r.jsxs)(e.ul,{children:["\n",(0,r.jsxs)(e.li,{children:["Major 版本就是主版本号。更多信息，请阅读【",(0,r.jsx)(e.a,{href:"https://semver.org/#summary",target:"_blank",rel:"nofollow",children:"Semantic Versioning"}),"】。"]}),"\n",(0,r.jsxs)(e.li,{children:["所有被 Modern.js 封装的上游项目（比如 ESLint、",(0,r.jsx)(e.a,{href:"https://eslint.org/docs/user-guide/configuring/plugins#plugins",target:"_blank",rel:"nofollow",children:"ESLint 插件"}),"、",(0,r.jsx)(e.a,{href:"https://reactrouter.com/",target:"_blank",rel:"nofollow",children:"React Router"})," 等），也都可以这样升级。"]}),"\n",(0,r.jsx)(e.li,{children:"Modern.js 也会在每次发版中尽量及时的升级这些上游依赖。"}),"\n",(0,r.jsx)(e.li,{children:"Major 版本的升级需要由 Modern.js 来发版。"}),"\n"]})})]}),"\n",(0,r.jsxs)(e.h2,{id:"q-webstorm-有时候会报-eslint-错误",children:[(0,r.jsx)(e.a,{className:"header-anchor","aria-hidden":"true",href:"#q-webstorm-有时候会报-eslint-错误",children:"#"}),"Q: WebStorm 有时候会报 ESLint 错误"]}),"\n",(0,r.jsxs)(e.p,{children:["由于 WebStorm 认为 ESLint 执行目录是根据 ",(0,r.jsx)(e.code,{children:".eslintrc"})," 文件来决定的。因此 ",(0,r.jsx)(e.code,{children:"src/.eslintrc"})," 文件位置的放置会导致 ",(0,r.jsx)(e.code,{children:"tsconfig.json"})," 文件指定的位置（项目根目录下）在 ",(0,r.jsx)(e.code,{children:"src/"})," 目录下找不到。"]}),"\n",(0,r.jsx)(e.p,{children:"此时需要手动配置一下："}),"\n",(0,r.jsxs)(e.div,{className:"language-json",children:[(0,r.jsx)(e.div,{className:""}),(0,r.jsxs)(e.div,{className:"modern-code-content",children:[(0,r.jsx)(e.button,{className:"copy"}),(0,r.jsx)(e.pre,{className:"shiki",style:{backgroundColor:"var(--shiki-color-background)"},children:(0,r.jsxs)(e.code,{children:[(0,r.jsx)(e.span,{className:"line",children:(0,r.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"--parser-options=project:../tsconfig.json"})}),"\n",(0,r.jsx)(e.span,{className:"line"})]})})]})]}),"\n",(0,r.jsx)(e.p,{children:(0,r.jsx)(e.img,{src:"https://lf3-static.bytednsdoc.com/obj/eden-cn/aphqeh7uhohpquloj/modern-js/docs/webstorm-lint-error.png",alt:"webstorm-lint-error"})})]})}var a=function(){let s=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},{wrapper:e}=s.components||{};return e?(0,r.jsx)(e,Object.assign({},s,{children:(0,r.jsx)(o,s)})):o(s)}}}]);