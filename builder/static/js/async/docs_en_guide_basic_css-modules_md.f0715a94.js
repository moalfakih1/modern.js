(self.webpackChunk_modern_js_builder_doc=self.webpackChunk_modern_js_builder_doc||[]).push([["docs_en_guide_basic_css-modules_md"],{71616:function(e,s,n){"use strict";Object.defineProperty(s,"__esModule",{value:!0});!function(e,s){for(var n in s)Object.defineProperty(e,n,{enumerable:!0,get:s[n]})}(s,{frontmatter:function(){return d},title:function(){return t},toc:function(){return c},default:function(){return r}});var a=n("12151"),l=n("23169"),d={},t="Use CSS Modules",c=[{text:"Example",depth:2,id:"example"},{text:"Enable CSS Modules for all CSS files",depth:2,id:"enable-css-modules-for-all-css-files"},{text:"Custom Class Names",depth:2,id:"custom-class-names"},{text:"Add Type Declaration",depth:2,id:"add-type-declaration"},{text:"Generate exact type definitions",depth:2,id:"generate-exact-type-definitions"},{text:"Example",depth:3,id:"example-1"},{text:"Related configuration",depth:3,id:"related-configuration"}];function o(e){var s=Object.assign({h1:"h1",a:"a",p:"p",code:"code",ul:"ul",li:"li",h2:"h2",div:"div",button:"button",pre:"pre",h3:"h3"},(0,l.useMDXComponents)(),e.components);return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsxs)(s.h1,{id:"use-css-modules",children:["Use CSS Modules",(0,a.jsx)(s.a,{className:"header-anchor","aria-hidden":"true",href:"#use-css-modules",children:"#"})]}),"\n",(0,a.jsxs)(s.p,{children:[(0,a.jsx)(s.a,{href:"https://github.com/css-modules/css-modules",target:"_blank",rel:"noopener noreferrer",children:"CSS Modules"})," allows us to write CSS code in a modular way, and these styles can be imported and used in JavaScript files. Using CSS Modules can automatically generate unique class names, isolate styles between different modules, and avoid class name conflicts."]}),"\n",(0,a.jsxs)(s.p,{children:["Builder supports CSS Modules by default, you don't need to add additional configuration. Our convention is to use the ",(0,a.jsx)(s.code,{children:"[name].module.css"})," filename to enable CSS Modules."]}),"\n",(0,a.jsx)(s.p,{children:"The following style files are considered CSS Modules:"}),"\n",(0,a.jsxs)(s.ul,{children:["\n",(0,a.jsx)(s.li,{children:(0,a.jsx)(s.code,{children:"*.module.scss"})}),"\n",(0,a.jsx)(s.li,{children:(0,a.jsx)(s.code,{children:"*.module.less"})}),"\n",(0,a.jsx)(s.li,{children:(0,a.jsx)(s.code,{children:"*.module.css"})}),"\n"]}),"\n",(0,a.jsxs)(s.h2,{id:"example",children:["Example",(0,a.jsx)(s.a,{className:"header-anchor","aria-hidden":"true",href:"#example",children:"#"})]}),"\n",(0,a.jsxs)(s.ul,{children:["\n",(0,a.jsx)(s.li,{children:"Write style:"}),"\n"]}),"\n",(0,a.jsx)(s.div,{className:"language-",children:(0,a.jsxs)(s.div,{className:"modern-code-content",children:[(0,a.jsx)(s.button,{className:"copy"}),(0,a.jsx)(s.pre,{className:"code",children:(0,a.jsx)(s.code,{className:"language-css",children:"/* button.module.css */\n.error {\n  background: red;\n}\n"})})]})}),"\n",(0,a.jsxs)(s.ul,{children:["\n",(0,a.jsx)(s.li,{children:"Using styles:"}),"\n"]}),"\n",(0,a.jsx)(s.div,{className:"language-",children:(0,a.jsxs)(s.div,{className:"modern-code-content",children:[(0,a.jsx)(s.button,{className:"copy"}),(0,a.jsx)(s.pre,{className:"code",children:(0,a.jsx)(s.code,{className:"language-tsx",children:"// Button.tsx\nimport React, { Component } from 'react';\n// import style file\nimport styles from './button.module.css';\n\nexport default () => {\n  return <button className={styles.error}>Error Button</button>;\n};\n"})})]})}),"\n",(0,a.jsxs)(s.h2,{id:"enable-css-modules-for-all-css-files",children:["Enable CSS Modules for all CSS files",(0,a.jsx)(s.a,{className:"header-anchor","aria-hidden":"true",href:"#enable-css-modules-for-all-css-files",children:"#"})]}),"\n",(0,a.jsxs)(s.p,{children:["By default, only files ending in ",(0,a.jsx)(s.code,{children:"*.module.css"})," are treated CSS Modules."]}),"\n",(0,a.jsxs)(s.p,{children:["If you want to treat all CSS files in the source directory as CSS Modules, you can enable the ",(0,a.jsx)(s.a,{href:"/en/api/config-output",children:"output.disableCssModuleExtension"})," config, for example:"]}),"\n",(0,a.jsx)(s.div,{className:"language-",children:(0,a.jsxs)(s.div,{className:"modern-code-content",children:[(0,a.jsx)(s.button,{className:"copy"}),(0,a.jsx)(s.pre,{className:"code",children:(0,a.jsx)(s.code,{className:"language-ts",children:"export default {\n  output: {\n    disableCssModuleExtension: true,\n  },\n};\n"})})]})}),"\n",(0,a.jsx)(s.p,{children:"When set, the following two files are treated as CSS Modules:"}),"\n",(0,a.jsx)(s.div,{className:"language-",children:(0,a.jsxs)(s.div,{className:"modern-code-content",children:[(0,a.jsx)(s.button,{className:"copy"}),(0,a.jsx)(s.pre,{className:"code",children:(0,a.jsx)(s.code,{className:"language-ts",children:"import styles1 from './foo.module.css';\nimport styles2 from './bar.css';\n"})})]})}),"\n",(0,a.jsxs)(s.div,{className:"modern-directive tip",children:[(0,a.jsx)(s.div,{className:"modern-directive-title",children:"TIP"}),(0,a.jsx)(s.div,{className:"modern-directive-content",children:(0,a.jsx)(s.p,{children:"We do not recommend enabling this config, because after enabling disableCssModuleExtension, CSS Modules files and ordinary CSS files cannot be clearly distinguished, which is not conducive to long-term maintenance."})})]}),"\n",(0,a.jsxs)(s.h2,{id:"custom-class-names",children:["Custom Class Names",(0,a.jsx)(s.a,{className:"header-anchor","aria-hidden":"true",href:"#custom-class-names",children:"#"})]}),"\n",(0,a.jsxs)(s.p,{children:["Customizing the class names generated by CSS Modules is also a commonly used function, you can use ",(0,a.jsx)(s.a,{href:"/en/api/config-output",children:"output.cssModuleLocalIdentName"})," to configure it."]}),"\n",(0,a.jsx)(s.div,{className:"language-",children:(0,a.jsxs)(s.div,{className:"modern-code-content",children:[(0,a.jsx)(s.button,{className:"copy"}),(0,a.jsx)(s.pre,{className:"code",children:(0,a.jsx)(s.code,{className:"language-ts",children:"export default {\n  output: {\n    cssModuleLocalIdentName: '[hash:base64:4]',\n  },\n};\n"})})]})}),"\n",(0,a.jsxs)(s.p,{children:["If you need to customize other configs of CSS Modules, you can set them via ",(0,a.jsx)(s.a,{href:"/api/config-tools",children:"tools.cssLoader"}),"."]}),"\n",(0,a.jsxs)(s.h2,{id:"add-type-declaration",children:["Add Type Declaration",(0,a.jsx)(s.a,{className:"header-anchor","aria-hidden":"true",href:"#add-type-declaration",children:"#"})]}),"\n",(0,a.jsx)(s.p,{children:"When you import CSS Modules in TypeScript code, TypeScript may prompt that the module is missing a type definition:"}),"\n",(0,a.jsx)(s.div,{className:"language-",children:(0,a.jsxs)(s.div,{className:"modern-code-content",children:[(0,a.jsx)(s.button,{className:"copy"}),(0,a.jsx)(s.pre,{className:"code",children:(0,a.jsx)(s.code,{children:"TS2307: Cannot find module './index.module.css' or its corresponding type declarations.\n"})})]})}),"\n",(0,a.jsxs)(s.p,{children:["To fix this, you need to add a type declaration file for the CSS Modules, please create a ",(0,a.jsx)(s.code,{children:"src/global.d.ts"})," file, and add the corresponding type declaration:"]}),"\n",(0,a.jsxs)(s.div,{className:"language-",children:[(0,a.jsx)(s.div,{className:"modern-code-title",children:"src/global.d.ts"}),(0,a.jsxs)(s.div,{className:"modern-code-content",children:[(0,a.jsx)(s.button,{className:"copy"}),(0,a.jsx)(s.pre,{className:"code",children:(0,a.jsx)(s.code,{className:"language-ts",meta:'title="src/global.d.ts"',children:"declare module '*.module.css' {\n  const classes: { readonly [key: string]: string };\n  export default classes;\n}\n\ndeclare module '*.module.scss' {\n  const classes: { readonly [key: string]: string };\n  export default classes;\n}\n\ndeclare module '*.module.sass' {\n  const classes: { readonly [key: string]: string };\n  export default classes;\n}\n\ndeclare module '*.module.less' {\n  const classes: { readonly [key: string]: string };\n  export default classes;\n}\n\ndeclare module '*.module.styl' {\n  const classes: { readonly [key: string]: string };\n  export default classes;\n}\n"})})]})]}),"\n",(0,a.jsxs)(s.p,{children:["If you enabled the ",(0,a.jsx)(s.code,{children:"disableCssModuleExtension"})," config, you also need to add the following types:"]}),"\n",(0,a.jsxs)(s.div,{className:"language-",children:[(0,a.jsx)(s.div,{className:"modern-code-title",children:"src/global.d.ts"}),(0,a.jsxs)(s.div,{className:"modern-code-content",children:[(0,a.jsx)(s.button,{className:"copy"}),(0,a.jsx)(s.pre,{className:"code",children:(0,a.jsx)(s.code,{className:"language-ts",meta:'title="src/global.d.ts"',children:"declare module '*.css' {\n  const classes: { readonly [key: string]: string };\n  export default classes;\n}\n\ndeclare module '*.scss' {\n  const classes: { readonly [key: string]: string };\n  export default classes;\n}\n\ndeclare module '*.sass' {\n  const classes: { readonly [key: string]: string };\n  export default classes;\n}\n\ndeclare module '*.less' {\n  const classes: { readonly [key: string]: string };\n  export default classes;\n}\n\ndeclare module '*.styl' {\n  const classes: { readonly [key: string]: string };\n  export default classes;\n}\n"})})]})]}),"\n",(0,a.jsxs)(s.p,{children:["After adding the type declaration, if the type error still exists, you can try to restart the current IDE, or adjust the directory where ",(0,a.jsx)(s.code,{children:"global.d.ts"})," is located, making sure the TypeScript can correctly identify the type definition."]}),"\n",(0,a.jsxs)(s.h2,{id:"generate-exact-type-definitions",children:["Generate exact type definitions",(0,a.jsx)(s.a,{className:"header-anchor","aria-hidden":"true",href:"#generate-exact-type-definitions",children:"#"})]}),"\n",(0,a.jsx)(s.p,{children:"Although the above method can provide the type of CSS Modules, it cannot accurately prompt which classNames are exported by a certain CSS file."}),"\n",(0,a.jsxs)(s.p,{children:["Builder supports generating accurate type declarations for CSS Modules, you only need to enable the ",(0,a.jsx)(s.a,{href:"/en/api/config-output",children:"output.enableCssModuleTSDeclaration"})," config, and then execute the build, Builder will generate type declaration files for all CSS Modules."]}),"\n",(0,a.jsx)(s.div,{className:"language-",children:(0,a.jsxs)(s.div,{className:"modern-code-content",children:[(0,a.jsx)(s.button,{className:"copy"}),(0,a.jsx)(s.pre,{className:"code",children:(0,a.jsx)(s.code,{className:"language-ts",children:"export default {\n  output: {\n    enableCssModuleTSDeclaration: true,\n  },\n};\n"})})]})}),"\n",(0,a.jsxs)(s.h3,{id:"example-1",children:["Example",(0,a.jsx)(s.a,{className:"header-anchor","aria-hidden":"true",href:"#example-1",children:"#"})]}),"\n",(0,a.jsxs)(s.p,{children:["For example, there are two files ",(0,a.jsx)(s.code,{children:"src/index.ts"})," and ",(0,a.jsx)(s.code,{children:"src/index.module.scss"})," under a certain folder:"]}),"\n",(0,a.jsxs)(s.div,{className:"language-",children:[(0,a.jsx)(s.div,{className:"modern-code-title",children:"src/index.ts"}),(0,a.jsxs)(s.div,{className:"modern-code-content",children:[(0,a.jsx)(s.button,{className:"copy"}),(0,a.jsx)(s.pre,{className:"code",children:(0,a.jsx)(s.code,{className:"language-tsx",meta:'title="src/index.ts"',children:"import styles from './index.module.scss';\n\nexport default () => {\n  <div>\n    <div className={styles.pageHeader}>Page Header</div>\n  </div>;\n};\n"})})]})]}),"\n",(0,a.jsxs)(s.div,{className:"language-",children:[(0,a.jsx)(s.div,{className:"modern-code-title",children:"src/index.module.scss"}),(0,a.jsxs)(s.div,{className:"modern-code-content",children:[(0,a.jsx)(s.button,{className:"copy"}),(0,a.jsx)(s.pre,{className:"code",children:(0,a.jsx)(s.code,{className:"language-scss",meta:'title="src/index.module.scss"',children:".page-header {\n  color: black;\n}\n"})})]})]}),"\n",(0,a.jsxs)(s.p,{children:["After executing the build, the ",(0,a.jsx)(s.code,{children:"src/index.module.scss.d.ts"})," type declaration file will be automatically generated:"]}),"\n",(0,a.jsxs)(s.div,{className:"language-",children:[(0,a.jsx)(s.div,{className:"modern-code-title",children:"src/index.module.scss.d.ts"}),(0,a.jsxs)(s.div,{className:"modern-code-content",children:[(0,a.jsx)(s.button,{className:"copy"}),(0,a.jsx)(s.pre,{className:"code",children:(0,a.jsx)(s.code,{className:"language-ts",meta:'title="src/index.module.scss.d.ts"',children:"// This file is automatically generated.\n// Please do not change this file!\ninterface CssExports {\n  'page-header': string;\n  pageHeader: string;\n}\nexport const cssExports: CssExports;\nexport default cssExports;\n"})})]})]}),"\n",(0,a.jsxs)(s.p,{children:["Then open the ",(0,a.jsx)(s.code,{children:"src/index.ts"})," file again, you will see that the ",(0,a.jsx)(s.code,{children:"styles"})," object already has a exact type."]}),"\n",(0,a.jsxs)(s.h3,{id:"related-configuration",children:["Related configuration",(0,a.jsx)(s.a,{className:"header-anchor","aria-hidden":"true",href:"#related-configuration",children:"#"})]}),"\n",(0,a.jsxs)(s.p,{children:["In the above example, ",(0,a.jsx)(s.code,{children:"src/index.module.scss.d.ts"})," is generated by compilation, you can choose to commit them to the Git repository, or you can choose to ignore them in the ",(0,a.jsx)(s.code,{children:".gitignore"})," file:"]}),"\n",(0,a.jsx)(s.div,{className:"language-",children:(0,a.jsxs)(s.div,{className:"modern-code-content",children:[(0,a.jsx)(s.button,{className:"copy"}),(0,a.jsx)(s.pre,{className:"code",children:(0,a.jsx)(s.code,{className:"language-bash",children:"# Ignore auto generated CSS declarations\n*.module.css.d.ts\n*.module.sass.d.ts\n*.module.scss.d.ts\n*.module.less.d.ts\n*.module.styl.d.ts\n"})})]})}),"\n",(0,a.jsxs)(s.p,{children:["In addition, if the generated code causes ESLint to report errors, you can also add the above configuration to the ",(0,a.jsx)(s.code,{children:".eslintignore"})," file."]})]})}var r=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},s=Object.assign({},(0,l.useMDXComponents)(),e.components).wrapper;return s?(0,a.jsx)(s,Object.assign({},e,{children:(0,a.jsx)(o,e)})):o(e)}}}]);