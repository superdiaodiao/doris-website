"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([[88665],{15680:(e,t,n)=>{n.d(t,{xA:()=>s,yg:()=>d});var r=n(96540);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=r.createContext({}),p=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},s=function(e){var t=p(e.components);return r.createElement(l.Provider,{value:t},e.children)},u="mdxType",y={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,s=c(e,["components","mdxType","originalType","parentName"]),u=p(n),m=a,d=u["".concat(l,".").concat(m)]||u[m]||y[m]||o;return n?r.createElement(d,i(i({ref:t},s),{},{components:n})):r.createElement(d,i({ref:t},s))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=m;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c[u]="string"==typeof e?e:a,i[1]=c;for(var p=2;p<o;p++)i[p]=n[p];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},42396:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>y,frontMatter:()=>o,metadata:()=>c,toc:()=>p});var r=n(58168),a=(n(96540),n(15680));const o={title:"Check Storage Type Action",language:"zh-CN"},i=void 0,c={unversionedId:"admin-manual/http-actions/fe/check-storage-type-action",id:"version-1.2/admin-manual/http-actions/fe/check-storage-type-action",title:"Check Storage Type Action",description:"\x3c!--",source:"@site/i18n/zh-CN/docusaurus-plugin-content-docs/version-1.2/admin-manual/http-actions/fe/check-storage-type-action.md",sourceDirName:"admin-manual/http-actions/fe",slug:"/admin-manual/http-actions/fe/check-storage-type-action",permalink:"/zh-CN/docs/1.2/admin-manual/http-actions/fe/check-storage-type-action",draft:!1,tags:[],version:"1.2",frontMatter:{title:"Check Storage Type Action",language:"zh-CN"},sidebar:"docs",previous:{title:"Check Decommission Action",permalink:"/zh-CN/docs/1.2/admin-manual/http-actions/fe/check-decommission-action"},next:{title:"Connection Action",permalink:"/zh-CN/docs/1.2/admin-manual/http-actions/fe/connection-action"}},l={},p=[{value:"Request",id:"request",level:2},{value:"Description",id:"description",level:2},{value:"Path parameters",id:"path-parameters",level:2},{value:"Query parameters",id:"query-parameters",level:2},{value:"Request body",id:"request-body",level:2},{value:"Response",id:"response",level:2},{value:"Examples",id:"examples",level:2}],s={toc:p},u="wrapper";function y(e){let{components:t,...n}=e;return(0,a.yg)(u,(0,r.A)({},s,n,{components:t,mdxType:"MDXLayout"}),(0,a.yg)("h1",{id:"check-storage-type-action"},"Check Storage Type Action"),(0,a.yg)("h2",{id:"request"},"Request"),(0,a.yg)("p",null,(0,a.yg)("inlineCode",{parentName:"p"},"GET /api/_check_storagetype")),(0,a.yg)("h2",{id:"description"},"Description"),(0,a.yg)("p",null,"\u7528\u4e8e\u68c0\u67e5\u6307\u5b9a\u6570\u636e\u5e93\u4e0b\u7684\u8868\u7684\u5b58\u50a8\u683c\u5f0f\u5426\u662f\u884c\u5b58\u683c\u5f0f\u3002\uff08\u884c\u5b58\u683c\u5f0f\u5df2\u5e9f\u5f03\uff09"),(0,a.yg)("h2",{id:"path-parameters"},"Path parameters"),(0,a.yg)("p",null,"\u65e0"),(0,a.yg)("h2",{id:"query-parameters"},"Query parameters"),(0,a.yg)("ul",null,(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("p",{parentName:"li"},(0,a.yg)("inlineCode",{parentName:"p"},"db")),(0,a.yg)("p",{parentName:"li"},"  \u6307\u5b9a\u6570\u636e\u5e93"))),(0,a.yg)("h2",{id:"request-body"},"Request body"),(0,a.yg)("p",null,"\u65e0"),(0,a.yg)("h2",{id:"response"},"Response"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre"},'{\n    "msg": "success",\n    "code": 0,\n    "data": {\n        "tbl2": {},\n        "tbl1": {}\n    },\n    "count": 0\n}\n')),(0,a.yg)("p",null,"\u5982\u679c\u8868\u540d\u540e\u6709\u5185\u5bb9\uff0c\u5219\u4f1a\u663e\u793a\u5b58\u50a8\u683c\u5f0f\u4e3a\u884c\u5b58\u7684 base \u6216\u8005 rollup \u8868\u3002"),(0,a.yg)("h2",{id:"examples"},"Examples"),(0,a.yg)("ol",null,(0,a.yg)("li",{parentName:"ol"},(0,a.yg)("p",{parentName:"li"},"\u68c0\u67e5\u6307\u5b9a\u6570\u636e\u5e93\u4e0b\u8868\u7684\u5b58\u50a8\u683c\u5f0f\u662f\u5426\u4e3a\u884c\u5b58"),(0,a.yg)("pre",{parentName:"li"},(0,a.yg)("code",{parentName:"pre"},'GET /api/_check_storagetype\n\nResponse:\n{\n    "msg": "success",\n    "code": 0,\n    "data": {\n        "tbl2": {},\n        "tbl1": {}\n    },\n    "count": 0\n}\n')))))}y.isMDXComponent=!0}}]);