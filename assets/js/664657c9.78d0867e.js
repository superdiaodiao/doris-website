"use strict";(self.webpackChunkselectdb_portal=self.webpackChunkselectdb_portal||[]).push([[19907],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>f});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var i=r.createContext({}),c=function(e){var t=r.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},p=function(e){var t=c(e.components);return r.createElement(i.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,l=e.originalType,i=e.parentName,p=o(e,["components","mdxType","originalType","parentName"]),u=c(n),m=a,f=u["".concat(i,".").concat(m)]||u[m]||d[m]||l;return n?r.createElement(f,s(s({ref:t},p),{},{components:n})):r.createElement(f,s({ref:t},p))}));function f(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=n.length,s=new Array(l);s[0]=m;var o={};for(var i in t)hasOwnProperty.call(t,i)&&(o[i]=t[i]);o.originalType=e,o[u]="string"==typeof e?e:a,s[1]=o;for(var c=2;c<l;c++)s[c]=n[c];return r.createElement.apply(null,s)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},57247:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>i,contentTitle:()=>s,default:()=>d,frontMatter:()=>l,metadata:()=>o,toc:()=>c});var r=n(87462),a=(n(67294),n(3905));const l={title:"STRUCT",language:"en"},s=void 0,o={unversionedId:"sql-manual/sql-reference/Data-Types/STRUCT",id:"sql-manual/sql-reference/Data-Types/STRUCT",title:"STRUCT",description:"\x3c!--",source:"@site/docs/sql-manual/sql-reference/Data-Types/STRUCT.md",sourceDirName:"sql-manual/sql-reference/Data-Types",slug:"/sql-manual/sql-reference/Data-Types/STRUCT",permalink:"/docs/dev/sql-manual/sql-reference/Data-Types/STRUCT",draft:!1,tags:[],version:"current",frontMatter:{title:"STRUCT",language:"en"},sidebar:"docs",previous:{title:"MAP",permalink:"/docs/dev/sql-manual/sql-reference/Data-Types/MAP"},next:{title:"JSON",permalink:"/docs/dev/sql-manual/sql-reference/Data-Types/JSON"}},i={},c=[{value:"STRUCT",id:"struct",level:2},{value:"name",id:"name",level:3},{value:"description",id:"description",level:3},{value:"example",id:"example",level:3},{value:"keywords",id:"keywords",level:3}],p={toc:c},u="wrapper";function d(e){let{components:t,...n}=e;return(0,a.kt)(u,(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"struct"},"STRUCT"),(0,a.kt)("h3",{id:"name"},"name"),(0,a.kt)("version",{since:"2.0.0"},(0,a.kt)("p",null,"STRUCT")),(0,a.kt)("h3",{id:"description"},"description"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"STRUCT<field_name:field_type [COMMENT 'comment_string'], ... >")),(0,a.kt)("p",null,"Represents value with structure described by multiple fields, which can be viewed as a collection of multiple columns."),(0,a.kt)("p",null,"It cannot be used as a Key column. Now STRUCT can only used in Duplicate Model Tables."),(0,a.kt)("p",null,"The names and number of Fields in a Struct is fixed and always Nullable, and a Field typically consists of the following parts."),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"field_name: Identifier naming the field, non repeatable."),(0,a.kt)("li",{parentName:"ul"},"field_type: A data type."),(0,a.kt)("li",{parentName:"ul"},"COMMENT: An optional string describing the field. (currently not supported)")),(0,a.kt)("p",null,"We have a todo list for future version:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"TODO:\n    1\u3001\u652f\u6301 COMMENT\n    2\u3001\u652f\u6301 DECIMALV3 \u7c7b\u578b\n    3\u3001\u652f\u6301\u5d4c\u5957 STRUCT \u6216\u5176\u4ed6\u7684\u590d\u6742\u7c7b\u578b\n")),(0,a.kt)("h3",{id:"example"},"example"),(0,a.kt)("p",null,"Create table example:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},'mysql> CREATE TABLE `struct_test` (\n  `id` int(11) NULL,\n  `s_info` STRUCT<s_id:int(11), s_name:string, s_address:string> NULL\n) ENGINE=OLAP\nDUPLICATE KEY(`id`)\nCOMMENT \'OLAP\'\nDISTRIBUTED BY HASH(`id`) BUCKETS 1\nPROPERTIES (\n"replication_allocation" = "tag.location.default: 1",\n"storage_format" = "V2",\n"light_schema_change" = "true",\n"disable_auto_compaction" = "false"\n);\n')),(0,a.kt)("p",null,"Insert data example:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"INSERT INTO `struct_test` VALUES (1, {1, 'sn1', 'sa1'});\nINSERT INTO `struct_test` VALUES (2, struct(2, 'sn2', 'sa2'));\nINSERT INTO `struct_test` VALUES (3, named_struct('s_id', 3, 's_name', 'sn3', 's_address', 'sa3'));\n")),(0,a.kt)("p",null,"Stream load:"),(0,a.kt)("p",null,"test.csv\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},'1|{"s_id":1, "s_name":"sn1", "s_address":"sa1"}\n2|{s_id:2, s_name:sn2, s_address:sa2}\n3|{"s_address":"sa3", "s_name":"sn3", "s_id":3}\n')),(0,a.kt)("p",null,"exmaple:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},'curl --location-trusted -u root -T test.csv  -H "label:test_label" http://host:port/api/test/struct_test/_stream_load\n')),(0,a.kt)("p",null,"Select data example:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"mysql> select * from struct_test;\n+------+-------------------+\n| id   | s_info            |\n+------+-------------------+\n|    1 | {1, 'sn1', 'sa1'} |\n|    2 | {2, 'sn2', 'sa2'} |\n|    3 | {3, 'sn3', 'sa3'} |\n+------+-------------------+\n3 rows in set (0.02 sec)\n")),(0,a.kt)("h3",{id:"keywords"},"keywords"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"STRUCT\n")))}d.isMDXComponent=!0}}]);