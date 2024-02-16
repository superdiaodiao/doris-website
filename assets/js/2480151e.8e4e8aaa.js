"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([[71525],{15680:(e,n,t)=>{t.d(n,{xA:()=>s,yg:()=>y});var a=t(96540);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function l(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function o(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?l(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):l(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function i(e,n){if(null==e)return{};var t,a,r=function(e,n){if(null==e)return{};var t,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)t=l[a],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)t=l[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var c=a.createContext({}),p=function(e){var n=a.useContext(c),t=n;return e&&(t="function"==typeof e?e(n):o(o({},n),e)),t},s=function(e){var n=p(e.components);return a.createElement(c.Provider,{value:n},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},m=a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,l=e.originalType,c=e.parentName,s=i(e,["components","mdxType","originalType","parentName"]),u=p(t),m=r,y=u["".concat(c,".").concat(m)]||u[m]||d[m]||l;return t?a.createElement(y,o(o({ref:n},s),{},{components:t})):a.createElement(y,o({ref:n},s))}));function y(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var l=t.length,o=new Array(l);o[0]=m;var i={};for(var c in n)hasOwnProperty.call(n,c)&&(i[c]=n[c]);i.originalType=e,i[u]="string"==typeof e?e:r,o[1]=i;for(var p=2;p<l;p++)o[p]=t[p];return a.createElement.apply(null,o)}return a.createElement.apply(null,t)}m.displayName="MDXCreateElement"},7698:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>c,contentTitle:()=>o,default:()=>d,frontMatter:()=>l,metadata:()=>i,toc:()=>p});var a=t(58168),r=(t(96540),t(15680));const l={title:"Cancel Load Action",language:"en"},o=void 0,i={unversionedId:"admin-manual/http-actions/fe/cancel-load-action",id:"admin-manual/http-actions/fe/cancel-load-action",title:"Cancel Load Action",description:"\x3c!--",source:"@site/docs/admin-manual/http-actions/fe/cancel-load-action.md",sourceDirName:"admin-manual/http-actions/fe",slug:"/admin-manual/http-actions/fe/cancel-load-action",permalink:"/docs/dev/admin-manual/http-actions/fe/cancel-load-action",draft:!1,tags:[],version:"current",frontMatter:{title:"Cancel Load Action",language:"en"},sidebar:"docs",previous:{title:"Bootstrap Action",permalink:"/docs/dev/admin-manual/http-actions/fe/bootstrap-action"},next:{title:"Check Decommission Action",permalink:"/docs/dev/admin-manual/http-actions/fe/check-decommission-action"}},c={},p=[{value:"Request",id:"request",level:2},{value:"Description",id:"description",level:2},{value:"Path parameters",id:"path-parameters",level:2},{value:"Query parameters",id:"query-parameters",level:2},{value:"Request body",id:"request-body",level:2},{value:"Response",id:"response",level:2},{value:"Examples",id:"examples",level:2}],s={toc:p},u="wrapper";function d(e){let{components:n,...t}=e;return(0,r.yg)(u,(0,a.A)({},s,t,{components:n,mdxType:"MDXLayout"}),(0,r.yg)("h1",{id:"cancel-load-action"},"Cancel Load Action"),(0,r.yg)("h2",{id:"request"},"Request"),(0,r.yg)("p",null,(0,r.yg)("inlineCode",{parentName:"p"},"POST /api/<db>/_cancel")),(0,r.yg)("h2",{id:"description"},"Description"),(0,r.yg)("p",null,"Used to cancel the load transaction of the specified label.\nRETURN VALUES\nReturn a JSON format string:\nStatus:\nSuccess: cancel succeed\nOthers: cancel failed\nMessage: Error message if cancel failed"),(0,r.yg)("h2",{id:"path-parameters"},"Path parameters"),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("p",{parentName:"li"},(0,r.yg)("inlineCode",{parentName:"p"},"<db>")),(0,r.yg)("p",{parentName:"li"},"  Specify the database name"))),(0,r.yg)("h2",{id:"query-parameters"},"Query parameters"),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("p",{parentName:"li"},(0,r.yg)("inlineCode",{parentName:"p"},"<label>")),(0,r.yg)("p",{parentName:"li"},"  Specify the load label"))),(0,r.yg)("h2",{id:"request-body"},"Request body"),(0,r.yg)("p",null,"None"),(0,r.yg)("h2",{id:"response"},"Response"),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("p",{parentName:"li"},"Cancel success"),(0,r.yg)("pre",{parentName:"li"},(0,r.yg)("code",{parentName:"pre"},'{\n    "msg": "OK",\n    "code": 0,\n    "data": null,\n    "count": 0\n}\n'))),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("p",{parentName:"li"},"Cancel failed"),(0,r.yg)("pre",{parentName:"li"},(0,r.yg)("code",{parentName:"pre"},'{\n    "msg": "Error msg...",\n    "code": 1,\n    "data": null,\n    "count": 0\n}\n')))),(0,r.yg)("h2",{id:"examples"},"Examples"),(0,r.yg)("ol",null,(0,r.yg)("li",{parentName:"ol"},(0,r.yg)("p",{parentName:"li"},"Cancel the load transaction of the specified label"),(0,r.yg)("pre",{parentName:"li"},(0,r.yg)("code",{parentName:"pre"},'POST /api/example_db/_cancel?label=my_label1\n\nResponse:\n{\n    "msg": "OK",\n    "code": 0,\n    "data": null,\n    "count": 0\n}\n')))))}d.isMDXComponent=!0}}]);