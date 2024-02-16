"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([[35631],{15680:(e,t,n)=>{n.d(t,{xA:()=>p,yg:()=>y});var a=n(96540);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function s(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?s(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):s(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},s=Object.keys(e);for(a=0;a<s.length;a++)n=s[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(a=0;a<s.length;a++)n=s[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var c=a.createContext({}),l=function(e){var t=a.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},p=function(e){var t=l(e.components);return a.createElement(c.Provider,{value:t},e.children)},u="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,s=e.originalType,c=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),u=l(n),d=r,y=u["".concat(c,".").concat(d)]||u[d]||m[d]||s;return n?a.createElement(y,o(o({ref:t},p),{},{components:n})):a.createElement(y,o({ref:t},p))}));function y(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var s=n.length,o=new Array(s);o[0]=d;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i[u]="string"==typeof e?e:r,o[1]=i;for(var l=2;l<s;l++)o[l]=n[l];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},62311:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>o,default:()=>m,frontMatter:()=>s,metadata:()=>i,toc:()=>l});var a=n(58168),r=(n(96540),n(15680));const s={title:"System Action",language:"zh-CN"},o=void 0,i={unversionedId:"admin-manual/http-actions/fe/system-action",id:"admin-manual/http-actions/fe/system-action",title:"System Action",description:"\x3c!--",source:"@site/i18n/zh-CN/docusaurus-plugin-content-docs/current/admin-manual/http-actions/fe/system-action.md",sourceDirName:"admin-manual/http-actions/fe",slug:"/admin-manual/http-actions/fe/system-action",permalink:"/zh-CN/docs/dev/admin-manual/http-actions/fe/system-action",draft:!1,tags:[],version:"current",frontMatter:{title:"System Action",language:"zh-CN"},sidebar:"docs",previous:{title:"Session Action",permalink:"/zh-CN/docs/dev/admin-manual/http-actions/fe/session-action"},next:{title:"Colocate Meta Action",permalink:"/zh-CN/docs/dev/admin-manual/http-actions/fe/colocate-meta-action"}},c={},l=[{value:"Request",id:"request",level:2},{value:"Description",id:"description",level:2},{value:"Path parameters",id:"path-parameters",level:2},{value:"Query parameters",id:"query-parameters",level:2},{value:"Request body",id:"request-body",level:2},{value:"Response",id:"response",level:2}],p={toc:l},u="wrapper";function m(e){let{components:t,...n}=e;return(0,r.yg)(u,(0,a.A)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,r.yg)("h1",{id:"system-action"},"System Action"),(0,r.yg)("h2",{id:"request"},"Request"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre"},"GET /rest/v1/system\n")),(0,r.yg)("h2",{id:"description"},"Description"),(0,r.yg)("p",null,"System Action \u7528\u4e8e Doris \u5185\u7f6e\u7684 Proc \u7cfb\u7edf\u7684\u76f8\u5173\u4fe1\u606f\u3002"),(0,r.yg)("h2",{id:"path-parameters"},"Path parameters"),(0,r.yg)("p",null,"\u65e0"),(0,r.yg)("h2",{id:"query-parameters"},"Query parameters"),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("p",{parentName:"li"},(0,r.yg)("inlineCode",{parentName:"p"},"path")),(0,r.yg)("p",{parentName:"li"},"  \u53ef\u9009\u53c2\u6570\uff0c\u6307\u5b9a proc \u7684 path"))),(0,r.yg)("h2",{id:"request-body"},"Request body"),(0,r.yg)("p",null,"\u65e0"),(0,r.yg)("h2",{id:"response"},"Response"),(0,r.yg)("p",null,"\u4ee5 ",(0,r.yg)("inlineCode",{parentName:"p"},"/dbs/10003/10054/partitions/10053/10055")," \u4e3a\u4f8b\uff1a"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre"},'{\n    "msg": "success",\n    "code": 0,\n    "data": {\n        "href_columns": ["TabletId", "MetaUrl", "CompactionStatus"],\n        "column_names": ["TabletId", "ReplicaId", "BackendId", "SchemaHash", "Version", "VersionHash", "LstSuccessVersion", "LstSuccessVersionHash", "LstFailedVersion", "LstFailedVersionHash", "LstFailedTime", "DataSize", "RowCount", "State", "LstConsistencyCheckTime", "CheckVersion", "CheckVersionHash", "VersionCount", "PathHash", "MetaUrl", "CompactionStatus"],\n        "rows": [{\n            "SchemaHash": "1294206575",\n            "LstFailedTime": "\\\\N",\n            "LstFailedVersion": "-1",\n            "MetaUrl": "URL",\n            "__hrefPaths": ["http://192.168.100.100:8030/rest/v1/system?path=/dbs/10003/10054/partitions/10053/10055/10056", "http://192.168.100.100:8043/api/meta/header/10056", "http://192.168.100.100:8043/api/compaction/show?tablet_id=10056"],\n            "CheckVersionHash": "-1",\n            "ReplicaId": "10057",\n            "VersionHash": "4611804212003004639",\n            "LstConsistencyCheckTime": "\\\\N",\n            "LstSuccessVersionHash": "4611804212003004639",\n            "CheckVersion": "-1",\n            "Version": "6",\n            "VersionCount": "2",\n            "State": "NORMAL",\n            "BackendId": "10032",\n            "DataSize": "776",\n            "LstFailedVersionHash": "0",\n            "LstSuccessVersion": "6",\n            "CompactionStatus": "URL",\n            "TabletId": "10056",\n            "PathHash": "-3259732870068082628",\n            "RowCount": "21"\n        }]\n    },\n    "count": 1\n}\n')),(0,r.yg)("p",null,"\u5176\u4e2d data \u90e8\u5206\u7684 ",(0,r.yg)("inlineCode",{parentName:"p"},"column_names")," \u662f\u8868\u5934\u4fe1\u606f\uff0c",(0,r.yg)("inlineCode",{parentName:"p"},"href_columns")," \u8868\u793a\u8868\u4e2d\u7684\u54ea\u4e9b\u5217\u662f\u8d85\u94fe\u63a5\u5217\u3002",(0,r.yg)("inlineCode",{parentName:"p"},"rows")," \u6570\u7ec4\u4e2d\u7684\u6bcf\u4e2a\u5143\u7d20\u8868\u793a\u4e00\u884c\u3002\u5176\u4e2d ",(0,r.yg)("inlineCode",{parentName:"p"},"__hrefPaths ")," \u4e0d\u662f\u8868\u6570\u636e\uff0c\u800c\u662f\u8d85\u94fe\u63a5\u5217\u7684\u94fe\u63a5URL\uff0c\u548c ",(0,r.yg)("inlineCode",{parentName:"p"},"href_columns")," \u4e2d\u7684\u5217\u4e00\u4e00\u5bf9\u5e94\u3002"))}m.isMDXComponent=!0}}]);