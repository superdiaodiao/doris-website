"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([[6776],{15680:(e,t,a)=>{a.d(t,{xA:()=>d,yg:()=>y});var n=a(96540);function l(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function r(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){l(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function o(e,t){if(null==e)return{};var a,n,l=function(e,t){if(null==e)return{};var a,n,l={},i=Object.keys(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||(l[a]=e[a]);return l}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(l[a]=e[a])}return l}var s=n.createContext({}),p=function(e){var t=n.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):r(r({},t),e)),a},d=function(e){var t=p(e.components);return n.createElement(s.Provider,{value:t},e.children)},u="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},c=n.forwardRef((function(e,t){var a=e.components,l=e.mdxType,i=e.originalType,s=e.parentName,d=o(e,["components","mdxType","originalType","parentName"]),u=p(a),c=l,y=u["".concat(s,".").concat(c)]||u[c]||m[c]||i;return a?n.createElement(y,r(r({ref:t},d),{},{components:a})):n.createElement(y,r({ref:t},d))}));function y(e,t){var a=arguments,l=t&&t.mdxType;if("string"==typeof e||l){var i=a.length,r=new Array(i);r[0]=c;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o[u]="string"==typeof e?e:l,r[1]=o;for(var p=2;p<i;p++)r[p]=a[p];return n.createElement.apply(null,r)}return n.createElement.apply(null,a)}c.displayName="MDXCreateElement"},20330:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>s,contentTitle:()=>r,default:()=>m,frontMatter:()=>i,metadata:()=>o,toc:()=>p});var n=a(58168),l=(a(96540),a(15680));const i={title:"Delete",language:"en"},r=void 0,o={unversionedId:"data-operate/update-delete/delete-manual",id:"version-2.0/data-operate/update-delete/delete-manual",title:"Delete",description:"\x3c!--",source:"@site/versioned_docs/version-2.0/data-operate/update-delete/delete-manual.md",sourceDirName:"data-operate/update-delete",slug:"/data-operate/update-delete/delete-manual",permalink:"/docs/data-operate/update-delete/delete-manual",draft:!1,tags:[],version:"2.0",frontMatter:{title:"Delete",language:"en"},sidebar:"docs",previous:{title:"Partial Update",permalink:"/docs/data-operate/update-delete/partial-update"},next:{title:"Sequence Column",permalink:"/docs/data-operate/update-delete/sequence-column-manual"}},s={},p=[{value:"Syntax",id:"syntax",level:2},{value:"Delete Result",id:"delete-result",level:2},{value:"Delete Operation Related FE Configuration",id:"delete-operation-related-fe-configuration",level:2},{value:"Show Delete History",id:"show-delete-history",level:2},{value:"Note",id:"note",level:3},{value:"More Help",id:"more-help",level:2}],d={toc:p},u="wrapper";function m(e){let{components:t,...a}=e;return(0,l.yg)(u,(0,n.A)({},d,a,{components:t,mdxType:"MDXLayout"}),(0,l.yg)("h1",{id:"delete"},"Delete"),(0,l.yg)("p",null,"Delete is different from other import methods. It is a synchronization process, similar to Insert into. All Delete operations are an independent import job in Doris. Generally, the Delete statement needs to specify the table and partition and delete conditions to filter the data to be deleted. , and will delete the data of the base table and the rollup table at the same time."),(0,l.yg)("h2",{id:"syntax"},"Syntax"),(0,l.yg)("p",null,"Please refer to the official website for the ",(0,l.yg)("a",{parentName:"p",href:"/docs/sql-manual/sql-reference/Data-Manipulation-Statements/Manipulation/DELETE"},"DELETE")," syntax of the delete operation."),(0,l.yg)("h2",{id:"delete-result"},"Delete Result"),(0,l.yg)("p",null,"The delete command is an SQL command, and the returned results are synchronous. It can be divided into the following types:"),(0,l.yg)("ol",null,(0,l.yg)("li",{parentName:"ol"},(0,l.yg)("p",{parentName:"li"},"Successful visible"),(0,l.yg)("p",{parentName:"li"},"If delete completes successfully and is visible, the following results will be returned, ",(0,l.yg)("inlineCode",{parentName:"p"},"query OK")," indicates success."),(0,l.yg)("pre",{parentName:"li"},(0,l.yg)("code",{parentName:"pre",className:"language-sql"},"mysql> delete from test_tbl PARTITION p1 where k1 = 1;\n Query OK, 0 rows affected (0.04 sec)\n {'label':'delete_e7830c72-eb14-4cb9-bbb6-eebd4511d251', 'status':'VISIBLE', 'txnId':'4005'}\n"))),(0,l.yg)("li",{parentName:"ol"},(0,l.yg)("p",{parentName:"li"},"Submitted successfully, but not visible"),(0,l.yg)("p",{parentName:"li"},"The transaction submission of Doris is divided into two steps: submission and publish version. Only after the publish version step is completed, the result will be visible to the user. If it has been submitted successfully, then it can be considered that the publish version step will eventually success. Doris will try to wait for publishing for a period of time after submitting. If it has timed out, even if the publishing version has not been completed, it will return to the user in priority and prompt the user that the submission has been completed but not visible. If delete has been committed and executed, but has not been published and visible, the following results will be returned."),(0,l.yg)("pre",{parentName:"li"},(0,l.yg)("code",{parentName:"pre",className:"language-sql"},"mysql> delete from test_tbl PARTITION p1 where k1 = 1;\nQuery OK, 0 rows affected (0.04 sec)\n{'label':'delete_e7830c72-eb14-4cb9-bbb6-eebd4511d251', 'status':'COMMITTED', 'txnId':'4005', 'err':'delete job is committed but may be taking effect later' }\n")),(0,l.yg)("p",{parentName:"li"}," The result will return a JSON string at the same time:"),(0,l.yg)("p",{parentName:"li"},(0,l.yg)("inlineCode",{parentName:"p"},"affected rows"),": Indicates the row affected by this deletion. Since the deletion of Doris is currently a logical deletion, the value is always 0."),(0,l.yg)("p",{parentName:"li"},(0,l.yg)("inlineCode",{parentName:"p"},"label"),": The label generated automatically to be the signature of the delete jobs. Each job has a unique label within a single database."),(0,l.yg)("p",{parentName:"li"},(0,l.yg)("inlineCode",{parentName:"p"},"status"),": Indicates whether the data deletion is visible. If it is visible, ",(0,l.yg)("inlineCode",{parentName:"p"},"visible")," will be displayed. If it is not visible, ",(0,l.yg)("inlineCode",{parentName:"p"},"committed")," will be displayed."),(0,l.yg)("p",{parentName:"li"},(0,l.yg)("inlineCode",{parentName:"p"},"txnId"),": The transaction ID corresponding to the delete job"),(0,l.yg)("p",{parentName:"li"},(0,l.yg)("inlineCode",{parentName:"p"},"err"),": Field will display some details of this deletion")),(0,l.yg)("li",{parentName:"ol"},(0,l.yg)("p",{parentName:"li"},"Commit failed, transaction cancelled"),(0,l.yg)("p",{parentName:"li"},"If the delete statement is not submitted successfully, it will be automatically aborted by Doris and the following results will be returned"))),(0,l.yg)("pre",null,(0,l.yg)("code",{parentName:"pre",className:"language-sql"},"mysql> delete from test_tbl partition p1 where k1 > 80;\nERROR 1064 (HY000): errCode = 2, detailMessage = {\u9519\u8bef\u539f\u56e0}\n")),(0,l.yg)("p",null,"   example:"),(0,l.yg)("p",null,"   A timeout deletion will return the timeout and unfinished replicas displayed as ",(0,l.yg)("inlineCode",{parentName:"p"}," (tablet = replica)")),(0,l.yg)("pre",null,(0,l.yg)("code",{parentName:"pre",className:"language-sql"},"mysql> delete from test_tbl partition p1 where k1 > 80;\nERROR 1064 (HY000): errCode = 2, detailMessage = failed to delete replicas from job: 4005, Unfinished replicas:10000=60000, 10001=60000, 10002=60000\n")),(0,l.yg)("p",null,"   ",(0,l.yg)("strong",{parentName:"p"},"The correct processing logic for the returned results of the delete operation is as follows:")),(0,l.yg)("ol",null,(0,l.yg)("li",{parentName:"ol"},(0,l.yg)("p",{parentName:"li"},"If ",(0,l.yg)("inlineCode",{parentName:"p"},"Error 1064 (HY000)")," is returned, deletion fails")),(0,l.yg)("li",{parentName:"ol"},(0,l.yg)("p",{parentName:"li"},"If the returned result is ",(0,l.yg)("inlineCode",{parentName:"p"},"Query OK"),", the deletion is successful"),(0,l.yg)("ol",{parentName:"li"},(0,l.yg)("li",{parentName:"ol"},"If ",(0,l.yg)("inlineCode",{parentName:"li"},"status")," is ",(0,l.yg)("inlineCode",{parentName:"li"},"committed"),", the data deletion is committed and will be eventually invisible. Users can wait for a while and then use the ",(0,l.yg)("inlineCode",{parentName:"li"},"show delete")," command to view the results."),(0,l.yg)("li",{parentName:"ol"},"If ",(0,l.yg)("inlineCode",{parentName:"li"},"status")," is ",(0,l.yg)("inlineCode",{parentName:"li"},"visible"),", the data have been deleted successfully.")))),(0,l.yg)("h2",{id:"delete-operation-related-fe-configuration"},"Delete Operation Related FE Configuration"),(0,l.yg)("p",null,(0,l.yg)("strong",{parentName:"p"},"TIMEOUT Configuration")),(0,l.yg)("p",null,"In general, Doris's deletion timeout is limited from 30 seconds to 5 minutes. The specific time can be adjusted through the following configuration items"),(0,l.yg)("ul",null,(0,l.yg)("li",{parentName:"ul"},(0,l.yg)("p",{parentName:"li"},(0,l.yg)("inlineCode",{parentName:"p"},"tablet_delete_timeout_second")),(0,l.yg)("p",{parentName:"li"},"The timeout of delete itself can be elastically changed by the number of tablets in the specified partition. This configuration represents the average timeout contributed by a tablet. The default value is 2."),(0,l.yg)("p",{parentName:"li"},"Assuming that there are 5 tablets under the specified partition for this deletion, the timeout time available for the deletion is 10 seconds. Because the minimum timeout is 30 seconds which is higher than former timeout time, the final timeout is 30 seconds.")),(0,l.yg)("li",{parentName:"ul"},(0,l.yg)("p",{parentName:"li"},(0,l.yg)("inlineCode",{parentName:"p"},"load_straggler_wait_second")),(0,l.yg)("p",{parentName:"li"},"If the user estimates a large amount of data, so that the upper limit of 5 minutes is insufficient, the user can adjust the upper limit of timeout through this item, and the default value is 300."),(0,l.yg)("p",{parentName:"li"},(0,l.yg)("strong",{parentName:"p"},"The specific calculation rule of timeout(seconds)")),(0,l.yg)("p",{parentName:"li"},(0,l.yg)("inlineCode",{parentName:"p"},"TIMEOUT = MIN(load_straggler_wait_second, MAX(30, tablet_delete_timeout_second * tablet_num))"))),(0,l.yg)("li",{parentName:"ul"},(0,l.yg)("p",{parentName:"li"},(0,l.yg)("inlineCode",{parentName:"p"},"query_timeout")),(0,l.yg)("p",{parentName:"li"},"Because delete itself is an SQL command, the deletion statement is also limited by the session variables, and the timeout is also affected by the session value ",(0,l.yg)("inlineCode",{parentName:"p"},"query'timeout"),". You can increase the value by ",(0,l.yg)("inlineCode",{parentName:"p"},"set query'timeout = xxx"),"."))),(0,l.yg)("p",null,(0,l.yg)("strong",{parentName:"p"},"InPredicate configuration")),(0,l.yg)("ul",null,(0,l.yg)("li",{parentName:"ul"},(0,l.yg)("p",{parentName:"li"},(0,l.yg)("inlineCode",{parentName:"p"},"max_allowed_in_element_num_of_delete")),(0,l.yg)("p",{parentName:"li"},"If the user needs to take a lot of elements when using the in predicate, the user can adjust the upper limit of the allowed in elements number, and the default value is 1024."))),(0,l.yg)("h2",{id:"show-delete-history"},"Show Delete History"),(0,l.yg)("p",null,"The user can view the deletion completed in history through the show delete statement."),(0,l.yg)("p",null,"Syntax"),(0,l.yg)("pre",null,(0,l.yg)("code",{parentName:"pre",className:"language-sql"},"SHOW DELETE [FROM db_name]\n")),(0,l.yg)("p",null,"example"),(0,l.yg)("pre",null,(0,l.yg)("code",{parentName:"pre",className:"language-sql"},'mysql> show delete from test_db;\n+-----------+---------------+---------------------+-----------------+----------+\n| TableName | PartitionName | CreateTime          | DeleteCondition | State    |\n+-----------+---------------+---------------------+-----------------+----------+\n| empty_tbl | p3            | 2020-04-15 23:09:35 | k1 EQ "1"       | FINISHED |\n| test_tbl  | p4            | 2020-04-15 23:09:53 | k1 GT "80"      | FINISHED |\n+-----------+---------------+---------------------+-----------------+----------+\n2 rows in set (0.00 sec)\n')),(0,l.yg)("h3",{id:"note"},"Note"),(0,l.yg)("p",null,"Unlike the Insert into command, delete cannot specify ",(0,l.yg)("inlineCode",{parentName:"p"},"label")," manually. For the concept of label, see the ",(0,l.yg)("a",{parentName:"p",href:"/docs/data-operate/import/import-way/insert-into-manual"},"Insert Into")," documentation."),(0,l.yg)("h2",{id:"more-help"},"More Help"),(0,l.yg)("p",null,"For more detailed syntax used by ",(0,l.yg)("strong",{parentName:"p"},"delete"),", see the ",(0,l.yg)("a",{parentName:"p",href:"/docs/sql-manual/sql-reference/Data-Manipulation-Statements/Manipulation/DELETE"},"delete")," command manual, You can also enter ",(0,l.yg)("inlineCode",{parentName:"p"},"HELP DELETE")," in the Mysql client command line to get more help information"))}m.isMDXComponent=!0}}]);