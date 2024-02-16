"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([[49018],{15680:(e,a,l)=>{l.d(a,{xA:()=>u,yg:()=>d});var n=l(96540);function t(e,a,l){return a in e?Object.defineProperty(e,a,{value:l,enumerable:!0,configurable:!0,writable:!0}):e[a]=l,e}function r(e,a){var l=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);a&&(n=n.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),l.push.apply(l,n)}return l}function i(e){for(var a=1;a<arguments.length;a++){var l=null!=arguments[a]?arguments[a]:{};a%2?r(Object(l),!0).forEach((function(a){t(e,a,l[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(l)):r(Object(l)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(l,a))}))}return e}function p(e,a){if(null==e)return{};var l,n,t=function(e,a){if(null==e)return{};var l,n,t={},r=Object.keys(e);for(n=0;n<r.length;n++)l=r[n],a.indexOf(l)>=0||(t[l]=e[l]);return t}(e,a);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)l=r[n],a.indexOf(l)>=0||Object.prototype.propertyIsEnumerable.call(e,l)&&(t[l]=e[l])}return t}var o=n.createContext({}),m=function(e){var a=n.useContext(o),l=a;return e&&(l="function"==typeof e?e(a):i(i({},a),e)),l},u=function(e){var a=m(e.components);return n.createElement(o.Provider,{value:a},e.children)},s="mdxType",y={inlineCode:"code",wrapper:function(e){var a=e.children;return n.createElement(n.Fragment,{},a)}},g=n.forwardRef((function(e,a){var l=e.components,t=e.mdxType,r=e.originalType,o=e.parentName,u=p(e,["components","mdxType","originalType","parentName"]),s=m(l),g=t,d=s["".concat(o,".").concat(g)]||s[g]||y[g]||r;return l?n.createElement(d,i(i({ref:a},u),{},{components:l})):n.createElement(d,i({ref:a},u))}));function d(e,a){var l=arguments,t=a&&a.mdxType;if("string"==typeof e||t){var r=l.length,i=new Array(r);i[0]=g;var p={};for(var o in a)hasOwnProperty.call(a,o)&&(p[o]=a[o]);p.originalType=e,p[s]="string"==typeof e?e:t,i[1]=p;for(var m=2;m<r;m++)i[m]=l[m];return n.createElement.apply(null,i)}return n.createElement.apply(null,l)}g.displayName="MDXCreateElement"},65475:(e,a,l)=>{l.r(a),l.d(a,{assets:()=>o,contentTitle:()=>i,default:()=>y,frontMatter:()=>r,metadata:()=>p,toc:()=>m});var n=l(58168),t=(l(96540),l(15680));const r={title:"\u6570\u636e\u5bfc\u51fa",language:"zh-CN"},i=void 0,p={unversionedId:"data-operate/export/export-manual",id:"version-2.0/data-operate/export/export-manual",title:"\u6570\u636e\u5bfc\u51fa",description:"\x3c!--",source:"@site/i18n/zh-CN/docusaurus-plugin-content-docs/version-2.0/data-operate/export/export-manual.md",sourceDirName:"data-operate/export",slug:"/data-operate/export/export-manual",permalink:"/zh-CN/docs/data-operate/export/export-manual",draft:!1,tags:[],version:"2.0",frontMatter:{title:"\u6570\u636e\u5bfc\u51fa",language:"zh-CN"},sidebar:"docs",previous:{title:"\u6700\u5c0f\u5199\u5165\u526f\u672c\u6570",permalink:"/zh-CN/docs/data-operate/import/import-advanced/min-load-replica-num"},next:{title:"\u5bfc\u51fa\u67e5\u8be2\u7ed3\u679c\u96c6",permalink:"/zh-CN/docs/data-operate/export/outfile"}},o={},m=[{value:"\u539f\u7406",id:"\u539f\u7406",level:2},{value:"\u5f00\u59cb\u5bfc\u51fa",id:"\u5f00\u59cb\u5bfc\u51fa",level:2},{value:"\u5bfc\u51fa\u5230HDFS",id:"\u5bfc\u51fa\u5230hdfs",level:3},{value:"\u5bfc\u51fa\u5230\u5bf9\u8c61\u5b58\u50a8",id:"\u5bfc\u51fa\u5230\u5bf9\u8c61\u5b58\u50a8",level:3},{value:"\u67e5\u770b\u5bfc\u51fa\u72b6\u6001",id:"\u67e5\u770b\u5bfc\u51fa\u72b6\u6001",level:3},{value:"\u53d6\u6d88\u5bfc\u51fa\u4efb\u52a1",id:"\u53d6\u6d88\u5bfc\u51fa\u4efb\u52a1",level:3},{value:"\u6700\u4f73\u5b9e\u8df5",id:"\u6700\u4f73\u5b9e\u8df5",level:2},{value:"\u5e76\u53d1\u5bfc\u51fa",id:"\u5e76\u53d1\u5bfc\u51fa",level:3},{value:"exec_mem_limit",id:"exec_mem_limit",level:3},{value:"\u6ce8\u610f\u4e8b\u9879",id:"\u6ce8\u610f\u4e8b\u9879",level:2},{value:"\u76f8\u5173\u914d\u7f6e",id:"\u76f8\u5173\u914d\u7f6e",level:2},{value:"FE",id:"fe",level:3},{value:"\u66f4\u591a\u5e2e\u52a9",id:"\u66f4\u591a\u5e2e\u52a9",level:2}],u={toc:m},s="wrapper";function y(e){let{components:a,...l}=e;return(0,t.yg)(s,(0,n.A)({},u,l,{components:a,mdxType:"MDXLayout"}),(0,t.yg)("h1",{id:"\u6570\u636e\u5bfc\u51fa"},"\u6570\u636e\u5bfc\u51fa"),(0,t.yg)("p",null,"\u5f02\u6b65\u5bfc\u51fa\uff08Export\uff09\u662f Doris \u63d0\u4f9b\u7684\u4e00\u79cd\u5c06\u6570\u636e\u5f02\u6b65\u5bfc\u51fa\u7684\u529f\u80fd\u3002\u8be5\u529f\u80fd\u53ef\u4ee5\u5c06\u7528\u6237\u6307\u5b9a\u7684\u8868\u6216\u5206\u533a\u7684\u6570\u636e\uff0c\u4ee5\u6307\u5b9a\u7684\u6587\u4ef6\u683c\u5f0f\uff0c\u901a\u8fc7 Broker \u8fdb\u7a0b\u6216 S3\u534f\u8bae/HDFS\u534f\u8bae \u5bfc\u51fa\u5230\u8fdc\u7aef\u5b58\u50a8\u4e0a\uff0c\u5982 \u5bf9\u8c61\u5b58\u50a8 / HDFS \u7b49\u3002"),(0,t.yg)("p",null,"\u5f53\u524d\uff0cEXPORT\u652f\u6301\u5bfc\u51fa Doris\u672c\u5730\u8868 / View\u89c6\u56fe / \u5916\u8868\uff0c\u652f\u6301\u5bfc\u51fa\u5230 parquet / orc / csv / csv_with_names / csv_with_names_and_types \u6587\u4ef6\u683c\u5f0f\u3002"),(0,t.yg)("p",null,"\u672c\u6587\u6863\u4e3b\u8981\u4ecb\u7ecd Export \u7684\u57fa\u672c\u539f\u7406\u3001\u4f7f\u7528\u65b9\u5f0f\u3001\u6700\u4f73\u5b9e\u8df5\u4ee5\u53ca\u6ce8\u610f\u4e8b\u9879\u3002"),(0,t.yg)("h2",{id:"\u539f\u7406"},"\u539f\u7406"),(0,t.yg)("p",null,"\u7528\u6237\u63d0\u4ea4\u4e00\u4e2a Export \u4f5c\u4e1a\u540e\u3002Doris \u4f1a\u7edf\u8ba1\u8fd9\u4e2a\u4f5c\u4e1a\u6d89\u53ca\u7684\u6240\u6709 Tablet\u3002\u7136\u540e\u6839\u636e",(0,t.yg)("inlineCode",{parentName:"p"},"parallelism"),"\u53c2\u6570\uff08\u7531\u7528\u6237\u6307\u5b9a\uff09\u5bf9\u8fd9\u4e9b Tablet \u8fdb\u884c\u5206\u7ec4\u3002\u6bcf\u4e2a\u7ebf\u7a0b\u8d1f\u8d23\u4e00\u7ec4tablets\uff0c\u751f\u6210\u82e5\u5e72\u4e2a",(0,t.yg)("inlineCode",{parentName:"p"},"SELECT INTO OUTFILE"),"\u67e5\u8be2\u8ba1\u5212\u3002\u8be5\u67e5\u8be2\u8ba1\u5212\u4f1a\u8bfb\u53d6\u6240\u5305\u542b\u7684 Tablet \u4e0a\u7684\u6570\u636e\uff0c\u7136\u540e\u901a\u8fc7 S3\u534f\u8bae / HDFS\u534f\u8bae / Broker \u5c06\u6570\u636e\u5199\u5230\u8fdc\u7aef\u5b58\u50a8\u6307\u5b9a\u7684\u8def\u5f84\u4e2d\u3002"),(0,t.yg)("p",null,"\u603b\u4f53\u7684\u6267\u884c\u6d41\u7a0b\u5982\u4e0b:"),(0,t.yg)("ol",null,(0,t.yg)("li",{parentName:"ol"},"\u7528\u6237\u63d0\u4ea4\u4e00\u4e2a Export \u4f5c\u4e1a\u5230 FE\u3002"),(0,t.yg)("li",{parentName:"ol"},"FE\u4f1a\u7edf\u8ba1\u8981\u5bfc\u51fa\u7684\u6240\u6709Tablets\uff0c\u7136\u540e\u6839\u636e",(0,t.yg)("inlineCode",{parentName:"li"},"parallelism"),"\u53c2\u6570\u5c06\u6240\u6709Tablets\u5206\u7ec4\uff0c\u6bcf\u4e00\u7ec4\u518d\u6839\u636e",(0,t.yg)("inlineCode",{parentName:"li"},"maximum_number_of_export_partitions"),"\u53c2\u6570\u751f\u6210\u82e5\u5e72\u4e2a",(0,t.yg)("inlineCode",{parentName:"li"},"SELECT INTO OUTFILE"),"\u67e5\u8be2\u8ba1\u5212"),(0,t.yg)("li",{parentName:"ol"},"\u6839\u636e",(0,t.yg)("inlineCode",{parentName:"li"},"parallelism"),"\u53c2\u6570\uff0c\u751f\u6210\u76f8\u540c\u4e2a\u6570\u7684",(0,t.yg)("inlineCode",{parentName:"li"},"ExportTaskExecutor"),"\uff0c\u6bcf\u4e00\u4e2a",(0,t.yg)("inlineCode",{parentName:"li"},"ExportTaskExecutor"),"\u7531\u4e00\u4e2a\u7ebf\u7a0b\u8d1f\u8d23\uff0c\u7ebf\u7a0b\u7531FE\u7684Job \u8c03\u5ea6\u6846\u67b6\u53bb\u8c03\u5ea6\u6267\u884c\u3002"),(0,t.yg)("li",{parentName:"ol"},"FE\u7684Job\u8c03\u5ea6\u5668\u4f1a\u53bb\u8c03\u5ea6",(0,t.yg)("inlineCode",{parentName:"li"},"ExportTaskExecutor"),"\u5e76\u6267\u884c\uff0c\u6bcf\u4e00\u4e2a",(0,t.yg)("inlineCode",{parentName:"li"},"ExportTaskExecutor"),"\u4f1a\u4e32\u884c\u5730\u53bb\u6267\u884c\u7531\u5b83\u8d1f\u8d23\u7684\u82e5\u5e72\u4e2a",(0,t.yg)("inlineCode",{parentName:"li"},"SELECT INTO OUTFILE"),"\u67e5\u8be2\u8ba1\u5212\u3002")),(0,t.yg)("h2",{id:"\u5f00\u59cb\u5bfc\u51fa"},"\u5f00\u59cb\u5bfc\u51fa"),(0,t.yg)("p",null,"Export \u7684\u8be6\u7ec6\u7528\u6cd5\u53ef\u53c2\u8003 ",(0,t.yg)("a",{parentName:"p",href:"/zh-CN/docs/sql-manual/sql-reference/Data-Manipulation-Statements/Manipulation/EXPORT"},"EXPORT")," \u3002"),(0,t.yg)("h3",{id:"\u5bfc\u51fa\u5230hdfs"},"\u5bfc\u51fa\u5230HDFS"),(0,t.yg)("pre",null,(0,t.yg)("code",{parentName:"pre",className:"language-sql"},'EXPORT TABLE db1.tbl1 \nPARTITION (p1,p2)\n[WHERE [expr]]\nTO "hdfs://host/path/to/export/" \nPROPERTIES\n(\n    "label" = "mylabel",\n    "column_separator"=",",\n    "columns" = "col1,col2",\n    "parallelusm" = "3"\n)\nWITH BROKER "hdfs"\n(\n    "username" = "user",\n    "password" = "passwd"\n);\n')),(0,t.yg)("ul",null,(0,t.yg)("li",{parentName:"ul"},(0,t.yg)("inlineCode",{parentName:"li"},"label"),"\uff1a\u672c\u6b21\u5bfc\u51fa\u4f5c\u4e1a\u7684\u6807\u8bc6\u3002\u540e\u7eed\u53ef\u4ee5\u4f7f\u7528\u8fd9\u4e2a\u6807\u8bc6\u67e5\u770b\u4f5c\u4e1a\u72b6\u6001\u3002"),(0,t.yg)("li",{parentName:"ul"},(0,t.yg)("inlineCode",{parentName:"li"},"column_separator"),"\uff1a\u5217\u5206\u9694\u7b26\u3002\u9ed8\u8ba4\u4e3a ",(0,t.yg)("inlineCode",{parentName:"li"},"\\t"),"\u3002\u652f\u6301\u4e0d\u53ef\u89c1\u5b57\u7b26\uff0c\u6bd4\u5982 '\\x07'\u3002"),(0,t.yg)("li",{parentName:"ul"},(0,t.yg)("inlineCode",{parentName:"li"},"columns"),"\uff1a\u8981\u5bfc\u51fa\u7684\u5217\uff0c\u4f7f\u7528\u82f1\u6587\u72b6\u6001\u9017\u53f7\u9694\u5f00\uff0c\u5982\u679c\u4e0d\u586b\u8fd9\u4e2a\u53c2\u6570\u9ed8\u8ba4\u662f\u5bfc\u51fa\u8868\u7684\u6240\u6709\u5217\u3002"),(0,t.yg)("li",{parentName:"ul"},(0,t.yg)("inlineCode",{parentName:"li"},"line_delimiter"),"\uff1a\u884c\u5206\u9694\u7b26\u3002\u9ed8\u8ba4\u4e3a ",(0,t.yg)("inlineCode",{parentName:"li"},"\\n"),"\u3002\u652f\u6301\u4e0d\u53ef\u89c1\u5b57\u7b26\uff0c\u6bd4\u5982 '\\x07'\u3002"),(0,t.yg)("li",{parentName:"ul"},(0,t.yg)("inlineCode",{parentName:"li"},"parallelusm"),"\uff1a\u5e76\u53d13\u4e2a\u7ebf\u7a0b\u53bb\u5bfc\u51fa\u3002")),(0,t.yg)("h3",{id:"\u5bfc\u51fa\u5230\u5bf9\u8c61\u5b58\u50a8"},"\u5bfc\u51fa\u5230\u5bf9\u8c61\u5b58\u50a8"),(0,t.yg)("p",null,"\u901a\u8fc7s3 \u534f\u8bae\u76f4\u63a5\u5c06\u6570\u636e\u5bfc\u51fa\u5230\u6307\u5b9a\u7684\u5b58\u50a8."),(0,t.yg)("pre",null,(0,t.yg)("code",{parentName:"pre",className:"language-sql"},'EXPORT TABLE test TO "s3://bucket/path/to/export/dir/"\nWITH S3 (\n    "s3.endpoint" = "http://host",\n    "s3.access_key" = "AK",\n    "s3.secret_key"="SK",\n    "s3.region" = "region"\n);\n')),(0,t.yg)("ul",null,(0,t.yg)("li",{parentName:"ul"},(0,t.yg)("inlineCode",{parentName:"li"},"s3.access_key"),"/",(0,t.yg)("inlineCode",{parentName:"li"},"s3.secret_key"),"\uff1a\u662f\u60a8\u8bbf\u95ee\u5bf9\u8c61\u5b58\u50a8\u7684ACCESS_KEY/SECRET_KEY"),(0,t.yg)("li",{parentName:"ul"},(0,t.yg)("inlineCode",{parentName:"li"},"s3.endpoint"),"\uff1aEndpoint\u8868\u793a\u5bf9\u8c61\u5b58\u50a8\u5bf9\u5916\u670d\u52a1\u7684\u8bbf\u95ee\u57df\u540d."),(0,t.yg)("li",{parentName:"ul"},(0,t.yg)("inlineCode",{parentName:"li"},"s3.region"),"\uff1a\u8868\u793a\u5bf9\u8c61\u5b58\u50a8\u6570\u636e\u4e2d\u5fc3\u6240\u5728\u7684\u5730\u57df.")),(0,t.yg)("h3",{id:"\u67e5\u770b\u5bfc\u51fa\u72b6\u6001"},"\u67e5\u770b\u5bfc\u51fa\u72b6\u6001"),(0,t.yg)("p",null,"\u63d0\u4ea4\u4f5c\u4e1a\u540e\uff0c\u53ef\u4ee5\u901a\u8fc7  ",(0,t.yg)("a",{parentName:"p",href:"/zh-CN/docs/sql-manual/sql-reference/Show-Statements/SHOW-EXPORT"},"SHOW EXPORT")," \u547d\u4ee4\u67e5\u8be2\u5bfc\u51fa\u4f5c\u4e1a\u72b6\u6001\u3002\u7ed3\u679c\u4e3e\u4f8b\u5982\u4e0b\uff1a"),(0,t.yg)("pre",null,(0,t.yg)("code",{parentName:"pre",className:"language-sql"},'mysql> show EXPORT\\G;\n*************************** 1. row ***************************\n     JobId: 14008\n     State: FINISHED\n  Progress: 100%\n  TaskInfo: {"partitions":[],"max_file_size":"","delete_existing_files":"","columns":"","format":"csv","column_separator":"\\t","line_delimiter":"\\n","db":"default_cluster:demo","tbl":"student4","tablet_num":30}\n      Path: hdfs://host/path/to/export/\nCreateTime: 2019-06-25 17:08:24\n StartTime: 2019-06-25 17:08:28\nFinishTime: 2019-06-25 17:08:34\n   Timeout: 3600\n  ErrorMsg: NULL\n  OutfileInfo: [\n  [\n    {\n      "fileNumber": "1",\n      "totalRows": "4",\n      "fileSize": "34bytes",\n      "url": "file:///127.0.0.1/Users/fangtiewei/tmp_data/export/f1ab7dcc31744152-bbb4cda2f5c88eac_"\n    }\n  ]\n]\n1 row in set (0.01 sec)\n')),(0,t.yg)("ul",null,(0,t.yg)("li",{parentName:"ul"},"JobId\uff1a\u4f5c\u4e1a\u7684\u552f\u4e00 ID"),(0,t.yg)("li",{parentName:"ul"},"State\uff1a\u4f5c\u4e1a\u72b6\u6001\uff1a",(0,t.yg)("ul",{parentName:"li"},(0,t.yg)("li",{parentName:"ul"},"PENDING\uff1a\u4f5c\u4e1a\u5f85\u8c03\u5ea6"),(0,t.yg)("li",{parentName:"ul"},"EXPORTING\uff1a\u6570\u636e\u5bfc\u51fa\u4e2d"),(0,t.yg)("li",{parentName:"ul"},"FINISHED\uff1a\u4f5c\u4e1a\u6210\u529f"),(0,t.yg)("li",{parentName:"ul"},"CANCELLED\uff1a\u4f5c\u4e1a\u5931\u8d25"))),(0,t.yg)("li",{parentName:"ul"},"Progress\uff1a\u4f5c\u4e1a\u8fdb\u5ea6\u3002\u8be5\u8fdb\u5ea6\u4ee5\u67e5\u8be2\u8ba1\u5212\u4e3a\u5355\u4f4d\u3002\u5047\u8bbe\u4e00\u5171 10 \u4e2a\u7ebf\u7a0b\uff0c\u5f53\u524d\u5df2\u5b8c\u6210 3 \u4e2a\uff0c\u5219\u8fdb\u5ea6\u4e3a 30%\u3002"),(0,t.yg)("li",{parentName:"ul"},"TaskInfo\uff1a\u4ee5 Json \u683c\u5f0f\u5c55\u793a\u7684\u4f5c\u4e1a\u4fe1\u606f\uff1a",(0,t.yg)("ul",{parentName:"li"},(0,t.yg)("li",{parentName:"ul"},"db\uff1a\u6570\u636e\u5e93\u540d"),(0,t.yg)("li",{parentName:"ul"},"tbl\uff1a\u8868\u540d"),(0,t.yg)("li",{parentName:"ul"},"partitions\uff1a\u6307\u5b9a\u5bfc\u51fa\u7684\u5206\u533a\u3002",(0,t.yg)("inlineCode",{parentName:"li"},"\u7a7a"),"\u5217\u8868 \u8868\u793a\u6240\u6709\u5206\u533a\u3002"),(0,t.yg)("li",{parentName:"ul"},"column_separator\uff1a\u5bfc\u51fa\u6587\u4ef6\u7684\u5217\u5206\u9694\u7b26\u3002"),(0,t.yg)("li",{parentName:"ul"},"line_delimiter\uff1a\u5bfc\u51fa\u6587\u4ef6\u7684\u884c\u5206\u9694\u7b26\u3002"),(0,t.yg)("li",{parentName:"ul"},"tablet num\uff1a\u6d89\u53ca\u7684\u603b Tablet \u6570\u91cf\u3002"),(0,t.yg)("li",{parentName:"ul"},"broker\uff1a\u4f7f\u7528\u7684 broker \u7684\u540d\u79f0\u3002"),(0,t.yg)("li",{parentName:"ul"},"coord num\uff1a\u67e5\u8be2\u8ba1\u5212\u7684\u4e2a\u6570\u3002"),(0,t.yg)("li",{parentName:"ul"},"max_file_size\uff1a\u4e00\u4e2a\u5bfc\u51fa\u6587\u4ef6\u7684\u6700\u5927\u5927\u5c0f\u3002"),(0,t.yg)("li",{parentName:"ul"},"delete_existing_files\uff1a\u662f\u5426\u5220\u9664\u5bfc\u51fa\u76ee\u5f55\u4e0b\u5df2\u5b58\u5728\u7684\u6587\u4ef6\u53ca\u76ee\u5f55\u3002"),(0,t.yg)("li",{parentName:"ul"},"columns\uff1a\u6307\u5b9a\u9700\u8981\u5bfc\u51fa\u7684\u5217\u540d\uff0c\u7a7a\u503c\u4ee3\u8868\u5bfc\u51fa\u6240\u6709\u5217\u3002"),(0,t.yg)("li",{parentName:"ul"},"format\uff1a\u5bfc\u51fa\u7684\u6587\u4ef6\u683c\u5f0f"))),(0,t.yg)("li",{parentName:"ul"},"Path\uff1a\u8fdc\u7aef\u5b58\u50a8\u4e0a\u7684\u5bfc\u51fa\u8def\u5f84\u3002"),(0,t.yg)("li",{parentName:"ul"},"CreateTime/StartTime/FinishTime\uff1a\u4f5c\u4e1a\u7684\u521b\u5efa\u65f6\u95f4\u3001\u5f00\u59cb\u8c03\u5ea6\u65f6\u95f4\u548c\u7ed3\u675f\u65f6\u95f4\u3002"),(0,t.yg)("li",{parentName:"ul"},"Timeout\uff1a\u4f5c\u4e1a\u8d85\u65f6\u65f6\u95f4\u3002\u5355\u4f4d\u662f\u79d2\u3002\u8be5\u65f6\u95f4\u4ece CreateTime \u5f00\u59cb\u8ba1\u7b97\u3002"),(0,t.yg)("li",{parentName:"ul"},"ErrorMsg\uff1a\u5982\u679c\u4f5c\u4e1a\u51fa\u73b0\u9519\u8bef\uff0c\u8fd9\u91cc\u4f1a\u663e\u793a\u9519\u8bef\u539f\u56e0\u3002"),(0,t.yg)("li",{parentName:"ul"},"OutfileInfo\uff1a\u5982\u679c\u4f5c\u4e1a\u5bfc\u51fa\u6210\u529f\uff0c\u8fd9\u91cc\u4f1a\u663e\u793a\u5177\u4f53\u7684",(0,t.yg)("inlineCode",{parentName:"li"},"SELECT INTO OUTFILE"),"\u7ed3\u679c\u4fe1\u606f\u3002")),(0,t.yg)("h3",{id:"\u53d6\u6d88\u5bfc\u51fa\u4efb\u52a1"},"\u53d6\u6d88\u5bfc\u51fa\u4efb\u52a1"),(0,t.yg)("version",{since:"1.2.2"}),(0,t.yg)("p",null,"\u63d0\u4ea4\u4f5c\u4e1a\u540e\uff0c\u53ef\u4ee5\u901a\u8fc7  ",(0,t.yg)("a",{parentName:"p",href:"/zh-CN/docs/sql-manual/sql-reference/Data-Manipulation-Statements/Manipulation/CANCEL-EXPORT"},"CANCEL EXPORT")," \u547d\u4ee4\u53d6\u6d88\u5bfc\u51fa\u4f5c\u4e1a\u3002\u53d6\u6d88\u547d\u4ee4\u4e3e\u4f8b\u5982\u4e0b\uff1a"),(0,t.yg)("pre",null,(0,t.yg)("code",{parentName:"pre",className:"language-sql"},'CANCEL EXPORT\nFROM example_db\nWHERE LABEL like "%example%";\n')),(0,t.yg)("h2",{id:"\u6700\u4f73\u5b9e\u8df5"},"\u6700\u4f73\u5b9e\u8df5"),(0,t.yg)("h3",{id:"\u5e76\u53d1\u5bfc\u51fa"},"\u5e76\u53d1\u5bfc\u51fa"),(0,t.yg)("p",null,"\u4e00\u4e2a Export \u4f5c\u4e1a\u53ef\u4ee5\u8bbe\u7f6e",(0,t.yg)("inlineCode",{parentName:"p"},"parallelism"),"\u53c2\u6570\u6765\u5e76\u53d1\u5bfc\u51fa\u6570\u636e\u3002",(0,t.yg)("inlineCode",{parentName:"p"},"parallelism"),"\u53c2\u6570\u5b9e\u9645\u5c31\u662f\u6307\u5b9a\u6267\u884c EXPORT \u4f5c\u4e1a\u7684\u7ebf\u7a0b\u6570\u91cf\u3002\u6bcf\u4e00\u4e2a\u7ebf\u7a0b\u4f1a\u8d1f\u8d23\u5bfc\u51fa\u8868\u7684\u90e8\u5206Tablets\u3002"),(0,t.yg)("p",null,"\u4e00\u4e2a Export \u4f5c\u4e1a\u7684\u5e95\u5c42\u6267\u884c\u903b\u8f91\u5b9e\u9645\u4e0a\u662f",(0,t.yg)("inlineCode",{parentName:"p"},"SELECT INTO OUTFILE"),"\u8bed\u53e5\uff0c",(0,t.yg)("inlineCode",{parentName:"p"},"parallelism"),"\u53c2\u6570\u8bbe\u7f6e\u7684\u6bcf\u4e00\u4e2a\u7ebf\u7a0b\u90fd\u4f1a\u53bb\u6267\u884c\u72ec\u7acb\u7684",(0,t.yg)("inlineCode",{parentName:"p"},"SELECT INTO OUTFILE"),"\u8bed\u53e5\u3002"),(0,t.yg)("p",null,"Export \u4f5c\u4e1a\u62c6\u5206\u6210\u591a\u4e2a",(0,t.yg)("inlineCode",{parentName:"p"},"SELECT INTO OUTFILE"),"\u7684\u5177\u4f53\u903b\u8f91\u662f\uff1a\u5c06\u8be5\u8868\u7684\u6240\u6709tablets\u5e73\u5747\u7684\u5206\u7ed9\u6240\u6709parallel\u7ebf\u7a0b\uff0c\u5982\uff1a"),(0,t.yg)("ul",null,(0,t.yg)("li",{parentName:"ul"},"num(tablets) = 40, parallelism = 3\uff0c\u5219\u8fd93\u4e2a\u7ebf\u7a0b\u5404\u81ea\u8d1f\u8d23\u7684tablets\u6570\u91cf\u5206\u522b\u4e3a 14\uff0c13\uff0c13\u4e2a\u3002"),(0,t.yg)("li",{parentName:"ul"},"num(tablets) = 2, parallelism = 3\uff0c\u5219Doris\u4f1a\u81ea\u52a8\u5c06parallelism\u8bbe\u7f6e\u4e3a2\uff0c\u6bcf\u4e00\u4e2a\u7ebf\u7a0b\u8d1f\u8d23\u4e00\u4e2atablets\u3002")),(0,t.yg)("p",null,"\u5f53\u4e00\u4e2a\u7ebf\u7a0b\u8d1f\u8d23\u7684tablest\u8d85\u8fc7 ",(0,t.yg)("inlineCode",{parentName:"p"},"maximum_tablets_of_outfile_in_export")," \u6570\u503c\uff08\u9ed8\u8ba4\u4e3a10\uff0c\u53ef\u5728fe.conf\u4e2d\u6dfb\u52a0",(0,t.yg)("inlineCode",{parentName:"p"},"maximum_tablets_of_outfile_in_export"),"\u53c2\u6570\u6765\u4fee\u6539\u8be5\u503c\uff09\u65f6\uff0c\u8be5\u7ebf\u7a0b\u5c31\u4f1a\u62c6\u5206\u4e3a\u591a\u4e2a",(0,t.yg)("inlineCode",{parentName:"p"},"SELECT INTO OUTFILE"),"\u8bed\u53e5\uff0c\u5982\uff1a"),(0,t.yg)("ul",null,(0,t.yg)("li",{parentName:"ul"},"\u4e00\u4e2a\u7ebf\u7a0b\u8d1f\u8d23\u7684tablets\u6570\u91cf\u5206\u522b\u4e3a 14\uff0c",(0,t.yg)("inlineCode",{parentName:"li"},"maximum_tablets_of_outfile_in_export = 10"),"\uff0c\u5219\u8be5\u7ebf\u7a0b\u8d1f\u8d23\u4e24\u4e2a",(0,t.yg)("inlineCode",{parentName:"li"},"SELECT INTO OUTFILE"),"\u8bed\u53e5\uff0c\u7b2c\u4e00\u4e2a",(0,t.yg)("inlineCode",{parentName:"li"},"SELECT INTO OUTFILE"),"\u8bed\u53e5\u5bfc\u51fa10\u4e2atablets\uff0c\u7b2c\u4e8c\u4e2a",(0,t.yg)("inlineCode",{parentName:"li"},"SELECT INTO OUTFILE"),"\u8bed\u53e5\u5bfc\u51fa4\u4e2atablets\uff0c\u4e24\u4e2a",(0,t.yg)("inlineCode",{parentName:"li"},"SELECT INTO OUTFILE"),"\u8bed\u53e5\u7531\u8be5\u7ebf\u7a0b\u4e32\u884c\u6267\u884c\u3002")),(0,t.yg)("p",null,"\u5f53\u6240\u8981\u5bfc\u51fa\u7684\u6570\u636e\u91cf\u5f88\u5927\u65f6\uff0c\u53ef\u4ee5\u8003\u8651\u9002\u5f53\u8c03\u5927",(0,t.yg)("inlineCode",{parentName:"p"},"parallelism"),"\u53c2\u6570\u6765\u589e\u52a0\u5e76\u53d1\u5bfc\u51fa\u3002\u82e5\u673a\u5668\u6838\u6570\u7d27\u5f20\uff0c\u65e0\u6cd5\u518d\u589e\u52a0",(0,t.yg)("inlineCode",{parentName:"p"},"parallelism")," \u800c\u5bfc\u51fa\u8868\u7684Tablets\u53c8\u8f83\u591a \u65f6\uff0c\u53ef\u4ee5\u8003\u8651\u8c03\u5927",(0,t.yg)("inlineCode",{parentName:"p"},"maximum_tablets_of_outfile_in_export"),"\u6765\u589e\u52a0\u4e00\u4e2a",(0,t.yg)("inlineCode",{parentName:"p"},"SELECT INTO OUTFILE"),"\u8bed\u53e5\u8d1f\u8d23\u7684tablets\u6570\u91cf\uff0c\u4e5f\u53ef\u4ee5\u52a0\u5feb\u5bfc\u51fa\u901f\u5ea6\u3002"),(0,t.yg)("h3",{id:"exec_mem_limit"},"exec","_","mem","_","limit"),(0,t.yg)("p",null,"\u901a\u5e38\u4e00\u4e2a Export \u4f5c\u4e1a\u7684\u67e5\u8be2\u8ba1\u5212\u53ea\u6709 ",(0,t.yg)("inlineCode",{parentName:"p"},"\u626b\u63cf-\u5bfc\u51fa")," \u4e24\u90e8\u5206\uff0c\u4e0d\u6d89\u53ca\u9700\u8981\u592a\u591a\u5185\u5b58\u7684\u8ba1\u7b97\u903b\u8f91\u3002\u6240\u4ee5\u901a\u5e38 2GB \u7684\u9ed8\u8ba4\u5185\u5b58\u9650\u5236\u53ef\u4ee5\u6ee1\u8db3\u9700\u6c42\u3002"),(0,t.yg)("p",null,"\u4f46\u5728\u67d0\u4e9b\u573a\u666f\u4e0b\uff0c\u6bd4\u5982\u4e00\u4e2a\u67e5\u8be2\u8ba1\u5212\uff0c\u5728\u540c\u4e00\u4e2a BE \u4e0a\u9700\u8981\u626b\u63cf\u7684 Tablet \u8fc7\u591a\uff0c\u6216\u8005 Tablet \u7684\u6570\u636e\u7248\u672c\u8fc7\u591a\u65f6\uff0c\u53ef\u80fd\u4f1a\u5bfc\u81f4\u5185\u5b58\u4e0d\u8db3\u3002\u53ef\u4ee5\u8c03\u6574session\u53d8\u91cf",(0,t.yg)("inlineCode",{parentName:"p"},"exec_mem_limit"),"\u6765\u8c03\u5927\u5185\u5b58\u4f7f\u7528\u9650\u5236\u3002"),(0,t.yg)("h2",{id:"\u6ce8\u610f\u4e8b\u9879"},"\u6ce8\u610f\u4e8b\u9879"),(0,t.yg)("ul",null,(0,t.yg)("li",{parentName:"ul"},"\u4e0d\u5efa\u8bae\u4e00\u6b21\u6027\u5bfc\u51fa\u5927\u91cf\u6570\u636e\u3002\u4e00\u4e2a Export \u4f5c\u4e1a\u5efa\u8bae\u7684\u5bfc\u51fa\u6570\u636e\u91cf\u6700\u5927\u5728\u51e0\u5341 GB\u3002\u8fc7\u5927\u7684\u5bfc\u51fa\u4f1a\u5bfc\u81f4\u66f4\u591a\u7684\u5783\u573e\u6587\u4ef6\u548c\u66f4\u9ad8\u7684\u91cd\u8bd5\u6210\u672c\u3002"),(0,t.yg)("li",{parentName:"ul"},"\u5982\u679c\u8868\u6570\u636e\u91cf\u8fc7\u5927\uff0c\u5efa\u8bae\u6309\u7167\u5206\u533a\u5bfc\u51fa\u3002"),(0,t.yg)("li",{parentName:"ul"},"\u5728 Export \u4f5c\u4e1a\u8fd0\u884c\u8fc7\u7a0b\u4e2d\uff0c\u5982\u679c FE \u53d1\u751f\u91cd\u542f\u6216\u5207\u4e3b\uff0c\u5219 Export \u4f5c\u4e1a\u4f1a\u5931\u8d25\uff0c\u9700\u8981\u7528\u6237\u91cd\u65b0\u63d0\u4ea4\u3002"),(0,t.yg)("li",{parentName:"ul"},"\u5982\u679c Export \u4f5c\u4e1a\u8fd0\u884c\u5931\u8d25\uff0c\u5df2\u7ecf\u751f\u6210\u7684\u6587\u4ef6\u4e0d\u4f1a\u88ab\u5220\u9664\uff0c\u9700\u8981\u7528\u6237\u624b\u52a8\u5220\u9664\u3002"),(0,t.yg)("li",{parentName:"ul"},"Export \u4f5c\u4e1a\u53ef\u4ee5\u5bfc\u51fa Base \u8868 / View\u89c6\u56fe\u8868 / \u5916\u8868 \u7684\u6570\u636e\uff0c\u4e0d\u4f1a\u5bfc\u51fa Rollup Index \u7684\u6570\u636e\u3002"),(0,t.yg)("li",{parentName:"ul"},"Export \u4f5c\u4e1a\u4f1a\u626b\u63cf\u6570\u636e\uff0c\u5360\u7528 IO \u8d44\u6e90\uff0c\u53ef\u80fd\u4f1a\u5f71\u54cd\u7cfb\u7edf\u7684\u67e5\u8be2\u5ef6\u8fdf\u3002"),(0,t.yg)("li",{parentName:"ul"},"\u5728\u4f7f\u7528EXPORT\u547d\u4ee4\u65f6\uff0c\u8bf7\u786e\u4fdd\u76ee\u6807\u8def\u5f84\u662f\u5df2\u5b58\u5728\u7684\u76ee\u5f55\uff0c\u5426\u5219\u5bfc\u51fa\u53ef\u80fd\u4f1a\u5931\u8d25\u3002"),(0,t.yg)("li",{parentName:"ul"},"\u5728\u5e76\u53d1\u5bfc\u51fa\u65f6\uff0c\u8bf7\u6ce8\u610f\u5408\u7406\u5730\u914d\u7f6e\u7ebf\u7a0b\u6570\u91cf\u548c\u5e76\u884c\u5ea6\uff0c\u4ee5\u5145\u5206\u5229\u7528\u7cfb\u7edf\u8d44\u6e90\u5e76\u907f\u514d\u6027\u80fd\u74f6\u9888\u3002"),(0,t.yg)("li",{parentName:"ul"},"\u5bfc\u51fa\u5230\u672c\u5730\u6587\u4ef6\u65f6\uff0c\u8981\u6ce8\u610f\u6587\u4ef6\u6743\u9650\u548c\u8def\u5f84\uff0c\u786e\u4fdd\u6709\u8db3\u591f\u7684\u6743\u9650\u8fdb\u884c\u5199\u64cd\u4f5c\uff0c\u5e76\u9075\u5faa\u9002\u5f53\u7684\u6587\u4ef6\u7cfb\u7edf\u8def\u5f84\u3002"),(0,t.yg)("li",{parentName:"ul"},"\u5728\u5bfc\u51fa\u8fc7\u7a0b\u4e2d\uff0c\u53ef\u4ee5\u5b9e\u65f6\u76d1\u63a7\u8fdb\u5ea6\u548c\u6027\u80fd\u6307\u6807\uff0c\u4ee5\u4fbf\u53ca\u65f6\u53d1\u73b0\u95ee\u9898\u5e76\u8fdb\u884c\u4f18\u5316\u8c03\u6574\u3002"),(0,t.yg)("li",{parentName:"ul"},"\u5bfc\u51fa\u64cd\u4f5c\u5b8c\u6210\u540e\uff0c\u5efa\u8bae\u9a8c\u8bc1\u5bfc\u51fa\u7684\u6570\u636e\u662f\u5426\u5b8c\u6574\u548c\u6b63\u786e\uff0c\u4ee5\u786e\u4fdd\u6570\u636e\u7684\u8d28\u91cf\u548c\u5b8c\u6574\u6027\u3002")),(0,t.yg)("h2",{id:"\u76f8\u5173\u914d\u7f6e"},"\u76f8\u5173\u914d\u7f6e"),(0,t.yg)("h3",{id:"fe"},"FE"),(0,t.yg)("ul",null,(0,t.yg)("li",{parentName:"ul"},(0,t.yg)("inlineCode",{parentName:"li"},"maximum_tablets_of_outfile_in_export"),"\uff1aExportExecutorTask\u4efb\u52a1\u4e2d\u4e00\u4e2aOutFile\u8bed\u53e5\u5141\u8bb8\u7684\u6700\u5927tablets\u6570\u91cf\u3002")),(0,t.yg)("h2",{id:"\u66f4\u591a\u5e2e\u52a9"},"\u66f4\u591a\u5e2e\u52a9"),(0,t.yg)("p",null,"\u5173\u4e8e EXPORT \u4f7f\u7528\u7684\u66f4\u591a\u8be6\u7ec6\u8bed\u6cd5\u53ca\u6700\u4f73\u5b9e\u8df5\uff0c\u8bf7\u53c2\u9605 ",(0,t.yg)("a",{parentName:"p",href:"/zh-CN/docs/sql-manual/sql-reference/Data-Manipulation-Statements/Manipulation/EXPORT"},"Export")," \u547d\u4ee4\u624b\u518c\uff0c\u4f60\u4e5f\u53ef\u4ee5\u5728 MySql \u5ba2\u6237\u7aef\u547d\u4ee4\u884c\u4e0b\u8f93\u5165 ",(0,t.yg)("inlineCode",{parentName:"p"},"HELP EXPORT")," \u83b7\u53d6\u66f4\u591a\u5e2e\u52a9\u4fe1\u606f\u3002"),(0,t.yg)("p",null,"EXPORT \u547d\u4ee4\u5e95\u5c42\u5b9e\u73b0\u662f",(0,t.yg)("inlineCode",{parentName:"p"},"SELECT INTO OUTFILE"),"\u8bed\u53e5\uff0c\u6709\u5173",(0,t.yg)("inlineCode",{parentName:"p"},"SELECT INTO OUTFILE"),"\u53ef\u4ee5\u53c2\u9605",(0,t.yg)("a",{parentName:"p",href:"/zh-CN/docs/data-operate/export/outfile"},"\u540c\u6b65\u5bfc\u51fa")," \u548c ",(0,t.yg)("a",{parentName:"p",href:"/zh-CN/docs/sql-manual/sql-reference/Data-Manipulation-Statements/OUTFILE"},"SELECT INTO OUTFILE"),"\u547d\u4ee4\u624b\u518c\u3002"))}y.isMDXComponent=!0}}]);