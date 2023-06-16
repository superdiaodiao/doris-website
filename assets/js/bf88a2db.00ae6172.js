"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([[22970],{3905:(n,e,t)=>{t.d(e,{Zo:()=>u,kt:()=>j});var r=t(67294);function o(n,e,t){return e in n?Object.defineProperty(n,e,{value:t,enumerable:!0,configurable:!0,writable:!0}):n[e]=t,n}function a(n,e){var t=Object.keys(n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(n);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable}))),t.push.apply(t,r)}return t}function s(n){for(var e=1;e<arguments.length;e++){var t=null!=arguments[e]?arguments[e]:{};e%2?a(Object(t),!0).forEach((function(e){o(n,e,t[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(n,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(e){Object.defineProperty(n,e,Object.getOwnPropertyDescriptor(t,e))}))}return n}function i(n,e){if(null==n)return{};var t,r,o=function(n,e){if(null==n)return{};var t,r,o={},a=Object.keys(n);for(r=0;r<a.length;r++)t=a[r],e.indexOf(t)>=0||(o[t]=n[t]);return o}(n,e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(n);for(r=0;r<a.length;r++)t=a[r],e.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(n,t)&&(o[t]=n[t])}return o}var c=r.createContext({}),l=function(n){var e=r.useContext(c),t=e;return n&&(t="function"==typeof n?n(e):s(s({},e),n)),t},u=function(n){var e=l(n.components);return r.createElement(c.Provider,{value:e},n.children)},p="mdxType",d={inlineCode:"code",wrapper:function(n){var e=n.children;return r.createElement(r.Fragment,{},e)}},f=r.forwardRef((function(n,e){var t=n.components,o=n.mdxType,a=n.originalType,c=n.parentName,u=i(n,["components","mdxType","originalType","parentName"]),p=l(t),f=o,j=p["".concat(c,".").concat(f)]||p[f]||d[f]||a;return t?r.createElement(j,s(s({ref:e},u),{},{components:t})):r.createElement(j,s({ref:e},u))}));function j(n,e){var t=arguments,o=e&&e.mdxType;if("string"==typeof n||o){var a=t.length,s=new Array(a);s[0]=f;var i={};for(var c in e)hasOwnProperty.call(e,c)&&(i[c]=e[c]);i.originalType=n,i[p]="string"==typeof n?n:o,s[1]=i;for(var l=2;l<a;l++)s[l]=t[l];return r.createElement.apply(null,s)}return r.createElement.apply(null,t)}f.displayName="MDXCreateElement"},57641:(n,e,t)=>{t.r(e),t.d(e,{assets:()=>c,contentTitle:()=>s,default:()=>d,frontMatter:()=>a,metadata:()=>i,toc:()=>l});var r=t(87462),o=(t(67294),t(3905));const a={title:"json_contains",language:"en"},s=void 0,i={unversionedId:"sql-manual/sql-functions/json-functions/json_contains",id:"sql-manual/sql-functions/json-functions/json_contains",title:"json_contains",description:"\x3c!--",source:"@site/docs/sql-manual/sql-functions/json-functions/json_contains.md",sourceDirName:"sql-manual/sql-functions/json-functions",slug:"/sql-manual/sql-functions/json-functions/json_contains",permalink:"/docs/dev/sql-manual/sql-functions/json-functions/json_contains",draft:!1,tags:[],version:"current",frontMatter:{title:"json_contains",language:"en"}},c={},l=[{value:"json_contains",id:"json_contains",level:2},{value:"description",id:"description",level:3},{value:"Syntax",id:"syntax",level:4},{value:"example",id:"example",level:3},{value:"keywords",id:"keywords",level:3}],u={toc:l},p="wrapper";function d(n){let{components:e,...t}=n;return(0,o.kt)(p,(0,r.Z)({},u,t,{components:e,mdxType:"MDXLayout"}),(0,o.kt)("h2",{id:"json_contains"},"json_contains"),(0,o.kt)("h3",{id:"description"},"description"),(0,o.kt)("h4",{id:"syntax"},"Syntax"),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"INT json_contains(VARCHAR json_str, VARCHAR candidate, VARCHAR json_path)")),(0,o.kt)("p",null,"Indicates by returning 1 or 0 whether a given candidate JSON document is contained at a specific path within the json_str JSON document"),(0,o.kt)("h3",{id:"example"},"example"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"mysql> SET @j = '{\"a\": 1, \"b\": 2, \"c\": {\"d\": 4}}';\nmysql> SET @j2 = '1';\nmysql> SELECT JSON_CONTAINS(@j, @j2, '$.a');\n+-------------------------------+\n| JSON_CONTAINS(@j, @j2, '$.a') |\n+-------------------------------+\n|                             1 |\n+-------------------------------+\nmysql> SELECT JSON_CONTAINS(@j, @j2, '$.b');\n+-------------------------------+\n| JSON_CONTAINS(@j, @j2, '$.b') |\n+-------------------------------+\n|                             0 |\n+-------------------------------+\n\nmysql> SET @j2 = '{\"d\": 4}';\nmysql> SELECT JSON_CONTAINS(@j, @j2, '$.a');\n+-------------------------------+\n| JSON_CONTAINS(@j, @j2, '$.a') |\n+-------------------------------+\n|                             0 |\n+-------------------------------+\nmysql> SELECT JSON_CONTAINS(@j, @j2, '$.c');\n+-------------------------------+\n| JSON_CONTAINS(@j, @j2, '$.c') |\n+-------------------------------+\n|                             1 |\n+-------------------------------+\n")),(0,o.kt)("h3",{id:"keywords"},"keywords"),(0,o.kt)("p",null,"json,json_contains"))}d.isMDXComponent=!0}}]);