"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([[48631],{15680:(e,a,t)=>{t.d(a,{xA:()=>g,yg:()=>m});var n=t(96540);function r(e,a,t){return a in e?Object.defineProperty(e,a,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[a]=t,e}function i(e,a){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);a&&(n=n.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),t.push.apply(t,n)}return t}function o(e){for(var a=1;a<arguments.length;a++){var t=null!=arguments[a]?arguments[a]:{};a%2?i(Object(t),!0).forEach((function(a){r(e,a,t[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(t,a))}))}return e}function s(e,a){if(null==e)return{};var t,n,r=function(e,a){if(null==e)return{};var t,n,r={},i=Object.keys(e);for(n=0;n<i.length;n++)t=i[n],a.indexOf(t)>=0||(r[t]=e[t]);return r}(e,a);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)t=i[n],a.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var l=n.createContext({}),u=function(e){var a=n.useContext(l),t=a;return e&&(t="function"==typeof e?e(a):o(o({},a),e)),t},g=function(e){var a=u(e.components);return n.createElement(l.Provider,{value:a},e.children)},c="mdxType",d={inlineCode:"code",wrapper:function(e){var a=e.children;return n.createElement(n.Fragment,{},a)}},p=n.forwardRef((function(e,a){var t=e.components,r=e.mdxType,i=e.originalType,l=e.parentName,g=s(e,["components","mdxType","originalType","parentName"]),c=u(t),p=r,m=c["".concat(l,".").concat(p)]||c[p]||d[p]||i;return t?n.createElement(m,o(o({ref:a},g),{},{components:t})):n.createElement(m,o({ref:a},g))}));function m(e,a){var t=arguments,r=a&&a.mdxType;if("string"==typeof e||r){var i=t.length,o=new Array(i);o[0]=p;var s={};for(var l in a)hasOwnProperty.call(a,l)&&(s[l]=a[l]);s.originalType=e,s[c]="string"==typeof e?e:r,o[1]=s;for(var u=2;u<i;u++)o[u]=t[u];return n.createElement.apply(null,o)}return n.createElement.apply(null,t)}p.displayName="MDXCreateElement"},90645:(e,a,t)=>{t.r(a),t.d(a,{assets:()=>l,contentTitle:()=>o,default:()=>d,frontMatter:()=>i,metadata:()=>s,toc:()=>u});var n=t(58168),r=(t(96540),t(15680));const i={title:"Step-by-step guide to building a high-performing risk data mart",summary:"The key step is to leverage the Multi Catalog feature of Apache Doris to unify the heterogenous data sources. This removed a lot of our performance bottlenecks.",date:"2023-04-20",author:"Jacob Chow",tags:["Best Practice"],image:"/images/step-by-step-guide-to-building-a-high-performing-risk-data-mart.png"},o=void 0,s={permalink:"/zh-CN/blog/Step-by-step-Guide-to-Building-a-High-Performing-Risk-Data-Mart",source:"@site/blog/Step-by-step-Guide-to-Building-a-High-Performing-Risk-Data-Mart.md",title:"Step-by-step guide to building a high-performing risk data mart",description:"\x3c!--",date:"2023-04-20T00:00:00.000Z",formattedDate:"2023\u5e744\u670820\u65e5",tags:[{label:"Best Practice",permalink:"/zh-CN/blog/tags/best-practice"}],hasTruncateMarker:!1,authors:[{name:"Jacob Chow"}],frontMatter:{title:"Step-by-step guide to building a high-performing risk data mart",summary:"The key step is to leverage the Multi Catalog feature of Apache Doris to unify the heterogenous data sources. This removed a lot of our performance bottlenecks.",date:"2023-04-20",author:"Jacob Chow",tags:["Best Practice"],image:"/images/step-by-step-guide-to-building-a-high-performing-risk-data-mart.png"},prevItem:{title:"Zipping up the lambda architecture for 40% faster performance",permalink:"/zh-CN/blog/Zipping-up-the-Lambda-Architecture-for-40-Percent-Faster-Performance"},nextItem:{title:"How We increased database query concurrency by 20 times",permalink:"/zh-CN/blog/How-We-Increased-Database-Query-Concurrency-by-20-Times"}},l={authorsImageUrls:[void 0]},u=[{value:"Risk Data Mart:  Apache Hive",id:"risk-data-mart--apache-hive",level:2},{value:"What are Slowing Down Our Queries?",id:"what-are-slowing-down-our-queries",level:3},{value:"A Unified Query Gateway",id:"a-unified-query-gateway",level:2},{value:"<strong>Cluster Monitoring in Production Environment</strong>",id:"cluster-monitoring-in-production-environment",level:3},{value:"Guide to Faster Data Integration",id:"guide-to-faster-data-integration",level:2},{value:"Summary",id:"summary",level:2}],g={toc:u},c="wrapper";function d(e){let{components:a,...i}=e;return(0,r.yg)(c,(0,n.A)({},g,i,{components:a,mdxType:"MDXLayout"}),(0,r.yg)("p",null,"Pursuing data-driven management at a consumer financing company, we aim to serve four needs in our data platform development: monitoring and alerting, query and analysis, dashboarding, and data modeling. For these purposes, we built our data processing architecture based on Greenplum and CDH. The most essential part of it is the risk data mart. "),(0,r.yg)("h2",{id:"risk-data-mart--apache-hive"},"Risk Data Mart:  Apache Hive"),(0,r.yg)("p",null,"I will walk you through how the risk data mart works following the data flow: "),(0,r.yg)("ol",null,(0,r.yg)("li",{parentName:"ol"},"Our ",(0,r.yg)("strong",{parentName:"li"},"business data")," is imported into ",(0,r.yg)("strong",{parentName:"li"},"Greenplum")," for real-time analysis to generate BI reports. Part of this data also goes into Apache Hive for queries and modeling analysis. "),(0,r.yg)("li",{parentName:"ol"},"Our ",(0,r.yg)("strong",{parentName:"li"},"risk control variables")," are updated into ",(0,r.yg)("strong",{parentName:"li"},"Elasticsearch")," in real time via message queues, while Elasticsearch ingests data into Hive for analysis, too."),(0,r.yg)("li",{parentName:"ol"},"The ",(0,r.yg)("strong",{parentName:"li"},"risk management decision data")," is passed from ",(0,r.yg)("strong",{parentName:"li"},"MongoDB")," to Hive for risk control analysis and modeling.")),(0,r.yg)("p",null,"So these are the three data sources of our risk data mart."),(0,r.yg)("p",null,(0,r.yg)("img",{alt:"risk-data-mart",src:t(48033).A,width:"826",height:"486"})),(0,r.yg)("p",null,"This whole architecture is built with CDH 6.0. The workflows in it can be divided into real-time data streaming and offline risk analysis."),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("strong",{parentName:"li"},"Real-time data streaming"),": Real-time data from Apache Kafka will be cleaned by Apache Flink, and then written into Elasticsearch. Elasticsearch will aggregate part of the data it receives and send it for reference in risk management. "),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("strong",{parentName:"li"},"Offline risk analysis"),": Based on the CDH solution and utilizing Sqoop, we ingest data from Greenplum in an offline manner. Then we put this data together with the third-party data from MongoDB. Then, after data cleaning, we pour all this data into Hive for daily batch processing and data queries.")),(0,r.yg)("p",null,"To give a brief overview, these are the components that support the four features of our data processing platform:"),(0,r.yg)("p",null,(0,r.yg)("img",{alt:"features-of-a-data-processing-platform",src:t(33802).A,width:"1002",height:"606"})),(0,r.yg)("p",null,"As you see, Apache Hive is central to this architecture. But in practice, it takes minutes for Apache Hive to execute analysis, so our next step is to increase query speed."),(0,r.yg)("h3",{id:"what-are-slowing-down-our-queries"},"What are Slowing Down Our Queries?"),(0,r.yg)("ol",null,(0,r.yg)("li",{parentName:"ol"},(0,r.yg)("strong",{parentName:"li"},"Huge data volume in external tables"))),(0,r.yg)("p",null,"Our Hive-based data mart is now carrying more than 300 terabytes of data. That's about 20,000 tables and 5 million fields. To put them all in external tables is maintenance-intensive. Plus, data ingestion can be a big headache."),(0,r.yg)("ol",null,(0,r.yg)("li",{parentName:"ol"},(0,r.yg)("strong",{parentName:"li"},"Big flat tables"))),(0,r.yg)("p",null,"Due to the complexity of the rule engine in risk management, our company invests a lot in the derivation of variables. In some dimensions, we have thousands of variables or even more. As a result, a few of the frequently used flat tables in Hive have over 3000 fields. So you can imagine how time consuming these queries can be."),(0,r.yg)("ol",null,(0,r.yg)("li",{parentName:"ol"},(0,r.yg)("strong",{parentName:"li"},"Unstable interface"))),(0,r.yg)("p",null,"Results produced by daily offline batch processing will be regularly sent to our Elasticsearch clusters. (The data volume in these updates is huge, and the call of interface can get expired.) This process might cause high I/O and introduce garbage collection jitter, and further leads to unstable interface services. "),(0,r.yg)("p",null,"In addition, since our risk control analysts and modeling engineers are using Hive with Spark, the expanding data architecture is also dragging down query performance."),(0,r.yg)("h2",{id:"a-unified-query-gateway"},"A Unified Query Gateway"),(0,r.yg)("p",null,"We wanted a unified gateway to manage our heterogenous data sources. That's why we introduced Apache Doris."),(0,r.yg)("p",null,(0,r.yg)("img",{alt:"unified-query-gateway",src:t(72659).A,width:"1716",height:"1094"})),(0,r.yg)("p",null,"But doesn't that make things even more complicated? Actually, no."),(0,r.yg)("p",null,"We can connect various data sources to Apache Doris and simply conduct queries on it. This is made possible by the ",(0,r.yg)("strong",{parentName:"p"},"Multi-Catalog")," feature of Apache Doris: It can interface with various data sources, including datalakes like Apache Hive, Apache Iceberg, and Apache Hudi, and databases like MySQL, Elasticsearch, and Greenplum. That happens to cover our toolkit. "),(0,r.yg)("p",null,"We create Elasticsearch Catalog and Hive Catalog in Apache Doris. These catalogs map to the external data in Elasticsearch and Hive, so we can conduct federated queries across these data sources using Apache Doris as a unified gateway. Also, we use the ",(0,r.yg)("a",{parentName:"p",href:"https://github.com/apache/doris-spark-connector"},"Spark-Doris-Connector")," to allow data communication between Spark and Doris. So basically, we replace Apache Hive with Apache Doris as the central hub of our data architecture. "),(0,r.yg)("p",null,(0,r.yg)("img",{alt:"Apache-Doris-as-center-of-data-architecture",src:t(17788).A,width:"1002",height:"608"})),(0,r.yg)("p",null,"How does that affect our data processing efficiency?"),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("strong",{parentName:"li"},"Monitoring & Alerting"),": This is about real-time data querying. We access our real-time data in Elasticsearch clusters using Elasticsearch Catalog in Apache Doris. Then we perform queries directly in Apache Doris. It is able to return results within seconds, as opposed to the minute-level response time when we used Hive."),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("strong",{parentName:"li"},"Query & Analysis"),": As I said, we have 20,000 tables in Hive so it wouldn't make sense to map all of them to external tables in Hive. That would mean a hell of maintenance. Instead, we utilize the Multi Catalog feature of Apache Doris 1.2. It enables data mapping at the catalog level, so we can simply create one Hive Catalog in Doris before we can conduct queries. This separates query operations from the daily batching processing workload in Hive, so there will be less resource conflict."),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("strong",{parentName:"li"},"Dashboarding"),': We use Tableau and Doris to provide dashboard services. This reduces the query response time to seconds and milliseconds, compared with the several minutes back in the "Tableau + Hive" days.'),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("strong",{parentName:"li"},"Modeling"),": We use Spark and Doris for aggregation modeling. The Spark-Doris-Connector allows mutual synchronization of data, so data from Doris can also be used in modeling for more accurate analysis.")),(0,r.yg)("h3",{id:"cluster-monitoring-in-production-environment"},(0,r.yg)("strong",{parentName:"h3"},"Cluster Monitoring in Production Environment")),(0,r.yg)("p",null,"We tested this new architecture in our production environment. We built two clusters."),(0,r.yg)("p",null,(0,r.yg)("strong",{parentName:"p"},"Configuration"),":"),(0,r.yg)("p",null,"Production cluster: 4 frontends + 8 backends, m5d.16xlarge"),(0,r.yg)("p",null,"Backup cluster: 4 frontends + 4 backends, m5d.16xlarge"),(0,r.yg)("p",null,"This is the monitoring board: "),(0,r.yg)("p",null,(0,r.yg)("img",{alt:"cluster-monitoring-board",src:t(677).A,width:"1280",height:"523"})),(0,r.yg)("p",null,"As is shown, the queries are fast. We expected that it would take at least 10 nodes but in real cases, we mainly conduct queries via Catalogs, so we can handle this with a relatively small cluster size. The compatibility is good, too. It doesn't rock the rest of our existing system."),(0,r.yg)("h2",{id:"guide-to-faster-data-integration"},"Guide to Faster Data Integration"),(0,r.yg)("p",null,"To accelerate the regular data ingestion from Hive to Apache Doris 1.2.2, we have a solution that goes as follows:"),(0,r.yg)("p",null,(0,r.yg)("img",{alt:"faster-data-integration",src:t(30318).A,width:"1280",height:"681"})),(0,r.yg)("p",null,(0,r.yg)("strong",{parentName:"p"},"Main components:")),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},"DolphinScheduler 3.1.4"),(0,r.yg)("li",{parentName:"ul"},"SeaTunnel 2.1.3")),(0,r.yg)("p",null,"With our current hardware configuration, we use the Shell script mode of DolphinScheduler and call the SeaTunnel script on a regular basis. This is the configuration file of the data synchronization tasks:"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-undefined"},'  env{\n  spark.app.name = "hive2doris-template"\n  spark.executor.instances = 10\n  spark.executor.cores = 5\n  spark.executor.memory = "20g"\n}\nspark {\n  spark.sql.catalogImplementation = "hive"\n}\nsource {\n  hive {\n    pre_sql = "select * from ods.demo_tbl where dt=\'2023-03-09\'"\n    result_table_name = "ods_demo_tbl"\n  }\n}\n \ntransform {\n}\n \nsink {\n  doris {\n      fenodes = "192.168.0.10:8030,192.168.0.11:8030,192.168.0.12:8030,192.168.0.13:8030"\n      user = root\n      password = "XXX"\n      database = ods\n      table = ods_demo_tbl\n      batch_size = 500000\n      max_retries = 1\n      interval = 10000\n      doris.column_separator = "\\t"\n    }\n}\n')),(0,r.yg)("p",null,"This solution consumes less resources and memory but brings higher performance in queries and data ingestion."),(0,r.yg)("ol",null,(0,r.yg)("li",{parentName:"ol"},(0,r.yg)("strong",{parentName:"li"},"Less storage costs"))),(0,r.yg)("p",null,(0,r.yg)("strong",{parentName:"p"},"Before"),": The original table in Hive had 500 fields. It was divided into partitions by day, with 150 million pieces of data per partition. It takes ",(0,r.yg)("strong",{parentName:"p"},"810G")," to store in HDFS."),(0,r.yg)("p",null,(0,r.yg)("strong",{parentName:"p"},"After"),": For data synchronization, we call Spark on YARN using SeaTunnel. It can be finished within 40 minutes, and the ingested data only takes up ",(0,r.yg)("strong",{parentName:"p"},"270G")," of storage space."),(0,r.yg)("ol",null,(0,r.yg)("li",{parentName:"ol"},(0,r.yg)("strong",{parentName:"li"},"Less memory usage & higher performance in queries"))),(0,r.yg)("p",null,(0,r.yg)("strong",{parentName:"p"},"Before"),": For a GROUP BY query on the foregoing table in Hive, it occupied 720 Cores and 1.44T in YARN, and took a response time of ",(0,r.yg)("strong",{parentName:"p"},"162 seconds"),". "),(0,r.yg)("p",null,(0,r.yg)("strong",{parentName:"p"},"After"),": We perform an aggregate query using Hive Catalog in Doris, ",(0,r.yg)("inlineCode",{parentName:"p"},"set exec_mem_limit=16G"),", and receive the result after ",(0,r.yg)("strong",{parentName:"p"},"58.531 seconds"),". We also try and put the table in Doris and conduct the same query in Doris itself, that only takes ",(0,r.yg)("strong",{parentName:"p"},"0.828 seconds"),"."),(0,r.yg)("p",null,"The corresponding statements are as follows:"),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},"Query in Hive, response time: 162 seconds")),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-SQL"},"select count(*),product_no   FROM ods.demo_tbl where dt='2023-03-09'\ngroup by product_no;\n")),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},"Query in Doris using Hive Catalog, response time: 58.531 seconds")),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-SQL"},"set exec_mem_limit=16G\uff1b\nselect count(*),product_no   FROM hive.ods.demo_tbl where dt='2023-03-09'\ngroup by product_no;\n")),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},"Query in Doris directly, response time: 0.828 seconds")),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-SQL"},"select count(*),product_no   FROM ods.demo_tbl where dt='2023-03-09'\ngroup by product_no;\n")),(0,r.yg)("ol",null,(0,r.yg)("li",{parentName:"ol"},(0,r.yg)("strong",{parentName:"li"},"Faster data ingestion"))),(0,r.yg)("p",null,(0,r.yg)("strong",{parentName:"p"},"Before"),": The original table in Hive had 40 fields. It was divided into partitions by day, with 1.1 billion pieces of data per partition. It takes ",(0,r.yg)("strong",{parentName:"p"},"806G")," to store in HDFS."),(0,r.yg)("p",null,(0,r.yg)("strong",{parentName:"p"},"After"),": For data synchronization, we call Spark on YARN using SeaTunnel. It can be finished within 11 minutes (100 million pieces per minute ), and the ingested data only takes up ",(0,r.yg)("strong",{parentName:"p"},"378G")," of storage space."),(0,r.yg)("p",null,(0,r.yg)("img",{alt:"faster-data-ingestion",src:t(75895).A,width:"1280",height:"463"})),(0,r.yg)("h2",{id:"summary"},"Summary"),(0,r.yg)("p",null,"The key step to building a high-performing risk data mart is to leverage the Multi Catalog feature of Apache Doris to unify the heterogenous data sources. This not only increases our query speed but also solves a lot of the problems coming with our previous data architecture."),(0,r.yg)("ol",null,(0,r.yg)("li",{parentName:"ol"},"Deploying Apache Doris allows us to decouple daily batch processing workloads with ad-hoc queries, so they don't have to compete for resources. This reduces the query response time from minutes to seconds."),(0,r.yg)("li",{parentName:"ol"},"We used to build our data ingestion interface based on Elasticsearch clusters, which could lead to garbage collection jitter when transferring large batches of offline data. When we stored the interface service dataset on Doris, no jitter was found during data writing and we were able to transfer 10 million rows within 10 minutes."),(0,r.yg)("li",{parentName:"ol"},"Apache Doris has been optimizing itself in many scenarios including flat tables. As far as we know, compared with ClickHouse, Apache Doris 1.2 is twice as fast in SSB-Flat-table benchmark and dozens of times faster in TPC-H benchmark."),(0,r.yg)("li",{parentName:"ol"},"In terms of cluster scaling and updating, we used to suffer from a big window of restoration time after configuration revision. But Doris supports hot swap and easy scaling out, so we can reboot nodes within a few seconds and minimize interruption to users caused by cluster scaling.")),(0,r.yg)("p",null,"(One last piece of advice for you: If you encounter any problems with deploying Apache Doris, don't hesitate to contact the Doris community for help, they and a bunch of SelectDB engineers will be more than happy to make your adaption journey quick and easy.)"))}d.isMDXComponent=!0},48033:(e,a,t)=>{t.d(a,{A:()=>n});const n=t.p+"assets/images/RDM_1-7e8b0a7061d967673ece1d403f03edd3.png"},33802:(e,a,t)=>{t.d(a,{A:()=>n});const n=t.p+"assets/images/RDM_2-1880ff586d295ecd43f0731f01124965.png"},72659:(e,a,t)=>{t.d(a,{A:()=>n});const n=t.p+"assets/images/RDM_3-89141f14a59c83d413d14f31fcf386f4.png"},17788:(e,a,t)=>{t.d(a,{A:()=>n});const n=t.p+"assets/images/RDM_4-e6af4e754989aed3aef02a357e7607ad.png"},677:(e,a,t)=>{t.d(a,{A:()=>n});const n=t.p+"assets/images/RDM_5-8a88d55e3ac69ac6be859a9c367b0c76.png"},30318:(e,a,t)=>{t.d(a,{A:()=>n});const n=t.p+"assets/images/RDM_6-946a2cf22287a5c16c7fc03d2a3e2c18.png"},75895:(e,a,t)=>{t.d(a,{A:()=>n});const n=t.p+"assets/images/RDM_7-aabcb97d311b9da69a1d8722339b633a.png"}}]);