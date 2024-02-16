"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([[29577],{15680:(e,r,t)=>{t.d(r,{xA:()=>c,yg:()=>y});var n=t(96540);function a(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function o(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function l(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?o(Object(t),!0).forEach((function(r){a(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function s(e,r){if(null==e)return{};var t,n,a=function(e,r){if(null==e)return{};var t,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)t=o[n],r.indexOf(t)>=0||(a[t]=e[t]);return a}(e,r);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)t=o[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var i=n.createContext({}),p=function(e){var r=n.useContext(i),t=r;return e&&(t="function"==typeof e?e(r):l(l({},r),e)),t},c=function(e){var r=p(e.components);return n.createElement(i.Provider,{value:r},e.children)},m="mdxType",u={inlineCode:"code",wrapper:function(e){var r=e.children;return n.createElement(n.Fragment,{},r)}},d=n.forwardRef((function(e,r){var t=e.components,a=e.mdxType,o=e.originalType,i=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),m=p(t),d=a,y=m["".concat(i,".").concat(d)]||m[d]||u[d]||o;return t?n.createElement(y,l(l({ref:r},c),{},{components:t})):n.createElement(y,l({ref:r},c))}));function y(e,r){var t=arguments,a=r&&r.mdxType;if("string"==typeof e||a){var o=t.length,l=new Array(o);l[0]=d;var s={};for(var i in r)hasOwnProperty.call(r,i)&&(s[i]=r[i]);s.originalType=e,s[m]="string"==typeof e?e:a,l[1]=s;for(var p=2;p<o;p++)l[p]=t[p];return n.createElement.apply(null,l)}return n.createElement.apply(null,t)}d.displayName="MDXCreateElement"},33474:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>i,contentTitle:()=>l,default:()=>u,frontMatter:()=>o,metadata:()=>s,toc:()=>p});var n=t(58168),a=(t(96540),t(15680));const o={title:"SHOW-workload-GROUPS",language:"en"},l=void 0,s={unversionedId:"sql-manual/sql-reference/Show-Statements/SHOW-WORKLOAD-GROUPS",id:"sql-manual/sql-reference/Show-Statements/SHOW-WORKLOAD-GROUPS",title:"SHOW-workload-GROUPS",description:"\x3c!--",source:"@site/docs/sql-manual/sql-reference/Show-Statements/SHOW-WORKLOAD-GROUPS.md",sourceDirName:"sql-manual/sql-reference/Show-Statements",slug:"/sql-manual/sql-reference/Show-Statements/SHOW-WORKLOAD-GROUPS",permalink:"/docs/dev/sql-manual/sql-reference/Show-Statements/SHOW-WORKLOAD-GROUPS",draft:!1,tags:[],version:"current",frontMatter:{title:"SHOW-workload-GROUPS",language:"en"},sidebar:"docs",previous:{title:"SHOW-RESOURCES",permalink:"/docs/dev/sql-manual/sql-reference/Show-Statements/SHOW-RESOURCES"},next:{title:"SHOW-PARTITIONS",permalink:"/docs/dev/sql-manual/sql-reference/Show-Statements/SHOW-PARTITIONS"}},i={},p=[{value:"SHOW-workload-GROUPS",id:"show-workload-groups",level:2},{value:"Name",id:"name",level:3},{value:"Description",id:"description",level:3},{value:"Example",id:"example",level:3},{value:"Keywords",id:"keywords",level:3},{value:"Best Practice",id:"best-practice",level:3}],c={toc:p},m="wrapper";function u(e){let{components:r,...t}=e;return(0,a.yg)(m,(0,n.A)({},c,t,{components:r,mdxType:"MDXLayout"}),(0,a.yg)("h2",{id:"show-workload-groups"},"SHOW-workload-GROUPS"),(0,a.yg)("h3",{id:"name"},"Name"),(0,a.yg)("p",null,"SHOW workload GROUPS"),(0,a.yg)("h3",{id:"description"},"Description"),(0,a.yg)("p",null,"This statement is used to display the resource groups for which the current user has usage_priv privileges."),(0,a.yg)("p",null,"grammar:"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-sql"},'SHOW WORKLOAD GROUPS [LIKE "pattern"];\n')),(0,a.yg)("p",null,"Description:"),(0,a.yg)("p",null,"This statement only does a simple display of workload groups, for a more complex display refer to tvf workload_groups()."),(0,a.yg)("h3",{id:"example"},"Example"),(0,a.yg)("ol",null,(0,a.yg)("li",{parentName:"ol"},(0,a.yg)("p",{parentName:"li"},"Show all workload groups:"),(0,a.yg)("pre",{parentName:"li"},(0,a.yg)("code",{parentName:"pre",className:"language-sql"},"mysql> show workload groups;\n+----------+--------+--------------------------+---------+\n| Id       | Name   | Item                     | Value   |\n+----------+--------+--------------------------+---------+\n| 10343386 | normal | cpu_share                | 10      |\n| 10343386 | normal | memory_limit             | 30%     |\n| 10343386 | normal | enable_memory_overcommit | true    |\n| 10352416 | g1     | memory_limit             | 20%     |\n| 10352416 | g1     | cpu_share                | 10      |\n+----------+--------+--------------------------+---------+\n"))),(0,a.yg)("li",{parentName:"ol"},(0,a.yg)("p",{parentName:"li"},"Show workload groups using pattern"),(0,a.yg)("pre",{parentName:"li"},(0,a.yg)("code",{parentName:"pre",className:"language-sql"},'mysql> show workload groups like "normal%";\n+----------+--------+--------------------------+---------+\n| Id       | Name   | Item                     | Value   |\n+----------+--------+--------------------------+---------+\n| 10343386 | normal | cpu_share                | 10      |\n| 10343386 | normal | memory_limit             | 30%     |\n| 10343386 | normal | enable_memory_overcommit | true    |\n+----------+--------+--------------------------+---------+\n')))),(0,a.yg)("h3",{id:"keywords"},"Keywords"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre"},"SHOW, WORKLOAD, GROUPS, GROUP\n")),(0,a.yg)("h3",{id:"best-practice"},"Best Practice"))}u.isMDXComponent=!0}}]);