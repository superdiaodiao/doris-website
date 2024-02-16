"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([[49872],{15680:(e,n,t)=>{t.d(n,{xA:()=>u,yg:()=>m});var r=t(96540);function i(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function a(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function l(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?a(Object(t),!0).forEach((function(n){i(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function o(e,n){if(null==e)return{};var t,r,i=function(e,n){if(null==e)return{};var t,r,i={},a=Object.keys(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||(i[t]=e[t]);return i}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}var c=r.createContext({}),s=function(e){var n=r.useContext(c),t=n;return e&&(t="function"==typeof e?e(n):l(l({},n),e)),t},u=function(e){var n=s(e.components);return r.createElement(c.Provider,{value:n},e.children)},d="mdxType",p={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},y=r.forwardRef((function(e,n){var t=e.components,i=e.mdxType,a=e.originalType,c=e.parentName,u=o(e,["components","mdxType","originalType","parentName"]),d=s(t),y=i,m=d["".concat(c,".").concat(y)]||d[y]||p[y]||a;return t?r.createElement(m,l(l({ref:n},u),{},{components:t})):r.createElement(m,l({ref:n},u))}));function m(e,n){var t=arguments,i=n&&n.mdxType;if("string"==typeof e||i){var a=t.length,l=new Array(a);l[0]=y;var o={};for(var c in n)hasOwnProperty.call(n,c)&&(o[c]=n[c]);o.originalType=e,o[d]="string"==typeof e?e:i,l[1]=o;for(var s=2;s<a;s++)l[s]=t[s];return r.createElement.apply(null,l)}return r.createElement.apply(null,t)}y.displayName="MDXCreateElement"},26256:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>c,contentTitle:()=>l,default:()=>p,frontMatter:()=>a,metadata:()=>o,toc:()=>s});var r=t(58168),i=(t(96540),t(15680));const a={title:"date_ceil",language:"en"},l=void 0,o={unversionedId:"sql-manual/sql-functions/date-time-functions/date_ceil",id:"sql-manual/sql-functions/date-time-functions/date_ceil",title:"date_ceil",description:"\x3c!--",source:"@site/docs/sql-manual/sql-functions/date-time-functions/date_ceil.md",sourceDirName:"sql-manual/sql-functions/date-time-functions",slug:"/sql-manual/sql-functions/date-time-functions/date_ceil",permalink:"/docs/dev/sql-manual/sql-functions/date-time-functions/date_ceil",draft:!1,tags:[],version:"current",frontMatter:{title:"date_ceil",language:"en"}},c={},s=[{value:"date_ceil",id:"date_ceil",level:2},{value:"description",id:"description",level:3},{value:"Syntax",id:"syntax",level:4},{value:"example",id:"example",level:3},{value:"keywords",id:"keywords",level:3}],u={toc:s},d="wrapper";function p(e){let{components:n,...t}=e;return(0,i.yg)(d,(0,r.A)({},u,t,{components:n,mdxType:"MDXLayout"}),(0,i.yg)("h2",{id:"date_ceil"},"date_ceil"),(0,i.yg)("h3",{id:"description"},"description"),(0,i.yg)("h4",{id:"syntax"},"Syntax"),(0,i.yg)("p",null,(0,i.yg)("inlineCode",{parentName:"p"},"DATETIME DATE_CEIL(DATETIME datetime, INTERVAL period type)")),(0,i.yg)("p",null,"Convert the date to the nearest rounding up time of the specified time interval period."),(0,i.yg)("p",null,"The datetime parameter is a valid date expression."),(0,i.yg)("p",null,"The period parameter specifies how many units each cycle consists of, starting from 0001-01-01T00:00:00"),(0,i.yg)("p",null,"type \uff1aYEAR, MONTH, DAY, HOUR, MINUTE, SECOND."),(0,i.yg)("h3",{id:"example"},"example"),(0,i.yg)("pre",null,(0,i.yg)("code",{parentName:"pre"},"mysql [(none)]>select date_ceil(\"2023-07-13 22:28:18\",interval 5 second);\n+--------------------------------------------------------------+\n| second_ceil('2023-07-13 22:28:18', 5, '0001-01-01 00:00:00') |\n+--------------------------------------------------------------+\n| 2023-07-13 22:28:20                                          |\n+--------------------------------------------------------------+\n1 row in set (0.01 sec)\n\nmysql [(none)]>select date_ceil(\"2023-07-13 22:28:18\",interval 5 minute);\n+--------------------------------------------------------------+\n| minute_ceil('2023-07-13 22:28:18', 5, '0001-01-01 00:00:00') |\n+--------------------------------------------------------------+\n| 2023-07-13 22:30:00                                          |\n+--------------------------------------------------------------+\n1 row in set (0.01 sec)\n\nmysql [(none)]>select date_ceil(\"2023-07-13 22:28:18\",interval 5 hour);\n+------------------------------------------------------------+\n| hour_ceil('2023-07-13 22:28:18', 5, '0001-01-01 00:00:00') |\n+------------------------------------------------------------+\n| 2023-07-13 23:00:00                                        |\n+------------------------------------------------------------+\n1 row in set (0.01 sec)\n\nmysql [(none)]>select date_ceil(\"2023-07-13 22:28:18\",interval 5 day);\n+-----------------------------------------------------------+\n| day_ceil('2023-07-13 22:28:18', 5, '0001-01-01 00:00:00') |\n+-----------------------------------------------------------+\n| 2023-07-15 00:00:00                                       |\n+-----------------------------------------------------------+\n1 row in set (0.00 sec)\n\nmysql [(none)]>select date_ceil(\"2023-07-13 22:28:18\",interval 5 month);\n+-------------------------------------------------------------+\n| month_ceil('2023-07-13 22:28:18', 5, '0001-01-01 00:00:00') |\n+-------------------------------------------------------------+\n| 2023-12-01 00:00:00                                         |\n+-------------------------------------------------------------+\n1 row in set (0.01 sec)\n\nmysql [(none)]>select date_ceil(\"2023-07-13 22:28:18\",interval 5 year);\n+------------------------------------------------------------+\n| year_ceil('2023-07-13 22:28:18', 5, '0001-01-01 00:00:00') |\n+------------------------------------------------------------+\n| 2026-01-01 00:00:00                                        |\n+------------------------------------------------------------+\n1 row in set (0.00 sec)\n")),(0,i.yg)("h3",{id:"keywords"},"keywords"),(0,i.yg)("pre",null,(0,i.yg)("code",{parentName:"pre"},"DATE_CEIL,DATE,CEIL\n")))}p.isMDXComponent=!0}}]);