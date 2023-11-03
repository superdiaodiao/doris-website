"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([[45156],{3905:(t,e,a)=>{a.d(e,{Zo:()=>u,kt:()=>k});var n=a(67294);function i(t,e,a){return e in t?Object.defineProperty(t,e,{value:a,enumerable:!0,configurable:!0,writable:!0}):t[e]=a,t}function l(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.push.apply(a,n)}return a}function o(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?l(Object(a),!0).forEach((function(e){i(t,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))}))}return t}function r(t,e){if(null==t)return{};var a,n,i=function(t,e){if(null==t)return{};var a,n,i={},l=Object.keys(t);for(n=0;n<l.length;n++)a=l[n],e.indexOf(a)>=0||(i[a]=t[a]);return i}(t,e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);for(n=0;n<l.length;n++)a=l[n],e.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(t,a)&&(i[a]=t[a])}return i}var s=n.createContext({}),m=function(t){var e=n.useContext(s),a=e;return t&&(a="function"==typeof t?t(e):o(o({},e),t)),a},u=function(t){var e=m(t.components);return n.createElement(s.Provider,{value:e},t.children)},c="mdxType",d={inlineCode:"code",wrapper:function(t){var e=t.children;return n.createElement(n.Fragment,{},e)}},p=n.forwardRef((function(t,e){var a=t.components,i=t.mdxType,l=t.originalType,s=t.parentName,u=r(t,["components","mdxType","originalType","parentName"]),c=m(a),p=i,k=c["".concat(s,".").concat(p)]||c[p]||d[p]||l;return a?n.createElement(k,o(o({ref:e},u),{},{components:a})):n.createElement(k,o({ref:e},u))}));function k(t,e){var a=arguments,i=e&&e.mdxType;if("string"==typeof t||i){var l=a.length,o=new Array(l);o[0]=p;var r={};for(var s in e)hasOwnProperty.call(e,s)&&(r[s]=e[s]);r.originalType=t,r[c]="string"==typeof t?t:i,o[1]=r;for(var m=2;m<l;m++)o[m]=a[m];return n.createElement.apply(null,o)}return n.createElement.apply(null,a)}p.displayName="MDXCreateElement"},32399:(t,e,a)=>{a.r(e),a.d(e,{assets:()=>s,contentTitle:()=>o,default:()=>d,frontMatter:()=>l,metadata:()=>r,toc:()=>m});var n=a(87462),i=(a(67294),a(3905));const l={title:"Statistics",language:"en"},o=void 0,r={unversionedId:"query-acceleration/statistics",id:"query-acceleration/statistics",title:"Statistics",description:"\x3c!--",source:"@site/docs/query-acceleration/statistics.md",sourceDirName:"query-acceleration",slug:"/query-acceleration/statistics",permalink:"/docs/dev/query-acceleration/statistics",draft:!1,tags:[],version:"current",frontMatter:{title:"Statistics",language:"en"},sidebar:"docs",previous:{title:"Materialized View",permalink:"/docs/dev/query-acceleration/materialized-view"},next:{title:"Bucket Shuffle Join",permalink:"/docs/dev/query-acceleration/join-optimization/bucket-shuffle-join"}},s={},m=[{value:"Introduction to statistics information",id:"introduction-to-statistics-information",level:2},{value:"Collecting Statistics",id:"collecting-statistics",level:2},{value:"Using the ANALYZE Statement",id:"using-the-analyze-statement",level:3},{value:"Automatic Statistics Collection",id:"automatic-statistics-collection",level:3},{value:"Task Management",id:"task-management",level:3},{value:"Viewing Analyze Tasks",id:"viewing-analyze-tasks",level:4},{value:"Terminating Analyze Tasks",id:"terminating-analyze-tasks",level:4},{value:"Viewing Statistics Information",id:"viewing-statistics-information",level:4},{value:"Table Statistics Information",id:"table-statistics-information",level:4},{value:"Viewing Column Statistics Information",id:"viewing-column-statistics-information",level:4},{value:"Modifying Statistics Information",id:"modifying-statistics-information",level:4},{value:"Delete Statistics",id:"delete-statistics",level:4},{value:"Delete Analyze Job",id:"delete-analyze-job",level:4},{value:"View Automatic Collection Task Execution Status",id:"view-automatic-collection-task-execution-status",level:3},{value:"Configuration Options",id:"configuration-options",level:2},{value:"Usage Recommendations",id:"usage-recommendations",level:2},{value:"Common Issues",id:"common-issues",level:2},{value:"ANALYZE WITH SYNC Execution Failed: Failed to analyze following columns...",id:"analyze-with-sync-execution-failed-failed-to-analyze-following-columns",level:3},{value:"ANALYZE Submission Error: Stats table not available...",id:"analyze-submission-error-stats-table-not-available",level:3},{value:"Failure of ANALYZE on Large Tables",id:"failure-of-analyze-on-large-tables",level:3}],u={toc:m},c="wrapper";function d(t){let{components:e,...a}=t;return(0,i.kt)(c,(0,n.Z)({},u,a,{components:e,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"statistics"},"Statistics"),(0,i.kt)("h2",{id:"introduction-to-statistics-information"},"Introduction to statistics information"),(0,i.kt)("p",null,"Collecting statistics helps the optimizer understand data distribution characteristics. When performing Cost-Based Optimization (CBO), the optimizer utilizes these statistics to calculate the selectivity of predicates and estimate the cost of each execution plan. This enables the selection of more efficient plans, significantly improving query performance."),(0,i.kt)("p",null,"Currently, the collected column-level information includes:"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:"left"},"Information"),(0,i.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"row_count")),(0,i.kt)("td",{parentName:"tr",align:"left"},"Total number of rows")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"data_size")),(0,i.kt)("td",{parentName:"tr",align:"left"},"Total data size")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"avg_size_byte")),(0,i.kt)("td",{parentName:"tr",align:"left"},"Average length of values")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"ndv")),(0,i.kt)("td",{parentName:"tr",align:"left"},"Number of distinct values")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"min")),(0,i.kt)("td",{parentName:"tr",align:"left"},"Minimum value")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"max")),(0,i.kt)("td",{parentName:"tr",align:"left"},"Maximum value")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"null_count")),(0,i.kt)("td",{parentName:"tr",align:"left"},"Number of null values")))),(0,i.kt)("h2",{id:"collecting-statistics"},"Collecting Statistics"),(0,i.kt)("h3",{id:"using-the-analyze-statement"},"Using the ANALYZE Statement"),(0,i.kt)("p",null,"Doris supports users in triggering the collection and updating of statistics by submitting the ANALYZE statement."),(0,i.kt)("p",null,"Syntax:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-SQL"},'ANALYZE < TABLE | DATABASE table_name | db_name >\n    [ PARTITIONS [(*) | (partition_name [, ...]) | WITH RECENT COUNT ] ]\n    [ (column_name [, ...]) ]\n    [ [ WITH SYNC ] [ WITH SAMPLE PERCENT | ROWS ] [ WITH SQL ] ]\n    [ PROPERTIES ("key" = "value", ...) ];\n')),(0,i.kt)("p",null,"Where:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"table_name"),": Specifies the target table. It can be in the ",(0,i.kt)("inlineCode",{parentName:"li"},"db_name.table_name")," format."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"partition_name"),": The specified target partitions\uff08for hive external table only\uff09\u3002Must be partitions exist in ",(0,i.kt)("inlineCode",{parentName:"li"},"table_name"),". Multiple partition names are separated by commas. e.g. for single level partition: PARTITIONS(",(0,i.kt)("inlineCode",{parentName:"li"},"event_date=20230706"),"), for multi level partition: PARTITIONS(",(0,i.kt)("inlineCode",{parentName:"li"},"nation=US/city=Washington"),"). PARTITIONS(*) specifies all partitions, PARTITIONS WITH RECENT 30 specifies the latest 30 partitions."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"column_name"),": Specifies the target column. It must be an existing column in ",(0,i.kt)("inlineCode",{parentName:"li"},"table_name"),", and multiple column names are separated by commas."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"sync"),": Collect statistics synchronously. Returns upon completion. If not specified, it executes asynchronously and returns a task ID."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"sample percent | rows"),": Collect statistics using sampling. You can specify either the sampling percentage or the number of sampled rows."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"sql"),": Collect statistics for external partition column with sql. By default, it uses meta data for partition columns, which is faster but may inaccurate for row count and size. Using sql could collect the accurate stats.")),(0,i.kt)("h3",{id:"automatic-statistics-collection"},"Automatic Statistics Collection"),(0,i.kt)("p",null,"Users can enable this feature by setting the FE configuration option ",(0,i.kt)("inlineCode",{parentName:"p"},"enable_full_auto_analyze = true"),". Once enabled, statistics on qualifying tables and columns will be automatically collected during specified time intervals. Users can specify the automatic collection time period by setting the ",(0,i.kt)("inlineCode",{parentName:"p"},"full_auto_analyze_start_time")," (default is 00:00:00) and ",(0,i.kt)("inlineCode",{parentName:"p"},"full_auto_analyze_end_time")," (default is 02:00:00) parameters."),(0,i.kt)("p",null,"This feature collects statistics only for tables and columns that either have no statistics or have outdated statistics. When more than 20% of the data in a table is updated (this value can be configured using the ",(0,i.kt)("inlineCode",{parentName:"p"},"table_stats_health_threshold")," parameter with a default of 80), Doris considers the statistics for that table to be outdated."),(0,i.kt)("p",null,"For tables with a large amount of data (default is 5GiB), Doris will automatically use sampling to collect statistics, reducing the impact on the system and completing the collection job as quickly as possible. Users can adjust this behavior by setting the ",(0,i.kt)("inlineCode",{parentName:"p"},"huge_table_lower_bound_size_in_bytes")," FE parameter. If you want to collect statistics for all tables in full, you can set the ",(0,i.kt)("inlineCode",{parentName:"p"},"enable_auto_sample")," FE parameter to false. For tables with data size greater than ",(0,i.kt)("inlineCode",{parentName:"p"},"huge_table_lower_bound_size_in_bytes"),", Doris ensures that the collection interval is not less than 12 hours (this time can be controlled using the ",(0,i.kt)("inlineCode",{parentName:"p"},"huge_table_auto_analyze_interval_in_millis")," FE parameter)."),(0,i.kt)("p",null,"The default sample size for automatic sampling is 4194304(2^22) rows, but the actual sample size may be larger due to implementation reasons. If you want to sample more rows to obtain more accurate data distribution information, you can configure the ",(0,i.kt)("inlineCode",{parentName:"p"},"huge_table_default_sample_rows")," FE parameter."),(0,i.kt)("h3",{id:"task-management"},"Task Management"),(0,i.kt)("h4",{id:"viewing-analyze-tasks"},"Viewing Analyze Tasks"),(0,i.kt)("p",null,"You can use ",(0,i.kt)("inlineCode",{parentName:"p"},"SHOW ANALYZE")," to view information about statistics collection tasks."),(0,i.kt)("p",null,"Syntax:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-SQL"},'SHOW ANALYZE < table_name | job_id >\n    [ WHERE [ STATE = [ "PENDING" | "RUNNING" | "FINISHED" | "FAILED" ] ] ];\n')),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"table_name"),": Specifies the table for which you want to view statistics collection tasks. It can be in the form of ",(0,i.kt)("inlineCode",{parentName:"li"},"db_name.table_name"),". If not specified, it returns information for all statistics collection tasks."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"job_id"),": The job ID of the statistics information task returned when executing ",(0,i.kt)("inlineCode",{parentName:"li"},"ANALYZE"),". If not specified, it returns information for all statistics collection tasks.")),(0,i.kt)("p",null,"Output:"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:"left"},"Column Name"),(0,i.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"job_id")),(0,i.kt)("td",{parentName:"tr",align:"left"},"Job ID")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"catalog_name")),(0,i.kt)("td",{parentName:"tr",align:"left"},"Catalog Name")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"db_name")),(0,i.kt)("td",{parentName:"tr",align:"left"},"Database Name")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"tbl_name")),(0,i.kt)("td",{parentName:"tr",align:"left"},"Table Name")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"col_name")),(0,i.kt)("td",{parentName:"tr",align:"left"},"Column Name")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"job_type")),(0,i.kt)("td",{parentName:"tr",align:"left"},"Job Type")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"analysis_type")),(0,i.kt)("td",{parentName:"tr",align:"left"},"Analysis Type")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"message")),(0,i.kt)("td",{parentName:"tr",align:"left"},"Task Message")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"last_exec_time_in_ms")),(0,i.kt)("td",{parentName:"tr",align:"left"},"Last Execution Time")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"state")),(0,i.kt)("td",{parentName:"tr",align:"left"},"Task State")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"schedule_type")),(0,i.kt)("td",{parentName:"tr",align:"left"},"Schedule Type")))),(0,i.kt)("p",null,"You can use ",(0,i.kt)("inlineCode",{parentName:"p"},"SHOW ANALYZE TASK STATUS [job_id]")," to check the completion status of collecting statistics for each column."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"mysql> show analyze task status 20038;\n+---------+----------+---------+----------------------+----------+\n| task_id | col_name | message | last_exec_time_in_ms | state    |\n+---------+----------+---------+----------------------+----------+\n| 20039   | col4     |         | 2023-06-01 17:22:15  | FINISHED |\n| 20040   | col2     |         | 2023-06-01 17:22:15  | FINISHED |\n| 20041   | col3     |         | 2023-06-01 17:22:15  | FINISHED |\n| 20042   | col1     |         | 2023-06-01 17:22:15  | FINISHED |\n+---------+----------+---------+----------------------+----------+\n")),(0,i.kt)("h4",{id:"terminating-analyze-tasks"},"Terminating Analyze Tasks"),(0,i.kt)("p",null,"You can terminate running statistics collection tasks using ",(0,i.kt)("inlineCode",{parentName:"p"},"KILL ANALYZE"),"."),(0,i.kt)("p",null,"Syntax:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-SQL"},"KILL ANALYZE job_id;\n")),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"job_id"),": The job ID of the statistics information task. It is returned when executing ",(0,i.kt)("inlineCode",{parentName:"li"},"ANALYZE"),", or you can obtain it using the ",(0,i.kt)("inlineCode",{parentName:"li"},"SHOW ANALYZE")," statement.")),(0,i.kt)("p",null,"Example:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Terminating statistics collection task with job ID 52357.")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-SQL"},"mysql> KILL ANALYZE 52357;\n")),(0,i.kt)("h4",{id:"viewing-statistics-information"},"Viewing Statistics Information"),(0,i.kt)("h4",{id:"table-statistics-information"},"Table Statistics Information"),(0,i.kt)("p",null,"You can use ",(0,i.kt)("inlineCode",{parentName:"p"},"SHOW TABLE STATS")," to view an overview of statistics collection for a table."),(0,i.kt)("p",null,"Syntax:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-SQL"},"SHOW TABLE STATS table_name;\n")),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"table_name"),": The name of the table for which you want to view statistics collection information. It can be in the form of ",(0,i.kt)("inlineCode",{parentName:"li"},"db_name.table_name"),".")),(0,i.kt)("p",null,"Output:"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:"left"},"Column Name"),(0,i.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"row_count")),(0,i.kt)("td",{parentName:"tr",align:"left"},"Number of rows (may not be the exact count at the time of execution)")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"method")),(0,i.kt)("td",{parentName:"tr",align:"left"},"Collection method (FULL/SAMPLE)")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"type")),(0,i.kt)("td",{parentName:"tr",align:"left"},"Type of statistics data")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"updated_time")),(0,i.kt)("td",{parentName:"tr",align:"left"},"Last update time")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"columns")),(0,i.kt)("td",{parentName:"tr",align:"left"},"Columns for which statistics were collected")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"trigger")),(0,i.kt)("td",{parentName:"tr",align:"left"},"Trigger method for statistics collection (Auto/User)")))),(0,i.kt)("h4",{id:"viewing-column-statistics-information"},"Viewing Column Statistics Information"),(0,i.kt)("p",null,"You can use ",(0,i.kt)("inlineCode",{parentName:"p"},"SHOW COLUMN [cached] STATS")," to view information about the number of distinct values and NULLs in columns."),(0,i.kt)("p",null,"Syntax:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-SQL"},"SHOW COLUMN [cached] STATS table_name [ (column_name [, ...]) ];\n")),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"cached"),": Displays statistics information from the current FE memory cache."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"table_name"),": The name of the table for which you want to view column statistics information. It can be in the form of ",(0,i.kt)("inlineCode",{parentName:"li"},"db_name.table_name"),"."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"column_name"),": The specific column(s) you want to view statistics for. It must be a column that exists in ",(0,i.kt)("inlineCode",{parentName:"li"},"table_name"),", and multiple column names can be separated by commas.")),(0,i.kt)("h4",{id:"modifying-statistics-information"},"Modifying Statistics Information"),(0,i.kt)("p",null,"Users can adjust statistics information using the ",(0,i.kt)("inlineCode",{parentName:"p"},"ALTER")," statement."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-SQL"},"ALTER TABLE table_name MODIFY COLUMN column_name SET STATS ('stat_name' = 'stat_value', ...) [ PARTITION (partition_name) ];\n")),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"table_name"),": The name of the table for which you want to modify statistics information. It can be in the form of ",(0,i.kt)("inlineCode",{parentName:"li"},"db_name.table_name"),"."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"column_name"),": The specific column for which you want to modify statistics information. It must be a column that exists in ",(0,i.kt)("inlineCode",{parentName:"li"},"table_name"),", and you can modify statistics information for one column at a time."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"stat_name")," and ",(0,i.kt)("inlineCode",{parentName:"li"},"stat_value"),": The corresponding statistics information name and its value. Multiple statistics can be modified, separated by commas. You can modify statistics such as ",(0,i.kt)("inlineCode",{parentName:"li"},"row_count"),", ",(0,i.kt)("inlineCode",{parentName:"li"},"ndv"),", ",(0,i.kt)("inlineCode",{parentName:"li"},"num_nulls"),", ",(0,i.kt)("inlineCode",{parentName:"li"},"min_value"),", ",(0,i.kt)("inlineCode",{parentName:"li"},"max_value"),", and ",(0,i.kt)("inlineCode",{parentName:"li"},"data_size"),".")),(0,i.kt)("h4",{id:"delete-statistics"},"Delete Statistics"),(0,i.kt)("p",null,"Users can delete statistics using the ",(0,i.kt)("inlineCode",{parentName:"p"},"DROP")," statement, which allows them to specify the table, partition, or column for which they want to delete statistics based on the provided parameters. When deleted, both column statistics and column histogram information are removed."),(0,i.kt)("p",null,"Syntax:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-SQL"},"DROP [ EXPIRED ] STATS [ table_name [ (column_name [, ...]) ] ];\n")),(0,i.kt)("h4",{id:"delete-analyze-job"},"Delete Analyze Job"),(0,i.kt)("p",null,"Used to delete automatic/periodic Analyze jobs based on the job ID."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-sql"},"DROP ANALYZE JOB [JOB_ID]\n")),(0,i.kt)("h3",{id:"view-automatic-collection-task-execution-status"},"View Automatic Collection Task Execution Status"),(0,i.kt)("p",null,"This command is used to check the completion status of automatic collection tasks after enabling automatic collection functionality."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-sql"},'SHOW AUTO ANALYZE [table_name]\n    [ WHERE [ STATE = [ "PENDING" | "RUNNING" | "FINISHED" | "FAILED" ] ] ];\n')),(0,i.kt)("p",null,"Automatic collection tasks do not support viewing the completion status and failure reasons for each column individually. By default, it only retains the status of the last 20,000 completed automatic collection tasks."),(0,i.kt)("h2",{id:"configuration-options"},"Configuration Options"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},"fe conf option"),(0,i.kt)("th",{parentName:"tr",align:null},"comment"),(0,i.kt)("th",{parentName:"tr",align:null},"default value"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"statistics_sql_parallel_exec_instance_num"),(0,i.kt)("td",{parentName:"tr",align:null},"Controls the number of concurrent instances/pipeline tasks for each statistics collection SQL on the BE side."),(0,i.kt)("td",{parentName:"tr",align:null},"1")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"statistics_sql_mem_limit_in_bytes"),(0,i.kt)("td",{parentName:"tr",align:null},"Controls the amount of BE memory that each statistics collection SQL can use."),(0,i.kt)("td",{parentName:"tr",align:null},"2L ",(0,i.kt)("em",{parentName:"td"}," 1024 ")," 1024 * 1024 (2GiB)")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"statistics_simultaneously_running_task_num"),(0,i.kt)("td",{parentName:"tr",align:null},"After submitting asynchronous jobs using ",(0,i.kt)("inlineCode",{parentName:"td"},"ANALYZE TABLE[DATABASE]"),", this parameter limits the number of columns that can be analyzed simultaneously. All asynchronous tasks are collectively constrained by this parameter."),(0,i.kt)("td",{parentName:"tr",align:null},"5")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"analyze_task_timeout_in_minutes"),(0,i.kt)("td",{parentName:"tr",align:null},"Timeout for AnalyzeTask execution."),(0,i.kt)("td",{parentName:"tr",align:null},"12 hours")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"stats_cache_size"),(0,i.kt)("td",{parentName:"tr",align:null},"The actual memory usage of statistics cache depends heavily on the characteristics of the data because the average size of maximum/minimum values and the number of buckets in histograms can vary greatly in different datasets and scenarios. Additionally, factors like JVM versions can also affect it. Below is the memory size occupied by statistics cache with 100,000 items. The average length of maximum/minimum values per item is 32, the average length of column names is 16, and the statistics cache occupies a total of 61.2777404785MiB of memory. It is strongly discouraged to analyze columns with very large string values as this may lead to FE memory overflow."),(0,i.kt)("td",{parentName:"tr",align:null},"100000")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"enable_auto_sample"),(0,i.kt)("td",{parentName:"tr",align:null},"Enable automatic sampling for large tables. When enabled, statistics will be automatically collected through sampling for tables larger than the ",(0,i.kt)("inlineCode",{parentName:"td"},"huge_table_lower_bound_size_in_bytes")," threshold."),(0,i.kt)("td",{parentName:"tr",align:null},"false")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"auto_analyze_job_record_count"),(0,i.kt)("td",{parentName:"tr",align:null},"Controls the persistence of records for automatically triggered statistics collection jobs."),(0,i.kt)("td",{parentName:"tr",align:null},"20000")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"huge_table_default_sample_rows"),(0,i.kt)("td",{parentName:"tr",align:null},"Defines the number of sample rows for large tables when automatic sampling is enabled."),(0,i.kt)("td",{parentName:"tr",align:null},"4194304")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"huge_table_lower_bound_size_in_bytes"),(0,i.kt)("td",{parentName:"tr",align:null},"Defines the lower size threshold for large tables. When ",(0,i.kt)("inlineCode",{parentName:"td"},"enable_auto_sample")," is enabled, statistics will be automatically collected through sampling for tables larger than this value."),(0,i.kt)("td",{parentName:"tr",align:null},"5368 709120")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"huge_table_auto_analyze_interval_in_millis"),(0,i.kt)("td",{parentName:"tr",align:null},"Controls the minimum time interval for automatic ANALYZE on large tables. Within this interval, tables larger than ",(0,i.kt)("inlineCode",{parentName:"td"},"huge_table_lower_bound_size_in_bytes")," will only be analyzed once."),(0,i.kt)("td",{parentName:"tr",align:null},"43200000")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"table_stats_health_threshold"),(0,i.kt)("td",{parentName:"tr",align:null},"Takes a value between 0-100. When the data update volume reaches (100 - table_stats_health_threshold)% since the last statistics collection operation, the statistics for the table are considered outdated."),(0,i.kt)("td",{parentName:"tr",align:null},"80")))),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},"Session Variable"),(0,i.kt)("th",{parentName:"tr",align:null},"Description"),(0,i.kt)("th",{parentName:"tr",align:null},"Default Value"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"full_auto_analyze_start_time"),(0,i.kt)("td",{parentName:"tr",align:null},"Start time for automatic statistics collection"),(0,i.kt)("td",{parentName:"tr",align:null},"00:00:00")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"full_auto_analyze_end_time"),(0,i.kt)("td",{parentName:"tr",align:null},"End time for automatic statistics collection"),(0,i.kt)("td",{parentName:"tr",align:null},"02:00:00")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"enable_full_auto_analyze"),(0,i.kt)("td",{parentName:"tr",align:null},"Enable automatic collection functionality"),(0,i.kt)("td",{parentName:"tr",align:null},"true")))),(0,i.kt)("p",null,"ATTENTION: The session variables listed above must be set globally using SET GLOBAL."),(0,i.kt)("h2",{id:"usage-recommendations"},"Usage Recommendations"),(0,i.kt)("p",null,"Based on our testing, on tables with data size (i.e., actual storage space) below 128GiB, there is usually no need to modify the default configuration settings unless it is necessary to avoid resource contention during peak business hours by adjusting the execution time of the automatic collection feature."),(0,i.kt)("p",null,"Depending on the cluster configuration, automatic collection tasks typically consume around 20% of CPU resources. Therefore, users should adjust the execution time of the automatic collection feature to avoid resource contention during peak business hours, depending on their specific business needs."),(0,i.kt)("p",null,"Since ANALYZE is a resource-intensive operation, it is best to avoid executing such operations during peak business hours to prevent disruption to the business. Additionally, in cases of high cluster load, ANALYZE operations are more likely to fail. Furthermore, it is advisable to avoid performing full ANALYZE on the entire database or table. Typically, it is sufficient to perform ANALYZE on columns that are frequently used as predicate conditions, in JOIN conditions, as aggregation fields, or as ID fields. If a user's SQL queries involve a large number of such operations and the table has no statistics or very outdated statistics, we recommend:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Performing ANALYZE on the columns involved in complex queries before submitting the complex query, as poorly planned complex queries can consume a significant amount of system resources and may lead to resource exhaustion or timeouts."),(0,i.kt)("li",{parentName:"ul"},"If you have configured periodic data import routines for Doris, it is recommended to execute ANALYZE after the data import is complete to ensure that subsequent query planning can use the most up-to-date statistics. You can automate this setting using Doris's existing job scheduling framework."),(0,i.kt)("li",{parentName:"ul"},"When significant changes occur in the table's data, such as creating a new table and completing data import, it is recommended to run ANALYZE on the corresponding table.")),(0,i.kt)("h2",{id:"common-issues"},"Common Issues"),(0,i.kt)("h3",{id:"analyze-with-sync-execution-failed-failed-to-analyze-following-columns"},"ANALYZE WITH SYNC Execution Failed: Failed to analyze following columns..."),(0,i.kt)("p",null,"The SQL execution time is controlled by the ",(0,i.kt)("inlineCode",{parentName:"p"},"query_timeout")," session variable, which has a default value of 300 seconds. Statements like ",(0,i.kt)("inlineCode",{parentName:"p"},"ANALYZE DATABASE/TABLE")," often take longer, easily exceeding this time limit and being canceled. It is recommended to increase the value of ",(0,i.kt)("inlineCode",{parentName:"p"},"query_timeout")," based on the data volume of the ANALYZE object."),(0,i.kt)("h3",{id:"analyze-submission-error-stats-table-not-available"},"ANALYZE Submission Error: Stats table not available..."),(0,i.kt)("p",null,"When ANALYZE is executed, statistics data is written to the internal table ",(0,i.kt)("inlineCode",{parentName:"p"},"__internal_schema.column_statistics"),". FE checks the tablet status of this table before executing ANALYZE. If there are unavailable tablets, the task is rejected. Please check the BE cluster status if this error occurs."),(0,i.kt)("p",null,"Users can use ",(0,i.kt)("inlineCode",{parentName:"p"},"SHOW BACKENDS\\G")," to verify the BE (Backend) status. If the BE status is normal, you can use the command ",(0,i.kt)("inlineCode",{parentName:"p"},"ADMIN SHOW REPLICA STATUS FROM __internal_schema.[tbl_in_this_db]")," to check the tablet status within this database, ensuring that the tablet status is also normal."),(0,i.kt)("h3",{id:"failure-of-analyze-on-large-tables"},"Failure of ANALYZE on Large Tables"),(0,i.kt)("p",null,"Due to resource limitations, ANALYZE on some large tables may timeout or exceed BE memory limits. In such cases, it is recommended to use ",(0,i.kt)("inlineCode",{parentName:"p"},"ANALYZE ... WITH SAMPLE..."),"."))}d.isMDXComponent=!0}}]);