"use strict";(self.webpackChunk_modern_js_builder_doc=self.webpackChunk_modern_js_builder_doc||[]).push([[8161],{1055:function(s,n,l){l.r(n),l.d(n,{content:function(){return a},frontmatter:function(){return r},toc:function(){return c}});var e=l(39980);const r=void 0,c=[{id:"\u5ef6\u8fdf\u7f16\u8bd1\u5f02\u6b65\u6a21\u5757",text:"\u5ef6\u8fdf\u7f16\u8bd1\u5f02\u6b65\u6a21\u5757",depth:3},{id:"\u5ef6\u8fdf\u7f16\u8bd1\u5165\u53e3\u6a21\u5757",text:"\u5ef6\u8fdf\u7f16\u8bd1\u5165\u53e3\u6a21\u5757",depth:3},{id:"\u5c40\u9650\u6027",text:"\u5c40\u9650\u6027",depth:3},{id:"\u7981\u7528\u62c6\u5305\u89c4\u5219",text:"\u7981\u7528\u62c6\u5305\u89c4\u5219",depth:4},{id:"\u4f7f\u7528\u4ee3\u7406",text:"\u4f7f\u7528\u4ee3\u7406",depth:4}],a='"- Type:\\n\\n```ts\\ntype LazyCompilationOptions =\\n  | boolean\\n  | {\\n      // \u662f\u5426\u4e3a\u5f02\u6b65\u6a21\u5757\u5f00\u542f\u5ef6\u8fdf\u7f16\u8bd1\\n      imports?: boolean;\\n      // \u662f\u5426\u4e3a\u5165\u53e3\u6a21\u5757\u5f00\u542f\u5ef6\u8fdf\u7f16\u8bd1\\n      entries?: boolean;\\n    };\\n```\\n\\n- Default: `false`\\n\\n\u7528\u4e8e\u5f00\u542f\u5ef6\u8fdf\u7f16\u8bd1\uff08\u5373\u6309\u9700\u7f16\u8bd1\uff09\u7684\u80fd\u529b\u3002\u5f53\u5f00\u542f\u6b64\u914d\u7f6e\u9879\u65f6\uff0cBuilder \u4f1a\u8fdb\u884c\u5ef6\u8fdf\u7f16\u8bd1\uff0c\u63d0\u5347\u9879\u76ee\u7684\u7f16\u8bd1\u542f\u52a8\u901f\u5ea6\u3002\\n\\n\u5ef6\u8fdf\u7f16\u8bd1\u53ea\u5728\u5f00\u53d1\u73af\u5883\u4e0b\u751f\u6548\u3002\\n\\n### \u5ef6\u8fdf\u7f16\u8bd1\u5f02\u6b65\u6a21\u5757\\n\\n\u5ef6\u8fdf\u7f16\u8bd1 [Dynamic Import](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/import) \u5f15\u5165\u7684\u5f02\u6b65\u6a21\u5757\uff1a\\n\\n```ts\\nexport default {\\n  experiments: {\\n    lazyCompilation: {\\n      imports: true,\\n      entries: false,\\n    },\\n  },\\n};\\n```\\n\\n\u5f00\u542f `imports` \u9009\u9879\u540e\uff0c\u6240\u6709\u7684\u5f02\u6b65\u6a21\u5757\u53ea\u6709\u5728\u88ab\u8bf7\u6c42\u65f6\u624d\u89e6\u53d1\u7f16\u8bd1\u3002\u5982\u679c\u4f60\u7684\u9879\u76ee\u662f\u4e00\u4e2a\u5355\u9875\u5e94\u7528\uff08SPA\uff09\uff0c\u5e76\u901a\u8fc7 Dynamic Import \u8fdb\u884c\u4e86\u8def\u7531\u62c6\u5206\uff0c\u90a3\u4e48\u4f1a\u6709\u660e\u663e\u7684\u7f16\u8bd1\u63d0\u901f\u6548\u679c\u3002\\n\\n### \u5ef6\u8fdf\u7f16\u8bd1\u5165\u53e3\u6a21\u5757\\n\\n\u9664\u4e86\u5ef6\u8fdf\u7f16\u8bd1\u5f02\u6b65\u6a21\u5757\uff0c\u4f60\u4e5f\u53ef\u4ee5\u9009\u62e9\u540c\u65f6\u5ef6\u8fdf\u7f16\u8bd1\u5165\u53e3\u6a21\u5757\u548c\u5f02\u6b65\u6a21\u5757\u3002\\n\\n```ts\\nexport default {\\n  experiments: {\\n    lazyCompilation: {\\n      imports: true,\\n      entries: true,\\n    },\\n  },\\n};\\n```\\n\\n\u4ee5\u4e0a\u914d\u7f6e\u4e5f\u53ef\u4ee5\u7b80\u5316\u4e3a\uff1a\\n\\n```ts\\nexport default {\\n  experiments: {\\n    lazyCompilation: true,\\n  },\\n};\\n```\\n\\n\u5f00\u542f `entries` \u9009\u9879\u540e\uff0c\u5f53\u542f\u52a8\u7f16\u8bd1\u65f6\uff0c\u4e0d\u4f1a\u7f16\u8bd1\u6240\u6709\u7684\u9875\u9762\uff0c\u800c\u662f\u4ec5\u5728\u8def\u7531\u8df3\u8f6c\u5230\u5bf9\u5e94\u7684\u9875\u9762\u65f6\uff0c\u624d\u5bf9\u8be5\u9875\u9762\u8fdb\u884c\u7f16\u8bd1\u3002\\n\\n\u4f7f\u7528\u5ef6\u8fdf\u7f16\u8bd1\u5165\u53e3\u6a21\u5757\u65f6\uff0c\u6709\u4ee5\u4e0b\u6ce8\u610f\u4e8b\u9879\uff1a\\n\\n- \u53ea\u9002\u7528\u4e8e\u591a\u9875\u5e94\u7528\uff08MPA\uff09\uff0c\u5bf9\u5355\u9875\u5e94\u7528\uff08SPA\uff09\u6ca1\u6709\u4f18\u5316\u6548\u679c\u3002\\n- \u5f53\u4f60\u8bbf\u95ee\u4e00\u4e2a\u9875\u9762\u65f6\uff0c\u7531\u4e8e\u8981\u7b49\u5f85\u9875\u9762\u7f16\u8bd1\u5b8c\u6210\uff0c\u4f1a\u6709\u4e00\u6bb5\u65f6\u95f4\u7684\u767d\u5c4f\u3002\\n\\n### \u5c40\u9650\u6027\\n\\n#### \u7981\u7528\u62c6\u5305\u89c4\u5219\\n\\n\u5f53\u4f60\u5f00\u542f\u5ef6\u8fdf\u7f16\u8bd1\u65f6\uff0c\u4e3a\u4e86\u4fdd\u8bc1\u7f16\u8bd1\u7ed3\u679c\u6b63\u5e38\uff0cBuilder \u4f1a\u5728\u5f00\u53d1\u73af\u5883\u4e0b\u7981\u7528\u62c6\u5305\u89c4\u5219\u3002\u8fd9\u4e0d\u4f1a\u5f71\u54cd\u751f\u4ea7\u73af\u5883\u7684\u6253\u5305\u4ea7\u7269\uff0c\u4f46\u4f1a\u5bfc\u81f4\u5f00\u53d1\u73af\u5883\u548c\u751f\u4ea7\u73af\u5883\u7684\u6253\u5305\u4ea7\u7269\u6709\u4e00\u5b9a\u5dee\u5f02\u3002\\n\\n#### \u4f7f\u7528\u4ee3\u7406\\n\\nLazy Compilation \u4f9d\u8d56 webpack \u5728\u672c\u5730\u542f\u52a8\u7684\u5f00\u53d1\u670d\u52a1\u5668\uff0c\u5f53\u4f60\u5c06\u67d0\u4e2a\u57df\u540d\u4ee3\u7406\u5230 localhost \u8fdb\u884c\u5f00\u53d1\u65f6\uff0cLazy Compilation \u5c06\u65e0\u6cd5\u6b63\u5e38\u5de5\u4f5c\u3002\u56e0\u6b64\uff0c\u5982\u679c\u4f60\u9700\u8981\u4f7f\u7528\u4ee3\u7406\u65f6\uff0c\u8bf7\u7981\u7528 Lazy Compilation\u3002\\n"';function o(s){const n=Object.assign({ul:"ul",li:"li",div:"div",button:"button",pre:"pre",code:"code",span:"span",p:"p",h3:"h3",a:"a",h4:"h4"},s.components);return(0,e.jsxs)(e.Fragment,{children:[(0,e.jsxs)(n.ul,{children:["\n",(0,e.jsx)(n.li,{children:"Type:"}),"\n"]}),"\n",(0,e.jsxs)(n.div,{className:"language-ts",children:[(0,e.jsx)(n.div,{className:""}),(0,e.jsxs)(n.div,{className:"modern-code-content",children:[(0,e.jsx)(n.button,{className:"copy"}),(0,e.jsx)(n.pre,{className:"shiki",style:{backgroundColor:"#2e3440ff"},children:(0,e.jsxs)(n.code,{children:[(0,e.jsxs)(n.span,{className:"line",children:[(0,e.jsx)(n.span,{style:{color:"#81A1C1"},children:"type"}),(0,e.jsx)(n.span,{style:{color:"#D8DEE9FF"},children:" "}),(0,e.jsx)(n.span,{style:{color:"#8FBCBB"},children:"LazyCompilationOptions"}),(0,e.jsx)(n.span,{style:{color:"#D8DEE9FF"},children:" "}),(0,e.jsx)(n.span,{style:{color:"#81A1C1"},children:"="})]}),"\n",(0,e.jsxs)(n.span,{className:"line",children:[(0,e.jsx)(n.span,{style:{color:"#D8DEE9FF"},children:"  "}),(0,e.jsx)(n.span,{style:{color:"#81A1C1"},children:"|"}),(0,e.jsx)(n.span,{style:{color:"#D8DEE9FF"},children:" "}),(0,e.jsx)(n.span,{style:{color:"#8FBCBB"},children:"boolean"})]}),"\n",(0,e.jsxs)(n.span,{className:"line",children:[(0,e.jsx)(n.span,{style:{color:"#D8DEE9FF"},children:"  "}),(0,e.jsx)(n.span,{style:{color:"#81A1C1"},children:"|"}),(0,e.jsx)(n.span,{style:{color:"#D8DEE9FF"},children:" "}),(0,e.jsx)(n.span,{style:{color:"#ECEFF4"},children:"{"})]}),"\n",(0,e.jsxs)(n.span,{className:"line",children:[(0,e.jsx)(n.span,{style:{color:"#ECEFF4"},children:"      "}),(0,e.jsx)(n.span,{style:{color:"#616E88"},children:"// \u662f\u5426\u4e3a\u5f02\u6b65\u6a21\u5757\u5f00\u542f\u5ef6\u8fdf\u7f16\u8bd1"})]}),"\n",(0,e.jsxs)(n.span,{className:"line",children:[(0,e.jsx)(n.span,{style:{color:"#D8DEE9FF"},children:"      imports"}),(0,e.jsx)(n.span,{style:{color:"#81A1C1"},children:"?:"}),(0,e.jsx)(n.span,{style:{color:"#D8DEE9FF"},children:" "}),(0,e.jsx)(n.span,{style:{color:"#8FBCBB"},children:"boolean"}),(0,e.jsx)(n.span,{style:{color:"#81A1C1"},children:";"})]}),"\n",(0,e.jsxs)(n.span,{className:"line",children:[(0,e.jsx)(n.span,{style:{color:"#ECEFF4"},children:"      "}),(0,e.jsx)(n.span,{style:{color:"#616E88"},children:"// \u662f\u5426\u4e3a\u5165\u53e3\u6a21\u5757\u5f00\u542f\u5ef6\u8fdf\u7f16\u8bd1"})]}),"\n",(0,e.jsxs)(n.span,{className:"line",children:[(0,e.jsx)(n.span,{style:{color:"#D8DEE9FF"},children:"      entries"}),(0,e.jsx)(n.span,{style:{color:"#81A1C1"},children:"?:"}),(0,e.jsx)(n.span,{style:{color:"#D8DEE9FF"},children:" "}),(0,e.jsx)(n.span,{style:{color:"#8FBCBB"},children:"boolean"}),(0,e.jsx)(n.span,{style:{color:"#81A1C1"},children:";"})]}),"\n",(0,e.jsxs)(n.span,{className:"line",children:[(0,e.jsx)(n.span,{style:{color:"#D8DEE9FF"},children:"    "}),(0,e.jsx)(n.span,{style:{color:"#ECEFF4"},children:"}"}),(0,e.jsx)(n.span,{style:{color:"#81A1C1"},children:";"})]}),"\n",(0,e.jsx)(n.span,{className:"line"})]})})]})]}),"\n",(0,e.jsxs)(n.ul,{children:["\n",(0,e.jsxs)(n.li,{children:["Default: ",(0,e.jsx)(n.code,{children:"false"})]}),"\n"]}),"\n",(0,e.jsx)(n.p,{children:"\u7528\u4e8e\u5f00\u542f\u5ef6\u8fdf\u7f16\u8bd1\uff08\u5373\u6309\u9700\u7f16\u8bd1\uff09\u7684\u80fd\u529b\u3002\u5f53\u5f00\u542f\u6b64\u914d\u7f6e\u9879\u65f6\uff0cBuilder \u4f1a\u8fdb\u884c\u5ef6\u8fdf\u7f16\u8bd1\uff0c\u63d0\u5347\u9879\u76ee\u7684\u7f16\u8bd1\u542f\u52a8\u901f\u5ea6\u3002"}),"\n",(0,e.jsx)(n.p,{children:"\u5ef6\u8fdf\u7f16\u8bd1\u53ea\u5728\u5f00\u53d1\u73af\u5883\u4e0b\u751f\u6548\u3002"}),"\n",(0,e.jsxs)(n.h3,{id:"\u5ef6\u8fdf\u7f16\u8bd1\u5f02\u6b65\u6a21\u5757",children:[(0,e.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#\u5ef6\u8fdf\u7f16\u8bd1\u5f02\u6b65\u6a21\u5757",children:"#"}),"\u5ef6\u8fdf\u7f16\u8bd1\u5f02\u6b65\u6a21\u5757"]}),"\n",(0,e.jsxs)(n.p,{children:["\u5ef6\u8fdf\u7f16\u8bd1 ",(0,e.jsx)(n.a,{href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/import",target:"_blank",rel:"nofollow",children:"Dynamic Import"})," \u5f15\u5165\u7684\u5f02\u6b65\u6a21\u5757\uff1a"]}),"\n",(0,e.jsxs)(n.div,{className:"language-ts",children:[(0,e.jsx)(n.div,{className:""}),(0,e.jsxs)(n.div,{className:"modern-code-content",children:[(0,e.jsx)(n.button,{className:"copy"}),(0,e.jsx)(n.pre,{className:"shiki",style:{backgroundColor:"#2e3440ff"},children:(0,e.jsxs)(n.code,{children:[(0,e.jsxs)(n.span,{className:"line",children:[(0,e.jsx)(n.span,{style:{color:"#81A1C1"},children:"export"}),(0,e.jsx)(n.span,{style:{color:"#D8DEE9FF"},children:" "}),(0,e.jsx)(n.span,{style:{color:"#81A1C1"},children:"default"}),(0,e.jsx)(n.span,{style:{color:"#D8DEE9FF"},children:" "}),(0,e.jsx)(n.span,{style:{color:"#ECEFF4"},children:"{"})]}),"\n",(0,e.jsxs)(n.span,{className:"line",children:[(0,e.jsx)(n.span,{style:{color:"#D8DEE9FF"},children:"  "}),(0,e.jsx)(n.span,{style:{color:"#D8DEE9"},children:"experiments"}),(0,e.jsx)(n.span,{style:{color:"#ECEFF4"},children:":"}),(0,e.jsx)(n.span,{style:{color:"#D8DEE9FF"},children:" "}),(0,e.jsx)(n.span,{style:{color:"#ECEFF4"},children:"{"})]}),"\n",(0,e.jsxs)(n.span,{className:"line",children:[(0,e.jsx)(n.span,{style:{color:"#D8DEE9FF"},children:"    "}),(0,e.jsx)(n.span,{style:{color:"#D8DEE9"},children:"lazyCompilation"}),(0,e.jsx)(n.span,{style:{color:"#ECEFF4"},children:":"}),(0,e.jsx)(n.span,{style:{color:"#D8DEE9FF"},children:" "}),(0,e.jsx)(n.span,{style:{color:"#ECEFF4"},children:"{"})]}),"\n",(0,e.jsxs)(n.span,{className:"line",children:[(0,e.jsx)(n.span,{style:{color:"#D8DEE9FF"},children:"      "}),(0,e.jsx)(n.span,{style:{color:"#D8DEE9"},children:"imports"}),(0,e.jsx)(n.span,{style:{color:"#ECEFF4"},children:":"}),(0,e.jsx)(n.span,{style:{color:"#D8DEE9FF"},children:" "}),(0,e.jsx)(n.span,{style:{color:"#81A1C1"},children:"true"}),(0,e.jsx)(n.span,{style:{color:"#ECEFF4"},children:","})]}),"\n",(0,e.jsxs)(n.span,{className:"line",children:[(0,e.jsx)(n.span,{style:{color:"#D8DEE9FF"},children:"      "}),(0,e.jsx)(n.span,{style:{color:"#D8DEE9"},children:"entries"}),(0,e.jsx)(n.span,{style:{color:"#ECEFF4"},children:":"}),(0,e.jsx)(n.span,{style:{color:"#D8DEE9FF"},children:" "}),(0,e.jsx)(n.span,{style:{color:"#81A1C1"},children:"false"}),(0,e.jsx)(n.span,{style:{color:"#ECEFF4"},children:","})]}),"\n",(0,e.jsxs)(n.span,{className:"line",children:[(0,e.jsx)(n.span,{style:{color:"#D8DEE9FF"},children:"    "}),(0,e.jsx)(n.span,{style:{color:"#ECEFF4"},children:"},"})]}),"\n",(0,e.jsxs)(n.span,{className:"line",children:[(0,e.jsx)(n.span,{style:{color:"#D8DEE9FF"},children:"  "}),(0,e.jsx)(n.span,{style:{color:"#ECEFF4"},children:"},"})]}),"\n",(0,e.jsxs)(n.span,{className:"line",children:[(0,e.jsx)(n.span,{style:{color:"#ECEFF4"},children:"}"}),(0,e.jsx)(n.span,{style:{color:"#81A1C1"},children:";"})]}),"\n",(0,e.jsx)(n.span,{className:"line"})]})})]})]}),"\n",(0,e.jsxs)(n.p,{children:["\u5f00\u542f ",(0,e.jsx)(n.code,{children:"imports"})," \u9009\u9879\u540e\uff0c\u6240\u6709\u7684\u5f02\u6b65\u6a21\u5757\u53ea\u6709\u5728\u88ab\u8bf7\u6c42\u65f6\u624d\u89e6\u53d1\u7f16\u8bd1\u3002\u5982\u679c\u4f60\u7684\u9879\u76ee\u662f\u4e00\u4e2a\u5355\u9875\u5e94\u7528\uff08SPA\uff09\uff0c\u5e76\u901a\u8fc7 Dynamic Import \u8fdb\u884c\u4e86\u8def\u7531\u62c6\u5206\uff0c\u90a3\u4e48\u4f1a\u6709\u660e\u663e\u7684\u7f16\u8bd1\u63d0\u901f\u6548\u679c\u3002"]}),"\n",(0,e.jsxs)(n.h3,{id:"\u5ef6\u8fdf\u7f16\u8bd1\u5165\u53e3\u6a21\u5757",children:[(0,e.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#\u5ef6\u8fdf\u7f16\u8bd1\u5165\u53e3\u6a21\u5757",children:"#"}),"\u5ef6\u8fdf\u7f16\u8bd1\u5165\u53e3\u6a21\u5757"]}),"\n",(0,e.jsx)(n.p,{children:"\u9664\u4e86\u5ef6\u8fdf\u7f16\u8bd1\u5f02\u6b65\u6a21\u5757\uff0c\u4f60\u4e5f\u53ef\u4ee5\u9009\u62e9\u540c\u65f6\u5ef6\u8fdf\u7f16\u8bd1\u5165\u53e3\u6a21\u5757\u548c\u5f02\u6b65\u6a21\u5757\u3002"}),"\n",(0,e.jsxs)(n.div,{className:"language-ts",children:[(0,e.jsx)(n.div,{className:""}),(0,e.jsxs)(n.div,{className:"modern-code-content",children:[(0,e.jsx)(n.button,{className:"copy"}),(0,e.jsx)(n.pre,{className:"shiki",style:{backgroundColor:"#2e3440ff"},children:(0,e.jsxs)(n.code,{children:[(0,e.jsxs)(n.span,{className:"line",children:[(0,e.jsx)(n.span,{style:{color:"#81A1C1"},children:"export"}),(0,e.jsx)(n.span,{style:{color:"#D8DEE9FF"},children:" "}),(0,e.jsx)(n.span,{style:{color:"#81A1C1"},children:"default"}),(0,e.jsx)(n.span,{style:{color:"#D8DEE9FF"},children:" "}),(0,e.jsx)(n.span,{style:{color:"#ECEFF4"},children:"{"})]}),"\n",(0,e.jsxs)(n.span,{className:"line",children:[(0,e.jsx)(n.span,{style:{color:"#D8DEE9FF"},children:"  "}),(0,e.jsx)(n.span,{style:{color:"#D8DEE9"},children:"experiments"}),(0,e.jsx)(n.span,{style:{color:"#ECEFF4"},children:":"}),(0,e.jsx)(n.span,{style:{color:"#D8DEE9FF"},children:" "}),(0,e.jsx)(n.span,{style:{color:"#ECEFF4"},children:"{"})]}),"\n",(0,e.jsxs)(n.span,{className:"line",children:[(0,e.jsx)(n.span,{style:{color:"#D8DEE9FF"},children:"    "}),(0,e.jsx)(n.span,{style:{color:"#D8DEE9"},children:"lazyCompilation"}),(0,e.jsx)(n.span,{style:{color:"#ECEFF4"},children:":"}),(0,e.jsx)(n.span,{style:{color:"#D8DEE9FF"},children:" "}),(0,e.jsx)(n.span,{style:{color:"#ECEFF4"},children:"{"})]}),"\n",(0,e.jsxs)(n.span,{className:"line",children:[(0,e.jsx)(n.span,{style:{color:"#D8DEE9FF"},children:"      "}),(0,e.jsx)(n.span,{style:{color:"#D8DEE9"},children:"imports"}),(0,e.jsx)(n.span,{style:{color:"#ECEFF4"},children:":"}),(0,e.jsx)(n.span,{style:{color:"#D8DEE9FF"},children:" "}),(0,e.jsx)(n.span,{style:{color:"#81A1C1"},children:"true"}),(0,e.jsx)(n.span,{style:{color:"#ECEFF4"},children:","})]}),"\n",(0,e.jsxs)(n.span,{className:"line",children:[(0,e.jsx)(n.span,{style:{color:"#D8DEE9FF"},children:"      "}),(0,e.jsx)(n.span,{style:{color:"#D8DEE9"},children:"entries"}),(0,e.jsx)(n.span,{style:{color:"#ECEFF4"},children:":"}),(0,e.jsx)(n.span,{style:{color:"#D8DEE9FF"},children:" "}),(0,e.jsx)(n.span,{style:{color:"#81A1C1"},children:"true"}),(0,e.jsx)(n.span,{style:{color:"#ECEFF4"},children:","})]}),"\n",(0,e.jsxs)(n.span,{className:"line",children:[(0,e.jsx)(n.span,{style:{color:"#D8DEE9FF"},children:"    "}),(0,e.jsx)(n.span,{style:{color:"#ECEFF4"},children:"},"})]}),"\n",(0,e.jsxs)(n.span,{className:"line",children:[(0,e.jsx)(n.span,{style:{color:"#D8DEE9FF"},children:"  "}),(0,e.jsx)(n.span,{style:{color:"#ECEFF4"},children:"},"})]}),"\n",(0,e.jsxs)(n.span,{className:"line",children:[(0,e.jsx)(n.span,{style:{color:"#ECEFF4"},children:"}"}),(0,e.jsx)(n.span,{style:{color:"#81A1C1"},children:";"})]}),"\n",(0,e.jsx)(n.span,{className:"line"})]})})]})]}),"\n",(0,e.jsx)(n.p,{children:"\u4ee5\u4e0a\u914d\u7f6e\u4e5f\u53ef\u4ee5\u7b80\u5316\u4e3a\uff1a"}),"\n",(0,e.jsxs)(n.div,{className:"language-ts",children:[(0,e.jsx)(n.div,{className:""}),(0,e.jsxs)(n.div,{className:"modern-code-content",children:[(0,e.jsx)(n.button,{className:"copy"}),(0,e.jsx)(n.pre,{className:"shiki",style:{backgroundColor:"#2e3440ff"},children:(0,e.jsxs)(n.code,{children:[(0,e.jsxs)(n.span,{className:"line",children:[(0,e.jsx)(n.span,{style:{color:"#81A1C1"},children:"export"}),(0,e.jsx)(n.span,{style:{color:"#D8DEE9FF"},children:" "}),(0,e.jsx)(n.span,{style:{color:"#81A1C1"},children:"default"}),(0,e.jsx)(n.span,{style:{color:"#D8DEE9FF"},children:" "}),(0,e.jsx)(n.span,{style:{color:"#ECEFF4"},children:"{"})]}),"\n",(0,e.jsxs)(n.span,{className:"line",children:[(0,e.jsx)(n.span,{style:{color:"#D8DEE9FF"},children:"  "}),(0,e.jsx)(n.span,{style:{color:"#D8DEE9"},children:"experiments"}),(0,e.jsx)(n.span,{style:{color:"#ECEFF4"},children:":"}),(0,e.jsx)(n.span,{style:{color:"#D8DEE9FF"},children:" "}),(0,e.jsx)(n.span,{style:{color:"#ECEFF4"},children:"{"})]}),"\n",(0,e.jsxs)(n.span,{className:"line",children:[(0,e.jsx)(n.span,{style:{color:"#D8DEE9FF"},children:"    "}),(0,e.jsx)(n.span,{style:{color:"#D8DEE9"},children:"lazyCompilation"}),(0,e.jsx)(n.span,{style:{color:"#ECEFF4"},children:":"}),(0,e.jsx)(n.span,{style:{color:"#D8DEE9FF"},children:" "}),(0,e.jsx)(n.span,{style:{color:"#81A1C1"},children:"true"}),(0,e.jsx)(n.span,{style:{color:"#ECEFF4"},children:","})]}),"\n",(0,e.jsxs)(n.span,{className:"line",children:[(0,e.jsx)(n.span,{style:{color:"#D8DEE9FF"},children:"  "}),(0,e.jsx)(n.span,{style:{color:"#ECEFF4"},children:"},"})]}),"\n",(0,e.jsxs)(n.span,{className:"line",children:[(0,e.jsx)(n.span,{style:{color:"#ECEFF4"},children:"}"}),(0,e.jsx)(n.span,{style:{color:"#81A1C1"},children:";"})]}),"\n",(0,e.jsx)(n.span,{className:"line"})]})})]})]}),"\n",(0,e.jsxs)(n.p,{children:["\u5f00\u542f ",(0,e.jsx)(n.code,{children:"entries"})," \u9009\u9879\u540e\uff0c\u5f53\u542f\u52a8\u7f16\u8bd1\u65f6\uff0c\u4e0d\u4f1a\u7f16\u8bd1\u6240\u6709\u7684\u9875\u9762\uff0c\u800c\u662f\u4ec5\u5728\u8def\u7531\u8df3\u8f6c\u5230\u5bf9\u5e94\u7684\u9875\u9762\u65f6\uff0c\u624d\u5bf9\u8be5\u9875\u9762\u8fdb\u884c\u7f16\u8bd1\u3002"]}),"\n",(0,e.jsx)(n.p,{children:"\u4f7f\u7528\u5ef6\u8fdf\u7f16\u8bd1\u5165\u53e3\u6a21\u5757\u65f6\uff0c\u6709\u4ee5\u4e0b\u6ce8\u610f\u4e8b\u9879\uff1a"}),"\n",(0,e.jsxs)(n.ul,{children:["\n",(0,e.jsx)(n.li,{children:"\u53ea\u9002\u7528\u4e8e\u591a\u9875\u5e94\u7528\uff08MPA\uff09\uff0c\u5bf9\u5355\u9875\u5e94\u7528\uff08SPA\uff09\u6ca1\u6709\u4f18\u5316\u6548\u679c\u3002"}),"\n",(0,e.jsx)(n.li,{children:"\u5f53\u4f60\u8bbf\u95ee\u4e00\u4e2a\u9875\u9762\u65f6\uff0c\u7531\u4e8e\u8981\u7b49\u5f85\u9875\u9762\u7f16\u8bd1\u5b8c\u6210\uff0c\u4f1a\u6709\u4e00\u6bb5\u65f6\u95f4\u7684\u767d\u5c4f\u3002"}),"\n"]}),"\n",(0,e.jsxs)(n.h3,{id:"\u5c40\u9650\u6027",children:[(0,e.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#\u5c40\u9650\u6027",children:"#"}),"\u5c40\u9650\u6027"]}),"\n",(0,e.jsxs)(n.h4,{id:"\u7981\u7528\u62c6\u5305\u89c4\u5219",children:[(0,e.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#\u7981\u7528\u62c6\u5305\u89c4\u5219",children:"#"}),"\u7981\u7528\u62c6\u5305\u89c4\u5219"]}),"\n",(0,e.jsx)(n.p,{children:"\u5f53\u4f60\u5f00\u542f\u5ef6\u8fdf\u7f16\u8bd1\u65f6\uff0c\u4e3a\u4e86\u4fdd\u8bc1\u7f16\u8bd1\u7ed3\u679c\u6b63\u5e38\uff0cBuilder \u4f1a\u5728\u5f00\u53d1\u73af\u5883\u4e0b\u7981\u7528\u62c6\u5305\u89c4\u5219\u3002\u8fd9\u4e0d\u4f1a\u5f71\u54cd\u751f\u4ea7\u73af\u5883\u7684\u6253\u5305\u4ea7\u7269\uff0c\u4f46\u4f1a\u5bfc\u81f4\u5f00\u53d1\u73af\u5883\u548c\u751f\u4ea7\u73af\u5883\u7684\u6253\u5305\u4ea7\u7269\u6709\u4e00\u5b9a\u5dee\u5f02\u3002"}),"\n",(0,e.jsxs)(n.h4,{id:"\u4f7f\u7528\u4ee3\u7406",children:[(0,e.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#\u4f7f\u7528\u4ee3\u7406",children:"#"}),"\u4f7f\u7528\u4ee3\u7406"]}),"\n",(0,e.jsx)(n.p,{children:"Lazy Compilation \u4f9d\u8d56 webpack \u5728\u672c\u5730\u542f\u52a8\u7684\u5f00\u53d1\u670d\u52a1\u5668\uff0c\u5f53\u4f60\u5c06\u67d0\u4e2a\u57df\u540d\u4ee3\u7406\u5230 localhost \u8fdb\u884c\u5f00\u53d1\u65f6\uff0cLazy Compilation \u5c06\u65e0\u6cd5\u6b63\u5e38\u5de5\u4f5c\u3002\u56e0\u6b64\uff0c\u5982\u679c\u4f60\u9700\u8981\u4f7f\u7528\u4ee3\u7406\u65f6\uff0c\u8bf7\u7981\u7528 Lazy Compilation\u3002"})]})}n.default=function(s={}){const{wrapper:n}=s.components||{};return n?(0,e.jsx)(n,Object.assign({},s,{children:(0,e.jsx)(o,s)})):o(s)}}}]);