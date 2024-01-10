"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([[95310],{3905:(e,t,a)=>{a.d(t,{Zo:()=>d,kt:()=>m});var n=a(67294);function s(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function r(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){s(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function o(e,t){if(null==e)return{};var a,n,s=function(e,t){if(null==e)return{};var a,n,s={},i=Object.keys(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||(s[a]=e[a]);return s}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(s[a]=e[a])}return s}var l=n.createContext({}),c=function(e){var t=n.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):r(r({},t),e)),a},d=function(e){var t=c(e.components);return n.createElement(l.Provider,{value:t},e.children)},p="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},h=n.forwardRef((function(e,t){var a=e.components,s=e.mdxType,i=e.originalType,l=e.parentName,d=o(e,["components","mdxType","originalType","parentName"]),p=c(a),h=s,m=p["".concat(l,".").concat(h)]||p[h]||u[h]||i;return a?n.createElement(m,r(r({ref:t},d),{},{components:a})):n.createElement(m,r({ref:t},d))}));function m(e,t){var a=arguments,s=t&&t.mdxType;if("string"==typeof e||s){var i=a.length,r=new Array(i);r[0]=h;var o={};for(var l in t)hasOwnProperty.call(t,l)&&(o[l]=t[l]);o.originalType=e,o[p]="string"==typeof e?e:s,r[1]=o;for(var c=2;c<i;c++)r[c]=a[c];return n.createElement.apply(null,r)}return n.createElement.apply(null,a)}h.displayName="MDXCreateElement"},34527:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>l,contentTitle:()=>r,default:()=>u,frontMatter:()=>i,metadata:()=>o,toc:()=>c});var n=a(87462),s=(a(67294),a(3905));const i={title:"Log analysis: Elasticsearch vs Apache Doris",summary:"As a major part of a company's data asset, logs brings values to businesses in three aspects: system observability, cyber security, and data analysis. They are your first resort for troubleshooting, your reference for improving system security, and your data mine where you can extract information that points to business growth.",date:"2023-09-28",author:"Apache Doris",tags:["Tech Sharing"],image:"/images/es-vs-doris.png"},r=void 0,o={permalink:"/blog/log-analysis-elasticsearch-vs-apache-doris",source:"@site/blog/log-analysis-elasticsearch-vs-apache-doris.md",title:"Log analysis: Elasticsearch vs Apache Doris",description:"\x3c!--",date:"2023-09-28T00:00:00.000Z",formattedDate:"September 28, 2023",tags:[{label:"Tech Sharing",permalink:"/blog/tags/tech-sharing"}],hasTruncateMarker:!1,authors:[{name:"Apache Doris"}],frontMatter:{title:"Log analysis: Elasticsearch vs Apache Doris",summary:"As a major part of a company's data asset, logs brings values to businesses in three aspects: system observability, cyber security, and data analysis. They are your first resort for troubleshooting, your reference for improving system security, and your data mine where you can extract information that points to business growth.",date:"2023-09-28",author:"Apache Doris",tags:["Tech Sharing"],image:"/images/es-vs-doris.png"},prevItem:{title:"Introduction to Apache Doris: a next-generation real-time data warehouse",permalink:"/blog/introduction-to-apache-doris-a-next-generation-real-time-data-warehouse"},nextItem:{title:"Log analysis: how to digest 15 billion logs per day and keep big queries within 1 second",permalink:"/blog/Log-Analysis-How-to-Digest-15-Billion-Logs-Per-Day-and-Keep-Big-Queries-Within-1-Second"}},l={authorsImageUrls:[void 0]},c=[{value:"The Elasticsearch-Based Log Analysis Solution",id:"the-elasticsearch-based-log-analysis-solution",level:2},{value:"Inadequate Schema-Free Support",id:"inadequate-schema-free-support",level:3},{value:"Inadequate Analytic Capability",id:"inadequate-analytic-capability",level:3},{value:"High Cost &amp; Low Stability",id:"high-cost--low-stability",level:3},{value:"A More Cost-Effective Option",id:"a-more-cost-effective-option",level:2},{value:"Native Support for Semi-Structured Data",id:"native-support-for-semi-structured-data",level:3},{value:"SQL-Based Analytic Engine",id:"sql-based-analytic-engine",level:3},{value:"Performance in Use Case",id:"performance-in-use-case",level:3},{value:"Hands-On Guide",id:"hands-on-guide",level:2},{value:"Step 1: Create Tables",id:"step-1-create-tables",level:3},{value:"Step 2: Ingest the Logs",id:"step-2-ingest-the-logs",level:3},{value:"Step 3: Execute Queries",id:"step-3-execute-queries",level:3},{value:"Conclusion",id:"conclusion",level:2}],d={toc:c},p="wrapper";function u(e){let{components:t,...i}=e;return(0,s.kt)(p,(0,n.Z)({},d,i,{components:t,mdxType:"MDXLayout"}),(0,s.kt)("p",null,"As a major part of a company's data asset, logs brings values to businesses in three aspects: system observability, cyber security, and data analysis. They are your first resort for troubleshooting, your reference for improving system security, and your data mine where you can extract information that points to business growth."),(0,s.kt)("p",null,"Logs are the sequential records of events in the computer system. If you think about how logs are generated and used, you will know what an ideal log analysis system should look like:"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("strong",{parentName:"li"},"It should have schema-free support."),' Raw logs are unstructured free texts and basically impossible for aggregation and calculation, so you needed to turn them into structured tables (the process is called "ETL") before putting them into a database or data warehouse for analysis. If there was a schema change, lots of complicated adjustments needed to put into ETL and the structured tables. Therefore, semi-structured logs, mostly in JSON format, emerged. You can add or delete fields in these logs and the log storage system will adjust the schema accordingly. '),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("strong",{parentName:"li"},"It should be low-cost.")," Logs are huge and they are generated continuously. A fairly big company produces 10~100 TBs of log data. For business or compliance reasons, it should keep the logs around for half a year or longer. That means to store a log size measured in PB, so the cost is considerable."),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("strong",{parentName:"li"},"It should be capable of real-time processing.")," Logs should be written in real time, otherwise engineers won't be able to catch the latest events in troubleshooting and security tracking. Plus, a good log system should provide full-text searching capabilities and respond to interactive queries quickly.")),(0,s.kt)("h2",{id:"the-elasticsearch-based-log-analysis-solution"},"The Elasticsearch-Based Log Analysis Solution"),(0,s.kt)("p",null,"A popular log processing solution within the data industry is the ",(0,s.kt)("strong",{parentName:"p"},"ELK stack: Elasticsearch, Logstash, and Kibana"),". The pipeline can be split into five modules:"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("strong",{parentName:"li"},"Log collection"),": Filebeat collects local log files and writes them to a Kafka message queue."),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("strong",{parentName:"li"},"Log transmission"),": Kafka message queue gathers and caches logs."),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("strong",{parentName:"li"},"Log transfer"),": Logstash filters and transfers log data in Kafka."),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("strong",{parentName:"li"},"Log storage"),": Logstash writes logs in JSON format into Elasticsearch for storage."),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("strong",{parentName:"li"},"Log query"),": Users search for logs via Kibana visualization or send a query request via Elasticsearch DSL API.")),(0,s.kt)("p",null,(0,s.kt)("img",{alt:"ELK-Stack",src:a(32176).Z,width:"1280",height:"230"})),(0,s.kt)("p",null,"The ELK stack has outstanding real-time processing capabilities, but frictions exist."),(0,s.kt)("h3",{id:"inadequate-schema-free-support"},"Inadequate Schema-Free Support"),(0,s.kt)("p",null,"The Index Mapping in Elasticsearch defines the table scheme, which includes the field names, data types, and whether to enable index creation."),(0,s.kt)("p",null,(0,s.kt)("img",{alt:"index-mapping-in-Elasticsearch",src:a(12537).Z,width:"796",height:"772"})),(0,s.kt)("p",null,"Elasticsearch also boasts a Dynamic Mapping mechanism that automatically adds fields to the Mapping according to the input JSON data. This provides some sort of schema-free support, but it's not enough because:"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},"Dynamic Mapping often creates too many fields when processing dirty data, which interrupts the whole system."),(0,s.kt)("li",{parentName:"ul"},'The data type of fields is immutable. To ensure compatibility, users often configure "text" as the data type, but that results in much slower query performance than binary data types such as integer.'),(0,s.kt)("li",{parentName:"ul"},"The index of fields is immutable, too. Users cannot add or delete indexes for a certain field, so they often create indexes for all fields to facilitate data filtering in queries. But too many indexes require extra storage space and slow down data ingestion.")),(0,s.kt)("h3",{id:"inadequate-analytic-capability"},"Inadequate Analytic Capability"),(0,s.kt)("p",null,"Elasticsearch has its unique Domain Specific Language (DSL), which is very different from the tech stack that most data engineers and analysts are familiar with, so there is a steep learning curve. Moreover, Elasticsearch has a relatively closed ecosystem so there might be strong resistance in integration with BI tools. Most importantly, Elastisearch only supports single-table analysis and is lagging behind the modern OLAP demands for multi-table join, sub-query, and views."),(0,s.kt)("p",null,(0,s.kt)("img",{alt:"Elasticsearch-DSL",src:a(40828).Z,width:"550",height:"764"})),(0,s.kt)("h3",{id:"high-cost--low-stability"},"High Cost & Low Stability"),(0,s.kt)("p",null,"Elasticsearch users have been complaining about the computation and storage costs. The root reason lies in the way Elasticsearch works."),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("strong",{parentName:"li"},"Computation cost"),": In data writing, Elasticsearch also executes compute-intensive operations including inverted index creation, tokenization, and inverted index ranking. Under these circumstances, data is written into Elasticsearch at a speed of around 2MB/s per core. When CPU resources are tight, data writing requirements often get rejected during peak times, which further leads to higher latency. "),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("strong",{parentName:"li"},"Storage cost"),": To speed up retrieval, Elasticsearch stores the forward indexes, inverted indexes, and docvalues of the original data, consuming a lot more storage space. The compression ratio of a single data copy is only 1.5:1, compared to the 5:1 in most log solutions.")),(0,s.kt)("p",null,"As data and cluster size grows, maintaining stability can be another issue:"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("p",{parentName:"li"},(0,s.kt)("strong",{parentName:"p"},"During data writing peaks"),": Clusters are prone to overload during data writing peaks.")),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("p",{parentName:"li"},(0,s.kt)("strong",{parentName:"p"},"During queries"),": Since all queries are processed in the memory, big queries can easily lead to JVM OOM.")),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("p",{parentName:"li"},(0,s.kt)("strong",{parentName:"p"},"Slow recovery"),": For a cluster failure, Elasticsearch should reload indexes, which is resource-intensive, so it will take many minutes to recover. That challenges service availability guarantee."))),(0,s.kt)("h2",{id:"a-more-cost-effective-option"},"A More Cost-Effective Option"),(0,s.kt)("p",null,"Reflecting on the strengths and limitations of the Elasticsearch-based solution, the Apache Doris developers have optimized Apache Doris for log processing. "),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("strong",{parentName:"li"},"Increase writing throughout"),": The performance of Elasticsearch is bottlenecked by data parsing and inverted index creation, so we improved Apache Doris in these factors: we quickened data parsing and index creation by SIMD instructions and CPU vector instructions; then we removed those data structures unnecessary for log analysis scenarios, such as forward indexes, to simplify index creation."),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("strong",{parentName:"li"},"Reduce storage costs"),": We removed forward indexes, which represented 30% of index data. We adopted columnar storage and the ZSTD compression algorithm, and thus achieved a compression ratio of 5:1 to 10:1. Given that a large part of the historical logs are rarely accessed, we introduced tiered storage to separate hot and cold data. Logs that are older than a specified time period will be moved to object storage, which is much less expensive. This can reduce storage costs by around 70%. ")),(0,s.kt)("p",null,"Benchmark tests with ES Rally, the official testing tool for Elasticsearch, showed that Apache Doris was around 5 times as fast as Elasticsearch in data writing, 2.3 times as fast in queries, and it consumed only 1/5 of the storage space that Elasticsearch used. On the test dataset of HTTP logs, it achieved a writing speed of 550 MB/s and a compression ratio of 10:1."),(0,s.kt)("p",null,(0,s.kt)("img",{alt:"Elasticsearch-VS-Apache-Doris",src:a(47025).Z,width:"1280",height:"725"})),(0,s.kt)("p",null,"The below figure show what a typical Doris-based log processing system looks like. It is more inclusive and allows for more flexible usage from data ingestion, analysis, and application:"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("strong",{parentName:"li"},"Ingestion"),": Apache Doris supports various ingestion methods for log data. You can push logs to Doris via HTTP Output using Logstash, you can use Flink to pre-process the logs before you write them into Doris, or you can load logs from Flink or object storage to Doris via Routine Load and S3 Load. "),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("strong",{parentName:"li"},"Analysis"),": You can put log data in Doris and conduct join queries across logs and other data in the data warehouse."),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("strong",{parentName:"li"},"Application"),": Apache Doris is compatible with MySQL protocol, so you can integrate a wide variety of data analytic tools and clients to Doris, such as Grafana and Tableau. You can also connect applications to Doris via JDBC and ODBC APIs. We are planning to build a Kibana-like system to visualize logs.")),(0,s.kt)("p",null,(0,s.kt)("img",{alt:"Apache-Doris-log-analysis-stack",src:a(14377).Z,width:"1272",height:"432"})),(0,s.kt)("p",null,"Moreover, Apache Doris has better scheme-free support and a more user-friendly analytic engine."),(0,s.kt)("h3",{id:"native-support-for-semi-structured-data"},"Native Support for Semi-Structured Data"),(0,s.kt)("p",null,(0,s.kt)("strong",{parentName:"p"},"Firstly, we worked on the data types."),' We optimized the string search and regular expression matching for "text" through vectorization and brought a performance increase of 2~10 times. For JSON strings, Apache Doris will parse and store them as a more compacted and efficient binary format, which can speed up queries by 4 times. We also added a new data type for complicated data: Array Map. It can structuralize concatenated strings to allow for higher compression rate and faster queries.'),(0,s.kt)("p",null,(0,s.kt)("strong",{parentName:"p"},"Secondly, Apache Doris supports schema evolution.")," This means you can adjust the schema as your business changes. You can add or delete fields and indexes, and change the data types for fields."),(0,s.kt)("p",null,"Apache Doris provides Light Schema Change capabilities, so you can add or delete fields within milliseconds:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-SQL"},"-- Add a column. Result will be returned in milliseconds.\nALTER TABLE lineitem ADD COLUMN l_new_column INT;\n")),(0,s.kt)("p",null,"You can also add index only for your target fields, so you can avoid overheads from unnecessary index creation. After you add an index, by default, the system will generate the index for all incremental data, and you can specify which historical data partitions that need the index."),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-SQL"},"-- Add inverted index. Doris will generate inverted index for all new data afterward.\nALTER TABLE table_name ADD INDEX index_name(column_name) USING INVERTED;\n\n-- Build index for the specified historical data partitions.\nBUILD INDEX index_name ON table_name PARTITIONS(partition_name1, partition_name2);\n")),(0,s.kt)("h3",{id:"sql-based-analytic-engine"},"SQL-Based Analytic Engine"),(0,s.kt)("p",null,"The SQL-based analytic engine makes sure that data engineers and analysts can smoothly grasp Apache Doris in a short time and bring their experience with SQL to this OLAP engine. Building on the rich features of SQL, users can execute data retrieval, aggregation, multi-table join, sub-query, UDF, logic views, and materialized views to serve their own needs. "),(0,s.kt)("p",null,"With MySQL compatibility, Apache Doris can be integrated with most GUI and BI tools in the big data ecosystem, so users can realize more complex and diversified data analysis."),(0,s.kt)("h3",{id:"performance-in-use-case"},"Performance in Use Case"),(0,s.kt)("p",null,"A gaming company has transitioned from the ELK stack to the Apache Doris solution. Their Doris-based log system used 1/6 of the storage space that they previously needed. "),(0,s.kt)("p",null,"In a cybersecurity company who built their log analysis system utilizing inverted index in Apache Doris, they supported a data writing speed of 300,000 rows per second with 1/5 of the server resources that they formerly used. "),(0,s.kt)("h2",{id:"hands-on-guide"},"Hands-On Guide"),(0,s.kt)("p",null,"Now let's go through the three steps of building a log analysis system with Apache Doris. "),(0,s.kt)("p",null,"Before you start, ",(0,s.kt)("a",{parentName:"p",href:"https://doris.apache.org/download/"},"download")," Apache Doris 2.0 or newer versions from the website and ",(0,s.kt)("a",{parentName:"p",href:"https://doris.apache.org/docs/dev/install/standard-deployment/"},"deploy")," clusters."),(0,s.kt)("h3",{id:"step-1-create-tables"},"Step 1: Create Tables"),(0,s.kt)("p",null,"This is an example of table creation."),(0,s.kt)("p",null,"Explanations for the configurations:"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},"The DATETIMEV2 time field is specified as the Key in order to speed up queries for the latest N log records."),(0,s.kt)("li",{parentName:"ul"},"Indexes are created for the frequently accessed fields, and fields that require full-text search are specified with Parser parameters."),(0,s.kt)("li",{parentName:"ul"},'"PARTITION BY RANGE" means to partition the data by RANGE based on time fields, ',(0,s.kt)("a",{parentName:"li",href:"https://doris.apache.org/docs/dev/advanced/partition/dynamic-partition/"},"Dynamic Partition")," is enabled for auto-management."),(0,s.kt)("li",{parentName:"ul"},'"DISTRIBUTED BY RANDOM BUCKETS AUTO" means to distribute the data into buckets randomly and the system will automatically decide the number of buckets based on the cluster size and data volume.'),(0,s.kt)("li",{parentName:"ul"},'"log_policy_1day" and "log_s3" means to move logs older than 1 day to S3 storage.')),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-Go"},'CREATE DATABASE log_db;\nUSE log_db;\n\nCREATE RESOURCE "log_s3"\nPROPERTIES\n(\n    "type" = "s3",\n    "s3.endpoint" = "your_endpoint_url",\n    "s3.region" = "your_region",\n    "s3.bucket" = "your_bucket",\n    "s3.root.path" = "your_path",\n    "s3.access_key" = "your_ak",\n    "s3.secret_key" = "your_sk"\n);\n\nCREATE STORAGE POLICY log_policy_1day\nPROPERTIES(\n    "storage_resource" = "log_s3",\n    "cooldown_ttl" = "86400"\n);\n\nCREATE TABLE log_table\n(\n  `ts` DATETIMEV2,\n  `clientip` VARCHAR(20),\n  `request` TEXT,\n  `status` INT,\n  `size` INT,\n  INDEX idx_size (`size`) USING INVERTED,\n  INDEX idx_status (`status`) USING INVERTED,\n  INDEX idx_clientip (`clientip`) USING INVERTED,\n  INDEX idx_request (`request`) USING INVERTED PROPERTIES("parser" = "english")\n)\nENGINE = OLAP\nDUPLICATE KEY(`ts`)\nPARTITION BY RANGE(`ts`) ()\nDISTRIBUTED BY RANDOM BUCKETS AUTO\nPROPERTIES (\n"replication_num" = "1",\n"storage_policy" = "log_policy_1day",\n"deprecated_dynamic_schema" = "true",\n"dynamic_partition.enable" = "true",\n"dynamic_partition.time_unit" = "DAY",\n"dynamic_partition.start" = "-3",\n"dynamic_partition.end" = "7",\n"dynamic_partition.prefix" = "p",\n"dynamic_partition.buckets" = "AUTO",\n"dynamic_partition.replication_num" = "1"\n);\n')),(0,s.kt)("h3",{id:"step-2-ingest-the-logs"},"Step 2: Ingest the Logs"),(0,s.kt)("p",null,"Apache Doris supports various ingestion methods. For real-time logs, we recommend the following three methods:"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},"Pull logs from Kafka message queue: Routine Load "),(0,s.kt)("li",{parentName:"ul"},"Logstash: write logs into Doris via HTTP API"),(0,s.kt)("li",{parentName:"ul"},"Self-defined writing program: write logs into Doris via HTTP API")),(0,s.kt)("p",null,(0,s.kt)("strong",{parentName:"p"},"Ingest from Kafka")),(0,s.kt)("p",null,"For JSON logs that are written into Kafka message queues, create ",(0,s.kt)("a",{parentName:"p",href:"https://doris.apache.org/docs/dev/data-operate/import/import-way/routine-load-manual/"},"Routine Load")," so Doris will pull data from Kafka. The following is an example. The ",(0,s.kt)("inlineCode",{parentName:"p"},"property.*")," configurations are optional:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-SQL"},'-- Prepare the Kafka cluster and topic ("log_topic")\n\n-- Create Routine Load, load data from Kafka log_topic to "log_table"\nCREATE ROUTINE LOAD load_log_kafka ON log_db.log_table\nCOLUMNS(ts, clientip, request, status, size)\nPROPERTIES (\n    "max_batch_interval" = "10",\n    "max_batch_rows" = "1000000",\n    "max_batch_size" = "109715200",\n    "strict_mode" = "false",\n    "format" = "json"\n)\nFROM KAFKA (\n    "kafka_broker_list" = "host:port",\n    "kafka_topic" = "log_topic",\n    "property.group.id" = "your_group_id",\n    "property.security.protocol"="SASL_PLAINTEXT",     \n    "property.sasl.mechanism"="GSSAPI",     \n    "property.sasl.kerberos.service.name"="kafka",     \n    "property.sasl.kerberos.keytab"="/path/to/xxx.keytab",     \n    "property.sasl.kerberos.principal"="xxx@yyy.com"\n);\n')),(0,s.kt)("p",null,"You can check how the Routine Load runs via the ",(0,s.kt)("inlineCode",{parentName:"p"},"SHOW ROUTINE LOAD")," command. "),(0,s.kt)("p",null,(0,s.kt)("strong",{parentName:"p"},"Ingest via Logstash")),(0,s.kt)("p",null,"Configure HTTP Output for Logstash, and then data will be sent to Doris via HTTP Stream Load."),(0,s.kt)("ol",null,(0,s.kt)("li",{parentName:"ol"},"Specify the batch size and batch delay in ",(0,s.kt)("inlineCode",{parentName:"li"},"logstash.yml")," to improve data writing performance.")),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-Plain"},"pipeline.batch.size: 100000\npipeline.batch.delay: 10000\n")),(0,s.kt)("ol",{start:2},(0,s.kt)("li",{parentName:"ol"},"Add HTTP Output to the log collection configuration file ",(0,s.kt)("inlineCode",{parentName:"li"},"testlog.conf"),", URL => the Stream Load address in Doris.")),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},"Since Logstash does not support HTTP redirection, you should use a backend address instead of a FE address."),(0,s.kt)("li",{parentName:"ul"},"Authorization in the headers is ",(0,s.kt)("inlineCode",{parentName:"li"},"http basic auth"),". It is computed with ",(0,s.kt)("inlineCode",{parentName:"li"},"echo -n 'username:password' | base64"),"."),(0,s.kt)("li",{parentName:"ul"},"The ",(0,s.kt)("inlineCode",{parentName:"li"},"load_to_single_tablet")," in the headers can reduce the number of small files in data ingestion.")),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-Plain"},'output {\n    http {\n       follow_redirects => true\n       keepalive => false\n       http_method => "put"\n       url => "http://172.21.0.5:8640/api/logdb/logtable/_stream_load"\n       headers => [\n           "format", "json",\n           "strip_outer_array", "true",\n           "load_to_single_tablet", "true",\n           "Authorization", "Basic cm9vdDo=",\n           "Expect", "100-continue"\n       ]\n       format => "json_batch"\n    }\n}\n')),(0,s.kt)("p",null,(0,s.kt)("strong",{parentName:"p"},"Ingest via self-defined program")),(0,s.kt)("p",null,"This is an example of ingesting data to Doris via HTTP Stream Load."),(0,s.kt)("p",null,"Notes:"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},"Use ",(0,s.kt)("inlineCode",{parentName:"li"},"basic auth")," for HTTP authorization, use ",(0,s.kt)("inlineCode",{parentName:"li"},"echo -n 'username:password' | base64")," in computation"),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("inlineCode",{parentName:"li"},'http header "format:json"'),": the data type is specified as JSON"),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("inlineCode",{parentName:"li"},'http header "read_json_by_line:true"'),": each line is a JSON record"),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("inlineCode",{parentName:"li"},'http header "load_to_single_tablet:true"'),": write to one tablet each time"),(0,s.kt)("li",{parentName:"ul"},"For the data writing clients, we recommend a batch size of 100MB~1GB. Future versions will enable Group Commit at the server end and reduce batch size from clients.")),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-Bash"},'curl \\\n--location-trusted \\\n-u username:password \\\n-H "format:json" \\\n-H "read_json_by_line:true" \\\n-H "load_to_single_tablet:true" \\\n-T logfile.json \\\nhttp://fe_host:fe_http_port/api/log_db/log_table/_stream_load\n')),(0,s.kt)("h3",{id:"step-3-execute-queries"},"Step 3: Execute Queries"),(0,s.kt)("p",null,"Apache Doris supports standard SQL, so you can connect to Doris via MySQL client or JDBC and then execute SQL queries."),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-SQL"},"mysql -h fe_host -P fe_mysql_port -u root -Dlog_db\n")),(0,s.kt)("p",null,(0,s.kt)("strong",{parentName:"p"},"A few common queries in log analysis:")),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},"Check the latest 10 records.")),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-SQL"},"SELECT * FROM log_table ORDER BY ts DESC LIMIT 10;\n")),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},'Check the latest 10 records of Client IP "8.8.8.8".')),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-SQL"},"SELECT * FROM log_table WHERE clientip = '8.8.8.8' ORDER BY ts DESC LIMIT 10;\n")),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},'Retrieve the latest 10 records with "error" or "404" in the "request" field. ',(0,s.kt)("strong",{parentName:"li"},"MATCH_ANY")," is a SQL syntax keyword for full-text search in Doris. It means to find the records that include any one of the specified keywords.")),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-SQL"},"SELECT * FROM log_table WHERE request MATCH_ANY 'error 404' ORDER BY ts DESC LIMIT 10;\n")),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},'Retrieve the latest 10 records with "image" and "faq" in the "request" field. ',(0,s.kt)("strong",{parentName:"li"},"MATCH_ALL")," is also a SQL syntax keyword for full-text search in Doris. It means to find the records that include all of the specified keywords.")),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-SQL"},"SELECT * FROM log_table WHERE request MATCH_ALL 'image faq' ORDER BY ts DESC LIMIT 10;\n")),(0,s.kt)("h2",{id:"conclusion"},"Conclusion"),(0,s.kt)("p",null,"If you are looking for an efficient log analytic solution, Apache Doris is friendly to anyone equipped with SQL knowledge; if you find friction with the ELK stack, try Apache Doris provides better schema-free support, enables faster data writing and queries, and brings much less storage burden."),(0,s.kt)("p",null,"But we won't stop here. We are going to provide more features to facilitate log analysis. We plan to add more complicated data types to inverted index, and support BKD index to make Apache Doris a fit for geo data analysis. We also plan to expand capabilities in semi-structured data analysis, such as working on the complex data types (Array, Map, Struct, JSON) and high-performance string matching algorithm. And we welcome any ",(0,s.kt)("a",{parentName:"p",href:"https://t.co/ZxJuNJHXb2"},"user feedback and development advice"),"."))}u.isMDXComponent=!0},32176:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/LAS_1-5855470fa53156592103937c4c267847.png"},12537:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/LAS_2-426b7a38106af2b1b439180d5ea5be47.png"},40828:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/LAS_3-8dda5ac77b54b4a58682c977efcd3817.png"},47025:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/LAS_4-49afc2c61d8929daeb0f51c39686e305.png"},14377:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/LAS_5-cdbff999ed0de15553dee4514a869fd4.png"}}]);