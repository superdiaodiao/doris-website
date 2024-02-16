"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([[17006],{15680:(e,n,t)=>{t.d(n,{xA:()=>u,yg:()=>y});var r=t(96540);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var c=r.createContext({}),s=function(e){var n=r.useContext(c),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},u=function(e){var n=s(e.components);return r.createElement(c.Provider,{value:n},e.children)},p="mdxType",d={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},m=r.forwardRef((function(e,n){var t=e.components,a=e.mdxType,o=e.originalType,c=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),p=s(t),m=a,y=p["".concat(c,".").concat(m)]||p[m]||d[m]||o;return t?r.createElement(y,i(i({ref:n},u),{},{components:t})):r.createElement(y,i({ref:n},u))}));function y(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var o=t.length,i=new Array(o);i[0]=m;var l={};for(var c in n)hasOwnProperty.call(n,c)&&(l[c]=n[c]);l.originalType=e,l[p]="string"==typeof e?e:a,i[1]=l;for(var s=2;s<o;s++)i[s]=t[s];return r.createElement.apply(null,i)}return r.createElement.apply(null,t)}m.displayName="MDXCreateElement"},62424:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>c,contentTitle:()=>i,default:()=>d,frontMatter:()=>o,metadata:()=>l,toc:()=>s});var r=t(58168),a=(t(96540),t(15680));const o={title:"HA Action",language:"zh-CN"},i=void 0,l={unversionedId:"admin-manual/http-actions/fe/ha-action",id:"version-1.2/admin-manual/http-actions/fe/ha-action",title:"HA Action",description:"\x3c!--",source:"@site/i18n/zh-CN/docusaurus-plugin-content-docs/version-1.2/admin-manual/http-actions/fe/ha-action.md",sourceDirName:"admin-manual/http-actions/fe",slug:"/admin-manual/http-actions/fe/ha-action",permalink:"/zh-CN/docs/1.2/admin-manual/http-actions/fe/ha-action",draft:!1,tags:[],version:"1.2",frontMatter:{title:"HA Action",language:"zh-CN"},sidebar:"docs",previous:{title:"Config Action",permalink:"/zh-CN/docs/1.2/admin-manual/http-actions/fe/config-action"},next:{title:"Hardware Info Action",permalink:"/zh-CN/docs/1.2/admin-manual/http-actions/fe/hardware-info-action"}},c={},s=[{value:"Request",id:"request",level:2},{value:"Description",id:"description",level:2},{value:"Path parameters",id:"path-parameters",level:2},{value:"Query parameters",id:"query-parameters",level:2},{value:"Request body",id:"request-body",level:2},{value:"Response",id:"response",level:2}],u={toc:s},p="wrapper";function d(e){let{components:n,...t}=e;return(0,a.yg)(p,(0,r.A)({},u,t,{components:n,mdxType:"MDXLayout"}),(0,a.yg)("h1",{id:"ha-action"},"HA Action"),(0,a.yg)("h2",{id:"request"},"Request"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre"},"GET /rest/v1/ha\n")),(0,a.yg)("h2",{id:"description"},"Description"),(0,a.yg)("p",null,"HA Action \u7528\u4e8e\u83b7\u53d6 FE \u96c6\u7fa4\u7684\u9ad8\u53ef\u7528\u7ec4\u4fe1\u606f\u3002"),(0,a.yg)("h2",{id:"path-parameters"},"Path parameters"),(0,a.yg)("p",null,"\u65e0"),(0,a.yg)("h2",{id:"query-parameters"},"Query parameters"),(0,a.yg)("p",null,"\u65e0"),(0,a.yg)("h2",{id:"request-body"},"Request body"),(0,a.yg)("p",null,"\u65e0"),(0,a.yg)("h2",{id:"response"},"Response"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre"},'{\n    "msg": "success",\n    "code": 0,\n    "data": {\n        "Observernodes": [],\n        "CurrentJournalId": [{\n            "Value": 433648,\n            "Name": "FrontendRole"\n        }],\n        "Electablenodes": [{\n            "Value": "host1",\n            "Name": "host1"\n        }],\n        "allowedFrontends": [{\n            "Value": "name: 192.168.1.1_9213_1597652404352, role: FOLLOWER, 192.168.1.1:9213",\n            "Name": "192.168.1.1_9213_1597652404352"\n        }],\n        "removedFronteds": [],\n        "CanRead": [{\n            "Value": true,\n            "Name": "Status"\n        }],\n        "databaseNames": [{\n            "Value": "433436 ",\n            "Name": "DatabaseNames"\n        }],\n        "FrontendRole": [{\n            "Value": "MASTER",\n            "Name": "FrontendRole"\n        }],\n        "CheckpointInfo": [{\n            "Value": 433435,\n            "Name": "Version"\n        }, {\n            "Value": "2020-09-03T02:07:37.000+0000",\n            "Name": "lastCheckPointTime"\n        }]\n    },\n    "count": 0\n}\n')))}d.isMDXComponent=!0}}]);