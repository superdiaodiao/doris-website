"use strict";(self.webpackChunkselectdb_portal=self.webpackChunkselectdb_portal||[]).push([[57741],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>f});var i=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,i,r=function(e,t){if(null==e)return{};var n,i,r={},o=Object.keys(e);for(i=0;i<o.length;i++)n=o[i],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(i=0;i<o.length;i++)n=o[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=i.createContext({}),u=function(e){var t=i.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},c=function(e){var t=u(e.components);return i.createElement(s.Provider,{value:t},e.children)},p="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},m=i.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),p=u(n),m=r,f=p["".concat(s,".").concat(m)]||p[m]||d[m]||o;return n?i.createElement(f,a(a({ref:t},c),{},{components:n})):i.createElement(f,a({ref:t},c))}));function f(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,a=new Array(o);a[0]=m;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[p]="string"==typeof e?e:r,a[1]=l;for(var u=2;u<o;u++)a[u]=n[u];return i.createElement.apply(null,a)}return i.createElement.apply(null,n)}m.displayName="MDXCreateElement"},66120:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>a,default:()=>p,frontMatter:()=>o,metadata:()=>l,toc:()=>u});var i=n(87462),r=(n(67294),n(3905));const o={title:"Audit log plugin",language:"en"},a=void 0,l={unversionedId:"ecosystem/audit-plugin",id:"ecosystem/audit-plugin",title:"Audit log plugin",description:"<!-",source:"@site/docs/ecosystem/audit-plugin.md",sourceDirName:"ecosystem",slug:"/ecosystem/audit-plugin",permalink:"/docs/ecosystem/audit-plugin",draft:!1,tags:[],version:"current",frontMatter:{title:"Audit log plugin",language:"en"},sidebar:"docs",previous:{title:"Doris On Iceberg",permalink:"/docs/ecosystem/external-table/iceberg-of-doris"},next:{title:"Flink Doris Connector",permalink:"/docs/ecosystem/flink-doris-connector"}},s={},u=[{value:"Compile, Configure and Deploy",id:"compile-configure-and-deploy",level:2},{value:"FE Configuration",id:"fe-configuration",level:3},{value:"AuditLoader Configuration",id:"auditloader-configuration",level:3},{value:"Compile",id:"compile",level:3},{value:"Deployment",id:"deployment",level:3},{value:"Installation",id:"installation",level:3}],c={toc:u};function p(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,i.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,'<!-\nLicensed to the Apache Software Foundation (ASF) under one\nor more contributor license agreements. See the NOTICE file\ndistributed with this work for additional information\nregarding copyright ownership. The ASF licenses this file\nto you under the Apache License, Version 2.0 (the\n"License"); you may not use this file except in compliance\nwith the License. You may obtain a copy of the License at'),(0,r.kt)("p",null,"\xa0\xa0",(0,r.kt)("a",{parentName:"p",href:"http://www.apache.org/licenses/LICENSE-2.0"},"http://www.apache.org/licenses/LICENSE-2.0")),(0,r.kt)("p",null,'Unless required by applicable law or agreed to in writing,\nsoftware distributed under the License is distributed on an\n"AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY\nKIND, either express or implied. See the License for the\nspecific language governing permissions and limitations\nunder the License.\n->'),(0,r.kt)("h1",{id:"audit-log-plugin"},"Audit log plugin"),(0,r.kt)("p",null,"Doris's audit log plugin was developed based on FE's plugin framework. Is an optional plugin. Users can install or uninstall this plugin at runtime."),(0,r.kt)("p",null,"This plugin can periodically import the FE audit log into the specified Doris cluster, so that users can easily view and analyze the audit log through SQL."),(0,r.kt)("h2",{id:"compile-configure-and-deploy"},"Compile, Configure and Deploy"),(0,r.kt)("h3",{id:"fe-configuration"},"FE Configuration"),(0,r.kt)("p",null,"FE's plugin framework is an experimental feature, which is closed by default. In the FE configuration file, add ",(0,r.kt)("inlineCode",{parentName:"p"},"plugin_enable = true")," to enable the plugin framework."),(0,r.kt)("h3",{id:"auditloader-configuration"},"AuditLoader Configuration"),(0,r.kt)("p",null,"The configuration of the auditloader plugin is located in ",(0,r.kt)("inlineCode",{parentName:"p"},"$ {DORIS}/fe_plugins/auditloader/src/main/assembly/"),"."),(0,r.kt)("p",null,"Open ",(0,r.kt)("inlineCode",{parentName:"p"},"plugin.conf")," for configuration. See the comments of the configuration items."),(0,r.kt)("h3",{id:"compile"},"Compile"),(0,r.kt)("p",null,"After executing ",(0,r.kt)("inlineCode",{parentName:"p"},"sh build_plugin.sh")," in the Doris code directory, you will get the ",(0,r.kt)("inlineCode",{parentName:"p"},"auditloader.zip")," file in the ",(0,r.kt)("inlineCode",{parentName:"p"},"fe_plugins/output")," directory."),(0,r.kt)("h3",{id:"deployment"},"Deployment"),(0,r.kt)("p",null,"You can place this file on an http download server or copy(or unzip) it to the specified directory of all FEs. Here we use the latter."),(0,r.kt)("h3",{id:"installation"},"Installation"),(0,r.kt)("p",null,"After deployment is complete, and before installing the plugin, you need to create the audit database and tables previously specified in ",(0,r.kt)("inlineCode",{parentName:"p"},"plugin.conf"),". The table creation statement is as follows:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},'create table doris_audit_tbl__\n(\n    query_id varchar(48) comment "Unique query id",\n    time datetime not null comment "Query start time",\n    client_ip varchar(32) comment "Client IP",\n    user varchar(64) comment "User name",\n    db varchar(96) comment "Database of this query",\n    state varchar(8) comment "Query result state. EOF, ERR, OK",\n    query_time bigint comment "Query execution time in millisecond",\n    scan_bytes bigint comment "Total scan bytes of this query",\n    scan_rows bigint comment "Total scan rows of this query",\n    return_rows bigint comment "Returned rows of this query",\n    stmt_id int comment "An incremental id of statement",\n    is_query tinyint comment "Is this statemt a query. 1 or 0",\n    frontend_ip varchar(32) comment "Frontend ip of executing this statement",\n    cpu_time_ms bigint comment "Total scan cpu time in millisecond of this query",\n    sql_hash varchar(50) comment "Hash value for this query",\n    sql_digest varchar(48) comment "Sql digest for this query",\n    peak_memory_bytes bigint comment "Peak memory bytes used on all backends of this query",\n    stmt string comment "The original statement, trimed if longer than 2G"\n) engine=OLAP\nduplicate key(query_id, time, client_ip)\npartition by range(time) ()\ndistributed by hash(query_id) buckets 1\nproperties(\n    "dynamic_partition.time_unit" = "DAY",\n    "dynamic_partition.start" = "-30",\n    "dynamic_partition.end" = "3",\n    "dynamic_partition.prefix" = "p",\n    "dynamic_partition.buckets" = "1",\n    "dynamic_partition.enable" = "true",\n    "replication_num" = "3"\n);\n')),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},(0,r.kt)("strong",{parentName:"p"},"Notice")),(0,r.kt)("p",{parentName:"blockquote"},"In the above table structure: stmt string, this can only be used in 0.15 and later versions, in previous versions, the field type used varchar")),(0,r.kt)("p",null,"The ",(0,r.kt)("inlineCode",{parentName:"p"},"dynamic_partition")," attribute selects the number of days to keep the audit log based on your needs."),(0,r.kt)("p",null,"After that, connect to Doris and use the ",(0,r.kt)("inlineCode",{parentName:"p"},"INSTALL PLUGIN")," command to complete the installation. After successful installation, you can see the installed plug-ins through ",(0,r.kt)("inlineCode",{parentName:"p"},"SHOW PLUGINS"),", and the status is ",(0,r.kt)("inlineCode",{parentName:"p"},"INSTALLED"),"."),(0,r.kt)("p",null,"Upon completion, the plug-in will continuously import audit date into this table at specified intervals."))}p.isMDXComponent=!0}}]);