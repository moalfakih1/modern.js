(self.webpackChunk_modern_js_builder_doc=self.webpackChunk_modern_js_builder_doc||[]).push([["docs_en_guide_advanced_browserslist_md"],{18852:function(e,r,s){"use strict";Object.defineProperty(r,"__esModule",{value:!0});!function(e,r){for(var s in r)Object.defineProperty(e,s,{enumerable:!0,get:r[s]})}(r,{frontmatter:function(){return o},title:function(){return i},toc:function(){return a},default:function(){return d}});var n=s("9880"),t=s("23169"),o={},i="Browserslist",a=[{text:"What is Browserslist",depth:2,id:"what-is-browserslist"},{text:"Set Browserslist",depth:2,id:"set-browserslist"},{text:"Example",depth:3,id:"example"},{text:"Effective Scope",depth:3,id:"effective-scope"},{text:"Use output.overrideBrowserslist config",depth:3,id:"use-outputoverridebrowserslist-config"},{text:"Commonly used Browserslist",depth:2,id:"commonly-used-browserslist"},{text:"Desktop PC scenario",depth:3,id:"desktop-pc-scenario"},{text:"Mobile H5 scenario",depth:3,id:"mobile-h5-scenario"},{text:"Default Browserslist",depth:2,id:"default-browserslist"},{text:"Web Target",depth:3,id:"web-target"},{text:"Node Target",depth:3,id:"node-target"},{text:"Web Worker Target",depth:3,id:"web-worker-target"},{text:"Modern Web Target",depth:3,id:"modern-web-target"},{text:"Query browser support",depth:2,id:"query-browser-support"}];function l(e){var r=Object.assign({h1:"h1",a:"a",p:"p",h2:"h2",strong:"strong",code:"code",div:"div",h3:"h3",pre:"pre",ul:"ul",li:"li",img:"img"},(0,t.useMDXComponents)(),e.components);return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsxs)(r.h1,{id:"browserslist",children:["Browserslist",(0,n.jsx)(r.a,{className:"header-anchor","aria-hidden":"true",href:"#browserslist",children:"#"})]}),"\n",(0,n.jsxs)(r.p,{children:["Builder supports using ",(0,n.jsx)(r.a,{href:"https://browsersl.ist/",target:"_blank",rel:"noopener noreferrer",children:"Browserslist"})," to specify which browsers should be supported in your Web application."]}),"\n",(0,n.jsxs)(r.h2,{id:"what-is-browserslist",children:["What is Browserslist",(0,n.jsx)(r.a,{className:"header-anchor","aria-hidden":"true",href:"#what-is-browserslist",children:"#"})]}),"\n",(0,n.jsx)(r.p,{children:"Since different browsers support ECMAScript and CSS differently, developers need to set the correct browser range for web applications."}),"\n",(0,n.jsxs)(r.p,{children:[(0,n.jsx)(r.a,{href:"https://browsersl.ist/",target:"_blank",rel:"noopener noreferrer",children:"Browserslist"})," can specify which browsers your web application can run in, it provides a configuration for specifying browsers range. Browserslist has become a standard in the industry, it is used by libraries such as Autoprefixer, Babel, ESLint, PostCSS, SWC and Webpack."]}),"\n",(0,n.jsxs)(r.p,{children:["When you specify a browser range through Browserslist, Builder will compile JavaScript and CSS code to the specified syntax, and inject the corresponding polyfill code. ",(0,n.jsx)(r.strong,{children:"When you only need to be compatible with modern browsers, the compilation process will introduce less compatible code and polyfills, and the performance of the page will be better."})]}),"\n",(0,n.jsxs)(r.p,{children:["For example, when you need to be compatible with IE11 browser, Builder will compile the code to ES5 and inject the polyfill required by IE11 through ",(0,n.jsx)(r.code,{children:"core-js"}),"."]}),"\n",(0,n.jsxs)(r.div,{className:"modern-directive tip",children:[(0,n.jsx)(r.div,{className:"modern-directive-title",children:"What is polyfill"}),(0,n.jsx)(r.div,{className:"modern-directive-content",children:(0,n.jsxs)(r.p,{children:["A polyfill is a piece of code that provides the functionality of a newer feature to older browsers that do not support that feature natively. It is used to fill in the gaps in older browsers' implementations of web standards, allowing developers to use newer features safely without having to worry about whether or not they will work in older browsers. For example, if a browser does not support the Array.map() method, a polyfill can be used to provide that functionality, allowing code that uses ",(0,n.jsx)(r.code,{children:"Array.prototype.flat()"})," to work in that browser. Polyfills are commonly used to ensure that web applications can work on a wide range of browsers, including older ones.\n"]})})]}),"\n",(0,n.jsxs)(r.h2,{id:"set-browserslist",children:["Set Browserslist",(0,n.jsx)(r.a,{className:"header-anchor","aria-hidden":"true",href:"#set-browserslist",children:"#"})]}),"\n",(0,n.jsxs)(r.p,{children:["You can set the Browserslist value in the ",(0,n.jsx)(r.code,{children:"package.json"})," or ",(0,n.jsx)(r.code,{children:".browserslistrc"})," file in the root directory of the current project."]}),"\n",(0,n.jsxs)(r.h3,{id:"example",children:["Example",(0,n.jsx)(r.a,{className:"header-anchor","aria-hidden":"true",href:"#example",children:"#"})]}),"\n",(0,n.jsxs)(r.p,{children:["Set via ",(0,n.jsx)(r.code,{children:"browserslist"})," in ",(0,n.jsx)(r.code,{children:"package.json"}),":"]}),"\n",(0,n.jsx)(r.pre,{children:(0,n.jsx)(r.code,{className:"language-json",children:'{\n  "browserslist": [\n    "iOS >= 9",\n    "Android >= 4.4",\n    "last 2 versions",\n    "> 0.2%",\n    "not dead"\n  ]\n}\n'})}),"\n",(0,n.jsxs)(r.p,{children:["Set via a separate ",(0,n.jsx)(r.code,{children:".browserslistrc"})," file:"]}),"\n",(0,n.jsx)(r.pre,{children:(0,n.jsx)(r.code,{className:"language-yaml",children:"iOS >= 9\nAndroid >= 4.4\nlast 2 versions\n> 0.2%\nnot dead\n"})}),"\n",(0,n.jsxs)(r.h3,{id:"effective-scope",children:["Effective Scope",(0,n.jsx)(r.a,{className:"header-anchor","aria-hidden":"true",href:"#effective-scope",children:"#"})]}),"\n",(0,n.jsxs)(r.p,{children:["By default, the ",(0,n.jsx)(r.code,{children:".browserslistrc"})," file only takes effect for browser-side bundles, including the ",(0,n.jsx)(r.code,{children:"web"})," and ",(0,n.jsx)(r.code,{children:"web-worker"})," target types."]}),"\n",(0,n.jsxs)(r.p,{children:["When you are building multiple targets at the same time, for example if the targets contains both ",(0,n.jsx)(r.code,{children:"web"})," and ",(0,n.jsx)(r.code,{children:"node"}),", only the ",(0,n.jsx)(r.code,{children:"web"})," bundles will be affected by the ",(0,n.jsx)(r.code,{children:".browserslistrc"})," file. If you want to make changes to the ",(0,n.jsx)(r.code,{children:"node"})," bundles, you can use the ",(0,n.jsx)(r.code,{children:"output.overrideBrowserslist"})," configuration below."]}),"\n",(0,n.jsxs)(r.h3,{id:"use-outputoverridebrowserslist-config",children:["Use output.overrideBrowserslist config",(0,n.jsx)(r.a,{className:"header-anchor","aria-hidden":"true",href:"#use-outputoverridebrowserslist-config",children:"#"})]}),"\n",(0,n.jsxs)(r.p,{children:["In addition to the above standard usage, Builder also provides ",(0,n.jsx)(r.a,{href:"/en/api/config-output#outputoverridebrowserslist",children:"output.overrideBrowserslist"})," config, which can also set the value of Browserslist."]}),"\n",(0,n.jsxs)(r.p,{children:[(0,n.jsx)(r.code,{children:"overrideBrowserslist"})," can be set to an array, which is written in the same way as the ",(0,n.jsx)(r.code,{children:"browserslistrc"})," configuration, but has a higher priority than ",(0,n.jsx)(r.code,{children:"browserslistrc"}),"."]}),"\n",(0,n.jsx)(r.pre,{children:(0,n.jsx)(r.code,{className:"language-ts",children:"export default {\n  output: {\n    overrideBrowserslist: [\n      'iOS >= 9',\n      'Android >= 4.4',\n      'last 2 versions',\n      '> 0.2%',\n      'not dead',\n    ],\n  },\n};\n"})}),"\n",(0,n.jsxs)(r.p,{children:["When ",(0,n.jsx)(r.code,{children:".overrideBrowserslist"})," is set to an array, it will also only work for browser-side bundles."]}),"\n",(0,n.jsxs)(r.p,{children:["When you build multiple targets at the same time, you can set different browser ranges for different targets. At this point, you need to set ",(0,n.jsx)(r.code,{children:"overrideBrowserslist"})," to an object whose key is the corresponding build target."]}),"\n",(0,n.jsxs)(r.p,{children:["For example to set different ranges for ",(0,n.jsx)(r.code,{children:"web"})," and ",(0,n.jsx)(r.code,{children:"node"}),":"]}),"\n",(0,n.jsx)(r.pre,{children:(0,n.jsx)(r.code,{className:"language-js",children:"export default {\n  output: {\n    overrideBrowserslist: {\n      web: [\n        'iOS >= 9',\n        'Android >= 4.4',\n        'last 2 versions',\n        '> 0.2%',\n        'not dead',\n      ],\n      node: ['node >= 14'],\n    },\n  },\n};\n"})}),"\n",(0,n.jsxs)(r.p,{children:["In most cases, it is recommended to use the ",(0,n.jsx)(r.code,{children:".browserslistrc"})," file rather than the ",(0,n.jsx)(r.code,{children:"overrideBrowserslist"})," config. Because the ",(0,n.jsx)(r.code,{children:".browserslistrc"})," file is the official config file, it is more general and can be recognized by other libraries in the community."]}),"\n",(0,n.jsxs)(r.h2,{id:"commonly-used-browserslist",children:["Commonly used Browserslist",(0,n.jsx)(r.a,{className:"header-anchor","aria-hidden":"true",href:"#commonly-used-browserslist",children:"#"})]}),"\n",(0,n.jsx)(r.p,{children:"The following are some commonly used Browserslist, you can choose according to your project type."}),"\n",(0,n.jsxs)(r.h3,{id:"desktop-pc-scenario",children:["Desktop PC scenario",(0,n.jsx)(r.a,{className:"header-anchor","aria-hidden":"true",href:"#desktop-pc-scenario",children:"#"})]}),"\n",(0,n.jsx)(r.p,{children:"In the desktop PC scenario, if you need to be compatible with IE 11 browsers, you can set Browserslist to:"}),"\n",(0,n.jsx)(r.pre,{children:(0,n.jsx)(r.code,{className:"language-yaml",children:"> 0.5%\nnot dead\nInternet Explorer 11\n"})}),"\n",(0,n.jsxs)(r.p,{children:["The above Browserslist will compile the code to the ES5 specification. For the specific browser list, please check ",(0,n.jsx)(r.a,{href:"https://browserslist.dev/?q=PiAwLjUlLCBub3QgZGVhZCwgSUUgMTE%3D",target:"_blank",rel:"noopener noreferrer",children:"browserslist.dev"}),"."]}),"\n",(0,n.jsx)(r.p,{children:"If you don't need to be compatible with IE 11 browsers, you can adjust Browserslist to get a more performant output, such as:"}),"\n",(0,n.jsxs)(r.ul,{children:["\n",(0,n.jsx)(r.li,{children:"Set to browsers that supports native ES Modules (recommended):"}),"\n"]}),"\n",(0,n.jsx)(r.pre,{children:(0,n.jsx)(r.code,{className:"language-yaml",children:"chrome >= 61\nedge >= 16\nfirefox >= 60\nsafari >= 11\nios_saf >= 11\n"})}),"\n",(0,n.jsxs)(r.ul,{children:["\n",(0,n.jsx)(r.li,{children:"Set to browsers that support ES6:"}),"\n"]}),"\n",(0,n.jsx)(r.pre,{children:(0,n.jsx)(r.code,{className:"language-yaml",children:"chrome >= 51\nedge >= 15\nfirefox >= 54\nsafari >= 10\nios_saf >= 10\n"})}),"\n",(0,n.jsxs)(r.h3,{id:"mobile-h5-scenario",children:["Mobile H5 scenario",(0,n.jsx)(r.a,{className:"header-anchor","aria-hidden":"true",href:"#mobile-h5-scenario",children:"#"})]}),"\n",(0,n.jsxs)(r.p,{children:["The mobile H5 scenario is mainly compatible with ",(0,n.jsx)(r.code,{children:"iOS"})," and ",(0,n.jsx)(r.code,{children:"Android"})," systems, usually we set Browserslist as:"]}),"\n",(0,n.jsx)(r.pre,{children:(0,n.jsx)(r.code,{className:"language-yaml",children:"iOS >= 9\nAndroid >= 4.4\nlast 2 versions\n> 0.2%\nnot dead\n"})}),"\n",(0,n.jsxs)(r.p,{children:["The above Browserslist will compile the code to the ES5 specification, which is compatible with most mobile scenarios on the market. For the detailed browsers list, please check ",(0,n.jsx)(r.a,{href:"https://browserslist.dev/?q=aU9TID49IDksIEFuZHJvaWQgPj0gNC40LCBsYXN0IDIgdmVyc2lvbnMsID4gMC4yJSwgbm90IGRlYWQ%3D",target:"_blank",rel:"noopener noreferrer",children:"browserslist.dev"}),"."]}),"\n",(0,n.jsx)(r.p,{children:(0,n.jsx)(r.img,{src:"https://lf3-static.bytednsdoc.com/obj/eden-cn/zq-uylkvT/ljhwZthlaukjlkulzlp/browserslist-dev-1222.png",alt:""})}),"\n",(0,n.jsx)(r.p,{children:"You can also choose to use the ES6 specification in the H5 scene, which will make the performance of the page better. The corresponding Browserslist is as follows:"}),"\n",(0,n.jsx)(r.pre,{children:(0,n.jsx)(r.code,{className:"language-yaml",children:"iOS >= 10\nChrome >= 51\n> 0.5%\nnot dead\nnot op_mini all\n"})}),"\n",(0,n.jsxs)(r.h2,{id:"default-browserslist",children:["Default Browserslist",(0,n.jsx)(r.a,{className:"header-anchor","aria-hidden":"true",href:"#default-browserslist",children:"#"})]}),"\n",(0,n.jsxs)(r.p,{children:["Builder will set different default values of Browserslist according to ",(0,n.jsx)(r.a,{href:"/guide/basic/build-target",children:"build target"}),", but we recommend that you explicitly set Browserslist in your project, which will make the compatible scope of the project more clear."]}),"\n",(0,n.jsxs)(r.h3,{id:"web-target",children:["Web Target",(0,n.jsx)(r.a,{className:"header-anchor","aria-hidden":"true",href:"#web-target",children:"#"})]}),"\n",(0,n.jsx)(r.p,{children:"The default values of web target are as follows:"}),"\n",(0,n.jsx)(r.pre,{children:(0,n.jsx)(r.code,{className:"language-yaml",children:"> 0.01%\nnot dead\nnot op_mini all\n"})}),"\n",(0,n.jsx)(r.p,{children:"Under this browser range, JavaScript code will be compiled to ES5 syntax."}),"\n",(0,n.jsxs)(r.h3,{id:"node-target",children:["Node Target",(0,n.jsx)(r.a,{className:"header-anchor","aria-hidden":"true",href:"#node-target",children:"#"})]}),"\n",(0,n.jsx)(r.p,{children:"Node target will be compatible with Node.js 14.0 by default."}),"\n",(0,n.jsx)(r.pre,{children:(0,n.jsx)(r.code,{className:"language-yaml",children:"node >= 14\n"})}),"\n",(0,n.jsxs)(r.h3,{id:"web-worker-target",children:["Web Worker Target",(0,n.jsx)(r.a,{className:"header-anchor","aria-hidden":"true",href:"#web-worker-target",children:"#"})]}),"\n",(0,n.jsx)(r.p,{children:"The default Browserslist of the Web Worker target is consistent with the Web target."}),"\n",(0,n.jsx)(r.pre,{children:(0,n.jsx)(r.code,{className:"language-yaml",children:"> 0.01%\nnot dead\nnot op_mini all\n"})}),"\n",(0,n.jsxs)(r.h3,{id:"modern-web-target",children:["Modern Web Target",(0,n.jsx)(r.a,{className:"header-anchor","aria-hidden":"true",href:"#modern-web-target",children:"#"})]}),"\n",(0,n.jsxs)(r.p,{children:["Modern Web target will be compatible with browsers that support ",(0,n.jsx)(r.a,{href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Modules",target:"_blank",rel:"noopener noreferrer",children:"native ES Modules"})," by default."]}),"\n",(0,n.jsx)(r.pre,{children:(0,n.jsx)(r.code,{className:"language-yaml",children:"chrome >= 61\nedge >= 16\nfirefox >= 60\nsafari >= 11\nios_saf >= 11\n"})}),"\n",(0,n.jsxs)(r.h2,{id:"query-browser-support",children:["Query browser support",(0,n.jsx)(r.a,{className:"header-anchor","aria-hidden":"true",href:"#query-browser-support",children:"#"})]}),"\n",(0,n.jsxs)(r.p,{children:["When developing, we need to know the browser support of certain features or APIs. At this time, we can check on the ",(0,n.jsx)(r.a,{href:"https://caniuse.com/",target:"_blank",rel:"noopener noreferrer",children:"caniuse"})," website."]}),"\n",(0,n.jsxs)(r.p,{children:["For example, we need to know the browser support of ",(0,n.jsx)(r.code,{children:"Promise"}),", just enter ",(0,n.jsx)(r.code,{children:"Promise"})," in ",(0,n.jsx)(r.a,{href:"https://caniuse.com/",target:"_blank",rel:"noopener noreferrer",children:"caniuse"}),", and you can see the following results:"]}),"\n",(0,n.jsx)(r.p,{children:(0,n.jsx)(r.img,{src:"https://lf3-static.bytednsdoc.com/obj/eden-cn/zq-uylkvT/ljhwZthlaukjlkulzlp/caniuse-demo-1222.png",alt:""})}),"\n",(0,n.jsxs)(r.p,{children:["As can be seen from the above table, ",(0,n.jsx)(r.code,{children:"Promise"})," is natively supported in Chrome 33 and iOS 8, but not in IE 11."]})]})}var d=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},r=Object.assign({},(0,t.useMDXComponents)(),e.components).wrapper;return r?(0,n.jsx)(r,Object.assign({},e,{children:(0,n.jsx)(l,e)})):l(e)}}}]);