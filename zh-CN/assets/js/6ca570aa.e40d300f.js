"use strict";(self.webpackChunkselectdb_portal=self.webpackChunkselectdb_portal||[]).push([[73436],{3905:(t,e,n)=>{n.d(e,{Zo:()=>p,kt:()=>b});var r=n(67294);function a(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function i(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function o(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?i(Object(n),!0).forEach((function(e){a(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function l(t,e){if(null==t)return{};var n,r,a=function(t,e){if(null==t)return{};var n,r,a={},i=Object.keys(t);for(r=0;r<i.length;r++)n=i[r],e.indexOf(n)>=0||(a[n]=t[n]);return a}(t,e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);for(r=0;r<i.length;r++)n=i[r],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(a[n]=t[n])}return a}var s=r.createContext({}),c=function(t){var e=r.useContext(s),n=e;return t&&(n="function"==typeof t?t(e):o(o({},e),t)),n},p=function(t){var e=c(t.components);return r.createElement(s.Provider,{value:e},t.children)},u="mdxType",m={inlineCode:"code",wrapper:function(t){var e=t.children;return r.createElement(r.Fragment,{},e)}},d=r.forwardRef((function(t,e){var n=t.components,a=t.mdxType,i=t.originalType,s=t.parentName,p=l(t,["components","mdxType","originalType","parentName"]),u=c(n),d=a,b=u["".concat(s,".").concat(d)]||u[d]||m[d]||i;return n?r.createElement(b,o(o({ref:e},p),{},{components:n})):r.createElement(b,o({ref:e},p))}));function b(t,e){var n=arguments,a=e&&e.mdxType;if("string"==typeof t||a){var i=n.length,o=new Array(i);o[0]=d;var l={};for(var s in e)hasOwnProperty.call(e,s)&&(l[s]=e[s]);l.originalType=t,l[u]="string"==typeof t?t:a,o[1]=l;for(var c=2;c<i;c++)o[c]=n[c];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},49507:(t,e,n)=>{n.r(e),n.d(e,{assets:()=>s,contentTitle:()=>o,default:()=>u,frontMatter:()=>i,metadata:()=>l,toc:()=>c});var r=n(87462),a=(n(67294),n(3905));const i={title:"MIGRATE SINGLE TABLET TO A PARTICULAR DISK",language:"zh-CN"},o=void 0,l={unversionedId:"admin-manual/http-actions/tablet-migration-action",id:"version-dev/admin-manual/http-actions/tablet-migration-action",title:"MIGRATE SINGLE TABLET TO A PARTICULAR DISK",description:"\x3c!--",source:"@site/i18n/zh-CN/docusaurus-plugin-content-docs/version-dev/admin-manual/http-actions/tablet-migration-action.md",sourceDirName:"admin-manual/http-actions",slug:"/admin-manual/http-actions/tablet-migration-action",permalink:"/zh-CN/docs/dev/admin-manual/http-actions/tablet-migration-action",draft:!1,editUrl:"https://github.com/apache/doris/edit/master/docs/zh-CN/docs/admin-manual/http-actions/tablet-migration-action.md",tags:[],version:"dev",frontMatter:{title:"MIGRATE SINGLE TABLET TO A PARTICULAR DISK",language:"zh-CN"},sidebar:"docs",previous:{title:"GET LABEL STATE",permalink:"/zh-CN/docs/dev/admin-manual/http-actions/get-load-state"},next:{title:"CANCEL LABEL",permalink:"/zh-CN/docs/dev/admin-manual/http-actions/cancel-label"}},s={},c=[],p={toc:c};function u(t){let{components:e,...n}=t;return(0,a.kt)("wrapper",(0,r.Z)({},p,n,{components:e,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"migrate-single-tablet-to-a-particular-disk"},"MIGRATE SINGLE TABLET TO A PARTICULAR DISK"),(0,a.kt)("p",null,"\u5728BE\u8282\u70b9\u4e0a\u8fc1\u79fb\u5355\u4e2atablet\u5230\u6307\u5b9a\u78c1\u76d8"),(0,a.kt)("p",null,"\u63d0\u4ea4\u8fc1\u79fb\u4efb\u52a1\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"curl -X GET http://be_host:webserver_port/api/tablet_migration?goal=run&tablet_id=xxx&schema_hash=xxx&disk=xxx\n")),(0,a.kt)("p",null,"\u8fd4\u56de\u503c\u5c31\u662ftablet\u8fc1\u79fb\u4efb\u52a1\u7684\u63d0\u4ea4\u7ed3\u679c\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},'    {\n        status: "Success",\n        msg: "migration task is successfully submitted."\n    }\n')),(0,a.kt)("p",null,"\u6216"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},'    {\n        status: "Fail",\n        msg: "Migration task submission failed"\n    }\n')),(0,a.kt)("p",null,"\u67e5\u8be2\u8fc1\u79fb\u4efb\u52a1\u72b6\u6001\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"curl -X GET http://be_host:webserver_port/api/tablet_migration?goal=status&tablet_id=xxx&schema_hash=xxx\n")),(0,a.kt)("p",null,"\u8fd4\u56de\u503c\u5c31\u662ftablet\u8fc1\u79fb\u4efb\u52a1\u6267\u884c\u72b6\u6001\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},'    {\n        status: "Success",\n        msg: "migration task is running",\n        dest_disk: "xxxxxx"\n    }\n')),(0,a.kt)("p",null,"\u6216"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},'    {\n        status: "Success",\n        msg: "migration task has finished successfully",\n        dest_disk: "xxxxxx"\n    }\n')),(0,a.kt)("p",null,"\u6216"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},'    {\n        status: "Success",\n        msg: "migration task failed.",\n        dest_disk: "xxxxxx"\n    }\n')))}u.isMDXComponent=!0}}]);