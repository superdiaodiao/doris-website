"use strict";(self.webpackChunkselectdb_portal=self.webpackChunkselectdb_portal||[]).push([[26573],{3905:(t,e,n)=>{n.d(e,{Zo:()=>u,kt:()=>_});var r=n(67294);function o(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function a(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function i(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?a(Object(n),!0).forEach((function(e){o(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function l(t,e){if(null==t)return{};var n,r,o=function(t,e){if(null==t)return{};var n,r,o={},a=Object.keys(t);for(r=0;r<a.length;r++)n=a[r],e.indexOf(n)>=0||(o[n]=t[n]);return o}(t,e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);for(r=0;r<a.length;r++)n=a[r],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(o[n]=t[n])}return o}var c=r.createContext({}),s=function(t){var e=r.useContext(c),n=e;return t&&(n="function"==typeof t?t(e):i(i({},e),t)),n},u=function(t){var e=s(t.components);return r.createElement(c.Provider,{value:e},t.children)},p="mdxType",m={inlineCode:"code",wrapper:function(t){var e=t.children;return r.createElement(r.Fragment,{},e)}},f=r.forwardRef((function(t,e){var n=t.components,o=t.mdxType,a=t.originalType,c=t.parentName,u=l(t,["components","mdxType","originalType","parentName"]),p=s(n),f=o,_=p["".concat(c,".").concat(f)]||p[f]||m[f]||a;return n?r.createElement(_,i(i({ref:e},u),{},{components:n})):r.createElement(_,i({ref:e},u))}));function _(t,e){var n=arguments,o=e&&e.mdxType;if("string"==typeof t||o){var a=n.length,i=new Array(a);i[0]=f;var l={};for(var c in e)hasOwnProperty.call(e,c)&&(l[c]=e[c]);l.originalType=t,l[p]="string"==typeof t?t:o,i[1]=l;for(var s=2;s<a;s++)i[s]=n[s];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}f.displayName="MDXCreateElement"},71376:(t,e,n)=>{n.r(e),n.d(e,{assets:()=>c,contentTitle:()=>i,default:()=>p,frontMatter:()=>a,metadata:()=>l,toc:()=>s});var r=n(87462),o=(n(67294),n(3905));const a={title:"orthogonal_bitmap_intersect_count",language:"zh-CN"},i=void 0,l={unversionedId:"sql-manual/sql-functions/bitmap-functions/orthogonal_bitmap_intersect_count",id:"sql-manual/sql-functions/bitmap-functions/orthogonal_bitmap_intersect_count",title:"orthogonal_bitmap_intersect_count",description:"\x3c!--",source:"@site/i18n/zh-CN/docusaurus-plugin-content-docs/current/sql-manual/sql-functions/bitmap-functions/orthogonal_bitmap_intersect_count.md",sourceDirName:"sql-manual/sql-functions/bitmap-functions",slug:"/sql-manual/sql-functions/bitmap-functions/orthogonal_bitmap_intersect_count",permalink:"/zh-CN/docs/sql-manual/sql-functions/bitmap-functions/orthogonal_bitmap_intersect_count",draft:!1,tags:[],version:"current",frontMatter:{title:"orthogonal_bitmap_intersect_count",language:"zh-CN"},sidebar:"docs",previous:{title:"orthogonal_bitmap_intersect",permalink:"/zh-CN/docs/sql-manual/sql-functions/bitmap-functions/orthogonal_bitmap_intersect"},next:{title:"bitand",permalink:"/zh-CN/docs/sql-manual/sql-functions/bitwise-functions/bitand"}},c={},s=[{value:"orthogonal_bitmap_intersect_count",id:"orthogonal_bitmap_intersect_count",level:2},{value:"description",id:"description",level:3},{value:"Syntax",id:"syntax",level:4},{value:"example",id:"example",level:3},{value:"keywords",id:"keywords",level:3}],u={toc:s};function p(t){let{components:e,...n}=t;return(0,o.kt)("wrapper",(0,r.Z)({},u,n,{components:e,mdxType:"MDXLayout"}),(0,o.kt)("h2",{id:"orthogonal_bitmap_intersect_count"},"orthogonal_bitmap_intersect_count"),(0,o.kt)("h3",{id:"description"},"description"),(0,o.kt)("h4",{id:"syntax"},"Syntax"),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"BITMAP ORTHOGONAL_BITMAP_INTERSECT_COUNT(bitmap_column, column_to_filter, filter_values)"),"\n\u6c42bitmap\u4ea4\u96c6\u5927\u5c0f\u7684\u51fd\u6570, \u7b2c\u4e00\u4e2a\u53c2\u6570\u662fBitmap\u5217\uff0c\u7b2c\u4e8c\u4e2a\u53c2\u6570\u662f\u7528\u6765\u8fc7\u6ee4\u7684\u7ef4\u5ea6\u5217\uff0c\u7b2c\u4e09\u4e2a\u53c2\u6570\u662f\u53d8\u957f\u53c2\u6570\uff0c\u542b\u4e49\u662f\u8fc7\u6ee4\u7ef4\u5ea6\u5217\u7684\u4e0d\u540c\u53d6\u503c"),(0,o.kt)("h3",{id:"example"},"example"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"mysql> select orthogonal_bitmap_intersect_count(members, tag_group, 1150000, 1150001, 390006) from tag_map where  tag_group in ( 1150000, 1150001, 390006);\n+-------------------------------------------------------------------------------------+\n| orthogonal_bitmap_intersect_count(`members`, `tag_group`, 1150000, 1150001, 390006) |\n+-------------------------------------------------------------------------------------+\n|                                                                                   0 |\n+-------------------------------------------------------------------------------------+\n1 row in set (3.382 sec)\n")),(0,o.kt)("h3",{id:"keywords"},"keywords"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"ORTHOGONAL_BITMAP_INTERSECT_COUNT,BITMAP\n")))}p.isMDXComponent=!0}}]);