"use strict";(self.webpackChunkselectdb_portal=self.webpackChunkselectdb_portal||[]).push([[23025],{3905:(e,t,a)=>{a.d(t,{Zo:()=>d,kt:()=>h});var n=a(67294);function o(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function r(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?r(Object(a),!0).forEach((function(t){o(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,n,o=function(e,t){if(null==e)return{};var a,n,o={},r=Object.keys(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||(o[a]=e[a]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(o[a]=e[a])}return o}var p=n.createContext({}),s=function(e){var t=n.useContext(p),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},d=function(e){var t=s(e.components);return n.createElement(p.Provider,{value:t},e.children)},m="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},c=n.forwardRef((function(e,t){var a=e.components,o=e.mdxType,r=e.originalType,p=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),m=s(a),c=o,h=m["".concat(p,".").concat(c)]||m[c]||u[c]||r;return a?n.createElement(h,i(i({ref:t},d),{},{components:a})):n.createElement(h,i({ref:t},d))}));function h(e,t){var a=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var r=a.length,i=new Array(r);i[0]=c;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l[m]="string"==typeof e?e:o,i[1]=l;for(var s=2;s<r;s++)i[s]=a[s];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}c.displayName="MDXCreateElement"},13098:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>p,contentTitle:()=>i,default:()=>m,frontMatter:()=>r,metadata:()=>l,toc:()=>s});var n=a(87462),o=(a(67294),a(3905));const r={title:"Load Json Format Data",language:"en"},i=void 0,l={unversionedId:"administrator-guide/load-data/load-json-format",id:"version-0.15/administrator-guide/load-data/load-json-format",title:"Load Json Format Data",description:"\x3c!--",source:"@site/versioned_docs/version-0.15/administrator-guide/load-data/load-json-format.md",sourceDirName:"administrator-guide/load-data",slug:"/administrator-guide/load-data/load-json-format",permalink:"/docs/0.15/administrator-guide/load-data/load-json-format",draft:!1,tags:[],version:"0.15",frontMatter:{title:"Load Json Format Data",language:"en"},sidebar:"docs",previous:{title:"Insert Into",permalink:"/docs/0.15/administrator-guide/load-data/insert-into-manual"},next:{title:"Bitmap Index",permalink:"/docs/0.15/administrator-guide/alter-table/alter-table-bitmap-index"}},p={},s=[{value:"Supported Load Methods",id:"supported-load-methods",level:2},{value:"Supported Json Format",id:"supported-json-format",level:2},{value:"Json Path",id:"json-path",level:2},{value:"Json Path and Columns",id:"json-path-and-columns",level:2},{value:"NULL and Default value",id:"null-and-default-value",level:2},{value:"LargetInt and Decimal",id:"largetint-and-decimal",level:2},{value:"Examples",id:"examples",level:2},{value:"Stream Load",id:"stream-load",level:3},{value:"Routine Load",id:"routine-load",level:3}],d={toc:s};function m(e){let{components:t,...a}=e;return(0,o.kt)("wrapper",(0,n.Z)({},d,a,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"load-json-format-data"},"Load Json Format Data"),(0,o.kt)("p",null,"Doris supports data load in Json format since version 0.12."),(0,o.kt)("h2",{id:"supported-load-methods"},"Supported Load Methods"),(0,o.kt)("p",null,"Currently only the following load methods support data import in Json format:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Stream Load"),(0,o.kt)("li",{parentName:"ul"},"Routine Load")),(0,o.kt)("p",null,"For specific instructions on the above load methods, please refer to the relevant documentation. This document mainly introduces the instructions for using Json in these load methods."),(0,o.kt)("h2",{id:"supported-json-format"},"Supported Json Format"),(0,o.kt)("p",null,"Currently, only the following two Json formats are supported:"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Multi-line data represented by Array"),(0,o.kt)("p",{parentName:"li"},"Json format with Array as the root node. Each element in the Array represents a row of data to be loaded, usually an Object. Examples are as follows:"),(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre"},'[\n    { "id": 123, "city" : "beijing"},\n    { "id": 456, "city" : "shanghai"},\n    ...\n]\n')),(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre"},'[\n    { "id": 123, "city" : { "name" : "beijing", "region" : "haidian"}},\n    { "id": 456, "city" : { "name" : "beijing", "region" : "chaoyang"}},\n    ...\n]\n')),(0,o.kt)("p",{parentName:"li"},"This method is usually used for the Stream Load method to represent multiple rows of data in a batch of load data."),(0,o.kt)("p",{parentName:"li"}," This method must be used in conjunction with setting ",(0,o.kt)("inlineCode",{parentName:"p"},"stripe_outer_array=true"),". Doris will expand the array when parsing, and then parse each Object in turn as a row of data.")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Single row of data represented by Object"),(0,o.kt)("p",{parentName:"li"},"Json format with Object as the root node. The entire Object represents a row of data to be loaded. Examples are as follows:"),(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre"},'{ "id": 123, "city" : "beijing"}\n')),(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre"},'{ "id": 123, "city" : { "name" : "beijing", "region" : "haidian" }}\n')),(0,o.kt)("p",{parentName:"li"},"This method is usually used for the Routine Load method, such as representing a message in Kafka, that is, a row of data.\n"))),(0,o.kt)("h2",{id:"json-path"},"Json Path"),(0,o.kt)("p",null,"Doris supports extracting the data specified in Json through Json Path."),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Note: Because for Array type data, Doris will first expand the array, and finally perform single-line processing according to the Object format. Therefore, the examples after this document will be illustrated with Json data in single Object format.")),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"Json Path is not specified"),(0,o.kt)("p",{parentName:"li"},"  If Json Path is not specified, Doris will use the column names in the table to find the elements in Object by default. Examples are as follows:"),(0,o.kt)("p",{parentName:"li"},"  The table contains two columns: ",(0,o.kt)("inlineCode",{parentName:"p"},"id"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"city")),(0,o.kt)("p",{parentName:"li"},"  Json data is as follows:"),(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre"},'{ "id": 123, "city" : "beijing"}\n')),(0,o.kt)("p",{parentName:"li"},"  Then Doris will use ",(0,o.kt)("inlineCode",{parentName:"p"},"id"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"city")," to match, and get the final data ",(0,o.kt)("inlineCode",{parentName:"p"},"123")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"beijing"),"."),(0,o.kt)("p",{parentName:"li"},"  If the Json data is as follows:"),(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre"},'{ "id": 123, "name" : "beijing"}\n')),(0,o.kt)("p",{parentName:"li"},"  Then use ",(0,o.kt)("inlineCode",{parentName:"p"},"id"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"city")," to match and get the final data ",(0,o.kt)("inlineCode",{parentName:"p"},"123")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"null"),".\n")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"Json Path is specified"),(0,o.kt)("p",{parentName:"li"},"  Specify a set of Json Path in the form of a Json data. Each element in the array represents a column to be extracted. Examples are as follows:"),(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre"},'["$.id", "$.name"]\n')),(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre"},'["$.id.sub_id", "$.name[0]", "$.city[0]"]\n')),(0,o.kt)("p",{parentName:"li"},"  Doris will use the specified Json Path for data matching and extraction.\n")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"Match non-primitive types"),(0,o.kt)("p",{parentName:"li"},"   The values that the previous example finally matched are all primitive types, such as Integer, String, and so on. Doris currently does not support complex types, such as Array, Map, etc. So when a non-primitive type is matched, Doris will convert the type to a Json format string and load it as a string type. Examples are as follows:"),(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre"},'{ "id": 123, "city" : { "name" : "beijing", "region" : "haidian" }}\n')),(0,o.kt)("p",{parentName:"li"},"  The Json Path is ",(0,o.kt)("inlineCode",{parentName:"p"},'["$.city"]'),". Then the matched elements are:"),(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre"},'{ "name" : "beijing", "region" : "haidian" }\n')),(0,o.kt)("p",{parentName:"li"},"  This element will be converted into a string for subsequent load operations:"),(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre"},"\"{'name':'beijing','region':'haidian'}\"\n"))),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"Match failed"),(0,o.kt)("p",{parentName:"li"},"  When the match fails, ",(0,o.kt)("inlineCode",{parentName:"p"},"null")," will be returned. Examples are as follows:"),(0,o.kt)("p",{parentName:"li"},"  Json data is:"),(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre"},'{ "id": 123, "name" : "beijing"}\n')),(0,o.kt)("p",{parentName:"li"},"  The Json Path is ",(0,o.kt)("inlineCode",{parentName:"p"},'["$.id", "$.info"]'),". Then the matched elements are ",(0,o.kt)("inlineCode",{parentName:"p"},"123")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"null"),"."),(0,o.kt)("p",{parentName:"li"},"   Doris currently does not distinguish between the null value represented in the Json data and the null value generated when the match fails. Suppose the Json data is:"),(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre"},'{ "id": 123, "name" : null }\n')),(0,o.kt)("p",{parentName:"li"},"  Then use the following two Json Path will get the same result: ",(0,o.kt)("inlineCode",{parentName:"p"},"123")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"null"),"."),(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre"},'["$.id", "$.name"]\n')),(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre"},'["$.id", "$.info"]\n'))),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"Complete match failed"),(0,o.kt)("p",{parentName:"li"},"  In order to prevent misoperation caused by some parameter setting errors. When Doris tries to match a row of data, if all columns fail to match, it will be considered a error row. Suppose the Json data is:"),(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre"},'{ "id": 123, "city" : "beijing" }\n')),(0,o.kt)("p",{parentName:"li"},"  If Json Path is incorrectly written as (or when Json Path is not specified, the columns in the table do not contain ",(0,o.kt)("inlineCode",{parentName:"p"},"id")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"city"),"):"),(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre"},'["$.ad", "$.infa"]\n')),(0,o.kt)("p",{parentName:"li"},"  Will result in a complete match failure, the line will be marked as an error row, instead of producing ",(0,o.kt)("inlineCode",{parentName:"p"},"null, null"),"."))),(0,o.kt)("h2",{id:"json-path-and-columns"},"Json Path and Columns"),(0,o.kt)("p",null,"Json Path is used to specify how to extract data in JSON format, and Columns specify the mapping and conversion relationship of columns. The two can be used together."),(0,o.kt)("p",null,"In other words, it is equivalent to using Json Path to rearrange the data in a Json format according to the column order specified in Json Path. After that, you can use Columns to map the rearranged source data to the columns of the table. Examples are as follows:"),(0,o.kt)("p",null,"Data content:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},'{"k1": 1, "k2": 2}\n')),(0,o.kt)("p",null,"Table schema:"),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"k2 int, k1 int")),(0,o.kt)("p",null,"Load statement 1 (take Stream Load as an example):"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},'curl -v --location-trusted -u root: -H "format: json" -H "jsonpaths: [\\"$.k2\\", \\"$.k1\\"]" -T example.json http:/ /127.0.0.1:8030/api/db1/tbl1/_stream_load\n')),(0,o.kt)("p",null,"In Load statement 1, only Json Path is specified, and Columns are not specified. The role of Json Path is to extract the Json data in the order of the fields in the Json Path, and then write it in the order of the table schema. The final loaded data results are as follows:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"+------+------+\n| k1   | k2   |\n+------+------+\n|    2 |    1 |\n+------+------+\n")),(0,o.kt)("p",null,'You will see that the actual k1 column has loaded the value of the "k2" column in the Json data. This is because the field name in Json is not equivalent to the field name in the table schema. We need to explicitly specify the mapping relationship between the two.'),(0,o.kt)("p",null,"Load statement 2:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},'curl -v --location-trusted -u root: -H "format: json" -H "jsonpaths: [\\"$.k2\\", \\"$.k1\\"]" -H "columns: k2, k1 "-T example.json http://127.0.0.1:8030/api/db1/tbl1/_stream_load\n')),(0,o.kt)("p",null,"Compared to load statement 1, here is the Columns field, which is used to describe the mapping relationship of columns, in the order of ",(0,o.kt)("inlineCode",{parentName:"p"},"k2, k1"),". That is, after extracting in the order of the fields in the Json Path, specify the first column as the value of the k2 column in the table, and the second column as the value of the k1 column in the table. The final loaded data results are as follows:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"+------+------+\n| k1   | k2   |\n+------+------+\n|    1 |    2 |\n+------+------+\n")),(0,o.kt)("p",null,"Of course, like other load methods, you can perform column conversion operations in Columns. Examples are as follows:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},'curl -v --location-trusted -u root: -H "format: json" -H "jsonpaths: [\\"$.k2\\", \\"$.k1\\"]" -H "columns: k2, tmp_k1 , k1 = tmp_k1 * 100" -T example.json http://127.0.0.1:8030/api/db1/tbl1/_stream_load\n')),(0,o.kt)("p",null,"The above example will multiply the value of k1 by 100 and import it. The final imported data results are as follows:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"+------+------+\n| k1   | k2   |\n+------+------+\n|  100 |    2 |\n+------+------+\n")),(0,o.kt)("h2",{id:"null-and-default-value"},"NULL and Default value"),(0,o.kt)("p",null,"The sample data is as follows:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},'[\n    {"k1": 1, "k2": "a"},\n    {"k1": 2},\n    {"k1": 3, "k2": "c"},\n]\n')),(0,o.kt)("p",null,"The table schema is: ",(0,o.kt)("inlineCode",{parentName:"p"},'k1 int null, k2 varchar(32) null default "x"')),(0,o.kt)("p",null,"The load statement is as follows:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},'curl -v --location-trusted -u root: -H "format: json" -H "strip_outer_array: true" -T example.json http://127.0.0.1:8030/api/db1/tbl1/_stream_load\n')),(0,o.kt)("p",null,"The import results that users may expect are as follows, that is, for missing columns, fill in default values."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"+------+------+\n| k1   | k2   |\n+------+------+\n|    1 |    a |\n+------+------+\n|    2 |    x |\n+------+------+\n|    3 |    c |\n+------+------+\n")),(0,o.kt)("p",null,"But the actual load result is as follows, that is, for missing columns, NULL is added."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"+------+------+\n| k1   | k2   |\n+------+------+\n|    1 |    a |\n+------+------+\n|    2 | NULL |\n+------+------+\n|    3 |    c |\n+------+------+\n")),(0,o.kt)("p",null,'This is because through the information in the load statement, Doris does not know that "the missing column is the k2 column in the table".\nIf you want to load the above data as expected, the load statement is as follows:'),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},'curl -v --location-trusted -u root: -H "format: json" -H "strip_outer_array: true" -H "jsonpaths: [\\"$.k1\\", \\"$.k2\\"]"- H "columns: k1, tmp_k2, k2 = ifnull(tmp_k2,\'x\')" -T example.json http://127.0.0.1:8030/api/db1/tbl1/_stream_load\n')),(0,o.kt)("h2",{id:"largetint-and-decimal"},"LargetInt and Decimal"),(0,o.kt)("p",null,"Doris supports data types such as largeint and decimal with larger data range and higher data precision. However, due to the fact that the maximum range of the rapid JSON library used by Doris for the resolution of digital types is Int64 and double, there may be some problems when importing largeint or decimal by JSON format,  such as loss of precision, data conversion error, etc."),(0,o.kt)("p",null,"For example:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},'[\n    {"k1": 1, "k2":9999999999999.999999 }\n]\n')),(0,o.kt)("p",null,"The imported K2 column type is ",(0,o.kt)("inlineCode",{parentName:"p"},"Decimal (16,9)"),"the import data is: ",(0,o.kt)("inlineCode",{parentName:"p"}," 9999999999.999999"),". During the JSON load which cause the precision loss of double conversion, the imported data convert to: ",(0,o.kt)("inlineCode",{parentName:"p"},"10000000000.0002"),". It is a import error."),(0,o.kt)("p",null,"To solve this problem, Doris provides a param ",(0,o.kt)("inlineCode",{parentName:"p"},"num_as_string "),". Doris converts the numeric type to a string when parsing JSON data and JSON load without losing precision."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},'curl -v --location-trusted -u root: -H "format: json" -H "num_as_string: true" -T example.json http://127.0.0.1:8030/api/db1/tbl1/_stream_load\n')),(0,o.kt)("p",null,"But using the param will cause unexpected side effects. Doris currently does not support composite types, such as Array, Map, etc. So when a non basic type is matched, Doris will convert the type to a string in JSON format.",(0,o.kt)("inlineCode",{parentName:"p"}," num_as_string"),"will also convert compound type numbers into strings, for example:"),(0,o.kt)("p",null,"JSON Data:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},'{ "id": 123, "city" : { "name" : "beijing", "city_id" : 1 }}\n')),(0,o.kt)("p",null,"Not use ",(0,o.kt)("inlineCode",{parentName:"p"},"num_as_string "),", the data of the city column is:"),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},'{ "name" : "beijing", "city_id" : 1 }')),(0,o.kt)("p",null,"Use ",(0,o.kt)("inlineCode",{parentName:"p"},"num_as_string "),", the data of the city column is:"),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},'{ "name" : "beijing", "city_id" : "1" }')),(0,o.kt)("p",null,"Warning, the param leads to the city_id of the numeric type in the compound type is treated as a string column and quoted, which is different from the original data."),(0,o.kt)("p",null,"Therefore, when using JSON load. we should try to avoid importing largeint, decimal and composite types at the same time. If you can't avoid it, you need to fully understand the ",(0,o.kt)("strong",{parentName:"p"},"side effects"),"."),(0,o.kt)("h2",{id:"examples"},"Examples"),(0,o.kt)("h3",{id:"stream-load"},"Stream Load"),(0,o.kt)("p",null,"Because of the indivisible nature of the Json format, when using Stream Load to load a Json format file, the file content will be fully loaded into memory before processing. Therefore, if the file is too large, it may occupy more memory."),(0,o.kt)("p",null,"Suppose the table structure is:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"id      INT     NOT NULL,\ncity    VARHCAR NULL,\ncode    INT     NULL\n")),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Load single-line data 1"),(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre"},'{"id": 100, "city": "beijing", "code" : 1}\n')),(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"Not specify Json Path"),(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre"},'curl --location-trusted -u user:passwd -H "format: json" -T data.json http://localhost:8030/api/db1/tbl1/_stream_load\n')),(0,o.kt)("p",{parentName:"li"},"  Results:"),(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre"},"100     beijing     1\n"))),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"Specify Json Path"),(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre"},'curl --location-trusted -u user:passwd -H "format: json" -H "jsonpaths: [\\"$.id\\",\\"$.city\\",\\"$.code\\"]" -T data.json http://localhost:8030/api/db1/tbl1/_stream_load\n')),(0,o.kt)("p",{parentName:"li"},"  Results:"),(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre"},"100     beijing     1\n"))))),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Load sigle-line data 2"),(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre"},'{"id": 100, "content": {"city": "beijing", "code" : 1}}\n')),(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"Specify Json Path"),(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre"},'curl --location-trusted -u user:passwd -H "format: json" -H "jsonpaths: [\\"$.id\\",\\"$.content.city\\",\\"$.content.code\\"]" -T data.json http://localhost:8030/api/db1/tbl1/_stream_load\n')),(0,o.kt)("p",{parentName:"li"},"  Results:"),(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre"},"100     beijing     1\n"))))),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Load multi-line data"),(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre"},'[\n    {"id": 100, "city": "beijing", "code" : 1},\n    {"id": 101, "city": "shanghai"},\n    {"id": 102, "city": "tianjin", "code" : 3},\n    {"id": 103, "city": "chongqing", "code" : 4},\n    {"id": 104, "city": ["zhejiang", "guangzhou"], "code" : 5},\n    {\n        "id": 105,\n        "city": {\n            "order1": ["guangzhou"]\n        }, \n        "code" : 6\n    }\n]\n')),(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"Specify Json Path"),(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre"},'curl --location-trusted -u user:passwd -H "format: json" -H "jsonpaths: [\\"$.id\\",\\"$.city\\",\\"$.code\\"]" -H "strip_outer_array: true" -T data.json http://localhost:8030/api/db1/tbl1/_stream_load\n')),(0,o.kt)("p",{parentName:"li"},"  Results:"),(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre"},'100     beijing                     1\n101     shanghai                    NULL\n102     tianjin                     3\n103     chongqing                   4\n104     ["zhejiang","guangzhou"]    5\n105     {"order1":["guangzhou"]}    6\n'))))),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Convert load data"),(0,o.kt)("p",{parentName:"li"},"The data is still the multi-row data in Example 3. Now you need to add 1 to the ",(0,o.kt)("inlineCode",{parentName:"p"},"code")," column in the loaded data and load it."),(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre"},'curl --location-trusted -u user:passwd -H "format: json" -H "jsonpaths: [\\"$.id\\",\\"$.city\\",\\"$.code\\"]" -H "strip_outer_array: true" -H "columns: id, city, tmpc, code=tmpc+1" -T data.json http://localhost:8030/api/db1/tbl1/_stream_load\n')),(0,o.kt)("p",{parentName:"li"},"Results:"),(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre"},'100     beijing                     2\n101     shanghai                    NULL\n102     tianjin                     4\n103     chongqing                   5\n104     ["zhejiang","guangzhou"]    6\n105     {"order1":["guangzhou"]}    7\n')))),(0,o.kt)("h3",{id:"routine-load"},"Routine Load"),(0,o.kt)("p",null,"Routine Load processes Json data the same as Stream Load. I will not repeat them here."),(0,o.kt)("p",null,"For the Kafka data source, the content of each Massage is treated as a complete Json data. If multiple rows of data expressed in Array format in a Massage are loaded, multiple rows will be loaded, and Kafka's offset will only increase by 1. If an Array format Json represents multiple rows of data, but because the Json format error causes the parsing Json to fail, the error row will only increase by 1 (because the parsing fails, in fact, Doris cannot determine how many rows of data it contains, and can only add one row of errors rows record)."))}m.isMDXComponent=!0}}]);