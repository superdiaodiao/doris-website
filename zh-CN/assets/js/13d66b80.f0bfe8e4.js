"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([[33961],{15680:(e,n,t)=>{t.d(n,{xA:()=>u,yg:()=>N});var r=t(96540);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function a(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function s(e,n){if(null==e)return{};var t,r,o=function(e,n){if(null==e)return{};var t,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var l=r.createContext({}),c=function(e){var n=r.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):a(a({},n),e)),t},u=function(e){var n=c(e.components);return r.createElement(l.Provider,{value:n},e.children)},p="mdxType",d={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},f=r.forwardRef((function(e,n){var t=e.components,o=e.mdxType,i=e.originalType,l=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),p=c(t),f=o,N=p["".concat(l,".").concat(f)]||p[f]||d[f]||i;return t?r.createElement(N,a(a({ref:n},u),{},{components:t})):r.createElement(N,a({ref:n},u))}));function N(e,n){var t=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var i=t.length,a=new Array(i);a[0]=f;var s={};for(var l in n)hasOwnProperty.call(n,l)&&(s[l]=n[l]);s.originalType=e,s[p]="string"==typeof e?e:o,a[1]=s;for(var c=2;c<i;c++)a[c]=t[c];return r.createElement.apply(null,a)}return r.createElement.apply(null,t)}f.displayName="MDXCreateElement"},1798:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>l,contentTitle:()=>a,default:()=>d,frontMatter:()=>i,metadata:()=>s,toc:()=>c});var r=t(58168),o=(t(96540),t(15680));const i={title:"WINDOW_FUNCTION_NTILE",language:"en"},a=void 0,s={unversionedId:"sql-manual/sql-functions/window-functions/WINDOW-FUNCTION-NTILE",id:"version-2.0/sql-manual/sql-functions/window-functions/WINDOW-FUNCTION-NTILE",title:"WINDOW_FUNCTION_NTILE",description:'\x3c!--  Licensed to the Apache Software Foundation (ASF) under one or more contributor license agreements.  See the NOTICE file distributed with this work for additional information regarding copyright ownership.  The ASF licenses this file to you under the Apache License, Version 2.0 (the "License"); you may not use this file except in compliance with the License.  You may obtain a copy of the License at',source:"@site/versioned_docs/version-2.0/sql-manual/sql-functions/window-functions/WINDOW-FUNCTION-NTILE.md",sourceDirName:"sql-manual/sql-functions/window-functions",slug:"/sql-manual/sql-functions/window-functions/WINDOW-FUNCTION-NTILE",permalink:"/zh-CN/docs/sql-manual/sql-functions/window-functions/WINDOW-FUNCTION-NTILE",draft:!1,tags:[],version:"2.0",frontMatter:{title:"WINDOW_FUNCTION_NTILE",language:"en"},sidebar:"docs",previous:{title:"WINDOW_FUNCTION_ROW_NUMBER",permalink:"/zh-CN/docs/sql-manual/sql-functions/window-functions/WINDOW-FUNCTION-ROW-NUMBER"},next:{title:"WINDOW_FUNCTION_WINDOW_FUNNEL",permalink:"/zh-CN/docs/sql-manual/sql-functions/window-functions/WINDOW-FUNCTION-WINDOW-FUNNEL"}},l={},c=[{value:"WINDOW FUNCTION NTILE",id:"window-function-ntile",level:2},{value:"description",id:"description",level:3},{value:"example",id:"example",level:3},{value:"keywords",id:"keywords",level:3}],u={toc:c},p="wrapper";function d(e){let{components:n,...t}=e;return(0,o.yg)(p,(0,r.A)({},u,t,{components:n,mdxType:"MDXLayout"}),(0,o.yg)("h2",{id:"window-function-ntile"},"WINDOW FUNCTION NTILE"),(0,o.yg)("h3",{id:"description"},"description"),(0,o.yg)("p",null,"For NTILE(n), this function will divides rows in a sorted partition into a specific number of groups(in this case, n buckets). Each group is assigned a bucket number starting at one. For the case that cannot be distributed evenly, rows are preferentially allocated to the bucket with the smaller number. The number of rows in all buckets cannot differ by more than 1. For now, n must be constant positive integer."),(0,o.yg)("pre",null,(0,o.yg)("code",{parentName:"pre",className:"language-sql"},"NTILE(n) OVER(partition_by_clause order_by_clause)\n")),(0,o.yg)("h3",{id:"example"},"example"),(0,o.yg)("pre",null,(0,o.yg)("code",{parentName:"pre",className:"language-sql"},"select x, y, ntile(2) over(partition by x order by y) as ntile from int_t;\n\n| x | y    | rank     |\n|---|------|----------|\n| 1 | 1    | 1        |\n| 1 | 2    | 1        |\n| 1 | 2    | 2        |\n| 2 | 1    | 1        |\n| 2 | 2    | 1        |\n| 2 | 3    | 2        |\n| 3 | 1    | 1        |\n| 3 | 1    | 1        |\n| 3 | 2    | 2        |\n")),(0,o.yg)("h3",{id:"keywords"},"keywords"),(0,o.yg)("pre",null,(0,o.yg)("code",{parentName:"pre"},"WINDOW,FUNCTION,NTILE\n")))}d.isMDXComponent=!0}}]);