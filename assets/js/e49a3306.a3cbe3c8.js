"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([[17854],{15680:(e,t,r)=>{r.d(t,{xA:()=>c,yg:()=>g});var a=r(96540);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},o=Object.keys(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var s=a.createContext({}),p=function(e){var t=a.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},c=function(e){var t=p(e.components);return a.createElement(s.Provider,{value:t},e.children)},u="mdxType",h={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,o=e.originalType,s=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),u=p(r),m=n,g=u["".concat(s,".").concat(m)]||u[m]||h[m]||o;return r?a.createElement(g,l(l({ref:t},c),{},{components:r})):a.createElement(g,l({ref:t},c))}));function g(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=r.length,l=new Array(o);l[0]=m;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i[u]="string"==typeof e?e:n,l[1]=i;for(var p=2;p<o;p++)l[p]=r[p];return a.createElement.apply(null,l)}return a.createElement.apply(null,r)}m.displayName="MDXCreateElement"},44239:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>s,contentTitle:()=>l,default:()=>h,frontMatter:()=>o,metadata:()=>i,toc:()=>p});var a=r(58168),n=(r(96540),r(15680));const o={title:"Release 1.1.5",language:"en"},l=void 0,i={unversionedId:"releasenotes/release-1.1.5",id:"version-1.2/releasenotes/release-1.1.5",title:"Release 1.1.5",description:"\x3c!--",source:"@site/versioned_docs/version-1.2/releasenotes/release-1.1.5.md",sourceDirName:"releasenotes",slug:"/releasenotes/release-1.1.5",permalink:"/docs/1.2/releasenotes/release-1.1.5",draft:!1,tags:[],version:"1.2",frontMatter:{title:"Release 1.1.5",language:"en"},sidebar:"docs",previous:{title:"Release 1.2.0",permalink:"/docs/1.2/releasenotes/release-1.2.0"},next:{title:"Release 1.1.4",permalink:"/docs/1.2/releasenotes/release-1.1.4"}},s={},p=[],c={toc:p},u="wrapper";function h(e){let{components:t,...r}=e;return(0,n.yg)(u,(0,a.A)({},c,r,{components:t,mdxType:"MDXLayout"}),(0,n.yg)("p",null,"In this release, Doris Team has fixed about 36 issues or performance improvement since 1.1.4. This release is a bugfix release on 1.1 and all users are encouraged to upgrade to this release."),(0,n.yg)("h1",{id:"behavior-changes"},"Behavior Changes"),(0,n.yg)("p",null,"When alias name is same as the original column name like \"select year(birthday) as birthday\" and use it in group by, order by , having clause, doris's behavior is different from MySQL in the past. In this release, we make it follow MySQL's behavior. Group by and having clause will use original column at first and order by will use alias first. It maybe a litter confuse here so there is a simple advice here, you'd better not use an alias the same as original column name."),(0,n.yg)("h1",{id:"features"},"Features"),(0,n.yg)("p",null,"Add support of murmur_hash3_64. ",(0,n.yg)("a",{parentName:"p",href:"https://github.com/apache/doris/pull/14636"},"#14636")),(0,n.yg)("h1",{id:"improvements"},"Improvements"),(0,n.yg)("p",null,"Add timezone cache for convert_tz to improve performance. ",(0,n.yg)("a",{parentName:"p",href:"https://github.com/apache/doris/pull/14616"},"#14616")),(0,n.yg)("p",null,"Sort result by tablename when call show clause. ",(0,n.yg)("a",{parentName:"p",href:"https://github.com/apache/doris/pull/14492"},"#14492")),(0,n.yg)("h1",{id:"bug-fix"},"Bug Fix"),(0,n.yg)("p",null,"Fix coredump when there is a if constant expr in select clause.  ",(0,n.yg)("a",{parentName:"p",href:"https://github.com/apache/doris/pull/14858"},"#14858")),(0,n.yg)("p",null,"ColumnVector::insert_date_column may crashed. ",(0,n.yg)("a",{parentName:"p",href:"https://github.com/apache/doris/pull/14839"},"#14839")),(0,n.yg)("p",null,"Update high_priority_flush_thread_num_per_store default value to 6 and it will improve the load performance. ",(0,n.yg)("a",{parentName:"p",href:"https://github.com/apache/doris/pull/14775"},"#14775")),(0,n.yg)("p",null,"Fix quick compaction core.  ",(0,n.yg)("a",{parentName:"p",href:"https://github.com/apache/doris/pull/14731"},"#14731")),(0,n.yg)("p",null,"Partition column is not duplicate key, spark load will throw IndexOutOfBounds error. ",(0,n.yg)("a",{parentName:"p",href:"https://github.com/apache/doris/pull/14661"},"#14661")),(0,n.yg)("p",null,"Fix a memory leak problem in VCollectorIterator. ",(0,n.yg)("a",{parentName:"p",href:"https://github.com/apache/doris/pull/14549"},"#14549")),(0,n.yg)("p",null,"Fix create table like when having sequence column. ",(0,n.yg)("a",{parentName:"p",href:"https://github.com/apache/doris/pull/14511"},"#14511")),(0,n.yg)("p",null,"Using avg rowset to calculate batch size instead of using total_bytes since it costs a lot of cpu. ",(0,n.yg)("a",{parentName:"p",href:"https://github.com/apache/doris/pull/14273"},"#14273")),(0,n.yg)("p",null,"Fix right outer join core with conjunct. ",(0,n.yg)("a",{parentName:"p",href:"https://github.com/apache/doris/pull/14821"},"#14821")),(0,n.yg)("p",null,"Optimize policy of tcmalloc gc.  ",(0,n.yg)("a",{parentName:"p",href:"https://github.com/apache/doris/pull/14777"},"#14777")," ",(0,n.yg)("a",{parentName:"p",href:"https://github.com/apache/doris/pull/14738"},"#14738")," ",(0,n.yg)("a",{parentName:"p",href:"https://github.com/apache/doris/pull/14374"},"#14374")))}h.isMDXComponent=!0}}]);