"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([[94406],{15680:(e,a,t)=>{t.d(a,{xA:()=>d,yg:()=>g});var n=t(96540);function o(e,a,t){return a in e?Object.defineProperty(e,a,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[a]=t,e}function r(e,a){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);a&&(n=n.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),t.push.apply(t,n)}return t}function i(e){for(var a=1;a<arguments.length;a++){var t=null!=arguments[a]?arguments[a]:{};a%2?r(Object(t),!0).forEach((function(a){o(e,a,t[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):r(Object(t)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(t,a))}))}return e}function s(e,a){if(null==e)return{};var t,n,o=function(e,a){if(null==e)return{};var t,n,o={},r=Object.keys(e);for(n=0;n<r.length;n++)t=r[n],a.indexOf(t)>=0||(o[t]=e[t]);return o}(e,a);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)t=r[n],a.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var l=n.createContext({}),c=function(e){var a=n.useContext(l),t=a;return e&&(t="function"==typeof e?e(a):i(i({},a),e)),t},d=function(e){var a=c(e.components);return n.createElement(l.Provider,{value:a},e.children)},u="mdxType",p={inlineCode:"code",wrapper:function(e){var a=e.children;return n.createElement(n.Fragment,{},a)}},h=n.forwardRef((function(e,a){var t=e.components,o=e.mdxType,r=e.originalType,l=e.parentName,d=s(e,["components","mdxType","originalType","parentName"]),u=c(t),h=o,g=u["".concat(l,".").concat(h)]||u[h]||p[h]||r;return t?n.createElement(g,i(i({ref:a},d),{},{components:t})):n.createElement(g,i({ref:a},d))}));function g(e,a){var t=arguments,o=a&&a.mdxType;if("string"==typeof e||o){var r=t.length,i=new Array(r);i[0]=h;var s={};for(var l in a)hasOwnProperty.call(a,l)&&(s[l]=a[l]);s.originalType=e,s[u]="string"==typeof e?e:o,i[1]=s;for(var c=2;c<r;c++)i[c]=t[c];return n.createElement.apply(null,i)}return n.createElement.apply(null,t)}h.displayName="MDXCreateElement"},37072:(e,a,t)=>{t.r(a),t.d(a,{assets:()=>l,contentTitle:()=>i,default:()=>p,frontMatter:()=>r,metadata:()=>s,toc:()=>c});var n=t(58168),o=(t(96540),t(15680));const r={title:"Release 2.0-Beta",language:"en"},i=void 0,s={unversionedId:"releasenotes/release-2.0-Beta",id:"version-2.0/releasenotes/release-2.0-Beta",title:"Release 2.0-Beta",description:"\x3c!--",source:"@site/versioned_docs/version-2.0/releasenotes/release-2.0-Beta.md",sourceDirName:"releasenotes",slug:"/releasenotes/release-2.0-Beta",permalink:"/docs/releasenotes/release-2.0-Beta",draft:!1,tags:[],version:"2.0",frontMatter:{title:"Release 2.0-Beta",language:"en"}},l={},c=[{value:"A 10 times more cost-effective log analysis solution",id:"a-10-times-more-cost-effective-log-analysis-solution",level:2},{value:"High-concurrency data serving",id:"high-concurrency-data-serving",level:2},{value:"Enhanced data lakehouse capabilities",id:"enhanced-data-lakehouse-capabilities",level:2},{value:"A self-adaptive parallel execution model",id:"a-self-adaptive-parallel-execution-model",level:2},{value:"Workload management",id:"workload-management",level:2},{value:"Query queue",id:"query-queue",level:2},{value:"Higher speed in data writing",id:"higher-speed-in-data-writing",level:2},{value:"Greater stability in high-concurrency data writing",id:"greater-stability-in-high-concurrency-data-writing",level:2},{value:"Auto-synchronization of table schema",id:"auto-synchronization-of-table-schema",level:2}],d={toc:c},u="wrapper";function p(e){let{components:a,...r}=e;return(0,o.yg)(u,(0,n.A)({},d,r,{components:a,mdxType:"MDXLayout"}),(0,o.yg)("p",null,"We are excited to announce the release of Apache Doris 2.0 Beta. We would like to extend our heartfelt thanks to the 255 Apache Doris Contributors who have committed over 3500 bug fixes and optimizations altogether. You are the driving force behind all the new features and performance leap!"),(0,o.yg)("blockquote",null,(0,o.yg)("p",{parentName:"blockquote"},"Download: ",(0,o.yg)("a",{parentName:"p",href:"https://doris.apache.org/download"},"https://doris.apache.org/download")),(0,o.yg)("p",{parentName:"blockquote"},"GitHub source code: ",(0,o.yg)("a",{parentName:"p",href:"https://github.com/apache/doris/tree/branch-2.0"},"https://github.com/apache/doris/tree/branch-2.0"))),(0,o.yg)("p",null,"In the middle of 2023, we are half way on our roadmap and many steps closer to our visions that we put forward on Doris Summit 2022:"),(0,o.yg)("blockquote",null,(0,o.yg)("p",{parentName:"blockquote"},"We want to build Apache Doris into an all-in-one platform that can serve most of our users' needs so as to maximize their productivity while inducing the least development and maintainence costs. Specifically, it should be capable of data analytics in multiple scenarios, support both online and offline workloads, and deliver lightning performance in both high-throughput interactive analysis and high-concurrency point queries. Also, in response to industry trends, it should be able to provide seamless analytic services across heterogenous data sources, and unified management services for semi-structured and unstructured data. ")),(0,o.yg)("p",null,"Taking on these great visions means a path full of hurdles. We need to figure out answers to all these difficult questions:"),(0,o.yg)("ul",null,(0,o.yg)("li",{parentName:"ul"},"How to ensure real-time data writing without compromising query service stability?"),(0,o.yg)("li",{parentName:"ul"},"How to ensure online service continuity during data updates and table schema changes?"),(0,o.yg)("li",{parentName:"ul"},"How to store and analyze structured and semi-structured data efficiently in one place?"),(0,o.yg)("li",{parentName:"ul"},"How to handle multiple workloads (point queries, reporting, ad-hoc queries, ETL/ELT, etc.) at the same time and guarantee isolation of them?"),(0,o.yg)("li",{parentName:"ul"},"How to enable efficient execution of complicated SQLs, stability of big queries, and observability of execution?"),(0,o.yg)("li",{parentName:"ul"},"How to integrate and access data lakes and many heterogenous data sources more easily?"),(0,o.yg)("li",{parentName:"ul"},"How to improve query performance while largely reducing storage and computation costs?")),(0,o.yg)("p",null,"We believe that life is miserable for either the developers or the users, so we decided to tackle more challenges so that our users would suffer less. Now we are happy to announce our progress with Apache Doris 2.0 Beta. These are what you can expect from this new version:"),(0,o.yg)("h1",{id:"a-10-times-performance-increase"},"A 10 times Performance Increase"),(0,o.yg)("p",null,"High performance is what our users identify us with. It has been repeatedly proven by the test results of Apache Doris on ClickBench and TPC-H benchmarks during the past year. But there remain some differences between benchmarking and real-life application:"),(0,o.yg)("ul",null,(0,o.yg)("li",{parentName:"ul"},"Benchmarking simplifies and abstracts real-world scenarios so it might not cover the complex query statements that are frequently seen in data analytics."),(0,o.yg)("li",{parentName:"ul"},"Query statements in benchmarking are often fine-tuned, but in real life, fine-tuning is just too demanding, exhausting, and time-consuming.")),(0,o.yg)("p",null,"That's why we introduced a brand new query optimizer: Nereids. With a richer statistical base and the advanced Cascades framework, Nereids is capable of self-tuning in most query scenarios, so users can expect high performance without any fine-tuning or SQL rewriting. What's more, it supports all 99 SQLs in TPC-DS. "),(0,o.yg)("p",null,"Testing on 22 TPC-H SQLs showed that Nereids, with no human intervention, ",(0,o.yg)("strong",{parentName:"p"},"brought an over 10-time performance increase compared to the old query optimizer"),". Similar results were reported by dozens of users who have tried Apache Doris 2.0 Alpha in their business scenarios. It has really freed engineers from the burden of fine-tuning."),(0,o.yg)("p",null,(0,o.yg)("img",{src:t(34894).A,width:"1280",height:"631"})),(0,o.yg)("p",null,(0,o.yg)("strong",{parentName:"p"},"Documentation"),": ",(0,o.yg)("a",{parentName:"p",href:"https://doris.apache.org/docs/dev/query-acceleration/nereids/"},"https://doris.apache.org/docs/dev/query-acceleration/nereids/")),(0,o.yg)("p",null,"Nerieds is enabled by default in Apache Doris 2.0 Beta: ",(0,o.yg)("inlineCode",{parentName:"p"},"SET enable_nereids_planner=true"),"."),(0,o.yg)("h1",{id:"support-for-a-wider-range-of-analytic-scenarios"},"Support for a Wider Range of Analytic Scenarios"),(0,o.yg)("h2",{id:"a-10-times-more-cost-effective-log-analysis-solution"},"A 10 times more cost-effective log analysis solution"),(0,o.yg)("p",null,"From a simple OLAP engine for real-time reporting to a data warehouse that is capable of ETL/ELT and more, Apache Doris has been pushing its boundaries. With version 2.0, we are making breakthroughs in log analysis."),(0,o.yg)("p",null,"The common log analytic solutions within the industry are basically different tradeoffs between high writing throughput, low storage cost, and fast text retrieval. But Apache Doris 2.0 allows you to have them all. It has inverted index that allows full-text searches on strings and equivalence/range queries on numerics/datetime. Comparison tests with the same datasets in the same hardware environment showed that Apache Doris was 4 times faster than Elasticsearch in log data writing, 2 times faster in log queries, and cost only 20% of the storage space that Elasticsearch used. "),(0,o.yg)("p",null,(0,o.yg)("img",{src:t(37317).A,width:"1280",height:"546"})),(0,o.yg)("p",null,"We are also making advancements in multi-model data analysis. Apache Doris 2.0 supports two new data types: Map and Struct, as well as the quick writing, functional analysis, and nesting of them."),(0,o.yg)("p",null,"Read more: ",(0,o.yg)("a",{parentName:"p",href:"https://doris.apache.org/blog/Inverted%20Index"},"https://doris.apache.org/blog/Inverted%20Index")),(0,o.yg)("h2",{id:"high-concurrency-data-serving"},"High-concurrency data serving"),(0,o.yg)("p",null,"In scenarios such as e-commerce order queries and express tracking, there will be a huge number of end data users inputing queries for a small piece of data simultaneously. These are high-concurrency point queries, which can bring huge pressure on the system. A traditional solution is to introduce Key-Value stores like Apache HBase for such queries, and Redis as a cache layer to ease the burden, but that means redundant storage and higher maintainence costs."),(0,o.yg)("p",null,"For a column-oriented DBMS like Apache Doris, the I/O usage of point queries will be multiplied. We need neater execution. Thus, we introduced row storage format and row cache to increase row reading efficiency, short-circuit plans to speed up data retrieval, and prepared statements to reduce frontend overheads."),(0,o.yg)("p",null,"After these optimizations, Apache Doris 2.0 reached a concurrency level of ",(0,o.yg)("strong",{parentName:"p"},"30,000 QPS per node")," on YCSB on a 16 Core 64G cloud server with 4\xd71T hard drives, representing an improvement of ",(0,o.yg)("strong",{parentName:"p"},"20 times")," compared to older versions. This makes Apache Doris a good alternative to HBase in high-concurrency scenarios."),(0,o.yg)("p",null,(0,o.yg)("img",{src:t(19804).A,width:"1280",height:"653"})),(0,o.yg)("p",null,"Doc: ",(0,o.yg)("a",{parentName:"p",href:"https://doris.apache.org/blog/High_concurrency"},"https://doris.apache.org/blog/High_concurrency")),(0,o.yg)("h2",{id:"enhanced-data-lakehouse-capabilities"},"Enhanced data lakehouse capabilities"),(0,o.yg)("p",null,"In Apache Doris 1.2, we introduced Multi-Catalog to support the auto-mapping and auto-synchronization of data from heterogeneous sources. After optimizations in data reading, execution engine, and query optimizer, Doris 1.2 delivered a 3~5 times faster query performance than Presto/Trino in standard tests."),(0,o.yg)("p",null,"In Apache Doris 2.0, we extended the list of data sources supported and conducted optimizations according to the actual production environment of users."),(0,o.yg)("ul",null,(0,o.yg)("li",{parentName:"ul"},(0,o.yg)("p",{parentName:"li"},"More data sources supported"),(0,o.yg)("ul",{parentName:"li"},(0,o.yg)("li",{parentName:"ul"},"Supported snapshot queries on Hudi Copy-on-Write tables and read optimized queries on Hudi Merge-on-Read tables; The support for incremental queries and snapshot queries on Merge-on-Read tables is under plan.",(0,o.yg)("ul",{parentName:"li"},(0,o.yg)("li",{parentName:"ul"},"Doc: ",(0,o.yg)("a",{parentName:"li",href:"https://doris.apache.org/docs/dev/lakehouse/multi-catalog/hudi/"},"https://doris.apache.org/docs/dev/lakehouse/multi-catalog/hudi/")))),(0,o.yg)("li",{parentName:"ul"},"Supported connection to Oceanbase via JDBC Catalog, prolonging the list of supported relational databases which include MySQL, PostgreSQL, Oracle, SQLServer, Doris, ClickHouse, SAP HANA, and Trino/Presto.",(0,o.yg)("ul",{parentName:"li"},(0,o.yg)("li",{parentName:"ul"},"Doc: ",(0,o.yg)("a",{parentName:"li",href:"https://doris.apache.org/docs/dev/lakehouse/multi-catalog/jdbc/"},"https://doris.apache.org/docs/dev/lakehouse/multi-catalog/jdbc/")))))),(0,o.yg)("li",{parentName:"ul"},(0,o.yg)("p",{parentName:"li"},"Data Privilege Control"),(0,o.yg)("ul",{parentName:"li"},(0,o.yg)("li",{parentName:"ul"},"Supported authorization for Hive Catalog via Apache Range; Supported extensible privilege authorization plug-ins to allow user-defined authorization method on any catalog.",(0,o.yg)("ul",{parentName:"li"},(0,o.yg)("li",{parentName:"ul"},"Doc: ",(0,o.yg)("a",{parentName:"li",href:"https://doris.apache.org/docs/dev/lakehouse/multi-catalog/hive/"},"https://doris.apache.org/docs/dev/lakehouse/multi-catalog/hive/")))))),(0,o.yg)("li",{parentName:"ul"},(0,o.yg)("p",{parentName:"li"},"Performance improvement"),(0,o.yg)("ul",{parentName:"li"},(0,o.yg)("li",{parentName:"ul"},(0,o.yg)("p",{parentName:"li"},"Accelerated reading of flat tables and large numbers of small files; improved query speed by dozens of times; reduced reading overhead by techniques such as full loading of small files, I/O coalescing, and data pre-fetching.")),(0,o.yg)("li",{parentName:"ul"},(0,o.yg)("p",{parentName:"li"},"Increased query speed on ORC/Parquet files by 100% compared to version 1.2.")),(0,o.yg)("li",{parentName:"ul"},(0,o.yg)("p",{parentName:"li"},(0,o.yg)("img",{src:t(19763).A,width:"1482",height:"504"}))),(0,o.yg)("li",{parentName:"ul"},(0,o.yg)("p",{parentName:"li"},"Supported local caching of lakehouse data. Users can cache data from HDFS or object storage in local disks to speed up queries involving the same data. In the case of cache hits, querying lakehouse data will be as quick as querying internal data in Apache Doris."),(0,o.yg)("ul",{parentName:"li"},(0,o.yg)("li",{parentName:"ul"},"Doc: ",(0,o.yg)("a",{parentName:"li",href:"https://doris.apache.org/docs/dev/lakehouse/filecache/"},"https://doris.apache.org/docs/dev/lakehouse/filecache/")))),(0,o.yg)("li",{parentName:"ul"},(0,o.yg)("p",{parentName:"li"},"Supported collection of external table statistics. Users can obtain statistics about their specified external tables via the Analyze statement so that Nereids can fine-tune the query plan for complicated SQLs more efficiently. "),(0,o.yg)("ul",{parentName:"li"},(0,o.yg)("li",{parentName:"ul"},"Doc: ",(0,o.yg)("a",{parentName:"li",href:"https://doris.apache.org/docs/dev/lakehouse/multi-catalog/"},"https://doris.apache.org/docs/dev/lakehouse/multi-catalog/")))),(0,o.yg)("li",{parentName:"ul"},(0,o.yg)("p",{parentName:"li"},"Improved data writeback speed of JDBC Catalog. By way of PrepareStmt and other batch methods, users can write data back to relational databases such as MySQL and Oracle via the INSERT INTO command much faster.")),(0,o.yg)("li",{parentName:"ul"},(0,o.yg)("p",{parentName:"li"},(0,o.yg)("img",{src:t(69002).A,width:"1280",height:"805"}))),(0,o.yg)("li",{parentName:"ul"})))),(0,o.yg)("h1",{id:"a-unified-platform-for-multiple-analytic-workloads"},"A Unified Platform for Multiple Analytic Workloads"),(0,o.yg)("h2",{id:"a-self-adaptive-parallel-execution-model"},"A self-adaptive parallel execution model"),(0,o.yg)("p",null,"With the expansion of user base, Apache Doris is undertaking more and more analytic workloads while handling larger and larger data sizes. A big challenge is to ensure high execution efficiency for all these workloads and avoid resource preemption. "),(0,o.yg)("p",null,"Older versions of Apache Doris had a volcano-based execution engine. To give full play to all the machines and cores, users had to set the execution concurrency themselves (for example, change ",(0,o.yg)("inlineCode",{parentName:"p"},"parallel_fragment_exec_instance_num")," from the default value 1 to 8 or 16). But problems existed when Doris had to deal with multiple queries at the same time:"),(0,o.yg)("ul",null,(0,o.yg)("li",{parentName:"ul"},"Instance operators took up the threads and the query tasks didn't get executed. Logical deadlocks occurred. "),(0,o.yg)("li",{parentName:"ul"},"Instance threads were scheduled by a system scheduling mechanism and the switching between threads brought extra overheads."),(0,o.yg)("li",{parentName:"ul"},"When processing various analytic workloads, instance threads might fight for CPU resources so queries and tenants might interrupt each other.")),(0,o.yg)("p",null,"Apache 2.0 brought in a Pipeline execution engine to solve these problems. In this engine, the execution of queries are driven by data. The blocking operators in all the query execution processes are split into pipelines. Whether a pipeline gets an execution thread depends on whether its data is ready. As a result:"),(0,o.yg)("ul",null,(0,o.yg)("li",{parentName:"ul"},"The Pipeline execution model splits the query execution plan into pipeline tasks based on the blocking logic and asynchronizes the blocking operations, so no instance is going to take up a single thread for a long time."),(0,o.yg)("li",{parentName:"ul"},"It allows users to manage system resources more flexibly. They can take different scheduling strategies to assign CPU resources to various queries and tenants."),(0,o.yg)("li",{parentName:"ul"},"It also pools data from all buckets, so the number of instances will not be limited by the number of buckets, and the system doesn't have to frequently create and destroy threads.")),(0,o.yg)("p",null,"With the Pipeline execution engine, Apache Doris is going to offer ",(0,o.yg)("strong",{parentName:"p"},"faster queries and higher stability in hybrid workload scenarios"),"."),(0,o.yg)("p",null,"Doc:",(0,o.yg)("a",{parentName:"p",href:"https://doris.apache.org/docs/dev/query-acceleration/pipeline-execution-engine/"}," https://doris.apache.org/docs/dev/query-acceleration/pipeline-execution-engine/")),(0,o.yg)("p",null,"The Pipeline execution engine is enabled by default in Apache Doris 2.0: ",(0,o.yg)("inlineCode",{parentName:"p"},"Set enable_pipeline_engine = true"),". ",(0,o.yg)("inlineCode",{parentName:"p"},"parallel_pipeline_task_num")," represents the number of pipeline tasks that are parallelly executed in SQL queries. The default value of it is ",(0,o.yg)("inlineCode",{parentName:"p"},"0"),", and users can change the value as they need. For those who are upgrading to Apache Doris 2.0 from an older version, it is recommended to set the value of ",(0,o.yg)("inlineCode",{parentName:"p"},"parallel_pipeline_task_num")," to that of ",(0,o.yg)("inlineCode",{parentName:"p"},"parallel_fragment_exec_instance_num")," in the old version."),(0,o.yg)("h2",{id:"workload-management"},"Workload management"),(0,o.yg)("p",null,"Based on the Pipeline execution engine, Apache Doris 2.0 divides the workloads into Workload Groups for fine-grained management of memory and CPU resources."),(0,o.yg)("p",null,"By relating a query to a Workload Group, users can limit the percentage of memory and CPU resources used by one query on the backend nodes and configure memory soft limits for resource groups. When there is a cluster resource shortage, the system will kill the largest memory-consuming tasks; when there is sufficient cluster resources, once the Workload Groups use more resources than expected, the idle cluster resources will be shared among multiple Workload Groups and the system memory will still be used to ensure stable execution of queries."),(0,o.yg)("pre",null,(0,o.yg)("code",{parentName:"pre",className:"language-SQL"},'create workload group if not exists etl_group\nproperties (\n    "cpu_share"="10",\n    "memory_limit"="30%",\n    "max_concurrency" = "10",\n    "max_queue_size" = "20",\n    "queue_timeout" = "3000"\n);\n')),(0,o.yg)("p",null,"You can check the existing Workload Group via the ",(0,o.yg)("inlineCode",{parentName:"p"},"Show")," command:"),(0,o.yg)("p",null,(0,o.yg)("img",{src:t(17985).A,width:"1004",height:"584"})),(0,o.yg)("h2",{id:"query-queue"},"Query queue"),(0,o.yg)("p",null,"When creating a Workload Group, users can set a maximum query number for it. Queries beyond that limit will wait for execution in the query queue."),(0,o.yg)("ul",null,(0,o.yg)("li",{parentName:"ul"},(0,o.yg)("inlineCode",{parentName:"li"},"max_concurrency"),": the maximum number of queries allowed by the current Workload Group"),(0,o.yg)("li",{parentName:"ul"},(0,o.yg)("inlineCode",{parentName:"li"},"max_queue_size"),": the length of query queue. After all spots are filled, any new queries will be rejected."),(0,o.yg)("li",{parentName:"ul"},(0,o.yg)("inlineCode",{parentName:"li"},"queue_timeout"),": the waiting time of a query in a queue, measured in miliseconds. If a queue has been waiting for longer than this limit, it will be rejected.")),(0,o.yg)("p",null,(0,o.yg)("img",{src:t(28920).A,width:"1280",height:"748"})),(0,o.yg)("p",null,"Doc: ",(0,o.yg)("a",{parentName:"p",href:"https://doris.apache.org/docs/dev/admin-manual/workload-group/"},"https://doris.apache.org/docs/dev/admin-manual/workload-group/")),(0,o.yg)("h1",{id:"elastic-scaling-and-storage-compute-separation"},"Elastic Scaling and Storage-Compute Separation"),(0,o.yg)("p",null,"When it comes to computation and storage resources, what do users want?"),(0,o.yg)("ul",null,(0,o.yg)("li",{parentName:"ul"},(0,o.yg)("strong",{parentName:"li"},"Elastic scaling of computation resources"),": Scale up resources quickly in peak times to increase efficiency and scale down in valley times to reduce costs."),(0,o.yg)("li",{parentName:"ul"},(0,o.yg)("strong",{parentName:"li"},"Lower storage costs"),": Use low-cost storage media and separate storage from computation."),(0,o.yg)("li",{parentName:"ul"},(0,o.yg)("strong",{parentName:"li"},"Separation of workloads"),": Isolate the computation resources of different workloads to avoid preemption."),(0,o.yg)("li",{parentName:"ul"},(0,o.yg)("strong",{parentName:"li"},"Unified management of data"),": Simply manage catalogs and data in one place.")),(0,o.yg)("p",null,"To separate storage and computation is a way to realize elastic scaling of resources, but it demands more efforts in maintaining storage stability, which determines the stability and continuity of OLAP services. To ensure storage stability, we introduced mechanisms including cache management, computation resource management, and garbage collection."),(0,o.yg)("p",null," In this respect, we divide our users into three groups after investigation:"),(0,o.yg)("ol",null,(0,o.yg)("li",{parentName:"ol"},"Users with no need for resource scaling"),(0,o.yg)("li",{parentName:"ol"},"Users requiring resource scaling, low storage costs, and workload separation from Apache Doris"),(0,o.yg)("li",{parentName:"ol"},"Users who already have a stable large-scale storage system and thus require an advanced compute-storage-separated architecture for efficient resource scaling")),(0,o.yg)("p",null,"Apache Doris 2.0 provides two solutions to address the needs of the first two types of users."),(0,o.yg)("ol",null,(0,o.yg)("li",{parentName:"ol"},(0,o.yg)("p",{parentName:"li"},(0,o.yg)("strong",{parentName:"p"},"Compute nodes"),". We introduced stateless compute nodes in version 2.0. Unlike the mix nodes, the compute nodes do not save any data and are not involved in workload balancing of data tablets during cluster scaling. Thus, they are able to quickly join the cluster and share the computing pressure during peak times. In addition, in data lakehouse analysis, these nodes will be the first ones to execute queries on remote storage (HDFS/S3) so there will be no resource competition between internal tables and external tables."),(0,o.yg)("ol",{parentName:"li"},(0,o.yg)("li",{parentName:"ol"},"Doc: ",(0,o.yg)("a",{parentName:"li",href:"https://doris.apache.org/docs/dev/advanced/compute_node/"},"https://doris.apache.org/docs/dev/advanced/compute_node/")))),(0,o.yg)("li",{parentName:"ol"},(0,o.yg)("p",{parentName:"li"},(0,o.yg)("strong",{parentName:"p"},"Hot-cold data separation"),". Hot/cold data refers to data that is frequently/seldom accessed, respectively. Generally, it makes more sense to store cold data in low-cost storage. Older versions of Apache Doris support lifecycle management of table partitions: As hot data cooled down, it would be moved from SSD to HDD. However, data was stored with multiple replicas on HDD, which was still a waste. Now, in Apache Doris 2.0, cold data can be stored in object storage, which is even cheaper and allows single-copy storage. That reduces the storage costs by 70% and cuts down the computation and network overheads that come with storage. "),(0,o.yg)("ol",{parentName:"li"},(0,o.yg)("li",{parentName:"ol"},(0,o.yg)("p",{parentName:"li"},"Doc: ",(0,o.yg)("a",{parentName:"p",href:"https://doris.apache.org/docs/dev/advanced/cold_hot_separation/"},"https://doris.apache.org/docs/dev/advanced/cold_hot_separation/"))),(0,o.yg)("li",{parentName:"ol"},(0,o.yg)("p",{parentName:"li"},"Read more: ",(0,o.yg)("a",{parentName:"p",href:"https://doris.apache.org/blog/HCDS/"},"https://doris.apache.org/blog/HCDS/")))))),(0,o.yg)("p",null,(0,o.yg)("img",{src:t(46927).A,width:"1280",height:"658"})),(0,o.yg)("p",null,"For the third type of users, the SelectDB team is going to contribute the SelectDB Cloud Compute-Storage-Separation solution to the Apache Doris project. The performance and stability of this solution has stood the test of hundreds of companies in their production environment. The merging of the solution to Apache Doris is underway."),(0,o.yg)("h1",{id:"faster-stabler-and-smarter-data-writing"},"Faster, Stabler, and Smarter Data Writing"),(0,o.yg)("h2",{id:"higher-speed-in-data-writing"},"Higher speed in data writing"),(0,o.yg)("p",null,"As part of our continuing effort to strengthen the real-time analytic capability of Apache Doris, we have improved the end-to-end real-time data writing of version 2.0:"),(0,o.yg)("ul",null,(0,o.yg)("li",{parentName:"ul"},"When tested with the TPC-H 100G standard dataset, Apache Doris 2.0 reached a data loading speed of over 550MB/s for a single node with its ",(0,o.yg)("inlineCode",{parentName:"li"},"insert into select")," method, which was a ",(0,o.yg)("strong",{parentName:"li"},"200% increase"),". In triple-replica import of 144G data, it delivered a single-node data loading speed of 121MB/s via the Stream Load method, ",(0,o.yg)("strong",{parentName:"li"},"up 400%")," in system throughput. "),(0,o.yg)("li",{parentName:"ul"},"We have introduced single-replica data loading into version 2.0. Apache Doris guarantees high data reliability and system availability by its multi-replica mechanism, but multi-replica writing also multiplies the CPU and memory usage. Now Apache Doris only writes one data copy to the memory, and then it synchronizes the storage file to other copies, so it can save a lot of the computation resources. In large data ingestion, the single-replica loading method can accelerate data ingestion by 200%.")),(0,o.yg)("h2",{id:"greater-stability-in-high-concurrency-data-writing"},"Greater stability in high-concurrency data writing"),(0,o.yg)("p",null,"The merging of small files, write amplification, and the consequential disk I/O and CPU overheads are often the sources of system instability. Hence, we introduced Vertical Compaction and Segment Compaction in version 2.0 to eliminate OOM errors in compaction and avoid the generation of too many segment files during data writing. After such improvements, Apache Doris can write data 50% faster while using only 10% of the memory that it previously used."),(0,o.yg)("p",null,"Read more: ",(0,o.yg)("a",{parentName:"p",href:"https://doris.apache.org/blog/Compaction"},"https://doris.apache.org/blog/Compaction")),(0,o.yg)("h2",{id:"auto-synchronization-of-table-schema"},"Auto-synchronization of table schema"),(0,o.yg)("p",null,"The latest Flink-Doris-Connector allows users to synchronize the whole database (such as MySQL) to Apache Doris by one simple step. According to our test results, one single synchronization task can undertake the real-time concurrent writing of thousands of tables. Apache Doris has automated the updating of upstream table schema and data so users no longer need to go through a complicated synchronization procedure. Also, changes in the upstream data schema will be automatically captured and dynamically updated to Apache Doris in a seamless manner."),(0,o.yg)("h1",{id:"support-for-partial-column-update-in-the-unique-key-model"},"Support for Partial Column Update in the Unique Key Model"),(0,o.yg)("p",null,"Apache Doris 1.2 realized real-time writing and quick query execution at the same time with the Merge-on-Write mechanism in the Unique Key Model. Now in version 2.0, we have further improved the Unique Key Model. It supports partial column update so when ingesting multiple source tables, users don't have to merge them into one flat table in advance."),(0,o.yg)("p",null,'On this basis, we have also enhanced the capability of Merge-on-Write. Apache Doris 2.0 is 50% faster than Apache Doris 1.2 in large data writing and 10 times faster in high-concurrency data writing. A parallel processing mechanism is available to avoid "publish timeout" (E-3115), and a more efficient compaction mechanism is in place to prevent "too many versions" (E-235). All this allows users to replace Merge-on-Read with Merge-on-Write in more scenarios. Plus, partial column update makes the execution of the UPDATE and DELETE statements less costly.'),(0,o.yg)("p",null,"The execution of partial column update is simple."),(0,o.yg)("p",null,(0,o.yg)("strong",{parentName:"p"},"Example (Stream Load):")),(0,o.yg)("p",null,"Suppose that you have the following table schema:"),(0,o.yg)("pre",null,(0,o.yg)("code",{parentName:"pre",className:"language-Python"},"mysql> desc user_profile;\n+------------------+-----------------+------+-------+---------+-------+\n| Field            | Type            | Null | Key   | Default | Extra |\n+------------------+-----------------+------+-------+---------+-------+\n| id               | INT             | Yes  | true  | NULL    |       |\n| name             | VARCHAR(10)     | Yes  | false | NULL    | NONE  |\n| age              | INT             | Yes  | false | NULL    | NONE  |\n| city             | VARCHAR(10)     | Yes  | false | NULL    | NONE  |\n| balance          | DECIMALV3(9, 0) | Yes  | false | NULL    | NONE  |\n| last_access_time | DATETIME        | Yes  | false | NULL    | NONE  |\n+------------------+-----------------+------+-------+---------+-------+\n")),(0,o.yg)("p",null,'If you need to batch update the "balance" and "last access time" fields for the last 10 seconds, you can put the updates in a CSV file as follows:'),(0,o.yg)("pre",null,(0,o.yg)("code",{parentName:"pre",className:"language-Python"},"1,500,2023-07-03 12:00:01\n3,23,2023-07-03 12:00:02\n18,9999999,2023-07-03 12:00:03\n")),(0,o.yg)("p",null,"Then, add a header ",(0,o.yg)("inlineCode",{parentName:"p"},"partial_columns:true")," and specify the relevant column names in the the Stream Load command:"),(0,o.yg)("pre",null,(0,o.yg)("code",{parentName:"pre",className:"language-Python"},'curl  --location-trusted -u root: -H "partial_columns:true" -H "column_separator:," -H "columns:id,balance,last_access_time" -T /tmp/test.csv http://127.0.0.1:48037/api/db1/user_profile/_stream_load\n')),(0,o.yg)("h1",{id:"farewell-to-oom"},"Farewell to OOM"),(0,o.yg)("p",null,"Memory management might not be on the priority list of users until there is a memory problem. However, real-life analytics is full of extreme cases that are challenging memory stability. In large computation tasks, OOM errors often cause queries to fail or even result in a backend downtime."),(0,o.yg)("p",null,"To solve this, we have improved the memory data structures, reconstructed the MemTrackers, and introduced soft memory limits for queries and a GC mechansim to cope with process memory overflow. The new memory management mechanism allocates, caculates, and monitors memory more efficiently. According to benchmark tests, pressure tests, and user feedback, it eliminates most memory hotspots and backend downtime. Even if there is an OOM error, users can locate the question spot based on the logs and take actions accordingly. "),(0,o.yg)("p",null,"In a word, Apache Doris 2.0 is able to handle complicated computation and large ETL/ELT operations with greater system stability."),(0,o.yg)("p",null,"Read more: ",(0,o.yg)("a",{parentName:"p",href:"https://doris.apache.org/blog/Memory_Management/"},"https://doris.apache.org/blog/Memory_Management/")),(0,o.yg)("h1",{id:"support-for-kubernetes-deployment"},"Support for Kubernetes Deployment"),(0,o.yg)("p",null,"Older versions of Apache Doris communicate based on IP, so any host failure in Kubernetes deployment that causes a POD IP drift will lead to cluster unavailability. Now, version 2.0 supports FQDN. That means the failed Doris nodes can recover automatically without human intervention, which lays the foundation for Kubernetes deployment and elastic scaling.  "),(0,o.yg)("p",null,"Doc: ",(0,o.yg)("a",{parentName:"p",href:"https://doris.apache.org/docs/dev/install/k8s-deploy/"},"https://doris.apache.org/docs/dev/install/k8s-deploy/")),(0,o.yg)("h1",{id:"support-for-cross-cluster-replication"},"Support for Cross-Cluster Replication"),(0,o.yg)("p",null,"For data synchronization across multiple clusters, Apache Doris used to require regular data backup and restoration via the Backup/Restore command. The process required intermediate storage and came with high latency. Apache Doris 2.0 Beta supports cross-cluster replication (CCR), which automates this process. Data changes at the database/table level in the source cluster will be synchronized to the target cluster. This feature allows for higher availability of data, read/write workload separation, and cross-data-center replication. "),(0,o.yg)("h1",{id:"behavior-change"},"Behavior Change"),(0,o.yg)("ul",null,(0,o.yg)("li",{parentName:"ul"},"1.2-lts can be scrolled and upgraded to 2.0-Beta, while 2.0-Alpha can be shut down and upgraded to 2.0-Beta"),(0,o.yg)("li",{parentName:"ul"},"Query optimizer switch default on ",(0,o.yg)("inlineCode",{parentName:"li"},"enable_ Nereids_ Planner=true"),";"),(0,o.yg)("li",{parentName:"ul"},"Non vectorized code has been removed from the system, so 'enable'",(0,o.yg)("em",{parentName:"li"}," Vectorized")," The 'engine' parameter will no longer be effective;"),(0,o.yg)("li",{parentName:"ul"},"Add Parameter ",(0,o.yg)("inlineCode",{parentName:"li"},"enable_ Single_ Replica_ Compaction"),";"),(0,o.yg)("li",{parentName:"ul"},"By default, use datev2, datetimev2, and decimalv3 to create tables, but do not support creating tables with datev1, datetimev1, and decimalv2;"),(0,o.yg)("li",{parentName:"ul"},"Decimalv3 is used by default in JDBC and Iceberg Catalog;"),(0,o.yg)("li",{parentName:"ul"},"Add AGG for date type_ State;"),(0,o.yg)("li",{parentName:"ul"},"Remove the cluster column from the backend table;"),(0,o.yg)("li",{parentName:"ul"},"For better compatibility with BI tools, when displaying create tables, display date v2 and date timev2 as date and date time."),(0,o.yg)("li",{parentName:"ul"},"Added max in BE startup script_ Check for openfiles and swap, so if the system configuration is not reasonable, be may fail to start;"),(0,o.yg)("li",{parentName:"ul"},"Prohibit logging in without a password when accessing FE from localhost;"),(0,o.yg)("li",{parentName:"ul"},"When there is a Multi Catalog in the system, querying the information schema only displays data from the internal catalog by default;"),(0,o.yg)("li",{parentName:"ul"},"Limited the depth of the expression tree, defaulting to 200;"),(0,o.yg)("li",{parentName:"ul"},"The array string returns a single quotation mark to a double quotation mark;"),(0,o.yg)("li",{parentName:"ul"},"Rename Doris' process names to DorisFE and DorisBE;")),(0,o.yg)("h1",{id:"apache-doris-20-ga-is-just-around-the-corner"},"Apache Doris 2.0 GA is just around the corner!"),(0,o.yg)("p",null,"During the recent one and a half months after Apache Doris 2.0 Alpha was released, we have been honing the key features and perfectionating Doris according to the test feedback from our hundreds of enterprise users. Now, Apache Doris 2.0 Beta is more mature and stable, and will surely provide better user experience."),(0,o.yg)("p",null,"If you have any questions when investigating, testing, and deploying Apache Doris, please find us on ",(0,o.yg)("a",{parentName:"p",href:"https://t.co/ZxJuNJHXb2"},"Slack"),". Our developers will be happy to provide targeted support. "),(0,o.yg)("p",null,"In addition to the foregoing functionality, some new features are undergoing the final debugging and will be available in Apache Doris 2.0 GA and the subsequent versions, including multi-table materialized view, expression support in single-table materialized view, dynamic schema table, and Doris binlog. We will keep you informed of our progress."))}p.isMDXComponent=!0},34894:(e,a,t)=>{t.d(a,{A:()=>n});const n=t.p+"assets/images/Beta_1-01156d489e9907a7bc6c424d0bcd41c9.png"},37317:(e,a,t)=>{t.d(a,{A:()=>n});const n=t.p+"assets/images/Beta_2-27298a5aa9563d436b26bd4a1249a448.png"},19804:(e,a,t)=>{t.d(a,{A:()=>n});const n=t.p+"assets/images/Beta_3-6c3bbd4d2c6e6a54db40297c2154a9da.png"},19763:(e,a,t)=>{t.d(a,{A:()=>n});const n=t.p+"assets/images/Beta_4-e1924c7412b17a816e97ecdeeb713882.png"},69002:(e,a,t)=>{t.d(a,{A:()=>n});const n=t.p+"assets/images/Beta_5-95aecbdc3c39d6f48eb9f788f3e4e1d0.png"},17985:(e,a,t)=>{t.d(a,{A:()=>n});const n=t.p+"assets/images/Beta_6-423a3c45a27871716e34b99154ea379b.png"},28920:(e,a,t)=>{t.d(a,{A:()=>n});const n=t.p+"assets/images/Beta_7-256b2773c99ae70ef91ed831d29e8168.png"},46927:(e,a,t)=>{t.d(a,{A:()=>n});const n=t.p+"assets/images/Beta_8-b8215d5e418866f7d90ee3d52da467b5.png"}}]);