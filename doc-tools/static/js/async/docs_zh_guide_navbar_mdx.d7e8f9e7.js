(self.webpackChunk_modern_js_doc_tools_doc=self.webpackChunk_modern_js_doc_tools_doc||[]).push([["docs_zh_guide_navbar_mdx"],{40540:function(e,n,i){"use strict";Object.defineProperty(n,"__esModule",{value:!0});!function(e,n){for(var i in n)Object.defineProperty(e,i,{enumerable:!0,get:n[i]})}(n,{frontmatter:function(){return c},toc:function(){return t},title:function(){return l},default:function(){return o}});var s=i("9880"),d=i("23169"),c=void 0,t=[{id:"自定义导航菜单",text:"自定义导航菜单",depth:2},{id:"navitemwithlink",text:"NavItemWithLink",depth:3},{id:"navitemwithchildren",text:"NavItemWithChildren",depth:3},{id:"示例",text:"示例",depth:3},{id:"白天夜间模式",text:"白天/夜间模式",depth:2},{id:"相关链接",text:"相关链接",depth:2}],l="导航栏模块";function r(e){var n=Object.assign({h1:"h1",a:"a",p:"p",h2:"h2",code:"code",div:"div",pre:"pre",h3:"h3",ul:"ul",li:"li",blockquote:"blockquote"},(0,d.useMDXComponents)(),e.components);return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)(n.h1,{id:"导航栏模块",children:[(0,s.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#导航栏模块",children:"#"}),"导航栏模块"]}),"\n",(0,s.jsx)(n.p,{children:"导航栏对一个网站来说非常重要，它可以让用户快速的在网站的不同页面之间进行跳转，也可以让用户快速的找到网站的一些重要信息。"}),"\n",(0,s.jsxs)(n.h2,{id:"自定义导航菜单",children:[(0,s.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#自定义导航菜单",children:"#"}),"自定义导航菜单"]}),"\n",(0,s.jsxs)(n.p,{children:["你可以在 ",(0,s.jsx)(n.code,{children:"themeConfig.nav"})," 中添加自定义的导航菜单，配置为一个数组，如下："]}),"\n",(0,s.jsxs)(n.div,{className:"language-ts",children:[(0,s.jsx)(n.div,{className:"modern-code-title",children:"modern.config.ts"}),(0,s.jsx)(n.div,{className:"modern-code-content",children:(0,s.jsx)(n.pre,{className:"code",children:(0,s.jsx)(n.code,{className:"language-ts",children:"import docTools, { defineConfig } from '@modern-js/doc-tools';\n\nexport default defineConfig({\n  doc: {\n    themeConfig: {\n      nav: [],\n    },\n  },\n  plugins: [docTools()],\n});\n"})})})]}),"\n",(0,s.jsxs)(n.p,{children:["导航栏配置为一个数组，数组中的每一项都是一个 ",(0,s.jsx)(n.code,{children:"NavItem"})," 对象，它具有以下类型："]}),"\n",(0,s.jsxs)(n.div,{className:"language-ts",children:[(0,s.jsx)(n.div,{className:""}),(0,s.jsx)(n.div,{className:"modern-code-content",children:(0,s.jsx)(n.pre,{className:"code",children:(0,s.jsx)(n.code,{className:"language-ts",children:"export type NavItem = NavItemWithLink | NavItemWithChildren;\n"})})})]}),"\n",(0,s.jsxs)(n.p,{children:["也就是说，每个导航栏元素( ",(0,s.jsx)(n.code,{children:"NavItem"})," )可以是一个链接( ",(0,s.jsx)(n.code,{children:"NavItemWithLink"})," )，也可以是一个包含子元素的导航栏组( ",(0,s.jsx)(n.code,{children:"NavItemWithChildren"})," )。"]}),"\n",(0,s.jsxs)(n.h3,{id:"navitemwithlink",children:[(0,s.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#navitemwithlink",children:"#"}),"NavItemWithLink"]}),"\n",(0,s.jsxs)(n.div,{className:"language-ts",children:[(0,s.jsx)(n.div,{className:""}),(0,s.jsx)(n.div,{className:"modern-code-content",children:(0,s.jsx)(n.pre,{className:"code",children:(0,s.jsx)(n.code,{className:"language-ts",children:"export interface NavItemWithLink {\n  text: string;\n  link: string;\n  activeMatch?: string;\n  position?: 'left' | 'right';\n}\n"})})})]}),"\n",(0,s.jsx)(n.p,{children:"其中各项属性的含义如下:"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"text"})," - 导航栏文本"]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"link"})," - 导航栏链接"]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"activeMatch"})," - 导航栏链接的激活规则"]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"position"})," - 导航栏菜单项定位"]}),"\n"]}),"\n",(0,s.jsx)(n.p,{children:"属性详情："}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.code,{children:"activeMatch"})," 用于匹配当前路由，当路由匹配 ",(0,s.jsx)(n.code,{children:"activeMatch"})," 规则时，nav 项会高亮显示。"]}),"\n",(0,s.jsxs)(n.blockquote,{children:["\n",(0,s.jsxs)(n.p,{children:["默认情况下，",(0,s.jsx)(n.code,{children:"activeMatch"})," 是 NavItem 的 ",(0,s.jsx)(n.code,{children:"link"})," 属性。"]}),"\n"]}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.code,{children:"position"})," 用于配置顶部菜单项的独立定位，可选项为："]}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"'left'"}),"：置于菜单项到顶部的左侧菜单栏；"]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"'right'"}),"：置于菜单项到顶部的右侧菜单栏。"]}),"\n"]}),"\n",(0,s.jsxs)(n.blockquote,{children:["\n",(0,s.jsxs)(n.p,{children:["如果",(0,s.jsx)(n.code,{children:"position"}),"未配置的情况下会默认放到右侧菜单栏，效果等同于配置",(0,s.jsx)(n.code,{children:"'right'"}),"。"]}),"\n"]}),"\n",(0,s.jsxs)(n.h3,{id:"navitemwithchildren",children:[(0,s.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#navitemwithchildren",children:"#"}),"NavItemWithChildren"]}),"\n",(0,s.jsxs)(n.div,{className:"language-ts",children:[(0,s.jsx)(n.div,{className:""}),(0,s.jsx)(n.div,{className:"modern-code-content",children:(0,s.jsx)(n.pre,{className:"code",children:(0,s.jsx)(n.code,{className:"language-ts",children:"export interface NavItemWithChildren {\n  text: string;\n  items: (NavItemWithLink | NavItemWithChildren)[];\n  position?: 'left' | 'right';\n}\n"})})})]}),"\n",(0,s.jsx)(n.p,{children:"其中各项属性的含义如下:"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"text"})," - 导航栏文本"]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"items"})," - 子导航栏元素"]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"position"}),"- 带有子元素的导航栏菜单项定位"]}),"\n"]}),"\n",(0,s.jsxs)(n.h3,{id:"示例",children:[(0,s.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#示例",children:"#"}),"示例"]}),"\n",(0,s.jsxs)(n.div,{className:"language-ts",children:[(0,s.jsx)(n.div,{className:"modern-code-title",children:"modern.config.ts"}),(0,s.jsx)(n.div,{className:"modern-code-content",children:(0,s.jsx)(n.pre,{className:"code",children:(0,s.jsx)(n.code,{className:"language-ts",children:"import docTools, { defineConfig } from '@modern-js/doc-tools';\n\nexport default defineConfig({\n  doc: {\n    themeConfig: {\n      nav: [\n        {\n          text: 'Home',\n          link: '/',\n          position: 'left',\n        },\n        {\n          text: '更多链接',\n          items: [\n            {\n              text: 'Github',\n              link: 'http://github.com/',\n            },\n            {\n              text: 'Twitter',\n              link: 'http://twitter.com/',\n            },\n            // 也可以是一个导航栏组\n            {\n              text: 'Group',\n              items: [\n                {\n                  text: 'Personal',\n                  link: 'http://xxx.com/',\n                },\n                {\n                  text: 'Company',\n                  link: 'http://xxx.com/',\n                },\n              ],\n            },\n          ],\n          position: 'right',\n        },\n      ],\n    },\n  },\n  plugins: [docTools()],\n});\n"})})})]}),"\n",(0,s.jsxs)(n.h2,{id:"白天夜间模式",children:[(0,s.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#白天夜间模式",children:"#"}),"白天/夜间模式"]}),"\n",(0,s.jsxs)(n.p,{children:["默认情况下导航栏会带上 ",(0,s.jsx)(n.code,{children:"白天/夜间"})," 模式的切换按钮，你可以通过如下的配置禁用："]}),"\n",(0,s.jsxs)(n.div,{className:"language-ts",children:[(0,s.jsx)(n.div,{className:"modern-code-title",children:"modern.config.ts"}),(0,s.jsx)(n.div,{className:"modern-code-content",children:(0,s.jsx)(n.pre,{className:"code",children:(0,s.jsx)(n.code,{className:"language-ts",children:"import docTools, { defineConfig } from '@modern-js/doc-tools';\n\nexport default defineConfig({\n  doc: {\n    themeConfig: {\n      darkMode: false,\n    },\n  },\n  plugins: [docTools()],\n});\n"})})})]}),"\n",(0,s.jsxs)(n.h2,{id:"相关链接",children:[(0,s.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#相关链接",children:"#"}),"相关链接"]}),"\n",(0,s.jsx)(n.p,{children:"网站的社交链接。比如："}),"\n",(0,s.jsxs)(n.div,{className:"language-ts",children:[(0,s.jsx)(n.div,{className:"modern-code-title",children:"modern.config.ts"}),(0,s.jsx)(n.div,{className:"modern-code-content",children:(0,s.jsx)(n.pre,{className:"code",children:(0,s.jsx)(n.code,{className:"language-ts",children:"import docTools, { defineConfig } from '@modern-js/doc-tools';\n\nexport default defineConfig({\n  doc: {\n    themeConfig: {\n      socialLinks: [\n        {\n          icon: 'github',\n          link: 'github.com/web-infra-dev/modern.js',\n        },\n      ],\n    },\n  },\n  plugins: [docTools()],\n});\n"})})})]}),"\n",(0,s.jsxs)(n.p,{children:["更多配置请参考 ",(0,s.jsx)(n.a,{href:"/doc-tools/zh/api/config-theme.html#sociallinks",children:"链接"}),"。"]})]})}var o=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=Object.assign({},(0,d.useMDXComponents)(),e.components).wrapper;return n?(0,s.jsx)(n,Object.assign({},e,{children:(0,s.jsx)(r,e)})):r(e)}}}]);