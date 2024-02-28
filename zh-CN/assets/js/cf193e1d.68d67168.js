"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([[50221],{15680:(e,n,t)=>{t.d(n,{xA:()=>u,yg:()=>f});var r=t(96540);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function s(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function i(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var l=r.createContext({}),c=function(e){var n=r.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):s(s({},n),e)),t},u=function(e){var n=c(e.components);return r.createElement(l.Provider,{value:n},e.children)},p="mdxType",y={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},d=r.forwardRef((function(e,n){var t=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),p=c(t),d=a,f=p["".concat(l,".").concat(d)]||p[d]||y[d]||o;return t?r.createElement(f,s(s({ref:n},u),{},{components:t})):r.createElement(f,s({ref:n},u))}));function f(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var o=t.length,s=new Array(o);s[0]=d;var i={};for(var l in n)hasOwnProperty.call(n,l)&&(i[l]=n[l]);i.originalType=e,i[p]="string"==typeof e?e:a,s[1]=i;for(var c=2;c<o;c++)s[c]=t[c];return r.createElement.apply(null,s)}return r.createElement.apply(null,t)}d.displayName="MDXCreateElement"},95148:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>l,contentTitle:()=>s,default:()=>y,frontMatter:()=>o,metadata:()=>i,toc:()=>c});var r=t(58168),a=(t(96540),t(15680));const o={title:"ACTIVE_QUERIES",language:"zh-CN"},s=void 0,i={unversionedId:"sql-manual/sql-functions/table-functions/active_queries",id:"sql-manual/sql-functions/table-functions/active_queries",title:"ACTIVE_QUERIES",description:"\x3c!--",source:"@site/i18n/zh-CN/docusaurus-plugin-content-docs/current/sql-manual/sql-functions/table-functions/active_queries.md",sourceDirName:"sql-manual/sql-functions/table-functions",slug:"/sql-manual/sql-functions/table-functions/active_queries",permalink:"/zh-CN/docs/dev/sql-manual/sql-functions/table-functions/active_queries",draft:!1,tags:[],version:"current",frontMatter:{title:"ACTIVE_QUERIES",language:"zh-CN"},sidebar:"docs",previous:{title:"frontends_disks",permalink:"/zh-CN/docs/dev/sql-manual/sql-functions/table-functions/frontends_disks"},next:{title:"JOB",permalink:"/zh-CN/docs/dev/sql-manual/sql-functions/table-functions/job"}},l={},c=[{value:"<code>active_queries</code>",id:"active_queries",level:2},{value:"Name",id:"name",level:3},{value:"description",id:"description",level:3},{value:"syntax",id:"syntax",level:4},{value:"example",id:"example",level:3},{value:"keywords",id:"keywords",level:3}],u={toc:c},p="wrapper";function y(e){let{components:n,...t}=e;return(0,a.yg)(p,(0,r.A)({},u,t,{components:n,mdxType:"MDXLayout"}),(0,a.yg)("h2",{id:"active_queries"},(0,a.yg)("inlineCode",{parentName:"h2"},"active_queries")),(0,a.yg)("h3",{id:"name"},"Name"),(0,a.yg)("version",{since:"dev"},(0,a.yg)("p",null,"active_queries")),(0,a.yg)("h3",{id:"description"},"description"),(0,a.yg)("p",null,"\u8868\u51fd\u6570\uff0c\u751f\u6210active_queries\u4e34\u65f6\u8868\uff0c\u53ef\u4ee5\u67e5\u770b\u5f53\u524ddoris\u96c6\u7fa4\u4e2d\u6b63\u5728\u8fd0\u884c\u7684 query \u4fe1\u606f\u3002"),(0,a.yg)("p",null,"\u8be5\u51fd\u6570\u7528\u4e8efrom\u5b50\u53e5\u4e2d\u3002"),(0,a.yg)("h4",{id:"syntax"},"syntax"),(0,a.yg)("p",null,(0,a.yg)("inlineCode",{parentName:"p"},"active_queries()")),(0,a.yg)("p",null,"active_queries()\u8868\u7ed3\u6784\uff1a"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre"},"mysql [(none)]> desc function active_queries();\n+------------------------+--------+------+-------+---------+-------+\n| Field                  | Type   | Null | Key   | Default | Extra |\n+------------------------+--------+------+-------+---------+-------+\n| BeHost                 | TEXT   | No   | false | NULL    | NONE  |\n| BePort                 | BIGINT | No   | false | NULL    | NONE  |\n| QueryId                | TEXT   | No   | false | NULL    | NONE  |\n| StartTime              | TEXT   | No   | false | NULL    | NONE  |\n| QueryTimeMs            | BIGINT | No   | false | NULL    | NONE  |\n| WorkloadGroupId        | BIGINT | No   | false | NULL    | NONE  |\n| QueryCpuTimeMs         | BIGINT | No   | false | NULL    | NONE  |\n| ScanRows               | BIGINT | No   | false | NULL    | NONE  |\n| ScanBytes              | BIGINT | No   | false | NULL    | NONE  |\n| BePeakMemoryBytes      | BIGINT | No   | false | NULL    | NONE  |\n| CurrentUsedMemoryBytes | BIGINT | No   | false | NULL    | NONE  |\n| Database               | TEXT   | No   | false | NULL    | NONE  |\n| FrontendInstance       | TEXT   | No   | false | NULL    | NONE  |\n| Sql                    | TEXT   | No   | false | NULL    | NONE  |\n+------------------------+--------+------+-------+---------+-------+\n14 rows in set (0.00 sec)\n")),(0,a.yg)("h3",{id:"example"},"example"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre"},"mysql [(none)]>select * from active_queries();\n+------------+--------+----------------------------------+---------------------+-------------+-----------------+----------------+----------+------------+-------------------+------------------------+----------+------------------+-------+\n| BeHost     | BePort | QueryId                          | StartTime           | QueryTimeMs | WorkloadGroupId | QueryCpuTimeMs | ScanRows | ScanBytes  | BePeakMemoryBytes | CurrentUsedMemoryBytes | Database | FrontendInstance | Sql   |\n+------------+--------+----------------------------------+---------------------+-------------+-----------------+----------------+----------+------------+-------------------+------------------------+----------+------------------+-------+\n| 127.0.0.1 |   6090 | 71fd11b7b0e438c-bc98434b97b8cb98 | 2024-01-16 16:21:15 |        7260 |           10002 |           8392 | 16082249 | 4941889536 |         360470040 |              360420915 | hits     | localhost   | SELECT xxxx |\n+------------+--------+----------------------------------+---------------------+-------------+-----------------+----------------+----------+------------+-------------------+------------------------+----------+------------------+-------+\n1 row in set (0.01 sec)\n")),(0,a.yg)("h3",{id:"keywords"},"keywords"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre"},"active_queries\n")))}y.isMDXComponent=!0}}]);