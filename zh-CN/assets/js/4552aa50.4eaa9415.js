"use strict";(self.webpackChunkselectdb_portal=self.webpackChunkselectdb_portal||[]).push([[29499],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>m});var r=n(67294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var s=r.createContext({}),a=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},u=function(e){var t=a(e.components);return r.createElement(s.Provider,{value:t},e.children)},p="mdxType",f={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,o=e.originalType,s=e.parentName,u=c(e,["components","mdxType","originalType","parentName"]),p=a(n),d=i,m=p["".concat(s,".").concat(d)]||p[d]||f[d]||o;return n?r.createElement(m,l(l({ref:t},u),{},{components:n})):r.createElement(m,l({ref:t},u))}));function m(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=n.length,l=new Array(o);l[0]=d;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c[p]="string"==typeof e?e:i,l[1]=c;for(var a=2;a<o;a++)l[a]=n[a];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},58139:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>l,default:()=>p,frontMatter:()=>o,metadata:()=>c,toc:()=>a});var r=n(87462),i=(n(67294),n(3905));const o={title:"ltrim",language:"zh-CN"},l=void 0,c={unversionedId:"sql-reference/sql-functions/string-functions/ltrim",id:"version-0.15/sql-reference/sql-functions/string-functions/ltrim",title:"ltrim",description:"\x3c!--",source:"@site/i18n/zh-CN/docusaurus-plugin-content-docs/version-0.15/sql-reference/sql-functions/string-functions/ltrim.md",sourceDirName:"sql-reference/sql-functions/string-functions",slug:"/sql-reference/sql-functions/string-functions/ltrim",permalink:"/zh-CN/docs/0.15/sql-reference/sql-functions/string-functions/ltrim",draft:!1,tags:[],version:"0.15",frontMatter:{title:"ltrim",language:"zh-CN"},sidebar:"docs",previous:{title:"lpad",permalink:"/zh-CN/docs/0.15/sql-reference/sql-functions/string-functions/lpad"},next:{title:"money_format",permalink:"/zh-CN/docs/0.15/sql-reference/sql-functions/string-functions/money_format"}},s={},a=[{value:"description",id:"description",level:2},{value:"Syntax",id:"syntax",level:3},{value:"example",id:"example",level:2},{value:"keyword",id:"keyword",level:2}],u={toc:a};function p(e){let{components:t,...n}=e;return(0,i.kt)("wrapper",(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"ltrim"},"ltrim"),(0,i.kt)("h2",{id:"description"},"description"),(0,i.kt)("h3",{id:"syntax"},"Syntax"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"VARCHAR ltrim(VARCHAR str)")),(0,i.kt)("p",null,"\u5c06\u53c2\u6570 str \u4e2d\u4ece\u5f00\u59cb\u90e8\u5206\u8fde\u7eed\u51fa\u73b0\u7684\u7a7a\u683c\u53bb\u6389"),(0,i.kt)("h2",{id:"example"},"example"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"mysql> SELECT ltrim('   ab d');\n+------------------+\n| ltrim('   ab d') |\n+------------------+\n| ab d             |\n+------------------+\n")),(0,i.kt)("h2",{id:"keyword"},"keyword"),(0,i.kt)("p",null,"LTRIM"))}p.isMDXComponent=!0}}]);