"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([[18563],{3905:(e,t,a)=>{a.d(t,{Zo:()=>u,kt:()=>d});var r=a(67294);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function p(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},o=Object.keys(e);for(r=0;r<o.length;r++)a=o[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)a=o[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var l=r.createContext({}),s=function(e){var t=r.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},u=function(e){var t=s(e.components);return r.createElement(l.Provider,{value:t},e.children)},m="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},h=r.forwardRef((function(e,t){var a=e.components,n=e.mdxType,o=e.originalType,l=e.parentName,u=p(e,["components","mdxType","originalType","parentName"]),m=s(a),h=n,d=m["".concat(l,".").concat(h)]||m[h]||c[h]||o;return a?r.createElement(d,i(i({ref:t},u),{},{components:a})):r.createElement(d,i({ref:t},u))}));function d(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=a.length,i=new Array(o);i[0]=h;var p={};for(var l in t)hasOwnProperty.call(t,l)&&(p[l]=t[l]);p.originalType=e,p[m]="string"==typeof e?e:n,i[1]=p;for(var s=2;s<o;s++)i[s]=a[s];return r.createElement.apply(null,i)}return r.createElement.apply(null,a)}h.displayName="MDXCreateElement"},78793:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>c,frontMatter:()=>o,metadata:()=>p,toc:()=>s});var r=a(87462),n=(a(67294),a(3905));const o={title:"Apache Doris announced the official release of version 1.1.3",summary:"Dear community, Apache Doris team has fixed more than 80 issues or performance improvements in version 1.1.3 compared to previous verisons",date:"2022-10-17",author:"Apache Doris",tags:["Release Notes"],image:"/images/release-notes.png"},i=void 0,p={permalink:"/blog/release-note-1.1.3",source:"@site/blog/release-note-1.1.3.md",title:"Apache Doris announced the official release of version 1.1.3",description:"\x3c!--",date:"2022-10-17T00:00:00.000Z",formattedDate:"October 17, 2022",tags:[{label:"Release Notes",permalink:"/blog/tags/release-notes"}],hasTruncateMarker:!1,authors:[{name:"Apache Doris"}],frontMatter:{title:"Apache Doris announced the official release of version 1.1.3",summary:"Dear community, Apache Doris team has fixed more than 80 issues or performance improvements in version 1.1.3 compared to previous verisons",date:"2022-10-17",author:"Apache Doris",tags:["Release Notes"],image:"/images/release-notes.png"},prevItem:{title:"Apache Doris announced the official release of version 1.1.4",permalink:"/blog/release-note-1.1.4"},nextItem:{title:"Apache Doris announced the official release of version 1.1.1",permalink:"/blog/release-note-1.1.1"}},l={authorsImageUrls:[void 0]},s=[{value:"Features",id:"features",level:2},{value:"Improvements",id:"improvements",level:2},{value:"Bug Fixes",id:"bug-fixes",level:2},{value:"Upgrade Notes",id:"upgrade-notes",level:2}],u={toc:s},m="wrapper";function c(e){let{components:t,...a}=e;return(0,n.kt)(m,(0,r.Z)({},u,a,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("p",null,"In this release, Doris Team has fixed more than 80 issues or performance improvement since 1.1.2. This release is a bugfix release on 1.1 and all users are encouraged to upgrade to this release."),(0,n.kt)("h2",{id:"features"},"Features"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"Support escape identifiers for sqlserver and postgresql in ODBC table.")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"Could use Parquet as output file format."))),(0,n.kt)("h2",{id:"improvements"},"Improvements"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"Optimize flush policy to avoid small segments. ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/apache/doris/pull/12706"},"#12706")," ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/apache/doris/pull/12716"},"#12716"))),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"Refactor runtime filter to reduce the prepare time. ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/apache/doris/pull/13127"},"#13127"))),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"Lots of memory control related issues during query or load process. ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/apache/doris/pull/12682"},"#12682")," ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/apache/doris/pull/12688"},"#12688")," ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/apache/doris/pull/12708"},"#12708")," ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/apache/doris/pull/12776"},"#12776")," ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/apache/doris/pull/12782"},"#12782")," ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/apache/doris/pull/12791"},"#12791")," ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/apache/doris/pull/12794"},"#12794")," ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/apache/doris/pull/12820"},"#12820")," ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/apache/doris/pull/12932"},"#12932")," ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/apache/doris/pull/12954"},"#12954")," ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/apache/doris/pull/12951"},"#12951")))),(0,n.kt)("h2",{id:"bug-fixes"},"Bug Fixes"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"Core dump on compaction with largeint. ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/apache/doris/pull/10094"},"#10094"))),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"Grouping sets cause be core or return wrong results. ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/apache/doris/pull/12313"},"#12313"))),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"PREAGGREGATION flag in orthogonal_bitmap_union_count operator is wrong. ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/apache/doris/pull/12581"},"#12581"))),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"Level1Iterator should release iterators in heap and it may cause memory leak. ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/apache/doris/pull/12592"},"#12592"))),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"Fix decommission failure with 2 BEs and existing colocation table. ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/apache/doris/pull/12644"},"#12644"))),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"BE may core dump because of stack-buffer-overflow when TBrokerOpenReaderResponse too large. ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/apache/doris/pull/12658"},"#12658"))),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"BE may OOM during load when error code -238 occurs. ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/apache/doris/pull/12666"},"#12666"))),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"Fix wrong child expression of lead function. ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/apache/doris/pull/12587"},"#12587"))),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"Fix intersect query failed in row storage code. ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/apache/doris/pull/12712"},"#12712"))),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"Fix wrong result produced by curdate()/current_date() function. ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/apache/doris/pull/12720"},"#12720"))),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"Fix lateral view explode_split with temp table bug. ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/apache/doris/pull/13643"},"#13643"))),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"Bucket shuffle join plan is wrong in two same table. ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/apache/doris/pull/12930"},"#12930"))),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"Fix bug that tablet version may be wrong when doing alter and load. ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/apache/doris/pull/13070"},"#13070"))),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"BE core when load data using broker with md5sum()/sm3sum(). ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/apache/doris/pull/13009"},"#13009")))),(0,n.kt)("h2",{id:"upgrade-notes"},"Upgrade Notes"),(0,n.kt)("p",null,"PageCache and ChunkAllocator are disabled by default to reduce memory usage and can be re-enabled by modifying the configuration items ",(0,n.kt)("inlineCode",{parentName:"p"},"disable_storage_page_cache")," and ",(0,n.kt)("inlineCode",{parentName:"p"},"chunk_reserved_bytes_limit"),"."),(0,n.kt)("p",null,"Storage Page Cache and Chunk Allocator cache user data chunks and memory preallocation, respectively."),(0,n.kt)("p",null,"These two functions take up a certain percentage of memory and are not freed. This part of memory cannot be flexibly allocated, which may lead to insufficient memory for other tasks in some scenarios, affecting system stability and availability. Therefore, we disabled these two features by default in version 1.1.3."),(0,n.kt)("p",null,"However, in some latency-sensitive reporting scenarios, turning off this feature may lead to increased query latency. If you are worried about the impact of this feature on your business after upgrade, you can add the following parameters to be.conf to keep the same behavior as the previous version."),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre"},"disable_storage_page_cache=false\nchunk_reserved_bytes_limit=10%\n")),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"disable_storage_page_cache"),": Whether to disable Storage Page Cache. version 1.1.2 (inclusive), the default is false, i.e., on. version 1.1.3 defaults to true, i.e., off."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"chunk_reserved_bytes_limit"),": Chunk allocator reserved memory size. 1.1.2 (and earlier), the default is 10% of the overall memory. 1.1.3 version default is 209715200 (200MB).")))}c.isMDXComponent=!0}}]);