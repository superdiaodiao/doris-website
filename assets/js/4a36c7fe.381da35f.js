"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([[1156],{15680:(e,n,t)=>{t.d(n,{xA:()=>p,yg:()=>c});var r=t(96540);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function l(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function o(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var s=r.createContext({}),u=function(e){var n=r.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):l(l({},n),e)),t},p=function(e){var n=u(e.components);return r.createElement(s.Provider,{value:n},e.children)},d="mdxType",y={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},g=r.forwardRef((function(e,n){var t=e.components,a=e.mdxType,i=e.originalType,s=e.parentName,p=o(e,["components","mdxType","originalType","parentName"]),d=u(t),g=a,c=d["".concat(s,".").concat(g)]||d[g]||y[g]||i;return t?r.createElement(c,l(l({ref:n},p),{},{components:t})):r.createElement(c,l({ref:n},p))}));function c(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var i=t.length,l=new Array(i);l[0]=g;var o={};for(var s in n)hasOwnProperty.call(n,s)&&(o[s]=n[s]);o.originalType=e,o[d]="string"==typeof e?e:a,l[1]=o;for(var u=2;u<i;u++)l[u]=t[u];return r.createElement.apply(null,l)}return r.createElement.apply(null,t)}g.displayName="MDXCreateElement"},90922:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>s,contentTitle:()=>l,default:()=>y,frontMatter:()=>i,metadata:()=>o,toc:()=>u});var r=t(58168),a=(t(96540),t(15680));const i={title:"Querying Async Materialized View",language:"en"},l=void 0,o={unversionedId:"query-acceleration/async-materialized-view/query-async-materialized-view",id:"query-acceleration/async-materialized-view/query-async-materialized-view",title:"Querying Async Materialized View",description:"\x3c!--",source:"@site/docs/query-acceleration/async-materialized-view/query-async-materialized-view.md",sourceDirName:"query-acceleration/async-materialized-view",slug:"/query-acceleration/async-materialized-view/query-async-materialized-view",permalink:"/docs/dev/query-acceleration/async-materialized-view/query-async-materialized-view",draft:!1,tags:[],version:"current",frontMatter:{title:"Querying Async Materialized View",language:"en"},sidebar:"docs",previous:{title:"Asynchronous materialized view",permalink:"/docs/dev/query-acceleration/async-materialized-view/"},next:{title:"Multi-Catalog Overview",permalink:"/docs/dev/lakehouse/multi-catalog/"}},s={},u=[{value:"Overview",id:"overview",level:2},{value:"Direct Query of Materialized View",id:"direct-query-of-materialized-view",level:2},{value:"Transparent Rewriting Capability",id:"transparent-rewriting-capability",level:2},{value:"Join rewriting",id:"join-rewriting",level:3},{value:"Aggregate rewriting",id:"aggregate-rewriting",level:3},{value:"Query partial Transparent Rewriting (Coming soon)",id:"query-partial-transparent-rewriting-coming-soon",level:2},{value:"Union Rewriting (Coming soon)",id:"union-rewriting-coming-soon",level:2},{value:"Auxiliary Functions",id:"auxiliary-functions",level:2},{value:"Relevant Environment Variables",id:"relevant-environment-variables",level:2},{value:"Limitations",id:"limitations",level:2}],p={toc:u},d="wrapper";function y(e){let{components:n,...t}=e;return(0,a.yg)(d,(0,r.A)({},p,t,{components:n,mdxType:"MDXLayout"}),(0,a.yg)("h2",{id:"overview"},"Overview"),(0,a.yg)("p",null,"Doris's asynchronous materialized views employ a structure based on the SPJG (SELECT-PROJECT-JOIN-GROUP-BY) pattern\nfor transparent rewriting algorithms. Doris can analyze the structural information of the query SQL,\nautomatically identify suitable materialized views, and attempt transparent rewriting by expressing the\nquery SQL using the materialized views. By utilizing precomputed materialized view results,\nsignificant improvements in query performance and a reduction in computational costs can be achieved."),(0,a.yg)("p",null,"Using the three tables: lineitem, orders, and partsupp from TPC-H, let's describe the capability of directly querying\na materialized view and using the materialized view for transparent query rewriting."),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-sql"},"CREATE TABLE IF NOT EXISTS lineitem (\n    l_orderkey    integer not null,\n    l_partkey     integer not null,\n    l_suppkey     integer not null,\n    l_linenumber  integer not null,\n    l_quantity    decimalv3(15,2) not null,\n    l_extendedprice  decimalv3(15,2) not null,\n    l_discount    decimalv3(15,2) not null,\n    l_tax         decimalv3(15,2) not null,\n    l_returnflag  char(1) not null,\n    l_linestatus  char(1) not null,\n    l_shipdate    date not null,\n    l_commitdate  date not null,\n    l_receiptdate date not null,\n    l_shipinstruct char(25) not null,\n    l_shipmode     char(10) not null,\n    l_comment      varchar(44) not null\n    )\n    DUPLICATE KEY(l_orderkey, l_partkey, l_suppkey, l_linenumber)\n    PARTITION BY RANGE(l_shipdate)\n    (FROM ('2023-10-17') TO ('2023-10-20') INTERVAL 1 DAY)\n    DISTRIBUTED BY HASH(l_orderkey) BUCKETS 3\n    PROPERTIES (\"replication_num\" = \"1\");\n")),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-sql"},"CREATE TABLE IF NOT EXISTS orders  (\n    o_orderkey       integer not null,\n    o_custkey        integer not null,\n    o_orderstatus    char(1) not null,\n    o_totalprice     decimalv3(15,2) not null,\n    o_orderdate      date not null,\n    o_orderpriority  char(15) not null,\n    o_clerk          char(15) not null,\n    o_shippriority   integer not null,\n    o_comment        varchar(79) not null\n    )\n    DUPLICATE KEY(o_orderkey, o_custkey)\n    PARTITION BY RANGE(o_orderdate)(\n    FROM ('2023-10-17') TO ('2023-10-20') INTERVAL 1 DAY)\n    DISTRIBUTED BY HASH(o_orderkey) BUCKETS 3\n    PROPERTIES (\"replication_num\" = \"1\");\n")),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-sql"},'    CREATE TABLE IF NOT EXISTS partsupp (\n      ps_partkey     INTEGER NOT NULL,\n      ps_suppkey     INTEGER NOT NULL,\n      ps_availqty    INTEGER NOT NULL,\n      ps_supplycost  DECIMALV3(15,2)  NOT NULL,\n      ps_comment     VARCHAR(199) NOT NULL \n    )\n    DUPLICATE KEY(ps_partkey, ps_suppkey)\n    DISTRIBUTED BY HASH(ps_partkey) BUCKETS 3\n    PROPERTIES (\n      "replication_num" = "1"\n    );\n')),(0,a.yg)("h2",{id:"direct-query-of-materialized-view"},"Direct Query of Materialized View"),(0,a.yg)("p",null,"A materialized view can be considered as a table and can be queried just like a regular table."),(0,a.yg)("p",null,"The syntax for defining a materialized view, details can be found in\n",(0,a.yg)("a",{parentName:"p",href:"/docs/dev/sql-manual/sql-reference/Data-Definition-Statements/Create/CREATE-ASYNC-MATERIALIZED-VIEW"},"CREATE-ASYNC-MATERIALIZED-VIEW")),(0,a.yg)("p",null,"Materialized view definition:"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-sql"},"CREATE MATERIALIZED VIEW mv1\nBUILD IMMEDIATE REFRESH AUTO ON SCHEDULE EVERY 1 hour\nDISTRIBUTED BY RANDOM BUCKETS 12\nPROPERTIES ('replication_num' = '1')\nAS\nSELECT t1.l_linenumber,\n       o_custkey,\n       o_orderdate\nFROM (SELECT * FROM lineitem WHERE l_linenumber > 1) t1\n         LEFT OUTER JOIN orders\n                         ON l_orderkey = o_orderkey;\n")),(0,a.yg)("p",null,"Query statement:\nDirect queries can be performed on the materialized view with additional filtering conditions and aggregations."),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-sql"},"SELECT l_linenumber,\n       o_custkey\nFROM mv1\nWHERE l_linenumber > 1 and o_orderdate = '2023-12-31';\n")),(0,a.yg)("h2",{id:"transparent-rewriting-capability"},"Transparent Rewriting Capability"),(0,a.yg)("h3",{id:"join-rewriting"},"Join rewriting"),(0,a.yg)("p",null,"JOIN rewriting refers to the ability to transparently rewrite a query when the tables used in the query and\nthe materialized view are the same. This rewriting can occur either by joining the materialized view\nand the query inside the JOIN clause or by placing conditions in the WHERE clause outside of the JOIN.\nAdditionally, under certain conditions, when the types of JOINs in the query and the materialized view do not match,\nrewriting can still take place."),(0,a.yg)("p",null,(0,a.yg)("strong",{parentName:"p"},"Case 1:")),(0,a.yg)("p",null,"The following case can undergo transparent rewriting. The condition ",(0,a.yg)("inlineCode",{parentName:"p"},"l_linenumber > 1")," allows for pull-up,\nenabling transparent rewriting by expressing the query using the precomputed results of the materialized view."),(0,a.yg)("p",null,"Materialized view definition:"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-sql"},"SELECT t1.l_linenumber,\n       o_custkey,\n       o_orderdate\nFROM (SELECT * FROM lineitem WHERE l_linenumber > 1) t1\nLEFT OUTER JOIN orders\nON l_orderkey = o_orderkey;\n")),(0,a.yg)("p",null,"Query statement:"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-sql"},"SELECT l_linenumber,\n       o_custkey\nFROM lineitem\nLEFT OUTER JOIN orders\nON l_orderkey = o_orderkey\nWHERE l_linenumber > 1 and o_orderdate = '2023-12-31';\n")),(0,a.yg)("p",null,(0,a.yg)("strong",{parentName:"p"},"Case 2:")),(0,a.yg)("p",null,"JOIN Derivation (Coming soon)\nWhen the types of JOINs in the query and the materialized view do not match, but the materialized view can provide\nall the data required for the query, transparent rewriting can also occur by compensating predicates above the JOIN.\nFor example:"),(0,a.yg)("p",null,"Materialized view definition:"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-sql"},"SELECT\n    l_shipdate, l_suppkey, o_orderdate\n    sum(o_totalprice) AS sum_total,\n    max(o_totalprice) AS max_total,\n    min(o_totalprice) AS min_total,\n    count(*) AS count_all,\n    count(distinct CASE WHEN o_shippriority > 1 AND o_orderkey IN (1, 3) THEN o_custkey ELSE null END) AS bitmap_union_basic\nFROM lineitem\nLEFT OUTER JOIN orders ON lineitem.l_orderkey = orders.o_orderkey AND l_shipdate = o_orderdate\nGROUP BY\nl_shipdate,\nl_suppkey,\no_orderdate;\n")),(0,a.yg)("p",null,"Query statement:"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-sql"},"SELECT\n    l_shipdate, l_suppkey, o_orderdate\n    sum(o_totalprice) AS sum_total,\n    max(o_totalprice) AS max_total,\n    min(o_totalprice) AS min_total,\n    count(*) AS count_all,\n    count(distinct CASE WHEN o_shippriority > 1 AND o_orderkey IN (1, 3) THEN o_custkey ELSE null END) AS bitmap_union_basic\nFROM lineitem\nINNER JOIN orders ON lineitem.l_orderkey = orders.o_orderkey AND l_shipdate = o_orderdate\nWHERE o_orderdate = '2023-12-11' AND l_suppkey = 3\nGROUP BY\nl_shipdate,\nl_suppkey,\no_orderdate;\n")),(0,a.yg)("h3",{id:"aggregate-rewriting"},"Aggregate rewriting"),(0,a.yg)("p",null,(0,a.yg)("strong",{parentName:"p"},"Case 1")),(0,a.yg)("p",null,"The following case can undergo transparent rewriting. The query and the materialized view use consistent dimensions\nfor aggregation, allowing the use of fields from the dimensions to filter results. The query will attempt to use the\nexpressions after SELECT in the materialized view."),(0,a.yg)("p",null,"Materialized view definition:"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-sql"},"SELECT\n    o_shippriority, o_comment,\n    count(distinct CASE WHEN o_shippriority > 1 AND o_orderkey IN (1, 3) THEN o_custkey ELSE null END) AS cnt_1,\n    count(distinct CASE WHEN O_SHIPPRIORITY > 2 AND o_orderkey IN (2) THEN o_custkey ELSE null END) AS cnt_2,\n    sum(o_totalprice),\n    max(o_totalprice),\n    min(o_totalprice),\n    count(*)\nFROM orders\nGROUP BY\no_shippriority,\no_comment;\n")),(0,a.yg)("p",null,"Query statement:"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-sql"},"SELECT \n    o_shippriority, o_comment,\n    count(distinct CASE WHEN o_shippriority > 1 AND o_orderkey IN (1, 3) THEN o_custkey ELSE null END) AS cnt_1,\n    count(distinct CASE WHEN O_SHIPPRIORITY > 2 AND o_orderkey IN (2) THEN o_custkey ELSE null END) AS cnt_2,\n    sum(o_totalprice),\n    max(o_totalprice),\n    min(o_totalprice),\n    count(*)\nFROM orders\nWHERE o_shippriority in (1, 2)\nGROUP BY\no_shippriority,\no_comment;\n")),(0,a.yg)("p",null,(0,a.yg)("strong",{parentName:"p"},"Case 2")),(0,a.yg)("p",null,"The following query can undergo transparent rewriting. The query and the materialized view use inconsistent\ndimensions for aggregation, where the dimensions used by the materialized view include those used by the query.\nThe query will attempt to roll up using the functions after SELECT, such as the materialized view's\nbitmap_union will eventually roll up into bitmap_union_count, maintaining consistency with the semantics of\nthe count(distinct) in the query."),(0,a.yg)("p",null,"Materialized view definition:"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-sql"},"SELECT\n    l_shipdate, o_orderdate, l_partkey, l_suppkey,\n    sum(o_totalprice) AS sum_total,\n    max(o_totalprice) AS max_total,\n    min(o_totalprice) AS min_total,\n    count(*) AS count_all,\n    bitmap_union(to_bitmap(CASE WHEN o_shippriority > 1 AND o_orderkey IN (1, 3) THEN o_custkey ELSE null END)) AS bitmap_union_basic\nFROM lineitem\nLEFT OUTER JOIN orders ON lineitem.l_orderkey = orders.o_orderkey AND l_shipdate = o_orderdate\nGROUP BY\nl_shipdate,\no_orderdate,\nl_partkey,\nl_suppkey;\n")),(0,a.yg)("p",null,"Query statement:"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-sql"},"SELECT\n    l_shipdate, l_suppkey,\n    sum(o_totalprice) AS sum_total,\n    max(o_totalprice) AS max_total,\n    min(o_totalprice) AS min_total,\n    count(*) AS count_all,\n    count(distinct CASE WHEN o_shippriority > 1 AND o_orderkey IN (1, 3) THEN o_custkey ELSE null END) AS bitmap_union_basic\nFROM lineitem\nLEFT OUTER JOIN orders ON lineitem.l_orderkey = orders.o_orderkey AND l_shipdate = o_orderdate\nWHERE o_orderdate = '2023-12-11' AND l_partkey = 3\nGROUP BY\nl_shipdate,\nl_suppkey;\n")),(0,a.yg)("p",null,"Temporary support for the aggregation roll-up functions is as follows:"),(0,a.yg)("table",null,(0,a.yg)("thead",{parentName:"table"},(0,a.yg)("tr",{parentName:"thead"},(0,a.yg)("th",{parentName:"tr",align:null},"Functions in Queries"),(0,a.yg)("th",{parentName:"tr",align:null},"Functions in Materialized Views"),(0,a.yg)("th",{parentName:"tr",align:null},"Aggregation Functions After Rewriting"))),(0,a.yg)("tbody",{parentName:"table"},(0,a.yg)("tr",{parentName:"tbody"},(0,a.yg)("td",{parentName:"tr",align:null},"max"),(0,a.yg)("td",{parentName:"tr",align:null},"max"),(0,a.yg)("td",{parentName:"tr",align:null},"max")),(0,a.yg)("tr",{parentName:"tbody"},(0,a.yg)("td",{parentName:"tr",align:null},"min"),(0,a.yg)("td",{parentName:"tr",align:null},"min"),(0,a.yg)("td",{parentName:"tr",align:null},"min")),(0,a.yg)("tr",{parentName:"tbody"},(0,a.yg)("td",{parentName:"tr",align:null},"sum"),(0,a.yg)("td",{parentName:"tr",align:null},"sum"),(0,a.yg)("td",{parentName:"tr",align:null},"sum")),(0,a.yg)("tr",{parentName:"tbody"},(0,a.yg)("td",{parentName:"tr",align:null},"count"),(0,a.yg)("td",{parentName:"tr",align:null},"count"),(0,a.yg)("td",{parentName:"tr",align:null},"sum")),(0,a.yg)("tr",{parentName:"tbody"},(0,a.yg)("td",{parentName:"tr",align:null},"count(distinct )"),(0,a.yg)("td",{parentName:"tr",align:null},"bitmap_union"),(0,a.yg)("td",{parentName:"tr",align:null},"bitmap_union_count")),(0,a.yg)("tr",{parentName:"tbody"},(0,a.yg)("td",{parentName:"tr",align:null},"bitmap_union"),(0,a.yg)("td",{parentName:"tr",align:null},"bitmap_union"),(0,a.yg)("td",{parentName:"tr",align:null},"bitmap_union")),(0,a.yg)("tr",{parentName:"tbody"},(0,a.yg)("td",{parentName:"tr",align:null},"bitmap_union_count"),(0,a.yg)("td",{parentName:"tr",align:null},"bitmap_union"),(0,a.yg)("td",{parentName:"tr",align:null},"bitmap_union_count")))),(0,a.yg)("h2",{id:"query-partial-transparent-rewriting-coming-soon"},"Query partial Transparent Rewriting (Coming soon)"),(0,a.yg)("p",null,"When the number of tables in the materialized view is greater than the query, if the materialized view\nsatisfies the conditions for JOIN elimination for tables more than the query, transparent rewriting can also occur.\nFor example:"),(0,a.yg)("p",null,(0,a.yg)("strong",{parentName:"p"},"Case 1")),(0,a.yg)("p",null,"Materialized view definition:"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-sql"}," SELECT\n     l_linenumber,\n     o_custkey,\n     ps_availqty\n FROM lineitem\n LEFT OUTER JOIN orders ON L_ORDERKEY = O_ORDERKEY\n LEFT OUTER JOIN partsupp ON l_partkey = ps_partkey\n AND l_suppkey = ps_suppkey;\n")),(0,a.yg)("p",null,"Query statement:"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-sql"}," SELECT\n     l_linenumber,\n     o_custkey,\n     ps_availqty\n FROM lineitem\n LEFT OUTER JOIN orders ON L_ORDERKEY = O_ORDERKEY;\n")),(0,a.yg)("h2",{id:"union-rewriting-coming-soon"},"Union Rewriting (Coming soon)"),(0,a.yg)("p",null,"When the materialized view is not sufficient to provide all the data for the query, it can use Union to return\ndata by combining the original table and the materialized view.\nFor example:"),(0,a.yg)("p",null,(0,a.yg)("strong",{parentName:"p"},"Case 1")),(0,a.yg)("p",null,"Materialized view definition:"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-sql"},"SELECT\n    o_orderkey,\n    o_custkey,\n    o_orderstatus,\n    o_totalprice\nFROM orders\nWHERE o_orderkey > 10;\n")),(0,a.yg)("p",null,"Query statement:"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-sql"},"SELECT\n    o_orderkey,\n    o_custkey,\n    o_orderstatus,\n    o_totalprice\nFROM orders\nWHERE o_orderkey > 5;\n")),(0,a.yg)("p",null,"Rewriting result:"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-sql"},"SELECT *\nFROM mv\nUNION ALL\nSELECT\n    o_orderkey,\n    o_custkey,\n    o_orderstatus,\n    o_totalprice\nFROM orders\nWHERE o_orderkey > 5 AND o_orderkey <= 10;\n")),(0,a.yg)("h2",{id:"auxiliary-functions"},"Auxiliary Functions"),(0,a.yg)("p",null,(0,a.yg)("strong",{parentName:"p"},"Data Consistency Issues After Transparent Rewriting")),(0,a.yg)("p",null,"For internal tables in the materialized view, you can control the maximum delay allowed for the data used by\nthe transparent rewriting by setting the grace_period property.\nRefer to ",(0,a.yg)("a",{parentName:"p",href:"/docs/dev/sql-manual/sql-reference/Data-Definition-Statements/Create/CREATE-ASYNC-MATERIALIZED-VIEW"},"CREATE-ASYNC-MATERIALIZED-VIEW")),(0,a.yg)("p",null,(0,a.yg)("strong",{parentName:"p"},"Viewing and Debugging Transparent Rewrite Hit Information")),(0,a.yg)("p",null,"You can use the following statements to view the hit information of transparent rewriting for a materialized view. It will display a concise overview of the transparent rewriting process."),(0,a.yg)("p",null,(0,a.yg)("inlineCode",{parentName:"p"},"explain <query_sql>")),(0,a.yg)("p",null,"If you want to know the detailed information about materialized view candidates, rewriting, and the final selection process, you can execute the following statement. It will provide a detailed breakdown of the transparent rewriting process."),(0,a.yg)("p",null,(0,a.yg)("inlineCode",{parentName:"p"},"explain memo plan <query_sql>")),(0,a.yg)("h2",{id:"relevant-environment-variables"},"Relevant Environment Variables"),(0,a.yg)("table",null,(0,a.yg)("thead",{parentName:"table"},(0,a.yg)("tr",{parentName:"thead"},(0,a.yg)("th",{parentName:"tr",align:null},"Switch"),(0,a.yg)("th",{parentName:"tr",align:null},"Description"))),(0,a.yg)("tbody",{parentName:"table"},(0,a.yg)("tr",{parentName:"tbody"},(0,a.yg)("td",{parentName:"tr",align:null},"SET enable_nereids_planner = true;"),(0,a.yg)("td",{parentName:"tr",align:null},"Asynchronous materialized views are only supported under the new optimizer, so the new optimizer needs to be enabled.")),(0,a.yg)("tr",{parentName:"tbody"},(0,a.yg)("td",{parentName:"tr",align:null},"SET enable_materialized_view_rewrite = true;"),(0,a.yg)("td",{parentName:"tr",align:null},"Enable or disable query transparent rewriting, default is disabled")),(0,a.yg)("tr",{parentName:"tbody"},(0,a.yg)("td",{parentName:"tr",align:null},"SET materialized_view_rewrite_enable_contain_external_table = true;"),(0,a.yg)("td",{parentName:"tr",align:null},"Whether materialized views participating in transparent rewriting are allowed to contain external tables, default is not allowed")))),(0,a.yg)("h2",{id:"limitations"},"Limitations"),(0,a.yg)("ul",null,(0,a.yg)("li",{parentName:"ul"},"The materialized view definition statement only allows SELECT, FROM, WHERE, JOIN, and GROUP BY statements, and\nthe input to JOIN cannot contain GROUP BY. Only INNER and LEFT OUTER JOIN types are currently supported; other\ntypes of JOIN operations will be supported gradually."),(0,a.yg)("li",{parentName:"ul"},"Materialized views based on External Tables do not guarantee strong consistency of query results."),(0,a.yg)("li",{parentName:"ul"},"No support for rewriting non-deterministic functions, including rand, now, current_time, current_date, random, uuid, etc."),(0,a.yg)("li",{parentName:"ul"},"No support for rewriting window functions."),(0,a.yg)("li",{parentName:"ul"},"The definition of materialized views currently cannot use views and other materialized views."),(0,a.yg)("li",{parentName:"ul"},"Currently, WHERE condition compensation supports cases where the materialized view has no WHERE clause, and\nthe query has a WHERE clause; or the materialized view has a WHERE clause, and the query's WHERE condition is a\nsuperset of the materialized view's. Currently, range condition compensation is not yet supported,\nsuch as the materialized view definition being a > 5, and the query being a > 10.")))}y.isMDXComponent=!0}}]);