"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([[7210],{15680:(e,n,t)=>{t.d(n,{xA:()=>s,yg:()=>g});var a=t(96540);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function l(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function o(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?l(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):l(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function p(e,n){if(null==e)return{};var t,a,r=function(e,n){if(null==e)return{};var t,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)t=l[a],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)t=l[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var i=a.createContext({}),c=function(e){var n=a.useContext(i),t=n;return e&&(t="function"==typeof e?e(n):o(o({},n),e)),t},s=function(e){var n=c(e.components);return a.createElement(i.Provider,{value:n},e.children)},m="mdxType",u={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},y=a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,l=e.originalType,i=e.parentName,s=p(e,["components","mdxType","originalType","parentName"]),m=c(t),y=r,g=m["".concat(i,".").concat(y)]||m[y]||u[y]||l;return t?a.createElement(g,o(o({ref:n},s),{},{components:t})):a.createElement(g,o({ref:n},s))}));function g(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var l=t.length,o=new Array(l);o[0]=y;var p={};for(var i in n)hasOwnProperty.call(n,i)&&(p[i]=n[i]);p.originalType=e,p[m]="string"==typeof e?e:r,o[1]=p;for(var c=2;c<l;c++)o[c]=t[c];return a.createElement.apply(null,o)}return a.createElement.apply(null,t)}y.displayName="MDXCreateElement"},75306:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>i,contentTitle:()=>o,default:()=>u,frontMatter:()=>l,metadata:()=>p,toc:()=>c});var a=t(58168),r=(t(96540),t(15680));const l={title:"SHOW-DATA",language:"zh-CN"},o=void 0,p={unversionedId:"sql-manual/sql-reference/Show-Statements/SHOW-DATA",id:"version-1.2/sql-manual/sql-reference/Show-Statements/SHOW-DATA",title:"SHOW-DATA",description:"\x3c!--",source:"@site/i18n/zh-CN/docusaurus-plugin-content-docs/version-1.2/sql-manual/sql-reference/Show-Statements/SHOW-DATA.md",sourceDirName:"sql-manual/sql-reference/Show-Statements",slug:"/sql-manual/sql-reference/Show-Statements/SHOW-DATA",permalink:"/zh-CN/docs/1.2/sql-manual/sql-reference/Show-Statements/SHOW-DATA",draft:!1,tags:[],version:"1.2",frontMatter:{title:"SHOW-DATA",language:"zh-CN"},sidebar:"docs",previous:{title:"SHOW-DELETE",permalink:"/zh-CN/docs/1.2/sql-manual/sql-reference/Show-Statements/SHOW-DELETE"},next:{title:"SHOW-ENGINES",permalink:"/zh-CN/docs/1.2/sql-manual/sql-reference/Show-Statements/SHOW-ENGINES"}},i={},c=[{value:"SHOW-DATA",id:"show-data",level:2},{value:"Name",id:"name",level:3},{value:"Description",id:"description",level:3},{value:"Example",id:"example",level:3},{value:"Keywords",id:"keywords",level:3},{value:"Best Practice",id:"best-practice",level:3}],s={toc:c},m="wrapper";function u(e){let{components:n,...t}=e;return(0,r.yg)(m,(0,a.A)({},s,t,{components:n,mdxType:"MDXLayout"}),(0,r.yg)("h2",{id:"show-data"},"SHOW-DATA"),(0,r.yg)("h3",{id:"name"},"Name"),(0,r.yg)("p",null,"SHOW DATA"),(0,r.yg)("h3",{id:"description"},"Description"),(0,r.yg)("p",null,"\u8be5\u8bed\u53e5\u7528\u4e8e\u5c55\u793a\u6570\u636e\u91cf\u3001\u526f\u672c\u6570\u91cf\u4ee5\u53ca\u7edf\u8ba1\u884c\u6570\u3002"),(0,r.yg)("p",null,"\u8bed\u6cd5\uff1a"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-sql"},"SHOW DATA [FROM db_name[.table_name]] [ORDER BY ...];\n")),(0,r.yg)("p",null,"\u8bf4\u660e\uff1a"),(0,r.yg)("ol",null,(0,r.yg)("li",{parentName:"ol"},(0,r.yg)("p",{parentName:"li"},"\u5982\u679c\u4e0d\u6307\u5b9a FROM \u5b50\u53e5\uff0c\u5219\u5c55\u793a\u5f53\u524d db \u4e0b\u7ec6\u5206\u5230\u5404\u4e2a table \u7684\u6570\u636e\u91cf\u548c\u526f\u672c\u6570\u91cf\u3002\u5176\u4e2d\u6570\u636e\u91cf\u4e3a\u6240\u6709\u526f\u672c\u7684\u603b\u6570\u636e\u91cf\u3002\u800c\u526f\u672c\u6570\u91cf\u4e3a\u8868\u7684\u6240\u6709\u5206\u533a\u4ee5\u53ca\u6240\u6709\u7269\u5316\u89c6\u56fe\u7684\u526f\u672c\u6570\u91cf\u3002")),(0,r.yg)("li",{parentName:"ol"},(0,r.yg)("p",{parentName:"li"},"\u5982\u679c\u6307\u5b9a FROM \u5b50\u53e5\uff0c\u5219\u5c55\u793a table \u4e0b\u7ec6\u5206\u5230\u5404\u4e2a\u7269\u5316\u89c6\u56fe\u7684\u6570\u636e\u91cf\u3001\u526f\u672c\u6570\u91cf\u548c\u7edf\u8ba1\u884c\u6570\u3002\u5176\u4e2d\u6570\u636e\u91cf\u4e3a\u6240\u6709\u526f\u672c\u7684\u603b\u6570\u636e\u91cf\u3002\u526f\u672c\u6570\u91cf\u4e3a\u5bf9\u5e94\u7269\u5316\u89c6\u56fe\u7684\u6240\u6709\u5206\u533a\u7684\u526f\u672c\u6570\u91cf\u3002\u7edf\u8ba1\u884c\u6570\u4e3a\u5bf9\u5e94\u7269\u5316\u89c6\u56fe\u7684\u6240\u6709\u5206\u533a\u7edf\u8ba1\u884c\u6570\u3002")),(0,r.yg)("li",{parentName:"ol"},(0,r.yg)("p",{parentName:"li"},"\u7edf\u8ba1\u884c\u6570\u65f6\uff0c\u4ee5\u591a\u4e2a\u526f\u672c\u4e2d\uff0c\u884c\u6570\u6700\u5927\u7684\u90a3\u4e2a\u526f\u672c\u4e3a\u51c6\u3002")),(0,r.yg)("li",{parentName:"ol"},(0,r.yg)("p",{parentName:"li"},"\u7ed3\u679c\u96c6\u4e2d\u7684 ",(0,r.yg)("inlineCode",{parentName:"p"},"Total")," \u884c\u8868\u793a\u6c47\u603b\u884c\u3002",(0,r.yg)("inlineCode",{parentName:"p"},"Quota")," \u884c\u8868\u793a\u5f53\u524d\u6570\u636e\u5e93\u8bbe\u7f6e\u7684\u914d\u989d\u3002",(0,r.yg)("inlineCode",{parentName:"p"},"Left")," \u884c\u8868\u793a\u5269\u4f59\u914d\u989d\u3002")),(0,r.yg)("li",{parentName:"ol"},(0,r.yg)("p",{parentName:"li"},"\u5982\u679c\u60f3\u67e5\u770b\u5404\u4e2a Partition \u7684\u5927\u5c0f\uff0c\u8bf7\u53c2\u9605 ",(0,r.yg)("inlineCode",{parentName:"p"},"help show partitions"),"\u3002")),(0,r.yg)("li",{parentName:"ol"},(0,r.yg)("p",{parentName:"li"},"\u53ef\u4ee5\u4f7f\u7528 ORDER BY \u5bf9\u4efb\u610f\u5217\u7ec4\u5408\u8fdb\u884c\u6392\u5e8f\u3002"))),(0,r.yg)("h3",{id:"example"},"Example"),(0,r.yg)("ol",null,(0,r.yg)("li",{parentName:"ol"},(0,r.yg)("p",{parentName:"li"},"\u5c55\u793a\u9ed8\u8ba4 db \u7684\u5404\u4e2a table \u7684\u6570\u636e\u91cf\uff0c\u526f\u672c\u6570\u91cf\uff0c\u6c47\u603b\u6570\u636e\u91cf\u548c\u6c47\u603b\u526f\u672c\u6570\u91cf\u3002"),(0,r.yg)("pre",{parentName:"li"},(0,r.yg)("code",{parentName:"pre",className:"language-sql"},"SHOW DATA;\n")),(0,r.yg)("pre",{parentName:"li"},(0,r.yg)("code",{parentName:"pre"},"+-----------+-------------+--------------+\n| TableName | Size        | ReplicaCount |\n+-----------+-------------+--------------+\n| tbl1      | 900.000 B   | 6            |\n| tbl2      | 500.000 B   | 3            |\n| Total     | 1.400 KB    | 9            |\n| Quota     | 1024.000 GB | 1073741824   |\n| Left      | 1021.921 GB | 1073741815   |\n+-----------+-------------+--------------+\n"))),(0,r.yg)("li",{parentName:"ol"},(0,r.yg)("p",{parentName:"li"},"\u5c55\u793a\u6307\u5b9a db \u7684\u4e0b\u6307\u5b9a\u8868\u7684\u7ec6\u5206\u6570\u636e\u91cf\u3001\u526f\u672c\u6570\u91cf\u548c\u7edf\u8ba1\u884c\u6570"),(0,r.yg)("pre",{parentName:"li"},(0,r.yg)("code",{parentName:"pre",className:"language-sql"},"SHOW DATA FROM example_db.test;\n")),(0,r.yg)("pre",{parentName:"li"},(0,r.yg)("code",{parentName:"pre"},"+-----------+-----------+-----------+--------------+----------+\n| TableName | IndexName | Size      | ReplicaCount | RowCount |\n+-----------+-----------+-----------+--------------+----------+\n| test      | r1        | 10.000MB  | 30           | 10000    |\n|           | r2        | 20.000MB  | 30           | 20000    |\n|           | test2     | 50.000MB  | 30           | 50000    |\n|           | Total     | 80.000    | 90           |          |\n+-----------+-----------+-----------+--------------+----------+\n"))),(0,r.yg)("li",{parentName:"ol"},(0,r.yg)("p",{parentName:"li"},"\u53ef\u4ee5\u6309\u7167\u6570\u636e\u91cf\u3001\u526f\u672c\u6570\u91cf\u3001\u7edf\u8ba1\u884c\u6570\u7b49\u8fdb\u884c\u7ec4\u5408\u6392\u5e8f"),(0,r.yg)("pre",{parentName:"li"},(0,r.yg)("code",{parentName:"pre",className:"language-sql"},"SHOW DATA ORDER BY ReplicaCount desc,Size asc;\n")),(0,r.yg)("pre",{parentName:"li"},(0,r.yg)("code",{parentName:"pre"},"+-----------+-------------+--------------+\n| TableName | Size        | ReplicaCount |\n+-----------+-------------+--------------+\n| table_c   | 3.102 KB    | 40           |\n| table_d   | .000        | 20           |\n| table_b   | 324.000 B   | 20           |\n| table_a   | 1.266 KB    | 10           |\n| Total     | 4.684 KB    | 90           |\n| Quota     | 1024.000 GB | 1073741824   |\n| Left      | 1024.000 GB | 1073741734   |\n+-----------+-------------+--------------+\n")))),(0,r.yg)("h3",{id:"keywords"},"Keywords"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre"},"SHOW, DATA\n")),(0,r.yg)("h3",{id:"best-practice"},"Best Practice"))}u.isMDXComponent=!0}}]);