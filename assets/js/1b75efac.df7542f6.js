"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([[54223],{15680:(e,t,n)=>{n.d(t,{xA:()=>p,yg:()=>y});var a=n(96540);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=a.createContext({}),c=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=c(e.components);return a.createElement(s.Provider,{value:t},e.children)},u="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},g=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,l=e.originalType,s=e.parentName,p=o(e,["components","mdxType","originalType","parentName"]),u=c(n),g=r,y=u["".concat(s,".").concat(g)]||u[g]||m[g]||l;return n?a.createElement(y,i(i({ref:t},p),{},{components:n})):a.createElement(y,i({ref:t},p))}));function y(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=n.length,i=new Array(l);i[0]=g;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o[u]="string"==typeof e?e:r,i[1]=o;for(var c=2;c<l;c++)i[c]=n[c];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}g.displayName="MDXCreateElement"},97836:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>m,frontMatter:()=>l,metadata:()=>o,toc:()=>c});var a=n(58168),r=(n(96540),n(15680));const l={title:"ALTER-CATALOG",language:"en"},i=void 0,o={unversionedId:"sql-manual/sql-reference/Data-Definition-Statements/Alter/ALTER-CATALOG",id:"version-2.0/sql-manual/sql-reference/Data-Definition-Statements/Alter/ALTER-CATALOG",title:"ALTER-CATALOG",description:"\x3c!--",source:"@site/versioned_docs/version-2.0/sql-manual/sql-reference/Data-Definition-Statements/Alter/ALTER-CATALOG.md",sourceDirName:"sql-manual/sql-reference/Data-Definition-Statements/Alter",slug:"/sql-manual/sql-reference/Data-Definition-Statements/Alter/ALTER-CATALOG",permalink:"/docs/sql-manual/sql-reference/Data-Definition-Statements/Alter/ALTER-CATALOG",draft:!1,tags:[],version:"2.0",frontMatter:{title:"ALTER-CATALOG",language:"en"},sidebar:"docs",previous:{title:"CREATE-SQL-BLOCK-RULE",permalink:"/docs/sql-manual/sql-reference/Data-Definition-Statements/Create/CREATE-SQL-BLOCK-RULE"},next:{title:"ALTER-DATABASE",permalink:"/docs/sql-manual/sql-reference/Data-Definition-Statements/Alter/ALTER-DATABASE"}},s={},c=[{value:"ALTER-CATALOG",id:"alter-catalog",level:2},{value:"Name",id:"name",level:3},{value:"Description",id:"description",level:3},{value:"Example",id:"example",level:3},{value:"Keywords",id:"keywords",level:3},{value:"Best Practice",id:"best-practice",level:3}],p={toc:c},u="wrapper";function m(e){let{components:t,...n}=e;return(0,r.yg)(u,(0,a.A)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,r.yg)("h2",{id:"alter-catalog"},"ALTER-CATALOG"),(0,r.yg)("h3",{id:"name"},"Name"),(0,r.yg)("version",{since:"1.2"},(0,r.yg)("p",null,"ALTER CATALOG")),(0,r.yg)("h3",{id:"description"},"Description"),(0,r.yg)("p",null,"This statement is used to set properties of the specified catalog. (administrator only)"),(0,r.yg)("p",null,"1) Rename the catalog"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-sql"},"ALTER CATALOG catalog_name RENAME new_catalog_name;\n")),(0,r.yg)("p",null,"illustrate:"),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},"The builtin catalog ",(0,r.yg)("inlineCode",{parentName:"li"},"internal")," cannot be renamed"),(0,r.yg)("li",{parentName:"ul"},"Only the one who has at least Alter privilege can rename a catalog"),(0,r.yg)("li",{parentName:"ul"},"After renaming the catalog, use the REVOKE and GRANT commands to modify the appropriate user permissions")),(0,r.yg)("p",null,"2) Modify / add properties for the catalog"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-sql"},"ALTER CATALOG catalog_name SET PROPERTIES ('key1' = 'value1' [, 'key' = 'value2']); \n")),(0,r.yg)("p",null,"Update values of specified keys. If a key does not exist in the catalog properties, it will be added. "),(0,r.yg)("p",null,"illustrate:"),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},"property ",(0,r.yg)("inlineCode",{parentName:"li"},"type")," cannot be modified."),(0,r.yg)("li",{parentName:"ul"},"properties of builtin catalog ",(0,r.yg)("inlineCode",{parentName:"li"},"internal")," cannot be modified.")),(0,r.yg)("p",null,"3) Modify comment for the catalog"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-sql"},'ALTER CATALOG catalog_name MODIFY COMMENT "new catalog comment";\n')),(0,r.yg)("p",null,"illustrate\uff1a"),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},"The builtin catalog ",(0,r.yg)("inlineCode",{parentName:"li"},"internal")," cannot be modified")),(0,r.yg)("h3",{id:"example"},"Example"),(0,r.yg)("ol",null,(0,r.yg)("li",{parentName:"ol"},"rename catalog ctlg_hive to hive")),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-sql"},"ALTER CATALOG ctlg_hive RENAME hive;\n")),(0,r.yg)("ol",{start:3},(0,r.yg)("li",{parentName:"ol"},"modify property ",(0,r.yg)("inlineCode",{parentName:"li"},"hive.metastore.uris")," of catalog hive")),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-sql"},"ALTER CATALOG hive SET PROPERTIES ('hive.metastore.uris'='thrift://172.21.0.1:9083');\n")),(0,r.yg)("ol",{start:4},(0,r.yg)("li",{parentName:"ol"},"modify comment of catalog hive")),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-sql"},'ALTER CATALOG hive MODIFY COMMENT "new catalog comment";\n')),(0,r.yg)("h3",{id:"keywords"},"Keywords"),(0,r.yg)("p",null,"ALTER,CATALOG,RENAME,PROPERTY"),(0,r.yg)("h3",{id:"best-practice"},"Best Practice"))}m.isMDXComponent=!0}}]);