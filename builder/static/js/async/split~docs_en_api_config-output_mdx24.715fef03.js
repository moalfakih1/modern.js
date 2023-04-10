(self.webpackChunkwebpack=self.webpackChunkwebpack||[]).push([["split~docs_en_api_config-output_mdx24"],{49357:function(e,s,n){"use strict";Object.defineProperty(s,"__esModule",{value:!0});!function(e,s){for(var n in s)Object.defineProperty(e,n,{enumerable:!0,get:s[n]})}(s,{frontmatter:function(){return a},title:function(){return i},toc:function(){return c},default:function(){return l}});var t=n("12151"),r=n("21447"),a={},i="",c=[{text:"assetsRetry.max",depth:3,id:"assetsretry.max"},{text:"assetsRetry.domain",depth:3,id:"assetsretry.domain"},{text:"assetsRetry.type",depth:3,id:"assetsretry.type"},{text:"assetsRetry.test",depth:3,id:"assetsretry.test"},{text:"assetsRetry.crossOrigin",depth:3,id:"assetsretry.crossorigin"},{text:"assetsRetry.onRetry",depth:3,id:"assetsretry.onretry"},{text:"assetsRetry.onSuccess",depth:3,id:"assetsretry.onsuccess"},{text:"assetsRetry.onFail",depth:3,id:"assetsretry.onfail"}];function o(e){var s=Object.assign({ul:"ul",li:"li",strong:"strong",code:"code",p:"p",div:"div",button:"button",pre:"pre",h3:"h3",a:"a"},(0,r.useMDXComponents)(),e.components);return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)(s.ul,{children:["\n",(0,t.jsxs)(s.li,{children:[(0,t.jsx)(s.strong,{children:"Type:"})," ",(0,t.jsx)(s.code,{children:"Object"})]}),"\n"]}),"\n",(0,t.jsxs)(s.p,{children:[(0,t.jsx)(s.code,{children:"output.assetsRetry"})," is used to configure the retry of assets.The type of ",(0,t.jsx)(s.code,{children:"AssetsRetryOptions"})," is as follows:"]}),"\n",(0,t.jsx)(s.div,{className:"language-",children:(0,t.jsxs)(s.div,{className:"modern-code-content",children:[(0,t.jsx)(s.button,{className:"copy"}),(0,t.jsx)(s.pre,{className:"code",children:(0,t.jsx)(s.code,{className:"language-ts",children:"export type AssetsRetryHookContext = {\n  times: number;\n  domain: string;\n  url: string;\n  tagName: string;\n};\n\nexport type AssetsRetryOptions = {\n  type?: string[];\n  domain?: string[];\n  max?: number;\n  test?: string | ((url: string) => boolean);\n  crossOrigin?: boolean;\n  onRetry?: (options: AssetsRetryHookContext) => void;\n  onSuccess?: (options: AssetsRetryHookContext) => void;\n  onFail?: (options: AssetsRetryHookContext) => void;\n};\n"})})]})}),"\n",(0,t.jsx)(s.p,{children:"Since the ability will inject some extra runtime code into HTML, we have disabled this ability by default. If you need to enable it, you can configure it in the form of an object, for example:"}),"\n",(0,t.jsx)(s.div,{className:"language-",children:(0,t.jsxs)(s.div,{className:"modern-code-content",children:[(0,t.jsx)(s.button,{className:"copy"}),(0,t.jsx)(s.pre,{className:"code",children:(0,t.jsx)(s.code,{className:"language-js",children:"export default {\n  output: {\n    assetsRetry: {},\n  },\n};\n"})})]})}),"\n",(0,t.jsxs)(s.p,{children:["When you enable this ability, the default config of ",(0,t.jsx)(s.code,{children:"assetsRetry"})," is as follows:"]}),"\n",(0,t.jsx)(s.div,{className:"language-",children:(0,t.jsxs)(s.div,{className:"modern-code-content",children:[(0,t.jsx)(s.button,{className:"copy"}),(0,t.jsx)(s.pre,{className:"code",children:(0,t.jsx)(s.code,{className:"language-ts",children:"export const defaultAssetsRetryOptions: AssetsRetryOptions = {\n  type: ['script', 'link', 'img'],\n  domain: [],\n  max: 3,\n  test: '',\n  crossOrigin: false,\n  onRetry: () => {},\n  onSuccess: () => {},\n  onFail: () => {},\n};\n"})})]})}),"\n",(0,t.jsx)(s.p,{children:"At the same time, you can also customize your retry logic according to the following config instructions."}),"\n",(0,t.jsxs)(s.h3,{id:"assetsretry.max",children:["assetsRetry.max",(0,t.jsx)(s.a,{className:"header-anchor","aria-hidden":"true",href:"#assetsretry.max",children:"#"})]}),"\n",(0,t.jsxs)(s.ul,{children:["\n",(0,t.jsxs)(s.li,{children:[(0,t.jsx)(s.strong,{children:"Type:"})," ",(0,t.jsx)(s.code,{children:"number"})]}),"\n",(0,t.jsxs)(s.li,{children:[(0,t.jsx)(s.strong,{children:"Default:"})," ",(0,t.jsx)(s.code,{children:"3"})]}),"\n"]}),"\n",(0,t.jsx)(s.p,{children:"The maximum number of retries for a single asset. For example:"}),"\n",(0,t.jsx)(s.div,{className:"language-",children:(0,t.jsxs)(s.div,{className:"modern-code-content",children:[(0,t.jsx)(s.button,{className:"copy"}),(0,t.jsx)(s.pre,{className:"code",children:(0,t.jsx)(s.code,{className:"language-js",children:"export default {\n  output: {\n    assetsRetry: {\n      max: 3,\n    },\n  },\n};\n"})})]})}),"\n",(0,t.jsxs)(s.h3,{id:"assetsretry.domain",children:["assetsRetry.domain",(0,t.jsx)(s.a,{className:"header-anchor","aria-hidden":"true",href:"#assetsretry.domain",children:"#"})]}),"\n",(0,t.jsxs)(s.ul,{children:["\n",(0,t.jsxs)(s.li,{children:[(0,t.jsx)(s.strong,{children:"Type:"})," ",(0,t.jsx)(s.code,{children:"string[]"})]}),"\n",(0,t.jsxs)(s.li,{children:[(0,t.jsx)(s.strong,{children:"Default:"})," ",(0,t.jsx)(s.code,{children:"[]"})]}),"\n"]}),"\n",(0,t.jsx)(s.p,{children:"The domain of the asset to be retried. For example:"}),"\n",(0,t.jsx)(s.div,{className:"language-",children:(0,t.jsxs)(s.div,{className:"modern-code-content",children:[(0,t.jsx)(s.button,{className:"copy"}),(0,t.jsx)(s.pre,{className:"code",children:(0,t.jsx)(s.code,{className:"language-js",children:"export default {\n  output: {\n    assetsRetry: {\n      domain: ['https://cdn1.example.com', 'https://cdn2.example.com'],\n    },\n  },\n};\n"})})]})}),"\n",(0,t.jsxs)(s.h3,{id:"assetsretry.type",children:["assetsRetry.type",(0,t.jsx)(s.a,{className:"header-anchor","aria-hidden":"true",href:"#assetsretry.type",children:"#"})]}),"\n",(0,t.jsxs)(s.ul,{children:["\n",(0,t.jsxs)(s.li,{children:[(0,t.jsx)(s.strong,{children:"Type:"})," ",(0,t.jsx)(s.code,{children:"string[]"})]}),"\n",(0,t.jsxs)(s.li,{children:[(0,t.jsx)(s.strong,{children:"Default:"})," ",(0,t.jsx)(s.code,{children:"['script', 'link', 'img']"})]}),"\n"]}),"\n",(0,t.jsx)(s.p,{children:"The type of the asset to be retried. For example:"}),"\n",(0,t.jsx)(s.div,{className:"language-",children:(0,t.jsxs)(s.div,{className:"modern-code-content",children:[(0,t.jsx)(s.button,{className:"copy"}),(0,t.jsx)(s.pre,{className:"code",children:(0,t.jsx)(s.code,{className:"language-js",children:"export default {\n  output: {\n    assetsRetry: {\n      type: ['script', 'link'],\n    },\n  },\n};\n"})})]})}),"\n",(0,t.jsxs)(s.h3,{id:"assetsretry.test",children:["assetsRetry.test",(0,t.jsx)(s.a,{className:"header-anchor","aria-hidden":"true",href:"#assetsretry.test",children:"#"})]}),"\n",(0,t.jsxs)(s.ul,{children:["\n",(0,t.jsxs)(s.li,{children:[(0,t.jsx)(s.strong,{children:"Type:"})," ",(0,t.jsx)(s.code,{children:"string | ((url: string) => boolean) | undefined"})]}),"\n",(0,t.jsxs)(s.li,{children:[(0,t.jsx)(s.strong,{children:"Default:"})," ",(0,t.jsx)(s.code,{children:"undefined"})]}),"\n"]}),"\n",(0,t.jsx)(s.p,{children:"The test function of the asset to be retried. For example:"}),"\n",(0,t.jsx)(s.div,{className:"language-",children:(0,t.jsxs)(s.div,{className:"modern-code-content",children:[(0,t.jsx)(s.button,{className:"copy"}),(0,t.jsx)(s.pre,{className:"code",children:(0,t.jsx)(s.code,{className:"language-js",children:"export default {\n  output: {\n    assetsRetry: {\n      test: /cdn\\.example\\.com/,\n    },\n  },\n};\n"})})]})}),"\n",(0,t.jsxs)(s.h3,{id:"assetsretry.crossorigin",children:["assetsRetry.crossOrigin",(0,t.jsx)(s.a,{className:"header-anchor","aria-hidden":"true",href:"#assetsretry.crossorigin",children:"#"})]}),"\n",(0,t.jsxs)(s.ul,{children:["\n",(0,t.jsxs)(s.li,{children:[(0,t.jsx)(s.strong,{children:"Type:"})," ",(0,t.jsx)(s.code,{children:"undefined | boolean"})]}),"\n",(0,t.jsxs)(s.li,{children:[(0,t.jsx)(s.strong,{children:"Default:"})," false"]}),"\n"]}),"\n",(0,t.jsxs)(s.p,{children:["Whether to add the ",(0,t.jsx)(s.code,{children:"crossOrigin"})," attribute to the asset to be retried. For example:"]}),"\n",(0,t.jsx)(s.div,{className:"language-",children:(0,t.jsxs)(s.div,{className:"modern-code-content",children:[(0,t.jsx)(s.button,{className:"copy"}),(0,t.jsx)(s.pre,{className:"code",children:(0,t.jsx)(s.code,{className:"language-js",children:"export default {\n  output: {\n    assetsRetry: {\n      crossOrigin: true,\n    },\n  },\n};\n"})})]})}),"\n",(0,t.jsxs)(s.h3,{id:"assetsretry.onretry",children:["assetsRetry.onRetry",(0,t.jsx)(s.a,{className:"header-anchor","aria-hidden":"true",href:"#assetsretry.onretry",children:"#"})]}),"\n",(0,t.jsxs)(s.ul,{children:["\n",(0,t.jsxs)(s.li,{children:[(0,t.jsx)(s.strong,{children:"Type:"})," ",(0,t.jsx)(s.code,{children:"undefined | (options: AssetsRetryHookContext) => void"})]}),"\n"]}),"\n",(0,t.jsx)(s.p,{children:"The callback function when the asset is being retried. For example:"}),"\n",(0,t.jsx)(s.div,{className:"language-",children:(0,t.jsxs)(s.div,{className:"modern-code-content",children:[(0,t.jsx)(s.button,{className:"copy"}),(0,t.jsx)(s.pre,{className:"code",children:(0,t.jsx)(s.code,{className:"language-js",children:"export default {\n  output: {\n    assetsRetry: {\n      onRetry: ({ times, domain, url, tagName }) => {\n        console.log(\n          `Retry ${times} times, domain: ${domain}, url: ${url}, tagName: ${tagName}`,\n        );\n      },\n    },\n  },\n};\n"})})]})}),"\n",(0,t.jsxs)(s.h3,{id:"assetsretry.onsuccess",children:["assetsRetry.onSuccess",(0,t.jsx)(s.a,{className:"header-anchor","aria-hidden":"true",href:"#assetsretry.onsuccess",children:"#"})]}),"\n",(0,t.jsxs)(s.ul,{children:["\n",(0,t.jsxs)(s.li,{children:[(0,t.jsx)(s.strong,{children:"Type:"})," ",(0,t.jsx)(s.code,{children:"undefined | (options: AssetsRetryHookContext) => void"})]}),"\n"]}),"\n",(0,t.jsx)(s.p,{children:"The callback function when the asset is successfully retried. For example:"}),"\n",(0,t.jsx)(s.div,{className:"language-",children:(0,t.jsxs)(s.div,{className:"modern-code-content",children:[(0,t.jsx)(s.button,{className:"copy"}),(0,t.jsx)(s.pre,{className:"code",children:(0,t.jsx)(s.code,{className:"language-js",children:"export default {\n  output: {\n    assetsRetry: {\n      onSuccess: ({ times, domain, url, tagName }) => {\n        console.log(\n          `Retry ${times} times, domain: ${domain}, url: ${url}, tagName: ${tagName}`,\n        );\n      },\n    },\n  },\n};\n"})})]})}),"\n",(0,t.jsxs)(s.h3,{id:"assetsretry.onfail",children:["assetsRetry.onFail",(0,t.jsx)(s.a,{className:"header-anchor","aria-hidden":"true",href:"#assetsretry.onfail",children:"#"})]}),"\n",(0,t.jsxs)(s.ul,{children:["\n",(0,t.jsxs)(s.li,{children:[(0,t.jsx)(s.strong,{children:"Type:"})," ",(0,t.jsx)(s.code,{children:"undefined | (options: AssetsRetryHookContext) => void"})]}),"\n"]}),"\n",(0,t.jsx)(s.p,{children:"The callback function when the asset is failed to be retried. For example:"}),"\n",(0,t.jsx)(s.div,{className:"language-",children:(0,t.jsxs)(s.div,{className:"modern-code-content",children:[(0,t.jsx)(s.button,{className:"copy"}),(0,t.jsx)(s.pre,{className:"code",children:(0,t.jsx)(s.code,{className:"language-js",children:"export default {\n  output: {\n    assetsRetry: {\n      onFail: ({ times, domain, url, tagName }) => {\n        console.log(\n          `Retry ${times} times, domain: ${domain}, url: ${url}, tagName: ${tagName}`,\n        );\n      },\n    },\n  },\n};\n"})})]})})]})}var l=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},s=Object.assign({},(0,r.useMDXComponents)(),e.components).wrapper;return s?(0,t.jsx)(s,Object.assign({},e,{children:(0,t.jsx)(o,e)})):o(e)}}}]);