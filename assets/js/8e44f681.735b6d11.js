"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([[78983],{15680:(e,a,t)=>{t.d(a,{xA:()=>m,yg:()=>c});var l=t(296540);function r(e,a,t){return a in e?Object.defineProperty(e,a,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[a]=t,e}function p(e,a){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);a&&(l=l.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),t.push.apply(t,l)}return t}function i(e){for(var a=1;a<arguments.length;a++){var t=null!=arguments[a]?arguments[a]:{};a%2?p(Object(t),!0).forEach((function(a){r(e,a,t[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):p(Object(t)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(t,a))}))}return e}function o(e,a){if(null==e)return{};var t,l,r=function(e,a){if(null==e)return{};var t,l,r={},p=Object.keys(e);for(l=0;l<p.length;l++)t=p[l],a.indexOf(t)>=0||(r[t]=e[t]);return r}(e,a);if(Object.getOwnPropertySymbols){var p=Object.getOwnPropertySymbols(e);for(l=0;l<p.length;l++)t=p[l],a.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var n=l.createContext({}),u=function(e){var a=l.useContext(n),t=a;return e&&(t="function"==typeof e?e(a):i(i({},a),e)),t},m=function(e){var a=u(e.components);return l.createElement(n.Provider,{value:a},e.children)},g="mdxType",h={inlineCode:"code",wrapper:function(e){var a=e.children;return l.createElement(l.Fragment,{},a)}},s=l.forwardRef((function(e,a){var t=e.components,r=e.mdxType,p=e.originalType,n=e.parentName,m=o(e,["components","mdxType","originalType","parentName"]),g=u(t),s=r,c=g["".concat(n,".").concat(s)]||g[s]||h[s]||p;return t?l.createElement(c,i(i({ref:a},m),{},{components:t})):l.createElement(c,i({ref:a},m))}));function c(e,a){var t=arguments,r=a&&a.mdxType;if("string"==typeof e||r){var p=t.length,i=new Array(p);i[0]=s;var o={};for(var n in a)hasOwnProperty.call(a,n)&&(o[n]=a[n]);o.originalType=e,o[g]="string"==typeof e?e:r,i[1]=o;for(var u=2;u<p;u++)i[u]=t[u];return l.createElement.apply(null,i)}return l.createElement.apply(null,t)}s.displayName="MDXCreateElement"},339147:(e,a,t)=>{t.r(a),t.d(a,{assets:()=>n,contentTitle:()=>i,default:()=>h,frontMatter:()=>p,metadata:()=>o,toc:()=>u});var l=t(58168),r=(t(296540),t(15680));const p={title:"Release 2.1.1",language:"en"},i=void 0,o={unversionedId:"releasenotes/release-2.1.1",id:"releasenotes/release-2.1.1",title:"Release 2.1.1",description:"\x3c!--",source:"@site/docs/releasenotes/release-2.1.1.md",sourceDirName:"releasenotes",slug:"/releasenotes/release-2.1.1",permalink:"/docs/dev/releasenotes/release-2.1.1",draft:!1,tags:[],version:"current",frontMatter:{title:"Release 2.1.1",language:"en"},sidebar:"docs",previous:{title:"TPC-DS Benchmark",permalink:"/docs/dev/benchmark/tpcds"},next:{title:"Release 2.1.0",permalink:"/docs/dev/releasenotes/release-2.1.0"}},n={},u=[{value:"Behavior Changed",id:"behavior-changed",level:2},{value:"Upgrade Problem",id:"upgrade-problem",level:2},{value:"New Feature",id:"new-feature",level:2},{value:"Optimization",id:"optimization",level:2},{value:"Bugfix",id:"bugfix",level:2}],m={toc:u},g="wrapper";function h(e){let{components:a,...t}=e;return(0,r.yg)(g,(0,l.A)({},m,t,{components:a,mdxType:"MDXLayout"}),(0,r.yg)("p",null,"Dear community members, Apache Doris 2.1.1 has been officially released on April 3, 2024, with several enhancements and bug fixes based on 2.1.0, enabling smoother user experience."),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("p",{parentName:"li"},(0,r.yg)("strong",{parentName:"p"},"Quick Download:")," ",(0,r.yg)("a",{parentName:"p",href:"https://doris.apache.org/download/"},"https://doris.apache.org/download/"))),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("p",{parentName:"li"},(0,r.yg)("strong",{parentName:"p"},"GitHub\uff1a")," ",(0,r.yg)("a",{parentName:"p",href:"https://github.com/apache/doris/releases"},"https://github.com/apache/doris/releases")))),(0,r.yg)("h2",{id:"behavior-changed"},"Behavior Changed"),(0,r.yg)("ol",null,(0,r.yg)("li",{parentName:"ol"},(0,r.yg)("p",{parentName:"li"},"Change float type output format to improve float type serialization performance."),(0,r.yg)("ul",{parentName:"li"},(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("a",{parentName:"li",href:"https://github.com/apache/doris/pull/32049"},"https://github.com/apache/doris/pull/32049")))),(0,r.yg)("li",{parentName:"ol"},(0,r.yg)("p",{parentName:"li"},"Change system table value functions active_queries(), workload_groups() to system tables. "),(0,r.yg)("ul",{parentName:"li"},(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("a",{parentName:"li",href:"https://github.com/apache/doris/pull/32314"},"https://github.com/apache/doris/pull/32314")))),(0,r.yg)("li",{parentName:"ol"},(0,r.yg)("p",{parentName:"li"},"Disable show query/load profile stmt because there are not so many developers use it and the pipeline and pipelinex engine not support it. "),(0,r.yg)("ul",{parentName:"li"},(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("a",{parentName:"li",href:"https://github.com/apache/doris/pull/32467"},"https://github.com/apache/doris/pull/32467")))),(0,r.yg)("li",{parentName:"ol"},(0,r.yg)("p",{parentName:"li"},"Upgrade arrow flight version to 15.0.2 to fix some bugs, so that please use ADBC 15.0.2 version to access Doris. "),(0,r.yg)("ul",{parentName:"li"},(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("a",{parentName:"li",href:"https://github.com/apache/doris/pull/32827"},"https://github.com/apache/doris/pull/32827"),".")))),(0,r.yg)("h2",{id:"upgrade-problem"},"Upgrade Problem"),(0,r.yg)("ol",null,(0,r.yg)("li",{parentName:"ol"},(0,r.yg)("p",{parentName:"li"},"BE will core when rolling pgrade problem from 2.0.x to 2.1.x "),(0,r.yg)("ul",{parentName:"li"},(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("p",{parentName:"li"},(0,r.yg)("a",{parentName:"p",href:"https://github.com/apache/doris/pull/32672"},"https://github.com/apache/doris/pull/32672"))),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("p",{parentName:"li"},(0,r.yg)("a",{parentName:"p",href:"https://github.com/apache/doris/pull/32444"},"https://github.com/apache/doris/pull/32444"))),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("p",{parentName:"li"},(0,r.yg)("a",{parentName:"p",href:"https://github.com/apache/doris/pull/32162"},"https://github.com/apache/doris/pull/32162"))))),(0,r.yg)("li",{parentName:"ol"},(0,r.yg)("p",{parentName:"li"},"JDBC Catalog will have query errors when rolling grade rom 2.0.x to 2.1.x. "),(0,r.yg)("ul",{parentName:"li"},(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("a",{parentName:"li",href:"https://github.com/apache/doris/pull/32618"},"https://github.com/apache/doris/pull/32618"))))),(0,r.yg)("h2",{id:"new-feature"},"New Feature"),(0,r.yg)("ol",null,(0,r.yg)("li",{parentName:"ol"},(0,r.yg)("p",{parentName:"li"},"Enable column auth by default."),(0,r.yg)("ul",{parentName:"li"},(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("a",{parentName:"li",href:"https://github.com/apache/doris/pull/32659"},"https://github.com/apache/doris/pull/32659"))))),(0,r.yg)("ol",{start:2},(0,r.yg)("li",{parentName:"ol"},(0,r.yg)("p",{parentName:"li"},"Get correct cores for pipeline and pipelinex engine when running within docker or k8s. "),(0,r.yg)("ul",{parentName:"li"},(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("a",{parentName:"li",href:"https://github.com/apache/doris/pull/32370"},"https://github.com/apache/doris/pull/32370")))),(0,r.yg)("li",{parentName:"ol"},(0,r.yg)("p",{parentName:"li"},"Support read parquet int96 type. "),(0,r.yg)("ul",{parentName:"li"},(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("a",{parentName:"li",href:"https://github.com/apache/doris/pull/32394"},"https://github.com/apache/doris/pull/32394")))),(0,r.yg)("li",{parentName:"ol"},(0,r.yg)("p",{parentName:"li"},"Enable proxy protocol to support IP transparency. Using this protocol, IP transparency for load balancing can be achieved, so that after load balancing, Doris can still obtain the client's real IP and implement permission control such as whitelisting. "),(0,r.yg)("ul",{parentName:"li"},(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("a",{parentName:"li",href:"https://github.com/apache/doris/pull/32338/files"},"https://github.com/apache/doris/pull/32338/files")))),(0,r.yg)("li",{parentName:"ol"},(0,r.yg)("p",{parentName:"li"},"Add workload group queue related columns for active_queries system table. Uses could use this system to monitor the workload queue usage. "),(0,r.yg)("ul",{parentName:"li"},(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("a",{parentName:"li",href:"https://github.com/apache/doris/pull/32259"},"https://github.com/apache/doris/pull/32259")))),(0,r.yg)("li",{parentName:"ol"},(0,r.yg)("p",{parentName:"li"},"Add new system table backend_active_tasks to monitor the realtime query statics on every BE. "),(0,r.yg)("ul",{parentName:"li"},(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("a",{parentName:"li",href:"https://github.com/apache/doris/pull/31945"},"https://github.com/apache/doris/pull/31945")))),(0,r.yg)("li",{parentName:"ol"},(0,r.yg)("p",{parentName:"li"},"Add ipv4 and ipv6 support for spark-doris connector. "),(0,r.yg)("ul",{parentName:"li"},(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("a",{parentName:"li",href:"https://github.com/apache/doris/pull/32240"},"https://github.com/apache/doris/pull/32240")))),(0,r.yg)("li",{parentName:"ol"},(0,r.yg)("p",{parentName:"li"},"Add inverted index support for CCR. "),(0,r.yg)("ul",{parentName:"li"},(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("a",{parentName:"li",href:"https://github.com/apache/doris/pull/32101"},"https://github.com/apache/doris/pull/32101")))),(0,r.yg)("li",{parentName:"ol"},(0,r.yg)("p",{parentName:"li"},"Support select experimental session variable. "),(0,r.yg)("ul",{parentName:"li"},(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("a",{parentName:"li",href:"https://github.com/apache/doris/pull/31837"},"https://github.com/apache/doris/pull/31837")))),(0,r.yg)("li",{parentName:"ol"},(0,r.yg)("p",{parentName:"li"},"Support materialized view with bitmap_union(bitmap_from_array()) case. "),(0,r.yg)("ul",{parentName:"li"},(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("a",{parentName:"li",href:"https://github.com/apache/doris/pull/31962"},"https://github.com/apache/doris/pull/31962")))),(0,r.yg)("li",{parentName:"ol"},(0,r.yg)("p",{parentName:"li"},"Support partition prune for ",(0,r.yg)("em",{parentName:"p"},"HIVE_DEFAULT_PARTITION"),". "),(0,r.yg)("ul",{parentName:"li"},(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("a",{parentName:"li",href:"https://github.com/apache/doris/pull/31736"},"https://github.com/apache/doris/pull/31736")))),(0,r.yg)("li",{parentName:"ol"},(0,r.yg)("p",{parentName:"li"},"Support function in set variable statement. "),(0,r.yg)("ul",{parentName:"li"},(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("a",{parentName:"li",href:"https://github.com/apache/doris/pull/32492"},"https://github.com/apache/doris/pull/32492")))),(0,r.yg)("li",{parentName:"ol"},(0,r.yg)("p",{parentName:"li"},"Support arrow serialization for varint type. "),(0,r.yg)("ul",{parentName:"li"},(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("a",{parentName:"li",href:"https://github.com/apache/doris/pull/32809"},"https://github.com/apache/doris/pull/32809"))))),(0,r.yg)("h2",{id:"optimization"},"Optimization"),(0,r.yg)("ol",null,(0,r.yg)("li",{parentName:"ol"},(0,r.yg)("p",{parentName:"li"},"Auto resume routine load when be restart or during upgrade. And keep the routine load stable. "),(0,r.yg)("ul",{parentName:"li"},(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("a",{parentName:"li",href:"https://github.com/apache/doris/pull/32239"},"https://github.com/apache/doris/pull/32239")))),(0,r.yg)("li",{parentName:"ol"},(0,r.yg)("p",{parentName:"li"},"Routine Load: optimize allocate task to be algorithm for load balance. "),(0,r.yg)("ul",{parentName:"li"},(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("a",{parentName:"li",href:"https://github.com/apache/doris/pull/32021"},"https://github.com/apache/doris/pull/32021")))),(0,r.yg)("li",{parentName:"ol"},(0,r.yg)("p",{parentName:"li"},"Spark Load: update spark version for spark load to resolve cve problem. "),(0,r.yg)("ul",{parentName:"li"},(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("a",{parentName:"li",href:"https://github.com/apache/doris/pull/30368"},"https://github.com/apache/doris/pull/30368")))),(0,r.yg)("li",{parentName:"ol"},(0,r.yg)("p",{parentName:"li"},"Skip cooldown if the tablet is dropped. "),(0,r.yg)("ul",{parentName:"li"},(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("a",{parentName:"li",href:"https://github.com/apache/doris/pull/32079"},"https://github.com/apache/doris/pull/32079")))),(0,r.yg)("li",{parentName:"ol"},(0,r.yg)("p",{parentName:"li"},"Support using workload group to manage routine load. "),(0,r.yg)("ul",{parentName:"li"},(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("a",{parentName:"li",href:"https://github.com/apache/doris/pull/31671"},"https://github.com/apache/doris/pull/31671")))),(0,r.yg)("li",{parentName:"ol"},(0,r.yg)("p",{parentName:"li"},"[MTMV ]","Improve the performance for query rewritting by materialized view. "),(0,r.yg)("ul",{parentName:"li"},(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("a",{parentName:"li",href:"https://github.com/apache/doris/pull/31886"},"https://github.com/apache/doris/pull/31886")))),(0,r.yg)("li",{parentName:"ol"},(0,r.yg)("p",{parentName:"li"},"Reduce jvm heap memory consumed by profiles of BrokerLoadJob. "),(0,r.yg)("ul",{parentName:"li"},(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("a",{parentName:"li",href:"https://github.com/apache/doris/pull/31985"},"https://github.com/apache/doris/pull/31985")))),(0,r.yg)("li",{parentName:"ol"},(0,r.yg)("p",{parentName:"li"},"Imporve the high QPS query by speed up PartitionPrunner. "),(0,r.yg)("ul",{parentName:"li"},(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("a",{parentName:"li",href:"https://github.com/apache/doris/pull/31970"},"https://github.com/apache/doris/pull/31970")))),(0,r.yg)("li",{parentName:"ol"},(0,r.yg)("p",{parentName:"li"},"Reduce duplicated memory consumption for column name and column path for schema cache. "),(0,r.yg)("ul",{parentName:"li"},(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("a",{parentName:"li",href:"https://github.com/apache/doris/pull/31141"},"https://github.com/apache/doris/pull/31141")))),(0,r.yg)("li",{parentName:"ol"},(0,r.yg)("p",{parentName:"li"},"Support more join types for query rewriting by materialized view such as INNER JOIN, LEFT OUTER JOIN, RIGHT OUTER JOIN, FULL OUTER JOIN, LEFT SEMI JOIN, RIGHT SEMI JOIN, LEFT ANTI JOIN, RIGHT ANTI JOIN "),(0,r.yg)("ul",{parentName:"li"},(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("a",{parentName:"li",href:"https://github.com/apache/doris/pull/32909"},"https://github.com/apache/doris/pull/32909"))))),(0,r.yg)("h2",{id:"bugfix"},"Bugfix"),(0,r.yg)("ol",null,(0,r.yg)("li",{parentName:"ol"},(0,r.yg)("p",{parentName:"li"},"Do not push down topn-filter through right/full outer join if the first orderkey is nulls first. "),(0,r.yg)("ul",{parentName:"li"},(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("a",{parentName:"li",href:"https://github.com/apache/doris/pull/32633"},"https://github.com/apache/doris/pull/32633")))),(0,r.yg)("li",{parentName:"ol"},(0,r.yg)("p",{parentName:"li"},"Fix memory leak in Java UDF "),(0,r.yg)("ul",{parentName:"li"},(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("a",{parentName:"li",href:"https://github.com/apache/doris/pull/32630"},"https://github.com/apache/doris/pull/32630")))),(0,r.yg)("li",{parentName:"ol"},(0,r.yg)("p",{parentName:"li"},"If some odbc tables use the same resource, and restore not all odbc tables, it will not retain the resource.\nand check some conf for backup/restore "),(0,r.yg)("ul",{parentName:"li"},(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("a",{parentName:"li",href:"https://github.com/apache/doris/pull/31989"},"https://github.com/apache/doris/pull/31989")))),(0,r.yg)("li",{parentName:"ol"},(0,r.yg)("p",{parentName:"li"},"Fold constant will core for variant type. "),(0,r.yg)("ul",{parentName:"li"},(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("a",{parentName:"li",href:"https://github.com/apache/doris/pull/32265"},"https://github.com/apache/doris/pull/32265")))),(0,r.yg)("li",{parentName:"ol"},(0,r.yg)("p",{parentName:"li"},"Routine load will pause when transaction fail in some cases. "),(0,r.yg)("ul",{parentName:"li"},(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("a",{parentName:"li",href:"https://github.com/apache/doris/pull/32638"},"https://github.com/apache/doris/pull/32638")))),(0,r.yg)("li",{parentName:"ol"},(0,r.yg)("p",{parentName:"li"},"the result of left semi join with empty right side should be false instead of null. "),(0,r.yg)("ul",{parentName:"li"},(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("a",{parentName:"li",href:"https://github.com/apache/doris/pull/32477"},"https://github.com/apache/doris/pull/32477")))),(0,r.yg)("li",{parentName:"ol"},(0,r.yg)("p",{parentName:"li"},"Fix core when build inverted index for a new column with no data. "),(0,r.yg)("ul",{parentName:"li"},(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("a",{parentName:"li",href:"https://github.com/apache/doris/pull/32669"},"https://github.com/apache/doris/pull/32669")))),(0,r.yg)("li",{parentName:"ol"},(0,r.yg)("p",{parentName:"li"},"Fix be core caused by null-safe-equal join. "),(0,r.yg)("ul",{parentName:"li"},(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("a",{parentName:"li",href:"https://github.com/apache/doris/pull/32623"},"https://github.com/apache/doris/pull/32623")))),(0,r.yg)("li",{parentName:"ol"},(0,r.yg)("p",{parentName:"li"},"Partial update: fix data correctness risk when load delete sign data into a table with sequence col. "),(0,r.yg)("ul",{parentName:"li"},(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("a",{parentName:"li",href:"https://github.com/apache/doris/pull/32574"},"https://github.com/apache/doris/pull/32574")))),(0,r.yg)("li",{parentName:"ol"},(0,r.yg)("p",{parentName:"li"},"Select outfile: Fix the column type mapping in the orc/parquet file format. "),(0,r.yg)("ul",{parentName:"li"},(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("a",{parentName:"li",href:"https://github.com/apache/doris/pull/32281"},"https://github.com/apache/doris/pull/32281")))),(0,r.yg)("li",{parentName:"ol"},(0,r.yg)("p",{parentName:"li"},"Fix BE core during restore stage. "),(0,r.yg)("ul",{parentName:"li"},(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("a",{parentName:"li",href:"https://github.com/apache/doris/pull/32489"},"https://github.com/apache/doris/pull/32489")))),(0,r.yg)("li",{parentName:"ol"},(0,r.yg)("p",{parentName:"li"},"Use array_agg func after other agg func like count, sum, may make be core. "),(0,r.yg)("ul",{parentName:"li"},(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("a",{parentName:"li",href:"https://github.com/apache/doris/pull/32387"},"https://github.com/apache/doris/pull/32387")))),(0,r.yg)("li",{parentName:"ol"},(0,r.yg)("p",{parentName:"li"},"Variant type should always nullable or there will some bugs. "),(0,r.yg)("ul",{parentName:"li"},(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("a",{parentName:"li",href:"https://github.com/apache/doris/pull/32248"},"https://github.com/apache/doris/pull/32248")))),(0,r.yg)("li",{parentName:"ol"},(0,r.yg)("p",{parentName:"li"},"Fix the bug of handling empty blocks in schema change. "),(0,r.yg)("ul",{parentName:"li"},(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("a",{parentName:"li",href:"https://github.com/apache/doris/pull/32396"},"https://github.com/apache/doris/pull/32396")))),(0,r.yg)("li",{parentName:"ol"},(0,r.yg)("p",{parentName:"li"},"Fix BE will core when use json_length() in some cases. "),(0,r.yg)("ul",{parentName:"li"},(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("a",{parentName:"li",href:"https://github.com/apache/doris/pull/32145"},"https://github.com/apache/doris/pull/32145")))),(0,r.yg)("li",{parentName:"ol"},(0,r.yg)("p",{parentName:"li"},"Fix error when query iceberg table using date cast predicate "),(0,r.yg)("ul",{parentName:"li"},(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("a",{parentName:"li",href:"https://github.com/apache/doris/pull/32194"},"https://github.com/apache/doris/pull/32194")))),(0,r.yg)("li",{parentName:"ol"},(0,r.yg)("p",{parentName:"li"},"Fix some bugs when build inverted index for variant type. "),(0,r.yg)("ul",{parentName:"li"},(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("a",{parentName:"li",href:"https://github.com/apache/doris/pull/31992"},"https://github.com/apache/doris/pull/31992")))),(0,r.yg)("li",{parentName:"ol"},(0,r.yg)("p",{parentName:"li"},"Wrong result of two or more map_agg functions in query. "),(0,r.yg)("ul",{parentName:"li"},(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("a",{parentName:"li",href:"https://github.com/apache/doris/pull/31928"},"https://github.com/apache/doris/pull/31928")))),(0,r.yg)("li",{parentName:"ol"},(0,r.yg)("p",{parentName:"li"},"Fix wrong result of money_format function. "),(0,r.yg)("ul",{parentName:"li"},(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("a",{parentName:"li",href:"https://github.com/apache/doris/pull/31883"},"https://github.com/apache/doris/pull/31883")))),(0,r.yg)("li",{parentName:"ol"},(0,r.yg)("p",{parentName:"li"},"Fix connection hang after too many connections. "),(0,r.yg)("ul",{parentName:"li"},(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("a",{parentName:"li",href:"https://github.com/apache/doris/pull/31594"},"https://github.com/apache/doris/pull/31594"))))))}h.isMDXComponent=!0}}]);