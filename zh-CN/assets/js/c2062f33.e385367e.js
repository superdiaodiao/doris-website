"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([[75536],{15680:(e,t,r)=>{r.d(t,{xA:()=>s,yg:()=>m});var n=r(96540);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var u=n.createContext({}),c=function(e){var t=n.useContext(u),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},s=function(e){var t=c(e.components);return n.createElement(u.Provider,{value:t},e.children)},p="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},g=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,u=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),p=c(r),g=a,m=p["".concat(u,".").concat(g)]||p[g]||d[g]||o;return r?n.createElement(m,i(i({ref:t},s),{},{components:r})):n.createElement(m,i({ref:t},s))}));function m(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,i=new Array(o);i[0]=g;var l={};for(var u in t)hasOwnProperty.call(t,u)&&(l[u]=t[u]);l.originalType=e,l[p]="string"==typeof e?e:a,i[1]=l;for(var c=2;c<o;c++)i[c]=r[c];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}g.displayName="MDXCreateElement"},34916:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>u,contentTitle:()=>i,default:()=>d,frontMatter:()=>o,metadata:()=>l,toc:()=>c});var n=r(58168),a=(r(96540),r(15680));const o={title:"Hudi",language:"zh-CN"},i=void 0,l={unversionedId:"lakehouse/multi-catalog/hudi",id:"version-1.2/lakehouse/multi-catalog/hudi",title:"Hudi",description:"\x3c!--",source:"@site/i18n/zh-CN/docusaurus-plugin-content-docs/version-1.2/lakehouse/multi-catalog/hudi.md",sourceDirName:"lakehouse/multi-catalog",slug:"/lakehouse/multi-catalog/hudi",permalink:"/zh-CN/docs/1.2/lakehouse/multi-catalog/hudi",draft:!1,tags:[],version:"1.2",frontMatter:{title:"Hudi",language:"zh-CN"},sidebar:"docs",previous:{title:"Iceberg",permalink:"/zh-CN/docs/1.2/lakehouse/multi-catalog/iceberg"},next:{title:"Elasticsearch",permalink:"/zh-CN/docs/1.2/lakehouse/multi-catalog/es"}},u={},c=[{value:"\u4f7f\u7528\u9650\u5236",id:"\u4f7f\u7528\u9650\u5236",level:2},{value:"\u521b\u5efa Catalog",id:"\u521b\u5efa-catalog",level:2},{value:"\u5217\u7c7b\u578b\u6620\u5c04",id:"\u5217\u7c7b\u578b\u6620\u5c04",level:2}],s={toc:c},p="wrapper";function d(e){let{components:t,...r}=e;return(0,a.yg)(p,(0,n.A)({},s,r,{components:t,mdxType:"MDXLayout"}),(0,a.yg)("h1",{id:"hudi"},"Hudi"),(0,a.yg)("h2",{id:"\u4f7f\u7528\u9650\u5236"},"\u4f7f\u7528\u9650\u5236"),(0,a.yg)("ol",null,(0,a.yg)("li",{parentName:"ol"},"Hudi \u76ee\u524d\u4ec5\u652f\u6301 Copy On Write \u8868\u7684 Snapshot Query\uff0c\u4ee5\u53ca Merge On Read \u8868\u7684 Read Optimized Query\u3002\u540e\u7eed\u5c06\u652f\u6301 Incremental Query \u548c Merge On Read \u8868\u7684 Snapshot Query\u3002"),(0,a.yg)("li",{parentName:"ol"},"\u76ee\u524d\u4ec5\u652f\u6301 Hive Metastore \u7c7b\u578b\u7684 Catalog\u3002\u6240\u4ee5\u4f7f\u7528\u65b9\u5f0f\u548c Hive Catalog \u57fa\u672c\u4e00\u81f4\u3002\u540e\u7eed\u7248\u672c\u5c06\u652f\u6301\u5176\u4ed6\u7c7b\u578b\u7684 Catalog\u3002")),(0,a.yg)("h2",{id:"\u521b\u5efa-catalog"},"\u521b\u5efa Catalog"),(0,a.yg)("p",null,"\u548c Hive Catalog \u57fa\u672c\u4e00\u81f4\uff0c\u8fd9\u91cc\u4ec5\u7ed9\u51fa\u7b80\u5355\u793a\u4f8b\u3002\u5176\u4ed6\u793a\u4f8b\u53ef\u53c2\u9605 ",(0,a.yg)("a",{parentName:"p",href:"/zh-CN/docs/1.2/lakehouse/multi-catalog/hive"},"Hive Catalog"),"\u3002"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-sql"},"CREATE CATALOG hudi PROPERTIES (\n    'type'='hms',\n    'hive.metastore.uris' = 'thrift://172.21.0.1:7004',\n    'hadoop.username' = 'hive',\n    'dfs.nameservices'='your-nameservice',\n    'dfs.ha.namenodes.your-nameservice'='nn1,nn2',\n    'dfs.namenode.rpc-address.your-nameservice.nn1'='172.21.0.2:4007',\n    'dfs.namenode.rpc-address.your-nameservice.nn2'='172.21.0.3:4007',\n    'dfs.client.failover.proxy.provider.your-nameservice'='org.apache.hadoop.hdfs.server.namenode.ha.ConfiguredFailoverProxyProvider'\n);\n")),(0,a.yg)("h2",{id:"\u5217\u7c7b\u578b\u6620\u5c04"},"\u5217\u7c7b\u578b\u6620\u5c04"),(0,a.yg)("p",null,"\u548c Hive Catalog \u4e00\u81f4\uff0c\u53ef\u53c2\u9605 ",(0,a.yg)("a",{parentName:"p",href:"/zh-CN/docs/1.2/lakehouse/multi-catalog/hive"},"Hive Catalog")," \u4e2d ",(0,a.yg)("strong",{parentName:"p"},"\u5217\u7c7b\u578b\u6620\u5c04")," \u4e00\u8282\u3002"))}d.isMDXComponent=!0}}]);