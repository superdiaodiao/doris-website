"use strict";(self.webpackChunkselectdb_portal=self.webpackChunkselectdb_portal||[]).push([[651],{3905:(e,t,r)=>{r.d(t,{Zo:()=>c,kt:()=>f});var n=r(67294);function i(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){i(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,i=function(e,t){if(null==e)return{};var r,n,i={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(i[r]=e[r]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(i[r]=e[r])}return i}var s=n.createContext({}),p=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):a(a({},t),e)),r},c=function(e){var t=p(e.components);return n.createElement(s.Provider,{value:t},e.children)},m="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,i=e.mdxType,o=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),m=p(r),d=i,f=m["".concat(s,".").concat(d)]||m[d]||u[d]||o;return r?n.createElement(f,a(a({ref:t},c),{},{components:r})):n.createElement(f,a({ref:t},c))}));function f(e,t){var r=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=r.length,a=new Array(o);a[0]=d;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[m]="string"==typeof e?e:i,a[1]=l;for(var p=2;p<o;p++)a[p]=r[p];return n.createElement.apply(null,a)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},6928:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>s,contentTitle:()=>a,default:()=>m,frontMatter:()=>o,metadata:()=>l,toc:()=>p});var n=r(87462),i=(r(67294),r(3905));const o={title:"ADMIN REPAIR",language:"en"},a=void 0,l={unversionedId:"sql-reference/sql-statements/Administration/ADMIN-REPAIR",id:"version-0.15/sql-reference/sql-statements/Administration/ADMIN-REPAIR",title:"ADMIN REPAIR",description:"\x3c!--",source:"@site/versioned_docs/version-0.15/sql-reference/sql-statements/Administration/ADMIN-REPAIR.md",sourceDirName:"sql-reference/sql-statements/Administration",slug:"/sql-reference/sql-statements/Administration/ADMIN-REPAIR",permalink:"/docs/0.15/sql-reference/sql-statements/Administration/ADMIN-REPAIR",draft:!1,tags:[],version:"0.15",frontMatter:{title:"ADMIN REPAIR",language:"en"},sidebar:"docs",previous:{title:"ADMIN CHECK TABLET",permalink:"/docs/0.15/sql-reference/sql-statements/Administration/ADMIN-CHECK-TABLET"},next:{title:"ADMIN SET CONFIG",permalink:"/docs/0.15/sql-reference/sql-statements/Administration/ADMIN-SET-CONFIG"}},s={},p=[{value:"Description",id:"description",level:2},{value:"example",id:"example",level:2},{value:"keyword",id:"keyword",level:2}],c={toc:p};function m(e){let{components:t,...r}=e;return(0,i.kt)("wrapper",(0,n.Z)({},c,r,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"admin-repair"},"ADMIN REPAIR"),(0,i.kt)("h2",{id:"description"},"Description"),(0,i.kt)("p",null,"This statement is used to try to fix the specified table or partition first"),(0,i.kt)("p",null,"Grammar:"),(0,i.kt)("p",null,"ADMIN REPAIR TABLE table_name","[ PARTITION (p1,...)]"),(0,i.kt)("p",null,"Explain:"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"This statement only means that the system attempts to repair a fragmented copy of a specified table or partition with high priority, and it is not guaranteed to be successful. Users can view the repair status through the ADMIN SHOW REPLICA STATUS command."),(0,i.kt)("li",{parentName:"ol"},"The default timeout is 14400 seconds (4 hours). Timeout means that the system will no longer repair fragmented copies of specified tables or partitions with high priority. The command settings need to be reused.")),(0,i.kt)("h2",{id:"example"},"example"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"Attempt to fix the specified table")),(0,i.kt)("p",null,"ADMIN REPAIR TABLE tbl1;"),(0,i.kt)("ol",{start:2},(0,i.kt)("li",{parentName:"ol"},"Attempt to fix the specified partition")),(0,i.kt)("p",null,"ADMIN REPAIR TABLE tbl1 PARTITION (p1, p2);"),(0,i.kt)("h2",{id:"keyword"},"keyword"),(0,i.kt)("p",null,"ADMIN,REPAIR"))}m.isMDXComponent=!0}}]);