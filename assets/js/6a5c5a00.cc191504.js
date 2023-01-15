"use strict";(self.webpackChunkselectdb_portal=self.webpackChunkselectdb_portal||[]).push([[40549],{3905:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>A});var n=r(67294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var l=n.createContext({}),c=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},p=function(e){var t=c(e.components);return n.createElement(l.Provider,{value:t},e.children)},d="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,l=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),d=c(r),m=o,A=d["".concat(l,".").concat(m)]||d[m]||u[m]||a;return r?n.createElement(A,i(i({ref:t},p),{},{components:r})):n.createElement(A,i({ref:t},p))}));function A(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,i=new Array(a);i[0]=m;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[d]="string"==typeof e?e:o,i[1]=s;for(var c=2;c<a;c++)i[c]=r[c];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},21980:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>d,frontMatter:()=>a,metadata:()=>s,toc:()=>c});var n=r(87462),o=(r(67294),r(3905));const a={title:"SET LDAP_ADMIN_PASSWORD",language:"en"},i=void 0,s={unversionedId:"sql-reference/sql-statements/Administration/SET-LDAP-ADMIN-PASSWORD",id:"version-0.15/sql-reference/sql-statements/Administration/SET-LDAP-ADMIN-PASSWORD",title:"SET LDAP_ADMIN_PASSWORD",description:"\x3c!--",source:"@site/versioned_docs/version-0.15/sql-reference/sql-statements/Administration/SET-LDAP-ADMIN-PASSWORD.md",sourceDirName:"sql-reference/sql-statements/Administration",slug:"/sql-reference/sql-statements/Administration/SET-LDAP-ADMIN-PASSWORD",permalink:"/docs/0.15/sql-reference/sql-statements/Administration/SET-LDAP-ADMIN-PASSWORD",draft:!1,tags:[],version:"0.15",frontMatter:{title:"SET LDAP_ADMIN_PASSWORD",language:"en"},sidebar:"docs",previous:{title:"MIGRATE DATABASE",permalink:"/docs/0.15/sql-reference/sql-statements/Administration/MIGRATE-DATABASE"},next:{title:"SHOW BACKENDS",permalink:"/docs/0.15/sql-reference/sql-statements/Administration/SHOW-BACKENDS"}},l={},c=[{value:"description",id:"description",level:2},{value:"example",id:"example",level:2},{value:"keyword",id:"keyword",level:2}],p={toc:c};function d(e){let{components:t,...r}=e;return(0,o.kt)("wrapper",(0,n.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"set-ldap_admin_password"},"SET LDAP_ADMIN_PASSWORD"),(0,o.kt)("h2",{id:"description"},"description"),(0,o.kt)("p",null,"Syntax:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"SET LDAP_ADMIN_PASSWORD = 'plain password'\n\nThe SET command is used to set the LDAP administrator password. When using LDAP authentication, doris needs to use the administrator account and password to query the LDAP service for information about the logging user.\n")),(0,o.kt)("h2",{id:"example"},"example"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"Set LDAP admin password:")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"SET LDAP_ADMIN_PASSWORD = '123456'\n")),(0,o.kt)("h2",{id:"keyword"},"keyword"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"SET, LDAP, LDAP_ADMIN_PASSWORD\n")))}d.isMDXComponent=!0}}]);