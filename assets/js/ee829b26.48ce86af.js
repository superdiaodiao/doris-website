"use strict";(self.webpackChunkselectdb_portal=self.webpackChunkselectdb_portal||[]).push([[5900],{3905:(e,n,r)=>{r.d(n,{Zo:()=>u,kt:()=>m});var t=r(67294);function o(e,n,r){return n in e?Object.defineProperty(e,n,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[n]=r,e}function s(e,n){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),r.push.apply(r,t)}return r}function a(e){for(var n=1;n<arguments.length;n++){var r=null!=arguments[n]?arguments[n]:{};n%2?s(Object(r),!0).forEach((function(n){o(e,n,r[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):s(Object(r)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(r,n))}))}return e}function l(e,n){if(null==e)return{};var r,t,o=function(e,n){if(null==e)return{};var r,t,o={},s=Object.keys(e);for(t=0;t<s.length;t++)r=s[t],n.indexOf(r)>=0||(o[r]=e[r]);return o}(e,n);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(t=0;t<s.length;t++)r=s[t],n.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var i=t.createContext({}),p=function(e){var n=t.useContext(i),r=n;return e&&(r="function"==typeof e?e(n):a(a({},n),e)),r},u=function(e){var n=p(e.components);return t.createElement(i.Provider,{value:n},e.children)},c="mdxType",d={inlineCode:"code",wrapper:function(e){var n=e.children;return t.createElement(t.Fragment,{},n)}},f=t.forwardRef((function(e,n){var r=e.components,o=e.mdxType,s=e.originalType,i=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),c=p(r),f=o,m=c["".concat(i,".").concat(f)]||c[f]||d[f]||s;return r?t.createElement(m,a(a({ref:n},u),{},{components:r})):t.createElement(m,a({ref:n},u))}));function m(e,n){var r=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var s=r.length,a=new Array(s);a[0]=f;var l={};for(var i in n)hasOwnProperty.call(n,i)&&(l[i]=n[i]);l.originalType=e,l[c]="string"==typeof e?e:o,a[1]=l;for(var p=2;p<s;p++)a[p]=r[p];return t.createElement.apply(null,a)}return t.createElement.apply(null,r)}f.displayName="MDXCreateElement"},74642:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>i,contentTitle:()=>a,default:()=>c,frontMatter:()=>s,metadata:()=>l,toc:()=>p});var t=r(87462),o=(r(67294),r(3905));const s={title:"jsonb_parse",language:"zh-CN"},a=void 0,l={unversionedId:"sql-manual/sql-functions/json-functions/jsonb_parse",id:"version-dev/sql-manual/sql-functions/json-functions/jsonb_parse",title:"jsonb_parse",description:"\x3c!--",source:"@site/versioned_docs/version-dev/sql-manual/sql-functions/json-functions/jsonb_parse.md",sourceDirName:"sql-manual/sql-functions/json-functions",slug:"/sql-manual/sql-functions/json-functions/jsonb_parse",permalink:"/docs/dev/sql-manual/sql-functions/json-functions/jsonb_parse",draft:!1,editUrl:"https://github.com/apache/doris/edit/master/docs/en/docs/sql-manual/sql-functions/json-functions/jsonb_parse.md",tags:[],version:"dev",frontMatter:{title:"jsonb_parse",language:"zh-CN"},sidebar:"docs",previous:{title:"nullif",permalink:"/docs/dev/sql-manual/sql-functions/conditional-functions/nullif"},next:{title:"jsonb_extract",permalink:"/docs/dev/sql-manual/sql-functions/json-functions/jsonb_extract"}},i={},p=[{value:"jsonb_parse",id:"jsonb_parse",level:2},{value:"description",id:"description",level:3},{value:"Syntax",id:"syntax",level:4},{value:"example",id:"example",level:3},{value:"keywords",id:"keywords",level:3}],u={toc:p};function c(e){let{components:n,...r}=e;return(0,o.kt)("wrapper",(0,t.Z)({},u,r,{components:n,mdxType:"MDXLayout"}),(0,o.kt)("h2",{id:"jsonb_parse"},"jsonb_parse"),(0,o.kt)("h3",{id:"description"},"description"),(0,o.kt)("p",null,"jsonb_parse functions parse JSON string to binary format. A series of functions are provided to satisfy different demand for exception handling."),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"all return NULL if json_str is NULL"),(0,o.kt)("li",{parentName:"ul"},"if json_str is not valid",(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},"jsonb_parse will report error"),(0,o.kt)("li",{parentName:"ul"},"jsonb_parse_error_to_null will return NULL"),(0,o.kt)("li",{parentName:"ul"},"jsonb_parse_error_to_value will return the value specified by default_json_str")))),(0,o.kt)("h4",{id:"syntax"},"Syntax"),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"JSONB jsonb_parse(VARCHAR json_str)"),"\n",(0,o.kt)("inlineCode",{parentName:"p"},"JSONB jsonb_parse_error_to_null(VARCHAR json_str)"),"\n",(0,o.kt)("inlineCode",{parentName:"p"},"JSONB jsonb_parse_error_to_value(VARCHAR json_str, VARCHAR default_json_str)")),(0,o.kt)("h3",{id:"example"},"example"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"parse valid JSON string")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},'mysql> SELECT jsonb_parse(\'{"k1":"v31","k2":300}\');\n+--------------------------------------+\n| jsonb_parse(\'{"k1":"v31","k2":300}\') |\n+--------------------------------------+\n| {"k1":"v31","k2":300}                |\n+--------------------------------------+\n1 row in set (0.01 sec)\n')),(0,o.kt)("ol",{start:2},(0,o.kt)("li",{parentName:"ol"},"parse invalid JSON string")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"mysql> SELECT jsonb_parse('invalid json');\nERROR 1105 (HY000): errCode = 2, detailMessage = json parse error: Invalid document: document must be an object or an array for value: invalid json\n\nmysql> SELECT jsonb_parse_error_to_null('invalid json');\n+-------------------------------------------+\n| jsonb_parse_error_to_null('invalid json') |\n+-------------------------------------------+\n| NULL                                      |\n+-------------------------------------------+\n1 row in set (0.01 sec)\n\nmysql> SELECT jsonb_parse_error_to_value('invalid json', '{}');\n+--------------------------------------------------+\n| jsonb_parse_error_to_value('invalid json', '{}') |\n+--------------------------------------------------+\n| {}                                               |\n+--------------------------------------------------+\n1 row in set (0.00 sec)\n")),(0,o.kt)("p",null,"refer to jsonb tutorial for more."),(0,o.kt)("h3",{id:"keywords"},"keywords"),(0,o.kt)("p",null,"JSONB, JSON, jsonb_parse, jsonb_parse_error_to_null, jsonb_parse_error_to_value"))}c.isMDXComponent=!0}}]);