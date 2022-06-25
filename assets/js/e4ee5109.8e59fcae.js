"use strict";(self.webpackChunk_modern_js_website=self.webpackChunk_modern_js_website||[]).push([[5325],{54852:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>c});var r=n(49231);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var u=r.createContext({}),s=function(e){var t=r.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=s(e.components);return r.createElement(u.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,u=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),d=s(n),c=a,f=d["".concat(u,".").concat(c)]||d[c]||m[c]||o;return n?r.createElement(f,i(i({ref:t},p),{},{components:n})):r.createElement(f,i({ref:t},p))}));function c(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=d;var l={};for(var u in t)hasOwnProperty.call(t,u)&&(l[u]=t[u]);l.originalType=e,l.mdxType="string"==typeof e?e:a,i[1]=l;for(var s=2;s<o;s++)i[s]=n[s];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},64040:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>u,contentTitle:()=>i,default:()=>m,frontMatter:()=>o,metadata:()=>l,toc:()=>s});var r=n(91528),a=(n(49231),n(54852));const o={sidebar_position:5},i="\u4f7f\u7528 Runtime API",l={unversionedId:"guides/features/modules/use-runtime-api",id:"guides/features/modules/use-runtime-api",title:"\u4f7f\u7528 Runtime API",description:"\u672c\u7ae0\u5c06\u8981\u4ecb\u7ecd\u5982\u4f55\u5728\u53ef\u590d\u7528\u6a21\u5757\u9879\u76ee\u4e2d\u4f7f\u7528 Runtime API\u3002",source:"@site/docs/guides/features/modules/use-runtime-api.md",sourceDirName:"guides/features/modules",slug:"/guides/features/modules/use-runtime-api",permalink:"/docs/guides/features/modules/use-runtime-api",tags:[],version:"current",sidebarPosition:5,frontMatter:{sidebar_position:5},sidebar:"guidesSidebar",previous:{title:"\u4f7f\u7528 Storybook \u8c03\u8bd5",permalink:"/docs/guides/features/modules/storybook"},next:{title:"\u6784\u5efa\u53ef\u590d\u7528\u6a21\u5757",permalink:"/docs/guides/features/modules/build"}},u={},s=[{value:"\u542f\u52a8 Runtime API",id:"\u542f\u52a8-runtime-api",level:2},{value:"\u4f7f\u7528 Runtime API",id:"\u4f7f\u7528-runtime-api-1",level:2}],p={toc:s};function m(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"\u4f7f\u7528-runtime-api"},"\u4f7f\u7528 Runtime API"),(0,a.kt)("p",null,"\u672c\u7ae0\u5c06\u8981\u4ecb\u7ecd\u5982\u4f55\u5728\u53ef\u590d\u7528\u6a21\u5757\u9879\u76ee\u4e2d\u4f7f\u7528 Runtime API\u3002"),(0,a.kt)("h2",{id:"\u542f\u52a8-runtime-api"},"\u542f\u52a8 Runtime API"),(0,a.kt)("p",null,"\u53ef\u590d\u7528\u6a21\u5757\u7684\u521d\u59cb\u5316\u9879\u76ee\u9ed8\u8ba4\u4e0d\u5305\u542b Runtime API \u529f\u80fd\uff0c\u6211\u4eec\u53ef\u4ee5\u901a\u8fc7\u5fae\u751f\u6210\u5668\u6765\u5f00\u542f\u5b83\u3002"),(0,a.kt)("p",null,"\u53ef\u4ee5\u5728\u9879\u76ee\u6839\u76ee\u5f55\u4e0b\u6267\u884c\u5982\u4e0b\u547d\u4ee4\u8fd0\u884c\u5fae\u751f\u6210\u5668\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"pnpm run new\n")),(0,a.kt)("p",null,"\u6211\u4eec\u6309\u7167\u5982\u4e0b\u8fdb\u884c\u9009\u62e9\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"? \u8bf7\u9009\u62e9\u4f60\u60f3\u8981\u7684\u64cd\u4f5c \u542f\u7528\u53ef\u9009\u529f\u80fd\n? \u542f\u7528\u53ef\u9009\u529f\u80fd \u542f\u7528\u300cRuntime API\u300d\n")),(0,a.kt)("p",null,"\u7136\u540e\u5c31\u53ef\u4ee5\u7b49\u5f85\u4f9d\u8d56\u5b89\u88c5\u6210\u529f\u3002"),(0,a.kt)("h2",{id:"\u4f7f\u7528-runtime-api-1"},"\u4f7f\u7528 Runtime API"),(0,a.kt)("p",null,"\u5728\u53ef\u590d\u7528\u6a21\u5757\u9879\u76ee\u4e2d\uff0c\u53ef\u4ee5\u76f4\u63a5\u4f7f\u7528 ",(0,a.kt)("inlineCode",{parentName:"p"},"@modern-js/runtime")," \u6a21\u5757\u6765\u4f7f\u7528 Runtime API\u3002\u4f8b\u5982\u4f7f\u7528\u4e86 Model API \u7684\u9879\u76ee\uff0c\u5176\u9879\u76ee\u7684\u4ee3\u7801\u5982\u4e0b\uff1a"),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},(0,a.kt)("inlineCode",{parentName:"strong"},"./src/model.tsx"))),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-tsx"},"import { model } from '@modern-js/runtime/model';\n\ntype State = {\n  data: {\n    key: string;\n    name: string;\n    age: number;\n    country: string;\n  }[];\n};\n\nexport default model<State>('tableList').define({\n  state: {\n    data: [],\n  },\n  actions: {\n    load: {\n      fulfilled(state, payload) {\n        return {data: payload};\n      },\n    }\n  },\n  effects: {\n    async load() {\n      const data = await (await fetch('https://lf3-static.bytednsdoc.com/obj/eden-cn/beeh7uvzhq/users.json')).json();\n      return data;\n    },\n  },\n});\n")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},(0,a.kt)("inlineCode",{parentName:"strong"},"./src/index.tsx"))),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-tsx"},"import type React from 'react';\nimport { useEffect } from 'react';\nimport { Table } from 'antd';\nimport { useModel } from '@modern-js/runtime/model';\nimport tableListModel from './model';\n\nexport default () => {\n  const columns = [\n    {\n      title: 'Name',\n      dataIndex: 'name',\n      key: 'name',\n    },\n    {\n      title: 'Age',\n      dataIndex: 'age',\n      key: 'age',\n    },\n    {\n      title: 'Country',\n      dataIndex: 'country',\n      key: 'country',\n    },\n  ];\n\n  const [{ data }, { load }] = useModel(tableListModel);\n\n  useEffect(() => {\n    load();\n  }, []);\n\n  return (\n    <div className=\"table-list table-theme\">\n      <Table columns={columns} dataSource={data} />\n    </div>\n  );\n};\n")),(0,a.kt)("p",null,"\u6211\u4eec\u65e2\u53ef\u4ee5\u628a\u5305\u542b Runtime API \u7684\u53ef\u590d\u7528\u6a21\u5757\u8fdb\u884c\u6784\u5efa\uff0c\u7136\u540e\u5728\u4e00\u4e2a\u5e94\u7528\u9879\u76ee\u5185\u4f7f\u7528\u6765\u8fdb\u884c\u8c03\u8bd5\u3002"),(0,a.kt)("p",null,"\u4e5f\u53ef\u4ee5\u4f7f\u7528\u53ef\u590d\u7528\u6a21\u5757\u63d0\u4f9b\u7684 Storybook \u529f\u80fd\u8fdb\u884c\u8c03\u8bd5\u3002\u4f8b\u5982\u9488\u5bf9\u4e0a\u9762\u7684\u4f8b\u5b50\uff0c\u6211\u4eec\u53ef\u4ee5\u7f16\u5199 Story\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-tsx"},"import TableList from '@/index';\n\nexport const TableListDemo = () => <TableList />;\n\nexport default {\n  title: 'A TableList',\n};\n")))}m.isMDXComponent=!0}}]);