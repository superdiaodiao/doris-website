"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([[31983],{15680:(e,n,r)=>{r.d(n,{xA:()=>u,yg:()=>m});var t=r(296540);function a(e,n,r){return n in e?Object.defineProperty(e,n,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[n]=r,e}function l(e,n){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),r.push.apply(r,t)}return r}function i(e){for(var n=1;n<arguments.length;n++){var r=null!=arguments[n]?arguments[n]:{};n%2?l(Object(r),!0).forEach((function(n){a(e,n,r[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):l(Object(r)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(r,n))}))}return e}function o(e,n){if(null==e)return{};var r,t,a=function(e,n){if(null==e)return{};var r,t,a={},l=Object.keys(e);for(t=0;t<l.length;t++)r=l[t],n.indexOf(r)>=0||(a[r]=e[r]);return a}(e,n);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(t=0;t<l.length;t++)r=l[t],n.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var c=t.createContext({}),s=function(e){var n=t.useContext(c),r=n;return e&&(r="function"==typeof e?e(n):i(i({},n),e)),r},u=function(e){var n=s(e.components);return t.createElement(c.Provider,{value:n},e.children)},p="mdxType",d={inlineCode:"code",wrapper:function(e){var n=e.children;return t.createElement(t.Fragment,{},n)}},y=t.forwardRef((function(e,n){var r=e.components,a=e.mdxType,l=e.originalType,c=e.parentName,u=o(e,["components","mdxType","originalType","parentName"]),p=s(r),y=a,m=p["".concat(c,".").concat(y)]||p[y]||d[y]||l;return r?t.createElement(m,i(i({ref:n},u),{},{components:r})):t.createElement(m,i({ref:n},u))}));function m(e,n){var r=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var l=r.length,i=new Array(l);i[0]=y;var o={};for(var c in n)hasOwnProperty.call(n,c)&&(o[c]=n[c]);o.originalType=e,o[p]="string"==typeof e?e:a,i[1]=o;for(var s=2;s<l;s++)i[s]=r[s];return t.createElement.apply(null,i)}return t.createElement.apply(null,r)}y.displayName="MDXCreateElement"},218700:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>c,contentTitle:()=>i,default:()=>d,frontMatter:()=>l,metadata:()=>o,toc:()=>s});var t=r(58168),a=(r(296540),r(15680));const l={title:"Kill Query",language:"zh-CN"},i=void 0,o={unversionedId:"admin-manual/query-admin/kill-query",id:"version-2.0/admin-manual/query-admin/kill-query",title:"Kill Query",description:"\x3c!--",source:"@site/i18n/zh-CN/docusaurus-plugin-content-docs/version-2.0/admin-manual/query-admin/kill-query.md",sourceDirName:"admin-manual/query-admin",slug:"/admin-manual/query-admin/kill-query",permalink:"/zh-CN/docs/2.0/admin-manual/query-admin/kill-query",draft:!1,tags:[],version:"2.0",frontMatter:{title:"Kill Query",language:"zh-CN"},sidebar:"docs",previous:{title:"\u9ad8\u5371 SQL \u9650\u5236",permalink:"/zh-CN/docs/2.0/admin-manual/query-admin/sql-interception"},next:{title:"Job \u8c03\u5ea6",permalink:"/zh-CN/docs/2.0/admin-manual/query-admin/job"}},c={},s=[{value:"Kill \u8fde\u63a5",id:"kill-\u8fde\u63a5",level:2},{value:"Kill \u67e5\u8be2",id:"kill-\u67e5\u8be2",level:2},{value:"\u4e3e\u4f8b",id:"\u4e3e\u4f8b",level:2}],u={toc:s},p="wrapper";function d(e){let{components:n,...r}=e;return(0,a.yg)(p,(0,t.A)({},u,r,{components:n,mdxType:"MDXLayout"}),(0,a.yg)("h2",{id:"kill-\u8fde\u63a5"},"Kill \u8fde\u63a5"),(0,a.yg)("p",null,"\u6bcf\u4e2a Doris \u7684\u8fde\u63a5\u90fd\u5728\u4e00\u4e2a\u5355\u72ec\u7684\u7ebf\u7a0b\u4e2d\u8fd0\u884c\u3002\u60a8\u53ef\u4ee5\u4f7f\u7528 KILL processlist_id \u8bed\u53e5\u7ec8\u6b62\u7ebf\u7a0b\u3002"),(0,a.yg)("p",null,"\u7ebf\u7a0b\u8fdb\u7a0b\u5217\u8868\u6807\u8bc6\u7b26\u53ef\u4ee5\u4ece SHOW PROCESSLIST \u8f93\u51fa\u7684 Id \u5217\u67e5\u8be2 \u6216\u8005 SELECT CONNECTION_ID() \u6765\u67e5\u8be2\u5f53\u524d Connection ID\u3002"),(0,a.yg)("p",null,"\u8bed\u6cd5\uff1a"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-SQL"},"KILL [CONNECTION] processlist_id\n")),(0,a.yg)("h2",{id:"kill-\u67e5\u8be2"},"Kill \u67e5\u8be2"),(0,a.yg)("p",null,"\u9664\u6b64\u4e4b\u5916\uff0c\u60a8\u8fd8\u53ef\u4ee5\u4f7f\u7528 processlist_id \u6216\u8005 query_id \u7ec8\u6b62\u6b63\u5728\u6267\u884c\u7684\u67e5\u8be2\u547d\u4ee4"),(0,a.yg)("p",null,"\u8bed\u6cd5\uff1a"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-SQL"},"KILL QUERY processlist_id | query_id\n")),(0,a.yg)("h2",{id:"\u4e3e\u4f8b"},"\u4e3e\u4f8b"),(0,a.yg)("p",null,(0,a.yg)("strong",{parentName:"p"},"1. \u67e5\u770b\u5f53\u524d\u8fde\u63a5\u7684 Connection ID\u3002")),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-sql"},"mysql select connection_id();\n+-----------------+\n| connection_id() |\n+-----------------+\n| 48              |\n+-----------------+\n1 row in set (0.00 sec)\n")),(0,a.yg)("p",null,(0,a.yg)("strong",{parentName:"p"},"2. \u67e5\u770b\u6240\u6709\u8fde\u63a5\u7684 Connection ID\u3002")),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-sql"},"mysql SHOW PROCESSLIST;\n+------------------+------+------+--------------------+---------------------+----------+---------+---------+------+-------+-----------------------------------+---------------------------------------------------------------------------------------+\n| CurrentConnected | Id   | User | Host               | LoginTime           | Catalog  | Db      | Command | Time | State | QueryId                           | Info                                                                                  |\n+------------------+------+------+--------------------+---------------------+----------+---------+---------+------+-------+-----------------------------------+---------------------------------------------------------------------------------------+\n| Yes              |   48 | root | 10.16.xx.xx:44834   | 2023-12-29 16:49:47 | internal | test | Query   |    0 | OK    | e6e4ce9567b04859-8eeab8d6b5513e38 | SHOW PROCESSLIST                                                                      |\n|                  |   50 | root | 192.168.xx.xx:52837 | 2023-12-29 16:51:34 | internal |      | Sleep   | 1837 | EOF   | deaf13c52b3b4a3b-b25e8254b50ff8cb | SELECT @@session.transaction_isolation                                                |\n|                  |   51 | root | 192.168.xx.xx:52843 | 2023-12-29 16:51:35 | internal |      | Sleep   |  907 | EOF   | 437f219addc0404f-9befe7f6acf9a700 | /* ApplicationName=DBeaver Ultimate 23.1.3 - Metadata */ SHOW STATUS                  |\n|                  |   55 | root | 192.168.xx.xx:55533 | 2023-12-29 17:09:32 | internal | test | Sleep   |  271 | EOF   | f02603dc163a4da3-beebbb5d1ced760c | /* ApplicationName=DBeaver Ultimate 23.1.3 - SQLEditor <Console> */ SELECT DATABASE() |\n|                  |   47 | root | 10.16.xx.xx:35678   | 2023-12-29 16:21:56 | internal | test | Sleep   | 3528 | EOF   | f4944c543dc34a99-b0d0f3986c8f1c98 | select * from test                                                                    |\n+------------------+------+------+--------------------+---------------------+----------+---------+---------+------+-------+-----------------------------------+---------------------------------------------------------------------------------------+\n5 rows in set (0.00 sec)\n")),(0,a.yg)("p",null,(0,a.yg)("strong",{parentName:"p"},"3. \u7ec8\u6b62\u6b63\u5728\u8fd0\u884c\u7684\u67e5\u8be2\uff0c\u6b63\u5728\u8fd0\u884c\u7684\u67e5\u8be2\u4f1a\u663e\u793a\u88ab\u53d6\u6d88\u3002")),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-sql"},"mysql kill query 55;\nQuery OK, 0 rows affected (0.01 sec)\n")))}d.isMDXComponent=!0}}]);