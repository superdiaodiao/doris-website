"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([[2544],{15680:(e,t,n)=>{n.d(t,{xA:()=>p,yg:()=>f});var r=n(96540);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var s=r.createContext({}),c=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},p=function(e){var t=c(e.components);return r.createElement(s.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,a=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),u=c(n),m=i,f=u["".concat(s,".").concat(m)]||u[m]||d[m]||a;return n?r.createElement(f,o(o({ref:t},p),{},{components:n})):r.createElement(f,o({ref:t},p))}));function f(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var a=n.length,o=new Array(a);o[0]=m;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[u]="string"==typeof e?e:i,o[1]=l;for(var c=2;c<a;c++)o[c]=n[c];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},61983:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>o,default:()=>d,frontMatter:()=>a,metadata:()=>l,toc:()=>c});var r=n(58168),i=(n(96540),n(15680));const a={title:"TIMESTAMPDIFF",language:"en"},o=void 0,l={unversionedId:"sql-manual/sql-functions/date-time-functions/timestampdiff",id:"sql-manual/sql-functions/date-time-functions/timestampdiff",title:"TIMESTAMPDIFF",description:"\x3c!--",source:"@site/docs/sql-manual/sql-functions/date-time-functions/timestampdiff.md",sourceDirName:"sql-manual/sql-functions/date-time-functions",slug:"/sql-manual/sql-functions/date-time-functions/timestampdiff",permalink:"/docs/dev/sql-manual/sql-functions/date-time-functions/timestampdiff",draft:!1,tags:[],version:"current",frontMatter:{title:"TIMESTAMPDIFF",language:"en"},sidebar:"docs",previous:{title:"TIMESTAMPADD",permalink:"/docs/dev/sql-manual/sql-functions/date-time-functions/timestampadd"},next:{title:"DATE_ADD",permalink:"/docs/dev/sql-manual/sql-functions/date-time-functions/date-add"}},s={},c=[{value:"timestampdiff",id:"timestampdiff",level:2},{value:"description",id:"description",level:3},{value:"Syntax",id:"syntax",level:4},{value:"example",id:"example",level:3},{value:"keywords",id:"keywords",level:3}],p={toc:c},u="wrapper";function d(e){let{components:t,...n}=e;return(0,i.yg)(u,(0,r.A)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,i.yg)("h2",{id:"timestampdiff"},"timestampdiff"),(0,i.yg)("h3",{id:"description"},"description"),(0,i.yg)("h4",{id:"syntax"},"Syntax"),(0,i.yg)("p",null,(0,i.yg)("inlineCode",{parentName:"p"},"INT TIMESTAMPDIFF(unit, DATETIME datetime_expr1, DATETIME datetime_expr2)")),(0,i.yg)("p",null,"Returns datetime_expr2 \u2212 datetime_expr1, where datetime_expr1 and datetime_expr2 are date or datetime expressions. "),(0,i.yg)("p",null,"The unit for the result (an integer) is given by the unit argument."),(0,i.yg)("p",null,"The legal values for unit are the same as those listed in the description of the TIMESTAMPADD() function."),(0,i.yg)("h3",{id:"example"},"example"),(0,i.yg)("pre",null,(0,i.yg)("code",{parentName:"pre"},"\nMySQL> SELECT TIMESTAMPDIFF(MONTH,'2003-02-01','2003-05-01');\n+--------------------------------------------------------------------+\n| timestampdiff(MONTH, '2003-02-01 00:00:00', '2003-05-01 00:00:00') |\n+--------------------------------------------------------------------+\n|                                                                  3 |\n+--------------------------------------------------------------------+\n\nMySQL> SELECT TIMESTAMPDIFF(YEAR,'2002-05-01','2001-01-01');\n+-------------------------------------------------------------------+\n| timestampdiff(YEAR, '2002-05-01 00:00:00', '2001-01-01 00:00:00') |\n+-------------------------------------------------------------------+\n|                                                                -1 |\n+-------------------------------------------------------------------+\n\n\nMySQL> SELECT TIMESTAMPDIFF(MINUTE,'2003-02-01','2003-05-01 12:05:55');\n+---------------------------------------------------------------------+\n| timestampdiff(MINUTE, '2003-02-01 00:00:00', '2003-05-01 12:05:55') |\n+---------------------------------------------------------------------+\n|                                                              128885 |\n+---------------------------------------------------------------------+\n\n")),(0,i.yg)("h3",{id:"keywords"},"keywords"),(0,i.yg)("pre",null,(0,i.yg)("code",{parentName:"pre"},"TIMESTAMPDIFF\n")))}d.isMDXComponent=!0}}]);