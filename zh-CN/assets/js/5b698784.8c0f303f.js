"use strict";(self.webpackChunkselectdb_portal=self.webpackChunkselectdb_portal||[]).push([[48391],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>f});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var c=r.createContext({}),s=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=s(e.components);return r.createElement(c.Provider,{value:t},e.children)},u="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},E=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,c=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),u=s(n),E=a,f=u["".concat(c,".").concat(E)]||u[E]||m[E]||o;return n?r.createElement(f,i(i({ref:t},p),{},{components:n})):r.createElement(f,i({ref:t},p))}));function f(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=E;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l[u]="string"==typeof e?e:a,i[1]=l;for(var s=2;s<o;s++)i[s]=n[s];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}E.displayName="MDXCreateElement"},50592:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>i,default:()=>u,frontMatter:()=>o,metadata:()=>l,toc:()=>s});var r=n(87462),a=(n(67294),n(3905));const o={title:"CREATE VIEW",language:"zh-CN"},i=void 0,l={unversionedId:"sql-reference/sql-statements/Data-Definition/CREATE-VIEW",id:"version-0.15/sql-reference/sql-statements/Data-Definition/CREATE-VIEW",title:"CREATE VIEW",description:"\x3c!--",source:"@site/i18n/zh-CN/docusaurus-plugin-content-docs/version-0.15/sql-reference/sql-statements/Data-Definition/CREATE-VIEW.md",sourceDirName:"sql-reference/sql-statements/Data-Definition",slug:"/sql-reference/sql-statements/Data-Definition/CREATE-VIEW",permalink:"/zh-CN/docs/0.15/sql-reference/sql-statements/Data-Definition/CREATE-VIEW",draft:!1,tags:[],version:"0.15",frontMatter:{title:"CREATE VIEW",language:"zh-CN"},sidebar:"docs",previous:{title:"CREATE TABLE",permalink:"/zh-CN/docs/0.15/sql-reference/sql-statements/Data-Definition/CREATE-TABLE"},next:{title:"Colocate Join",permalink:"/zh-CN/docs/0.15/sql-reference/sql-statements/Data-Definition/Colocate-Join"}},c={},s=[{value:"description",id:"description",level:2},{value:"example",id:"example",level:2},{value:"keyword",id:"keyword",level:2}],p={toc:s};function u(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"create-view"},"CREATE VIEW"),(0,a.kt)("h2",{id:"description"},"description"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},'\u8be5\u8bed\u53e5\u7528\u4e8e\u521b\u5efa\u4e00\u4e2a\u903b\u8f91\u89c6\u56fe\n\u8bed\u6cd5\uff1a\n    CREATE VIEW [IF NOT EXISTS]\n    [db_name.]view_name\n    (column1[ COMMENT "col comment"][, column2, ...])\n    AS query_stmt\n    \n\u8bf4\u660e\uff1a\n    1. \u89c6\u56fe\u4e3a\u903b\u8f91\u89c6\u56fe\uff0c\u6ca1\u6709\u7269\u7406\u5b58\u50a8\u3002\u6240\u6709\u5728\u89c6\u56fe\u4e0a\u7684\u67e5\u8be2\u76f8\u5f53\u4e8e\u5728\u89c6\u56fe\u5bf9\u5e94\u7684\u5b50\u67e5\u8be2\u4e0a\u8fdb\u884c\u3002\n    2. query_stmt \u4e3a\u4efb\u610f\u652f\u6301\u7684 SQL\n    \n')),(0,a.kt)("h2",{id:"example"},"example"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},'1. \u5728 example_db \u4e0a\u521b\u5efa\u89c6\u56fe example_view\n\n    CREATE VIEW example_db.example_view (k1, k2, k3, v1)\n    AS\n    SELECT c1 as k1, k2, k3, SUM(v1) FROM example_table\n    WHERE k1 = 20160112 GROUP BY k1,k2,k3;\n    \n2. \u521b\u5efa\u4e00\u4e2a\u5305\u542b comment \u7684 view\n\n    CREATE VIEW example_db.example_view\n    (\n        k1 COMMENT "first key",\n        k2 COMMENT "second key",\n        k3 COMMENT "third key",\n        v1 COMMENT "first value"\n    )\n    COMMENT "my first view"\n    AS\n    SELECT c1 as k1, k2, k3, SUM(v1) FROM example_table\n    WHERE k1 = 20160112 GROUP BY k1,k2,k3;\n')),(0,a.kt)("h2",{id:"keyword"},"keyword"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"CREATE,VIEW\n")))}u.isMDXComponent=!0}}]);