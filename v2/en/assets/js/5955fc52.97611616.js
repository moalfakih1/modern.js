"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[8106],{44993:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>c});var o=n(52983);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,o,r=function(e,t){if(null==e)return{};var n,o,r={},a=Object.keys(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=o.createContext({}),u=function(e){var t=o.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=u(e.components);return o.createElement(s.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},m=o.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),m=u(n),c=r,h=m["".concat(s,".").concat(c)]||m[c]||d[c]||a;return n?o.createElement(h,i(i({ref:t},p),{},{components:n})):o.createElement(h,i({ref:t},p))}));function c(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,i=new Array(a);i[0]=m;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:r,i[1]=l;for(var u=2;u<a;u++)i[u]=n[u];return o.createElement.apply(null,i)}return o.createElement.apply(null,n)}m.displayName="MDXCreateElement"},41311:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>d,frontMatter:()=>a,metadata:()=>l,toc:()=>u});var o=n(18249),r=(n(52983),n(44993));const a={title:"Routes",sidebar_position:1},i=void 0,l={unversionedId:"guides/basic-features/routes",id:"guides/basic-features/routes",title:"Routes",description:"Modern.js build-in provides partial support for React Router 6 and provides various types of routing modes. According to different entry types, routing is divided into three modes, namely Conventional routing, Self-controlled routing and Other.",source:"@site/../../packages/toolkit/main-doc/en/docusaurus-plugin-content-docs/current/guides/basic-features/routes.md",sourceDirName:"guides/basic-features",slug:"/guides/basic-features/routes",permalink:"/v2/en/docs/guides/basic-features/routes",draft:!1,tags:[],version:"current",sidebarPosition:1,frontMatter:{title:"Routes",sidebar_position:1},sidebar:"guidesSidebar",previous:{title:"\u57fa\u7840\u529f\u80fd",permalink:"/v2/en/docs/guides/basic-features/"},next:{title:"Builder",permalink:"/v2/en/docs/guides/basic-features/builder"}},s={},u=[{value:"Conventional routing",id:"conventional-routing",level:2},{value:"Routing file convention",id:"routing-file-convention",level:3},{value:"Layout",id:"layout",level:4},{value:"Page",id:"page",level:4},{value:"Dynamic routing",id:"dynamic-routing",level:3},{value:"Layout with No Path",id:"layout-with-no-path",level:3},{value:"No Layout",id:"no-layout",level:3},{value:"(WIP)Loading",id:"wiploading",level:3},{value:"ErrorBoundary",id:"errorboundary",level:3},{value:"Hooks before rendering",id:"hooks-before-rendering",level:3},{value:"Runtime Configuration",id:"runtime-configuration",level:3},{value:"Self-controlled routing",id:"self-controlled-routing",level:2},{value:"Other",id:"other",level:2}],p={toc:u};function d(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,o.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"Modern.js build-in provides partial support for ",(0,r.kt)("a",{parentName:"p",href:"https://reactrouter.com/en/main"},"React Router 6")," and provides various types of routing modes. According to different ",(0,r.kt)("a",{parentName:"p",href:"/docs/guides/concept/entries"},"entry")," types, routing is divided into three modes, namely ",(0,r.kt)("strong",{parentName:"p"},"Conventional routing"),", ",(0,r.kt)("strong",{parentName:"p"},"Self-controlled routing")," and ",(0,r.kt)("strong",{parentName:"p"},"Other"),"."),(0,r.kt)("admonition",{type:"note"},(0,r.kt)("p",{parentName:"admonition"},"The routes mentioned in this section are client routes, that is, SPA routes.")),(0,r.kt)("h2",{id:"conventional-routing"},"Conventional routing"),(0,r.kt)("p",null,"With ",(0,r.kt)("inlineCode",{parentName:"p"},"routes/")," as the agreed entry, Modern.js will automatically generate the corresponding routing structure based on the file system."),(0,r.kt)("p",null,"Modern.js supports the popular convention routing mode in the industry: ",(0,r.kt)("strong",{parentName:"p"},"nested routing"),". When using nested routing, the routing of the page corresponds the UI structure, and we will introduce this routing mode in detail."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"/user/johnny/profile                  /user/johnny/posts\n+------------------+                  +-----------------+\n| User             |                  | User            |\n| +--------------+ |                  | +-------------+ |\n| | Profile      | |  +------------\x3e  | | Posts       | |\n| |              | |                  | |             | |\n| +--------------+ |                  | +-------------+ |\n+------------------+                  +-----------------+\n")),(0,r.kt)("h3",{id:"routing-file-convention"},"Routing file convention"),(0,r.kt)("p",null,"There are two file conventions in the ",(0,r.kt)("inlineCode",{parentName:"p"},"routes/")," directory ",(0,r.kt)("inlineCode",{parentName:"p"},"layout.[jt]sx")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"page.[jt]sx"),"(abbreviated as ",(0,r.kt)("inlineCode",{parentName:"p"},".tsx")," later). These two files determine the layout hierarchy of the application, where ",(0,r.kt)("inlineCode",{parentName:"p"},"layout.tsx")," is used as the layout component, and ",(0,r.kt)("inlineCode",{parentName:"p"},"page.tsx")," is used as the content component, which is the leaf node of the entire routing table."),(0,r.kt)("p",null,"For example, here ",(0,r.kt)("inlineCode",{parentName:"p"},"routes/layout.tsx")," will be used as the layout component of all components under the ",(0,r.kt)("inlineCode",{parentName:"p"},"/")," route:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},".\n\u2514\u2500\u2500 routes\n    \u251c\u2500\u2500 layout.tsx\n    \u251c\u2500\u2500 page.tsx\n    \u2514\u2500\u2500 user\n        \u251c\u2500\u2500 layout.tsx\n        \u2514\u2500\u2500 page.tsx\n")),(0,r.kt)("p",null,"When the route is ",(0,r.kt)("inlineCode",{parentName:"p"},"/"),", there will be the following UI layout:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-tsx"},"<Layout>\n  <Page />\n</Layout>\n")),(0,r.kt)("p",null,"Similarly, ",(0,r.kt)("inlineCode",{parentName:"p"},"routes/user/layout.tsx")," will be used as a layout component for all components under the ",(0,r.kt)("inlineCode",{parentName:"p"},"/user")," route. When the route is ",(0,r.kt)("inlineCode",{parentName:"p"},"/user"),", the following UI layout will be available:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-tsx"},"<Layout>\n  <UserLayout>\n    <UserPage>\n  <UserLayout>\n</Layout>\n")),(0,r.kt)("h4",{id:"layout"},"Layout"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"<Layout>")," component refers to all ",(0,r.kt)("inlineCode",{parentName:"p"},"layout.tsx")," files in the ",(0,r.kt)("inlineCode",{parentName:"p"},"routes/")," directory, which represent the layout of the corresponding route segment, and use ",(0,r.kt)("inlineCode",{parentName:"p"},"<Outlet>")," to represent sub-components."),(0,r.kt)("admonition",{type:"note"},(0,r.kt)("p",{parentName:"admonition"},(0,r.kt)("inlineCode",{parentName:"p"},"<Outlet>")," is a new API in React Router 6, see ",(0,r.kt)("a",{parentName:"p",href:"https://reactrouter.com/en/main/components/outlet#outlet"},"Outlet")," for details.")),(0,r.kt)("p",null,"In order to facilitate the introduction of the relationship between ",(0,r.kt)("inlineCode",{parentName:"p"},"<Layout>")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"<Outlet>"),", the following file directory example:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},".\n\u2514\u2500\u2500 routes\n    \u251c\u2500\u2500 blog\n    \u2502\xa0\xa0 \u2514\u2500\u2500 page.tsx\n    \u251c\u2500\u2500 layout.tsx\n    \u251c\u2500\u2500 page.tsx\n    \u2514\u2500\u2500 user\n        \u251c\u2500\u2500 layout.tsx\n        \u2514\u2500\u2500 page.tsx\n")),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"When the route is ",(0,r.kt)("inlineCode",{parentName:"li"},"/"),", ",(0,r.kt)("inlineCode",{parentName:"li"},"<Outlet>")," in ",(0,r.kt)("inlineCode",{parentName:"li"},"routes/layout.tsx")," represents the component exported in ",(0,r.kt)("inlineCode",{parentName:"li"},"routes/page.tsx"),", generating the following UI structure:")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-tsx"},"<Layout>\n  <Page />\n</Layout>\n")),(0,r.kt)("ol",{start:2},(0,r.kt)("li",{parentName:"ol"},"When the route is ",(0,r.kt)("inlineCode",{parentName:"li"},"/blog"),", ",(0,r.kt)("inlineCode",{parentName:"li"},"<Outlet>")," in ",(0,r.kt)("inlineCode",{parentName:"li"},"routes/layout.tsx")," represents the component exported in ",(0,r.kt)("inlineCode",{parentName:"li"},"routes/blog/page.tsx"),", generating the following UI structure:")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-tsx"},"<Layout>\n  <BlogPage />\n</Layout>\n")),(0,r.kt)("ol",{start:3},(0,r.kt)("li",{parentName:"ol"},"When the route is ",(0,r.kt)("inlineCode",{parentName:"li"},"/user"),", ",(0,r.kt)("inlineCode",{parentName:"li"},"<Outlet>")," in ",(0,r.kt)("inlineCode",{parentName:"li"},"routes/layout.tsx")," represents the component exported in ",(0,r.kt)("inlineCode",{parentName:"li"},"routes/user/layout.tsx"),". ",(0,r.kt)("inlineCode",{parentName:"li"},"<Outlet>")," in ",(0,r.kt)("inlineCode",{parentName:"li"},"routes/user/layout.tsx")," represents the component exported in ",(0,r.kt)("inlineCode",{parentName:"li"},"routes/user/page.tsx"),". Generate the following UI structure:")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-tsx"},"<Layout>\n  <UserLayout>\n    <UserPage>\n  <UserLayout>\n</Layout>\n")),(0,r.kt)("p",null,"In summary, if there is a ",(0,r.kt)("inlineCode",{parentName:"p"},"layout.tsx")," in the file directory of the subroute, the ",(0,r.kt)("inlineCode",{parentName:"p"},"<Outlet>")," in the previous ",(0,r.kt)("inlineCode",{parentName:"p"},"layout.tsx")," is the ",(0,r.kt)("inlineCode",{parentName:"p"},"layout.tsx")," under the file directory of the subroute, otherwise it is the ",(0,r.kt)("inlineCode",{parentName:"p"},"page.tsx")," under the file directory of the subroute."),(0,r.kt)("h4",{id:"page"},"Page"),(0,r.kt)("p",null,"All routes should end with the ",(0,r.kt)("inlineCode",{parentName:"p"},"<Page>")," component. In the ",(0,r.kt)("inlineCode",{parentName:"p"},"page.tsx")," file, if the developer introduces the ",(0,r.kt)("inlineCode",{parentName:"p"},"<Outlet>")," component, it will have no effect."),(0,r.kt)("h3",{id:"dynamic-routing"},"Dynamic routing"),(0,r.kt)("p",null,"With a file directory named ",(0,r.kt)("inlineCode",{parentName:"p"},"[]"),", the generated route will be used as a dynamic route. For example the following file directory:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"\u2514\u2500\u2500 routes\n    \u251c\u2500\u2500 [id]\n    \u2502\xa0\xa0 \u2514\u2500\u2500 page.tsx\n    \u251c\u2500\u2500 blog\n    \u2502\xa0\xa0 \u2514\u2500\u2500 page.tsx\n    \u2514\u2500\u2500 page.tsx\n")),(0,r.kt)("p",null,"The ",(0,r.kt)("inlineCode",{parentName:"p"},"routes/[id]/page.tsx")," file is converted to the ",(0,r.kt)("inlineCode",{parentName:"p"},"/:id")," route. Except for the ",(0,r.kt)("inlineCode",{parentName:"p"},"/blog")," route that exactly matches, all other ",(0,r.kt)("inlineCode",{parentName:"p"},"/xxx")," will match this route."),(0,r.kt)("p",null,"In component, you can get the corresponding named parameters through ",(0,r.kt)("a",{parentName:"p",href:"/docs/apis/app/runtime/router/#useparams"},"useParams"),"."),(0,r.kt)("h3",{id:"layout-with-no-path"},"Layout with No Path"),(0,r.kt)("p",null,"When a directory name begins with ",(0,r.kt)("inlineCode",{parentName:"p"},"__"),", the corresponding directory name is not converted to the actual routing path, such as the following file directory:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},".\n\u2514\u2500\u2500 routes\n    \u251c\u2500\u2500 __auth\n    \u2502   \u251c\u2500\u2500 layout.tsx\n    \u2502   \u251c\u2500\u2500 login\n    \u2502   \u2502   \u2514\u2500\u2500 page.tsx\n    \u2502   \u2514\u2500\u2500 signup\n    \u2502       \u2514\u2500\u2500 page.tsx\n    \u251c\u2500\u2500 layout.tsx\n    \u2514\u2500\u2500 page.tsx\n")),(0,r.kt)("p",null,"Modern.js will generate two routes, ",(0,r.kt)("inlineCode",{parentName:"p"},"/login")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"/sign"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"__auth/layout.tsx")," component will be used as the layout component of ",(0,r.kt)("inlineCode",{parentName:"p"},"login/page.tsx")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"signup/page.tsx"),", but ",(0,r.kt)("inlineCode",{parentName:"p"},"__auth")," will not be used as the route path fragment."),(0,r.kt)("p",null,"This feature is useful when you need to do separate layouts for certain types of routes, or when you want to categorize routes."),(0,r.kt)("h3",{id:"no-layout"},"No Layout"),(0,r.kt)("p",null,"In some cases, the project needs more sophisticated routes, but these routes do not have independent UI layouts. If you create a route like a normal file directory, the directory level will be deeper."),(0,r.kt)("p",null,"Therefore Modern.js supports splitting routing fragments by ",(0,r.kt)("inlineCode",{parentName:"p"},".")," instead of file directory. For example, when you need ",(0,r.kt)("inlineCode",{parentName:"p"},"/user/profile/2022/edit"),", you can directly create the following file:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"\u2514\u2500\u2500 routes\n    \u251c\u2500\u2500 user.profile.[id].edit\n    \u2502      \u2514\u2500\u2500 page.tsx\n    \u251c\u2500\u2500 layout.tsx\n    \u2514\u2500\u2500 page.tsx\n")),(0,r.kt)("p",null,"When accessing a route, you will get the following UI layout:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-tsx"},"<RootLayout>\n  <UserProfileEdit /> // routes/user.profile.[id].edit/page.tsx\n</RootLayout>\n")),(0,r.kt)("h3",{id:"wiploading"},"(WIP)Loading"),(0,r.kt)("p",null,"In each layer directory under ",(0,r.kt)("inlineCode",{parentName:"p"},"routes/"),", developers can create ",(0,r.kt)("inlineCode",{parentName:"p"},"loading.tsx")," files and export a ",(0,r.kt)("inlineCode",{parentName:"p"},"<Loading>")," component by default."),(0,r.kt)("p",null,"When the component exists in the routing directory, all routing switches under this level of subrouting will use the ",(0,r.kt)("inlineCode",{parentName:"p"},"<Loading>")," component as the Fallback UI when JS Chunk is loaded. When the ",(0,r.kt)("inlineCode",{parentName:"p"},"layout.tsx")," file is not defined in this directory, the ",(0,r.kt)("inlineCode",{parentName:"p"},"<Loading>")," component will not take effect. For example, the following file directory:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},".\n\u2514\u2500\u2500 routes\n    \u251c\u2500\u2500 blog\n    \u2502\xa0\xa0 \u251c\u2500\u2500 [id]\n    \u2502\xa0\xa0 \u2502\xa0\xa0 \u2514\u2500\u2500 page.tsx\n    \u2502\xa0\xa0 \u2514\u2500\u2500 page.tsx\n    \u251c\u2500\u2500 layout.tsx\n    \u251c\u2500\u2500 loading.tsx\n    \u2514\u2500\u2500 page.tsx\n")),(0,r.kt)("p",null,"When a route jumps from ",(0,r.kt)("inlineCode",{parentName:"p"},"/")," to ",(0,r.kt)("inlineCode",{parentName:"p"},"/blog"),", if the JS Chunk of the ",(0,r.kt)("inlineCode",{parentName:"p"},"<Blog>")," component is not loaded, the component UI exported in ",(0,r.kt)("inlineCode",{parentName:"p"},"loading.tsx")," will be displayed first. But when jumping from ",(0,r.kt)("inlineCode",{parentName:"p"},"/blog")," to ",(0,r.kt)("inlineCode",{parentName:"p"},"/blog/20220101"),", it will not be displayed."),(0,r.kt)("h3",{id:"errorboundary"},"ErrorBoundary"),(0,r.kt)("p",null,"In each layer directory under ",(0,r.kt)("inlineCode",{parentName:"p"},"routes/"),", the developer can also define a ",(0,r.kt)("inlineCode",{parentName:"p"},"error.tsx")," file, and export a ",(0,r.kt)("inlineCode",{parentName:"p"},"<ErrorBoundary>")," component by default."),(0,r.kt)("p",null,"When the component exists in a routing directory, the component render error is caught by the ",(0,r.kt)("inlineCode",{parentName:"p"},"ErrorBoundary")," component. The ",(0,r.kt)("inlineCode",{parentName:"p"},"<ErrorBoundary>")," component does not take effect when the directory does not have a ",(0,r.kt)("inlineCode",{parentName:"p"},"layout.tsx")," file defined."),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"<ErrorBoundary>")," can return the UI view when the error occurred. When the ",(0,r.kt)("inlineCode",{parentName:"p"},"<ErrorBoundary>")," component is not declared at the current level, the error will bubble up to the higher component until it is caught or throws an error. At the same time, when a component fails, it will only affect the routed component and sub-component that caught the error. The state and view of other components are not affected and can continue to interact."),(0,r.kt)("p",null,"Within the ",(0,r.kt)("inlineCode",{parentName:"p"},"<ErrorBoundary>")," component, you can use ",(0,r.kt)("a",{parentName:"p",href:"/docs/apis/app/runtime/router/#useparams"},"useRouteError")," to get the specific information of the error:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-tsx"},"import { useRouteError } from '@modern-js/runtime/router';\nexport default const ErrorBoundary = () => {\n  const error = useRouteError();\n  return (\n    <div>\n        <h1>{error.status}</h1>\n        <h2>{error.message}</h2>\n    </div>\n  )\n}\n")),(0,r.kt)("h3",{id:"hooks-before-rendering"},"Hooks before rendering"),(0,r.kt)("p",null,"In some scenarios where you need to do some operations before the application renders, you can define ",(0,r.kt)("inlineCode",{parentName:"p"},"init")," hooks in ",(0,r.kt)("inlineCode",{parentName:"p"},"routes/layout.tsx"),". ",(0,r.kt)("inlineCode",{parentName:"p"},"init")," will be executed on both the client and server side, the basic usage example is as follows:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts",metastring:'title="src/routes/layout.tsx"',title:'"src/routes/layout.tsx"'},"import type { RuntimeContext } from '@modern-js/runtime';\n\nexport const init = (context: RuntimeContext) => {\n  // do something\n};\n")),(0,r.kt)("p",null,"The ",(0,r.kt)("inlineCode",{parentName:"p"},"init")," hook allows you to mount some global data and access the ",(0,r.kt)("inlineCode",{parentName:"p"},"runtimeContext")," variable from elsewhere in the application:"),(0,r.kt)("admonition",{type:"note"},(0,r.kt)("p",{parentName:"admonition"},"This feature is useful when the application requires pre-page data, custom data injection or framework migration (e.g. Next.js)")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts",metastring:'title="src/routes/layout.tsx"',title:'"src/routes/layout.tsx"'},"import {\n  RuntimeContext,\n} from '@modern-js/runtime';\n\nexport const init = (context: RuntimeContext) => {\n  return {\n    message: 'Hello World',\n  }\n}\n")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-tsx",metastring:'title="src/routes/page.tsx"',title:'"src/routes/page.tsx"'},"import { useRuntimeContext } from '@modern-js/runtime';\n\nexport default () => {\n  const { context } = useRuntimeContext();\n  const { message } = context.getInitData();\n\n  return <div>{message}</div>;\n}\n")),(0,r.kt)("p",null,"When working with SSR, the browser side can get the data returned by ",(0,r.kt)("inlineCode",{parentName:"p"},"init")," during SSR, and the developer can decide whether to retrieve the data on the browser side to overwrite the SSR data, for example:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-tsx",metastring:'title="src/routes/layout.tsx"',title:'"src/routes/layout.tsx"'},"import {\n  RuntimeContext,\n} from '@modern-js/runtime';\n\nexport const init = (context: RuntimeContext) => {\n  if (process.env.JUPITER_TARGET === 'node') {\n    return {\n      message: 'Hello World By Server',\n    }\n  } else {\n    const { context } = runtimeContext;\n    const data = context.getInitData();\n    // \u5982\u679c\u6ca1\u6709\u83b7\u53d6\u5230\u671f\u671b\u7684\u6570\u636e\n    if (!data.message) {\n      return {\n        message: 'Hello World By Client'\n      }\n    }\n  }\n}\n")),(0,r.kt)("h3",{id:"runtime-configuration"},"Runtime Configuration"),(0,r.kt)("p",null,"In each root ",(0,r.kt)("inlineCode",{parentName:"p"},"Layout")," component (",(0,r.kt)("inlineCode",{parentName:"p"},"routes/layout.ts"),"), the application runtime configuration can be dynamically defined:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts",metastring:'title="src/routes/layout.tsx"',title:'"src/routes/layout.tsx"'},"import type { AppConfig } from '@modern-js/runtime';\n\nexport const config = (): AppConfig => {\n  return {\n    router: {\n      supportHtml5History: false\n    }\n  }\n};\n")),(0,r.kt)("h2",{id:"self-controlled-routing"},"Self-controlled routing"),(0,r.kt)("p",null,"With ",(0,r.kt)("inlineCode",{parentName:"p"},"src/App.tsx")," as the agreed entry, Modern.js will not do additional operations with multiple routes, developers can use the React Router 6 API for development by themselves, for example:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-tsx"},"import { Route, Routes, BrowserRouter } from '@modern-js/runtime/router';\nimport { StaticRouter } from '@modern-js/runtime/router/server';\n\nconst Router = typeof window === 'undefined' ? StaticRouter : BrowserRouter;\nexport default () => {\n  return (\n    <Router location={context.request.pathname}>\n      <Routes>\n        <Route index element={<div>index</div>} />\n        <Route path=\"about\" element={<div>about</div>} />\n      </Routes>\n    </Router>\n  );\n};\n")),(0,r.kt)("admonition",{type:"note"},(0,r.kt)("p",{parentName:"admonition"},"Under self-controlled routing, if developers want to use the ",(0,r.kt)("a",{parentName:"p",href:"https://reactrouter.com/en/main/hooks/use-loader-data#useloaderdata"},"Loader API")," capabilities in React Router 6 in SSR will be relatively complicated, it is recommended to use conventional routing directly. Modern.js has already encapsulated everything for you.")),(0,r.kt)("h2",{id:"other"},"Other"),(0,r.kt)("p",null,"By default, Modern.js turn on the built-in routing scheme, React Router."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"export default defineConfig({\n  runtime: {\n    router: true,\n  },\n});\n")),(0,r.kt)("p",null,"Modern.js exposes the React Router API from the ",(0,r.kt)("inlineCode",{parentName:"p"},"@modern-js/runtime/router")," namespace for developers to use, ensuring that developers and Modern.js use the same code. In addition, in this case, the React Router code will be packaged into JS products. If the project already has its own routing scheme, or does not need to use client routing, this feature can be turned off."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"export default defineConfig({\n  runtime: {\n    router: false,\n  },\n});\n")))}d.isMDXComponent=!0}}]);