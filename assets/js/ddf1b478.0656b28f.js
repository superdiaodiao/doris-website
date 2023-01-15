"use strict";(self.webpackChunkselectdb_portal=self.webpackChunkselectdb_portal||[]).push([[56544],{3905:(e,t,a)=>{a.d(t,{Zo:()=>p,kt:()=>b});var n=a(67294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function l(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?l(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function o(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},l=Object.keys(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var s=n.createContext({}),m=function(e){var t=n.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},p=function(e){var t=m(e.components);return n.createElement(s.Provider,{value:t},e.children)},c="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,l=e.originalType,s=e.parentName,p=o(e,["components","mdxType","originalType","parentName"]),c=m(a),d=r,b=c["".concat(s,".").concat(d)]||c[d]||u[d]||l;return a?n.createElement(b,i(i({ref:t},p),{},{components:a})):n.createElement(b,i({ref:t},p))}));function b(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=a.length,i=new Array(l);i[0]=d;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o[c]="string"==typeof e?e:r,i[1]=o;for(var m=2;m<l;m++)i[m]=a[m];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}d.displayName="MDXCreateElement"},41100:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>c,frontMatter:()=>l,metadata:()=>o,toc:()=>m});var n=a(87462),r=(a(67294),a(3905));const l={title:"SET-VARIABLE",language:"en"},i=void 0,o={unversionedId:"sql-manual/sql-reference/Database-Administration-Statements/SET-VARIABLE",id:"sql-manual/sql-reference/Database-Administration-Statements/SET-VARIABLE",title:"SET-VARIABLE",description:"\x3c!--",source:"@site/docs/sql-manual/sql-reference/Database-Administration-Statements/SET-VARIABLE.md",sourceDirName:"sql-manual/sql-reference/Database-Administration-Statements",slug:"/sql-manual/sql-reference/Database-Administration-Statements/SET-VARIABLE",permalink:"/docs/sql-manual/sql-reference/Database-Administration-Statements/SET-VARIABLE",draft:!1,tags:[],version:"current",frontMatter:{title:"SET-VARIABLE",language:"en"},sidebar:"docs",previous:{title:"RECOVER",permalink:"/docs/sql-manual/sql-reference/Database-Administration-Statements/RECOVER"},next:{title:"UNINSTALL-PLUGIN",permalink:"/docs/sql-manual/sql-reference/Database-Administration-Statements/UNINSTALL-PLUGIN"}},s={},m=[{value:"SET-VARIABLE",id:"set-variable",level:2},{value:"Name",id:"name",level:3},{value:"Description",id:"description",level:3},{value:"Example",id:"example",level:3},{value:"Keywords",id:"keywords",level:3},{value:"Best Practice",id:"best-practice",level:3}],p={toc:m};function c(e){let{components:t,...a}=e;return(0,r.kt)("wrapper",(0,n.Z)({},p,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h2",{id:"set-variable"},"SET-VARIABLE"),(0,r.kt)("h3",{id:"name"},"Name"),(0,r.kt)("p",null,"SET VARIABLE"),(0,r.kt)("h3",{id:"description"},"Description"),(0,r.kt)("p",null,"This statement is mainly used to modify Doris system variables. These system variables can be modified at the global and session level, and some can also be modified dynamically. You can also view these system variables with ",(0,r.kt)("inlineCode",{parentName:"p"},"SHOW VARIABLE"),"."),(0,r.kt)("p",null,"grammar:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sql"},"SET variable_assignment [, variable_assignment] ...\n")),(0,r.kt)("p",null,"illustrate:"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"variable_assignment:\nuser_var_name = expr\n| ","[GLOBAL | SESSION]"," system_var_name = expr")),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"Note:"),(0,r.kt)("ol",{parentName:"blockquote"},(0,r.kt)("li",{parentName:"ol"},"Only ADMIN users can set variables to take effect globally"),(0,r.kt)("li",{parentName:"ol"},"The globally effective variable does not affect the variable value of the current session, but only affects the variable in the new session."))),(0,r.kt)("p",null,"Variables that support both the current session and the global effect include:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"time_zone")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"wait_timeout")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"sql_mode")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"enable_profile")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"query_timeout")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"exec_mem_limit")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"batch_size")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"allow_partition_column_nullable")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"insert_visible_timeout_ms")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"enable_fold_constant_by_be"))),(0,r.kt)("p",null,"Variables that only support global effects include:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"default_rowset_type"))),(0,r.kt)("h3",{id:"example"},"Example"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Set the time zone to Dongba District"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre"},'SET time_zone = "Asia/Shanghai";\n'))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Set the global execution memory size"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre"},"SET GLOBAL exec_mem_limit = 137438953472\n")))),(0,r.kt)("h3",{id:"keywords"},"Keywords"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"SET, VARIABLE\n")),(0,r.kt)("h3",{id:"best-practice"},"Best Practice"))}c.isMDXComponent=!0}}]);