"use strict";(self.webpackChunkselectdb_portal=self.webpackChunkselectdb_portal||[]).push([[62749],{3905:(e,n,r)=>{r.d(n,{Zo:()=>_,kt:()=>d});var t=r(67294);function a(e,n,r){return n in e?Object.defineProperty(e,n,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[n]=r,e}function l(e,n){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),r.push.apply(r,t)}return r}function o(e){for(var n=1;n<arguments.length;n++){var r=null!=arguments[n]?arguments[n]:{};n%2?l(Object(r),!0).forEach((function(n){a(e,n,r[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):l(Object(r)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(r,n))}))}return e}function i(e,n){if(null==e)return{};var r,t,a=function(e,n){if(null==e)return{};var r,t,a={},l=Object.keys(e);for(t=0;t<l.length;t++)r=l[t],n.indexOf(r)>=0||(a[r]=e[r]);return a}(e,n);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(t=0;t<l.length;t++)r=l[t],n.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var s=t.createContext({}),c=function(e){var n=t.useContext(s),r=n;return e&&(r="function"==typeof e?e(n):o(o({},n),e)),r},_=function(e){var n=c(e.components);return t.createElement(s.Provider,{value:n},e.children)},u="mdxType",p={inlineCode:"code",wrapper:function(e){var n=e.children;return t.createElement(t.Fragment,{},n)}},y=t.forwardRef((function(e,n){var r=e.components,a=e.mdxType,l=e.originalType,s=e.parentName,_=i(e,["components","mdxType","originalType","parentName"]),u=c(r),y=a,d=u["".concat(s,".").concat(y)]||u[y]||p[y]||l;return r?t.createElement(d,o(o({ref:n},_),{},{components:r})):t.createElement(d,o({ref:n},_))}));function d(e,n){var r=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var l=r.length,o=new Array(l);o[0]=y;var i={};for(var s in n)hasOwnProperty.call(n,s)&&(i[s]=n[s]);i.originalType=e,i[u]="string"==typeof e?e:a,o[1]=i;for(var c=2;c<l;c++)o[c]=r[c];return t.createElement.apply(null,o)}return t.createElement.apply(null,r)}y.displayName="MDXCreateElement"},15746:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>s,contentTitle:()=>o,default:()=>u,frontMatter:()=>l,metadata:()=>i,toc:()=>c});var t=r(87462),a=(r(67294),r(3905));const l={title:"array_join",language:"en"},o=void 0,i={unversionedId:"sql-manual/sql-functions/array-functions/array_join",id:"version-dev/sql-manual/sql-functions/array-functions/array_join",title:"array_join",description:"\x3c!--",source:"@site/versioned_docs/version-dev/sql-manual/sql-functions/array-functions/array_join.md",sourceDirName:"sql-manual/sql-functions/array-functions",slug:"/sql-manual/sql-functions/array-functions/array_join",permalink:"/docs/dev/sql-manual/sql-functions/array-functions/array_join",draft:!1,editUrl:"https://github.com/apache/doris/edit/master/docs/en/docs/sql-manual/sql-functions/array-functions/array_join.md",tags:[],version:"dev",frontMatter:{title:"array_join",language:"en"},sidebar:"docs",previous:{title:"array_union",permalink:"/docs/dev/sql-manual/sql-functions/array-functions/array_union"},next:{title:"array_with_constant",permalink:"/docs/dev/sql-manual/sql-functions/array-functions/array_with_constant"}},s={},c=[{value:"array_join",id:"array_join",level:2},{value:"description",id:"description",level:3},{value:"Syntax",id:"syntax",level:4},{value:"notice",id:"notice",level:3},{value:"example",id:"example",level:3},{value:"keywords",id:"keywords",level:3}],_={toc:c};function u(e){let{components:n,...r}=e;return(0,a.kt)("wrapper",(0,t.Z)({},_,r,{components:n,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"array_join"},"array_join"),(0,a.kt)("version",{since:"1.2.0"},(0,a.kt)("p",null,"array_join")),(0,a.kt)("h3",{id:"description"},"description"),(0,a.kt)("h4",{id:"syntax"},"Syntax"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"VARCHAR array_join(ARRAY<T> arr, VARCHAR sep[, VARCHAR null_replace])\n")),(0,a.kt)("p",null,"Combines all elements in the array to generate a new string according to the separator (sep)\nand the string to replace NULL (null_replace).\nIf sep is NULL, return NULL.\nIf null_replace is NULL, return NULL.\nIf sep is an empty string, no delimiter is applied.\nIf null_replace is an empty string or not specified, the NULL elements in the array are discarded directly."),(0,a.kt)("h3",{id:"notice"},"notice"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"Only supported in vectorized engine")),(0,a.kt)("h3",{id:"example"},"example"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"mysql> set enable_vectorized_engine=true;\n\nmysql> select k1, k2, array_join(k2, '_', 'null') from array_test order by k1;\n+------+-----------------------------+------------------------------------+\n| k1   | k2                          | array_join(`k2`, '_', 'null')      |\n+------+-----------------------------+------------------------------------+\n|  1   | [1, 2, 3, 4, 5]             | 1_2_3_4_5                          |\n|  2   | [6, 7, 8]                   | 6_7_8                              |\n|  3   | []                          |                                    |\n|  4   | NULL                        | NULL                               |\n|  5   | [1, 2, 3, 4, 5, 4, 3, 2, 1] | 1_2_3_4_5_4_3_2_1                  |\n|  6   | [1, 2, 3, NULL]             | 1_2_3_null                         |\n|  7   | [4, 5, 6, NULL, NULL]       | 4_5_6_null_null                    |\n+------+-----------------------------+------------------------------------+\n\nmysql> select k1, k2, array_join(k2, '_', 'null') from array_test01 order by k1;\n+------+-----------------------------------+------------------------------------+\n| k1   | k2                                | array_join(`k2`, '_', 'null')      |\n+------+-----------------------------------+------------------------------------+\n|  1   | ['a', 'b', 'c', 'd']              | a_b_c_d                            |\n|  2   | ['e', 'f', 'g', 'h']              | e_f_g_h                            |\n|  3   | [NULL, 'a', NULL, 'b', NULL, 'c'] | null_a_null_b_null_c               |\n|  4   | ['d', 'e', NULL, ' ']             | d_e_null_                          |\n|  5   | [' ', NULL, 'f', 'g']             |  _null_f_g                         |\n+------+-----------------------------------+------------------------------------+\n\nmysql> select k1, k2, array_join(k2, '_') from array_test order by k1;\n+------+-----------------------------+----------------------------+\n| k1   | k2                          | array_join(`k2`, '_')      |\n+------+-----------------------------+----------------------------+\n|  1   | [1, 2, 3, 4, 5]             | 1_2_3_4_5                  |\n|  2   | [6, 7, 8]                   | 6_7_8                      |\n|  3   | []                          |                            |\n|  4   | NULL                        | NULL                       |\n|  5   | [1, 2, 3, 4, 5, 4, 3, 2, 1] | 1_2_3_4_5_4_3_2_1          |\n|  6   | [1, 2, 3, NULL]             | 1_2_3                      |\n|  7   | [4, 5, 6, NULL, NULL]       | 4_5_6                      |\n+------+-----------------------------+----------------------------+\n\nmysql> select k1, k2, array_join(k2, '_') from array_test01 order by k1;\n+------+-----------------------------------+----------------------------+\n| k1   | k2                                | array_join(`k2`, '_')      |\n+------+-----------------------------------+----------------------------+\n|  1   | ['a', 'b', 'c', 'd']              | a_b_c_d                    |\n|  2   | ['e', 'f', 'g', 'h']              | e_f_g_h                    |\n|  3   | [NULL, 'a', NULL, 'b', NULL, 'c'] | a_b_c                      |\n|  4   | ['d', 'e', NULL, ' ']             | d_e_                       |\n|  5   | [' ', NULL, 'f', 'g']             |  _f_g                      |\n+------+-----------------------------------+----------------------------+\n")),(0,a.kt)("h3",{id:"keywords"},"keywords"),(0,a.kt)("p",null,"ARRAY, JOIN, ARRAY_JOIN"))}u.isMDXComponent=!0}}]);