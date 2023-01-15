"use strict";(self.webpackChunkselectdb_portal=self.webpackChunkselectdb_portal||[]).push([[81339],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>f});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=r.createContext({}),i=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},p=function(e){var t=i(e.components);return r.createElement(s.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),u=i(n),m=a,f=u["".concat(s,".").concat(m)]||u[m]||d[m]||o;return n?r.createElement(f,c(c({ref:t},p),{},{components:n})):r.createElement(f,c({ref:t},p))}));function f(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,c=new Array(o);c[0]=m;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[u]="string"==typeof e?e:a,c[1]=l;for(var i=2;i<o;i++)c[i]=n[i];return r.createElement.apply(null,c)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},87657:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>c,default:()=>u,frontMatter:()=>o,metadata:()=>l,toc:()=>i});var r=n(87462),a=(n(67294),n(3905));const o={title:"SHOW GRANTS",language:"zh-CN"},c=void 0,l={unversionedId:"sql-reference/sql-statements/Account-Management/SHOW-GRANTS",id:"version-0.15/sql-reference/sql-statements/Account-Management/SHOW-GRANTS",title:"SHOW GRANTS",description:"\x3c!--",source:"@site/i18n/zh-CN/docusaurus-plugin-content-docs/version-0.15/sql-reference/sql-statements/Account-Management/SHOW-GRANTS.md",sourceDirName:"sql-reference/sql-statements/Account-Management",slug:"/sql-reference/sql-statements/Account-Management/SHOW-GRANTS",permalink:"/zh-CN/docs/0.15/sql-reference/sql-statements/Account-Management/SHOW-GRANTS",draft:!1,tags:[],version:"0.15",frontMatter:{title:"SHOW GRANTS",language:"zh-CN"},sidebar:"docs",previous:{title:"SET PROPERTY",permalink:"/zh-CN/docs/0.15/sql-reference/sql-statements/Account-Management/SET-PROPERTY"},next:{title:"SHOW ROLES",permalink:"/zh-CN/docs/0.15/sql-reference/sql-statements/Account-Management/SHOW-ROLES"}},s={},i=[{value:"description",id:"description",level:2},{value:"example",id:"example",level:2},{value:"keyword",id:"keyword",level:2}],p={toc:i};function u(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"show-grants"},"SHOW GRANTS"),(0,a.kt)("h2",{id:"description"},"description"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"\u8be5\u8bed\u53e5\u7528\u4e8e\u67e5\u770b\u7528\u6237\u6743\u9650\u3002\n\n\u8bed\u6cd5\uff1a\n    SHOW [ALL] GRANTS [FOR user_identity];\n    \n\u8bf4\u660e\uff1a\n    1. SHOW ALL GRANTS \u53ef\u4ee5\u67e5\u770b\u6240\u6709\u7528\u6237\u7684\u6743\u9650\u3002\n    2. \u5982\u679c\u6307\u5b9a user_identity\uff0c\u5219\u67e5\u770b\u8be5\u6307\u5b9a\u7528\u6237\u7684\u6743\u9650\u3002\u4e14\u8be5 user_identity \u5fc5\u987b\u4e3a\u901a\u8fc7 CREATE USER \u547d\u4ee4\u521b\u5efa\u7684\u3002\n    3. \u5982\u679c\u4e0d\u6307\u5b9a user_identity\uff0c\u5219\u67e5\u770b\u5f53\u524d\u7528\u6237\u7684\u6743\u9650\u3002\n\n    \n")),(0,a.kt)("h2",{id:"example"},"example"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"1. \u67e5\u770b\u6240\u6709\u7528\u6237\u6743\u9650\u4fe1\u606f\n\n    SHOW ALL GRANTS;\n    \n2. \u67e5\u770b\u6307\u5b9a user \u7684\u6743\u9650\n\n    SHOW GRANTS FOR jack@'%';\n    \n3. \u67e5\u770b\u5f53\u524d\u7528\u6237\u7684\u6743\u9650\n\n    SHOW GRANTS;\n")),(0,a.kt)("h2",{id:"keyword"},"keyword"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"SHOW, GRANTS\n")))}u.isMDXComponent=!0}}]);