"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([[88431],{15680:(e,n,t)=>{t.d(n,{xA:()=>u,yg:()=>y});var r=t(96540);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var c=r.createContext({}),s=function(e){var n=r.useContext(c),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},u=function(e){var n=s(e.components);return r.createElement(c.Provider,{value:n},e.children)},p="mdxType",m={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},d=r.forwardRef((function(e,n){var t=e.components,a=e.mdxType,o=e.originalType,c=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),p=s(t),d=a,y=p["".concat(c,".").concat(d)]||p[d]||m[d]||o;return t?r.createElement(y,i(i({ref:n},u),{},{components:t})):r.createElement(y,i({ref:n},u))}));function y(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var o=t.length,i=new Array(o);i[0]=d;var l={};for(var c in n)hasOwnProperty.call(n,c)&&(l[c]=n[c]);l.originalType=e,l[p]="string"==typeof e?e:a,i[1]=l;for(var s=2;s<o;s++)i[s]=t[s];return r.createElement.apply(null,i)}return r.createElement.apply(null,t)}d.displayName="MDXCreateElement"},13150:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>c,contentTitle:()=>i,default:()=>m,frontMatter:()=>o,metadata:()=>l,toc:()=>s});var r=t(58168),a=(t(96540),t(15680));const o={title:"Config Action",language:"zh-CN"},i=void 0,l={unversionedId:"admin-manual/http-actions/fe/config-action",id:"version-2.0/admin-manual/http-actions/fe/config-action",title:"Config Action",description:"\x3c!--",source:"@site/i18n/zh-CN/docusaurus-plugin-content-docs/version-2.0/admin-manual/http-actions/fe/config-action.md",sourceDirName:"admin-manual/http-actions/fe",slug:"/admin-manual/http-actions/fe/config-action",permalink:"/zh-CN/docs/admin-manual/http-actions/fe/config-action",draft:!1,tags:[],version:"2.0",frontMatter:{title:"Config Action",language:"zh-CN"},sidebar:"docs",previous:{title:"\u591a\u79df\u6237\u548c\u8d44\u6e90\u5212\u5206",permalink:"/zh-CN/docs/admin-manual/multi-tenant"},next:{title:"HA Action",permalink:"/zh-CN/docs/admin-manual/http-actions/fe/ha-action"}},c={},s=[{value:"Request",id:"request",level:2},{value:"Description",id:"description",level:2},{value:"Path parameters",id:"path-parameters",level:2},{value:"Query parameters",id:"query-parameters",level:2},{value:"Request body",id:"request-body",level:2},{value:"Response",id:"response",level:2}],u={toc:s},p="wrapper";function m(e){let{components:n,...t}=e;return(0,a.yg)(p,(0,r.A)({},u,t,{components:n,mdxType:"MDXLayout"}),(0,a.yg)("h1",{id:"config-action"},"Config Action"),(0,a.yg)("h2",{id:"request"},"Request"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre"},"GET /rest/v1/config/fe/\n")),(0,a.yg)("h2",{id:"description"},"Description"),(0,a.yg)("p",null,"Config Action \u7528\u4e8e\u83b7\u53d6\u5f53\u524d FE \u7684\u914d\u7f6e\u4fe1\u606f"),(0,a.yg)("h2",{id:"path-parameters"},"Path parameters"),(0,a.yg)("p",null,"\u65e0"),(0,a.yg)("h2",{id:"query-parameters"},"Query parameters"),(0,a.yg)("ul",null,(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("p",{parentName:"li"},(0,a.yg)("inlineCode",{parentName:"p"},"conf_item")),(0,a.yg)("p",{parentName:"li"},"  \u53ef\u9009\u53c2\u6570\u3002\u8fd4\u56de FE \u7684\u914d\u7f6e\u4fe1\u606f\u4e2d\u7684\u6307\u5b9a\u9879\u3002"))),(0,a.yg)("h2",{id:"request-body"},"Request body"),(0,a.yg)("p",null,"\u65e0"),(0,a.yg)("h2",{id:"response"},"Response"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre"},'{\n    "msg": "success",\n    "code": 0,\n    "data": {\n        "column_names": ["Name", "Value"],\n        "rows": [{\n            "Value": "DAY",\n            "Name": "sys_log_roll_interval"\n        }, {\n            "Value": "23",\n            "Name": "consistency_check_start_time"\n        }, {\n            "Value": "4096",\n            "Name": "max_mysql_service_task_threads_num"\n        }, {\n            "Value": "1000",\n            "Name": "max_unfinished_load_job"\n        }, {\n            "Value": "100",\n            "Name": "max_routine_load_job_num"\n        }, {\n            "Value": "SYNC",\n            "Name": "master_sync_policy"\n        }]\n    },\n    "count": 0\n}\n')),(0,a.yg)("p",null,"\u8fd4\u56de\u7ed3\u679c\u540c ",(0,a.yg)("inlineCode",{parentName:"p"},"System Action"),"\u3002\u662f\u4e00\u4e2a\u8868\u683c\u7684\u63cf\u8ff0\u3002"))}m.isMDXComponent=!0}}]);