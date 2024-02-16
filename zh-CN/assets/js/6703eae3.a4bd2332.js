"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([[71915],{15680:(e,t,n)=>{n.d(t,{xA:()=>c,yg:()=>y});var a=n(96540);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var p=a.createContext({}),s=function(e){var t=a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=s(e.components);return a.createElement(p.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,p=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),u=s(n),m=r,y=u["".concat(p,".").concat(m)]||u[m]||d[m]||o;return n?a.createElement(y,i(i({ref:t},c),{},{components:n})):a.createElement(y,i({ref:t},c))}));function y(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=m;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l[u]="string"==typeof e?e:r,i[1]=l;for(var s=2;s<o;s++)i[s]=n[s];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},83864:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>i,default:()=>d,frontMatter:()=>o,metadata:()=>l,toc:()=>s});var a=n(58168),r=(n(96540),n(15680));const o={title:"Show Data Action",language:"zh-CN"},i=void 0,l={unversionedId:"admin-manual/http-actions/fe/show-data-action",id:"admin-manual/http-actions/fe/show-data-action",title:"Show Data Action",description:"\x3c!--",source:"@site/i18n/zh-CN/docusaurus-plugin-content-docs/current/admin-manual/http-actions/fe/show-data-action.md",sourceDirName:"admin-manual/http-actions/fe",slug:"/admin-manual/http-actions/fe/show-data-action",permalink:"/zh-CN/docs/dev/admin-manual/http-actions/fe/show-data-action",draft:!1,tags:[],version:"current",frontMatter:{title:"Show Data Action",language:"zh-CN"},sidebar:"docs",previous:{title:"Set Config Action",permalink:"/zh-CN/docs/dev/admin-manual/http-actions/fe/set-config-action"},next:{title:"Show Meta Info Action",permalink:"/zh-CN/docs/dev/admin-manual/http-actions/fe/show-meta-info-action"}},p={},s=[{value:"Request",id:"request",level:2},{value:"Description",id:"description",level:2},{value:"Path parameters",id:"path-parameters",level:2},{value:"Query parameters",id:"query-parameters",level:2},{value:"Request body",id:"request-body",level:2},{value:"Response",id:"response",level:2},{value:"Examples",id:"examples",level:2}],c={toc:s},u="wrapper";function d(e){let{components:t,...n}=e;return(0,r.yg)(u,(0,a.A)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,r.yg)("h1",{id:"show-data-action"},"Show Data Action"),(0,r.yg)("h2",{id:"request"},"Request"),(0,r.yg)("p",null,(0,r.yg)("inlineCode",{parentName:"p"},"GET /api/show_data")),(0,r.yg)("h2",{id:"description"},"Description"),(0,r.yg)("p",null,"\u7528\u4e8e\u83b7\u53d6\u96c6\u7fa4\u7684\u603b\u6570\u636e\u91cf\uff0c\u6216\u8005\u6307\u5b9a\u6570\u636e\u5e93\u7684\u6570\u636e\u91cf\u3002\u5355\u4f4d\u5b57\u8282\u3002"),(0,r.yg)("h2",{id:"path-parameters"},"Path parameters"),(0,r.yg)("p",null,"\u65e0"),(0,r.yg)("h2",{id:"query-parameters"},"Query parameters"),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("p",{parentName:"li"},(0,r.yg)("inlineCode",{parentName:"p"},"db")),(0,r.yg)("p",{parentName:"li"},"  \u53ef\u9009\u3002\u5982\u679c\u6307\u5b9a\uff0c\u5219\u83b7\u53d6\u6307\u5b9a\u6570\u636e\u5e93\u7684\u6570\u636e\u91cf\u3002"))),(0,r.yg)("h2",{id:"request-body"},"Request body"),(0,r.yg)("p",null,"\u65e0"),(0,r.yg)("h2",{id:"response"},"Response"),(0,r.yg)("ol",null,(0,r.yg)("li",{parentName:"ol"},(0,r.yg)("p",{parentName:"li"},"\u6307\u5b9a\u6570\u636e\u5e93\u7684\u6570\u636e\u91cf\u3002"),(0,r.yg)("pre",{parentName:"li"},(0,r.yg)("code",{parentName:"pre"},'{\n    "msg": "success",\n    "code": 0,\n    "data": {\n        "default_cluster:db1": 381\n    },\n    "count": 0\n}\n'))),(0,r.yg)("li",{parentName:"ol"},(0,r.yg)("p",{parentName:"li"},"\u603b\u6570\u636e\u91cf"),(0,r.yg)("pre",{parentName:"li"},(0,r.yg)("code",{parentName:"pre"},'{\n    "msg": "success",\n    "code": 0,\n    "data": {\n        "__total_size": 381\n    },\n    "count": 0\n}\n')))),(0,r.yg)("h2",{id:"examples"},"Examples"),(0,r.yg)("ol",null,(0,r.yg)("li",{parentName:"ol"},(0,r.yg)("p",{parentName:"li"},"\u83b7\u53d6\u6307\u5b9a\u6570\u636e\u5e93\u7684\u6570\u636e\u91cf"),(0,r.yg)("pre",{parentName:"li"},(0,r.yg)("code",{parentName:"pre"},'GET /api/show_data?db=db1\n\nResponse:\n{\n    "msg": "success",\n    "code": 0,\n    "data": {\n        "default_cluster:db1": 381\n    },\n    "count": 0\n}\n'))),(0,r.yg)("li",{parentName:"ol"},(0,r.yg)("p",{parentName:"li"},"\u83b7\u53d6\u96c6\u7fa4\u603b\u6570\u636e\u91cf"),(0,r.yg)("pre",{parentName:"li"},(0,r.yg)("code",{parentName:"pre"},'GET /api/show_data\n    \nResponse:\n{\n    "msg": "success",\n    "code": 0,\n    "data": {\n        "__total_size": 381\n    },\n    "count": 0\n}\n')))))}d.isMDXComponent=!0}}]);