"use strict";(self.webpackChunkselectdb_portal=self.webpackChunkselectdb_portal||[]).push([[34491],{3905:(e,r,n)=>{n.d(r,{Zo:()=>u,kt:()=>f});var t=n(67294);function a(e,r,n){return r in e?Object.defineProperty(e,r,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[r]=n,e}function i(e,r){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);r&&(t=t.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),n.push.apply(n,t)}return n}function s(e){for(var r=1;r<arguments.length;r++){var n=null!=arguments[r]?arguments[r]:{};r%2?i(Object(n),!0).forEach((function(r){a(e,r,n[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))}))}return e}function l(e,r){if(null==e)return{};var n,t,a=function(e,r){if(null==e)return{};var n,t,a={},i=Object.keys(e);for(t=0;t<i.length;t++)n=i[t],r.indexOf(n)>=0||(a[n]=e[n]);return a}(e,r);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(t=0;t<i.length;t++)n=i[t],r.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var o=t.createContext({}),c=function(e){var r=t.useContext(o),n=r;return e&&(n="function"==typeof e?e(r):s(s({},r),e)),n},u=function(e){var r=c(e.components);return t.createElement(o.Provider,{value:r},e.children)},p="mdxType",y={inlineCode:"code",wrapper:function(e){var r=e.children;return t.createElement(t.Fragment,{},r)}},d=t.forwardRef((function(e,r){var n=e.components,a=e.mdxType,i=e.originalType,o=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),p=c(n),d=a,f=p["".concat(o,".").concat(d)]||p[d]||y[d]||i;return n?t.createElement(f,s(s({ref:r},u),{},{components:n})):t.createElement(f,s({ref:r},u))}));function f(e,r){var n=arguments,a=r&&r.mdxType;if("string"==typeof e||a){var i=n.length,s=new Array(i);s[0]=d;var l={};for(var o in r)hasOwnProperty.call(r,o)&&(l[o]=r[o]);l.originalType=e,l[p]="string"==typeof e?e:a,s[1]=l;for(var c=2;c<i;c++)s[c]=n[c];return t.createElement.apply(null,s)}return t.createElement.apply(null,n)}d.displayName="MDXCreateElement"},79872:(e,r,n)=>{n.r(r),n.d(r,{assets:()=>o,contentTitle:()=>s,default:()=>y,frontMatter:()=>i,metadata:()=>l,toc:()=>c});var t=n(87462),a=(n(67294),n(3905));const i={title:"array_first_index",language:"en"},s=void 0,l={unversionedId:"sql-manual/sql-functions/array-functions/array_first_index",id:"sql-manual/sql-functions/array-functions/array_first_index",title:"array_first_index",description:"\x3c!--",source:"@site/docs/sql-manual/sql-functions/array-functions/array_first_index.md",sourceDirName:"sql-manual/sql-functions/array-functions",slug:"/sql-manual/sql-functions/array-functions/array_first_index",permalink:"/docs/dev/sql-manual/sql-functions/array-functions/array_first_index",draft:!1,tags:[],version:"current",frontMatter:{title:"array_first_index",language:"en"},sidebar:"docs",previous:{title:"array_exists",permalink:"/docs/dev/sql-manual/sql-functions/array-functions/array_exists"},next:{title:"array_last",permalink:"/docs/dev/sql-manual/sql-functions/array-functions/array_last"}},o={},c=[{value:"array_first_index",id:"array_first_index",level:2},{value:"description",id:"description",level:3},{value:"Syntax",id:"syntax",level:4},{value:"example",id:"example",level:3},{value:"keywords",id:"keywords",level:3}],u={toc:c},p="wrapper";function y(e){let{components:r,...n}=e;return(0,a.kt)(p,(0,t.Z)({},u,n,{components:r,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"array_first_index"},"array_first_index"),(0,a.kt)("version",{since:"2.0"},(0,a.kt)("p",null,"array_first_index")),(0,a.kt)("h3",{id:"description"},"description"),(0,a.kt)("h4",{id:"syntax"},"Syntax"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"ARRAY<T> array_first_index(lambda, ARRAY<T> array1, ...)")),(0,a.kt)("p",null,"Use an lambda expression as an input parameter to perform corresponding expression calculations on the internal data of other input ARRAY parameters. Returns the first index such that the return value of ",(0,a.kt)("inlineCode",{parentName:"p"},"lambda(array1[i], ...)")," is not 0. Return 0 if such index is not found."),(0,a.kt)("p",null,"There are one or more parameters input in the lambda expression, and the number of elements of all input arrays must be the same. Legal scalar functions can be executed in lambda, aggregate functions, etc. are not supported."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"array_first_index(x->x>1, array1);\narray_first_index(x->(x%2 = 0), array1);\narray_first_index(x->(abs(x)-1), array1);\narray_first_index((x,y)->(x = y), array1, array2);\n")),(0,a.kt)("h3",{id:"example"},"example"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"mysql> select array_first_index(x->x+1>3, [2, 3, 4]);\n+-------------------------------------------------------------------+\n| array_first_index(array_map([x] -> x(0) + 1 > 3, ARRAY(2, 3, 4))) |\n+-------------------------------------------------------------------+\n|                                                                 2 |\n+-------------------------------------------------------------------+\n\nmysql> select array_first_index(x -> x is null, [null, 1, 2]);\n+----------------------------------------------------------------------+\n| array_first_index(array_map([x] -> x(0) IS NULL, ARRAY(NULL, 1, 2))) |\n+----------------------------------------------------------------------+\n|                                                                    1 |\n+----------------------------------------------------------------------+\n\nmysql> select array_first_index(x->power(x,2)>10, [1, 2, 3, 4]);\n+---------------------------------------------------------------------------------+\n| array_first_index(array_map([x] -> power(x(0), 2.0) > 10.0, ARRAY(1, 2, 3, 4))) |\n+---------------------------------------------------------------------------------+\n|                                                                               4 |\n+---------------------------------------------------------------------------------+\n\nmysql> select col2, col3, array_first_index((x,y)->x>y, col2, col3) from array_test;\n+--------------+--------------+---------------------------------------------------------------------+\n| col2         | col3         | array_first_index(array_map([x, y] -> x(0) > y(1), `col2`, `col3`)) |\n+--------------+--------------+---------------------------------------------------------------------+\n| [1, 2, 3]    | [3, 4, 5]    |                                                                   0 |\n| [1, NULL, 2] | [NULL, 3, 1] |                                                                   3 |\n| [1, 2, 3]    | [9, 8, 7]    |                                                                   0 |\n| NULL         | NULL         |                                                                   0 |\n+--------------+--------------+---------------------------------------------------------------------+\n")),(0,a.kt)("h3",{id:"keywords"},"keywords"),(0,a.kt)("p",null,"ARRAY,FIRST_INDEX,ARRAY_FIRST_INDEX"))}y.isMDXComponent=!0}}]);