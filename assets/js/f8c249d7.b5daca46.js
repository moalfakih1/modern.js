"use strict";(self.webpackChunk_modern_js_website=self.webpackChunk_modern_js_website||[]).push([[1583],{54852:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>c});var o=n(49231);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,o,r=function(e,t){if(null==e)return{};var n,o,r={},a=Object.keys(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=o.createContext({}),d=function(e){var t=o.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=d(e.components);return o.createElement(s.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},u=o.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),u=d(n),c=r,f=u["".concat(s,".").concat(c)]||u[c]||m[c]||a;return n?o.createElement(f,i(i({ref:t},p),{},{components:n})):o.createElement(f,i({ref:t},p))}));function c(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,i=new Array(a);i[0]=u;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:r,i[1]=l;for(var d=2;d<a;d++)i[d]=n[d];return o.createElement.apply(null,i)}return o.createElement.apply(null,n)}u.displayName="MDXCreateElement"},29935:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>m,frontMatter:()=>a,metadata:()=>l,toc:()=>d});var o=n(91528),r=(n(49231),n(54852));const a={sidebar_position:8,title:"Model \u95f4\u901a\u4fe1"},i=void 0,l={unversionedId:"guides/features/runtime/model/model-communicate",id:"guides/features/runtime/model/model-communicate",title:"Model \u95f4\u901a\u4fe1",description:"Model \u4e4b\u95f4\u4e0d\u662f\u5b64\u7acb\u7684\uff0c Modern.js \u4e5f\u63d0\u4f9b\u4e86 Model \u95f4\u901a\u4fe1\u7684\u65b9\u5f0f\u3002\u4e3b\u8981\u5206\u4e3a\u4e24\u79cd\u573a\u666f\uff1a",source:"@site/docs/guides/features/runtime/model/model-communicate.md",sourceDirName:"guides/features/runtime/model",slug:"/guides/features/runtime/model/model-communicate",permalink:"/docs/guides/features/runtime/model/model-communicate",tags:[],version:"current",sidebarPosition:8,frontMatter:{sidebar_position:8,title:"Model \u95f4\u901a\u4fe1"},sidebar:"guidesSidebar",previous:{title:"\u81ea\u52a8\u751f\u6210 Actions",permalink:"/docs/guides/features/runtime/model/auto-actions"},next:{title:"\u6027\u80fd\u4f18\u5316",permalink:"/docs/guides/features/runtime/model/performance"}},s={},d=[],p={toc:d};function m(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,o.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"Model \u4e4b\u95f4\u4e0d\u662f\u5b64\u7acb\u7684\uff0c Modern.js \u4e5f\u63d0\u4f9b\u4e86 Model \u95f4\u901a\u4fe1\u7684\u65b9\u5f0f\u3002\u4e3b\u8981\u5206\u4e3a\u4e24\u79cd\u573a\u666f\uff1a"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"\u5728 Model \u4e2d\u8bbf\u95ee\u5176\u5b83 Model \u7684 State \u548c Actions\u3002"),(0,r.kt)("li",{parentName:"ol"},"\u5728 Model \u4e2d\u76d1\u542c\u5176\u5b83 Model \u53d8\u5316\u3002")),(0,r.kt)("p",null,"\u8fd9\u91cc\u5c06\u3010",(0,r.kt)("a",{parentName:"p",href:"/docs/guides/features/runtime/model/model-introduction"},"Model \u4ecb\u7ecd"),"\u3011\u4e00\u8282\u7684\u7b80\u5355\u8ba1\u6570\u5668\u5e94\u7528\u6539\u9020\u6210\u4e00\u4e2a\u53ef\u8bbe\u7f6e\u6b65\u9891\u7684\u8ba1\u6570\u5668\u5e94\u7528\u3002\u53ef\u4ee5\u901a\u8fc7\u8bbe\u7f6e\u6b65\u9891\uff0c\u4ece\u800c\u5f71\u54cd\u6bcf\u6b21\u8ba1\u6570\u5668\u589e\u52a0\u7684\u5e45\u5ea6\u3002"),(0,r.kt)("p",null,"\u6211\u4eec\u62bd\u8c61\u51fa\u4e24\u4e2a Model\uff0c\u5206\u522b\u4e3a ",(0,r.kt)("inlineCode",{parentName:"p"},"stepModel"),"\uff08\u6b65\u9891\uff09\u3001",(0,r.kt)("inlineCode",{parentName:"p"},"counterModel"),"\uff08\u8ba1\u6570\u5668\uff09\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts"},"import { model } from '@modern-js/runtime/model';\n\nconst stepModel = model('step').define({\n  state: 1\n});\n\nconst counterModel = model('count').define((context, { use, onMount }) => {\n  const [,,subscribeStep] = use(stepModel);\n\n  onMount(() => {\n    return subscribeStep(() => {\n      console.log(`Subscribe in counterModel: stepModel change to ${use(stepModel)[0]}`)\n    });\n  });\n\n  return {\n    state: {\n      value: 1\n    },\n    actions: {\n      add(state) {\n        const step = use(stepModel)[0];\n        state.value = state.value + step\n      }\n    }\n  }\n});\n\nexport { stepModel, counterModel };\n")),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"stepModel")," \u53ea\u58f0\u660e\u4e00\u4e2a ",(0,r.kt)("inlineCode",{parentName:"p"},"state"),"\uff0c\u521d\u59cb\u503c\u4e3a 1\u3002"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"counterModel")," \u901a\u8fc7 ",(0,r.kt)("inlineCode",{parentName:"p"},"use")," \u51fd\u6570\u52a0\u8f7d ",(0,r.kt)("inlineCode",{parentName:"p"},"stepModel"),"\uff0c\u62ff\u5230\u8fd4\u56de\u7684 ",(0,r.kt)("inlineCode",{parentName:"p"},"subscribeStep")," \u51fd\u6570\u7528\u6765\u76d1\u542c ",(0,r.kt)("inlineCode",{parentName:"p"},"stepModel")," \u72b6\u6001\u7684\u53d8\u66f4\u3002\u8fd9\u91cc\u6253\u5370\u51fa ",(0,r.kt)("inlineCode",{parentName:"p"},"stepModel")," \u7684\u6700\u65b0\u503c\u3002"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"counterModel")," \u901a\u8fc7 ",(0,r.kt)("inlineCode",{parentName:"p"},"use")," \u51fd\u6570\u8bbf\u95ee ",(0,r.kt)("inlineCode",{parentName:"p"},"stepModel"),"\uff0c\u5728 ",(0,r.kt)("inlineCode",{parentName:"p"},"add")," Action \u91cc\u53ef\u4ee5\u83b7\u53d6\u5230\u5f53\u524d ",(0,r.kt)("inlineCode",{parentName:"p"},"stepModel")," \u7684\u503c\uff08\u6b65\u9891\uff09\uff0c\u4ee5\u6b64\u503c\u6765\u505a\u81ea\u589e\u3002"),(0,r.kt)("p",null,"\u4fee\u6539 ",(0,r.kt)("strong",{parentName:"p"},"App.tsx"),"\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-tsx"},'import { useModel } from "@modern-js/runtime/model";\nimport { counterModel, stepModel } from "./models/count";\n\nfunction Counter() {\n  const [state, actions] = useModel(counterModel);\n  const [step, stepActions] = useModel(stepModel);\n\n  return (\n    <div>\n      <div>step: {step}</div>\n      <button onClick={() => stepActions.setState(step + 1)}>add step</button>\n      <div>counter: {state.value}</div>\n      <button onClick={() => actions.add()}>add counter</button>\n    </div>\n  );\n}\n\nexport default function App() {\n  return <Counter />;\n}\n')),(0,r.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,r.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"\u8865\u5145\u4fe1\u606f")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("p",{parentName:"div"},"Modern.js \u9ed8\u8ba4\u5f00\u542f ",(0,r.kt)("a",{parentName:"p",href:"/docs/guides/features/runtime/model/auto-actions"},"\u81ea\u52a8\u751f\u6210 actions"),"\uff0c\u6240\u4ee5 ",(0,r.kt)("inlineCode",{parentName:"p"},"stepModel")," \u4e2d\u867d\u7136\u6ca1\u6709\u624b\u52a8\u5b9a\u4e49 Actions\uff0c\u4f46\u53ef\u4ee5\u4f7f\u7528\u81ea\u52a8\u751f\u6210\u7684 ",(0,r.kt)("inlineCode",{parentName:"p"},"setState")," Action\u3002"))),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"\u70b9\u51fb ",(0,r.kt)("strong",{parentName:"li"},"add step")," \u589e\u52a0\u6b65\u9891\u3002"),(0,r.kt)("li",{parentName:"ul"},"\u70b9\u51fb ",(0,r.kt)("strong",{parentName:"li"},"add counter")," \u89e6\u53d1\u8ba1\u6570\u5668\u589e\u52a0\u3002")),(0,r.kt)("p",null,"\u6700\u7ec8\u6548\u679c\u5982\u4e0b\uff1a"),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://lf3-static.bytednsdoc.com/obj/eden-cn/aphqeh7uhohpquloj/modern-js/docs/models-communicate.gif",alt:"communicate-models"})),(0,r.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,r.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"\u8865\u5145\u4fe1\u606f")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("ul",{parentName:"div"},(0,r.kt)("li",{parentName:"ul"},"\u672c\u8282\u5b8c\u6574\u7684\u793a\u4f8b\u4ee3\u7801\uff1a",(0,r.kt)("a",{parentName:"li",href:"https://github.com/modern-js-dev/modern-js-examples/tree/main/series/tutorials/runtime-api/model/models-communication"},"\u7ae0\u8282\u793a\u4f8b\u4ee3\u7801"),"\u3002"),(0,r.kt)("li",{parentName:"ul"},"\u76f8\u5173 API \u7684\u66f4\u591a\u4ecb\u7ecd\uff0c\u8bf7\u53c2\u8003\uff1a",(0,r.kt)("a",{parentName:"li",href:"/docs/apis/runtime/model/model_#%E9%80%9A%E8%BF%87%E5%87%BD%E6%95%B0%E5%88%9B%E5%BB%BA-model"},"\u901a\u8fc7\u51fd\u6570\u521b\u5efa-model"),"\u3002")))))}m.isMDXComponent=!0}}]);