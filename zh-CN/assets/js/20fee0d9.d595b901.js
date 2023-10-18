"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([[61988],{3905:(t,e,a)=>{a.d(e,{Zo:()=>k,kt:()=>s});var n=a(67294);function l(t,e,a){return e in t?Object.defineProperty(t,e,{value:a,enumerable:!0,configurable:!0,writable:!0}):t[e]=a,t}function r(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.push.apply(a,n)}return a}function i(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?r(Object(a),!0).forEach((function(e){l(t,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))}))}return t}function p(t,e){if(null==t)return{};var a,n,l=function(t,e){if(null==t)return{};var a,n,l={},r=Object.keys(t);for(n=0;n<r.length;n++)a=r[n],e.indexOf(a)>=0||(l[a]=t[a]);return l}(t,e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);for(n=0;n<r.length;n++)a=r[n],e.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(t,a)&&(l[a]=t[a])}return l}var m=n.createContext({}),d=function(t){var e=n.useContext(m),a=e;return t&&(a="function"==typeof t?t(e):i(i({},e),t)),a},k=function(t){var e=d(t.components);return n.createElement(m.Provider,{value:e},t.children)},N="mdxType",o={inlineCode:"code",wrapper:function(t){var e=t.children;return n.createElement(n.Fragment,{},e)}},u=n.forwardRef((function(t,e){var a=t.components,l=t.mdxType,r=t.originalType,m=t.parentName,k=p(t,["components","mdxType","originalType","parentName"]),N=d(a),u=l,s=N["".concat(m,".").concat(u)]||N[u]||o[u]||r;return a?n.createElement(s,i(i({ref:e},k),{},{components:a})):n.createElement(s,i({ref:e},k))}));function s(t,e){var a=arguments,l=e&&e.mdxType;if("string"==typeof t||l){var r=a.length,i=new Array(r);i[0]=u;var p={};for(var m in e)hasOwnProperty.call(e,m)&&(p[m]=e[m]);p.originalType=t,p[N]="string"==typeof t?t:l,i[1]=p;for(var d=2;d<r;d++)i[d]=a[d];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}u.displayName="MDXCreateElement"},17940:(t,e,a)=>{a.r(e),a.d(e,{assets:()=>m,contentTitle:()=>i,default:()=>o,frontMatter:()=>r,metadata:()=>p,toc:()=>d});var n=a(87462),l=(a(67294),a(3905));const r={title:"\u7edf\u8ba1\u4fe1\u606f",language:"zh-CN"},i=void 0,p={unversionedId:"query-acceleration/statistics",id:"query-acceleration/statistics",title:"\u7edf\u8ba1\u4fe1\u606f",description:"\x3c!--",source:"@site/i18n/zh-CN/docusaurus-plugin-content-docs/current/query-acceleration/statistics.md",sourceDirName:"query-acceleration",slug:"/query-acceleration/statistics",permalink:"/zh-CN/docs/dev/query-acceleration/statistics",draft:!1,tags:[],version:"current",frontMatter:{title:"\u7edf\u8ba1\u4fe1\u606f",language:"zh-CN"},sidebar:"docs",previous:{title:"\u7269\u5316\u89c6\u56fe",permalink:"/zh-CN/docs/dev/query-acceleration/materialized-view"},next:{title:"Bucket Shuffle Join",permalink:"/zh-CN/docs/dev/query-acceleration/join-optimization/bucket-shuffle-join"}},m={},d=[{value:"\u6536\u96c6\u7edf\u8ba1\u4fe1\u606f",id:"\u6536\u96c6\u7edf\u8ba1\u4fe1\u606f",level:2},{value:"\u4f7f\u7528ANALYZE\u8bed\u53e5",id:"\u4f7f\u7528analyze\u8bed\u53e5",level:3},{value:"\u81ea\u52a8\u6536\u96c6",id:"\u81ea\u52a8\u6536\u96c6",level:3},{value:"\u4efb\u52a1\u7ba1\u7406",id:"\u4efb\u52a1\u7ba1\u7406",level:3},{value:"\u67e5\u770b\u7edf\u8ba1\u4efb\u52a1",id:"\u67e5\u770b\u7edf\u8ba1\u4efb\u52a1",level:4},{value:"\u7ec8\u6b62\u7edf\u8ba1\u4efb\u52a1",id:"\u7ec8\u6b62\u7edf\u8ba1\u4efb\u52a1",level:4},{value:"\u67e5\u770b\u7edf\u8ba1\u4fe1\u606f",id:"\u67e5\u770b\u7edf\u8ba1\u4fe1\u606f",level:4},{value:"\u8868\u7edf\u8ba1\u4fe1\u606f",id:"\u8868\u7edf\u8ba1\u4fe1\u606f",level:4},{value:"\u67e5\u770b\u5217\u7edf\u8ba1\u4fe1\u606f",id:"\u67e5\u770b\u5217\u7edf\u8ba1\u4fe1\u606f",level:4},{value:"\u4fee\u6539\u7edf\u8ba1\u4fe1\u606f",id:"\u4fee\u6539\u7edf\u8ba1\u4fe1\u606f",level:4},{value:"\u5220\u9664\u7edf\u8ba1\u4fe1\u606f",id:"\u5220\u9664\u7edf\u8ba1\u4fe1\u606f",level:4},{value:"\u5220\u9664Analyze Job",id:"\u5220\u9664analyze-job",level:4},{value:"\u67e5\u770b\u81ea\u52a8\u6536\u96c6\u4efb\u52a1\u6267\u884c\u60c5\u51b5",id:"\u67e5\u770b\u81ea\u52a8\u6536\u96c6\u4efb\u52a1\u6267\u884c\u60c5\u51b5",level:3},{value:"\u914d\u7f6e\u9879",id:"\u914d\u7f6e\u9879",level:2},{value:"\u4f7f\u7528\u5efa\u8bae",id:"\u4f7f\u7528\u5efa\u8bae",level:2},{value:"\u5e38\u89c1\u95ee\u9898",id:"\u5e38\u89c1\u95ee\u9898",level:2},{value:"ANALYZE WITH SYNC \u6267\u884c\u5931\u8d25\uff1aFailed to analyze following columns...",id:"analyze-with-sync-\u6267\u884c\u5931\u8d25failed-to-analyze-following-columns",level:3},{value:"ANALYZE\u63d0\u4ea4\u62a5\u9519\uff1aStats table not available...",id:"analyze\u63d0\u4ea4\u62a5\u9519stats-table-not-available",level:3},{value:"\u5927\u8868ANALYZE\u5931\u8d25",id:"\u5927\u8868analyze\u5931\u8d25",level:3}],k={toc:d},N="wrapper";function o(t){let{components:e,...a}=t;return(0,l.kt)(N,(0,n.Z)({},k,a,{components:e,mdxType:"MDXLayout"}),(0,l.kt)("h1",{id:"\u7edf\u8ba1\u4fe1\u606f"},"\u7edf\u8ba1\u4fe1\u606f"),(0,l.kt)("p",null,"\u901a\u8fc7\u6536\u96c6\u7edf\u8ba1\u4fe1\u606f\u6709\u52a9\u4e8e\u4f18\u5316\u5668\u4e86\u89e3\u6570\u636e\u5206\u5e03\u7279\u6027\uff0c\u5728\u8fdb\u884cCBO\uff08\u57fa\u4e8e\u6210\u672c\u4f18\u5316\uff09\u65f6\u4f18\u5316\u5668\u4f1a\u5229\u7528\u8fd9\u4e9b\u7edf\u8ba1\u4fe1\u606f\u6765\u8ba1\u7b97\u8c13\u8bcd\u7684\u9009\u62e9\u6027\uff0c\u5e76\u4f30\u7b97\u6bcf\u4e2a\u6267\u884c\u8ba1\u5212\u7684\u6210\u672c\u3002\u4ece\u800c\u9009\u62e9\u66f4\u4f18\u7684\u8ba1\u5212\u4ee5\u5927\u5e45\u63d0\u5347\u67e5\u8be2\u6548\u7387\u3002"),(0,l.kt)("p",null,"\u5f53\u524d\u6536\u96c6\u5217\u7684\u5982\u4e0b\u4fe1\u606f\uff1a"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:"left"},"\u4fe1\u606f"),(0,l.kt)("th",{parentName:"tr",align:"left"},"\u63cf\u8ff0"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("inlineCode",{parentName:"td"},"row_count")),(0,l.kt)("td",{parentName:"tr",align:"left"},"\u603b\u884c\u6570")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("inlineCode",{parentName:"td"},"data_size")),(0,l.kt)("td",{parentName:"tr",align:"left"},"\u603b\u6570\u636e\u91cf")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("inlineCode",{parentName:"td"},"avg_size_byte")),(0,l.kt)("td",{parentName:"tr",align:"left"},"\u503c\u7684\u5e73\u5747\u2ed3\u5ea6")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("inlineCode",{parentName:"td"},"ndv")),(0,l.kt)("td",{parentName:"tr",align:"left"},"\u4e0d\u540c\u503c\u6570\u91cf")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("inlineCode",{parentName:"td"},"min")),(0,l.kt)("td",{parentName:"tr",align:"left"},"\u6700\u5c0f\u503c")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("inlineCode",{parentName:"td"},"max")),(0,l.kt)("td",{parentName:"tr",align:"left"},"\u6700\u2f24\u503c")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("inlineCode",{parentName:"td"},"null_count")),(0,l.kt)("td",{parentName:"tr",align:"left"},"\u7a7a\u503c\u6570\u91cf")))),(0,l.kt)("h2",{id:"\u6536\u96c6\u7edf\u8ba1\u4fe1\u606f"},"\u6536\u96c6\u7edf\u8ba1\u4fe1\u606f"),(0,l.kt)("h3",{id:"\u4f7f\u7528analyze\u8bed\u53e5"},"\u4f7f\u7528ANALYZE\u8bed\u53e5"),(0,l.kt)("p",null,"Doris\u652f\u6301\u7528\u6237\u901a\u8fc7\u63d0\u4ea4ANALYZE\u8bed\u53e5\u6765\u89e6\u53d1\u7edf\u8ba1\u4fe1\u606f\u7684\u6536\u96c6\u548c\u66f4\u65b0\u3002"),(0,l.kt)("p",null,"\u8bed\u6cd5\uff1a"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-SQL"},'ANALYZE < TABLE | DATABASE table_name | db_name > \n    [ PARTITIONS [(*) | (partition_name [, ...]) | WITH RECENT COUNT ] ]\n    [ (column_name [, ...]) ]\n    [ [ WITH SYNC ] [ WITH SAMPLE PERCENT | ROWS ] [ WITH SQL ] ]\n    [ PROPERTIES ("key" = "value", ...) ];\n')),(0,l.kt)("p",null,"\u5176\u4e2d\uff1a"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"table_name: \u6307\u5b9a\u7684\u7684\u76ee\u6807\u8868\u3002\u53ef\u4ee5\u662f \xa0",(0,l.kt)("inlineCode",{parentName:"li"},"db_name.table_name"),"\xa0 \u5f62\u5f0f\u3002"),(0,l.kt)("li",{parentName:"ul"},"partition_name: \u6307\u5b9a\u7684\u76ee\u6807\u5206\u533a\uff08\u76ee\u524d\u53ea\u9488\u5bf9Hive\u5916\u8868\uff09\u3002\u5fc5\u987b\u662f \xa0",(0,l.kt)("inlineCode",{parentName:"li"},"table_name"),"\xa0 \u4e2d\u5b58\u5728\u7684\u5206\u533a\uff0c\u591a\u4e2a\u5217\u540d\u79f0\u7528\u9017\u53f7\u5206\u9694\u3002\u5206\u533a\u540d\u6837\u4f8b: \u5355\u5c42\u5206\u533aPARTITIONS(",(0,l.kt)("inlineCode",{parentName:"li"},"event_date=20230706"),")\uff0c\u591a\u5c42\u5206\u533aPARTITIONS(",(0,l.kt)("inlineCode",{parentName:"li"},"nation=CN/city=Beijing"),")\u3002PARTITIONS (*)\u6307\u5b9a\u6240\u6709\u5206\u533a\uff0cPARTITIONS WITH RECENT 100\u6307\u5b9a\u6700\u65b0\u7684100\u4e2a\u5206\u533a\u3002"),(0,l.kt)("li",{parentName:"ul"},"column_name: \u6307\u5b9a\u7684\u76ee\u6807\u5217\u3002\u5fc5\u987b\u662f \xa0",(0,l.kt)("inlineCode",{parentName:"li"},"table_name"),"\xa0 \u4e2d\u5b58\u5728\u7684\u5217\uff0c\u591a\u4e2a\u5217\u540d\u79f0\u7528\u9017\u53f7\u5206\u9694\u3002"),(0,l.kt)("li",{parentName:"ul"},"sync\uff1a\u540c\u6b65\u6536\u96c6\u7edf\u8ba1\u4fe1\u606f\u3002\u6536\u96c6\u5b8c\u540e\u8fd4\u56de\u3002\u82e5\u4e0d\u6307\u5b9a\u5219\u5f02\u6b65\u6267\u884c\u5e76\u8fd4\u56de\u4efb\u52a1 ID\u3002"),(0,l.kt)("li",{parentName:"ul"},"sample percent | rows\uff1a\u62bd\u6837\u6536\u96c6\u7edf\u8ba1\u4fe1\u606f\u3002\u53ef\u4ee5\u6307\u5b9a\u62bd\u6837\u6bd4\u4f8b\u6216\u8005\u62bd\u6837\u884c\u6570\u3002"),(0,l.kt)("li",{parentName:"ul"},"sql\uff1a\u6267\u884csql\u6765\u6536\u96c6\u5916\u8868\u5206\u533a\u5217\u7edf\u8ba1\u4fe1\u606f\u3002\u9ed8\u8ba4\u4ece\u5143\u6570\u636e\u6536\u96c6\u5206\u533a\u5217\u4fe1\u606f\uff0c\u8fd9\u6837\u6548\u7387\u6bd4\u8f83\u9ad8\u4f46\u662f\u884c\u6570\u548c\u6570\u636e\u91cf\u5927\u5c0f\u53ef\u80fd\u4e0d\u51c6\u3002\u7528\u6237\u53ef\u4ee5\u6307\u5b9a\u4f7f\u7528sql\u6765\u6536\u96c6\uff0c\u8fd9\u6837\u53ef\u4ee5\u6536\u96c6\u5230\u51c6\u786e\u7684\u5206\u533a\u5217\u4fe1\u606f\u3002")),(0,l.kt)("h3",{id:"\u81ea\u52a8\u6536\u96c6"},"\u81ea\u52a8\u6536\u96c6"),(0,l.kt)("p",null,"\u7528\u6237\u53ef\u4ee5\u901a\u8fc7\u8bbe\u7f6eFE\u914d\u7f6e\u9879",(0,l.kt)("inlineCode",{parentName:"p"},"enable_full_auto_analyze = true"),"\u6765\u542f\u7528\u672c\u529f\u80fd\u3002\u5f00\u542f\u540e\uff0c\u5c06\u5728\u6307\u5b9a\u7684\u65f6\u95f4\u6bb5\u5185\u81ea\u52a8\u6536\u96c6\u6ee1\u8db3\u6761\u4ef6\u7684\u5e93\u8868\u4e0a\u7684\u7edf\u8ba1\u4fe1\u606f\u3002\u7528\u6237\u53ef\u4ee5\u901a\u8fc7\u8bbe\u7f6e\u53c2\u6570",(0,l.kt)("inlineCode",{parentName:"p"},"full_auto_analyze_start_time"),"\uff08\u9ed8\u8ba4\u4e3a00:00:00\uff09\u548c\u53c2\u6570",(0,l.kt)("inlineCode",{parentName:"p"},"full_auto_analyze_end_time"),"\uff08\u9ed8\u8ba4\u4e3a02:00:00\uff09\u6765\u6307\u5b9a\u81ea\u52a8\u6536\u96c6\u7684\u65f6\u95f4\u6bb5\u3002"),(0,l.kt)("p",null,"\u6b64\u529f\u80fd\u4ec5\u5bf9\u6ca1\u6709\u7edf\u8ba1\u4fe1\u606f\u6216\u8005\u7edf\u8ba1\u4fe1\u606f\u8fc7\u65f6\u7684\u5e93\u8868\u8fdb\u884c\u6536\u96c6\u3002\u5f53\u4e00\u4e2a\u8868\u7684\u6570\u636e\u66f4\u65b0\u4e8620%\uff08\u8be5\u503c\u53ef\u901a\u8fc7\u53c2\u6570",(0,l.kt)("inlineCode",{parentName:"p"},"table_stats_health_threshold"),"\uff08\u9ed8\u8ba4\u4e3a80\uff09\u914d\u7f6e\uff09\u4ee5\u4e0a\u65f6\uff0cDoris\u4f1a\u8ba4\u4e3a\u8be5\u8868\u7684\u7edf\u8ba1\u4fe1\u606f\u5df2\u7ecf\u8fc7\u65f6\u3002"),(0,l.kt)("p",null,"\u5bf9\u4e8e\u6570\u636e\u91cf\u8f83\u5927\uff08\u9ed8\u8ba4\u4e3a5GiB\uff09\u7684\u8868\uff0cDoris\u4f1a\u81ea\u52a8\u91c7\u53d6\u91c7\u6837\u7684\u65b9\u5f0f\u53bb\u6536\u96c6\uff0c\u4ee5\u5c3d\u53ef\u80fd\u964d\u4f4e\u5bf9\u7cfb\u7edf\u9020\u6210\u7684\u8d1f\u62c5\u5e76\u5c3d\u5feb\u5b8c\u6210\u6536\u96c6\u4f5c\u4e1a\uff0c\u7528\u6237\u53ef\u901a\u8fc7\u8bbe\u7f6eFE\u53c2\u6570",(0,l.kt)("inlineCode",{parentName:"p"},"huge_table_lower_bound_size_in_bytes"),"\u6765\u8c03\u8282\u6b64\u884c\u4e3a\u3002\u5982\u679c\u5e0c\u671b\u5bf9\u6240\u6709\u7684\u8868\u90fd\u91c7\u53d6\u5168\u91cf\u6536\u96c6\uff0c\u53ef\u914d\u7f6eFE\u53c2\u6570",(0,l.kt)("inlineCode",{parentName:"p"},"enable_auto_sample"),"\u4e3afalse\u3002\u540c\u65f6\u5bf9\u4e8e\u6570\u636e\u91cf\u5927\u4e8e",(0,l.kt)("inlineCode",{parentName:"p"},"huge_table_lower_bound_size_in_bytes"),"\u7684\u8868\uff0cDoris\u4fdd\u8bc1\u5176\u6536\u96c6\u65f6\u95f4\u95f4\u9694\u4e0d\u5c0f\u4e8e12\u5c0f\u65f6\uff08\u8be5\u65f6\u95f4\u53ef\u901a\u8fc7FE\u53c2\u6570",(0,l.kt)("inlineCode",{parentName:"p"},"huge_table_auto_analyze_interval_in_millis"),"\u63a7\u5236\uff09\u3002"),(0,l.kt)("p",null,"\u81ea\u52a8\u91c7\u6837\u9ed8\u8ba4\u91c7\u6837200000\u884c\uff0c\u4f46\u7531\u4e8e\u5b9e\u73b0\u65b9\u5f0f\u7684\u539f\u56e0\u5b9e\u9645\u91c7\u6837\u6570\u53ef\u80fd\u5927\u4e8e\u8be5\u503c\u3002\u5982\u679c\u5e0c\u671b\u91c7\u6837\u66f4\u591a\u7684\u884c\u4ee5\u83b7\u5f97\u66f4\u51c6\u786e\u7684\u6570\u636e\u5206\u5e03\u4fe1\u606f\uff0c\u53ef\u901a\u8fc7FE\u53c2\u6570",(0,l.kt)("inlineCode",{parentName:"p"},"auto_analyze_job_record_count"),"\u914d\u7f6e\u3002"),(0,l.kt)("h3",{id:"\u4efb\u52a1\u7ba1\u7406"},"\u4efb\u52a1\u7ba1\u7406"),(0,l.kt)("h4",{id:"\u67e5\u770b\u7edf\u8ba1\u4efb\u52a1"},"\u67e5\u770b\u7edf\u8ba1\u4efb\u52a1"),(0,l.kt)("p",null,"\u901a\u8fc7 ",(0,l.kt)("inlineCode",{parentName:"p"},"SHOW ANALYZE")," \u6765\u67e5\u770b\u7edf\u8ba1\u4fe1\u606f\u6536\u96c6\u4efb\u52a1\u7684\u4fe1\u606f\u3002"),(0,l.kt)("p",null,"\u8bed\u6cd5\u5982\u4e0b\uff1a"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-SQL"},'SHOW ANALYZE < table_name | job_id >\n    [ WHERE [ STATE = [ "PENDING" | "RUNNING" | "FINISHED" | "FAILED" ] ] ];\n')),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"table_name\uff1a\u8868\u540d\uff0c\u6307\u5b9a\u540e\u53ef\u67e5\u770b\u8be5\u8868\u5bf9\u5e94\u7684\u7edf\u8ba1\u4efb\u52a1\u4fe1\u606f\u3002\u53ef\u4ee5\u662f \xa0",(0,l.kt)("inlineCode",{parentName:"li"},"db_name.table_name"),"\xa0 \u5f62\u5f0f\u3002\u4e0d\u6307\u5b9a\u65f6\u8fd4\u56de\u6240\u6709\u7edf\u8ba1\u4efb\u52a1\u4fe1\u606f\u3002"),(0,l.kt)("li",{parentName:"ul"},"job_id\uff1a\u7edf\u8ba1\u4fe1\u606f\u4efb\u52a1 ID\uff0c\u6267\u884c ",(0,l.kt)("inlineCode",{parentName:"li"},"ANALYZE")," \u975e\u540c\u6b65\u6536\u96c6\u7edf\u8ba1\u4fe1\u606f\u65f6\u6240\u8fd4\u56de\u7684\u503c\u3002\u4e0d\u6307\u5b9a\u65f6\u8fd4\u56de\u6240\u6709\u7edf\u8ba1\u4efb\u52a1\u4fe1\u606f\u3002")),(0,l.kt)("p",null,"\u8f93\u51fa\uff1a"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:"left"},"\u5217\u540d"),(0,l.kt)("th",{parentName:"tr",align:"left"},"\u8bf4\u660e"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("inlineCode",{parentName:"td"},"job_id")),(0,l.kt)("td",{parentName:"tr",align:"left"},"\u7edf\u8ba1\u4efb\u52a1 ID")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("inlineCode",{parentName:"td"},"catalog_name")),(0,l.kt)("td",{parentName:"tr",align:"left"},"catalog \u540d\u79f0")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("inlineCode",{parentName:"td"},"db_name")),(0,l.kt)("td",{parentName:"tr",align:"left"},"\u6570\u636e\u5e93\u540d\u79f0")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("inlineCode",{parentName:"td"},"tbl_name")),(0,l.kt)("td",{parentName:"tr",align:"left"},"\u8868\u540d\u79f0")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("inlineCode",{parentName:"td"},"col_name")),(0,l.kt)("td",{parentName:"tr",align:"left"},"\u5217\u540d\u79f0")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("inlineCode",{parentName:"td"},"job_type")),(0,l.kt)("td",{parentName:"tr",align:"left"},"\u4efb\u52a1\u7c7b\u578b")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("inlineCode",{parentName:"td"},"analysis_type")),(0,l.kt)("td",{parentName:"tr",align:"left"},"\u7edf\u8ba1\u7c7b\u578b")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("inlineCode",{parentName:"td"},"message")),(0,l.kt)("td",{parentName:"tr",align:"left"},"\u4efb\u52a1\u4fe1\u606f")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("inlineCode",{parentName:"td"},"last_exec_time_in_ms")),(0,l.kt)("td",{parentName:"tr",align:"left"},"\u4e0a\u6b21\u6267\u884c\u65f6\u95f4")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("inlineCode",{parentName:"td"},"state")),(0,l.kt)("td",{parentName:"tr",align:"left"},"\u4efb\u52a1\u72b6\u6001")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("inlineCode",{parentName:"td"},"schedule_type")),(0,l.kt)("td",{parentName:"tr",align:"left"},"\u8c03\u5ea6\u65b9\u5f0f")))),(0,l.kt)("p",null,"\u53ef\u901a\u8fc7",(0,l.kt)("inlineCode",{parentName:"p"},"SHOW ANALYZE TASK STATUS [job_id]"),"\uff0c\u67e5\u770b\u5177\u4f53\u6bcf\u4e2a\u5217\u7edf\u8ba1\u4fe1\u606f\u7684\u6536\u96c6\u5b8c\u6210\u60c5\u51b5\u3002"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"mysql> show analyze task status  20038 ;\n+---------+----------+---------+----------------------+----------+\n| task_id | col_name | message | last_exec_time_in_ms | state    |\n+---------+----------+---------+----------------------+----------+\n| 20039   | col4     |         | 2023-06-01 17:22:15  | FINISHED |\n| 20040   | col2     |         | 2023-06-01 17:22:15  | FINISHED |\n| 20041   | col3     |         | 2023-06-01 17:22:15  | FINISHED |\n| 20042   | col1     |         | 2023-06-01 17:22:15  | FINISHED |\n+---------+----------+---------+----------------------+----------+\n\n\n")),(0,l.kt)("h4",{id:"\u7ec8\u6b62\u7edf\u8ba1\u4efb\u52a1"},"\u7ec8\u6b62\u7edf\u8ba1\u4efb\u52a1"),(0,l.kt)("p",null,"\u901a\u8fc7 ",(0,l.kt)("inlineCode",{parentName:"p"},"KILL ANALYZE")," \u6765\u7ec8\u6b62\u6b63\u5728\u8fd0\u884c\u7684\u7edf\u8ba1\u4efb\u52a1\u3002"),(0,l.kt)("p",null,"\u8bed\u6cd5\u5982\u4e0b\uff1a"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-SQL"},"KILL ANALYZE job_id;\n")),(0,l.kt)("p",null,"\u5176\u4e2d\uff1a"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"job_id\uff1a\u7edf\u8ba1\u4fe1\u606f\u4efb\u52a1 ID\u3002\u6267\u884c ",(0,l.kt)("inlineCode",{parentName:"li"},"ANALYZE")," \u975e\u540c\u6b65\u6536\u96c6\u7edf\u8ba1\u4fe1\u606f\u65f6\u6240\u8fd4\u56de\u7684\u503c\uff0c\u4e5f\u53ef\u4ee5\u901a\u8fc7 ",(0,l.kt)("inlineCode",{parentName:"li"},"SHOW ANALYZE")," \u8bed\u53e5\u83b7\u53d6\u3002")),(0,l.kt)("p",null,"\u793a\u4f8b\uff1a"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"\u7ec8\u6b62 ID \u4e3a 52357 \u7684\u7edf\u8ba1\u4efb\u52a1\u3002")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-SQL"},"mysql> KILL ANALYZE 52357;\n")),(0,l.kt)("h4",{id:"\u67e5\u770b\u7edf\u8ba1\u4fe1\u606f"},"\u67e5\u770b\u7edf\u8ba1\u4fe1\u606f"),(0,l.kt)("h4",{id:"\u8868\u7edf\u8ba1\u4fe1\u606f"},"\u8868\u7edf\u8ba1\u4fe1\u606f"),(0,l.kt)("p",null,"\u901a\u8fc7 ",(0,l.kt)("inlineCode",{parentName:"p"},"SHOW TABLE STATS")," \u8868\u7684\u7edf\u8ba1\u4fe1\u606f\u6536\u96c6\u6982\u51b5\u3002"),(0,l.kt)("p",null,"\u8bed\u6cd5\u5982\u4e0b\uff1a"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-SQL"},"SHOW TABLE STATS table_name;\n")),(0,l.kt)("p",null,"\u5176\u4e2d\uff1a"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"table_name: \u5bfc\u5165\u6570\u636e\u7684\u76ee\u6807\u8868\u3002\u53ef\u4ee5\u662f \xa0",(0,l.kt)("inlineCode",{parentName:"li"},"db_name.table_name"),"\xa0 \u5f62\u5f0f\u3002")),(0,l.kt)("p",null,"\u8f93\u51fa\uff1a"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:"left"},"\u5217\u540d"),(0,l.kt)("th",{parentName:"tr",align:"left"},"\u8bf4\u660e"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("inlineCode",{parentName:"td"},"row_count")),(0,l.kt)("td",{parentName:"tr",align:"left"},"\u884c\u6570\uff08\u4e0d\u53cd\u6620\u547d\u4ee4\u6267\u884c\u65f6\u7684\u51c6\u786e\u884c\u6570\uff09")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("inlineCode",{parentName:"td"},"method")),(0,l.kt)("td",{parentName:"tr",align:"left"},"\u6536\u96c6\u65b9\u5f0f\uff08\u5168\u91cf/\u91c7\u6837\uff09")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("inlineCode",{parentName:"td"},"type")),(0,l.kt)("td",{parentName:"tr",align:"left"},"\u7edf\u8ba1\u6570\u636e\u7684\u7c7b\u578b")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("inlineCode",{parentName:"td"},"updated_time")),(0,l.kt)("td",{parentName:"tr",align:"left"},"\u4e0a\u6b21\u66f4\u65b0\u65f6\u95f4")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("inlineCode",{parentName:"td"},"columns")),(0,l.kt)("td",{parentName:"tr",align:"left"},"\u6536\u96c6\u8fc7\u7edf\u8ba1\u4fe1\u606f\u7684\u5217")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("inlineCode",{parentName:"td"},"trigger")),(0,l.kt)("td",{parentName:"tr",align:"left"},"\u7edf\u8ba1\u4fe1\u606f\u6536\u96c6\u89e6\u53d1\u65b9\u5f0f\uff08\u7cfb\u7edf\u81ea\u52a8\u89e6\u53d1/\u7528\u6237\u89e6\u53d1\uff09")))),(0,l.kt)("h4",{id:"\u67e5\u770b\u5217\u7edf\u8ba1\u4fe1\u606f"},"\u67e5\u770b\u5217\u7edf\u8ba1\u4fe1\u606f"),(0,l.kt)("p",null,"\u901a\u8fc7 ",(0,l.kt)("inlineCode",{parentName:"p"},"SHOW COLUMN STATS")," \u6765\u67e5\u770b\u5217\u7684\u4e0d\u540c\u503c\u6570\u4ee5\u53ca ",(0,l.kt)("inlineCode",{parentName:"p"},"NULL")," \u6570\u91cf\u7b49\u4fe1\u606f\u3002"),(0,l.kt)("p",null,"\u8bed\u6cd5\u5982\u4e0b\uff1a"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-SQL"},"SHOW COLUMN [cached] STATS table_name [ (column_name [, ...]) ];\n")),(0,l.kt)("p",null,"\u5176\u4e2d\uff1a"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"cached: \u5c55\u793a\u5f53\u524dFE\u5185\u5b58\u7f13\u5b58\u4e2d\u7684\u7edf\u8ba1\u4fe1\u606f\u3002"),(0,l.kt)("li",{parentName:"ul"},"table_name: \u6536\u96c6\u7edf\u8ba1\u4fe1\u606f\u7684\u76ee\u6807\u8868\u3002\u53ef\u4ee5\u662f \xa0",(0,l.kt)("inlineCode",{parentName:"li"},"db_name.table_name"),"\xa0 \u5f62\u5f0f\u3002"),(0,l.kt)("li",{parentName:"ul"},"column_name: \u6307\u5b9a\u7684\u76ee\u6807\u5217\uff0c\u5fc5\u987b\u662f \xa0",(0,l.kt)("inlineCode",{parentName:"li"},"table_name"),"\xa0 \u4e2d\u5b58\u5728\u7684\u5217\uff0c\u591a\u4e2a\u5217\u540d\u79f0\u7528\u9017\u53f7\u5206\u9694\u3002")),(0,l.kt)("h4",{id:"\u4fee\u6539\u7edf\u8ba1\u4fe1\u606f"},"\u4fee\u6539\u7edf\u8ba1\u4fe1\u606f"),(0,l.kt)("p",null,"\u2f64\u6237\u53ef\u4ee5\u901a\u8fc7 ",(0,l.kt)("inlineCode",{parentName:"p"},"ALTER")," \u8bed\u53e5\u8c03\u6574\u7edf\u8ba1\u4fe1\u606f\u3002"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-SQL"},"ALTER TABLE table_name MODIFY COLUMN column_name SET STATS ('stat_name' = 'stat_value', ...) [ PARTITION (partition_name) ];\n")),(0,l.kt)("p",null,"\u5176\u4e2d\uff1a"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"table_name: \u5220\u9664\u7edf\u8ba1\u4fe1\u606f\u7684\u76ee\u6807\u8868\u3002\u53ef\u4ee5\u662f ",(0,l.kt)("inlineCode",{parentName:"li"},"db_name.table_name")," \u5f62\u5f0f\u3002"),(0,l.kt)("li",{parentName:"ul"},"column_name: \u6307\u5b9a\u7684\u76ee\u6807\u5217\uff0c\u5fc5\u987b\u662f ",(0,l.kt)("inlineCode",{parentName:"li"},"table_name")," \u4e2d\u5b58\u5728\u7684\u5217\uff0c\u6bcf\u6b21\u53ea\u80fd\u4fee\u6539\u4e00\u5217\u7684\u7edf\u8ba1\u4fe1\u606f\u3002"),(0,l.kt)("li",{parentName:"ul"},"stat_name \u548c stat_value: \u76f8\u5e94\u7684\u7edf\u8ba1\u4fe1\u606f\u540d\u79f0\u548c\u7edf\u8ba1\u4fe1\u606f\u4fe1\u606f\u7684\u503c\uff0c\u591a\u4e2a\u7edf\u8ba1\u4fe1\u606f\u9017\u53f7\u5206\u9694\u3002\u53ef\u4ee5\u4fee\u6539\u7684\u7edf\u8ba1\u4fe1\u606f\u5305\u62ec ",(0,l.kt)("inlineCode",{parentName:"li"},"row_count"),", ",(0,l.kt)("inlineCode",{parentName:"li"},"ndv"),", ",(0,l.kt)("inlineCode",{parentName:"li"},"num_nulls"),", ",(0,l.kt)("inlineCode",{parentName:"li"},"min_value"),", ",(0,l.kt)("inlineCode",{parentName:"li"},"max_value"),", ",(0,l.kt)("inlineCode",{parentName:"li"},"data_size"),"\u3002")),(0,l.kt)("h4",{id:"\u5220\u9664\u7edf\u8ba1\u4fe1\u606f"},"\u5220\u9664\u7edf\u8ba1\u4fe1\u606f"),(0,l.kt)("p",null,"\u2f64\u6237\u901a\u8fc7 ",(0,l.kt)("inlineCode",{parentName:"p"},"DROP")," \u8bed\u53e5\u5220\u9664\u7edf\u8ba1\u4fe1\u606f\uff0c\u6839\u636e\u63d0\u4f9b\u7684\u53c2\u6570\uff0c\u5220\u9664\u6307\u5b9a\u7684\u8868\u3001\u5206\u533a\u6216\u5217\u7684\u7edf\u8ba1\u4fe1\u606f\u3002\u5220\u9664\u65f6\u4f1a\u540c\u65f6\u5220\u9664\u5217\u7edf\u8ba1\u4fe1\u606f\u548c\u5217\u76f4\u65b9\u56fe\u4fe1\u606f\u3002"),(0,l.kt)("p",null,"\u8bed\u6cd5\uff1a"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-SQL"},"DROP [ EXPIRED ] STATS [ table_name [ (column_name [, ...]) ] ];\n")),(0,l.kt)("h4",{id:"\u5220\u9664analyze-job"},"\u5220\u9664Analyze Job"),(0,l.kt)("p",null,"\u7528\u4e8e\u6839\u636ejob id\u5220\u9664\u81ea\u52a8/\u5468\u671fAnalyze\u4f5c\u4e1a"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sql"},"DROP ANALYZE JOB [JOB_ID]\n")),(0,l.kt)("h3",{id:"\u67e5\u770b\u81ea\u52a8\u6536\u96c6\u4efb\u52a1\u6267\u884c\u60c5\u51b5"},"\u67e5\u770b\u81ea\u52a8\u6536\u96c6\u4efb\u52a1\u6267\u884c\u60c5\u51b5"),(0,l.kt)("p",null,"\u6b64\u547d\u4ee4\u7528\u4e8e\u6253\u5f00\u81ea\u52a8\u6536\u96c6\u529f\u80fd\u540e\uff0c\u67e5\u770b\u81ea\u52a8\u6536\u96c6\u4efb\u52a1\u7684\u5b8c\u6210\u72b6\u6001\u3002"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sql"},'SHOW AUTO ANALYZE [ptable_name]\n    [ WHERE [ STATE = [ "PENDING" | "RUNNING" | "FINISHED" | "FAILED" ] ] ];\n')),(0,l.kt)("p",null,"\u81ea\u52a8\u6536\u96c6\u4efb\u52a1\u4e0d\u652f\u6301\u67e5\u770b\u6bcf\u4e2a\u5217\u7684\u5177\u5b8c\u6210\u60c5\u51b5\u53ca\u5931\u8d25\u539f\u56e0\u3002\u9ed8\u8ba4\u53ea\u4fdd\u5b58\u8fc7\u53bb20000\u4e2a\u6267\u884c\u5b8c\u6bd5\u7684\u81ea\u52a8\u6536\u96c6\u4efb\u52a1\u7684\u72b6\u6001\u3002"),(0,l.kt)("h2",{id:"\u914d\u7f6e\u9879"},"\u914d\u7f6e\u9879"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"fe conf option"),(0,l.kt)("th",{parentName:"tr",align:null},"comment"),(0,l.kt)("th",{parentName:"tr",align:null},"default value"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"statistics_sql_parallel_exec_instance_num"),(0,l.kt)("td",{parentName:"tr",align:null},"\u63a7\u5236\u6bcf\u4e2a\u7edf\u8ba1\u4fe1\u606f\u6536\u96c6SQL\u5728BE\u4fa7\u7684\u5e76\u53d1\u5b9e\u4f8b\u6570/pipeline task num"),(0,l.kt)("td",{parentName:"tr",align:null},"1")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"statistics_sql_mem_limit_in_bytes"),(0,l.kt)("td",{parentName:"tr",align:null},"\u63a7\u5236\u6bcf\u4e2a\u7edf\u8ba1\u4fe1\u606fSQL\u53ef\u5360\u7528\u7684BE\u5185\u5b58"),(0,l.kt)("td",{parentName:"tr",align:null},"2L ",(0,l.kt)("em",{parentName:"td"}," 1024 ")," 1024 * 1024 (2GiB)")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"statistics_simultaneously_running_task_num"),(0,l.kt)("td",{parentName:"tr",align:null},"\u901a\u8fc7",(0,l.kt)("inlineCode",{parentName:"td"},"ANALYZE TABLE[DATABASE]"),"\u63d0\u4ea4\u5f02\u6b65\u4f5c\u4e1a\u540e\uff0c\u53ef\u540c\u65f6analyze\u7684\u5217\u7684\u6570\u91cf\uff0c\u6240\u6709\u5f02\u6b65\u4efb\u52a1\u5171\u540c\u53d7\u5230\u8be5\u53c2\u6570\u7ea6\u675f"),(0,l.kt)("td",{parentName:"tr",align:null},"5")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"analyze_task_timeout_in_minutes"),(0,l.kt)("td",{parentName:"tr",align:null},"AnalyzeTask\u6267\u884c\u8d85\u65f6\u65f6\u95f4"),(0,l.kt)("td",{parentName:"tr",align:null},"12 hours")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"stats_cache_size"),(0,l.kt)("td",{parentName:"tr",align:null},"\u7edf\u8ba1\u4fe1\u606f\u7f13\u5b58\u7684\u5b9e\u9645\u5185\u5b58\u5360\u7528\u5927\u5c0f\u9ad8\u5ea6\u4f9d\u8d56\u4e8e\u6570\u636e\u7684\u7279\u6027\uff0c\u56e0\u4e3a\u5728\u4e0d\u540c\u7684\u6570\u636e\u96c6\u548c\u573a\u666f\u4e2d\uff0c\u6700\u5927/\u6700\u5c0f\u503c\u7684\u5e73\u5747\u5927\u5c0f\u548c\u76f4\u65b9\u56fe\u7684\u6876\u6570\u91cf\u4f1a\u6709\u5f88\u5927\u7684\u5dee\u5f02\u3002\u6b64\u5916\uff0cJVM\u7248\u672c\u7b49\u56e0\u7d20\u4e5f\u4f1a\u5bf9\u5176\u4ea7\u751f\u5f71\u54cd\u3002\u4e0b\u9762\u7ed9\u51fa\u7edf\u8ba1\u4fe1\u606f\u7f13\u5b58\u5728\u5305\u542b100000\u4e2a\u9879\u76ee\u65f6\u6240\u5360\u7528\u7684\u5185\u5b58\u5927\u5c0f\u3002\u6bcf\u4e2a\u9879\u76ee\u7684\u6700\u5927/\u6700\u5c0f\u503c\u7684\u5e73\u5747\u957f\u5ea6\u4e3a32\uff0c\u5217\u540d\u7684\u5e73\u5747\u957f\u5ea6\u4e3a16\uff0c\u7edf\u8ba1\u4fe1\u606f\u7f13\u5b58\u603b\u5171\u5360\u7528\u4e8661.2777404785MiB\u7684\u5185\u5b58\u3002\u5f3a\u70c8\u4e0d\u5efa\u8bae\u5206\u6790\u5177\u6709\u975e\u5e38\u5927\u5b57\u7b26\u4e32\u503c\u7684\u5217\uff0c\u56e0\u4e3a\u8fd9\u53ef\u80fd\u5bfc\u81f4FE\u5185\u5b58\u6ea2\u51fa\u3002"),(0,l.kt)("td",{parentName:"tr",align:null},"100000")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"full_auto_analyze_start_time"),(0,l.kt)("td",{parentName:"tr",align:null},"\u81ea\u52a8\u7edf\u8ba1\u4fe1\u606f\u6536\u96c6\u5f00\u59cb\u65f6\u95f4"),(0,l.kt)("td",{parentName:"tr",align:null},"00:00:00")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"full_auto_analyze_end_time"),(0,l.kt)("td",{parentName:"tr",align:null},"\u81ea\u52a8\u7edf\u8ba1\u4fe1\u606f\u6536\u96c6\u7ed3\u675f\u65f6\u95f4"),(0,l.kt)("td",{parentName:"tr",align:null},"02:00:00")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"enable_auto_sample"),(0,l.kt)("td",{parentName:"tr",align:null},"\u662f\u5426\u5f00\u542f\u5927\u8868\u81ea\u52a8sample\uff0c\u5f00\u542f\u540e\u5bf9\u4e8e\u5927\u5c0f\u8d85\u8fc7huge_table_lower_bound_size_in_bytes\u4f1a\u81ea\u52a8\u901a\u8fc7\u91c7\u6837\u6536\u96c6"),(0,l.kt)("td",{parentName:"tr",align:null},"false")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"auto_analyze_job_record_count"),(0,l.kt)("td",{parentName:"tr",align:null},"\u63a7\u5236\u7edf\u8ba1\u4fe1\u606f\u7684\u81ea\u52a8\u89e6\u53d1\u4f5c\u4e1a\u6267\u884c\u8bb0\u5f55\u7684\u6301\u4e45\u5316\u884c\u6570"),(0,l.kt)("td",{parentName:"tr",align:null},"20000")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"huge_table_default_sample_rows"),(0,l.kt)("td",{parentName:"tr",align:null},"\u5b9a\u4e49\u5f00\u542f\u5f00\u542f\u5927\u8868\u81ea\u52a8sample\u540e\uff0c\u5bf9\u5927\u8868\u7684\u91c7\u6837\u884c\u6570"),(0,l.kt)("td",{parentName:"tr",align:null},"4194304")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"huge_table_lower_bound_size_in_bytes"),(0,l.kt)("td",{parentName:"tr",align:null},"\u5b9a\u4e49\u5927\u8868\u7684\u5927\u5c0f\u4e0b\u754c\uff0c\u5728\u5f00\u542fenable_auto_sample\u7684\u60c5\u51b5\u4e0b\uff0c\u5927\u5c0f\u8d85\u8fc7\u8be5\u503c\u7684\u8868\u5c06\u4f1a\u81ea\u52a8\u901a\u8fc7\u91c7\u6837\u6536\u96c6\u7edf\u8ba1\u4fe1\u606f"),(0,l.kt)("td",{parentName:"tr",align:null},"5368 709120")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"huge_table_auto_analyze_interval_in_millis"),(0,l.kt)("td",{parentName:"tr",align:null},"\u63a7\u5236\u5bf9\u5927\u8868\u7684\u81ea\u52a8ANALYZE\u7684\u6700\u5c0f\u65f6\u95f4\u95f4\u9694\uff0c\u5728\u8be5\u65f6\u95f4\u95f4\u9694\u5185\u5927\u5c0f\u8d85\u8fc7huge_table_lower_bound_size_in_bytes\u7684\u8868\u4ec5ANALYZE\u4e00\u6b21"),(0,l.kt)("td",{parentName:"tr",align:null},"43200000")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"table_stats_health_threshold"),(0,l.kt)("td",{parentName:"tr",align:null},"\u53d6\u503c\u57280-100\u4e4b\u95f4\uff0c\u5f53\u81ea\u4e0a\u6b21\u7edf\u8ba1\u4fe1\u606f\u6536\u96c6\u64cd\u4f5c\u4e4b\u540e\uff0c\u6570\u636e\u66f4\u65b0\u91cf\u8fbe\u5230 (100 - table_stats_health_threshold)% \uff0c\u8ba4\u4e3a\u8be5\u8868\u7684\u7edf\u8ba1\u4fe1\u606f\u5df2\u8fc7\u65f6"),(0,l.kt)("td",{parentName:"tr",align:null},"80")))),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"\u4f1a\u8bdd\u53d8\u91cf"),(0,l.kt)("th",{parentName:"tr",align:null},"\u8bf4\u660e"),(0,l.kt)("th",{parentName:"tr",align:null},"\u9ed8\u8ba4\u503c"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"full_auto_analyze_start_time"),(0,l.kt)("td",{parentName:"tr",align:null},"\u81ea\u52a8\u7edf\u8ba1\u4fe1\u606f\u6536\u96c6\u5f00\u59cb\u65f6\u95f4"),(0,l.kt)("td",{parentName:"tr",align:null},"00:00:00")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"full_auto_analyze_end_time"),(0,l.kt)("td",{parentName:"tr",align:null},"\u81ea\u52a8\u7edf\u8ba1\u4fe1\u606f\u6536\u96c6\u7ed3\u675f\u65f6\u95f4"),(0,l.kt)("td",{parentName:"tr",align:null},"02:00:00")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"enable_full_auto_analyze"),(0,l.kt)("td",{parentName:"tr",align:null},"\u5f00\u542f\u81ea\u52a8\u6536\u96c6\u529f\u80fd"),(0,l.kt)("td",{parentName:"tr",align:null},"true")))),(0,l.kt)("p",null,"\u6ce8\u610f\uff0c\u5bf9\u4e8efe\u914d\u7f6e\u548c\u5168\u5c40\u4f1a\u8bdd\u53d8\u91cf\u4e2d\u5747\u53ef\u914d\u7f6e\u7684\u53c2\u6570\u90fd\u8bbe\u7f6e\u7684\u60c5\u51b5\u4e0b\uff0c\u4f18\u5148\u4f7f\u7528\u5168\u5c40\u4f1a\u8bdd\u53d8\u91cf\u53c2\u6570\u503c\u3002"),(0,l.kt)("h2",{id:"\u4f7f\u7528\u5efa\u8bae"},"\u4f7f\u7528\u5efa\u8bae"),(0,l.kt)("p",null,"\u6839\u636e\u6211\u4eec\u7684\u6d4b\u8bd5\uff0c\u5728\u6570\u636e\u91cf\uff08\u8fd9\u91cc\u6307\u5b9e\u9645\u5b58\u50a8\u5360\u7528\u7684\u7a7a\u95f4\uff09\u4e3a128GiB\u4ee5\u4e0b\u7684\u8868\u4e0a\uff0c\u9664\u81ea\u52a8\u6536\u96c6\u529f\u80fd\u6267\u884c\u65f6\u95f4\u6bb5\u4e4b\u5916\u65e0\u987b\u6539\u52a8\u9ed8\u8ba4\u914d\u7f6e\u3002"),(0,l.kt)("p",null,"\u4f9d\u636e\u96c6\u7fa4\u914d\u7f6e\u60c5\u51b5\uff0c\u81ea\u52a8\u6536\u96c6\u4efb\u52a1\u901a\u5e38\u4f1a\u5360\u752820%\u5de6\u53f3\u7684CPU\u8d44\u6e90\uff0c\u56e0\u6b64\u7528\u6237\u9700\u8981\u6839\u636e\u81ea\u5df1\u7684\u4e1a\u52a1\u60c5\u51b5\uff0c\u9002\u5f53\u8c03\u6574\u81ea\u52a8\u6536\u96c6\u529f\u80fd\u6267\u884c\u65f6\u95f4\u6bb5\u4ee5\u907f\u5f00\u4e1a\u52a1\u9ad8\u5cf0\u671f\u8d44\u6e90\u62a2\u5360\u3002"),(0,l.kt)("p",null,"\u7531\u4e8eANALYZE\u662f\u8d44\u6e90\u5bc6\u96c6\u578b\u64cd\u4f5c\uff0c\u56e0\u6b64\u6700\u597d\u5c3d\u53ef\u80fd\u4e0d\u8981\u5728\u4e1a\u52a1\u9ad8\u5cf0\u671f\u6267\u884c\u6b64\u7c7b\u64cd\u4f5c\uff0c\u4ece\u800c\u907f\u514d\u5bf9\u4e1a\u52a1\u9020\u6210\u5e72\u6270\uff0c\u96c6\u7fa4\u8d1f\u8f7d\u8f83\u9ad8\u7684\u60c5\u51b5\u4e0b\uff0cANALYZE\u64cd\u4f5c\u4e5f\u66f4\u5bb9\u6613\u5931\u8d25\u3002\u6b64\u5916\uff0c\u57fa\u4e8e\u76f8\u540c\u7684\u539f\u56e0\uff0c\u6211\u4eec\u5efa\u8bae\u7528\u6237\u907f\u514d\u5168\u91cf\u7684ANALYZE\u6574\u5e93\u6574\u8868\u3002\u901a\u5e38\u6765\u8bb2\uff0c\u53ea\u9700\u8981\u5bf9\u7ecf\u5e38\u4f5c\u4e3a\u8c13\u8bcd\u6761\u4ef6\uff0cJOIN\u6761\u4ef6\uff0c\u805a\u5408\u5b57\u6bb5\u4ee5\u53caID\u5b57\u6bb5\u7684\u5217\u8fdb\u884cANALYZE\u5c31\u8db3\u591f\u4e86\u3002\u5982\u679c\u7528\u6237\u63d0\u4ea4\u7684SQL\u6d89\u53ca\u5230\u5927\u91cf\u6b64\u7c7b\u64cd\u4f5c\uff0c\u5e76\u4e14\u8868\u4e0a\u4e5f\u6ca1\u6709\u7edf\u8ba1\u4fe1\u606f\u6216\u8005\u7edf\u8ba1\u4fe1\u606f\u975e\u5e38\u9648\u65e7\uff0c\u90a3\u4e48\u6211\u4eec\u5efa\u8bae\uff1a"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"\u5728\u63d0\u4ea4\u590d\u6742\u67e5\u8be2\u4e4b\u524d\u5148\u5bf9\u6d89\u53ca\u5230\u7684\u8868\u5217\u8fdb\u884cANALYZE\uff0c\u56e0\u4e3a\u89c4\u5212\u4e0d\u5f53\u7684\u590d\u6742\u67e5\u8be2\u5c06\u5360\u7528\u975e\u5e38\u591a\u7684\u7cfb\u7edf\u8d44\u6e90\uff0c\u975e\u8363\u5bb9\u6613\u8d44\u6e90\u8017\u5c3d\u6216\u8d85\u65f6\u800c\u5931\u8d25"),(0,l.kt)("li",{parentName:"ul"},"\u5982\u679c\u7528\u6237\u4e3aDoris\u914d\u7f6e\u4e86\u5468\u671f\u6027\u6570\u636e\u5bfc\u5165\u4f8b\u7a0b\uff0c\u90a3\u4e48\u5efa\u8bae\u5728\u5bfc\u5165\u5b8c\u6bd5\u540e\uff0c\u6267\u884cANALYZE\u4ece\u800c\u4fdd\u8bc1\u540e\u7eed\u67e5\u8be2\u89c4\u5212\u80fd\u591f\u5229\u7528\u5230\u6700\u65b0\u7684\u7edf\u8ba1\u6570\u636e\u3002\u53ef\u4ee5\u5229\u7528Doris\u5df2\u6709\u7684\u4f5c\u4e1a\u8c03\u5ea6\u6846\u67b6\u81ea\u52a8\u5316\u5b8c\u6210\u6b64\u7c7b\u8bbe\u7f6e"),(0,l.kt)("li",{parentName:"ul"},"\u5f53\u8868\u7684\u6570\u636e\u53d1\u751f\u663e\u8457\u53d8\u5316\u540e\uff0c\u6bd4\u5982\u65b0\u5efa\u8868\u5e76\u5b8c\u6210\u6570\u636e\u5bfc\u5165\u540e\uff0cANALYZE\u5bf9\u5e94\u7684\u8868\u3002")),(0,l.kt)("h2",{id:"\u5e38\u89c1\u95ee\u9898"},"\u5e38\u89c1\u95ee\u9898"),(0,l.kt)("h3",{id:"analyze-with-sync-\u6267\u884c\u5931\u8d25failed-to-analyze-following-columns"},"ANALYZE WITH SYNC \u6267\u884c\u5931\u8d25\uff1aFailed to analyze following columns..."),(0,l.kt)("p",null,"SQL\u6267\u884c\u65f6\u95f4\u53d7",(0,l.kt)("inlineCode",{parentName:"p"},"query_timeout"),"\u4f1a\u8bdd\u53d8\u91cf\u63a7\u5236\uff0c\u8be5\u53d8\u91cf\u9ed8\u8ba4\u503c\u4e3a300\u79d2\uff0c",(0,l.kt)("inlineCode",{parentName:"p"},"ANALYZE DATABASE/TABLE"),"\u7b49\u8bed\u53e5\u901a\u5e38\u8017\u65f6\u8f83\u5927\uff0c\u5f88\u5bb9\u6613\u8d85\u8fc7\u8be5\u65f6\u95f4\u9650\u5236\u800c\u88abcancel\uff0c\u5efa\u8bae\u6839\u636eANALYZE\u5bf9\u8c61\u7684\u6570\u636e\u91cf\u9002\u5f53\u589e\u5927",(0,l.kt)("inlineCode",{parentName:"p"},"query_timeout"),"\u7684\u503c\u3002"),(0,l.kt)("h3",{id:"analyze\u63d0\u4ea4\u62a5\u9519stats-table-not-available"},"ANALYZE\u63d0\u4ea4\u62a5\u9519\uff1aStats table not available..."),(0,l.kt)("p",null,"\u6267\u884cANALYZE\u65f6\u7edf\u8ba1\u6570\u636e\u4f1a\u88ab\u5199\u5165\u5230\u5185\u90e8\u8868",(0,l.kt)("inlineCode",{parentName:"p"},"__internal_schema.column_statistics"),"\u4e2d\uff0cFE\u4f1a\u5728\u6267\u884cANALYZE\u524d\u68c0\u67e5\u8be5\u8868tablet\u72b6\u6001\uff0c\u5982\u679c\u5b58\u5728\u4e0d\u53ef\u7528\u7684tablet\u5219\u62d2\u7edd\u6267\u884c\u4efb\u52a1\u3002\u51fa\u73b0\u8be5\u62a5\u9519\u8bf7\u68c0\u67e5BE\u96c6\u7fa4\u72b6\u6001\u3002"),(0,l.kt)("h3",{id:"\u5927\u8868analyze\u5931\u8d25"},"\u5927\u8868ANALYZE\u5931\u8d25"),(0,l.kt)("p",null,"\u7531\u4e8eANALYZE\u80fd\u591f\u4f7f\u7528\u7684\u8d44\u6e90\u53d7\u5230\u6bd4\u8f83\u4e25\u683c\u7684\u9650\u5236\uff0c\u5bf9\u4e00\u4e9b\u5927\u8868\u7684ANALYZE\u64cd\u4f5c\u6709\u53ef\u80fd\u8d85\u65f6\u6216\u8005\u8d85\u51faBE\u5185\u5b58\u9650\u5236\u3002\u8fd9\u4e9b\u60c5\u51b5\u4e0b\uff0c\u5efa\u8bae\u4f7f\u7528 ",(0,l.kt)("inlineCode",{parentName:"p"},"ANALYZE ... WITH SAMPLE..."),"\u3002"))}o.isMDXComponent=!0}}]);