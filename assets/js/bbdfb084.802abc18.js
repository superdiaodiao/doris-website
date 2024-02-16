"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([[31995],{15680:(e,a,t)=>{t.d(a,{xA:()=>c,yg:()=>h});var n=t(96540);function r(e,a,t){return a in e?Object.defineProperty(e,a,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[a]=t,e}function i(e,a){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);a&&(n=n.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),t.push.apply(t,n)}return t}function l(e){for(var a=1;a<arguments.length;a++){var t=null!=arguments[a]?arguments[a]:{};a%2?i(Object(t),!0).forEach((function(a){r(e,a,t[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(t,a))}))}return e}function o(e,a){if(null==e)return{};var t,n,r=function(e,a){if(null==e)return{};var t,n,r={},i=Object.keys(e);for(n=0;n<i.length;n++)t=i[n],a.indexOf(t)>=0||(r[t]=e[t]);return r}(e,a);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)t=i[n],a.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var s=n.createContext({}),p=function(e){var a=n.useContext(s),t=a;return e&&(t="function"==typeof e?e(a):l(l({},a),e)),t},c=function(e){var a=p(e.components);return n.createElement(s.Provider,{value:a},e.children)},d="mdxType",m={inlineCode:"code",wrapper:function(e){var a=e.children;return n.createElement(n.Fragment,{},a)}},g=n.forwardRef((function(e,a){var t=e.components,r=e.mdxType,i=e.originalType,s=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),d=p(t),g=r,h=d["".concat(s,".").concat(g)]||d[g]||m[g]||i;return t?n.createElement(h,l(l({ref:a},c),{},{components:t})):n.createElement(h,l({ref:a},c))}));function h(e,a){var t=arguments,r=a&&a.mdxType;if("string"==typeof e||r){var i=t.length,l=new Array(i);l[0]=g;var o={};for(var s in a)hasOwnProperty.call(a,s)&&(o[s]=a[s]);o.originalType=e,o[d]="string"==typeof e?e:r,l[1]=o;for(var p=2;p<i;p++)l[p]=t[p];return n.createElement.apply(null,l)}return n.createElement.apply(null,t)}g.displayName="MDXCreateElement"},47020:(e,a,t)=>{t.r(a),t.d(a,{assets:()=>s,contentTitle:()=>l,default:()=>m,frontMatter:()=>i,metadata:()=>o,toc:()=>p});var n=t(58168),r=(t(96540),t(15680));const i={title:"Hive",language:"en"},l=void 0,o={unversionedId:"lakehouse/multi-catalog/hive",id:"version-2.0/lakehouse/multi-catalog/hive",title:"Hive",description:"\x3c!--",source:"@site/versioned_docs/version-2.0/lakehouse/multi-catalog/hive.md",sourceDirName:"lakehouse/multi-catalog",slug:"/lakehouse/multi-catalog/hive",permalink:"/docs/lakehouse/multi-catalog/hive",draft:!1,tags:[],version:"2.0",frontMatter:{title:"Hive",language:"en"},sidebar:"docs",previous:{title:"Multi-catalog Overview",permalink:"/docs/lakehouse/multi-catalog/"},next:{title:"Iceberg",permalink:"/docs/lakehouse/multi-catalog/iceberg"}},s={},p=[{value:"Terms and Conditions",id:"terms-and-conditions",level:2},{value:"Create Catalog",id:"create-catalog",level:2},{value:"Hive On HDFS",id:"hive-on-hdfs",level:3},{value:"Hive On VIEWFS",id:"hive-on-viewfs",level:3},{value:"Hive On JuiceFS",id:"hive-on-juicefs",level:3},{value:"Hive On S3",id:"hive-on-s3",level:3},{value:"Hive On OSS",id:"hive-on-oss",level:3},{value:"Hive On OBS",id:"hive-on-obs",level:3},{value:"Hive On COS",id:"hive-on-cos",level:3},{value:"Hive With Glue",id:"hive-with-glue",level:3},{value:"Metadata Cache &amp; Refresh",id:"metadata-cache--refresh",level:2},{value:"Default behavior and TTL",id:"default-behavior-and-ttl",level:3},{value:"Manual refresh",id:"manual-refresh",level:3},{value:"Regular refresh",id:"regular-refresh",level:3},{value:"Auto Refresh",id:"auto-refresh",level:3},{value:"Hive Version",id:"hive-version",level:2},{value:"Column type mapping",id:"column-type-mapping",level:2},{value:"Whether to truncate char or varchar columns according to the schema of the hive table",id:"whether-to-truncate-char-or-varchar-columns-according-to-the-schema-of-the-hive-table",level:2},{value:"Access HMS with broker",id:"access-hms-with-broker",level:2},{value:"Integrate with Apache Ranger",id:"integrate-with-apache-ranger",level:2},{value:"Settings",id:"settings",level:3},{value:"Best Practices",id:"best-practices",level:3}],c={toc:p},d="wrapper";function m(e){let{components:a,...t}=e;return(0,r.yg)(d,(0,n.A)({},c,t,{components:a,mdxType:"MDXLayout"}),(0,r.yg)("h1",{id:"hive"},"Hive"),(0,r.yg)("p",null,"By connecting to Hive Metastore, or a metadata service compatible with Hive Metatore, Doris can automatically obtain Hive database table information and perform data queries."),(0,r.yg)("p",null,"In addition to Hive, many other systems also use the Hive Metastore to store metadata. So through Hive Catalog, we can not only access Hive, but also access systems that use Hive Metastore as metadata storage. Such as Iceberg, Hudi, etc."),(0,r.yg)("h2",{id:"terms-and-conditions"},"Terms and Conditions"),(0,r.yg)("ol",null,(0,r.yg)("li",{parentName:"ol"},"Need to put core-site.xml, hdfs-site.xml and hive-site.xml in the conf directory of FE and BE. First read the hadoop configuration file in the conf directory, and then read the related to the environment variable ",(0,r.yg)("inlineCode",{parentName:"li"},"HADOOP_CONF_DIR")," configuration file."),(0,r.yg)("li",{parentName:"ol"},"hive supports version 1/2/3."),(0,r.yg)("li",{parentName:"ol"},"Support Managed Table and External Table and part of Hive View."),(0,r.yg)("li",{parentName:"ol"},"Can identify hive, iceberg, hudi metadata stored in Hive Metastore.")),(0,r.yg)("h2",{id:"create-catalog"},"Create Catalog"),(0,r.yg)("h3",{id:"hive-on-hdfs"},"Hive On HDFS"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-sql"},"CREATE CATALOG hive PROPERTIES (\n    'type'='hms',\n    'hive.metastore.uris' = 'thrift://172.0.0.1:9083',\n    'hadoop.username' = 'hive',\n    'dfs.nameservices'='your-nameservice',\n    'dfs.ha.namenodes.your-nameservice'='nn1,nn2',\n    'dfs.namenode.rpc-address.your-nameservice.nn1'='172.21.0.2:8088',\n    'dfs.namenode.rpc-address.your-nameservice.nn2'='172.21.0.3:8088',\n    'dfs.client.failover.proxy.provider.your-nameservice'='org.apache.hadoop.hdfs.server.namenode.ha.ConfiguredFailoverProxyProvider'\n);\n")),(0,r.yg)("p",null,"In addition to the two required parameters of ",(0,r.yg)("inlineCode",{parentName:"p"},"type")," and ",(0,r.yg)("inlineCode",{parentName:"p"},"hive.metastore.uris"),", more parameters can be passed to pass the information required for the connection."),(0,r.yg)("p",null,"If HDFS HA information is provided, the example is as follows:"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-sql"},"CREATE CATALOG hive PROPERTIES (\n    'type'='hms',\n    'hive.metastore.uris' = 'thrift://172.0.0.1:9083',\n    'hadoop.username' = 'hive',\n    'dfs.nameservices'='your-nameservice',\n    'dfs.ha.namenodes.your-nameservice'='nn1,nn2',\n    'dfs.namenode.rpc-address.your-nameservice.nn1'='172.21.0.2:8088',\n    'dfs.namenode.rpc-address.your-nameservice.nn2'='172.21.0.3:8088',\n    'dfs.client.failover.proxy.provider.your-nameservice'='org.apache.hadoop.hdfs.server.namenode.ha.ConfiguredFailoverProxyProvider'\n);\n")),(0,r.yg)("p",null,"Provide HDFS HA information and Kerberos authentication information at the same time, examples are as follows:"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-sql"},"CREATE CATALOG hive PROPERTIES (\n    'type'='hms',\n    'hive.metastore.uris' = 'thrift://172.0.0.1:9083',\n    'hive.metastore.sasl.enabled' = 'true',\n    'hive.metastore.kerberos.principal' = 'your-hms-principal',\n    'dfs.nameservices'='your-nameservice',\n    'dfs.ha.namenodes.your-nameservice'='nn1,nn2',\n    'dfs.namenode.rpc-address.your-nameservice.nn1'='172.21.0.2:8088',\n    'dfs.namenode.rpc-address.your-nameservice.nn2'='172.21.0.3:8088',\n    'dfs.client.failover.proxy.provider.your-nameservice'='org.apache.hadoop.hdfs.server.namenode.ha.ConfiguredFailoverProxyProvider',\n    'hadoop.security.authentication' = 'kerberos',\n    'hadoop.kerberos.keytab' = '/your-keytab-filepath/your.keytab',   \n    'hadoop.kerberos.principal' = 'your-principal@YOUR.COM',\n    'yarn.resourcemanager.principal' = 'your-rm-principal'\n);\n")),(0,r.yg)("p",null,"Please place the ",(0,r.yg)("inlineCode",{parentName:"p"},"krb5.conf")," file and ",(0,r.yg)("inlineCode",{parentName:"p"},"keytab")," authentication file under all ",(0,r.yg)("inlineCode",{parentName:"p"},"BE")," and ",(0,r.yg)("inlineCode",{parentName:"p"},"FE")," nodes. The path of the ",(0,r.yg)("inlineCode",{parentName:"p"},"keytab")," authentication file is consistent with the configuration. The ",(0,r.yg)("inlineCode",{parentName:"p"},"krb5.conf")," file is placed in ",(0,r.yg)("inlineCode",{parentName:"p"},"/etc by default /krb5.conf")," path."),(0,r.yg)("p",null,"The value of ",(0,r.yg)("inlineCode",{parentName:"p"},"hive.metastore.kerberos.principal")," needs to be consistent with the property of the same name of the connected hive metastore, which can be obtained from ",(0,r.yg)("inlineCode",{parentName:"p"},"hive-site.xml"),"."),(0,r.yg)("h3",{id:"hive-on-viewfs"},"Hive On VIEWFS"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-sql"},"CREATE CATALOG hive PROPERTIES (\n    'type'='hms',\n    'hive.metastore.uris' = 'thrift://172.0.0.1:9083',\n    'hadoop.username' = 'hive',\n    'dfs.nameservices'='your-nameservice',\n    'dfs.ha.namenodes.your-nameservice'='nn1,nn2',\n    'dfs.namenode.rpc-address.your-nameservice.nn1'='172.21.0.2:8088',\n    'dfs.namenode.rpc-address.your-nameservice.nn2'='172.21.0.3:8088',\n    'dfs.client.failover.proxy.provider.your-nameservice'='org.apache.hadoop.hdfs.server.namenode.ha.ConfiguredFailoverProxyProvider',\n    'fs.defaultFS' = 'viewfs://your-cluster',\n    'fs.viewfs.mounttable.your-cluster.link./ns1' = 'hdfs://your-nameservice/',\n    'fs.viewfs.mounttable.your-cluster.homedir' = '/ns1'\n);\n")),(0,r.yg)("p",null,"viewfs related parameters can be added to the catalog configuration as above, or added to ",(0,r.yg)("inlineCode",{parentName:"p"},"conf/core-site.xml"),"."),(0,r.yg)("p",null,"How viewfs works and parameter configuration, please refer to relevant hadoop documents, for example, ",(0,r.yg)("a",{parentName:"p",href:"https://hadoop.apache.org/docs/stable/hadoop-project-dist/hadoop-hdfs/ViewFs.html"},"https://hadoop.apache.org/docs/stable/hadoop-project-dist/hadoop-hdfs/ViewFs.html")),(0,r.yg)("h3",{id:"hive-on-juicefs"},"Hive On JuiceFS"),(0,r.yg)("p",null,"Data is stored in JuiceFS, examples are as follows:"),(0,r.yg)("p",null,"(Need to put ",(0,r.yg)("inlineCode",{parentName:"p"},"juicefs-hadoop-x.x.x.jar")," under ",(0,r.yg)("inlineCode",{parentName:"p"},"fe/lib/")," and ",(0,r.yg)("inlineCode",{parentName:"p"},"apache_hdfs_broker/lib/"),")"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-sql"},"CREATE CATALOG hive PROPERTIES (\n    'type'='hms',\n    'hive.metastore.uris' = 'thrift://172.0.0.1:9083',\n    'hadoop.username' = 'root',\n    'fs.jfs.impl' = 'io.juicefs.JuiceFileSystem',\n    'fs.AbstractFileSystem.jfs.impl' = 'io.juicefs.JuiceFS',\n    'juicefs.meta' = 'xxx'\n);\n")),(0,r.yg)("h3",{id:"hive-on-s3"},"Hive On S3"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-sql"},'CREATE CATALOG hive PROPERTIES (\n    "type"="hms",\n    "hive.metastore.uris" = "thrift://172.0.0.1:9083",\n    "s3.endpoint" = "s3.us-east-1.amazonaws.com",\n    "s3.region" = "us-east-1",\n    "s3.access_key" = "ak",\n    "s3.secret_key" = "sk"\n    "use_path_style" = "true"\n);\n')),(0,r.yg)("p",null,"Options:"),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},"s3.connection.maximum: s3 maximum connection number, default 50"),(0,r.yg)("li",{parentName:"ul"},"s3.connection.request.timeout: s3 request timeout, default 3000ms"),(0,r.yg)("li",{parentName:"ul"},"s3.connection.timeout: s3 connection timeout, default 1000ms")),(0,r.yg)("h3",{id:"hive-on-oss"},"Hive On OSS"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-sql"},'CREATE CATALOG hive PROPERTIES (\n    "type"="hms",\n    "hive.metastore.uris" = "thrift://172.0.0.1:9083",\n    "oss.endpoint" = "oss.oss-cn-beijing.aliyuncs.com",\n    "oss.access_key" = "ak",\n    "oss.secret_key" = "sk"\n);\n')),(0,r.yg)("h3",{id:"hive-on-obs"},"Hive On OBS"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-sql"},'CREATE CATALOG hive PROPERTIES (\n    "type"="hms",\n    "hive.metastore.uris" = "thrift://172.0.0.1:9083",\n    "obs.endpoint" = "obs.cn-north-4.myhuaweicloud.com",\n    "obs.access_key" = "ak",\n    "obs.secret_key" = "sk"\n);\n')),(0,r.yg)("h3",{id:"hive-on-cos"},"Hive On COS"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-sql"},'CREATE CATALOG hive PROPERTIES (\n    "type"="hms",\n    "hive.metastore.uris" = "thrift://172.0.0.1:9083",\n    "cos.endpoint" = "cos.ap-beijing.myqcloud.com",\n    "cos.access_key" = "ak",\n    "cos.secret_key" = "sk"\n);\n')),(0,r.yg)("h3",{id:"hive-with-glue"},"Hive With Glue"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-sql"},'CREATE CATALOG hive PROPERTIES (\n    "type"="hms",\n    "hive.metastore.type" = "glue",\n    "glue.endpoint" = "https://glue.us-east-1.amazonaws.com",\n    "glue.access_key" = "ak",\n    "glue.secret_key" = "sk"\n);\n')),(0,r.yg)("h2",{id:"metadata-cache--refresh"},"Metadata Cache & Refresh"),(0,r.yg)("p",null,"For Hive Catalog, 4 types of metadata are cached in Doris:"),(0,r.yg)("ol",null,(0,r.yg)("li",{parentName:"ol"},"Table structure: cache table column information, etc."),(0,r.yg)("li",{parentName:"ol"},"Partition value: Cache the partition value information of all partitions of a table."),(0,r.yg)("li",{parentName:"ol"},"Partition information: Cache the information of each partition, such as partition data format, partition storage location, partition value, etc."),(0,r.yg)("li",{parentName:"ol"},"File information: Cache the file information corresponding to each partition, such as file path location, etc.")),(0,r.yg)("p",null,"The above cache information will not be persisted to Doris, so operations such as restarting Doris's FE node, switching masters, etc. may cause the cache to become invalid. After the cache expires, Doris will directly access the Hive MetaStore to obtain information and refill the cache."),(0,r.yg)("p",null,"Metadata cache can be updated automatically, manually, or configured with TTL (Time-to-Live) according to user needs."),(0,r.yg)("h3",{id:"default-behavior-and-ttl"},"Default behavior and TTL"),(0,r.yg)("p",null,"By default, the metadata cache expires 10 minutes after it is first accessed. This time is determined by the configuration parameter ",(0,r.yg)("inlineCode",{parentName:"p"},"external_cache_expire_time_minutes_after_access")," in fe.conf. (Note that in versions 2.0.1 and earlier, the default value for this parameter was 1 day)."),(0,r.yg)("p",null,"For example, if the user accesses the metadata of table A for the first time at 10:00, then the metadata will be cached and will automatically expire after 10:10. If the user accesses the same metadata again at 10:11, Doris will directly access the Hive MetaStore to obtain information and refill the cache."),(0,r.yg)("p",null,(0,r.yg)("inlineCode",{parentName:"p"},"external_cache_expire_time_minutes_after_access")," affects all 4 caches under Catalog."),(0,r.yg)("p",null,"For the ",(0,r.yg)("inlineCode",{parentName:"p"},"INSERT INTO OVERWRITE PARTITION")," operation commonly used in Hive, you can also timely update the ",(0,r.yg)("inlineCode",{parentName:"p"},"File Information Cache")," by configuring the TTL of the ",(0,r.yg)("inlineCode",{parentName:"p"},"File Information Cache"),":"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre"},"CREATE CATALOG hive PROPERTIES (\n     'type'='hms',\n     'hive.metastore.uris' = 'thrift://172.0.0.1:9083',\n     'file.meta.cache.ttl-second' = '60'\n);\n")),(0,r.yg)("p",null,"In the above example, ",(0,r.yg)("inlineCode",{parentName:"p"},"file.meta.cache.ttl-second")," is set to 60 seconds, and the cache will expire after 60 seconds. This parameter will only affect the ",(0,r.yg)("inlineCode",{parentName:"p"},"file information cache"),"."),(0,r.yg)("p",null,"You can also set this value to 0 to disable file caching, which will fetch file information directly from the Hive MetaStore every time."),(0,r.yg)("h3",{id:"manual-refresh"},"Manual refresh"),(0,r.yg)("p",null,"Users need to manually refresh the metadata through the ",(0,r.yg)("a",{parentName:"p",href:"/docs/sql-manual/sql-reference/Utility-Statements/REFRESH"},"REFRESH")," command."),(0,r.yg)("ol",null,(0,r.yg)("li",{parentName:"ol"},(0,r.yg)("p",{parentName:"li"},"REFRESH CATALOG: Refresh the specified Catalog."),(0,r.yg)("pre",{parentName:"li"},(0,r.yg)("code",{parentName:"pre"},'REFRESH CATALOG ctl1 PROPERTIES("invalid_cache" = "true");\n')),(0,r.yg)("p",{parentName:"li"}," This command will refresh the database list, table list, and all cache information of the specified Catalog."),(0,r.yg)("p",{parentName:"li"}," ",(0,r.yg)("inlineCode",{parentName:"p"},"invalid_cache")," indicates whether to flush the cache. Defaults to true. If it is false, only the database and table list of the catalog will be refreshed, but the cache information will not be refreshed. This parameter is applicable when the user only wants to synchronize newly added or deleted database/table information.")),(0,r.yg)("li",{parentName:"ol"},(0,r.yg)("p",{parentName:"li"},"REFRESH DATABASE: Refresh the specified Database."),(0,r.yg)("pre",{parentName:"li"},(0,r.yg)("code",{parentName:"pre"},'REFRESH DATABASE [ctl.]db1 PROPERTIES("invalid_cache" = "true");\n')),(0,r.yg)("p",{parentName:"li"}," This command will refresh the table list of the specified Database and all cached information under the Database."),(0,r.yg)("p",{parentName:"li"}," The meaning of the ",(0,r.yg)("inlineCode",{parentName:"p"},"invalid_cache")," attribute is the same as above. Defaults to true. If false, only the Database's table list will be refreshed, not cached information. This parameter is suitable for users who only want to synchronize newly added or deleted table information.")),(0,r.yg)("li",{parentName:"ol"},(0,r.yg)("p",{parentName:"li"},"REFRESH TABLE: Refresh the specified Table."),(0,r.yg)("pre",{parentName:"li"},(0,r.yg)("code",{parentName:"pre"},"REFRESH TABLE [ctl.][db.]tbl1;\n")),(0,r.yg)("p",{parentName:"li"}," This command will refresh all cache information under the specified Table."))),(0,r.yg)("h3",{id:"regular-refresh"},"Regular refresh"),(0,r.yg)("p",null,"Users can set the scheduled refresh of the Catalog when creating the Catalog."),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre"},"CREATE CATALOG hive PROPERTIES (\n     'type'='hms',\n     'hive.metastore.uris' = 'thrift://172.0.0.1:9083',\n     'metadata_refresh_interval_sec' = '600'\n);\n")),(0,r.yg)("p",null,"In the above example, ",(0,r.yg)("inlineCode",{parentName:"p"},"metadata_refresh_interval_sec")," means refreshing the Catalog every 600 seconds. Equivalent to automatically executing every 600 seconds:"),(0,r.yg)("p",null,(0,r.yg)("inlineCode",{parentName:"p"},'REFRESH CATALOG ctl1 PROPERTIES("invalid_cache" = "true");')),(0,r.yg)("p",null,"The scheduled refresh interval must not be less than 5 seconds."),(0,r.yg)("h3",{id:"auto-refresh"},"Auto Refresh"),(0,r.yg)("p",null,"Currently, Doris only supports automatic update of metadata in Hive Metastore (HMS). It perceives changes in metadata by the FE node which regularly reads the notification events from HMS. The supported events are as follows:"),(0,r.yg)("table",null,(0,r.yg)("thead",{parentName:"table"},(0,r.yg)("tr",{parentName:"thead"},(0,r.yg)("th",{parentName:"tr",align:"left"},"Event"),(0,r.yg)("th",{parentName:"tr",align:"left"},"Corresponding Update Operation"))),(0,r.yg)("tbody",{parentName:"table"},(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:"left"},"CREATE DATABASE"),(0,r.yg)("td",{parentName:"tr",align:"left"},"Create a database in the corresponding catalog.")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:"left"},"DROP DATABASE"),(0,r.yg)("td",{parentName:"tr",align:"left"},"Delete a database in the corresponding catalog.")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:"left"},"ALTER DATABASE"),(0,r.yg)("td",{parentName:"tr",align:"left"},"Such alterations mainly include changes in properties, comments, or storage location of databases. They do not affect Doris' queries in External Catalogs so they will not be synchronized.")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:"left"},"CREATE TABLE"),(0,r.yg)("td",{parentName:"tr",align:"left"},"Create a table in the corresponding database.")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:"left"},"DROP TABLE"),(0,r.yg)("td",{parentName:"tr",align:"left"},"Delete a table in the corresponding database, and invalidate the cache of that table.")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:"left"},"ALTER TABLE"),(0,r.yg)("td",{parentName:"tr",align:"left"},"If it is a renaming, delete the table of the old name, and then create a new table with the new name; otherwise, invalidate the cache of that table.")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:"left"},"ADD PARTITION"),(0,r.yg)("td",{parentName:"tr",align:"left"},"Add a partition to the cached partition list of the corresponding table.")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:"left"},"DROP PARTITION"),(0,r.yg)("td",{parentName:"tr",align:"left"},"Delete a partition from the cached partition list of the corresponding table, and invalidate the cache of that partition.")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:"left"},"ALTER PARTITION"),(0,r.yg)("td",{parentName:"tr",align:"left"},"If it is a renaming, delete the partition of the old name, and then create a new partition with the new name; otherwise, invalidate the cache of that partition.")))),(0,r.yg)("blockquote",null,(0,r.yg)("p",{parentName:"blockquote"},"After data ingestion, changes in partition tables will follow the ",(0,r.yg)("inlineCode",{parentName:"p"},"ALTER PARTITION")," logic, while those in non-partition tables will follow the ",(0,r.yg)("inlineCode",{parentName:"p"},"ALTER TABLE")," logic."),(0,r.yg)("p",{parentName:"blockquote"},"If changes are conducted on the file system directly instead of through the HMS, the HMS will not generate an event. As a result, such changes will not be perceived by Doris.")),(0,r.yg)("p",null,"The automatic update feature involves the following parameters in fe.conf:"),(0,r.yg)("ol",null,(0,r.yg)("li",{parentName:"ol"},(0,r.yg)("inlineCode",{parentName:"li"},"enable_hms_events_incremental_sync"),": This specifies whether to enable automatic incremental synchronization for metadata, which is disabled by default. "),(0,r.yg)("li",{parentName:"ol"},(0,r.yg)("inlineCode",{parentName:"li"},"hms_events_polling_interval_ms"),": This specifies the interval between two readings, which is set to 10000 by default. (Unit: millisecond) "),(0,r.yg)("li",{parentName:"ol"},(0,r.yg)("inlineCode",{parentName:"li"},"hms_events_batch_size_per_rpc"),": This specifies the maximum number of events that are read at a time, which is set to 500 by default.")),(0,r.yg)("p",null,"To enable automatic update(Excluding Huawei MRS), you need to modify the hive-site.xml of HMS and then restart HMS and HiveServer2:"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre"},"<property>\n    <name>hive.metastore.event.db.notification.api.auth</name>\n    <value>false</value>\n</property>\n<property>\n    <name>hive.metastore.dml.events</name>\n    <value>true</value>\n</property>\n<property>\n    <name>hive.metastore.transactional.event.listeners</name>\n    <value>org.apache.hive.hcatalog.listener.DbNotificationListener</value>\n</property>\n\n")),(0,r.yg)("p",null,"Huawei's MRS needs to change hivemetastore-site.xml and restart HMS and HiveServer2:"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre"},"<property>\n    <name>metastore.transactional.event.listeners</name>\n    <value>org.apache.hive.hcatalog.listener.DbNotificationListener</value>\n</property>\n")),(0,r.yg)("p",null,"Note: Value is appended with commas separated from the original value, not overwritten.For example, the default configuration for MRS 3.1.0 is"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre"},"<property>\n    <name>metastore.transactional.event.listeners</name>\n    <value>com.huawei.bigdata.hive.listener.TableKeyFileManagerListener,org.apache.hadoop.hive.metastore.listener.FileAclListener</value>\n</property>\n")),(0,r.yg)("p",null,"We need to change to"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre"},"<property>\n    <name>metastore.transactional.event.listeners</name>\n    <value>com.huawei.bigdata.hive.listener.TableKeyFileManagerListener,org.apache.hadoop.hive.metastore.listener.FileAclListener,org.apache.hive.hcatalog.listener.DbNotificationListener</value>\n</property>\n")),(0,r.yg)("blockquote",null,(0,r.yg)("p",{parentName:"blockquote"},"Note: To enable automatic update, whether for existing Catalogs or newly created Catalogs, all you need is to set ",(0,r.yg)("inlineCode",{parentName:"p"},"enable_hms_events_incremental_sync")," to ",(0,r.yg)("inlineCode",{parentName:"p"},"true"),", and then restart the FE node. You don't need to manually update the metadata before or after the restart.")),(0,r.yg)("h2",{id:"hive-version"},"Hive Version"),(0,r.yg)("p",null,"Doris can correctly access the Hive Metastore in different Hive versions. By default, Doris will access the Hive Metastore with a Hive 2.3 compatible interface. You can also specify the hive version when creating the Catalog. If accessing Hive 1.1.0 version:"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-sql"},"CREATE CATALOG hive PROPERTIES (\n    'type'='hms',\n    'hive.metastore.uris' = 'thrift://172.0.0.1:9083',\n    'hive.version' = '1.1.0'\n);\n")),(0,r.yg)("h2",{id:"column-type-mapping"},"Column type mapping"),(0,r.yg)("p",null,"For Hive/Iceberge/Hudi"),(0,r.yg)("table",null,(0,r.yg)("thead",{parentName:"table"},(0,r.yg)("tr",{parentName:"thead"},(0,r.yg)("th",{parentName:"tr",align:null},"HMS Type"),(0,r.yg)("th",{parentName:"tr",align:null},"Doris Type"),(0,r.yg)("th",{parentName:"tr",align:null},"Comment"))),(0,r.yg)("tbody",{parentName:"table"},(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"boolean"),(0,r.yg)("td",{parentName:"tr",align:null},"boolean"),(0,r.yg)("td",{parentName:"tr",align:null})),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"tinyint"),(0,r.yg)("td",{parentName:"tr",align:null},"tinyint"),(0,r.yg)("td",{parentName:"tr",align:null})),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"smallint"),(0,r.yg)("td",{parentName:"tr",align:null},"smallint"),(0,r.yg)("td",{parentName:"tr",align:null})),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"int"),(0,r.yg)("td",{parentName:"tr",align:null},"int"),(0,r.yg)("td",{parentName:"tr",align:null})),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"bigint"),(0,r.yg)("td",{parentName:"tr",align:null},"bigint"),(0,r.yg)("td",{parentName:"tr",align:null})),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"date"),(0,r.yg)("td",{parentName:"tr",align:null},"date"),(0,r.yg)("td",{parentName:"tr",align:null})),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"timestamp"),(0,r.yg)("td",{parentName:"tr",align:null},"datetime"),(0,r.yg)("td",{parentName:"tr",align:null})),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"float"),(0,r.yg)("td",{parentName:"tr",align:null},"float"),(0,r.yg)("td",{parentName:"tr",align:null})),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"double"),(0,r.yg)("td",{parentName:"tr",align:null},"double"),(0,r.yg)("td",{parentName:"tr",align:null})),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"char"),(0,r.yg)("td",{parentName:"tr",align:null},"char"),(0,r.yg)("td",{parentName:"tr",align:null})),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"varchar"),(0,r.yg)("td",{parentName:"tr",align:null},"varchar"),(0,r.yg)("td",{parentName:"tr",align:null})),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"decimal"),(0,r.yg)("td",{parentName:"tr",align:null},"decimal"),(0,r.yg)("td",{parentName:"tr",align:null})),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("inlineCode",{parentName:"td"},"array<type>")),(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("inlineCode",{parentName:"td"},"array<type>")),(0,r.yg)("td",{parentName:"tr",align:null},"support nested type, for example ",(0,r.yg)("inlineCode",{parentName:"td"},"array<array<int>>"))),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("inlineCode",{parentName:"td"},"map<KeyType, ValueType>")),(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("inlineCode",{parentName:"td"},"map<KeyType, ValueType>")),(0,r.yg)("td",{parentName:"tr",align:null},"support nested type, for example ",(0,r.yg)("inlineCode",{parentName:"td"},"map<string, array<int>>"))),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("inlineCode",{parentName:"td"},"struct<col1: Type1, col2: Type2, ...>")),(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("inlineCode",{parentName:"td"},"struct<col1: Type1, col2: Type2, ...>")),(0,r.yg)("td",{parentName:"tr",align:null},"support nested type, for example ",(0,r.yg)("inlineCode",{parentName:"td"},"struct<col1: array<int>, col2: map<int, date>>"))),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"other"),(0,r.yg)("td",{parentName:"tr",align:null},"unsupported"),(0,r.yg)("td",{parentName:"tr",align:null})))),(0,r.yg)("h2",{id:"whether-to-truncate-char-or-varchar-columns-according-to-the-schema-of-the-hive-table"},"Whether to truncate char or varchar columns according to the schema of the hive table"),(0,r.yg)("p",null,"If the variable ",(0,r.yg)("inlineCode",{parentName:"p"},"truncate_char_or_varchar_columns")," is enabled, when the maximum length of the char or varchar column in the schema of the hive table is inconsistent with the schema in the underlying parquet or orc file, it will be truncated according to the maximum length of the hive table column."),(0,r.yg)("p",null,"The variable default is false."),(0,r.yg)("h2",{id:"access-hms-with-broker"},"Access HMS with broker"),(0,r.yg)("p",null,"Add following setting when creating an HMS catalog, file splitting and scanning for Hive external table will be completed by broker named ",(0,r.yg)("inlineCode",{parentName:"p"},"test_broker")),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-sql"},'"broker.name" = "test_broker"\n')),(0,r.yg)("h2",{id:"integrate-with-apache-ranger"},"Integrate with Apache Ranger"),(0,r.yg)("p",null,"Apache Ranger is a security framework for monitoring, enabling services, and comprehensive data security access management on the Hadoop platform."),(0,r.yg)("p",null,"Currently doris supports ranger library, table, and column permissions, but does not support encryption, row permissions, etc."),(0,r.yg)("h3",{id:"settings"},"Settings"),(0,r.yg)("p",null,"To connect to the Hive Metastore with Ranger permission verification enabled, you need to add configuration & configuration environment:"),(0,r.yg)("ol",null,(0,r.yg)("li",{parentName:"ol"},"When creating a Catalog, add:")),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-sql"},'"access_controller.properties.ranger.service.name" = "hive",\n"access_controller.class" = "org.apache.doris.catalog.authorizer.RangerHiveAccessControllerFactory",\n')),(0,r.yg)("ol",{start:2},(0,r.yg)("li",{parentName:"ol"},(0,r.yg)("p",{parentName:"li"},"Configure all FE environments:"),(0,r.yg)("ol",{parentName:"li"},(0,r.yg)("li",{parentName:"ol"},(0,r.yg)("p",{parentName:"li"},"Copy the configuration files ranger-hive-audit.xml, ranger-hive-security.xml, and ranger-policymgr-ssl.xml under the HMS conf directory to the FE conf directory.")),(0,r.yg)("li",{parentName:"ol"},(0,r.yg)("p",{parentName:"li"},"Modify the properties of ranger-hive-security.xml, the reference configuration is as follows:"),(0,r.yg)("pre",{parentName:"li"},(0,r.yg)("code",{parentName:"pre",className:"language-sql"},'<?xml version="1.0" encoding="UTF-8"?>\n<?xml-stylesheet type="text/xsl" href="configuration.xsl"?>\n<configuration>\n    #The directory for caching permission data, needs to be writable\n    <property>\n        <name>ranger.plugin.hive.policy.cache.dir</name>\n        <value>/mnt/datadisk0/zhangdong/rangerdata</value>\n    </property>\n    #The time interval for periodically pulling permission data\n    <property>\n        <name>ranger.plugin.hive.policy.pollIntervalMs</name>\n        <value>30000</value>\n    </property>\n\n    <property>\n        <name>ranger.plugin.hive.policy.rest.client.connection.timeoutMs</name>\n        <value>60000</value>\n    </property>\n\n    <property>\n        <name>ranger.plugin.hive.policy.rest.client.read.timeoutMs</name>\n        <value>60000</value>\n    </property>\n\n    <property>\n        <name>ranger.plugin.hive.policy.rest.ssl.config.file</name>\n        <value></value>\n    </property>\n\n    <property>\n        <name>ranger.plugin.hive.policy.rest.url</name>\n        <value>http://172.21.0.32:6080</value>\n    </property>\n\n    <property>\n        <name>ranger.plugin.hive.policy.source.impl</name>\n        <value>org.apache.ranger.admin.client.RangerAdminRESTClient</value>\n    </property>\n\n    <property>\n        <name>ranger.plugin.hive.service.name</name>\n        <value>hive</value>\n    </property>\n\n    <property>\n        <name>xasecure.hive.update.xapolicies.on.grant.revoke</name>\n        <value>true</value>\n    </property>\n\n</configuration>\n'))),(0,r.yg)("li",{parentName:"ol"},(0,r.yg)("p",{parentName:"li"},"In order to obtain the log of Ranger authentication itself, add the configuration file log4j.properties in the ",(0,r.yg)("inlineCode",{parentName:"p"},"<doris_home>/conf")," directory.")),(0,r.yg)("li",{parentName:"ol"},(0,r.yg)("p",{parentName:"li"},"Restart FE."))))),(0,r.yg)("h3",{id:"best-practices"},"Best Practices"),(0,r.yg)("ol",null,(0,r.yg)("li",{parentName:"ol"},(0,r.yg)("p",{parentName:"li"},"Create user user1 on the ranger side and authorize the query permission of db1.table1.col1")),(0,r.yg)("li",{parentName:"ol"},(0,r.yg)("p",{parentName:"li"},"Create role role1 on the ranger side and authorize the query permission of db1.table1.col2")),(0,r.yg)("li",{parentName:"ol"},(0,r.yg)("p",{parentName:"li"},"Create a user user1 with the same name in doris, user1 will directly have the query authority of db1.table1.col1")),(0,r.yg)("li",{parentName:"ol"},(0,r.yg)("p",{parentName:"li"},"Create role1 with the same name in doris, and assign role1 to user1, user1 will have the query authority of db1.table1.col1 and col2 at the same time"))))}m.isMDXComponent=!0}}]);