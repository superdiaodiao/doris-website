"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([[62255],{15680:(e,a,t)=>{t.d(a,{xA:()=>m,yg:()=>y});var n=t(96540);function r(e,a,t){return a in e?Object.defineProperty(e,a,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[a]=t,e}function l(e,a){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);a&&(n=n.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),t.push.apply(t,n)}return t}function o(e){for(var a=1;a<arguments.length;a++){var t=null!=arguments[a]?arguments[a]:{};a%2?l(Object(t),!0).forEach((function(a){r(e,a,t[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):l(Object(t)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(t,a))}))}return e}function p(e,a){if(null==e)return{};var t,n,r=function(e,a){if(null==e)return{};var t,n,r={},l=Object.keys(e);for(n=0;n<l.length;n++)t=l[n],a.indexOf(t)>=0||(r[t]=e[t]);return r}(e,a);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)t=l[n],a.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var i=n.createContext({}),s=function(e){var a=n.useContext(i),t=a;return e&&(t="function"==typeof e?e(a):o(o({},a),e)),t},m=function(e){var a=s(e.components);return n.createElement(i.Provider,{value:a},e.children)},c="mdxType",d={inlineCode:"code",wrapper:function(e){var a=e.children;return n.createElement(n.Fragment,{},a)}},u=n.forwardRef((function(e,a){var t=e.components,r=e.mdxType,l=e.originalType,i=e.parentName,m=p(e,["components","mdxType","originalType","parentName"]),c=s(t),u=r,y=c["".concat(i,".").concat(u)]||c[u]||d[u]||l;return t?n.createElement(y,o(o({ref:a},m),{},{components:t})):n.createElement(y,o({ref:a},m))}));function y(e,a){var t=arguments,r=a&&a.mdxType;if("string"==typeof e||r){var l=t.length,o=new Array(l);o[0]=u;var p={};for(var i in a)hasOwnProperty.call(a,i)&&(p[i]=a[i]);p.originalType=e,p[c]="string"==typeof e?e:r,o[1]=p;for(var s=2;s<l;s++)o[s]=t[s];return n.createElement.apply(null,o)}return n.createElement.apply(null,t)}u.displayName="MDXCreateElement"},31:(e,a,t)=>{t.r(a),t.d(a,{assets:()=>i,contentTitle:()=>o,default:()=>d,frontMatter:()=>l,metadata:()=>p,toc:()=>s});var n=t(58168),r=(t(96540),t(15680));const l={title:"SHOW-LOAD",language:"zh-CN"},o=void 0,p={unversionedId:"sql-manual/sql-reference/Show-Statements/SHOW-LOAD",id:"sql-manual/sql-reference/Show-Statements/SHOW-LOAD",title:"SHOW-LOAD",description:"\x3c!--",source:"@site/i18n/zh-CN/docusaurus-plugin-content-docs/current/sql-manual/sql-reference/Show-Statements/SHOW-LOAD.md",sourceDirName:"sql-manual/sql-reference/Show-Statements",slug:"/sql-manual/sql-reference/Show-Statements/SHOW-LOAD",permalink:"/zh-CN/docs/dev/sql-manual/sql-reference/Show-Statements/SHOW-LOAD",draft:!1,tags:[],version:"current",frontMatter:{title:"SHOW-LOAD",language:"zh-CN"},sidebar:"docs",previous:{title:"SHOW-TABLETS",permalink:"/zh-CN/docs/dev/sql-manual/sql-reference/Show-Statements/SHOW-TABLETS"},next:{title:"SHOW-TABLES",permalink:"/zh-CN/docs/dev/sql-manual/sql-reference/Show-Statements/SHOW-TABLES"}},i={},s=[{value:"SHOW-LOAD",id:"show-load",level:2},{value:"Name",id:"name",level:3},{value:"Description",id:"description",level:3},{value:"Example",id:"example",level:3},{value:"Keywords",id:"keywords",level:3},{value:"Best Practice",id:"best-practice",level:3}],m={toc:s},c="wrapper";function d(e){let{components:a,...t}=e;return(0,r.yg)(c,(0,n.A)({},m,t,{components:a,mdxType:"MDXLayout"}),(0,r.yg)("h2",{id:"show-load"},"SHOW-LOAD"),(0,r.yg)("h3",{id:"name"},"Name"),(0,r.yg)("p",null,"SHOW LOAD"),(0,r.yg)("h3",{id:"description"},"Description"),(0,r.yg)("p",null,"\u8be5\u8bed\u53e5\u7528\u4e8e\u5c55\u793a\u6307\u5b9a\u7684\u5bfc\u5165\u4efb\u52a1\u7684\u6267\u884c\u60c5\u51b5"),(0,r.yg)("p",null,"\u8bed\u6cd5\uff1a"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-sql"},'SHOW LOAD\n[FROM db_name]\n[\n   WHERE\n   [LABEL [ = "your_label" | LIKE "label_matcher"]]\n   [STATE = ["PENDING"|"ETL"|"LOADING"|"FINISHED"|"CANCELLED"|]]\n]\n[ORDER BY ...]\n[LIMIT limit][OFFSET offset];\n')),(0,r.yg)("p",null,"\u8bf4\u660e\uff1a"),(0,r.yg)("p",null,"1) \u5982\u679c\u4e0d\u6307\u5b9a db_name\uff0c\u4f7f\u7528\u5f53\u524d\u9ed8\u8ba4db"),(0,r.yg)("p",null,"2)  \u5982\u679c\u4f7f\u7528 LABEL LIKE\uff0c\u5219\u4f1a\u5339\u914d\u5bfc\u5165\u4efb\u52a1\u7684 label \u5305\u542b label_matcher \u7684\u5bfc\u5165\u4efb\u52a1"),(0,r.yg)("p",null,"3)  \u5982\u679c\u4f7f\u7528 LABEL = \uff0c\u5219\u7cbe\u786e\u5339\u914d\u6307\u5b9a\u7684 label"),(0,r.yg)("p",null,"4) \u5982\u679c\u6307\u5b9a\u4e86 STATE\uff0c\u5219\u5339\u914d LOAD \u72b6\u6001"),(0,r.yg)("p",null,"5) \u53ef\u4ee5\u4f7f\u7528 ORDER BY \u5bf9\u4efb\u610f\u5217\u7ec4\u5408\u8fdb\u884c\u6392\u5e8f"),(0,r.yg)("p",null,"6)  \u5982\u679c\u6307\u5b9a\u4e86 LIMIT\uff0c\u5219\u663e\u793a limit \u6761\u5339\u914d\u8bb0\u5f55\u3002\u5426\u5219\u5168\u90e8\u663e\u793a"),(0,r.yg)("p",null,"7) \u5982\u679c\u6307\u5b9a\u4e86 OFFSET\uff0c\u5219\u4ece\u504f\u79fb\u91cfoffset\u5f00\u59cb\u663e\u793a\u67e5\u8be2\u7ed3\u679c\u3002\u9ed8\u8ba4\u60c5\u51b5\u4e0b\u504f\u79fb\u91cf\u4e3a0\u3002"),(0,r.yg)("p",null,"8)  \u5982\u679c\u662f\u4f7f\u7528 broker/mini load\uff0c\u5219 URL \u5217\u4e2d\u7684\u8fde\u63a5\u53ef\u4ee5\u4f7f\u7528\u4ee5\u4e0b\u547d\u4ee4\u67e5\u770b\uff1a"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre"},"```sql\nSHOW LOAD WARNINGS ON 'url'\n```\n")),(0,r.yg)("h3",{id:"example"},"Example"),(0,r.yg)("ol",null,(0,r.yg)("li",{parentName:"ol"},(0,r.yg)("p",{parentName:"li"},"\u5c55\u793a\u9ed8\u8ba4 db \u7684\u6240\u6709\u5bfc\u5165\u4efb\u52a1"),(0,r.yg)("pre",{parentName:"li"},(0,r.yg)("code",{parentName:"pre",className:"language-sql"},"SHOW LOAD;\n"))),(0,r.yg)("li",{parentName:"ol"},(0,r.yg)("p",{parentName:"li"},'\u5c55\u793a\u6307\u5b9a db \u7684\u5bfc\u5165\u4efb\u52a1\uff0clabel \u4e2d\u5305\u542b\u5b57\u7b26\u4e32 "2014_01_02"\uff0c\u5c55\u793a\u6700\u8001\u768410\u4e2a'),(0,r.yg)("pre",{parentName:"li"},(0,r.yg)("code",{parentName:"pre",className:"language-sql"},'SHOW LOAD FROM example_db WHERE LABEL LIKE "2014_01_02" LIMIT 10;\n'))),(0,r.yg)("li",{parentName:"ol"},(0,r.yg)("p",{parentName:"li"},'\u5c55\u793a\u6307\u5b9a db \u7684\u5bfc\u5165\u4efb\u52a1\uff0c\u6307\u5b9a label \u4e3a "load_example_db_20140102" \u5e76\u6309 LoadStartTime \u964d\u5e8f\u6392\u5e8f'),(0,r.yg)("pre",{parentName:"li"},(0,r.yg)("code",{parentName:"pre",className:"language-sql"},'SHOW LOAD FROM example_db WHERE LABEL = "load_example_db_20140102" ORDER BY LoadStartTime DESC;\n'))),(0,r.yg)("li",{parentName:"ol"},(0,r.yg)("p",{parentName:"li"},'\u5c55\u793a\u6307\u5b9a db \u7684\u5bfc\u5165\u4efb\u52a1\uff0c\u6307\u5b9a label \u4e3a "load_example_db_20140102" \uff0cstate \u4e3a "loading", \u5e76\u6309 LoadStartTime \u964d\u5e8f\u6392\u5e8f'),(0,r.yg)("pre",{parentName:"li"},(0,r.yg)("code",{parentName:"pre",className:"language-sql"},'SHOW LOAD FROM example_db WHERE LABEL = "load_example_db_20140102" AND STATE = "loading" ORDER BY LoadStartTime DESC;\n'))),(0,r.yg)("li",{parentName:"ol"},(0,r.yg)("p",{parentName:"li"},"\u5c55\u793a\u6307\u5b9a db \u7684\u5bfc\u5165\u4efb\u52a1 \u5e76\u6309 LoadStartTime \u964d\u5e8f\u6392\u5e8f,\u5e76\u4ece\u504f\u79fb\u91cf5\u5f00\u59cb\u663e\u793a10\u6761\u67e5\u8be2\u7ed3\u679c"),(0,r.yg)("pre",{parentName:"li"},(0,r.yg)("code",{parentName:"pre",className:"language-sql"},"SHOW LOAD FROM example_db ORDER BY LoadStartTime DESC limit 5,10;\nSHOW LOAD FROM example_db ORDER BY LoadStartTime DESC limit 10 offset 5;\n"))),(0,r.yg)("li",{parentName:"ol"},(0,r.yg)("p",{parentName:"li"},"\u5c0f\u6279\u91cf\u5bfc\u5165\u662f\u67e5\u770b\u5bfc\u5165\u72b6\u6001\u7684\u547d\u4ee4"),(0,r.yg)("pre",{parentName:"li"},(0,r.yg)("code",{parentName:"pre"},"curl --location-trusted -u {user}:{passwd} http://{hostname}:{port}/api/{database}/_load_info?label={labelname}\n")))),(0,r.yg)("h3",{id:"keywords"},"Keywords"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre"},"SHOW, LOAD\n")),(0,r.yg)("h3",{id:"best-practice"},"Best Practice"))}d.isMDXComponent=!0}}]);