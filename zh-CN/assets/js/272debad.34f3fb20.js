"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([[23342],{15680:(e,t,n)=>{n.d(t,{xA:()=>p,yg:()=>g});var r=n(96540);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=r.createContext({}),c=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=c(e.components);return r.createElement(s.Provider,{value:t},e.children)},u="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},y=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,l=e.originalType,s=e.parentName,p=o(e,["components","mdxType","originalType","parentName"]),u=c(n),y=a,g=u["".concat(s,".").concat(y)]||u[y]||m[y]||l;return n?r.createElement(g,i(i({ref:t},p),{},{components:n})):r.createElement(g,i({ref:t},p))}));function g(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=n.length,i=new Array(l);i[0]=y;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o[u]="string"==typeof e?e:a,i[1]=o;for(var c=2;c<l;c++)i[c]=n[c];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}y.displayName="MDXCreateElement"},43018:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>m,frontMatter:()=>l,metadata:()=>o,toc:()=>c});var r=n(58168),a=(n(96540),n(15680));const l={title:"USE",language:"zh-CN"},i=void 0,o={unversionedId:"sql-manual/sql-reference/Utility-Statements/USE",id:"version-1.2/sql-manual/sql-reference/Utility-Statements/USE",title:"USE",description:"\x3c!--",source:"@site/i18n/zh-CN/docusaurus-plugin-content-docs/version-1.2/sql-manual/sql-reference/Utility-Statements/USE.md",sourceDirName:"sql-manual/sql-reference/Utility-Statements",slug:"/sql-manual/sql-reference/Utility-Statements/USE",permalink:"/zh-CN/docs/1.2/sql-manual/sql-reference/Utility-Statements/USE",draft:!1,tags:[],version:"1.2",frontMatter:{title:"USE",language:"zh-CN"},sidebar:"docs",previous:{title:"HELP",permalink:"/zh-CN/docs/1.2/sql-manual/sql-reference/Utility-Statements/HELP"},next:{title:"DESCRIBE",permalink:"/zh-CN/docs/1.2/sql-manual/sql-reference/Utility-Statements/DESCRIBE"}},s={},c=[{value:"USE",id:"use",level:2},{value:"Name",id:"name",level:3},{value:"Description",id:"description",level:3},{value:"Example",id:"example",level:3},{value:"Keywords",id:"keywords",level:3},{value:"Best Practice",id:"best-practice",level:3}],p={toc:c},u="wrapper";function m(e){let{components:t,...n}=e;return(0,a.yg)(u,(0,r.A)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,a.yg)("h2",{id:"use"},"USE"),(0,a.yg)("h3",{id:"name"},"Name"),(0,a.yg)("p",null,"USE"),(0,a.yg)("h3",{id:"description"},"Description"),(0,a.yg)("p",null,"USE \u547d\u4ee4\u53ef\u4ee5\u8ba9\u6211\u4eec\u6765\u4f7f\u7528\u6570\u636e\u5e93"),(0,a.yg)("p",null,"\u8bed\u6cd5\uff1a"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-SQL"},"USE <[CATALOG_NAME].DATABASE_NAME>\n")),(0,a.yg)("p",null,"\u8bf4\u660e:"),(0,a.yg)("ol",null,(0,a.yg)("li",{parentName:"ol"},"\u4f7f\u7528",(0,a.yg)("inlineCode",{parentName:"li"},"USE CATALOG_NAME.DATABASE_NAME"),", \u4f1a\u5148\u5c06\u5f53\u524d\u7684Catalog\u5207\u6362\u4e3a",(0,a.yg)("inlineCode",{parentName:"li"},"CATALOG_NAME"),", \u7136\u540e\u518d\u8bb2\u5f53\u524d\u7684Database\u5207\u6362\u4e3a",(0,a.yg)("inlineCode",{parentName:"li"},"DATABASE_NAME"))),(0,a.yg)("h3",{id:"example"},"Example"),(0,a.yg)("ol",null,(0,a.yg)("li",{parentName:"ol"},(0,a.yg)("p",{parentName:"li"},"\u5982\u679c demo \u6570\u636e\u5e93\u5b58\u5728\uff0c\u5c1d\u8bd5\u4f7f\u7528\u5b83\uff1a"),(0,a.yg)("pre",{parentName:"li"},(0,a.yg)("code",{parentName:"pre",className:"language-sql"},"mysql> use demo;\nDatabase changed\n"))),(0,a.yg)("li",{parentName:"ol"},(0,a.yg)("p",{parentName:"li"},"\u5982\u679c demo \u6570\u636e\u5e93\u5728hms_catalog\u7684Catalog\u4e0b\u5b58\u5728\uff0c\u5c1d\u8bd5\u5207\u6362\u5230hms_catalog, \u5e76\u4f7f\u7528\u5b83\uff1a"),(0,a.yg)("pre",{parentName:"li"},(0,a.yg)("code",{parentName:"pre",className:"language-sql"},"mysql> use hms_catalog.demo;\nDatabase changed\n")))),(0,a.yg)("h3",{id:"keywords"},"Keywords"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre"},"USE\n")),(0,a.yg)("h3",{id:"best-practice"},"Best Practice"))}m.isMDXComponent=!0}}]);