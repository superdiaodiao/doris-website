"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([[81750],{15680:(e,r,n)=>{n.d(r,{xA:()=>c,yg:()=>d});var a=n(96540);function t(e,r,n){return r in e?Object.defineProperty(e,r,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[r]=n,e}function s(e,r){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);r&&(a=a.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var r=1;r<arguments.length;r++){var n=null!=arguments[r]?arguments[r]:{};r%2?s(Object(n),!0).forEach((function(r){t(e,r,n[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):s(Object(n)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))}))}return e}function o(e,r){if(null==e)return{};var n,a,t=function(e,r){if(null==e)return{};var n,a,t={},s=Object.keys(e);for(a=0;a<s.length;a++)n=s[a],r.indexOf(n)>=0||(t[n]=e[n]);return t}(e,r);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(a=0;a<s.length;a++)n=s[a],r.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(t[n]=e[n])}return t}var u=a.createContext({}),i=function(e){var r=a.useContext(u),n=r;return e&&(n="function"==typeof e?e(r):l(l({},r),e)),n},c=function(e){var r=i(e.components);return a.createElement(u.Provider,{value:r},e.children)},y="mdxType",f={inlineCode:"code",wrapper:function(e){var r=e.children;return a.createElement(a.Fragment,{},r)}},p=a.forwardRef((function(e,r){var n=e.components,t=e.mdxType,s=e.originalType,u=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),y=i(n),p=t,d=y["".concat(u,".").concat(p)]||y[p]||f[p]||s;return n?a.createElement(d,l(l({ref:r},c),{},{components:n})):a.createElement(d,l({ref:r},c))}));function d(e,r){var n=arguments,t=r&&r.mdxType;if("string"==typeof e||t){var s=n.length,l=new Array(s);l[0]=p;var o={};for(var u in r)hasOwnProperty.call(r,u)&&(o[u]=r[u]);o.originalType=e,o[y]="string"==typeof e?e:t,l[1]=o;for(var i=2;i<s;i++)l[i]=n[i];return a.createElement.apply(null,l)}return a.createElement.apply(null,n)}p.displayName="MDXCreateElement"},89082:(e,r,n)=>{n.r(r),n.d(r,{assets:()=>u,contentTitle:()=>l,default:()=>f,frontMatter:()=>s,metadata:()=>o,toc:()=>i});var a=n(58168),t=(n(96540),n(15680));const s={title:"ARRAY_SHUFFLE",language:"en"},l=void 0,o={unversionedId:"sql-manual/sql-functions/array-functions/array-shuffle",id:"version-2.0/sql-manual/sql-functions/array-functions/array-shuffle",title:"ARRAY_SHUFFLE",description:"\x3c!--",source:"@site/versioned_docs/version-2.0/sql-manual/sql-functions/array-functions/array-shuffle.md",sourceDirName:"sql-manual/sql-functions/array-functions",slug:"/sql-manual/sql-functions/array-functions/array-shuffle",permalink:"/docs/sql-manual/sql-functions/array-functions/array-shuffle",draft:!1,tags:[],version:"2.0",frontMatter:{title:"ARRAY_SHUFFLE",language:"en"},sidebar:"docs",previous:{title:"ARRAY_ZIP",permalink:"/docs/sql-manual/sql-functions/array-functions/array-zip"},next:{title:"ARRAY_CUM_SUM",permalink:"/docs/sql-manual/sql-functions/array-functions/array-cum-sum"}},u={},i=[{value:"array_shuffle",id:"array_shuffle",level:2},{value:"description",id:"description",level:3},{value:"Syntax",id:"syntax",level:4},{value:"example",id:"example",level:3},{value:"keywords",id:"keywords",level:3}],c={toc:i},y="wrapper";function f(e){let{components:r,...n}=e;return(0,t.yg)(y,(0,a.A)({},c,n,{components:r,mdxType:"MDXLayout"}),(0,t.yg)("h2",{id:"array_shuffle"},"array_shuffle"),(0,t.yg)("version",{since:"2.0"},(0,t.yg)("p",null,"array_shuffle\nshuffle")),(0,t.yg)("h3",{id:"description"},"description"),(0,t.yg)("h4",{id:"syntax"},"Syntax"),(0,t.yg)("pre",null,(0,t.yg)("code",{parentName:"pre",className:"language-sql"},"ARRAY<T> array_shuffle(ARRAY<T> array1, [INT seed])\nARRAY<T> shuffle(ARRAY<T> array1, [INT seed])\n")),(0,t.yg)("p",null,"Randomly arrange the elements in the array. Among them, the parameter array1 is the array to be randomly arranged, and the optional parameter seed is to set the initial value used by the pseudo-random number generator to generate pseudo-random numbers.\nShuffle has the same function as array_shuffle."),(0,t.yg)("pre",null,(0,t.yg)("code",{parentName:"pre"},"array_shuffle(array1);\narray_shuffle(array1, 0);\nshuffle(array1);\nshuffle(array1, 0);\n")),(0,t.yg)("h3",{id:"example"},"example"),(0,t.yg)("pre",null,(0,t.yg)("code",{parentName:"pre",className:"language-sql"},"\nmysql [test]> select c_array1, array_shuffle(c_array1) from array_test; \n+-----------------------+---------------------------+\n| c_array1              | array_shuffle(`c_array1`) |\n+-----------------------+---------------------------+\n| [1, 2, 3, 4, 5, NULL] | [2, NULL, 5, 3, 4, 1]     |\n| [6, 7, 8, NULL]       | [7, NULL, 8, 6]           |\n| [1, NULL]             | [1, NULL]                 |\n| NULL                  | NULL                      |\n+-----------------------+---------------------------+\n4 rows in set (0.01 sec)\n\nMySQL [test]> select c_array1, array_shuffle(c_array1, 0) from array_test; \n+-----------------------+------------------------------+\n| c_array1              | array_shuffle(`c_array1`, 0) |\n+-----------------------+------------------------------+\n| [1, 2, 3, 4, 5, NULL] | [1, 3, 2, NULL, 4, 5]        |\n| [6, 7, 8, NULL]       | [6, 8, 7, NULL]              |\n| [1, NULL]             | [1, NULL]                    |\n| NULL                  | NULL                         |\n+-----------------------+------------------------------+\n4 rows in set (0.01 sec)\n\n")),(0,t.yg)("h3",{id:"keywords"},"keywords"),(0,t.yg)("p",null,"ARRAY,ARRAY_SHUFFLE,SHUFFLE"))}f.isMDXComponent=!0}}]);