"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([[90904],{15680:(e,a,l)=>{l.d(a,{xA:()=>m,yg:()=>d});var t=l(96540);function n(e,a,l){return a in e?Object.defineProperty(e,a,{value:l,enumerable:!0,configurable:!0,writable:!0}):e[a]=l,e}function r(e,a){var l=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);a&&(t=t.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),l.push.apply(l,t)}return l}function o(e){for(var a=1;a<arguments.length;a++){var l=null!=arguments[a]?arguments[a]:{};a%2?r(Object(l),!0).forEach((function(a){n(e,a,l[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(l)):r(Object(l)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(l,a))}))}return e}function i(e,a){if(null==e)return{};var l,t,n=function(e,a){if(null==e)return{};var l,t,n={},r=Object.keys(e);for(t=0;t<r.length;t++)l=r[t],a.indexOf(l)>=0||(n[l]=e[l]);return n}(e,a);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(t=0;t<r.length;t++)l=r[t],a.indexOf(l)>=0||Object.prototype.propertyIsEnumerable.call(e,l)&&(n[l]=e[l])}return n}var p=t.createContext({}),s=function(e){var a=t.useContext(p),l=a;return e&&(l="function"==typeof e?e(a):o(o({},a),e)),l},m=function(e){var a=s(e.components);return t.createElement(p.Provider,{value:a},e.children)},u="mdxType",c={inlineCode:"code",wrapper:function(e){var a=e.children;return t.createElement(t.Fragment,{},a)}},g=t.forwardRef((function(e,a){var l=e.components,n=e.mdxType,r=e.originalType,p=e.parentName,m=i(e,["components","mdxType","originalType","parentName"]),u=s(l),g=n,d=u["".concat(p,".").concat(g)]||u[g]||c[g]||r;return l?t.createElement(d,o(o({ref:a},m),{},{components:l})):t.createElement(d,o({ref:a},m))}));function d(e,a){var l=arguments,n=a&&a.mdxType;if("string"==typeof e||n){var r=l.length,o=new Array(r);o[0]=g;var i={};for(var p in a)hasOwnProperty.call(a,p)&&(i[p]=a[p]);i.originalType=e,i[u]="string"==typeof e?e:n,o[1]=i;for(var s=2;s<r;s++)o[s]=l[s];return t.createElement.apply(null,o)}return t.createElement.apply(null,l)}g.displayName="MDXCreateElement"},1658:(e,a,l)=>{l.r(a),l.d(a,{assets:()=>p,contentTitle:()=>o,default:()=>c,frontMatter:()=>r,metadata:()=>i,toc:()=>s});var t=l(58168),n=(l(96540),l(15680));const r={title:"ALTER-TABLE-ROLLUP",language:"en"},o=void 0,i={unversionedId:"sql-manual/sql-reference/Data-Definition-Statements/Alter/ALTER-TABLE-ROLLUP",id:"sql-manual/sql-reference/Data-Definition-Statements/Alter/ALTER-TABLE-ROLLUP",title:"ALTER-TABLE-ROLLUP",description:"\x3c!--",source:"@site/docs/sql-manual/sql-reference/Data-Definition-Statements/Alter/ALTER-TABLE-ROLLUP.md",sourceDirName:"sql-manual/sql-reference/Data-Definition-Statements/Alter",slug:"/sql-manual/sql-reference/Data-Definition-Statements/Alter/ALTER-TABLE-ROLLUP",permalink:"/docs/dev/sql-manual/sql-reference/Data-Definition-Statements/Alter/ALTER-TABLE-ROLLUP",draft:!1,tags:[],version:"current",frontMatter:{title:"ALTER-TABLE-ROLLUP",language:"en"},sidebar:"docs",previous:{title:"ALTER-TABLE-PARTITION",permalink:"/docs/dev/sql-manual/sql-reference/Data-Definition-Statements/Alter/ALTER-TABLE-PARTITION"},next:{title:"ALTER-TABLE-RENAME",permalink:"/docs/dev/sql-manual/sql-reference/Data-Definition-Statements/Alter/ALTER-TABLE-RENAME"}},p={},s=[{value:"ALTER-TABLE-ROLLUP",id:"alter-table-rollup",level:2},{value:"Name",id:"name",level:3},{value:"Description",id:"description",level:3},{value:"Example",id:"example",level:3},{value:"Best Practice",id:"best-practice",level:3}],m={toc:s},u="wrapper";function c(e){let{components:a,...l}=e;return(0,n.yg)(u,(0,t.A)({},m,l,{components:a,mdxType:"MDXLayout"}),(0,n.yg)("h2",{id:"alter-table-rollup"},"ALTER-TABLE-ROLLUP"),(0,n.yg)("h3",{id:"name"},"Name"),(0,n.yg)("p",null,"ALTER TABLE ROLLUP"),(0,n.yg)("h3",{id:"description"},"Description"),(0,n.yg)("p",null,"This statement is used to perform a rollup modification operation on an existing table. The rollup is an asynchronous operation, and the task is returned when the task is submitted successfully. After that, you can use the ",(0,n.yg)("a",{parentName:"p",href:"/docs/dev/sql-manual/sql-reference/Show-Statements/SHOW-ALTER"},"SHOW ALTER")," command to view the progress."),(0,n.yg)("p",null,"grammar:"),(0,n.yg)("pre",null,(0,n.yg)("code",{parentName:"pre",className:"language-sql"},"ALTER TABLE [database.]table alter_clause;\n")),(0,n.yg)("p",null,"The alter_clause of rollup supports the following creation methods"),(0,n.yg)("ol",null,(0,n.yg)("li",{parentName:"ol"},"Create a rollup index")),(0,n.yg)("p",null,"grammar:"),(0,n.yg)("pre",null,(0,n.yg)("code",{parentName:"pre",className:"language-sql"},'ADD ROLLUP rollup_name (column_name1, column_name2, ...)\n[FROM from_index_name]\n[PROPERTIES ("key"="value", ...)]\n')),(0,n.yg)("p",null,"properties: Support setting timeout time, the default timeout time is 1 day."),(0,n.yg)("ol",{start:2},(0,n.yg)("li",{parentName:"ol"},"Create rollup indexes in batches")),(0,n.yg)("p",null,"grammar:"),(0,n.yg)("pre",null,(0,n.yg)("code",{parentName:"pre",className:"language-sql"},'ADD ROLLUP [rollup_name (column_name1, column_name2, ...)\n                    [FROM from_index_name]\n                    [PROPERTIES ("key"="value", ...)],...]\n')),(0,n.yg)("p",null,"Notice:"),(0,n.yg)("ul",null,(0,n.yg)("li",{parentName:"ul"},"If from_index_name is not specified, it will be created from base index by default"),(0,n.yg)("li",{parentName:"ul"},"Columns in rollup table must be columns already in from_index"),(0,n.yg)("li",{parentName:"ul"},"In properties, the storage format can be specified. For details, see ",(0,n.yg)("a",{parentName:"li",href:"/docs/dev/sql-manual/sql-reference/Data-Definition-Statements/Create/CREATE-TABLE"},"CREATE TABLE"))),(0,n.yg)("ol",{start:3},(0,n.yg)("li",{parentName:"ol"},(0,n.yg)("p",{parentName:"li"},"Delete rollup index"),(0,n.yg)("p",{parentName:"li"},"grammar:"))),(0,n.yg)("pre",null,(0,n.yg)("code",{parentName:"pre",className:"language-sql"},'DROP ROLLUP rollup_name [PROPERTIES ("key"="value", ...)]\n')),(0,n.yg)("ol",{start:4},(0,n.yg)("li",{parentName:"ol"},"Batch delete rollup index")),(0,n.yg)("p",null,"grammar:"),(0,n.yg)("pre",null,(0,n.yg)("code",{parentName:"pre",className:"language-sql"},'DROP ROLLUP [rollup_name [PROPERTIES ("key"="value", ...)],...]\n')),(0,n.yg)("p",null,"Notice:"),(0,n.yg)("ul",null,(0,n.yg)("li",{parentName:"ul"},"cannot delete base index")),(0,n.yg)("h3",{id:"example"},"Example"),(0,n.yg)("ol",null,(0,n.yg)("li",{parentName:"ol"},"Create index: example_rollup_index, based on base index (k1,k2,k3,v1,v2). Columnar storage.")),(0,n.yg)("pre",null,(0,n.yg)("code",{parentName:"pre",className:"language-sql"},"ALTER TABLE example_db.my_table\nADD ROLLUP example_rollup_index(k1, k3, v1, v2);\n")),(0,n.yg)("ol",{start:2},(0,n.yg)("li",{parentName:"ol"},"Create index: example_rollup_index2, based on example_rollup_index (k1,k3,v1,v2)")),(0,n.yg)("pre",null,(0,n.yg)("code",{parentName:"pre",className:"language-sql"},"ALTER TABLE example_db.my_table\nADD ROLLUP example_rollup_index2 (k1, v1)\nFROM example_rollup_index;\n")),(0,n.yg)("ol",{start:3},(0,n.yg)("li",{parentName:"ol"},"Create index: example_rollup_index3, based on base index (k1,k2,k3,v1), with a custom rollup timeout of one hour.")),(0,n.yg)("pre",null,(0,n.yg)("code",{parentName:"pre",className:"language-sql"},'ALTER TABLE example_db.my_table\nADD ROLLUP example_rollup_index(k1, k3, v1)\nPROPERTIES("timeout" = "3600");\n')),(0,n.yg)("ol",{start:4},(0,n.yg)("li",{parentName:"ol"},"Delete index: example_rollup_index2")),(0,n.yg)("pre",null,(0,n.yg)("code",{parentName:"pre",className:"language-sql"},"ALTER TABLE example_db.my_table\nDROP ROLLUP example_rollup_index2;\n")),(0,n.yg)("ol",{start:5},(0,n.yg)("li",{parentName:"ol"},"Batch Delete rollup index")),(0,n.yg)("pre",null,(0,n.yg)("code",{parentName:"pre",className:"language-sql"},"ALTER TABLE example_db.my_table\nDROP ROLLUP example_rollup_index2,example_rollup_index3;\n")),(0,n.yg)("h3",{id:""}),(0,n.yg)("ol",{start:4},(0,n.yg)("li",{parentName:"ol"},"Keywords")),(0,n.yg)("pre",null,(0,n.yg)("code",{parentName:"pre",className:"language-text"},"ALTER, TABLE, ROLLUP, ALTER TABLE\n")),(0,n.yg)("h3",{id:"best-practice"},"Best Practice"))}c.isMDXComponent=!0}}]);