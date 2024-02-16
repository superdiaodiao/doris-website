"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([[42596],{15680:(e,r,a)=>{a.d(r,{xA:()=>c,yg:()=>x});var n=a(96540);function t(e,r,a){return r in e?Object.defineProperty(e,r,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[r]=a,e}function l(e,r){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var r=1;r<arguments.length;r++){var a=null!=arguments[r]?arguments[r]:{};r%2?l(Object(a),!0).forEach((function(r){t(e,r,a[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(a,r))}))}return e}function s(e,r){if(null==e)return{};var a,n,t=function(e,r){if(null==e)return{};var a,n,t={},l=Object.keys(e);for(n=0;n<l.length;n++)a=l[n],r.indexOf(a)>=0||(t[a]=e[a]);return t}(e,r);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)a=l[n],r.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(t[a]=e[a])}return t}var o=n.createContext({}),y=function(e){var r=n.useContext(o),a=r;return e&&(a="function"==typeof e?e(r):i(i({},r),e)),a},c=function(e){var r=y(e.components);return n.createElement(o.Provider,{value:r},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var r=e.children;return n.createElement(n.Fragment,{},r)}},p=n.forwardRef((function(e,r){var a=e.components,t=e.mdxType,l=e.originalType,o=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),u=y(a),p=t,x=u["".concat(o,".").concat(p)]||u[p]||d[p]||l;return a?n.createElement(x,i(i({ref:r},c),{},{components:a})):n.createElement(x,i({ref:r},c))}));function x(e,r){var a=arguments,t=r&&r.mdxType;if("string"==typeof e||t){var l=a.length,i=new Array(l);i[0]=p;var s={};for(var o in r)hasOwnProperty.call(r,o)&&(s[o]=r[o]);s.originalType=e,s[u]="string"==typeof e?e:t,i[1]=s;for(var y=2;y<l;y++)i[y]=a[y];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}p.displayName="MDXCreateElement"},50447:(e,r,a)=>{a.r(r),a.d(r,{assets:()=>o,contentTitle:()=>i,default:()=>d,frontMatter:()=>l,metadata:()=>s,toc:()=>y});var n=a(58168),t=(a(96540),a(15680));const l={title:"ARRAY_LAST_INDEX",language:"zh-CN"},i=void 0,s={unversionedId:"sql-manual/sql-functions/array-functions/array-last-index",id:"version-2.0/sql-manual/sql-functions/array-functions/array-last-index",title:"ARRAY_LAST_INDEX",description:"\x3c!--",source:"@site/i18n/zh-CN/docusaurus-plugin-content-docs/version-2.0/sql-manual/sql-functions/array-functions/array-last-index.md",sourceDirName:"sql-manual/sql-functions/array-functions",slug:"/sql-manual/sql-functions/array-functions/array-last-index",permalink:"/zh-CN/docs/sql-manual/sql-functions/array-functions/array-last-index",draft:!1,tags:[],version:"2.0",frontMatter:{title:"ARRAY_LAST_INDEX",language:"zh-CN"},sidebar:"docs",previous:{title:"ARRAY_FIRST_INDEX",permalink:"/zh-CN/docs/sql-manual/sql-functions/array-functions/array-first-index"},next:{title:"ARRAY_FIRST",permalink:"/zh-CN/docs/sql-manual/sql-functions/array-functions/array-first"}},o={},y=[{value:"array_last_index",id:"array_last_index",level:2},{value:"description",id:"description",level:3},{value:"Syntax",id:"syntax",level:4},{value:"example",id:"example",level:3},{value:"keywords",id:"keywords",level:3}],c={toc:y},u="wrapper";function d(e){let{components:r,...a}=e;return(0,t.yg)(u,(0,n.A)({},c,a,{components:r,mdxType:"MDXLayout"}),(0,t.yg)("h2",{id:"array_last_index"},"array_last_index"),(0,t.yg)("version",{since:"2.0"},(0,t.yg)("p",null,"array_last_index")),(0,t.yg)("h3",{id:"description"},"description"),(0,t.yg)("h4",{id:"syntax"},"Syntax"),(0,t.yg)("p",null,(0,t.yg)("inlineCode",{parentName:"p"},"ARRAY<T> array_last_index(lambda, ARRAY<T> array1, ...)")),(0,t.yg)("p",null,"\u4f7f\u7528lambda\u8868\u8fbe\u5f0f\u4f5c\u4e3a\u8f93\u5165\u53c2\u6570\uff0c\u5bf9\u5176\u4ed6\u8f93\u5165ARRAY\u53c2\u6570\u7684\u5185\u90e8\u6570\u636e\u8fdb\u884c\u76f8\u5e94\u7684\u8868\u8fbe\u5f0f\u8ba1\u7b97\u3002 \u8fd4\u56de\u6700\u540e\u4e00\u4e2a\u4f7f\u5f97 ",(0,t.yg)("inlineCode",{parentName:"p"},"lambda(array1[i], ...)")," \u8fd4\u56de\u503c\u4e0d\u4e3a 0 \u7684\u7d22\u5f15\u3002\u5982\u679c\u6ca1\u627e\u5230\u6ee1\u8db3\u6b64\u6761\u4ef6\u7684\u7d22\u5f15\uff0c\u5219\u8fd4\u56de 0\u3002"),(0,t.yg)("p",null,"\u5728lambda\u8868\u8fbe\u5f0f\u4e2d\u8f93\u5165\u7684\u53c2\u6570\u4e3a1\u4e2a\u6216\u591a\u4e2a\uff0c\u6240\u6709\u8f93\u5165\u7684array\u7684\u5143\u7d20\u6570\u91cf\u5fc5\u987b\u4e00\u81f4\u3002\u5728lambda\u4e2d\u53ef\u4ee5\u6267\u884c\u5408\u6cd5\u7684\u6807\u91cf\u51fd\u6570\uff0c\u4e0d\u652f\u6301\u805a\u5408\u51fd\u6570\u7b49\u3002"),(0,t.yg)("pre",null,(0,t.yg)("code",{parentName:"pre"},"array_last_index(x->x>1, array1);\narray_last_index(x->(x%2 = 0), array1);\narray_last_index(x->(abs(x)-1), array1);\narray_last_index((x,y)->(x = y), array1, array2);\n")),(0,t.yg)("h3",{id:"example"},"example"),(0,t.yg)("pre",null,(0,t.yg)("code",{parentName:"pre"},"mysql> select array_last_index(x->x+1>3, [2, 3, 4]);\n+-------------------------------------------------------------------+\n| array_last_index(array_map([x] -> x(0) + 1 > 3, ARRAY(2, 3, 4))) |\n+-------------------------------------------------------------------+\n|                                                                 3 |\n+-------------------------------------------------------------------+\n\nmysql> select array_last_index(x -> x is null, [null, 1, 2]);\n+----------------------------------------------------------------------+\n| array_last_index(array_map([x] -> x(0) IS NULL, ARRAY(NULL, 1, 2))) |\n+----------------------------------------------------------------------+\n|                                                                    1 |\n+----------------------------------------------------------------------+\n\nmysql> select array_last_index(x->power(x,2)>10, [1, 2, 3, 4]);\n+---------------------------------------------------------------------------------+\n| array_last_index(array_map([x] -> power(x(0), 2.0) > 10.0, ARRAY(1, 2, 3, 4))) |\n+---------------------------------------------------------------------------------+\n|                                                                               4 |\n+---------------------------------------------------------------------------------+\n\nmysql> select c_array1, c_array2, array_last_index((x,y)->x>y, c_array1, c_array2) from array_index_table order by id;\n+-----------------+-------------------------+----------------------------------------------------------------------+\n| c_array1        | c_array2                | array_last_index(array_map([x, y] -> x > y, `c_array1`, `c_array2`)) |\n+-----------------+-------------------------+----------------------------------------------------------------------+\n| [1, 2, 3, 4, 5] | [10, 20, -40, 80, -100] |                                                                    5 |\n| [6, 7, 8]       | [10, 12, 13]            |                                                                    0 |\n| [1]             | [-100]                  |                                                                    1 |\n| [1, NULL, 2]    | [NULL, 3, 1]            |                                                                    3 |\n| []              | []                      |                                                                    0 |\n| NULL            | NULL                    |                                                                    0 |\n+-----------------+-------------------------+----------------------------------------------------------------------+\n")),(0,t.yg)("h3",{id:"keywords"},"keywords"),(0,t.yg)("p",null,"ARRAY,FIRST_INDEX,array_last_index"))}d.isMDXComponent=!0}}]);