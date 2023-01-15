"use strict";(self.webpackChunkselectdb_portal=self.webpackChunkselectdb_portal||[]).push([[71867],{3905:(e,t,a)=>{a.d(t,{Zo:()=>h,kt:()=>m});var i=a(67294);function o(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function r(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,i)}return a}function n(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?r(Object(a),!0).forEach((function(t){o(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,i,o=function(e,t){if(null==e)return{};var a,i,o={},r=Object.keys(e);for(i=0;i<r.length;i++)a=r[i],t.indexOf(a)>=0||(o[a]=e[a]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(i=0;i<r.length;i++)a=r[i],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(o[a]=e[a])}return o}var l=i.createContext({}),c=function(e){var t=i.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):n(n({},t),e)),a},h=function(e){var t=c(e.components);return i.createElement(l.Provider,{value:t},e.children)},d="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},p=i.forwardRef((function(e,t){var a=e.components,o=e.mdxType,r=e.originalType,l=e.parentName,h=s(e,["components","mdxType","originalType","parentName"]),d=c(a),p=o,m=d["".concat(l,".").concat(p)]||d[p]||u[p]||r;return a?i.createElement(m,n(n({ref:t},h),{},{components:a})):i.createElement(m,n({ref:t},h))}));function m(e,t){var a=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var r=a.length,n=new Array(r);n[0]=p;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[d]="string"==typeof e?e:o,n[1]=s;for(var c=2;c<r;c++)n[c]=a[c];return i.createElement.apply(null,n)}return i.createElement.apply(null,a)}p.displayName="MDXCreateElement"},63759:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>l,contentTitle:()=>n,default:()=>d,frontMatter:()=>r,metadata:()=>s,toc:()=>c});var i=a(87462),o=(a(67294),a(3905));const r={title:"Practice and Optimization of Apache Doris in Xiaomi",summary:"Xiaomi Group introduced Apache Doris in 2019. At present, Apache Doris has been widely used in dozens of business departments within Xiaomi. A set of data ecology with Apache Doris has been formed. This article is transcribed from an online meetup speech of the Doris community, aiming to share the practice of Apache Doris in Xiaomi.",date:"2022-12-08",author:"ZuoWei",tags:["Best Practice"]},n=void 0,s={permalink:"/blog/xiaomi_vector",source:"@site/blog/xiaomi_vector.md",title:"Practice and Optimization of Apache Doris in Xiaomi",description:"\x3c!--",date:"2022-12-08T00:00:00.000Z",formattedDate:"December 8, 2022",tags:[{label:"Best Practice",permalink:"/blog/tags/best-practice"}],truncated:!1,authors:[{name:"ZuoWei"}],frontMatter:{title:"Practice and Optimization of Apache Doris in Xiaomi",summary:"Xiaomi Group introduced Apache Doris in 2019. At present, Apache Doris has been widely used in dozens of business departments within Xiaomi. A set of data ecology with Apache Doris has been formed. This article is transcribed from an online meetup speech of the Doris community, aiming to share the practice of Apache Doris in Xiaomi.",date:"2022-12-08",author:"ZuoWei",tags:["Best Practice"]},prevItem:{title:"Best Practice in Kwai: Apache Doris on Elasticsearch",permalink:"/blog/BestPractice_Kwai"},nextItem:{title:"Apache Doris announced the official release of version 1.2.0",permalink:"/blog/release-1.2.0"}},l={authorsImageUrls:[void 0]},c=[{value:"Previous Architecture",id:"previous-architecture",level:2},{value:"Problem No.1: Scattered components",id:"problem-no1-scattered-components",level:3},{value:"Problem No.2: High resource consumption",id:"problem-no2-high-resource-consumption",level:3},{value:"New Choice",id:"new-choice",level:2},{value:"New Architecture Based on Apache Doris",id:"new-architecture-based-on-apache-doris",level:2},{value:"Query Performance Comparision between Apache Doris &amp; Spark SQL",id:"query-performance-comparision-between-apache-doris--spark-sql",level:2},{value:"Data Import",id:"data-import",level:2},{value:"How to write real-time data into Apache Doris:",id:"how-to-write-real-time-data-into-apache-doris",level:3},{value:"How to write offline data into Apache Doris:",id:"how-to-write-offline-data-into-apache-doris",level:3},{value:"Data Qurey",id:"data-qurey",level:2},{value:"A/B Test",id:"ab-test",level:2},{value:"Test before Launch",id:"test-before-launch",level:2},{value:"Single SQL Parrellel Query Test",id:"single-sql-parrellel-query-test",level:3},{value:"Optimization",id:"optimization",level:2},{value:"Optimization in Test 1",id:"optimization-in-test-1",level:3},{value:"Optimization in Test 2",id:"optimization-in-test-2",level:3},{value:"Optimization in Test 3",id:"optimization-in-test-3",level:3}],h={toc:c};function d(e){let{components:t,...r}=e;return(0,o.kt)("wrapper",(0,i.Z)({},h,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"Guide: Xiaomi Group introduced Apache Doris in 2019. At present, Apache Doris has been widely used in dozens of business departments within Xiaomi. A set of data ecology with Apache Doris has been formed. This article is transcribed from an online meetup speech of the Doris community, aiming to share the practice of Apache Doris in Xiaomi.")),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"Author: ZuoWei, OLAP Engineer, Xiaomi")),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"kv",src:a(49869).Z,width:"900",height:"383"})),(0,o.kt)("h1",{id:"about-xiaomi"},"About Xiaomi"),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://www.mi.com/global"},"Xiaomi Corporation")," (\u201cXiaomi\u201d or the \u201cGroup\u201d; HKG:1810), a consumer electronics and smart manufacturing company with smartphones and smart hardware connected by an Internet of Things (IoT) platform.  In 2021, Xiaomi's total revenue amounted to RMB328.3 billion(USD472,231,316,200), an increase of 33.5% year-over-year; Adjusted net profit was RMB22.0 billion(USD3,164,510,800), an increase of 69.5% year-over-year."),(0,o.kt)("p",null,"Due to the growing need of data analysis, Xiaomi Group introduced Apache Doris in 2019. As one of the earliest users of Apache Doris, Xiaomi Group has been deeply involved in the open-source community. After three years of development, Apache Doris has been widely used in dozens of business departments within Xiaomi, such as Advertising, New Retail, Growth Analysis, Dashboards, UserPortraits, ",(0,o.kt)("a",{parentName:"p",href:"https://airstar.com/home"},"AISTAR"),", ",(0,o.kt)("a",{parentName:"p",href:"https://www.xiaomiyoupin.com"},"Xiaomi Youpin"),". Within Xiaomi, a data ecosystem has been built around Apache Doris. "),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"page_1",src:a(46393).Z,width:"1135",height:"661"})),(0,o.kt)("p",null,"At present, Apache Doris already has dozens of clusters in Xiaomi, with an overall scale of hundreds of virtual machines . Among them, the largest single cluster reaches nearly 100 nodes, with dozens of real-time data synchronization tasks. And the largest daily increment of a single table rocket to 12 billion, supporting PB-level storage. And a single cluster can support more than 20,000 multi-dimensional analysis queries per day."),(0,o.kt)("h1",{id:"architecture-evolution"},"Architecture Evolution"),(0,o.kt)("p",null,"The original intention of Xiaomi to introduce Apache Doris is to solve the problems encountered in user behavior analysis. With the development of Xiaomi's Internet business, the demand for growth analysis using user behavior data is becoming stronger and stronger. If each business branch builds its own growth analysis system, it will not only be costly, but also inefficient. Therefore, if there is a product that can help them stop worrying about underlying complex technical details, it would be great to have relevant business personnel focus on their own technical work. In this way, it can greatly improve work efficiency. Therefore, Xiaomi Big Data and the cloud platform jointly developed the growth analysis system called Growing Analytics (referred to as GA), which aims to provide a flexible multi-dimensional real-time query and analysis platform, which can manage data access and query solutions in a unified way, and help business branches to refine operation."),(0,o.kt)("h2",{id:"previous-architecture"},"Previous Architecture"),(0,o.kt)("p",null,"The growth analysis platform project was established in mid-2018. At that time, based on the consideration of development time and cost, Xiaomi reused various existing big data basic components (HDFS, Kudu, SparkSQL, etc.) to build a growth analysis query system based on Lambda architecture. The architecture of the first version of the GA system is shown in the figure below, including the following aspects:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Data Source: The data source is the front-end embedded data and user behavior data."),(0,o.kt)("li",{parentName:"ul"},"Data Access: The event tracking data is uniformly cleaned and ingested into Xiaomi's internal self-developed message queue, and the data is imported into Kudu through Spark Streaming."),(0,o.kt)("li",{parentName:"ul"},"Storage: Separate hot and cold data in the storage layer. Hot data is stored in Kudu, and cold data is stored in HDFS. At the same time, partitioning is carried out in the storage layer. When the partition unit is day, part of the data will be cooled and stored on HDFS every night."),(0,o.kt)("li",{parentName:"ul"},"Compute and Query: In the query layer, use SparkSQL to perform federated queries on the data on Kudu and HDFS, and finally display the query results on the front-end page.")),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"page_2",src:a(51577).Z,width:"1159",height:"683"})),(0,o.kt)("p",null,"At that time, the first version of the growth analysis platform helped us solve a series of problems in the user operation process, but there were also two problems:"),(0,o.kt)("h3",{id:"problem-no1-scattered-components"},"Problem No.1: Scattered components"),(0,o.kt)("p",null,"Since the historical architecture is based on the combination of SparkSQL + Kudu + HDFS, too many dependent components lead to high operation and maintenance costs. The original design is that each component uses the resources of the public cluster, but in practice, it is found that during the execution of the query job, the query performance is easily affected by other jobs in the public cluster, and query jitter is prone to occur, especially when reading data from the HDFS public cluster , sometimes slower."),(0,o.kt)("h3",{id:"problem-no2-high-resource-consumption"},"Problem No.2: High resource consumption"),(0,o.kt)("p",null,"When querying through SparkSQL, the latency is relatively high. SparkSQL is a query engine designed based on a batch processing system. In the process of exchanging data shuffle between each stage, it still needs to be placed on the disk, and the delay in completing the SQL query is relatively high. In order to ensure that SQL queries are not affected by resources, we ensure query performance by adding machines. However, in practice, we find that there is limited room for performance improvement. This solution cannot make full use of machine resources to achieve efficient queries. A certain waste of resources."),(0,o.kt)("p",null,"In response to the above two problems, our goal is to seek an MPP database that integrates computing and storage to replace our current storage and computing layer components. After technical selection, we finally decided to use Apache Doris to replace the older generation of historical architecture."),(0,o.kt)("h2",{id:"new-choice"},"New Choice"),(0,o.kt)("p",null,"Popular MPP-based query engines such as Impala and Presto, can efficiently support SQL queries, but they still need to rely on Kudu, HDFS, Hive Metastore and other storage system, which increase the operation and maintenance costs. At the same time, due to the separation of storage and compute, the query engine cannot easily find the data changes in the storage layer, resulting in bad performance in detailed query optimization. If you want to cache at the SQL layer, you cannot guarantee that the query results are up-to-date."),(0,o.kt)("p",null,"Apache Doris is a top-level project of the Apache Foundation. It is mainly positioned as a high-performance, real-time analytical database, and is mainly used to solve reports and multi-dimensional analysis. It integrates Google Mesa and Cloudera Impala technologies. We conducted an in-depth performance tests on Doris and communicated with the community many times. And finally, we determined to replace the previous computing and storage components with Doris. "),(0,o.kt)("h2",{id:"new-architecture-based-on-apache-doris"},"New Architecture Based on Apache Doris"),(0,o.kt)("p",null,"The new architecture obtains event tracking data from the data source. Then data is ingested  into Apache Doris. Query results can be directly displayed in the applications. In this way, Doris has truly realized the unification of computing, storage, and resource management tools."),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"page_3",src:a(46798).Z,width:"1149",height:"674"})),(0,o.kt)("p",null,"We chose Doris because:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Doris has excellent query performance and can meet our business needs."),(0,o.kt)("li",{parentName:"ul"},"Doris supports standard SQL, and the learning cost is low."),(0,o.kt)("li",{parentName:"ul"},"Doris does not depend on other external components and is easy to operate and maintain."),(0,o.kt)("li",{parentName:"ul"},"The Apache Doris community is very active and friendly, crowded with contributors. It is easier for further versions upgrades and convenient for maintenance.")),(0,o.kt)("h2",{id:"query-performance-comparision-between-apache-doris--spark-sql"},"Query Performance Comparision between Apache Doris & Spark SQL"),(0,o.kt)("p",null,"Note: The comparison is based on Apache Doris V0.13"),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"page_4",src:a(32507).Z,width:"1242",height:"1000"})),(0,o.kt)("p",null,"We selected a business model with an average daily data volume of about 1 billion, and conducted performance tests on Doris in different scenarios, including 6 event analysis scenarios, 3 retention analysis scenarios, and 3 funnel analysis scenarios. After comparing it with the previous architecture(SparkSQL+Kudu+HDFS), we found out:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"In the event analysis scenario, the average query time was reduced by 85%."),(0,o.kt)("li",{parentName:"ul"},"In the scenarios of retention analysis and funnel analysis, the average query time was reduced by 50%.")),(0,o.kt)("h1",{id:"real-practice"},"Real Practice"),(0,o.kt)("p",null,"Below we will introduce our experience of data import, data query, A/B test in the business application of Apache Doris."),(0,o.kt)("h2",{id:"data-import"},"Data Import"),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"page_5",src:a(2418).Z,width:"1130",height:"667"})),(0,o.kt)("p",null,"Xiaomi writes data into Doris mainly through Stream Load, Broker Load and a small amount of data by Insert. Usually data is generally ingested into the message queue first, which is divided into real-time and offline data."),(0,o.kt)("h3",{id:"how-to-write-real-time-data-into-apache-doris"},"How to write real-time data into Apache Doris:"),(0,o.kt)("p",null,"After part of real-time data processed by Flink, they will be ingested into Doris through  Flink-Doris-Connector provided by Apache Doris. The rest of the data is ingested through Spark Streaming. The bottom layer of these two writing approaches both rely on the Stream Load provided by Apache Doris."),(0,o.kt)("h3",{id:"how-to-write-offline-data-into-apache-doris"},"How to write offline data into Apache Doris:"),(0,o.kt)("p",null,"After offline data is partially ingested into Hive, they will be ingested into Doris through Xiaomi's data import tool. Users can directly submit Broker Load tasks to the Xiaomi's data import tool and import data directly into Doris, or import data through Spark SQL, which relies on the Spark-Doris-Connector provided by Apache Doris. Spark Doris Connector is actually the encapsulation of Stream Load."),(0,o.kt)("h2",{id:"data-qurey"},"Data Qurey"),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"page_6",src:a(89577).Z,width:"1120",height:"638"})),(0,o.kt)("p",null,"Users can query after data import is done. Inside Xiaomi, we query through our data platform. Users can perform visual queries on Doris through Xiaomi's data platform, and conduct user behavior analysis and user portrait analysis. In order to help our teams conduct event analysis, retention analysis, funnel analysis, path analysis and other behavioral analysis, we have added corresponding UDF (User Defined Function) and UDAF (User Defined Aggregate Function) to Doris."),(0,o.kt)("p",null,"In the upcoming version 1.2, Apache Doris adds the function of synchronizing metadata through external table, such as Hive/Hudi/Iceberg and Multi Catalog tool. External table query improves performance, and the ability to access external tables greatly increases ease of use. In the future, we will consider querying Hive and Iceberg data directly through Doris, which builds an architecture of datalake."),(0,o.kt)("h2",{id:"ab-test"},"A/B Test"),(0,o.kt)("p",null,"In real business, the A/B test is a method of comparing two versions of strategies against each other to determine which one performs better. A/B test is essentially an experiment where two or more variants of a page are shown to users at random, and statistical analysis. It is popular approach used to determine which variation performs better for a given conversion goal. Xiaomi's A/B test platform is an operation tool product that conducts the A/B test with experimental grouping, traffic splitting, and scientific evaluation to assist in decision making. Xiaomi's A/B test platform has several query applications: user deduplication, indicator summation, covariance calculation, etc. The query types will involve Count (distinct), Bitmap, Like, etc."),(0,o.kt)("p",null,"Apache Doris also provides services to Xiaomi's A/B test platform. Everyday, Xiaomi's A/B test platform needs to process a temendous amount of data with billions of queries. That's why Xiaomi's A/B test platform is eager to improve the query performance. "),(0,o.kt)("p",null,"Apache Doris V1.1 released just in time and has fully supported vectorization in the processing and storage. Compared with the non-vectorized version, the query performance has been significantly improved. It is time to update Xiaomi's Doris cluster to the latest version. That's why we first launched the latest vectorized version of Doris on Xiaomi's A/B test platform."),(0,o.kt)("h2",{id:"test-before-launch"},"Test before Launch"),(0,o.kt)("p",null,"Note: The following tests are based on Apache Doris V1.1.2"),(0,o.kt)("p",null,"We built a test cluster for Apache Doris V1.1.2, which is as big as that of the Xiaomi online Apache Doris V0.13 version, to test before the vectorization version goes online. The test is divided into two aspects: single SQL parrellel query test and batch SQL concurrent query test."),(0,o.kt)("p",null,"The configurations of the two clusters are exactly the same, and the specific configuration information is as follows:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Scale: 3 FEs + 89 virtual machines"),(0,o.kt)("li",{parentName:"ul"},"CPU: Intel(R) Xeon(R) Silver 4216 CPU @ 2.10GHz 16 cores 32 threads \xd7 2"),(0,o.kt)("li",{parentName:"ul"},"Memory: 256GB"),(0,o.kt)("li",{parentName:"ul"},"Disk: 7.3TB \xd7 12 HDD")),(0,o.kt)("h3",{id:"single-sql-parrellel-query-test"},"Single SQL Parrellel Query Test"),(0,o.kt)("p",null,"We choose 7 classic queries in the Xiaomi A/B test. For each query, we limited the time range to 1 day, 7 days, and 20 days for testing, where the daily partition data size is about 3.1 billion (the data volume is about 2 TB). The test results are shown in the figures:"),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"page_7",src:a(47694).Z,width:"750",height:"450"})),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"page_8",src:a(45381).Z,width:"750",height:"450"})),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"page_9",src:a(68396).Z,width:"750",height:"450"})),(0,o.kt)("p",null,"The Apache Doris V1.1.2 has at least 3~5 times performance improvement compared to the Xiaomi online Doris V0.13, which is remarkable."),(0,o.kt)("h2",{id:"optimization"},"Optimization"),(0,o.kt)("p",null,"Note: The following tests are based on Apache Doris V1.1.2"),(0,o.kt)("p",null,"Based on Xiaomi's A/B test business data, we tuned Apache Doris V1.1.2 and conducted concurrent query tests on the tuned Doris V1.1.2 and Xiaomi's online Doris V0.13. The test results are as follows."),(0,o.kt)("h3",{id:"optimization-in-test-1"},"Optimization in Test 1"),(0,o.kt)("p",null,"We choose user deduplication, index summation, and covariance calculation query(the total number of SQL is 3245) in the A/B test to conduct concurrent query tests on the two versions. The single-day partition data of the table is about 3.1 billion (the amount of data is about 2 TB) and the query will be based on the latest week's data. The test results are shown in the figures:"),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"page_10",src:a(21540).Z,width:"1080",height:"338"})),(0,o.kt)("p",null,"Compared with Apache Doris V0.13, the overall average latency of Doris V1.1.2 is reduced by about 48%, and the P95 latency is reduced by about 49%. In this test, the query performance of Doris V1.1.2 was nearly doubled compared to Doris V0.13."),(0,o.kt)("h3",{id:"optimization-in-test-2"},"Optimization in Test 2"),(0,o.kt)("p",null,"We choose 7 A/B test reports to test the two versions. Each A/B test report is corresponded to two modules in Xiaomi A/B test platform and each module represents thousands of SQL query. Each report submits query tasks to the cluster where the two versions reside at the same concurrency. The test results are shown in the figure:"),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"page_11",src:a(32053).Z,width:"750",height:"450"})),(0,o.kt)("p",null,"Compared with Doris V0.13, Doris V1.1.2 reduces the overall average latency by around 52%. In the test, the query performance of Doris V1.1.2 version was more than 1 time higher than that of Doris V0.13. "),(0,o.kt)("h3",{id:"optimization-in-test-3"},"Optimization in Test 3"),(0,o.kt)("p",null,"To verify the performance of the tuned Apache Doris V1.1.2 in other cases, we choose the Xiaomi user behavior analysis to conduct concurrent query performance tests of Doris V1.1.2 and Doris V0.13. We choose behavior analysis query for 4 days on October 24, 25, 26 and 27, 2022. The test results are shown in the figures:"),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"page_12",src:a(10378).Z,width:"1080",height:"338"})),(0,o.kt)("p",null,"Compared with Doris V0.13, the overall average latency of Doris V1.1.2 has been reduced by about 77%, and the P95 latency has been reduced by about 83%. In this test, the query performance of Doris V1.1.2 version is 4~6 times higher than that of Doris V0.13."),(0,o.kt)("h1",{id:"conclusion"},"Conclusion"),(0,o.kt)("p",null,"Since we adopted Apache Doris in 2019, Apache Doris has currently served dozens of businesses and sub-brands within Xiaomi, with dozens of clusters and hundreds of nodes. It completes more than 10,000 user online analysis queries every day and is responsible for most of the online analysis in Xiaomi."),(0,o.kt)("p",null,"After performance test and tuning, Apache Doris V1.1.2 has met the launch requirements of the Xiaomi A/B test platform and does well in query performance and stability. In some cases, it even exceeds our expectations, such as the overall average latency being reduced by about 77% in our tuned version."),(0,o.kt)("p",null,"Meanwhile, some functions have in the above been released in Apache Doris V1.0 or V1.1,  some PRs have been merged into the community Master Fork and should be released soon. Recently the activity of the community has been greatly enhanceed. We are glad to see that Apache Doris has become more and more mature, and stepped forward to an integrated datalake. We truly believe that in the future, more data analysis will be explored and realized within Apache Doris."),(0,o.kt)("h1",{id:"contact-us"},"Contact Us"),(0,o.kt)("p",null,"Apache Doris Website\uff1a",(0,o.kt)("a",{parentName:"p",href:"http://doris.apache.org"},"http://doris.apache.org")),(0,o.kt)("p",null,"Github Homepage\uff1a",(0,o.kt)("a",{parentName:"p",href:"https://github.com/apache/doris"},"https://github.com/apache/doris")),(0,o.kt)("p",null,"Email to DEV\uff1a",(0,o.kt)("a",{parentName:"p",href:"mailto:dev@doris.apache.org"},"dev@doris.apache.org")))}d.isMDXComponent=!0},49869:(e,t,a)=>{a.d(t,{Z:()=>i});const i=a.p+"assets/images/kv-b27d71e34981d9850785329cea2cb610.png"},46393:(e,t,a)=>{a.d(t,{Z:()=>i});const i=a.p+"assets/images/page_1-93afbd2f90769776af3083bc49fbf8dd.jpg"},21540:(e,t,a)=>{a.d(t,{Z:()=>i});const i=a.p+"assets/images/page_10-98057ca75a1689b6c6eb9932cdd5e841.jpg"},32053:(e,t,a)=>{a.d(t,{Z:()=>i});const i=a.p+"assets/images/page_11-bbf60c474aaea1a007b5b413d6bad77a.jpg"},10378:(e,t,a)=>{a.d(t,{Z:()=>i});const i=a.p+"assets/images/page_12-58242671fba5bbf25225b4d9d9f6d87c.jpg"},51577:(e,t,a)=>{a.d(t,{Z:()=>i});const i=a.p+"assets/images/page_2-db57a1a2eadb0f1c787f440a26358339.jpg"},46798:(e,t,a)=>{a.d(t,{Z:()=>i});const i=a.p+"assets/images/page_3-30c8cb46f4d289fa768e9a364779bc69.jpg"},32507:(e,t,a)=>{a.d(t,{Z:()=>i});const i=a.p+"assets/images/page_4-3e71f2a8753e49f5a73bea4bb628fbbf.jpg"},2418:(e,t,a)=>{a.d(t,{Z:()=>i});const i=a.p+"assets/images/page_5-010f8edce4b736817d68815f31e52fd7.jpg"},89577:(e,t,a)=>{a.d(t,{Z:()=>i});const i=a.p+"assets/images/page_6-14cf1592d25e4b6e4cc275e06c2e6673.jpg"},47694:(e,t,a)=>{a.d(t,{Z:()=>i});const i=a.p+"assets/images/page_7-b41817232fb711c583332d813de7f684.jpg"},45381:(e,t,a)=>{a.d(t,{Z:()=>i});const i=a.p+"assets/images/page_8-c8e10196ce6917449e8372205333f12c.jpg"},68396:(e,t,a)=>{a.d(t,{Z:()=>i});const i=a.p+"assets/images/page_9-cfbcd21a8b00a3b50508251b78ebd163.jpg"}}]);