(self.webpackChunkwebpack=self.webpackChunkwebpack||[]).push([["docs_zh_guides_advanced-features_testing_mdx"],{86063:function(e,s,n){"use strict";Object.defineProperty(s,"__esModule",{value:!0});!function(e,s){for(var n in s)Object.defineProperty(e,n,{enumerable:!0,get:s[n]})}(s,{frontmatter:function(){return t},toc:function(){return i},title:function(){return l},default:function(){return c}});var r=n("12151");let t={sidebar_position:10},i=[{id:"测试文件",text:"测试文件",depth:2},{id:"使用姿势",text:"使用姿势",depth:2},{id:"transform",text:"transform",depth:2}],l="测试";function o(e){let s=Object.assign({h1:"h1",a:"a",p:"p",code:"code",div:"div",button:"button",pre:"pre",span:"span",h2:"h2"},e.components);return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(s.h1,{id:"测试",children:[(0,r.jsx)(s.a,{className:"header-anchor","aria-hidden":"true",href:"#测试",children:"#"}),"测试"]}),"\n",(0,r.jsxs)(s.p,{children:["Modern.js 默认继承了 ",(0,r.jsx)(s.a,{href:"https://jestjs.io/",target:"_blank",rel:"nofollow",children:"Jest"})," 的测试能力。"]}),"\n",(0,r.jsxs)(s.p,{children:["我们首先需要执行 ",(0,r.jsx)(s.code,{children:"pnpm run new"})," 启用「单元测试 / 集成测试」功能："]}),"\n",(0,r.jsxs)(s.div,{className:"language-text",children:[(0,r.jsx)(s.div,{className:""}),(0,r.jsxs)(s.div,{className:"modern-code-content",children:[(0,r.jsx)(s.button,{className:"copy"}),(0,r.jsx)(s.pre,{children:(0,r.jsx)(s.code,{children:"? 请选择你想要的操作： 启用可选功能\n? 启用可选功能： 启用「单元测试 / 集成测试」功能\n"})})]})]}),"\n",(0,r.jsxs)(s.p,{children:["执行上述命令后，",(0,r.jsx)(s.code,{children:"package.json"})," 中将会自动生成 ",(0,r.jsx)(s.code,{children:'"test": "modern test"'})," 命令。"]}),"\n",(0,r.jsxs)(s.p,{children:["在 ",(0,r.jsx)(s.code,{children:"modern.config.ts"})," 中注册 Test 插件："]}),"\n",(0,r.jsxs)(s.div,{className:"language-ts",children:[(0,r.jsx)(s.div,{className:"modern-code-title",children:"modern.config.ts"}),(0,r.jsxs)(s.div,{className:"modern-code-content",children:[(0,r.jsx)(s.button,{className:"copy"}),(0,r.jsx)(s.pre,{className:"shiki",style:{backgroundColor:"var(--shiki-color-background)"},children:(0,r.jsxs)(s.code,{children:[(0,r.jsxs)(s.span,{className:"line",children:[(0,r.jsx)(s.span,{style:{color:"var(--shiki-token-keyword)"},children:"import"}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" testPlugin "}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-token-keyword)"},children:"from"}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-token-string-expression)"},children:"'@modern-js/plugin-testing'"}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:";"})]}),"\n",(0,r.jsx)(s.span,{className:"line"}),"\n",(0,r.jsxs)(s.span,{className:"line",children:[(0,r.jsx)(s.span,{style:{color:"var(--shiki-token-keyword)"},children:"export"}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-token-keyword)"},children:"default"}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-token-function)"},children:"defineConfig"}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"({"})]}),"\n",(0,r.jsxs)(s.span,{className:"line",children:[(0,r.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"  "}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-token-keyword)"},children:"..."}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-token-punctuation)"},children:","})]}),"\n",(0,r.jsxs)(s.span,{className:"line",children:[(0,r.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"  plugins"}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-token-keyword)"},children:":"}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" ["}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-token-keyword)"},children:"..."}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-token-punctuation)"},children:","}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-token-function)"},children:"testPlugin"}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"()]"}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-token-punctuation)"},children:","})]}),"\n",(0,r.jsx)(s.span,{className:"line",children:(0,r.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"});"})}),"\n",(0,r.jsx)(s.span,{className:"line"})]})})]})]}),"\n",(0,r.jsxs)(s.h2,{id:"测试文件",children:[(0,r.jsx)(s.a,{className:"header-anchor","aria-hidden":"true",href:"#测试文件",children:"#"}),"测试文件"]}),"\n",(0,r.jsxs)(s.p,{children:["Modern.js 默认识别的测试文件路径为：",(0,r.jsx)(s.code,{children:"<rootDir>/src/**/*.test.[jt]s?(x)"})," 和 ",(0,r.jsx)(s.code,{children:"<rootDir>/tests/**/*.test.[jt]s?(x)"}),"。"]}),"\n",(0,r.jsxs)(s.p,{children:["如果你需要自定义 test 目录，可通过 ",(0,r.jsx)(s.a,{href:"/configure/app/tools/jest.html",children:"tools.jest"})," 进行配置。"]}),"\n",(0,r.jsxs)(s.h2,{id:"使用姿势",children:[(0,r.jsx)(s.a,{className:"header-anchor","aria-hidden":"true",href:"#使用姿势",children:"#"}),"使用姿势"]}),"\n",(0,r.jsxs)(s.p,{children:["Modern.js test 支持使用 ",(0,r.jsx)(s.a,{href:"https://testing-library.com/docs/",target:"_blank",rel:"nofollow",children:"testing-library"})," 相关包 API，可直接通过 ",(0,r.jsx)(s.code,{children:"@modern-js/runtime/testing"})," 进行导入:"]}),"\n",(0,r.jsxs)(s.div,{className:"language-text",children:[(0,r.jsx)(s.div,{className:""}),(0,r.jsxs)(s.div,{className:"modern-code-content",children:[(0,r.jsx)(s.button,{className:"copy"}),(0,r.jsx)(s.pre,{children:(0,r.jsx)(s.code,{children:"import { render, screen } from '@modern-js/runtime/testing';\n"})})]})]}),"\n",(0,r.jsxs)(s.p,{children:["其他 Modern.js 支持的 testing API 可参考",(0,r.jsx)(s.a,{href:"/apis/app/runtime/testing/cleanup.html",children:"这里"}),"。"]}),"\n",(0,r.jsxs)(s.h2,{id:"transform",children:[(0,r.jsx)(s.a,{className:"header-anchor","aria-hidden":"true",href:"#transform",children:"#"}),"transform"]}),"\n",(0,r.jsxs)(s.p,{children:["Modern.js 测试默认使用 ",(0,r.jsx)(s.a,{href:"https://www.npmjs.com/package/babel-jest",target:"_blank",rel:"nofollow",children:"babel-jest"})," 进行源码编译，如果你需要使用 ",(0,r.jsx)(s.a,{href:"https://github.com/kulshekhar/ts-jest",target:"_blank",rel:"nofollow",children:"ts-jest"}),"，可以通过 ",(0,r.jsx)(s.a,{href:"/configure/app/testing/transformer.html",children:"testing.transform"})," 进行配置。"]})]})}var c=function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},{wrapper:s}=e.components||{};return s?(0,r.jsx)(s,Object.assign({},e,{children:(0,r.jsx)(o,e)})):o(e)}}}]);