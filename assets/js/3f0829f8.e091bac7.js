"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([[57174],{3905:(e,t,a)=>{a.d(t,{Zo:()=>p,kt:()=>f});var n=a(67294);function o(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function r(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?r(Object(a),!0).forEach((function(t){o(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,n,o=function(e,t){if(null==e)return{};var a,n,o={},r=Object.keys(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||(o[a]=e[a]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(o[a]=e[a])}return o}var l=n.createContext({}),c=function(e){var t=n.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},p=function(e){var t=c(e.components);return n.createElement(l.Provider,{value:t},e.children)},d="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var a=e.components,o=e.mdxType,r=e.originalType,l=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),d=c(a),m=o,f=d["".concat(l,".").concat(m)]||d[m]||u[m]||r;return a?n.createElement(f,i(i({ref:t},p),{},{components:a})):n.createElement(f,i({ref:t},p))}));function f(e,t){var a=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var r=a.length,i=new Array(r);i[0]=m;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[d]="string"==typeof e?e:o,i[1]=s;for(var c=2;c<r;c++)i[c]=a[c];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}m.displayName="MDXCreateElement"},84923:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>u,frontMatter:()=>r,metadata:()=>s,toc:()=>c});var n=a(87462),o=(a(67294),a(3905));const r={title:"Paimon",language:"en"},i=void 0,s={unversionedId:"lakehouse/multi-catalog/paimon",id:"lakehouse/multi-catalog/paimon",title:"Paimon",description:"\x3c!--",source:"@site/docs/lakehouse/multi-catalog/paimon.md",sourceDirName:"lakehouse/multi-catalog",slug:"/lakehouse/multi-catalog/paimon",permalink:"/docs/dev/lakehouse/multi-catalog/paimon",draft:!1,tags:[],version:"current",frontMatter:{title:"Paimon",language:"en"},sidebar:"docs",previous:{title:"Hudi",permalink:"/docs/dev/lakehouse/multi-catalog/hudi"},next:{title:"Alibaba Cloud DLF",permalink:"/docs/dev/lakehouse/multi-catalog/dlf"}},l={},c=[{value:"Instructions for use",id:"instructions-for-use",level:2},{value:"Create Catalog",id:"create-catalog",level:2},{value:"Creating a Catalog Based on FileSystem",id:"creating-a-catalog-based-on-filesystem",level:3},{value:"HDFS",id:"hdfs",level:4},{value:"S3",id:"s3",level:4},{value:"OSS",id:"oss",level:4},{value:"Creating a Catalog Based on Hive Metastore",id:"creating-a-catalog-based-on-hive-metastore",level:3},{value:"Column Type Mapping",id:"column-type-mapping",level:2}],p={toc:c},d="wrapper";function u(e){let{components:t,...a}=e;return(0,o.kt)(d,(0,n.Z)({},p,a,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"paimon"},"Paimon"),(0,o.kt)("version",{since:"dev"}),(0,o.kt)("h2",{id:"instructions-for-use"},"Instructions for use"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"When data in hdfs,need to put core-site.xml, hdfs-site.xml and hive-site.xml in the conf directory of FE and BE. First read the hadoop configuration file in the conf directory, and then read the related to the environment variable ",(0,o.kt)("inlineCode",{parentName:"li"},"HADOOP_CONF_DIR")," configuration file."),(0,o.kt)("li",{parentName:"ol"},"The currently adapted version of the payment is 0.4.0")),(0,o.kt)("h2",{id:"create-catalog"},"Create Catalog"),(0,o.kt)("p",null,"Paimon Catalog Currently supports two types of Metastore creation catalogs:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"filesystem(default),Store both metadata and data in the file system."),(0,o.kt)("li",{parentName:"ul"},"hive metastore,It also stores metadata in Hive metastore. Users can access these tables directly from Hive.")),(0,o.kt)("h3",{id:"creating-a-catalog-based-on-filesystem"},"Creating a Catalog Based on FileSystem"),(0,o.kt)("h4",{id:"hdfs"},"HDFS"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sql"},'CREATE CATALOG `paimon_hdfs` PROPERTIES (\n    "type" = "paimon",\n    "warehouse" = "hdfs://HDFS8000871/user/paimon",\n    "dfs.nameservices"="HDFS8000871",\n    "dfs.ha.namenodes.HDFS8000871"="nn1,nn2",\n    "dfs.namenode.rpc-address.HDFS8000871.nn1"="172.21.0.1:4007",\n    "dfs.namenode.rpc-address.HDFS8000871.nn2"="172.21.0.2:4007",\n    "dfs.client.failover.proxy.provider.HDFS8000871"="org.apache.hadoop.hdfs.server.namenode.ha.ConfiguredFailoverProxyProvider",\n    "hadoop.username"="hadoop"\n);\n\n')),(0,o.kt)("h4",{id:"s3"},"S3"),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"Note that."),(0,o.kt)("p",{parentName:"blockquote"},"user need download ",(0,o.kt)("a",{parentName:"p",href:"https://repo.maven.apache.org/maven2/org/apache/paimon/paimon-s3/0.4.0-incubating/paimon-s3-0.4.0-incubating.jar"},"paimon-s3-0.4.0-incubating.jar")),(0,o.kt)("p",{parentName:"blockquote"},"Place it in directory ${DORIS_HOME}/be/lib/java_extensions/preload-extensions and restart be"),(0,o.kt)("p",{parentName:"blockquote"},"Starting from version 2.0.2, this file can be placed in BE's ",(0,o.kt)("inlineCode",{parentName:"p"},"custom_lib/")," directory (if it does not exist, just create it manually) to prevent the file from being lost due to the replacement of the lib directory when upgrading the cluster.")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sql"},'CREATE CATALOG `paimon_s3` PROPERTIES (\n    "type" = "paimon",\n    "warehouse" = "s3://paimon-1308700295.cos.ap-beijing.myqcloud.com/paimoncos",\n    "s3.endpoint"="cos.ap-beijing.myqcloud.com",\n    "s3.access_key"="ak",\n    "s3.secret_key"="sk"\n);\n\n')),(0,o.kt)("h4",{id:"oss"},"OSS"),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"Note that."),(0,o.kt)("p",{parentName:"blockquote"},"user need download ",(0,o.kt)("a",{parentName:"p",href:"https://repo.maven.apache.org/maven2/org/apache/paimon/paimon-oss/0.4.0-incubating/paimon-oss-0.4.0-incubating.jar"},"paimon-oss-0.4.0-incubating.jar"),"\nPlace it in directory ${DORIS_HOME}/be/lib/java_extensions/preload-extensions and restart be")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sql"},'CREATE CATALOG `paimon_oss` PROPERTIES (\n    "type" = "paimon",\n    "warehouse" = "oss://paimon-zd/paimonoss",\n    "oss.endpoint"="oss-cn-beijing.aliyuncs.com",\n    "oss.access_key"="ak",\n    "oss.secret_key"="sk"\n);\n\n')),(0,o.kt)("h3",{id:"creating-a-catalog-based-on-hive-metastore"},"Creating a Catalog Based on Hive Metastore"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sql"},'CREATE CATALOG `paimon_hms` PROPERTIES (\n    "type" = "paimon",\n    "paimon.catalog.type"="hms",\n    "warehouse" = "hdfs://HDFS8000871/user/zhangdong/paimon2",\n    "hive.metastore.uris" = "thrift://172.21.0.44:7004",\n    "dfs.nameservices\'=\'HDFS8000871",\n    "dfs.ha.namenodes.HDFS8000871\'=\'nn1,nn2",\n    "dfs.namenode.rpc-address.HDFS8000871.nn1"="172.21.0.1:4007",\n    "dfs.namenode.rpc-address.HDFS8000871.nn2"="172.21.0.2:4007",\n    "dfs.client.failover.proxy.provider.HDFS8000871"="org.apache.hadoop.hdfs.server.namenode.ha.ConfiguredFailoverProxyProvider",\n    "hadoop.username"="hadoop"\n);\n\n')),(0,o.kt)("h2",{id:"column-type-mapping"},"Column Type Mapping"),(0,o.kt)("p",null,"Same as that in Hive Catalogs. See the relevant section in ",(0,o.kt)("a",{parentName:"p",href:"/docs/dev/lakehouse/multi-catalog/hive"},"Hive"),"."))}u.isMDXComponent=!0}}]);