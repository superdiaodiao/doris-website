"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([[65182],{15680:(e,t,n)=>{n.d(t,{xA:()=>p,yg:()=>f});var a=n(96540);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var y=a.createContext({}),d=function(e){var t=a.useContext(y),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=d(e.components);return a.createElement(y.Provider,{value:t},e.children)},g="mdxType",s={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,l=e.originalType,y=e.parentName,p=o(e,["components","mdxType","originalType","parentName"]),g=d(n),m=r,f=g["".concat(y,".").concat(m)]||g[m]||s[m]||l;return n?a.createElement(f,i(i({ref:t},p),{},{components:n})):a.createElement(f,i({ref:t},p))}));function f(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=n.length,i=new Array(l);i[0]=m;var o={};for(var y in t)hasOwnProperty.call(t,y)&&(o[y]=t[y]);o.originalType=e,o[g]="string"==typeof e?e:r,i[1]=o;for(var d=2;d<l;d++)i[d]=n[d];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},87221:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>y,contentTitle:()=>i,default:()=>s,frontMatter:()=>l,metadata:()=>o,toc:()=>d});var a=n(58168),r=(n(96540),n(15680));const l={title:"week",language:"en"},i=void 0,o={unversionedId:"sql-manual/sql-functions/date-time-functions/week",id:"version-1.2/sql-manual/sql-functions/date-time-functions/week",title:"week",description:"\x3c!--",source:"@site/versioned_docs/version-1.2/sql-manual/sql-functions/date-time-functions/week.md",sourceDirName:"sql-manual/sql-functions/date-time-functions",slug:"/sql-manual/sql-functions/date-time-functions/week",permalink:"/docs/1.2/sql-manual/sql-functions/date-time-functions/week",draft:!1,tags:[],version:"1.2",frontMatter:{title:"week",language:"en"},sidebar:"docs",previous:{title:"dayofweek",permalink:"/docs/1.2/sql-manual/sql-functions/date-time-functions/dayofweek"},next:{title:"weekday",permalink:"/docs/1.2/sql-manual/sql-functions/date-time-functions/weekday"}},y={},d=[{value:"week",id:"week",level:2},{value:"Description",id:"description",level:3},{value:"Syntax",id:"syntax",level:4},{value:"example",id:"example",level:3},{value:"keywords",id:"keywords",level:3}],p={toc:d},g="wrapper";function s(e){let{components:t,...n}=e;return(0,r.yg)(g,(0,a.A)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,r.yg)("h2",{id:"week"},"week"),(0,r.yg)("h3",{id:"description"},"Description"),(0,r.yg)("h4",{id:"syntax"},"Syntax"),(0,r.yg)("p",null,(0,r.yg)("inlineCode",{parentName:"p"},"INT WEEK(DATE date[, INT mode])")),(0,r.yg)("p",null,"Returns the week number for date.The value of the mode argument defaults to 0.\nThe following table describes how the mode argument works."),(0,r.yg)("table",null,(0,r.yg)("thead",{parentName:"table"},(0,r.yg)("tr",{parentName:"thead"},(0,r.yg)("th",{parentName:"tr",align:"left"},"Mode"),(0,r.yg)("th",{parentName:"tr",align:"left"},"First day of week"),(0,r.yg)("th",{parentName:"tr",align:"left"},"Range"),(0,r.yg)("th",{parentName:"tr",align:"left"},"Week 1 is the first week \u2026"))),(0,r.yg)("tbody",{parentName:"table"},(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:"left"},"0"),(0,r.yg)("td",{parentName:"tr",align:"left"},"Sunday"),(0,r.yg)("td",{parentName:"tr",align:"left"},"0-53"),(0,r.yg)("td",{parentName:"tr",align:"left"},"with a Sunday in this year")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:"left"},"1"),(0,r.yg)("td",{parentName:"tr",align:"left"},"Monday"),(0,r.yg)("td",{parentName:"tr",align:"left"},"0-53"),(0,r.yg)("td",{parentName:"tr",align:"left"},"with 4 or more days this year")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:"left"},"2"),(0,r.yg)("td",{parentName:"tr",align:"left"},"Sunday"),(0,r.yg)("td",{parentName:"tr",align:"left"},"1-53"),(0,r.yg)("td",{parentName:"tr",align:"left"},"with a Sunday in this year")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:"left"},"3"),(0,r.yg)("td",{parentName:"tr",align:"left"},"Monday"),(0,r.yg)("td",{parentName:"tr",align:"left"},"1-53"),(0,r.yg)("td",{parentName:"tr",align:"left"},"with 4 or more days this year")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:"left"},"4"),(0,r.yg)("td",{parentName:"tr",align:"left"},"Sunday"),(0,r.yg)("td",{parentName:"tr",align:"left"},"0-53"),(0,r.yg)("td",{parentName:"tr",align:"left"},"with 4 or more days this year")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:"left"},"5"),(0,r.yg)("td",{parentName:"tr",align:"left"},"Monday"),(0,r.yg)("td",{parentName:"tr",align:"left"},"0-53"),(0,r.yg)("td",{parentName:"tr",align:"left"},"with a Monday in this year")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:"left"},"6"),(0,r.yg)("td",{parentName:"tr",align:"left"},"Sunday"),(0,r.yg)("td",{parentName:"tr",align:"left"},"1-53"),(0,r.yg)("td",{parentName:"tr",align:"left"},"with 4 or more days this year")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:"left"},"7"),(0,r.yg)("td",{parentName:"tr",align:"left"},"Monday"),(0,r.yg)("td",{parentName:"tr",align:"left"},"1-53"),(0,r.yg)("td",{parentName:"tr",align:"left"},"with a Monday in this year")))),(0,r.yg)("p",null,"The parameter is Date or Datetime type"),(0,r.yg)("h3",{id:"example"},"example"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre"},"mysql> select week('2020-1-1');\n+------------------+\n| week('2020-1-1') |\n+------------------+\n|                0 |\n+------------------+\n")),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre"},"mysql> select week('2020-7-1',1);\n+---------------------+\n| week('2020-7-1', 1) |\n+---------------------+\n|                  27 |\n+---------------------+\n")),(0,r.yg)("h3",{id:"keywords"},"keywords"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre"},"WEEK\n")))}s.isMDXComponent=!0}}]);