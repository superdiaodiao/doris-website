"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([[90172],{15680:(e,t,a)=>{a.d(t,{xA:()=>c,yg:()=>h});var i=a(96540);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function s(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,i)}return a}function r(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?s(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):s(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function o(e,t){if(null==e)return{};var a,i,n=function(e,t){if(null==e)return{};var a,i,n={},s=Object.keys(e);for(i=0;i<s.length;i++)a=s[i],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(i=0;i<s.length;i++)a=s[i],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var l=i.createContext({}),p=function(e){var t=i.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):r(r({},t),e)),a},c=function(e){var t=p(e.components);return i.createElement(l.Provider,{value:t},e.children)},d="mdxType",g={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},u=i.forwardRef((function(e,t){var a=e.components,n=e.mdxType,s=e.originalType,l=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),d=p(a),u=n,h=d["".concat(l,".").concat(u)]||d[u]||g[u]||s;return a?i.createElement(h,r(r({ref:t},c),{},{components:a})):i.createElement(h,r({ref:t},c))}));function h(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var s=a.length,r=new Array(s);r[0]=u;var o={};for(var l in t)hasOwnProperty.call(t,l)&&(o[l]=t[l]);o.originalType=e,o[d]="string"==typeof e?e:n,r[1]=o;for(var p=2;p<s;p++)r[p]=a[p];return i.createElement.apply(null,r)}return i.createElement.apply(null,a)}u.displayName="MDXCreateElement"},28531:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>l,contentTitle:()=>r,default:()=>g,frontMatter:()=>s,metadata:()=>o,toc:()=>p});var i=a(58168),n=(a(96540),a(15680));const s={title:"Data analysis for live streaming: what happens in real time is analyzed in real time",summary:"As live streaming emerges as a way of doing business, the need for data analysis follows up. This post is about how a live streaming service provider with 800 million end users found the right database to support its analytic solution.",date:"2023-10-30",author:"He Gong",tags:["Best Practice"],image:"/images/live-streaming.png"},r=void 0,o={permalink:"/blog/data-analysis-for-live-streaming-what-happens-in-real-time-is-analyzed-in-real-time",source:"@site/blog/data-analysis-for-live-streaming-what-happens-in-real-time-is-analyzed-in-real-time.md",title:"Data analysis for live streaming: what happens in real time is analyzed in real time",description:"\x3c!--",date:"2023-10-30T00:00:00.000Z",formattedDate:"October 30, 2023",tags:[{label:"Best Practice",permalink:"/blog/tags/best-practice"}],hasTruncateMarker:!1,authors:[{name:"He Gong"}],frontMatter:{title:"Data analysis for live streaming: what happens in real time is analyzed in real time",summary:"As live streaming emerges as a way of doing business, the need for data analysis follows up. This post is about how a live streaming service provider with 800 million end users found the right database to support its analytic solution.",date:"2023-10-30",author:"He Gong",tags:["Best Practice"],image:"/images/live-streaming.png"},prevItem:{title:"Apache Doris Summit Asia 2023: what can you expect from apache doris as a data warehouse?",permalink:"/blog/apache-doris-summit-asia-2023-what-can-you-expect-from-apache-doris-as-a-data-warehouse"},nextItem:{title:"Apache Doris announced the official release of version 2.0.2",permalink:"/blog/release-2.0.2"}},l={authorsImageUrls:[void 0]},p=[{value:"What&#39;s different about data analytics in live streaming?",id:"whats-different-about-data-analytics-in-live-streaming",level:2},{value:"Simplify the Components",id:"simplify-the-components",level:2},{value:"Disaster Recovery",id:"disaster-recovery",level:2},{value:"Data Visualization",id:"data-visualization",level:2},{value:"Bitmap Index to Accelerate Tag Queries",id:"bitmap-index-to-accelerate-tag-queries",level:2},{value:"Conclusion",id:"conclusion",level:2}],c={toc:p},d="wrapper";function g(e){let{components:t,...s}=e;return(0,n.yg)(d,(0,i.A)({},c,s,{components:t,mdxType:"MDXLayout"}),(0,n.yg)("h2",{id:"whats-different-about-data-analytics-in-live-streaming"},"What's different about data analytics in live streaming?"),(0,n.yg)("p",null,"Live streaming is one typical use case for real-time data analysis, because it stresses speed. Livestream organizers need to keep abreast of the latest data to see what is happening and maximize effectiveness. To realize that requires high efficiency in every step of data processing:"),(0,n.yg)("ul",null,(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("strong",{parentName:"li"},"Data writing"),": A live event churns out huge amounts of data every second, so the database should be able to ingest such high throughput stably."),(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("strong",{parentName:"li"},"Data update"),": As life itself, live streaming entails a lot of data changes, so there should be a quick and reliable data updating mechanism to absorb the changes."),(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("strong",{parentName:"li"},"Data queries"),": Data should be ready and accessible as soon as analysts want it. Mostly that means real-time visibility."),(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("strong",{parentName:"li"},"Maintenance"),": What's special about live streaming is that the data stream has prominent highs and lows. The analytic system should be able to ensure stability during peak times, and allow scaling down in off-peak times in order to improve resource utilization. If possible, it should also provide disaster recovery services to guarantee system availability, since the worst case in live streaming is interruption. ")),(0,n.yg)("p",null,"The rest of this post is about how a live streaming service provider with 800 million end users found the right database to support its analytic solution."),(0,n.yg)("h2",{id:"simplify-the-components"},"Simplify the Components"),(0,n.yg)("p",null,"In this case, the live streaming data analytic platform adopts the Lambda architecture, which consists of a batch processing pipeline and a streaming pipeline, the former for user profile information and the latter for real-time generated data, including metrics like real-time subscription, visitor count, comments and responses. "),(0,n.yg)("ul",null,(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("strong",{parentName:"li"},"Batching processing"),": The user basic information stored in HDFS is written into HBase to form a table."),(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("strong",{parentName:"li"},"Streaming"),": Real-time generated data from MySQL, collected via Flink CDC, goes into Apache Kafka. Flink works as the computation engine and then the data is stored in Redis.")),(0,n.yg)("p",null,(0,n.yg)("img",{alt:"database-for-live-shopping-Elasticsearch-HBase",src:a(21161).A,width:"1898",height:"966"})),(0,n.yg)("p",null,"The real-time metrics will be combined with the user profile information to form a flat table, and Elasticsearch will work as the query engine."),(0,n.yg)("p",null,"As their business burgeons, the expanding data size becomes unbearable for this platform, with problems like:"),(0,n.yg)("ul",null,(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("strong",{parentName:"li"},"Delayed data writing"),": The multiple components result in multiple steps in data writing, and inevitably lead to prolonged data writing, especially during peak times. "),(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("strong",{parentName:"li"},"Complicated updating mechanism"),": Every time there is a data change, such as that in user subscription information, it must be updated into the main tables and dimensional tables, and then the tables are correlated to generate a new flat table. And don't forget that this long process has to be executed across multiple components. So just imagine the complexity."),(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("strong",{parentName:"li"},"Slow queries"),": As the query engine, Elasticsearch struggles with concurrent query requests and data accesses. It is also not flexible enough to deal with the join queries."),(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("strong",{parentName:"li"},"Time-consuming maintenance"),": All engineers developing or maintaining this platform need to master all the components. That's a lot of training. And adding new metrics to the data pool is labor-intensive.")),(0,n.yg)("p",null,"So to sum up, the main problem for this architecture is its complexity. To reduce the components means to find a database that is not only capable of most workloads, but also performant in data writing and queries. After 6 months of testing, they finally upgraded their live streaming analytic platform with ",(0,n.yg)("a",{parentName:"p",href:"https://doris.apache.org/"},"Apache Doris"),". "),(0,n.yg)("p",null,"They converge the streaming and the batch processing pipelines at Apache Doris. It can undertake analytic workloads and also provides a storage layer so data doesn't have to shuffle back to Elasticsearch and HBase as it did in the old architecture."),(0,n.yg)("p",null,"With Apache Doris as the data warehouse, the platform architecture becomes neater."),(0,n.yg)("p",null,(0,n.yg)("img",{alt:"database-for-live-shopping-Apache-Doris",src:a(72370).A,width:"1908",height:"936"})),(0,n.yg)("ul",null,(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("strong",{parentName:"li"},"Smooth data writing"),": Raw data is processed by Flink and written into Apache Doris in real time. The Doris community provides a ",(0,n.yg)("a",{parentName:"li",href:"https://github.com/apache/doris-flink-connector"},"Flink-Doris-Connector")," with built-in Flink CDC."),(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("strong",{parentName:"li"},"Flexible data update"),": For data changes, Apache Doris implements ",(0,n.yg)("a",{parentName:"li",href:"https://doris.apache.org/docs/data-table/data-model/#merge-on-write"},"Merge-on-Write"),". This is especially useful in small-batch real-time writing because you don't have to renew the entire flat table. It also supports partial update of columns, which is another way to make data updates more lightweight. In this case, Apache Doris is able to finish Upsert or Insert Overwrite operations for ",(0,n.yg)("strong",{parentName:"li"},"200,000 rows per second"),", and these are all done in large tables with the biggest ones reaching billions of rows. "),(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("strong",{parentName:"li"},"Faster queries"),": For join queries, Apache Doris can easily join multiple large tables (10 billion rows). It can respond to a rich variety of queries within seconds or even milliseconds, including tag retrievals, fuzzy queries, ranking, and paginated queries."),(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("strong",{parentName:"li"},"Easier maintenance"),": As for Apache Doris itself, the frontend and backend nodes are both flexibly scalable. It is compatible with MySQL protocol. What took the developers a month now can be finished within a week, which allows for more agile iteration of metrics. ")),(0,n.yg)("p",null,"The above shows how Apache Doris speeds up the entire data processing pipeline with its all-in-one capabilities. Beyond that, it has some delightful features that can increase query efficiency and ensure service reliability in the case of live streaming.  "),(0,n.yg)("h2",{id:"disaster-recovery"},"Disaster Recovery"),(0,n.yg)("p",null,"The last thing you want in live streaming is service breakdown, so disaster recovery is necessary."),(0,n.yg)("p",null,"Before the live streaming platform had Apache Doris in place, they only backed up their data to object storage. It took an hour from when a failure was reported to when it was fixed. That one-hour window is fatal for live commerce because viewers will leave immediately. Thus, disaster recovery must be quick."),(0,n.yg)("p",null,"Now, with Apache Doris, they have a dual-cluster solution: a primary cluster and a backup cluster. This is for hot backup. Besides that, they have a cold backup plan, which is the same as what they did: backing up their everyday data to object storage via Backup and Freeze policies."),(0,n.yg)("p",null,"This is how they do hot backup before ",(0,n.yg)("a",{parentName:"p",href:"https://doris.apache.org/zh-CN/blog/release-note-2.0.0"},"Apache Doris 2.0"),": "),(0,n.yg)("ul",null,(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("strong",{parentName:"li"},"Data dual-write"),": Write data to both the primary cluster and backup cluster. "),(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("strong",{parentName:"li"},"Load balancing"),": In case there is something wrong with one cluster, query requests can be directed to the other cluster via reverse proxy."),(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("strong",{parentName:"li"},"Monitoring"),": Regularly check the data consistency between the two clusters. ")),(0,n.yg)("p",null,"Apache Doris 2.0 supports ",(0,n.yg)("a",{parentName:"p",href:"https://doris.apache.org/zh-CN/blog/release-note-2.0.0#support-for-cross-cluster-replication-ccr"},"Cross Cluster Replication (CCR)"),", which can automate the above processes to reduce maintenance costs and inconsistency risks due to human factors."),(0,n.yg)("h2",{id:"data-visualization"},"Data Visualization"),(0,n.yg)("p",null,"In addition to reporting, dashboarding, and ad-hoc queries, the platform also allows analysts to configure various data sources to produce their own visualized data lists. "),(0,n.yg)("p",null,"Apache Doris is compatible with most BI tools on the market, so the platform developers can tap on that and provide a broader set of functionalities for live streamers."),(0,n.yg)("p",null,"Also, built on the real-time capabilities and quick computation of Apache Doris, live streams can view data and see what happens in real time, instead of waiting for a day for data analysis."),(0,n.yg)("h2",{id:"bitmap-index-to-accelerate-tag-queries"},"Bitmap Index to Accelerate Tag Queries"),(0,n.yg)("p",null,'A big part of data analysis in live streaming is viewer profiling. Viewers are divided into groups based on their online footprint. They are given tags like "watched for over one minute" and "visited during the past minute". As the show goes on, viewers are constantly tagged and untagged. In the data warehouse, it means frequent data insertion and deletion. Plus, one viewer is given multiple tags. To gain an overall understanding of users entail join queries, which is why the join performance of the data warehouse is important. '),(0,n.yg)("p",null,"The following snippets give you a general idea of how to tag users and conduct tag queries in Apache Doris."),(0,n.yg)("p",null,(0,n.yg)("strong",{parentName:"p"},"Create a Tag Table")),(0,n.yg)("p",null,"A tag table lists all the tags that are given to the viewers, and maps the tags to the corresponding viewer ID."),(0,n.yg)("pre",null,(0,n.yg)("code",{parentName:"pre",className:"language-SQL"},"create table db.tags (  \nu_id string,  \nversion string,  \ntags string\n) with (  \n'connector' = 'doris',  \n'fenodes' = '',  \n'table.identifier' = 'tags',  \n'username' = '',  \n'password' = '',  \n'sink.properties.format' = 'json',  \n'sink.properties.strip_outer_array' = 'true',  \n'sink.properties.fuzzy_parse' = 'true',  \n'sink.properties.columns' = 'id,u_id,version,a_tags,m_tags,a_tags=bitmap_from_string(a_tags),m_tags=bitmap_from_string(m_tags)',  \n'sink.batch.interval' = '10s',  \n'sink.batch.size' = '100000' \n);\n")),(0,n.yg)("p",null,(0,n.yg)("strong",{parentName:"p"},"Create a Tag Version Table")),(0,n.yg)("p",null,"The tag table is constantly changing, so there are different versions of it as time goes by."),(0,n.yg)("pre",null,(0,n.yg)("code",{parentName:"pre",className:"language-SQL"},"create table db.tags_version (  \nid string,  \nu_id string,  \nversion string  \n) with (  \n'connector' = 'doris',  \n'fenodes' = '',  \n'table.identifier' = 'db.tags_version',  \n'username' = '',  \n'password' = '',  \n'sink.properties.format' = 'json',  \n'sink.properties.strip_outer_array' = 'true',  \n'sink.properties.fuzzy_parse' = 'true',  \n'sink.properties.columns' = 'id,u_id,version',  \n'sink.batch.interval' = '10s',  \n'sink.batch.size' = '100000'  \n);\n")),(0,n.yg)("p",null,(0,n.yg)("strong",{parentName:"p"},"Write Data into Tag Table and Tag Version Table")),(0,n.yg)("pre",null,(0,n.yg)("code",{parentName:"pre",className:"language-SQL"},"insert into db.tags\nselect\nu_id,  \nlast_timestamp as version,\ntags\nfrom db.source;  \n  \ninsert into rtime_db.tags_version\nselect \nu_id,  \nlast_timestamp as version\nfrom db.source;\n")),(0,n.yg)("p",null,(0,n.yg)("strong",{parentName:"p"},"Tag Queries Accelerated by Bitmap Index")),(0,n.yg)("p",null,'For example, analysts need to find out the latest tags related to a certain viewer with the last name Thomas. Apache Doris will run the LIKE operator in the user information table to find all "Thomas". Then it creates bitmap indexes for the tags. Lastly, it relates all user information table, tag table, and tag version table to return the result.'),(0,n.yg)("p",null,(0,n.yg)("strong",{parentName:"p"},"Of almost a billion viewers and each of them has over a thousand tags, the bitmap index can help reduce the query response time to less than one second.")),(0,n.yg)("pre",null,(0,n.yg)("code",{parentName:"pre",className:"language-SQL"},"with t_user as (\n    select \n           u_id,\n           name\n    from db.user\n    where partition_id = 1\n    and name like '%Thomas%'\n),\n\n t_tags as (\n         select \n                 u_id, \n                 version\n         from db.tags\n         where (\n                   bitmap_and_count(a_tags, bitmap_from_string(\"123,124,125,126,333\")) > 0 \n           )\n ),\n \n t_tag_version as (\n         select id, u_id, version\n         from db.tags_version\n )\n\nselect \n    t1.u_id\n    t1.name\nfrom t_user t1\njoin t_tags t2 on t1.u_id = t2.u_id\njoin t_tag_version t3 on t2.u_id = t3.u_id and t2.version = t3.version\norder by t1.u_id desc\nlimit 1,10;\n")),(0,n.yg)("h2",{id:"conclusion"},"Conclusion"),(0,n.yg)("p",null,"Data analysis in live streaming is challenging for the underlying database, but it is also where the key competitiveness of Apache Doris comes to play. First of all, Apache Doris can handle most data processing workloads, so platform builders don't have to worry about putting many components together and consequential maintenance issues. Secondly, it has a lot of query-accelerating features, including but not limited to indexes. After tackling the speed issues, the ",(0,n.yg)("a",{parentName:"p",href:"https://join.slack.com/t/apachedoriscommunity/shared_invite/zt-1t3wfymur-0soNPATWQ~gbU8xutFOLog"},"Apache Doris developer community")," has been exploring its boundaries, such as introducing a more efficient cost-based query optimizer in version 2.0 and inverted index for text searches, fuzzy queries, and range queries. These features are embraced by the live streaming service provider as they are actively testing them and planning to transfer their log analytic workloads to Apache Doris, too."))}g.isMDXComponent=!0},21161:(e,t,a)=>{a.d(t,{A:()=>i});const i=a.p+"assets/images/xiaoe-tech-1-85a1ce0c20ef5cee50ca0b3c908f9ee0.png"},72370:(e,t,a)=>{a.d(t,{A:()=>i});const i=a.p+"assets/images/xiaoe-tech-2-53446135cfc264b66e055259af6ff08b.png"}}]);