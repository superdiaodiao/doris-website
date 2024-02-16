"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([[62703],{15680:(e,t,a)=>{a.d(t,{xA:()=>s,yg:()=>d});var n=a(96540);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function m(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function i(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var l=n.createContext({}),p=function(e){var t=n.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):m(m({},t),e)),a},s=function(e){var t=p(e.components);return n.createElement(l.Provider,{value:t},e.children)},u="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},g=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,o=e.originalType,l=e.parentName,s=i(e,["components","mdxType","originalType","parentName"]),u=p(a),g=r,d=u["".concat(l,".").concat(g)]||u[g]||c[g]||o;return a?n.createElement(d,m(m({ref:t},s),{},{components:a})):n.createElement(d,m({ref:t},s))}));function d(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=a.length,m=new Array(o);m[0]=g;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i[u]="string"==typeof e?e:r,m[1]=i;for(var p=2;p<o;p++)m[p]=a[p];return n.createElement.apply(null,m)}return n.createElement.apply(null,a)}g.displayName="MDXCreateElement"},99135:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>l,contentTitle:()=>m,default:()=>c,frontMatter:()=>o,metadata:()=>i,toc:()=>p});var n=a(58168),r=(a(96540),a(15680));const o={title:"Group Commit",language:"zh-CN"},m=void 0,i={unversionedId:"data-operate/import/import-way/group-commit-manual",id:"data-operate/import/import-way/group-commit-manual",title:"Group Commit",description:"\x3c!--",source:"@site/i18n/zh-CN/docusaurus-plugin-content-docs/current/data-operate/import/import-way/group-commit-manual.md",sourceDirName:"data-operate/import/import-way",slug:"/data-operate/import/import-way/group-commit-manual",permalink:"/zh-CN/docs/dev/data-operate/import/import-way/group-commit-manual",draft:!1,tags:[],version:"current",frontMatter:{title:"Group Commit",language:"zh-CN"},sidebar:"docs",previous:{title:"JSON \u683c\u5f0f\u6570\u636e\u5bfc\u5165",permalink:"/zh-CN/docs/dev/data-operate/import/import-way/load-json-format"},next:{title:"\u6700\u5c0f\u5199\u5165\u526f\u672c\u6570",permalink:"/zh-CN/docs/dev/data-operate/import/import-advanced/min-load-replica-num"}},l={},p=[{value:"Group Commit \u6a21\u5f0f",id:"group-commit-\u6a21\u5f0f",level:2},{value:"Group Commit \u4f7f\u7528\u65b9\u5f0f",id:"group-commit-\u4f7f\u7528\u65b9\u5f0f",level:2},{value:"\u4f7f\u7528<code>JDBC</code>",id:"\u4f7f\u7528jdbc",level:3},{value:"INSERT INTO VALUES",id:"insert-into-values",level:3},{value:"Stream Load",id:"stream-load",level:3},{value:"Http Stream",id:"http-stream",level:3},{value:"\u4fee\u6539group commit\u9ed8\u8ba4\u63d0\u4ea4\u95f4\u9694",id:"\u4fee\u6539group-commit\u9ed8\u8ba4\u63d0\u4ea4\u95f4\u9694",level:2},{value:"\u4f7f\u7528\u9650\u5236",id:"\u4f7f\u7528\u9650\u5236",level:2},{value:"\u76f8\u5173\u7cfb\u7edf\u914d\u7f6e",id:"\u76f8\u5173\u7cfb\u7edf\u914d\u7f6e",level:2},{value:"BE \u914d\u7f6e",id:"be-\u914d\u7f6e",level:3},{value:"<code>group_commit_wal_path</code>",id:"group_commit_wal_path",level:4},{value:"<code>group_commit_memory_rows_for_max_filter_ratio</code>",id:"group_commit_memory_rows_for_max_filter_ratio",level:4}],s={toc:p},u="wrapper";function c(e){let{components:t,...a}=e;return(0,r.yg)(u,(0,n.A)({},s,a,{components:t,mdxType:"MDXLayout"}),(0,r.yg)("h1",{id:"group-commit"},"Group Commit"),(0,r.yg)("p",null,"Group Commit \u4e0d\u662f\u4e00\u79cd\u65b0\u7684\u5bfc\u5165\u65b9\u5f0f\uff0c\u800c\u662f\u5bf9",(0,r.yg)("inlineCode",{parentName:"p"},"INSERT INTO tbl VALUES(...)"),"\u3001",(0,r.yg)("inlineCode",{parentName:"p"},"Stream Load"),"\u3001",(0,r.yg)("inlineCode",{parentName:"p"},"Http Stream"),"\u7684\u6269\u5c55\uff0c\u5927\u5e45\u63d0\u5347\u4e86\u9ad8\u5e76\u53d1\u5c0f\u5199\u5165\u7684\u6027\u80fd\u3002\u60a8\u7684\u5e94\u7528\u7a0b\u5e8f\u53ef\u4ee5\u76f4\u63a5\u4f7f\u7528 JDBC \u5c06\u6570\u636e\u9ad8\u9891\u5199\u5165 Doris\uff0c\u540c\u65f6\u901a\u8fc7\u4f7f\u7528 PreparedStatement \u53ef\u4ee5\u83b7\u5f97\u66f4\u9ad8\u7684\u6027\u80fd\u3002\u5728\u65e5\u5fd7\u573a\u666f\u4e0b\uff0c\u60a8\u4e5f\u53ef\u4ee5\u5229\u7528 Stream Load \u6216\u8005 Http Stream \u5c06\u6570\u636e\u9ad8\u9891\u5199\u5165 Doris\u3002"),(0,r.yg)("h2",{id:"group-commit-\u6a21\u5f0f"},"Group Commit \u6a21\u5f0f"),(0,r.yg)("p",null,"Group Commit \u5199\u5165\u6709\u4e09\u79cd\u6a21\u5f0f\uff0c\u5206\u522b\u662f\uff1a"),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},"\u5173\u95ed\u6a21\u5f0f\uff08",(0,r.yg)("inlineCode",{parentName:"li"},"off_mode"),"\uff09")),(0,r.yg)("p",null,"\u4e0d\u5f00\u542f Group Commit\uff0c\u4fdd\u6301\u4ee5\u4e0a\u4e09\u79cd\u5bfc\u5165\u65b9\u5f0f\u7684\u9ed8\u8ba4\u884c\u4e3a\u3002"),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},"\u540c\u6b65\u6a21\u5f0f\uff08",(0,r.yg)("inlineCode",{parentName:"li"},"sync_mode"),"\uff09")),(0,r.yg)("p",null,"Doris \u6839\u636e\u8d1f\u8f7d\u548c\u8868\u7684 ",(0,r.yg)("inlineCode",{parentName:"p"},"group_commit_interval"),"\u5c5e\u6027\u5c06\u591a\u4e2a\u5bfc\u5165\u5728\u4e00\u4e2a\u4e8b\u52a1\u63d0\u4ea4\uff0c\u4e8b\u52a1\u63d0\u4ea4\u540e\u5bfc\u5165\u8fd4\u56de\u3002\u8fd9\u9002\u7528\u4e8e\u9ad8\u5e76\u53d1\u5199\u5165\u573a\u666f\uff0c\u4e14\u5728\u5bfc\u5165\u5b8c\u6210\u540e\u8981\u6c42\u6570\u636e\u7acb\u5373\u53ef\u89c1\u3002"),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},"\u5f02\u6b65\u6a21\u5f0f\uff08",(0,r.yg)("inlineCode",{parentName:"li"},"async_mode"),"\uff09")),(0,r.yg)("p",null,"Doris \u9996\u5148\u5c06\u6570\u636e\u5199\u5165 WAL (",(0,r.yg)("inlineCode",{parentName:"p"},"Write Ahead Log"),")\uff0c\u7136\u540e\u5bfc\u5165\u7acb\u5373\u8fd4\u56de\u3002Doris \u4f1a\u6839\u636e\u8d1f\u8f7d\u548c\u8868\u7684",(0,r.yg)("inlineCode",{parentName:"p"},"group_commit_interval"),"\u5c5e\u6027\u5f02\u6b65\u63d0\u4ea4\u6570\u636e\uff0c\u63d0\u4ea4\u4e4b\u540e\u6570\u636e\u53ef\u89c1\u3002\u4e3a\u4e86\u9632\u6b62 WAL \u5360\u7528\u8f83\u5927\u7684\u78c1\u76d8\u7a7a\u95f4\uff0c\u5355\u6b21\u5bfc\u5165\u6570\u636e\u91cf\u8f83\u5927\u65f6\uff0c\u4f1a\u81ea\u52a8\u5207\u6362\u4e3a",(0,r.yg)("inlineCode",{parentName:"p"},"sync_mode"),"\u3002\u8fd9\u9002\u7528\u4e8e\u5199\u5165\u5ef6\u8fdf\u654f\u611f\u4ee5\u53ca\u9ad8\u9891\u5199\u5165\u7684\u573a\u666f\u3002"),(0,r.yg)("h2",{id:"group-commit-\u4f7f\u7528\u65b9\u5f0f"},"Group Commit \u4f7f\u7528\u65b9\u5f0f"),(0,r.yg)("p",null,"\u5047\u5982\u8868\u7684\u7ed3\u6784\u4e3a\uff1a"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-sql"},'CREATE TABLE `dt` (\n    `id` int(11) NOT NULL,\n    `name` varchar(50) NULL,\n    `score` int(11) NULL\n) ENGINE=OLAP\nDUPLICATE KEY(`id`)\nDISTRIBUTED BY HASH(`id`) BUCKETS 1\nPROPERTIES (\n    "replication_num" = "1"\n);\n')),(0,r.yg)("h3",{id:"\u4f7f\u7528jdbc"},"\u4f7f\u7528",(0,r.yg)("inlineCode",{parentName:"h3"},"JDBC")),(0,r.yg)("p",null,"\u5f53\u7528\u6237\u4f7f\u7528 JDBC ",(0,r.yg)("inlineCode",{parentName:"p"},"insert into values"),"\u65b9\u5f0f\u5199\u5165\u65f6\uff0c\u4e3a\u4e86\u51cf\u5c11 SQL \u89e3\u6790\u548c\u751f\u6210\u89c4\u5212\u7684\u5f00\u9500\uff0c \u6211\u4eec\u5728 FE \u7aef\u652f\u6301\u4e86 MySQL \u534f\u8bae\u7684",(0,r.yg)("inlineCode",{parentName:"p"},"PreparedStatement"),"\u7279\u6027\u3002\u5f53\u4f7f\u7528",(0,r.yg)("inlineCode",{parentName:"p"},"PreparedStatement"),"\u65f6\uff0cSQL \u548c\u5176\u5bfc\u5165\u89c4\u5212\u5c06\u88ab\u7f13\u5b58\u5230 Session \u7ea7\u522b\u7684\u5185\u5b58\u7f13\u5b58\u4e2d\uff0c\u540e\u7eed\u7684\u5bfc\u5165\u76f4\u63a5\u4f7f\u7528\u7f13\u5b58\u5bf9\u8c61\uff0c\u964d\u4f4e\u4e86 FE \u7684 CPU \u538b\u529b\u3002\u4e0b\u9762\u662f\u5728 JDBC \u4e2d\u4f7f\u7528 PreparedStatement \u7684\u4f8b\u5b50\uff1a"),(0,r.yg)("ol",null,(0,r.yg)("li",{parentName:"ol"},"\u8bbe\u7f6e JDBC url \u5e76\u5728 Server \u7aef\u5f00\u542f prepared statement")),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre"},"url = jdbc:mysql://127.0.0.1:9030/db?useServerPrepStmts=true\n")),(0,r.yg)("ol",{start:2},(0,r.yg)("li",{parentName:"ol"},"\u914d\u7f6e ",(0,r.yg)("inlineCode",{parentName:"li"},"group_commit")," session\u53d8\u91cf\uff0c\u6709\u5982\u4e0b\u4e24\u79cd\u65b9\u5f0f\uff1a")),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},"\u901a\u8fc7 JDBC url \u8bbe\u7f6e\uff0c\u589e\u52a0",(0,r.yg)("inlineCode",{parentName:"li"},"sessionVariables=group_commit=async_mode"))),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre"},"url = jdbc:mysql://127.0.0.1:9030/db?useServerPrepStmts=true&sessionVariables=group_commit=async_mode\n")),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},"\u901a\u8fc7\u6267\u884c SQL \u8bbe\u7f6e")),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre"},'try (Statement statement = conn.createStatement()) {\n    statement.execute("SET group_commit = async_mode;");\n}\n')),(0,r.yg)("ol",{start:3},(0,r.yg)("li",{parentName:"ol"},"\u4f7f\u7528 ",(0,r.yg)("inlineCode",{parentName:"li"},"PreparedStatement"))),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-java"},'private static final String JDBC_DRIVER = "com.mysql.jdbc.Driver";\nprivate static final String URL_PATTERN = "jdbc:mysql://%s:%d/%s?useServerPrepStmts=true";\nprivate static final String HOST = "127.0.0.1";\nprivate static final int PORT = 9087;\nprivate static final String DB = "db";\nprivate static final String TBL = "dt";\nprivate static final String USER = "root";\nprivate static final String PASSWD = "";\nprivate static final int INSERT_BATCH_SIZE = 10;\n\nprivate static void groupCommitInsert() throws Exception {\n    Class.forName(JDBC_DRIVER);\n    try (Connection conn = DriverManager.getConnection(String.format(URL_PATTERN, HOST, PORT, DB), USER, PASSWD)) {\n        // set session variable \'group_commit\'\n        try (Statement statement = conn.createStatement()) {\n            statement.execute("SET group_commit = async_mode;");\n        }\n\n        String query = "insert into " + TBL + " values(?, ?, ?)";\n        try (PreparedStatement stmt = conn.prepareStatement(query)) {\n            for (int i = 0; i < INSERT_BATCH_SIZE; i++) {\n                stmt.setInt(1, i);\n                stmt.setString(2, "name" + i);\n                stmt.setInt(3, i + 10);\n                int result = stmt.executeUpdate();\n                System.out.println("rows: " + result);\n            }\n        }\n    } catch (Exception e) {\n        e.printStackTrace();\n    }\n}   \n\nprivate static void groupCommitInsertBatch() throws Exception {\n    Class.forName(JDBC_DRIVER);\n    // add rewriteBatchedStatements=true and cachePrepStmts=true in JDBC url\n    // set session variables by sessionVariables=group_commit=async_mode in JDBC url\n    try (Connection conn = DriverManager.getConnection(\n            String.format(URL_PATTERN + "&rewriteBatchedStatements=true&cachePrepStmts=true&sessionVariables=group_commit=async_mode", HOST, PORT, DB), USER, PASSWD)) {\n\n        String query = "insert into " + TBL + " values(?, ?, ?)";\n        try (PreparedStatement stmt = conn.prepareStatement(query)) {\n            for (int j = 0; j < 5; j++) {\n                // 10 rows per insert\n                for (int i = 0; i < INSERT_BATCH_SIZE; i++) {\n                    stmt.setInt(1, i);\n                    stmt.setString(2, "name" + i);\n                    stmt.setInt(3, i + 10);\n                    stmt.addBatch();\n                }\n                int[] result = stmt.executeBatch();\n            }\n        }\n    } catch (Exception e) {\n        e.printStackTrace();\n    }\n}\n')),(0,r.yg)("p",null,"\u5173\u4e8e",(0,r.yg)("strong",{parentName:"p"},"JDBC"),"\u7684\u66f4\u591a\u7528\u6cd5\uff0c\u53c2\u8003",(0,r.yg)("a",{parentName:"p",href:"/zh-CN/docs/dev/data-operate/import/import-scenes/jdbc-load"},"\u4f7f\u7528Insert\u65b9\u5f0f\u540c\u6b65\u6570\u636e"),"\u3002"),(0,r.yg)("h3",{id:"insert-into-values"},"INSERT INTO VALUES"),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},"\u5f02\u6b65\u6a21\u5f0f")),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-sql"},"# \u914d\u7f6esession\u53d8\u91cf\u5f00\u542f group commit (\u9ed8\u8ba4\u4e3aoff_mode),\u5f00\u542f\u5f02\u6b65\u6a21\u5f0f\nmysql> set group_commit = async_mode;\n\n# \u8fd9\u91cc\u8fd4\u56de\u7684label\u662f group_commit \u5f00\u5934\u7684\uff0c\u53ef\u4ee5\u533a\u5206\u51fa\u662f\u5426\u4f7f\u7528\u4e86 group commit\nmysql> insert into dt values(1, 'Bob', 90), (2, 'Alice', 99);\nQuery OK, 2 rows affected (0.05 sec)\n{'label':'group_commit_a145ce07f1c972fc-bd2c54597052a9ad', 'status':'PREPARE', 'txnId':'181508'}\n\n# \u53ef\u4ee5\u770b\u51fa\u8fd9\u4e2a label, txn_id \u548c\u4e0a\u4e00\u4e2a\u76f8\u540c\uff0c\u8bf4\u660e\u662f\u6512\u5230\u4e86\u540c\u4e00\u4e2a\u5bfc\u5165\u4efb\u52a1\u4e2d\nmysql> insert into dt(id, name) values(3, 'John');\nQuery OK, 1 row affected (0.01 sec)\n{'label':'group_commit_a145ce07f1c972fc-bd2c54597052a9ad', 'status':'PREPARE', 'txnId':'181508'}\n\n# \u4e0d\u80fd\u7acb\u523b\u67e5\u8be2\u5230\nmysql> select * from dt;\nEmpty set (0.01 sec)\n\n# 10\u79d2\u540e\u53ef\u4ee5\u67e5\u8be2\u5230\uff0c\u53ef\u4ee5\u901a\u8fc7\u8868\u5c5e\u6027 group_commit_interval \u63a7\u5236\u6570\u636e\u53ef\u89c1\u5ef6\u8fdf\u3002\nmysql> select * from dt;\n+------+-------+-------+\n| id   | name  | score |\n+------+-------+-------+\n|    1 | Bob   |    90 |\n|    2 | Alice |    99 |\n|    3 | John  |  NULL |\n+------+-------+-------+\n3 rows in set (0.02 sec)\n")),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},"\u540c\u6b65\u6a21\u5f0f")),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-sql"},"# \u914d\u7f6esession\u53d8\u91cf\u5f00\u542f group commit (\u9ed8\u8ba4\u4e3aoff_mode),\u5f00\u542f\u540c\u6b65\u6a21\u5f0f\nmysql> set group_commit = sync_mode;\n\n# \u8fd9\u91cc\u8fd4\u56de\u7684 label \u662f group_commit \u5f00\u5934\u7684\uff0c\u53ef\u4ee5\u533a\u5206\u51fa\u662f\u5426\u8c01\u7528\u4e86 group commit\uff0c\u5bfc\u5165\u8017\u65f6\u81f3\u5c11\u662f\u8868\u5c5e\u6027 group_commit_interval\u3002\nmysql> insert into dt values(4, 'Bob', 90), (5, 'Alice', 99);\nQuery OK, 2 rows affected (10.06 sec)\n{'label':'group_commit_d84ab96c09b60587_ec455a33cb0e9e87', 'status':'PREPARE', 'txnId':'3007', 'query_id':'fc6b94085d704a94-a69bfc9a202e66e2'}\n\n# \u6570\u636e\u53ef\u4ee5\u7acb\u523b\u8bfb\u51fa\nmysql> select * from dt;\n+------+-------+-------+\n| id   | name  | score |\n+------+-------+-------+\n|    1 | Bob   |    90 |\n|    2 | Alice |    99 |\n|    3 | John  |  NULL |\n|    4 | Bob   |    90 |\n|    5 | Alice |    99 |\n+------+-------+-------+\n5 rows in set (0.03 sec)\n")),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},"\u5173\u95ed\u6a21\u5f0f")),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-sql"},"mysql> set group_commit = off_mode;\n")),(0,r.yg)("h3",{id:"stream-load"},"Stream Load"),(0,r.yg)("p",null,"\u5047\u5982",(0,r.yg)("inlineCode",{parentName:"p"},"data.csv"),"\u7684\u5185\u5bb9\u4e3a\uff1a"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-sql"},"6,Amy,60\n7,Ross,98\n")),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},"\u5f02\u6b65\u6a21\u5f0f")),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-sql"},'# \u5bfc\u5165\u65f6\u5728header\u4e2d\u589e\u52a0"group_commit:async_mode"\u914d\u7f6e\n\ncurl --location-trusted -u {user}:{passwd} -T data.csv -H "group_commit:async_mode"  -H "column_separator:,"  http://{fe_host}:{http_port}/api/db/dt/_stream_load\n{\n    "TxnId": 7009,\n    "Label": "group_commit_c84d2099208436ab_96e33fda01eddba8",\n    "Comment": "",\n    "GroupCommit": true,\n    "Status": "Success",\n    "Message": "OK",\n    "NumberTotalRows": 2,\n    "NumberLoadedRows": 2,\n    "NumberFilteredRows": 0,\n    "NumberUnselectedRows": 0,\n    "LoadBytes": 19,\n    "LoadTimeMs": 35,\n    "StreamLoadPutTimeMs": 5,\n    "ReadDataTimeMs": 0,\n    "WriteDataTimeMs": 26\n}\n\n# \u8fd4\u56de\u7684GroupCommit\u4e3atrue\uff0c\u8bf4\u660e\u8fdb\u5165\u4e86group commit\u7684\u6d41\u7a0b\n# \u8fd4\u56de\u7684Label\u662fgroup_commit\u5f00\u5934\u7684\uff0c\u662f\u771f\u6b63\u6d88\u8d39\u6570\u636e\u7684\u5bfc\u5165\u5173\u8054\u7684label\n')),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},"\u540c\u6b65\u6a21\u5f0f")),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-sql"},'# \u5bfc\u5165\u65f6\u5728header\u4e2d\u589e\u52a0"group_commit:sync_mode"\u914d\u7f6e\n\ncurl --location-trusted -u {user}:{passwd} -T data.csv -H "group_commit:sync_mode"  -H "column_separator:,"  http://{fe_host}:{http_port}/api/db/dt/_stream_load\n{\n    "TxnId": 3009,\n    "Label": "group_commit_d941bf17f6efcc80_ccf4afdde9881293",\n    "Comment": "",\n    "GroupCommit": true,\n    "Status": "Success",\n    "Message": "OK",\n    "NumberTotalRows": 2,\n    "NumberLoadedRows": 2,\n    "NumberFilteredRows": 0,\n    "NumberUnselectedRows": 0,\n    "LoadBytes": 19,\n    "LoadTimeMs": 10044,\n    "StreamLoadPutTimeMs": 4,\n    "ReadDataTimeMs": 0,\n    "WriteDataTimeMs": 10038\n}\n\n# \u8fd4\u56de\u7684GroupCommit\u4e3atrue\uff0c\u8bf4\u660e\u8fdb\u5165\u4e86group commit\u7684\u6d41\u7a0b\n# \u8fd4\u56de\u7684Label\u662fgroup_commit\u5f00\u5934\u7684\uff0c\u662f\u771f\u6b63\u6d88\u8d39\u6570\u636e\u7684\u5bfc\u5165\u5173\u8054\u7684label\n')),(0,r.yg)("p",null,"\u5173\u4e8e Stream Load \u4f7f\u7528\u7684\u66f4\u591a\u8be6\u7ec6\u8bed\u6cd5\u53ca\u6700\u4f73\u5b9e\u8df5\uff0c\u8bf7\u53c2\u9605 ",(0,r.yg)("a",{parentName:"p",href:"/zh-CN/docs/dev/data-operate/import/import-way/stream-load-manual"},"Stream Load"),"\u3002"),(0,r.yg)("h3",{id:"http-stream"},"Http Stream"),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},"\u5f02\u6b65\u6a21\u5f0f")),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-sql"},'# \u5bfc\u5165\u65f6\u5728header\u4e2d\u589e\u52a0"group_commit:async_mode"\u914d\u7f6e\n\ncurl --location-trusted -u {user}:{passwd} -T data.csv  -H "group_commit:async_mode" -H "sql:insert into db.dt select * from http_stream(\'column_separator\'=\',\', \'format\' = \'CSV\')"  http://{fe_host}:{http_port}/api/_http_stream\n{\n    "TxnId": 7011,\n    "Label": "group_commit_3b45c5750d5f15e5_703428e462e1ebb0",\n    "Comment": "",\n    "GroupCommit": true,\n    "Status": "Success",\n    "Message": "OK",\n    "NumberTotalRows": 2,\n    "NumberLoadedRows": 2,\n    "NumberFilteredRows": 0,\n    "NumberUnselectedRows": 0,\n    "LoadBytes": 19,\n    "LoadTimeMs": 65,\n    "StreamLoadPutTimeMs": 41,\n    "ReadDataTimeMs": 47,\n    "WriteDataTimeMs": 23\n}\n\n# \u8fd4\u56de\u7684GroupCommit\u4e3atrue\uff0c\u8bf4\u660e\u8fdb\u5165\u4e86group commit\u7684\u6d41\u7a0b\n# \u8fd4\u56de\u7684Label\u662fgroup_commit\u5f00\u5934\u7684\uff0c\u662f\u771f\u6b63\u6d88\u8d39\u6570\u636e\u7684\u5bfc\u5165\u5173\u8054\u7684label\n')),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},"\u540c\u6b65\u6a21\u5f0f")),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-sql"},'# \u5bfc\u5165\u65f6\u5728header\u4e2d\u589e\u52a0"group_commit:sync_mode"\u914d\u7f6e\n\ncurl --location-trusted -u {user}:{passwd} -T data.csv  -H "group_commit:sync_mode" -H "sql:insert into db.dt select * from http_stream(\'column_separator\'=\',\', \'format\' = \'CSV\')"  http://{fe_host}:{http_port}/api/_http_stream\n{\n    "TxnId": 3011,\n    "Label": "group_commit_fe470e6752aadbe6_a8f3ac328b02ea91",\n    "Comment": "",\n    "GroupCommit": true,\n    "Status": "Success",\n    "Message": "OK",\n    "NumberTotalRows": 2,\n    "NumberLoadedRows": 2,\n    "NumberFilteredRows": 0,\n    "NumberUnselectedRows": 0,\n    "LoadBytes": 19,\n    "LoadTimeMs": 10066,\n    "StreamLoadPutTimeMs": 31,\n    "ReadDataTimeMs": 32,\n    "WriteDataTimeMs": 10034\n}\n\n# \u8fd4\u56de\u7684GroupCommit\u4e3atrue\uff0c\u8bf4\u660e\u8fdb\u5165\u4e86group commit\u7684\u6d41\u7a0b\n# \u8fd4\u56de\u7684Label\u662fgroup_commit\u5f00\u5934\u7684\uff0c\u662f\u771f\u6b63\u6d88\u8d39\u6570\u636e\u7684\u5bfc\u5165\u5173\u8054\u7684label\n')),(0,r.yg)("p",null,"\u5173\u4e8e Http Stream \u4f7f\u7528\u7684\u66f4\u591a\u8be6\u7ec6\u8bed\u6cd5\u53ca\u6700\u4f73\u5b9e\u8df5\uff0c\u8bf7\u53c2\u9605 ",(0,r.yg)("a",{parentName:"p",href:"/zh-CN/docs/dev/data-operate/import/import-way/stream-load-manual"},"Stream Load"),"\u3002"),(0,r.yg)("h2",{id:"\u4fee\u6539group-commit\u9ed8\u8ba4\u63d0\u4ea4\u95f4\u9694"},"\u4fee\u6539group commit\u9ed8\u8ba4\u63d0\u4ea4\u95f4\u9694"),(0,r.yg)("p",null,"group commit \u7684\u9ed8\u8ba4\u63d0\u4ea4\u95f4\u9694\u4e3a 10 \u79d2\uff0c\u7528\u6237\u53ef\u4ee5\u901a\u8fc7\u4fee\u6539\u8868\u7684\u914d\u7f6e\uff0c\u8c03\u6574 group commit \u7684\u63d0\u4ea4\u95f4\u9694\uff1a"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-sql"},'# \u4fee\u6539\u63d0\u4ea4\u95f4\u9694\u4e3a 2 \u79d2\nALTER TABLE dt SET ("group_commit_interval_ms"="2000");\n')),(0,r.yg)("h2",{id:"\u4f7f\u7528\u9650\u5236"},"\u4f7f\u7528\u9650\u5236"),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("p",{parentName:"li"},"\u5f53\u5f00\u542f\u4e86 group commit \u6a21\u5f0f\uff0c\u7cfb\u7edf\u4f1a\u5224\u65ad\u7528\u6237\u53d1\u8d77\u7684",(0,r.yg)("inlineCode",{parentName:"p"},"INSERT INTO VALUES"),"\u8bed\u53e5\u662f\u5426\u7b26\u5408 group commit \u7684\u6761\u4ef6\uff0c\u5982\u679c\u7b26\u5408\uff0c\u8be5\u8bed\u53e5\u7684\u6267\u884c\u4f1a\u8fdb\u5165\u5230 group commit \u5199\u5165\u4e2d\u3002\u7b26\u5408\u4ee5\u4e0b\u6761\u4ef6\u4f1a\u81ea\u52a8\u9000\u5316\u4e3a\u975e group commit \u65b9\u5f0f\uff1a"),(0,r.yg)("ul",{parentName:"li"},(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("p",{parentName:"li"},"\u4e8b\u52a1\u5199\u5165\uff0c\u5373",(0,r.yg)("inlineCode",{parentName:"p"},"Begin"),"; ",(0,r.yg)("inlineCode",{parentName:"p"},"INSERT INTO VALUES"),"; ",(0,r.yg)("inlineCode",{parentName:"p"},"COMMIT"),"\u65b9\u5f0f")),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("p",{parentName:"li"},"\u6307\u5b9a label\uff0c\u5373",(0,r.yg)("inlineCode",{parentName:"p"},"INSERT INTO dt WITH LABEL {label} VALUES"))),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("p",{parentName:"li"},"VALUES \u4e2d\u5305\u542b\u8868\u8fbe\u5f0f\uff0c\u5373",(0,r.yg)("inlineCode",{parentName:"p"},"INSERT INTO dt VALUES (1 + 100)"))),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("p",{parentName:"li"},"\u5217\u66f4\u65b0\u5199\u5165")),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("p",{parentName:"li"},"\u8868\u4e0d\u652f\u6301 light schema change")))),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("p",{parentName:"li"},"\u5f53\u5f00\u542f\u4e86 group commit \u6a21\u5f0f\uff0c\u7cfb\u7edf\u4f1a\u5224\u65ad\u7528\u6237\u53d1\u8d77\u7684",(0,r.yg)("inlineCode",{parentName:"p"},"Stream Load"),"\u548c",(0,r.yg)("inlineCode",{parentName:"p"},"Http Stream"),"\u662f\u5426\u7b26\u5408 group commit \u7684\u6761\u4ef6\uff0c\u5982\u679c\u7b26\u5408\uff0c\u8be5\u5bfc\u5165\u7684\u6267\u884c\u4f1a\u8fdb\u5165\u5230 group commit \u5199\u5165\u4e2d\u3002\u7b26\u5408\u4ee5\u4e0b\u6761\u4ef6\u7684\u4f1a\u81ea\u52a8\u9000\u5316\u4e3a\u975e group commit \u65b9\u5f0f\uff1a"),(0,r.yg)("ul",{parentName:"li"},(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("p",{parentName:"li"},"\u4e24\u9636\u6bb5\u63d0\u4ea4")),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("p",{parentName:"li"},"\u6307\u5b9a label")),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("p",{parentName:"li"},"\u5217\u66f4\u65b0\u5199\u5165")),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("p",{parentName:"li"},"\u8868\u4e0d\u652f\u6301 light schema change"))))),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},"\u5bf9\u4e8e unique \u6a21\u578b\uff0c\u7531\u4e8e group commit \u4e0d\u80fd\u4fdd\u8bc1\u63d0\u4ea4\u987a\u5e8f\uff0c\u7528\u6237\u53ef\u4ee5\u914d\u5408 sequence \u5217\u4f7f\u7528\u6765\u4fdd\u8bc1\u6570\u636e\u4e00\u81f4\u6027")),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("p",{parentName:"li"},"\u5bf9",(0,r.yg)("inlineCode",{parentName:"p"},"max_filter_ratio"),"\u8bed\u4e49\u7684\u652f\u6301"),(0,r.yg)("ul",{parentName:"li"},(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("p",{parentName:"li"},"\u5728\u9ed8\u8ba4\u7684\u5bfc\u5165\u4e2d\uff0c",(0,r.yg)("inlineCode",{parentName:"p"},"filter_ratio"),"\u662f\u5bfc\u5165\u5b8c\u6210\u540e\uff0c\u901a\u8fc7\u5931\u8d25\u7684\u884c\u6570\u548c\u603b\u884c\u6570\u8ba1\u7b97\uff0c\u51b3\u5b9a\u662f\u5426\u63d0\u4ea4\u672c\u6b21\u5199\u5165")),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("p",{parentName:"li"},"\u5728 group commit \u6a21\u5f0f\u4e0b\uff0c\u7531\u4e8e\u591a\u4e2a\u7528\u6237\u53d1\u8d77\u7684\u5bfc\u5165\u4f1a\u88ab\u4e00\u4e2a\u5185\u90e8\u5bfc\u5165\u6267\u884c\uff0c\u867d\u7136\u53ef\u4ee5\u8ba1\u7b97\u51fa\u6bcf\u4e2a\u5bfc\u5165\u7684",(0,r.yg)("inlineCode",{parentName:"p"},"filter_ratio"),"\uff0c\u4f46\u662f\u6570\u636e\u4e00\u65e6\u8fdb\u5165\u5185\u90e8\u5bfc\u5165\uff0c\u5c31\u53ea\u80fd commit transaction")),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("p",{parentName:"li"},"group commit \u6a21\u5f0f\u652f\u6301\u4e86\u4e00\u5b9a\u7a0b\u5ea6\u7684",(0,r.yg)("inlineCode",{parentName:"p"},"max_filter_ratio"),"\u8bed\u4e49\uff0c\u5f53\u5bfc\u5165\u7684\u603b\u884c\u6570\u4e0d\u9ad8\u4e8e",(0,r.yg)("inlineCode",{parentName:"p"},"group_commit_memory_rows_for_max_filter_ratio"),"(\u914d\u7f6e\u5728",(0,r.yg)("inlineCode",{parentName:"p"},"be.conf"),"\u4e2d\uff0c\u9ed8\u8ba4\u4e3a",(0,r.yg)("inlineCode",{parentName:"p"},"10000"),"\u884c)\uff0c",(0,r.yg)("inlineCode",{parentName:"p"},"max_filter_ratio")," \u5de5\u4f5c")))),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("p",{parentName:"li"},"WAL \u9650\u5236"),(0,r.yg)("ul",{parentName:"li"},(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("p",{parentName:"li"},"\u5bf9\u4e8e",(0,r.yg)("inlineCode",{parentName:"p"},"async_mode"),"\u7684 group commit \u5199\u5165\uff0c\u4f1a\u628a\u6570\u636e\u5199\u5165 WAL\u3002\u5982\u679c\u5185\u90e8\u5bfc\u5165\u6210\u529f\uff0c\u5219 WAL \u88ab\u7acb\u523b\u5220\u9664\uff1b\u5982\u679c\u5185\u90e8\u5bfc\u5165\u5931\u8d25\uff0c\u901a\u8fc7\u5bfc\u5165 WAL \u7684\u65b9\u6cd5\u6765\u6062\u590d\u6570\u636e")),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("p",{parentName:"li"},"\u76ee\u524d WAL \u6587\u4ef6\u53ea\u5b58\u50a8\u5728\u4e00\u4e2a BE \u4e0a\uff0c\u5982\u679c\u8fd9\u4e2a BE \u78c1\u76d8\u635f\u574f\u6216\u6587\u4ef6\u8bef\u5220\u7b49\uff0c\u53ef\u80fd\u5bfc\u5165\u4e22\u5931\u90e8\u5206\u6570\u636e")),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("p",{parentName:"li"},"\u5f53\u4e0b\u7ebf BE \u8282\u70b9\u65f6\uff0c\u8bf7\u4f7f\u7528",(0,r.yg)("a",{parentName:"p",href:"/zh-CN/docs/dev/sql-manual/sql-reference/Cluster-Management-Statements/ALTER-SYSTEM-DECOMMISSION-BACKEND"},(0,r.yg)("inlineCode",{parentName:"a"},"DECOMMISSION")),"\u547d\u4ee4\uff0c\u5b89\u5168\u4e0b\u7ebf\u8282\u70b9\uff0c\u9632\u6b62\u8be5\u8282\u70b9\u4e0b\u7ebf\u524d WAL \u6587\u4ef6\u8fd8\u6ca1\u6709\u5168\u90e8\u5904\u7406\u5b8c\u6210\uff0c\u5bfc\u81f4\u90e8\u5206\u6570\u636e\u4e22\u5931")),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("p",{parentName:"li"},"\u5bf9\u4e8e",(0,r.yg)("inlineCode",{parentName:"p"},"async_mode"),"\u7684 group commit \u5199\u5165\uff0c\u4e3a\u4e86\u4fdd\u62a4\u78c1\u76d8\u7a7a\u95f4\uff0c\u5f53\u9047\u5230\u4ee5\u4e0b\u60c5\u51b5\u65f6\uff0c\u4f1a\u5207\u6362\u6210",(0,r.yg)("inlineCode",{parentName:"p"},"sync_mode")),(0,r.yg)("ul",{parentName:"li"},(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("p",{parentName:"li"},"\u5bfc\u5165\u6570\u636e\u91cf\u8fc7\u5927\uff0c\u5373\u8d85\u8fc7 WAL \u5355\u76ee\u5f55\u768480%\u7a7a\u95f4")),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("p",{parentName:"li"},"\u4e0d\u77e5\u9053\u6570\u636e\u91cf\u7684 chunked stream load")),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("p",{parentName:"li"},"\u5bfc\u5165\u6570\u636e\u91cf\u4e0d\u5927\uff0c\u4f46\u78c1\u76d8\u53ef\u7528\u7a7a\u95f4\u4e0d\u8db3")))),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("p",{parentName:"li"},"\u5f53\u53d1\u751f\u91cd\u91cf\u7ea7 schema change\uff08\u76ee\u524d\u52a0\u51cf\u5217\u3001\u4fee\u6539 varchar \u957f\u5ea6\u548c\u91cd\u547d\u540d\u5217\u662f\u8f7b\u91cf\u7ea7 schema change\uff0c\u5176\u5b83\u7684\u662f\u91cd\u91cf\u7ea7 schema change\uff09 \u65f6\uff0c\u4e3a\u4e86\u4fdd\u8bc1 WAL \u80fd\u591f\u9002\u914d\u8868\u7684 schema\uff0c\u5728 schema change \u6700\u540e\u7684 fe \u4fee\u6539\u5143\u6570\u636e\u9636\u6bb5\uff0c\u4f1a\u62d2\u7edd group commit \u5199\u5165\uff0c\u5ba2\u6237\u7aef\u6536\u5230",(0,r.yg)("inlineCode",{parentName:"p"},"insert table ${table_name} is blocked on schema change"),"\u5f02\u5e38\uff0c\u5ba2\u6237\u7aef\u91cd\u8bd5\u5373\u53ef"))))),(0,r.yg)("h2",{id:"\u76f8\u5173\u7cfb\u7edf\u914d\u7f6e"},"\u76f8\u5173\u7cfb\u7edf\u914d\u7f6e"),(0,r.yg)("h3",{id:"be-\u914d\u7f6e"},"BE \u914d\u7f6e"),(0,r.yg)("h4",{id:"group_commit_wal_path"},(0,r.yg)("inlineCode",{parentName:"h4"},"group_commit_wal_path")),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},"\u63cf\u8ff0:  group commit \u5b58\u653e WAL \u6587\u4ef6\u7684\u76ee\u5f55"),(0,r.yg)("li",{parentName:"ul"},"\u9ed8\u8ba4\u503c: \u9ed8\u8ba4\u5728\u7528\u6237\u914d\u7f6e\u7684",(0,r.yg)("inlineCode",{parentName:"li"},"storage_root_path"),"\u7684\u5404\u4e2a\u76ee\u5f55\u4e0b\u521b\u5efa\u4e00\u4e2a\u540d\u4e3a",(0,r.yg)("inlineCode",{parentName:"li"},"wal"),"\u7684\u76ee\u5f55\u3002\u914d\u7f6e\u793a\u4f8b\uff1a",(0,r.yg)("pre",{parentName:"li"},(0,r.yg)("code",{parentName:"pre"},"group_commit_wal_path=/data1/storage/wal;/data2/storage/wal;/data3/storage/wal\n")))),(0,r.yg)("h4",{id:"group_commit_memory_rows_for_max_filter_ratio"},(0,r.yg)("inlineCode",{parentName:"h4"},"group_commit_memory_rows_for_max_filter_ratio")),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},"\u63cf\u8ff0:  \u5f53 group commit \u5bfc\u5165\u7684\u603b\u884c\u6570\u4e0d\u9ad8\u4e8e\u8be5\u503c\uff0c",(0,r.yg)("inlineCode",{parentName:"li"},"max_filter_ratio")," \u6b63\u5e38\u5de5\u4f5c\uff0c\u5426\u5219\u4e0d\u5de5\u4f5c"),(0,r.yg)("li",{parentName:"ul"},"\u9ed8\u8ba4\u503c: 10000")))}c.isMDXComponent=!0}}]);