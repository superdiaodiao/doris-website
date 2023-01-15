"use strict";(self.webpackChunkselectdb_portal=self.webpackChunkselectdb_portal||[]).push([[8221],{3905:(t,e,n)=>{n.d(e,{Zo:()=>c,kt:()=>m});var r=n(67294);function i(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function a(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function o(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?a(Object(n),!0).forEach((function(e){i(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function s(t,e){if(null==t)return{};var n,r,i=function(t,e){if(null==t)return{};var n,r,i={},a=Object.keys(t);for(r=0;r<a.length;r++)n=a[r],e.indexOf(n)>=0||(i[n]=t[n]);return i}(t,e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);for(r=0;r<a.length;r++)n=a[r],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(i[n]=t[n])}return i}var l=r.createContext({}),p=function(t){var e=r.useContext(l),n=e;return t&&(n="function"==typeof t?t(e):o(o({},e),t)),n},c=function(t){var e=p(t.components);return r.createElement(l.Provider,{value:e},t.children)},u="mdxType",d={inlineCode:"code",wrapper:function(t){var e=t.children;return r.createElement(r.Fragment,{},e)}},b=r.forwardRef((function(t,e){var n=t.components,i=t.mdxType,a=t.originalType,l=t.parentName,c=s(t,["components","mdxType","originalType","parentName"]),u=p(n),b=i,m=u["".concat(l,".").concat(b)]||u[b]||d[b]||a;return n?r.createElement(m,o(o({ref:e},c),{},{components:n})):r.createElement(m,o({ref:e},c))}));function m(t,e){var n=arguments,i=e&&e.mdxType;if("string"==typeof t||i){var a=n.length,o=new Array(a);o[0]=b;var s={};for(var l in e)hasOwnProperty.call(e,l)&&(s[l]=e[l]);s.originalType=t,s[u]="string"==typeof t?t:i,o[1]=s;for(var p=2;p<a;p++)o[p]=n[p];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}b.displayName="MDXCreateElement"},14691:(t,e,n)=>{n.r(e),n.d(e,{assets:()=>l,contentTitle:()=>o,default:()=>u,frontMatter:()=>a,metadata:()=>s,toc:()=>p});var r=n(87462),i=(n(67294),n(3905));const a={title:"GET TABLETS DISTRIBUTION BETWEEN DIFFERENT DISKS",language:"zh-CN"},o=void 0,s={unversionedId:"administrator-guide/http-actions/tablets_distribution",id:"version-0.15/administrator-guide/http-actions/tablets_distribution",title:"GET TABLETS DISTRIBUTION BETWEEN DIFFERENT DISKS",description:"\x3c!--",source:"@site/i18n/zh-CN/docusaurus-plugin-content-docs/version-0.15/administrator-guide/http-actions/tablets_distribution.md",sourceDirName:"administrator-guide/http-actions",slug:"/administrator-guide/http-actions/tablets_distribution",permalink:"/zh-CN/docs/0.15/administrator-guide/http-actions/tablets_distribution",draft:!1,tags:[],version:"0.15",frontMatter:{title:"GET TABLETS DISTRIBUTION BETWEEN DIFFERENT DISKS",language:"zh-CN"},sidebar:"docs",previous:{title:"MIGRATE SINGLE TABLET TO A PARTICULAR DISK",permalink:"/zh-CN/docs/0.15/administrator-guide/http-actions/tablet-migration-action"},next:{title:"Doris\u9519\u8bef\u4ee3\u7801\u8868",permalink:"/zh-CN/docs/0.15/administrator-guide/operation/doris-error-code"}},l={},p=[],c={toc:p};function u(t){let{components:e,...n}=t;return(0,i.kt)("wrapper",(0,r.Z)({},c,n,{components:e,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"get-tablets-distribution-between-different-disks"},"GET TABLETS DISTRIBUTION BETWEEN DIFFERENT DISKS"),(0,i.kt)("p",null,"\u83b7\u53d6BE\u8282\u70b9\u4e0a\u6bcf\u4e00\u4e2apartition\u4e0b\u7684tablet\u5728\u4e0d\u540c\u78c1\u76d8\u4e0a\u7684\u5206\u5e03\u60c5\u51b5"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"curl -X GET http://be_host:webserver_port/api/tablets_distribution?group_by=partition\n")),(0,i.kt)("p",null,"\u8fd4\u56de\u503c\u5c31\u662fBE\u8282\u70b9\u4e0a\u6bcf\u4e00\u4e2apartition\u4e0b\u7684tablet\u5728\u5404\u4e2a\u78c1\u76d8\u4e0a\u7684\u6570\u91cf\u5206\u5e03\uff0c\u53ea\u5305\u542btablet\u6570\u91cf\u3002"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},'{\n    msg: "OK",\n    code: 0,\n    data: {\n        host: "***",\n        tablets_distribution: [\n            {\n                partition_id:***,\n                disks:[\n                    {\n                        disk_path:"***",\n                        tablets_num:***,\n                    },\n                    {\n                        disk_path:"***",\n                        tablets_num:***,\n                    },\n\n                    ...\n\n                ]\n            },\n            {\n                partition_id:***,\n                disks:[\n                    {\n                        disk_path:"***",\n                        tablets_num:***,\n                    },\n                    {\n                        disk_path:"***",\n                        tablets_num:***,\n                    },\n\n                    ...\n\n                ]\n            },\n\n            ...\n\n        ]\n    },\n    count: ***\n}\n')),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"curl -X GET http://be_host:webserver_port/api/tablets_distribution?group_by=partition&partition_id=xxx\n")),(0,i.kt)("p",null,"\u8fd4\u56de\u503c\u5c31\u662fBE\u8282\u70b9\u4e0a\u6307\u5b9aid\u7684partition\u4e0b\u7684tablet\u5728\u5404\u4e2a\u78c1\u76d8\u4e0a\u7684\u5206\u5e03\uff0c\u5305\u542btablet\u6570\u91cf\u4ee5\u53ca\u6bcf\u4e00\u4e2atablet\u7684id\u3001schema hash\u548ctablet size\u4fe1\u606f\u3002"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},'{\n    msg: "OK",\n    code: 0,\n    data: {\n        host: "***",\n        tablets_distribution: [\n            {\n                partition_id:***,\n                disks:[\n                    {\n                        disk_path:"***",\n                        tablets_num:***,\n                        tablets:[\n                            {\n                                tablet_id:***,\n                                schema_hash:***,\n                                tablet_size:***\n                            },\n\n                            ...\n\n                        ]\n                    },\n\n                    ...\n\n                ]\n            }\n        ]\n    },\n    count: ***\n}\n')))}u.isMDXComponent=!0}}]);