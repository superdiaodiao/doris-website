"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([[35810],{15680:(e,t,n)=>{n.d(t,{xA:()=>u,yg:()=>m});var a=n(96540);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var p=a.createContext({}),s=function(e){var t=a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=s(e.components);return a.createElement(p.Provider,{value:t},e.children)},c="mdxType",g={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},y=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,l=e.originalType,p=e.parentName,u=o(e,["components","mdxType","originalType","parentName"]),c=s(n),y=r,m=c["".concat(p,".").concat(y)]||c[y]||g[y]||l;return n?a.createElement(m,i(i({ref:t},u),{},{components:n})):a.createElement(m,i({ref:t},u))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=n.length,i=new Array(l);i[0]=y;var o={};for(var p in t)hasOwnProperty.call(t,p)&&(o[p]=t[p]);o.originalType=e,o[c]="string"==typeof e?e:r,i[1]=o;for(var s=2;s<l;s++)i[s]=n[s];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}y.displayName="MDXCreateElement"},58808:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>i,default:()=>g,frontMatter:()=>l,metadata:()=>o,toc:()=>s});var a=n(58168),r=(n(96540),n(15680));const l={title:"Get FE log file",language:"zh-CN"},i=void 0,o={unversionedId:"admin-manual/http-actions/fe/get-log-file-action",id:"version-2.0/admin-manual/http-actions/fe/get-log-file-action",title:"Get FE log file",description:"\x3c!--",source:"@site/i18n/zh-CN/docusaurus-plugin-content-docs/version-2.0/admin-manual/http-actions/fe/get-log-file-action.md",sourceDirName:"admin-manual/http-actions/fe",slug:"/admin-manual/http-actions/fe/get-log-file-action",permalink:"/zh-CN/docs/admin-manual/http-actions/fe/get-log-file-action",draft:!1,tags:[],version:"2.0",frontMatter:{title:"Get FE log file",language:"zh-CN"},sidebar:"docs",previous:{title:"Get Load State",permalink:"/zh-CN/docs/admin-manual/http-actions/fe/get-load-state"},next:{title:"Get Small File Action",permalink:"/zh-CN/docs/admin-manual/http-actions/fe/get-small-file"}},p={},s=[{value:"Request",id:"request",level:2},{value:"Description",id:"description",level:2},{value:"Path parameters",id:"path-parameters",level:2},{value:"Query parameters",id:"query-parameters",level:2},{value:"Request body",id:"request-body",level:2},{value:"Response",id:"response",level:2},{value:"Examples",id:"examples",level:2}],u={toc:s},c="wrapper";function g(e){let{components:t,...n}=e;return(0,r.yg)(c,(0,a.A)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,r.yg)("h1",{id:"get-fe-log-file"},"Get FE log file"),(0,r.yg)("h2",{id:"request"},"Request"),(0,r.yg)("p",null,(0,r.yg)("inlineCode",{parentName:"p"},"HEAD /api/get_log_file")),(0,r.yg)("p",null,(0,r.yg)("inlineCode",{parentName:"p"},"GET /api/get_log_file")),(0,r.yg)("h2",{id:"description"},"Description"),(0,r.yg)("p",null,"\u7528\u6237\u53ef\u4ee5\u901a\u8fc7\u8be5 HTTP \u63a5\u53e3\u83b7\u53d6 FE \u7684\u65e5\u5fd7\u6587\u4ef6\u3002"),(0,r.yg)("p",null,"\u5176\u4e2d HEAD \u8bf7\u6c42\u7528\u4e8e\u83b7\u53d6\u6307\u5b9a\u65e5\u5fd7\u7c7b\u578b\u7684\u65e5\u5fd7\u6587\u4ef6\u5217\u8868\u3002GET \u8bf7\u6c42\u7528\u4e8e\u4e0b\u8f7d\u6307\u5b9a\u7684\u65e5\u5fd7\u6587\u4ef6\u3002"),(0,r.yg)("h2",{id:"path-parameters"},"Path parameters"),(0,r.yg)("p",null,"\u65e0"),(0,r.yg)("h2",{id:"query-parameters"},"Query parameters"),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("p",{parentName:"li"},(0,r.yg)("inlineCode",{parentName:"p"},"type")),(0,r.yg)("p",{parentName:"li"},"  \u6307\u5b9a\u65e5\u5fd7\u7c7b\u578b\uff0c\u652f\u6301\u5982\u4e0b\u7c7b\u578b\uff1a"),(0,r.yg)("ul",{parentName:"li"},(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("inlineCode",{parentName:"li"},"fe.audit.log"),"\uff1aFE \u5ba1\u8ba1\u65e5\u5fd7"))),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("p",{parentName:"li"},(0,r.yg)("inlineCode",{parentName:"p"},"file")),(0,r.yg)("p",{parentName:"li"},"  \u6307\u5b9a\u7684\u6587\u4ef6\u540d\u3002"))),(0,r.yg)("h2",{id:"request-body"},"Request body"),(0,r.yg)("p",null,"\u65e0"),(0,r.yg)("h2",{id:"response"},"Response"),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("p",{parentName:"li"},(0,r.yg)("inlineCode",{parentName:"p"},"HEAD")),(0,r.yg)("pre",{parentName:"li"},(0,r.yg)("code",{parentName:"pre"},'HTTP/1.1 200 OK\nfile_infos: {"fe.audit.log":24759,"fe.audit.log.20190528.1":132934}\ncontent-type: text/html\nconnection: keep-alive\n')),(0,r.yg)("p",{parentName:"li"},"  \u8fd4\u56de\u7684 header \u4e2d\u7f57\u5217\u51fa\u4e86\u5f53\u524d\u6240\u6709\u6307\u5b9a\u7c7b\u578b\u7684\u65e5\u5fd7\u6587\u4ef6\uff0c\u4ee5\u53ca\u6bcf\u4e2a\u6587\u4ef6\u7684\u5927\u5c0f\u3002\n")),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("p",{parentName:"li"},(0,r.yg)("inlineCode",{parentName:"p"},"GET")),(0,r.yg)("p",{parentName:"li"},"  \u4ee5\u6587\u672c\u5f62\u5f0f\u4e0b\u8f7d\u6307\u5b9a\u65e5\u5fd7\u6587\u4ef6\n"))),(0,r.yg)("h2",{id:"examples"},"Examples"),(0,r.yg)("ol",null,(0,r.yg)("li",{parentName:"ol"},(0,r.yg)("p",{parentName:"li"},"\u83b7\u53d6\u5bf9\u5e94\u7c7b\u578b\u7684\u65e5\u5fd7\u6587\u4ef6\u5217\u8868"),(0,r.yg)("pre",{parentName:"li"},(0,r.yg)("code",{parentName:"pre"},'HEAD /api/get_log_file?type=fe.audit.log\n\nResponse:\n\nHTTP/1.1 200 OK\nfile_infos: {"fe.audit.log":24759,"fe.audit.log.20190528.1":132934}\ncontent-type: text/html\nconnection: keep-alive\n')),(0,r.yg)("p",{parentName:"li"},"\u5728\u8fd4\u56de\u7684 header \u4e2d\uff0c",(0,r.yg)("inlineCode",{parentName:"p"},"file_infos")," \u5b57\u6bb5\u4ee5 json \u683c\u5f0f\u5c55\u793a\u6587\u4ef6\u5217\u8868\u4ee5\u53ca\u5bf9\u5e94\u6587\u4ef6\u5927\u5c0f\uff08\u5355\u4f4d\u5b57\u8282\uff09")),(0,r.yg)("li",{parentName:"ol"},(0,r.yg)("p",{parentName:"li"},"\u4e0b\u8f7d\u65e5\u5fd7\u6587\u4ef6"),(0,r.yg)("pre",{parentName:"li"},(0,r.yg)("code",{parentName:"pre"},"GET /api/get_log_file?type=fe.audit.log&file=fe.audit.log.20190528.1\n\nResponse:\n\n< HTTP/1.1 200\n< Vary: Origin\n< Vary: Access-Control-Request-Method\n< Vary: Access-Control-Request-Headers\n< Content-Disposition: attachment;fileName=fe.audit.log\n< Content-Type: application/octet-stream;charset=UTF-8\n< Transfer-Encoding: chunked\n\n... File Content ...\n")))))}g.isMDXComponent=!0}}]);