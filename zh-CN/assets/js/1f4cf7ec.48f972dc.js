"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([[8974],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>u});var a=n(67294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var l=a.createContext({}),d=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},c=function(e){var t=d(e.components);return a.createElement(l.Provider,{value:t},e.children)},m="mdxType",h={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},p=a.forwardRef((function(e,t){var n=e.components,i=e.mdxType,o=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),m=d(n),p=i,u=m["".concat(l,".").concat(p)]||m[p]||h[p]||o;return n?a.createElement(u,r(r({ref:t},c),{},{components:n})):a.createElement(u,r({ref:t},c))}));function u(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=n.length,r=new Array(o);r[0]=p;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[m]="string"==typeof e?e:i,r[1]=s;for(var d=2;d<o;d++)r[d]=n[d];return a.createElement.apply(null,r)}return a.createElement.apply(null,n)}p.displayName="MDXCreateElement"},84521:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>r,default:()=>h,frontMatter:()=>o,metadata:()=>s,toc:()=>d});var a=n(87462),i=(n(67294),n(3905));const o={title:"Apache Doris announced the official release of version 1.1.0",summary:"Dear community, we are pleased to announce that we have officially released Apache Doris 1.1 on July 14, 2022! This is the first release version after Apache Doris graduated from the Apache incubator and became an Apache Top-Level Project.",date:"2022-07-14",author:"Apache Doris",tags:["Release Notes"],image:"/images/release-notes.png"},r=void 0,s={permalink:"/zh-CN/blog/release-note-1.1.0",source:"@site/blog/release-note-1.1.0.md",title:"Apache Doris announced the official release of version 1.1.0",description:"Dear community, we are pleased to announce that we have officially released Apache Doris 1.1 on July 14, 2022! This is the first release version after Apache Doris graduated from the Apache incubator and became an Apache Top-Level Project.",date:"2022-07-14T00:00:00.000Z",formattedDate:"2022\u5e747\u670814\u65e5",tags:[{label:"Release Notes",permalink:"/zh-CN/blog/tags/release-notes"}],hasTruncateMarker:!1,authors:[{name:"Apache Doris"}],frontMatter:{title:"Apache Doris announced the official release of version 1.1.0",summary:"Dear community, we are pleased to announce that we have officially released Apache Doris 1.1 on July 14, 2022! This is the first release version after Apache Doris graduated from the Apache incubator and became an Apache Top-Level Project.",date:"2022-07-14",author:"Apache Doris",tags:["Release Notes"],image:"/images/release-notes.png"},prevItem:{title:"Best practice of Apache Doris in Xiaomi Group",permalink:"/zh-CN/blog/xiaomi"},nextItem:{title:"Announcing open source realtime analytical database Apache Doris as a top-level project",permalink:"/zh-CN/blog/Annoucing"}},l={authorsImageUrls:[void 0]},d=[{value:"Upgrade Notes",id:"upgrade-notes",level:2},{value:"The vectorized execution engine is enabled by default",id:"the-vectorized-execution-engine-is-enabled-by-default",level:3},{value:"BE Binary File Renaming",id:"be-binary-file-renaming",level:3},{value:"Segment storage format upgrade",id:"segment-storage-format-upgrade",level:3},{value:"Normal Upgrade",id:"normal-upgrade",level:3},{value:"Features",id:"features",level:2},{value:"Support random distribution of data experimental",id:"support-random-distribution-of-data-experimental",level:3},{value:"Support for creating Iceberg external tablesexperimental",id:"support-for-creating-iceberg-external-tablesexperimental",level:3},{value:"Added ZSTD compression algorithm",id:"added-zstd-compression-algorithm",level:3},{value:"Improvements",id:"improvements",level:2},{value:"More comprehensive vectorization support",id:"more-comprehensive-vectorization-support",level:3},{value:"Compaction logic optimization and real-time guarantee",id:"compaction-logic-optimization-and-real-time-guarantee",level:3},{value:"Read efficiency optimization for Parquet and ORC files",id:"read-efficiency-optimization-for-parquet-and-orc-files",level:3},{value:"Safer metadata Checkpoint",id:"safer-metadata-checkpoint",level:3},{value:"Bugfix",id:"bugfix",level:2},{value:"Fix the problem that the data cannot be queried due to the missing data version.(Serious)",id:"fix-the-problem-that-the-data-cannot-be-queried-due-to-the-missing-data-versionserious",level:3},{value:"Fix the problem that the resource isolation is invalid for the resource usage limit of loading tasks (Moderate)",id:"fix-the-problem-that-the-resource-isolation-is-invalid-for-the-resource-usage-limit-of-loading-tasks-moderate",level:3},{value:"Use HTTP BRPC to transfer network data packets over 2GB (Moderate)",id:"use-http-brpc-to-transfer-network-data-packets-over-2gb-moderate",level:3},{value:"Others",id:"others",level:2},{value:"Disabling Mini Load",id:"disabling-mini-load",level:3},{value:"Completely disable the SegmentV1 storage format",id:"completely-disable-the-segmentv1-storage-format",level:3},{value:"Limit the maximum length of String type",id:"limit-the-maximum-length-of-string-type",level:3},{value:"Fix fastjson related vulnerabilities",id:"fix-fastjson-related-vulnerabilities",level:3},{value:"Added <code>ADMIN DIAGNOSE TABLET</code> command",id:"added-admin-diagnose-tablet-command",level:3},{value:"Download to Use",id:"download-to-use",level:2},{value:"Download Link",id:"download-link",level:3},{value:"Feedback",id:"feedback",level:3},{value:"Thanks",id:"thanks",level:2}],c={toc:d},m="wrapper";function h(e){let{components:t,...o}=e;return(0,i.kt)(m,(0,a.Z)({},c,o,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"Dear community, we are pleased to announce that we have officially released Apache Doris 1.1 on July 14, 2022! This is the first release version after Apache Doris graduated from the Apache incubator and became an Apache Top-Level Project."),(0,i.kt)("p",null,"In version 1.1, we realized the full vectorization of the computing layer and storage layer, and officially enabled the vectorized execution engine as a stable function. All queries are executed by the vectorized execution engine by default, and the performance is 3-5 times higher than the previous version. It increases the ability to access the external tables of Apache Iceberg and supports federated query of data in Doris and Iceberg, and expands the analysis capabilities of Apache Doris on the data lake; on the basis of the original LZ4, the ZSTD compression algorithm is added , further improves the data compression rate; fixed many performance and stability problems in previous versions, greatly improving system stability. Downloading and using is recommended."),(0,i.kt)("h2",{id:"upgrade-notes"},"Upgrade Notes"),(0,i.kt)("h3",{id:"the-vectorized-execution-engine-is-enabled-by-default"},"The vectorized execution engine is enabled by default"),(0,i.kt)("p",null,"In version 1.0, we introduced the vectorized execution engine as an experimental feature and Users need to manually enable it when executing queries by configuring the session variables through ",(0,i.kt)("inlineCode",{parentName:"p"},"set batch_size = 4096")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"set enable_vectorized_engine = true")," ."),(0,i.kt)("p",null,"In version 1.1, we officially fully enabled the vectorized execution engine as a stable function. The session variable ",(0,i.kt)("inlineCode",{parentName:"p"},"enable_vectorized_engine")," is set to true by default. All queries are executed by default through the vectorized execution engine."),(0,i.kt)("h3",{id:"be-binary-file-renaming"},"BE Binary File Renaming"),(0,i.kt)("p",null,"BE binary file has been renamed from palo_be to doris_be . Please pay attention to modifying the relevant scripts if you used to rely on process names for cluster management and other operations."),(0,i.kt)("h3",{id:"segment-storage-format-upgrade"},"Segment storage format upgrade"),(0,i.kt)("p",null,"The storage format of earlier versions of Apache Doris was Segment V1. In version 0.12, we had implemented Segment V2 as a new storage format, which introduced Bitmap indexes, memory tables, page cache, dictionary compression, delayed materialization and many other features. Starting from version 0.13, the default storage format for newly created tables is Segment V2, while maintaining compatibility with the Segment V1 format."),(0,i.kt)("p",null,"In order to ensure the maintainability of the code structure and reduce the additional learning and development costs caused by redundant historical codes, we have decided to no longer support the Segment v1 storage format from the next version. It is expected that this part of the code will be deleted in the Apache Doris 1.2 version, and all users who are still using the Segment V1 storage format must complete the data format conversion in version 1.1. Please refer to the following link for the operation manual:"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://doris.apache.org/zh-CN/docs/1.0/administrator-guide/segment-v2-usage"},"https://doris.apache.org/zh-CN/docs/1.0/administrator-guide/segment-v2-usage")),(0,i.kt)("h3",{id:"normal-upgrade"},"Normal Upgrade"),(0,i.kt)("p",null,"For normal upgrade operations, you can perform rolling upgrades according to the cluster upgrade documentation on the official website."),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://doris.apache.org/zh-CN/docs/admin-manual/cluster-management/upgrade"},"https://doris.apache.org/zh-CN/docs/admin-manual/cluster-management/upgrade")),(0,i.kt)("h2",{id:"features"},"Features"),(0,i.kt)("h3",{id:"support-random-distribution-of-data-experimental"},"Support random distribution of data ","[experimental]"),(0,i.kt)("p",null,"In some scenarios (such as log data analysis), users may not be able to find a suitable bucket key to avoid data skew, so the system needs to provide additional distribution methods to solve the problem."),(0,i.kt)("p",null,"Therefore, when creating a table you can set ",(0,i.kt)("inlineCode",{parentName:"p"},"DISTRIBUTED BY random BUCKET number"),"to use random distribution, the data will be randomly written to a single tablet when importing to reduce the data fanout during the loading process. And reduce resource overhead and improve system stability."),(0,i.kt)("h3",{id:"support-for-creating-iceberg-external-tablesexperimental"},"Support for creating Iceberg external tables","[experimental]"),(0,i.kt)("p",null,"Iceberg external tables provide Apache Doris with direct access to data stored in Iceberg. Through Iceberg external tables, federated queries on data stored in local storage and Iceberg can be implemented, which saves tedious data loading work, simplifies the system architecture for data analysis, and performs more complex analysis operations."),(0,i.kt)("p",null,"In version 1.1, Apache Doris supports creating Iceberg external tables and querying data, and supports automatic synchronization of all table schemas in the Iceberg database through the REFRESH command."),(0,i.kt)("h3",{id:"added-zstd-compression-algorithm"},"Added ZSTD compression algorithm"),(0,i.kt)("p",null,"At present, the data compression method in Apache Doris is uniformly specified by the system, and the default is LZ4. For some scenarios that are sensitive to data storage costs, the original data compression ratio requirements cannot be met."),(0,i.kt)("p",null,'In version 1.1, users can set "compression"="zstd" in the table properties to specify the compression method as ZSTD when creating a table. In the 25GB 110 million lines of text log test data, the highest compression rate is nearly 10 times, which is 53% higher than the original compression rate, and the speed of reading data from disk and decompressing it is increased by 30%.'),(0,i.kt)("h2",{id:"improvements"},"Improvements"),(0,i.kt)("h3",{id:"more-comprehensive-vectorization-support"},"More comprehensive vectorization support"),(0,i.kt)("p",null,"In version 1.1, we implemented full vectorization of the compute and storage layers, including:"),(0,i.kt)("p",null,"Implemented vectorization of all built-in functions"),(0,i.kt)("p",null,"The storage layer implements vectorization and supports dictionary optimization for low-cardinality string columns"),(0,i.kt)("p",null,"Optimized and resolved numerous performance and stability issues with the vectorization engine."),(0,i.kt)("p",null,"We tested the performance of Apache Doris version 1.1 and version 0.15 on the SSB and TPC-H standard test datasets:"),(0,i.kt)("p",null,"On all 13 SQLs in the SSB test data set, version 1.1 is better than version 0.15, and the overall performance is improved by about 3 times, which solves the problem of performance degradation in some scenarios in version 1.0;"),(0,i.kt)("p",null,"On all 22 SQLs in the TPC-H test data set, version 1.1 is better than version 0.15, the overall performance is improved by about 4.5 times, and the performance of some scenarios is improved by more than ten times;"),(0,i.kt)("p",null,(0,i.kt)("img",{src:n(83608).Z,width:"1280",height:"554"})),(0,i.kt)("p",{align:"center"},"SSB Benchmark"),(0,i.kt)("p",null,(0,i.kt)("img",{src:n(76218).Z,width:"1280",height:"596"})),(0,i.kt)("p",{align:"center"},"TPC-H Benchmark"),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Performance test report")),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://doris.apache.org/zh-CN/docs/benchmark/ssb"},"https://doris.apache.org/zh-CN/docs/benchmark/ssb")),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://doris.apache.org/zh-CN/docs/benchmark/tpch"},"https://doris.apache.org/zh-CN/docs/benchmark/tpch")),(0,i.kt)("h3",{id:"compaction-logic-optimization-and-real-time-guarantee"},"Compaction logic optimization and real-time guarantee"),(0,i.kt)("p",null,"In Apache Doris, each commit will generate a data version. In high concurrent write scenarios, -235 errors are prone to occur due to too many data versions and untimely compaction, and query performance will also decrease accordingly."),(0,i.kt)("p",null,"In version 1.1, we introduced QuickCompaction, which will actively trigger compaction when the data version increases. At the same time, by improving the ability to scan fragment metadata, it can quickly find fragments with too many data versions and trigger compaction. Through active triggering and passive scanning, the real-time problem of data merging is completely solved."),(0,i.kt)("p",null,"At the same time, for high-frequency small file cumulative compaction, the scheduling and isolation of compaction tasks is implemented to prevent the heavyweight base compaction from affecting the merging of new data."),(0,i.kt)("p",null,"Finally, for the merging of small files, the strategy of merging small files is optimized, and the method of gradient merging is adopted. Each time the files participating in the merging belong to the same data magnitude, it prevents versions with large differences in size from merging, and gradually merges hierarchically. , reducing the number of times a single file participates in merging, which can greatly save the CPU consumption of the system."),(0,i.kt)("p",null,"When the data upstream maintains a write frequency of 10w per second (20 concurrent write tasks, 5000 rows per job, and checkpoint interval of 1s), version 1.1 behaves as follows:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Quick data consolidation: Tablet version remains below 50 and compaction score is stable. Compared with the -235 problem that frequently occurred during high concurrent writing in the previous version, the compaction merge efficiency has been improved by more than 10 times.")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Significantly reduced CPU resource consumption: The strategy has been optimized for small file Compaction. In the above scenario of high concurrent writing, CPU resource consumption is reduced by 25%;")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Stable query time consumption: The overall orderliness of data is improved, and the fluctuation of query time consumption is greatly reduced. The query time consumption during high concurrent writing is the same as that of only querying, and the query performance is improved by 3-4 times compared with the previous version."))),(0,i.kt)("h3",{id:"read-efficiency-optimization-for-parquet-and-orc-files"},"Read efficiency optimization for Parquet and ORC files"),(0,i.kt)("p",null,"By adjusting arrow parameters, arrow's multi-threaded read capability is used to speed up Arrow's reading of each row_group, and it is modified to SPSC model to reduce the cost of waiting for the network through prefetching. After optimization, the performance of Parquet file import is improved by 4 to 5 times."),(0,i.kt)("h3",{id:"safer-metadata-checkpoint"},"Safer metadata Checkpoint"),(0,i.kt)("p",null,"By double-checking the image files generated after the metadata checkpoint and retaining the function of historical image files, the problem of metadata corruption caused by image file errors is solved."),(0,i.kt)("h2",{id:"bugfix"},"Bugfix"),(0,i.kt)("h3",{id:"fix-the-problem-that-the-data-cannot-be-queried-due-to-the-missing-data-versionserious"},"Fix the problem that the data cannot be queried due to the missing data version.(Serious)"),(0,i.kt)("p",null,"This issue was introduced in version 1.0 and may result in the loss of data versions for multiple replicas."),(0,i.kt)("h3",{id:"fix-the-problem-that-the-resource-isolation-is-invalid-for-the-resource-usage-limit-of-loading-tasks-moderate"},"Fix the problem that the resource isolation is invalid for the resource usage limit of loading tasks (Moderate)"),(0,i.kt)("p",null,"In 1.1, the broker load and routine load will use Backends with specified resource tags to do the load."),(0,i.kt)("h3",{id:"use-http-brpc-to-transfer-network-data-packets-over-2gb-moderate"},"Use HTTP BRPC to transfer network data packets over 2GB (Moderate)"),(0,i.kt)("p",null,"In the previous version, when the data transmitted between Backends through BRPC exceeded 2GB,\nit may cause data transmission errors."),(0,i.kt)("h2",{id:"others"},"Others"),(0,i.kt)("h3",{id:"disabling-mini-load"},"Disabling Mini Load"),(0,i.kt)("p",null,"The ",(0,i.kt)("inlineCode",{parentName:"p"},"/_load")," interface is disabled by default, please use ",(0,i.kt)("inlineCode",{parentName:"p"},"the /_stream_load")," interface uniformly.\nOf course, you can re-enable it by turning off the FE configuration item ",(0,i.kt)("inlineCode",{parentName:"p"},"disable_mini_load"),"."),(0,i.kt)("p",null,"The Mini Load interface will be completely removed in version 1.2."),(0,i.kt)("h3",{id:"completely-disable-the-segmentv1-storage-format"},"Completely disable the SegmentV1 storage format"),(0,i.kt)("p",null,"Data in SegmentV1 format is no longer allowed to be created. Existing data can continue to be accessed normally.\nYou can use the ",(0,i.kt)("inlineCode",{parentName:"p"},"ADMIN SHOW TABLET STORAGE FORMAT")," statement to check whether the data in SegmentV1 format\nstill exists in the cluster. And convert to SegmentV2 through the data conversion command"),(0,i.kt)("p",null,"Access to SegmentV1 data will no longer be supported in version 1.2."),(0,i.kt)("h3",{id:"limit-the-maximum-length-of-string-type"},"Limit the maximum length of String type"),(0,i.kt)("p",null,"In previous versions, String types were allowed a maximum length of 2GB.\nIn version 1.1, we will limit the maximum length of the string type to 1MB. Strings longer than this length cannot be written anymore.\nAt the same time, using the String type as a partitioning or bucketing column of a table is no longer supported."),(0,i.kt)("p",null,"The String type that has been written can be accessed normally."),(0,i.kt)("h3",{id:"fix-fastjson-related-vulnerabilities"},"Fix fastjson related vulnerabilities"),(0,i.kt)("p",null,"Update to Canal version to fix fastjson security vulnerability."),(0,i.kt)("h3",{id:"added-admin-diagnose-tablet-command"},"Added ",(0,i.kt)("inlineCode",{parentName:"h3"},"ADMIN DIAGNOSE TABLET")," command"),(0,i.kt)("p",null,"Used to quickly diagnose problems with the specified tablet."),(0,i.kt)("h2",{id:"download-to-use"},"Download to Use"),(0,i.kt)("h3",{id:"download-link"},"Download Link"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://doris.apache.org/download"},"hhttps://doris.apache.org/download")),(0,i.kt)("h3",{id:"feedback"},"Feedback"),(0,i.kt)("p",null,"If you encounter any problems with use, please feel free to contact us through GitHub discussion forum or Dev e-mail group anytime."),(0,i.kt)("p",null,"GitHub Forum: ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/apache/doris/discussions"},"https://github.com/apache/doris/discussions")),(0,i.kt)("p",null,"Mailing list: ",(0,i.kt)("a",{parentName:"p",href:"dev@doris.apache.org"},"dev@doris.apache.org")),(0,i.kt)("h2",{id:"thanks"},"Thanks"),(0,i.kt)("p",null,"Thanks to everyone who has contributed to this release:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"\n@adonis0147\n\n@airborne12\n\n@amosbird\n\n@aopangzi\n\n@arthuryangcs\n\n@awakeljw\n\n@BePPPower\n\n@BiteTheDDDDt\n\n@bridgeDream\n\n@caiconghui\n\n@cambyzju\n\n@ccoffline\n\n@chenlinzhong\n\n@daikon12\n\n@DarvenDuan\n\n@dataalive\n\n@dataroaring\n\n@deardeng\n\n@Doris-Extras\n\n@emerkfu\n\n@EmmyMiao87\n\n@englefly\n\n@Gabriel39\n\n@GoGoWen\n\n@gtchaos\n\n@HappenLee\n\n@hello-stephen\n\n@Henry2SS\n\n@hewei-nju\n\n@hf200012\n\n@jacktengg\n\n@jackwener\n\n@Jibing-Li\n\n@JNSimba\n\n@kangshisen\n\n@Kikyou1997\n\n@kylinmac\n\n@Lchangliang\n\n@leo65535\n\n@liaoxin01\n\n@liutang123\n\n@lovingfeel\n\n@luozenglin\n\n@luwei16\n\n@luzhijing\n\n@mklzl\n\n@morningman\n\n@morrySnow\n\n@nextdreamblue\n\n@Nivane\n\n@pengxiangyu\n\n@qidaye\n\n@qzsee\n\n@SaintBacchus\n\n@SleepyBear96\n\n@smallhibiscus\n\n@spaces-X\n\n@stalary\n\n@starocean999\n\n@steadyBoy\n\n@SWJTU-ZhangLei\n\n@Tanya-W\n\n@tarepanda1024\n\n@tianhui5\n\n@Userwhite\n\n@wangbo\n\n@wangyf0555\n\n@weizuo93\n\n@whutpencil\n\n@wsjz\n\n@wunan1210\n\n@xiaokang\n\n@xinyiZzz\n\n@xlwh\n\n@xy720\n\n@yangzhg\n\n@Yankee24\n\n@yiguolei\n\n@yinzhijian\n\n@yixiutt\n\n@zbtzbtzbt\n\n@zenoyang\n\n@zhangstar333\n\n@zhangyifan27\n\n@zhannngchen\n\n@zhengshengjun\n\n@zhengshiJ\n\n@zingdle\n\n@zuochunwei\n\n@zy-kkk\n")))}h.isMDXComponent=!0},83608:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/release-note-1.1.0-SSB-6067d10e7f8b966be8da2b64950622fb.png"},76218:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/release-note-1.1.0-TPC-H-7d6975b410de89a004c7f058226a02da.png"}}]);