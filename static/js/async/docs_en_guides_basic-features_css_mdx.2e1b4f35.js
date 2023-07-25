(self.webpackChunk_modern_js_main_doc=self.webpackChunk_modern_js_main_doc||[]).push([["docs_en_guides_basic-features_css_mdx"],{45417:function(e,n,s){"use strict";s.r(n),s.d(n,{default:function(){return d}});var i,r=s("15169"),o=s("43932"),t=s("9880"),l=s("23169");function a(e){var n=Object.assign({h1:"h1",a:"a",p:"p",h2:"h2",code:"code",pre:"pre",div:"div",h3:"h3",ul:"ul",li:"li",blockquote:"blockquote"},(0,l.useMDXComponents)(),e.components);return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)(n.h1,{id:"css-solutions",children:["CSS Solutions",(0,t.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#css-solutions",children:"#"})]}),"\n",(0,t.jsx)(n.p,{children:"Modern.js has built-in a variety of commonly used CSS solutions, including Less / Sass / Stylus preprocessors, PostCSS, CSS Modules, CSS-in-JS, and Tailwind CSS."}),"\n",(0,t.jsxs)(n.h2,{id:"using-less-sass-and-stylus",children:["Using Less, Sass and Stylus",(0,t.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#using-less-sass-and-stylus",children:"#"})]}),"\n",(0,t.jsx)(n.p,{children:"Modern.js has built-in popular community CSS preprocessors, including Less and Sass."}),"\n",(0,t.jsxs)(n.p,{children:["By default, you don't need to configure Less and Sass. If you have custom loader configuration requirements, you can set them up by configuring ",(0,t.jsx)(n.a,{href:"/configure/app/tools/less",children:"tools.less"})," and ",(0,t.jsx)(n.a,{href:"/configure/app/tools/sass",children:"tools.sass"}),"."]}),"\n",(0,t.jsxs)(n.p,{children:["You can also use Stylus in Modern.js by installing the Stylus plugin provided by Modern.js Builder. For usage, please refer to ",(0,t.jsx)(n.a,{href:"https://modernjs.dev/builder/plugins/plugin-stylus.html",target:"_blank",rel:"noopener noreferrer",children:"Stylus Plugin"}),"."]}),"\n",(0,t.jsxs)(n.h2,{id:"using-postcss",children:["Using PostCSS",(0,t.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#using-postcss",children:"#"})]}),"\n",(0,t.jsxs)(n.p,{children:["Modern.js has built-in ",(0,t.jsx)(n.a,{href:"https://postcss.org/",target:"_blank",rel:"noopener noreferrer",children:"PostCSS"})," to transform CSS code."]}),"\n",(0,t.jsxs)(n.p,{children:["Please refer to ",(0,t.jsx)(n.a,{href:"https://modernjs.dev/builder/en/guide/basic/css-usage.html#using-postcss",target:"_blank",rel:"noopener noreferrer",children:"Modern.js Builder - Using PostCSS"})," for detailed usage."]}),"\n",(0,t.jsxs)(n.h2,{id:"using-css-modules",children:["Using CSS Modules",(0,t.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#using-css-modules",children:"#"})]}),"\n",(0,t.jsxs)(n.p,{children:["Please read the ",(0,t.jsx)(n.a,{href:"https://modernjs.dev/builder/en/guide/basic/css-modules.html",target:"_blank",rel:"noopener noreferrer",children:"Using CSS Modules"})," section to learn about the complete usage of CSS Modules."]}),"\n",(0,t.jsxs)(n.h2,{id:"using-css-in-js",children:["Using CSS-in-JS",(0,t.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#using-css-in-js",children:"#"})]}),"\n",(0,t.jsx)(n.p,{children:"CSS-in-JS is a technique that allows you to write CSS styles in JS files."}),"\n",(0,t.jsxs)(n.p,{children:["Modern.js integrates the popular CSS-in-JS implementation library ",(0,t.jsx)(n.a,{href:"https://styled-components.com/",target:"_blank",rel:"noopener noreferrer",children:"styled-components"}),", which uses the new JavaScript feature ",(0,t.jsx)(n.a,{href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Template_literals#tagged_templates",target:"_blank",rel:"noopener noreferrer",children:"Tagged template"})," to write component CSS styles. You can directly import the API of ",(0,t.jsx)(n.a,{href:"https://styled-components.com/",target:"_blank",rel:"noopener noreferrer",children:"styled-components"})," from ",(0,t.jsx)(n.code,{children:"@modern-js/runtime/styled"})," for use."]}),"\n",(0,t.jsxs)(n.p,{children:["When you need to write a ",(0,t.jsx)(n.code,{children:"div"})," component with an internal font color of red, you can implement it as follows:"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-js",children:"import styled from '@modern-js/runtime/styled';\n\nconst RedDiv = styled.div`\n  color: red;\n`;\n"})}),"\n",(0,t.jsxs)(n.p,{children:["If you need to dynamically set component styles based on the component's ",(0,t.jsx)(n.code,{children:"props"}),", for example, the ",(0,t.jsx)(n.code,{children:"primary"})," property of ",(0,t.jsx)(n.code,{children:"props"})," is ",(0,t.jsx)(n.code,{children:"true"}),", the button color is white, otherwise it is red, you can implement the code as follows:"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-js",children:"import styled from '@modern-js/runtime/styled';\n\nconst Button = styled.button`\n  color: ${props => (props.primary ? 'white' : 'red')};\n  font-size: 1em;\n`;\n"})}),"\n",(0,t.jsxs)(n.p,{children:["For more usage of styled-components, please refer to ",(0,t.jsx)(n.a,{href:"https://styled-components.com/",target:"_blank",rel:"noopener noreferrer",children:"styled-components official website"}),"."]}),"\n",(0,t.jsxs)(n.p,{children:["Modern.js integrates Babel's ",(0,t.jsx)(n.a,{href:"https://github.com/styled-components/babel-plugin-styled-components",target:"_blank",rel:"noopener noreferrer",children:"babel-plugin-styled-components"})," plugin internally, and you can configure the plugin through ",(0,t.jsx)(n.a,{href:"/configure/app/tools/styled-components",children:"tools.styledComponents"}),"."]}),"\n",(0,t.jsxs)(n.div,{className:"modern-directive tip",children:[(0,t.jsx)(n.div,{className:"modern-directive-title",children:"TIP"}),(0,t.jsx)(n.div,{className:"modern-directive-content",children:(0,t.jsxs)(n.p,{children:["If you need to use other CSS-in-JS libraries such as ",(0,t.jsx)(n.a,{href:"https://www.npmjs.com/package/styled-jsx",target:"_blank",rel:"noopener noreferrer",children:"styled-jsx"})," and ",(0,t.jsx)(n.a,{href:"https://emotion.sh/",target:"_blank",rel:"noopener noreferrer",children:"Emotion"}),", you need to install the corresponding dependencies first. For specific usage, please refer to the library's official website.\n"]})})]}),"\n",(0,t.jsxs)(n.h2,{id:"using-tailwind-css",children:["Using Tailwind CSS",(0,t.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#using-tailwind-css",children:"#"})]}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.a,{href:"https://tailwindcss.com/",target:"_blank",rel:"noopener noreferrer",children:"Tailwind CSS"})," is a CSS framework and design system based on Utility Class, which can quickly add common styles to components, and support flexible extension of theme styles. To use ",(0,t.jsx)(n.a,{href:"https://tailwindcss.com/",target:"_blank",rel:"noopener noreferrer",children:"Tailwind CSS"})," in Modern.js, simply run ",(0,t.jsx)(n.code,{children:"pnpm run new"})," in the project root directory and enable it."]}),"\n",(0,t.jsx)(n.p,{children:"Follow the steps below to make a selection:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:"? Please select the operation you want: Enable features\n? Please select the feature name: Enable Tailwind CSS\n"})}),"\n",(0,t.jsxs)(n.p,{children:["Register the Tailwind plugin in ",(0,t.jsx)(n.code,{children:"modern.config.ts"}),":"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-ts",meta:'title="modern.config.ts"',children:"import { tailwindcssPlugin } from '@modern-js/plugin-tailwindcss';\n\nexport default defineConfig({\n  plugins: [..., tailwindcssPlugin()],\n});\n"})}),"\n",(0,t.jsxs)(n.p,{children:["To use, add the following code to the root component (such as ",(0,t.jsx)(n.code,{children:"src/App.jsx"}),") of the entry:"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-js",children:"import 'tailwindcss/base.css';\nimport 'tailwindcss/components.css';\nimport 'tailwindcss/utilities.css';\n"})}),"\n",(0,t.jsx)(n.p,{children:"Then you can use the Utility Class provided by Tailwind CSS in each component:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-tsx",children:'const App = () => (\n  <div className="h-12 w-48">\n    <p className="text-xl font-medium text-black">hello world</p>\n  </div>\n);\n'})}),"\n",(0,t.jsxs)(n.div,{className:"modern-directive info",children:[(0,t.jsx)(n.div,{className:"modern-directive-title",children:"Additional Information"}),(0,t.jsxs)(n.div,{className:"modern-directive-content",children:[(0,t.jsxs)(n.p,{children:["Depending on your needs, you can selectively import the CSS files provided by Tailwind CSS. Since using ",(0,t.jsx)(n.code,{children:"@tailwind"})," is equivalent to directly importing CSS files, you can refer to the comments in the ",(0,t.jsxs)(n.a,{href:"https://tailwindcss.com/docs/functions-and-directives#tailwind",target:"_blank",rel:"noopener noreferrer",children:[(0,t.jsx)(n.code,{children:"@tailwind"})," usage"]})," documentation for the purpose of the CSS files provided by Tailwind CSS."]}),"\n"]})]}),"\n",(0,t.jsxs)(n.h3,{id:"tailwind-css-version",children:["Tailwind CSS Version",(0,t.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#tailwind-css-version",children:"#"})]}),"\n",(0,t.jsxs)(n.p,{children:["Modern.js supports both Tailwind CSS v2 and v3 versions, and the framework will recognize the version of the ",(0,t.jsx)(n.code,{children:"tailwindcss"})," dependency in the project ",(0,t.jsx)(n.code,{children:"package.json"})," file and enable the corresponding configuration. By default, we will install Tailwind CSS v3 version for you."]}),"\n",(0,t.jsx)(n.p,{children:"If your project is still using Tailwind CSS v2, we recommend that you upgrade to v3 to support JIT and other capabilities. For the differences between Tailwind CSS v2 and v3 versions, please refer to the following articles:"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.a,{href:"https://tailwindcss.com/blog/tailwindcss-v3",target:"_blank",rel:"noopener noreferrer",children:"Tailwind CSS v3.0"})}),"\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.a,{href:"https://tailwindcss.com/docs/upgrade-guide",target:"_blank",rel:"noopener noreferrer",children:"Upgrade Guide"})}),"\n"]}),"\n",(0,t.jsxs)(n.h3,{id:"browser-compatibility",children:["Browser Compatibility",(0,t.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#browser-compatibility",children:"#"})]}),"\n",(0,t.jsx)(n.p,{children:"Tailwind CSS v2 and v3 do not support the IE 11 browser, please refer to:"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.a,{href:"https://tailwindcss.com/docs/browser-support",target:"_blank",rel:"noopener noreferrer",children:"Tailwind CSS v3 - Browser Support"}),"."]}),"\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.a,{href:"https://v2.tailwindcss.com/docs/browser-support",target:"_blank",rel:"noopener noreferrer",children:"Tailwind CSS v2 - Browser Support"})}),"\n"]}),"\n",(0,t.jsx)(n.p,{children:"If you use Tailwind CSS on IE 11 browser, some styles may not be available, please use it with caution."}),"\n",(0,t.jsxs)(n.h3,{id:"theme-configuration",children:["Theme Configuration",(0,t.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#theme-configuration",children:"#"})]}),"\n",(0,t.jsxs)(n.p,{children:["When you need to customize the ",(0,t.jsx)(n.a,{href:"https://tailwindcss.com/docs/theme",target:"_blank",rel:"noopener noreferrer",children:"theme"})," configuration of Tailwind CSS, you can modify it in the ",(0,t.jsx)(n.a,{href:"/configure/app/source/design-system",children:(0,t.jsx)(n.code,{children:"source.designSystem"})})," configuration. For example, adding a ",(0,t.jsx)(n.code,{children:"primary"})," color theme:"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-ts",meta:'title="modern.config.ts"',children:"export default defineConfig({\n  source: {\n    designSystem: {\n      extend: {\n        colors: {\n          primary: '#5c6ac4',\n        },\n      },\n    },\n  },\n});\n"})}),"\n",(0,t.jsxs)(n.p,{children:["When you need to make other special configurations to Tailwind CSS besides ",(0,t.jsx)(n.a,{href:"https://tailwindcss.com/docs/theme",target:"_blank",rel:"noopener noreferrer",children:"theme"}),", you can configure them in ",(0,t.jsx)(n.a,{href:"/configure/app/tools/tailwindcss",children:(0,t.jsx)(n.code,{children:"tools.tailwindcss"})}),", such as setting ",(0,t.jsx)(n.code,{children:"variants"}),":"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-ts",meta:'title="modern.config.ts"',children:"export default defineConfig({\n  tools: {\n    tailwindcss: {\n      variants: {\n        extend: {\n          backgroundColor: ['active'],\n        },\n      },\n    },\n  },\n});\n"})}),"\n",(0,t.jsxs)(n.blockquote,{children:["\n",(0,t.jsxs)(n.p,{children:["When you configure Tailwind CSS for your project, the combination of ",(0,t.jsx)(n.a,{href:"/configure/app/source/design-system",children:"source.designSystem"})," and ",(0,t.jsx)(n.a,{href:"/configure/app/tools/tailwindcss",children:"tools.tailwindcss"})," configurations is equivalent to configuring a ",(0,t.jsx)(n.code,{children:"tailwindcss.config.js"})," file separately. ",(0,t.jsx)(n.a,{href:"/configure/app/source/design-system",children:"source.designSystem"})," is equivalent to the Tailwind CSS ",(0,t.jsx)(n.a,{href:"https://v2.tailwindcss.com/docs/configuration#theme",target:"_blank",rel:"noopener noreferrer",children:"theme"})," configuration."]}),"\n"]})]})}(i=globalThis).__RSPRESS_PAGE_META||(i.__RSPRESS_PAGE_META={}),globalThis.__RSPRESS_PAGE_META["%2Fhome%2Frunner%2Fwork%2Fmodern.js%2Fmodern.js%2Fpackages%2Fdocument%2Fmain-doc%2Fdocs%2Fen%2Fguides%2Fbasic-features%2Fcss.mdx"]={toc:[{text:"Using Less, Sass and Stylus",id:"using-less-sass-and-stylus",depth:2},{text:"Using PostCSS",id:"using-postcss",depth:2},{text:"Using CSS Modules",id:"using-css-modules",depth:2},{text:"Using CSS-in-JS",id:"using-css-in-js",depth:2},{text:"Using Tailwind CSS",id:"using-tailwind-css",depth:2},{text:"Tailwind CSS Version",id:"tailwind-css-version",depth:3},{text:"Browser Compatibility",id:"browser-compatibility",depth:3},{text:"Theme Configuration",id:"theme-configuration",depth:3}],title:"CSS Solutions",frontmatter:{sidebar_position:2}};var d=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=Object.assign({},(0,l.useMDXComponents)(),e.components).wrapper;return n?(0,t.jsx)(n,(0,o._)((0,r._)({},e),{children:(0,t.jsx)(a,(0,r._)({},e))})):a(e)}}}]);