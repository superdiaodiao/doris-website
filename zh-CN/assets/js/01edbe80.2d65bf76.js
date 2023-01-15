"use strict";(self.webpackChunkselectdb_portal=self.webpackChunkselectdb_portal||[]).push([[27528],{3905:(e,t,n)=>{n.d(t,{Zo:()=>s,kt:()=>f});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=r.createContext({}),p=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},s=function(e){var t=p(e.components);return r.createElement(l.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,s=c(e,["components","mdxType","originalType","parentName"]),u=p(n),m=a,f=u["".concat(l,".").concat(m)]||u[m]||d[m]||o;return n?r.createElement(f,i(i({ref:t},s),{},{components:n})):r.createElement(f,i({ref:t},s))}));function f(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=m;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c[u]="string"==typeof e?e:a,i[1]=c;for(var p=2;p<o;p++)i[p]=n[p];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},15034:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>u,frontMatter:()=>o,metadata:()=>c,toc:()=>p});var r=n(87462),a=(n(67294),n(3905));const o={title:"QUERY DETAIL",language:"zh-CN"},i=void 0,c={unversionedId:"admin-manual/http-actions/query-detail-action",id:"version-dev/admin-manual/http-actions/query-detail-action",title:"QUERY DETAIL",description:"\x3c!--",source:"@site/i18n/zh-CN/docusaurus-plugin-content-docs/version-dev/admin-manual/http-actions/query-detail-action.md",sourceDirName:"admin-manual/http-actions",slug:"/admin-manual/http-actions/query-detail-action",permalink:"/zh-CN/docs/dev/admin-manual/http-actions/query-detail-action",draft:!1,editUrl:"https://github.com/apache/doris/edit/master/docs/zh-CN/docs/admin-manual/http-actions/query-detail-action.md",tags:[],version:"dev",frontMatter:{title:"QUERY DETAIL",language:"zh-CN"},sidebar:"docs",previous:{title:"Compaction Action",permalink:"/zh-CN/docs/dev/admin-manual/http-actions/compaction-action"},next:{title:"GET TABLETS ON A PARTICULAR BE",permalink:"/zh-CN/docs/dev/admin-manual/http-actions/get-tablets"}},l={},p=[],s={toc:p};function u(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,r.Z)({},s,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"query-detail"},"QUERY DETAIL"),(0,a.kt)("p",null,"\u4eceFE\u83b7\u53d6\u6240\u6709\u7684\u67e5\u8be2\u7ec6\u8282\uff0c\u83b7\u53d6\u5173\u4e8e\u67e5\u8be2\u6267\u884c\u7684\u76f8\u5173\u4fe1\u606f\u3002\nFE\u4f1a\u8fd4\u56de\u5728event_time\u4e4b\u540e\u7684\u67e5\u8be2\u7ec6\u8282\uff0c\u5176\u4e2devent_time\u5355\u4f4d\u4f1a\u7cbe\u786e\u5230\u6beb\u79d2\u3002"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"curl -X GET http://fe_host:fe_http_port/api/query_detail?event_time=1592054515284\n")),(0,a.kt)("p",null,"\u67e5\u8be2\u4fe1\u606f\u4f1a\u4ee5JSON\u683c\u5f0f\u8fd4\u56de\u3002"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},'[\n  {\n    "eventTime": 1592201405063,\n    "queryId": "a0a9259df9844029-845331577440a3bd",\n    "startTime": 1592201405055,\n    "endTime": 1592201405063,\n    "latency": 8,\n    "state": "FINISHED",\n    "database": "test",\n    "sql": "select * from table1"\n  },\n  {\n    "eventTime": 1592201420842,\n    "queryId": "21cd79c3e1634e8a-bdac090c7e7bcc36",\n    "startTime": 1592201420834,\n    "endTime": 1592201420842,\n    "latency": 8,\n    "state": "FINISHED",\n    "database": "test",\n    "sql": "select * from table1"\n  }\n]\n')))}u.isMDXComponent=!0}}]);