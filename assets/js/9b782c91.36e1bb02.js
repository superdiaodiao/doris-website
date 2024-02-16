"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([[93296],{15680:(e,t,a)=>{a.d(t,{xA:()=>p,yg:()=>h});var n=a(96540);function i(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function r(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){i(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,n,i=function(e,t){if(null==e)return{};var a,n,i={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(i[a]=e[a]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(i[a]=e[a])}return i}var l=n.createContext({}),c=function(e){var t=n.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):r(r({},t),e)),a},p=function(e){var t=c(e.components);return n.createElement(l.Provider,{value:t},e.children)},u="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var a=e.components,i=e.mdxType,o=e.originalType,l=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),u=c(a),d=i,h=u["".concat(l,".").concat(d)]||u[d]||m[d]||o;return a?n.createElement(h,r(r({ref:t},p),{},{components:a})):n.createElement(h,r({ref:t},p))}));function h(e,t){var a=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=a.length,r=new Array(o);r[0]=d;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[u]="string"==typeof e?e:i,r[1]=s;for(var c=2;c<o;c++)r[c]=a[c];return n.createElement.apply(null,r)}return n.createElement.apply(null,a)}d.displayName="MDXCreateElement"},99180:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>l,contentTitle:()=>r,default:()=>m,frontMatter:()=>o,metadata:()=>s,toc:()=>c});var n=a(58168),i=(a(96540),a(15680));const o={title:"View Compaction Status",language:"en"},r=void 0,s={unversionedId:"admin-manual/http-actions/be/compaction-status",id:"admin-manual/http-actions/be/compaction-status",title:"View Compaction Status",description:"\x3c!--",source:"@site/docs/admin-manual/http-actions/be/compaction-status.md",sourceDirName:"admin-manual/http-actions/be",slug:"/admin-manual/http-actions/be/compaction-status",permalink:"/docs/dev/admin-manual/http-actions/be/compaction-status",draft:!1,tags:[],version:"current",frontMatter:{title:"View Compaction Status",language:"en"},sidebar:"docs",previous:{title:"Reset Stub Cache",permalink:"/docs/dev/admin-manual/http-actions/be/reset-rpc-channel"},next:{title:"Manually Trigger Compaction",permalink:"/docs/dev/admin-manual/http-actions/be/compaction-run"}},l={},c=[{value:"Request",id:"request",level:2},{value:"Description",id:"description",level:2},{value:"Query parameters",id:"query-parameters",level:2},{value:"Request body",id:"request-body",level:2},{value:"Response",id:"response",level:2},{value:"The overall compaction status of the node",id:"the-overall-compaction-status-of-the-node",level:3},{value:"Specify the compaction status of the tablet",id:"specify-the-compaction-status-of-the-tablet",level:3},{value:"Examples",id:"examples",level:2}],p={toc:c},u="wrapper";function m(e){let{components:t,...a}=e;return(0,i.yg)(u,(0,n.A)({},p,a,{components:t,mdxType:"MDXLayout"}),(0,i.yg)("h1",{id:"view-compaction-status"},"View Compaction Status"),(0,i.yg)("h2",{id:"request"},"Request"),(0,i.yg)("p",null,(0,i.yg)("inlineCode",{parentName:"p"},"GET /api/compaction/run_status"),"\n",(0,i.yg)("inlineCode",{parentName:"p"},"GET /api/compaction/show?tablet_id={int}")),(0,i.yg)("h2",{id:"description"},"Description"),(0,i.yg)("p",null,"It is used to view the overall compaction status of a BE node and the compaction status of a specified tablet."),(0,i.yg)("h2",{id:"query-parameters"},"Query parameters"),(0,i.yg)("ul",null,(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("inlineCode",{parentName:"li"},"tablet_id"),"\nID of the tablet")),(0,i.yg)("h2",{id:"request-body"},"Request body"),(0,i.yg)("p",null,"None"),(0,i.yg)("h2",{id:"response"},"Response"),(0,i.yg)("h3",{id:"the-overall-compaction-status-of-the-node"},"The overall compaction status of the node"),(0,i.yg)("pre",null,(0,i.yg)("code",{parentName:"pre"},'{\n  "CumulativeCompaction": {\n         "/home/disk1" : [10001, 10002],\n         "/home/disk2" : [10003]\n  },\n  "BaseCompaction": {\n         "/home/disk1" : [10001, 10002],\n         "/home/disk2" : [10003]\n  }\n}\n')),(0,i.yg)("p",null,"This structure represents the id of the tablet that is performing the compaction task in a certain data directory, and the type of compaction."),(0,i.yg)("h3",{id:"specify-the-compaction-status-of-the-tablet"},"Specify the compaction status of the tablet"),(0,i.yg)("pre",null,(0,i.yg)("code",{parentName:"pre"},'{\n    "cumulative policy type": "SIZE_BASED",\n    "cumulative point": 50,\n    "last cumulative failure time": "2019-12-16 18:13:43.224",\n    "last base failure time": "2019-12-16 18:13:23.320",\n    "last cumu success time": ,\n    "last base success time": "2019-12-16 18:11:50.780",\n    "rowsets": [\n        "[0-48] 10 DATA OVERLAPPING 574.00 MB",\n        "[49-49] 2 DATA OVERLAPPING 574.00 B",\n        "[50-50] 0 DELETE NONOVERLAPPING 574.00 B",\n        "[51-51] 5 DATA OVERLAPPING 574.00 B"\n    ],\n    "missing_rowsets": [],\n    "stale version path": [\n        {\n            "path id": "2",\n            "last create time": "2019-12-16 18:11:15.110 +0800",\n            "path list": "2-> [0-24] -> [25-48]"\n        }, \n        {\n            "path id": "1",\n            "last create time": "2019-12-16 18:13:15.110 +0800",\n            "path list": "1-> [25-40] -> [40-48]"\n        }\n    ]\n}\n')),(0,i.yg)("p",null,"Explanation of results:"),(0,i.yg)("ul",null,(0,i.yg)("li",{parentName:"ul"},"cumulative policy type: The cumulative compaction policy type which is used by current tablet."),(0,i.yg)("li",{parentName:"ul"},"cumulative point: The version boundary between base and cumulative compaction. Versions before (excluding) points are handled by base compaction. Versions after (inclusive) are handled by cumulative compaction."),(0,i.yg)("li",{parentName:"ul"},"last cumulative failure time: The time when the last cumulative compaction failed. After 10 minutes by default, cumulative compaction is attempted on the this tablet again."),(0,i.yg)("li",{parentName:"ul"},"last base failure time: The time when the last base compaction failed. After 10 minutes by default, base compaction is attempted on the this tablet again."),(0,i.yg)("li",{parentName:"ul"},"rowsets: The current rowsets collection of this tablet. ","[0-48]"," means a rowset with version 0-48. The second number is the number of segments in a rowset. The DELETE indicates the delete version. OVERLAPPING and NONOVERLAPPING indicates whether data between segments is overlap."),(0,i.yg)("li",{parentName:"ul"},"missing_rowset: The missing rowsets."),(0,i.yg)("li",{parentName:"ul"},"stale version path: The merged version path of the rowset collection currently merged in the tablet. It is an array structure and each element represents a merged path. Each element contains three attributes: path id indicates the version path id, and last create time indicates the creation time of the most recent rowset on the path. By default, all rowsets on this path will be deleted after half an hour at the last create time.")),(0,i.yg)("h2",{id:"examples"},"Examples"),(0,i.yg)("pre",null,(0,i.yg)("code",{parentName:"pre"},"curl http://192.168.10.24:8040/api/compaction/show?tablet_id=10015\n")))}m.isMDXComponent=!0}}]);