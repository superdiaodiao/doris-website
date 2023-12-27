"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([[81408],{3905:(e,t,n)=>{n.d(t,{Zo:()=>m,kt:()=>p});var a=n(67294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var s=a.createContext({}),d=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},m=function(e){var t=d(e.components);return a.createElement(s.Provider,{value:t},e.children)},u="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},h=a.forwardRef((function(e,t){var n=e.components,i=e.mdxType,o=e.originalType,s=e.parentName,m=l(e,["components","mdxType","originalType","parentName"]),u=d(n),h=i,p=u["".concat(s,".").concat(h)]||u[h]||c[h]||o;return n?a.createElement(p,r(r({ref:t},m),{},{components:n})):a.createElement(p,r({ref:t},m))}));function p(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=n.length,r=new Array(o);r[0]=h;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[u]="string"==typeof e?e:i,r[1]=l;for(var d=2;d<o;d++)r[d]=n[d];return a.createElement.apply(null,r)}return a.createElement.apply(null,n)}h.displayName="MDXCreateElement"},57642:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>r,default:()=>c,frontMatter:()=>o,metadata:()=>l,toc:()=>d});var a=n(87462),i=(n(67294),n(3905));const o={title:"Statistics of query execution",language:"en"},r=void 0,l={unversionedId:"admin-manual/query-profile",id:"version-2.0/admin-manual/query-profile",title:"Statistics of query execution",description:"\x3c!--",source:"@site/versioned_docs/version-2.0/admin-manual/query-profile.md",sourceDirName:"admin-manual",slug:"/admin-manual/query-profile",permalink:"/docs/admin-manual/query-profile",draft:!1,tags:[],version:"2.0",frontMatter:{title:"Statistics of query execution",language:"en"},sidebar:"docs",previous:{title:"Sql Interception",permalink:"/docs/admin-manual/sql-interception"},next:{title:"TLS certificate",permalink:"/docs/admin-manual/certificate"}},s={},d=[{value:"Noun Interpretation",id:"noun-interpretation",level:2},{value:"Basic concepts",id:"basic-concepts",level:2},{value:"Specific operation",id:"specific-operation",level:2},{value:"Profile statistic analysis",id:"profile-statistic-analysis",level:2},{value:"<code>Fragment</code>",id:"fragment",level:4},{value:"<code>BlockMgr</code>",id:"blockmgr",level:4},{value:"<code>DataStreamSender</code>",id:"datastreamsender",level:4},{value:"<code>ODBC_TABLE_SINK</code>",id:"odbc_table_sink",level:4},{value:"<code>EXCHANGE_NODE</code>",id:"exchange_node",level:4},{value:"<code>SORT_NODE</code>",id:"sort_node",level:4},{value:"<code>AGGREGATION_NODE</code>",id:"aggregation_node",level:4},{value:"<code>HASH_JOIN_NODE</code>",id:"hash_join_node",level:4},{value:"<code>CROSS_JOIN_NODE</code>",id:"cross_join_node",level:4},{value:"<code>UNION_NODE</code>",id:"union_node",level:4},{value:"<code>ANALYTIC_EVAL_NODE</code>",id:"analytic_eval_node",level:4},{value:"<code>OLAP_SCAN_NODE</code>",id:"olap_scan_node",level:4},{value:"<code>Buffer pool</code>",id:"buffer-pool",level:4}],m={toc:d},u="wrapper";function c(e){let{components:t,...o}=e;return(0,i.kt)(u,(0,a.Z)({},m,o,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"statistics-of-query-execution"},"Statistics of query execution"),(0,i.kt)("p",null,"This document focuses on introducing the ",(0,i.kt)("strong",{parentName:"p"},"Running Profile")," which recorded runtime status of Doris in query execution. Using these statistical information, we can understand the execution of fragment to become a expert of Doris's ",(0,i.kt)("strong",{parentName:"p"},"debugging and tuning"),"."),(0,i.kt)("p",null,"You can also refer to following statements to view profile in command line:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/docs/sql-manual/sql-reference/Show-Statements/SHOW-QUERY-PROFILE"},"SHOW QUERY PROFILE")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/docs/sql-manual/sql-reference/Show-Statements/SHOW-LOAD-PROFILE"},"SHOW LOAD PROFILE"))),(0,i.kt)("h2",{id:"noun-interpretation"},"Noun Interpretation"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("strong",{parentName:"p"},"FE"),": Frontend, frontend node of Doris. Responsible for metadata management and request access.")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("strong",{parentName:"p"},"BE"),": Backend, backend node of Doris. Responsible for query execution and data storage.")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("strong",{parentName:"p"},"Fragment"),": FE will convert the execution of specific SQL statements into corresponding fragments and distribute them to BE for execution. BE will execute corresponding fragments and gather the result of RunningProfile to send back FE."))),(0,i.kt)("h2",{id:"basic-concepts"},"Basic concepts"),(0,i.kt)("p",null,"FE splits the query plan into fragments and distributes them to BE for task execution. BE records the statistics of ",(0,i.kt)("strong",{parentName:"p"},"Running State")," when executing fragment. BE print the outputs statistics of fragment execution into the log. FE can also collect these statistics recorded by each fragment and print the results on FE's web page."),(0,i.kt)("h2",{id:"specific-operation"},"Specific operation"),(0,i.kt)("p",null,"Turn on the report switch on FE through MySQL command"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"mysql> set enable_profile=true; \n")),(0,i.kt)("p",null,"After executing the corresponding SQL statement(",(0,i.kt)("inlineCode",{parentName:"p"},"is_report_success")," in old versions), we can see the report information of the corresponding SQL statement on the FE web page like the picture below.\n",(0,i.kt)("img",{alt:"image.png",src:n(55167).Z,width:"2950",height:"878"})),(0,i.kt)("p",null,"The latest  ",(0,i.kt)("strong",{parentName:"p"},"100 statements")," executed will be listed here. We can view detailed statistics of RunningProfile."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"Query:\n  Summary:\n    Query ID: 9664061c57e84404-85ae111b8ba7e83a\n    Start Time: 2020-05-02 10:34:57\n    End Time: 2020-05-02 10:35:08\n    Total: 10s323ms\n    Query Type: Query\n    Query State: EOF\n    Doris Version: trunk\n    User: root\n    Default Db: default_cluster:test\n    Sql Statement: select max(Bid_Price) from quotes group by Symbol\n")),(0,i.kt)("p",null,"Here is a detailed list of  ",(0,i.kt)("inlineCode",{parentName:"p"},"query ID, execution time, execution statement")," and other summary information. The next step is to print the details of each fragment collected from be."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"   Fragment 0:\n     Instance 9664061c57e84404-85ae111b8ba7e83d (host=TNetworkAddress(hostname:192.168.0.1, port:9060)):(Active: 10s270ms, % non-child: 0.14%)\n        - MemoryLimit: 2.00 GB\n        - BytesReceived: 168.08 KB\n        - PeakUsedReservation: 0.00 \n        - SendersBlockedTimer: 0ns\n        - DeserializeRowBatchTimer: 501.975us\n        - PeakMemoryUsage: 577.04 KB\n        - RowsProduced: 8.322K (8322)\n       EXCHANGE_NODE (id=4):(Active: 10s256ms, % non-child: 99.35%)\n          - ConvertRowBatchTime: 180.171us\n          - PeakMemoryUsage: 0.00 \n          - RowsReturned: 8.322K (8322)\n          - MemoryUsed: 0.00 \n          - RowsReturnedRate: 811\n")),(0,i.kt)("p",null,"The fragment ID is listed here; ",(0,i.kt)("inlineCode",{parentName:"p"},"hostname")," show the be node executing the fragment; ",(0,i.kt)("inlineCode",{parentName:"p"},"active: 10s270ms"),"show the total execution time of the node;  ",(0,i.kt)("inlineCode",{parentName:"p"},"non child: 0.14%")," means the execution time of the execution node itself (not including the execution time of child nodes) as a percentage of the total time. "),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"PeakMemoryUsage")," indicates the peak memory usage of ",(0,i.kt)("inlineCode",{parentName:"p"},"EXCHANGE_NODE"),"; ",(0,i.kt)("inlineCode",{parentName:"p"},"RowsReturned")," indicates the number of rows returned by ",(0,i.kt)("inlineCode",{parentName:"p"},"EXCHANGE_NODE"),"; ",(0,i.kt)("inlineCode",{parentName:"p"},"RowsReturnedRate"),"=",(0,i.kt)("inlineCode",{parentName:"p"},"RowsReturned"),"/",(0,i.kt)("inlineCode",{parentName:"p"},"ActiveTime"),"; the meaning of these three statistics in other ",(0,i.kt)("inlineCode",{parentName:"p"},"NODE")," the same."),(0,i.kt)("p",null,"Subsequently, the statistics of the child nodes will be printed in turn. ",(0,i.kt)("strong",{parentName:"p"},"here you can distinguish the parent-child relationship by intent"),"."),(0,i.kt)("h2",{id:"profile-statistic-analysis"},"Profile statistic analysis"),(0,i.kt)("p",null,"There are many statistical information collected at BE.  so we list the corresponding meanings of profile are below:"),(0,i.kt)("h4",{id:"fragment"},(0,i.kt)("inlineCode",{parentName:"h4"},"Fragment")),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"AverageThreadTokens: Number of threads used to execute fragment, excluding the usage of thread pool"),(0,i.kt)("li",{parentName:"ul"},"PeakReservation: Peak memory used by buffer pool"),(0,i.kt)("li",{parentName:"ul"},"MemoryLimit: Memory limit at query"),(0,i.kt)("li",{parentName:"ul"},"PeakMemoryUsage: Peak memory usage of instance"),(0,i.kt)("li",{parentName:"ul"},"RowsProduced: Number of rows that process")),(0,i.kt)("h4",{id:"blockmgr"},(0,i.kt)("inlineCode",{parentName:"h4"},"BlockMgr")),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"BlocksCreated: Number of Block be created by BlockMgr"),(0,i.kt)("li",{parentName:"ul"},"BlocksRecycled: Number of Block be recycled by BlockMgr"),(0,i.kt)("li",{parentName:"ul"},"BytesWritten: How many bytes be written to spill to disk"),(0,i.kt)("li",{parentName:"ul"},"MaxBlockSize: Max size of one Block"),(0,i.kt)("li",{parentName:"ul"},"TotalReadBlockTime: Total time read block from disk")),(0,i.kt)("h4",{id:"datastreamsender"},(0,i.kt)("inlineCode",{parentName:"h4"},"DataStreamSender")),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"BytesSent: Total bytes data sent"),(0,i.kt)("li",{parentName:"ul"},"IgnoreRows: Rows filtered"),(0,i.kt)("li",{parentName:"ul"},"LocalBytesSent: The amount bytes of local node send to it's self during Exchange"),(0,i.kt)("li",{parentName:"ul"},"OverallThroughput: Total throughput = BytesSent / Time"),(0,i.kt)("li",{parentName:"ul"},"SerializeBatchTime: Sending data serialization time"),(0,i.kt)("li",{parentName:"ul"},"UncompressedRowBatchSize: Size of rowbatch before sending data compression")),(0,i.kt)("h4",{id:"odbc_table_sink"},(0,i.kt)("inlineCode",{parentName:"h4"},"ODBC_TABLE_SINK")),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"NumSentRows: Total number of rows written to ODBC table"),(0,i.kt)("li",{parentName:"ul"},"TupleConvertTime: Time consuming of sending data serialization to insert statement"),(0,i.kt)("li",{parentName:"ul"},"ResultSendTime: Time consuming of writing through ODBC driver")),(0,i.kt)("h4",{id:"exchange_node"},(0,i.kt)("inlineCode",{parentName:"h4"},"EXCHANGE_NODE")),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"BytesReceived: Size of bytes received by network"),(0,i.kt)("li",{parentName:"ul"},"DataArrivalWaitTime: Total waiting time of sender to push data "),(0,i.kt)("li",{parentName:"ul"},"MergeGetNext: When there is a sort in the lower level node, exchange node will perform a unified merge sort and output an ordered result. This indicator records the total time consumption of merge sorting, including the time consumption of MergeGetNextBatch."),(0,i.kt)("li",{parentName:"ul"},"MergeGetNextBatch\uff1aIt takes time for merge node to get data. If it is single-layer merge sort, the object to get data is network queue. For multi-level merge sorting, the data object is child merger."),(0,i.kt)("li",{parentName:"ul"},"ChildMergeGetNext: When there are too many senders in the lower layer to send data, single thread merge will become a performance bottleneck. Doris will start multiple child merge threads to do merge sort in parallel. The sorting time of child merge is recorded, which is the cumulative value of multiple threads."),(0,i.kt)("li",{parentName:"ul"},"ChildMergeGetNextBatch: It takes time for child merge to get data\uff0cIf the time consumption is too large, the bottleneck may be the lower level data sending node."),(0,i.kt)("li",{parentName:"ul"},"FirstBatchArrivalWaitTime: The time waiting for the first batch come from sender"),(0,i.kt)("li",{parentName:"ul"},"DeserializeRowBatchTimer: Time consuming to receive data deserialization"),(0,i.kt)("li",{parentName:"ul"},"SendersBlockedTotalTimer(*): When the DataStreamRecv's queue buffer is full, wait time of sender"),(0,i.kt)("li",{parentName:"ul"},"ConvertRowBatchTime: Time taken to transfer received data to RowBatch"),(0,i.kt)("li",{parentName:"ul"},"RowsReturned: Number of receiving rows"),(0,i.kt)("li",{parentName:"ul"},"RowsReturnedRate: Rate of rows received")),(0,i.kt)("h4",{id:"sort_node"},(0,i.kt)("inlineCode",{parentName:"h4"},"SORT_NODE")),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"InMemorySortTime: In memory sort time"),(0,i.kt)("li",{parentName:"ul"},"InitialRunsCreated: Number of initialize sort run"),(0,i.kt)("li",{parentName:"ul"},"MergeGetNext: Time cost of MergeSort from multiple sort_run to get the next batch (only show spilled disk)"),(0,i.kt)("li",{parentName:"ul"},"MergeGetNextBatch: Time cost MergeSort one sort_run to get the next batch (only show spilled disk)"),(0,i.kt)("li",{parentName:"ul"},"SortDataSize: Total sorted data"),(0,i.kt)("li",{parentName:"ul"},"TotalMergesPerformed: Number of external sort merges")),(0,i.kt)("h4",{id:"aggregation_node"},(0,i.kt)("inlineCode",{parentName:"h4"},"AGGREGATION_NODE")),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"PartitionsCreated: Number of partition split by aggregate"),(0,i.kt)("li",{parentName:"ul"},"GetResultsTime: Time to get aggregate results from each partition"),(0,i.kt)("li",{parentName:"ul"},"HTResizeTime: Time spent in resizing hashtable"),(0,i.kt)("li",{parentName:"ul"},"HTResize: Number of times hashtable resizes"),(0,i.kt)("li",{parentName:"ul"},"HashBuckets: Number of buckets in hashtable"),(0,i.kt)("li",{parentName:"ul"},"HashBucketsWithDuplicate: Number of buckets with duplicate node in hashtable"),(0,i.kt)("li",{parentName:"ul"},"HashCollisions: Number of hash conflicts generated "),(0,i.kt)("li",{parentName:"ul"},"HashDuplicateNodes: Number of duplicate nodes with the same buckets in hashtable"),(0,i.kt)("li",{parentName:"ul"},"HashFailedProbe: Number of failed probe operations"),(0,i.kt)("li",{parentName:"ul"},"HashFilledBuckets: Number of buckets filled data"),(0,i.kt)("li",{parentName:"ul"},"HashProbe: Number of hashtable probe"),(0,i.kt)("li",{parentName:"ul"},"HashTravelLength: The number of steps moved when hashtable queries")),(0,i.kt)("h4",{id:"hash_join_node"},(0,i.kt)("inlineCode",{parentName:"h4"},"HASH_JOIN_NODE")),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"ExecOption: The way to construct a HashTable for the right child (synchronous or asynchronous), the right child in Join may be a table or a subquery, the same is true for the left child"),(0,i.kt)("li",{parentName:"ul"},"BuildBuckets: The number of Buckets in HashTable"),(0,i.kt)("li",{parentName:"ul"},"BuildRows: the number of rows of HashTable"),(0,i.kt)("li",{parentName:"ul"},"BuildTime: Time-consuming to construct HashTable"),(0,i.kt)("li",{parentName:"ul"},"LoadFactor: Load factor of HashTable (ie the number of non-empty buckets)"),(0,i.kt)("li",{parentName:"ul"},"ProbeRows: Traverse the number of rows of the left child for Hash Probe"),(0,i.kt)("li",{parentName:"ul"},"ProbeTime: Time consuming to traverse the left child for Hash Probe, excluding the time consuming to call GetNext on the left child RowBatch"),(0,i.kt)("li",{parentName:"ul"},"PushDownComputeTime: The calculation time of the predicate pushdown condition"),(0,i.kt)("li",{parentName:"ul"},"PushDownTime: The total time consumed by the predicate push down. When Join, the right child who meets the requirements is converted to the left child's in query")),(0,i.kt)("h4",{id:"cross_join_node"},(0,i.kt)("inlineCode",{parentName:"h4"},"CROSS_JOIN_NODE")),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"ExecOption: The way to construct RowBatchList for the right child (synchronous or asynchronous)"),(0,i.kt)("li",{parentName:"ul"},"BuildRows: The number of rows of RowBatchList (ie the number of rows of the right child)"),(0,i.kt)("li",{parentName:"ul"},"BuildTime: Time-consuming to construct RowBatchList"),(0,i.kt)("li",{parentName:"ul"},"LeftChildRows: the number of rows of the left child"),(0,i.kt)("li",{parentName:"ul"},"LeftChildTime: The time it takes to traverse the left child and find the Cartesian product with the right child, not including the time it takes to call GetNext on the left child RowBatch")),(0,i.kt)("h4",{id:"union_node"},(0,i.kt)("inlineCode",{parentName:"h4"},"UNION_NODE")),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"MaterializeExprsEvaluateTime: When the field types at both ends of the Union are inconsistent, the time spent to evaluates type conversion exprs and materializes the results ")),(0,i.kt)("h4",{id:"analytic_eval_node"},(0,i.kt)("inlineCode",{parentName:"h4"},"ANALYTIC_EVAL_NODE")),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"EvaluationTime: Analysis function (window function) calculation total time"),(0,i.kt)("li",{parentName:"ul"},"GetNewBlockTime: It takes time to apply for a new block during initialization. Block saves the cache line window or the entire partition for analysis function calculation"),(0,i.kt)("li",{parentName:"ul"},"PinTime: the time it takes to apply for a new block later or reread the block written to the disk back to the memory"),(0,i.kt)("li",{parentName:"ul"},"UnpinTime: the time it takes to flush the data of the block to the disk when the memory pressure of the block that is not in use or the current operator is high")),(0,i.kt)("h4",{id:"olap_scan_node"},(0,i.kt)("inlineCode",{parentName:"h4"},"OLAP_SCAN_NODE")),(0,i.kt)("p",null,"The ",(0,i.kt)("inlineCode",{parentName:"p"},"OLAP_SCAN_NODE")," is responsible for specific data scanning tasks. One ",(0,i.kt)("inlineCode",{parentName:"p"},"OLAP_SCAN_NODE")," will generate one or more ",(0,i.kt)("inlineCode",{parentName:"p"},"OlapScanner"),". Each Scanner thread is responsible for scanning part of the data."),(0,i.kt)("p",null,"Some or all of the predicate conditions in the query will be pushed to ",(0,i.kt)("inlineCode",{parentName:"p"},"OLAP_SCAN_NODE"),". Some of these predicate conditions will continue to be pushed down to the storage engine in order to use the storage engine's index for data filtering. The other part will be kept in ",(0,i.kt)("inlineCode",{parentName:"p"},"OLAP_SCAN_NODE")," to filter the data returned from the storage engine."),(0,i.kt)("p",null,"The profile of the ",(0,i.kt)("inlineCode",{parentName:"p"},"OLAP_SCAN_NODE")," node is usually used to analyze the efficiency of data scanning. It is divided into three layers: ",(0,i.kt)("inlineCode",{parentName:"p"},"OLAP_SCAN_NODE"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"OlapScanner"),", and ",(0,i.kt)("inlineCode",{parentName:"p"},"SegmentIterator")," according to the calling relationship."),(0,i.kt)("p",null,"The profile of a typical ",(0,i.kt)("inlineCode",{parentName:"p"},"OLAP_SCAN_NODE")," is as follows. Some indicators will have different meanings depending on the storage format (V1 or V2)."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"OLAP_SCAN_NODE (id=0):(Active: 1.2ms,% non-child: 0.00%)\n  - BytesRead: 265.00 B                 # The amount of data read from the data file. Assuming that 10 32-bit integers are read, the amount of data is 10 * 4B = 40 Bytes. This data only represents the fully expanded size of the data in memory, and does not represent the actual IO size.\n  - NumDiskAccess: 1                    # The number of disks involved in this ScanNode node.\n  - NumScanners: 20                     # The number of Scanners generated by this ScanNode.\n  - PeakMemoryUsage: 0.00               # Peak memory usage during query, not used yet\n  - RowsRead: 7                         # The number of rows returned from the storage engine to the Scanner, excluding the number of rows filtered by the Scanner.\n  - RowsReturned: 7                     # The number of rows returned from ScanNode to the upper node.\n  - RowsReturnedRate: 6.979K /sec       # RowsReturned/ActiveTime\n  - TabletCount: 20                     # The number of Tablets involved in this ScanNode.\n  - TotalReadThroughput: 74.70 KB/sec   # BytesRead divided by the total time spent in this node (from Open to Close). For IO bounded queries, this should be very close to the total throughput of all the disks\n  - ScannerBatchWaitTime: 426.886us     # To count the time the transfer thread waits for the scanner thread to return rowbatch. In pipeline, this value is always 0.\n  - ScannerWorkerWaitTime: 17.745us     # To count the time that the scanner thread waits for the available worker threads in the thread pool.\n  OlapScanner:\n    - BlockConvertTime: 8.941us         # The time it takes to convert a vectorized Block into a RowBlock with a row structure. The vectorized Block is VectorizedRowBatch in V1 and RowBlockV2 in V2.\n    - BlockFetchTime: 468.974us         # Rowset Reader gets the time of the Block.\n    - ReaderInitTime: 5.475ms           # The time when OlapScanner initializes Reader. V1 includes the time to form MergeHeap. V2 includes the time to generate various Iterators and read the first group of blocks.\n    - RowsDelFiltered: 0                # Including the number of rows filtered out according to the Delete information in the Tablet, and the number of rows filtered for marked deleted rows under the unique key model.\n    - RowsPushedCondFiltered: 0         # Filter conditions based on the predicates passed down, such as the conditions passed from BuildTable to ProbeTable in Join calculation. This value is not accurate, because if the filtering effect is poor, it will no longer be filtered.\n    - ScanTime: 39.24us                 # The time returned from ScanNode to the upper node.\n    - ShowHintsTime_V1: 0ns             # V2 has no meaning. Read part of the data in V1 to perform ScanRange segmentation.\n    SegmentIterator:\n      - BitmapIndexFilterTimer: 779ns   # Use bitmap index to filter data time-consuming.\n      - BlockLoadTime: 415.925us        # SegmentReader(V1) or SegmentIterator(V2) gets the time of the block.\n      - BlockSeekCount: 12              # The number of block seeks when reading Segment.\n      - BlockSeekTime: 222.556us        # It takes time to block seek when reading Segment.\n      - BlocksLoad: 6                   # read the number of blocks\n      - CachedPagesNum: 30              # In V2 only, when PageCache is enabled, the number of Pages that hit the Cache.\n      - CompressedBytesRead: 0.00       # In V1, the size of the data read from the file before decompression. In V2, the pre-compressed size of the read page that did not hit the PageCache.\n      - DecompressorTimer: 0ns          # Data decompression takes time.\n      - IOTimer: 0ns                    # IO time for actually reading data from the operating system.\n      - IndexLoadTime_V1: 0ns           # Only in V1, it takes time to read Index Stream.\n      - NumSegmentFiltered: 0           # When generating Segment Iterator, the number of Segments that are completely filtered out through column statistics and query conditions.\n      - NumSegmentTotal: 6              # Query the number of all segments involved.\n      - RawRowsRead: 7                  # The number of raw rows read in the storage engine. See below for details.\n      - RowsBitmapIndexFiltered: 0      # Only in V2, the number of rows filtered by the Bitmap index.\n      - RowsBloomFilterFiltered: 0      # Only in V2, the number of rows filtered by BloomFilter index.\n      - RowsKeyRangeFiltered: 0         # In V2 only, the number of rows filtered out by SortkeyIndex index.\n      - RowsStatsFiltered: 0            # In V2, the number of rows filtered by the ZoneMap index, including the deletion condition. V1 also contains the number of rows filtered by BloomFilter.\n      - RowsConditionsFiltered: 0       # Only in V2, the number of rows filtered by various column indexes.\n      - RowsVectorPredFiltered: 0       # The number of rows filtered by the vectorized condition filtering operation.\n      - TotalPagesNum: 30               # Only in V2, the total number of pages read.\n      - UncompressedBytesRead: 0.00     # V1 is the decompressed size of the read data file (if the file does not need to be decompressed, the file size is directly counted). In V2, only the decompressed size of the Page that missed PageCache is counted (if the Page does not need to be decompressed, the Page size is directly counted)\n      - VectorPredEvalTime: 0ns         # Time-consuming of vectorized condition filtering operation.\n")),(0,i.kt)("p",null,"The predicate push down and index usage can be inferred from the related indicators of the number of data rows in the profile. The following only describes the profile in the reading process of segment V2 format data. In segment V1 format, the meaning of these indicators is slightly different."),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"When reading a segment V2, if the query has key_ranges (the query range composed of prefix keys), first filter the data through the SortkeyIndex index, and the number of filtered rows is recorded in ",(0,i.kt)("inlineCode",{parentName:"li"},"RowsKeyRangeFiltered"),"."),(0,i.kt)("li",{parentName:"ul"},"After that, use the Bitmap index to perform precise filtering on the columns containing the bitmap index in the query condition, and the number of filtered rows is recorded in ",(0,i.kt)("inlineCode",{parentName:"li"},"RowsBitmapIndexFiltered"),"."),(0,i.kt)("li",{parentName:"ul"},"After that, according to the equivalent (eq, in, is) condition in the query condition, use the BloomFilter index to filter the data and record it in ",(0,i.kt)("inlineCode",{parentName:"li"},"RowsBloomFilterFiltered"),". The value of ",(0,i.kt)("inlineCode",{parentName:"li"},"RowsBloomFilterFiltered")," is the difference between the total number of rows of the Segment (not the number of rows filtered by the Bitmap index) and the number of remaining rows after BloomFilter, so the data filtered by BloomFilter may overlap with the data filtered by Bitmap."),(0,i.kt)("li",{parentName:"ul"},"After that, use the ZoneMap index to filter the data according to the query conditions and delete conditions and record it in ",(0,i.kt)("inlineCode",{parentName:"li"},"RowsStatsFiltered"),"."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"RowsConditionsFiltered")," is the number of rows filtered by various indexes, including the values \u200b\u200bof ",(0,i.kt)("inlineCode",{parentName:"li"},"RowsBloomFilterFiltered")," and ",(0,i.kt)("inlineCode",{parentName:"li"},"RowsStatsFiltered"),"."),(0,i.kt)("li",{parentName:"ul"},"So far, the Init phase is completed, and the number of rows filtered by the condition to be deleted in the Next phase is recorded in ",(0,i.kt)("inlineCode",{parentName:"li"},"RowsDelFiltered"),". Therefore, the number of rows actually filtered by the delete condition are recorded in ",(0,i.kt)("inlineCode",{parentName:"li"},"RowsStatsFiltered")," and ",(0,i.kt)("inlineCode",{parentName:"li"},"RowsDelFiltered")," respectively."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"RawRowsRead")," is the final number of rows to be read after the above filtering."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"RowsRead")," is the number of rows finally returned to Scanner. ",(0,i.kt)("inlineCode",{parentName:"li"},"RowsRead")," is usually smaller than ",(0,i.kt)("inlineCode",{parentName:"li"},"RawRowsRead"),", because returning from the storage engine to the Scanner may go through a data aggregation. If the difference between ",(0,i.kt)("inlineCode",{parentName:"li"},"RawRowsRead")," and ",(0,i.kt)("inlineCode",{parentName:"li"},"RowsRead")," is large, it means that a large number of rows are aggregated, and aggregation may be time-consuming."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"RowsReturned")," is the number of rows finally returned by ScanNode to the upper node. ",(0,i.kt)("inlineCode",{parentName:"li"},"RowsReturned")," is usually smaller than ",(0,i.kt)("inlineCode",{parentName:"li"},"RowsRead"),". Because there will be some predicate conditions on the Scanner that are not pushed down to the storage engine, filtering will be performed once. If the difference between ",(0,i.kt)("inlineCode",{parentName:"li"},"RowsRead")," and ",(0,i.kt)("inlineCode",{parentName:"li"},"RowsReturned")," is large, it means that many rows are filtered in the Scanner. This shows that many highly selective predicate conditions are not pushed to the storage engine. The filtering efficiency in Scanner is worse than that in storage engine.")),(0,i.kt)("p",null,"Through the above indicators, you can roughly analyze the number of rows processed by the storage engine and the size of the final filtered result row. Through the ",(0,i.kt)("inlineCode",{parentName:"p"},"Rows***Filtered")," group of indicators, it is also possible to analyze whether the query conditions are pushed down to the storage engine, and the filtering effects of different indexes. In addition, a simple analysis can be made through the following aspects."),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Many indicators under ",(0,i.kt)("inlineCode",{parentName:"li"},"OlapScanner"),", such as ",(0,i.kt)("inlineCode",{parentName:"li"},"IOTimer"),", ",(0,i.kt)("inlineCode",{parentName:"li"},"BlockFetchTime"),", etc., are the accumulation of all Scanner thread indicators, so the value may be relatively large. And because the Scanner thread reads data asynchronously, these cumulative indicators can only reflect the cumulative working time of the Scanner, and do not directly represent the time consumption of the ScanNode. The time-consuming ratio of ScanNode in the entire query plan is the value recorded in the ",(0,i.kt)("inlineCode",{parentName:"li"},"Active")," field. Sometimes it appears that ",(0,i.kt)("inlineCode",{parentName:"li"},"IOTimer")," has tens of seconds, but ",(0,i.kt)("inlineCode",{parentName:"li"},"Active")," is actually only a few seconds. This situation is usually due to:",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"IOTimer")," is the accumulated time of multiple Scanners, and there are more Scanners."),(0,i.kt)("li",{parentName:"ul"},"The upper node is time-consuming. For example, the upper node takes 100 seconds, while the lower ScanNode only takes 10 seconds. The field reflected in ",(0,i.kt)("inlineCode",{parentName:"li"},"Active")," may be only a few milliseconds. Because while the upper layer is processing data, ScanNode has performed data scanning asynchronously and prepared the data. When the upper node obtains data from ScanNode, it can obtain the prepared data, so the Active time is very short."))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"NumScanners")," represents the number of Tasks submitted by the Scanner to the thread pool. It is scheduled by the thread pool in ",(0,i.kt)("inlineCode",{parentName:"li"},"RuntimeState"),". The two parameters ",(0,i.kt)("inlineCode",{parentName:"li"},"doris_scanner_thread_pool_thread_num")," and ",(0,i.kt)("inlineCode",{parentName:"li"},"doris_scanner_thread_pool_queue_size")," control the size of the thread pool and the queue length respectively. Too many or too few threads will affect query efficiency. At the same time, some summary indicators can be divided by the number of threads to roughly estimate the time consumption of each thread."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"TabletCount")," indicates the number of tablets to be scanned. Too many may mean a lot of random read and data merge operations."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"UncompressedBytesRead")," indirectly reflects the amount of data read. If the value is large, it means that there may be a lot of IO operations."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"CachedPagesNum")," and ",(0,i.kt)("inlineCode",{parentName:"li"},"TotalPagesNum")," can check the hitting status of PageCache. The higher the hit rate, the less time-consuming IO and decompression operations.  ")),(0,i.kt)("h4",{id:"buffer-pool"},(0,i.kt)("inlineCode",{parentName:"h4"},"Buffer pool")),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"AllocTime: Memory allocation time"),(0,i.kt)("li",{parentName:"ul"},"CumulativeAllocationBytes: Cumulative amount of memory allocated"),(0,i.kt)("li",{parentName:"ul"},"CumulativeAllocations: Cumulative number of memory allocations"),(0,i.kt)("li",{parentName:"ul"},"PeakReservation: Peak of reservation"),(0,i.kt)("li",{parentName:"ul"},"PeakUnpinnedBytes: Amount of memory data of unpin"),(0,i.kt)("li",{parentName:"ul"},"PeakUsedReservation: Peak usage of reservation"),(0,i.kt)("li",{parentName:"ul"},"ReservationLimit: Limit of reservation of bufferpool")))}c.isMDXComponent=!0},55167:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/running_profile-1496d45e3d65b8b860eb3f4874d711a9.png"}}]);