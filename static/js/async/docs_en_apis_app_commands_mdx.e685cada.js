(self.webpackChunk_modern_js_main_doc=self.webpackChunk_modern_js_main_doc||[]).push([["docs_en_apis_app_commands_mdx"],{28425:function(e,n,r){"use strict";Object.defineProperty(n,"__esModule",{value:!0});!function(e,n){for(var r in n)Object.defineProperty(e,r,{enumerable:!0,get:n[r]})}(n,{frontmatter:function(){return s},title:function(){return i},toc:function(){return o},default:function(){return c}});var d=r("9880"),t=r("23169"),s={sidebar_position:1},i="Commands",o=[{text:"modern dev",depth:2,id:"modern-dev"},{text:"Compile Partial Pages",depth:3,id:"compile-partial-pages"},{text:"Specify the page by parameter",depth:3,id:"specify-the-page-by-parameter"},{text:"modern start",depth:2,id:"modern-start"},{text:"modern build",depth:2,id:"modern-build"},{text:"Analyze Bundle",depth:3,id:"analyze-bundle"},{text:"modern new",depth:2,id:"modern-new"},{text:"Add Entry",depth:3,id:"add-entry"},{text:"Enable Features",depth:3,id:"enable-features"},{text:"modern serve",depth:2,id:"modern-serve"},{text:"modern upgrade",depth:2,id:"modern-upgrade"},{text:"modern inspect",depth:2,id:"modern-inspect"},{text:"Configuration Env",depth:3,id:"configuration-env"},{text:"Verbose content",depth:3,id:"verbose-content"},{text:"SSR Configuration",depth:3,id:"ssr-configuration"},{text:"modern lint",depth:2,id:"modern-lint"},{text:"modern test",depth:2,id:"modern-test"}];function a(e){var n=Object.assign({h1:"h1",a:"a",p:"p",h2:"h2",code:"code",pre:"pre",h3:"h3",img:"img",blockquote:"blockquote",div:"div",ul:"ul",li:"li"},(0,t.useMDXComponents)(),e.components);return(0,d.jsxs)(d.Fragment,{children:[(0,d.jsxs)(n.h1,{id:"commands",children:["Commands",(0,d.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#commands",children:"#"})]}),"\n",(0,d.jsx)(n.p,{children:"Modern.js has some built-in commands that can help you quickly start a development server, build production environment code, and more."}),"\n",(0,d.jsx)(n.p,{children:"Through this chapter, you can learn about the built-in commands of Modern.js and how to use them."}),"\n",(0,d.jsxs)(n.h2,{id:"modern-dev",children:["modern dev",(0,d.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#modern-dev",children:"#"})]}),"\n",(0,d.jsxs)(n.p,{children:["The ",(0,d.jsx)(n.code,{children:"modern dev"})," command is used to start a local development server and compile the source code in the development environment."]}),"\n",(0,d.jsx)(n.pre,{children:(0,d.jsx)(n.code,{className:"language-bash",children:"Usage: modern dev [options]\n\nOptions:\n  -e --entry <entry>    compiler by entry\n  -c --config <config>  configuration file path, which can be a relative path or an absolute path\n  -h, --help            show command help\n  --analyze             analyze the bundle and view size of each module\n  --web-only            only start web service\n  --api-only            only start API service\n"})}),"\n",(0,d.jsxs)(n.p,{children:["After running ",(0,d.jsx)(n.code,{children:"modern dev"}),", Modern.js will watch source file changes and apply hot module replacement."]}),"\n",(0,d.jsx)(n.pre,{children:(0,d.jsx)(n.code,{className:"language-bash",children:"$ modern dev\n\ninfo    Starting dev server...\ninfo    App running at:\n\n  > Local:    http://localhost:8080/\n  > Network:  http://192.168.0.1:8080/\n"})}),"\n",(0,d.jsxs)(n.h3,{id:"compile-partial-pages",children:["Compile Partial Pages",(0,d.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#compile-partial-pages",children:"#"})]}),"\n",(0,d.jsxs)(n.p,{children:["In multi-page (MPA) projects, the ",(0,d.jsx)(n.code,{children:"--entry"})," option can be added to specify one or more pages to compile. In this way, only part of the code in the project will be compiled, and the dev startup speed will be faster."]}),"\n",(0,d.jsxs)(n.p,{children:["For example, execute ",(0,d.jsx)(n.code,{children:"modern dev --entry"}),", the entry selector will be displayed in the command line interface:"]}),"\n",(0,d.jsx)(n.pre,{children:(0,d.jsx)(n.code,{className:"language-bash",children:"$ modern dev --entry\n\n? Please select the entry that needs to be built\n❯ ◯ foo\n  ◯ bar\n  ◯ baz\n"})}),"\n",(0,d.jsxs)(n.p,{children:["For example, if you select the ",(0,d.jsx)(n.code,{children:"foo"})," entry, only the code related to the ",(0,d.jsx)(n.code,{children:"foo"})," entry will be compiled, and the code of other pages will not be compiled."]}),"\n",(0,d.jsxs)(n.h3,{id:"specify-the-page-by-parameter",children:["Specify the page by parameter",(0,d.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#specify-the-page-by-parameter",children:"#"})]}),"\n",(0,d.jsxs)(n.p,{children:["You can also specify the page name through parameters after ",(0,d.jsx)(n.code,{children:"--entry"}),", and the names of multiple pages can be separated by commas."]}),"\n",(0,d.jsx)(n.pre,{children:(0,d.jsx)(n.code,{className:"language-bash",children:"# Compile foo page\nmodern dev --entry foo\n\n# Compile foo and bar pages\nmodern dev --entry foo,bar\n"})}),"\n",(0,d.jsxs)(n.h2,{id:"modern-start",children:["modern start",(0,d.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#modern-start",children:"#"})]}),"\n",(0,d.jsxs)(n.p,{children:[(0,d.jsx)(n.code,{children:"modern start"})," is an alias of ",(0,d.jsx)(n.code,{children:"modern dev"})," command, the usage of the two are exactly the same."]}),"\n",(0,d.jsxs)(n.h2,{id:"modern-build",children:["modern build",(0,d.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#modern-build",children:"#"})]}),"\n",(0,d.jsxs)(n.p,{children:["The ",(0,d.jsx)(n.code,{children:"modern build"})," command will build a production-ready product in the ",(0,d.jsx)(n.code,{children:"dist/"})," directory by default. You can specify the output directory by modifying the configuration ",(0,d.jsx)(n.a,{href:"/configure/app/output/dist-path",children:(0,d.jsx)(n.code,{children:"output.distPath"})}),"."]}),"\n",(0,d.jsx)(n.pre,{children:(0,d.jsx)(n.code,{className:"language-bash",children:"Usage: modern build [options]\n\nOptions:\n  -c --config <config>  configuration file path, which can be a relative path or an absolute path\n  -h, --help            show command help\n  --analyze             analyze the bundle and view size of each module\n"})}),"\n",(0,d.jsxs)(n.h3,{id:"analyze-bundle",children:["Analyze Bundle",(0,d.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#analyze-bundle",children:"#"})]}),"\n",(0,d.jsxs)(n.p,{children:["execute ",(0,d.jsx)(n.code,{children:"npx modern build --analyze"})," command, can produce an HTML file that analyzes the volume of the bundle while packaging the production code:"]}),"\n",(0,d.jsx)(n.pre,{children:(0,d.jsx)(n.code,{children:"Bundle Analyzer saved report to /example/dist/report.html\nFile sizes after production build:\n\n  122.35 KB  dist/static/js/885.1d4fbe5a.js\n  2.3 KB     dist/static/js/main.4b8e8d64.js\n  761 B      dist/static/js/runtime-main.edb7cf35.js\n  645 B      dist/static/css/main.0dd3ecc1.css\n"})}),"\n",(0,d.jsx)(n.p,{children:"Open the above HTML file in the browser, you can see the tile diagram of the packaged product, and perform package volume analysis and optimization:"}),"\n",(0,d.jsx)("img",{src:"https://lf3-static.bytednsdoc.com/obj/eden-cn/aphqeh7uhohpquloj/modern-js/mwa-build-analyze-8784f762c1ab0cb20935829d5f912c4c.png"}),"\n",(0,d.jsxs)(n.blockquote,{children:["\n",(0,d.jsxs)(n.p,{children:["this features based on ",(0,d.jsx)(n.a,{href:"https://github.com/webpack-contrib/webpack-bundle-analyzer",target:"_blank",rel:"noopener noreferrer",children:"webpack-bundle-analyzer"}),"."]}),"\n"]}),"\n",(0,d.jsxs)(n.h2,{id:"modern-new",children:["modern new",(0,d.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#modern-new",children:"#"})]}),"\n",(0,d.jsxs)(n.p,{children:["The ",(0,d.jsx)(n.code,{children:"modern new"})," command is used to enable features in an existing project."]}),"\n",(0,d.jsx)(n.p,{children:"For example, add application entry, enable some optional features such as Tailwind CSS, micro frontend, etc."}),"\n",(0,d.jsx)(n.pre,{children:(0,d.jsx)(n.code,{className:"language-bash",children:"Usage: modern new [options]\n\nOptions:\n  -d, --debug            using debug mode to log something (default: false)\n  -c, --config <config>  set default generator config(json string)\n  --dist-tag <tag>       use specified tag version for its generator\n  --registry             set npm registry url to run npm command\n  -h, --help             show command help\n"})}),"\n",(0,d.jsxs)(n.h3,{id:"add-entry",children:["Add Entry",(0,d.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#add-entry",children:"#"})]}),"\n",(0,d.jsxs)(n.p,{children:["In the project, execute the ",(0,d.jsx)(n.code,{children:"new"})," command to add entries as follows:"]}),"\n",(0,d.jsx)(n.pre,{children:(0,d.jsx)(n.code,{className:"language-bash",children:'$ npx modern new\n? Action Create project element\n? Create project element New "entry"\n? Entry name entry\n'})}),"\n",(0,d.jsxs)(n.h3,{id:"enable-features",children:["Enable Features",(0,d.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#enable-features",children:"#"})]}),"\n",(0,d.jsxs)(n.p,{children:["In the project, execute the ",(0,d.jsx)(n.code,{children:"new"})," command to enable features as follows:"]}),"\n",(0,d.jsx)(n.pre,{children:(0,d.jsx)(n.code,{className:"language-bash",children:"$ npx modern new\n? Action Enable features\n? Enable features (Use arrow keys)\n❯ Enable Tailwind CSS\n  Enable BFF\n  Enable SSG\n  Enable Micro Frontend\n  Enable Unit Test / Integration Test\n  Enable Visual Testing (Storybook)\n"})}),"\n",(0,d.jsxs)(n.div,{className:"modern-directive tip",children:[(0,d.jsx)(n.div,{className:"modern-directive-title",children:"TIP"}),(0,d.jsxs)(n.div,{className:"modern-directive-content",children:[(0,d.jsxs)(n.p,{children:["The ",(0,d.jsx)(n.code,{children:"--config"})," parameter needs to use a JSON string."]}),"\n",(0,d.jsxs)(n.p,{children:["pnpm does not support the use of JSON strings as parameter values currently. Use ",(0,d.jsx)(n.code,{children:"npm new"})," to turn on.【",(0,d.jsx)(n.a,{href:"https://github.com/pnpm/pnpm/issues/3876",target:"_blank",rel:"noopener noreferrer",children:"Relate Issue"}),"】\n"]})]})]}),"\n",(0,d.jsxs)(n.h2,{id:"modern-serve",children:["modern serve",(0,d.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#modern-serve",children:"#"})]}),"\n",(0,d.jsxs)(n.p,{children:["Usually use the ",(0,d.jsx)(n.code,{children:"modern serve"})," command to enable project run in the production environment, and you need to execute the ",(0,d.jsx)(n.a,{href:"/apis/app/commands#modern-build",children:"`build'"})," command in advance to build the outputs."]}),"\n",(0,d.jsx)(n.pre,{children:(0,d.jsx)(n.code,{className:"language-bash",children:"Usage: modern serve [options]\n\nOptions:\n  -c --config <config>  configuration file path, which can be a relative path or an absolute path\n  -h, --help            show command help\n  --web-only            only run web service\n  --api-only            only run API service\n"})}),"\n",(0,d.jsxs)(n.p,{children:["By default, the project will run in ",(0,d.jsx)(n.code,{children:"localhost:8080"}),", you can modify the Server port number with ",(0,d.jsx)(n.code,{children:"server.port"}),":"]}),"\n",(0,d.jsx)(n.pre,{children:(0,d.jsx)(n.code,{className:"language-js",children:"export default defineConfig({\n  server: {\n    port: 8081,\n  },\n});\n"})}),"\n",(0,d.jsxs)(n.h2,{id:"modern-upgrade",children:["modern upgrade",(0,d.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#modern-upgrade",children:"#"})]}),"\n",(0,d.jsxs)(n.p,{children:["Execute the command ",(0,d.jsx)(n.code,{children:"npx modern upgrade"})," in the project, by default, dependencies in the ",(0,d.jsx)(n.code,{children:"package.json"})," are updated to the latest version."]}),"\n",(0,d.jsx)(n.pre,{children:(0,d.jsx)(n.code,{children:'Usage: modern upgrade [options]\n\nOptions:\n  --registry <registry>  specify npm registry (default: "")\n  -d,--debug             using debug mode to log something (default: false)\n  --cwd <cwd>            app directory (default: "")\n  -h, --help             show command help\n'})}),"\n",(0,d.jsxs)(n.h2,{id:"modern-inspect",children:["modern inspect",(0,d.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#modern-inspect",children:"#"})]}),"\n",(0,d.jsxs)(n.p,{children:["The ",(0,d.jsx)(n.code,{children:"modern inspect"})," command is used to view the ",(0,d.jsx)(n.a,{href:"https://modernjs.dev/builder/en/guide/basic/builder-config.html",target:"_blank",rel:"noopener noreferrer",children:"Modern.js Builder config"})," and webpack config of the project."]}),"\n",(0,d.jsx)(n.pre,{children:(0,d.jsx)(n.code,{children:'Usage: modern inspect [options]\n\nOptions:\n  --env <env>           view the configuration in the target environment (default: "development")\n  --output <output>     Specify the path to output in the dist (default: "/")\n  --verbose             Show the full function in the result\n  -c --config <config>  configuration file path, which can be a relative path or an absolute path\n  -h, --help            show command help\n'})}),"\n",(0,d.jsxs)(n.p,{children:["After executing the command ",(0,d.jsx)(n.code,{children:"npx modern inspect"})," in the project root directory, the following files will be generated in the ",(0,d.jsx)(n.code,{children:"dist"})," directory of the project:"]}),"\n",(0,d.jsxs)(n.ul,{children:["\n",(0,d.jsxs)(n.li,{children:[(0,d.jsx)(n.code,{children:"builder.config.js"}),": The Modern.js Builder config to use at build time."]}),"\n",(0,d.jsxs)(n.li,{children:[(0,d.jsx)(n.code,{children:"webpack.config.web.js"}),": The webpack config used by to use at build time."]}),"\n"]}),"\n",(0,d.jsx)(n.pre,{children:(0,d.jsx)(n.code,{className:"language-bash",children:"➜ npx modern inspect\n\nInspect config succeed, open following files to view the content:\n\n  - Builder Config: /root/my-project/dist/builder.config.js\n  - Webpack Config (web): /root/my-project/dist/webpack.config.web.js\n"})}),"\n",(0,d.jsxs)(n.h3,{id:"configuration-env",children:["Configuration Env",(0,d.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#configuration-env",children:"#"})]}),"\n",(0,d.jsxs)(n.p,{children:["By default, the inspect command will output the development configs, you can use the ",(0,d.jsx)(n.code,{children:"--env production"})," option to output the production configs:"]}),"\n",(0,d.jsx)(n.pre,{children:(0,d.jsx)(n.code,{className:"language-bash",children:"modern inspect --env production\n"})}),"\n",(0,d.jsxs)(n.h3,{id:"verbose-content",children:["Verbose content",(0,d.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#verbose-content",children:"#"})]}),"\n",(0,d.jsxs)(n.p,{children:["By default, the inspect command will omit the function content in the config object, you can use the ",(0,d.jsx)(n.code,{children:"--verbose"})," option to output the full content of the function:"]}),"\n",(0,d.jsx)(n.pre,{children:(0,d.jsx)(n.code,{className:"language-bash",children:"modern inspect --verbose\n"})}),"\n",(0,d.jsxs)(n.h3,{id:"ssr-configuration",children:["SSR Configuration",(0,d.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#ssr-configuration",children:"#"})]}),"\n",(0,d.jsxs)(n.p,{children:["If the project has enabled SSR, an additional ",(0,d.jsx)(n.code,{children:"webpack.config.node.js"})," file will be generated in the ",(0,d.jsx)(n.code,{children:"dist/"}),", corresponding to the webpack configuration at SSR build time."]}),"\n",(0,d.jsx)(n.pre,{children:(0,d.jsx)(n.code,{className:"language-bash",children:"➜ npx modern inspect\n\nInspect config succeed, open following files to view the content:\n\n  - Builder Config: /root/my-project/dist/builder.config.js\n  - Webpack Config (web): /root/my-project/dist/webpack.config.web.js\n  - Webpack Config (node): /root/my-project/dist/webpack.config.node.js\n"})}),"\n",(0,d.jsxs)(n.h2,{id:"modern-lint",children:["modern lint",(0,d.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#modern-lint",children:"#"})]}),"\n",(0,d.jsx)(n.p,{children:"Run ESLint to check the syntax of the code."}),"\n",(0,d.jsx)(n.pre,{children:(0,d.jsx)(n.code,{className:"language-bash",children:"Usage: modern lint [options] [...files]\n\nOptions:\n  --no-fix    disable auto fix source file\n  -h, --help  display help for command\n"})}),"\n",(0,d.jsxs)(n.p,{children:["Normally, only the part of the code modified by this commit needs to be checked by ",(0,d.jsx)(n.code,{children:"lint-staged"})," during the ",(0,d.jsx)(n.code,{children:"git commit"})," phase."]}),"\n",(0,d.jsxs)(n.ul,{children:["\n",(0,d.jsxs)(n.li,{children:[(0,d.jsx)(n.code,{children:"--no-fix"})," close auto fix by lint."]}),"\n"]}),"\n",(0,d.jsxs)(n.h2,{id:"modern-test",children:["modern test",(0,d.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#modern-test",children:"#"})]}),"\n",(0,d.jsxs)(n.p,{children:[(0,d.jsx)(n.code,{children:"modern test"})," command will automatically run the test cases."]}),"\n",(0,d.jsx)(n.pre,{children:(0,d.jsx)(n.code,{className:"language-bash",children:"Usage: modern test [options]\n\nOptions:\n  -h, --help  show command help\n"})}),"\n",(0,d.jsxs)(n.div,{className:"modern-directive tip",children:[(0,d.jsx)(n.div,{className:"modern-directive-title",children:"TIP"}),(0,d.jsx)(n.div,{className:"modern-directive-content",children:(0,d.jsxs)(n.p,{children:[(0,d.jsx)(n.code,{children:"modern test"})," command need to execute the ",(0,d.jsx)(n.code,{children:"new"})," command in advance to enable the ",(0,d.jsx)(n.code,{children:"unit test/integration test"}),".\n"]})})]}),"\n",(0,d.jsx)(n.p,{children:"The effect is as follows:"}),"\n",(0,d.jsx)(n.pre,{children:(0,d.jsx)(n.code,{className:"language-bash",children:"$ npx modern test\n PASS  src/tests/index.test.ts\n  The add method\n    ✓ should work fine. (2ms)\n\nTest Suites: 1 passed, 1 total\nTests:       1 passed, 1 total\nSnapshots:   0 total\nTime:        0.994 s, estimated 1 s\n"})}),"\n",(0,d.jsxs)(n.div,{className:"modern-directive info",children:[(0,d.jsx)(n.div,{className:"modern-directive-title",children:"INFO"}),(0,d.jsx)(n.div,{className:"modern-directive-content",children:(0,d.jsxs)(n.p,{children:["Files match ",(0,d.jsx)(n.code,{children:"*.test.(js|ts)"})," in ",(0,d.jsx)(n.code,{children:"api/"})," or ",(0,d.jsx)(n.code,{children:"src/"})," folders will be recognized as test cases by default.\n"]})})]})]})}var c=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=Object.assign({},(0,t.useMDXComponents)(),e.components).wrapper;return n?(0,d.jsx)(n,Object.assign({},e,{children:(0,d.jsx)(a,e)})):a(e)}}}]);