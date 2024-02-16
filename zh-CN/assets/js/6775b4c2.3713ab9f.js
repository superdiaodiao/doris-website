"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([[80779],{15680:(e,a,r)=>{r.d(a,{xA:()=>g,yg:()=>y});var n=r(96540);function o(e,a,r){return a in e?Object.defineProperty(e,a,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[a]=r,e}function t(e,a){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);a&&(n=n.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),r.push.apply(r,n)}return r}function l(e){for(var a=1;a<arguments.length;a++){var r=null!=arguments[a]?arguments[a]:{};a%2?t(Object(r),!0).forEach((function(a){o(e,a,r[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):t(Object(r)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(r,a))}))}return e}function s(e,a){if(null==e)return{};var r,n,o=function(e,a){if(null==e)return{};var r,n,o={},t=Object.keys(e);for(n=0;n<t.length;n++)r=t[n],a.indexOf(r)>=0||(o[r]=e[r]);return o}(e,a);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);for(n=0;n<t.length;n++)r=t[n],a.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var i=n.createContext({}),c=function(e){var a=n.useContext(i),r=a;return e&&(r="function"==typeof e?e(a):l(l({},a),e)),r},g=function(e){var a=c(e.components);return n.createElement(i.Provider,{value:a},e.children)},p="mdxType",u={inlineCode:"code",wrapper:function(e){var a=e.children;return n.createElement(n.Fragment,{},a)}},d=n.forwardRef((function(e,a){var r=e.components,o=e.mdxType,t=e.originalType,i=e.parentName,g=s(e,["components","mdxType","originalType","parentName"]),p=c(r),d=o,y=p["".concat(i,".").concat(d)]||p[d]||u[d]||t;return r?n.createElement(y,l(l({ref:a},g),{},{components:r})):n.createElement(y,l({ref:a},g))}));function y(e,a){var r=arguments,o=a&&a.mdxType;if("string"==typeof e||o){var t=r.length,l=new Array(t);l[0]=d;var s={};for(var i in a)hasOwnProperty.call(a,i)&&(s[i]=a[i]);s.originalType=e,s[p]="string"==typeof e?e:o,l[1]=s;for(var c=2;c<t;c++)l[c]=r[c];return n.createElement.apply(null,l)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},35864:(e,a,r)=>{r.r(a),r.d(a,{assets:()=>i,contentTitle:()=>l,default:()=>u,frontMatter:()=>t,metadata:()=>s,toc:()=>c});var n=r(58168),o=(r(96540),r(15680));const t={title:"Iceberg",language:"zh-CN"},l=void 0,s={unversionedId:"lakehouse/multi-catalog/iceberg",id:"version-2.0/lakehouse/multi-catalog/iceberg",title:"Iceberg",description:"\x3c!--",source:"@site/i18n/zh-CN/docusaurus-plugin-content-docs/version-2.0/lakehouse/multi-catalog/iceberg.md",sourceDirName:"lakehouse/multi-catalog",slug:"/lakehouse/multi-catalog/iceberg",permalink:"/zh-CN/docs/lakehouse/multi-catalog/iceberg",draft:!1,tags:[],version:"2.0",frontMatter:{title:"Iceberg",language:"zh-CN"},sidebar:"docs",previous:{title:"Hive",permalink:"/zh-CN/docs/lakehouse/multi-catalog/hive"},next:{title:"Hudi",permalink:"/zh-CN/docs/lakehouse/multi-catalog/hudi"}},i={},c=[{value:"\u4f7f\u7528\u9650\u5236",id:"\u4f7f\u7528\u9650\u5236",level:2},{value:"\u521b\u5efa Catalog",id:"\u521b\u5efa-catalog",level:2},{value:"\u57fa\u4e8eHive Metastore\u521b\u5efaCatalog",id:"\u57fa\u4e8ehive-metastore\u521b\u5efacatalog",level:3},{value:"\u57fa\u4e8eIceberg API\u521b\u5efaCatalog",id:"\u57fa\u4e8eiceberg-api\u521b\u5efacatalog",level:3},{value:"Hadoop Catalog",id:"hadoop-catalog",level:4},{value:"Hive Metastore",id:"hive-metastore",level:4},{value:"AWS Glue",id:"aws-glue",level:4},{value:"\u963f\u91cc\u4e91 DLF",id:"\u963f\u91cc\u4e91-dlf",level:4},{value:"REST Catalog",id:"rest-catalog",level:4},{value:"Google Dataproc Metastore",id:"google-dataproc-metastore",level:4},{value:"Iceberg On Object Storage",id:"iceberg-on-object-storage",level:3},{value:"\u5217\u7c7b\u578b\u6620\u5c04",id:"\u5217\u7c7b\u578b\u6620\u5c04",level:2},{value:"Time Travel",id:"time-travel",level:2}],g={toc:c},p="wrapper";function u(e){let{components:a,...r}=e;return(0,o.yg)(p,(0,n.A)({},g,r,{components:a,mdxType:"MDXLayout"}),(0,o.yg)("h1",{id:"iceberg"},"Iceberg"),(0,o.yg)("h2",{id:"\u4f7f\u7528\u9650\u5236"},"\u4f7f\u7528\u9650\u5236"),(0,o.yg)("ol",null,(0,o.yg)("li",{parentName:"ol"},"\u652f\u6301 Iceberg V1/V2 \u8868\u683c\u5f0f\u3002"),(0,o.yg)("li",{parentName:"ol"},"V2 \u683c\u5f0f\u4ec5\u652f\u6301 Position Delete \u65b9\u5f0f\uff0c\u4e0d\u652f\u6301 Equality Delete\u3002")),(0,o.yg)("h2",{id:"\u521b\u5efa-catalog"},"\u521b\u5efa Catalog"),(0,o.yg)("h3",{id:"\u57fa\u4e8ehive-metastore\u521b\u5efacatalog"},"\u57fa\u4e8eHive Metastore\u521b\u5efaCatalog"),(0,o.yg)("p",null,"\u548c Hive Catalog \u57fa\u672c\u4e00\u81f4\uff0c\u8fd9\u91cc\u4ec5\u7ed9\u51fa\u7b80\u5355\u793a\u4f8b\u3002\u5176\u4ed6\u793a\u4f8b\u53ef\u53c2\u9605 ",(0,o.yg)("a",{parentName:"p",href:"/zh-CN/docs/lakehouse/multi-catalog/hive"},"Hive Catalog"),"\u3002"),(0,o.yg)("pre",null,(0,o.yg)("code",{parentName:"pre",className:"language-sql"},"CREATE CATALOG iceberg PROPERTIES (\n    'type'='hms',\n    'hive.metastore.uris' = 'thrift://172.21.0.1:7004',\n    'hadoop.username' = 'hive',\n    'dfs.nameservices'='your-nameservice',\n    'dfs.ha.namenodes.your-nameservice'='nn1,nn2',\n    'dfs.namenode.rpc-address.your-nameservice.nn1'='172.21.0.2:4007',\n    'dfs.namenode.rpc-address.your-nameservice.nn2'='172.21.0.3:4007',\n    'dfs.client.failover.proxy.provider.your-nameservice'='org.apache.hadoop.hdfs.server.namenode.ha.ConfiguredFailoverProxyProvider'\n);\n")),(0,o.yg)("h3",{id:"\u57fa\u4e8eiceberg-api\u521b\u5efacatalog"},"\u57fa\u4e8eIceberg API\u521b\u5efaCatalog"),(0,o.yg)("p",null,"\u4f7f\u7528Iceberg API\u8bbf\u95ee\u5143\u6570\u636e\u7684\u65b9\u5f0f\uff0c\u652f\u6301Hadoop File System\u3001Hive\u3001REST\u3001Glue\u3001DLF\u7b49\u670d\u52a1\u4f5c\u4e3aIceberg\u7684Catalog\u3002"),(0,o.yg)("h4",{id:"hadoop-catalog"},"Hadoop Catalog"),(0,o.yg)("pre",null,(0,o.yg)("code",{parentName:"pre",className:"language-sql"},"CREATE CATALOG iceberg_hadoop PROPERTIES (\n    'type'='iceberg',\n    'iceberg.catalog.type' = 'hadoop',\n    'warehouse' = 'hdfs://your-host:8020/dir/key'\n);\n")),(0,o.yg)("pre",null,(0,o.yg)("code",{parentName:"pre",className:"language-sql"},"CREATE CATALOG iceberg_hadoop_ha PROPERTIES (\n    'type'='iceberg',\n    'iceberg.catalog.type' = 'hadoop',\n    'warehouse' = 'hdfs://your-nameservice/dir/key',\n    'dfs.nameservices'='your-nameservice',\n    'dfs.ha.namenodes.your-nameservice'='nn1,nn2',\n    'dfs.namenode.rpc-address.your-nameservice.nn1'='172.21.0.2:4007',\n    'dfs.namenode.rpc-address.your-nameservice.nn2'='172.21.0.3:4007',\n    'dfs.client.failover.proxy.provider.your-nameservice'='org.apache.hadoop.hdfs.server.namenode.ha.ConfiguredFailoverProxyProvider'\n);\n")),(0,o.yg)("h4",{id:"hive-metastore"},"Hive Metastore"),(0,o.yg)("pre",null,(0,o.yg)("code",{parentName:"pre",className:"language-sql"},"CREATE CATALOG iceberg PROPERTIES (\n    'type'='iceberg',\n    'iceberg.catalog.type'='hms',\n    'hive.metastore.uris' = 'thrift://172.21.0.1:7004',\n    'hadoop.username' = 'hive',\n    'dfs.nameservices'='your-nameservice',\n    'dfs.ha.namenodes.your-nameservice'='nn1,nn2',\n    'dfs.namenode.rpc-address.your-nameservice.nn1'='172.21.0.2:4007',\n    'dfs.namenode.rpc-address.your-nameservice.nn2'='172.21.0.3:4007',\n    'dfs.client.failover.proxy.provider.your-nameservice'='org.apache.hadoop.hdfs.server.namenode.ha.ConfiguredFailoverProxyProvider'\n);\n")),(0,o.yg)("h4",{id:"aws-glue"},"AWS Glue"),(0,o.yg)("pre",null,(0,o.yg)("code",{parentName:"pre",className:"language-sql"},'CREATE CATALOG glue PROPERTIES (\n    "type"="iceberg",\n    "iceberg.catalog.type" = "glue",\n    "glue.endpoint" = "https://glue.us-east-1.amazonaws.com",\n    "glue.access_key" = "ak",\n    "glue.secret_key" = "sk"\n);\n')),(0,o.yg)("p",null,"Iceberg \u5c5e\u6027\u8be6\u60c5\u53c2\u89c1 ",(0,o.yg)("a",{parentName:"p",href:"https://iceberg.apache.org/docs/latest/aws/#glue-catalog"},"Iceberg Glue Catalog")),(0,o.yg)("h4",{id:"\u963f\u91cc\u4e91-dlf"},"\u963f\u91cc\u4e91 DLF"),(0,o.yg)("p",null,"\u53c2\u89c1",(0,o.yg)("a",{parentName:"p",href:"/zh-CN/docs/lakehouse/multi-catalog/dlf"},"\u963f\u91cc\u4e91DLF Catalog\u914d\u7f6e")),(0,o.yg)("h4",{id:"rest-catalog"},"REST Catalog"),(0,o.yg)("p",null,"\u8be5\u65b9\u5f0f\u9700\u8981\u9884\u5148\u63d0\u4f9bREST\u670d\u52a1\uff0c\u7528\u6237\u9700\u5b9e\u73b0\u83b7\u53d6Iceberg\u5143\u6570\u636e\u7684REST\u63a5\u53e3\u3002"),(0,o.yg)("pre",null,(0,o.yg)("code",{parentName:"pre",className:"language-sql"},"CREATE CATALOG iceberg PROPERTIES (\n    'type'='iceberg',\n    'iceberg.catalog.type'='rest',\n    'uri' = 'http://172.21.0.1:8181'\n);\n")),(0,o.yg)("p",null,"\u5982\u679c\u4f7f\u7528HDFS\u5b58\u50a8\u6570\u636e\uff0c\u5e76\u5f00\u542f\u4e86\u9ad8\u53ef\u7528\u6a21\u5f0f\uff0c\u8fd8\u9700\u5728Catalog\u4e2d\u589e\u52a0HDFS\u9ad8\u53ef\u7528\u914d\u7f6e\uff1a"),(0,o.yg)("pre",null,(0,o.yg)("code",{parentName:"pre",className:"language-sql"},"CREATE CATALOG iceberg PROPERTIES (\n    'type'='iceberg',\n    'iceberg.catalog.type'='rest',\n    'uri' = 'http://172.21.0.1:8181',\n    'dfs.nameservices'='your-nameservice',\n    'dfs.ha.namenodes.your-nameservice'='nn1,nn2',\n    'dfs.namenode.rpc-address.your-nameservice.nn1'='172.21.0.1:8020',\n    'dfs.namenode.rpc-address.your-nameservice.nn2'='172.21.0.2:8020',\n    'dfs.client.failover.proxy.provider.your-nameservice'='org.apache.hadoop.hdfs.server.namenode.ha.ConfiguredFailoverProxyProvider'\n);\n")),(0,o.yg)("h4",{id:"google-dataproc-metastore"},"Google Dataproc Metastore"),(0,o.yg)("pre",null,(0,o.yg)("code",{parentName:"pre",className:"language-sql"},'CREATE CATALOG iceberg PROPERTIES (\n    "type"="iceberg",\n    "iceberg.catalog.type"="hms",\n    "hive.metastore.uris" = "thrift://172.21.0.1:9083",\n    "gs.endpoint" = "https://storage.googleapis.com",\n    "gs.region" = "us-east-1",\n    "gs.access_key" = "ak",\n    "gs.secret_key" = "sk",\n    "use_path_style" = "true"\n);\n')),(0,o.yg)("p",null,(0,o.yg)("inlineCode",{parentName:"p"},"hive.metastore.uris"),": Dataproc Metastore \u670d\u52a1\u5f00\u653e\u7684\u63a5\u53e3\uff0c\u5728 Metastore \u7ba1\u7406\u9875\u9762\u83b7\u53d6 \uff1a",(0,o.yg)("a",{parentName:"p",href:"https://console.cloud.google.com/dataproc/metastore"},"Dataproc Metastore Services"),"."),(0,o.yg)("h3",{id:"iceberg-on-object-storage"},"Iceberg On Object Storage"),(0,o.yg)("p",null,"\u82e5\u6570\u636e\u5b58\u653e\u5728S3\u4e0a\uff0cproperties\u4e2d\u53ef\u4ee5\u4f7f\u7528\u4ee5\u4e0b\u53c2\u6570\uff1a"),(0,o.yg)("pre",null,(0,o.yg)("code",{parentName:"pre"},'"s3.access_key" = "ak"\n"s3.secret_key" = "sk"\n"s3.endpoint" = "s3.us-east-1.amazonaws.com"\n"s3.region" = "us-east-1"\n')),(0,o.yg)("p",null,"\u6570\u636e\u5b58\u653e\u5728\u963f\u91cc\u4e91OSS\u4e0a\uff1a"),(0,o.yg)("pre",null,(0,o.yg)("code",{parentName:"pre"},'"oss.access_key" = "ak"\n"oss.secret_key" = "sk"\n"oss.endpoint" = "oss-cn-beijing-internal.aliyuncs.com"\n"oss.region" = "oss-cn-beijing"\n')),(0,o.yg)("p",null,"\u6570\u636e\u5b58\u653e\u5728\u817e\u8baf\u4e91COS\u4e0a\uff1a"),(0,o.yg)("pre",null,(0,o.yg)("code",{parentName:"pre"},'"cos.access_key" = "ak"\n"cos.secret_key" = "sk"\n"cos.endpoint" = "cos.ap-beijing.myqcloud.com"\n"cos.region" = "ap-beijing"\n')),(0,o.yg)("p",null,"\u6570\u636e\u5b58\u653e\u5728\u534e\u4e3a\u4e91OBS\u4e0a\uff1a"),(0,o.yg)("pre",null,(0,o.yg)("code",{parentName:"pre"},'"obs.access_key" = "ak"\n"obs.secret_key" = "sk"\n"obs.endpoint" = "obs.cn-north-4.myhuaweicloud.com"\n"obs.region" = "cn-north-4"\n')),(0,o.yg)("h2",{id:"\u5217\u7c7b\u578b\u6620\u5c04"},"\u5217\u7c7b\u578b\u6620\u5c04"),(0,o.yg)("p",null,"\u548c Hive Catalog \u4e00\u81f4\uff0c\u53ef\u53c2\u9605 ",(0,o.yg)("a",{parentName:"p",href:"/zh-CN/docs/lakehouse/multi-catalog/hive"},"Hive Catalog")," \u4e2d ",(0,o.yg)("strong",{parentName:"p"},"\u5217\u7c7b\u578b\u6620\u5c04")," \u4e00\u8282\u3002"),(0,o.yg)("h2",{id:"time-travel"},"Time Travel"),(0,o.yg)("p",null,"\u652f\u6301\u8bfb\u53d6 Iceberg \u8868\u6307\u5b9a\u7684 Snapshot\u3002"),(0,o.yg)("p",null,"\u6bcf\u4e00\u6b21\u5bf9iceberg\u8868\u7684\u5199\u64cd\u4f5c\u90fd\u4f1a\u4ea7\u751f\u4e00\u4e2a\u65b0\u7684\u5feb\u7167\u3002"),(0,o.yg)("p",null,"\u9ed8\u8ba4\u60c5\u51b5\u4e0b\uff0c\u8bfb\u53d6\u8bf7\u6c42\u53ea\u4f1a\u8bfb\u53d6\u6700\u65b0\u7248\u672c\u7684\u5feb\u7167\u3002"),(0,o.yg)("p",null,"\u53ef\u4ee5\u4f7f\u7528 ",(0,o.yg)("inlineCode",{parentName:"p"},"FOR TIME AS OF")," \u548c ",(0,o.yg)("inlineCode",{parentName:"p"},"FOR VERSION AS OF")," \u8bed\u53e5\uff0c\u6839\u636e\u5feb\u7167 ID \u6216\u8005\u5feb\u7167\u4ea7\u751f\u7684\u65f6\u95f4\u8bfb\u53d6\u5386\u53f2\u7248\u672c\u7684\u6570\u636e\u3002\u793a\u4f8b\u5982\u4e0b\uff1a"),(0,o.yg)("p",null,(0,o.yg)("inlineCode",{parentName:"p"},'SELECT * FROM iceberg_tbl FOR TIME AS OF "2022-10-07 17:20:37";')),(0,o.yg)("p",null,(0,o.yg)("inlineCode",{parentName:"p"},"SELECT * FROM iceberg_tbl FOR VERSION AS OF 868895038966572;")),(0,o.yg)("p",null,"\u53e6\u5916\uff0c\u53ef\u4ee5\u4f7f\u7528 ",(0,o.yg)("a",{parentName:"p",href:"../../sql-manual/sql-functions/table-functions/iceberg_meta.md"},"iceberg_meta")," \u8868\u51fd\u6570\u67e5\u8be2\u6307\u5b9a\u8868\u7684 snapshot \u4fe1\u606f\u3002"))}u.isMDXComponent=!0}}]);