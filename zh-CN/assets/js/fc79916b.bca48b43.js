"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([[13268],{15680:(e,r,n)=>{n.d(r,{xA:()=>p,yg:()=>y});var t=n(96540);function a(e,r,n){return r in e?Object.defineProperty(e,r,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[r]=n,e}function l(e,r){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);r&&(t=t.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),n.push.apply(n,t)}return n}function o(e){for(var r=1;r<arguments.length;r++){var n=null!=arguments[r]?arguments[r]:{};r%2?l(Object(n),!0).forEach((function(r){a(e,r,n[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))}))}return e}function s(e,r){if(null==e)return{};var n,t,a=function(e,r){if(null==e)return{};var n,t,a={},l=Object.keys(e);for(t=0;t<l.length;t++)n=l[t],r.indexOf(n)>=0||(a[n]=e[n]);return a}(e,r);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(t=0;t<l.length;t++)n=l[t],r.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var i=t.createContext({}),c=function(e){var r=t.useContext(i),n=r;return e&&(n="function"==typeof e?e(r):o(o({},r),e)),n},p=function(e){var r=c(e.components);return t.createElement(i.Provider,{value:r},e.children)},m="mdxType",u={inlineCode:"code",wrapper:function(e){var r=e.children;return t.createElement(t.Fragment,{},r)}},O=t.forwardRef((function(e,r){var n=e.components,a=e.mdxType,l=e.originalType,i=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),m=c(n),O=a,y=m["".concat(i,".").concat(O)]||m[O]||u[O]||l;return n?t.createElement(y,o(o({ref:r},p),{},{components:n})):t.createElement(y,o({ref:r},p))}));function y(e,r){var n=arguments,a=r&&r.mdxType;if("string"==typeof e||a){var l=n.length,o=new Array(l);o[0]=O;var s={};for(var i in r)hasOwnProperty.call(r,i)&&(s[i]=r[i]);s.originalType=e,s[m]="string"==typeof e?e:a,o[1]=s;for(var c=2;c<l;c++)o[c]=n[c];return t.createElement.apply(null,o)}return t.createElement.apply(null,n)}O.displayName="MDXCreateElement"},54539:(e,r,n)=>{n.r(r),n.d(r,{assets:()=>i,contentTitle:()=>o,default:()=>u,frontMatter:()=>l,metadata:()=>s,toc:()=>c});var t=n(58168),a=(n(96540),n(15680));const l={title:"SHOW-WORKLOAD-GROUPS",language:"zh-CN"},o=void 0,s={unversionedId:"sql-manual/sql-reference/Show-Statements/SHOW-WORKLOAD-GROUPS",id:"sql-manual/sql-reference/Show-Statements/SHOW-WORKLOAD-GROUPS",title:"SHOW-WORKLOAD-GROUPS",description:"\x3c!--",source:"@site/i18n/zh-CN/docusaurus-plugin-content-docs/current/sql-manual/sql-reference/Show-Statements/SHOW-WORKLOAD-GROUPS.md",sourceDirName:"sql-manual/sql-reference/Show-Statements",slug:"/sql-manual/sql-reference/Show-Statements/SHOW-WORKLOAD-GROUPS",permalink:"/zh-CN/docs/dev/sql-manual/sql-reference/Show-Statements/SHOW-WORKLOAD-GROUPS",draft:!1,tags:[],version:"current",frontMatter:{title:"SHOW-WORKLOAD-GROUPS",language:"zh-CN"},sidebar:"docs",previous:{title:"SHOW-RESOURCES",permalink:"/zh-CN/docs/dev/sql-manual/sql-reference/Show-Statements/SHOW-RESOURCES"},next:{title:"SHOW-PARTITIONS",permalink:"/zh-CN/docs/dev/sql-manual/sql-reference/Show-Statements/SHOW-PARTITIONS"}},i={},c=[{value:"SHOW-WORKLOAD-GROUPS",id:"show-workload-groups",level:2},{value:"Name",id:"name",level:3},{value:"Description",id:"description",level:3},{value:"Example",id:"example",level:3},{value:"Keywords",id:"keywords",level:3},{value:"Best Practice",id:"best-practice",level:3}],p={toc:c},m="wrapper";function u(e){let{components:r,...n}=e;return(0,a.yg)(m,(0,t.A)({},p,n,{components:r,mdxType:"MDXLayout"}),(0,a.yg)("h2",{id:"show-workload-groups"},"SHOW-WORKLOAD-GROUPS"),(0,a.yg)("h3",{id:"name"},"Name"),(0,a.yg)("p",null,"SHOW WORKLOAD GROUPS"),(0,a.yg)("h3",{id:"description"},"Description"),(0,a.yg)("p",null,"\u8be5\u8bed\u53e5\u7528\u4e8e\u5c55\u793a\u5f53\u524d\u7528\u6237\u5177\u6709usage_priv\u6743\u9650\u7684\u8d44\u6e90\u7ec4\u3002"),(0,a.yg)("p",null,"\u8bed\u6cd5\uff1a"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-sql"},'SHOW WORKLOAD GROUPS [LIKE "pattern"];\n')),(0,a.yg)("p",null,"\u8bf4\u660e\uff1a"),(0,a.yg)("p",null,"\u8be5\u8bed\u53e5\u4ec5\u505a\u8d44\u6e90\u7ec4\u7b80\u5355\u5c55\u793a\uff0c\u66f4\u590d\u6742\u7684\u5c55\u793a\u53ef\u53c2\u8003 tvf workload_groups()."),(0,a.yg)("h3",{id:"example"},"Example"),(0,a.yg)("ol",null,(0,a.yg)("li",{parentName:"ol"},(0,a.yg)("p",{parentName:"li"},"\u5c55\u793a\u6240\u6709\u8d44\u6e90\u7ec4\uff1a"),(0,a.yg)("pre",{parentName:"li"},(0,a.yg)("code",{parentName:"pre",className:"language-sql"},"mysql> show workload groups;\n+----------+--------+--------------------------+---------+\n| Id       | Name   | Item                     | Value   |\n+----------+--------+--------------------------+---------+\n| 10343386 | normal | cpu_share                | 10      |\n| 10343386 | normal | memory_limit             | 30%     |\n| 10343386 | normal | enable_memory_overcommit | true    |\n| 10352416 | g1     | memory_limit             | 20%     |\n| 10352416 | g1     | cpu_share                | 10      |\n+----------+--------+--------------------------+---------+\n"))),(0,a.yg)("li",{parentName:"ol"},(0,a.yg)("p",{parentName:"li"},"\u4f7f\u7528 LIKE \u6a21\u7cca\u5339\u914d\uff1a"),(0,a.yg)("pre",{parentName:"li"},(0,a.yg)("code",{parentName:"pre",className:"language-sql"},'mysql> show workload groups like "normal%"\n+----------+--------+--------------------------+---------+\n| Id       | Name   | Item                     | Value   |\n+----------+--------+--------------------------+---------+\n| 10343386 | normal | cpu_share                | 10      |\n| 10343386 | normal | memory_limit             | 30%     |\n| 10343386 | normal | enable_memory_overcommit | true    |\n+----------+--------+--------------------------+---------+\n')))),(0,a.yg)("h3",{id:"keywords"},"Keywords"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre"},"SHOW, WORKLOAD, GROUPS, GROUP\n")),(0,a.yg)("h3",{id:"best-practice"},"Best Practice"))}u.isMDXComponent=!0}}]);