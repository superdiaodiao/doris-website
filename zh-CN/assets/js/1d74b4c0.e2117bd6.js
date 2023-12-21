"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([[5104],{3905:(e,t,a)=>{a.d(t,{Zo:()=>u,kt:()=>p});var n=a(67294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},i=Object.keys(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var c=n.createContext({}),l=function(e){var t=n.useContext(c),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},u=function(e){var t=l(e.components);return n.createElement(c.Provider,{value:t},e.children)},d="mdxType",h={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,i=e.originalType,c=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),d=l(a),m=r,p=d["".concat(c,".").concat(m)]||d[m]||h[m]||i;return a?n.createElement(p,o(o({ref:t},u),{},{components:a})):n.createElement(p,o({ref:t},u))}));function p(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=a.length,o=new Array(i);o[0]=m;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s[d]="string"==typeof e?e:r,o[1]=s;for(var l=2;l<i;l++)o[l]=a[l];return n.createElement.apply(null,o)}return n.createElement.apply(null,a)}m.displayName="MDXCreateElement"},21033:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>c,contentTitle:()=>o,default:()=>h,frontMatter:()=>i,metadata:()=>s,toc:()=>l});var n=a(87462),r=(a(67294),a(3905));const i={title:"Database in fintech: how to support 10,000 dashboards without causing a mess",summary:"This article introduces the lifecycle of financial metrics in a database, from how they're produced to how they're efficiently presented in data reports.",date:"2023-08-05",author:"Hou Lan",tags:["Best Practice"],image:"/images/best-practice.png"},o=void 0,s={permalink:"/zh-CN/blog/Database-in-Fintech-How-to-Support-ten-thousand-Dashboards-Without-Causing-a-Mess",source:"@site/blog/Database-in-Fintech-How-to-Support-ten-thousand-Dashboards-Without-Causing-a-Mess.md",title:"Database in fintech: how to support 10,000 dashboards without causing a mess",description:"\x3c!--",date:"2023-08-05T00:00:00.000Z",formattedDate:"2023\u5e748\u67085\u65e5",tags:[{label:"Best Practice",permalink:"/zh-CN/blog/tags/best-practice"}],hasTruncateMarker:!1,authors:[{name:"Hou Lan"}],frontMatter:{title:"Database in fintech: how to support 10,000 dashboards without causing a mess",summary:"This article introduces the lifecycle of financial metrics in a database, from how they're produced to how they're efficiently presented in data reports.",date:"2023-08-05",author:"Hou Lan",tags:["Best Practice"],image:"/images/best-practice.png"},prevItem:{title:"New milestone: Apache Doris 2.0.0 just released",permalink:"/zh-CN/blog/release-note-2.0.0"},nextItem:{title:"For entry-level data engineers: how to build a simple but solid data architecture",permalink:"/zh-CN/blog/For-Entry-Level-Data-Engineers-How-to-Build-a-Simple-but-Solid-Data-Architecture"}},c={authorsImageUrls:[void 0]},l=[{value:"Define New Metrics &amp; Add Them to Your Database",id:"define-new-metrics--add-them-to-your-database",level:2},{value:"Calculate Your Metrics",id:"calculate-your-metrics",level:2},{value:"Enable SQL Caching to Reduce Resource Consumption",id:"enable-sql-caching-to-reduce-resource-consumption",level:2},{value:"Conclusion",id:"conclusion",level:2}],u={toc:l},d="wrapper";function h(e){let{components:t,...i}=e;return(0,r.kt)(d,(0,n.Z)({},u,i,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"In a data-intensive industry like finance, data comes from numerous entries and goes to numerous exits. Such status quo can easily, and almost inevitably, lead to chaos in data analysis and management. For example, analysts from different business lines define their own financial metrics in data reports. When you pool these countless reports together in your data architecture, you will find that many metrics overlap or even contradict each other in definition. The consequence is, developing a simple data report will require lots of clarification back and forth, making the process more complicated and time-consuming than it should be."),(0,r.kt)("p",null,'As your business grows, your data management will arrive at a point when "standardization" is needed. In terms of data engineering, that means you need a data platform where you can produce and manage all metrics. That\'s your architectural prerequisite to provide efficient financial services. '),(0,r.kt)("p",null,"This article introduces the lifecycle of financial metrics in a database (in this case, ",(0,r.kt)("a",{parentName:"p",href:"https://doris.apache.org/"},"Apache Doris"),"), from how they're produced to how they're efficiently presented in data reports. You will get an inside view of what's behind those fancy financial dashboards. "),(0,r.kt)("h2",{id:"define-new-metrics--add-them-to-your-database"},"Define New Metrics & Add Them to Your Database"),(0,r.kt)("p",null,"Fundamentally, metrics are fields in a table. To provide a more concrete idea of them, I will explain with an example in the banking industry. "),(0,r.kt)("p",null,"Banks measure the assets of customers by AUM (Assets Under Management). In this scenario, AUM is an ",(0,r.kt)("strong",{parentName:"p"},"atomic metric"),", which is often a field in the source data table. On the basis of AUM, analysts derive a series of ",(0,r.kt)("strong",{parentName:"p"},"derivative metrics"),', such as "year-on-year AUM growth", "month-on-month AUM growth", and "AUM per customer".'),(0,r.kt)("p",null,"Once you define the new metrics, you add them to your data reports, which involves a few simple configurations in Apache Doris:"),(0,r.kt)("p",null,"Developers update the metadata accordingly, register the base table where the metrics are derived, configure the data granularity and update frequency of intermediate tables, and input the metric name and definition. Some engineers will also monitor the metrics to identify abnormalities and remove redundant metrics based on a metric evaluation system."),(0,r.kt)("p",null,"When the metrics are soundly put in place, you can ingest new data into your database to get your data reports. For example, if you ingest CSV files, we recommend the Stream Load method of Apache Doris and a file size of 1~10G per batch. Eventually, these metrics will be visualized in data charts. "),(0,r.kt)("h2",{id:"calculate-your-metrics"},"Calculate Your Metrics"),(0,r.kt)("p",null,"As is mentioned, some metrics are produced by combining multiple fields in the source table. In data engineering, that is a multi-table join query. Based on the optimization experience of an Apache Doris user, we recommend flat tables instead of Star/Snowflake Schema. The user reduced the query response time on tables of 100 million rows ",(0,r.kt)("strong",{parentName:"p"},"from 5s to 63ms")," after such a change."),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"join-queries",src:a(53850).Z,width:"1280",height:"642"})),(0,r.kt)("p",null,"The flat table solution also eliminates jitter."),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"reduced-jitter",src:a(48035).Z,width:"1280",height:"283"})),(0,r.kt)("h2",{id:"enable-sql-caching-to-reduce-resource-consumption"},"Enable SQL Caching to Reduce Resource Consumption"),(0,r.kt)("p",null,"Analysts often check data reports of the same metrics on a regular basis. These reports are produced by the same SQL, so one way to further improve query speed is SQL caching. Here is how it turns out in a use case with SQL caching enabled."),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"All queries are responded within 10ms;"),(0,r.kt)("li",{parentName:"ul"},"When computing 30 metrics simultaneously (over 120 SQL commands), results can be returned within 600ms;"),(0,r.kt)("li",{parentName:"ul"},"A TPS (Transactions Per Second) of 300 is reached, with CPU, memory, disk, and I/O usage under 80%;"),(0,r.kt)("li",{parentName:"ul"},"Under the recommended cluster size, over 10,000 metrics can be cached, which means you can save a lot of computation resources.")),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"reduced-computation-resources",src:a(10141).Z,width:"1280",height:"1212"})),(0,r.kt)("h2",{id:"conclusion"},"Conclusion"),(0,r.kt)("p",null,"The complexity of data analysis in the financial industry lies in the data itself other than the engineering side. Thus, the underlying data architecture should focus on facilitating the unified and efficient management of data. Apache Doris provides the flexibility of simple metric registration and the ability of fast and resource-efficient metric computation. In this case, the user is able to handle 10,000 active financial metrics in 10,000 dashboards with 30% less ETL efforts."),(0,r.kt)("p",null,"Find Apache Doris developers on ",(0,r.kt)("a",{parentName:"p",href:"https://join.slack.com/t/apachedoriscommunity/shared_invite/zt-1t3wfymur-0soNPATWQ~gbU8xutFOLog"},"Slack"),"."))}h.isMDXComponent=!0},53850:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/Pingan_1-ca53619302ca8b80b8fdb1c73a5c39c9.png"},48035:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/Pingan_2-325bffe3684325c0fd1970d82aadf4ff.png"},10141:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/Pingan_3-6f36c1669284dcc3672824c3fa772c55.png"}}]);