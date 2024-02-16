"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([[53553],{15680:(n,e,t)=>{t.d(e,{xA:()=>p,yg:()=>d});var r=t(96540);function a(n,e,t){return e in n?Object.defineProperty(n,e,{value:t,enumerable:!0,configurable:!0,writable:!0}):n[e]=t,n}function o(n,e){var t=Object.keys(n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(n);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable}))),t.push.apply(t,r)}return t}function l(n){for(var e=1;e<arguments.length;e++){var t=null!=arguments[e]?arguments[e]:{};e%2?o(Object(t),!0).forEach((function(e){a(n,e,t[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(n,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(e){Object.defineProperty(n,e,Object.getOwnPropertyDescriptor(t,e))}))}return n}function u(n,e){if(null==n)return{};var t,r,a=function(n,e){if(null==n)return{};var t,r,a={},o=Object.keys(n);for(r=0;r<o.length;r++)t=o[r],e.indexOf(t)>=0||(a[t]=n[t]);return a}(n,e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(n);for(r=0;r<o.length;r++)t=o[r],e.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(n,t)&&(a[t]=n[t])}return a}var s=r.createContext({}),i=function(n){var e=r.useContext(s),t=e;return n&&(t="function"==typeof n?n(e):l(l({},e),n)),t},p=function(n){var e=i(n.components);return r.createElement(s.Provider,{value:e},n.children)},y="mdxType",c={inlineCode:"code",wrapper:function(n){var e=n.children;return r.createElement(r.Fragment,{},e)}},g=r.forwardRef((function(n,e){var t=n.components,a=n.mdxType,o=n.originalType,s=n.parentName,p=u(n,["components","mdxType","originalType","parentName"]),y=i(t),g=a,d=y["".concat(s,".").concat(g)]||y[g]||c[g]||o;return t?r.createElement(d,l(l({ref:e},p),{},{components:t})):r.createElement(d,l({ref:e},p))}));function d(n,e){var t=arguments,a=e&&e.mdxType;if("string"==typeof n||a){var o=t.length,l=new Array(o);l[0]=g;var u={};for(var s in e)hasOwnProperty.call(e,s)&&(u[s]=e[s]);u.originalType=n,u[y]="string"==typeof n?n:a,l[1]=u;for(var i=2;i<o;i++)l[i]=t[i];return r.createElement.apply(null,l)}return r.createElement.apply(null,t)}g.displayName="MDXCreateElement"},48743:(n,e,t)=>{t.r(e),t.d(e,{assets:()=>s,contentTitle:()=>l,default:()=>c,frontMatter:()=>o,metadata:()=>u,toc:()=>i});var r=t(58168),a=(t(96540),t(15680));const o={title:"JSON_UNQUOTE",language:"zh-CN"},l=void 0,u={unversionedId:"sql-manual/sql-functions/json-functions/json-unquote",id:"version-2.0/sql-manual/sql-functions/json-functions/json-unquote",title:"JSON_UNQUOTE",description:"\x3c!--",source:"@site/i18n/zh-CN/docusaurus-plugin-content-docs/version-2.0/sql-manual/sql-functions/json-functions/json-unquote.md",sourceDirName:"sql-manual/sql-functions/json-functions",slug:"/sql-manual/sql-functions/json-functions/json-unquote",permalink:"/zh-CN/docs/sql-manual/sql-functions/json-functions/json-unquote",draft:!1,tags:[],version:"2.0",frontMatter:{title:"JSON_UNQUOTE",language:"zh-CN"},sidebar:"docs",previous:{title:"JSON_QUOTE",permalink:"/zh-CN/docs/sql-manual/sql-functions/json-functions/json-quote"},next:{title:"JSON_VALID",permalink:"/zh-CN/docs/sql-manual/sql-functions/json-functions/json-valid"}},s={},i=[{value:"json_unquote",id:"json_unquote",level:2},{value:"Description",id:"description",level:3},{value:"Syntax",id:"syntax",level:4},{value:"example",id:"example",level:3},{value:"keywords",id:"keywords",level:3}],p={toc:i},y="wrapper";function c(n){let{components:e,...t}=n;return(0,a.yg)(y,(0,r.A)({},p,t,{components:e,mdxType:"MDXLayout"}),(0,a.yg)("h2",{id:"json_unquote"},"json_unquote"),(0,a.yg)("h3",{id:"description"},"Description"),(0,a.yg)("h4",{id:"syntax"},"Syntax"),(0,a.yg)("p",null,(0,a.yg)("inlineCode",{parentName:"p"},"VARCHAR json_unquote(VARCHAR)")),(0,a.yg)("p",null,"\u8fd9\u4e2a\u51fd\u6570\u5c06\u53bb\u6389JSON\u503c\u4e2d\u7684\u5f15\u53f7\uff0c\u5e76\u5c06\u7ed3\u679c\u4f5c\u4e3autf8mb4\u5b57\u7b26\u4e32\u8fd4\u56de\u3002\u5982\u679c\u53c2\u6570\u4e3aNULL\uff0c\u5219\u8fd4\u56deNULL\u3002"),(0,a.yg)("p",null,"\u5728\u5b57\u7b26\u4e32\u4e2d\u663e\u793a\u7684\u5982\u4e0b\u8f6c\u4e49\u5e8f\u5217\u5c06\u88ab\u8bc6\u522b\uff0c\u5bf9\u4e8e\u6240\u6709\u5176\u4ed6\u8f6c\u4e49\u5e8f\u5217\uff0c\u53cd\u659c\u6760\u5c06\u88ab\u5ffd\u7565\u3002"),(0,a.yg)("table",null,(0,a.yg)("thead",{parentName:"table"},(0,a.yg)("tr",{parentName:"thead"},(0,a.yg)("th",{parentName:"tr",align:null},"\u8f6c\u4e49\u5e8f\u5217"),(0,a.yg)("th",{parentName:"tr",align:null},"\u5e8f\u5217\u8868\u793a\u7684\u5b57\u7b26"))),(0,a.yg)("tbody",{parentName:"table"},(0,a.yg)("tr",{parentName:"tbody"},(0,a.yg)("td",{parentName:"tr",align:null},'\\"'),(0,a.yg)("td",{parentName:"tr",align:null},'\u53cc\u5f15\u53f7 "')),(0,a.yg)("tr",{parentName:"tbody"},(0,a.yg)("td",{parentName:"tr",align:null},"\\b"),(0,a.yg)("td",{parentName:"tr",align:null},"\u9000\u683c\u5b57\u7b26")),(0,a.yg)("tr",{parentName:"tbody"},(0,a.yg)("td",{parentName:"tr",align:null},"\\f"),(0,a.yg)("td",{parentName:"tr",align:null},"\u6362\u9875\u7b26")),(0,a.yg)("tr",{parentName:"tbody"},(0,a.yg)("td",{parentName:"tr",align:null},"\\n"),(0,a.yg)("td",{parentName:"tr",align:null},"\u6362\u884c\u7b26")),(0,a.yg)("tr",{parentName:"tbody"},(0,a.yg)("td",{parentName:"tr",align:null},"\\r"),(0,a.yg)("td",{parentName:"tr",align:null},"\u56de\u8f66\u7b26")),(0,a.yg)("tr",{parentName:"tbody"},(0,a.yg)("td",{parentName:"tr",align:null},"\\t"),(0,a.yg)("td",{parentName:"tr",align:null},"\u5236\u8868\u7b26")),(0,a.yg)("tr",{parentName:"tbody"},(0,a.yg)("td",{parentName:"tr",align:null},"\\"),(0,a.yg)("td",{parentName:"tr",align:null},"\u53cd\u659c\u6760 \\ ")),(0,a.yg)("tr",{parentName:"tbody"},(0,a.yg)("td",{parentName:"tr",align:null},"\\uxxxx"),(0,a.yg)("td",{parentName:"tr",align:null},"Unicode \u503c XXXX \u7684 UTF-8 \u5b57\u8282")))),(0,a.yg)("h3",{id:"example"},"example"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre"},"mysql> SELECT json_unquote('\"doris\"');\n+-------------------------+\n| json_unquote('\"doris\"') |\n+-------------------------+\n| doris                   |\n+-------------------------+\n\nmysql> SELECT json_unquote('[1, 2, 3]');\n+---------------------------+\n| json_unquote('[1, 2, 3]') |\n+---------------------------+\n| [1, 2, 3]                 |\n+---------------------------+\n\n\nmysql> SELECT json_unquote(null);\n+--------------------+\n| json_unquote(NULL) |\n+--------------------+\n| NULL               |\n+--------------------+\n\nmysql> SELECT json_unquote('\"\\\\ttest\"');\n+--------------------------+\n| json_unquote('\"\\ttest\"') |\n+--------------------------+\n|       test                    |\n+--------------------------+\n")),(0,a.yg)("h3",{id:"keywords"},"keywords"),(0,a.yg)("p",null,"json,unquote,json_unquote"))}c.isMDXComponent=!0}}]);