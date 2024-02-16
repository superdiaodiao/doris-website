"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([[24079],{15680:(e,r,a)=>{a.d(r,{xA:()=>p,yg:()=>u});var n=a(96540);function t(e,r,a){return r in e?Object.defineProperty(e,r,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[r]=a,e}function l(e,r){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),a.push.apply(a,n)}return a}function s(e){for(var r=1;r<arguments.length;r++){var a=null!=arguments[r]?arguments[r]:{};r%2?l(Object(a),!0).forEach((function(r){t(e,r,a[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(a,r))}))}return e}function o(e,r){if(null==e)return{};var a,n,t=function(e,r){if(null==e)return{};var a,n,t={},l=Object.keys(e);for(n=0;n<l.length;n++)a=l[n],r.indexOf(a)>=0||(t[a]=e[a]);return t}(e,r);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)a=l[n],r.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(t[a]=e[a])}return t}var c=n.createContext({}),i=function(e){var r=n.useContext(c),a=r;return e&&(a="function"==typeof e?e(r):s(s({},r),e)),a},p=function(e){var r=i(e.components);return n.createElement(c.Provider,{value:r},e.children)},d="mdxType",m={inlineCode:"code",wrapper:function(e){var r=e.children;return n.createElement(n.Fragment,{},r)}},g=n.forwardRef((function(e,r){var a=e.components,t=e.mdxType,l=e.originalType,c=e.parentName,p=o(e,["components","mdxType","originalType","parentName"]),d=i(a),g=t,u=d["".concat(c,".").concat(g)]||d[g]||m[g]||l;return a?n.createElement(u,s(s({ref:r},p),{},{components:a})):n.createElement(u,s({ref:r},p))}));function u(e,r){var a=arguments,t=r&&r.mdxType;if("string"==typeof e||t){var l=a.length,s=new Array(l);s[0]=g;var o={};for(var c in r)hasOwnProperty.call(r,c)&&(o[c]=r[c]);o.originalType=e,o[d]="string"==typeof e?e:t,s[1]=o;for(var i=2;i<l;i++)s[i]=a[i];return n.createElement.apply(null,s)}return n.createElement.apply(null,a)}g.displayName="MDXCreateElement"},54499:(e,r,a)=>{a.r(r),a.d(r,{assets:()=>c,contentTitle:()=>s,default:()=>m,frontMatter:()=>l,metadata:()=>o,toc:()=>i});var n=a(58168),t=(a(96540),a(15680));const l={title:"CREATE-CATALOG",language:"zh-CN"},s=void 0,o={unversionedId:"sql-manual/sql-reference/Data-Definition-Statements/Create/CREATE-CATALOG",id:"version-2.0/sql-manual/sql-reference/Data-Definition-Statements/Create/CREATE-CATALOG",title:"CREATE-CATALOG",description:"\x3c!--",source:"@site/i18n/zh-CN/docusaurus-plugin-content-docs/version-2.0/sql-manual/sql-reference/Data-Definition-Statements/Create/CREATE-CATALOG.md",sourceDirName:"sql-manual/sql-reference/Data-Definition-Statements/Create",slug:"/sql-manual/sql-reference/Data-Definition-Statements/Create/CREATE-CATALOG",permalink:"/zh-CN/docs/sql-manual/sql-reference/Data-Definition-Statements/Create/CREATE-CATALOG",draft:!1,tags:[],version:"2.0",frontMatter:{title:"CREATE-CATALOG",language:"zh-CN"},sidebar:"docs",previous:{title:"AGG_STATE",permalink:"/zh-CN/docs/sql-manual/sql-reference/Data-Types/AGG_STATE"},next:{title:"CREATE-DATABASE",permalink:"/zh-CN/docs/sql-manual/sql-reference/Data-Definition-Statements/Create/CREATE-DATABASE"}},c={},i=[{value:"CREATE-CATALOG",id:"create-catalog",level:2},{value:"Name",id:"name",level:3},{value:"Description",id:"description",level:3},{value:"Example",id:"example",level:3},{value:"Keywords",id:"keywords",level:3},{value:"Best Practice",id:"best-practice",level:3}],p={toc:i},d="wrapper";function m(e){let{components:r,...a}=e;return(0,t.yg)(d,(0,n.A)({},p,a,{components:r,mdxType:"MDXLayout"}),(0,t.yg)("h2",{id:"create-catalog"},"CREATE-CATALOG"),(0,t.yg)("h3",{id:"name"},"Name"),(0,t.yg)("p",null,"CREATE CATALOG"),(0,t.yg)("h3",{id:"description"},"Description"),(0,t.yg)("p",null,"\u8be5\u8bed\u53e5\u7528\u4e8e\u521b\u5efa\u5916\u90e8\u6570\u636e\u76ee\u5f55\uff08catalog\uff09"),(0,t.yg)("p",null,"\u8bed\u6cd5\uff1a"),(0,t.yg)("pre",null,(0,t.yg)("code",{parentName:"pre",className:"language-sql"},'CREATE CATALOG [IF NOT EXISTS] catalog_name [comment]\n    PROPERTIES ("key"="value", ...);\n')),(0,t.yg)("ul",null,(0,t.yg)("li",{parentName:"ul"},"hms\uff1aHive MetaStore"),(0,t.yg)("li",{parentName:"ul"},"es\uff1aElasticsearch"),(0,t.yg)("li",{parentName:"ul"},"jdbc\uff1a\u6570\u636e\u5e93\u8bbf\u95ee\u7684\u6807\u51c6\u63a5\u53e3(JDBC), \u5f53\u524d\u652f\u6301 MySQL \u548c PostgreSQL")),(0,t.yg)("h3",{id:"example"},"Example"),(0,t.yg)("ol",null,(0,t.yg)("li",{parentName:"ol"},(0,t.yg)("p",{parentName:"li"},"\u65b0\u5efa\u6570\u636e\u76ee\u5f55 hive"),(0,t.yg)("pre",{parentName:"li"},(0,t.yg)("code",{parentName:"pre",className:"language-sql"},"CREATE CATALOG hive comment 'hive catalog' PROPERTIES (\n    'type'='hms',\n    'hive.metastore.uris' = 'thrift://127.0.0.1:7004',\n    'dfs.nameservices'='HANN',\n    'dfs.ha.namenodes.HANN'='nn1,nn2',\n    'dfs.namenode.rpc-address.HANN.nn1'='nn1_host:rpc_port',\n    'dfs.namenode.rpc-address.HANN.nn2'='nn2_host:rpc_port',\n    'dfs.client.failover.proxy.provider.HANN'='org.apache.hadoop.hdfs.server.namenode.ha.ConfiguredFailoverProxyProvider'\n);\n"))),(0,t.yg)("li",{parentName:"ol"},(0,t.yg)("p",{parentName:"li"},"\u65b0\u5efa\u6570\u636e\u76ee\u5f55 es"),(0,t.yg)("pre",{parentName:"li"},(0,t.yg)("code",{parentName:"pre",className:"language-sql"},'CREATE CATALOG es PROPERTIES (\n    "type"="es",\n    "hosts"="http://127.0.0.1:9200"\n);\n'))),(0,t.yg)("li",{parentName:"ol"},(0,t.yg)("p",{parentName:"li"},"\u65b0\u5efa\u6570\u636e\u76ee\u5f55 jdbc"),(0,t.yg)("p",{parentName:"li"},(0,t.yg)("strong",{parentName:"p"},"mysql")),(0,t.yg)("pre",{parentName:"li"},(0,t.yg)("code",{parentName:"pre",className:"language-sql"},'CREATE CATALOG jdbc PROPERTIES (\n    "type"="jdbc",\n    "user"="root",\n    "password"="123456",\n    "jdbc_url" = "jdbc:mysql://127.0.0.1:3316/doris_test?useSSL=false",\n    "driver_url" = "https://doris-community-test-1308700295.cos.ap-hongkong.myqcloud.com/jdbc_driver/mysql-connector-java-8.0.25.jar",\n    "driver_class" = "com.mysql.cj.jdbc.Driver"\n);\n')),(0,t.yg)("p",{parentName:"li"},(0,t.yg)("strong",{parentName:"p"},"postgresql")),(0,t.yg)("pre",{parentName:"li"},(0,t.yg)("code",{parentName:"pre",className:"language-sql"},'CREATE CATALOG jdbc PROPERTIES (\n    "type"="jdbc",\n    "user"="postgres",\n    "password"="123456",\n    "jdbc_url" = "jdbc:postgresql://127.0.0.1:5432/demo",\n    "driver_url" = "file:///path/to/postgresql-42.5.1.jar",\n    "driver_class" = "org.postgresql.Driver"\n);\n')),(0,t.yg)("p",{parentName:"li"},(0,t.yg)("strong",{parentName:"p"},"clickhouse")),(0,t.yg)("pre",{parentName:"li"},(0,t.yg)("code",{parentName:"pre",className:"language-sql"},'CREATE CATALOG jdbc PROPERTIES (\n    "type"="jdbc",\n    "user"="default",\n    "password"="123456",\n    "jdbc_url" = "jdbc:clickhouse://127.0.0.1:8123/demo",\n    "driver_url" = "file:///path/to/clickhouse-jdbc-0.3.2-patch11-all.jar",\n    "driver_class" = "com.clickhouse.jdbc.ClickHouseDriver"\n)\n')),(0,t.yg)("p",{parentName:"li"},(0,t.yg)("strong",{parentName:"p"},"oracle")),(0,t.yg)("pre",{parentName:"li"},(0,t.yg)("code",{parentName:"pre",className:"language-sql"},'CREATE CATALOG jdbc PROPERTIES (\n    "type"="jdbc",\n    "user"="doris",\n    "password"="123456",\n    "jdbc_url" = "jdbc:oracle:thin:@127.0.0.1:1521:helowin",\n    "driver_url" = "file:///path/to/ojdbc8.jar",\n    "driver_class" = "oracle.jdbc.driver.OracleDriver"\n);  \n')),(0,t.yg)("p",{parentName:"li"},(0,t.yg)("strong",{parentName:"p"},"SQLServer")),(0,t.yg)("pre",{parentName:"li"},(0,t.yg)("code",{parentName:"pre",className:"language-sql"},'CREATE CATALOG sqlserver_catalog PROPERTIES (\n    "type"="jdbc",\n    "user"="SA",\n    "password"="Doris123456",\n    "jdbc_url" = "jdbc:sqlserver://localhost:1433;DataBaseName=doris_test",\n    "driver_url" = "file:///path/to/mssql-jdbc-11.2.3.jre8.jar",\n    "driver_class" = "com.microsoft.sqlserver.jdbc.SQLServerDriver"\n);  \n')),(0,t.yg)("p",{parentName:"li"},(0,t.yg)("strong",{parentName:"p"},"SAP HANA")),(0,t.yg)("pre",{parentName:"li"},(0,t.yg)("code",{parentName:"pre",className:"language-sql"},'CREATE CATALOG saphana_catalog PROPERTIES (\n   "type"="jdbc",\n   "user"="SYSTEM",\n   "password"="SAPHANA",\n   "jdbc_url" = "jdbc:sap://localhost:31515/TEST",\n   "driver_url" = "file:///path/to/ngdbc.jar",\n   "driver_class" = "com.sap.db.jdbc.Driver"\n);\n')),(0,t.yg)("p",{parentName:"li"},(0,t.yg)("strong",{parentName:"p"},"Trino")),(0,t.yg)("pre",{parentName:"li"},(0,t.yg)("code",{parentName:"pre",className:"language-sql"},'CREATE CATALOG trino_catalog PROPERTIES (\n   "type"="jdbc",\n   "user"="hadoop",\n   "password"="",\n   "jdbc_url" = "jdbc:trino://localhost:8080/hive",\n   "driver_url" = "file:///path/to/trino-jdbc-389.jar",\n   "driver_class" = "io.trino.jdbc.TrinoDriver"\n);\n')),(0,t.yg)("p",{parentName:"li"},(0,t.yg)("strong",{parentName:"p"},"OceanBase")),(0,t.yg)("pre",{parentName:"li"},(0,t.yg)("code",{parentName:"pre",className:"language-sql"},'CREATE CATALOG oceanbase_catalog PROPERTIES (\n   "type"="jdbc",\n   "user"="root",\n   "password"="",\n   "jdbc_url" = "jdbc:oceanbase://localhost:2881/demo",\n   "driver_url" = "file:///path/to/oceanbase-client-2.4.2.jar",\n   "driver_class" = "com.oceanbase.jdbc.Driver"\n);\n')))),(0,t.yg)("h3",{id:"keywords"},"Keywords"),(0,t.yg)("p",null,"CREATE, CATALOG"),(0,t.yg)("h3",{id:"best-practice"},"Best Practice"))}m.isMDXComponent=!0}}]);