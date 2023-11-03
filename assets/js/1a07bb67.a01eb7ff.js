"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([[70593],{3905:(e,t,a)=>{a.d(t,{Zo:()=>d,kt:()=>u});var n=a(67294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},i=Object.keys(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var p=n.createContext({}),s=function(e){var t=n.useContext(p),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},d=function(e){var t=s(e.components);return n.createElement(p.Provider,{value:t},e.children)},c="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},h=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,i=e.originalType,p=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),c=s(a),h=r,u=c["".concat(p,".").concat(h)]||c[h]||m[h]||i;return a?n.createElement(u,o(o({ref:t},d),{},{components:a})):n.createElement(u,o({ref:t},d))}));function u(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=a.length,o=new Array(i);o[0]=h;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l[c]="string"==typeof e?e:r,o[1]=l;for(var s=2;s<i;s++)o[s]=a[s];return n.createElement.apply(null,o)}return n.createElement.apply(null,a)}h.displayName="MDXCreateElement"},43845:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>p,contentTitle:()=>o,default:()=>m,frontMatter:()=>i,metadata:()=>l,toc:()=>s});var n=a(87462),r=(a(67294),a(3905));const i={title:"FAQ",language:"en"},o=void 0,l={unversionedId:"lakehouse/faq",id:"lakehouse/faq",title:"FAQ",description:"\x3c!--",source:"@site/docs/lakehouse/faq.md",sourceDirName:"lakehouse",slug:"/lakehouse/faq",permalink:"/docs/dev/lakehouse/faq",draft:!1,tags:[],version:"current",frontMatter:{title:"FAQ",language:"en"},sidebar:"docs",previous:{title:"File System Benchmark Tools",permalink:"/docs/dev/lakehouse/fs-benchmark-tool"},next:{title:"Spark Doris Connector",permalink:"/docs/dev/ecosystem/spark-doris-connector"}},p={},s=[{value:"Kerberos",id:"kerberos",level:2},{value:"JDBC Catalog",id:"jdbc-catalog",level:2},{value:"Hive Catalog",id:"hive-catalog",level:2},{value:"HDFS",id:"hdfs",level:2},{value:"DLF Catalog",id:"dlf-catalog",level:2}],d={toc:s},c="wrapper";function m(e){let{components:t,...a}=e;return(0,r.kt)(c,(0,n.Z)({},d,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"faq"},"FAQ"),(0,r.kt)("h2",{id:"kerberos"},"Kerberos"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"What to do with the ",(0,r.kt)("inlineCode",{parentName:"p"},"GSS initiate failed")," error when connecting to Hive Metastore with Kerberos authentication?"),(0,r.kt)("p",{parentName:"li"},"Usually it is caused by incorrect Kerberos authentication information, you can troubleshoot by the following steps:"),(0,r.kt)("ol",{parentName:"li"},(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"In versions before  1.2.1, the libhdfs3 library that Doris depends on does not enable gsasl. Please update to a version later than 1.2.2.")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Confirm that the correct keytab and principal are set for each component, and confirm that the keytab file exists on all FE and BE nodes."),(0,r.kt)("ol",{parentName:"li"},(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("inlineCode",{parentName:"li"},"hadoop.kerberos.keytab"),"/",(0,r.kt)("inlineCode",{parentName:"li"},"hadoop.kerberos.principal"),": for Hadoop HDFS"),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("inlineCode",{parentName:"li"},"hive.metastore.kerberos.principal"),": for hive metastore."))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Try to replace the IP in the principal with a domain name (do not use the default ",(0,r.kt)("inlineCode",{parentName:"p"},"_HOST")," placeholder)")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Confirm that the ",(0,r.kt)("inlineCode",{parentName:"p"},"/etc/krb5.conf")," file exists on all FE and BE nodes.")))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"An error is reported when connecting to the Hive database through the Hive Catalog: ",(0,r.kt)("inlineCode",{parentName:"p"},"RemoteException: SIMPLE authentication is not enabled. Available: [TOKEN, KERBEROS]")),(0,r.kt)("p",{parentName:"li"},"If both ",(0,r.kt)("inlineCode",{parentName:"p"},"show databases")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"show tables")," are OK, and the above error occurs when querying, we need to perform the following two operations:"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"Core-site.xml and hdfs-site.xml need to be placed in the fe/conf and be/conf directories"),(0,r.kt)("li",{parentName:"ul"},"The BE node executes the kinit of Kerberos, restarts the BE, and then executes the query."))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"If an error is reported while querying the catalog with Kerberos: ",(0,r.kt)("inlineCode",{parentName:"p"},"GSSException: No valid credentials provided (Mechanism level: Failed to find any Kerberos Ticket)"),"."),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"Restarting FE and BE can solve the problem in most cases."),(0,r.kt)("li",{parentName:"ul"},"Before the restart all the nodes, can put ",(0,r.kt)("inlineCode",{parentName:"li"},"-Djavax.security.auth.useSubjectCredsOnly=false")," to the ",(0,r.kt)("inlineCode",{parentName:"li"},"JAVA_OPTS")," in ",(0,r.kt)("inlineCode",{parentName:"li"},'"${DORIS_HOME}/be/conf/be.conf"'),", which can obtain credentials through the underlying mechanism, rather than through the application."),(0,r.kt)("li",{parentName:"ul"},"Get more solutions to common JAAS errors from the ",(0,r.kt)("a",{parentName:"li",href:"https://docs.oracle.com/javase/8/docs/technotes/guides/security/jgss/tutorials/Troubleshooting.html"},"JAAS Troubleshooting"),"."))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"The solutions when configuring Kerberos in the catalog and encounter an error: ",(0,r.kt)("inlineCode",{parentName:"p"},"Unable to obtain password from user"),"."),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"The principal used must exist in the klist, use ",(0,r.kt)("inlineCode",{parentName:"li"},"klist -kt your.keytab")," to check."),(0,r.kt)("li",{parentName:"ul"},"Ensure the catalog configuration correct, such as missing the ",(0,r.kt)("inlineCode",{parentName:"li"},"yarn.resourcemanager.principal"),"."),(0,r.kt)("li",{parentName:"ul"},"If the preceding checks are correct, the JDK version installed by yum or other package-management utility in the current system maybe have an unsupported encryption algorithm. It is recommended to install JDK by yourself and set ",(0,r.kt)("inlineCode",{parentName:"li"},"JAVA_HOME")," environment variable."))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"An error is reported when using KMS to access HDFS: ",(0,r.kt)("inlineCode",{parentName:"p"},"java.security.InvalidKeyException: Illegal key size")),(0,r.kt)("p",{parentName:"li"},"Upgrade the JDK version to a version >= Java 8 u162. Or download and install the JCE Unlimited Strength Jurisdiction Policy Files corresponding to the JDK.")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"If an error is reported while configuring Kerberos in the catalog: ",(0,r.kt)("inlineCode",{parentName:"p"},"SIMPLE authentication is not enabled. Available:[TOKEN, KERBEROS]"),"."),(0,r.kt)("p",{parentName:"li"},"Need to put ",(0,r.kt)("inlineCode",{parentName:"p"},"core-site.xml")," to the ",(0,r.kt)("inlineCode",{parentName:"p"},'"${DORIS_HOME}/be/conf"')," directory."),(0,r.kt)("p",{parentName:"li"},"If an error is reported while accessing HDFS: ",(0,r.kt)("inlineCode",{parentName:"p"},"No common protection layer between client and server"),", check the ",(0,r.kt)("inlineCode",{parentName:"p"},"hadoop.rpc.protection")," on the client and server to make them consistent."),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre"},'    <?xml version="1.0" encoding="UTF-8"?>\n    <?xml-stylesheet type="text/xsl" href="configuration.xsl"?>\n    \n    <configuration>\n    \n        <property>\n            <name>hadoop.security.authentication</name>\n            <value>kerberos</value>\n        </property>\n    \n    </configuration>\n'))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"If an error is reported while configuring Kerberos for Broker Load: ",(0,r.kt)("inlineCode",{parentName:"p"},"Cannot locate default realm."),"."),(0,r.kt)("p",{parentName:"li"},"Add ",(0,r.kt)("inlineCode",{parentName:"p"},"-Djava.security.krb5.conf=/your-path")," to the ",(0,r.kt)("inlineCode",{parentName:"p"},"JAVA_OPTS")," of the broker startup script ",(0,r.kt)("inlineCode",{parentName:"p"},"start_broker.sh"),".")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"When using Kerberos configuration in the Catalog, the ",(0,r.kt)("inlineCode",{parentName:"p"},"hadoop.username")," property cannot be appeared in Catalog properties."))),(0,r.kt)("h2",{id:"jdbc-catalog"},"JDBC Catalog"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"An error is reported when connecting to SQLServer through JDBC Catalog: ",(0,r.kt)("inlineCode",{parentName:"p"},"unable to find valid certification path to requested target")),(0,r.kt)("p",{parentName:"li"},"Please add ",(0,r.kt)("inlineCode",{parentName:"p"},"trustServerCertificate=true")," option in ",(0,r.kt)("inlineCode",{parentName:"p"},"jdbc_url"),".")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"When connecting to the MySQL database through the JDBC Catalog, the Chinese characters are garbled, or the Chinese character condition query is incorrect"),(0,r.kt)("p",{parentName:"li"},"Please add ",(0,r.kt)("inlineCode",{parentName:"p"},"useUnicode=true&characterEncoding=utf-8")," in ",(0,r.kt)("inlineCode",{parentName:"p"},"jdbc_url")),(0,r.kt)("blockquote",{parentName:"li"},(0,r.kt)("p",{parentName:"blockquote"},"Note: After version 1.2.3, these parameters will be automatically added when using JDBC Catalog to connect to the MySQL database."))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"An error is reported when connecting to the MySQL database through the JDBC Catalog: ",(0,r.kt)("inlineCode",{parentName:"p"},"Establishing SSL connection without server's identity verification is not recommended")),(0,r.kt)("p",{parentName:"li"},"Please add ",(0,r.kt)("inlineCode",{parentName:"p"},"useSSL=true")," in ",(0,r.kt)("inlineCode",{parentName:"p"},"jdbc_url"))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"When using JDBC Catalog to synchronize MySQL data to Doris, the date data synchronization error occurs. It is necessary to check whether the MySQL version corresponds to the MySQL driver package. For example, the driver com.mysql.cj.jdbc.Driver is required for MySQL8 and above."))),(0,r.kt)("h2",{id:"hive-catalog"},"Hive Catalog"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"What to do with errors such as  ",(0,r.kt)("inlineCode",{parentName:"p"},"failed to get schema")," and  ",(0,r.kt)("inlineCode",{parentName:"p"},"Storage schema reading not supported"),"  when accessing Icerberg tables via Hive Metastore?"),(0,r.kt)("p",{parentName:"li"},"To fix this, please place the Jar file package of ",(0,r.kt)("inlineCode",{parentName:"p"},"iceberg")," runtime in the ",(0,r.kt)("inlineCode",{parentName:"p"},"lib/")," directory of Hive."),(0,r.kt)("p",{parentName:"li"},"And configure as follows in  ",(0,r.kt)("inlineCode",{parentName:"p"},"hive-site.xml")," :"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre"},"metastore.storage.schema.reader.impl=org.apache.hadoop.hive.metastore.SerDeStorageSchemaReader\n")),(0,r.kt)("p",{parentName:"li"},"After configuring, please restart Hive Metastore.")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"An error is reported when connecting Hive Catalog: ",(0,r.kt)("inlineCode",{parentName:"p"},"Caused by: java.lang.NullPointerException")),(0,r.kt)("p",{parentName:"li"},"If there is stack trace in fe.log:"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre"},"Caused by: java.lang.NullPointerException\n    at org.apache.hadoop.hive.ql.security.authorization.plugin.AuthorizationMetaStoreFilterHook.getFilteredObjects(AuthorizationMetaStoreFilterHook.java:78) ~[hive-exec-3.1.3-core.jar:3.1.3]\n    at org.apache.hadoop.hive.ql.security.authorization.plugin.AuthorizationMetaStoreFilterHook.filterDatabases(AuthorizationMetaStoreFilterHook.java:55) ~[hive-exec-3.1.3-core.jar:3.1.3]\n    at org.apache.hadoop.hive.metastore.HiveMetaStoreClient.getAllDatabases(HiveMetaStoreClient.java:1548) ~[doris-fe.jar:3.1.3]\n    at org.apache.hadoop.hive.metastore.HiveMetaStoreClient.getAllDatabases(HiveMetaStoreClient.java:1542) ~[doris-fe.jar:3.1.3]\n    at sun.reflect.NativeMethodAccessorImpl.invoke0(Native Method) ~[?:1.8.0_181]\n")),(0,r.kt)("p",{parentName:"li"},"Try adding ",(0,r.kt)("inlineCode",{parentName:"p"},'"metastore.filter.hook" = "org.apache.hadoop.hive.metastore.DefaultMetaStoreFilterHookImpl"')," in ",(0,r.kt)("inlineCode",{parentName:"p"},"create catalog")," statement.")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"If the ",(0,r.kt)("inlineCode",{parentName:"p"},"show tables")," is normal after creating the Hive Catalog, but the query report ",(0,r.kt)("inlineCode",{parentName:"p"},"java.net.UnknownHostException: xxxxx")),(0,r.kt)("p",{parentName:"li"},"Add a property in CATALOG:"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre"},"'fs.defaultFS' = 'hdfs://<your_nameservice_or_actually_HDFS_IP_and_port>'\n"))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"The table in orc format of Hive 1.x may encounter system column names such as ",(0,r.kt)("inlineCode",{parentName:"p"},"_col0"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"_col1"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"_col2"),"... in the underlying orc file schema, which need to be specified in the catalog configuration. Add ",(0,r.kt)("inlineCode",{parentName:"p"},"hive.version")," to 1.x.x so that it will use the column names in the hive table for mapping."),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-sql"},"CREATE CATALOG hive PROPERTIES (\n    'hive.version' = '1.x.x'\n);\n"))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"If an error related to the Hive Metastore is reported while querying the catalog: ",(0,r.kt)("inlineCode",{parentName:"p"},"Invalid method name"),"."),(0,r.kt)("p",{parentName:"li"},"Configure the ",(0,r.kt)("inlineCode",{parentName:"p"},"hive.version"),"."),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-sql"},"CREATE CATALOG hive PROPERTIES (\n    'hive.version' = '2.x.x'\n);\n"))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"When querying a table in ORC format, FE reports an error ",(0,r.kt)("inlineCode",{parentName:"p"},"Could not obtain block")," or ",(0,r.kt)("inlineCode",{parentName:"p"},"Caused by: java.lang.NoSuchFieldError: types")),(0,r.kt)("p",{parentName:"li"},"For ORC files, by default, FE will access HDFS to obtain file information and split files. In some cases, FE may not be able to access HDFS. It can be solved by adding the following parameters:"),(0,r.kt)("p",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"p"},'"hive.exec.orc.split.strategy" = "BI"')),(0,r.kt)("p",{parentName:"li"},"Other options: HYBRID (default), ETL.")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"The values of the partition fields in the hudi table can be found on hive, but they cannot be found on doris."),(0,r.kt)("p",{parentName:"li"},"Doris and hive currently query hudi differently. Doris needs to add partition fields to the avsc file of the hudi table structure. If not added, it will cause Doris to query partition_ Val is empty (even if home. datasource. live_sync. partition_fields=partition_val is set)"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre"},'{\n    "type": "record",\n    "name": "record",\n    "fields": [{\n        "name": "partition_val",\n        "type": [\n            "null",\n            "string"\n            ],\n        "doc": "Preset partition field, empty string when not partitioned",\n        "default": null\n        },\n        {\n        "name": "name",\n        "type": "string",\n        "doc": "\u540d\u79f0"\n        },\n        {\n        "name": "create_time",\n        "type": "string",\n        "doc": "\u521b\u5efa\u65f6\u95f4"\n        }\n    ]\n}\n'))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Query the appearance of hive and encounter this error:",(0,r.kt)("inlineCode",{parentName:"p"},"java.lang.ClassNotFoundException: Class com.hadoop.compression.lzo.LzoCodec not found")),(0,r.kt)("p",{parentName:"li"},'Search in the hadoop environment hadoop-lzo-*.jar, and put it under "${DORIS_HOME}/fe/lib/",then restart fe.'),(0,r.kt)("p",{parentName:"li"},"Starting from version 2.0.2, this file can be placed in BE's ",(0,r.kt)("inlineCode",{parentName:"p"},"custom_lib/")," directory (if it does not exist, just create it manually) to prevent the file from being lost due to the replacement of the lib directory when upgrading the cluster.")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Create a hive table specifying ",(0,r.kt)("inlineCode",{parentName:"p"},"serde")," as ",(0,r.kt)("inlineCode",{parentName:"p"},"org.apache.hadoop.hive.contrib.serde2.MultiDelimitserDe"),", and an error is reported when accessing the table: ",(0,r.kt)("inlineCode",{parentName:"p"},"storage schema reading not supported")),(0,r.kt)("p",{parentName:"li"},"Add the following configuration to the hive-site .xml file and restart the HMS service:"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre"}," <property>\n   <name>metastore.storage.schema.reader.impl</name>\n   <value>org.apache.hadoop.hive.metastore.SerDeStorageSchemaReader</value>\n </property> \n"))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Error\uff1ajava.security.InvalidAlgorithmParameterException: the trustAnchors parameter must be non-empty"),(0,r.kt)("p",{parentName:"li"},"Entire error info found in FE.log is shown as below:"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre"},"org.apache.doris.common.UserException: errCode = 2, detailMessage = S3 list path failed. path=s3://bucket/part-*,msg=errors while get file status listStatus on s3://bucket: com.amazonaws.SdkClientException: Unable to execute HTTP request: Unexpected error: java.security.InvalidAlgorithmParameterException: the trustAnchors parameter must be non-empty: Unable to execute HTTP request: Unexpected error: java.security.InvalidAlgorithmParameterException: the trustAnchors parameter must be non-empty\norg.apache.doris.common.UserException: errCode = 2, detailMessage = S3 list path exception. path=s3://bucket/part-*, err: errCode = 2, detailMessage = S3 list path failed. path=s3://bucket/part-*,msg=errors while get file status listStatus on s3://bucket: com.amazonaws.SdkClientException: Unable to execute HTTP request: Unexpected error: java.security.InvalidAlgorithmParameterException: the trustAnchors parameter must be non-empty: Unable to execute HTTP request: Unexpected error: java.security.InvalidAlgorithmParameterException: the trustAnchors parameter must be non-empty\norg.apache.hadoop.fs.s3a.AWSClientIOException: listStatus on s3://bucket: com.amazonaws.SdkClientException: Unable to execute HTTP request: Unexpected error: java.security.InvalidAlgorithmParameterException: the trustAnchors parameter must be non-empty: Unable to execute HTTP request: Unexpected error: java.security.InvalidAlgorithmParameterException: the trustAnchors parameter must be non-empty\nCaused by: com.amazonaws.SdkClientException: Unable to execute HTTP request: Unexpected error: java.security.InvalidAlgorithmParameterException: the trustAnchors parameter must be non-empty\nCaused by: javax.net.ssl.SSLException: Unexpected error: java.security.InvalidAlgorithmParameterException: the trustAnchors parameter must be non-empty\nCaused by: java.lang.RuntimeException: Unexpected error: java.security.InvalidAlgorithmParameterException: the trustAnchors parameter must be non-empty\nCaused by: java.security.InvalidAlgorithmParameterException: the trustAnchors parameter must be non-empty\n")),(0,r.kt)("p",{parentName:"li"},"Try to update FE node CA certificates, use command ",(0,r.kt)("inlineCode",{parentName:"p"},"update-ca-trust (CentOS/RockyLinux)"),", then restart FE process."))),(0,r.kt)("h2",{id:"hdfs"},"HDFS"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"What to do with the",(0,r.kt)("inlineCode",{parentName:"p"},"java.lang.VerifyError: xxx")," error when accessing HDFS 3.x?"),(0,r.kt)("p",{parentName:"li"},"Doris 1.2.1 and the older versions rely on Hadoop 2.8. Please update Hadoop to 2.10.2 or update Doris to 1.2.2 or newer.")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Use Hedged Read to optimize the problem of slow HDFS reading."),(0,r.kt)("p",{parentName:"li"}," In some cases, the high load of HDFS may lead to a long time to read the data on HDFS, thereby slowing down the overall query efficiency. HDFS Client provides Hedged Read.\nThis function can start another read thread to read the same data when a read request exceeds a certain threshold and is not returned, and whichever is returned first will use the result."),(0,r.kt)("p",{parentName:"li"}," This feature can be enabled in two ways:"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Specify in the parameters to create the Catalog:"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre"},"```\ncreate catalog regression properties (\n    'type'='hms',\n    'hive.metastore.uris' = 'thrift://172.21.16.47:7004',\n    'dfs.client.hedged.read.threadpool.size' = '128',\n    'dfs.client.hedged.read.threshold.millis' = \"500\"\n);\n```\n\n`dfs.client.hedged.read.threadpool.size` indicates the number of threads used for Hedged Read, which are shared by one HDFS Client. Usually, for an HDFS cluster, BE nodes will share an HDFS Client.\n\n`dfs.client.hedged.read.threshold.millis` is the read threshold in milliseconds. When a read request exceeds this threshold and is not returned, Hedged Read will be triggered.\n")),(0,r.kt)("p",{parentName:"li"},"After enabling it, you can see related parameters in Query Profile:"),(0,r.kt)("p",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"p"},"TotalHedgedRead"),": The number of Hedged Reads initiated."),(0,r.kt)("p",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"p"},"HedgedReadWins"),": The number of successful Hedged Reads (numbers initiated and returned faster than the original request)"),(0,r.kt)("p",{parentName:"li"},"Note that the value here is the cumulative value of a single HDFS Client, not the value of a single query. The same HDFS Client will be reused by multiple queries."))))),(0,r.kt)("h2",{id:"dlf-catalog"},"DLF Catalog"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"When using DLF Catalog, BE reads ",(0,r.kt)("inlineCode",{parentName:"p"},"Invalid address")," when fetching JindoFS data and needs to add the domain name to IP mapping that appears in the log in ",(0,r.kt)("inlineCode",{parentName:"p"},"/ets/hosts"),".")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"When reading data is not authorized, use the ",(0,r.kt)("inlineCode",{parentName:"p"},"hadoop.username")," property to specify the authorized user.")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"The metadata in the DLF Catalog is consistent with the DLF. When DLF is used to manage metadata, newly imported Hive partitions may not be synchronized by DLF, resulting in inconsistency between the DLF and Hive metadata. In this case, ensure firstly that the Hive metadata is fully synchronized by DLF."))))}m.isMDXComponent=!0}}]);