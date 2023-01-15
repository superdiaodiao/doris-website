"use strict";(self.webpackChunkselectdb_portal=self.webpackChunkselectdb_portal||[]).push([[92228],{3905:(e,t,n)=>{n.d(t,{Zo:()=>s,kt:()=>E});var a=n(67294);function l(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){l(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,a,l=function(e,t){if(null==e)return{};var n,a,l={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(l[n]=e[n]);return l}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(l[n]=e[n])}return l}var p=a.createContext({}),c=function(e){var t=a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},s=function(e){var t=c(e.components);return a.createElement(p.Provider,{value:t},e.children)},u="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},L=a.forwardRef((function(e,t){var n=e.components,l=e.mdxType,r=e.originalType,p=e.parentName,s=i(e,["components","mdxType","originalType","parentName"]),u=c(n),L=l,E=u["".concat(p,".").concat(L)]||u[L]||m[L]||r;return n?a.createElement(E,o(o({ref:t},s),{},{components:n})):a.createElement(E,o({ref:t},s))}));function E(e,t){var n=arguments,l=t&&t.mdxType;if("string"==typeof e||l){var r=n.length,o=new Array(r);o[0]=L;var i={};for(var p in t)hasOwnProperty.call(t,p)&&(i[p]=t[p]);i.originalType=e,i[u]="string"==typeof e?e:l,o[1]=i;for(var c=2;c<r;c++)o[c]=n[c];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}L.displayName="MDXCreateElement"},74626:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>o,default:()=>u,frontMatter:()=>r,metadata:()=>i,toc:()=>c});var a=n(87462),l=(n(67294),n(3905));const r={title:"CANCEL-ALTER-TABLE",language:"zh-CN"},o=void 0,i={unversionedId:"sql-manual/sql-reference/Data-Definition-Statements/Alter/CANCEL-ALTER-TABLE",id:"sql-manual/sql-reference/Data-Definition-Statements/Alter/CANCEL-ALTER-TABLE",title:"CANCEL-ALTER-TABLE",description:"\x3c!--",source:"@site/i18n/zh-CN/docusaurus-plugin-content-docs/current/sql-manual/sql-reference/Data-Definition-Statements/Alter/CANCEL-ALTER-TABLE.md",sourceDirName:"sql-manual/sql-reference/Data-Definition-Statements/Alter",slug:"/sql-manual/sql-reference/Data-Definition-Statements/Alter/CANCEL-ALTER-TABLE",permalink:"/zh-CN/docs/sql-manual/sql-reference/Data-Definition-Statements/Alter/CANCEL-ALTER-TABLE",draft:!1,tags:[],version:"current",frontMatter:{title:"CANCEL-ALTER-TABLE",language:"zh-CN"},sidebar:"docs",previous:{title:"ALTER-VIEW",permalink:"/zh-CN/docs/sql-manual/sql-reference/Data-Definition-Statements/Alter/ALTER-VIEW"},next:{title:"BACKUP",permalink:"/zh-CN/docs/sql-manual/sql-reference/Data-Definition-Statements/Backup-and-Restore/BACKUP"}},p={},c=[{value:"CANCEL-ALTER-TABLE",id:"cancel-alter-table",level:2},{value:"Name",id:"name",level:3},{value:"Description",id:"description",level:3},{value:"Example",id:"example",level:3},{value:"Keywords",id:"keywords",level:3},{value:"Best Practice",id:"best-practice",level:3}],s={toc:c};function u(e){let{components:t,...n}=e;return(0,l.kt)("wrapper",(0,a.Z)({},s,n,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("h2",{id:"cancel-alter-table"},"CANCEL-ALTER-TABLE"),(0,l.kt)("h3",{id:"name"},"Name"),(0,l.kt)("p",null,"CANCEL ALTER TABLE "),(0,l.kt)("h3",{id:"description"},"Description"),(0,l.kt)("p",null,"\u8be5\u8bed\u53e5\u7528\u4e8e\u64a4\u9500\u4e00\u4e2a ALTER \u64cd\u4f5c\u3002"),(0,l.kt)("ol",null,(0,l.kt)("li",{parentName:"ol"},"\u64a4\u9500 ALTER TABLE COLUMN \u64cd\u4f5c")),(0,l.kt)("p",null,"\u8bed\u6cd5\uff1a"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sql"},"CANCEL ALTER TABLE COLUMN\nFROM db_name.table_name\n")),(0,l.kt)("ol",{start:2},(0,l.kt)("li",{parentName:"ol"},"\u64a4\u9500 ALTER TABLE ROLLUP \u64cd\u4f5c")),(0,l.kt)("p",null,"\u8bed\u6cd5\uff1a"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sql"},"CANCEL ALTER TABLE ROLLUP\nFROM db_name.table_name\n")),(0,l.kt)("ol",{start:3},(0,l.kt)("li",{parentName:"ol"},"\u6839\u636ejob id\u6279\u91cf\u64a4\u9500rollup\u64cd\u4f5c")),(0,l.kt)("p",null,"\u8bed\u6cd5:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sql"},"CANCEL ALTER TABLE ROLLUP\nFROM db_name.table_name (jobid,...)\n")),(0,l.kt)("p",null,"\u6ce8\u610f\uff1a"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"\u8be5\u547d\u4ee4\u4e3a\u5f02\u6b65\u64cd\u4f5c\uff0c\u5177\u4f53\u662f\u5426\u6267\u884c\u6210\u529f\u9700\u8981\u4f7f\u7528",(0,l.kt)("inlineCode",{parentName:"li"},"show alter table rollup"),"\u67e5\u770b\u4efb\u52a1\u72b6\u6001\u786e\u8ba4")),(0,l.kt)("ol",{start:4},(0,l.kt)("li",{parentName:"ol"},"\u64a4\u9500 ALTER CLUSTER \u64cd\u4f5c")),(0,l.kt)("p",null,"\u8bed\u6cd5\uff1a"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"\uff08\u5f85\u5b9e\u73b0...\uff09\n")),(0,l.kt)("h3",{id:"example"},"Example"),(0,l.kt)("ol",null,(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("p",{parentName:"li"},"\u64a4\u9500\u9488\u5bf9 my_table \u7684 ALTER COLUMN \u64cd\u4f5c\u3002"),(0,l.kt)("p",{parentName:"li"},"[CANCEL ALTER TABLE COLUMN]"))),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sql"},"CANCEL ALTER TABLE COLUMN\nFROM example_db.my_table;\n")),(0,l.kt)("ol",null,(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("p",{parentName:"li"},"\u64a4\u9500 my_table \u4e0b\u7684 ADD ROLLUP \u64cd\u4f5c\u3002"),(0,l.kt)("p",{parentName:"li"},"[CANCEL ALTER TABLE ROLLUP]"))),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sql"},"CANCEL ALTER TABLE ROLLUP\nFROM example_db.my_table;\n")),(0,l.kt)("ol",null,(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("p",{parentName:"li"},"\u6839\u636ejob id\u64a4\u9500 my_table \u4e0b\u7684 ADD ROLLUP \u64cd\u4f5c\u3002"),(0,l.kt)("p",{parentName:"li"},"[CANCEL ALTER TABLE ROLLUP]"))),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sql"},"CANCEL ALTER TABLE ROLLUP\nFROM example_db.my_table (12801,12802);\n")),(0,l.kt)("h3",{id:"keywords"},"Keywords"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"CANCEL, ALTER, TABLE, CANCEL ALTER\n")),(0,l.kt)("h3",{id:"best-practice"},"Best Practice"))}u.isMDXComponent=!0}}]);