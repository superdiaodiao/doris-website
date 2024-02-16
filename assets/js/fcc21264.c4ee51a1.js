"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([[81710],{15680:(e,n,t)=>{t.d(n,{xA:()=>u,yg:()=>f});var r=t(96540);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var c=r.createContext({}),s=function(e){var n=r.useContext(c),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},u=function(e){var n=s(e.components);return r.createElement(c.Provider,{value:n},e.children)},m="mdxType",p={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},d=r.forwardRef((function(e,n){var t=e.components,a=e.mdxType,o=e.originalType,c=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),m=s(t),d=a,f=m["".concat(c,".").concat(d)]||m[d]||p[d]||o;return t?r.createElement(f,i(i({ref:n},u),{},{components:t})):r.createElement(f,i({ref:n},u))}));function f(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var o=t.length,i=new Array(o);i[0]=d;var l={};for(var c in n)hasOwnProperty.call(n,c)&&(l[c]=n[c]);l.originalType=e,l[m]="string"==typeof e?e:a,i[1]=l;for(var s=2;s<o;s++)i[s]=t[s];return r.createElement.apply(null,i)}return r.createElement.apply(null,t)}d.displayName="MDXCreateElement"},75041:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>c,contentTitle:()=>i,default:()=>p,frontMatter:()=>o,metadata:()=>l,toc:()=>s});var r=t(58168),a=(t(96540),t(15680));const o={title:"MONTHNAME",language:"en"},i=void 0,l={unversionedId:"sql-manual/sql-functions/date-time-functions/monthname",id:"sql-manual/sql-functions/date-time-functions/monthname",title:"MONTHNAME",description:"\x3c!--",source:"@site/docs/sql-manual/sql-functions/date-time-functions/monthname.md",sourceDirName:"sql-manual/sql-functions/date-time-functions",slug:"/sql-manual/sql-functions/date-time-functions/monthname",permalink:"/docs/dev/sql-manual/sql-functions/date-time-functions/monthname",draft:!1,tags:[],version:"current",frontMatter:{title:"MONTHNAME",language:"en"},sidebar:"docs",previous:{title:"DAYNAME",permalink:"/docs/dev/sql-manual/sql-functions/date-time-functions/dayname"},next:{title:"HOUR",permalink:"/docs/dev/sql-manual/sql-functions/date-time-functions/hour"}},c={},s=[{value:"monthname",id:"monthname",level:2},{value:"Description",id:"description",level:3},{value:"Syntax",id:"syntax",level:4},{value:"example",id:"example",level:3},{value:"keywords",id:"keywords",level:3}],u={toc:s},m="wrapper";function p(e){let{components:n,...t}=e;return(0,a.yg)(m,(0,r.A)({},u,t,{components:n,mdxType:"MDXLayout"}),(0,a.yg)("h2",{id:"monthname"},"monthname"),(0,a.yg)("h3",{id:"description"},"Description"),(0,a.yg)("h4",{id:"syntax"},"Syntax"),(0,a.yg)("p",null,(0,a.yg)("inlineCode",{parentName:"p"},"VARCHAR MONTHNAME (DATE)")),(0,a.yg)("p",null,"Month name corresponding to return date"),(0,a.yg)("p",null,"The parameter is Date or Datetime type"),(0,a.yg)("h3",{id:"example"},"example"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre"},"mysql> select monthname('2008-02-03 00:00:00');\n+----------------------------------+\n| monthname('2008-02-03 00:00:00') |\n+----------------------------------+\n| February                         |\n+----------------------------------+\n")),(0,a.yg)("h3",{id:"keywords"},"keywords"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre"},"MONTHNAME\n")))}p.isMDXComponent=!0}}]);