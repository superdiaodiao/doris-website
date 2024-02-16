"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([[22307],{15680:(e,t,n)=>{n.d(t,{xA:()=>i,yg:()=>d});var r=n(96540);function l(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function s(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?s(Object(n),!0).forEach((function(t){l(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):s(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function u(e,t){if(null==e)return{};var n,r,l=function(e,t){if(null==e)return{};var n,r,l={},s=Object.keys(e);for(r=0;r<s.length;r++)n=s[r],t.indexOf(n)>=0||(l[n]=e[n]);return l}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(r=0;r<s.length;r++)n=s[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(l[n]=e[n])}return l}var o=r.createContext({}),a=function(e){var t=r.useContext(o),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},i=function(e){var t=a(e.components);return r.createElement(o.Provider,{value:t},e.children)},p="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},f=r.forwardRef((function(e,t){var n=e.components,l=e.mdxType,s=e.originalType,o=e.parentName,i=u(e,["components","mdxType","originalType","parentName"]),p=a(n),f=l,d=p["".concat(o,".").concat(f)]||p[f]||m[f]||s;return n?r.createElement(d,c(c({ref:t},i),{},{components:n})):r.createElement(d,c({ref:t},i))}));function d(e,t){var n=arguments,l=t&&t.mdxType;if("string"==typeof e||l){var s=n.length,c=new Array(s);c[0]=f;var u={};for(var o in t)hasOwnProperty.call(t,o)&&(u[o]=t[o]);u.originalType=e,u[p]="string"==typeof e?e:l,c[1]=u;for(var a=2;a<s;a++)c[a]=n[a];return r.createElement.apply(null,c)}return r.createElement.apply(null,n)}f.displayName="MDXCreateElement"},79971:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>o,contentTitle:()=>c,default:()=>m,frontMatter:()=>s,metadata:()=>u,toc:()=>a});var r=n(58168),l=(n(96540),n(15680));const s={title:"STRUCT_ELEMENT",language:"en"},c=void 0,u={unversionedId:"sql-manual/sql-functions/struct-functions/struct-element",id:"sql-manual/sql-functions/struct-functions/struct-element",title:"STRUCT_ELEMENT",description:"\x3c!--",source:"@site/docs/sql-manual/sql-functions/struct-functions/struct-element.md",sourceDirName:"sql-manual/sql-functions/struct-functions",slug:"/sql-manual/sql-functions/struct-functions/struct-element",permalink:"/docs/dev/sql-manual/sql-functions/struct-functions/struct-element",draft:!1,tags:[],version:"current",frontMatter:{title:"STRUCT_ELEMENT",language:"en"},sidebar:"docs",previous:{title:"NAMED_STRUCT",permalink:"/docs/dev/sql-manual/sql-functions/struct-functions/named-struct"},next:{title:"STATE",permalink:"/docs/dev/sql-manual/sql-functions/combinators/state"}},o={},a=[{value:"struct_element",id:"struct_element",level:2},{value:"description",id:"description",level:3},{value:"Syntax",id:"syntax",level:4},{value:"Arguments",id:"arguments",level:4},{value:"Returned value",id:"returned-value",level:4},{value:"notice",id:"notice",level:3},{value:"example",id:"example",level:3},{value:"keywords",id:"keywords",level:3}],i={toc:a},p="wrapper";function m(e){let{components:t,...n}=e;return(0,l.yg)(p,(0,r.A)({},i,n,{components:t,mdxType:"MDXLayout"}),(0,l.yg)("h2",{id:"struct_element"},"struct_element"),(0,l.yg)("version",{since:"2.0"},(0,l.yg)("p",null,"struct_element")),(0,l.yg)("h3",{id:"description"},"description"),(0,l.yg)("p",null,"Function allows getting a field from a struct."),(0,l.yg)("h4",{id:"syntax"},"Syntax"),(0,l.yg)("pre",null,(0,l.yg)("code",{parentName:"pre"},"struct_element(struct, n/s)\n")),(0,l.yg)("h4",{id:"arguments"},"Arguments"),(0,l.yg)("pre",null,(0,l.yg)("code",{parentName:"pre"},"struct - The input struct column. If null, null will be returned.\nn - The position of field\uff0cstarting from 1\uff0conly supports constants.\ns - The name of field\uff0conly supports constants.\n")),(0,l.yg)("h4",{id:"returned-value"},"Returned value"),(0,l.yg)("p",null,"Returns the specified field column, of any type."),(0,l.yg)("h3",{id:"notice"},"notice"),(0,l.yg)("p",null,(0,l.yg)("inlineCode",{parentName:"p"},"Only supported in vectorized engine")),(0,l.yg)("h3",{id:"example"},"example"),(0,l.yg)("pre",null,(0,l.yg)("code",{parentName:"pre"},"mysql> select struct_element(named_struct('f1', 1, 'f2', 'a'), 'f2');\n+--------------------------------------------------------+\n| struct_element(named_struct('f1', 1, 'f2', 'a'), 'f2') |\n+--------------------------------------------------------+\n| a                                                      |\n+--------------------------------------------------------+\n1 row in set (0.03 sec)\n\nmysql> select struct_element(named_struct('f1', 1, 'f2', 'a'), 1);\n+-----------------------------------------------------+\n| struct_element(named_struct('f1', 1, 'f2', 'a'), 1) |\n+-----------------------------------------------------+\n|                                                   1 |\n+-----------------------------------------------------+\n1 row in set (0.02 sec)\n\nmysql> select struct_col, struct_element(struct_col, 'f1') from test_struct;\n+-------------------------------------------------+-------------------------------------+\n| struct_col                                      | struct_element(`struct_col `, 'f1') |\n+-------------------------------------------------+-------------------------------------+\n| {1, 2, 3, 4, 5}                                 |                                   1 |\n| {1, 1000, 10000000, 100000000000, 100000000000} |                                   1 |\n| {5, 4, 3, 2, 1}                                 |                                   5 |\n| NULL                                            |                                NULL |\n| {1, NULL, 3, NULL, 5}                           |                                   1 |\n+-------------------------------------------------+-------------------------------------+\n9 rows in set (0.01 sec)\n")),(0,l.yg)("h3",{id:"keywords"},"keywords"),(0,l.yg)("p",null,"STRUCT, ELEMENT, STRUCT_ELEMENT"))}m.isMDXComponent=!0}}]);