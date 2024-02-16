"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([[81721],{15680:(e,t,n)=>{n.d(t,{xA:()=>c,yg:()=>y});var r=n(96540);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var d=r.createContext({}),l=function(e){var t=r.useContext(d),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},c=function(e){var t=l(e.components);return r.createElement(d.Provider,{value:t},e.children)},f="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},p=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,d=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),f=l(n),p=a,y=f["".concat(d,".").concat(p)]||f[p]||u[p]||i;return n?r.createElement(y,o(o({ref:t},c),{},{components:n})):r.createElement(y,o({ref:t},c))}));function y(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=p;var s={};for(var d in t)hasOwnProperty.call(t,d)&&(s[d]=t[d]);s.originalType=e,s[f]="string"==typeof e?e:a,o[1]=s;for(var l=2;l<i;l++)o[l]=n[l];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}p.displayName="MDXCreateElement"},15009:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>d,contentTitle:()=>o,default:()=>u,frontMatter:()=>i,metadata:()=>s,toc:()=>l});var r=n(58168),a=(n(96540),n(15680));const i={title:"DAYS_DIFF",language:"en"},o=void 0,s={unversionedId:"sql-manual/sql-functions/date-time-functions/days-diff",id:"version-2.0/sql-manual/sql-functions/date-time-functions/days-diff",title:"DAYS_DIFF",description:"\x3c!--",source:"@site/versioned_docs/version-2.0/sql-manual/sql-functions/date-time-functions/days-diff.md",sourceDirName:"sql-manual/sql-functions/date-time-functions",slug:"/sql-manual/sql-functions/date-time-functions/days-diff",permalink:"/docs/sql-manual/sql-functions/date-time-functions/days-diff",draft:!1,tags:[],version:"2.0",frontMatter:{title:"DAYS_DIFF",language:"en"},sidebar:"docs",previous:{title:"DAYS_ADD",permalink:"/docs/sql-manual/sql-functions/date-time-functions/days-add"},next:{title:"DAYS_SUB",permalink:"/docs/sql-manual/sql-functions/date-time-functions/days-sub"}},d={},l=[{value:"days_diff",id:"days_diff",level:2},{value:"description",id:"description",level:3},{value:"Syntax",id:"syntax",level:4},{value:"example",id:"example",level:3},{value:"keywords",id:"keywords",level:3}],c={toc:l},f="wrapper";function u(e){let{components:t,...n}=e;return(0,a.yg)(f,(0,r.A)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,a.yg)("h2",{id:"days_diff"},"days_diff"),(0,a.yg)("h3",{id:"description"},"description"),(0,a.yg)("h4",{id:"syntax"},"Syntax"),(0,a.yg)("p",null,(0,a.yg)("inlineCode",{parentName:"p"},"INT days_diff(DATETIME enddate, DATETIME startdate)")),(0,a.yg)("p",null,'The number of days between end date and start date, the date judgment is accurate to seconds and rounded down to the nearest integer. Different from the date_diff function, the datediff function judges the date with precision to the day."'),(0,a.yg)("h3",{id:"example"},"example"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre"},"mysql> select days_diff('2020-12-25 22:00:00','2020-12-24 22:00:00');\n+---------------------------------------------------------+\n| days_diff('2020-12-25 22:00:00', '2020-12-24 22:00:00') |\n+---------------------------------------------------------+\n|                                                       1 |\n+---------------------------------------------------------+\n\nmysql> select days_diff('2020-12-25 22:00:00','2020-12-24 22:00:01');\n+---------------------------------------------------------+\n| days_diff('2020-12-24 22:00:01', '2020-12-25 22:00:00') |\n+---------------------------------------------------------+\n|                                                       0 |\n+---------------------------------------------------------+\n")),(0,a.yg)("h3",{id:"keywords"},"keywords"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre"},"days_diff\n")))}u.isMDXComponent=!0}}]);