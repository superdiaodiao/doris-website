"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([[33126],{3905:(e,t,n)=>{n.d(t,{Zo:()=>N,kt:()=>k});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var i=a.createContext({}),u=function(e){var t=a.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},N=function(e){var t=u(e.components);return a.createElement(i.Provider,{value:t},e.children)},p="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,l=e.originalType,i=e.parentName,N=o(e,["components","mdxType","originalType","parentName"]),p=u(n),m=r,k=p["".concat(i,".").concat(m)]||p[m]||c[m]||l;return n?a.createElement(k,s(s({ref:t},N),{},{components:n})):a.createElement(k,s({ref:t},N))}));function k(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=n.length,s=new Array(l);s[0]=m;var o={};for(var i in t)hasOwnProperty.call(t,i)&&(o[i]=t[i]);o.originalType=e,o[p]="string"==typeof e?e:r,s[1]=o;for(var u=2;u<l;u++)s[u]=n[u];return a.createElement.apply(null,s)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},62978:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>i,contentTitle:()=>s,default:()=>c,frontMatter:()=>l,metadata:()=>o,toc:()=>u});var a=n(87462),r=(n(67294),n(3905));const l={title:"TASKS",language:"zh-CN"},s=void 0,o={unversionedId:"sql-manual/sql-functions/table-functions/tasks",id:"sql-manual/sql-functions/table-functions/tasks",title:"TASKS",description:"\x3c!--",source:"@site/i18n/zh-CN/docusaurus-plugin-content-docs/current/sql-manual/sql-functions/table-functions/tasks.md",sourceDirName:"sql-manual/sql-functions/table-functions",slug:"/sql-manual/sql-functions/table-functions/tasks",permalink:"/zh-CN/docs/dev/sql-manual/sql-functions/table-functions/tasks",draft:!1,tags:[],version:"current",frontMatter:{title:"TASKS",language:"zh-CN"},sidebar:"docs",previous:{title:"MV_INFOS",permalink:"/zh-CN/docs/dev/sql-manual/sql-functions/table-functions/mv_infos"},next:{title:"\u7a97\u53e3\u51fd\u6570",permalink:"/zh-CN/docs/dev/sql-manual/sql-functions/window-functions/window-function"}},i={},u=[{value:"<code>tasks</code>",id:"tasks",level:2},{value:"Name",id:"name",level:3},{value:"description",id:"description",level:3},{value:"syntax",id:"syntax",level:4},{value:"example",id:"example",level:3},{value:"keywords",id:"keywords",level:3}],N={toc:u},p="wrapper";function c(e){let{components:t,...n}=e;return(0,r.kt)(p,(0,a.Z)({},N,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h2",{id:"tasks"},(0,r.kt)("inlineCode",{parentName:"h2"},"tasks")),(0,r.kt)("h3",{id:"name"},"Name"),(0,r.kt)("p",null,"tasks"),(0,r.kt)("h3",{id:"description"},"description"),(0,r.kt)("p",null,"\u8868\u51fd\u6570\uff0c\u751f\u6210\u4efb\u52a1\u4e34\u65f6\u8868\uff0c\u53ef\u4ee5\u67e5\u770b\u67d0\u4e2a\u4efb\u52a1\u7c7b\u578b\u4e2d\u7684task\u4fe1\u606f\u3002"),(0,r.kt)("p",null,"\u8be5\u51fd\u6570\u7528\u4e8e from \u5b50\u53e5\u4e2d\u3002"),(0,r.kt)("h4",{id:"syntax"},"syntax"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},'tasks("type"="")')),(0,r.kt)("p",null,'tasks("type"="mv")\u8868\u7ed3\u6784\uff1a'),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sql"},'mysql> desc function tasks("type"="mv");\n+-----------------------+------+------+-------+---------+-------+\n| Field                 | Type | Null | Key   | Default | Extra |\n+-----------------------+------+------+-------+---------+-------+\n| TaskId                | TEXT | No   | false | NULL    | NONE  |\n| JobId                 | TEXT | No   | false | NULL    | NONE  |\n| JobName               | TEXT | No   | false | NULL    | NONE  |\n| MvId                  | TEXT | No   | false | NULL    | NONE  |\n| MvName                | TEXT | No   | false | NULL    | NONE  |\n| MvDatabaseId          | TEXT | No   | false | NULL    | NONE  |\n| MvDatabaseName        | TEXT | No   | false | NULL    | NONE  |\n| Status                | TEXT | No   | false | NULL    | NONE  |\n| ErrorMsg              | TEXT | No   | false | NULL    | NONE  |\n| CreateTime            | TEXT | No   | false | NULL    | NONE  |\n| StartTime             | TEXT | No   | false | NULL    | NONE  |\n| FinishTime            | TEXT | No   | false | NULL    | NONE  |\n| DurationMs            | TEXT | No   | false | NULL    | NONE  |\n| TaskContext           | TEXT | No   | false | NULL    | NONE  |\n| RefreshMode           | TEXT | No   | false | NULL    | NONE  |\n| NeedRefreshPartitions | TEXT | No   | false | NULL    | NONE  |\n| CompletedPartitions   | TEXT | No   | false | NULL    | NONE  |\n| Progress              | TEXT | No   | false | NULL    | NONE  |\n+-----------------------+------+------+-------+---------+-------+\n18 rows in set (0.00 sec)\n')),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"TaskId\uff1atask id"),(0,r.kt)("li",{parentName:"ul"},"JobId\uff1ajob id"),(0,r.kt)("li",{parentName:"ul"},"JobName\uff1ajob\u540d\u79f0"),(0,r.kt)("li",{parentName:"ul"},"MvId\uff1a\u7269\u5316\u89c6\u56feid"),(0,r.kt)("li",{parentName:"ul"},"MvName\uff1a\u7269\u5316\u89c6\u56fe\u540d\u79f0"),(0,r.kt)("li",{parentName:"ul"},"MvDatabaseId\uff1a\u7269\u5316\u89c6\u56fe\u6240\u5c5edb id"),(0,r.kt)("li",{parentName:"ul"},"MvDatabaseName\uff1a\u7269\u5316\u89c6\u56fe\u6240\u5c5edb\u540d\u79f0"),(0,r.kt)("li",{parentName:"ul"},"Status\uff1atask\u72b6\u6001"),(0,r.kt)("li",{parentName:"ul"},"ErrorMsg\uff1atask\u5931\u8d25\u4fe1\u606f"),(0,r.kt)("li",{parentName:"ul"},"CreateTime\uff1atask\u521b\u5efa\u65f6\u95f4"),(0,r.kt)("li",{parentName:"ul"},"StartTime\uff1atask\u5f00\u59cb\u8fd0\u884c\u65f6\u95f4"),(0,r.kt)("li",{parentName:"ul"},"FinishTime\uff1atask\u7ed3\u675f\u8fd0\u884c\u65f6\u95f4"),(0,r.kt)("li",{parentName:"ul"},"DurationMs\uff1atask\u8fd0\u884c\u65f6\u95f4"),(0,r.kt)("li",{parentName:"ul"},"TaskContext\uff1atask\u8fd0\u884c\u53c2\u6570"),(0,r.kt)("li",{parentName:"ul"},"RefreshMode\uff1a\u5237\u65b0\u6a21\u5f0f"),(0,r.kt)("li",{parentName:"ul"},"NeedRefreshPartitions\uff1a\u672c\u6b21task\u9700\u8981\u5237\u65b0\u7684\u5206\u533a\u4fe1\u606f"),(0,r.kt)("li",{parentName:"ul"},"CompletedPartitions\uff1a\u672c\u6b21task\u5237\u65b0\u5b8c\u6210\u7684\u5206\u533a\u4fe1\u606f"),(0,r.kt)("li",{parentName:"ul"},"Progress\uff1atask\u8fd0\u884c\u8fdb\u5ea6")),(0,r.kt)("h3",{id:"example"},"example"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"\u67e5\u770b\u6240\u6709\u7269\u5316\u89c6\u56fe\u7684task")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sql"},'mysql> select * from tasks("type"="mv");\n')),(0,r.kt)("ol",{start:2},(0,r.kt)("li",{parentName:"ol"},"\u67e5\u770bjobName\u4e3a",(0,r.kt)("inlineCode",{parentName:"li"},"inner_mtmv_75043"),"\u7684\u6240\u6709task")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sql"},'mysql> select * from tasks("type"="mv") where JobName="inner_mtmv_75043";\n')),(0,r.kt)("h3",{id:"keywords"},"keywords"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"tasks\n")))}c.isMDXComponent=!0}}]);