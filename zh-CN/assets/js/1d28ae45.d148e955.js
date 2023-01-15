"use strict";(self.webpackChunkselectdb_portal=self.webpackChunkselectdb_portal||[]).push([[82494],{3905:(e,n,t)=>{t.d(n,{Zo:()=>u,kt:()=>f});var r=t(67294);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function a(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,r,o=function(e,n){if(null==e)return{};var t,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var s=r.createContext({}),c=function(e){var n=r.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):a(a({},n),e)),t},u=function(e){var n=c(e.components);return r.createElement(s.Provider,{value:n},e.children)},p="mdxType",d={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},m=r.forwardRef((function(e,n){var t=e.components,o=e.mdxType,i=e.originalType,s=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),p=c(t),m=o,f=p["".concat(s,".").concat(m)]||p[m]||d[m]||i;return t?r.createElement(f,a(a({ref:n},u),{},{components:t})):r.createElement(f,a({ref:n},u))}));function f(e,n){var t=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var i=t.length,a=new Array(i);a[0]=m;var l={};for(var s in n)hasOwnProperty.call(n,s)&&(l[s]=n[s]);l.originalType=e,l[p]="string"==typeof e?e:o,a[1]=l;for(var c=2;c<i;c++)a[c]=t[c];return r.createElement.apply(null,a)}return r.createElement.apply(null,t)}m.displayName="MDXCreateElement"},25808:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>s,contentTitle:()=>a,default:()=>p,frontMatter:()=>i,metadata:()=>l,toc:()=>c});var r=t(87462),o=(t(67294),t(3905));const i={title:"WINDOW-FUNCTION-FIRST_VALUE",language:"zh-CN"},a=void 0,l={unversionedId:"sql-manual/sql-functions/window-functions/WINDOW-FUNCTION-FIRST-VALUE",id:"version-dev/sql-manual/sql-functions/window-functions/WINDOW-FUNCTION-FIRST-VALUE",title:"WINDOW-FUNCTION-FIRST_VALUE",description:'\x3c!--  Licensed to the Apache Software Foundation (ASF) under one or more contributor license agreements.  See the NOTICE file distributed with this work for additional information regarding copyright ownership.  The ASF licenses this file to you under the Apache License, Version 2.0 (the "License"); you may not use this file except in compliance with the License.  You may obtain a copy of the License at',source:"@site/i18n/zh-CN/docusaurus-plugin-content-docs/version-dev/sql-manual/sql-functions/window-functions/WINDOW-FUNCTION-FIRST-VALUE.md",sourceDirName:"sql-manual/sql-functions/window-functions",slug:"/sql-manual/sql-functions/window-functions/WINDOW-FUNCTION-FIRST-VALUE",permalink:"/zh-CN/docs/dev/sql-manual/sql-functions/window-functions/WINDOW-FUNCTION-FIRST-VALUE",draft:!1,editUrl:"https://github.com/apache/doris/edit/master/docs/zh-CN/docs/sql-manual/sql-functions/window-functions/WINDOW-FUNCTION-FIRST-VALUE.md",tags:[],version:"dev",frontMatter:{title:"WINDOW-FUNCTION-FIRST_VALUE",language:"zh-CN"},sidebar:"docs",previous:{title:"WINDOW-FUNCTION-MAX",permalink:"/zh-CN/docs/dev/sql-manual/sql-functions/window-functions/WINDOW-FUNCTION-MAX"},next:{title:"WINDOW-FUNCTION-LEAD",permalink:"/zh-CN/docs/dev/sql-manual/sql-functions/window-functions/WINDOW-FUNCTION-LEAD"}},s={},c=[{value:"WINDOW FUNCTION FIRST_VALUE",id:"window-function-first_value",level:2},{value:"description",id:"description",level:3},{value:"example",id:"example",level:3},{value:"keywords",id:"keywords",level:3}],u={toc:c};function p(e){let{components:n,...t}=e;return(0,o.kt)("wrapper",(0,r.Z)({},u,t,{components:n,mdxType:"MDXLayout"}),(0,o.kt)("h2",{id:"window-function-first_value"},"WINDOW FUNCTION FIRST_VALUE"),(0,o.kt)("h3",{id:"description"},"description"),(0,o.kt)("p",null,"FIRST_VALUE() \u8fd4\u56de\u7a97\u53e3\u8303\u56f4\u5185\u7684\u7b2c\u4e00\u4e2a\u503c\u3002"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sql"},"FIRST_VALUE(expr) OVER(partition_by_clause order_by_clause [window_clause])\n")),(0,o.kt)("h3",{id:"example"},"example"),(0,o.kt)("p",null,"\u6211\u4eec\u6709\u5982\u4e0b\u6570\u636e"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sql"}," select name, country, greeting from mail_merge;\n \n | name    | country | greeting     |\n |---------|---------|--------------|\n | Pete    | USA     | Hello        |\n | John    | USA     | Hi           |\n | Boris   | Germany | Guten tag    |\n | Michael | Germany | Guten morgen |\n | Bjorn   | Sweden  | Hej          |\n | Mats    | Sweden  | Tja          |\n")),(0,o.kt)("p",null,"\u4f7f\u7528 FIRST_VALUE()\uff0c\u6839\u636e country \u5206\u7ec4\uff0c\u8fd4\u56de\u6bcf\u4e2a\u5206\u7ec4\u4e2d\u7b2c\u4e00\u4e2a greeting \u7684\u503c\uff1a"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sql"},"select country, name,    \nfirst_value(greeting)    \nover (partition by country order by name, greeting) as greeting from mail_merge;\n\n| country | name    | greeting  |\n|---------|---------|-----------|\n| Germany | Boris   | Guten tag |\n| Germany | Michael | Guten tag |\n| Sweden  | Bjorn   | Hej       |\n| Sweden  | Mats    | Hej       |\n| USA     | John    | Hi        |\n| USA     | Pete    | Hi        |\n")),(0,o.kt)("h3",{id:"keywords"},"keywords"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"WINDOW,FUNCTION,FIRST_VALUE\n")))}p.isMDXComponent=!0}}]);