"use strict";(self.webpackChunkselectdb_portal=self.webpackChunkselectdb_portal||[]).push([[87893],{3905:(t,e,r)=>{r.d(e,{Zo:()=>p,kt:()=>m});var n=r(67294);function o(t,e,r){return e in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}function a(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,n)}return r}function i(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?a(Object(r),!0).forEach((function(e){o(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}function c(t,e){if(null==t)return{};var r,n,o=function(t,e){if(null==t)return{};var r,n,o={},a=Object.keys(t);for(n=0;n<a.length;n++)r=a[n],e.indexOf(r)>=0||(o[r]=t[r]);return o}(t,e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);for(n=0;n<a.length;n++)r=a[n],e.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(t,r)&&(o[r]=t[r])}return o}var s=n.createContext({}),l=function(t){var e=n.useContext(s),r=e;return t&&(r="function"==typeof t?t(e):i(i({},e),t)),r},p=function(t){var e=l(t.components);return n.createElement(s.Provider,{value:e},t.children)},u="mdxType",d={inlineCode:"code",wrapper:function(t){var e=t.children;return n.createElement(n.Fragment,{},e)}},f=n.forwardRef((function(t,e){var r=t.components,o=t.mdxType,a=t.originalType,s=t.parentName,p=c(t,["components","mdxType","originalType","parentName"]),u=l(r),f=o,m=u["".concat(s,".").concat(f)]||u[f]||d[f]||a;return r?n.createElement(m,i(i({ref:e},p),{},{components:r})):n.createElement(m,i({ref:e},p))}));function m(t,e){var r=arguments,o=e&&e.mdxType;if("string"==typeof t||o){var a=r.length,i=new Array(a);i[0]=f;var c={};for(var s in e)hasOwnProperty.call(e,s)&&(c[s]=e[s]);c.originalType=t,c[u]="string"==typeof t?t:o,i[1]=c;for(var l=2;l<a;l++)i[l]=r[l];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}f.displayName="MDXCreateElement"},45927:(t,e,r)=>{r.r(e),r.d(e,{assets:()=>s,contentTitle:()=>i,default:()=>u,frontMatter:()=>a,metadata:()=>c,toc:()=>l});var n=r(87462),o=(r(67294),r(3905));const a={title:"SHOW DATA",language:"en"},i=void 0,c={unversionedId:"administrator-guide/http-actions/show-data-action",id:"version-0.15/administrator-guide/http-actions/show-data-action",title:"SHOW DATA",description:"\x3c!--",source:"@site/versioned_docs/version-0.15/administrator-guide/http-actions/show-data-action.md",sourceDirName:"administrator-guide/http-actions",slug:"/administrator-guide/http-actions/show-data-action",permalink:"/docs/0.15/administrator-guide/http-actions/show-data-action",draft:!1,tags:[],version:"0.15",frontMatter:{title:"SHOW DATA",language:"en"},sidebar:"docs",previous:{title:"RESTORE TABLET",permalink:"/docs/0.15/administrator-guide/http-actions/restore-tablet"},next:{title:"MIGRATE SINGLE TABLET TO A PARTICULAR DISK",permalink:"/docs/0.15/administrator-guide/http-actions/tablet-migration-action"}},s={},l=[],p={toc:l};function u(t){let{components:e,...r}=t;return(0,o.kt)("wrapper",(0,n.Z)({},p,r,{components:e,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"show-data"},"SHOW DATA"),(0,o.kt)("p",null,"To all size occupied by cluster"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"curl -X GET http://fe_host:fe_http_port/api/show_data\n")),(0,o.kt)("p",null,"The return value is the total size of the cluster"))}u.isMDXComponent=!0}}]);