"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([[66681],{3905:(e,t,a)=>{a.d(t,{Zo:()=>u,kt:()=>p});var i=a(67294);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,i)}return a}function r(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,i,n=function(e,t){if(null==e)return{};var a,i,n={},o=Object.keys(e);for(i=0;i<o.length;i++)a=o[i],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(i=0;i<o.length;i++)a=o[i],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var l=i.createContext({}),c=function(e){var t=i.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):r(r({},t),e)),a},u=function(e){var t=c(e.components);return i.createElement(l.Provider,{value:t},e.children)},d="mdxType",h={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},m=i.forwardRef((function(e,t){var a=e.components,n=e.mdxType,o=e.originalType,l=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),d=c(a),m=n,p=d["".concat(l,".").concat(m)]||d[m]||h[m]||o;return a?i.createElement(p,r(r({ref:t},u),{},{components:a})):i.createElement(p,r({ref:t},u))}));function p(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=a.length,r=new Array(o);r[0]=m;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[d]="string"==typeof e?e:n,r[1]=s;for(var c=2;c<o;c++)r[c]=a[c];return i.createElement.apply(null,r)}return i.createElement.apply(null,a)}m.displayName="MDXCreateElement"},85879:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>l,contentTitle:()=>r,default:()=>h,frontMatter:()=>o,metadata:()=>s,toc:()=>c});var i=a(87462),n=(a(67294),a(3905));const o={title:"Best practice of Apache Doris in Meituan",summary:"Introduction: This paper mainly introduces a general method and practice of real-time data warehouse construction. The real-time data warehouse aims at end-to-end low latency, SQL standardization, rapid response to changes, and data unification. In practice, the best practice we summarize is: a common real-time production platform + a common interactive real-time analysis engine cooperate with each other to meet real-time and quasi-real-time business scenarios. The two have a reasonable division of labor and complement each other to form an easy-to-develop, easy-to-maintain, and most efficient assembly line, taking into account development efficiency and production costs, and satisfying diverse business needs with a better input-output ratio.",date:"2022-07-20",author:"Apache Doris",tags:["Best Practice"],image:"/images/best-practice.png"},r=void 0,s={permalink:"/blog/meituan",source:"@site/blog/meituan.md",title:"Best practice of Apache Doris in Meituan",description:"\x3c!--",date:"2022-07-20T00:00:00.000Z",formattedDate:"July 20, 2022",tags:[{label:"Best Practice",permalink:"/blog/tags/best-practice"}],hasTruncateMarker:!1,authors:[{name:"Apache Doris"}],frontMatter:{title:"Best practice of Apache Doris in Meituan",summary:"Introduction: This paper mainly introduces a general method and practice of real-time data warehouse construction. The real-time data warehouse aims at end-to-end low latency, SQL standardization, rapid response to changes, and data unification. In practice, the best practice we summarize is: a common real-time production platform + a common interactive real-time analysis engine cooperate with each other to meet real-time and quasi-real-time business scenarios. The two have a reasonable division of labor and complement each other to form an easy-to-develop, easy-to-maintain, and most efficient assembly line, taking into account development efficiency and production costs, and satisfying diverse business needs with a better input-output ratio.",date:"2022-07-20",author:"Apache Doris",tags:["Best Practice"],image:"/images/best-practice.png"},prevItem:{title:"Best practice of Apache Doris in JD",permalink:"/blog/jd"},nextItem:{title:"Best practice of Apache Doris in Xiaomi Group",permalink:"/blog/xiaomi"}},l={authorsImageUrls:[void 0]},c=[{value:"1.Real-time computing technology selection",id:"1real-time-computing-technology-selection",level:3},{value:"2.Real-time Architecture",id:"2real-time-architecture",level:3},{value:"\u2460 Lambda Architecture",id:"-lambda-architecture",level:4},{value:"\u2461 Kappa Architecture",id:"-kappa-architecture",level:4},{value:"1.Real-time Architecture: Exploration of Stream-Batch Combination",id:"1real-time-architecture-exploration-of-stream-batch-combination",level:3},{value:"2.Architecture Design of Real-time Data Warehouse",id:"2architecture-design-of-real-time-data-warehouse",level:3},{value:"1.Real-time base layer functions",id:"1real-time-base-layer-functions",level:3},{value:"2.Real-time feature production capabilities",id:"2real-time-feature-production-capabilities",level:3},{value:"3.SLA construction",id:"3sla-construction",level:3},{value:"4.Real-time OLAP solution",id:"4real-time-olap-solution",level:3},{value:"about the author:",id:"about-the-author",level:3}],u={toc:c},d="wrapper";function h(e){let{components:t,...a}=e;return(0,n.kt)(d,(0,i.Z)({},u,a,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"best-practice-of-apache-doris-in-meituan"},"Best Practice of Apache Doris in Meituan"),(0,n.kt)("p",null,"Introduction: This paper mainly introduces a general method and practice of real-time data warehouse construction. The real-time data warehouse aims at end-to-end low latency, SQL standardization, rapid response to changes, and data unification. In practice, the best practice we summarize is: a common real-time production platform + a common interactive real-time analysis engine cooperate with each other to meet real-time and quasi-real-time business scenarios. The two have a reasonable division of labor and complement each other to form an easy-to-develop, easy-to-maintain, and most efficient assembly line, taking into account development efficiency and production costs, and satisfying diverse business needs with a better input-output ratio."),(0,n.kt)("h1",{id:"real-time-scene"},"real-time scene"),(0,n.kt)("p",null,"There are many scenarios in which real-time data is delivered in Meituan, mainly including these following points:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Operational level: Such as real-time business changes, real-time marketing effects, daily business status and daily real-time business trend analysis, etc."),(0,n.kt)("li",{parentName:"ul"},"Production level: such as whether the real-time system is reliable, whether the system is stable, real-time monitoring of the health of the system, etc."),(0,n.kt)("li",{parentName:"ul"},"C-end users: For example, search recommendation sorting requires real-time understanding of users' thoughts, behaviors and characteristics, and recommendation of more concerned content to users."),(0,n.kt)("li",{parentName:"ul"},"Risk control: Food delivery and financial technology are used a lot. Real-time risk identification, anti-fraud, abnormal transactions, etc., are all scenarios where a large number of real-time data are applied")),(0,n.kt)("h1",{id:"real-time-technology-and-architecture"},"Real-time technology and architecture"),(0,n.kt)("h3",{id:"1real-time-computing-technology-selection"},"1.Real-time computing technology selection"),(0,n.kt)("p",null,"At present, there are many open source real-time technologies, among which Storm, Spark Streaming and Flink are common. The specific selection depends on the business situation of different companies."),(0,n.kt)("p",null,"Meituan Takeaway relies on the overall construction of meituan's basic data system. In terms of technology maturity, It used Storm a few years ago, which was irreplaceable in terms of performance stability, reliability and scalability. As Flink becomes more and more mature, it has surpassed Storm in terms of technical performance and framework design advantages. In terms of trends, just like Spark replacing MR, Storm will be gradually replaced by Flink. Of course, there will be a process of migrating from Storm to Flink. We currently have some old tasks still on Storm, and we are constantly promoting task migration."),(0,n.kt)("p",null,"The comparison between Storm and Flink can refer to the form above."),(0,n.kt)("h3",{id:"2real-time-architecture"},"2.Real-time Architecture"),(0,n.kt)("h4",{id:"-lambda-architecture"},"\u2460 Lambda Architecture"),(0,n.kt)("p",null,"The Lambda architecture is a relatively classic architecture. In the past, there were not many real-time scenarios, mainly offline. When a real-time scene is attached, the technical ecology is different due to the different timeliness of offline and real- time. The Lambda architecture is equivalent to attaching a real-time production link, which is integrated at the application level, and two-way production is independent of each other.This is also a logical approach to adopt in business applications."),(0,n.kt)("p",null,"There will be some problems in dual-channel production, such as double processing logic, double development and operation and maintenance, and resources will also become two resource links. Because of these problems,  Kappa architecture has been evolved."),(0,n.kt)("h4",{id:"-kappa-architecture"},"\u2461 Kappa Architecture"),(0,n.kt)("p",null,"The Kappa architecture is relatively simple in terms of architecture design, unified in production, and a set of logic produces both offline and real time. However, there are relatively large limitations in practical application scenarios. There are few cases in the industry that directly use the Kappa architecture for production and implementation,  and the scene is relatively simple. These problems will also be encountered on our side, and we will also have some thoughts of our own, which will be discussed later."),(0,n.kt)("h1",{id:"business-pain-points"},"Business Pain Points"),(0,n.kt)("p",null,"In the take-away business, we also encountered some problems."),(0,n.kt)("p",null,"In the early stage of the business, in order to meet the business needs, the requirements are generally completed case by case after the requirements are obtained. The business has high real-time requirements. From the perspective of timeliness, there is no opportunity for middle-level precipitation. In the scenario, the business logic is generally directly embedded. This is a simple and effective method that can be imagined. This development mode is relatively common in the early stage of business development."),(0,n.kt)("p",null,"As shown in the figure above, after getting the data source, it will go through data cleaning, dimension expansion, business logic processing through Storm or Flink, and finally direct business output. Taking this link apart, the data source will repeatedly refer to the same data source, and the operations such as cleaning, filtering, and dimension expansion must be repeated. The only difference is that the code logic of the business is different. IIf there is less business, this model is acceptable, but when the subsequent business volume increases, there will be a situation where whoever develops will be responsible for operation and maintenance, the maintenance workload will increase, and the operations cannot be managed in a unified manner. Moreover, everyone is applying for resources, resulting in a rapid expansion of resource costs, and resources cannot be used intensively and effectively. Therefore, it is necessary to think about how to construct real-time data from the whole data source."),(0,n.kt)("h1",{id:"data-features-and-application-scenario"},"Data features and Application Scenario"),(0,n.kt)("p",null,"So how to build a real-time data warehouse?"),(0,n.kt)("p",null,"First of all, we need to disassemble this task into what data, what scenarios, and what features these scenarios have in common. For takeaway business scenarios, there are two categories, log class and business category."),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"Log class: It is characterized by a large amount of data, semi-structured, and deeply nested.Log data has a great feature that once the log stream is formed, it will not change. It will collect all the logs of the platform by means of buried points, and then collect and distribute them uniformly. Just like a tree with really large roots.  The whole process of pushing to the front-end application is just like the process of a tree branching from the root to a branch (the decomposition process from 1 to n). If all businesses search for data from the root, although the path seems to be the shortest, because of the heavy burden,the data retrieval efficiency is low. Log data is generally used for production monitoring and user behavior analysis. The timeliness requirements are relatively high . Generally, the  time window will be 5 minutes or 10 minutes, or up to the current state. The main application is the real-time large screen and real-time features, such as behaviour can immediately perceive the need for waiting every time the user clicks.")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"Business category: The business class is mainly about business transaction data. Business systems are usually self-contained and distribute data down in the form of Binlog logs. All business systems are transactional, mainly using paradigm modeling methods, which have a structured characteristic and the main part can be seen clearly. However, due to the large number of data tables, multi-table associations are required to express the complete business. So it's an integrated machining process from n to 1 ."))),(0,n.kt)("p",null,"Several difficulties faced by business real-time processing:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"Diversity of business: Business processes are constantly changing from the beginning to the end, such as from ordering -> payment -> delivery. The business database is changed  on the original basis,and Binlog will generate a lot of changed logs. Business analysis is more focused on the end state, which leads to the problem of data retraction calculation, such as placing an order at 10 o'clock and canceling it at 13 o'clock, but hoping to subtract the canceled order at 10 o'clock.")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"Business integration: Business analysis data usually cannot be expressed by a single subject, and often many tables are associated to obtain the desired information. When confluent alignment of data is performed in real-time streaming, it often requires large cache processing and is complicated.")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"The analysis is batch, and the processing process is streaming: for a single data, no analysis can be formed, so the analysis object must be batch, and the data processing is one by one."))),(0,n.kt)("p",null,"The scenarios of log classes and business classes generally exist at the same time and are intertwined. Whether it is Lambda architecture or Kappa architecture, a single application will have some problems, so it is more meaningful to choose the architecture and practice according to the scenario."),(0,n.kt)("h1",{id:"architecture-design-of-real-time-data-warehouse"},"Architecture Design of Real-time Data Warehouse"),(0,n.kt)("h3",{id:"1real-time-architecture-exploration-of-stream-batch-combination"},"1.Real-time Architecture: Exploration of Stream-Batch Combination"),(0,n.kt)("p",null,"Based on the above problems, we have our own thinking and ideas\uff0cit is to deal with different business scenarios through the combination of flow and batch."),(0,n.kt)("p",null,"As shown in the figure above, the data is collected from the log to the message queue, and then to the ETL process of the data stream. The construction of the basic data stream is unified. Afterwards, for log real-time features, real-time large-screen applications use real-time stream computing. Real-time OLAP batch processing is used for Binlog business analysis."),(0,n.kt)("p",null,"What are the Pain Points of Stream Processing Analysis Business? For the paradigm business, both Storm and Flink require a large amount of external memory to achieve business alignment between data streams, which requires a lot of computing resources. Due to the limitation of external memory, the window limitation strategy must be carried out, and may eventually discard some data as a result. After calculation, it is generally stored in Redis as query support, and KV storage has many limitations in dealing with analytical query scenarios."),(0,n.kt)("p",null,"How to achieve real-time OLAP? Is there a real-time computing engine with its own storage, when the real-time data is entered,it can flexibly and freely calculate within a certain range, and has a certain data carrying capacity, and supports analysis of query responses at the same time? With the development of technology, the current MPP engine is developing very rapidly, and its performance is also improving rapidly, so there is a new possibility in this scenario, just like the Doris engine we use here."),(0,n.kt)("p",null,"This idea has been practiced in the industry and has become an important exploration direction. For example, Alibaba's real-time OLAP solution based on ADB, etc."),(0,n.kt)("h3",{id:"2architecture-design-of-real-time-data-warehouse"},"2.Architecture Design of Real-time Data Warehouse"),(0,n.kt)("p",null,"From the perspective of the entire real-time data warehouse architecture, the first thing to consider is how to manage all real-time data, how to effectively integrate resources, and how to construct data."),(0,n.kt)("p",null,"In terms of methodology, the real-time and offline are very similar to each other. In the early stage of offline data warehouse, it is also case by case. Consider how to govern it when the scale of data increases to a certain amount. We all know that layering is a very effective way of data governing. So, on the issue of how to manage the real-time data warehouse, the first consideration is also the hierarchical processing logic, as follows:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"Data source: At the data source level, offline and real-time data sources are consistent. They are mainly divided into log classes and business classes. Log classes include user logs, DB logs, and server logs.")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"Real-time detail layer: At the detail level, in order to solve the problem of repeated construction, a unified construction should be carried out.Using the offline data warehouse model to build a unified basic detailed data layer, managed according to the theme, the purpose of the detail layer is to provide directly available data downstream, so the basic layer should be processed uniformly, such as cleaning, filtering, and dimension expansion.")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"Aggregation layer: The summary layer can directly calculate the result through the concise operator of Flink or Storm. And form a summary of indicators, all indicators are processed at the summary layer, and everyone manages and constructs according to unified specifications, forming a reusable summary result."))),(0,n.kt)("p",null,"In conclusion, from the perspective of the construction of the entire real-time data warehouse,first of all, the data construction needs to be layered, build the framework first, and set the specifications includs  what extent each layer is processed and how each layer is used.The definition of specifications facilitates standardized processing in production.Due to the need to ensure timeliness, don't design too many layers when designing.For scenarios with high real-time requirements, you can basically refer to the left side of the figure above. For batch processing requirements, you can import from the real-time detail layer to the real-time OLAP engine, and perform fast retraction calculations based on the OLAP engine's own calculation and query capabilities, as shown in the data flow on the right side of the figure above."),(0,n.kt)("h1",{id:"real-time-platform-construction"},"Real-time platform construction"),(0,n.kt)("p",null,"After the architecture is determined, the next consideration is how to build a platform.The construction of the real-time platform is completely attached to the real-time data warehouse management."),(0,n.kt)("p",null,"First, abstract the functions and abstract them into components, so that standardized production can be achieved, and systematic guarantees can be further constructed. For the basic processing layer cleaning, filtering, confluence, dimension expansion, conversion, encryption, screening and other functions can be abstracted, and the base layer builds a directly usable data result stream in this componentized way. How to meet diverse needs and how to be compatible with users are the problems that we need to figure out. In this case it may occur problems with redundant processing. In terms of storage, real-time data does not have a history and will not consume too much storage. This redundancy is acceptable.The production efficiency can be improved by means of redundancy, which is an ideological application of changing space for time."),(0,n.kt)("p",null,"Through the processing of the base layer, all data is deposited in the IDL layer, and written to the base layer of the OLAP engine at the same time, and then the real-time summary layer is calculated. Based on Storm, Flink or Doris, multi-dimensional summary indicators are produced to form a unified summary layer for unified storage distribution."),(0,n.kt)("p",null,"When these functions are available, system capabilities such as metadata management, indicator management, data security, SLA, and data quality will be gradually built."),(0,n.kt)("h3",{id:"1real-time-base-layer-functions"},"1.Real-time base layer functions"),(0,n.kt)("p",null,"The construction of the real-time base layer needs to solve some problems."),(0,n.kt)("p",null,"The first is the problem of repeated reading of a stream. When a Binlog is called, it exists in the form of a DB package. Users may only use one of the tables. If everyone wants to use it, there may be a problem that everyone needs to access this stream. The solution can be deconstructed according to different businesses, restored to the basic data flow layer, made into a paradigm structure according to the needs of the business, and integrated with the theme construction according to the modeling method of the data warehouse."),(0,n.kt)("p",null,"Secondly, we need to encapsulate components, such as basic layer cleaning, filtering, and dimension expansion . Users can write logic by a very simple expression. Trans part is more flexible. For example, converting from one value to another value, for this custom logic expression, we also open custom components, which can develop custom scripts through Java or Python for data processing."),(0,n.kt)("h3",{id:"2real-time-feature-production-capabilities"},"2.Real-time feature production capabilities"),(0,n.kt)("p",null,"Feature production can be expressed logically through SQL syntax, and the underlying logic is adapted, and transparently transmitted to the computing engine, shielding the user's dependence on the computing engine.Just like for offline scenarios, currently large companies rarely develop through code, unless there are some special cases, so they can basically be expressed in SQL."),(0,n.kt)("p",null,"At the functional level, the idea of indicator management is integrated. Atomic indicators, derived indicators, standard calculation apertures, dimension selection, window settings and other operations can be configured in a configurable way.In this way, the production logic can be uniformly parsed and packaged uniformly."),(0,n.kt)("p",null,"Another question,with the same source code a lot of SQL is written, and each submission will have a data stream which is a waste of resources.Our solution is to produce dynamic metrics through the same data stream, so that metrics can be added dynamically without stopping the service."),(0,n.kt)("p",null,"So, during the construction of the real-time platform, engineers should consider more about how to use resources more effectively and which links can use resources more economically."),(0,n.kt)("h3",{id:"3sla-construction"},"3.SLA construction"),(0,n.kt)("p",null,"SLA mainly solves two problems, one is about the end-to-end SLA, the other is  about the SLA of job productivity. We adopt the method of burying points + reporting.Because the real-time stream is relatively large, the burying point should be as simple as possible, do not bury too many things,can express the business information is enough.The output of each job is reported to the SLA monitoring platform in a unified manner, and the required information is reported at each job point through a unified interface, and finally the end-to-end SLA can be counted."),(0,n.kt)("p",null,"In real-time production, because the process is very long, it is impossible to control all links, but it can control the efficiency of its own operations, so job SLA is also essential."),(0,n.kt)("h3",{id:"4real-time-olap-solution"},"4.Real-time OLAP solution"),(0,n.kt)("p",null,"Problems:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"Binlog business restoration is complex\uff1aThere are many changes in the business, and changes at a certain point in time are required. Therefore, sorting and data storage are required, which consumes a lot of memory and CPU resources.")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"Binlog business association is complex\uff1aIn stream computing, the relationship between streams and streams is very difficult to express business logic."))),(0,n.kt)("p",null,"solutions\uff1a"),(0,n.kt)("p",null,"To solve the problem through the OLAP engine with computing power, there is no need to logically map a data stream, and only the problem of real-time and stable data storage needs to be solved."),(0,n.kt)("p",null,"We use Doris as a high-performance OLAP engine here.Due to the need for derivative calculations between the results generated by the business data and the results, Doris can quickly restore the business by using the unique model or the aggregation model, and can also perform aggregation at the summary layer while restoring the business,and is also designed for reuse.The application layer can be physical or logical view."),(0,n.kt)("p",null,"This mode focuses on solving the business rollback calculation. For example, when the business state changes, the value needs to be changed at a certain point in history. The cost of using flow calculation in this scenario is very high. The OLAP mode can solve this problem very well."),(0,n.kt)("h1",{id:"real-time-use-cases"},"Real-time use cases"),(0,n.kt)("p",null,"In the end, we use a case to illustrate.For example, merchants want to offer discounts to users based on the number of historical orders placed by users. Merchants need to see how many orders they have placed in history. They must have historical T+1 data and real-time data today.This scenario is a typical Lambda architecture,You can design a partition table in Doris, one is the historical partition, and the other is the today partition. The historical partition can be produced offline. Today's indicators can be calculated in real time and written to today's partition. When querying, a simple summary."),(0,n.kt)("p",null,"This scenario seems relatively simple, but the difficulty lies in the fact that many simple problems will become complicated after the number of merchants increases.Therefore, in the future, we will use more business input to precipitate more business scenarios, abstract them to form a unified production plan and function, and support diversified business needs with minimized real-time computing resources, which is also what needs to be achieved in the future. "),(0,n.kt)("p",null,"That's all for today, thank you."),(0,n.kt)("h3",{id:"about-the-author"},"about the author:"),(0,n.kt)("p",null,"Zhu Liang, more than 5 years experience in data warehouse construction in traditional industries, 6 years experience in Internet data warehouse, technical direction involves offline, real-time data warehouse management, systematic capacity building, OLAP system and engine, big data related technologies, focusing on OLAP,and real-time technology frontier development trends.The business direction involves ad hoc query, operation analysis, strategy report product, user portrait, crowd recommendation, experimental evaluation, etc."))}h.isMDXComponent=!0}}]);