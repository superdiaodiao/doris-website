"use strict";(self.webpackChunkselectdb_portal=self.webpackChunkselectdb_portal||[]).push([[56372],{3905:(e,n,r)=>{r.d(n,{Zo:()=>i,kt:()=>f});var t=r(67294);function o(e,n,r){return n in e?Object.defineProperty(e,n,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[n]=r,e}function a(e,n){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),r.push.apply(r,t)}return r}function l(e){for(var n=1;n<arguments.length;n++){var r=null!=arguments[n]?arguments[n]:{};n%2?a(Object(r),!0).forEach((function(n){o(e,n,r[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(r,n))}))}return e}function s(e,n){if(null==e)return{};var r,t,o=function(e,n){if(null==e)return{};var r,t,o={},a=Object.keys(e);for(t=0;t<a.length;t++)r=a[t],n.indexOf(r)>=0||(o[r]=e[r]);return o}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(t=0;t<a.length;t++)r=a[t],n.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var u=t.createContext({}),c=function(e){var n=t.useContext(u),r=n;return e&&(r="function"==typeof e?e(n):l(l({},n),e)),r},i=function(e){var n=c(e.components);return t.createElement(u.Provider,{value:n},e.children)},p="mdxType",d={inlineCode:"code",wrapper:function(e){var n=e.children;return t.createElement(t.Fragment,{},n)}},m=t.forwardRef((function(e,n){var r=e.components,o=e.mdxType,a=e.originalType,u=e.parentName,i=s(e,["components","mdxType","originalType","parentName"]),p=c(r),m=o,f=p["".concat(u,".").concat(m)]||p[m]||d[m]||a;return r?t.createElement(f,l(l({ref:n},i),{},{components:r})):t.createElement(f,l({ref:n},i))}));function f(e,n){var r=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var a=r.length,l=new Array(a);l[0]=m;var s={};for(var u in n)hasOwnProperty.call(n,u)&&(s[u]=n[u]);s.originalType=e,s[p]="string"==typeof e?e:o,l[1]=s;for(var c=2;c<a;c++)l[c]=r[c];return t.createElement.apply(null,l)}return t.createElement.apply(null,r)}m.displayName="MDXCreateElement"},68870:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>u,contentTitle:()=>l,default:()=>d,frontMatter:()=>a,metadata:()=>s,toc:()=>c});var t=r(87462),o=(r(67294),r(3905));const a={title:"resource_groups",language:"en"},l=void 0,s={unversionedId:"sql-manual/sql-functions/table-functions/resource-group",id:"sql-manual/sql-functions/table-functions/resource-group",title:"resource_groups",description:"\x3c!--",source:"@site/docs/sql-manual/sql-functions/table-functions/resource-group.md",sourceDirName:"sql-manual/sql-functions/table-functions",slug:"/sql-manual/sql-functions/table-functions/resource-group",permalink:"/docs/dev/sql-manual/sql-functions/table-functions/resource-group",draft:!1,tags:[],version:"current",frontMatter:{title:"resource_groups",language:"en"},sidebar:"docs",previous:{title:"backends",permalink:"/docs/dev/sql-manual/sql-functions/table-functions/backends"},next:{title:"WINDOW-FUNCTION-LAG",permalink:"/docs/dev/sql-manual/sql-functions/window-functions/WINDOW-FUNCTION-LAG"}},u={},c=[{value:"<code>resource_groups</code>",id:"resource_groups",level:2},{value:"Name",id:"name",level:3},{value:"description",id:"description",level:3},{value:"syntax",id:"syntax",level:4},{value:"example",id:"example",level:3},{value:"keywords",id:"keywords",level:3}],i={toc:c},p="wrapper";function d(e){let{components:n,...r}=e;return(0,o.kt)(p,(0,t.Z)({},i,r,{components:n,mdxType:"MDXLayout"}),(0,o.kt)("h2",{id:"resource_groups"},(0,o.kt)("inlineCode",{parentName:"h2"},"resource_groups")),(0,o.kt)("h3",{id:"name"},"Name"),(0,o.kt)("version",{since:"dev"},(0,o.kt)("p",null,"resource_groups")),(0,o.kt)("h3",{id:"description"},"description"),(0,o.kt)("p",null,"Table-Value-Function, generate a temporary table named ",(0,o.kt)("inlineCode",{parentName:"p"},"resource_groups"),". This tvf is used to view informations about current resource groups."),(0,o.kt)("p",null,"This function is used in ",(0,o.kt)("inlineCode",{parentName:"p"},"FROM")," clauses."),(0,o.kt)("h4",{id:"syntax"},"syntax"),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"resource_groups()")),(0,o.kt)("p",null,"The table schema of ",(0,o.kt)("inlineCode",{parentName:"p"},"resource_groups()")," tvf:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"mysql> desc function resource_groups();\n+-------+-------------+------+-------+---------+-------+\n| Field | Type        | Null | Key   | Default | Extra |\n+-------+-------------+------+-------+---------+-------+\n| Id    | BIGINT      | No   | false | NULL    | NONE  |\n| Name  | STRING      | No   | false | NULL    | NONE  |\n| Item  | STRING      | No   | false | NULL    | NONE  |\n| Value | STRING      | No   | false | NULL    | NONE  |\n+-------+-------------+------+-------+---------+-------+\n")),(0,o.kt)("h3",{id:"example"},"example"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"mysql> select * from resource_groups()\\G\n+-------+--------+--------------+-------+\n| Id    | Name   | Item         | Value |\n+-------+--------+--------------+-------+\n| 11001 | normal | memory_limit | 100%  |\n| 11001 | normal | cpu_share    | 10    |\n+-------+--------+--------------+-------+\n")),(0,o.kt)("h3",{id:"keywords"},"keywords"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"resource_groups\n")))}d.isMDXComponent=!0}}]);