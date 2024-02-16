"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([[64014],{15680:(e,t,a)=>{a.d(t,{xA:()=>u,yg:()=>c});var n=a(96540);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var s=n.createContext({}),d=function(e){var t=n.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},u=function(e){var t=d(e.components);return n.createElement(s.Provider,{value:t},e.children)},p="mdxType",g={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,o=e.originalType,s=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),p=d(a),m=r,c=p["".concat(s,".").concat(m)]||p[m]||g[m]||o;return a?n.createElement(c,i(i({ref:t},u),{},{components:a})):n.createElement(c,i({ref:t},u))}));function c(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=a.length,i=new Array(o);i[0]=m;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[p]="string"==typeof e?e:r,i[1]=l;for(var d=2;d<o;d++)i[d]=a[d];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}m.displayName="MDXCreateElement"},60037:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>g,frontMatter:()=>o,metadata:()=>l,toc:()=>d});var n=a(58168),r=(a(96540),a(15680));const o={title:"Partial Update",language:"en"},i=void 0,l={unversionedId:"data-operate/update-delete/partial-update",id:"version-2.0/data-operate/update-delete/partial-update",title:"Partial Update",description:"\x3c!--",source:"@site/versioned_docs/version-2.0/data-operate/update-delete/partial-update.md",sourceDirName:"data-operate/update-delete",slug:"/data-operate/update-delete/partial-update",permalink:"/docs/data-operate/update-delete/partial-update",draft:!1,tags:[],version:"2.0",frontMatter:{title:"Partial Update",language:"en"},sidebar:"docs",previous:{title:"Update",permalink:"/docs/data-operate/update-delete/update"},next:{title:"Delete",permalink:"/docs/data-operate/update-delete/delete-manual"}},s={},d=[{value:"Overview",id:"overview",level:2},{value:"Unique Key Model",id:"unique-key-model",level:3},{value:"Aggregate Key Model",id:"aggregate-key-model",level:3},{value:"Applicable scenarios",id:"applicable-scenarios",level:2},{value:"Fundamentals",id:"fundamentals",level:2},{value:"Unique Key Model",id:"unique-key-model-1",level:3},{value:"Aggregate Key Model",id:"aggregate-key-model-1",level:3},{value:"Concurrent Writes and Data Visibility",id:"concurrent-writes-and-data-visibility",level:2},{value:"Performance",id:"performance",level:2},{value:"Unique Key Merge-on-Write Implementation",id:"unique-key-merge-on-write-implementation",level:3},{value:"Aggregate Key Model",id:"aggregate-key-model-2",level:3},{value:"Usage Instructions and Examples",id:"usage-instructions-and-examples",level:2},{value:"Unique Key Model",id:"unique-key-model-2",level:3},{value:"Table Creation",id:"table-creation",level:4},{value:"StreamLoad/BrokerLoad/RoutineLoad",id:"streamloadbrokerloadroutineload",level:4},{value:"Flink Connector",id:"flink-connector",level:3},{value:"INSERT INTO",id:"insert-into",level:4},{value:"Example",id:"example",level:4},{value:"Aggregate Key Model",id:"aggregate-key-model-3",level:3},{value:"Table Creation",id:"table-creation-1",level:4},{value:"Write Data",id:"write-data",level:4},{value:"Example",id:"example-1",level:4},{value:"Usage Limitations",id:"usage-limitations",level:2},{value:"Unique Key Merge-on-Write Implementation",id:"unique-key-merge-on-write-implementation-1",level:3},{value:"Aggregate Key Model",id:"aggregate-key-model-4",level:3}],u={toc:d},p="wrapper";function g(e){let{components:t,...a}=e;return(0,r.yg)(p,(0,n.A)({},u,a,{components:t,mdxType:"MDXLayout"}),(0,r.yg)("h1",{id:"partial-update"},"Partial Update"),(0,r.yg)("h2",{id:"overview"},"Overview"),(0,r.yg)("p",null,"To perform partial column updates on your table, Doris provides two models: the Unique Key model and the Aggregate Key model."),(0,r.yg)("h3",{id:"unique-key-model"},"Unique Key Model"),(0,r.yg)("p",null,"Doris's Unique Key Model provides default whole-row Upsert  semantics. Before version 2.0, if users wanted to update certain columns of some rows, they could only use the ",(0,r.yg)("inlineCode",{parentName:"p"},"UPDATE")," command. However, due to the granularity of locks in read-write transactions, the ",(0,r.yg)("inlineCode",{parentName:"p"},"UPDATE")," command is not suitable for high-frequency data write scenarios. Therefore, in version 2.0, we introduced support for partial column updates in the Unique Key model."),(0,r.yg)("blockquote",null,(0,r.yg)("p",{parentName:"blockquote"},"Note:"),(0,r.yg)("ol",{parentName:"blockquote"},(0,r.yg)("li",{parentName:"ol"},"Partial update are only supported in the Unique Key Merge-on-Write implementation in version 2.0.0."),(0,r.yg)("li",{parentName:"ol"},"Version 2.0.2 introduces support for performing partial column updates using ",(0,r.yg)("inlineCode",{parentName:"li"},"INSERT INTO"),"."),(0,r.yg)("li",{parentName:"ol"},'Version 2.1.0 will offer more flexible column updates, as described in the "Usage Limitations" section below.'))),(0,r.yg)("h3",{id:"aggregate-key-model"},"Aggregate Key Model"),(0,r.yg)("p",null,"Aggregate Key tables are primarily used in pre-aggregation scenarios rather than data update scenarios. However, column updates can also be achieved by setting the aggregation function to ",(0,r.yg)("inlineCode",{parentName:"p"},"REPLACE_IF_NOT_NULL"),"."),(0,r.yg)("h2",{id:"applicable-scenarios"},"Applicable scenarios"),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},"Real-time dynamic column updates. Where certain field values in the table need to be updated in real-time at high frequencies. For example, in a user label table generated by T+1, some fields containing information about the latest user behaviors need to be updated in real-time for real-time analysis and decision-making in advertising/recommendation systems."),(0,r.yg)("li",{parentName:"ul"},"Combining multiple source tables into one large wide table."),(0,r.yg)("li",{parentName:"ul"},"Data correction.")),(0,r.yg)("h2",{id:"fundamentals"},"Fundamentals"),(0,r.yg)("p",null,"For more information about the principles of the Unique Key model and Aggregate Key model, please refer to the ",(0,r.yg)("a",{parentName:"p",href:"/docs/data-table/data-model"},"Data Model")," introduction."),(0,r.yg)("h3",{id:"unique-key-model-1"},"Unique Key Model"),(0,r.yg)("p",null,(0,r.yg)("strong",{parentName:"p"},"The Unique Key model currently supports column updates only in the Merge-on-Write implementation.")),(0,r.yg)("p",null,"Users write data for certain columns into Doris's Memtable through the regular load methods. At this point, the Memtable does not contain complete rows of data. When flushing the Memtable, Doris searches for historical data, fills in the entire row, then writes it to the data file, and marks the data rows with the same key in the historical data file as deleted."),(0,r.yg)("p",null,"In the case of concurrent loads, Doris uses the MVCC mechanism to ensure data correctness. If two batches of loaded data update different columns with the same key, the load task with the higher system version will recomplete the data rows with the same key written by the lower version load task after the lower version load task succeeds."),(0,r.yg)("h3",{id:"aggregate-key-model-1"},"Aggregate Key Model"),(0,r.yg)("p",null,"You can achieve partial column updates by setting the aggregation function to ",(0,r.yg)("inlineCode",{parentName:"p"},"REPLACE_IF_NOT_NULL"),". For detailed usage examples, please refer to the following section."),(0,r.yg)("h2",{id:"concurrent-writes-and-data-visibility"},"Concurrent Writes and Data Visibility"),(0,r.yg)("p",null,"Partial column updates support high-frequency concurrent writes, and once the write is successful, the data becomes visible. The system automatically ensures the correctness of concurrent writes through the MVCC mechanism."),(0,r.yg)("h2",{id:"performance"},"Performance"),(0,r.yg)("p",null,"Usage Recommendations:"),(0,r.yg)("ol",null,(0,r.yg)("li",{parentName:"ol"},"For users with high write performance requirements and low query performance requirements, it is recommended to use the Aggregate Key Model."),(0,r.yg)("li",{parentName:"ol"},"For users with high query performance requirements and lower write performance requirements (e.g., data writes and updates are mainly completed during off-peak hours in the early morning), or for users with low write frequency, it is recommended to use the Unique Key Merge-on-Write implementation.")),(0,r.yg)("h3",{id:"unique-key-merge-on-write-implementation"},"Unique Key Merge-on-Write Implementation"),(0,r.yg)("p",null,"Since the Merge-on-Write implementation requires filling in entire rows of data during data writes to ensure optimal query performance, performing partial column updates using the Merge-on-Write implementation may lead to noticeable load performance degradation."),(0,r.yg)("p",null,"Write Performance Optimization Recommendations:"),(0,r.yg)("ol",null,(0,r.yg)("li",{parentName:"ol"},"Use SSDs equipped with NVMe or high-speed SSD cloud disks. Because reading historical data in large quantities occurs when filling in row data, might results in higher read IOPS and read throughput."),(0,r.yg)("li",{parentName:"ol"},"Enabling row storage can significantly reduce the IOPS generated when filling in row data, leading to a noticeable improvement in load performance. Users can enable row storage when creating tables using the following property:")),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre"},'"store_row_column" = "true"\n')),(0,r.yg)("h3",{id:"aggregate-key-model-2"},"Aggregate Key Model"),(0,r.yg)("p",null,"The Aggregate Key model does not perform any additional processing during the write process, so its write performance is not affected and is the same as regular data ingestion. However, there is a significant cost associated with aggregation during query execution, with typical aggregation query performance being 5-10 times lower compared to the Merge-on-Write implementation of the Unique Key model."),(0,r.yg)("h2",{id:"usage-instructions-and-examples"},"Usage Instructions and Examples"),(0,r.yg)("h3",{id:"unique-key-model-2"},"Unique Key Model"),(0,r.yg)("h4",{id:"table-creation"},"Table Creation"),(0,r.yg)("p",null,"When creating a table, you need to specify the following property to enable the Merge-on-Write implementation:"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre"},"enable_unique_key_merge_on_write = true\n")),(0,r.yg)("h4",{id:"streamloadbrokerloadroutineload"},"StreamLoad/BrokerLoad/RoutineLoad"),(0,r.yg)("p",null,"If you are using StreamLoad/BrokerLoad/RoutineLoad, add the following header when loading:"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre"},"partial_columns:true\n")),(0,r.yg)("p",null,"Also, specify the columns to be loaded in the ",(0,r.yg)("inlineCode",{parentName:"p"},"columns")," header (it must include all key columns, or else updates cannot be performed)."),(0,r.yg)("h3",{id:"flink-connector"},"Flink Connector"),(0,r.yg)("p",null,"If you are using the Flink Connector, you need to add the following configuration:"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre"},"'sink.properties.partial_columns' = 'true',\n")),(0,r.yg)("p",null,"Also, specify the columns to be loaded in ",(0,r.yg)("inlineCode",{parentName:"p"},"sink.properties.column")," (it must include all key columns, or else updates cannot be performed)."),(0,r.yg)("h4",{id:"insert-into"},"INSERT INTO"),(0,r.yg)("p",null,"In all data models, by default, when you use ",(0,r.yg)("inlineCode",{parentName:"p"},"INSERT INTO")," with a given set of columns, the default behavior is to insert the entire row. To enable partial column updates in the Merge-on-Write implementation, you need to set the following session variable:"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre"},"set enable_unique_key_partial_update=true\n")),(0,r.yg)("p",null,"Please note that the default value of the session variable ",(0,r.yg)("inlineCode",{parentName:"p"},"enable_insert_strict"),", which controls whether the insert statement operates in strict mode, is true. In other words, the insert statement is in strict mode by default, and in this mode, updating non-existing keys in partial column updates is not allowed. Therefore, when using the insert statement for partial columns update and wishing to insert non-existing keys, you need to set ",(0,r.yg)("inlineCode",{parentName:"p"},"enable_unique_key_partial_update")," to true and simultaneously set ",(0,r.yg)("inlineCode",{parentName:"p"},"enable_insert_strict")," to false."),(0,r.yg)("h4",{id:"example"},"Example"),(0,r.yg)("p",null,"Suppose there is an order table ",(0,r.yg)("inlineCode",{parentName:"p"},"order_tbl")," in Doris, where the order ID is the Key column, and the order status and order amount are Value columns. The data status is as follows:"),(0,r.yg)("table",null,(0,r.yg)("thead",{parentName:"table"},(0,r.yg)("tr",{parentName:"thead"},(0,r.yg)("th",{parentName:"tr",align:null},"Order ID"),(0,r.yg)("th",{parentName:"tr",align:null},"Order Amount"),(0,r.yg)("th",{parentName:"tr",align:null},"Order Status"))),(0,r.yg)("tbody",{parentName:"table"},(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"1"),(0,r.yg)("td",{parentName:"tr",align:null},"100"),(0,r.yg)("td",{parentName:"tr",align:null},"Pending Payment")))),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-sql"},"+----------+--------------+-----------------+\n| order_id | order_amount | order_status    |\n+----------+--------------+-----------------+\n| 1        | 100          | Pending Payment |\n+----------+--------------+-----------------+\n1 row in set (0.01 sec)\n")),(0,r.yg)("p",null,"Now, when a user clicks to make a payment, he needs to change the order status of the order with Order ID '1' to 'Pending Delivery'."),(0,r.yg)("p",null,"If you are using StreamLoad, you can perform the update as follows:"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-sql"},'$ cat update.csv\n1,Pending Delivery\n\n$ curl  --location-trusted -u root: -H "partial_columns:true" -H "column_separator:," -H "columns:order_id,order_status" -T /tmp/update.csv http://127.0.0.1:48037/api/db1/order_tbl/_stream_load\n')),(0,r.yg)("p",null,"If you are using ",(0,r.yg)("inlineCode",{parentName:"p"},"INSERT INTO"),", you can perform the update as follows:"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-sql"},"set enable_unique_key_partial_update=true;\nINSERT INTO order_tbl (order_id, order_status) values (1,'Pending Delivery');\n")),(0,r.yg)("p",null,"The updated result is as follows:"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-sql"},"+----------+--------------+------------------+\n| order_id | order_amount | order_status     |\n+----------+--------------+------------------+\n| 1        | 100          | Pending Delivery |\n+----------+--------------+------------------+\n1 row in set (0.01 sec)\n")),(0,r.yg)("h3",{id:"aggregate-key-model-3"},"Aggregate Key Model"),(0,r.yg)("h4",{id:"table-creation-1"},"Table Creation"),(0,r.yg)("p",null,"Set the aggregation function for the columns that need column updates to ",(0,r.yg)("inlineCode",{parentName:"p"},"REPLACE_IF_NOT_NULL")," as follows:"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-sql"},'CREATE TABLE `order_tbl` (\n  `order_id` int(11) NULL,\n  `order_amount` int(11) REPLACE_IF_NOT_NULL NULL,\n  `order_status` varchar(100) REPLACE_IF_NOT_NULL NULL\n) ENGINE=OLAP\nAGGREGATE KEY(`order_id`)\nCOMMENT \'OLAP\'\nDISTRIBUTED BY HASH(`order_id`) BUCKETS 1\nPROPERTIES (\n"replication_allocation" = "tag.location.default: 1"\n);\n')),(0,r.yg)("h4",{id:"write-data"},"Write Data"),(0,r.yg)("p",null,"Whether through load tasks or using ",(0,r.yg)("inlineCode",{parentName:"p"},"INSERT INTO"),", you can directly write the data for the columns you want to update."),(0,r.yg)("h4",{id:"example-1"},"Example"),(0,r.yg)("p",null,"Similar to the previous example, the corresponding Stream Load command (no additional header required) is:"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-shell"},'curl  --location-trusted -u root: -H "column_separator:," -H "columns:order_id,order_status" -T /tmp/update.csv http://127.0.0.1:48037/api/db1/order_tbl/_stream_load\n')),(0,r.yg)("p",null,"The corresponding ",(0,r.yg)("inlineCode",{parentName:"p"},"INSERT INTO")," statement (no need to set additional session variables) is:"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-sql"},"INSERT INTO order_tbl (order_id, order_status) values (1,'Pending Delivery');\n")),(0,r.yg)("h2",{id:"usage-limitations"},"Usage Limitations"),(0,r.yg)("h3",{id:"unique-key-merge-on-write-implementation-1"},"Unique Key Merge-on-Write Implementation"),(0,r.yg)("p",null,"In version 2.0, all rows in the same batch of data write tasks (whether load tasks or ",(0,r.yg)("inlineCode",{parentName:"p"},"INSERT INTO"),") can only update the same columns. If you need to update different columns of data, you will need to write them in separate batches."),(0,r.yg)("p",null,"In version 2.1, we will support more flexible column updates, allowing users to update different columns for each row within the same batch load."),(0,r.yg)("h3",{id:"aggregate-key-model-4"},"Aggregate Key Model"),(0,r.yg)("p",null,"Users cannot change a field from non-NULL to NULL; any NULL values written with the ",(0,r.yg)("inlineCode",{parentName:"p"},"REPLACE_IF_NOT_NULL")," aggregation function will be automatically ignored during processing."))}g.isMDXComponent=!0}}]);