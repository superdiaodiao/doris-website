"use strict";(self.webpackChunkselectdb_portal=self.webpackChunkselectdb_portal||[]).push([[94790],{3905:(e,t,a)=>{a.d(t,{Zo:()=>s,kt:()=>u});var n=a(67294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function l(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?l(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function o(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},l=Object.keys(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var p=n.createContext({}),c=function(e){var t=n.useContext(p),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},s=function(e){var t=c(e.components);return n.createElement(p.Provider,{value:t},e.children)},d="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},b=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,l=e.originalType,p=e.parentName,s=o(e,["components","mdxType","originalType","parentName"]),d=c(a),b=r,u=d["".concat(p,".").concat(b)]||d[b]||m[b]||l;return a?n.createElement(u,i(i({ref:t},s),{},{components:a})):n.createElement(u,i({ref:t},s))}));function u(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=a.length,i=new Array(l);i[0]=b;var o={};for(var p in t)hasOwnProperty.call(t,p)&&(o[p]=t[p]);o.originalType=e,o[d]="string"==typeof e?e:r,i[1]=o;for(var c=2;c<l;c++)i[c]=a[c];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}b.displayName="MDXCreateElement"},80128:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>p,contentTitle:()=>i,default:()=>d,frontMatter:()=>l,metadata:()=>o,toc:()=>c});var n=a(87462),r=(a(67294),a(3905));const l={title:"Replace Table",language:"en"},i=void 0,o={unversionedId:"administrator-guide/alter-table/alter-table-replace-table",id:"version-0.15/administrator-guide/alter-table/alter-table-replace-table",title:"Replace Table",description:"\x3c!--",source:"@site/versioned_docs/version-0.15/administrator-guide/alter-table/alter-table-replace-table.md",sourceDirName:"administrator-guide/alter-table",slug:"/administrator-guide/alter-table/alter-table-replace-table",permalink:"/docs/0.15/administrator-guide/alter-table/alter-table-replace-table",draft:!1,tags:[],version:"0.15",frontMatter:{title:"Replace Table",language:"en"},sidebar:"docs",previous:{title:"Bitmap Index",permalink:"/docs/0.15/administrator-guide/alter-table/alter-table-bitmap-index"},next:{title:"Rollup",permalink:"/docs/0.15/administrator-guide/alter-table/alter-table-rollup"}},p={},c=[{value:"Syntax",id:"syntax",level:2},{value:"Principle",id:"principle",level:2},{value:"Notice",id:"notice",level:2},{value:"Best Practices",id:"best-practices",level:2}],s={toc:c};function d(e){let{components:t,...a}=e;return(0,r.kt)("wrapper",(0,n.Z)({},s,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"replace-table"},"Replace Table"),(0,r.kt)("p",null,"In version 0.14, Doris supports atomic replacement of two tables.\nThis operation only applies to OLAP tables."),(0,r.kt)("p",null,"For partition level replacement operations, please refer to ",(0,r.kt)("a",{parentName:"p",href:"../alter-table-temp-partition.md"},"Temporary Partition Document")),(0,r.kt)("h2",{id:"syntax"},"Syntax"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"ALTER TABLE [db.]tbl1 REPLACE WITH tbl2\n[PROPERTIES('swap' = 'true')];\n")),(0,r.kt)("p",null,"Replace table ",(0,r.kt)("inlineCode",{parentName:"p"},"tbl1")," with table ",(0,r.kt)("inlineCode",{parentName:"p"},"tbl2"),"."),(0,r.kt)("p",null,"If the ",(0,r.kt)("inlineCode",{parentName:"p"},"swap")," parameter is ",(0,r.kt)("inlineCode",{parentName:"p"},"true"),", after replacement, the data in the table named ",(0,r.kt)("inlineCode",{parentName:"p"},"tbl1")," is the data in the original ",(0,r.kt)("inlineCode",{parentName:"p"},"tbl2")," table. The data in the table named ",(0,r.kt)("inlineCode",{parentName:"p"},"tbl2")," is the data in the original table ",(0,r.kt)("inlineCode",{parentName:"p"},"tbl1"),". That is, the data of the two tables are interchanged."),(0,r.kt)("p",null,"If the ",(0,r.kt)("inlineCode",{parentName:"p"},"swap")," parameter is ",(0,r.kt)("inlineCode",{parentName:"p"},"false"),", after replacement, the data in the table named ",(0,r.kt)("inlineCode",{parentName:"p"},"tbl1")," is the data in the original ",(0,r.kt)("inlineCode",{parentName:"p"},"tbl2")," table. The table named ",(0,r.kt)("inlineCode",{parentName:"p"},"tbl2")," is dropped."),(0,r.kt)("h2",{id:"principle"},"Principle"),(0,r.kt)("p",null,"The replacement table function actually turns the following set of operations into an atomic operation."),(0,r.kt)("p",null,"Suppose you want to replace table A with table B, and ",(0,r.kt)("inlineCode",{parentName:"p"},"swap")," is ",(0,r.kt)("inlineCode",{parentName:"p"},"true"),", the operation is as follows:"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Rename table B to table A."),(0,r.kt)("li",{parentName:"ol"},"Rename table A to table B.")),(0,r.kt)("p",null,"If ",(0,r.kt)("inlineCode",{parentName:"p"},"swap")," is ",(0,r.kt)("inlineCode",{parentName:"p"},"false"),", the operation is as follows:"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Drop table A."),(0,r.kt)("li",{parentName:"ol"},"Rename table B to table A.")),(0,r.kt)("h2",{id:"notice"},"Notice"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"The ",(0,r.kt)("inlineCode",{parentName:"li"},"swap")," parameter defaults to ",(0,r.kt)("inlineCode",{parentName:"li"},"true"),". That is, the replacement table operation is equivalent to the exchange of two table data."),(0,r.kt)("li",{parentName:"ol"},"If the ",(0,r.kt)("inlineCode",{parentName:"li"},"swap")," parameter is set to ",(0,r.kt)("inlineCode",{parentName:"li"},"false"),", the replaced table (table A) will be dropped and cannot be recovered."),(0,r.kt)("li",{parentName:"ol"},"The replacement operation can only occur between two OLAP tables, and the table structure of the two tables is not checked for consistency."),(0,r.kt)("li",{parentName:"ol"},"The replacement operation will not change the original permission settings. Because the permission check is based on the table name.")),(0,r.kt)("h2",{id:"best-practices"},"Best Practices"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Atomic Overwrite Operation"),(0,r.kt)("p",{parentName:"li"},"In some cases, the user wants to be able to rewrite the data of a certain table, but if it is dropped and then imported, there will be a period of time in which the data cannot be viewed. At this time, the user can first use the ",(0,r.kt)("inlineCode",{parentName:"p"},"CREATE TABLE LIKE")," statement to create a new table with the same structure, import the new data into the new table, and replace the old table atomically through the replacement operation to achieve the goal. For partition level atomic overwrite operation, please refer to ",(0,r.kt)("a",{parentName:"p",href:"../alter-table-temp-partition"},"Temporary partition document")))))}d.isMDXComponent=!0}}]);