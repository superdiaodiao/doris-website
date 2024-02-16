"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([[56853],{15680:(e,r,a)=>{a.d(r,{xA:()=>c,yg:()=>h});var t=a(96540);function i(e,r,a){return r in e?Object.defineProperty(e,r,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[r]=a,e}function o(e,r){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);r&&(t=t.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),a.push.apply(a,t)}return a}function n(e){for(var r=1;r<arguments.length;r++){var a=null!=arguments[r]?arguments[r]:{};r%2?o(Object(a),!0).forEach((function(r){i(e,r,a[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(a,r))}))}return e}function l(e,r){if(null==e)return{};var a,t,i=function(e,r){if(null==e)return{};var a,t,i={},o=Object.keys(e);for(t=0;t<o.length;t++)a=o[t],r.indexOf(a)>=0||(i[a]=e[a]);return i}(e,r);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(t=0;t<o.length;t++)a=o[t],r.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(i[a]=e[a])}return i}var s=t.createContext({}),p=function(e){var r=t.useContext(s),a=r;return e&&(a="function"==typeof e?e(r):n(n({},r),e)),a},c=function(e){var r=p(e.components);return t.createElement(s.Provider,{value:r},e.children)},u="mdxType",m={inlineCode:"code",wrapper:function(e){var r=e.children;return t.createElement(t.Fragment,{},r)}},d=t.forwardRef((function(e,r){var a=e.components,i=e.mdxType,o=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),u=p(a),d=i,h=u["".concat(s,".").concat(d)]||u[d]||m[d]||o;return a?t.createElement(h,n(n({ref:r},c),{},{components:a})):t.createElement(h,n({ref:r},c))}));function h(e,r){var a=arguments,i=r&&r.mdxType;if("string"==typeof e||i){var o=a.length,n=new Array(o);n[0]=d;var l={};for(var s in r)hasOwnProperty.call(r,s)&&(l[s]=r[s]);l.originalType=e,l[u]="string"==typeof e?e:i,n[1]=l;for(var p=2;p<o;p++)n[p]=a[p];return t.createElement.apply(null,n)}return t.createElement.apply(null,a)}d.displayName="MDXCreateElement"},95788:(e,r,a)=>{a.r(r),a.d(r,{assets:()=>s,contentTitle:()=>n,default:()=>m,frontMatter:()=>o,metadata:()=>l,toc:()=>p});var t=a(58168),i=(a(96540),a(15680));const o={title:"Apache Doris announced the official release of version 1.1.2",summary:"Dear community, Apache Doris team has fixed more than 170 issues or performance improvements in version 1.1.2 compared to previous verisons",date:"2022-09-13",author:"Apache Doris",tags:["Release Notes"],image:"/images/release-notes.png"},n=void 0,l={permalink:"/zh-CN/blog/release-note-1.1.2",source:"@site/blog/release-note-1.1.2.md",title:"Apache Doris announced the official release of version 1.1.2",description:"\x3c!--",date:"2022-09-13T00:00:00.000Z",formattedDate:"2022\u5e749\u670813\u65e5",tags:[{label:"Release Notes",permalink:"/zh-CN/blog/tags/release-notes"}],hasTruncateMarker:!1,authors:[{name:"Apache Doris"}],frontMatter:{title:"Apache Doris announced the official release of version 1.1.2",summary:"Dear community, Apache Doris team has fixed more than 170 issues or performance improvements in version 1.1.2 compared to previous verisons",date:"2022-09-13",author:"Apache Doris",tags:["Release Notes"],image:"/images/release-notes.png"},prevItem:{title:"Apache Doris announced the official release of version 1.1.1",permalink:"/zh-CN/blog/release-note-1.1.1"},nextItem:{title:"Doris stream load principle analysis",permalink:"/zh-CN/blog/principle-of-Doris-Stream-Load"}},s={authorsImageUrls:[void 0]},p=[{value:"Features",id:"features",level:2},{value:"New MemTracker",id:"new-memtracker",level:3},{value:"Add API for showing current queries and kill query",id:"add-api-for-showing-current-queries-and-kill-query",level:3},{value:"Support read/write emoji of UTF16 via ODBC Table",id:"support-readwrite-emoji-of-utf16-via-odbc-table",level:3},{value:"Improvements",id:"improvements",level:2},{value:"Data Lake related improvements",id:"data-lake-related-improvements",level:3},{value:"Add support for string and text type in Spark Load",id:"add-support-for-string-and-text-type-in-spark-load",level:3},{value:"Add reuse block in non-vectorized engine and have 50% performance improvement in some cases. #11392",id:"add-reuse-block-in-non-vectorized-engine-and-have-50-performance-improvement-in-some-cases-11392",level:3},{value:"Improve like or regex performance",id:"improve-like-or-regex-performance",level:3},{value:"Disable tcmalloc&#39;s aggressive_memory_decommit",id:"disable-tcmallocs-aggressive_memory_decommit",level:3},{value:"Bug Fixes",id:"bug-fixes",level:2},{value:"Some issues about FE that will cause FE failure or data corrupt.",id:"some-issues-about-fe-that-will-cause-fe-failure-or-data-corrupt",level:3},{value:"Fe will hang on waitFor_rpc during query and BE will hang in high concurrent scenarios.",id:"fe-will-hang-on-waitfor_rpc-during-query-and-be-will-hang-in-high-concurrent-scenarios",level:3},{value:"A fatal issue in vectorized storage engine which will cause wrong result. <strong>(Serious)</strong>",id:"a-fatal-issue-in-vectorized-storage-engine-which-will-cause-wrong-result-serious",level:3},{value:"Lots of planner related issues that will cause BE core or in abnormal state.",id:"lots-of-planner-related-issues-that-will-cause-be-core-or-in-abnormal-state",level:3}],c={toc:p},u="wrapper";function m(e){let{components:r,...a}=e;return(0,i.yg)(u,(0,t.A)({},c,a,{components:r,mdxType:"MDXLayout"}),(0,i.yg)("p",null,"In this release, Doris Team has fixed more than 170 issues or performance improvement since 1.1.1. This release is a bugfix release on 1.1 and all users are encouraged to upgrade to this release."),(0,i.yg)("h2",{id:"features"},"Features"),(0,i.yg)("h3",{id:"new-memtracker"},"New MemTracker"),(0,i.yg)("p",null,"Introduced new MemTracker for both vectorized engine and non-vectorized engine which is more accurate."),(0,i.yg)("h3",{id:"add-api-for-showing-current-queries-and-kill-query"},"Add API for showing current queries and kill query"),(0,i.yg)("h3",{id:"support-readwrite-emoji-of-utf16-via-odbc-table"},"Support read/write emoji of UTF16 via ODBC Table"),(0,i.yg)("h2",{id:"improvements"},"Improvements"),(0,i.yg)("h3",{id:"data-lake-related-improvements"},"Data Lake related improvements"),(0,i.yg)("ul",null,(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("p",{parentName:"li"},"Improved HDFS ORC File scan performance about 300%. ",(0,i.yg)("a",{parentName:"p",href:"https://github.com/apache/doris/pull/11501"},"#11501"))),(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("p",{parentName:"li"},"Support HDFS HA mode when query Iceberg table.")),(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("p",{parentName:"li"},"Support query Hive data created by ",(0,i.yg)("a",{parentName:"p",href:"https://tez.apache.org/"},"Apache Tez"))),(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("p",{parentName:"li"},"Add Ali OSS as Hive external support."))),(0,i.yg)("h3",{id:"add-support-for-string-and-text-type-in-spark-load"},"Add support for string and text type in Spark Load"),(0,i.yg)("h3",{id:"add-reuse-block-in-non-vectorized-engine-and-have-50-performance-improvement-in-some-cases-11392"},"Add reuse block in non-vectorized engine and have 50% performance improvement in some cases. ",(0,i.yg)("a",{parentName:"h3",href:"https://github.com/apache/doris/pull/11392"},"#11392")),(0,i.yg)("h3",{id:"improve-like-or-regex-performance"},"Improve like or regex performance"),(0,i.yg)("h3",{id:"disable-tcmallocs-aggressive_memory_decommit"},"Disable tcmalloc's aggressive_memory_decommit"),(0,i.yg)("p",null,"It will have 40% performance gains in load or query."),(0,i.yg)("p",null,"Currently it is a config, you can change it by set config ",(0,i.yg)("inlineCode",{parentName:"p"},"tc_enable_aggressive_memory_decommit"),"."),(0,i.yg)("h2",{id:"bug-fixes"},"Bug Fixes"),(0,i.yg)("h3",{id:"some-issues-about-fe-that-will-cause-fe-failure-or-data-corrupt"},"Some issues about FE that will cause FE failure or data corrupt."),(0,i.yg)("ul",null,(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("p",{parentName:"li"},"Add reserved disk config to avoid too many reserved BDB-JE files.",(0,i.yg)("strong",{parentName:"p"},"(Serious)"),"   In an HA environment, BDB JE will retains as many reserved files. The BDB-je log doesn't delete until approaching a disk limit.")),(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("p",{parentName:"li"},"Fix fatal bug in BDB-JE which will cause FE replica could not start correctly or data corrupted.",(0,i.yg)("strong",{parentName:"p"}," (Serious)")))),(0,i.yg)("h3",{id:"fe-will-hang-on-waitfor_rpc-during-query-and-be-will-hang-in-high-concurrent-scenarios"},"Fe will hang on waitFor_rpc during query and BE will hang in high concurrent scenarios."),(0,i.yg)("p",null,(0,i.yg)("a",{parentName:"p",href:"https://github.com/apache/doris/pull/12459"},"#12459")," ",(0,i.yg)("a",{parentName:"p",href:"https://github.com/apache/doris/pull/12458"},"#12458")," ",(0,i.yg)("a",{parentName:"p",href:"https://github.com/apache/doris/pull/12392"},"#12392")),(0,i.yg)("h3",{id:"a-fatal-issue-in-vectorized-storage-engine-which-will-cause-wrong-result-serious"},"A fatal issue in vectorized storage engine which will cause wrong result. ",(0,i.yg)("strong",{parentName:"h3"},"(Serious)")),(0,i.yg)("p",null,(0,i.yg)("a",{parentName:"p",href:"https://github.com/apache/doris/pull/11754"},"#11754")," ",(0,i.yg)("a",{parentName:"p",href:"https://github.com/apache/doris/pull/11694"},"#11694")),(0,i.yg)("h3",{id:"lots-of-planner-related-issues-that-will-cause-be-core-or-in-abnormal-state"},"Lots of planner related issues that will cause BE core or in abnormal state."),(0,i.yg)("p",null,(0,i.yg)("a",{parentName:"p",href:"https://github.com/apache/doris/pull/12080"},"#12080")," ",(0,i.yg)("a",{parentName:"p",href:"https://github.com/apache/doris/pull/12075"},"#12075")," ",(0,i.yg)("a",{parentName:"p",href:"https://github.com/apache/doris/pull/12040"},"#12040")," ",(0,i.yg)("a",{parentName:"p",href:"https://github.com/apache/doris/pull/12003"},"#12003")," ",(0,i.yg)("a",{parentName:"p",href:"https://github.com/apache/doris/pull/12007"},"#12007")," ",(0,i.yg)("a",{parentName:"p",href:"https://github.com/apache/doris/pull/11971"},"#11971")," ",(0,i.yg)("a",{parentName:"p",href:"https://github.com/apache/doris/pull/11933"},"#11933")," ",(0,i.yg)("a",{parentName:"p",href:"https://github.com/apache/doris/pull/11861"},"#11861")," ",(0,i.yg)("a",{parentName:"p",href:"https://github.com/apache/doris/pull/11859"},"#11859")," ",(0,i.yg)("a",{parentName:"p",href:"https://github.com/apache/doris/pull/11855"},"#11855")," ",(0,i.yg)("a",{parentName:"p",href:"https://github.com/apache/doris/pull/11837"},"#11837")," ",(0,i.yg)("a",{parentName:"p",href:"https://github.com/apache/doris/pull/11834"},"#11834")," ",(0,i.yg)("a",{parentName:"p",href:"https://github.com/apache/doris/pull/11821"},"#11821")," ",(0,i.yg)("a",{parentName:"p",href:"https://github.com/apache/doris/pull/11782"},"#11782")," ",(0,i.yg)("a",{parentName:"p",href:"https://github.com/apache/doris/pull/11723"},"#11723")," ",(0,i.yg)("a",{parentName:"p",href:"https://github.com/apache/doris/pull/11569"},"#11569")))}m.isMDXComponent=!0}}]);