"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([[32487],{15680:(e,n,a)=>{a.d(n,{xA:()=>A,yg:()=>E});var t=a(96540);function r(e,n,a){return n in e?Object.defineProperty(e,n,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[n]=a,e}function i(e,n){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),a.push.apply(a,t)}return a}function l(e){for(var n=1;n<arguments.length;n++){var a=null!=arguments[n]?arguments[n]:{};n%2?i(Object(a),!0).forEach((function(n){r(e,n,a[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(a,n))}))}return e}function T(e,n){if(null==e)return{};var a,t,r=function(e,n){if(null==e)return{};var a,t,r={},i=Object.keys(e);for(t=0;t<i.length;t++)a=i[t],n.indexOf(a)>=0||(r[a]=e[a]);return r}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(t=0;t<i.length;t++)a=i[t],n.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var o=t.createContext({}),p=function(e){var n=t.useContext(o),a=n;return e&&(a="function"==typeof e?e(n):l(l({},n),e)),a},A=function(e){var n=p(e.components);return t.createElement(o.Provider,{value:n},e.children)},N="mdxType",y={inlineCode:"code",wrapper:function(e){var n=e.children;return t.createElement(t.Fragment,{},n)}},c=t.forwardRef((function(e,n){var a=e.components,r=e.mdxType,i=e.originalType,o=e.parentName,A=T(e,["components","mdxType","originalType","parentName"]),N=p(a),c=r,E=N["".concat(o,".").concat(c)]||N[c]||y[c]||i;return a?t.createElement(E,l(l({ref:n},A),{},{components:a})):t.createElement(E,l({ref:n},A))}));function E(e,n){var a=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var i=a.length,l=new Array(i);l[0]=c;var T={};for(var o in n)hasOwnProperty.call(n,o)&&(T[o]=n[o]);T.originalType=e,T[N]="string"==typeof e?e:r,l[1]=T;for(var p=2;p<i;p++)l[p]=a[p];return t.createElement.apply(null,l)}return t.createElement.apply(null,a)}c.displayName="MDXCreateElement"},63903:(e,n,a)=>{a.r(n),a.d(n,{assets:()=>o,contentTitle:()=>l,default:()=>y,frontMatter:()=>i,metadata:()=>T,toc:()=>p});var t=a(58168),r=(a(96540),a(15680));const i={title:"\u81ea\u52a8\u5206\u533a",language:"zh-CN"},l=void 0,T={unversionedId:"advanced/partition/auto-partition",id:"advanced/partition/auto-partition",title:"\u81ea\u52a8\u5206\u533a",description:"\x3c!--",source:"@site/i18n/zh-CN/docusaurus-plugin-content-docs/current/advanced/partition/auto-partition.md",sourceDirName:"advanced/partition",slug:"/advanced/partition/auto-partition",permalink:"/zh-CN/docs/dev/advanced/partition/auto-partition",draft:!1,tags:[],version:"current",frontMatter:{title:"\u81ea\u52a8\u5206\u533a",language:"zh-CN"},sidebar:"docs",previous:{title:"\u4e34\u65f6\u5206\u533a",permalink:"/zh-CN/docs/dev/advanced/partition/table-temp-partition"},next:{title:"Partition Cache",permalink:"/zh-CN/docs/dev/advanced/cache/partition-cache-manual"}},o={},p=[{value:"\u4f7f\u7528\u573a\u666f",id:"\u4f7f\u7528\u573a\u666f",level:2},{value:"\u8bed\u6cd5",id:"\u8bed\u6cd5",level:2},{value:"\u7528\u6cd5\u793a\u4f8b",id:"\u7528\u6cd5\u793a\u4f8b",level:3},{value:"\u7ea6\u675f",id:"\u7ea6\u675f",level:3},{value:"\u573a\u666f\u793a\u4f8b",id:"\u573a\u666f\u793a\u4f8b",level:2},{value:"\u4e0e\u52a8\u6001\u5206\u533a\u8054\u7528",id:"\u4e0e\u52a8\u6001\u5206\u533a\u8054\u7528",level:2},{value:"\u9650\u5236",id:"\u9650\u5236",level:3},{value:"\u6ce8\u610f\u4e8b\u9879",id:"\u6ce8\u610f\u4e8b\u9879",level:2}],A={toc:p},N="wrapper";function y(e){let{components:n,...a}=e;return(0,r.yg)(N,(0,t.A)({},A,a,{components:n,mdxType:"MDXLayout"}),(0,r.yg)("h1",{id:"\u81ea\u52a8\u5206\u533a"},"\u81ea\u52a8\u5206\u533a"),(0,r.yg)("version",{since:"2.1"}),(0,r.yg)("p",null,"\u81ea\u52a8\u5206\u533a\u529f\u80fd\u652f\u6301\u4e86\u5728\u5bfc\u5165\u6570\u636e\u8fc7\u7a0b\u4e2d\u81ea\u52a8\u68c0\u6d4b\u662f\u5426\u5b58\u5728\u5bf9\u5e94\u6240\u5c5e\u5206\u533a\u3002\u5982\u679c\u4e0d\u5b58\u5728\uff0c\u5219\u4f1a\u81ea\u52a8\u521b\u5efa\u5206\u533a\u5e76\u6b63\u5e38\u8fdb\u884c\u5bfc\u5165\u3002"),(0,r.yg)("h2",{id:"\u4f7f\u7528\u573a\u666f"},"\u4f7f\u7528\u573a\u666f"),(0,r.yg)("p",null,"\u81ea\u52a8\u5206\u533a\u529f\u80fd\u4e3b\u8981\u89e3\u51b3\u4e86\u7528\u6237\u9884\u671f\u57fa\u4e8e\u67d0\u5217\u5bf9\u8868\u8fdb\u884c\u5206\u533a\u64cd\u4f5c\uff0c\u4f46\u8be5\u5217\u7684\u6570\u636e\u5206\u5e03\u6bd4\u8f83\u96f6\u6563\u6216\u8005\u96be\u4ee5\u9884\u6d4b\uff0c\u5728\u5efa\u8868\u6216\u8c03\u6574\u8868\u7ed3\u6784\u65f6\u96be\u4ee5\u51c6\u786e\u521b\u5efa\u6240\u9700\u5206\u533a\uff0c\u6216\u8005\u5206\u533a\u6570\u91cf\u8fc7\u591a\u4ee5\u81f3\u4e8e\u624b\u52a8\u521b\u5efa\u8fc7\u4e8e\u7e41\u7410\u7684\u95ee\u9898\u3002"),(0,r.yg)("p",null,"\u4ee5\u65f6\u95f4\u7c7b\u578b\u5206\u533a\u5217\u4e3a\u4f8b\uff0c\u5728",(0,r.yg)("a",{parentName:"p",href:"./dynamic-partition"},"\u52a8\u6001\u5206\u533a"),"\u529f\u80fd\u4e2d\uff0c\u6211\u4eec\u652f\u6301\u4e86\u6309\u7279\u5b9a\u65f6\u95f4\u5468\u671f\u81ea\u52a8\u521b\u5efa\u65b0\u5206\u533a\u4ee5\u5bb9\u7eb3\u5b9e\u65f6\u6570\u636e\u3002\u5bf9\u4e8e\u5b9e\u65f6\u7684\u7528\u6237\u884c\u4e3a\u65e5\u5fd7\u7b49\u573a\u666f\u8be5\u529f\u80fd\u57fa\u672c\u80fd\u591f\u6ee1\u8db3\u9700\u6c42\u3002\u4f46\u5728\u4e00\u4e9b\u66f4\u590d\u6742\u7684\u573a\u666f\u4e0b\uff0c\u4f8b\u5982\u5904\u7406\u975e\u5b9e\u65f6\u6570\u636e\u65f6\uff0c\u5206\u533a\u5217\u4e0e\u5f53\u524d\u7cfb\u7edf\u65f6\u95f4\u65e0\u5173\uff0c\u4e14\u5305\u542b\u5927\u91cf\u79bb\u6563\u503c\u3002\u6b64\u65f6\u4e3a\u63d0\u9ad8\u6548\u7387\u6211\u4eec\u5e0c\u671b\u4f9d\u636e\u6b64\u5217\u5bf9\u6570\u636e\u8fdb\u884c\u5206\u533a\uff0c\u4f46\u6570\u636e\u5b9e\u9645\u53ef\u80fd\u6d89\u53ca\u7684\u5206\u533a\u65e0\u6cd5\u9884\u5148\u638c\u63e1\uff0c\u6216\u8005\u9884\u671f\u6240\u9700\u5206\u533a\u6570\u91cf\u8fc7\u5927\u3002\u8fd9\u79cd\u60c5\u51b5\u4e0b\u52a8\u6001\u5206\u533a\u6216\u8005\u624b\u52a8\u521b\u5efa\u5206\u533a\u65e0\u6cd5\u6ee1\u8db3\u6211\u4eec\u7684\u9700\u6c42\uff0c\u81ea\u52a8\u5206\u533a\u529f\u80fd\u5f88\u597d\u5730\u8986\u76d6\u4e86\u6b64\u7c7b\u9700\u6c42\u3002"),(0,r.yg)("p",null,"\u5047\u8bbe\u6211\u4eec\u7684\u8868DDL\u5982\u4e0b\uff1a"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-sql"},"CREATE TABLE `DAILY_TRADE_VALUE`\n(\n    `TRADE_DATE`              datev2 NOT NULL COMMENT '\u4ea4\u6613\u65e5\u671f',\n    `TRADE_ID`                varchar(40) NOT NULL COMMENT '\u4ea4\u6613\u7f16\u53f7',\n    ......\n)\nUNIQUE KEY(`TRADE_DATE`, `TRADE_ID`)\nPARTITION BY RANGE(`TRADE_DATE`)\n(\n    PARTITION p_2000 VALUES [('2000-01-01'), ('2001-01-01')),\n    PARTITION p_2001 VALUES [('2001-01-01'), ('2002-01-01')),\n    PARTITION p_2002 VALUES [('2002-01-01'), ('2003-01-01')),\n    PARTITION p_2003 VALUES [('2003-01-01'), ('2004-01-01')),\n    PARTITION p_2004 VALUES [('2004-01-01'), ('2005-01-01')),\n    PARTITION p_2005 VALUES [('2005-01-01'), ('2006-01-01')),\n    PARTITION p_2006 VALUES [('2006-01-01'), ('2007-01-01')),\n    PARTITION p_2007 VALUES [('2007-01-01'), ('2008-01-01')),\n    PARTITION p_2008 VALUES [('2008-01-01'), ('2009-01-01')),\n    PARTITION p_2009 VALUES [('2009-01-01'), ('2010-01-01')),\n    PARTITION p_2010 VALUES [('2010-01-01'), ('2011-01-01')),\n    PARTITION p_2011 VALUES [('2011-01-01'), ('2012-01-01')),\n    PARTITION p_2012 VALUES [('2012-01-01'), ('2013-01-01')),\n    PARTITION p_2013 VALUES [('2013-01-01'), ('2014-01-01')),\n    PARTITION p_2014 VALUES [('2014-01-01'), ('2015-01-01')),\n    PARTITION p_2015 VALUES [('2015-01-01'), ('2016-01-01')),\n    PARTITION p_2016 VALUES [('2016-01-01'), ('2017-01-01')),\n    PARTITION p_2017 VALUES [('2017-01-01'), ('2018-01-01')),\n    PARTITION p_2018 VALUES [('2018-01-01'), ('2019-01-01')),\n    PARTITION p_2019 VALUES [('2019-01-01'), ('2020-01-01')),\n    PARTITION p_2020 VALUES [('2020-01-01'), ('2021-01-01')),\n    PARTITION p_2021 VALUES [('2021-01-01'), ('2022-01-01'))\n)\nDISTRIBUTED BY HASH(`TRADE_DATE`) BUCKETS 10\nPROPERTIES (\n  \"replication_num\" = \"1\"\n);\n")),(0,r.yg)("p",null,"\u8be5\u8868\u5185\u5b58\u50a8\u4e86\u5927\u91cf\u4e1a\u52a1\u5386\u53f2\u6570\u636e\uff0c\u4f9d\u636e\u4ea4\u6613\u53d1\u751f\u7684\u65e5\u671f\u8fdb\u884c\u5206\u533a\u3002\u53ef\u4ee5\u770b\u5230\u5728\u5efa\u8868\u65f6\uff0c\u6211\u4eec\u9700\u8981\u9884\u5148\u624b\u52a8\u521b\u5efa\u5206\u533a\u3002\u5982\u679c\u5206\u533a\u5217\u7684\u6570\u636e\u8303\u56f4\u53d1\u751f\u53d8\u5316\uff0c\u4f8b\u5982\u4e0a\u8868\u4e2d\u589e\u52a0\u4e862022\u5e74\u7684\u6570\u636e\uff0c\u5219\u6211\u4eec\u9700\u8981\u901a\u8fc7",(0,r.yg)("a",{parentName:"p",href:"../../sql-manual/sql-reference/Data-Definition-Statements/Alter/ALTER-TABLE-PARTITION"},"ALTER-TABLE-PARTITION"),"\u5bf9\u8868\u7684\u5206\u533a\u8fdb\u884c\u66f4\u6539\u3002\u5982\u679c\u8fd9\u79cd\u5206\u533a\u9700\u8981\u53d8\u66f4\uff0c\u6216\u8005\u8fdb\u884c\u66f4\u7ec6\u7c92\u5ea6\u7684\u7ec6\u5206\uff0c\u4fee\u6539\u8d77\u6765\u975e\u5e38\u7e41\u7410\u3002\u6b64\u65f6\u6211\u4eec\u5c31\u53ef\u4ee5\u4f7f\u7528AUTO PARTITION\u6539\u5199\u8be5\u8868DDL\u3002"),(0,r.yg)("h2",{id:"\u8bed\u6cd5"},"\u8bed\u6cd5"),(0,r.yg)("p",null,"\u5efa\u8868\u65f6\uff0c\u4f7f\u7528\u4ee5\u4e0b\u8bed\u6cd5\u586b\u5145",(0,r.yg)("a",{parentName:"p",href:"../../sql-manual/sql-reference/Data-Definition-Statements/Create/CREATE-TABLE"},"CREATE-TABLE"),"\u65f6\u7684",(0,r.yg)("inlineCode",{parentName:"p"},"partition_info"),"\u90e8\u5206\uff1a"),(0,r.yg)("ol",null,(0,r.yg)("li",{parentName:"ol"},(0,r.yg)("p",{parentName:"li"},"AUTO RANGE PARTITION:"),(0,r.yg)("pre",{parentName:"li"},(0,r.yg)("code",{parentName:"pre",className:"language-sql"},"AUTO PARTITION BY RANGE FUNC_CALL_EXPR\n(\n)\n")),(0,r.yg)("p",{parentName:"li"},"\u5176\u4e2d"),(0,r.yg)("pre",{parentName:"li"},(0,r.yg)("code",{parentName:"pre",className:"language-sql"},"FUNC_CALL_EXPR ::= date_trunc ( <partition_column>, '<interval>' )\n"))),(0,r.yg)("li",{parentName:"ol"},(0,r.yg)("p",{parentName:"li"},"AUTO LIST PARTITION:"),(0,r.yg)("pre",{parentName:"li"},(0,r.yg)("code",{parentName:"pre",className:"language-sql"},"AUTO PARTITION BY LIST(`partition_col`)\n(\n)\n")))),(0,r.yg)("h3",{id:"\u7528\u6cd5\u793a\u4f8b"},"\u7528\u6cd5\u793a\u4f8b"),(0,r.yg)("ol",null,(0,r.yg)("li",{parentName:"ol"},(0,r.yg)("p",{parentName:"li"},"AUTO RANGE PARTITION"),(0,r.yg)("pre",{parentName:"li"},(0,r.yg)("code",{parentName:"pre",className:"language-sql"},"CREATE TABLE `date_table` (\n    `TIME_STAMP` datev2 NOT NULL COMMENT '\u91c7\u96c6\u65e5\u671f'\n) ENGINE=OLAP\nDUPLICATE KEY(`TIME_STAMP`)\nAUTO PARTITION BY RANGE date_trunc(`TIME_STAMP`, 'month')\n(\n)\nDISTRIBUTED BY HASH(`TIME_STAMP`) BUCKETS 10\nPROPERTIES (\n\"replication_allocation\" = \"tag.location.default: 1\"\n);\n"))),(0,r.yg)("li",{parentName:"ol"},(0,r.yg)("p",{parentName:"li"},"AUTO LIST PARTITION"),(0,r.yg)("pre",{parentName:"li"},(0,r.yg)("code",{parentName:"pre",className:"language-sql"},'CREATE TABLE `str_table` (\n    `str` varchar not null\n) ENGINE=OLAP\nDUPLICATE KEY(`str`)\nAUTO PARTITION BY LIST (`str`)\n(\n)\nDISTRIBUTED BY HASH(`str`) BUCKETS 10\nPROPERTIES (\n"replication_allocation" = "tag.location.default: 1"\n);\n')))),(0,r.yg)("h3",{id:"\u7ea6\u675f"},"\u7ea6\u675f"),(0,r.yg)("ol",null,(0,r.yg)("li",{parentName:"ol"},"\u81ea\u52a8\u5206\u533a\u7684\u5206\u533a\u5217\u5fc5\u987b\u4e3a NOT NULL \u5217\u3002"),(0,r.yg)("li",{parentName:"ol"},"\u5728AUTO LIST PARTITION\u4e2d\uff0c",(0,r.yg)("strong",{parentName:"li"},"\u5206\u533a\u540d\u957f\u5ea6\u4e0d\u5f97\u8d85\u8fc7 50"),". \u8be5\u957f\u5ea6\u6765\u81ea\u4e8e\u5bf9\u5e94\u6570\u636e\u884c\u4e0a\u5404\u5206\u533a\u5217\u5185\u5bb9\u7684\u62fc\u63a5\u4e0e\u8f6c\u4e49\uff0c\u56e0\u6b64\u5b9e\u9645\u5bb9\u8bb8\u957f\u5ea6\u53ef\u80fd\u66f4\u77ed\u3002"),(0,r.yg)("li",{parentName:"ol"},"\u5728AUTO RANGE PARTITION\u4e2d\uff0c\u5206\u533a\u51fd\u6570\u4ec5\u652f\u6301 ",(0,r.yg)("inlineCode",{parentName:"li"},"date_trunc"),"\uff0c\u5206\u533a\u5217\u4ec5\u652f\u6301 ",(0,r.yg)("inlineCode",{parentName:"li"},"DATE")," \u6216\u8005 ",(0,r.yg)("inlineCode",{parentName:"li"},"DATETIME")," \u683c\u5f0f\uff1b"),(0,r.yg)("li",{parentName:"ol"},"\u5728AUTO LIST PARTITION\u4e2d\uff0c\u4e0d\u652f\u6301\u51fd\u6570\u8c03\u7528\uff0c\u5206\u533a\u5217\u652f\u6301 ",(0,r.yg)("inlineCode",{parentName:"li"},"BOOLEAN"),", ",(0,r.yg)("inlineCode",{parentName:"li"},"TINYINT"),", ",(0,r.yg)("inlineCode",{parentName:"li"},"SMALLINT"),", ",(0,r.yg)("inlineCode",{parentName:"li"},"INT"),", ",(0,r.yg)("inlineCode",{parentName:"li"},"BIGINT"),", ",(0,r.yg)("inlineCode",{parentName:"li"},"LARGEINT"),", ",(0,r.yg)("inlineCode",{parentName:"li"},"DATE"),", ",(0,r.yg)("inlineCode",{parentName:"li"},"DATETIME"),", ",(0,r.yg)("inlineCode",{parentName:"li"},"CHAR"),", ",(0,r.yg)("inlineCode",{parentName:"li"},"VARCHAR")," \u6570\u636e\u7c7b\u578b\uff0c\u5206\u533a\u503c\u4e3a\u679a\u4e3e\u503c\u3002"),(0,r.yg)("li",{parentName:"ol"},"\u5728AUTO LIST PARTITION\u4e2d\uff0c\u5206\u533a\u5217\u7684\u6bcf\u4e2a\u5f53\u524d\u4e0d\u5b58\u5728\u5bf9\u5e94\u5206\u533a\u7684\u53d6\u503c\uff0c\u90fd\u4f1a\u521b\u5efa\u4e00\u4e2a\u72ec\u7acb\u7684\u65b0PARTITION\u3002")),(0,r.yg)("h2",{id:"\u573a\u666f\u793a\u4f8b"},"\u573a\u666f\u793a\u4f8b"),(0,r.yg)("p",null,"\u5728\u4f7f\u7528\u573a\u666f\u4e00\u8282\u4e2d\u7684\u793a\u4f8b\uff0c\u5728\u4f7f\u7528AUTO PARTITION\u540e\uff0c\u8be5\u8868DDL\u53ef\u4ee5\u6539\u5199\u4e3a\uff1a"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-sql"},"CREATE TABLE `DAILY_TRADE_VALUE`\n(\n    `TRADE_DATE`              datev2 NOT NULL COMMENT '\u4ea4\u6613\u65e5\u671f',\n    `TRADE_ID`                varchar(40) NOT NULL COMMENT '\u4ea4\u6613\u7f16\u53f7',\n    ......\n)\nUNIQUE KEY(`TRADE_DATE`, `TRADE_ID`)\nAUTO PARTITION BY RANGE date_trunc(`TRADE_DATE`, 'year')\n(\n)\nDISTRIBUTED BY HASH(`TRADE_DATE`) BUCKETS 10\nPROPERTIES (\n  \"replication_num\" = \"1\"\n);\n")),(0,r.yg)("p",null,"\u6b64\u65f6\u65b0\u8868\u6ca1\u6709\u9ed8\u8ba4\u5206\u533a\uff1a"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-sql"},"mysql> show partitions from `DAILY_TRADE_VALUE`;\nEmpty set (0.12 sec)\n")),(0,r.yg)("p",null,"\u7ecf\u8fc7\u63d2\u5165\u6570\u636e\u540e\u518d\u67e5\u770b\uff0c\u53d1\u73b0\u8be5\u8868\u5df2\u7ecf\u521b\u5efa\u4e86\u5bf9\u5e94\u7684\u5206\u533a\uff1a"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-sql"},"mysql> insert into `DAILY_TRADE_VALUE` values ('2012-12-13', 1), ('2008-02-03', 2), ('2014-11-11', 3);\nQuery OK, 3 rows affected (0.88 sec)\n\nmysql> show partitions from `DAILY_TRADE_VALUE`;\n+-------------+-----------------+----------------+---------------------+--------+--------------+--------------------------------------------------------------------------------+-----------------+---------+----------------+---------------+---------------------+---------------------+--------------------------+----------+------------+-------------------------+-----------+\n| PartitionId | PartitionName   | VisibleVersion | VisibleVersionTime  | State  | PartitionKey | Range                                                                          | DistributionKey | Buckets | ReplicationNum | StorageMedium | CooldownTime        | RemoteStoragePolicy | LastConsistencyCheckTime | DataSize | IsInMemory | ReplicaAllocation       | IsMutable |\n+-------------+-----------------+----------------+---------------------+--------+--------------+--------------------------------------------------------------------------------+-----------------+---------+----------------+---------------+---------------------+---------------------+--------------------------+----------+------------+-------------------------+-----------+\n| 180060      | p20080101000000 | 2              | 2023-09-18 21:49:29 | NORMAL | TRADE_DATE   | [types: [DATEV2]; keys: [2008-01-01]; ..types: [DATEV2]; keys: [2009-01-01]; ) | TRADE_DATE      | 10      | 1              | HDD           | 9999-12-31 23:59:59 |                     | NULL                     | 0.000    | false      | tag.location.default: 1 | true      |\n| 180039      | p20120101000000 | 2              | 2023-09-18 21:49:29 | NORMAL | TRADE_DATE   | [types: [DATEV2]; keys: [2012-01-01]; ..types: [DATEV2]; keys: [2013-01-01]; ) | TRADE_DATE      | 10      | 1              | HDD           | 9999-12-31 23:59:59 |                     | NULL                     | 0.000    | false      | tag.location.default: 1 | true      |\n| 180018      | p20140101000000 | 2              | 2023-09-18 21:49:29 | NORMAL | TRADE_DATE   | [types: [DATEV2]; keys: [2014-01-01]; ..types: [DATEV2]; keys: [2015-01-01]; ) | TRADE_DATE      | 10      | 1              | HDD           | 9999-12-31 23:59:59 |                     | NULL                     | 0.000    | false      | tag.location.default: 1 | true      |\n+-------------+-----------------+----------------+---------------------+--------+--------------+--------------------------------------------------------------------------------+-----------------+---------+----------------+---------------+---------------------+---------------------+--------------------------+----------+------------+-------------------------+-----------+\n3 rows in set (0.12 sec)\n")),(0,r.yg)("p",null,"\u7ecf\u8fc7\u81ea\u52a8\u5206\u533a\u529f\u80fd\u6240\u521b\u5efa\u7684PARTITION\uff0c\u4e0e\u624b\u52a8\u521b\u5efa\u7684PARTITION\u5177\u6709\u5b8c\u5168\u4e00\u81f4\u7684\u529f\u80fd\u6027\u8d28\u3002"),(0,r.yg)("h2",{id:"\u4e0e\u52a8\u6001\u5206\u533a\u8054\u7528"},"\u4e0e\u52a8\u6001\u5206\u533a\u8054\u7528"),(0,r.yg)("p",null,"\u81ea\u52a8\u5206\u533a\u652f\u6301\u4e0e",(0,r.yg)("a",{parentName:"p",href:"./dynamic-partition"},"\u52a8\u6001\u5206\u533a"),"\u540c\u65f6\u4f5c\u7528\u4e8e\u540c\u4e00\u5f20\u8868\u4e0a\uff0c\u4f8b\u5982\uff1a"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-sql"},'CREATE TABLE tbl3\n(\n    k1 DATETIME NOT NULL,\n    col1 int \n)\nAUTO PARTITION BY RANGE date_trunc(`k1`, \'year\') ()\nDISTRIBUTED BY HASH(k1)\nPROPERTIES\n(\n    "replication_num" = "1",\n    "dynamic_partition.create_history_partition"="true",\n    "dynamic_partition.enable" = "true",\n    "dynamic_partition.time_unit" = "year",\n    "dynamic_partition.start" = "-2",\n    "dynamic_partition.end" = "2",\n    "dynamic_partition.prefix" = "p",\n    "dynamic_partition.buckets" = "8"\n); \n')),(0,r.yg)("p",null,"\u5f53\u4e24\u79cd\u529f\u80fd\u8054\u7528\u65f6\uff0c\u5b83\u4eec\u7684\u539f\u59cb\u529f\u80fd\u5747\u4e0d\u53d7\u5f71\u54cd\uff0c\u4f9d\u65e7\u4f5c\u7528\u4e8e\u6574\u5f20\u8868\u4e0a\uff0c\u884c\u4e3a\u5305\u62ec\u4f46\u4e0d\u9650\u4e8e\uff1a"),(0,r.yg)("ol",null,(0,r.yg)("li",{parentName:"ol"},"\u65e0\u8bba\u521b\u5efa\u65b9\u5f0f\u5982\u4f55\uff0c\u8fc7\u671f\u7684\u5386\u53f2\u5206\u533a\u90fd\u4f1a\u6309\u52a8\u6001\u5206\u533a\u529f\u80fd\u6307\u5b9a\u7684\u89c4\u5219\u5b9a\u671f\u6e05\u7406\u6216\u8f6c\u5165\u51b7\u5b58\u50a8"),(0,r.yg)("li",{parentName:"ol"},"\u5206\u533a\u8303\u56f4\u4e0d\u80fd\u91cd\u53e0\u3001\u51b2\u7a81\u3002\u5982\u679c\u52a8\u6001\u5206\u533a\u9700\u8981\u521b\u5efa\u7684\u65b0\u5206\u533a\u8303\u56f4\u5df2\u7ecf\u88ab\u81ea\u52a8\u6216\u624b\u52a8\u521b\u5efa\u7684\u5206\u533a\u8986\u76d6\uff0c\u5219\u8be5\u5206\u533a\u521b\u5efa\u4f1a\u5931\u8d25\uff0c\u4f46\u4e0d\u5f71\u54cd\u4e1a\u52a1\u8fc7\u7a0b\u3002")),(0,r.yg)("p",null,"\u5176\u539f\u5219\u5728\u4e8e\uff0c\u81ea\u52a8\u5206\u533a\u4ec5\u662f\u5bf9\u521b\u5efa\u5206\u533a\u5f15\u5165\u7684\u4e00\u79cd\u8865\u5145\u624b\u6bb5\uff0c\u4e00\u4e2a\u5206\u533a\u65e0\u8bba\u662f\u624b\u52a8\u3001\u7ecf\u81ea\u52a8\u5206\u533a\u521b\u5efa\uff0c\u8fd8\u662f\u7ecf\u52a8\u6001\u5206\u533a\u521b\u5efa\u7684\uff0c\u5747\u4f1a\u53d7\u5230\u52a8\u6001\u5206\u533a\u7684\u7ba1\u7406\u3002"),(0,r.yg)("h3",{id:"\u9650\u5236"},"\u9650\u5236"),(0,r.yg)("p",null,"\u4e3a\u7b80\u5316\u4e24\u79cd\u5206\u533a\u65b9\u5f0f\u8054\u7528\u7684\u884c\u4e3a\u6a21\u5f0f\uff0c\u5f53\u524d\u81ea\u52a8\u5206\u533a\u548c\u52a8\u6001\u5206\u533a\u8054\u7528\u65f6\uff0c\u4e24\u8005\u7684",(0,r.yg)("strong",{parentName:"p"},"\u5206\u533a\u95f4\u9694\u5fc5\u987b\u4e00\u81f4"),"\uff0c\u5426\u5219\u5efa\u8868\u5c06\u4f1a\u5931\u8d25\uff1a"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-sql"},'mysql > CREATE TABLE tbl3\n        (\n            k1 DATETIME NOT NULL,\n            col1 int \n        )\n        AUTO PARTITION BY RANGE date_trunc(`k1`, \'year\') ()\n        DISTRIBUTED BY HASH(k1)\n        PROPERTIES\n        (\n            "replication_num" = "1",\n            "dynamic_partition.create_history_partition"="true",\n            "dynamic_partition.enable" = "true",\n            "dynamic_partition.time_unit" = "HOUR",\n            "dynamic_partition.start" = "-2",\n            "dynamic_partition.end" = "2",\n            "dynamic_partition.prefix" = "p",\n            "dynamic_partition.buckets" = "8"\n        ); \nERROR 1105 (HY000): errCode = 2, detailMessage = errCode = 2, detailMessage = If support auto partition and dynamic partition at same time, they must have the same interval unit.\n')),(0,r.yg)("h2",{id:"\u6ce8\u610f\u4e8b\u9879"},"\u6ce8\u610f\u4e8b\u9879"),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},"\u5982\u540c\u666e\u901a\u5206\u533a\u8868\u4e00\u6837\uff0cAUTO PARTITION\u652f\u6301\u591a\u5217\u5206\u533a\uff0c\u8bed\u6cd5\u5e76\u65e0\u533a\u522b\u3002"),(0,r.yg)("li",{parentName:"ul"},"\u5728\u6570\u636e\u7684\u63d2\u5165\u6216\u5bfc\u5165\u8fc7\u7a0b\u4e2d\u5982\u679c\u521b\u5efa\u4e86\u5206\u533a\uff0c\u800c\u6574\u4e2a\u5bfc\u5165\u8fc7\u7a0b\u6ca1\u6709\u5b8c\u6210\uff08\u5931\u8d25\u6216\u88ab\u53d6\u6d88\uff09\uff0c\u88ab\u521b\u5efa\u7684\u5206\u533a\u4e0d\u4f1a\u88ab\u81ea\u52a8\u5220\u9664\u3002"),(0,r.yg)("li",{parentName:"ul"},"\u4f7f\u7528AUTO PARTITION\u7684\u8868\uff0c\u53ea\u662f\u5206\u533a\u521b\u5efa\u65b9\u5f0f\u4e0a\u7531\u624b\u52a8\u8f6c\u4e3a\u4e86\u81ea\u52a8\u3002\u8868\u53ca\u5176\u6240\u521b\u5efa\u5206\u533a\u7684\u539f\u672c\u4f7f\u7528\u65b9\u6cd5\u90fd\u4e0e\u975eAUTO PARTITION\u7684\u8868\u6216\u5206\u533a\u76f8\u540c\u3002"),(0,r.yg)("li",{parentName:"ul"},"\u4e3a\u9632\u6b62\u610f\u5916\u521b\u5efa\u8fc7\u591a\u5206\u533a\uff0c\u6211\u4eec\u901a\u8fc7",(0,r.yg)("a",{parentName:"li",href:"../../admin-manual/config/fe-config"},"FE\u914d\u7f6e\u9879"),"\u4e2d\u7684",(0,r.yg)("inlineCode",{parentName:"li"},"max_auto_partition_num"),"\u63a7\u5236\u4e86\u4e00\u4e2aAUTO PARTITION\u8868\u6700\u5927\u5bb9\u7eb3\u5206\u533a\u6570\u3002\u5982\u6709\u9700\u8981\u53ef\u4ee5\u8c03\u6574\u8be5\u503c"),(0,r.yg)("li",{parentName:"ul"},"\u5411\u5f00\u542f\u4e86AUTO PARTITION\u7684\u8868\u5bfc\u5165\u6570\u636e\u65f6\uff0cCoordinator\u53d1\u9001\u6570\u636e\u7684\u8f6e\u8be2\u95f4\u9694\u4e0e\u666e\u901a\u8868\u6709\u6240\u4e0d\u540c\u3002\u5177\u4f53\u8bf7\u89c1",(0,r.yg)("a",{parentName:"li",href:"../../admin-manual/config/be-config"},"BE\u914d\u7f6e\u9879"),"\u4e2d\u7684",(0,r.yg)("inlineCode",{parentName:"li"},"olap_table_sink_send_interval_auto_partition_factor"),"\u3002"),(0,r.yg)("li",{parentName:"ul"},"\u5728\u4f7f\u7528",(0,r.yg)("a",{parentName:"li",href:"../../sql-manual/sql-reference/Data-Manipulation-Statements/Manipulation/INSERT-OVERWRITE"},"insert-overwrite"),"\u63d2\u5165\u6570\u636e\u65f6\uff0c\u5982\u679c\u6307\u5b9a\u4e86\u8986\u5199\u7684partition\uff0c\u5219AUTO PARTITION\u8868\u5728\u6b64\u8fc7\u7a0b\u4e2d\u8868\u73b0\u5f97\u5982\u540c\u666e\u901a\u8868\uff0c\u4e0d\u521b\u5efa\u65b0\u7684\u5206\u533a\u3002")))}y.isMDXComponent=!0}}]);