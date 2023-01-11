"use strict";(self.webpackChunk_modern_js_builder_doc=self.webpackChunk_modern_js_builder_doc||[]).push([[3119],{36133:function(s,n,l){l.r(n),l.d(n,{content:function(){return o},frontmatter:function(){return c},toc:function(){return r}});var e=l(39980);const c=void 0,r=[{id:"object-\u7c7b\u578b",text:"Object \u7c7b\u578b",depth:3},{id:"function-\u7c7b\u578b",text:"Function \u7c7b\u578b",depth:3}],o="\"- Type: `Object | Function`\\n- Default:\\n\\n```js\\nconst defaultOptions = {\\n  // Loader \u914d\u7f6e\\n  loaderOptions: {},\\n  // Plugin \u914d\u7f6e\\n  pluginOptions: {\\n    // cssPath \u9ed8\u8ba4\u4e3a static/css, cssFilename \u9ed8\u8ba4\u4e3a [name].[contenthash:8].css\\n    filename: `${cssPath}/${cssFilename}`,\\n    chunkFilename: `${cssPath}/async/${cssFilename}`,\\n    ignoreOrder: true,\\n  },\\n};\\n```\\n\\n\u901a\u8fc7 `tools.cssExtract` \u53ef\u4ee5\u66f4\u6539 [mini-css-extract-plugin](https://github.com/webpack-contrib/mini-css-extract-plugin) \u7684\u914d\u7f6e\u3002\\n\\n### Object \u7c7b\u578b\\n\\n\u5f53\u6b64\u503c\u4e3a Object \u7c7b\u578b\u65f6\uff0c\u4e0e\u9ed8\u8ba4\u914d\u7f6e\u901a\u8fc7 Object.assign \u5408\u5e76\u3002\u6bd4\u5982\uff1a\\n\\n```js\\nexport default {\\n  tools: {\\n    cssExtract: {\\n      pluginOptions: {\\n        filename: 'static/css/[name].[contenthash:8].css',\\n      },\\n    },\\n  },\\n};\\n```\\n\\n### Function \u7c7b\u578b\\n\\n\u5f53\u6b64\u503c\u4e3a Function \u7c7b\u578b\u65f6\uff0c\u9ed8\u8ba4\u914d\u7f6e\u4f5c\u4e3a\u7b2c\u4e00\u4e2a\u53c2\u6570\u4f20\u5165\uff0c\u4f60\u53ef\u4ee5\u76f4\u63a5\u4fee\u6539\u914d\u7f6e\u5bf9\u8c61\uff0c\u4e5f\u53ef\u4ee5\u8fd4\u56de\u4e00\u4e2a\u5bf9\u8c61\u4f5c\u4e3a\u6700\u7ec8\u914d\u7f6e\u3002\u6bd4\u5982\uff1a\\n\\n```js\\nexport default {\\n  tools: {\\n    cssExtract: config => {\\n      config.pluginOptions.filename = 'static/css/[name].[contenthash:8].css';\\n      return config;\\n    },\\n  },\\n};\\n```\\n\\n\u66f4\u591a\u914d\u7f6e\u7ec6\u8282\u53ef\u53c2\u8003 [mini-css-extract-plugin](https://github.com/webpack-contrib/mini-css-extract-plugin)\u3002\\n\"";function a(s){const n=Object.assign({ul:"ul",li:"li",code:"code",div:"div",button:"button",pre:"pre",span:"span",p:"p",a:"a",h3:"h3"},s.components);return(0,e.jsxs)(e.Fragment,{children:[(0,e.jsxs)(n.ul,{children:["\n",(0,e.jsxs)(n.li,{children:["Type: ",(0,e.jsx)(n.code,{children:"Object | Function"})]}),"\n",(0,e.jsx)(n.li,{children:"Default:"}),"\n"]}),"\n",(0,e.jsxs)(n.div,{className:"language-js",children:[(0,e.jsx)(n.div,{className:""}),(0,e.jsxs)(n.div,{className:"modern-code-content",children:[(0,e.jsx)(n.button,{className:"copy"}),(0,e.jsx)(n.pre,{className:"shiki",style:{backgroundColor:"#2e3440ff"},children:(0,e.jsxs)(n.code,{children:[(0,e.jsxs)(n.span,{className:"line",children:[(0,e.jsx)(n.span,{style:{color:"#81A1C1"},children:"const"}),(0,e.jsx)(n.span,{style:{color:"#D8DEE9FF"},children:" "}),(0,e.jsx)(n.span,{style:{color:"#D8DEE9"},children:"defaultOptions"}),(0,e.jsx)(n.span,{style:{color:"#D8DEE9FF"},children:" "}),(0,e.jsx)(n.span,{style:{color:"#81A1C1"},children:"="}),(0,e.jsx)(n.span,{style:{color:"#D8DEE9FF"},children:" "}),(0,e.jsx)(n.span,{style:{color:"#ECEFF4"},children:"{"})]}),"\n",(0,e.jsxs)(n.span,{className:"line",children:[(0,e.jsx)(n.span,{style:{color:"#ECEFF4"},children:"  "}),(0,e.jsx)(n.span,{style:{color:"#616E88"},children:"// Loader \u914d\u7f6e"})]}),"\n",(0,e.jsxs)(n.span,{className:"line",children:[(0,e.jsx)(n.span,{style:{color:"#D8DEE9FF"},children:"  "}),(0,e.jsx)(n.span,{style:{color:"#88C0D0"},children:"loaderOptions"}),(0,e.jsx)(n.span,{style:{color:"#ECEFF4"},children:":"}),(0,e.jsx)(n.span,{style:{color:"#D8DEE9FF"},children:" "}),(0,e.jsx)(n.span,{style:{color:"#ECEFF4"},children:"{},"})]}),"\n",(0,e.jsxs)(n.span,{className:"line",children:[(0,e.jsx)(n.span,{style:{color:"#ECEFF4"},children:"  "}),(0,e.jsx)(n.span,{style:{color:"#616E88"},children:"// Plugin \u914d\u7f6e"})]}),"\n",(0,e.jsxs)(n.span,{className:"line",children:[(0,e.jsx)(n.span,{style:{color:"#D8DEE9FF"},children:"  "}),(0,e.jsx)(n.span,{style:{color:"#88C0D0"},children:"pluginOptions"}),(0,e.jsx)(n.span,{style:{color:"#ECEFF4"},children:":"}),(0,e.jsx)(n.span,{style:{color:"#D8DEE9FF"},children:" "}),(0,e.jsx)(n.span,{style:{color:"#ECEFF4"},children:"{"})]}),"\n",(0,e.jsxs)(n.span,{className:"line",children:[(0,e.jsx)(n.span,{style:{color:"#ECEFF4"},children:"    "}),(0,e.jsx)(n.span,{style:{color:"#616E88"},children:"// cssPath \u9ed8\u8ba4\u4e3a static/css, cssFilename \u9ed8\u8ba4\u4e3a [name].[contenthash:8].css"})]}),"\n",(0,e.jsxs)(n.span,{className:"line",children:[(0,e.jsx)(n.span,{style:{color:"#D8DEE9FF"},children:"    "}),(0,e.jsx)(n.span,{style:{color:"#88C0D0"},children:"filename"}),(0,e.jsx)(n.span,{style:{color:"#ECEFF4"},children:":"}),(0,e.jsx)(n.span,{style:{color:"#D8DEE9FF"},children:" "}),(0,e.jsx)(n.span,{style:{color:"#ECEFF4"},children:"`"}),(0,e.jsx)(n.span,{style:{color:"#81A1C1"},children:"${"}),(0,e.jsx)(n.span,{style:{color:"#D8DEE9"},children:"cssPath"}),(0,e.jsx)(n.span,{style:{color:"#81A1C1"},children:"}"}),(0,e.jsx)(n.span,{style:{color:"#A3BE8C"},children:"/"}),(0,e.jsx)(n.span,{style:{color:"#81A1C1"},children:"${"}),(0,e.jsx)(n.span,{style:{color:"#D8DEE9"},children:"cssFilename"}),(0,e.jsx)(n.span,{style:{color:"#81A1C1"},children:"}"}),(0,e.jsx)(n.span,{style:{color:"#ECEFF4"},children:"`"}),(0,e.jsx)(n.span,{style:{color:"#ECEFF4"},children:","})]}),"\n",(0,e.jsxs)(n.span,{className:"line",children:[(0,e.jsx)(n.span,{style:{color:"#D8DEE9FF"},children:"    "}),(0,e.jsx)(n.span,{style:{color:"#88C0D0"},children:"chunkFilename"}),(0,e.jsx)(n.span,{style:{color:"#ECEFF4"},children:":"}),(0,e.jsx)(n.span,{style:{color:"#D8DEE9FF"},children:" "}),(0,e.jsx)(n.span,{style:{color:"#ECEFF4"},children:"`"}),(0,e.jsx)(n.span,{style:{color:"#81A1C1"},children:"${"}),(0,e.jsx)(n.span,{style:{color:"#D8DEE9"},children:"cssPath"}),(0,e.jsx)(n.span,{style:{color:"#81A1C1"},children:"}"}),(0,e.jsx)(n.span,{style:{color:"#A3BE8C"},children:"/async/"}),(0,e.jsx)(n.span,{style:{color:"#81A1C1"},children:"${"}),(0,e.jsx)(n.span,{style:{color:"#D8DEE9"},children:"cssFilename"}),(0,e.jsx)(n.span,{style:{color:"#81A1C1"},children:"}"}),(0,e.jsx)(n.span,{style:{color:"#ECEFF4"},children:"`"}),(0,e.jsx)(n.span,{style:{color:"#ECEFF4"},children:","})]}),"\n",(0,e.jsxs)(n.span,{className:"line",children:[(0,e.jsx)(n.span,{style:{color:"#D8DEE9FF"},children:"    "}),(0,e.jsx)(n.span,{style:{color:"#88C0D0"},children:"ignoreOrder"}),(0,e.jsx)(n.span,{style:{color:"#ECEFF4"},children:":"}),(0,e.jsx)(n.span,{style:{color:"#D8DEE9FF"},children:" "}),(0,e.jsx)(n.span,{style:{color:"#81A1C1"},children:"true"}),(0,e.jsx)(n.span,{style:{color:"#ECEFF4"},children:","})]}),"\n",(0,e.jsxs)(n.span,{className:"line",children:[(0,e.jsx)(n.span,{style:{color:"#D8DEE9FF"},children:"  "}),(0,e.jsx)(n.span,{style:{color:"#ECEFF4"},children:"},"})]}),"\n",(0,e.jsxs)(n.span,{className:"line",children:[(0,e.jsx)(n.span,{style:{color:"#ECEFF4"},children:"}"}),(0,e.jsx)(n.span,{style:{color:"#81A1C1"},children:";"})]}),"\n",(0,e.jsx)(n.span,{className:"line"})]})})]})]}),"\n",(0,e.jsxs)(n.p,{children:["\u901a\u8fc7 ",(0,e.jsx)(n.code,{children:"tools.cssExtract"})," \u53ef\u4ee5\u66f4\u6539 ",(0,e.jsx)(n.a,{href:"https://github.com/webpack-contrib/mini-css-extract-plugin",target:"_blank",rel:"nofollow",children:"mini-css-extract-plugin"})," \u7684\u914d\u7f6e\u3002"]}),"\n",(0,e.jsxs)(n.h3,{id:"object-\u7c7b\u578b",children:[(0,e.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#object-\u7c7b\u578b",children:"#"}),"Object \u7c7b\u578b"]}),"\n",(0,e.jsx)(n.p,{children:"\u5f53\u6b64\u503c\u4e3a Object \u7c7b\u578b\u65f6\uff0c\u4e0e\u9ed8\u8ba4\u914d\u7f6e\u901a\u8fc7 Object.assign \u5408\u5e76\u3002\u6bd4\u5982\uff1a"}),"\n",(0,e.jsxs)(n.div,{className:"language-js",children:[(0,e.jsx)(n.div,{className:""}),(0,e.jsxs)(n.div,{className:"modern-code-content",children:[(0,e.jsx)(n.button,{className:"copy"}),(0,e.jsx)(n.pre,{className:"shiki",style:{backgroundColor:"#2e3440ff"},children:(0,e.jsxs)(n.code,{children:[(0,e.jsxs)(n.span,{className:"line",children:[(0,e.jsx)(n.span,{style:{color:"#81A1C1"},children:"export"}),(0,e.jsx)(n.span,{style:{color:"#D8DEE9FF"},children:" "}),(0,e.jsx)(n.span,{style:{color:"#81A1C1"},children:"default"}),(0,e.jsx)(n.span,{style:{color:"#D8DEE9FF"},children:" "}),(0,e.jsx)(n.span,{style:{color:"#ECEFF4"},children:"{"})]}),"\n",(0,e.jsxs)(n.span,{className:"line",children:[(0,e.jsx)(n.span,{style:{color:"#D8DEE9FF"},children:"  "}),(0,e.jsx)(n.span,{style:{color:"#88C0D0"},children:"tools"}),(0,e.jsx)(n.span,{style:{color:"#ECEFF4"},children:":"}),(0,e.jsx)(n.span,{style:{color:"#D8DEE9FF"},children:" "}),(0,e.jsx)(n.span,{style:{color:"#ECEFF4"},children:"{"})]}),"\n",(0,e.jsxs)(n.span,{className:"line",children:[(0,e.jsx)(n.span,{style:{color:"#D8DEE9FF"},children:"    "}),(0,e.jsx)(n.span,{style:{color:"#88C0D0"},children:"cssExtract"}),(0,e.jsx)(n.span,{style:{color:"#ECEFF4"},children:":"}),(0,e.jsx)(n.span,{style:{color:"#D8DEE9FF"},children:" "}),(0,e.jsx)(n.span,{style:{color:"#ECEFF4"},children:"{"})]}),"\n",(0,e.jsxs)(n.span,{className:"line",children:[(0,e.jsx)(n.span,{style:{color:"#D8DEE9FF"},children:"      "}),(0,e.jsx)(n.span,{style:{color:"#88C0D0"},children:"pluginOptions"}),(0,e.jsx)(n.span,{style:{color:"#ECEFF4"},children:":"}),(0,e.jsx)(n.span,{style:{color:"#D8DEE9FF"},children:" "}),(0,e.jsx)(n.span,{style:{color:"#ECEFF4"},children:"{"})]}),"\n",(0,e.jsxs)(n.span,{className:"line",children:[(0,e.jsx)(n.span,{style:{color:"#D8DEE9FF"},children:"        "}),(0,e.jsx)(n.span,{style:{color:"#88C0D0"},children:"filename"}),(0,e.jsx)(n.span,{style:{color:"#ECEFF4"},children:":"}),(0,e.jsx)(n.span,{style:{color:"#D8DEE9FF"},children:" "}),(0,e.jsx)(n.span,{style:{color:"#ECEFF4"},children:"'"}),(0,e.jsx)(n.span,{style:{color:"#A3BE8C"},children:"static/css/[name].[contenthash:8].css"}),(0,e.jsx)(n.span,{style:{color:"#ECEFF4"},children:"'"}),(0,e.jsx)(n.span,{style:{color:"#ECEFF4"},children:","})]}),"\n",(0,e.jsxs)(n.span,{className:"line",children:[(0,e.jsx)(n.span,{style:{color:"#D8DEE9FF"},children:"      "}),(0,e.jsx)(n.span,{style:{color:"#ECEFF4"},children:"},"})]}),"\n",(0,e.jsxs)(n.span,{className:"line",children:[(0,e.jsx)(n.span,{style:{color:"#D8DEE9FF"},children:"    "}),(0,e.jsx)(n.span,{style:{color:"#ECEFF4"},children:"},"})]}),"\n",(0,e.jsxs)(n.span,{className:"line",children:[(0,e.jsx)(n.span,{style:{color:"#D8DEE9FF"},children:"  "}),(0,e.jsx)(n.span,{style:{color:"#ECEFF4"},children:"},"})]}),"\n",(0,e.jsxs)(n.span,{className:"line",children:[(0,e.jsx)(n.span,{style:{color:"#ECEFF4"},children:"}"}),(0,e.jsx)(n.span,{style:{color:"#81A1C1"},children:";"})]}),"\n",(0,e.jsx)(n.span,{className:"line"})]})})]})]}),"\n",(0,e.jsxs)(n.h3,{id:"function-\u7c7b\u578b",children:[(0,e.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#function-\u7c7b\u578b",children:"#"}),"Function \u7c7b\u578b"]}),"\n",(0,e.jsx)(n.p,{children:"\u5f53\u6b64\u503c\u4e3a Function \u7c7b\u578b\u65f6\uff0c\u9ed8\u8ba4\u914d\u7f6e\u4f5c\u4e3a\u7b2c\u4e00\u4e2a\u53c2\u6570\u4f20\u5165\uff0c\u4f60\u53ef\u4ee5\u76f4\u63a5\u4fee\u6539\u914d\u7f6e\u5bf9\u8c61\uff0c\u4e5f\u53ef\u4ee5\u8fd4\u56de\u4e00\u4e2a\u5bf9\u8c61\u4f5c\u4e3a\u6700\u7ec8\u914d\u7f6e\u3002\u6bd4\u5982\uff1a"}),"\n",(0,e.jsxs)(n.div,{className:"language-js",children:[(0,e.jsx)(n.div,{className:""}),(0,e.jsxs)(n.div,{className:"modern-code-content",children:[(0,e.jsx)(n.button,{className:"copy"}),(0,e.jsx)(n.pre,{className:"shiki",style:{backgroundColor:"#2e3440ff"},children:(0,e.jsxs)(n.code,{children:[(0,e.jsxs)(n.span,{className:"line",children:[(0,e.jsx)(n.span,{style:{color:"#81A1C1"},children:"export"}),(0,e.jsx)(n.span,{style:{color:"#D8DEE9FF"},children:" "}),(0,e.jsx)(n.span,{style:{color:"#81A1C1"},children:"default"}),(0,e.jsx)(n.span,{style:{color:"#D8DEE9FF"},children:" "}),(0,e.jsx)(n.span,{style:{color:"#ECEFF4"},children:"{"})]}),"\n",(0,e.jsxs)(n.span,{className:"line",children:[(0,e.jsx)(n.span,{style:{color:"#D8DEE9FF"},children:"  "}),(0,e.jsx)(n.span,{style:{color:"#88C0D0"},children:"tools"}),(0,e.jsx)(n.span,{style:{color:"#ECEFF4"},children:":"}),(0,e.jsx)(n.span,{style:{color:"#D8DEE9FF"},children:" "}),(0,e.jsx)(n.span,{style:{color:"#ECEFF4"},children:"{"})]}),"\n",(0,e.jsxs)(n.span,{className:"line",children:[(0,e.jsx)(n.span,{style:{color:"#D8DEE9FF"},children:"    "}),(0,e.jsx)(n.span,{style:{color:"#88C0D0"},children:"cssExtract"}),(0,e.jsx)(n.span,{style:{color:"#ECEFF4"},children:":"}),(0,e.jsx)(n.span,{style:{color:"#D8DEE9FF"},children:" "}),(0,e.jsx)(n.span,{style:{color:"#D8DEE9"},children:"config"}),(0,e.jsx)(n.span,{style:{color:"#D8DEE9FF"},children:" "}),(0,e.jsx)(n.span,{style:{color:"#81A1C1"},children:"=>"}),(0,e.jsx)(n.span,{style:{color:"#D8DEE9FF"},children:" "}),(0,e.jsx)(n.span,{style:{color:"#ECEFF4"},children:"{"})]}),"\n",(0,e.jsxs)(n.span,{className:"line",children:[(0,e.jsx)(n.span,{style:{color:"#D8DEE9FF"},children:"      "}),(0,e.jsx)(n.span,{style:{color:"#D8DEE9"},children:"config"}),(0,e.jsx)(n.span,{style:{color:"#ECEFF4"},children:"."}),(0,e.jsx)(n.span,{style:{color:"#D8DEE9"},children:"pluginOptions"}),(0,e.jsx)(n.span,{style:{color:"#ECEFF4"},children:"."}),(0,e.jsx)(n.span,{style:{color:"#D8DEE9"},children:"filename"}),(0,e.jsx)(n.span,{style:{color:"#D8DEE9FF"},children:" "}),(0,e.jsx)(n.span,{style:{color:"#81A1C1"},children:"="}),(0,e.jsx)(n.span,{style:{color:"#D8DEE9FF"},children:" "}),(0,e.jsx)(n.span,{style:{color:"#ECEFF4"},children:"'"}),(0,e.jsx)(n.span,{style:{color:"#A3BE8C"},children:"static/css/[name].[contenthash:8].css"}),(0,e.jsx)(n.span,{style:{color:"#ECEFF4"},children:"'"}),(0,e.jsx)(n.span,{style:{color:"#81A1C1"},children:";"})]}),"\n",(0,e.jsxs)(n.span,{className:"line",children:[(0,e.jsx)(n.span,{style:{color:"#D8DEE9FF"},children:"      "}),(0,e.jsx)(n.span,{style:{color:"#81A1C1"},children:"return"}),(0,e.jsx)(n.span,{style:{color:"#D8DEE9FF"},children:" "}),(0,e.jsx)(n.span,{style:{color:"#D8DEE9"},children:"config"}),(0,e.jsx)(n.span,{style:{color:"#81A1C1"},children:";"})]}),"\n",(0,e.jsxs)(n.span,{className:"line",children:[(0,e.jsx)(n.span,{style:{color:"#D8DEE9FF"},children:"    "}),(0,e.jsx)(n.span,{style:{color:"#ECEFF4"},children:"},"})]}),"\n",(0,e.jsxs)(n.span,{className:"line",children:[(0,e.jsx)(n.span,{style:{color:"#D8DEE9FF"},children:"  "}),(0,e.jsx)(n.span,{style:{color:"#ECEFF4"},children:"},"})]}),"\n",(0,e.jsxs)(n.span,{className:"line",children:[(0,e.jsx)(n.span,{style:{color:"#ECEFF4"},children:"}"}),(0,e.jsx)(n.span,{style:{color:"#81A1C1"},children:";"})]}),"\n",(0,e.jsx)(n.span,{className:"line"})]})})]})]}),"\n",(0,e.jsxs)(n.p,{children:["\u66f4\u591a\u914d\u7f6e\u7ec6\u8282\u53ef\u53c2\u8003 ",(0,e.jsx)(n.a,{href:"https://github.com/webpack-contrib/mini-css-extract-plugin",target:"_blank",rel:"nofollow",children:"mini-css-extract-plugin"}),"\u3002"]})]})}n.default=function(s={}){const{wrapper:n}=s.components||{};return n?(0,e.jsx)(n,Object.assign({},s,{children:(0,e.jsx)(a,s)})):a(s)}}}]);