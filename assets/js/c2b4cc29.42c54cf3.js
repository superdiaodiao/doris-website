"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([[40515],{15680:(e,t,n)=>{n.d(t,{xA:()=>c,yg:()=>d});var a=n(96540);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function s(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?s(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):s(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},s=Object.keys(e);for(a=0;a<s.length;a++)n=s[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(a=0;a<s.length;a++)n=s[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var i=a.createContext({}),u=function(e){var t=a.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},c=function(e){var t=u(e.components);return a.createElement(i.Provider,{value:t},e.children)},p="mdxType",y={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,s=e.originalType,i=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),p=u(n),m=r,d=p["".concat(i,".").concat(m)]||p[m]||y[m]||s;return n?a.createElement(d,l(l({ref:t},c),{},{components:n})):a.createElement(d,l({ref:t},c))}));function d(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var s=n.length,l=new Array(s);l[0]=m;var o={};for(var i in t)hasOwnProperty.call(t,i)&&(o[i]=t[i]);o.originalType=e,o[p]="string"==typeof e?e:r,l[1]=o;for(var u=2;u<s;u++)l[u]=n[u];return a.createElement.apply(null,l)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},3260:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>i,contentTitle:()=>l,default:()=>y,frontMatter:()=>s,metadata:()=>o,toc:()=>u});var a=n(58168),r=(n(96540),n(15680));const s={title:"SHOW-QUERY-STATS",language:"en"},l=void 0,o={unversionedId:"sql-manual/sql-reference/Show-Statements/SHOW-QUERY-STATS",id:"sql-manual/sql-reference/Show-Statements/SHOW-QUERY-STATS",title:"SHOW-QUERY-STATS",description:"\x3c!--",source:"@site/docs/sql-manual/sql-reference/Show-Statements/SHOW-QUERY-STATS.md",sourceDirName:"sql-manual/sql-reference/Show-Statements",slug:"/sql-manual/sql-reference/Show-Statements/SHOW-QUERY-STATS",permalink:"/docs/dev/sql-manual/sql-reference/Show-Statements/SHOW-QUERY-STATS",draft:!1,tags:[],version:"current",frontMatter:{title:"SHOW-QUERY-STATS",language:"en"},sidebar:"docs",previous:{title:"SHOW-CATALOG-RECYCLE-BIN",permalink:"/docs/dev/sql-manual/sql-reference/Show-Statements/SHOW-CATALOG-RECYCLE-BIN"},next:{title:"IN",permalink:"/docs/dev/sql-manual/sql-reference/Operators/in"}},i={},u=[{value:"SHOW-QUERY-STATS",id:"show-query-stats",level:2},{value:"Name",id:"name",level:3},{value:"Description",id:"description",level:3},{value:"Example",id:"example",level:3},{value:"Keywords",id:"keywords",level:3},{value:"Best Practice",id:"best-practice",level:3}],c={toc:u},p="wrapper";function y(e){let{components:t,...n}=e;return(0,r.yg)(p,(0,a.A)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,r.yg)("h2",{id:"show-query-stats"},"SHOW-QUERY-STATS"),(0,r.yg)("h3",{id:"name"},"Name"),(0,r.yg)("version",{since:"dev"},"SHOW QUERY STATS"),(0,r.yg)("h3",{id:"description"},"Description"),(0,r.yg)("p",null,"This statement is used to show the query hit statistics of the database and table"),(0,r.yg)("p",null,"grammar:"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-sql"},"SHOW QUERY STATS [[FOR db_name]|[FROM table_name]] [ALL] [VERBOSE]];\n")),(0,r.yg)("p",null,"Remarks\uff1a"),(0,r.yg)("ol",null,(0,r.yg)("li",{parentName:"ol"},"Support query database and table history query hit statistics, restart fe after data will be reset, each fe separately statistics"),(0,r.yg)("li",{parentName:"ol"},"Use FOR DATABASE and FROM TABLE to specify the query database or table hit statistics, respectively followed by the database name or table name"),(0,r.yg)("li",{parentName:"ol"},"ALL can specify whether to display all index query hit statistics, VERBOSE can display more detailed hit statistics, these two parameters can be used separately, but must be placed at the end and can only be used on table queries"),(0,r.yg)("li",{parentName:"ol"},"If no database is used, execute ",(0,r.yg)("inlineCode",{parentName:"li"},"SHOW QUERY STATS")," directly to display the hit statistics of all databases"),(0,r.yg)("li",{parentName:"ol"},"The result may have two columns:\nQueryCount: The number of times the column was queried\nFilterCount: The number of times the column was queried as a where condition")),(0,r.yg)("h3",{id:"example"},"Example"),(0,r.yg)("ol",null,(0,r.yg)("li",{parentName:"ol"},(0,r.yg)("p",{parentName:"li"},"Show the query hit statistics for ",(0,r.yg)("inlineCode",{parentName:"p"},"baseall")),(0,r.yg)("pre",{parentName:"li"},(0,r.yg)("code",{parentName:"pre",className:"language-sql"}," MySQL [test_query_db]> show query stats from baseall;\n +-------+------------+-------------+\n | Field | QueryCount | FilterCount |\n +-------+------------+-------------+\n | k0    | 0          | 0           |\n | k1    | 0          | 0           |\n | k2    | 0          | 0           |\n | k3    | 0          | 0           |\n | k4    | 0          | 0           |\n | k5    | 0          | 0           |\n | k6    | 0          | 0           |\n | k10   | 0          | 0           |\n | k11   | 0          | 0           |\n | k7    | 0          | 0           |\n | k8    | 0          | 0           |\n | k9    | 0          | 0           |\n | k12   | 0          | 0           |\n | k13   | 0          | 0           |\n +-------+------------+-------------+\n 14 rows in set (0.002 sec)\n \n MySQL [test_query_db]> select k0, k1,k2, sum(k3) from baseall  where k9 > 1 group by k0,k1,k2;\n +------+------+--------+-------------+\n | k0   | k1   | k2     | sum(`k3`)   |\n +------+------+--------+-------------+\n |    0 |    6 |  32767 |        3021 |\n |    1 |   12 |  32767 | -2147483647 |\n |    0 |    3 |   1989 |        1002 |\n |    0 |    7 | -32767 |        1002 |\n |    1 |    8 |    255 |  2147483647 |\n |    1 |    9 |   1991 | -2147483647 |\n |    1 |   11 |   1989 |       25699 |\n |    1 |   13 | -32767 |  2147483647 |\n |    1 |   14 |    255 |         103 |\n |    0 |    1 |   1989 |        1001 |\n |    0 |    2 |   1986 |        1001 |\n |    1 |   15 |   1992 |        3021 |\n +------+------+--------+-------------+\n 12 rows in set (0.050 sec)\n \n MySQL [test_query_db]> show query stats from baseall;\n +-------+------------+-------------+\n | Field | QueryCount | FilterCount |\n +-------+------------+-------------+\n | k0    | 1          | 0           |\n | k1    | 1          | 0           |\n | k2    | 1          | 0           |\n | k3    | 1          | 0           |\n | k4    | 0          | 0           |\n | k5    | 0          | 0           |\n | k6    | 0          | 0           |\n | k10   | 0          | 0           |\n | k11   | 0          | 0           |\n | k7    | 0          | 0           |\n | k8    | 0          | 0           |\n | k9    | 1          | 1           |\n | k12   | 0          | 0           |\n | k13   | 0          | 0           |\n +-------+------------+-------------+\n 14 rows in set (0.001 sec)\n"))),(0,r.yg)("li",{parentName:"ol"},(0,r.yg)("p",{parentName:"li"},"Show the query hit statistics summary for all the mv in a table"),(0,r.yg)("pre",{parentName:"li"},(0,r.yg)("code",{parentName:"pre",className:"language-sql"},"MySQL [test_query_db]> show query stats from baseall all;\n +-----------+------------+\n | IndexName | QueryCount |\n +-----------+------------+\n | baseall   | 1          |\n +-----------+------------+\n 1 row in set (0.005 sec)\n"))),(0,r.yg)("li",{parentName:"ol"},(0,r.yg)("p",{parentName:"li"},"Show the query hit statistics detail info for all the mv in a table"),(0,r.yg)("pre",{parentName:"li"},(0,r.yg)("code",{parentName:"pre",className:"language-sql"}," MySQL [test_query_db]> show query stats from baseall all verbose;\n +-----------+-------+------------+-------------+\n | IndexName | Field | QueryCount | FilterCount |\n +-----------+-------+------------+-------------+\n | baseall   | k0    | 1          | 0           |\n |           | k1    | 1          | 0           |\n |           | k2    | 1          | 0           |\n |           | k3    | 1          | 0           |\n |           | k4    | 0          | 0           |\n |           | k5    | 0          | 0           |\n |           | k6    | 0          | 0           |\n |           | k10   | 0          | 0           |\n |           | k11   | 0          | 0           |\n |           | k7    | 0          | 0           |\n |           | k8    | 0          | 0           |\n |           | k9    | 1          | 1           |\n |           | k12   | 0          | 0           |\n |           | k13   | 0          | 0           |\n +-----------+-------+------------+-------------+\n 14 rows in set (0.017 sec)\n"))),(0,r.yg)("li",{parentName:"ol"},(0,r.yg)("p",{parentName:"li"},"Show the query hit for a database"),(0,r.yg)("pre",{parentName:"li"},(0,r.yg)("code",{parentName:"pre",className:"language-sql"}," MySQL [test_query_db]> show query stats for test_query_db;\n +----------------------------+------------+\n | TableName                  | QueryCount |\n +----------------------------+------------+\n | compaction_tbl             | 0          |\n | bigtable                   | 0          |\n | empty                      | 0          |\n | tempbaseall                | 0          |\n | test                       | 0          |\n | test_data_type             | 0          |\n | test_string_function_field | 0          |\n | baseall                    | 1          |\n | nullable                   | 0          |\n +----------------------------+------------+\n 9 rows in set (0.005 sec)\n"))),(0,r.yg)("li",{parentName:"ol"},(0,r.yg)("p",{parentName:"li"},"Show query hit statistics for all the databases"),(0,r.yg)("pre",{parentName:"li"},(0,r.yg)("code",{parentName:"pre",className:"language-sql"}," MySQL [(none)]> show query stats;\n +-----------------+------------+\n | Database        | QueryCount |\n +-----------------+------------+\n | test_query_db   | 1          |\n +-----------------+------------+\n 1 rows in set (0.005 sec)\n")),(0,r.yg)("p",{parentName:"li"},"SHOW QUERY STATS;"),(0,r.yg)("pre",{parentName:"li"},(0,r.yg)("code",{parentName:"pre"},"")))),(0,r.yg)("h3",{id:"keywords"},"Keywords"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre"}," SHOW\uff0c QUERY, STATS;\n")),(0,r.yg)("h3",{id:"best-practice"},"Best Practice"))}y.isMDXComponent=!0}}]);