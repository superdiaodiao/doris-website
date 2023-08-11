"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([[28263],{3905:(e,t,a)=>{a.d(t,{Zo:()=>m,kt:()=>k});var i=a(67294);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function r(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,i)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?r(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,i,n=function(e,t){if(null==e)return{};var a,i,n={},r=Object.keys(e);for(i=0;i<r.length;i++)a=r[i],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(i=0;i<r.length;i++)a=r[i],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var p=i.createContext({}),u=function(e){var t=i.useContext(p),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},m=function(e){var t=u(e.components);return i.createElement(p.Provider,{value:t},e.children)},s="mdxType",h={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},c=i.forwardRef((function(e,t){var a=e.components,n=e.mdxType,r=e.originalType,p=e.parentName,m=l(e,["components","mdxType","originalType","parentName"]),s=u(a),c=n,k=s["".concat(p,".").concat(c)]||s[c]||h[c]||r;return a?i.createElement(k,o(o({ref:t},m),{},{components:a})):i.createElement(k,o({ref:t},m))}));function k(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var r=a.length,o=new Array(r);o[0]=c;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l[s]="string"==typeof e?e:n,o[1]=l;for(var u=2;u<r;u++)o[u]=a[u];return i.createElement.apply(null,o)}return i.createElement.apply(null,a)}c.displayName="MDXCreateElement"},94156:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>p,contentTitle:()=>o,default:()=>h,frontMatter:()=>r,metadata:()=>l,toc:()=>u});var i=a(87462),n=(a(67294),a(3905));const r={title:"Apache Doris(Incubating) annoucned 0.15.0 Release",summary:"\u201cDear Community","we are pleased to announce the release of Apache Doris(Incubating) on November 29":null,"2021! Nearly 700 optimizations and fixes have been submitted by 99 contributors to Apache Doris":null,"and we'd like to express our sincere gratitude to all of them!\u201d":null,date:"2021-11-29",author:"Apache Doris",tags:["Release Notes"]},o=void 0,l={permalink:"/zh-CN/blog/release-note-0.15.0",source:"@site/blog/release-note-0.15.0.md",title:"Apache Doris(Incubating) annoucned 0.15.0 Release",description:"\x3c!--",date:"2021-11-29T00:00:00.000Z",formattedDate:"2021\u5e7411\u670829\u65e5",tags:[{label:"Release Notes",permalink:"/zh-CN/blog/tags/release-notes"}],hasTruncateMarker:!1,authors:[{name:"Apache Doris"}],frontMatter:{title:"Apache Doris(Incubating) annoucned 0.15.0 Release",summary:"\u201cDear Community","we are pleased to announce the release of Apache Doris(Incubating) on November 29":null,"2021! Nearly 700 optimizations and fixes have been submitted by 99 contributors to Apache Doris":null,"and we'd like to express our sincere gratitude to all of them!\u201d":null,date:"2021-11-29",author:"Apache Doris",tags:["Release Notes"]},prevItem:{title:"Apache Doris(Incubating) announced 1.0.0 Release",permalink:"/zh-CN/blog/release-note-1.0.0"}},p={authorsImageUrls:[void 0]},u=[{value:"High Lights",id:"high-lights",level:2},{value:"Resource Segregation and Isolation",id:"resource-segregation-and-isolation",level:3},{value:"Performance Optimization",id:"performance-optimization",level:3},{value:"New features",id:"new-features",level:3},{value:"Extended Features",id:"extended-features",level:3},{value:"Feature Optimization",id:"feature-optimization",level:2},{value:"Query",id:"query",level:3},{value:"Import",id:"import",level:3},{value:"Export",id:"export",level:3},{value:"Ease of use",id:"ease-of-use",level:3},{value:"New functions",id:"new-functions",level:3},{value:"Other",id:"other",level:3},{value:"\u81f4\u8c22",id:"\u81f4\u8c22",level:2}],m={toc:u},s="wrapper";function h(e){let{components:t,...a}=e;return(0,n.kt)(s,(0,i.Z)({},m,a,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"apache-dorisincubating-0150-release"},"Apache Doris(Incubating) 0.15.0 Release"),(0,n.kt)("p",null,"Dear Community, After months of polishing, we are pleased to announce the release of Apache Doris(Incubating) on November 29, 2021! Nearly 700 optimizations and fixes have been submitted by 99 contributors to Apache Doris, and we'd like to express our sincere gratitude to all of them!"),(0,n.kt)("p",null,"In the 0.15.0 Release, we have added many new features to optimize Apache Doris's query performance, ease of use, and stability: a new resource division and isolation feature that allows users to divide BE nodes in a cluster into resource groups by means of resource tags, enabling unified management of online and offline services and resource isolation; the addition of Runtime Filter and Join Reorder functions have been added to significantly improve the query efficiency of multi-table Join scenarios, with a 2-10 times performance improvement under the Star Schema Benchmark test data set; new import method Binlog Load enables Doris to incrementally synchronize the CDC of data update operations in MySQL; support for String column type The new import method, Binlog Load, allows Doris to incrementally synchronize the CDC of MySQL for data update operations; supports String column type with a maximum length of 2GB; supports List partitioning to create partitions by enumerating values; supports Update statements on the Unique Key model; Spark-Doris-Connector supports data writing to Doris ... ...and many more important features, welcome to download and use."),(0,n.kt)("p",null,"We welcome you to contact us via GitHub Discussion or the Dev email group if you have any questions during use, and we look forward to your participation in community discussions and building."),(0,n.kt)("h2",{id:"high-lights"},"High Lights"),(0,n.kt)("h3",{id:"resource-segregation-and-isolation"},"Resource Segregation and Isolation"),(0,n.kt)("p",null,"You can divide BE nodes in a Doris cluster into resource groups by using resource tags, allowing you to manage online and offline operations and isolate resources at the node level.\nYou can also control the resource overhead of individual queries by limiting the CPU and memory overhead and complexity of individual query tasks, thus reducing the resource hogging problem between different queries."),(0,n.kt)("h3",{id:"performance-optimization"},"Performance Optimization"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"The Runtime Filter feature can significantly improve query efficiency in most Join scenarios by using the Join Key column condition of the right table in the Join algorithm to filter the data in the left table. For example, you can get 2-10 times performance improvement under Star Schema Benchmark (TPCH's streamlined test set).")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"The Join Reorder feature can automatically help adjust the order of joins in SQL by using a cost model to help achieve optimal join efficiency.\nIt can be enabled via the session variable ",(0,n.kt)("inlineCode",{parentName:"p"},"set enable_cost_based_join_reorder=true"),"."))),(0,n.kt)("h3",{id:"new-features"},"New features"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Support synchronizing MySQL binlog data directly to Canal Server."),(0,n.kt)("li",{parentName:"ul"},"Support String column type, support up to 2GB."),(0,n.kt)("li",{parentName:"ul"},"Support List partitioning, you can create partitions for enumerated values."),(0,n.kt)("li",{parentName:"ul"},"Support transactional Insert statement function. You can import data in bulk by begin ; insert ; insert;, ... You can import data in bulk by begin ; insert ; insert ;, ... ;."),(0,n.kt)("li",{parentName:"ul"},"Support Update statement function on Unique Key model. You can execute Update Set where statement on Unique Key model table."),(0,n.kt)("li",{parentName:"ul"},"Support SQL blocking list function. You can block some SQL execution by regular, hash value matching, etc."),(0,n.kt)("li",{parentName:"ul"},"Support LDAP login authentication.")),(0,n.kt)("h3",{id:"extended-features"},"Extended Features"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Support Flink-Doris-Connector."),(0,n.kt)("li",{parentName:"ul"},"Support for DataX doriswriter plugin."),(0,n.kt)("li",{parentName:"ul"},"Spark-Doris-Connector support for data writing to Doris.")),(0,n.kt)("h2",{id:"feature-optimization"},"Feature Optimization"),(0,n.kt)("h3",{id:"query"},"Query"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Support for computing all constant expressions in the SQL query planning phase using BE's functional computing power.")),(0,n.kt)("h3",{id:"import"},"Import"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Support for specifying multi-byte row separators or invisible separators when importing text format files."),(0,n.kt)("li",{parentName:"ul"},"Supports importing compressed format files via Stream Load."),(0,n.kt)("li",{parentName:"ul"},"Stream Load supports importing Json data in multi-line format.")),(0,n.kt)("h3",{id:"export"},"Export"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Support Export export function to specify where filter. Supports exporting files with multi-byte row separators. Support export to local files."),(0,n.kt)("li",{parentName:"ul"},"Export export function supports exporting only specified columns."),(0,n.kt)("li",{parentName:"ul"},"Supports exporting the result set to local disk via outfile statement and writing the exported marker file after exporting.")),(0,n.kt)("h3",{id:"ease-of-use"},"Ease of use"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Dynamic partitioning function supports creating and keeping specified historical partitions, and supports automatic hot and cold data migration settings."),(0,n.kt)("li",{parentName:"ul"},"Supports displaying queries, imported schedules and Profiles using a visual tree structure at the command line."),(0,n.kt)("li",{parentName:"ul"},"Support to record and view Stream Load operation logs."),(0,n.kt)("li",{parentName:"ul"},"When consuming Kafka data via Routine Load, you can specify the time point for consumption."),(0,n.kt)("li",{parentName:"ul"},"Supports exporting Routine Load creation statements by show create routine load function."),(0,n.kt)("li",{parentName:"ul"},"Support to start and stop all Routine Load jobs with one click by pause/resume all routine load command."),(0,n.kt)("li",{parentName:"ul"},"Supports modifying the Broker List and Topic of Routine Load by alter routine load statement."),(0,n.kt)("li",{parentName:"ul"},"Support create table as select function."),(0,n.kt)("li",{parentName:"ul"},"Support modify column comments and table comments by alter table command."),(0,n.kt)("li",{parentName:"ul"},"show tablet status to add table creation time and data update time."),(0,n.kt)("li",{parentName:"ul"},"Support show data skew command to check the data volume distribution of a table to troubleshoot data skewing problems."),(0,n.kt)("li",{parentName:"ul"},"Support show/clean trash command to check the disk occupation of BE file recycle bin and clear it actively."),(0,n.kt)("li",{parentName:"ul"},"Support show view statement to show which views a table is referenced by.")),(0,n.kt)("h3",{id:"new-functions"},"New functions"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"bitmap_min"),", ",(0,n.kt)("inlineCode",{parentName:"li"},"bit_length")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"yearweek"),", ",(0,n.kt)("inlineCode",{parentName:"li"},"week"),", ",(0,n.kt)("inlineCode",{parentName:"li"},"makedate")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"percentile")," exact percentile function"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"json_array"),", ",(0,n.kt)("inlineCode",{parentName:"li"},"json_object"),", ",(0,n.kt)("inlineCode",{parentName:"li"},"json_quote")),(0,n.kt)("li",{parentName:"ul"},"Support for creating custom public keys for the ",(0,n.kt)("inlineCode",{parentName:"li"},"AES_ENCRYPT")," and ",(0,n.kt)("inlineCode",{parentName:"li"},"AES_DECRYPT")," functions."),(0,n.kt)("li",{parentName:"ul"},"Support for creating function aliases to combine multiple functions by ",(0,n.kt)("inlineCode",{parentName:"li"},"create alias function"),".")),(0,n.kt)("h3",{id:"other"},"Other"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Support for accessing the ES exterior of the SSL connection protocol."),(0,n.kt)("li",{parentName:"ul"},"Support specifying the number of hotspot partitions in the dynamic partition property, which will be stored in SSD disks."),(0,n.kt)("li",{parentName:"ul"},"Support importing Json format data via Broker Load."),(0,n.kt)("li",{parentName:"ul"},"Supports accessing HDFS directly through libhdfs3 library for data import and export without the Broker process."),(0,n.kt)("li",{parentName:"ul"},"select into outfile function supports exporting Parquet file format and parallel export."),(0,n.kt)("li",{parentName:"ul"},"ODBC external table support for SQLServer. ")),(0,n.kt)("h2",{id:"\u81f4\u8c22"},"\u81f4\u8c22"),(0,n.kt)("p",null,"The release of Apache Doris (incubating) 0.15.0 Release is made possible by the support of all community users. We would like to thank all the community contributors who participated in the design, development, testing, and discussion of the release, namely."),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://github.com/924060929"},"@924060929")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://github.com/acelyc111"},"@acelyc111")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://github.com/Aimiyoo"},"@Aimiyoo")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://github.com/amosbird"},"@amosbird")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://github.com/arthur-zhang"},"@arthur-zhang")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://github.com/azurenake"},"@azurenake")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://github.com/BiteTheDDDDt"},"@BiteTheDDDDt")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://github.com/caiconghui"},"@caiconghui")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://github.com/caneGuy"},"@caneGuy")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://github.com/caoliang-web"},"@caoliang-web")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://github.com/ccoffline"},"@ccoffline")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://github.com/chaplinthink"},"@chaplinthink")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://github.com/chovy-3012"},"@chovy-3012")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://github.com/ChPi"},"@ChPi")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://github.com/copperybean"},"@copperybean")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://github.com/crazyleeyang"},"@crazyleeyang")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://github.com/dh-cloud"},"@dh-cloud")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://github.com/DinoZhang"},"@DinoZhang")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://github.com/dixingxing0"},"@dixingxing0")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://github.com/dohongdayi"},"@dohongdayi")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://github.com/e0c9"},"@e0c9")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://github.com/EmmyMiao87"},"@EmmyMiao87")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://github.com/eyesmoons"},"@eyesmoons")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://github.com/francisoliverlee"},"@francisoliverlee")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://github.com/Gabriel39"},"@Gabriel39")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://github.com/gaodayue"},"@gaodayue")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://github.com/GoGoWen"},"@GoGoWen")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://github.com/HappenLee"},"@HappenLee")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://github.com/harveyyue"},"@harveyyue")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://github.com/Henry2SS"},"@Henry2SS")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://github.com/hf200012"},"@hf200012")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://github.com/huangmengbin"},"@huangmengbin")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://github.com/huozhanfeng"},"@huozhanfeng")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://github.com/huzk8"},"@huzk8")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://github.com/hxianshun"},"@hxianshun")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://github.com/ikaruga4600"},"@ikaruga4600")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://github.com/JameyWoo"},"@JameyWoo")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://github.com/Jennifer88huang"},"@Jennifer88huang")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://github.com/JinLiOnline"},"@JinLiOnline")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://github.com/jinyuanlu"},"@jinyuanlu")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://github.com/JNSimba"},"@JNSimba")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://github.com/killxdcj"},"@killxdcj")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://github.com/kuncle"},"@kuncle")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://github.com/liutang123"},"@liutang123")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://github.com/luozenglin"},"@luozenglin")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://github.com/luzhijing"},"@luzhijing")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://github.com/MarsXDM"},"@MarsXDM")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://github.com/mh-boy"},"@mh-boy")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://github.com/mk8310"},"@mk8310")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://github.com/morningman"},"@morningman")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://github.com/Myasuka"},"@Myasuka")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://github.com/nimuyuhan"},"@nimuyuhan")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://github.com/pan3793"},"@pan3793")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://github.com/PatrickNicholas"},"@PatrickNicholas")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://github.com/pengxiangyu"},"@pengxiangyu")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://github.com/pierre94"},"@pierre94")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://github.com/qidaye"},"@qidaye")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://github.com/qzsee"},"@qzsee")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://github.com/shiyi23"},"@shiyi23")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://github.com/smallhibiscus"},"@smallhibiscus")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://github.com/songenjie"},"@songenjie")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://github.com/spaces-X"},"@spaces-X")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://github.com/stalary"},"@stalary")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://github.com/stdpain"},"@stdpain")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://github.com/Stephen-Robin"},"@Stephen-Robin")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://github.com/Sunt-ing"},"@Sunt-ing")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://github.com/Taaang"},"@Taaang")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://github.com/tarepanda1024"},"@tarepanda1024")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://github.com/tianhui5"},"@tianhui5")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://github.com/tinkerrrr"},"@tinkerrrr")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://github.com/TobKed"},"@TobKed")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://github.com/ucasfl"},"@ucasfl")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://github.com/Userwhite"},"@Userwhite")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://github.com/vinson0526"},"@vinson0526")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://github.com/wangbo"},"@wangbo")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://github.com/wangliansong"},"@wangliansong")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://github.com/wangshuo128"},"@wangshuo128")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://github.com/weajun"},"@weajun")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://github.com/weihongkai2008"},"@weihongkai2008")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://github.com/weizuo93"},"@weizuo93")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://github.com/WindyGao"},"@WindyGao")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://github.com/wunan1210"},"@wunan1210")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://github.com/wuyunfeng"},"@wuyunfeng")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://github.com/xhmz"},"@xhmz")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://github.com/xiaokangguo"},"@xiaokangguo")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://github.com/xiaoxiaopan118"},"@xiaoxiaopan118")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://github.com/xinghuayu007"},"@xinghuayu007")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://github.com/xinyiZzz"},"@xinyiZzz")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://github.com/xuliuzhe"},"@xuliuzhe")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://github.com/xxiao2018"},"@xxiao2018")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://github.com/xy720"},"@xy720")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://github.com/yangzhg"},"@yangzhg")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://github.com/yx91490"},"@yx91490")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://github.com/zbtzbtzbt"},"@zbtzbtzbt")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://github.com/zenoyang"},"@zenoyang")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://github.com/zh0122"},"@zh0122")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://github.com/zhangboya1"},"@zhangboya1")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://github.com/zhangstar333"},"@zhangstar333")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://github.com/zuochunwei"},"@zuochunwei"))))}h.isMDXComponent=!0}}]);