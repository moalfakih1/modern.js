(self.webpackChunkwebpack=self.webpackChunkwebpack||[]).push([["split~docs_en_api_config-html_mdx15"],{20767:function(e,n,t){"use strict";Object.defineProperty(n,"__esModule",{value:!0});!function(e,n){for(var t in n)Object.defineProperty(e,t,{enumerable:!0,get:n[t]})}(n,{frontmatter:function(){return c},title:function(){return r},toc:function(){return l},default:function(){return o}});var s=t("12151"),a=t("21447");let c={},r="",l=[{text:"Tag Object",depth:4,id:"tag-object"},{text:"Tags Handler",depth:4,id:"tags-handler"}];function i(e){let n=Object.assign({ul:"ul",li:"li",strong:"strong",code:"code",p:"p",h4:"h4",a:"a",div:"div",button:"button",pre:"pre"},(0,a.useMDXComponents)(),e.components);return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"Type:"})," ",(0,s.jsx)(n.code,{children:"ArrayOrNot<HtmlInjectTag | HtmlInjectTagHandler>"})]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"Default:"})," ",(0,s.jsx)(n.code,{children:"undefined"})]}),"\n"]}),"\n",(0,s.jsx)(n.p,{children:"Modifies the tags that are injected into the HTML page."}),"\n",(0,s.jsxs)(n.h4,{id:"tag-object",children:["Tag Object",(0,s.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#tag-object",children:"#"})]}),"\n",(0,s.jsx)(n.div,{className:"language-",children:(0,s.jsxs)(n.div,{className:"modern-code-content",children:[(0,s.jsx)(n.button,{className:"copy"}),(0,s.jsx)(n.pre,{className:"code",children:(0,s.jsx)(n.code,{className:"language-ts",children:"export interface HtmlInjectTag {\n  tag: string;\n  attrs?: Record<string, string | boolean | null | undefined>;\n  children?: string;\n  /** @default false */\n  hash?: boolean | string | ((url: string, hash: string) => string);\n  /** @default true */\n  publicPath?: boolean | string | ((url: string, publicPath: string) => string);\n  /** @default false */\n  append?: boolean;\n  /**\n   * Enable by default only for elements that are allowed to be included in the `head` tag.\n   * @see {@link https://developer.mozilla.org/en-US/docs/Web/HTML/Element/head#see_also}\n   */\n  head?: boolean;\n}\n"})})]})}),"\n",(0,s.jsx)(n.p,{children:"A tag object can be used to describe the tag to be injected and the location of the injection can be controlled by the parameters."}),"\n",(0,s.jsx)(n.div,{className:"language-",children:(0,s.jsxs)(n.div,{className:"modern-code-content",children:[(0,s.jsx)(n.button,{className:"copy"}),(0,s.jsx)(n.pre,{className:"code",children:(0,s.jsx)(n.code,{className:"language-js",children:"export default {\n  output: {\n    assetPrefix: '//example.com/',\n  },\n  html: {\n    tags: [\n      {\n        tag: 'script',\n        attrs: { src: 'a.js' },\n        head: true,\n        append: true,\n        publicPath: true,\n        hash: true,\n      },\n    ],\n  },\n};\n"})})]})}),"\n",(0,s.jsxs)(n.p,{children:["It will add a ",(0,s.jsx)(n.code,{children:"script"})," tag to the end of the ",(0,s.jsx)(n.code,{children:"head"})," of the HTML:"]}),"\n",(0,s.jsx)(n.div,{className:"language-",children:(0,s.jsxs)(n.div,{className:"modern-code-content",children:[(0,s.jsx)(n.button,{className:"copy"}),(0,s.jsx)(n.pre,{className:"code",children:(0,s.jsx)(n.code,{className:"language-html",children:'<html>\n  <head>\n    <!-- some other headTags... -->\n    <script src="//example.com/a.js?8327ec63"></script>\n  </head>\n  <body>\n    <!-- some other bodyTags... -->\n  </body>\n</html>\n'})})]})}),"\n",(0,s.jsxs)(n.p,{children:["The final insertion position of the tag is determined by the ",(0,s.jsx)(n.code,{children:"head"})," and ",(0,s.jsx)(n.code,{children:"append"})," options, and two elements with the same configuration will be inserted into the same area and hold their relative positions to each other."]}),"\n",(0,s.jsxs)(n.p,{children:["Fields in the tag that indicate the path to the external resource file are affected by the ",(0,s.jsx)(n.code,{children:"publicPath"})," and ",(0,s.jsx)(n.code,{children:"hash"})," options.\nThese fields include ",(0,s.jsx)(n.code,{children:"src"})," for the ",(0,s.jsx)(n.code,{children:"script"})," tag and ",(0,s.jsx)(n.code,{children:"href"})," for the ",(0,s.jsx)(n.code,{children:"link"})," tag."]}),"\n",(0,s.jsxs)(n.p,{children:["Enabling ",(0,s.jsx)(n.code,{children:"publicPath"})," will splice the ",(0,s.jsx)(n.code,{children:"output.assetPrefix"})," field before the attribute representing the path in the tag.\nAnd the ",(0,s.jsx)(n.code,{children:"hash"})," field causes the filename to be followed by an additional hash query to control browser caching, with the same hash string as the HTML file product."]}),"\n",(0,s.jsx)(n.p,{children:"You can also pass functions to those fields to control the path joining."}),"\n",(0,s.jsxs)(n.h4,{id:"tags-handler",children:["Tags Handler",(0,s.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#tags-handler",children:"#"})]}),"\n",(0,s.jsx)(n.div,{className:"language-",children:(0,s.jsxs)(n.div,{className:"modern-code-content",children:[(0,s.jsx)(n.button,{className:"copy"}),(0,s.jsx)(n.pre,{className:"code",children:(0,s.jsx)(n.code,{className:"language-ts",children:"export type HtmlInjectTagUtils = {\n  outputName: string;\n  publicPath: string;\n  hash: string;\n};\n\nexport type HtmlInjectTagHandler = (\n  tags: HtmlInjectTag[],\n  utils: HtmlInjectTagUtils,\n) => HtmlInjectTag[] | void;\n"})})]})}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.code,{children:"html.tags"})," can also accept functions that can arbitrarily modify tags by writing logic to the callback, often used to ensure the relative position of tags while inserting them."]}),"\n",(0,s.jsx)(n.p,{children:"The callback function accepts a tag list as an argument and needs to modify or return a new tag array directly."}),"\n",(0,s.jsx)(n.div,{className:"language-",children:(0,s.jsxs)(n.div,{className:"modern-code-content",children:[(0,s.jsx)(n.button,{className:"copy"}),(0,s.jsx)(n.pre,{className:"code",children:(0,s.jsx)(n.code,{className:"language-typescript",children:"export default {\n  html: {\n    tags: [\n      tags => {\n        tags.splice(0, 1);\n      },\n      /* ^?\n       *   { tag: 'script', attrs: { src: 'b.js' } },\n       *   ... some other headTags\n       *   { tag: 'script', attrs: { src: 'c.js' } },\n       *   ... some other bodyTags\n       *   { tag: 'script', attrs: { src: 'a.js' }, head: false },\n       */\n      { tag: 'script', attrs: { src: 'a.js' }, head: false },\n      { tag: 'script', attrs: { src: 'b.js' }, append: false },\n      { tag: 'script', attrs: { src: 'c.js' } },\n      tags => [...tags, { tag: 'script', attrs: { src: 'd.js' } }],\n      /* ^?\n       *   ... some other headTags\n       *   { tag: 'script', attrs: { src: 'c.js' } },\n       *   ... some other bodyTags\n       *   { tag: 'script', attrs: { src: 'a.js' }, head: false },\n       */\n    ],\n  },\n};\n"})})]})}),"\n",(0,s.jsx)(n.p,{children:"The function will be executed at the end of the HTML processing flow. In the example below, the 'tags' parameter will contain all tag objects that form config, regardless of the function's location in config."}),"\n",(0,s.jsxs)(n.p,{children:["Modifying the attributes ",(0,s.jsx)(n.code,{children:"append"}),", ",(0,s.jsx)(n.code,{children:"publicPath"}),", ",(0,s.jsx)(n.code,{children:"hash"})," in the callback will not take effect, because they have been applied to the tag's location and path attributes, respectively."]}),"\n",(0,s.jsx)(n.p,{children:"So the end product will look like:"}),"\n",(0,s.jsx)(n.div,{className:"language-",children:(0,s.jsxs)(n.div,{className:"modern-code-content",children:[(0,s.jsx)(n.button,{className:"copy"}),(0,s.jsx)(n.pre,{className:"code",children:(0,s.jsx)(n.code,{className:"language-html",children:'<html>\n  <head>\n    <!-- some other headTags... -->\n    <script src="//example.com/c.js"></script>\n    <script src="//example.com/d.js"></script>\n  </head>\n  <body>\n    <!-- some other bodyTags... -->\n    <script src="//example.com/a.js"></script>\n  </body>\n</html>\n'})})]})})]})}var o=function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},{wrapper:n}=Object.assign({},(0,a.useMDXComponents)(),e.components);return n?(0,s.jsx)(n,Object.assign({},e,{children:(0,s.jsx)(i,e)})):i(e)}}}]);