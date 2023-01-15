"use strict";(self.webpackChunkselectdb_portal=self.webpackChunkselectdb_portal||[]).push([[41333],{3905:(e,n,t)=>{t.d(n,{Zo:()=>m,kt:()=>f});var r=t(67294);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function l(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function s(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?l(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):l(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function o(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)t=l[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)t=l[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var i=r.createContext({}),c=function(e){var n=r.useContext(i),t=n;return e&&(t="function"==typeof e?e(n):s(s({},n),e)),t},m=function(e){var n=c(e.components);return r.createElement(i.Provider,{value:n},e.children)},p="mdxType",d={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},u=r.forwardRef((function(e,n){var t=e.components,a=e.mdxType,l=e.originalType,i=e.parentName,m=o(e,["components","mdxType","originalType","parentName"]),p=c(t),u=a,f=p["".concat(i,".").concat(u)]||p[u]||d[u]||l;return t?r.createElement(f,s(s({ref:n},m),{},{components:t})):r.createElement(f,s({ref:n},m))}));function f(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var l=t.length,s=new Array(l);s[0]=u;var o={};for(var i in n)hasOwnProperty.call(n,i)&&(o[i]=n[i]);o.originalType=e,o[p]="string"==typeof e?e:a,s[1]=o;for(var c=2;c<l;c++)s[c]=t[c];return r.createElement.apply(null,s)}return r.createElement.apply(null,t)}u.displayName="MDXCreateElement"},27394:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>i,contentTitle:()=>s,default:()=>p,frontMatter:()=>l,metadata:()=>o,toc:()=>c});var r=t(87462),a=(t(67294),t(3905));const l={title:"SHOW-LOAD-PROFILE",language:"zh-CN"},s=void 0,o={unversionedId:"sql-manual/sql-reference/Show-Statements/SHOW-LOAD-PROFILE",id:"version-dev/sql-manual/sql-reference/Show-Statements/SHOW-LOAD-PROFILE",title:"SHOW-LOAD-PROFILE",description:"\x3c!--",source:"@site/i18n/zh-CN/docusaurus-plugin-content-docs/version-dev/sql-manual/sql-reference/Show-Statements/SHOW-LOAD-PROFILE.md",sourceDirName:"sql-manual/sql-reference/Show-Statements",slug:"/sql-manual/sql-reference/Show-Statements/SHOW-LOAD-PROFILE",permalink:"/zh-CN/docs/dev/sql-manual/sql-reference/Show-Statements/SHOW-LOAD-PROFILE",draft:!1,editUrl:"https://github.com/apache/doris/edit/master/docs/zh-CN/docs/sql-manual/sql-reference/Show-Statements/SHOW-LOAD-PROFILE.md",tags:[],version:"dev",frontMatter:{title:"SHOW-LOAD-PROFILE",language:"zh-CN"},sidebar:"docs",previous:{title:"SHOW-LAST-INSERT",permalink:"/zh-CN/docs/dev/sql-manual/sql-reference/Show-Statements/SHOW-LAST-INSERT"},next:{title:"SHOW-LOAD-WARNINGS",permalink:"/zh-CN/docs/dev/sql-manual/sql-reference/Show-Statements/SHOW-LOAD-WARNINGS"}},i={},c=[{value:"SHOW-LOAD-PROFILE",id:"show-load-profile",level:2},{value:"Name",id:"name",level:3},{value:"Description",id:"description",level:3},{value:"Example",id:"example",level:3},{value:"Keywords",id:"keywords",level:3},{value:"Best Practice",id:"best-practice",level:3}],m={toc:c};function p(e){let{components:n,...t}=e;return(0,a.kt)("wrapper",(0,r.Z)({},m,t,{components:n,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"show-load-profile"},"SHOW-LOAD-PROFILE"),(0,a.kt)("h3",{id:"name"},"Name"),(0,a.kt)("p",null,"SHOW LOAD PROFILE"),(0,a.kt)("h3",{id:"description"},"Description"),(0,a.kt)("p",null,"\u8be5\u8bed\u53e5\u662f\u7528\u6765\u67e5\u770b\u5bfc\u5165\u64cd\u4f5c\u7684Profile\u4fe1\u606f\uff0c\u8be5\u529f\u80fd\u9700\u8981\u7528\u6237\u6253\u5f00 Profile \u8bbe\u7f6e\uff0c0.15 \u4e4b\u524d\u7248\u672c\u6267\u884c\u4e0b\u9762\u7684\u8bbe\u7f6e\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sql"},"SET is_report_success=true;\n")),(0,a.kt)("p",null,"0.15 \u53ca\u4e4b\u540e\u7684\u7248\u672c\u6267\u884c\u4e0b\u9762\u7684\u8bbe\u7f6e\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sql"},"SET [GLOBAL] enable_profile=true;\n")),(0,a.kt)("p",null,"\u8bed\u6cd5\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sql"},'show load profile "/";\n\nshow load profile "/[queryId]"\n')),(0,a.kt)("p",null,"\u8fd9\u4e2a\u547d\u4ee4\u4f1a\u5217\u51fa\u5f53\u524d\u4fdd\u5b58\u7684\u6240\u6709\u5bfc\u5165 Profile\u3002\u6bcf\u884c\u5bf9\u5e94\u4e00\u4e2a\u5bfc\u5165\u3002\u5176\u4e2d QueryId \u5217\u4e3a\u5bfc\u5165\u4f5c\u4e1a\u7684 ID\u3002\u8fd9\u4e2a ID \u4e5f\u53ef\u4ee5\u901a\u8fc7 SHOW LOAD \u8bed\u53e5\u67e5\u770b\u62ff\u5230\u3002\u6211\u4eec\u53ef\u4ee5\u9009\u62e9\u6211\u4eec\u60f3\u770b\u7684 Profile \u5bf9\u5e94\u7684 QueryId\uff0c\u67e5\u770b\u5177\u4f53\u60c5\u51b5"),(0,a.kt)("h3",{id:"example"},"Example"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"\u5217\u51fa\u6240\u6709\u7684 Load Profile"),(0,a.kt)("pre",{parentName:"li"},(0,a.kt)("code",{parentName:"pre",className:"language-sql"},'mysql> show load profile "/";\n+---------+------+-----------+------+-----------+---------------------+---------------------+-----------+------------+\n| QueryId | User | DefaultDb | SQL  | QueryType | StartTime           | EndTime             | TotalTime | QueryState |\n+---------+------+-----------+------+-----------+---------------------+---------------------+-----------+------------+\n| 10441   | N/A  | N/A       | N/A  | Load      | 2021-04-10 22:15:37 | 2021-04-10 22:18:54 | 3m17s     | N/A        |\n+---------+------+-----------+------+-----------+---------------------+---------------------+-----------+------------+\n2 rows in set (0.00 sec)\n'))),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"\u67e5\u770b\u6709\u5bfc\u5165\u4f5c\u4e1a\u7684\u5b50\u4efb\u52a1\u6982\u51b5\uff1a"),(0,a.kt)("pre",{parentName:"li"},(0,a.kt)("code",{parentName:"pre",className:"language-sql"},'mysql> show load profile "/10441";\n+-----------------------------------+------------+\n| TaskId                            | ActiveTime |\n+-----------------------------------+------------+\n| 980014623046410a-88e260f0c43031f1 | 3m14s      |\n+-----------------------------------+------------+\n'))),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"\u67e5\u770b\u6307\u5b9a\u5b50\u4efb\u52a1\u7684 Instance \u6982\u51b5"),(0,a.kt)("pre",{parentName:"li"},(0,a.kt)("code",{parentName:"pre",className:"language-sql"},'mysql> show load profile "/10441/980014623046410a-88e260f0c43031f1";\n+-----------------------------------+------------------+------------+\n| Instances                         | Host             | ActiveTime |\n+-----------------------------------+------------------+------------+\n| 980014623046410a-88e260f0c43031f2 | 10.81.85.89:9067 | 3m7s       |\n| 980014623046410a-88e260f0c43031f3 | 10.81.85.89:9067 | 3m6s       |\n| 980014623046410a-88e260f0c43031f4 | 10.81.85.89:9067 | 3m10s      |\n| 980014623046410a-88e260f0c43031f5 | 10.81.85.89:9067 | 3m14s      |\n+-----------------------------------+------------------+------------+\n'))),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"\u7ee7\u7eed\u67e5\u770b\u67d0\u4e00\u4e2a\u5177\u4f53\u7684 Instance \u4e0a\u5404\u4e2a\u7b97\u5b50\u7684\u8be6\u7ec6 Profile"),(0,a.kt)("pre",{parentName:"li"},(0,a.kt)("code",{parentName:"pre",className:"language-sql"},'mysql> show load profile "/10441/980014623046410a-88e260f0c43031f1/980014623046410a-88e260f0c43031f5"\\G\n\n*************************** 1. row ***************************\n\nInstance:\n\n      \u250c-----------------------------------------\u2510\n\n      \u2502[-1: OlapTableSink]                      \u2502\n\n      \u2502(Active: 2m17s, non-child: 70.91)        \u2502\n\n      \u2502  - Counters:                            \u2502\n\n      \u2502      - CloseWaitTime: 1m53s             \u2502\n\n      \u2502      - ConvertBatchTime: 0ns            \u2502\n\n      \u2502      - MaxAddBatchExecTime: 1m46s       \u2502\n\n      \u2502      - NonBlockingSendTime: 3m11s       \u2502\n\n      \u2502      - NumberBatchAdded: 782            \u2502\n\n      \u2502      - NumberNodeChannels: 1            \u2502\n\n      \u2502      - OpenTime: 743.822us              \u2502\n\n      \u2502      - RowsFiltered: 0                  \u2502\n\n      \u2502      - RowsRead: 1.599729M (1599729)    \u2502\n\n      \u2502      - RowsReturned: 1.599729M (1599729)\u2502\n\n      \u2502      - SendDataTime: 11s761ms           \u2502\n\n      \u2502      - TotalAddBatchExecTime: 1m46s     \u2502\n\n      \u2502      - ValidateDataTime: 9s802ms        \u2502\n\n      \u2514-----------------------------------------\u2518\n\n                           \u2502\n\n\u250c-----------------------------------------------------\u2510\n\n\u2502[0: BROKER_SCAN_NODE]                                \u2502\n\n\u2502(Active: 56s537ms, non-child: 29.06)                 \u2502\n\n\u2502  - Counters:                                        \u2502\n\n\u2502      - BytesDecompressed: 0.00                      \u2502\n\n\u2502      - BytesRead: 5.77 GB                           \u2502\n\n\u2502      - DecompressTime: 0ns                          \u2502\n\n\u2502      - FileReadTime: 34s263ms                       \u2502\n\n\u2502      - MaterializeTupleTime(*): 45s54ms             \u2502\n\n\u2502      - NumDiskAccess: 0                             \u2502\n\n\u2502      - PeakMemoryUsage: 33.03 MB                    \u2502\n\n\u2502      - RowsRead: 1.599729M (1599729)                \u2502\n\n\u2502      - RowsReturned: 1.599729M (1599729)            \u2502\n\n\u2502      - RowsReturnedRate: 28.295K sec               \u2502\n\n\u2502      - TotalRawReadTime(*): 1m20s                   \u2502\n\n\u2502      - TotalReadThroughput: 30.39858627319336 MB/sec\u2502\n\n\u2502      - WaitScannerTime: 56s528ms                    \u2502\n\n\u2514-----------------------------------------------------\u2518\n')))),(0,a.kt)("h3",{id:"keywords"},"Keywords"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"SHOW, LOAD, PROFILE\n")),(0,a.kt)("h3",{id:"best-practice"},"Best Practice"))}p.isMDXComponent=!0}}]);