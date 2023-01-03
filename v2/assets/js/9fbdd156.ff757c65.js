"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[7538],{44993:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>m});var r=n(52983);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=r.createContext({}),s=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=s(e.components);return r.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,c=p(e,["components","mdxType","originalType","parentName"]),d=s(n),m=a,f=d["".concat(l,".").concat(m)]||d[m]||u[m]||o;return n?r.createElement(f,i(i({ref:t},c),{},{components:n})):r.createElement(f,i({ref:t},c))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=d;var p={};for(var l in t)hasOwnProperty.call(t,l)&&(p[l]=t[l]);p.originalType=e,p.mdxType="string"==typeof e?e:a,i[1]=p;for(var s=2;s<o;s++)i[s]=n[s];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},7367:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>u,frontMatter:()=>o,metadata:()=>p,toc:()=>s});var r=n(18249),a=(n(52983),n(44993));const o={title:"\u6dfb\u52a0 Loader"},i=void 0,p={unversionedId:"tutorials/first-app/c05-loader",id:"tutorials/first-app/c05-loader",title:"\u6dfb\u52a0 Loader",description:"\u4e0a\u4e00\u7ae0\u8282\u4e2d\uff0c\u6211\u4eec\u5b66\u4e60\u4e86\u5982\u4f55\u6dfb\u52a0\u5ba2\u6237\u7aef\u8def\u7531\u3002",source:"@site/../../packages/toolkit/main-doc/zh/tutorials/first-app/c05-loader.md",sourceDirName:"tutorials/first-app",slug:"/tutorials/first-app/c05-loader",permalink:"/v2/docs/tutorials/first-app/c05-loader",draft:!1,tags:[],version:"current",frontMatter:{title:"\u6dfb\u52a0 Loader"},sidebar:"tutorialsSidebar",previous:{title:"\u6dfb\u52a0\u5ba2\u6237\u7aef\u8def\u7531",permalink:"/v2/docs/tutorials/first-app/c04-routes"},next:{title:"\u6dfb\u52a0\u4e1a\u52a1\u6a21\u578b\uff08\u72b6\u6001\u7ba1\u7406\uff09",permalink:"/v2/docs/tutorials/first-app/c06-model"}},l={},s=[],c={toc:s};function u(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,r.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"\u4e0a\u4e00\u7ae0\u8282\u4e2d\uff0c\u6211\u4eec\u5b66\u4e60\u4e86\u5982\u4f55\u6dfb\u52a0\u5ba2\u6237\u7aef\u8def\u7531\u3002"),(0,a.kt)("p",null,"\u8fd9\u4e00\u7ae0\u8282\u4e2d\uff0c\u6211\u4eec\u5c06\u4f1a\u5b66\u4e60\u5982\u4f55\u4e3a",(0,a.kt)("strong",{parentName:"p"},"\u8def\u7531\u7ec4\u4ef6\u6dfb\u52a0 Loader"),"\u3002"),(0,a.kt)("p",null,"\u5230\u76ee\u524d\u4e3a\u6b62\uff0c\u6211\u4eec\u90fd\u662f\u901a\u8fc7\u786c\u7f16\u7801\u7684\u65b9\u5f0f\uff0c\u4e3a\u7ec4\u4ef6\u63d0\u4f9b\u6570\u636e\u3002\u5982\u679c\u8981\u4ece\u8fdc\u7aef\u83b7\u53d6\u6570\u636e\uff0c\u901a\u5e38\u60c5\u51b5\u4e0b\u4f1a\u4f7f\u7528 ",(0,a.kt)("inlineCode",{parentName:"p"},"useEffect")," \u6765\u505a\u3002\u4f46\u5728\u542f\u7528 SSR \u7684\u60c5\u51b5\u4e0b\uff0c",(0,a.kt)("inlineCode",{parentName:"p"},"useEffect")," \u662f\u4e0d\u4f1a\u5728\u670d\u52a1\u7aef\u6267\u884c\u7684\uff0c\u6240\u4ee5\u8fd9\u79cd SSR \u53ea\u80fd\u6e32\u67d3\u5f88\u6709\u9650\u7684 UI\u3002"),(0,a.kt)("p",null,"Modern.js \u4e3a\u63d0\u4f9b\u4e86 Data Loader \u7684\u80fd\u529b\uff0c\u652f\u6301\u540c\u6784\u7684\u5728\u7ec4\u4ef6\u4e2d\u83b7\u53d6\u6570\u636e\uff0c\u8ba9 SSR \u7684\u4ef7\u503c\u6700\u5927\u5316\u3002"),(0,a.kt)("p",null,"\u4e0b\u9762\u6211\u4eec\u6f14\u793a\u5982\u4f55\u4e3a\u8def\u7531\u7ec4\u4ef6\u6dfb\u52a0 Data Loader\uff0c\u5e76\u6a21\u62df\u8fdc\u7aef\u6570\u636e\u83b7\u53d6\u3002\u6211\u4eec\u4f7f\u7528 faker \u6765 mock \u9700\u8981\u7684\u6570\u636e\uff0c\u9996\u5148\u5b89\u88c5\u4f9d\u8d56\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"pnpm add faker@5\npnpm add @types/faker@5 -D\n")),(0,a.kt)("p",null,"\u4fee\u6539 ",(0,a.kt)("inlineCode",{parentName:"p"},"src/routes/page.tsx"),"\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-tsx"},"import { name, internet } from 'faker';\n\ntype LoaderData = {\n  code: number;\n  data: {\n    name: string;\n    avatar: string;\n    email: string;\n  }[];\n};\n\nexport const loader = async (): Promise<LoaderData> => {\n  const data = new Array(20).fill(0).map(() => {\n    const firstName = name.firstName();\n    return {\n      name: firstName,\n      avatar: `https://avatars.dicebear.com/api/identicon/${firstName}.svg`,\n      email: internet.email(),\n    };\n  });\n\n  return {\n    code: 200,\n    data,\n  };\n};\n")),(0,a.kt)("admonition",{type:"note"},(0,a.kt)("p",{parentName:"admonition"},"Data Loader \u5e76\u975e\u53ea\u4e3a SSR \u5de5\u4f5c\u3002\u5728 CSR \u9879\u76ee\u4e2d\uff0cData Loader \u4e5f\u53ef\u4ee5\u907f\u514d\u6570\u636e\u83b7\u53d6\u4f9d\u8d56 UI \u6e32\u67d3\uff0c\u89e3\u51b3\u8bf7\u6c42\u7011\u5e03\u6d41\u7684\u95ee\u9898\u3002\u672a\u6765\uff0cModern.js \u4e5f\u4f1a\u4e3a\u8fd9\u4e00\u7279\u6027\u6dfb\u52a0\u66f4\u591a\u80fd\u529b\uff0c\u4f8b\u5982\u9884\u83b7\u53d6\u3001\u6570\u636e\u7f13\u5b58\u7b49\u3002")),(0,a.kt)("p",null,"Modern.js \u4e5f\u63d0\u4f9b\u4e86\u4e00\u4e2a\u53eb ",(0,a.kt)("inlineCode",{parentName:"p"},"useLoaderData")," \u7684 hooks API\uff0c\u6211\u4eec\u4fee\u6539 ",(0,a.kt)("inlineCode",{parentName:"p"},"src/routes/page.tsx")," \u5bfc\u51fa\u7684\u7ec4\u4ef6\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-tsx",metastring:"{1,4,13}","{1,4,13}":!0},"import { useLoaderData } from '@modern-js/runtime/router';\n\nfunction Index() {\n  const { data } = useLoaderData() as LoaderData;\n\n  return (\n    <div className=\"container lg mx-auto\">\n      <Helmet>\n        <title>All</title>\n      </Helmet>\n      <List\n        dataSource={data}\n        renderItem={(info) => <Item key={info.name} info={info} />}\n      />\n    </div>\n  );\n}\n\nexport default Index;\n")),(0,a.kt)("p",null,"\u91cd\u65b0\u6267\u884c ",(0,a.kt)("inlineCode",{parentName:"p"},"pnpm run dev"),"\uff0c\u67e5\u770b ",(0,a.kt)("inlineCode",{parentName:"p"},"view-source:http://localhost:8080/"),"\uff0c\u6216\u5728 devtools \u7684 Network \u9762\u677f\u91cc\u67e5\u770b HTML \u8bf7\u6c42\u7684\u300c Preview \u300d\uff0c\u53ef\u4ee5\u770b\u5230 SSR \u6e32\u67d3\u51fa\u6765\u7684 HTML \u5df2\u7ecf\u5305\u542b\u5b8c\u6574\u7684 UI\uff1a"),(0,a.kt)("p",null,(0,a.kt)("img",{parentName:"p",src:"https://lf3-static.bytednsdoc.com/obj/eden-cn/aphqeh7uhohpquloj/modern-js/docs/11/display6.png",alt:"display6"})))}u.isMDXComponent=!0}}]);