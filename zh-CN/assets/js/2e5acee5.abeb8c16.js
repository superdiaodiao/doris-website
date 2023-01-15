"use strict";(self.webpackChunkselectdb_portal=self.webpackChunkselectdb_portal||[]).push([[89839],{3905:(e,r,n)=>{n.d(r,{Zo:()=>c,kt:()=>d});var t=n(67294);function a(e,r,n){return r in e?Object.defineProperty(e,r,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[r]=n,e}function s(e,r){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);r&&(t=t.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),n.push.apply(n,t)}return n}function o(e){for(var r=1;r<arguments.length;r++){var n=null!=arguments[r]?arguments[r]:{};r%2?s(Object(n),!0).forEach((function(r){a(e,r,n[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):s(Object(n)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))}))}return e}function l(e,r){if(null==e)return{};var n,t,a=function(e,r){if(null==e)return{};var n,t,a={},s=Object.keys(e);for(t=0;t<s.length;t++)n=s[t],r.indexOf(n)>=0||(a[n]=e[n]);return a}(e,r);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(t=0;t<s.length;t++)n=s[t],r.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var i=t.createContext({}),u=function(e){var r=t.useContext(i),n=r;return e&&(n="function"==typeof e?e(r):o(o({},r),e)),n},c=function(e){var r=u(e.components);return t.createElement(i.Provider,{value:r},e.children)},p="mdxType",y={inlineCode:"code",wrapper:function(e){var r=e.children;return t.createElement(t.Fragment,{},r)}},m=t.forwardRef((function(e,r){var n=e.components,a=e.mdxType,s=e.originalType,i=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),p=u(n),m=a,d=p["".concat(i,".").concat(m)]||p[m]||y[m]||s;return n?t.createElement(d,o(o({ref:r},c),{},{components:n})):t.createElement(d,o({ref:r},c))}));function d(e,r){var n=arguments,a=r&&r.mdxType;if("string"==typeof e||a){var s=n.length,o=new Array(s);o[0]=m;var l={};for(var i in r)hasOwnProperty.call(r,i)&&(l[i]=r[i]);l.originalType=e,l[p]="string"==typeof e?e:a,o[1]=l;for(var u=2;u<s;u++)o[u]=n[u];return t.createElement.apply(null,o)}return t.createElement.apply(null,n)}m.displayName="MDXCreateElement"},36524:(e,r,n)=>{n.r(r),n.d(r,{assets:()=>i,contentTitle:()=>o,default:()=>p,frontMatter:()=>s,metadata:()=>l,toc:()=>u});var t=n(87462),a=(n(67294),n(3905));const s={title:"array_sum",language:"zh-CN"},o=void 0,l={unversionedId:"sql-manual/sql-functions/array-functions/array_sum",id:"version-dev/sql-manual/sql-functions/array-functions/array_sum",title:"array_sum",description:"\x3c!--",source:"@site/i18n/zh-CN/docusaurus-plugin-content-docs/version-dev/sql-manual/sql-functions/array-functions/array_sum.md",sourceDirName:"sql-manual/sql-functions/array-functions",slug:"/sql-manual/sql-functions/array-functions/array_sum",permalink:"/zh-CN/docs/dev/sql-manual/sql-functions/array-functions/array_sum",draft:!1,editUrl:"https://github.com/apache/doris/edit/master/docs/zh-CN/docs/sql-manual/sql-functions/array-functions/array_sum.md",tags:[],version:"dev",frontMatter:{title:"array_sum",language:"zh-CN"},sidebar:"docs",previous:{title:"array_avg",permalink:"/zh-CN/docs/dev/sql-manual/sql-functions/array-functions/array_avg"},next:{title:"array_size",permalink:"/zh-CN/docs/dev/sql-manual/sql-functions/array-functions/array_size"}},i={},u=[{value:"array_sum",id:"array_sum",level:2},{value:"description",id:"description",level:3},{value:"example",id:"example",level:3},{value:"keywords",id:"keywords",level:3}],c={toc:u};function p(e){let{components:r,...n}=e;return(0,a.kt)("wrapper",(0,t.Z)({},c,n,{components:r,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"array_sum"},"array_sum"),(0,a.kt)("version",{since:"1.2.0"},(0,a.kt)("p",null,"array_sum")),(0,a.kt)("h3",{id:"description"},"description"),(0,a.kt)("p",null,"\u8fd4\u56de\u6570\u7ec4\u4e2d\u6240\u6709\u5143\u7d20\u4e4b\u548c\uff0c\u6570\u7ec4\u4e2d\u7684",(0,a.kt)("inlineCode",{parentName:"p"},"NULL"),"\u503c\u4f1a\u88ab\u8df3\u8fc7\u3002\u7a7a\u6570\u7ec4\u4ee5\u53ca\u5143\u7d20\u5168\u4e3a",(0,a.kt)("inlineCode",{parentName:"p"},"NULL"),"\u503c\u7684\u6570\u7ec4\uff0c\u7ed3\u679c\u8fd4\u56de",(0,a.kt)("inlineCode",{parentName:"p"},"NULL"),"\u503c\u3002"),(0,a.kt)("h3",{id:"example"},"example"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shell"},"mysql> create table array_type_table(k1 INT, k2 Array<int>) duplicate key (k1)\n    -> distributed by hash(k1) buckets 1 properties('replication_num' = '1');\nmysql> insert into array_type_table values (0, []), (1, [NULL]), (2, [1, 2, 3]), (3, [1, NULL, 3]);\nmysql> set enable_vectorized_engine = true;    # enable vectorized engine\nmysql> select k2, array_sum(k2) from array_type_table;\n+--------------+-----------------+\n| k2           | array_sum(`k2`) |\n+--------------+-----------------+\n| []           |            NULL |\n| [NULL]       |            NULL |\n| [1, 2, 3]    |               6 |\n| [1, NULL, 3] |               4 |\n+--------------+-----------------+\n4 rows in set (0.01 sec)\n\n")),(0,a.kt)("h3",{id:"keywords"},"keywords"),(0,a.kt)("p",null,"ARRAY,SUM,ARRAY_SUM"))}p.isMDXComponent=!0}}]);