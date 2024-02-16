"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([[87483],{15680:(e,t,n)=>{n.d(t,{xA:()=>c,yg:()=>f});var a=n(96540);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=a.createContext({}),p=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},c=function(e){var t=p(e.components);return a.createElement(s.Provider,{value:t},e.children)},m="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},b=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,s=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),m=p(n),b=r,f=m["".concat(s,".").concat(b)]||m[b]||u[b]||i;return n?a.createElement(f,l(l({ref:t},c),{},{components:n})):a.createElement(f,l({ref:t},c))}));function f(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,l=new Array(i);l[0]=b;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o[m]="string"==typeof e?e:r,l[1]=o;for(var p=2;p<i;p++)l[p]=n[p];return a.createElement.apply(null,l)}return a.createElement.apply(null,n)}b.displayName="MDXCreateElement"},72899:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>l,default:()=>u,frontMatter:()=>i,metadata:()=>o,toc:()=>p});var a=n(58168),r=(n(96540),n(15680));const i={title:"bitmap_has_all",language:"zh-CN"},l=void 0,o={unversionedId:"sql-manual/sql-functions/bitmap-functions/bitmap_has_all",id:"version-1.2/sql-manual/sql-functions/bitmap-functions/bitmap_has_all",title:"bitmap_has_all",description:"\x3c!--",source:"@site/i18n/zh-CN/docusaurus-plugin-content-docs/version-1.2/sql-manual/sql-functions/bitmap-functions/bitmap_has_all.md",sourceDirName:"sql-manual/sql-functions/bitmap-functions",slug:"/sql-manual/sql-functions/bitmap-functions/bitmap_has_all",permalink:"/zh-CN/docs/1.2/sql-manual/sql-functions/bitmap-functions/bitmap_has_all",draft:!1,tags:[],version:"1.2",frontMatter:{title:"bitmap_has_all",language:"zh-CN"},sidebar:"docs",previous:{title:"bitmap_contains",permalink:"/zh-CN/docs/1.2/sql-manual/sql-functions/bitmap-functions/bitmap_contains"},next:{title:"bitmap_has_any",permalink:"/zh-CN/docs/1.2/sql-manual/sql-functions/bitmap-functions/bitmap_has_any"}},s={},p=[{value:"bitmap_has_all",id:"bitmap_has_all",level:2},{value:"description",id:"description",level:3},{value:"Syntax",id:"syntax",level:4},{value:"example",id:"example",level:3},{value:"keywords",id:"keywords",level:3}],c={toc:p},m="wrapper";function u(e){let{components:t,...n}=e;return(0,r.yg)(m,(0,a.A)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,r.yg)("h2",{id:"bitmap_has_all"},"bitmap_has_all"),(0,r.yg)("h3",{id:"description"},"description"),(0,r.yg)("h4",{id:"syntax"},"Syntax"),(0,r.yg)("p",null,(0,r.yg)("inlineCode",{parentName:"p"},"BOOLEAN BITMAP_HAS_ALL(BITMAP lhs, BITMAP rhs)")),(0,r.yg)("p",null,"\u5982\u679c\u7b2c\u4e00\u4e2abitmap\u5305\u542b\u7b2c\u4e8c\u4e2abitmap\u7684\u5168\u90e8\u5143\u7d20\uff0c\u5219\u8fd4\u56detrue\u3002\n\u5982\u679c\u7b2c\u4e8c\u4e2abitmap\u5305\u542b\u7684\u5143\u7d20\u4e3a\u7a7a\uff0c\u8fd4\u56detrue\u3002"),(0,r.yg)("h3",{id:"example"},"example"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre"},"mysql> select bitmap_has_all(bitmap_from_string(\"0, 1, 2\"), bitmap_from_string(\"1, 2\"));\n+---------------------------------------------------------------------------+\n| bitmap_has_all(bitmap_from_string('0, 1, 2'), bitmap_from_string('1, 2')) |\n+---------------------------------------------------------------------------+\n|                                                                         1 |\n+---------------------------------------------------------------------------+\n\nmysql> select bitmap_has_all(bitmap_empty(), bitmap_from_string(\"1, 2\"));\n+------------------------------------------------------------+\n| bitmap_has_all(bitmap_empty(), bitmap_from_string('1, 2')) |\n+------------------------------------------------------------+\n|                                                          0 |\n+------------------------------------------------------------+\n")),(0,r.yg)("h3",{id:"keywords"},"keywords"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre"},"BITMAP_HAS_ALL,BITMAP\n")))}u.isMDXComponent=!0}}]);