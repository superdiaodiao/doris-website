"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([[11844],{15680:(e,t,n)=>{n.d(t,{xA:()=>c,yg:()=>g});var i=n(96540);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,i,a=function(e,t){if(null==e)return{};var n,i,a={},r=Object.keys(e);for(i=0;i<r.length;i++)n=r[i],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(i=0;i<r.length;i++)n=r[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=i.createContext({}),u=function(e){var t=i.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},c=function(e){var t=u(e.components);return i.createElement(s.Provider,{value:t},e.children)},m="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},p=i.forwardRef((function(e,t){var n=e.components,a=e.mdxType,r=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),m=u(n),p=a,g=m["".concat(s,".").concat(p)]||m[p]||d[p]||r;return n?i.createElement(g,o(o({ref:t},c),{},{components:n})):i.createElement(g,o({ref:t},c))}));function g(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var r=n.length,o=new Array(r);o[0]=p;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[m]="string"==typeof e?e:a,o[1]=l;for(var u=2;u<r;u++)o[u]=n[u];return i.createElement.apply(null,o)}return i.createElement.apply(null,n)}p.displayName="MDXCreateElement"},80292:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>o,default:()=>d,frontMatter:()=>r,metadata:()=>l,toc:()=>u});var i=n(58168),a=(n(96540),n(15680));const r={title:"Audit Log Plugin",language:"en"},o=void 0,l={unversionedId:"ecosystem/audit-plugin",id:"version-2.0/ecosystem/audit-plugin",title:"Audit Log Plugin",description:"\x3c!--",source:"@site/versioned_docs/version-2.0/ecosystem/audit-plugin.md",sourceDirName:"ecosystem",slug:"/ecosystem/audit-plugin",permalink:"/docs/ecosystem/audit-plugin",draft:!1,tags:[],version:"2.0",frontMatter:{title:"Audit Log Plugin",language:"en"},sidebar:"docs",previous:{title:"Plugin Development Manual",permalink:"/docs/ecosystem/plugin-development-manual"},next:{title:"CloudCanal Data Import",permalink:"/docs/ecosystem/cloudcanal"}},s={},u=[{value:"Compile, Configure and Deploy",id:"compile-configure-and-deploy",level:2},{value:"FE Configuration",id:"fe-configuration",level:3},{value:"AuditLoader Configuration",id:"auditloader-configuration",level:3},{value:"\u521b\u5efa\u5e93\u8868",id:"\u521b\u5efa\u5e93\u8868",level:3},{value:"Deployment",id:"deployment",level:3},{value:"Installation",id:"installation",level:3}],c={toc:u},m="wrapper";function d(e){let{components:t,...n}=e;return(0,a.yg)(m,(0,i.A)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,a.yg)("h1",{id:"audit-log-plugin"},"Audit Log Plugin"),(0,a.yg)("p",null,"Doris's audit log plugin was developed based on FE's plugin framework. Is an optional plugin. Users can install or uninstall this plugin at runtime."),(0,a.yg)("p",null,"This plugin can periodically import the FE audit log into the specified Doris cluster, so that users can easily view and analyze the audit log through SQL."),(0,a.yg)("h2",{id:"compile-configure-and-deploy"},"Compile, Configure and Deploy"),(0,a.yg)("h3",{id:"fe-configuration"},"FE Configuration"),(0,a.yg)("p",null,"The audit log plug-in framework is enabled by default in Doris and is controlled by the FE configuration ",(0,a.yg)("inlineCode",{parentName:"p"},"plugin_enable")),(0,a.yg)("h3",{id:"auditloader-configuration"},"AuditLoader Configuration"),(0,a.yg)("ol",null,(0,a.yg)("li",{parentName:"ol"},(0,a.yg)("p",{parentName:"li"},"Download the Audit Loader plugin"),(0,a.yg)("p",{parentName:"li"},"The Audit Loader plug-in is provided by default in the Doris distribution. After downloading the Doris installation package through ",(0,a.yg)("a",{parentName:"p",href:"https://doris.apache.org/download"},"DOWNLOAD"),", decompress it and enter the directory, you can find the auditloader.zip file in the extensionsaudit_loader subdirectory.")),(0,a.yg)("li",{parentName:"ol"},(0,a.yg)("p",{parentName:"li"},"Unzip the installation package"),(0,a.yg)("pre",{parentName:"li"},(0,a.yg)("code",{parentName:"pre",className:"language-shell"},"unzip auditloader.zip\n")),(0,a.yg)("p",{parentName:"li"},"Unzip and generate the following files:"),(0,a.yg)("ul",{parentName:"li"},(0,a.yg)("li",{parentName:"ul"},"auditloader.jar: plug-in code package."),(0,a.yg)("li",{parentName:"ul"},"plugin.properties: plugin properties file."),(0,a.yg)("li",{parentName:"ul"},"plugin.conf: plugin configuration file.")))),(0,a.yg)("p",null,"You can place this file on an http download server or copy(or unzip) it to the specified directory of all FEs. Here we use the latter.",(0,a.yg)("br",{parentName:"p"}),"\n","The installation of this plugin can be found in ",(0,a.yg)("a",{parentName:"p",href:"/docs/sql-manual/sql-reference/Database-Administration-Statements/INSTALL-PLUGIN"},"INSTALL"),(0,a.yg)("br",{parentName:"p"}),"\n","After executing install, the AuditLoader directory will be automatically generated."),(0,a.yg)("ol",{start:3},(0,a.yg)("li",{parentName:"ol"},(0,a.yg)("p",{parentName:"li"},"Modify plugin.conf"),(0,a.yg)("p",{parentName:"li"},"The following configurations are available for modification:"),(0,a.yg)("ul",{parentName:"li"},(0,a.yg)("li",{parentName:"ul"},"frontend_host_port: FE node IP address and HTTP port in the format <fe_ip>:<fe_http_port>. The default value is 127.0.0.1:8030."),(0,a.yg)("li",{parentName:"ul"},"database: Audit log database name."),(0,a.yg)("li",{parentName:"ul"},"audit_log_table: Audit log table name."),(0,a.yg)("li",{parentName:"ul"},"slow_log_table: Slow query log table name."),(0,a.yg)("li",{parentName:"ul"},"enable_slow_log: Whether to enable the slow query log import function. The default value is false."),(0,a.yg)("li",{parentName:"ul"},"user: Cluster username. The user must have INSERT permission on the corresponding table."),(0,a.yg)("li",{parentName:"ul"},"password: Cluster user password.")))),(0,a.yg)("h3",{id:"\u521b\u5efa\u5e93\u8868"},"\u521b\u5efa\u5e93\u8868"),(0,a.yg)("p",null,"In Doris, you need to create the library and table of the audit log. The table structure is as follows:"),(0,a.yg)("p",null,"If you need to enable the slow query log import function, you need to create an additional slow table ",(0,a.yg)("inlineCode",{parentName:"p"},"doris_slow_log_tbl__"),", whose table structure is consistent with ",(0,a.yg)("inlineCode",{parentName:"p"},"doris_audit_log_tbl__"),"."),(0,a.yg)("p",null,"Among them, the ",(0,a.yg)("inlineCode",{parentName:"p"},"dynamic_partition")," attribute selects the number of days for audit log retention according to your own needs."),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-sql"},'create database doris_audit_db__;\n\ncreate table doris_audit_db__.doris_audit_log_tbl__\n(\n    query_id varchar(48) comment "Unique query id",\n    `time` datetime not null comment "Query start time",\n    client_ip varchar(32) comment "Client IP",\n    user varchar(64) comment "User name",\n    catalog varchar(128) comment "Catalog of this query",\n    db varchar(96) comment "Database of this query",\n    state varchar(8) comment "Query result state. EOF, ERR, OK",\n    error_code int comment "Error code of failing query.",\n    error_message string comment "Error message of failing query.",\n    query_time bigint comment "Query execution time in millisecond",\n    scan_bytes bigint comment "Total scan bytes of this query",\n    scan_rows bigint comment "Total scan rows of this query",\n    return_rows bigint comment "Returned rows of this query",\n    stmt_id int comment "An incremental id of statement",\n    is_query tinyint comment "Is this statemt a query. 1 or 0",\n    frontend_ip varchar(32) comment "Frontend ip of executing this statement",\n    cpu_time_ms bigint comment "Total scan cpu time in millisecond of this query",\n    sql_hash varchar(48) comment "Hash value for this query",\n    sql_digest varchar(48) comment "Sql digest for this query",\n    peak_memory_bytes bigint comment "Peak memory bytes used on all backends of this query",\n    stmt string comment "The original statement, trimed if longer than 2G"\n) engine=OLAP\nduplicate key(query_id, `time`, client_ip)\npartition by range(`time`) ()\ndistributed by hash(query_id) buckets 1\nproperties(\n    "dynamic_partition.time_unit" = "DAY",\n    "dynamic_partition.start" = "-30",\n    "dynamic_partition.end" = "3",\n    "dynamic_partition.prefix" = "p",\n    "dynamic_partition.buckets" = "1",\n    "dynamic_partition.enable" = "true",\n    "replication_num" = "3"\n);\n\ncreate table doris_audit_db__.doris_slow_log_tbl__\n(\n    query_id varchar(48) comment "Unique query id",\n    `time` datetime not null comment "Query start time",\n    client_ip varchar(32) comment "Client IP",\n    user varchar(64) comment "User name",\n    catalog varchar(128) comment "Catalog of this query",\n    db varchar(96) comment "Database of this query",\n    state varchar(8) comment "Query result state. EOF, ERR, OK",\n    error_code int comment "Error code of failing query.",\n    error_message string comment "Error message of failing query.",\n    query_time bigint comment "Query execution time in millisecond",\n    scan_bytes bigint comment "Total scan bytes of this query",\n    scan_rows bigint comment "Total scan rows of this query",\n    return_rows bigint comment "Returned rows of this query",\n    stmt_id int comment "An incremental id of statement",\n    is_query tinyint comment "Is this statemt a query. 1 or 0",\n    frontend_ip varchar(32) comment "Frontend ip of executing this statement",\n    cpu_time_ms bigint comment "Total scan cpu time in millisecond of this query",\n    sql_hash varchar(48) comment "Hash value for this query",\n    sql_digest varchar(48) comment "Sql digest for this query",\n    peak_memory_bytes bigint comment "Peak memory bytes used on all backends of this query",\n    stmt string comment "The original statement, trimed if longer than 2G "\n) engine=OLAP\nduplicate key(query_id, `time`, client_ip)\npartition by range(`time`) ()\ndistributed by hash(query_id) buckets 1\nproperties(\n    "dynamic_partition.time_unit" = "DAY",\n    "dynamic_partition.start" = "-30",\n    "dynamic_partition.end" = "3",\n    "dynamic_partition.prefix" = "p",\n    "dynamic_partition.buckets" = "1",\n    "dynamic_partition.enable" = "true",\n    "replication_num" = "3"\n);\n')),(0,a.yg)("blockquote",null,(0,a.yg)("p",{parentName:"blockquote"},(0,a.yg)("strong",{parentName:"p"},"Notice")),(0,a.yg)("p",{parentName:"blockquote"},"In the above table structure: stmt string, this can only be used in 0.15 and later versions, in previous versions, the field type used varchar")),(0,a.yg)("h3",{id:"deployment"},"Deployment"),(0,a.yg)("p",null,"You can place the packaged auditloader.zip on an http server, or copy ",(0,a.yg)("inlineCode",{parentName:"p"},"auditloader.zip")," to the same specified directory in all FEs."),(0,a.yg)("h3",{id:"installation"},"Installation"),(0,a.yg)("p",null,"\u901a\u8fc7\u4ee5\u4e0b\u8bed\u53e5\u5b89\u88c5 Audit Loader \u63d2\u4ef6\uff1a"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-sql"},'INSTALL PLUGIN FROM [source] [PROPERTIES ("key"="value", ...)]\n')),(0,a.yg)("p",null,"Detailed command reference: ",(0,a.yg)("a",{parentName:"p",href:"../sql-manual/sql-reference/Database-Administration-Statements/INSTALL-PLUGIN"},"INSTALL-PLUGIN.md")),(0,a.yg)("p",null,"After successful installation, you can see the installed plug-ins through ",(0,a.yg)("inlineCode",{parentName:"p"},"SHOW PLUGINS"),", and the status is ",(0,a.yg)("inlineCode",{parentName:"p"},"INSTALLED"),"."),(0,a.yg)("p",null,"After completion, the plugin will continuously insert audit logs into this table at specified intervals."))}d.isMDXComponent=!0}}]);