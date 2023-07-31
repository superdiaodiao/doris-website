"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([[98041],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>b});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var c=r.createContext({}),s=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=s(e.components);return r.createElement(c.Provider,{value:t},e.children)},d="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},h=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,c=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),d=s(n),h=a,b=d["".concat(c,".").concat(h)]||d[h]||p[h]||o;return n?r.createElement(b,i(i({ref:t},u),{},{components:n})):r.createElement(b,i({ref:t},u))}));function b(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=h;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l[d]="string"==typeof e?e:a,i[1]=l;for(var s=2;s<o;s++)i[s]=n[s];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}h.displayName="MDXCreateElement"},56853:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>i,default:()=>p,frontMatter:()=>o,metadata:()=>l,toc:()=>s});var r=n(87462),a=(n(67294),n(3905));const o={title:"property is_being_synced",language:"en"},i=void 0,l={unversionedId:"advanced/is-being-synced",id:"advanced/is-being-synced",title:"property is_being_synced",description:"\x3c!--",source:"@site/docs/advanced/is-being-synced.md",sourceDirName:"advanced",slug:"/advanced/is-being-synced",permalink:"/docs/dev/advanced/is-being-synced",draft:!1,tags:[],version:"current",frontMatter:{title:"property is_being_synced",language:"en"}},c={},s=[],u={toc:s},d="wrapper";function p(e){let{components:t,...n}=e;return(0,a.kt)(d,(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"background"},"Background"),(0,a.kt)("version",{since:"2.0"},(0,a.kt)("p",null,'"is_being_synced" = "true"')),(0,a.kt)("p",null,"CCR will create replica tables (referred to as target tables, located in the dest cluster) of the tables (referred to as source tables, located in the source cluster) in the synchronization scope of the source cluster in the dest cluster when establishing synchronization, but some functions and properties need to be invalidated or erased when creating replica tables to ensure the correctness of the synchronization process.  "),(0,a.kt)("p",null,"such as\uff1a  "),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"The source table contains information that may not have been synchronized to the dest cluster, such as ",(0,a.kt)("inlineCode",{parentName:"li"},"storage_policy"),", etc., which may cause the target table creation to fail or behave abnormally."),(0,a.kt)("li",{parentName:"ul"},"The source table may contain some dynamic functions, such as dynamic partitioning, etc., which may cause the behavior of the target table to be out of syncer control and cause partition inconsistency.")),(0,a.kt)("p",null,"The properties that need to be erased due to invalidation when being replicated are:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"storage_policy")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"colocate_with"))),(0,a.kt)("p",null,"The functions that need to be invalidated when being synchronized are:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"auto bucket"),(0,a.kt)("li",{parentName:"ul"},"dynamic partition")),(0,a.kt)("h1",{id:"implementation"},"Implementation"),(0,a.kt)("p",null,"When creating the target table, this properties will be added or deleted by syncer control. In CCR, there are two ways to create a target table:"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"When synchronizing tables, syncer uses backup/restore method to perform full replication of the source table to obtain the target table."),(0,a.kt)("li",{parentName:"ol"},"When synchronizing databases, for existing tables, syncer also uses backup/restore method to obtain the target table, for incremental tables, syncer will create the target table through binlog with CreateTableRecord.  ")),(0,a.kt)("p",null,"In summary, there are two entry points for inserting ",(0,a.kt)("inlineCode",{parentName:"p"},"is_being_synced")," attribute: the restore process in full synchronization and the getDdlStmt in incremental synchronization.  "),(0,a.kt)("p",null,"In the restore process of full synchronization, syncer will initiate the restore of the snapshot in the original cluster through rpc. In this process, it will add ",(0,a.kt)("inlineCode",{parentName:"p"},"is_being_synced")," attribute to RestoreStmt and take effect in the final restoreJob, executing the relevant logic of ",(0,a.kt)("inlineCode",{parentName:"p"},"isBeingSynced"),".",(0,a.kt)("br",{parentName:"p"}),"\n","In the getDdlStmt of incremental synchronization, add the parameter ",(0,a.kt)("inlineCode",{parentName:"p"},"boolean getDdlForSync")," to the getDdlStmt method to distinguish whether it is an operation to convert to the target table ddl under control, and execute the relevant logic of ",(0,a.kt)("inlineCode",{parentName:"p"},"isBeingSynced")," when creating the target table."),(0,a.kt)("p",null,"There is no need to say more about the erasure of invalid properties. The invalidation of the above functions needs to be explained:"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"auto bucket",(0,a.kt)("br",{parentName:"li"}),"Auto bucket takes effect when creating a table, calculating the current appropriate number of buckets, which may cause the number of buckets in the source table and the destination table to be inconsistent. Therefore, when synchronizing, you need to obtain the number of buckets in the source table, and also need to obtain the information whether the source table is an automatic bucketing table in order to restore the function after ending the synchronization. The current approach is to default autobucket to false when getting distribution information, and when restoring the table, check the ",(0,a.kt)("inlineCode",{parentName:"li"},"_auto_bucket")," attribute to determine whether the source table is an automatic bucketing table. If so, set the autobucket field of the target table to true, so as to achieve the purpose of skipping calculating the number of buckets and directly applying the number of buckets in the source table."),(0,a.kt)("li",{parentName:"ol"},"dynamic partition",(0,a.kt)("br",{parentName:"li"}),"Dynamic partition is achieved by adding ",(0,a.kt)("inlineCode",{parentName:"li"},"olapTable.isBeingSynced()")," to the judgment of whether to execute add/drop partition, so that the target table will not periodically execute add/drop partition operation during the synchronization process.")),(0,a.kt)("h1",{id:"note"},"Note"),(0,a.kt)("p",null,"When no exception occurs, the ",(0,a.kt)("inlineCode",{parentName:"p"},"is_being_synced")," attribute should be completely controlled by syncer to turn on or off, and users should not modify the attribute by themselves."))}p.isMDXComponent=!0}}]);