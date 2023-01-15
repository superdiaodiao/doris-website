"use strict";(self.webpackChunkselectdb_portal=self.webpackChunkselectdb_portal||[]).push([[58144],{3905:(t,n,e)=>{e.d(n,{Zo:()=>c,kt:()=>b});var r=e(67294);function o(t,n,e){return n in t?Object.defineProperty(t,n,{value:e,enumerable:!0,configurable:!0,writable:!0}):t[n]=e,t}function i(t,n){var e=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(t,n).enumerable}))),e.push.apply(e,r)}return e}function a(t){for(var n=1;n<arguments.length;n++){var e=null!=arguments[n]?arguments[n]:{};n%2?i(Object(e),!0).forEach((function(n){o(t,n,e[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(e)):i(Object(e)).forEach((function(n){Object.defineProperty(t,n,Object.getOwnPropertyDescriptor(e,n))}))}return t}function m(t,n){if(null==t)return{};var e,r,o=function(t,n){if(null==t)return{};var e,r,o={},i=Object.keys(t);for(r=0;r<i.length;r++)e=i[r],n.indexOf(e)>=0||(o[e]=t[e]);return o}(t,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);for(r=0;r<i.length;r++)e=i[r],n.indexOf(e)>=0||Object.prototype.propertyIsEnumerable.call(t,e)&&(o[e]=t[e])}return o}var p=r.createContext({}),s=function(t){var n=r.useContext(p),e=n;return t&&(e="function"==typeof t?t(n):a(a({},n),t)),e},c=function(t){var n=s(t.components);return r.createElement(p.Provider,{value:n},t.children)},l="mdxType",u={inlineCode:"code",wrapper:function(t){var n=t.children;return r.createElement(r.Fragment,{},n)}},_=r.forwardRef((function(t,n){var e=t.components,o=t.mdxType,i=t.originalType,p=t.parentName,c=m(t,["components","mdxType","originalType","parentName"]),l=s(e),_=o,b=l["".concat(p,".").concat(_)]||l[_]||u[_]||i;return e?r.createElement(b,a(a({ref:n},c),{},{components:e})):r.createElement(b,a({ref:n},c))}));function b(t,n){var e=arguments,o=n&&n.mdxType;if("string"==typeof t||o){var i=e.length,a=new Array(i);a[0]=_;var m={};for(var p in n)hasOwnProperty.call(n,p)&&(m[p]=n[p]);m.originalType=t,m[l]="string"==typeof t?t:o,a[1]=m;for(var s=2;s<i;s++)a[s]=e[s];return r.createElement.apply(null,a)}return r.createElement.apply(null,e)}_.displayName="MDXCreateElement"},72032:(t,n,e)=>{e.r(n),e.d(n,{assets:()=>p,contentTitle:()=>a,default:()=>l,frontMatter:()=>i,metadata:()=>m,toc:()=>s});var r=e(87462),o=(e(67294),e(3905));const i={title:"bitmap_xor_count",language:"zh-CN"},a=void 0,m={unversionedId:"sql-manual/sql-functions/bitmap-functions/bitmap_xor_count",id:"version-dev/sql-manual/sql-functions/bitmap-functions/bitmap_xor_count",title:"bitmap_xor_count",description:"\x3c!--",source:"@site/i18n/zh-CN/docusaurus-plugin-content-docs/version-dev/sql-manual/sql-functions/bitmap-functions/bitmap_xor_count.md",sourceDirName:"sql-manual/sql-functions/bitmap-functions",slug:"/sql-manual/sql-functions/bitmap-functions/bitmap_xor_count",permalink:"/zh-CN/docs/dev/sql-manual/sql-functions/bitmap-functions/bitmap_xor_count",draft:!1,editUrl:"https://github.com/apache/doris/edit/master/docs/zh-CN/docs/sql-manual/sql-functions/bitmap-functions/bitmap_xor_count.md",tags:[],version:"dev",frontMatter:{title:"bitmap_xor_count",language:"zh-CN"},sidebar:"docs",previous:{title:"orthogonal_bitmap_union_count",permalink:"/zh-CN/docs/dev/sql-manual/sql-functions/bitmap-functions/orthogonal_bitmap_union_count"},next:{title:"bitmap_or_count",permalink:"/zh-CN/docs/dev/sql-manual/sql-functions/bitmap-functions/bitmap_or_count"}},p={},s=[{value:"bitmap_xor_count",id:"bitmap_xor_count",level:2},{value:"description",id:"description",level:3},{value:"Syntax",id:"syntax",level:4},{value:"example",id:"example",level:3},{value:"keywords",id:"keywords",level:3}],c={toc:s};function l(t){let{components:n,...e}=t;return(0,o.kt)("wrapper",(0,r.Z)({},c,e,{components:n,mdxType:"MDXLayout"}),(0,o.kt)("h2",{id:"bitmap_xor_count"},"bitmap_xor_count"),(0,o.kt)("h3",{id:"description"},"description"),(0,o.kt)("h4",{id:"syntax"},"Syntax"),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"BIGINT BITMAP_XOR_COUNT(BITMAP lhs, BITMAP rhs, ...)")),(0,o.kt)("p",null,"\u5c06\u4e24\u4e2a\u53ca\u4ee5\u4e0abitmap\u96c6\u5408\u8fdb\u884c\u5f02\u6216\u64cd\u4f5c\u5e76\u8fd4\u56de\u7ed3\u679c\u96c6\u7684\u5927\u5c0f"),(0,o.kt)("h3",{id:"example"},"example"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"mysql> select bitmap_xor_count(bitmap_from_string('1,2,3'),bitmap_from_string('3,4,5'));\n+----------------------------------------------------------------------------+\n| bitmap_xor_count(bitmap_from_string('1,2,3'), bitmap_from_string('3,4,5')) |\n+----------------------------------------------------------------------------+\n|                                                                          4 |\n+----------------------------------------------------------------------------+\n\nmysql> select bitmap_xor_count(bitmap_from_string('1,2,3'),bitmap_from_string('1,2,3'));\n+----------------------------------------------------------------------------+\n| bitmap_xor_count(bitmap_from_string('1,2,3'), bitmap_from_string('1,2,3')) |\n+----------------------------------------------------------------------------+\n|                                                                          0 |\n+----------------------------------------------------------------------------+\n\nmysql> select bitmap_xor_count(bitmap_from_string('1,2,3'),bitmap_from_string('4,5,6'));\n+----------------------------------------------------------------------------+\n| bitmap_xor_count(bitmap_from_string('1,2,3'), bitmap_from_string('4,5,6')) |\n+----------------------------------------------------------------------------+\n|                                                                          6 |\n+----------------------------------------------------------------------------+\n\nMySQL> select (bitmap_xor_count(bitmap_from_string('2,3'),bitmap_from_string('1,2,3,4'),bitmap_from_string('3,4,5')));\n+-----------------------------------------------------------------------------------------------------------+\n| (bitmap_xor_count(bitmap_from_string('2,3'), bitmap_from_string('1,2,3,4'), bitmap_from_string('3,4,5'))) |\n+-----------------------------------------------------------------------------------------------------------+\n|                                                                                                         3 |\n+-----------------------------------------------------------------------------------------------------------+\n\nMySQL> select (bitmap_xor_count(bitmap_from_string('2,3'),bitmap_from_string('1,2,3,4'),bitmap_from_string('3,4,5'),bitmap_empty()));\n+---------------------------------------------------------------------------------------------------------------------------+\n| (bitmap_xor_count(bitmap_from_string('2,3'), bitmap_from_string('1,2,3,4'), bitmap_from_string('3,4,5'), bitmap_empty())) |\n+---------------------------------------------------------------------------------------------------------------------------+\n|                                                                                                                         3 |\n+---------------------------------------------------------------------------------------------------------------------------+\n\nMySQL> select (bitmap_xor_count(bitmap_from_string('2,3'),bitmap_from_string('1,2,3,4'),bitmap_from_string('3,4,5'),NULL));\n+-----------------------------------------------------------------------------------------------------------------+\n| (bitmap_xor_count(bitmap_from_string('2,3'), bitmap_from_string('1,2,3,4'), bitmap_from_string('3,4,5'), NULL)) |\n+-----------------------------------------------------------------------------------------------------------------+\n|                                                                                                            NULL |\n+-----------------------------------------------------------------------------------------------------------------+\n")),(0,o.kt)("h3",{id:"keywords"},"keywords"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"BITMAP_XOR_COUNT,BITMAP\n")))}l.isMDXComponent=!0}}]);