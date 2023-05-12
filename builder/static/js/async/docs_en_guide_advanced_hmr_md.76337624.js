(self.webpackChunk_modern_js_builder_doc=self.webpackChunk_modern_js_builder_doc||[]).push([["docs_en_guide_advanced_hmr_md"],{373:function(e,n,t){"use strict";Object.defineProperty(n,"__esModule",{value:!0});!function(e,n){for(var t in n)Object.defineProperty(e,t,{enumerable:!0,get:n[t]})}(n,{frontmatter:function(){return a},title:function(){return i},toc:function(){return s},default:function(){return d}});var r=t("9880"),o=t("23169"),a={},i="Hot Module Replacement",s=[{text:"Enabling HMR",depth:2,id:"enabling-hmr"},{text:"Specify HMR URL",depth:2,id:"specify-hmr-url"},{text:"Default Config",depth:3,id:"default-config"},{text:"Proxy",depth:3,id:"proxy"},{text:"Live reloading vs Hot reloading",depth:2,id:"live-reloading-vs-hot-reloading"},{text:"FAQ",depth:2,id:"faq"},{text:"HMR not work when external react/reactDom?",depth:3,id:"hmr-not-work-when-external-react/reactdom?"},{text:"HMR not work when use https?",depth:3,id:"hmr-not-work-when-use-https?"},{text:"React component state lost after HMR?",depth:3,id:"react-component-state-lost-after-hmr?"}];function l(e){var n=Object.assign({h1:"h1",a:"a",p:"p",ul:"ul",li:"li",h2:"h2",div:"div",pre:"pre",code:"code",h3:"h3",img:"img",blockquote:"blockquote"},(0,o.useMDXComponents)(),e.components);return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(n.h1,{id:"hot-module-replacement",children:["Hot Module Replacement",(0,r.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#hot-module-replacement",children:"#"})]}),"\n",(0,r.jsx)(n.p,{children:"Hot Module Replacement (HMR) exchanges, adds, or removes modules while an application is running, without a full reload. This can significantly speed up development in a few ways:"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"Retain application state which is lost during a full reload."}),"\n",(0,r.jsx)(n.li,{children:"Save valuable development time by only updating what's changed."}),"\n",(0,r.jsx)(n.li,{children:"Instantly update the browser when modifications are made to CSS/JS in the source code, which is almost comparable to changing styles directly in the browser's dev tools."}),"\n"]}),"\n",(0,r.jsxs)(n.h2,{id:"enabling-hmr",children:["Enabling HMR",(0,r.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#enabling-hmr",children:"#"})]}),"\n",(0,r.jsx)(n.p,{children:"Builder has built-in support for HMR. By default, HMR is enabled in development."}),"\n",(0,r.jsxs)(n.p,{children:["By setting ",(0,r.jsx)(n.a,{href:"/en/api/config-dev",children:"dev.hmr"})," to false, HMR can be disabled, which the HMR and react-refresh will no longer work."]}),"\n",(0,r.jsx)(n.div,{className:"language-",children:(0,r.jsx)(n.div,{className:"modern-code-content",children:(0,r.jsx)(n.pre,{className:"code",children:(0,r.jsx)(n.code,{className:"language-ts",children:"export default {\n  dev: {\n    hmr: false,\n  },\n};\n"})})})}),"\n",(0,r.jsxs)(n.h2,{id:"specify-hmr-url",children:["Specify HMR URL",(0,r.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#specify-hmr-url",children:"#"})]}),"\n",(0,r.jsx)(n.p,{children:"By default, Builder uses the host and port number of the current page to splice the WebSocket URL of HMR."}),"\n",(0,r.jsxs)(n.p,{children:["When the HMR connection fails, you can specify the WebSocket URL by customizing ",(0,r.jsx)(n.code,{children:"devServer.client"})," configuration."]}),"\n",(0,r.jsxs)(n.h3,{id:"default-config",children:["Default Config",(0,r.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#default-config",children:"#"})]}),"\n",(0,r.jsx)(n.p,{children:"The default config are as follows, Builder will automatically deduce the URL of the WebSocket request according to the current location:"}),"\n",(0,r.jsx)(n.div,{className:"language-",children:(0,r.jsx)(n.div,{className:"modern-code-content",children:(0,r.jsx)(n.pre,{className:"code",children:(0,r.jsx)(n.code,{className:"language-ts",children:"export default {\n  tools: {\n    devServer: {\n      client: {\n        path: '/webpack-hmr',\n        // Equivalent to port of the dev server\n        port: '',\n        // Equivalent to location.hostname\n        host: '',\n        // Equivalent to location.protocol === 'https:' ? 'wss' : 'ws'\n        protocol: '',\n      },\n    },\n  },\n};\n"})})})}),"\n",(0,r.jsxs)(n.h3,{id:"proxy",children:["Proxy",(0,r.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#proxy",children:"#"})]}),"\n",(0,r.jsxs)(n.p,{children:["If you are proxying an online page to local development, WebSocket requests will fail to connect. You can try configuring ",(0,r.jsx)(n.code,{children:"devServer.client"})," to the following values so that HMR requests can reach the local Dev Server."]}),"\n",(0,r.jsx)(n.div,{className:"language-",children:(0,r.jsx)(n.div,{className:"modern-code-content",children:(0,r.jsx)(n.pre,{className:"code",children:(0,r.jsx)(n.code,{className:"language-ts",children:"export default {\n  tools: {\n    devServer: {\n      client: {\n        host: 'localhost',\n        protocol: 'ws',\n      },\n    },\n  },\n};\n"})})})}),"\n",(0,r.jsxs)(n.h2,{id:"live-reloading-vs-hot-reloading",children:["Live reloading vs Hot reloading",(0,r.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#live-reloading-vs-hot-reloading",children:"#"})]}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["Live reloading: After modifying the file, webpack recompiles and forces a browser refresh, which is a global (application-wide) refresh, equivalent to ",(0,r.jsx)(n.code,{children:"window.location.reload()"}),"."]}),"\n",(0,r.jsx)(n.li,{children:"Hot reloading: After modifying the file, webpack recompiles the corresponding module and remembers the state of the application when it is refreshed, thus enabling a partial refresh, i.e. hot update."}),"\n"]}),"\n",(0,r.jsxs)(n.p,{children:["DevServer provides two configuration items, ",(0,r.jsx)(n.a,{href:"/en/api/config-tools",children:"hot"})," and ",(0,r.jsx)(n.a,{href:"/en/api/config-tools",children:"liveReload"}),", to control how updates are made. When both hot and liveReload are open, DevServer will attempt to use hot mode (HMR) first, and will degrade to reloading the page if the HMR update fails."]}),"\n",(0,r.jsxs)(n.h2,{id:"faq",children:["FAQ",(0,r.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#faq",children:"#"})]}),"\n",(0,r.jsxs)(n.h3,{id:"hmr-not-work-when-external-react/reactdom?",children:["HMR not work when external react/reactDom?",(0,r.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#hmr-not-work-when-external-react/reactdom?",children:"#"})]}),"\n",(0,r.jsx)(n.p,{children:"HMR work requires the development mode of react & react-dom. The cdn version of react normally used the production mode.\nYou need to switch to development mode or make it not external when development."}),"\n",(0,r.jsxs)(n.p,{children:["If you're not sure which React mode you're using, you can see: ",(0,r.jsx)(n.a,{href:"https://reactjs.org/docs/optimizing-performance.html#use-the-production-build",target:"_blank",rel:"noopener noreferrer",children:"Check React Mode"})]}),"\n",(0,r.jsxs)(n.h3,{id:"hmr-not-work-when-use-https?",children:["HMR not work when use https?",(0,r.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#hmr-not-work-when-use-https?",children:"#"})]}),"\n",(0,r.jsx)(n.p,{children:"When https is enabled, the HMR perhaps connection fail due to a certificate issue, and if you open the console, you will get an HMR connect failed error."}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.img,{src:"https://lf3-static.bytednsdoc.com/obj/eden-cn/6221eh7uhbfvhn/modern/img_v2_2f90d027-a232-4bd8-8021-dac3c651682g.jpg",alt:"hmr-connect-error-0"})}),"\n",(0,r.jsx)(n.p,{children:'The solution to this problem is to click on "Advanced" -> "Proceed to xxx (unsafe)" on the Chrome problem page.'}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.img,{src:"https://lf3-static.bytednsdoc.com/obj/eden-cn/6221eh7uhbfvhn/modern/3d2d4a38-acfe-4fe2-bdff-48b3366db481.png",alt:"hmr-connect-error-1"})}),"\n",(0,r.jsxs)(n.blockquote,{children:["\n",(0,r.jsx)(n.p,{children:'Tips: When accessing the page through Localhost, the words "Your connection is not private" may not appear and can be handled by visiting the Network domain.'}),"\n"]}),"\n",(0,r.jsxs)(n.h3,{id:"react-component-state-lost-after-hmr?",children:["React component state lost after HMR?",(0,r.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#react-component-state-lost-after-hmr?",children:"#"})]}),"\n",(0,r.jsxs)(n.p,{children:["Builder uses React's official ",(0,r.jsx)(n.a,{href:"https://github.com/pmmmwh/react-refresh-webpack-plugin",target:"_blank",rel:"noopener noreferrer",children:"Fast Refresh"})," capability for component hot update."]}),"\n",(0,r.jsx)(n.p,{children:"When using Fast Refresh, it is required that the component cannot be an anonymous function, otherwise the state of the React component cannot be preserved after hot update."}),"\n",(0,r.jsx)(n.p,{children:"The following spellings are incorrect:"}),"\n",(0,r.jsx)(n.div,{className:"language-",children:(0,r.jsx)(n.div,{className:"modern-code-content",children:(0,r.jsx)(n.pre,{className:"code",children:(0,r.jsx)(n.code,{className:"language-js",children:"// wrong spelling 1\nexport default function () {\n  return <div>Hello World</div>;\n}\n\n// wrong spelling 2\nexport default () => <div>Hello World</div>;\n"})})})}),"\n",(0,r.jsx)(n.p,{children:"The correct spelling is:"}),"\n",(0,r.jsx)(n.div,{className:"language-",children:(0,r.jsx)(n.div,{className:"modern-code-content",children:(0,r.jsx)(n.pre,{className:"code",children:(0,r.jsx)(n.code,{className:"language-js",children:"// Correct spelling 1\nexport default function MyComponent() {\n  return <div>Hello World</div>;\n}\n\n// Correct spelling 2\nconst MyComponent = () => <div>Hello World</div>\n\nexport default MyComponent;\n"})})})})]})}var d=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=Object.assign({},(0,o.useMDXComponents)(),e.components).wrapper;return n?(0,r.jsx)(n,Object.assign({},e,{children:(0,r.jsx)(l,e)})):l(e)}}}]);