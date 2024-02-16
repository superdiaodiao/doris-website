"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([[75149],{15680:(e,t,r)=>{r.d(t,{xA:()=>c,yg:()=>g});var a=r(96540);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function n(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?n(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):n(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,a,o=function(e,t){if(null==e)return{};var r,a,o={},n=Object.keys(e);for(a=0;a<n.length;a++)r=n[a],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(a=0;a<n.length;a++)r=n[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var l=a.createContext({}),p=function(e){var t=a.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},c=function(e){var t=p(e.components);return a.createElement(l.Provider,{value:t},e.children)},u="mdxType",h={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var r=e.components,o=e.mdxType,n=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),u=p(r),m=o,g=u["".concat(l,".").concat(m)]||u[m]||h[m]||n;return r?a.createElement(g,i(i({ref:t},c),{},{components:r})):a.createElement(g,i({ref:t},c))}));function g(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var n=r.length,i=new Array(n);i[0]=m;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[u]="string"==typeof e?e:o,i[1]=s;for(var p=2;p<n;p++)i[p]=r[p];return a.createElement.apply(null,i)}return a.createElement.apply(null,r)}m.displayName="MDXCreateElement"},38566:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>h,frontMatter:()=>n,metadata:()=>s,toc:()=>p});var a=r(58168),o=(r(96540),r(15680));const n={title:"Apache Doris announced the official release of version 1.1.5",summary:"Dear community, Apache Doris team has fixed about 36 issues or performance improvements in version 1.1.5 compared to previous version.",date:"2022-12-19",author:"Apache Doris",tags:["Release Notes"],image:"/images/release-notes.png"},i=void 0,s={permalink:"/blog/release-note-1.1.5",source:"@site/blog/release-note-1.1.5.md",title:"Apache Doris announced the official release of version 1.1.5",description:"\x3c!--",date:"2022-12-19T00:00:00.000Z",formattedDate:"December 19, 2022",tags:[{label:"Release Notes",permalink:"/blog/tags/release-notes"}],hasTruncateMarker:!1,authors:[{name:"Apache Doris"}],frontMatter:{title:"Apache Doris announced the official release of version 1.1.5",summary:"Dear community, Apache Doris team has fixed about 36 issues or performance improvements in version 1.1.5 compared to previous version.",date:"2022-12-19",author:"Apache Doris",tags:["Release Notes"],image:"/images/release-notes.png"},prevItem:{title:'The Efficiency of the data warehouse greatly improved in LY Digital"',permalink:"/blog/LY"},nextItem:{title:"Best practice in Kwai: Apache Doris on Elasticsearch",permalink:"/blog/BestPractice_Kwai"}},l={authorsImageUrls:[void 0]},p=[],c={toc:p},u="wrapper";function h(e){let{components:t,...r}=e;return(0,o.yg)(u,(0,a.A)({},c,r,{components:t,mdxType:"MDXLayout"}),(0,o.yg)("p",null,"In this release, Doris Team has fixed about 36 issues or performance improvement since 1.1.4. This release is a bugfix release on 1.1 and all users are encouraged to upgrade to this release."),(0,o.yg)("h1",{id:"behavior-changes"},"Behavior Changes"),(0,o.yg)("p",null,"When alias name is same as the original column name like \"select year(birthday) as birthday\" and use it in group by, order by , having clause, doris's behavior is different from MySQL in the past. In this release, we make it follow MySQL's behavior. Group by and having clause will use original column at first and order by will use alias first. It maybe a litter confuse here so there is a simple advice here, you'd better not use an alias the same as original column name."),(0,o.yg)("h1",{id:"features"},"Features"),(0,o.yg)("p",null,"Add support of murmur_hash3_64. ",(0,o.yg)("a",{parentName:"p",href:"https://github.com/apache/doris/pull/14636"},"#14636")),(0,o.yg)("h1",{id:"improvements"},"Improvements"),(0,o.yg)("p",null,"Add timezone cache for convert_tz to improve performance. ",(0,o.yg)("a",{parentName:"p",href:"https://github.com/apache/doris/pull/14616"},"#14616")),(0,o.yg)("p",null,"Sort result by tablename when call show clause. ",(0,o.yg)("a",{parentName:"p",href:"https://github.com/apache/doris/pull/14492"},"#14492")),(0,o.yg)("h1",{id:"bug-fix"},"Bug Fix"),(0,o.yg)("p",null,"Fix coredump when there is a if constant expr in select clause.  ",(0,o.yg)("a",{parentName:"p",href:"https://github.com/apache/doris/pull/14858"},"#14858")),(0,o.yg)("p",null,"ColumnVector::insert_date_column may crashed. ",(0,o.yg)("a",{parentName:"p",href:"https://github.com/apache/doris/pull/14839"},"#14839")),(0,o.yg)("p",null,"Update high_priority_flush_thread_num_per_store default value to 6 and it will improve the load performance. ",(0,o.yg)("a",{parentName:"p",href:"https://github.com/apache/doris/pull/14775"},"#14775")),(0,o.yg)("p",null,"Fix quick compaction core.  ",(0,o.yg)("a",{parentName:"p",href:"https://github.com/apache/doris/pull/14731"},"#14731")),(0,o.yg)("p",null,"Partition column is not duplicate key, spark load will throw IndexOutOfBounds error. ",(0,o.yg)("a",{parentName:"p",href:"https://github.com/apache/doris/pull/14661"},"#14661")),(0,o.yg)("p",null,"Fix a memory leak problem in VCollectorIterator. ",(0,o.yg)("a",{parentName:"p",href:"https://github.com/apache/doris/pull/14549"},"#14549")),(0,o.yg)("p",null,"Fix create table like when having sequence column. ",(0,o.yg)("a",{parentName:"p",href:"https://github.com/apache/doris/pull/14511"},"#14511")),(0,o.yg)("p",null,"Using avg rowset to calculate batch size instead of using total_bytes since it costs a lot of cpu. ",(0,o.yg)("a",{parentName:"p",href:"https://github.com/apache/doris/pull/14273"},"#14273")),(0,o.yg)("p",null,"Fix right outer join core with conjunct. ",(0,o.yg)("a",{parentName:"p",href:"https://github.com/apache/doris/pull/14821"},"#14821")),(0,o.yg)("p",null,"Optimize policy of tcmalloc gc.  ",(0,o.yg)("a",{parentName:"p",href:"https://github.com/apache/doris/pull/14777"},"#14777")," ",(0,o.yg)("a",{parentName:"p",href:"https://github.com/apache/doris/pull/14738"},"#14738")," ",(0,o.yg)("a",{parentName:"p",href:"https://github.com/apache/doris/pull/14374"},"#14374")))}h.isMDXComponent=!0}}]);