"use strict";(self.webpackChunkselectdb_portal=self.webpackChunkselectdb_portal||[]).push([[27631],{3905:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>m});var r=n(67294);function s(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){s(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function a(e,t){if(null==e)return{};var n,r,s=function(e,t){if(null==e)return{};var n,r,s={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(s[n]=e[n]);return s}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(s[n]=e[n])}return s}var c=r.createContext({}),l=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},d=function(e){var t=l(e.components);return r.createElement(c.Provider,{value:t},e.children)},f="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},p=r.forwardRef((function(e,t){var n=e.components,s=e.mdxType,o=e.originalType,c=e.parentName,d=a(e,["components","mdxType","originalType","parentName"]),f=l(n),p=s,m=f["".concat(c,".").concat(p)]||f[p]||u[p]||o;return n?r.createElement(m,i(i({ref:t},d),{},{components:n})):r.createElement(m,i({ref:t},d))}));function m(e,t){var n=arguments,s=t&&t.mdxType;if("string"==typeof e||s){var o=n.length,i=new Array(o);i[0]=p;var a={};for(var c in t)hasOwnProperty.call(t,c)&&(a[c]=t[c]);a.originalType=e,a[f]="string"==typeof e?e:s,i[1]=a;for(var l=2;l<o;l++)i[l]=n[l];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}p.displayName="MDXCreateElement"},86148:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>i,default:()=>f,frontMatter:()=>o,metadata:()=>a,toc:()=>l});var r=n(87462),s=(n(67294),n(3905));const o={title:"seconds_diff",language:"zh-CN"},i=void 0,a={unversionedId:"sql-manual/sql-functions/date-time-functions/seconds_diff",id:"version-dev/sql-manual/sql-functions/date-time-functions/seconds_diff",title:"seconds_diff",description:"\x3c!--",source:"@site/i18n/zh-CN/docusaurus-plugin-content-docs/version-dev/sql-manual/sql-functions/date-time-functions/seconds_diff.md",sourceDirName:"sql-manual/sql-functions/date-time-functions",slug:"/sql-manual/sql-functions/date-time-functions/seconds_diff",permalink:"/zh-CN/docs/dev/sql-manual/sql-functions/date-time-functions/seconds_diff",draft:!1,editUrl:"https://github.com/apache/doris/edit/master/docs/zh-CN/docs/sql-manual/sql-functions/date-time-functions/seconds_diff.md",tags:[],version:"dev",frontMatter:{title:"seconds_diff",language:"zh-CN"},sidebar:"docs",previous:{title:"seconds_add",permalink:"/zh-CN/docs/dev/sql-manual/sql-functions/date-time-functions/seconds_add"},next:{title:"seconds_sub",permalink:"/zh-CN/docs/dev/sql-manual/sql-functions/date-time-functions/seconds_sub"}},c={},l=[{value:"seconds_diff",id:"seconds_diff",level:2},{value:"description",id:"description",level:3},{value:"Syntax",id:"syntax",level:4},{value:"example",id:"example",level:3},{value:"keywords",id:"keywords",level:3}],d={toc:l};function f(e){let{components:t,...n}=e;return(0,s.kt)("wrapper",(0,r.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,s.kt)("h2",{id:"seconds_diff"},"seconds_diff"),(0,s.kt)("h3",{id:"description"},"description"),(0,s.kt)("h4",{id:"syntax"},"Syntax"),(0,s.kt)("p",null,(0,s.kt)("inlineCode",{parentName:"p"},"INT seconds_diff(DATETIME enddate, DATETIME startdate)")),(0,s.kt)("p",null,"\u5f00\u59cb\u65f6\u95f4\u5230\u7ed3\u675f\u65f6\u95f4\u76f8\u5dee\u51e0\u79d2"),(0,s.kt)("h3",{id:"example"},"example"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre"},"mysql> select seconds_diff('2020-12-25 22:00:00','2020-12-25 21:00:00');\n+------------------------------------------------------------+\n| seconds_diff('2020-12-25 22:00:00', '2020-12-25 21:00:00') |\n+------------------------------------------------------------+\n|                                                       3600 |\n+------------------------------------------------------------+\n")),(0,s.kt)("h3",{id:"keywords"},"keywords"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre"},"seconds_diff\n")))}f.isMDXComponent=!0}}]);