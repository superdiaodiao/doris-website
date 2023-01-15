"use strict";(self.webpackChunkselectdb_portal=self.webpackChunkselectdb_portal||[]).push([[97648],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>f});var r=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=r.createContext({}),p=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},u=function(e){var t=p(e.components);return r.createElement(l.Provider,{value:t},e.children)},s="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,l=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),s=p(n),d=o,f=s["".concat(l,".").concat(d)]||s[d]||m[d]||a;return n?r.createElement(f,c(c({ref:t},u),{},{components:n})):r.createElement(f,c({ref:t},u))}));function f(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,c=new Array(a);c[0]=d;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i[s]="string"==typeof e?e:o,c[1]=i;for(var p=2;p<a;p++)c[p]=n[p];return r.createElement.apply(null,c)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},95137:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>c,default:()=>s,frontMatter:()=>a,metadata:()=>i,toc:()=>p});var r=n(87462),o=(n(67294),n(3905));const a={title:"CONNECTION",language:"en"},c=void 0,i={unversionedId:"admin-manual/http-actions/connection-action",id:"admin-manual/http-actions/connection-action",title:"CONNECTION",description:"\x3c!--",source:"@site/docs/admin-manual/http-actions/connection-action.md",sourceDirName:"admin-manual/http-actions",slug:"/admin-manual/http-actions/connection-action",permalink:"/docs/admin-manual/http-actions/connection-action",draft:!1,tags:[],version:"current",frontMatter:{title:"CONNECTION",language:"en"},sidebar:"docs",previous:{title:"Compaction Action",permalink:"/docs/admin-manual/http-actions/compaction-action"},next:{title:"get_log_file",permalink:"/docs/admin-manual/http-actions/fe-get-log-file"}},l={},p=[],u={toc:p};function s(e){let{components:t,...n}=e;return(0,o.kt)("wrapper",(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"connection"},"CONNECTION"),(0,o.kt)("p",null,"To get current query_id from connection"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"curl -X GET http://fe_host:fe_http_port/api/connection?connection_id=123\n")),(0,o.kt)("p",null,"If connection_id does not exist, return 404 NOT FOUND ERROR"),(0,o.kt)("p",null,"If connection_id exists, return last query_id belongs to connection_id"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},'{\n    "query_id" : 9133b7efa92a44c8-8ed4b44772ec2a0c\n}\n')))}s.isMDXComponent=!0}}]);