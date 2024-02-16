"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([[14514],{15680:(e,t,a)=>{a.d(t,{xA:()=>m,yg:()=>y});var r=a(96540);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function l(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?l(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function o(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},l=Object.keys(e);for(r=0;r<l.length;r++)a=l[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)a=l[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var s=r.createContext({}),p=function(e){var t=r.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},m=function(e){var t=p(e.components);return r.createElement(s.Provider,{value:t},e.children)},c="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var a=e.components,n=e.mdxType,l=e.originalType,s=e.parentName,m=o(e,["components","mdxType","originalType","parentName"]),c=p(a),u=n,y=c["".concat(s,".").concat(u)]||c[u]||d[u]||l;return a?r.createElement(y,i(i({ref:t},m),{},{components:a})):r.createElement(y,i({ref:t},m))}));function y(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var l=a.length,i=new Array(l);i[0]=u;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o[c]="string"==typeof e?e:n,i[1]=o;for(var p=2;p<l;p++)i[p]=a[p];return r.createElement.apply(null,i)}return r.createElement.apply(null,a)}u.displayName="MDXCreateElement"},52731:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>d,frontMatter:()=>l,metadata:()=>o,toc:()=>p});var r=a(58168),n=(a(96540),a(15680));const l={title:"DROP-MATERIALIZED-VIEW",language:"en"},i=void 0,o={unversionedId:"sql-manual/sql-reference/Data-Definition-Statements/Drop/DROP-MATERIALIZED-VIEW",id:"version-1.2/sql-manual/sql-reference/Data-Definition-Statements/Drop/DROP-MATERIALIZED-VIEW",title:"DROP-MATERIALIZED-VIEW",description:"\x3c!--",source:"@site/versioned_docs/version-1.2/sql-manual/sql-reference/Data-Definition-Statements/Drop/DROP-MATERIALIZED-VIEW.md",sourceDirName:"sql-manual/sql-reference/Data-Definition-Statements/Drop",slug:"/sql-manual/sql-reference/Data-Definition-Statements/Drop/DROP-MATERIALIZED-VIEW",permalink:"/docs/1.2/sql-manual/sql-reference/Data-Definition-Statements/Drop/DROP-MATERIALIZED-VIEW",draft:!1,tags:[],version:"1.2",frontMatter:{title:"DROP-MATERIALIZED-VIEW",language:"en"},sidebar:"docs",previous:{title:"DROP-DATABASE",permalink:"/docs/1.2/sql-manual/sql-reference/Data-Definition-Statements/Drop/DROP-DATABASE"},next:{title:"DROP-MATERIALIZED-VIEW",permalink:"/docs/1.2/sql-manual/sql-reference/Data-Definition-Statements/Drop/DROP-POLICY"}},s={},p=[{value:"DROP-MATERIALIZED-VIEW",id:"drop-materialized-view",level:2},{value:"Name",id:"name",level:3},{value:"Description",id:"description",level:3},{value:"Example",id:"example",level:3},{value:"Keywords",id:"keywords",level:3},{value:"Best Practice",id:"best-practice",level:3}],m={toc:p},c="wrapper";function d(e){let{components:t,...a}=e;return(0,n.yg)(c,(0,r.A)({},m,a,{components:t,mdxType:"MDXLayout"}),(0,n.yg)("h2",{id:"drop-materialized-view"},"DROP-MATERIALIZED-VIEW"),(0,n.yg)("h3",{id:"name"},"Name"),(0,n.yg)("p",null,"DROP MATERIALIZED VIEW"),(0,n.yg)("h3",{id:"description"},"Description"),(0,n.yg)("p",null,"This statement is used to drop a materialized view. Synchronous syntax"),(0,n.yg)("p",null,"grammar:"),(0,n.yg)("pre",null,(0,n.yg)("code",{parentName:"pre",className:"language-sql"},"DROP MATERIALIZED VIEW [IF EXISTS] mv_name ON table_name;\n")),(0,n.yg)("ol",null,(0,n.yg)("li",{parentName:"ol"},(0,n.yg)("p",{parentName:"li"},"IF EXISTS:\nDo not throw an error if the materialized view does not exist. If this keyword is not declared, an error will be reported if the materialized view does not exist.")),(0,n.yg)("li",{parentName:"ol"},(0,n.yg)("p",{parentName:"li"},"mv_name:\nThe name of the materialized view to delete. Required.")),(0,n.yg)("li",{parentName:"ol"},(0,n.yg)("p",{parentName:"li"},"table_name:\nThe name of the table to which the materialized view to be deleted belongs. Required."))),(0,n.yg)("h3",{id:"example"},"Example"),(0,n.yg)("p",null,"The table structure is"),(0,n.yg)("pre",null,(0,n.yg)("code",{parentName:"pre",className:"language-sql"},"mysql> desc all_type_table all;\n+----------------+-------+----------+------+------ -+---------+-------+\n| IndexName | Field | Type | Null | Key | Default | Extra |\n+----------------+-------+----------+------+------ -+---------+-------+\n| all_type_table | k1 | TINYINT | Yes | true | N/A | |\n| | k2 | SMALLINT | Yes | false | N/A | NONE |\n| | k3 | INT | Yes | false | N/A | NONE |\n| | k4 | BIGINT | Yes | false | N/A | NONE |\n| | k5 | LARGEINT | Yes | false | N/A | NONE |\n| | k6 | FLOAT | Yes | false | N/A | NONE |\n| | k7 | DOUBLE | Yes | false | N/A | NONE |\n| | | | | | | | |\n| k1_sumk2 | k1 | TINYINT | Yes | true | N/A | |\n| | k2 | SMALLINT | Yes | false | N/A | SUM |\n+----------------+-------+----------+------+------ -+---------+-------+\n")),(0,n.yg)("ol",null,(0,n.yg)("li",{parentName:"ol"},(0,n.yg)("p",{parentName:"li"},"Drop the materialized view named k1_sumk2 of the table all_type_table"),(0,n.yg)("pre",{parentName:"li"},(0,n.yg)("code",{parentName:"pre",className:"language-sql"},"drop materialized view k1_sumk2 on all_type_table;\n")),(0,n.yg)("p",{parentName:"li"},"The table structure after the materialized view is deleted"),(0,n.yg)("pre",{parentName:"li"},(0,n.yg)("code",{parentName:"pre",className:"language-text"},"+----------------+-------+----------+------+------ -+---------+-------+\n| IndexName | Field | Type | Null | Key | Default | Extra |\n+----------------+-------+----------+------+------ -+---------+-------+\n| all_type_table | k1 | TINYINT | Yes | true | N/A | |\n| | k2 | SMALLINT | Yes | false | N/A | NONE |\n| | k3 | INT | Yes | false | N/A | NONE |\n| | k4 | BIGINT | Yes | false | N/A | NONE |\n| | k5 | LARGEINT | Yes | false | N/A | NONE |\n| | k6 | FLOAT | Yes | false | N/A | NONE |\n| | k7 | DOUBLE | Yes | false | N/A | NONE |\n+----------------+-------+----------+------+------ -+---------+-------+\n"))),(0,n.yg)("li",{parentName:"ol"},(0,n.yg)("p",{parentName:"li"},"Drop a non-existent materialized view in the table all_type_table"),(0,n.yg)("pre",{parentName:"li"},(0,n.yg)("code",{parentName:"pre",className:"language-sql"},"drop materialized view k1_k2 on all_type_table;\nERROR 1064 (HY000): errCode = 2, detailMessage = Materialized view [k1_k2] does not exist in table [all_type_table]\n")),(0,n.yg)("p",{parentName:"li"},"The delete request reports an error directly")),(0,n.yg)("li",{parentName:"ol"},(0,n.yg)("p",{parentName:"li"},"Delete the materialized view k1_k2 in the table all_type_table, if it does not exist, no error will be reported."),(0,n.yg)("pre",{parentName:"li"},(0,n.yg)("code",{parentName:"pre",className:"language-sql"},"drop materialized view if exists k1_k2 on all_type_table;\nQuery OK, 0 rows affected (0.00 sec)\n")),(0,n.yg)("p",{parentName:"li"}," If it exists, delete it, if it does not exist, no error is reported."))),(0,n.yg)("h3",{id:"keywords"},"Keywords"),(0,n.yg)("pre",null,(0,n.yg)("code",{parentName:"pre"},"DROP, MATERIALIZED, VIEW\n")),(0,n.yg)("h3",{id:"best-practice"},"Best Practice"))}d.isMDXComponent=!0}}]);