"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([[95755],{15680:(e,t,n)=>{n.d(t,{xA:()=>u,yg:()=>m});var a=n(296540);function l(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){l(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,l=function(e,t){if(null==e)return{};var n,a,l={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(l[n]=e[n]);return l}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(l[n]=e[n])}return l}var o=a.createContext({}),p=function(e){var t=a.useContext(o),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=p(e.components);return a.createElement(o.Provider,{value:t},e.children)},y="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},g=a.forwardRef((function(e,t){var n=e.components,l=e.mdxType,r=e.originalType,o=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),y=p(n),g=l,m=y["".concat(o,".").concat(g)]||y[g]||c[g]||r;return n?a.createElement(m,i(i({ref:t},u),{},{components:n})):a.createElement(m,i({ref:t},u))}));function m(e,t){var n=arguments,l=t&&t.mdxType;if("string"==typeof e||l){var r=n.length,i=new Array(r);i[0]=g;var s={};for(var o in t)hasOwnProperty.call(t,o)&&(s[o]=t[o]);s.originalType=e,s[y]="string"==typeof e?e:l,i[1]=s;for(var p=2;p<r;p++)i[p]=n[p];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}g.displayName="MDXCreateElement"},309292:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>o,contentTitle:()=>i,default:()=>c,frontMatter:()=>r,metadata:()=>s,toc:()=>p});var a=n(58168),l=(n(296540),n(15680));const r={title:"Table Value Function (TVF)",language:"en"},i=void 0,s={unversionedId:"lakehouse/file",id:"version-2.0/lakehouse/file",title:"Table Value Function (TVF)",description:"\x3c!--",source:"@site/versioned_docs/version-2.0/lakehouse/file.md",sourceDirName:"lakehouse",slug:"/lakehouse/file",permalink:"/docs/2.0/lakehouse/file",draft:!1,tags:[],version:"2.0",frontMatter:{title:"Table Value Function (TVF)",language:"en"},sidebar:"docs",previous:{title:"Alibaba Cloud Max Compute",permalink:"/docs/2.0/lakehouse/database/max-compute"},next:{title:"File Cache",permalink:"/docs/2.0/lakehouse/filecache"}},o={},p=[{value:"Usage",id:"usage",level:2},{value:"Automatic Column Type Inference",id:"automatic-column-type-inference",level:3},{value:"Query and Analysis",id:"query-and-analysis",level:3},{value:"Data Ingestion",id:"data-ingestion",level:3},{value:"Note",id:"note",level:3}],u={toc:p},y="wrapper";function c(e){let{components:t,...n}=e;return(0,l.yg)(y,(0,a.A)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,l.yg)("p",null,"With the Table Value Function feature, Doris is able to query files in object storage or HDFS as simply as querying Tables. In addition, it supports automatic column type inference."),(0,l.yg)("h2",{id:"usage"},"Usage"),(0,l.yg)("p",null,"For more usage details, please see the documentation:"),(0,l.yg)("ul",null,(0,l.yg)("li",{parentName:"ul"},(0,l.yg)("p",{parentName:"li"},(0,l.yg)("a",{parentName:"p",href:"https://doris.apache.org/docs/dev/sql-manual/sql-functions/table-functions/s3/"},"S3"),": supports file analysis on object storage compatible with S3")),(0,l.yg)("li",{parentName:"ul"},(0,l.yg)("p",{parentName:"li"},(0,l.yg)("a",{parentName:"p",href:"https://doris.apache.org/docs/dev/sql-manual/sql-functions/table-functions/hdfs/"},"HDFS"),": supports file analysis on HDFS"))),(0,l.yg)("p",null,"The followings illustrate how file analysis is conducted with the example of S3 Table Value Function."),(0,l.yg)("h3",{id:"automatic-column-type-inference"},"Automatic Column Type Inference"),(0,l.yg)("pre",null,(0,l.yg)("code",{parentName:"pre",className:"language-sql"},'> DESC FUNCTION s3 (\n    "URI" = "http://127.0.0.1:9312/test2/test.snappy.parquet",\n    "s3.access_key"= "ak",\n    "s3.secret_key" = "sk",\n    "format" = "parquet",\n    "use_path_style"="true"\n);\n+---------------+--------------+------+-------+---------+-------+\n| Field         | Type         | Null | Key   | Default | Extra |\n+---------------+--------------+------+-------+---------+-------+\n| p_partkey     | INT          | Yes  | false | NULL    | NONE  |\n| p_name        | TEXT         | Yes  | false | NULL    | NONE  |\n| p_mfgr        | TEXT         | Yes  | false | NULL    | NONE  |\n| p_brand       | TEXT         | Yes  | false | NULL    | NONE  |\n| p_type        | TEXT         | Yes  | false | NULL    | NONE  |\n| p_size        | INT          | Yes  | false | NULL    | NONE  |\n| p_container   | TEXT         | Yes  | false | NULL    | NONE  |\n| p_retailprice | DECIMAL(9,0) | Yes  | false | NULL    | NONE  |\n| p_comment     | TEXT         | Yes  | false | NULL    | NONE  |\n+---------------+--------------+------+-------+---------+-------+\n')),(0,l.yg)("p",null,"An S3 Table Value Function is defined as follows:"),(0,l.yg)("pre",null,(0,l.yg)("code",{parentName:"pre",className:"language-sql"},'s3(\n    "URI" = "http://127.0.0.1:9312/test2/test.snappy.parquet",\n    "s3.access_key"= "ak",\n    "s3.secret_key" = "sk",\n    "Format" = "parquet",\n    "use_path_style"="true")\n')),(0,l.yg)("p",null,"It specifies the file path, connection, and authentication."),(0,l.yg)("p",null,"After defining, you can view the schema of this file using the ",(0,l.yg)("inlineCode",{parentName:"p"},"DESC FUNCTION")," statement."),(0,l.yg)("p",null,"As can be seen, Doris is able to automatically infer column types based on the metadata of the Parquet file."),(0,l.yg)("p",null,"Besides Parquet, Doris supports analysis and auto column type inference of ORC, CSV, and Json files."),(0,l.yg)("p",null,(0,l.yg)("strong",{parentName:"p"},"CSV Schema")),(0,l.yg)("p",null,"By default, for CSV format files, all columns are of type String. Column names and column types can be specified individually via the ",(0,l.yg)("inlineCode",{parentName:"p"},"csv_schema")," attribute. Doris will use the specified column type for file reading. The format is as follows:"),(0,l.yg)("p",null,(0,l.yg)("inlineCode",{parentName:"p"},"name1:type1;name2:type2;...")),(0,l.yg)("p",null,"For columns with mismatched formats (such as string in the file and int defined by the user), or missing columns (such as 4 columns in the file and 5 columns defined by the user), these columns will return null."),(0,l.yg)("p",null,"Currently supported column types are:"),(0,l.yg)("table",null,(0,l.yg)("thead",{parentName:"table"},(0,l.yg)("tr",{parentName:"thead"},(0,l.yg)("th",{parentName:"tr",align:null},"name"),(0,l.yg)("th",{parentName:"tr",align:null},"mapping type"))),(0,l.yg)("tbody",{parentName:"table"},(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},"tinyint"),(0,l.yg)("td",{parentName:"tr",align:null},"tinyint")),(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},"smallint"),(0,l.yg)("td",{parentName:"tr",align:null},"smallint")),(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},"int"),(0,l.yg)("td",{parentName:"tr",align:null},"int")),(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},"bigint"),(0,l.yg)("td",{parentName:"tr",align:null},"bigint")),(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},"largeint"),(0,l.yg)("td",{parentName:"tr",align:null},"largeint")),(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},"float"),(0,l.yg)("td",{parentName:"tr",align:null},"float")),(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},"double"),(0,l.yg)("td",{parentName:"tr",align:null},"double")),(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},"decimal(p,s)"),(0,l.yg)("td",{parentName:"tr",align:null},"decimalv3(p,s)")),(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},"date"),(0,l.yg)("td",{parentName:"tr",align:null},"datev2")),(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},"datetime"),(0,l.yg)("td",{parentName:"tr",align:null},"datetimev2")),(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},"char"),(0,l.yg)("td",{parentName:"tr",align:null},"string")),(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},"varchar"),(0,l.yg)("td",{parentName:"tr",align:null},"string")),(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},"string"),(0,l.yg)("td",{parentName:"tr",align:null},"string")),(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},"boolean"),(0,l.yg)("td",{parentName:"tr",align:null},"boolean")))),(0,l.yg)("p",null,"Example:"),(0,l.yg)("pre",null,(0,l.yg)("code",{parentName:"pre",className:"language-sql"},'s3 (\n    "uri" = "https://bucket1/inventory.dat",\n    "s3.access_key"= "ak",\n    "s3.secret_key" = "sk",\n    "format" = "csv",\n    "column_separator" = "|",\n    "csv_schema" = "k1:int;k2:int;k3:int;k4:decimal(38,10)",\n    "use_path_style"="true"\n)\n')),(0,l.yg)("h3",{id:"query-and-analysis"},"Query and Analysis"),(0,l.yg)("p",null,"You can conduct queries and analysis on this Parquet file using any SQL statements:"),(0,l.yg)("pre",null,(0,l.yg)("code",{parentName:"pre",className:"language-sql"},'SELECT * FROM s3(\n    "uri" = "http://127.0.0.1:9312/test2/test.snappy.parquet",\n    "s3.access_key"= "ak",\n    "s3.secret_key" = "sk",\n    "format" = "parquet",\n    "use_path_style"="true")\nLIMIT 5;\n+-----------+------------------------------------------+----------------+----------+-------------------------+--------+-------------+---------------+---------------------+\n| p_partkey | p_name                                   | p_mfgr         | p_brand  | p_type                  | p_size | p_container | p_retailprice | p_comment           |\n+-----------+------------------------------------------+----------------+----------+-------------------------+--------+-------------+---------------+---------------------+\n|         1 | goldenrod lavender spring chocolate lace | Manufacturer#1 | Brand#13 | PROMO BURNISHED COPPER  |      7 | JUMBO PKG   |           901 | ly. slyly ironi     |\n|         2 | blush thistle blue yellow saddle         | Manufacturer#1 | Brand#13 | LARGE BRUSHED BRASS     |      1 | LG CASE     |           902 | lar accounts amo    |\n|         3 | spring green yellow purple cornsilk      | Manufacturer#4 | Brand#42 | STANDARD POLISHED BRASS |     21 | WRAP CASE   |           903 | egular deposits hag |\n|         4 | cornflower chocolate smoke green pink    | Manufacturer#3 | Brand#34 | SMALL PLATED BRASS      |     14 | MED DRUM    |           904 | p furiously r       |\n|         5 | forest brown coral puff cream            | Manufacturer#3 | Brand#32 | STANDARD POLISHED TIN   |     15 | SM PKG      |           905 |  wake carefully     |\n+-----------+------------------------------------------+----------------+----------+-------------------------+--------+-------------+---------------+---------------------+\n')),(0,l.yg)("p",null,"You can put the Table Value Function anywhere that you used to put Table in the SQL, such as in the WITH or FROM clause in CTE. In this way, you can treat the file as a normal table and conduct analysis conveniently."),(0,l.yg)("p",null,"You can also create a logic view by using ",(0,l.yg)("inlineCode",{parentName:"p"},"CREATE VIEW")," statement for a Table Value Function. So that you can query this view, grant priv on this view or allow other user to access this Table Value Function."),(0,l.yg)("pre",null,(0,l.yg)("code",{parentName:"pre",className:"language-sql"},'CREATE VIEW v1 AS \nSELECT * FROM s3(\n    "uri" = "http://127.0.0.1:9312/test2/test.snappy.parquet",\n    "s3.access_key"= "ak",\n    "s3.secret_key" = "sk",\n    "format" = "parquet",\n    "use_path_style"="true");\n\nDESC v1;\n\nSELECT * FROM v1;\n\nGRANT SELECT_PRIV ON db1.v1 TO user1;\n')),(0,l.yg)("h3",{id:"data-ingestion"},"Data Ingestion"),(0,l.yg)("p",null,"Users can ingest files into Doris tables via  ",(0,l.yg)("inlineCode",{parentName:"p"},"INSERT INTO SELECT"),"  for faster file analysis:"),(0,l.yg)("pre",null,(0,l.yg)("code",{parentName:"pre",className:"language-sql"},'// 1. Create Doris internal table\nCREATE TABLE IF NOT EXISTS test_table\n(\n    id int,\n    name varchar(50),\n    age int\n)\nDISTRIBUTED BY HASH(id) BUCKETS 4\nPROPERTIES("replication_num" = "1");\n\n// 2. Insert data using S3 Table Value Function\nINSERT INTO test_table (id,name,age)\nSELECT cast(id as INT) as id, name, cast (age as INT) as age\nFROM s3(\n    "uri" = "http://127.0.0.1:9312/test2/test.snappy.parquet",\n    "s3.access_key"= "ak",\n    "s3.secret_key" = "sk",\n    "format" = "parquet",\n    "use_path_style" = "true");\n')),(0,l.yg)("h3",{id:"note"},"Note"),(0,l.yg)("ol",null,(0,l.yg)("li",{parentName:"ol"},(0,l.yg)("p",{parentName:"li"},"If the URI specified by the ",(0,l.yg)("inlineCode",{parentName:"p"},"S3 / HDFS")," TVF is not matched with the file, or all the matched files are empty files, then the",(0,l.yg)("inlineCode",{parentName:"p"}," S3 / HDFS")," TVF will return to the empty result set. In this case, using the ",(0,l.yg)("inlineCode",{parentName:"p"},"DESC FUNCTION")," to view the schema of this file, you will get a dummy column",(0,l.yg)("inlineCode",{parentName:"p"}," __dummy_col"),", which can be ignored.")),(0,l.yg)("li",{parentName:"ol"},(0,l.yg)("p",{parentName:"li"},"If the format of the TVF is specified to ",(0,l.yg)("inlineCode",{parentName:"p"},"CSV"),", and the read file is not a empty file but the first line of this file is empty, then it will prompt the error ",(0,l.yg)("inlineCode",{parentName:"p"},"The first line is empty, can not parse column numbers"),". This is because the schema cannot be parsed from the first line of the file"))))}c.isMDXComponent=!0}}]);