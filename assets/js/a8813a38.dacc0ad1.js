"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([[22932],{15680:(e,t,n)=>{n.d(t,{xA:()=>f,yg:()=>m});var r=n(96540);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var l=r.createContext({}),c=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},f=function(e){var t=c(e.components);return r.createElement(l.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},p=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,a=e.originalType,l=e.parentName,f=s(e,["components","mdxType","originalType","parentName"]),u=c(n),p=i,m=u["".concat(l,".").concat(p)]||u[p]||d[p]||a;return n?r.createElement(m,o(o({ref:t},f),{},{components:n})):r.createElement(m,o({ref:t},f))}));function m(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var a=n.length,o=new Array(a);o[0]=p;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[u]="string"==typeof e?e:i,o[1]=s;for(var c=2;c<a;c++)o[c]=n[c];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}p.displayName="MDXCreateElement"},59489:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>o,default:()=>d,frontMatter:()=>a,metadata:()=>s,toc:()=>c});var r=n(58168),i=(n(96540),n(15680));const a={title:"WEEKS_DIFF",language:"en"},o=void 0,s={unversionedId:"sql-manual/sql-functions/date-time-functions/weeks-diff",id:"sql-manual/sql-functions/date-time-functions/weeks-diff",title:"WEEKS_DIFF",description:"\x3c!--",source:"@site/docs/sql-manual/sql-functions/date-time-functions/weeks-diff.md",sourceDirName:"sql-manual/sql-functions/date-time-functions",slug:"/sql-manual/sql-functions/date-time-functions/weeks-diff",permalink:"/docs/dev/sql-manual/sql-functions/date-time-functions/weeks-diff",draft:!1,tags:[],version:"current",frontMatter:{title:"WEEKS_DIFF",language:"en"},sidebar:"docs",previous:{title:"WEEKS_ADD",permalink:"/docs/dev/sql-manual/sql-functions/date-time-functions/weeks-add"},next:{title:"WEEKS_SUB",permalink:"/docs/dev/sql-manual/sql-functions/date-time-functions/weeks-sub"}},l={},c=[{value:"weeks_diff",id:"weeks_diff",level:2},{value:"description",id:"description",level:3},{value:"Syntax",id:"syntax",level:4},{value:"example",id:"example",level:3},{value:"keywords",id:"keywords",level:3}],f={toc:c},u="wrapper";function d(e){let{components:t,...n}=e;return(0,i.yg)(u,(0,r.A)({},f,n,{components:t,mdxType:"MDXLayout"}),(0,i.yg)("h2",{id:"weeks_diff"},"weeks_diff"),(0,i.yg)("h3",{id:"description"},"description"),(0,i.yg)("h4",{id:"syntax"},"Syntax"),(0,i.yg)("p",null,(0,i.yg)("inlineCode",{parentName:"p"},"INT weeks_diff(DATETIME enddate, DATETIME startdate)")),(0,i.yg)("p",null,"The difference between the start time and the end time is weeks"),(0,i.yg)("h3",{id:"example"},"example"),(0,i.yg)("pre",null,(0,i.yg)("code",{parentName:"pre"},"mysql> select weeks_diff('2020-12-25','2020-10-25');\n+----------------------------------------------------------+\n| weeks_diff('2020-12-25 00:00:00', '2020-10-25 00:00:00') |\n+----------------------------------------------------------+\n|                                                        8 |\n+----------------------------------------------------------+\n")),(0,i.yg)("h3",{id:"keywords"},"keywords"),(0,i.yg)("pre",null,(0,i.yg)("code",{parentName:"pre"},"weeks_diff\n")))}d.isMDXComponent=!0}}]);