"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([[3858],{3905:(t,e,n)=>{n.d(e,{Zo:()=>s,kt:()=>f});var r=n(67294);function o(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function a(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function i(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?a(Object(n),!0).forEach((function(e){o(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function l(t,e){if(null==t)return{};var n,r,o=function(t,e){if(null==t)return{};var n,r,o={},a=Object.keys(t);for(r=0;r<a.length;r++)n=a[r],e.indexOf(n)>=0||(o[n]=t[n]);return o}(t,e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);for(r=0;r<a.length;r++)n=a[r],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(o[n]=t[n])}return o}var c=r.createContext({}),u=function(t){var e=r.useContext(c),n=e;return t&&(n="function"==typeof t?t(e):i(i({},e),t)),n},s=function(t){var e=u(t.components);return r.createElement(c.Provider,{value:e},t.children)},p="mdxType",m={inlineCode:"code",wrapper:function(t){var e=t.children;return r.createElement(r.Fragment,{},e)}},d=r.forwardRef((function(t,e){var n=t.components,o=t.mdxType,a=t.originalType,c=t.parentName,s=l(t,["components","mdxType","originalType","parentName"]),p=u(n),d=o,f=p["".concat(c,".").concat(d)]||p[d]||m[d]||a;return n?r.createElement(f,i(i({ref:e},s),{},{components:n})):r.createElement(f,i({ref:e},s))}));function f(t,e){var n=arguments,o=e&&e.mdxType;if("string"==typeof t||o){var a=n.length,i=new Array(a);i[0]=d;var l={};for(var c in e)hasOwnProperty.call(e,c)&&(l[c]=e[c]);l.originalType=t,l[p]="string"==typeof t?t:o,i[1]=l;for(var u=2;u<a;u++)i[u]=n[u];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},67039:(t,e,n)=>{n.r(e),n.d(e,{assets:()=>c,contentTitle:()=>i,default:()=>m,frontMatter:()=>a,metadata:()=>l,toc:()=>u});var r=n(87462),o=(n(67294),n(3905));const a={title:"BITMAP_AND_NOT_COUNT,BITMAP_ANDNOT_COUNT",language:"en"},i=void 0,l={unversionedId:"sql-manual/sql-functions/bitmap-functions/bitmap-and-not-count",id:"sql-manual/sql-functions/bitmap-functions/bitmap-and-not-count",title:"BITMAP_AND_NOT_COUNT,BITMAP_ANDNOT_COUNT",description:"\x3c!--",source:"@site/docs/sql-manual/sql-functions/bitmap-functions/bitmap-and-not-count.md",sourceDirName:"sql-manual/sql-functions/bitmap-functions",slug:"/sql-manual/sql-functions/bitmap-functions/bitmap-and-not-count",permalink:"/docs/dev/sql-manual/sql-functions/bitmap-functions/bitmap-and-not-count",draft:!1,tags:[],version:"current",frontMatter:{title:"BITMAP_AND_NOT_COUNT,BITMAP_ANDNOT_COUNT",language:"en"},sidebar:"docs",previous:{title:"BITMAP_AND_COUNT",permalink:"/docs/dev/sql-manual/sql-functions/bitmap-functions/bitmap-and-count"},next:{title:"ORTHOGONAL_BITMAP_UNION_COUNT",permalink:"/docs/dev/sql-manual/sql-functions/bitmap-functions/orthogonal-bitmap-union-count"}},c={},u=[{value:"bitmap_and_not_count,bitmap_andnot_count",id:"bitmap_and_not_countbitmap_andnot_count",level:2},{value:"description",id:"description",level:3},{value:"Syntax",id:"syntax",level:4},{value:"example",id:"example",level:3},{value:"keywords",id:"keywords",level:3}],s={toc:u},p="wrapper";function m(t){let{components:e,...n}=t;return(0,o.kt)(p,(0,r.Z)({},s,n,{components:e,mdxType:"MDXLayout"}),(0,o.kt)("h2",{id:"bitmap_and_not_countbitmap_andnot_count"},"bitmap_and_not_count,bitmap_andnot_count"),(0,o.kt)("h3",{id:"description"},"description"),(0,o.kt)("h4",{id:"syntax"},"Syntax"),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"BITMAP BITMAP_AND_NOT_COUNT(BITMAP lhs, BITMAP rhs)")),(0,o.kt)("p",null,"Calculate the set after lhs minus intersection of two input bitmaps, return the new bitmap size."),(0,o.kt)("h3",{id:"example"},"example"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"mysql> select bitmap_and_not_count(bitmap_from_string('1,2,3'),bitmap_from_string('3,4,5')) cnt;\n+------+\n| cnt  |\n+------+\n|    2 |\n+------+\n")),(0,o.kt)("h3",{id:"keywords"},"keywords"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"BITMAP_AND_NOT_COUNT,BITMAP_ANDNOT_COUNT,BITMAP\n")))}m.isMDXComponent=!0}}]);