"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([[22402],{15680:(e,t,n)=>{n.d(t,{xA:()=>u,yg:()=>O});var r=n(96540);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=r.createContext({}),c=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},u=function(e){var t=c(e.components);return r.createElement(l.Provider,{value:t},e.children)},p="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),p=c(n),m=a,O=p["".concat(l,".").concat(m)]||p[m]||d[m]||o;return n?r.createElement(O,s(s({ref:t},u),{},{components:n})):r.createElement(O,s({ref:t},u))}));function O(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,s=new Array(o);s[0]=m;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i[p]="string"==typeof e?e:a,s[1]=i;for(var c=2;c<o;c++)s[c]=n[c];return r.createElement.apply(null,s)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},9550:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>s,default:()=>d,frontMatter:()=>o,metadata:()=>i,toc:()=>c});var r=n(58168),a=(n(96540),n(15680));const o={title:"SHOW TABLET STORAGE FORMAT",language:"zh-CN"},s=void 0,i={unversionedId:"sql-manual/sql-reference/Database-Administration-Statements/SHOW-TABLET-STORAGE-FORMAT",id:"sql-manual/sql-reference/Database-Administration-Statements/SHOW-TABLET-STORAGE-FORMAT",title:"SHOW TABLET STORAGE FORMAT",description:"\x3c!--",source:"@site/i18n/zh-CN/docusaurus-plugin-content-docs/current/sql-manual/sql-reference/Database-Administration-Statements/SHOW-TABLET-STORAGE-FORMAT.md",sourceDirName:"sql-manual/sql-reference/Database-Administration-Statements",slug:"/sql-manual/sql-reference/Database-Administration-Statements/SHOW-TABLET-STORAGE-FORMAT",permalink:"/zh-CN/docs/dev/sql-manual/sql-reference/Database-Administration-Statements/SHOW-TABLET-STORAGE-FORMAT",draft:!1,tags:[],version:"current",frontMatter:{title:"SHOW TABLET STORAGE FORMAT",language:"zh-CN"},sidebar:"docs",previous:{title:"ADMIN-COPY-TABLET",permalink:"/zh-CN/docs/dev/sql-manual/sql-reference/Database-Administration-Statements/ADMIN-COPY-TABLET"},next:{title:"ADMIN-CLEAN-TRASH",permalink:"/zh-CN/docs/dev/sql-manual/sql-reference/Database-Administration-Statements/ADMIN-CLEAN-TRASH"}},l={},c=[{value:"SHOW TABLET STORAGE FORMAT",id:"show-tablet-storage-format",level:2},{value:"description",id:"description",level:3},{value:"example",id:"example",level:3},{value:"keywords",id:"keywords",level:3}],u={toc:c},p="wrapper";function d(e){let{components:t,...n}=e;return(0,a.yg)(p,(0,r.A)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,a.yg)("h2",{id:"show-tablet-storage-format"},"SHOW TABLET STORAGE FORMAT"),(0,a.yg)("h3",{id:"description"},"description"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre"},"\u8be5\u8bed\u53e5\u7528\u4e8e\u663e\u793aBackend\u4e0a\u7684\u5b58\u50a8\u683c\u5f0f\u4fe1\u606f\uff08\u4ec5\u7ba1\u7406\u5458\u4f7f\u7528\uff09\n\u8bed\u6cd5\uff1a\n    SHOW TABLET STORAGE FORMAT [VERBOSE]\n")),(0,a.yg)("h3",{id:"example"},"example"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre"},"```\nMySQL [(none)]> show tablet storage format;\n+-----------+---------+---------+\n| BackendId | V1Count | V2Count |\n+-----------+---------+---------+\n| 10002     | 0       | 2867    |\n+-----------+---------+---------+\n1 row in set (0.003 sec)\n\nMySQL [test_query_qa]> show tablet storage format verbose;\n+-----------+----------+---------------+\n| BackendId | TabletId | StorageFormat |\n+-----------+----------+---------------+\n| 10002     | 39227    | V2            |\n| 10002     | 39221    | V2            |\n| 10002     | 39215    | V2            |\n| 10002     | 39199    | V2            |\n+-----------+----------+---------------+\n4 rows in set (0.034 sec)\n```\n")),(0,a.yg)("h3",{id:"keywords"},"keywords"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre"},"SHOW, TABLET, STORAGE, FORMAT\n")))}d.isMDXComponent=!0}}]);