"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([[78262],{3905:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>d});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function l(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?l(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):l(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function o(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},l=Object.keys(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var s=n.createContext({}),c=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},p=function(e){var t=c(e.components);return n.createElement(s.Provider,{value:t},e.children)},u="mdxType",E={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,l=e.originalType,s=e.parentName,p=o(e,["components","mdxType","originalType","parentName"]),u=c(r),m=a,d=u["".concat(s,".").concat(m)]||u[m]||E[m]||l;return r?n.createElement(d,i(i({ref:t},p),{},{components:r})):n.createElement(d,i({ref:t},p))}));function d(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=r.length,i=new Array(l);i[0]=m;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o[u]="string"==typeof e?e:a,i[1]=o;for(var c=2;c<l;c++)i[c]=r[c];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},20451:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>E,frontMatter:()=>l,metadata:()=>o,toc:()=>c});var n=r(87462),a=(r(67294),r(3905));const l={title:"PAUSE-MATERIALIZED-VIEW",language:"en"},i=void 0,o={unversionedId:"sql-manual/sql-reference/Utility-Statements/PAUSE-MATERIALIZED-VIEW",id:"sql-manual/sql-reference/Utility-Statements/PAUSE-MATERIALIZED-VIEW",title:"PAUSE-MATERIALIZED-VIEW",description:"\x3c!--",source:"@site/docs/sql-manual/sql-reference/Utility-Statements/PAUSE-MATERIALIZED-VIEW.md",sourceDirName:"sql-manual/sql-reference/Utility-Statements",slug:"/sql-manual/sql-reference/Utility-Statements/PAUSE-MATERIALIZED-VIEW",permalink:"/docs/dev/sql-manual/sql-reference/Utility-Statements/PAUSE-MATERIALIZED-VIEW",draft:!1,tags:[],version:"current",frontMatter:{title:"PAUSE-MATERIALIZED-VIEW",language:"en"},sidebar:"docs",previous:{title:"CANCEL-MATERIALIZED-VIEW-TASK",permalink:"/docs/dev/sql-manual/sql-reference/Utility-Statements/CANCEL-MATERIALIZED-VIEW-TASK"},next:{title:"REFRESH-MATERIALIZED-VIEW",permalink:"/docs/dev/sql-manual/sql-reference/Utility-Statements/REFRESH-MATERIALIZED-VIEW"}},s={},c=[{value:"PAUSE-MATERIALIZED-VIEW",id:"pause-materialized-view",level:2},{value:"Name",id:"name",level:3},{value:"Description",id:"description",level:3},{value:"Example",id:"example",level:3},{value:"Keywords",id:"keywords",level:3},{value:"Best Practice",id:"best-practice",level:3}],p={toc:c},u="wrapper";function E(e){let{components:t,...r}=e;return(0,a.kt)(u,(0,n.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"pause-materialized-view"},"PAUSE-MATERIALIZED-VIEW"),(0,a.kt)("h3",{id:"name"},"Name"),(0,a.kt)("p",null,"PAUSE MATERIALIZED VIEW"),(0,a.kt)("h3",{id:"description"},"Description"),(0,a.kt)("p",null,"This statement is used to pause the scheduled scheduling of materialized views"),(0,a.kt)("p",null,"syntax:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sql"},"PAUSE MATERIALIZED VIEW JOB ON mvName=multipartIdentifier\n")),(0,a.kt)("h3",{id:"example"},"Example"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Pause scheduled scheduling of materialized view mv1"),(0,a.kt)("pre",{parentName:"li"},(0,a.kt)("code",{parentName:"pre",className:"language-sql"},"PAUSE MATERIALIZED VIEW mv1;\n")))),(0,a.kt)("h3",{id:"keywords"},"Keywords"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"PAUSE, MATERIALIZED, VIEW\n")),(0,a.kt)("h3",{id:"best-practice"},"Best Practice"))}E.isMDXComponent=!0}}]);