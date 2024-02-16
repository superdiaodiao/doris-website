"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([[55407],{15680:(n,e,r)=>{r.d(e,{xA:()=>u,yg:()=>f});var t=r(96540);function a(n,e,r){return e in n?Object.defineProperty(n,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):n[e]=r,n}function o(n,e){var r=Object.keys(n);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(n);e&&(t=t.filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable}))),r.push.apply(r,t)}return r}function i(n){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?o(Object(r),!0).forEach((function(e){a(n,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(n,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(e){Object.defineProperty(n,e,Object.getOwnPropertyDescriptor(r,e))}))}return n}function s(n,e){if(null==n)return{};var r,t,a=function(n,e){if(null==n)return{};var r,t,a={},o=Object.keys(n);for(t=0;t<o.length;t++)r=o[t],e.indexOf(r)>=0||(a[r]=n[r]);return a}(n,e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(n);for(t=0;t<o.length;t++)r=o[t],e.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(n,r)&&(a[r]=n[r])}return a}var l=t.createContext({}),c=function(n){var e=t.useContext(l),r=e;return n&&(r="function"==typeof n?n(e):i(i({},e),n)),r},u=function(n){var e=c(n.components);return t.createElement(l.Provider,{value:e},n.children)},p="mdxType",d={inlineCode:"code",wrapper:function(n){var e=n.children;return t.createElement(t.Fragment,{},e)}},N=t.forwardRef((function(n,e){var r=n.components,a=n.mdxType,o=n.originalType,l=n.parentName,u=s(n,["components","mdxType","originalType","parentName"]),p=c(r),N=a,f=p["".concat(l,".").concat(N)]||p[N]||d[N]||o;return r?t.createElement(f,i(i({ref:e},u),{},{components:r})):t.createElement(f,i({ref:e},u))}));function f(n,e){var r=arguments,a=e&&e.mdxType;if("string"==typeof n||a){var o=r.length,i=new Array(o);i[0]=N;var s={};for(var l in e)hasOwnProperty.call(e,l)&&(s[l]=e[l]);s.originalType=n,s[p]="string"==typeof n?n:a,i[1]=s;for(var c=2;c<o;c++)i[c]=r[c];return t.createElement.apply(null,i)}return t.createElement.apply(null,r)}N.displayName="MDXCreateElement"},80659:(n,e,r)=>{r.r(e),r.d(e,{assets:()=>l,contentTitle:()=>i,default:()=>d,frontMatter:()=>o,metadata:()=>s,toc:()=>c});var t=r(58168),a=(r(96540),r(15680));const o={title:"WINDOW_FUNCTION_PERCENT_RANK",language:"zh-CN"},i=void 0,s={unversionedId:"sql-manual/sql-functions/window-functions/window-function-percent-rank",id:"sql-manual/sql-functions/window-functions/window-function-percent-rank",title:"WINDOW_FUNCTION_PERCENT_RANK",description:'\x3c!--  Licensed to the Apache Software Foundation (ASF) under one or more contributor license agreements.  See the NOTICE file distributed with this work for additional information regarding copyright ownership.  The ASF licenses this file to you under the Apache License, Version 2.0 (the "License"); you may not use this file except in compliance with the License.  You may obtain a copy of the License at',source:"@site/i18n/zh-CN/docusaurus-plugin-content-docs/current/sql-manual/sql-functions/window-functions/window-function-percent-rank.md",sourceDirName:"sql-manual/sql-functions/window-functions",slug:"/sql-manual/sql-functions/window-functions/window-function-percent-rank",permalink:"/zh-CN/docs/dev/sql-manual/sql-functions/window-functions/window-function-percent-rank",draft:!1,tags:[],version:"current",frontMatter:{title:"WINDOW_FUNCTION_PERCENT_RANK",language:"zh-CN"},sidebar:"docs",previous:{title:"WINDOW_FUNCTION_DENSE_RANK",permalink:"/zh-CN/docs/dev/sql-manual/sql-functions/window-functions/window-function-dense-rank"},next:{title:"WINDOW_FUNCTION_CUME_DIST",permalink:"/zh-CN/docs/dev/sql-manual/sql-functions/window-functions/window-function-cume-dist"}},l={},c=[{value:"WINDOW FUNCTION PERCENT_RANK",id:"window-function-percent_rank",level:2},{value:"description",id:"description",level:3},{value:"example",id:"example",level:3},{value:"keywords",id:"keywords",level:3}],u={toc:c},p="wrapper";function d(n){let{components:e,...r}=n;return(0,a.yg)(p,(0,t.A)({},u,r,{components:e,mdxType:"MDXLayout"}),(0,a.yg)("h2",{id:"window-function-percent_rank"},"WINDOW FUNCTION PERCENT_RANK"),(0,a.yg)("h3",{id:"description"},"description"),(0,a.yg)("p",null,"PERCENT_RANK()\u662f\u4e00\u4e2a\u7a97\u53e3\u51fd\u6570\uff0c\u7528\u4e8e\u8ba1\u7b97\u5206\u533a\u6216\u7ed3\u679c\u96c6\u4e2d\u884c\u7684\u767e\u5206\u4f4d\u6570\u6392\u540d\u3002"),(0,a.yg)("p",null,"\u4e0b\u9762\u5c55\u793a\u4e86PERCENT_RANK()\u51fd\u6570\u7684\u8bed\u6cd5\uff1a"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-sql"},"PERCENT_RANK() OVER (\n  PARTITION BY partition_expression \n  ORDER BY \n    sort_expression [ASC | DESC]\n)\n")),(0,a.yg)("p",null,"PERCENT_RANK()\u51fd\u6570\u8fd4\u56de\u4e00\u4e2a\u8303\u56f4\u4ece0.0\u52301.0\u7684\u5c0f\u6570\u3002"),(0,a.yg)("p",null,"\u5bf9\u4e8e\u6307\u5b9a\u884c\uff0cPERCENT_RANK()\u8ba1\u7b97\u516c\u5f0f\u5982\u4e0b\uff1a"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-sql"},"(rank - 1) / (total_rows - 1)\n")),(0,a.yg)("p",null,"\u5728\u6b64\u516c\u5f0f\u4e2d\uff0crank\u662f\u6307\u5b9a\u884c\u7684\u6392\u540d\uff0ctotal_rows\u662f\u6b63\u5728\u8bc4\u4f30\u7684\u884c\u6570\u3002"),(0,a.yg)("p",null,"\u5bf9\u4e8e\u5206\u533a\u6216\u7ed3\u679c\u96c6\u4e2d\u7684\u7b2c\u4e00\u884c\uff0cPERCENT_RANK()\u51fd\u6570\u59cb\u7ec8\u8fd4\u56de\u96f6\u3002\u5bf9\u4e8e\u91cd\u590d\u7684\u5217\u503c\uff0cPERCENT_RANK()\u51fd\u6570\u5c06\u8fd4\u56de\u76f8\u540c\u7684\u503c\u3002"),(0,a.yg)("p",null,"\u4e0e\u5176\u4ed6\u7a97\u53e3\u51fd\u6570\u7c7b\u4f3c\uff0cPARTITION BY\u5b50\u53e5\u5c06\u884c\u5206\u914d\u5230\u5206\u533a\u4e2d\uff0c\u5e76\u4e14ORDER BY\u5b50\u53e5\u6307\u5b9a\u6bcf\u4e2a\u5206\u533a\u4e2d\u884c\u7684\u6392\u5e8f\u903b\u8f91\u3002PERCENT_RANK()\u51fd\u6570\u662f\u9488\u5bf9\u6bcf\u4e2a\u6709\u5e8f\u5206\u533a\u72ec\u7acb\u8ba1\u7b97\u7684\u3002"),(0,a.yg)("p",null,"PERCENT_RANK()\u662f\u4e00\u4e2a\u987a\u5e8f\u654f\u611f\u7684\u51fd\u6570\uff0c\u56e0\u6b64\uff0c\u60a8\u5e94\u8be5\u59cb\u7ec8\u9700\u8981\u4f7f\u7528ORDER BY\u5b50\u53e5\u3002"),(0,a.yg)("h3",{id:"example"},"example"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-sql"},"// create table\nCREATE TABLE test_percent_rank (\n    productLine VARCHAR,\n    orderYear INT,\n    orderValue DOUBLE,\n    percentile_rank DOUBLE\n) ENGINE=OLAP\nDISTRIBUTED BY HASH(`orderYear`) BUCKETS 4\nPROPERTIES (\n\"replication_allocation\" = \"tag.location.default: 1\"\n);\n\n// insert data into table\nINSERT INTO test_percent_rank (productLine, orderYear, orderValue, percentile_rank) VALUES\n('Motorcycles', 2003, 2440.50, 0.00),\n('Trains', 2003, 2770.95, 0.17),\n('Trucks and Buses', 2003, 3284.28, 0.33),\n('Vintage Cars', 2003, 4080.00, 0.50),\n('Planes', 2003, 4825.44, 0.67),\n('Ships', 2003, 5072.71, 0.83),\n('Classic Cars', 2003, 5571.80, 1.00),\n('Motorcycles', 2004, 2598.77, 0.00),\n('Vintage Cars', 2004, 2819.28, 0.17),\n('Planes', 2004, 2857.35, 0.33),\n('Ships', 2004, 4301.15, 0.50),\n('Trucks and Buses', 2004, 4615.64, 0.67),\n('Trains', 2004, 4646.88, 0.83),\n('Classic Cars', 2004, 8124.98, 1.00),\n('Ships', 2005, 1603.20, 0.00),\n('Motorcycles', 2005, 3774.00, 0.17),\n('Planes', 2005, 4018.00, 0.50),\n('Vintage Cars', 2005, 5346.50, 0.67),\n('Classic Cars', 2005, 5971.35, 0.83),\n('Trucks and Buses', 2005, 6295.03, 1.00);\n\n// query\nSELECT\n    productLine,\n    orderYear,\n    orderValue,\n    ROUND(\n    PERCENT_RANK()\n    OVER (\n        PARTITION BY orderYear\n        ORDER BY orderValue\n    ),2) percentile_rank\nFROM\n    test_percent_rank\nORDER BY\n    orderYear;\n\n// result\n+------------------+-----------+------------+-----------------+\n| productLine      | orderYear | orderValue | percentile_rank |\n+------------------+-----------+------------+-----------------+\n| Motorcycles      |      2003 |     2440.5 |               0 |\n| Trains           |      2003 |    2770.95 |            0.17 |\n| Trucks and Buses |      2003 |    3284.28 |            0.33 |\n| Vintage Cars     |      2003 |       4080 |             0.5 |\n| Planes           |      2003 |    4825.44 |            0.67 |\n| Ships            |      2003 |    5072.71 |            0.83 |\n| Classic Cars     |      2003 |     5571.8 |               1 |\n| Motorcycles      |      2004 |    2598.77 |               0 |\n| Vintage Cars     |      2004 |    2819.28 |            0.17 |\n| Planes           |      2004 |    2857.35 |            0.33 |\n| Ships            |      2004 |    4301.15 |             0.5 |\n| Trucks and Buses |      2004 |    4615.64 |            0.67 |\n| Trains           |      2004 |    4646.88 |            0.83 |\n| Classic Cars     |      2004 |    8124.98 |               1 |\n| Ships            |      2005 |     1603.2 |               0 |\n| Motorcycles      |      2005 |       3774 |             0.2 |\n| Planes           |      2005 |       4018 |             0.4 |\n| Vintage Cars     |      2005 |     5346.5 |             0.6 |\n| Classic Cars     |      2005 |    5971.35 |             0.8 |\n| Trucks and Buses |      2005 |    6295.03 |               1 |\n+------------------+-----------+------------+-----------------+\n")),(0,a.yg)("h3",{id:"keywords"},"keywords"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre"},"WINDOW,FUNCTION,PERCENT_RANK\n")))}d.isMDXComponent=!0}}]);