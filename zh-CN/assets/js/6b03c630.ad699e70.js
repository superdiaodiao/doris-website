"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([[23239],{3905:(e,n,t)=>{t.d(n,{Zo:()=>c,kt:()=>f});var r=t(67294);function i(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function s(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){i(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function a(e,n){if(null==e)return{};var t,r,i=function(e,n){if(null==e)return{};var t,r,i={},o=Object.keys(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||(i[t]=e[t]);return i}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}var l=r.createContext({}),u=function(e){var n=r.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):s(s({},n),e)),t},c=function(e){var n=u(e.components);return r.createElement(l.Provider,{value:n},e.children)},p="mdxType",m={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},d=r.forwardRef((function(e,n){var t=e.components,i=e.mdxType,o=e.originalType,l=e.parentName,c=a(e,["components","mdxType","originalType","parentName"]),p=u(t),d=i,f=p["".concat(l,".").concat(d)]||p[d]||m[d]||o;return t?r.createElement(f,s(s({ref:n},c),{},{components:t})):r.createElement(f,s({ref:n},c))}));function f(e,n){var t=arguments,i=n&&n.mdxType;if("string"==typeof e||i){var o=t.length,s=new Array(o);s[0]=d;var a={};for(var l in n)hasOwnProperty.call(n,l)&&(a[l]=n[l]);a.originalType=e,a[p]="string"==typeof e?e:i,s[1]=a;for(var u=2;u<o;u++)s[u]=t[u];return r.createElement.apply(null,s)}return r.createElement.apply(null,t)}d.displayName="MDXCreateElement"},7441:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>l,contentTitle:()=>s,default:()=>m,frontMatter:()=>o,metadata:()=>a,toc:()=>u});var r=t(87462),i=(t(67294),t(3905));const o={title:"IPV4NUMTOSTRING",language:"en"},s=void 0,a={unversionedId:"sql-manual/sql-functions/ip-functions/ipv4_num_to_string",id:"version-2.0/sql-manual/sql-functions/ip-functions/ipv4_num_to_string",title:"IPV4NUMTOSTRING",description:"\x3c!--",source:"@site/versioned_docs/version-2.0/sql-manual/sql-functions/ip-functions/ipv4_num_to_string.md",sourceDirName:"sql-manual/sql-functions/ip-functions",slug:"/sql-manual/sql-functions/ip-functions/ipv4_num_to_string",permalink:"/zh-CN/docs/sql-manual/sql-functions/ip-functions/ipv4_num_to_string",draft:!1,tags:[],version:"2.0",frontMatter:{title:"IPV4NUMTOSTRING",language:"en"},sidebar:"docs",previous:{title:"WINDOW-FUNCTION-WINDOW-FUNNEL",permalink:"/zh-CN/docs/sql-manual/sql-functions/window-functions/WINDOW-FUNCTION-WINDOW-FUNNEL"},next:{title:"INET_NTOA",permalink:"/zh-CN/docs/sql-manual/sql-functions/ip-functions/INET_NTOA"}},l={},u=[{value:"IPv4NumToString",id:"ipv4numtostring",level:2},{value:"description",id:"description",level:3},{value:"Syntax",id:"syntax",level:4},{value:"notice",id:"notice",level:3},{value:"example",id:"example",level:3},{value:"keywords",id:"keywords",level:3}],c={toc:u},p="wrapper";function m(e){let{components:n,...t}=e;return(0,i.kt)(p,(0,r.Z)({},c,t,{components:n,mdxType:"MDXLayout"}),(0,i.kt)("h2",{id:"ipv4numtostring"},"IPv4NumToString"),(0,i.kt)("version",{since:"dev"},(0,i.kt)("p",null,"IPv4NumToString")),(0,i.kt)("h3",{id:"description"},"description"),(0,i.kt)("h4",{id:"syntax"},"Syntax"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"VARCHAR IPv4NumToString(BIGINT ipv4_num)")),(0,i.kt)("p",null,"Takes a Int16\u3001Int32\u3001Int64 number. Interprets it as an IPv4 address in big endian. Returns a string containing the corresponding IPv4 address in the format A.B.C.d (dot-separated numbers in decimal form)."),(0,i.kt)("h3",{id:"notice"},"notice"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"will return NULL if the input parameter is negative or larger than 4294967295(num value of '255.255.255.255')")),(0,i.kt)("h3",{id:"example"},"example"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"mysql> select ipv4numtostring(3232235521);\n+-----------------------------+\n| ipv4numtostring(3232235521) |\n+-----------------------------+\n| 192.168.0.1                 |\n+-----------------------------+\n1 row in set (0.01 sec)\n\nmysql> select num,ipv4numtostring(num) from ipv4_bi;\n+------------+------------------------+\n| num        | ipv4numtostring(`num`) |\n+------------+------------------------+\n|         -1 | NULL                   |\n|          0 | 0.0.0.0                |\n| 2130706433 | 127.0.0.1              |\n| 4294967295 | 255.255.255.255        |\n| 4294967296 | NULL                   |\n+------------+------------------------+\n7 rows in set (0.01 sec)\n")),(0,i.kt)("h3",{id:"keywords"},"keywords"),(0,i.kt)("p",null,"IPV4NUMTOSTRING, IP"))}m.isMDXComponent=!0}}]);