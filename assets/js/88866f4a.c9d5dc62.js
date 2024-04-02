"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([[18052],{15680:(e,t,n)=>{n.d(t,{xA:()=>c,yg:()=>_});var a=n(296540);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function s(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?s(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):s(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},s=Object.keys(e);for(a=0;a<s.length;a++)n=s[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(a=0;a<s.length;a++)n=s[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var i=a.createContext({}),p=function(e){var t=a.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},c=function(e){var t=p(e.components);return a.createElement(i.Provider,{value:t},e.children)},d="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,s=e.originalType,i=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),d=p(n),m=r,_=d["".concat(i,".").concat(m)]||d[m]||u[m]||s;return n?a.createElement(_,o(o({ref:t},c),{},{components:n})):a.createElement(_,o({ref:t},c))}));function _(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var s=n.length,o=new Array(s);o[0]=m;var l={};for(var i in t)hasOwnProperty.call(t,i)&&(l[i]=t[i]);l.originalType=e,l[d]="string"==typeof e?e:r,o[1]=l;for(var p=2;p<s;p++)o[p]=n[p];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},855191:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>i,contentTitle:()=>o,default:()=>u,frontMatter:()=>s,metadata:()=>l,toc:()=>p});var a=n(58168),r=(n(296540),n(15680));const s={title:"SHOW DATA SKEW",language:"en"},o=void 0,l={unversionedId:"sql-manual/sql-reference/Show-Statements/SHOW-DATA-SKEW",id:"sql-manual/sql-reference/Show-Statements/SHOW-DATA-SKEW",title:"SHOW DATA SKEW",description:"\x3c!--",source:"@site/docs/sql-manual/sql-reference/Show-Statements/SHOW-DATA-SKEW.md",sourceDirName:"sql-manual/sql-reference/Show-Statements",slug:"/sql-manual/sql-reference/Show-Statements/SHOW-DATA-SKEW",permalink:"/docs/dev/sql-manual/sql-reference/Show-Statements/SHOW-DATA-SKEW",draft:!1,tags:[],version:"current",frontMatter:{title:"SHOW DATA SKEW",language:"en"},sidebar:"docs",previous:{title:"SHOW-DATABASES",permalink:"/docs/dev/sql-manual/sql-reference/Show-Statements/SHOW-DATABASES"},next:{title:"SHOW-DATABASE-ID",permalink:"/docs/dev/sql-manual/sql-reference/Show-Statements/SHOW-DATABASE-ID"}},i={},p=[{value:"SHOW-DATA-SKEW",id:"show-data-skew",level:2},{value:"Name",id:"name",level:3},{value:"Description",id:"description",level:3},{value:"Example",id:"example",level:3},{value:"Keywords",id:"keywords",level:3},{value:"Best Practice",id:"best-practice",level:3}],c={toc:p},d="wrapper";function u(e){let{components:t,...n}=e;return(0,r.yg)(d,(0,a.A)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,r.yg)("h2",{id:"show-data-skew"},"SHOW-DATA-SKEW"),(0,r.yg)("h3",{id:"name"},"Name"),(0,r.yg)("p",null,"SHOW DATA SKEW"),(0,r.yg)("h3",{id:"description"},"Description"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre"},"This statement is used to view the data skew of a table or the specified partitions.\n\ngrammar:\n\n    SHOW DATA SKEW FROM [db_name.]tbl_name [PARTITION (partition_name, ...)];\n\nDescription:\n\n    1. The result will show row count and data volume of each bucket under the specified partition, and the proportion of the data volume of each bucket in the total data volume.\n    2. For non-partitioned tables, the partition name in result is the same as the table name.\n")),(0,r.yg)("h3",{id:"example"},"Example"),(0,r.yg)("ol",null,(0,r.yg)("li",{parentName:"ol"},"For partitioned tables")),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},"CREATE-TABLE",(0,r.yg)("pre",{parentName:"li"},(0,r.yg)("code",{parentName:"pre",className:"language-sql"},'CREATE TABLE test_show_data_skew\n(\n  id int, \n  name string, \n  pdate date\n) \nPARTITION BY RANGE(pdate) \n(\n  FROM ("2023-04-16") TO ("2023-04-20") INTERVAL 1 DAY\n) \nDISTRIBUTED BY HASH(id) BUCKETS 5\nPROPERTIES (\n  "replication_num" = "1"\n);\n'))),(0,r.yg)("li",{parentName:"ul"},"View the data skew of the table",(0,r.yg)("pre",{parentName:"li"},(0,r.yg)("code",{parentName:"pre",className:"language-sql"}," mysql> SHOW DATA SKEW FROM test_show_data_skew;\n +---------------+-----------+-------------+-------------+------------------------------------------------------------------------------------------------------+---------+\n | PartitionName | BucketIdx | AvgRowCount | AvgDataSize | Graph                                                                                                | Percent |\n +---------------+-----------+-------------+-------------+------------------------------------------------------------------------------------------------------+---------+\n | p_20230416    | 0         | 1           | 648         | >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>                                                    | 49.77 % |\n | p_20230416    | 1         | 2           | 654         | >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>                                                   | 50.23 % |\n | p_20230416    | 2         | 0           | 0           |                                                                                                      | 00.00 % |\n | p_20230416    | 3         | 0           | 0           |                                                                                                      | 00.00 % |\n | p_20230416    | 4         | 0           | 0           |                                                                                                      | 00.00 % |\n | p_20230417    | 0         | 0           | 0           |                                                                                                      | 00.00 % |\n | p_20230417    | 1         | 0           | 0           |                                                                                                      | 00.00 % |\n | p_20230417    | 2         | 0           | 0           |                                                                                                      | 00.00 % |\n | p_20230417    | 3         | 0           | 0           |                                                                                                      | 00.00 % |\n | p_20230417    | 4         | 2           | 656         | >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>> | 100.00% |\n | p_20230418    | 0         | 0           | 0           |                                                                                                      | 00.00 % |\n | p_20230418    | 1         | 1           | 648         | >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>> | 100.00% |\n | p_20230418    | 2         | 0           | 0           |                                                                                                      | 00.00 % |\n | p_20230418    | 3         | 0           | 0           |                                                                                                      | 00.00 % |\n | p_20230418    | 4         | 0           | 0           |                                                                                                      | 00.00 % |\n | p_20230419    | 0         | 0           | 0           |                                                                                                      | 00.00 % |\n | p_20230419    | 1         | 1           | 648         | >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>                                                    | 49.96 % |\n | p_20230419    | 2         | 0           | 0           |                                                                                                      | 00.00 % |\n | p_20230419    | 3         | 1           | 649         | >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>                                                   | 50.04 % |\n | p_20230419    | 4         | 0           | 0           |                                                                                                      | 00.00 % |\n +---------------+-----------+-------------+-------------+------------------------------------------------------------------------------------------------------+---------+\n"))),(0,r.yg)("li",{parentName:"ul"},"View the data skew of the specified partitions.",(0,r.yg)("pre",{parentName:"li"},(0,r.yg)("code",{parentName:"pre",className:"language-sql"},"mysql> SHOW DATA SKEW FROM test_show_data_skew PARTITION(p_20230416, p_20230418);\n+---------------+-----------+-------------+-------------+------------------------------------------------------------------------------------------------------+---------+\n| PartitionName | BucketIdx | AvgRowCount | AvgDataSize | Graph                                                                                                | Percent |\n+---------------+-----------+-------------+-------------+------------------------------------------------------------------------------------------------------+---------+\n| p_20230416    | 0         | 1           | 648         | >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>                                                    | 49.77 % |\n| p_20230416    | 1         | 2           | 654         | >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>                                                   | 50.23 % |\n| p_20230416    | 2         | 0           | 0           |                                                                                                      | 00.00 % |\n| p_20230416    | 3         | 0           | 0           |                                                                                                      | 00.00 % |\n| p_20230416    | 4         | 0           | 0           |                                                                                                      | 00.00 % |\n| p_20230418    | 0         | 0           | 0           |                                                                                                      | 00.00 % |\n| p_20230418    | 1         | 1           | 648         | >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>> | 100.00% |\n| p_20230418    | 2         | 0           | 0           |                                                                                                      | 00.00 % |\n| p_20230418    | 3         | 0           | 0           |                                                                                                      | 00.00 % |\n| p_20230418    | 4         | 0           | 0           |                                                                                                      | 00.00 % |\n+---------------+-----------+-------------+-------------+------------------------------------------------------------------------------------------------------+---------+\n")))),(0,r.yg)("ol",{start:2},(0,r.yg)("li",{parentName:"ol"},"For non-partitioned tables")),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},"CREATE-TABLE",(0,r.yg)("pre",{parentName:"li"},(0,r.yg)("code",{parentName:"pre",className:"language-sql"},'CREATE TABLE test_show_data_skew2\n(\n    id int, \n    name string, \n    pdate date\n) \nDISTRIBUTED BY HASH(id) BUCKETS 5\nPROPERTIES (\n    "replication_num" = "1"\n);\n'))),(0,r.yg)("li",{parentName:"ul"},"View the data skew of the table",(0,r.yg)("pre",{parentName:"li"},(0,r.yg)("code",{parentName:"pre",className:"language-sql"},"mysql> SHOW DATA SKEW FROM test_show_data_skew2;\n+----------------------+-----------+-------------+-------------+---------------------------+---------+\n| PartitionName        | BucketIdx | AvgRowCount | AvgDataSize | Graph                     | Percent |\n+----------------------+-----------+-------------+-------------+---------------------------+---------+\n| test_show_data_skew2 | 0         | 1           | 648         | >>>>>>>>>>>>>>>>>>>>>>>>  | 24.73 % |\n| test_show_data_skew2 | 1         | 4           | 667         | >>>>>>>>>>>>>>>>>>>>>>>>> | 25.46 % |\n| test_show_data_skew2 | 2         | 0           | 0           |                           | 00.00 % |\n| test_show_data_skew2 | 3         | 1           | 649         | >>>>>>>>>>>>>>>>>>>>>>>>  | 24.77 % |\n| test_show_data_skew2 | 4         | 2           | 656         | >>>>>>>>>>>>>>>>>>>>>>>>> | 25.04 % |\n+----------------------+-----------+-------------+-------------+---------------------------+---------+\n")))),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre"},"mysql> SHOW DATA SKEW FROM test_show_data_skew2 PARTITION(test_show_data_skew2);\n+----------------------+-----------+-------------+-------------+---------------------------+---------+\n| PartitionName        | BucketIdx | AvgRowCount | AvgDataSize | Graph                     | Percent |\n+----------------------+-----------+-------------+-------------+---------------------------+---------+\n| test_show_data_skew2 | 0         | 1           | 648         | >>>>>>>>>>>>>>>>>>>>>>>>  | 24.73 % |\n| test_show_data_skew2 | 1         | 4           | 667         | >>>>>>>>>>>>>>>>>>>>>>>>> | 25.46 % |\n| test_show_data_skew2 | 2         | 0           | 0           |                           | 00.00 % |\n| test_show_data_skew2 | 3         | 1           | 649         | >>>>>>>>>>>>>>>>>>>>>>>>  | 24.77 % |\n| test_show_data_skew2 | 4         | 2           | 656         | >>>>>>>>>>>>>>>>>>>>>>>>> | 25.04 % |\n+----------------------+-----------+-------------+-------------+---------------------------+---------+\n```\n")),(0,r.yg)("h3",{id:"keywords"},"Keywords"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre"},"SHOW, DATA, SKEW\n")),(0,r.yg)("h3",{id:"best-practice"},"Best Practice"))}u.isMDXComponent=!0}}]);