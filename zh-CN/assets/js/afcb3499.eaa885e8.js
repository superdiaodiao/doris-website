"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([[2940],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>b});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=r.createContext({}),c=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},p=function(e){var t=c(e.components);return r.createElement(s.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,s=e.parentName,p=o(e,["components","mdxType","originalType","parentName"]),u=c(n),m=a,b=u["".concat(s,".").concat(m)]||u[m]||d[m]||i;return n?r.createElement(b,l(l({ref:t},p),{},{components:n})):r.createElement(b,l({ref:t},p))}));function b(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,l=new Array(i);l[0]=m;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o[u]="string"==typeof e?e:a,l[1]=o;for(var c=2;c<i;c++)l[c]=n[c];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},91120:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>l,default:()=>d,frontMatter:()=>i,metadata:()=>o,toc:()=>c});var r=n(87462),a=(n(67294),n(3905));const i={title:"SHOW TABLET DIAGNOSIS",language:"zh-CN"},l=void 0,o={unversionedId:"sql-manual/sql-reference/Database-Administration-Statements/SHOW-TABLET-DIAGNOSIS",id:"sql-manual/sql-reference/Database-Administration-Statements/SHOW-TABLET-DIAGNOSIS",title:"SHOW TABLET DIAGNOSIS",description:"\x3c!--",source:"@site/i18n/zh-CN/docusaurus-plugin-content-docs/current/sql-manual/sql-reference/Database-Administration-Statements/SHOW-TABLET-DIAGNOSIS.md",sourceDirName:"sql-manual/sql-reference/Database-Administration-Statements",slug:"/sql-manual/sql-reference/Database-Administration-Statements/SHOW-TABLET-DIAGNOSIS",permalink:"/zh-CN/docs/dev/sql-manual/sql-reference/Database-Administration-Statements/SHOW-TABLET-DIAGNOSIS",draft:!1,tags:[],version:"current",frontMatter:{title:"SHOW TABLET DIAGNOSIS",language:"zh-CN"},sidebar:"docs",previous:{title:"ADMIN-CHECK-TABLET",permalink:"/zh-CN/docs/dev/sql-manual/sql-reference/Database-Administration-Statements/ADMIN-CHECK-TABLET"},next:{title:"ADMIN-COPY-TABLET",permalink:"/zh-CN/docs/dev/sql-manual/sql-reference/Database-Administration-Statements/ADMIN-COPY-TABLET"}},s={},c=[{value:"SHOW TABLET DIAGNOSIS",id:"show-tablet-diagnosis",level:2},{value:"Description",id:"description",level:3},{value:"Example",id:"example",level:3},{value:"keywords",id:"keywords",level:3}],p={toc:c},u="wrapper";function d(e){let{components:t,...n}=e;return(0,a.kt)(u,(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"show-tablet-diagnosis"},"SHOW TABLET DIAGNOSIS"),(0,a.kt)("h3",{id:"description"},"Description"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"\u8be5\u8bed\u53e5\u7528\u4e8e\u8bca\u65ad\u6307\u5b9a tablet\u3002\u7ed3\u679c\u4e2d\u5c06\u663e\u793a\u8fd9\u4e2a tablet \u7684\u4fe1\u606f\u548c\u4e00\u4e9b\u6f5c\u5728\u7684\u95ee\u9898\u3002\n\n\u8bed\u6cd5\uff1a\n\n    SHOW TABLET DIAGNOSIS tablet_id\n\n\u8bf4\u660e\uff1a\n\n    \u7ed3\u679c\u4e2d\u7684\u5404\u884c\u4fe1\u606f\u5982\u4e0b\uff1a\n    1. TabletExist:                         Tablet\u662f\u5426\u5b58\u5728\n    2. TabletId:                            Tablet ID\n    3. Database:                            Tablet \u6240\u5c5e DB \u548c\u5176 ID\n    4. Table:                               Tablet \u6240\u5c5e Table \u548c\u5176 ID\n    5. Partition:                           Tablet \u6240\u5c5e Partition \u548c\u5176 ID\n    6. MaterializedIndex:                   Tablet \u6240\u5c5e\u7269\u5316\u89c6\u56fe\u548c\u5176 ID\n    7. Replicas(ReplicaId -> BackendId):    Tablet \u5404\u526f\u672c\u548c\u5176\u6240\u5728 BE\u3002\n    8. ReplicasNum:                         \u526f\u672c\u6570\u91cf\u662f\u5426\u6b63\u786e\u3002\n    9. ReplicaBackendStatus:                \u526f\u672c\u6240\u5728 BE \u8282\u70b9\u662f\u5426\u6b63\u5e38\u3002\n    10.ReplicaVersionStatus:                \u526f\u672c\u7684\u7248\u672c\u53f7\u662f\u5426\u6b63\u5e38\u3002\n    11.ReplicaStatus:                       \u526f\u672c\u72b6\u6001\u662f\u5426\u6b63\u5e38\u3002\n    12.ReplicaCompactionStatus:             \u526f\u672c Compaction \u72b6\u6001\u662f\u5426\u6b63\u5e38\u3002\n")),(0,a.kt)("h3",{id:"example"},"Example"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"1. \u67e5\u770b Tablet 10001 \u7684\u8bca\u65ad\u7ed3\u679c\n\n    SHOW TABLET DIAGNOSIS 10001;\n")),(0,a.kt)("h3",{id:"keywords"},"keywords"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"SHOW, DIAGNOSIS, TABLET\n")))}d.isMDXComponent=!0}}]);