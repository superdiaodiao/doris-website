"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([[81764],{15680:(e,n,r)=>{r.d(n,{xA:()=>p,yg:()=>y});var t=r(96540);function a(e,n,r){return n in e?Object.defineProperty(e,n,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[n]=r,e}function o(e,n){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),r.push.apply(r,t)}return r}function s(e){for(var n=1;n<arguments.length;n++){var r=null!=arguments[n]?arguments[n]:{};n%2?o(Object(r),!0).forEach((function(n){a(e,n,r[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(r,n))}))}return e}function l(e,n){if(null==e)return{};var r,t,a=function(e,n){if(null==e)return{};var r,t,a={},o=Object.keys(e);for(t=0;t<o.length;t++)r=o[t],n.indexOf(r)>=0||(a[r]=e[r]);return a}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(t=0;t<o.length;t++)r=o[t],n.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var i=t.createContext({}),c=function(e){var n=t.useContext(i),r=n;return e&&(r="function"==typeof e?e(n):s(s({},n),e)),r},p=function(e){var n=c(e.components);return t.createElement(i.Provider,{value:n},e.children)},u="mdxType",m={inlineCode:"code",wrapper:function(e){var n=e.children;return t.createElement(t.Fragment,{},n)}},d=t.forwardRef((function(e,n){var r=e.components,a=e.mdxType,o=e.originalType,i=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),u=c(r),d=a,y=u["".concat(i,".").concat(d)]||u[d]||m[d]||o;return r?t.createElement(y,s(s({ref:n},p),{},{components:r})):t.createElement(y,s({ref:n},p))}));function y(e,n){var r=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var o=r.length,s=new Array(o);s[0]=d;var l={};for(var i in n)hasOwnProperty.call(n,i)&&(l[i]=n[i]);l.originalType=e,l[u]="string"==typeof e?e:a,s[1]=l;for(var c=2;c<o;c++)s[c]=r[c];return t.createElement.apply(null,s)}return t.createElement.apply(null,r)}d.displayName="MDXCreateElement"},96026:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>i,contentTitle:()=>s,default:()=>m,frontMatter:()=>o,metadata:()=>l,toc:()=>c});var t=r(58168),a=(r(96540),r(15680));const o={title:"SHOW-QUERY-PROFILE",language:"en"},s=void 0,l={unversionedId:"sql-manual/sql-reference/Show-Statements/SHOW-QUERY-PROFILE",id:"version-2.0/sql-manual/sql-reference/Show-Statements/SHOW-QUERY-PROFILE",title:"SHOW-QUERY-PROFILE",description:"\x3c!--",source:"@site/versioned_docs/version-2.0/sql-manual/sql-reference/Show-Statements/SHOW-QUERY-PROFILE.md",sourceDirName:"sql-manual/sql-reference/Show-Statements",slug:"/sql-manual/sql-reference/Show-Statements/SHOW-QUERY-PROFILE",permalink:"/docs/sql-manual/sql-reference/Show-Statements/SHOW-QUERY-PROFILE",draft:!1,tags:[],version:"2.0",frontMatter:{title:"SHOW-QUERY-PROFILE",language:"en"},sidebar:"docs",previous:{title:"SHOW-REPOSITORIES",permalink:"/docs/sql-manual/sql-reference/Show-Statements/SHOW-REPOSITORIES"},next:{title:"SHOW-OPEN-TABLES",permalink:"/docs/sql-manual/sql-reference/Show-Statements/SHOW-OPEN-TABLES"}},i={},c=[{value:"SHOW-QUERY-PROFILE",id:"show-query-profile",level:2},{value:"Name",id:"name",level:3},{value:"Description",id:"description",level:3},{value:"Example",id:"example",level:3},{value:"Keywords",id:"keywords",level:3},{value:"Best Practice",id:"best-practice",level:3}],p={toc:c},u="wrapper";function m(e){let{components:n,...r}=e;return(0,a.yg)(u,(0,t.A)({},p,r,{components:n,mdxType:"MDXLayout"}),(0,a.yg)("h2",{id:"show-query-profile"},"SHOW-QUERY-PROFILE"),(0,a.yg)("h3",{id:"name"},"Name"),(0,a.yg)("p",null,"SHOW QUERY PROFILE"),(0,a.yg)("h3",{id:"description"},"Description"),(0,a.yg)("p",null,"This statement is used to view the tree profile information of the query operation,this function requires the user to open profile settings.\nBefore versions 0.15, perform the following settings:"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-sql"},"SET is_report_success=true;\n")),(0,a.yg)("p",null,"For versions 0.15 and later, perform the following settings:"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-sql"},"SET [GLOBAL] enable_profile=true;\n")),(0,a.yg)("p",null,"grammar:"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-sql"},'show query profile "/";\n')),(0,a.yg)("p",null,"This command will list the profiles of all currently saved query operations."),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-sql"},'show query profile "/queryId"\\G\nshow query profile "/queryId/fragment_id/instance_id"\\G\n')),(0,a.yg)("p",null,"Get the tree profile information of the specified query ID,Return to profile simple tree.Specify fragment",(0,a.yg)("em",{parentName:"p"}," ID and instance")," ID returns the corresponding detailed profile tree."),(0,a.yg)("h3",{id:"example"},"Example"),(0,a.yg)("ol",null,(0,a.yg)("li",{parentName:"ol"},(0,a.yg)("p",{parentName:"li"},"List all query Profile"),(0,a.yg)("pre",{parentName:"li"},(0,a.yg)("code",{parentName:"pre",className:"language-sql"},'mysql> show query profile "/";\n+-----------------------------------+------+-------------------------+--------------------+-----------+---------------------+---------------------+-----------+------------+\n| QueryId                           | User | DefaultDb               | SQL                | QueryType | StartTime           | EndTime             | TotalTime | QueryState |\n+-----------------------------------+------+-------------------------+--------------------+-----------+---------------------+---------------------+-----------+------------+\n| 327167e0db4749a9-adce3b3d770b2bb1 | root | default_cluster:test_db | select * from test | Query     | 2022-08-09 10:50:09 | 2022-08-09 10:50:09 | 19ms      | EOF        |\n+-----------------------------------+------+-------------------------+--------------------+-----------+---------------------+---------------------+-----------+------------+\n1 row in set (0.00 sec)\n'))),(0,a.yg)("li",{parentName:"ol"},(0,a.yg)("p",{parentName:"li"},"List the query profile of the specified queryid"),(0,a.yg)("pre",{parentName:"li"},(0,a.yg)("code",{parentName:"pre",className:"language-sql"},'mysql> show query profile "/327167e0db4749a9-adce3b3d770b2bb1"\\G\n*************************** 1. row ***************************\nFragments: \u250c\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2510\n\u2502[-1: VDataBufferSender] \u2502\n\u2502Fragment: 0             \u2502\n\u2502MaxActiveTime: 783.263us\u2502\n\u2514\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2518\n            \u250c\u2518\n            \u2502\n  \u250c\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2510\n  \u2502[1: VEXCHANGE_NODE]\u2502\n  \u2502Fragment: 0        \u2502\n  \u2514\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2518\n            \u2514\u2510\n             \u2502\n\u250c\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2510\n\u2502[1: VDataStreamSender]  \u2502\n\u2502Fragment: 1             \u2502\n\u2502MaxActiveTime: 847.612us\u2502\n\u2514\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2518\n             \u2502\n             \u2502\n  \u250c\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2510\n  \u2502[0: VOLAP_SCAN_NODE]\u2502\n  \u2502Fragment: 1         \u2502\n  \u2514\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2518\n            \u250c\u2518\n            \u2502\n     \u250c\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2510\n     \u2502[OlapScanner]\u2502\n     \u2502Fragment: 1  \u2502\n     \u2514\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2518\n            \u2502\n            \u2502\n   \u250c\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2510\n   \u2502[SegmentIterator]\u2502\n   \u2502Fragment: 1      \u2502\n   \u2514\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2518\n1 row in set (0.00 sec)\n'))),(0,a.yg)("li",{parentName:"ol"},(0,a.yg)("p",{parentName:"li"},"Lists the instance profile of the specified fragment:"),(0,a.yg)("pre",{parentName:"li"},(0,a.yg)("code",{parentName:"pre",className:"language-sql"},'mysql> show query profile "/327167e0db4749a9-adce3b3d770b2bb1/1/"\\G\n*************************** 1. row ***************************\n Instances: 327167e0db4749a9-adce3b3d770b2bb2\n      Host: 172.26.0.1:9111\nActiveTime: 847.612us\n1 row in set (0.01 sec)\n'))),(0,a.yg)("li",{parentName:"ol"},(0,a.yg)("p",{parentName:"li"},"Continue to view the detailed profile of each operator on a specific instance:"),(0,a.yg)("pre",{parentName:"li"},(0,a.yg)("code",{parentName:"pre",className:"language-sql"},'mysql> show query profile "/327167e0db4749a9-adce3b3d770b2bb1/1/327167e0db4749a9-adce3b3d770b2bb2"\\G\n*************************** 1. row ***************************\nInstance: \u250c\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2510\n\u2502[1: VDataStreamSender]                 \u2502\n\u2502(Active: 36.944us, non-child: 0.20)    \u2502\n\u2502  - Counters:                          \u2502\n\u2502      - BytesSent: 0.00                \u2502\n\u2502      - IgnoreRows: 0                  \u2502\n\u2502      - LocalBytesSent: 20.00 B        \u2502\n\u2502      - OverallThroughput: 0.0 /sec    \u2502\n\u2502      - PeakMemoryUsage: 0.00          \u2502\n\u2502      - SerializeBatchTime: 0ns        \u2502\n\u2502      - UncompressedRowBatchSize: 0.00 \u2502\n\u2514\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2518\n                    \u2502\n                    \u2502\n\u250c\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2510\n\u2502[0: VOLAP_SCAN_NODE]                   \u2502\n\u2502(Active: 563.241us, non-child: 3.00)   \u2502\n\u2502  - Counters:                          \u2502\n\u2502      - BatchQueueWaitTime: 444.714us  \u2502\n\u2502      - BytesRead: 37.00 B             \u2502\n\u2502      - NumDiskAccess: 1               \u2502\n\u2502      - NumScanners: 2                 \u2502\n\u2502      - PeakMemoryUsage: 320.00 KB     \u2502\n\u2502      - RowsRead: 4                    \u2502\n\u2502      - RowsReturned: 4                \u2502\n\u2502      - RowsReturnedRate: 7.101K /sec  \u2502\n\u2502      - ScannerBatchWaitTime: 206.40us \u2502\n\u2502      - ScannerSchedCount : 2          \u2502\n\u2502      - ScannerWorkerWaitTime: 34.640us\u2502\n\u2502      - TabletCount : 2                \u2502\n\u2502      - TotalReadThroughput: 0.0 /sec  \u2502\n\u2514\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2518\n                    \u2502\n                    \u2502\n   \u250c\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2510\n   \u2502[OlapScanner]                    \u2502\n   \u2502(Active: 0ns, non-child: 0.00)   \u2502\n   \u2502  - Counters:                    \u2502\n   \u2502      - BlockConvertTime: 0ns    \u2502\n   \u2502      - BlockFetchTime: 183.741us\u2502\n   \u2502      - ReaderInitTime: 180.741us\u2502\n   \u2502      - RowsDelFiltered: 0       \u2502\n   \u2502      - RowsPushedCondFiltered: 0\u2502\n   \u2502      - ScanCpuTime: 388.576us   \u2502\n   \u2502      - ScanTime: 0ns            \u2502\n   \u2502      - ShowHintsTime_V1: 0ns    \u2502\n   \u2514\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2518\n                    \u2502\n                    \u2502\n \u250c\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2510\n \u2502[SegmentIterator]                    \u2502\n \u2502(Active: 0ns, non-child: 0.00)       \u2502\n \u2502  - Counters:                        \u2502\n \u2502      - BitmapIndexFilterTimer: 124ns\u2502\n \u2502      - BlockLoadTime: 179.202us     \u2502\n \u2502      - BlockSeekCount: 5            \u2502\n \u2502      - BlockSeekTime: 18.792us      \u2502\n \u2502      - BlocksLoad: 4                \u2502\n \u2502      - CachedPagesNum: 2            \u2502\n \u2502      - CompressedBytesRead: 0.00    \u2502\n \u2502      - DecompressorTimer: 0ns       \u2502\n \u2502      - IOTimer: 0ns                 \u2502\n \u2502      - IndexLoadTime_V1: 0ns        \u2502\n \u2502      - NumSegmentFiltered: 0        \u2502\n \u2502      - NumSegmentTotal: 2           \u2502\n \u2502      - RawRowsRead: 4               \u2502\n \u2502      - RowsBitmapIndexFiltered: 0   \u2502\n \u2502      - RowsBloomFilterFiltered: 0   \u2502\n \u2502      - RowsConditionsFiltered: 0    \u2502\n \u2502      - RowsKeyRangeFiltered: 0      \u2502\n \u2502      - RowsStatsFiltered: 0         \u2502\n \u2502      - RowsVectorPredFiltered: 0    \u2502\n \u2502      - TotalPagesNum: 2             \u2502\n \u2502      - UncompressedBytesRead: 0.00  \u2502\n \u2502      - VectorPredEvalTime: 0ns      \u2502\n \u2514\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2518\n\n1 row in set (0.01 sec)\n')))),(0,a.yg)("h3",{id:"keywords"},"Keywords"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre"},"SHOW, QUERY, PROFILE\n")),(0,a.yg)("h3",{id:"best-practice"},"Best Practice"))}m.isMDXComponent=!0}}]);