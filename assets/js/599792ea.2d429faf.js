"use strict";(self.webpackChunkselectdb_portal=self.webpackChunkselectdb_portal||[]).push([[35470],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>h});var a=n(67294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var s=a.createContext({}),d=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},p=function(e){var t=d(e.components);return a.createElement(s.Provider,{value:t},e.children)},u="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},c=a.forwardRef((function(e,t){var n=e.components,i=e.mdxType,l=e.originalType,s=e.parentName,p=o(e,["components","mdxType","originalType","parentName"]),u=d(n),c=i,h=u["".concat(s,".").concat(c)]||u[c]||m[c]||l;return n?a.createElement(h,r(r({ref:t},p),{},{components:n})):a.createElement(h,r({ref:t},p))}));function h(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var l=n.length,r=new Array(l);r[0]=c;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o[u]="string"==typeof e?e:i,r[1]=o;for(var d=2;d<l;d++)r[d]=n[d];return a.createElement.apply(null,r)}return a.createElement.apply(null,n)}c.displayName="MDXCreateElement"},70666:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>r,default:()=>u,frontMatter:()=>l,metadata:()=>o,toc:()=>d});var a=n(87462),i=(n(67294),n(3905));const l={title:"Delete",language:"en"},r=void 0,o={unversionedId:"administrator-guide/load-data/delete-manual",id:"version-0.15/administrator-guide/load-data/delete-manual",title:"Delete",description:"\x3c!--",source:"@site/versioned_docs/version-0.15/administrator-guide/load-data/delete-manual.md",sourceDirName:"administrator-guide/load-data",slug:"/administrator-guide/load-data/delete-manual",permalink:"/docs/0.15/administrator-guide/load-data/delete-manual",draft:!1,tags:[],version:"0.15",frontMatter:{title:"Delete",language:"en"},sidebar:"docs",previous:{title:"S3 Load",permalink:"/docs/0.15/administrator-guide/load-data/s3-load-manual"},next:{title:"Insert Into",permalink:"/docs/0.15/administrator-guide/load-data/insert-into-manual"}},s={},d=[{value:"Syntax",id:"syntax",level:2},{value:"Delete Result",id:"delete-result",level:2},{value:"Relevant Configuration",id:"relevant-configuration",level:2},{value:"FE configuration",id:"fe-configuration",level:3},{value:"Show delete history",id:"show-delete-history",level:2}],p={toc:d};function u(e){let{components:t,...n}=e;return(0,i.kt)("wrapper",(0,a.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"delete"},"Delete"),(0,i.kt)("p",null,"Unlike other import methods, delete is a synchronization process. Similar to insert into, all delete operations are an independent import job in Doris. Generally, delete statements need to specify tables, partitions and delete conditions to tell which data to be deleted, and the data on base index and rollup index will be deleted at the same time."),(0,i.kt)("h2",{id:"syntax"},"Syntax"),(0,i.kt)("p",null,"The delete statement's syntax is as follows:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"DELETE FROM table_name [PARTITION partition_name]\nWHERE\ncolumn_name1 op value[ AND column_name2 op value ...];\n")),(0,i.kt)("p",null,"example 1:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"DELETE FROM my_table PARTITION p1 WHERE k1 = 3;\n")),(0,i.kt)("p",null,"example 2:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},'DELETE FROM my_table PARTITION p1 WHERE k1 < 3 AND k2 = "abc";\n')),(0,i.kt)("p",null,"The following describes the parameters used in the delete statement:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"PARTITION"),(0,i.kt)("p",{parentName:"li"},"The target partition of the delete statement. If not specified, the table must be a single partition table, otherwise it cannot be deleted")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"WHERE"),(0,i.kt)("p",{parentName:"li"},"The condition of the delete statement. All delete statements must specify a where condition."))),(0,i.kt)("p",null,"Explanation:"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"The type of ",(0,i.kt)("inlineCode",{parentName:"li"},"OP")," in the WHERE condition can only include ",(0,i.kt)("inlineCode",{parentName:"li"},"=, >, <, >=, <=, !=, in, not in"),"."),(0,i.kt)("li",{parentName:"ol"},"The column in the WHERE condition can only be the ",(0,i.kt)("inlineCode",{parentName:"li"},"key")," column."),(0,i.kt)("li",{parentName:"ol"},"Cannot delete when the ",(0,i.kt)("inlineCode",{parentName:"li"},"key")," column does not exist in any rollup table."),(0,i.kt)("li",{parentName:"ol"},"Each condition in WHERE condition can only be connected by ",(0,i.kt)("inlineCode",{parentName:"li"},"and"),". If you want ",(0,i.kt)("inlineCode",{parentName:"li"},"or"),", you are suggested to write these conditions into two delete statements."),(0,i.kt)("li",{parentName:"ol"},"If the specified table is a range or list partitioned table, ",(0,i.kt)("inlineCode",{parentName:"li"},"PARTITION")," must be specified unless the table is a single partition table,."),(0,i.kt)("li",{parentName:"ol"},"Unlike the insert into command, delete statement cannot specify ",(0,i.kt)("inlineCode",{parentName:"li"},"label")," manually. You can view the concept of ",(0,i.kt)("inlineCode",{parentName:"li"},"label")," in ",(0,i.kt)("a",{parentName:"li",href:"/docs/0.15/administrator-guide/load-data/insert-into-manual"},"Insert Into"))),(0,i.kt)("h2",{id:"delete-result"},"Delete Result"),(0,i.kt)("p",null,"The delete command is an SQL command, and the returned results are synchronous. It can be divided into the following types:"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Successful visible"),(0,i.kt)("p",{parentName:"li"},"If delete completes successfully and is visible, the following results will be returned, ",(0,i.kt)("inlineCode",{parentName:"p"},"query OK")," indicates success."),(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre"},"mysql> delete from test_tbl PARTITION p1 where k1 = 1;\nQuery OK, 0 rows affected (0.04 sec)\n{'label':'delete_e7830c72-eb14-4cb9-bbb6-eebd4511d251', 'status':'VISIBLE', 'txnId':'4005'}\n"))),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Submitted successfully, but not visible"))),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"The transaction submission of Doris is divided into two steps: submission and publish version. Only after the publish version step is completed, the result will be visible to the user. If it has been submitted successfully, then it can be considered that the publish version step will eventually success. Doris will try to wait for publishing for a period of time after submitting. If it has timed out, even if the publishing version has not been completed, it will return to the user in priority and prompt the user that the submission has been completed but not visible. If delete has been committed and executed, but has not been published and visible, the following results will be returned.\n\n```\nmysql> delete from test_tbl PARTITION p1 where k1 = 1;\nQuery OK, 0 rows affected (0.04 sec)\n{'label':'delete_e7830c72-eb14-4cb9-bbb6-eebd4511d251', 'status':'COMMITTED', 'txnId':'4005', 'err':'delete job is committed but may be taking effect later' }\n```\n\n The result will return a JSON string at the same time:\n\n`affected rows`: Indicates the row affected by this deletion. Since the deletion of Doris is currently a logical deletion, the value is always 0.\n\n`label`: The label generated automatically to be the signature of the delete jobs. Each job has a unique label within a single database.\n\n`status`: Indicates whether the data deletion is visible. If it is visible, `visible` will be displayed. If it is not visible, `committed` will be displayed.\n\n\n`txnId`: The transaction ID corresponding to the delete job\n\n`err`: Field will display some details of this deletion\n")),(0,i.kt)("ol",{start:3},(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Commit failed, transaction cancelled"),(0,i.kt)("p",{parentName:"li"},"If the delete statement is not submitted successfully, it will be automatically aborted by Doris and the following results will be returned"),(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre"},"mysql> delete from test_tbl partition p1 where k1 > 80;\nERROR 1064 (HY000): errCode = 2, detailMessage = {\u9519\u8bef\u539f\u56e0}\n")),(0,i.kt)("p",{parentName:"li"},"example:"),(0,i.kt)("p",{parentName:"li"},"A timeout deletion will return the timeout and unfinished replicas displayed as ",(0,i.kt)("inlineCode",{parentName:"p"}," (tablet = replica)")))),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"```\nmysql> delete from test_tbl partition p1 where k1 > 80;\nERROR 1064 (HY000): errCode = 2, detailMessage = failed to delete replicas from job: 4005, Unfinished replicas:10000=60000, 10001=60000, 10002=60000\n```\n\n**The correct processing logic for the returned results of the delete operation is as follows:**\n\n1. If `Error 1064 (HY000)` is returned, deletion fails\n\n2. If the returned result is `Query OK`, the deletion is successful\n\n    1. If `status` is `committed`, the data deletion is committed and will be eventually invisible. Users can wait for a while and then use the `show delete` command to view the results.\n    2. If `status` is `visible`, the data have been deleted successfully.\n")),(0,i.kt)("h2",{id:"relevant-configuration"},"Relevant Configuration"),(0,i.kt)("h3",{id:"fe-configuration"},"FE configuration"),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"TIMEOUT configuration")),(0,i.kt)("p",null,"In general, Doris's deletion timeout is limited from 30 seconds to 5 minutes. The specific time can be adjusted through the following configuration items"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("inlineCode",{parentName:"p"},"tablet_delete_timeout_second")),(0,i.kt)("p",{parentName:"li"},"  The timeout of delete itself can be elastically changed by the number of tablets in the specified partition. This configuration represents the average timeout contributed by a tablet. The default value is 2."),(0,i.kt)("p",{parentName:"li"},"  Assuming that there are 5 tablets under the specified partition for this deletion, the timeout time available for the deletion is 10 seconds. Because the minimum timeout is 30 seconds which is higher than former timeout time, the final timeout is 30 seconds.\n")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("inlineCode",{parentName:"p"},"load_straggler_wait_second")),(0,i.kt)("p",{parentName:"li"},"  If the user estimates a large amount of data, so that the upper limit of 5 minutes is insufficient, the user can adjust the upper limit of timeout through this item, and the default value is 300."),(0,i.kt)("p",{parentName:"li"},"  ",(0,i.kt)("strong",{parentName:"p"},"The specific calculation rule of timeout(seconds)")),(0,i.kt)("p",{parentName:"li"},"  ",(0,i.kt)("inlineCode",{parentName:"p"},"TIMEOUT = MIN(load_straggler_wait_second, MAX(30, tablet_delete_timeout_second * tablet_num))"))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("inlineCode",{parentName:"p"},"query_timeout")),(0,i.kt)("p",{parentName:"li"},"  Because delete itself is an SQL command, the deletion statement is also limited by the session variables, and the timeout is also affected by the session value ",(0,i.kt)("inlineCode",{parentName:"p"},"query'timeout"),". You can increase the value by ",(0,i.kt)("inlineCode",{parentName:"p"},"set query'timeout = xxx"),"."))),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"InPredicate configuration")),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"max_allowed_in_element_num_of_delete"),"  If the user needs to take a lot of elements when using the in predicate, the user can adjust the upper limit of the allowed in elements number, and the default value is 1024.")),(0,i.kt)("h2",{id:"show-delete-history"},"Show delete history"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"The user can view the deletion completed in history through the show delete statement."),(0,i.kt)("p",{parentName:"li"},"Syntax"),(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre"},"SHOW DELETE [FROM db_name]\n")),(0,i.kt)("p",{parentName:"li"},"example"),(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre"},'mysql> show delete from test_db;\n+-----------+---------------+---------------------+-----------------+----------+\n| TableName | PartitionName | CreateTime          | DeleteCondition | State    |\n+-----------+---------------+---------------------+-----------------+----------+\n| empty_tbl | p3            | 2020-04-15 23:09:35 | k1 EQ "1"       | FINISHED |\n| test_tbl  | p4            | 2020-04-15 23:09:53 | k1 GT "80"      | FINISHED |\n+-----------+---------------+---------------------+-----------------+----------+\n2 rows in set (0.00 sec)\n')))))}u.isMDXComponent=!0}}]);