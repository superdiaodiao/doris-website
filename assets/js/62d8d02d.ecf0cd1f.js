"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([[67981],{15680:(e,t,r)=>{r.d(t,{xA:()=>c,yg:()=>g});var n=r(96540);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var s=n.createContext({}),u=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},c=function(e){var t=u(e.components);return n.createElement(s.Provider,{value:t},e.children)},p="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),p=u(r),m=a,g=p["".concat(s,".").concat(m)]||p[m]||d[m]||o;return r?n.createElement(g,i(i({ref:t},c),{},{components:r})):n.createElement(g,i({ref:t},c))}));function g(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,i=new Array(o);i[0]=m;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[p]="string"==typeof e?e:a,i[1]=l;for(var u=2;u<o;u++)i[u]=r[u];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},70311:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>d,frontMatter:()=>o,metadata:()=>l,toc:()=>u});var n=r(58168),a=(r(96540),r(15680));const o={title:"Hudi",language:"en"},i=void 0,l={unversionedId:"lakehouse/multi-catalog/hudi",id:"version-1.2/lakehouse/multi-catalog/hudi",title:"Hudi",description:"\x3c!--",source:"@site/versioned_docs/version-1.2/lakehouse/multi-catalog/hudi.md",sourceDirName:"lakehouse/multi-catalog",slug:"/lakehouse/multi-catalog/hudi",permalink:"/docs/1.2/lakehouse/multi-catalog/hudi",draft:!1,tags:[],version:"1.2",frontMatter:{title:"Hudi",language:"en"},sidebar:"docs",previous:{title:"Iceberg",permalink:"/docs/1.2/lakehouse/multi-catalog/iceberg"},next:{title:"Elasticsearch",permalink:"/docs/1.2/lakehouse/multi-catalog/es"}},s={},u=[{value:"Usage",id:"usage",level:2},{value:"Create Catalog",id:"create-catalog",level:2},{value:"Column Type Mapping",id:"column-type-mapping",level:2}],c={toc:u},p="wrapper";function d(e){let{components:t,...r}=e;return(0,a.yg)(p,(0,n.A)({},c,r,{components:t,mdxType:"MDXLayout"}),(0,a.yg)("h1",{id:"hudi"},"Hudi"),(0,a.yg)("h2",{id:"usage"},"Usage"),(0,a.yg)("ol",null,(0,a.yg)("li",{parentName:"ol"},"Currently, Doris supports Snapshot Query on Copy-on-Write Hudi tables and Read Optimized Query on Merge-on-Read tables. In the future, it will support Snapshot Query on Merge-on-Read tables and Incremental Query."),(0,a.yg)("li",{parentName:"ol"},"Doris only supports Hive Metastore Catalogs currently. The usage is basically the same as that of Hive Catalogs. More types of Catalogs will be supported in future versions.")),(0,a.yg)("h2",{id:"create-catalog"},"Create Catalog"),(0,a.yg)("p",null,"Same as creating Hive Catalogs. A simple example is provided here. See ",(0,a.yg)("a",{parentName:"p",href:"/docs/1.2/lakehouse/multi-catalog/hive"},"Hive")," for more information."),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-sql"},"CREATE CATALOG hudi PROPERTIES (\n    'type'='hms',\n    'hive.metastore.uris' = 'thrift://172.21.0.1:7004',\n    'hadoop.username' = 'hive',\n    'dfs.nameservices'='your-nameservice',\n    'dfs.ha.namenodes.your-nameservice'='nn1,nn2',\n    'dfs.namenode.rpc-address.your-nameservice.nn1'='172.21.0.2:4007',\n    'dfs.namenode.rpc-address.your-nameservice.nn2'='172.21.0.3:4007',\n    'dfs.client.failover.proxy.provider.your-nameservice'='org.apache.hadoop.hdfs.server.namenode.ha.ConfiguredFailoverProxyProvider'\n);\n")),(0,a.yg)("h2",{id:"column-type-mapping"},"Column Type Mapping"),(0,a.yg)("p",null,"Same as that in Hive Catalogs. See the relevant section in ",(0,a.yg)("a",{parentName:"p",href:"/docs/1.2/lakehouse/multi-catalog/hive"},"Hive"),"."))}d.isMDXComponent=!0}}]);