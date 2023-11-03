"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([[94604],{3905:(e,t,a)=>{a.d(t,{Zo:()=>m,kt:()=>g});var n=a(67294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function l(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?l(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function i(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},l=Object.keys(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var p=n.createContext({}),s=function(e){var t=n.useContext(p),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},m=function(e){var t=s(e.components);return n.createElement(p.Provider,{value:t},e.children)},d="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},c=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,l=e.originalType,p=e.parentName,m=i(e,["components","mdxType","originalType","parentName"]),d=s(a),c=r,g=d["".concat(p,".").concat(c)]||d[c]||u[c]||l;return a?n.createElement(g,o(o({ref:t},m),{},{components:a})):n.createElement(g,o({ref:t},m))}));function g(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=a.length,o=new Array(l);o[0]=c;var i={};for(var p in t)hasOwnProperty.call(t,p)&&(i[p]=t[p]);i.originalType=e,i[d]="string"==typeof e?e:r,o[1]=i;for(var s=2;s<l;s++)o[s]=a[s];return n.createElement.apply(null,o)}return n.createElement.apply(null,a)}c.displayName="MDXCreateElement"},79475:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>p,contentTitle:()=>o,default:()=>u,frontMatter:()=>l,metadata:()=>i,toc:()=>s});var n=a(87462),r=(a(67294),a(3905));const l={title:"Paimon",language:"en"},o=void 0,i={unversionedId:"lakehouse/multi-catalog/paimon",id:"version-2.0/lakehouse/multi-catalog/paimon",title:"Paimon",description:"\x3c!--",source:"@site/versioned_docs/version-2.0/lakehouse/multi-catalog/paimon.md",sourceDirName:"lakehouse/multi-catalog",slug:"/lakehouse/multi-catalog/paimon",permalink:"/docs/lakehouse/multi-catalog/paimon",draft:!1,tags:[],version:"2.0",frontMatter:{title:"Paimon",language:"en"},sidebar:"docs",previous:{title:"Hudi",permalink:"/docs/lakehouse/multi-catalog/hudi"},next:{title:"Alibaba Cloud DLF",permalink:"/docs/lakehouse/multi-catalog/dlf"}},p={},s=[{value:"Instructions for use",id:"instructions-for-use",level:2},{value:"Create Catalog",id:"create-catalog",level:2},{value:"Creating a Catalog Based on FileSystem",id:"creating-a-catalog-based-on-filesystem",level:3},{value:"HDFS",id:"hdfs",level:4},{value:"S3",id:"s3",level:4},{value:"OSS",id:"oss",level:4},{value:"Creating a Catalog Based on Hive Metastore",id:"creating-a-catalog-based-on-hive-metastore",level:3},{value:"Column Type Mapping",id:"column-type-mapping",level:2}],m={toc:s},d="wrapper";function u(e){let{components:t,...a}=e;return(0,r.kt)(d,(0,n.Z)({},m,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"paimon"},"Paimon"),(0,r.kt)("version",{since:"dev"}),(0,r.kt)("h2",{id:"instructions-for-use"},"Instructions for use"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"When data in hdfs,need to put core-site.xml, hdfs-site.xml and hive-site.xml in the conf directory of FE and BE. First read the hadoop configuration file in the conf directory, and then read the related to the environment variable ",(0,r.kt)("inlineCode",{parentName:"li"},"HADOOP_CONF_DIR")," configuration file."),(0,r.kt)("li",{parentName:"ol"},"The currently adapted version of the payment is 0.5.0")),(0,r.kt)("h2",{id:"create-catalog"},"Create Catalog"),(0,r.kt)("p",null,"Paimon Catalog Currently supports two types of Metastore creation catalogs:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"filesystem(default),Store both metadata and data in the file system."),(0,r.kt)("li",{parentName:"ul"},"hive metastore,It also stores metadata in Hive metastore. Users can access these tables directly from Hive.")),(0,r.kt)("h3",{id:"creating-a-catalog-based-on-filesystem"},"Creating a Catalog Based on FileSystem"),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"For versions 2.0.1 and earlier, please use the following ",(0,r.kt)("inlineCode",{parentName:"p"},"Create Catalog based on Hive Metastore"),".")),(0,r.kt)("h4",{id:"hdfs"},"HDFS"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sql"},'CREATE CATALOG `paimon_hdfs` PROPERTIES (\n    "type" = "paimon",\n    "warehouse" = "hdfs://HDFS8000871/user/paimon",\n    "dfs.nameservices" = "HDFS8000871",\n    "dfs.ha.namenodes.HDFS8000871" = "nn1,nn2",\n    "dfs.namenode.rpc-address.HDFS8000871.nn1" = "172.21.0.1:4007",\n    "dfs.namenode.rpc-address.HDFS8000871.nn2" = "172.21.0.2:4007",\n    "dfs.client.failover.proxy.provider.HDFS8000871" = "org.apache.hadoop.hdfs.server.namenode.ha.ConfiguredFailoverProxyProvider",\n    "hadoop.username" = "hadoop"\n);\n\n')),(0,r.kt)("h4",{id:"s3"},"S3"),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"Note that."),(0,r.kt)("p",{parentName:"blockquote"},"user need download ",(0,r.kt)("a",{parentName:"p",href:"https://repo.maven.apache.org/maven2/org/apache/paimon/paimon-s3/0.5.0-incubating/paimon-s3-0.5.0-incubating.jar"},"paimon-s3-0.5.0-incubating.jar")),(0,r.kt)("p",{parentName:"blockquote"},"Place it in directory ${DORIS_HOME}/be/lib/java_extensions/preload-extensions and restart be"),(0,r.kt)("p",{parentName:"blockquote"},"Starting from version 2.0.2, this file can be placed in BE's ",(0,r.kt)("inlineCode",{parentName:"p"},"custom_lib/")," directory (if it does not exist, just create it manually) to prevent the file from being lost due to the replacement of the lib directory when upgrading the cluster.")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sql"},'CREATE CATALOG `paimon_s3` PROPERTIES (\n    "type" = "paimon",\n    "warehouse" = "s3://paimon-1308700295.cos.ap-beijing.myqcloud.com/paimoncos",\n    "s3.endpoint" = "cos.ap-beijing.myqcloud.com",\n    "s3.access_key" = "ak",\n    "s3.secret_key" = "sk"\n);\n\n')),(0,r.kt)("h4",{id:"oss"},"OSS"),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"Note that."),(0,r.kt)("p",{parentName:"blockquote"},"user need download ",(0,r.kt)("a",{parentName:"p",href:"https://repo.maven.apache.org/maven2/org/apache/paimon/paimon-oss/0.5.0-incubating/paimon-oss-0.5.0-incubating.jar"},"paimon-oss-0.5.0-incubating.jar"),"\nPlace it in directory ${DORIS_HOME}/be/lib/java_extensions/preload-extensions and restart be")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sql"},'CREATE CATALOG `paimon_oss` PROPERTIES (\n    "type" = "paimon",\n    "warehouse" = "oss://paimon-zd/paimonoss",\n    "oss.endpoint" = "oss-cn-beijing.aliyuncs.com",\n    "oss.access_key" = "ak",\n    "oss.secret_key" = "sk"\n);\n\n')),(0,r.kt)("h3",{id:"creating-a-catalog-based-on-hive-metastore"},"Creating a Catalog Based on Hive Metastore"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sql"},'CREATE CATALOG `paimon_hms` PROPERTIES (\n    "type" = "paimon",\n    "paimon.catalog.type" = "hms",\n    "warehouse" = "hdfs://HDFS8000871/user/zhangdong/paimon2",\n    "hive.metastore.uris" = "thrift://172.21.0.44:7004",\n    "dfs.nameservices" = "HDFS8000871",\n    "dfs.ha.namenodes.HDFS8000871" = "nn1,nn2",\n    "dfs.namenode.rpc-address.HDFS8000871.nn1" = "172.21.0.1:4007",\n    "dfs.namenode.rpc-address.HDFS8000871.nn2" = "172.21.0.2:4007",\n    "dfs.client.failover.proxy.provider.HDFS8000871" = "org.apache.hadoop.hdfs.server.namenode.ha.ConfiguredFailoverProxyProvider",\n    "hadoop.username" = "hadoop"\n);\n\n')),(0,r.kt)("h2",{id:"column-type-mapping"},"Column Type Mapping"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Paimon Data Type"),(0,r.kt)("th",{parentName:"tr",align:null},"Doris Data Type"),(0,r.kt)("th",{parentName:"tr",align:null},"Comment"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"BooleanType"),(0,r.kt)("td",{parentName:"tr",align:null},"Boolean"),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"TinyIntType"),(0,r.kt)("td",{parentName:"tr",align:null},"TinyInt"),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"SmallIntType"),(0,r.kt)("td",{parentName:"tr",align:null},"SmallInt"),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"IntType"),(0,r.kt)("td",{parentName:"tr",align:null},"Int"),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"FloatType"),(0,r.kt)("td",{parentName:"tr",align:null},"Float"),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"BigIntType"),(0,r.kt)("td",{parentName:"tr",align:null},"BigInt"),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"DoubleType"),(0,r.kt)("td",{parentName:"tr",align:null},"Double"),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"VarCharType"),(0,r.kt)("td",{parentName:"tr",align:null},"VarChar"),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"CharType"),(0,r.kt)("td",{parentName:"tr",align:null},"Char"),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"DecimalType(precision, scale)"),(0,r.kt)("td",{parentName:"tr",align:null},"Decimal(precision, scale)"),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"TimestampType,LocalZonedTimestampType"),(0,r.kt)("td",{parentName:"tr",align:null},"DateTime"),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"DateType"),(0,r.kt)("td",{parentName:"tr",align:null},"Date"),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"MapType"),(0,r.kt)("td",{parentName:"tr",align:null},"Map"),(0,r.kt)("td",{parentName:"tr",align:null},"Support Map nesting")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"ArrayType"),(0,r.kt)("td",{parentName:"tr",align:null},"Array"),(0,r.kt)("td",{parentName:"tr",align:null},"Support Array nesting")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"VarBinaryType, BinaryType"),(0,r.kt)("td",{parentName:"tr",align:null},"Binary"),(0,r.kt)("td",{parentName:"tr",align:null})))))}u.isMDXComponent=!0}}]);