"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([[43334],{15680:(e,n,r)=>{r.d(n,{xA:()=>p,yg:()=>y});var t=r(96540);function o(e,n,r){return n in e?Object.defineProperty(e,n,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[n]=r,e}function s(e,n){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),r.push.apply(r,t)}return r}function a(e){for(var n=1;n<arguments.length;n++){var r=null!=arguments[n]?arguments[n]:{};n%2?s(Object(r),!0).forEach((function(n){o(e,n,r[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):s(Object(r)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(r,n))}))}return e}function l(e,n){if(null==e)return{};var r,t,o=function(e,n){if(null==e)return{};var r,t,o={},s=Object.keys(e);for(t=0;t<s.length;t++)r=s[t],n.indexOf(r)>=0||(o[r]=e[r]);return o}(e,n);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(t=0;t<s.length;t++)r=s[t],n.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var i=t.createContext({}),u=function(e){var n=t.useContext(i),r=n;return e&&(r="function"==typeof e?e(n):a(a({},n),e)),r},p=function(e){var n=u(e.components);return t.createElement(i.Provider,{value:n},e.children)},c="mdxType",d={inlineCode:"code",wrapper:function(e){var n=e.children;return t.createElement(t.Fragment,{},n)}},f=t.forwardRef((function(e,n){var r=e.components,o=e.mdxType,s=e.originalType,i=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),c=u(r),f=o,y=c["".concat(i,".").concat(f)]||c[f]||d[f]||s;return r?t.createElement(y,a(a({ref:n},p),{},{components:r})):t.createElement(y,a({ref:n},p))}));function y(e,n){var r=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var s=r.length,a=new Array(s);a[0]=f;var l={};for(var i in n)hasOwnProperty.call(n,i)&&(l[i]=n[i]);l.originalType=e,l[c]="string"==typeof e?e:o,a[1]=l;for(var u=2;u<s;u++)a[u]=r[u];return t.createElement.apply(null,a)}return t.createElement.apply(null,r)}f.displayName="MDXCreateElement"},63590:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>i,contentTitle:()=>a,default:()=>d,frontMatter:()=>s,metadata:()=>l,toc:()=>u});var t=r(58168),o=(r(96540),r(15680));const s={title:"JSON_PARSE",language:"en"},a=void 0,l={unversionedId:"sql-manual/sql-functions/json-functions/json-parse",id:"sql-manual/sql-functions/json-functions/json-parse",title:"JSON_PARSE",description:"\x3c!--",source:"@site/docs/sql-manual/sql-functions/json-functions/json-parse.md",sourceDirName:"sql-manual/sql-functions/json-functions",slug:"/sql-manual/sql-functions/json-functions/json-parse",permalink:"/docs/dev/sql-manual/sql-functions/json-functions/json-parse",draft:!1,tags:[],version:"current",frontMatter:{title:"JSON_PARSE",language:"en"},sidebar:"docs",previous:{title:"NULLIF",permalink:"/docs/dev/sql-manual/sql-functions/conditional-functions/nullif"},next:{title:"JSON_EXTRACT",permalink:"/docs/dev/sql-manual/sql-functions/json-functions/json-extract"}},i={},u=[{value:"json_parse",id:"json_parse",level:2},{value:"description",id:"description",level:3},{value:"Syntax",id:"syntax",level:4},{value:"example",id:"example",level:3},{value:"keywords",id:"keywords",level:3}],p={toc:u},c="wrapper";function d(e){let{components:n,...r}=e;return(0,o.yg)(c,(0,t.A)({},p,r,{components:n,mdxType:"MDXLayout"}),(0,o.yg)("h2",{id:"json_parse"},"json_parse"),(0,o.yg)("h3",{id:"description"},"description"),(0,o.yg)("h4",{id:"syntax"},"Syntax"),(0,o.yg)("pre",null,(0,o.yg)("code",{parentName:"pre",className:"language-sql"},"JSON json_parse(VARCHAR json_str)\nJSON json_parse_error_to_null(VARCHAR json_str)\nJSON json_parse_error_to_value(VARCHAR json_str, VARCHAR default_json_str)\n")),(0,o.yg)("p",null,"json_parse functions parse JSON string to binary format. A series of functions are provided to satisfy different demand for exception handling."),(0,o.yg)("ul",null,(0,o.yg)("li",{parentName:"ul"},"all return NULL if json_str is NULL"),(0,o.yg)("li",{parentName:"ul"},"if json_str is not valid",(0,o.yg)("ul",{parentName:"li"},(0,o.yg)("li",{parentName:"ul"},"json_parse will report error"),(0,o.yg)("li",{parentName:"ul"},"json_parse_error_to_null will return NULL"),(0,o.yg)("li",{parentName:"ul"},"json_parse_error_to_value will return the value specified by default_json_str")))),(0,o.yg)("h3",{id:"example"},"example"),(0,o.yg)("ol",null,(0,o.yg)("li",{parentName:"ol"},"parse valid JSON string")),(0,o.yg)("pre",null,(0,o.yg)("code",{parentName:"pre"},'mysql> SELECT json_parse(\'{"k1":"v31","k2":300}\');\n+--------------------------------------+\n| json_parse(\'{"k1":"v31","k2":300}\') |\n+--------------------------------------+\n| {"k1":"v31","k2":300}                |\n+--------------------------------------+\n1 row in set (0.01 sec)\n')),(0,o.yg)("ol",{start:2},(0,o.yg)("li",{parentName:"ol"},"parse invalid JSON string")),(0,o.yg)("pre",null,(0,o.yg)("code",{parentName:"pre"},"mysql> SELECT json_parse('invalid json');\nERROR 1105 (HY000): errCode = 2, detailMessage = json parse error: Invalid document: document must be an object or an array for value: invalid json\n\nmysql> SELECT json_parse_error_to_null('invalid json');\n+-------------------------------------------+\n| json_parse_error_to_null('invalid json') |\n+-------------------------------------------+\n| NULL                                      |\n+-------------------------------------------+\n1 row in set (0.01 sec)\n\nmysql> SELECT json_parse_error_to_value('invalid json', '{}');\n+--------------------------------------------------+\n| json_parse_error_to_value('invalid json', '{}') |\n+--------------------------------------------------+\n| {}                                               |\n+--------------------------------------------------+\n1 row in set (0.00 sec)\n")),(0,o.yg)("p",null,"refer to json tutorial for more."),(0,o.yg)("h3",{id:"keywords"},"keywords"),(0,o.yg)("p",null,"JSONB, JSON, json_parse, json_parse_error_to_null, json_parse_error_to_value"))}d.isMDXComponent=!0}}]);