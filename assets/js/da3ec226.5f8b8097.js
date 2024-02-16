"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([[63801],{15680:(e,t,a)=>{a.d(t,{xA:()=>p,yg:()=>y});var r=a(96540);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},o=Object.keys(e);for(r=0;r<o.length;r++)a=o[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)a=o[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var s=r.createContext({}),m=function(e){var t=r.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},p=function(e){var t=m(e.components);return r.createElement(s.Provider,{value:t},e.children)},d="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var a=e.components,n=e.mdxType,o=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),d=m(a),u=n,y=d["".concat(s,".").concat(u)]||d[u]||c[u]||o;return a?r.createElement(y,i(i({ref:t},p),{},{components:a})):r.createElement(y,i({ref:t},p))}));function y(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=a.length,i=new Array(o);i[0]=u;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[d]="string"==typeof e?e:n,i[1]=l;for(var m=2;m<o;m++)i[m]=a[m];return r.createElement.apply(null,i)}return r.createElement.apply(null,a)}u.displayName="MDXCreateElement"},48827:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>c,frontMatter:()=>o,metadata:()=>l,toc:()=>m});var r=a(58168),n=(a(96540),a(15680));const o={title:"Broker Load",language:"en"},i=void 0,l={unversionedId:"data-operate/import/import-way/broker-load-manual",id:"version-2.0/data-operate/import/import-way/broker-load-manual",title:"Broker Load",description:"\x3c!--",source:"@site/versioned_docs/version-2.0/data-operate/import/import-way/broker-load-manual.md",sourceDirName:"data-operate/import/import-way",slug:"/data-operate/import/import-way/broker-load-manual",permalink:"/docs/data-operate/import/import-way/broker-load-manual",draft:!1,tags:[],version:"2.0",frontMatter:{title:"Broker Load",language:"en"},sidebar:"docs",previous:{title:"Import Strict Mode",permalink:"/docs/data-operate/import/import-scenes/load-strict-mode"},next:{title:"Routine Load",permalink:"/docs/data-operate/import/import-way/routine-load-manual"}},s={},m=[{value:"Applicable scene",id:"applicable-scene",level:2},{value:"Fundamental",id:"fundamental",level:2},{value:"start import",id:"start-import",level:2},{value:"Data import of Hive partition table",id:"data-import-of-hive-partition-table",level:3},{value:"Hive partition table import (ORC format)",id:"hive-partition-table-import-orc-format",level:3},{value:"HDFS file system data import",id:"hdfs-file-system-data-import",level:3},{value:"View import status",id:"view-import-status",level:2},{value:"Cancel import",id:"cancel-import",level:2},{value:"Relevant system configuration",id:"relevant-system-configuration",level:2},{value:"Broker parameters",id:"broker-parameters",level:3},{value:"FE configuration",id:"fe-configuration",level:3},{value:"Best Practices",id:"best-practices",level:2},{value:"Application scenarios",id:"application-scenarios",level:3},{value:"The amount of data",id:"the-amount-of-data",level:3},{value:"Job scheduling",id:"job-scheduling",level:3},{value:"Performance Analysis",id:"performance-analysis",level:3},{value:"common problem",id:"common-problem",level:2},{value:"more help",id:"more-help",level:2}],p={toc:m},d="wrapper";function c(e){let{components:t,...a}=e;return(0,n.yg)(d,(0,r.A)({},p,a,{components:t,mdxType:"MDXLayout"}),(0,n.yg)("h1",{id:"broker-load"},"Broker Load"),(0,n.yg)("p",null,"Broker load is an asynchronous import method, and the supported data sources depend on the data sources supported by the ",(0,n.yg)("a",{parentName:"p",href:"/docs/advanced/broker"},"Broker")," process."),(0,n.yg)("p",null,"Because the data in the Doris table is ordered, Broker load uses the doris cluster resources to sort the data when importing data. Complete massive historical data migration relative to Spark load, the Doris cluster resource usage is relatively large. , this method is used when the user does not have Spark computing resources. If there are Spark computing resources, it is recommended to use ",(0,n.yg)("a",{parentName:"p",href:"/docs/data-operate/import/import-way/spark-load-manual"},"Spark load"),"."),(0,n.yg)("p",null,"Users need to create ",(0,n.yg)("a",{parentName:"p",href:"../../../sql-manual/sql-reference/Data-Manipulation-Statements/Load/BROKER-LOAD"},"Broker load")," import through MySQL protocol and import by viewing command to check the import result."),(0,n.yg)("h2",{id:"applicable-scene"},"Applicable scene"),(0,n.yg)("ul",null,(0,n.yg)("li",{parentName:"ul"},"The source data is in a storage system that the broker can access, such as HDFS."),(0,n.yg)("li",{parentName:"ul"},"The amount of data is at the level of tens to hundreds of GB.")),(0,n.yg)("h2",{id:"fundamental"},"Fundamental"),(0,n.yg)("p",null,"After the user submits the import task, FE will generate the corresponding Plan and distribute the Plan to multiple BEs for execution according to the current number of BEs and file size, and each BE executes a part of the imported data."),(0,n.yg)("p",null,"BE pulls data from the broker during execution, and imports the data into the system after transforming the data. All BEs are imported, and FE ultimately decides whether the import is successful."),(0,n.yg)("pre",null,(0,n.yg)("code",{parentName:"pre"},"                 +\n                 | 1. user create broker load\n                 v\n            +----+----+\n            |         |\n            |   FE    |\n            |         |\n            +----+----+\n                 |\n                 | 2. BE etl and load the data\n    +--------------------------+\n    |            |             |\n+---v---+     +--v----+    +---v---+\n|       |     |       |    |       |\n|  BE   |     |  BE   |    |   BE  |\n|       |     |       |    |       |\n+---+-^-+     +---+-^-+    +--+-^--+\n    | |           | |         | |\n    | |           | |         | | 3. pull data from broker\n+---v-+-+     +---v-+-+    +--v-+--+\n|       |     |       |    |       |\n|Broker |     |Broker |    |Broker |\n|       |     |       |    |       |\n+---+-^-+     +---+-^-+    +---+-^-+\n    | |           | |          | |\n+---v-+-----------v-+----------v-+-+\n|       HDFS/BOS/AFS cluster       |\n|                                  |\n+----------------------------------+\n\n")),(0,n.yg)("h2",{id:"start-import"},"start import"),(0,n.yg)("p",null,"Let's look at ",(0,n.yg)("a",{parentName:"p",href:"../../../sql-manual/sql-reference/Data-Manipulation-Statements/Load/BROKER-LOAD"},"Broker Load")," through several actual scenario examples. use"),(0,n.yg)("h3",{id:"data-import-of-hive-partition-table"},"Data import of Hive partition table"),(0,n.yg)("ol",null,(0,n.yg)("li",{parentName:"ol"},"Create Hive table")),(0,n.yg)("pre",null,(0,n.yg)("code",{parentName:"pre",className:"language-sql"},"##Data format is: default, partition field is: day\nCREATE TABLE `ods_demo_detail`(\n  `id` string,\n  `store_id` string,\n  `company_id` string,\n  `tower_id` string,\n  `commodity_id` string,\n  `commodity_name` string,\n  `commodity_price` double,\n  `member_price` double,\n  `cost_price` double,\n  `unit` string,\n  `quantity` double,\n  `actual_price` double\n)\nPARTITIONED BY (day string)\nrow format delimited fields terminated by ','\nlines terminated by '\\n'\n")),(0,n.yg)("p",null,"Then use Hive's Load command to import your data into the Hive table"),(0,n.yg)("pre",null,(0,n.yg)("code",{parentName:"pre"},"load data local inpath '/opt/custorm' into table ods_demo_detail;\n")),(0,n.yg)("ol",{start:2},(0,n.yg)("li",{parentName:"ol"},"Create a Doris table, refer to the specific table syntax: ",(0,n.yg)("a",{parentName:"li",href:"../../../sql-manual/sql-reference/Data-Definition-Statements/Create/CREATE-TABLE"},"CREATE TABLE"))),(0,n.yg)("pre",null,(0,n.yg)("code",{parentName:"pre"},'CREATE TABLE `doris_ods_test_detail` (\n  `rq` date NULL,\n  `id` varchar(32) NOT NULL,\n  `store_id` varchar(32) NULL,\n  `company_id` varchar(32) NULL,\n  `tower_id` varchar(32) NULL,\n  `commodity_id` varchar(32) NULL,\n  `commodity_name` varchar(500) NULL,\n  `commodity_price` decimal(10, 2) NULL,\n  `member_price` decimal(10, 2) NULL,\n  `cost_price` decimal(10, 2) NULL,\n  `unit` varchar(50) NULL,\n  `quantity` int(11) NULL,\n  `actual_price` decimal(10, 2) NULL\n) ENGINE=OLAP\nUNIQUE KEY(`rq`, `id`, `store_id`)\nPARTITION BY RANGE(`rq`)\n(\nPARTITION P_202204 VALUES [(\'2022-04-01\'), (\'2022-05-01\')))\nDISTRIBUTED BY HASH(`store_id`) BUCKETS 1\nPROPERTIES (\n"replication_allocation" = "tag.location.default: 3",\n"dynamic_partition.enable" = "true",\n"dynamic_partition.time_unit" = "MONTH",\n"dynamic_partition.start" = "-2147483648",\n"dynamic_partition.end" = "2",\n"dynamic_partition.prefix" = "P_",\n"dynamic_partition.buckets" = "1",\n"in_memory" = "false",\n"storage_format" = "V2"\n);\n')),(0,n.yg)("ol",{start:3},(0,n.yg)("li",{parentName:"ol"},(0,n.yg)("p",{parentName:"li"},"Start importing data"),(0,n.yg)("p",{parentName:"li"},"Specific syntax reference: ",(0,n.yg)("a",{parentName:"p",href:"../../../sql-manual/sql-reference/Data-Manipulation-Statements/Load/BROKER-LOAD"},"Broker Load")))),(0,n.yg)("pre",null,(0,n.yg)("code",{parentName:"pre",className:"language-sql"},'LOAD LABEL broker_load_2022_03_23\n(\n    DATA INFILE("hdfs://192.168.20.123:8020/user/hive/warehouse/ods.db/ods_demo_detail/*/*")\n    INTO TABLE doris_ods_test_detail\n    COLUMNS TERMINATED BY ","\n  (id,store_id,company_id,tower_id,commodity_id,commodity_name,commodity_price,member_price,cost_price,unit,quantity,actual_price)\n    COLUMNS FROM PATH AS (`day`)\n   SET\n   (rq = str_to_date(`day`,\'%Y-%m-%d\'),id=id,store_id=store_id,company_id=company_id,tower_id=tower_id,commodity_id=commodity_id,commodity_name=commodity_name,commodity_price=commodity_price,member_price =member_price,cost_price=cost_price,unit=unit,quantity=quantity,actual_price=actual_price)\n)\nWITH BROKER "broker_name_1"\n(\n"username" = "hdfs",\n"password" = ""\n)\nPROPERTIES\n(\n    "timeout"="1200",\n    "max_filter_ratio"="0.1"\n);\n')),(0,n.yg)("h3",{id:"hive-partition-table-import-orc-format"},"Hive partition table import (ORC format)"),(0,n.yg)("ol",null,(0,n.yg)("li",{parentName:"ol"},"Create Hive partition table, ORC format")),(0,n.yg)("pre",null,(0,n.yg)("code",{parentName:"pre",className:"language-sql"},"#Data format: ORC partition: day\nCREATE TABLE `ods_demo_orc_detail`(\n  `id` string,\n  `store_id` string,\n  `company_id` string,\n  `tower_id` string,\n  `commodity_id` string,\n  `commodity_name` string,\n  `commodity_price` double,\n  `member_price` double,\n  `cost_price` double,\n  `unit` string,\n  `quantity` double,\n  `actual_price` double\n)\nPARTITIONED BY (day string)\nrow format delimited fields terminated by ','\nlines terminated by '\\n'\nSTORED AS ORC\n")),(0,n.yg)("ol",{start:2},(0,n.yg)("li",{parentName:"ol"},(0,n.yg)("p",{parentName:"li"},"Create a Doris table. The table creation statement here is the same as the Doris table creation statement above. Please refer to the above .")),(0,n.yg)("li",{parentName:"ol"},(0,n.yg)("p",{parentName:"li"},"Import data using Broker Load"),(0,n.yg)("pre",{parentName:"li"},(0,n.yg)("code",{parentName:"pre",className:"language-sql"},'LOAD LABEL dish_2022_03_23\n(\n    DATA INFILE("hdfs://10.220.147.151:8020/user/hive/warehouse/ods.db/ods_demo_orc_detail/*/*")\n    INTO TABLE doris_ods_test_detail\n    COLUMNS TERMINATED BY ","\n    FORMAT AS "orc"\n(id,store_id,company_id,tower_id,commodity_id,commodity_name,commodity_price,member_price,cost_price,unit,quantity,actual_price)\n    COLUMNS FROM PATH AS (`day`)\n   SET\n   (rq = str_to_date(`day`,\'%Y-%m-%d\'),id=id,store_id=store_id,company_id=company_id,tower_id=tower_id,commodity_id=commodity_id,commodity_name=commodity_name,commodity_price=commodity_price,member_price =member_price,cost_price=cost_price,unit=unit,quantity=quantity,actual_price=actual_price)\n)\nWITH BROKER "broker_name_1"\n(\n"username" = "hdfs",\n"password" = ""\n)\nPROPERTIES\n(\n    "timeout"="1200",\n    "max_filter_ratio"="0.1"\n);\n')),(0,n.yg)("p",{parentName:"li"},(0,n.yg)("strong",{parentName:"p"},"Notice:")),(0,n.yg)("ul",{parentName:"li"},(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("inlineCode",{parentName:"li"},'FORMAT AS "orc"')," : here we specify the data format to import"),(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("inlineCode",{parentName:"li"},"SET")," : Here we define the field mapping relationship between the Hive table and the Doris table and some operations for field conversion")))),(0,n.yg)("h3",{id:"hdfs-file-system-data-import"},"HDFS file system data import"),(0,n.yg)("p",null,"Let's continue to take the Doris table created above as an example to demonstrate importing data from HDFS through Broker Load."),(0,n.yg)("p",null,"The statement to import the job is as follows:"),(0,n.yg)("pre",null,(0,n.yg)("code",{parentName:"pre",className:"language-sql"},'LOAD LABEL demo.label_20220402\n        (\n            DATA INFILE("hdfs://10.220.147.151:8020/tmp/test_hdfs.txt")\n            INTO TABLE `ods_dish_detail_test`\n            COLUMNS TERMINATED BY "\\t" (id,store_id,company_id,tower_id,commodity_id,commodity_name,commodity_price,member_price,cost_price,unit,quantity,actual_price)\n        )\n        with HDFS (\n            "fs.defaultFS"="hdfs://10.220.147.151:8020",\n            "hadoop.username"="root"\n        )\n        PROPERTIES\n        (\n            "timeout"="1200",\n            "max_filter_ratio"="0.1"\n        );\n')),(0,n.yg)("p",null,"The specific parameters here can refer to: ",(0,n.yg)("a",{parentName:"p",href:"../../../advanced/broker"},"Broker")," and ","[Broker Load]","(../../../sql-manual/sql-reference-v2 /Data-Manipulation-Statements/Load/BROKER-LOAD) documentation"),(0,n.yg)("h2",{id:"view-import-status"},"View import status"),(0,n.yg)("p",null,"We can view the status information of the above import task through the following command,"),(0,n.yg)("p",null,"The specific syntax reference for viewing the import status ",(0,n.yg)("a",{parentName:"p",href:"../../../sql-manual/sql-reference/Show-Statements/SHOW-LOAD"},"SHOW LOAD")),(0,n.yg)("pre",null,(0,n.yg)("code",{parentName:"pre",className:"language-sql"},'mysql> show load order by createtime desc limit 1\\G;\n**************************** 1. row ******************** ******\n         JobId: 41326624\n         Label: broker_load_2022_03_23\n         State: FINISHED\n      Progress: ETL: 100%; LOAD: 100%\n          Type: BROKER\n       EtlInfo: unselected.rows=0; dpp.abnorm.ALL=0; dpp.norm.ALL=27\n      TaskInfo: cluster:N/A; timeout(s):1200; max_filter_ratio:0.1\n      ErrorMsg: NULL\n    CreateTime: 2022-04-01 18:59:06\n  EtlStartTime: 2022-04-01 18:59:11\n EtlFinishTime: 2022-04-01 18:59:11\n LoadStartTime: 2022-04-01 18:59:11\nLoadFinishTime: 2022-04-01 18:59:11\n           URL: NULL\n    JobDetails: {"Unfinished backends":{"5072bde59b74b65-8d2c0ee5b029adc0":[]},"ScannedRows":27,"TaskNumber":1,"All backends":{"5072bde59b74b65-8d2c0ee5b029adc0":[36728051]},"FileNumber ":1,"FileSize":5540}\n1 row in set (0.01 sec)\n')),(0,n.yg)("h2",{id:"cancel-import"},"Cancel import"),(0,n.yg)("p",null,"When the broker load job status is not CANCELLED or FINISHED, it can be manually canceled by the user. When canceling, you need to specify the Label of the import task to be canceled. Cancel the import command syntax to execute ",(0,n.yg)("a",{parentName:"p",href:"../../../sql-manual/sql-reference/Data-Manipulation-Statements/Load/CANCEL-LOAD"},"CANCEL LOAD")," view."),(0,n.yg)("p",null,"For example: cancel the import job with the label broker_load_2022_03_23 on the database demo"),(0,n.yg)("pre",null,(0,n.yg)("code",{parentName:"pre",className:"language-sql"},'CANCEL LOAD FROM demo WHERE LABEL = "broker_load_2022_03_23";\n')),(0,n.yg)("h2",{id:"relevant-system-configuration"},"Relevant system configuration"),(0,n.yg)("h3",{id:"broker-parameters"},"Broker parameters"),(0,n.yg)("p",null,"Broker Load needs to use the Broker process to access remote storage. Different brokers need to provide different parameters. For details, please refer to ",(0,n.yg)("a",{parentName:"p",href:"../../../advanced/broker"},"Broker documentation"),"."),(0,n.yg)("h3",{id:"fe-configuration"},"FE configuration"),(0,n.yg)("p",null,"The following configurations belong to the system-level configuration of Broker load, that is, the configurations that apply to all Broker load import tasks. The configuration values are adjusted mainly by modifying ",(0,n.yg)("inlineCode",{parentName:"p"},"fe.conf"),"."),(0,n.yg)("ul",null,(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("p",{parentName:"li"},"min_bytes_per_broker_scanner/max_bytes_per_broker_scanner/max_broker_concurrency"),(0,n.yg)("p",{parentName:"li"},"The first two configurations limit the minimum and maximum amount of data processed by a single BE. The third configuration limits the maximum number of concurrent imports for a job. The minimum amount of data processed, the maximum number of concurrency, the size of the source file and the number of BEs in the current cluster ",(0,n.yg)("strong",{parentName:"p"}," together determine the number of concurrent imports"),"."),(0,n.yg)("pre",{parentName:"li"},(0,n.yg)("code",{parentName:"pre",className:"language-text"},"The number of concurrent imports this time = Math.min (source file size/minimum processing capacity, maximum concurrent number, current number of BE nodes)\nThe processing volume of a single BE imported this time = the size of the source file / the number of concurrent imports this time\n")),(0,n.yg)("p",{parentName:"li"},"Usually the maximum amount of data supported by an import job is ",(0,n.yg)("inlineCode",{parentName:"p"},"max_bytes_per_broker_scanner * number of BE nodes"),". If you need to import a larger amount of data, you need to adjust the size of the ",(0,n.yg)("inlineCode",{parentName:"p"},"max_bytes_per_broker_scanner")," parameter appropriately."),(0,n.yg)("p",{parentName:"li"},"default allocation:"),(0,n.yg)("pre",{parentName:"li"},(0,n.yg)("code",{parentName:"pre",className:"language-text"},"Parameter name: min_bytes_per_broker_scanner, the default is 64MB, the unit is bytes.\nParameter name: max_broker_concurrency, default 10.\nParameter name: max_bytes_per_broker_scanner, the default is 500G, the unit is bytes.\n")))),(0,n.yg)("h2",{id:"best-practices"},"Best Practices"),(0,n.yg)("h3",{id:"application-scenarios"},"Application scenarios"),(0,n.yg)("p",null,"The most suitable scenario for using Broker load is the scenario where the original data is in the file system (HDFS, BOS, AFS). Secondly, since Broker load is the only way of asynchronous import in a single import, if users need to use asynchronous access when importing large files, they can also consider using Broker load."),(0,n.yg)("h3",{id:"the-amount-of-data"},"The amount of data"),(0,n.yg)("p",null,"Only the case of a single BE is discussed here. If the user cluster has multiple BEs, the amount of data in the title below should be multiplied by the number of BEs. For example: if the user has 3 BEs, the value below 3G (inclusive) should be multiplied by 3, that is, below 9G (inclusive)."),(0,n.yg)("ul",null,(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("p",{parentName:"li"},"Below 3G (included)"),(0,n.yg)("p",{parentName:"li"},"Users can directly submit Broker load to create import requests.")),(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("p",{parentName:"li"},"Above 3G"),(0,n.yg)("p",{parentName:"li"},"Since the maximum processing capacity of a single import BE is 3G, the import of files exceeding 3G needs to be adjusted by adjusting the import parameters of Broker load to realize the import of large files."),(0,n.yg)("ol",{parentName:"li"},(0,n.yg)("li",{parentName:"ol"},(0,n.yg)("p",{parentName:"li"},"Modify the maximum scan amount and maximum concurrent number of a single BE according to the current number of BEs and the size of the original file."),(0,n.yg)("pre",{parentName:"li"},(0,n.yg)("code",{parentName:"pre",className:"language-text"},"Modify the configuration in fe.conf\nmax_broker_concurrency = number of BEs\nThe amount of data processed by a single BE of the current import task = original file size / max_broker_concurrency\nmax_bytes_per_broker_scanner >= the amount of data processed by a single BE of the current import task\n\nFor example, for a 100G file, the number of BEs in the cluster is 10\nmax_broker_concurrency = 10\n# >= 10G = 100G / 10\nmax_bytes_per_broker_scanner = 1069547520\n")),(0,n.yg)("p",{parentName:"li"},"After modification, all BEs will process the import task concurrently, each BE processing part of the original file."),(0,n.yg)("p",{parentName:"li"},(0,n.yg)("em",{parentName:"p"},"Note: The configurations in the above two FEs are all system configurations, that is to say, their modifications are applied to all Broker load tasks. "))),(0,n.yg)("li",{parentName:"ol"},(0,n.yg)("p",{parentName:"li"},"Customize the timeout time of the current import task when creating an import"),(0,n.yg)("pre",{parentName:"li"},(0,n.yg)("code",{parentName:"pre",className:"language-text"},"The amount of data processed by a single BE of the current import task / the slowest import speed of the user Doris cluster (MB/s) >= the timeout time of the current import task >= the amount of data processed by a single BE of the current import task / 10M/s\n\nFor example, for a 100G file, the number of BEs in the cluster is 10\n# >= 1000s = 10G / 10M/s\ntimeout = 1000\n"))),(0,n.yg)("li",{parentName:"ol"},(0,n.yg)("p",{parentName:"li"},"When the user finds that the timeout time calculated in the second step exceeds the default import timeout time of 4 hours"),(0,n.yg)("p",{parentName:"li"},"At this time, it is not recommended for users to directly increase the maximum import timeout to solve the problem. If the single import time exceeds the default import maximum timeout time of 4 hours, it is best to divide the files to be imported and import them in multiple times to solve the problem. The main reason is: if a single import exceeds 4 hours, the time cost of retrying after the import fails is very high."),(0,n.yg)("p",{parentName:"li"},"The expected maximum import file data volume of the Doris cluster can be calculated by the following formula:"),(0,n.yg)("pre",{parentName:"li"},(0,n.yg)("code",{parentName:"pre",className:"language-text"},"Expected maximum import file data volume = 14400s * 10M/s * number of BEs\nFor example: the number of BEs in the cluster is 10\nExpected maximum import file data volume = 14400s * 10M/s * 10 = 1440000M \u2248 1440G\n\nNote: The average user's environment may not reach the speed of 10M/s, so it is recommended that files over 500G be divided and imported.\n")))))),(0,n.yg)("h3",{id:"job-scheduling"},"Job scheduling"),(0,n.yg)("p",null,"The system limits the number of running Broker Load jobs in a cluster to prevent too many Load jobs from running at the same time."),(0,n.yg)("p",null,"First, the configuration parameter of FE: ",(0,n.yg)("inlineCode",{parentName:"p"},"desired_max_waiting_jobs")," will limit the number of Broker Load jobs that have not started or are running (job status is PENDING or LOADING) in a cluster. Default is 100. If this threshold is exceeded, newly submitted jobs will be rejected outright."),(0,n.yg)("p",null,"A Broker Load job is divided into pending task and loading task phases. Among them, the pending task is responsible for obtaining the information of the imported file, and the loading task will be sent to the BE to execute the specific import task."),(0,n.yg)("p",null,"The FE configuration parameter ",(0,n.yg)("inlineCode",{parentName:"p"},"async_pending_load_task_pool_size")," is used to limit the number of pending tasks running at the same time. It is also equivalent to controlling the number of import tasks that are actually running. This parameter defaults to 10. That is to say, assuming that the user submits 100 Load jobs, at the same time only 10 jobs will enter the LOADING state and start execution, while other jobs are in the PENDING waiting state."),(0,n.yg)("p",null,"The configuration parameter ",(0,n.yg)("inlineCode",{parentName:"p"},"async_loading_load_task_pool_size")," of FE is used to limit the number of tasks of loading tasks running at the same time. A Broker Load job will have one pending task and multiple loading tasks (equal to the number of DATA INFILE clauses in the LOAD statement). So ",(0,n.yg)("inlineCode",{parentName:"p"},"async_loading_load_task_pool_size")," should be greater than or equal to ",(0,n.yg)("inlineCode",{parentName:"p"},"async_pending_load_task_pool_size"),"."),(0,n.yg)("h3",{id:"performance-analysis"},"Performance Analysis"),(0,n.yg)("p",null,"Session variables can be enabled by executing ",(0,n.yg)("inlineCode",{parentName:"p"},"set enable_profile=true")," before submitting the LOAD job. Then submit the import job. After the import job is completed, you can view the profile of the import job in the ",(0,n.yg)("inlineCode",{parentName:"p"},"Queris")," tab of the FE web page."),(0,n.yg)("p",null,"You can check the ",(0,n.yg)("a",{parentName:"p",href:"../../../sql-manual/sql-reference/Show-Statements/SHOW-LOAD-PROFILE"},"SHOW LOAD PROFILE")," help document for more usage help information."),(0,n.yg)("p",null,"This Profile can help analyze the running status of import jobs."),(0,n.yg)("p",null,"Currently the Profile can only be viewed after the job has been successfully executed"),(0,n.yg)("h2",{id:"common-problem"},"common problem"),(0,n.yg)("ul",null,(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("p",{parentName:"li"},"Import error: ",(0,n.yg)("inlineCode",{parentName:"p"},"Scan bytes per broker scanner exceed limit:xxx")),(0,n.yg)("p",{parentName:"li"},"Please refer to the Best Practices section in the document to modify the FE configuration items ",(0,n.yg)("inlineCode",{parentName:"p"},"max_bytes_per_broker_scanner")," and ",(0,n.yg)("inlineCode",{parentName:"p"},"max_broker_concurrency"))),(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("p",{parentName:"li"},"Import error: ",(0,n.yg)("inlineCode",{parentName:"p"},"failed to send batch")," or ",(0,n.yg)("inlineCode",{parentName:"p"},"TabletWriter add batch with unknown id")),(0,n.yg)("p",{parentName:"li"},"Modify ",(0,n.yg)("inlineCode",{parentName:"p"},"query_timeout")," and ",(0,n.yg)("inlineCode",{parentName:"p"},"streaming_load_rpc_max_alive_time_sec")," appropriately."),(0,n.yg)("p",{parentName:"li"},"streaming_load_rpc_max_alive_time_sec:"),(0,n.yg)("p",{parentName:"li"},"During the import process, Doris will open a Writer for each Tablet to receive data and write. This parameter specifies the Writer's wait timeout. If the Writer does not receive any data within this time, the Writer will be automatically destroyed. When the system processing speed is slow, the Writer may not receive the next batch of data for a long time, resulting in an import error: ",(0,n.yg)("inlineCode",{parentName:"p"},"TabletWriter add batch with unknown id"),". At this time, this configuration can be appropriately increased. Default is 600 seconds")),(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("p",{parentName:"li"},"Import error: ",(0,n.yg)("inlineCode",{parentName:"p"},"LOAD_RUN_FAIL; msg:Invalid Column Name:xxx")),(0,n.yg)("p",{parentName:"li"},"If it is data in PARQUET or ORC format, the column name of the file header needs to be consistent with the column name in the doris table, such as:"),(0,n.yg)("pre",{parentName:"li"},(0,n.yg)("code",{parentName:"pre",className:"language-text"},"(tmp_c1,tmp_c2)\nSET\n(\n    id=tmp_c2,\n    name=tmp_c1\n)\n")),(0,n.yg)("p",{parentName:"li"},"Represents getting the column with (tmp_c1, tmp_c2) as the column name in parquet or orc, which is mapped to the (id, name) column in the doris table. If set is not set, the column in column is used as the map."),(0,n.yg)("p",{parentName:"li"},"Note: If you use the orc file directly generated by some hive versions, the header in the orc file is not hive meta data, but (_col0, _col1, _col2, ...), which may cause Invalid Column Name error, then you need to use set to map")),(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("p",{parentName:"li"},"Import error: ",(0,n.yg)("inlineCode",{parentName:"p"},"Failed to get S3 FileSystem for bucket is null/empty")),(0,n.yg)("ol",{parentName:"li"},(0,n.yg)("li",{parentName:"ol"},"The bucket is incorrect or does not exist."),(0,n.yg)("li",{parentName:"ol"},"The bucket format is not supported. When creating a bucket name with ",(0,n.yg)("inlineCode",{parentName:"li"},"_")," on GCS, like ",(0,n.yg)("inlineCode",{parentName:"li"},"s3://gs_bucket/load_tbl"),", the S3 Client will report an error. It is recommended not to use ",(0,n.yg)("inlineCode",{parentName:"li"},"_")," on GCS.")))),(0,n.yg)("h2",{id:"more-help"},"more help"),(0,n.yg)("p",null,"For more detailed syntax and best practices used by Broker Load, see ",(0,n.yg)("a",{parentName:"p",href:"../../../sql-manual/sql-reference/Data-Manipulation-Statements/Load/BROKER-LOAD"},"Broker Load")," command manual, you can also enter ",(0,n.yg)("inlineCode",{parentName:"p"},"HELP BROKER LOAD")," in the MySql client command line for more help information."))}c.isMDXComponent=!0}}]);