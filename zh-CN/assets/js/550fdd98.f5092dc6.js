"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([[58464],{15680:(e,n,t)=>{t.d(n,{xA:()=>u,yg:()=>y});var r=t(96540);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function a(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?a(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,r,o=function(e,n){if(null==e)return{};var t,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var s=r.createContext({}),c=function(e){var n=r.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},u=function(e){var n=c(e.components);return r.createElement(s.Provider,{value:n},e.children)},d="mdxType",p={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},m=r.forwardRef((function(e,n){var t=e.components,o=e.mdxType,a=e.originalType,s=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),d=c(t),m=o,y=d["".concat(s,".").concat(m)]||d[m]||p[m]||a;return t?r.createElement(y,i(i({ref:n},u),{},{components:t})):r.createElement(y,i({ref:n},u))}));function y(e,n){var t=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var a=t.length,i=new Array(a);i[0]=m;var l={};for(var s in n)hasOwnProperty.call(n,s)&&(l[s]=n[s]);l.originalType=e,l[d]="string"==typeof e?e:o,i[1]=l;for(var c=2;c<a;c++)i[c]=t[c];return r.createElement.apply(null,i)}return r.createElement.apply(null,t)}m.displayName="MDXCreateElement"},2479:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>s,contentTitle:()=>i,default:()=>p,frontMatter:()=>a,metadata:()=>l,toc:()=>c});var r=t(58168),o=(t(96540),t(15680));const a={title:"TO_MONDAY",language:"zh-CN"},i=void 0,l={unversionedId:"sql-manual/sql-functions/date-time-functions/to-monday",id:"version-2.0/sql-manual/sql-functions/date-time-functions/to-monday",title:"TO_MONDAY",description:"\x3c!--",source:"@site/i18n/zh-CN/docusaurus-plugin-content-docs/version-2.0/sql-manual/sql-functions/date-time-functions/to-monday.md",sourceDirName:"sql-manual/sql-functions/date-time-functions",slug:"/sql-manual/sql-functions/date-time-functions/to-monday",permalink:"/zh-CN/docs/sql-manual/sql-functions/date-time-functions/to-monday",draft:!1,tags:[],version:"2.0",frontMatter:{title:"TO_MONDAY",language:"zh-CN"},sidebar:"docs",previous:{title:"LAST_DAY",permalink:"/zh-CN/docs/sql-manual/sql-functions/date-time-functions/last-day"},next:{title:"FROM_SECOND",permalink:"/zh-CN/docs/sql-manual/sql-functions/date-time-functions/from-second"}},s={},c=[{value:"to_monday",id:"to_monday",level:2},{value:"Description",id:"description",level:3},{value:"Syntax",id:"syntax",level:4},{value:"example",id:"example",level:3},{value:"keywords",id:"keywords",level:3}],u={toc:c},d="wrapper";function p(e){let{components:n,...t}=e;return(0,o.yg)(d,(0,r.A)({},u,t,{components:n,mdxType:"MDXLayout"}),(0,o.yg)("h2",{id:"to_monday"},"to_monday"),(0,o.yg)("h3",{id:"description"},"Description"),(0,o.yg)("h4",{id:"syntax"},"Syntax"),(0,o.yg)("p",null,(0,o.yg)("inlineCode",{parentName:"p"},"DATE to_monday(DATETIME date)")),(0,o.yg)("p",null,"\u5c06\u65e5\u671f\u6216\u5e26\u65f6\u95f4\u7684\u65e5\u671f\u5411\u4e0b\u820d\u5165\u5230\u6700\u8fd1\u7684\u661f\u671f\u4e00\u3002\u4f5c\u4e3a\u4e00\u79cd\u7279\u6b8a\u60c5\u51b5\uff0c\u65e5\u671f\u53c2\u6570 1970-01-01\u30011970-01-02\u30011970-01-03 \u548c 1970-01-04 \u8fd4\u56de\u65e5\u671f 1970-01-01"),(0,o.yg)("h3",{id:"example"},"example"),(0,o.yg)("pre",null,(0,o.yg)("code",{parentName:"pre"},"MySQL [(none)]> select to_monday('2022-09-10');\n+----------------------------------+\n| to_monday('2022-09-10 00:00:00') |\n+----------------------------------+\n| 2022-09-05                       |\n+----------------------------------+\n")),(0,o.yg)("h3",{id:"keywords"},"keywords"),(0,o.yg)("pre",null,(0,o.yg)("code",{parentName:"pre"},"MONDAY\n")))}p.isMDXComponent=!0}}]);