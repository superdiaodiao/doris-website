"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([[89144],{15680:(e,t,n)=>{n.d(t,{xA:()=>s,yg:()=>d});var r=n(96540);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var p=r.createContext({}),u=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},s=function(e){var t=u(e.components);return r.createElement(p.Provider,{value:t},e.children)},c="mdxType",g={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,p=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),c=u(n),m=a,d=c["".concat(p,".").concat(m)]||c[m]||g[m]||o;return n?r.createElement(d,i(i({ref:t},s),{},{components:n})):r.createElement(d,i({ref:t},s))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=m;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l[c]="string"==typeof e?e:a,i[1]=l;for(var u=2;u<o;u++)i[u]=n[u];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},14435:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>i,default:()=>g,frontMatter:()=>o,metadata:()=>l,toc:()=>u});var r=n(58168),a=(n(96540),n(15680));const o={title:"GROUP_BITMAP_XOR",language:"en"},i=void 0,l={unversionedId:"sql-manual/sql-functions/aggregate-functions/group-bitmap-xor",id:"sql-manual/sql-functions/aggregate-functions/group-bitmap-xor",title:"GROUP_BITMAP_XOR",description:"\x3c!--",source:"@site/docs/sql-manual/sql-functions/aggregate-functions/group-bitmap-xor.md",sourceDirName:"sql-manual/sql-functions/aggregate-functions",slug:"/sql-manual/sql-functions/aggregate-functions/group-bitmap-xor",permalink:"/docs/dev/sql-manual/sql-functions/aggregate-functions/group-bitmap-xor",draft:!1,tags:[],version:"current",frontMatter:{title:"GROUP_BITMAP_XOR",language:"en"},sidebar:"docs",previous:{title:"BITMAP_UNION",permalink:"/docs/dev/sql-manual/sql-functions/aggregate-functions/bitmap-union"},next:{title:"GROUP_BIT_AND",permalink:"/docs/dev/sql-manual/sql-functions/aggregate-functions/group-bit-and"}},p={},u=[{value:"group_bitmap_xor",id:"group_bitmap_xor",level:2},{value:"description",id:"description",level:3},{value:"Syntax",id:"syntax",level:4},{value:"example",id:"example",level:3},{value:"keywords",id:"keywords",level:3}],s={toc:u},c="wrapper";function g(e){let{components:t,...n}=e;return(0,a.yg)(c,(0,r.A)({},s,n,{components:t,mdxType:"MDXLayout"}),(0,a.yg)("h2",{id:"group_bitmap_xor"},"group_bitmap_xor"),(0,a.yg)("h3",{id:"description"},"description"),(0,a.yg)("h4",{id:"syntax"},"Syntax"),(0,a.yg)("p",null,(0,a.yg)("inlineCode",{parentName:"p"},"BITMAP GROUP_BITMAP_XOR(expr)")),(0,a.yg)("p",null,"Perform an xor calculation on expr, and return a new bitmap."),(0,a.yg)("h3",{id:"example"},"example"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre"},"mysql>  select page, bitmap_to_string(user_id) from pv_bitmap;\n+------+-----------------------------+\n| page | bitmap_to_string(`user_id`) |\n+------+-----------------------------+\n| m    | 4,7,8                       |\n| m    | 1,3,6,15                    |\n| m    | 4,7                         |\n+------+-----------------------------+\n\nmysql> select page, bitmap_to_string(group_bitmap_xor(user_id)) from pv_bitmap group by page;\n+------+-----------------------------------------------+\n| page | bitmap_to_string(group_bitmap_xor(`user_id`)) |\n+------+-----------------------------------------------+\n| m    | 1,3,6,8,15                                    |\n+------+-----------------------------------------------+\n")),(0,a.yg)("h3",{id:"keywords"},"keywords"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre"},"GROUP_BITMAP_XOR,BITMAP\n")))}g.isMDXComponent=!0}}]);