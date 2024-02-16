"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([[90133],{15680:(e,t,n)=>{n.d(t,{xA:()=>u,yg:()=>y});var a=n(96540);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var c=a.createContext({}),p=function(e){var t=a.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},u=function(e){var t=p(e.components);return a.createElement(c.Provider,{value:t},e.children)},s="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,c=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),s=p(n),m=r,y=s["".concat(c,".").concat(m)]||s[m]||d[m]||i;return n?a.createElement(y,o(o({ref:t},u),{},{components:n})):a.createElement(y,o({ref:t},u))}));function y(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,o=new Array(i);o[0]=m;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l[s]="string"==typeof e?e:r,o[1]=l;for(var p=2;p<i;p++)o[p]=n[p];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},92978:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>o,default:()=>d,frontMatter:()=>i,metadata:()=>l,toc:()=>p});var a=n(58168),r=(n(96540),n(15680));const i={title:"Data Recovery",language:"en"},o=void 0,l={unversionedId:"admin-manual/data-admin/data-recovery",id:"version-2.0/admin-manual/data-admin/data-recovery",title:"Data Recovery",description:"\x3c!--",source:"@site/versioned_docs/version-2.0/admin-manual/data-admin/data-recovery.md",sourceDirName:"admin-manual/data-admin",slug:"/admin-manual/data-admin/data-recovery",permalink:"/docs/admin-manual/data-admin/data-recovery",draft:!1,tags:[],version:"2.0",frontMatter:{title:"Data Recovery",language:"en"},sidebar:"docs",previous:{title:"Data Restore",permalink:"/docs/admin-manual/data-admin/restore"},next:{title:"Data Recover",permalink:"/docs/admin-manual/data-admin/delete-recover"}},c={},p=[{value:"Brief principle explanation",id:"brief-principle-explanation",level:2},{value:"Instructions for use",id:"instructions-for-use",level:2},{value:"Example of use",id:"example-of-use",level:2}],u={toc:p},s="wrapper";function d(e){let{components:t,...n}=e;return(0,r.yg)(s,(0,a.A)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,r.yg)("h1",{id:"data-recovery"},"Data Recovery"),(0,r.yg)("p",null,"For the Unique Key Merge on Write table, there are bugs in some Doris versions, which may cause errors when the system calculates the delete bitmap, resulting in duplicate primary keys. At this time, the full compaction function can be used to repair the data. This function is invalid for non-Unique Key Merge on Write tables."),(0,r.yg)("p",null,"This feature requires Doris version 2.0+."),(0,r.yg)("p",null,"To use this function, it is necessary to stop the import as much as possible, otherwise problems such as import timeout may occur."),(0,r.yg)("h2",{id:"brief-principle-explanation"},"Brief principle explanation"),(0,r.yg)("p",null,"After the full compaction is executed, the delete bitmap will be recalculated, and the wrong delete bitmap data will be deleted to complete the data restoration."),(0,r.yg)("h2",{id:"instructions-for-use"},"Instructions for use"),(0,r.yg)("p",null,(0,r.yg)("inlineCode",{parentName:"p"},"POST /api/compaction/run?tablet_id={int}&compact_type=full")),(0,r.yg)("p",null,"or"),(0,r.yg)("p",null,(0,r.yg)("inlineCode",{parentName:"p"},"POST /api/compaction/run?table_id={int}&compact_type=full")),(0,r.yg)("p",null,"Note that only one tablet_id and table_id can be specified, and cannot be specified at the same time. After specifying table_id, full_compaction will be automatically executed for all tablets under this table."),(0,r.yg)("h2",{id:"example-of-use"},"Example of use"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre"},'curl -X POST "http://127.0.0.1:8040/api/compaction/run?tablet_id=10015&compact_type=full"\ncurl -X POST "http://127.0.0.1:8040/api/compaction/run?table_id=10104&compact_type=full"\n')))}d.isMDXComponent=!0}}]);