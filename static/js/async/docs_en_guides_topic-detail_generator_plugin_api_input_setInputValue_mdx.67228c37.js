(self.webpackChunk_modern_js_main_doc=self.webpackChunk_modern_js_main_doc||[]).push([["docs_en_guides_topic-detail_generator_plugin_api_input_setInputValue_mdx"],{89462:function(e,n,t){"use strict";Object.defineProperty(n,"__esModule",{value:!0});!function(e,n){for(var t in n)Object.defineProperty(e,t,{enumerable:!0,get:n[t]})}(n,{frontmatter:function(){return i},title:function(){return r},toc:function(){return c},default:function(){return d}});var s=t("9880"),a=t("23169"),i={sidebar_position:7},r="setInputValue",c=[{text:"Example",depth:2,id:"example"}];function o(e){var n=Object.assign({h1:"h1",a:"a",p:"p",div:"div",pre:"pre",code:"code",h2:"h2"},(0,a.useMDXComponents)(),e.components);return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)(n.h1,{id:"setinputvalue",children:["setInputValue",(0,s.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#setinputvalue",children:"#"})]}),"\n",(0,s.jsx)(n.p,{children:"Sets the input default value."}),"\n",(0,s.jsx)(n.p,{children:"The method is available directly on the context."}),"\n",(0,s.jsx)(n.p,{children:"Its type is defined as:"}),"\n",(0,s.jsx)(n.div,{className:"language-",children:(0,s.jsx)(n.div,{className:"modern-code-content",children:(0,s.jsx)(n.pre,{className:"code",children:(0,s.jsx)(n.code,{className:"language-ts",children:"export interface IPluginContext {\n    setInputValue: (value: Record<string, unknown>) => void;\n  ...\n}\n"})})})}),"\n",(0,s.jsxs)(n.h2,{id:"example",children:["Example",(0,s.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#example",children:"#"})]}),"\n",(0,s.jsx)(n.div,{className:"language-",children:(0,s.jsx)(n.div,{className:"modern-code-content",children:(0,s.jsx)(n.pre,{className:"code",children:(0,s.jsx)(n.code,{className:"language-ts",children:"context.setInputValue({\n  moduleRunWay: 'no',\n});\n"})})})}),"\n",(0,s.jsxs)(n.div,{className:"modern-directive warning",children:[(0,s.jsx)(n.div,{className:"modern-directive-title",children:"WARNING"}),(0,s.jsxs)(n.div,{className:"modern-directive-content",children:[(0,s.jsxs)(n.p,{children:["This method only supports setting the configuration parameter value corresponding to the project solution integrated by the generator plugin, and does not support setting the project solution type (solution) and project scene (scenes). These two configurations can be set by the ",(0,s.jsx)(n.code,{children:"--config"})," parameter at execution default value."]}),"\n"]})]})]})}var d=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=Object.assign({},(0,a.useMDXComponents)(),e.components).wrapper;return n?(0,s.jsx)(n,Object.assign({},e,{children:(0,s.jsx)(o,e)})):o(e)}}}]);