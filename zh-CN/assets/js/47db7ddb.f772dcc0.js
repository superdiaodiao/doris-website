"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([[19313],{15680:(e,n,t)=>{t.d(n,{xA:()=>u,yg:()=>f});var r=t(96540);function i(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function a(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function o(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?a(Object(t),!0).forEach((function(n){i(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,r,i=function(e,n){if(null==e)return{};var t,r,i={},a=Object.keys(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||(i[t]=e[t]);return i}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}var s=r.createContext({}),c=function(e){var n=r.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):o(o({},n),e)),t},u=function(e){var n=c(e.components);return r.createElement(s.Provider,{value:n},e.children)},p="mdxType",m={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},d=r.forwardRef((function(e,n){var t=e.components,i=e.mdxType,a=e.originalType,s=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),p=c(t),d=i,f=p["".concat(s,".").concat(d)]||p[d]||m[d]||a;return t?r.createElement(f,o(o({ref:n},u),{},{components:t})):r.createElement(f,o({ref:n},u))}));function f(e,n){var t=arguments,i=n&&n.mdxType;if("string"==typeof e||i){var a=t.length,o=new Array(a);o[0]=d;var l={};for(var s in n)hasOwnProperty.call(n,s)&&(l[s]=n[s]);l.originalType=e,l[p]="string"==typeof e?e:i,o[1]=l;for(var c=2;c<a;c++)o[c]=t[c];return r.createElement.apply(null,o)}return r.createElement.apply(null,t)}d.displayName="MDXCreateElement"},88804:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>s,contentTitle:()=>o,default:()=>m,frontMatter:()=>a,metadata:()=>l,toc:()=>c});var r=t(58168),i=(t(96540),t(15680));const a={title:"RTRIM",language:"zh-CN"},o=void 0,l={unversionedId:"sql-manual/sql-functions/string-functions/rtrim",id:"sql-manual/sql-functions/string-functions/rtrim",title:"RTRIM",description:"\x3c!--",source:"@site/i18n/zh-CN/docusaurus-plugin-content-docs/current/sql-manual/sql-functions/string-functions/rtrim.md",sourceDirName:"sql-manual/sql-functions/string-functions",slug:"/sql-manual/sql-functions/string-functions/rtrim",permalink:"/zh-CN/docs/dev/sql-manual/sql-functions/string-functions/rtrim",draft:!1,tags:[],version:"current",frontMatter:{title:"RTRIM",language:"zh-CN"},sidebar:"docs",previous:{title:"LTRIM",permalink:"/zh-CN/docs/dev/sql-manual/sql-functions/string-functions/ltrim"},next:{title:"NULL_OR_EMPTY",permalink:"/zh-CN/docs/dev/sql-manual/sql-functions/string-functions/null-or-empty"}},s={},c=[{value:"rtrim",id:"rtrim",level:2},{value:"description",id:"description",level:3},{value:"Syntax",id:"syntax",level:4},{value:"example",id:"example",level:3},{value:"keywords",id:"keywords",level:3}],u={toc:c},p="wrapper";function m(e){let{components:n,...t}=e;return(0,i.yg)(p,(0,r.A)({},u,t,{components:n,mdxType:"MDXLayout"}),(0,i.yg)("h2",{id:"rtrim"},"rtrim"),(0,i.yg)("h3",{id:"description"},"description"),(0,i.yg)("h4",{id:"syntax"},"Syntax"),(0,i.yg)("p",null,(0,i.yg)("inlineCode",{parentName:"p"},"VARCHAR rtrim(VARCHAR str[, VARCHAR rhs])")),(0,i.yg)("p",null,"\u5f53\u6ca1\u6709rhs\u53c2\u6570\u65f6\uff0c\u5c06\u53c2\u6570 str \u4e2d\u4ece\u53f3\u4fa7\u90e8\u5206\u5f00\u59cb\u90e8\u5206\u8fde\u7eed\u51fa\u73b0\u7684\u7a7a\u683c\u53bb\u6389\uff0c\u5426\u5219\u53bb\u6389rhs"),(0,i.yg)("h3",{id:"example"},"example"),(0,i.yg)("pre",null,(0,i.yg)("code",{parentName:"pre"},"mysql> SELECT rtrim('ab d   ') str;\n+------+\n| str  |\n+------+\n| ab d |\n+------+\n\nmysql> SELECT rtrim('ababccaab','ab') str;\n+---------+\n| str     |\n+---------+\n| ababcca |\n+---------+\n")),(0,i.yg)("h3",{id:"keywords"},"keywords"),(0,i.yg)("pre",null,(0,i.yg)("code",{parentName:"pre"},"RTRIM\n")))}m.isMDXComponent=!0}}]);