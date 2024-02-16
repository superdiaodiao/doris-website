"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([[77555],{15680:(e,n,r)=>{r.d(n,{xA:()=>p,yg:()=>f});var t=r(96540);function o(e,n,r){return n in e?Object.defineProperty(e,n,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[n]=r,e}function s(e,n){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),r.push.apply(r,t)}return r}function a(e){for(var n=1;n<arguments.length;n++){var r=null!=arguments[n]?arguments[n]:{};n%2?s(Object(r),!0).forEach((function(n){o(e,n,r[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):s(Object(r)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(r,n))}))}return e}function l(e,n){if(null==e)return{};var r,t,o=function(e,n){if(null==e)return{};var r,t,o={},s=Object.keys(e);for(t=0;t<s.length;t++)r=s[t],n.indexOf(r)>=0||(o[r]=e[r]);return o}(e,n);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(t=0;t<s.length;t++)r=s[t],n.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var i=t.createContext({}),u=function(e){var n=t.useContext(i),r=n;return e&&(r="function"==typeof e?e(n):a(a({},n),e)),r},p=function(e){var n=u(e.components);return t.createElement(i.Provider,{value:n},e.children)},c="mdxType",y={inlineCode:"code",wrapper:function(e){var n=e.children;return t.createElement(t.Fragment,{},n)}},d=t.forwardRef((function(e,n){var r=e.components,o=e.mdxType,s=e.originalType,i=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),c=u(r),d=o,f=c["".concat(i,".").concat(d)]||c[d]||y[d]||s;return r?t.createElement(f,a(a({ref:n},p),{},{components:r})):t.createElement(f,a({ref:n},p))}));function f(e,n){var r=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var s=r.length,a=new Array(s);a[0]=d;var l={};for(var i in n)hasOwnProperty.call(n,i)&&(l[i]=n[i]);l.originalType=e,l[c]="string"==typeof e?e:o,a[1]=l;for(var u=2;u<s;u++)a[u]=r[u];return t.createElement.apply(null,a)}return t.createElement.apply(null,r)}d.displayName="MDXCreateElement"},43385:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>i,contentTitle:()=>a,default:()=>y,frontMatter:()=>s,metadata:()=>l,toc:()=>u});var t=r(58168),o=(r(96540),r(15680));const s={title:"JSON_PARSE",language:"zh-CN"},a=void 0,l={unversionedId:"sql-manual/sql-functions/json-functions/json-parse",id:"version-2.0/sql-manual/sql-functions/json-functions/json-parse",title:"JSON_PARSE",description:"\x3c!--",source:"@site/i18n/zh-CN/docusaurus-plugin-content-docs/version-2.0/sql-manual/sql-functions/json-functions/json-parse.md",sourceDirName:"sql-manual/sql-functions/json-functions",slug:"/sql-manual/sql-functions/json-functions/json-parse",permalink:"/zh-CN/docs/sql-manual/sql-functions/json-functions/json-parse",draft:!1,tags:[],version:"2.0",frontMatter:{title:"JSON_PARSE",language:"zh-CN"},sidebar:"docs",previous:{title:"NULLIF",permalink:"/zh-CN/docs/sql-manual/sql-functions/conditional-functions/nullif"},next:{title:"JSON_EXTRACT",permalink:"/zh-CN/docs/sql-manual/sql-functions/json-functions/json-extract"}},i={},u=[{value:"json_parse",id:"json_parse",level:2},{value:"description",id:"description",level:3},{value:"Syntax",id:"syntax",level:4},{value:"example",id:"example",level:3},{value:"keywords",id:"keywords",level:3}],p={toc:u},c="wrapper";function y(e){let{components:n,...r}=e;return(0,o.yg)(c,(0,t.A)({},p,r,{components:n,mdxType:"MDXLayout"}),(0,o.yg)("h2",{id:"json_parse"},"json_parse"),(0,o.yg)("h3",{id:"description"},"description"),(0,o.yg)("h4",{id:"syntax"},"Syntax"),(0,o.yg)("pre",null,(0,o.yg)("code",{parentName:"pre",className:"language-sql"},"JSON json_parse(VARCHAR json_str)\nJSON json_parse_error_to_null(VARCHAR json_str)\nJSON json_parse_error_to_value(VARCHAR json_str, VARCHAR default_json_str)\n")),(0,o.yg)("p",null,"\u5c06\u539f\u59cbJSON\u5b57\u7b26\u4e32\u89e3\u6790\u6210JSON\u4e8c\u8fdb\u5236\u683c\u5f0f\u3002\u4e3a\u4e86\u6ee1\u8db3\u4e0d\u540c\u7684\u5f02\u5e38\u6570\u636e\u5904\u7406\u9700\u6c42\uff0c\u63d0\u4f9b\u4e0d\u540c\u7684json_parse\u7cfb\u5217\u51fd\u6570\uff0c\u5177\u4f53\u884c\u4e3a\u5982\u4e0b\uff1a"),(0,o.yg)("ul",null,(0,o.yg)("li",{parentName:"ul"},"json_str\u4e3aNULL\u65f6\uff0c\u90fd\u8fd4\u56deNULL"),(0,o.yg)("li",{parentName:"ul"},"json_str\u4e3a\u975e\u6cd5JSON\u5b57\u7b26\u4e32\u65f6",(0,o.yg)("ul",{parentName:"li"},(0,o.yg)("li",{parentName:"ul"},"json_parse\u62a5\u9519"),(0,o.yg)("li",{parentName:"ul"},"json_parse_error_to_null\u8fd4\u56deNULL\uff0c"),(0,o.yg)("li",{parentName:"ul"},"json_parse_error_to_value\u8fd4\u56de\u53c2\u6570default_json_str\u6307\u5b9a\u7684\u9ed8\u8ba4\u503c")))),(0,o.yg)("h3",{id:"example"},"example"),(0,o.yg)("ol",null,(0,o.yg)("li",{parentName:"ol"},"\u6b63\u5e38JSON\u5b57\u7b26\u4e32\u89e3\u6790")),(0,o.yg)("pre",null,(0,o.yg)("code",{parentName:"pre"},'mysql> SELECT json_parse(\'{"k1":"v31","k2":300}\');\n+--------------------------------------+\n| json_parse(\'{"k1":"v31","k2":300}\') |\n+--------------------------------------+\n| {"k1":"v31","k2":300}                |\n+--------------------------------------+\n1 row in set (0.01 sec)\n')),(0,o.yg)("ol",{start:2},(0,o.yg)("li",{parentName:"ol"},"\u975e\u6cd5JSON\u5b57\u7b26\u4e32\u89e3\u6790")),(0,o.yg)("pre",null,(0,o.yg)("code",{parentName:"pre"},"mysql> SELECT json_parse('invalid json');\nERROR 1105 (HY000): errCode = 2, detailMessage = json parse error: Invalid document: document must be an object or an array for value: invalid json\n\nmysql> SELECT json_parse_error_to_null('invalid json');\n+-------------------------------------------+\n| json_parse_error_to_null('invalid json') |\n+-------------------------------------------+\n| NULL                                      |\n+-------------------------------------------+\n1 row in set (0.01 sec)\n\nmysql> SELECT json_parse_error_to_value('invalid json', '{}');\n+--------------------------------------------------+\n| json_parse_error_to_value('invalid json', '{}') |\n+--------------------------------------------------+\n| {}                                               |\n+--------------------------------------------------+\n1 row in set (0.00 sec)\n")),(0,o.yg)("h3",{id:"keywords"},"keywords"),(0,o.yg)("p",null,"JSONB, JSON, json_parse, json_parse_error_to_null, json_parse_error_to_value"))}y.isMDXComponent=!0}}]);