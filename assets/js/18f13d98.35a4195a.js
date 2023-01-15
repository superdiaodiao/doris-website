"use strict";(self.webpackChunkselectdb_portal=self.webpackChunkselectdb_portal||[]).push([[54336],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>E});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=r.createContext({}),c=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},p=function(e){var t=c(e.components);return r.createElement(s.Provider,{value:t},e.children)},m="mdxType",L={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,l=e.originalType,s=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),m=c(n),u=a,E=m["".concat(s,".").concat(u)]||m[u]||L[u]||l;return n?r.createElement(E,o(o({ref:t},p),{},{components:n})):r.createElement(E,o({ref:t},p))}));function E(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=n.length,o=new Array(l);o[0]=u;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i[m]="string"==typeof e?e:a,o[1]=i;for(var c=2;c<l;c++)o[c]=n[c];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}u.displayName="MDXCreateElement"},76655:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>o,default:()=>m,frontMatter:()=>l,metadata:()=>i,toc:()=>c});var r=n(87462),a=(n(67294),n(3905));const l={title:"CANCEL ALTER",language:"en"},o=void 0,i={unversionedId:"sql-reference/sql-statements/Data-Definition/CANCEL-ALTER",id:"version-0.15/sql-reference/sql-statements/Data-Definition/CANCEL-ALTER",title:"CANCEL ALTER",description:"\x3c!--",source:"@site/versioned_docs/version-0.15/sql-reference/sql-statements/Data-Definition/CANCEL-ALTER.md",sourceDirName:"sql-reference/sql-statements/Data-Definition",slug:"/sql-reference/sql-statements/Data-Definition/CANCEL-ALTER",permalink:"/docs/0.15/sql-reference/sql-statements/Data-Definition/CANCEL-ALTER",draft:!1,tags:[],version:"0.15",frontMatter:{title:"CANCEL ALTER",language:"en"},sidebar:"docs",previous:{title:"BACKUP",permalink:"/docs/0.15/sql-reference/sql-statements/Data-Definition/BACKUP"},next:{title:"CANCEL BACKUP",permalink:"/docs/0.15/sql-reference/sql-statements/Data-Definition/CANCEL-BACKUP"}},s={},c=[{value:"Description",id:"description",level:2},{value:"example",id:"example",level:2},{value:"keyword",id:"keyword",level:2}],p={toc:c};function m(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"cancel-alter"},"CANCEL ALTER"),(0,a.kt)("h2",{id:"description"},"Description"),(0,a.kt)("p",null,"This statement is used to undo an ALTER operation."),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"\u64a4\u9500 ALTER TABLE COLUMN \u64cd\u4f5c\nGrammar:\nCANCEL ALTER TABLE COLUMN\nFROM db_name.table_name")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"\u64a4\u9500 ALTER TABLE ROLLUP \u64cd\u4f5c\nGrammar:\nCANCEL ALTER TABLE ROLLUP\nFROM db_name.table_name")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"batch cancel rollup by job id\nGrammar:\nCANCEL ALTER TABLE ROLLUP\nFROM db_name.table_name (jobid,...)\nNote:\nBatch cancel rollup job is an async operation, use ",(0,a.kt)("inlineCode",{parentName:"p"},"show alter table rollup")," to see whether it executes successfully")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"OTHER CLUSTER\nGrammar:\n(To be realized..."))),(0,a.kt)("h2",{id:"example"},"example"),(0,a.kt)("p",null,"[CANCEL ALTER TABLE COLUMN]"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"\u64a4\u9500\u9488\u5bf9 my_table \u7684 ALTER COLUMN \u64cd\u4f5c\u3002\nCANCEL ALTER TABLE COLUMN\nFROM example_db.my_table;")),(0,a.kt)("p",null,"[CANCEL ALTER TABLE ROLLUP]"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"\u64a4\u9500 my_table \u4e0b\u7684 ADD ROLLUP \u64cd\u4f5c\u3002\nCANCEL ALTER TABLE ROLLUP\nFROM example_db.my_table;")),(0,a.kt)("p",null,"[CANCEL ALTER TABLE ROLLUP]"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"cancel rollup alter job by job id\nCANCEL ALTER TABLE ROLLUP\nFROM example_db.my_table (12801,12802);")),(0,a.kt)("h2",{id:"keyword"},"keyword"),(0,a.kt)("p",null,"CANCEL,ALTER,TABLE,COLUMN,ROLLUP"))}m.isMDXComponent=!0}}]);