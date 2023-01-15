"use strict";(self.webpackChunkselectdb_portal=self.webpackChunkselectdb_portal||[]).push([[65634],{3905:(e,a,t)=>{t.d(a,{Zo:()=>k,kt:()=>d});var n=t(67294);function l(e,a,t){return a in e?Object.defineProperty(e,a,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[a]=t,e}function r(e,a){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);a&&(n=n.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),t.push.apply(t,n)}return t}function p(e){for(var a=1;a<arguments.length;a++){var t=null!=arguments[a]?arguments[a]:{};a%2?r(Object(t),!0).forEach((function(a){l(e,a,t[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):r(Object(t)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(t,a))}))}return e}function i(e,a){if(null==e)return{};var t,n,l=function(e,a){if(null==e)return{};var t,n,l={},r=Object.keys(e);for(n=0;n<r.length;n++)t=r[n],a.indexOf(t)>=0||(l[t]=e[t]);return l}(e,a);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)t=r[n],a.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(l[t]=e[t])}return l}var m=n.createContext({}),o=function(e){var a=n.useContext(m),t=a;return e&&(t="function"==typeof e?e(a):p(p({},a),e)),t},k=function(e){var a=o(e.components);return n.createElement(m.Provider,{value:a},e.children)},s="mdxType",N={inlineCode:"code",wrapper:function(e){var a=e.children;return n.createElement(n.Fragment,{},a)}},u=n.forwardRef((function(e,a){var t=e.components,l=e.mdxType,r=e.originalType,m=e.parentName,k=i(e,["components","mdxType","originalType","parentName"]),s=o(t),u=l,d=s["".concat(m,".").concat(u)]||s[u]||N[u]||r;return t?n.createElement(d,p(p({ref:a},k),{},{components:t})):n.createElement(d,p({ref:a},k))}));function d(e,a){var t=arguments,l=a&&a.mdxType;if("string"==typeof e||l){var r=t.length,p=new Array(r);p[0]=u;var i={};for(var m in a)hasOwnProperty.call(a,m)&&(i[m]=a[m]);i.originalType=e,i[s]="string"==typeof e?e:l,p[1]=i;for(var o=2;o<r;o++)p[o]=t[o];return n.createElement.apply(null,p)}return n.createElement.apply(null,t)}u.displayName="MDXCreateElement"},42137:(e,a,t)=>{t.r(a),t.d(a,{assets:()=>m,contentTitle:()=>p,default:()=>s,frontMatter:()=>r,metadata:()=>i,toc:()=>o});var n=t(87462),l=(t(67294),t(3905));const r={title:"\u6570\u636e\u5907\u4efd",language:"zh-CN"},p=void 0,i={unversionedId:"admin-manual/data-admin/backup",id:"admin-manual/data-admin/backup",title:"\u6570\u636e\u5907\u4efd",description:"\x3c!--",source:"@site/i18n/zh-CN/docusaurus-plugin-content-docs/current/admin-manual/data-admin/backup.md",sourceDirName:"admin-manual/data-admin",slug:"/admin-manual/data-admin/backup",permalink:"/zh-CN/docs/admin-manual/data-admin/backup",draft:!1,tags:[],version:"current",frontMatter:{title:"\u6570\u636e\u5907\u4efd",language:"zh-CN"},sidebar:"docs",previous:{title:"\u8d1f\u8f7d\u5747\u8861",permalink:"/zh-CN/docs/admin-manual/cluster-management/load-balancing"},next:{title:"\u6570\u636e\u6062\u590d",permalink:"/zh-CN/docs/admin-manual/data-admin/restore"}},m={},o=[{value:"\u7b80\u8981\u539f\u7406\u8bf4\u660e",id:"\u7b80\u8981\u539f\u7406\u8bf4\u660e",level:2},{value:"\u5f00\u59cb\u5907\u4efd",id:"\u5f00\u59cb\u5907\u4efd",level:2},{value:"\u6700\u4f73\u5b9e\u8df5",id:"\u6700\u4f73\u5b9e\u8df5",level:2},{value:"\u5907\u4efd",id:"\u5907\u4efd",level:3},{value:"\u6570\u636e\u8fc1\u79fb",id:"\u6570\u636e\u8fc1\u79fb",level:3},{value:"\u91cd\u70b9\u8bf4\u660e",id:"\u91cd\u70b9\u8bf4\u660e",level:2},{value:"\u76f8\u5173\u547d\u4ee4",id:"\u76f8\u5173\u547d\u4ee4",level:2},{value:"\u66f4\u591a\u5e2e\u52a9",id:"\u66f4\u591a\u5e2e\u52a9",level:2}],k={toc:o};function s(e){let{components:a,...t}=e;return(0,l.kt)("wrapper",(0,n.Z)({},k,t,{components:a,mdxType:"MDXLayout"}),(0,l.kt)("h1",{id:"\u6570\u636e\u5907\u4efd"},"\u6570\u636e\u5907\u4efd"),(0,l.kt)("p",null,"Doris \u652f\u6301\u5c06\u5f53\u524d\u6570\u636e\u4ee5\u6587\u4ef6\u7684\u5f62\u5f0f\uff0c\u901a\u8fc7 broker \u5907\u4efd\u5230\u8fdc\u7aef\u5b58\u50a8\u7cfb\u7edf\u4e2d\u3002\u4e4b\u540e\u53ef\u4ee5\u901a\u8fc7 \u6062\u590d \u547d\u4ee4\uff0c\u4ece\u8fdc\u7aef\u5b58\u50a8\u7cfb\u7edf\u4e2d\u5c06\u6570\u636e\u6062\u590d\u5230\u4efb\u610f Doris \u96c6\u7fa4\u3002\u901a\u8fc7\u8fd9\u4e2a\u529f\u80fd\uff0cDoris \u53ef\u4ee5\u652f\u6301\u5c06\u6570\u636e\u5b9a\u671f\u7684\u8fdb\u884c\u5feb\u7167\u5907\u4efd\u3002\u4e5f\u53ef\u4ee5\u901a\u8fc7\u8fd9\u4e2a\u529f\u80fd\uff0c\u5728\u4e0d\u540c\u96c6\u7fa4\u95f4\u8fdb\u884c\u6570\u636e\u8fc1\u79fb\u3002"),(0,l.kt)("p",null,"\u8be5\u529f\u80fd\u9700\u8981 Doris \u7248\u672c 0.8.2+"),(0,l.kt)("p",null,"\u4f7f\u7528\u8be5\u529f\u80fd\uff0c\u9700\u8981\u90e8\u7f72\u5bf9\u5e94\u8fdc\u7aef\u5b58\u50a8\u7684 broker\u3002\u5982 BOS\u3001HDFS \u7b49\u3002\u53ef\u4ee5\u901a\u8fc7 ",(0,l.kt)("inlineCode",{parentName:"p"},"SHOW BROKER;")," \u67e5\u770b\u5f53\u524d\u90e8\u7f72\u7684 broker\u3002"),(0,l.kt)("h2",{id:"\u7b80\u8981\u539f\u7406\u8bf4\u660e"},"\u7b80\u8981\u539f\u7406\u8bf4\u660e"),(0,l.kt)("p",null,"\u5907\u4efd\u64cd\u4f5c\u662f\u5c06\u6307\u5b9a\u8868\u6216\u5206\u533a\u7684\u6570\u636e\uff0c\u76f4\u63a5\u4ee5 Doris \u5b58\u50a8\u7684\u6587\u4ef6\u7684\u5f62\u5f0f\uff0c\u4e0a\u4f20\u5230\u8fdc\u7aef\u4ed3\u5e93\u4e2d\u8fdb\u884c\u5b58\u50a8\u3002\u5f53\u7528\u6237\u63d0\u4ea4 Backup \u8bf7\u6c42\u540e\uff0c\u7cfb\u7edf\u5185\u90e8\u4f1a\u505a\u5982\u4e0b\u64cd\u4f5c\uff1a"),(0,l.kt)("ol",null,(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("p",{parentName:"li"},"\u5feb\u7167\u53ca\u5feb\u7167\u4e0a\u4f20"),(0,l.kt)("p",{parentName:"li"},"\u5feb\u7167\u9636\u6bb5\u4f1a\u5bf9\u6307\u5b9a\u7684\u8868\u6216\u5206\u533a\u6570\u636e\u6587\u4ef6\u8fdb\u884c\u5feb\u7167\u3002\u4e4b\u540e\uff0c\u5907\u4efd\u90fd\u662f\u5bf9\u5feb\u7167\u8fdb\u884c\u64cd\u4f5c\u3002\u5728\u5feb\u7167\u4e4b\u540e\uff0c\u5bf9\u8868\u8fdb\u884c\u7684\u66f4\u6539\u3001\u5bfc\u5165\u7b49\u64cd\u4f5c\u90fd\u4e0d\u518d\u5f71\u54cd\u5907\u4efd\u7684\u7ed3\u679c\u3002\u5feb\u7167\u53ea\u662f\u5bf9\u5f53\u524d\u6570\u636e\u6587\u4ef6\u4ea7\u751f\u4e00\u4e2a\u786c\u94fe\uff0c\u8017\u65f6\u5f88\u5c11\u3002\u5feb\u7167\u5b8c\u6210\u540e\uff0c\u4f1a\u5f00\u59cb\u5bf9\u8fd9\u4e9b\u5feb\u7167\u6587\u4ef6\u8fdb\u884c\u9010\u4e00\u4e0a\u4f20\u3002\u5feb\u7167\u4e0a\u4f20\u7531\u5404\u4e2a Backend \u5e76\u53d1\u5b8c\u6210\u3002")),(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("p",{parentName:"li"},"\u5143\u6570\u636e\u51c6\u5907\u53ca\u4e0a\u4f20"),(0,l.kt)("p",{parentName:"li"},"\u6570\u636e\u6587\u4ef6\u5feb\u7167\u4e0a\u4f20\u5b8c\u6210\u540e\uff0cFrontend \u4f1a\u9996\u5148\u5c06\u5bf9\u5e94\u5143\u6570\u636e\u5199\u6210\u672c\u5730\u6587\u4ef6\uff0c\u7136\u540e\u901a\u8fc7 broker \u5c06\u672c\u5730\u5143\u6570\u636e\u6587\u4ef6\u4e0a\u4f20\u5230\u8fdc\u7aef\u4ed3\u5e93\u3002\u5b8c\u6210\u6700\u7ec8\u5907\u4efd\u4f5c\u4e1a")),(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("p",{parentName:"li"},"\u52a8\u6001\u5206\u533a\u8868\u8bf4\u660e"),(0,l.kt)("p",{parentName:"li"},"\u5982\u679c\u8be5\u8868\u662f\u52a8\u6001\u5206\u533a\u8868\uff0c\u5907\u4efd\u4e4b\u540e\u4f1a\u81ea\u52a8\u7981\u7528\u52a8\u6001\u5206\u533a\u5c5e\u6027\uff0c\u5728\u505a\u6062\u590d\u7684\u65f6\u5019\u9700\u8981\u624b\u52a8\u5c06\u8be5\u8868\u7684\u52a8\u6001\u5206\u533a\u5c5e\u6027\u542f\u7528\uff0c\u547d\u4ee4\u5982\u4e0b:"),(0,l.kt)("pre",{parentName:"li"},(0,l.kt)("code",{parentName:"pre",className:"language-sql"},'ALTER TABLE tbl1 SET ("dynamic_partition.enable"="true")\n'))),(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("p",{parentName:"li"},"\u5907\u4efd\u548c\u6062\u590d\u64cd\u4f5c\u90fd\u4e0d\u4f1a\u4fdd\u7559\u8868\u7684 ",(0,l.kt)("inlineCode",{parentName:"p"},"colocate_with")," \u5c5e\u6027\u3002"))),(0,l.kt)("h2",{id:"\u5f00\u59cb\u5907\u4efd"},"\u5f00\u59cb\u5907\u4efd"),(0,l.kt)("ol",null,(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("p",{parentName:"li"},"\u521b\u5efa\u4e00\u4e2a hdfs \u7684\u8fdc\u7a0b\u4ed3\u5e93 example_repo\uff1a"),(0,l.kt)("pre",{parentName:"li"},(0,l.kt)("code",{parentName:"pre",className:"language-sql"},'CREATE REPOSITORY `example_repo`\nWITH BROKER `hdfs_broker`\nON LOCATION "hdfs://hadoop-name-node:54310/path/to/repo/"\nPROPERTIES\n(\n   "username" = "user",\n   "password" = "password"\n);\n'))),(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("p",{parentName:"li"},"\u521b\u5efa\u4e00\u4e2a s3 \u7684\u8fdc\u7a0b\u4ed3\u5e93 : s3_repo"),(0,l.kt)("pre",{parentName:"li"},(0,l.kt)("code",{parentName:"pre"},'CREATE REPOSITORY `s3_repo`\nWITH S3\nON LOCATION "s3://bucket_name/test"\nPROPERTIES\n(\n    "AWS_ENDPOINT" = "http://xxxx.xxxx.com",\n    "AWS_ACCESS_KEY" = "xxxx",\n    "AWS_SECRET_KEY"="xxx",\n    "AWS_REGION" = "xxx"\n); \n')),(0,l.kt)("blockquote",{parentName:"li"},(0,l.kt)("p",{parentName:"blockquote"},"\u6ce8\u610f\uff1a"),(0,l.kt)("p",{parentName:"blockquote"},"ON LOCATION \u8fd9\u91cc\u540e\u9762\u8ddf\u7684\u662f Bucket Name"))),(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("p",{parentName:"li"},"\u5168\u91cf\u5907\u4efd example_db \u4e0b\u7684\u8868 example_tbl \u5230\u4ed3\u5e93 example_repo \u4e2d\uff1a"),(0,l.kt)("pre",{parentName:"li"},(0,l.kt)("code",{parentName:"pre",className:"language-sql"},'BACKUP SNAPSHOT example_db.snapshot_label1\nTO example_repo\nON (example_tbl)\nPROPERTIES ("type" = "full");\n'))),(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("p",{parentName:"li"},"\u5168\u91cf\u5907\u4efd example_db \u4e0b\uff0c\u8868 example_tbl \u7684 p1, p2 \u5206\u533a\uff0c\u4ee5\u53ca\u8868 example_tbl2 \u5230\u4ed3\u5e93 example_repo \u4e2d\uff1a"),(0,l.kt)("pre",{parentName:"li"},(0,l.kt)("code",{parentName:"pre",className:"language-sql"},"BACKUP SNAPSHOT example_db.snapshot_label2\nTO example_repo\nON\n(\n   example_tbl PARTITION (p1,p2),\n   example_tbl2\n);\n"))),(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("p",{parentName:"li"},"\u67e5\u770b\u6700\u8fd1 backup \u4f5c\u4e1a\u7684\u6267\u884c\u60c5\u51b5\uff1a"),(0,l.kt)("pre",{parentName:"li"},(0,l.kt)("code",{parentName:"pre",className:"language-sql"},"mysql> show BACKUP\\G;\n*************************** 1. row ***************************\n               JobId: 17891847\n        SnapshotName: snapshot_label1\n              DbName: example_db\n               State: FINISHED\n          BackupObjs: [default_cluster:example_db.example_tbl]\n          CreateTime: 2022-04-08 15:52:29\nSnapshotFinishedTime: 2022-04-08 15:52:32\n  UploadFinishedTime: 2022-04-08 15:52:38\n        FinishedTime: 2022-04-08 15:52:44\n     UnfinishedTasks:\n            Progress:\n          TaskErrMsg:\n              Status: [OK]\n             Timeout: 86400\n1 row in set (0.01 sec)\n"))),(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("p",{parentName:"li"},"\u67e5\u770b\u8fdc\u7aef\u4ed3\u5e93\u4e2d\u5df2\u5b58\u5728\u7684\u5907\u4efd"),(0,l.kt)("pre",{parentName:"li"},(0,l.kt)("code",{parentName:"pre",className:"language-sql"},'mysql> SHOW SNAPSHOT ON example_repo WHERE SNAPSHOT = "snapshot_label1";\n+-----------------+---------------------+--------+\n| Snapshot        | Timestamp           | Status |\n+-----------------+---------------------+--------+\n| snapshot_label1 | 2022-04-08-15-52-29 | OK     |\n+-----------------+---------------------+--------+\n1 row in set (0.15 sec)\n')))),(0,l.kt)("p",null,"BACKUP\u7684\u66f4\u591a\u7528\u6cd5\u53ef\u53c2\u8003 ",(0,l.kt)("a",{parentName:"p",href:"/zh-CN/docs/sql-manual/sql-reference/Data-Definition-Statements/Backup-and-Restore/BACKUP"},"\u8fd9\u91cc"),"\u3002"),(0,l.kt)("h2",{id:"\u6700\u4f73\u5b9e\u8df5"},"\u6700\u4f73\u5b9e\u8df5"),(0,l.kt)("h3",{id:"\u5907\u4efd"},"\u5907\u4efd"),(0,l.kt)("p",null,"\u5f53\u524d\u6211\u4eec\u652f\u6301\u6700\u5c0f\u5206\u533a\uff08Partition\uff09\u7c92\u5ea6\u7684\u5168\u91cf\u5907\u4efd\uff08\u589e\u91cf\u5907\u4efd\u6709\u53ef\u80fd\u5728\u672a\u6765\u7248\u672c\u652f\u6301\uff09\u3002\u5982\u679c\u9700\u8981\u5bf9\u6570\u636e\u8fdb\u884c\u5b9a\u671f\u5907\u4efd\uff0c\u9996\u5148\u9700\u8981\u5728\u5efa\u8868\u65f6\uff0c\u5408\u7406\u7684\u89c4\u5212\u8868\u7684\u5206\u533a\u53ca\u5206\u6876\uff0c\u6bd4\u5982\u6309\u65f6\u95f4\u8fdb\u884c\u5206\u533a\u3002\u7136\u540e\u5728\u4e4b\u540e\u7684\u8fd0\u884c\u8fc7\u7a0b\u4e2d\uff0c\u6309\u7167\u5206\u533a\u7c92\u5ea6\u8fdb\u884c\u5b9a\u671f\u7684\u6570\u636e\u5907\u4efd\u3002"),(0,l.kt)("h3",{id:"\u6570\u636e\u8fc1\u79fb"},"\u6570\u636e\u8fc1\u79fb"),(0,l.kt)("p",null,"\u7528\u6237\u53ef\u4ee5\u5148\u5c06\u6570\u636e\u5907\u4efd\u5230\u8fdc\u7aef\u4ed3\u5e93\uff0c\u518d\u901a\u8fc7\u8fdc\u7aef\u4ed3\u5e93\u5c06\u6570\u636e\u6062\u590d\u5230\u53e6\u4e00\u4e2a\u96c6\u7fa4\uff0c\u5b8c\u6210\u6570\u636e\u8fc1\u79fb\u3002\u56e0\u4e3a\u6570\u636e\u5907\u4efd\u662f\u901a\u8fc7\u5feb\u7167\u7684\u5f62\u5f0f\u5b8c\u6210\u7684\uff0c\u6240\u4ee5\uff0c\u5728\u5907\u4efd\u4f5c\u4e1a\u7684\u5feb\u7167\u9636\u6bb5\u4e4b\u540e\u7684\u65b0\u7684\u5bfc\u5165\u6570\u636e\uff0c\u662f\u4e0d\u4f1a\u5907\u4efd\u7684\u3002\u56e0\u6b64\uff0c\u5728\u5feb\u7167\u5b8c\u6210\u540e\uff0c\u5230\u6062\u590d\u4f5c\u4e1a\u5b8c\u6210\u8fd9\u671f\u95f4\uff0c\u5728\u539f\u96c6\u7fa4\u4e0a\u5bfc\u5165\u7684\u6570\u636e\uff0c\u90fd\u9700\u8981\u5728\u65b0\u96c6\u7fa4\u4e0a\u540c\u6837\u5bfc\u5165\u4e00\u904d\u3002"),(0,l.kt)("p",null,"\u5efa\u8bae\u5728\u8fc1\u79fb\u5b8c\u6210\u540e\uff0c\u5bf9\u65b0\u65e7\u4e24\u4e2a\u96c6\u7fa4\u5e76\u884c\u5bfc\u5165\u4e00\u6bb5\u65f6\u95f4\u3002\u5b8c\u6210\u6570\u636e\u548c\u4e1a\u52a1\u6b63\u786e\u6027\u6821\u9a8c\u540e\uff0c\u518d\u5c06\u4e1a\u52a1\u8fc1\u79fb\u5230\u65b0\u7684\u96c6\u7fa4\u3002"),(0,l.kt)("h2",{id:"\u91cd\u70b9\u8bf4\u660e"},"\u91cd\u70b9\u8bf4\u660e"),(0,l.kt)("ol",null,(0,l.kt)("li",{parentName:"ol"},"\u5907\u4efd\u6062\u590d\u76f8\u5173\u7684\u64cd\u4f5c\u76ee\u524d\u53ea\u5141\u8bb8\u62e5\u6709 ADMIN \u6743\u9650\u7684\u7528\u6237\u6267\u884c\u3002"),(0,l.kt)("li",{parentName:"ol"},"\u4e00\u4e2a Database \u5185\uff0c\u53ea\u5141\u8bb8\u6709\u4e00\u4e2a\u6b63\u5728\u6267\u884c\u7684\u5907\u4efd\u6216\u6062\u590d\u4f5c\u4e1a\u3002"),(0,l.kt)("li",{parentName:"ol"},"\u5907\u4efd\u548c\u6062\u590d\u90fd\u652f\u6301\u6700\u5c0f\u5206\u533a\uff08Partition\uff09\u7ea7\u522b\u7684\u64cd\u4f5c\uff0c\u5f53\u8868\u7684\u6570\u636e\u91cf\u5f88\u5927\u65f6\uff0c\u5efa\u8bae\u6309\u5206\u533a\u5206\u522b\u6267\u884c\uff0c\u4ee5\u964d\u4f4e\u5931\u8d25\u91cd\u8bd5\u7684\u4ee3\u4ef7\u3002"),(0,l.kt)("li",{parentName:"ol"},"\u56e0\u4e3a\u5907\u4efd\u6062\u590d\u64cd\u4f5c\uff0c\u64cd\u4f5c\u7684\u90fd\u662f\u5b9e\u9645\u7684\u6570\u636e\u6587\u4ef6\u3002\u6240\u4ee5\u5f53\u4e00\u4e2a\u8868\u7684\u5206\u7247\u8fc7\u591a\uff0c\u6216\u8005\u4e00\u4e2a\u5206\u7247\u6709\u8fc7\u591a\u7684\u5c0f\u7248\u672c\u65f6\uff0c\u53ef\u80fd\u5373\u4f7f\u603b\u6570\u636e\u91cf\u5f88\u5c0f\uff0c\u4f9d\u7136\u9700\u8981\u5907\u4efd\u6216\u6062\u590d\u5f88\u957f\u65f6\u95f4\u3002\u7528\u6237\u53ef\u4ee5\u901a\u8fc7 ",(0,l.kt)("inlineCode",{parentName:"li"},"SHOW PARTITIONS FROM table_name;")," \u548c ",(0,l.kt)("inlineCode",{parentName:"li"},"SHOW TABLET FROM table_name;")," \u6765\u67e5\u770b\u5404\u4e2a\u5206\u533a\u7684\u5206\u7247\u6570\u91cf\uff0c\u4ee5\u53ca\u5404\u4e2a\u5206\u7247\u7684\u6587\u4ef6\u7248\u672c\u6570\u91cf\uff0c\u6765\u9884\u4f30\u4f5c\u4e1a\u6267\u884c\u65f6\u95f4\u3002\u6587\u4ef6\u6570\u91cf\u5bf9\u4f5c\u4e1a\u6267\u884c\u7684\u65f6\u95f4\u5f71\u54cd\u975e\u5e38\u5927\uff0c\u6240\u4ee5\u5efa\u8bae\u5728\u5efa\u8868\u65f6\uff0c\u5408\u7406\u89c4\u5212\u5206\u533a\u5206\u6876\uff0c\u4ee5\u907f\u514d\u8fc7\u591a\u7684\u5206\u7247\u3002"),(0,l.kt)("li",{parentName:"ol"},"\u5f53\u901a\u8fc7 ",(0,l.kt)("inlineCode",{parentName:"li"},"SHOW BACKUP")," \u6216\u8005 ",(0,l.kt)("inlineCode",{parentName:"li"},"SHOW RESTORE")," \u547d\u4ee4\u67e5\u770b\u4f5c\u4e1a\u72b6\u6001\u65f6\u3002\u6709\u53ef\u80fd\u4f1a\u5728 ",(0,l.kt)("inlineCode",{parentName:"li"},"TaskErrMsg")," \u4e00\u5217\u4e2d\u770b\u5230\u9519\u8bef\u4fe1\u606f\u3002\u4f46\u53ea\u8981 ",(0,l.kt)("inlineCode",{parentName:"li"},"State")," \u5217\u4e0d\u4e3a ",(0,l.kt)("inlineCode",{parentName:"li"},"CANCELLED"),"\uff0c\u5219\u8bf4\u660e\u4f5c\u4e1a\u4f9d\u7136\u5728\u7ee7\u7eed\u3002\u8fd9\u4e9b Task \u6709\u53ef\u80fd\u4f1a\u91cd\u8bd5\u6210\u529f\u3002\u5f53\u7136\uff0c\u6709\u4e9b Task \u9519\u8bef\uff0c\u4e5f\u4f1a\u76f4\u63a5\u5bfc\u81f4\u4f5c\u4e1a\u5931\u8d25\u3002\n\u5e38\u89c1\u7684",(0,l.kt)("inlineCode",{parentName:"li"},"TaskErrMsg"),"\u9519\u8bef\u5982\u4e0b\uff1a\nQ1\uff1a\u5907\u4efd\u5230HDFS\uff0c\u72b6\u6001\u663e\u793aUPLOADING\uff0cTaskErrMsg \u9519\u8bef\u4fe1\u606f\uff1a","[13333: Close broker writer failed, broker:TNetworkAddress(hostname=10.10.0.0,port=8000) msg:errors while close file output stream, cause by: DataStreamer Exception: ]","\n\u8fd9\u4e2a\u4e00\u822c\u662f\u7f51\u7edc\u901a\u4fe1\u95ee\u9898\uff0c\u67e5\u770bbroker\u65e5\u5fd7\uff0c\u770b\u67d0\u4e2aip \u6216\u8005\u7aef\u53e3\u4e0d\u901a\uff0c\u5982\u679c\u662f\u4e91\u670d\u52a1\uff0c\u5219\u9700\u8981\u67e5\u770b\u662f\u5426\u8bbf\u95ee\u4e86\u5185\u7f51\uff0c\u5982\u679c\u662f\uff0c\u5219\u53ef\u4ee5\u5728borker/conf\u6587\u4ef6\u5939\u4e0b\u6dfb\u52a0hdfs-site.xml\uff0c\u8fd8\u9700\u5728hdfs-site.xml\u914d\u7f6e\u6587\u4ef6\u4e0b\u6dfb\u52a0dfs.client.use.datanode.hostname=true\uff0c\u5e76\u5728broker\u8282\u70b9\u4e0a\u914d\u7f6eHADOOP\u96c6\u7fa4\u7684\u4e3b\u673a\u540d\u6620\u5c04\u3002"),(0,l.kt)("li",{parentName:"ol"},"\u5982\u679c\u6062\u590d\u4f5c\u4e1a\u662f\u4e00\u6b21\u8986\u76d6\u64cd\u4f5c\uff08\u6307\u5b9a\u6062\u590d\u6570\u636e\u5230\u5df2\u7ecf\u5b58\u5728\u7684\u8868\u6216\u5206\u533a\u4e2d\uff09\uff0c\u90a3\u4e48\u4ece\u6062\u590d\u4f5c\u4e1a\u7684 ",(0,l.kt)("inlineCode",{parentName:"li"},"COMMIT")," \u9636\u6bb5\u5f00\u59cb\uff0c\u5f53\u524d\u96c6\u7fa4\u4e0a\u88ab\u8986\u76d6\u7684\u6570\u636e\u6709\u53ef\u80fd\u4e0d\u80fd\u518d\u88ab\u8fd8\u539f\u3002\u6b64\u65f6\u5982\u679c\u6062\u590d\u4f5c\u4e1a\u5931\u8d25\u6216\u88ab\u53d6\u6d88\uff0c\u6709\u53ef\u80fd\u9020\u6210\u4e4b\u524d\u7684\u6570\u636e\u5df2\u635f\u574f\u4e14\u65e0\u6cd5\u8bbf\u95ee\u3002\u8fd9\u79cd\u60c5\u51b5\u4e0b\uff0c\u53ea\u80fd\u901a\u8fc7\u518d\u6b21\u6267\u884c\u6062\u590d\u64cd\u4f5c\uff0c\u5e76\u7b49\u5f85\u4f5c\u4e1a\u5b8c\u6210\u3002\u56e0\u6b64\uff0c\u6211\u4eec\u5efa\u8bae\uff0c\u5982\u65e0\u5fc5\u8981\uff0c\u5c3d\u91cf\u4e0d\u8981\u4f7f\u7528\u8986\u76d6\u7684\u65b9\u5f0f\u6062\u590d\u6570\u636e\uff0c\u9664\u975e\u786e\u8ba4\u5f53\u524d\u6570\u636e\u5df2\u4e0d\u518d\u4f7f\u7528\u3002")),(0,l.kt)("h2",{id:"\u76f8\u5173\u547d\u4ee4"},"\u76f8\u5173\u547d\u4ee4"),(0,l.kt)("p",null,"\u548c\u5907\u4efd\u6062\u590d\u529f\u80fd\u76f8\u5173\u7684\u547d\u4ee4\u5982\u4e0b\u3002\u4ee5\u4e0b\u547d\u4ee4\uff0c\u90fd\u53ef\u4ee5\u901a\u8fc7 mysql-client \u8fde\u63a5 Doris \u540e\uff0c\u4f7f\u7528 ",(0,l.kt)("inlineCode",{parentName:"p"},"help cmd;")," \u7684\u65b9\u5f0f\u67e5\u770b\u8be6\u7ec6\u5e2e\u52a9\u3002"),(0,l.kt)("ol",null,(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("p",{parentName:"li"},"CREATE REPOSITORY"),(0,l.kt)("p",{parentName:"li"},"\u521b\u5efa\u4e00\u4e2a\u8fdc\u7aef\u4ed3\u5e93\u8def\u5f84\uff0c\u7528\u4e8e\u5907\u4efd\u6216\u6062\u590d\u3002\u8be5\u547d\u4ee4\u9700\u8981\u501f\u52a9 Broker \u8fdb\u7a0b\u8bbf\u95ee\u8fdc\u7aef\u5b58\u50a8\uff0c\u4e0d\u540c\u7684 Broker \u9700\u8981\u63d0\u4f9b\u4e0d\u540c\u7684\u53c2\u6570\uff0c\u5177\u4f53\u8bf7\u53c2\u9605 ",(0,l.kt)("a",{parentName:"p",href:"/zh-CN/docs/advanced/broker"},"Broker\u6587\u6863"),"\uff0c\u4e5f\u53ef\u4ee5\u76f4\u63a5\u901a\u8fc7S3 \u534f\u8bae\u5907\u4efd\u5230\u652f\u6301AWS S3\u534f\u8bae\u7684\u8fdc\u7a0b\u5b58\u50a8\u4e0a\u53bb\uff0c\u4e5f\u53ef\u4ee5\u76f4\u63a5\u5907\u4efd\u5230HDFS\uff0c\u5177\u4f53\u53c2\u8003 ",(0,l.kt)("a",{parentName:"p",href:"/zh-CN/docs/sql-manual/sql-reference/Data-Definition-Statements/Backup-and-Restore/CREATE-REPOSITORY"},"\u521b\u5efa\u8fdc\u7a0b\u4ed3\u5e93\u6587\u6863"))),(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("p",{parentName:"li"},"BACKUP"),(0,l.kt)("p",{parentName:"li"},"\u6267\u884c\u4e00\u6b21\u5907\u4efd\u64cd\u4f5c\u3002")),(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("p",{parentName:"li"},"SHOW BACKUP"),(0,l.kt)("p",{parentName:"li"},"\u67e5\u770b\u6700\u8fd1\u4e00\u6b21 backup \u4f5c\u4e1a\u7684\u6267\u884c\u60c5\u51b5\uff0c\u5305\u62ec\uff1a"),(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"JobId\uff1a\u672c\u6b21\u5907\u4efd\u4f5c\u4e1a\u7684 id\u3002"),(0,l.kt)("li",{parentName:"ul"},"SnapshotName\uff1a\u7528\u6237\u6307\u5b9a\u7684\u672c\u6b21\u5907\u4efd\u4f5c\u4e1a\u7684\u540d\u79f0\uff08Label\uff09\u3002"),(0,l.kt)("li",{parentName:"ul"},"DbName\uff1a\u5907\u4efd\u4f5c\u4e1a\u5bf9\u5e94\u7684 Database\u3002"),(0,l.kt)("li",{parentName:"ul"},"State\uff1a\u5907\u4efd\u4f5c\u4e1a\u5f53\u524d\u6240\u5728\u9636\u6bb5\uff1a",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"PENDING\uff1a\u4f5c\u4e1a\u521d\u59cb\u72b6\u6001\u3002"),(0,l.kt)("li",{parentName:"ul"},"SNAPSHOTING\uff1a\u6b63\u5728\u8fdb\u884c\u5feb\u7167\u64cd\u4f5c\u3002"),(0,l.kt)("li",{parentName:"ul"},"UPLOAD_SNAPSHOT\uff1a\u5feb\u7167\u7ed3\u675f\uff0c\u51c6\u5907\u4e0a\u4f20\u3002"),(0,l.kt)("li",{parentName:"ul"},"UPLOADING\uff1a\u6b63\u5728\u4e0a\u4f20\u5feb\u7167\u3002"),(0,l.kt)("li",{parentName:"ul"},"SAVE_META\uff1a\u6b63\u5728\u672c\u5730\u751f\u6210\u5143\u6570\u636e\u6587\u4ef6\u3002"),(0,l.kt)("li",{parentName:"ul"},"UPLOAD_INFO\uff1a\u4e0a\u4f20\u5143\u6570\u636e\u6587\u4ef6\u548c\u672c\u6b21\u5907\u4efd\u4f5c\u4e1a\u7684\u4fe1\u606f\u3002"),(0,l.kt)("li",{parentName:"ul"},"FINISHED\uff1a\u5907\u4efd\u5b8c\u6210\u3002"),(0,l.kt)("li",{parentName:"ul"},"CANCELLED\uff1a\u5907\u4efd\u5931\u8d25\u6216\u88ab\u53d6\u6d88\u3002"))),(0,l.kt)("li",{parentName:"ul"},"BackupObjs\uff1a\u672c\u6b21\u5907\u4efd\u6d89\u53ca\u7684\u8868\u548c\u5206\u533a\u7684\u6e05\u5355\u3002"),(0,l.kt)("li",{parentName:"ul"},"CreateTime\uff1a\u4f5c\u4e1a\u521b\u5efa\u65f6\u95f4\u3002"),(0,l.kt)("li",{parentName:"ul"},"SnapshotFinishedTime\uff1a\u5feb\u7167\u5b8c\u6210\u65f6\u95f4\u3002"),(0,l.kt)("li",{parentName:"ul"},"UploadFinishedTime\uff1a\u5feb\u7167\u4e0a\u4f20\u5b8c\u6210\u65f6\u95f4\u3002"),(0,l.kt)("li",{parentName:"ul"},"FinishedTime\uff1a\u672c\u6b21\u4f5c\u4e1a\u5b8c\u6210\u65f6\u95f4\u3002"),(0,l.kt)("li",{parentName:"ul"},"UnfinishedTasks\uff1a\u5728 ",(0,l.kt)("inlineCode",{parentName:"li"},"SNAPSHOTTING"),"\uff0c",(0,l.kt)("inlineCode",{parentName:"li"},"UPLOADING")," \u7b49\u9636\u6bb5\uff0c\u4f1a\u6709\u591a\u4e2a\u5b50\u4efb\u52a1\u5728\u540c\u65f6\u8fdb\u884c\uff0c\u8fd9\u91cc\u5c55\u793a\u7684\u5f53\u524d\u9636\u6bb5\uff0c\u672a\u5b8c\u6210\u7684\u5b50\u4efb\u52a1\u7684 task id\u3002"),(0,l.kt)("li",{parentName:"ul"},"TaskErrMsg\uff1a\u5982\u679c\u6709\u5b50\u4efb\u52a1\u6267\u884c\u51fa\u9519\uff0c\u8fd9\u91cc\u4f1a\u663e\u793a\u5bf9\u5e94\u5b50\u4efb\u52a1\u7684\u9519\u8bef\u4fe1\u606f\u3002"),(0,l.kt)("li",{parentName:"ul"},"Status\uff1a\u7528\u4e8e\u8bb0\u5f55\u5728\u6574\u4e2a\u4f5c\u4e1a\u8fc7\u7a0b\u4e2d\uff0c\u53ef\u80fd\u51fa\u73b0\u7684\u4e00\u4e9b\u72b6\u6001\u4fe1\u606f\u3002"),(0,l.kt)("li",{parentName:"ul"},"Timeout\uff1a\u4f5c\u4e1a\u7684\u8d85\u65f6\u65f6\u95f4\uff0c\u5355\u4f4d\u662f\u79d2\u3002"))),(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("p",{parentName:"li"},"SHOW SNAPSHOT"),(0,l.kt)("p",{parentName:"li"},"\u67e5\u770b\u8fdc\u7aef\u4ed3\u5e93\u4e2d\u5df2\u5b58\u5728\u7684\u5907\u4efd\u3002"),(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"Snapshot\uff1a\u5907\u4efd\u65f6\u6307\u5b9a\u7684\u8be5\u5907\u4efd\u7684\u540d\u79f0\uff08Label\uff09\u3002"),(0,l.kt)("li",{parentName:"ul"},"Timestamp\uff1a\u5907\u4efd\u7684\u65f6\u95f4\u6233\u3002"),(0,l.kt)("li",{parentName:"ul"},"Status\uff1a\u8be5\u5907\u4efd\u662f\u5426\u6b63\u5e38\u3002")),(0,l.kt)("p",{parentName:"li"},"\u5982\u679c\u5728 ",(0,l.kt)("inlineCode",{parentName:"p"},"SHOW SNAPSHOT")," \u540e\u6307\u5b9a\u4e86 where \u5b50\u53e5\uff0c\u5219\u53ef\u4ee5\u663e\u793a\u66f4\u8be6\u7ec6\u7684\u5907\u4efd\u4fe1\u606f\u3002"),(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"Database\uff1a\u5907\u4efd\u65f6\u5bf9\u5e94\u7684 Database\u3002"),(0,l.kt)("li",{parentName:"ul"},"Details\uff1a\u5c55\u793a\u4e86\u8be5\u5907\u4efd\u5b8c\u6574\u7684\u6570\u636e\u76ee\u5f55\u7ed3\u6784\u3002"))),(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("p",{parentName:"li"},"CANCEL BACKUP"),(0,l.kt)("p",{parentName:"li"},"\u53d6\u6d88\u5f53\u524d\u6b63\u5728\u6267\u884c\u7684\u5907\u4efd\u4f5c\u4e1a\u3002")),(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("p",{parentName:"li"},"DROP REPOSITORY"),(0,l.kt)("p",{parentName:"li"},"\u5220\u9664\u5df2\u521b\u5efa\u7684\u8fdc\u7aef\u4ed3\u5e93\u3002\u5220\u9664\u4ed3\u5e93\uff0c\u4ec5\u4ec5\u662f\u5220\u9664\u8be5\u4ed3\u5e93\u5728 Doris \u4e2d\u7684\u6620\u5c04\uff0c\u4e0d\u4f1a\u5220\u9664\u5b9e\u9645\u7684\u4ed3\u5e93\u6570\u636e\u3002"))),(0,l.kt)("h2",{id:"\u66f4\u591a\u5e2e\u52a9"},"\u66f4\u591a\u5e2e\u52a9"),(0,l.kt)("p",null," \u5173\u4e8e BACKUP \u4f7f\u7528\u7684\u66f4\u591a\u8be6\u7ec6\u8bed\u6cd5\u53ca\u6700\u4f73\u5b9e\u8df5\uff0c\u8bf7\u53c2\u9605 ",(0,l.kt)("a",{parentName:"p",href:"/zh-CN/docs/sql-manual/sql-reference/Data-Definition-Statements/Backup-and-Restore/BACKUP"},"BACKUP")," \u547d\u4ee4\u624b\u518c\uff0c\u4f60\u4e5f\u53ef\u4ee5\u5728 MySql \u5ba2\u6237\u7aef\u547d\u4ee4\u884c\u4e0b\u8f93\u5165 ",(0,l.kt)("inlineCode",{parentName:"p"},"HELP BACKUP")," \u83b7\u53d6\u66f4\u591a\u5e2e\u52a9\u4fe1\u606f\u3002"))}s.isMDXComponent=!0}}]);