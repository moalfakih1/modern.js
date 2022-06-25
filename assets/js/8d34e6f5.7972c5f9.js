"use strict";(self.webpackChunk_modern_js_website=self.webpackChunk_modern_js_website||[]).push([[3209],{54852:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>m});var r=n(49231);function s(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){s(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,s=function(e,t){if(null==e)return{};var n,r,s={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(s[n]=e[n]);return s}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(s[n]=e[n])}return s}var l=r.createContext({}),d=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},p=function(e){var t=d(e.components);return r.createElement(l.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var n=e.components,s=e.mdxType,a=e.originalType,l=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),u=d(n),m=s,v=u["".concat(l,".").concat(m)]||u[m]||c[m]||a;return n?r.createElement(v,o(o({ref:t},p),{},{components:n})):r.createElement(v,o({ref:t},p))}));function m(e,t){var n=arguments,s=t&&t.mdxType;if("string"==typeof e||s){var a=n.length,o=new Array(a);o[0]=u;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i.mdxType="string"==typeof e?e:s,o[1]=i;for(var d=2;d<a;d++)o[d]=n[d];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}u.displayName="MDXCreateElement"},11845:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>o,default:()=>c,frontMatter:()=>a,metadata:()=>i,toc:()=>d});var r=n(91528),s=(n(49231),n(54852));const a={sidebar_position:3,title:"\u5b9a\u5236 Web Server"},o=void 0,i={unversionedId:"guides/features/server-side/web/web-server",id:"guides/features/server-side/web/web-server",title:"\u5b9a\u5236 Web Server",description:"\u6709\u4e9b\u5f00\u53d1\u573a\u666f\u4e0b\uff0c\u9700\u8981\u5b9a\u5236\u7279\u6b8a\u7684\u670d\u52a1\u7aef\u903b\u8f91\uff0c\u4f8b\u5982\u7528\u6237\u9274\u6743\u3001\u8bf7\u6c42\u9884\u5904\u7406\u3001\u6dfb\u52a0\u9875\u9762\u6e32\u67d3\u9aa8\u67b6\u7b49\uff0c\u8fd9\u65f6\uff0c\u53ef\u4ee5\u901a\u8fc7\u5bf9 Modern.js \u5185\u7f6e\u7684 Web Server \u8fdb\u884c\u6269\u5c55\u5b9e\u73b0\u76f8\u5e94\u9700\u6c42\u3002",source:"@site/docs/guides/features/server-side/web/web-server.md",sourceDirName:"guides/features/server-side/web",slug:"/guides/features/server-side/web/web-server",permalink:"/docs/guides/features/server-side/web/web-server",tags:[],version:"current",sidebarPosition:3,frontMatter:{sidebar_position:3,title:"\u5b9a\u5236 Web Server"},sidebar:"guidesSidebar",previous:{title:"\u4e00\u4f53\u5316 SSG",permalink:"/docs/guides/features/server-side/web/ssg"},next:{title:"\u4e00\u4f53\u5316 SSR/SPR",permalink:"/docs/guides/features/server-side/web/ssr-and-spr"}},l={},d=[{value:"\u521b\u5efa\u5b9a\u5236 Web Server",id:"\u521b\u5efa\u5b9a\u5236-web-server",level:2},{value:"\u6846\u67b6\u5dee\u5f02",id:"\u6846\u67b6\u5dee\u5f02",level:2},{value:"Express",id:"express",level:3},{value:"Koa",id:"koa",level:3},{value:"Egg",id:"egg",level:3},{value:"Nest",id:"nest",level:3}],p={toc:d};function c(e){let{components:t,...n}=e;return(0,s.kt)("wrapper",(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,s.kt)("p",null,"\u6709\u4e9b\u5f00\u53d1\u573a\u666f\u4e0b\uff0c\u9700\u8981\u5b9a\u5236\u7279\u6b8a\u7684\u670d\u52a1\u7aef\u903b\u8f91\uff0c\u4f8b\u5982\u7528\u6237\u9274\u6743\u3001\u8bf7\u6c42\u9884\u5904\u7406\u3001\u6dfb\u52a0\u9875\u9762\u6e32\u67d3\u9aa8\u67b6\u7b49\uff0c\u8fd9\u65f6\uff0c\u53ef\u4ee5\u901a\u8fc7\u5bf9 Modern.js \u5185\u7f6e\u7684 Web Server \u8fdb\u884c\u6269\u5c55\u5b9e\u73b0\u76f8\u5e94\u9700\u6c42\u3002"),(0,s.kt)("h2",{id:"\u521b\u5efa\u5b9a\u5236-web-server"},"\u521b\u5efa\u5b9a\u5236 Web Server"),(0,s.kt)("p",null,"\u5728\u9879\u76ee\u6839\u76ee\u5f55\u6267\u884c ",(0,s.kt)("inlineCode",{parentName:"p"},"pnpm run new")," \u547d\u4ee4\uff0c\u6309\u7167\u5982\u4e0b\u9009\u62e9\uff0c\u5f00\u542f\u300cServer \u81ea\u5b9a\u4e49\u300d\u529f\u80fd\uff1a"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-bash"},"? \u8bf7\u9009\u62e9\u4f60\u60f3\u8981\u7684\u64cd\u4f5c\uff1a \u521b\u5efa\u5de5\u7a0b\u5143\u7d20\n? \u521b\u5efa\u5de5\u7a0b\u5143\u7d20\uff1a \u65b0\u5efa\u300cServer \u81ea\u5b9a\u4e49\u300d\u6e90\u7801\u76ee\u5f55\n? \u8bf7\u9009\u62e9\u8fd0\u884c\u65f6\u6846\u67b6\uff1a Express/Koa/Egg/Nest\n")),(0,s.kt)("p",null,"\u76ee\u524d Modern.js \u9ed8\u8ba4\u652f\u6301 4 \u79cd\u4e3b\u6d41\u7684 Node.js Server \u6846\u67b6\uff1a",(0,s.kt)("a",{parentName:"p",href:"https://expressjs.com/"},"Express"),"\u3001",(0,s.kt)("a",{parentName:"p",href:"https://koajs.com/"},"Koa"),"\u3001",(0,s.kt)("a",{parentName:"p",href:"https://eggjs.org/zh-cn/"},"Egg.js"),"\u3001",(0,s.kt)("a",{parentName:"p",href:"https://nestjs.com/"},"Nest"),"\uff0c\u9009\u62e9\u8fd0\u884c\u65f6\u6846\u67b6\u65f6\uff0c\u53ef\u6839\u636e\u81ea\u8eab\u504f\u597d\u8fdb\u884c\u9009\u62e9\u3002"),(0,s.kt)("p",null,"\u6267\u884c\u547d\u4ee4\u540e\uff0c\u9879\u76ee\u76ee\u5f55\u4e0b\u4f1a\u65b0\u5efa ",(0,s.kt)("inlineCode",{parentName:"p"},"server/index.ts")," \u6587\u4ef6\uff0c\u81ea\u5b9a\u4e49\u903b\u8f91\u5728\u8fd9\u4e2a\u6587\u4ef6\u4e2d\u7f16\u5199\u3002"),(0,s.kt)("h2",{id:"\u6846\u67b6\u5dee\u5f02"},"\u6846\u67b6\u5dee\u5f02"),(0,s.kt)("p",null,"\u7531\u4e8e\u4e0d\u540c\u6846\u67b6 API \u7684\u5dee\u5f02\u6027\uff0c\u81ea\u5b9a\u4e49\u903b\u8f91\u7684\u5199\u6cd5\u4e5f\u6709\u6240\u4e0d\u540c\u3002\u5047\u8bbe\u6709\u4ee5\u4e0b\u573a\u666f\uff1a\u5f53\u8bf7\u6c42\u7684 cookies \u4e2d\u5305\u542b ",(0,s.kt)("inlineCode",{parentName:"p"},"login-token")," \u65f6\uff0c\u8ba4\u4e3a\u7528\u6237\u5df2\u767b\u5f55\uff0c\u6b63\u5e38\u8fd4\u56de\u9875\u9762\uff1b\u5426\u5219\u8fd4\u56de 404 \u72b6\u6001\u7801\u3002\u4e0b\u9762\u5c31\u4ee5\u6b64\u573a\u666f\u4e3a\u4f8b\uff0c\u6f14\u793a\u4e0d\u540c\u6846\u67b6\u4e0b\u5982\u4f55\u5b9e\u73b0\u5b9a\u5236 Web Server \u903b\u8f91\u3002"),(0,s.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,s.kt)("div",{parentName:"div",className:"admonition-heading"},(0,s.kt)("h5",{parentName:"div"},(0,s.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,s.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,s.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"\u6ce8")),(0,s.kt)("div",{parentName:"div",className:"admonition-content"},(0,s.kt)("p",{parentName:"div"},"\u76ee\u524d Modern.js \u53ea\u652f\u6301\u524d\u7f6e\u4e2d\u95f4\u4ef6\u7684\u6269\u5c55\u3002"))),(0,s.kt)("h3",{id:"express"},"Express"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-ts"},"import { hook } from '@modern-js/runtime/server';\nimport type { Request, Response, NextFunction } from 'express';\n\nexport default hook(({ addMiddleware }) => {\n  addMiddleware((request: Request, response: Response, next: NextFunction) => {\n    if (request.headers.cookies['login-token']) {\n      return next();\n    } else {\n      response.status = 401;\n      response.end();\n    }\n  });\n});\n")),(0,s.kt)("h3",{id:"koa"},"Koa"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-ts"},"import { hook } from '@modern-js/runtime/server';\nimport type { Context, Next } from 'koa';\n\nexport default hook(({ addMiddleware }) => {\n  addMiddleware(async (ctx: Context, next: Next) => {\n    if (ctx.cookies['login-token']) {\n      await next();\n    } else {\n      ctx.status = 401;\n    }\n  });\n});\n")),(0,s.kt)("h3",{id:"egg"},"Egg"),(0,s.kt)("p",null,"Egg \u6dfb\u52a0\u4e2d\u95f4\u4ef6\u7684\u65b9\u5f0f\u4e0e Koa \u76f8\u540c\u3002"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-ts"},"import { hook } from '@modern-js/runtime/server';\nimport type { Context, Next } from 'koa';\n\nexport default hook(({ addMiddleware }) => {\n  addMiddleware(async (ctx: Context, next: Next) => {\n    if (ctx.cookies['login-token']) {\n      await next();\n    } else {\n      ctx.status = 401;\n    }\n  });\n});\n")),(0,s.kt)("h3",{id:"nest"},"Nest"),(0,s.kt)("p",null,"Nest \u652f\u6301\u6dfb\u52a0\u4e24\u79cd\u7c7b\u578b\u7684\u5185\u5bb9\uff1aExpress \u7684\u51fd\u6570\u4e2d\u95f4\u4ef6\u548c Nest \u4e2d\u7684 ",(0,s.kt)("a",{parentName:"p",href:"https://docs.nestjs.com/modules"},"Module"),"\u3002"),(0,s.kt)("p",null,"Express \u7684\u51fd\u6570\u4e2d\u95f4\u4ef6\u7684\u6dfb\u52a0\u4e0e Express \u90e8\u5206\u7684\u793a\u4f8b\u76f8\u540c\uff0c\u540c\u65f6\u8fd9\u91cc\u4f7f\u7528 Module \u6765\u4e3a Web Server \u6dfb\u52a0\u4e00\u6761\u65b0\u7684\u8def\u7531\u3002"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-ts"},"import { hook } from '@modern-js/runtime/server';\nimport { Module, Injectable, Controller, Get } from '@nestjs/common';\n\n@Controller('cats')\nexport class CatsController {\n  constructor(private readonly catsService: CatsService) {}\n\n  @Get()\n  getHello() {\n    return this.catsService.getHello();\n  }\n}\n\n@Injectable()\nclass CatsService {\n  getHello(): string {\n    return '<div>Hello world!</div>';;\n  }\n}\n\n@Module({\n  controllers: [CatsController],\n  providers: [CatsService],\n})\nclass CatsModule {}\n\nexport default hook(({ addMiddleware }) => {\n  addMiddleware((request: Request, response: Response, next: NextFunction) => {\n    if (request.headers.cookies['login-token']) {\n      return next();\n    } else {\n      response.status = 401;\n      response.end();\n    }\n  });\n\n  addMiddleware(CatsModule);\n});\n")),(0,s.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,s.kt)("div",{parentName:"div",className:"admonition-heading"},(0,s.kt)("h5",{parentName:"div"},(0,s.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,s.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,s.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"\u6ce8")),(0,s.kt)("div",{parentName:"div",className:"admonition-content"},(0,s.kt)("p",{parentName:"div"},"Modern.js \u4e2d Web Server \u4e0e\u5e94\u7528\u662f\u4e00\u4f53\u7684\uff0c\u5728\u5f00\u53d1\u8c03\u8bd5\u3001\u751f\u4ea7\u90e8\u7f72\u9636\u6bb5\u90fd\u65e0\u9700\u5355\u72ec\u8fd0\u7ef4\u3002"))))}c.isMDXComponent=!0}}]);