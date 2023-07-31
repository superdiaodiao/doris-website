"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([[52512],{3905:(t,n,e)=>{e.d(n,{Zo:()=>l,kt:()=>_});var i=e(67294);function r(t,n,e){return n in t?Object.defineProperty(t,n,{value:e,enumerable:!0,configurable:!0,writable:!0}):t[n]=e,t}function a(t,n){var e=Object.keys(t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);n&&(i=i.filter((function(n){return Object.getOwnPropertyDescriptor(t,n).enumerable}))),e.push.apply(e,i)}return e}function o(t){for(var n=1;n<arguments.length;n++){var e=null!=arguments[n]?arguments[n]:{};n%2?a(Object(e),!0).forEach((function(n){r(t,n,e[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(e)):a(Object(e)).forEach((function(n){Object.defineProperty(t,n,Object.getOwnPropertyDescriptor(e,n))}))}return t}function p(t,n){if(null==t)return{};var e,i,r=function(t,n){if(null==t)return{};var e,i,r={},a=Object.keys(t);for(i=0;i<a.length;i++)e=a[i],n.indexOf(e)>=0||(r[e]=t[e]);return r}(t,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);for(i=0;i<a.length;i++)e=a[i],n.indexOf(e)>=0||Object.prototype.propertyIsEnumerable.call(t,e)&&(r[e]=t[e])}return r}var m=i.createContext({}),s=function(t){var n=i.useContext(m),e=n;return t&&(e="function"==typeof t?t(n):o(o({},n),t)),e},l=function(t){var n=s(t.components);return i.createElement(m.Provider,{value:n},t.children)},b="mdxType",c={inlineCode:"code",wrapper:function(t){var n=t.children;return i.createElement(i.Fragment,{},n)}},u=i.forwardRef((function(t,n){var e=t.components,r=t.mdxType,a=t.originalType,m=t.parentName,l=p(t,["components","mdxType","originalType","parentName"]),b=s(e),u=r,_=b["".concat(m,".").concat(u)]||b[u]||c[u]||a;return e?i.createElement(_,o(o({ref:n},l),{},{components:e})):i.createElement(_,o({ref:n},l))}));function _(t,n){var e=arguments,r=n&&n.mdxType;if("string"==typeof t||r){var a=e.length,o=new Array(a);o[0]=u;var p={};for(var m in n)hasOwnProperty.call(n,m)&&(p[m]=n[m]);p.originalType=t,p[b]="string"==typeof t?t:r,o[1]=p;for(var s=2;s<a;s++)o[s]=e[s];return i.createElement.apply(null,o)}return i.createElement.apply(null,e)}u.displayName="MDXCreateElement"},62267:(t,n,e)=>{e.r(n),e.d(n,{assets:()=>m,contentTitle:()=>o,default:()=>c,frontMatter:()=>a,metadata:()=>p,toc:()=>s});var i=e(87462),r=(e(67294),e(3905));const a={title:"bitmap_or",language:"en"},o=void 0,p={unversionedId:"sql-manual/sql-functions/bitmap-functions/bitmap_or",id:"version-1.2/sql-manual/sql-functions/bitmap-functions/bitmap_or",title:"bitmap_or",description:"\x3c!--",source:"@site/versioned_docs/version-1.2/sql-manual/sql-functions/bitmap-functions/bitmap_or.md",sourceDirName:"sql-manual/sql-functions/bitmap-functions",slug:"/sql-manual/sql-functions/bitmap-functions/bitmap_or",permalink:"/docs/1.2/sql-manual/sql-functions/bitmap-functions/bitmap_or",draft:!1,tags:[],version:"1.2",frontMatter:{title:"bitmap_or",language:"en"},sidebar:"docs",previous:{title:"bitmap_empty",permalink:"/docs/1.2/sql-manual/sql-functions/bitmap-functions/bitmap_empty"},next:{title:"bitmap_and",permalink:"/docs/1.2/sql-manual/sql-functions/bitmap-functions/bitmap_and"}},m={},s=[{value:"bitmap_or",id:"bitmap_or",level:2},{value:"description",id:"description",level:3},{value:"Syntax",id:"syntax",level:4},{value:"example",id:"example",level:3},{value:"keywords",id:"keywords",level:3}],l={toc:s},b="wrapper";function c(t){let{components:n,...e}=t;return(0,r.kt)(b,(0,i.Z)({},l,e,{components:n,mdxType:"MDXLayout"}),(0,r.kt)("h2",{id:"bitmap_or"},"bitmap_or"),(0,r.kt)("h3",{id:"description"},"description"),(0,r.kt)("h4",{id:"syntax"},"Syntax"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"BITMAP BITMAP_OR(BITMAP lhs, BITMAP rhs, ...)")),(0,r.kt)("p",null,"Compute union of two or more input bitmaps, returns the new bitmap."),(0,r.kt)("h3",{id:"example"},"example"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"mysql> select bitmap_count(bitmap_or(to_bitmap(1), to_bitmap(1))) cnt;\n+------+\n| cnt  |\n+------+\n|    1 |\n+------+\n\nmysql> select bitmap_to_string(bitmap_or(to_bitmap(1), to_bitmap(1))) ;\n+---------------------------------------------------------+\n| bitmap_to_string(bitmap_or(to_bitmap(1), to_bitmap(1))) |\n+---------------------------------------------------------+\n| 1                                                       |\n+---------------------------------------------------------+\n\nmysql> select bitmap_count(bitmap_or(to_bitmap(1), to_bitmap(2))) cnt;\n+------+\n| cnt  |\n+------+\n|    2 |\n+------+\n\nmysql> select bitmap_to_string(bitmap_or(to_bitmap(1), to_bitmap(2)));\n+---------------------------------------------------------+\n| bitmap_to_string(bitmap_or(to_bitmap(1), to_bitmap(2))) |\n+---------------------------------------------------------+\n| 1,2                                                     |\n+---------------------------------------------------------+\n\nmysql> select bitmap_to_string(bitmap_or(to_bitmap(1), to_bitmap(2), to_bitmap(10), to_bitmap(0), NULL));\n+--------------------------------------------------------------------------------------------+\n| bitmap_to_string(bitmap_or(to_bitmap(1), to_bitmap(2), to_bitmap(10), to_bitmap(0), NULL)) |\n+--------------------------------------------------------------------------------------------+\n| 0,1,2,10                                                                                   |\n+--------------------------------------------------------------------------------------------+\n\nmysql> select bitmap_to_string(bitmap_or(to_bitmap(1), to_bitmap(2),to_bitmap(10),to_bitmap(0),bitmap_empty()));\n+------------------------------------------------------------------------------------------------------+\n| bitmap_to_string(bitmap_or(to_bitmap(1), to_bitmap(2), to_bitmap(10), to_bitmap(0), bitmap_empty())) |\n+------------------------------------------------------------------------------------------------------+\n| 0,1,2,10                                                                                             |\n+------------------------------------------------------------------------------------------------------+\n\nmysql> select bitmap_to_string(bitmap_or(to_bitmap(10), bitmap_from_string('1,2'), bitmap_from_string('1,2,3,4,5'))) ;\n+--------------------------------------------------------------------------------------------------------+\n| bitmap_to_string(bitmap_or(to_bitmap(10), bitmap_from_string('1,2'), bitmap_from_string('1,2,3,4,5'))) |\n+--------------------------------------------------------------------------------------------------------+\n| 1,2,3,4,5,10                                                                                           |\n+--------------------------------------------------------------------------------------------------------+\n")),(0,r.kt)("h3",{id:"keywords"},"keywords"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"BITMAP_OR,BITMAP\n")))}c.isMDXComponent=!0}}]);