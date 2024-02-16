"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([[97963],{15680:(e,t,r)=>{r.d(t,{xA:()=>u,yg:()=>y});var a=r(96540);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},o=Object.keys(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var p=a.createContext({}),s=function(e){var t=a.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},u=function(e){var t=s(e.components);return a.createElement(p.Provider,{value:t},e.children)},d="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,o=e.originalType,p=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),d=s(r),m=n,y=d["".concat(p,".").concat(m)]||d[m]||c[m]||o;return r?a.createElement(y,l(l({ref:t},u),{},{components:r})):a.createElement(y,l({ref:t},u))}));function y(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=r.length,l=new Array(o);l[0]=m;var i={};for(var p in t)hasOwnProperty.call(t,p)&&(i[p]=t[p]);i.originalType=e,i[d]="string"==typeof e?e:n,l[1]=i;for(var s=2;s<o;s++)l[s]=r[s];return a.createElement.apply(null,l)}return a.createElement.apply(null,r)}m.displayName="MDXCreateElement"},3502:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>p,contentTitle:()=>l,default:()=>c,frontMatter:()=>o,metadata:()=>i,toc:()=>s});var a=r(58168),n=(r(96540),r(15680));const o={title:"Export Data or Table Structure with MYSQLDUMP ",language:"en"},l=void 0,i={unversionedId:"data-operate/export/export-with-mysql-dump",id:"version-2.0/data-operate/export/export-with-mysql-dump",title:"Export Data or Table Structure with MYSQLDUMP ",description:"\x3c!--",source:"@site/versioned_docs/version-2.0/data-operate/export/export-with-mysql-dump.md",sourceDirName:"data-operate/export",slug:"/data-operate/export/export-with-mysql-dump",permalink:"/docs/data-operate/export/export-with-mysql-dump",draft:!1,tags:[],version:"2.0",frontMatter:{title:"Export Data or Table Structure with MYSQLDUMP ",language:"en"},sidebar:"docs",previous:{title:"Export Query Result",permalink:"/docs/data-operate/export/outfile"},next:{title:"Batch Delete",permalink:"/docs/data-operate/update-delete/batch-delete-manual"}},p={},s=[{value:"Examples",id:"examples",level:2},{value:"Export",id:"export",level:3},{value:"Import",id:"import",level:3},{value:"Notice",id:"notice",level:2}],u={toc:s},d="wrapper";function c(e){let{components:t,...r}=e;return(0,n.yg)(d,(0,a.A)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,n.yg)("h1",{id:"export-data-or-table-structure-with-mysqldump"},"Export Data or Table Structure with MYSQLDUMP"),(0,n.yg)("p",null,"Doris has supported exporting data or table structures through the ",(0,n.yg)("inlineCode",{parentName:"p"},"mysqldump")," tool after version 0.15"),(0,n.yg)("h2",{id:"examples"},"Examples"),(0,n.yg)("h3",{id:"export"},"Export"),(0,n.yg)("ol",null,(0,n.yg)("li",{parentName:"ol"},"Export the table1 table in the test database: ",(0,n.yg)("inlineCode",{parentName:"li"},"mysqldump -h127.0.0.1 -P9030 -uroot --no-tablespaces --databases test --tables table1")),(0,n.yg)("li",{parentName:"ol"},"Export the table1 table structure in the test database: ",(0,n.yg)("inlineCode",{parentName:"li"},"mysqldump -h127.0.0.1 -P9030 -uroot --no-tablespaces --databases test --tables table1 --no-data")),(0,n.yg)("li",{parentName:"ol"},"Export all tables in the test1, test2 database: ",(0,n.yg)("inlineCode",{parentName:"li"},"mysqldump -h127.0.0.1 -P9030 -uroot --no-tablespaces --databases test1 test2")),(0,n.yg)("li",{parentName:"ol"},"Export all databases and tables ",(0,n.yg)("inlineCode",{parentName:"li"},"mysqldump -h127.0.0.1 -P9030 -uroot --no-tablespaces --all-databases"),"\nFor more usage parameters, please refer to the manual of ",(0,n.yg)("inlineCode",{parentName:"li"},"mysqldump"))),(0,n.yg)("h3",{id:"import"},"Import"),(0,n.yg)("p",null,"The results exported by ",(0,n.yg)("inlineCode",{parentName:"p"},"mysqldump")," can be redirected to a file, which can then be imported into Doris through the source command ",(0,n.yg)("inlineCode",{parentName:"p"},"source filename.sql")),(0,n.yg)("h2",{id:"notice"},"Notice"),(0,n.yg)("ol",null,(0,n.yg)("li",{parentName:"ol"},"Since there is no concept of tablespace in mysql in Doris, add the ",(0,n.yg)("inlineCode",{parentName:"li"},"--no-tablespaces")," parameter when using ",(0,n.yg)("inlineCode",{parentName:"li"},"mysqldump")),(0,n.yg)("li",{parentName:"ol"},"Using mysqldump to export data and table structure is only used for development and testing or when the amount of data is small. Do not use it in a production environment with a large amount of data.")))}c.isMDXComponent=!0}}]);