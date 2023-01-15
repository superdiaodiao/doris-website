"use strict";(self.webpackChunkselectdb_portal=self.webpackChunkselectdb_portal||[]).push([[77837],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>d});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var p=r.createContext({}),s=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},c=function(e){var t=s(e.components);return r.createElement(p.Provider,{value:t},e.children)},m="mdxType",S={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,l=e.originalType,p=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),m=s(n),u=a,d=m["".concat(p,".").concat(u)]||m[u]||S[u]||l;return n?r.createElement(d,o(o({ref:t},c),{},{components:n})):r.createElement(d,o({ref:t},c))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=n.length,o=new Array(l);o[0]=u;var i={};for(var p in t)hasOwnProperty.call(t,p)&&(i[p]=t[p]);i.originalType=e,i[m]="string"==typeof e?e:a,o[1]=i;for(var s=2;s<l;s++)o[s]=n[s];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}u.displayName="MDXCreateElement"},96490:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>o,default:()=>m,frontMatter:()=>l,metadata:()=>i,toc:()=>s});var r=n(87462),a=(n(67294),n(3905));const l={title:"SHOW-DATABASES",language:"zh-CN"},o=void 0,i={unversionedId:"sql-manual/sql-reference/Show-Statements/SHOW-DATABASES",id:"version-dev/sql-manual/sql-reference/Show-Statements/SHOW-DATABASES",title:"SHOW-DATABASES",description:"\x3c!--",source:"@site/i18n/zh-CN/docusaurus-plugin-content-docs/version-dev/sql-manual/sql-reference/Show-Statements/SHOW-DATABASES.md",sourceDirName:"sql-manual/sql-reference/Show-Statements",slug:"/sql-manual/sql-reference/Show-Statements/SHOW-DATABASES",permalink:"/zh-CN/docs/dev/sql-manual/sql-reference/Show-Statements/SHOW-DATABASES",draft:!1,editUrl:"https://github.com/apache/doris/edit/master/docs/zh-CN/docs/sql-manual/sql-reference/Show-Statements/SHOW-DATABASES.md",tags:[],version:"dev",frontMatter:{title:"SHOW-DATABASES",language:"zh-CN"},sidebar:"docs",previous:{title:"SHOW-COLLATION",permalink:"/zh-CN/docs/dev/sql-manual/sql-reference/Show-Statements/SHOW-COLLATION"},next:{title:"SHOW-DATA-SKEW",permalink:"/zh-CN/docs/dev/sql-manual/sql-reference/Show-Statements/SHOW-DATA-SKEW"}},p={},s=[{value:"SHOW-DATABASES",id:"show-databases",level:2},{value:"Name",id:"name",level:3},{value:"Description",id:"description",level:3},{value:"Example",id:"example",level:3},{value:"Keywords",id:"keywords",level:3},{value:"Best Practice",id:"best-practice",level:3}],c={toc:s};function m(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,r.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"show-databases"},"SHOW-DATABASES"),(0,a.kt)("h3",{id:"name"},"Name"),(0,a.kt)("p",null,"SHOW DATABASES"),(0,a.kt)("h3",{id:"description"},"Description"),(0,a.kt)("p",null,"\u8be5\u8bed\u53e5\u7528\u4e8e\u5c55\u793a\u5f53\u524d\u53ef\u89c1\u7684 db"),(0,a.kt)("p",null,"\u8bed\u6cd5\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sql"},"SHOW DATABASES [FROM catalog] [filter expr];\n")),(0,a.kt)("p",null,"\u8bf4\u660e:"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("inlineCode",{parentName:"li"},"SHOW DATABASES")," \u4f1a\u5c55\u793a\u5f53\u524d\u6240\u6709\u7684\u6570\u636e\u5e93\u540d\u79f0."),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("inlineCode",{parentName:"li"},"SHOW DATABASES FROM catalog")," \u4f1a\u5c55\u793a",(0,a.kt)("inlineCode",{parentName:"li"},"catalog"),"\u4e2d\u6240\u6709\u7684\u6570\u636e\u5e93\u540d\u79f0."),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("inlineCode",{parentName:"li"},"SHOW DATABASES filter_expr")," \u4f1a\u5c55\u793a\u5f53\u524d\u6240\u6709\u7ecf\u8fc7\u8fc7\u6ee4\u540e\u7684\u6570\u636e\u5e93\u540d\u79f0."),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("inlineCode",{parentName:"li"},"SHOW DATABASES FROM catalog filter_expr")," \u8fd9\u79cd\u8bed\u6cd5\u4e0d\u652f\u6301.")),(0,a.kt)("h3",{id:"example"},"Example"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"\u5c55\u793a\u5f53\u524d\u6240\u6709\u7684\u6570\u636e\u5e93\u540d\u79f0."),(0,a.kt)("pre",{parentName:"li"},(0,a.kt)("code",{parentName:"pre",className:"language-sql"},"SHOW DATABASES;\n")),(0,a.kt)("pre",{parentName:"li"},(0,a.kt)("code",{parentName:"pre"},"+--------------------+\n| Database           |\n+--------------------+\n| test               |\n| information_schema |\n+--------------------+\n"))),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"\u4f1a\u5c55\u793a",(0,a.kt)("inlineCode",{parentName:"p"},"hms_catalog"),"\u4e2d\u6240\u6709\u7684\u6570\u636e\u5e93\u540d\u79f0."),(0,a.kt)("pre",{parentName:"li"},(0,a.kt)("code",{parentName:"pre",className:"language-sql"},"SHOW DATABASES from hms_catalog;\n")),(0,a.kt)("pre",{parentName:"li"},(0,a.kt)("code",{parentName:"pre"},"+---------------+\n| Database      |\n+---------------+\n| default       |\n| tpch          |\n+---------------+\n"))),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"\u5c55\u793a\u5f53\u524d\u6240\u6709\u7ecf\u8fc7\u8868\u793a\u5f0f",(0,a.kt)("inlineCode",{parentName:"p"},"like 'infor%'"),"\u8fc7\u6ee4\u540e\u7684\u6570\u636e\u5e93\u540d\u79f0."),(0,a.kt)("pre",{parentName:"li"},(0,a.kt)("code",{parentName:"pre",className:"language-sql"},"SHOW DATABASES like 'infor%';\n")),(0,a.kt)("pre",{parentName:"li"},(0,a.kt)("code",{parentName:"pre"},"+--------------------+\n| Database           |\n+--------------------+\n| information_schema |\n+--------------------+\n")))),(0,a.kt)("h3",{id:"keywords"},"Keywords"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"SHOW, DATABASES\n")),(0,a.kt)("h3",{id:"best-practice"},"Best Practice"))}m.isMDXComponent=!0}}]);