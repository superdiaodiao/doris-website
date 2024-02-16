"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([[77277],{15680:(e,r,n)=>{n.d(r,{xA:()=>y,yg:()=>v});var t=n(96540);function a(e,r,n){return r in e?Object.defineProperty(e,r,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[r]=n,e}function o(e,r){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);r&&(t=t.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),n.push.apply(n,t)}return n}function l(e){for(var r=1;r<arguments.length;r++){var n=null!=arguments[r]?arguments[r]:{};r%2?o(Object(n),!0).forEach((function(r){a(e,r,n[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))}))}return e}function i(e,r){if(null==e)return{};var n,t,a=function(e,r){if(null==e)return{};var n,t,a={},o=Object.keys(e);for(t=0;t<o.length;t++)n=o[t],r.indexOf(n)>=0||(a[n]=e[n]);return a}(e,r);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(t=0;t<o.length;t++)n=o[t],r.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=t.createContext({}),c=function(e){var r=t.useContext(s),n=r;return e&&(n="function"==typeof e?e(r):l(l({},r),e)),n},y=function(e){var r=c(e.components);return t.createElement(s.Provider,{value:r},e.children)},u="mdxType",p={inlineCode:"code",wrapper:function(e){var r=e.children;return t.createElement(t.Fragment,{},r)}},m=t.forwardRef((function(e,r){var n=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,y=i(e,["components","mdxType","originalType","parentName"]),u=c(n),m=a,v=u["".concat(s,".").concat(m)]||u[m]||p[m]||o;return n?t.createElement(v,l(l({ref:r},y),{},{components:n})):t.createElement(v,l({ref:r},y))}));function v(e,r){var n=arguments,a=r&&r.mdxType;if("string"==typeof e||a){var o=n.length,l=new Array(o);l[0]=m;var i={};for(var s in r)hasOwnProperty.call(r,s)&&(i[s]=r[s]);i.originalType=e,i[u]="string"==typeof e?e:a,l[1]=i;for(var c=2;c<o;c++)l[c]=n[c];return t.createElement.apply(null,l)}return t.createElement.apply(null,n)}m.displayName="MDXCreateElement"},83002:(e,r,n)=>{n.r(r),n.d(r,{assets:()=>s,contentTitle:()=>l,default:()=>p,frontMatter:()=>o,metadata:()=>i,toc:()=>c});var t=n(58168),a=(n(96540),n(15680));const o={title:"ARRAY_REMOVE",language:"zh-CN"},l=void 0,i={unversionedId:"sql-manual/sql-functions/array-functions/array-remove",id:"sql-manual/sql-functions/array-functions/array-remove",title:"ARRAY_REMOVE",description:"\x3c!--",source:"@site/i18n/zh-CN/docusaurus-plugin-content-docs/current/sql-manual/sql-functions/array-functions/array-remove.md",sourceDirName:"sql-manual/sql-functions/array-functions",slug:"/sql-manual/sql-functions/array-functions/array-remove",permalink:"/zh-CN/docs/dev/sql-manual/sql-functions/array-functions/array-remove",draft:!1,tags:[],version:"current",frontMatter:{title:"ARRAY_REMOVE",language:"zh-CN"},sidebar:"docs",previous:{title:"ARRAY_SIZE",permalink:"/zh-CN/docs/dev/sql-manual/sql-functions/array-functions/array-size"},next:{title:"ARRAY_SLICE",permalink:"/zh-CN/docs/dev/sql-manual/sql-functions/array-functions/array-slice"}},s={},c=[{value:"array_remove",id:"array_remove",level:2},{value:"description",id:"description",level:3},{value:"Syntax",id:"syntax",level:4},{value:"notice",id:"notice",level:3},{value:"example",id:"example",level:3},{value:"keywords",id:"keywords",level:3}],y={toc:c},u="wrapper";function p(e){let{components:r,...n}=e;return(0,a.yg)(u,(0,t.A)({},y,n,{components:r,mdxType:"MDXLayout"}),(0,a.yg)("h2",{id:"array_remove"},"array_remove"),(0,a.yg)("version",{since:"1.2.0"},(0,a.yg)("p",null,"array_remove")),(0,a.yg)("h3",{id:"description"},"description"),(0,a.yg)("h4",{id:"syntax"},"Syntax"),(0,a.yg)("p",null,(0,a.yg)("inlineCode",{parentName:"p"},"ARRAY<T> array_remove(ARRAY<T> arr, T val)")),(0,a.yg)("p",null,"\u8fd4\u56de\u79fb\u9664\u6240\u6709\u7684\u6307\u5b9a\u5143\u7d20\u540e\u7684\u6570\u7ec4\uff0c\u5982\u679c\u8f93\u5165\u53c2\u6570\u4e3aNULL\uff0c\u5219\u8fd4\u56deNULL"),(0,a.yg)("h3",{id:"notice"},"notice"),(0,a.yg)("p",null,(0,a.yg)("inlineCode",{parentName:"p"},"\u4ec5\u652f\u6301\u5411\u91cf\u5316\u5f15\u64ce\u4e2d\u4f7f\u7528")),(0,a.yg)("h3",{id:"example"},"example"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre"},"mysql> set enable_vectorized_engine=true;\n\nmysql> select array_remove(['test', NULL, 'value'], 'value');\n+-----------------------------------------------------+\n| array_remove(ARRAY('test', NULL, 'value'), 'value') |\n+-----------------------------------------------------+\n| [test, NULL]                                        |\n+-----------------------------------------------------+\n\nmysql> select k1, k2, array_remove(k2, 1) from array_type_table_1;\n+------+--------------------+-----------------------+\n| k1   | k2                 | array_remove(`k2`, 1) |\n+------+--------------------+-----------------------+\n|    1 | [1, 2, 3]          | [2, 3]                |\n|    2 | [1, 3]             | [3]                   |\n|    3 | NULL               | NULL                  |\n|    4 | [1, 3]             | [3]                   |\n|    5 | [NULL, 1, NULL, 2] | [NULL, NULL, 2]       |\n+------+--------------------+-----------------------+\n\nmysql> select k1, k2, array_remove(k2, k1) from array_type_table_1;\n+------+--------------------+--------------------------+\n| k1   | k2                 | array_remove(`k2`, `k1`) |\n+------+--------------------+--------------------------+\n|    1 | [1, 2, 3]          | [2, 3]                   |\n|    2 | [1, 3]             | [1, 3]                   |\n|    3 | NULL               | NULL                     |\n|    4 | [1, 3]             | [1, 3]                   |\n|    5 | [NULL, 1, NULL, 2] | [NULL, 1, NULL, 2]       |\n+------+--------------------+--------------------------+\n\nmysql> select k1, k2, array_remove(k2, date('2022-10-10')) from array_type_table_date;\n+------+--------------------------+-------------------------------------------------+\n| k1   | k2                       | array_remove(`k2`, date('2022-10-10 00:00:00')) |\n+------+--------------------------+-------------------------------------------------+\n|    1 | [2021-10-10, 2022-10-10] | [2021-10-10]                                    |\n|    2 | [NULL, 2022-05-14]       | [NULL, 2022-05-14]                              |\n+------+--------------------------+-------------------------------------------------+\n\nmysql> select k1, k2, array_remove(k2, k1) from array_type_table_nullable;\n+------+-----------+--------------------------+\n| k1   | k2        | array_remove(`k2`, `k1`) |\n+------+-----------+--------------------------+\n| NULL | [1, 2, 3] | NULL                     |\n|    1 | NULL      | NULL                     |\n| NULL | [NULL, 1] | NULL                     |\n|    1 | [NULL, 1] | [NULL]                   |\n+------+-----------+--------------------------+\n\n")),(0,a.yg)("h3",{id:"keywords"},"keywords"),(0,a.yg)("p",null,"ARRAY,REMOVE,ARRAY_REMOVE"))}p.isMDXComponent=!0}}]);