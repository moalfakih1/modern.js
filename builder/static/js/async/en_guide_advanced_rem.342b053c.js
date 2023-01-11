"use strict";(self.webpackChunk_modern_js_builder_doc=self.webpackChunk_modern_js_builder_doc||[]).push([[4094],{64820:function(e,s,n){n.r(s),n.d(s,{content:function(){return c},frontmatter:function(){return o},title:function(){return r},toc:function(){return t}});var l=n(39980);const o=void 0,t=[{id:"enabling-rem-adaptability",text:"Enabling REM adaptability",depth:2},{id:"css-conversion-properties",text:"CSS conversion properties",depth:2},{id:"setting-the-page-rootfontsize",text:"Setting the page rootFontSize",depth:2},{id:"customize-maxrootfontsize",text:"Customize maxRootFontSize",depth:2},{id:"how-to-determine-if-rem-is-in-effect",text:"How to determine if REM is in effect\uff1f",depth:2},{id:"how-to-get-the-rootfontsize-value-that-is-actually-in-effect-on-the-page",text:"How to get the rootFontSize value that is actually in effect on the page?",depth:2}],r="REM adaptation",c="\"# REM adaptation\\n\\nBuilder supports REM adaptation via [output.convertToRem](/en/api/config-output.html#output-converttorem), which can dynamically adjusts the font size according to the screen size, so that the page will be displayed correctly on different screen sizes.\\n\\n## Enabling REM adaptability\\n\\nBy setting `output.convertToRem`, the Builder can do the following things:\\n\\n- Convert px to rem in CSS.\\n- Dynamic setting the fontSize of the root element.\\n\\n```ts\\nexport default {\\n  output: {\\n    convertToRem: true,\\n  },\\n};\\n```\\n\\n## CSS conversion properties\\n\\nBy default, rootFontSize is 50. So the CSS styles value are converted according to the ratio of `1rem : 50px`.\\n\\n```css\\n/* input */\\nh1 {\\n  margin: 0 0 16px;\\n  font-size: 32px;\\n  line-height: 1.2;\\n  letter-spacing: 1px;\\n}\\n\\n/* output */\\nh1 {\\n  margin: 0 0 0.32rem;\\n  font-size: 0.64rem;\\n  line-height: 1.2;\\n  letter-spacing: 0.02rem;\\n}\\n```\\n\\nBy default, builder converts all CSS properties from px to rem. If you want to convert only the `font-size` property, you can setting pxtorem.propList is `['font-size']`.\\n\\n```ts\\nexport default {\\n  output: {\\n    convertToRem: {\\n      pxtorem: {\\n        propList: ['font-size'],\\n      },\\n    },\\n  },\\n};\\n```\\n\\n## Setting the page rootFontSize\\n\\nThe formula for calculating the font size of the page root element is:\\n\\n```\\npageRootFontSize = clientWidth * rootFontSize / screenWidth\\n```\\n\\nIn a mobile browser with a screen width of 390, the default value for rootFontSize is 50 and the screenWidth of the UI design is 375.\\n\\nThe calculated font size for the root element of the page is 52 (`390 * 50 / 375`).\\n\\nAt this point, 1 rem is 52px, 32px\uff080.64 rem\uff09 in the CSS style, the actual size in page is 33.28 px.\\n\\n```ts\\nexport default {\\n  output: {\\n    convertToRem: {\\n      rootFontSize: 50,\\n      screenWidth: 375,\\n    },\\n  },\\n};\\n```\\n\\n## Customize maxRootFontSize\\n\\nIn the desktop browser, the page rootFontSize obtained from the calculation formula is often too large. When the calculated result large than the maxRootFontSize, the maxRootFontSize will used as the page rootFontSize.\\n\\nIn the desktop browser with a screen width of 1920, the calculated rootFontSize is 349, which exceeds the default maxRootFontSize of 64. 64 is used as the current root element font value.\\n\\n```ts\\nexport default {\\n  output: {\\n    convertToRem: {\\n      maxRootFontSize: 64,\\n    },\\n  },\\n};\\n```\\n\\n## How to determine if REM is in effect\uff1f\\n\\n1. CSS\uff1aCheck the generated `.css` file to see if the value of the corresponding property is converted from px to rem.\\n2. HTML\uff1aOpen the Page Console to see if a valid value exists for `document.documentElement.style.fontSize`.\\n\\n## How to get the rootFontSize value that is actually in effect on the page?\\n\\nThe actual rootFontSize in effect for the page is calculated dynamically based on the current page. It can be seen by printing `document.documentElement.style.fontSize` or obtained by `window.ROOT_FONT_SIZE`.\\n\"";function i(e){const s=Object.assign({h1:"h1",a:"a",p:"p",h2:"h2",code:"code",ul:"ul",li:"li",div:"div",button:"button",pre:"pre",span:"span",ol:"ol"},e.components);return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsxs)(s.h1,{id:"rem-adaptation",children:[(0,l.jsx)(s.a,{className:"header-anchor","aria-hidden":"true",href:"#rem-adaptation",children:"#"}),"REM adaptation"]}),"\n",(0,l.jsxs)(s.p,{children:["Builder supports REM adaptation via ",(0,l.jsx)(s.a,{href:"/builder/en/api/config-output.html#output-converttorem",children:"output.convertToRem"}),", which can dynamically adjusts the font size according to the screen size, so that the page will be displayed correctly on different screen sizes."]}),"\n",(0,l.jsxs)(s.h2,{id:"enabling-rem-adaptability",children:[(0,l.jsx)(s.a,{className:"header-anchor","aria-hidden":"true",href:"#enabling-rem-adaptability",children:"#"}),"Enabling REM adaptability"]}),"\n",(0,l.jsxs)(s.p,{children:["By setting ",(0,l.jsx)(s.code,{children:"output.convertToRem"}),", the Builder can do the following things:"]}),"\n",(0,l.jsxs)(s.ul,{children:["\n",(0,l.jsx)(s.li,{children:"Convert px to rem in CSS."}),"\n",(0,l.jsx)(s.li,{children:"Dynamic setting the fontSize of the root element."}),"\n"]}),"\n",(0,l.jsxs)(s.div,{className:"language-ts",children:[(0,l.jsx)(s.div,{className:""}),(0,l.jsxs)(s.div,{className:"modern-code-content",children:[(0,l.jsx)(s.button,{className:"copy"}),(0,l.jsx)(s.pre,{className:"shiki",style:{backgroundColor:"#2e3440ff"},children:(0,l.jsxs)(s.code,{children:[(0,l.jsxs)(s.span,{className:"line",children:[(0,l.jsx)(s.span,{style:{color:"#81A1C1"},children:"export"}),(0,l.jsx)(s.span,{style:{color:"#D8DEE9FF"},children:" "}),(0,l.jsx)(s.span,{style:{color:"#81A1C1"},children:"default"}),(0,l.jsx)(s.span,{style:{color:"#D8DEE9FF"},children:" "}),(0,l.jsx)(s.span,{style:{color:"#ECEFF4"},children:"{"})]}),"\n",(0,l.jsxs)(s.span,{className:"line",children:[(0,l.jsx)(s.span,{style:{color:"#D8DEE9FF"},children:"  "}),(0,l.jsx)(s.span,{style:{color:"#D8DEE9"},children:"output"}),(0,l.jsx)(s.span,{style:{color:"#ECEFF4"},children:":"}),(0,l.jsx)(s.span,{style:{color:"#D8DEE9FF"},children:" "}),(0,l.jsx)(s.span,{style:{color:"#ECEFF4"},children:"{"})]}),"\n",(0,l.jsxs)(s.span,{className:"line",children:[(0,l.jsx)(s.span,{style:{color:"#D8DEE9FF"},children:"    "}),(0,l.jsx)(s.span,{style:{color:"#D8DEE9"},children:"convertToRem"}),(0,l.jsx)(s.span,{style:{color:"#ECEFF4"},children:":"}),(0,l.jsx)(s.span,{style:{color:"#D8DEE9FF"},children:" "}),(0,l.jsx)(s.span,{style:{color:"#81A1C1"},children:"true"}),(0,l.jsx)(s.span,{style:{color:"#ECEFF4"},children:","})]}),"\n",(0,l.jsxs)(s.span,{className:"line",children:[(0,l.jsx)(s.span,{style:{color:"#D8DEE9FF"},children:"  "}),(0,l.jsx)(s.span,{style:{color:"#ECEFF4"},children:"},"})]}),"\n",(0,l.jsxs)(s.span,{className:"line",children:[(0,l.jsx)(s.span,{style:{color:"#ECEFF4"},children:"}"}),(0,l.jsx)(s.span,{style:{color:"#81A1C1"},children:";"})]}),"\n",(0,l.jsx)(s.span,{className:"line"})]})})]})]}),"\n",(0,l.jsxs)(s.h2,{id:"css-conversion-properties",children:[(0,l.jsx)(s.a,{className:"header-anchor","aria-hidden":"true",href:"#css-conversion-properties",children:"#"}),"CSS conversion properties"]}),"\n",(0,l.jsxs)(s.p,{children:["By default, rootFontSize is 50. So the CSS styles value are converted according to the ratio of ",(0,l.jsx)(s.code,{children:"1rem : 50px"}),"."]}),"\n",(0,l.jsxs)(s.div,{className:"language-css",children:[(0,l.jsx)(s.div,{className:""}),(0,l.jsxs)(s.div,{className:"modern-code-content",children:[(0,l.jsx)(s.button,{className:"copy"}),(0,l.jsx)(s.pre,{className:"shiki",style:{backgroundColor:"#2e3440ff"},children:(0,l.jsxs)(s.code,{children:[(0,l.jsx)(s.span,{className:"line",children:(0,l.jsx)(s.span,{style:{color:"#616E88"},children:"/* input */"})}),"\n",(0,l.jsxs)(s.span,{className:"line",children:[(0,l.jsx)(s.span,{style:{color:"#81A1C1"},children:"h1"}),(0,l.jsx)(s.span,{style:{color:"#D8DEE9FF"},children:" "}),(0,l.jsx)(s.span,{style:{color:"#ECEFF4"},children:"{"})]}),"\n",(0,l.jsxs)(s.span,{className:"line",children:[(0,l.jsx)(s.span,{style:{color:"#D8DEE9FF"},children:"  "}),(0,l.jsx)(s.span,{style:{color:"#D8DEE9"},children:"margin"}),(0,l.jsx)(s.span,{style:{color:"#ECEFF4"},children:":"}),(0,l.jsx)(s.span,{style:{color:"#D8DEE9FF"},children:" "}),(0,l.jsx)(s.span,{style:{color:"#B48EAD"},children:"0"}),(0,l.jsx)(s.span,{style:{color:"#88C0D0"},children:" "}),(0,l.jsx)(s.span,{style:{color:"#B48EAD"},children:"0"}),(0,l.jsx)(s.span,{style:{color:"#88C0D0"},children:" "}),(0,l.jsx)(s.span,{style:{color:"#B48EAD"},children:"16"}),(0,l.jsx)(s.span,{style:{color:"#81A1C1"},children:"px;"})]}),"\n",(0,l.jsxs)(s.span,{className:"line",children:[(0,l.jsx)(s.span,{style:{color:"#D8DEE9FF"},children:"  "}),(0,l.jsx)(s.span,{style:{color:"#D8DEE9"},children:"font-size"}),(0,l.jsx)(s.span,{style:{color:"#ECEFF4"},children:":"}),(0,l.jsx)(s.span,{style:{color:"#D8DEE9FF"},children:" "}),(0,l.jsx)(s.span,{style:{color:"#B48EAD"},children:"32"}),(0,l.jsx)(s.span,{style:{color:"#81A1C1"},children:"px;"})]}),"\n",(0,l.jsxs)(s.span,{className:"line",children:[(0,l.jsx)(s.span,{style:{color:"#D8DEE9FF"},children:"  "}),(0,l.jsx)(s.span,{style:{color:"#D8DEE9"},children:"line-height"}),(0,l.jsx)(s.span,{style:{color:"#ECEFF4"},children:":"}),(0,l.jsx)(s.span,{style:{color:"#D8DEE9FF"},children:" "}),(0,l.jsx)(s.span,{style:{color:"#B48EAD"},children:"1.2"}),(0,l.jsx)(s.span,{style:{color:"#81A1C1"},children:";"})]}),"\n",(0,l.jsxs)(s.span,{className:"line",children:[(0,l.jsx)(s.span,{style:{color:"#D8DEE9FF"},children:"  "}),(0,l.jsx)(s.span,{style:{color:"#D8DEE9"},children:"letter-spacing"}),(0,l.jsx)(s.span,{style:{color:"#ECEFF4"},children:":"}),(0,l.jsx)(s.span,{style:{color:"#D8DEE9FF"},children:" "}),(0,l.jsx)(s.span,{style:{color:"#B48EAD"},children:"1"}),(0,l.jsx)(s.span,{style:{color:"#81A1C1"},children:"px;"})]}),"\n",(0,l.jsx)(s.span,{className:"line",children:(0,l.jsx)(s.span,{style:{color:"#ECEFF4"},children:"}"})}),"\n",(0,l.jsx)(s.span,{className:"line"}),"\n",(0,l.jsx)(s.span,{className:"line",children:(0,l.jsx)(s.span,{style:{color:"#616E88"},children:"/* output */"})}),"\n",(0,l.jsxs)(s.span,{className:"line",children:[(0,l.jsx)(s.span,{style:{color:"#81A1C1"},children:"h1"}),(0,l.jsx)(s.span,{style:{color:"#D8DEE9FF"},children:" "}),(0,l.jsx)(s.span,{style:{color:"#ECEFF4"},children:"{"})]}),"\n",(0,l.jsxs)(s.span,{className:"line",children:[(0,l.jsx)(s.span,{style:{color:"#D8DEE9FF"},children:"  "}),(0,l.jsx)(s.span,{style:{color:"#D8DEE9"},children:"margin"}),(0,l.jsx)(s.span,{style:{color:"#ECEFF4"},children:":"}),(0,l.jsx)(s.span,{style:{color:"#D8DEE9FF"},children:" "}),(0,l.jsx)(s.span,{style:{color:"#B48EAD"},children:"0"}),(0,l.jsx)(s.span,{style:{color:"#88C0D0"},children:" "}),(0,l.jsx)(s.span,{style:{color:"#B48EAD"},children:"0"}),(0,l.jsx)(s.span,{style:{color:"#88C0D0"},children:" "}),(0,l.jsx)(s.span,{style:{color:"#B48EAD"},children:"0.32"}),(0,l.jsx)(s.span,{style:{color:"#81A1C1"},children:"rem;"})]}),"\n",(0,l.jsxs)(s.span,{className:"line",children:[(0,l.jsx)(s.span,{style:{color:"#D8DEE9FF"},children:"  "}),(0,l.jsx)(s.span,{style:{color:"#D8DEE9"},children:"font-size"}),(0,l.jsx)(s.span,{style:{color:"#ECEFF4"},children:":"}),(0,l.jsx)(s.span,{style:{color:"#D8DEE9FF"},children:" "}),(0,l.jsx)(s.span,{style:{color:"#B48EAD"},children:"0.64"}),(0,l.jsx)(s.span,{style:{color:"#81A1C1"},children:"rem;"})]}),"\n",(0,l.jsxs)(s.span,{className:"line",children:[(0,l.jsx)(s.span,{style:{color:"#D8DEE9FF"},children:"  "}),(0,l.jsx)(s.span,{style:{color:"#D8DEE9"},children:"line-height"}),(0,l.jsx)(s.span,{style:{color:"#ECEFF4"},children:":"}),(0,l.jsx)(s.span,{style:{color:"#D8DEE9FF"},children:" "}),(0,l.jsx)(s.span,{style:{color:"#B48EAD"},children:"1.2"}),(0,l.jsx)(s.span,{style:{color:"#81A1C1"},children:";"})]}),"\n",(0,l.jsxs)(s.span,{className:"line",children:[(0,l.jsx)(s.span,{style:{color:"#D8DEE9FF"},children:"  "}),(0,l.jsx)(s.span,{style:{color:"#D8DEE9"},children:"letter-spacing"}),(0,l.jsx)(s.span,{style:{color:"#ECEFF4"},children:":"}),(0,l.jsx)(s.span,{style:{color:"#D8DEE9FF"},children:" "}),(0,l.jsx)(s.span,{style:{color:"#B48EAD"},children:"0.02"}),(0,l.jsx)(s.span,{style:{color:"#81A1C1"},children:"rem;"})]}),"\n",(0,l.jsx)(s.span,{className:"line",children:(0,l.jsx)(s.span,{style:{color:"#ECEFF4"},children:"}"})}),"\n",(0,l.jsx)(s.span,{className:"line"})]})})]})]}),"\n",(0,l.jsxs)(s.p,{children:["By default, builder converts all CSS properties from px to rem. If you want to convert only the ",(0,l.jsx)(s.code,{children:"font-size"})," property, you can setting pxtorem.propList is ",(0,l.jsx)(s.code,{children:"['font-size']"}),"."]}),"\n",(0,l.jsxs)(s.div,{className:"language-ts",children:[(0,l.jsx)(s.div,{className:""}),(0,l.jsxs)(s.div,{className:"modern-code-content",children:[(0,l.jsx)(s.button,{className:"copy"}),(0,l.jsx)(s.pre,{className:"shiki",style:{backgroundColor:"#2e3440ff"},children:(0,l.jsxs)(s.code,{children:[(0,l.jsxs)(s.span,{className:"line",children:[(0,l.jsx)(s.span,{style:{color:"#81A1C1"},children:"export"}),(0,l.jsx)(s.span,{style:{color:"#D8DEE9FF"},children:" "}),(0,l.jsx)(s.span,{style:{color:"#81A1C1"},children:"default"}),(0,l.jsx)(s.span,{style:{color:"#D8DEE9FF"},children:" "}),(0,l.jsx)(s.span,{style:{color:"#ECEFF4"},children:"{"})]}),"\n",(0,l.jsxs)(s.span,{className:"line",children:[(0,l.jsx)(s.span,{style:{color:"#D8DEE9FF"},children:"  "}),(0,l.jsx)(s.span,{style:{color:"#D8DEE9"},children:"output"}),(0,l.jsx)(s.span,{style:{color:"#ECEFF4"},children:":"}),(0,l.jsx)(s.span,{style:{color:"#D8DEE9FF"},children:" "}),(0,l.jsx)(s.span,{style:{color:"#ECEFF4"},children:"{"})]}),"\n",(0,l.jsxs)(s.span,{className:"line",children:[(0,l.jsx)(s.span,{style:{color:"#D8DEE9FF"},children:"    "}),(0,l.jsx)(s.span,{style:{color:"#D8DEE9"},children:"convertToRem"}),(0,l.jsx)(s.span,{style:{color:"#ECEFF4"},children:":"}),(0,l.jsx)(s.span,{style:{color:"#D8DEE9FF"},children:" "}),(0,l.jsx)(s.span,{style:{color:"#ECEFF4"},children:"{"})]}),"\n",(0,l.jsxs)(s.span,{className:"line",children:[(0,l.jsx)(s.span,{style:{color:"#D8DEE9FF"},children:"      "}),(0,l.jsx)(s.span,{style:{color:"#D8DEE9"},children:"pxtorem"}),(0,l.jsx)(s.span,{style:{color:"#ECEFF4"},children:":"}),(0,l.jsx)(s.span,{style:{color:"#D8DEE9FF"},children:" "}),(0,l.jsx)(s.span,{style:{color:"#ECEFF4"},children:"{"})]}),"\n",(0,l.jsxs)(s.span,{className:"line",children:[(0,l.jsx)(s.span,{style:{color:"#D8DEE9FF"},children:"        "}),(0,l.jsx)(s.span,{style:{color:"#D8DEE9"},children:"propList"}),(0,l.jsx)(s.span,{style:{color:"#ECEFF4"},children:":"}),(0,l.jsx)(s.span,{style:{color:"#D8DEE9FF"},children:" ["}),(0,l.jsx)(s.span,{style:{color:"#ECEFF4"},children:"'"}),(0,l.jsx)(s.span,{style:{color:"#A3BE8C"},children:"font-size"}),(0,l.jsx)(s.span,{style:{color:"#ECEFF4"},children:"'"}),(0,l.jsx)(s.span,{style:{color:"#D8DEE9FF"},children:"]"}),(0,l.jsx)(s.span,{style:{color:"#ECEFF4"},children:","})]}),"\n",(0,l.jsxs)(s.span,{className:"line",children:[(0,l.jsx)(s.span,{style:{color:"#D8DEE9FF"},children:"      "}),(0,l.jsx)(s.span,{style:{color:"#ECEFF4"},children:"},"})]}),"\n",(0,l.jsxs)(s.span,{className:"line",children:[(0,l.jsx)(s.span,{style:{color:"#D8DEE9FF"},children:"    "}),(0,l.jsx)(s.span,{style:{color:"#ECEFF4"},children:"},"})]}),"\n",(0,l.jsxs)(s.span,{className:"line",children:[(0,l.jsx)(s.span,{style:{color:"#D8DEE9FF"},children:"  "}),(0,l.jsx)(s.span,{style:{color:"#ECEFF4"},children:"},"})]}),"\n",(0,l.jsxs)(s.span,{className:"line",children:[(0,l.jsx)(s.span,{style:{color:"#ECEFF4"},children:"}"}),(0,l.jsx)(s.span,{style:{color:"#81A1C1"},children:";"})]}),"\n",(0,l.jsx)(s.span,{className:"line"})]})})]})]}),"\n",(0,l.jsxs)(s.h2,{id:"setting-the-page-rootfontsize",children:[(0,l.jsx)(s.a,{className:"header-anchor","aria-hidden":"true",href:"#setting-the-page-rootfontsize",children:"#"}),"Setting the page rootFontSize"]}),"\n",(0,l.jsx)(s.p,{children:"The formula for calculating the font size of the page root element is:"}),"\n",(0,l.jsxs)(s.div,{className:"language-text",children:[(0,l.jsx)(s.div,{className:""}),(0,l.jsxs)(s.div,{className:"modern-code-content",children:[(0,l.jsx)(s.button,{className:"copy"}),(0,l.jsx)(s.pre,{children:(0,l.jsx)(s.code,{children:"pageRootFontSize = clientWidth * rootFontSize / screenWidth\n"})})]})]}),"\n",(0,l.jsx)(s.p,{children:"In a mobile browser with a screen width of 390, the default value for rootFontSize is 50 and the screenWidth of the UI design is 375."}),"\n",(0,l.jsxs)(s.p,{children:["The calculated font size for the root element of the page is 52 (",(0,l.jsx)(s.code,{children:"390 * 50 / 375"}),")."]}),"\n",(0,l.jsx)(s.p,{children:"At this point, 1 rem is 52px, 32px\uff080.64 rem\uff09 in the CSS style, the actual size in page is 33.28 px."}),"\n",(0,l.jsxs)(s.div,{className:"language-ts",children:[(0,l.jsx)(s.div,{className:""}),(0,l.jsxs)(s.div,{className:"modern-code-content",children:[(0,l.jsx)(s.button,{className:"copy"}),(0,l.jsx)(s.pre,{className:"shiki",style:{backgroundColor:"#2e3440ff"},children:(0,l.jsxs)(s.code,{children:[(0,l.jsxs)(s.span,{className:"line",children:[(0,l.jsx)(s.span,{style:{color:"#81A1C1"},children:"export"}),(0,l.jsx)(s.span,{style:{color:"#D8DEE9FF"},children:" "}),(0,l.jsx)(s.span,{style:{color:"#81A1C1"},children:"default"}),(0,l.jsx)(s.span,{style:{color:"#D8DEE9FF"},children:" "}),(0,l.jsx)(s.span,{style:{color:"#ECEFF4"},children:"{"})]}),"\n",(0,l.jsxs)(s.span,{className:"line",children:[(0,l.jsx)(s.span,{style:{color:"#D8DEE9FF"},children:"  "}),(0,l.jsx)(s.span,{style:{color:"#D8DEE9"},children:"output"}),(0,l.jsx)(s.span,{style:{color:"#ECEFF4"},children:":"}),(0,l.jsx)(s.span,{style:{color:"#D8DEE9FF"},children:" "}),(0,l.jsx)(s.span,{style:{color:"#ECEFF4"},children:"{"})]}),"\n",(0,l.jsxs)(s.span,{className:"line",children:[(0,l.jsx)(s.span,{style:{color:"#D8DEE9FF"},children:"    "}),(0,l.jsx)(s.span,{style:{color:"#D8DEE9"},children:"convertToRem"}),(0,l.jsx)(s.span,{style:{color:"#ECEFF4"},children:":"}),(0,l.jsx)(s.span,{style:{color:"#D8DEE9FF"},children:" "}),(0,l.jsx)(s.span,{style:{color:"#ECEFF4"},children:"{"})]}),"\n",(0,l.jsxs)(s.span,{className:"line",children:[(0,l.jsx)(s.span,{style:{color:"#D8DEE9FF"},children:"      "}),(0,l.jsx)(s.span,{style:{color:"#D8DEE9"},children:"rootFontSize"}),(0,l.jsx)(s.span,{style:{color:"#ECEFF4"},children:":"}),(0,l.jsx)(s.span,{style:{color:"#D8DEE9FF"},children:" "}),(0,l.jsx)(s.span,{style:{color:"#B48EAD"},children:"50"}),(0,l.jsx)(s.span,{style:{color:"#ECEFF4"},children:","})]}),"\n",(0,l.jsxs)(s.span,{className:"line",children:[(0,l.jsx)(s.span,{style:{color:"#D8DEE9FF"},children:"      "}),(0,l.jsx)(s.span,{style:{color:"#D8DEE9"},children:"screenWidth"}),(0,l.jsx)(s.span,{style:{color:"#ECEFF4"},children:":"}),(0,l.jsx)(s.span,{style:{color:"#D8DEE9FF"},children:" "}),(0,l.jsx)(s.span,{style:{color:"#B48EAD"},children:"375"}),(0,l.jsx)(s.span,{style:{color:"#ECEFF4"},children:","})]}),"\n",(0,l.jsxs)(s.span,{className:"line",children:[(0,l.jsx)(s.span,{style:{color:"#D8DEE9FF"},children:"    "}),(0,l.jsx)(s.span,{style:{color:"#ECEFF4"},children:"},"})]}),"\n",(0,l.jsxs)(s.span,{className:"line",children:[(0,l.jsx)(s.span,{style:{color:"#D8DEE9FF"},children:"  "}),(0,l.jsx)(s.span,{style:{color:"#ECEFF4"},children:"},"})]}),"\n",(0,l.jsxs)(s.span,{className:"line",children:[(0,l.jsx)(s.span,{style:{color:"#ECEFF4"},children:"}"}),(0,l.jsx)(s.span,{style:{color:"#81A1C1"},children:";"})]}),"\n",(0,l.jsx)(s.span,{className:"line"})]})})]})]}),"\n",(0,l.jsxs)(s.h2,{id:"customize-maxrootfontsize",children:[(0,l.jsx)(s.a,{className:"header-anchor","aria-hidden":"true",href:"#customize-maxrootfontsize",children:"#"}),"Customize maxRootFontSize"]}),"\n",(0,l.jsx)(s.p,{children:"In the desktop browser, the page rootFontSize obtained from the calculation formula is often too large. When the calculated result large than the maxRootFontSize, the maxRootFontSize will used as the page rootFontSize."}),"\n",(0,l.jsx)(s.p,{children:"In the desktop browser with a screen width of 1920, the calculated rootFontSize is 349, which exceeds the default maxRootFontSize of 64. 64 is used as the current root element font value."}),"\n",(0,l.jsxs)(s.div,{className:"language-ts",children:[(0,l.jsx)(s.div,{className:""}),(0,l.jsxs)(s.div,{className:"modern-code-content",children:[(0,l.jsx)(s.button,{className:"copy"}),(0,l.jsx)(s.pre,{className:"shiki",style:{backgroundColor:"#2e3440ff"},children:(0,l.jsxs)(s.code,{children:[(0,l.jsxs)(s.span,{className:"line",children:[(0,l.jsx)(s.span,{style:{color:"#81A1C1"},children:"export"}),(0,l.jsx)(s.span,{style:{color:"#D8DEE9FF"},children:" "}),(0,l.jsx)(s.span,{style:{color:"#81A1C1"},children:"default"}),(0,l.jsx)(s.span,{style:{color:"#D8DEE9FF"},children:" "}),(0,l.jsx)(s.span,{style:{color:"#ECEFF4"},children:"{"})]}),"\n",(0,l.jsxs)(s.span,{className:"line",children:[(0,l.jsx)(s.span,{style:{color:"#D8DEE9FF"},children:"  "}),(0,l.jsx)(s.span,{style:{color:"#D8DEE9"},children:"output"}),(0,l.jsx)(s.span,{style:{color:"#ECEFF4"},children:":"}),(0,l.jsx)(s.span,{style:{color:"#D8DEE9FF"},children:" "}),(0,l.jsx)(s.span,{style:{color:"#ECEFF4"},children:"{"})]}),"\n",(0,l.jsxs)(s.span,{className:"line",children:[(0,l.jsx)(s.span,{style:{color:"#D8DEE9FF"},children:"    "}),(0,l.jsx)(s.span,{style:{color:"#D8DEE9"},children:"convertToRem"}),(0,l.jsx)(s.span,{style:{color:"#ECEFF4"},children:":"}),(0,l.jsx)(s.span,{style:{color:"#D8DEE9FF"},children:" "}),(0,l.jsx)(s.span,{style:{color:"#ECEFF4"},children:"{"})]}),"\n",(0,l.jsxs)(s.span,{className:"line",children:[(0,l.jsx)(s.span,{style:{color:"#D8DEE9FF"},children:"      "}),(0,l.jsx)(s.span,{style:{color:"#D8DEE9"},children:"maxRootFontSize"}),(0,l.jsx)(s.span,{style:{color:"#ECEFF4"},children:":"}),(0,l.jsx)(s.span,{style:{color:"#D8DEE9FF"},children:" "}),(0,l.jsx)(s.span,{style:{color:"#B48EAD"},children:"64"}),(0,l.jsx)(s.span,{style:{color:"#ECEFF4"},children:","})]}),"\n",(0,l.jsxs)(s.span,{className:"line",children:[(0,l.jsx)(s.span,{style:{color:"#D8DEE9FF"},children:"    "}),(0,l.jsx)(s.span,{style:{color:"#ECEFF4"},children:"},"})]}),"\n",(0,l.jsxs)(s.span,{className:"line",children:[(0,l.jsx)(s.span,{style:{color:"#D8DEE9FF"},children:"  "}),(0,l.jsx)(s.span,{style:{color:"#ECEFF4"},children:"},"})]}),"\n",(0,l.jsxs)(s.span,{className:"line",children:[(0,l.jsx)(s.span,{style:{color:"#ECEFF4"},children:"}"}),(0,l.jsx)(s.span,{style:{color:"#81A1C1"},children:";"})]}),"\n",(0,l.jsx)(s.span,{className:"line"})]})})]})]}),"\n",(0,l.jsxs)(s.h2,{id:"how-to-determine-if-rem-is-in-effect",children:[(0,l.jsx)(s.a,{className:"header-anchor","aria-hidden":"true",href:"#how-to-determine-if-rem-is-in-effect",children:"#"}),"How to determine if REM is in effect\uff1f"]}),"\n",(0,l.jsxs)(s.ol,{children:["\n",(0,l.jsxs)(s.li,{children:["CSS\uff1aCheck the generated ",(0,l.jsx)(s.code,{children:".css"})," file to see if the value of the corresponding property is converted from px to rem."]}),"\n",(0,l.jsxs)(s.li,{children:["HTML\uff1aOpen the Page Console to see if a valid value exists for ",(0,l.jsx)(s.code,{children:"document.documentElement.style.fontSize"}),"."]}),"\n"]}),"\n",(0,l.jsxs)(s.h2,{id:"how-to-get-the-rootfontsize-value-that-is-actually-in-effect-on-the-page",children:[(0,l.jsx)(s.a,{className:"header-anchor","aria-hidden":"true",href:"#how-to-get-the-rootfontsize-value-that-is-actually-in-effect-on-the-page",children:"#"}),"How to get the rootFontSize value that is actually in effect on the page?"]}),"\n",(0,l.jsxs)(s.p,{children:["The actual rootFontSize in effect for the page is calculated dynamically based on the current page. It can be seen by printing ",(0,l.jsx)(s.code,{children:"document.documentElement.style.fontSize"})," or obtained by ",(0,l.jsx)(s.code,{children:"window.ROOT_FONT_SIZE"}),"."]})]})}s.default=function(e={}){const{wrapper:s}=e.components||{};return s?(0,l.jsx)(s,Object.assign({},e,{children:(0,l.jsx)(i,e)})):i(e)}}}]);