"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([[30184],{15680:(e,t,n)=>{n.d(t,{xA:()=>s,yg:()=>f});var r=n(96540);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var l=r.createContext({}),u=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},s=function(e){var t=u(e.components);return r.createElement(l.Provider,{value:t},e.children)},p="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,a=e.originalType,l=e.parentName,s=c(e,["components","mdxType","originalType","parentName"]),p=u(n),d=i,f=p["".concat(l,".").concat(d)]||p[d]||m[d]||a;return n?r.createElement(f,o(o({ref:t},s),{},{components:n})):r.createElement(f,o({ref:t},s))}));function f(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var a=n.length,o=new Array(a);o[0]=d;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c[p]="string"==typeof e?e:i,o[1]=c;for(var u=2;u<a;u++)o[u]=n[u];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},29911:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>o,default:()=>m,frontMatter:()=>a,metadata:()=>c,toc:()=>u});var r=n(58168),i=(n(96540),n(15680));const a={title:"CURTIME,CURRENT_TIME",language:"en"},o=void 0,c={unversionedId:"sql-manual/sql-functions/date-time-functions/curtime",id:"sql-manual/sql-functions/date-time-functions/curtime",title:"CURTIME,CURRENT_TIME",description:"\x3c!--",source:"@site/docs/sql-manual/sql-functions/date-time-functions/curtime.md",sourceDirName:"sql-manual/sql-functions/date-time-functions",slug:"/sql-manual/sql-functions/date-time-functions/curtime",permalink:"/docs/dev/sql-manual/sql-functions/date-time-functions/curtime",draft:!1,tags:[],version:"current",frontMatter:{title:"CURTIME,CURRENT_TIME",language:"en"},sidebar:"docs",previous:{title:"CURDATE,CURRENT_DATE",permalink:"/docs/dev/sql-manual/sql-functions/date-time-functions/curdate"},next:{title:"CURRENT_TIMESTAMP",permalink:"/docs/dev/sql-manual/sql-functions/date-time-functions/current-timestamp"}},l={},u=[{value:"curtime,current_time",id:"curtimecurrent_time",level:2},{value:"Description",id:"description",level:3},{value:"Syntax",id:"syntax",level:4},{value:"Examples",id:"examples",level:3},{value:"keywords",id:"keywords",level:3}],s={toc:u},p="wrapper";function m(e){let{components:t,...n}=e;return(0,i.yg)(p,(0,r.A)({},s,n,{components:t,mdxType:"MDXLayout"}),(0,i.yg)("h2",{id:"curtimecurrent_time"},"curtime,current_time"),(0,i.yg)("h3",{id:"description"},"Description"),(0,i.yg)("h4",{id:"syntax"},"Syntax"),(0,i.yg)("p",null,(0,i.yg)("inlineCode",{parentName:"p"},"TIME CURTIME()")),(0,i.yg)("p",null,"Get the current date and return it in Time type"),(0,i.yg)("h3",{id:"examples"},"Examples"),(0,i.yg)("pre",null,(0,i.yg)("code",{parentName:"pre"},"mysql> select current_time();\n+---------------------+\n| current_time()      |\n+---------------------+\n| 2023-08-01 17:32:24 |\n+---------------------+\n")),(0,i.yg)("h3",{id:"keywords"},"keywords"),(0,i.yg)("pre",null,(0,i.yg)("code",{parentName:"pre"},"CURTIME,CURRENT_TIME\n")))}m.isMDXComponent=!0}}]);