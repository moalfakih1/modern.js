(self.webpackChunk_modern_js_main_doc=self.webpackChunk_modern_js_main_doc||[]).push([["docs_en_guides_topic-detail_generator_codesmith_introduce_mdx"],{7296:function(e,n,r){"use strict";Object.defineProperty(n,"__esModule",{value:!0});!function(e,n){for(var r in n)Object.defineProperty(e,r,{enumerable:!0,get:n[r]})}(n,{frontmatter:function(){return o},title:function(){return i},toc:function(){return s},default:function(){return d}});var t=r("9880"),a=r("23169"),o={sidebar_position:1},i="What is a microgenerator",s=[{text:"Core concept",depth:2,id:"core-concept"},{text:"GeneratorCore",depth:3,id:"generatorcore"},{text:"Materials",depth:3,id:"materials"}];function c(e){var n=Object.assign({h1:"h1",a:"a",p:"p",code:"code",h2:"h2",h3:"h3",div:"div",pre:"pre"},(0,a.useMDXComponents)(),e.components);return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)(n.h1,{id:"what-is-a-microgenerator",children:["What is a microgenerator",(0,t.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#what-is-a-microgenerator",children:"#"})]}),"\n",(0,t.jsxs)(n.p,{children:["Modern.js provides the ",(0,t.jsx)(n.code,{children:"@modern-js/create"})," tool and the ",(0,t.jsx)(n.code,{children:"new"})," command for initialization to create projects and the ability to enable some plugin functions, respectively, these tools are based on microgenerators, also known as codesmith implementations."]}),"\n",(0,t.jsx)(n.p,{children:"Codesmith is committed to providing a set of micro-generator operating mechanism, and maintain the context information in the execution process of the micro-generator, so as to implement various operations based on files, commands, etc., to complete sophisticated operations."}),"\n",(0,t.jsx)(n.p,{children:"Codesmith also encapsulates the commonly used methods, and can directly use the API functions it provides, which can more easily implement its own micro-generator."}),"\n",(0,t.jsxs)(n.h2,{id:"core-concept",children:["Core concept",(0,t.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#core-concept",children:"#"})]}),"\n",(0,t.jsxs)(n.h3,{id:"generatorcore",children:["GeneratorCore",(0,t.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#generatorcore",children:"#"})]}),"\n",(0,t.jsx)(n.p,{children:"GeneratorCore is the core of codesmith running generator, maintaining the context and running methods during the execution of the generator."}),"\n",(0,t.jsx)(n.div,{className:"language-",children:(0,t.jsx)(n.div,{className:"modern-code-content",children:(0,t.jsx)(n.pre,{className:"code",children:(0,t.jsx)(n.code,{className:"language-ts",children:"class GeneratorCore {\n  logger: ILogger;\n  materialsManager: MaterialsManager;\n  outputPath: string;\n  output:\n    fs: (file: string | number, data: any, options?: fs.WriteFileOptions | string) => Promise<void>;\n  };\n  _context: GeneratorContext;\n  addMaterial(key: string, material: FsMaterial): void;\n  runGenerator(generator: string, config?: Record<string, unknown>): Promise<void>;\n  runSubGenerator(subGenerator: string, relativePwdPath?: string, config?: Record<string, any>): Promise<void>;\n}\n"})})})}),"\n",(0,t.jsxs)(n.h3,{id:"materials",children:["Materials",(0,t.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#materials",children:"#"})]}),"\n",(0,t.jsx)(n.p,{children:"The micro-generator resource information currently only includes file resources (fsMaterials). Through this field, the template resources in the generator execution process can be obtained and operated through the API."}),"\n",(0,t.jsx)(n.div,{className:"language-",children:(0,t.jsx)(n.div,{className:"modern-code-content",children:(0,t.jsx)(n.pre,{className:"code",children:(0,t.jsx)(n.code,{className:"language-ts",children:"class MaterialsManager {\n  materialMap: {\n    // 资源映射关系\n    [materialUri: string]: FsMaterial;\n  };\n  loadLocalGenerator(generator: string): Promise<FsMaterial>;\n  loadRemoteGenerator(generator: string): Promise<FsMaterial>;\n}\n"})})})})]})}var d=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=Object.assign({},(0,a.useMDXComponents)(),e.components).wrapper;return n?(0,t.jsx)(n,Object.assign({},e,{children:(0,t.jsx)(c,e)})):c(e)}}}]);