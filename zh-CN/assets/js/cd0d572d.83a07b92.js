"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([[12028],{15680:(e,n,t)=>{t.d(n,{xA:()=>m,yg:()=>d});var a=t(96540);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function l(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?l(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):l(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function s(e,n){if(null==e)return{};var t,a,r=function(e,n){if(null==e)return{};var t,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)t=l[a],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)t=l[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var o=a.createContext({}),p=function(e){var n=a.useContext(o),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},m=function(e){var n=p(e.components);return a.createElement(o.Provider,{value:n},e.children)},y="mdxType",g={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},N=a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,l=e.originalType,o=e.parentName,m=s(e,["components","mdxType","originalType","parentName"]),y=p(t),N=r,d=y["".concat(o,".").concat(N)]||y[N]||g[N]||l;return t?a.createElement(d,i(i({ref:n},m),{},{components:t})):a.createElement(d,i({ref:n},m))}));function d(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var l=t.length,i=new Array(l);i[0]=N;var s={};for(var o in n)hasOwnProperty.call(n,o)&&(s[o]=n[o]);s.originalType=e,s[y]="string"==typeof e?e:r,i[1]=s;for(var p=2;p<l;p++)i[p]=t[p];return a.createElement.apply(null,i)}return a.createElement.apply(null,t)}N.displayName="MDXCreateElement"},92383:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>o,contentTitle:()=>i,default:()=>g,frontMatter:()=>l,metadata:()=>s,toc:()=>p});var a=t(58168),r=(t(96540),t(15680));const l={title:"Insert Into",language:"zh-CN"},i=void 0,s={unversionedId:"data-operate/import/import-way/insert-into-manual",id:"version-1.2/data-operate/import/import-way/insert-into-manual",title:"Insert Into",description:"\x3c!--",source:"@site/i18n/zh-CN/docusaurus-plugin-content-docs/version-1.2/data-operate/import/import-way/insert-into-manual.md",sourceDirName:"data-operate/import/import-way",slug:"/data-operate/import/import-way/insert-into-manual",permalink:"/zh-CN/docs/1.2/data-operate/import/import-way/insert-into-manual",draft:!1,tags:[],version:"1.2",frontMatter:{title:"Insert Into",language:"zh-CN"},sidebar:"docs",previous:{title:"S3 Load",permalink:"/zh-CN/docs/1.2/data-operate/import/import-way/s3-load-manual"},next:{title:"JSON\u683c\u5f0f\u6570\u636e\u5bfc\u5165",permalink:"/zh-CN/docs/1.2/data-operate/import/import-way/load-json-format"}},o={},p=[{value:"\u5bfc\u5165\u64cd\u4f5c\u53ca\u8fd4\u56de\u7ed3\u679c",id:"\u5bfc\u5165\u64cd\u4f5c\u53ca\u8fd4\u56de\u7ed3\u679c",level:2},{value:"SHOW LAST INSERT",id:"show-last-insert",level:3},{value:"\u76f8\u5173\u7cfb\u7edf\u914d\u7f6e",id:"\u76f8\u5173\u7cfb\u7edf\u914d\u7f6e",level:2},{value:"FE \u914d\u7f6e",id:"fe-\u914d\u7f6e",level:3},{value:"Session \u53d8\u91cf",id:"session-\u53d8\u91cf",level:3},{value:"\u6700\u4f73\u5b9e\u8df5",id:"\u6700\u4f73\u5b9e\u8df5",level:2},{value:"\u5e94\u7528\u573a\u666f",id:"\u5e94\u7528\u573a\u666f",level:3},{value:"\u6570\u636e\u91cf",id:"\u6570\u636e\u91cf",level:3},{value:"\u5b8c\u6574\u4f8b\u5b50",id:"\u5b8c\u6574\u4f8b\u5b50",level:3},{value:"\u5e38\u89c1\u95ee\u9898",id:"\u5e38\u89c1\u95ee\u9898",level:2},{value:"\u66f4\u591a\u5e2e\u52a9",id:"\u66f4\u591a\u5e2e\u52a9",level:2}],m={toc:p},y="wrapper";function g(e){let{components:n,...t}=e;return(0,r.yg)(y,(0,a.A)({},m,t,{components:n,mdxType:"MDXLayout"}),(0,r.yg)("h1",{id:"insert-into"},"Insert Into"),(0,r.yg)("p",null,"Insert Into \u8bed\u53e5\u7684\u4f7f\u7528\u65b9\u5f0f\u548c MySQL \u7b49\u6570\u636e\u5e93\u4e2d Insert Into \u8bed\u53e5\u7684\u4f7f\u7528\u65b9\u5f0f\u7c7b\u4f3c\u3002\u4f46\u5728 Doris \u4e2d\uff0c\u6240\u6709\u7684\u6570\u636e\u5199\u5165\u90fd\u662f\u4e00\u4e2a\u72ec\u7acb\u7684\u5bfc\u5165\u4f5c\u4e1a\u3002\u6240\u4ee5\u8fd9\u91cc\u5c06 Insert Into \u4e5f\u4f5c\u4e3a\u4e00\u79cd\u5bfc\u5165\u65b9\u5f0f\u4ecb\u7ecd\u3002"),(0,r.yg)("p",null,"\u4e3b\u8981\u7684 Insert Into \u547d\u4ee4\u5305\u542b\u4ee5\u4e0b\u4e24\u79cd\uff1b"),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},"INSERT INTO tbl SELECT ..."),(0,r.yg)("li",{parentName:"ul"},"INSERT INTO tbl (col1, col2, ...) VALUES (1, 2, ...), (1,3, ...);")),(0,r.yg)("p",null,"\u5176\u4e2d\u7b2c\u4e8c\u79cd\u547d\u4ee4\u4ec5\u7528\u4e8e Demo\uff0c\u4e0d\u8981\u4f7f\u7528\u5728\u6d4b\u8bd5\u6216\u751f\u4ea7\u73af\u5883\u4e2d\u3002"),(0,r.yg)("h2",{id:"\u5bfc\u5165\u64cd\u4f5c\u53ca\u8fd4\u56de\u7ed3\u679c"},"\u5bfc\u5165\u64cd\u4f5c\u53ca\u8fd4\u56de\u7ed3\u679c"),(0,r.yg)("p",null,"Insert Into \u547d\u4ee4\u9700\u8981\u901a\u8fc7 MySQL \u534f\u8bae\u63d0\u4ea4\uff0c\u521b\u5efa\u5bfc\u5165\u8bf7\u6c42\u4f1a\u540c\u6b65\u8fd4\u56de\u5bfc\u5165\u7ed3\u679c\u3002"),(0,r.yg)("p",null,"\u4ee5\u4e0b\u662f\u4e24\u4e2aInsert Into\u7684\u4f7f\u7528\u793a\u4f8b\uff1a"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-sql"},'INSERT INTO tbl2 WITH LABEL label1 SELECT * FROM tbl3;\nINSERT INTO tbl1 VALUES ("qweasdzxcqweasdzxc"), ("a");\n')),(0,r.yg)("blockquote",null,(0,r.yg)("p",{parentName:"blockquote"},"\u6ce8\u610f\uff1a\u5f53\u9700\u8981\u4f7f\u7528 ",(0,r.yg)("inlineCode",{parentName:"p"},"CTE(Common Table Expressions)")," \u4f5c\u4e3a insert \u64cd\u4f5c\u4e2d\u7684\u67e5\u8be2\u90e8\u5206\u65f6\uff0c\u5fc5\u987b\u6307\u5b9a ",(0,r.yg)("inlineCode",{parentName:"p"},"WITH LABEL")," \u548c column list \u90e8\u5206\u6216\u8005\u5bf9",(0,r.yg)("inlineCode",{parentName:"p"},"CTE"),"\u8fdb\u884c\u5305\u88c5\u3002\u793a\u4f8b\uff1a"),(0,r.yg)("pre",{parentName:"blockquote"},(0,r.yg)("code",{parentName:"pre",className:"language-sql"},"INSERT INTO tbl1 WITH LABEL label1\nWITH cte1 AS (SELECT * FROM tbl1), cte2 AS (SELECT * FROM tbl2)\nSELECT k1 FROM cte1 JOIN cte2 WHERE cte1.k1 = 1;\n\n\nINSERT INTO tbl1 (k1)\nWITH cte1 AS (SELECT * FROM tbl1), cte2 AS (SELECT * FROM tbl2)\nSELECT k1 FROM cte1 JOIN cte2 WHERE cte1.k1 = 1;\n\nINSERT INTO tbl1 (k1)\nselect * from (\nWITH cte1 AS (SELECT * FROM tbl1), cte2 AS (SELECT * FROM tbl2)\nSELECT k1 FROM cte1 JOIN cte2 WHERE cte1.k1 = 1) as ret\n"))),(0,r.yg)("p",null,"\u5177\u4f53\u7684\u53c2\u6570\u8bf4\u660e\uff0c\u4f60\u53ef\u4ee5\u53c2\u7167 ",(0,r.yg)("a",{parentName:"p",href:"/zh-CN/docs/1.2/sql-manual/sql-reference/Data-Manipulation-Statements/Manipulation/INSERT"},"INSERT INTO")," \u547d\u4ee4\u6216\u8005\u6267\u884c",(0,r.yg)("inlineCode",{parentName:"p"},"HELP INSERT")," \u6765\u67e5\u770b\u5176\u5e2e\u52a9\u6587\u6863\u4ee5\u4fbf\u66f4\u597d\u7684\u4f7f\u7528\u8fd9\u79cd\u5bfc\u5165\u65b9\u5f0f\u3002"),(0,r.yg)("p",null,"Insert Into \u672c\u8eab\u5c31\u662f\u4e00\u4e2a SQL \u547d\u4ee4\uff0c\u5176",(0,r.yg)("strong",{parentName:"p"},"\u8fd4\u56de\u7ed3\u679c"),"\u4f1a\u6839\u636e\u6267\u884c\u7ed3\u679c\u7684\u4e0d\u540c\uff0c\u5206\u4e3a\u4ee5\u4e0b\u51e0\u79cd\uff1a"),(0,r.yg)("ol",null,(0,r.yg)("li",{parentName:"ol"},(0,r.yg)("p",{parentName:"li"},"\u7ed3\u679c\u96c6\u4e3a\u7a7a"),(0,r.yg)("p",{parentName:"li"},"\u5982\u679c insert \u5bf9\u5e94 select \u8bed\u53e5\u7684\u7ed3\u679c\u96c6\u4e3a\u7a7a\uff0c\u5219\u8fd4\u56de\u5982\u4e0b\uff1a"),(0,r.yg)("pre",{parentName:"li"},(0,r.yg)("code",{parentName:"pre",className:"language-sql"},"mysql> insert into tbl1 select * from empty_tbl;\nQuery OK, 0 rows affected (0.02 sec)\n")),(0,r.yg)("p",{parentName:"li"},(0,r.yg)("inlineCode",{parentName:"p"},"Query OK")," \u8868\u793a\u6267\u884c\u6210\u529f\u3002",(0,r.yg)("inlineCode",{parentName:"p"},"0 rows affected")," \u8868\u793a\u6ca1\u6709\u6570\u636e\u88ab\u5bfc\u5165\u3002")),(0,r.yg)("li",{parentName:"ol"},(0,r.yg)("p",{parentName:"li"},"\u7ed3\u679c\u96c6\u4e0d\u4e3a\u7a7a"),(0,r.yg)("p",{parentName:"li"},"\u5728\u7ed3\u679c\u96c6\u4e0d\u4e3a\u7a7a\u7684\u60c5\u51b5\u4e0b\u3002\u8fd4\u56de\u7ed3\u679c\u5206\u4e3a\u5982\u4e0b\u51e0\u79cd\u60c5\u51b5\uff1a"),(0,r.yg)("ol",{parentName:"li"},(0,r.yg)("li",{parentName:"ol"},(0,r.yg)("p",{parentName:"li"},"Insert \u6267\u884c\u6210\u529f\u5e76\u53ef\u89c1\uff1a"),(0,r.yg)("pre",{parentName:"li"},(0,r.yg)("code",{parentName:"pre",className:"language-sql"},"mysql> insert into tbl1 select * from tbl2;\nQuery OK, 4 rows affected (0.38 sec)\n{'label':'insert_8510c568-9eda-4173-9e36-6adc7d35291c', 'status':'visible', 'txnId':'4005'}\n\nmysql> insert into tbl1 with label my_label1 select * from tbl2;\nQuery OK, 4 rows affected (0.38 sec)\n{'label':'my_label1', 'status':'visible', 'txnId':'4005'}\n\nmysql> insert into tbl1 select * from tbl2;\nQuery OK, 2 rows affected, 2 warnings (0.31 sec)\n{'label':'insert_f0747f0e-7a35-46e2-affa-13a235f4020d', 'status':'visible', 'txnId':'4005'}\n\nmysql> insert into tbl1 select * from tbl2;\nQuery OK, 2 rows affected, 2 warnings (0.31 sec)\n{'label':'insert_f0747f0e-7a35-46e2-affa-13a235f4020d', 'status':'committed', 'txnId':'4005'}\n")),(0,r.yg)("p",{parentName:"li"},(0,r.yg)("inlineCode",{parentName:"p"},"Query OK")," \u8868\u793a\u6267\u884c\u6210\u529f\u3002",(0,r.yg)("inlineCode",{parentName:"p"},"4 rows affected")," \u8868\u793a\u603b\u5171\u67094\u884c\u6570\u636e\u88ab\u5bfc\u5165\u3002",(0,r.yg)("inlineCode",{parentName:"p"},"2 warnings")," \u8868\u793a\u88ab\u8fc7\u6ee4\u7684\u884c\u6570\u3002"),(0,r.yg)("p",{parentName:"li"},"\u540c\u65f6\u4f1a\u8fd4\u56de\u4e00\u4e2a json \u4e32\uff1a"),(0,r.yg)("pre",{parentName:"li"},(0,r.yg)("code",{parentName:"pre"},"{'label':'my_label1', 'status':'visible', 'txnId':'4005'}\n{'label':'insert_f0747f0e-7a35-46e2-affa-13a235f4020d', 'status':'committed', 'txnId':'4005'}\n{'label':'my_label1', 'status':'visible', 'txnId':'4005', 'err':'some other error'}\n")),(0,r.yg)("p",{parentName:"li"},(0,r.yg)("inlineCode",{parentName:"p"},"label")," \u4e3a\u7528\u6237\u6307\u5b9a\u7684 label \u6216\u81ea\u52a8\u751f\u6210\u7684 label\u3002Label \u662f\u8be5 Insert Into \u5bfc\u5165\u4f5c\u4e1a\u7684\u6807\u8bc6\u3002\u6bcf\u4e2a\u5bfc\u5165\u4f5c\u4e1a\uff0c\u90fd\u6709\u4e00\u4e2a\u5728\u5355 database \u5185\u90e8\u552f\u4e00\u7684 Label\u3002"),(0,r.yg)("p",{parentName:"li"},(0,r.yg)("inlineCode",{parentName:"p"},"status")," \u8868\u793a\u5bfc\u5165\u6570\u636e\u662f\u5426\u53ef\u89c1\u3002\u5982\u679c\u53ef\u89c1\uff0c\u663e\u793a ",(0,r.yg)("inlineCode",{parentName:"p"},"visible"),"\uff0c\u5982\u679c\u4e0d\u53ef\u89c1\uff0c\u663e\u793a ",(0,r.yg)("inlineCode",{parentName:"p"},"committed"),"\u3002"),(0,r.yg)("p",{parentName:"li"},(0,r.yg)("inlineCode",{parentName:"p"},"txnId")," \u4e3a\u8fd9\u4e2a insert \u5bf9\u5e94\u7684\u5bfc\u5165\u4e8b\u52a1\u7684 id\u3002"),(0,r.yg)("p",{parentName:"li"},(0,r.yg)("inlineCode",{parentName:"p"},"err")," \u5b57\u6bb5\u4f1a\u663e\u793a\u4e00\u4e9b\u5176\u4ed6\u975e\u9884\u671f\u9519\u8bef\u3002"),(0,r.yg)("p",{parentName:"li"},"\u5f53\u9700\u8981\u67e5\u770b\u88ab\u8fc7\u6ee4\u7684\u884c\u65f6\uff0c\u7528\u6237\u53ef\u4ee5\u901a\u8fc7",(0,r.yg)("a",{parentName:"p",href:"/zh-CN/docs/1.2/sql-manual/sql-reference/Show-Statements/SHOW-LOAD"},"SHOW LOAD"),"\u8bed\u53e5"),(0,r.yg)("pre",{parentName:"li"},(0,r.yg)("code",{parentName:"pre",className:"language-sql"},'show load where label="xxx";\n')),(0,r.yg)("p",{parentName:"li"},"\u8fd4\u56de\u7ed3\u679c\u4e2d\u7684 URL \u53ef\u4ee5\u7528\u4e8e\u67e5\u8be2\u9519\u8bef\u7684\u6570\u636e\uff0c\u5177\u4f53\u89c1\u540e\u9762 ",(0,r.yg)("strong",{parentName:"p"},"\u67e5\u770b\u9519\u8bef\u884c")," \u5c0f\u7ed3\u3002"),(0,r.yg)("p",{parentName:"li"},(0,r.yg)("strong",{parentName:"p"},"\u6570\u636e\u4e0d\u53ef\u89c1\u662f\u4e00\u4e2a\u4e34\u65f6\u72b6\u6001\uff0c\u8fd9\u6279\u6570\u636e\u6700\u7ec8\u662f\u4e00\u5b9a\u53ef\u89c1\u7684")),(0,r.yg)("p",{parentName:"li"},"\u53ef\u4ee5\u901a\u8fc7",(0,r.yg)("a",{parentName:"p",href:"/zh-CN/docs/1.2/sql-manual/sql-reference/Show-Statements/SHOW-TRANSACTION"},"SHOW TRANSACTION"),"\u8bed\u53e5\u67e5\u770b\u8fd9\u6279\u6570\u636e\u7684\u53ef\u89c1\u72b6\u6001\uff1a"),(0,r.yg)("pre",{parentName:"li"},(0,r.yg)("code",{parentName:"pre",className:"language-sql"},"show transaction where id=4005;\n")),(0,r.yg)("p",{parentName:"li"},"\u8fd4\u56de\u7ed3\u679c\u4e2d\u7684 ",(0,r.yg)("inlineCode",{parentName:"p"},"TransactionStatus")," \u5217\u5982\u679c\u4e3a ",(0,r.yg)("inlineCode",{parentName:"p"},"visible"),"\uff0c\u5219\u8868\u8ff0\u6570\u636e\u53ef\u89c1\u3002")),(0,r.yg)("li",{parentName:"ol"},(0,r.yg)("p",{parentName:"li"},"Insert \u6267\u884c\u5931\u8d25"),(0,r.yg)("p",{parentName:"li"},"\u6267\u884c\u5931\u8d25\u8868\u793a\u6ca1\u6709\u4efb\u4f55\u6570\u636e\u88ab\u6210\u529f\u5bfc\u5165\uff0c\u5e76\u8fd4\u56de\u5982\u4e0b\uff1a"),(0,r.yg)("pre",{parentName:"li"},(0,r.yg)("code",{parentName:"pre",className:"language-sql"},'mysql> insert into tbl1 select * from tbl2 where k1 = "a";\nERROR 1064 (HY000): all partitions have no load data. url: http://10.74.167.16:8042/api/_load_error_log?file=__shard_2/error_log_insert_stmt_ba8bb9e158e4879-ae8de8507c0bf8a2_ba8bb9e158e4879_ae8de8507c0bf8a2\n')),(0,r.yg)("p",{parentName:"li"},"\u5176\u4e2d ",(0,r.yg)("inlineCode",{parentName:"p"},"ERROR 1064 (HY000): all partitions have no load data")," \u663e\u793a\u5931\u8d25\u539f\u56e0\u3002\u540e\u9762\u7684 url \u53ef\u4ee5\u7528\u4e8e\u67e5\u8be2\u9519\u8bef\u7684\u6570\u636e\uff0c\u5177\u4f53\u89c1\u540e\u9762 ",(0,r.yg)("strong",{parentName:"p"},"\u67e5\u770b\u9519\u8bef\u884c")," \u5c0f\u7ed3\u3002"))))),(0,r.yg)("p",null,(0,r.yg)("strong",{parentName:"p"},"\u7efc\u4e0a\uff0c\u5bf9\u4e8e insert \u64cd\u4f5c\u8fd4\u56de\u7ed3\u679c\u7684\u6b63\u786e\u5904\u7406\u903b\u8f91\u5e94\u4e3a\uff1a")),(0,r.yg)("ol",null,(0,r.yg)("li",{parentName:"ol"},"\u5982\u679c\u8fd4\u56de\u7ed3\u679c\u4e3a ",(0,r.yg)("inlineCode",{parentName:"li"},"ERROR 1064 (HY000)"),"\uff0c\u5219\u8868\u793a\u5bfc\u5165\u5931\u8d25\u3002"),(0,r.yg)("li",{parentName:"ol"},"\u5982\u679c\u8fd4\u56de\u7ed3\u679c\u4e3a ",(0,r.yg)("inlineCode",{parentName:"li"},"Query OK"),"\uff0c\u5219\u8868\u793a\u6267\u884c\u6210\u529f\u3002",(0,r.yg)("ol",{parentName:"li"},(0,r.yg)("li",{parentName:"ol"},"\u5982\u679c ",(0,r.yg)("inlineCode",{parentName:"li"},"rows affected")," \u4e3a 0\uff0c\u8868\u793a\u7ed3\u679c\u96c6\u4e3a\u7a7a\uff0c\u6ca1\u6709\u6570\u636e\u88ab\u5bfc\u5165\u3002"),(0,r.yg)("li",{parentName:"ol"},"\u5982\u679c ",(0,r.yg)("inlineCode",{parentName:"li"},"rows affected")," \u5927\u4e8e 0\uff1a",(0,r.yg)("ol",{parentName:"li"},(0,r.yg)("li",{parentName:"ol"},"\u5982\u679c ",(0,r.yg)("inlineCode",{parentName:"li"},"status")," \u4e3a ",(0,r.yg)("inlineCode",{parentName:"li"},"committed"),"\uff0c\u8868\u793a\u6570\u636e\u8fd8\u4e0d\u53ef\u89c1\u3002\u9700\u8981\u901a\u8fc7 ",(0,r.yg)("inlineCode",{parentName:"li"},"show transaction")," \u8bed\u53e5\u67e5\u770b\u72b6\u6001\u76f4\u5230 ",(0,r.yg)("inlineCode",{parentName:"li"},"visible")),(0,r.yg)("li",{parentName:"ol"},"\u5982\u679c ",(0,r.yg)("inlineCode",{parentName:"li"},"status")," \u4e3a ",(0,r.yg)("inlineCode",{parentName:"li"},"visible"),"\uff0c\u8868\u793a\u6570\u636e\u5bfc\u5165\u6210\u529f\u3002"))),(0,r.yg)("li",{parentName:"ol"},"\u5982\u679c ",(0,r.yg)("inlineCode",{parentName:"li"},"warnings")," \u5927\u4e8e 0\uff0c\u8868\u793a\u6709\u6570\u636e\u88ab\u8fc7\u6ee4\uff0c\u53ef\u4ee5\u901a\u8fc7 ",(0,r.yg)("inlineCode",{parentName:"li"},"show load")," \u8bed\u53e5\u83b7\u53d6 url \u67e5\u770b\u88ab\u8fc7\u6ee4\u7684\u884c\u3002")))),(0,r.yg)("h3",{id:"show-last-insert"},"SHOW LAST INSERT"),(0,r.yg)("p",null,"\u5728\u4e0a\u4e00\u5c0f\u8282\u4e2d\u6211\u4eec\u4ecb\u7ecd\u4e86\u5982\u4f55\u6839\u636e insert \u64cd\u4f5c\u7684\u8fd4\u56de\u7ed3\u679c\u8fdb\u884c\u540e\u7eed\u5904\u7406\u3002\u4f46\u4e00\u4e9b\u8bed\u8a00\u7684mysql\u7c7b\u5e93\u4e2d\u5f88\u96be\u83b7\u53d6\u8fd4\u56de\u7ed3\u679c\u7684\u4e2d\u7684 json \u5b57\u7b26\u4e32\u3002\u56e0\u6b64\uff0cDoris \u8fd8\u63d0\u4f9b\u4e86 ",(0,r.yg)("inlineCode",{parentName:"p"},"SHOW LAST INSERT")," \u547d\u4ee4\u6765\u663e\u5f0f\u7684\u83b7\u53d6\u6700\u8fd1\u4e00\u6b21 insert \u64cd\u4f5c\u7684\u7ed3\u679c\u3002"),(0,r.yg)("p",null,"\u5f53\u6267\u884c\u5b8c\u4e00\u4e2a insert \u64cd\u4f5c\u540e\uff0c\u53ef\u4ee5\u5728\u540c\u4e00 session \u8fde\u63a5\u4e2d\u6267\u884c ",(0,r.yg)("inlineCode",{parentName:"p"},"SHOW LAST INSERT"),"\u3002\u8be5\u547d\u4ee4\u4f1a\u8fd4\u56de\u6700\u8fd1\u4e00\u6b21insert \u64cd\u4f5c\u7684\u7ed3\u679c\uff0c\u5982\uff1a"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-sql"},"mysql> show last insert\\G\n*************************** 1. row ***************************\n    TransactionId: 64067\n            Label: insert_ba8f33aea9544866-8ed77e2844d0cc9b\n         Database: default_cluster:db1\n            Table: t1\nTransactionStatus: VISIBLE\n       LoadedRows: 2\n     FilteredRows: 0\n")),(0,r.yg)("p",null,"\u8be5\u547d\u4ee4\u4f1a\u8fd4\u56de insert \u4ee5\u53ca\u5bf9\u5e94\u4e8b\u52a1\u7684\u8be6\u7ec6\u4fe1\u606f\u3002\u56e0\u6b64\uff0c\u7528\u6237\u53ef\u4ee5\u5728\u6bcf\u6b21\u6267\u884c\u5b8c insert \u64cd\u4f5c\u540e\uff0c\u7ee7\u7eed\u6267\u884c ",(0,r.yg)("inlineCode",{parentName:"p"},"show last insert")," \u547d\u4ee4\u6765\u83b7\u53d6 insert \u7684\u7ed3\u679c\u3002"),(0,r.yg)("blockquote",null,(0,r.yg)("p",{parentName:"blockquote"},"\u6ce8\u610f\uff1a\u8be5\u547d\u4ee4\u53ea\u4f1a\u8fd4\u56de\u5728\u540c\u4e00 session \u8fde\u63a5\u4e2d\uff0c\u6700\u8fd1\u4e00\u6b21 insert \u64cd\u4f5c\u7684\u7ed3\u679c\u3002\u5982\u679c\u8fde\u63a5\u65ad\u5f00\u6216\u66f4\u6362\u4e86\u65b0\u7684\u8fde\u63a5\uff0c\u5219\u5c06\u8fd4\u56de\u7a7a\u96c6\u3002")),(0,r.yg)("h2",{id:"\u76f8\u5173\u7cfb\u7edf\u914d\u7f6e"},"\u76f8\u5173\u7cfb\u7edf\u914d\u7f6e"),(0,r.yg)("h3",{id:"fe-\u914d\u7f6e"},"FE \u914d\u7f6e"),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("p",{parentName:"li"},"timeout"),(0,r.yg)("p",{parentName:"li"},"\u5bfc\u5165\u4efb\u52a1\u7684\u8d85\u65f6\u65f6\u95f4(\u4ee5\u79d2\u4e3a\u5355\u4f4d)\uff0c\u5bfc\u5165\u4efb\u52a1\u5728\u8bbe\u5b9a\u7684 timeout \u65f6\u95f4\u5185\u672a\u5b8c\u6210\u5219\u4f1a\u88ab\u7cfb\u7edf\u53d6\u6d88\uff0c\u53d8\u6210 CANCELLED\u3002"),(0,r.yg)("p",{parentName:"li"},"\u76ee\u524d Insert Into \u5e76\u4e0d\u652f\u6301\u81ea\u5b9a\u4e49\u5bfc\u5165\u7684 timeout \u65f6\u95f4\uff0c\u6240\u6709 Insert Into \u5bfc\u5165\u7684\u8d85\u65f6\u65f6\u95f4\u662f\u7edf\u4e00\u7684\uff0c\u9ed8\u8ba4\u7684 timeout \u65f6\u95f4\u4e3a1\u5c0f\u65f6\u3002\u5982\u679c\u5bfc\u5165\u7684\u6e90\u6587\u4ef6\u65e0\u6cd5\u5728\u89c4\u5b9a\u65f6\u95f4\u5185\u5b8c\u6210\u5bfc\u5165\uff0c\u5219\u9700\u8981\u8c03\u6574 FE \u7684\u53c2\u6570",(0,r.yg)("inlineCode",{parentName:"p"},"insert_load_default_timeout_second"),"\u3002"),(0,r.yg)("version",{since:"dev"}),"\u540c\u65f6 Insert Into \u8bed\u53e5\u53d7\u5230 Session \u53d8\u91cf `insert_timeout`\u7684\u9650\u5236\u3002\u53ef\u4ee5\u901a\u8fc7 `SET insert_timeout = xxx;` \u6765\u589e\u52a0\u8d85\u65f6\u65f6\u95f4\uff0c\u5355\u4f4d\u662f\u79d2\u3002")),(0,r.yg)("h3",{id:"session-\u53d8\u91cf"},"Session \u53d8\u91cf"),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("p",{parentName:"li"},"enable","_","insert","_","strict"),(0,r.yg)("p",{parentName:"li"},"Insert Into \u5bfc\u5165\u672c\u8eab\u4e0d\u80fd\u63a7\u5236\u5bfc\u5165\u53ef\u5bb9\u5fcd\u7684\u9519\u8bef\u7387\u3002\u7528\u6237\u53ea\u80fd\u901a\u8fc7 ",(0,r.yg)("inlineCode",{parentName:"p"},"enable_insert_strict")," \u8fd9\u4e2a Session \u53c2\u6570\u7528\u6765\u63a7\u5236\u3002"),(0,r.yg)("p",{parentName:"li"},"\u5f53\u8be5\u53c2\u6570\u8bbe\u7f6e\u4e3a false \u65f6\uff0c\u8868\u793a\u81f3\u5c11\u6709\u4e00\u6761\u6570\u636e\u88ab\u6b63\u786e\u5bfc\u5165\uff0c\u5219\u8fd4\u56de\u6210\u529f\u3002\u5982\u679c\u6709\u5931\u8d25\u6570\u636e\uff0c\u5219\u8fd8\u4f1a\u8fd4\u56de\u4e00\u4e2a Label\u3002"),(0,r.yg)("p",{parentName:"li"},"\u5f53\u8be5\u53c2\u6570\u8bbe\u7f6e\u4e3a true \u65f6\uff0c\u8868\u793a\u5982\u679c\u6709\u4e00\u6761\u6570\u636e\u9519\u8bef\uff0c\u5219\u5bfc\u5165\u5931\u8d25\u3002"),(0,r.yg)("p",{parentName:"li"},"\u9ed8\u8ba4\u4e3a false\u3002\u53ef\u901a\u8fc7 ",(0,r.yg)("inlineCode",{parentName:"p"},"SET enable_insert_strict = true;")," \u6765\u8bbe\u7f6e\u3002 ")),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("p",{parentName:"li"},"query","_","timeout"),(0,r.yg)("p",{parentName:"li"},"Insert Into \u672c\u8eab\u4e5f\u662f\u4e00\u4e2a SQL \u547d\u4ee4\uff0cInsert Into \u8bed\u53e5\u53d7\u5230 Session \u53d8\u91cf ",(0,r.yg)("version",{since:"dev",type:"inline"},(0,r.yg)("inlineCode",{parentName:"p"},"insert_timeout"))," \u7684\u9650\u5236\u3002\u53ef\u4ee5\u901a\u8fc7 ",(0,r.yg)("inlineCode",{parentName:"p"},"SET insert_timeout = xxx;")," \u6765\u589e\u52a0\u8d85\u65f6\u65f6\u95f4\uff0c\u5355\u4f4d\u662f\u79d2\u3002"))),(0,r.yg)("h2",{id:"\u6700\u4f73\u5b9e\u8df5"},"\u6700\u4f73\u5b9e\u8df5"),(0,r.yg)("h3",{id:"\u5e94\u7528\u573a\u666f"},"\u5e94\u7528\u573a\u666f"),(0,r.yg)("ol",null,(0,r.yg)("li",{parentName:"ol"},"\u7528\u6237\u5e0c\u671b\u4ec5\u5bfc\u5165\u51e0\u6761\u5047\u6570\u636e\uff0c\u9a8c\u8bc1\u4e00\u4e0b Doris \u7cfb\u7edf\u7684\u529f\u80fd\u3002\u6b64\u65f6\u9002\u5408\u4f7f\u7528 ",(0,r.yg)("a",{parentName:"li",href:"/zh-CN/docs/1.2/sql-manual/sql-reference/Data-Manipulation-Statements/Manipulation/INSERT"},"INSERT INTO VALUES")," \u7684\u8bed\u6cd5\uff0c\u8fd9\u91cc\u8bed\u6cd5\u548cMySql\u8bed\u6cd5\u4e00\u6837\u3002"),(0,r.yg)("li",{parentName:"ol"},"\u7528\u6237\u5e0c\u671b\u5c06\u5df2\u7ecf\u5728 Doris \u8868\u4e2d\u7684\u6570\u636e\u8fdb\u884c ETL \u8f6c\u6362\u5e76\u5bfc\u5165\u5230\u4e00\u4e2a\u65b0\u7684 Doris \u8868\u4e2d\uff0c\u6b64\u65f6\u9002\u5408\u4f7f\u7528 INSERT INTO SELECT \u8bed\u6cd5\u3002"),(0,r.yg)("li",{parentName:"ol"},"\u7528\u6237\u53ef\u4ee5\u521b\u5efa\u4e00\u79cd\u5916\u90e8\u8868\uff0c\u5982 MySQL \u5916\u90e8\u8868\u6620\u5c04\u4e00\u5f20 MySQL \u7cfb\u7edf\u4e2d\u7684\u8868\u3002\u6216\u8005\u521b\u5efa ",(0,r.yg)("a",{parentName:"li",href:"/zh-CN/docs/1.2/sql-manual/sql-reference/Data-Manipulation-Statements/Load/BROKER-LOAD"},"Broker")," \u5916\u90e8\u8868\u6765\u6620\u5c04 HDFS \u4e0a\u7684\u6570\u636e\u6587\u4ef6\u3002\u7136\u540e\u901a\u8fc7 INSERT INTO SELECT \u8bed\u6cd5\u5c06\u5916\u90e8\u8868\u4e2d\u7684\u6570\u636e\u5bfc\u5165\u5230 Doris \u8868\u4e2d\u5b58\u50a8\u3002")),(0,r.yg)("h3",{id:"\u6570\u636e\u91cf"},"\u6570\u636e\u91cf"),(0,r.yg)("p",null,"Insert Into \u5bf9\u6570\u636e\u91cf\u6ca1\u6709\u9650\u5236\uff0c\u5927\u6570\u636e\u91cf\u5bfc\u5165\u4e5f\u53ef\u4ee5\u652f\u6301\u3002\u4f46 Insert Into \u6709\u9ed8\u8ba4\u7684\u8d85\u65f6\u65f6\u95f4\uff0c\u7528\u6237\u9884\u4f30\u7684\u5bfc\u5165\u6570\u636e\u91cf\u8fc7\u5927\uff0c\u5c31\u9700\u8981\u4fee\u6539\u7cfb\u7edf\u7684 Insert Into \u5bfc\u5165\u8d85\u65f6\u65f6\u95f4\u3002"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre"},"\u5bfc\u5165\u6570\u636e\u91cf = 36G \u7ea6\u2264 3600s * 10M/s \n\u5176\u4e2d 10M/s \u662f\u6700\u5927\u5bfc\u5165\u9650\u901f\uff0c\u7528\u6237\u9700\u8981\u6839\u636e\u5f53\u524d\u96c6\u7fa4\u60c5\u51b5\u8ba1\u7b97\u51fa\u5e73\u5747\u7684\u5bfc\u5165\u901f\u5ea6\u6765\u66ff\u6362\u516c\u5f0f\u4e2d\u7684 10M/s\n")),(0,r.yg)("h3",{id:"\u5b8c\u6574\u4f8b\u5b50"},"\u5b8c\u6574\u4f8b\u5b50"),(0,r.yg)("p",null,"\u7528\u6237\u6709\u4e00\u5f20\u8868 store","_","sales \u5728\u6570\u636e\u5e93 sales \u4e2d\uff0c\u7528\u6237\u53c8\u521b\u5efa\u4e86\u4e00\u5f20\u8868\u53eb bj","_","store","_","sales \u4e5f\u5728\u6570\u636e\u5e93 sales \u4e2d\uff0c\u7528\u6237\u5e0c\u671b\u5c06 store","_","sales \u4e2d\u9500\u552e\u8bb0\u5f55\u5728 bj \u7684\u6570\u636e\u5bfc\u5165\u5230\u8fd9\u5f20\u65b0\u5efa\u7684\u8868 bj","_","store","_","sales \u4e2d\u3002\u5bfc\u5165\u7684\u6570\u636e\u91cf\u7ea6\u4e3a\uff1a10G\u3002"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-sql"},"store_sales schema\uff1a\n(id, total, user_id, sale_timestamp, region)\n\nbj_store_sales schema:\n(id, total, user_id, sale_timestamp)\n")),(0,r.yg)("p",null,"\u96c6\u7fa4\u60c5\u51b5\uff1a\u7528\u6237\u5f53\u524d\u96c6\u7fa4\u7684\u5e73\u5747\u5bfc\u5165\u901f\u5ea6\u7ea6\u4e3a 5M/s"),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("p",{parentName:"li"},"Step1: \u5224\u65ad\u662f\u5426\u8981\u4fee\u6539 Insert Into \u7684\u9ed8\u8ba4\u8d85\u65f6\u65f6\u95f4"),(0,r.yg)("pre",{parentName:"li"},(0,r.yg)("code",{parentName:"pre"},"\u8ba1\u7b97\u5bfc\u5165\u7684\u5927\u6982\u65f6\u95f4\n10G / 5M/s = 2000s\n\n\u4fee\u6539 FE \u914d\u7f6e\ninsert_load_default_timeout_second = 2000\n"))),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("p",{parentName:"li"},"Step2\uff1a\u521b\u5efa\u5bfc\u5165\u4efb\u52a1"),(0,r.yg)("p",{parentName:"li"},"\u7531\u4e8e\u7528\u6237\u662f\u5e0c\u671b\u5c06\u4e00\u5f20\u8868\u4e2d\u7684\u6570\u636e\u505a ETL \u5e76\u5bfc\u5165\u5230\u76ee\u6807\u8868\u4e2d\uff0c\u6240\u4ee5\u5e94\u8be5\u4f7f\u7528 Insert into query","_","stmt \u65b9\u5f0f\u5bfc\u5165\u3002"),(0,r.yg)("pre",{parentName:"li"},(0,r.yg)("code",{parentName:"pre",className:"language-sql"},'INSERT INTO bj_store_sales WITH LABEL `label` SELECT id, total, user_id, sale_timestamp FROM store_sales where region = "bj";\n')))),(0,r.yg)("h2",{id:"\u5e38\u89c1\u95ee\u9898"},"\u5e38\u89c1\u95ee\u9898"),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("p",{parentName:"li"},"\u67e5\u770b\u9519\u8bef\u884c"),(0,r.yg)("p",{parentName:"li"},"\u7531\u4e8e Insert Into \u65e0\u6cd5\u63a7\u5236\u9519\u8bef\u7387\uff0c\u53ea\u80fd\u901a\u8fc7 ",(0,r.yg)("inlineCode",{parentName:"p"},"enable_insert_strict")," \u8bbe\u7f6e\u4e3a\u5b8c\u5168\u5bb9\u5fcd\u9519\u8bef\u6570\u636e\u6216\u5b8c\u5168\u5ffd\u7565\u9519\u8bef\u6570\u636e\u3002\u56e0\u6b64\u5982\u679c ",(0,r.yg)("inlineCode",{parentName:"p"},"enable_insert_strict")," \u8bbe\u4e3a true\uff0c\u5219 Insert Into \u53ef\u80fd\u4f1a\u5931\u8d25\u3002\u800c\u5982\u679c ",(0,r.yg)("inlineCode",{parentName:"p"},"enable_insert_strict")," \u8bbe\u4e3a false\uff0c\u5219\u53ef\u80fd\u51fa\u73b0\u4ec5\u5bfc\u5165\u4e86\u90e8\u5206\u5408\u683c\u6570\u636e\u7684\u60c5\u51b5\u3002"),(0,r.yg)("p",{parentName:"li"},"\u5f53\u8fd4\u56de\u7ed3\u679c\u4e2d\u63d0\u4f9b\u4e86 url \u5b57\u6bb5\u65f6\uff0c\u53ef\u4ee5\u901a\u8fc7\u4ee5\u4e0b\u547d\u4ee4\u67e5\u770b\u9519\u8bef\u884c\uff1a"),(0,r.yg)("p",{parentName:"li"},(0,r.yg)("inlineCode",{parentName:"p"},'SHOW LOAD WARNINGS ON "url";')),(0,r.yg)("p",{parentName:"li"},"\u793a\u4f8b\uff1a"),(0,r.yg)("p",{parentName:"li"},(0,r.yg)("inlineCode",{parentName:"p"},'SHOW LOAD WARNINGS ON "http://ip:port/api/_load_error_log?file=__shard_13/error_log_insert_stmt_d2cac0a0a16d482d-9041c949a4b71605_d2cac0a0a16d482d_9041c949a4b71605";')),(0,r.yg)("p",{parentName:"li"},"\u9519\u8bef\u7684\u539f\u56e0\u901a\u5e38\u5982\uff1a\u6e90\u6570\u636e\u5217\u957f\u5ea6\u8d85\u8fc7\u76ee\u7684\u6570\u636e\u5217\u957f\u5ea6\u3001\u5217\u7c7b\u578b\u4e0d\u5339\u914d\u3001\u5206\u533a\u4e0d\u5339\u914d\u3001\u5217\u987a\u5e8f\u4e0d\u5339\u914d\u7b49\u7b49\u3002"))),(0,r.yg)("h2",{id:"\u66f4\u591a\u5e2e\u52a9"},"\u66f4\u591a\u5e2e\u52a9"),(0,r.yg)("p",null,"\u5173\u4e8e ",(0,r.yg)("strong",{parentName:"p"},"Insert Into")," \u4f7f\u7528\u7684\u66f4\u591a\u8be6\u7ec6\u8bed\u6cd5\uff0c\u8bf7\u53c2\u9605 ",(0,r.yg)("a",{parentName:"p",href:"/zh-CN/docs/1.2/sql-manual/sql-reference/Data-Manipulation-Statements/Manipulation/INSERT"},"INSERT INTO")," \u547d\u4ee4\u624b\u518c\uff0c\u4e5f\u53ef\u4ee5\u5728 Mysql \u5ba2\u6237\u7aef\u547d\u4ee4\u884c\u4e0b\u8f93\u5165 ",(0,r.yg)("inlineCode",{parentName:"p"},"HELP INSERT")," \u83b7\u53d6\u66f4\u591a\u5e2e\u52a9\u4fe1\u606f\u3002"))}g.isMDXComponent=!0}}]);