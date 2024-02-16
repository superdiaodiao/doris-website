"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([[45906],{15680:(e,n,t)=>{t.d(n,{xA:()=>s,yg:()=>f});var r=t(96540);function i(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function l(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){i(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function a(e,n){if(null==e)return{};var t,r,i=function(e,n){if(null==e)return{};var t,r,i={},o=Object.keys(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||(i[t]=e[t]);return i}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}var u=r.createContext({}),c=function(e){var n=r.useContext(u),t=n;return e&&(t="function"==typeof e?e(n):l(l({},n),e)),t},s=function(e){var n=c(e.components);return r.createElement(u.Provider,{value:n},e.children)},d="mdxType",p={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},w=r.forwardRef((function(e,n){var t=e.components,i=e.mdxType,o=e.originalType,u=e.parentName,s=a(e,["components","mdxType","originalType","parentName"]),d=c(t),w=i,f=d["".concat(u,".").concat(w)]||d[w]||p[w]||o;return t?r.createElement(f,l(l({ref:n},s),{},{components:t})):r.createElement(f,l({ref:n},s))}));function f(e,n){var t=arguments,i=n&&n.mdxType;if("string"==typeof e||i){var o=t.length,l=new Array(o);l[0]=w;var a={};for(var u in n)hasOwnProperty.call(n,u)&&(a[u]=n[u]);a.originalType=e,a[d]="string"==typeof e?e:i,l[1]=a;for(var c=2;c<o;c++)l[c]=t[c];return r.createElement.apply(null,l)}return r.createElement.apply(null,t)}w.displayName="MDXCreateElement"},78294:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>u,contentTitle:()=>l,default:()=>p,frontMatter:()=>o,metadata:()=>a,toc:()=>c});var r=t(58168),i=(t(96540),t(15680));const o={title:"WINDOW_FUNCTION_WINDOW_FUNNEL",language:"zh-CN"},l=void 0,a={unversionedId:"sql-manual/sql-functions/window-functions/window-function-window-funnel",id:"sql-manual/sql-functions/window-functions/window-function-window-funnel",title:"WINDOW_FUNCTION_WINDOW_FUNNEL",description:'\x3c!--  Licensed to the Apache Software Foundation (ASF) under one or more contributor license agreements.  See the NOTICE file distributed with this work for additional information regarding copyright ownership.  The ASF licenses this file to you under the Apache License, Version 2.0 (the "License"); you may not use this file except in compliance with the License.  You may obtain a copy of the License at',source:"@site/i18n/zh-CN/docusaurus-plugin-content-docs/current/sql-manual/sql-functions/window-functions/window-function-window-funnel.md",sourceDirName:"sql-manual/sql-functions/window-functions",slug:"/sql-manual/sql-functions/window-functions/window-function-window-funnel",permalink:"/zh-CN/docs/dev/sql-manual/sql-functions/window-functions/window-function-window-funnel",draft:!1,tags:[],version:"current",frontMatter:{title:"WINDOW_FUNCTION_WINDOW_FUNNEL",language:"zh-CN"},sidebar:"docs",previous:{title:"WINDOW_FUNCTION_NTILE",permalink:"/zh-CN/docs/dev/sql-manual/sql-functions/window-functions/window-function-ntile"},next:{title:"IPV4_NUM_TO_STRING",permalink:"/zh-CN/docs/dev/sql-manual/sql-functions/ip-functions/ipv4-num-to-string"}},u={},c=[{value:"WINDOW FUNCTION WINDOW_FUNNEL",id:"window-function-window_funnel",level:2},{value:"description",id:"description",level:3},{value:"example",id:"example",level:3},{value:"keywords",id:"keywords",level:3}],s={toc:c},d="wrapper";function p(e){let{components:n,...t}=e;return(0,i.yg)(d,(0,r.A)({},s,t,{components:n,mdxType:"MDXLayout"}),(0,i.yg)("h2",{id:"window-function-window_funnel"},"WINDOW FUNCTION WINDOW_FUNNEL"),(0,i.yg)("h3",{id:"description"},"description"),(0,i.yg)("p",null,"\u6f0f\u6597\u5206\u6790\u51fd\u6570\u641c\u7d22\u6ed1\u52a8\u65f6\u95f4\u7a97\u53e3\u5185\u6700\u5927\u7684\u53d1\u751f\u7684\u6700\u5927\u4e8b\u4ef6\u5e8f\u5217\u957f\u5ea6\u3002"),(0,i.yg)("ul",null,(0,i.yg)("li",{parentName:"ul"},"window \uff1a\u6ed1\u52a8\u65f6\u95f4\u7a97\u53e3\u5927\u5c0f\uff0c\u5355\u4f4d\u4e3a\u79d2\u3002"),(0,i.yg)("li",{parentName:"ul"},"mode \uff1a\u6a21\u5f0f\uff0c\u5171\u6709\u56db\u79cd\u6a21\u5f0f",(0,i.yg)("ul",{parentName:"li"},(0,i.yg)("li",{parentName:"ul"},'"default": \u9ed8\u8ba4\u6a21\u5f0f\u3002'),(0,i.yg)("li",{parentName:"ul"},'"deduplication": \u5f53\u67d0\u4e2a\u4e8b\u4ef6\u91cd\u590d\u53d1\u751f\u65f6\uff0c\u8fd9\u4e2a\u91cd\u590d\u53d1\u751f\u7684\u4e8b\u4ef6\u4f1a\u963b\u6b62\u540e\u7eed\u7684\u5904\u7406\u8fc7\u7a0b\u3002\u5982\uff0c\u6307\u5b9a\u4e8b\u4ef6\u94fe\u4e3a',"[event1='A', event2='B', event3='C', event4='D']",'\uff0c\u539f\u59cb\u4e8b\u4ef6\u94fe\u4e3a"A-B-C-B-D"\u3002\u7531\u4e8eB\u4e8b\u4ef6\u91cd\u590d\uff0c\u6700\u7ec8\u7684\u7ed3\u679c\u4e8b\u4ef6\u94fe\u4e3aA-B-C\uff0c\u6700\u5927\u957f\u5ea6\u4e3a3\u3002'),(0,i.yg)("li",{parentName:"ul"},'"fixed": \u4e0d\u5141\u8bb8\u4e8b\u4ef6\u7684\u987a\u5e8f\u53d1\u751f\u4ea4\u9519\uff0c\u5373\u4e8b\u4ef6\u53d1\u751f\u7684\u987a\u5e8f\u5fc5\u987b\u548c\u6307\u5b9a\u7684\u4e8b\u4ef6\u94fe\u987a\u5e8f\u4e00\u81f4\u3002\u5982\uff0c\u6307\u5b9a\u4e8b\u4ef6\u94fe\u4e3a',"[event1='A', event2='B', event3='C', event4='D']",'\uff0c\u539f\u59cb\u4e8b\u4ef6\u94fe\u4e3a"A-B-D-C"\uff0c\u5219\u7ed3\u679c\u4e8b\u4ef6\u94fe\u4e3aA-B\uff0c\u6700\u5927\u957f\u5ea6\u4e3a2'),(0,i.yg)("li",{parentName:"ul"},'"increase": \u9009\u4e2d\u7684\u4e8b\u4ef6\u7684\u65f6\u95f4\u6233\u5fc5\u987b\u6309\u7167\u6307\u5b9a\u4e8b\u4ef6\u94fe\u4e25\u683c\u9012\u589e\u3002'))),(0,i.yg)("li",{parentName:"ul"},"timestamp_column \uff1a\u6307\u5b9a\u65f6\u95f4\u5217\uff0c\u7c7b\u578b\u4e3aDATETIME, \u6ed1\u52a8\u7a97\u53e3\u6cbf\u7740\u6b64\u5217\u5de5\u4f5c\u3002"),(0,i.yg)("li",{parentName:"ul"},"eventN \uff1a\u8868\u793a\u4e8b\u4ef6\u7684\u5e03\u5c14\u8868\u8fbe\u5f0f\u3002")),(0,i.yg)("p",null,"\u6f0f\u6597\u5206\u6790\u51fd\u6570\u6309\u7167\u5982\u4e0b\u7b97\u6cd5\u5de5\u4f5c\uff1a"),(0,i.yg)("ul",null,(0,i.yg)("li",{parentName:"ul"},"\u641c\u7d22\u5230\u6ee1\u8db3\u6ee1\u8db3\u6761\u4ef6\u7684\u7b2c\u4e00\u4e2a\u4e8b\u4ef6\uff0c\u8bbe\u7f6e\u4e8b\u4ef6\u957f\u5ea6\u4e3a1\uff0c\u6b64\u65f6\u5f00\u59cb\u6ed1\u52a8\u65f6\u95f4\u7a97\u53e3\u8ba1\u65f6\u3002"),(0,i.yg)("li",{parentName:"ul"},"\u5982\u679c\u4e8b\u4ef6\u5728\u65f6\u95f4\u7a97\u53e3\u5185\u6309\u7167\u6307\u5b9a\u7684\u987a\u5e8f\u53d1\u751f\uff0c\u65f6\u95f4\u957f\u5ea6\u7d2f\u8ba1\u589e\u52a0\u3002\u5982\u679c\u4e8b\u4ef6\u6ca1\u6709\u6309\u7167\u6307\u5b9a\u7684\u987a\u5e8f\u53d1\u751f\uff0c\u65f6\u95f4\u957f\u5ea6\u4e0d\u589e\u52a0\u3002"),(0,i.yg)("li",{parentName:"ul"},"\u5982\u679c\u641c\u7d22\u5230\u591a\u4e2a\u4e8b\u4ef6\u94fe\uff0c\u6f0f\u6597\u5206\u6790\u51fd\u6570\u8fd4\u56de\u6700\u5927\u7684\u957f\u5ea6\u3002")),(0,i.yg)("pre",null,(0,i.yg)("code",{parentName:"pre",className:"language-sql"},"window_funnel(window, mode, timestamp_column, event1, event2, ... , eventN)\n")),(0,i.yg)("h3",{id:"example"},"example"),(0,i.yg)("pre",null,(0,i.yg)("code",{parentName:"pre",className:"language-sql"},"CREATE TABLE windowfunnel_test (\n                `xwho` varchar(50) NULL COMMENT 'xwho',\n                `xwhen` datetime COMMENT 'xwhen',\n                `xwhat` int NULL COMMENT 'xwhat'\n                )\nDUPLICATE KEY(xwho)\nDISTRIBUTED BY HASH(xwho) BUCKETS 3\nPROPERTIES (\n    \"replication_num\" = \"1\"\n);\n\nINSERT into windowfunnel_test (xwho, xwhen, xwhat) values ('1', '2022-03-12 10:41:00', 1),\n                                                   ('1', '2022-03-12 13:28:02', 2),\n                                                   ('1', '2022-03-12 16:15:01', 3),\n                                                   ('1', '2022-03-12 19:05:04', 4);\n\nselect window_funnel(3600 * 3, 'default', t.xwhen, t.xwhat = 1, t.xwhat = 2 ) AS level from windowfunnel_test t;\n\n| level |\n|---|\n| 2 |\n")),(0,i.yg)("h3",{id:"keywords"},"keywords"),(0,i.yg)("pre",null,(0,i.yg)("code",{parentName:"pre"},"WINDOW,FUNCTION,WINDOW_FUNNEL\n")))}p.isMDXComponent=!0}}]);