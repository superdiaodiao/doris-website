"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([[37885],{15680:(e,t,n)=>{n.d(t,{xA:()=>c,yg:()=>f});var r=n(96540);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var u=r.createContext({}),s=function(e){var t=r.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},c=function(e){var t=s(e.components);return r.createElement(u.Provider,{value:t},e.children)},p="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,o=e.originalType,u=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),p=s(n),d=i,f=p["".concat(u,".").concat(d)]||p[d]||m[d]||o;return n?r.createElement(f,a(a({ref:t},c),{},{components:n})):r.createElement(f,a({ref:t},c))}));function f(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=n.length,a=new Array(o);a[0]=d;var l={};for(var u in t)hasOwnProperty.call(t,u)&&(l[u]=t[u]);l.originalType=e,l[p]="string"==typeof e?e:i,a[1]=l;for(var s=2;s<o;s++)a[s]=n[s];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},62735:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>u,contentTitle:()=>a,default:()=>m,frontMatter:()=>o,metadata:()=>l,toc:()=>s});var r=n(58168),i=(n(96540),n(15680));const o={title:"MINUTE",language:"zh-CN"},a=void 0,l={unversionedId:"sql-manual/sql-functions/date-time-functions/minute",id:"version-2.0/sql-manual/sql-functions/date-time-functions/minute",title:"MINUTE",description:"\x3c!--",source:"@site/i18n/zh-CN/docusaurus-plugin-content-docs/version-2.0/sql-manual/sql-functions/date-time-functions/minute.md",sourceDirName:"sql-manual/sql-functions/date-time-functions",slug:"/sql-manual/sql-functions/date-time-functions/minute",permalink:"/zh-CN/docs/sql-manual/sql-functions/date-time-functions/minute",draft:!1,tags:[],version:"2.0",frontMatter:{title:"MINUTE",language:"zh-CN"},sidebar:"docs",previous:{title:"HOUR",permalink:"/zh-CN/docs/sql-manual/sql-functions/date-time-functions/hour"},next:{title:"SECOND",permalink:"/zh-CN/docs/sql-manual/sql-functions/date-time-functions/second"}},u={},s=[{value:"minute",id:"minute",level:2},{value:"description",id:"description",level:3},{value:"Syntax",id:"syntax",level:4},{value:"example",id:"example",level:3},{value:"keywords",id:"keywords",level:3}],c={toc:s},p="wrapper";function m(e){let{components:t,...n}=e;return(0,i.yg)(p,(0,r.A)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,i.yg)("h2",{id:"minute"},"minute"),(0,i.yg)("h3",{id:"description"},"description"),(0,i.yg)("h4",{id:"syntax"},"Syntax"),(0,i.yg)("p",null,(0,i.yg)("inlineCode",{parentName:"p"},"INT MINUTE(DATETIME date)")),(0,i.yg)("p",null,"\u83b7\u5f97\u65e5\u671f\u4e2d\u7684\u5206\u949f\u7684\u4fe1\u606f\uff0c\u8fd4\u56de\u503c\u8303\u56f4\u4ece0-59\u3002"),(0,i.yg)("p",null,"\u53c2\u6570\u4e3aDate\u6216\u8005Datetime\u7c7b\u578b"),(0,i.yg)("h3",{id:"example"},"example"),(0,i.yg)("pre",null,(0,i.yg)("code",{parentName:"pre"},"mysql> select minute('2018-12-31 23:59:59');\n+-----------------------------+\n| minute('2018-12-31 23:59:59') |\n+-----------------------------+\n|                          59 |\n+-----------------------------+\n")),(0,i.yg)("h3",{id:"keywords"},"keywords"),(0,i.yg)("pre",null,(0,i.yg)("code",{parentName:"pre"},"MINUTE\n")))}m.isMDXComponent=!0}}]);