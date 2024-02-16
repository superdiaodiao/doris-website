"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([[15656],{15680:(e,t,n)=>{n.d(t,{xA:()=>c,yg:()=>f});var r=n(96540);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var p=r.createContext({}),s=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},c=function(e){var t=s(e.components);return r.createElement(p.Provider,{value:t},e.children)},u="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},y=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,p=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),u=s(n),y=a,f=u["".concat(p,".").concat(y)]||u[y]||m[y]||i;return n?r.createElement(f,o(o({ref:t},c),{},{components:n})):r.createElement(f,o({ref:t},c))}));function f(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=y;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l[u]="string"==typeof e?e:a,o[1]=l;for(var s=2;s<i;s++)o[s]=n[s];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}y.displayName="MDXCreateElement"},8971:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>o,default:()=>m,frontMatter:()=>i,metadata:()=>l,toc:()=>s});var r=n(58168),a=(n(96540),n(15680));const i={title:"BITMAP_TO_ARRAY",language:"zh-CN"},o=void 0,l={unversionedId:"sql-manual/sql-functions/bitmap-functions/bitmap-to-array",id:"sql-manual/sql-functions/bitmap-functions/bitmap-to-array",title:"BITMAP_TO_ARRAY",description:"\x3c!--",source:"@site/i18n/zh-CN/docusaurus-plugin-content-docs/current/sql-manual/sql-functions/bitmap-functions/bitmap-to-array.md",sourceDirName:"sql-manual/sql-functions/bitmap-functions",slug:"/sql-manual/sql-functions/bitmap-functions/bitmap-to-array",permalink:"/zh-CN/docs/dev/sql-manual/sql-functions/bitmap-functions/bitmap-to-array",draft:!1,tags:[],version:"current",frontMatter:{title:"BITMAP_TO_ARRAY",language:"zh-CN"},sidebar:"docs",previous:{title:"BITMAP_TO_STRING",permalink:"/zh-CN/docs/dev/sql-manual/sql-functions/bitmap-functions/bitmap-to-string"},next:{title:"BITMAP_FROM_ARRAY",permalink:"/zh-CN/docs/dev/sql-manual/sql-functions/bitmap-functions/bitmap-from-array"}},p={},s=[{value:"bitmap_to_array",id:"bitmap_to_array",level:2},{value:"description",id:"description",level:3},{value:"Syntax",id:"syntax",level:4},{value:"example",id:"example",level:3},{value:"keywords",id:"keywords",level:3}],c={toc:s},u="wrapper";function m(e){let{components:t,...n}=e;return(0,a.yg)(u,(0,r.A)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,a.yg)("h2",{id:"bitmap_to_array"},"bitmap_to_array"),(0,a.yg)("h3",{id:"description"},"description"),(0,a.yg)("h4",{id:"syntax"},"Syntax"),(0,a.yg)("p",null,(0,a.yg)("inlineCode",{parentName:"p"},"ARRAY_BIGINT bitmap_to_array(BITMAP input)")),(0,a.yg)("p",null,"\u5c06\u4e00\u4e2abitmap\u8f6c\u5316\u6210\u4e00\u4e2aarray \u6570\u7ec4\u3002\n\u8f93\u5165\u662fnull\u7684\u8bdd\u4f1a\u8fd4\u56denull\u3002"),(0,a.yg)("h3",{id:"example"},"example"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre"},"mysql> select bitmap_to_array(null);\n+------------------------+\n| bitmap_to_array(NULL)  |\n+------------------------+\n| NULL                   |\n+------------------------+\n\nmysql> select bitmap_to_array(bitmap_empty());\n+---------------------------------+\n| bitmap_to_array(bitmap_empty()) |\n+---------------------------------+\n| []                              |\n+---------------------------------+\n\nmysql> select bitmap_to_array(to_bitmap(1));\n+-------------------------------+\n| bitmap_to_array(to_bitmap(1)) |\n+-------------------------------+\n| [1]                           |\n+-------------------------------+\n\nmysql> select bitmap_to_array(bitmap_from_string('1,2,3,4,5'));\n+--------------------------------------------------+\n| bitmap_to_array(bitmap_from_string('1,2,3,4,5')) |\n+--------------------------------------------------+\n| [1, 2, 3, 4, 5]                                  |\n+--------------------------------------------------\n\n")),(0,a.yg)("h3",{id:"keywords"},"keywords"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre"},"BITMAP_TO_ARRAY,BITMAP\n")))}m.isMDXComponent=!0}}]);