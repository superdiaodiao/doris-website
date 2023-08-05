"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([[18183],{3905:(e,t,a)=>{a.d(t,{Zo:()=>m,kt:()=>h});var n=a(67294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function l(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?l(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function i(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},l=Object.keys(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var s=n.createContext({}),p=function(e){var t=n.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},m=function(e){var t=p(e.components);return n.createElement(s.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},c=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,l=e.originalType,s=e.parentName,m=i(e,["components","mdxType","originalType","parentName"]),u=p(a),c=r,h=u["".concat(s,".").concat(c)]||u[c]||d[c]||l;return a?n.createElement(h,o(o({ref:t},m),{},{components:a})):n.createElement(h,o({ref:t},m))}));function h(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=a.length,o=new Array(l);o[0]=c;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i[u]="string"==typeof e?e:r,o[1]=i;for(var p=2;p<l;p++)o[p]=a[p];return n.createElement.apply(null,o)}return n.createElement.apply(null,a)}c.displayName="MDXCreateElement"},59700:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>s,contentTitle:()=>o,default:()=>d,frontMatter:()=>l,metadata:()=>i,toc:()=>p});var n=a(87462),r=(a(67294),a(3905));const l={title:"EXPORT",language:"en"},o=void 0,i={unversionedId:"sql-manual/sql-reference/Data-Manipulation-Statements/Manipulation/EXPORT",id:"sql-manual/sql-reference/Data-Manipulation-Statements/Manipulation/EXPORT",title:"EXPORT",description:"\x3c!--",source:"@site/docs/sql-manual/sql-reference/Data-Manipulation-Statements/Manipulation/EXPORT.md",sourceDirName:"sql-manual/sql-reference/Data-Manipulation-Statements/Manipulation",slug:"/sql-manual/sql-reference/Data-Manipulation-Statements/Manipulation/EXPORT",permalink:"/docs/dev/sql-manual/sql-reference/Data-Manipulation-Statements/Manipulation/EXPORT",draft:!1,tags:[],version:"current",frontMatter:{title:"EXPORT",language:"en"},sidebar:"docs",previous:{title:"UPDATE",permalink:"/docs/dev/sql-manual/sql-reference/Data-Manipulation-Statements/Manipulation/UPDATE"},next:{title:"CANCEL-EXPORT",permalink:"/docs/dev/sql-manual/sql-reference/Data-Manipulation-Statements/Manipulation/CANCEL-EXPORT"}},s={},p=[{value:"EXPORT",id:"export",level:2},{value:"Name",id:"name",level:3},{value:"Description",id:"description",level:3},{value:"Example",id:"example",level:3},{value:"export to local",id:"export-to-local",level:4},{value:"export with S3",id:"export-with-s3",level:4},{value:"export with HDFS",id:"export-with-hdfs",level:4},{value:"export with Broker",id:"export-with-broker",level:4},{value:"Keywords",id:"keywords",level:3},{value:"Best Practice",id:"best-practice",level:3}],m={toc:p},u="wrapper";function d(e){let{components:t,...a}=e;return(0,r.kt)(u,(0,n.Z)({},m,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h2",{id:"export"},"EXPORT"),(0,r.kt)("h3",{id:"name"},"Name"),(0,r.kt)("p",null,"EXPORT"),(0,r.kt)("h3",{id:"description"},"Description"),(0,r.kt)("p",null,"This statement is used to export the data of the specified table to the specified location."),(0,r.kt)("p",null,"This is an asynchronous operation that returns if the task is submitted successfully. After execution, you can use the ",(0,r.kt)("a",{parentName:"p",href:"/docs/dev/sql-manual/sql-reference/Show-Statements/SHOW-EXPORT"},"SHOW EXPORT")," command to view the progress."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sql"},"EXPORT TABLE table_name\n[PARTITION (p1[,p2])]\n[WHERE]\nTO export_path\n[opt_properties]\nWITH BROKER/S3/HDFS\n[broker_properties];\n")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"principle")),(0,r.kt)("p",null,"The bottom layer of the ",(0,r.kt)("inlineCode",{parentName:"p"},"Export")," statement actually executes the ",(0,r.kt)("inlineCode",{parentName:"p"},"select...outfile..")," statement. The ",(0,r.kt)("inlineCode",{parentName:"p"},"Export")," task will be decomposed into multiple ",(0,r.kt)("inlineCode",{parentName:"p"},"select...outfile..")," statements to execute concurrently according to the value of the ",(0,r.kt)("inlineCode",{parentName:"p"},"parallelism")," parameter. Each ",(0,r.kt)("inlineCode",{parentName:"p"},"select...outfile..")," is responsible for exporting some tablets of table."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"illustrate:")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"p"},"table_name")),(0,r.kt)("p",{parentName:"li"},"The table name of the table currently being exported. Only the export of Doris local table data is supported.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"p"},"partition")),(0,r.kt)("p",{parentName:"li"},"It is possible to export only some specified partitions of the specified table")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"p"},"export_path")),(0,r.kt)("p",{parentName:"li"},"The exported file path can be a directory or a file directory with a file prefix, for example: ",(0,r.kt)("inlineCode",{parentName:"p"},"hdfs://path/to/my_file_"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"p"},"opt_properties")),(0,r.kt)("p",{parentName:"li"},"Used to specify some export parameters."),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-sql"},'[PROPERTIES ("key"="value", ...)]\n')),(0,r.kt)("p",{parentName:"li"},"The following parameters can be specified:"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"label"),": This parameter is optional, specifies the label of the export task. If this parameter is not specified, the system randomly assigns a label to the export task."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"column_separator"),": Specifies the exported column separator, default is \\t. Only single byte is supported."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"line_delimiter"),": Specifies the line delimiter for export, the default is \\n. Only single byte is supported."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"timeout"),": The timeout period of the export job, the default is 2 hours, the unit is seconds."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"columns"),": Specifies certain columns of the export job table"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"format"),": Specifies the file format, support: parquet, orc, csv, csv_with_names, csv_with_names_and_types.The default is csv format."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"parallelism"),": The concurrency degree of the ",(0,r.kt)("inlineCode",{parentName:"li"},"export")," job, the default is ",(0,r.kt)("inlineCode",{parentName:"li"},"1"),". The export job will be divided into ",(0,r.kt)("inlineCode",{parentName:"li"},"select..outfile..")," statements of the number of ",(0,r.kt)("inlineCode",{parentName:"li"},"parallelism")," to execute concurrently. (If the value of ",(0,r.kt)("inlineCode",{parentName:"li"},"parallelism")," is greater than the number of tablets in the table, the system will automatically set ",(0,r.kt)("inlineCode",{parentName:"li"},"parallelism")," to the number of tablets, that is, each ",(0,r.kt)("inlineCode",{parentName:"li"},"select..outfile..")," statement is responsible for one tablet)"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"delete_existing_files"),": default ",(0,r.kt)("inlineCode",{parentName:"li"},"false"),'. If it is specified as true, you will first delete all files specified in the directory specified by the file_path, and then export the data to the directory.For example: "file_path" = "/user/tmp", then delete all files and directory under "/user/"; "file_path" = "/user/tmp/", then delete all files and directory under "/user/tmp/"')),(0,r.kt)("blockquote",{parentName:"li"},(0,r.kt)("p",{parentName:"blockquote"},"Note that to use the ",(0,r.kt)("inlineCode",{parentName:"p"},"delete_existing_files")," parameter, you also need to add the configuration ",(0,r.kt)("inlineCode",{parentName:"p"},"enable_delete_existing_files = true")," to the fe.conf file and restart the FE. Only then will the ",(0,r.kt)("inlineCode",{parentName:"p"},"delete_existing_files")," parameter take effect. Setting ",(0,r.kt)("inlineCode",{parentName:"p"},"delete_existing_files = true")," is a dangerous operation and it is recommended to only use it in a testing environment."))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"p"},"WITH BROKER")),(0,r.kt)("p",{parentName:"li"},"The export function needs to write data to the remote storage through the Broker process. Here you need to define the relevant connection information for the broker to use."),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-sql"},'WITH BROKER "broker_name"\n("key"="value"[,...])\n\nBroker related properties:\n      username: user name\n      password: password\n      hadoop.security.authentication: specify the authentication method as kerberos\n      kerberos_principal: specifies the principal of kerberos\n      kerberos_keytab: specifies the path to the keytab file of kerberos. The file must be the absolute path to the file on the server where the broker process is located. and can be accessed by the Broker process\n'))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"p"},"WITH HDFS")),(0,r.kt)("p",{parentName:"li"},"You can directly write data to the remote HDFS."))),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sql"},'WITH HDFS ("key"="value"[,...])\n\nHDFS related properties:\n      fs.defaultFS: namenode address and port\n      hadoop.username: hdfs username\n      dfs.nameservices: if hadoop enable HA, please set fs nameservice. See hdfs-site.xml\n      dfs.ha.namenodes.[nameservice ID]\uff1aunique identifiers for each NameNode in the nameservice. See hdfs-site.xml\n      dfs.namenode.rpc-address.[nameservice ID].[name node ID]: the fully-qualified RPC address for each NameNode to listen on. See hdfs-site.xml\n      dfs.client.failover.proxy.provider.[nameservice ID]\uff1athe Java class that HDFS clients use to contact the Active NameNode, usually it is org.apache.hadoop.hdfs.server.namenode.ha.ConfiguredFailoverProxyProvider\n\n      For a kerberos-authentication enabled Hadoop cluster, additional properties need to be set:\n      dfs.namenode.kerberos.principal: HDFS namenode service principal\n      hadoop.security.authentication: kerberos\n      hadoop.kerberos.principal: the Kerberos pincipal that Doris will use when connectiong to HDFS.\n      hadoop.kerberos.keytab: HDFS client keytab location.\n')),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"p"},"WITH S3")),(0,r.kt)("p",{parentName:"li"},"You can directly write data to a remote S3 object store"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-sql"},'WITH S3 ("key"="value"[,...])\n\nS3 related properties:\n  AWS_ENDPOINT\n  AWS_ACCESS_KEY\n  AWS_SECRET_KEY\n  AWS_REGION\n  use_path_stype: (optional) default false . The S3 SDK uses the virtual-hosted style by default. However, some object storage systems may not be enabled or support virtual-hosted style access. At this time, we can add the use_path_style parameter to force the use of path style access method.\n')))),(0,r.kt)("h3",{id:"example"},"Example"),(0,r.kt)("h4",{id:"export-to-local"},"export to local"),(0,r.kt)("p",null,"Export data to the local file system needs to add ",(0,r.kt)("inlineCode",{parentName:"p"},"enable_outfile_to_local = true")," to the fe.conf and restart the Fe."),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"You can export the ",(0,r.kt)("inlineCode",{parentName:"li"},"test")," table to a local store. Export csv format file by default.")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sql"},'EXPORT TABLE test TO "file:///home/user/tmp/";\n')),(0,r.kt)("ol",{start:2},(0,r.kt)("li",{parentName:"ol"},"You can export the k1 and k2 columns in ",(0,r.kt)("inlineCode",{parentName:"li"},"test")," table to a local store, and set export label. Export csv format file by default.")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sql"},'EXPORT TABLE test TO "file:///home/user/tmp/"\nPROPERTIES (\n  "label" = "label1",\n  "columns" = "k1,k2"\n);\n')),(0,r.kt)("ol",{start:3},(0,r.kt)("li",{parentName:"ol"},"You can export the rows where ",(0,r.kt)("inlineCode",{parentName:"li"},"k1 < 50")," in ",(0,r.kt)("inlineCode",{parentName:"li"},"test")," table to a local store, and set column_separator to ",(0,r.kt)("inlineCode",{parentName:"li"},","),". Export csv format file by default.")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sql"},'EXPORT TABLE test WHERE k1 < 50 TO "file:///home/user/tmp/"\nPROPERTIES (\n  "columns" = "k1,k2",\n  "column_separator"=","\n);\n')),(0,r.kt)("ol",{start:4},(0,r.kt)("li",{parentName:"ol"},"Export partitions p1 and p2 from the test table to local storage, with the default exported file format being csv.")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sql"},'EXPORT TABLE test PARTITION (p1,p2) TO "file:///home/user/tmp/" \nPROPERTIES ("columns" = "k1,k2");\n')),(0,r.kt)("ol",{start:5},(0,r.kt)("li",{parentName:"ol"},"Export all data in the test table to local storage with a non-default file format.")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sql"},'// parquet file format\nEXPORT TABLE test TO "file:///home/user/tmp/"\nPROPERTIES (\n  "columns" = "k1,k2",\n  "format" = "parquet"\n);\n\n// orc file format\nEXPORT TABLE test TO "file:///home/user/tmp/"\nPROPERTIES (\n  "columns" = "k1,k2",\n  "format" = "orc"\n);\n\n// csv_with_names file format. Using \'AA\' as the column delimiter and \'zz\' as the line delimiter.\nEXPORT TABLE test TO "file:///home/user/tmp/"\nPROPERTIES (\n  "format" = "csv_with_names",\n  "column_separator"="AA",\n  "line_delimiter" = "zz"\n);\n\n// csv_with_names_and_types file format\nEXPORT TABLE test TO "file:///home/user/tmp/"\nPROPERTIES (\n  "format" = "csv_with_names_and_types"\n);\n\n')),(0,r.kt)("ol",{start:6},(0,r.kt)("li",{parentName:"ol"},"set max_file_sizes")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sql"},'EXPORT TABLE test TO "file:///home/user/tmp/"\nPROPERTIES (\n  "format" = "parquet",\n  "max_file_size" = "5MB"\n);\n')),(0,r.kt)("p",null,"When the exported file size is larger than 5MB, the data will be split into multiple files, with each file containing a maximum of 5MB."),(0,r.kt)("ol",{start:7},(0,r.kt)("li",{parentName:"ol"},"set parallelism")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sql"},'EXPORT TABLE test TO "file:///home/user/tmp/"\nPROPERTIES (\n  "format" = "parquet",\n  "max_file_size" = "5MB",\n  "parallelism" = "5"\n);\n')),(0,r.kt)("ol",{start:8},(0,r.kt)("li",{parentName:"ol"},"set delete_existing_files")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sql"},'EXPORT TABLE test TO "file:///home/user/tmp"\nPROPERTIES (\n  "format" = "parquet",\n  "max_file_size" = "5MB",\n  "delete_existing_files" = "true"\n)\n')),(0,r.kt)("p",null,"Before exporting data, all files and directories in the ",(0,r.kt)("inlineCode",{parentName:"p"},"/home/user/")," directory will be deleted, and then the data will be exported to that directory."),(0,r.kt)("h4",{id:"export-with-s3"},"export with S3"),(0,r.kt)("ol",{start:8},(0,r.kt)("li",{parentName:"ol"},"Export all data from the ",(0,r.kt)("inlineCode",{parentName:"li"},"testTbl")," table to S3 using invisible character '\\x07' as a delimiter for columns and rows.If you want to export data to minio, you also need to specify use_path_style=true.")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sql"},'EXPORT TABLE testTbl TO "s3://bucket/a/b/c" \nPROPERTIES (\n  "column_separator"="\\\\x07", \n  "line_delimiter" = "\\\\x07"\n) WITH s3 (\n  "AWS_ENDPOINT" = "xxxxx",\n  "AWS_ACCESS_KEY" = "xxxxx",\n  "AWS_SECRET_KEY"="xxxx",\n  "AWS_REGION" = "xxxxx"\n)\n')),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sql"},'EXPORT TABLE minio_test TO "s3://bucket/a/b/c" \nPROPERTIES (\n  "column_separator"="\\\\x07", \n  "line_delimiter" = "\\\\x07"\n) WITH s3 (\n  "AWS_ENDPOINT" = "xxxxx",\n  "AWS_ACCESS_KEY" = "xxxxx",\n  "AWS_SECRET_KEY"="xxxx",\n  "AWS_REGION" = "xxxxx",\n  "use_path_style" = "true"\n)\n')),(0,r.kt)("ol",{start:9},(0,r.kt)("li",{parentName:"ol"},"Export all data in the test table to HDFS in the format of parquet, limit the size of a single file to 1024MB, and reserve all files in the specified directory.")),(0,r.kt)("h4",{id:"export-with-hdfs"},"export with HDFS"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sql"},'EXPORT TABLE test TO "hdfs://hdfs_host:port/a/b/c/" \nPROPERTIES(\n    "format" = "parquet",\n    "max_file_size" = "1024MB",\n    "delete_existing_files" = "false"\n)\nwith HDFS (\n"fs.defaultFS"="hdfs://hdfs_host:port",\n"hadoop.username" = "hadoop"\n);\n')),(0,r.kt)("h4",{id:"export-with-broker"},"export with Broker"),(0,r.kt)("p",null,"You need to first start the broker process and add it to the FE before proceeding."),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Export the ",(0,r.kt)("inlineCode",{parentName:"li"},"test")," table to hdfs")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sql"},'EXPORT TABLE test TO "hdfs://hdfs_host:port/a/b/c" \nWITH BROKER "broker_name" \n(\n  "username"="xxx",\n  "password"="yyy"\n);\n')),(0,r.kt)("ol",{start:2},(0,r.kt)("li",{parentName:"ol"},"Export partitions 'p1' and 'p2' from the 'testTbl' table to HDFS using ',' as the column delimiter and specifying a label.")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sql"},'EXPORT TABLE testTbl PARTITION (p1,p2) TO "hdfs://hdfs_host:port/a/b/c" \nPROPERTIES (\n  "label" = "mylabel",\n  "column_separator"=","\n) \nWITH BROKER "broker_name" \n(\n  "username"="xxx",\n  "password"="yyy"\n);\n')),(0,r.kt)("ol",{start:3},(0,r.kt)("li",{parentName:"ol"},"Export all data from the 'testTbl' table to HDFS using the non-visible character '\\x07' as the column and row delimiter.")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sql"},'EXPORT TABLE testTbl TO "hdfs://hdfs_host:port/a/b/c" \nPROPERTIES (\n  "column_separator"="\\\\x07", \n  "line_delimiter" = "\\\\x07"\n) \nWITH BROKER "broker_name" \n(\n  "username"="xxx", \n  "password"="yyy"\n)\n')),(0,r.kt)("h3",{id:"keywords"},"Keywords"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"EXPORT\n")),(0,r.kt)("h3",{id:"best-practice"},"Best Practice"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Splitting of subtasks"),(0,r.kt)("p",{parentName:"li"},"An Export job will be split into multiple subtasks (execution plans) to execute. How many query plans need to be executed depends on how many tablets there are in total, and how many tablets can be allocated to a query plan."),(0,r.kt)("p",{parentName:"li"},"Because multiple query plans are executed serially, the execution time of the job can be reduced if one query plan handles more shards."),(0,r.kt)("p",{parentName:"li"},"However, if there is an error in the query plan (such as the failure of the RPC calling the broker, the jitter in the remote storage, etc.), too many Tablets will lead to a higher retry cost of a query plan."),(0,r.kt)("p",{parentName:"li"},"Therefore, it is necessary to reasonably arrange the number of query plans and the number of shards that each query plan needs to scan, so as to balance the execution time and the execution success rate."),(0,r.kt)("p",{parentName:"li"},"It is generally recommended that the amount of data scanned by a query plan is within 3-5 GB."),(0,r.kt)("h4",{parentName:"li",id:"memory-limit"},"memory limit"),(0,r.kt)("p",{parentName:"li"},"Usually, the query plan of an Export job has only two parts of ",(0,r.kt)("inlineCode",{parentName:"p"},"scan-export"),", which does not involve calculation logic that requires too much memory. So usually the default memory limit of 2GB suffices."),(0,r.kt)("p",{parentName:"li"},"However, in some scenarios, such as a query plan, too many Tablets need to be scanned on the same BE, or too many Tablet data versions may cause insufficient memory. At this point, you need to set a larger memory, such as 4GB, 8GB, etc., through the ",(0,r.kt)("inlineCode",{parentName:"p"},"exec_mem_limit")," parameter."),(0,r.kt)("h4",{parentName:"li",id:"precautions"},"Precautions"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"Exporting a large amount of data at one time is not recommended. The maximum recommended export data volume for an Export job is several tens of GB. An overly large export results in more junk files and higher retry costs. If the amount of table data is too large, it is recommended to export by partition."),(0,r.kt)("li",{parentName:"ul"},"If the Export job fails, the generated files will not be deleted, and the user needs to delete it manually."),(0,r.kt)("li",{parentName:"ul"},"The Export job only exports the data of the Base table, not the data of the materialized view."),(0,r.kt)("li",{parentName:"ul"},"The export job scans data and occupies IO resources, which may affect the query latency of the system."),(0,r.kt)("li",{parentName:"ul"},"The maximum number of export jobs running simultaneously in a cluster is 5. Only jobs submitted after that will be queued."),(0,r.kt)("li",{parentName:"ul"},"Currently, The ",(0,r.kt)("inlineCode",{parentName:"li"},"Export Job")," is simply check whether the ",(0,r.kt)("inlineCode",{parentName:"li"},"Tablets version")," is the same, it is recommended not to import data during the execution of the ",(0,r.kt)("inlineCode",{parentName:"li"},"Export Job"),"."),(0,r.kt)("li",{parentName:"ul"},"The maximum parallelism of all ",(0,r.kt)("inlineCode",{parentName:"li"},"Export jobs")," in a cluster is ",(0,r.kt)("inlineCode",{parentName:"li"},"50"),". You can change the value by adding the parameter ",(0,r.kt)("inlineCode",{parentName:"li"},"maximum_parallelism_of_export_job")," to fe.conf and restart FE."),(0,r.kt)("li",{parentName:"ul"},"The maximum number of partitions that an ",(0,r.kt)("inlineCode",{parentName:"li"},"Export job")," allows is 2000. You can add a parameter to the fe.conf ",(0,r.kt)("inlineCode",{parentName:"li"},"maximum_number_of_export_partitions")," and restart FE to modify the setting.")))))}d.isMDXComponent=!0}}]);