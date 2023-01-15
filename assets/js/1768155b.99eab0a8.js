"use strict";(self.webpackChunkselectdb_portal=self.webpackChunkselectdb_portal||[]).push([[57697],{3905:(e,t,n)=>{n.d(t,{Zo:()=>m,kt:()=>h});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=a.createContext({}),p=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},m=function(e){var t=p(e.components);return a.createElement(s.Provider,{value:t},e.children)},c="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,s=e.parentName,m=l(e,["components","mdxType","originalType","parentName"]),c=p(n),d=r,h=c["".concat(s,".").concat(d)]||c[d]||u[d]||i;return n?a.createElement(h,o(o({ref:t},m),{},{components:n})):a.createElement(h,o({ref:t},m))}));function h(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,o=new Array(i);o[0]=d;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[c]="string"==typeof e?e:r,o[1]=l;for(var p=2;p<i;p++)o[p]=n[p];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},92185:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>o,default:()=>c,frontMatter:()=>i,metadata:()=>l,toc:()=>p});var a=n(87462),r=(n(67294),n(3905));const i={title:"INSERT",language:"en"},o=void 0,l={unversionedId:"sql-manual/sql-reference/Data-Manipulation-Statements/Manipulation/INSERT",id:"sql-manual/sql-reference/Data-Manipulation-Statements/Manipulation/INSERT",title:"INSERT",description:"\x3c!--",source:"@site/docs/sql-manual/sql-reference/Data-Manipulation-Statements/Manipulation/INSERT.md",sourceDirName:"sql-manual/sql-reference/Data-Manipulation-Statements/Manipulation",slug:"/sql-manual/sql-reference/Data-Manipulation-Statements/Manipulation/INSERT",permalink:"/docs/sql-manual/sql-reference/Data-Manipulation-Statements/Manipulation/INSERT",draft:!1,tags:[],version:"current",frontMatter:{title:"INSERT",language:"en"},sidebar:"docs",previous:{title:"DELETE",permalink:"/docs/sql-manual/sql-reference/Data-Manipulation-Statements/Manipulation/DELETE"},next:{title:"UPDATE",permalink:"/docs/sql-manual/sql-reference/Data-Manipulation-Statements/Manipulation/UPDATE"}},s={},p=[{value:"INSERT",id:"insert",level:2},{value:"Name",id:"name",level:3},{value:"Description",id:"description",level:3},{value:"Example",id:"example",level:3},{value:"Keywords",id:"keywords",level:3},{value:"Best Practice",id:"best-practice",level:3}],m={toc:p};function c(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,a.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h2",{id:"insert"},"INSERT"),(0,r.kt)("h3",{id:"name"},"Name"),(0,r.kt)("p",null,"INSERT"),(0,r.kt)("h3",{id:"description"},"Description"),(0,r.kt)("p",null,"The change statement is to complete the data insertion operation."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sql"},"INSERT INTO table_name\n    [ PARTITION (p1, ...) ]\n    [ WITH LABEL label]\n    [ (column [, ...]) ]\n    [ [ hint [, ...] ] ]\n    { VALUES ( { expression | DEFAULT } [, ...] ) [, ...] | query }\n")),(0,r.kt)("p",null," Parameters"),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"tablet_name: The destination table for importing data. Can be of the form ",(0,r.kt)("inlineCode",{parentName:"p"},"db_name.table_name")),(0,r.kt)("p",{parentName:"blockquote"},"partitions: Specify the partitions to be imported, which must be partitions that exist in ",(0,r.kt)("inlineCode",{parentName:"p"},"table_name"),". Multiple partition names are separated by commas"),(0,r.kt)("p",{parentName:"blockquote"},"label: specify a label for the Insert task"),(0,r.kt)("p",{parentName:"blockquote"},"column_name: The specified destination column, must be a column that exists in ",(0,r.kt)("inlineCode",{parentName:"p"},"table_name")),(0,r.kt)("p",{parentName:"blockquote"},"expression: the corresponding expression that needs to be assigned to a column"),(0,r.kt)("p",{parentName:"blockquote"},"DEFAULT: let the corresponding column use the default value"),(0,r.kt)("p",{parentName:"blockquote"},"query: a common query, the result of the query will be written to the target"),(0,r.kt)("p",{parentName:"blockquote"},"hint: some indicator used to indicate the execution behavior of ",(0,r.kt)("inlineCode",{parentName:"p"},"INSERT"),". Both ",(0,r.kt)("inlineCode",{parentName:"p"},"streaming")," and the default non-",(0,r.kt)("inlineCode",{parentName:"p"},"streaming")," method use synchronous mode to complete ",(0,r.kt)("inlineCode",{parentName:"p"},"INSERT")," statement execution\nThe non-",(0,r.kt)("inlineCode",{parentName:"p"},"streaming")," method will return a label after the execution is completed, which is convenient for users to query the import status through ",(0,r.kt)("inlineCode",{parentName:"p"},"SHOW LOAD"))),(0,r.kt)("p",null,"Notice:"),(0,r.kt)("p",null,"When executing the ",(0,r.kt)("inlineCode",{parentName:"p"},"INSERT")," statement, the default behavior is to filter the data that does not conform to the target table format, such as the string is too long. However, for business scenarios that require data not to be filtered, you can set the session variable ",(0,r.kt)("inlineCode",{parentName:"p"},"enable_insert_strict")," to ",(0,r.kt)("inlineCode",{parentName:"p"},"true")," to ensure that ",(0,r.kt)("inlineCode",{parentName:"p"},"INSERT")," will not be executed successfully when data is filtered out."),(0,r.kt)("h3",{id:"example"},"Example"),(0,r.kt)("p",null,"The ",(0,r.kt)("inlineCode",{parentName:"p"},"test")," table contains two columns ",(0,r.kt)("inlineCode",{parentName:"p"},"c1"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"c2"),"."),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Import a row of data into the ",(0,r.kt)("inlineCode",{parentName:"li"},"test")," table")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sql"},"INSERT INTO test VALUES (1, 2);\nINSERT INTO test (c1, c2) VALUES (1, 2);\nINSERT INTO test (c1, c2) VALUES (1, DEFAULT);\nINSERT INTO test (c1) VALUES (1);\n")),(0,r.kt)("p",null,"The first and second statements have the same effect. When no target column is specified, the column order in the table is used as the default target column.\nThe third and fourth statements express the same meaning, use the default value of the ",(0,r.kt)("inlineCode",{parentName:"p"},"c2")," column to complete the data import."),(0,r.kt)("ol",{start:2},(0,r.kt)("li",{parentName:"ol"},"Import multiple rows of data into the ",(0,r.kt)("inlineCode",{parentName:"li"},"test")," table at one time")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sql"},"INSERT INTO test VALUES (1, 2), (3, 2 + 2);\nINSERT INTO test (c1, c2) VALUES (1, 2), (3, 2 * 2);\nINSERT INTO test (c1) VALUES (1), (3);\nINSERT INTO test (c1, c2) VALUES (1, DEFAULT), (3, DEFAULT);\n")),(0,r.kt)("p",null,"The first and second statements have the same effect, import two pieces of data into the ",(0,r.kt)("inlineCode",{parentName:"p"},"test")," table at one time\nThe effect of the third and fourth statements is known, and the default value of the ",(0,r.kt)("inlineCode",{parentName:"p"},"c2")," column is used to import two pieces of data into the ",(0,r.kt)("inlineCode",{parentName:"p"},"test")," table"),(0,r.kt)("ol",{start:3},(0,r.kt)("li",{parentName:"ol"},"Import a query result into the ",(0,r.kt)("inlineCode",{parentName:"li"},"test")," table")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sql"},"INSERT INTO test SELECT * FROM test2;\nINSERT INTO test (c1, c2) SELECT * from test2;\n")),(0,r.kt)("ol",{start:4},(0,r.kt)("li",{parentName:"ol"},"Import a query result into the ",(0,r.kt)("inlineCode",{parentName:"li"},"test")," table, specifying the partition and label")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sql"},"INSERT INTO test PARTITION(p1, p2) WITH LABEL `label1` SELECT * FROM test2;\nINSERT INTO test WITH LABEL `label1` (c1, c2) SELECT * from test2;\n")),(0,r.kt)("p",null,"Asynchronous import is actually a synchronous import encapsulated into asynchronous. Filling in streaming and not filling in ",(0,r.kt)("strong",{parentName:"p"},"execution efficiency is the same"),"."),(0,r.kt)("p",null,"Since the previous import methods of Doris are all asynchronous import methods, in order to be compatible with the old usage habits, the ",(0,r.kt)("inlineCode",{parentName:"p"},"INSERT")," statement without streaming will still return a label. Users need to view the ",(0,r.kt)("inlineCode",{parentName:"p"},"label")," import job through the ",(0,r.kt)("inlineCode",{parentName:"p"},"SHOW LOAD")," command. state."),(0,r.kt)("h3",{id:"keywords"},"Keywords"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"INSERT\n")),(0,r.kt)("h3",{id:"best-practice"},"Best Practice"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"View the returned results"),(0,r.kt)("p",{parentName:"li"},"The INSERT operation is a synchronous operation, and the return of the result indicates the end of the operation. Users need to perform corresponding processing according to the different returned results."),(0,r.kt)("ol",{parentName:"li"},(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"The execution is successful, the result set is empty"),(0,r.kt)("p",{parentName:"li"},"If the result set of the insert corresponding to the select statement is empty, it will return as follows:"))))),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"  ```sql\n  mysql> insert into tbl1 select * from empty_tbl;\n  Query OK, 0 rows affected (0.02 sec)\n  ````\n\n  `Query OK` indicates successful execution. `0 rows affected` means that no data was imported.\n")),(0,r.kt)("ol",{start:2},(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"The execution is successful, the result set is not empty"),(0,r.kt)("p",{parentName:"li"},"In the case where the result set is not empty. The returned results are divided into the following situations:"),(0,r.kt)("ol",{parentName:"li"},(0,r.kt)("li",{parentName:"ol"},"Insert executes successfully and is visible:")))),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"     ```sql\n     mysql> insert into tbl1 select * from tbl2;\n     Query OK, 4 rows affected (0.38 sec)\n     {'label':'insert_8510c568-9eda-4173-9e36-6adc7d35291c', 'status':'visible', 'txnId':'4005'}\n     \n     mysql> insert into tbl1 with label my_label1 select * from tbl2;\n     Query OK, 4 rows affected (0.38 sec)\n     {'label':'my_label1', 'status':'visible', 'txnId':'4005'}\n     \n     mysql> insert into tbl1 select * from tbl2;\n     Query OK, 2 rows affected, 2 warnings (0.31 sec)\n     {'label':'insert_f0747f0e-7a35-46e2-affa-13a235f4020d', 'status':'visible', 'txnId':'4005'}\n     \n     mysql> insert into tbl1 select * from tbl2;\n     Query OK, 2 rows affected, 2 warnings (0.31 sec)\n     {'label':'insert_f0747f0e-7a35-46e2-affa-13a235f4020d', 'status':'committed', 'txnId':'4005'}\n     ````\n\n     `Query OK` indicates successful execution. `4 rows affected` means that a total of 4 rows of data were imported. `2 warnings` indicates the number of lines to be filtered.\n\n     Also returns a json string:\n\n     \n\n     ````json\n     {'label':'my_label1', 'status':'visible', 'txnId':'4005'}\n     {'label':'insert_f0747f0e-7a35-46e2-affa-13a235f4020d', 'status':'committed', 'txnId':'4005'}\n     {'label':'my_label1', 'status':'visible', 'txnId':'4005', 'err':'some other error'}\n     ````\n\n     `label` is a user-specified label or an automatically generated label. Label is the ID of this Insert Into import job. Each import job has a unique Label within a single database.\n\n     `status` indicates whether the imported data is visible. Show `visible` if visible, `committed` if not visible.\n\n     `txnId` is the id of the import transaction corresponding to this insert.\n\n     The `err` field shows some other unexpected errors.\n\n     When you need to view the filtered rows, the user can pass the following statement\n\n     \n\n     ```sql\n     show load where label=\"xxx\";\n     ````\n\n     The URL in the returned result can be used to query the wrong data. For details, see the summary of **Viewing Error Lines** later.\n\n     **Invisibility of data is a temporary state, this batch of data will eventually be visible**\n\n     You can view the visible status of this batch of data with the following statement:\n\n     \n\n     ```sql\n     show transaction where id=4005;\n     ````\n\n     If the `TransactionStatus` column in the returned result is `visible`, the representation data is visible.\n")),(0,r.kt)("ol",{start:3},(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Execution failed"),(0,r.kt)("p",{parentName:"li"},"Execution failure indicates that no data was successfully imported, and the following is returned:"))),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},'  ```sql\n  mysql> insert into tbl1 select * from tbl2 where k1 = "a";\n  ERROR 1064 (HY000): all partitions have no load data. url: http://10.74.167.16:8042/api/_load_error_log?file=__shard_2/error_log_insert_stmt_ba8bb9e158e4879-ae8de8507c0bf8a2_ba8bb9e158e4879_ae8de8507c0\n  ````\n\n  Where `ERROR 1064 (HY000): all partitions have no load data` shows the reason for the failure. The following url can be used to query the wrong data:\n\n  \n\n  ```sql\n  show load warnings on "url";\n  ````\n\n  You can view the specific error line.\n')),(0,r.kt)("ol",{start:2},(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Timeout time"),(0,r.kt)("p",{parentName:"li"},"The timeout for INSERT operations is controlled by ",(0,r.kt)("a",{parentName:"p",href:"/docs/advanced/variables"},"session variable")," ",(0,r.kt)("inlineCode",{parentName:"p"},"query_timeout"),". The default is 5 minutes. If it times out, the job will be canceled.")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Label and atomicity"),(0,r.kt)("p",{parentName:"li"},"The INSERT operation also guarantees the atomicity of imports, see the ",(0,r.kt)("a",{parentName:"p",href:"/docs/data-operate/import/import-scenes/load-atomicity"},"Import Transactions and Atomicity")," documentation."),(0,r.kt)("p",{parentName:"li"},"When using ",(0,r.kt)("inlineCode",{parentName:"p"},"CTE(Common Table Expressions)")," as the query part in an insert operation, the ",(0,r.kt)("inlineCode",{parentName:"p"},"WITH LABEL")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"column")," parts must be specified.")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Filter Threshold"),(0,r.kt)("p",{parentName:"li"},"Unlike other import methods, INSERT operations cannot specify a filter threshold (",(0,r.kt)("inlineCode",{parentName:"p"},"max_filter_ratio"),"). The default filter threshold is 1, which means that rows with errors can be ignored."),(0,r.kt)("p",{parentName:"li"},"For business scenarios that require data not to be filtered, you can set ",(0,r.kt)("a",{parentName:"p",href:"/docs/advanced/variables"},"session variable")," ",(0,r.kt)("inlineCode",{parentName:"p"},"enable_insert_strict")," to ",(0,r.kt)("inlineCode",{parentName:"p"},"true")," to ensure that when there is data When filtered out, ",(0,r.kt)("inlineCode",{parentName:"p"},"INSERT")," will not be executed successfully.")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Performance issues"),(0,r.kt)("p",{parentName:"li"},"There is no single row insertion using the ",(0,r.kt)("inlineCode",{parentName:"p"},"VALUES")," method. If you must use it this way, combine multiple rows of data into one INSERT statement for bulk commit."))))}c.isMDXComponent=!0}}]);