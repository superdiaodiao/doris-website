"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([[81799],{15680:(e,t,a)=>{a.d(t,{xA:()=>c,yg:()=>y});var n=a(96540);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function l(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?l(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function i(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},l=Object.keys(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var p=n.createContext({}),s=function(e){var t=n.useContext(p),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},c=function(e){var t=s(e.components);return n.createElement(p.Provider,{value:t},e.children)},u="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,l=e.originalType,p=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),u=s(a),d=r,y=u["".concat(p,".").concat(d)]||u[d]||m[d]||l;return a?n.createElement(y,o(o({ref:t},c),{},{components:a})):n.createElement(y,o({ref:t},c))}));function y(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=a.length,o=new Array(l);o[0]=d;var i={};for(var p in t)hasOwnProperty.call(t,p)&&(i[p]=t[p]);i.originalType=e,i[u]="string"==typeof e?e:r,o[1]=i;for(var s=2;s<l;s++)o[s]=a[s];return n.createElement.apply(null,o)}return n.createElement.apply(null,a)}d.displayName="MDXCreateElement"},38937:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>p,contentTitle:()=>o,default:()=>m,frontMatter:()=>l,metadata:()=>i,toc:()=>s});var n=a(58168),r=(a(96540),a(15680));const l={title:"CANCEL-EXPORT",language:"en"},o=void 0,i={unversionedId:"sql-manual/sql-reference/Data-Manipulation-Statements/Manipulation/CANCEL-EXPORT",id:"version-1.2/sql-manual/sql-reference/Data-Manipulation-Statements/Manipulation/CANCEL-EXPORT",title:"CANCEL-EXPORT",description:"\x3c!--",source:"@site/versioned_docs/version-1.2/sql-manual/sql-reference/Data-Manipulation-Statements/Manipulation/CANCEL-EXPORT.md",sourceDirName:"sql-manual/sql-reference/Data-Manipulation-Statements/Manipulation",slug:"/sql-manual/sql-reference/Data-Manipulation-Statements/Manipulation/CANCEL-EXPORT",permalink:"/docs/1.2/sql-manual/sql-reference/Data-Manipulation-Statements/Manipulation/CANCEL-EXPORT",draft:!1,tags:[],version:"1.2",frontMatter:{title:"CANCEL-EXPORT",language:"en"},sidebar:"docs",previous:{title:"EXPORT",permalink:"/docs/1.2/sql-manual/sql-reference/Data-Manipulation-Statements/Manipulation/EXPORT"},next:{title:"OUTFILE",permalink:"/docs/1.2/sql-manual/sql-reference/Data-Manipulation-Statements/OUTFILE"}},p={},s=[{value:"CANCEL-EXPORT",id:"cancel-export",level:2},{value:"Name",id:"name",level:3},{value:"Description",id:"description",level:3},{value:"Example",id:"example",level:3},{value:"Keywords",id:"keywords",level:3},{value:"Best Practice",id:"best-practice",level:3}],c={toc:s},u="wrapper";function m(e){let{components:t,...a}=e;return(0,r.yg)(u,(0,n.A)({},c,a,{components:t,mdxType:"MDXLayout"}),(0,r.yg)("h2",{id:"cancel-export"},"CANCEL-EXPORT"),(0,r.yg)("h3",{id:"name"},"Name"),(0,r.yg)("version",{since:"1.2.2"}),(0,r.yg)("p",null,"CANCEL EXPORT "),(0,r.yg)("h3",{id:"description"},"Description"),(0,r.yg)("p",null,"This statement is used to undo an export job for the specified label. Or batch undo export jobs via fuzzy matching"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-sql"},'CANCEL EXPORT \n[FROM db_name]\nWHERE [LABEL = "export_label" | LABEL like "label_pattern" | STATE = "PENDING/IN_QUEUE/EXPORTING"]\n')),(0,r.yg)("h3",{id:"example"},"Example"),(0,r.yg)("ol",null,(0,r.yg)("li",{parentName:"ol"},(0,r.yg)("p",{parentName:"li"},"Cancel the export job whose label is ",(0,r.yg)("inlineCode",{parentName:"p"},"example_db_test_export_label")," on the database example_db"),(0,r.yg)("pre",{parentName:"li"},(0,r.yg)("code",{parentName:"pre",className:"language-sql"},'CANCEL EXPORT\nFROM example_db\nWHERE LABEL = "example_db_test_export_label" and STATE = "EXPORTING";\n'))),(0,r.yg)("li",{parentName:"ol"},(0,r.yg)("p",{parentName:"li"},"Cancel all export jobs containing example",(0,r.yg)("em",{parentName:"p"}," on the database example"),"db."),(0,r.yg)("pre",{parentName:"li"},(0,r.yg)("code",{parentName:"pre",className:"language-sql"},'CANCEL EXPORT\nFROM example_db\nWHERE LABEL like "%example%";\n'))),(0,r.yg)("li",{parentName:"ol"},(0,r.yg)("p",{parentName:"li"},'Cancel all export jobs which state are "PENDING"'),(0,r.yg)("pre",{parentName:"li"},(0,r.yg)("code",{parentName:"pre",className:"language-sql"},'CANCEL EXPORT\nFROM example_db\nWHERE STATE = "PENDING";\n')))),(0,r.yg)("h3",{id:"keywords"},"Keywords"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre"}," CANCEL, EXPORT\n")),(0,r.yg)("h3",{id:"best-practice"},"Best Practice"),(0,r.yg)("ol",null,(0,r.yg)("li",{parentName:"ol"},"Only pending export jobs in PENDING, IN_QUEUE,EXPORTING state can be canceled."),(0,r.yg)("li",{parentName:"ol"},"When performing batch undo, Doris does not guarantee the atomic undo of all corresponding export jobs. That is, it is possible that only some of the export jobs were successfully undone. The user can view the job status through the SHOW EXPORT statement and try to execute the CANCEL EXPORT statement repeatedly."),(0,r.yg)("li",{parentName:"ol"},"When the job of the ",(0,r.yg)("inlineCode",{parentName:"li"},"EXPORTING")," state is revoked, part of the data may have been exported to the storage system, and the user needs to process (delete) this section to export data.")))}m.isMDXComponent=!0}}]);