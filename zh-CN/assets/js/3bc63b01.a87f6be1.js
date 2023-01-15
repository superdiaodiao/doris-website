"use strict";(self.webpackChunkselectdb_portal=self.webpackChunkselectdb_portal||[]).push([[10784],{3905:(e,t,a)=>{a.d(t,{Zo:()=>c,kt:()=>k});var n=a(67294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function l(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?l(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function p(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},l=Object.keys(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var m=n.createContext({}),o=function(e){var t=n.useContext(m),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},c=function(e){var t=o(e.components);return n.createElement(m.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},s=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,l=e.originalType,m=e.parentName,c=p(e,["components","mdxType","originalType","parentName"]),u=o(a),s=r,k=u["".concat(m,".").concat(s)]||u[s]||d[s]||l;return a?n.createElement(k,i(i({ref:t},c),{},{components:a})):n.createElement(k,i({ref:t},c))}));function k(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=a.length,i=new Array(l);i[0]=s;var p={};for(var m in t)hasOwnProperty.call(t,m)&&(p[m]=t[m]);p.originalType=e,p[u]="string"==typeof e?e:r,i[1]=p;for(var o=2;o<l;o++)i[o]=a[o];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}s.displayName="MDXCreateElement"},1031:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>m,contentTitle:()=>i,default:()=>u,frontMatter:()=>l,metadata:()=>p,toc:()=>o});var n=a(87462),r=(a(67294),a(3905));const l={title:"Bitmap \u7d22\u5f15",language:"zh-CN"},i=void 0,p={unversionedId:"administrator-guide/alter-table/alter-table-bitmap-index",id:"version-0.15/administrator-guide/alter-table/alter-table-bitmap-index",title:"Bitmap \u7d22\u5f15",description:"\x3c!--",source:"@site/i18n/zh-CN/docusaurus-plugin-content-docs/version-0.15/administrator-guide/alter-table/alter-table-bitmap-index.md",sourceDirName:"administrator-guide/alter-table",slug:"/administrator-guide/alter-table/alter-table-bitmap-index",permalink:"/zh-CN/docs/0.15/administrator-guide/alter-table/alter-table-bitmap-index",draft:!1,tags:[],version:"0.15",frontMatter:{title:"Bitmap \u7d22\u5f15",language:"zh-CN"},sidebar:"docs",previous:{title:"\u5bfc\u5165 Json \u683c\u5f0f\u6570\u636e",permalink:"/zh-CN/docs/0.15/administrator-guide/load-data/load-json-format"},next:{title:"\u66ff\u6362\u8868",permalink:"/zh-CN/docs/0.15/administrator-guide/alter-table/alter-table-replace-table"}},m={},o=[{value:"\u540d\u8bcd\u89e3\u91ca",id:"\u540d\u8bcd\u89e3\u91ca",level:2},{value:"\u539f\u7406\u4ecb\u7ecd",id:"\u539f\u7406\u4ecb\u7ecd",level:2},{value:"\u8bed\u6cd5",id:"\u8bed\u6cd5",level:2},{value:"\u521b\u5efa\u4f5c\u4e1a",id:"\u521b\u5efa\u4f5c\u4e1a",level:2},{value:"\u67e5\u770b\u4f5c\u4e1a",id:"\u67e5\u770b\u4f5c\u4e1a",level:2},{value:"\u53d6\u6d88\u4f5c\u4e1a",id:"\u53d6\u6d88\u4f5c\u4e1a",level:2},{value:"\u6ce8\u610f\u4e8b\u9879",id:"\u6ce8\u610f\u4e8b\u9879",level:2}],c={toc:o};function u(e){let{components:t,...a}=e;return(0,r.kt)("wrapper",(0,n.Z)({},c,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"bitmap-\u7d22\u5f15"},"Bitmap \u7d22\u5f15"),(0,r.kt)("p",null,"\u7528\u6237\u53ef\u4ee5\u901a\u8fc7\u521b\u5efabitmap index \u52a0\u901f\u67e5\u8be2\n\u672c\u6587\u6863\u4e3b\u8981\u4ecb\u7ecd\u5982\u4f55\u521b\u5efa index \u4f5c\u4e1a\uff0c\u4ee5\u53ca\u521b\u5efa index \u7684\u4e00\u4e9b\u6ce8\u610f\u4e8b\u9879\u548c\u5e38\u89c1\u95ee\u9898\u3002"),(0,r.kt)("h2",{id:"\u540d\u8bcd\u89e3\u91ca"},"\u540d\u8bcd\u89e3\u91ca"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"bitmap index\uff1a\u4f4d\u56fe\u7d22\u5f15\uff0c\u662f\u4e00\u79cd\u5feb\u901f\u6570\u636e\u7ed3\u6784\uff0c\u80fd\u591f\u52a0\u5feb\u67e5\u8be2\u901f\u5ea6")),(0,r.kt)("h2",{id:"\u539f\u7406\u4ecb\u7ecd"},"\u539f\u7406\u4ecb\u7ecd"),(0,r.kt)("p",null,"\u521b\u5efa\u548c\u5220\u9664\u672c\u8d28\u4e0a\u662f\u4e00\u4e2a schema change \u7684\u4f5c\u4e1a\uff0c\u5177\u4f53\u7ec6\u8282\u53ef\u4ee5\u53c2\u7167 ",(0,r.kt)("a",{parentName:"p",href:"../alter-table-schema-change"},"Schema Change"),"\u3002"),(0,r.kt)("h2",{id:"\u8bed\u6cd5"},"\u8bed\u6cd5"),(0,r.kt)("p",null,"index \u521b\u5efa\u548c\u4fee\u6539\u76f8\u5173\u8bed\u6cd5\u6709\u4e24\u79cd\u5f62\u5f0f\uff0c\u4e00\u79cd\u96c6\u6210\u4e0e alter table \u8bed\u53e5\u4e2d\uff0c\u53e6\u4e00\u79cd\u662f\u4f7f\u7528\u5355\u72ec\u7684\ncreate/drop index \u8bed\u6cd5"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"\u521b\u5efa\u7d22\u5f15"),(0,r.kt)("p",{parentName:"li"},"\u521b\u5efa\u7d22\u5f15\u7684\u7684\u8bed\u6cd5\u53ef\u4ee5\u53c2\u89c1 ",(0,r.kt)("a",{parentName:"p",href:"../../../sql-reference/sql-statements/Data-Definition/CREATE-INDEX"},"CREATE INDEX"),"\n\u6216 ",(0,r.kt)("a",{parentName:"p",href:"../../../sql-reference/sql-statements/Data-Definition/ALTER-TABLE"},"ALTER TABLE")," \u4e2dbitmap \u7d22\u5f15\u76f8\u5173\u7684\u64cd\u4f5c,\n\u4e5f\u53ef\u4ee5\u901a\u8fc7\u5728\u521b\u5efa\u8868\u65f6\u6307\u5b9abitmap \u7d22\u5f15\uff0c\u53c2\u89c1",(0,r.kt)("a",{parentName:"p",href:"../../../sql-reference/sql-statements/Data-Definition/CREATE-TABLE"},"CREATE TABLE"))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"\u67e5\u770b\u7d22\u5f15"),(0,r.kt)("p",{parentName:"li"},"\u53c2\u7167",(0,r.kt)("a",{parentName:"p",href:"../../../sql-reference/sql-statements/Administration/SHOW-INDEX"},"SHOW INDEX"))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"\u5220\u9664\u7d22\u5f15"),(0,r.kt)("p",{parentName:"li"},"\u53c2\u7167",(0,r.kt)("a",{parentName:"p",href:"../../../sql-reference/sql-statements/Data-Definition/DROP-INDEX"},"DROP INDEX"),"\n\u6216\u8005 ",(0,r.kt)("a",{parentName:"p",href:"../../../sql-reference/sql-statements/Data-Definition/ALTER-TABLE"},"ALTER TABLE")," \u4e2dbitmap \u7d22\u5f15\u76f8\u5173\u7684\u64cd\u4f5c"))),(0,r.kt)("h2",{id:"\u521b\u5efa\u4f5c\u4e1a"},"\u521b\u5efa\u4f5c\u4e1a"),(0,r.kt)("p",null,"\u53c2\u7167 schema change \u6587\u6863 ",(0,r.kt)("a",{parentName:"p",href:"../alter-table-schema-change"},"Schema Change")),(0,r.kt)("h2",{id:"\u67e5\u770b\u4f5c\u4e1a"},"\u67e5\u770b\u4f5c\u4e1a"),(0,r.kt)("p",null,"\u53c2\u7167 schema change \u6587\u6863 ",(0,r.kt)("a",{parentName:"p",href:"../alter-table-schema-change"},"Schema Change")),(0,r.kt)("h2",{id:"\u53d6\u6d88\u4f5c\u4e1a"},"\u53d6\u6d88\u4f5c\u4e1a"),(0,r.kt)("p",null,"\u53c2\u7167 schema change \u6587\u6863 ",(0,r.kt)("a",{parentName:"p",href:"../alter-table-schema-change"},"Schema Change")),(0,r.kt)("h2",{id:"\u6ce8\u610f\u4e8b\u9879"},"\u6ce8\u610f\u4e8b\u9879"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"\u76ee\u524d\u7d22\u5f15\u4ec5\u652f\u6301 bitmap \u7c7b\u578b\u7684\u7d22\u5f15\u3002 ")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"bitmap \u7d22\u5f15\u4ec5\u5728\u5355\u5217\u4e0a\u521b\u5efa\u3002")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"bitmap \u7d22\u5f15\u80fd\u591f\u5e94\u7528\u5728 ",(0,r.kt)("inlineCode",{parentName:"p"},"Duplicate")," \u6570\u636e\u6a21\u578b\u7684\u6240\u6709\u5217\u548c ",(0,r.kt)("inlineCode",{parentName:"p"},"Aggregate"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"Uniq")," \u6a21\u578b\u7684key\u5217\u4e0a\u3002")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"bitmap \u7d22\u5f15\u652f\u6301\u7684\u6570\u636e\u7c7b\u578b\u5982\u4e0b:"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"TINYINT")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"SMALLINT")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"INT")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"UNSIGNEDINT")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"BIGINT")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"CHAR")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"VARCHAR")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"DATE")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"DATETIME")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"LARGEINT")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"DECIMAL")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"BOOL")))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"bitmap\u7d22\u5f15\u4ec5\u5728 Segment V2 \u4e0b\u751f\u6548\u3002\u5f53\u521b\u5efa index \u65f6\uff0c\u8868\u7684\u5b58\u50a8\u683c\u5f0f\u5c06\u9ed8\u8ba4\u8f6c\u6362\u4e3a V2 \u683c\u5f0f\u3002"))))}u.isMDXComponent=!0}}]);