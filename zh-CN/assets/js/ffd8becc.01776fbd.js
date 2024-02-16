"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([[53806],{15680:(e,t,r)=>{r.d(t,{xA:()=>c,yg:()=>g});var n=r(96540);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function l(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?l(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):l(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},l=Object.keys(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var p=n.createContext({}),s=function(e){var t=n.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},c=function(e){var t=s(e.components);return n.createElement(p.Provider,{value:t},e.children)},m="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},y=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,l=e.originalType,p=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),m=s(r),y=a,g=m["".concat(p,".").concat(y)]||m[y]||u[y]||l;return r?n.createElement(g,o(o({ref:t},c),{},{components:r})):n.createElement(g,o({ref:t},c))}));function g(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=r.length,o=new Array(l);o[0]=y;var i={};for(var p in t)hasOwnProperty.call(t,p)&&(i[p]=t[p]);i.originalType=e,i[m]="string"==typeof e?e:a,o[1]=i;for(var s=2;s<l;s++)o[s]=r[s];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}y.displayName="MDXCreateElement"},43188:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>p,contentTitle:()=>o,default:()=>u,frontMatter:()=>l,metadata:()=>i,toc:()=>s});var n=r(58168),a=(r(96540),r(15680));const l={title:"SHOW-EXPORT",language:"zh-CN"},o=void 0,i={unversionedId:"sql-manual/sql-reference/Show-Statements/SHOW-EXPORT",id:"version-1.2/sql-manual/sql-reference/Show-Statements/SHOW-EXPORT",title:"SHOW-EXPORT",description:"\x3c!--",source:"@site/i18n/zh-CN/docusaurus-plugin-content-docs/version-1.2/sql-manual/sql-reference/Show-Statements/SHOW-EXPORT.md",sourceDirName:"sql-manual/sql-reference/Show-Statements",slug:"/sql-manual/sql-reference/Show-Statements/SHOW-EXPORT",permalink:"/zh-CN/docs/1.2/sql-manual/sql-reference/Show-Statements/SHOW-EXPORT",draft:!1,tags:[],version:"1.2",frontMatter:{title:"SHOW-EXPORT",language:"zh-CN"},sidebar:"docs",previous:{title:"SHOW-EVENTS",permalink:"/zh-CN/docs/1.2/sql-manual/sql-reference/Show-Statements/SHOW-EVENTS"},next:{title:"SHOW-ENCRYPT-KEY",permalink:"/zh-CN/docs/1.2/sql-manual/sql-reference/Show-Statements/SHOW-ENCRYPT-KEY"}},p={},s=[{value:"SHOW-EXPORT",id:"show-export",level:2},{value:"Name",id:"name",level:3},{value:"Description",id:"description",level:3},{value:"Example",id:"example",level:3},{value:"Keywords",id:"keywords",level:3},{value:"Best Practice",id:"best-practice",level:3}],c={toc:s},m="wrapper";function u(e){let{components:t,...r}=e;return(0,a.yg)(m,(0,n.A)({},c,r,{components:t,mdxType:"MDXLayout"}),(0,a.yg)("h2",{id:"show-export"},"SHOW-EXPORT"),(0,a.yg)("h3",{id:"name"},"Name"),(0,a.yg)("p",null,"SHOW EXPORT"),(0,a.yg)("h3",{id:"description"},"Description"),(0,a.yg)("p",null,"\u8be5\u8bed\u53e5\u7528\u4e8e\u5c55\u793a\u6307\u5b9a\u7684\u5bfc\u51fa\u4efb\u52a1\u7684\u6267\u884c\u60c5\u51b5"),(0,a.yg)("p",null,"\u8bed\u6cd5\uff1a"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-sql"},'SHOW EXPORT\n[FROM db_name]\n  [\n    WHERE\n      [ID = your_job_id]\n      [STATE = ["PENDING"|"EXPORTING"|"FINISHED"|"CANCELLED"]]\n      [LABEL = your_label]\n   ]\n[ORDER BY ...]\n[LIMIT limit];\n')),(0,a.yg)("p",null,"\u8bf4\u660e\uff1a"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre"},"  1. \u5982\u679c\u4e0d\u6307\u5b9a db_name\uff0c\u4f7f\u7528\u5f53\u524d\u9ed8\u8ba4db\n  2. \u5982\u679c\u6307\u5b9a\u4e86 STATE\uff0c\u5219\u5339\u914d EXPORT \u72b6\u6001\n  3. \u53ef\u4ee5\u4f7f\u7528 ORDER BY \u5bf9\u4efb\u610f\u5217\u7ec4\u5408\u8fdb\u884c\u6392\u5e8f\n  4. \u5982\u679c\u6307\u5b9a\u4e86 LIMIT\uff0c\u5219\u663e\u793a limit \u6761\u5339\u914d\u8bb0\u5f55\u3002\u5426\u5219\u5168\u90e8\u663e\u793a\n")),(0,a.yg)("h3",{id:"example"},"Example"),(0,a.yg)("ol",null,(0,a.yg)("li",{parentName:"ol"},(0,a.yg)("p",{parentName:"li"},"\u5c55\u793a\u9ed8\u8ba4 db \u7684\u6240\u6709\u5bfc\u51fa\u4efb\u52a1"),(0,a.yg)("pre",{parentName:"li"},(0,a.yg)("code",{parentName:"pre",className:"language-sql"},"SHOW EXPORT;\n"))),(0,a.yg)("li",{parentName:"ol"},(0,a.yg)("p",{parentName:"li"},"\u5c55\u793a\u6307\u5b9a db \u7684\u5bfc\u51fa\u4efb\u52a1\uff0c\u6309 StartTime \u964d\u5e8f\u6392\u5e8f"),(0,a.yg)("pre",{parentName:"li"},(0,a.yg)("code",{parentName:"pre",className:"language-sql"}," SHOW EXPORT FROM example_db ORDER BY StartTime DESC;\n"))),(0,a.yg)("li",{parentName:"ol"},(0,a.yg)("p",{parentName:"li"},'\u5c55\u793a\u6307\u5b9a db \u7684\u5bfc\u51fa\u4efb\u52a1\uff0cstate \u4e3a "exporting", \u5e76\u6309 StartTime \u964d\u5e8f\u6392\u5e8f'),(0,a.yg)("pre",{parentName:"li"},(0,a.yg)("code",{parentName:"pre",className:"language-sql"},'SHOW EXPORT FROM example_db WHERE STATE = "exporting" ORDER BY StartTime DESC;\n'))),(0,a.yg)("li",{parentName:"ol"},(0,a.yg)("p",{parentName:"li"},"\u5c55\u793a\u6307\u5b9adb\uff0c\u6307\u5b9ajob_id\u7684\u5bfc\u51fa\u4efb\u52a1"),(0,a.yg)("pre",{parentName:"li"},(0,a.yg)("code",{parentName:"pre",className:"language-sql"},"  SHOW EXPORT FROM example_db WHERE ID = job_id;\n"))),(0,a.yg)("li",{parentName:"ol"},(0,a.yg)("p",{parentName:"li"},"\u5c55\u793a\u6307\u5b9adb\uff0c\u6307\u5b9alabel\u7684\u5bfc\u51fa\u4efb\u52a1"),(0,a.yg)("pre",{parentName:"li"},(0,a.yg)("code",{parentName:"pre",className:"language-sql"},' SHOW EXPORT FROM example_db WHERE LABEL = "mylabel";\n')))),(0,a.yg)("h3",{id:"keywords"},"Keywords"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre"},"SHOW, EXPORT\n")),(0,a.yg)("h3",{id:"best-practice"},"Best Practice"))}u.isMDXComponent=!0}}]);