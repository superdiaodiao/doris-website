"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([[89448],{15680:(e,t,n)=>{n.d(t,{xA:()=>c,yg:()=>m});var a=n(96540);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var s=a.createContext({}),p=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},c=function(e){var t=p(e.components);return a.createElement(s.Provider,{value:t},e.children)},T="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,i=e.mdxType,r=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),T=p(n),d=i,m=T["".concat(s,".").concat(d)]||T[d]||u[d]||r;return n?a.createElement(m,o(o({ref:t},c),{},{components:n})):a.createElement(m,o({ref:t},c))}));function m(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var r=n.length,o=new Array(r);o[0]=d;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[T]="string"==typeof e?e:i,o[1]=l;for(var p=2;p<r;p++)o[p]=n[p];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},1870:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>o,default:()=>u,frontMatter:()=>r,metadata:()=>l,toc:()=>p});var a=n(58168),i=(n(96540),n(15680));const r={title:"Auto Partition",language:"en"},o=void 0,l={unversionedId:"advanced/partition/auto-partition",id:"advanced/partition/auto-partition",title:"Auto Partition",description:"\x3c!--",source:"@site/docs/advanced/partition/auto-partition.md",sourceDirName:"advanced/partition",slug:"/advanced/partition/auto-partition",permalink:"/docs/dev/advanced/partition/auto-partition",draft:!1,tags:[],version:"current",frontMatter:{title:"Auto Partition",language:"en"},sidebar:"docs",previous:{title:"Temporary Partition",permalink:"/docs/dev/advanced/partition/table-temp-partition"},next:{title:"Partition Cache",permalink:"/docs/dev/advanced/cache/partition-cache-manual"}},s={},p=[{value:"Usage Scenarios",id:"usage-scenarios",level:2},{value:"Grammar",id:"grammar",level:2},{value:"Usage example",id:"usage-example",level:3},{value:"Using constraints",id:"using-constraints",level:3},{value:"Sample Scenarios",id:"sample-scenarios",level:2},{value:"Coupled with dynamic partitioning",id:"coupled-with-dynamic-partitioning",level:2},{value:"Constraint",id:"constraint",level:3},{value:"caveat",id:"caveat",level:2}],c={toc:p},T="wrapper";function u(e){let{components:t,...n}=e;return(0,i.yg)(T,(0,a.A)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,i.yg)("h1",{id:"auto-partition"},"AUTO PARTITION"),(0,i.yg)("version",{since:"2.1"}),(0,i.yg)("p",null,"The Auto Partitioning feature supports automatic detection of whether the corresponding partition exists during the data import process. If it does not exist, the partition will be created automatically and imported normally."),(0,i.yg)("h2",{id:"usage-scenarios"},"Usage Scenarios"),(0,i.yg)("p",null,"The auto partition function mainly solves the problem that the user expects to partition the table based on a certain column, but the data distribution of the column is scattered or unpredictable, so it is difficult to accurately create the required partitions when building or adjusting the structure of the table, or the number of partitions is so large that it is too cumbersome to create them manually."),(0,i.yg)("p",null,"Take the time type partition column as an example, in the ",(0,i.yg)("a",{parentName:"p",href:"./dynamic-partition"},"Dynamic Partition")," function, we support the automatic creation of new partitions to accommodate real-time data at specific time periods. For real-time user behaviour logs and other scenarios, this feature basically meets the requirements. However, in more complex scenarios, such as dealing with non-real-time data, the partition column is independent of the current system time and contains a large number of discrete values. At this time to improve efficiency we want to partition the data based on this column, but the data may actually involve the partition can not be grasped in advance, or the expected number of required partitions is too large. In this case, dynamic partitioning or manually created partitions can not meet our needs, automatic partitioning function is very good to cover such needs."),(0,i.yg)("p",null,"Suppose our table DDL is as follows:"),(0,i.yg)("pre",null,(0,i.yg)("code",{parentName:"pre",className:"language-sql"},"CREATE TABLE `DAILY_TRADE_VALUE`\n(\n    `TRADE_DATE`              datev2 NOT NULL COMMENT '\u4ea4\u6613\u65e5\u671f',\n    `TRADE_ID`                varchar(40) NOT NULL COMMENT '\u4ea4\u6613\u7f16\u53f7',\n    ......\n)\nUNIQUE KEY(`TRADE_DATE`, `TRADE_ID`)\nPARTITION BY RANGE(`TRADE_DATE`)\n(\n    PARTITION p_2000 VALUES [('2000-01-01'), ('2001-01-01')),\n    PARTITION p_2001 VALUES [('2001-01-01'), ('2002-01-01')),\n    PARTITION p_2002 VALUES [('2002-01-01'), ('2003-01-01')),\n    PARTITION p_2003 VALUES [('2003-01-01'), ('2004-01-01')),\n    PARTITION p_2004 VALUES [('2004-01-01'), ('2005-01-01')),\n    PARTITION p_2005 VALUES [('2005-01-01'), ('2006-01-01')),\n    PARTITION p_2006 VALUES [('2006-01-01'), ('2007-01-01')),\n    PARTITION p_2007 VALUES [('2007-01-01'), ('2008-01-01')),\n    PARTITION p_2008 VALUES [('2008-01-01'), ('2009-01-01')),\n    PARTITION p_2009 VALUES [('2009-01-01'), ('2010-01-01')),\n    PARTITION p_2010 VALUES [('2010-01-01'), ('2011-01-01')),\n    PARTITION p_2011 VALUES [('2011-01-01'), ('2012-01-01')),\n    PARTITION p_2012 VALUES [('2012-01-01'), ('2013-01-01')),\n    PARTITION p_2013 VALUES [('2013-01-01'), ('2014-01-01')),\n    PARTITION p_2014 VALUES [('2014-01-01'), ('2015-01-01')),\n    PARTITION p_2015 VALUES [('2015-01-01'), ('2016-01-01')),\n    PARTITION p_2016 VALUES [('2016-01-01'), ('2017-01-01')),\n    PARTITION p_2017 VALUES [('2017-01-01'), ('2018-01-01')),\n    PARTITION p_2018 VALUES [('2018-01-01'), ('2019-01-01')),\n    PARTITION p_2019 VALUES [('2019-01-01'), ('2020-01-01')),\n    PARTITION p_2020 VALUES [('2020-01-01'), ('2021-01-01')),\n    PARTITION p_2021 VALUES [('2021-01-01'), ('2022-01-01'))\n)\nDISTRIBUTED BY HASH(`TRADE_DATE`) BUCKETS 10\nPROPERTIES (\n  \"replication_num\" = \"1\"\n);\n")),(0,i.yg)("p",null,"The table stores a large amount of business history data, partitioned based on the date the transaction occurred. As you can see when building the table, we need to manually create the partitions in advance. If the data range of the partitioned columns changes, for example, 2022 is added to the above table, we need to create a partition by ",(0,i.yg)("a",{parentName:"p",href:"../../sql-manual/sql-reference/Data-Definition-Statements/Alter/ALTER-TABLE-PARTITION"},"ALTER-TABLE-PARTITION")," to make changes to the table partition. If such partitions need to be changed, or subdivided at a finer level of granularity, it is very tedious to modify them. At this point we can rewrite the table DDL using AUTO PARTITION."),(0,i.yg)("h2",{id:"grammar"},"Grammar"),(0,i.yg)("p",null,"When building a table, use the following syntax to populate ",(0,i.yg)("a",{parentName:"p",href:"../../sql-manual/sql-reference/Data-Definition-Statements/Create/CREATE-TABLE"},"CREATE-TABLE")," with the ",(0,i.yg)("inlineCode",{parentName:"p"},"partition_info")," section:"),(0,i.yg)("ol",null,(0,i.yg)("li",{parentName:"ol"},(0,i.yg)("p",{parentName:"li"},"AUTO RANGE PARTITION:"),(0,i.yg)("pre",{parentName:"li"},(0,i.yg)("code",{parentName:"pre",className:"language-sql"},"AUTO PARTITION BY RANGE FUNC_CALL_EXPR\n(\n)\n")),(0,i.yg)("p",{parentName:"li"},"where"),(0,i.yg)("pre",{parentName:"li"},(0,i.yg)("code",{parentName:"pre",className:"language-sql"},"FUNC_CALL_EXPR ::= date_trunc ( <partition_column>, '<interval>' )\n"))),(0,i.yg)("li",{parentName:"ol"},(0,i.yg)("p",{parentName:"li"},"AUTO LIST PARTITION:"),(0,i.yg)("pre",{parentName:"li"},(0,i.yg)("code",{parentName:"pre",className:"language-sql"},"AUTO PARTITION BY LIST(`partition_col`)\n(\n)\n")))),(0,i.yg)("h3",{id:"usage-example"},"Usage example"),(0,i.yg)("ol",null,(0,i.yg)("li",{parentName:"ol"},(0,i.yg)("p",{parentName:"li"},"AUTO RANGE PARTITION"),(0,i.yg)("pre",{parentName:"li"},(0,i.yg)("code",{parentName:"pre",className:"language-sql"},"CREATE TABLE `date_table` (\n    `TIME_STAMP` datev2 NOT NULL COMMENT 'Date of collection'\n) ENGINE=OLAP\nDUPLICATE KEY(`TIME_STAMP`)\nAUTO PARTITION BY RANGE date_trunc(`TIME_STAMP`, 'month')\n(\n)\nDISTRIBUTED BY HASH(`TIME_STAMP`) BUCKETS 10\nPROPERTIES (\n\"replication_allocation\" = \"tag.location.default: 1\"\n);\n"))),(0,i.yg)("li",{parentName:"ol"},(0,i.yg)("p",{parentName:"li"},"AUTO LIST PARTITION"),(0,i.yg)("pre",{parentName:"li"},(0,i.yg)("code",{parentName:"pre",className:"language-sql"},'CREATE TABLE `str_table` (\n    `str` varchar not null\n) ENGINE=OLAP\nDUPLICATE KEY(`str`)\nAUTO PARTITION BY LIST (`str`)\n(\n)\nDISTRIBUTED BY HASH(`str`) BUCKETS 10\nPROPERTIES (\n"replication_allocation" = "tag.location.default: 1"\n);\n')))),(0,i.yg)("h3",{id:"using-constraints"},"Using constraints"),(0,i.yg)("ol",null,(0,i.yg)("li",{parentName:"ol"},"The partition column for AUTO PARTITION must be a NOT NULL column;"),(0,i.yg)("li",{parentName:"ol"},"In an AUTO LIST PARTITION, ",(0,i.yg)("strong",{parentName:"li"},"the length of the partition name must not exceed 50"),". This length is derived from the splicing and escaping of the contents of the partition columns on the corresponding rows of data, so the actual allowable length may be shorter\uff1b"),(0,i.yg)("li",{parentName:"ol"},"In AUTO RANGE PARTITION, the partition function supports only ",(0,i.yg)("inlineCode",{parentName:"li"},"date_trunc")," and the partition column supports only ",(0,i.yg)("inlineCode",{parentName:"li"},"DATE")," or ",(0,i.yg)("inlineCode",{parentName:"li"},"DATETIME")," type;"),(0,i.yg)("li",{parentName:"ol"},"In AUTO LIST PARTITION, function calls are not supported. Partitioned columns support ",(0,i.yg)("inlineCode",{parentName:"li"},"BOOLEAN"),", ",(0,i.yg)("inlineCode",{parentName:"li"},"TINYINT"),", ",(0,i.yg)("inlineCode",{parentName:"li"},"SMALLINT"),", ",(0,i.yg)("inlineCode",{parentName:"li"},"INT"),", ",(0,i.yg)("inlineCode",{parentName:"li"},"BIGINT"),", ",(0,i.yg)("inlineCode",{parentName:"li"},"LARGEINT"),", ",(0,i.yg)("inlineCode",{parentName:"li"},"DATE"),", ",(0,i.yg)("inlineCode",{parentName:"li"},"DATETIME"),", ",(0,i.yg)("inlineCode",{parentName:"li"},"CHAR"),", ",(0,i.yg)("inlineCode",{parentName:"li"},"VARCHAR")," data-types, and partitioned values are enum values;"),(0,i.yg)("li",{parentName:"ol"},"In AUTO LIST PARTITION, a separate new PARTITION is created for each fetch of a partition column for which the corresponding partition does not currently exist.")),(0,i.yg)("h2",{id:"sample-scenarios"},"Sample Scenarios"),(0,i.yg)("p",null,"In the example in the Usage Scenarios section, the table DDL can be rewritten after using AUTO PARTITION:"),(0,i.yg)("pre",null,(0,i.yg)("code",{parentName:"pre",className:"language-sql"},'CREATE TABLE `DAILY_TRADE_VALUE`\n(\n    `TRADE_DATE`              datev2 NOT NULL,\n    `TRADE_ID`                varchar(40) NOT NULL,\n    ......\n)\nUNIQUE KEY(`TRADE_DATE`, `TRADE_ID`)\nAUTO PARTITION BY RANGE date_trunc(`TRADE_DATE`, \'year\')\n(\n)\nDISTRIBUTED BY HASH(`TRADE_DATE`) BUCKETS 10\nPROPERTIES (\n  "replication_num" = "1"\n);\n')),(0,i.yg)("p",null,"At this point the new table does not have a default partition:"),(0,i.yg)("pre",null,(0,i.yg)("code",{parentName:"pre",className:"language-sql"},"mysql> show partitions from `DAILY_TRADE_VALUE`;\nEmpty set (0.12 sec)\n")),(0,i.yg)("p",null,"After inserting the data and then viewing it again, we could found that the table has been created with corresponding partitions:"),(0,i.yg)("pre",null,(0,i.yg)("code",{parentName:"pre",className:"language-sql"},"mysql> insert into `DAILY_TRADE_VALUE` values ('2012-12-13', 1), ('2008-02-03', 2), ('2014-11-11', 3);\nQuery OK, 3 rows affected (0.88 sec)\n\nmysql> show partitions from `DAILY_TRADE_VALUE`;\n+-------------+-----------------+----------------+---------------------+--------+--------------+--------------------------------------------------------------------------------+-----------------+---------+----------------+---------------+---------------------+---------------------+--------------------------+----------+------------+-------------------------+-----------+\n| PartitionId | PartitionName   | VisibleVersion | VisibleVersionTime  | State  | PartitionKey | Range                                                                          | DistributionKey | Buckets | ReplicationNum | StorageMedium | CooldownTime        | RemoteStoragePolicy | LastConsistencyCheckTime | DataSize | IsInMemory | ReplicaAllocation       | IsMutable |\n+-------------+-----------------+----------------+---------------------+--------+--------------+--------------------------------------------------------------------------------+-----------------+---------+----------------+---------------+---------------------+---------------------+--------------------------+----------+------------+-------------------------+-----------+\n| 180060      | p20080101000000 | 2              | 2023-09-18 21:49:29 | NORMAL | TRADE_DATE   | [types: [DATEV2]; keys: [2008-01-01]; ..types: [DATEV2]; keys: [2009-01-01]; ) | TRADE_DATE      | 10      | 1              | HDD           | 9999-12-31 23:59:59 |                     | NULL                     | 0.000    | false      | tag.location.default: 1 | true      |\n| 180039      | p20120101000000 | 2              | 2023-09-18 21:49:29 | NORMAL | TRADE_DATE   | [types: [DATEV2]; keys: [2012-01-01]; ..types: [DATEV2]; keys: [2013-01-01]; ) | TRADE_DATE      | 10      | 1              | HDD           | 9999-12-31 23:59:59 |                     | NULL                     | 0.000    | false      | tag.location.default: 1 | true      |\n| 180018      | p20140101000000 | 2              | 2023-09-18 21:49:29 | NORMAL | TRADE_DATE   | [types: [DATEV2]; keys: [2014-01-01]; ..types: [DATEV2]; keys: [2015-01-01]; ) | TRADE_DATE      | 10      | 1              | HDD           | 9999-12-31 23:59:59 |                     | NULL                     | 0.000    | false      | tag.location.default: 1 | true      |\n+-------------+-----------------+----------------+---------------------+--------+--------------+--------------------------------------------------------------------------------+-----------------+---------+----------------+---------------+---------------------+---------------------+--------------------------+----------+------------+-------------------------+-----------+\n3 rows in set (0.12 sec)\n")),(0,i.yg)("p",null,"A partition created by the AUTO PARTITION function has the exact same functional properties as a manually created partition."),(0,i.yg)("h2",{id:"coupled-with-dynamic-partitioning"},"Coupled with dynamic partitioning"),(0,i.yg)("p",null,"AUTO PARTITION is supported on the same table as ",(0,i.yg)("a",{parentName:"p",href:"./dynamic-partition"},"DYNAMIC PARTITION"),". for example:"),(0,i.yg)("pre",null,(0,i.yg)("code",{parentName:"pre",className:"language-sql"},'CREATE TABLE tbl3\n(\n    k1 DATETIME NOT NULL,\n    col1 int \n)\nAUTO PARTITION BY RANGE date_trunc(`k1`, \'year\') ()\nDISTRIBUTED BY HASH(k1)\nPROPERTIES\n(\n    "replication_num" = "1",\n    "dynamic_partition.create_history_partition"="true",\n    "dynamic_partition.enable" = "true",\n    "dynamic_partition.time_unit" = "year",\n    "dynamic_partition.start" = "-2",\n    "dynamic_partition.end" = "2",\n    "dynamic_partition.prefix" = "p",\n    "dynamic_partition.buckets" = "8"\n); \n')),(0,i.yg)("p",null,"When the two functions are used in combination, neither of their original functions is affected and they still act on the entire table. The behavior includes but is not limited to:"),(0,i.yg)("ol",null,(0,i.yg)("li",{parentName:"ol"},"regardless of the creation method, the expired historical partitions will be periodically cleaned up or transferred to cold storage according to the rules specified by the DYNAMIC PARTITION properties"),(0,i.yg)("li",{parentName:"ol"},"partition ranges cannot overlap or conflict. If a new partition range that needs to be created by DYNAMIC PARTITION has already been covered by an automatically or manually created partition, the partition creation will fail without affecting the business process.")),(0,i.yg)("p",null,"The principle is that AUTO PARTITION is only a complementary means introduced to the creation of partitions, and that a partition, whether created manually, by AUTO PARTITION, or by DYNAMIC PARTITION, will be governed by DYNAMIC PARTITION functions."),(0,i.yg)("h3",{id:"constraint"},"Constraint"),(0,i.yg)("p",null,"In order to simplify the behavioral pattern of combine two partition methods, when the AUTO PARTITION and DYNAMIC PARTITION are both used, the ",(0,i.yg)("strong",{parentName:"p"},"partition intervals of the two must be consistent")," or the table creating will fail:"),(0,i.yg)("pre",null,(0,i.yg)("code",{parentName:"pre",className:"language-sql"},'mysql > CREATE TABLE tbl3\n        (\n            k1 DATETIME NOT NULL,\n            col1 int \n        )\n        AUTO PARTITION BY RANGE date_trunc(`k1`, \'year\') ()\n        DISTRIBUTED BY HASH(k1)\n        PROPERTIES\n        (\n            "replication_num" = "1",\n            "dynamic_partition.create_history_partition"="true",\n            "dynamic_partition.enable" = "true",\n            "dynamic_partition.time_unit" = "HOUR",\n            "dynamic_partition.start" = "-2",\n            "dynamic_partition.end" = "2",\n            "dynamic_partition.prefix" = "p",\n            "dynamic_partition.buckets" = "8"\n        ); \nERROR 1105 (HY000): errCode = 2, detailMessage = errCode = 2, detailMessage = If support auto partition and dynamic partition at same time, they must have the same interval unit.\n')),(0,i.yg)("h2",{id:"caveat"},"caveat"),(0,i.yg)("ul",null,(0,i.yg)("li",{parentName:"ul"},"Like a normal partition table, AUTO PARTITION supports multi-column partitioning, and there is no difference in syntax."),(0,i.yg)("li",{parentName:"ul"},"If a partition is created during the insertion or import of data and the entire import process does not complete (fails or is cancelled), the created partition is not automatically deleted."),(0,i.yg)("li",{parentName:"ul"},"Tables that use AUTO PARTITION only have their partitions created automatically instead of manually. The original use of the table and the partitions it creates is the same as for non-AUTO PARTITION tables or partitions."),(0,i.yg)("li",{parentName:"ul"},"To prevent accidental creation of too many partitions, we use the ",(0,i.yg)("a",{parentName:"li",href:"../../admin-manual/config/fe-config"},"FE Configuration")," ",(0,i.yg)("inlineCode",{parentName:"li"},"max_auto_partition_num")," controls the maximum number of partitions an AUTO PARTITION table can hold. This value can be adjusted if necessary"),(0,i.yg)("li",{parentName:"ul"},"When importing data to a table with AUTO PARTITION enabled, the polling interval for data sent by the Coordinator is different from that of a normal table. For details, see ",(0,i.yg)("inlineCode",{parentName:"li"},"olap_table_sink_send_interval_auto_partition_factor")," in ",(0,i.yg)("a",{parentName:"li",href:"../../admin-manual/config/be-config"},"BE Configuration"),"."),(0,i.yg)("li",{parentName:"ul"},"In the case of inserting data with ",(0,i.yg)("a",{parentName:"li",href:"../../sql-manual/sql-reference/Data-Manipulation-Statements/Manipulation/INSERT-OVERWRITE"},"insert-overwrite")," command, if an overwrite partition is specified, the AUTO PARTITION table behaves as a normal table during this process and no new partitions will be created.")))}u.isMDXComponent=!0}}]);