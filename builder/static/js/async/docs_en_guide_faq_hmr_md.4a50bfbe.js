(self.webpackChunk_modern_js_builder_doc=self.webpackChunk_modern_js_builder_doc||[]).push([["docs_en_guide_faq_hmr_md"],{3989:function(e,n,t){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),Object.defineProperty(n,"default",{enumerable:!0,get:function(){return h}});var o,r=t("15169"),a=t("43932"),s=t("9880"),i=t("23169");function c(e){var n=Object.assign({h1:"h1",a:"a",h3:"h3",p:"p",code:"code",pre:"pre",hr:"hr",ul:"ul",li:"li",img:"img",blockquote:"blockquote"},(0,i.useMDXComponents)(),e.components);return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)(n.h1,{id:"hmr-faq",children:["HMR FAQ",(0,s.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#hmr-faq",children:"#"})]}),"\n",(0,s.jsxs)(n.h3,{id:"hmr-not-working-when-external-react?",children:["HMR not working when external React?",(0,s.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#hmr-not-working-when-external-react?",children:"#"})]}),"\n",(0,s.jsx)(n.p,{children:"To ensure that HMR works properly, we need to use the development builds of React and ReactDOM."}),"\n",(0,s.jsxs)(n.p,{children:["If you exclude React via ",(0,s.jsx)(n.code,{children:"externals"})," when bundling, the production build of React is usually injected through CDN, and this can cause HMR to fail."]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-js",children:"export default {\n  output: {\n    externals: {\n      react: 'React',\n      'react-dom': 'ReactDOM',\n    },\n  },\n};\n"})}),"\n",(0,s.jsxs)(n.p,{children:["To solve this problem, you need to reference the development builds of React or not configure ",(0,s.jsx)(n.code,{children:"externals"})," in the development environment."]}),"\n",(0,s.jsxs)(n.p,{children:["If you are unsure about the type of React build you are using, you can refer to the ",(0,s.jsx)(n.a,{href:"https://legacy.reactjs.org/docs/optimizing-performance.html#use-the-production-build",target:"_blank",rel:"noopener noreferrer",children:"React documentation - Use the Production Build"}),"."]}),"\n",(0,s.jsx)(n.hr,{}),"\n",(0,s.jsxs)(n.h3,{id:"hmr-not-working-when-setting-filename-hash-in-development-mode?",children:["HMR not working when setting filename hash in development mode?",(0,s.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#hmr-not-working-when-setting-filename-hash-in-development-mode?",children:"#"})]}),"\n",(0,s.jsxs)(n.p,{children:["Usually, we only set the filename hash in the production mode (i.e., when ",(0,s.jsx)(n.code,{children:"process.env.NODE_ENV === 'production'"}),")."]}),"\n",(0,s.jsxs)(n.p,{children:["If you set the filename hash in the development mode, it may cause HMR to fail (especially for CSS files). This is because every time the file content changes, the hash value changes, preventing tools like ",(0,s.jsx)(n.a,{href:"https://www.npmjs.com/package/mini-css-extract-plugin",target:"_blank",rel:"noopener noreferrer",children:"mini-css-extract-plugin"})," from reading the latest file content."]}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"Correct usage:"}),"\n"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-js",children:"export default {\n  output: {\n    filename: {\n      css:\n        process.env.NODE_ENV === 'production'\n          ? '[name].[contenthash:8].css'\n          : '[name].css',\n    },\n  },\n};\n"})}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"Incorrect usage:"}),"\n"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-js",children:"export default {\n  output: {\n    filename: {\n      css: '[name].[contenthash:8].css',\n    },\n  },\n};\n"})}),"\n",(0,s.jsx)(n.hr,{}),"\n",(0,s.jsxs)(n.h3,{id:"hmr-not-working-when-updating-react-components?",children:["HMR not working when updating React components?",(0,s.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#hmr-not-working-when-updating-react-components?",children:"#"})]}),"\n",(0,s.jsxs)(n.p,{children:["Builder uses React's official ",(0,s.jsx)(n.a,{href:"https://github.com/pmmmwh/react-refresh-webpack-plugin",target:"_blank",rel:"noopener noreferrer",children:"Fast Refresh"})," capability to perform component hot updates."]}),"\n",(0,s.jsx)(n.p,{children:"If there is a problem that the hot update of the React component cannot take effect, or the state of the React component is lost after the hot update, it is usually because your React component uses an anonymous function. In the official practice of React Fast Refresh, it is required that the component cannot be an anonymous function, otherwise the state of the React component cannot be preserved after hot update."}),"\n",(0,s.jsx)(n.p,{children:"Here are some examples of wrong usage:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-tsx",children:"// bad\nexport default function () {\n  return <div>Hello World</div>;\n}\n\n// bad\nexport default () => <div>Hello World</div>;\n"})}),"\n",(0,s.jsx)(n.p,{children:"The correct usage is to declare a name for each component function:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-tsx",children:"// good\nexport default function MyComponent() {\n  return <div>Hello World</div>;\n}\n\n// good\nconst MyComponent = () => <div>Hello World</div>;\n\nexport default MyComponent;\n"})}),"\n",(0,s.jsx)(n.hr,{}),"\n",(0,s.jsxs)(n.h3,{id:"hmr-not-working-when-use-https?",children:["HMR not working when use https?",(0,s.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#hmr-not-working-when-use-https?",children:"#"})]}),"\n",(0,s.jsx)(n.p,{children:"If https is enabled, the HMR connection may fail due to a certificate issue, and if you open the console, you will get an HMR connect failed error."}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.img,{src:"https://lf3-static.bytednsdoc.com/obj/eden-cn/6221eh7uhbfvhn/modern/img_v2_2f90d027-a232-4bd8-8021-dac3c651682g.jpg",alt:"hmr-connect-error-0"})}),"\n",(0,s.jsx)(n.p,{children:'The solution to this problem is to click on "Advanced" -> "Proceed to xxx (unsafe)" on the Chrome problem page.'}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.img,{src:"https://lf3-static.bytednsdoc.com/obj/eden-cn/6221eh7uhbfvhn/modern/3d2d4a38-acfe-4fe2-bdff-48b3366db481.png",alt:"hmr-connect-error-1"})}),"\n",(0,s.jsxs)(n.blockquote,{children:["\n",(0,s.jsx)(n.p,{children:'Tips: When accessing the page through Localhost, the words "Your connection is not private" may not appear and can be handled by visiting the Network domain.'}),"\n"]})]})}(o=globalThis).__RSPRESS_PAGE_META||(o.__RSPRESS_PAGE_META={}),globalThis.__RSPRESS_PAGE_META["/home/runner/work/modern.js/modern.js/packages/document/builder-doc/docs/en/guide/faq/hmr.md"]={toc:[{text:"HMR not working when external React?",id:"hmr-not-working-when-external-react?",depth:3},{text:"HMR not working when setting filename hash in development mode?",id:"hmr-not-working-when-setting-filename-hash-in-development-mode?",depth:3},{text:"HMR not working when updating React components?",id:"hmr-not-working-when-updating-react-components?",depth:3},{text:"HMR not working when use https?",id:"hmr-not-working-when-use-https?",depth:3}],title:"HMR FAQ",frontmatter:{}};var h=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=Object.assign({},(0,i.useMDXComponents)(),e.components).wrapper;return n?(0,s.jsx)(n,a._(r._({},e),{children:(0,s.jsx)(c,r._({},e))})):c(e)}}}]);