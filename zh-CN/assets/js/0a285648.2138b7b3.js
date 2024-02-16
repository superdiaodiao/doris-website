"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([[56909],{15680:(n,e,t)=>{t.d(e,{xA:()=>p,yg:()=>g});var r=t(96540);function o(n,e,t){return e in n?Object.defineProperty(n,e,{value:t,enumerable:!0,configurable:!0,writable:!0}):n[e]=t,n}function a(n,e){var t=Object.keys(n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(n);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable}))),t.push.apply(t,r)}return t}function l(n){for(var e=1;e<arguments.length;e++){var t=null!=arguments[e]?arguments[e]:{};e%2?a(Object(t),!0).forEach((function(e){o(n,e,t[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(n,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(e){Object.defineProperty(n,e,Object.getOwnPropertyDescriptor(t,e))}))}return n}function u(n,e){if(null==n)return{};var t,r,o=function(n,e){if(null==n)return{};var t,r,o={},a=Object.keys(n);for(r=0;r<a.length;r++)t=a[r],e.indexOf(t)>=0||(o[t]=n[t]);return o}(n,e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(n);for(r=0;r<a.length;r++)t=a[r],e.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(n,t)&&(o[t]=n[t])}return o}var s=r.createContext({}),i=function(n){var e=r.useContext(s),t=e;return n&&(t="function"==typeof n?n(e):l(l({},e),n)),t},p=function(n){var e=i(n.components);return r.createElement(s.Provider,{value:e},n.children)},y="mdxType",c={inlineCode:"code",wrapper:function(n){var e=n.children;return r.createElement(r.Fragment,{},e)}},d=r.forwardRef((function(n,e){var t=n.components,o=n.mdxType,a=n.originalType,s=n.parentName,p=u(n,["components","mdxType","originalType","parentName"]),y=i(t),d=o,g=y["".concat(s,".").concat(d)]||y[d]||c[d]||a;return t?r.createElement(g,l(l({ref:e},p),{},{components:t})):r.createElement(g,l({ref:e},p))}));function g(n,e){var t=arguments,o=e&&e.mdxType;if("string"==typeof n||o){var a=t.length,l=new Array(a);l[0]=d;var u={};for(var s in e)hasOwnProperty.call(e,s)&&(u[s]=e[s]);u.originalType=n,u[y]="string"==typeof n?n:o,l[1]=u;for(var i=2;i<a;i++)l[i]=t[i];return r.createElement.apply(null,l)}return r.createElement.apply(null,t)}d.displayName="MDXCreateElement"},6380:(n,e,t)=>{t.r(e),t.d(e,{assets:()=>s,contentTitle:()=>l,default:()=>c,frontMatter:()=>a,metadata:()=>u,toc:()=>i});var r=t(58168),o=(t(96540),t(15680));const a={title:"json_unquote",language:"zh-CN"},l=void 0,u={unversionedId:"sql-manual/sql-functions/json-functions/json_unquote",id:"version-1.2/sql-manual/sql-functions/json-functions/json_unquote",title:"json_unquote",description:"\x3c!--",source:"@site/i18n/zh-CN/docusaurus-plugin-content-docs/version-1.2/sql-manual/sql-functions/json-functions/json_unquote.md",sourceDirName:"sql-manual/sql-functions/json-functions",slug:"/sql-manual/sql-functions/json-functions/json_unquote",permalink:"/zh-CN/docs/1.2/sql-manual/sql-functions/json-functions/json_unquote",draft:!1,tags:[],version:"1.2",frontMatter:{title:"json_unquote",language:"zh-CN"},sidebar:"docs",previous:{title:"json_quote",permalink:"/zh-CN/docs/1.2/sql-manual/sql-functions/json-functions/json_quote"},next:{title:"json_valid",permalink:"/zh-CN/docs/1.2/sql-manual/sql-functions/json-functions/json_valid"}},s={},i=[{value:"json_unquote",id:"json_unquote",level:2},{value:"Description",id:"description",level:3},{value:"Syntax",id:"syntax",level:4},{value:"example",id:"example",level:3},{value:"keywords",id:"keywords",level:3}],p={toc:i},y="wrapper";function c(n){let{components:e,...t}=n;return(0,o.yg)(y,(0,r.A)({},p,t,{components:e,mdxType:"MDXLayout"}),(0,o.yg)("h2",{id:"json_unquote"},"json_unquote"),(0,o.yg)("h3",{id:"description"},"Description"),(0,o.yg)("h4",{id:"syntax"},"Syntax"),(0,o.yg)("p",null,(0,o.yg)("inlineCode",{parentName:"p"},"VARCHAR json_ununquote(VARCHAR)")),(0,o.yg)("p",null,"\u8fd9\u4e2a\u51fd\u6570\u5c06\u53bb\u6389JSON\u503c\u4e2d\u7684\u5f15\u53f7\uff0c\u5e76\u5c06\u7ed3\u679c\u4f5c\u4e3autf8mb4\u5b57\u7b26\u4e32\u8fd4\u56de\u3002\u5982\u679c\u53c2\u6570\u4e3aNULL\uff0c\u5219\u8fd4\u56deNULL\u3002"),(0,o.yg)("p",null,"\u5728\u5b57\u7b26\u4e32\u4e2d\u663e\u793a\u7684\u5982\u4e0b\u8f6c\u4e49\u5e8f\u5217\u5c06\u88ab\u8bc6\u522b\uff0c\u5bf9\u4e8e\u6240\u6709\u5176\u4ed6\u8f6c\u4e49\u5e8f\u5217\uff0c\u53cd\u659c\u6760\u5c06\u88ab\u5ffd\u7565\u3002"),(0,o.yg)("table",null,(0,o.yg)("thead",{parentName:"table"},(0,o.yg)("tr",{parentName:"thead"},(0,o.yg)("th",{parentName:"tr",align:null},"\u8f6c\u4e49\u5e8f\u5217"),(0,o.yg)("th",{parentName:"tr",align:null},"\u5e8f\u5217\u8868\u793a\u7684\u5b57\u7b26"))),(0,o.yg)("tbody",{parentName:"table"},(0,o.yg)("tr",{parentName:"tbody"},(0,o.yg)("td",{parentName:"tr",align:null},'\\"'),(0,o.yg)("td",{parentName:"tr",align:null},'\u53cc\u5f15\u53f7 "')),(0,o.yg)("tr",{parentName:"tbody"},(0,o.yg)("td",{parentName:"tr",align:null},"\\b"),(0,o.yg)("td",{parentName:"tr",align:null},"\u9000\u683c\u5b57\u7b26")),(0,o.yg)("tr",{parentName:"tbody"},(0,o.yg)("td",{parentName:"tr",align:null},"\\f"),(0,o.yg)("td",{parentName:"tr",align:null},"\u6362\u9875\u7b26")),(0,o.yg)("tr",{parentName:"tbody"},(0,o.yg)("td",{parentName:"tr",align:null},"\\n"),(0,o.yg)("td",{parentName:"tr",align:null},"\u6362\u884c\u7b26")),(0,o.yg)("tr",{parentName:"tbody"},(0,o.yg)("td",{parentName:"tr",align:null},"\\r"),(0,o.yg)("td",{parentName:"tr",align:null},"\u56de\u8f66\u7b26")),(0,o.yg)("tr",{parentName:"tbody"},(0,o.yg)("td",{parentName:"tr",align:null},"\\t"),(0,o.yg)("td",{parentName:"tr",align:null},"\u5236\u8868\u7b26")),(0,o.yg)("tr",{parentName:"tbody"},(0,o.yg)("td",{parentName:"tr",align:null},"\\"),(0,o.yg)("td",{parentName:"tr",align:null},"\u53cd\u659c\u6760 \\ ")),(0,o.yg)("tr",{parentName:"tbody"},(0,o.yg)("td",{parentName:"tr",align:null},"\\uxxxx"),(0,o.yg)("td",{parentName:"tr",align:null},"Unicode \u503c XXXX \u7684 UTF-8 \u5b57\u8282")))),(0,o.yg)("h3",{id:"example"},"example"),(0,o.yg)("pre",null,(0,o.yg)("code",{parentName:"pre"},"mysql> SELECT json_unquote('\"doris\"');\n+-------------------------+\n| json_unquote('\"doris\"') |\n+-------------------------+\n| doris                   |\n+-------------------------+\n\nmysql> SELECT json_unquote('[1, 2, 3]');\n+---------------------------+\n| json_unquote('[1, 2, 3]') |\n+---------------------------+\n| [1, 2, 3]                 |\n+---------------------------+\n\n\nmysql> SELECT json_unquote(null);\n+--------------------+\n| json_unquote(NULL) |\n+--------------------+\n| NULL               |\n+--------------------+\n\nmysql> SELECT json_unquote('\"\\\\ttest\"');\n+--------------------------+\n| json_unquote('\"\\ttest\"') |\n+--------------------------+\n|       test                    |\n+--------------------------+\n")),(0,o.yg)("h3",{id:"keywords"},"keywords"),(0,o.yg)("p",null,"json,unquote,json_unquote"))}c.isMDXComponent=!0}}]);