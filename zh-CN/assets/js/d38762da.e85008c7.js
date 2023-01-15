"use strict";(self.webpackChunkselectdb_portal=self.webpackChunkselectdb_portal||[]).push([[18248],{3905:(t,e,n)=>{n.d(e,{Zo:()=>p,kt:()=>f});var l=n(67294);function r(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function a(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);e&&(l=l.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,l)}return n}function o(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?a(Object(n),!0).forEach((function(e){r(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function u(t,e){if(null==t)return{};var n,l,r=function(t,e){if(null==t)return{};var n,l,r={},a=Object.keys(t);for(l=0;l<a.length;l++)n=a[l],e.indexOf(n)>=0||(r[n]=t[n]);return r}(t,e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);for(l=0;l<a.length;l++)n=a[l],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(r[n]=t[n])}return r}var s=l.createContext({}),i=function(t){var e=l.useContext(s),n=e;return t&&(n="function"==typeof t?t(e):o(o({},e),t)),n},p=function(t){var e=i(t.components);return l.createElement(s.Provider,{value:e},t.children)},c="mdxType",d={inlineCode:"code",wrapper:function(t){var e=t.children;return l.createElement(l.Fragment,{},e)}},m=l.forwardRef((function(t,e){var n=t.components,r=t.mdxType,a=t.originalType,s=t.parentName,p=u(t,["components","mdxType","originalType","parentName"]),c=i(n),m=r,f=c["".concat(s,".").concat(m)]||c[m]||d[m]||a;return n?l.createElement(f,o(o({ref:e},p),{},{components:n})):l.createElement(f,o({ref:e},p))}));function f(t,e){var n=arguments,r=e&&e.mdxType;if("string"==typeof t||r){var a=n.length,o=new Array(a);o[0]=m;var u={};for(var s in e)hasOwnProperty.call(e,s)&&(u[s]=e[s]);u.originalType=t,u[c]="string"==typeof t?t:r,o[1]=u;for(var i=2;i<a;i++)o[i]=n[i];return l.createElement.apply(null,o)}return l.createElement.apply(null,n)}m.displayName="MDXCreateElement"},62116:(t,e,n)=>{n.r(e),n.d(e,{assets:()=>s,contentTitle:()=>o,default:()=>c,frontMatter:()=>a,metadata:()=>u,toc:()=>i});var l=n(87462),r=(n(67294),n(3905));const a={title:"date_format",language:"zh-CN"},o=void 0,u={unversionedId:"sql-manual/sql-functions/date-time-functions/date_format",id:"sql-manual/sql-functions/date-time-functions/date_format",title:"date_format",description:"\x3c!--",source:"@site/i18n/zh-CN/docusaurus-plugin-content-docs/current/sql-manual/sql-functions/date-time-functions/date_format.md",sourceDirName:"sql-manual/sql-functions/date-time-functions",slug:"/sql-manual/sql-functions/date-time-functions/date_format",permalink:"/zh-CN/docs/sql-manual/sql-functions/date-time-functions/date_format",draft:!1,tags:[],version:"current",frontMatter:{title:"date_format",language:"zh-CN"},sidebar:"docs",previous:{title:"date_sub",permalink:"/zh-CN/docs/sql-manual/sql-functions/date-time-functions/date_sub"},next:{title:"datediff",permalink:"/zh-CN/docs/sql-manual/sql-functions/date-time-functions/datediff"}},s={},i=[{value:"date_format",id:"date_format",level:2},{value:"description",id:"description",level:3},{value:"Syntax",id:"syntax",level:4},{value:"example",id:"example",level:3},{value:"keywords",id:"keywords",level:3}],p={toc:i};function c(t){let{components:e,...n}=t;return(0,r.kt)("wrapper",(0,l.Z)({},p,n,{components:e,mdxType:"MDXLayout"}),(0,r.kt)("h2",{id:"date_format"},"date_format"),(0,r.kt)("h3",{id:"description"},"description"),(0,r.kt)("h4",{id:"syntax"},"Syntax"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"VARCHAR DATE_FORMAT(DATETIME date, VARCHAR format)")),(0,r.kt)("p",null,"\u5c06\u65e5\u671f\u7c7b\u578b\u6309\u7167format\u7684\u7c7b\u578b\u8f6c\u5316\u4e3a\u5b57\u7b26\u4e32\uff0c\n\u5f53\u524d\u652f\u6301\u6700\u5927128\u5b57\u8282\u7684\u5b57\u7b26\u4e32\uff0c\u5982\u679c\u8fd4\u56de\u503c\u957f\u5ea6\u8d85\u8fc7128\uff0c\u5219\u8fd4\u56deNULL"),(0,r.kt)("p",null,"date \u53c2\u6570\u662f\u5408\u6cd5\u7684\u65e5\u671f\u3002format \u89c4\u5b9a\u65e5\u671f/\u65f6\u95f4\u7684\u8f93\u51fa\u683c\u5f0f\u3002"),(0,r.kt)("p",null,"\u53ef\u4ee5\u4f7f\u7528\u7684\u683c\u5f0f\u6709\uff1a"),(0,r.kt)("p",null,"%a | \u7f29\u5199\u661f\u671f\u540d     "),(0,r.kt)("p",null,"%b | \u7f29\u5199\u6708\u540d   "),(0,r.kt)("p",null,"%c | \u6708\uff0c\u6570\u503c "),(0,r.kt)("p",null,"%D | \u5e26\u6709\u82f1\u6587\u524d\u7f00\u7684\u6708\u4e2d\u7684\u5929       "),(0,r.kt)("p",null,"%d | \u6708\u7684\u5929\uff0c\u6570\u503c(00-31)"),(0,r.kt)("p",null,"%e | \u6708\u7684\u5929\uff0c\u6570\u503c(0-31)"),(0,r.kt)("p",null,"%f | \u5fae\u79d2"),(0,r.kt)("p",null,"%H | \u5c0f\u65f6 (00-23)"),(0,r.kt)("p",null,"%h | \u5c0f\u65f6 (01-12)"),(0,r.kt)("p",null,"%I | \u5c0f\u65f6 (01-12)"),(0,r.kt)("p",null,"%i | \u5206\u949f\uff0c\u6570\u503c(00-59)"),(0,r.kt)("p",null,"%j | \u5e74\u7684\u5929 (001-366)"),(0,r.kt)("p",null,"%k | \u5c0f\u65f6 (0-23)"),(0,r.kt)("p",null,"%l | \u5c0f\u65f6 (1-12)"),(0,r.kt)("p",null,"%M | \u6708\u540d"),(0,r.kt)("p",null,"%m | \u6708\uff0c\u6570\u503c(00-12)"),(0,r.kt)("p",null,"%p | AM \u6216 PM"),(0,r.kt)("p",null,"%r | \u65f6\u95f4\uff0c12-\u5c0f\u65f6\uff08hh:mm:ss AM \u6216 PM\uff09"),(0,r.kt)("p",null,"%S | \u79d2(00-59)"),(0,r.kt)("p",null,"%s | \u79d2(00-59)"),(0,r.kt)("p",null,"%T | \u65f6\u95f4, 24-\u5c0f\u65f6 (hh:mm:ss)"),(0,r.kt)("p",null,"%U | \u5468 (00-53) \u661f\u671f\u65e5\u662f\u4e00\u5468\u7684\u7b2c\u4e00\u5929"),(0,r.kt)("p",null,"%u | \u5468 (00-53) \u661f\u671f\u4e00\u662f\u4e00\u5468\u7684\u7b2c\u4e00\u5929"),(0,r.kt)("p",null,"%V | \u5468 (01-53) \u661f\u671f\u65e5\u662f\u4e00\u5468\u7684\u7b2c\u4e00\u5929\uff0c\u4e0e %X \u4f7f\u7528"),(0,r.kt)("p",null,"%v | \u5468 (01-53) \u661f\u671f\u4e00\u662f\u4e00\u5468\u7684\u7b2c\u4e00\u5929\uff0c\u4e0e %x \u4f7f\u7528"),(0,r.kt)("p",null,"%W | \u661f\u671f\u540d"),(0,r.kt)("p",null,"%w | \u5468\u7684\u5929 \uff080=\u661f\u671f\u65e5, 6=\u661f\u671f\u516d\uff09"),(0,r.kt)("p",null,"%X | \u5e74\uff0c\u5176\u4e2d\u7684\u661f\u671f\u65e5\u662f\u5468\u7684\u7b2c\u4e00\u5929\uff0c4 \u4f4d\uff0c\u4e0e %V \u4f7f\u7528"),(0,r.kt)("p",null,"%x | \u5e74\uff0c\u5176\u4e2d\u7684\u661f\u671f\u4e00\u662f\u5468\u7684\u7b2c\u4e00\u5929\uff0c4 \u4f4d\uff0c\u4e0e %v \u4f7f\u7528"),(0,r.kt)("p",null,"%Y | \u5e74\uff0c4 \u4f4d          "),(0,r.kt)("p",null,"%y | \u5e74\uff0c2 \u4f4d"),(0,r.kt)("p",null,"%% | \u7528\u4e8e\u8868\u793a %"),(0,r.kt)("p",null,"\u8fd8\u53ef\u4ee5\u4f7f\u7528\u4e09\u79cd\u7279\u6b8a\u683c\u5f0f\uff1a"),(0,r.kt)("p",null,"yyyyMMdd"),(0,r.kt)("p",null,"yyyy-MM-dd"),(0,r.kt)("p",null,"yyyy-MM-dd HH:mm:ss"),(0,r.kt)("h3",{id:"example"},"example"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"mysql> select date_format('2009-10-04 22:23:00', '%W %M %Y');\n+------------------------------------------------+\n| date_format('2009-10-04 22:23:00', '%W %M %Y') |\n+------------------------------------------------+\n| Sunday October 2009                            |\n+------------------------------------------------+\n\nmysql> select date_format('2007-10-04 22:23:00', '%H:%i:%s');\n+------------------------------------------------+\n| date_format('2007-10-04 22:23:00', '%H:%i:%s') |\n+------------------------------------------------+\n| 22:23:00                                       |\n+------------------------------------------------+\n\nmysql> select date_format('1900-10-04 22:23:00', '%D %y %a %d %m %b %j');\n+------------------------------------------------------------+\n| date_format('1900-10-04 22:23:00', '%D %y %a %d %m %b %j') |\n+------------------------------------------------------------+\n| 4th 00 Thu 04 10 Oct 277                                   |\n+------------------------------------------------------------+\n\nmysql> select date_format('1997-10-04 22:23:00', '%H %k %I %r %T %S %w');\n+------------------------------------------------------------+\n| date_format('1997-10-04 22:23:00', '%H %k %I %r %T %S %w') |\n+------------------------------------------------------------+\n| 22 22 10 10:23:00 PM 22:23:00 00 6                         |\n+------------------------------------------------------------+\n\nmysql> select date_format('1999-01-01 00:00:00', '%X %V'); \n+---------------------------------------------+\n| date_format('1999-01-01 00:00:00', '%X %V') |\n+---------------------------------------------+\n| 1998 52                                     |\n+---------------------------------------------+\n\nmysql> select date_format('2006-06-01', '%d');\n+------------------------------------------+\n| date_format('2006-06-01 00:00:00', '%d') |\n+------------------------------------------+\n| 01                                       |\n+------------------------------------------+\n\nmysql> select date_format('2006-06-01', '%%%d');\n+--------------------------------------------+\n| date_format('2006-06-01 00:00:00', '%%%d') |\n+--------------------------------------------+\n| %01                                        |\n+--------------------------------------------+\n")),(0,r.kt)("h3",{id:"keywords"},"keywords"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"DATE_FORMAT,DATE,FORMAT\n")))}c.isMDXComponent=!0}}]);