"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([[10632],{3905:(t,e,n)=>{n.d(e,{Zo:()=>u,kt:()=>b});var r=n(67294);function a(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function i(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function o(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?i(Object(n),!0).forEach((function(e){a(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function l(t,e){if(null==t)return{};var n,r,a=function(t,e){if(null==t)return{};var n,r,a={},i=Object.keys(t);for(r=0;r<i.length;r++)n=i[r],e.indexOf(n)>=0||(a[n]=t[n]);return a}(t,e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);for(r=0;r<i.length;r++)n=i[r],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(a[n]=t[n])}return a}var s=r.createContext({}),p=function(t){var e=r.useContext(s),n=e;return t&&(n="function"==typeof t?t(e):o(o({},e),t)),n},u=function(t){var e=p(t.components);return r.createElement(s.Provider,{value:e},t.children)},c="mdxType",m={inlineCode:"code",wrapper:function(t){var e=t.children;return r.createElement(r.Fragment,{},e)}},d=r.forwardRef((function(t,e){var n=t.components,a=t.mdxType,i=t.originalType,s=t.parentName,u=l(t,["components","mdxType","originalType","parentName"]),c=p(n),d=a,b=c["".concat(s,".").concat(d)]||c[d]||m[d]||i;return n?r.createElement(b,o(o({ref:e},u),{},{components:n})):r.createElement(b,o({ref:e},u))}));function b(t,e){var n=arguments,a=e&&e.mdxType;if("string"==typeof t||a){var i=n.length,o=new Array(i);o[0]=d;var l={};for(var s in e)hasOwnProperty.call(e,s)&&(l[s]=e[s]);l.originalType=t,l[c]="string"==typeof t?t:a,o[1]=l;for(var p=2;p<i;p++)o[p]=n[p];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},34767:(t,e,n)=>{n.r(e),n.d(e,{assets:()=>s,contentTitle:()=>o,default:()=>m,frontMatter:()=>i,metadata:()=>l,toc:()=>p});var r=n(87462),a=(n(67294),n(3905));const i={title:"to_bitmap",language:"en"},o=void 0,l={unversionedId:"sql-manual/sql-functions/bitmap-functions/to_bitmap",id:"sql-manual/sql-functions/bitmap-functions/to_bitmap",title:"to_bitmap",description:"\x3c!--",source:"@site/docs/sql-manual/sql-functions/bitmap-functions/to_bitmap.md",sourceDirName:"sql-manual/sql-functions/bitmap-functions",slug:"/sql-manual/sql-functions/bitmap-functions/to_bitmap",permalink:"/docs/dev/sql-manual/sql-functions/bitmap-functions/to_bitmap",draft:!1,tags:[],version:"current",frontMatter:{title:"to_bitmap",language:"en"},sidebar:"docs",previous:{title:"COUNT_BY_ENUM",permalink:"/docs/dev/sql-manual/sql-functions/aggregate-functions/count_by_enum"},next:{title:"bitmap_hash",permalink:"/docs/dev/sql-manual/sql-functions/bitmap-functions/bitmap_hash"}},s={},p=[{value:"to_bitmap",id:"to_bitmap",level:2},{value:"description",id:"description",level:3},{value:"Syntax",id:"syntax",level:4},{value:"example",id:"example",level:3},{value:"keywords",id:"keywords",level:3}],u={toc:p},c="wrapper";function m(t){let{components:e,...n}=t;return(0,a.kt)(c,(0,r.Z)({},u,n,{components:e,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"to_bitmap"},"to_bitmap"),(0,a.kt)("h3",{id:"description"},"description"),(0,a.kt)("h4",{id:"syntax"},"Syntax"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"BITMAP TO_BITMAP(expr)")),(0,a.kt)("p",null,"Convert an unsigned bigint (ranging from 0 to 18446744073709551615) to a bitmap containing that value.\nNull will be return when the input value is not in this range.\nMainly be used to load integer value into bitmap column, e.g.,"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},'cat data | curl --location-trusted -u user:passwd -T - -H "columns: dt,page,user_id, user_id=to_bitmap(user_id)"   http://host:8410/api/test/testDb/_stream_load\n')),(0,a.kt)("h3",{id:"example"},"example"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"mysql> select bitmap_count(to_bitmap(10));\n+-----------------------------+\n| bitmap_count(to_bitmap(10)) |\n+-----------------------------+\n|                           1 |\n+-----------------------------+\n\nMySQL> select bitmap_to_string(to_bitmap(-1));\n+---------------------------------+\n| bitmap_to_string(to_bitmap(-1)) |\n+---------------------------------+\n|                                 |\n+---------------------------------+\n")),(0,a.kt)("h3",{id:"keywords"},"keywords"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"TO_BITMAP,BITMAP\n")))}m.isMDXComponent=!0}}]);