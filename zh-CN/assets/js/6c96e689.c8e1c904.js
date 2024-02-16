"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([[88411],{15680:(e,n,r)=>{r.d(n,{xA:()=>c,yg:()=>m});var t=r(96540);function a(e,n,r){return n in e?Object.defineProperty(e,n,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[n]=r,e}function l(e,n){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),r.push.apply(r,t)}return r}function o(e){for(var n=1;n<arguments.length;n++){var r=null!=arguments[n]?arguments[n]:{};n%2?l(Object(r),!0).forEach((function(n){a(e,n,r[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):l(Object(r)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(r,n))}))}return e}function i(e,n){if(null==e)return{};var r,t,a=function(e,n){if(null==e)return{};var r,t,a={},l=Object.keys(e);for(t=0;t<l.length;t++)r=l[t],n.indexOf(r)>=0||(a[r]=e[r]);return a}(e,n);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(t=0;t<l.length;t++)r=l[t],n.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var s=t.createContext({}),p=function(e){var n=t.useContext(s),r=n;return e&&(r="function"==typeof e?e(n):o(o({},n),e)),r},c=function(e){var n=p(e.components);return t.createElement(s.Provider,{value:n},e.children)},y="mdxType",u={inlineCode:"code",wrapper:function(e){var n=e.children;return t.createElement(t.Fragment,{},n)}},d=t.forwardRef((function(e,n){var r=e.components,a=e.mdxType,l=e.originalType,s=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),y=p(r),d=a,m=y["".concat(s,".").concat(d)]||y[d]||u[d]||l;return r?t.createElement(m,o(o({ref:n},c),{},{components:r})):t.createElement(m,o({ref:n},c))}));function m(e,n){var r=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var l=r.length,o=new Array(l);o[0]=d;var i={};for(var s in n)hasOwnProperty.call(n,s)&&(i[s]=n[s]);i.originalType=e,i[y]="string"==typeof e?e:a,o[1]=i;for(var p=2;p<l;p++)o[p]=r[p];return t.createElement.apply(null,o)}return t.createElement.apply(null,r)}d.displayName="MDXCreateElement"},27286:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>s,contentTitle:()=>o,default:()=>u,frontMatter:()=>l,metadata:()=>i,toc:()=>p});var t=r(58168),a=(r(96540),r(15680));const l={title:"ARRAY",language:"zh-CN"},o=void 0,i={unversionedId:"sql-manual/sql-reference/Data-Types/ARRAY",id:"version-2.0/sql-manual/sql-reference/Data-Types/ARRAY",title:"ARRAY",description:"\x3c!--",source:"@site/i18n/zh-CN/docusaurus-plugin-content-docs/version-2.0/sql-manual/sql-reference/Data-Types/ARRAY.md",sourceDirName:"sql-manual/sql-reference/Data-Types",slug:"/sql-manual/sql-reference/Data-Types/ARRAY",permalink:"/zh-CN/docs/sql-manual/sql-reference/Data-Types/ARRAY",draft:!1,tags:[],version:"2.0",frontMatter:{title:"ARRAY",language:"zh-CN"},sidebar:"docs",previous:{title:"QUANTILE_STATE",permalink:"/zh-CN/docs/sql-manual/sql-reference/Data-Types/QUANTILE_STATE"},next:{title:"MAP",permalink:"/zh-CN/docs/sql-manual/sql-reference/Data-Types/MAP"}},s={},p=[{value:"ARRAY",id:"array",level:2},{value:"name",id:"name",level:3},{value:"description",id:"description",level:3},{value:"example",id:"example",level:3},{value:"keywords",id:"keywords",level:3}],c={toc:p},y="wrapper";function u(e){let{components:n,...r}=e;return(0,a.yg)(y,(0,t.A)({},c,r,{components:n,mdxType:"MDXLayout"}),(0,a.yg)("h2",{id:"array"},"ARRAY"),(0,a.yg)("h3",{id:"name"},"name"),(0,a.yg)("version",{since:"1.2.0"},(0,a.yg)("p",null,"ARRAY")),(0,a.yg)("h3",{id:"description"},"description"),(0,a.yg)("p",null,(0,a.yg)("inlineCode",{parentName:"p"},"ARRAY<T>")),(0,a.yg)("p",null,"\u7531T\u7c7b\u578b\u5143\u7d20\u7ec4\u6210\u7684\u6570\u7ec4\uff0c\u4e0d\u80fd\u4f5c\u4e3akey\u5217\u4f7f\u7528\u3002\u76ee\u524d\u652f\u6301\u5728Duplicate\u6a21\u578b\u7684\u8868\u4e2d\u4f7f\u7528\u3002"),(0,a.yg)("version",{since:"2.0"},(0,a.yg)("p",null,"2.0 \u7248\u672c\u4e4b\u540e\u652f\u6301\u5728Unique\u6a21\u578b\u7684\u8868\u4e2d\u975ekey\u5217\u4f7f\u7528\u3002")),(0,a.yg)("p",null,"T\u652f\u6301\u7684\u7c7b\u578b\u6709\uff1a"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre"},"BOOLEAN, TINYINT, SMALLINT, INT, BIGINT, LARGEINT, FLOAT, DOUBLE, DECIMAL, DATE,\nDATEV2, DATETIME, DATETIMEV2, CHAR, VARCHAR, STRING\n")),(0,a.yg)("h3",{id:"example"},"example"),(0,a.yg)("p",null,"\u5efa\u8868\u793a\u4f8b\u5982\u4e0b\uff1a"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre"},'mysql> CREATE TABLE `array_test` (\n  `id` int(11) NULL COMMENT "",\n  `c_array` ARRAY<int(11)> NULL COMMENT ""\n) ENGINE=OLAP\nDUPLICATE KEY(`id`)\nCOMMENT "OLAP"\nDISTRIBUTED BY HASH(`id`) BUCKETS 1\nPROPERTIES (\n"replication_allocation" = "tag.location.default: 1",\n"in_memory" = "false",\n"storage_format" = "V2"\n);\n')),(0,a.yg)("p",null,"\u63d2\u5165\u6570\u636e\u793a\u4f8b\uff1a"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre"},"mysql> INSERT INTO `array_test` VALUES (1, [1,2,3,4,5]);\nmysql> INSERT INTO `array_test` VALUES (2, [6,7,8]), (3, []), (4, null);\n")),(0,a.yg)("p",null,"\u67e5\u8be2\u6570\u636e\u793a\u4f8b\uff1a"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre"},"mysql> SELECT * FROM `array_test`;\n+------+-----------------+\n| id   | c_array         |\n+------+-----------------+\n|    1 | [1, 2, 3, 4, 5] |\n|    2 | [6, 7, 8]       |\n|    3 | []              |\n|    4 | NULL            |\n+------+-----------------+\n")),(0,a.yg)("h3",{id:"keywords"},"keywords"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre"},"ARRAY\n")))}u.isMDXComponent=!0}}]);