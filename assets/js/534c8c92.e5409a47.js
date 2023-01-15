"use strict";(self.webpackChunkselectdb_portal=self.webpackChunkselectdb_portal||[]).push([[67469],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>f});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=r.createContext({}),c=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},p=function(e){var t=c(e.components);return r.createElement(s.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),u=c(n),m=a,f=u["".concat(s,".").concat(m)]||u[m]||d[m]||o;return n?r.createElement(f,l(l({ref:t},p),{},{components:n})):r.createElement(f,l({ref:t},p))}));function f(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,l=new Array(o);l[0]=m;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i[u]="string"==typeof e?e:a,l[1]=i;for(var c=2;c<o;c++)l[c]=n[c];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},24484:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>l,default:()=>u,frontMatter:()=>o,metadata:()=>i,toc:()=>c});var r=n(87462),a=(n(67294),n(3905));const o={title:"GET LABEL STATE",language:"en"},l=void 0,i={unversionedId:"admin-manual/http-actions/get-load-state",id:"admin-manual/http-actions/get-load-state",title:"GET LABEL STATE",description:"\x3c!--",source:"@site/docs/admin-manual/http-actions/get-load-state.md",sourceDirName:"admin-manual/http-actions",slug:"/admin-manual/http-actions/get-load-state",permalink:"/docs/admin-manual/http-actions/get-load-state",draft:!1,tags:[],version:"current",frontMatter:{title:"GET LABEL STATE",language:"en"},sidebar:"docs",previous:{title:"get_log_file",permalink:"/docs/admin-manual/http-actions/fe-get-log-file"},next:{title:"GET TABLETS ON A PARTICULAR BE",permalink:"/docs/admin-manual/http-actions/get-tablets"}},s={},c=[{value:"description",id:"description",level:2},{value:"example",id:"example",level:2},{value:"keyword",id:"keyword",level:2}],p={toc:c};function u(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"get-label-state"},"GET LABEL STATE"),(0,a.kt)("h2",{id:"description"},"description"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"NAME:\n    get_load_state: get load's state of label\n    \nSYNOPSIS\n    curl -u user:passwd http://host:port/api/{db}/get_load_state?label=xxx\n\nDESCRIPTION\n\n    Check the status of a transaction\n    \nRETURN VALUES\n\n    Return of JSON format string of the status of specified transaction:\n    Label: The specified label.\n    Status: Success or not of this request.\n    Message: Error messages\n    State: \n       UNKNOWN/PREPARE/COMMITTED/VISIBLE/ABORTED\n    \nERRORS\n")),(0,a.kt)("h2",{id:"example"},"example"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},'1. Get status of label "testLabel" on database "testDb"\n\n    curl -u root http://host:port/api/testDb/get_load_state?label=testLabel\n')),(0,a.kt)("h2",{id:"keyword"},"keyword"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"GET, LOAD, STATE\n")))}u.isMDXComponent=!0}}]);