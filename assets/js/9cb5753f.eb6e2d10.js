"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([[48305],{3905:(e,t,a)=>{a.d(t,{Zo:()=>p,kt:()=>m});var n=a(67294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},i=Object.keys(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var l=n.createContext({}),c=function(e){var t=n.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},p=function(e){var t=c(e.components);return n.createElement(l.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},h=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,i=e.originalType,l=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),u=c(a),h=r,m=u["".concat(l,".").concat(h)]||u[h]||d[h]||i;return a?n.createElement(m,o(o({ref:t},p),{},{components:a})):n.createElement(m,o({ref:t},p))}));function m(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=a.length,o=new Array(i);o[0]=h;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[u]="string"==typeof e?e:r,o[1]=s;for(var c=2;c<i;c++)o[c]=a[c];return n.createElement.apply(null,o)}return n.createElement.apply(null,a)}h.displayName="MDXCreateElement"},58596:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>l,contentTitle:()=>o,default:()=>d,frontMatter:()=>i,metadata:()=>s,toc:()=>c});var n=a(87462),r=(a(67294),a(3905));const i={title:"Less Components, Higher Performance: Apache Doris Instead of ClickHouse, MySQL, Presto, and HBase",summary:"This post is about building a unified OLAP platform. An insurance company tries to build a data warehouse that can undertake all their customer-facing, analyst-facing, and management-facing data analysis workloads.",date:"2023-11-22",author:"Big Data Platform R&D Team of CIGNA&CMB",tags:["Best Practice"]},o=void 0,s={permalink:"/blog/less-components-higher-performance-apache-doris-instead-of-clickhouse-mysql-presto-and-hbase",source:"@site/blog/less-components-higher-performance-apache-doris-instead-of-clickhouse-mysql-presto-and-hbase.md",title:"Less Components, Higher Performance: Apache Doris Instead of ClickHouse, MySQL, Presto, and HBase",description:"\x3c!--",date:"2023-11-22T00:00:00.000Z",formattedDate:"November 22, 2023",tags:[{label:"Best Practice",permalink:"/blog/tags/best-practice"}],hasTruncateMarker:!1,authors:[{name:"Big Data Platform R&D Team of CIGNA&CMB"}],frontMatter:{title:"Less Components, Higher Performance: Apache Doris Instead of ClickHouse, MySQL, Presto, and HBase",summary:"This post is about building a unified OLAP platform. An insurance company tries to build a data warehouse that can undertake all their customer-facing, analyst-facing, and management-facing data analysis workloads.",date:"2023-11-22",author:"Big Data Platform R&D Team of CIGNA&CMB",tags:["Best Practice"]},prevItem:{title:"How Big Data Is Saving Lives in Real Time: IoV Data Analytics Helps Prevent Accidents",permalink:"/blog/how-big-data-is-saving-lives-in-real-time-iov-data-analytics-helps-prevent-accidents"},nextItem:{title:"Apache Doris Summit Asia 2023: What Can You Expect From Apache Doris as a Data Warehouse?",permalink:"/blog/apache-doris-summit-asia-2023-what-can-you-expect-from-apache-doris-as-a-data-warehouse"}},l={authorsImageUrls:[void 0]},c=[{value:"Component-Heavy Data Architecture",id:"component-heavy-data-architecture",level:2},{value:"Replacing Four Components with Apache Doris",id:"replacing-four-components-with-apache-doris",level:2},{value:"A Deeper Look into Apache Doris",id:"a-deeper-look-into-apache-doris",level:2}],p={toc:c},u="wrapper";function d(e){let{components:t,...i}=e;return(0,r.kt)(u,(0,n.Z)({},p,i,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"This post is about building a unified OLAP platform. An insurance company tries to build a data warehouse that can undertake all their customer-facing, analyst-facing, and management-facing data analysis workloads. The main tasks include: "),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Self-service insurance contract query"),": This is for insurance customers to check their contract details by their contract ID. It should also support filters such as coverage period, insurance types, and claim amount. "),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Multi-dimensional analysis"),": Analysts develop their reports based on different data dimensions as they need, so they can extract insights to facilitate product innovation and their anti-fraud efforts. "),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Dashboarding"),": This is to create visual overview of the insurance sales trends and the horizontal and vertical comparison of different metrics.")),(0,r.kt)("h2",{id:"component-heavy-data-architecture"},"Component-Heavy Data Architecture"),(0,r.kt)("p",null,"The user started with Lambda architecture, spliting their data pipeline into a batch processing link and a stream processing link. For real-time data streaming, they apply Flink CDC; for batch import, they incorporate Sqoop, Python, and DataX to build their own data integration tool named Hisen.  "),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"multi-component-data-warehouse-mysql-clickhouse-hbase-hive-presto",src:a(34739).Z,width:"1280",height:"640"})),(0,r.kt)("p",null,"Then, the real-time and offline data meets in the data warehousing layer, which is made up of five components."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"ClickHouse")),(0,r.kt)("p",null,"The data warehouse is of flat table design and ClickHouse is superb in flat table reading. But as business evolves, things become challenging in two ways:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"To support cross-table joins and point queries, the user requires the star schema, but that's difficult to implement in ClickHouse."),(0,r.kt)("li",{parentName:"ul"},"Changes in insurance contracts need to be updated in the data warehouse in real time. In ClickHouse, that is done by recreating a flat table to overwrite the old one, which is not fast enough.")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"MySQL")),(0,r.kt)("p",null,"After calculation, data metrics are stored in MySQL, but as the data size grows, MySQL starts to struggle, with emerging problems like prolonged execution time and errors thrown."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Apache")," ",(0,r.kt)("strong",{parentName:"p"},"Hive")," ",(0,r.kt)("strong",{parentName:"p"},"+ Presto")),(0,r.kt)("p",null,"Hive is the main executor in the batch processing link. It can transform, aggregate, query offline data. Presto is a complement to Hive for interactive analysis."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Apache HBase")),(0,r.kt)("p",null,"HBase undertakes primary key queries. It reads customer status from MySQL and Hive, including customer credits, coverage period, and sum insured. However, since HBase does not support secondary indexes, it has limited capability in reading non-primary key columns. Plus, as a NoSQL database, HBase does not support SQL statements."),(0,r.kt)("p",null,"The components have to work in conjunction to serve all needs, making the data warehouse too much to take care of. It is not easy to get started with because engineers must be trained on all these components. Also, the complexity of architecture adds to the risks of latency. "),(0,r.kt)("p",null,"So the user tried to look for a tool that ticks more boxes in fulfilling their requirements. The first thing they need is real-time capabilities, including real-time writing, real-time updating, and real-time response to data queries. Secondly, they need more flexibility in data analysis to support customer-facing self-service queries, like multi-dimensional analysis, join queries of large tables, primary key indexes, roll-ups, and drill-downs. Then, for batch processing, they also want high throughput in data writing."),(0,r.kt)("p",null,"They eventually made up their mind with ",(0,r.kt)("a",{parentName:"p",href:"https://doris.apache.org/"},"Apache Doris"),". "),(0,r.kt)("h2",{id:"replacing-four-components-with-apache-doris"},"Replacing Four Components with Apache Doris"),(0,r.kt)("p",null," Apache Doris is capable of both real-time and offline data analysis, and it supports both high-throughput interactive analysis and high-concurrency point queries. That's why it can replace ClickHouse, MySQL, Presto, and Apache HBase and work as the unified query gateway for the entire data system. "),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"unified-data-warehouse-kafka-apache-doris-hive",src:a(26302).Z,width:"1280",height:"686"})),(0,r.kt)("p",null,"The improved data pipeline is a much cleaner Lambda architecture. "),(0,r.kt)("p",null,"Apache Doris provides a wide range of data ingestion methods. It's quick in data writing. On top of this, it also implements Merge-on-Write to improve its performance on concurrent point queries. "),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Reduced Cost")),(0,r.kt)("p",null,"The new architecture has reduced the user's cost in human efforts. For one thing, the much simpler data architecture leads to much easier maintenance; for another, developers no longer need to join the real-time and offline data in the data serving API."),(0,r.kt)("p",null,"The user can also save money with Doris because it supports tiered storage. It allows the user to put their huge amount of rarely accessed historical data in object storage, which is much cheaper to hoard data."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Higher Efficiency")),(0,r.kt)("p",null,"Apache Doris can reach a QPS of 10,000s and respond to billions of point queries within milliseconds, so the customer-facing queries are easy for it to handle. Tiered storage that separates hot data from cold data also increases their query efficiency."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Service Availability")),(0,r.kt)("p",null,"As a unified data warehouse for storage, computation, and data services, Apache Doris allows for easy disaster recovery. With less components, they don't have to worry about data loss or duplication. "),(0,r.kt)("p",null,"An important guarantee of service availability for the user is the Cross-Cluster Replication (CCR) capability of Apache Doris. It can synchronize data from cluster to cluster within minutes or even seconds, and it implements two mechanisms to ensure data reliability:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Binlog"),": This mechanism can automatically log the data changes and generate a LogID for each data modification operation. The incremental LogIDs make sure that data changes are traceable and orderly."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Data persistence"),": In the case of system meltdown or emergencies, data will be put into disks.")),(0,r.kt)("h2",{id:"a-deeper-look-into-apache-doris"},"A Deeper Look into Apache Doris"),(0,r.kt)("p",null,"Apache Doris can replace the ClickHouse, MySQL, Presto, and HBase because it has a comprehensive collection of capabilities all along the data processing pipeline. In data ingestion, it enables low-latency real-time writing based on its support for Flink CDC and Merge-on-Write. It guarantees Exactly-Once writing by its Label mechanism and transactional loading. In data queries, it supports both Star Schema and flat table aggregation, so it can provide high performance in bother multi-table joins and large single table queries. It also provides various ways to speed up different queries, like ",(0,r.kt)("a",{parentName:"p",href:"https://doris.apache.org/docs/dev/data-table/index/inverted-index/"},"inverted index")," for full-text search and range queries, short-circuit plan and prepared statements for point queries."))}d.isMDXComponent=!0},34739:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/multi-component-data-warehouse-mysql-clickhouse-hbase-hive-presto-6e3dbac016295bce3108943b4bddcf4c.png"},26302:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/unified-data-warehouse-kafka-apache-doris-hive-0c1accc90b4280a26b81be17b31e5a63.png"}}]);