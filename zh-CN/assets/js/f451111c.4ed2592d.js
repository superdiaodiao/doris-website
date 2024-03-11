"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([[89593],{15680:(e,a,t)=>{t.d(a,{xA:()=>c,yg:()=>g});var i=t(296540);function n(e,a,t){return a in e?Object.defineProperty(e,a,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[a]=t,e}function r(e,a){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);a&&(i=i.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),t.push.apply(t,i)}return t}function o(e){for(var a=1;a<arguments.length;a++){var t=null!=arguments[a]?arguments[a]:{};a%2?r(Object(t),!0).forEach((function(a){n(e,a,t[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):r(Object(t)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(t,a))}))}return e}function s(e,a){if(null==e)return{};var t,i,n=function(e,a){if(null==e)return{};var t,i,n={},r=Object.keys(e);for(i=0;i<r.length;i++)t=r[i],a.indexOf(t)>=0||(n[t]=e[t]);return n}(e,a);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(i=0;i<r.length;i++)t=r[i],a.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(n[t]=e[t])}return n}var l=i.createContext({}),u=function(e){var a=i.useContext(l),t=a;return e&&(t="function"==typeof e?e(a):o(o({},a),e)),t},c=function(e){var a=u(e.components);return i.createElement(l.Provider,{value:a},e.children)},d="mdxType",h={inlineCode:"code",wrapper:function(e){var a=e.children;return i.createElement(i.Fragment,{},a)}},p=i.forwardRef((function(e,a){var t=e.components,n=e.mdxType,r=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),d=u(t),p=n,g=d["".concat(l,".").concat(p)]||d[p]||h[p]||r;return t?i.createElement(g,o(o({ref:a},c),{},{components:t})):i.createElement(g,o({ref:a},c))}));function g(e,a){var t=arguments,n=a&&a.mdxType;if("string"==typeof e||n){var r=t.length,o=new Array(r);o[0]=p;var s={};for(var l in a)hasOwnProperty.call(a,l)&&(s[l]=a[l]);s.originalType=e,s[d]="string"==typeof e?e:n,o[1]=s;for(var u=2;u<r;u++)o[u]=t[u];return i.createElement.apply(null,o)}return i.createElement.apply(null,t)}p.displayName="MDXCreateElement"},892657:(e,a,t)=>{t.r(a),t.d(a,{assets:()=>l,contentTitle:()=>o,default:()=>h,frontMatter:()=>r,metadata:()=>s,toc:()=>u});var i=t(58168),n=(t(296540),t(15680));const r={title:"New milestone: Apache Doris 2.1.0 is available now",summary:"Dear community, we are pleased to share with you the official release of Apache Doris 2.1.0, now available for download and use as of March 8th.",date:"2024-03-11",author:"Apache Doris",tags:["Release Notes"],picked:"true",order:"1",image:"/images/2.1.0.png"},o=void 0,s={permalink:"/zh-CN/blog/release-note-2.1.0",source:"@site/blog/release-note-2.1.0.md",title:"New milestone: Apache Doris 2.1.0 is available now",description:"\x3c!--",date:"2024-03-11T00:00:00.000Z",formattedDate:"2024\u5e743\u670811\u65e5",tags:[{label:"Release Notes",permalink:"/zh-CN/blog/tags/release-notes"}],hasTruncateMarker:!1,authors:[{name:"Apache Doris"}],frontMatter:{title:"New milestone: Apache Doris 2.1.0 is available now",summary:"Dear community, we are pleased to share with you the official release of Apache Doris 2.1.0, now available for download and use as of March 8th.",date:"2024-03-11",author:"Apache Doris",tags:["Release Notes"],picked:"true",order:"1",image:"/images/2.1.0.png"},nextItem:{title:"Breaking down data silos with a unified data warehouse: an Apache Doris-based CDP",permalink:"/zh-CN/blog/breaking-down-data-silos-with-an-apache-doris-based-cdp"}},l={authorsImageUrls:[void 0]},u=[{value:"Performance improvement",id:"performance-improvement",level:2},{value:"Smarter optimizer",id:"smarter-optimizer",level:3},{value:"Better heuristic optimization",id:"better-heuristic-optimization",level:3},{value:"Parallel adaptive scan",id:"parallel-adaptive-scan",level:3},{value:"Local shuffle",id:"local-shuffle",level:3},{value:"Faster INSERT INTO SELECT",id:"faster-insert-into-select",level:3},{value:"Data lake analytic performance",id:"data-lake-analytic-performance",level:2},{value:"TPC-DS Benchmark",id:"tpc-ds-benchmark",level:3},{value:"SQL dialects compatibility",id:"sql-dialects-compatibility",level:3},{value:"Arrow Flight SQL protocol",id:"arrow-flight-sql-protocol",level:3},{value:"Asynchronous materialized view",id:"asynchronous-materialized-view",level:2},{value:"Enhanced storage",id:"enhanced-storage",level:2},{value:"Auto-increment column",id:"auto-increment-column",level:3},{value:"Auto partition",id:"auto-partition",level:3},{value:"High-concurrency real-time data ingestion",id:"high-concurrency-real-time-data-ingestion",level:3},{value:"Semi-structured data analysis",id:"semi-structured-data-analysis",level:2},{value:"A new data type: Variant",id:"a-new-data-type-variant",level:3},{value:"IP types",id:"ip-types",level:3},{value:"More powerful functions for compound data types",id:"more-powerful-functions-for-compound-data-types",level:3},{value:"Workload Management",id:"workload-management",level:2},{value:"Hard isolation of resources",id:"hard-isolation-of-resources",level:3},{value:"TopSQL",id:"topsql",level:3},{value:"Others",id:"others",level:2},{value:"Decimal 256",id:"decimal-256",level:3},{value:"Job scheduler",id:"job-scheduler",level:3},{value:"Support Docker fast start to experience the new version",id:"support-docker-fast-start-to-experience-the-new-version",level:3},{value:"Behavior changed",id:"behavior-changed",level:2},{value:"Credits",id:"credits",level:2}],c={toc:u},d="wrapper";function h(e){let{components:a,...t}=e;return(0,n.yg)(d,(0,i.A)({},c,t,{components:a,mdxType:"MDXLayout"}),(0,n.yg)("p",null,"Dear community, we are pleased to share with you the official release of Apache Doris 2.1.0, now available for download and use as of March 8th. This latest version marks a significant milestone in our journey towards enhancing data analysis capabilities, particularly for handling massive and complex datasets."),(0,n.yg)("p",null,"With Doris 2.1.0, our primary focus has been on optimizing analysis performance, and the results speak for themselves. We have achieved an impressive performance improvement of over 100% on the TPC-DS 1TB test dataset, making Apache Doris more capable of challenging real-world business scenarios."),(0,n.yg)("ul",null,(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("p",{parentName:"li"},(0,n.yg)("strong",{parentName:"p"},"Quick Download\uff1a")," ",(0,n.yg)("a",{parentName:"p",href:"https://doris.apache.org/download/"},"https://doris.apache.org/download/"))),(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("p",{parentName:"li"},(0,n.yg)("strong",{parentName:"p"},"GitHub\uff1a")," ",(0,n.yg)("a",{parentName:"p",href:"https://github.com/apache/doris/releases"},"https://github.com/apache/doris/releases")))),(0,n.yg)("h2",{id:"performance-improvement"},"Performance improvement"),(0,n.yg)("h3",{id:"smarter-optimizer"},"Smarter optimizer"),(0,n.yg)("p",null,"On the basis of V2.0, the query optimizer in Doris V2.1 comes with enhanced statistics-based inference and enumeration framework. We have upgraded the cost model and expanded the optimization rules to serve the needs of more use cases"),(0,n.yg)("h3",{id:"better-heuristic-optimization"},"Better heuristic optimization"),(0,n.yg)("p",null,"For data analytics at scale or data lake scenarios, Doris V2.1 provides better heuristic query plans. Meanwhile, the RuntimeFilter is more self-adaptive to enable higher performance even without statistical information."),(0,n.yg)("h3",{id:"parallel-adaptive-scan"},"Parallel adaptive scan"),(0,n.yg)("p",null,"Doris V2.1 has adopted parallel adaptive scan to optimize scan I/O and thus improve query performance. It can avoid the negative impact of unreasonable numbers of buckets. (This feature is currently available on the Duplicate Key model and Merge-on-Write Unique Key model.)"),(0,n.yg)("h3",{id:"local-shuffle"},"Local shuffle"),(0,n.yg)("p",null,"We have introduced Local Shuffle to prevent uneven data distribution. Benchmark tests show that Local Shuffle in combination with Parallel Adaptive Scan can guarantee fast query performance in spite of unreasonable bucket number settings upon table creation."),(0,n.yg)("h3",{id:"faster-insert-into-select"},"Faster INSERT INTO SELECT"),(0,n.yg)("p",null,"To further improve the performance of INSERT INTO SELECT, which is a frequent operation in ETL, we have moved forward the MemTable execution-wise to reduce data ingestion overheads. Tests show that this can double the data ingestion speed in most cases compared to V2.0.\nImproved data lake analytics capabilities"),(0,n.yg)("h2",{id:"data-lake-analytic-performance"},"Data lake analytic performance"),(0,n.yg)("h3",{id:"tpc-ds-benchmark"},"TPC-DS Benchmark"),(0,n.yg)("p",null,"According to TPC-DS benchmark tests (1TB) of Doris V2.1 against Trino,"),(0,n.yg)("ul",null,(0,n.yg)("li",{parentName:"ul"},"Without caching, the total execution time of Doris is 56% of that of Trino V435. (717s VS 1296s)"),(0,n.yg)("li",{parentName:"ul"},"Enabling file cache can further increase the overall performance of Doris by 2.2 times. (323s)\nThis is achieved by a series of optimizations in I/O, parquet/ORC file reading, predicate pushdown, caching, and scan task scheduling, etc.")),(0,n.yg)("h3",{id:"sql-dialects-compatibility"},"SQL dialects compatibility"),(0,n.yg)("p",null,"To facilitate migration to Doris and increase its compatibility with other DBMS, we have enabled SQL dialect conversion in V2.1. (",(0,n.yg)("a",{parentName:"p",href:"https://doris.apache.org/docs/lakehouse/sql-dialect/"},"read more"),') For example, by set sql_dialect = "trino" in Doris, you can use the Trino SQL dialect as you\'re used to, without modifying your current business logic, and Doris will execute the corresponding queries for you. Tests in user production environment show that Doris V2.1 is compatible with 99% of Trino SQL.'),(0,n.yg)("h3",{id:"arrow-flight-sql-protocol"},"Arrow Flight SQL protocol"),(0,n.yg)("p",null,"As a column-oriented database compatible with MySQL 8.0 protocol, Doris V2.1 now supports the Arrow Flight SQL protocol as well so users can have fast access to Doris data via Pandas/Numpy without data serialization and deserialization. For most common data types, the Arrow Flight protocol enables tens of times faster performance than the MySQL protocol."),(0,n.yg)("h2",{id:"asynchronous-materialized-view"},"Asynchronous materialized view"),(0,n.yg)("p",null,"V2.1 allows creating a materialized view based on multiple tables. This feature currently supports:"),(0,n.yg)("ul",null,(0,n.yg)("li",{parentName:"ul"},"Transparent rewriting: supports transparent rewriting of common operators including Select, Where, Join, Group By, and Aggregation."),(0,n.yg)("li",{parentName:"ul"},"Auto refresh: supports regular refresh, manual refresh, full refresh, incremental refresh, and partition-based refresh."),(0,n.yg)("li",{parentName:"ul"},"Materialized view of external tables: supports materialized views based on external data tables such as those on Hive, Hudi, and Iceberg; supported synchronizing data from data lakes into Doris internal tables via materialized views."),(0,n.yg)("li",{parentName:"ul"},"Direct query on materialized views: Materialized views can be regarded as the result set after ETL. In this sense, materialized views are data tables, so users can conduct queries on them directly.")),(0,n.yg)("h2",{id:"enhanced-storage"},"Enhanced storage"),(0,n.yg)("h3",{id:"auto-increment-column"},"Auto-increment column"),(0,n.yg)("p",null,"V2.1 supports auto-increment columns, which can ensure data uniqueness of each row. This lays the foundation for efficient dictionary encoding and query pagination. For example, for precise UV calculation and customer grouping, users often apply the bitmap type in Doris, the process of which entails dictionary encoding. With V2.1, users can first create a dictionary table using the auto-increment column, and then simply load user data into it."),(0,n.yg)("h3",{id:"auto-partition"},"Auto partition"),(0,n.yg)("p",null,"To further release burden on operation and maintenance, V2.1 allows auto data partitioning. Upon data ingestion, it detects whether a partition exists for the data based on the partitioning column. If not, it automatically creates one and starts data ingestion."),(0,n.yg)("h3",{id:"high-concurrency-real-time-data-ingestion"},"High-concurrency real-time data ingestion"),(0,n.yg)("p",null,"For data writing, a back pressure mechanism is in place to avoid execessive data versions, so as to reduce resource consumption by data version merging. In addition, V2.1 supports group commit (",(0,n.yg)("a",{parentName:"p",href:"https://doris.apache.org/docs/data-operate/import/import-way/group-commit-manual/"},"read more"),"), which means to accumulate multiple writing and commit them as one. Benchmark tests on group commit with JDBC ingestion and the Stream Load method present great results."),(0,n.yg)("h2",{id:"semi-structured-data-analysis"},"Semi-structured data analysis"),(0,n.yg)("h3",{id:"a-new-data-type-variant"},"A new data type: Variant"),(0,n.yg)("p",null,"V2.1 supports a new data type named Variant. It can accommodate semi-structured data such as JSON as well as compound data types that contain integers, strings, booleans, etcs. Users don't have to pre-define the exact data types for a Variant column in the table schema. The Variant type is handy when processing nested data structures.\nYou can include Variant columns and static columns with pre-defined data types in the same table. This will provide you with more flexibility in storage and queries.\nTests with ClickBench datasets prove that data in Variant columns takes up the same storage space as data in static columns, which is half of that in JSON format. In terms of query performance, the Variant type enables 8 times higher query speed than JSON in hot runs and even more in cold runs."),(0,n.yg)("h3",{id:"ip-types"},"IP types"),(0,n.yg)("p",null,"Doris V2.1 provides native support for IPv4 and IPv6. It stores IP data in binary format, which cuts down storage space usage by 60% compared to IP string in plain texts. Along with these IP types, we have added over 20 functions for IP data processing."),(0,n.yg)("h3",{id:"more-powerful-functions-for-compound-data-types"},"More powerful functions for compound data types"),(0,n.yg)("ul",null,(0,n.yg)("li",{parentName:"ul"},"explode_map: supports exploding rows into columns for the Map data type."),(0,n.yg)("li",{parentName:"ul"},"Supports the STRUCT data type in the IN predicates")),(0,n.yg)("h2",{id:"workload-management"},"Workload Management"),(0,n.yg)("h3",{id:"hard-isolation-of-resources"},"Hard isolation of resources"),(0,n.yg)("p",null,"On the basis of the Workload Group mechanism, which imposes a soft limit on the resources that a workload group can use, Doris 2.1 introduces a hard limit on CPU resource consumption for workload groups as a way to ensure higher stability in query performance."),(0,n.yg)("h3",{id:"topsql"},"TopSQL"),(0,n.yg)("p",null,"V2.1 allows users to check the most resource-consuming SQL queries in the runtime. This can be a big help when handling cluster load spike caused by unexpected large queries."),(0,n.yg)("h2",{id:"others"},"Others"),(0,n.yg)("h3",{id:"decimal-256"},"Decimal 256"),(0,n.yg)("p",null,"For users in the financial sector or high-end manufacturing, V2.1 supports a high-precision data type: Decimal, which supports up to 76 significant digits (an experimental feature, please set enable_decimal256=true.)"),(0,n.yg)("h3",{id:"job-scheduler"},"Job scheduler"),(0,n.yg)("p",null,"V2.1 provides a good option for regular task scheduling: Doris Job Scheduler. It can trigger the pre-defined operations on schedule or at fixed intervals. The Doris Job Scheduler is accurate to the second. It provides consistency guarantee for data writing, high efficiency and flexibility, high-performance processing queues, retraceable scheduling records, and high availability of jobs."),(0,n.yg)("h3",{id:"support-docker-fast-start-to-experience-the-new-version"},"Support Docker fast start to experience the new version"),(0,n.yg)("p",null,"Starting from version 2.1.0, we will provide a separate Docker Image to support the rapid creation of a 1FE, 1BE Docker container to experience the new version of Doris. The container will complete the initialization of FE and BE, BE registration and other steps by default. After creating the container, it can directly access and use the Doris cluster about 1 ",(0,n.yg)("a",{parentName:"p",href:"http://minute.in/"},"minute.In")," this image version, the default ",(0,n.yg)("inlineCode",{parentName:"p"},"max_map_count"),", ",(0,n.yg)("inlineCode",{parentName:"p"},"ulimit"),", ",(0,n.yg)("inlineCode",{parentName:"p"},"Swap")," and other hard limits are removed. It supports X64 (avx2) machines and ARM machines for deployment. The default open ports are 8000, 8030, 8040, 9030.If you need to experience the Broker component, you can add the environment variable ",(0,n.yg)("inlineCode",{parentName:"p"},"--env BROKER=true")," at startup to start the Broker process synchronously. After startup, it will automatically complete the registration. The Broker name is ",(0,n.yg)("inlineCode",{parentName:"p"},"test"),"."),(0,n.yg)("p",null,"Please note that this version is only suitable for quick experience and functional testing, not for production environment!"),(0,n.yg)("h2",{id:"behavior-changed"},"Behavior changed"),(0,n.yg)("ul",null,(0,n.yg)("li",{parentName:"ul"},"The default data model is the Merge-on-Write Unique Key model. enable_unique_key_merge_on_write will be included as a default setting when a table is created in the Unique Key model."),(0,n.yg)("li",{parentName:"ul"},"As inverted index has proven to be more performant than bitmap index, V2.1 stops supporting bitmap index. Existing bitmap indexes will remain effective but new creation is not allowed. We will remove bitmap index-related code in the future."),(0,n.yg)("li",{parentName:"ul"},"cpu_resource_limit is no longer supported. It is to put a limit on the number of scanner threads on Doris BE. Since the workload group mechanism also supports such settings, the already configured cpu_resource_limit will be invalid."),(0,n.yg)("li",{parentName:"ul"},"The default value of enable_segcompaction is true. This means Doris supports compaction of multiple segments in the same rowset."),(0,n.yg)("li",{parentName:"ul"},"Audit log plug-in",(0,n.yg)("ul",{parentName:"li"},(0,n.yg)("li",{parentName:"ul"},"Since V2.1.0, Doris has a built-in audit log plug-in. Users can simply enable or disable it by setting the enable_audit_plugin parameter."),(0,n.yg)("li",{parentName:"ul"},"If you have already installed your own audit log plug-in, you can either continue using it after upgrading to Doris V2.1, or uninstall it and use the one in Doris. Please note that the audit log table will be relocated after switching plug-in."),(0,n.yg)("li",{parentName:"ul"},"For more details, please see the ",(0,n.yg)("a",{parentName:"li",href:"https://doris.apache.org/docs/ecosystem/audit-plugin/"},"docs"),".")))),(0,n.yg)("h2",{id:"credits"},"Credits"),(0,n.yg)("p",null,"Thanks all who contribute to this release:  "),(0,n.yg)("p",null,"467887319\u3001924060929\u3001acnot\u3001airborne12\u3001AKIRA\u3001alan_rodriguez\u3001AlexYue\u3001allenhooo\u3001amory\u3001amory\u3001AshinGau\u3001beat4ocean\u3001BePPPower\u3001bigben0204\u3001bingquanzhao\u3001BirdAmosBird\u3001BiteTheDDDDt\u3001bobhan1\u3001caiconghui\u3001camby\u3001camby\u3001CanGuan\u3001caoliang-web\u3001catpineapple\u3001Centurybbx\u3001chen\u3001ChengDaqi2023\u3001ChenyangSunChenyang\u3001Chester\u3001ChinaYiGuan\u3001ChouGavinChou\u3001chunping\u3001colagy\u3001CSTGluigi\u3001czzmmc\u3001daidai\u3001dalong\u3001dataroaring\u3001DeadlineFen\u3001DeadlineFen\u3001deadlinefen\u3001deardeng\u3001didiaode18\u3001DongLiang-0\u3001dong-shuai\u3001Doris-Extras\u3001Dragonliu2018\u3001DrogonJackDrogon\u3001DuanXujianDuan\u3001DuRipeng\u3001dutyu\u3001echo-dundun\u3001ElvinWei\u3001englefly\u3001Euporia\u3001feelshana\u3001feifeifeimoon\u3001feiniaofeiafei\u3001felixwluo\u3001figurant\u3001flynn\u3001fornaix\u3001FreeOnePlus\u3001Gabriel39\u3001gitccl\u3001gnehil\u3001GoGoWen\u3001gohalo\u3001guardcrystal\u3001hammer\u3001HappenLee\u3001HB\u3001hechao\u3001HelgeLarsHelge\u3001herry2038\u3001HeZhangJianHe\u3001HHoflittlefish777\u3001HonestManXin\u3001hongkun-Shao\u3001HowardQin\u3001hqx871\u3001httpshirley\u3001htyoung\u3001huanghaibin\u3001HuJerryHu\u3001HuZhiyuHu\u3001Hyman-zhao\u3001i78086\u3001irenesrl\u3001ixzc\u3001jacktengg\u3001jacktengg\u3001jackwener\u3001jayhua\u3001Jeffrey\u3001jiafeng.zhang\u3001Jibing-Li\u3001JingDas\u3001julic20s\u3001kaijchen\u3001kaka11chen\u3001KassieZ\u3001kindred77\u3001KirsCalvinKirs\u3001KirsCalvinKirs\u3001kkop\u3001koarz\u3001LemonLiTree\u3001LHG41278\u3001liaoxin01\u3001LiBinfeng-01\u3001LiChuangLi\u3001LiDongyangLi\u3001Lightman\u3001lihangyu\u3001lihuigang\u3001LingAdonisLing\u3001liugddx\u3001LiuGuangdongLiu\u3001LiuHongLiu\u3001liuJiwenliu\u3001LiuLijiaLiu\u3001lsy3993\u3001LuGuangmingLu\u3001LuoMetaLuo\u3001luozenglin\u3001Luwei\u3001Luzhijing\u3001lxliyou001\u3001Ma1oneZhang\u3001mch_ucchi\u3001Miaohongkai\u3001morningman\u3001morrySnow\u3001Mryange\u3001mymeiyi\u3001nanfeng\u3001nanfeng\u3001Nitin-Kashyap\u3001PaiVallishPai\u3001Petrichor\u3001plat1ko\u3001py023\u3001q763562998\u3001qidaye\u3001QiHouliangQi\u3001ranxiang327\u3001realize096\u3001rohitrs1983\u3001sdhzwc\u3001seawinde\u3001seuhezhiqiang\u3001seuhezhiqiang\u3001shee\u3001shuke987\u3001shysnow\u3001songguangfan\u3001Stalary\u3001starocean999\u3001SunChenyangSun\u3001sunny\u3001SWJTU-ZhangLei\u3001TangSiyang2001\u3001Tanya-W\u3001taoxutao\u3001Uniqueyou\u3001vhwzIs\u3001walter\u3001walter\u3001wangbo\u3001Wanghuan\u3001wangqt\u3001wangtao\u3001wangtianyi2004\u3001wenluowen\u3001whuxingying\u3001wsjz\u3001wudi\u3001wudongliang\u3001wuwenchihdu\u3001wyx123654\u3001xiangran0327\u3001Xiaocc\u3001XiaoChangmingXiao\u3001xiaokang\u3001XieJiann\u3001Xinxing\u3001xiongjx\u3001xuefengze\u3001xueweizhang\u3001XueYuhai\u3001XuJianxu\u3001xuke-hat\u3001xy\u3001xy720\u3001xyfsjq\u3001xzj7019\u3001yagagagaga\u3001yangshijie\u3001YangYAN\u3001yiguolei\u3001yiguolei\u3001yimeng\u3001YinShaowenYin\u3001Yoko\u3001yongjinhou\u3001ytwp\u3001yuanyuan8983\u3001yujian\u3001yujun777\u3001Yukang-Lian\u3001Yulei-Yang\u3001yuxuan-luo\u3001zclllyybb\u3001ZenoYang\u3001zfr95\u3001zgxme\u3001zhangdong\u3001zhangguoqiang\u3001zhangstar333\u3001zhangstar333\u3001zhangy5\u3001ZhangYu0123\u3001zhannngchen\u3001ZhaoLongZhao\u3001zhaoshuo\u3001zhengyu\u3001zhiqqqq\u3001ZhongJinHacker\u3001ZhuArmandoZhu\u3001zlw5307\u3001ZouXinyiZou\u3001zxealous\u3001zy-kkk\u3001zzwwhh\u3001zzzxl1993\u3001zzzzzzzs"))}h.isMDXComponent=!0}}]);