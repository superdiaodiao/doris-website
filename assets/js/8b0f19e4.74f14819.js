"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([[66974],{15680:(e,n,t)=>{t.d(n,{xA:()=>c,yg:()=>d});var a=t(96540);function s(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function l(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function r(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?l(Object(t),!0).forEach((function(n){s(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):l(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function o(e,n){if(null==e)return{};var t,a,s=function(e,n){if(null==e)return{};var t,a,s={},l=Object.keys(e);for(a=0;a<l.length;a++)t=l[a],n.indexOf(t)>=0||(s[t]=e[t]);return s}(e,n);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)t=l[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(s[t]=e[t])}return s}var i=a.createContext({}),p=function(e){var n=a.useContext(i),t=n;return e&&(t="function"==typeof e?e(n):r(r({},n),e)),t},c=function(e){var n=p(e.components);return a.createElement(i.Provider,{value:n},e.children)},u="mdxType",m={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},y=a.forwardRef((function(e,n){var t=e.components,s=e.mdxType,l=e.originalType,i=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),u=p(t),y=s,d=u["".concat(i,".").concat(y)]||u[y]||m[y]||l;return t?a.createElement(d,r(r({ref:n},c),{},{components:t})):a.createElement(d,r({ref:n},c))}));function d(e,n){var t=arguments,s=n&&n.mdxType;if("string"==typeof e||s){var l=t.length,r=new Array(l);r[0]=y;var o={};for(var i in n)hasOwnProperty.call(n,i)&&(o[i]=n[i]);o.originalType=e,o[u]="string"==typeof e?e:s,r[1]=o;for(var p=2;p<l;p++)r[p]=t[p];return a.createElement.apply(null,r)}return a.createElement.apply(null,t)}y.displayName="MDXCreateElement"},7566:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>i,contentTitle:()=>r,default:()=>m,frontMatter:()=>l,metadata:()=>o,toc:()=>p});var a=t(58168),s=(t(96540),t(15680));const l={title:"S3",language:"en"},r=void 0,o={unversionedId:"sql-manual/sql-functions/table-functions/s3",id:"sql-manual/sql-functions/table-functions/s3",title:"S3",description:"\x3c!--",source:"@site/docs/sql-manual/sql-functions/table-functions/s3.md",sourceDirName:"sql-manual/sql-functions/table-functions",slug:"/sql-manual/sql-functions/table-functions/s3",permalink:"/docs/dev/sql-manual/sql-functions/table-functions/s3",draft:!1,tags:[],version:"current",frontMatter:{title:"S3",language:"en"},sidebar:"docs",previous:{title:"EXPLODE_NUMBERS_OUTER",permalink:"/docs/dev/sql-manual/sql-functions/table-functions/explode-numbers-outer"},next:{title:"HDFS",permalink:"/docs/dev/sql-manual/sql-functions/table-functions/hdfs"}},i={},p=[{value:"S3",id:"s3",level:2},{value:"Name",id:"name",level:3},{value:"description",id:"description",level:3},{value:"syntax",id:"syntax",level:4},{value:"Example",id:"example",level:3},{value:"Keywords",id:"keywords",level:3},{value:"Best Practice",id:"best-practice",level:3}],c={toc:p},u="wrapper";function m(e){let{components:n,...t}=e;return(0,s.yg)(u,(0,a.A)({},c,t,{components:n,mdxType:"MDXLayout"}),(0,s.yg)("h2",{id:"s3"},"S3"),(0,s.yg)("h3",{id:"name"},"Name"),(0,s.yg)("p",null,"S3"),(0,s.yg)("h3",{id:"description"},"description"),(0,s.yg)("p",null,"S3 table-valued-function(tvf), allows users to read and access file contents on S3-compatible object storage, just like accessing relational table. Currently supports ",(0,s.yg)("inlineCode",{parentName:"p"},"csv/csv_with_names/csv_with_names_and_types/json/parquet/orc")," file format."),(0,s.yg)("h4",{id:"syntax"},"syntax"),(0,s.yg)("pre",null,(0,s.yg)("code",{parentName:"pre",className:"language-sql"},'s3(\n  "uri" = "..",\n  "s3.access_key" = "...",\n  "s3.secret_key" = "...",\n  "s3.region" = "...",\n  "format" = "csv",\n  "keyn" = "valuen",\n  ...\n  );\n')),(0,s.yg)("p",null,(0,s.yg)("strong",{parentName:"p"},"parameter description")),(0,s.yg)("p",null,"Each parameter in S3 tvf is a pair of ",(0,s.yg)("inlineCode",{parentName:"p"},'"key"="value"'),"."),(0,s.yg)("p",null,"Related parameters for accessing S3:"),(0,s.yg)("ul",null,(0,s.yg)("li",{parentName:"ul"},(0,s.yg)("inlineCode",{parentName:"li"},"uri"),": (required) The S3 tvf will decide whether to use the path style access method according to the ",(0,s.yg)("inlineCode",{parentName:"li"},"use_path_style")," parameter, and the default access method is the virtual-hosted style method."),(0,s.yg)("li",{parentName:"ul"},(0,s.yg)("inlineCode",{parentName:"li"},"s3.access_key"),"\uff1a (required)"),(0,s.yg)("li",{parentName:"ul"},(0,s.yg)("inlineCode",{parentName:"li"},"s3.secret_key"),"\uff1a (required)"),(0,s.yg)("li",{parentName:"ul"},(0,s.yg)("inlineCode",{parentName:"li"},"s3.region"),"\uff1a (optional). Mandatory if the Minio has set another region. Otherwise, ",(0,s.yg)("inlineCode",{parentName:"li"},"us-east-1")," is used by default."),(0,s.yg)("li",{parentName:"ul"},(0,s.yg)("inlineCode",{parentName:"li"},"s3.session_token"),"\uff1a (optional)"),(0,s.yg)("li",{parentName:"ul"},(0,s.yg)("inlineCode",{parentName:"li"},"use_path_style"),": (optional) default ",(0,s.yg)("inlineCode",{parentName:"li"},"false")," . The S3 SDK uses the virtual-hosted style by default. However, some object storage systems may not be enabled or support virtual-hosted style access. At this time, we can add the ",(0,s.yg)("inlineCode",{parentName:"li"},"use_path_style")," parameter to force the use of path style access method.")),(0,s.yg)("blockquote",null,(0,s.yg)("p",{parentName:"blockquote"},"Note: URI currently supports three SCHEMA: http://, https:// and s3://."),(0,s.yg)("ol",{parentName:"blockquote"},(0,s.yg)("li",{parentName:"ol"},"If you use http:// or https://, you will decide whether to use the 'path style' to access s3 based on the 'use_path_style' parameter"),(0,s.yg)("li",{parentName:"ol"},"If you use s3://, you will use the \"virtual-hosted style' to access the s3, 'use_path_style' parameter is invalid."),(0,s.yg)("li",{parentName:"ol"},"If the uri path does not exist or the files are empty files, s3 tvf will return an empty result set.")),(0,s.yg)("p",{parentName:"blockquote"},"For detailed use cases, you can refer to Best Practice at the bottom.")),(0,s.yg)("p",null,"file format parameter:"),(0,s.yg)("ul",null,(0,s.yg)("li",{parentName:"ul"},(0,s.yg)("p",{parentName:"li"},(0,s.yg)("inlineCode",{parentName:"p"},"format"),": (required) Currently support ",(0,s.yg)("inlineCode",{parentName:"p"},"csv/csv_with_names/csv_with_names_and_types/json/parquet/orc"))),(0,s.yg)("li",{parentName:"ul"},(0,s.yg)("p",{parentName:"li"},(0,s.yg)("inlineCode",{parentName:"p"},"column_separator"),": (optional) default ",(0,s.yg)("inlineCode",{parentName:"p"},","),".")),(0,s.yg)("li",{parentName:"ul"},(0,s.yg)("p",{parentName:"li"},(0,s.yg)("inlineCode",{parentName:"p"},"line_delimiter"),": (optional) default ",(0,s.yg)("inlineCode",{parentName:"p"},"\\n"),".")),(0,s.yg)("li",{parentName:"ul"},(0,s.yg)("p",{parentName:"li"},(0,s.yg)("inlineCode",{parentName:"p"},"compress_type"),": (optional) Currently support ",(0,s.yg)("inlineCode",{parentName:"p"},"UNKNOWN/PLAIN/GZ/LZO/BZ2/LZ4FRAME/DEFLATE"),". Default value is ",(0,s.yg)("inlineCode",{parentName:"p"},"UNKNOWN"),", it will automatically infer the type based on the suffix of ",(0,s.yg)("inlineCode",{parentName:"p"},"uri"),"."),(0,s.yg)("p",{parentName:"li"},"  The following 6 parameters are used for loading in json format. For specific usage methods, please refer to: ",(0,s.yg)("a",{parentName:"p",href:"/docs/dev/data-operate/import/import-way/load-json-format"},"Json Load"))),(0,s.yg)("li",{parentName:"ul"},(0,s.yg)("p",{parentName:"li"},(0,s.yg)("inlineCode",{parentName:"p"},"read_json_by_line"),": (optional) default ",(0,s.yg)("inlineCode",{parentName:"p"},'"true"'))),(0,s.yg)("li",{parentName:"ul"},(0,s.yg)("p",{parentName:"li"},(0,s.yg)("inlineCode",{parentName:"p"},"strip_outer_array"),": (optional) default ",(0,s.yg)("inlineCode",{parentName:"p"},'"false"'))),(0,s.yg)("li",{parentName:"ul"},(0,s.yg)("p",{parentName:"li"},(0,s.yg)("inlineCode",{parentName:"p"},"json_root"),": (optional) default ",(0,s.yg)("inlineCode",{parentName:"p"},'""'))),(0,s.yg)("li",{parentName:"ul"},(0,s.yg)("p",{parentName:"li"},(0,s.yg)("inlineCode",{parentName:"p"},"jsonpaths"),": (optional) default ",(0,s.yg)("inlineCode",{parentName:"p"},'""'))),(0,s.yg)("li",{parentName:"ul"},(0,s.yg)("p",{parentName:"li"},(0,s.yg)("inlineCode",{parentName:"p"},"num_as_string"),": (optional) default ",(0,s.yg)("inlineCode",{parentName:"p"},'"false"'))),(0,s.yg)("li",{parentName:"ul"},(0,s.yg)("p",{parentName:"li"},(0,s.yg)("inlineCode",{parentName:"p"},"fuzzy_parse"),": (optional) default ",(0,s.yg)("inlineCode",{parentName:"p"},'"false"')),(0,s.yg)("version",{since:"dev"},"The following 2 parameters are used for loading in csv format")),(0,s.yg)("li",{parentName:"ul"},(0,s.yg)("p",{parentName:"li"},(0,s.yg)("inlineCode",{parentName:"p"},"trim_double_quotes"),": Boolean type (optional), the default value is ",(0,s.yg)("inlineCode",{parentName:"p"},"false"),". True means that the outermost double quotes of each field in the csv file are trimmed.")),(0,s.yg)("li",{parentName:"ul"},(0,s.yg)("p",{parentName:"li"},(0,s.yg)("inlineCode",{parentName:"p"},"skip_lines"),": Integer type (optional), the default value is 0. It will skip some lines in the head of csv file. It will be disabled when the format is ",(0,s.yg)("inlineCode",{parentName:"p"},"csv_with_names")," or ",(0,s.yg)("inlineCode",{parentName:"p"},"csv_with_names_and_types"),"."))),(0,s.yg)("p",null,"other parameter:"),(0,s.yg)("ul",null,(0,s.yg)("li",{parentName:"ul"},(0,s.yg)("inlineCode",{parentName:"li"},"path_partition_keys"),': (optional) Specifies the column names carried in the file path. For example, if the file path is /path/to/city=beijing/date="2023-07-09", you should fill in ',(0,s.yg)("inlineCode",{parentName:"li"},'path_partition_keys="city,date"'),". It will automatically read the corresponding column names and values from the path during load process.")),(0,s.yg)("h3",{id:"example"},"Example"),(0,s.yg)("p",null,"Read and access csv format files on S3-compatible object storage."),(0,s.yg)("pre",null,(0,s.yg)("code",{parentName:"pre",className:"language-sql"},'select * from s3("uri" = "http://127.0.0.1:9312/test2/student1.csv",\n                "s3.access_key"= "minioadmin",\n                "s3.secret_key" = "minioadmin",\n                "format" = "csv",\n                "use_path_style" = "true") order by c1;\n')),(0,s.yg)("p",null,"Can be used with ",(0,s.yg)("inlineCode",{parentName:"p"},"desc function")),(0,s.yg)("pre",null,(0,s.yg)("code",{parentName:"pre",className:"language-sql"},'MySQL [(none)]> Desc function s3("uri" = "http://127.0.0.1:9312/test2/student1.csv",\n                 "s3.access_key"= "minioadmin",\n                 "s3.secret_key" = "minioadmin",\n                 "format" = "csv",\n                 "use_path_style" = "true");\n')),(0,s.yg)("h3",{id:"keywords"},"Keywords"),(0,s.yg)("pre",null,(0,s.yg)("code",{parentName:"pre"},"s3, table-valued-function, tvf\n")),(0,s.yg)("h3",{id:"best-practice"},"Best Practice"),(0,s.yg)("p",null,"Since the S3 table-valued-function does not know the table schema in advance, it will read the file first to parse out the table schema. "),(0,s.yg)("p",null,(0,s.yg)("strong",{parentName:"p"},"Usage of different uri schemas"),"\nExample of http:// \u3001https://"),(0,s.yg)("pre",null,(0,s.yg)("code",{parentName:"pre",className:"language-sql"},'// Note how to write your bucket of URI and set the \'use_path_style\' parameter, as well as http://.\n// Because of "use_path_style"="true", s3 will be accessed in \'path style\'.\nselect * from s3(\n    "URI" = "https://endpoint/bucket/file/student.csv",\n    "s3.access_key"= "ak",\n    "s3.secret_key" = "sk",\n    "format" = "csv",\n    "use_path_style"="true");\n\n// Note how to write your bucket of URI and set the \'use_path_style\' parameter, as well as http://.\n// Because of "use_path_style"="false", s3 will be accessed in \'virtual-hosted style\'.\nselect * from s3(\n    "URI" = "https://bucket.endpoint/file/student.csv",\n    "s3.access_key"= "ak",\n    "s3.secret_key" = "sk",\n    "format" = "csv",\n    "use_path_style"="false");    \n    \n// The OSS on Alibaba Cloud and The COS on Tencent Cloud will use \'virtual-hosted style\' to access s3.\n// OSS\nselect * from s3(\n    "URI" = "http://example-bucket.oss-cn-beijing.aliyuncs.com/your-folder/file.parquet",\n    "s3.access_key" = "ak",\n    "s3.secret_key" = "sk",\n    "region" = "oss-cn-beijing",\n    "format" = "parquet",\n    "use_path_style" = "false");\n// COS\nselect * from s3(\n    "URI" = "https://example-bucket.cos.ap-hongkong.myqcloud.com/your-folder/file.parquet",\n    "s3.access_key" = "ak",\n    "s3.secret_key" = "sk",\n    "region" = "ap-hongkong",\n    "format" = "parquet",\n    "use_path_style" = "false");\n\n// The BOS on Baidu Cloud will use \'virtual-hosted style\' compatible with the S3 protocol to access s3.\n// BOS\nselect * from s3(\n    "uri" = "https://example-bucket.s3.bj.bcebos.com/your-folder/file.parquet",\n    "s3.access_key"= "ak",\n    "s3.secret_key" = "sk",\n    "s3.region" = "bj",\n    "format" = "parquet",\n    "use_path_style" = "false");\n')),(0,s.yg)("p",null,"Example of s3://\uff1a"),(0,s.yg)("pre",null,(0,s.yg)("code",{parentName:"pre",className:"language-sql"},'// Note how to write your bucket of URI, no need to set \'use_path_style\'.\n// s3 will be accessed in \'virtual-hosted style\'.\nselect * from s3(\n    "URI" = "s3://bucket.endpoint/file/student.csv",\n    "s3.access_key"= "ak",\n    "s3.secret_key" = "sk",\n    "format" = "csv");    \n')),(0,s.yg)("p",null,(0,s.yg)("strong",{parentName:"p"},"csv format"),"\n",(0,s.yg)("inlineCode",{parentName:"p"},"csv")," format: Read the file on S3 and process it as a csv file, read the first line in the file to parse out the table schema. The number of columns in the first line of the file ",(0,s.yg)("inlineCode",{parentName:"p"},"n")," will be used as the number of columns in the table schema, and the column names of the table schema will be automatically named ",(0,s.yg)("inlineCode",{parentName:"p"},"c1, c2, ..., cn"),", and the column type is set to ",(0,s.yg)("inlineCode",{parentName:"p"},"String")," , for example:"),(0,s.yg)("p",null,"The file content of student1.csv:"),(0,s.yg)("pre",null,(0,s.yg)("code",{parentName:"pre"},"1,ftw,12\n2,zs,18\n3,ww,20\n")),(0,s.yg)("p",null,"use S3 tvf"),(0,s.yg)("pre",null,(0,s.yg)("code",{parentName:"pre",className:"language-sql"},'MySQL [(none)]> select * from s3("uri" = "http://127.0.0.1:9312/test2/student1.csv",\n->                 "s3.access_key"= "minioadmin",\n->                 "s3.secret_key" = "minioadmin",\n->                 "format" = "csv",\n->                 "use_path_style" = "true") order by c1;\n+------+------+------+\n| c1   | c2   | c3   |\n+------+------+------+\n| 1    | ftw  | 12   |\n| 2    | zs   | 18   |\n| 3    | ww   | 20   |\n+------+------+------+\n')),(0,s.yg)("p",null,"use ",(0,s.yg)("inlineCode",{parentName:"p"},"desc function S3()")," to view the table schema"),(0,s.yg)("pre",null,(0,s.yg)("code",{parentName:"pre",className:"language-sql"},'MySQL [(none)]> Desc function s3("uri" = "http://127.0.0.1:9312/test2/student1.csv",\n->                 "s3.access_key"= "minioadmin",\n->                 "s3.secret_key" = "minioadmin",\n->                 "format" = "csv",\n->                 "use_path_style" = "true");\n+-------+------+------+-------+---------+-------+\n| Field | Type | Null | Key   | Default | Extra |\n+-------+------+------+-------+---------+-------+\n| c1    | TEXT | Yes  | false | NULL    | NONE  |\n| c2    | TEXT | Yes  | false | NULL    | NONE  |\n| c3    | TEXT | Yes  | false | NULL    | NONE  |\n+-------+------+------+-------+---------+-------+\n')),(0,s.yg)("p",null,(0,s.yg)("strong",{parentName:"p"},"csv_with_names format"),"\n",(0,s.yg)("inlineCode",{parentName:"p"},"csv_with_names")," format: The first line of the file is used as the number and name of the columns of the table schema, and the column type is set to ",(0,s.yg)("inlineCode",{parentName:"p"},"String"),", for example:"),(0,s.yg)("p",null,"The file content of student_with_names.csv:"),(0,s.yg)("pre",null,(0,s.yg)("code",{parentName:"pre"},"id,name,age\n1,ftw,12\n2,zs,18\n3,ww,20\n")),(0,s.yg)("p",null,"use S3 tvf"),(0,s.yg)("pre",null,(0,s.yg)("code",{parentName:"pre",className:"language-sql"},'MySQL [(none)]> select * from s3("uri" = "http://127.0.0.1:9312/test2/student_with_names.csv",\n->                 "s3.access_key"= "minioadmin",\n->                 "s3.secret_key" = "minioadmin",\n->                 "format" = "csv_with_names",\n->                 "use_path_style" = "true") order by id;\n+------+------+------+\n| id   | name | age  |\n+------+------+------+\n| 1    | ftw  | 12   |\n| 2    | zs   | 18   |\n| 3    | ww   | 20   |\n+------+------+------+\n')),(0,s.yg)("pre",null,(0,s.yg)("code",{parentName:"pre",className:"language-sql"},'MySQL [(none)]> Desc function s3("uri" = "http://127.0.0.1:9312/test2/student_with_names.csv",\n->                 "s3.access_key"= "minioadmin",\n->                 "s3.secret_key" = "minioadmin",\n->                 "format" = "csv_with_names",\n->                 "use_path_style" = "true");\n+-------+------+------+-------+---------+-------+\n| Field | Type | Null | Key   | Default | Extra |\n+-------+------+------+-------+---------+-------+\n| id    | TEXT | Yes  | false | NULL    | NONE  |\n| name  | TEXT | Yes  | false | NULL    | NONE  |\n| age   | TEXT | Yes  | false | NULL    | NONE  |\n+-------+------+------+-------+---------+-------+\n')),(0,s.yg)("p",null,(0,s.yg)("strong",{parentName:"p"},"csv_with_names_and_types format")),(0,s.yg)("p",null,(0,s.yg)("inlineCode",{parentName:"p"},"csv_with_names_and_types")," format: Currently, it does not support parsing the column type from a csv file. When using this format, S3 tvf will parse the first line of the file as the number and name of the columns of the table schema, and set the column type to String. Meanwhile, the second line of the file is ignored."),(0,s.yg)("p",null,"The file content of student_with_names_and_types.csv:"),(0,s.yg)("pre",null,(0,s.yg)("code",{parentName:"pre"},"id,name,age\nINT,STRING,INT\n1,ftw,12\n2,zs,18\n3,ww,20\n")),(0,s.yg)("p",null,"use S3 tvf"),(0,s.yg)("pre",null,(0,s.yg)("code",{parentName:"pre",className:"language-sql"},'MySQL [(none)]> select * from s3("uri" = "http://127.0.0.1:9312/test2/student_with_names_and_types.csv",\n->                 "s3.access_key"= "minioadmin",\n->                 "s3.secret_key" = "minioadmin",\n->                 "format" = "csv_with_names_and_types",\n->                 "use_path_style" = "true") order by id;\n+------+------+------+\n| id   | name | age  |\n+------+------+------+\n| 1    | ftw  | 12   |\n| 2    | zs   | 18   |\n| 3    | ww   | 20   |\n+------+------+------+\n')),(0,s.yg)("pre",null,(0,s.yg)("code",{parentName:"pre",className:"language-sql"},'MySQL [(none)]> Desc function s3("uri" = "http://127.0.0.1:9312/test2/student_with_names_and_types.csv",\n->                 "s3.access_key"= "minioadmin",\n->                 "s3.secret_key" = "minioadmin",\n->                 "format" = "csv_with_names_and_types",\n->                 "use_path_style" = "true");\n+-------+------+------+-------+---------+-------+\n| Field | Type | Null | Key   | Default | Extra |\n+-------+------+------+-------+---------+-------+\n| id    | TEXT | Yes  | false | NULL    | NONE  |\n| name  | TEXT | Yes  | false | NULL    | NONE  |\n| age   | TEXT | Yes  | false | NULL    | NONE  |\n+-------+------+------+-------+---------+-------+\n')),(0,s.yg)("p",null,(0,s.yg)("strong",{parentName:"p"},"json format")),(0,s.yg)("p",null,(0,s.yg)("inlineCode",{parentName:"p"},"json")," format: The json format involves many optional parameters, and the meaning of each parameter can be referred to: ",(0,s.yg)("a",{parentName:"p",href:"/docs/dev/data-operate/import/import-way/load-json-format"},"Json Load"),". When S3 tvf queries the json format file, it locates a json object according to the ",(0,s.yg)("inlineCode",{parentName:"p"},"json_root")," and ",(0,s.yg)("inlineCode",{parentName:"p"},"jsonpaths")," parameters, and uses the ",(0,s.yg)("inlineCode",{parentName:"p"},"key")," in the object as the column name of the table schema, and sets the column type to String. For example:"),(0,s.yg)("p",null,"The file content of data.json:"),(0,s.yg)("pre",null,(0,s.yg)("code",{parentName:"pre"},'[{"id":1, "name":"ftw", "age":18}]\n[{"id":2, "name":"xxx", "age":17}]\n[{"id":3, "name":"yyy", "age":19}]\n')),(0,s.yg)("p",null,"use S3 tvf:"),(0,s.yg)("pre",null,(0,s.yg)("code",{parentName:"pre",className:"language-sql"},'MySQL [(none)]> select * from s3(\n    "URI" = "http://127.0.0.1:9312/test2/data.json",\n    "s3.access_key"= "minioadmin",\n    "s3.secret_key" = "minioadmin",\n    "format" = "json",\n    "strip_outer_array" = "true",\n    "read_json_by_line" = "true",\n    "use_path_style"="true");\n+------+------+------+\n| id   | name | age  |\n+------+------+------+\n| 1    | ftw  | 18   |\n| 2    | xxx  | 17   |\n| 3    | yyy  | 19   |\n+------+------+------+\n\nMySQL [(none)]> select * from s3(\n    "URI" = "http://127.0.0.1:9312/test2/data.json",\n    "s3.access_key"= "minioadmin",\n    "s3.secret_key" = "minioadmin",\n    "format" = "json",\n    "strip_outer_array" = "true",\n    "jsonpaths" = "[\\"$.id\\", \\"$.age\\"]",\n    "use_path_style"="true");\n+------+------+\n| id   | age  |\n+------+------+\n| 1    | 18   |\n| 2    | 17   |\n| 3    | 19   |\n+------+------+\n')),(0,s.yg)("p",null,(0,s.yg)("strong",{parentName:"p"},"parquet format")),(0,s.yg)("p",null,(0,s.yg)("inlineCode",{parentName:"p"},"parquet")," format: S3 tvf supports parsing the column names and column types of the table schema from the parquet file. Example:"),(0,s.yg)("pre",null,(0,s.yg)("code",{parentName:"pre",className:"language-sql"},'MySQL [(none)]> select * from s3(\n    "URI" = "http://127.0.0.1:9312/test2/test.snappy.parquet",\n    "s3.access_key"= "minioadmin",\n    "s3.secret_key" = "minioadmin",\n    "format" = "parquet",\n    "use_path_style"="true") limit 5;\n+-----------+------------------------------------------+----------------+----------+-------------------------+--------+-------------+---------------+---------------------+\n| p_partkey | p_name                                   | p_mfgr         | p_brand  | p_type                  | p_size | p_container | p_retailprice | p_comment           |\n+-----------+------------------------------------------+----------------+----------+-------------------------+--------+-------------+---------------+---------------------+\n|         1 | goldenrod lavender spring chocolate lace | Manufacturer#1 | Brand#13 | PROMO BURNISHED COPPER  |      7 | JUMBO PKG   |           901 | ly. slyly ironi     |\n|         2 | blush thistle blue yellow saddle         | Manufacturer#1 | Brand#13 | LARGE BRUSHED BRASS     |      1 | LG CASE     |           902 | lar accounts amo    |\n|         3 | spring green yellow purple cornsilk      | Manufacturer#4 | Brand#42 | STANDARD POLISHED BRASS |     21 | WRAP CASE   |           903 | egular deposits hag |\n|         4 | cornflower chocolate smoke green pink    | Manufacturer#3 | Brand#34 | SMALL PLATED BRASS      |     14 | MED DRUM    |           904 | p furiously r       |\n|         5 | forest brown coral puff cream            | Manufacturer#3 | Brand#32 | STANDARD POLISHED TIN   |     15 | SM PKG      |           905 |  wake carefully     |\n+-----------+------------------------------------------+----------------+----------+-------------------------+--------+-------------+---------------+---------------------+\n')),(0,s.yg)("pre",null,(0,s.yg)("code",{parentName:"pre",className:"language-sql"},'MySQL [(none)]> desc function s3(\n    "URI" = "http://127.0.0.1:9312/test2/test.snappy.parquet",\n    "s3.access_key"= "minioadmin",\n    "s3.secret_key" = "minioadmin",\n    "format" = "parquet",\n    "use_path_style"="true");\n+---------------+--------------+------+-------+---------+-------+\n| Field         | Type         | Null | Key   | Default | Extra |\n+---------------+--------------+------+-------+---------+-------+\n| p_partkey     | INT          | Yes  | false | NULL    | NONE  |\n| p_name        | TEXT         | Yes  | false | NULL    | NONE  |\n| p_mfgr        | TEXT         | Yes  | false | NULL    | NONE  |\n| p_brand       | TEXT         | Yes  | false | NULL    | NONE  |\n| p_type        | TEXT         | Yes  | false | NULL    | NONE  |\n| p_size        | INT          | Yes  | false | NULL    | NONE  |\n| p_container   | TEXT         | Yes  | false | NULL    | NONE  |\n| p_retailprice | DECIMAL(9,0) | Yes  | false | NULL    | NONE  |\n| p_comment     | TEXT         | Yes  | false | NULL    | NONE  |\n+---------------+--------------+------+-------+---------+-------+\n')),(0,s.yg)("p",null,(0,s.yg)("strong",{parentName:"p"},"orc format")),(0,s.yg)("p",null,(0,s.yg)("inlineCode",{parentName:"p"},"orc")," format: Same as ",(0,s.yg)("inlineCode",{parentName:"p"},"parquet")," format, set ",(0,s.yg)("inlineCode",{parentName:"p"},"format")," parameter to orc."),(0,s.yg)("pre",null,(0,s.yg)("code",{parentName:"pre",className:"language-sql"},'MySQL [(none)]> select * from s3(\n    "URI" = "http://127.0.0.1:9312/test2/test.snappy.orc",\n    "s3.access_key"= "minioadmin",\n    "s3.secret_key" = "minioadmin",\n    "format" = "orc",\n    "use_path_style"="true") limit 5;\n+-----------+------------------------------------------+----------------+----------+-------------------------+--------+-------------+---------------+---------------------+\n| p_partkey | p_name                                   | p_mfgr         | p_brand  | p_type                  | p_size | p_container | p_retailprice | p_comment           |\n+-----------+------------------------------------------+----------------+----------+-------------------------+--------+-------------+---------------+---------------------+\n|         1 | goldenrod lavender spring chocolate lace | Manufacturer#1 | Brand#13 | PROMO BURNISHED COPPER  |      7 | JUMBO PKG   |           901 | ly. slyly ironi     |\n|         2 | blush thistle blue yellow saddle         | Manufacturer#1 | Brand#13 | LARGE BRUSHED BRASS     |      1 | LG CASE     |           902 | lar accounts amo    |\n|         3 | spring green yellow purple cornsilk      | Manufacturer#4 | Brand#42 | STANDARD POLISHED BRASS |     21 | WRAP CASE   |           903 | egular deposits hag |\n|         4 | cornflower chocolate smoke green pink    | Manufacturer#3 | Brand#34 | SMALL PLATED BRASS      |     14 | MED DRUM    |           904 | p furiously r       |\n|         5 | forest brown coral puff cream            | Manufacturer#3 | Brand#32 | STANDARD POLISHED TIN   |     15 | SM PKG      |           905 |  wake carefully     |\n+-----------+------------------------------------------+----------------+----------+-------------------------+--------+-------------+---------------+---------------------+\n')),(0,s.yg)("p",null,(0,s.yg)("strong",{parentName:"p"},"avro format")),(0,s.yg)("p",null,(0,s.yg)("inlineCode",{parentName:"p"},"avro")," format: S3 tvf supports parsing the column names and column types of the table schema from the avro file. Example:"),(0,s.yg)("pre",null,(0,s.yg)("code",{parentName:"pre",className:"language-sql"},'select * from s3(\n         "uri" = "http://127.0.0.1:9312/test2/person.avro",\n         "ACCESS_KEY" = "ak",\n         "SECRET_KEY" = "sk",\n         "FORMAT" = "avro");\n+--------+--------------+-------------+-----------------+\n| name   | boolean_type | double_type | long_type       |\n+--------+--------------+-------------+-----------------+\n| Alyssa |            1 |     10.0012 | 100000000221133 |\n| Ben    |            0 |    5555.999 |      4009990000 |\n| lisi   |            0 | 5992225.999 |      9099933330 |\n+--------+--------------+-------------+-----------------+\n')),(0,s.yg)("p",null,(0,s.yg)("strong",{parentName:"p"},"uri contains wildcards")),(0,s.yg)("p",null,"uri can use wildcards to read multiple files. Note: If wildcards are used, the format of each file must be consistent (especially csv/csv_with_names/csv_with_names_and_types count as different formats), S3 tvf uses the first file to parse out the table schema. For example:"),(0,s.yg)("p",null,"The following two csv files:"),(0,s.yg)("pre",null,(0,s.yg)("code",{parentName:"pre"},"// file1.csv\n1,aaa,18\n2,qqq,20\n3,qwe,19\n\n// file2.csv\n5,cyx,19\n6,ftw,21\n")),(0,s.yg)("p",null,"You can use wildcards on the uri to query."),(0,s.yg)("pre",null,(0,s.yg)("code",{parentName:"pre",className:"language-sql"},'MySQL [(none)]> select * from s3(\n        "URI" = "http://127.0.0.1:9312/test2/file*.csv",\n        "s3.access_key"= "minioadmin",\n        "s3.secret_key" = "minioadmin",\n        "format" = "csv",\n        "use_path_style"="true");\n+------+------+------+\n| c1   | c2   | c3   |\n+------+------+------+\n| 1    | aaa  | 18   |\n| 2    | qqq  | 20   |\n| 3    | qwe  | 19   |\n| 5    | cyx  | 19   |\n| 6    | ftw  | 21   |\n+------+------+------+\n')),(0,s.yg)("p",null,(0,s.yg)("strong",{parentName:"p"},"Using ",(0,s.yg)("inlineCode",{parentName:"strong"},"S3")," tvf with ",(0,s.yg)("inlineCode",{parentName:"strong"},"insert into")," and ",(0,s.yg)("inlineCode",{parentName:"strong"},"cast"))),(0,s.yg)("pre",null,(0,s.yg)("code",{parentName:"pre",className:"language-sql"},'// Create doris internal table\nCREATE TABLE IF NOT EXISTS ${testTable}\n    (\n        id int,\n        name varchar(50),\n        age int\n    )\n    COMMENT "my first table"\n    DISTRIBUTED BY HASH(id) BUCKETS 32\n    PROPERTIES("replication_num" = "1");\n\n// Insert data using S3\ninsert into ${testTable} (id,name,age)\nselect cast (id as INT) as id, name, cast (age as INT) as age\nfrom s3(\n    "uri" = "${uri}",\n    "s3.access_key"= "${ak}",\n    "s3.secret_key" = "${sk}",\n    "format" = "${format}",\n    "strip_outer_array" = "true",\n    "read_json_by_line" = "true",\n    "use_path_style" = "true");\n')))}m.isMDXComponent=!0}}]);