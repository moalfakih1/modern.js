"use strict";(self.webpackChunk_modern_js_builder_doc=self.webpackChunk_modern_js_builder_doc||[]).push([[9082],{6490:function(s,e,n){n.r(e),n.d(e,{content:function(){return a},frontmatter:function(){return o},title:function(){return r},toc:function(){return c}});var l=n(39980);const o=void 0,c=[{id:"how-to-import-ui-component-library-on-demand",text:"How to import UI Component library on demand?",depth:2},{id:"how-to-run-eslint-during-compilation",text:"How to run ESLint during compilation?",depth:2},{id:"how-to-configure-cdn-path-for-static-assets",text:"How to configure CDN path for static assets?",depth:2},{id:"how-to-clear-the-webpack-cache",text:"How to clear the webpack cache?",depth:2},{id:"how-to-remove-console-after-production-build",text:"How to remove console after production build?",depth:2}],r="Features",a="\"# Features\\n\\n## How to import UI Component library on demand?\\n\\nIf you need to configure the on-demand import of component libraries, you can configure [babel-plugin-import](https://github.com/ through [tools.babel](/en/api/config-tools.html#tools-babel) umijs/babel-plugin-import) plugin.\\n\\n```ts\\nexport default {\\n  tools: {\\n    babel: (config, { addPlugins }) => {\\n      addPlugins([\\n        [\\n          'babel-plugin-import',\\n          {\\n            libraryName: 'xxx-components',\\n            libraryDirectory: 'es',\\n            style: true,\\n          },\\n        ],\\n      ]);\\n    },\\n  },\\n};\\n```\\n\\n## How to run ESLint during compilation?\\n\\nFor the sake of compilation performance, Builder will not perform ESLint verification during the compilation process by default. If you need this function, you can manually install and register the [eslint-webpack-plugin](https://github.com/webpack) in the community -contrib/eslint-webpack-plugin).\\n\\nThe sample code to register the plugin is as follows:\\n\\n```js\\nimport ESLintPlugin from 'eslint-webpack-plugin';\\n\\nexport default {\\n  tools: {\\n    webpackChain(chain) {\\n      chain.plugin('eslint-plugin').use(ESLintPlugin, [\\n        {\\n          extensions: ['.js', '.ts', '.jsx', 'tsx', '.mjs'],\\n        },\\n      ]);\\n    },\\n  },\\n};\\n```\\n\\n> For more detailed usage, please refer to the [eslint-webpack-plugin](https://github.com/webpack-contrib/eslint-webpack-plugin) documentation.\\n\\n## How to configure CDN path for static assets?\\n\\nIf you need to upload static assets such as JS and CSS to CDN for use, you can set the URL prefix of static assets through the [output.assetPrefix](/api/config-output.html#outputassetprefix) configuration.\\n\\n```js\\nexport default {\\n  output: {\\n    assetPrefix: 'https://cdn.example.com/assets/',\\n  },\\n};\\n```\\n\\n## How to clear the webpack cache?\\n\\nBy default, Builder's webpack cache is generated in the `./node_modules/.cache/webpack` directory.\\n\\nIf you need to clear the local webpack cache, you can execute the following command:\\n\\n```bash\\nrm -rf ./node_modules/.cache\\n```\\n\\n## How to remove console after production build?\\n\\nWhen the production environment is built, we can remove the `console` from the code, so as to avoid the log of the development environment being output to the production environment.\\n\\nBuilder provides a configuration item to remove console by default, please see [performance.removeConsole](/en/api/config-performance.html#performance-removeconsole).\\n\"";function i(s){const e=Object.assign({h1:"h1",a:"a",h2:"h2",p:"p",div:"div",button:"button",pre:"pre",code:"code",span:"span",blockquote:"blockquote"},s.components);return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsxs)(e.h1,{id:"features",children:[(0,l.jsx)(e.a,{className:"header-anchor","aria-hidden":"true",href:"#features",children:"#"}),"Features"]}),"\n",(0,l.jsxs)(e.h2,{id:"how-to-import-ui-component-library-on-demand",children:[(0,l.jsx)(e.a,{className:"header-anchor","aria-hidden":"true",href:"#how-to-import-ui-component-library-on-demand",children:"#"}),"How to import UI Component library on demand?"]}),"\n",(0,l.jsxs)(e.p,{children:["If you need to configure the on-demand import of component libraries, you can configure [babel-plugin-import](",(0,l.jsx)(e.a,{href:"https://github.com/",target:"_blank",rel:"nofollow",children:"https://github.com/"})," through ",(0,l.jsx)(e.a,{href:"/builder/en/api/config-tools.html#tools-babel",children:"tools.babel"})," umijs/babel-plugin-import) plugin."]}),"\n",(0,l.jsxs)(e.div,{className:"language-ts",children:[(0,l.jsx)(e.div,{className:""}),(0,l.jsxs)(e.div,{className:"modern-code-content",children:[(0,l.jsx)(e.button,{className:"copy"}),(0,l.jsx)(e.pre,{className:"shiki",style:{backgroundColor:"#2e3440ff"},children:(0,l.jsxs)(e.code,{children:[(0,l.jsxs)(e.span,{className:"line",children:[(0,l.jsx)(e.span,{style:{color:"#81A1C1"},children:"export"}),(0,l.jsx)(e.span,{style:{color:"#D8DEE9FF"},children:" "}),(0,l.jsx)(e.span,{style:{color:"#81A1C1"},children:"default"}),(0,l.jsx)(e.span,{style:{color:"#D8DEE9FF"},children:" "}),(0,l.jsx)(e.span,{style:{color:"#ECEFF4"},children:"{"})]}),"\n",(0,l.jsxs)(e.span,{className:"line",children:[(0,l.jsx)(e.span,{style:{color:"#D8DEE9FF"},children:"  "}),(0,l.jsx)(e.span,{style:{color:"#D8DEE9"},children:"tools"}),(0,l.jsx)(e.span,{style:{color:"#ECEFF4"},children:":"}),(0,l.jsx)(e.span,{style:{color:"#D8DEE9FF"},children:" "}),(0,l.jsx)(e.span,{style:{color:"#ECEFF4"},children:"{"})]}),"\n",(0,l.jsxs)(e.span,{className:"line",children:[(0,l.jsx)(e.span,{style:{color:"#D8DEE9FF"},children:"    "}),(0,l.jsx)(e.span,{style:{color:"#88C0D0"},children:"babel"}),(0,l.jsx)(e.span,{style:{color:"#ECEFF4"},children:":"}),(0,l.jsx)(e.span,{style:{color:"#D8DEE9FF"},children:" "}),(0,l.jsx)(e.span,{style:{color:"#ECEFF4"},children:"("}),(0,l.jsx)(e.span,{style:{color:"#D8DEE9"},children:"config"}),(0,l.jsx)(e.span,{style:{color:"#ECEFF4"},children:","}),(0,l.jsx)(e.span,{style:{color:"#D8DEE9FF"},children:" "}),(0,l.jsx)(e.span,{style:{color:"#ECEFF4"},children:"{"}),(0,l.jsx)(e.span,{style:{color:"#D8DEE9FF"},children:" "}),(0,l.jsx)(e.span,{style:{color:"#D8DEE9"},children:"addPlugins"}),(0,l.jsx)(e.span,{style:{color:"#D8DEE9FF"},children:" "}),(0,l.jsx)(e.span,{style:{color:"#ECEFF4"},children:"})"}),(0,l.jsx)(e.span,{style:{color:"#D8DEE9FF"},children:" "}),(0,l.jsx)(e.span,{style:{color:"#81A1C1"},children:"=>"}),(0,l.jsx)(e.span,{style:{color:"#D8DEE9FF"},children:" "}),(0,l.jsx)(e.span,{style:{color:"#ECEFF4"},children:"{"})]}),"\n",(0,l.jsxs)(e.span,{className:"line",children:[(0,l.jsx)(e.span,{style:{color:"#D8DEE9FF"},children:"      "}),(0,l.jsx)(e.span,{style:{color:"#88C0D0"},children:"addPlugins"}),(0,l.jsx)(e.span,{style:{color:"#D8DEE9FF"},children:"(["})]}),"\n",(0,l.jsx)(e.span,{className:"line",children:(0,l.jsx)(e.span,{style:{color:"#D8DEE9FF"},children:"        ["})}),"\n",(0,l.jsxs)(e.span,{className:"line",children:[(0,l.jsx)(e.span,{style:{color:"#D8DEE9FF"},children:"          "}),(0,l.jsx)(e.span,{style:{color:"#ECEFF4"},children:"'"}),(0,l.jsx)(e.span,{style:{color:"#A3BE8C"},children:"babel-plugin-import"}),(0,l.jsx)(e.span,{style:{color:"#ECEFF4"},children:"'"}),(0,l.jsx)(e.span,{style:{color:"#ECEFF4"},children:","})]}),"\n",(0,l.jsxs)(e.span,{className:"line",children:[(0,l.jsx)(e.span,{style:{color:"#D8DEE9FF"},children:"          "}),(0,l.jsx)(e.span,{style:{color:"#ECEFF4"},children:"{"})]}),"\n",(0,l.jsxs)(e.span,{className:"line",children:[(0,l.jsx)(e.span,{style:{color:"#D8DEE9FF"},children:"            "}),(0,l.jsx)(e.span,{style:{color:"#D8DEE9"},children:"libraryName"}),(0,l.jsx)(e.span,{style:{color:"#ECEFF4"},children:":"}),(0,l.jsx)(e.span,{style:{color:"#D8DEE9FF"},children:" "}),(0,l.jsx)(e.span,{style:{color:"#ECEFF4"},children:"'"}),(0,l.jsx)(e.span,{style:{color:"#A3BE8C"},children:"xxx-components"}),(0,l.jsx)(e.span,{style:{color:"#ECEFF4"},children:"'"}),(0,l.jsx)(e.span,{style:{color:"#ECEFF4"},children:","})]}),"\n",(0,l.jsxs)(e.span,{className:"line",children:[(0,l.jsx)(e.span,{style:{color:"#D8DEE9FF"},children:"            "}),(0,l.jsx)(e.span,{style:{color:"#D8DEE9"},children:"libraryDirectory"}),(0,l.jsx)(e.span,{style:{color:"#ECEFF4"},children:":"}),(0,l.jsx)(e.span,{style:{color:"#D8DEE9FF"},children:" "}),(0,l.jsx)(e.span,{style:{color:"#ECEFF4"},children:"'"}),(0,l.jsx)(e.span,{style:{color:"#A3BE8C"},children:"es"}),(0,l.jsx)(e.span,{style:{color:"#ECEFF4"},children:"'"}),(0,l.jsx)(e.span,{style:{color:"#ECEFF4"},children:","})]}),"\n",(0,l.jsxs)(e.span,{className:"line",children:[(0,l.jsx)(e.span,{style:{color:"#D8DEE9FF"},children:"            "}),(0,l.jsx)(e.span,{style:{color:"#D8DEE9"},children:"style"}),(0,l.jsx)(e.span,{style:{color:"#ECEFF4"},children:":"}),(0,l.jsx)(e.span,{style:{color:"#D8DEE9FF"},children:" "}),(0,l.jsx)(e.span,{style:{color:"#81A1C1"},children:"true"}),(0,l.jsx)(e.span,{style:{color:"#ECEFF4"},children:","})]}),"\n",(0,l.jsxs)(e.span,{className:"line",children:[(0,l.jsx)(e.span,{style:{color:"#D8DEE9FF"},children:"          "}),(0,l.jsx)(e.span,{style:{color:"#ECEFF4"},children:"},"})]}),"\n",(0,l.jsxs)(e.span,{className:"line",children:[(0,l.jsx)(e.span,{style:{color:"#D8DEE9FF"},children:"        ]"}),(0,l.jsx)(e.span,{style:{color:"#ECEFF4"},children:","})]}),"\n",(0,l.jsxs)(e.span,{className:"line",children:[(0,l.jsx)(e.span,{style:{color:"#D8DEE9FF"},children:"      ])"}),(0,l.jsx)(e.span,{style:{color:"#81A1C1"},children:";"})]}),"\n",(0,l.jsxs)(e.span,{className:"line",children:[(0,l.jsx)(e.span,{style:{color:"#D8DEE9FF"},children:"    "}),(0,l.jsx)(e.span,{style:{color:"#ECEFF4"},children:"},"})]}),"\n",(0,l.jsxs)(e.span,{className:"line",children:[(0,l.jsx)(e.span,{style:{color:"#D8DEE9FF"},children:"  "}),(0,l.jsx)(e.span,{style:{color:"#ECEFF4"},children:"},"})]}),"\n",(0,l.jsxs)(e.span,{className:"line",children:[(0,l.jsx)(e.span,{style:{color:"#ECEFF4"},children:"}"}),(0,l.jsx)(e.span,{style:{color:"#81A1C1"},children:";"})]}),"\n",(0,l.jsx)(e.span,{className:"line"})]})})]})]}),"\n",(0,l.jsxs)(e.h2,{id:"how-to-run-eslint-during-compilation",children:[(0,l.jsx)(e.a,{className:"header-anchor","aria-hidden":"true",href:"#how-to-run-eslint-during-compilation",children:"#"}),"How to run ESLint during compilation?"]}),"\n",(0,l.jsxs)(e.p,{children:["For the sake of compilation performance, Builder will not perform ESLint verification during the compilation process by default. If you need this function, you can manually install and register the ",(0,l.jsx)(e.a,{href:"https://github.com/webpack",target:"_blank",rel:"nofollow",children:"eslint-webpack-plugin"})," in the community -contrib/eslint-webpack-plugin)."]}),"\n",(0,l.jsx)(e.p,{children:"The sample code to register the plugin is as follows:"}),"\n",(0,l.jsxs)(e.div,{className:"language-js",children:[(0,l.jsx)(e.div,{className:""}),(0,l.jsxs)(e.div,{className:"modern-code-content",children:[(0,l.jsx)(e.button,{className:"copy"}),(0,l.jsx)(e.pre,{className:"shiki",style:{backgroundColor:"#2e3440ff"},children:(0,l.jsxs)(e.code,{children:[(0,l.jsxs)(e.span,{className:"line",children:[(0,l.jsx)(e.span,{style:{color:"#81A1C1"},children:"import"}),(0,l.jsx)(e.span,{style:{color:"#D8DEE9FF"},children:" "}),(0,l.jsx)(e.span,{style:{color:"#8FBCBB"},children:"ESLintPlugin"}),(0,l.jsx)(e.span,{style:{color:"#D8DEE9FF"},children:" "}),(0,l.jsx)(e.span,{style:{color:"#81A1C1"},children:"from"}),(0,l.jsx)(e.span,{style:{color:"#D8DEE9FF"},children:" "}),(0,l.jsx)(e.span,{style:{color:"#ECEFF4"},children:"'"}),(0,l.jsx)(e.span,{style:{color:"#A3BE8C"},children:"eslint-webpack-plugin"}),(0,l.jsx)(e.span,{style:{color:"#ECEFF4"},children:"'"}),(0,l.jsx)(e.span,{style:{color:"#81A1C1"},children:";"})]}),"\n",(0,l.jsx)(e.span,{className:"line"}),"\n",(0,l.jsxs)(e.span,{className:"line",children:[(0,l.jsx)(e.span,{style:{color:"#81A1C1"},children:"export"}),(0,l.jsx)(e.span,{style:{color:"#D8DEE9FF"},children:" "}),(0,l.jsx)(e.span,{style:{color:"#81A1C1"},children:"default"}),(0,l.jsx)(e.span,{style:{color:"#D8DEE9FF"},children:" "}),(0,l.jsx)(e.span,{style:{color:"#ECEFF4"},children:"{"})]}),"\n",(0,l.jsxs)(e.span,{className:"line",children:[(0,l.jsx)(e.span,{style:{color:"#D8DEE9FF"},children:"  "}),(0,l.jsx)(e.span,{style:{color:"#88C0D0"},children:"tools"}),(0,l.jsx)(e.span,{style:{color:"#ECEFF4"},children:":"}),(0,l.jsx)(e.span,{style:{color:"#D8DEE9FF"},children:" "}),(0,l.jsx)(e.span,{style:{color:"#ECEFF4"},children:"{"})]}),"\n",(0,l.jsxs)(e.span,{className:"line",children:[(0,l.jsx)(e.span,{style:{color:"#D8DEE9FF"},children:"    "}),(0,l.jsx)(e.span,{style:{color:"#88C0D0"},children:"webpackChain"}),(0,l.jsx)(e.span,{style:{color:"#ECEFF4"},children:"("}),(0,l.jsx)(e.span,{style:{color:"#D8DEE9"},children:"chain"}),(0,l.jsx)(e.span,{style:{color:"#ECEFF4"},children:")"}),(0,l.jsx)(e.span,{style:{color:"#D8DEE9FF"},children:" "}),(0,l.jsx)(e.span,{style:{color:"#ECEFF4"},children:"{"})]}),"\n",(0,l.jsxs)(e.span,{className:"line",children:[(0,l.jsx)(e.span,{style:{color:"#D8DEE9FF"},children:"      "}),(0,l.jsx)(e.span,{style:{color:"#D8DEE9"},children:"chain"}),(0,l.jsx)(e.span,{style:{color:"#ECEFF4"},children:"."}),(0,l.jsx)(e.span,{style:{color:"#88C0D0"},children:"plugin"}),(0,l.jsx)(e.span,{style:{color:"#D8DEE9FF"},children:"("}),(0,l.jsx)(e.span,{style:{color:"#ECEFF4"},children:"'"}),(0,l.jsx)(e.span,{style:{color:"#A3BE8C"},children:"eslint-plugin"}),(0,l.jsx)(e.span,{style:{color:"#ECEFF4"},children:"'"}),(0,l.jsx)(e.span,{style:{color:"#D8DEE9FF"},children:")"}),(0,l.jsx)(e.span,{style:{color:"#ECEFF4"},children:"."}),(0,l.jsx)(e.span,{style:{color:"#88C0D0"},children:"use"}),(0,l.jsx)(e.span,{style:{color:"#D8DEE9FF"},children:"("}),(0,l.jsx)(e.span,{style:{color:"#D8DEE9"},children:"ESLintPlugin"}),(0,l.jsx)(e.span,{style:{color:"#ECEFF4"},children:","}),(0,l.jsx)(e.span,{style:{color:"#D8DEE9FF"},children:" ["})]}),"\n",(0,l.jsxs)(e.span,{className:"line",children:[(0,l.jsx)(e.span,{style:{color:"#D8DEE9FF"},children:"        "}),(0,l.jsx)(e.span,{style:{color:"#ECEFF4"},children:"{"})]}),"\n",(0,l.jsxs)(e.span,{className:"line",children:[(0,l.jsx)(e.span,{style:{color:"#D8DEE9FF"},children:"          "}),(0,l.jsx)(e.span,{style:{color:"#88C0D0"},children:"extensions"}),(0,l.jsx)(e.span,{style:{color:"#ECEFF4"},children:":"}),(0,l.jsx)(e.span,{style:{color:"#D8DEE9FF"},children:" ["}),(0,l.jsx)(e.span,{style:{color:"#ECEFF4"},children:"'"}),(0,l.jsx)(e.span,{style:{color:"#A3BE8C"},children:".js"}),(0,l.jsx)(e.span,{style:{color:"#ECEFF4"},children:"'"}),(0,l.jsx)(e.span,{style:{color:"#ECEFF4"},children:","}),(0,l.jsx)(e.span,{style:{color:"#D8DEE9FF"},children:" "}),(0,l.jsx)(e.span,{style:{color:"#ECEFF4"},children:"'"}),(0,l.jsx)(e.span,{style:{color:"#A3BE8C"},children:".ts"}),(0,l.jsx)(e.span,{style:{color:"#ECEFF4"},children:"'"}),(0,l.jsx)(e.span,{style:{color:"#ECEFF4"},children:","}),(0,l.jsx)(e.span,{style:{color:"#D8DEE9FF"},children:" "}),(0,l.jsx)(e.span,{style:{color:"#ECEFF4"},children:"'"}),(0,l.jsx)(e.span,{style:{color:"#A3BE8C"},children:".jsx"}),(0,l.jsx)(e.span,{style:{color:"#ECEFF4"},children:"'"}),(0,l.jsx)(e.span,{style:{color:"#ECEFF4"},children:","}),(0,l.jsx)(e.span,{style:{color:"#D8DEE9FF"},children:" "}),(0,l.jsx)(e.span,{style:{color:"#ECEFF4"},children:"'"}),(0,l.jsx)(e.span,{style:{color:"#A3BE8C"},children:"tsx"}),(0,l.jsx)(e.span,{style:{color:"#ECEFF4"},children:"'"}),(0,l.jsx)(e.span,{style:{color:"#ECEFF4"},children:","}),(0,l.jsx)(e.span,{style:{color:"#D8DEE9FF"},children:" "}),(0,l.jsx)(e.span,{style:{color:"#ECEFF4"},children:"'"}),(0,l.jsx)(e.span,{style:{color:"#A3BE8C"},children:".mjs"}),(0,l.jsx)(e.span,{style:{color:"#ECEFF4"},children:"'"}),(0,l.jsx)(e.span,{style:{color:"#D8DEE9FF"},children:"]"}),(0,l.jsx)(e.span,{style:{color:"#ECEFF4"},children:","})]}),"\n",(0,l.jsxs)(e.span,{className:"line",children:[(0,l.jsx)(e.span,{style:{color:"#D8DEE9FF"},children:"        "}),(0,l.jsx)(e.span,{style:{color:"#ECEFF4"},children:"},"})]}),"\n",(0,l.jsxs)(e.span,{className:"line",children:[(0,l.jsx)(e.span,{style:{color:"#D8DEE9FF"},children:"      ])"}),(0,l.jsx)(e.span,{style:{color:"#81A1C1"},children:";"})]}),"\n",(0,l.jsxs)(e.span,{className:"line",children:[(0,l.jsx)(e.span,{style:{color:"#D8DEE9FF"},children:"    "}),(0,l.jsx)(e.span,{style:{color:"#ECEFF4"},children:"},"})]}),"\n",(0,l.jsxs)(e.span,{className:"line",children:[(0,l.jsx)(e.span,{style:{color:"#D8DEE9FF"},children:"  "}),(0,l.jsx)(e.span,{style:{color:"#ECEFF4"},children:"},"})]}),"\n",(0,l.jsxs)(e.span,{className:"line",children:[(0,l.jsx)(e.span,{style:{color:"#ECEFF4"},children:"}"}),(0,l.jsx)(e.span,{style:{color:"#81A1C1"},children:";"})]}),"\n",(0,l.jsx)(e.span,{className:"line"})]})})]})]}),"\n",(0,l.jsxs)(e.blockquote,{children:["\n",(0,l.jsxs)(e.p,{children:["For more detailed usage, please refer to the ",(0,l.jsx)(e.a,{href:"https://github.com/webpack-contrib/eslint-webpack-plugin",target:"_blank",rel:"nofollow",children:"eslint-webpack-plugin"})," documentation."]}),"\n"]}),"\n",(0,l.jsxs)(e.h2,{id:"how-to-configure-cdn-path-for-static-assets",children:[(0,l.jsx)(e.a,{className:"header-anchor","aria-hidden":"true",href:"#how-to-configure-cdn-path-for-static-assets",children:"#"}),"How to configure CDN path for static assets?"]}),"\n",(0,l.jsxs)(e.p,{children:["If you need to upload static assets such as JS and CSS to CDN for use, you can set the URL prefix of static assets through the ",(0,l.jsx)(e.a,{href:"/builder/en/api/config-output.html#outputassetprefix",children:"output.assetPrefix"})," configuration."]}),"\n",(0,l.jsxs)(e.div,{className:"language-js",children:[(0,l.jsx)(e.div,{className:""}),(0,l.jsxs)(e.div,{className:"modern-code-content",children:[(0,l.jsx)(e.button,{className:"copy"}),(0,l.jsx)(e.pre,{className:"shiki",style:{backgroundColor:"#2e3440ff"},children:(0,l.jsxs)(e.code,{children:[(0,l.jsxs)(e.span,{className:"line",children:[(0,l.jsx)(e.span,{style:{color:"#81A1C1"},children:"export"}),(0,l.jsx)(e.span,{style:{color:"#D8DEE9FF"},children:" "}),(0,l.jsx)(e.span,{style:{color:"#81A1C1"},children:"default"}),(0,l.jsx)(e.span,{style:{color:"#D8DEE9FF"},children:" "}),(0,l.jsx)(e.span,{style:{color:"#ECEFF4"},children:"{"})]}),"\n",(0,l.jsxs)(e.span,{className:"line",children:[(0,l.jsx)(e.span,{style:{color:"#D8DEE9FF"},children:"  "}),(0,l.jsx)(e.span,{style:{color:"#88C0D0"},children:"output"}),(0,l.jsx)(e.span,{style:{color:"#ECEFF4"},children:":"}),(0,l.jsx)(e.span,{style:{color:"#D8DEE9FF"},children:" "}),(0,l.jsx)(e.span,{style:{color:"#ECEFF4"},children:"{"})]}),"\n",(0,l.jsxs)(e.span,{className:"line",children:[(0,l.jsx)(e.span,{style:{color:"#D8DEE9FF"},children:"    "}),(0,l.jsx)(e.span,{style:{color:"#88C0D0"},children:"assetPrefix"}),(0,l.jsx)(e.span,{style:{color:"#ECEFF4"},children:":"}),(0,l.jsx)(e.span,{style:{color:"#D8DEE9FF"},children:" "}),(0,l.jsx)(e.span,{style:{color:"#ECEFF4"},children:"'"}),(0,l.jsx)(e.span,{style:{color:"#A3BE8C"},children:"https://cdn.example.com/assets/"}),(0,l.jsx)(e.span,{style:{color:"#ECEFF4"},children:"'"}),(0,l.jsx)(e.span,{style:{color:"#ECEFF4"},children:","})]}),"\n",(0,l.jsxs)(e.span,{className:"line",children:[(0,l.jsx)(e.span,{style:{color:"#D8DEE9FF"},children:"  "}),(0,l.jsx)(e.span,{style:{color:"#ECEFF4"},children:"},"})]}),"\n",(0,l.jsxs)(e.span,{className:"line",children:[(0,l.jsx)(e.span,{style:{color:"#ECEFF4"},children:"}"}),(0,l.jsx)(e.span,{style:{color:"#81A1C1"},children:";"})]}),"\n",(0,l.jsx)(e.span,{className:"line"})]})})]})]}),"\n",(0,l.jsxs)(e.h2,{id:"how-to-clear-the-webpack-cache",children:[(0,l.jsx)(e.a,{className:"header-anchor","aria-hidden":"true",href:"#how-to-clear-the-webpack-cache",children:"#"}),"How to clear the webpack cache?"]}),"\n",(0,l.jsxs)(e.p,{children:["By default, Builder's webpack cache is generated in the ",(0,l.jsx)(e.code,{children:"./node_modules/.cache/webpack"})," directory."]}),"\n",(0,l.jsx)(e.p,{children:"If you need to clear the local webpack cache, you can execute the following command:"}),"\n",(0,l.jsxs)(e.div,{className:"language-bash",children:[(0,l.jsx)(e.div,{className:""}),(0,l.jsxs)(e.div,{className:"modern-code-content",children:[(0,l.jsx)(e.button,{className:"copy"}),(0,l.jsx)(e.pre,{className:"shiki",style:{backgroundColor:"#2e3440ff"},children:(0,l.jsxs)(e.code,{children:[(0,l.jsx)(e.span,{className:"line",children:(0,l.jsx)(e.span,{style:{color:"#D8DEE9FF"},children:"rm -rf ./node_modules/.cache"})}),"\n",(0,l.jsx)(e.span,{className:"line"})]})})]})]}),"\n",(0,l.jsxs)(e.h2,{id:"how-to-remove-console-after-production-build",children:[(0,l.jsx)(e.a,{className:"header-anchor","aria-hidden":"true",href:"#how-to-remove-console-after-production-build",children:"#"}),"How to remove console after production build?"]}),"\n",(0,l.jsxs)(e.p,{children:["When the production environment is built, we can remove the ",(0,l.jsx)(e.code,{children:"console"})," from the code, so as to avoid the log of the development environment being output to the production environment."]}),"\n",(0,l.jsxs)(e.p,{children:["Builder provides a configuration item to remove console by default, please see ",(0,l.jsx)(e.a,{href:"/builder/en/api/config-performance.html#performance-removeconsole",children:"performance.removeConsole"}),"."]})]})}e.default=function(s={}){const{wrapper:e}=s.components||{};return e?(0,l.jsx)(e,Object.assign({},s,{children:(0,l.jsx)(i,s)})):i(s)}}}]);