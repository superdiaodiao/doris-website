"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([[85073],{15680:(e,t,n)=>{n.d(t,{xA:()=>u,yg:()=>g});var a=n(96540);function l(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){l(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,l=function(e,t){if(null==e)return{};var n,a,l={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(l[n]=e[n]);return l}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(l[n]=e[n])}return l}var s=a.createContext({}),p=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},u=function(e){var t=p(e.components);return a.createElement(s.Provider,{value:t},e.children)},c="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},y=a.forwardRef((function(e,t){var n=e.components,l=e.mdxType,i=e.originalType,s=e.parentName,u=o(e,["components","mdxType","originalType","parentName"]),c=p(n),y=l,g=c["".concat(s,".").concat(y)]||c[y]||m[y]||i;return n?a.createElement(g,r(r({ref:t},u),{},{components:n})):a.createElement(g,r({ref:t},u))}));function g(e,t){var n=arguments,l=t&&t.mdxType;if("string"==typeof e||l){var i=n.length,r=new Array(i);r[0]=y;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o[c]="string"==typeof e?e:l,r[1]=o;for(var p=2;p<i;p++)r[p]=n[p];return a.createElement.apply(null,r)}return a.createElement.apply(null,n)}y.displayName="MDXCreateElement"},97039:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>r,default:()=>m,frontMatter:()=>i,metadata:()=>o,toc:()=>p});var a=n(58168),l=(n(96540),n(15680));const i={title:"Variable",language:"en"},r=void 0,o={unversionedId:"advanced/variables-template",id:"advanced/variables-template",title:"Variable",description:"\x3c!--",source:"@site/docs/advanced/variables-template.md",sourceDirName:"advanced",slug:"/advanced/variables-template",permalink:"/docs/dev/advanced/variables-template",draft:!1,tags:[],version:"current",frontMatter:{title:"Variable",language:"en"}},s={},p=[{value:"Variable setting and viewing",id:"variable-setting-and-viewing",level:2},{value:"View",id:"view",level:3},{value:"Settings",id:"settings",level:3},{value:"Set variables in the query statement",id:"set-variables-in-the-query-statement",level:3},{value:"Supported variables",id:"supported-variables",level:2}],u={toc:p},c="wrapper";function m(e){let{components:t,...n}=e;return(0,l.yg)(c,(0,a.A)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,l.yg)("h1",{id:"variable"},"Variable"),(0,l.yg)("p",null,"This document focuses on currently supported variables."),(0,l.yg)("p",null,"Variables in Doris refer to variable settings in MySQL. However, some of the variables are only used to be compatible with some MySQL client protocols, and do not produce their actual meaning in the MySQL database."),(0,l.yg)("h2",{id:"variable-setting-and-viewing"},"Variable setting and viewing"),(0,l.yg)("h3",{id:"view"},"View"),(0,l.yg)("p",null,"All or specified variables can be viewed via ",(0,l.yg)("inlineCode",{parentName:"p"},"SHOW VARIABLES [LIKE 'xxx'];"),". Such as:"),(0,l.yg)("pre",null,(0,l.yg)("code",{parentName:"pre"},"SHOW VARIABLES;\nSHOW VARIABLES LIKE '%time_zone%';\n")),(0,l.yg)("h3",{id:"settings"},"Settings"),(0,l.yg)("p",null,"Note that before version 1.1, after the setting takes effect globally, the setting value will be inherited in subsequent new session connections, but the value in the current session will remain unchanged.\nAfter version 1.1 (inclusive), after the setting takes effect globally, the setting value will be used in subsequent new session connections, and the value in the current session will also change."),(0,l.yg)("p",null,"For session-only, set by the ",(0,l.yg)("inlineCode",{parentName:"p"},"SET var_name=xxx;")," statement. Such as:"),(0,l.yg)("pre",null,(0,l.yg)("code",{parentName:"pre"},'SET exec_mem_limit = 137438953472;\nSET forward_to_master = true;\nSET time_zone = "Asia/Shanghai";\n')),(0,l.yg)("p",null,"For global-level, set by ",(0,l.yg)("inlineCode",{parentName:"p"},"SET GLOBAL var_name=xxx;"),". Such as:"),(0,l.yg)("pre",null,(0,l.yg)("code",{parentName:"pre"},"SET GLOBAL exec_mem_limit = 137438953472\n")),(0,l.yg)("blockquote",null,(0,l.yg)("p",{parentName:"blockquote"},"Note 1: Only ADMIN users can set variable at global-level.")),(0,l.yg)("p",null,"Variables that support both session-level and global-level setting include:"),(0,l.yg)("ul",null,(0,l.yg)("li",{parentName:"ul"},(0,l.yg)("inlineCode",{parentName:"li"},"time_zone")),(0,l.yg)("li",{parentName:"ul"},(0,l.yg)("inlineCode",{parentName:"li"},"wait_timeout")),(0,l.yg)("li",{parentName:"ul"},(0,l.yg)("inlineCode",{parentName:"li"},"sql_mode")),(0,l.yg)("li",{parentName:"ul"},(0,l.yg)("inlineCode",{parentName:"li"},"enable_profile")),(0,l.yg)("li",{parentName:"ul"},(0,l.yg)("inlineCode",{parentName:"li"},"query_timeout")),(0,l.yg)("li",{parentName:"ul"},(0,l.yg)("inlineCode",{parentName:"li"},"insert_timeout"),(0,l.yg)("version",{since:"dev"})),(0,l.yg)("li",{parentName:"ul"},(0,l.yg)("inlineCode",{parentName:"li"},"exec_mem_limit")),(0,l.yg)("li",{parentName:"ul"},(0,l.yg)("inlineCode",{parentName:"li"},"batch_size")),(0,l.yg)("li",{parentName:"ul"},(0,l.yg)("inlineCode",{parentName:"li"},"parallel_fragment_exec_instance_num")),(0,l.yg)("li",{parentName:"ul"},(0,l.yg)("inlineCode",{parentName:"li"},"parallel_exchange_instance_num")),(0,l.yg)("li",{parentName:"ul"},(0,l.yg)("inlineCode",{parentName:"li"},"allow_partition_column_nullable")),(0,l.yg)("li",{parentName:"ul"},(0,l.yg)("inlineCode",{parentName:"li"},"insert_visible_timeout_ms")),(0,l.yg)("li",{parentName:"ul"},(0,l.yg)("inlineCode",{parentName:"li"},"enable_fold_constant_by_be"))),(0,l.yg)("p",null,"Variables that support only global-level setting include:"),(0,l.yg)("ul",null,(0,l.yg)("li",{parentName:"ul"},(0,l.yg)("inlineCode",{parentName:"li"},"default_rowset_type")),(0,l.yg)("li",{parentName:"ul"},(0,l.yg)("inlineCode",{parentName:"li"},"default_password_lifetime")),(0,l.yg)("li",{parentName:"ul"},(0,l.yg)("inlineCode",{parentName:"li"},"password_history")),(0,l.yg)("li",{parentName:"ul"},(0,l.yg)("inlineCode",{parentName:"li"},"validate_password_policy"))),(0,l.yg)("p",null,"At the same time, variable settings also support constant expressions. Such as:"),(0,l.yg)("pre",null,(0,l.yg)("code",{parentName:"pre"},"SET exec_mem_limit = 10 * 1024 * 1024 * 1024;\nSET forward_to_master = concat('tr', 'u', 'e');\n")),(0,l.yg)("h3",{id:"set-variables-in-the-query-statement"},"Set variables in the query statement"),(0,l.yg)("p",null,"In some scenarios, we may need to set variables specifically for certain queries.\nThe SET_VAR hint sets the session value of a system variable temporarily (for the duration of a single statement). Examples:"),(0,l.yg)("pre",null,(0,l.yg)("code",{parentName:"pre"},"SELECT /*+ SET_VAR(exec_mem_limit = 8589934592) */ name FROM people ORDER BY name;\nSELECT /*+ SET_VAR(query_timeout = 1, enable_partition_cache=true) */ sleep(3);\n")),(0,l.yg)("p",null,"Note that the comment must start with /*+ and can only follow the SELECT."),(0,l.yg)("h2",{id:"supported-variables"},"Supported variables"),(0,l.yg)("blockquote",null,(0,l.yg)("p",{parentName:"blockquote"},"Note:"),(0,l.yg)("p",{parentName:"blockquote"},"The following content is automatically generated by ",(0,l.yg)("inlineCode",{parentName:"p"},"docs/generate-config-and-variable-doc.sh"),"."),(0,l.yg)("p",{parentName:"blockquote"},"To modify, please modify ",(0,l.yg)("inlineCode",{parentName:"p"},"fe/fe-core/src/main/java/org/apache/doris/qe/SessionVariable.java")," and ",(0,l.yg)("inlineCode",{parentName:"p"},"fe/fe-core/src/main/java/org/apache/ Description information in doris/qe/GlobalVariable.java"),".")),(0,l.yg)("p",null,"<--DOC_PLACEHOLDER--\x3e"))}m.isMDXComponent=!0}}]);