"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([[42382],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>m});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var i=a.createContext({}),c=function(e){var t=a.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},p=function(e){var t=c(e.components);return a.createElement(i.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},f=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,i=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),u=c(n),f=r,m=u["".concat(i,".").concat(f)]||u[f]||d[f]||o;return n?a.createElement(m,l(l({ref:t},p),{},{components:n})):a.createElement(m,l({ref:t},p))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,l=new Array(o);l[0]=f;var s={};for(var i in t)hasOwnProperty.call(t,i)&&(s[i]=t[i]);s.originalType=e,s[u]="string"==typeof e?e:r,l[1]=s;for(var c=2;c<o;c++)l[c]=n[c];return a.createElement.apply(null,l)}return a.createElement.apply(null,n)}f.displayName="MDXCreateElement"},32847:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>i,contentTitle:()=>l,default:()=>d,frontMatter:()=>o,metadata:()=>s,toc:()=>c});var a=n(87462),r=(n(67294),n(3905));const o={title:"CATALOGS",language:"en"},l=void 0,s={unversionedId:"sql-manual/sql-functions/table-functions/catalogs",id:"sql-manual/sql-functions/table-functions/catalogs",title:"CATALOGS",description:"\x3c!--",source:"@site/docs/sql-manual/sql-functions/table-functions/catalogs.md",sourceDirName:"sql-manual/sql-functions/table-functions",slug:"/sql-manual/sql-functions/table-functions/catalogs",permalink:"/docs/dev/sql-manual/sql-functions/table-functions/catalogs",draft:!1,tags:[],version:"current",frontMatter:{title:"CATALOGS",language:"en"},sidebar:"docs",previous:{title:"WORKLOAD_GROUPS",permalink:"/docs/dev/sql-manual/sql-functions/table-functions/workload-group"},next:{title:"frontends_disks",permalink:"/docs/dev/sql-manual/sql-functions/table-functions/frontends_disks"}},i={},c=[{value:"<code>catalogs</code>",id:"catalogs",level:2},{value:"Name",id:"name",level:3},{value:"description",id:"description",level:3},{value:"syntax",id:"syntax",level:4},{value:"example",id:"example",level:3},{value:"keywords",id:"keywords",level:3}],p={toc:c},u="wrapper";function d(e){let{components:t,...n}=e;return(0,r.kt)(u,(0,a.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h2",{id:"catalogs"},(0,r.kt)("inlineCode",{parentName:"h2"},"catalogs")),(0,r.kt)("h3",{id:"name"},"Name"),(0,r.kt)("p",null,"catalogs"),(0,r.kt)("h3",{id:"description"},"description"),(0,r.kt)("p",null,"The table function generates a temporary table of catalogs to view the information of the catalogs created in the current Doris."),(0,r.kt)("p",null,"This function is used in the from clause."),(0,r.kt)("h4",{id:"syntax"},"syntax"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"catalogs()")),(0,r.kt)("p",null,"Catalogs () table structure:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"mysql> desc function catalogs();\n+-------------+--------+------+-------+---------+-------+\n| Field       | Type   | Null | Key   | Default | Extra |\n+-------------+--------+------+-------+---------+-------+\n| CatalogId   | BIGINT | No   | false | NULL    | NONE  |\n| CatalogName | TEXT   | No   | false | NULL    | NONE  |\n| CatalogType | TEXT   | No   | false | NULL    | NONE  |\n| Property    | TEXT   | No   | false | NULL    | NONE  |\n| Value       | TEXT   | No   | false | NULL    | NONE  |\n+-------------+--------+------+-------+---------+-------+\n5 rows in set (0.04 sec)\n")),(0,r.kt)("p",null,"The information presented by ",(0,r.kt)("inlineCode",{parentName:"p"},"catalogs()")," tvf is the result of synthesizing ",(0,r.kt)("inlineCode",{parentName:"p"},"show catalogs")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"show catalog xxx")," statements."),(0,r.kt)("p",null,"The table generated by tvf can be used for filtering, join and other operations."),(0,r.kt)("h3",{id:"example"},"example"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"mysql> select * from catalogs();\n+-----------+-------------+-------------+--------------------------------------------+---------------------------------------------------------------------------+\n| CatalogId | CatalogName | CatalogType | Property                                   | Value                                                                     |\n+-----------+-------------+-------------+--------------------------------------------+---------------------------------------------------------------------------+\n|     16725 | hive        | hms         | dfs.client.failover.proxy.provider.HANN    | org.apache.hadoop.hdfs.server.namenode.ha.ConfiguredFailoverProxyProvider |\n|     16725 | hive        | hms         | dfs.ha.namenodes.HANN                      | nn1,nn2                                                                   |\n|     16725 | hive        | hms         | create_time                                | 2023-07-13 16:24:38.968                                                   |\n|     16725 | hive        | hms         | ipc.client.fallback-to-simple-auth-allowed | true                                                                      |\n|     16725 | hive        | hms         | dfs.namenode.rpc-address.HANN.nn1          | nn1_host:rpc_port                                                         |\n|     16725 | hive        | hms         | hive.metastore.uris                        | thrift://127.0.0.1:7004                                                   |\n|     16725 | hive        | hms         | dfs.namenode.rpc-address.HANN.nn2          | nn2_host:rpc_port                                                         |\n|     16725 | hive        | hms         | type                                       | hms                                                                       |\n|     16725 | hive        | hms         | dfs.nameservices                           | HANN                                                                      |\n|         0 | internal    | internal    | NULL                                       | NULL                                                                      |\n|     16726 | es          | es          | create_time                                | 2023-07-13 16:24:44.922                                                   |\n|     16726 | es          | es          | type                                       | es                                                                        |\n|     16726 | es          | es          | hosts                                      | http://127.0.0.1:9200                                                     |\n+-----------+-------------+-------------+--------------------------------------------+---------------------------------------------------------------------------+\n13 rows in set (0.01 sec)\n")),(0,r.kt)("h3",{id:"keywords"},"keywords"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"catalogs\n")))}d.isMDXComponent=!0}}]);