"use strict";(self.webpackChunk_modern_js_website=self.webpackChunk_modern_js_website||[]).push([[3084],{54852:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>d});var r=n(49231);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=r.createContext({}),p=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=p(e.components);return r.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),m=p(n),d=a,g=m["".concat(s,".").concat(d)]||m[d]||u[d]||o;return n?r.createElement(g,i(i({ref:t},c),{},{components:n})):r.createElement(g,i({ref:t},c))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=m;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:a,i[1]=l;for(var p=2;p<o;p++)i[p]=n[p];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},47338:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>u,frontMatter:()=>o,metadata:()=>l,toc:()=>p});var r=n(91528),a=(n(49231),n(54852));const o={title:"\u4f7f\u7528\u4e3b\u6d41\u7ec4\u4ef6\u5e93"},i=void 0,l={unversionedId:"guides/tutorials/c05-component/5.1-use-ui-library",id:"guides/tutorials/c05-component/5.1-use-ui-library",title:"\u4f7f\u7528\u4e3b\u6d41\u7ec4\u4ef6\u5e93",description:"\u4e0a\u4e00\u7ae0\u8282\u4e2d\uff0c\u6211\u4eec\u5b66\u4e60\u4e86\u5982\u4f55\u4f7f\u7528 ES6+ \u4e0e TypeScript \u8bed\u6cd5\u7f16\u5199 Modern.js \u5e94\u7528\u3002",source:"@site/docs/guides/tutorials/c05-component/5.1-use-ui-library.md",sourceDirName:"guides/tutorials/c05-component",slug:"/guides/tutorials/c05-component/5.1-use-ui-library",permalink:"/docs/guides/tutorials/c05-component/5.1-use-ui-library",tags:[],version:"current",frontMatter:{title:"\u4f7f\u7528\u4e3b\u6d41\u7ec4\u4ef6\u5e93"},sidebar:"guidesSidebar",previous:{title:"\u5ba2\u6237\u7aef\u517c\u5bb9\u6027",permalink:"/docs/guides/tutorials/c04-es6-plus-and-ts/4.3-compatibility"},next:{title:"\u4f7f\u7528\u72ec\u7acb\u5f00\u6e90\u7ec4\u4ef6",permalink:"/docs/guides/tutorials/c05-component/5.2-use-standalone-component"}},s={},p=[],c={toc:p};function u(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,r.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"\u4e0a\u4e00\u7ae0\u8282\u4e2d\uff0c\u6211\u4eec\u5b66\u4e60\u4e86\u5982\u4f55\u4f7f\u7528 ES6+ \u4e0e TypeScript \u8bed\u6cd5\u7f16\u5199 Modern.js \u5e94\u7528\u3002"),(0,a.kt)("p",null,"\u8fd9\u4e00\u7ae0\u8282\u4e2d\uff0c\u6211\u4eec\u7ee7\u7eed\u6cbf\u7528\u4e0a\u4e00\u7ae0\u8282\u7684\u9879\u76ee\u4ee3\u7801\uff08\u6ce8\u610f\u662f TS \u4ee3\u7801\uff0c\u4e0d\u662f ES6+ \u4ee3\u7801\uff09\uff0c\u7ee7\u7eed\u5b8c\u5584\u8054\u7cfb\u4eba\u5217\u8868\u3002"),(0,a.kt)("p",null,"\u4e3a\u4e86\u505a\u66f4\u597d\u7684 UI \u5c55\u793a\u548c\u4ea4\u4e92\uff0c\u6211\u4eec\u5f15\u5165\u4e3b\u6d41\u7684\u7ec4\u4ef6\u5e93 Ant Design \u6765\u5f00\u53d1\uff0c\u4f7f\u7528 List \u7ec4\u4ef6\u6765\u4ee3\u66ff\u539f\u59cb\u7684\u5217\u8868\u3002"),(0,a.kt)("p",null,"\u5148\u6dfb\u52a0\u4f9d\u8d56:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"pnpm add antd\n")),(0,a.kt)("p",null,"\u4e4b\u524d\u7ae0\u8282\u4ecb\u7ecd\u8fc7\uff0cModern.js \u652f\u6301\u5728\u9879\u76ee\u521b\u5efa\u540e\u7ee7\u7eed\u4e3a\u9879\u76ee\u589e\u52a0\u529f\u80fd\uff0c\u6211\u4eec\u6267\u884c ",(0,a.kt)("inlineCode",{parentName:"p"},"pnpm run new"),"\uff0c\u8fdb\u884c\u5982\u4e0b\u9009\u62e9\uff0c\u5f00\u542f Less \u652f\u6301\u3002"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"# \u542f\u7528\u53ef\u9009\u529f\u80fd\n  \u542f\u7528 Tailwind CSS \u652f\u6301\n\u276f \u542f\u7528 Less \u652f\u6301\n  \u542f\u7528 Sass \u652f\u6301\n  ...\n")),(0,a.kt)("p",null,"\u4fee\u6539 ",(0,a.kt)("inlineCode",{parentName:"p"},"src/App.tsx"),"\uff0c\u5728\u9876\u90e8\u5bfc\u5165\u7ec4\u4ef6:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"import { List } from 'antd';\n")),(0,a.kt)("p",null,"\u4fee\u6539 App \u7ec4\u4ef6\u7684\u5b9e\u73b0\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts"},'function App() {\n  return (\n    <div>\n      <List\n        dataSource={mockData}\n        renderItem={({ name, email, avatar }) => (\n          <List.Item key={name}>\n            <List.Item.Meta\n              avatar={<img alt="avatar" src={avatar} width={60} height={60} />}\n              title={name}\n              description={email}\n            />\n          </List.Item>\n        )}\n      />\n    </div>\n  );\n}\n')),(0,a.kt)("p",null,"\u6267\u884c ",(0,a.kt)("inlineCode",{parentName:"p"},"pnpm run dev"),"\uff0c\u67e5\u770b\u8fd0\u884c\u7ed3\u679c\uff1a"),(0,a.kt)("p",null,(0,a.kt)("img",{parentName:"p",src:"https://lf3-static.bytednsdoc.com/obj/eden-cn/aphqeh7uhohpquloj/modern-js/docs/05/result.png",alt:"result"})),(0,a.kt)("p",null,"\u53ef\u4ee5\u770b\u5230 Ant Design \u5bfc\u51fa\u7684\u7ec4\u4ef6\uff0c\u5df2\u7ecf\u5177\u5907\u4e86\u5b8c\u6574\u7684\u6837\u5f0f\u3002"),(0,a.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,a.kt)("div",{parentName:"div",className:"admonition-heading"},(0,a.kt)("h5",{parentName:"div"},(0,a.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,a.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,a.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"\u6ce8")),(0,a.kt)("div",{parentName:"div",className:"admonition-content"},(0,a.kt)("p",{parentName:"div"},"Modern.js \u4f1a",(0,a.kt)("a",{parentName:"p",href:"https://github.com/ant-design/babel-plugin-import"},"\u81ea\u52a8\u6309\u9700\u5bfc\u5165 Ant Design \u7ec4\u4ef6\u9700\u8981\u7684 CSS"),"\u3002"))),(0,a.kt)("hr",null),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"\u672c\u5c0f\u8282\u7684\u4ee3\u7801\u53ef\u4ee5\u5728",(0,a.kt)("a",{parentName:"p",href:"https://github.com/modern-js-dev/modern-js-examples/tree/main/tutorials/c05/hello-modern"},"\u8fd9\u91cc\u67e5\u770b"),"\u3002")))}u.isMDXComponent=!0}}]);