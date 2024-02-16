"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([[71907],{15680:(e,t,r)=>{r.d(t,{xA:()=>m,yg:()=>d});var n=r(96540);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function l(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?l(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):l(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function o(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},l=Object.keys(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var c=n.createContext({}),s=function(e){var t=n.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},m=function(e){var t=s(e.components);return n.createElement(c.Provider,{value:t},e.children)},p="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},E=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,l=e.originalType,c=e.parentName,m=o(e,["components","mdxType","originalType","parentName"]),p=s(r),E=a,d=p["".concat(c,".").concat(E)]||p[E]||u[E]||l;return r?n.createElement(d,i(i({ref:t},m),{},{components:r})):n.createElement(d,i({ref:t},m))}));function d(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=r.length,i=new Array(l);i[0]=E;var o={};for(var c in t)hasOwnProperty.call(t,c)&&(o[c]=t[c]);o.originalType=e,o[p]="string"==typeof e?e:a,i[1]=o;for(var s=2;s<l;s++)i[s]=r[s];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}E.displayName="MDXCreateElement"},90838:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>c,contentTitle:()=>i,default:()=>u,frontMatter:()=>l,metadata:()=>o,toc:()=>s});var n=r(58168),a=(r(96540),r(15680));const l={title:"SHOW-CREATE-MATERIALIZED-VIEW",language:"en"},i=void 0,o={unversionedId:"sql-manual/sql-reference/Show-Statements/SHOW-CREATE-MATERIALIZED-VIEW",id:"sql-manual/sql-reference/Show-Statements/SHOW-CREATE-MATERIALIZED-VIEW",title:"SHOW-CREATE-MATERIALIZED-VIEW",description:"\x3c!--",source:"@site/docs/sql-manual/sql-reference/Show-Statements/SHOW-CREATE-MATERIALIZED-VIEW.md",sourceDirName:"sql-manual/sql-reference/Show-Statements",slug:"/sql-manual/sql-reference/Show-Statements/SHOW-CREATE-MATERIALIZED-VIEW",permalink:"/docs/dev/sql-manual/sql-reference/Show-Statements/SHOW-CREATE-MATERIALIZED-VIEW",draft:!1,tags:[],version:"current",frontMatter:{title:"SHOW-CREATE-MATERIALIZED-VIEW",language:"en"},sidebar:"docs",previous:{title:"SHOW-CREATE-DATABASE",permalink:"/docs/dev/sql-manual/sql-reference/Show-Statements/SHOW-CREATE-DATABASE"},next:{title:"SHOW-CREATE-LOAD",permalink:"/docs/dev/sql-manual/sql-reference/Show-Statements/SHOW-CREATE-LOAD"}},c={},s=[{value:"SHOW-CREATE-MATERIALIZED-VIEW",id:"show-create-materialized-view",level:2},{value:"Name",id:"name",level:3},{value:"Description",id:"description",level:3},{value:"Example",id:"example",level:3},{value:"Keywords",id:"keywords",level:3},{value:"Best Practice",id:"best-practice",level:3}],m={toc:s},p="wrapper";function u(e){let{components:t,...r}=e;return(0,a.yg)(p,(0,n.A)({},m,r,{components:t,mdxType:"MDXLayout"}),(0,a.yg)("h2",{id:"show-create-materialized-view"},"SHOW-CREATE-MATERIALIZED-VIEW"),(0,a.yg)("h3",{id:"name"},"Name"),(0,a.yg)("p",null,"SHOW CREATE MATERIALIZED VIEW"),(0,a.yg)("h3",{id:"description"},"Description"),(0,a.yg)("p",null,"This statement is used to query statements that create materialized views."),(0,a.yg)("p",null,"grammar\uff1a"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-sql"},"SHOW CREATE MATERIALIZED VIEW mv_name ON table_name\n")),(0,a.yg)("ol",null,(0,a.yg)("li",{parentName:"ol"},(0,a.yg)("p",{parentName:"li"},"mv_name:\nMaterialized view name. required.")),(0,a.yg)("li",{parentName:"ol"},(0,a.yg)("p",{parentName:"li"},"table_name:\nThe table name of materialized view. required."))),(0,a.yg)("h3",{id:"example"},"Example"),(0,a.yg)("p",null,"Create materialized view"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-sql"},"create materialized view id_col1 as select id,col1 from table3;\n")),(0,a.yg)("p",null,"Return after query"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-sql"},"mysql> show create materialized view id_col1 on table3;\n+-----------+----------+----------------------------------------------------------------+\n| TableName | ViewName | CreateStmt                                                     |\n+-----------+----------+----------------------------------------------------------------+\n| table3    | id_col1  | create materialized view id_col1 as select id,col1 from table3 |\n+-----------+----------+----------------------------------------------------------------+\n1 row in set (0.00 sec)\n")),(0,a.yg)("h3",{id:"keywords"},"Keywords"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre"},"SHOW, MATERIALIZED, VIEW\n")),(0,a.yg)("h3",{id:"best-practice"},"Best Practice"))}u.isMDXComponent=!0}}]);