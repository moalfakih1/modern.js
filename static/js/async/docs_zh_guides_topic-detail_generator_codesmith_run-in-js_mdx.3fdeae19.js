(self.webpackChunkwebpack=self.webpackChunkwebpack||[]).push([["docs_zh_guides_topic-detail_generator_codesmith_run-in-js_mdx"],{93497:function(e,n,s){"use strict";Object.defineProperty(n,"__esModule",{value:!0});!function(e,n){for(var s in n)Object.defineProperty(e,s,{enumerable:!0,get:n[s]})}(n,{frontmatter:function(){return c},title:function(){return t},toc:function(){return d},default:function(){return o}});var r=s("12151"),a=s("21447");let c={sidebar_position:4},t="使用 JS 代码执行微生成器",d=[{text:"安装 codesmith 依赖",depth:2,id:"安装-codesmith-依赖"},{text:"创建 codesmith 实例",depth:2,id:"创建-codesmith-实例"},{text:"调用 forge 方法执行生成器",depth:2,id:"调用-forge-方法执行生成器"}];function i(e){let n=Object.assign({h1:"h1",a:"a",p:"p",h2:"h2",div:"div",button:"button",pre:"pre",code:"code"},(0,a.useMDXComponents)(),e.components);return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(n.h1,{id:"使用-js-代码执行微生成器",children:["使用 JS 代码执行微生成器",(0,r.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#使用-js-代码执行微生成器",children:"#"})]}),"\n",(0,r.jsx)(n.p,{children:"除了使用 cli 的方式执行微生成器，我们免不了需要在代码中执行微生成器，下面就介绍在 js 代码中如何执行微生成器。"}),"\n",(0,r.jsxs)(n.h2,{id:"安装-codesmith-依赖",children:["安装 codesmith 依赖",(0,r.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#安装-codesmith-依赖",children:"#"})]}),"\n",(0,r.jsx)(n.div,{className:"language-",children:(0,r.jsxs)(n.div,{className:"modern-code-content",children:[(0,r.jsx)(n.button,{className:"copy"}),(0,r.jsx)(n.pre,{className:"code",children:(0,r.jsx)(n.code,{className:"language-bash",children:"pnpm add @modern-js/codesmith\n"})})]})}),"\n",(0,r.jsxs)(n.h2,{id:"创建-codesmith-实例",children:["创建 codesmith 实例",(0,r.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#创建-codesmith-实例",children:"#"})]}),"\n",(0,r.jsx)(n.div,{className:"language-",children:(0,r.jsxs)(n.div,{className:"modern-code-content",children:[(0,r.jsx)(n.button,{className:"copy"}),(0,r.jsx)(n.pre,{className:"code",children:(0,r.jsx)(n.code,{className:"language-ts",children:"import { CodeSmith, Logger } from '@modern-js/codesmith';\n\nconst smith = new CodeSmith({\n  debug: false, // 是否开启 debug 模式，为 true 时会展示生成器中的 debug 信息\n});\n"})})]})}),"\n",(0,r.jsxs)(n.h2,{id:"调用-forge-方法执行生成器",children:["调用 forge 方法执行生成器",(0,r.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#调用-forge-方法执行生成器",children:"#"})]}),"\n",(0,r.jsx)(n.div,{className:"language-",children:(0,r.jsxs)(n.div,{className:"modern-code-content",children:[(0,r.jsx)(n.button,{className:"copy"}),(0,r.jsx)(n.pre,{className:"code",children:(0,r.jsx)(n.code,{className:"language-ts",children:"type RunnerTask = Array<{\n  name: string;\n  config: Record<string, any>;\n}>;\n\nconst task: RunnerTask = [\n  {\n    name: 'generator', // 生成器 npm 包名称\n    config: {}, // 生成器执行的默认配置\n  },\n];\n\nawait smith.forge({\n  tasks: task.map(runner => ({\n    generator: runner.name,\n    config: runner.config,\n  })),\n  pwd: '.', // 生成器执行路径\n});\n"})})]})})]})}var o=function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},{wrapper:n}=Object.assign({},(0,a.useMDXComponents)(),e.components);return n?(0,r.jsx)(n,Object.assign({},e,{children:(0,r.jsx)(i,e)})):i(e)}}}]);