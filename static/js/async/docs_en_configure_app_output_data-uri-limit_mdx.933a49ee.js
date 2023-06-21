(self.webpackChunk_modern_js_main_doc=self.webpackChunk_modern_js_main_doc||[]).push([["docs_en_configure_app_output_data-uri-limit_mdx"],{84313:function(e,n,i){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),Object.defineProperty(n,"default",{enumerable:!0,get:function(){return l}});var t,s=i("15169"),r=i("43932"),a=i("9880"),d=i("23169");function o(e){var n=Object.assign({ul:"ul",li:"li",strong:"strong",pre:"pre",code:"code",p:"p",h3:"h3",a:"a"},(0,d.useMDXComponents)(),e.components);return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsx)(n.li,{children:(0,a.jsx)(n.strong,{children:"Type:"})}),"\n"]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-ts",children:"type DataUriLimitConfig = {\n  svg?: number;\n  font?: number;\n  image?: number;\n  media?: number;\n};\n"})}),"\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsx)(n.li,{children:(0,a.jsx)(n.strong,{children:"Default:"})}),"\n"]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-js",children:"const defaultDatUriLimit = {\n  svg: 10000,\n  font: 10000,\n  image: 10000,\n  media: 10000,\n};\n"})}),"\n",(0,a.jsx)(n.p,{children:"Set the size threshold to inline static assets such as images and fonts."}),"\n",(0,a.jsx)(n.p,{children:"By default, static assets will be Base64 encoded and inline into the page if the size is less than 10KB."}),"\n",(0,a.jsxs)(n.p,{children:["You can adjust the threshold by setting the ",(0,a.jsx)(n.code,{children:"dataUriLimit"})," config."]}),"\n",(0,a.jsx)(n.p,{children:"Detail:"}),"\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsxs)(n.li,{children:[(0,a.jsx)(n.code,{children:"svg"}),": The threshold of the SVG image."]}),"\n",(0,a.jsxs)(n.li,{children:[(0,a.jsx)(n.code,{children:"font"}),": The threshold of the font file."]}),"\n",(0,a.jsxs)(n.li,{children:[(0,a.jsx)(n.code,{children:"image"}),": The threshold of non-SVG images."]}),"\n",(0,a.jsxs)(n.li,{children:[(0,a.jsx)(n.code,{children:"media"}),": The threshold of media assets such as videos."]}),"\n"]}),"\n",(0,a.jsxs)(n.h3,{id:"example",children:["Example",(0,a.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#example",children:"#"})]}),"\n",(0,a.jsx)(n.p,{children:"Set the threshold of images to 5000 Bytes, and set media assets not to be inlined:"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-js",children:"export default {\n  output: {\n    dataUriLimit: {\n      image: 5000,\n      media: 0,\n    },\n  },\n};\n"})})]})}(t=globalThis).__RSPRESS_PAGE_META||(t.__RSPRESS_PAGE_META={}),globalThis.__RSPRESS_PAGE_META["/home/runner/work/modern.js/modern.js/packages/document/builder-doc/docs/en/config/output/dataUriLimit.md"]={toc:[{text:"Example",id:"example",depth:3}],title:"",frontmatter:{}};var l=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=Object.assign({},(0,d.useMDXComponents)(),e.components).wrapper;return n?(0,a.jsx)(n,r._(s._({},e),{children:(0,a.jsx)(o,s._({},e))})):o(e)}},39160:function(e,n,i){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),Object.defineProperty(n,"default",{enumerable:!0,get:function(){return c}});var t,s=i("15169"),r=i("43932"),a=i("9880"),d=i("23169"),o=i.ir(i("84313"));function l(e){var n=Object.assign({h1:"h1",a:"a",div:"div",p:"p"},(0,d.useMDXComponents)(),e.components);return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsxs)(n.h1,{id:"outputdataurilimit",children:["output.dataUriLimit",(0,a.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#outputdataurilimit",children:"#"})]}),"\n",(0,a.jsxs)(n.div,{className:"modern-directive tip",children:[(0,a.jsx)(n.div,{className:"modern-directive-title",children:"TIP"}),(0,a.jsx)(n.div,{className:"modern-directive-content",children:(0,a.jsxs)(n.p,{children:["This config is provided by Modern.js Builder, more detail can see ",(0,a.jsx)(n.a,{href:"https://modernjs.dev/builder/en/api/config-output.html#outputdataurilimit",target:"_blank",rel:"noopener noreferrer",children:"output.dataUriLimit"}),".\n"]})})]}),"\n","\n",(0,a.jsx)(o.default,{})]})}(t=globalThis).__RSPRESS_PAGE_META||(t.__RSPRESS_PAGE_META={}),globalThis.__RSPRESS_PAGE_META["/home/runner/work/modern.js/modern.js/packages/document/main-doc/docs/en/configure/app/output/data-uri-limit.mdx"]={toc:[],title:"output.dataUriLimit",frontmatter:{sidebar_label:"dataUriLimit"}};var c=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=Object.assign({},(0,d.useMDXComponents)(),e.components).wrapper;return n?(0,a.jsx)(n,r._(s._({},e),{children:(0,a.jsx)(l,s._({},e))})):l(e)}}}]);