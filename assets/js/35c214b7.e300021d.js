"use strict";(self.webpackChunk_modern_js_website=self.webpackChunk_modern_js_website||[]).push([[4245],{54852:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>d});var r=n(49231);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=r.createContext({}),p=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},c=function(e){var t=p(e.components);return r.createElement(l.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),u=p(n),d=o,y=u["".concat(l,".").concat(d)]||u[d]||m[d]||i;return n?r.createElement(y,a(a({ref:t},c),{},{components:n})):r.createElement(y,a({ref:t},c))}));function d(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,a=new Array(i);a[0]=u;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:o,a[1]=s;for(var p=2;p<i;p++)a[p]=n[p];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}u.displayName="MDXCreateElement"},9607:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>a,default:()=>m,frontMatter:()=>i,metadata:()=>s,toc:()=>p});var r=n(86215),o=(n(49231),n(54852));const i={title:"CSS-In-JS API",sidebar_position:2},a=void 0,s={unversionedId:"apis/runtime/utility/css-in-js",id:"apis/runtime/utility/css-in-js",title:"CSS-In-JS API",description:"\u901a\u8fc7 Style Component \u5728\u9875\u9762\u4e0a\u4f7f\u7528 CSS\u3002",source:"@site/docs/apis/runtime/utility/css-in-js.md",sourceDirName:"apis/runtime/utility",slug:"/apis/runtime/utility/css-in-js",permalink:"/docs/apis/runtime/utility/css-in-js",tags:[],version:"current",sidebarPosition:2,frontMatter:{title:"CSS-In-JS API",sidebar_position:2},sidebar:"apisSidebar",previous:{title:"hook",permalink:"/docs/apis/runtime/web-server/hook"},next:{title:"loadable",permalink:"/docs/apis/runtime/utility/loadable/loadable_"}},l={},p=[{value:"API",id:"api",level:2},{value:"\u793a\u4f8b",id:"\u793a\u4f8b",level:2}],c={toc:p};function m(e){let{components:t,...n}=e;return(0,o.kt)("wrapper",(0,r.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"\u8865\u5145\u4fe1\u606f")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},"\u901a\u8fc7 Style Component \u5728\u9875\u9762\u4e0a\u4f7f\u7528 CSS\u3002"),(0,o.kt)("pre",{parentName:"div"},(0,o.kt)("code",{parentName:"pre",className:"language-ts"},"import styled from '@modern-js/runtime/styled';\n")))),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"styled")," \u5177\u4f53API\uff0c\u8bf7\u770b\uff1a",(0,o.kt)("a",{parentName:"p",href:"https://styled-components.com/docs/api"},"styled-component api"),"\u3002"),(0,o.kt)("h2",{id:"api"},"API"),(0,o.kt)("p",null,"\u8bf7\u770b ",(0,o.kt)("a",{parentName:"p",href:"https://styled-components.com/docs/api"},"styled-component API"),"\u3002"),(0,o.kt)("h2",{id:"\u793a\u4f8b"},"\u793a\u4f8b"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-tsx"},'import styled from \'@modern-js/runtime/styled\';\n\nconst Button = styled.button`\n  background: palevioletred;\n  border-radius: 3px;\n  border: none;\n  color: white;\n`\n\nconst TomatoButton = styled(Button)`\n  background: tomato;\n`\n\nrender(\n  <>\n    <Button>I\'m purple.</Button>\n    <br />\n    <TomatoButton>I\'m red.</TomatoButton>\n  </>\n)\n`\n\nrender(\n  <div>\n    <Button\n      href="https://github.com/styled-components/styled-components"\n      target="_blank"\n      rel="noopener"\n      primary\n    >\n      GitHub\n    </Button>\n\n    <Button as={Link} href="/docs">\n      Documentation\n    </Button>\n  </div>\n)\n')))}m.isMDXComponent=!0}}]);