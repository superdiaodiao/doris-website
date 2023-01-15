"use strict";(self.webpackChunkselectdb_portal=self.webpackChunkselectdb_portal||[]).push([[85521],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>f});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=a.createContext({}),c=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=c(e.components);return a.createElement(s.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),u=c(n),m=r,f=u["".concat(s,".").concat(m)]||u[m]||d[m]||o;return n?a.createElement(f,i(i({ref:t},p),{},{components:n})):a.createElement(f,i({ref:t},p))}));function f(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=m;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[u]="string"==typeof e?e:r,i[1]=l;for(var c=2;c<o;c++)i[c]=n[c];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},39885:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>u,frontMatter:()=>o,metadata:()=>l,toc:()=>c});var a=n(87462),r=(n(67294),n(3905));const o={title:"HA Action",language:"en"},i=void 0,l={unversionedId:"admin-manual/http-actions/fe/ha-action",id:"version-dev/admin-manual/http-actions/fe/ha-action",title:"HA Action",description:"\x3c!--",source:"@site/versioned_docs/version-dev/admin-manual/http-actions/fe/ha-action.md",sourceDirName:"admin-manual/http-actions/fe",slug:"/admin-manual/http-actions/fe/ha-action",permalink:"/docs/dev/admin-manual/http-actions/fe/ha-action",draft:!1,editUrl:"https://github.com/apache/doris/edit/master/docs/en/docs/admin-manual/http-actions/fe/ha-action.md",tags:[],version:"dev",frontMatter:{title:"HA Action",language:"en"},sidebar:"docs",previous:{title:"Bootstrap Action",permalink:"/docs/dev/admin-manual/http-actions/fe/bootstrap-action"},next:{title:"Meta Replay State Action",permalink:"/docs/dev/admin-manual/http-actions/fe/meta-replay-state-action"}},s={},c=[{value:"Request",id:"request",level:2},{value:"Description",id:"description",level:2},{value:"Path parameters",id:"path-parameters",level:2},{value:"Query parameters",id:"query-parameters",level:2},{value:"Request body",id:"request-body",level:2},{value:"Response",id:"response",level:2}],p={toc:c};function u(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,a.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"ha-action"},"HA Action"),(0,r.kt)("h2",{id:"request"},"Request"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"GET /rest/v1/ha\n")),(0,r.kt)("h2",{id:"description"},"Description"),(0,r.kt)("p",null,"HA Action is used to obtain the high availability group information of the FE cluster."),(0,r.kt)("h2",{id:"path-parameters"},"Path parameters"),(0,r.kt)("p",null,"None"),(0,r.kt)("h2",{id:"query-parameters"},"Query parameters"),(0,r.kt)("p",null,"None"),(0,r.kt)("h2",{id:"request-body"},"Request body"),(0,r.kt)("p",null,"None"),(0,r.kt)("h2",{id:"response"},"Response"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},'{\n    "msg": "success",\n    "code": 0,\n    "data": {\n        "Observernodes": [],\n        "CurrentJournalId": [{\n            "Value": 433648,\n            "Name": "FrontendRole"\n        }],\n        "Electablenodes": [{\n            "Value": "host1",\n            "Name": "host1"\n        }],\n        "allowedFrontends": [{\n            "Value": "name: 192.168.1.1_9213_1597652404352, role: FOLLOWER, 192.168.1.1:9213",\n            "Name": "192.168.1.1_9213_1597652404352"\n        }],\n        "removedFronteds": [],\n        "CanRead": [{\n            "Value": true,\n            "Name": "Status"\n        }],\n        "databaseNames": [{\n            "Value": "433436 ",\n            "Name": "DatabaseNames"\n        }],\n        "FrontendRole": [{\n            "Value": "MASTER",\n            "Name": "FrontendRole"\n        }],\n        "CheckpointInfo": [{\n            "Value": 433435,\n            "Name": "Version"\n        }, {\n            "Value": "2020-09-03T02:07:37.000+0000",\n            "Name": "lastCheckPointTime"\n        }]\n    },\n    "count": 0\n}\n')))}u.isMDXComponent=!0}}]);