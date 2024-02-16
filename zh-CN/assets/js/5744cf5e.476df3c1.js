"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([[24926],{15680:(e,t,r)=>{r.d(t,{xA:()=>p,yg:()=>E});var n=r(96540);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function l(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?l(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):l(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},l=Object.keys(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var i=n.createContext({}),c=function(e){var t=n.useContext(i),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},p=function(e){var t=c(e.components);return n.createElement(i.Provider,{value:t},e.children)},u="mdxType",A={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,l=e.originalType,i=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),u=c(r),m=a,E=u["".concat(i,".").concat(m)]||u[m]||A[m]||l;return r?n.createElement(E,o(o({ref:t},p),{},{components:r})):n.createElement(E,o({ref:t},p))}));function E(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=r.length,o=new Array(l);o[0]=m;var s={};for(var i in t)hasOwnProperty.call(t,i)&&(s[i]=t[i]);s.originalType=e,s[u]="string"==typeof e?e:a,o[1]=s;for(var c=2;c<l;c++)o[c]=r[c];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},13149:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>i,contentTitle:()=>o,default:()=>A,frontMatter:()=>l,metadata:()=>s,toc:()=>c});var n=r(58168),a=(r(96540),r(15680));const l={title:"SHOW-CREATE-DATABASE",language:"zh-CN"},o=void 0,s={unversionedId:"sql-manual/sql-reference/Show-Statements/SHOW-CREATE-DATABASE",id:"version-2.0/sql-manual/sql-reference/Show-Statements/SHOW-CREATE-DATABASE",title:"SHOW-CREATE-DATABASE",description:"\x3c!--",source:"@site/i18n/zh-CN/docusaurus-plugin-content-docs/version-2.0/sql-manual/sql-reference/Show-Statements/SHOW-CREATE-DATABASE.md",sourceDirName:"sql-manual/sql-reference/Show-Statements",slug:"/sql-manual/sql-reference/Show-Statements/SHOW-CREATE-DATABASE",permalink:"/zh-CN/docs/sql-manual/sql-reference/Show-Statements/SHOW-CREATE-DATABASE",draft:!1,tags:[],version:"2.0",frontMatter:{title:"SHOW-CREATE-DATABASE",language:"zh-CN"},sidebar:"docs",previous:{title:"SHOW-CREATE-CATALOG",permalink:"/zh-CN/docs/sql-manual/sql-reference/Show-Statements/SHOW-CREATE-CATALOG"},next:{title:"SHOW-CREATE-MATERIALIZED-VIEW",permalink:"/zh-CN/docs/sql-manual/sql-reference/Show-Statements/SHOW-CREATE-MATERIALIZED-VIEW"}},i={},c=[{value:"SHOW-CREATE-DATABASE",id:"show-create-database",level:2},{value:"Name",id:"name",level:3},{value:"Description",id:"description",level:3},{value:"Example",id:"example",level:3},{value:"Keywords",id:"keywords",level:3},{value:"Best Practice",id:"best-practice",level:3}],p={toc:c},u="wrapper";function A(e){let{components:t,...r}=e;return(0,a.yg)(u,(0,n.A)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,a.yg)("h2",{id:"show-create-database"},"SHOW-CREATE-DATABASE"),(0,a.yg)("h3",{id:"name"},"Name"),(0,a.yg)("p",null,"SHOW CREATE DATABASE"),(0,a.yg)("h3",{id:"description"},"Description"),(0,a.yg)("p",null,"\u8be5\u8bed\u53e5\u67e5\u770bdoris\u6570\u636e\u5e93\u7684\u521b\u5efa\u60c5\u51b5\u3002"),(0,a.yg)("p",null,"\u8bed\u6cd5\uff1a"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-sql"},"SHOW CREATE DATABASE db_name;\n")),(0,a.yg)("p",null,"\u8bf4\u660e\uff1a"),(0,a.yg)("ul",null,(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("inlineCode",{parentName:"li"},"db_name"),": \u4e3adoris\u5b58\u5728\u7684\u6570\u636e\u5e93\u540d\u79f0\u3002")),(0,a.yg)("h3",{id:"example"},"Example"),(0,a.yg)("ol",null,(0,a.yg)("li",{parentName:"ol"},(0,a.yg)("p",{parentName:"li"},"\u67e5\u770bdoris\u4e2dtest\u6570\u636e\u5e93\u7684\u521b\u5efa\u60c5\u51b5"),(0,a.yg)("pre",{parentName:"li"},(0,a.yg)("code",{parentName:"pre",className:"language-sql"},"mysql> SHOW CREATE DATABASE test;\n+----------+------------------------+\n| Database | Create Database        |\n+----------+------------------------+\n| test     | CREATE DATABASE `test` |\n+----------+------------------------+\n1 row in set (0.00 sec)\n")))),(0,a.yg)("h3",{id:"keywords"},"Keywords"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre"},"SHOW, CREATE, DATABASE\n")),(0,a.yg)("h3",{id:"best-practice"},"Best Practice"))}A.isMDXComponent=!0}}]);