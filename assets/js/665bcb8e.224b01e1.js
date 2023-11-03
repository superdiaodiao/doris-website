"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([[18590],{3905:(e,t,a)=>{a.d(t,{Zo:()=>p,kt:()=>h});var n=a(67294);function l(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function r(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){l(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function o(e,t){if(null==e)return{};var a,n,l=function(e,t){if(null==e)return{};var a,n,l={},i=Object.keys(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||(l[a]=e[a]);return l}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(l[a]=e[a])}return l}var s=n.createContext({}),d=function(e){var t=n.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):r(r({},t),e)),a},p=function(e){var t=d(e.components);return n.createElement(s.Provider,{value:t},e.children)},u="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},c=n.forwardRef((function(e,t){var a=e.components,l=e.mdxType,i=e.originalType,s=e.parentName,p=o(e,["components","mdxType","originalType","parentName"]),u=d(a),c=l,h=u["".concat(s,".").concat(c)]||u[c]||m[c]||i;return a?n.createElement(h,r(r({ref:t},p),{},{components:a})):n.createElement(h,r({ref:t},p))}));function h(e,t){var a=arguments,l=t&&t.mdxType;if("string"==typeof e||l){var i=a.length,r=new Array(i);r[0]=c;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o[u]="string"==typeof e?e:l,r[1]=o;for(var d=2;d<i;d++)r[d]=a[d];return n.createElement.apply(null,r)}return n.createElement.apply(null,a)}c.displayName="MDXCreateElement"},14922:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>s,contentTitle:()=>r,default:()=>m,frontMatter:()=>i,metadata:()=>o,toc:()=>d});var n=a(87462),l=(a(67294),a(3905));const i={title:"Delete",language:"en"},r=void 0,o={unversionedId:"data-operate/update-delete/delete-manual",id:"data-operate/update-delete/delete-manual",title:"Delete",description:"\x3c!--",source:"@site/docs/data-operate/update-delete/delete-manual.md",sourceDirName:"data-operate/update-delete",slug:"/data-operate/update-delete/delete-manual",permalink:"/docs/dev/data-operate/update-delete/delete-manual",draft:!1,tags:[],version:"current",frontMatter:{title:"Delete",language:"en"},sidebar:"docs",previous:{title:"Partial Update",permalink:"/docs/dev/data-operate/update-delete/partial-update"},next:{title:"Sequence Column",permalink:"/docs/dev/data-operate/update-delete/sequence-column-manual"}},s={},d=[{value:"Syntax",id:"syntax",level:2},{value:"Delete Result",id:"delete-result",level:2},{value:"Delete Operation Related FE Configuration",id:"delete-operation-related-fe-configuration",level:2},{value:"Show Delete History",id:"show-delete-history",level:2},{value:"Note",id:"note",level:3},{value:"More Help",id:"more-help",level:2}],p={toc:d},u="wrapper";function m(e){let{components:t,...a}=e;return(0,l.kt)(u,(0,n.Z)({},p,a,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("h1",{id:"delete"},"Delete"),(0,l.kt)("p",null,"Delete is different from other import methods. It is a synchronization process, similar to Insert into. All Delete operations are an independent import job in Doris. Generally, the Delete statement needs to specify the table and partition and delete conditions to filter the data to be deleted. , and will delete the data of the base table and the rollup table at the same time."),(0,l.kt)("h2",{id:"syntax"},"Syntax"),(0,l.kt)("p",null,"Please refer to the official website for the ",(0,l.kt)("a",{parentName:"p",href:"/docs/dev/sql-manual/sql-reference/Data-Manipulation-Statements/Manipulation/DELETE"},"DELETE")," syntax of the delete operation."),(0,l.kt)("h2",{id:"delete-result"},"Delete Result"),(0,l.kt)("p",null,"The delete command is an SQL command, and the returned results are synchronous. It can be divided into the following types:"),(0,l.kt)("ol",null,(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("p",{parentName:"li"},"Successful visible"),(0,l.kt)("p",{parentName:"li"},"If delete completes successfully and is visible, the following results will be returned, ",(0,l.kt)("inlineCode",{parentName:"p"},"query OK")," indicates success."),(0,l.kt)("pre",{parentName:"li"},(0,l.kt)("code",{parentName:"pre",className:"language-sql"},"mysql> delete from test_tbl PARTITION p1 where k1 = 1;\n Query OK, 0 rows affected (0.04 sec)\n {'label':'delete_e7830c72-eb14-4cb9-bbb6-eebd4511d251', 'status':'VISIBLE', 'txnId':'4005'}\n"))),(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("p",{parentName:"li"},"Submitted successfully, but not visible"),(0,l.kt)("p",{parentName:"li"},"The transaction submission of Doris is divided into two steps: submission and publish version. Only after the publish version step is completed, the result will be visible to the user. If it has been submitted successfully, then it can be considered that the publish version step will eventually success. Doris will try to wait for publishing for a period of time after submitting. If it has timed out, even if the publishing version has not been completed, it will return to the user in priority and prompt the user that the submission has been completed but not visible. If delete has been committed and executed, but has not been published and visible, the following results will be returned."),(0,l.kt)("pre",{parentName:"li"},(0,l.kt)("code",{parentName:"pre",className:"language-sql"},"mysql> delete from test_tbl PARTITION p1 where k1 = 1;\nQuery OK, 0 rows affected (0.04 sec)\n{'label':'delete_e7830c72-eb14-4cb9-bbb6-eebd4511d251', 'status':'COMMITTED', 'txnId':'4005', 'err':'delete job is committed but may be taking effect later' }\n")),(0,l.kt)("p",{parentName:"li"}," The result will return a JSON string at the same time:"),(0,l.kt)("p",{parentName:"li"},(0,l.kt)("inlineCode",{parentName:"p"},"affected rows"),": Indicates the row affected by this deletion. Since the deletion of Doris is currently a logical deletion, the value is always 0."),(0,l.kt)("p",{parentName:"li"},(0,l.kt)("inlineCode",{parentName:"p"},"label"),": The label generated automatically to be the signature of the delete jobs. Each job has a unique label within a single database."),(0,l.kt)("p",{parentName:"li"},(0,l.kt)("inlineCode",{parentName:"p"},"status"),": Indicates whether the data deletion is visible. If it is visible, ",(0,l.kt)("inlineCode",{parentName:"p"},"visible")," will be displayed. If it is not visible, ",(0,l.kt)("inlineCode",{parentName:"p"},"committed")," will be displayed."),(0,l.kt)("p",{parentName:"li"},(0,l.kt)("inlineCode",{parentName:"p"},"txnId"),": The transaction ID corresponding to the delete job"),(0,l.kt)("p",{parentName:"li"},(0,l.kt)("inlineCode",{parentName:"p"},"err"),": Field will display some details of this deletion")),(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("p",{parentName:"li"},"Commit failed, transaction cancelled"),(0,l.kt)("p",{parentName:"li"},"If the delete statement is not submitted successfully, it will be automatically aborted by Doris and the following results will be returned"))),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sql"},"mysql> delete from test_tbl partition p1 where k1 > 80;\nERROR 1064 (HY000): errCode = 2, detailMessage = {\u9519\u8bef\u539f\u56e0}\n")),(0,l.kt)("p",null,"   example:"),(0,l.kt)("p",null,"   A timeout deletion will return the timeout and unfinished replicas displayed as ",(0,l.kt)("inlineCode",{parentName:"p"}," (tablet = replica)")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sql"},"mysql> delete from test_tbl partition p1 where k1 > 80;\nERROR 1064 (HY000): errCode = 2, detailMessage = failed to delete replicas from job: 4005, Unfinished replicas:10000=60000, 10001=60000, 10002=60000\n")),(0,l.kt)("p",null,"   ",(0,l.kt)("strong",{parentName:"p"},"The correct processing logic for the returned results of the delete operation is as follows:")),(0,l.kt)("ol",null,(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("p",{parentName:"li"},"If ",(0,l.kt)("inlineCode",{parentName:"p"},"Error 1064 (HY000)")," is returned, deletion fails")),(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("p",{parentName:"li"},"If the returned result is ",(0,l.kt)("inlineCode",{parentName:"p"},"Query OK"),", the deletion is successful"),(0,l.kt)("ol",{parentName:"li"},(0,l.kt)("li",{parentName:"ol"},"If ",(0,l.kt)("inlineCode",{parentName:"li"},"status")," is ",(0,l.kt)("inlineCode",{parentName:"li"},"committed"),", the data deletion is committed and will be eventually invisible. Users can wait for a while and then use the ",(0,l.kt)("inlineCode",{parentName:"li"},"show delete")," command to view the results."),(0,l.kt)("li",{parentName:"ol"},"If ",(0,l.kt)("inlineCode",{parentName:"li"},"status")," is ",(0,l.kt)("inlineCode",{parentName:"li"},"visible"),", the data have been deleted successfully.")))),(0,l.kt)("h2",{id:"delete-operation-related-fe-configuration"},"Delete Operation Related FE Configuration"),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"TIMEOUT Configuration")),(0,l.kt)("p",null,"In general, Doris's deletion timeout is limited from 30 seconds to 5 minutes. The specific time can be adjusted through the following configuration items"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},(0,l.kt)("inlineCode",{parentName:"p"},"tablet_delete_timeout_second")),(0,l.kt)("p",{parentName:"li"},"The timeout of delete itself can be elastically changed by the number of tablets in the specified partition. This configuration represents the average timeout contributed by a tablet. The default value is 2."),(0,l.kt)("p",{parentName:"li"},"Assuming that there are 5 tablets under the specified partition for this deletion, the timeout time available for the deletion is 10 seconds. Because the minimum timeout is 30 seconds which is higher than former timeout time, the final timeout is 30 seconds.")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},(0,l.kt)("inlineCode",{parentName:"p"},"load_straggler_wait_second")),(0,l.kt)("p",{parentName:"li"},"If the user estimates a large amount of data, so that the upper limit of 5 minutes is insufficient, the user can adjust the upper limit of timeout through this item, and the default value is 300."),(0,l.kt)("p",{parentName:"li"},(0,l.kt)("strong",{parentName:"p"},"The specific calculation rule of timeout(seconds)")),(0,l.kt)("p",{parentName:"li"},(0,l.kt)("inlineCode",{parentName:"p"},"TIMEOUT = MIN(load_straggler_wait_second, MAX(30, tablet_delete_timeout_second * tablet_num))"))),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},(0,l.kt)("inlineCode",{parentName:"p"},"query_timeout")),(0,l.kt)("p",{parentName:"li"},"Because delete itself is an SQL command, the deletion statement is also limited by the session variables, and the timeout is also affected by the session value ",(0,l.kt)("inlineCode",{parentName:"p"},"query'timeout"),". You can increase the value by ",(0,l.kt)("inlineCode",{parentName:"p"},"set query'timeout = xxx"),"."))),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"InPredicate configuration")),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},(0,l.kt)("inlineCode",{parentName:"p"},"max_allowed_in_element_num_of_delete")),(0,l.kt)("p",{parentName:"li"},"If the user needs to take a lot of elements when using the in predicate, the user can adjust the upper limit of the allowed in elements number, and the default value is 1024."))),(0,l.kt)("h2",{id:"show-delete-history"},"Show Delete History"),(0,l.kt)("p",null,"The user can view the deletion completed in history through the show delete statement."),(0,l.kt)("p",null,"Syntax"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sql"},"SHOW DELETE [FROM db_name]\n")),(0,l.kt)("p",null,"example"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sql"},'mysql> show delete from test_db;\n+-----------+---------------+---------------------+-----------------+----------+\n| TableName | PartitionName | CreateTime          | DeleteCondition | State    |\n+-----------+---------------+---------------------+-----------------+----------+\n| empty_tbl | p3            | 2020-04-15 23:09:35 | k1 EQ "1"       | FINISHED |\n| test_tbl  | p4            | 2020-04-15 23:09:53 | k1 GT "80"      | FINISHED |\n+-----------+---------------+---------------------+-----------------+----------+\n2 rows in set (0.00 sec)\n')),(0,l.kt)("h3",{id:"note"},"Note"),(0,l.kt)("p",null,"Unlike the Insert into command, delete cannot specify ",(0,l.kt)("inlineCode",{parentName:"p"},"label")," manually. For the concept of label, see the ",(0,l.kt)("a",{parentName:"p",href:"/docs/dev/data-operate/import/import-way/insert-into-manual"},"Insert Into")," documentation."),(0,l.kt)("h2",{id:"more-help"},"More Help"),(0,l.kt)("p",null,"For more detailed syntax used by ",(0,l.kt)("strong",{parentName:"p"},"delete"),", see the ",(0,l.kt)("a",{parentName:"p",href:"/docs/dev/sql-manual/sql-reference/Data-Manipulation-Statements/Manipulation/DELETE"},"delete")," command manual, You can also enter ",(0,l.kt)("inlineCode",{parentName:"p"},"HELP DELETE")," in the Mysql client command line to get more help information"))}m.isMDXComponent=!0}}]);