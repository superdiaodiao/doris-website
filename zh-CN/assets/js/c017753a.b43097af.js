"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([[77794],{15680:(e,t,n)=>{n.d(t,{xA:()=>p,yg:()=>d});var r=n(296540);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=r.createContext({}),c=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},p=function(e){var t=c(e.components);return r.createElement(s.Provider,{value:t},e.children)},m="mdxType",y={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,l=e.originalType,s=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),m=c(n),u=a,d=m["".concat(s,".").concat(u)]||m[u]||y[u]||l;return n?r.createElement(d,o(o({ref:t},p),{},{components:n})):r.createElement(d,o({ref:t},p))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=n.length,o=new Array(l);o[0]=u;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i[m]="string"==typeof e?e:a,o[1]=i;for(var c=2;c<l;c++)o[c]=n[c];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}u.displayName="MDXCreateElement"},793174:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>o,default:()=>y,frontMatter:()=>l,metadata:()=>i,toc:()=>c});var r=n(58168),a=(n(296540),n(15680));const l={title:"SQL \u65b9\u8a00\u517c\u5bb9",language:"zh-CN"},o=void 0,i={unversionedId:"lakehouse/sql-dialect",id:"lakehouse/sql-dialect",title:"SQL \u65b9\u8a00\u517c\u5bb9",description:"\x3c!--",source:"@site/i18n/zh-CN/docusaurus-plugin-content-docs/current/lakehouse/sql-dialect.md",sourceDirName:"lakehouse",slug:"/lakehouse/sql-dialect",permalink:"/zh-CN/docs/dev/lakehouse/sql-dialect",draft:!1,tags:[],version:"current",frontMatter:{title:"SQL \u65b9\u8a00\u517c\u5bb9",language:"zh-CN"},sidebar:"docs",previous:{title:"\u5916\u8868\u7edf\u8ba1\u4fe1\u606f",permalink:"/zh-CN/docs/dev/lakehouse/external-statistics"},next:{title:"\u6587\u4ef6\u7cfb\u7edf\u6027\u80fd\u6d4b\u8bd5\u5de5\u5177",permalink:"/zh-CN/docs/dev/lakehouse/fs-benchmark-tool"}},s={},c=[{value:"\u90e8\u7f72\u670d\u52a1",id:"\u90e8\u7f72\u670d\u52a1",level:2},{value:"\u4f7f\u7528 SQL \u65b9\u8a00",id:"\u4f7f\u7528-sql-\u65b9\u8a00",level:2},{value:"Presto",id:"presto",level:3},{value:"Clickhouse",id:"clickhouse",level:3}],p={toc:c},m="wrapper";function y(e){let{components:t,...n}=e;return(0,a.yg)(m,(0,r.A)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,a.yg)("admonition",{type:"tip"},(0,a.yg)("p",{parentName:"admonition"},"\u4ece 2.1 \u7248\u672c\u5f00\u59cb\uff0cDoris \u53ef\u4ee5\u652f\u6301\u591a\u79cd SQL \u65b9\u8a00\uff0c\u5982 Presto\u3001Trino\u3001Hive\u3001PostgreSQL\u3001Spark\u3001Clickhouse \u7b49\u7b49\u3002\u901a\u8fc7\u8fd9\u4e2a\u529f\u80fd\uff0c\u7528\u6237\u53ef\u4ee5\u76f4\u63a5\u4f7f\u7528\u5bf9\u5e94\u7684 SQL \u65b9\u8a00\u67e5\u8be2 Doris \u4e2d\u7684\u6570\u636e\uff0c\u65b9\u4fbf\u7528\u6237\u5c06\u539f\u5148\u7684\u4e1a\u52a1\u5e73\u6ed1\u7684\u8fc1\u79fb\u5230 Doris \u4e2d\u3002")),(0,a.yg)("admonition",{type:"caution"},(0,a.yg)("ol",{parentName:"admonition"},(0,a.yg)("li",{parentName:"ol"},(0,a.yg)("p",{parentName:"li"},"\u8be5\u529f\u80fd\u76ee\u524d\u662f\u5b9e\u9a8c\u6027\u529f\u80fd\uff0c\u60a8\u5728\u4f7f\u7528\u8fc7\u7a0b\u4e2d\u5982\u9047\u5230\u4efb\u4f55\u95ee\u9898\uff0c\u6b22\u8fce\u901a\u8fc7\u90ae\u4ef6\u7ec4\u3001",(0,a.yg)("a",{parentName:"p",href:"https://github.com/apache/doris/issues"},"GitHub Issue")," \u7b49\u65b9\u5f0f\u8fdb\u884c\u53cd\u9988\u3002")),(0,a.yg)("li",{parentName:"ol"},(0,a.yg)("p",{parentName:"li"},"\u8be5\u529f\u80fd\u53ea\u652f\u6301\u67e5\u8be2\u8bed\u53e5\uff0c\u4e0d\u652f\u6301 DDL\u3001DML \u8bed\u53e5\u3002")))),(0,a.yg)("h2",{id:"\u90e8\u7f72\u670d\u52a1"},"\u90e8\u7f72\u670d\u52a1"),(0,a.yg)("ol",null,(0,a.yg)("li",{parentName:"ol"},(0,a.yg)("p",{parentName:"li"},"\u4e0b\u8f7d\u6700\u65b0\u7248\u672c\u7684 ",(0,a.yg)("a",{parentName:"p",href:"https://doris-build-1308700295.cos.ap-beijing.myqcloud.com/transform-doris-tool/doris-sql-convertor-1.0.1-bin-x86"},"SQL \u65b9\u8a00\u8f6c\u6362\u5de5\u5177 (1.0.1)")),(0,a.yg)("blockquote",{parentName:"li"},(0,a.yg)("p",{parentName:"blockquote"},"\u6ce8\uff1a"),(0,a.yg)("p",{parentName:"blockquote"},"SQL \u65b9\u8a00\u8f6c\u6362\u5de5\u5177\u57fa\u4e8e\u5f00\u6e90\u7684 ",(0,a.yg)("a",{parentName:"p",href:"https://github.com/tobymao/sqlglot"},"SQLGlot")," \u4e8c\u6b21\u5f00\u53d1\uff0c\u5173\u4e8e SQLGlot \u53ef\u53c2\u9605 ",(0,a.yg)("a",{parentName:"p",href:"https://sqlglot.com/sqlglot.html"},"SQLGlot \u5b98\u7f51"))))),(0,a.yg)("ol",{start:2},(0,a.yg)("li",{parentName:"ol"},(0,a.yg)("p",{parentName:"li"},"\u5728\u4efb\u610f FE \u8282\u70b9\uff0c\u901a\u8fc7\u4ee5\u4e0b\u547d\u4ee4\u542f\u52a8\u670d\u52a1\uff1a"),(0,a.yg)("p",{parentName:"li"},(0,a.yg)("inlineCode",{parentName:"p"},"nohup ./doris-sql-convertor-1.0.1-bin-x86 run --host=0.0.0.0 --port=5001 &")),(0,a.yg)("admonition",{parentName:"li",type:"tip"},(0,a.yg)("p",{parentName:"admonition"},(0,a.yg)("strong",{parentName:"p"},"1. \u8be5\u670d\u52a1\u662f\u4e00\u4e2a\u65e0\u72b6\u6001\u7684\u670d\u52a1\uff0c\u53ef\u968f\u65f6\u542f\u505c\u3002")),(0,a.yg)("ol",{parentName:"admonition",start:2},(0,a.yg)("li",{parentName:"ol"},(0,a.yg)("p",{parentName:"li"},(0,a.yg)("inlineCode",{parentName:"p"},"5001")," \u662f\u670d\u52a1\u7aef\u53e3\uff0c\u53ef\u4ee5\u4efb\u610f\u6307\u5b9a\u4e3a\u4e00\u4e2a\u53ef\u7528\u7aef\u53e3\u3002")),(0,a.yg)("li",{parentName:"ol"},(0,a.yg)("p",{parentName:"li"},"\u5efa\u8bae\u5728\u6bcf\u4e2a FE \u8282\u70b9\u90fd\u5355\u72ec\u542f\u52a8\u4e00\u4e2a\u670d\u52a1\u3002"))))),(0,a.yg)("li",{parentName:"ol"},(0,a.yg)("p",{parentName:"li"},"\u542f\u52a8 Doris \u96c6\u7fa4\uff082.1 \u6216\u66f4\u9ad8\u7248\u672c\uff09")),(0,a.yg)("li",{parentName:"ol"},(0,a.yg)("p",{parentName:"li"},"\u901a\u8fc7\u4ee5\u4e0b\u547d\u4ee4\uff0c\u5728 Doris \u4e2d\u8bbe\u7f6e SQL \u65b9\u8a00\u8f6c\u6362\u670d\u52a1\u7684 URL\uff1a"),(0,a.yg)("p",{parentName:"li"},(0,a.yg)("inlineCode",{parentName:"p"},'MySQL> set global sql_converter_service_url = "http://127.0.0.1:5001/api/v1/convert"')),(0,a.yg)("admonition",{parentName:"li",type:"tip"},(0,a.yg)("p",{parentName:"admonition"},(0,a.yg)("inlineCode",{parentName:"p"},"127.0.0.1:5001")," \u662f SQL \u65b9\u8a00\u8f6c\u6362\u670d\u52a1\u7684\u90e8\u7f72\u8282\u70b9 ip \u548c\u7aef\u53e3\u3002")))),(0,a.yg)("h2",{id:"\u4f7f\u7528-sql-\u65b9\u8a00"},"\u4f7f\u7528 SQL \u65b9\u8a00"),(0,a.yg)("p",null,"\u76ee\u524d\u652f\u6301\u7684\u65b9\u8a00\u7c7b\u578b\u5305\u62ec\uff1a"),(0,a.yg)("ul",null,(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("p",{parentName:"li"},(0,a.yg)("inlineCode",{parentName:"p"},"presto"))),(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("p",{parentName:"li"},(0,a.yg)("inlineCode",{parentName:"p"},"trino"))),(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("p",{parentName:"li"},(0,a.yg)("inlineCode",{parentName:"p"},"hive"))),(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("p",{parentName:"li"},(0,a.yg)("inlineCode",{parentName:"p"},"spark"))),(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("p",{parentName:"li"},(0,a.yg)("inlineCode",{parentName:"p"},"postgres"))),(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("p",{parentName:"li"},(0,a.yg)("inlineCode",{parentName:"p"},"clickhouse")))),(0,a.yg)("p",null,"\u793a\u4f8b\uff1a"),(0,a.yg)("h3",{id:"presto"},"Presto"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-sql"},"mysql> CREATE TABLE  test_sqlconvert (\n         id int,\n         start_time DateTime,\n         value String,\n         arr_int ARRAY<Int>,\n         arr_str ARRAY<String>\n     ) ENGINE=OLAP\n     DUPLICATE KEY(`id`)\n     COMMENT 'OLAP'\n     DISTRIBUTED BY HASH(`id`) BUCKETS 1\n     PROPERTIES (\n     \"replication_allocation\" = \"tag.location.default: 1\"\n     );\nQuery OK, 0 rows affected (0.01 sec)\n\nmysql> INSERT INTO test_sqlconvert values(1, '2024-05-20 13:14:52', '2024-01-14',[1, 2, 3, 3], ['Hello', 'World']);\nQuery OK, 1 row affected (0.08 sec)\n\nmysql> set sql_dialect=presto;\nQuery OK, 0 rows affected (0.00 sec)\n\nmysql> SELECT cast(start_time as varchar(20)) as col1,\n            array_distinct(arr_int) as col2,\n            FILTER(arr_str, x -> x LIKE '%World%') as col3,\n            to_date(value,'%Y-%m-%d') as col4,\n            YEAR(start_time) as col5,\n            date_add('month', 1, start_time) as col6,\n            REGEXP_EXTRACT_ALL(value, '-.') as col7,\n            JSON_EXTRACT('{\"id\": \"33\"}', '$.id')as col8,\n            element_at(arr_int, 1) as col9,\n            date_trunc('day',start_time) as col10\n         FROM test_sqlconvert\n         where date_trunc('day',start_time)= DATE'2024-05-20'     \n     order by id;\n+---------------------+-----------+-----------+------------+------+---------------------+-------------+------+------+---------------------+\n| col1                | col2      | col3      | col4       | col5 | col6                | col7        | col8 | col9 | col10               |\n+---------------------+-----------+-----------+------------+------+---------------------+-------------+------+------+---------------------+\n| 2024-05-20 13:14:52 | [1, 2, 3] | [\"World\"] | 2024-01-14 | 2024 | 2024-06-20 13:14:52 | ['-0','-1'] | \"33\" |    1 | 2024-05-20 00:00:00 |\n+---------------------+-----------+-----------+------------+------+---------------------+-------------+------+------+---------------------+\n1 row in set (0.03 sec)\n\n")),(0,a.yg)("h3",{id:"clickhouse"},"Clickhouse"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-sql"},"mysql> set sql_dialect=clickhouse;\nQuery OK, 0 rows affected (0.00 sec)\n\nmysql> select  toString(start_time) as col1,\n             arrayCompact(arr_int) as col2,\n             arrayFilter(x -> x like '%World%',arr_str)as col3,\n             toDate(value) as col4,\n             toYear(start_time)as col5,\n             addMonths(start_time, 1)as col6,\n             extractAll(value, '-.')as col7,\n             JSONExtractString('{\"id\": \"33\"}' , 'id')as col8,\n             arrayElement(arr_int, 1) as col9,\n             date_trunc('day',start_time) as col10\n          FROM test_sqlconvert\n          where date_trunc('day',start_time)= '2024-05-20 00:00:00'     \n     order by id;\n+---------------------+-----------+-----------+------------+------+---------------------+-------------+------+------+---------------------+\n| col1                | col2      | col3      | col4       | col5 | col6                | col7        | col8 | col9 | col10               |\n+---------------------+-----------+-----------+------------+------+---------------------+-------------+------+------+---------------------+\n| 2024-05-20 13:14:52 | [1, 2, 3] | [\"World\"] | 2024-01-14 | 2024 | 2024-06-20 13:14:52 | ['-0','-1'] | \"33\" |    1 | 2024-05-20 00:00:00 |\n+---------------------+-----------+-----------+------------+------+---------------------+-------------+------+------+---------------------+\n1 row in set (0.02 sec)\n")))}y.isMDXComponent=!0}}]);