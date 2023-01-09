"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[2322],{44993:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>g});var o=n(52983);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,o,i=function(e,t){if(null==e)return{};var n,o,i={},r=Object.keys(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var l=o.createContext({}),u=function(e){var t=o.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},d=function(e){var t=u(e.components);return o.createElement(l.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},s=o.forwardRef((function(e,t){var n=e.components,i=e.mdxType,r=e.originalType,l=e.parentName,d=p(e,["components","mdxType","originalType","parentName"]),s=u(n),g=i,m=s["".concat(l,".").concat(g)]||s[g]||c[g]||r;return n?o.createElement(m,a(a({ref:t},d),{},{components:n})):o.createElement(m,a({ref:t},d))}));function g(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var r=n.length,a=new Array(r);a[0]=s;var p={};for(var l in t)hasOwnProperty.call(t,l)&&(p[l]=t[l]);p.originalType=e,p.mdxType="string"==typeof e?e:i,a[1]=p;for(var u=2;u<r;u++)a[u]=n[u];return o.createElement.apply(null,a)}return o.createElement.apply(null,n)}s.displayName="MDXCreateElement"},70656:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>a,default:()=>c,frontMatter:()=>r,metadata:()=>p,toc:()=>u});var o=n(18249),i=(n(52983),n(44993));const r={sidebar_position:3},a="How to develop generator plugins",p={unversionedId:"guides/topic-detail/generator/plugin/develop",id:"guides/topic-detail/generator/plugin/develop",title:"How to develop generator plugins",description:"Create project",source:"@site/../../packages/toolkit/main-doc/en/docusaurus-plugin-content-docs/current/guides/topic-detail/generator/plugin/develop.md",sourceDirName:"guides/topic-detail/generator/plugin",slug:"/guides/topic-detail/generator/plugin/develop",permalink:"/v2/en/docs/guides/topic-detail/generator/plugin/develop",draft:!1,tags:[],version:"current",sidebarPosition:3,frontMatter:{sidebar_position:3},sidebar:"guidesSidebar",previous:{title:"How to use the generator plugin",permalink:"/v2/en/docs/guides/topic-detail/generator/plugin/use"},next:{title:"Introduction",permalink:"/v2/en/docs/guides/topic-detail/generator/plugin/api/introduce"}},l={},u=[{value:"Create project",id:"create-project",level:2},{value:"Extension type",id:"extension-type",level:3},{value:"Customized type",id:"customized-type",level:3},{value:"Develop plugin logic",id:"develop-plugin-logic",level:2},{value:"Customize input",id:"customize-input",level:3},{value:"onForged",id:"onforged",level:3},{value:"afterForged",id:"afterforged",level:3}],d={toc:u};function c(e){let{components:t,...n}=e;return(0,i.kt)("wrapper",(0,o.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"how-to-develop-generator-plugins"},"How to develop generator plugins"),(0,i.kt)("h2",{id:"create-project"},"Create project"),(0,i.kt)("p",null,"Modern.js provides a generator plugin to create a generator plugin project, you can directly execute the following command to create:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"npx @modern-js/create plugin --plugin @modern-js/generator-plugin-plugin\n")),(0,i.kt)("p",null,"Different plugin types will ask different questions. You can choose the plugin type according to your needs."),(0,i.kt)("h3",{id:"extension-type"},"Extension type"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"? Please select the solution you want to create Module Solution\n? Please select the scene you want to create \u751f\u6210\u5668\u63d2\u4ef6\n? Plugin Package Name plugin\n? Development Language TS\n? Package Management Tool pnpm\n? Plugin Type extend\n? Plugin Base Type MWA Solution\n")),(0,i.kt)("h3",{id:"customized-type"},"Customized type"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"? Plugin Package Name plugin\n? Development Language TS\n? Package Management Tool pnpm\n? Plugin Type custom\n? Plugin Key mobile-app\n? Plugin Show Name Mobile App\n? Plugin Base Type MWA Solution\n")),(0,i.kt)("p",null,"After the execution of the create project command is completed, a project for developing the generator plugin will be generated accordingly, and the ",(0,i.kt)("inlineCode",{parentName:"p"},"meta")," information will also be generated according to your selection in the ",(0,i.kt)("inlineCode",{parentName:"p"},"package.json"),"."),(0,i.kt)("admonition",{type:"info"},(0,i.kt)("p",{parentName:"admonition"},"For generator plugin development, please refer to ",(0,i.kt)("inlineCode",{parentName:"p"},"@modern-js/generator-plugin-plugin"),". ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/modern-js-dev/modern.js/tree/main/packages/generator/plugins/generator-plugin"},"Source Code"))),(0,i.kt)("h2",{id:"develop-plugin-logic"},"Develop plugin logic"),(0,i.kt)("p",null,"Complete plugin logic development in ",(0,i.kt)("inlineCode",{parentName:"p"},"src/index.ts"),"."),(0,i.kt)("p",null,"The plugin exports a function by default, the function parameter is ",(0,i.kt)("inlineCode",{parentName:"p"},"context"),", and some methods are provided on ",(0,i.kt)("inlineCode",{parentName:"p"},"context")," to directly operate on the current project."),(0,i.kt)("p",null,"A brief introduction to the provided methods, the complete API list viewable ",(0,i.kt)("a",{parentName:"p",href:"/docs/guides/topic-detail/generator/plugin/api/introduce"},"Generator Plugin API"),"."),(0,i.kt)("h3",{id:"customize-input"},"Customize input"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"addInputBefore")),(0,i.kt)("p",null,"Add input before the default input, such as adding questions before the ",(0,i.kt)("inlineCode",{parentName:"p"},"Select package management tool")," question."),(0,i.kt)("p",null,"Specific Modern.js configuration viewable for each problem ",(0,i.kt)("a",{parentName:"p",href:"/docs/guides/topic-detail/generator/config/common"},"Project Solution Configuration"),"."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-ts"},"context.addInputBefore('input2', {\n  type: 'object',\n  properties: {\n    'input1.2': {\n      type: 'string',\n      title: 'input1.2',\n    },\n  },\n});\n")),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"setInput")),(0,i.kt)("p",null,"Set attributes of existing problems."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-ts"},"context.setInput('test', 'type', 'number');\ncontext.setInput('test', 'enum', [{ value: 'option1', label: '\u9009\u9879\u4e00' }]);\n")),(0,i.kt)("h3",{id:"onforged"},"onForged"),(0,i.kt)("p",null,"After the implementation of the hook related operations of the project plan type file is completed, multiple extended inspection will execute its ",(0,i.kt)("inlineCode",{parentName:"p"},"onForged")," function in sequence according to the ",(0,i.kt)("inlineCode",{parentName:"p"},"plugin")," parameter order."),(0,i.kt)("p",null,"The ",(0,i.kt)("inlineCode",{parentName:"p"},"onForged")," parameter is a callback function, and the function parameters are ",(0,i.kt)("inlineCode",{parentName:"p"},"api")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"input"),"."),(0,i.kt)("p",null,"Some file manipulation related methods are provided on the ",(0,i.kt)("inlineCode",{parentName:"p"},"api"),", which can operate on the current template file in this hook."),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"input")," is the current user input, which can be used to obtain the current input information and configuration information of the user."),(0,i.kt)("p",null,"When you need a new template file, you can add it directly in the ",(0,i.kt)("inlineCode",{parentName:"p"},"templates")," directory. In the ",(0,i.kt)("inlineCode",{parentName:"p"},"onForged")," function, you can directly operate the ",(0,i.kt)("inlineCode",{parentName:"p"},"templates")," directory file. For example, the ",(0,i.kt)("inlineCode",{parentName:"p"},"templateFile")," parameter in the ",(0,i.kt)("inlineCode",{parentName:"p"},"addFile")," below is the file in the ",(0,i.kt)("inlineCode",{parentName:"p"},"templates")," directory. There is no need to display the declaration ",(0,i.kt)("inlineCode",{parentName:"p"},"templates")," here, just write the relative path relative to ",(0,i.kt)("inlineCode",{parentName:"p"},"templates"),"."),(0,i.kt)("p",null,"API functions supported in ",(0,i.kt)("inlineCode",{parentName:"p"},"onForged")," can also be found in ",(0,i.kt)("a",{parentName:"p",href:"/docs/guides/topic-detail/generator/plugin/api/hook/onForged"},"Generator Plugin API"),"."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-ts"},"context.onForged(async (api: ForgedAPI, input: Record<string, unknown>) => {\n  const { language } = input;\n  api.addFile({\n    type: FileType.Text,\n    file: `src/index.${language as string}`,\n    templateFile: `index.${language as string}.handlebars`,\n    force: true,\n  });\n});\n")),(0,i.kt)("h3",{id:"afterforged"},"afterForged"),(0,i.kt)("p",null,"After the ",(0,i.kt)("inlineCode",{parentName:"p"},"onForged")," function is executed, it can mainly install dependencies, Git operations, etc."),(0,i.kt)("p",null,"If your project plan is based on the three projects provided by the Modern.js, this hook function may not be required. The default project plan will automatically include the installation dependency and commit code logic."),(0,i.kt)("p",null,"The generator plugin also supports a customized ",(0,i.kt)("inlineCode",{parentName:"p"},"custom")," type, which only provides a small amount of development-level best practice code, such as ",(0,i.kt)("inlineCode",{parentName:"p"},".gitignore"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"editorConfig")," and other files. In this case, you need to manually supplement the installation dependency and Git operation logic in the ",(0,i.kt)("inlineCode",{parentName:"p"},"afterForged")," function."),(0,i.kt)("p",null,"The ",(0,i.kt)("inlineCode",{parentName:"p"},"afterForged")," parameter is also a callback function, and the function parameters are ",(0,i.kt)("inlineCode",{parentName:"p"},"api")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"input"),"."),(0,i.kt)("p",null,"The ",(0,i.kt)("inlineCode",{parentName:"p"},"api")," will provide some npm, Git and other methods, which can install dependency and Git operations in this hook."),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"input")," is the current user input, which can be used to obtain the current input information and configuration information of the user."),(0,i.kt)("p",null,"The API functions supported in ",(0,i.kt)("inlineCode",{parentName:"p"},"afterForged")," can also be found in ","[Generator Plugin API]"," (/docs/guides/topic-detail/generator/plugin/api/hook/afterForged)."))}c.isMDXComponent=!0}}]);