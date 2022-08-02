"use strict";(self.webpackChunk_modern_js_website=self.webpackChunk_modern_js_website||[]).push([[7445],{54852:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>m});var r=n(49231);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var i=r.createContext({}),c=function(e){var t=r.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},u=function(e){var t=c(e.components);return r.createElement(i.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,i=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),d=c(n),m=a,v=d["".concat(i,".").concat(m)]||d[m]||p[m]||o;return n?r.createElement(v,l(l({ref:t},u),{},{components:n})):r.createElement(v,l({ref:t},u))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,l=new Array(o);l[0]=d;var s={};for(var i in t)hasOwnProperty.call(t,i)&&(s[i]=t[i]);s.originalType=e,s.mdxType="string"==typeof e?e:a,l[1]=s;for(var c=2;c<o;c++)l[c]=n[c];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},46493:(e,t,n)=>{n.d(t,{Z:()=>a});var r=n(49231);function a(e){let{children:t,hidden:n,className:a}=e;return r.createElement("div",{role:"tabpanel",hidden:n,className:a},t)}},91918:(e,t,n)=>{n.d(t,{Z:()=>u});var r=n(86215),a=n(49231),o=n(65527),l=n(81346),s=n(1506);const i="tabItem_PrKG";function c(e){var t,n,o;const{lazy:c,block:u,defaultValue:p,values:d,groupId:m,className:v}=e,f=a.Children.map(e.children,(e=>{if((0,a.isValidElement)(e)&&void 0!==e.props.value)return e;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})),b=null!=d?d:f.map((e=>{let{props:{value:t,label:n,attributes:r}}=e;return{value:t,label:n,attributes:r}})),g=(0,l.lx)(b,((e,t)=>e.value===t.value));if(g.length>0)throw new Error('Docusaurus error: Duplicate values "'+g.map((e=>e.value)).join(", ")+'" found in <Tabs>. Every value needs to be unique.');const h=null===p?p:null!=(t=null!=p?p:null==(n=f.find((e=>e.props.default)))?void 0:n.props.value)?t:null==(o=f[0])?void 0:o.props.value;if(null!==h&&!b.some((e=>e.value===h)))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+h+'" but none of its children has the corresponding value. Available values are: '+b.map((e=>e.value)).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");const{tabGroupChoices:k,setTabGroupChoices:y}=(0,l.UB)(),[w,N]=(0,a.useState)(h),O=[],{blockElementScrollPositionUntilNextRender:T}=(0,l.o5)();if(null!=m){const e=k[m];null!=e&&e!==w&&b.some((t=>t.value===e))&&N(e)}const x=e=>{const t=e.currentTarget,n=O.indexOf(t),r=b[n].value;r!==w&&(T(t),N(r),null!=m&&y(m,r))},j=e=>{var t;let n=null;switch(e.key){case"ArrowRight":{const t=O.indexOf(e.currentTarget)+1;n=O[t]||O[0];break}case"ArrowLeft":{const t=O.indexOf(e.currentTarget)-1;n=O[t]||O[O.length-1];break}}null==(t=n)||t.focus()};return a.createElement("div",{className:"tabs-container"},a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,s.Z)("tabs",{"tabs--block":u},v)},b.map((e=>{let{value:t,label:n,attributes:o}=e;return a.createElement("li",(0,r.Z)({role:"tab",tabIndex:w===t?0:-1,"aria-selected":w===t,key:t,ref:e=>O.push(e),onKeyDown:j,onFocus:x,onClick:x},o,{className:(0,s.Z)("tabs__item",i,null==o?void 0:o.className,{"tabs__item--active":w===t})}),null!=n?n:t)}))),c?(0,a.cloneElement)(f.filter((e=>e.props.value===w))[0],{className:"margin-vert--md"}):a.createElement("div",{className:"margin-vert--md"},f.map(((e,t)=>(0,a.cloneElement)(e,{key:t,hidden:e.props.value!==w})))))}function u(e){const t=(0,o.Z)();return a.createElement(c,(0,r.Z)({key:String(t)},e))}},44808:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>u,contentTitle:()=>i,default:()=>m,frontMatter:()=>s,metadata:()=>c,toc:()=>p});var r=n(86215),a=(n(49231),n(54852)),o=n(91918),l=n(46493);const s={title:"\u200b\u6d4b\u8bd5\u5bb9\u5668\u7ec4\u4ef6"},i=void 0,c={unversionedId:"guides/tutorials/c11-container/11.4-testing",id:"guides/tutorials/c11-container/11.4-testing",title:"\u200b\u6d4b\u8bd5\u5bb9\u5668\u7ec4\u4ef6",description:"\u8ddf\u6d4b\u8bd5\u7ec4\u4ef6\u200b\u200b\u200b\u4e2d\u4e00\u6837\uff0c\u4e0d\u9700\u8981\u505a\u4efb\u4f55\u914d\u7f6e\uff0c\u53ef\u4ee5\u76f4\u63a5\u7ed9Model \u5199\u6d4b\u8bd5\u7528\u4f8b\u3002",source:"@site/docs/guides/tutorials/c11-container/11.4-testing.md",sourceDirName:"guides/tutorials/c11-container",slug:"/guides/tutorials/c11-container/11.4-testing",permalink:"/docs/guides/tutorials/c11-container/11.4-testing",tags:[],version:"current",frontMatter:{title:"\u200b\u6d4b\u8bd5\u5bb9\u5668\u7ec4\u4ef6"},sidebar:"guidesSidebar",previous:{title:"\u200b\u4f7f\u7528 Loader",permalink:"/docs/guides/tutorials/c11-container/11.3-use-loader"},next:{title:"\u6982\u89c8",permalink:"/docs/guides/features/overview"}},u={},p=[],d={toc:p};function m(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,r.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"\u8ddf",(0,a.kt)("a",{parentName:"p",href:"/docs/guides/tutorials/c06-css-and-component/6.6-testing"},"\u6d4b\u8bd5\u7ec4\u4ef6\u200b\u200b\u200b"),"\u4e2d\u4e00\u6837\uff0c\u4e0d\u9700\u8981\u505a\u4efb\u4f55\u914d\u7f6e\uff0c\u53ef\u4ee5\u76f4\u63a5\u7ed9Model \u5199\u6d4b\u8bd5\u7528\u4f8b\u3002"),(0,a.kt)("p",null,"\u4ee5 ",(0,a.kt)("inlineCode",{parentName:"p"},"containers/Contacts.tsx")," \u4e3a\u4f8b\uff0c\u6211\u4eec\u521b\u5efa\u5bf9\u5e94\u7684 ",(0,a.kt)("inlineCode",{parentName:"p"},".test")," \u6587\u4ef6\uff1a"),(0,a.kt)(o.Z,{mdxType:"Tabs"},(0,a.kt)(l.Z,{value:"macOS",label:"macOS",default:!0,mdxType:"TabItem"},(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"touch src/contacts/containers/contacts.test.tsx\n"))),(0,a.kt)(l.Z,{value:"Windows",label:"Windows",mdxType:"TabItem"},(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-powershell"},"ni src/contacts/containers/contacts.test.tsx\n")))),(0,a.kt)("p",null,"\u5728\u6d4b\u8bd5\u7528\u4f8b\u4e2d\u53ef\u4ee5\u4f7f\u7528 Modern.js \u63d0\u4f9b\u7684 API \u8fdb\u884c\u6e32\u67d3\uff0c\u5e76\u901a\u8fc7 API \u8fd4\u56de\u7684\u5de5\u5177\u51fd\u6570\u8fdb\u884c\u65ad\u8a00\u3002"),(0,a.kt)("p",null,"\u6d4b\u8bd5\u7528\u4f8b\u6587\u4ef6\u7684\u793a\u4f8b\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts"},"import { renderApp, waitFor } from '@modern-js/runtime/testing';\nimport ContactContainer from './Contacts';\n\ndescribe('test contracts model', () => {\n  it('actions works well', async () => {\n    const { getByText } = renderApp(<ContactContainer source=\"items\" />);\n\n    await waitFor(() => {\n      expect(getByText('Pending...')).toBeInTheDocument();\n    });\n  });\n});\n")),(0,a.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,a.kt)("div",{parentName:"div",className:"admonition-heading"},(0,a.kt)("h5",{parentName:"div"},(0,a.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,a.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,a.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"\u6ce8")),(0,a.kt)("div",{parentName:"div",className:"admonition-content"},(0,a.kt)("p",{parentName:"div"},"\u66f4\u591a\u76f8\u5173\u5185\u5bb9\u53ef\u4ee5\u67e5\u770b ",(0,a.kt)("a",{parentName:"p",href:"/docs/apis/runtime/testing/renderApp"},"Test API"),"\u3002"))),(0,a.kt)("p",null,"\u6267\u884c ",(0,a.kt)("inlineCode",{parentName:"p"},"pnpm run test"),"\uff0c\u53ef\u4ee5\u770b\u5230\u6d4b\u8bd5\u62a5\u544a\u3002"),(0,a.kt)("hr",null),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"\u672c\u5c0f\u8282\u7684\u4ee3\u7801\u53ef\u4ee5\u5728",(0,a.kt)("a",{parentName:"p",href:"https://github.com/modern-js-dev/modern-js-examples/tree/main/tutorials/c11/hello-modern-4"},"\u8fd9\u91cc\u67e5\u770b"),"\u3002")))}m.isMDXComponent=!0}}]);