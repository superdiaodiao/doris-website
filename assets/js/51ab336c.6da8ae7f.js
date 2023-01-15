"use strict";(self.webpackChunkselectdb_portal=self.webpackChunkselectdb_portal||[]).push([[33190],{3905:(e,n,t)=>{t.d(n,{Zo:()=>s,kt:()=>m});var r=t(67294);function l(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){l(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function a(e,n){if(null==e)return{};var t,r,l=function(e,n){if(null==e)return{};var t,r,l={},o=Object.keys(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||(l[t]=e[t]);return l}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(l[t]=e[t])}return l}var u=r.createContext({}),c=function(e){var n=r.useContext(u),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},s=function(e){var n=c(e.components);return r.createElement(u.Provider,{value:n},e.children)},p="mdxType",f={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},d=r.forwardRef((function(e,n){var t=e.components,l=e.mdxType,o=e.originalType,u=e.parentName,s=a(e,["components","mdxType","originalType","parentName"]),p=c(t),d=l,m=p["".concat(u,".").concat(d)]||p[d]||f[d]||o;return t?r.createElement(m,i(i({ref:n},s),{},{components:t})):r.createElement(m,i({ref:n},s))}));function m(e,n){var t=arguments,l=n&&n.mdxType;if("string"==typeof e||l){var o=t.length,i=new Array(o);i[0]=d;var a={};for(var u in n)hasOwnProperty.call(n,u)&&(a[u]=n[u]);a.originalType=e,a[p]="string"==typeof e?e:l,i[1]=a;for(var c=2;c<o;c++)i[c]=t[c];return r.createElement.apply(null,i)}return r.createElement.apply(null,t)}d.displayName="MDXCreateElement"},63221:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>u,contentTitle:()=>i,default:()=>p,frontMatter:()=>o,metadata:()=>a,toc:()=>c});var r=t(87462),l=(t(67294),t(3905));const o={title:"nullif",language:"en"},i=void 0,a={unversionedId:"sql-manual/sql-functions/conditional-functions/nullif",id:"sql-manual/sql-functions/conditional-functions/nullif",title:"nullif",description:"\x3c!--",source:"@site/docs/sql-manual/sql-functions/conditional-functions/nullif.md",sourceDirName:"sql-manual/sql-functions/conditional-functions",slug:"/sql-manual/sql-functions/conditional-functions/nullif",permalink:"/docs/sql-manual/sql-functions/conditional-functions/nullif",draft:!1,tags:[],version:"current",frontMatter:{title:"nullif",language:"en"},sidebar:"docs",previous:{title:"ifnull",permalink:"/docs/sql-manual/sql-functions/conditional-functions/ifnull"},next:{title:"get_json_double",permalink:"/docs/sql-manual/sql-functions/json-functions/get_json_double"}},u={},c=[{value:"nullif",id:"nullif",level:2},{value:"description",id:"description",level:3},{value:"Syntax",id:"syntax",level:4},{value:"example",id:"example",level:3},{value:"keywords",id:"keywords",level:3}],s={toc:c};function p(e){let{components:n,...t}=e;return(0,l.kt)("wrapper",(0,r.Z)({},s,t,{components:n,mdxType:"MDXLayout"}),(0,l.kt)("h2",{id:"nullif"},"nullif"),(0,l.kt)("h3",{id:"description"},"description"),(0,l.kt)("h4",{id:"syntax"},"Syntax"),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"nullif(expr1, expr2)")),(0,l.kt)("p",null,"If the two parameters are equal, null is returned. Otherwise, the value of the first parameter is returned. It has the same effect as the following ",(0,l.kt)("inlineCode",{parentName:"p"},"case when")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"CASE\n     WHEN expr1 = expr2 THEN NULL\n     ELSE expr1\nEND\n")),(0,l.kt)("h3",{id:"example"},"example"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"mysql> select nullif(1,1);\n+--------------+\n| nullif(1, 1) |\n+--------------+\n|         NULL |\n+--------------+\n\nmysql> select nullif(1,0);\n+--------------+\n| nullif(1, 0) |\n+--------------+\n|            1 |\n+--------------+\n")),(0,l.kt)("h3",{id:"keywords"},"keywords"),(0,l.kt)("p",null,"NULLIF"))}p.isMDXComponent=!0}}]);