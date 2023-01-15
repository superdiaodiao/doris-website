"use strict";(self.webpackChunkselectdb_portal=self.webpackChunkselectdb_portal||[]).push([[56880],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>A});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var c=r.createContext({}),s=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=s(e.components);return r.createElement(c.Provider,{value:t},e.children)},u="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,l=e.originalType,c=e.parentName,p=o(e,["components","mdxType","originalType","parentName"]),u=s(n),d=a,A=u["".concat(c,".").concat(d)]||u[d]||m[d]||l;return n?r.createElement(A,i(i({ref:t},p),{},{components:n})):r.createElement(A,i({ref:t},p))}));function A(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=n.length,i=new Array(l);i[0]=d;var o={};for(var c in t)hasOwnProperty.call(t,c)&&(o[c]=t[c]);o.originalType=e,o[u]="string"==typeof e?e:a,i[1]=o;for(var s=2;s<l;s++)i[s]=n[s];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},33795:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>i,default:()=>u,frontMatter:()=>l,metadata:()=>o,toc:()=>s});var r=n(87462),a=(n(67294),n(3905));const l={title:"ADMIN-CANCEL-REPAIR",language:"zh-CN"},i=void 0,o={unversionedId:"sql-manual/sql-reference/Database-Administration-Statements/ADMIN-CANCEL-REPAIR",id:"sql-manual/sql-reference/Database-Administration-Statements/ADMIN-CANCEL-REPAIR",title:"ADMIN-CANCEL-REPAIR",description:"\x3c!--",source:"@site/i18n/zh-CN/docusaurus-plugin-content-docs/current/sql-manual/sql-reference/Database-Administration-Statements/ADMIN-CANCEL-REPAIR.md",sourceDirName:"sql-manual/sql-reference/Database-Administration-Statements",slug:"/sql-manual/sql-reference/Database-Administration-Statements/ADMIN-CANCEL-REPAIR",permalink:"/zh-CN/docs/sql-manual/sql-reference/Database-Administration-Statements/ADMIN-CANCEL-REPAIR",draft:!1,tags:[],version:"current",frontMatter:{title:"ADMIN-CANCEL-REPAIR",language:"zh-CN"},sidebar:"docs",previous:{title:"OUTFILE",permalink:"/zh-CN/docs/sql-manual/sql-reference/Data-Manipulation-Statements/OUTFILE"},next:{title:"ADMIN-CHECK-TABLET",permalink:"/zh-CN/docs/sql-manual/sql-reference/Database-Administration-Statements/ADMIN-CHECK-TABLET"}},c={},s=[{value:"ADMIN-CANCEL-REPAIR",id:"admin-cancel-repair",level:2},{value:"Name",id:"name",level:3},{value:"Description",id:"description",level:3},{value:"Example",id:"example",level:3},{value:"Keywords",id:"keywords",level:3},{value:"Best Practice",id:"best-practice",level:3}],p={toc:s};function u(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"admin-cancel-repair"},"ADMIN-CANCEL-REPAIR"),(0,a.kt)("h3",{id:"name"},"Name"),(0,a.kt)("p",null,"ADMIN CANCEL REPAIR"),(0,a.kt)("h3",{id:"description"},"Description"),(0,a.kt)("p",null,"\u8be5\u8bed\u53e5\u7528\u4e8e\u53d6\u6d88\u4ee5\u9ad8\u4f18\u5148\u7ea7\u4fee\u590d\u6307\u5b9a\u8868\u6216\u5206\u533a"),(0,a.kt)("p",null,"\u8bed\u6cd5\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sql"},"ADMIN CANCEL REPAIR TABLE table_name[ PARTITION (p1,...)];\n")),(0,a.kt)("p",null,"\u8bf4\u660e\uff1a"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"\u8be5\u8bed\u53e5\u4ec5\u8868\u793a\u7cfb\u7edf\u4e0d\u518d\u4ee5\u9ad8\u4f18\u5148\u7ea7\u4fee\u590d\u6307\u5b9a\u8868\u6216\u5206\u533a\u7684\u5206\u7247\u526f\u672c\u3002\u7cfb\u7edf\u4ecd\u4f1a\u4ee5\u9ed8\u8ba4\u8c03\u5ea6\u65b9\u5f0f\u4fee\u590d\u526f\u672c\u3002")),(0,a.kt)("h3",{id:"example"},"Example"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"\u53d6\u6d88\u9ad8\u4f18\u5148\u7ea7\u4fee\u590d"),(0,a.kt)("pre",{parentName:"li"},(0,a.kt)("code",{parentName:"pre",className:"language-sql"}," ADMIN CANCEL REPAIR TABLE tbl PARTITION(p1);\n")))),(0,a.kt)("h3",{id:"keywords"},"Keywords"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"ADMIN, CANCEL, REPAIR\n")),(0,a.kt)("h3",{id:"best-practice"},"Best Practice"))}u.isMDXComponent=!0}}]);