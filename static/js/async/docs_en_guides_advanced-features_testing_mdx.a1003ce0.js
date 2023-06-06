(self.webpackChunk_modern_js_main_doc=self.webpackChunk_modern_js_main_doc||[]).push([["docs_en_guides_advanced-features_testing_mdx"],{13394:function(e,n,t){"use strict";Object.defineProperty(n,"__esModule",{value:!0});!function(e,n){for(var t in n)Object.defineProperty(e,t,{enumerable:!0,get:n[t]})}(n,{frontmatter:function(){return i},title:function(){return a},toc:function(){return o},default:function(){return c}});var r=t("9880"),s=t("23169"),i={sidebar_position:10,title:"Testing"},a="Testing",o=[{text:"Test file",depth:2,id:"test-file"},{text:"Usage",depth:2,id:"usage"},{text:"transform",depth:2,id:"transform"}];function d(e){var n=Object.assign({h1:"h1",a:"a",p:"p",code:"code",pre:"pre",h2:"h2"},(0,s.useMDXComponents)(),e.components);return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(n.h1,{id:"testing",children:["Testing",(0,r.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#testing",children:"#"})]}),"\n",(0,r.jsxs)(n.p,{children:["Modern.js integrates the testing capabilities of ",(0,r.jsx)(n.a,{href:"https://jestjs.io/",target:"_blank",rel:"noopener noreferrer",children:"Jest"})," by default."]}),"\n",(0,r.jsxs)(n.p,{children:["First need to execute ",(0,r.jsx)(n.code,{children:"pnpm run new"})," enable [unit test/integration test] features:"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{children:"? Please select the operation you want: Enable features\n? Please select the feature name: Enable Unit Test / Integration Test\n"})}),"\n",(0,r.jsxs)(n.p,{children:["After executing the above command, the ",(0,r.jsx)(n.code,{children:'"test": "modern test"'})," command will be automatically generated in package.json."]}),"\n",(0,r.jsxs)(n.p,{children:["register plugin in ",(0,r.jsx)(n.code,{children:"modern.config.ts"}),":"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-ts",meta:'title="modern.config.ts"',children:"import testPlugin from '@modern-js/plugin-testing';\n\nexport default defineConfig({\n  plugins: [..., testPlugin()],\n});\n"})}),"\n",(0,r.jsxs)(n.h2,{id:"test-file",children:["Test file",(0,r.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#test-file",children:"#"})]}),"\n",(0,r.jsxs)(n.p,{children:["Modern.js default recognized test file paths are: ",(0,r.jsx)(n.code,{children:"<rootDir>/src/**/*.test.[jt]s?(x)"})," and ",(0,r.jsx)(n.code,{children:"<rootDir>/tests/**/*.test.[jt]s?(x)"}),"."]}),"\n",(0,r.jsxs)(n.p,{children:["If you need to customize the test directory, you can configure it with ",(0,r.jsx)(n.a,{href:"/configure/app/tools/jest",children:"tools.jest"}),"."]}),"\n",(0,r.jsxs)(n.h2,{id:"usage",children:["Usage",(0,r.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#usage",children:"#"})]}),"\n",(0,r.jsxs)(n.p,{children:["Modern.js test support ",(0,r.jsx)(n.a,{href:"https://testing-library.com/docs/",target:"_blank",rel:"noopener noreferrer",children:"testing-library"}),". API can be imported from ",(0,r.jsx)(n.code,{children:"@modern-js/runtime/testing"}),"."]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{children:"import { render, screen } from '@modern-js/runtime/testing';\n"})}),"\n",(0,r.jsxs)(n.p,{children:["Other Modern.js supported testing APIs can be found ",(0,r.jsx)(n.a,{href:"/apis/app/runtime/testing/cleanup",children:"here"}),"."]}),"\n",(0,r.jsxs)(n.h2,{id:"transform",children:["transform",(0,r.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#transform",children:"#"})]}),"\n",(0,r.jsxs)(n.p,{children:["Modern.js tests use ",(0,r.jsx)(n.a,{href:"https://www.npmjs.com/package/babel-jest",target:"_blank",rel:"noopener noreferrer",children:"babel-jest"})," for source code compilation by default. If you need to use ",(0,r.jsx)(n.a,{href:"https://github.com/kulshekhar/ts-jest",target:"_blank",rel:"noopener noreferrer",children:"ts-jest"}),", you can configure it through ",(0,r.jsx)(n.a,{href:"/configure/app/testing/transformer",children:"testing.transform"}),"."]})]})}var c=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=Object.assign({},(0,s.useMDXComponents)(),e.components).wrapper;return n?(0,r.jsx)(n,Object.assign({},e,{children:(0,r.jsx)(d,e)})):d(e)}}}]);