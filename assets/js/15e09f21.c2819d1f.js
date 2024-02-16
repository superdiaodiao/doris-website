"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([[31232],{15680:(t,n,e)=>{e.d(n,{xA:()=>l,yg:()=>u});var i=e(96540);function a(t,n,e){return n in t?Object.defineProperty(t,n,{value:e,enumerable:!0,configurable:!0,writable:!0}):t[n]=e,t}function r(t,n){var e=Object.keys(t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);n&&(i=i.filter((function(n){return Object.getOwnPropertyDescriptor(t,n).enumerable}))),e.push.apply(e,i)}return e}function o(t){for(var n=1;n<arguments.length;n++){var e=null!=arguments[n]?arguments[n]:{};n%2?r(Object(e),!0).forEach((function(n){a(t,n,e[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(e)):r(Object(e)).forEach((function(n){Object.defineProperty(t,n,Object.getOwnPropertyDescriptor(e,n))}))}return t}function p(t,n){if(null==t)return{};var e,i,a=function(t,n){if(null==t)return{};var e,i,a={},r=Object.keys(t);for(i=0;i<r.length;i++)e=r[i],n.indexOf(e)>=0||(a[e]=t[e]);return a}(t,n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);for(i=0;i<r.length;i++)e=r[i],n.indexOf(e)>=0||Object.prototype.propertyIsEnumerable.call(t,e)&&(a[e]=t[e])}return a}var m=i.createContext({}),s=function(t){var n=i.useContext(m),e=n;return t&&(e="function"==typeof t?t(n):o(o({},n),t)),e},l=function(t){var n=s(t.components);return i.createElement(m.Provider,{value:n},t.children)},b="mdxType",c={inlineCode:"code",wrapper:function(t){var n=t.children;return i.createElement(i.Fragment,{},n)}},_=i.forwardRef((function(t,n){var e=t.components,a=t.mdxType,r=t.originalType,m=t.parentName,l=p(t,["components","mdxType","originalType","parentName"]),b=s(e),_=a,u=b["".concat(m,".").concat(_)]||b[_]||c[_]||r;return e?i.createElement(u,o(o({ref:n},l),{},{components:e})):i.createElement(u,o({ref:n},l))}));function u(t,n){var e=arguments,a=n&&n.mdxType;if("string"==typeof t||a){var r=e.length,o=new Array(r);o[0]=_;var p={};for(var m in n)hasOwnProperty.call(n,m)&&(p[m]=n[m]);p.originalType=t,p[b]="string"==typeof t?t:a,o[1]=p;for(var s=2;s<r;s++)o[s]=e[s];return i.createElement.apply(null,o)}return i.createElement.apply(null,e)}_.displayName="MDXCreateElement"},221:(t,n,e)=>{e.r(n),e.d(n,{assets:()=>m,contentTitle:()=>o,default:()=>c,frontMatter:()=>r,metadata:()=>p,toc:()=>s});var i=e(58168),a=(e(96540),e(15680));const r={title:"bitmap_and",language:"en"},o=void 0,p={unversionedId:"sql-manual/sql-functions/bitmap-functions/bitmap_and",id:"version-1.2/sql-manual/sql-functions/bitmap-functions/bitmap_and",title:"bitmap_and",description:"\x3c!--",source:"@site/versioned_docs/version-1.2/sql-manual/sql-functions/bitmap-functions/bitmap_and.md",sourceDirName:"sql-manual/sql-functions/bitmap-functions",slug:"/sql-manual/sql-functions/bitmap-functions/bitmap_and",permalink:"/docs/1.2/sql-manual/sql-functions/bitmap-functions/bitmap_and",draft:!1,tags:[],version:"1.2",frontMatter:{title:"bitmap_and",language:"en"},sidebar:"docs",previous:{title:"bitmap_or",permalink:"/docs/1.2/sql-manual/sql-functions/bitmap-functions/bitmap_or"},next:{title:"bitmap_union",permalink:"/docs/1.2/sql-manual/sql-functions/bitmap-functions/bitmap_union"}},m={},s=[{value:"bitmap_and",id:"bitmap_and",level:2},{value:"description",id:"description",level:3},{value:"Syntax",id:"syntax",level:4},{value:"example",id:"example",level:3},{value:"keywords",id:"keywords",level:3}],l={toc:s},b="wrapper";function c(t){let{components:n,...e}=t;return(0,a.yg)(b,(0,i.A)({},l,e,{components:n,mdxType:"MDXLayout"}),(0,a.yg)("h2",{id:"bitmap_and"},"bitmap_and"),(0,a.yg)("h3",{id:"description"},"description"),(0,a.yg)("h4",{id:"syntax"},"Syntax"),(0,a.yg)("p",null,(0,a.yg)("inlineCode",{parentName:"p"},"BITMAP BITMAP_AND(BITMAP lhs, BITMAP rhs, ...)")),(0,a.yg)("p",null,"Compute intersection of two or more input bitmaps, return the new bitmap."),(0,a.yg)("h3",{id:"example"},"example"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre"},"mysql> select bitmap_count(bitmap_and(to_bitmap(1), to_bitmap(2))) cnt;\n+------+\n| cnt  |\n+------+\n|    0 |\n+------+\n\nmysql> select bitmap_to_string(bitmap_and(to_bitmap(1), to_bitmap(2)));\n+----------------------------------------------------------+\n| bitmap_to_string(bitmap_and(to_bitmap(1), to_bitmap(2))) |\n+----------------------------------------------------------+\n|                                                          |\n+----------------------------------------------------------+\n\nmysql> select bitmap_count(bitmap_and(to_bitmap(1), to_bitmap(1))) cnt;\n+------+\n| cnt  |\n+------+\n|    1 |\n+------+\n\nmysql> select bitmap_to_string(bitmap_and(to_bitmap(1), to_bitmap(1)));\n+----------------------------------------------------------+\n| bitmap_to_string(bitmap_and(to_bitmap(1), to_bitmap(1))) |\n+----------------------------------------------------------+\n| 1                                                        |\n+----------------------------------------------------------+\n\nmysql> select bitmap_to_string(bitmap_and(bitmap_from_string('1,2,3'), bitmap_from_string('1,2'), bitmap_from_string('1,2,3,4,5')));\n+-----------------------------------------------------------------------------------------------------------------------+\n| bitmap_to_string(bitmap_and(bitmap_from_string('1,2,3'), bitmap_from_string('1,2'), bitmap_from_string('1,2,3,4,5'))) |\n+-----------------------------------------------------------------------------------------------------------------------+\n| 1,2                                                                                                                   |\n+-----------------------------------------------------------------------------------------------------------------------+\n\nmysql> select bitmap_to_string(bitmap_and(bitmap_from_string('1,2,3'), bitmap_from_string('1,2'), bitmap_from_string('1,2,3,4,5'),bitmap_empty()));\n+---------------------------------------------------------------------------------------------------------------------------------------+\n| bitmap_to_string(bitmap_and(bitmap_from_string('1,2,3'), bitmap_from_string('1,2'), bitmap_from_string('1,2,3,4,5'), bitmap_empty())) |\n+---------------------------------------------------------------------------------------------------------------------------------------+\n|                                                                                                                                       |\n+---------------------------------------------------------------------------------------------------------------------------------------+\n\nmysql> select bitmap_to_string(bitmap_and(bitmap_from_string('1,2,3'), bitmap_from_string('1,2'), bitmap_from_string('1,2,3,4,5'),NULL));\n+-----------------------------------------------------------------------------------------------------------------------------+\n| bitmap_to_string(bitmap_and(bitmap_from_string('1,2,3'), bitmap_from_string('1,2'), bitmap_from_string('1,2,3,4,5'), NULL)) |\n+-----------------------------------------------------------------------------------------------------------------------------+\n| NULL                                                                                                                        |\n+-----------------------------------------------------------------------------------------------------------------------------+\n")),(0,a.yg)("h3",{id:"keywords"},"keywords"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre"},"BITMAP_AND,BITMAP\n")))}c.isMDXComponent=!0}}]);