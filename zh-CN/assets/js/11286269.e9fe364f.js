"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([[30780],{15680:(e,t,n)=>{n.d(t,{xA:()=>p,yg:()=>y});var r=n(96540);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var c=r.createContext({}),u=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=u(e.components);return r.createElement(c.Provider,{value:t},e.children)},s="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,c=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),s=u(n),m=o,y=s["".concat(c,".").concat(m)]||s[m]||d[m]||a;return n?r.createElement(y,i(i({ref:t},p),{},{components:n})):r.createElement(y,i({ref:t},p))}));function y(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,i=new Array(a);i[0]=m;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l[s]="string"==typeof e?e:o,i[1]=l;for(var u=2;u<a;u++)i[u]=n[u];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},75943:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>i,default:()=>d,frontMatter:()=>a,metadata:()=>l,toc:()=>u});var r=n(58168),o=(n(96540),n(15680));const a={title:"Logout Action",language:"zh-CN"},i=void 0,l={unversionedId:"admin-manual/http-actions/fe/logout-action",id:"version-1.2/admin-manual/http-actions/fe/logout-action",title:"Logout Action",description:"\x3c!--",source:"@site/i18n/zh-CN/docusaurus-plugin-content-docs/version-1.2/admin-manual/http-actions/fe/logout-action.md",sourceDirName:"admin-manual/http-actions/fe",slug:"/admin-manual/http-actions/fe/logout-action",permalink:"/zh-CN/docs/1.2/admin-manual/http-actions/fe/logout-action",draft:!1,tags:[],version:"1.2",frontMatter:{title:"Logout Action",language:"zh-CN"},sidebar:"docs",previous:{title:"Login Action",permalink:"/zh-CN/docs/1.2/admin-manual/http-actions/fe/login-action"},next:{title:"Query Profile Action",permalink:"/zh-CN/docs/1.2/admin-manual/http-actions/fe/query-profile-action-controller"}},c={},u=[{value:"Request",id:"request",level:2},{value:"Description",id:"description",level:2},{value:"Path parameters",id:"path-parameters",level:2},{value:"Query parameters",id:"query-parameters",level:2},{value:"Request body",id:"request-body",level:2},{value:"Response",id:"response",level:3}],p={toc:u},s="wrapper";function d(e){let{components:t,...n}=e;return(0,o.yg)(s,(0,r.A)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,o.yg)("h1",{id:"logout-action"},"Logout Action"),(0,o.yg)("h2",{id:"request"},"Request"),(0,o.yg)("pre",null,(0,o.yg)("code",{parentName:"pre"},"POST /rest/v1/logout\n")),(0,o.yg)("h2",{id:"description"},"Description"),(0,o.yg)("p",null,"Logout Action \u7528\u4e8e\u9000\u51fa\u5f53\u524d\u767b\u5f55\u3002"),(0,o.yg)("h2",{id:"path-parameters"},"Path parameters"),(0,o.yg)("p",null,"\u65e0"),(0,o.yg)("h2",{id:"query-parameters"},"Query parameters"),(0,o.yg)("p",null,"\u65e0"),(0,o.yg)("h2",{id:"request-body"},"Request body"),(0,o.yg)("p",null,"\u65e0"),(0,o.yg)("h3",{id:"response"},"Response"),(0,o.yg)("pre",null,(0,o.yg)("code",{parentName:"pre"},'{\n    "msg": "OK",\n    "code": 0\n}\n')))}d.isMDXComponent=!0}}]);