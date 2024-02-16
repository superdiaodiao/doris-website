"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([[45740],{15680:(e,t,a)=>{a.d(t,{xA:()=>p,yg:()=>d});var n=a(96540);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function l(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?l(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function o(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},l=Object.keys(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var s=n.createContext({}),u=function(e){var t=n.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},p=function(e){var t=u(e.components);return n.createElement(s.Provider,{value:t},e.children)},c="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},y=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,l=e.originalType,s=e.parentName,p=o(e,["components","mdxType","originalType","parentName"]),c=u(a),y=r,d=c["".concat(s,".").concat(y)]||c[y]||m[y]||l;return a?n.createElement(d,i(i({ref:t},p),{},{components:a})):n.createElement(d,i({ref:t},p))}));function d(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=a.length,i=new Array(l);i[0]=y;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o[c]="string"==typeof e?e:r,i[1]=o;for(var u=2;u<l;u++)i[u]=a[u];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}y.displayName="MDXCreateElement"},32742:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>m,frontMatter:()=>l,metadata:()=>o,toc:()=>u});var n=a(58168),r=(a(96540),a(15680));const l={title:"Query Stats Action",language:"zh-CN"},i=void 0,o={unversionedId:"admin-manual/http-actions/fe/query-stats-action",id:"version-2.0/admin-manual/http-actions/fe/query-stats-action",title:"Query Stats Action",description:"\x3c!--",source:"@site/i18n/zh-CN/docusaurus-plugin-content-docs/version-2.0/admin-manual/http-actions/fe/query-stats-action.md",sourceDirName:"admin-manual/http-actions/fe",slug:"/admin-manual/http-actions/fe/query-stats-action",permalink:"/zh-CN/docs/admin-manual/http-actions/fe/query-stats-action",draft:!1,tags:[],version:"2.0",frontMatter:{title:"Query Stats Action",language:"zh-CN"},sidebar:"docs",previous:{title:"Query Schema Action",permalink:"/zh-CN/docs/admin-manual/http-actions/fe/query-schema-action"},next:{title:"Row Count Action",permalink:"/zh-CN/docs/admin-manual/http-actions/fe/row-count-action"}},s={},u=[{value:"Request",id:"request",level:2},{value:"Description",id:"description",level:2},{value:"Path parameters",id:"path-parameters",level:2},{value:"Query parameters",id:"query-parameters",level:2},{value:"Request body",id:"request-body",level:2},{value:"Response",id:"response",level:2},{value:"Example",id:"example",level:2}],p={toc:u},c="wrapper";function m(e){let{components:t,...a}=e;return(0,r.yg)(c,(0,n.A)({},p,a,{components:t,mdxType:"MDXLayout"}),(0,r.yg)("h1",{id:"query-stats-action"},"Query Stats Action"),(0,r.yg)("version",{since:"dev"}),(0,r.yg)("h2",{id:"request"},"Request"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre"},"\u67e5\u770b\nget api/query_stats/<catalog_name>\nget api/query_stats/<catalog_name>/<db_name>\nget api/query_stats/<catalog_name>/<db_name>/<tbl_name>\n\n\u6e05\u7a7a\ndelete api/query_stats/<catalog_name>/<db_name>\ndelete api/query_stats/<catalog_name>/<db_name>/<tbl_name>\n")),(0,r.yg)("h2",{id:"description"},"Description"),(0,r.yg)("p",null,"\u83b7\u53d6\u6216\u8005\u5220\u9664\u6307\u5b9a\u7684catalog \u6570\u636e\u5e93\u6216\u8005\u8868\u4e2d\u7684\u7edf\u8ba1\u4fe1\u606f\uff0c \u5982\u679c\u662fdoris catalog \u53ef\u4ee5\u4f7f\u7528default_cluster"),(0,r.yg)("h2",{id:"path-parameters"},"Path parameters"),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("p",{parentName:"li"},(0,r.yg)("inlineCode",{parentName:"p"},"<catalog_name>")),(0,r.yg)("p",{parentName:"li"},"  \u6307\u5b9a\u7684catalog \u540d\u79f0")),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("p",{parentName:"li"},(0,r.yg)("inlineCode",{parentName:"p"},"<db_name>")),(0,r.yg)("p",{parentName:"li"},"  \u6307\u5b9a\u7684\u6570\u636e\u5e93\u540d\u79f0")),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("p",{parentName:"li"},(0,r.yg)("inlineCode",{parentName:"p"},"<tbl_name>")),(0,r.yg)("p",{parentName:"li"},"  \u6307\u5b9a\u7684\u8868\u540d\u79f0"))),(0,r.yg)("h2",{id:"query-parameters"},"Query parameters"),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("inlineCode",{parentName:"li"},"summary"),"\n\u5982\u679c\u4e3atrue \u5219\u53ea\u8fd4\u56desummary\u4fe1\u606f\uff0c \u5426\u5219\u8fd4\u56de\u6240\u6709\u7684\u8868\u7684\u8be6\u7ec6\u7edf\u8ba1\u4fe1\u606f\uff0c\u53ea\u5728get \u65f6\u4f7f\u7528")),(0,r.yg)("h2",{id:"request-body"},"Request body"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre"},'GET /api/query_stats/default_cluster/test_query_db/baseall?summary=false\n{\n    "msg": "success",\n    "code": 0,\n    "data": {\n        "summary": {\n            "query": 2\n        },\n        "detail": {\n            "baseall": {\n                "summary": {\n                    "query": 2\n                }\n            }\n        }\n    },\n    "count": 0\n}\n\n')),(0,r.yg)("h2",{id:"response"},"Response"),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},"\u8fd4\u56de\u7ed3\u679c\u96c6")),(0,r.yg)("h2",{id:"example"},"Example"),(0,r.yg)("ol",{start:2},(0,r.yg)("li",{parentName:"ol"},(0,r.yg)("p",{parentName:"li"},"\u4f7f\u7528 curl \u547d\u4ee4\u83b7\u53d6\u7edf\u8ba1\u4fe1\u606f"),(0,r.yg)("pre",{parentName:"li"},(0,r.yg)("code",{parentName:"pre"},"curl --location -u root: 'http://127.0.0.1:8030/api/query_stats/default_cluster/test_query_db/baseall?summary=false'\n")))))}m.isMDXComponent=!0}}]);