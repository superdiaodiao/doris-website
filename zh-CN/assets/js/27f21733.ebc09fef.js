"use strict";(self.webpackChunkselectdb_portal=self.webpackChunkselectdb_portal||[]).push([[22142],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>d});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var p=a.createContext({}),c=function(e){var t=a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=c(e.components);return a.createElement(p.Provider,{value:t},e.children)},s="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},E=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,l=e.originalType,p=e.parentName,u=o(e,["components","mdxType","originalType","parentName"]),s=c(n),E=r,d=s["".concat(p,".").concat(E)]||s[E]||m[E]||l;return n?a.createElement(d,i(i({ref:t},u),{},{components:n})):a.createElement(d,i({ref:t},u))}));function d(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=n.length,i=new Array(l);i[0]=E;var o={};for(var p in t)hasOwnProperty.call(t,p)&&(o[p]=t[p]);o.originalType=e,o[s]="string"==typeof e?e:r,i[1]=o;for(var c=2;c<l;c++)i[c]=n[c];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}E.displayName="MDXCreateElement"},18155:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>i,default:()=>s,frontMatter:()=>l,metadata:()=>o,toc:()=>c});var a=n(87462),r=(n(67294),n(3905));const l={title:"DELETE",language:"zh-CN"},i=void 0,o={unversionedId:"sql-manual/sql-reference/Data-Manipulation-Statements/Manipulation/DELETE",id:"sql-manual/sql-reference/Data-Manipulation-Statements/Manipulation/DELETE",title:"DELETE",description:"\x3c!--",source:"@site/i18n/zh-CN/docusaurus-plugin-content-docs/current/sql-manual/sql-reference/Data-Manipulation-Statements/Manipulation/DELETE.md",sourceDirName:"sql-manual/sql-reference/Data-Manipulation-Statements/Manipulation",slug:"/sql-manual/sql-reference/Data-Manipulation-Statements/Manipulation/DELETE",permalink:"/zh-CN/docs/sql-manual/sql-reference/Data-Manipulation-Statements/Manipulation/DELETE",draft:!1,tags:[],version:"current",frontMatter:{title:"DELETE",language:"zh-CN"},sidebar:"docs",previous:{title:"CREATE-SYNC-JOB",permalink:"/zh-CN/docs/sql-manual/sql-reference/Data-Manipulation-Statements/Load/CREATE-SYNC-JOB"},next:{title:"INSERT",permalink:"/zh-CN/docs/sql-manual/sql-reference/Data-Manipulation-Statements/Manipulation/INSERT"}},p={},c=[{value:"DELETE",id:"delete",level:2},{value:"Name",id:"name",level:3},{value:"Description",id:"description",level:3},{value:"Example",id:"example",level:3},{value:"Keywords",id:"keywords",level:3},{value:"Best Practice",id:"best-practice",level:3}],u={toc:c};function s(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,a.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h2",{id:"delete"},"DELETE"),(0,r.kt)("h3",{id:"name"},"Name"),(0,r.kt)("p",null,"DELETE"),(0,r.kt)("h3",{id:"description"},"Description"),(0,r.kt)("p",null,"\u8be5\u8bed\u53e5\u7528\u4e8e\u6309\u6761\u4ef6\u5220\u9664\u6307\u5b9a table\uff08base index\uff09 partition \u4e2d\u7684\u6570\u636e\u3002"),(0,r.kt)("p",null,"\u8be5\u64cd\u4f5c\u4f1a\u540c\u65f6\u5220\u9664\u548c\u6b64 base index \u76f8\u5173\u7684 rollup index \u7684\u6570\u636e\u3002"),(0,r.kt)("p",null,"\u8bed\u6cd5\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-SQL"},"DELETE FROM table_name [PARTITION partition_name | PARTITIONS (p1, p2)]\nWHERE\ncolumn_name1 op { value | value_list } [ AND column_name2 op { value | value_list } ...];\n")),(0,r.kt)("p",null,"\u8bf4\u660e\uff1a"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"op \u7684\u53ef\u9009\u7c7b\u578b\u5305\u62ec\uff1a=, >, <, >=, <=, !=, in, not in"),(0,r.kt)("li",{parentName:"ol"},"\u4f7f\u7528\u805a\u5408\u7c7b\u7684\u8868\u6a21\u578b\uff08AGGREGATE\u3001UNIQUE\uff09\u53ea\u80fd\u6307\u5b9a key \u5217\u4e0a\u7684\u6761\u4ef6\u3002"),(0,r.kt)("li",{parentName:"ol"},"\u5f53\u9009\u5b9a\u7684 key \u5217\u4e0d\u5b58\u5728\u4e8e\u67d0\u4e2a rollup \u4e2d\u65f6\uff0c\u65e0\u6cd5\u8fdb\u884c delete\u3002"),(0,r.kt)("li",{parentName:"ol"},"\u6761\u4ef6\u4e4b\u95f4\u53ea\u80fd\u662f\u201c\u4e0e\u201d\u7684\u5173\u7cfb\u3002\u82e5\u5e0c\u671b\u8fbe\u6210\u201c\u6216\u201d\u7684\u5173\u7cfb\uff0c\u9700\u8981\u5c06\u6761\u4ef6\u5206\u5199\u5728\u4e24\u4e2a DELETE \u8bed\u53e5\u4e2d\u3002"),(0,r.kt)("li",{parentName:"ol"},"\u5982\u679c\u4e3a\u5206\u533a\u8868\uff0c\u53ef\u4ee5\u6307\u5b9a\u5206\u533a\uff0c\u5982\u4e0d\u6307\u5b9a\uff0c\u4e14\u4f1a\u8bdd\u53d8\u91cf delete_without_partition \u4e3a true\uff0c\u5219\u4f1a\u5e94\u7528\u5230\u6240\u6709\u5206\u533a\u3002\u5982\u679c\u662f\u5355\u5206\u533a\u8868\uff0c\u53ef\u4ee5\u4e0d\u6307\u5b9a\u3002")),(0,r.kt)("p",null,"\u6ce8\u610f\uff1a"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"\u8be5\u8bed\u53e5\u53ef\u80fd\u4f1a\u964d\u4f4e\u6267\u884c\u540e\u4e00\u6bb5\u65f6\u95f4\u5185\u7684\u67e5\u8be2\u6548\u7387\u3002"),(0,r.kt)("li",{parentName:"ol"},"\u5f71\u54cd\u7a0b\u5ea6\u53d6\u51b3\u4e8e\u8bed\u53e5\u4e2d\u6307\u5b9a\u7684\u5220\u9664\u6761\u4ef6\u7684\u6570\u91cf\u3002"),(0,r.kt)("li",{parentName:"ol"},"\u6307\u5b9a\u7684\u6761\u4ef6\u8d8a\u591a\uff0c\u5f71\u54cd\u8d8a\u5927\u3002")),(0,r.kt)("h3",{id:"example"},"Example"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"\u5220\u9664 my_table partition p1 \u4e2d k1 \u5217\u503c\u4e3a 3 \u7684\u6570\u636e\u884c"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-sql"},"DELETE FROM my_table PARTITION p1\n    WHERE k1 = 3;\n"))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},'\u5220\u9664 my_table partition p1 \u4e2d k1 \u5217\u503c\u5927\u4e8e\u7b49\u4e8e 3 \u4e14 k2 \u5217\u503c\u4e3a "abc" \u7684\u6570\u636e\u884c'),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-sql"},'DELETE FROM my_table PARTITION p1\nWHERE k1 >= 3 AND k2 = "abc";\n'))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},'\u5220\u9664 my_table partition p1, p2 \u4e2d k1 \u5217\u503c\u5927\u4e8e\u7b49\u4e8e 3 \u4e14 k2 \u5217\u503c\u4e3a "abc" \u7684\u6570\u636e\u884c'),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-sql"},'DELETE FROM my_table PARTITIONS (p1, p2)\nWHERE k1 >= 3 AND k2 = "abc";\n')))),(0,r.kt)("h3",{id:"keywords"},"Keywords"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"DELETE\n")),(0,r.kt)("h3",{id:"best-practice"},"Best Practice"))}s.isMDXComponent=!0}}]);