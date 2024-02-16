"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([[77460],{15680:(e,t,n)=>{n.d(t,{xA:()=>c,yg:()=>b});var r=n(96540);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=r.createContext({}),p=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},c=function(e){var t=p(e.components);return r.createElement(s.Provider,{value:t},e.children)},m="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},f=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,s=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),m=p(n),f=a,b=m["".concat(s,".").concat(f)]||m[f]||u[f]||i;return n?r.createElement(b,l(l({ref:t},c),{},{components:n})):r.createElement(b,l({ref:t},c))}));function b(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,l=new Array(i);l[0]=f;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o[m]="string"==typeof e?e:a,l[1]=o;for(var p=2;p<i;p++)l[p]=n[p];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}f.displayName="MDXCreateElement"},29753:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>l,default:()=>u,frontMatter:()=>i,metadata:()=>o,toc:()=>p});var r=n(58168),a=(n(96540),n(15680));const i={title:"BITMAP_HAS_ALL",language:"en"},l=void 0,o={unversionedId:"sql-manual/sql-functions/bitmap-functions/bitmap-has-all",id:"sql-manual/sql-functions/bitmap-functions/bitmap-has-all",title:"BITMAP_HAS_ALL",description:"\x3c!--",source:"@site/docs/sql-manual/sql-functions/bitmap-functions/bitmap-has-all.md",sourceDirName:"sql-manual/sql-functions/bitmap-functions",slug:"/sql-manual/sql-functions/bitmap-functions/bitmap-has-all",permalink:"/docs/dev/sql-manual/sql-functions/bitmap-functions/bitmap-has-all",draft:!1,tags:[],version:"current",frontMatter:{title:"BITMAP_HAS_ALL",language:"en"},sidebar:"docs",previous:{title:"BITMAP_CONTAINS",permalink:"/docs/dev/sql-manual/sql-functions/bitmap-functions/bitmap-contains"},next:{title:"BITMAP_HAS_ANY",permalink:"/docs/dev/sql-manual/sql-functions/bitmap-functions/bitmap-has-any"}},s={},p=[{value:"bitmap_has_all",id:"bitmap_has_all",level:2},{value:"description",id:"description",level:3},{value:"Syntax",id:"syntax",level:4},{value:"example",id:"example",level:3},{value:"keywords",id:"keywords",level:3}],c={toc:p},m="wrapper";function u(e){let{components:t,...n}=e;return(0,a.yg)(m,(0,r.A)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,a.yg)("h2",{id:"bitmap_has_all"},"bitmap_has_all"),(0,a.yg)("h3",{id:"description"},"description"),(0,a.yg)("h4",{id:"syntax"},"Syntax"),(0,a.yg)("p",null,(0,a.yg)("inlineCode",{parentName:"p"},"BOOLEAN BITMAP_HAS_ALL(BITMAP lhs, BITMAP rhs)")),(0,a.yg)("p",null,"Returns true if the first bitmap contains all the elements of the second bitmap.\nReturns true if the second bitmap contains an empty element."),(0,a.yg)("h3",{id:"example"},"example"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre"},"mysql> select bitmap_has_all(bitmap_from_string(\"0, 1, 2\"), bitmap_from_string(\"1, 2\"));\n+---------------------------------------------------------------------------+\n| bitmap_has_all(bitmap_from_string('0, 1, 2'), bitmap_from_string('1, 2')) |\n+---------------------------------------------------------------------------+\n|                                                                         1 |\n+---------------------------------------------------------------------------+\n\nmysql> select bitmap_has_all(bitmap_empty(), bitmap_from_string(\"1, 2\"));\n+------------------------------------------------------------+\n| bitmap_has_all(bitmap_empty(), bitmap_from_string('1, 2')) |\n+------------------------------------------------------------+\n|                                                          0 |\n+------------------------------------------------------------+\n")),(0,a.yg)("h3",{id:"keywords"},"keywords"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre"},"BITMAP_HAS_ALL,BITMAP\n")))}u.isMDXComponent=!0}}]);