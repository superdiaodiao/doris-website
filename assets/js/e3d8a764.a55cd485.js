"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([[59713],{15680:(e,a,i)=>{i.d(a,{xA:()=>c,yg:()=>p});var n=i(296540);function t(e,a,i){return a in e?Object.defineProperty(e,a,{value:i,enumerable:!0,configurable:!0,writable:!0}):e[a]=i,e}function r(e,a){var i=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);a&&(n=n.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),i.push.apply(i,n)}return i}function l(e){for(var a=1;a<arguments.length;a++){var i=null!=arguments[a]?arguments[a]:{};a%2?r(Object(i),!0).forEach((function(a){t(e,a,i[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(i)):r(Object(i)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(i,a))}))}return e}function s(e,a){if(null==e)return{};var i,n,t=function(e,a){if(null==e)return{};var i,n,t={},r=Object.keys(e);for(n=0;n<r.length;n++)i=r[n],a.indexOf(i)>=0||(t[i]=e[i]);return t}(e,a);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)i=r[n],a.indexOf(i)>=0||Object.prototype.propertyIsEnumerable.call(e,i)&&(t[i]=e[i])}return t}var o=n.createContext({}),d=function(e){var a=n.useContext(o),i=a;return e&&(i="function"==typeof e?e(a):l(l({},a),e)),i},c=function(e){var a=d(e.components);return n.createElement(o.Provider,{value:a},e.children)},m="mdxType",u={inlineCode:"code",wrapper:function(e){var a=e.children;return n.createElement(n.Fragment,{},a)}},y=n.forwardRef((function(e,a){var i=e.components,t=e.mdxType,r=e.originalType,o=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),m=d(i),y=t,p=m["".concat(o,".").concat(y)]||m[y]||u[y]||r;return i?n.createElement(p,l(l({ref:a},c),{},{components:i})):n.createElement(p,l({ref:a},c))}));function p(e,a){var i=arguments,t=a&&a.mdxType;if("string"==typeof e||t){var r=i.length,l=new Array(r);l[0]=y;var s={};for(var o in a)hasOwnProperty.call(a,o)&&(s[o]=a[o]);s.originalType=e,s[m]="string"==typeof e?e:t,l[1]=s;for(var d=2;d<r;d++)l[d]=i[d];return n.createElement.apply(null,l)}return n.createElement.apply(null,i)}y.displayName="MDXCreateElement"},576011:(e,a,i)=>{i.r(a),i.d(a,{assets:()=>o,contentTitle:()=>l,default:()=>u,frontMatter:()=>r,metadata:()=>s,toc:()=>d});var n=i(58168),t=(i(296540),i(15680));const r={title:"Asynchronous materialized view",language:"en"},l=void 0,s={unversionedId:"query-acceleration/async-materialized-view/async-materialized-view",id:"query-acceleration/async-materialized-view/async-materialized-view",title:"Asynchronous materialized view",description:"\x3c!--",source:"@site/docs/query-acceleration/async-materialized-view/async-materialized-view.md",sourceDirName:"query-acceleration/async-materialized-view",slug:"/query-acceleration/async-materialized-view/",permalink:"/docs/dev/query-acceleration/async-materialized-view/",draft:!1,tags:[],version:"current",frontMatter:{title:"Asynchronous materialized view",language:"en"},sidebar:"docs",previous:{title:"Doris Join Optimization Principle",permalink:"/docs/dev/query-acceleration/join-optimization/doris-join-optimization"},next:{title:"Querying Async Materialized View",permalink:"/docs/dev/query-acceleration/async-materialized-view/query-async-materialized-view"}},o={},d=[{value:"Construction and maintenance of materialized views",id:"construction-and-maintenance-of-materialized-views",level:2},{value:"Create materialized views",id:"create-materialized-views",level:3},{value:"View materialized view meta information",id:"view-materialized-view-meta-information",level:3},{value:"Refresh materialized view",id:"refresh-materialized-view",level:3},{value:"task management",id:"task-management",level:3},{value:"View jobs in materialized views",id:"view-jobs-in-materialized-views",level:4},{value:"Pause materialized view job scheduled scheduling",id:"pause-materialized-view-job-scheduled-scheduling",level:4},{value:"RESUME materialized view job scheduling",id:"resume-materialized-view-job-scheduling",level:4},{value:"Viewing tasks in materialized views",id:"viewing-tasks-in-materialized-views",level:4},{value:"Cancel the task of objectifying the view",id:"cancel-the-task-of-objectifying-the-view",level:4},{value:"Modifying materialized views",id:"modifying-materialized-views",level:3},{value:"Delete materialized view",id:"delete-materialized-view",level:3},{value:"The use of materialized views",id:"the-use-of-materialized-views",level:2},{value:"Notice",id:"notice",level:2}],c={toc:d},m="wrapper";function u(e){let{components:a,...i}=e;return(0,t.yg)(m,(0,n.A)({},c,i,{components:a,mdxType:"MDXLayout"}),(0,t.yg)("h1",{id:"asynchronous-materialized-view"},"Asynchronous materialized view"),(0,t.yg)("h2",{id:"construction-and-maintenance-of-materialized-views"},"Construction and maintenance of materialized views"),(0,t.yg)("h3",{id:"create-materialized-views"},"Create materialized views"),(0,t.yg)("p",null,"Prepare two tables and data"),(0,t.yg)("pre",null,(0,t.yg)("code",{parentName:"pre",className:"language-sql"},"use tpch;\n\nCREATE TABLE IF NOT EXISTS orders  (\n    o_orderkey       integer not null,\n    o_custkey        integer not null,\n    o_orderstatus    char(1) not null,\n    o_totalprice     decimalv3(15,2) not null,\n    o_orderdate      date not null,\n    o_orderpriority  char(15) not null,\n    o_clerk          char(15) not null,\n    o_shippriority   integer not null,\n    o_comment        varchar(79) not null\n    )\n    DUPLICATE KEY(o_orderkey, o_custkey)\n    PARTITION BY RANGE(o_orderdate)(\n    FROM ('2023-10-17') TO ('2023-10-20') INTERVAL 1 DAY)\n    DISTRIBUTED BY HASH(o_orderkey) BUCKETS 3\n    PROPERTIES (\"replication_num\" = \"1\");\n\ninsert into orders values\n   (1, 1, 'o', 99.5, '2023-10-17', 'a', 'b', 1, 'yy'),\n   (2, 2, 'o', 109.2, '2023-10-18', 'c','d',2, 'mm'),\n   (3, 3, 'o', 99.5, '2023-10-19', 'a', 'b', 1, 'yy');\n\nCREATE TABLE IF NOT EXISTS lineitem (\n    l_orderkey    integer not null,\n    l_partkey     integer not null,\n    l_suppkey     integer not null,\n    l_linenumber  integer not null,\n    l_quantity    decimalv3(15,2) not null,\n    l_extendedprice  decimalv3(15,2) not null,\n    l_discount    decimalv3(15,2) not null,\n    l_tax         decimalv3(15,2) not null,\n    l_returnflag  char(1) not null,\n    l_linestatus  char(1) not null,\n    l_shipdate    date not null,\n    l_commitdate  date not null,\n    l_receiptdate date not null,\n    l_shipinstruct char(25) not null,\n    l_shipmode     char(10) not null,\n    l_comment      varchar(44) not null\n    )\n    DUPLICATE KEY(l_orderkey, l_partkey, l_suppkey, l_linenumber)\n    PARTITION BY RANGE(l_shipdate)\n    (FROM ('2023-10-17') TO ('2023-10-20') INTERVAL 1 DAY)\n    DISTRIBUTED BY HASH(l_orderkey) BUCKETS 3\n    PROPERTIES (\"replication_num\" = \"1\");\n\ninsert into lineitem values\n (1, 2, 3, 4, 5.5, 6.5, 7.5, 8.5, 'o', 'k', '2023-10-17', '2023-10-17', '2023-10-17', 'a', 'b', 'yyyyyyyyy'),\n (2, 2, 3, 4, 5.5, 6.5, 7.5, 8.5, 'o', 'k', '2023-10-18', '2023-10-18', '2023-10-18', 'a', 'b', 'yyyyyyyyy'),\n (3, 2, 3, 6, 7.5, 8.5, 9.5, 10.5, 'k', 'o', '2023-10-19', '2023-10-19', '2023-10-19', 'c', 'd', 'xxxxxxxxx');\n")),(0,t.yg)("p",null,"Create materialized views"),(0,t.yg)("pre",null,(0,t.yg)("code",{parentName:"pre",className:"language-sql"},"CREATE MATERIALIZED VIEW mv1 \n        BUILD DEFERRED REFRESH AUTO ON MANUAL\n        partition by(l_shipdate)\n        DISTRIBUTED BY RANDOM BUCKETS 2\n        PROPERTIES ('replication_num' = '1') \n        AS \n        select l_shipdate, o_orderdate, l_partkey, l_suppkey, sum(o_totalprice) as sum_total\n            from lineitem\n            left join orders on lineitem.l_orderkey = orders.o_orderkey and l_shipdate = o_orderdate\n            group by\n            l_shipdate,\n            o_orderdate,\n            l_partkey,\n            l_suppkey;\n")),(0,t.yg)("p",null,"Specific syntax can be viewed ",(0,t.yg)("a",{parentName:"p",href:"/docs/dev/sql-manual/sql-reference/Data-Definition-Statements/Create/CREATE-ASYNC-MATERIALIZED-VIEW"},"CREATE MATERIALIZED VIEW")),(0,t.yg)("h3",{id:"view-materialized-view-meta-information"},"View materialized view meta information"),(0,t.yg)("pre",null,(0,t.yg)("code",{parentName:"pre",className:"language-sql"},'select * from mv_infos("database"="tpch") where Name="mv1";\n')),(0,t.yg)("p",null,"The unique features of materialized views can be viewed through ",(0,t.yg)("a",{parentName:"p",href:"/docs/dev/sql-manual/sql-functions/table-functions/mv_infos"},"mv_infos()")),(0,t.yg)("p",null,"Properties related to table, still viewed through ",(0,t.yg)("a",{parentName:"p",href:"/docs/dev/sql-manual/sql-reference/Show-Statements/SHOW-TABLES"},"SHOW TABLES")),(0,t.yg)("h3",{id:"refresh-materialized-view"},"Refresh materialized view"),(0,t.yg)("p",null,"The materialized view supports different refresh strategies, such as scheduled refresh and manual refresh. It also supports different refresh granularity, such as full refresh, incremental refresh of partition granularity, etc. Here we take manually refreshing partial partitions of the materialized view as an example."),(0,t.yg)("p",null,"First, check the list of materialized view partitions"),(0,t.yg)("pre",null,(0,t.yg)("code",{parentName:"pre",className:"language-sql"},"SHOW PARTITIONS FROM mv1;\n")),(0,t.yg)("p",null,"Refresh partition named ",(0,t.yg)("inlineCode",{parentName:"p"},"p_20231017_20231018")),(0,t.yg)("pre",null,(0,t.yg)("code",{parentName:"pre",className:"language-sql"},"REFRESH MATERIALIZED VIEW mv1 partitions(p_20231017_20231018);\n")),(0,t.yg)("p",null,"Specific syntax can be viewed ",(0,t.yg)("a",{parentName:"p",href:"/docs/dev/sql-manual/sql-reference/Utility-Statements/REFRESH-MATERIALIZED-VIEW"},"REFRESH MATERIALIZED VIEW")),(0,t.yg)("h3",{id:"task-management"},"task management"),(0,t.yg)("p",null,"Each materialized view defaults to a job responsible for refreshing data, which is used to describe the refresh strategy and other information of the materialized view. Each time a refresh is triggered, a task is generated,\nTask is used to describe specific refresh information, such as the time used for refreshing, which partitions were refreshed, etc"),(0,t.yg)("h4",{id:"view-jobs-in-materialized-views"},"View jobs in materialized views"),(0,t.yg)("pre",null,(0,t.yg)("code",{parentName:"pre",className:"language-sql"},'select * from jobs("type"="mv") order by CreateTime;\n')),(0,t.yg)("p",null,"Specific syntax can be viewed ",(0,t.yg)("a",{parentName:"p",href:"/docs/dev/sql-manual/sql-functions/table-functions/jobs"},'jobs("type"="mv")')),(0,t.yg)("h4",{id:"pause-materialized-view-job-scheduled-scheduling"},"Pause materialized view job scheduled scheduling"),(0,t.yg)("pre",null,(0,t.yg)("code",{parentName:"pre",className:"language-sql"},"PAUSE MATERIALIZED VIEW JOB ON mv1;\n")),(0,t.yg)("p",null,"Can pause the scheduled scheduling of materialized views"),(0,t.yg)("p",null,"Specific syntax can be viewed ",(0,t.yg)("a",{parentName:"p",href:"/docs/dev/sql-manual/sql-reference/Utility-Statements/PAUSE-MATERIALIZED-VIEW"},"PAUSE MATERIALIZED VIEW JOB")),(0,t.yg)("h4",{id:"resume-materialized-view-job-scheduling"},"RESUME materialized view job scheduling"),(0,t.yg)("pre",null,(0,t.yg)("code",{parentName:"pre",className:"language-sql"},"RESUME MATERIALIZED VIEW JOB ON mv1;\n")),(0,t.yg)("p",null,"Can RESUME scheduled scheduling of materialized views"),(0,t.yg)("p",null,"Specific syntax can be viewed ",(0,t.yg)("a",{parentName:"p",href:"/docs/dev/sql-manual/sql-reference/Utility-Statements/RESUME-MATERIALIZED-VIEW"},"RESUME MATERIALIZED VIEW JOB")),(0,t.yg)("h4",{id:"viewing-tasks-in-materialized-views"},"Viewing tasks in materialized views"),(0,t.yg)("pre",null,(0,t.yg)("code",{parentName:"pre",className:"language-sql"},'select * from tasks("type"="mv");\n')),(0,t.yg)("p",null,"Specific syntax can be viewed ",(0,t.yg)("a",{parentName:"p",href:"/docs/dev/sql-manual/sql-functions/table-functions/tasks"},'tasks("type"="mv")')),(0,t.yg)("h4",{id:"cancel-the-task-of-objectifying-the-view"},"Cancel the task of objectifying the view"),(0,t.yg)("pre",null,(0,t.yg)("code",{parentName:"pre",className:"language-sql"},"CANCEL MATERIALIZED VIEW TASK realTaskId on mv1;\n")),(0,t.yg)("p",null,"Can cancel the operation of this task"),(0,t.yg)("p",null,"Specific syntax can be viewed ",(0,t.yg)("a",{parentName:"p",href:"/docs/dev/sql-manual/sql-reference/Utility-Statements/CANCEL-MATERIALIZED-VIEW-TASK"},"CANCEL MATERIALIZED VIEW TASK")),(0,t.yg)("h3",{id:"modifying-materialized-views"},"Modifying materialized views"),(0,t.yg)("p",null,"Modify the properties of materialized views"),(0,t.yg)("pre",null,(0,t.yg)("code",{parentName:"pre",className:"language-sql"},'ALTER MATERIALIZED VIEW mv1 set("grace_period"="3333");\n')),(0,t.yg)("p",null,"Modify the name of the materialized view, the refresh method of the materialized view, and the unique properties of the materialized view can be viewed through ",(0,t.yg)("a",{parentName:"p",href:"/docs/dev/sql-manual/sql-reference/Data-Definition-Statements/Alter/ALTER-ASYNC-MATERIALIZED-VIEW"},"ALTER MATERIALIZED VIEW")),(0,t.yg)("p",null,"The materialized view itself is also a Table, so Table related properties, such as the number of copies, are still modified through the syntax related to ",(0,t.yg)("inlineCode",{parentName:"p"},"ALTER TABLE"),"."),(0,t.yg)("h3",{id:"delete-materialized-view"},"Delete materialized view"),(0,t.yg)("pre",null,(0,t.yg)("code",{parentName:"pre",className:"language-sql"},"DROP MATERIALIZED VIEW mv1;\n")),(0,t.yg)("p",null,"The materialized view has a dedicated deletion syntax and cannot be deleted through the drop table,"),(0,t.yg)("p",null,"Specific syntax can be viewed ",(0,t.yg)("a",{parentName:"p",href:"/docs/dev/sql-manual/sql-reference/Data-Definition-Statements/Drop/DROP-ASYNC-MATERIALIZED-VIEW"},"DROP MATERIALIZED VIEW")),(0,t.yg)("h2",{id:"the-use-of-materialized-views"},"The use of materialized views"),(0,t.yg)("p",null,"can be viewed ",(0,t.yg)("a",{parentName:"p",href:"/docs/dev/query-acceleration/async-materialized-view/query-async-materialized-view"},"Query async materialized view")),(0,t.yg)("h2",{id:"notice"},"Notice"),(0,t.yg)("ul",null,(0,t.yg)("li",{parentName:"ul"},"Asynchronous materialized views are only supported for use in the Nereids optimizer, ",(0,t.yg)("a",{parentName:"li",href:"/docs/dev/query-acceleration/nereids"},"Nereids optimizer")),(0,t.yg)("li",{parentName:"ul"},"Currently, determining the synchronization between materialized views and base tables is only supported for ",(0,t.yg)("inlineCode",{parentName:"li"},"OlapTable"),". For other types of external tables, they are directly considered to be synchronized. For instance, if the base tables of a materialized view are all external tables, they are assumed to be synchronized. When querying ",(0,t.yg)("inlineCode",{parentName:"li"},"mv_infos()"),", the SyncWithBaseTables flag will always return 1 (true) for these external tables. When refreshing a materialized view, it is necessary to manually refresh specific partitions or specify ",(0,t.yg)("inlineCode",{parentName:"li"},"complete")," to refresh all partitions.")))}u.isMDXComponent=!0}}]);